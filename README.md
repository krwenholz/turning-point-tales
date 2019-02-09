// TODO(kyle):  and let them know the bit of information we store (basically point
// them to our TOS and privacy policy) and cookie usage
// https://www.docracy.com/application/learnmore
// https://tosdr.org/

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
