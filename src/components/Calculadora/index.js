import React from 'react';
import InputNumber from '../InputNumber';
import Resultado from '../Resultado';
import './style.css';


export default function Calculadora(){

  const [input1, setInput1] = React.useState('');
  const [input2, setInput2] = React.useState('');

  const handleGetInput1 = event => {
    setInput1(event.target.value);
  }

  const handleGetInput2 = event => {
    setInput2(event.target.value);
  }

  return(
    <div className="container">
      <section className="header">
        <span className="emoji">👨‍🦳</span>
        <h1> Sr. Sominha </h1>
        <span>
        Oi, tudo bem? Vamos fazer uma continha? 🤙
        </span>
      </section>

      <section className="inputs">
        <InputNumber
          label = '1º número'
          id = 'n1'
          value = {input1}
          onInputChange = {handleGetInput1}
        /> 
        <InputNumber
          label = '2º número'
          id = 'n2'
          value = {input2}
          onInputChange = {handleGetInput2}
        /> 
      </section>
      <Resultado 
        numero1 = {input1}
        numero2 = {input2}
      />
        
    </div>
  );
}