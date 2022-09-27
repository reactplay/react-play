![cover.png](https://i.postimg.cc/0yKFRpT1/cover.png)

# Typing Speed Test ⌨️🚀

The faster you type, the faster you communicate with others. With **Typing Speed Test** you can check your WPM (words per minute) , CPM (Characters per minute) and accuracy scores in 60 seconds.

## Play Demographic

- Language: Reactjs

- Level: Beginner

## Creator Information

- User: makdoom

- Github Link: https://github.com/makdoom

- Twitter: https://twitter.com/shaikh_makdoom

- Linkedin: https://linkedin.com/makdoom

## Implementation Details

The implementation of the Typing Speed Test play is quite simple.

- All start with `TypingTest` component, every time the when `TypingTest` component will mount on the UI it will render different typing text

- `generateText()` function in `utils/index.js` is responsible for generating typing text. whenever it gets called it will return a paragraph of 60 random words, so when the `TypingTest` component rendered on the UI it called the `generateText()` function.

- There are two other components in `TypingTest`

  - `Timer` : As the name suggests it is responsible for 60 seconds countdown. It accepts single
  - `Stats` : The stats component is responsible for rendering WPM, CPM and accuracy statistics.

- The moment user starts typing the timer gets started and `handleUserInput()` starts listening to `onChange` event until it's get `space` (" ") as input. If so it means the user has finished typing a word.

- Then `handleUserInput()` will compare that word with Typing text whether it is correct or not and based on that it updates the word count , characters count and accuracy.

- The stats (word count, character count and accuracy ) will pass to `Stats` component as props and it will render the stats.

- In the `TypingTest` component, you will also find the refresh button besides the input on click of that button it will reset the state of `TypingTest` component. (new typing text, reset timer, reset word count etc.)

- There is also a `ResultModal` component when the time is up or user finished typing all the words the modal will open and render the statistics.

## Contributing

First of all thanks for wanting to contribute! To start contributing to this play, please go through the [Contribution guidelines of ReactPlay](https://github.com/reactplay/react-play/blob/main/CONTRIBUTING.md).

## Thanks for your time!

Thank you so much for taking the time to read this. If you like this play, please do share about it and tag me [@shaikh_makdoom](https://twitter.com/shaikh_makdoom) and [@ReactPlayIO](https://twitter.com/ReactPlayIO). Also star the [react-play repository](https://github.com/reactplay/react-play), it gives me and all the [contributors](https://github.com/reactplay/react-play#contributors-) a boost in confidence 🤩.

**Happy Coding!!**
