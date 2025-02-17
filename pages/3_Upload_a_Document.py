import json
import os
import streamlit as st

st.set_page_config(page_title="Upload a Document", page_icon= "./styles/seal_logo.png", initial_sidebar_state="auto")

st.markdown(
    """
    <h1 style='text-align: center;'>SEAL AUTOFILL</h1>

    <p style='text-align: center;'></p>

    """,
    unsafe_allow_html=True
)

st.subheader("Drop files for automatic filling")

# File uploader
uploaded_files = st.file_uploader("Upload from your computer", accept_multiple_files=True)

if uploaded_files:
        for uploaded_file in uploaded_files:
                st.write(f"Uploaded file: {uploaded_file.name}")




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