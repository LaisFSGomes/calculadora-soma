import './style.css';
const InputNumber = ({label, id, value, onInputChange}) => {
  return(
    <section className="inputContainer">
      <label className='inputLabel' htmlFor= {id} > {label} </label>
      <input className="inputNumber"
        id={id}
        type = 'number'
        value={value}
        onChange={onInputChange}
      />
    </ section>
  );
}

export default InputNumber;