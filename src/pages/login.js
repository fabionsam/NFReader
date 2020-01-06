import React, { Component } from "react";
import {Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView} from 'react-native';
import { Button } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

class LoginScreen extends Component {
    constructor(props){
        super(props);

        this.state = { 
            username: "",
            password: ""
        };
    }

    onLoginPress() {
        if (this.state.password == "1234") {
            this.props.navigation.navigate('Home');
        }
    }

    render(){
        return(
            <KeyboardAvoidingView style={styles.containerView} behavior="padding">

            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View style={styles.loginScreenContainer}>
                <View style={styles.loginFormView}>
                    <Text style={styles.logoText}>NFCReader</Text>
                    <TextInput 
                        id="inputUsername" 
                        value={this.state.username} 
                        placeholder="Usuário" 
                        placeholderColor="#c4c3cb" 
                        style={styles.loginFormTextInput} 
                        onChangeText={(text) => this.setState({ "username": text })}
                    />
                    <TextInput 
                        id="inputPassword" 
                        value={this.state.password} 
                        placeholder="Senha" 
                        placeholderColor="#c4c3cb" 
                        style={styles.loginFormTextInput} 
                        secureTextEntry={true}
                        onChangeText={(text) => this.setState({ "password": text })}
                    />
                    <Button
                        buttonStyle={styles.loginButton}
                        onPress={() => this.onLoginPress()}
                        title="Login"
                    />
                </View>
              </View>
            </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        );
    }
}

const styles = {
    containerView: {
    },
    loginScreenContainer: {
    },
    logoText: {
        fontSize: 40,
        fontWeight: "800",
        marginTop: "50%",
        marginBottom: 30,
        textAlign: 'center',
    },
    loginFormView: {
        alignItems: "center"
    },
    loginFormTextInput: {
        height: 43,
        fontSize: 14,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#eaeaea',
        backgroundColor: '#fafafa',
        paddingLeft: 10,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 5,
        marginBottom: 5,
        width: "70%"
    },
    loginButton: {
        backgroundColor: '#3897f1',
        borderRadius: 5,
        height: 45,
        marginTop: 10,
        width: 100
    }
};
  
export default createAppContainer(LoginScreen);