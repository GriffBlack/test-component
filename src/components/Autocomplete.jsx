import { Component, useState, useEffect } from 'react';
import data from '../data.json';


const Autocomplete = () => {

     const [value, setValue] = useState('');

     const filteredAnimals = data.filter((data) => {
       return data.type.toLowerCase().includes(value.toLowerCase());
     });

    //  const takeType = (data) => {
    //    const typeAnimal = [];

    //    return typeAnimal;
    //  };
     
   return (
     <div className='form'>
       <input
         type='text'
         placeholder='Enter the animal'
         className='inputAuto'
         onChange={(event) => setValue(event.target.value)}
       />
       <select>
         {filteredAnimals.map((data, index) => {
           return <option>{data.name}</option>;
         })}
       </select>
     </div>
   );
  
}

export default Autocomplete;