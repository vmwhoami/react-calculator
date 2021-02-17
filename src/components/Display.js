import React from 'react';
import PropTypes from 'prop-types';

const Display = props => {
  const { next, result } = props;
  return (
    <>
      <h2>
        {next || result || '0'}
      </h2>
    </>
  );
};

Display.defaultProps = {
  result: '0',
  next: null,
};
Display.propTypes = {
  result: PropTypes.string,
  next: PropTypes.string,
};

export default Display;
