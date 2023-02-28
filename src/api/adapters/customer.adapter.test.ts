import { temp } from './customer.adapter';

describe('Customer Adapter', () => {
  it('should be a function', () => {
    expect(typeof temp).toBe('function');
  });

  it('should return an object', () => {
    expect(temp()).toEqual({
      name: 'temp',
    });
  });
});
