import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Table, Menu, Dropdown, Space, Button, Radio } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import StressTestingPieChart from './components/StressTestingPieChart';
import AlarmPieChart from './components/AlarmPieChart';
import CompleteBarChart from './components/CompleteBarChart';
import AllTestsLineChart from './components/AllTestsLineChart';
import * as data from './data';
import './style.css';

const SummaryReport = () => {
  const [dataFrequency, setDataFrequency] = useState('1');
  const [completeBarChartData, setCompleteBarChartData] = useState([
    data.completeBarChartData[0],
  ]);

  const handleMenuClick = (e) => {
    setCompleteBarChartData(
      data.completeBarChartData.filter((item) => item.name === e.key)
    );
  };

  const menu = (
    <Menu
      onClick={(e) => handleMenuClick(e)}
      items={[
        {
          label: 'hardware1',
          key: 'hardware1',
        },
        {
          label: 'hardware2',
          key: 'hardware2',
        },
        {
          label: 'hardware3',
          key: 'hardware3',
        },
      ]}
    />
  );

  return (
    <>
      <h1 className='title'>测试报告（概况）</h1>
      <nav>
        <Link to='/details'>Details</Link>
      </nav>
      <Row className='top'>
        <Col span={8} className=''>
          <div className='subtitle'>压测总数</div>
          <StressTestingPieChart
            pieChartData={data.stressTestingPieChartData}
            tableData={data.stressTestingtableData}
          />
        </Col>
        <Col span={8} className=''>
          <div className='subtitle'>报警总数</div>
          <AlarmPieChart
            pieChartData={data.alarmPieChartData}
            tableData={data.alarmTableData}
          />
        </Col>
        <Col span={8}>
          <div className='subtitle-wrapper'>
            <div className='subtitle'>Complete状态硬件分布</div>
            <Dropdown
              overlay={menu}
              trigger={['click']}
              placement='bottomRight'
            >
              <Button type='text'>
                hardware1
                <DownOutlined />
              </Button>
            </Dropdown>
          </div>
          <CompleteBarChart barChartData={completeBarChartData[0]} />
        </Col>
      </Row>
      <div className='middle'>
        <div className='subtitle'>全部测试报告折线图</div>
        <div className='subtitle-wrapper'>
          <Radio.Group
            value={dataFrequency}
            onChange={(e) => setDataFrequency(e.target.value)}
            style={{ margin: 16 }}
          >
            <Radio.Button value='1'>Default</Radio.Button>
            <Radio.Button value='5'>5minutes</Radio.Button>
          </Radio.Group>
          <Dropdown overlay={menu} trigger={['click']} placement='bottomRight'>
            <Button type='text'>
              hardware1
              <DownOutlined />
            </Button>
          </Dropdown>
        </div>
        <AllTestsLineChart barChartData={completeBarChartData[0]} />
      </div>
      <div className='bottom'>
        <div className='chart5'>汇总表格</div>
      </div>
    </>
  );
};

export default SummaryReport;
