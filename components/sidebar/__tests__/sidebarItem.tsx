import { render } from '../../../test/testsUtils';
import user from '@testing-library/user-event';
import faker from 'faker';
import SidebarItem, {
  Props as sidebarItemPropsInterface,
} from '../sidebarItem';

const { text, subItems }: sidebarItemPropsInterface = {
  text: 'Category name',
  subItems: {
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

jest.mock('next/link', () => {
  return ({ children }) => {
    return children;
  };
});

test('renders properly', () => {
  const { getByRole, queryByText } = render(
    <SidebarItem text={text} subItems={subItems} />,
  );

  const category = getByRole('button', { name: text });
  expect(category).not.toBeNull();
  Object.keys(subItems).forEach((item) => {
    expect(queryByText(item)).toBeNull();
  });
});

describe('clicking category hide and show items', () => {
  test('clicking category once shows subitems', async () => {
    const { getByRole, queryByText, findByText } = render(
      <SidebarItem text={text} subItems={subItems} />,
    );

    const category = getByRole('button', { name: text });
    Object.keys(subItems).forEach((item) => {
      expect(queryByText(item)).toBeNull();
    });

    user.click(category);

    for (let key in subItems) {
      await findByText(key);
    }
  });

  test('clicking category twice shows subitems', async () => {
    const { getByRole, queryByText } = render(
      <SidebarItem text={text} subItems={subItems} />,
    );

    const category = getByRole('button', { name: text });
    user.click(category);
    user.click(category);
    Object.keys(subItems).forEach((item) => {
      expect(queryByText(item)).toBeNull();
    });
  });
});

test('anchor tag with subItem name is rendered', async () => {
  const { getByRole, findByText } = render(
    <SidebarItem text={text} subItems={subItems} />,
  );

  const category = getByRole('button', { name: text });
  user.click(category);
  const subItem = await findByText(Object.keys(subItems)[0]);
  expect(subItem).toBeInTheDocument();
});
