import { AppRegistry, UIManager } from 'react-native';
import App from './src//views/App';
import tlfnH from './src/helper/tlfnH';
import 'react-native-console-time-polyfill';


if (tlfnH.android) UIManager.setLayoutAnimationEnabledExperimental(true);

//console.disableYellowBox = true;


AppRegistry.registerComponent('todolist', () => App);
