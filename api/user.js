// 接口按照模块划分
import request from '@/utils/request.js'

export function login(data) {
	return request({
		url: '/target/login',
		method: 'GET',
		data
	})
}
