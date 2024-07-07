import { useState } from "react";
import mlLogo from "/ml.svg";
import "./App.css";

function App() {
  const [analyze, setAnalyze] = useState(0);

  return (
    <>
      <div>
        <a href="https://github.com/yangzi33" target="_blank">
          <img src={mlLogo} className="logo ml" alt="ML logo" />
        </a>
      </div>
      <h1>Nexus Tutor</h1>
      <div className="card">
        <button onClick={() => window.open("http://localhost:3000", "_blank")}>
          Start Analysis
        </button>
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
        <button
          className="learn-more"
          onClick={() => {
            window.open("https://zyang.dev/nexus/nexus-tutor.pdf", "_blank");
          }}
        >
          <p className="learn-more-text">
            <u>Learn more</u>
          </p>
        </button>
      </div>
    </>
  );
}

export default App;
