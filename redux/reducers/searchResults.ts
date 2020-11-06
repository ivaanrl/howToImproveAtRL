import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Mechanic, TrainingPack, Tutorial } from '../../shared/interfaces';
import { SearchResultReducerState } from '../../shared/interfaces/reducers/searchReultReducer';

const initialState: SearchResultReducerState = {
  searchResults: [],
  total_count: 0,
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
    update_total_count(state, action: PayloadAction<number>) {
      state.total_count = action.payload;
    },
  },
});

export { actions, reducer, name };
