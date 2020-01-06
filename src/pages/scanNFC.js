import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions
} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, withNavigationFocus } from 'react-navigation';
import QRCodeScanner from 'react-native-qrcode-scanner';
import AddNFCScreen from './addNFC'

class ScanNFCComponent extends Component {
  constructor(props){
    super(props)
  }
    
  render() {
    const { isFocused } = this.props
    if (isFocused){
      return (
        <>
          <StatusBar barStyle="dark-content" />
          <SafeAreaView>
            <ScrollView contentInsetAdjustmentBehavior="automatic">
              <QRCodeScanner
                //ref={(node) => { this.scanner = node }}
                onRead={(e) => { return this.props.navigation.navigate("Adicionar", { data: e.data }); }}
                showMarker={true}
                checkAndroid6Permissions={true}
                cameraStyle={styles.cameraContainer}
              />
              
            </ScrollView>
          </SafeAreaView>
        </>
      );
    } else {
      return <View />;
    }
  }
}

const styles = StyleSheet.create({  
  cameraContainer: {
    height: Dimensions.get('window').height,
  }
  
});

const ScanNFCScreen = withNavigationFocus(ScanNFCComponent);
const ScanNFCStack = createStackNavigator({
  ScanNFCScreen: { screen: ScanNFCScreen },
  "Adicionar": AddNFCScreen
});
export default createAppContainer(ScanNFCStack);