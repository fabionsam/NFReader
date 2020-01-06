import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

class SettingsScreen extends Component {
    render(){
        return(
            <View>
                <Text>Página de configurações</Text>
            </View>
        );
    }
}

const SettingsStack = createStackNavigator({
    SettingsScreen
});
export default createAppContainer(SettingsStack);