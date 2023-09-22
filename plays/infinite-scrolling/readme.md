# Infinite Scrolling

An app, where user will scroll through the posts. on scrolling when user sees the last post, play will add more 20 posts to list.

## Play Demographic

- Language: js
- Level: Intermediate

## Creator Information

- User: aks318
- Gihub Link: https://github.com/aks318
- Blog: null
- Video: null

## Implementation Details

Implementaion starts with `InfiniteScrolling` component.

- First I have fecthed posts data from `https://jsonplaceholder.typicode.com/photos` and it stored into `posts state`. Then passed down the data into `Posts` component.
- In `Posts` component I have used 3 state.

1. `displayPosts` first gets 20 data and on scrolling when user sees the last post, it will add more 20 posts to list.
2. `lastPost` stores DOM object of last element from displayPosts
3. `pageNo` gets incremented on every interaction on `lastPost`

- To observe the `lastPost` I have user `IntersectionObserver` and once it observe the `lastPost` it increments the `pageNo`.
- And once the `pageNo` gets incremented, more 20 posts gets added into `displayPosts`
