// ==UserScript==
// @name        Google Cache Browser
// @namespace   qixinglu.com
// @description Continue browsing the page in Google cache
// @grant       none
// @include     http://webcache.googleusercontent.com/search?*
// @include     https://webcache.googleusercontent.com/search?*
// @version 0.0.1.20140517140355
// ==/UserScript==
// fork from @muzuiget https://greasyfork.org/zh-CN/scripts/1108-google-cache-browser

var convertCacheLinks = function(url) {
    var selector = 'body > div[style^="position:relative;"] a'; //更新：此处更改为“匹配字段开头”以适应更多情况。use ^= instead.
    var links = document.querySelectorAll(selector);
    var i, link;
    console.log(links.length);
    for (i = 0; i < links.length; i += 1) {
        link = links[i];
        link.href = location.href.replace(url, encodeURIComponent(link.href)); 
        //@muzuiget采用做法的好处是保留当前的cache参数不变。如果需要强制指定为纯文本模式，可以改成直接生成链接
        link.href = link.href.replace('http://webcache.googleusercontent.com/','https://webcache.googleusercontent.com/'); 
        //更新：enforce https. 强制https，对非https的网站，脚本默认不会加载，效果类似纯文本
    }
};

var addOriginalLink = function(url) {
    var html = 'Go back to <a href="${href}">original page</a>.';
    var paragraph = document.createElement('p');
    paragraph.innerHTML = html.replace('${href}',decodeURIComponent(url));
    document.body.appendChild(paragraph);
};

var url = location.href.match(/q=cache:([^&+]+)/)[1];
if (document.title === 'Error 404 (Not Found)!!1') {
    addOriginalLink(url);
} else {
    convertCacheLinks(url);
}
