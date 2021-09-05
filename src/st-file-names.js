import { NotImplementedError } from '../extensions/index.js';

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
 export default function renameFiles(names) {
  const array = [];
  const objects = {};
  for (let i = 0; i < names.length; i++) {
    if (array.indexOf(names[i]) === -1) {
      array.push(names[i]);
    } else {
      if (objects[names[i]] === undefined) objects[names[i]] = 1;
      else objects[names[i]] += 1;
      array.push(`${names[i]}(${objects[names[i]]})`);
    }
  }
  return array;
}
