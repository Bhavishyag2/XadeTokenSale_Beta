(this["webpackJsonpreact-dapp-metamask-connect"]=this["webpackJsonpreact-dapp-metamask-connect"]||[]).push([[0],{219:function(e,t,n){},366:function(e){e.exports=JSON.parse('[{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"version","type":"uint8"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"XadeTokenPurchased","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"balance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenAddr","type":"address"},{"internalType":"address","name":"_vestingContract","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_recipient","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"purchaseTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"contract ERC20Upgradeable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"vestingContract","outputs":[{"internalType":"contract IXadeTokenVesting","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]')},367:function(e){e.exports=JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"authorizer","type":"address"},{"indexed":true,"internalType":"bytes32","name":"nonce","type":"bytes32"}],"name":"AuthorizationCanceled","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"authorizer","type":"address"},{"indexed":true,"internalType":"bytes32","name":"nonce","type":"bytes32"}],"name":"AuthorizationUsed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"}],"name":"Blacklisted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"userAddress","type":"address"},{"indexed":false,"internalType":"address payable","name":"relayerAddress","type":"address"},{"indexed":false,"internalType":"bytes","name":"functionSignature","type":"bytes"}],"name":"MetaTransactionExecuted","type":"event"},{"anonymous":false,"inputs":[],"name":"Pause","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newRescuer","type":"address"}],"name":"RescuerChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"}],"name":"UnBlacklisted","type":"event"},{"anonymous":false,"inputs":[],"name":"Unpause","type":"event"},{"inputs":[],"name":"APPROVE_WITH_AUTHORIZATION_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"BLACKLISTER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"CANCEL_AUTHORIZATION_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DECREASE_ALLOWANCE_WITH_AUTHORIZATION_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DEPOSITOR_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"EIP712_VERSION","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"INCREASE_ALLOWANCE_WITH_AUTHORIZATION_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"META_TRANSACTION_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PAUSER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"RESCUER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TRANSFER_WITH_AUTHORIZATION_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"WITHDRAW_WITH_AUTHORIZATION_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"validAfter","type":"uint256"},{"internalType":"uint256","name":"validBefore","type":"uint256"},{"internalType":"bytes32","name":"nonce","type":"bytes32"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"approveWithAuthorization","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"authorizer","type":"address"},{"internalType":"bytes32","name":"nonce","type":"bytes32"}],"name":"authorizationState","outputs":[{"internalType":"enum GasAbstraction.AuthorizationState","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"blacklist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"blacklisters","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"authorizer","type":"address"},{"internalType":"bytes32","name":"nonce","type":"bytes32"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"cancelAuthorization","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"decrement","type":"uint256"},{"internalType":"uint256","name":"validAfter","type":"uint256"},{"internalType":"uint256","name":"validBefore","type":"uint256"},{"internalType":"bytes32","name":"nonce","type":"bytes32"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"decreaseAllowanceWithAuthorization","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"bytes","name":"depositData","type":"bytes"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"},{"internalType":"bytes","name":"functionSignature","type":"bytes"},{"internalType":"bytes32","name":"sigR","type":"bytes32"},{"internalType":"bytes32","name":"sigS","type":"bytes32"},{"internalType":"uint8","name":"sigV","type":"uint8"}],"name":"executeMetaTransaction","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getRoleMember","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleMemberCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"increment","type":"uint256"},{"internalType":"uint256","name":"validAfter","type":"uint256"},{"internalType":"uint256","name":"validBefore","type":"uint256"},{"internalType":"bytes32","name":"nonce","type":"bytes32"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"increaseAllowanceWithAuthorization","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"newName","type":"string"},{"internalType":"string","name":"newSymbol","type":"string"},{"internalType":"uint8","name":"newDecimals","type":"uint8"},{"internalType":"address","name":"childChainManager","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"initialized","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isBlacklisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pausers","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"tokenContract","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"rescueERC20","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rescuers","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"validAfter","type":"uint256"},{"internalType":"uint256","name":"validBefore","type":"uint256"},{"internalType":"bytes32","name":"nonce","type":"bytes32"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"transferWithAuthorization","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"unBlacklist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"newName","type":"string"},{"internalType":"string","name":"newSymbol","type":"string"}],"name":"updateMetadata","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"validAfter","type":"uint256"},{"internalType":"uint256","name":"validBefore","type":"uint256"},{"internalType":"bytes32","name":"nonce","type":"bytes32"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"withdrawWithAuthorization","outputs":[],"stateMutability":"nonpayable","type":"function"}]')},368:function(e,t){},377:function(e,t){},624:function(e,t,n){},625:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),i=n(137),r=n.n(i),l=n(646),p=n(639),o=Object(p.a)({fonts:{heading:"Inter",body:"Inter"}}),d=n(3),y=n.n(d),u=n(332),c=n(19),m=n(641),b=n(642),j=n(643),h=n(647),f=n(650),x=n(648),g=n(651),T=n(114),O=n(5),v=n(366),w=n(367);function k(){var e=function(e){o(e)},t=new T.a.providers.Web3Provider(window.ethereum,"any").getSigner(),n="0x5b19790a564a998163917A4aaA8209415fF7Cc01",s=new T.a.Contract(n,v,t),i=new T.a.Contract("0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",w,t),r=Object(a.useState)(""),l=Object(c.a)(r,2),p=l[0],o=l[1],d=Object(a.useState)(""),k=Object(c.a)(d,2),A=k[0],M=k[1];function C(){return(C=Object(u.a)(y.a.mark((function e(){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=T.a.utils.parseUnits(A,"mwei"),e.next=3,i.balanceOf(p);case 3:if(!(e.sent<t)){e.next=7;break}return console.log("Balance is less than the amount requested to swap."),e.abrupt("return");case 7:return e.next=9,i.allowance(p,n);case 9:if(!(e.sent<t)){e.next=21;break}return e.prev=11,e.next=14,i.approve(n,t);case 14:e.sent.wait(),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(11),console.log("User denied signing metamask transaction!!");case 21:return e.prev=21,e.next=24,s.purchaseTokens(p,t);case 24:e.sent.wait(),e.next=31;break;case 28:e.prev=28,e.t1=e.catch(21),console.log("User denied signing metamask transaction!!");case 31:case"end":return e.stop()}}),e,null,[[11,18],[21,28]])})))).apply(this,arguments)}return Object(O.jsxs)(m.a,{id:"mainBox",w:{sm:"20rem",md:"24rem",lg:"32rem"},mx:"auto",mt:"5.25rem",boxShadow:"rgb(0 0 0 / 8%) 0rem 0.37rem 0.62rem",borderRadius:"1.37rem",children:[Object(O.jsx)(b.a,{alignItems:"center",p:"1rem 1.25rem 0.5rem",bg:"#111",color:"rgb(86, 90, 105)",justifyContent:"space-between",borderRadius:"1.37rem 1.37rem 0 0",children:Object(O.jsxs)(j.a,{fontSize:"2xl",color:"white",fontWeight:"800",children:["Buy XADE Tokens",Object(O.jsx)("br",{})]})}),Object(O.jsxs)(m.a,{p:"0.5rem",bg:"#111",borderRadius:"0 0 1.37rem 1.37rem",children:[Object(O.jsxs)(b.a,{alignItems:"center",justifyContent:"space-between",bg:"#222",p:"1rem 1rem 1.7rem",borderRadius:"1.25rem",children:[Object(O.jsx)(m.a,{children:Object(O.jsxs)(h.a,{bg:"#333",borderRadius:"1.12rem",boxShadow:"rgb(0 0 0 / 8%) 0rem 5.25rem 0.62rem",fontWeight:"500",mr:"0.5rem",color:"white",children:[Object(O.jsx)(f.a,{boxSize:"1.5rem",src:"https://cryptologos.cc/logos/usd-coin-usdc-logo.png",mr:"0.5rem"}),"USDC"]})}),Object(O.jsx)(m.a,{children:Object(O.jsx)(x.a,{placeholder:"0.0",fontWeight:"500",fontSize:"1.5rem",width:"100%",size:"19rem",textAlign:"right",bg:"#222",outline:"none",border:"none",color:"white",focusBorderColor:"none",type:"string",value:A,onChange:function(e){M(e.target.value)}})})]}),Object(O.jsxs)(b.a,{alignItems:"center",justifyContent:"space-between",bg:"#222",pos:"relative",p:"1rem 1rem 1.7rem",borderRadius:"1.25rem",mt:"0.25rem",children:[Object(O.jsx)(m.a,{children:Object(O.jsxs)(h.a,{bg:"#333",borderRadius:"1.12rem",boxShadow:"rgb(0 0 0 / 8%) 0rem 5.25rem 0.62rem",fontWeight:"500",color:"white",mr:"0.5rem",children:[Object(O.jsx)(f.a,{boxSize:"1.5rem",src:"https://www.xade.finance/favicon.ico",mr:"0.5rem"}),"XUSD"]})}),Object(O.jsx)(b.a,{alignItems:"center",justifyContent:"center",bg:"#222",p:"0.18rem",borderRadius:"0.75rem",pos:"relative",top:"-2.37rem",left:"2.5rem",children:Object(O.jsx)(g.a,{bg:"#222",color:"rgb(128,128,128)",h:"1.5rem",width:"1.62rem",borderRadius:"0.75rem"})}),Object(O.jsx)(m.a,{children:Object(O.jsx)(x.a,{placeholder:"0.0",fontSize:"1.5rem",width:"100%",size:"19rem",textAlign:"right",bg:"#222",color:"white",outline:"none",border:"none",focusBorderColor:"none",type:"string",value:p,onChange:function(e){o(e.target.value)}})})]}),Object(O.jsx)("br",{}),Object(O.jsx)(b.a,{alignItems:"left",justifyContent:"left",p:"0.18rem",pos:"relative",color:"white",fontWeight:"800",fontSize:{base:"1.2rem",md:"1.3rem",lg:"1.3rem"},children:"The lot sizes are as follows:"}),Object(O.jsxs)(b.a,{alignItems:"left",justifyContent:"left",p:"0.18rem",pos:"relative",color:"white",fontSize:{base:"1.2rem",md:"1.3rem",lg:"1.3rem"},children:[Object(O.jsxs)("ul",{style:{marginLeft:"1rem"},children:[Object(O.jsx)("li",{children:"less than $200: $0.01 per token"}),Object(O.jsx)("li",{children:"$200 to $2000: $0.009 per token"}),Object(O.jsx)("li",{children:"$2000 to $20000: $0.007 per token "}),Object(O.jsx)("li",{children:"$20000 to $100000: $0.005 per token "}),Object(O.jsx)("li",{children:"$100000 or above: $0.0025 per token"})]}),Object(O.jsx)("br",{})]}),Object(O.jsx)("br",{}),Object(O.jsx)(m.a,{mt:"0.5rem",children:Object(O.jsx)(h.a,{color:"rgb(255, 255, 255)",bg:"#8787FF",width:"100%",p:"1.62rem",borderRadius:"1.25rem",onClick:function(){window.ethereum?window.ethereum.request({method:"eth_requestAccounts"}).then((function(t){return e(t[0])})):alert("install metamask extension!!")},children:"Connect Wallet"})}),Object(O.jsx)(m.a,{mt:"0.5rem",children:Object(O.jsx)(h.a,{color:"rgb(255, 255, 255)",bg:"#8787FF",width:"100%",p:"1.62rem",borderRadius:"1.25rem",onClick:function(){return C.apply(this,arguments)},children:"Swap Tokens"})})]}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{})]})}n(219);function A(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("section",{className:"smart-scroll",children:Object(O.jsx)("div",{className:"container-fluid",children:Object(O.jsxs)("nav",{className:"navbar navbar-expand-md navbar-dark",children:[Object(O.jsx)("a",{className:"navbar-brand heading-black",href:"#",children:Object(O.jsx)("div",{className:"name",children:"XADE"})}),Object(O.jsxs)("button",{className:"navbar-toggler navbar-toggler-right border-0",type:"button","data-toggle":"collapse","data-target":"#navbarCollapse","aria-controls":"navbarCollapse","aria-expanded":"false","aria-label":"Toggle navigation",onClick:function(){var e=document.getElementById("navbarCollapse");null!==e&&e.classList.toggle("show")},children:[Object(O.jsx)("i",{className:"fas fa-bars text-white"}),Object(O.jsx)("span",{"data-feather":"grid"})]}),Object(O.jsx)("div",{className:"collapse navbar-collapse",id:"navbarCollapse",children:Object(O.jsxs)("ul",{className:"navbar-nav ml-auto desktop-arrangement-navbar",children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)("a",{className:"nav-link page-scroll",href:"#",children:"Home"})}),Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)("a",{className:"nav-link page-scroll",href:"https://medium.com/@XadeFinance/what-is-xade-and-why-do-you-need-it-b483f46ba5a1",children:"Blog"})})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("li",{className:"Community",children:Object(O.jsx)("a",{className:"nav-link page-scroll",target:"_blank",href:"https://testflight.apple.com/join/ppdLa9dl",rel:"noreferrer",children:Object(O.jsx)("div",{className:"tack",children:"iOS App"})})}),"\xa0 \xa0",Object(O.jsx)("li",{className:"webapp",children:Object(O.jsx)("a",{className:"nav-link page-scroll",target:"_blank",href:"https://play.google.com/store/apps/details?id=com.org.xadefinance",rel:"noreferrer",children:Object(O.jsx)("div",{className:"greytack",children:"Android App"})})})]})]})})]})})})})}function M(){return Object(O.jsx)(m.a,{mt:{base:"1rem",md:"-4rem",lg:"-4rem"},children:Object(O.jsxs)(b.a,{direction:{base:"column",lg:"row"},justify:{base:"center",lg:"space-between"},alignItems:"center",height:{base:"auto",lg:"100vh"},children:[Object(O.jsxs)(m.a,{w:{base:"100%",lg:"45%"},p:4,children:[Object(O.jsxs)(b.a,{alignItems:"left",justifyContent:"left",p:"0.18rem",pos:"relative",color:"white",fontWeight:"700",fontSize:{base:"2.5rem",md:"2.7rem",lg:"2.7rem"},children:["Utilities",Object(O.jsx)("br",{})]}),Object(O.jsxs)(b.a,{alignItems:"center",justifyContent:"center",p:"0.18rem",pos:"relative",color:"white",fontSize:{base:"1.25rem",md:"1.5rem",lg:"1.5rem"},mt:"1.5rem",children:[Object(O.jsxs)("ul",{style:{listStylePosition:"inside",margin:0,padding:0},children:[Object(O.jsx)("li",{style:{marginBottom:"15px"},children:"Reduced fees on the platform based on token holdings"}),Object(O.jsx)("li",{style:{marginBottom:"15px"},children:"Governance for our money market(lending) protocol SabeX"}),Object(O.jsx)("li",{style:{marginBottom:"15px"},children:"Rewards token to get exclusive offers, discounts, and other perks on the Xade platform"})]}),Object(O.jsx)("br",{})]})]}),Object(O.jsxs)(m.a,{w:{base:"100%",lg:"45%"},p:4,children:[Object(O.jsx)(b.a,{alignItems:{base:"left",md:"left",lg:"left"},justifyContent:{base:"left",md:"left",lg:"left"},p:"0.18rem",pos:"relative",color:"white",fontWeight:"700",fontSize:{base:"2.5rem",md:"2.7rem",lg:"2.7rem"},mt:{base:"1.3rem",md:"12rem",lg:"10rem"},children:"Fees Discount based on Token Holdings"}),Object(O.jsxs)(b.a,{alignItems:{base:"left",md:"left",lg:"left"},justifyContent:{base:"left",md:"left",lg:"left"},p:"0.18rem",pos:"relative",color:"white",fontSize:{base:"1.25rem",md:"1.3rem",lg:"1.3rem"},mt:"1.5rem",children:[Object(O.jsxs)("table",{style:{backgroundColor:"black",borderCollapse:"collapse"},children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{style:{color:"white"},children:[Object(O.jsx)("th",{style:{backgroundColor:"#313145",padding:"10px"},children:"Xade Token(USD)"}),Object(O.jsx)("th",{style:{backgroundColor:"#2a2a38",padding:"10px"},children:"Discount in Xade fees"})]})}),Object(O.jsxs)("tbody",{children:[Object(O.jsxs)("tr",{style:{color:"white"},children:[Object(O.jsx)("td",{style:{backgroundColor:"#1d1d28",padding:"10px"},children:"$10"}),Object(O.jsx)("td",{style:{backgroundColor:"#181820",padding:"10px"},children:"2%"})]}),Object(O.jsxs)("tr",{style:{color:"white"},children:[Object(O.jsx)("td",{style:{backgroundColor:"#1d1d28",padding:"10px"},children:"$100"}),Object(O.jsx)("td",{style:{backgroundColor:"#181820",padding:"10px"},children:"5%"})]}),Object(O.jsxs)("tr",{style:{color:"white"},children:[Object(O.jsx)("td",{style:{backgroundColor:"#1d1d28",padding:"10px"},children:"$1,000"}),Object(O.jsx)("td",{style:{backgroundColor:"#181820",padding:"10px"},children:"10%"})]}),Object(O.jsxs)("tr",{style:{color:"white"},children:[Object(O.jsx)("td",{style:{backgroundColor:"#1d1d28",padding:"10px"},children:"$10,000"}),Object(O.jsx)("td",{style:{backgroundColor:"#181820",padding:"10px"},children:"25%"})]}),Object(O.jsxs)("tr",{style:{color:"white"},children:[Object(O.jsx)("td",{style:{backgroundColor:"#1d1d28",padding:"10px"},children:"$100,000"}),Object(O.jsx)("td",{style:{backgroundColor:"#181820",padding:"10px"},children:"45%"})]}),Object(O.jsxs)("tr",{style:{color:"white"},children:[Object(O.jsx)("td",{style:{backgroundColor:"#1d1d28",padding:"10px"},children:"$1,000,000"}),Object(O.jsx)("td",{style:{backgroundColor:"#181820",padding:"10px"},children:"75%"})]})]})]}),Object(O.jsx)("br",{})]})]})]})})}function C(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("footer",{className:"py-6",children:Object(O.jsxs)("div",{className:"container",children:[Object(O.jsxs)("div",{className:"row",children:[Object(O.jsxs)("div",{className:"col-sm-5 mr-auto",children:[Object(O.jsx)("div",{id:"footerxade",children:Object(O.jsx)("h4",{children:"XADE"})}),Object(O.jsx)("p",{className:"footerx",children:"Xade is compeletely non-custodial and never takes control over the user's funds while remaining compeletely transparent since all the activity is available through the block explorers."})]}),Object(O.jsxs)("div",{className:"col-sm-2",children:[Object(O.jsx)("h5",{children:"Media"}),Object(O.jsxs)("ul",{className:"list-unstyled",children:[Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:"https://www.youtube.com/channel/UCK1Bgb4A2OvXDHuCHKI7c-g",target:"_blank",rel:"noreferrer",children:"YouTube"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:"https://github.com/xadefinance",target:"_blank",rel:"noreferrer",children:"GitHub"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:"https://medium.com/@XadeFinance",target:"_blank",rel:"noreferrer",children:"Medium"})})]})]}),Object(O.jsxs)("div",{className:"col-sm-2",children:[Object(O.jsx)("h5",{children:"Community"}),Object(O.jsxs)("ul",{className:"list-unstyled",children:[Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:"https://instagram.com/xade.finance?",target:"_blank",rel:"noreferrer",children:"Instagram"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:"https://twitter.com/xadefinance/",target:"_blank",rel:"noreferrer",children:"Twitter"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:"https://www.linkedin.com/company/xade-finance/",target:"_blank",rel:"noreferrer",children:"LinkedIn"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:"https://discord.gg/H7U3nB4Aa8",target:"_blank",rel:"noreferrer",children:"Discord"})})]})]}),Object(O.jsxs)("div",{className:"col-sm-2",children:[Object(O.jsx)("h5",{children:"Contact Us"}),Object(O.jsxs)("ul",{className:"list-unstyled",children:[Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:"mailto:development@xade.finance",target:"_blank",rel:"noreferrer",children:"Email"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:"tel:+919836711182",target:"_blank",rel:"noreferrer",children:"Phone"})})]})]})]}),Object(O.jsx)("div",{className:"row mt-5",children:Object(O.jsxs)("div",{className:"col-12 text-muted text-center small-xl",children:["\xa9 ",(new Date).getFullYear()," Xade Technologies - All Rights Reserved"]})})]})}),Object(O.jsx)("div",{className:"scroll-top",children:Object(O.jsx)("i",{className:"fa fa-angle-up","aria-hidden":"true"})})]})}var R=n(649),S=n(348),N=n(154),I=n(110),_=n(115);function E(){var e=[{name:"Rewards",value:37.5},{name:"Team and future team",value:20},{name:"Sale",value:20},{name:"Liquidity Reserve",value:10},{name:"Treasury",value:7.5},{name:"Marketing and Development",value:5}],t=["#e39ff6","#b65fcf","#af69ef","#a32cc4","#7a4988","#a32cc4"];return Object(O.jsx)(m.a,{mt:{base:"1rem",md:"-7rem",lg:"-5.5rem"},children:Object(O.jsxs)(b.a,{direction:{base:"column",lg:"row"},justify:{base:"center",lg:"space-between"},alignItems:"center",height:{base:"auto",lg:"100vh"},children:[Object(O.jsxs)(m.a,{w:{base:"100%",lg:"45%"},p:4,children:[Object(O.jsx)(b.a,{alignItems:{base:"left",md:"left",lg:"left"},justifyContent:{base:"left",md:"left",lg:"left"},p:"0.18rem",pos:"relative",color:"white",fontWeight:"700",fontSize:{base:"2.5rem",md:"2.7rem",lg:"2.7rem"},mt:{base:"1.3rem",md:"16.5rem",lg:"17rem"},children:"Token Distribution"}),Object(O.jsxs)(b.a,{alignItems:"left",justifyContent:"left",p:"0.18rem",pos:"relative",color:"white",fontWeight:"700",fontSize:{base:"0.7rem",md:"2.5rem",lg:"0.85rem"},mt:"1.5rem",children:[Object(O.jsxs)(R.a,{width:400,height:400,children:[Object(O.jsx)(S.a,{data:e,dataKey:"value",nameKey:"name",cx:"50%",cy:"50%",innerRadius:120,outerRadius:150,fill:"#8884d8",stroke:"none",label:!0,children:e.map((function(e,n){return Object(O.jsx)(N.a,{fill:t[n%t.length]},"cell-".concat(n))}))}),Object(O.jsx)(I.a,{}),Object(O.jsx)(_.a,{})]}),Object(O.jsx)("br",{})]})]}),Object(O.jsxs)(m.a,{w:{base:"100%",lg:"45%"},p:4,children:[Object(O.jsx)(b.a,{alignItems:{base:"left",md:"left",lg:"left"},justifyContent:{base:"left",md:"left",lg:"left"},p:"0.18rem",pos:"relative",color:"white",fontWeight:"700",fontSize:{base:"2.5rem",md:"2.7rem",lg:"2.7rem"},mt:{base:"1.3rem",md:"16.5rem",lg:"16.5rem"},children:"Vesting Schedule"}),Object(O.jsxs)(b.a,{alignItems:"center",justifyContent:"center",p:"0.18rem",pos:"relative",color:"white",fontSize:{base:"1.25rem",md:"1.5rem",lg:"1.5rem"},mt:"1.5rem",children:[Object(O.jsxs)("ul",{style:{listStylePosition:"inside",margin:0,padding:0},children:[Object(O.jsxs)("li",{style:{marginBottom:"10px"},children:[Object(O.jsx)("b",{children:"Team"})," - vesting period for 6 years with 25% tokens unlocking after lst year and 15% unlocking after the 2nd year;"]}),Object(O.jsxs)("li",{style:{marginBottom:"15px"},children:[Object(O.jsx)("b",{children:"marketing and development"})," - 25% of Tokens unlock every year;"]}),Object(O.jsxs)("li",{style:{marginBottom:"15px"},children:[Object(O.jsx)("b",{children:"investors"})," - 15% of all tokens to have a vesting period of 1 year;"]}),Object(O.jsxs)("li",{style:{marginBottom:"10px"},children:[Object(O.jsx)("b",{children:"rewards"})," - only 33.33% of all tokens allocated for rewards can be unlocked every year."]})]}),Object(O.jsx)("br",{})]})]})]})})}n(623),n(624);var z=function(){return Object(O.jsxs)(l.a,{theme:o,children:[Object(O.jsx)(A,{}),Object(O.jsx)("br",{}),Object(O.jsx)(k,{}),Object(O.jsx)(M,{}),Object(O.jsx)(E,{}),Object(O.jsx)(C,{})]})};r.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(z,{})}),document.getElementById("root"))}},[[625,1,2]]]);
//# sourceMappingURL=main.6093add8.chunk.js.map