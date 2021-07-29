/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-useless-constructor */
/* eslint-disable no-unused-vars */

import Associate from './Associate';
import Note from './Note';
import User from './User';

class Batch {
  constructor(
    batchId: string,
    trainers: User[],
    startDate: string,
    endDate: string,
    associates: Associate[],
    notes: Note[],
  ) {}
}

export default Batch;
