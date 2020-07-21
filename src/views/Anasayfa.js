import React from 'react';
import { View, Text, StatusBar, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { observer } from 'mobx-react';
import { View as ViewA } from 'react-native-animatable';
import AntDesign from 'react-native-vector-icons/AntDesign';

import C from '../controllers/AnasayfaC';

import Resim from './Components/Resim';

import tlfnH from '../helper/tlfnH';

import { anasayfaS as S } from './stil';
import temaH from '../helper/temaH';
import Splash from './Splash';

//const Abc = observer(FlatList);

class Anasayfa extends React.Component {
    componentDidMount = C.cDMount;
    componentDidUpdate = C.cDUpdate;
    componentWillUnmount = C.cWUnmount;


    ustBolge() {
        return (
            <View
                style={[
                    S.ustBolgeK,
                    { display: C.splashAktif ? 'none' : 'flex' }
                ]}
            >
                <Text style={S.bilgiY}>Lorem ipsum dolar sit</Text>
                <Text style={S.bilgiY}>Lorem ipsum</Text>
                <Text style={S.bilgiY}>Lorem ipsum dolar sit amet</Text>
            </View>
        );
    }

    notlar() {
        const notlar = [ //SUNUCUDAN GELECEK
            {
                aciklama: 'Irure dolore voluptate voluptate dolor amet anim aliquip fugiat est Lorem in aliqua dolor.sdfsdfsdf',
                gorseller: ['https://fujifilm-x.com/wp-content/uploads/2019/08/x-t3_sample-images02.jpg'],
                renk: 'r3'
            },
            {
                aciklama: 'Irure dolore voluptate voluptate dolor amet anim aliquip fugiat est Lorem in aliqua dolor.',
                gorseller: [
                    'https://fujifilm-x.com/wp-content/uploads/2019/08/x-t3_sample-images02.jpg',
                    'https://fujifilm-x.com/wp-content/uploads/2019/08/x-t3_sample-images02.jpg',
                    'https://fujifilm-x.com/wp-content/uploads/2019/08/x-t3_sample-images02.jpg',
                    'https://fujifilm-x.com/wp-content/uploads/2019/08/x-t3_sample-images02.jpg',
                ],
                renk: 'r2'
            },
            {
                aciklama: 'Irure dolore voluptate voluptate dolor amet anim aliquip fugiat est Lorem in aliqua dolor.',
                renk: 'r8'
            },
            {
                aciklama: 'Irure dolore voluptate voluptate dolor amet anim aliquip fugiat est Lorem in aliqua dolor.',
                renk: 'r7'
            },
            {
                aciklama: 'Irure dolore voluptate voluptate dolor amet anim aliquip fugiat est Lorem in aliqua dolor.',
                renk: 'r5'
            },
            {
                aciklama: 'Irure dolore voluptate voluptate dolor amet anim aliquip fugiat est Lorem in aliqua dolor.',
                renk: 'r6'
            },
            {
                aciklama: 'Irure dolore voluptate voluptate dolor amet anim aliquip fugiat est Lorem in aliqua dolor.',
                renk: 'r4'
            },
            {
                aciklama: 'Irure dolore voluptate voluptate dolor amet anim aliquip fugiat est Lorem in aliqua dolor.',
                renk: 'r1'
            }
        ];


        return (
            <View style={S.notlarK}>
                <FlatList
                    data={notlar}
                    extraData={notlar}
                    renderItem={d => this.not(d.item, d.index)}
                //initialNumToRender={30}
                //keyExtractor={(d, i) => (i.toString())}
                //initialScrollIndex={5}
                //ItemSeparatorComponent={() => <View style={{ backgroundColor: 'black', width: '75%', height: 2, alignSelf: 'center' }} />}
                />


                {/*
                    <ScrollView>
                        {
                            notlar.map((d, i) => this.not(d, i))
                        }
                    </ScrollView>
                */}


                {/*
                {this.not(notlar[0], 0)}
                {this.not(notlar[1], 1)}
                {this.not(notlar[2], 2)}
                {this.not(notlar[3], 3)}
                {this.not(notlar[4], 4)}
                {this.not(notlar[5], 5)}
                {this.not(notlar[6], 6)}
                {this.not(notlar[7], 7)}
                */}
            </View>
        );
    }
    not(d, i) {
        const tekResim = d.gorseller && d.gorseller.length === 1;

        return (
            <ViewA
                //animation={'bounceInRight'}
                //delay={250}
                //key={i}
                style={[S.notK, { backgroundColor: temaH.notRenkleri[d.renk] }]}
            >
                <View style={S.AK}>
                    <Resim
                        style={S.notResim}
                        source={{ uri: 'https://fujifilm-x.com/wp-content/uploads/2019/08/x-t3_sample-images02.jpg' }}
                    />

                    <Text style={S.notAciklamaY}>{d.aciklama}</Text>
                </View>
                {this.notButonlar(d, i)}
            </ViewA >
        );
    }

    notButonlar(d, i) {
        return (
            <View style={[S.notButonlarK, { backgroundColor: temaH.notRenkleri[d.renk] }]}>
                <TouchableOpacity style={S.notIkon} onPress={() => alert('test')} activeOpacity={0.2}>
                    <AntDesign name={'delete'} color={temaH.renkler.r2} size={tlfnH.W(5.5)} />
                </TouchableOpacity>
                <TouchableOpacity style={S.notIkon}>
                    <AntDesign name={'delete'} color={temaH.renkler.r2} size={tlfnH.W(5.5)} />
                </TouchableOpacity>
                <TouchableOpacity style={S.notIkon}>
                    <AntDesign name={'delete'} color={temaH.renkler.r2} size={tlfnH.W(5.5)} />
                </TouchableOpacity>
                <TouchableOpacity style={S.notIkon}>
                    <AntDesign name={'delete'} color={temaH.renkler.r2} size={tlfnH.W(5.5)} />
                </TouchableOpacity>
            </View>
        );
    }


    render() {
        return (
            <View style={[S.K, C.splashAktif && S.K2]}>
                <StatusBar
                    backgroundColor={C.splashAktif ? 'transparent' : temaH.renkler.r1}
                    barStyle={'dark-content'}
                />

                {this.ustBolge()}

                {!C.splashAktif && this.notlar()}

                <Splash />
            </View>
        );
    }
}

export default observer(Anasayfa);