import { StyleSheet } from 'react-native';
import tlfnH from '../helper/tlfnH';

//K: container
//AK: subcontainer
//B: Button
//BY: buttonText

export const anasayfaS = StyleSheet.create({
    K: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'red'
    },
    K2: { //splash kapalı iken
        justifyContent: 'center',
        alignItems: 'center'
    },

    logoK: {
        position: 'absolute',
        left: tlfnH.W(2),
        top: tlfnH.H(2)
    },


    ustBolgeK: {
        borderWidth: 1,
        height: 200,
        width: tlfnH.w,
    }
});