import { observable, action, decorate } from 'mobx';

class AnasayfaC {
    cDMount = () => {
        setTimeout(() => this.splashAktif = false, 2000);
    }
    cDUpdate = () => {
    }
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
