import { theme } from '../styles/theme';
import { ThemeProvider } from 'styled-components';
import { render, RenderOptions } from '@testing-library/react';
import { StateProvider, State } from '../store';
import faker from 'faker';

const initialState: State = {
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
};

const EveryProvider = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <StateProvider initialState={initialState}>{children}</StateProvider>
    </ThemeProvider>
  );
};

const renderWithProviders = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'queries'>,
) => render(ui, { wrapper: EveryProvider, ...options });

export * from '@testing-library/react';

export { renderWithProviders as render };
