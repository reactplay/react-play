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
            className="md:h-16  sm:w-44 w-20  gird justify-center items-center h-12  bg-[#00f2f2] border-2 border-black rounded-lg cursor-pointer"
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
