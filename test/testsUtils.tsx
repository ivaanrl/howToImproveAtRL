import { theme } from '../styles/theme';
import { ThemeProvider } from 'styled-components';
import { render, RenderOptions } from '@testing-library/react';
import { RootState } from '../redux/store';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import faker from 'faker';

const initialState: RootState = {
  contentCreators: {
    featuredTrainingPackCreators: {
      ['ivanrl']: {
        contentCreatorInfo: {
          content_creator_id: faker.random.alphaNumeric(),
          tiktok: faker.internet.userName(),
          youtube: faker.internet.userName(),
          twitter: faker.internet.userName(),
          steam: faker.internet.userName(),
          instagram: faker.internet.userName(),
          personal_website: faker.internet.url(),
          facebook: faker.internet.userName(),
          discord: faker.internet.userName(),
          twitch: faker.internet.userName(),
          featured: 1,
          name: 'ivanrl', //just for making some tests easier
          picture: faker.internet.url(),
        },
        trainingPacks: [],
        mechanics: [],
        tutorials: [],
      },
      [faker.internet.userName()]: {
        contentCreatorInfo: {
          content_creator_id: faker.random.alphaNumeric(),
          tiktok: faker.internet.userName(),
          youtube: faker.internet.userName(),
          twitter: faker.internet.userName(),
          steam: faker.internet.userName(),
          instagram: faker.internet.userName(),
          personal_website: faker.internet.url(),
          facebook: faker.internet.userName(),
          discord: faker.internet.userName(),
          twitch: faker.internet.userName(),
          featured: 1,
          name: faker.internet.userName(),
          picture: faker.internet.url(),
        },
        trainingPacks: [],
        mechanics: [],
        tutorials: [],
      },
      [faker.internet.userName()]: {
        contentCreatorInfo: {
          content_creator_id: faker.random.alphaNumeric(),
          tiktok: faker.internet.userName(),
          youtube: faker.internet.userName(),
          twitter: faker.internet.userName(),
          steam: faker.internet.userName(),
          instagram: faker.internet.userName(),
          personal_website: faker.internet.url(),
          facebook: faker.internet.userName(),
          discord: faker.internet.userName(),
          twitch: faker.internet.userName(),
          featured: 1,
          name: faker.internet.userName(),
          picture: faker.internet.url(),
        },
        trainingPacks: [],
        mechanics: [],
        tutorials: [],
      },
    },
  },
};

const configureMockStore = configureStore();
const mockStore = configureMockStore(initialState);

const EveryProvider = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={mockStore}>{children}</Provider>
    </ThemeProvider>
  );
};

const renderWithProviders = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'queries'>,
) => render(ui, { wrapper: EveryProvider, ...options });

export * from '@testing-library/react';

export { renderWithProviders as render };
