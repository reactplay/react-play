import { claimBadge } from "common/services/badges";
import BadgeCard from "./BadgeCard";

const NotClaimedBadges = ({
  badges
}) => {
  const handleClaim = async (id) => {
    console.log("hello");
    const claimedAt = new Date().toISOString();
    await claimBadge(id, claimedAt);
  }

  return (
    <>
      {
        badges.length === 0 ?
          <p>You have claimed all badges</p>
          : (badges.map((badge) => {
            return (
              <BadgeCard
                handleClaim={(id) => handleClaim(id)}
                key={badge.id}
                id={badge.id}
                source={"notClaimed"}
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