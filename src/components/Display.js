import React from 'react';
import PropTypes from 'prop-types';

const Display = props => {
  const { next, result, operation } = props;
  return (
    <>
      <h2>
        {next || operation || result || '0'}
      </h2>
    </>
  );
};

Display.defaultProps = {
  result: '0',
  next: null,
  operation: null,
};
Display.propTypes = {
  result: PropTypes.string,
  next: PropTypes.string,
  operation: PropTypes.string,
};

export default Display;
