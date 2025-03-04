"use strict";(self.webpackChunkalgorithm_n_english_quests=self.webpackChunkalgorithm_n_english_quests||[]).push([[7283],{5680:(e,r,t)=>{t.d(r,{xA:()=>c,yg:()=>f});var n=t(6540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function u(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?u(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},u=Object.keys(e);for(n=0;n<u.length;n++)t=u[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)t=u[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var m=n.createContext({}),s=function(e){var r=n.useContext(m),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=s(e.components);return n.createElement(m.Provider,{value:r},e.children)},l="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,u=e.originalType,m=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),l=s(t),y=a,f=l["".concat(m,".").concat(y)]||l[y]||p[y]||u;return t?n.createElement(f,o(o({ref:r},c),{},{components:t})):n.createElement(f,o({ref:r},c))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var u=t.length,o=new Array(u);o[0]=y;var i={};for(var m in r)hasOwnProperty.call(r,m)&&(i[m]=r[m]);i.originalType=e,i[l]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<u;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},8980:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>m,contentTitle:()=>o,default:()=>p,frontMatter:()=>u,metadata:()=>i,toc:()=>s});var n=t(8168),a=(t(6540),t(5680));const u={},o=void 0,i={unversionedId:"greedy/Maximum Subarray",id:"greedy/Maximum Subarray",title:"Maximum Subarray",description:"53. Maximum Subarray",source:"@site/docs/greedy/53.\xa0Maximum Subarray.md",sourceDirName:"greedy",slug:"/greedy/Maximum Subarray",permalink:"/docs/greedy/Maximum Subarray",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/greedy/53.\xa0Maximum Subarray.md",tags:[],version:"current",sidebarPosition:53,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"1143. Longest Common Subsequence",permalink:"/docs/dynamic/Longest Common Subsequence"},next:{title:"55. Jump Game",permalink:"/docs/greedy/Jump Game"}},m={},s=[],c={toc:s},l="wrapper";function p(e){let{components:r,...t}=e;return(0,a.yg)(l,(0,n.A)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("ol",{start:53},(0,a.yg)("li",{parentName:"ol"},"Maximum Subarray\nProblem\nGiven an integer array nums, find the subarray with the largest sum, and return its sum.")),(0,a.yg)("p",null,"Solution\nTo solve this, we find the maximum sum of a subarray in nums. We use a loop and two variables: curSum for the current sum and maxSum for the maximum. We add each number to curSum. If curSum becomes negative, we reset it to 0, ignoring negative sums. We update maxSum with the greater of itself or curSum. Finally, we return maxSum.\nWe reset curSum to 0 because negative prefix sums don't contribute to finding the maximum sum."),(0,a.yg)("p",null,"function maxSubArray(nums: number[]): number {\n// Initialize maxSum with the first element of the array.\n// This handles the case where the array consists of all negative numbers.\nlet maxSum = nums","[0]",";"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"// Initialize curSum to 0. This variable will keep track of the sum of the current subarray.\nlet curSum = 0;\n\n// Iterate through each number in the array.\nfor (let num of nums) {\n  // If curSum is negative, reset it to 0. Negative curSum indicates that\n  // adding the previous numbers (negative prefix) reduces the total sum,\n  // so it's better to start a new subarray from the current element.\n  if (curSum < 0) {\n    curSum = 0;\n  }\n\n  // Add the current number to the curSum. This step expands the current subarray\n  // by including the current element.\n  curSum += num;\n\n  // Update maxSum if the curSum is greater than the current maxSum.\n  // This step ensures we always have the largest sum found so far.\n  maxSum = Math.max(maxSum, curSum);\n}\n\n// After iterating through the array, maxSum holds the largest sum of any subarray.\n// Return maxSum as the result.\nreturn maxSum;\n")),(0,a.yg)("p",null,"};"))}p.isMDXComponent=!0}}]);