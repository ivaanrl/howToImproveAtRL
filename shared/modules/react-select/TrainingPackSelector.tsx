import { theme } from '../../../styles/theme';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import {
  getDefaultValues,
  TrainingStyleOptions,
} from '../../searchOptions/searchOptions';
import { useEffect } from 'react';

interface Props {
  value: { value: string; label: string }[];
  setValue: (value: { value: string; label: string }[]) => void;
  initialValue: string | string[] | undefined;
}

const animatedComponents = makeAnimated();

const TrainingPackSelector = ({ value, setValue, initialValue }: Props) => {
  const getOptionsColor = (
    label: string,
  ): { color: string; backgroundColor: string; hoverColor: string } => {
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
        return {
          color: theme.offensiveColor,
          backgroundColor: theme.offensiveSelectBackgroundColor,
          hoverColor: theme.offensiveSelectHoverColor,
        };
      case 'Saves':
      case 'Clears':
      case 'Defense':
        return {
          color: theme.defensiveColor,
          backgroundColor: theme.defensiveSelectBackgroundColor,
          hoverColor: theme.defensiveSelectHoverColor,
        };
      case 'Rebounds':
      case 'Kickoffs':
      case 'Wall_shots':
      case 'Passing':
      case 'Aerial':
      case 'Backboard':
        return {
          color: theme.supportColor,
          backgroundColor: theme.supportSelectBackgroundColor,
          hoverColor: theme.supportSelectHoverColor,
        };
      default:
        return {
          color: theme.offensiveColor,
          backgroundColor: theme.offensiveSelectBackgroundColor,
          hoverColor: theme.offensiveSelectHoverColor,
        };
    }
  };

  const colourStyles = {
    control: (styles) => ({ ...styles, backgroundColor: 'white' }),
    option: (styles, { data }) => {
      const { color, backgroundColor, hoverColor } = getOptionsColor(
        data.value,
      );
      return {
        ...styles,
        color,
        backgroundColor,
        ':hover': {
          backgroundColor: hoverColor,
        },
      };
    },
    multiValue: (styles, { data }) => {
      const { hoverColor } = getOptionsColor(data.value);
      return {
        ...styles,
        backgroundColor: hoverColor,
      };
    },
    multiValueRemove: (styles, { data }) => {
      const { color, hoverColor } = getOptionsColor(data.value);
      return {
        ...styles,
        ':hover': {
          color,
          backgroundColor: hoverColor,
        },
      };
    },
  };

  useEffect(() => {
    setValue(getDefaultValues(initialValue, TrainingStyleOptions));
  }, [initialValue]);

  return (
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      isMulti
      options={TrainingStyleOptions}
      styles={colourStyles}
      onChange={setValue}
      value={value}
      placeholder="Select Training Packs..."
    />
  );
};

export default TrainingPackSelector;
