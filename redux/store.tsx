import { configureStore } from '@reduxjs/toolkit';
import {
  reducer as contentCreatorsReducer,
  name,
} from './reducers/contentCreators';

export const store = configureStore({
  reducer: { [name]: contentCreatorsReducer },
});

export type RootState = ReturnType<typeof store.getState>;
