# Hangman Game

Hangman is an old school favorite, a word game where the goal is simply to find the missing word or words. You will be presented with a number of blank spaces representing the missing letters you need to find. Use the keyboard to guess a letter.

## Play Demographic

- Language: ts
- Level: Intermediate

## Creator Information

- User: ANKITy102
- Gihub Link: https://github.com/ANKITy102
- Blog:
- Video:

## Implementation Details

The Hangman game is structured around four major components, each designed for enhanced aesthetics and responsiveness using the Styled Components library:

1. Drawing.tsx
   The Drawing.tsx component plays a crucial role in rendering the visual representation of the Hangman figure as the game progresses. It provides a visual cue to the player regarding their current progress and incorrect guesses.

2. Word.tsx
   The Word.tsx component is responsible for managing the user's input and displaying the correct answer. It ensures a seamless interaction between the player's guesses and the hidden word, providing real-time feedback on the correctness of their choices.

3. Keyboard.tsx
   The Keyboard.tsx component is designed to facilitate user input. It presents an interactive keyboard to players, allowing them to select letters as guesses. This component enhances the user experience by making it intuitive and straightforward to make guesses.

4. Main.tsx
   The Main.tsx component serves as the central hub where all other components are integrated, resulting in the complete Hangman game experience. It orchestrates the flow of the game, including initializing the game state, tracking guessed letters, and determining whether the player has won or lost.

In addition to these core components, the game relies on a wordList.json file, which contains a collection of hints and words used throughout the gameplay. These hints provide context to players and make the game more engaging and challenging.

This modular and organized structure ensures that the Hangman game is not only enjoyable but also maintainable and extensible, making it an excellent showcase of best practices in React development.

## Consideration

Update all considerations(if any)

## Resources

Update external resources(if any)
