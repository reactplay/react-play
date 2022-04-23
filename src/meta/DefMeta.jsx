import { Helmet } from "react-helmet";

function DefMeta() {
  return (
    <Helmet>
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="ReactPlay" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="400" />
      <meta property="og:image:height" content="300" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="description"
        content="ReactPlay is an open-source application to learn, create and
      share ReactJS projects with the developer community."
        data-react-helmet="true"
      />
      <meta
        property="og:description"
        content="ReactPlay is an open-source application to learn, create and
    share ReactJS projects with the developer community."
        data-react-helmet="true"
      />
      <meta
        property="og:title"
        content="ReactPlay - One app to learn, create, and share ReactJS projects."
        data-react-helmet="true"
      />
      <meta
        property="og:image"
        content="https://reactplay.io/og-image.png" // React should default these to public
        data-react-helmet="true"
      />
      <meta
        property="og:image:alt"
        content="Start React Code Arena with ReactPlay"
        data-react-helmet="true"
      />
      <meta
        name="twitter:title"
        content="ReactPlay - One app to learn, create, and share ReactJS projects."
        data-react-helmet="true"
      />
      <meta
        name="twitter:description"
        content="ReactPlay is an open-source application to learn, create and
    share ReactJS projects with the developer community."
        data-react-helmet="true"
      />
      <meta
        name="twitter:image"
        content="https://reactplay.io/og-image.png" // React should default these to public
        data-react-helmet="true"
      />
    </Helmet>
  );
}

export default DefMeta;
