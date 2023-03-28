import React,{useState} from "react";
import style from "./Form.module.css";
import {Link} from 'react-router-dom';

function Form() {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
 
  const [age, setAge] = useState('');
  const [birthdate, setBirthdate] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ name, lastName, age, birthdate });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={style.form}>
      <h1> FORM </h1>
      <label>
        Name:
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
      </label>
    
      <label>
        Last Name:
        <input type="text" value={lastName} onChange={(event) => setLastName(event.target.value)} />
      </label>
      <br />
      
     
      <label>
        Age:
        <input type="number" value={age} onChange={(event) => setAge(event.target.value)} />
      </label>
      <br />
      <label>
        Birth Date:
        <input type="date" value={birthdate} onChange={(event) => setBirthdate(event.target.value)} />
      </label>
      <br />
      <button type="submit" >Submit</button>
      </div>
      <Link to ='/Form'></Link>
    </form>
  );
}

export default Form;

