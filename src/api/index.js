import ajax from './ajax'

const prefix = '/api'

export const reqCategoryList = () => ajax('/mock/categoryList') //识物

export const reqHome = () => ajax('/mock/home') //主页

export const reqClassification = () => ajax('/mock/classification') //分类

export const reqGeneral = () => ajax('/topic/v1/find/getTabs.json')

