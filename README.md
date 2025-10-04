# ReactPlay(Repo: `react-play`)

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-80-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

<p align="center">
  <a href="https://reactplay.io" target="_blank" style="font-size:50px"><img src="src/images/twitter-thumb.png" alt="react-play" width="125" /></a>
</p>

<h4 align="center">Learn . Create . Share about your ReactJS Development Journey</h4>

<p align="center">
  <a href="https://github.com/reactplay/react-play/blob/master/LICENSE" target="blank">
<img src="https://img.shields.io/github/license/reactplay/react-play?style=flat-square" alt="react-play licence" />
</a>
<a href="https://github.com/reactplay/react-play/fork" target="blank">
<img src="https://img.shields.io/github/forks/reactplay/react-play?style=flat-square" alt="react-play forks"/>
</a>
<a href="https://github.com/reactplay/react-play/stargazers" target="blank">
<img src="https://img.shields.io/github/stars/reactplay/react-play?style=flat-square" alt="react-play stars"/>
</a>
<a href="https://github.com/reactplay/react-play/issues" target="blank">
<img src="https://img.shields.io/github/issues/reactplay/react-play?style=flat-square" alt="react-play issues"/>
</a>
<a href="https://github.com/reactplay/react-play/pulls" target="blank">
<img src="https://img.shields.io/github/issues-pr/reactplay/react-play?style=flat-square" alt="react-play pull-requests"/>
</a>
<a href="https://twitter.com/intent/tweet?text=👋%20Check%20this%20amazing%20app%20https://reactplay.io/,%20created%20by%20@tapasadhikary%20and%20friends%0A%0A%23DEVCommunity%20%23100DaysOfCode%20@reactplayio"><img src="https://img.shields.io/twitter/url?label=Share%20on%20Twitter&style=social&url=https%3A%2F%2Fgithub.com%2Freactplay%2Freact-play"></a>

</p>

<p align="center">
    <a href="https://reactplay.io" target="blank">View Demo</a>
    ·
    <a href="https://github.com/reactplay/react-play/issues/new/choose">Report Bug</a>
    ·
    <a href="https://github.com/reactplay/react-play/issues/new/choose">Request Feature</a>
</p>
<p align="center">
  <a href="https://gitpod.io/#https://github.com/reactplay/react-play">
  <img
    src="https://gitpod.io/button/open-in-gitpod.svg"
    alt="Open in Gitpod"
  />
</a>
</p>

## 👋 Introducing ReactPlay

<p align="center">
  <img src="src/images/og-image.png" alt="name"/>
</p>

`react-play` is an `open-source` web app that helps you learn ReactJS faster with a hands-on practice model. It is a collection of `ReactJS projects` that you can use to learn ReactJS.

Is that all? Nope. You can also create your projects and share them with the world. The best part is that the ReactJS experts will `review` your project code before it gets part of the `ReactPlay` app. Isn't that a pure WIN-WIN?

## 🔥 Demo

Here is the link to the app. We hope you enjoy it.

> [The ReactPlay app Link](https://reactplay.io)

Who doesn't want motivation and support? Many Thanks to all the Stargazers who have supported this project with stars(⭐). You all are amazing!!!

<a href="https://github.com/reactplay/react-play/stargazers">
  <img src="https://git-lister.onrender.com/api/stars/reactplay/react-play?limit=25" alt="Stargazers repo roster for @reactplay/react-play" />
</a>

Please support the work by giving the repository a ⭐, contributing to it, and/or sponsoring using the `Sponsor` button at the top 😍. You can also follow us on Twitter [@reactplayio](https://twitter.com/reactplayio).

## 🏗️ How to Set up `ReactPlay` for Development?

You may want to set up the `react-play` repo for the following reasons:

- You want to create a new play (A play is a React project) or want to edit an existing play as a contributor. Please check the [Create a Play Guide](https://docs.reactplay.io/How-To-Guides/how-to-create-play) for more details. Also, please check the [Contribution Guide](./CONTRIBUTING.md) to get started.

- You want to contribute to the `react-play` repo in general. Please check the [Contribution Guide](./CONTRIBUTING.md) to get started.

Here is a quick overview of the `react-play` repo setup:

### 🍴 Fork and Clone the Repo

First, you need to fork the `react-play` repo. You can do this by clicking the `Fork` button on the top right corner of the repo. If you are new to forking, please watch this [YouTube Guide](https://www.youtube.com/watch?v=h8suY-Osn8Q) to get started.

Once forked, you can clone the repo by clicking the `Clone or Download` button on the top right corner of the forked repo.

Please change the directory after cloning the repository using the `cd <folder-name>` command.

> **Note:** Please do not remove the `.env.development` file from the root folder. It contains all the environment variables required for development.

### ⬇️ Install Dependencies

Next, install all dependencies using **pnpm**.  
Make sure you have `pnpm` installed globally before proceeding.

```bash
pnpm install

if you don't have `yarn` installed on your PC, follow the steps below to install it..

**Windows**
1. open your command prompt as administrator.
2. write `corepack enable` and hit enter.
3. then `npm install --global yarn`

**Linux**
1. open terminal and hit `npm install --global yarn`

**MacOS**
1. open terminal and hit `npm install --global yarn`
or
`brew install yarn`

**Or Download Package**
If you are unable to install yarn following the above-mentioned process, then you can simply download the package and install it. Visit the official website of Yarn; there you can just expand the "Alternative" section and it will ask for the version to download for Windows, Linux, or Mac.
`https://classic.yarnpkg.com/en/docs/install#windows-stable`


> **Note**: `ReactPlay` runs on React 18. However, some of our dependencies are yet to upgrade to version 18. So please use the following command when you face difficulties installing the dependencies. Also, ensure to use Node.js version >= 16.x

```
npm install --legacy-peer-deps
```


### 🦄 Start the Development Mode

Use the following command to start the app in the development mode:

```bash
yarn start
```
or if you installed dependencies using ``npm`` use below command

```
npm start
```

**Note**: The `start` script automatically invokes "linters" process. Should you need to run the app without `lint` the use `start:nolint` instead.
However make sure that you run `start` script at least once before committing your code. Code with linter error may not be reviewed.

It runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes. You may also see any lint errors in the console.

### ✨ Format and lint the code

Use the following command to format and lint the code:

#### Format the code

```bash
yarn run format
```
OR
```
npm run format
```

#### Lint the code
*to check the linting issue*
```bash
yarn run lint
```
OR
```
npm run lint
```
*to fix the linting issue*
```bash
yarn run lint:fix
```
OR
```
npm run lint:fix
```

### 🧱 Build the App for Production

Use the following command to build the app for production:

```bash
yarn build
```
OR
```
npm build
```

It builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes.

--------------------------------------------------------------

### 🧪 Test App Locally (E2E with Playwright)

Use the following command to install browser(s) binaries to test locally:
```bash
yarn install playwright
```
OR
```
npm install playwright
```

Use the following command to run Playwright tests:

```bash
yarn e2e
```
OR
```
npm run e2e
```
👀 Read more about testing in [react-play](../react-play/e2e/README.md)

👀 Read more about playwright: https://playwright.dev/

--------------------------------------------------------------


### 🚀 Deploy

You can deploy the app to `Vercel` or `Netlify` with a single click.

<a href="https://vercel.com/new/project?template=https://github.com/reactplay/react-play">
<img src="https://vercel.com/button" height="37.5px" />
</a>
<a href="https://app.netlify.com/start/deploy?repository=https://github.com/reactplay/react-play">
<img src="https://www.netlify.com/img/deploy/button.svg" height="37.5px" />
</a>

## 🤝 Contributing to `ReactPlay`

Any kind of positive contribution is welcome! Please help us to grow by contributing to the project.

If you wish to contribute, you can,

- Create a Play
- Suggest a Feature
- Test the app, and help it improve.
- Improve the app, fix bugs, etc.
- Improve documentation.
- Create content about ReactPlay and share it with the world.

> Please read [`CONTRIBUTING`](CONTRIBUTING.md) for details on our [`CODE OF CONDUCT`](CODE_OF_CONDUCT.md), and the process for submitting pull requests to us.

🆕 New to Open Source? 💡 Follow this [guide](https://opensource.guide/how-to-contribute/) to jumpstart your Open Source journey 🚀.

## Launching reactplay Rewards

Contributed to reactplay? Here is a big thank you from our community to you.
Claim your badge and showcase them with pride.
Let us inspire more folks !

![reactplay Badges](https://aviyel.com/assets/uploads/rewards/share/project/43/512/share.png)

### **[Claim Now!](https://aviyel.com/projects/43/reactplay/rewards)**

## 🙏 Support

We all need support and motivation. `ReactPlay` is not an exception. Please give this project a ⭐️ to encourage and show that you liked it. Don't forget to leave a star ⭐️ before you move away.

If you found the app helpful, consider supporting us with a coffee.

<a href="https://www.buymeacoffee.com/greenroots">
    <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" height="50px">
</a>

---

<h3 align="center">
A ⭐️ to <b>ReactPlay</b> is to make us more 💪 stronger and motivated.
</h3>

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://tapasadhikary.com"><img src="https://avatars.githubusercontent.com/u/3633137?v=4?s=100" width="100px;" alt="Tapas Adhikary"/><br /><sub><b>Tapas Adhikary</b></sub></a><br /><a href="https://github.com/reactplay/react-play/commits?author=atapas" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/nirmalkc"><img src="https://avatars.githubusercontent.com/u/6359059?v=4?s=100" width="100px;" alt="Nirmal Kumar"/><br /><sub><b>Nirmal Kumar</b></sub></a><br /><a href="https://github.com/reactplay/react-play/commits?author=nirmalkc" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://murtuzaali-surti.me"><img src="https://avatars.githubusercontent.com/u/68743212?v=4?s=100" width="100px;" alt="Murtuzaali Surti"/><br /><sub><b>Murtuzaali Surti</b></sub></a><br /><a href="https://github.com/reactplay/react-play/commits?author=murtuzaalisurti" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/abhishek-gogroup"><img src="https://avatars.githubusercontent.com/u/87639443?v=4?s=100" width="100px;" alt="Abhishek Khatri"/><br /><sub><b>Abhishek Khatri</b></sub></a><br /><a href="https://github.com/reactplay/react-play/commits?author=abhishek-gogroup" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://abhishek-90.github.io/My-Portfolio/"><img src="https://avatars.githubusercontent.com/u/43419831?v=4?s=100" width="100px;" alt="Abhishek Holani"/><br /><sub><b>Abhishek Holani</b></sub></a><br /><a href="https://github.com/reactplay/react-play/commits?author=Abhishek-90" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://hasnainmakada-99.github.io"><img src="https://avatars.githubusercontent.com/u/82728823?v=4?s=100" width="100px;" alt="Hasnain Makada"/><br /><sub><b>Hasnain Makada</b></sub></a><br /><a href="https://github.com/reactplay/react-play/commits?author=hasnainmakada-99" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://twitter.com/shrilakshmihg"><img src="https://avatars.githubusercontent.com/u/29778698?v=4?s=100" width="100px;" alt="Shrilakshmi Shastry"/><br /><sub><b>Shrilakshmi Shastry</b></sub></a><br /><a href="https://github.com/reactplay/react-play/commits?author=shrilakshmishastry" title="Code">💻</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/6km"><img src="https://avatars.githubusercontent.com/u/62352949?v=4?s=100" width="100px;" alt="Mohammed Taha"/><br /><sub><b>Mohammed Taha</b></sub></a><br /><a href="https://github.com/reactplay/react-play/commits?author=6km" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://dalpatrathoredev.web.app"><img src="https://avatars.githubusercontent.com/u/69510006?v=4?s=100" width="100px;" alt="Dalpat Rathore"/><br /><sub><b>Dalpat Rathore</b></sub></a><br /><a href="https://github.com/reactplay/react-play/commits?author=DalpatRathore" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://erayalkis.netlify.app"><img src="https://avatars.githubusercontent.com/u/80722863?v=4?s=100" width="100px;" alt="Eray Alkış"/><br /><sub><b>Eray Alkış</b></sub></a><br /><a href="https://github.com/reactplay/react-play/commits?author=erayalkis" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://nirban-chakraborty.netlify.app"><img src="https://avatars.githubusercontent.com/u/74231771?v=4?s=100" width="100px;" alt="Nirban Chakraborty"/><br /><sub><b>Nirban Chakraborty</b></sub></a><br /><a href="https://github.com/reactplay/react-play/commits?author=nirban256" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Deepak8717"><img src="https://avatars.githubusercontent.com/u/5671550?v=4?s=100" width="100px;" alt="Deepak Pundir"/><br /><sub><b>Deepak Pundir</b></sub></a><br /><a href="https://github.com/reactplay/react-play/commits?author=Deepak8717" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://bio.link/vasantisuthar"><img src="https://avatars.githubusercontent.com/u/63599802?v=4?s=100" width="100px;" alt="Vasanti Suthar"/><br /><sub><b>Vasanti Suthar</b></sub></a><br /><a href="https://github.com/reactplay/react-play/commits?author=vasantisuthar" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://ahnaf.dev"><img src="https://avatars.githubusercontent.com/u/42427928?v=4?s=100" width="100px;" alt="Ahnaf Ahamed"/><br /><sub><b>Ahnaf Ahamed</b></sub></a><br /><a href="https://github.com/reactplay/react-play/commits?author=AhnafAhamed" title="Code">💻</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://www.showwcase.com/shivam-katare"><img src="https://avatars.githubusercontent.com/u/91705825?v=4?s=100" width="100px;" alt="Shivam Katare"/><br /><sub><b>Shivam Katare</b></sub></a><br /><a href="https://github.com/reactplay/react-play/commits?author=Shivam-Katare" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Angryman18"><img src="https://avatars.githubusercontent.com/u/63530626?v=4?s=100" width="100px;" alt="Shyam Mahanta"/><br /><sub><b>Shyam Mahanta</b></sub></a><br /><a href="https://github.com/reactplay/react-play/commits?author=Angryman18" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://koustov.com"><img src="https://avatars.githubusercontent.com/u/7145967?v=4?s=100" width="100px;" alt="Koustov"/><br /><sub><b>Koustov</b></sub></a><br /><a href="https://github.com/reactplay/react-play/commits?author=koustov" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Shriom-Trivedi"><img src="https://avatars.githubusercontent.com/u/32411707?v=4?s=100" width="100px;" alt="Shri Om Trivedi"/><br /><sub><b>Shri Om Trivedi</b></sub></a><br /><a href="https://github.com/reactplay/react-play/commits?author=Shriom-Trivedi" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/naiknareshh"><img src="https://avatars.githubusercontent.com/u/105363653?v=4?s=100" width="100px;" alt="Naresh Naik"/><br /><sub><b>Naresh Naik</b></sub></a><br /><a href="https://github.com/reactplay/react-play/commits?author=naiknareshh" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/vincentBCP"><img src="https://avatars.githubusercontent.com/u/18364292?v=4?s=100" width="100px;" alt="Vincent Patoc"/><br /><sub><b>Vincent Patoc</b></sub></a><br /><a href="https://github.com/reactplay/react-play/commits?author=vincentBCP" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://sachinchaurasiya.dev"><img src="https://avatars.githubusercontent.com/u/59080942?v=4?s=100" width="100px;" alt="Sachin Chaurasiya"/><br /><sub><b>Sachin Chaurasiya</b></sub></a><br /><a href="https://github.com/reactplay/react-play/commits?author=Sachin-chaurasiya" title="Code">💻</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/tejinder-sharma"><img src="https://avatars.githubusercontent.com/u/95734921?v=4?s=100" width="100px;" alt="Tejinder Sharma"/><br /><sub><b>Tejinder Sharma</b></sub></a><br /><a href="https://github.com/reactplay/react-play/commits?author=tejinder-sharma" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/ishrarg"><img src="https://avatars.githubusercontent.com/u/3227841?v=4?s=100" width="100px;" alt="Ishrar G"/><br /><sub><b>Ishrar G</b></sub></a><br /><a href="https://github.com/reactplay/react-play/commits?author=ishrarg" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://mohamed-ehab-portfolio.vercel.app/"><img src="https://avatars.githubusercontent.com/u/96921717?v=4?s=100" width="100px;" alt="Programming-School"/><br /><sub><b>Programming-School</b></sub></a><br /><a href="https://github.com/reactplay/react-play/commits?author=Programming-School-Pro-Coding" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/valeshgopal"><img src="https://avatars.githubusercontent.com/u/89742622?v=4?s=100" width="100px;" alt="Valesh Gopal"/><br /><sub><b>Valesh Gopal</b></sub></a><br /><a href="https://github.com/reactplay/react-play/commits?author=valeshgopal" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://rafat97.github.io/"><img src="https://avatars.githubusercontent.com/u/21246862?v=4?s=100" width="100px;" alt="Emdadul Haque"/><br /><sub><b>Emdadul Haque</b></sub></a><br /><a href="https://github.com/reactplay/react-play/commits?author=Rafat97" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Asterisk-z"><img src="https://avatars.githubusercontent.com/u/56372709?v=4?s=100" width="100px;" alt="Olang Daniel"/><br /><sub><b>Olang Daniel</b></sub></a><br /><a href="https://github.com/reactplay/react-play/commits?author=Asterisk-z" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://supminn-neog.netlify.app/"><img src="https://avatars.githubusercontent.com/u/30731236?v=4?s=100" width="100px;" alt="Supriya M"/><br /><sub><b>Supriya M</b></sub></a><br /><a href="https://github.com/reactplay/react-play/commits?author=supminn" title="Code">💻</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/yung-coder"><img src="https://avatars.githubusercontent.com/u/94097778?v=4?s=100" width="100px;" alt="Saksham chandel"/><br /><sub><b>Saksham chandel</b></sub></a><br /><a href="https://github.com/reactplay/react-play/commits?author=yung-coder" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://linkedin.com/in/luca-pizzini"><img src="https://avatars.githubusercontent.com/u/15077781?v=4?s=100" width="100px;" alt="Luca Pizzini"/><br /><sub><b>Luca Pizzini</b></sub></a><br /><a href="https://github.com/reactplay/react-play/commits?author=lpizzinidev" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/ShivamBhasin2002"><img src="https://avatars.githubusercontent.com/u/57500840?v=4?s=100" width="100px;" alt="Shivam Bhasin"/><br /><sub><b>Shivam Bhasin</b></sub></a><br /><a href="https://github.com/reactplay/react-play/commits?author=ShivamBhasin2002" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://tejasshekar.netlify.app/"><img src="https://avatars.githubusercontent.com/u/68545229?v=4?s=100" width="100px;" alt="Tejas Shekar"/><br /><sub><b>Tejas Shekar</b></sub></a><br /><a href="https://github.com/reactplay/react-play/commits?author=TejasShekar" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://www.linkedin.com/in/anirban-pratihar-48a591226/"><img src="https://avatars.githubusercontent.com/u/82874704?v=4?s=100" width="100px;" alt="Anirban Pratihar"/><br /><sub><b>Anirban Pratihar</b></sub></a><br /><a href="https://github.com/reactplay/react-play/commits?author=Anirban-1490" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/harshsinghatz"><img src="https://avatars.githubusercontent.com/u/51085015?v=4?s=100" width="100px;" alt="Harsh Singh"/><br /><sub><b>Harsh Singh</b></sub></a><br /><a href="https://github.com/reactplay/react-play/commits?author=harshsinghatz" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://frankiefab.com"><img src="https://avatars.githubusercontent.com/u/46662771?v=4?s=100" width="100px;" alt="Franklin U.O. Ohaegbulam"/><br /><sub><b>Franklin U.O. Ohaegbulam</b></sub></a><br /><a href="https://github.com/reactplay/react-play/commits?author=frankiefab100" title="Code">💻</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/ammaaraslam"><img src="https://avatars.githubusercontent.com/u/96367405?v=4?s=100" width="100px;" alt="Ammaar Aslam"/><br /><sub><b>Ammaar Aslam</b></sub></a><br /><a href="https://github.com/reactplay/react-play/commits?author=ammaaraslam" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/mayukh551"><img src="https://avatars.githubusercontent.com/u/82811112?v=4?s=100" width="100px;" alt="Mayukh Bhowmick"/><br /><sub><b>Mayukh Bhowmick</b></sub></a><br /><a href="https://github.com/reactplay/react-play/commits?author=mayukh551" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://emmanueleboh.vercel.app"><img src="https://avatars.githubusercontent.com/u/63825997?v=4?s=100" width="100px;" alt="Emmanuel O Eboh"/><br /><sub><b>Emmanuel O Eboh</b></sub></a><br /><a href="https://github.com/reactplay/react-play/commits?author=EOEboh" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://shailesh-parmar.netlify.app/"><img src="https://avatars.githubusercontent.com/u/71748675?v=4?s=100" width="100px;" alt="Shailesh Parmar"/><br /><sub><b>Shailesh Parmar</b></sub></a><br /><a href="https://github.com/reactplay/react-play/commits?author=ShaileshParmar11" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/dangvu0502"><img src="https://avatars.githubusercontent.com/u/57172125?v=4?s=100" width="100px;" alt="dangvu0502"/><br /><sub><b>dangvu0502</b></sub></a><br /><a href="https://github.com/reactplay/react-play/commits?author=dangvu0502" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Ceesco"><img src="https://avatars.githubusercontent.com/u/104683015?v=4?s=100" width="100px;" alt="Ceesco"/><br /><sub><b>Ceesco</b></sub></a><br /><a href="#design-Ceesco" title="Design">🎨</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Hat52"><img src="https://avatars.githubusercontent.com/u/44437268?v=4?s=100" width="100px;" alt="Hamza Ali"/><br /><sub><b>Hamza Ali</b></sub></a><br /><a href="#design-Hat52" title="Design">🎨</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/yash91989201"><img src="https://avatars.githubusercontent.com/u/68579045?v=4?s=100" width="100px;" alt="yash91989201"/><br /><sub><b>yash91989201</b></sub></a><br /><a href="https://github.com/reactplay/react-play/commits?author=yash91989201" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://makdoom.github.io"><img src="https://avatars.githubusercontent.com/u/28287599?v=4?s=100" width="100px;" alt="Makdoom Shaikh"/><br /><sub><b>Makdoom Shaikh</b></sub></a><br /><a href="https://github.com/reactplay/react-play/commits?author=makdoom" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/muzaffar640"><img src="https://avatars.githubusercontent.com/u/55223302?v=4?s=100" width="100px;" alt="Muzaffar Hossain"/><br /><sub><b>Muzaffar Hossain</b></sub></a><br /><a href="https://github.com/reactplay/react-play/commits?author=muzaffar640" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://bio.link/susmitadey"><img src="https://avatars.githubusercontent.com/u/79099734?v=4?s=100" width="100px;" alt="Susmita Dey"/><br /><sub><b>Susmita Dey</b></sub></a><br /><a href="https://github.com/reactplay/react-play/commits?author=Susmita-Dey" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/SSK-14"><img src="https://avatars.githubusercontent.com/u/45158568?v=4?s=100" width="100px;" alt="Sanjay Kumar"/><br /><sub><b>Sanjay Kumar</b></sub></a><br /><a href="https://github.com/reactplay/react-play/commits?author=SSK-14" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://vinaypatil.netlify.app"><img src="https://avatars.githubusercontent.com/u/29520476?v=4?s=100" width="100px;" alt="Vinay Patil "/><br /><sub><b>Vinay Patil </b></sub></a><br /><a href="https://github.com/reactplay/react-play/commits?author=Engineervinay" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/abhi-works"><img src="https://avatars.githubusercontent.com/u/115144059?v=4?s=100" width="100px;" alt="Abhilash"/><br /><sub><b>Abhilash</b></sub></a><br /><a href="https://github.com/reactplay/react-play/commits?author=abhi-works" title="Code">💻</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/KashishLakhara04"><img src="https://avatars.githubusercontent.com/u/104296574?v=4?s=100" width="100px;" alt="Kashish Lakhara"/><br /><sub><b>Kashish Lakhara</b></sub></a><br /><a href="https://github.com/reactplay/react-play/commits?author=KashishLakhara04" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/hiimnhan"><img src="https://avatars.githubusercontent.com/u/35358825?v=4?s=100" width="100px;" alt="hiimnhan"/><br /><sub><b>hiimnhan</b></sub></a><br /><a href="https://github.com/reactplay/react-play/commits?author=hiimnhan" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://siddxharth.live"><img src="https://avatars.githubusercontent.com/u/67476171?v=4?s=100" width="100px;" alt="Siddharth Khatri"/><br /><sub><b>Siddharth Khatri</b></sub></a><br /><a href="https://github.com/reactplay/react-play/commits?author=siddxharth" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://emmadawson.dev"><img src="https://avatars.githubusercontent.com/u/57045550?v=4?s=100" width="100px;" alt="Emma Dawson"/><br /><sub><b>Emma Dawson</b></sub></a><br /><a href="https://github.com/reactplay/react-play/commits?author=EmmaDawsonDev" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/senali-d"><img src="https://avatars.githubusercontent.com/u/52546856?v=4?s=100" width="100px;" alt="Senali"/><br /><sub><b>Senali</b></sub></a><br /><a href="https://github.com/reactplay/react-play/commits?author=senali-d" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/nishasen"><img src="https://avatars.githubusercontent.com/u/43262505?v=4?s=100" width="100px;" alt="Nisha Sen"/><br /><sub><b>Nisha Sen</b></sub></a><br /><a href="https://github.com/reactplay/react-play/commits?author=nishasen" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Harshil-Jani"><img src="https://avatars.githubusercontent.com/u/79367883?v=4?s=100" width="100px;" alt="Harshil Jani"/><br /><sub><b>Harshil Jani</b></sub></a><br /><a href="https://github.com/reactplay/react-play/commits?author=Harshil-Jani" title="Code">💻</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://olukaisaac.netlify.app/"><img src="https://avatars.githubusercontent.com/u/55724699?v=4?s=100" width="100px;" alt="Oluka Isaac"/><br /><sub><b>Oluka Isaac</b></sub></a><br /><a href="https://github.com/reactplay/react-play/commits?author=tech-doctor" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/NagarjunShroff"><img src="https://avatars.githubusercontent.com/u/37444771?v=4?s=100" width="100px;" alt="NagarjunShroff"/><br /><sub><b>NagarjunShroff</b></sub></a><br /><a href="https://github.com/reactplay/react-play/commits?author=NagarjunShroff" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/aks318"><img src="https://avatars.githubusercontent.com/u/41566374?v=4?s=100" width="100px;" alt="Aakash Vishwakarma"/><br /><sub><b>Aakash Vishwakarma</b></sub></a><br /><a href="https://github.com/reactplay/react-play/commits?author=aks318" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/ankitk26"><img src="https://avatars.githubusercontent.com/u/53444460?v=4?s=100" width="100px;" alt="Ankit Kumar"/><br /><sub><b>Ankit Kumar</b></sub></a><br /><a href="https://github.com/reactplay/react-play/commits?author=ankitk26" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://www.linkedin.com/in/keerthivasand/"><img src="https://avatars.githubusercontent.com/u/64349912?v=4?s=100" width="100px;" alt="Keerthivasan D"/><br /><sub><b>Keerthivasan D</b></sub></a><br /><a href="https://github.com/reactplay/react-play/commits?author=kd100100" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/bhtibrewal"><img src="https://avatars.githubusercontent.com/u/42600164?v=4?s=100" width="100px;" alt="Bhavika Tibrewal"/><br /><sub><b>Bhavika Tibrewal</b></sub></a><br /><a href="https://github.com/reactplay/react-play/commits?author=bhtibrewal" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://abhipatelportfolio.netlify.app/"><img src="https://avatars.githubusercontent.com/u/76242769?v=4?s=100" width="100px;" alt="Abhi Patel"/><br /><sub><b>Abhi Patel</b></sub></a><br /><a href="https://github.com/reactplay/react-play/commits?author=AbhiPatel10" title="Code">💻</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://aimun-nahar.vercel.app/"><img src="https://avatars.githubusercontent.com/u/96931784?v=4?s=100" width="100px;" alt="Aimun Nahar"/><br /><sub><b>Aimun Nahar</b></sub></a><br /><a href="https://github.com/reactplay/react-play/commits?author=aimunhidden485" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/GodStarLord"><img src="https://avatars.githubusercontent.com/u/62302642?v=4?s=100" width="100px;" alt="GodStarLord"/><br /><sub><b>GodStarLord</b></sub></a><br /><a href="https://github.com/reactplay/react-play/commits?author=GodStarLord" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/joeshajan"><img src="https://avatars.githubusercontent.com/u/69904519?v=4?s=100" width="100px;" alt="Joe Shajan"/><br /><sub><b>Joe Shajan</b></sub></a><br /><a href="https://github.com/reactplay/react-play/commits?author=joeshajan" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/KMohZaid"><img src="https://avatars.githubusercontent.com/u/68484509?v=4?s=100" width="100px;" alt="MohZaid Kapadia"/><br /><sub><b>MohZaid Kapadia</b></sub></a><br /><a href="https://github.com/reactplay/react-play/commits?author=KMohZaid" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/samvardhan777"><img src="https://avatars.githubusercontent.com/u/69216650?v=4?s=100" width="100px;" alt="Sam"/><br /><sub><b>Sam</b></sub></a><br /><a href="https://github.com/reactplay/react-play/commits?author=samvardhan777" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/trishnakalita660"><img src="https://avatars.githubusercontent.com/u/54037204?v=4?s=100" width="100px;" alt="Trishna Kalita"/><br /><sub><b>Trishna Kalita</b></sub></a><br /><a href="https://github.com/reactplay/react-play/commits?author=trishnakalita660" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/wyarejali"><img src="https://avatars.githubusercontent.com/u/57383423?v=4?s=100" width="100px;" alt="Wyarej Ali"/><br /><sub><b>Wyarej Ali</b></sub></a><br /><a href="https://github.com/reactplay/react-play/commits?author=wyarejali" title="Code">💻</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/zulalnb"><img src="https://avatars.githubusercontent.com/u/33003721?v=4?s=100" width="100px;" alt="Zülal Nebin"/><br /><sub><b>Zülal Nebin</b></sub></a><br /><a href="https://github.com/reactplay/react-play/commits?author=zulalnb" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/nrshnaik"><img src="https://avatars.githubusercontent.com/u/25747434?v=4?s=100" width="100px;" alt="nrshnaik"/><br /><sub><b>nrshnaik</b></sub></a><br /><a href="https://github.com/reactplay/react-play/commits?author=nrshnaik" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/FreemRL"><img src="https://avatars.githubusercontent.com/u/66525499?v=4?s=100" width="100px;" alt="Jannik Schmidtke"/><br /><sub><b>Jannik Schmidtke</b></sub></a><br /><a href="https://github.com/reactplay/react-play/commits?author=freemrl" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/saddam-selise"><img src="https://avatars.githubusercontent.com/u/113901460?v=4?s=100" width="100px;" alt="Md. Saddam Hossain"/><br /><sub><b>Md. Saddam Hossain</b></sub></a><br /><a href="https://github.com/reactplay/react-play/commits?author=saddam-selise" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/janvi01"><img src="https://avatars.githubusercontent.com/u/34344234?v=4?s=100" width="100px;" alt="Janvi Bajoria"/><br /><sub><b>Janvi Bajoria</b></sub></a><br /><a href="https://github.com/reactplay/react-play/commits?author=janvi01" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://chhakuli-zingare.netlify.app/"><img src="https://avatars.githubusercontent.com/u/103095813?v=4?s=100" width="100px;" alt="Chhakuli Zingare"/><br /><sub><b>Chhakuli Zingare</b></sub></a><br /><a href="https://github.com/reactplay/react-play/commits?author=chhakuli123" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://clevercoderjoy.bio.link"><img src="https://avatars.githubusercontent.com/u/74505057?v=4?s=100" width="100px;" alt="clevercoderjoy"/><br /><sub><b>clevercoderjoy</b></sub></a><br /><a href="https://github.com/reactplay/react-play/commits?author=clevercoderjoy" title="Code">💻</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="http://priyank.live"><img src="https://avatars.githubusercontent.com/u/88102392?v=4?s=100" width="100px;" alt="Priyankar Pal"/><br /><sub><b>Priyankar Pal</b></sub></a><br /><a href="https://github.com/reactplay/react-play/commits?author=priyankarpal" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Akshaygore1"><img src="https://avatars.githubusercontent.com/u/92959398?v=4?s=100" width="100px;" alt="Akshay Gore"/><br /><sub><b>Akshay Gore</b></sub></a><br /><a href="https://github.com/reactplay/react-play/commits?author=Akshaygore1" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://medium.com/@saddamhr"><img src="https://avatars.githubusercontent.com/u/44530098?v=4?s=100" width="100px;" alt="Md. Saddam Hossain"/><br /><sub><b>Md. Saddam Hossain</b></sub></a><br /><a href="https://github.com/reactplay/react-play/commits?author=saddamhr" title="Code">💻</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind are welcome!
