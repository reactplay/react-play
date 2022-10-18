export const fetchPlaysDateFiltered = (value) => {
  return {
    "display": "Play info",
    "name": "Fetch_play",
    "function": "plays",
    "write": false,
    "return": [
      "id",
      "name",
      "github",
      "description",
      "created_at",
      "path"
    ],
    "where": {
      "clause": {
        "conditions": [{
          "field": "created_at",
          "operator": "gt",
          "value": value
        }]
      }
    }
  }
};

