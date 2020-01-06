import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

class LoginScreen extends Component {
    render(){
        return(
            <View>
                <Text>Login</Text>
            </View>
        );
    }
}

const LoginStack = createStackNavigator({
    LoginScreen
});
export default createAppContainer(LoginStack);