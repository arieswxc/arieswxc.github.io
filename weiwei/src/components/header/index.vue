<template>
  <div class="header">
  	<router-link to="/home">
	    <div class="left">
	      <img src="../../assets/header.png">
	      <span class="l-name">何为</span>
	    </div>
	</router-link>
    <div class="right">
    	<router-link to="/project/list"><div class="tab tab-project">项目</div></router-link>
    	<router-link to="/personal/list"><div class="tab tab-project">个人作品</div></router-link>
    	<router-link to="/contract"><div class="tab tab-contract">联系方式</div></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.header{
	overflow: hidden;
	font-size: 16px;
	padding: 0 24px;   
	height: 70px;
	line-height: 70px;
	position: fixed;
	top: 0;
	background: black;
	color: white;
	width: 100%;
	box-sizing: border-box;
    z-index: 1;
    .left {
        float: left;
        font-size: 24px;
        margin-left: 25px;
        img{
            width: 50px;
            height: 50px;
            border-radius: 50%;
            position: relative;
            top: 12px;
        }
        .l-name{
            position: relative;
            top: -4px;
            color: white;
            margin-left: 20px;
        }
    }
    .right{
        float: right;
        .tab {
            float: left;
            cursor: pointer;
            font-size: 16px;
            color: white;
            margin-right: 20px;
        }
        .tab:hover {
            font-size: 24px;
        }
        .tab-project {
            // margin-right: 10px;
        }
    }
}
</style>
