import { leftRight, topBottom, } from './tileGenerators.js';

export const commbinedPatterns = (pattern, inversePattern) => {
  const tg1 = leftRight(pattern, pattern);
  const tg2 = leftRight(inversePattern, inversePattern);
  return topBottom(tg1, tg2);
};

export const mirrorRight = (pattern) => {
  const lines = pattern.split("\n");
  const mirroredPattern = [];

  for (const line of lines) {
    const newLine = line + " " + line.split("").reverse().join("");
    mirroredPattern.push(newLine);
  }

  return mirroredPattern.join("\n");
};

export const mirrorDown = (pattern) => {
  const lines = pattern.split("\n");

  return pattern + "\n" + lines.reverse().join("\n");
};

export const mirror = (pattern) => {
  const xAxisMirror = mirrorRight(pattern);
  const yAxisMirror = mirrorDown(pattern);
  const zAxisMirror = mirrorRight(yAxisMirror);

  return xAxisMirror + "\n" + zAxisMirror;
};