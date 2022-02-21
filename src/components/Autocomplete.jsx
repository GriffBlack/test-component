import { useState, useEffect } from 'react';
import data from '../data.json';


const Autocomplete = () => {

     const [value, setValue] = useState('');

     const filteredAnimals = data.filter((data) => {
       return data.name.toLowerCase().includes(value.toLowerCase());
     });

  const takeType = (data) => {

    const typeAnimal = [];
    data.forEach((data) => {
        if (!typeAnimal.includes(data.type))
          typeAnimal.push(data.type);

      return typeAnimal;
    })
  };

  
  useEffect(() => {
    takeType(data)
    
  });
     
   return (
     <div className='form'>
       <input
         type='text'
         placeholder='Enter name'
         className='inputAuto'
         onChange={(event) => setValue(event.target.value)}
       />
       {/* <select>
         {typeAnimal.map((data, index) => {
           return <option>{typeAnimal.index}</option>;
         })}
       </select> */}
       <select>
         {filteredAnimals.map((data, index) => {
           return <option key={data.id}>{data.name}</option>;
         })}
       </select>
     </div>
   );
  
}

export default Autocomplete;