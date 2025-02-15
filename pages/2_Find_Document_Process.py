import streamlit as st


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

