![cover.png](https://user-images.githubusercontent.com/42600164/196524485-41c1fb84-29c4-4aed-880b-a5efac07ec58.png)

# Sierpinski Triangle 🔺

An Interesting use of p5.js and along with recursion. Sierpinski Triangle is an equilateral triangle, subdivided recursively into smaller equilateral triangles.

## Play Demographic

- Language: Reactjs, typescript

- Level: Beginner

- External packages: react-p5, p5

## Creator Information

- User: Bhavika

- Github Link: https://github.com/bhtibrewal

- Twitter: https://twitter.com/bhtibrewal

- Linkedin: https://linkedin.com/bhavika-tibrewal

## Implementation Details

p5.js is a JavaScript library for creative coding. It has a full set of drawing functionality.

The `SierpinskiTriangle` component is the first in all. You will see the Triangle filled with a different set of colours each time you refresh or resize the website.

- We make use of the `Sketch` component provided by the react-p5 package that lets us integrate p5 Sketches into our React App. `setup()` and `draw()` functions are passed to the component as props.

- We have a `Triangle` class and pass 3 vectors to it. Than call the `drawSierpinskiTriangle()` function.

- `drawSierpinskiTriangle()` is a recursive function that terminates when depth becomes equal to level.

- We find the mid point of the 3 vectors and create a new triangle from it.

- We have a `generateRandomColor()` utility function that generates random color to fill the triangle with.

## Contributing

First of all thanks for wanting to contribute! To start contributing to this play, please go through the [Contribution guidelines of ReactPlay](https://github.com/reactplay/react-play/blob/main/CONTRIBUTING.md). Please feel free to suggest any improvements or bugs with me.

## Thanks for your time!

Thank you so much for taking the time to read this. If you like this play, please do share about it and tag me [@bhtibrewal](https://twitter.com/bhtibrewal) and [@ReactPlayIO](https://twitter.com/ReactPlayIO). Also star the [react-play repository](https://github.com/reactplay/react-play), it gives me and all the [contributors](https://github.com/reactplay/react-play#contributors-) a boost in confidence 🤩.

**Happy Coding!!**
