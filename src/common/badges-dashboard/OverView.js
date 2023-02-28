import BadgeCard from './BadgeCard';

const OverView = ({ badges }) => {
  return (
    <>
      {badges.length === 0 ? (
        <p>You have not earned badges</p>
      ) : (
        badges.map((badge) => {
          return (
            <BadgeCard
              coverImage={badge.badge_id_map.image}
              id={badge.badge_id_map.id}
              level={badge.badge_id_map.level}
              tag={badge.badge_id_map.tag}
            />
          );
        })
      )}
    </>
  );
};

export default OverView;
