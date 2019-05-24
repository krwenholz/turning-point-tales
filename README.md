>  TODO(kyle): https://goaccess.io/ for log viewing
>  TODO(kyle): share buttons
>    https://gist.github.com/chrisjlee/5196139
>  TODO(kyle): link buttons for facebook, twitter, instagram

# To get started

  npm install
  npm run dev

Because we like using databases though, you probably want to connect locally or to Heroku
with the `DATABASE_URL` environment variable. You can grab the Heroku one with

  heroku pg:credentials:url

Set this before starting the server and you should be good to go.

# Deploy
All of this is in our CircleCI file as well :)

  docker build .
  heroku container:push web
  heroku container:release web
