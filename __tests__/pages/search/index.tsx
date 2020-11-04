import React from 'react';
import { render } from '../../../test/testsUtils';
import ContentCreatorPage from '../../../pages/[creatorName]/index';
import faker from 'faker';
import { actions as contentCreatorsActions } from '../../../redux/reducers/contentCreators';
import {
  ContentCreator,
  TrainingPack,
  Mechanic,
  Tutorial,
} from '../../../shared/interfaces';
import SearchPage from '../../../pages/search';

jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({
    query: {},
  })),
}));

const searchResults = [];

test('renders properly', () => {
  const {} = render(<SearchPage searchResults={searchResults} />);
});
