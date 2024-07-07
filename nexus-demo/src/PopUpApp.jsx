import { useState } from "react";
import mlLogo from "/ml.svg";
import "./PopUpApp.css";

function PopUpApp() {
  const [analyze, setAnalyze] = useState(0);

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={mlLogo} className="logo ml" alt="ML logo" />
        </a>
      </div>
      <h1>Nexus Tutor</h1>
      <div className="card">
        <button>Start Analysis</button>
        <p className="subtitle">
          Generate problems based on current video. Make sure the video is
          playing.
        </p>
      </div>
      <div>
        <button>Upload Video</button>

        <button>My Nexus Tutor</button>
      </div>
      <div className="learn-more-box">
        <p className="learn-more">Learn more</p>
      </div>
    </>
  );
}

export default PopUpApp;
