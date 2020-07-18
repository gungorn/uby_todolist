import React from 'react';
import { View, Text } from 'react-native';

import C from '../controllers/AnasayfaC';

import Resim from './Components/Resim';


class Anasayfa extends React.Component {
    componentDidMount = C.cDMount;
    componentDidUpdate = C.cDUpdate;
    componentWillMount = C.cWUnmount;


    render() {
        return (
            <View>
                <Resim source={require('../../assets/logo.png')} height={100} />
            </View>
        );
    }
}

export default Anasayfa;