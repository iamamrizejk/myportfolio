import { motion } from 'framer-motion';
import { BookOpen, Dumbbell, Music } from 'lucide-react';
import { title } from 'process';
import { useState } from 'react';

const hobbies = {
  books: [
    { title: 'Atomic Habits', author: 'James Clear' },
    { title: 'The Alchemist', author: 'Paulo Coelho' },
    { title: 'The Secret', author: 'Rhonda Byrne' },
    { title: 'Dopamine Detox', author: 'Thibaut Meurisse' },
    { title: 'Ikigai', author: 'Héctor García & Francesc Miralles' },
    { title: 'Rich Dad Poor Dad', author: 'Robert T. Kiyosaki' },
  ],
  sports: ['Cricket', 'Football', 'Badminton', 'Chess', 'F1'],
  music: [
  {
    title: 'Poradalam',
    language: 'Tamil',
    artist: 'Armaan Malik',
    audioUrl: '/src/components/audio/tamil.mpeg',
  },
  {
    title: 'Demons',
    language: 'English',
    artist: 'Imagine Dragons',
    audioUrl: '/src/components/audio/english.mpeg',
  },
  {
    title: 'Khairiyat',
    language: 'Hindi',
    artist: 'Arijit Singh',
    audioUrl: '/src/components/audio/hindi.mpeg',
  },
],
};

export const HobbiesSection = () => {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  const handleAudioToggle = (index: number) => {
    const audioElement = document.getElementById(`audio-${index}`) as HTMLAudioElement;
    
    if (playingIndex === index) {
      audioElement.pause();
      setPlayingIndex(null);
    } else {
      // Pause other audio
      if (playingIndex !== null) {
        const prevAudio = document.getElementById(`audio-${playingIndex}`) as HTMLAudioElement;
        if (prevAudio) prevAudio.pause();
      }
      audioElement.play();
      setPlayingIndex(index);
    }
  };

  return (
    <section id="hobbies" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold gradient-text mb-4">
            Hobbies & Interests
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Beyond work - what fuels my creativity and passion
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Reading Books */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="glass-card p-6 rounded-2xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-primary/10 text-primary">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-foreground">
                Reading Books
              </h3>
            </div>
            <ul className="space-y-3">
              {hobbies.books.map((book, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-muted-foreground"
                >
                  <span className="font-medium text-foreground">{book.title}</span>
                  <br />
                  <span className="text-sm">by {book.author}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Sports */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="glass-card p-6 rounded-2xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-primary/10 text-primary">
                <Dumbbell className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-foreground">
                Sports
              </h3>
            </div>
            <ul className="space-y-4">
              {[
                { name: 'Cricket', icon: '🏏', quote: 'Precision & Power' },
                { name: 'Football', icon: '⚽', quote: 'Teamwork & Strategy' },
                { name: 'Badminton', icon: '🏸', quote: 'Focus & Agility' },
                { name: 'Chess', icon: '♟️', quote: 'Think Ahead' },
                { name: 'F1', icon: '🏎️', quote: 'Speed & Skill' }
              ].map((sport, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <span className="text-2xl">{sport.icon}</span>
                  <div className="flex-1">
                    <p className="font-medium text-foreground">{sport.name}</p>
                    <p className="text-xs text-muted-foreground italic">{sport.quote}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Music */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-card p-6 rounded-2xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-primary/10 text-primary">
                <Music className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-foreground">
                Music
              </h3>
            </div>
            <div className="space-y-4">
              {hobbies.music.map((song, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <div className="flex-1">
                      <p className="font-medium text-foreground">{song.title}</p>
                      <p className="text-sm text-muted-foreground">{song.artist}</p>
                      <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary inline-block mt-1">
                        {song.language}
                      </span>
                    </div>
                    <motion.button
                      onClick={() => handleAudioToggle(index)}
                      className="relative p-3 rounded-full bg-gradient-accent text-white hover:opacity-90 transition-opacity"
                      aria-label={playingIndex === index ? 'Pause' : 'Play'}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {playingIndex === index ? (
                        <>
                          <svg
                            className="w-5 h-5 relative z-10"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                          </svg>
                          {/* Animated waveform */}
                          <motion.div
                            className="absolute inset-0 rounded-full bg-primary/30"
                            animate={{
                              scale: [1, 1.3, 1],
                              opacity: [0.5, 0, 0.5]
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          />
                        </>
                      ) : (
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      )}
                    </motion.button>
                  </div>
                  <audio
                    id={`audio-${index}`}
                    src={song.audioUrl}
                    onEnded={() => setPlayingIndex(null)}
                    className="hidden"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
