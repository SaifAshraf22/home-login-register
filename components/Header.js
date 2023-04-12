//login screen and the user registration scheme
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import { Colors, parameters } from '../global/styles';

const Header = ({ navigation }) => {
  return <View style={styles.header}></View>;
};

export default Header;

const styles = StyleSheet.create({
  header: {
    
    flexDirection: 'row',
    backgroundColor: Colors.buttons,
    height: parameters.headerHeight,
  },
});
