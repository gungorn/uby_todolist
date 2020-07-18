import { observable, action, decorate } from 'mobx';

class AnasayfaC {
    cDMount = () => {
    }
    cDUpdate = () => {
    }
    cWUnmount = () => {
    }
}


decorate(
    AnasayfaC,
    {
        cDMount: action,
        cDUpdate: action,
        cWUnmount: action

    }
);


export default new AnasayfaC();
