import React, { Component } from 'react'
import './Notifications.css'
import closeicon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import PropTypes from 'prop-types';

class Notifications extends Component {
  shouldComponentUpdate(nextProps) {
    return (
      nextProps.listNotifications.length > this.props.listNotifications.length
    );
  }
  render() {
    return (
      <div className="noti">
        <div className="menuItem">Your notifications</div>
        { this.props.displayDrawer ?
          (<div className="Notifications">
            <button style={{
              position: "absolute",
              right: "1rem",
              margintop: "0.5rem",
              border: "none",
              background: "transparent",
              outline: "none"
            }} aria-label='Close' onClick={() => console.log('Close button has been clicked')}>
              <img src={closeicon} alt='close-icon' style={{ width: 10, height: 10 }} />
            </button>
            <p>Here is the list of notifications</p>
            <ul>
              {this.props.listNotifications.length === 0 ? (<NotificationItem id={0} value="No new notification for now" type='no-new' markAsRead={this.markAsRead} />) : <></>}
              {this.props.listNotifications.map((list) => (<NotificationItem id={list.id} key={list.id} type={list.type} value={list.value} html={list.html} markAsRead={this.markAsRead} />))}
            </ul>
          </div>)
          : <></>
        }
      </div>
    )
  };
  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`)
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape)
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: []
};

export default Notifications;
