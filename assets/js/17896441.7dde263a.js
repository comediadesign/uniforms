"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[918],{20245:(e,t,a)=>{a.r(t),a.d(t,{default:()=>$});var n=a(27378),r=a(38944),l=a(98245),i=a(24142),o=a(11787);const s=function(e){var t=e.metadata;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,o.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},n.createElement("div",{className:"pagination-nav__item"},t.previous&&n.createElement(i.Z,{className:"pagination-nav__link",to:t.previous.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(o.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")),n.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&n.createElement(i.Z,{className:"pagination-nav__link",to:t.next.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(o.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")),n.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))};var c=a(50353),d=a(76889),m=a(35013);var u={unreleased:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(o.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(o.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function v(e){var t=u[e.versionMetadata.banner];return n.createElement(t,e)}function p(e){var t=e.versionLabel,a=e.to,r=e.onClick;return n.createElement(o.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(i.Z,{to:a,onClick:r},n.createElement(o.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function h(e){var t,a=e.versionMetadata,l=(0,c.Z)().siteConfig.title,i=(0,d.gA)({failfast:!0}).pluginId,o=(0,m.J)(i).savePreferredVersionName,s=(0,d.Jo)(i),u=s.latestDocSuggestion,h=s.latestVersionSuggestion,E=null!=u?u:(t=h).docs.find((function(e){return e.id===t.mainDocId}));return n.createElement("div",{className:(0,r.Z)(m.kM.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(v,{siteTitle:l,versionMetadata:a})),n.createElement("div",{className:"margin-top--md"},n.createElement(p,{versionLabel:h.label,to:E.path,onClick:function(){return o(h.name)}})))}const E=function(e){var t=e.versionMetadata;return t.banner?n.createElement(h,{versionMetadata:t}):n.createElement(n.Fragment,null)};var f=a(71956);function g(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt;return n.createElement(o.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function b(e){var t=e.lastUpdatedBy;return n.createElement(o.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function _(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt,r=e.lastUpdatedBy;return n.createElement("span",{className:m.kM.common.lastUpdated},n.createElement(o.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(g,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:r?n.createElement(b,{lastUpdatedBy:r}):""}},"Last updated{atDate}{byUser}"),!1)}var k=a(25773),N=a(30808);const Z="iconEdit_1CBY";var U=["className"];const L=function(e){var t=e.className,a=(0,N.Z)(e,U);return n.createElement("svg",(0,k.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,r.Z)(Z,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function w(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:m.kM.common.editThisPage},n.createElement(L,null),n.createElement(o.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var y=a(96839);const T="tags_1YZR",C="tag_3GNh";function A(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(o.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,r.Z)(T,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:C},n.createElement(y.Z,{name:t,permalink:a}))}))))}const M="lastUpdated_S150";function B(e){return n.createElement("div",{className:(0,r.Z)(m.kM.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(A,e)))}function S(e){var t=e.editUrl,a=e.lastUpdatedAt,l=e.lastUpdatedBy,i=e.formattedLastUpdatedAt;return n.createElement("div",{className:(0,r.Z)(m.kM.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(w,{editUrl:t})),n.createElement("div",{className:(0,r.Z)("col",M)},(a||l)&&n.createElement(_,{lastUpdatedAt:a,formattedLastUpdatedAt:i,lastUpdatedBy:l})))}function O(e){var t=e.content.metadata,a=t.editUrl,l=t.lastUpdatedAt,i=t.formattedLastUpdatedAt,o=t.lastUpdatedBy,s=t.tags,c=s.length>0,d=!!(a||l||o);return c||d?n.createElement("footer",{className:(0,r.Z)(m.kM.docs.docFooter,"docusaurus-mt-lg")},c&&n.createElement(B,{tags:s}),d&&n.createElement(S,{editUrl:a,lastUpdatedAt:l,lastUpdatedBy:o,formattedLastUpdatedAt:i})):n.createElement(n.Fragment,null)}function V(e){var t=e.getBoundingClientRect();return t.top===t.bottom?V(e.parentNode):t}function x(e){var t,a=e.anchorTopOffset,n=Array.from(document.querySelectorAll(".anchor.anchor__h2, .anchor.anchor__h3")),r=n.find((function(e){return V(e).top>=a}));return r?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(V(r))?r:null!=(t=n[n.indexOf(r)-1])?t:null:n[n.length-1]}function D(){var e=(0,n.useRef)(0),t=(0,m.LU)().navbar.hideOnScroll;return(0,n.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}const I=function(e){var t=(0,n.useRef)(void 0),a=D();(0,n.useEffect)((function(){var n=e.linkClassName,r=e.linkActiveClassName;function l(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(n),l=x({anchorTopOffset:a.current}),i=e.find((function(e){return l&&l.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,a){if(a){var n;t.current&&t.current!==e&&(null==(n=t.current)||n.classList.remove(r)),e.classList.add(r),t.current=e}else e.classList.remove(r)}(e,e===i)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),function(){document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,a])},R="tableOfContents_3J2a";var z="table-of-contents__link",F={linkClassName:z,linkActiveClassName:"table-of-contents__link--active"};function q(e){var t=e.toc,a=e.isChild;return t.length?n.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return n.createElement("li",{key:e.id},n.createElement("a",{href:"#"+e.id,className:z,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(q,{isChild:!0,toc:e.children}))}))):null}const H=function(e){var t=e.toc;return I(F),n.createElement("div",{className:(0,r.Z)(R,"thin-scrollbar")},n.createElement(q,{toc:t}))},P="tocCollapsible_Snzk",W="tocCollapsibleButton_27DV",j="tocCollapsibleContent_6RV4",J="tocCollapsibleExpanded__mI0";function Y(e){var t,a=e.toc,l=e.className,i=(0,m.uR)({initialState:!0}),s=i.collapsed,c=i.toggleCollapsed;return n.createElement("div",{className:(0,r.Z)(P,(t={},t[J]=!s,t),l)},n.createElement("button",{type:"button",className:(0,r.Z)("clean-btn",W),onClick:c},n.createElement(o.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),n.createElement(m.zF,{lazy:!0,className:j,collapsed:s},n.createElement(q,{toc:a})))}var G=a(52332);const K="docItemContainer_3nUq",Q="docItemCol_1o9i",X="tocMobile_1BQl";function $(e){var t,a=e.content,i=e.versionMetadata,o=a.metadata,c=a.frontMatter,d=c.image,u=c.keywords,v=c.hide_title,p=c.hide_table_of_contents,h=o.description,g=o.title,b=!v&&void 0===a.contentTitle,_=(0,l.Z)(),k=!p&&a.toc&&a.toc.length>0,N=k&&("desktop"===_||"ssr"===_);return n.createElement(n.Fragment,null,n.createElement(f.Z,{title:g,description:h,keywords:u,image:d}),n.createElement("div",{className:"row"},n.createElement("div",{className:(0,r.Z)("col",(t={},t[Q]=!p,t))},n.createElement(E,{versionMetadata:i}),n.createElement("div",{className:K},n.createElement("article",null,i.badge&&n.createElement("span",{className:(0,r.Z)(m.kM.docs.docVersionBadge,"badge badge--secondary")},"Version: ",i.label),k&&n.createElement(Y,{toc:a.toc,className:(0,r.Z)(m.kM.docs.docTocMobile,X)}),n.createElement("div",{className:(0,r.Z)(m.kM.docs.docMarkdown,"markdown")},b&&n.createElement(G.N,null,g),n.createElement(a,null)),n.createElement(O,e)),n.createElement(s,{metadata:o}))),N&&n.createElement("div",{className:"col col--3"},n.createElement(H,{toc:a.toc,className:m.kM.docs.docTocDesktop}))))}},52332:(e,t,a)=>{a.d(t,{N:()=>u,Z:()=>v});var n=a(30808),r=a(25773),l=a(27378),i=a(38944),o=a(11787),s=a(35013);const c="anchorWithStickyNavbar_23Bc",d="anchorWithHideOnScrollNavbar_3Dj-";var m=["id"],u=function(e){var t=Object.assign({},e);return l.createElement("header",null,l.createElement("h1",(0,r.Z)({},t,{id:void 0}),t.children))};const v=function(e){return"h1"===e?u:(t=e,function(e){var a,r=e.id,u=(0,n.Z)(e,m),v=(0,s.LU)().navbar.hideOnScroll;return r?l.createElement(t,u,l.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,i.Z)("anchor","anchor__"+t,(a={},a[d]=v,a[c]=!v,a)),id:r}),u.children,l.createElement("a",{className:"hash-link",href:"#"+r,title:(0,o.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):l.createElement(t,u)});var t}},71956:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(27378),r=a(55361),l=a(35013),i=a(98948);function o(e){var t=e.title,a=e.description,o=e.keywords,s=e.image,c=e.children,d=(0,l.pe)(t),m=(0,i.C)().withBaseUrl,u=s?m(s,{absolute:!0}):void 0;return n.createElement(r.Z,null,t&&n.createElement("title",null,d),t&&n.createElement("meta",{property:"og:title",content:d}),a&&n.createElement("meta",{name:"description",content:a}),a&&n.createElement("meta",{property:"og:description",content:a}),o&&n.createElement("meta",{name:"keywords",content:Array.isArray(o)?o.join(","):o}),u&&n.createElement("meta",{property:"og:image",content:u}),u&&n.createElement("meta",{name:"twitter:image",content:u}),c)}},96839:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(27378),r=a(38944),l=a(24142);const i="tag__u1m",o="tagRegular_Kusr",s="tagWithCount_2eub";const c=function(e){var t,a=e.permalink,c=e.name,d=e.count;return n.createElement(l.Z,{href:a,className:(0,r.Z)(i,(t={},t[o]=!d,t[s]=d,t))},c,d&&n.createElement("span",null,d))}},98245:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(27378),r=a(161),l="desktop",i="mobile",o="ssr";function s(){return r.Z.canUseDOM?window.innerWidth>996?l:i:o}const c=function(){var e=(0,n.useState)((function(){return s()})),t=e[0],a=e[1];return(0,n.useEffect)((function(){function e(){a(s())}return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e),clearTimeout(undefined)}}),[]),t}}}]);