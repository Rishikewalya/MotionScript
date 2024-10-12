import streamlit as st
import requests

# Define your backend URL
backend_url = 'http://192.168.29.224:5000/process_frame'

st.title('Sign Language Gesture Recognition')

# Function to trigger sign to voice conversion
def trigger_sign_to_voice():
    response = requests.get(backend_url)
    if response.status_code == 200:
        st.success('Sign language gesture recognized and converted to voice successfully.')
    else:
        st.error('Failed to recognize sign language.')

# First section: Motionscript title and profile
st.sidebar.title('MotionScript')
st.sidebar.image('./video1.jpg', width=40)

# Second section: Description
show_description = st.checkbox('Show Description')
if show_description:
    st.markdown("""
    Motionscript is an app that helps you convert sign language gestures into spoken words. 
    It provides a user-friendly interface for capturing sign language gestures, converting them into text, 
    and providing voice playback of the converted text.
    """)

# Search bar
search_query = st.text_input('Search...', value='')
search_button = st.button('Search')

# Demo video on Motion Script
st.subheader('Demo Video On Motion Script')
# Start a horizontal layout
col1, col2, col3 = st.columns(3)

# Display the images in a horizontal row
with col1:
    st.image('./video3.jpg', width=200)

with col2:
    st.image('./video3.jpg', width=200)

with col3:
    st.image('./video3.jpg', width=200)

# Display the subheader
st.subheader('Features')

# Start a horizontal layout
col1, col2, col3 = st.columns(3)

# Single big image - Learn about deaf community
with col1:
    st.image('./video2.jpg', width=200)
    st.write('Learn about deaf community')

# Sign to Voice converter
with col2:
    st.image('./video2.jpg', width=200)
    if st.button('Sign to Voice converter'):
        trigger_sign_to_voice()

# Learn sign language
with col3:
    st.image('./video2.jpg', width=200)
    st.write('Learn sign language')

# Text to Sign language (since it's alone, it will span the full width)
# st.image('./video2.jpg', width=200)
# st.write('Text to Sign language')

# Navbar
st.sidebar.markdown('---')
st.sidebar.markdown('Navigation')
navigation_options = ['Home', 'Notifications', 'Settings', 'More']
selected_option = st.sidebar.radio('Select option', navigation_options)

# Create account form
if selected_option == 'Create Account':
    email = st.text_input('Email')
    password = st.text_input('Password', type='password')
    create_account_button = st.button('Create Account')
    if create_account_button:
        st.write('Creating account with email:', email, 'and password:', password)
        # You can add logic to handle account creation here

# You can add more sections and elements as per your requirement
