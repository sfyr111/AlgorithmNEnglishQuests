"use strict";(self.webpackChunkalgorithm_n_english_quests=self.webpackChunkalgorithm_n_english_quests||[]).push([[8946],{2576:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var i=n(8168),r=(n(6540),n(5680));const o={},l="[876.\xa0Middle of the Linked List](https://leetcode.com/problems/middle-of-the-linked-list/)",a={unversionedId:"linklist/Middle of the Linked List",id:"linklist/Middle of the Linked List",title:"[876.\xa0Middle of the Linked List](https://leetcode.com/problems/middle-of-the-linked-list/)",description:"Problem",source:"@site/docs/linklist/876.\xa0Middle of the Linked List.md",sourceDirName:"linklist",slug:"/linklist/Middle of the Linked List",permalink:"/AlgorithmNEnglishQuests/docs/linklist/Middle of the Linked List",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/linklist/876.\xa0Middle of the Linked List.md",tags:[],version:"current",sidebarPosition:876,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"287.\xa0Find the Duplicate Number]",permalink:"/AlgorithmNEnglishQuests/docs/linklist/Find the Duplicate Number"},next:{title:"3.\xa0Longest Substring Without Repeating Characters",permalink:"/AlgorithmNEnglishQuests/docs/sliding window/Longest Substring Without Repeating Characters"}},s={},d=[{value:"Problem",id:"problem",level:2},{value:"Solution",id:"solution",level:2}],p={toc:d},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.yg)(c,(0,i.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"876middle-of-the-linked-list"},(0,r.yg)("a",{parentName:"h1",href:"https://leetcode.com/problems/middle-of-the-linked-list/"},"876.\xa0Middle of the Linked List")),(0,r.yg)("h2",{id:"problem"},"Problem"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://leetcode.com/problems/middle-of-the-linked-list/"},"876.\xa0Middle of the Linked List"),"\nGiven the\xa0",(0,r.yg)("inlineCode",{parentName:"p"},"head"),"\xa0of a singly linked list, return\xa0",(0,r.yg)("em",{parentName:"p"},"the middle node of the linked list"),"."),(0,r.yg)("p",null,"If there are two middle nodes, return\xa0",(0,r.yg)("strong",{parentName:"p"},"the second middle"),"\xa0node."),(0,r.yg)("h2",{id:"solution"},"Solution"),(0,r.yg)("p",null,"``"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"function middleNode(head: ListNode | null): ListNode | null {  \n  let slow = head;  \n  let fast = head;  \n  \n  while (fast !== null && fast.next !== null) {  \n    slow = slow.next;  \n    fast = fast.next.next;  \n  }  \n  \n  return slow;  \n};\n")),(0,r.yg)("p",null,"This problem can be solved using the two-pointer technique. Initially, we set both ",(0,r.yg)("inlineCode",{parentName:"p"},"slow")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"fast")," pointers to the head of the list. In a while loop, we iterate over the list with ",(0,r.yg)("inlineCode",{parentName:"p"},"slow")," moving one node at a time (",(0,r.yg)("inlineCode",{parentName:"p"},"slow = slow.next"),") and ",(0,r.yg)("inlineCode",{parentName:"p"},"fast")," moving two nodes at a time (",(0,r.yg)("inlineCode",{parentName:"p"},"fast = fast.next.next"),"). This iteration continues until ",(0,r.yg)("inlineCode",{parentName:"p"},"fast")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"fast.next")," becomes ",(0,r.yg)("inlineCode",{parentName:"p"},"null"),", indicating that ",(0,r.yg)("inlineCode",{parentName:"p"},"fast")," has reached the end of the list. Since ",(0,r.yg)("inlineCode",{parentName:"p"},"fast")," moves twice as fast as ",(0,r.yg)("inlineCode",{parentName:"p"},"slow"),", by this time ",(0,r.yg)("inlineCode",{parentName:"p"},"fast")," reaches the end, ",(0,r.yg)("inlineCode",{parentName:"p"},"slow")," will be at the middle of the list. Therefore, we return ",(0,r.yg)("inlineCode",{parentName:"p"},"slow"),", which now points to the middle node."))}m.isMDXComponent=!0},5680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>h});var i=n(6540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),c=d(n),u=r,h=c["".concat(s,".").concat(u)]||c[u]||m[u]||o;return n?i.createElement(h,l(l({ref:t},p),{},{components:n})):i.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[c]="string"==typeof e?e:r,l[1]=a;for(var d=2;d<o;d++)l[d]=n[d];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);