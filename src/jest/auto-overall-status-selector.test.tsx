import { expect } from '@jest/globals';
import { TechnicalScore } from '../@types';
import autoSelector from '../components/AutoSelector';

describe('auto overall status selector', () => {
  it('picks an overall technical status based on individual scores', () => {
    const sample1 = [1, 1, 1, 1, 1, 2, 0, 1, 1, 1, 2, 3, 0] as TechnicalScore[];
    const sample2 = [0, 0, 0, 0, 1, 2, 3] as TechnicalScore[];
    const sample3 = [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4] as TechnicalScore[];
    const sample4 = [0, 0, 0, 0, 0] as TechnicalScore[];
    const sample5 = [3, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 1, 0] as TechnicalScore[];

    expect(autoSelector(sample1)).toBe(1 as TechnicalScore);
    expect(autoSelector(sample2)).toBe(2 as TechnicalScore);
    expect(autoSelector(sample3)).toBe(4 as TechnicalScore);
    expect(autoSelector(sample4)).toBe(0 as TechnicalScore);
    expect(autoSelector(sample5)).toBe(3 as TechnicalScore);
  });
});
