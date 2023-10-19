import Title from './components/Title';
import Button from './components/Button';
import Footer from './components/Footer';
import { useEffect } from 'react';
import crash from './assets/sounds/crash.mp3';
import tom1 from './assets/sounds/tom-1.mp3';
import tom2 from './assets/sounds/tom-2.mp3';
import tom3 from './assets/sounds/tom-3.mp3';
import tom4 from './assets/sounds/tom-4.mp3';
import snare from './assets/sounds/snare.mp3';
import kickBass from './assets/sounds/kick-bass.mp3';

function App() {
  function makeSound(key) {
    switch (key) {
      case 'w':
        new Audio(tom1).play();
        buttonAnimation(key);

        break;
      case 'a':
        new Audio(tom2).play();
        buttonAnimation(key);

        break;
      case 's':
        new Audio(tom3).play();
        buttonAnimation(key);

        break;
      case 'd':
        new Audio(tom4).play();
        buttonAnimation(key);

        break;
      case 'j':
        new Audio(snare).play();
        buttonAnimation(key);

        break;
      case 'k':
        new Audio(crash).play();
        buttonAnimation(key);

        break;
      case 'l':
        new Audio(kickBass).play();
        buttonAnimation(key);

        break;
    }
  }

  function buttonAnimation(key) {
    let activeButton = document.querySelector(`.${key}`);
    if (!activeButton) return;
    activeButton.classList.add('pressed');
    setTimeout(() => {
      activeButton.classList.remove('pressed');
    }, 0.5);
  }

  function handleKeypress(e) {
    makeSound(e.key);
  }

  useEffect(() => {
    document.addEventListener('keypress', handleKeypress);

    return () => {
      document.removeEventListener('keypress', handleKeypress);
    };
  }, []);

  return (
    <>
      <Title />
      <div className="set">
        <Button class="drum w" keyCode="w" />
        <Button class="drum a" keyCode="a" />
        <Button class="drum s" keyCode="s" />
        <Button class="drum d" keyCode="d" />
        <Button class="drum j" keyCode="j" />
        <Button class="drum k" keyCode="k" />
        <Button class="drum l" keyCode="l" />
      </div>
      <Footer />
    </>
  );
}

export default App;
