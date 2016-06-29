var React = require('react');
var $ = require('jquery');
var BapiDownload = React.createClass({
	render: function() {
		return (
			<div className="bapiDownload">
				<img src="../assets/img/app.jpg" className="app" />
                <div className="intro">
                    <div className="app-title">扒皮 APP</div>
                    <p>火爆的娱乐分享平台，每日海量笑料7X24小时不间断更新，随时随地，笑料十足！</p>
                </div>
                <div className="download" style={{'marginRight': '18px'}}>
                    <div className="download1"></div>
                </div>
                <div className="download"> 
                    <div className="download2"></div>
                </div>
    
                <div className="erweima">
                    <span className="sm">扫描下载：</span>
                    <img className="ewm-pic" src="../assets/img/download-erweima.png" />
                </div>
	        </div>
		)
	},
    componentDidMount: function() {
        $('.download1').click(function() {
            location.href = "https://itunes.apple.com/cn/app/ba-pi/id1080852007";
        })
        $('.download2').click(function() {
            location.href = "../../apk/bapi.apk";
        });
    }

});
module.exports =  BapiDownload;
