import React from 'react';
import UiProgress from './index';

import { render } from '@testing-library/react';

describe('<UiProgress />', () => {
  it('should render the normal progressbar', () => {
    const { container } = render(<UiProgress value={20} />);

    expect(container).toMatchSnapshot();
  });

  it('should render the progress with a icon slot', () => {
    const { container } = render(
      <UiProgress value={50} leftIcon={<div>sample</div>} />
    );

    expect(container).toMatchSnapshot();
  });
});
