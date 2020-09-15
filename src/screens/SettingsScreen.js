/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const SettingsScreen = (props) => {
  return (
    <>
      <View style={styles.root}>
        <Text>SETTINGS</Text>
      </View>
    </>
  );
};

export default SettingsScreen;
const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
});
