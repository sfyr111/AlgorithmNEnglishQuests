"use strict";(self.webpackChunkalgorithm_n_english_quests=self.webpackChunkalgorithm_n_english_quests||[]).push([[5690],{2895:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=t(8168),a=(t(6540),t(5680));const o={},i="27.\xa0Remove Element",l={unversionedId:"Array/Remove Element",id:"Array/Remove Element",title:"27.\xa0Remove Element",description:"27.\xa0Remove Element",source:"@site/docs/Array/27. Remove Element.md",sourceDirName:"Array",slug:"/Array/Remove Element",permalink:"/docs/Array/Remove Element",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Array/27. Remove Element.md",tags:[],version:"current",sidebarPosition:27,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Remove Duplicates from Sorted Array",permalink:"/docs/Array/Remove Duplicates from Sorted Array"},next:{title:"36.\xa0Valid Sudoku",permalink:"/docs/Array/Valid Sudoku"}},m={},s=[{value:"Problem",id:"problem",level:2},{value:"Solution",id:"solution",level:2},{value:"My Words",id:"my-words",level:2}],p={toc:s},u="wrapper";function y(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"27remove-element"},"27.\xa0Remove Element"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://leetcode.com/problems/remove-element/"},"27.\xa0Remove Element")),(0,a.yg)("h2",{id:"problem"},"Problem"),(0,a.yg)("p",null,"Given an integer array\xa0",(0,a.yg)("inlineCode",{parentName:"p"},"nums"),"\xa0and an integer\xa0",(0,a.yg)("inlineCode",{parentName:"p"},"val"),", remove all occurrences of\xa0",(0,a.yg)("inlineCode",{parentName:"p"},"val"),"\xa0in\xa0",(0,a.yg)("inlineCode",{parentName:"p"},"nums"),"\xa0",(0,a.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/In-place_algorithm"},(0,a.yg)("strong",{parentName:"a"},"in-place")),". The order of the elements may be changed. Then return\xa0",(0,a.yg)("em",{parentName:"p"},"the number of elements in"),"\xa0",(0,a.yg)("inlineCode",{parentName:"p"},"nums"),"\xa0",(0,a.yg)("em",{parentName:"p"},"which are not equal to"),"\xa0",(0,a.yg)("inlineCode",{parentName:"p"},"val"),"."),(0,a.yg)("p",null,"Consider\xa0the number of elements in\xa0",(0,a.yg)("inlineCode",{parentName:"p"},"nums"),"\xa0which are not equal to\xa0",(0,a.yg)("inlineCode",{parentName:"p"},"val"),"\xa0be\xa0",(0,a.yg)("inlineCode",{parentName:"p"},"k"),", to get\xa0accepted, you need to do the following things:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Change the array\xa0",(0,a.yg)("inlineCode",{parentName:"li"},"nums"),"\xa0such that the first\xa0",(0,a.yg)("inlineCode",{parentName:"li"},"k"),"\xa0elements of\xa0",(0,a.yg)("inlineCode",{parentName:"li"},"nums"),"\xa0contain the elements which are not equal to\xa0",(0,a.yg)("inlineCode",{parentName:"li"},"val"),". The remaining elements of\xa0",(0,a.yg)("inlineCode",{parentName:"li"},"nums"),"\xa0are not important as well as the size of\xa0",(0,a.yg)("inlineCode",{parentName:"li"},"nums"),"."),(0,a.yg)("li",{parentName:"ul"},"Return\xa0",(0,a.yg)("inlineCode",{parentName:"li"},"k"),".")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Custom Judge:")),(0,a.yg)("p",null,"The judge will test your solution with the following code:"),(0,a.yg)("p",null,"int[] nums = ","[...]","; // Input array\nint val = ...; // Value to remove\nint[] expectedNums = ","[...]","; // The expected answer with correct length.\n// It is sorted with no values equaling val."),(0,a.yg)("p",null,"int k = removeElement(nums, val); // Calls your implementation"),(0,a.yg)("p",null,"assert k == expectedNums.length;\nsort(nums, 0, k); // Sort the first k elements of nums\nfor (int i = 0; i < actualLength; i++) {\nassert nums","[i]"," == expectedNums","[i]",";\n}"),(0,a.yg)("p",null,"If all assertions pass, then your solution will be\xa0",(0,a.yg)("strong",{parentName:"p"},"accepted"),"."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Example 1:")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Input:")," nums = ","[3,2,2,3]",", val = 3\n",(0,a.yg)("strong",{parentName:"p"},"Output:")," 2, nums = ","[2,2,",(0,a.yg)("em",{parentName:"p"},","),"]","\n",(0,a.yg)("strong",{parentName:"p"},"Explanation:")," Your function should return k = 2, with the first two elements of nums being 2.\nIt does not matter what you leave beyond the returned k (hence they are underscores)."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Example 2:")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Input:")," nums = ","[0,1,2,2,3,0,4,2]",", val = 2\n",(0,a.yg)("strong",{parentName:"p"},"Output:")," 5, nums = ","[0,1,4,0,3,",(0,a.yg)("em",{parentName:"p"},","),",_]","\n",(0,a.yg)("strong",{parentName:"p"},"Explanation:")," Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.\nNote that the five elements can be returned in any order.\nIt does not matter what you leave beyond the returned k (hence they are underscores)."),(0,a.yg)("h2",{id:"solution"},"Solution"),(0,a.yg)("p",null,"Explanation:"),(0,a.yg)("p",null,'The "Remove Element" problem asks us to remove all instances of a specific value (val) from an array (nums) in-place. The goal is to return the new length of the modified array.'),(0,a.yg)("p",null,"To solve this, we adopt a two-pointer technique. We use one pointer, i, to keep track of the current position where we should place the next element that doesn't match val. The other pointer, j, iterates through the nums array."),(0,a.yg)("p",null,"As j traverses the array:"),(0,a.yg)("p",null,"If nums","[j]"," is different from val, we assign the value of nums","[j]"," to nums","[i]"," and increment i.\nIf nums","[j]"," matches val, we just skip it and move on.\nBy the end of the loop, the portion of the array from the start to position i-1 contains all the elements that don't match val, and i gives the new length of the modified array."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"  function removeElement(nums: number[], val: number): number {  \n  let i = 0;  \n  for (let j = 0; j < nums.length; j++) {  \n    if (nums[j] !== val) {  \n      nums[i] = nums[j];  \n      i++;  \n    }  }  \n  return i + 1;  \n};\n")),(0,a.yg)("h2",{id:"my-words"},"My Words"),(0,a.yg)("p",null,"This problem requires an in-place update of the ",(0,a.yg)("inlineCode",{parentName:"p"},"nums")," array. To address this, we use a two-pointer solution. We have two pointers, ",(0,a.yg)("inlineCode",{parentName:"p"},"i")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"j"),". Pointer ",(0,a.yg)("inlineCode",{parentName:"p"},"i")," represents the last position of processed elements different from the target. Pointer ",(0,a.yg)("inlineCode",{parentName:"p"},"j")," iterates through the ",(0,a.yg)("inlineCode",{parentName:"p"},"nums")," array, comparing each element to the target. If ",(0,a.yg)("inlineCode",{parentName:"p"},"nums[j]")," doesn't equal the target, we put ",(0,a.yg)("inlineCode",{parentName:"p"},"nums[j]")," to ",(0,a.yg)("inlineCode",{parentName:"p"},"nums[i]")," and increment ",(0,a.yg)("inlineCode",{parentName:"p"},"i")," by one. By the end, all elements before the ",(0,a.yg)("inlineCode",{parentName:"p"},"i")," position are different from the target. Thus, the length of this section is ",(0,a.yg)("inlineCode",{parentName:"p"},"i + 1"),"."))}y.isMDXComponent=!0},5680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>d});var r=t(6540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var m=r.createContext({}),s=function(e){var n=r.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(m.Provider,{value:n},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,m=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(t),g=a,d=u["".concat(m,".").concat(g)]||u[g]||y[g]||o;return t?r.createElement(d,i(i({ref:n},p),{},{components:t})):r.createElement(d,i({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=g;var l={};for(var m in n)hasOwnProperty.call(n,m)&&(l[m]=n[m]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"}}]);