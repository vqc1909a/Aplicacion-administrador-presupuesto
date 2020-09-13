import React from 'react';
import Gasto from './Gasto';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import definirColorRestante from '../helpers/definirColorRestante';
import PropTypes from 'prop-types';

const Listado = ({title, gastos, presupuesto, restante, eliminarGasto}) => {
     return (
          <div className="col-md-6">
               <h2 className="text-center">{title}</h2>
               <div className="row">
                    <div className="col-sm-6">
                         <div className="alert alert-success">Presupuesto: ${presupuesto}</div>
                    </div>
                    <div className="col-sm-6">
                         <div className={`alert ${definirColorRestante(presupuesto, restante)}`}>Restante: ${restante}</div>
                    </div>
               </div>
               <ul className="list-group list-group-flush">
                    <TransitionGroup component={null} className="gastos">
                              {gastos.map((gasto) => 
                                   <CSSTransition key={gasto.id} timeout={500} classNames="gasto">
                                        <Gasto  gasto={gasto} eliminarGasto={eliminarGasto}></Gasto>
                                   </CSSTransition>
                              )}
                    </TransitionGroup>
                         <li className="list-group-item d-flex justify-content-between align-items-center font-weight-bolder border-top border-primary">Total: <span className="p-3 bg-primary text-white">$ {presupuesto - restante}</span></li>
               </ul>

          </div>
     );
}

Listado.propTypes = {
     title: PropTypes.string.isRequired,
     gastos: PropTypes.array.isRequired,
     presupuesto: PropTypes.number.isRequired,
     restante: PropTypes.number.isRequired,
     eliminarGasto: PropTypes.func.isRequired
}
export default Listado;