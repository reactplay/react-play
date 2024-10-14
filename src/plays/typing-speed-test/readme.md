![cover.png](https://i.postimg.cc/zBR89Ft1/cover.png)

# Typing Speed Test ⌨️🚀

The faster you type, the faster you communicate with others. With **Typing Speed Test** you can check your WPM (words per minute) , CPM (Characters per minute), Max WPM and accuracy scores in 120 seconds.

## Play Demographic

- Language: Reactjs

- Level: Beginner

## Creator Information

- User: makdoom

- Github Link: https://github.com/makdoom

- Twitter: https://twitter.com/shaikh_makdoom

- Linkedin: https://linkedin.com/makdoom

## Re-creator Information

- User: BayajidAlam

- Github Link: https://github.com/BayajidAlam

- Twitter: https://x.com/bayajid_alam

- Linkedin: https://www.linkedin.com/in/bayajid-alam-joyel

## Implementation Details

The implementation of the Typing Speed Test project is quite simple.

- It all starts with the `TypingTest` component. Every time the `TypingTest` component mounts on the UI, it renders different typing text.

- The `generateText()` function in `utils/index.js` is responsible for generating the typing text. Whenever it gets called, it returns a paragraph of 60 random words, so when the `TypingTest` component is rendered on the UI, it calls the `generateText()` function.

- There are two other components in `TypingTest`:
  - **Timer**: As the name suggests, it is responsible for a 60-second countdown. It accepts a single prop to control the timer functionality.
  - **Stats**: The stats component is responsible for rendering WPM (Words Per Minute), CPM (Characters Per Minute), and accuracy statistics.

- The moment the user starts typing, the timer gets started, and `handleUserInput()` starts listening for the `onChange` event until it receives a space (" ") as input. If so, it means the user has finished typing a word.

- Then, `handleUserInput()` compares that word with the typing text to determine whether it is correct or not. Based on this comparison, it updates the word count, character count, and accuracy.

- The stats (word count, character count, and accuracy) are passed to the `Stats` component as props, and it renders the statistics accordingly.

- In the `TypingTest` component, there is also a refresh button beside the input. On clicking this button, it resets the state of the `TypingTest` component, including generating new typing text, resetting the timer, and resetting the word count.

- Additionally, there is a `ResultModal` component that opens when the time is up or the user finishes typing all the words. This modal renders the statistics of the typing session, providing a summary of the user’s performance.


## Contributing

First of all thanks for wanting to contribute! To start contributing to this play, please go through the [Contribution guidelines of ReactPlay](https://github.com/reactplay/react-play/blob/main/CONTRIBUTING.md).

## Thanks for your time!

Thank you so much for taking the time to read this. If you like this play, please do share about it and tag us [@shaikh_makdoom](https://twitter.com/shaikh_makdoom), [@bayajid_alam](https://x.com/bayajid_alam) and [@ReactPlayIO](https://twitter.com/ReactPlayIO). Also star the [react-play repository](https://github.com/reactplay/react-play), it gives me and all the [contributors](https://github.com/reactplay/react-play#contributors-) a boost in confidence 🤩.

**Happy Coding!!**
