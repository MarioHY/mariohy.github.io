// Web APIs visibilitychange event 页面可见/不可见事件
var titleTime, OriginTitile = document.title;
document.addEventListener("visibilitychange", (function() {
    document.hidden ? titleTime = setTimeout((function() {
        document.title = "w(ﾟДﾟ)w 不要走！再看看嘛！"
    }
    ), 300) : (document.title = "♪(^∇^*)欢迎回来！" + OriginTitile,
    titleTime = setTimeout((function() {
        document.title = OriginTitile
    }
    ), 2e3))
}
))
