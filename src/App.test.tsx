import React from 'react';
import ReactTestRenderer from 'react-test-renderer';

import { App } from './App';
import { ArrowRightIcon, CardIcon, CustomerIcon } from './components';
import { $color } from './layout';

jest.mock('@react-navigation/native', () => ({
  NavigationContainer: ({ children }: { children: React.ReactNode }) => children,
}));

describe('App', () => {
  it('renders correctly', async () => {
    let renderer: ReactTestRenderer.ReactTestRenderer;

    await ReactTestRenderer.act(() => {
      renderer = ReactTestRenderer.create(<App />);
    });

    const root = renderer!.root;

    expect(root.findByProps({ testID: 'App' })).toBeTruthy();
    expect(root.findByProps({ testID: 'tempTitle' }).props.children).toEqual('Replace me with navigation screens');

    expect(root.findAllByType(CardIcon)[0].props.color).toEqual($color.red);

    expect(root.findAllByType(CardIcon)[1].props.color).toEqual($color.black);

    expect(root.findAllByType(CardIcon)[2].props.color).toEqual($color.gold);

    expect(root.findAllByType(CustomerIcon)).toHaveLength(1);

    expect(root.findAllByType(ArrowRightIcon)).toHaveLength(1);
  });
});
