# Roll The Dice

Roll the dice is a game that will play you VS computer. Where you can roll the dice as many times as you want then add the points to the main cart if you got 🎲 "1" during roll the dice you will lose points and then computer will roll dice. If you collect 100 points first before computer, you win 🏆 otherwise you loose 😪

## Play Demographic

- Language: js
- Level: Intermediate

## Creator Information

- User: wyarejali
- Gihub Link: https://github.com/wyarejali
- Website: https://wyarejali.vercel.app
- Blog: https://wyarejali.hashnode.dev
- Video: [Stack-Stream](https://www.stack-stream.com/v/roll-the-dice-a-react-game-2playsamonth-reactplay-io-again-with-updates-1)

## Game Features

- Play with robot
- play with friends
- Full visual documentation
- Winner cup
- Points - you want to play (default 100)

## Implementation Details

- Event Handling
- State Management
- Responsive Styling

**File/Folder Details**

- `RollTheDice.js` is the root file of the play.
- `assets` is the store of all the images required for the play
- `roll-the-dice.css` is the vanila css I have used for the play.
- `constant` for documentation assets
- `context/diceContext.jsx` is main file included all the game functionalities needed
- `hooks/useGame.js` provides all the values from context
- `hooks/useRandom.js` to get random dice, score and a function to get all that
- `hooks/useStep.js` steps hook, used for documentation
- `components/*` includes all the components needed
- `utils/randomNumber.js` used for get random number between provided numbers

## Consideration

- Custom Hooks
- ContextAPI
- useState
- useEffect

## Resources

All the assets https://flaticon.com/

**Happy Coding!** 🤩
