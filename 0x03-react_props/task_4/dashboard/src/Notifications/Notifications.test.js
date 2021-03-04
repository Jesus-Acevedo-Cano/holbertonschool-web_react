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
    const wrapper = shallow(<Notifications displayDrawer={true}/>);
    expect(wrapper.find(NotificationItem)).to.have.lengthOf(3)
  });

  it('first NotificationItem element renders the right html', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find(NotificationItem).first().html()).to.equal('<li data-notification-type="default">New course available</li>')
  });

  test('Menu show when displayDrawer = false', () => {
    expect(shallow(<Notifications />).find('.menuItem')).to.have.lengthOf(1);
  });

  test('div.Notifications hide when displayDrawer = false', () => {
    expect(shallow(<Notifications />).find('.Notifications')).to.have.lengthOf(0);
  });

  test('Menu show when displayDrawer = true', () => {
    expect(shallow(<Notifications displayDrawer={true} />).find('.Notifications')).to.have.lengthOf(1);
  });

  test('div.Notifications show when displayDrawer = true', () => {
    expect(shallow(<Notifications displayDrawer={true}/>).find('.Notifications')).to.have.lengthOf(1);
  });
});
