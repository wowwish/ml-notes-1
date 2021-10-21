(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{"3mIW":function(module,exports,e){},CSo3:function(module,e,r){"use strict";r.d(e,"c",function(){return s}),r.d(e,"a",function(){return a}),r.d(e,"b",function(){return c});var t=r("lSNA"),n=r.n(t),i=r("YDId"),o=r("sQ/U");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach(function(r){n()(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var s=function fetchSubscriptionForForum(e,r){var t=r.forumSubscriptionId,n=r.forumType;if(o.a.isAuthenticatedUser())return i.a(t,n).then(function(r){e.dispatch("UPDATE_SUBSCRIPTION",r)}).catch(function(r){e.dispatch("UPDATE_SUBSCRIPTION_FAILED",r)});return Promise.reject(new Error("User not authenticated"))},a=function addSubscription(e,r){var t=r.forumSubscriptionId,n=r.forumType;if(o.a.isAuthenticatedUser())return e.dispatch("UPDATE_SUBSCRIPTION",{id:t,isInProgress:!0}),i.b(t,n).then(function(){e.dispatch("UPDATE_SUBSCRIPTION",{id:t,isSubscribed:!0})}).catch(function(r){e.dispatch("UPDATE_SUBSCRIPTION_FAILED",r)});return Promise.reject(new Error("User not authenticated"))},c=function deleteSubscription(e,r){var t=r.subscription,n=r.forumSubscriptionId,s=r.forumType;if(o.a.isAuthenticatedUser())return e.dispatch("UPDATE_SUBSCRIPTION",_objectSpread(_objectSpread({},t),{},{isInProgress:!0})),i.c(n,s).then(function(){e.dispatch("UPDATE_SUBSCRIPTION",{id:n,isSubscribed:!1})}).catch(function(r){e.dispatch("UPDATE_SUBSCRIPTION_FAILED",r)});return Promise.reject(new Error("User not authenticated"))}},NjuL:function(module,e,r){"use strict";var t=r("VbXa"),n=r.n(t),i=r("w/1P"),o=r.n(i),s=r("CsdX"),a=r("q1tI"),c=r.n(a),u=r("eJMc"),p=r.n(u),l=r("F/us"),m=r.n(l),d=r("cIEV"),b=r.n(d),f=function emptyFunction(){},h=function(e){function Breadcrumbs(){return e.apply(this,arguments)||this}n()(Breadcrumbs,e);var r=Breadcrumbs.prototype;return r.getFilteredLinks=function getFilteredLinks(){var e;return this.props.links.slice().filter(l.identity)},r.render=function render(){var e=this.props,r=e.className,t=e.linkClassName,n=e.separator,i=e.separatorStyles,a=this.getFilteredLinks();return c.a.createElement("ol",{className:o()("rc-Breadcrumbs inline",r)},a.map(function(e,r){var o=[c.a.createElement("li",null,e.href?c.a.createElement(p.a,{className:t,to:e.href,onClick:e.onClick||f},e.label):c.a.createElement("span",{className:t},e.label))];return r!==a.length-1&&o.push(c.a.createElement("li",Object(s.d)("divider",i),n||"/")),o}))},Breadcrumbs}(c.a.Component);e.a=h},OVKh:function(module,e,r){"use strict";var t=r("VbXa"),n=r.n(t),i=r("F/us"),o=r.n(i),s=r("17x9"),a=r.n(s),c=r("q1tI"),u=r.n(c),p=r("sQ/U"),l=r("CSo3"),m=r("AWZ4"),d=r("q5zD"),b=r("8cuT"),f=r.n(b),h=r("GP6s"),S=r.n(h),v=r("UaPE"),y=r.n(v),O=function(e){function SubscriptionButton(r,t){var n;return(n=e.call(this,r,t)||this).toggleSubscription=function(){var e=n.props,r=e.isSubscribed,t=e.forumType,i=e.subscription,o=e.forumSubscriptionId;r?(n.context.executeAction(l.b,{subscription:i,forumSubscriptionId:o,forumType:t}),n.setState({showSubscriptionDetails:!0,subscriptionDetails:S()("You will no longer receive emails whenever new threads are added.")})):(n.context.executeAction(l.a,{forumType:t,forumSubscriptionId:o}),n.setState({showSubscriptionDetails:!0,subscriptionDetails:S()("You will receive emails whenever new threads are added.")}))},n.state={subscriptionDetails:null,showSubscriptionDetails:!1},n}n()(SubscriptionButton,e);var r=SubscriptionButton.prototype;return r.componentDidMount=function componentDidMount(){var e=this.props,r=e.subscription,t=e.forumSubscriptionId,n=e.forumType;r||this.context.executeAction(l.c,{forumType:n,forumSubscriptionId:t})},r.componentDidUpdate=function componentDidUpdate(){var e=this.props,r=e.subscription,t=e.forumSubscriptionId,n=e.forumType;r||this.context.executeAction(l.c,{forumType:n,forumSubscriptionId:t})},r.render=function render(){var e=this.props,r=e.subscription,t=e.isSubscribed,n=e.hasError,i=e.isSubscriptionInProgress,o=this.state,s=o.showSubscriptionDetails,a=o.subscriptionDetails;return u.a.createElement("div",{className:"rc-SubscriptionButton horizontal-box vertical-when-mobile align-items-vertical-center"},u.a.createElement(m.b,{rootClassName:"subscription-button",type:"secondary",size:"sm",onClick:this.toggleSubscription,disabled:!r},(!r||i)&&u.a.createElement(d.a,{name:"spinner",className:"cif-spin"}),!!r&&!i&&(t?S()("Unsubscribe"):S()("Subscribe"))),!n&&s&&u.a.createElement("div",{className:"message caption-text"},a),n&&u.a.createElement("div",{className:"errorMessage"},S()("Sorry, something went wrong. Try again.")),s&&u.a.createElement("span",{className:"screenreader-only","aria-live":"polite"},r&&!i&&t?S()("Subscribed, You will receive emails whenever new threads are added."):S()("Unsubscribed, You will no longer receive emails whenever new threads are added.")))},SubscriptionButton}(u.a.Component);O.propTypes={hasError:a.a.bool,forumSubscriptionId:a.a.string,subscription:a.a.object,forumType:a.a.string,isSubscribed:a.a.bool,isSubscriptionInProgress:a.a.bool},O.contextTypes={executeAction:a.a.func.isRequired},e.a=o.a.compose(f()(["SubscriptionStore","CourseMembershipStore","CourseStore"],function(e,r){var t=e.SubscriptionStore,n=e.CourseMembershipStore,i=e.CourseStore,o=r.forumId,s=o&&o.split("~"),a=o&&"".concat(p.a.get().id,"~").concat(s[0],"~").concat(s[1]);return{forumSubscriptionId:a,hasError:t.hasError(),subscription:t.getSubscription(a),isSubscribed:t.getIsSubscribed(a),isSubscriptionInProgress:t.getIsSubscriptionInProgress(a)}}))(O)},UaPE:function(module,exports,e){var r=e("3mIW"),t;"string"==typeof r&&(r=[[module.i,r,""]]);var n={transform:void 0},i=e("aET+")(r,n);r.locals&&(module.exports=r.locals)},Ub7k:function(module,exports,e){var r=e("qpaI"),t;"string"==typeof r&&(r=[[module.i,r,""]]);var n={transform:void 0},i=e("aET+")(r,n);r.locals&&(module.exports=r.locals)},UvRH:function(module,exports,e){},YDId:function(module,e,r){"use strict";r.d(e,"a",function(){return i}),r.d(e,"b",function(){return o}),r.d(e,"c",function(){return s});var t=r("obES"),n=r("sQ/U"),i=function getForumSubscription(e,r){return t.a.getSubscription(e,r).then(function(e){return Object.assign(e.elements[0],{isSubscribed:!0})}).catch(function(r){if(404===r.status)return{id:e,isSubscribed:!1};throw r})},o=function subscribeUserToEntity(e,r){if(n.a.isAuthenticatedUser())return t.a.subscribe(e,r)},s=function unsubscribeUserFromEntity(e,r){if(n.a.isAuthenticatedUser())return t.a.unsubscribe(e,r)}},YuzB:function(module,exports,e){},arLX:function(module,e,r){"use strict";var t=r("lSNA"),n=r.n(t),i=r("Pzz+");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach(function(r){n()(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}e.a=function(e){if(!e.currentForum)return e;var r=e.courseForums.concat(e.mentorForums).concat(e.groupForums),t=r.find(function(e){return e.forumType.typeName===i.j.rootForumType}),n=e.currentForum;e.currentForum.parentForumId&&e.currentForum.parentForumId!==t.id&&(n=r.find(function(r){return r.id===e.currentForum.parentForumId}));var o=r.filter(function(e){return e.parentForumId===n.id});return o.unshift(n),_objectSpread(_objectSpread({},e),{},{listedForums:o,parentForumId:n.id})}},cIEV:function(module,exports,e){var r=e("UvRH"),t;"string"==typeof r&&(r=[[module.i,r,""]]);var n={transform:void 0},i=e("aET+")(r,n);r.locals&&(module.exports=r.locals)},jYk1:function(module,e,r){"use strict";var t=r("VbXa"),n=r.n(t),i=r("17x9"),o=r.n(i),s=r("q1tI"),a=r.n(s),c=r("F/us"),u=r.n(c),p=r("w/1P"),l=r.n(p),m=r("eJMc"),d=r.n(m),b=r("BVC1"),f=r("BZ+2"),h=r("zFZo"),S=r("weTL"),v=r("+LJP"),y=r("pqXt"),O=r("W1i5"),g=r("hN99"),E=r("arLX"),I=r("oQ9N"),T=r("6fvP"),j=r("GP6s"),w=r.n(j),F=r("vJ/u"),P=r.n(F),N=function(e){function SubforumSidebar(r){var t;return(t=e.call(this,r)||this).resourcePanelEpic=T.b.enabledResourcePanelToPublic(),t}var r;return n()(SubforumSidebar,e),SubforumSidebar.prototype.render=function render(){var e=this,r=this.props,t=r.listedForums,n=r.currentForumId,i=r.parentForumId,o=r.courseSlug;if(!t||t.length<=1)return null;return a.a.createElement("div",{className:"rc-SubforumSidebar card-rich-interaction flex-1"},a.a.createElement("h2",{className:"subforums-list-title headline-1-text color-secondary-text"},w()("Subforums")),a.a.createElement("ul",{className:"nostyle"},t.map(function(r){var t=l()("forum-title",{"body-2-text":r.id===n,"body-1-text":r.id!==n}),s=b.a.join(Object(g.e)(o),r.link),c=Object(g.h)(r.forumId);return s=e.resourcePanelEpic&&c||s,a.a.createElement("li",{className:"subforum-entry"},a.a.createElement(d.a,{key:r.id,to:s,className:"nostyle","aria-current":r.id===n},r.id===n&&a.a.createElement("div",{className:"current-forum-indicator"}),a.a.createElement("div",{className:t},r.id===i?w()("All"):r.title)))})))},SubforumSidebar}(a.a.Component);N.propTypes={courseSlug:o.a.string,listedForums:o.a.arrayOf(o.a.oneOfType([o.a.instanceOf(f.a),o.a.instanceOf(h.a),o.a.instanceOf(S.a)])),currentForumId:o.a.string,parentForumId:o.a.string},e.a=u.a.compose(Object(I.a)({fields:["link","title","description","parentForumId"]}),Object(v.a)(y.a),Object(O.a)(E.a))(N)},obES:function(module,e,r){"use strict";var t=r("wiyT"),n=r.n(t),i=r("CWYE"),o=r("Pzz+"),s=Object(i.a)("/api/onDemandCourseForumSubscriptions.v1",{type:"rest"}),a=Object(i.a)("/api/onDemandMentorForumSubscriptions.v1",{type:"rest"}),c=Object(i.a)("/api/groupForumSubscriptions.v1",{type:"rest"}),u=function getSubscription(e,r){return r===o.j.mentorForumType?n()(a.get(e)):r===o.j.groupForumType?n()(c.get(e)):n()(s.get(e))},p=function subscribe(e,r){return r===o.j.mentorForumType?n()(a.put(e)):r===o.j.groupForumType?n()(c.put(e)):n()(s.put(e))},l=function unsubscribe(e,r){return r===o.j.mentorForumType?n()(a.delete(e)):r===o.j.groupForumType?n()(c.delete(e)):n()(s.delete(e))};e.a={getSubscription:u,subscribe:p,unsubscribe:l}},qpaI:function(module,exports,e){},"vJ/u":function(module,exports,e){var r=e("YuzB"),t;"string"==typeof r&&(r=[[module.i,r,""]]);var n={transform:void 0},i=e("aET+")(r,n);r.locals&&(module.exports=r.locals)},vkTq:function(module,e,r){"use strict";r.r(e);var t=r("VbXa"),n=r.n(t),i=r("17x9"),o=r.n(i),s=r("q1tI"),a=r.n(s),c=r("F/us"),u=r.n(c),p=r("BVC1"),l=r("oVXz"),m=r("hN99"),d=r("7GkZ"),b=r("NjuL"),f=r("OVKh"),h=r("STl7"),S=r("jYk1"),v=r("UVOs"),y=r("5VK0"),O=r("ypD2"),g=r("pqXt"),E=r("arLX"),I=r("Pzz+"),T=r("oQ9N"),j=r("BZ+2"),w=r("zFZo"),F=r("weTL"),P=r("W1i5"),N=r("+LJP"),x=r("GP6s"),U=r.n(x),D=r("Ub7k"),k=r.n(D),C=r("6fvP"),B=function(e){function ThreadsView(r){var t;return(t=e.call(this,r)||this).resourcePanelEnabled=C.b.enabledResourcePanelToPublic(),t}n()(ThreadsView,e);var r=ThreadsView.prototype;return r.renderSubscriptionButton=function renderSubscriptionButton(){var e=this.props.currentForum;if(!e||e.forumType.typeName===I.j.itemForumType)return null;return a.a.createElement("div",{className:"flex-1"},a.a.createElement(f.a,{forumId:this.props.currentForum&&this.props.currentForum.id,forumType:this.props.currentForum&&this.props.currentForum.forumType.typeName,groupId:this.props.currentForum&&this.props.currentForum.forumType.definition.groupId}))},r.render=function render(){var e=this.props.currentForum;if(!e)return a.a.createElement("div",{className:"forum-name headline-5-text color-primary-text"},U()("Oops! Looks like this thread isn't viewable or does not exist."));var r=e.parentForumId&&this.props.listedForums.find(function(r){return e.parentForumId===r.id}),t=e.title,n=e.description,i=e.id,o=p.a.join(Object(m.e)(this.props.courseSlug),e.link);if(!0===this.resourcePanelEnabled){var s,c=(this.context&&this.context.router&&this.context.router.params).forum_id;c&&(o=Object(m.h)(c))}var u=[{label:U()("Discussion Forums"),href:Object(m.d)()},r?{label:r.title,href:p.a.join(Object(m.e)(this.props.courseSlug),r.link)}:void 0],f=!!this.context.router.params.question_id;return a.a.createElement("div",{className:"rc-ThreadsView"},a.a.createElement("div",{className:"horizontal-box vertical-when-tablet"},a.a.createElement("div",{className:"flex-2 threads-view-header"},a.a.createElement(b.a,{className:"breadcrumbs",links:u}),a.a.createElement("div",null,a.a.createElement("h1",{className:"forum-name headline-5-text color-primary-text"},t),!f&&a.a.createElement("div",{className:"forum-description horizontal-box align-items-vertical-center vertical-when-mobile"},a.a.createElement(d.a,{className:"body-1-text",cml:n}),a.a.createElement("div",null,this.renderSubscriptionButton())))),a.a.createElement("div",{className:"flex-1 align-self-end session-switcher-container"},a.a.createElement(h.a,null))),a.a.createElement("div",{className:"horizontal-box align-items-top vertical-when-tablet"},a.a.createElement(l.a,{className:"flex-2 discussions-body-column",key:i,backLink:o}),a.a.createElement(S.a,null)))},ThreadsView}(a.a.Component);B.propTypes={currentForum:o.a.oneOfType([o.a.instanceOf(j.a),o.a.instanceOf(w.a),o.a.instanceOf(F.a)]),listedForums:o.a.arrayOf(o.a.oneOfType([o.a.instanceOf(j.a),o.a.instanceOf(w.a),o.a.instanceOf(F.a)])),courseSlug:o.a.string},B.contextTypes={router:o.a.object.isRequired},e.default=Object(c.compose)(Object(T.a)({fields:["title","description","link"],subcomponents:[S.a,v.a,y.a,O.a]}),Object(N.a)(g.a),Object(P.a)(E.a))(B)}}]);
//# sourceMappingURL=83.46ff592f20fe3e9957f2.js.map