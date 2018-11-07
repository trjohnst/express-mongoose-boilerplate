#!/bin/bash
set -ex

# docs: https://hub.docker.com/r/library/mongo/
docker run \
  -p 27017:27017 \
  -e MONGO_INITDB_ROOT_USERNAME=root \
  -e MONGO_INITDB_ROOT_PASSWORD=fpEvTQWv5iYnZzha \
  -e MONGO_INITDB_DATABASE=productstutorial \
  -v data:/data/db \
  mongo:3.6