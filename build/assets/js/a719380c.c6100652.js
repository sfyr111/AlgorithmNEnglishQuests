"use strict";(self.webpackChunkalgorithm_n_english_quests=self.webpackChunkalgorithm_n_english_quests||[]).push([[3883],{2728:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=t(8168),a=(t(6540),t(5680));const o={},s="22.\xa0Generate Parentheses",c={unversionedId:"Stack/Generate Parentheses",id:"Stack/Generate Parentheses",title:"22.\xa0Generate Parentheses",description:"Generate Parentheses](https://leetcode.com/problems/generate-parentheses/)",source:"@site/docs/Stack/22.\xa0Generate Parentheses.md",sourceDirName:"Stack",slug:"/Stack/Generate Parentheses",permalink:"/AlgorithmNEnglishQuests/docs/Stack/Generate Parentheses",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Stack/22.\xa0Generate Parentheses.md",tags:[],version:"current",sidebarPosition:22,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"20.\xa0Valid Parentheses",permalink:"/AlgorithmNEnglishQuests/docs/Stack/Valid Parentheses"},next:{title:"150.\xa0Evaluate\xa0Reverse\xa0Polish Notation",permalink:"/AlgorithmNEnglishQuests/docs/Stack/Evaluate\xa0Reverse\xa0Polish Notation"}},i={},l=[{value:"Problem",id:"problem",level:2},{value:"Solution",id:"solution",level:2}],p={toc:l},u="wrapper";function d(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"22generate-parentheses"},"22.\xa0Generate Parentheses"),(0,a.yg)("p",null,"\xa0Generate Parentheses](",(0,a.yg)("a",{parentName:"p",href:"https://leetcode.com/problems/generate-parentheses/"},"https://leetcode.com/problems/generate-parentheses/"),")"),(0,a.yg)("h2",{id:"problem"},"Problem"),(0,a.yg)("p",null,"Given\xa0",(0,a.yg)("inlineCode",{parentName:"p"},"n"),"\xa0pairs\xa0of parentheses, write a function to\xa0",(0,a.yg)("em",{parentName:"p"},"generate all\xa0combinations\xa0of well-formed parentheses"),"."),(0,a.yg)("h2",{id:"solution"},"Solution"),(0,a.yg)("p",null,"We need to find all possible string combinations using recursion. We are keeping track of open and close counts in the recursive function as long as open is less than n and close is less than open. We add the corresponding bracket to the stack, recurse, and pop the bracket from the stack. We stop when both open and close equal n. Then we add the current stack's content to our result. This process continues until all combinations are found."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-typescript"},'function generateParentheses(n: number): string[] {\n    // only add open parenthesis if open < n\n    // only add a closing parenthesis if closed < open\n    // valid IFF open == closed == n\n    let stack: string[] = [];\n    let res: string[] = [];\n\n    function backtrack(openN: number, closedN: number) {\n        if (openN === closedN && closedN === n) {\n            res.push(stack.join(\'\'));\n            return;\n        }\n\n        if (openN < n) {\n            stack.push("(");\n            backtrack(openN + 1, closedN);\n            stack.pop();\n        }\n\n        if (closedN < openN) {\n            stack.push(")");\n            backtrack(openN, closedN + 1);\n            stack.pop();\n        }\n    }\n\n    backtrack(0, 0);\n    return res;\n}\n')))}d.isMDXComponent=!0},5680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>m});var r=t(6540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),l=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(i.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(t),h=a,m=u["".concat(i,".").concat(h)]||u[h]||d[h]||o;return t?r.createElement(m,s(s({ref:n},p),{},{components:t})):r.createElement(m,s({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=h;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c[u]="string"==typeof e?e:a,s[1]=c;for(var l=2;l<o;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"}}]);