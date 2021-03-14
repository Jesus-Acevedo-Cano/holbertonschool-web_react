import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  let content = '';
  let bgColor = '';
  const headerBg = { backgroundColor: '#deb5b545' };
  const rowBg = { backgroundColor: '#f5f5f5ab' };

  if (isHeader) {
    bgColor = headerBg;
    if (textSecondCell === null) {
      content = (<th className={css(s.thHeader)} colSpan='2'>{textFirstCell}</th>);
    }
    else {
      content = (<React.Fragment><th className={css(s.thSubHeader)}>{textFirstCell}</th>
        <th className={css(s.thSubHeader)}>{textSecondCell}</th></React.Fragment>);
    }
  } else {
    bgColor = rowBg;
    content = (<React.Fragment><td>{textFirstCell}</td><td>{textSecondCell}</td></React.Fragment>);
  }

  return (<tr style={bgColor}>{content}</tr>);
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null
};

const s = StyleSheet.create({
  thHeader: {
    textAlign: 'center',
    borderBottom: '1px solid lightgray',
    padding: '3px'
  },
  thSubHeader: {
    borderBottom: '1px solid lightgray',
    textAlign: 'left',
    padding: '3px'
  },
});

export default CourseListRow;
