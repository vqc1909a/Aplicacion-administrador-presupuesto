import React from 'react';
import PropTypes from 'prop-types';

const Success = ({message}) => {
     return (
          <div className="alert alert-success">{message}</div>
     );
}
Success.propTypes = {
     message: PropTypes.string.isRequired
}
export default Success;