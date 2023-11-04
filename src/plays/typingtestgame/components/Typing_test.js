import React, { Component } from 'react';
import './styles.css';

class Typingtest extends Component {
  state = {
    text: '',
    inputValue: '',
    lastLetter: '',
    words: [],
    completedWords: [],
    completed: false,
    startTime: undefined,
    timeElapsed: 0,
    wpm: 0,
    started: false,
    progress: 0
  };

  setText = () => {
    const texts = [
      `You never read a book on psychology, Tippy. You didn't need to. You knew by some divine instinct that you can make more friends in two months by becoming genuinely interested in other people than you can in two years by trying to get other people interested in you.`,
      `I know more about the private lives of celebrities than I do about any governmental policy that will actually affect me. I'm interested in things that are none of my business, and I'm bored by things that are important to know.`,
      `A spider's body consists of two main parts: an anterior portion, the prosoma (or cephalothorax), and a posterior part, the opisthosoma (or abdomen).`,
      `As customers of all races, nationalities, and cultures visit the Dekalb Farmers Market by the thousands, I doubt that many stand in awe and contemplate the meaning of its existence. But in the capital of the Sunbelt South, the quiet revolution of immigration and food continues to upset and redefine the meanings of local, regional, and global identity.`,
      `Outside of two men on a train platform there's nothing in sight. They're waiting for spring to come, smoking down the track. The world could come to an end tonight, but that's alright. She could still be there sleeping when I get back.`,
      `I'm a broke-nose fighter. I'm a loose-lipped liar. Searching for the edge of darkness. But all I get is just tired. I went looking for attention. In all the wrong places. I was needing a redemption. And all I got was just cages.`
    ];
    const text = texts[Math.floor(Math.random() * texts.length)];
    const words = text.split(' ');

    this.setState({
      text: text,
      words: words,
      completedWords: []
    });
  };

  startGame = () => {
    this.setText();

    this.setState({
      started: true,
      startTime: Date.now(),
      completed: false,
      progress: 0
    });
  };

  handleChange = (e) => {
    const { words, completedWords } = this.state;
    const inputValue = e.target.value;
    const lastLetter = inputValue[inputValue.length - 1];
    const currentWord = words[0];
    // if space or '.', check the word
    if (lastLetter === ' ' || lastLetter === '.') {
      // check to see if it matches to the currentWord
      // trim because it has the space
      if (inputValue.trim() === currentWord) {
        // remove the word from the wordsArray
        // cleanUp the input
        const newWords = [...words.slice(1)];
        const newCompletedWords = [...completedWords, currentWord];
        // Get the total progress by checking how much words are left
        const progress =
          (newCompletedWords.length / (newWords.length + newCompletedWords.length)) * 100;
        this.setState({
          words: newWords,
          completedWords: newCompletedWords,
          inputValue: '',
          completed: newWords.length === 0,
          progress: progress
        });
      }
    } else {
      this.setState({
        inputValue: inputValue,
        lastLetter: lastLetter
      });
    }
    this.calculateWPM();
  };

  calculateWPM = () => {
    const { startTime, completedWords } = this.state;
    const now = Date.now();
    const diff = (now - startTime) / 1000 / 60; // 1000 ms / 60 s
    // every word is considered to have 5 letters
    // so here we are getting all the letters in the words and divide them by 5
    // 'my' shouldn't be counted as same as 'deinstitutionalization'
    const wordsTyped = Math.ceil(completedWords.reduce((acc, word) => (acc += word.length), 0) / 5);
    // calculating the wpm
    const wpm = Math.ceil(wordsTyped / diff);
    this.setState({
      wpm: wpm,
      timeElapsed: diff
    });
  };

  render() {
    const { completed, completedWords, inputValue, progress, started, text, timeElapsed, wpm } =
      this.state;
    if (!started)
      return (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            'flex-direction': 'column',
            'justify-items': 'center',
            'align-items': 'center'
          }}
        >
          <div className="container">
            <h2>Welcome to the Typing test game</h2>
            <p>
              <strong>Rules:</strong> <br />
              Type in the input field the highlighted word. <br />
              The correct words will turn <span className="green">green</span>.
              <br />
              Incorrect letters will turn <span className="red">red</span>.
              <br />
              <br />
              Have fun!
            </p>
            <button className="start-btn" onClick={this.startGame}>
              Start game
            </button>
          </div>
        </div>
      );

    if (!text) return <p>Loading...</p>;

    if (completed) {
      return (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            'flex-direction': 'column',
            'justify-items': 'center',
            'align-items': 'center'
          }}
        >
          <div className="container">
            <h2>
              Your WPM is <strong>{wpm}</strong>
            </h2>
            <button className="start-btn" onClick={this.startGame}>
              Play again
            </button>
          </div>
        </div>
      );
    }

    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          'flex-direction': 'column',
          'justify-items': 'center',
          'align-items': 'center'
        }}
      >
        <div className="container flex flex-col">
          <div>
            <div className="wpm">
              <strong>WPM: </strong>
              {wpm}
              <br />
              <strong>Time: </strong>
              {Math.floor(timeElapsed * 60)}s
            </div>
            <h4>Type the text below</h4>
            <progress max="100" value={progress} />
            <p className="text">
              {text.split(' ').map((word, w_idx) => {
                let highlight = false;
                let currentWord = false;

                // this means that the word is completed, so turn it green
                if (completedWords.length > w_idx) {
                  highlight = true;
                }

                if (completedWords.length === w_idx) {
                  currentWord = true;
                }

                return (
                  <span
                    className={`word 
                                ${highlight && 'green'} 
                                ${currentWord && 'underline'}`}
                    key={w_idx}
                  >
                    {word.split('').map((letter, l_idx) => {
                      const isCurrentWord = w_idx === completedWords.length;
                      const isWronglyTyped = letter !== inputValue[l_idx];
                      const shouldBeHighlighted = l_idx < inputValue.length;

                      return (
                        <span
                          className={`letter ${
                            isCurrentWord && shouldBeHighlighted
                              ? isWronglyTyped
                                ? 'red'
                                : 'green'
                              : ''
                          }`}
                          key={l_idx}
                        >
                          {letter}
                        </span>
                      );
                    })}
                  </span>
                );
              })}
            </p>
            <input
              autoFocus
              type="text"
              value={inputValue}
              // autoFocus={started ? 'true' : 'false'}
              onChange={this.handleChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Typingtest;
