import React, { useState, useEffect } from 'react';
import PlayHeader from 'common/playlists/PlayHeader';
import './styles.css';

// WARNING: Do not change the entry component name
function RandomQuotes(props) {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('motivational');
  const [loading, setLoading] = useState(false);

  // Reliable category tags (quotable.io)
  const categories = {
    motivational: 'motivational',
    life: 'life',
    programming: 'technology'
  };

  // Local fallback quotes — EXPANDED LIST
  const localFallback = {
    motivational: [
      { content: 'The only way to do great work is to love what you do.', author: 'Steve Jobs' },
      { content: "Believe you can and you're halfway there.", author: 'Theodore Roosevelt' },
      { content: 'Don’t watch the clock; do what it does. Keep going.', author: 'Sam Levenson' },
      {
        content:
          'Success is not final; failure is not fatal: It is the courage to continue that counts.',
        author: 'Winston Churchill'
      },
      {
        content: 'Push yourself because no one else is going to do it for you.',
        author: 'Unknown'
      },
      { content: 'Dream bigger. Do bigger.', author: 'Unknown' },
      {
        content: 'You don’t have to be great to start, but you have to start to be great.',
        author: 'Zig Ziglar'
      },
      { content: 'Hard work beats talent when talent doesn’t work hard.', author: 'Tim Notke' },
      { content: 'If opportunity doesn’t knock, build a door.', author: 'Milton Berle' },
      {
        content: 'Discipline is choosing between what you want now and what you want most.',
        author: 'Abraham Lincoln'
      },
      { content: 'Don’t limit your challenges—challenge your limits.', author: 'Jerry Dunn' },
      { content: 'It always seems impossible until it’s done.', author: 'Nelson Mandela' },
      { content: 'Make each day your masterpiece.', author: 'John Wooden' },
      { content: 'A little progress each day adds up to big results.', author: 'Satya Nani' },
      {
        content: 'Do something today that your future self will thank you for.',
        author: 'Sean Patrick Flanery'
      }
    ],

    life: [
      {
        content: "Life is what happens when you're busy making other plans.",
        author: 'John Lennon'
      },
      { content: 'Keep smiling, because life is a beautiful thing.', author: 'Marilyn Monroe' },
      { content: 'The purpose of our lives is to be happy.', author: 'Dalai Lama' },
      {
        content:
          "In the end, it's not the years in your life that count. It's the life in your years.",
        author: 'Abraham Lincoln'
      },
      {
        content: 'Life is really simple, but we insist on making it complicated.',
        author: 'Confucius'
      },
      {
        content: 'Good friends, good books, and a sleepy conscience: this is the ideal life.',
        author: 'Mark Twain'
      },
      {
        content: 'To live is the rarest thing in the world. Most people exist, that is all.',
        author: 'Oscar Wilde'
      },
      {
        content: 'Life isn’t about finding yourself. It’s about creating yourself.',
        author: 'George Bernard Shaw'
      },
      {
        content: 'Happiness is not something ready-made. It comes from your own actions.',
        author: 'Dalai Lama'
      },
      {
        content: 'You only live once, but if you do it right, once is enough.',
        author: 'Mae West'
      },
      {
        content: 'Difficulties in life are intended to make us better, not bitter.',
        author: 'Dan Reeves'
      },
      {
        content: 'The biggest adventure you can take is to live the life of your dreams.',
        author: 'Oprah Winfrey'
      },
      {
        content:
          'Enjoy the little things, for one day you may look back and realize they were the big things.',
        author: 'Robert Brault'
      },
      {
        content: 'Life itself is the most wonderful fairy tale.',
        author: 'Hans Christian Andersen'
      },
      { content: 'In the book of life, the answers aren’t in the back.', author: 'Charlie Brown' }
    ],

    programming: [
      { content: 'Talk is cheap. Show me the code.', author: 'Linus Torvalds' },
      {
        content:
          'Programs must be written for people to read, and only incidentally for machines to execute.',
        author: 'Harold Abelson'
      },
      { content: 'First, solve the problem. Then, write the code.', author: 'John Johnson' },
      {
        content: 'Experience is the name everyone gives to their mistakes.',
        author: 'Oscar Wilde'
      },
      {
        content: 'Code is like humor. When you have to explain it, it’s bad.',
        author: 'Cory House'
      },
      { content: 'Fix the cause, not the symptom.', author: 'Steve Maguire' },
      {
        content: 'Optimism is an occupational hazard of programming: feedback is the treatment.',
        author: 'Kent Beck'
      },
      { content: 'Simplicity is the soul of efficiency.', author: 'Austin Freeman' },
      {
        content: 'Before software can be reusable it first has to be usable.',
        author: 'Ralph Johnson'
      },
      {
        content: 'Programming isn’t about what you know; it’s about what you can figure out.',
        author: 'Chris Pine'
      },
      { content: 'The best error message is the one that never shows up.', author: 'Thomas Fuchs' },
      { content: 'You can’t have great software without a great team.', author: 'Martin Fowler' },
      { content: 'Make it work, make it right, make it fast.', author: 'Kent Beck' },
      {
        content:
          'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        author: 'Martin Fowler'
      },
      {
        content: 'The function of good software is to make the complex appear simple.',
        author: 'Grady Booch'
      }
    ],

    general: [
      { content: 'Don’t watch the clock; do what it does. Keep going.', author: 'Sam Levenson' },
      { content: 'Simplicity is the soul of efficiency.', author: 'Austin Freeman' },
      { content: 'Everything you can imagine is real.', author: 'Pablo Picasso' },
      {
        content: 'Whether you think you can or you think you can’t, you’re right.',
        author: 'Henry Ford'
      }
    ]
  };

  const fetchWithTimeout = async (url, timeout = 7000) => {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);
    try {
      const res = await fetch(url, { signal: controller.signal });
      clearTimeout(id);

      return res;
    } catch (err) {
      clearTimeout(id);

      throw err;
    }
  };

  const fetchQuote = async () => {
    setLoading(true);
    const tag = categories[category] || '';
    const taggedUrl = tag ? `https://api.quotable.io/random?tags=${encodeURIComponent(tag)}` : null;
    const generalUrl = 'https://api.quotable.io/random';

    try {
      let data;

      if (taggedUrl) {
        try {
          const res = await fetchWithTimeout(taggedUrl);
          if (!res.ok) throw new Error();
          data = await res.json();
        } catch {
          console.warn('Tagged fetch failed, trying general endpoint');
        }
      }

      if (!data) {
        try {
          const res = await fetchWithTimeout(generalUrl);
          if (!res.ok) throw new Error();
          data = await res.json();
        } catch {
          console.warn('General fetch failed');
        }
      }

      if (data && data.content) {
        setQuote(data.content);
        setAuthor(data.author || 'Unknown');
      } else {
        const pool = localFallback[category] || localFallback.general;
        const random = pool[Math.floor(Math.random() * pool.length)];
        setQuote(random.content);
        setAuthor(random.author);
      }
    } catch (err) {
      console.error('Unexpected fetch error:', err);
      const pool = localFallback[category] || localFallback.general;
      const random = pool[Math.floor(Math.random() * pool.length)];
      setQuote(random.content);
      setAuthor(random.author);
    } finally {
      setLoading(false);
    }
  };

  const speakQuote = () => {
    if (!quote || !window.speechSynthesis) return;
    const utter = new SpeechSynthesisUtterance(`${quote} — ${author}`);
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utter);
  };

  useEffect(() => {
    fetchQuote();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  return (
    <div className="play-details">
      <PlayHeader play={props} />
      <div className="play-details-body">
        <div className="rq-container">
          <h2 className="rq-title">✨ Enhanced Random Quote Generator ✨</h2>

          <div className="rq-controls">
            <select
              className="rq-select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="motivational">Motivational</option>
              <option value="life">Life</option>
              <option value="programming">Programming</option>
            </select>

            <button className="rq-btn" onClick={fetchQuote}>
              New Quote
            </button>

            <button className="rq-btn rq-speak" onClick={speakQuote}>
              🔊 Speak
            </button>
          </div>

          <div className="rq-quote-box">
            {loading ? (
              <p className="rq-loading">Loading...</p>
            ) : (
              <>
                <p className="rq-text">“{quote}”</p>
                <p className="rq-author">— {author}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RandomQuotes;
