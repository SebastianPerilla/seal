import streamlit as st

st.set_page_config(page_title="My Information", page_icon= r"styles\seal_logo.png", initial_sidebar_state="auto")


st.markdown(
    """
    <h1 style='text-align: center;'>Welcome to SEAL</h1>

    <p style='text-align: center;'>Enter your personal information once, and SEAL will securely store them for instant autofill on your documents</p>

    """,
    unsafe_allow_html=True
)


# # st.title("SEAL VAULT")

# # st.text(""" Enter your personal information once, and SEAL will securely store them for instant autofill on your documents.""")


# # Add space between form and file uploader
# st.markdown("<br>", unsafe_allow_html=True)  # Adjust number of <br> as needed


# # Add a subheader for the file uploader
# st.subheader("Drag and Drop Your Documents Here")

# # File uploader
# uploaded_files = st.file_uploader("Upload from your computer", accept_multiple_files=True)

# if uploaded_files:
#         for uploaded_file in uploaded_files:
#                 st.write(f"Uploaded file: {uploaded_file.name}")

# ## Future Checklist of Documents Automatically Scanned and Checked for

# # Create checkboxes for each document
# passport = st.checkbox("Passport")
# id_card = st.checkbox("ID Card")
# health_insurance = st.checkbox("Health Insurance Form")

# ## Machine Learning part to detect which documents are filled in 


# Create tabs for subpages
tab1, tab2 = st.tabs(["📄 Manual Information", "📊 Upload Documents"])

with tab1:
        # st.header("📄 Input your docs")
        st.subheader("User Information Form")

        # Collect user data in columns
        col1, col2 = st.columns(2)

        with col1:
                first_name = st.text_input("First Name")
                first_ln = st.text_input("First Last Name")
                second_ln = st.text_input("Second Last Name (if applicable)")
                passport_number = st.text_input("Passport Number")
                gender = st.selectbox("Gender", ["Male", "Female", "Other"])
                city_of_birth = st.text_input("City of Birth")
                country_of_birth = st.text_input("Country of Birth")

        with col2:
                nationality = st.text_input("Nationality")
                date_of_birth = st.text_input("Date of Birth")
                civil_status = st.selectbox("Civil Status", ["Single", "Married", "Widowed", "Divorced", "Separated"])
                address_spain = st.text_input("Current Address")
                postal_code = st.text_input("Postal Code")
                mobile_phone = st.text_input("Mobile Phone")
                email = st.text_input("Email")

# Tab 2: Upload Documents
with tab2:
        
        with st.container():
                
                # Add a subheader for the file uploader
                st.subheader("Drag and Drop Your Documents Here")

                # File uploader
                uploaded_files = st.file_uploader("Upload from your computer", accept_multiple_files=True)

                if uploaded_files:
                        for uploaded_file in uploaded_files:
                                st.write(f"📂 Uploaded file: {uploaded_file.name}")

                # ## Future Checklist of Documents Automatically Scanned and Checked for
                # st.subheader("✅ Future Checklist of Documents")

                # Initialize session state for checkboxes if they don't exist
                if "passport" not in st.session_state:
                        st.session_state.passport = False
                if "id_card" not in st.session_state:
                        st.session_state.id_card = False
                if "health_insurance" not in st.session_state:
                        st.session_state.health_insurance = False

                # Function to update session state when checkboxes change
                def update_state(key):
                        st.session_state[key] = not st.session_state[key]

                # Create checkboxes with session state persistence
                passport = st.checkbox("Passport", value=st.session_state.passport, on_change=update_state, args=("passport",))
                id_card = st.checkbox("ID Card", value=st.session_state.id_card, on_change=update_state, args=("id_card",))
                health_insurance = st.checkbox("Health Insurance Form", value=st.session_state.health_insurance, on_change=update_state, args=("health_insurance",))

                ## Machine Learning part to detect which documents are filled in (Placeholder)
                st.write("🔍 AI will scan documents and verify if they are correctly uploaded.")
# with tab3:
#     st.header("⚙️ Settings")
#     st.write("Manage your preferences.")




### Live Chat Icon

# Inject custom CSS & HTML for a floating chat icon
st.markdown(
    """
    <style>
        .chat-button {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background-color: #7B84CD; 
            color: white;
            border: none;
            border-radius: 50%;
            width: 60px;
            height: 60px;
            font-size: 30px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 2px 2px 10px rgba(0,0,0,0.3);
        }
        .chat-button:hover {
            background-color: #6CE2D6;
        }
    </style>
    <button class="chat-button" onclick="alert('Live chat is coming soon!')">💬</button>
    """,
    unsafe_allow_html=True
)