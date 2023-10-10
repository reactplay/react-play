import { TechStackInfo } from './TechStackInfo';
import './TechStacks.css';

const TechStack = () => {
  const TechStackCategories = [
    { categoryName: 'Frontend', categoryID: 'frontend' },
    { categoryName: 'Backend', categoryID: 'backend' },
    { categoryName: 'DevOps and Deployment', categoryID: 'devOpsAndDeployment' },
    { categoryName: 'Analytics and Monitoring', categoryID: 'analyticsAndMonitoring' },
    { categoryName: 'Programming Language', categoryID: 'programmingLanguage' }
  ];

  return (
    <main className="app-body items-center">
      <h1 className="heading lg:text-5xl text-3xl">ReactPlay is proudly powered by</h1>
      <div>
        {TechStackCategories.map((category) => (
          <TechStackCategory {...category} key={category.categoryID} />
        ))}
      </div>
    </main>
  );
};

export default TechStack;

const TechStackCategory = ({ categoryName, categoryID }) => {
  const filteredTechStackInfo = TechStackInfo.filter(
    (category) => category.categoryID === categoryID
  );

  return (
    <div className="row">
      <h1 className="section-title text-center pt-4 mt-48 tech-brand-name">{categoryName}</h1>
      <div className="list-brand-tech-stack">
        {filteredTechStackInfo.map((Item, idx) => {
          const Icon = Item.comp;

          if (Item.categoryID === categoryID) {
            if (Item.type === 'icon') {
              return (
                <a
                  className="brand-tech-stack"
                  href={Item.link}
                  key={idx}
                  rel="noreferrer"
                  target="_blank"
                >
                  <Icon className="icon" size="80" />
                  <p>{Item.text}</p>
                </a>
              );
            } else if (Item.type === 'image') {
              return (
                <a
                  className="brand-tech-stack"
                  href={Item.link}
                  key={idx}
                  rel="noreferrer"
                  target="_blank"
                >
                  <img alt={Icon} className="image" src={Icon} />
                  <p className="text-center">{Item.text}</p>
                </a>
              );
            } else {
              return null;
            }
          }
        })}
      </div>
    </div>
  );
};
