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
    AK: {
        flexDirection: 'row'
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
        flex: 1,
        borderWidth: 1,
        borderColor: 'red'
    },
    notK: {
        backgroundColor: temaH.renkler.r1,
        marginTop: H(1.2),
        marginBottom: H(1.2),
        padding: W(2)
    },
    notAciklamaY: {
        fontWeight: 'bold',
        color: temaH.renkler.r2,
        flex: 1,
        paddingLeft: W(3),
        textAlignVertical: 'center'
    },
    notResim: { borderRadius: 3 },
    notButonlarK: {
        //borderWidth: 1,
        //borderColor: 'white',
        borderBottomWidth: 0,
        position: 'absolute',
        bottom: -10,
        right: 10,
        borderRadius: 3,
        backgroundColor: temaH.renkler.r1,
        flexDirection: 'row',
        paddingBottom: 3
    },
    notIkon: {
        marginLeft: 3,
        marginRight: 3
    }
});
export const splashS = StyleSheet.create({
    K: {
        position: 'absolute',
        left: W(4),
        top: H(2)
    }
});