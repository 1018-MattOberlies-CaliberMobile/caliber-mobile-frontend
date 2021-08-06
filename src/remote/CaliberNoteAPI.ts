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
      batchId,
      noteContent: 'A note',
      technicalScore: 0,
      associate: { associateId: 'id', firstName: 'Joe', lastName: 'Scmoe' },
      weekNumber: 1,
    });

    notes.push({
      noteId: '123e4567-e89b-12d3-a456-4266141740123',
      batchId,
      noteContent: 'Very smart cookie!',
      technicalScore: 4,
      associate: { associateId: 'id', firstName: 'Matt', lastName: 'Hat' },
      weekNumber: 1,
    });

    notes.push({
      noteId: '123e4567-e89b-12d3-a456-4266141740456',
      batchId,
      noteContent: 'Not so smart cookie!',
      technicalScore: 1,
      associate: { associateId: 'id', firstName: 'Tai', lastName: 'Guy' },
      weekNumber: 1,
    });
  }

  if (week === 2) {
    notes.push({
      noteId: '123e4567-e89b-12d3-a456-426614174111',
      batchId,
      noteContent: 'Another note',
      technicalScore: 4,
      associate: { associateId: 'id', firstName: 'Mimi', lastName: 'Meme' },
      weekNumber: 2,
    });

    notes.push({
      noteId: '123e4567-e89b-12d3-a456-426614174222',
      batchId,
      noteContent: 'Great job',
      technicalScore: 3,
      associate: { associateId: 'id', firstName: 'TK', lastName: 'KO' },
      weekNumber: 2,
    });
  }

  return notes;
};

export const CreateOverallNote = (note: Note): void => {
  BackendClient.post('note', note)
    .then((res) => { console.log('>> Saved overall note', res); })
    .catch((err) => { console.error('>> Error on save overall note.', err); });
};
