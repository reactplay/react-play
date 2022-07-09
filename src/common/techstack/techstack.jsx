import { Tech } from ".";

const TechStack = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className='md:w-[800px] 2xl:w-[1000px] w-full flex flex-wrap shadow-md m-8'>
        {Tech.map((Item, idx) => {
          if (Item.type === "icon") {
            return (
              <a
                key={idx}
                target='_blank'
                href={Item.link}
                className='hover:bg-blue-100 duration-100 hover:border-0 cursor-pointer md:w-[200px] 2xl:w-[250px] 2xl:h-[250px] sm:w-1/2 w-full border flex-wrap flex justify-center items-center flex-col p-8'
              >
                <Item.comp size='80' />
                <p>{Item.text}</p>
              </a>
            );
          } else if (Item.type === "image") {
            return (
              <a
                key={idx}
                target='_blank'
                href={Item.link}
                className='hover:bg-blue-100 duration-100 hover:border-0 cursor-pointer md:w-[200px] 2xl:w-[250px] 2xl:h-[250px] sm:w-1/2 w-full border flex-wrap flex justify-center items-center flex-col p-8'
              >
                <img src={Item.comp} alt={Item.comp} />
                <p className='text-center'>{Item.text}</p>
              </a>
            );
          }
        })}
      </div>
    </div>
  );
};

export default TechStack;
