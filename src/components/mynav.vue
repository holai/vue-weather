<template>
		<div class="mynav" style="margin-top: 15px;">
		  <el-input :placeholder="selectpl" v-model="input" class="input-with-select">
			<el-select v-model="select"  slot="prepend" :placeholder="oppl">
			  <el-option label="城市"  value="1"></el-option>
			  <el-option label="IP地址" value="2"></el-option>
			</el-select>
			<el-button slot="append" icon="el-icon-search" @click="sos()"></el-button>
		  </el-input>
		</div>
</template>
<style>
  .el-select .el-input {
    width: 130px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
</style>

<script>
	export default {
	  name: 'mynav',
	  data () {
	    return {
			select:'1',
			input: '',
			oppl:'定位模式',
	    }
	  },
		methods: {
			sos() {
				//appid:48168773,appsecret:'kmFQ8dgP'
				let hrefx = "https://www.tianqiapi.com/api/";
				let params = {version: "v1",appid:"48168773",appsecret:"kmFQ8dgP"};
				if(this.select == 1){				// 判断定位方式  1为 城市  2为 ip 地址
					params.city = this.input;
				}else{
					params.ip = this.input;
				}

				//  请求  输入框 的 城市 或者ip 地址
				this.$http.get(hrefx,{
					params
				}).then(res => {                   //请求成功后的处理函数
					this.$emit("lucd",res);     // 通过 空vue实例 向 其他组件(index组件) 传递值
				}).catch(err => {                 //请求失败后的处理函数
					alert("加载错误："+err);
					console.log(err)
				})

			}
		},
	  computed:{
		  selectpl:function(){
			  return this.$data.select == 1 ? "请输入城市" : "请输入IP地址"  ;
		  },
	  }
	}
</script>

<style>
  .mynav{
    max-width: 1200px;
    margin: 0 auto;
  }
</style>
