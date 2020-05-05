<template>
	<el-card class="box">
		<el-tabs v-model="activeName" >
			<el-tab-pane label="今天" class="frist" name="first">
				<el-row>
					 <el-col class="bleft" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
						 <el-row >
							<el-col :span="14">
								<div id="myChart"></div>
							</el-col>
							<el-col :span="10">
								<div class="win"><b>白天温度：</b><i>{{cdata[0].tem1}}</i></li></div>
								<div class="win"><b>晚上温度：</b><i>{{cdata[0].tem2}}</i></li></div>
							</el-col>
						</el-row>


					 </el-col>
					<el-col el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" >
						<div class="filter">
							<div class="wea">
									<b>当前天气：</b><i>{{cdata[0].wea}}</i>
							</div>
							<ul class="parameter">
								<li>
									<b>空气质量：</b><span id="aqiHref" class="aqi-icon aqi-icon-lv2"></span><i id="aqiText">{{cdata[0].air_level}}</i><s></s>
								</li>
								<li>
									<b>当前气温：</b><i>{{cdata[0].tem}}</i></li>
								<li>
									<b>风向：</b><i>{{cdata[0].win[0]}}</i>
								</li>
								<li>
									<b>风力：</b><i>{{cdata[0].win_speed}}</i>
								</li>
								<li>
									<b>湿度：</b><i>{{cdata[0].humidity}}</i>
								</li>
								<li>
									<b>紫外线强度：</b><i>{{cdata[0].index[0].level}}</i>
								</li>
								<li v-if="cdata[0].alarm.alarm_type != ''" style="display: block;width: 100%;text-align: left;">
									<b>预警：</b><i>{{cdata[0].alarm.alarm_type}}</i>
									<div>
										等级： <i>{{cdata[0].alarm.alarm_level}}</i>
									</div>
									<div>
										内容： <i>{{cdata[0].alarm.alarm_content}}</i>
									</div>
								</li>
							</ul>
						</div>
					</el-col>
				</el-row>

				<div id="myzxChart"></div>

			</el-tab-pane>
			<el-tab-pane label="最近7天" >
        <more :data="cdata"></more>
			</el-tab-pane>
			<el-tab-pane label="最近15天" disabled name="third">

			</el-tab-pane>
		</el-tabs>
	</el-card>
</template>

<style>
	.box{
    margin-top: 20px;
	}
	.bleft{
		box-sizing: border-box;
		border: 1px solid #999999;
	}
	#myChart{
		margin: 0 auto;
		height:280px;
	}
	.win{
		line-height: 140px;
	}
	.filter{
		border: 1px solid #999999;
		margin: 0 auto;
    height: 280px;
    line-height: 18px;
		background-color: #FFF;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    box-shadow: 1px 1px #d8e6f2;
		overflow: auto;
	}
	.wea{
		margin-top:10px;
	}
	.parameter {
		zoom: 1;
		list-style: none;
    margin-left: -10px;
	}
	.parameter li {
    float: left;
    width: 164px;
    height: 24px;
    line-height: 24px;
    margin-top: 6px;
    font-size: 13px;
    display: inline;
}
@media only screen and (max-width: 767px){
	.filter {
	   margin-top: 10px;
	}
}

@media only screen and (max-width: 500px){
	.win {
	   display: none;
	}
}

#myzxChart{
	width: 100%;
	height: 300px;
}

</style>
<script>
  import more from '@/components/more'

	let wd = 0;



	export default {
	  name: 'mybody',
	  data () {
	    return {
			 activeName: 'first',
			 cdata:[{"day":"3日（今天）","date":"2019-07-03","week":"星期三","wea":"阴","wea_img":"yin","air":0,"humidity":57,"air_level":"优","air_tips":"空气很好，可以外出活动，呼吸新鲜空气，拥抱大自然！","alarm":{"alarm_type":"大风","alarm_level":"黄色","alarm_content":"岛市气象台2018年12月07日16时00分继续发布大风黄色预警信号：受强冷空气影响，预计今天夜间到明天，我市北风风力，陆地5到6级阵风7级，近海6到7级阵风9级，海上7到8级阵风10级，请注意防范。（预警信息来源：国家预警信息发布中心"},"tem1":"35℃","tem2":"22℃","tem":"27℃","win":["东南风","东南风"],"win_speed":"3-4级转<3级","hours":[{"day":"03日08时","wea":"阴","tem":"27℃","win":"东南风","win_speed":"<3级"},{"day":"03日11时","wea":"阴","tem":"31℃","win":"东南风","win_speed":"<3级"},{"day":"03日14时","wea":"多云","tem":"34℃","win":"东南风","win_speed":"<3级"},{"day":"03日17时","wea":"多云","tem":"34℃","win":"东南风","win_speed":"3-4级"},{"day":"03日20时","wea":"阴","tem":"28℃","win":"东南风","win_speed":"3-4级"},{"day":"03日23时","wea":"阴","tem":"26℃","win":"东南风","win_speed":"<3级"},{"day":"04日02时","wea":"阴","tem":"24℃","win":"东南风","win_speed":"<3级"},{"day":"04日05时","wea":"阴","tem":"23℃","win":"东南风","win_speed":"<3级"}],"index":[{"title":"紫外线指数","level":"弱","desc":"辐射较弱，涂擦SPF12-15、PA+护肤品。"},{"title":"<\/em><em><\/em><em><\/em><em>","level":null,"desc":"天热风大，可选择低强度运动。"},{"title":"健臻·血糖指数","level":"易波动","desc":"气温高，血糖易波动，注意防暑降温。"},{"title":"穿衣指数","level":"炎热","desc":"建议穿短衫、短裤等清凉夏季服装。"},{"title":"洗车指数","level":"不宜","desc":"有雨，雨水和泥水会弄脏爱车。"},{"title":"空气污染扩散指数","level":"良","desc":"气象条件有利于空气污染物扩散。"}]},{"day":"4日（明天）","date":"2019-07-04","week":"星期四","wea":"多云","wea_img":"yun","tem1":"30℃","tem2":"19℃","tem":"26℃","win":["东南风","西北风"],"win_speed":"<3级","hours":[{"day":"04日08时","wea":"阴","tem":"26℃","win":"东南风","win_speed":"<3级"},{"day":"04日11时","wea":"多云","tem":"28℃","win":"东南风","win_speed":"<3级"},{"day":"04日14时","wea":"多云","tem":"30℃","win":"东南风","win_speed":"<3级"},{"day":"04日17时","wea":"多云","tem":"30℃","win":"东南风","win_speed":"<3级"},{"day":"04日20时","wea":"多云","tem":"26℃","win":"东南风","win_speed":"<3级"},{"day":"04日23时","wea":"多云","tem":"23℃","win":"西北风","win_speed":"<3级"},{"day":"05日02时","wea":"多云","tem":"21℃","win":"西北风","win_speed":"<3级"},{"day":"05日05时","wea":"多云","tem":"20℃","win":"西北风","win_speed":"<3级"}],"index":[{"title":"紫外线指数","level":"中等","desc":"涂擦SPF大于15、PA+防晒护肤品。"},{"title":"<\/em><em>","level":null,"desc":"夏天悄然到，肉已无处藏。天气较舒适，快去运动吧。"},{"title":"健臻·血糖指数","level":"易波动","desc":"气温多变，血糖易波动，请注意监测。"},{"title":"穿衣指数","level":"热","desc":"适合穿T恤、短薄外套等夏季服装。"},{"title":"洗车指数","level":"适宜","desc":"天气较好，适合擦洗汽车。"},{"title":"空气污染扩散指数","level":"中","desc":"易感人群应适当减少室外活动。"}]},{"day":"5日（后天）","date":"2019-07-05","week":"星期五","wea":"晴转多云","wea_img":"yun","tem1":"35℃","tem2":"21℃","tem":"24℃","win":["南风","东南风"],"win_speed":"3-4级","hours":[{"day":"05日08时","wea":"多云","tem":"24℃","win":"西北风","win_speed":"<3级"},{"day":"05日11时","wea":"晴","tem":"32℃","win":"南风","win_speed":"<3级"},{"day":"05日14时","wea":"晴","tem":"35℃","win":"南风","win_speed":"<3级"},{"day":"05日17时","wea":"晴","tem":"34℃","win":"南风","win_speed":"3-4级"},{"day":"05日20时","wea":"晴","tem":"28℃","win":"南风","win_speed":"3-4级"},{"day":"05日23时","wea":"晴","tem":"26℃","win":"东南风","win_speed":"3-4级"},{"day":"06日02时","wea":"晴","tem":"26℃","win":"东南风","win_speed":"3-4级"},{"day":"06日05时","wea":"多云","tem":"22℃","win":"东南风","win_speed":"<3级"}],"index":[{"title":"紫外线指数","level":"强","desc":"涂擦SPF大于15、PA+防晒护肤品。"},{"title":"<\/em><em><\/em><em><\/em><em>","level":null,"desc":"天热风大，可选择低强度运动。"},{"title":"健臻·血糖指数","level":"易波动","desc":"气温多变，血糖易波动，请注意监测。"},{"title":"穿衣指数","level":"炎热","desc":"建议穿短衫、短裤等清凉夏季服装。"},{"title":"洗车指数","level":"适宜","desc":"天气较好，适合擦洗汽车。"},{"title":"空气污染扩散指数","level":"良","desc":"气象条件有利于空气污染物扩散。"}]},{"day":"6日（周六）","date":"2019-07-06","week":"星期六","wea":"小雨","wea_img":"yu","tem1":"36℃","tem2":"22℃","tem":"27℃","win":["东南风","东风"],"win_speed":"3-4级","hours":[{"day":"06日08时","wea":"晴","tem":"27℃","win":"东南风","win_speed":"<3级"},{"day":"06日14时","wea":"小雨","tem":"34℃","win":"东南风","win_speed":"3-4级"},{"day":"06日20时","wea":"小雨","tem":"29℃","win":"东南风","win_speed":"3-4级"},{"day":"07日02时","wea":"小雨","tem":"24℃","win":"东风","win_speed":"<3级"}],"index":[{"title":"紫外线指数","level":"最弱","desc":"辐射弱，涂擦SPF8-12防晒护肤品。"},{"title":"<\/em><em><\/em><em><\/em><em>","level":null,"desc":"天气闷热，坚持室内低强度运动。"},{"title":"健臻·血糖指数","level":"易波动","desc":"高温闷热，血糖易波动，注意避免食欲不振。"},{"title":"穿衣指数","level":"炎热","desc":"建议穿短衫、短裤等清凉夏季服装。"},{"title":"洗车指数","level":"较适宜","desc":"无雨且风力较小，易保持清洁度。"},{"title":"空气污染扩散指数","level":"良","desc":"气象条件有利于空气污染物扩散。"}]},{"day":"7日（周日）","date":"2019-07-07","week":"星期日","wea":"小雨","wea_img":"yu","tem1":"32℃","tem2":"24℃","tem":"25℃","win":["东南风","东风"],"win_speed":"<3级","hours":[{"day":"07日08时","wea":"小雨","tem":"25℃","win":"东风","win_speed":"3-4级"},{"day":"07日14时","wea":"小雨","tem":"31℃","win":"东南风","win_speed":"<3级"},{"day":"07日20时","wea":"小雨","tem":"28℃","win":"东南风","win_speed":"<3级"},{"day":"08日02时","wea":"多云","tem":"25℃","win":"东风","win_speed":"<3级"}],"index":[{"title":"紫外线指数","level":"最弱","desc":"辐射弱，涂擦SPF8-12防晒护肤品。"},{"title":"<\/em><em><\/em><em><\/em><em>","level":null,"desc":"天气闷热，坚持室内低强度运动。"},{"title":"健臻·血糖指数","level":"易波动","desc":"血糖易波动，注意监测。"},{"title":"穿衣指数","level":"炎热","desc":"建议穿短衫、短裤等清凉夏季服装。"},{"title":"洗车指数","level":"不宜","desc":"有雨，雨水和泥水会弄脏爱车。"},{"title":"空气污染扩散指数","level":"良","desc":"气象条件有利于空气污染物扩散。"}]},{"day":"8日（周一）","date":"2019-07-08","week":"星期一","wea":"多云转小雨","wea_img":"yun","tem1":"34℃","tem2":"24℃","tem":"26℃","win":["东风","东北风"],"win_speed":"3-4级转<3级","hours":[{"day":"08日08时","wea":"小雨","tem":"26℃","win":"东风","win_speed":"<3级"},{"day":"08日14时","wea":"多云","tem":"31℃","win":"东风","win_speed":"3-4级"},{"day":"08日20时","wea":"多云","tem":"29℃","win":"东风","win_speed":"<3级"},{"day":"09日02时","wea":"小雨","tem":"26℃","win":"东北风","win_speed":"<3级"}],"index":[{"title":"紫外线指数","level":"最弱","desc":"辐射弱，涂擦SPF8-12防晒护肤品。"},{"title":"<\/em><em><\/em><em><\/em><em>","level":null,"desc":"天热风大，可选择低强度运动。"},{"title":"健臻·血糖指数","level":"易波动","desc":"血糖易波动，注意监测。"},{"title":"穿衣指数","level":"炎热","desc":"建议穿短衫、短裤等清凉夏季服装。"},{"title":"洗车指数","level":"不宜","desc":"有雨，雨水和泥水会弄脏爱车。"},{"title":"空气污染扩散指数","level":"良","desc":"气象条件有利于空气污染物扩散。"}]},{"day":"9日（周二）","date":"2019-07-09","week":"星期二","wea":"晴转多云","wea_img":"yun","tem1":"34℃","tem2":"22℃","tem":"26℃","win":["东风","西北风"],"win_speed":"3-4级转<3级","hours":[{"day":"09日08时","wea":"小雨","tem":"26℃","win":"东北风","win_speed":"<3级"},{"day":"09日14时","wea":"晴","tem":"31℃","win":"东风","win_speed":"3-4级"},{"day":"09日20时","wea":"晴","tem":"28℃","win":"东风","win_speed":"<3级"},{"day":"10日02时","wea":"晴","tem":"25℃","win":"西北风","win_speed":"<3级"}],"index":[{"title":"紫外线指数","level":"强","desc":"涂擦SPF大于15、PA+防晒护肤品。"},{"title":"<\/em><em><\/em><em><\/em><em>","level":null,"desc":"天热风大，可选择低强度运动。"},{"title":"健臻·血糖指数","level":"易波动","desc":"血糖易波动，注意监测。"},{"title":"穿衣指数","level":"炎热","desc":"建议穿短衫、短裤等清凉夏季服装。"},{"title":"洗车指数","level":"不宜","desc":"有雨，雨水和泥水会弄脏爱车。"},{"title":"空气污染扩散指数","level":"良","desc":"气象条件有利于空气污染物扩散。"}]}],
	    }
	  },
	  props:["wdata"],
	  watch: {
		  // 监控 wdata  如果父组件传递值 过来
		  wdata: function(newval,oldval){
					this.cdata = newval;
					// 启动 创建 图表 的函数
					this.drawgauge(parseInt(newval[0].tem));
					this.drawLine(newval[0].hours);
		  }
      },
    components:{
    	more
    },
	  methods: {
		  //用于表盘图表
		  drawgauge(q){
			// 基于准备好的dom，初始化echarts实例
			let myChart = this.$echarts.init(document.getElementById('myChart'));
			// 绘制图表
			myChart.setOption({
					title:{
							text:'最近更新',
						},
					tooltip : {
						formatter: "{a} <br/>{b} : {c}%"
					},
					toolbox: {
						feature: {
							restore: {},
							saveAsImage: {}
						}
					},
					series: [
						{
							min: -20,
							max: 50,
							name: '温度',
							type: 'gauge',
							detail: {formatter:'{value}℃'},
							data: [{value:  q , name: '温度'}],
							axisLine: {            // 坐标轴线
								lineStyle: {       // 属性lineStyle控制线条样式
									width: 10
								}
							},
							 axisTick: {            // 坐标轴小标记
								length: 15,        // 属性length控制线长
								lineStyle: {       // 属性lineStyle控制线条样式
									color: 'auto'
								}
							},
							splitLine: {           // 分隔线
								length: 20,         // 属性length控制线长
								lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
									color: 'auto'
								}
							},
						}
					]
				});
		   },
			// 用于  折线图
			drawLine(q){
				let x = [];
				let s = [];
				for(let i = 0; i<q.length; i++ ){
					s[i] = parseInt(q[i].tem);
					x[i] = q[i].day;
				}
				 // 基于准备好的dom，初始化echarts实例
				let myChart = this.$echarts.init(document.getElementById('myzxChart'));
				// 绘制图表
							myChart.setOption( {
									title:{
								            text:'温度情况',
								        },
								 tooltip: {
											trigger: 'axis'
									},
									xAxis: {
											type: 'category',
											data: x
									},
									yAxis: {
											type: 'value',
											axisLabel: {
													formatter: '{value} °C'
											}
									},
									series: [{
											data:s,
											type: 'line'
									}]
							});
						},
      },
	}



</script>

<style>
</style>
