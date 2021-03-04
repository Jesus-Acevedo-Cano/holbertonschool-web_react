import React from 'react'
import './Notifications.css'
import closeicon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';

function Notifications({ displayDrawer }) {
  return (
    <div className="noti">
      <div className="menuItem">Your notifications</div>
      { displayDrawer ?
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
            <NotificationItem type='default' value='New course available' />
            <NotificationItem type='urgent' value='New resume available' />
            <NotificationItem type='urgent' html={{ __html: getLatestNotification() }} />
          </ul>
        </div>)
        : <></>
      }
    </div>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool
};

Notifications.defaultProps = {
  displayDrawer: false
};

export default Notifications;
