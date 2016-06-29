require('../assets/css/share.css');
var React = require('react');
var $ = require('jquery');
var Share = React.createClass({
	getInitialState: function() {
		return {
			isShow: this.props.isShareShow,
			ohref: location.href,
			otitle: this.props.shareContent,
			odesc: this.props.shareContent,
			opic: 0,
		}
	},
	render: function() {
		return (
			<div className="mask" style={{display: this.state.isShow?'block':'none'}}>
	            <div className="share-box">
	                <div className="shared-title">分享到以下位置：</div>
	                <div className="bdsharebuttonbox">
	                    <a href="#" className="bds_weixin" data-cmd="weixin"></a>
	                    <a href="#" className="bds_sqq" data-cmd="sqq"></a>
	                    <a href="#" className="bds_qzone" data-cmd="qzone"></a>
	                    <a href="#" className="bds_tsina" data-cmd="tsina"></a>
	                    <a href="#" className="bds_tqq" data-cmd="tqq"></a>
	                </div>
	                <ul className="custom-link-list list">
	                    <li className="custom-link-item copy-icon"></li>
	                    <li className="custom-link-item report-icon"></li>
	                </ul>
	                <div className="close">x</div>
	                <div className="copy-over">内容和链接地址已经复制成功，马上发给好友一起分享吧！</div>
	            </div>
	        </div>
		)
	},
    componentDidMount: function() {
    	var self = this;
        //分享
        $(".bds_weixin").click(function(e){
            setTimeout(function(){
            	$('.ewm-pic1').attr('src','../assets/img/download-erweima.png');
                // $(".bd_weixin_popup_main").html('<img class="ewm-pic1" src="../assets/img/download-erweima.png" data-bd-imgshare-binded="1">');
            }, 1000)
        });

        $(".bds_sqq").click(function(){
            var href = "http://connect.qq.com/widget/shareqq/index.html?url="+ self.state.ohref +"&title="+ self.state.otitle +"&desc="+ self.state.odesc +"&summary=&site=baidu&pics="+ self.state.opic;
            window.open(href);
            return false;
        });

        $(".bds_qzone").click(function(){
            var href = "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url="+ self.state.ohref +"&title="+ self.state.otitle +"&desc="+ self.state.odesc +"&summary=&site=&pics="+ self.state.opic;
            window.open(href);
            return false;
        });

        $(".bds_tsina").click(function(){
            var href = "http://service.weibo.com/share/share.php?url="+ self.state.ohref +"&title="+ self.state.otitle +"&appkey="+ self.state.odesc +"&searchPic="+ self.state.opic;
            window.open(href);
            return false;
        });

        $(".bds_tqq").click(function(){
            var href = "http://share.v.t.qq.com/index.php?c=share&a=index&url="+ self.state.ohref +"&title="+ self.state.otitle +"&appkey="+  +"&pic="+ self.state.opic;
            window.open(href);
            return false;
        });

        //举报
        $(".report-icon").click(function(){
        	var id = '';
	    	location.href = "./report.html?id=" + id;
	    });

	    $('.close').click(function() {
	    	// self.setState({isShow:false});
	    	self.props.changeCallback(false);
	    });
    },

    componentWillReceiveProps: function(nextProps) {
    	this.setState({
    		isShow: nextProps.isShareShow, 
    		shareContent: nextProps.shareContent,
    		ohref: location.href,
			otitle: nextProps.shareContent,
			odesc: nextProps.shareContent,
			opic: 0,
    	});
    },

    onShare: function() {
    	$(".content").delegate(".shared-btn", "click", function(){
	        otext = $(this).parents(".content-item").find(".octn")[0].innerHTML;
	        var ocopy = $(this).parents(".content-item");
	        otitle = otext.substr(0,20) + "...";
	        odesc = otext.substr(0,30) + "...";
	        ohref = location.href;
	        var rhref = $(this).parents(".content-item").attr("data-id");
	        var i = ohref.lastIndexOf('/');
	        var c = ohref.substring(0,i);

	        //复制

	        $(".bdselect_share_box").remove();
	        $(".channel").delegate(".copy-icon", "click", function(e){
	            $("#biao1")[0].innerHTML = otext;
	            $("#biao1").append(ohref);
	            $("#biao1")[0].select(); // 选择对象
	            document.execCommand("Copy"); // 执行浏览器复制命令
	            $(".bdselect_share_content").hide();
	            $(".bdselect_share_head").hide();
	            $(".copy-over").show(300);
	        })
	        $(".copy-over").hide();
	    })
    }

});
module.exports =  Share;
