import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import CourseListRow from './CourseListRow'

describe('Test CourseListRow.js file', () => {
  it('CourseListRow component renders without crashing', () => {
    expect(shallow(<CourseListRow textFirstCell='test' />).exists())
  });

  it('isHeader True renders with one th tag', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell='test' />);
    expect(wrapper.find('th')).to.have.lengthOf(1);
    expect(wrapper.find('th').props()).to.have.property('colSpan', '2')
  });

  it('isHeader True renders with two th tags', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell='test' textSecondCell='test' />);
    expect(wrapper.find('th')).to.have.lengthOf(2)
  });

  it('isHeader False renders with two td tags', () => {
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell='test' textSecondCell='test' />);
    expect(wrapper.find('td')).to.have.lengthOf(2)
  });
});
