import React from 'react';
import UiPage from './index';

import { render } from '@testing-library/react';

describe('<UiPage />', () => {
  it('should render the page with a sample content', () => {
    const { container } = render(
      <UiPage>That's a sample content for the page</UiPage>
    );

    expect(container).toMatchSnapshot();
  });
});
