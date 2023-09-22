# context-with-real-usecases

I was learning contextAPI and was bored to learn the same counter or toggle example and hence i decided to make something that feel real.

`context-with-real-usecases` is a recipe app that lists the recipes by cuisine type. Based on the selected cuisine app shows the list of recipes, the selected cusine and the cusine fact.

## Play Demographic

- Language: js
- Level: Intermediate

## Creator Information

- User: Deepak8717
- Gihub Link: https://github.com/Deepak8717
- Blog:
- Video:

## Implementation Details

App include several components like `<ContextInfoSlider />`, `<Heading />`,`<Menu />`,`<Main />` if we go futher `<Heading />` includes another component called `<CuisineModal />` and `<Main />`include another called `<RecipeGrid />`. Since they all need the `activeCuisine` to show the relative information it would be difficult to prop drill. Hence we have used contextAPI.

## Consideration

Update all considerations(if any)

## Resources

Update external resources(if any)
