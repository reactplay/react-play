import { Card, CardBody, Typography } from '@material-tailwind/react';
import React from 'react';
import { WeatherImage } from './WeatherImage';

export function TitleCard({ title, temp, chanceOfRain, icon }) {
  return (
    <Card>
      <CardBody className="xl:px-20 lg:px-12 bg-gradient-to-tr from-[#3961c3] to-[#212b50] rounded-xl">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col justify-between">
            <div>
              <Typography className="text-3xl text-white font-bold">{title}</Typography>
              <Typography className="text-sm py-2 text-white">
                Chance of rain: {chanceOfRain}%
              </Typography>
            </div>
            <div>
              <Typography className="text-5xl pt-[2rem] text-white font-extrabold ">
                {temp} &deg;C
              </Typography>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className=" h-[100px] bg-black rounded-full">
              <WeatherImage className="p-0" size="large" url={icon} />
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
