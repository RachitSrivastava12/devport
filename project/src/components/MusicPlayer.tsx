import React, { useState, useRef } from 'react';
import { Music, Pause, Play } from 'lucide-react';

const songs = [
  {
    title: "Lofi Study",
    url: "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3"
  },
  {
    title: "Ambient Work",
    url: "https://cdn.pixabay.com/download/audio/2022/10/25/audio_946b0939c1.mp3"
  }
];

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleSongEnd = () => {
    setCurrentSong((prev) => (prev + 1) % songs.length);
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div className="fixed bottom-4 right-4">
      <audio
        ref={audioRef}
        src={songs[currentSong].url}
        onEnded={handleSongEnd}
      />
      <button
        onClick={togglePlay}
        className="p-3 rounded-full bg-opacity-20 backdrop-blur-sm bg-gray-800 dark:bg-gray-200 hover:bg-opacity-30 transition-all duration-200 flex items-center gap-2"
        aria-label="Toggle music"
      >
        <Music className="w-5 h-5 text-gray-200 dark:text-gray-800" />
        {isPlaying ? (
          <Pause className="w-5 h-5 text-gray-200 dark:text-gray-800" />
        ) : (
          <Play className="w-5 h-5 text-gray-200 dark:text-gray-800" />
        )}
      </button>
    </div>
  );
};

export default MusicPlayer;