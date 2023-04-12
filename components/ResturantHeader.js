import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon ,withBadge } from 'react-native-elements';
import { Colors, parameters } from '../global/styles';
const ResturantHeader = ({ navigation }) => {
  //icon cart connected with firebase
  const BadgeIcon = withBadge(0)(Icon);
  return (
    <View style={styles.header}>
      <View style={styles.bar}>
        <Icon
          type='material-community'
          name='menu'
          color={Colors.cardbackground}
          size={32}
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.text}>EAT IT APP</Text>
      </View>
      <View style={styles.content}>
        <BadgeIcon
          type='material-community'
          name='cart'
          color={Colors.cardbackground}
          size={32}
        />
      </View>
    </View>
  );
};
export default ResturantHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: Colors.buttons,
    height: parameters.headerHeight,
    justifyContent: 'space-between',
  },
  bar: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 35,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  text: {
    color: Colors.cardbackground,
    fontSize: 24,
    fontWeight: 'bold',
  },
});
