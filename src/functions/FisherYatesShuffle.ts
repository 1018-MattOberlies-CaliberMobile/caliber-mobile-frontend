/* eslint-disable no-param-reassign */
/*
 *Implementation of the Fisher Yates Shuffle
 *Randomly reorders the input array
 *Accepts an array of type T and returns the array with it's contents shuffled
 *NOTE: This is an in place shuffle so the original array WILL be altered
 */
export default function FisherYatesShuffle<T>(inputArray: T[]): T[] {
  const n = inputArray.length;

  // eslint-disable-next-line no-plusplus
  for (let i = n - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = inputArray[i];
    inputArray[i] = inputArray[j];
    inputArray[j] = tmp;
  }
  return inputArray;
}
