import React from 'react';
import { Platform } from "react-native";
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeStack from './pages/home';
import SettingsStack from './pages/settings';
import ScanNFCStack from './pages/scanNFC';
import AddNFCStack from './pages/addNFC';
import LoginScreen from './pages/login';

const tabNavigator = createBottomTabNavigator({
    "Inicio": HomeStack,
    "Escanear": ScanNFCStack,
    "Configurações": SettingsStack
}, {
    defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
            const { routeName } = navigation.state;
            let IconComponent = Ionicons;
            let iconName;
            if (routeName === 'Inicio') {
                iconName = Platform.OS === "ios" ? 'ios-stats' : 'md-stats';
            } else if (routeName === 'Configurações') {
                iconName = Platform.OS === "ios" ? 'ios-settings' : 'md-settings';
            } else {
                iconName = Platform.OS === "ios" ? 'ios-camera' : 'md-camera';
            }
  
          return <IconComponent name={iconName} size={25} color={tintColor} />;
        },
      }),
      tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
    },
});
tabNavigator.path = '';

const AppNavigator = createStackNavigator({
    Login: {
        screen: LoginScreen,
        navigationOptions: { header: null }
    },
    Home: {
        screen: tabNavigator,
        navigationOptions: { header: null }
    },
});

export default createAppContainer(AppNavigator);