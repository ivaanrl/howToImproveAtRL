import FeaturedTrainingPack from "../trainingPack/featuredTrainingPack";
import { TrainingPack as TrainingPackInterface } from "../../shared/interfaces";
import { TrainingPacksContainer } from "./trainingPacksStyle";
interface Props {
  trainingPacksInfo: TrainingPackInterface[];
}

const TrainingPacks = ({ trainingPacksInfo }: Props) => {
  return (
    <TrainingPacksContainer>
      {trainingPacksInfo?.map((trainingPack) => (
        <FeaturedTrainingPack
          trainingPackInfo={trainingPack}
          key={trainingPack.training_pack_code}
        />
      ))}
    </TrainingPacksContainer>
  );
};

export default TrainingPacks;
