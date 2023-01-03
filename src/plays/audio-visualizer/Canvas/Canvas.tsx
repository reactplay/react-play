// Disclaimer
// "everglow.mp3" by Patrick Patrikios is a being used under Creative Commons License.
// Original Source it was taken from https://youtu.be/pbq6sKq4vUk
// The Song is not our Trademark.

import React, { useEffect, useRef } from "react";
import Sketch from "react-p5";

import p5 from "p5";
import "p5/lib/addons/p5.sound.js";

import { Mike, Loop, SongInput } from "../components/exports";

const Canvas = () => {
  const [useMic, setUseMic] = React.useState<boolean>(false);
  let [mic, setMic] = React.useState<p5.AudioIn | undefined>();
  let [song, setSong] = React.useState<p5.MediaElement | undefined>();
  let [fft, setFFT] = React.useState<p5.FFT | undefined>();
  const [loop, setLoop] = React.useState<boolean>(true);
  const [songPath, setSongPath] = React.useState<string>("");
  const [playingSong, setSetPlayingSong] = React.useState<string>(
    "https://res.cloudinary.com/dig6ih2ni/video/upload/v1671792121/Audio-Visualizer/everglow_hykjng.mp3"
  );

  // Preloading the song before canvas is rendered
  function preload(p: p5) {
    song = p.createAudio(playingSong);
    fft = new p5.FFT(0.8, 1024);
    song?.autoplay(true);
    setSong(song);
    setFFT(fft);
  }

  // Setting up the canvas
  function setup(p: p5, canvasParentRef: Element) {
    p.createCanvas(window.innerWidth, window.innerHeight / 1.5).parent(
      canvasParentRef
    );

    // Pausing the song on click if it is playing
    canvasParentRef.addEventListener("click", () => {
      if (!song) return;
      if (p.isLooping()) {
        song.pause();
        p.noLoop();
      } else {
        loop ? song.loop() : song.play();
        p.loop();
        setFFT(fft);
        setSong(song);
      }
      return;
    });

    fft?.setInput(song);
  }
  function draw(p: p5) {
    p.background("#1c1c1c");
    p.fill(255);
    p.rectMode(p.CENTER);
    if (!fft) return;

    let spectrum = fft.analyze();

    for (let i = 0; i < p.width; i++) {
      let x = p.map(i, 0, p.width / 2, 0, p.width);
      let h = p.constrain(
        p.map(spectrum[i], 0, 255, 0, p.height),
        0,
        p.height
      );
      p.stroke(`hsl(${spectrum[i]}, 100%, 50%)`);
      p.rect(x, p.height / 2, p.width / spectrum.length, h);
    }
  }
  // Updating canvas size on resize
  function windowResized(p: p5) {
    p.resizeCanvas(window.innerWidth, window.innerHeight);
  }

  // Enabling Fullscreen Mode
  function doubleClicked(p: p5) {
    if (p.deviceOrientation === "portrait") return;
    if (!window.screenTop && !window.screenY) {
      p.fullscreen(true);
    } else {
      p.fullscreen(false);
    }
  }

  function touchStarted(p: p5) {
    if (!p.isLooping() && song.time() <= 0) {
      alert("Please enable sound to play the audio file");
    }
  }
  const toggleMic = () => {
    setUseMic(!useMic);
  };
  const toggleLoop = () => {
    setLoop(!loop);
    if (!loop) {
      song?.loop();
    } else {
      song?.noLoop();
    }
  };
  // Using mic instead when the user clicks on the mic button
  useEffect(() => {
    if (!song || !fft) return;
    if (useMic) {
      mic = new p5.AudioIn();
      mic.start();
      song.pause();
      fft.setInput(mic);
      setMic(mic);
      setFFT(fft);
      setSong(song);
    } else if (!useMic && mic) {
      mic.stop();
      loop ? song.loop() : song.play();
      fft.setInput(song);
      setMic(mic);
      setFFT(fft);
      setSong(song);
    }
  }, [useMic]);

  // Updating the song when the user uploads/enter new url for the song
  const updateSongFile = (isFile?: boolean, url?: string) => {
    if (!song || !fft) return;
    if (isFile && url) {
      song.src = url;
      setSetPlayingSong(url);
      song.play();
      fft.setInput(song);
      setFFT(fft);
      setSong(song);
      setSongPath("");
      return;
    }
    if (!isFile || !songPath) return;
    if (!songPath.match(/^(http|https):\/\/[^ "]+$/)) return;
    setSetPlayingSong(songPath);
    song.src = songPath;
    song.play();
    fft.setInput(song);
    setFFT(fft);
    setSong(song);
    setSongPath("");
  };
  // Setting the song path when the user enters the url
  const updateSongPath = (value: string) => {
    setSongPath(value);
  };

  return (
    <>
      <div className="features-container">
        <Mike toggleMic={toggleMic} useMic={useMic} />
        <SongInput
          updateSongFile={updateSongFile}
          updateSongPath={updateSongPath}
          songPath={songPath}
        />
        <Loop loop={loop} toggleLoop={toggleLoop} useMic={useMic} />
      </div>

      <Sketch
        className="canvas"
        preload={preload}
        setup={setup}
        draw={draw}
        touchStarted={touchStarted}
        windowResized={windowResized}
        doubleClicked={doubleClicked}
      />
    </>
  );
};

export default Canvas;
