// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { useRequest } from 'ahooks';
import request from '../../services/request';
import { iGetReportData } from '../../services/interfaces';
import { message } from 'antd';
import { getQueryString } from '../../utils/url';
import { ReportTemplate } from 'miner-stress-testing-report-template';
import 'miner-stress-testing-report-template/lib/main.min.css';
import { Link } from 'react-router-dom';

const DetailReport = () => {
  const [attribute, setAttribute] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [alterData, setAlterData] = useState([]);

  const setReportDetails = (record) => {
    const lastRecordData = record.records[record.records.length - 1];
    setAttribute({
      ip: record.ip,
      mac: record.mac,
      ...lastRecordData,
    });
    setChartData(
      record.records.map((item) => {
        return {
          dataTime: item?.dataTime,
          hashrate: item?.realtime || 0,
          averageHashRate: item?.average || 0,
          rejectionRate:
            item?.rejected / (item?.rejected + item?.accepted) || 0,
          speedPercentage: item.speedPercentage || 0,
          temperature: item?.temperature || 0,
          board0Temp: item?.board0Temp || 0,
          board1Temp: item?.board1Temp || 0,
          board2Temp: item?.board2Temp || 0,
          board3Temp: item?.board3Temp || 0,
          deFreq: item?.deFreq || 0,
          fan1Speed: item?.fan1 || 0,
          fan2Speed: item?.fan2 || 0,
        };
      })
    );
    setAlterData({
      current: record.alters
        .filter((item) => item.stopTime === 0)
        .map((item) => ({ ...item, alterTime: new Date().getTime() })),
      history: record.alters
        .filter((item) => item.stopTime !== 0)
        .map((item) => ({ ...item, alterTime: item.stopTime * 1000 })),
    });
  };

  const { run: getReportData, loading: getReportDataLoading } = useRequest(
    (params) =>
      request(iGetReportData, {
        params,
      }),
    {
      manual: true,
      onSuccess: (result) => {
        if (result?.code === 200) {
          setReportDetails(result?.data);
        } else {
          message.error(result?.message);
        }
      },
    }
  );

  useEffect(() => {
    // 请求报告数据
    getReportData({
      id: getQueryString('id'),
    });
  }, []);

  return (
    <>
      <h1 className='title'>测试报告（详情）</h1>
      <nav>
        <Link to='/'>Summary</Link>
      </nav>
      <ReportTemplate
        attribute={attribute}
        chartData={chartData}
        alterData={alterData}
      />
    </>
  );
};

export default DetailReport;
