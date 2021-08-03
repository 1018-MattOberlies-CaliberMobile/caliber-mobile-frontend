/* eslint-disable import/prefer-default-export */
import BackendClient from './CaliberBackendClient';
import Note from '../models/note';

export const getNoteByBatchIdAndWeek = async (batchId: string, week: number): Promise<Note[]> => {
  // const notes = BackendClient.get<Note[]>(`/note/batch/${batchId}/${week}`)
  //   .then((res) => {
  //     console.log('Successfuly retreieved notes by BatchId and Week', res.data);
  //     return res.data as Note[];
  //   }).catch((error) => {
  //     console.log('Erorr retrieving notes for BatchId and Week', error);
  //     return [];
  //   });

  const notes: Note[] = [];
  if (week === 1) {
    notes.push({
      noteId: '123e4567-e89b-12d3-a456-426614174000',
      noteContent: 'A note',
      technicalScore: 0,
      associate: { associateId: 'id', firstName: 'fn', lastName: 'ln' },
      weekNumber: 1,
    });

    notes.push({
      noteId: '123e4567-e89b-12d3-a456-4266141740123',
      noteContent: 'Very smart cookie!',
      technicalScore: 4,
      associate: { associateId: 'id', firstName: 'fn', lastName: 'ln' },
      weekNumber: 1,
    });

    notes.push({
      noteId: '123e4567-e89b-12d3-a456-4266141740456',
      noteContent: 'Not so smart cookie!',
      technicalScore: 1,
      associate: { associateId: 'id', firstName: 'fn', lastName: 'ln' },
      weekNumber: 1,
    });
  }

  if (week === 2) {
    notes.push({
      noteId: '123e4567-e89b-12d3-a456-426614174111',
      noteContent: 'Another note',
      technicalScore: 4,
      associate: { associateId: 'id', firstName: 'fn', lastName: 'ln' },
      weekNumber: 2,
    });

    notes.push({
      noteId: '123e4567-e89b-12d3-a456-426614174222',
      noteContent: 'Great job',
      technicalScore: 3,
      associate: { associateId: 'id', firstName: 'fn', lastName: 'ln' },
      weekNumber: 2,
    });
  }

  return notes;
};