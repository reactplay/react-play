import React, { useState } from 'react';
import PlayHeaderInfo from './PlayHeaderInfo';
import PlayHeaderActions from './PlayHeaderActions';
import { format } from 'date-fns';
import * as allLocales from 'date-fns/locale';

const PlayHeader = ({ play }) => {
  const [formattedPlayDate, setFormattedPlayDate] = useState(() => {
    const locale = navigator.language.split('-').join('');
    const dnsLocale = allLocales[locale] ?? allLocales.enUS;

    return format(new Date(play.created_at), 'dd MMMM, yyyy', {
      locale: dnsLocale
    });
  });

  return (
    <>
      <div className="play-details-header">
        <PlayHeaderInfo play={play} />
        <div className="header-rightcol">
          <div className="header-actions">
            <PlayHeaderActions play={play} />
          </div>
          <small className="header-desc">{play.description}</small>
          <small className="m-0 text-left header-desc">Created on {formattedPlayDate}</small>
        </div>
      </div>
    </>
  );
};

export default React.memo(PlayHeader);
