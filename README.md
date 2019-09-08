# RNBaseProjectV3

A small base project on React Native with the newest technologies and pure code.

## How it works

| Platform  | How it works |
| :--- | :---: |
| **iOS** | ![](ios_example.gif) |
| **Android** | ![](android_example.gif) |

## Technology stack

| For  | Link |
| :--- | :--- |
| React | [React](https://reactjs.org/) |
| React Native | [React Native](https://facebook.github.io/react-native/) |
| Language | [Typescript](https://www.typescriptlang.org/) |
| Navigation | [react-navigation](https://reactnavigation.org/) |
| Redux | [redux](https://redux.js.org/) |
| Redux-Saga | [redux-saga](https://github.com/redux-saga/redux-saga) |
| Redux-Persist | [redux-persist](https://github.com/rt2zz/redux-persist) |
| Network | [axios](https://github.com/axios/axios) |
| Internationalization | [react-native-localize](https://github.com/react-native-community/react-native-localize) + [i18n-js](https://github.com/fnando/i18n-js) |
| Image | [react-native-fast-image](https://github.com/DylanVann/react-native-fast-image) |
| Debug | [Reactotron](https://github.com/infinitered/reactotron) |

## debug build on Android
mkdir -p android/app/src/main/assets && rm -rf android/app/build && react-native bundle --platform android --dev false --entry-file index.android.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res && cd android && ./gradlew assembleDebug

## release build on Android
mkdir -p android/app/src/main/assets && rm -rf android/app/build && react-native bundle --platform android --dev false --entry-file index.android.js --bundle-output android/app/src/main/assets/index.android.bundle && cd android && ./gradlew assembleRelease
