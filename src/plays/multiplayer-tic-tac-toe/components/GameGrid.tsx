import React from 'react';
import { GAME_ARRAY } from '../data';
import Icon from './Icon';

type GameGrid = {
  changeItem: (index: number) => any;
};

export default function GameGrid({ changeItem }: GameGrid) {
  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        {GAME_ARRAY.map((ele, i) => (
          <div
            className="md:w-24 md:h-24 w-32 flex justify-center items-center h-32 bg-[#00f2f2] border-2 border-black rounded-lg cursor-pointer"
            key={i}
            onClick={() => changeItem(i)}
          >
            <Icon choice={GAME_ARRAY[i]} />
          </div>
        ))}
      </div>
    </>
  );
}
