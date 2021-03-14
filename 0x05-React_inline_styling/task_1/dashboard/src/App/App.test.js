import React from 'react'
import { shallow } from 'enzyme'
import { expect as expected } from 'chai'
import App from './App'
import Login from '../Login/Login'
import CourseList from '../CourseList/CourseList';
import { StyleSheetTestUtils } from "aphrodite";

describe('App test', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  let events = {};

  beforeEach(() => {
    events = {}; // Empty our events before each test case
    // Define the addEventListener method with a Jest mock function
    document.addEventListener = jest.fn((event, callback) => {
      events[event] = callback;
    });
  });

  it('App without crashing', () => {
    expected(shallow(<App />).exists());
  });

  test('CourseList hide when isLoggedIn = false', () => {
    expected(shallow(<App />).find(CourseList)).to.have.lengthOf(0);
  });

  test('CourseList show and Login hide when isLoggedIn = true', () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expected(wrapper.find(CourseList)).to.have.lengthOf(1);
    expected(wrapper.find(Login)).to.have.lengthOf(0);
  });

  it('Verify that press ctrl+h call the "logOut" function', () => {
    const logOut = jest.fn(() => void (0));
    shallow(<App />);
    window.alert = logOut;
    events.keydown({ keyCode: 72, ctrlKey: true });
    expect(logOut).toHaveBeenCalled();
  });
});
