# Github User Finder

So user will be asked to input a valid github username and user data will be shown in a card component.

## Play Demographic

- Language: js
- Level: Intermediate

## Creator Information

- User: ANKIT9761
- Gihub Link: https://github.com/ANKIT9761
- Blog:
- Video:

## Implementation Details

So basically this could be done in normal js much faster i guess due to no major reusable components in this.But for this splitting logic between components and way to communicate and manage state between two childrens is hectic.
So usecontext api is used for global state management.
Then an Api client is required to fetch the user data from github api so i have used axios or this.
Then it is just how you present the data.

## Consideration

Although i wanna do the repo part also one thing i noticed when batching 2 updates on find button as 2 calls are made to change so component rerenders 2 time.
Maybe we can add another button later saying fetch repos and then it will make a call later.

## Resources

[GitHub Search API](https://docs.github.com/en/rest/search)
