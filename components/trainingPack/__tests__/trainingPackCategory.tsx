import { render } from '../../../test/testsUtils';
import TrainingPackCategory from '../trainingPackCategory';
import { theme } from '../../../styles/theme';
import { ThemeProvider } from 'styled-components';

function Wrapper({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

test('renders with correct color', () => {
  let label = 'Striker';
  const { getByRole, rerender } = render(
    <TrainingPackCategory label={label} />,
  );
  const labelButton = getByRole('button', { name: label });

  expect(labelButton).toHaveStyleRule('background-color', theme.offensiveColor);

  label = 'Defense';
  rerender(<TrainingPackCategory label={label} />);
  expect(labelButton).toHaveStyleRule('background-color', theme.defensiveColor);

  label = 'Passing';
  rerender(<TrainingPackCategory label={label} />);
  expect(labelButton).toHaveStyleRule('background-color', theme.supportColor);
});
