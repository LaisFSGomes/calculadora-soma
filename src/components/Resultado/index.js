

const Resultado = ({numero1, numero2}) => {
  if (numero1==='' || numero2===''){
    return(
      <p>
        Aguardando
      </p>
    );
  }else {
    return(
      <p>
        O resultado é {(parseFloat(numero1) + parseFloat(numero2)).toFixed(2)}
      </p>
    );
  }
} 


export default Resultado;