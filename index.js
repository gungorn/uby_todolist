import React from 'react';
import { AppRegistry, UIManager } from 'react-native';

import App from './src/views/App';
//import App from './DenemeClass';
//import App from './DenemeFonk';

import tlfnH from './src/helper/tlfnH';
import 'react-native-console-time-polyfill';


if (tlfnH.android) UIManager.setLayoutAnimationEnabledExperimental(true);

//console.disableYellowBox = true;

const X = () => {
    return (
        <App isim={'nurettin'} />
    );
}


AppRegistry.registerComponent('todolist', () => X);
