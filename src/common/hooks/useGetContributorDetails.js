import { submit, submitMutation } from "common/services/request";
import { user_profile } from "common/services/user_profile";
import { user_skill_map } from "common/services/user_skill_map";
import { useEffect, useState } from "react";

function useGetContributorsDetails(userId) {
  const [loading, setLoading] = useState(true);
  const [contributor, setContributor] = useState({});
  const [skills, setSkills] = useState();
  const [error, setError] = useState(null);

  // my- 03724f8f-e5c7-423d-a98c-a7fdee9e959f
  // d5b5f543-fe5e-47c2-9e8b-f7c895e30127

  const fetchUser = async () => {
    setLoading(true);
    try {
      const res = await submit(
        user_skill_map.FetchUserSkillMapByUserId(
          userId
        )
      );
      const response = await submit(
        user_profile.FetchUserProfileById(
          userId
        )
      );
      if (response.length == 0) addUserProfile()
      setContributor(response[0]);
      setSkills(res);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };
  const addUserProfile = async () => {
    setLoading(true);
    try {
      await submitMutation(
        user_profile.InsertUserProfile(), {
        id: userId,
        // social_links: "{}",
      }
      );
      fetchUser()
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  }
  useEffect(() => {
    fetchUser();
  }, []);
  return [contributor, skills, error, loading, addUserProfile];
}

export default useGetContributorsDetails;

// const BasicFetchContributor = {
//   display: "contributor",
//   name: "Fetch_Contributor",
//   function: "users",
//   write: false,
//   return: [
//     "avatarUrl",
//     "displayName",
//     "email",
//     {
//       plays: [...DetailedFetchParam.return],
//     },
//   ],
// };
