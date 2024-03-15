import React, { useState } from 'react';
import './App.css'; 
import wizard from './wizard.gif';

function App() {
  const [gifPosition, setGifPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setGifPosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <div className="App" onMouseMove={handleMouseMove}>
      <Cursor />
      <Gif
        src={wizard}
        alt="Moving GIF"
        style={{
          position: 'absolute',
          left: gifPosition.x,
          top: gifPosition.y,
          maxWidth: '100px', 
          maxHeight: '100px', 
          backgroundColor: 'transparent', 
          transition: 'left 0.05s linear, top 0.05s linear', // Smooth transition
          transform: 'translate(-50%, -50%) scaleX(-1)', // Flip horizontally
        }}
      />
    </div>
  );
}

const Cursor = () => {
  return <div className="cursor"></div>;
};

const Gif = ({ src, alt, style }) => {
  return <img src={src} alt={alt} style={style} />;
};

export default App;
