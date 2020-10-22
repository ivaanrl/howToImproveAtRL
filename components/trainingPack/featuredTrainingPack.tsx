import { TrainingPack } from "../../store";
import {
  TrainingPackImageContainer,
  TrainingPackContainer,
} from "./trainingPackStyles";

interface Props {
  trainingPackInfo: TrainingPack;
}

const FeaturedTrainingPack = ({ trainingPackInfo }: Props) => {
  const { field_image } = trainingPackInfo;

  return (
    <TrainingPackContainer>
      <TrainingPackImageContainer
        backgroundImage={`/images/maps/${field_image}.jpg`}
      >
        {" "}
      </TrainingPackImageContainer>
    </TrainingPackContainer>
  );
};

export default FeaturedTrainingPack;
