/* eslint-disable no-unused-vars */
export default class Note {
  constructor(
    public noteID: string,
    public batchID: string,
    public noteContent: string,
    public technicalScore: 0 | 1 | 2 | 3 | 4,
    public associateID: string | undefined,
    public weekNumber: number,
  ) {}
}
