/* eslint-disable arrow-body-style */
import { Auth } from 'aws-amplify';
import BackendClient from './CaliberBackendClient';
import Batch from '../models/batch';
import { batch } from 'react-redux';

/**
 * Retrieves a list of years which contain batches
 */
export const getBatchYears = async (): Promise<string[]> => {
  return BackendClient.get('/batch/year')
    .then((res) => {
      console.log('Successfuly retrieved years', res.data);
      return JSON.parse(res.data.body).years as string[];
    });
};

/**
 * Retrieve a list of batches for the specified year
 * If the user is logged in as a trainer, this request will only return
 * batches that the user is a trainer of
 * @param year the year to retrieve batches for
 */
export async function getBatchesByYear(year: string): Promise<Batch[]> {
  const session = await Auth.currentSession();
  return BackendClient.get(`/batch/year/${year}`, {
    headers: {
      Authorization: `Bearer ${session.getAccessToken().getJwtToken()}`,
    },
  }).then((res) => {
    // console.log('Successfuly retrieved batches', res.data);
    const receivedBatches = JSON.parse(res.data.body).batches;
    const batches: Batch[] = receivedBatches.map((b): Batch => {
      const newBatch = {
        ...b,
        trainers: b.users,
      };
      delete newBatch.users;
      return newBatch;
    });
    console.log('formatted batches: ', batches);
    return batches;
  });
}
