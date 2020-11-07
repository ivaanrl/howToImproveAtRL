import ScrollContainer from 'react-indiana-drag-scroll';
import { TrainingPackCategories } from '../../../shared/interfaces';
import { TrainingPackCategoryContainer } from './draggableCategoriesStyles';
import TrainingPackCategory from '../../trainingPack/trainingPackCategory';

interface Props {
  categories: TrainingPackCategories;
}

const DraggableCategories = ({ categories }: Props) => {
  return (
    <TrainingPackCategoryContainer>
      <ScrollContainer
        vertical={false}
        horizontal
        hideScrollbars
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'nowrap',
          maxWidth: '225px',
        }}
      >
        {Object.keys(categories).map((category, index) => {
          return <TrainingPackCategory label={category} key={index} />;
        })}
      </ScrollContainer>
    </TrainingPackCategoryContainer>
  );
};

export default DraggableCategories;
