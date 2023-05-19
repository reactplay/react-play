import React from 'react';
const TestimonialCard = ({ quote, title, name, avatarUrl, codeName }) => {
  return (
    <div class="flex h-screen flex-col justify-center">
      <div class="relative mx-auto flex max-w-xs flex-col space-y-3 rounded-xl border border-gray-300 bg-white p-2 shadow-lg md:max-w-3xl md:space-y-8">
        <div class="flex flex-col md:flex-row">
          <div class="grid w-full place-items-center md:w-1/3">
            <img src={avatarUrl} class="h-full rounded-xl object-contain" />
          </div>
          <div class="flex w-full flex-col justify-start items-start space-y-4 bg-white p-5 md:w-2/3 md:p-10">
            <h3 class="text-xl font-black text-gray-800 md:text-3xl">{title}</h3>
            <p class="text-base text-left text-gray-500">{quote}</p>
            <h3 class="text-gray-900">{name}</h3>
            <div class="flex justify-between">
              <div class="flex items-center space-x-2">
                <span class="rounded-full bg-green-300 px-2 py-1 text-xs text-gray-800">
                  {codeName}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
