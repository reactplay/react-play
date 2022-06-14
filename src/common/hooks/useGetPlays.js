
import { gql, useQuery } from '@apollo/client';

const GET_PLAYS_QUERY = gql`
query Fetch_Plays {
  plays {
    blog
    component
    cover
    created_at
    description
    featured
    github
    id
    language
    level {
      name
    }
    name
    path
    play_tags {
      tag {
        name
      }
    }
    updated_at
    user {
      id
      displayName
      avatarUrl
    }
    video
  }
}
`;

const useGetPlays = () => {
  const {loading, error, data} = useQuery(GET_PLAYS_QUERY);
  return [loading, error, data];
}

export default useGetPlays;