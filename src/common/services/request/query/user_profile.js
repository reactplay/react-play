import { DetailedFetchParam } from "common/services/request/query/fetch-plays";

export const FetchUserProfileQuery = {
  display: "User",
  name: "Fetch_User",
  function: "meta_user_profile",
  write: false,
  return: [
    "photo_link",
    "id",
    "create_at",
    "resume_link",
    "social_links",
    "testimonials",
    "bio",
    "website",
    {
      users_user_profile_map: [
        "avatarUrl",
        "displayName",
        "email",
        {
          plays: [...DetailedFetchParam.return],
        },
      ],
    },
  ],
};
