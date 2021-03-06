# Overview
This is a boilerplate repo for express apps backed by MongoDB and was built using the steps provided in [Writing a CRUD app with Node.js and MongoDB](https://codeburst.io/writing-a-crud-app-with-node-js-and-mongodb-e0827cbbdafb).

It provides boilerplate API methods to create, read, update and delete models from an API and store them in MongoDB.

The front-end is all static HTML generated with [pug](https://github.com/pugjs/pug). 

MongoDB is run in a docker container and mounted to the local file system for easy persistence. This example uses MongoDB 3.6. You can use [docker documentation](https://docs.docker.com/) to install docker on your OS.

# Usage

```bash
# Run the database
cd database
./run-mongo.sh
# Run the App
cd ../app
npm i
./start-server.sh
```

You will now be able to view the app at [localhost:1234](http://localhost:1234/)
