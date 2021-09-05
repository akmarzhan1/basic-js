import { NotImplementedError } from '../extensions/index.js';

const MODERN_ACTIVITY = 15;
const LN2 = 0.693;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */

export default function dateSample(sampleActivity) {
  
  if (isNaN(sampleActivity) || typeof sampleActivity != 'string') return false;
  
  let activity = parseFloat(sampleActivity);
  if (isNaN(activity)) return false;
  if (activity > MODERN_ACTIVITY || activity <= 0) return false;

  return Math.ceil(
    Math.log(MODERN_ACTIVITY / activity) / (LN2 / HALF_LIFE_PERIOD),
  );

  // remove line with error and write your code here
}
