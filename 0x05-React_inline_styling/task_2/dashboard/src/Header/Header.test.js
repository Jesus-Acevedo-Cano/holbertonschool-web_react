import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from '../App/App';
import Header from './Header'
import { StyleSheetTestUtils } from "aphrodite";

describe('App test', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('header renders without crashing', () => {
    expect(shallow(<Header />).exists())
  });

  it('verify correct class App-header', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<header className='App-header' />))
  });

  it('renders img and h1 components', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('img')).to.have.lengthOf(1);
    expect(wrapper.find('h1')).to.have.lengthOf(1)
  });
});
