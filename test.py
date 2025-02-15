from pypdf import PdfReader, PdfWriter
from pypdf.generic import NameObject
import fitz  # PyMuPDF

import streamlit as st
import os



st.title("Testing")

st.write("This is a test to see if the file path is correct")
st.text(f"Current working directory: {os.getcwd()}")


file_path = r"..\inputs\form.pdf"
abs_path = os.path.abspath(file_path)


st.write(f"Looking for file at: {abs_path}")



reader = PdfReader('abs_path')