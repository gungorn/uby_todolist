import React, { useState, useEffect } from 'react';
import { View, Text, TextInput } from 'react-native';
import { useObserver } from 'mobx-react-lite';
import denemeStore from './denemeStore';


const x = () => { console.log('TEST2') };


const DenemeFonk = (a) => {
    //       değişken    setDeğişken    = state yapısı (default değer)
    //const [inputValue, setInputValue] = useState('');

    useEffect(() => { console.log('TEST1') }, []);
    //useEffect(() => { console.log('TEST2') });


    x();

    return useObserver(() => {
        return (
            <View style={{ flex: 1 }}>
                <Text>{denemeStore.inputValue}{a.isim}</Text>

                <TextInput
                    style={{ borderWidth: 1 }}
                    value={denemeStore.inputValue}
                    onChangeText={d => denemeStore.setInputValue(d)}
                />
            </View>
        );
    });
}

export default DenemeFonk;