import React, { useEffect, useRef, useState } from "react";
import "./canvas.css";

function Canvas() {
    const h=window.innerHeight
    const w=window.innerWidth
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
  function onColorUpdate(e) {
    current.color = color;
    // setcolor(color);
    // console.log(colorss);
  }
  //  canvas.addEventListener('mousemove', onMouseDown,false)
  function onMouseDown(e) {
    drawing = true;
    current.x = e.clientX || e.touches[0].clientX;
    current.y = e.clientY || e.touches[0].clientY;
  }

  function drawLine(x0, y0, x1, y1, color, emit) {
    var w = canvas.width;
    var h = canvas.height;
    context.beginPath();
    // console.log(x0, y0, x1, y1);
    // console.log(x0)
    context.moveTo(x0, y0);
    context.lineTo(x1,y1);
    context.strokeStyle = color;
    context.lineWidth = 1;
    context.stroke();
    context.closePath();

    // console.log(color);

    if (!emit) {
      return;
    }
   
  }

  function onDrawingEvent(data){
    console.log(data)
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
    console.log(e)
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
    current.x = e.clientX || e.touches[0].clientX;
    current.y = e.clientY || e.touches[0].clientY;
console.log(current.x,current.y)
}

  // const canvasRef = useRef(null)

  return (
    <div
      className=''
      style={{
        // height: "100vh",
        // width: "100%",
        // background: "red",
        overflow: "hidden",
      }}>
     
      <canvas
        ref={canvasRef}
        className='board'
        // width={1000}
        width={w}

        height={h}
        // height={1000}
      ></canvas>
    </div>
  );
}

export default Canvas;
