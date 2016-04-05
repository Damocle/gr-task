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
		var oFocus  = document.getElementById('focus'),
			oForm   = document.getElementById('form'),
			aInput  = oForm.getElementsByTagName('input');
			oCancel = GLOBAL.Dom.getElementsByClassName('cancel')[0],
			oSignIn = GLOBAL.Dom.getElementsByClassName('sign-in')[0],
			oSubmit = GLOBAL.Dom.getElementsByClassName('submit')[0];

		oFocus.onclick = function() {
			if (!GLOBAL.Cookie.getCookie('loginSuc')) {
				oSignIn.style.display = 'block';
			} else {
				oFocus.value = '已关注';
				oFocus.disabled = false;
				// cancel.style.display = 'block';
			}
		}

		oSubmit.onclick = function() {
			var userName = hex_md5(aInput[0]),
				passWord = hex_md5(aInput[1]);

			GLOBAL.Ajax.get('http://study.163.com/webDev/login.htm', {userName:userName, password:passWord}, function(i) {
				if (i == '1') {
					// ...
				} else {
					alert("账号或密码输入错误，请重新输入！");
				}
			})
		}
	})();
}