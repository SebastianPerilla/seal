import cv2
import pytesseract
import numpy as np
from pdf2image import convert_from_path
import os

# Set Tesseract path if needed (Windows example)
# pytesseract.pytesseract.tesseract_cmd = r"C:\Program Files\Tesseract-OCR\tesseract.exe"

# Set Poppler path if on Windows
POPPLER_PATH = None  # Example: r"C:\path\to\poppler\bin"

def convert_pdf_to_image(pdf_path):
    """ Convert first page of PDF to an image """
    images = convert_from_path(pdf_path, dpi=300, poppler_path=POPPLER_PATH)
    if not images:
        print("Error: Could not convert PDF to image.")
        exit(1)
    
    # Save the first page as an image
    image_path = "temp_image.png"
    images[0].save(image_path, "PNG")
    return image_path

def preprocess_image(image_path):
    """ Preprocess image for text detection """
    image = cv2.imread(image_path)
    if image is None:
        print(f"Error: Could not load image '{image_path}'. Check the file path.")
        exit(1)

    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    
    # Apply adaptive thresholding to enhance text
    processed = cv2.adaptiveThreshold(gray, 255, cv2.ADAPTIVE_THRESH_GAUSSIAN_C, cv2.THRESH_BINARY, 11, 2)
    
    return image, processed

def detect_text_fields(image, processed):
    """ Detect text fields and draw bounding boxes """
    contours, _ = cv2.findContours(processed, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    
    fields = []
    for contour in contours:
        x, y, w, h = cv2.boundingRect(contour)
        
        # Filter out very small boxes (noise) based on a threshold
        if w > 30 and h > 10: 
            fields.append((x, y, w, h))
    
    return fields

def extract_text(image, fields):
    """ Extract text from detected fields """
    extracted_data = []
    for (x, y, w, h) in fields:
        roi = image[y:y+h, x:x+w]  # Extract region of interest
        text = pytesseract.image_to_string(roi, config='--psm 11')  # PSM 6 treats it as a block of text
        extracted_data.append((text.strip(), (x, y, w, h)))
    
    return extracted_data

def draw_boxes(image, extracted_data):
    """ Draw bounding boxes and label text on image """
    for text, (x, y, w, h) in extracted_data:
        cv2.rectangle(image, (x, y), (x + w, y + h), (0, 255, 0), 2)  # Green box
        
        # Put extracted text label above each box
        label = text if text else "?"
        cv2.putText(image, label, (x, y - 5), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (255, 0, 0), 2, cv2.LINE_AA)

    return image

def process_document(file_path):
    """ Complete pipeline: Convert PDF if needed, process image, extract text """
    # Check if the input is a PDF
    if file_path.lower().endswith(".pdf"):
        print("Converting PDF to image...")
        image_path = convert_pdf_to_image(file_path)
    else:
        image_path = file_path

    image, processed = preprocess_image(image_path)
    fields = detect_text_fields(image, processed)
    extracted_data = extract_text(image, fields)
    image_with_boxes = draw_boxes(image, extracted_data)

    # Save and show result
    output_path = "output_detected.png"
    cv2.imwrite(output_path, image_with_boxes)
    cv2.imshow("Detected Text Fields", image_with_boxes)
    cv2.waitKey(0)
    cv2.destroyAllWindows()

    # Cleanup temporary image if converted from PDF
    if file_path.lower().endswith(".pdf"):
        os.remove(image_path)

    return extracted_data, output_path

if __name__ == "__main__":
    file_path = "/home/sebas/Desktop/dev/seal/inputs/tester.pdf"  # Change this to your image or PDF file
    results, output_path = process_document(file_path)
    
    print("\nExtracted Text Fields:")
    for text, bbox in results:
        print(f"Text: {text} | Bounding Box: {bbox}")

    print(f"\nProcessed image saved as: {output_path}")
