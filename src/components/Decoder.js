import React, { useState } from 'react';
import AES from 'crypto-js/aes';
import Utf8 from 'crypto-js/enc-utf8';

export default function Decoder() {
  const [emojiInput, setEmojiInput] = useState('');
  const [passphrase, setPassphrase] = useState('');
  const [plaintext, setPlaintext] = useState('');
  const [error, setError] = useState('');

  const handleDecrypt = () => {
    // Split the emoji string into an array of codepoints
    const arr = Array.from(emojiInput);
    if (!arr.length) {
      setError('Paste some emoji cipher first.');
      setPlaintext('');
      return;
    }

    // Reverse mapping: emoji → Base64 char by subtracting U+1F600 offset
    let base64 = '';
    for (let e of arr) {
      const code = e.codePointAt(0) - 0x1f600;
      base64 += String.fromCharCode(code);
    }

    try {
      // AES-decrypt
      const bytes = AES.decrypt(base64, passphrase);
      const pt = bytes.toString(Utf8);
      if (!pt) throw new Error();
      setPlaintext(pt);
      setError('');
    } catch {
      setError('Wrong key or malformed input.');
      setPlaintext('');
    }
  };

  return (
    <div id="decryption">
      <h5>1. Paste your encoded (emoji) text</h5>
      <textarea
        value={emojiInput}
        onChange={e => setEmojiInput(e.target.value)}
        placeholder="Paste emoji cipher here"
        rows={4}
      />

      <h5>2. Enter your secret key</h5>
      <input
        type="password"
        value={passphrase}
        onChange={e => setPassphrase(e.target.value)}
        placeholder="Secret key"
      />

      <button id="decrypt-btn" onClick={handleDecrypt}>
        <span>
          <img src="/unlock.png" alt="Unlock" />
        </span>
        Decode Message
      </button>

      {plaintext && (
        <>
          <h5>Decoded Message:</h5>
          <textarea
            readOnly
            value={plaintext}
            rows={4}
            id="result"
            style={{
              backgroundColor: '#16213e',
              color: '#eee',
              padding: '15px',
              borderRadius: '10px',
              marginTop: '10px'
            }}
          />
        </>
      )}

      {error && (
        <div
          id="wrongResult"
          style={{
            color: '#e94560',
            backgroundColor: '#16213e',
            padding: '15px',
            borderRadius: '10px',
            marginTop: '10px'
          }}
        >
          {error}
        </div>
      )}
    </div>
  );
}
