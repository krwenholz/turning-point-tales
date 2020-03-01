![](https://github.com/actions/hello-world/workflows/CD/badge.svg)


# To get started

npm install
npm run dev

Because we like using databases though, you probably want to connect locally or to Heroku
with the `DATABASE_URL` environment variable. You can grab the Heroku one with

heroku pg:credentials:url

Set this before starting the server and you should be good to go.

# Database seeds

We have a script! Run

CONNECTION_STRING='SOME_URL_FOR_A_DATABASE' npm run db:seed

# Testing

docker run -it -v \$PWD:/cypress -w /cypress -e CYPRESS_BASE_URL=http://meine.krwenholz.com:3000 cypress/included:3.4.1 cypress open --browser chrome

# Deploy

All of this is in our CircleCI file as well :)

docker build .
heroku container:push web
heroku container:release web
