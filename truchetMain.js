import { generateTiles } from './truchet.js';
import {
  classicAlternate,
  classicSquare,
  halfAndHalf,
  halfAndHalfInverse,
  zag,
  zig,
  glitch,
  leftRight,
  topBottom,
  quarterLand,
  wild,
  inverseQuarterLand,
  max,
  min,
  constantly,
  classicTruchet,
  rowHalfAndHalf,
  rowHalfAndHalfInverse,
} from './tileGenerators.js';
import { commbinedPatterns, mirror, mirrorDown, mirrorRight } from './tileGeneratorsByMe.js';

// Vary this. Try any or all of the above
// Also try each algorithm with a variety of widths and heights
// For example: const tileGenerator = halfAndHalf;

// leftRight distributes patterns between the left and right halves
// topBottom distributes patterns between the top and bottom halves
// They can be combined in any order. Try variations.
const tg1 = leftRight(zig, zag);
const tg2 = topBottom(zig, zag);
const tg3 = topBottom(leftRight(zig, zag), leftRight(zag, zig));

// Play with the "config" parameter(second parameter)
// The tiles will arrange according to the algorithm chosen(classicAlternate)
// But they are also influenced by your configuration
const tg4 = wild(classicAlternate, [1, 0, 1]);
const tg5 = wild(classicAlternate, [0, 1, 0]);
const tg6 = wild(classicSquare, [1, 1, 0, 0]);

// The second parameter controls the "glitchiness"
// The values are between 0 and 1, 0 being no glitch and 1 being all glitchy
const tg7 = glitch(classicSquare, 0.05);

// Try combining glitching, wild and topBottom/leftRight in various combinations

const [width, height] = Deno.args.map(x => +x);

// console.log(generateTiles(width, height, tg1));
// console.log(generateTiles(width, height, tg2));
// console.log(generateTiles(width, height, tg3));
// console.log(generateTiles(width, height, tg4));
// console.log(generateTiles(width, height, tg5));
// console.log(generateTiles(width, height, tg6));
// console.log(generateTiles(width, height, tg7));
// console.log(generateTiles(width, height, halfAndHalf));
// console.log(generateTiles(width, height, halfAndHalfInverse));
// console.log(generateTiles(width, height, rowHalfAndHalf));
// console.log(generateTiles(width, height, rowHalfAndHalfInverse));
// console.log(generateTiles(width, height, quarterLand));
// console.log(generateTiles(width, height, inverseQuarterLand));
// console.log(generateTiles(width, height, diagonally));
// console.log(generateTiles(width, height, diagonallyInverse));
// console.log(generateTiles(width, height, circle));
// console.log(generateTiles(width, height, borderLands));
// console.log(generateTiles(width, height, gradually)); 
// console.log(generateTiles(width, height, max));
// console.log(generateTiles(width, height, min));
// console.log(generateTiles(width, height, classicTruchet));

const tg8 = commbinedPatterns(halfAndHalf, halfAndHalfInverse);
const tg9 = commbinedPatterns(quarterLand, inverseQuarterLand);
const tg10 = commbinedPatterns(rowHalfAndHalf, rowHalfAndHalfInverse);


// console.log(generateTiles(width, height, tg8));
// console.log(generateTiles(width, height, tg9));
// console.log(mirrorRight(generateTiles(width, height, tg9)));
// console.log(mirrorRight(generateTiles(width, height, tg8)));
// console.log(mirrorDown(generateTiles(width, height, tg8)));
// console.log(mirrorDown(generateTiles(width, height, tg9)));
console.log(mirror(generateTiles(width, height, tg8)));
// console.log(mirror(generateTiles(width, height, tg9)));
