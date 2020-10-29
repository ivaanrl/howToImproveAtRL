import { TrainingPackCategories as TrainingPackCategoriesInterface } from '../../shared/interfaces';
import TrainingPackCategory from './trainingPackCategory';
import { TrainingPackCategoriesContainer } from './trainingPackStyles';

interface Props {
  categories: TrainingPackCategoriesInterface;
}

const TrainingPackCategories = ({ categories }: Props) => {
  return (
    <TrainingPackCategoriesContainer role="categories-container">
      {Object.keys(categories).map((category, index) => {
        return <TrainingPackCategory label={category} key={index} />;
      })}
    </TrainingPackCategoriesContainer>
  );
};

export default TrainingPackCategories;
