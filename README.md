<!--
Hey, thanks for using the awesome-readme-template template.  
If you have any enhancements, then fork this project and create a pull request 
or just open an issue with the label "enhancement".

Don't forget to give this project a star for additional support ;)
Maybe you can mention me or this repo in the acknowledgements too
-->
<div align="center">

  <h1>mylinx-server</h1>
  
  <p>
    Backend server for mylinx
  </p>
  

</div>

<br />


<!-- TechStack -->
### Tech Stack

- ***Express.js***
- ***Typescript***
- ***Yarn***

<!-- Features -->
### Features

- ***Package managament*** with Yarn
- ***Testing*** with Jest and Supertest
- ***Cross-Origin Resource-Sharing*** enabled using cors
- ***Secured HTTP Headers*** using helmet
- ***Logging*** with winston
- ***Environment variables*** using dotenv
- ***Compression*** with gzip
- ***Git hooks*** with husky and lint-staged
- ***Linting and enforced code style*** using Eslint and Prettier
- ***Containerization*** with Docker


<!-- Env Variables -->
### Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`NODE_ENV`

`PORT`

`CORS_ORIGIN`

See .env.example for further details

<!-- Getting Started -->
## Getting Started

<!-- Prerequisites -->
### Prerequisites

This project uses Yarn as package manager

```bash
 npm install --global yarn
```

<!-- Installation -->
### Installation

Go to the project directory

```bash
  yarn install
```

### Linting

```bash
  # run ESLint
  yarn lint
  
  # fix ESLint errors
  yarn lint:fix

  # run prettier
  yarn code:check

  # fix prettier errors
  yarn code:format
  
  # fix prettier errors in specific file
  yarn code:format:specific-file <file-name>
```
   
<!-- Running Tests -->
### Running Tests

To run tests, run the following command

```bash
  yarn test
```

<!-- Run Locally -->
### Run Locally

Start the server in development mode

```bash
  yarn dev
```

Start the server in production mode

```bash
  yarn start
```

<!-- Run with Docker -->
### Run with Docker

Build the container

```bash
  cd mylinx-server
  docker build . -t mylinx-server     
```

Start the container

```bash
  docker run -p <port you want the container to run at>:4040 -d mylinx-server


<!-- License -->
## License

Distributed under the MIT License. See LICENSE.txt for more information.


<!-- Contact -->
## Contact

Asadbek Karimov
