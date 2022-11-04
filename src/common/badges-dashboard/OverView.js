import BadgeCard from "./BadgeCard";

const OverView = ({
  badges
}) => {
  return (
    <>
      {
        badges.length === 0 ?
          <p>You have not earned badges</p> :
          (badges.map((badge) => {
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
  )
}
export default OverView;