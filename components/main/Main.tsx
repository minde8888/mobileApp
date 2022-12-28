import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, FlatList, TouchableOpacity, Image } from 'react-native';
import { RootStackParamList } from '../../navigate/Navigate';
import { globalStyle } from '../../styles/globalStyle';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type StackNavigationProps = NativeStackScreenProps<RootStackParamList, 'Main'>;

export default function Main({ navigation }: StackNavigationProps) {
    const [news, setNews] = useState([
        { name: 'React', anons: 'Native', full: 'JS is cool !!!', img: 'https://newsroom.unsw.edu.au/sites/default/files/styles/full_width__2x/public/thumbnails/image/200812_facepareidolia_house_2.jpg?itok=7lf2bzTS' },
        { name: 'EF Core 7', anons: '.Net', full: '#C is cool !!!', img: 'https://th-thumbnailer.cdn-si-edu.com/SSSs1k2OH3JYLi4JeCGLzz7khKk=/800x0/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/Australopithecus-afarensis-1.jpg' },
        { name: 'Laravel', anons: 'Blade', full: 'PHP is cool !!!', img: 'https://mediaproxy.salon.com/width/1200/https://media.salon.com/2022/03/face-on-mars-0317221.jpg' },
    ])

    return (
        <SafeAreaView style={globalStyle.main}>
            <Text style={[globalStyle.title, styles.header]}>Home page</Text>
            <FlatList
                data={news}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Content', item)}>
                        <Image source={{ uri: item.img }}
                            style={{ width: 400, height: 400 }} />
                        <Text style={styles.title}>{item.name}</Text>
                        <Text style={styles.anons}>{item.anons}</Text>
                    </TouchableOpacity>)}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        marginBottom: 30,
    },
    item: {
        width: '100%',
        marginBottom: 30,
    },
    title: {
        fontFamily: 'mt-bold',
        fontSize: 22,
        textAlign: 'center',
        marginTop:20,
        color: '#474747'
    },
    anons:{
        fontFamily: 'mt-medium',
        fontSize: 16,
        textAlign: 'center',
        marginTop:5,
        color: '#474747'
    }
});