import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';
import { StyleSheetTestUtils } from "aphrodite";

describe('CourseList test', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  const listCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 }
  ];

  test('CourseList exist', () => {
    expect(shallow(<CourseList />).exists());
  });

  test('Rows', () => {
    expect(shallow(<CourseList listCourses={listCourses}/>).find(CourseListRow)).to.have.lengthOf(5);
  });

  test('CourseList render with an empty array', () => {
    let wrapper = shallow(<CourseList listCourses={[]}/>);
    expect(wrapper.find(CourseListRow)).to.have.lengthOf(3);
    wrapper = shallow(<CourseList />);
    expect(wrapper.find(CourseListRow)).to.have.lengthOf(3);
  });

  test('List of courses', () => {
    const wrapper = shallow(<CourseList listCourses={listCourses}/>);
    expect(wrapper.find(CourseListRow)).to.have.lengthOf(5);
  });

});
