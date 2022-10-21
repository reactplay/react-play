import P5 from "p5";

export const generateRandomColor = (p: P5): P5.Color => {
  return p.color(p.random(0, 250), p.random(0, 250), p.random(0, 250));
};
export const getMidPoint = (p: P5, p1: P5.Vector, p2: P5.Vector): P5.Vector => {
  return p.createVector((p1?.x + p2?.x) / 2, (p1?.y + p2?.y) / 2);
};