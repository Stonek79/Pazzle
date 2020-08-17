import pazzle from '../index.js';
import {
  branch1, branch2, branch3, result,
} from '../__fixtures__/branches.js';

test('pazzle', () => {
  expect(pazzle(branch1, branch2, branch3)).toStrictEqual(result);
});
