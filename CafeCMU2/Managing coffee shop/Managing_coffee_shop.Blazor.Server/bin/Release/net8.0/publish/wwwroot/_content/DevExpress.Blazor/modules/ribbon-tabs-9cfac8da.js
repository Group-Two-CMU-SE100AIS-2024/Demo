import{_ as t}from"./_tslib-6e8ca86b.js";import{d as e}from"./dom-da46d023.js";import{S as i}from"./scroll-viewer-css-classes-4d6797bc.js";import{T as s}from"./toolbar-css-classes-a87b5199.js";import{T as o}from"./constants-23e48cf5.js";import{R as n,j as l,w as r,v as a,K as c,G as h,c as d,s as u,L as m,u as b}from"./dom-utils-c35907a1.js";import{U as v}from"./ribbon-utils-6bb79d90.js";import{a as p,R as f}from"./layouthelper-0c7c89da.js";import{attachEventsForFocusHiding as S}from"./focus-utils-405a64a8.js";import{S as g}from"./single-slot-element-base-9e7a4622.js";import{K as T,F as C,D as E}from"./keyboard-navigation-strategy-940ff3b3.js";import{k as y}from"./key-f9cbed1b.js";import{A as w}from"./events-5c1c8df0.js";import{C as k}from"./css-classes-cee8476c.js";import{n as x}from"./property-4ec0b52d.js";import{e as B}from"./custom-element-267f9a21.js";import"./browser-d96520d8.js";import"./common-f853e871.js";import"./point-e4ec110e.js";import"./constants-791d6f9b.js";import"./touch-4bff3f51.js";import"./disposable-d2c2d283.js";import"./logicaltreehelper-7b19cc30.js";import"./data-qa-utils-8be7c726.js";import"./const-90026e45.js";import"./dx-ui-element-822e6c84.js";import"./lit-element-base-32a69cc0.js";import"./dx-license-dd341102.js";import"./lit-element-462e7ad3.js";import"./focushelper-cb993bae.js";import"./custom-events-helper-e7f279d3.js";import"./eventhelper-8570b930.js";var I,N;!function(t){t[t.None=0]="None",t[t.Back=1]="Back",t[t.Forward=2]="Forward"}(I||(I={}));class M{static calculate(t,e,i,s,o,n){const l=e?i.height:i.width,r=e?s.bottom:s.right,a=e?s.top:s.left,c=e?i.bottom:i.right,h=e?i.top:i.left,d=n?e?n.bottom:n.right:0,u=o?e?o.top:o.left:0;let m=a-h;switch(t){case I.Forward:m=Math.round(r-c),0===Math.round(m)&&n&&(m=Math.round(d-c)),m=Math.min(Math.max(0,m),l),0===m&&(m=l);break;case I.Back:m=Math.round(a)-Math.round(h),0===Math.round(m)&&o&&(m=Math.round(u-h)),m=-Math.min(Math.max(0,Math.abs(m)),l),0===m&&(m=-l);break;default:{const t=a<h,e=r>c;if(!t&&!e)return 0;if(e){const t=n?d-c:0;m=n&&a-t>=h?m=t:r-c}else if(t){const t=-a+h,e=o?-u+h:0;m=o&&r+e<=c?-e:r+t<=c?-t:0}break}}return Math.ceil(m)}}class j extends T{constructor(t,e,i){super(e,i),this.isFocused=!1,this.ribbonTabs=t}queryItems(){return this.queryItemsBySelector(`.${o.Item}`)}handleKeyDown(t){const e=y.KeyUtils.getEventKeyCode(t);return this.isTabActive()?(this.isFocused=!0,e===y.KeyCode.Right&&this.selectedItemIndex<this.items.length-1?(this.moveToNextItem(),this.performShortcutEvent(t),!0):e===y.KeyCode.Left&&this.selectedItemIndex>0?(this.moveToPrevItem(),this.performShortcutEvent(t),!0):!(e!==y.KeyCode.Tab||!t.shiftKey)&&(this.leaveBackward(),!0)):(this.isFocused=!1,!1)}leaveBackward(){this.isFocused=!1,super.leaveBackward()}activate(){this.isFocused||this.restoreFocus(),super.activate()}getShortcutContext(){return{TabId:this.getSelectedTabId()}}focusSelectedItem(){var t;((null===(t=document.activeElement)||void 0===t?void 0:t.classList.contains(o.Prefix))||this.isTabActive())&&(this.isFocused||this.restoreFocus(),C.focusElement(this.selectedItemElement))}restoreFocus(){this.isFocused=!0;const t=this.ribbonTabs.getActiveTab();t&&this.updateSelectedItemByIndex(this.items.findIndex((e=>e===t)))}isTabActive(){var t;return null===(t=document.activeElement)||void 0===t?void 0:t.classList.contains(o.Item)}getSelectedTabId(){const t=this.getItem(this.selectedItemIndex);return null==t?void 0:t.getAttribute(F)}}const F="data-dxtabs-tab-id",L="data-dxtabs-content-id",R=`.${o.Scrollable}`;var z,A,D,O;!function(t){t.Default="Default",t.AllTabs="AllTabs",t.OnDemand="OnDemand"}(z||(z={})),function(t){t.Auto="Auto",t.NavButtons="NavButtons",t.Swipe="Swipe",t.NoScroll="NoScroll"}(A||(A={})),function(t){t.Small="Small",t.Medium="Medium",t.Large="Large"}(D||(D={})),function(t){t.Top="Top",t.Bottom="Bottom",t.Left="Left",t.Right="Right"}(O||(O={}));const P="tab-count",U="scroll-mode",q="render-mode",H="active-tab",W="size-mode",$="tabs-position";let K=N=class extends g{constructor(){super(...arguments),this.mainElementContentWidthSubscription=null,this.contentPanelWidthSubscription=null,this.currentSize={width:null,height:null},this.contentSize={width:null,height:null},this.domChanges=[],this.scrollContainerElement=null,this.canTrackScroll=!1,this.tabCount=0,this.scrollMode=A.Auto,this.renderMode=z.Default,this.activeTab="",this.sizeMode=D.Medium,this.tabsPosition=O.Top,this.navElement=null,this.updateOverflowStateTimeout=0,this.minScrollStep=1,this.isReady=!1,this.neededCheckSize=!1,this.onScrollHandler=this.onScroll.bind(this),this.onNextButtonClickHandler=this.onScrollToNext.bind(this),this.onPrevButtonClickHandler=this.onScrollToPrev.bind(this),this.onClickHandler=this.onClick.bind(this),this.unsubscribeFocusUtils=null,this.unsubscribe=null}get isSideTabs(){return this.tabsPosition===O.Left||this.tabsPosition===O.Right}connectedOrContentChanged(){const t=this.querySelector(":scope > nav");t&&t!==this.navElement&&(this.navElement=t,this.dispose(),this.subscribeToEvents(),this.initialize(),this.isReady=!0)}disconnectedCallback(){super.disconnectedCallback(),this.disposeEvents(),this.dispose()}disposeEvents(){var t,e;null===(t=this.unsubscribe)||void 0===t||t.call(this),this.unsubscribe=null,null===(e=this.unsubscribeFocusUtils)||void 0===e||e.call(this),this.unsubscribeFocusUtils=null}subscribeToEvents(){if(!this.navElement)return;if(this.disposeEvents(),this.scrollMode!==A.NavButtons&&this.scrollMode!==A.Swipe)return;const t=this.getScrollContent();null==t||t.addEventListener("scroll",this.onScrollHandler),null==t||t.addEventListener("click",this.onClickHandler);const e=this.getPrevButton();null==e||e.addEventListener("click",this.onPrevButtonClickHandler);const i=this.getNextButton();null==i||i.addEventListener("click",this.onNextButtonClickHandler),this.unsubscribe=()=>{null==t||t.removeEventListener("scroll",this.onScrollHandler),null==t||t.removeEventListener("click",this.onClickHandler),null==e||e.removeEventListener("click",this.onPrevButtonClickHandler),null==i||i.removeEventListener("click",this.onNextButtonClickHandler)},this.unsubscribeFocusUtils=S(this.navElement)}dispose(){this.isReady=!1,this.updateOverflowStateTimeout&&(clearTimeout(this.updateOverflowStateTimeout),this.updateOverflowStateTimeout=0),this.mainElementContentWidthSubscription&&b(this.mainElementContentWidthSubscription),this.contentPanelWidthSubscription&&b(this.contentPanelWidthSubscription),this.neededCheckSize=!1}activate(t){if(!t)return;const e=document.querySelector(N.getSelector(F,t));if(null!=(null==e?void 0:e.parentNode)){const t=this.getListElement();for(let i=0;i<this.tabCount;i++)if(v.getChildByClassName(t.children[i],o.Item)===e){this.scrollToIndex(i);break}}}getActiveTab(){return this.querySelector(N.getSelector(F,this.activeTab))}getActiveTabIndex(){return Array.from(this.querySelectorAll(`.${o.Item}`)).findIndex((t=>t.classList.contains(k.Active)))}onScroll(t){this.updateOverflowState()}getContentElement(){return this.querySelector(`:scope > .${o.ContentPanel}`)}initialize(){n((()=>{this.prepareScrollMode(),e.DomUtils.addClassName(this.navElement,s.Loaded),this.checkForOverflow()})),this.mainElementContentWidthSubscription=l(this.navElement,(t=>{this.currentSize.width===t.width&&this.currentSize.height===t.height||(this.currentSize={width:t.width,height:t.height},this.checkForOverflow())}));const t=this.getContentElement();t&&(this.contentPanelWidthSubscription=l(t,(t=>{this.contentSize.width===t.width&&this.contentSize.height===t.height||(this.contentSize={width:t.width,height:t.height},this.onContentElementResize())}))),this.initializeKeyboardNavigator()}onContentElementResize(){this.updateSelectedContent()}updated(t){this.isReady&&((t.has("scrollMode")||t.has("tabCount")||t.has("sizeMode")||t.has("tabsPosition"))&&(n((()=>{this.prepareScrollMode(),this.checkForOverflow()})),this.subscribeToEvents()),t.has("activeTab")&&this.activate(this.activeTab),(t.has("renderMode")||t.has("activeTab"))&&this.updateSelectedContent(this.dispatchActiveTabChanchedEvent.bind(this)),super.updated(t))}dispatchActiveTabChanchedEvent(){this.dispatchEvent(new w)}queryUpdateOverflowState(t){this.updateOverflowStateTimeout&&clearTimeout(this.updateOverflowStateTimeout),this.updateOverflowStateTimeout=setTimeout((()=>{this.updateOverflowStateTimeout=0,this.updateOverflowState()}),t)}prepareScrollMode(){this.neededCheckSize=!!this.navElement&&this.scrollMode===A.NavButtons}checkForOverflow(){if(!this.neededCheckSize||!this.navElement)return;const t=this.isSideTabs?this.navElement.getBoundingClientRect().height-r(this.navElement):this.navElement.getBoundingClientRect().width-a(this.navElement);this.togleScrollState(t-this.calcNeededSize()<=-1)}togleScrollState(t){n((()=>{e.DomUtils.toggleClassName(this.navElement,o.HasOverflow,t),this.canTrackScroll=t,t&&this.queryUpdateOverflowState()}))}calcNeededSize(){var t;const e=null===(t=this.navElement)||void 0===t?void 0:t.getElementsByTagName("ul")[0];if(!e)return 0;let i=this.isSideTabs?r(e):a(e);const s=e.getElementsByTagName("li");for(const t of s)i+=this.isSideTabs?t.getBoundingClientRect().height+c(t):t.getBoundingClientRect().width+h(t);return i}updateOverflowState(){if(!this.canTrackScroll||this.scrollMode!==A.NavButtons)return;if(!this.findScrollContainer())return;const t=this.getScrollContent();if(!t)return;const[e,i]=this.getScrollAccess(t),s=this.getNextButton(),o=this.getPrevButton();d((()=>{s&&u(s,"disabled",!i),o&&u(o,"disabled",!e)}))}getScrollAccess(t){if(this.isSideTabs){const e=Math.ceil(t.scrollTop);return[e>0,Math.round(t.scrollHeight-e)-Math.round(t.clientHeight)>this.minScrollStep]}{const e=Math.ceil(t.scrollLeft);return[e>0,Math.round(t.scrollWidth-e)-Math.round(t.clientWidth)>this.minScrollStep]}}findScrollContainer(){if(!this.scrollContainerElement){if(!this.navElement)return null;this.scrollContainerElement=v.elementMatchesSelector(this.navElement,R)?this.navElement:this.navElement.querySelector(R)}return this.scrollContainerElement}getScrollContent(){return this.navElement?e.DomUtils.getNodesByClassName(this.navElement,i.ContentContainerClassName)[0]:null}getPrevButton(){var t;return null===(t=this.findScrollContainer())||void 0===t?void 0:t.querySelector(`:scope > .${o.ButtonScrollPrev}`)}getNextButton(){var t;return null===(t=this.findScrollContainer())||void 0===t?void 0:t.querySelector(`:scope > .${o.ButtonScrollNext}`)}onScrollToPrev(t){t.preventDefault();const e=this.findExtremeTabItemIndex(I.Back);this.scrollToIndex(e,I.Back)}onScrollToNext(t){t.preventDefault();const e=this.findExtremeTabItemIndex(I.Forward);this.scrollToIndex(e,I.Forward)}onClick(t){let e=t.target;for(;e;){if(m(e,o.Item)){const t=e.getAttribute(F);t&&this.activate(t);break}e=e.parentElement}}getListElement(){return this.navElement.getElementsByTagName("ul")[0]}getTabElement(t){return this.getListElement().querySelectorAll(":scope > li > ."+o.Item)[t]}scrollToIndex(t,e=I.None){var i,s;if(t>-1&&this.getScrollContent()){const o=t=>t.closest("li"),n=this.getTabElement(t),l=null===(i=o(n))||void 0===i?void 0:i.nextElementSibling,r=null===(s=o(n))||void 0===s?void 0:s.previousElementSibling;this.scrollToTab(n,r,l,e)}}findExtremeTabItemIndex(t){if(t===I.None)return-1;const e=this.getScrollContent();if(!e)return-1;const i=this.getListElement().querySelectorAll(":scope > li > ."+o.Item),s=this.getContentFrameRect(e),[n,l,r]=t===I.Forward?[0,this.tabCount,1]:[this.tabCount-1,-1,-1];for(let e=n;e!==l;e+=r){const o=i[e].getBoundingClientRect();if(this.isSideTabs){if(t===I.Back&&o.top<s.top||t===I.Forward&&o.bottom>s.bottom)return e}else if(t===I.Back&&o.left<s.left||t===I.Forward&&o.right>s.right)return e}return-1}getContentFrameRect(t){const i=e.DomUtils.getCurrentStyle(t),s=t.getBoundingClientRect();return new p(s.left+e.DomUtils.pxToInt(i.paddingLeft)+e.DomUtils.pxToInt(i.borderLeftWidth),s.top+e.DomUtils.pxToInt(i.paddingTop)+e.DomUtils.pxToInt(i.borderTopWidth),s.width-e.DomUtils.pxToInt(i.paddingRight)-e.DomUtils.pxToInt(i.borderRightWidth),s.height-e.DomUtils.pxToInt(i.paddingBottom)-e.DomUtils.pxToInt(i.borderBottomWidth))}scrollToTab(t,e,i,s){const o=this.getScrollContent();if(!o)return;const n=M.calculate(s,this.isSideTabs,this.getContentFrameRect(o),f.fromDomRect(t.getBoundingClientRect()),e?f.fromDomRect(e.getBoundingClientRect()):void 0,i?f.fromDomRect(i.getBoundingClientRect()):void 0);0!==n?this.isSideTabs?o.scrollTop+=n:o.scrollLeft+=n:o.scrollLeft>0&&s===I.Back&&(this.isSideTabs?o.scrollTop=0:o.scrollLeft=0)}updateSelectedContent(t=null){const i=this.getContentElement();if(i){const l=this.activeTab?i.querySelector(N.getSelector(L,this.activeTab)):null,r=Array.from(i.querySelectorAll(`:scope > .${o.Content}${this.activeTab?`:not(${N.getSelector(L,this.activeTab)})`:""}`));n((()=>{if(l&&(l.style.cssText="",l.setAttribute("data-dx-tab-loaded","")),this.renderMode!==z.Default){const t=`position:absolute;visibility:hidden;left:-10000px;width:${i.clientWidth}px;height:${i.clientHeight}px`;r.forEach((e=>{e.style.cssText=t}))}i&&e.DomUtils.addClassName(i,s.Loaded),t&&setTimeout((()=>t()),0)}))}}initializeKeyboardNavigator(){if(this.keyboardNavigator=this.querySelector(`:scope > ${E}`),this.keyboardNavigator&&!this.keyboardNavigator.initialized){const t=new j(this,this.keyboardNavigator,this);this.keyboardNavigator.initialize(this,t)}}static getSelector(t,e){return`[${t}=${e}]`}};t([x({type:Number,attribute:P})],K.prototype,"tabCount",void 0),t([x({type:A,attribute:U})],K.prototype,"scrollMode",void 0),t([x({type:z,attribute:q})],K.prototype,"renderMode",void 0),t([x({attribute:H})],K.prototype,"activeTab",void 0),t([x({attribute:W})],K.prototype,"sizeMode",void 0),t([x({attribute:$})],K.prototype,"tabsPosition",void 0),K=N=t([B("dxbl-tabs")],K);const _={loadModule:function(){}};export{K as RibbonTabs,_ as default,F as tabIdSelector};