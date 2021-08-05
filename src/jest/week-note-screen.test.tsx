// eslint-disable-next-line import/no-extraneous-dependencies
import { expect } from '@jest/globals';
import 'react-native';
import createWeekArray from '../Functions/CreateWeekArray';
import FisherYatesShuffle from '../Functions/FisherYatesShuffle';

describe('Testing week note screen', () => {
  beforeEach(() => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0);
  });

  test('Testing createWeekArray function properly creates an array of numbered weeks', () => {
    const weekOutput = createWeekArray('2021-7-5', '2021-7-30');
    const weekOutput2 = createWeekArray('2021-7-5', '2021-7-19');
    const weekOutput3 = createWeekArray('2021-7-7', '2021-7-28');
    const weekOutput4 = createWeekArray('2021-7-30', '2021-7-30');
    const weekOutput5 = createWeekArray('2021-7-8', '2021-7-27');
    const weekOutput6 = createWeekArray('2021-6-5', '2021-7-5');

    expect(weekOutput).toStrictEqual(['Week 1', 'Week 2', 'Week 3', 'Week 4']);
    expect(weekOutput2).toStrictEqual(['Week 1', 'Week 2', 'Week 3']);
    expect(weekOutput3).toStrictEqual(['Week 1', 'Week 2', 'Week 3', 'Week 4']);
    expect(weekOutput4).toStrictEqual([]);
    expect(weekOutput5).toStrictEqual(['Week 1', 'Week 2', 'Week 3', 'Week 4']);
    expect(weekOutput6).toStrictEqual(['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5']);
  });

  test('Testing the FisherYatesShuffle without the randomness', () => {
    const array = ['a', 'b', 'c', 'd', 'f'];

    const newArray = FisherYatesShuffle(array);

    expect(newArray).toStrictEqual(['b', 'c', 'd', 'f', 'a']);
    expect(array).toStrictEqual(['b', 'c', 'd', 'f', 'a']);
  });

  afterEach(() => {
    jest.spyOn(global.Math, 'random').mockRestore();
  });
});
