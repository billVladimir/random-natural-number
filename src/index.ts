import * as Chance from 'chance';
import * as crypto from 'crypto';

const chance = new Chance();

export const rnn = (from: number = 1, to: number): number => {
  const randStr1 = chance.string({ length: 20 });
  const randHash = chance.hash({ length: 32 });
  const randUid = crypto.randomUUID();
  return getRandomNumber(from, to, randStr1, randHash, randUid);
};

/**
 * Convert seeds to decimal number
 *
 * @param  {...string} params Public seed and client seed/seeds
 * @returns Number
 */
const hexToDecimal = (...params: any[]) => {
  const hash = crypto.createHash('sha512').update(params.join('')).digest('hex');
  return parseInt(hash.substr(0, 13), 16);
};

/**
 * Get decimal mod max + min
 *
 * @param {number} min Min number
 * @param {number} max Max number
 * @param  {...string} params Public seed and client seed/seeds
 * @returns
 */
const getRandomNumber = (min: number, max: number, ...params: any[]) => {
  const decimal = hexToDecimal(...params);
  const randomNum = (decimal % (max - min + 1)) + min;
  return randomNum;
};
