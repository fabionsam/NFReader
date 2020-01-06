import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

class HomeScreen extends Component {
    render(){
        return(
            <View>
                <Text>Página main</Text>
            </View>
        );
    }
}

const HomeStack = createStackNavigator({
    HomeScreen
});
export default createAppContainer(HomeStack);