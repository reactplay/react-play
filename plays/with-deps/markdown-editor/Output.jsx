import React from 'react';

const Output = ({ md, text, mdPreviewBox }) => {
  return (
    <div
      className="md-editor output-div"
      dangerouslySetInnerHTML={{ __html: md.render(text) }}
      id={mdPreviewBox}
    />
  );
};

export default Output;
