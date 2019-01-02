To get started

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
