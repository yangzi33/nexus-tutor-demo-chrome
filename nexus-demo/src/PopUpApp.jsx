import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./PopUpApp.css";

function PopUpApp() {
  const [analyze, setAnalyze] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Nexus Tutor</h1>
      <div className="card">
        <button>Generate Practice Problems</button>
        <p>Make sure the video is playing before analysis.</p>
      </div>
      <div>
        <button>Upload Video</button>

        <button>My Nexus Tutor</button>
      </div>
      <p className="read-the-docs">Learn more</p>
    </>
  );
}

export default PopUpApp;
