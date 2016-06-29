require('../assets/css/test.css');
var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

var SelfHeader = require('../components/SelfHeader');
var Footer = require('../components/Footer');
var Content = require('../components/Content');
var Share = require('../components/Share');
var BapiDownloadAlert = require('../components/BapiDownloadAlert');
var Contain = React.createClass({
  getInitialState: function() {
    var defaultSource = localStorage.getItem('source') || "../url.jsp?url=http://www.ibapi.cn/mzbl-cps/queryWebContentList.json!pageSize=10@contentType=2";
    var defaultCheckedIndex = localStorage.getItem('checkedIndex') || 0;
    return {
      source: defaultSource, //管理请求数据url
      checkedIndex: defaultCheckedIndex,//管理选中tab index
      isShareShow: false,//管理分享插件
      isDownloadShow: false,//管理赞，踩，评论弹出的下载插件
      page: 1, //管理分页信息
      shareContent: '' //管理分享数据
    }
  },

  render: function() {
    return (
      <div>
        <SelfHeader checkedIndex={this.state.checkedIndex} callBackClick={this.onContentChanged}/>
        <Content source={this.state.source + '@page=' + this.state.page} page={this.state.page} onDownloadChangeCallBack={this.onDownloadChange} onShareChangeCallBack={this.onShareChange} loadMore={this.loadMoreCallback}/>
        <BapiDownloadAlert isDownloadShow={this.state.isDownloadShow} downloadCallback={this.onDownloadCallback}/>
        <Share isShareShow={this.state.isShareShow} shareContent={this.state.shareContent} changeCallback={this.onShareCallback}/>
        <Footer />
      </div>
    )
  },

  loadMoreCallback: function(pagePara) {
    this.setState({page: pagePara});
  },

  //赞，踩，评论弹出的下载插件回调函数
  onDownloadCallback: function(boolean) {
    this.setState({isDownloadShow: boolean})
  },

  onDownloadChange: function(boolean) {
    this.setState({isDownloadShow: boolean})
  },

  onShareCallback: function(boolean) {
    this.setState({isShareShow: boolean})
  },
  onShareChange: function(boolean, content) {
    this.setState({isShareShow: boolean, shareContent: content});
  },

  onContentChanged: function(tabIndex) {
    // console.log(tabIndex);
    switch(+tabIndex){
      case 0://视频
        this.setState({
          source: "../url.jsp?url=http://www.ibapi.cn/mzbl-cps/queryWebContentList.json!pageSize=10@contentType=2",
          checkedIndex: 0,
          page: 1
        });
        break;
      case 1://图片
        this.setState({
          source: "../url.jsp?url=http://www.ibapi.cn/mzbl-cps/queryWebContentList.json!pageSize=10@contentType=1",
          checkedIndex: 1,
          page: 1
        });
        break;
      case 2://段子
        this.setState({
          source: "../url.jsp?url=http://www.ibapi.cn/mzbl-cps/queryWebContentList.json!pageSize=10@contentType=0",
          checkedIndex: 2,
          page: 1
        });
        break;
      case 3://八卦
        this.setState({
          source: "../url.jsp?url=http://192.168.0.15:9030/api/queryWebGossipList.json!pageSize=10@contentType=6",
          checkedIndex: 3,
          page: 1
        });
        break;
    }
  }
})

ReactDOM.render(
  <Contain />,
  document.getElementById('container')
);