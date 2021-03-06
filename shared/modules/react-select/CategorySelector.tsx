import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { CategoriesOptions } from '../../searchOptions/searchOptions';

interface Props {
  value: { value: string; label: string };
  setValue: (value: { value: string; label: string }) => void;
  id: string;
}

const animatedComponents = makeAnimated();

const CategorySelector = ({ value, setValue, id }: Props) => {
  return (
    <Select
      id={id}
      data-testid={id}
      closeMenuOnSelect={true}
      components={animatedComponents}
      options={CategoriesOptions}
      onChange={setValue}
      value={value}
      placeholder="Select Category..."
      aria-label={id}
      name={id}
      inputId={id}
    />
  );
};

export default CategorySelector;
