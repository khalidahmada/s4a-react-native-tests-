import { $color } from './colors';

describe('colors', () => {
  it('should export $color', () => {
    expect($color).toBeDefined();
  });

  it('should export $color.primary', () => {
    expect($color.primary).toBeDefined();
  });

  it('should export $color.secondary', () => {
    expect($color.secondary).toBeDefined();
  });

  it('should export $color.gold', () => {
    expect($color.gold).toBeDefined();
  });

  it('should export $color.black', () => {
    expect($color.black).toBeDefined();
  });

  it('should export $color.while', () => {
    expect($color.while).toBeDefined();
  });

  it('should export $color.red', () => {
    expect($color.red).toBeDefined();
  });

  it('should export $color.blue', () => {
    expect($color.blue).toBeDefined();
  });
});
