"use strict";(self.webpackChunkalgorithm_n_english_quests=self.webpackChunkalgorithm_n_english_quests||[]).push([[8989],{5509:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var t=n(8168),a=(n(6540),n(5680));const i={},o="297. Serialize and Deserialize Binary Tree",s={unversionedId:"trees/Serialize and Deserialize Binary Tree",id:"trees/Serialize and Deserialize Binary Tree",title:"297. Serialize and Deserialize Binary Tree",description:"297.\xa0Serialize\xa0and Deserialize Binary Tree",source:"@site/docs/trees/297. Serialize and Deserialize Binary Tree.md",sourceDirName:"trees",slug:"/trees/Serialize and Deserialize Binary Tree",permalink:"/docs/trees/Serialize and Deserialize Binary Tree",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/trees/297. Serialize and Deserialize Binary Tree.md",tags:[],version:"current",sidebarPosition:297,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"235.\xa0Lowest Common Ancestor of a Binary Search Tree",permalink:"/docs/trees/Lowest Common Ancestor of a Binary Search Tree"},next:{title:"543.\xa0Diameter\xa0of Binary Tree",permalink:"/docs/trees/Diameter\xa0of Binary Tree"}},l={},c=[{value:"Problem",id:"problem",level:2},{value:"Solution",id:"solution",level:2}],d={toc:c},u="wrapper";function p(e){let{components:r,...n}=e;return(0,a.yg)(u,(0,t.A)({},d,n,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"297-serialize-and-deserialize-binary-tree"},"297. Serialize and Deserialize Binary Tree"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://leetcode.com/problems/serialize-and-deserialize-binary-tree/"},"297.\xa0Serialize\xa0and Deserialize Binary Tree")),(0,a.yg)("h2",{id:"problem"},"Problem"),(0,a.yg)("p",null,"Serialization is the process of\xa0converting\xa0a data structure or object into a\xa0sequence\xa0of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment."),(0,a.yg)("p",null,"Design an algorithm to\xa0serialize\xa0and deserialize a binary tree. There is no\xa0restriction\xa0on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be\xa0serialized\xa0to a string and this string can be deserialized to the\xa0original\xa0tree structure."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Clarification:"),"\xa0The input/output format is the same as\xa0",(0,a.yg)("a",{parentName:"p",href:"https://support.leetcode.com/hc/en-us/articles/360011883654-What-does-1-null-2-3-mean-in-binary-tree-representation-"},"how LeetCode\xa0serializes\xa0a binary tree"),". You do not necessarily need to follow this format, so please be creative and come up with different\xa0approaches\xa0yourself."),(0,a.yg)("h2",{id:"solution"},"Solution"),(0,a.yg)("p",null,"To converting a binary tree into a string and then back to a tree. For 'serialize', we use a process called DFS, short for depth-first search, to go through each node. If a node is null, we add 'N' to our string. If not, we add the node's value. We do this for all nodes and then make a big string from it. For 'deserialize', we turn the string back into a tree. We split the string into parts. If a part is 'N', it means there was no node there, so we do nothing. Otherwise, we make a new node with that number. We do this for every part to rebuild the tree."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-typescript"},"function serialize(root: TreeNode | null): string {  \n  const res: string[] = [];  \n  \n  function dfs(node: TreeNode | null) {  \n    if (node === null) {  \n      res.push('N');  \n      return;  \n    }  \n    res.push(node.val.toString());  \n    dfs(node.left);  \n    dfs(node.right);  \n  }  \n  \n  dfs(root);  \n  return res.join();  \n};  \n  \nfunction deserialize(data: string): TreeNode | null {  \n  const vals = data.split(',');  \n  \n  function dfs(): TreeNode | null {  \n    const val = vals.shift();  \n    if (val === 'N') {  \n      return null;  \n    }    const node = new TreeNode(Number(val));  \n  \n    node.left = dfs();  \n    node.right = dfs();  \n    return node;  \n  }  \n  \n  return dfs();  \n};\n\n")))}p.isMDXComponent=!0},5680:(e,r,n)=>{n.d(r,{xA:()=>d,yg:()=>m});var t=n(6540);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=t.createContext({}),c=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},d=function(e){var r=c(e.components);return t.createElement(l.Provider,{value:r},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),f=a,m=u["".concat(l,".").concat(f)]||u[f]||p[f]||i;return n?t.createElement(m,o(o({ref:r},d),{},{components:n})):t.createElement(m,o({ref:r},d))}));function m(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);