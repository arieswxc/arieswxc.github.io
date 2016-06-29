var React = require('react');
var BapiItem = require('./BapiItem');
var $ = require('jquery');
var BapiItems = React.createClass({
	getInitialState: function() {
		return {
			listData: [],
			source: this.props.source,
			page: 1
		}
	},

	render: function() {
		var self = this;
		// console.log(this.state.listData);
		if (!Array.isArray(this.state.listData)) {
			return (
				<div className="bapiItems">
					<BapiItem onDownloadChangeCallBack={self.props.onDownloadChangeCallBack} onShareChangeCallBack={self.props.onShareChangeCallBack} data={self.state.listData} />
				</div>
			)
		} else {
			return (
				<div className="bapiItems">
					<div style={{'width':'100%','overflow':'hidden'}}>
						{
							this.state.listData.map(function(list) {
								return <BapiItem onDownloadChangeCallBack={self.props.onDownloadChangeCallBack} onShareChangeCallBack={self.props.onShareChangeCallBack} key={list.id} data={list} />
							})
						}
			        </div>
					<div className="load-more">加载更多</div>
		        </div>
			)
		} 
	},

	componentWillReceiveProps: function(nextProps) {
		var nextSource = nextProps.source;
		var nextPage = nextProps.page;
		this.setState({
			source: nextProps.source,
			page: nextPage
		});

		$.get(nextProps.source, function(result) {
			var resultArr = JSON.parse(result).data;
			if(this.state.page > 1) {
				var concatArr = this.state.listData.concat(resultArr);
				this.setState({listData:concatArr});
			} else {
				this.setState({listData:resultArr});
			}
	    }.bind(this));
	},

	componentWillUpdate: function() {
	},

	componentDidMount: function() {
		var self = this;
		$.get(this.props.source, function(result) {
			var resultArr = JSON.parse(result).data;
			self.setState({listData:resultArr});
	    }.bind(this));

	    $('.load-more').click(function() {
	    	self.loadMore();
	    });
	},

	loadMore: function() {
		this.props.loadMore(this.state.page + 1);
	    // this.setState({page: this.state.page+1});
	}
});
module.exports = BapiItems;
