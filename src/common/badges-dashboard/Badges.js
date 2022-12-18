import BadgeCard from './BadgeCard';

const Badges = ({ badges, isAuthenticated, handleLogin, handleViewBtnClick }) => {
  return (
    <div className=" flex flex-col">
      <div className=" self-end">
        {!isAuthenticated ? (
          <button onClick={handleLogin}>Login</button>
        ) : (
          <button onClick={handleViewBtnClick}>View my badges</button>
        )}
      </div>
      <div>
        {badges.length === 0 ? (
          <p>They haven't earned any badge</p>
        ) : (
          badges.map((badge, index) => {
            return (
              <BadgeCard
                coverImage={badge.badge_id_map.image}
                id={badge.badge_id_map.id}
                key={index}
                level={badge.badge_id_map.level}
                tag={badge.badge_id_map.tag}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default Badges;
