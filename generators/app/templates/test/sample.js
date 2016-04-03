import React from 'react';
import ReactComponent from '../src';
import { shallow } from 'enzyme';

describe('sample test', function() {
  it('should', function() {
    const wrapper = shallow(<ReactComponent />);
    expect(wrapper.props().children).toBe('Hello world');
  });
});