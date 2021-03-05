import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import App from './App'
import Login from '../Login/Login'
import CourseList from '../CourseList/CourseList';


describe('Test App.js', () => {
  it('App without crashing', () => {
    expect(shallow(<App />).exists());
  });

  test('CourseList hide when isLoggedIn = false', () => {
    expect(shallow(<App />).find(CourseList)).to.have.lengthOf(0);
  });

  test('CourseList show and Login hide when isLoggedIn = true', () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.find(CourseList)).to.have.lengthOf(1);
    expect(wrapper.find(Login)).to.have.lengthOf(0);
  });
});
