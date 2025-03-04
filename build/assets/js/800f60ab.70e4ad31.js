"use strict";(self.webpackChunkalgorithm_n_english_quests=self.webpackChunkalgorithm_n_english_quests||[]).push([[3406],{1891:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var o=n(8168),r=(n(6540),n(5680));const i={},l="[19.\xa0Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/)",a={unversionedId:"linklist/Remove Nth Node From End of List",id:"linklist/Remove Nth Node From End of List",title:"[19.\xa0Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/)",description:"Problem",source:"@site/docs/linklist/19. Remove Nth Node From End of List.md",sourceDirName:"linklist",slug:"/linklist/Remove Nth Node From End of List",permalink:"/docs/linklist/Remove Nth Node From End of List",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/linklist/19. Remove Nth Node From End of List.md",tags:[],version:"current",sidebarPosition:19,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"2.\xa0Add Two Numbers",permalink:"/docs/linklist/Add Two Numbers"},next:{title:"[21.\xa0Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/)",permalink:"/docs/linklist/Merge Two Sorted Lists"}},s={},d=[{value:"Problem",id:"problem",level:2},{value:"Solution",id:"solution",level:2}],m={toc:d},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(p,(0,o.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"19remove-nth-node-from-end-of-list"},(0,r.yg)("a",{parentName:"h1",href:"https://leetcode.com/problems/remove-nth-node-from-end-of-list/"},"19.\xa0Remove Nth Node From End of List")),(0,r.yg)("h2",{id:"problem"},"Problem"),(0,r.yg)("p",null,"Given the\xa0",(0,r.yg)("inlineCode",{parentName:"p"},"head"),"\xa0of a linked list, remove the\xa0",(0,r.yg)("inlineCode",{parentName:"p"},"nth"),"\xa0node from the end of the list and return its head."),(0,r.yg)("h2",{id:"solution"},"Solution"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {  \n  let dummy = new ListNode(0, head);  \n  let slow = dummy;  \n  let fast = dummy;  \n  \n  for (let i = 0; i < n + 1; i++) {  \n    fast = fast.next;  \n  }  \n  \n  while (fast !== null) {  \n    fast = fast.next;  \n    slow = slow.next;  \n  }  \n  \n  slow.next = slow.next.next;  \n  \n  return dummy.next;  \n};\n")),(0,r.yg)("p",null,"We can solve this problem using the two-pointer technique, starting with a ",(0,r.yg)("inlineCode",{parentName:"p"},"dummy")," node. Both ",(0,r.yg)("inlineCode",{parentName:"p"},"slow")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"fast")," pointers are set to this ",(0,r.yg)("inlineCode",{parentName:"p"},"dummy")," node. First, we advance the ",(0,r.yg)("inlineCode",{parentName:"p"},"fast")," pointer by ",(0,r.yg)("inlineCode",{parentName:"p"},"n + 1")," steps. This extra step ensures the easy removal of the ",(0,r.yg)("inlineCode",{parentName:"p"},"n-th")," node from the end."),(0,r.yg)("p",null,"Then, we iterate over the linked list, moving both ",(0,r.yg)("inlineCode",{parentName:"p"},"slow")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"fast")," pointers together until ",(0,r.yg)("inlineCode",{parentName:"p"},"fast")," equals ",(0,r.yg)("inlineCode",{parentName:"p"},"null"),", indicating the end of the list. At this point, ",(0,r.yg)("inlineCode",{parentName:"p"},"slow")," is positioned just before the node that needs to be deleted. We skip over the ",(0,r.yg)("inlineCode",{parentName:"p"},"n-th")," node by setting ",(0,r.yg)("inlineCode",{parentName:"p"},"slow.next")," to ",(0,r.yg)("inlineCode",{parentName:"p"},"slow.next.next"),". Finally, we return ",(0,r.yg)("inlineCode",{parentName:"p"},"dummy.next"),", which is the new head of the list."))}u.isMDXComponent=!0},5680:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>f});var o=n(6540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),p=d(n),c=r,f=p["".concat(s,".").concat(c)]||p[c]||u[c]||i;return n?o.createElement(f,l(l({ref:t},m),{},{components:n})):o.createElement(f,l({ref:t},m))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[p]="string"==typeof e?e:r,l[1]=a;for(var d=2;d<i;d++)l[d]=n[d];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"}}]);