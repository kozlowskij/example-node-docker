### Building and running

`docker build -t <your username>/example-node-docker .`

`docker run -p 8080:8080 -v <path to repo>:/usr/src/app  <your username>/example-node-docker`

Go to http://localhost:8080/. You should be able to make changes to `src/index.js` and see them after a page reload.
