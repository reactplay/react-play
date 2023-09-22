# Cricket Game

Play Cricket and Bat against the computer to chase down the given target of runs with few overs and wickets in hand. You will level up if you successfully chase the target or else you will lose! Hit the ball carefully when it comes to you! 🏏

## Play Demographic

- Language: js
- Level: Intermediate

## Creator Information

- User: SamirMishra27
- Gihub Link: https://github.com/SamirMishra27
- Blog:
- Video: (Youtube) https://youtu.be/S7-eh87Nq7w & https://youtu.be/FtyrJrMVqac
- Video: Stack Stream https://www.stack-stream.com/v/demo-of-react-play-project-cricket-game

## Implementation Details

The project uses the following concepts.

- `useState`
- `useRef`
- `useEffect`
- `Props`
- Reacts `SyntheticEvent` &
- Code splitting (Separating components in multiple files for easier readability and code quality)

## Consideration

Three considerations were taken when building this play.

- Where to store the user's level data?
  As this play was planned to be a pure react project, I decided to stick with the old-school `localStorage` object to store the user's level data.

- Do we need app wide state management tool?
  After several iterations of making this project work, I realized app wide state management is not needed at all. We just have a few components sharing data between each other, so we can stick with `props` and `state` concepts

- Storing `Game` object in both `state` and a `ref` object.
  This project helped me understand a very important detail in how `State` and `Ref`s work in react components.

  Ref's are used when you want some data to persist between multiple react component renders (remember each component render will invoke the function again, so it's variable environment will not have access to the updated data or variables)

  State is useful to show data on components and update immediately when state is updated.

  So, I stored the game object in 2 locations, `State` which will show the current game's details and info to the user interface, and `Ref` where it will be used to be reference the details inside the game logic, because we need to persist the data between renders.
  As the game process is following a functional approach and using synthetic events, this turned out to be the right way.

## Resources

Update external resources(if any)

- 🎵 Background Music Credit to: Good Vibes - MBB (https://www.youtube.com/watch?v=oeFXuzpJccQ)
