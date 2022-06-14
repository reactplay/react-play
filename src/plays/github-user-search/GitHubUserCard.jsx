export const GitHubUserCard = ({username, avatar, link}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      style={{backgroundImage: `url(${avatar})`}}
      className=" bg-cover bg-center h-[15rem] w-[15rem] flex rounded-lg"
    >
      <h1 className="text-2xl p-2 w-full h-full text-white opacity-0 hover:opacity-80 hover:bg-black rounded-lg">
        {username}
      </h1>
    </a>
  );
};
