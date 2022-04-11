module.exports = plop => {
  plop.setHelper('trim', str => str.trim());

  // demo generator
  plop.setGenerator('play', {
    description: 'Steps to add a new play',
    prompts: [
      {
        type: 'input',
        name: 'id',
        message:
          'Give us a play id(Any string starts with pl and without a space(Example: pl-id-card ):',
      },
      {
        type: 'input',
        name: 'name',
        message: 'Please provide the name of the play(Example: Identity Card):',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Tell us more about the play(Max 1024 characters):',
      },
      {
        type: 'input',
        name: 'component',
        message:
          'Provide the React Component name(Example: IdentityCard):',
      },
      {
        type: 'input',
        name: 'folder',
        message: 'Provide the folder name(Example: identity-card):',
      },
      {
        type: 'input',
        name: 'cover',
        message: 'Please provide the path(URL) to cover image(When the image is hosted publicly):',
      },
      {
        type: 'list',
        name: 'level',
        message: 'What is the level of this play?(Example: Intermediate):',
        choices: ['Beginner', 'Intermediate', 'Advanced']
      },
      {
        type: 'input',
        name: 'tags',
        message: 'Provide maximum of 5 tags(Example: JSX, Hooks):',
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your github username(Example: atapas):',
      },
      {
        type: 'input',
        name: 'blog',
        message: 'Enter your blog url(Example: https://blog.greenroots.info):',
      },
      {
        type: 'input',
        name: 'video',
        message: 'Enter your video url(Example: https://www.youtube.com/watch?v=dQw4w9WgXcQ):',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/plays/{{trim folder}}/{{trim component}}.js',
        templateFile: 'plop-templates/component.hbs',
      },
      {
        type: 'modify',
        path: 'src/plays/index.js',
        pattern: /\/\/add export here/gi,
        templateFile: 'plop-templates/exportPlay.hbs',
      },
      {
        type: 'modify',
        path: 'src/meta/play-meta.js',
        pattern: /\/\/import play here/gi,
        templateFile: 'plop-templates/importToMeta.hbs',
      },
      {
        type: 'modify',
        path: 'src/meta/play-meta.js',
        pattern: /\/\/replace new play item here/gi,
        templateFile: 'plop-templates/play.hbs',
      },
    ],
  });
};