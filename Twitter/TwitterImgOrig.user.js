// ==UserScript==
// @name         Twitter.img:orig
// @namespace    https://github.com/ACsediment/MyUserScript
// @version      0.1
// @description  重定向推特照片到原图
// @include      https://pbs.twimg.com/media/*
// @include      http://pbs.twimg.com/media/*
// @author       Acsediment
// @license      GPL version 2 or any later version; http://www.gnu.org/licenses/gpl-2.0.txt
// ==/UserScript==

var PathName = location.pathname;

if (PathName.endsWith(":orig") === false) {
    var Href="";
    if (PathName.endsWith("jpg") === false) {
        PathName = PathName.substring(0,PathName.search(':'));
        Href = 'https://pbs.twimg.com' + PathName + ':orig';
        location.replace(Href);
        //对于带有图片尺寸参数的URL，修改参数为“:orig”
    } else {
        Href = 'https://pbs.twimg.com' + PathName + ':orig';
        location.replace(Href);
        //对于“.jpg”结尾的URL，直接添加“:orig”参数
    }
}
