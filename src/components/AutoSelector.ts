import { TechnicalScore } from '../@types';

export default function AutoSelector(scoreArray: TechnicalScore[]): TechnicalScore {
  const zeroCount = (scoreArray.filter((score) => score === 0)).length;
  let realFinal = 0 as TechnicalScore;
  if (scoreArray.length - zeroCount > 0) {
    let sum = 0;
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < scoreArray.length; i++) {
      sum += scoreArray[i];
    }
    const average = sum / (scoreArray.length - zeroCount);
    let overallDef = 0;
    if (average === 4) {
      overallDef = 4;
    } else if (average < 4 && average >= 2.5) {
      overallDef = 3;
    } else if (average < 2.5 && average >= 2) {
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
