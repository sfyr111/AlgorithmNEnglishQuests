"use strict";(self.webpackChunkalgorithm_n_english_quests=self.webpackChunkalgorithm_n_english_quests||[]).push([[1845],{4273:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(8168),i=(r(6540),r(5680));const o={},a="199.\xa0Binary Tree Right Side View",l={unversionedId:"trees/Binary Tree Right Side View",id:"trees/Binary Tree Right Side View",title:"199.\xa0Binary Tree Right Side View",description:"199.\xa0Binary Tree Right Side View",source:"@site/docs/trees/199.\xa0Binary Tree Right Side View.md",sourceDirName:"trees",slug:"/trees/Binary Tree Right Side View",permalink:"/AlgorithmNEnglishQuests/docs/trees/Binary Tree Right Side View",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/trees/199.\xa0Binary Tree Right Side View.md",tags:[],version:"current",sidebarPosition:199,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"145. Binary Tree Postorder Traversal",permalink:"/AlgorithmNEnglishQuests/docs/trees/Binary Tree Postorder Traversal"},next:{title:"226.\xa0Invert Binary Tree",permalink:"/AlgorithmNEnglishQuests/docs/trees/Invert Binary Tree"}},s={},u=[{value:"Problem",id:"problem",level:2},{value:"Solution",id:"solution",level:2}],h={toc:u},d="wrapper";function c(e){let{components:t,...r}=e;return(0,i.yg)(d,(0,n.A)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"199binary-tree-right-side-view"},"199.\xa0Binary Tree Right Side View"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://leetcode.com/problems/binary-tree-right-side-view/"},"199.\xa0Binary Tree Right Side View")),(0,i.yg)("h2",{id:"problem"},"Problem"),(0,i.yg)("p",null,"Given the\xa0",(0,i.yg)("inlineCode",{parentName:"p"},"root"),"\xa0of a binary tree, imagine yourself standing on the\xa0",(0,i.yg)("strong",{parentName:"p"},"right side"),"\xa0of it, return\xa0",(0,i.yg)("em",{parentName:"p"},"the values of the nodes you can see ordered from top to bottom"),"."),(0,i.yg)("h2",{id:"solution"},"Solution"),(0,i.yg)("p",null,"To get the right side view of a binary tree. It means we want to see the last node on each level from the right side. We start with a queue including the root node. We go level by level with a loop. For each level, we record how many nodes it has with qLen. We have a variable rightSide to keep the last node we see on the level. We use a loop to go through all nodes on the current level. If a node is not null, we update rightSide to this node. Then we add its left and right children to the queue for the next level. After we finish the level, if rightSide is not null, we put its value into the result array res. We keep doing this until there are no more nodes in the queue. Finally, we return res, which has the values of the rightmost node from each level."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-typescript"},"function rightSideView(root: TreeNode | null): number[] {\n  let res: number[] = [];\n  let queue: TreeNode[] = [root];\n\n  while (queue.length > 0) {\n    let rightSide = null;\n    let qLen = queue.length;\n\n    for (let i = 0; i < qLen; i++) {\n      const node = queue.shift();\n      if (node) {\n        rightSide = node;\n        if (rightSide) queue.push(rightSide.left);\n        if (rightSide) queue.push(rightSide.right);\n      }\n    }\n\n    if (rightSide)\n      res.push(rightSide.val);\n  }\n\n  return res;\n};\n")))}c.isMDXComponent=!0},5680:(e,t,r)=>{r.d(t,{xA:()=>h,yg:()=>g});var n=r(6540);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},h=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),d=u(r),p=i,g=d["".concat(s,".").concat(p)]||d[p]||c[p]||o;return r?n.createElement(g,a(a({ref:t},h),{},{components:r})):n.createElement(g,a({ref:t},h))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);