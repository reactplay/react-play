import PlayHeader from 'common/playlists/PlayHeader';
import './styles.css';
import blogImage from './blog.png';

// WARNING: Do not change the entry componenet name
function SimpleSeoComponent(props) {
  // Your Code Start below.

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
          {/* Your Code Starts Here */}
          <div className="max-w-7xl mx-auto">
            <h1>Simple Article Seo Component</h1>
            <p className="text-2xl pt-8 font-bold">
              I originally built this example using the Next.js framework, but modified it to work
              as a standalone React component. If youd like, you can find the original code and a
              link to the GitHub repository in the top right corner of react play.
            </p>
            <img src={blogImage} />
            <p className="pt-4">
              We are creating a component in a React.js project that will take an object as input.
              The object will have properties and corresponding values. The component will then
              convert these properties and values into meta tags, which are HTML tags used to
              provide metadata about a webpage. The meta tags will be created using the properties
              as the key and the values as the content. For example, if the object has a property
              "keywords" with a value of "SEO, React.js, tutorial," the component would create a
              meta tags. These meta tags can be used to provide information about the webpage to
              search engines, such as the pages keywords, description, and author.
            </p>
            <p className="py-2">Create a component file SEO.js, including this code: </p>
            <pre className="console-wrapper">
              <code>
                {`
  import React from "react"

  export default function Seo({fields}) {
    return (
        {Object.entries(fields).map(([property, value]) => {        
          if(property === "canonical"){return <link key="canonical" rel="canonical" href={value} />}
          if (Array.isArray(value)) {
            return value.map((val, index) => (
              <meta
                key={index}
                property={property}
                name={property}
                content={val}
              />
            ));
          }
          return <meta key={property} property={property} name={property} content={value} />;
        })}
    )
  }
                `}
              </code>
            </pre>
            <p className="py-2">
              The code shown above demonstrates how to use the Seo component to automatically
              generate meta tags for search engine optimization (SEO). The object contains the
              information that the Seo component needs to create the meta tags. By passing the
              object(in example seoFields) to the Seo component, the meta tags will be generated
              automatically.
            </p>
            <p className="py-2">Here is an example index.js file for you.</p>
            <pre className="console-wrapper">
              <code>
                {`
  import Seo from "../components/Seo";

  const seoFields = {
    canonical:"/example.com/demo",
    keywords: "HTML, CSS, JavaScript",
    "article:published_time": "25 Dec 2022",
    "article:modified_time": "25 Dec 2022",
    "og:image": "./varcel.svg",
    "og:title": "React.js Seo Components",
    "og:description": "React.js Seo Components",
    "og:image:width": "850",
    "og:image:height": "650",
    "twitter:creator": "@handle",
    "twitter:card": "summary_large_image",
    "twitter:site": "summary_large_image",
    tags: ["tag1", "tag2", "tag3"],
    author: ["Debjit Biswas", "D Biswas"],
  };

  export default function Home() {
    return (
      <>
        <Head>
          <title>React.js Seo Components</title>
          <meta name="description" content="React.js Seo Components App" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Seo fields={seoFields} />
        </Head>
        <main>
          <Link href={"https://debjit.in"}>Debjit.in</Link>
        </main>
      </>
    );
  }
                `}
              </code>
            </pre>
          </div>
          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default SimpleSeoComponent;
