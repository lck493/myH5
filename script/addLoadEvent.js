function addLoadEvent(func) {
    // 把现有的 window.onload 事件处理函数的值存入变量 oldonload
    var oldonload = window.onload;
    // 如果在这个处理函数上还没有绑定任何函数，就像平时那样把新函数添加给它
    // 如果在这个处理函数上已经绑定了一些函数，就把新函数追加到现有指令的末尾
    if (typeof window.onload != 'function') {
        window.onload = func;
    }else{
        window.onload = function(){
            oldonload();
            func();
        }
    }
}
