import React, { useState } from 'react';
import Header from './components/Header';
import Steps from './components/Steps';
import Encoder from './components/Encoder';
import Decoder from './components/Decoder';
import Footer from './components/Footer';
import './style.css';

export default function App() {
  const [mode, setMode] = useState('encode');

  return (
    <>
      <Header />

      <div id="content-wrapper">
        {/* Left column: steps */}
        <aside id="side-left">
          <Steps />
        </aside>

        {/* Right column: tool */}
        <section id="side-right">
          <div id="tab-controls">
            <h3
              className={mode === 'encode' ? 'active' : ''}
              onClick={() => setMode('encode')}
            >
              <img src="/lock.png" alt="Encode" />
              Encode
            </h3>
            <h3
              className={mode === 'decode' ? 'active' : ''}
              onClick={() => setMode('decode')}
            >
              <img src="/unlock.png" alt="Decode" />
              Decode
            </h3>
          </div>
          {mode === 'encode' ? <Encoder /> : <Decoder />}
        </section>
      </div>

      <Footer />
    </>
  );
}
