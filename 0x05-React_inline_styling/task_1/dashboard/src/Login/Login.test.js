import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from '../App/App';
import Login from './Login';
import { StyleSheetTestUtils } from "aphrodite";

describe('App test', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('Login renders without crashing', () => {
    expect(shallow(<Login />).exists());
  });

  it('correct class App-body', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<body className='App-body' />))
  });

  it('renders input and label components correctly', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input')).to.have.lengthOf(2);
    expect(wrapper.find('label')).to.have.lengthOf(2)
  });
});
