import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import { RootStackParamList } from '../../navigate/Navigate';
import { globalStyle } from '../../styles/globalStyle';
import {useNavigation} from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type StackNavigationProps = NativeStackScreenProps<RootStackParamList, 'Main'>;

export default function Main() {
    const navigation = useNavigation<StackNavigationProps>();    
    const [news, setNews] = useState([
        { name: 'React', anons: 'Native', full: 'JS is cool !!!' },
        { name: 'EF Core 7', anons: '.Net', full: '#C is cool !!!' },
        { name: 'Laravel', anons: 'Blade', full: 'PHP is cool !!!' },
    ])

    return (
        <SafeAreaView style={globalStyle.main}>
            <Text style={globalStyle.title}>Home page</Text>
            <FlatList
                data={news}
                renderItem={({ item }) => (
                <TouchableOpacity onPress={()=> navigation.navigate('Content', item)}>  
                    <Text>{item.name}</Text>
                    <Text>{item.anons}</Text>
                </TouchableOpacity>)}                            
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

});