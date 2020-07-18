import { observable, action, decorate } from 'mobx';
import { LayoutAnimation } from 'react-native';

class AnasayfaC {
    cDMount = () => {
        setTimeout(() => this.splashAktif = false, 2000);
    }
    cDUpdate = () => { LayoutAnimation.easeInEaseOut(); }
    cWUnmount = () => {
    }


    splashAktif = true;
}


decorate(
    AnasayfaC,
    {
        cDMount: action,
        cDUpdate: action,
        cWUnmount: action,

        splashAktif: observable,
    }
);


export default new AnasayfaC();
