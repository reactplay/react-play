import React, { useEffect, useRef, useState } from "react";
import "./canvas.css";

function Canvas() {
  const h = window.innerHeight;
  const w = window.innerWidth;
  let canvas, context;
  const canvasRef = useRef(null);
  const [color, setColor] = useState("white");

  useEffect(() => {
    canvas = canvasRef.current;
    context = canvas.getContext("2d");
    context.fillStyle = "black";

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
  var current = {};
  function onColorUpdate(e) {
    current.color = color;
  }
  function onMouseDown(e) {
    drawing = true;
    current.x = e.clientX || e.touches[0].clientX;
    current.y = e.clientY || e.touches[0].clientY;
  }

  function drawLine(x0, y0, x1, y1, color, emit) {
    var w = canvas.width;
    var h = canvas.height;
    context.beginPath();

    context.moveTo(x0, y0);
    context.lineTo(x1, y1);
    context.strokeStyle = color;
    context.lineWidth = 1;
    context.stroke();
    context.closePath();

    if (!emit) {
      return;
    }
  }

  function onDrawingEvent(data) {
    console.log(data);
    var w = canvas.width;
    var h = canvas.height;
    drawLine(data.x0 * w, data.y0 * h, data.x1 * w, data.y1 * h, data.color);
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
    var w = canvas.width;
    var h = canvas.height;
    drawing = false;
    console.log(e);
    drawLine(
      current.x,
      current.y,
      e.clientX || e.touches[0].clientX,
      e.clientY || e.touches[0].clientY,
      color,
      true
    );
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
    current.x = e.clientX || e.touches[0].clientX;
    current.y = e.clientY || e.touches[0].clientY;
    console.log(current.x, current.y);
  }

  return (
    <div
      className=''
      style={{
        overflow: "hidden",
      }}>
      <canvas ref={canvasRef} className='board' width={w} height={h}></canvas>
    </div>
  );
}

export default Canvas;
