import React from 'react';
import UiCard from './index';

import { render } from '@testing-library/react';

describe('<UiCard />', () => {
  it('should render the card with a sample content', () => {
    const { container } = render(<UiCard>That's a sample content</UiCard>);

    expect(container).toMatchSnapshot();
  });
});
