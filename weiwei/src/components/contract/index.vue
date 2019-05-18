<template>
	<div class="content">
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
