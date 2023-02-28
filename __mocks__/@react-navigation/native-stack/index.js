export const useNavigation = () => ({
  navigate: () => null,
  push: () => null,
  goBack: () => null,
  setOptions: () => null,
  addListener: () => jest.fn(),
  replace: () => jest.fn(),
});

export const useRoute = () => ({
  params: {},
});

export const useFocusEffect = jest.fn();
export const createNavigatorFactory = () => null;
export const createNativeStackNavigator = () => {
  return {
    Navigator: () => null,
    Screen: () => null,
  };
};
