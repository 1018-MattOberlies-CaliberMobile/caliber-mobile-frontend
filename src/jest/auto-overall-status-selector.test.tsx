import { expect } from '@jest/globals';
import { TechnicalScore } from '../@types';
import autoSelector from '../components/AutoSelector';
import Associate from '../models/associate';
import Note from '../models/note';

describe('auto overall status selector', () => {
  it('picks an overall technical status based on individual scores', () => {
    const sampleAssociate: Associate = {
      associateId: 'test',
      firstName: 'sample',
      lastName: 'associate',
    };

    const note0: Note = {
      noteId: 'Test0',
      noteContent: 'string',
      technicalScore: 0 as TechnicalScore,
      weekNumber: 5,
      associate: sampleAssociate,
    };

    const note1: Note = {
      noteId: 'Test1',
      noteContent: 'string',
      technicalScore: 1 as TechnicalScore,
      weekNumber: 5,
      associate: sampleAssociate,
    };

    const note2: Note = {
      noteId: 'Test2',
      noteContent: 'string',
      technicalScore: 2 as TechnicalScore,
      weekNumber: 5,
      associate: sampleAssociate,
    };

    const note3: Note = {
      noteId: 'Test3',
      noteContent: 'string',
      technicalScore: 3 as TechnicalScore,
      weekNumber: 5,
      associate: sampleAssociate,
    };

    const note4: Note = {
      noteId: 'Test0',
      noteContent: 'string',
      technicalScore: 4 as TechnicalScore,
      weekNumber: 5,
      associate: sampleAssociate,
    };

    const sample1 = [note1, note1, note1, note1, note1, note2, note0,
      note1, note1, note1, note2, note3, note0] as Note[];
    const sample2 = [note0, note0, note0, note0, note1, note2, note3] as Note[];
    const sample3 = [note4, note4, note4, note4, note4, note4, note4,
      note4, note4, note4, note4, note4, note4, note4, note4] as Note[];
    const sample4 = [note0, note0, note0, note0, note0] as Note[];
    const sample5 = [note3, note1, note2, note3, note3, note3, note3,
      note3, note3, note3, note3, note3, note3, note3, note4, note1, note0] as Note[];

    expect(autoSelector(sample1)).toBe(1 as TechnicalScore);
    expect(autoSelector(sample2)).toBe(2 as TechnicalScore);
    expect(autoSelector(sample3)).toBe(4 as TechnicalScore);
    expect(autoSelector(sample4)).toBe(0 as TechnicalScore);
    expect(autoSelector(sample5)).toBe(3 as TechnicalScore);
  });
});
