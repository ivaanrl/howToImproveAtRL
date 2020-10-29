import { render, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';
import { TrainingPack } from '../../../shared/interfaces';
import faker from 'faker';
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
