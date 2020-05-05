<template>
  <div class="city"
		v-loading="loading"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
	>

     <mynav @lucd="lucd"></mynav>

		<el-card class="box-card">
				<span>当前城市：</span>
				<h1 class="city_title">{{city}}</h1>
				<span class="timex">时间：</span>
				<span class="time">{{time}}</span>

				<span class="timex"></span>
		</el-card>

		<mybody :wdata="data"></mybody>
  </div>
</template>

<script>
	import mybody from '@/components/mybody'
	import mynav from '@/components/mynav'
    
  export default {
   name: 'index',
	 data(){
		 return {
			 loading:true,
			 data:'',
			 city:'未加载',
			 time:'未加载',
		 }
	 },
 	components:{
 		mybody,
    mynav

 	},
  methods:{
    lucd(res){
      this.data = res.data.data
      this.city = res.data.city;
      this.time = res.data.update_time;
    }
  },
		  created() {
					// 请求version=v1&appsecret=kmFQ8dgP&appid=48168773
				   	this.$http.get('https://www.tianqiapi.com/api/',{
				   	params: {                           //参数
              appid:48168773,
              appsecret:'kmFQ8dgP'
				   	},
				   }).then(res => {                   //请求成功后的处理函数
				   	this.loading = false;
				   	this.data = res.data.data
				   	this.city = res.data.city;
				   	this.time = res.data.update_time;
				   }).catch(err => {                 //请求失败后的处理函数
				   	alert("加载错误："+err);
				   	console.log(err)
				   })

			}
 }
</script>

<style scoped>
	.city{
		max-width: 1200px;
		padding:10px;
    margin: 0 auto;
	}
	.box-card{
    margin-top: 10px;
		text-align: left;
	}
	.ms{
		float: left;
	}
	.box-card span{
		font-size: .5rem;
		color: #8C939D;
	}
	.city_title{
		display: inline;
	}
	.timex{
		margin-left:4rem;

	}
</style>
