import React from 'react';
import PropTypes from 'prop-types';
const Error = ({message}) => {
     return (
          <div className="alert alert-danger">{message}</div>
     );
}
Error.propTypes = {
     message: PropTypes.string.isRequired
}
export default Error;