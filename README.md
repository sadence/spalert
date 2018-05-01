## Aim of the projet

This is a coding exercise for recruitment purposes and also a way of refreshing my React and NodeJS skills.

## Setup

You must have Docker and docker-compose installed.

To run the project, clone it; install dependencies :

```
docker-compose run --no-deps --rm node-back npm install
docker-compose run --no-deps --rm node-front npm install
```

Then, type `docker-compose up` in the root folder.

You may begin filing a new alert, a new brigade then checking the alert list.
Go to http://localhost:3000.

### Emails

For email support (alerting admin with emails about new alerts, and users when an alert is taken care of),
please fill in the environement variables in the `docker-composer.yml`, precisely:

```
- SENDER_USER=mail
- SENDER_PASS=pass
- SENDER_HOST=host
- ADMIN_MAIL=mail
```

## Technical Choices

NodeJS was compulsory in the context of the assignment.

I chose to do a single page application as there would be a lot of front logic involved and frontend frameworks like React have tools to handle it.

I chose React specifically because it's a popular framework I'm familiar with.

Same goes for mongodb, as it allows the developper to modify
the structure of the data easily suring development and keep
testing.

