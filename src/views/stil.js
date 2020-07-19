import { StyleSheet } from 'react-native';
import tlfnH from '../helper/tlfnH';

//K: container
//AK: subcontainer
//B: Button
//BY: buttonText

const W = tlfnH.W;
const H = tlfnH.H;

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
        left: W(2),
        top: H(2)
    },


    ustBolgeK: {
        borderWidth: 1,
        borderColor: 'blue',
        width: tlfnH.w,
        paddingLeft: W(20) + H(2),
        minHeight: W(20) + H(4),
        justifyContent: 'center'
    },
    bilgiY: {
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'right',
        paddingRight: W(3)
    }
});