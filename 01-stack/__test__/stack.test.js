const Stack = require('../stack');

describe('stack', () => {
  let testStack;
  let testValues;

  beforeEach(() => {
    testStack = new Stack();
    testValues = [1, 2, 3, 4, 5];
  });

  test('should not clear stack if a new one is initialized', () => {
    testValues.forEach(val => testStack.push(val));
    const newStack = new Stack();
    newStack.push(1);

    expect(testStack.size()).toEqual(testValues.length);
    expect(newStack.size()).toEqual(1);
  });

  describe('#peek', () => {
    test('should return the last value added and not modify the stack', () => {
      testValues.map(testStack.push);

      expect(testStack.peek()).toEqual(testValues.length);
    });

    test('should return undefined if there is nothing in the stack', () => {
      expect(testStack.peek()).toBeUndefined();
    });
  });

  describe('#pop', () => {
    test('should return the last value added and remove it from the stack', () => {
      testValues.map(testStack.push);

      testValues.reverse().forEach(val => expect(testStack.pop()).toEqual(val));
    });

    test('should return undefined, if there are no values on the stack', () => {
      expect(testStack.pop()).toBeUndefined();
    });
  });

  describe('#push and #size', () => {
    test('should increase the size of the stack for each element added', () => {
      testValues.forEach((val, idx) => {
        testStack.push(val);
        expect(testStack.size()).toEqual(idx + 1);
      });
    });
  });
});
