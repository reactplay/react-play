import BadgeCard from "./BadgeCard";

const NotClaimedBadges = ({
  badges
}) => {
  return (
    <>
      {
        badges.length === 0 ?
          <p>You have claimed all badges</p>
          : (badges.map((badge) => {
            return (
              <BadgeCard
                id={badge.badge_id_map.id}
                coverImage={badge.badge_id_map.image}
                tag={badge.badge_id_map.tag}
                level={badge.badge_id_map.level}
              />
            );
          }))
      }
    </>
  );
}
export default NotClaimedBadges;