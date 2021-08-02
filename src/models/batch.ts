/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-useless-constructor */
/* eslint-disable no-unused-vars */

import Associate from './associate';
import Note from './note';
import User from './user';

class Batch {
  constructor(
    public batchId: string,
    public batchTitle: string,
    public trainers: User[],
    public startDate: string,
    public endDate: string,
    public associates: Associate[],
    public notes: Note[],
  ) {}
}

export default Batch;
