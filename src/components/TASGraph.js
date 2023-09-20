import React from "react";
import { Line } from "react-chartjs-2";
import Chart from 'chart.js/auto';

function TASGraph(){

  const data = {
    labels: ['January', 'February', 'March',
    'April', 'May'],
    datasets: [
      {
        label: 'Rainfall',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [65, 59, 80, 81, 56]
      }
    ]
  }    
  
  return (
      <Line
        data={data}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Users Gained between 2016-2020"
            },
            legend: {
              display: false
            }
          }
        }}
      />
  );
}
//   return(
//     <div>
//       <h1>TAS GRAPH</h1>
//     </div>
//   );
// }

export default TASGraph;