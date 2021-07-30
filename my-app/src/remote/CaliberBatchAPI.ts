/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
import BackendClient from './CaliberBackendClient';
import Batch from '../models/batch';

/**
 * Retrieves a list of years which contain batches
 */
export const getBatchYears = async (): Promise<string[]> => {
  return BackendClient.get<string[]>('/year')
    .then((res) => {
      console.log('Successfuly retrieved years', res.data);
      return res.data as string[];
    }).catch((err) => {
      // TODO: add toast message
      console.log('Error retrieving list of years: ', err);
      return [];
    });
};

/**
 * Retrieve a list of batches for the specified year
 * If the user is logged in as a trainer, this request will only return
 * batches that the user is a trainer of
 * @param year the year to retrieve batches for
 */
export function getBatchesByYear(year: string): Promise<Batch[]> {
  return BackendClient.get<Batch[]>(`/year/${year}`)
    .then((res: { data: Batch[]; }) => {
      console.log('Successfuly retrieved batches', res.data);
      return res.data as Batch[];
    }).catch((err: unknown) => {
      // TODO: add toast message
      console.log('Error retrieving list of batches: ', err);
      return [];
    });
}
