import React, { FC } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import styles from './App.styles';
import { $color } from './layout';
import { ArrowRightIcon, CardIcon, CustomerIcon } from './components';

type Props = {
  testID?: string;
};

export const App: FC<Props> = ({ testID = 'App' }) => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container} testID={testID}>
        <Text testID="tempTitle">Replace me with navigation screens</Text>
        <View testID="icons">
          <CardIcon color={$color.red} />
          <CardIcon color={$color.black} />
          <CardIcon color={$color.gold} />
          <CustomerIcon />
          <ArrowRightIcon />
        </View>
      </SafeAreaView>
    </NavigationContainer>
  );
};
