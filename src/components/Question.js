import React ,{useState} from 'react';
import PropTypes from 'prop-types';
import Error from './Error';
import Success from './Success';

const Question = ({title, agregarPresupuesto, agregarRestante, estado}) => {
     const [presupuesto, changePresupuesto] = useState({
          value: '',
          success: '',
          error: ''
     });
     const {value, success, error} = presupuesto;

     const handlePresupuesto = (e) => {
          changePresupuesto({
               ...presupuesto,
               value: e.target.value
          });
     }
     const handleSubmit = (e) => {
          e.preventDefault();
          if(value.trim() === ''){
               changePresupuesto({
                    ...presupuesto,
                    error: "El campo es requerido",
                    success: ''
               });
               return null;
          }
          changePresupuesto({
               ...presupuesto,
               error: "",
               sucess: ""
          });
          if(isNaN(parseInt(value)) || parseInt(value) < 1){
               changePresupuesto({
                    ...presupuesto,
                    error: "Ingrese un número valido por favor",
                    success: ''
               });
               return null;
          }
          agregarPresupuesto(parseInt(value));
          agregarRestante(parseInt(value));
          changePresupuesto({
               value: '',
               error: '',
               success: 'Presupuesto Agregado'
          });
     }
     if(estado) return null;

     return (
          <section className="question py-4">
               <div className="container">
                    <div className="row justify-content-center">
                         <div className="col-sm-10 col-md-8">
                              <div className="card bg-primary text-white">
                                   <header className="question-header card-header text-center py-3">
                                             <h2>{title}</h2>
                                   </header>
                                   <div className="question-body card-body">
                                        {error ? <Error message={error}></Error>: null}
                                        {success ? <Success message={success}></Success> : null}
                                        <form onSubmit={handleSubmit}>
                                             <div className="form-group">
                                                  <input type="text" placeholder="Presupuesto" value={value} className="form-control" onChange={handlePresupuesto}/>
                                             </div>
                                             <button className="btn btn-outline-light btn-block">Definir presupuesto</button>
                                        </form>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     );
}
Question.propTypes = {
     title: PropTypes.string.isRequired,
     agregarPresupuesto: PropTypes.func.isRequired,
     agregarRestante: PropTypes.func.isRequired,
     estado: PropTypes.number.isRequired
}
export default Question;