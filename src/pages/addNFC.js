import React, { Component } from 'react';
import { View, Text } from 'react-native';

class AddNFCScreen extends Component {
    render(){
        return(
            <View>
                <Text>Conteúdo: {this.props.navigation.state.params.data}</Text>
            </View>
        );
    }
}

export default AddNFCScreen;