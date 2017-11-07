!function () {
	document.addEventListener('DOMContentLoaded', function () {
		var html = document.documentElement;
        var windowWidth = html.clientWidth;
        html.style.fontSize = windowWidth / 7.5 + 'px';
        // 等价于html.style.fontSize = windowWidth / 640 * 100 + 'px';
    }, false);

    
}();