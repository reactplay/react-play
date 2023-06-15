import React, { useState } from 'react';
import { format } from 'date-fns';
import * as allLocales from 'date-fns/locale';
import { email2Slug } from 'common/services/string';

const TestimonialCard = ({ home, quote, title, name, avatarUrl, category, created_at, email }) => {
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
    <div className={`${home && 'flex-1'}`}>
      <div>
        <h2 className="px-6 py-4 text-xl font-semibold">{title}</h2>
        <blockquote className={`${home ? 'h-28 sm:h-36' : 'max-h-32'} px-6 overflow-y-auto`}>
          <p className="leading-relaxed text-gray-700">{quote}</p>
        </blockquote>
      </div>
      <div className={`${home ? 'mb-6 mt-4 px-6' : 'm-4'} flex items-center gap-4`}>
        <a href={`${getHostName()}/contributors/${email2Slug(email)}/badges`}>
          <img
            alt="Profile Picture"
            className="h-12 w-12 rounded-full object-cover"
            src={avatarUrl}
          />
        </a>

        <div className="text-sm flex-1">
          <a
            className="font-medium"
            href={`${getHostName()}/contributors/${email2Slug(email)}/badges`}
          >
            {name}
          </a>
          <p className="mt-0.5">{formattedDate}</p>
        </div>
        <span className="text-xs font-bold tracking-wider uppercase bg-green-200 text-green-900 rounded-full px-2 py-1">
          {category}
        </span>
      </div>
    </div>
  );
};

export default TestimonialCard;
