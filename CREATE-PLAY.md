# Create a Play

## Table of Contents
- [Steps to Create a Play](#steps-to-create-a-play)
- [Submitting a Play for Review](#submitting-a-play-for-review)
- [Learn about the behind scenes](#learn-about-the-behind-scenes)
- [Frequently Asked Questions](#faq)

### Steps to Create a Play
Welcome developers! Here are some things you can do to get started with your `Play` creation.

> **Note:** The steps below assumes that you have forked and cloned the [react-play](https://github.com/atapas/react-play) repository.

- Open a command prompt in your project folder.
- Run the following command:
  ```shell
    yarn install
    # or
    npm install
  ```
- After the installation is complete, run the following command:
  ```shell
    yarn plop
  ```
- This will ask a few questions about your `Play` and then perform required steps to create the play. The screen shot below shows the output of the command.
  <p align="center">
    <img src="./screens/plop-create.png" alt="plop create" />
  </p>
  
  <details>
    <summary>
      Please expand  to find the description of the question details.
    </summary>
    <p>
      <table>
        <thead>
          <tr>
            <th>Question</th>
            <th>Mandatory</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Give us a play id</td>
            <td>Yes</td>
            <td>A play id is an unique id for your play. Please provide any string starts with <strong>pl</strong> and without a space(Example: pl-id-card)</td>
          </tr>
          <tr>
            <td>Please provide the name of the play</td>
            <td>Yes</td>
            <td>Please provide a meaningful name of the play(Example: Identity Card). This name will be visible to the users. </td>
          </tr>
          <tr>
            <td>Tell us more about the play</td>
            <td>No</td>
            <td>It is a description of the play for users to understand it better. The maximum number of allowed characters is 1024.</td>
          </tr>
          <tr>
            <td>Provide the React Component name</td>
            <td>Yes</td>
            <td>Please provide the React component name for the play. This component will be created automatically. Please follow the convention of the React component name, example: IdentityCard</td>
          </tr>
          <tr>
            <td>Provide the folder name</td>
            <td>Yes</td>
            <td>A folder name is required to create a separate folder for a play. It also helps in creating the deep linking path to access the play in the UI. Please provide a folder name, example: identity-card</td>
          </tr>
          <tr>
            <td>Please provide the path(URL) to cover image</td>
            <td>No</td>
            <td>A cover image is used to show your play with a thumbnail in the play list page. Please provide a link a cover image that is publicly accessible using a URL, example:  https://res.cloudinary.com/atapas/image/upload/v1649060528/demos/id-card_pdvyvz.png.      Alternatively, you can have a cover.png file in the root of your play folder.
            If you don't have a cover image, the app will use the default cover image.</td>
          </tr>
          <tr>
            <td>What is the level of this play?</td>
            <td>Yes</td>
            <td>You will be asked to select one of the three levels, Beginner, Intermediate, or Advanced. Please select a level for the play. A level indicates the possible complexity of developing the play using React.</td>
          </tr>
          <tr>
            <td>Provide maximum of 5 tags</td>
            <td>No</td>
            <td>Please provide comma-separated list of tags. You can provide max 5 tags. Example: JSX, Hooks</td>
          </tr>
          <tr>
            <td>Enter your github username</td>
            <td>Yes</td>
            <td>Provide your GitHub user name to mark you as the creator of the play.</td>
          </tr>
          <tr>
            <td>Enter your blog url</td>
            <td>No</td>
            <td>If you have written an article about this play, please provide the link to your blog article page.</td>
          </tr>
          <tr>
            <td>Enter your video url</td>
            <td>No</td>
            <td>If you have created a video tutorial about this play, please provide the link to your YouTube video.</td>
          </tr>
        </tbody>
      </table>
    </p>
  </summary>
</details>

- Now you can run the app using the following command:
  ```shell
    yarn start
    # or
    npm start
  ```
- You can now see your play added to the [play board](http://localhost:3000/plays) page. You can click on the play thumbnail to see the details of the play.

- Now start coding yor `Play`!
### Submitting a Play for Review
After you done with coding for your `Play`, you can submit it for review. Submitting a `Play` for review is a two step process.

- Create a Pull Request on the [react-play](https://github.com/atapas/react-play) repository with your changes.
- Dedicate some time in a week to take care of the review comments.

Once the Pull Request is approved and merged, we will notify you and add you as a `Contributor` to the [react-play](https://github.com/atapas/react-play) project.
### Learn about the behind scenes
TBA

### FAQ
TBA


