import React from 'react';
import ReactECharts from 'echarts-for-react';
import { Col, Row, Table } from 'antd';
import './style.css';

const AlarmPieChart = ({ pieChartData, tableData }) => {
  const option = {
    title: {
      text: 'Alarm',
      left: 'center',
      top: 'center',
      textStyle: {
        fontSize: '14',
        fontWeight: '400',
      },
    },
    series: [
      {
        type: 'pie',
        label: {
          show: false,
          position: 'outside',
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '14',
          },
        },
        data: pieChartData,
        radius: [50, 70],
      },
    ],
  };

  const columns = [
    {
      title: '类型',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '占比',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '报告次数',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  return (
    <div className='chart-wrapper'>
      <ReactECharts
        option={option}
        className='pie-chart'
        style={{ height: 300 }}
      />
      <Table
        dataSource={tableData}
        columns={columns}
        pagination={{ hideOnSinglePage: true }}
        className='pie-chart-table'
      />
    </div>
  );
};

export default AlarmPieChart;
