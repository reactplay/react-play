import React from 'react';

const Widget = ({ widgetHeader, widgetContent }) => {
  return (
    <div
      style={{ boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)' }}
      className="box-border bg-white
    text-center h-28 w-52 rounded-md shadow-lg p-4 flex flex-col gap-3"
    >
      <div className="font-bold text-base">{widgetHeader}</div>
      <div className="text-4xl font-bold">{widgetContent}</div>
    </div>
  );
};

export default Widget;
