import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

process.env = {
  ...process.env,
  __NEXT_IMAGE_OPTS: ({
    deviceSizes: [320, 420, 768, 1024, 1200],
    imageSizes: [],
    domains: ['images.example.com'],
    path: '/_next/image',
    loader: 'default',
  } as unknown) as string, //Workaround because next/image can't be tested right now. It was released 2 days ago.
};
