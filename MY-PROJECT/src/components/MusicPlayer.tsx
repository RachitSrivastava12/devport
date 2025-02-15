import React, { useState, useRef } from 'react';
import { Music, Pause } from 'lucide-react';

const songs = [
  '/path/to/song1.mp3',
  '/path/to/song2.mp3',
  '/path/to/song3.mp3'
];

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      const randomSong = songs[Math.floor(Math.random() * songs.length)];
      if (audioRef.current) {
        audioRef.current.src = randomSong;
        audioRef.current.play();
      }
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <button
        onClick={toggleMusic}
        className="control-button"
        aria-label="Toggle music"
      >
        {isPlaying ? <Pause size={18} /> : <Music size={18} />}
      </button>
      <audio ref={audioRef} />
    </>
  );
};

export default MusicPlayer;
