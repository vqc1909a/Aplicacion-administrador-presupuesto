const definirColorRestante = (presupuesto, restante) => {
     if (restante >= presupuesto * .5) {
          return 'alert-success'
     } else if (restante < presupuesto * .5 && restante >= presupuesto * .25) {
          return 'alert-warning'
     } else if (restante < presupuesto * .25) {
          return 'alert-danger'
     }
}
 
export default definirColorRestante;