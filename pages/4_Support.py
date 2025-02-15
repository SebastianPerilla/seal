import streamlit as st


st.set_page_config(page_title="Upload a Document", page_icon= r"styles\seal_logo.png", initial_sidebar_state="auto")


st.write("""
        # Support

        If you have any questions or need support, please feel free to reach out to us through the following channels:

        """)

with st.form(key='support_form'):
    name = st.text_input("Name")
    email = st.text_input("Email")
    issue = st.text_area("Describe your issue")
    submit_button = st.form_submit_button(label='Submit')

    if submit_button:
        st.success("Thank you for reaching out! Our support team will get back to you shortly.")




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