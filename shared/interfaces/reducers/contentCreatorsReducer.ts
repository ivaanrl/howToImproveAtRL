import { ContentCreator, TrainingPack, Mechanic, Tutorial } from '..';

export interface ContentCreatorsReducerState {
  featuredTrainingPackCreators: {
    [creator: string]: {
      contentCreatorInfo: ContentCreator;
      trainingPacks: TrainingPack[];
      mechanics: Mechanic[];
      tutorials: Tutorial[];
    };
  };
}
