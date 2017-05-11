import React from 'react';
import {shallow} from 'enzyme';
import Demo from '../components/demo';

test('The Demo component should be successfully rendered.', () => {
  const components = shallow(<Demo />);
  expect(components.contains(<h1 className="text-center">Basic React Boilerplate</h1>)).toEqual(true);
});