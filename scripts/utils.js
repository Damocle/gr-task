//==============================================
// 网易微专业项目实践作业  
// utils提供js中的公共函数
// gr
// mrding1236@163.com
// 2016.04.02
//==============================================

// 全局变量
var GLOBAL = {};

// 命名空间函数
GLOBAL.namespace = function(str) {
	var arr = str.split("."),
		o   = GLOBAL;

	for (var i = (arr[0] == "GLOBAL") ? 1 : 0; i < arr.length; i++) {
		o[arr[i]] = o[arr[i]] || {};
		o = o[arr[i]];
	}
}

// DOM相关
GLOBAL.namespace("Dom");
GLOBAL.Dom.getElementsByClassName = function(str, root, tag) {
	if (root) {
		root = typeof root == "string" ? document.getElementById(root) : root;
	} else {
		root = document.body;
	}

	tag = tag || "*";
	var els = root.getElementsByTagName(tag),
		arr = [];

	for (var i = 0, n = els.length; i < n; i++) {
		for (var j = 0, k = els[i].className.split(" "), l = k.length; j < l; j++) {
			if (k[j] == str) {
				arr.push(els[i]);
				break;
			}
		}
	}

	return arr;
}

// Cookie相关
GLOBAL.namespace("Cookie");
// 设置cookie
GLOBAL.Cookie.setCookie = function(name, value, iDate) {
	var oDate = new Date();
	oDate.setDate(oDate.getDate() + iDate);

	document.cookie = name + "=" + value + ";expires =" + oDate;
}
// 获取cookie
GLOBAL.Cookie.getCookie = function(name) {
	var arr1 = document.cookie.split("; ");

	for (var i = 0; i < arr1.length; i++) {
		var arr2 = arr1[i].split("=");

		if (arr2[0] === name) {
			return arr2[1];
		}
	}
}

// 删除cookie
GLOBAL.Cookie.removeCookie = function(name) {
	GLOBAL.Cookie.setCookie(name, " ", -1);
}

// 扩展window.onload
function addLoadEvent(func) {
	var oldOnload = window.onload;
	if (typeof window.onload != "function") {
		window.onload = func;
	} else {
		window.onload = function() {
			if (oldOnload) {
				oldOnload();
			}
			
			func();
		}
	}
}