import React from 'react'

//This is a sample Progress Bar component. Sample Datapoints are created for Dynamic Styling
const ProgressBar = () => {
    const dataPoints = 1;
  const maxValue = 100;
  let barFill = '0%';

  if (maxValue > 0) {
    barFill = Math.round((dataPoints / maxValue) * 100) + '%';
  }
  return (
    <div>
         <div className="chart-bar">
        <div
          className="chart-bar__fill"
          style={{
            width: barFill,
            "min-height": " 20px",
            "background-color": "green",
            'max-height': '100%',
            'max-width': '100%'

          }}
        ></div>
      </div>
    </div>
  )
}

export default ProgressBar