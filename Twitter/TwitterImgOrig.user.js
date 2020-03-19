// ==UserScript==
// @name         Twitter orig img
// @namespace    https://github.com/ACsediment/MyUserScript
// @version      0.2
// @description  Redirecting Twitter images to original size.重定向推特照片到原图
// @include      https://pbs.twimg.com/media/*
// @include      http://pbs.twimg.com/media/*
// @author       Acsediment
// @license      GPL version 2 or any later version; http://www.gnu.org/licenses/gpl-2.0.txt
// ==/UserScript==

var pathName = location.pathname;
var currentHref = location.href;
var newHref;

if (currentHref.endsWith("orig") === false) {
    if (currentHref.endsWith("jpg") === false) {
        //pathName = pathName.substring(0,pathName.search(':'));
        newHref = 'https://pbs.twimg.com' + pathName + '?format=jpg&name=orig';
        location.replace(newHref);
        //对于带有图片尺寸参数的URL，修改参数为“&name=orig”
    } else {
        newHref = 'https://pbs.twimg.com' + pathName + '?format=jpg&name=orig';
        location.replace(newHref);
        //对于“.jpg”结尾的URL，直接添加参数
    }
}
