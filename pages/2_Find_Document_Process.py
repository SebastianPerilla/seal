import streamlit as st


st.set_page_config(page_title="Find Document Process", page_icon= r"styles\seal_logo.png", initial_sidebar_state="auto")


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
        
elif process == 'NIE Renewal':
        st.write("""
                    This Process requires the following documents:
                    
                    SEAL has compiled the following documents for you to download:
                    
                    - ✅ Copy of Passport  
                    - ✅ Copy of Residence Permit (NIE/TIE)  
                    - ✅ EX-00 Form  
                    - ✅ Tax Form (Tasa-052)  
                    - ✅ Certificado de Aprovechamiento  
                    - ✅ Academic Transcript  
                    - 🟧 Health Insurance Form  (Upload Here)
                    - ✅ Copy of Health Insurance Card  
                    - ❌ Bank Statements  

                    **YOU NEED TO GET THE BANK STATEMENTS**
                """)
        with open("NIE_Renewal_Documents.zip", "rb") as file:
                btn = st.download_button(
                        label="Download",
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