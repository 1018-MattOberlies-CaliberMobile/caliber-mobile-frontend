import React from 'react';

type Props = {

}

export const createWeekArray = (start: string, end: string): string[] => {
  const weekArray: string[] = [];
  const MILLISECONDS_IN_WEEK = 7 * 24 * 60 * 60 * 1000;
  const startDate = new Date(start);
  const endDate = new Date(end);
  const timeLength = endDate.valueOf() - startDate.valueOf();
  let timeRemaining = timeLength;
  let weekNum = 1;

  while (timeRemaining > 0) {
    weekArray.push(`week${weekNum}`);
    weekNum += 1;
    timeRemaining -= MILLISECONDS_IN_WEEK;
  }

  return weekArray;
};

const WeekNotesScreen: React.FC<Props> = (props): JSX.Element => {
  const temp = 0;
  return (
    <>
    </>
  );
};

export default WeekNotesScreen;
