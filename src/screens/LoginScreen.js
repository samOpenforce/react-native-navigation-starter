/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {Navigation} from 'react-native-navigation';
const LoginScreen = (props) => {
  return (
    <>
      <View style={styles.root}>
        <Button
          title="Login"
          color="#710ce3"
          //fails as cannot see mainroot. Write Navigation service?
          onPress={() => Navigation.setRoot(mainRoot)}
        />
      </View>
    </>
  );
};

export default LoginScreen;

//for login
const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke',
  },
});
