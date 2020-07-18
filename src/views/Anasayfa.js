import React from 'react';
import { View, Text } from 'react-native';
import { observer } from 'mobx-react';

import C from '../controllers/AnasayfaC';

import Resim from './Components/Resim';

import tlfnH from '../helper/tlfnH';

import { anasayfaS as S } from './stil';


class Anasayfa extends React.Component {
    componentDidMount = C.cDMount;
    componentDidUpdate = C.cDUpdate;
    componentWillMount = C.cWUnmount;


    render() {
        const sa = C.splashAktif;

        return (
            <View style={[S.K, sa && S.K2]}>

                <View style={!sa && S.logoK}>
                    <Resim
                        source={require('../../assets/logo.png')}
                        width={tlfnH.W(sa ? 60 : 20)}
                    />
                </View>

            </View>
        );
    }
}

export default observer(Anasayfa);