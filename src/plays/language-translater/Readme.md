# Language Translater

Language Translator is a web application built with React.js that allows users to translate text from one language to another using an API. This project provides a user-friendly interface where users can input text, select the desired source and target languages, and instantly receive the translated text. It utilizes a reliable translation API to ensure accurate and efficient translations.

## Play Demographic

- Language: js
- Level: Intermediate

## Creator Information

- User: Venkat-3010
- Gihub Link: https://github.com/Venkat-3010
- Blog: 
- Video: 

## Implementation Details

Technologies Used

- React.js
- Fetch API
- Lodash
- SpeechSynthesisUtterance

The `Language Translator` is implemented with below steps.

- Made a list of all the languages and their codes available in the API and saved it as `Languages.jsx`.
- Imported the `Languages.jsx` in the `LanguageTranslator.jsx` and used it as source and target languages for translation.
- Input text area for entering the text and displaying the tranlated text.
- Translate button: Initiates the translation using `Fetch API`.
- Copy button: uses `clipboard` to copy the input and translated text.
- Listen button: Reads out the the input and translated text using `SpeechSynthesisUtterance`.
- Language Switch: Allows users to swap the source and target languages. 

## Consideration

Update all considerations(if any)

## Resources

API source: https://mymemory.translated.net/