<template>
	<div class="content">
		<div class="item y" v-for="i in data">
			<h2 class="date">{{i.day}}</h2>
			<h5 class="datex">{{i.week}}</h5>
			<div class="wea"> {{i.wea}} </div>
			<div class="tem"> {{i.tem}} </div>
			<div class="wind">{{i.win[0]}}</div>
			<div class="air" v-if="i.air"> <el-tag type="success">{{i.air+i.air_level}}  </el-tag> </div>
			<div class="air" v-else="i.air"> <el-tag type="success">{{i.index[5].level}}  </el-tag> </div>
		</div>
	</div>
</template>
<style >
	.content{
		padding: 5px;
	}
	.item{
		box-sizing: border-box;
		color: #fff;
		border: 1px solid #1c7ab0;
		float: left;
		width: 150px;
		height: 250px;
		line-height: 20px;
		margin: 10px;
	}
	.y{
		background: -ms-linear-gradient(top,#88a9ca,#bcd3e3);
		background: -moz-linear-gradient(top,#88a9ca,#bcd3e3);
		background: -webkit-gradient(linear,0% 0,0% 100%,from(#88a9ca),to(#bcd3e3));
		background: -o-linear-gradient(top,#88a9ca,#bcd3e3);
		background: linear-gradient(top,#88a9ca,#bcd3e3);
		background: -o-linear-gradient(top,#88a9ca,#bcd3e3);
	}
	.date{
		line-height:30px;
	}
	.wind{
		line-height:40px;
	}
	.air{
		line-height:50px;
	}
</style>
<script>
	export default {
		name: 'more',
		data() {
			return {
			}
		},
		props:{
       data:{}
		},
	}
</script>

<style>
</style>
