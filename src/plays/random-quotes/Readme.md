# Random Quotes

An enhanced Random Quote Generator built using React. It allows users to generate motivational, life, and programming quotes with category selection and text-to-speech support for accessibility.

## Play Demographic

- Language: js
- Level: Intermediate

## Creator Information

- User: rajnishpatell
- Gihub Link: https://github.com/rajnishpatell
- Blog:
- Video:

## Implementation Details

The Enhanced Random Quote Generator is a React-based interactive project that displays motivational, life, and programming quotes dynamically. Users can switch categories, generate new quotes, and even listen to them using text-to-speech functionality.

⚙️ Core Features

Dynamic Quote Fetching: Fetches quotes from the Quotable API
 based on the selected category (motivational, life, or programming).

Offline Fallback: Includes a local quote dataset to ensure the app works even if the API request fails.

Category Selection: Users can easily switch between categories using a dropdown menu.

Text-to-Speech: Integrated browser speech synthesis to read quotes aloud for accessibility.

Modern UI/UX Design: Styled using custom CSS with a gradient background, glassmorphism effect, and responsive layout.

Error Handling & Retry: Automatically falls back to a general quote or local list when the API fails, ensuring smooth user experience.

Loading State: Displays a loading message while fetching new quotes.

🛠️ Tech Stack

Frontend: React.js (Functional Components + Hooks)

Styling: Custom CSS (responsive + animations)

APIs: Quotable.io API

Speech: Web Speech API (Text-to-Speech)

Tools: npm, Vite (via ReactPlay environment)

## Consideration

The app uses the Quotable API, but also includes a local fallback quote list to ensure it works offline or if the API request fails.

Text-to-Speech (TTS) relies on the browser’s built-in SpeechSynthesis API, which may behave slightly differently across browsers.

Quotes are categorized into Motivational, Life, and Programming to give users a more focused experience.

The design follows ReactPlay contribution guidelines and uses component-based structure for easy maintenance.

Accessibility and simplicity were prioritized, ensuring the UI works well on both desktop and mobile devices.

## Resources

Update external resources(if any)
