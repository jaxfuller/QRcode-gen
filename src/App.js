import { useEffect, useState } from 'react';
import './App.css';
  
function App() {
  const [temp, setTemp] = useState("");
  const [word, setWord] = useState("");
  const [size, setSize] = useState(200);
  const [color, setColor] = useState ("#8b0000");
  const [bgColor, setBgColor] = useState("ffb6c1");
  const [qrCode, setQrCode] = useState("");

  //changes link to match inputs
  useEffect(() => {
    setQrCode
 (`http://api.qrserver.com/v1/create-qr-code/?data=${word}!&size=${size}x${size}&bgcolor=${bgColor}&color=${color}`);
  }, [word, size, bgColor, color]);
  
//updates input when user clicks
  function handleClick() {
    setWord(temp);
  }
  
  return (
    <div className="App">
      <h1>QR Code Generator</h1>
      <h3> This is completed using the free, open-source API "create-qr-code"</h3>
      <div className="input-box">
        <div className="gen">
          <input type="text" onChange={
            (e) => {setTemp(e.target.value)}}
            placeholder="Enter Linked to Convert" />
          <button className="button" 
            onClick={handleClick}>
            Generate
          </button>
        </div>
        <div className="extra">
          <h5>Background Color:</h5>
          <input type="color" onChange={(e) => 
          { setBgColor(e.target.value.substring(1)) }} />
          <h5>Color:</h5>
          <input type="color" onChange = {(e) =>
          { setColor(e.target.value.substring(1)) }} />
          <h5>Dimension:</h5>
          <input type="range" min="100" max="400"
           value={size} onChange={(e) => 
           {setSize(e.target.value)}} />
        </div>
      </div>
      <div className="output-box">
        <img src={qrCode} alt="" />
        <a href={qrCode} download="QRCode">
          <button type="button">Download</button>
        </a>
      </div>
    </div>
  );
}
  
export default App;