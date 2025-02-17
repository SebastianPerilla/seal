import streamlit as st


st.set_page_config(page_title="Find Document Process", page_icon= r"styles\seal_logo.png", initial_sidebar_state="auto")


health_insurance_form = 0
check = '✅'
need = "🟧"

process = st.selectbox(
        "Choose the Process",
        ('Select a Document Process','NIE Renewal', 'Authorization to Return', 'City Hall Registration')
)

if process == "Select a Document Process":
        st.write("""
                 Document processes currently available: 
                 - NIE Renewal
                 - Authorization to Return
                 - City Hall Registration
                 """)
        
elif process == 'NIE Renewal' and health_insurance_form == 0:
        
        health_insurance_form = 0  # Initial condition
        need = "🟧"  # Initial state indicating missing document
        
        if health_insurance_form == 0:
                
                st.warning("Please upload the Health Insurance Form to proceed.")

                uploaded_file = st.file_uploader(" ", type=['pdf'])

                # Update the `need` variable if a file is uploaded
                if uploaded_file:
                        health_insurance_form = 1
                        need = "✅"
                        st.success("Health Insurance Form uploaded successfully!")

        st.markdown("<br>", unsafe_allow_html=True) 

        # Display the document checklist dynamically
        st.write(f"""
                This Process requires the following documents:
                
                SEAL has compiled the following documents for you to download:
                
                - ✅ Copy of Passport  
                - ✅ Copy of Residence Permit (NIE/TIE)  
                - ✅ EX-00 Form  
                - ✅ Tax Form (Tasa-052)  
                - ✅ Certificado de Aprovechamiento  
                - ✅ Academic Transcript  
                - {need} Health Insurance Form
                - ✅ Copy of Health Insurance Card  
                - ❌ Bank Statements  

                **YOU NEED TO GET THE BANK STATEMENTS**
                """)
        
        
        if health_insurance_form == 1:
                st.write("Click the button below to download your documents.")

                with st.expander("Download Documents 📂"):
        
                        st.write("Your documents are ready for download.")
                        with open("NIE_Renewal_Documents.zip", "rb") as file:
                                st.download_button(
                                label="📥 Download ZIP",
                                data=file,
                                file_name="NIE_Renewal_Documents.zip",
                                mime="application/zip"
                                )

                
elif process == 'Authorization to Return':
        st.write("You selected: Authorization to Return")
elif process == 'City Hall Registration':
        st.write("You selected: City Hall Registration")
else:
        "Please select a Valid process"




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