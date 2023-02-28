import React, { FC } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import styles from './App.styles';

type Props = {};

export const App: FC<Props> = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Text>Replace me with navigation screens</Text>
      </SafeAreaView>
    </NavigationContainer>
  );
};
