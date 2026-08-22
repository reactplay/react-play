# Pantry Alchemy

An intelligent culinary engine that transforms everyday ingredients into tailored, restaurant-quality dish concepts.

## Play Demographic

- Language: js
- Level: Beginner

## Creator Information

- User: Farhaan
- Gihub Link: https://github.com/Farhaan
- Blog: 
- Video: 

## Implementation Details

- React 18 application built with **Material UI**, React Hooks, and the browser `fetch` API.
- Ingredient autocomplete uses **Open Food Facts**, with 400ms debounced searches and multi-selection.
- Selected ingredients are submitted to the **Edamam Recipe API** to retrieve matching recipes.
- Recipes are displayed in responsive horizontal cards with images, ingredient summaries, expandable health labels, and source links.

## Consideration

- Edamam API credentials are currently hardcoded; move them to environment variables or a backend before production.
- API failures are currently logged to the console rather than displayed to users.
- `sample.json` contains potentially expiring Edamam image URLs and exposed API credentials.
- The application depends on external API availability and browser CORS permissions.

## Resources

- **Edamam Recipe API** — recipe search and recipe data.
- **Open Food Facts** — ingredient autocomplete and taxonomy suggestions.
- **Material UI** — UI components, responsive styling, cards, chips, and controls.
- **React** — component architecture, state management, effects, and API interactions.
