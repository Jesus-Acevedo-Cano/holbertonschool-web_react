import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem'

describe('Test Notification.js', () => {
  it('Notification without crashing', () => {
    expect(shallow(<Notifications />).exists())
  });

  it('renders NotificationItem component', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('ul')).to.have.lengthOf(1);
    expect(wrapper.find(NotificationItem)).to.have.lengthOf(3)
  });

  it('first NotificationItem element renders the right html', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find(NotificationItem).first().html()).to.equal('<li data-notification-type="default">New course available</li>')
  });
});

