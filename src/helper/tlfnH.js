import { observable, action, decorate } from 'mobx';
import { Dimensions, Platform } from 'react-native';

class tlfnH {
    w = Dimensions.get('window').width;
    h = Dimensions.get('window').height;


    W = (d) => this.w * d / 100;
    H = (d) => this.h * d / 100;


    and = Platform.OS === 'android';
    ios = Platform.OS === 'ios';



    set = (k, v) => this[k] = v;
}


decorate(
    tlfnH,
    {
        w: observable,
        h: observable,

        W: action,
        H: action,


        and: observable,
        ios: observable,

        set: action
    }
);


export default new tlfnH();
