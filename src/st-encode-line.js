import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 export default function encodeLine(str) {
  let res = '';
  let sum = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      sum += 1;
    } else {
      if (sum > 1) {
        res += sum + str[i];
      } else {
        res += str[i];
      }
      sum = 1;
    }
  }
  return res;
}