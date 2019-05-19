<template>
	<div class="content">
        <div class="c-circle">
            <div class="c-item">
                <div class="i-title">PHONE:</div> 18516522363
            </div>
            <div class="c-item">
                <div class="i-title">WECHAT:</div> 18516522363
            </div>
            <div class="c-item">
                <div class="i-title">MAIL:</div> weizime@foxmai.com
            </div>
            <div class="c-item">
                <div class="i-title">ADDRESS:</div> 火星XX
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
  name: 'detail',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
	.content{
        margin-top: 90px;
        .c-circle{
            width: 500px;
            height: 500px;
            border-radius: 50%;
            background: #a79c9c;
            padding-top: 120px;
            box-sizing: border-box;
            color: white;
            margin: auto;
            margin-top: 150px;
            -webkit-animation:circle 3s linear;
        }
        @-webkit-keyframes circle{
            0%{-webkit-transform:rotateY(0deg);}
            25%{-webkit-transform:rotateY(90deg);}
            50%{-webkit-transform:rotateY(180deg);}
            75%{-webkit-transform:rotateY(270deg);}
            100%{-webkit-transform:rotateY(360deg);}
	    }
        .c-item{
            font-size: 20px;
            height: 50px;
            line-height: 50px;
            .i-title{
                width: 200px;
                text-align: right;
                display: inline-block;
            }
        }
    }
    
	
</style>
