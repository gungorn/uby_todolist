import { StyleSheet } from 'react-native';
import tlfnH from '../helper/tlfnH';
import temaH from '../helper/temaH';

//K: container
//AK: subcontainer
//B: Button
//BY: buttonText

const W = tlfnH.W;
const H = tlfnH.H;

const golge1 = {
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15
};

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
        backgroundColor: temaH.renkler.r1,
        //margin: W(2),
        //borderRadius: W(2),
    },
    bilgiY: {
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'right',
        paddingRight: W(3),
        color: temaH.renkler.r2
    },


    notlarK: {
        marginTop: H(1),
        marginBottom: H(1)
    },
    notK: {
        backgroundColor: temaH.renkler.r1,
        marginTop: H(0.8),
        marginBottom: H(0.8),
        padding: W(2)
    }
});