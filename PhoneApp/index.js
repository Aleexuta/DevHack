/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
// index.js
import 'text-encoding-polyfill';
//import Joi from '@hapi/joi';
AppRegistry.registerComponent(appName, () => App);
