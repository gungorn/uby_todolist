import React from 'react';
import { View, Text, TextInput } from 'react-native';
import denemeStore from './denemeStore';
import { observer } from 'mobx-react';

class DenemeClass extends React.Component {
    state = { inputValue: '' };
    props = {};

    componentDidMount() { }
    componentDidUpdate() { }
    componentWillUnmount() { }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Text>{denemeStore.inputValue}</Text>

                <TextInput
                    style={{ borderWidth: 1 }}
                    value={denemeStore.inputValue}
                    onChangeText={d => denemeStore.setInputValue(d)}
                />
            </View>
        );
    }
}


export default observer(DenemeClass);