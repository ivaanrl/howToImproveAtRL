import { TrainingPack } from '../../shared/interfaces';
import {
  TrainingPackContainer,
  TraningPackNameContaier,
  ImageCodeSpacer,
} from './trainingPackStyles';
import TrainingPackCategories from './trainingPackCategories';
import TrainingPackCode from './TrainingPackCode';

interface Props {
  trainingPackInfo: TrainingPack;
}

export const FeaturedTrainingPack = ({ trainingPackInfo }: Props) => {
  const {
    field_image,
    training_pack_name,
    training_pack_code,
    training_style,
  } = trainingPackInfo;

  return (
    <TrainingPackContainer role="container">
      <img
        src={`/images/maps/${field_image}.jpg`}
        style={{ maxHeight: '170px' }}
      />
      <TraningPackNameContaier>{training_pack_name} </TraningPackNameContaier>
      <ImageCodeSpacer />
      <TrainingPackCode training_pack_code={training_pack_code} />
      <TrainingPackCategories
        categories={JSON.parse(training_style as string)}
      />
    </TrainingPackContainer>
  );
};

export default FeaturedTrainingPack;
