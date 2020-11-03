import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { CategoriesOptions } from '../../searchOptions/searchOptions';

interface Props {
  value: { value: string; label: string };
  setValue: (value: { value: string; label: string }) => void;
}

const animatedComponents = makeAnimated();

const CategorySelector = ({ value, setValue }: Props) => {
  return (
    <Select
      closeMenuOnSelect={true}
      components={animatedComponents}
      options={CategoriesOptions}
      onChange={setValue}
      value={value}
      placeholder="Select Category..."
    />
  );
};

export default CategorySelector;
