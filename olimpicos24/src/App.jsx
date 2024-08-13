import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VideoIntro from './VideoIntro';
import GlobeComponent from './globe';
import OlympicInfo from './OlympicInfo';

function App() {
  const [showGlobe, setShowGlobe] = useState(false);

  const handleVideoEnd = () => {
    setShowGlobe(true);
  };

  const videoUrl = 'https://youtu.be/2rXHXfEIwMw?si=aCIudS0ss87osscR'; // URL del video de YouTube

  return (
    <Router>
      <div className="App" style={{ width: '100vw', height: '100vh' }}>
        {!showGlobe ? (
          <VideoIntro onVideoEnd={handleVideoEnd} videoUrl={videoUrl} />
        ) : (
          <Routes>
            <Route path="/" element={<GlobeComponent />} />
            <Route path="/info" element={<OlympicInfo />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;