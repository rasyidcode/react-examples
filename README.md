# react-journey

## New react project command

```bash
$ docker run -it --rm -v ${PWD}:/app -w /app --user node node:22-alpine npm create vite@latest
```

## How to install dependencies

```bash
$ cd project-name
$ docker run -it --rm -v ${PWD}:/app -w /app --user node node:22-alpine npm install --verbose
```

## How to run

```bash
$ cd project-name
$ docker run -it --rm -v ${PWD}:/app -w /app -p 5173:5173 --user node node:22-alpine npm run dev -- --host
```
