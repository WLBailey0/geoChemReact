import {useState} from "react";
import HarkerPlot from './HarkerGraph';
import '../styles/harker-style.css'
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

            </div>
            <div id="div">
                <table id="harker-table">
                    <tbody>
                        <tr>
                            <td className="graph">{ <HarkerPlot name={"Al2O3"} data={[]}/>}</td>
                            <td className="graph">{ <HarkerPlot name={"FeO"} data={[1, 2]}/>}</td>
                        </tr>
                        <tr>
                            <td className="graph">{ <HarkerPlot name={"TiO2"} data={[]}/>}</td>
                            <td className="graph">{ <HarkerPlot name={"MgO"} data={[]}/>}</td>
                        </tr>
                        <tr>
                            <td className="graph">{ <HarkerPlot name={"K2O"} data={[]}/>}</td>
                            <td className="graph">{ <HarkerPlot name={"CaO"} data={[]} />}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
};
export default Harker;