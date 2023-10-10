/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {verify} from './screens/CodeVerificationScreen'
AppRegistry.registerComponent(appName, () => App);
