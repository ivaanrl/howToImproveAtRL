import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { ContentCreatorOptions } from '../../searchOptions/searchOptions';

interface Props {
  value: { value: string; label: string }[];
  setValue: (value: { value: string; label: string }[]) => void;
}

const animatedComponents = makeAnimated();

const ContentCreatorSelector = ({ value, setValue }: Props) => {
  const options = ContentCreatorOptions();

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
