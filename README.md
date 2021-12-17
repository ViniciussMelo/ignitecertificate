<h1 align="center">Serverless</h1>

<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=8257E5&labelColor=000000">

<br>

## ✨ Technologies

This project was developed with the following technologies:

- [Node.js](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)
- [Serverless Framework](serverless.com/)
- [Amazon Lambda](https://aws.amazon.com/pt/lambda/)

## 💻 Project

The project is responsible for generating a certificate for a user and the possibility of searching the validity of a certificate.

## 🚀 How to run

- Clone the repository

### To run locally

- Run `yarn` to install dependencies
- Run `serverless dynamodb install` to download DynamoDB locally.
- Run `yarn dynamo:start` to start the database in local environment.
- Run `yarn dev` on another terminal to start the application in a local environment.

### To deploy

- Configure user credentials
- Run `yarn deploy` to upload the project to AWS Lambda

## 📄 License

This project is under the MIT license. See the [LICENSE](LICENSE.md) file for more details.

---

Made with ♥ by Rocketseat & Vinicius 👋🏻