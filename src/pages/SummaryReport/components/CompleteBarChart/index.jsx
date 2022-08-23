import React from 'react';
import ReactECharts from 'echarts-for-react';
import './style.css';

const CompleteBarChart = ({ chartData }) => {
  const option = {
    tooltip: {},
    xAxis: {
      data: chartData.type,
    },
    yAxis: {},
    series: [
      {
        name: chartData.name,
        type: 'bar',
        data: chartData.data,
      },
    ],
  };

  return (
    <div className='chart-wrapper'>
      <ReactECharts
        option={option}
        className='pie-chart'
        style={{ height: 300 }}
      />
    </div>
  );
};

export default CompleteBarChart;
