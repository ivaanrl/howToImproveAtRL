export interface searchAny {
  searchType: 'any';
  name: string;
}

export interface searchTrainingPack {
  searchType: 'training pack';
  name: string | undefined;
  training_styles: string[] | string | undefined;
  contentCreators: string[] | string | undefined;
  difficulties: string[] | string | undefined;
}
