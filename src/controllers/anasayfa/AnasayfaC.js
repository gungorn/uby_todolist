import { observable, action, decorate } from 'mobx';
import { LayoutAnimation } from 'react-native';

class AnasayfaC {
    cDMount = async () => {
        setTimeout(() => this.splashAktif = false, 2000);
    }
    cDUpdate = () => { LayoutAnimation.easeInEaseOut(); }
    cWUnmount = () => {
    }
    splashAktif = true;

    set = (k, v) => this[k] = v;
}


decorate(
    AnasayfaC,
    {
        cDMount: action,
        cDUpdate: action,
        cWUnmount: action,

        splashAktif: observable,

        set: action
    }
);


export default new AnasayfaC();
