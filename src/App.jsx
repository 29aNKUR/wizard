import React, { useRef, useState } from 'react';
import './App.css'; 
import wizard from './wizard.gif';

function App() {
  const [gifPosition, setGifPosition] = useState({ x: 0, y: 0 });
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const cursorMoveTimeout = useRef(null);

  const handleMouseMove = (event) => {
    setCursorPosition({ x: event.clientX, y: event.clientY });
    clearTimeout(cursorMoveTimeout.current);
    cursorMoveTimeout.current = setTimeout(() => {
      setGifPosition({ x: event.clientX, y: event.clientY });
    }, 50); 
  };

  return (
    <div className="App" onMouseMove={handleMouseMove}>
      <Cursor x={cursorPosition.x} y={cursorPosition.y} />
      <Gif
        src={wizard}
        alt="Moving GIF"
        style={{
          position: 'absolute',
          left: gifPosition.x,
          top: gifPosition.y,
          transition: 'left 0.1s ease-out, top 0.1s ease-out', 
          transform: 'translate(-50%, -50%) scaleX(-1)', 
          maxWidth: '100px', 
          maxHeight: '100px', 
          backgroundColor: 'transparent', 
        }}
      />
    </div>
  );
}

const Cursor = ({ x, y }) => {
  return <div className="cursor" style={{ left: x, top: y }}></div>;
};


const Gif = ({ src, alt, style }) => {
  return <img src={src} alt={alt} style={style} />;
};

export default App;
