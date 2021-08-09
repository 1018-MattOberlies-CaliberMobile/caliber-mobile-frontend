/* eslint-disable import/prefer-default-export */
import BackendClient from './CaliberBackendClient';
import Note from '../models/note';

export const getNoteByBatchIdAndWeek = async (batchId: string, week: number): Promise<Note[]> => {
  const notes = BackendClient.get(`/note/batch/${batchId}/${week}`)
    .then((res) => {
      // console.log('Successfuly retreieved notes by BatchId and Week', res.data);
      const data = JSON.parse(res.data.body).notes as Note[];
      console.log('Data as notes', data);
      return JSON.parse(res.data.body).notes as Note[];
    }).catch((error) => {
      console.log('Erorr retrieving notes for BatchId and Week', error);
      return [];
    });
  console.log(notes);
  return notes;
};

export const CreateOverallNote = (note: Note): void => {
  BackendClient.post('note', note)
    .then((res) => { console.log('>> Saved overall note', res); })
    .catch((err) => { console.error('>> Error on save overall note.', err); });
};
