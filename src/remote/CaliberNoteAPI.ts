/* eslint-disable import/prefer-default-export */
import BackendClient from './CaliberBackendClient';
import Note from '../models/note';

export const getNoteByBatchIdAndWeek = async (batchId: string, week: number): Promise<Note[]> => {
  const notes = BackendClient.get(`/note/batch/${batchId}/${week}`)
    .then((res) => {
      console.log('Successfuly retreieved notes by BatchId and Week', JSON.parse(res.data.body).notes);
      const result = JSON.parse(res.data.body).notes as Note[];
      return result;
    }).catch((error) => {
      console.log('Erorr retrieving notes for BatchId and Week', error);
      return [];
    });
  console.log(notes);
  return notes;
};

export const getNoteByBatchIdAndWeekOverall = async (
  batchId: string, week: number,
): Promise<Note | null> => {
  const notes = BackendClient.get(`/note/batch/${batchId}/${week}/overall`)
    .then((res) => {
      console.log('Successfuly retreieved note by BatchId and Week', JSON.parse(res.data.body).note);
      return JSON.parse(res.data.body).note;
    }).catch((error) => {
      console.log('Erorr retrieving notes for BatchId and Week', error);
      return null;
    });
  console.log(notes);
  return null;
};

export const CreateOverallNote = async (note: Note): void => {
  BackendClient.post('note', note)
    .then((res) => { console.log('>> Saved overall note', res); })
    .catch((err) => { console.error('>> Error on save overall note.', err); });
};

export const createAssociateNote = async (note: Note): Promise<void> => {
  const res = await BackendClient.post('note', note);
  console.log('>> Saved associate note', res);
};
