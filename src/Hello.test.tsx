import * as React from 'react';
import * as enzyme from 'enzyme';
import Hello from './Hello';

it('renders the correct text for Hello Component', () => {
  const hello = enzyme.shallow(<Hello name="Daniel" />);
  expect(hello.text()).toEqual('Hello Daniel');
});
