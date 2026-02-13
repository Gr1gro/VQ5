'use client';

import { useEffect } from 'react';

export default function MusicPlayer() {
  useEffect(() => {
    const audio = new Audio('/bg2.mp3'); // <-- поменяй путь под твой файл
    audio.loop = true;
    audio.volume = 0.6;

    const start = () => {
      audio.play().catch(() => {});
      window.removeEventListener('click', start);
      window.removeEventListener('touchstart', start);
    };

    window.addEventListener('click', start);
    window.addEventListener('touchstart', start);

    return () => {
      window.removeEventListener('click', start);
      window.removeEventListener('touchstart', start);
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  return null;
}