import { render } from '../../../../test/testsUtils';
import DraggableCategories from '../draggableCategories';

const categories = { Striker: true, Passing: true, Offense: true };

test('renders properly', () => {
  const { getByText } = render(<DraggableCategories categories={categories} />);

  for (let key in categories) {
    expect(getByText(key)).toBeInTheDocument();
  }
});
