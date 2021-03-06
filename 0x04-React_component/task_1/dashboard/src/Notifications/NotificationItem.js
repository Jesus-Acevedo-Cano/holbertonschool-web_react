import React from 'react'

function NotificationItem(props) {
  if(props.value) return (
    <li data-notification-type={props.type}>{props.value}</li>
  );
  else return (
    <li data-notification-type={props.type} dangerouslySetInnerHTML={props.html}></li>
  );
}

export default NotificationItem;
