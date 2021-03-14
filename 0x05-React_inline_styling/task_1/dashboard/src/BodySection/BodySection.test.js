import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import BodySection from './BodySection';
import { StyleSheetTestUtils } from "aphrodite";

describe('BodySection test', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('Render without crashing', () => {
    expect(shallow(<BodySection title='test' />).exists());
  });

  it('render "h2" with text "test title" and "p" with text "test children node"', () => {
    const wrapper = shallow(<BodySection title='test title'><p>test children node</p></BodySection>);
    expect(wrapper.find('h2')).to.have.lengthOf(1);
    expect(wrapper.find('h2').text()).to.equal('test title');
    expect(wrapper.find('p')).to.have.lengthOf(1);
    expect(wrapper.find('p').text()).to.equal('test children node');
  });
});
