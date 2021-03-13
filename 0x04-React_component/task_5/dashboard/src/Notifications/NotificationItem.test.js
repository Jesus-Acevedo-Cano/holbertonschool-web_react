import React from 'react';
import { shallow } from 'enzyme';
import { expect as expected } from 'chai';
import NotificationItem from './NotificationItem';

describe('NotificationItem test', () => {
  test('Notificacionitem exist', () => {
    expected(shallow(<NotificationItem id={1} />).exists());
  });

  test('List items', () => {
    const wrapper = shallow(<NotificationItem type='default' value='test' id={1} />);    
    expected(wrapper.find('li')).to.have.lengthOf(1);
    expected(wrapper.find('li').props()).to.have.property('data-notification-type', 'default');
    expected(wrapper.find('li').text()).to.equal('test');
  });

  test('Inner HTML', () => {
    const wrapper = shallow(<NotificationItem html={{ __html: '<u>test</u>' }} id={1} />);
    expected(wrapper.html()).to.equal('<li data-notification-type="default"><u>test</u></li>');
  });

  test('markAsRead', () => {
    const wrapper = shallow(<NotificationItem type='default' value='test' id={1} />);
    const markAsRead = wrapper.instance().markAsRead = jest.fn();
    wrapper.find('li').first().simulate('click');
    markAsRead(1);
    expect(markAsRead).toHaveBeenCalled();
    expect(markAsRead).toHaveBeenCalledWith(1);
  });
});
