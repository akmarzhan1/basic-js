import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
//  */

export default function countCats(matrix) {
  // remove line with error and write your code here
  let number = 0;
  matrix.map(row =>{
    number += row.filter(value => value == '^^').length;
  });
  return number;
}
