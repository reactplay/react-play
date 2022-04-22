import { Helmet } from "react-helmet";

function DefMeta() {
  return (
    <Helmet>
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
        content="/og-image.png" // React should default these to public
        data-react-helmet="true"
      />
      <meta
        property="og:image:alt"
        content="Start React Code Arena with ReactPlay"
        data-react-helmet="true"
      />
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
      <meta
        name="twitter:image"
        content="/og-image.png" // React should default these to public
        data-react-helmet="true"
      />
    </Helmet>
  );
}

export default DefMeta;
