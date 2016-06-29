require('../assets/css/test.css');
var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

var SelfHeader = require('../components/SelfHeader');
var Footer = require('../components/Footer');
var Content = require('../components/Content');
var BapiDownloadAlert = require('../components/BapiDownloadAlert');
var Share = require('../components/Share');

var Contain = React.createClass({
	getInitialState: function() {
		var contentId = location.href.split('=')[1];
		var contentType = localStorage.getItem('contentType');
		if(contentType==6) {
			var source = '../url.jsp?url=http://192.168.0.15:9030/api/queryShareGossipDetail.json!id=' + contentId;
		} else {
			source = "../url.jsp?url=http://www.ibapi.cn/mzbl-cps/queryShareContentDetail.json!id=" + contentId;
		}
		return {
			source: source,
      		isShareShow: false,
      		isDownloadShow: false,//管理赞，踩，评论弹出的下载插件
      		shareContent: ''
		}
	},
	render: function() {
		return (
			<div>
				<SelfHeader callBackClick={this.onContentChanged}/>
				<Content source={this.state.source} onDownloadChangeCallBack={this.onDownloadChange} onShareChangeCallBack={this.onShareChange} />
        		<BapiDownloadAlert isDownloadShow={this.state.isDownloadShow} downloadCallback={this.onDownloadCallback}/>
       			<Share isShareShow={this.state.isShareShow} shareContent={this.state.shareContent} changeCallback={this.onShareCallback}/>
				<Footer />
			</div>
		)
	},

	 //赞，踩，评论弹出的下载插件回调函数
	onDownloadCallback: function(boolean) {
	this.setState({isDownloadShow: boolean})
	},

	onDownloadChange: function(boolean) {
	this.setState({isDownloadShow: boolean})
	},
	onShareCallback: function(boolean) {
	    this.setState({isShareShow: boolean});
	},
	onShareChange: function(boolean, content) {
	    this.setState({isShareShow: boolean, shareContent: content});
	},

	onContentChanged: function(tabIndex) {
		switch(+tabIndex){
		case 0://视频
			localStorage.setItem(
			  'source', "../url.jsp?url=http://www.ibapi.cn/mzbl-cps/queryWebContentList.json!pageSize=10@contentType=2"
			);
			localStorage.setItem('checkedIndex',0);
			break;
		case 1://图片
			localStorage.setItem(
			  'source', "../url.jsp?url=http://www.ibapi.cn/mzbl-cps/queryWebContentList.json!pageSize=10@contentType=1"
			);
			localStorage.setItem('checkedIndex',1);
			break;
		case 2://段子
			localStorage.setItem(
			  'source', "../url.jsp?url=http://www.ibapi.cn/mzbl-cps/queryWebContentList.json!pageSize=10@contentType=0"
			);
			localStorage.setItem('checkedIndex',2);
			break;
		case 3://八卦
			localStorage.setItem(
			  'source', "../url.jsp?url=http://192.168.0.15:9030/api/queryWebGossipList.json!pageSize=10@contentType=6"
			);
			localStorage.setItem('checkedIndex',3);
			break;
		}
		window.location.href = '../view/index.html';
	}
});

ReactDOM.render(
  <Contain />,
  document.getElementById('container')
);