<template>
	<view>
		<button @tap="handleLogin">发起请求</button>
	</view>
</template>

<script>
	import {
		login
	} from '@/api/user'
	export default {
		data() {
			return {

			}
		},
		methods: {
			handleLogin() {
				// 调用状态管理内的函数请求
				// user是store/index.js下定义的user名称，login是user这个文件内的请求函数
				// code跟iv是传送到store/modules/user.js下login函数内的参数
				this.$store.dispatch('user/login', {
					name: '无声',
					pwd: 123456
				}).then(result => {
					// 登陆成功的结果
					console.log(result)
				})
			},
		}
	}
</script>

<style>

</style>
