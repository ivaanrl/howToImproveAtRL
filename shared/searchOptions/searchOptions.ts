import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

export const TrainingStyleOptions = [
  {
    value: 'Striker',
    label: 'Striker',
  },
  {
    value: 'Bounces',
    label: 'Bounces',
  },
  {
    value: 'Shots',
    label: 'Shots',
  },
  {
    value: 'Redirects',
    label: 'Redirects',
  },
  {
    value: 'Freestyles',
    label: 'Freestyles',
  },
  {
    value: 'Dribbles',
    label: 'Dribbles',
  },
  {
    value: 'Long_Shots',
    label: 'Long Shots',
  },
  {
    value: 'Air_dribbles',
    label: 'Air Dribbles',
  },
  {
    value: 'Close_shots',
    label: 'Close Shots',
  },
  {
    value: 'Angle_shots',
    label: 'Angle Shots',
  },
  {
    value: 'Backwards_shots',
    label: 'Backwards Shots',
  },
  {
    value: 'Pinch_shots',
    label: 'Pinch Shots',
  },
  {
    value: 'Offense',
    label: 'Offense',
  },
  {
    value: 'Saves',
    label: 'Saves',
  },
  {
    value: 'Clears',
    label: 'Clears',
  },
  {
    value: 'Defense',
    label: 'Defense',
  },
  {
    value: 'Rebounds',
    label: 'Rebounds',
  },
  {
    value: 'Wall_shots',
    label: 'Wall Shots',
  },
  {
    value: 'Passing',
    label: 'Passing',
  },
  {
    value: 'Aerial',
    label: 'Aerial',
  },
  {
    value: 'Backboard',
    label: 'Backboard',
  },
];

export const ContentCreatorOptions = () => {
  const contentCreators = useSelector(
    (state: RootState) => state.contentCreators,
  );

  const contentCreatorOptionsArray = contentCreators.map((contentCreator) => {
    return { value: contentCreator.name, label: contentCreator.name };
  });

  return contentCreatorOptionsArray;
};

export const DifficultyOptions = [
  {
    value: 'Easy',
    label: 'Easy',
  },
  {
    value: 'Medium',
    label: 'Medium',
  },
  {
    value: 'Hard',
    label: 'Hard',
  },
];

export const CategoriesOptions = [
  { value: 'training pack', label: 'Training Packs' },
  { value: 'Mechanics', label: 'Mechanics' },
  { value: 'Tutorials', label: 'Tutorials' },
];

export const getDefaultValues = (
  initialValue: string | string[] | undefined,
  optionsArray: { value: string; label: string }[],
) => {
  const defaultValue = Array.isArray(initialValue)
    ? initialValue
    : [initialValue];
  const defaultValues = defaultValue.map((selectedOption) => {
    return optionsArray.find(
      (trainingStyleOption) => trainingStyleOption.value === selectedOption,
    );
  });

  return defaultValues;
};
