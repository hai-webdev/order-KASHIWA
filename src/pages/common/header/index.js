// 头部的js代码
import "./index.less";

$(".m-header .menu").on("click", function(){
    $(this).toggleClass("on");
    $(".nav-container").slideToggle();
})