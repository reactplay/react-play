import React from 'react';

export function WeatherImage({ url, size }) {
  let csshw = 'w-[50px] h-[50px]';
  if (size == 'large') {
    csshw = 'w-[100px] h-[100px]';
  } else if (size == 'medium') {
    csshw = 'w-[70px] h-[70px]';
  }

  return (
    <div>
      <img alt="WeatherImg" className={csshw} src={url.replace('//', 'https://')} />
    </div>
  );
}
