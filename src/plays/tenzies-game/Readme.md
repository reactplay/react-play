<p align="center">
    <img src="https://i.postimg.cc/WbLRF7LP/Screenshot-2022-12-22-110350.jpg" />    
</p>

# Tenzies Game

Tenzies is a dice roll game where you have to roll the dice until all dice are the same. You can click each die to freeze it at its current value, then you can roll other dice to match the same number on the frozen dice. If all frozen dices are same number then you win the game.

## Play Demographic

- Language: React.js
- Level: Beginner

## Creator Information

- User: AbhiPatel10
- Gihub Link: https://github.com/AbhiPatel10
- LinkedIn: https://www.linkedin.com/in/abhipatel001/
- Twitter: https://twitter.com/AbhiPatel0001

## Implementation Details

- The implementation is quite simple. In this project, I use simple react concepts like `useState`, `useEffect`, `onClick` etc...

- There are basically two main components:

  - `Dice`: As the name suggests it is 10 dice box components that shows the number Between `1` to `6`.
  - `Main`: It is responsible for rendering dice components and handle all function Which is use to run the Game.

- `Main` component is used to render `Dice` component in the card format.

- When we click on roll button `onClick={rollDice}` It generate random number Between `1` to `6` using `Math.random()`.

- I use `toggle` function to Freeze the dice.

- I use `react-confetti` library to celebrate win.

## Consideration

First of all thanks for wanting to contribute! To start contributing to this play, please go through the [Contribution guidelines of ReactPlay](https://github.com/reactplay/react-play/blob/main/CONTRIBUTING.md).

## Resources

Thank you so much for taking the time to read this. If you like this play, please do share about it and tag me [@AbhiPatel0001](https://twitter.com/AbhiPatel0001) and [@ReactPlayIO](https://twitter.com/ReactPlayIO). Also, star the [react-play repository](https://github.com/reactplay/react-play), it gives me and all the [contributors](https://github.com/reactplay/react-play#contributors-) a boost in confidence 🤩.
