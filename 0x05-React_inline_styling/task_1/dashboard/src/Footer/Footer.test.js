import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from '../App/App';
import Footer from './Footer'
import { StyleSheetTestUtils } from "aphrodite";

describe('Footer test', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('Footer renders without crashing', () => {
    expect(shallow(<Footer />).exists())
  });

  it('correct class App-footer', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<footer className='App-footer' />))
  });

  it('renders Copyright text correctly', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.text('Copyright')).contain('Copyright')
  });
});
