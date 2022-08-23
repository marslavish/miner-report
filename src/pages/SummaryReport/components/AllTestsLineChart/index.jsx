import React from 'react';
import ReactECharts from 'echarts-for-react';
import './style.css';

const AllTestsLineChart = ({ chartData }) => {
  const option = {
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      data: chartData.legend,
    },
    xAxis: {
      data: ['8:00', '10:00', '12:00', '14:00', '16:00'],
    },
    yAxis: {},
    series: chartData.series,
    dataZoom: [
      {
        type: 'slider',
        xAxisIndex: 0,
        filterMode: 'none',
      },
    ],
  };

  return <ReactECharts option={option} style={{ height: 400 }} />;
};

export default AllTestsLineChart;
