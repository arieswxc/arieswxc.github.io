<template>
	<div class="content">
    	<img class="bg-image" src="../../assets/home_bg.jpg"/>
        <img class="bg-logo" src="../../assets/logo.png" />
	</div>
</template>

<script>
	export default {
	  name: 'home',
	  data() {
	    return {
	    }
	  },

	  computed: {
	  	
	  },
	  
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    .content{
        .bg-image{
            width: 100%;
        }
        .bg-logo{
            position: absolute;

        }
    }
</style>
