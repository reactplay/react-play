import React from 'react';
import sanitizeHTML from 'common/utils/sanitizeHTML';

const Output = ({ md, text, mdPreviewBox }) => {
  return (
    <div
      className="md-editor output-div"
      dangerouslySetInnerHTML={{ __html: sanitizeHTML(md.render(text)) }}
      id={mdPreviewBox}
    />
  );
};

export default Output;
