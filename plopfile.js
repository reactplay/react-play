module.exports = plop => {
  plop.setHelper('trim', str => str.trim());
  plop.setHelper('removeAllSpaces', str => str.replaceAll(/\s/g,''));

  plop.setHelper('generateId', str => `pl-${str.trim().replaceAll(/\s/g,'-').toLowerCase()}`);

  plop.setHelper('generateFolderName', str => `${str.trim().replaceAll(/\s/g,'-').toLowerCase()}`);

  // demo generator
  plop.setGenerator('play', {
    description: 'Steps to add a new play',
    prompts: [
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
        name: 'cover',
        message: 'Please provide the path(URL) to cover image(When the image is hosted publicly):',
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
        path: 'src/plays/{{generateFolderName name}}/{{pascalCase name}}.js',
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