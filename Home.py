import streamlit as st
import json
import base64



st.set_page_config(page_title="Home", page_icon= r"styles\seal_logo.png", initial_sidebar_state="auto")

# Streamlit Form
st.title("Choose the Documentation Process to Complete")

# st.selectbox("Choose the Process", ('NIE Renewal', 'Authorization to Return', 'City Hall Registration'))

st.text("""
        SEAL: Smart, Secure, and Seamless Document Automation
        SEAL is an AI-powered, blockchain-secured platform that automates document processing by securely storing personal data and enabling instant autofill across multiple forms. Designed to save time and enhance data security, SEAL eliminates the need for repetitive manual entry while ensuring that users have full control over their personal information.

        💡 Key Features:
        ✅ SEAL Autofill – Instantly fills out forms with accurate, stored data.
        ✅ SEAL Vault – Securely stores and encrypts personal documents.
        ✅ SEAL API – Seamlessly integrates with existing systems for automated processing.

        🔒 Why SEAL?

        Save Hours of tedious data entry.
        Reduce Errors in official documents.
        Protect Your Data with blockchain security.
        Simplify University & Visa Forms effortlessly.
        🚀 Transform the way you handle personal data – with SEAL!'        
        """)





## Tabs

# Home
# Information Upload
# Document Process Search
# Document Drop Off
# Contact Information