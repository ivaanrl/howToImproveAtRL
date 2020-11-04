import { render } from '../../../test/testsUtils';
import user from '@testing-library/user-event';
import faker from 'faker';
import SidebarItem, {
  Props as sidebarItemPropsInterface,
} from '../sidebarItem';

const { text, subItems }: sidebarItemPropsInterface = {
  text: 'Category name',
  subItems: [
    { name: faker.name.firstName() },
    { name: faker.name.firstName() },
    { name: faker.name.firstName() },
    { name: faker.name.firstName() },
    { name: faker.name.firstName() },
    { name: faker.name.firstName() },
  ],
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
  subItems.forEach((item) => {
    expect(queryByText(item.name)).toBeNull();
  });
});

describe('clicking category hide and show items', () => {
  test('clicking category once shows subitems', async () => {
    const { getByRole, queryByText, findByText } = render(
      <SidebarItem text={text} subItems={subItems} />,
    );

    const category = getByRole('button', { name: text });
    subItems.forEach((item) => {
      expect(queryByText(item.name)).toBeNull();
    });

    user.click(category);

    for (let key in subItems) {
      await findByText(subItems[key].name);
    }
  });

  test('clicking category twice shows subitems', async () => {
    const { getByRole, queryByText } = render(
      <SidebarItem text={text} subItems={subItems} />,
    );

    const category = getByRole('button', { name: text });
    user.click(category);
    user.click(category);

    subItems.forEach((item) => {
      expect(queryByText(item.name)).toBeNull();
    });
  });
});

test('anchor tag with subItem name is rendered', async () => {
  const { getByRole, findByText } = render(
    <SidebarItem text={text} subItems={subItems} />,
  );

  const category = getByRole('button', { name: text });
  user.click(category);
  const subItem = await findByText(subItems[0].name);
  expect(subItem).toBeInTheDocument();
});
