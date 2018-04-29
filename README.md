## Aim of the projet

This is a coding exercise for recruitment purposes and also a way of refreshing my React and NodeJS skills.

## Setup

To run the project, clone it; install dependencies :
```
cd spalert-front
npm install
cd spalert-back
npm install
```

Then, type `docker-compose up` in the root to up the docker for the database (you must have Docker and docker-compose installed).

Then, for both the front and the back do
`npm start`.

You may begin filing a new alert then checking the alert list.
Go to http://localhost:3000.

## Technical Choices

NodeJS was compulsory in the context of the assignment.

I chose to do a single page application as there would be a lot of front logic involved and frontend frameworks like React have tools to handle it.

I chose React specifically because it's a popular framework I'm familiar with.

Same goes for mongodb, as it allows the developper to modify
the structure of the data easily suring development and keep
testing.

