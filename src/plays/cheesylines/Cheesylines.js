import PlayHeader from 'common/playlists/PlayHeader';
import './styles.css';
import React, { useState } from 'react';

// WARNING: Do not change the entry component name
function Cheesylines(props) {
  const cheesylines = [
    'Are you French? Because Eiffel for you.',
    'Do you have a name, or can I call you mine?',
    'Are you a magician? Because whenever I look at you, everyone else disappears.',
    'Is your name Google? Because you’ve got everything I’ve been searching for.',
    'Do you have a map? Because I keep getting lost in your eyes.',
    'Are you a magician? Because whenever I look at you, everyone else disappears.',
    'Do you have a Band-Aid? Because I just scraped my knee falling for you.',
    'Is your name Google? Because you have everything I’ve been searching for.',
    'Are you a parking ticket? Because you’ve got FINE written all over you.',
    'Do you have a pencil? Because I want to erase your past and write our future.',
    'Are you a camera? Every time I look at you, I smile.',
    'Are you a bank loan? Because you have my interest.',
    'Are you a light bulb? Because you brighten up my day.',
    "Is your dad a boxer? Because you're a knockout!",
    'Are you an angel? Because heaven is missing one.',
    'Do you believe in love at first sight, or should I walk by again?',
    "Can you lend me a kiss? I promise I'll give it back.",
    "Is your name Wi-Fi? Because I'm feeling a connection.",
    'Do you have a sunburn, or are you always this hot?',
    'Are you a time traveler? Because I can see you in my future.',
    'Do you have a name, or can I call you mine?',
    "Is your last name Campbell? Because you're mmm mmm good!",
    "Are you a snowstorm? Because you're making my heart race.",
    "Are you made of copper and tellurium? Because you're Cu-Te.",
    'Do you have a quarter? Because I want to call my mom and tell her I met the one.',
    "Is your name Chapstick? Because you're da balm.",
    'Do you have a mirror in your pocket? Because I can see myself in your pants.',
    "Are you a cat? Because you're purrrfect.",
    'Do you have a GPS? Because I just got lost in your eyes.',
    'Are you a dictionary? Because you add meaning to my life.',
    'Is your name Ariel? Because we mermaid for each other.',
    'Are you a volcano? Because I lava you.',
    'Are you a beaver? Because daaaaam.',
    'Are you an alien? Because you just abducted my heart.',
    'Do you have a license? Because you’re driving me crazy.',
    'Is your dad a baker? Because you’re a cutie pie.',
    "If you were a vegetable, you'd be a cute-cumber.",
    "Are you a campfire? Because you’re hot and I want s'more.",
    'Are you an electrician? Because you’re lighting up my life.',
    'Do you have a name, or can I call you mine?',
    'Are you a star? Because your beauty lights up the night.',
    'Do you have a sunburn, or are you always this hot?',
    'Is your name Faith? Because you’re the substance of things I’ve hoped for.',
    'Are you a carpenter? Because you just nailed my heart.',
    'Are you a gardener? Because I want to plant you in my heart.',
    'Is your name Joy? Because you bring joy to my world.',
    'Are you a painter? Because you color my world.',
    'Do you have a Band-Aid? Because I just scraped my knee falling for you.',
    'Are you a teacher? Because you’ve taught me what love is.',
    'Do you have a twin? Because you’re twice as beautiful.',
    'Are you a snowflake? Because I’ve fallen for you.',
    'Do you believe in fate? Because I think we were meant to meet.',
    "Are you a time traveler? Because I can't imagine my future without you.",
    'Do you have a heart? Because mine’s just been stolen.',
    'Are you a candle? Because you light up my world.',
    'Is your name Hope? Because you’re everything I’ve been looking for.',
    'Are you a sunrise? Because you brighten my day.',
    'Do you have a map? Because I’m getting lost in your eyes.',
    'Are you a knight? Because you just rescued my heart.',
    'Is your name Grace? Because you’re amazing.',
    'Are you a poet? Because your beauty speaks volumes.',
    'Do you have a spellbook? Because whenever I look at you, everyone else disappears.',
    'Are you a princess? Because you’re royally beautiful.',
    'Do you have a moment? Because I want to make it last forever.',
    'Are you a mountain? Because your beauty is breathtaking.',
    'Is your name Destiny? Because you’re my fate.',
    'Are you a song? Because your beauty is music to my ears.',
    'Do you have a compass? Because I can’t find my way without you.',
    'Are you a diamond? Because you’re precious and rare.',
    'Is your name Angel? Because you’re heaven-sent.',
    'Are you a melody? Because you make my heart sing.',
    'Do you have a stopwatch? Because every moment without you feels like a lifetime.',
    'Are you a lighthouse? Because you guide me home.',
    'Is your name Sunshine? Because you brighten my day.',
    'Are you a rainbow? Because you color my world.',
    'Do you have a book? Because your beauty is like a story waiting to be told.',
    'Are you a moon? Because you light up my darkest nights.',
    'Is your name Star? Because you shine bright in my life.',
    'Are you a flower? Because you bloom in my heart.',
    'Do you have a pen? Because I want to write our story.',
    'Are you a horizon? Because my life extends with you.',
    'Is your name Bella? Because you’re beautiful.',
    'Are you a galaxy? Because your beauty is out of this world.',
    'Do you have a melody? Because your voice is music to my ears.',
    'Are you a butterfly? Because you’ve fluttered into my heart.',
    'Is your name Jewel? Because you’re precious.',
    'Are you a star? Because you shine in my life.',
    'Do you have a map? Because I’m lost in your eyes.',
    'Are you a dancer? Because you move my heart.',
    'Is your name Faith? Because you’re what I believe in.',
    'Are you a painter? Because you’ve colored my world.',
    'Do you have a watch? Because I can’t wait to spend time with you.',
    'Are you a constellation? Because you’ve connected the stars in my life.',
    'Is your name Rose? Because you’ve bloomed in my heart.',
    'Are you a wave? Because you’ve swept me off my feet.',
    'Do you have a dream? Because you’re my reality.',
    'Are you a breeze? Because you’ve blown me away.',
    'Is your name Bliss? Because you bring joy to my heart.',
    'Are you a whisper? Because you speak to my soul.',
    'Do you have a fire? Because you’ve ignited my heart.',
    'Are you a garden? Because you’ve planted yourself in my heart.',
    'Is your name Pearl? Because you’re a gem.',
    'Are you a lighthouse? Because you’ve guided me home.',
    'Do you have a key? Because you’ve unlocked my heart.',
    'Are you a memory? Because I can’t forget you.',
    'Is your name Melody? Because you make my heart sing.',
    'Are you a sunrise? Because you’ve brightened my day.',
    'Do you have a light? Because you’ve brightened my life.',
    'Are you a path? Because you’ve led me to love.',
    'Is your name Summer? Because you’ve warmed my heart.',
    'Are you a whisper? Because you’ve spoken to my heart.',
    'Do you have a melody? Because you’ve made my heart sing.',
    'Are you a rainbow? Because you’ve colored my life.',
    'Is your name Winter? Because you’ve made my heart warm.',
    'Are you a star? Because you’ve lightened my darkness.',
    'Do you have a flame? Because you’ve set my heart on fire.',
    'Are you a garden? Because you’ve made my heart bloom.',
    'Is your name Lily? Because you’ve bloomed in my life.',
    'Are you a melody? Because you’ve harmonized my life.',
    'Do you have a path? Because you’ve guided my heart.',
    'Are you a spark? Because you’ve ignited my life.',
    'Is your name Autumn? Because you’ve colored my life.',
    'Are you a dream? Because you’ve made my heart come true.',
    'Do you have a whisper? Because you’ve spoken to my soul.',
    'Are you a light? Because you’ve brightened my world.',
    'Is your name Jasmine? Because you’ve scented my life.',
    'Are you a sunrise? Because you’ve awakened my heart.',
    'Do you have a melody? Because you’ve tuned my heart.',
    'Are you a flame? Because you’ve warmed my soul.',
    'Is your name Daisy? Because you’ve blossomed in my life.',
    'Are you a whisper? Because you’ve murmured to my heart.',
    'Do you have a spark? Because you’ve illuminated my life.',
    'Are you a dream? Because you’ve fulfilled my heart.',
    'Is your name Violet? Because you’ve added color to my life.',
    'Are you a melody? Because you’ve composed my heart.',
    'Do you have a light',
    'Are you a magician? Because when I look at you, everyone else disappears.',
    'Do you have a map? Because I got lost in your eyes.',
    'If you were a vegetable, you’d be a cute-cumber.',
    'Do you have a Band-Aid? Because I just scraped my knee falling for you.',
    'Is your name Wi-Fi? Because I’m feeling a connection.',
    'Do you have a pencil? Because I want to erase your past and write our future.',
    'Are you a time traveler? Because I can see you in my future.',
    'If you were a vegetable, you’d be a cute-cumber.',
    'Do you have a sunburn, or are you always this hot?',
    'Do you have a quarter? Because I want to call my mom and tell her I met the one.',
    'If you were a fruit, you’d be a fineapple.',
    'Are you a light bulb? Because you brighten up my day.',
    'Do you have a twin? Because you must be twice as beautiful.',
    'Is your name Google? Because you have everything I’ve been searching for.',
    'Can you lend me a kiss? I promise I’ll give it back.',
    'Are you a snowstorm? Because you make my heart race.',
    'Do you have a mirror in your pocket? Because I can see myself in your pants.',
    'Is your dad a boxer? Because you’re a knockout!',
    'Do you believe in love at first sight, or should I walk by again?',
    'Are you made of copper and tellurium? Because you’re Cu-Te.',
    'Do you have a GPS? Because I just got lost in your eyes.',
    'If you were a booger, I’d pick you first.',
    'Do you have a name, or can I call you mine?',
    'Is your dad a baker? Because you’re a cutie pie.',
    'Do you believe in fate? Because I think we were meant to meet.',
    'If looks could kill, you’d be a weapon of mass destruction.',
    'Is your dad an artist? Because you’re a masterpiece.',
    "Are you a campfire? Because you’re hot and I want s'more.",
    'Do you have a quarter? Because I want to call my mom and tell her I met the one.',
    'If you were a vegetable, you’d be a cute-cumber.',
    'Is your dad a baker? Because you’re a cutie pie.',
    'Do you have a Band-Aid? Because I just scraped my knee falling for you.',
    'Are you a parking ticket? Because you’ve got FINE written all over you.',
    'If you were a vegetable, you’d be a cute-cumber.',
    'Do you have a twin? Because you must be twice as beautiful.',
    'Is your name Google? Because you have everything I’ve been searching for.',
    'Are you an alien? Because you just abducted my heart.',
    'Do you have a license? Because you’re driving me crazy.',
    'Is your dad a baker? Because you’re a cutie pie.',
    'If you were a vegetable, you’d be a cute-cumber.',
    'Do you have a sunburn, or are you always this hot?',
    'Do you have a quarter? Because I want to call my mom and tell her I met the one.',
    'If you were a fruit, you’d be a fineapple.',
    'Are you a light bulb? Because you brighten up my day.',
    'Do you have a twin? Because you must be twice as beautiful.',
    'Is your name Google? Because you have everything I’ve been searching for.',
    'Can you lend me a kiss? I promise I’ll give it back.',
    'Are you a snowstorm? Because you make my heart race.',
    'Do you have a mirror in your pocket? Because I can see myself in your pants.',
    'Is your dad a boxer? Because you’re a knockout!',
    'Do you believe in love at first sight, or should I walk by again?',
    'Are you made of copper and tellurium? Because you’re Cu-Te.',
    'Do you have a GPS? Because I just got lost in your eyes.',
    'If you were a booger, I’d pick you first.',
    'Do you have a name, or can I call you mine?',
    'Is your dad a baker? Because you’re a cutie pie.',
    'Do you believe in fate? Because I think we were meant to meet.',
    'If looks could kill, you’d be a weapon of mass destruction.',
    'Is your dad an artist? Because you’re a masterpiece.',
    "Are you a campfire? Because you’re hot and I want s'more.",
    'Do you have a quarter? Because I want to call my mom and tell her I met the one.',
    'If you were a vegetable, you’d be a cute-cumber.',
    'Is your dad a baker? Because you’re a cutie pie.',
    'Do you have a Band-Aid? Because I just scraped my knee falling for you.',
    'Are you a parking ticket? Because you’ve got FINE written all over you.',
    'If you were a vegetable, you’d be a cute-cumber.',
    'Do you have a twin? Because you must be twice as beautiful.',
    'Is your name Google? Because you have everything I’ve been searching for.',
    'Are you an angel? Because heaven is missing one.',
    'Is your name Wi-Fi? Because I’m feeling a connection.',
    'Do you have a Band-Aid? Because I just scraped my knee falling for you.',
    'Is your name Google? Because you have everything I’ve been searching for.',
    'Are you a magician? Because when I look at you, everyone else disappears.',
    'Do you have a map? Because I got lost in your eyes.',
    'If you were a vegetable, you’d be a cute-cumber.',
    'Do you have a Band-Aid? Because I just scraped my knee falling for you.',
    'Is your name Wi-Fi? Because I’m feeling a connection.',
    'Do you have a pencil? Because I want to erase your past and write our future.',
    'Are you a time traveler? Because I can see you in my future.',
    'If you were a vegetable, you’d be a cute-cumber.',
    'Do you have a sunburn, or are you always this hot?',
    'Do you have a quarter? Because I want to call my mom and tell her I met the one.',
    'If you were a fruit, you’d be a fineapple.',
    'Are you a light bulb? Because you brighten up my day.',
    'Do you have a twin? Because you must be twice as beautiful.',
    'Is your name Google? Because you have everything I’ve been searching for.',
    'Can you lend me a kiss? I promise I’ll give it back.',
    'Are you a snowstorm? Because you make my heart race.',
    'Do you have a mirror in your pocket? Because I can see myself in your pants.',
    'Is your dad a boxer? Because you’re a knockout!',
    'Do you believe in love at first sight, or should I walk by again?',
    'Are you made of copper and tellurium? Because you’re Cu-Te.',
    'Do you have a GPS? Because I just got lost in your eyes.',
    'If you were a booger, I’d pick you first.',
    'Do you have a name, or can I call you mine?',
    'Is your dad a baker? Because you’re a cutie pie.',
    'Do you believe in fate? Because I think we were meant to meet.',
    'If looks could kill, you’d be a weapon of mass destruction.',
    'Is your dad an artist? Because you’re a masterpiece.',
    "Are you a campfire? Because you’re hot and I want s'more.",
    'Do you have a quarter? Because I want to call my mom and tell her I met the one.',
    'If you were a vegetable, you’d be a cute-cumber.',
    'Is your dad a baker? Because you’re a cutie pie.',
    'Do you have a Band-Aid? Because I just scraped my knee falling for you.',
    'Are you a parking ticket? Because you’ve got FINE written all over you.',
    'If you were a vegetable, you’d be a cute-cumber.',
    'Do you have a twin? Because you must be twice as beautiful.',
    'Is your name Google? Because you have everything I’ve been searching for.',
    'Are you an angel? Because heaven is missing one.',
    'Is your name Wi-Fi? Because I’m feeling a connection.',
    'Do you have a Band-Aid? Because I just scraped my knee falling for you.',
    'Is your name Google? Because you have everything I’ve been searching for.',
    'Are you a magician? Because when I look at you, everyone else disappears.',
    'Do you have a map? Because I got lost in your eyes.',
    'If you were a vegetable, you’d be a cute-cumber.',
    'Do you have a Band-Aid? Because I just scraped my knee falling for you.',
    'Is your name Wi-Fi? Because I’m feeling a connection.',
    'Do you have a pencil? Because I want to erase your past and write our future.',
    'Are you a time traveler? Because I can see you in my future.',
    'If you were a vegetable, you',
    'Are you a treasure map? Because I just found my way to your heart.',
    "Is your aura made of copper and tellurium? Because you're Cu-Te.",
    "Do you have an eraser? Because I can't get you out of my mind.",
    "Are you a campfire? Because you're hot and I want to be near you.",
    "Do you have a magnet? Because I'm so attracted to you.",
    "Are you a keyboard? Because you're my type.",
    'Is your name Daisy? Because I have a sudden urge to plant you right here.',
    'Do you have a minute? Because I want to remember this forever.',
    "Are you a snowflake? Because I've fallen for you.",
    'Is your dad a thief? Because he stole the stars and put them in your eyes.',
    'Are you a cloud? Because you make my day.',
    "Do you have a charger? Because I'm running low on energy after seeing you.",
    'Are you a song? Because you make my heart sing.',
    'Is your name Joy? Because you bring happiness to my life.',
    'Do you have a map? Because I just got lost in your smile.',
    'Are you a sunrise? Because you brighten up my mornings.',
    'Do you have a locket? Because I want to keep you close to my heart.',
    "Are you an artist? Because you're painting my life with beauty.",
    'Do you have a magic wand? Because every moment with you feels magical.',
    'Are you a shooting star? Because my wish came true when I met you.',
    "Do you have a spellbook? Because every time I'm with you, I'm enchanted.",
    'Are you a puzzle? Because you complete me.',
    'Is your smile a broom? Because it swept me off my feet.',
    "Are you a superhero? Because you've saved my day.",
    'Do you have a time machine? Because every moment with you feels timeless.',
    'Is your heart a candle? Because you light up my world.',
    "Are you a chocolate? Because you're sweet and irresistible.",
    "Do you have a love potion? Because I'm under your spell.",
    'Are you a rainbow? Because my world is brighter with you in it.',
    'Do you have a smile that can cure the world? Because I feel healed just looking at you.',
    "Is your presence a hug? Because I feel comforted when you're near.",
    "Are you a book? Because I can't stop reading into your eyes.",
    "Do you have a key? Because you've locked my heart.",
    'Are you a melody? Because you make my heart dance.',
    'Is your touch a breeze? Because you make my heart flutter.',
    "Do you have a spark? Because you've ignited a flame in my heart.",
    'Are you a lighthouse? Because you guide me through the darkest times.',
    "Is your name Melody? Because you're music to my ears.",
    'Do you have a heart? Because mine beats for you.',
    'Are you a magician? Because every moment with you is magical.',
    'Is your name Destiny? Because it was fate that brought us together.',
    'Do you have a twin? Because one of you is not enough.',
    "Are you a snowstorm? Because you've left me breathless.",
    "Is your smile a sunrise? Because it's the start of something beautiful.",
    'Do you have a pencil? Because you drew me in.',
    'Are you a poet? Because every word you speak is poetry to my ears.',
    'Is your laughter a melody? Because it’s the sweetest sound.',
    'Do you have a heart of gold? Because you shine bright.',
    'Are you a whisper? Because you speak to my soul.',
    'Is your presence a miracle? Because I feel blessed.',
    'Do you have a map? Because I’m lost in your eyes.',
    "Are you a gardener? Because you've planted yourself in my heart.",
    'Is your name Rose? Because you’ve blossomed in my life.',
    'Do you have a light? Because you’ve brightened my world.',
    "Are you a melody? Because you've composed my heart.",
    "Is your name Lily? Because you've bloomed in my life.",
    "Do you have a spark? Because you've illuminated my life.",
    "Are you a dream? Because you've fulfilled my heart.",
    "Is your name Violet? Because you've added color to my life.",
    "Do you have a whisper? Because you've murmured to my heart.",
    "Are you a light? Because you've brightened my world.",
    "Is your name Jasmine? Because you've scented my life.",
    "Do you have a melody? Because you've tuned my heart.",
    "Are you a flame? Because you've warmed my soul.",
    "Is your name Daisy? Because you've blossomed in my life.",
    "Do you have a spark? Because you've illuminated my life.",
    "Are you a whisper? Because you've murmured to my heart."
  ];

  const [line, setLine] = useState('');

  const handleClick = () => {
    const randomLine = cheesylines[Math.floor(Math.random() * cheesylines.length)];
    setLine(randomLine);
  };

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="project-header">
          <h1>Cheesy Pick-up Lines</h1>
        </div>
        <div className="play-details-body">
          {/* Your Code Starts Here */}
          <div className="container">
            <div className="box">
              <h2>Love at First Line!</h2>
              {line && <p className="text-background">{line}</p>}
            </div>
            <button onClick={handleClick}>Get Cheesy Line</button>
          </div>
          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default Cheesylines;
