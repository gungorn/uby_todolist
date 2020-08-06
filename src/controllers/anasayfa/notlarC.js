import { observable, action, decorate } from 'mobx';
import { LayoutAnimation } from 'react-native';
import ImagePicker from 'react-native-image-picker';

class notlarC {
    cDMount = () => { }
    cDUpdate = () => { LayoutAnimation.easeInEaseOut(); }
    cWUnmount = () => { }



    notButonlarAcik = -1; //butonların aktif olduüu notun indeksi (diğer indeksli notlar butonlar pasif)
    setNotButonlarAcik = i => {
        this.notButonlarAcik = this.notButonlarAcik === i ? -1 : i;
    }


    ImagePicker = async () => {
        const options = {
            title: 'Bir görsel seçin...',
            cancelButtonTitle: 'İptal',
            takePhotoButtonTitle: 'Bir fotoğraf çek',
            chooseFromLibraryButtonTitle: 'Galeriden seç',
            chooseWhichLibraryTitle: 'Galeriden seç',
            mediaType: 'photo',
            storageOptions: { skipBackup: true, path: 'images' },

        };

        ImagePicker.showImagePicker(
            options,
            async res => {
                console.log('Response = ', res);

                if (res.didCancel) { console.log('User cancelled image picker'); }
                else if (res.error) { console.log('ImagePicker Error: ', res.error); }
                else if (res.customButton) { console.log('User tapped custom button: '); }
                else {
                    const uri = res.uri;
                }
            }
        );
    }


    set = (k, v) => this[k] = v;
}

decorate(
    notlarC,
    {
        cDMount: action,
        cDUpdate: action,
        cWUnmount: action,

        notButonlarAcik: observable,
        setNotButonlarAcik: action,


        ImagePicker: action,


        set: action,
    }
);


export default new notlarC();