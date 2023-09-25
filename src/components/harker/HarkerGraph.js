import CanvasJSReact from '@canvasjs/react-charts';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function HarkerPlot({name, data}){
    function formatGraphData(data){
        let formatted = [];
        for (let i = 0; i < data.length; i++){
          formatted.push({x: parseFloat(data[i].si), 
            y: parseFloat(data[i].kna)})
        }
        return formatted;
      };
    const options = {
        axisY: {
            minimum: 0,
            title: name
        },
        axisX: {
            minimum: 0,
            maximum: 100,
            title: "SiO2"
        },
        data: [
          {
            type: "scatter",
            dataPoints:
                formatGraphData(data)
          }
        ]
    }
    return(
        <div>
           <CanvasJSChart options = {options}
           containerProps={{ width: '300px', height: '300px'}}
           />
        </div>
    )
}
export default HarkerPlot;