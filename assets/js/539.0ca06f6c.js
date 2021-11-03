"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[539],{56573:(e,t,n)=>{n.d(t,{W:()=>r});var a=n(27378);function r(){return a.createElement("svg",{width:"20",height:"20",className:"DocSearch-Search-Icon",viewBox:"0 0 20 20"},a.createElement("path",{d:"M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"}))}},31554:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(27378);const r="iconExternalLink_pqex";const o=function(e){var t=e.width,n=void 0===t?13.5:t,o=e.height,l=void 0===o?13.5:o;return a.createElement("svg",{width:n,height:l,"aria-hidden":"true",viewBox:"0 0 24 24",className:r},a.createElement("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"}))}},28539:(e,t,n)=>{n.d(t,{Z:()=>Ee});var a=n(27378),r=n(38944),o=n(69635),l=n(11787),c=n(35013);const i="skipToContent_3wvD";function s(e){e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex")}const u=function(){var e=(0,a.useRef)(null),t=(0,o.k6)().action;return(0,c.SL)((function(n){var a=n.location;e.current&&!a.hash&&"PUSH"===t&&s(e.current)})),a.createElement("div",{ref:e},a.createElement("a",{href:"#",className:i,onClick:function(e){e.preventDefault();var t=document.querySelector("main:first-of-type")||document.querySelector(".main-wrapper");t&&s(t)}},a.createElement(l.Z,{id:"theme.common.skipToMainContent",description:"The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation"},"Skip to main content")))};var m=n(25773),d=n(30808),f=["width","height","className"];function v(e){var t=e.width,n=void 0===t?20:t,r=e.height,o=void 0===r?20:r,l=e.className,c=(0,d.Z)(e,f);return a.createElement("svg",(0,m.Z)({className:l,viewBox:"0 0 24 24",width:n,height:o,fill:"currentColor"},c),a.createElement("path",{d:"M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"}))}const h="announcementBar_2FrG",b="announcementBarPlaceholder_3Bc7",g="announcementBarClose_QGKR",p="announcementBarContent_1th2";const E=function(){var e=(0,c.nT)(),t=e.isClosed,n=e.close,o=(0,c.LU)().announcementBar;if(!o)return null;var i=o.content,s=o.backgroundColor,u=o.textColor,m=o.isCloseable;return!i||m&&t?null:a.createElement("div",{className:h,style:{backgroundColor:s,color:u},role:"banner"},m&&a.createElement("div",{className:b}),a.createElement("div",{className:p,dangerouslySetInnerHTML:{__html:i}}),m?a.createElement("button",{type:"button",className:(0,r.Z)("clean-btn close",g),onClick:n,"aria-label":(0,l.I)({id:"theme.AnnouncementBar.closeButtonAriaLabel",message:"Close",description:"The ARIA label for close button of announcement bar"})},a.createElement(v,{width:14,height:14})):null)};var k=n(78347),w=n(76457);const Z={toggle:"toggle_2wFP"};var y=function(e){var t=e.icon,n=e.style;return a.createElement("span",{className:(0,r.Z)(Z.toggle,Z.dark),style:n},t)},C=function(e){var t=e.icon,n=e.style;return a.createElement("span",{className:(0,r.Z)(Z.toggle,Z.light),style:n},t)},N=(0,a.memo)((function(e){var t=e.className,n=e.icons,o=e.checked,l=e.disabled,c=e.onChange,i=(0,a.useState)(o),s=i[0],u=i[1],m=(0,a.useState)(!1),d=m[0],f=m[1],v=(0,a.useRef)(null);return a.createElement("div",{className:(0,r.Z)("react-toggle",t,{"react-toggle--checked":s,"react-toggle--focus":d,"react-toggle--disabled":l})},a.createElement("div",{className:"react-toggle-track",role:"button",tabIndex:-1,onClick:function(){var e;return null==(e=v.current)?void 0:e.click()}},a.createElement("div",{className:"react-toggle-track-check"},n.checked),a.createElement("div",{className:"react-toggle-track-x"},n.unchecked),a.createElement("div",{className:"react-toggle-thumb"})),a.createElement("input",{ref:v,checked:s,type:"checkbox",className:"react-toggle-screenreader-only","aria-label":"Switch between dark and light mode",onChange:c,onClick:function(){return u(!s)},onFocus:function(){return f(!0)},onBlur:function(){return f(!1)},onKeyDown:function(e){var t;"Enter"===e.key&&(null==(t=v.current)||t.click())}}))}));function _(e){var t=(0,c.LU)().colorMode.switchConfig,n=t.darkIcon,r=t.darkIconStyle,o=t.lightIcon,l=t.lightIconStyle,i=(0,w.Z)();return a.createElement(N,(0,m.Z)({disabled:!i,icons:{checked:a.createElement(y,{icon:n,style:r}),unchecked:a.createElement(C,{icon:o,style:l})}},e))}var S=n(29237),I=n(95135);const L=function(e){var t=(0,o.TH)(),n=(0,a.useState)(e),r=n[0],l=n[1],i=(0,a.useRef)(!1),s=(0,a.useState)(0),u=s[0],m=s[1],d=(0,a.useCallback)((function(e){null!==e&&m(e.getBoundingClientRect().height)}),[]);return(0,I.Z)((function(t,n){var a=t.scrollY,r=null==n?void 0:n.scrollY;if(e)if(a<u)l(!0);else{if(i.current)return i.current=!1,void l(!1);r&&0===a&&l(!0);var o=document.documentElement.scrollHeight-u,c=window.innerHeight;r&&a>=r?l(!1):a+c<o&&l(!0)}}),[u,i]),(0,c.SL)((function(t){e&&!t.location.hash&&l(!0)})),(0,a.useEffect)((function(){e&&t.hash&&(i.current=!0)}),[t.hash]),{navbarRef:d,isNavbarVisible:r}};const D=function(e){void 0===e&&(e=!0),(0,a.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])};var B=n(98245),T=n(76889),M=n(75330),P=n(94454),A=["width","height","className"];const x=function(e){var t=e.width,n=void 0===t?30:t,r=e.height,o=void 0===r?30:r,l=e.className,c=(0,d.Z)(e,A);return a.createElement("svg",(0,m.Z)({className:l,width:n,height:o,viewBox:"0 0 30 30","aria-hidden":"true"},c),a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))};var R=["width","height","className"];function O(e){var t=e.width,n=void 0===t?20:t,r=e.height,o=void 0===r?20:r,l=e.className,c=(0,d.Z)(e,R);return a.createElement("svg",(0,m.Z)({className:l,viewBox:"0 0 413.348 413.348",width:n,height:o,fill:"currentColor"},c),a.createElement("path",{d:"m413.348 24.354-24.354-24.354-182.32 182.32-182.32-182.32-24.354 24.354 182.32 182.32-182.32 182.32 24.354 24.354 182.32-182.32 182.32 182.32 24.354-24.354-182.32-182.32z"}))}const U="toggle_2vag",V="navbarHideable_z9Sw",z="navbarHidden_2kTK",W="navbarSidebarToggle_3XMU",j="navbarSidebarCloseSvg_1G3c";var H="right";function F(){return(0,c.LU)().navbar.items}function K(){var e=(0,c.LU)().colorMode.disableSwitch,t=(0,S.Z)(),n=t.isDarkTheme,r=t.setLightTheme,o=t.setDarkTheme;return{isDarkTheme:n,toggle:(0,a.useCallback)((function(e){return e.target.checked?o():r()}),[r,o]),disabled:e}}function q(e){var t=e.sidebarShown,n=e.toggleSidebar;D(t);var o=F(),i=K(),s=function(e){var t,n=e.sidebarShown,r=e.toggleSidebar,o=null==(t=(0,c.g8)())?void 0:t({toggleSidebar:r}),l=(0,c.D9)(o),i=(0,a.useState)((function(){return!1})),s=i[0],u=i[1];(0,a.useEffect)((function(){o&&!l&&u(!0)}),[o,l]);var m=!!o;return(0,a.useEffect)((function(){m?n||u(!0):u(!1)}),[n,m]),{shown:s,hide:(0,a.useCallback)((function(){u(!1)}),[]),content:o}}({sidebarShown:t,toggleSidebar:n});return a.createElement("div",{className:"navbar-sidebar"},a.createElement("div",{className:"navbar-sidebar__brand"},a.createElement(P.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),!i.disabled&&a.createElement(_,{className:W,checked:i.isDarkTheme,onChange:i.toggle}),a.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__close",onClick:n},a.createElement(O,{width:20,height:20,className:j}))),a.createElement("div",{className:(0,r.Z)("navbar-sidebar__items",{"navbar-sidebar__items--show-secondary":s.shown})},a.createElement("div",{className:"navbar-sidebar__item menu"},a.createElement("ul",{className:"menu__list"},o.map((function(e,t){return a.createElement(M.Z,(0,m.Z)({mobile:!0},e,{onClick:n,key:t}))})))),a.createElement("div",{className:"navbar-sidebar__item menu"},o.length>0&&a.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__back",onClick:s.hide},a.createElement(l.Z,{id:"theme.navbar.mobileSidebarSecondaryMenu.backButtonLabel",description:"The label of the back button to return to main menu, inside the mobile navbar sidebar secondary menu (notably used to display the docs sidebar)"},"\u2190 Back to main menu")),s.content)))}const G=function(){var e,t=(0,c.LU)().navbar,n=t.hideOnScroll,o=t.style,l=function(){var e=(0,B.Z)(),t="mobile"===e,n=(0,a.useState)(!1),r=n[0],o=n[1];(0,c.Rb)((function(){r&&o(!1)}));var l=(0,a.useCallback)((function(){o((function(e){return!e}))}),[]);return(0,a.useEffect)((function(){"desktop"===e&&o(!1)}),[e]),{shouldRender:t,toggle:l,shown:r}}(),i=K(),s=(0,T.gA)(),u=L(n),d=u.navbarRef,f=u.isNavbarVisible,v=F(),h=v.some((function(e){return"search"===e.type})),b=function(e){return{leftItems:e.filter((function(e){var t;return"left"===(null!=(t=e.position)?t:H)})),rightItems:e.filter((function(e){var t;return"right"===(null!=(t=e.position)?t:H)}))}}(v),g=b.leftItems,p=b.rightItems;return a.createElement("nav",{ref:d,className:(0,r.Z)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===o,"navbar--primary":"primary"===o,"navbar-sidebar--show":l.shown},e[V]=n,e[z]=n&&!f,e))},a.createElement("div",{className:"navbar__inner"},a.createElement("div",{className:"navbar__items"},((null==v?void 0:v.length)>0||s)&&a.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle clean-btn",type:"button",tabIndex:0,onClick:l.toggle,onKeyDown:l.toggle},a.createElement(x,null)),a.createElement(P.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),g.map((function(e,t){return a.createElement(M.Z,(0,m.Z)({},e,{key:t}))}))),a.createElement("div",{className:"navbar__items navbar__items--right"},p.map((function(e,t){return a.createElement(M.Z,(0,m.Z)({},e,{key:t}))})),!i.disabled&&a.createElement(_,{className:U,checked:i.isDarkTheme,onChange:i.toggle}),!h&&a.createElement(k.Z,null))),a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:l.toggle}),l.shouldRender&&a.createElement(q,{sidebarShown:l.shown,toggleSidebar:l.toggle}))};var X=n(23880),Y=n(161),J=(0,c.WA)("theme"),Q="light",$="dark",ee=function(e){return e===$?$:Q},te=function(e){(0,c.WA)("theme").set(ee(e))};const ne=function(){var e=(0,c.LU)().colorMode,t=e.defaultMode,n=e.disableSwitch,r=e.respectPrefersColorScheme,o=(0,a.useState)(function(e){return Y.Z.canUseDOM?ee(document.documentElement.getAttribute("data-theme")):ee(e)}(t)),l=o[0],i=o[1],s=(0,a.useCallback)((function(){i(Q),te(Q)}),[]),u=(0,a.useCallback)((function(){i($),te($)}),[]);return(0,a.useEffect)((function(){document.documentElement.setAttribute("data-theme",ee(l))}),[l]),(0,a.useEffect)((function(){if(!n)try{var e=J.get();null!==e&&i(ee(e))}catch(t){console.error(t)}}),[i]),(0,a.useEffect)((function(){n&&!r||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;i(t?$:Q)}))}),[]),{isDarkTheme:l===$,setLightTheme:s,setDarkTheme:u}};var ae=n(20579);const re=function(e){var t=ne(),n=t.isDarkTheme,r=t.setLightTheme,o=t.setDarkTheme;return a.createElement(ae.Z.Provider,{value:{isDarkTheme:n,setLightTheme:r,setDarkTheme:o}},e.children)};var oe="docusaurus.tab.";const le=function(){var e=(0,a.useState)({}),t=e[0],n=e[1],r=(0,a.useCallback)((function(e,t){(0,c.WA)("docusaurus.tab."+e).set(t)}),[]);return(0,a.useEffect)((function(){try{var e={};(0,c._f)().forEach((function(t){if(t.startsWith(oe)){var n=t.substring(oe.length);e[n]=(0,c.WA)(t).get()}})),n(e)}catch(t){console.error(t)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){n((function(n){var a;return Object.assign({},n,((a={})[e]=t,a))})),r(e,t)}}};const ce=(0,a.createContext)(void 0);const ie=function(e){var t=le(),n=t.tabGroupChoices,r=t.setTabGroupChoices;return a.createElement(ce.Provider,{value:{tabGroupChoices:n,setTabGroupChoices:r}},e.children)};function se(e){var t=e.children;return a.createElement(re,null,a.createElement(c.pl,null,a.createElement(ie,null,a.createElement(c.L5,null,a.createElement(c.Cn,null,t)))))}var ue=n(55361),me=n(50353),de=n(98948);function fe(e){var t=e.locale,n=e.version,r=e.tag,o=t;return a.createElement(ue.Z,null,o&&a.createElement("meta",{name:"docsearch:language",content:o}),n&&a.createElement("meta",{name:"docsearch:version",content:n}),r&&a.createElement("meta",{name:"docsearch:docusaurus_tag",content:r}))}var ve=n(71956);function he(){var e=(0,me.Z)().i18n,t=e.defaultLocale,n=e.locales,r=(0,c.l5)();return a.createElement(ue.Z,null,n.map((function(e){return a.createElement("link",{key:e,rel:"alternate",href:r.createUrl({locale:e,fullyQualified:!0}),hrefLang:e})})),a.createElement("link",{rel:"alternate",href:r.createUrl({locale:t,fullyQualified:!0}),hrefLang:"x-default"}))}function be(e){var t=e.permalink,n=(0,me.Z)().siteConfig.url,r=function(){var e=(0,me.Z)().siteConfig.url,t=(0,o.TH)().pathname;return e+(0,de.Z)(t)}(),l=t?""+n+t:r;return a.createElement(ue.Z,null,a.createElement("meta",{property:"og:url",content:l}),a.createElement("link",{rel:"canonical",href:l}))}function ge(e){var t=(0,me.Z)(),n=t.siteConfig.favicon,r=t.i18n,o=r.currentLocale,l=r.localeConfigs,i=(0,c.LU)(),s=i.metadatas,u=i.image,d=e.title,f=e.description,v=e.image,h=e.keywords,b=e.searchMetadatas,g=(0,de.Z)(n),p=(0,c.pe)(d),E=o,k=l[o].direction;return a.createElement(a.Fragment,null,a.createElement(ue.Z,null,a.createElement("html",{lang:E,dir:k}),n&&a.createElement("link",{rel:"shortcut icon",href:g}),a.createElement("title",null,p),a.createElement("meta",{property:"og:title",content:p}),a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),u&&a.createElement(ve.Z,{image:u}),v&&a.createElement(ve.Z,{image:v}),a.createElement(ve.Z,{description:f,keywords:h}),a.createElement(be,null),a.createElement(he,null),a.createElement(fe,(0,m.Z)({tag:c.HX,locale:o},b)),a.createElement(ue.Z,null,s.map((function(e,t){return a.createElement("meta",(0,m.Z)({key:"metadata_"+t},e))}))))}const pe=function(){(0,a.useEffect)((function(){var e="navigation-with-keyboard";function t(t){"keydown"===t.type&&"Tab"===t.key&&document.body.classList.add(e),"mousedown"===t.type&&document.body.classList.remove(e)}return document.addEventListener("keydown",t),document.addEventListener("mousedown",t),function(){document.body.classList.remove(e),document.removeEventListener("keydown",t),document.removeEventListener("mousedown",t)}}),[])};const Ee=function(e){var t=e.children,n=e.noFooter,o=e.wrapperClassName,l=e.pageClassName;return pe(),a.createElement(se,null,a.createElement(ge,e),a.createElement(u,null),a.createElement(E,null),a.createElement(G,null),a.createElement("div",{className:(0,r.Z)(c.kM.wrapper.main,o,l)},t),!n&&a.createElement(X.Z,null))}},94454:(e,t,n)=>{n.d(t,{Z:()=>g});var a=n(25773),r=n(30808),o=n(27378),l=n(24142),c=n(38944),i=n(76457),s=n(29237);const u={themedImage:"themedImage_Ir0T","themedImage--light":"themedImage--light_2_E0","themedImage--dark":"themedImage--dark_2JiM"};var m=["sources","className","alt"];const d=function(e){var t=(0,i.Z)(),n=(0,s.Z)().isDarkTheme,l=e.sources,d=e.className,f=e.alt,v=void 0===f?"":f,h=(0,r.Z)(e,m),b=t?n?["dark"]:["light"]:["light","dark"];return o.createElement(o.Fragment,null,b.map((function(e){return o.createElement("img",(0,a.Z)({key:e,src:l[e],alt:v,className:(0,c.Z)(u.themedImage,u["themedImage--"+e],d)},h))})))};var f=n(98948),v=n(50353),h=n(35013),b=["imageClassName","titleClassName"];const g=function(e){var t=(0,v.Z)().siteConfig.title,n=(0,h.LU)().navbar,c=n.title,i=n.logo,s=void 0===i?{src:""}:i,u=e.imageClassName,m=e.titleClassName,g=(0,r.Z)(e,b),p=(0,f.Z)(s.href||"/"),E={light:(0,f.Z)(s.src),dark:(0,f.Z)(s.srcDark||s.src)};return o.createElement(l.Z,(0,a.Z)({to:p},g,s.target&&{target:s.target}),s.src&&o.createElement(d,{className:u,sources:E,alt:s.alt||c||t}),null!=c&&o.createElement("b",{className:m},c))}},39970:(e,t,n)=>{n.d(t,{O:()=>b,Z:()=>E});var a=n(25773),r=n(30808),o=n(27378),l=n(38944),c=n(24142),i=n(98948),s=n(31554),u=n(45626),m=n(75330),d=["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"],f=["className","isDropdownItem"],v=["className","isDropdownItem"],h=["mobile","position"];function b(e){var t,n=e.activeBasePath,l=e.activeBaseRegex,m=e.to,f=e.href,v=e.label,h=e.activeClassName,b=void 0===h?"":h,g=e.prependBaseUrlToHref,p=(0,r.Z)(e,d),E=(0,i.Z)(m),k=(0,i.Z)(n),w=(0,i.Z)(f,{forcePrependBaseUrl:!0}),Z=v&&f&&!(0,u.Z)(f),y="dropdown__link--active"===b;return o.createElement(c.Z,(0,a.Z)({},f?{href:g?w:f}:Object.assign({isNavLink:!0,activeClassName:null!=(t=p.className)&&t.includes(b)?"":b,to:E},n||l?{isActive:function(e,t){return l?new RegExp(l).test(t.pathname):t.pathname.startsWith(k)}}:null),p),Z?o.createElement("span",null,v,o.createElement(s.Z,y&&{width:12,height:12})):v)}function g(e){var t=e.className,n=e.isDropdownItem,c=void 0!==n&&n,i=(0,r.Z)(e,f),s=o.createElement(b,(0,a.Z)({className:(0,l.Z)(c?"dropdown__link":"navbar__item navbar__link",t)},i));return c?o.createElement("li",null,s):s}function p(e){var t=e.className,n=(e.isDropdownItem,(0,r.Z)(e,v));return o.createElement("li",{className:"menu__list-item"},o.createElement(b,(0,a.Z)({className:(0,l.Z)("menu__link",t)},n)))}const E=function(e){var t,n=e.mobile,l=void 0!==n&&n,c=(e.position,(0,r.Z)(e,h)),i=l?p:g;return o.createElement(i,(0,a.Z)({},c,{activeClassName:null!=(t=c.activeClassName)?t:(0,m.E)(l)}))}},5807:(e,t,n)=>{n.d(t,{Z:()=>f});var a=n(25773),r=n(30808),o=n(27378),l=n(39970),c=n(76889),i=n(38944),s=n(75330),u=n(35013),m=n(51721),d=["docId","label","docsPluginId"];function f(e){var t,n=e.docId,f=e.label,v=e.docsPluginId,h=(0,r.Z)(e,d),b=(0,c.Iw)(v),g=b.activeVersion,p=b.activeDoc,E=(0,u.J)(v).preferredVersion,k=(0,c.yW)(v),w=function(e,t){var n=e.flatMap((function(e){return e.docs})),a=n.find((function(e){return e.id===t}));if(!a){var r=n.map((function(e){return e.id})).join("\n- ");throw new Error("DocNavbarItem: couldn't find any doc with id \""+t+'" in version'+(e.length?"s":"")+" "+e.map((function(e){return e.name})).join(", ")+'".\nAvailable doc ids are:\n- '+r)}return a}((0,m.uniq)([g,E,k].filter(Boolean)),n),Z=(0,s.E)(h.mobile);return o.createElement(l.Z,(0,a.Z)({exact:!0},h,{className:(0,i.Z)(h.className,(t={},t[Z]=(null==p?void 0:p.sidebar)&&p.sidebar===w.sidebar,t)),activeClassName:Z,label:null!=f?f:w.id,to:w.path}))}},18259:(e,t,n)=>{n.d(t,{Z:()=>f});var a=n(25773),r=n(30808),o=n(27378),l=n(39970),c=n(43727),i=n(76889),s=n(35013),u=n(11787),m=["mobile","docsPluginId","dropdownActiveClassDisabled","dropdownItemsBefore","dropdownItemsAfter"],d=function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))};function f(e){var t,n,f=e.mobile,v=e.docsPluginId,h=e.dropdownActiveClassDisabled,b=e.dropdownItemsBefore,g=e.dropdownItemsAfter,p=(0,r.Z)(e,m),E=(0,i.Iw)(v),k=(0,i.gB)(v),w=(0,i.yW)(v),Z=(0,s.J)(v),y=Z.preferredVersion,C=Z.savePreferredVersionName;var N,_=(N=k.map((function(e){var t=(null==E?void 0:E.alternateDocVersions[e.name])||d(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:function(){return e===(null==E?void 0:E.activeVersion)},onClick:function(){C(e.name)}}})),[].concat(b,N,g)),S=null!=(t=null!=(n=E.activeVersion)?n:y)?t:w,I=f&&_?(0,u.I)({id:"theme.navbar.mobileVersionsDropdown.label",message:"Versions",description:"The label for the navbar versions dropdown on mobile view"}):S.label,L=f&&_?void 0:d(S).path;return _.length<=1?o.createElement(l.Z,(0,a.Z)({},p,{mobile:f,label:I,to:L,isActive:h?function(){return!1}:void 0})):o.createElement(c.Z,(0,a.Z)({},p,{mobile:f,label:I,to:L,items:_,isActive:h?function(){return!1}:void 0}))}},71393:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(25773),r=n(30808),o=n(27378),l=n(39970),c=n(76889),i=n(35013),s=["label","to","docsPluginId"];function u(e){var t,n=e.label,u=e.to,m=e.docsPluginId,d=(0,r.Z)(e,s),f=(0,c.zu)(m),v=(0,i.J)(m).preferredVersion,h=(0,c.yW)(m),b=null!=(t=null!=f?f:v)?t:h,g=null!=n?n:b.label,p=null!=u?u:function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))}(b).path;return o.createElement(l.Z,(0,a.Z)({},d,{label:g,to:p}))}},43727:(e,t,n)=>{n.d(t,{Z:()=>b});var a=n(25773),r=n(30808),o=n(27378),l=n(38944),c=n(35013),i=n(39970),s=n(75330),u=["items","position","className"],m=["items","className","position"],d=["mobile"];function f(e,t){return e.some((function(e){return function(e,t){return!!(0,c.Mg)(e.to,t)||!(!e.activeBaseRegex||!new RegExp(e.activeBaseRegex).test(t))||!(!e.activeBasePath||!t.startsWith(e.activeBasePath))}(e,t)}))}function v(e){var t,n=e.items,c=e.position,m=e.className,d=(0,r.Z)(e,u),f=(0,o.useRef)(null),v=(0,o.useRef)(null),h=(0,o.useState)(!1),b=h[0],g=h[1];return(0,o.useEffect)((function(){var e=function(e){f.current&&!f.current.contains(e.target)&&g(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[f]),o.createElement("div",{ref:f,className:(0,l.Z)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--right":"right"===c,"dropdown--show":b})},o.createElement(i.O,(0,a.Z)({className:(0,l.Z)("navbar__link",m)},d,{onClick:d.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),g(!b))}}),null!=(t=d.children)?t:d.label),o.createElement("ul",{ref:v,className:"dropdown__menu"},n.map((function(e,t){return o.createElement(s.Z,(0,a.Z)({isDropdownItem:!0,onKeyDown:function(e){if(t===n.length-1&&"Tab"===e.key){e.preventDefault(),g(!1);var a=f.current.nextElementSibling;a&&a.focus()}},activeClassName:"dropdown__link--active"},e,{key:t}))}))))}function h(e){var t,n=e.items,u=e.className,d=(e.position,(0,r.Z)(e,m)),v=(0,c.be)(),h=f(n,v),b=(0,c.uR)({initialState:function(){return!h}}),g=b.collapsed,p=b.toggleCollapsed,E=b.setCollapsed;return(0,o.useEffect)((function(){h&&E(!h)}),[v,h]),o.createElement("li",{className:(0,l.Z)("menu__list-item",{"menu__list-item--collapsed":g})},o.createElement(i.O,(0,a.Z)({role:"button",className:(0,l.Z)("menu__link menu__link--sublist",u)},d,{onClick:function(e){e.preventDefault(),p()}}),null!=(t=d.children)?t:d.label),o.createElement(c.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:g},n.map((function(e,t){return o.createElement(s.Z,(0,a.Z)({mobile:!0,isDropdownItem:!0,onClick:d.onClick,activeClassName:"menu__link--active"},e,{key:t}))}))))}const b=function(e){var t=e.mobile,n=void 0!==t&&t,a=(0,r.Z)(e,d),l=n?h:v;return o.createElement(l,a)}},75330:(e,t,n)=>{n.d(t,{Z:()=>k,E:()=>E});var a=n(30808),r=n(27378),o=n(39970),l=n(43727),c=n(25773),i=["width","height"];const s=function(e){var t=e.width,n=void 0===t?20:t,o=e.height,l=void 0===o?20:o,s=(0,a.Z)(e,i);return r.createElement("svg",(0,c.Z)({viewBox:"0 0 20 20",width:n,height:l,"aria-hidden":"true"},s),r.createElement("path",{fill:"currentColor",d:"M19.753 10.909c-.624-1.707-2.366-2.726-4.661-2.726-.09 0-.176.002-.262.006l-.016-2.063 3.525-.607c.115-.019.133-.119.109-.231-.023-.111-.167-.883-.188-.976-.027-.131-.102-.127-.207-.109-.104.018-3.25.461-3.25.461l-.013-2.078c-.001-.125-.069-.158-.194-.156l-1.025.016c-.105.002-.164.049-.162.148l.033 2.307s-3.061.527-3.144.543c-.084.014-.17.053-.151.143.019.09.19 1.094.208 1.172.018.08.072.129.188.107l2.924-.504.035 2.018c-1.077.281-1.801.824-2.256 1.303-.768.807-1.207 1.887-1.207 2.963 0 1.586.971 2.529 2.328 2.695 3.162.387 5.119-3.06 5.769-4.715 1.097 1.506.256 4.354-2.094 5.98-.043.029-.098.129-.033.207l.619.756c.08.096.206.059.256.023 2.51-1.73 3.661-4.515 2.869-6.683zm-7.386 3.188c-.966-.121-.944-.914-.944-1.453 0-.773.327-1.58.876-2.156a3.21 3.21 0 011.229-.799l.082 4.277a2.773 2.773 0 01-1.243.131zm2.427-.553l.046-4.109c.084-.004.166-.01.252-.01.773 0 1.494.145 1.885.361.391.217-1.023 2.713-2.183 3.758zm-8.95-7.668a.196.196 0 00-.196-.145h-1.95a.194.194 0 00-.194.144L.008 16.916c-.017.051-.011.076.062.076h1.733c.075 0 .099-.023.114-.072l1.008-3.318h3.496l1.008 3.318c.016.049.039.072.113.072h1.734c.072 0 .078-.025.062-.076-.014-.05-3.083-9.741-3.494-11.04zm-2.618 6.318l1.447-5.25 1.447 5.25H3.226z"}))};var u=n(50353),m=n(35013);const d="iconLanguage_geqI";var f=["mobile","dropdownItemsBefore","dropdownItemsAfter"];function v(e){var t=e.mobile,n=e.dropdownItemsBefore,o=e.dropdownItemsAfter,i=(0,a.Z)(e,f),v=(0,u.Z)().i18n,h=v.currentLocale,b=v.locales,g=v.localeConfigs,p=(0,m.l5)();function E(e){return g[e].label}var k=b.map((function(e){var t="pathname://"+p.createUrl({locale:e,fullyQualified:!1});return{isNavLink:!0,label:E(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===h?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),w=[].concat(n,k,o),Z=t?"Languages":E(h);return r.createElement(l.Z,(0,c.Z)({},i,{href:"#",mobile:t,label:r.createElement("span",null,r.createElement(s,{className:d}),r.createElement("span",null,Z)),items:w}))}var h=n(78347);function b(e){return e.mobile?null:r.createElement(h.Z,null)}var g=["type"],p={default:function(){return o.Z},localeDropdown:function(){return v},search:function(){return b},dropdown:function(){return l.Z},docsVersion:function(){return n(71393).Z},docsVersionDropdown:function(){return n(18259).Z},doc:function(){return n(5807).Z}};var E=function(e){return e?"menu__link--active":"navbar__link--active"};function k(e){var t=e.type,n=(0,a.Z)(e,g),o=function(e,t){return e&&"default"!==e?e:t?"dropdown":"default"}(t,void 0!==n.items),l=function(e){var t=p[e];if(!t)throw new Error('No NavbarItem component found for type "'+e+'".');return t()}(o);return r.createElement(l,n)}},71956:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(27378),r=n(55361),o=n(35013),l=n(98948);function c(e){var t=e.title,n=e.description,c=e.keywords,i=e.image,s=e.children,u=(0,o.pe)(t),m=(0,l.C)().withBaseUrl,d=i?m(i,{absolute:!0}):void 0;return a.createElement(r.Z,null,t&&a.createElement("title",null,u),t&&a.createElement("meta",{property:"og:title",content:u}),n&&a.createElement("meta",{name:"description",content:n}),n&&a.createElement("meta",{property:"og:description",content:n}),c&&a.createElement("meta",{name:"keywords",content:Array.isArray(c)?c.join(","):c}),d&&a.createElement("meta",{property:"og:image",content:d}),d&&a.createElement("meta",{name:"twitter:image",content:d}),s)}},95135:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(27378),r=n(161),o=function(){return r.Z.canUseDOM?{scrollX:window.pageXOffset,scrollY:window.pageYOffset}:null};const l=function(e,t){void 0===t&&(t=[]);var n=(0,a.useRef)(o()),r=function(){var t=o();e&&e(t,n.current),n.current=t};(0,a.useEffect)((function(){var e={passive:!0};return r(),window.addEventListener("scroll",r,e),function(){return window.removeEventListener("scroll",r,e)}}),t)}},98245:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(27378),r=n(161),o="desktop",l="mobile",c="ssr";function i(){return r.Z.canUseDOM?window.innerWidth>996?o:l:c}const s=function(){var e=(0,a.useState)((function(){return i()})),t=e[0],n=e[1];return(0,a.useEffect)((function(){function e(){n(i())}return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e),clearTimeout(undefined)}}),[]),t}},78347:(e,t,n)=>{n.d(t,{Z:()=>L});var a=n(25773),r=n(30808),o=n(27378),l=n(31542),c=n(50353),i=n(69635),s=n(98948),u=n(24142),m=n(55361),d=n(49033);function f(){return o.createElement("svg",{width:"15",height:"15",className:"DocSearch-Control-Key-Icon"},o.createElement("path",{d:"M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953",strokeWidth:"1.2",stroke:"currentColor",fill:"none",strokeLinecap:"square"}))}var v=n(56573);function h(){return h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},h.apply(this,arguments)}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var g="Ctrl";var p=o.forwardRef((function(e,t){var n=e.translations,a=void 0===n?{}:n,r=b(e,["translations"]),l=a.buttonText,c=void 0===l?"Search":l,i=a.buttonAriaLabel,s=void 0===i?"Search":i,u=(0,o.useMemo)((function(){return"undefined"!=typeof navigator?/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)?"\u2318":g:null}),[]);return o.createElement("button",h({type:"button",className:"DocSearch DocSearch-Button","aria-label":s},r,{ref:t}),o.createElement("span",{className:"DocSearch-Button-Container"},o.createElement(v.W,null),o.createElement("span",{className:"DocSearch-Button-Placeholder"},c)),o.createElement("span",{className:"DocSearch-Button-Keys"},null!==u&&o.createElement(o.Fragment,null,o.createElement("span",{className:"DocSearch-Button-Key"},u===g?o.createElement(f,null):u),o.createElement("span",{className:"DocSearch-Button-Key"},"K"))))})),E=n(76889),k=n(35013);function w(){var e=function(){var e=(0,c.Z)().i18n,t=(0,E._r)(),n=(0,E.WS)(),a=(0,k.Oh)(),r=[k.HX].concat(Object.keys(t).map((function(e){var r,o,l=(null==n||null==(r=n.activePlugin)?void 0:r.pluginId)===e?n.activeVersion:void 0,c=a[e],i=t[e].versions.find((function(e){return e.isLast})),s=null!=(o=null!=l?l:c)?o:i;return(0,k.os)(e,s.name)})));return{locale:e.currentLocale,tags:r}}();return["language:"+e.locale,e.tags.map((function(e){return"docusaurus_tag:"+e}))]}var Z=n(11787);const y="searchBox_2oeJ";var C=["contextualSearch"],N=null;function _(e){var t=e.hit,n=e.children;return o.createElement(u.Z,{to:t.url},n)}function S(e){var t=e.state,n=e.onClose,a=(0,d.Z)().generateSearchPageLink;return o.createElement(u.Z,{to:a(t.query),onClick:n},"See all ",t.context.nbHits," results")}function I(e){var t,u,d=e.contextualSearch,f=(0,r.Z)(e,C),v=(0,c.Z)().siteMetadata,h=w(),b=null!=(t=null==(u=f.searchParameters)?void 0:u.facetFilters)?t:[],g=d?[].concat(h,b):b,E=Object.assign({},f.searchParameters,{facetFilters:g}),k=(0,s.C)().withBaseUrl,I=(0,i.k6)(),L=(0,o.useRef)(null),D=(0,o.useRef)(null),B=(0,o.useState)(!1),T=B[0],M=B[1],P=(0,o.useState)(null),A=P[0],x=P[1],R=(0,o.useCallback)((function(){return N?Promise.resolve():Promise.all([n.e(610).then(n.bind(n,95610)),Promise.all([n.e(532),n.e(127)]).then(n.bind(n,89127)),Promise.all([n.e(532),n.e(375)]).then(n.bind(n,43729))]).then((function(e){var t=e[0].DocSearchModal;N=t}))}),[]),O=(0,o.useCallback)((function(){R().then((function(){L.current=document.createElement("div"),document.body.insertBefore(L.current,document.body.firstChild),M(!0)}))}),[R,M]),U=(0,o.useCallback)((function(){M(!1),L.current.remove()}),[M]),V=(0,o.useCallback)((function(e){R().then((function(){M(!0),x(e.key)}))}),[R,M,x]),z=(0,o.useRef)({navigate:function(e){var t=e.itemUrl;I.push(t)}}).current,W=(0,o.useRef)((function(e){return e.map((function(e){var t=document.createElement("a");return t.href=e.url,Object.assign({},e,{url:k(""+t.pathname+t.hash)})}))})).current,j=(0,o.useMemo)((function(){return function(e){return o.createElement(S,(0,a.Z)({},e,{onClose:U}))}}),[U]),H=(0,o.useCallback)((function(e){return e.addAlgoliaAgent("docusaurus",v.docusaurusVersion),e}),[v.docusaurusVersion]);!function(e){var t=e.isOpen,n=e.onOpen,a=e.onClose,r=e.onInput,l=e.searchButtonRef;o.useEffect((function(){function e(e){(27===e.keyCode&&t||"k"===e.key&&(e.metaKey||e.ctrlKey)||!function(e){var t=e.target,n=t.tagName;return t.isContentEditable||"INPUT"===n||"SELECT"===n||"TEXTAREA"===n}(e)&&"/"===e.key&&!t)&&(e.preventDefault(),t?a():document.body.classList.contains("DocSearch--active")||document.body.classList.contains("DocSearch--active")||n()),l&&l.current===document.activeElement&&r&&/[a-zA-Z0-9]/.test(String.fromCharCode(e.keyCode))&&r(e)}return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t,n,a,r,l])}({isOpen:T,onOpen:O,onClose:U,onInput:V,searchButtonRef:D});var F=(0,Z.I)({id:"theme.SearchBar.label",message:"Search",description:"The ARIA label and placeholder for search button"});return o.createElement(o.Fragment,null,o.createElement(m.Z,null,o.createElement("link",{rel:"preconnect",href:"https://"+f.appId+"-dsn.algolia.net",crossOrigin:"anonymous"})),o.createElement("div",{className:y},o.createElement(p,{onTouchStart:R,onFocus:R,onMouseOver:R,onClick:O,ref:D,translations:{buttonText:F,buttonAriaLabel:F}})),T&&(0,l.createPortal)(o.createElement(N,(0,a.Z)({onClose:U,initialScrollY:window.scrollY,initialQuery:A,navigator:z,transformItems:W,hitComponent:_,resultsFooterComponent:j,transformSearchClient:H},f,{searchParameters:E})),L.current))}const L=function(){var e=(0,c.Z)().siteConfig;return o.createElement(I,e.themeConfig.algolia)}},49033:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(69635),r=n(161),o=n(50353);const l=function(){var e=(0,a.k6)(),t=(0,a.TH)(),n=(0,o.Z)().siteConfig,l=(n=void 0===n?{}:n).baseUrl;return{searchValue:r.Z.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:function(n){var a=new URLSearchParams(t.search);n?a.set("q",n):a.delete("q"),e.replace({search:a.toString()})},generateSearchPageLink:function(e){return l+"search?q="+encodeURIComponent(e)}}}}}]);