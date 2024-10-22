# Prerequisite

install lerna globally if you haven't already

```
npm install lerna --global
```

# Getting started

## Run install in all apps

```
yarn add install:all
```

## Run all apps

```
lerna run dev
```

# Testing

Common code is located in the `./lib` directory where we install `@lit-protocol/*` packages.

## Triggering a dependency update

```
curl -X POST \
  -H "Accept: application/vnd.github.everest-preview+json" \
  -H "Authorization: token xx" \
  https://api.github.com/repos/LIT-Protocol/lit-configuration-guides/dispatches \
  -d '{"event_type":"dependency_update", "client_payload": {"labels": ["alpha"]}}'
```
