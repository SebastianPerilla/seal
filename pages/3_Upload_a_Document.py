import json
import os
from pypdf import PdfReader, PdfWriter
from pypdf.generic import NameObject
import fitz  # PyMuPDF
import streamlit as st

# Debug: Print current working directory
print(f"Current working directory: {os.getcwd()}")



# Field mapping for consistency
field_mapping = {
    "passport": "PASAPORTE",
    "first_name": "Nombre",
    "first_last_name": "1er Apellido",
    "second_last_name": "2do Apellido",
    "gender": "Sexo",
    "Lugar": "Location",
    "Pais": "Country",
    "Nacionalidad": "Nationality",
    "Nombre del padre": "Father's Name",
    "Nombre de la madre": "Mother's Name",
    "Domicilio en España": "Address in Spain",
    "CP": "Postal Code",
    "Teléfono móvil": "Mobile Phone",
    "email": "Email",
}

# Streamlit Form
st.title("User Information Form")

# Collect user data
first_name = st.text_input(field_mapping["first_name"])
first_ln = st.text_input(field_mapping["first_last_name"])
second_ln = st.text_input(field_mapping["second_last_name"])
pasaporte = st.text_input(field_mapping["passport"])
gender = st.selectbox(field_mapping["gender"], ["Male", "Female", "Other"])
location = st.text_input(field_mapping["Lugar"])
country = st.text_input(field_mapping["Pais"])
nationality = st.text_input(field_mapping["Nacionalidad"])
father_name = st.text_input(field_mapping["Nombre del padre"])
mother_name = st.text_input(field_mapping["Nombre de la madre"])
address_spain = st.text_input(field_mapping["Domicilio en España"])
postal_code = st.text_input(field_mapping["CP"])
mobile_phone = st.text_input(field_mapping["Teléfono móvil"])
email = st.text_input(field_mapping["email"])

# Store data in a dictionary
user_data = {
    "first_name": first_name,
    "first_last_name": first_ln,
    "second_last_name": second_ln,
    "passport": pasaporte,
    "gender": gender,
    "location": location,
    "country": country,
    "nationality": nationality,
    "father_name": father_name,
    "mother_name": mother_name,
    "address_spain": address_spain,
    "postal_code": postal_code,
    "mobile_phone": mobile_phone,
    "email": email,
}

# Convert to JSON
user_json = json.dumps(user_data, indent=4)

# Save JSON to file
if st.button("Save Data"):
    with open("user_data.json", "w") as f:
        f.write(user_json)
    st.success("Data saved to user_data.json!")

####################################################################

# Verify JSON File Existence
json_path = "user_data.json"
if not os.path.exists(json_path):
    raise FileNotFoundError("Error: user_data.json not found! Please fill and save user details first.")

with open(json_path, "r") as f:
    user_data = json.load(f)

# Verify PDF File Existence
pdf_path = "./inputs/form.pdf"
if not os.path.exists(pdf_path):
    raise FileNotFoundError(f"Error: The file '{pdf_path}' does not exist.")

reader = PdfReader(pdf_path)
writer = PdfWriter()

# Copy all pages from the original PDF
for page in reader.pages:
    writer.add_page(page)

# Copy AcroForm dictionary if present
if "/AcroForm" in reader.trailer["/Root"]:
    writer._root_object.update({
        NameObject("/AcroForm"): reader.trailer["/Root"]["/AcroForm"]
    })

# Debug: Print available form fields
fields = reader.get_fields()
print("\nAvailable Fields in PDF:")
for field_name in fields.keys():
    print(f"- {field_name}")

    
# Field mapping for consistency
field_mapping = {
    "passport": "PASAPORTE",
    "first_name": "Nombre",
    "first_last_name": "1er Apellido",
    "second_last_name": "2do Apellido",
    "gender": "Sexo",
    "Lugar": "Location",
    "Pais": "Country",
    "Nacionalidad": "Nationality",
    "Nombre del padre": "Father's Name",
    "Nombre de la madre": "Mother's Name",
    "Domicilio en España": "Address in Spain",
    "CP": "Postal Code",
    "Teléfono móvil": "Mobile Phone",
    "email": "Email",
}

# Prepare field values dynamically
pdf_field_values = {}
for json_key, pdf_field in field_mapping.items():
    if json_key in user_data:
        pdf_field_values[pdf_field] = user_data[json_key]  # Assign values from JSON

# Debug: Print mapped field values
print("\nMapped Field Values for PDF:")
for key, value in pdf_field_values.items():
    print(f"{key}: {value}")

# Update form fields in the PDF
for page in writer.pages:
    writer.update_page_form_field_values(page, pdf_field_values)

# Set Need Appearances (Ensures form fields display correctly)
writer.set_need_appearances_writer()

# Save the updated PDF
with open("modified.pdf", "wb") as output_stream:
    writer.write(output_stream)

print("\nModified PDF saved as 'modified.pdf'.")

# Open the modified PDF
doc = fitz.open("modified.pdf")

# Iterate over pages and overlay the field text onto the page.
for page in doc:
    for widget in page.widgets():
        if widget.field_value:
            page.insert_text(
                (widget.rect.x0 + 50, widget.rect.y0 + 15),  # Adjust for better visibility
                widget.field_value,
                fontsize=12,
                color=(0, 0, 0)
            )

# Save the flattened PDF (form fields become permanent text)
doc.save("./outputs/flattened.pdf")
print("Flattened PDF saved as 'flattened.pdf'.")
