import React from 'react';
import { View, Text } from 'react-native';
import { observer } from 'mobx-react';

import C from '../../controllers/anasayfa/ustBolgeC';

import { anasayfaS as S } from '../stil';
import splashC from '../../controllers/splashC';

//const Abc = observer(FlatList);

class Anasayfa extends React.Component {
    componentDidMount = C.cDMount;
    componentDidUpdate = C.cDUpdate;
    componentWillUnmount = C.cWUnmount;


    render() {
        return (
            <View
                style={[
                    S.ustBolgeK,
                    { display: splashC.splashAktif ? 'none' : 'flex' }
                ]}
            >
                <Text style={S.bilgiY}>Lorem ipsum dolar sit</Text>
                <Text style={S.bilgiY}>Lorem ipsum</Text>
                <Text style={S.bilgiY}>Lorem ipsum dolar sit amet</Text>
            </View>
        );
    }
}

export default observer(Anasayfa);