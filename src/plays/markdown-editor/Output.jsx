import React from 'react';

const Output = ({ md, text, mdPreviewBox }) => {
  return (
    <div
      className="md-editor output-div"
      id={mdPreviewBox}
      dangerouslySetInnerHTML={{ __html: md.render(text) }}
    ></div>
  );
};

export default Output;
