<p align="center">
    <img src="https://i.postimg.cc/G2zVxzZZ/trest.png" />    
</p>

# Emojipedia 😉

Emojipedia is a fun project play where users can search for any emojis and can copy or use it anywhere.

## Play Demographic

- Language: Reactjs
- Level: Intermediate

## Creator Information 😎

- User: makdoom

- Github Link: https://github.com/makdoom

- Twitter: https://twitter.com/shaikh_makdoom

- Linkedin: https://linkedin.com/makdoom

## Implementation Details 🚀

- The implementation is quite simple. In this project, I've used [Open Emoji API](https://emoji-api.com/).

- There are basically three main components:

  - `Emojipedia`: As the name suggests it is an entry point of the project.
  - `EmojiCard`: It is responsible for rendering Emoji characters and their Unicode name in the card format.
  - `SkeletonCard`: This component is an animated placeholder that simulates the layout of a page while data is being loaded.

- There is also a search bar where users can search for any emoji.

- When `Emojipedia` components are rendered on UI, it will fetch all the emojis from [Open Emoji API](https://emoji-api.com/) endpoint and set it to the `EmojisList` state. I've used the custom hook `useFetch`() for fetching the emojis.

- `EmojiCard` component is used to render `emojiList` data in the card format.

- In the search bar when the users search for any emoji inside the search filter `useEffect()`, since it's an instant search so I've used `setTimeout()` method to produce 0.3 seconds delay so after every 0.3 seconds the `useEffect()` will re-render.

- It will compare the string which is entered by users with every object's `unicodeName` in `EmojiList` state, If it finds the match it will return that emoji object otherwise it will return all the emojis objects.

- To show copied emoji messages I've used `react-hot-toast` library. If the user clicks on any EmojiCard the `handleCopyEmoji` function will execute and it will copy the emoji character in the clipboard and show the success message in the toast notification.

## Resource

- [React Hot Toast](https://react-hot-toast.com/)
- [Open Emoji API](https://emoji-api.com/)

> **_NOTE:_** The Open Emoji API is still under development so you might see some emojis in unformatted manner.

## Contributing

First of all thanks for wanting to contribute! To start contributing to this play, please go through the [Contribution guidelines of ReactPlay](https://github.com/reactplay/react-play/blob/main/CONTRIBUTING.md).

## Thanks for your time!

Thank you so much for taking the time to read this. If you like this play, please do share about it and tag me [@shaikh_makdoom](https://twitter.com/shaikh_makdoom) and [@ReactPlayIO](https://twitter.com/ReactPlayIO). Also, star the [react-play repository](https://github.com/reactplay/react-play), it gives me and all the [contributors](https://github.com/reactplay/react-play#contributors-) a boost in confidence 🤩.

**Happy Coding!!**
