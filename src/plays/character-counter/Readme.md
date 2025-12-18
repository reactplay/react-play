# Character Counter

A simple, real-time character and word counter built with React. This play helps users analyze the length of their text and estimate reading time.

### 🚀 Features
- **Real-time Counting**: Counts characters (including spaces) and words as you type.
- **Accurate Word Logic**: Uses Regex to ensure multiple spaces or new lines don't inflate the word count.
- **Reading Time Estimation**: Calculates the average time a human would take to read the text (based on 200 wpm).
- **Clear Action**: A one-click button to reset the text area.

### 💻 React Concepts Used
- **useState Hook**: To manage the string state of the text input.
- **Event Handling**: Capturing `onChange` events to trigger re-calculations.
- **Derived State**: Calculating counts directly during the render for better performance.

### 🛠️ How to use
1. Type or paste your text into the provided text area.
2. View the statistics updated instantly in the cards below.
3. Click "Clear All" to start fresh.

---
**Author**: IamAnkit19