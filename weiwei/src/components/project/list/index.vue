<template>
	<div class="content">
    	<router-link v-for="(item, index) in projectInfoArr"  :key="index" :to="`/project/detail/${projectInfoArr[index].name}`">
                <el-col class="c-item" :sm="8" :xl="1">
                    <div class="i-img" :style="{backgroundImage: `url(${productHomeImages[index]})`}"></div>
                </el-col>

			<!-- <div class="c-item">
				<div class="i-img" :style="{backgroundImage: `url(${productHomeImages[index]})`}"></div>
			</div> -->
	    </router-link>
	</div>
</template>

<script>
	import {projectInfoArr} from '../../../assets/config.js'
	export default {
	  name: 'home',
	  data() {
	    return {
	      projectInfoArr,
	    }
	  },

	  computed: {
	  	productHomeImages() {
	  		return this.projectInfoArr.map((item) => {
	  			return require(`../../../assets/project/${item.name}/1.jpg`)
	  		})
	  	}
	  },
	  
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    .c-item{
        float: left;
        // width: 33%;
        padding: 15px 20px;
        box-sizing: border-box;
        cursor: pointer;
        height: 350px;
        margin-bottom: 40px;
        transition: 0.6s;
    }
    @media screen and (max-width: 600) {
        .c-item{
            // width: 100%;
        }
    }
	
    .c-item .i-img{
      background-size: 100%;
      background-repeat: no-repeat;
      height: 100%;
    }
    
    .c-item:hover {
      opacity: 0.7;
      padding: 0;
    }

    .content{
      padding: 0 60px;
      margin-top: 70px;

    }
</style>
