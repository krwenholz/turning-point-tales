>  TODO(kyle): login flow for oauth with Patreon
>  TODO(kyle): guard json route
>  TODO(kyle): get icono working for these icons https://codepen.io/KPaulsen/pen/vQEmNp?editors=1100

# To get started

  npm install
  npm run dev

Because we like using databases though, you probably want to connect locally or to Heroku
with the `DATABASE_URL` environment variable. You can grab the Heroku one with

  heroku pg:credentials:url

Set this before starting the server and you should be good to go.

# Deploy

  docker build .
  heroku container:push web
  heroku container:release web
