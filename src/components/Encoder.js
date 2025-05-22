import React, { useState } from 'react';
import AES from 'crypto-js/aes';
import {
  BASE64_CHARS,
  PAD_CHAR,
  EMOJI_ALPHABET,
  PAD_EMOJI
} from './Common';

export default function Encoder() {
  const [message, setMessage] = useState('');
  const [passphrase, setPassphrase] = useState('');
  const [emojiCipher, setEmojiCipher] = useState('');

  const handleEncrypt = () => {
    if (!message) return alert('Enter a message to encrypt.');

    // 1) AES → Base64
    const base64 = AES.encrypt(message, passphrase).toString();

    // 2) Base64 → fixed-emoji alphabet
    const emojis = Array.from(base64)
      .map(ch =>
        ch === PAD_CHAR
          ? PAD_EMOJI
          : EMOJI_ALPHABET[BASE64_CHARS.indexOf(ch)]
      )
      .join('');

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

      <button onClick={handleEncrypt}>
        <span><img src="/lock.png" alt="Lock" /></span>
        Encode Message
      </button>

      {emojiCipher && (
        <>
          <h5>3. Your emoji cipher:</h5>
          <div id="result">{emojiCipher}</div>
          <button onClick={() => navigator.clipboard.writeText(emojiCipher)}>
            Copy Emoji Cipher
          </button>
        </>
      )}
    </div>
  );
}
