// Shared constants for both Encoder & Decoder
export const BASE64_CHARS =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
export const PAD_CHAR = '=';

// 64 single-codepoint emojis starting at U+1F600 (all platforms support these)
export const EMOJI_ALPHABET = Array.from(
  { length: 64 },
  (_, i) => String.fromCodePoint(0x1f600 + i)
);

// A single emoji for the '=' padding character
export const PAD_EMOJI = '🚀';
