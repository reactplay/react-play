import React, { useState } from 'react';
import { format } from 'date-fns';
import * as allLocales from 'date-fns/locale';

const TestimonialCard = ({ quote, title, name, avatarUrl, codeName, created_at }) => {
  const [formattedDate] = useState(() => {
    const locale = navigator.language.split('-').join('');
    const dnsLocale = allLocales[locale] ?? allLocales.enUS;
    return format(new Date(created_at), 'MMM dd, yyyy', {
      locale: dnsLocale
    });
  });
  return (
    <>
        <div class="relative mx-auto  flex  w-[300px] md:w-[500px] flex-col space-y-3 rounded-xl border border-gray-300 bg-white p-2  shadow-lg ">
          <div class="flex flex-col">
            <div className="flex space-x-5  items-center p-5">
              <div class="overflow-hidden rounded-full w-24 h-24 bg-gray-50 border border-gray-200">
                <img src={avatarUrl} alt="" />
              </div>
              <div className="flex flex-col space-y-2 justify-start items-start">
                <h3 class="text-xl font-black text-gray-800 md:text-3xl">{title}</h3>
                <h3 className="text-base">on {formattedDate}</h3>
              </div>
            </div>
            <div className="flex justify-start items-start ">
              <div class="flex w-[100%] flex-col justify-start items-start space-y-4 bg-white  p-6">
                <p class="text-base text-left text-gray-500">{quote}</p>
                <div class="flex justify-between">
                  <div class="flex items-center space-x-2">
                    <span class="rounded-full bg-green-300 px-2 py-1 text-xs text-gray-800">
                      {codeName}
                    </span>
                  </div>
                </div>
                <h3 class="text-gray-900">{name}</h3>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default TestimonialCard;
