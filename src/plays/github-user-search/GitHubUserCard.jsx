export const GitHubUserCard = ({username, avatar, link}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      style={{backgroundImage: `url(${avatar})`}}
      className=" bg-cover bg-center h-[15rem] w-[15rem] rounded-lg flex flex-col justify-end"
    >
      <h1 className="text-2xl text-center xs:bg-black p-2 w-full rounded-lg text-white lg:h-full lg:opacity-0 lg:hover:opacity-80 lg:hover:bg-black ">
        {username}
      </h1>
    </a>
  );
};
