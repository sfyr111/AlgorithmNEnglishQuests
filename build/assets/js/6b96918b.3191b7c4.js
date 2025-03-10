"use strict";(self.webpackChunkalgorithm_n_english_quests=self.webpackChunkalgorithm_n_english_quests||[]).push([[1202],{276:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(8168),a=(r(6540),r(5680));const o={},i="124. Binary Tree Maximum Path Sum",s={unversionedId:"trees/Binary Tree Maximum Path Sum",id:"trees/Binary Tree Maximum Path Sum",title:"124. Binary Tree Maximum Path Sum",description:"124. Binary Tree\xa0Maximum\xa0Path Sum",source:"@site/docs/trees/124. Binary Tree Maximum Path Sum.md",sourceDirName:"trees",slug:"/trees/Binary Tree Maximum Path Sum",permalink:"/AlgorithmNEnglishQuests/docs/trees/Binary Tree Maximum Path Sum",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/trees/124. Binary Tree Maximum Path Sum.md",tags:[],version:"current",sidebarPosition:124,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"112. Path Sum",permalink:"/AlgorithmNEnglishQuests/docs/trees/Path Sum"},next:{title:"144. Binary Tree Preorder Traversal",permalink:"/AlgorithmNEnglishQuests/docs/trees/Binary Tree Preorder Traversal"}},u={},l=[{value:"Problem",id:"problem",level:2},{value:"Solution",id:"solution",level:2}],m={toc:l},h="wrapper";function p(e){let{components:t,...r}=e;return(0,a.yg)(h,(0,n.A)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"124-binary-tree-maximum-path-sum"},"124. Binary Tree Maximum Path Sum"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://leetcode.com/problems/binary-tree-maximum-path-sum/"},"124. Binary Tree\xa0Maximum\xa0Path Sum")),(0,a.yg)("h2",{id:"problem"},"Problem"),(0,a.yg)("p",null,"A\xa0",(0,a.yg)("strong",{parentName:"p"},"path"),"\xa0in a binary tree is a\xa0sequence\xa0of nodes where each\xa0pair\xa0of adjacent nodes in the\xa0sequence\xa0has an edge connecting them. A node can only appear in the\xa0sequence\xa0",(0,a.yg)("strong",{parentName:"p"},"at most once"),". Note that the path does not need to pass through the root."),(0,a.yg)("p",null,"The\xa0",(0,a.yg)("strong",{parentName:"p"},"path sum"),"\xa0of a path is the sum of the node's values in the path."),(0,a.yg)("p",null,"Given the\xa0",(0,a.yg)("inlineCode",{parentName:"p"},"root"),"\xa0of a binary tree, return\xa0",(0,a.yg)("em",{parentName:"p"},"the\xa0maximum\xa0",(0,a.yg)("strong",{parentName:"em"},"path sum"),"\xa0of any\xa0",(0,a.yg)("strong",{parentName:"em"},"non-empty"),"\xa0path"),"."),(0,a.yg)("h2",{id:"solution"},"Solution"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Initializing the maximum sum with the root's value."),(0,a.yg)("li",{parentName:"ol"},"Using a depth-first search (DFS) approach to explore possible paths down the tree."),(0,a.yg)("li",{parentName:"ol"},"Calculating the maximum path sum at each node, considering paths that include the node and go down either the left or right subtree."),(0,a.yg)("li",{parentName:"ol"},"Considering the possibility of a path that passes through a node and includes sums from both the left and right subtrees, updating the overall maximum sum if this path offers a higher sum."),(0,a.yg)("li",{parentName:"ol"},"Returning the highest path sum found after exploring all possible paths in the tree.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-typescript"},"function maxPathSum(root: TreeNode | null): number {\n  if (!root) return 0; // If the tree is empty, return 0 as the maximum path sum.\n\n  let res: number = root.val; // Initialize the result with the root value.\n\n  function dfs(node: TreeNode | null): number {\n    if (node === null) return 0; // Base case: If the node is null, return 0.\n\n    let leftMax = Math.max(dfs(node.left), 0); // Calculate the max path sum of the left subtree.\n    let rightMax = Math.max(dfs(node.right), 0); // Calculate the max path sum of the right subtree.\n\n    // Update the maximum path sum for the current node, considering the split.\n    res = Math.max(res, node.val + leftMax + rightMax);\n\n    // Return the max path sum without the split.\n    return node.val + Math.max(leftMax, rightMax);\n  }\n\n  dfs(root); // Start the DFS from the root node.\n  return res; // Return the final result.\n}\n")))}p.isMDXComponent=!0},5680:(e,t,r)=>{r.d(t,{xA:()=>m,yg:()=>d});var n=r(6540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),h=l(r),c=a,d=h["".concat(u,".").concat(c)]||h[c]||p[c]||o;return r?n.createElement(d,i(i({ref:t},m),{},{components:r})):n.createElement(d,i({ref:t},m))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=c;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[h]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"}}]);