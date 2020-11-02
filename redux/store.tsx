import { configureStore } from '@reduxjs/toolkit';
import {
  reducer as contentCreatorsReducer,
  name as contentCreatorsReducerName,
} from './reducers/contentCreators';
import {
  reducer as searchResultsReducers,
  name as searchResultsReducerName,
} from './reducers/searchResults';

export const store = configureStore({
  reducer: {
    [contentCreatorsReducerName]: contentCreatorsReducer,
    [searchResultsReducerName]: searchResultsReducers,
  },
});

export type RootState = ReturnType<typeof store.getState>;
