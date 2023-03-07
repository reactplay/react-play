import { TechStackInfo } from './TechStackInfo';

const TechStackCategory = ({ category }) => {
  const filteredTechStack = TechStackInfo.filter((item) => item.category === category);

  return (
    <div>
      <h2>{category}</h2>
        <ul>
        {filteredTechStack.map((item, idx) => (
          <li key={idx} className='list-brand-tech-stack'>
            {item.type === 'icon' ? (
              <a href={item.link} rel="noreferrer" target="_blank" className="brand-tech-stack">
                <item.comp className="icon" size="80" />
                <p>{item.text}</p>
              </a>
            ) : (
              <a href={item.link} rel="noreferrer" target="_blank" className="brand-tech-stack" key={idx}>
                <img alt={item.comp} className="image" src={item.comp} size="80"/>
                <p className="text-center">{item.text}</p>
              </a>
            )}
          </li>
        ))}
        </ul>
    </div>
  );
};

const TechStack = () => {
  return (
    <main className="app-body">
      <h1 className="section-title text-center pt-8 mt-48">ReactPlay is proudly powered by</h1>
      <div className="list-brand-tech-stack">
        <TechStackCategory category="Frontend" />
        <TechStackCategory category="Backend" />
      </div>
    </main>
  );
};

export default TechStack;
