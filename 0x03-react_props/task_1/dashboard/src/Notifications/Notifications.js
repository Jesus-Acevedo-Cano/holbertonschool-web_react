import React from 'react'
import './Notifications.css'
import closeicon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';

function notifications() {
  return (
    <div className='Notifications'>
      <button style={{
        position: 'absolute',
        right: 1+'rem',
        top: 1+'rem',
        border: 'none',
        background: 'transparent',
        outline: 'none'
      }} aria-label='Close' onClick={() => console.log('Close button has been clicked')}>
        <img src={closeicon} alt='close-icon' style={{width: 10, height: 10}} />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority='default'>New course available</li>
        <li data-priority='urgent'>New resume available</li>
        <li data-priority='urgent' dangerouslySetInnerHTML={{__html: getLatestNotification()}}></li>
      </ul>
    </div>
  );
}

export default notifications;
