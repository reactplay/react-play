module.exports = plop => {
  // demo generator
  plop.setGenerator('play', {
    description: 'add a new play',
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
        message: 'Tell us more about the demo(Max 1024 characters):',
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
        type: 'list',
        name: 'level',
        message: 'What level is this play?(Example: Intermediate):',
        choices: ['Beginner', 'Intermediate', 'Advanced']
      },
      {
        type: 'input',
        name: 'tags',
        message: 'Provide the tags(Example: JSX, Hooks):',
      },
      {
        type: 'input',
        name: 'github',
        message: 'Your github username(Example: atapas):',
      },
      {
        type: 'input',
        name: 'blog',
        message: 'Your blog url(Example: https://blog.greenroots.info):',
      },
      {
        type: 'input',
        name: 'video',
        message: 'Your video url(Example: https://www.youtube.com/watch?v=dQw4w9WgXcQ):',
      },
    ],
    actions: [
      {
        type: 'modify',
        path: 'src/meta/play-meta.js',
        pattern: /\/\/replace new play item here/gi,
        templateFile: 'plop-templates/play.hbs',
      },
    ],
  });
};