/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-useless-constructor */
/* eslint-disable no-unused-vars */

import { TechnicalScore } from '../@types/index.d';
import Associate from './Associate';

class Note {
  constructor(
    noteId: string,
    noteContent: string,
    technicalScore: TechnicalScore,
    associate: Associate,
    weekNumber: number,
  ) {}
}

export default Note;
