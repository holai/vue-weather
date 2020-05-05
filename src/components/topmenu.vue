<template>
  <div class="menu">
	  <el-menu
	   :default-active="activeIndex"
		  class="el-menu-demo"
		  mode="horizontal"
		  @select="handleSelect"
		  background-color="#545c64"
		  text-color="#fff"
		  active-text-color="#ffd04b">
		  <el-menu-item index="/">天气预报</el-menu-item>
		  <el-menu-item index="/airport" disabled >机场天气</el-menu-item>
		  <el-menu-item><a href="https://www.kancloud.cn" target="_blank">接口地址</a></el-menu-item>
	  </el-menu>
  </div>
</template>
<style scoped>
	a{
		text-decoration: none;
	}
  .menu{
    background-color: rgb(84, 92, 100);
  }
  .el-menu-demo{
    max-width: 1200px;
    margin: 0 auto;
  }
</style>
<script>
export default {
  name: 'topmenu',
  data () {
    return {
		activeIndex: '/',
    }
  },
  methods:{
	   handleSelect(key, keyPath) {

      }
  }
}
</script>
