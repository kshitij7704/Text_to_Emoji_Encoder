# Text to Emoji Encoder/Decryptor
This project allows users to encode their secret messages into emojis and later decode them using a specific password. The application provides a simple and secure way to share sensitive information using fun and visually appealing emoji characters.

## Features
1. <b>Encode Text</b>: Converts your text into a sequence of emojis.
2. <b>Decode Text</b>: Converts the emoji sequence back to the original text using a password.
3. <b>Password Protection</b>: Ensures that only users with the correct password can decode the message.
4. <b>Copy to Clipboard</b>: Allows users to easily copy the encoded message.
   
## How to Use
### 1. Encode Text
1. <b>Type a Message</b>: Enter the text you want to encode in the provided textarea.
2. <b>Set a Password</b>: Input a password to secure your encoded message.
3. <b>Encode Text</b>: Click the "Encode Text" button. The encoded emojis will appear, and you can copy them to the clipboard.
### 2. Decode Text
1. <b>Paste Encoded Emojis</b>: Enter the emoji sequence you want to decode.
2. <b>Type the Password</b>: Input the password that was used during the encoding process.
3. <b>Decode Emojis</b>: Click the "Decode Text" button to reveal the original message. If the password is incorrect or the message is not found, an error will be displayed.
## File Structure
1. <b>index.html</b>: The main HTML file containing the structure of the application.
2. <b>style.css</b>: The CSS file for styling the application.
3. <b>script.js</b>: The JavaScript file containing the logic for encoding, decoding, and copying the message.
