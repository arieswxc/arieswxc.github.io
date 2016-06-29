var React = require('react');
var BapiDownload = require('./BapiDownload');
var ReportBox = require('./ReportBox');
var BapiItems = require('./BapiItems');
var Content = React.createClass({
	render: function() {
		// console.log('content: ' + this.props.source);
		if(location.href.indexOf('report')=='-1'){
			return (
				<div className="content">
					<BapiItems onDownloadChangeCallBack={this.props.onDownloadChangeCallBack} onShareChangeCallBack={this.props.onShareChangeCallBack} page={this.props.page} source={this.props.source} loadMore={this.props.loadMore}/>
		            <BapiDownload />
	            </div>
			)
		} else {
			return (
				<div className="content">
					<ReportBox />
		            <BapiDownload />
				</div>
			)
		}
		
	},

});

module.exports = Content;