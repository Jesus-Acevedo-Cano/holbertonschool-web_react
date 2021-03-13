import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from '../App/App';
import Footer from './Footer'

describe('Test Footer.js file', () => {
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
