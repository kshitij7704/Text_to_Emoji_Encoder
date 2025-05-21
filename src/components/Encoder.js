import React, { useState } from 'react';
import AES from 'crypto-js/aes';

export default function Encoder() {
  const [message, setMessage] = useState('');
  const [passphrase, setPassphrase] = useState('');
  const [emojiCipher, setEmojiCipher] = useState('');

  const handleEncrypt = () => {
    if (!message) return alert('Enter a message to encrypt.');
    // 1) AES → Base64
    const base64 = AES.encrypt(message, passphrase).toString();

    // 2) Map each Base64 char to emoji U+1F600 plus charCode
    const emojis = Array.from(base64).map(c =>
      String.fromCodePoint(0x1f600 + c.charCodeAt(0))
    ).join('');

    setEmojiCipher(emojis);
  };

  return (
    <div id="encryption">
      <h5>1. Enter your message</h5>
      <textarea
        value={message}
        onChange={e => setMessage(e.target.value)}
        placeholder="Write your message to encode"
      />

      <h5>2. Enter your secret key</h5>
      <input
        type="password"
        value={passphrase}
        onChange={e => setPassphrase(e.target.value)}
        placeholder="Secret key"
      />

      <button id="encrypt-btn" onClick={handleEncrypt}>
        <span>
          <img src="/lock.png" alt="Lock" />
        </span>
        Encode Message
      </button>

      {emojiCipher && (
        <>
          <h5>3. Your encoded (emoji) text:</h5>
          <div
            id="result"
            style={{
              whiteSpace: 'pre-wrap',
              backgroundColor: '#16213e',
              padding: '15px',
              borderRadius: '10px',
              marginTop: '10px',
              color: '#fff'
            }}
          >
            {emojiCipher}
          </div>
          <button
            style={{ marginTop: '10px' }}
            onClick={() =>
              navigator.clipboard.writeText(emojiCipher)
            }
          >
            Copy Emoji Cipher
          </button>
        </>
      )}
    </div>
  );
}
