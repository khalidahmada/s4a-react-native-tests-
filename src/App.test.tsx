import React from 'react';
import render from 'react-test-renderer';

import { App } from './App';

jest.mock('@react-navigation/native', () => ({
  NavigationContainer: ({ children }: { children: React.ReactNode }) => children,
}));

describe('App', () => {
  it('renders correctly', () => {
    const { root } = render.create(<App />);

    expect(root.findByProps({ testID: 'App' })).toBeTruthy();
    expect(root.findByProps({ testID: 'tempTitle' }).props.children).toEqual('Replace me with navigation screens');
  });
});
