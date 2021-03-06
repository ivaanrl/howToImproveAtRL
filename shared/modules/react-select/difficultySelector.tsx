import { useEffect } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { theme } from '../../../styles/theme';
import {
  DifficultyOptions,
  getDefaultValues,
} from '../../searchOptions/searchOptions';

interface Props {
  value: { value: string; label: string }[];
  setValue: (value: { value: string; label: string }[]) => void;
  initialValue: string | string[] | undefined;
  id: string;
}

const animatedComponents = makeAnimated();

const DifficultySelector = ({ value, setValue, initialValue, id }: Props) => {
  const getOptionsColor = (
    label: string,
  ): { color: string; backgroundColor: string; hoverColor: string } => {
    switch (label) {
      case 'Easy':
        return {
          color: theme.easy,
          backgroundColor: theme.easySelectBackgroundColor,
          hoverColor: theme.easySelectHoverColor,
        };
      case 'Medium':
        return {
          color: theme.medium,
          backgroundColor: theme.mediumSelectBackgroundColor,
          hoverColor: theme.mediumSelectHoverColor,
        };
      case 'Hard':
        return {
          color: theme.hard,
          backgroundColor: theme.hardSelectBackgroundColor,
          hoverColor: theme.hardSelectHoverColor,
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
    setValue(getDefaultValues(initialValue, DifficultyOptions));
  }, [initialValue]);

  return (
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      isMulti
      options={DifficultyOptions}
      styles={colourStyles}
      onChange={setValue}
      value={value}
      placeholder="Select Difficulty..."
      aria-label="difficulty-selector"
      id={id}
      name={id}
      inputId={id}
    />
  );
};

export default DifficultySelector;
