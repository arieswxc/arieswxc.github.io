var React = require('react');
var SelfHeader = React.createClass({
	getInitialState: function() {
		return {
			checkedIndex: this.props.checkedIndex
		}
	},

	componentDidMount: function() {
		this.changeTabBg(); 
	}, 

	componentDidUpdate: function() {
		this.changeTabBg();
	},

	changeTabBg: function() {
		var tabs = document.getElementsByClassName('nav-item');
		for(var i = 0; i < tabs.length; i++) {
			if(tabs[i].getAttribute('data-index') == this.state.checkedIndex) {
				tabs[i].style.background = '#26b8ef';
			} else {
				tabs[i].style.background = '#009dd9';
			}
		}
	},

	handleClick: function(e) {
		var checkedIndex = e.target.getAttribute('data-index');
    	this.setState({checkedIndex: checkedIndex});
    	this.props.callBackClick(checkedIndex);
	},
	render: function() {
		return (
			<div className="header-nav">
		        <div className="dh" id="top">
		            <img src="../assets/img/logo.png" className="logo" />
		            <ul className="header-list list">
		                <li className="nav-item" data-index="0" onClick={this.handleClick}>视频</li>
		                <li className="nav-item" data-index="1" onClick={this.handleClick}>图片</li>
		                <li className="nav-item" data-index="2" onClick={this.handleClick}>段子</li>
		                <li className="nav-item" data-index="3" onClick={this.handleClick}>八卦</li>
		            </ul>
		        </div>
		    </div>	
		)
	}
});
module.exports =  SelfHeader;
