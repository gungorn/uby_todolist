import { observable, action, decorate } from 'mobx';
import fbH from '../helper/fbH';

import anasayfaC from '../controllers/anasayfa/anasayfaC'

class notM {
    ekleNot = async () => {
        const { baslik, notIcerik } = anasayfaC;
        const notVeri = { baslik, notIcerik };

        try {
            const sonuc = await fbH.ekleNot(notVeri);

            return { sonuc: true };
        }
        catch (e) { return { sonuc: false, hata: e }; }
    }
}

decorate(
    notM,
    {
        ekleNot: action,
    }
);

export default new notM();