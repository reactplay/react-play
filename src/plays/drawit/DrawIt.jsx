import { getPlayById } from "meta/play-meta-util";

import PlayHeader from "common/playlists/PlayHeader";
import "./drawIt.css";
import { useEffect, useRef, useState } from "react";

function DrawIt(props) {
  // Do not remove the below lines.
  // The following code is to fetch the current play from the URL
  const { id } = props;
  const play = getPlayById(id);

  // Your Code Start below.
  let canvas, context;
  const canvasRef = useRef(null);
  const [color, setcolor] = useState("white");
  //   console.log(color);

  //   useEffect(() => {
  // console.log("kk",color)
  //     onColorUpdate();

  //   }, [color]);
  useEffect(() => {
    // console.log("iiiiiiii", color);
    canvas = canvasRef.current;
    //Our first draw
    context = canvas.getContext("2d");
    context.fillStyle = "black";
    // context.strokeStyle="red"

    context.fillRect(0, 0, context.canvas.width, context.canvas.height);

    canvas.addEventListener("mousedown", onMouseDown, false);
    canvas.addEventListener("mouseup", onMouseUp, false);
    canvas.addEventListener("mouseout", onMouseUp, false);
    canvas.addEventListener("mousemove", throttle(onMouseMove, 10), false);
    //Touch support for mobile devices
    canvas.addEventListener("touchstart", onMouseDown, false);
    canvas.addEventListener("touchend", onMouseUp, false);
    canvas.addEventListener("touchcancel", onMouseUp, false);
    canvas.addEventListener("touchmove", throttle(onMouseMove, 10), false);
  }, []);

  var drawing = false;
  var current = {
    // color: colorss.color,
  };

  //  canvas.addEventListener('mousemove', onMouseDown,false)
  function onMouseDown(e) {
    drawing = true;
    current.x = e.clientX || e.touches[0].clientX;
    current.y = e.clientY || e.touches[0].clientY;
  }

  function drawLine(x0, y0, x1, y1, color, emit) {
    context.beginPath();
    context.moveTo(x0, y0);
    context.lineTo(x1, y1);
    context.strokeStyle = color;
    context.lineWidth = 1;
    context.stroke();
    context.closePath();

    // console.log(color);

    if (!emit) {
      return;
    }
  }

  function throttle(callback, delay) {
    var previousCall = new Date().getTime();
    return function () {
      var time = new Date().getTime();

      if (time - previousCall >= delay) {
        previousCall = time;
        callback.apply(null, arguments);
      }
    };
  }
  function onMouseUp(e) {
    if (!drawing) {
      return;
    }
    drawing = false;
    drawLine(
      current.x,
      current.y,
      e.clientX || e.touches[0].clientX,
      e.clientY || e.touches[0].clientY,
      color,
      true
    );
    // console.log("color====", e.target.color);
  }
  function onMouseMove(e) {
    if (!drawing) {
      return;
    }
    drawLine(
      current.x,
      current.y,
      e.clientX || e.touches[0].clientX,
      e.clientY || e.touches[0].clientY,
      color,
      true
    );
    // console.log(color);
    current.x = e.clientX || e.touches[0].clientX;
    current.y = e.clientY || e.touches[0].clientY;
  }

  return (
    <>
      <div className='play-details'>
        <PlayHeader play={play} />
        <div className='play-details-body'>
          {/* Your Code Starts Here */}

          <div
            className=''
            style={{
              height: "100vh",
              width: "100%",
              background: "whitesmoke",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
            }}>
            <canvas
              ref={canvasRef}
              className='board'
              width={1024}
              height={622}></canvas>
          </div>
          <div>
            <h1>Play Details - DrawIt</h1>
            <p>
              DrawIt is an react application which is like a paint tool. You can
              draw in the canvas and be an artist😉
            </p>
          </div>
          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default DrawIt;
