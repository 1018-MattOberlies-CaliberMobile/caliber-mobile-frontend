/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-useless-constructor */
/* eslint-disable no-unused-vars */

import { TechnicalScore } from '../@types';
import Associate from './associate';

class Note {
  constructor(
    public noteId: string | undefined,
    public batchId: string,
    public noteContent: string,
    public technicalScore: TechnicalScore,
    public weekNumber: number,
    public associate?: Associate,
  ) {}
}

export default Note;
