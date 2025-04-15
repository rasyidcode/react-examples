# simple-js-trivia-quiz2

## How-to run with docker

```shell
$ docker run -it --rm -v $PWD:/srv/app -w /srv/app -p 8080:8080 node:22-alpine sh
$ npm i -g http-server
$ http-server # access the site at localhost:8080
```