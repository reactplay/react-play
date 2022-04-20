import { Helmet } from "react-helmet";

function DefMeta() {
  return (
    <Helmet>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta
        name="description"
        content="ReactPlay is an open-source application to learn, create and
      share ReactJS projects with the developer community."
        data-react-helmet="true"
      />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="ReactPlay" />
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
        content="%PUBLIC_URL%/og-image.png"
        data-react-helmet="true"
      />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="400" />
      <meta property="og:image:height" content="300" />
      <meta
        property="og:image:alt"
        content="Start React Code Arena with ReactPlay"
        data-react-helmet="true"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:site"
        content="@ReactPlayIO"
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
      <meta name="twitter:image" content="%PUBLIC_URL%/og-image.png" />
    </Helmet>
  );
}

export default DefMeta;
