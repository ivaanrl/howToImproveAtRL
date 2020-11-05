import { render } from '../../../test/testsUtils';
import user from '@testing-library/user-event';
import Sidebar from '../sidebar';

const mockCloseSidebar = jest.fn();

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => mockDispatch,
}));

const mockFetchContentCreators = jest.fn();
jest.mock('../../../redux/reducers/contentCreators', () => ({
  fetchContenCreators: () => mockFetchContentCreators,
}));

test('renders properly', () => {
  const { getByLabelText } = render(
    <Sidebar closeSidebar={mockCloseSidebar} />,
  );

  expect(getByLabelText('sidebar container')).not.toBeNull();
  expect(getByLabelText('close sidebar menu')).not.toBeNull();
  expect(mockDispatch).toHaveBeenCalled();
  expect(mockDispatch).toHaveBeenCalledTimes(1);
  expect(mockDispatch).toHaveBeenCalledWith(mockFetchContentCreators);
});

test('closeSidebar gets called', () => {
  const { getByLabelText } = render(
    <Sidebar closeSidebar={mockCloseSidebar} />,
  );

  const closeSidebarButton = getByLabelText('close sidebar menu');
  user.click(closeSidebarButton);
  expect(mockCloseSidebar).toHaveBeenCalledTimes(1);
});
