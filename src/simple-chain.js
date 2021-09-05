import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  chain: [],
  getLength() {
    return this.chain.length;
    // remove line with error and write your code here
  },
  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this;    // remove line with error and write your code here
  },
  removeLink(position) {
    if (typeof position !== 'number' || position > this.chain.length || position <= 0) {
      this.chain = [];
      throw new Error(`You can't remove incorrect link!`);
    }
    this.chain.splice(position - 1, 1);
    return this;
  },

  finishChain() {
    const chainString = this.chain.join('~~');
    this.chain = [];
    return chainString;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  }
};
