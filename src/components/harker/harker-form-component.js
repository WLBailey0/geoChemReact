import {useState} from "react";
import HarkerPlot from './HarkerGraph';

function Harker() {
    // const [si, setSi] = useState('');
    const [active, setActive] = useState(false);

    return (
        <>
            <div>
                <h1>Harker Plots</h1>
                {/* <label for="si">SiO<sub>2</sub></label>
                <input 
                placeholder="SiO2"
                value={si}
                onchange={e => setSi(e.target.value)}
                /> */}
                <button onClick={() => 
                    setActive(true)}>
                    Harker Diagrams
                </button>
            </div>
            <div>
                {active && <HarkerPlot data={"FeO"} />}
                {active && <HarkerPlot data={"Al2O3"} />}
                {active && <HarkerPlot data={"MgO"} />}
                {active && <HarkerPlot data={"K2O"} />}
                {active && <HarkerPlot data={"TiO2"} />}
            </div>
        </>
    )
};
export default Harker;