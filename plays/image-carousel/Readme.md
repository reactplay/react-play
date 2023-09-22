# Image Carousel

Image Carousel that has click navigation for desktop and touch(swipe) navigation for mobile

## Play Demographic

- Language: ts
- Level: Beginner

## Creator Information

- User: harshsinghatz
- Gihub Link: https://github.com/harshsinghatz
- Blog: https://harshsinghatz.hashnode.dev/
- Video:

## Implementation Details

Let's break down the different features of this play:

- **Click events:** Click events are listened on the right arrow, left arrow and the dots for navigation. On click we set the active slide number which invokes the useEffect hook (dependancy as active slide). The useEffect is the one responsible for moving the carousel.
- **Touch events:** Touch events is listened on main wrapper for the swipe navigation. We listen for two events i.e touchstart and touchend to get the initial and the final position of the swipe. We then see if the difference between the initial and final position is greater than or equal to the pre-defined threhold. If yes then depending on the swipe direction we move the carousel.

## Consideration

Update all considerations(if any)

## Resources

Update external resources(if any)
