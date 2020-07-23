cat .env.staging > .env
yarn build
gcloud app deploy app.yaml --project=shopgrid-0 --version=new --quiet
