# ReactInstants

Collection of sound buttons that you can play with a single click.

## Play Demographic

- Language: js
- Level: Beginner

## Creator Information

- User: VictorHenrique
- Gihub Link: https://github.com/VictorHenrique

## Implementation Details

There are two main components:

- Button: receives an object with the sound and name, and the volume. Uses the useSound hook to play the sound and update the button style according to its state (playing or ready),
- Sounds: an object with all the available soundboard buttons, each with a name and a sound.

On `ReactInstants.jsx`, there's a loop that creates a Button for each sound in Sounds, and a slider that allows the user to control the volume.
