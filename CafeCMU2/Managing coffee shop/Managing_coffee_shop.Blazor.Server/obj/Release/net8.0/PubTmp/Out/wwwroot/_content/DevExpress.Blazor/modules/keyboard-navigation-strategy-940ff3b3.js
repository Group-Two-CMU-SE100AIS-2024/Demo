import{D as e,F as t}from"./focushelper-cb993bae.js";import{C as n}from"./custom-events-helper-e7f279d3.js";import{E as s}from"./eventhelper-8570b930.js";import{hasClosestFocusableElement as i,attachEventsForFocusHiding as r,addFocusHiddenAttribute as a,removeFocusHiddenAttribute as o}from"./focus-utils-405a64a8.js";import{k as l}from"./key-f9cbed1b.js";import{L as d,D as c}from"./layouthelper-0c7c89da.js";import{F as h}from"./constants-791d6f9b.js";import{s as u}from"./dom-utils-c35907a1.js";class m extends CustomEvent{constructor(e,t){super(m.eventName,{detail:new g(e,t),bubbles:!0,composed:!0,cancelable:!0})}}m.eventName="dxbl-keyboard-navigator.shortcut";class g{constructor(e,t){this.Event=e,this.Info=JSON.stringify(t)}}n.register(m.eventName,(e=>{const t=e.detail;return{Key:t.Event.key,Code:t.Event.code,CtrlKey:t.Event.ctrlKey,AltKey:t.Event.altKey,ShiftKey:t.Event.shiftKey,MetaKey:t.Event.metaKey,Info:t.Info}}));class v{static scheduleResetTabIndex(e){v.resetTabIndexAction.cancel(),v.elementsToResetTabIndex.push(e),v.resetTabIndexAction.execute((()=>{v.elementsToResetTabIndex.forEach((e=>v.removeTabIndex(e))),v.elementsToResetTabIndex.splice(0)}))}static focusElement(e,t=!1){e&&e.focus({preventScroll:t})}static makeElementFocusable(e){e.tabIndex<0&&u(e,"tabIndex","0")}static removeTabIndex(e){e.tabIndex>=0&&u(e,"tabIndex")}static findPrevFocusableElement(e){const t=v.findFocusableElements(document),n=t.findIndex((t=>t===e))-1;return n>=0?t[n]:null}static findNextFocusableNotChildElement(e){const t=v.findFocusableElements(document),n=v.findFocusableElements(e),s=t.findIndex((t=>t===e))+n.length+1;return s<t.length?t[s]:null}static findFocusableElementInRootPath(e){var t;return null!==(t=[...d.getRootPathAndSelf(e)].find((e=>e.tabIndex>-1||this.isRootWidget(e))))&&void 0!==t?t:null}static isRootWidget(e){return"string"==typeof e.className&&e.className.includes("dxbl-kbn-root-widget")}static findFocusableElements(e){return Array.from(e.querySelectorAll(h)).filter((e=>e.tabIndex>-1&&(e.offsetWidth||e.offsetHeight||e.getClientRects().length)&&!c.isHidden(e)))}static findItemElementIndexByChild(e,t){return e.findIndex((e=>d.containsElement(e,t)))}}function I(e,t){return function(e,t){const n=[];for(let s=0;s<e.length;s++){const i=e[s];if(t.has(i)){const e=t.get(i);e&&n.push(e)}}return n}([...d.getRootPathAndSelf(e)],t)}v.elementsToResetTabIndex=[],v.resetTabIndexAction=new e;function S(e){return"getPortal"in e}const E=new class{constructor(){this.boundOnKeyDownHandler=this.handleKeyDown.bind(this),this.boundOnKeyUpHandler=this.handleKeyUp.bind(this),this.boundOnMouseDownHandler=this.handleMouseDown.bind(this),this.boundOnFocusInHandler=this.handleFocusIn.bind(this),this.navigators=new Map,this.lockTreeLineActivation=!1,setTimeout(this.addEventSubscriptions.bind(this))}register(e){const t=e.targetElement;this.navigators.has(t)||this.navigators.set(t,e)}remove(e){const t=e.targetElement;this.navigators.has(t)&&this.navigators.delete(t)}addFocusHiddenAttributes(e){this.forEachNavigatorInTreeLine(e,(e=>e.addFocusHiddenAttribute()))}removeFocusHiddenAttributes(e){this.forEachNavigatorInTreeLine(e,(e=>!e.removeFocusHiddenAttribute()))}addEventSubscriptions(){document.addEventListener("keydown",this.boundOnKeyDownHandler,{capture:!0}),document.addEventListener("keyup",this.boundOnKeyUpHandler,{capture:!0}),document.addEventListener("mousedown",this.boundOnMouseDownHandler,{capture:!0}),document.addEventListener("focusin",this.boundOnFocusInHandler,{capture:!0})}handleKeyDown(e){this.handleKeyboardEvent(e,((t,n)=>t.onKeyDown(e,n)))}handleKeyUp(e){this.handleKeyboardEvent(e,((t,n)=>t.onKeyUp(e,n)))}handleKeyboardEvent(e,t){this.forEachNavigatorInTreeLine(e.target,((n,i,r,a)=>{if(t(n,i)){if(n.leaveDirection!==y.None){this.leaveFromNavigator(n,r<a.length-1?a[r+1]:null)}return s.markHandled(e,!1),this.removeFocusHiddenAttributes(i),!0}return n.getIsNestedContentSelected(i)}))}handleMouseDown(e){this.activateTreeLine(e,!1),this.updateActiveState(e.target)}handleFocusIn(e){this.updateActiveState(e.target),this.activateTreeLine(e,!0)}getNavigatorsTreeLine(e){return function(e,t){let n=[];do{const s=I(e,t),i=s[s.length-1];n=n.concat(...s),e=i&&S(i)?i.getPortal():null}while(e);return n}(e,this.navigators)}activateTreeLine(e,t){if(this.lockTreeLineActivation)return;this.lockTreeLineActivation=!0;const n=e.target;this.forEachNavigatorInTreeLine(n,((s,i,r)=>(s.updateSelectedItems(i,n,e),0===r&&s.activateStrategyTreeLine(e,t),!1))),this.lockTreeLineActivation=!1}forEachNavigatorInTreeLine(e,t){var n;const s=this.getNavigatorsTreeLine(e);for(let i=0;i<s.length;i++){const r=s[i];if(t(r,e,i,s))break;const a=S(r)?r:null;a&&(e=null!==(n=a.getPortal())&&void 0!==n?n:e)}}updateActiveState(e){let t=null;if(i(e)){const n=I(e,this.navigators);t=n.length>0?n[0]:null}this.navigators.forEach((e=>{e.isActive=e===t}))}leaveFromNavigator(e,t){const n=(e.leaveDirection===y.Backward?v.findPrevFocusableElement:v.findNextFocusableNotChildElement)(e.targetElement),s=e.getSelectedItemElement(),i=null==t?void 0:t.getSelectedItemElement(),r=!s||i&&i.contains(s)?i:null;!n||r&&!r.contains(n)?t&&t.captureFocus():v.focusElement(n)}},f="dxbl-keyboard-navigator";var y,b;!function(e){e[e.None=0]="None",e[e.Backward=1]="Backward",e[e.Forward=2]="Forward"}(y||(y={})),function(e){e.NearestItem="NearestItem",e.LastActiveItem="LastActiveItem"}(b||(b={}));class p extends HTMLElement{constructor(){super(),this._isActive=!1,this._initialized=!1,this._leaveDirection=y.None,this._owner=null,this.rootStrategy=null,this.unsubscribeFocusHiding=null,this.strategies=new Map,this._componentReactivateMode=b.LastActiveItem,this._focusedFromForwardElement=!1,this.contentChangedObserver=new MutationObserver(this.onContentChanged.bind(this))}get isActive(){return this._isActive}set isActive(e){this.updateActiveState(e)}get leaveDirection(){return this._leaveDirection}get initialized(){return this._initialized&&!!this.rootStrategy}get targetElement(){return this.owner}get owner(){return this._owner}get focusedFromForwardElement(){return this._focusedFromForwardElement}attributeChangedCallback(e,t,n){"reactivate-mode"===e&&(this._componentReactivateMode=b[n])}initialize(e,n,s=null){this._initialized=!1,this._owner=e,this.rootStrategy=n,v.makeElementFocusable(this.targetElement),this.register(s),this.unsubscribeFocusHiding=r(this.targetElement),this.attachStrategy(this.rootStrategy),this.rootStrategy.initialize(),t.isFocusWithin(this.targetElement)&&this.updateSelectedItems(document.activeElement),this._initialized=!0}reinitialize(){this._initialized=!1,this.rootStrategy&&(this.rootStrategy.initialize(),this.isActive&&this.rootStrategy.activate()),this._initialized=!0}disconnectedCallback(){this.disposeComponent()}disposeComponent(){var e;this.disposeStrategies(),this.rootStrategy=null,this.contentChangedObserver.disconnect(),null===(e=this.unsubscribeFocusHiding)||void 0===e||e.call(this),this.removeFocusHiddenAttribute(),E.remove(this)}attachStrategy(e){e&&this.strategies.set(e.targetElement,e)}getStrategy(e){var t;return e&&this.strategies.has(e)&&null!==(t=this.strategies.get(e))&&void 0!==t?t:null}getIsNestedContentSelected(e){return this.getStrategiesPath(e).findIndex((e=>e.nestedContentSelected))>=0}onKeyDown(e,t){return this.handleKeyboardEvent(t,(t=>t.handleKeyDown(e)))}onKeyUp(e,t){return this.handleKeyboardEvent(t,(t=>t.handleKeyUp(e)))}dispatchShortcutEvent(e){const t=this.collectShortcutInfo(e);this.dispatchEvent(new m(e,t))}captureFocus(){var e;null===(e=this.findLastSelectedStrategy())||void 0===e||e.captureFocus()}leaveFocus(e){this._leaveDirection=e?y.Backward:y.Forward}getSelectedItemElement(){var e;return null===(e=this.findLastSelectedStrategy())||void 0===e?void 0:e.selectedItemElement}addFocusHiddenAttribute(){return a(this.targetElement),!0}removeFocusHiddenAttribute(){return this.targetElement&&o(this.targetElement),!0}passFocusHiddenAttribute(e){E.addFocusHiddenAttributes(e)}updateSelectedItems(e,t=e,n=null){const s=this.getStrategiesPath(e);for(let i=0;i<s.length;i++){const r=0===i,a=s[i];a.updateSelectedItemByChildElement(e,n),e===t&&a.canSwitchToNestedContentMode()&&(a.nestedContentSelected=r)}}activateStrategyTreeLine(e,t){if(t&&this.tryActivateFromPreviousFocusedSibling(e))return;const n=e.target,s=this.getStrategiesPath(n);if(0===s.length)return;const i=s[0],r=i===this.rootStrategy;r&&i.activate(),r&&1!==s.length||this.handleSelectedItemFocus(i,n)}tryActivateFromPreviousFocusedSibling(e){const t=e.relatedTarget;if(!t||this.targetElement.contains(t))return!1;const n=e.target,s=v.findPrevFocusableElement(n),i=v.findNextFocusableNotChildElement(n);if(t!==s&&t!==i)return!1;const r=this.getStrategiesPath(n);return 0!==r.length&&(this.updateAndActivateRootStrategy(r[0],t,i),!0)}handleSelectedItemFocus(e,t){var n;let s=e.selectedItemElement===t;if(!s){const i=v.findFocusableElementInRootPath(t);e.selectedItemElement!==i&&(null===(n=e.selectedItemElement)||void 0===n?void 0:n.contains(i))||(s=!0)}s&&(e.resetNestedContentSelectedRecursive(),e.focusSelectedItem())}updateAndActivateRootStrategy(e,t,n){if(e.resetNestedContentSelectedRecursive(),this.rootStrategy){if(this._focusedFromForwardElement=t===n,this._componentReactivateMode===b.NearestItem){this.rootStrategy.updateSelectedItemByIndex(t===n?this.rootStrategy.itemCount-1:0)}this.rootStrategy.activate()}}updateActiveState(e){this._isActive!==e&&(this._isActive=e,this.strategies.forEach((t=>t.onActiveStateChanged(e))))}register(e){const t=["disabled"];e&&t.push(e),this.contentChangedObserver.observe(this.targetElement,{childList:!0,subtree:!0,attributeFilter:t}),E.register(this)}onContentChanged(){this.detachDisconnectedStrategies(),this.reinitialize()}getStrategiesPath(e){return I(e,this.strategies)}findLastSelectedStrategy(){var e,t;return null!==(t=null===(e=this.rootStrategy)||void 0===e?void 0:e.findLastSelectedStrategy())&&void 0!==t?t:null}handleKeyboardEvent(e,t){this._leaveDirection=y.None;const n=this.getStrategiesPath(e);for(let e=0;e<n.length;e++){const s=n[e];if(t(s))return!0;if(s.nestedContentSelected)return!1}return!1}detachDisconnectedStrategies(){var e;const t=Array.from(this.strategies.keys()).filter((e=>!e.isConnected));for(const n of t)null===(e=this.strategies.get(n))||void 0===e||e.onDispose(),this.strategies.delete(n)}disposeStrategies(){this.strategies.forEach((e=>e.onDispose()))}collectShortcutInfo(e){const t=this.getStrategiesPath(e.target).map((e=>e.getShortcutContext()));return Object.assign({},...t)}}customElements.define(f,p);class C{constructor(e,t){this._nestedContentSelected=!1,this._selectedItemIndex=0,this.savedSelectedItemElement=null,this._navigator=e,this._targetElement=t,this._items=[]}get navigator(){return this._navigator}get targetElement(){return this._targetElement}get itemCount(){return this.items.length}get selectedItemElement(){return this.items[this.selectedItemIndex]}get nestedContentSelected(){return this._nestedContentSelected}set nestedContentSelected(e){this._nestedContentSelected=e&&this.canFocusSelectedItem()}get preventScrollOnFocus(){return!1}get selectedItemIndex(){return this._selectedItemIndex}set selectedItemIndex(e){this._selectedItemIndex=e}get items(){return this._items}get isObsolete(){return!1}getShortcutContext(){return{}}initialize(){this.storeSelection(),this.items.splice(0);const e=this.queryItems().filter((e=>!!e));0===e.length&&e.push(this.targetElement),e.forEach((e=>this.initializeItemStrategy(e))),this.restoreSelection()}activate(){this.selectItem(this.selectedItemIndex)}onDispose(){var e;(null===(e=this.selectedItemElement)||void 0===e?void 0:e.isConnected)&&v.removeTabIndex(this.selectedItemElement)}getItem(e){return this.items[e]}getSelectedItemStrategy(){return this.navigator.getStrategy(this.selectedItemElement)}focusSelectedItem(){this.canFocusSelectedItem()&&v.focusElement(this.selectedItemElement,this.preventScrollOnFocus)}isIndexWithinBoundaries(e){return e>=0&&e<this.itemCount}handleKeyDown(e){const t=l.KeyUtils.getEventKeyCode(e);if(this.nestedContentSelected){if(t===l.KeyCode.Esc)return this.processEscapeKeyDown();if(t===l.KeyCode.Tab)return this.processTabKeyDown(e.shiftKey)}else if(t===l.KeyCode.Enter)return this.processEnter(e);return!1}handleKeyUp(e){return!1}switchToNestedContent(){if(this.selectedItemElement){const e=this.getNestedContentElement();if(e)return this.nestedContentSelected=!0,v.focusElement(e),!0}return!1}leaveFromNestedContent(){this.nestedContentSelected=!1,this.focusSelectedItem()}resetNestedContentSelectedRecursive(){this.nestedContentSelected=!1;if(!(this.targetElement===this.selectedItemElement)){const e=this.getSelectedItemStrategy();null==e||e.resetNestedContentSelectedRecursive()}}captureFocus(){this.nestedContentSelected&&this.leaveFromNestedContent()}findLastSelectedStrategy(){const e=this.getSelectedItemStrategy();return e&&e!==this?e.findLastSelectedStrategy():this}updateSelectedItemByIndex(e){const t=this.selectedItemElement;this.selectedItemIndex=this.validateItemIndex(e),t&&this.selectedItemElement!==t&&(v.scheduleResetTabIndex(t),this.nestedContentSelected=!1),this.selectedItemElement&&this.canFocusSelectedItem()&&v.makeElementFocusable(this.selectedItemElement)}updateSelectedItemByChildElement(e,t=null){const n=this.findItemElementIndexByChild(e);this.updateSelectedItemByIndex(n)}canSwitchToNestedContentMode(){return!1}onActiveStateChanged(e){}createItemStrategy(e){return null}getItemStrategy(e){const t=this.validateItemIndex(e);return this.navigator.getStrategy(this.getItem(t))}queryItems(){return new Array}queryItemsBySelector(e){return Array.from(this.targetElement.querySelectorAll(e))}selectItem(e){var t;this.updateSelectedItemByIndex(e),this.canFocusSelectedItem()?this.navigator.isActive&&!this.isNestedElementFocused()&&this.focusSelectedItem():null===(t=this.getSelectedItemStrategy())||void 0===t||t.activate()}moveToPrevItem(e=!1){this.selectedItemIndex>0?this.selectItem(this.selectedItemIndex-1):e&&this.selectItem(this.itemCount-1)}moveToNextItem(e=!1){this.selectedItemIndex<this.itemCount-1?this.selectItem(this.selectedItemIndex+1):e&&this.selectItem(0)}isImmediatelyClickEnabled(){return!1}raiseClickEvent(e,t,n,s){const i=new MouseEvent("click",{bubbles:!0,cancelable:!0,ctrlKey:t,metaKey:n,shiftKey:s});e.dispatchEvent(i)}performShortcutEvent(e){this.navigator.dispatchShortcutEvent(e)}validateItemIndex(e){return e=Math.max(e,0),Math.min(e,this.itemCount-1)}leaveBackward(){this.navigator.leaveFocus(!0)}leaveForward(){this.navigator.leaveFocus(!1)}getNestedContentElement(){const e=v.findFocusableElements(this.selectedItemElement);return e.length>0?e[0]:null}findItemElementIndexByChild(e){return v.findItemElementIndexByChild(this.items,e)}tryRestoreSelectedItem(e){if(e.isConnected){const t=this.items.indexOf(e);t>-1&&(this.selectedItemIndex=t)}}initializeItemStrategy(e){this.items.push(e);let t=this.navigator.getStrategy(e);t&&!t.isObsolete||(null==t||t.onDispose(),t=this.createItemStrategy(e),this.navigator.attachStrategy(t)),t&&t!==this&&t.initialize()}canFocusSelectedItem(){return this.targetElement===this.selectedItemElement||!this.getSelectedItemStrategy()}processEnter(e){return!(!this.isImmediatelyClickEnabled()||!this.processImmediatellyClick(e))||this.switchToNestedContent()}processEscapeKeyDown(){return this.leaveFromNestedContent(),!0}processTabKeyDown(e){if(this.selectedItemElement){const t=v.findFocusableElements(this.selectedItemElement);if(t.length>0){const n=document.activeElement===t[0],s=document.activeElement===t[t.length-1];if(e&&n||!e&&s)return this.leaveFromNestedContent(),!0}}return!1}processImmediatellyClick(e){const t=v.findFocusableElements(this.selectedItemElement);return 1===t.length&&(this.raiseClickEvent(t[0],e.ctrlKey,e.metaKey,e.shiftKey),!0)}isNestedElementFocused(){if(!document.activeElement||!this.nestedContentSelected)return!1;return v.findItemElementIndexByChild(this.items,document.activeElement)===this.selectedItemIndex}storeSelection(){this.savedSelectedItemElement=this.selectedItemElement}restoreSelection(){this.savedSelectedItemElement&&this.tryRestoreSelectedItem(this.savedSelectedItemElement),this.savedSelectedItemElement=null}}export{f as D,v as F,C as K,y as L,p as a};