import { TechnicalScore } from '../@types';

export default function AutoSelector(scoreArray: TechnicalScore[]): TechnicalScore {
  const zeroCount = (scoreArray.filter((score) => score === 0)).length;
  let realFinal = 0 as TechnicalScore;
  if (zeroCount <= (0.2 * scoreArray.length)) {
    let sum = 0;
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < scoreArray.length; i++) {
      sum += scoreArray[i];
    }
    const average = sum / scoreArray.length;
    let overallDef = 0;
    if (average >= 3.5) {
      overallDef = 4;
    } else if (average < 3.5 && average >= 2.5) {
      overallDef = 3;
    } else if (average < 2.5 && average >= 1.5) {
      overallDef = 2;
    } else {
      overallDef = 1;
    }
    realFinal = overallDef as TechnicalScore;
  } else {
    realFinal = 0 as TechnicalScore;
  }
  return realFinal;
}
