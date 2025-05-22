import React, { useState } from 'react';
import AES from 'crypto-js/aes';
import Utf8 from 'crypto-js/enc-utf8';
import {
  BASE64_CHARS,
  PAD_CHAR,
  EMOJI_ALPHABET,
  PAD_EMOJI
} from './Common';

export default function Decoder() {
  const [emojiInput, setEmojiInput] = useState('');
  const [passphrase, setPassphrase] = useState('');
  const [plaintext, setPlaintext] = useState('');
  const [error, setError] = useState('');

  const handleDecrypt = () => {
    if (!emojiInput) {
      setError('Paste some emoji cipher first.');
      setPlaintext('');
      return;
    }

    // 1) fixed-emoji → Base64
    const base64 = Array.from(emojiInput)
      .map(e =>
        e === PAD_EMOJI
          ? PAD_CHAR
          : BASE64_CHARS[EMOJI_ALPHABET.indexOf(e)]
      )
      .join('');

    // 2) AES-decrypt
    try {
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
      <h5>1. Paste your emoji cipher</h5>
      <textarea
        value={emojiInput}
        onChange={e => setEmojiInput(e.target.value)}
        placeholder="Paste emojis here to decode"
        rows={4}
      />

      <h5>2. Enter your secret key</h5>
      <input
        type="password"
        value={passphrase}
        onChange={e => setPassphrase(e.target.value)}
        placeholder="Secret key"
      />

      <button onClick={handleDecrypt}>
        <span><img src="/unlock.png" alt="Unlock" /></span>
        Decode Message
      </button>

      {plaintext && (
        <>
          <h5>Decoded Message:</h5>
          <textarea readOnly value={plaintext} rows={4} id="result" />
        </>
      )}
      {error && <div id="wrongResult">{error}</div>}
    </div>
  );
}
