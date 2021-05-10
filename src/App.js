import React, {Fragment, useState} from 'react';
import Header from './components/Header';
import Question from './components/Question';
import Gastos from './components/Gastos';
function App() {
  const [presupuesto, changePresupuesto] = useState(0);
  const [restante, changeRestante] = useState(0);

  const agregarPresupuesto = (presupuesto) => {
    changePresupuesto(presupuesto)
  }
  const agregarRestante = (restante) => {
    changeRestante(restante)
  }


  return (
    <Fragment>
      <Header title="Gasto Semanal Hoy" />
      <main>
          <Question title="Coloca tu presupuesto hoy" agregarPresupuesto={agregarPresupuesto} agregarRestante={agregarRestante} estado={presupuesto}></Question>
          <Gastos changeRestante={changeRestante} restante={restante} presupuesto={presupuesto}></Gastos>
      </main>
    </Fragment>
  );
}

export default App;
