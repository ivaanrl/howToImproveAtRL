import { render } from '../../../test/testsUtils';
import TrainingPackCategories from '../trainingPackCategories';

const trainingPackCategories = {
  Striker: true,
  Defense: true,
};

test('renders properly with children', () => {
  const { getByRole } = render(
    <TrainingPackCategories categories={trainingPackCategories} />,
  );

  expect(getByRole('categories-container')).not.toBe(null);
  expect(
    getByRole('categories-container').childNodes.length,
  ).toBeGreaterThanOrEqual(1);
});
