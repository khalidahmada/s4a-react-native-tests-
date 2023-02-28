import React, { FC } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import styles from './App.styles';

type Props = {
  testID?: string;
};

export const App: FC<Props> = ({ testID = 'App' }) => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container} testID={testID}>
        <Text testID="tempTitle">Replace me with navigation screens</Text>
      </SafeAreaView>
    </NavigationContainer>
  );
};
