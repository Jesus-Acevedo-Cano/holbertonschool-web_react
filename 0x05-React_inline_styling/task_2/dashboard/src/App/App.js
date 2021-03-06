import React, { Component } from 'react';
import Notifications from '../Notifications/Notifications';
import { getLatestNotification } from '../utils/utils';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import { StyleSheet, css } from 'aphrodite';

class App extends Component {
  constructor(props) {
    super(props);
    this.keyHandler = this.keyHandler.bind(this);
  };

  componentDidMount() {
    document.addEventListener("keydown", this.keyHandler);
  };

  keyHandler(event) {
    if (event.keyCode === 72 && event.ctrlKey) {
      alert('Logging you out');
      this.props.logOut();
    }
  };

  render() {
    const listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 }
    ];

    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: getLatestNotification() } }
    ];

    return (
      <React.Fragment>
      <Notifications listNotifications={listNotifications} />
      <div className='App'>
        <Header />
        <div className={css(s.body)}>
          {this.props.isLoggedIn ?
            <BodySectionWithMarginBottom title='Course list'>
              <CourseList listCourses={listCourses} />
            </BodySectionWithMarginBottom> :
            <BodySectionWithMarginBottom title='Log in to continue'>
              <Login/>
            </BodySectionWithMarginBottom>}
          <BodySection title='News from the School' /><p>Some random news</p>
        </div>
        <div className={css(s.footer)}>
        <Footer />
        </div>
      </div>
    </React.Fragment>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func
};

App.defaultProps = {
  isLoggedIn: false,
  logOut: (() => { })
};

const s = StyleSheet.create({
  body: {
    backgroundColor: '#fff',
    padding: '4rem',
    minHeight: '25rem',
  },
  footer: {
    display: 'flex',
    justifyContent: 'center',
    fontStyle: 'italic',
    borderTop: '3px solid #e0354b',
    width: '100%',
    position: 'relative',
    top: '16rem'
  }
});

export default App;
