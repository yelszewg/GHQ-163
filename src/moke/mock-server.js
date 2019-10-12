
import Mock from 'mockjs'


import category from './data/category.json'
import categoryList from './data/categoryList.json'
import homeData from './homeData.json'


Mock.mock('/mock/home', {
  code: 0,
  data: homeData
})
Mock.mock('/mock/classification', {
  code: 0,
  data: category
})
Mock.mock('/mock/categoryList', {
  code: 0,
  data: categoryList
})

