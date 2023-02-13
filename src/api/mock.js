import Mock from 'mockjs'
import homeAgreementApi from './mockSeverData/homeAgreement'
import homeProductApi from './mockSeverData/homeProduct'

//定义mock接口请求拦截
Mock.mock('/api/homeAgreement/getChooseCustomer','post',homeAgreementApi.getChooseCustomerData)

Mock.mock('/api/homeAgreement/getChooseCity','post',homeAgreementApi.getChooseCityData)

Mock.mock('/api/homeAgreement/getChooseDitch','post',homeAgreementApi.getChooseDitchData)

Mock.mock('/api/homeProduct/getQuarterList','post',homeProductApi.getQuarterListData)