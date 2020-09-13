import React from 'react';
import PropTypes from 'prop-types';
const Gasto = ({gasto, eliminarGasto}) => {
     const {name, costo, id} = gasto
     return (
          <li className="list-group-item d-flex justify-content-between align-items-center">{name}<i className="far fa-trash-alt" onClick={() => eliminarGasto(id)}></i><span className="p-3 bg-secondary text-white">$ {costo}</span></li>
     );
}
Gasto.propTypes = {
     gasto: PropTypes.object.isRequired,
     eliminarGasto: PropTypes.func.isRequired
}
export default Gasto;