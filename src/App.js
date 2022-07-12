import { useState } from "react";
import "./App.css";
import CountdownList from "./components/CountdownList";
import Fireworks3 from "./components/Fireworks3";

function App() {

  const [countdown, setCountdown] = useState(false);

  return (
    <div className="container">
      {countdown ?  <Fireworks3 /> : null }
      <CountdownList setCountdown={setCountdown} />
    </div>
  );
}

export default App;
