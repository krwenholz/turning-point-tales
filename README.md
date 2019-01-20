>  TODO(kyle): Break the previews into a component we can loop over (store data as json?)
>  TODO(kyle): story page
>  TODO(kyle): json route for stories
>  TODO(kyle): login flow for oauth with Patreon
>  TODO(kyle): guard json route
>  TODO(kyle): get icono working for these icons https://codepen.io/KPaulsen/pen/vQEmNp?editors=1100

# To get started

  python3 -m venv venv
  source bin/activate
  pip install -r Pipfile.txt
  npm install
  npm run dev

Then if you want to leave you just `deactivate`

# Deploy

  docker build .
  heroku container:push web
  heroku container:release web
