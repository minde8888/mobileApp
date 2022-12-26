import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import { RootStackParamList } from '../../navigate/Navigate';
import { globalStyle } from '../../styles/globalStyle';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type StackNavigationProps = NativeStackScreenProps<RootStackParamList, 'Contacts'>;

export default function Contacts() {

  
    // const loadScene = () => {
    //     navigation.goBack();
    // }
    //            <Button title='Open page' onPress={loadScene}/>
    return (
        <View style={globalStyle.main}>
            <Text style={globalStyle.title}>Contact page</Text>
        </View>
    )
}

const styles = StyleSheet.create({

});