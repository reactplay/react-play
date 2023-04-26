export const FetchContributorInfoFilterByEmail = (email) => {
  return {
    display: 'user',
    name: 'user',
    function: 'users',
    where:
      //  { users_user_profile_map: { email: { _eq: 'holaniabhishek90@gmail.com' } } },
      {
        clause: {
          conditions: [
            {
              field: 'email',
              operator: 'eq',
              value: email
            }
          ]
        }
      },

    return: [
      'avatarUrl',
      'displayName',
      'email',
      'id',
      {
        plays: [
          'blog',
          'component',
          'cover',
          'created_at',
          'description',
          'dev_mode',
          'featured',
          'github',
          'id',
          'language',
          'level_id',
          'name',
          'path',
          { play_like: ['id', 'liked', 'play_id'] },
          { play_tags: ['play_id', 'tag_id'] },
          'slug',
          'style',
          'video'
        ]
      }
    ]
  };
};

// avatarUrl
// displayName
// email
// id
// plays {
//   blog
//   component
//   cover
//   created_at
//   description
//   dev_mode
//   featured
//   github
//   id
//   language
//   level_id
//   name
//   owner_user_id
//   path
//   play_like {
//     created_at
//     id
//     liked
//     play_id
//   }
//   play_tags {
//     play_id
//     tag_id
//   }
//   slug
//   style
//   video
// }
/*
This is an example snippet - you should consider tailoring it
to your service.
*/

// async function fetchGraphQL(operationsDoc, operationName, variables) {
//   const result = await fetch(
//     'https://rgkjmwftqtbpayoyolwh.hasura.ap-southeast-1.nhost.run/v1/graphql',
//     {
//       method: 'POST',
//       body: JSON.stringify({
//         query: operationsDoc,
//         variables: variables,
//         operationName: operationName
//       })
//     }
//   );

//   return await result.json();
// }

// const operationsDoc = `
//   query MyQuery {
//     meta_user_profile(
//       where: {users_user_profile_map: {email: {_eq: "holaniabhishek90@gmail.com"}}}
//     ) {
//       bio
//     create_at
//     github
//     id
//     photo_link
//     resume_link
//     social_links
//     users_user_profile_map {
//       avatarUrl
//       displayName
//       email
//       plays {
//         id
//         dev_mode
//         github
//         language
//         blog
//         video
//         slug
//         style
//         owner_user_id
//         name
//         description
//         component
//         path
//         level {
//           id
//           name
//         }
//         cover
//         featured
//         play_like {
//           liked
//         }
//       }
//     }
//   }
// }
// `;

// function fetchMyQuery() {
//   return fetchGraphQL(operationsDoc, 'MyQuery', {});
// }

// export async function startFetchMyQuery() {
//   const { errors, data } = await fetchMyQuery();

//   if (errors) {
//     // handle those errors like a pro

//     console.error(errors);
//   }

//   // do something great with this precious data

//   // console.log(data);

//   return data;
// }
