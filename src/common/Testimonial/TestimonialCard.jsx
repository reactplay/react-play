import React, { useState } from 'react';
import { format } from 'date-fns';
import * as allLocales from 'date-fns/locale';
import './Testimonial.css';
import { email2Slug } from 'common/services/string';

const TestimonialCard = ({ quote, title, name, avatarUrl, codeName, created_at, email }) => {
  const [formattedDate] = useState(() => {
    const locale = navigator.language.split('-').join('');
    const dnsLocale = allLocales[locale] ?? allLocales.enUS;

    return format(new Date(created_at), 'MMM dd, yyyy', {
      locale: dnsLocale
    });
  });

  const getHostName = () => {
    var url = window.location.href;
    var arr = url.split('/');
    var result = arr[0] + '//' + arr[2];

    return result;
  };

  return (
    <div className="flex h-[700px] md:h-[500px] justify-center items-center min-h-[500px]">
      <div className="relative mx-auto  flex  w-[300px] md:w-[550px] md:max-w-[550px]  flex-col space-y-3 rounded-xl border border-gray-300 bg-white p-2  shadow-lg ">
        <div className="flex flex-col">
          <div className="flex justify-start items-start ">
            <div className="flex w-[100%] flex-col justify-start items-start space-y-4 bg-white  p-6">
              <h3 className="text-xl font-black text-gray-800 md:text-3xl">{title}</h3>
              <p className="bar text-base text-left text-gray-500 overflow-y-scroll overflow-x-hidden max-h-40">
                {quote}
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-24  items-center  p-5">
            <div className="flex items-center space-x-2">
              <div className="w-20 h-20">
                <a href={`${getHostName()}/contributors/${email2Slug(email)}/badges`}>
                  <img
                    alt=""
                    className="rounded-full w-20 h-auto overflow-hidden"
                    src={avatarUrl}
                  />
                </a>
              </div>
              <div className="flex flex-col space-y-2 justify-start items-start">
                <div className="flex flex-col space-y-1 md:flex-row md:space-x-2 justify-center items-center md:space-y-0">
                  <a href={`${getHostName()}/contributors/${email2Slug(email)}/badges`}>{name}</a>
                </div>
                <h3 className="text-base">on {formattedDate}</h3>
              </div>
            </div>
            <div className="ml-12 md:ml-0">
              <span className="rounded-full bg-green-300 px-2 py-1 text-xs text-gray-800">
                {codeName}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
