import React from 'react';
import Widget from './Widget';

const Contributions = ({ count }) => {
  return (
    <div className="grid grid-cols-4 grid-flow-row gap-x-4 gap-y-4">
      <Widget widgetHeader={'Open Issues'} widgetContent={count.issueopen} />
      <Widget widgetHeader={'Open Pull Requests'} widgetContent={count.propen} />
      <Widget widgetHeader={'Merged Pull Requests'} widgetContent={count.prmerged} />
      <Widget widgetHeader={'Closed Issues'} widgetContent={count.issueclosed} />
    </div>
  );
};

export default Contributions;
