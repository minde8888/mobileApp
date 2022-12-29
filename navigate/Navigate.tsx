import React from "react";
import Main from "../components/main/Main";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Content from "../components/content/Content";

export type RootStackParamList = {
    Main: undefined;
    Content: {
        name: string;
        anons: string;
        full: string;
        img: string;
    };
    Contacts: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function Navigate() {
    return <NavigationContainer>
        <RootStack.Navigator>
            <RootStack.Screen
                name="Main"
                component={Main}
                options={{
                    title: 'Home',
                    headerStyle: { backgroundColor: '#eb5d3d' },
                    headerTitleStyle: { fontSize: 30 },
                    headerTitleAlign:'center'
                }}
            />
            <RootStack.Screen
                name="Content"
                component={Content}
                options={{ title: 'Content' }}
            />
        </RootStack.Navigator>
    </NavigationContainer>
}