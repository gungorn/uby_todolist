import React from 'react';
import { View, Text } from 'react-native';

import C from '../controllers/AnasayfaC';

import Resim from './Components/Resim';

import { anasayfaS as S } from './stil';
import tlfnH from '../helper/tlfnH';

class Anasayfa extends React.Component {
    componentDidMount = C.cDMount;
    componentDidUpdate = C.cDUpdate;
    componentWillMount = C.cWUnmount;


    render() {
        return (
            <View style={[S.K, S.K2]}>

                <View style={S.logoK}>
                    <Resim source={require('../../assets/logo.png')} width={tlfnH.W(60)} />
                </View>

            </View>
        );
    }
}

export default Anasayfa;