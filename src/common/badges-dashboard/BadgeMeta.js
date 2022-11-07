import { Helmet } from 'react-helmet';

const BadgeMeta = ({
  title,
  username
}) => {
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
        content={`Hey, ${username} has earned badges from ReactPlay, have a look !!`}
        data-react-helmet="true"
      />
      <meta
        property="og:description"
        content={`Hey, ${username} has earned badges from ReactPlay, have a look !!`}
        data-react-helmet="true"
      />
      <meta property="og:title" content={title} data-react-helmet="true" />
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
      <meta name="twitter:title" content={title} data-react-helmet="true" />
      <meta
        name="twitter:description"
        content={`Hey, ${username} has earned badges from ReactPlay, have a look !!`}
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

export default BadgeMeta;