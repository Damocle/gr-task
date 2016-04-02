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
		root = typeof node == "string" ? document.getElementById(root) : root;
	} else {
		root = document.body;
	}

	tag = tag || "*";
	var els = root.getElementsByTagName(tag),
		arr = [];

	for (var i = 0, n = els.length; i < n; i++) {
		for (var j = 0, k = els[i].className.split(" "), l = length; j < l; j++) {
			if (k[j] == str) {
				arr.push(els[i]);
				break;
			}
		}
	}

	return arr;
}

