import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Mechanic, TrainingPack, Tutorial } from '../../shared/interfaces';
import { SearchResultReducerState } from '../../shared/interfaces/reducers/searchReultReducer';

const initialState: SearchResultReducerState = {
  searchResults: [],
};

const { actions, reducer, name } = createSlice({
  name: 'searchResults',
  initialState,
  reducers: {
    populate_search_results(
      state,
      action: PayloadAction<(TrainingPack | Mechanic | Tutorial)[]>,
    ) {
      state.searchResults = action.payload;
    },
  },
});

export { actions, reducer, name };
