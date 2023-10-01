import { Card, CardBody, CardHeader } from '@material-tailwind/react';
import React from 'react';
import { TodaysForecastItem } from './TodaysForecastItem';

export function TodaysWeather({ data }) {
  // console.log(data);
  return (
    <div>
      <Card className="bg-gray-900">
        <CardHeader className="bg-black border-gray-900 border-4 text-white">
          <h1 className="text-[1.5rem] py-4 px-8">Today's Forecast</h1>
        </CardHeader>
        <CardBody>
          <div className="grid grid-cols-2 gap-4">
            <TodaysForecastItem data={data} parameter="maxwind_kph" />
            <TodaysForecastItem data={data} parameter="daily_chance_of_rain" />
            <TodaysForecastItem data={data} parameter="totalprecip_mm" />
            <TodaysForecastItem data={data} parameter="uv" />
            <TodaysForecastItem data={data} parameter="sunrise" />
            <TodaysForecastItem data={data} parameter="sunset" />
            <TodaysForecastItem data={data} parameter="is_sun_up" />
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
