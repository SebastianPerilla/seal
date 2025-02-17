import streamlit as st

# Set page configuration
st.set_page_config(page_title="Find Document Process", page_icon="./styles/seal_logo.png", layout="wide", initial_sidebar_state="expanded")

# Custom CSS for styling
st.markdown(
    """
    <style>
        .center-text { text-align: center; }
        .highlight { font-size: 18px; font-weight: bold; color: #FF4B4B; }
        .process-box { border: 2px solid #7B84CD; padding: 20px; border-radius: 10px; }
        .upload-box { border: 2px dashed #7B84CD; padding: 15px; text-align: center; border-radius: 10px; }
        .file-list { padding: 10px; background-color: #f8f8f8; border-radius: 5px; }
    </style>
    """,
    unsafe_allow_html=True
)

# Page Title
st.markdown("<h1 class='center-text'>Find Your Document Process</h1>", unsafe_allow_html=True)
st.markdown("<p class='center-text'>Select a process and get the required documents.</p>", unsafe_allow_html=True)

st.markdown("<hr>", unsafe_allow_html=True)

# Process Selection
process = st.selectbox(
    "🔍 Choose a Process:",
    ('Select a Document Process', 'NIE Renewal', 'Authorization to Return', 'City Hall Registration')
)

# Process Description
process_descriptions = {
    "NIE Renewal": "Renew your NIE (Foreigner Identification Number) by following the required documentation process.",
    "Authorization to Return": "Obtain an Authorization to Return permit for re-entry after traveling abroad.",
    "City Hall Registration": "Register your residence with the City Hall for local administrative purposes."
}

if process in process_descriptions:
    st.info(process_descriptions[process])

st.markdown("<hr>", unsafe_allow_html=True)

# Process Logic
if process == "Select a Document Process":
    st.write("""
        **Currently available document processes:**
        - NIE Renewal
        - Authorization to Return
        - City Hall Registration
    """)

elif process == "NIE Renewal":
    # Health Insurance Form Requirement
    st.warning("📄 Health Insurance Form is required for this process.")
    uploaded_file = st.file_uploader("Upload Health Insurance Form (PDF)", type=['pdf'])

    if uploaded_file:
        st.success(f"✅ {uploaded_file.name} uploaded successfully!")
    
#     # Document Checklist
#     st.markdown("### 📋 Required Documents")
#     checklist = {
#         # " Copy of Passport": True,
#         # " Copy of Residence Permit (NIE/TIE)": True,
#         # " EX-00 Form": True,
#         # " Tax Form (Tasa-052)": True,
#         # " Certificado de Aprovechamiento": True,
#         # " Academic Transcript": True,
#         " Health Insurance Form": bool(uploaded_file),
#         # " Copy of Health Insurance Card": True,
#         # " Bank Statements": False
#     }

#     for item, completed in checklist.items():
#         status = "✅" if completed else "❌"
#         st.write(f"{status} {item}")

    # Download Button
    if uploaded_file:
        st.markdown("### 📂 Download Your Documents")
        with open("NIE_Renewal_Documents.zip", "rb") as file:
            st.download_button(
                label="📥 Download All Required Documents",
                data=file,
                file_name="NIE_Renewal_Documents.zip",
                mime="application/zip"
            )

elif process == "Authorization to Return":
    st.markdown("### 🛂 Authorization to Return")
    st.write("Upload your documents to proceed with the process.")

elif process == "City Hall Registration":
    st.markdown("### 🏛 City Hall Registration")
    st.write("Follow the instructions to complete your registration.")

# Sidebar Help
with st.sidebar:
    st.markdown("💬 **Need Help?**")
    st.write("Contact our support team for assistance.")
    if st.button("Start Live Chat"):
        st.warning("Live chat is coming soon!")

# Footer
st.markdown("<hr>", unsafe_allow_html=True)
st.markdown("<p class='center-text'>© 2025 SEAL - Secure Document Automation</p>", unsafe_allow_html=True)
