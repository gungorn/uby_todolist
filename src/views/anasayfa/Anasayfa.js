import React from 'react';
import { View, StatusBar } from 'react-native';
import { observer } from 'mobx-react';

import C from '../../controllers/anasayfa/anasayfaC';

import { anasayfaS as S } from '../stil';
import temaH from '../../helper/temaH';
import Splash from '../Splash';
import UstBolge from './UstBolge';
import Notlar from './Notlar';

class Anasayfa extends React.Component {
    componentDidMount = C.cDMount;
    componentDidUpdate = C.cDUpdate;
    componentWillUnmount = C.cWUnmount;


    render() {
        return (
            <View style={[S.K, C.splashAktif && S.K2]}>
                <StatusBar
                    backgroundColor={C.splashAktif ? 'transparent' : temaH.renkler.r1}
                    barStyle={'dark-content'}
                />

                <UstBolge />

                {!C.splashAktif && <Notlar />}

                <Splash />
            </View>
        );
    }
}

export default observer(Anasayfa);