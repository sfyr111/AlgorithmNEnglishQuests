"use strict";(self.webpackChunkalgorithm_n_english_quests=self.webpackChunkalgorithm_n_english_quests||[]).push([[7239],{5680:(e,t,a)=>{a.d(t,{xA:()=>h,yg:()=>g});var n=a(6540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},h=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),u=p(a),d=r,g=u["".concat(l,".").concat(d)]||u[d]||c[d]||s;return a?n.createElement(g,o(o({ref:t},h),{},{components:a})):n.createElement(g,o({ref:t},h))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<s;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9606:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var n=a(8168),r=(a(6540),a(5680));const s={},o="[875.\xa0Koko Eating Bananas](https://leetcode.com/problems/koko-eating-bananas/)",i={unversionedId:"binary search/Koko Eating Bananas",id:"binary search/Koko Eating Bananas",title:"[875.\xa0Koko Eating Bananas](https://leetcode.com/problems/koko-eating-bananas/)",description:"Problem",source:"@site/docs/binary search/875.\xa0Koko Eating Bananas.md",sourceDirName:"binary search",slug:"/binary search/Koko Eating Bananas",permalink:"/docs/binary search/Koko Eating Bananas",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/binary search/875.\xa0Koko Eating Bananas.md",tags:[],version:"current",sidebarPosition:875,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"704.\xa0Binary Search",permalink:"/docs/binary search/Binary Search"},next:{title:"981.\xa0Time Based Key-Value Store",permalink:"/docs/binary search/Time Based Key-Value Store"}},l={},p=[{value:"Problem",id:"problem",level:2},{value:"Solution",id:"solution",level:2}],h={toc:p},u="wrapper";function c(e){let{components:t,...a}=e;return(0,r.yg)(u,(0,n.A)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"875koko-eating-bananas"},(0,r.yg)("a",{parentName:"h1",href:"https://leetcode.com/problems/koko-eating-bananas/"},"875.\xa0Koko Eating Bananas")),(0,r.yg)("h2",{id:"problem"},"Problem"),(0,r.yg)("p",null,"Koko loves to eat bananas. There are\xa0",(0,r.yg)("inlineCode",{parentName:"p"},"n"),"\xa0piles of bananas, the\xa0",(0,r.yg)("inlineCode",{parentName:"p"},"ith"),"\xa0pile has\xa0",(0,r.yg)("inlineCode",{parentName:"p"},"piles[i]"),"\xa0bananas. The guards have gone and will come back in\xa0",(0,r.yg)("inlineCode",{parentName:"p"},"h"),"\xa0hours."),(0,r.yg)("p",null,"Koko can decide her bananas-per-hour eating speed of\xa0",(0,r.yg)("inlineCode",{parentName:"p"},"k"),". Each hour, she chooses some pile of bananas and eats\xa0",(0,r.yg)("inlineCode",{parentName:"p"},"k"),"\xa0bananas from that pile. If the pile has less than\xa0",(0,r.yg)("inlineCode",{parentName:"p"},"k"),"\xa0bananas, she eats all of them\xa0instead\xa0and will not eat any more bananas\xa0during\xa0this hour."),(0,r.yg)("p",null,"Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return."),(0,r.yg)("p",null,"Return\xa0",(0,r.yg)("em",{parentName:"p"},"the minimum integer"),"\xa0",(0,r.yg)("inlineCode",{parentName:"p"},"k"),"\xa0",(0,r.yg)("em",{parentName:"p"},"such that she can eat all the bananas\xa0within"),"\xa0",(0,r.yg)("inlineCode",{parentName:"p"},"h"),"\xa0",(0,r.yg)("em",{parentName:"p"},"hours"),"."),(0,r.yg)("h2",{id:"solution"},"Solution"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-typescript"},"function minEatingSpeed(piles: number[], h: number): number {\n    let left = 1; // Start with the lowest possible eating speed.\n    let right = Math.max(...piles); // The highest speed is the largest pile.\n    let res = right; // Assume the highest speed as the initial result.\n\n    // Use binary search to find the minimum speed.\n    while (left <= right) {\n        const k = (left + right) >> 1; // Calculate the middle speed.\n        let hours = 0; // Track the total hours spent eating with speed k.\n\n        // Calculate the total hours to eat all piles at speed k.\n        for (let pile of piles) {\n            hours += Math.ceil(pile / k); // Ceiling because Koko can't eat fractions of a banana.\n        }\n\n        // If the total hours is within the limit, try a slower speed.\n        if (hours <= h) {\n            res = Math.min(k, res); // Update the result with the slower speed.\n            // res = k;\n            right = k - 1; // Narrow the search to slower speeds.\n        } else {\n            // If not, try a faster speed.\n            left = k + 1; // Narrow the search to faster speeds.\n        }\n    }\n\n    // The result is the slowest speed at which Koko can eat all bananas in time.\n    return res;\n};\n")),(0,r.yg)("p",null,'We need to determine the slowest speed at which Koko can eat all the bananas within a given time frame. To do this, we use a method called "binary search."'),(0,r.yg)("p",null,"Here's how we do it:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"We start with the slowest speed of 1 banana per hour and the fastest speed equal to the biggest banana pile."),(0,r.yg)("li",{parentName:"ol"},"We guess a speed halfway between the slowest and fastest speeds and see how long it takes Koko to eat all the bananas at this speed."),(0,r.yg)("li",{parentName:"ol"},"If Koko can eat all the bananas within the given time frame, we try a slower speed."),(0,r.yg)("li",{parentName:"ol"},"If not, we try a faster speed."),(0,r.yg)("li",{parentName:"ol"},"We keep adjusting our guess until we find the slowest speed that works within the given time frame.")),(0,r.yg)("p",null,"We use this code to solve the problem:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},'We have two variables, "left" and "right," which represent the slowest and fastest speeds.'),(0,r.yg)("li",{parentName:"ul"},"We loop through and make a new guess at a speed."),(0,r.yg)("li",{parentName:"ul"},"We calculate how long it takes Koko to eat all the bananas at this guess."),(0,r.yg)("li",{parentName:"ul"},"If this time is less than or equal to the given time frame, we try a slower speed. Otherwise, we try a faster speed."),(0,r.yg)("li",{parentName:"ul"},'We stop when "left" is greater than "right," and return the slowest speed that works, which we store in the variable "res."')))}c.isMDXComponent=!0}}]);