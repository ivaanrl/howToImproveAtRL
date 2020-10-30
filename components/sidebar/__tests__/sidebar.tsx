import { render } from '../../../test/testsUtils';
import Sidebar from '../sidebar';

const mockCloseSidebar = jest.fn();

test('renders properly', () => {
  const { getByLabelText } = render(
    <Sidebar closeSidebar={mockCloseSidebar} />,
  );

  expect(getByLabelText('sidebar container')).not.toBeNull();
  expect(getByLabelText('open sidebar menu')).not.toBeNull();
});
