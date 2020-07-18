import { observable, action, decorate } from 'mobx';
import { Dimensions } from 'react-native';

class tlfnH {
    w = Dimensions.get('window').width;
    h = Dimensions.get('window').height;


    W = (d) => this.w * d / 100;
    H = (d) => this.h * d / 100;


    set = (k, v) => this[k] = v;
}


decorate(
    tlfnH,
    {
        w: observable,
        h: observable,

        W: action,
        H: action,

        set: action
    }
);


export default new tlfnH();
