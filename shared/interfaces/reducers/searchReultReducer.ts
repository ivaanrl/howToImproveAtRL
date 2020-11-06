import { TrainingPack, Mechanic, Tutorial } from '..';

export interface SearchResultReducerState {
  searchResults: (TrainingPack | Mechanic | Tutorial)[];
  total_count: number;
}
