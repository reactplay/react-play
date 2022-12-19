import { Helmet } from 'react-helmet';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function DefMeta({ routes }) {
  const [title, setTitle] = useState(
    'ReactPlay - One app to learn, create, and share ReactJS projects'
  );
  const currentPath = useLocation().pathname;

  useEffect(() => {
    // Logic to set title of website dynamically depending on the path.
    routes.some((route) => route.path === currentPath && setTitle(route.title));
  }, [currentPath, routes]);

  return (
    <Helmet>
      <title>{title}</title>
      <meta content="website" property="og:type" />
      <meta content="ReactPlay" property="og:site_name" />
      <meta content="image/png" property="og:image:type" />
      <meta content="1200" property="og:image:width" />
      <meta content="628" property="og:image:height" />
      <meta content="summary_large_image" name="twitter:card" />
      <meta
        content="ReactPlay is an open-source application to learn, create and
      share ReactJS projects with the developer community."
        data-react-helmet="true"
        name="description"
      />
      <meta
        content="ReactPlay is an open-source application to learn, create and
    share ReactJS projects with the developer community."
        data-react-helmet="true"
        property="og:description"
      />
      <meta content={title} data-react-helmet="true" property="og:title" />
      <meta
        content="https://reactplay.io/og-image.png" // React should default these to public
        data-react-helmet="true"
        property="og:image"
      />
      <meta
        content="Start React Code Arena with ReactPlay"
        data-react-helmet="true"
        property="og:image:alt"
      />
      <meta content="https://reactplay.io" data-react-helmet="true" property="og:url" />
      <meta content={title} data-react-helmet="true" name="twitter:title" />
      <meta
        content="ReactPlay is an open-source application to learn, create and
    share ReactJS projects with the developer community."
        data-react-helmet="true"
        name="twitter:description"
      />
      <meta
        content="https://reactplay.io/og-image.png" // React should default these to public
        data-react-helmet="true"
        name="twitter:image"
      />
    </Helmet>
  );
}

export default DefMeta;
