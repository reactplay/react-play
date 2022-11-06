import { submit } from "./request"
import { claimBadges, setClaimBadgesAt } from "./request/query/claim-badge";
import { FetchAllBadgesFilterByUserId, FetchBadgesFilterByUserId } from "./request/query/fetch-badges-filter-by-user-id";
import { FetchUserFilterByEmail } from "./request/query/fetch-user-filter-by-email"

export const getUserByEmail = async (email) => {
  try {
    const result = await submit(FetchUserFilterByEmail(email));
    return result;
  } catch (e) {
    return [];
  }
}

export const getBadgesByUserId = async (id, claimed) => {
  try {
    const result = await submit(FetchBadgesFilterByUserId(id, claimed));
    return result;
  } catch (e) {
    return [];
  }
}

export const getAllBadgesByUserId = async (id) => {
  try {
    const result = await submit(FetchAllBadgesFilterByUserId(id));
    return result;
  } catch (e) {
    return [];
  }
}

export const claimBadge = async (id, claimedAt) => {
  console.log(id);
  console.log(claimedAt);
  console.log("inside");
  try {
    const resClaimedSet = await submit(claimBadges(id));
    const resClaimedAtSet = await submit(setClaimBadgesAt(id, claimedAt))
    console.log(await resClaimedAtSet);
    console.log(await resClaimedSet);
  } catch (e) {
    console.log(e);
    return null;
  }
}