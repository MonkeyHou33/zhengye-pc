import http from '../utils/request'

//请求首页数据接口
export const getChooseCustomer = () => {
  //返回一个Promise对象
  return http.post('/homeAgreement/getChooseCustomer')
}

//请求销售城市数据接口
export const getChooseCity = () => {
  //返回一个Promise对象
  return http.post('/homeAgreement/getChooseCity')
}

//请求指定渠道数据接口
export const getChooseDitch = () => {
  //返回一个Promise对象
  return http.post('/homeAgreement/getChooseDitch')
}