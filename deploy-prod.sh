cat .env.production >.env
yarn build
gcloud app deploy app.yaml --project=grid-prod
