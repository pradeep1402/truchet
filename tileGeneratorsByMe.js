import { leftRight, topBottom, } from './tileGenerators.js';

export const symmetry = (pattern, inversePattern) => {
  const tg1 = leftRight(pattern, pattern);
  const tg2 = leftRight(inversePattern, inversePattern);
  return topBottom(tg1, tg2);
};