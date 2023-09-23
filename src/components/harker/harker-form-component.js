import {useState} from "react";

function Harker() {
    const [si, setSi] = useState('');

    return (
        <div>
            <h1>Harker Plots</h1>
            <label for="si">SiO<sub>2</sub></label>
            <input 
              placeholder="SiO2"
              value={si}
              onchange={e => setSi(e.target.value)}
            />
        </div>
    )
};
export default Harker;