import { useEffect } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import {
  ContentCreatorOptions,
  getDefaultValues,
} from '../../searchOptions/searchOptions';

interface Props {
  value: { value: string; label: string }[];
  setValue: (value: { value: string; label: string }[]) => void;

  initialValue: string | string[] | undefined;
}

const animatedComponents = makeAnimated();

const ContentCreatorSelector = ({ value, setValue, initialValue }: Props) => {
  const options = ContentCreatorOptions();

  useEffect(() => {
    setValue(getDefaultValues(initialValue, options));
  }, [initialValue]);

  return (
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      isMulti
      options={options}
      onChange={setValue}
      value={value}
      placeholder="Select Content Creators..."
    />
  );
};

export default ContentCreatorSelector;
