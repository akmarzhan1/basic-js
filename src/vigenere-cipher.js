import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {
  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }


    const mess = message.toUpperCase();
    const ke = key.toUpperCase();
    const divider = 26;
    const shift = 65;

    let keyIndex = 0;
    let messIndex = 0;
    let result = '';

    while (messIndex < mess.length) {
      if (mess[messIndex].match(/[A-Z]/)) {
        result += String.fromCharCode(
          ((mess.charCodeAt(messIndex) -
            shift +
            ke.charCodeAt(keyIndex) -
            shift) %
            divider) +
          shift,
        );

        keyIndex++;

        if (keyIndex === ke.length) {
          keyIndex = 0;
        }
      } else {
        result += mess[messIndex];
      }
      messIndex++;
    }

    return this.direct
      ? result
      : result
        .split('')
        .reverse()
        .join('');
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }

    const mess = encryptedMessage.toUpperCase();
    const ke = key.toUpperCase();
    const shift = 65;
    const divider = 26;

    let messIndex = 0;
    let keyIndex = 0;
    let result = '';

    while (messIndex < mess.length) {
      if (mess[messIndex].match(/[A-Z]/)) {
        result += String.fromCharCode(
          ((mess.charCodeAt(messIndex) +
            divider -
            ke.charCodeAt(keyIndex)) %
            divider) +
          shift,
        );

        keyIndex++;

        if (keyIndex === ke.length) {
          keyIndex = 0;
        }
      } else {
        result += mess[messIndex];
      }
      messIndex++;
    }

    return this.direct
      ? result
      : result
        .split('')
        .reverse()
        .join('');
  }
}
