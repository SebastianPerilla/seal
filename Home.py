import streamlit as st
import json
import base64
from PIL import Image



st.set_page_config(page_title="Home", page_icon= "styles/seal_logo.png", initial_sidebar_state="auto", layout="wide")


# Open image manually
image_path = "styles/dashboard.png"
with open(image_path, "rb") as img_file:
    image = Image.open(img_file)
    st.image(image, use_container_width=True)

## Tabs

# Home
# Information Upload
# Document Process Search
# Document Drop Off
# Contact Information


# Sidebar Help
with st.sidebar:
    st.markdown("💬 **Need Help?**")
    st.write("Contact our support team for assistance.")
    if st.button("Start Live Chat"):
        st.warning("Live chat is coming soon!")

# Footer
st.markdown("<hr>", unsafe_allow_html=True)
st.markdown("<p class='center-text'>© 2025 SEAL - Secure Document Automation</p>", unsafe_allow_html=True)