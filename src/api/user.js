import request from '@/utils/request'
import { encryptedData } from '@/utils/encrypt'
import { loginRSA, tokenSendName, tokenPrefix } from '@/config'

export async function login(data) {
  if (loginRSA) {
    data = await encryptedData(data)
  }
  return request({
    url: '/index/login',
    method: 'post',
    data,
  })
}

export function getUserInfo() {
  return request({
    url: '/index/userInfo',
    method: 'post',
    data: {},
  })
}

export function logout() {
  return request({
    url: '/index/logout',
    method: 'post',
  })
}

export function register() {
  return request({
    url: '/register',
    method: 'post',
  })
}
