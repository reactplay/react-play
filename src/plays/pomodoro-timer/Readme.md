# Pomodoro Timer

A customizable Pomodoro Timer built with React and TypeScript that helps users improve productivity using the Pomodoro Technique.

Users can set focus, short break, and long break durations using an interactive scroll-based time picker. The timer supports start, pause, and reset controls, and automatically manages session timing.

This play demonstrates clean React architecture, custom hooks, state management, and interactive UI design.

---

## Play Demographic

- Language: TypeScript
- Level: Intermediate

---

## Creator Information

- User: deansereigns
- GitHub: https://github.com/deansereigns

---

## Features

- Focus, Short Break, and Long Break sessions
- Scroll-based time selection (interactive wheel picker)
- Start, Pause, and Reset controls
- Automatic session handling
- Clean and responsive UI
- Built using React functional components and hooks

---

## React Concepts Used

- Functional Components
- useState for managing timer state
- useEffect for timer interval handling
- Custom Hook (usePomodoroTimer)
- Component composition
- Controlled components
- TypeScript for type safety

---

## Implementation Details

The timer logic is implemented using a custom hook (`usePomodoroTimer`) which manages:

- session state
- timer countdown
- start, pause, reset logic
- time updates from scroll picker

The UI is broken into modular components:

- TimerDisplay
- DualTimePicker
- SessionSelector
- TimerControls

This ensures clean separation of logic and presentation.

---

## Considerations

- Timer updates immediately when time is changed
- Scroll picker wraps values circularly
- Timer stops correctly when paused or reset
- Clean and reusable component structure

---

