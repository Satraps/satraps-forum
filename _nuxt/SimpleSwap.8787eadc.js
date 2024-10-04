import{C as v,l as x,I as Y,u as W,a as j}from"./ethers.c2df627a.js";import{E as K,c as X,a as Z}from"./balanceUtils.79e1e7ec.js";import{ac as H,ad as d,a as N,ae as P,o as u,b as c,f as n,t as l,i as R,af as I,ag as S,l as m,M as q,r as C,F as L,ai as M,c as F,e as U}from"./entry.24fbbeed.js";import{u as O}from"./site.29dc76f3.js";import{C as z,S as G}from"./SwitchChainButton.e5d584a1.js";import{W as B}from"./WaitingToast.aee9772d.js";import{e as J}from"./storageUtils.30927174.js";const f={1:"0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",10:"0x4200000000000000000000000000000000000006",14:"0x1d80c49bbbcd1c0911346656b529df9e5c2f783d",19:"0x02f0826ef6aD107Cfc861152B32B52fD11BaB9ED",56:"0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c",100:"0xe91d153e0b41518a2ce8dd3d7944fa863463a97d",137:"0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270",250:"0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83",324:"0x5aea5775959fbc2557cc8789bc1bf90a239d9a91",1101:"0x4f9a0e7fd2bf6067db6994cf12e4495df938e6e9",42161:"0x82af49447d8a07e3bd95bd0d56f35241523fbab1",43114:"0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7",11155111:"0xf531B8F309Be94191af87605CfBf600D71C2cFe0"};async function Q(s,e,i,a,o){let t=s;const p=["function getPriceImpact(address tokenIn, address tokenOut, uint amountIn) external view returns (uint)"],h=new v(o,p,t),w=x(a,e.decimals),k=await h.getPriceImpact(e.address,i.address,w);return Number(k)}async function $(s,e,i,a,o){const t=H();let p=s;const h=x(a,e.decimals);let w=[e.address,i.address];const k=f[String(t.supportedChainId)];if(e.address!==d&&e.address!==k&&i.address!==d&&i.address!==k&&(w=[e.address,k,i.address]),(e.address===d||e.address===k)&&(i.address===d||i.address===k))return h;const r=["function getAmountsOut(uint amountIn, address[] memory path) public view returns (uint[] memory amounts)"],T=await new v(o,r,p).getAmountsOut(h,w);return T[T.length-1]}function tt(s,e,i,a,o,t,p,h){const w=H(),k=O();let r=s;const b=Math.floor(Date.now()/1e3)+60*Number(k.getSwapDeadline),T=String(f[String(w.supportedChainId)]).toLowerCase(),g=String(i.address).toLowerCase(),A=String(a.address).toLowerCase(),D=new Y(["function deposit() payable","function withdraw(uint wad)"]),E=new v(T,D,r);if(g===d&&A===T)return E.deposit({value:o});if(g===T&&A===d)return E.withdraw(o);{const V=["function swapExactTokensForTokens(uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline) external returns (uint[] memory amounts)","function swapExactTokensForTokensWithReferrer(uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline, address referrer) external returns (uint[] memory amounts)","function swapExactETHForTokens(uint amountOutMin, address[] calldata path, address to, uint deadline) external payable returns (uint[] memory amounts)","function swapExactETHForTokensWithReferrer(uint amountOutMin, address[] calldata path, address to, uint deadline, address referrer) external payable returns (uint[] memory amounts)","function swapExactTokensForETH(uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline) external returns (uint[] memory amounts)","function swapExactTokensForETHWithReferrer(uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline, address referrer) external returns (uint[] memory amounts)"],y=new v(p,V,r);let _=[g,A];return g===d&&A!==T&&A!==d?h===d?y.swapExactETHForTokens(t,_,e,b,{value:o}):y.swapExactETHForTokensWithReferrer(t,_,e,b,h,{value:o}):g!==d&&g!==T&&A===d?h===d?y.swapExactTokensForETH(o,t,_,e,b):y.swapExactTokensForETHWithReferrer(o,t,_,e,b,h):(g!==T&&A!==T&&(_=[g,T,A]),h===d?y.swapExactTokensForTokens(o,t,_,e,b):y.swapExactTokensForTokensWithReferrer(o,t,_,e,b,h))}}const et={name:"TokenApprovalModal",props:["amount","modalId","routerAddress","token"],emits:["setApprovalAmount"],components:{WaitingToast:B},data(){return{waiting:!1,selectedOption:"unlimited",approvalAmount:0}},mounted(){this.approvalAmount=this.amount},computed:{isUnlimited(){return this.selectedOption==="unlimited"}},methods:{selectOption(s){this.selectedOption=s},async approveToken(){this.waiting=!0;let s=this.approvalAmount;this.isUnlimited&&(s=1e16);const e=x(String(s),this.token.decimals),i=new v(this.token.address,K,this.signer);try{const a=await i.approve(this.routerAddress,e),o=this.toast({component:B,props:{text:"Please wait for your transaction to confirm. Click on this notification to see transaction in the block explorer."}},{type:"info",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+a.hash,"_blank").focus()}),t=await a.wait();t.status===1?(this.toast.dismiss(o),this.toast("You have successfully approved "+this.token.symbol+"!",{type:"success",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+a.hash,"_blank").focus()}),this.$emit("setApprovalAmount",s),this.waiting=!1,document.getElementById("closeTokenApprovalModal"+this.modalId).click()):(this.waiting=!1,this.toast.dismiss(o),this.toast("Transaction has failed.",{type:"error",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+a.hash,"_blank").focus()}),console.log(t))}catch{this.toast.error("Something went wrong while approving the token"),this.waiting=!1;return}this.waiting=!1}},setup(){const{signer:s}=W(),e=P();return{signer:s,toast:e}},watch:{amount(s,e){s&&(this.approvalAmount=this.amount)}}},nt=["id","aria-labelledby"],ot={class:"modal-dialog"},st={class:"modal-content"},it={class:"modal-header"},at=["id"],rt=["id"],ut={class:"modal-body"},lt={class:"row mt-3"},dt={class:"col-lg-8"},ct={class:"input-group-text"},pt=["checked"],mt=n("input",{value:"Unlimited",type:"text",class:"form-control",disabled:""},null,-1),ht={class:"input-group-text"},kt=["checked"],Tt=["disabled"],bt={class:"input-group-text",id:"basic-addon2"},ft=n("p",{class:"mt-3"},[n("small",null,[n("em",null," If you want to do more swaps without approvals, set a big enough amount or choose unlimited. ")])],-1),wt={class:"modal-footer"},gt=["disabled"],At={key:0,class:"spinner-border spinner-border-sm mx-1",role:"status","aria-hidden":"true"},_t={key:1},yt={key:2};function vt(s,e,i,a,o,t){return u(),c("div",{class:"modal fade",id:"tokenApprovalModal"+i.modalId,tabindex:"-1","aria-labelledby":"tokenApprovalModalLabel"+i.modalId,"aria-hidden":"true"},[n("div",ot,[n("div",st,[n("div",it,[n("h1",{class:"modal-title fs-5",id:"tokenApprovalModalLabel"+i.modalId},"Approve "+l(i.token?.symbol)+" token",9,at),n("button",{id:"closeTokenApprovalModal"+i.modalId,type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,8,rt)]),n("div",ut,[R(" Approve "+l(i.token?.symbol)+" tokens for swapping: ",1),n("div",lt,[n("div",dt,[n("div",{class:"input-group",onClick:e[0]||(e[0]=p=>t.selectOption("unlimited"))},[n("div",ct,[n("input",{class:"form-check-input mt-0",type:"radio",checked:t.isUnlimited},null,8,pt)]),mt]),n("div",{class:"input-group mt-2",onClick:e[2]||(e[2]=p=>t.selectOption("limited"))},[n("div",ht,[n("input",{class:"form-check-input mt-0",type:"radio",checked:!t.isUnlimited},null,8,kt)]),I(n("input",{"onUpdate:modelValue":e[1]||(e[1]=p=>o.approvalAmount=p),type:"text",class:"form-control",disabled:o.waiting},null,8,Tt),[[S,o.approvalAmount]]),n("span",bt,l(i.token?.symbol),1)])])]),ft]),n("div",wt,[n("button",{type:"button",class:"btn btn-primary",onClick:e[3]||(e[3]=(...p)=>t.approveToken&&t.approveToken(...p)),disabled:o.waiting},[o.waiting?(u(),c("span",At)):m("",!0),t.isUnlimited?(u(),c("span",_t,"Approve unlimited")):m("",!0),t.isUnlimited?m("",!0):(u(),c("span",yt,"Approve "+l(o.approvalAmount)+" "+l(i.token?.symbol),1))],8,gt)])])])],8,nt)}const xt=N(et,[["render",vt]]),Ct={name:"SwapTokensModal",props:["inputToken","inputTokenAmount","modalId","outputToken","outputTokenAmount","outputTokenAmountWei","routerAddress"],emits:["changeInputTokenBalance"],data(){return{waiting:!1}},components:{WaitingToast:B},computed:{bothTokensAreNativeCoinOrWrappedToken(){return!!(this.inputIsNativeCoin&&this.outputIsWrappedNativeCoin||this.inputIsWrappedNativeCoin&&this.outputIsNativeCoin)},inputIsNativeCoin(){return String(this.inputToken?.address).toLowerCase()==String(d).toLowerCase()},inputIsWrappedNativeCoin(){return String(this.inputToken?.address).toLowerCase()==String(f[this.$config.supportedChainId]).toLowerCase()},outputIsNativeCoin(){return String(this.outputToken?.address).toLowerCase()==String(d).toLowerCase()},outputIsWrappedNativeCoin(){return String(this.outputToken?.address).toLowerCase()==String(f[this.$config.supportedChainId]).toLowerCase()}},methods:{async swap(){this.waiting=!0;const s=x(this.inputTokenAmount,this.inputToken?.decimals),e=J(window);try{const i=await tt(this.signer,this.address,this.inputToken,this.outputToken,s,this.outputTokenAmountWei,this.routerAddress,e),a=this.toast({component:B,props:{text:"Please wait for your transaction to confirm. Click on this notification to see transaction in the block explorer."}},{type:"info",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+i.hash,"_blank").focus()}),o=await i.wait();o.status===1?(this.toast.dismiss(a),this.toast("You have successfully swapped "+this.inputToken.symbol+" for "+this.outputToken.symbol+"!",{type:"success",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+i.hash,"_blank").focus()}),this.$emit("changeInputTokenBalance"),this.waiting=!1,document.getElementById("closeSwapTokensModal"+this.modalId).click()):(this.waiting=!1,this.toast.dismiss(a),this.toast("Transaction has failed.",{type:"error",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+i.hash,"_blank").focus()}),console.log(o))}catch{this.toast.error("Something went wrong while swapping tokens"),this.waiting=!1;return}this.waiting=!1}},setup(){const{address:s,signer:e}=W(),i=P(),a=O();return{address:s,signer:e,siteStore:a,toast:i}}},It=["id","aria-labelledby"],St={class:"modal-dialog"},Bt={class:"modal-content"},Wt={class:"modal-header"},Nt=["id"],Ot=["id"],Et={class:"modal-body"},Lt=n("p",null,"Double-check the swap amounts:",-1),Mt={class:"input-group mb-3"},Ft={class:"input-group-text",id:"basic-addon1"},Ut=["value"],Ht=n("h4",{class:"text-center mt-2"},[n("i",{class:"bi bi-arrow-down"})],-1),Pt={class:"input-group mb-3"},Rt={class:"input-group-text",id:"basic-addon1"},Dt=["value"],Vt={key:0},Yt={class:"modal-footer"},jt=["disabled"],Kt={key:0,class:"spinner-border spinner-border-sm mx-1",role:"status","aria-hidden":"true"};function Xt(s,e,i,a,o,t){return u(),c("div",{class:"modal fade",id:"swapTokensModal"+i.modalId,tabindex:"-1","aria-labelledby":"swapTokensModalLabel"+i.modalId,"aria-hidden":"true"},[n("div",St,[n("div",Bt,[n("div",Wt,[n("h1",{class:"modal-title fs-5",id:"swapTokensModalLabel"+i.modalId},"Swap tokens",8,Nt),n("button",{id:"closeSwapTokensModal"+i.modalId,type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,8,Ot)]),n("div",Et,[Lt,n("div",Mt,[n("span",Ft,l(i.inputToken?.symbol),1),n("input",{type:"text",class:"form-control",value:i.inputTokenAmount,disabled:""},null,8,Ut)]),Ht,n("div",Pt,[n("span",Rt,l(i.outputToken?.symbol),1),n("input",{type:"text",class:"form-control",value:i.outputTokenAmount,disabled:""},null,8,Dt)]),t.bothTokensAreNativeCoinOrWrappedToken?m("",!0):(u(),c("small",Vt,[n("em",null," You will get at least "+l(i.outputTokenAmount)+" "+l(i.outputToken?.symbol)+", but probably more ("+l(a.siteStore.getSlippage)+"% slippage). ",1)]))]),n("div",Yt,[n("button",{type:"button",class:"btn btn-primary",onClick:e[0]||(e[0]=(...p)=>t.swap&&t.swap(...p)),disabled:o.waiting},[o.waiting?(u(),c("span",Kt)):m("",!0),R(" Swap tokens ")],8,jt)])])])],8,It)}const Zt=N(Ct,[["render",Xt]]),qt={name:"SimpleSwap",props:["outputPlaceholder","poweredBy","routerAddress","swapId","tokens"],data(){return{debounce:null,filterTextInput:"",filterTextOutput:"",inputToken:null,inputTokenAllowance:0,inputTokenAmount:null,inputTokenBalance:null,outputText:"0",outputToken:null,outputTokenAmountWei:null,preswapCheck:!1,priceImpact:0,timeout:800,tokenList:[]}},components:{ConnectWalletButton:z,SwapTokensModal:Zt,SwitchChainButton:G,TokenApprovalModal:xt},mounted(){this.tokenList=this.getFilteredTokens(this.tokens.tokens),this.selectInputToken(this.tokenList[0]),this.selectOutputToken(this.tokenList[1]),this.outputPlaceholder&&(this.outputText=this.outputPlaceholder)},computed:{allowanceTooLow(){return Number(this.inputTokenAllowance)<Number(this.inputTokenAmount)},bothTokensAreNativeCoinOrWrappedTokenOrSame(){return this.inputToken.address==d&&this.outputToken.address==f[this.$config.supportedChainId]||this.inputToken.address==f[this.$config.supportedChainId]&&this.outputToken.address==d||this.inputToken.address==d&&this.outputToken.address==d||this.inputToken.address==f[this.$config.supportedChainId]&&this.outputToken.address==f[this.$config.supportedChainId]?!0:this.inputToken.address==this.outputToken.address},bothTokensAreTheSame(){return this.inputToken.address==this.outputToken.address},filteredTokensInput(){const s=new RegExp(this.filterTextInput,"i");return this.tokenList.filter(e=>s.test(e.symbol))},filteredTokensOutput(){const s=new RegExp(this.filterTextOutput,"i");return this.tokenList.filter(e=>s.test(e.symbol))},formatInputTokenBalance(){return this.inputTokenBalance?this.inputTokenBalance==0?0:this.inputTokenBalance>100?Number(this.inputTokenBalance).toFixed(2):this.inputTokenBalance>1?Number(this.inputTokenBalance).toFixed(4):this.inputTokenBalance>.01?Number(this.inputTokenBalance).toFixed(6):this.inputTokenBalance>1e-4?Number(this.inputTokenBalance).toFixed(8):Number(this.inputTokenBalance).toFixed(10):0},inputAmountLessThanBalance(){return this.inputTokenAmount&&this.inputTokenBalance?Number(this.inputTokenAmount)<=Number(this.inputTokenBalance):!1},inputIsWrappedNativeCoin(){return String(this.inputToken?.address).toLowerCase()==String(f[this.$config.supportedChainId]).toLowerCase()},isSupportedChain(){return this.chainId===this.$config.supportedChainId},outputIsNativeCoin(){return String(this.outputToken?.address).toLowerCase()==String(d).toLowerCase()},outputTokenAmount(){if(this.outputTokenAmountWei){let s=j(String(this.outputTokenAmountWei),this.outputToken.decimals);return s==0?0:s>100?Number(s).toFixed(2):s>1?Number(s).toFixed(4):s>.01?Number(s).toFixed(6):s>1e-4?Number(s).toFixed(8):Number(s).toFixed(10)}return null},priceImpactTooHigh(){return this.priceImpact>this.$config.swapPriceImpactMaxBps},unwrappingWrappedNativeCoin(){return!!(this.inputIsWrappedNativeCoin&&this.outputIsNativeCoin)}},methods:{getTokenAllowance:X,getTokenBalance:Z,changeInputTokenAllowance(s){this.inputTokenAllowance=Number(s)},getFilteredTokens(s){return s.filter(e=>e.swap)},async getOutputAmount(){if(this.inputTokenAmount){if(this.bothTokensAreNativeCoinOrWrappedTokenOrSame)this.outputTokenAmountWei=x(this.inputTokenAmount,this.inputToken.decimals);else{const s=await $(this.signer,this.inputToken,this.outputToken,this.inputTokenAmount,this.routerAddress),e=Math.floor(Number(this.siteStore.getSlippage)*100);this.outputTokenAmountWei=s.sub(s.div(1e4).mul(e))}this.priceImpact=await Q(this.signer,this.inputToken,this.outputToken,this.inputTokenAmount,this.routerAddress)}else this.outputTokenAmountWei=null},getOutputAmountWithTimeout(){this.debounce&&clearTimeout(this.debounce);const s=this;this.debounce=setTimeout(()=>{s.getOutputAmount()},s.timeout)},async selectInputToken(s){this.inputTokenAllowance=0,this.outputTokenAmountWei=null,this.inputToken=s,this.inputTokenAmount=null,this.signer&&(this.inputTokenBalance=await this.getTokenBalance(s,this.address,this.signer)),s.address==d?this.inputTokenAllowance=Number(q):this.inputTokenAllowance=await this.getTokenAllowance(s,this.address,this.routerAddress,this.signer)},selectOutputToken(s){this.outputToken=s,this.outputTokenAmountWei=null},setMaxInputTokenAmount(){this.inputTokenAmount=String(this.inputTokenBalance),this.getOutputAmount()},subtractInputTokenBalance(){this.inputTokenBalance=Number(this.inputTokenBalance)-Number(this.inputTokenAmount)},togglePreswapCheck(){this.preswapCheck=!this.preswapCheck}},setup(){const{address:s,chainId:e,isActivated:i,signer:a}=W(),o=O();return{address:s,chainId:e,isActivated:i,signer:a,siteStore:o}},watch:{async isActivated(){this.address&&(this.inputTokenBalance=await this.getTokenBalance(this.inputToken,this.address,this.signer))}}},zt={class:"input-group mb-1"},Gt={class:"btn btn-primary dropdown-toggle",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},Jt={class:"dropdown-menu p-2"},Qt=["onClick"],$t=n("small",null,"MAX",-1),te=[$t],ee=n("em",null,"Balance: ",-1),ne={class:"cursor-pointer hover-color"},oe=n("i",{class:"bi bi-arrow-down"},null,-1),se=[oe],ie={class:"input-group mt-4"},ae={class:"btn btn-primary dropdown-toggle",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},re={class:"dropdown-menu p-2"},ue=["onClick"],le=["value","placeholder"],de={key:0},ce={class:"d-flex justify-content-center mt-4"},pe={key:2,disabled:!0,class:"btn btn-outline-primary",type:"button"},me=["data-bs-target"],he=["disabled","data-bs-target"],ke={key:5,disabled:!0,class:"btn btn-outline-primary",type:"button"},Te={key:6,disabled:!0,class:"btn btn-outline-primary",type:"button"},be={key:7,disabled:!0,class:"btn btn-outline-primary",type:"button"},fe={key:1,class:"text-center mt-4"};function we(s,e,i,a,o,t){const p=C("ConnectWalletButton"),h=C("SwitchChainButton"),w=C("TokenApprovalModal"),k=C("SwapTokensModal");return u(),c("div",null,[n("div",zt,[n("button",Gt,l(o.inputToken?.symbol),1),n("ul",Jt,[I(n("input",{class:"form-control mb-2",placeholder:"Filter tokens","onUpdate:modelValue":e[0]||(e[0]=r=>o.filterTextInput=r)},null,512),[[S,o.filterTextInput]]),(u(!0),c(L,null,M(t.filteredTokensInput,r=>(u(),c("li",{key:r.address,class:"cursor-pointer"},[n("span",{onClick:b=>t.selectInputToken(r),class:"dropdown-item"},l(r.symbol)+" ("+l(r.name)+")",9,Qt)]))),128))]),I(n("input",{"onUpdate:modelValue":e[1]||(e[1]=r=>o.inputTokenAmount=r),type:"text",class:"form-control",placeholder:"0.00",onKeyup:e[2]||(e[2]=(...r)=>t.getOutputAmountWithTimeout&&t.getOutputAmountWithTimeout(...r))},null,544),[[S,o.inputTokenAmount]]),n("button",{onClick:e[3]||(e[3]=(...r)=>t.setMaxInputTokenAmount&&t.setMaxInputTokenAmount(...r)),class:"btn btn-outline-secondary",type:"button",id:"button-addon2"},te)]),n("small",{onClick:e[4]||(e[4]=(...r)=>t.setMaxInputTokenAmount&&t.setMaxInputTokenAmount(...r))},[ee,n("em",ne,l(t.formatInputTokenBalance)+" "+l(o.inputToken?.symbol),1)]),n("h4",{onClick:e[5]||(e[5]=(...r)=>t.getOutputAmount&&t.getOutputAmount(...r)),class:"text-center mt-2 cursor-pointer"},se),n("div",ie,[n("button",ae,l(o.outputToken?.symbol),1),n("ul",re,[I(n("input",{class:"form-control mb-2",placeholder:"Filter tokens","onUpdate:modelValue":e[6]||(e[6]=r=>o.filterTextOutput=r)},null,512),[[S,o.filterTextOutput]]),(u(!0),c(L,null,M(t.filteredTokensOutput,r=>(u(),c("li",{key:r.address,class:"cursor-pointer"},[n("span",{onClick:b=>t.selectOutputToken(r),class:"dropdown-item"},l(r.symbol)+" ("+l(r.name)+")",9,ue)]))),128))]),n("input",{type:"text",class:"form-control",value:t.outputTokenAmount,placeholder:o.outputText,disabled:""},null,8,le)]),t.outputTokenAmount&&!t.bothTokensAreNativeCoinOrWrappedTokenOrSame?(u(),c("small",de,[n("em",null," You will get at least "+l(t.outputTokenAmount)+" "+l(o.outputToken.symbol)+", but probably more ("+l(a.siteStore.getSlippage)+"% slippage). ",1)])):m("",!0),n("div",ce,[!a.isActivated&&!t.isSupportedChain?(u(),F(p,{key:0,class:"btn btn-outline-primary",btnText:"Connect wallet"})):m("",!0),a.isActivated&&!t.isSupportedChain?(u(),F(h,{key:1})):m("",!0),a.isActivated&&t.isSupportedChain&&!o.inputTokenAmount?(u(),c("button",pe," Swap tokens ")):m("",!0),a.isActivated&&t.isSupportedChain&&o.inputTokenAmount&&t.inputAmountLessThanBalance&&!t.bothTokensAreTheSame&&t.allowanceTooLow&&!t.unwrappingWrappedNativeCoin&&!t.priceImpactTooHigh?(u(),c("button",{key:3,class:"btn btn-outline-primary",type:"button","data-bs-toggle":"modal","data-bs-target":"#tokenApprovalModal"+i.swapId}," Approve token ",8,me)):m("",!0),U(w,{modalId:i.swapId,token:o.inputToken,amount:o.inputTokenAmount,routerAddress:i.routerAddress,onSetApprovalAmount:t.changeInputTokenAllowance},null,8,["modalId","token","amount","routerAddress","onSetApprovalAmount"]),a.isActivated&&t.isSupportedChain&&o.inputTokenAmount&&t.inputAmountLessThanBalance&&!t.bothTokensAreTheSame&&!t.priceImpactTooHigh&&!t.priceImpactTooHigh&&(!t.allowanceTooLow||t.unwrappingWrappedNativeCoin)?(u(),c("button",{key:4,disabled:!o.inputToken||!o.outputToken||!o.inputTokenAmount||!t.outputTokenAmount||!a.isActivated||t.bothTokensAreTheSame||!t.inputAmountLessThanBalance,class:"btn btn-outline-primary",type:"button","data-bs-toggle":"modal","data-bs-target":"#swapTokensModal"+i.swapId,onClick:e[7]||(e[7]=(...r)=>t.getOutputAmount&&t.getOutputAmount(...r))}," Swap tokens ",8,he)):m("",!0),U(k,{modalId:i.swapId,inputToken:o.inputToken,inputTokenAmount:o.inputTokenAmount,outputToken:o.outputToken,outputTokenAmount:t.outputTokenAmount,outputTokenAmountWei:o.outputTokenAmountWei,routerAddress:i.routerAddress,onChangeInputTokenBalance:t.subtractInputTokenBalance},null,8,["modalId","inputToken","inputTokenAmount","outputToken","outputTokenAmount","outputTokenAmountWei","routerAddress","onChangeInputTokenBalance"]),a.isActivated&&t.isSupportedChain&&o.inputTokenAmount&&!t.inputAmountLessThanBalance&&!t.bothTokensAreTheSame&&!t.priceImpactTooHigh?(u(),c("button",ke," Balance too low ")):m("",!0),a.isActivated&&t.isSupportedChain&&o.inputTokenAmount&&t.bothTokensAreTheSame&&!t.priceImpactTooHigh?(u(),c("button",Te," Both tokens are the same ")):m("",!0),a.isActivated&&t.isSupportedChain&&o.inputTokenAmount&&t.priceImpactTooHigh?(u(),c("button",be," Price impact too high ")):m("",!0)]),i.poweredBy?(u(),c("p",fe,[n("small",null,[n("em",null,"Powered by "+l(i.poweredBy)+".",1)])])):m("",!0)])}const Ie=N(qt,[["render",we]]);export{Ie as S};
