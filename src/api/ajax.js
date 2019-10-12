import axios from 'axios'

export default function ajax(url, data = {}, method = 'GET') {
  return new Promise((resolve, reject) => {
    let promise
    if (method === 'Get') {
      promise = axios.get(url, {
        params: data
      })
    }else {
      promise = axios.post(url, data)
    }

    promise
      .then(response => {
        console.log('请求成功')
        resolve(response.data)
      })
      .catch(error => {
        alert('请求失败' + error.msg)
      })
  })
}