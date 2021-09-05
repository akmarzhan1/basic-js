import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  const strin = String(str);
  if (options.separator === undefined) {
    options.separator = '+';
  }

  if (options.additionSeparator === undefined) {
    options.additionSeparator = '|';
  }

  if (options.repeatTimes === undefined) {
    options.repeatTimes = 1;
  }

  if (options.addition === undefined) {
    options.addition = '';
  }

  if (options.additionRepeatTimes === undefined) {
    options.additionRepeatTimes = 1;
  }

  options.addition = String(options.addition);
  let overall = '';
  for (let i = 0; i < options.repeatTimes; i++) {
    overall += strin;
    for (let j = 0; j < options.additionRepeatTimes - 1; j++) {
      overall += options.addition + options.additionSeparator;
    }
    overall += options.addition
    overall += options.separator;
  }
  return overall.slice(0, -options.separator.length);  // remove line with error and write your code here
}
