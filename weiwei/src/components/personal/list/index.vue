<template>
	<div class="content">
        <div class="c-container">
            <div @click="onLookDetail('chahua')" class="c-left">
                插画
            </div>
            <div class="c-middle">
                <div @click="onLookDetail('shouhui')" class="m-top">手绘</div>
                <div @click="onLookDetail('c4d')" class="m-bottom">c4d</div>
            </div>
            <div @click="onLookDetail('other')" class="c-right">
                其他
            </div>
            <img class="c-bg" src="../../../assets/personal_bg.jpg" />
        </div>
	</div>
</template>

<script>
	import {personalInfoArr} from '../../../assets/config.js'
	export default {
	  name: 'home',
	  data() {
	    return {
	      personalInfoArr,
	    }
	  },

	  computed: {
	  	
      },
      methods: {
           onLookDetail(type) {
                this.$router.push({
                    name: 'personaldetail',
                    params: {
                        type,
                    },
                })
           }
      },
	  
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    .content{
        padding-top: 70px;
        height: 100%;
        box-sizing: border-box;
        .c-container{
            position: relative;
            overflow: hidden;
            height: 100%;
            letter-spacing: 10px;
            .c-left, .c-middle, .c-right{
                // float: left;
                // height: 100px;
                display: inline-block;
                vertical-align: middle;
                height: 100%;
                cursor: pointer;
            }
            .c-left{
                width: 45%;
                background: rgba(115, 107, 107, 0.5);
                font-size: 24px;
                color: white;
                padding-top: 35%;
                text-align: center;
                box-sizing: border-box;
            }
            .c-middle{
                width: 25%;
                .m-top{
                    height: 50%;
                    font-size: 24px;
                    color: white;
                    padding-top: 50%;
                    text-align: center;
                    box-sizing: border-box;
                    background: rgba(29, 21, 21, 0.5);
                }
                .m-bottom{
                    height: 50%;
                    font-size: 24px;
                    color: white;
                    padding-top: 50%;
                    text-align: center;
                    box-sizing: border-box;
                    background: #3a3636;
                }
            }
            .c-right{
                background: rgba(204, 199, 199, 0.5);
                width: 30%;
                font-size: 24px;
                color: white;
                padding-top: 35%;
                text-align: center;
                box-sizing: border-box;
            }
            .c-bg{
                position: absolute;
                left: 0;
                width: 100%;
                z-index: -1;
                // height: 100%;
            }
        }
    }
    
</style>
