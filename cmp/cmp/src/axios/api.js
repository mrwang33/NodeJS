import {
  fetch
} from './fetch.js' // 引用fetch.js
import api from './url.js'
// 获取region
export function getRegion() {
  return fetch({
    url: api.urlWeb + '/region/getRegions',
    method: 'get'
  })
}
// 模拟登陆
export function getLogin(userAccount, userType) {
  return fetch({
    url: api.urlUser + '/vdcUser/login',
    method: 'POST',
    data: JSON.stringify({
      userAccount: userAccount,
      userType: userType
    })
  })
}

// 获取虚机列表
// const projectId = localStorage.getItem('projectId')
export function getEcsInfo() {
  return fetch({
    url: api.urlEcs + '/v1/' + localStorage.getItem('projectId') + '/servers/detail',
    method: 'get'
  })
}
