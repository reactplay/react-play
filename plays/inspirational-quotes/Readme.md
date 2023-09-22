# InspirationalQuotes

This app contains motivational quotes. This app has over 250 carefully chosen quotes to motivate users. I did not produce quotations using any API. I have hand-picked these relevant quotes.

## Play Demographic

- Language: Typescript
- Level: Beginer

## Creator Information

- User: Muzaffar Hossain
- Gihub Link: https://github.com/muzaffar640
- Blog:
- Video:

## Implementation Details

I have implemented the `Inspirational Quotes` in below steps

- Added `cover.png` for play card thumbnail background.
- Made a list of carefully chosen motivational sayings and saved it as `Quotes.ts`
- Quote data type defined in `Quote.tsx` and stored in `Type.tx`
- Fetching `Quotes.ts` data and maintaining it inside a `quote` state in `InspirationalQuotes.tsx`.
- Placed all css of `InspirationalQuotes.tsx` inside `inspirational-quotes.css`
- Made the reusable card component `Card.tsx` and defined all the CSS in "card.css."
- Defined `CardProps` data type in `Type.ts` that we used in `Card.tsx`
- Importing `Card.tsx` in `InspirationalQuotes.tsx` and passing `quote` data as prop.
- Created a `RandomNumber` generator in the `handleMoreClick` function, which must be less than the length of `Quotes` array.
- When updating state as `setQuote()`, `RandomNumber` was passed as an index.

## Consideration

NA

## Resources

NA
