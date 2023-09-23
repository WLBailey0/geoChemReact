// import React from "react";
import CanvasJSReact from '@canvasjs/react-charts';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function TasGraph({chemData}) {
  
  function formatGraphData(data){
    let formatted = [];
    for (let i = 0; i < data.length; i++){
      formatted.push({x: parseFloat(data[i].si), 
        y: parseFloat(data[i].kna)})
    }
    return formatted;
  };
  const options = {
    title: {
      text: "TAS Plot"
    },
    axisY: {
      minimum: 0,
      maximum: 18
    },
    axisX: {
      minimum: 34,
      maximum: 85
    },

    data: [    
      {
        type: "scatter",
        dataPoints: 
          formatGraphData(chemData)
        
      },    
      {
        lineColor: "black",
        type: "line",
        dataPoints: [
          {x:41, y: 1}, 
          {x: 41, y:7}
        ]
      },
      {
        lineColor: "black",
        type: "line",
        dataPoints: [
          {x:45, y: 1}, 
          {x: 45, y:5}
        ]
      },
      {
        lineColor: "black",
        type: "line",
        dataPoints: [
          {x:52, y: 1}, 
          {x: 52,y:5}
        ]
      },
      {
        lineColor: "black",
        type: "line",
        dataPoints: [
          {x:57, y: 1}, 
          {x: 57,y:6}
        ]
      },
      {
        lineColor: "black",
        type: "line",
        dataPoints: [
          {x:63, y: 1}, 
          {x: 63,y:7}
        ]
      },
      {
        lineColor: "black",
        type: "line",
        dataPoints: [
          {x:77, y: 1}, 
          {x: 69, y:8}
        ]
      },
      {
        lineColor: "black",
        type: "line",
        dataPoints: [
          {x:69, y: 8}, 
          {x: 69, y: 13}
        ]
      },
      {
        lineColor: "black",
        type: "line",
        dataPoints: [
          {x:63, y: 7}, 
          {x: 69, y: 8}
        ]
      },
      {
        lineColor: "black",
        type: "line",
        dataPoints: [
          {x:45, y: 5}, 
          {x: 52, y: 5}
        ]
      },
      {
        lineColor: "black",
        type: "line",
        dataPoints: [
          {x:52, y: 5}, 
          {x: 57,y: 6}
        ]
      },
      {
        lineColor: "black",
        type: "line",
        dataPoints: [
          {x:63, y: 7}, 
          {x: 57,y: 6}
        ]
      },
      {
        lineColor: "black",
        type: "line",
        dataPoints: [
          {x:41, y: 7}, 
          {x: 45, y: 9}
        ]
      },
      {
        lineColor: "black",
        type: "line",
        dataPoints: [
          {x:45, y: 9}, 
          {x: 49, y: 11.5}
        ]
      },
      {
        lineColor: "black",
        type: "line",
        dataPoints: [
          {x:52, y: 14}, 
          {x: 49, y:11.5}
        ]
      },
      {
        lineColor: "black",
        type: "line",
        dataPoints: [
          {x:50, y: 15}, 
          {x: 52, y:14}
        ]
      },
      {
        lineColor: "black",
        type: "line",
        dataPoints: [
          {x: 52, y: 14}, 
          {x: 57.5, y:11.5}
        ]
      },
      {
        lineColor: "black",
        type: "line",
        dataPoints: [
          {x: 60, y: 13}, 
          {x: 57.5, y:11.5}
        ]
      },
      {
        lineColor: "black",
        type: "line",
        dataPoints: [
          {x: 45, y: 9}, 
          {x: 49, y:7}]
      },
      {
        lineColor: "black",
        type: "line",
        dataPoints: [
          {x: 49, y: 7}, 
          {x: 52, y:5}
        ]
      },
      {
        lineColor: "black",
        type: "line",
        dataPoints: [
          {x: 45, y: 5}, 
          {x: 49, y:7}
        ]
      },
      {
        lineColor: "black",
        type: "line",
        dataPoints: [
          {x:49, y:11.5}, 
          {x: 53, y: 9.5}
        ]
      },
      {
        lineColor: "black",
        type: "line",
        dataPoints: [
          {x:49, y: 7}, 
          {x: 53, y: 9.5}
        ]
      },
      {
        lineColor: "black",
        type: "line",
        dataPoints: [
          {x:53, y: 9.5}, 
          {x: 57.5, y: 11.5}
        ]
      },
      {
        lineColor: "black",
        type: "line",
        dataPoints: [
          {x:57.5 , y: 11.5}, 
          {x: 63, y: 7}
        ]
      },
      {
        lineColor: "black",
        type: "line",
        dataPoints: [
          {x:53, y: 9.5}, 
          {x: 57, y: 6}
        ]
      },
      {
        lineColor: "black",
        type: "line",
        dataPoints: [
          {x:41, y: 3}, 
          {x: 45, y: 3}
        ]
      }
    ]
  }
  
  return (
    <div>
      <CanvasJSChart options = {options}
      containerProps={{ width: '33%', height: '33%' }}
        /* onRef = {ref => this.chart = ref} */
      />
      </div>
  );
}

export default TasGraph;