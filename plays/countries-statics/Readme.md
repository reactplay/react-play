# countries-statics

Fetch the country demographics with single click on map.

## Play Demographic

- Language: js
- Level: Intermediate

## Creator Information

- User: deepak8717
- Gihub Link: https://github.com/deepak8717
- Blog:
- Video:

## Implementation Details

This project uses react simple map library to render the map. this library is an extension od D3.js made specifically to render maps in react. In order to render maps we need eithe topojson or geojson. We have used topojson file called featues.json in this play .

This topojson file contain a unique id for each country on the map. As we click the country on map we get the id of clicked country and change the color of active country. Once we have id of active country. We fetch the country data from an api called `https://restcountries.com/v3.1/alpha/{code}`.

Update all considerations(if any)

## Resources

"react-simple-maps": "^2.3.0",

This project uses React Simple map liberary to render svg maps. it's a simple and tiny liberary to render svg maps in react with d3-geo and topojson.

You may follow the link https://www.react-simple-maps.io/ for more info.
