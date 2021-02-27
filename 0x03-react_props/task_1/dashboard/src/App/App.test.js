import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import App from './App'
import Notifications from '../Notifications/Notifications'
import Header from '../Header/Header'
import Login from '../Login/Login'
import Footer from '../Footer/Footer'

describe('Test App.js', () => {
  it('App without crashing', () => {
    expect(shallow(<App />).exists());
  });

  it('component Notifications exists', () => {
    expect(shallow(<Notifications />).exists());
  });

  it('component Header exists', () => {
    expect(shallow(<Header />).exists());
  });

  it('component Login exists', () => {
    expect(shallow(<Login />).exists());
  });

  it('component Footer exists', () => {
    expect(shallow(<Footer />).exists());
  });
});
