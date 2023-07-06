# React Transitions

A Play to explain the Transitions in React using the useTransition Hook in React 18.

By default, all the sttate updates are Urgent and High-Priority in React. This
may cause issues when your application state is dealing with a huge list of 
data. Some state updates can be marked as non-urgent and that's where the Transition comes in.

## Play Demographic

- Language: js
- Level: Intermediate

## Creator Information

- User: atapas
- Gihub Link: https://github.com/atapas
- Video: https://www.youtube.com/watch?v=UspVJPxYnQM

## Implementation Details
In this play, I've shown two modes of the same application.

The first mode is the regular one without any transition and the second mode
uses the `useTransition` and `setTransition`.

In the first mode, when you type down the text in the textfield to search down users,
and then try removing the texts fast in the textbox, you will observe a lag. You need
to press the backspace key multiple times to clear of the texts in the textbox. This is an unacceptable behaviour as it is going to make the end users frustrated.

In the second mode, with the `useTransition` hook, now we can improve this behaviour a lot. The state update with a long list of items been taken care by the `setTransition` as a non-urgent update.

```js
// Execute Non-Urgent Code
startTransition(() => {
  // Filter the user list based on the search term
  setFiltered(users.filter((item) => item.name.includes(value)));
});
```

## Consideration

None

## Resources

- [https://www.youtube.com/watch?v=UspVJPxYnQM](https://www.youtube.com/watch?v=UspVJPxYnQM)
