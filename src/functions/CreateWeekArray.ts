/**
 * CreateWeekArray function
 * A function for creating an array of week# depending on a start and end date
 * Accepts strings for the start date and end date
 * Expected format for the date string is in YYYY-MM-DD
 * Returns an array of strings in the format of 'Week #'
 */
export default function CreateWeekArray(start: string, end: string): string[] {
  const weekArray: string[] = [];
  const MILLISECONDS_IN_WEEK = 7 * 24 * 60 * 60 * 1000;
  let dateSplit = start.split(/[- :]/);
  const startDate = new Date(start);
  dateSplit = end.split(/[- :]/);
  const endDate = new Date(end);
  let weekNum = 1;
  if (startDate.toISOString() === endDate.toISOString()) {
    return [];
  }

  // Edge case for when start and end date are the same day of the week
  if (startDate.getDay() >= endDate.getDay()) {
    // Monday is represented by 1
    if (endDate.getDay() === 1) {
      endDate.setDate(endDate.getDate() + 1);
    } else {
      weekArray.push(`Week ${weekNum}`);
      weekNum += 1;
      startDate.setDate(startDate.getDate() + ((1 + 7 - startDate.getDay()) % 7));
    }
  }

  const timeLength = endDate.valueOf() - startDate.valueOf();
  let timeRemaining = timeLength;
  while (timeRemaining > 0) {
    weekArray.push(`Week ${weekNum}`);
    weekNum += 1;
    timeRemaining -= MILLISECONDS_IN_WEEK;
  }

  return weekArray;
}
