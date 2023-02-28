# React Native Test

## Installation

```bash
yarn
```

## Run :

### iOS

```bash
yarn ios
```

Pods installation

```bash
cd ios && pod install
```

Run on Emulator:

```bash
yarn ios
```

Or you can start the `ios/testDev.xcworkspace` file

### Android

```bash
yarn android
```

## Server mock

In order to interact with the server, you need to run the server mock:

Install dependencies

```bash
cd server
yarn
yarn dev
```

Or on root folder

```bash
yarn server-mock:install
yarn server-mock:dev
```

This will run the server on port `3003` (by default).

## Postman

On the root folder `postman`, you can find a postman collection with the endpoints.
