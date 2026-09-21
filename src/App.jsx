import { useRef, useState } from "react";
import { Music2, Pause, Play } from "lucide-react";
import Hero from "./components/Hero";
import TogetherCounter from "./components/TogetherCounter";
import OurStory from "./components/OurStory";
import ForYou from "./components/ForYou";
import MemoriesGallery from "./components/MemoriesGallery";
import LoveLetter from "./components/LoveLetter";
import FinalSurprise from "./components/FinalSurprise";
import ClickBloomEffect from "./components/ClickBloomEffect";

function App() {
  const audioRef = useRef(null);
  const [musicStarted, setMusicStarted] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false);

  const startMusic = async () => {
    if (!audioRef.current) return;
    audioRef.current.volume = 0.45;
    setMusicStarted(true);

    try {
      await audioRef.current.play();
    } catch {
      setMusicPlaying(false);
    }
  };

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    if (audioRef.current.paused) {
      await startMusic();
    } else {
      audioRef.current.pause();
    }
  };

  return (
    <main>
      <audio
        ref={audioRef}
        src="./music/afterlife.mp3"
        loop
        preload="metadata"
        onPlay={() => setMusicPlaying(true)}
        onPause={() => setMusicPlaying(false)}
      />

      <Hero onStartMusic={startMusic} />
      <TogetherCounter />
      <OurStory />
      <ForYou />
      <MemoriesGallery />
      <LoveLetter />
      <FinalSurprise />
      <ClickBloomEffect />

      {musicStarted && (
        <div className="fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full border border-amber-300/80 bg-[#fff8e7]/95 p-2 pr-5 shadow-xl shadow-amber-900/15 backdrop-blur-md">
          <button
            type="button"
            onClick={toggleMusic}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-stone-800 text-white transition hover:scale-105 hover:bg-stone-700"
            aria-label={musicPlaying ? "Pausar música" : "Reproducir música"}
          >
            {musicPlaying ? <Pause className="h-4 w-4" /> : <Play className="ml-0.5 h-4 w-4" />}
          </button>

          <div className="min-w-0 text-left">
            <p className="flex items-center gap-1.5 text-[10px] font-bold tracking-[0.18em] text-amber-700">
              <Music2 className="h-3 w-3" /> HASTA EL MÁS ALLÁ
            </p>
            <p className="mt-0.5 max-w-32 truncate font-display text-base italic text-stone-700">
              Afterlife
            </p>
          </div>
        </div>
      )}
    </main>
  );
}

export default App;
