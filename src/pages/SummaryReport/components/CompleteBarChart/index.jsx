import React from 'react';
import ReactECharts from 'echarts-for-react';
import './style.css';

const CompleteBarChart = ({ barChartData }) => {
  const option = {
    tooltip: {},
    xAxis: {
      data: barChartData.type,
    },
    yAxis: {},
    series: [
      {
        name: barChartData.name,
        type: 'bar',
        data: barChartData.data,
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
