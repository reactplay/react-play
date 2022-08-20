import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function DefMeta() {
  const [title, setTitle] = useState("ReactPlay - One app to learn, create, and share ReactJS projects.")
  const currentPath = useLocation().pathname

  useEffect(() => {
    if (currentPath == "/plays") {
      setTitle("ReactPlay - Plays")
    }
    else if (currentPath == "/ideas") {
      setTitle("ReactPlay - Ideas")
    }
    else if (currentPath == "/tech-stacks") {
      setTitle("ReactPlay - Tech Stacks")
    }
    else {
      setTitle("ReactPlay - One app to learn, create, and share ReactJS projects.")
    }
  
  }, [currentPath])
  return (
    <Helmet>
      <title>{title}</title>
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="ReactPlay" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="628" />
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
        content={title}
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
        property="og:url"
        content="https://reactplay.io"
        data-react-helmet="true"
      />
      <meta
        name="twitter:title"
        content={title}
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
