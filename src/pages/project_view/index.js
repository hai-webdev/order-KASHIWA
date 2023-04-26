// 首页使用的js

// 引入公共css
import "../common/reset.css";
import "./index.less";
import "@/assets/global.less";

// 引入页面公共部分的js
import "../common/header";
import "../common/footer";

$(".more").on("click", function(){

    var parent = $(this).parents(".layout");
    parent.find(".desc").removeClass("clamp");
    $(this).remove();
})