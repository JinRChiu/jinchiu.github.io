(this.webpackJsonptestreactapp=this.webpackJsonptestreactapp||[]).push([[0],{150:function(n,e,t){"use strict";t.d(e,"a",(function(){return a})),t.d(e,"b",(function(){return i}));var r=t(2),a=function(n){return"\n  background: ".concat(n?"#2f2f2f":"#FFFFFF",";\n  color: ").concat(n?r.a.WHITE:r.a.BLACK,";\n  min-height: 100vh;\n  padding: 5rem 8% 6rem;\n")},i=function(n){return"\n  box-shadow: 0px 4px 12px 2px ".concat(n?"#000000ad":"#d0d0d0",";")}},151:function(n,e,t){"use strict";var r=t(10),a=t(0),i=t.n(a),c=t(11),o=t(2);t(150);function s(){var n=Object(r.a)(["\n  display: flex;\n  align-items: flex-end;\n  .tag-box{\n    margin: 0 0.5rem;\n    display: flex;\n    .tag{\n      box-shadow: 0px 3px 6px 0px ",";\n      padding: 0.2rem 0.5rem;\n      border-radius: 5px;\n      color: ",";\n      background: ",";\n      margin: 0 0.5rem;\n      font-size: 0.8rem;\n    }\n  }\n\n  @media "," {\n   flex-direction: column;\n   align-items: center;\n   .tag-box{\n    flex-direction: column;\n    align-items: center;\n    margin: 0.5rem;\n     .tag{\n      margin: 0.5rem 0 0;\n     }\n    }\n  }\n"]);return s=function(){return n},n}var l=c.a.div(s(),(function(n){return n.isDark?"#4ea59f":"#676767"}),(function(n){return n.isDark?o.a.BLACK:o.a.WHITE}),o.a.LIGHT_GRAY,o.d.XS),m=function(n){var e=n.label,t=n.tags,r=n.isDark;return i.a.createElement(l,{isDark:r},i.a.createElement("div",{className:"label"},e),i.a.createElement("div",{className:"tag-box"},t.map((function(n){return i.a.createElement("div",{className:"tag"},n)}))))};m.defaultProps={tags:[]};var d=m;e.a=d},152:function(n,e,t){n.exports=t.p+"static/media/web_0.77b4c25c.png"},153:function(n,e,t){n.exports=t.p+"static/media/mobile_0.0a87fe4c.png"},154:function(n,e,t){n.exports=t.p+"static/media/draft_0.ff79a66d.png"},155:function(n,e,t){n.exports=t.p+"static/media/draft_1.d8c3a3d9.png"},156:function(n,e,t){"use strict";t.r(e);var r=t(10),a=t(0),i=t.n(a),c=t(11),o=t(17),s=t(48),l=t(62),m=t(150),d=t(2),u=t(23);function p(){var n=Object(r.a)(["\n  display: flex;\n  align-items: flex-start;\n  text-decoration: none;\n  color: ",";\n  background: ",";\n  margin: 1rem;\n  padding: 1rem 2rem;\n  height: 12rem;\n  box-shadow: 0px 5px 16px -1px ",";\n  border-radius: 5px;\n  letter-spacing: 2px;\n  position: relative;\n\n  &:hover{\n    opacity: 0.8;\n    transform: translateY(5px);\n    box-shadow: 0px 4px 6px -1px ",";\n    transition: .5s ease all;\n  }\n\n  .number{\n    font-family: ",";\n    font-size: 3.5rem;\n    width: 15%;\n\n  }\n\n  .wrapper{\n    display: flex;\n    height: 100%;\n    width: 85%;\n  }\n\n  .title{\n    font-family: ",";\n    font-size: ",";\n    background: ",";\n    margin: 0.6rem 1.8rem 0 0rem;\n    padding: 2.8rem 1rem 0.8rem 2rem;\n    text-align: end;\n    width: 45%;\n    height: 60%;\n    word-break: break-word;\n    line-height: 3rem;\n    white-space: pre-line;\n  }\n\n  .info{\n    display: flex;\n    flex-direction: column;\n    margin: 1.2rem 0rem;\n    width: 55%;\n    &--year{\n      margin: 0 0 0.5rem;\n      font-size: 0.8rem;\n      opacity: 0.4;\n      white-space: pre-line;\n    }\n    &--desc{\n      opacity: 0.75;\n      font-size: 0.8rem;\n      letter-spacing: 1px;\n      line-height: 24px;\n      /* word-break: break-word; */\n      white-space: pre-line;\n    }\n  }\n\n  @media "," {\n    .title{\n      font-size: 1.6rem;\n    }\n  }\n\n  @media "," {\n    .number{\n      width: 12%;\n    }\n    .wrapper{\n      width: 88%;\n    }\n    .title{\n      margin: 0.6rem 3rem 0 0rem;\n      width: 30%;\n      padding: 2.8rem 1.5rem 1rem 2rem;\n    }\n    .info{\n      margin: 1.2rem 0rem;\n      width: 70%;\n      &--desc{\n        line-height: 26px;\n      }\n    }\n  }\n\n  @media "," {\n    height: 15rem;\n    padding: 2rem;\n    align-items:space-around;\n    .number{\n      font-size: 2.8rem;\n      width: 15%;\n    }\n    .wrapper{\n      flex-direction: column;\n      width: 85%;\n    }\n    .title{\n      text-align: initial;\n      margin: 0rem 0rem 1rem;\n      width: auto;\n      height: 30%;\n      font-size: 1.5rem;\n      padding: 1.5rem 1rem 1rem;\n      line-height: 2.5rem;\n    }\n    .info{\n      width: auto;\n      margin: 0rem 0.6rem;\n      &--year{\n        margin: 0.2rem 0;\n      }\n    }\n  }\n"]);return p=function(){return n},n}var f=Object(c.a)(u.b)(p(),(function(n){return n.isDark?d.a.WHITE:d.a.BLACK}),(function(n){return n.isDark?d.a.BLACK:d.a.WHITE}),(function(n){return n.isDark?n.bc:"#c7c7c7"}),(function(n){return n.isDark?n.bc:"#c7c7c7"}),d.b.PROJECT_NO,d.b.PROJECT_NO,(function(n){return n.titleSize||"1.8rem"}),(function(n){return n.bc}),d.d.M,d.d.S,d.d.XS),g=function(n){var e=n.isDark,t=n.num,r=n.item,a=r.title,c=r.desc,o=r.path,s=r.year,l=r.bc,m=r.titleSize;return i.a.createElement(f,{to:o,bc:l,isDark:e,titleSize:m},i.a.createElement("div",{className:"number"},t),i.a.createElement("div",{className:"wrapper"},i.a.createElement("div",{className:"title"},a),i.a.createElement("div",{className:"info"},i.a.createElement("div",{className:"info--year"},s),i.a.createElement("div",{className:"info--desc"},c))))},h=[{title:"Rebase",desc:"Official Site\nResponsive Design",path:"/portfolio/rebase",year:"2020",bc:"#d2adad",titleSize:"2rem"},{title:"Portfolio Website",desc:"Github Page\nPersonal Online Portfolio\nResponsive Design",path:"/portfolio/2",year:"2020",bc:"#95aba9"},{title:"Daily Practice",desc:"Redesign",path:"/portfolio/dailyPractice",year:"2017 - 2020",bc:"#679fb5"},{title:"Others",desc:"Some things I made in daily",path:"/portfolio/3",year:"2017 - 2020",bc:"#e2d887",titleSize:"2rem"}];function b(){var n=Object(r.a)(["\n  ",";\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n\n  .project-box{\n    display: flex;\n    flex-flow: row wrap;\n    justify-content: center;\n    padding: 2rem 0rem;\n    width: 100%;\n  }\n  .projects{\n    width: 45%\n  }\n\n  @media "," {\n    .projects{\n      width: 50%\n    }\n  }\n\n  @media "," {\n    flex-flow: column nowrap;\n    justify-content: unset;\n    align-items: center;\n    padding: 3rem 5%;\n    .projects{\n      width: 100%\n    }\n  }\n"]);return b=function(){return n},n}var x=c.a.div(b(),(function(n){return m.a(n.isDark)}),d.d.M,d.d.S),v={testAction:l.b},w=Object(s.a)(Object(o.c)((function(n){return{isDark:n.common.isDark,test:n.protfolio.test}}),v))((function(n){n.test,n.testAction;var e=n.isDark;return i.a.createElement(x,{isDark:e},i.a.createElement("div",{className:"project-box"},h.map((function(n,t){return i.a.createElement("div",{className:"projects"},i.a.createElement(g,{isDark:e,item:n,num:t+1}))}))))}));e.default=w},157:function(n,e,t){"use strict";t.r(e);var r=t(10),a=t(0),i=t.n(a),c=t(11),o=t(17),s=t(48),l=t(50);function m(){var n=Object(r.a)(["\n  /* border: 1px solid #1d1d1d; */\n"]);return m=function(){return n},n}var d=c.a.div(m()),u=function(n){return i.a.createElement(d,n,n.children)};u.defaultProps={color:"#dddddd",background:"rgba(255, 255, 255, 0.8)",children:""};var p=t(2);function f(){var n=Object(r.a)(["\n  background: ",";\n  letter-spacing: 2px;\n  background: ",";\n  color: ",";\n  min-height: 100vh;\n\n  >div{\n    background: red;\n    height: 100rem;\n  }\n"]);return f=function(){return n},n}var g=c.a.div(f(),(function(n){return n.isDark?"#2f2f2f":"#FFFFFF"}),(function(n){return n.isDark?p.a.BLACK:p.a.WHITE}),(function(n){return n.isDark?p.a.WHITE:p.a.BLACK})),h={testAction:l.b},b=Object(s.a)(Object(o.c)((function(n){return{isDark:n.common.isDark,test:n.about.test}}),h))((function(n){n.test,n.testAction;var e=n.isDark;return i.a.createElement(g,{isDark:e},"About")}));e.default=b},158:function(n,e,t){"use strict";t.r(e);var r=t(10),a=t(0),i=t.n(a),c=t(11),o=t(17),s=t(48),l=t(150),m=t(2),d="A website which record and report everything about baseball game hold in Taiwan.\n\n\n",u=t(151),p=t(152),f=t.n(p),g=t(153),h=t.n(g),b=t(154),x=t.n(b),v=t(155),w=t.n(v);function k(){var n=Object(r.a)(["\n  ",";\n  padding: 5rem 18% 6rem;\n  display: flex;\n  flex-direction: column;\n  letter-spacing: 1.5px;\n  font-size: ",";\n  img{\n    ",";\n  }\n  .wrapper{\n    .title{\n      opacity: 0.7;\n      letter-spacing: 2px;\n      font-size: ",";\n      margin: 0 0 1.5rem;\n      line-height: 2rem;\n    }\n    .content{\n      display: flex;\n      flex-direction: column;\n      .text{\n        white-space: pre-line;\n        line-height: 1.5rem;\n        word-wrap:break-word;\n      }\n    }\n  &:not(:first-child){\n    &:before{\n      content: '';\n      display: inline-block;\n      width: 100%;\n      height: 1px;\n      opacity: 0.3;\n      margin: 6rem 0;\n      background: ",";\n      }\n    }\n  }\n\n  .visit-btn{\n    margin: 4rem 0 0;\n    width: 6.5rem;\n    padding: 2rem 0.8rem 0.8rem;\n    background: ",";\n    color: ",";\n    cursor: pointer;\n    position: relative;\n    &--line{\n      border: 1px solid ",";;\n      width: 95%;\n      height: 95%;\n      position: absolute;\n      top: 8px;\n      right: 10px;\n      &:hover{\n        transition: .5s ease all;\n        transform: translateX(-4px);\n      }\n    }\n  }\n\n  .drafts{\n    display: flex;\n    justify-content: space-around;\n    margin: 3rem 0 0;\n    img{\n      width: 40%;\n    }\n  }\n\n  .screenshots{\n    display: flex;\n    justify-content: center;\n    position: relative;\n    margin: 3rem 0 0;\n    img{\n      width: 100%;\n    }\n    &--web{\n    width: 75%;\n    }\n    &--mob{\n      width: 20%;\n      transform: scale(0.65);\n      position: absolute;\n      top: -20rem;\n      right: -1rem;\n    }\n  }\n\n  @media "," {\n    padding: 4rem 12% 6rem;\n    font-size: ",";\n    .wrapper{\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      .title{\n        letter-spacing: 2px;\n        font-size: ",";\n        margin: 0 0 1.5rem;\n        text-align: center;\n      }\n      .content{\n        display: flex;\n        flex-direction: column;\n        .text{\n          white-space: pre-line;\n          line-height: 1.5rem;\n          word-wrap:break-word;\n          text-align: center;\n        }\n      }\n      &:not(:first-child){\n        &:before{\n          margin: 4rem 0;\n          }\n        }\n      }\n    .visit-btn{\n      align-self: center;\n    }\n    .drafts{\n      flex-direction: column;\n      align-items: center;\n      margin: 2rem 0 0;\n      img{\n        width: 70%;\n        &:not(:first-child){\n          margin: 1.5rem 0 0;\n        }\n      }\n    }\n    .screenshots{\n      margin: 2rem 0 0;\n      justify-content: unset;\n      img{\n        width: 100%;\n      }\n      &--web{\n      width: 90%;\n      }\n      &--mob{\n        width: 25%;\n        transform: scale(0.65);\n        position: absolute;\n        top: -7rem;\n        right: -1.5rem;\n      }\n    }\n  }\n"]);return k=function(){return n},n}var E=c.a.div(k(),(function(n){return l.a(n.isDark)}),m.c.WEB.BASE,(function(n){return l.b(n.isDark)}),m.c.WEB.TITLE,(function(n){return n.isDark?m.a.WHITE:m.a.BLACK}),m.a.LIGHT_GRAY,(function(n){return n.isDark?m.a.BLACK:m.a.WHITE}),(function(n){return n.isDark?m.a.WHITE:m.a.BLACK}),m.d.XS,m.c.MOB.BASE,m.c.MOB.TITLE),D=Object(s.a)(Object(o.c)((function(n){return{isDark:n.common.isDark}}),{}))((function(n){var e=n.isDark;return i.a.createElement(E,{isDark:e},i.a.createElement("div",{className:"wrapper"},i.a.createElement("div",{className:"title"},"Inturduction"),i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"text"},d),i.a.createElement(u.a,{isDark:e,label:"In charge of: ",tags:["Mockup","Front-End Development"]}),i.a.createElement("div",{className:"visit-btn",onClick:function(){return window.open("https://www.rebas.tw/")}},"Visit Site \u21c0",i.a.createElement("div",{className:"visit-btn--line"})))),i.a.createElement("div",{className:"wrapper"},i.a.createElement("div",{className:"title"},"The wireframes that owner provided"),i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"drafts"},i.a.createElement("img",{src:x.a,alt:!0}),i.a.createElement("img",{src:w.a,alt:!0})))),i.a.createElement("div",{className:"wrapper"},i.a.createElement("div",{className:"title"},"Full size screenshot"),i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"screenshots"},i.a.createElement("div",{className:"screenshots--web"},i.a.createElement("img",{src:f.a,alt:""})),i.a.createElement("div",{className:"screenshots--mob"},i.a.createElement("img",{src:h.a,alt:""}))))))}));e.default=D},159:function(n,e,t){"use strict";t.r(e);var r=t(35),a=t(10),i=t(0),c=t.n(i),o=t(11),s=t(17),l=t(48),m=t(150),d=t(2),u=[{label:"Calculator",id:"calculator"},{label:"Credit Card Checkout",id:"creditCardCheckout"},{label:"Sign In Page",id:"signInPage"}];t(151);function p(){var n=Object(a.a)(["\n  ",";\n  display: flex;\n  flex-direction: column;\n  letter-spacing: 1.5px;\n  font-size: ",";\n  position: relative;\n  \n  .menu{\n    color: ",";\n    background: ",";\n    box-shadow: 0px 5px 10px 0px ",";\n    width: 15rem;\n    padding: 1rem 0;\n    position: fixed;\n    top: 20%;\n    &--item{\n      opacity: 0.5;\n      line-height: 1.5rem;\n      padding: 0.4rem 1rem 0.4rem 2rem;\n      cursor: pointer;\n      margin: 1rem 0;\n      margin-left: -2px;\n      cursor: pointer;\n      &.current{\n        opacity: 1;\n        border-left: 6px solid ",";\n        transition: .4s ease all;\n      }\n      &:hover{\n        opacity: 0.8;\n        transition: .4s ease all;\n      }\n    }\n  }\n\n  @media "," {\n  }\n"]);return p=function(){return n},n}var f=o.a.div(p(),(function(n){return m.a(n.isDark)}),d.c.WEB.BASE,(function(n){return n.isDark?d.a.WHITE:d.a.BLACK}),(function(n){return n.isDark?d.a.BLACK:d.a.WHITE}),(function(n){return n.isDark?"#4ea59f5c":"#c7c7c796"}),d.a.GRAY,d.d.XS),g=Object(l.a)(Object(s.c)((function(n){return{isDark:n.common.isDark}}),{}))((function(n){var e=n.isDark,t=Object(i.useState)("calculator"),a=Object(r.a)(t,2),o=a[0],s=a[1];return c.a.createElement(f,{isDark:e},c.a.createElement("div",{className:"menu"},u.map((function(n){return c.a.createElement("div",{className:o===n.id?"menu--item current":"menu--item",id:"anchor--".concat(n.id),onClick:function(){return e=n.id,void s(e);var e}},n.label)}))))}));e.default=g}}]);
//# sourceMappingURL=About.4ab5b7be.chunk.js.map