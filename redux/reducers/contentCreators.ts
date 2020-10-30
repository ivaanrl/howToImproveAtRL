import { ContentCreatorsReducerState } from '../../shared/interfaces/reducers/contentCreatorsReducer';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {
  ContentCreator,
  Mechanic,
  TrainingPack,
  Tutorial,
} from '../../shared/interfaces';

const initialState: ContentCreatorsReducerState = {
  featuredTrainingPackCreators: {},
};

const { actions, reducer, name } = createSlice({
  name: 'contentCreators',
  initialState,
  reducers: {
    populate_content_creators(
      state,
      action: PayloadAction<{
        [contenCreatorName: string]: {
          contentCreatorInfo: ContentCreator;
          trainingPacks: TrainingPack[];
          mechanics: Mechanic[];
          tutorials: Tutorial[];
        };
      }>,
    ) {
      state.featuredTrainingPackCreators = action.payload;
    },
  },
});

export { actions, reducer, name };
