# Create a Play
This document helps you with the steps to `Create a play` in `react-play`. You will also find the details of how to submit a play for code review.
## 🖥️ Steps to Create a Play
Welcome developers! We are as excited as you are to know that you are going to create a new play. It is super easy to get started.

> **Note:** The steps below assumes that you have forked and cloned the [react-play](https://github.com/reactplay/react-play) repository. Also, you have installed the dependencies using the `npm install` or `yarn install` command. If you are new to forking, please watch this [YouTube Guide](https://www.youtube.com/watch?v=h8suY-Osn8Q) to get started.

- Run the application using 
  ```bash
  yarn start
  #OR
  npm run start
  ```

  If you face dependency issues, then try running this command:
  ```bash
  npm install --legacy-peer-deps
  ```
  You might check the [README](README.md) file for more details.

  You might see a prompt like this 
  
  ```bash
  Need to install the following packages:
    create-react-play
  Ok to proceed? (y)
  ```
  Press `y` and hit `Enter`. This will install `create-react-play` globally. For more info check [`create-react-play readme`](https://github.com/reactplay/create-react-play/blob/main/README.md)

- You should be able to access the application on http://localhost:3000
- Click on `Create` button. Note, its a `beta` feature, feel free to [log issue](https://github.com/reactplay/react-play/issues) (if any) 
- The application will try to authenticate you
- If you are NOT already logged in with [`NHost`](https://nhost.io), you will be prompted to give permission
  - Log in with your GitHub account
- Fill the information and submit.
  Parameter details
  
  | Field           | Mandatory? | Description                                                                                                                                                                                                                                                                                                                                                                                                                 |
  | --------------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | Name            | YES        | It is a description of the play for users to understand it better. The maximum number of allowed characters is 1024.                                                                                                                                                                                                                                                                                                        |
  | Issue           | YES        | Every play should be mapped with an issue. Select it here.                                                                                                                                                                                                                                                                                                                                                                  |
  | Language        | YES        | Let the application know your choice of script. It supports both <b>JavaScript</b> and <b>TypeScript</b>. You can pick either of it.                                                                                                                                                                                                                                                                                        |
  | Style           | NO         | Let the application know your choice of style. It supports both <b>css</b> and <b>scss</b>. You can pick either of it.                                                                                                                                                                                                                                                                                                      |
  | Level           | YES        | You will be asked to select one of the three levels, Beginner, Intermediate, or Advanced. Please select a level for the play. A level indicates the possible complexity of developing the play using React.                                                                                                                                                                                                                 |
  | Github Username | YES        | Provide your GitHub user name to mark you as the creator of the play.                                                                                                                                                                                                                                                                                                                                                       |
  | Tags            | NO         | Please provide comma-separated list of tags. Example: JSX, Hooks                                                                                                                                                                                                                                                                                                                                                            |
  | Cover Image URL | NO         | A cover image is used to show your play with a thumbnail in the play list page. Please provide a link to a cover image that is publicly accessible using a URL, example:  https://res.cloudinary.com/reactplay/image/upload/v1649060528/demos/id-card_pdvyvz.png. Alternatively, you can have a cover.png file in the root of your play folder.  If you don't have a cover image, the app will use the default cover image. |
  | Blog URL        | NO         | If you have written an article about this play, please provide the link to your blog article page.                                                                                                                                                                                                                                                                                                                          |
  | Video           | NO         | If you have created a video tutorial about this play, please provide the link to your YouTube video.                                                                                                                                                                                                                                                                                                                        |

- On successfull submission, you will be redirected to a page where it will prompt you with the `play_id`
- Stop your application
- Navigate to the root of the reactplay 
- Run following command
  ```bash
  npx create-react-play -c <the_play_id>
  ```
- Start the application
  ```bash
  yarn start
  #OR
  npm run start
  ```
-  You should now see your play added to the [play list](http://localhost:3000/plays) page. You can click on the play thumbnail to see the details of the play.
-  And you will notice a directory created for your play under `./src/plays/<your_play_name>`
-  Continue developing your play. Happy coding.
  
## 👀 Submitting a Play for Review
After you done with coding for your `Play`, you can submit it for review. Submitting a `Play` for review is a two step process.

- Create a Pull Request on the [react-play](https://github.com/reactplay/react-play) repository with your changes. 
- Dedicate some time in a week to take care of the review comments.

Once the Pull Request is approved and merged, we will notify you and add you as a `Contributor` to the [react-play](https://github.com/reactplay/react-play) project.

## ✋ Need Help?

You can reach out to us at [ReactPlay Twitter Handle | @ReactPlayIO](https://twitter.com/ReactPlayIO) with a DM. Additionally, feel free to open a [discussion](https://github.com/reactplay/react-play/discussions) or [issue](https://github.com/reactplay/react-play/issues) on the `react-play` repository.





