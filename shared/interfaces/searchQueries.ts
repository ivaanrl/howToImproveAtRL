export interface searchAny {
  searchType: 'any';
  name: string;
}

export interface searchTrainingPack {
  searchType: 'training pack';
  name: string | undefined;
  training_styles: string | undefined;
  contentCreators: string | undefined;
  difficulties: string | undefined;
}
