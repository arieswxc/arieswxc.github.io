var React = require('react');
var $ = require('jquery');
var BapiItem = React.createClass({
	getInitalState: function() {
	}, 

	handleClick: function(e) {
		var itemId = e.target.getAttribute('data-id');
		var contentType = e.target.getAttribute('data-contentType');
		if(location.href.indexOf('detailall') == '-1') {
			localStorage.setItem('contentType',contentType);
			window.location.href = './detailall.html?id=' + itemId;
		}
	},
	render: function() {
		var listData = this.props.data;
		return (
			<div className="content-item">
	            <div className="title st octn" data-id={listData.id} data-contentType={listData.contentType} onClick={this.handleClick}>{listData.content}</div>
	            <ul className="tag-list list">
	            	<li className="tag-item">{listData.labels}</li>
	            </ul>
	            <ItemBox listData={listData}/>
	            <div className="zan">
	                <span className="ding-num">{listData.praisecount}赞</span>
	                <span className="ding-num">{listData.reviewscount}评论</span>
	            </div>
	            <div className="news-btns video-btns">
	                <div className="zan-pic">
	                    <img className="ding-btn" src="../assets/img/dinged.png" onClick={this.dingClick}/>
	                </div>
	                <div className="zan-pic">
	                    <img className="cai-btn" src="../assets/img/caied.png" onClick={this.caiClick}/>
	                </div>
	                <div className="zan-pic">
	                    <img className="ping-btn" src="../assets/img/ping.png" onClick={this.pingClick}/>
	                </div>
	                <div className="shared-btn" onClick={this.shareClick}>分享</div>
	            </div>
	        </div>
		)
	},

	pingClick: function() {
		this.props.onDownloadChangeCallBack(true);
	},

	dingClick: function() {
		this.props.onDownloadChangeCallBack(true);
	},

	caiClick: function() {
		this.props.onDownloadChangeCallBack(true);
	},

	shareClick: function() {
		this.props.onShareChangeCallBack(true, this.props.data.content);
	},

	componentDidMount: function() {
	}

});

var ItemBox = React.createClass({
	playClick: function(e) {
		var videoDom = e.target;
		$(videoDom).hide();
		$(videoDom).closest('.item-box').find('.video-tip').hide();
		$(videoDom).closest('.item-box').find('video').attr('controls','controls').removeAttr('poster');
		$(videoDom).closest('.item-box').find('video')[0].play();
	},

	render: function() {
		var listData = this.props.listData;
		var contentType = listData.contentType;
		switch(contentType){
			case '6':
				// var htmlContent = document.createElement('div');
				// htmlContent.innerHTML = listData.htmlContent;
				// console.log(htmlContent);
				// return (
				// 	<div className="item-box">
		  //               {{htmlContent}}
		  //           </div>
				// );
				return (
					<div className="item-box">
		                <img className="big-pic" width="400" src={listData.fileUrl} />
		            </div>
				);
				break;
			case '2': 
				return (
					<div className="item-box">
		                <video width="300" height="200" poster={listData.videoImgUrl} x-webkit-airplay="true" webkit-playsinline="true" src={listData.fileUrl}></video>
		                <div className="video-tip">
		                    <span className="play-times">{listData.readcount}</span>次播放
		                    <div className="time">00:06:58</div>
		                </div>
		                <div className="play-btn" onClick={this.playClick}></div>
		            </div>
				);
				break;
			case '1':
				return (
					<div className="item-box">
		                <img className="big-pic" width="400" src={listData.fileUrl} />
		            </div>
				);
				break;
			case '0': 
				return (
					<div></div>
				);
				break;
		}
	}
})

module.exports = BapiItem;