/** Request 网络请求工具 更详细的 api 文档: https://github.com/umijs/umi-request */
// @ts-nocheck
import { extend } from 'umi-request';
import { notification } from 'antd';

const errorHandler = (error: { response: any; data: any; }) => {
  const { response, data } = error;

  if (response && response.status) {
    if (response.status === 401) {
      return data;
    }
  } else if (!response) {
    notification.error({
      description: 'Your network is abnormal and cannot connect to the server',
      message: 'Network anomaly',
    });
  }

  return data;
};
/**
 * @en-US Configure the default parameters for request
 * @zh-CN 配置request请求时的默认参数
 */

const request = extend({
  errorHandler,
  // default error handling
  credentials: 'include', // Does the default request bring cookies
});

/**
 * 参考https://github.com/ant-design/ant-design-pro/issues/3962
 * 配置request请求时的默认参数
 */
request.interceptors.request.use((url, options) => {
  const data = localStorage.getItem("minerva-stress-testing-system-data") && JSON.parse(localStorage.getItem("minerva-stress-testing-system-data")!);
  return (
    {
      url,
      options: {
        ...options,
        headers: {
          ...options.headers,
          'Authorization': options?.headers?.Authorization ?? `Bearer ${data?.user?.token}`,
        }
      },
    }
  );
});

request.interceptors.response.use(async response => {
  const data = await response.clone().json();
  if (data.code === 401) {
    // history.push(`/login`);
  } else if (data.code === 403) {
    history.push(`/404`);
  }
  return response;
});


export default request;

// export default {
//   errorHandler: error => {
//     console.log(123123)
//     if (error.name === 'BizError') {
//       if (error.info.showType === 9) {
//         // your code
//       }
//     }
//   },
// };
