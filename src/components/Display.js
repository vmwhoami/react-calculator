import React from 'react';
import PropTypes from 'prop-types';

const Display = props => {
  const { result } = props;
  return (
    <>
      <h2>
        Display Panel
        {result}
      </h2>
    </>
  );
};

Display.defaultProps = {
  result: 'O',
};
Display.propTypes = {
  result: PropTypes.string,
};

export default Display;
