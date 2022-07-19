// 引用用户请求api
import {
	login
} from '@/api/user';

import {
	setToken
} from '@/utils/auth';

const actions = {
	login({
		commit
	}, {
		name,
		pwd
	}) {
		return new Promise((resolve, reject) => {
			login({
				name, // 请求参数(可自行修改)
				pwd // 请求参数(可自行修改)
			}).then(response => {
				// 这里可以自己添加方法
				// 保存获取到的token到本地之类的
				// 必须在resolve之前执行
				setToken(response.token) //将获取到的token保存到本地
				resolve(response)
			}).catch(error => {
				console.log(error)
			})
		})
	}
};

export default actions
