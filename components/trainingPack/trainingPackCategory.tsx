import { useEffect, useState } from 'react';
import { TrainingPackCategoryContainer } from './trainingPackStyles';

export interface Props {
  label: string;
}

const TrainingPackCategory = ({ label }: Props) => {
  const [color, setColor] = useState<string>();

  const colorSwitch = (): string => {
    switch (label) {
      case 'Bounces':
      case 'Shots':
      case 'Redirects':
      case 'Freestlyes':
      case 'Air_dribbles':
      case 'Dribbles':
      case 'Long_shots':
      case 'Close_shots':
      case 'Angle_shots':
      case 'Backwards_shots':
      case 'Pinch_shots':
      case 'Striker':
      case 'Offense':
        return 'red';
      case 'Saves':
      case 'Clears':
      case 'Defense':
        return 'blue';
      case 'Rebounds':
      case 'Kickoffs':
      case 'Wall_shots':
      case 'Passing':
      case 'Aerial':
      case 'Backboard':
        return 'green';
      default:
        return 'white';
    }
  };

  useEffect(() => {
    setColor(colorSwitch());
  }, [label]);

  return (
    <TrainingPackCategoryContainer
      offensive={color === 'red'}
      defensive={color === 'blue'}
      support={color === 'green'}
    >
      {label.replace('_', ' ')}{' '}
    </TrainingPackCategoryContainer>
  );
};

export default TrainingPackCategory;
