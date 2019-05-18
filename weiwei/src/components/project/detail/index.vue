<template>
	<div class="content">
		<img v-for="(item, index) in productImages" :key="index" :src="item" alt="">
	</div>
</template>

<script>
	import {projectInfoArr} from '../../../assets/config.js'
    export default {
        props: ['type'],
        name: 'detail',
        data() {
            return {

            }
        },
        computed: {
            productImages() {
                let len = _.find(projectInfoArr, {name: this.type}).length;
                // console.log('len: ', len)
                let i = 0, res = [];
                while(i++ < len) {
                    res.push(require(`../../../assets/project/${this.type}/${i}.jpg`));
                }

                return res;
            }
        },
        mounted() {
            // console.log('type: ', this.type)
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
	.content{
		padding: 80px 0;
		text-align: center;
		img{
			width: 80%;
		}
	}
	
</style>
