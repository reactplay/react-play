export const FIELD_TEMPLATE = [
  {
    datafield: "name",
    type: "input",
    display: "Name",
    placeholder: "Play Name",
    required: true,
  },
  {
    datafield: "description",
    type: "input",
    multiline: true,
    display: "Description",
    placeholder: "Describe your play",
    required: true,
  },
  {
    datafield: "issue",
    type: "autocomplete",
    display: "Issue",
    placeholder: "Select an issue to link with",
    multiple: false,
    options: [],
    required: true,
  },
  {
    datafield: "language",
    type: "autocomplete",
    multiple: false,
    display: "Language",
    placeholder: "Preferred Language",
    options: [
      {
        name: "JavaScript",
        value: "js",
      },
      {
        name: "TypeScript",
        value: "ts",
      },
    ],
    required: true,
  },
  {
    datafield: "style",
    type: "autocomplete",
    multiple: false,
    display: "Style",
    placeholder: "Preferred Style Script",
    options: [
      {
        name: "CSS",
        value: "css",
      },
      {
        name: "SCSS",
        value: "scss",
      },
    ],
  },
  {
    datafield: "level",
    type: "autocomplete",
    multiple: false,
    display: "Level",
    placeholder: "Play Complexity Level",
    required: true,
  },
  {
    datafield: "github",
    type: "input",
    display: "Github Username",
    placeholder: "Your Github username",
    required: true,
  },
  {
    datafield: "tags",
    type: "autocomplete",
    display: "Tags",
    placeholder: "All Tags",
    options: [],
  },
  {
    datafield: "cover",
    type: "input",
    display: "Cover Image URL",
    placeholder:
      "Alternatively you can add a 'cover.png' in your play directory",
  },
  {
    datafield: "blog",
    type: "input",
    display: "Blog URL",
    placeholder: "Example: https://blog.greenroots.info ",
  },
  {
    datafield: "video",
    type: "input",
    display: "Video",
    placeholder: "Example: https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
];
