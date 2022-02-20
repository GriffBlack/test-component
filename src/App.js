import { useState } from 'react';
import './App.css';
import data from './data.json'

function App() {


  const [value, setValue] = useState('')

  const filteredAnimals = data.filter(data => {
    return data.type.toLowerCase().includes(value.toLowerCase())
  })



  return (
    <div className="App">
      <header className="App-header">
        <input
          type="text"
          placeholder='Enter the animal'
          className='inputAuto'
          onChange={(event) => setValue(event.target.value)}
        />
        <select>
          {filteredAnimals.map((data, index) => {
            return (
              <option>{data.name}</option>
              
            )
          })}
        </select>
        <div className='post'>
          {/* {data.map(animal => {
            return (
              
                  <h4>{animal.type}</h4>

            )
          })} */}
        </div>
      </header>
    </div>
  );
}

export default App;
