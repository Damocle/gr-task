addLoadEvent(init);

function init() {
	// 课程提醒 hd-warm
	(function() {
		var hdWarm = GLOBAL.Dom.getElementsByClassName('hd-warm')[0],
			oWarm  = document.getElementById('warm');

		oWarm.onclick = function() {
			if (GLOBAL.Cookie.getCookie('off')) {
				hdWarm.style.display = 'none';
			} else {
				hdWarm.style.display = 'none';
				GLOBAL.Cookie.setCookie('off', true, 100000000);
			}
		}

	})();

	// 登录
	(function() {
		
	})();
}