import { render } from '../../../test/testsUtils';
import user from '@testing-library/user-event';
import Sidebar from '../sidebar';

const mockCloseSidebar = jest.fn();

test('renders properly', () => {
  const { getByLabelText } = render(
    <Sidebar closeSidebar={mockCloseSidebar} />,
  );

  expect(getByLabelText('sidebar container')).not.toBeNull();
  expect(getByLabelText('close sidebar menu')).not.toBeNull();
});

test('closeSidebar gets called', () => {
  const { getByLabelText } = render(
    <Sidebar closeSidebar={mockCloseSidebar} />,
  );

  const closeSidebarButton = getByLabelText('close sidebar menu');
  user.click(closeSidebarButton);
  expect(mockCloseSidebar).toHaveBeenCalledTimes(1);
});
