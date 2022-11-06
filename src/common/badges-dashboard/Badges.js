import BadgeCard from "./BadgeCard";

const Badges = ({
  badges,
  isAuthenticated,
  handleLogin,
  handleViewBtnClick
}) => {
  return (
    <div className=" flex flex-col">
      <div className=" self-end">
        {
          !isAuthenticated ? (
            <button onClick={handleLogin}>
              Login
            </button>
          ) :
            (
              <button onClick={handleViewBtnClick}>
                View my badges
              </button>
            )
        }

      </div>
      <div>
        {
          badges.length === 0 ?
            <p>They haven't earned any badge</p>
            : (
              badges.map((badge, index) => {
                return (
                  <BadgeCard
                    source={"all"}
                    key={badge.badge_id_map.id}
                    coverImage={badge.badge_id_map.image}
                    tag={badge.badge_id_map.tag}
                    level={badge.badge_id_map.level}
                  />
                );
              }))
        }
      </div>
    </div>
  );
}
export default Badges;