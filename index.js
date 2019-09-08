import React from 'react';
import {AppRegistry} from "react-native";
import {name as appName} from "./app";
import App from "./src/App";
import './src/ReactotronConfig'

AppRegistry.registerComponent(appName, () => App);
