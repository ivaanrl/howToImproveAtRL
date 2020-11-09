import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { RootState } from '../../../redux/store';
import {
  //ContentCreatorOptions,
  getDefaultValues,
} from '../../searchOptions/searchOptions';

interface Props {
  value: { value: string; label: string }[];
  setValue: (value: { value: string; label: string }[]) => void;

  initialValue: string | string[] | undefined;
  id: string;
}

const animatedComponents = makeAnimated();

const ContentCreatorSelector = ({
  value,
  setValue,
  initialValue,
  id,
}: Props) => {
  const contentCreators = useSelector(
    (state: RootState) => state.contentCreators,
  );

  const contentCreatorOptions = contentCreators.map((contentCreator) => {
    return { value: contentCreator.name, label: contentCreator.name };
  });

  useEffect(() => {
    setValue(getDefaultValues(initialValue, contentCreatorOptions));
  }, [initialValue, contentCreators]);

  return (
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      isMulti
      options={contentCreatorOptions}
      onChange={setValue}
      value={value}
      placeholder="Select Content Creators..."
      aria-label="content-creator-selector"
      id={id}
      name={id}
      inputId={id}
    />
  );
};

export default ContentCreatorSelector;
