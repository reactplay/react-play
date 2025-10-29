import React, { useState } from 'react';
import PlayHeader from 'common/playlists/PlayHeader';
import { motion } from 'framer-motion';
import djImage from './james-hype.jpg';
import djImage2 from './axwell.jpg';
import djImage3 from './swedish-house-mafia.jpg';
import djImage4 from './deadmau5.jpg';
import './styles.css';

// Interfaz para tipar los datos de cada DJ
interface SpotifyTrack {
  id: string;
  url: string;
  title: string;
}

interface DJData {
  id: number;
  name: string;
  country: string;
  image: string;
  tracks: SpotifyTrack[];
  colorTheme: {
    button: string;
    buttonHover: string;
    soundWaves: string;
  };
}

// Componente DJCard reutilizable
interface DJCardProps {
  dj: DJData;
}

function DJCard({ dj }: DJCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      className="relative w-[400px] h-[500px]"
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d'
      }}
    >
      {/* FRONT SIDE */}
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        className="absolute w-full h-full bg-carbon text-frost p-6 rounded-2xl shadow-lg flex flex-col items-center justify-center"
        initial={{ rotateY: 0 }}
        style={{
          backfaceVisibility: 'hidden',
          transformStyle: 'preserve-3d'
        }}
        transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1] }}
      >
        <motion.img
          alt={dj.name}
          className="rounded-xl shadow-md w-60 h-60 object-cover"
          src={dj.image}
          transition={{ stiffness: 120, type: 'spring' }}
          whileHover={{ rotateY: 8, scale: 1.05 }}
        />

        <h2 className="text-2xl font-bold mt-4">{dj.name}</h2>
        <p className="text-silver">{dj.country}</p>

        <motion.div
          animate={{ opacity: [0.3, 1, 0.3] }}
          className="flex gap-1 mt-4 justify-center"
          transition={{ duration: 2, repeat: Infinity }}
        >
          {[...Array(5)].map((_, i) => (
            <span
              className={`${i % 2 ? 'h-3' : 'h-2'} w-2 rounded-full`}
              key={i}
              style={{ backgroundColor: dj.colorTheme.soundWaves }}
            />
          ))}
        </motion.div>

        <motion.button
          className="mt-5 px-5 py-2 rounded-lg font-medium text-white shadow-md"
          style={{
            background: dj.colorTheme.button
          }}
          transition={{
            type: 'spring',
            stiffness: 160,
            damping: 22
          }}
          whileHover={{
            scale: 1.07,
            background: dj.colorTheme.buttonHover,
            boxShadow: '0 0 20px rgba(20, 184, 166, 0.6)',
            filter: 'brightness(1.1)'
          }}
          onClick={() => setFlipped(true)}
        >
          My Favourite Tracks →
        </motion.button>
      </motion.div>

      {/* BACK SIDE */}
      <motion.div
        animate={{ rotateY: flipped ? 0 : -180 }}
        className="absolute w-full h-full rounded-2xl bg-white text-gray-900 flex flex-col items-center justify-between p-6 shadow-lg overflow-hidden"
        initial={{ rotateY: -180 }}
        style={{
          transformStyle: 'preserve-3d',
          backfaceVisibility: 'hidden',
          transform: 'rotateY(180deg)'
        }}
        transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1] }}
      >
        <h3 className="text-xl font-semibold mb-3">Top Tracks 🎧</h3>

        <div className="flex flex-col gap-3 w-full flex-1 justify-center">
          {dj.tracks.map((track) => (
            <iframe
              allow="encrypted-media"
              className="rounded-lg"
              height="90"
              key={track.id}
              src={track.url}
              style={{ border: 0, overflow: 'hidden' }}
              title={track.title}
              width="100%"
            />
          ))}
        </div>

        <motion.button
          className="mt-3 px-4 py-2 text-white rounded-lg shadow-md"
          style={{
            background: dj.colorTheme.button
          }}
          whileHover={{
            background: dj.colorTheme.buttonHover
          }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setFlipped(false)}
        >
          Back
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

// Array de datos de DJs
const djsData: DJData[] = [
  {
    id: 1,
    name: 'James Hype',
    country: 'UK',
    image: djImage,
    tracks: [
      {
        id: 'track1-1',
        url: 'https://open.spotify.com/embed/track/1OcV53oesLQw3VTW9I3uD3?utm_source=generator',
        title: 'James Hype Track 1'
      },
      {
        id: 'track1-2',
        url: 'https://open.spotify.com/embed/track/4zN21mbAuaD0WqtmaTZZeP?utm_source=generator',
        title: 'James Hype Track 2'
      },
      {
        id: 'track1-3',
        url: 'https://open.spotify.com/embed/track/3sU1L9okYWbN61oHZNQTfh?utm_source=generator',
        title: 'James Hype Track 3'
      }
    ],
    colorTheme: {
      button: 'linear-gradient(to right, #14b8a6, #10b981)',
      buttonHover: 'linear-gradient(to right, #0d9488, #059669)',
      soundWaves: '#10b981'
    }
  },
  {
    id: 2,
    name: 'Axwell',
    country: 'Sweden',
    image: djImage2,
    tracks: [
      {
        id: 'track2-1',
        url: 'https://open.spotify.com/embed/track/0PL26MnAqZtO9kEFyyvPvO?utm_source=generator',
        title: 'Axwell Track 1'
      },
      {
        id: 'track2-2',
        url: 'https://open.spotify.com/embed/track/29Rdysued3nwLlQwmg9R46?utm_source=generator',
        title: 'Axwell Track 2'
      },
      {
        id: 'track2-3',
        url: 'https://open.spotify.com/embed/track/6lL4XsdRrQ8XafBJbWDPV3?utm_source=generator',
        title: 'Axwell Track 3'
      }
    ],
    colorTheme: {
      button: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
      buttonHover: 'linear-gradient(to right, #2563eb, #7c3aed)',
      soundWaves: '#8b5cf6'
    }
  },
  {
    id: 3,
    name: 'Swedish House Mafia',
    country: 'Sweden',
    image: djImage3,
    tracks: [
      {
        id: 'track3-1',
        url: 'https://open.spotify.com/embed/track/4xr1Azj8mCbz6u8CITf8ef?utm_source=generator',
        title: 'Swedish House Mafia Track 1'
      },
      {
        id: 'track3-2',
        url: 'https://open.spotify.com/embed/track/2V65y3PX4DkRhy1djlxd9p?utm_source=generator',
        title: 'Swedish House Mafia Track 2'
      },
      {
        id: 'track3-3',
        url: 'https://open.spotify.com/embed/track/6gdDu39yYqPcaTgCwYEW8i?utm_source=generator',
        title: 'Swedish House Mafia Track 3'
      }
    ],
    colorTheme: {
      button: 'linear-gradient(to right, #f59e0b, #ef4444)',
      buttonHover: 'linear-gradient(to right, #d97706, #dc2626)',
      soundWaves: '#f59e0b'
    }
  },
  {
    id: 4,
    name: 'Deadmau5',
    country: 'Canada',
    image: djImage4,
    tracks: [
      {
        id: 'track4-1',
        url: 'https://open.spotify.com/embed/track/4kJWtxDDNb9oAk3h7sX3N4?utm_source=generator',
        title: 'Deadmau5 Track 1'
      },
      {
        id: 'track4-2',
        url: 'https://open.spotify.com/embed/track/5YaqbhEmoxSpIbdBTPG6KQ?utm_source=generator',
        title: 'Deadmau5 Track 2'
      },
      {
        id: 'track4-3',
        url: 'https://open.spotify.com/embed/track/0F539Pcn7LDa2MbBhDe3Tw?utm_source=generator',
        title: 'Deadmau5 Track 3'
      }
    ],
    colorTheme: {
      button: 'linear-gradient(to right, #ec4899, #a855f7)',
      buttonHover: 'linear-gradient(to right, #db2777, #9333ea)',
      soundWaves: '#ec4899'
    }
  }
];

// Componente principal
function DjMotionCards(props: any) {
  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />

        <div className="play-details-body flex justify-center gap-6">
          {/* Your Code Starts Here */}

          {djsData.map((dj) => (
            <DJCard dj={dj} key={dj.id} />
          ))}

          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default DjMotionCards;
