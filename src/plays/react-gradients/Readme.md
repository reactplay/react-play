# React Gradients

React Gradients is list of beautiful gradients which you can easily use for your application by copying the CSS/TailwindCSS code for the desired gradient. You can also copy each color that has been used in the gradient.

## Play Demographic

- Language: js
- Level: Intermediate

## Creator Information

- User: ammaaraslam
- Gihub Link: https://github.com/ammaaraslam

## Implementation Details

The implementation of the play is fairly simple.
- Firstly it consumes data *(list of gradients and its details)* from a `json` file called `gradients.json`.
- Then it uses the `.map()` function to loop through this data and get each object *(gradient)*.
- Each object/gradient has the following properties:
    - `name` - The Name of the gradient
    - `tailwind` - The TailwindCSS code for the gradient.
    - `css` - The CSS code for the gradient.
    - `colors` - A list of colors used in the gradient.
- The properties of each gradient is passed to the separate component named `GradientComponent` in the `GradientComponent.js` file to be styled and displayed.
- In the `GradientComponent` component, you will find the following three functions to copy:
    - `copyTailwind` - This function copies the TailwindCSS code of the gradient.
    - `copyCSS` - This function copies the CSS code of the gradient.
    - `copyColor` - This function copies the colors used in the gradient.
- And finally, the play uses `react-hot-toast` *(a notification library for react)* to display a message after user has copied.

## Contributing

First of all thanks for wanting to contribute! To start contributing to this play, please go through the [Contribution guidelines of ReactPlay](https://github.com/reactplay/react-play/blob/main/CONTRIBUTING.md).

### Adding a new gradient

Currently to add a new gradient, you'll have to create a new `json` object in the `gradients.json` file. To do so, please follow the below steps.
- In the `gradients.json` file, add a new gradient of choice using the following syntax:
    ```json
    {
        "name": "Name of the Gradient",
        "css": "CSS code for the gradient.",
        "tailwind": "TailwindCSS code for the gradient",
        "colors": ["A list containing all the colors used in the gradient"]
    },
    ```
    **Example**:
    ```json
    {
        "name": "Flamingo",
        "css": "linear-gradient(to right, #f472b6, #db2777)",
        "tailwind": "bg-gradient-to-r from-pink-400 to-pink-600",
        "colors": ["#f472b6", "#db2777"]
    },
    ```
- Then create a Pull Request referencing this play.
> **Note:-** Please make sure to add all your colors in the form of HEX. Please use [this converter](https://www.w3schools.com/colors/colors_converter.asp) if you have used any other format.

>**Also Note:-** In the future, I'm hoping to add a feature where you are able to add a gradient easily by filling a simple form directly from the play so that you don't have to go through the trouble of doing everything manually, so stay tuned for that!

## Resources

Learn more about `react-hot-toast` -https://react-hot-toast.com/docs

Learn more about `JSON` Objects - https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON


## Thanks for your time!

Thank you so much for taking the time to read this. If you like this play, please do share about it and tag me [@itsammaar_7](https://twitter.com/itsammaar_7) and [@ReactPlayIO](https://twitter.com/ReactPlayIO). Also star the [react-play repository](https://github.com/reactplay/react-play), it gives me and all the [contributors](https://github.com/reactplay/react-play#contributors-) a boost in confidence 🤩.

**Happy Coding!!**