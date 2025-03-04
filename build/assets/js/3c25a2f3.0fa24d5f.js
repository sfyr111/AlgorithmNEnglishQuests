"use strict";(self.webpackChunkalgorithm_n_english_quests=self.webpackChunkalgorithm_n_english_quests||[]).push([[9926],{5680:(e,t,n)=>{n.d(t,{xA:()=>g,yg:()=>c});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},g=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=a,c=m["".concat(p,".").concat(u)]||m[u]||d[u]||i;return n?r.createElement(c,o(o({ref:t},g),{},{components:n})):r.createElement(c,o({ref:t},g))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8269:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(8168),a=(n(6540),n(5680));const i={sidebar_position:2,title:"Valid"},o="[125.\xa0Valid Palindrome](https://leetcode.com/problems/valid-palindrome/)",l={unversionedId:"Array/Valid Palindrome",id:"Array/Valid Palindrome",title:"Valid",description:"A phrase is a\xa0palindrome\xa0if, after\xa0converting\xa0all uppercase letters into lowercase letters and removing all non-alphanumeric\xa0characters, it reads the same\xa0forward\xa0and backward. Alphanumeric\xa0characters\xa0include letters and numbers.",source:"@site/docs/Array/125. Valid Palindrome.md",sourceDirName:"Array",slug:"/Array/Valid Palindrome",permalink:"/docs/Array/Valid Palindrome",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Array/125. Valid Palindrome.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Valid"},sidebar:"tutorialSidebar",previous:{title:"twoSum",permalink:"/docs/Array/twoSum"},next:{title:"Remove Duplicates from Sorted Array",permalink:"/docs/Array/Remove Duplicates from Sorted Array"}},p={},s=[{value:"Solution",id:"solution",level:2},{value:"My Words",id:"my-words",level:2},{value:"Be Better",id:"be-better",level:2}],g={toc:s},m="wrapper";function d(e){let{components:t,...n}=e;return(0,a.yg)(m,(0,r.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"125valid-palindrome"},(0,a.yg)("a",{parentName:"h1",href:"https://leetcode.com/problems/valid-palindrome/"},"125.\xa0Valid Palindrome")),(0,a.yg)("p",null,"A phrase is a\xa0",(0,a.yg)("strong",{parentName:"p"},"palindrome"),"\xa0if, after\xa0converting\xa0all uppercase letters into lowercase letters and removing all non-alphanumeric\xa0characters, it reads the same\xa0forward\xa0and backward. Alphanumeric\xa0characters\xa0include letters and numbers."),(0,a.yg)("p",null,"Given a string\xa0",(0,a.yg)("inlineCode",{parentName:"p"},"s"),", return\xa0",(0,a.yg)("inlineCode",{parentName:"p"},"true"),"\xa0",(0,a.yg)("em",{parentName:"p"},"if it is a\xa0",(0,a.yg)("strong",{parentName:"em"},"palindrome"),", or"),"\xa0",(0,a.yg)("inlineCode",{parentName:"p"},"false"),"\xa0",(0,a.yg)("em",{parentName:"p"},"otherwise"),"."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Example 1:")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Input:"),' s = "A man, a plan, a canal: Panama"\n',(0,a.yg)("strong",{parentName:"p"},"Output:")," true\n",(0,a.yg)("strong",{parentName:"p"},"Explanation:"),' "amanaplanacanalpanama" is a palindrome.'),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Example 2:")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Input:"),' s = "race a car"\n',(0,a.yg)("strong",{parentName:"p"},"Output:")," false\n",(0,a.yg)("strong",{parentName:"p"},"Explanation:"),' "raceacar" is not a palindrome.'),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Example 3:")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Input:"),' s = " "\n',(0,a.yg)("strong",{parentName:"p"},"Output:")," true\n",(0,a.yg)("strong",{parentName:"p"},"Explanation:"),' s is an empty string "" after removing non-alphanumeric characters.\nSince an empty string reads the same forward and backward, it is a palindrome.'),(0,a.yg)("h2",{id:"solution"},"Solution"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"function isPalindrome(s: string): boolean {  \n  const str = s.replace(/[^a-z0-9]/gi, '').toLowerCase();  \n  let left = 0;  \n  let right = str.length - 1;  \n  \n  while (left < right) {  \n    if (str[left] !== str[right]) {  \n      return false;  \n    }    left++;  \n    right--;  \n  }  \n  return true;  \n};\n")),(0,a.yg)("h2",{id:"my-words"},"My Words"),(0,a.yg)("p",null,"For checking if this string is a palindrome, we can utilize a two-pointer solution without extra space to solve this. We have two pointers, ",(0,a.yg)("inlineCode",{parentName:"p"},"left")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"right.")," The ",(0,a.yg)("inlineCode",{parentName:"p"},"left")," starts by str and the ",(0,a.yg)("inlineCode",{parentName:"p"},"right")," at the last str position. While ",(0,a.yg)("inlineCode",{parentName:"p"},"left")," is less than ",(0,a.yg)("inlineCode",{parentName:"p"},"right")," to compare ",(0,a.yg)("inlineCode",{parentName:"p"},"str[left]")," with ",(0,a.yg)("inlineCode",{parentName:"p"},"str[right]"),", if they do not equal, return ",(0,a.yg)("inlineCode",{parentName:"p"},"false")," otherwise, move ",(0,a.yg)("inlineCode",{parentName:"p"},"left"),", add up one step, move ",(0,a.yg)("inlineCode",{parentName:"p"},"right ")," cut one step, continue to compare next a couple of char. When these two pointers meet, that ",(0,a.yg)("inlineCode",{parentName:"p"},"left")," equals ",(0,a.yg)("inlineCode",{parentName:"p"},"right"),", so each group element is equal, ending the loop returning ",(0,a.yg)("inlineCode",{parentName:"p"},"true"),"."),(0,a.yg)("h2",{id:"be-better"},"Be Better"),(0,a.yg)("p",null,"Original:"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"For checking if this string is a palindrome, we can utilize a")),(0,a.yg)("p",null,"Adjusted:"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"To check if the string is a palindrome, we use a two-pointer solution without extra space.")),(0,a.yg)("p",null,'Explanation: The word "for" and "utilize" were removed to make the sentence more concise.'),(0,a.yg)("hr",null),(0,a.yg)("p",null,"Original:"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"We have two pointers, ",(0,a.yg)("inlineCode",{parentName:"p"},"left")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"right.")," The ",(0,a.yg)("inlineCode",{parentName:"p"},"left")," starts by str and the ",(0,a.yg)("inlineCode",{parentName:"p"},"right")," at the last str position.")),(0,a.yg)("p",null,"Adjusted:"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"We have two pointers, ",(0,a.yg)("inlineCode",{parentName:"p"},"left")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"right"),". ",(0,a.yg)("inlineCode",{parentName:"p"},"Left")," starts at the beginning of ",(0,a.yg)("inlineCode",{parentName:"p"},"str")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"right")," at the end.")),(0,a.yg)("p",null,"Explanation: The adjusted version is more straightforward and avoids unnecessary repetition."),(0,a.yg)("hr",null),(0,a.yg)("p",null,"Original:"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"While ",(0,a.yg)("inlineCode",{parentName:"p"},"left")," is less than ",(0,a.yg)("inlineCode",{parentName:"p"},"right")," to compare ",(0,a.yg)("inlineCode",{parentName:"p"},"str[left]")," with ",(0,a.yg)("inlineCode",{parentName:"p"},"str[right]"),", if they do not equal, return ",(0,a.yg)("inlineCode",{parentName:"p"},"false")," otherwise, move ",(0,a.yg)("inlineCode",{parentName:"p"},"left"),", add up one step, move ",(0,a.yg)("inlineCode",{parentName:"p"},"right")," cut one step, continue to compare next a couple of char.")),(0,a.yg)("p",null,"Adjusted:"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"While ",(0,a.yg)("inlineCode",{parentName:"p"},"left")," is less than ",(0,a.yg)("inlineCode",{parentName:"p"},"right"),", we compare ",(0,a.yg)("inlineCode",{parentName:"p"},"str[left]")," with ",(0,a.yg)("inlineCode",{parentName:"p"},"str[right]"),". If they're not equal, we return ",(0,a.yg)("inlineCode",{parentName:"p"},"false"),". Otherwise, we increment ",(0,a.yg)("inlineCode",{parentName:"p"},"left")," and decrement ",(0,a.yg)("inlineCode",{parentName:"p"},"right"),", then continue comparing.")))}d.isMDXComponent=!0}}]);