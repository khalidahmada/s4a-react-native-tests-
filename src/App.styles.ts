import { StyleSheet } from 'react-native';
import { $color } from './layout';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: $color.secondary,
  },
  text: {
    color: $color.primary,
  },
});
