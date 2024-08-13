import React, { useState, useEffect, useRef } from 'react';

const VideoIntro = ({ onVideoEnd, videoUrl }) => {
  const [showPlayButton, setShowPlayButton] = useState(false);
  const playerRef = useRef(null);

  useEffect(() => {
    const videoId = extractYouTubeId(videoUrl);
    
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player('youtube-player', {
        height: '100%',
        width: '100%',
        videoId: videoId,
        playerVars: {
          'autoplay': 1,
          'controls': 0,
          'rel': 0,
          'showinfo': 0,
          'mute': 1 // Mute el video para permitir la reproducción automática
        },
        events: {
          'onReady': (event) => {
            event.target.playVideo();
            // Mostrar el botón de reproducción si el video no comienza a reproducirse después de 1 segundo
            setTimeout(() => {
              if (event.target.getPlayerState() !== 1) {
                setShowPlayButton(true);
              }
            }, 1000);
          },
          'onStateChange': (event) => {
            if (event.data === window.YT.PlayerState.ENDED) {
              onVideoEnd();
            }
          }
        }
      });
    };
  }, [videoUrl, onVideoEnd]);

  const extractYouTubeId = (url) => {
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[7].length === 11) ? match[7] : false;
  };

  const handlePlayClick = () => {
    if (playerRef.current) {
      playerRef.current.playVideo();
      playerRef.current.unMute(); // Desactivar el mute cuando se hace clic en reproducir
      setShowPlayButton(false);
    }
  };

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'black' }}>
      <div id="youtube-player" style={{ width: '100%', height: '100%' }}></div>
      {showPlayButton && (
        <button 
          onClick={handlePlayClick}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: '24px',
            padding: '20px 40px',
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer'
          }}
        >
          Reproducir Video
        </button>
      )}
    </div>
  );
};

export default VideoIntro;