/* eslint-disable arrow-body-style */
import { Auth } from 'aws-amplify';
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
  console.log(session.getAccessToken().getJwtToken());
  return BackendClient.get<Batch[]>(`/year/${year}`, {
    headers: {
      Authorizaton: `Bearer ${session.getIdToken().getJwtToken()}`,
    },
  }).then((res: { data: Batch[]; }) => {
    console.log('Successfuly retrieved batches', res.data);
    return res.data as Batch[];
  });
}
