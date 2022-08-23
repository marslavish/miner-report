import React from 'react';
import ReactECharts from 'echarts-for-react';
import './style.css';

const AllTestsLineChart = ({ barChartData }) => {
  const option = {
    tooltip: {},
    xAxis: {
      data: barChartData.type,
    },
    yAxis: {},
    series: [
      {
        name: barChartData.name,
        type: 'line',
        data: barChartData.data,
        smooth: true,
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

export default AllTestsLineChart;
