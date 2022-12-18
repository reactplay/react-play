import P5 from 'p5';
import { generateRandomColor } from './utils';

const drawTriangle = (p: P5, p1: P5.Vector, p2: P5.Vector, p3: P5.Vector) => {
  p.fill(generateRandomColor(p));
  p.triangle(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y);
};

// class Triangle
export class Triangle {
  p1: P5.Vector;
  p2: P5.Vector;
  p3: P5.Vector;
  draw: (p: P5) => void;
  constructor(p1: P5.Vector, p2: P5.Vector, p3: P5.Vector) {
    this.p1 = p1;
    this.p2 = p2;
    this.p3 = p3;
    this.draw = function (p: P5) {
      drawTriangle(p, p1, p2, p3);
    };
  }
}
