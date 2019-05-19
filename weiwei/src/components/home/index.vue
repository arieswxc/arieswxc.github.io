<template>
	<div class="content">
    	<!-- <img class="bg-image" src="../../assets/home_bg.jpg"/> -->
        <div @click="onJumbClick" class="c-info">
            <img class="i-logo" src="../../assets/logo.png" />
            <div class="i-name">UI/UE设计师</div> 
        </div>
	</div>
</template>

<script>
	export default {
	  name: 'home',
	  data() {
	    return {
	    }
      },
      
      methods: {
          onJumbClick() {
              this.$router.push({
                name: 'projectlist',
            })
          },
      },

	  computed: {
	  	
	  },
	  
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    .content{
        // overflow: hidden;
        height: 100%;
        background: url(../../assets/home_bg.jpg);
        background-size: cover;
        .bg-image{
            height: 100%;
        }
        .c-info{
            width: 100%;
            position: absolute;
            height: 200px;
            top: 50%;
            margin-top: -100px;
            background: white;
            text-align: center;
            cursor: pointer;
            .i-logo{
                margin-top: 40px;
                width: 300px;
            }
            .i-name{
                color: #555;
                font-size: 24px;
                margin-top: 20px;
            }
        }
        
    }
</style>
