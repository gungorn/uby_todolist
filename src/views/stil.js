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
    },
    K2: { //splash kapalı iken
        justifyContent: 'center',
        alignItems: 'center'
    },

    logoK: {
        position: 'absolute',
        left: W(4),
        top: H(2),
        //borderRightWidth: 1,
        //borderRightColor: 'white',
        // paddingRight: 20
    },


    ustBolgeK: {
        paddingLeft: W(20) + H(2),
        minHeight: W(20) + H(4),
        justifyContent: 'center',
        backgroundColor: '#e89d43',
        //margin: W(2),
        //borderRadius: W(2),
    },
    bilgiY: {
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'right',
        paddingRight: W(3),
        color: '#0d1030'
    }
});