import React from 'react';
import { View, Text } from 'react-native';

import database from '@react-native-firebase/database';
const db = database();

class App extends React.Component {

    componentDidMount() {
        this.ekle('/NOTLAR/KULLANICIID1', 'test');
        this.ekle('/NOTLAR/KULLANICIID2', 'test');
        this.ekle('/NOTLAR/KULLANICIID3', { test: { test: { test: { a: 'a' } } } });
        this.ekle('/NOTLAR/KULLANICIID4', 'test');
        this.ekle('/', 'hahaha');
    }


    ekle(yol, veri) {
        const ref = db.ref(yol);

        const islem = ref.set(veri);

        islem.then(d => console.log({ sonuc: true, data: d }))
            .catch(e => console.log({ sonuc: true, error: e }));

    }

    render() {
        return (
            <View>
                <Text>tetst</Text>
            </View>
        );
    }
}

export default App;