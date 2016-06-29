var React = require('react');
var $ = require('jquery');
var BapiDownloadAlert = React.createClass({
    getInitialState: function() {
        return {
            isDownloadShow: this.props.isDownloadShow
        }
    },
	render: function() {
		return (
            <div className="imask" style={{display: this.state.isDownloadShow?'block':'none'}}>
    			<div className="box-right p-item">
    				<img src="../assets/img/app.jpg" className="app" />
                    <div className="intro">
                        <div className="app-title">扒皮 APP</div>
                        <p>登录才能互动哦！ </p>
                        <p>下载APP，随时随地笑料十足！</p>
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
                    <div className="close">x</div>
    	        </div>
            </div>
		)
	},
    componentDidMount: function() {
        var self = this;
        $('.download1').click(function() {
            location.href = "https://itunes.apple.com/cn/app/ba-pi/id1080852007";
        })
        $('.download2').click(function() {
            location.href = "../../apk/bapi.apk";
        });
        $('.close').click(function() {
            self.props.downloadCallback(false);
        });
    },
    componentWillReceiveProps: function(nextProps) {
        this.setState({
            isDownloadShow: nextProps.isDownloadShow, 
        });
    },

});
module.exports =  BapiDownloadAlert;
