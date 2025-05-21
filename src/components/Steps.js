import React from 'react';

export default function Steps() {
  return (
    <div id="steps">
      <h3>How to Use</h3>
      <ol>
        <li>
          <strong>Choose “Encode”</strong>, enter message &amp; secret key.
        </li>
        <li>
          Click <strong>Encode Message</strong> → get an emoji string.
        </li>
        <li>
          <strong>Copy</strong> and send that emoji cipher to a friend.
        </li>
        <li>
          Friend selects <strong>Decode</strong>, pastes emojis &amp; the key.
        </li>
        <li>
          Click <strong>Decode Message</strong> → see original text.
        </li>
      </ol>
      <p>No storage—just AES encryption ↔ emojis ↔ AES decryption.</p>
    </div>
  );
}
