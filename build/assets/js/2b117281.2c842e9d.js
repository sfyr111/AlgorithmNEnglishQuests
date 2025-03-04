"use strict";(self.webpackChunkalgorithm_n_english_quests=self.webpackChunkalgorithm_n_english_quests||[]).push([[7635],{5680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>h});var r=n(6540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(n),m=o,h=c["".concat(l,".").concat(m)]||c[m]||p[m]||a;return n?r.createElement(h,i(i({ref:t},d),{},{components:n})):r.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9830:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=n(8168),o=(n(6540),n(5680));const a={},i="1448.\xa0Count\xa0Good Nodes in Binary Tree",s={unversionedId:"trees/Count\xa0Good Nodes in Binary Tree",id:"trees/Count\xa0Good Nodes in Binary Tree",title:"1448.\xa0Count\xa0Good Nodes in Binary Tree",description:"1448.\xa0Count\xa0Good Nodes in Binary Tree",source:"@site/docs/trees/1448.\xa0Count\xa0Good Nodes in Binary Tree.md",sourceDirName:"trees",slug:"/trees/Count\xa0Good Nodes in Binary Tree",permalink:"/docs/trees/Count\xa0Good Nodes in Binary Tree",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/trees/1448.\xa0Count\xa0Good Nodes in Binary Tree.md",tags:[],version:"current",sidebarPosition:1448,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"701. Insert into a Binary Search Tree",permalink:"/docs/trees/Insert into a Binary Search Tree"},next:{title:"Valid",permalink:"/docs/two pointers/Valid Palindrome"}},l={},u=[{value:"Problem",id:"problem",level:2},{value:"Solution",id:"solution",level:2}],d={toc:u},c="wrapper";function p(e){let{components:t,...n}=e;return(0,o.yg)(c,(0,r.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"1448countgood-nodes-in-binary-tree"},"1448.\xa0Count\xa0Good Nodes in Binary Tree"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://leetcode.com/problems/count-good-nodes-in-binary-tree/"},"1448.\xa0Count\xa0Good Nodes in Binary Tree")),(0,o.yg)("h2",{id:"problem"},"Problem"),(0,o.yg)("p",null,"Given a binary tree\xa0",(0,o.yg)("inlineCode",{parentName:"p"},"root"),", a node\xa0",(0,o.yg)("em",{parentName:"p"},"X"),"\xa0in the tree is named\xa0",(0,o.yg)("strong",{parentName:"p"},"good"),"\xa0if in the path from root to\xa0",(0,o.yg)("em",{parentName:"p"},"X"),"\xa0there are no nodes with a value\xa0",(0,o.yg)("em",{parentName:"p"},"greater than"),"\xa0X."),(0,o.yg)("p",null,"Return the number of\xa0",(0,o.yg)("strong",{parentName:"p"},"good"),"\xa0nodes in the binary tree."),(0,o.yg)("h2",{id:"solution"},"Solution"),(0,o.yg)("p",null,"To count the number of good nodes in a binary tree. A good node is one where its value is greater than or equal to all the values of nodes on the path from the root to that node. We start with a variable res set to zero. This counts the number of good nodes. We then define a recursive function dfs that takes a node and the maximum value found so far on the path. If the node is null, we return zero because there's nothing to check. If the node's value is greater than or equal to the maximum value, we increase res by one because this node is a good node. We update the maximum value with the larger of the current maximum or the node's value. Then we call dfs recursively for the left and right children of the node, passing the updated maximum value to them. Finally, we execute the dfs function, starting with the root of the tree and using the root's value as the initial maximum value. This way, we traverse the whole tree and count all the good nodes."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-typescript"},"function goodNodes(root: TreeNode | null): number {  \n  let res = 0;  \n  \n  function dfs(node: TreeNode, maxVal: number) {  \n    if (node === null) {  \n      return 0;  \n    }  \n  \n    if (node.val >= maxVal) {  \n      res += 1;  \n    }  \n    maxVal = Math.max(maxVal, node.val);  \n  \n    dfs(node.left, maxVal);  \n    dfs(node.right, maxVal);  \n  \n    return res;  \n  }  \n  \n  return dfs(root, root.val);  \n};\n")))}p.isMDXComponent=!0}}]);