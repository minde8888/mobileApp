import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { RootStackParamList } from '../../navigate/Navigate';
import { globalStyle } from '../../styles/globalStyle';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type StackNavigationProps = NativeStackScreenProps<RootStackParamList, 'Content'>;

export default function Content({ route }: StackNavigationProps) {

    return (
        <View style={globalStyle.main}>
            <Image source={{ uri: route.params.img }}
                style={styles.image} />
            <Text style={globalStyle.title}>{route.params.name}</Text>
            <Text style={styles.full}>{route.params.full}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    full: {
        fontFamily: 'mt-medium',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 20,
        color: '#f55151'
    },
    image: {
        width: "100%",
        height: 400
    }
});