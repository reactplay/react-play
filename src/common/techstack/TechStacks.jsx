import { TechStackInfo } from './TechStackInfo';

const TechStack = () => {
  return (
    <main className="app-body">
      <h1 className="section-title text-center pt-8 mt-48">ReactPlay is proudly powered by</h1>
      <div className="list-brand-tech-stack">
        {/* <div className='md:w-[800px] 2xl:w-[1000px] w-full flex flex-wrap m-8'> */}
        {TechStackInfo.map((Item, idx) => {
          if (Item.type === 'icon') {
            return (
              <a
                className="brand-tech-stack"
                href={Item.link}
                key={idx}
                rel="noreferrer"
                target="_blank"
              >
                {/* eslint-disable react/jsx-pascal-case */}
                <Item.comp className="icon" size="80" />
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
                <img alt={Item.comp} className="image" src={Item.comp} />
                <p className="text-center">{Item.text}</p>
              </a>
            );
          } else {
            return null;
          }
        })}
      </div>
    </main>
  );
};

export default TechStack;
