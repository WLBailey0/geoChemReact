
import { useState } from 'react';
import TasGraph from './TASGraph';

let nextId = 0;

export default function List() {
  const [si, setSi] = useState('');
  const [kna, setKna] = useState('');
  const [valueInput, setValueInput] = useState([]);
  const [active, setActive] = useState(false)
  


  return (
    <>
      <h1>Value Input:</h1>
      <label for='si'>SiO2</label>
      <input
        placeholder='SiO2'
        value={si}
        onChange={e => setSi(e.target.value)}
      />&nbsp;
      <label for='nak'>K2O+Na2O</label>
      <input
      placeholder='K2O+Na2O'
      value={kna}
      onChange={e => setKna(e.target.value)}
      />
      <button onClick={() => {
        setValueInput([
          ...valueInput,
          { id: nextId++, name: si, kna: kna}
        ]);
      }}>Add</button>
      <ul>
        {valueInput.map(value => (
          <li key={value.id}>{value.name}, {value.kna}</li>
        ))}
      </ul>
      <button onClick={() => setActive(true)}>Graph</button>
      <div>
        {active && <TasGraph />}
      </div>

    </>
  );
}


