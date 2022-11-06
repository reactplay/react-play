export const claimBadges = (id) => {
  return {
    display: "update badge_claimed",
    name: "update_meta_user_badge_map",
    function: "update_meta_user_badge_map",
    write: "true",
    value: {
      claimed: true,
    },
    where: {
      clause: {
        conditions: [
          {
            field: "id",
            operator: "eq",
            value: id
          }
        ]
      }
    },
    return: [
      "affected_rows"
    ]
  }
};
export const setClaimBadgesAt = (id, claimedAt) => {
  return {
    display: "update badge_claimed",
    name: "update_meta_user_badge_map",
    function: "update_meta_user_badge_map",
    write: "true",
    value: {
      claimed_at: claimedAt,
    },
    where: {
      clause: {
        conditions: [
          {
            field: "id",
            operator: "eq",
            value: id
          }
        ]
      }
    },
    return: [
      "affected_rows"
    ]
  }
};


