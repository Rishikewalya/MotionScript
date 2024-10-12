from flask import Flask, request

app = Flask(__name__)

# Importing necessary libraries
import cv2
import numpy as np
from keras.models import load_model
import time
from gtts import gTTS
import os

def signtovoice():
    class_names = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
               'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
               'nothing', 'space', 'del']

    model = load_model('./MotionScript.h5') 

    roi_x, roi_y, roi_w, roi_h = 200, 100, 250, 250

    cap = cv2.VideoCapture(0)

    recognized_text = ""
    current_letter_start_time = time.time()
    display_letter_duration = 4.0
    del_start_time = None
    no_action_start_time = time.time()  

    while True:
        ret, frame = cap.read()

        if not ret:
            print("Error: Unable to capture a frame from the webcam.")
            break

        roi = frame[roi_y:roi_y + roi_h, roi_x:roi_x + roi_w]

        cv2.rectangle(frame, (roi_x, roi_y), (roi_x + roi_w, roi_y + roi_h), (0, 255, 0), 2)

        img = cv2.resize(roi, (64, 64))
        img = img / 255.0
        img = np.expand_dims(img, axis=0)

        prediction = model.predict(img)
        predicted_class = np.argmax(prediction)
        predicted_letter = class_names[predicted_class]

        elapsed_time = time.time() - current_letter_start_time

        if elapsed_time >= display_letter_duration:
            current_letter_start_time = time.time()

            if predicted_letter == 'space':
                recognized_text += ' '
                no_action_start_time = time.time() 
            elif predicted_letter == 'del':
                if del_start_time is None:
                    del_start_time = time.time()
                else:
                    elapsed_del_time = time.time() - del_start_time
                    if elapsed_del_time >= 2 and elapsed_del_time < 5:
                        recognized_text = recognized_text[:-1]
                    elif elapsed_del_time >= 5:
                        recognized_text = ""
                no_action_start_time = time.time() 
            elif predicted_letter != 'nothing':
                recognized_text += predicted_letter
                del_start_time = None
                no_action_start_time = time.time()  

        
            if time.time() - no_action_start_time >= 20:
                tts = gTTS(text=recognized_text, lang='en')
                tts.save("output.mp3")

                
                os.system("afplay output.mp3")

                no_action_start_time = time.time()  

        cv2.putText(frame, predicted_letter, (roi_x, roi_y - 10), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 0, 255), 2)
        cv2.putText(frame, recognized_text, (20, 40), cv2.FONT_HERSHEY_SIMPLEX, 1, (255, 0, 0), 2)

        cv2.imshow('Sign Language Gesture Recognition', frame)

        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

    cap.release()
    cv2.destroyAllWindows()

# Define a route to handle the video frames
@app.route('/process_frame', methods=['GET'])
def process_frame():
    # Receive the video frame data from the request
    print("idhar backend to aaya hai")
    signtovoice()
    return "hello world"

# @app.route('/demo', methods=['GET'])
# def demo():
#     print("nikal")
#     return {"empty":"empty"}

# if __name__ == '__main__':
#     app.run(debug=True)
if __name__ == '__main__':
    app.run(host='192.168.29.224', port=5000, debug=True)

