import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  if (!(arr instanceof Array)) throw new Error(`'arr' parameter must be an instance of the Array!`)
  let transformArray = [];
  let arr1 = [...arr];

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] == '--discard-next') { // исключает следующий элемент массива
      arr1[i + 1] = '--false';
    } else if (arr1[i] == '--discard-prev') { // исключает предыдущий элемент из массива
      if (arr1[i - 1] != '--false' && arr1[i - 1] !== undefined) transformArray.pop();
    } else if (arr1[i] == '--double-next') { //удваивает следующий элемент
      if (arr1[i + 1] != undefined) transformArray.push(arr1[i + 1]);
    } else if (arr1[i] == '--double-prev') { //удваивает предыдущий элемент
      if (arr1[i - 1] != undefined && arr1[i - 1] != '--false') transformArray.push(arr1[i - 1]);
    } else {
      if (arr1[i] != '--false') transformArray.push(arr1[i]);
    }
  }
  return transformArray;// remove line with error and write your code here
}
