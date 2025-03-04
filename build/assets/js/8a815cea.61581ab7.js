"use strict";(self.webpackChunkalgorithm_n_english_quests=self.webpackChunkalgorithm_n_english_quests||[]).push([[6293],{5680:(e,r,t)=>{t.d(r,{xA:()=>u,yg:()=>f});var n=t(6540);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),d=o,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||a;return t?n.createElement(f,i(i({ref:r},u),{},{components:t})):n.createElement(f,i({ref:r},u))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5743:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=t(8168),o=(t(6540),t(5680));const a={},i="235.\xa0Lowest Common Ancestor of a Binary Search Tree",l={unversionedId:"trees/Lowest Common Ancestor of a Binary Search Tree",id:"trees/Lowest Common Ancestor of a Binary Search Tree",title:"235.\xa0Lowest Common Ancestor of a Binary Search Tree",description:"235.\xa0Lowest Common Ancestor of a Binary Search Tree",source:"@site/docs/trees/235.\xa0Lowest Common Ancestor of a Binary Search Tree.md",sourceDirName:"trees",slug:"/trees/Lowest Common Ancestor of a Binary Search Tree",permalink:"/docs/trees/Lowest Common Ancestor of a Binary Search Tree",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/trees/235.\xa0Lowest Common Ancestor of a Binary Search Tree.md",tags:[],version:"current",sidebarPosition:235,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"230. Kth Smallest Element in a BST",permalink:"/docs/trees/Kth Smallest Element in a BST"},next:{title:"297. Serialize and Deserialize Binary Tree",permalink:"/docs/trees/Serialize and Deserialize Binary Tree"}},s={},c=[{value:"Problem",id:"problem",level:2},{value:"Solution",id:"solution",level:2}],u={toc:c},p="wrapper";function m(e){let{components:r,...t}=e;return(0,o.yg)(p,(0,n.A)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"235lowest-common-ancestor-of-a-binary-search-tree"},"235.\xa0Lowest Common Ancestor of a Binary Search Tree"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/"},"235.\xa0Lowest Common Ancestor of a Binary Search Tree")),(0,o.yg)("h2",{id:"problem"},"Problem"),(0,o.yg)("p",null,"Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST."),(0,o.yg)("p",null,"According\xa0to the\xa0",(0,o.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Lowest_common_ancestor"},"definition of LCA on Wikipedia"),": \u201cThe lowest common ancestor is\xa0defined\xa0between two nodes\xa0",(0,o.yg)("inlineCode",{parentName:"p"},"p"),"\xa0and\xa0",(0,o.yg)("inlineCode",{parentName:"p"},"q"),"\xa0as the lowest node in\xa0",(0,o.yg)("inlineCode",{parentName:"p"},"T"),"\xa0that has both\xa0",(0,o.yg)("inlineCode",{parentName:"p"},"p"),"\xa0and\xa0",(0,o.yg)("inlineCode",{parentName:"p"},"q"),"\xa0as descendants (where we allow\xa0",(0,o.yg)("strong",{parentName:"p"},"a node to be a descendant of itself"),").\u201d"),(0,o.yg)("h2",{id:"solution"},"Solution"),(0,o.yg)("p",null,"To find the  LCA in a binary search tree. We start at the root of the tree. Then we loop while there is a current node. Inside the loop, we check the values of p and q against the current node's value. If both values are less than the current node's value, we go left. If both values are greater than the current node's value, we go right. If the values of p and q are on the two sides of the current's value or equal to it, we've found the LCA. We return the current node as the LCA. If we don't find it, we return null."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-typescript"},"function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {\n  let current = root;\n\n  while (current) {\n    if (p.val < current.val && q.val < current.val) {\n      current = current.left;\n    } else if (p.val > current.val && q.val > current.val) {\n      current = current.right;\n    } else {\n      return current;\n    }\n  }\n\n  return null;\n};\n")))}m.isMDXComponent=!0}}]);