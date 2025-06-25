import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserList from '../Screens/UserList';
import UserDetailsScreen from '../Screens/UserDetailsScreen'

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    return (
        // Setting Navigators 
        <Stack.Navigator initialRouteName='Users'>
            <Stack.Screen name="Users" component={UserList} />
            <Stack.Screen name="UserDetails" component={UserDetailsScreen} />
        </Stack.Navigator>

    )
}