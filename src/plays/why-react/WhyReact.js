import { useState } from 'react';
import './why-react.css';

const WhyReact = () => {
  const [reasons] = useState([
    "React is Declarative",
    "It is fast",
    "JSX is simple",
    "It is Component-based",
    "It is easy to learn",
    "It is fun to use",
    "Write Once, Use Everywhere",
  ]);

  return(
    <>
    <h1>React</h1>
    <p>
      React is a JavaScript library for building user interfaces.
      It is maintained by <b>Facebook</b> and a community of individual developers and companies.
    </p>

    <ul>
      <h2 className="heading">Why React?</h2>
      {
        reasons.map((reason, index) => {
          return(
            <li key={index}>{reason}</li>
          );
        })
      }
    </ul>
    </>
  )
};

export default WhyReact;