import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The object should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 export default function getDNSStats(domains) {
  const object = {};
    
  for (let i = 0; i < domains.length; i++) {
    const dom = domains[i].split('.').reverse();
    let res = '';
    for (let j = 0; j < dom.length; j++) {
      res += `.${dom[j]}`;
      if (object[res] === undefined) {
        object[res] = 1;
      } else {
        object[res] += 1;
      }
    }
  }
return object;
}