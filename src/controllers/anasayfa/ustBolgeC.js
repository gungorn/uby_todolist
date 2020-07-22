import { observable, action, decorate } from 'mobx';
import { LayoutAnimation } from 'react-native';

class ustBolgeC {
    cDMount = async () => { }
    cDUpdate = () => { LayoutAnimation.easeInEaseOut(); }
    cWUnmount = () => { }

    set = (k, v) => this[k] = v;
}


decorate(
    AnasayfaC,
    {
        cDMount: action,
        cDUpdate: action,
        cWUnmount: action,

        set: action
    }
);


export default new ustBolgeC();
