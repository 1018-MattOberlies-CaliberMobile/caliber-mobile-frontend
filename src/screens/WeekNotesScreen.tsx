import React, { useState } from 'react';
import { Text } from 'react-native';
import HorizontalSelector from '../components/HorizontalSelector';

type Props = {

}

export const createWeekArray = (start: string, end: string): string[] => {
  const weekArray: string[] = [];
  const MILLISECONDS_IN_WEEK = 7 * 24 * 60 * 60 * 1000;
  const startDate = new Date(start);
  const endDate = new Date(end);
  let weekNum = 1;

  if (startDate.getDate() === endDate.getDate()) {
    return [];
  }

  // Edge case for when start and end date are the same day of the week
  if (startDate.getDay() >= endDate.getDay()) {
    // Monday is represented by 1
    if (endDate.getDay() === 1) {
      endDate.setDate(endDate.getDate() + 1);
    } else {
      weekArray.push(`week${weekNum}`);
      weekNum += 1;
      startDate.setDate(startDate.getDate() + ((1 + 7 - startDate.getDay()) % 7));
    }
  }

  const timeLength = endDate.valueOf() - startDate.valueOf();
  let timeRemaining = timeLength;

  while (timeRemaining > 0) {
    weekArray.push(`week${weekNum}`);
    weekNum += 1;
    timeRemaining -= MILLISECONDS_IN_WEEK;
  }

  return weekArray;
};

const WeekNotesScreen: React.FC<Props> = (props): JSX.Element => {
  const arrayString = createWeekArray('2021-7-5', '2021-7-30')
  const [selected, setSelected] = useState<number>(0);

  return (
    <div>
      <Text>Hello</Text>
      <HorizontalSelector data= {arrayString}
        initialSelected = {arrayString[selected]}
        onPress={(item) => { setSelected(arrayString.indexOf(item)); } }></HorizontalSelector>
    </div>
  );
};

export default WeekNotesScreen;
