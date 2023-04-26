// 首页使用的js

// 引入公共css
import "../common/reset.css";
import "./index.less";
import "@/assets/global.less";

// 引入页面公共部分的js
import "../common/header";
import "../common/footer";

const proItem = $(".project-item");
proItem.each((index,item) => {
    const textItem = $(item).find(".title")
    const originText = textItem.text();
    const originTextArr = originText.split("");
    const targetTextArr = [];
    for (let i = 0; i < originTextArr.length; i++) {
        const el = originTextArr[i];
        const span = $("<span></span>")
        span.text(el);
        span.css("animation-delay", i * 30 + "ms")
        targetTextArr.push(span);
    }
    textItem.html(targetTextArr);
})
