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
		var oSubmit = document.getElementById('submit'),
			oForm = document.getElementById('form'),
			aInput = oForm.getElementsByTagName('input'), 
			aLabel = oForm.getElementsByTagName('label'),
			oAttention = GLOBAL.Dom.getElementsByClassName('attention')[0],
			oCancel = GLOBAL.Dom.getElementsByClassName('cancel')[0],
			oSignIn = GLOBAL.Dom.getElementsByClassName('sign-in')[0];

		oAttention.onclick = function() {
			if (!GLOBAL.Cookie.getCookie('loginSuc')) {
				oSignIn.style.display = 'block';
			} else {
				oAttention.value = '已关注';
				oAttention.disabled = true;
				oAttention.className = 'active';
				oCancel.style.display = 'block';
			}
		}

		oSubmit.onclick = function() {
			var userName1 = hex_md5(aInput[0]),
				passWord1 = hex_md5(aInput[1]);

			GLOBAL.Ajax.get('http://study.163.com/webDev/login.htm', {userName:userName1,password:passWord1}, function(i) {
				if (i == '1') {
					oSignIn.style.display = 'none';
					GLOBAL.Cookie.setCookie('loginSuc', '1', 14);
					GLOBAL.Ajax.get('http://study.163.com/webDev/attention.htm', '' , function(i) {
						if (i == '1') 	{
							GLOBAL.Cookie.setCookie('followSuc', '1', 14);
							oAttention.value = '已关注';
							oAttention.disabled = true;
							oAttention.className = 'active';
							oCancel.style.display = 'block';	
						}
					});
				} else {
					alert("账号或密码输入错误，请重新输入！");
				}
			});
		}

		function hiddenText(i) {
			aInput[i].onfocus = function() {
				aLabel[i].style.display = 'none';
			}

			aInput[i].onblur = function() {
				if (this.value === '') {
					aLabel[i].style.display = 'block';
				}
			}
		}

		hiddenText(0);
		hiddenText(1);

	})();

	// 轮播图
	(function() {
		
	})();

		
}