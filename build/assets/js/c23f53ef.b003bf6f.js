"use strict";(self.webpackChunkalgorithm_n_english_quests=self.webpackChunkalgorithm_n_english_quests||[]).push([[8282],{806:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(8168),o=(n(6540),n(5680));const a={},i=void 0,s={unversionedId:"Array/Intersection of Two Arrays",id:"Array/Intersection of Two Arrays",title:"Intersection of Two Arrays",description:"349.\xa0Intersection of Two Arrays](https://leetcode.com/problems/intersection-of-two-arrays/)",source:"@site/docs/Array/349. Intersection of Two Arrays.md",sourceDirName:"Array",slug:"/Array/Intersection of Two Arrays",permalink:"/AlgorithmNEnglishQuests/docs/Array/Intersection of Two Arrays",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Array/349. Intersection of Two Arrays.md",tags:[],version:"current",sidebarPosition:349,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"[347.\xa0Top K\xa0Frequent\xa0Elements](https://leetcode.com/problems/top-k-frequent-elements/)",permalink:"/AlgorithmNEnglishQuests/docs/Array/Top K\xa0Frequent\xa0Elements"},next:{title:"567.\xa0Permutation\xa0in String",permalink:"/AlgorithmNEnglishQuests/docs/Array/Permutation\xa0in String"}},u={},l=[{value:"Solution",id:"solution",level:2},{value:"My Words",id:"my-words",level:2},{value:"Be Better",id:"be-better",level:2}],p={toc:l},c="wrapper";function m(e){let{components:t,...n}=e;return(0,o.yg)(c,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"349.\xa0Intersection of Two Arrays](",(0,o.yg)("a",{parentName:"p",href:"https://leetcode.com/problems/intersection-of-two-arrays/"},"https://leetcode.com/problems/intersection-of-two-arrays/"),")"),(0,o.yg)("p",null,"Given two integer arrays\xa0",(0,o.yg)("inlineCode",{parentName:"p"},"nums1"),"\xa0and\xa0",(0,o.yg)("inlineCode",{parentName:"p"},"nums2"),", return\xa0",(0,o.yg)("em",{parentName:"p"},"an array of their intersection"),". Each element in the result must be\xa0",(0,o.yg)("strong",{parentName:"p"},"unique"),"\xa0and you may return the result in\xa0",(0,o.yg)("strong",{parentName:"p"},"any order"),"."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Example 1:")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Input:")," nums1 = ","[1,2,2,1]",", nums2 = ","[2,2]","\n",(0,o.yg)("strong",{parentName:"p"},"Output:")," ","[2]"),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Example 2:")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Input:")," nums1 = ","[4,9,5]",", nums2 = ","[9,4,9,8,4]","\n",(0,o.yg)("strong",{parentName:"p"},"Output:")," ","[9,4]","\n",(0,o.yg)("strong",{parentName:"p"},"Explanation:")," ","[4,9]"," is also accepted."),(0,o.yg)("h2",{id:"solution"},"Solution"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"function intersection(nums1: number[], nums2: number[]): number[] {  \n  const set = new Set(nums1);  \n  \n  let intersection = [];  \n  \n  for (const num of nums2) {  \n    if (set.has(num)) {  \n      intersection.push(num);  \n      set.delete(num);  \n    }  }  \n  return intersection;  \n};\n\nvar intersection = function(nums1, nums2) {  \n    return [...new Set(nums1.filter(n => nums2.includes(n)))];  \n};\n")),(0,o.yg)("h2",{id:"my-words"},"My Words"),(0,o.yg)("p",null,"This problem needs to find ",(0,o.yg)("inlineCode",{parentName:"p"},"nums1")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"nums2")," their intersection. We can utilize a set data structure to remove any duplicate elements. Thus convert ",(0,o.yg)("inlineCode",{parentName:"p"},"nums1")," into a set, and check for each value in ",(0,o.yg)("inlineCode",{parentName:"p"},"nums2")," to see if it exists in the set, then it's a part of the intersection."),(0,o.yg)("h2",{id:"be-better"},"Be Better"),(0,o.yg)("p",null,'"We can utilize a set data structure to eliminate duplicates. First, we convert ',(0,o.yg)("inlineCode",{parentName:"p"},"nums1")," into a set. Then, for each value in ",(0,o.yg)("inlineCode",{parentName:"p"},"nums2"),", if it exists in the set, it's part of the intersection.\""))}m.isMDXComponent=!0},5680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>g});var r=n(6540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=l(n),y=o,g=c["".concat(u,".").concat(y)]||c[y]||m[y]||a;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=y;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"}}]);