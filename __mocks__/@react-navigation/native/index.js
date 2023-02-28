export const useNavigation = () => ({
  navigate: () => null,
  push: () => null,
  goBack: () => null,
  setOptions: () => null,
  addListener: () => jest.fn(),
  replace: () => jest.fn(),
  NavigationContainer:
    () =>
    ({ children }) =>
      children,
});

export const useRoute = () => ({
  params: {},
});

export const useFocusEffect = jest.fn();
export const createNavigatorFactory = () => null;
export const createNativeStackNavigator = () => null;
