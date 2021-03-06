import React from 'react';
import { shallow } from 'enzyme';
import { expect as expected } from 'chai';
import { getLatestNotification } from '../utils/utils';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';
import { StyleSheetTestUtils } from "aphrodite";

describe('Notification test', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  const listNotifications = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', html: { __html: getLatestNotification()} }
  ];

  test('Notification exist', () => {
    expected(shallow(<Notifications />).exists());
  });

  test('List items', () => {
    expected(shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />).find(NotificationItem)).to.have.lengthOf(3);
  });

  test('Menu show when displayDrawer = false', () => {
    expected(shallow(<Notifications />).find('div#menuItem')).to.have.lengthOf(1);
  });

  test('div.Notifications hide when displayDrawer = false', () => {
    expected(shallow(<Notifications />).find('.Notifications')).to.have.lengthOf(0);
  });

  test('Menu show when displayDrawer = true', () => {
    expected(shallow(<Notifications displayDrawer={true} />).find('div#Notifications')).to.have.lengthOf(1);
  });

  test('div.Notifications show when displayDrawer = true', () => {
    expected(shallow(<Notifications displayDrawer={true} />).find('div#Notifications')).to.have.lengthOf(1);
  });

  test('Empty array / don’t pass the listNotifications', () => {
    let wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
    expected(wrapper.find(NotificationItem)).to.have.lengthOf(1);
    wrapper = shallow(<Notifications displayDrawer={true} />);
    expected(wrapper.find(NotificationItem)).to.have.lengthOf(1);
  });

  test('List of notifications/ Right number of NotificationItem', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications}  />);
    expected(wrapper.find(NotificationItem));
    expected(wrapper.find(NotificationItem)).to.have.lengthOf(3);
  });

  test('Check function "markAsRead"', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    console.log = jest.fn();
    wrapper.instance().markAsRead(1);
    expect(console.log).toHaveBeenCalled()
  });

  const NOupdated = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
  ];

  const updated = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
    { id: 4, type: 'default', value: 'New updates' },
  ];

  test('Updating props same list', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    const shouldComponentUpdate = jest.spyOn(Notifications.prototype, 'shouldComponentUpdate');
    wrapper.setProps({ listNotifications: NOupdated });
    expect(shouldComponentUpdate).toHaveBeenCalled();
    expect(shouldComponentUpdate).toHaveLastReturnedWith(false);
  });

  test('Updating propswith a longer list', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    const shouldComponentUpdate = jest.spyOn(Notifications.prototype, 'shouldComponentUpdate');
    wrapper.setProps({ listNotifications: updated });
    expect(shouldComponentUpdate).toHaveBeenCalled();
    expect(shouldComponentUpdate).toHaveLastReturnedWith(true);
  });

});
