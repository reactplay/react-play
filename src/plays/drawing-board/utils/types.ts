import { ModalState } from "../modules/modals/slice";

export type RootState = {
  currentStroke: Stroke;
  strokes: Stroke[];
  historyIndex: number;
  modalVisible: ModalState;
};

export type Stroke = {
  points: Point[];
  color: string;
};

export type Point = {
  x: number;
  y: number;
};
