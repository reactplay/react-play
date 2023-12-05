# Schulte tables

Schulte tables are tables with randomly arranged characters, usually numbers used to check and develop the speed of their visual search in a specific order. These tables were originally developed by the German psychotherapist Walter Schulte as a psychodiagnostic test for studying the properties of attention.

## Play Demographic

- Language: JavaScript
- Level: Intermediate

## Creator Information

- [GitHub](https://github.com/mhShohan)
- [LinkedIn](https://www.linkedin.com/in/mehdi-hasan-shohan/)

## Implementation Details

Implementation details of Schulte tables Game
- Components
    - `Timer.jsx`: A component to track the time taken for the user to complete the table.
    - `SchulteTable.jsx`: This component will represent the Schulte table itself.
    - `Button.jsx` - Box of SchulteTable
    - `GameTable.jsx` - The main file of the game
- Utility function/files
    - `generateColor.js` - generate random RGB color
    - `shuffleArray.js` - shuffle the array on function call
    - `timeFormatter.js` - format time
- Display the Table: Render the Schulte table on the screen. You can use a grid layout to arrange the cells. Iterate through the array of characters and create Cell components for each one.
- Styling:Apply CSS styles to make your Schulte table visually appealing and user-friendly.


