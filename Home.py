import streamlit as st
import json
import base64


st.set_page_config(page_title="Home", page_icon= r"styles\seal_logo.png", initial_sidebar_state="auto", layout="wide")



# Display image with full width
st.image("../styles/dashboard.png", use_container_width=True)

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