import React, {useState, useEffect} from 'react';
import Form from './Form';
import Listado from './Listado';
const Gastos = ({changeRestante, restante, presupuesto}) => {
     const [gastos, changeGastos] = useState([]);
     const agregarGasto = (gasto) => {
          changeGastos([
               ...gastos,
               gasto
          ])
     }
     const eliminarGasto = (id) => {
          const newgastos = gastos.filter(gasto => gasto.id !== id);
          changeGastos([
               ...newgastos
          ])
     }
     useEffect(() => {
          let total = 0;
          gastos.forEach((gasto)=>{
               total += gasto.costo
          })
          changeRestante(presupuesto - total);
          // eslint-disable-next-line
     }, [gastos])

     if(!presupuesto) return null;
     return (
          <section className="gastos py-4">
               <div className="container">
                    <div className="row">
                         <Form title="Agrega tus gastos aquí" agregarGasto={agregarGasto} restante={restante}></Form>
                         <Listado title="Listado" gastos={gastos} presupuesto={presupuesto} restante={restante} eliminarGasto={eliminarGasto}></Listado>
                    </div>
               </div> 
          </section>
     );
}
 
export default Gastos;