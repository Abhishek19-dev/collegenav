# Python program to print the multiplication table of a number

# def print_multiplication_table(number):
#     print(f"Multiplication Table for {number}:")

#     for i in range(1, 11):
#         result = number * i
#         print(f"{number} x {i} = {result}")

# if __name__ == "__main__":
#     # Print the multiplication table for the number 12
#     print_multiplication_table(12)

# print("hello abhishek")

import speech_recognition as sr

def speech_to_text():
    # Initialize the recognizer
    recognizer = sr.Recognizer()

    # Use the default microphone as the source
    with sr.Microphone() as source:
        # print("Say something:")
        recognizer.adjust_for_ambient_noise(source)  # Adjust for ambient noise
        audio = recognizer.listen(source, timeout=5)  # Listen to the audio for 5 seconds (adjust as needed)

    try:
        # print("Transcribing...")
        text = recognizer.recognize_google(audio)
        # print(f"Text: {text}")
        print(f"{text}")
    except sr.UnknownValueError:
        print("Google Web Speech API could not understand the audio.")
    except sr.RequestError as e:
        print(f"Could not request results from Google Web Speech API; {e}")

if __name__ == "__main__":
    speech_to_text()
