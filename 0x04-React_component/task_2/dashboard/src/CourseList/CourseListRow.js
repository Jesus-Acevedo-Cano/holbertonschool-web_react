import React from 'react';
import PropTypes from 'prop-types';

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  let content = '';

  if (isHeader) {
    if (textSecondCell === null) {
      content = (<th colSpan='2'>{textFirstCell}</th>);
    }
    else {
      content = (<React.Fragment><th>{textFirstCell}</th><th>{textSecondCell}</th></React.Fragment>);
    }
  } else {
    content = (<React.Fragment><td>{textFirstCell}</td><td>{textSecondCell}</td></React.Fragment>);
  }

  return (<tr>{content}</tr>);
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

export default CourseListRow;
