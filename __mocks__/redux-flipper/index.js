// return empty middleware redux function
const createDebugger = () => () => () => jest.fn();

export default createDebugger;
