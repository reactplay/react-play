import React from 'react';
import Widget from './Widget';

const Contributions = ({ count }) => {
  return (
    <div className="grid grid-cols-4 grid-flow-row gap-x-4 gap-y-4">
      <Widget widgetContent={count.issueopen} widgetHeader="Open Issues" />
      <Widget widgetContent={count.propen} widgetHeader="Open Pull Requests" />
      <Widget widgetContent={count.prmerged} widgetHeader="Merged Pull Requests" />
      <Widget widgetContent={count.issueclosed} widgetHeader="Closed Issues" />
    </div>
  );
};

export default Contributions;
