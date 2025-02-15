import streamlit as st



st.markdown(
    """
    <h1 style='text-align: center;'>Welcome to SEAL</h1>

    <p style='text-align: center;'>Enter your personal information once, and SEAL will securely store them for instant autofill on your documents</p>

    """,
    unsafe_allow_html=True
)


# st.title("SEAL VAULT")

# st.text(""" Enter your personal information once, and SEAL will securely store them for instant autofill on your documents.""")


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
st.subheader("User Information Form")

# Collect user data in columns
col1, col2 = st.columns(2)

with col1:
        first_name = st.text_input(field_mapping["first_name"])
        first_ln = st.text_input(field_mapping["first_last_name"])
        second_ln = st.text_input(field_mapping["second_last_name"])
        pasaporte = st.text_input(field_mapping["passport"])
        gender = st.selectbox(field_mapping["gender"], ["Male", "Female", "Other"])
        location = st.text_input(field_mapping["Lugar"])
        country = st.text_input(field_mapping["Pais"])

with col2:
        nationality = st.text_input(field_mapping["Nacionalidad"])
        father_name = st.text_input(field_mapping["Nombre del padre"])
        mother_name = st.text_input(field_mapping["Nombre de la madre"])
        address_spain = st.text_input(field_mapping["Domicilio en España"])
        postal_code = st.text_input(field_mapping["CP"])
        mobile_phone = st.text_input(field_mapping["Teléfono móvil"])
        email = st.text_input(field_mapping["email"])

# Add space between form and file uploader
st.markdown("<br>", unsafe_allow_html=True)  # Adjust number of <br> as needed

uploaded_files = st.file_uploader("Drag and drop your documents here", accept_multiple_files=True)

if uploaded_files:
        for uploaded_file in uploaded_files:
                st.write(f"Uploaded file: {uploaded_file.name}")

## Machine Learning part to detect which documents are filled in 