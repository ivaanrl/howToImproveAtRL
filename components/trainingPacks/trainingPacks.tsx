import FeaturedTrainingPack from "../trainingPack/featuredTrainingPack";
import { TrainingPack as TrainingPackInterface } from "../../store";
import { TrainingPacksContainer } from "./trainingPacksStyle";
interface Props {
  trainingPacksInfo: TrainingPackInterface[];
}

const TrainingPacks = ({ trainingPacksInfo }: Props) => {
  return (
    <TrainingPacksContainer>
      {trainingPacksInfo?.map((trainingPack) => (
        <FeaturedTrainingPack trainingPackInfo={trainingPack} />
      ))}
    </TrainingPacksContainer>
  );
};

export default TrainingPacks;
