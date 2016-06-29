require('../assets/css/test.css');
var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

var SelfHeader = require('../components/SelfHeader');
var Footer = require('../components/Footer');
var Content = require('../components/Content');

var Contain = React.createClass({
	render: function() {
		return (
			<div>
				<SelfHeader callBackClick={this.onContentChanged}/>
				<Content />
				<Footer />
			</div>
		)
	},

	onContentChanged: function(tabIndex) {
		switch(+tabIndex){
		case 0://视频
		localStorage.setItem(
		  'source', "../url.jsp?url=http://www.ibapi.cn/mzbl-cps/queryWebContentList.json!page=1@pageSize=10@contentType=2"
		);
		localStorage.setItem('checkedIndex',0);
		break;
		case 1://图片
		localStorage.setItem(
		  'source', "../url.jsp?url=http://www.ibapi.cn/mzbl-cps/queryWebContentList.json!page=1@pageSize=10@contentType=1"
		);
		localStorage.setItem('checkedIndex',1);
		break;
		case 2://段子
		localStorage.setItem(
		  'source', "../url.jsp?url=http://www.ibapi.cn/mzbl-cps/queryWebContentList.json!page=1@pageSize=10@contentType=0"
		);
		localStorage.setItem('checkedIndex',2);
		break;
		}
		window.location.href = '../view/index.html';
	}
});

ReactDOM.render(
  <Contain />,
  document.getElementById('container')
);