import React, {useState} from 'react';
import Error from './Error';
import Success from './Success';
const {
     v4: uuidv4
} = require("uuid");
const Gasto = ({title, agregarGasto, restante}) => {
     const [gasto, changeGasto] = useState({
          name: '',
          costo: '',
          error: '',
          success: ''
     })
     const {name, costo, error, success} = gasto;

     const handleGasto = (e) => {
          changeGasto({
               ...gasto,
               [e.target.name]: e.target.value
          })
     }

     const handleSubmit = (e) => {
          e.preventDefault();
          if(name.trim() === '' || costo.trim() === ''){
                changeGasto({
                     ...gasto,
                     error: 'Los campos son obligatorios',
                     success: ''
                })
                return null;
          }
          changeGasto({
               ...gasto,
               error: '',
               success: ''
          })
          if(isNaN(parseInt(costo)) || parseInt(costo) < 1){
               changeGasto({
                    ...gasto,
                    error: 'Por favor ingrese un costo válido',
                    success: ''
               })
               return null;
          }
          changeGasto({
               ...gasto,
               error: '',
               success: ''
          })
          if(restante  === 0){
               changeGasto({
                    ...gasto,
                    error: 'Presupuesto agotado',
                    success: ''
               })
               return null;
          }
          changeGasto({
               ...gasto,
               error: '',
               success: ''
          })
           if (restante - parseInt(costo) < 0) {
                changeGasto({
                     ...gasto,
                     error: 'Presupuesto sobrepasado',
                     success: ''
                })
                return null;
           }

          agregarGasto({
               ...gasto,
               costo: parseInt(costo),
               id: uuidv4()
          });
          changeGasto({
               name: '',
               costo: '',
               error: '',
               success: 'Gasto agregado'
          })
     }
     return (
          <div className="col-md-6 mb-5">
               <h2 className="text-center mb-4">{title}</h2>
               {error ? <Error message={error}></Error> : null}
               {success ? <Success message={success}></Success> : null}

               <form onSubmit={handleSubmit}>
                    <div className="form-group">
                         <label htmlFor="name">Nombre Gasto</label>
                         <input onChange={handleGasto} type="text" placeholder="Ej. Transporte" name="name" className="form-control form-control-lg" value={name} />
                    </div>
                    <div className="form-group">
                         <label htmlFor="costo">Costo Gasto</label>
                         <input onChange={handleGasto} type="text" placeholder="Ej. 300" name="costo" className="form-control form-control-lg" value={costo}/>
                    </div>
                    <button className="btn btn-primary btn-lg btn-block">Agregar Gasto</button>
               </form>
          </div>
     );
}
 
export default Gasto;