<template>
	<div class="content">
		<img class="c-item-img" v-for="(item, index) in 
        images" :key="index" :src="item" alt="">
	</div>
</template>

<script>
	import {personalInfoArr} from '../../../assets/config.js'
    export default {
        props: ['type'],
        name: 'detail',
        data() {
            return {

            }
        },
        computed: {
            
            images() {
                // console.log('personalInfoArr: ', personalInfoArr)
                let len = _.find(personalInfoArr, {name: this.type}).length;
                // console.log('len: ', len)
                let i = 0, res = [];
                while(i++ < len) {
                    res.push(require(`../../../assets/personal/${this.type}/${i}.jpg`));
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
		.c-item-img{
            width: 80%;
            margin-bottom: 15px;
		}
	}
	
</style>
