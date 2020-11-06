export interface searchAny {
  searchType: 'any';
  page: string | undefined;
  name: string;
}

export interface searchTrainingPack {
  searchType: 'training pack';
  page: string | undefined;
  name: string | undefined;
  training_styles: string[] | string | undefined;
  contentCreators: string[] | string | undefined;
  difficulties: string[] | string | undefined;
}
