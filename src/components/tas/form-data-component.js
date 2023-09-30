
import { useState } from 'react';
import TasGraph from './TASGraph';

let nextId = 0;

export default function FormDataComponent() {
  const [sample, setSample] = useState('');
  const [si, setSi] = useState('');
  const [kna, setKna] = useState('');
  const [valueInput, setValueInput] = useState([]);

  function removeElement(id){
    let alteredList = valueInput.filter((item) => item.id !== id);
    setValueInput(alteredList);
  }


  return (
    <>
      <h1>Value Input:</h1>
      <label for='sample'>Sample</label>
      <input
        placeholder='Sample Name'
        value={sample}
        onChange={e => setSample(e.target.value)}
        />&nbsp;
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
          { id: nextId++, sample: sample, si: si, kna: kna}
        ]);
      }}>Add</button>
      <ul>
        {valueInput.map(value => (
          <li key={value.id}>
            {value.sample}: {value.si}, {value.kna} 
            <button onClick={() => {
              removeElement(value.id)
            }}>remove</button>
            </li>
        ))}
      </ul>
      <div>
        { <TasGraph chemData={valueInput}/>}
      </div>

    </>
  );
}


