import { observable, action, decorate } from 'mobx';
import { LayoutAnimation } from 'react-native';
import notM from '../../models/notM';

class anasayfaC {
    cDMount = () => { //AÇILIŞTAN HEMEN SONRA
    }
    cDUpdate = () => { //UPDATE'DEN HEMEN SONRA
        //LayoutAnimation.easeInEaseOut();
    }
    cWUnmount = () => { //KAPANIŞTAN HEMEN NÖCE

    }

    notekleModal = false;

    baslik = '';
    notIcerik = false;


    olustur = async () => {
        await notM.ekleNot();
    }

    set = (k, v) => this[k] = v;
}

decorate(
    anasayfaC,
    {
        cDMount: action,
        cDUpdate: action,
        cWUnmount: action,

        notekleModal: observable,
        baslik: observable,
        notIcerik: observable,

        olustur: action,

        set: action,
    }
);


export default new anasayfaC();