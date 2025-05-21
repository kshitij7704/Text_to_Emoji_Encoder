# Text-Emoji Cipher

**Text-Emoji Cipher** is a React-based web application that allows users to securely encrypt and decrypt messages using AES encryption and an emoji-based representation. Share your secrets as fun emoji strings and have recipients decode them with the same secret key—no accounts, no storage.

---

## Features

- **AES Encryption:** Secure your message with industry-standard AES.
- **Emoji Cipher:** Encrypted Base64 data is mapped to emojis, making it both fun and unreadable without the key.
- **Stateless:** No server or database—encryption and decryption happen entirely in the browser.
- **Copy & Share:** One-click copy of the emoji cipher for easy sharing.
- **Responsive UI:** Modern, dark-themed interface that works on desktop and mobile.
- **Clear Instructions:** Built-in “How to Use” guide for first-time users.
- **Header & Footer:** Branded with your name and link to your personal website.

---

## Live Demo

Check out the deployed app at:  
https://<your-username>.github.io/<repo-name>

---

## Screenshots

![Encode Screen](./assets/encode-screenshot.png)  
![Decode Screen](./assets/decode-screenshot.png)  

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/kshitij7704/Text_Emoji_Encoder.git
   cd Text_Emoji_Encoder
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run locally:
   ```bash
   npm start
   ```

---

## Project Structure

```
text-emoji-encoder/
├── public/
│   ├── index.html
│   ├── lock.png
│   ├── unlock.png
│   └── arrow.png
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Steps.jsx
│   │   ├── Encoder.jsx
│   │   └── Decoder.jsx
│   ├── App.jsx
│   ├── index.js
│   └── style.css
├── package.json
└── README.md
```

---

## Usage

1. **Encode:**
   - Select the **Encode** tab.
   - Enter your message and secret key.
   - Click **Encode Message** to generate the emoji cipher.
   - Click **Copy Emoji Cipher** and share it.

2. **Decode:**
   - Select the **Decode** tab.
   - Paste the emoji cipher and enter the same secret key.
   - Click **Decode Message** to reveal the original text.

---

## Deployment
Site deplpoyed on Netlify: URL

---

## Technologies

- React
- Crypto-JS (AES)
- JavaScript (ES6+)
- HTML5 & CSS3
- Poppins Font from Google Fonts

---

## Author

**Kshitij Kashyap**  
[https://your-personal-website.com](https://your-personal-website.com)
