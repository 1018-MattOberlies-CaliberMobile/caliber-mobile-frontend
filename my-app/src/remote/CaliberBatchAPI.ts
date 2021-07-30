/* eslint-disable import/prefer-default-export */

import Batch from '../models/batch';

/**
 * Retrieves a list of years which contain batches
 */
export function getBatchYears(): string[] {
  // TODO: replace mock data with API call
  return ['2021', '2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012', '2010', '2009'];
}

/**
 * Retrieve a list of batches for the specified year
 * If the user is logged in as a trainer, this request will only return
 * batches that the user is a trainer of
 * @param year the year to retrieve batches for
 */
export function getBatchesByYear(year: string): Batch[] {
  // TODO: replace mock data with API call
  console.log(year);
  const DATA:Array<Batch> = [
    {
      batchId: '123123',
      batchTitle: `0513${year} Cloud Native Matt`,
      trainers: [
        {
          username: 'Matt',
          role: 'Trainer',
        },
      ],
      startDate: new Date().toISOString(),
      endDate: new Date().toISOString(),
      associates: [
      ],
      notes: [
      ],
    },
    {
      batchId: 'tryhtry',
      batchTitle: `0513${year} DevOps Tim`,
      trainers: [
        {
          username: 'Tim',
          role: 'Trainer',
        },
      ],
      startDate: new Date().toISOString(),
      endDate: new Date().toISOString(),
      associates: [
      ],
      notes: [
      ],
    },
  ];
  for (let i = 0; i < 20; i += 1) {
    const newBatch: Batch = {
      batchId: `${i}`,
      batchTitle: `0513${year} ${i % 2 === 0 ? 'Cloud Native Matt' : 'DevOps Tim'}`,
      trainers: [
        {
          username: `${i % 2 === 0 ? 'Matt' : 'Tim'}`,
          role: 'Trainer',
        },
      ],
      startDate: new Date().toISOString(),
      endDate: new Date().toISOString(),
      associates: [
      ],
      notes: [
      ],
    };
    DATA.push(newBatch);
  }

  return DATA;
}
