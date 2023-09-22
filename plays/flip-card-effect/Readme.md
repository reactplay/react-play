# flip-card-effect

List of cards that flips through front to back and vice versa on click.

## Play Demographic

Language: js
Level: Beginner

## Creator Information

User: Deepak8717
Gihub Link: https://github.com/Deepak8717
Blog:
Video:

## Implementation Details

`Card.jsx` has all the `jsx` and state for a specific card. which is imported and rendered in `FlipCardEffect.jsx`
we need to have two card container for front and back positioned at same. while front is stacked on top of back with the help of z-index.
with the help of css when user click the card the front card rotate 180deg at y axis and since back card at 180 deg looks like upsidedown (like in mirror) hence we rotate back card at 360 deg.

## Consideration

i was trying to have everything in single component but having a single state made difficult to target a specific item. for example clicking on single card would flip all the other cards since they all were depended on single state. Hence i had to break it into seprate component with seprate state.

## Resources

Update external resources(if any)

Inspired by `react-card-flip` library. here is the link

https://aaronccwong.github.io/react-card-flip/
