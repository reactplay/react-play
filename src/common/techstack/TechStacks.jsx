import { TechStackInfo } from "./TechStackInfo";

const TechStack = () => {
  return (
    <div className="app-body">
      <h2 className="section-title text-center pt-8 mt-48">
        ReactPlay is proudly powered by
      </h2>
      <div className="list-brand-tech-stack">
        {/* <div className='md:w-[800px] 2xl:w-[1000px] w-full flex flex-wrap m-8'> */}
        {TechStackInfo.map((Item, idx) => {
          if (Item.type === "icon") {
            return (
              <a
                key={idx}
                target="_blank"
                rel="noreferrer"
                href={Item.link}
                className="brand-tech-stack"
              >
                {/* eslint-disable-next-line react/jsx-pascal-case */}
                <Item.comp size="80" className="icon" />
                <p>{Item.text}</p>
              </a>
            );
          } else if (Item.type === "image") {
            return (
              <a
                key={idx}
                target="_blank"
                rel="noreferrer"
                href={Item.link}
                className="brand-tech-stack"
              >
                <img src={Item.comp} alt={Item.comp} className="image"/>
                <p className="text-center">{Item.text}</p>
              </a>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default TechStack;
