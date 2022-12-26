import React from "react";
import Main from "../components/main/Main";
import Contacts from "../components/contacts/Contacts";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Content from "../components/content/Content";

export type RootStackParamList = {
    Main: undefined;
    Content: {
        name: string;
        anons: string;
        full: string;
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
                options={{ title: 'Home' }}
            />
            <RootStack.Screen
                name="Content"
                component={Content}
                options={{ title: 'Content' }}
            />
            <RootStack.Screen
                name="Contacts"
                component={Contacts}
                options={{ title: 'Contacts' }}
            />
        </RootStack.Navigator>
    </NavigationContainer>
}