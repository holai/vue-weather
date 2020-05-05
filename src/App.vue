<template>
  <div id="app">
		<topmenu></topmenu>
    <index/>
  </div>
</template>

<script>
	import topmenu from '@/components/topmenu'
    import index from '@/components/index'
	export default {
  name: 'App',
	components:{
		topmenu,
    index
	},
}
</script>

<style>
#app {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
