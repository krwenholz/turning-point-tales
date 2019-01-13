>  TODO(kyle): Web server setup (going to be much simpler)
>  TODO(kyle): Docker build this app and deploy it naively on AWS EC2
>  TODO(kyle): web pages built with hugo?
>  TODO(kyle): web page for login to connect to Patreon
>  TODO(kyle): JSON API to do that Patreon connection
>  TODO(kyle): svelte component to inspect cookie and know we're authenticated or not
>  TODO(kyle): Ability to upload YAML stories (saved in S3)
>  TODO(kyle): JSON API to serve up JSON formatted story
>  TODO(kyle): Page for displaying said JSON

# To get started

  python3 -m venv venv
  source bin/activate
  pip install -r Pipfile.txt

Then if you want to leave you just `deactivate`

# Testing rust API

    sudo docker run --rm \
      -v ${PWD}:/code \
      -v ${HOME}/.cargo/registry:/root/.cargo/registry \
      -v ${HOME}/.cargo/git:/root/.cargo/git \
      softprops/lambda-rust

    echo '{"firstName": "value1"}' | sudo docker run \
      -i -e DOCKER_LAMBDA_USE_STDIN=1 -e RUST_BACKTRACE=1 \
      --rm \
      -v ${PWD}/target/lambda/release:/var/task \
      lambci/lambda:provided
