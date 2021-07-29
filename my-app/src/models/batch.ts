/* eslint-disable no-unused-vars */
import Note from './note';
import Associate from './associate';

export default class Batch {
  constructor(
    public batchID: string,
    public trainerID: string,
    public startDate: string,
    public batchTitle: string,
    public associateList: Associate[],
    public notes: Note[],
  ) {}
}
