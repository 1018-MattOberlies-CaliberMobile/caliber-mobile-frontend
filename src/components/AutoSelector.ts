import { TechnicalScore } from '../@types';
import Note from '../models/note';

export default function AutoSelector(noteArray: Note[]): TechnicalScore {
  const scoreArray = [] as TechnicalScore[];
  for (let i = 0; i < noteArray.length; i += 1) {
    scoreArray[i] = noteArray[i].technicalScore;
  }
  const zeroCount = (scoreArray.filter((score) => score === 0)).length;
  let realFinal = 0 as TechnicalScore;
  if (scoreArray.length - zeroCount > 0) {
    let sum = 0;
    for (let i = 0; i < scoreArray.length; i += 1) {
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
