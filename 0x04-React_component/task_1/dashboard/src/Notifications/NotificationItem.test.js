import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import NotificationItem from './NotificationItem';

describe('Test NotificationItem.js file', () => {
  it('Notificacionitem component without crashing', () => {
    expect(shallow(<NotificationItem />).exists())
  });

  it('renders li tag correctly', () => {
    const wrapper = shallow(<NotificationItem type='default' value='test' />);
    expect(wrapper.find('li')).to.have.lengthOf(1);
    expect(wrapper.find('li').props()).to.have.property('data-notification-type', 'default');
    expect(wrapper.find('li').text()).to.equal('test')
  });

  it(' renders html correctly', () => {
    const wrapper = shallow(<NotificationItem html={{ __html: '<u>test</u>' }} />);
    expect(wrapper.html()).to.equal('<li><u>test</u></li>')
  });
});
