import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { observer } from 'mobx-react';

import C from '../controllers/AnasayfaC';

import Resim from './Components/Resim';

import tlfnH from '../helper/tlfnH';

import { anasayfaS as S } from './stil';


class Anasayfa extends React.Component {
    componentDidMount = C.cDMount;
    componentDidUpdate = C.cDUpdate;
    componentWillUnmount = C.cWUnmount;


    ustBolge() {
        return (
            <View style={[
                S.ustBolgeK,
                { display: C.splashAktif ? 'none' : 'flex' }
            ]}
            >
                <Text style={S.bilgiY}>Loreim ipsum dolar sit</Text>
                <Text style={S.bilgiY}>Loreim ipsum</Text>
                <Text style={S.bilgiY}>Loreim ipsum dolar sit amet</Text>
            </View>
        );
    }


    render() {
        const sa = C.splashAktif;

        return (
            <View style={[S.K, sa && S.K2]}>
                <StatusBar
                    backgroundColor={sa ? 'transparent' : '#e89d43'}
                    barStyle={'dark-content'}
                />

                {this.ustBolge()}

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