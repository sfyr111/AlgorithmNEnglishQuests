"use strict";(self.webpackChunkalgorithm_n_english_quests=self.webpackChunkalgorithm_n_english_quests||[]).push([[3194],{5576:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var n=t(8168),l=(t(6540),t(5680));const a={},o="102.\xa0Binary Tree Level Order\xa0Traversal",i={unversionedId:"trees/Binary Tree Level Order\xa0Traversal",id:"trees/Binary Tree Level Order\xa0Traversal",title:"102.\xa0Binary Tree Level Order\xa0Traversal",description:"102.\xa0Binary Tree Level Order\xa0Traversal",source:"@site/docs/trees/102.\xa0Binary Tree Level Order\xa0Traversal.md",sourceDirName:"trees",slug:"/trees/Binary Tree Level Order\xa0Traversal",permalink:"/AlgorithmNEnglishQuests/docs/trees/Binary Tree Level Order\xa0Traversal",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/trees/102.\xa0Binary Tree Level Order\xa0Traversal.md",tags:[],version:"current",sidebarPosition:102,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"101. Symmetric Tree",permalink:"/AlgorithmNEnglishQuests/docs/trees/Symmetric Tree"},next:{title:"104.\xa0Maximum Depth of Binary Tree",permalink:"/AlgorithmNEnglishQuests/docs/trees/Maximum Depth of Binary Tree"}},s={},u=[{value:"Problem",id:"problem",level:2},{value:"Solution",id:"solution",level:2}],c={toc:u},p="wrapper";function d(e){let{components:r,...t}=e;return(0,l.yg)(p,(0,n.A)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"102binary-tree-level-ordertraversal"},"102.\xa0Binary Tree Level Order\xa0Traversal"),(0,l.yg)("p",null,(0,l.yg)("a",{parentName:"p",href:"https://leetcode.com/problems/binary-tree-level-order-traversal/"},"102.\xa0Binary Tree Level Order\xa0Traversal")),(0,l.yg)("h2",{id:"problem"},"Problem"),(0,l.yg)("p",null,"Given the\xa0",(0,l.yg)("inlineCode",{parentName:"p"},"root"),"\xa0of a binary tree, return\xa0",(0,l.yg)("em",{parentName:"p"},"the level order\xa0traversal\xa0of its nodes' values"),". (i.e., from left to right, level by level)."),(0,l.yg)("h2",{id:"solution"},"Solution"),(0,l.yg)("p",null,"To record each level node of the tree, we can use the breath first search to solve. We start with a root node and put it in a queue. While there are nodes in the queue, we process each level. We record the length of the queue that represents the number of nodes at the current level. We create an empty list for the level. For every node at this level, we remove it from the queue, add its value to the level list, and if it has left or right children, we add them to the queue. After we finish one level, if we have values in the level list, we add it to our result list. We do this until the queue is empty. At the end, we return the result list that contains all levels' values."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-typescript"},"function levelOrder(root: TreeNode | null): number[][] {\n  let res: number[][] = [];\n  let queue = [root];\n\n  while (queue.length > 0) {\n    let level = [];\n    let len = queue.length;\n\n    for (let i = 0; i < len; i++) {\n      const current = queue.shift();\n\n      if (current) {\n        level.push(current.val);\n        if (current.left) queue.push(current.left);\n        if (current.right) queue.push(current.right);\n      }\n    }\n\n    if (level.length > 0) {\n      res.push(level);\n    }\n  }\n\n  return res;\n};\n")))}d.isMDXComponent=!0},5680:(e,r,t)=>{t.d(r,{xA:()=>c,yg:()=>h});var n=t(6540);function l(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){l(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,l=function(e,r){if(null==e)return{};var t,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(l[t]=e[t]);return l}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=n.createContext({}),u=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=u(e.components);return n.createElement(s.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},v=n.forwardRef((function(e,r){var t=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(t),v=l,h=p["".concat(s,".").concat(v)]||p[v]||d[v]||a;return t?n.createElement(h,o(o({ref:r},c),{},{components:t})):n.createElement(h,o({ref:r},c))}));function h(e,r){var t=arguments,l=r&&r.mdxType;if("string"==typeof e||l){var a=t.length,o=new Array(a);o[0]=v;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i[p]="string"==typeof e?e:l,o[1]=i;for(var u=2;u<a;u++)o[u]=t[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}v.displayName="MDXCreateElement"}}]);