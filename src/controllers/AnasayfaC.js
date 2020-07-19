import { observable, action, decorate } from 'mobx';
import { LayoutAnimation } from 'react-native';

class AnasayfaC {
    cDMount = () => {
        setTimeout(() => this.splashAktif = false, 2000);
    }
    cDUpdate = () => { LayoutAnimation.easeInEaseOut(); }
    cWUnmount = () => {
    }


    notButonlarKH = 0;


    splashAktif = true;

    set = (k, v) => this[k] = v;
}


decorate(
    AnasayfaC,
    {
        cDMount: action,
        cDUpdate: action,
        cWUnmount: action,

        notButonlarKH: observable,

        splashAktif: observable,

        set: action
    }
);


export default new AnasayfaC();
