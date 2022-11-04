import BadgeCard from "./BadgeCard";

const ClaimedBadges = ({
  badges
}) => {
  return (
    <>
      {
        badges.length === 0 ?
          <p>No badges claimed yet</p>
          : (
            badges.map((badge) => {
              return (
                <BadgeCard
                  id={badge.badge_id_map.id}
                  coverImage={badge.badge_id_map.image}
                  tag={badge.badge_id_map.tag}
                  level={badge.badge_id_map.level}
                />
              );
            })
          )
      }

    </>
  );
}
export default ClaimedBadges;