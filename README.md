# Caliber Mobile

## Project Description

Caliber is a performance management suite used to collect and analyze evaluations of Revature trainees with the goal of increasing transparency, fostering informed decision making, and creating actionable information. Caliber takes input for any quality checkpoint from the beginning to the end of the associate lifecycle (screening, training, QC, panel, etc). The Caliber suite also provides a variety of reports on different levels of granularity using visual dashboards and tabular data. Users can generate individual and batch PDF reports to distribute to clients, trainees, and other stakeholders.

## Technologies Used

* React Native
* AWS Lambda 
* AWS API Gateway 
* AWS Cognito & Amplify
* Postgres 

## Features

List of Features:
* Secure login via AWS Cognito
* Sort and search from a list of batches
* Read, add or update weekly notes for a selected batch

To-do List:
* Add the rest of functionalities of Caliber-Mobile, such as 'Manage Batch' and 'Access Batch.'

## Roles

* QC Analyst
    * Read notes of all batches
    * CRUD operations on notes of all batches 
* Trainer
    * Read notes of his/her batch
* Admin
    * Full access

## Getting Started
   
1. First clone the repo from git by running the following command:
    ```
    $ git clone https://github.com/1018-MattOberlies-CaliberMobile/caliber-mobile-frontend.git
    ```
2. Optionally, clone the backend repo and follow the README.md and STARTUP.md instructions at: 
    ```
    https://github.com/1018-MattOberlies-CaliberMobile/caliber-mobile-backend
    ```

3. Install all the dependencies. 
    ```
    $ npm install
    # or
    $ yarn add 
    ```
4. Install Expo.
    ```
    $ npm i -g exp
    # or
    $ yarn global add expo 
    ```
5. Start the application.
    ```
    $ npm start
    # or
    $ yarn start
    ```

## Writing and Running Tests

### Jest

This project is set up to use Jest for unit tests. You can configure whatever testing strategy you like, but jest works out of the box. Create test files in directories called `/src/jest` or with the `.test` extension to have the files loaded by jest.

#### `npm test`

* Runs the Jest test runner on your tests.

### Cypress

This project is set up to use Jest for end-to-end tests. Create test files in directorycalled `/src/cypress/integration` or with the `.spec` extension to have the files loaded by jest.

#### `npx cypress run`

* Runs the cypress test runner on your tests.

## Usage

> TODO: how to use the project.

## Detailed Installation/deployment instructions

Please refer to the STARTUP.md file.


### Project structure

The project code base is mainly located within the `src` folder.

```
.
├── src
│   ├── components                       # contains the components 
│   |── constants                        # contains constants, such as layout and colors 
│   │── cypress                          # contains Cypress testing
│   │── hooks                            # contains hooks
│   │── jest                             # contains jest testings
|   |── models                           # contains models for the project
|   |── Navigation                       # contains the navigations 
|   |── redux                            # redux related files
|   |── remote                           # Axios related files
|   |── screens
│   |    └── BatchSelectionScreen.tsx    # Page where you can select batch
│   |    └── LoginPage.tsx               # Displays log-in page
│   |    └── NotFoundScreen.tsx          # Displays Not-Found page
│   |    └── OverallNotesScreen.tsx      # Displys note for a batch
│   |    └── WeekNotesScreen.tsx         # Displays note for a week
|   |
|   |── scripts
|   |── styles 
|
|── amplify                              # Amplify related files
|── assets                               # Contains fonts and images
|── design_refs                          # Contains ERD diagram and wireframe
|    
├── package.json
├── tsconfig.json                        # Typescript compiler configuration
├── tsconfig.paths.json                  # Typescript paths
├── jest.config.ts                       # Jest configuration
├── .eslintrc.json                       # ESLint configuration
|── App.tsx                              # Entry point of the application


```

## Contributors

> List

## License

This project uses the following license: [<license_name>](<link>).
