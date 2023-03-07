import { TechStackInfo } from './TechStackInfo';

const TechStackCategory = ({ category }) => {
  const filteredTechStack = TechStackInfo.filter((item) => item.category === category);

  return (
    <div>
      <h2>{category}</h2>
      <ul>
        {filteredTechStack.map((item, idx) => (
          <li key={idx}>
            {item.type === 'icon' ? (
              <a href={item.link} target="_blank" rel="noreferrer">
                <item.comp size="24" />
                <span>{item.text}</span>
              </a>
            ) : (
              <a href={item.link} target="_blank" rel="noreferrer">
                <img src={item.comp} alt={item.text} />
                <span>{item.text}</span>
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
        <TechStackCategory category="DevOps" />
        <TechStackCategory category="Analytics" />
      </div>
    </main>
  );
};

export default TechStack;