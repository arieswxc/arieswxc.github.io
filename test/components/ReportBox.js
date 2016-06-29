var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var ReportBox = React.createClass({
	render: function() {
		return (
			<div className="bapiItems">
				<div className="report-box">
	                <ul className="report-list list">
	                    <li className="report-item">垃圾广告</li>
	                    <li className="report-item">淫秽色情</li>
	                    <li className="report-item">煽情骗赞</li>
	                    <li className="report-item">挖坟内容</li>
	                    <li className="report-item">我的内容</li>
	                    <li className="report-item">其他</li>
	                </ul>
	                <div className="report-btn">确 定</div>
	            </div>
	        </div>
		)
	},

	componentDidMount: function() {
		$(".report-item").click(function(){
	        $(this).addClass("selected").siblings().removeClass("selected");
	    });

	    $(".report-btn").click(function(){
	        var $item = $(".report-item.selected");
	        if($item.length == 0){
	            alert("请先选择举报类型！");
	            return;
	        } else {
	        	alert('提交成功');
	        }
	    })
	}

});

module.exports = ReportBox;