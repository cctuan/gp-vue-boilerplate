(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{147:function(e,t,n){var content=n(160);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(31).default)("703c3516",content,!0,{sourceMap:!1})},148:function(e,t,n){var content=n(163);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(31).default)("6eccebc0",content,!0,{sourceMap:!1})},149:function(e,t,n){var content=n(166);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(31).default)("e31edbf0",content,!0,{sourceMap:!1})},158:function(e,t,n){"use strict";var l={props:{content:{type:String,required:!1,default:"<p>Example Text</p>"}}},o=(n(162),n(7)),r=n(164),d=n.n(r),component=Object(o.a)(l,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"atom-rich-text"},[this.$slots.default?this._e():t("div",{domProps:{innerHTML:this._s(this.content)}}),this._v(" "),this._t("default")],2)}),[],!1,null,"2abd1e12",null);"function"==typeof d.a&&d()(component);t.a=component.exports},159:function(e,t,n){"use strict";var l=n(147);n.n(l).a},160:function(e,t,n){(t=n(30)(!1)).push([e.i,".atom-headline[data-v-6aa65de1]{font-style:normal;font-weight:400;line-height:1.5}.atom-headline>*[data-v-6aa65de1]{display:block}.atom-headline.headline--h2 .overline[data-v-6aa65de1],.atom-headline.headline--h2 .subline[data-v-6aa65de1]{font-size:3.2vw;font-weight:400}@media (min-width:576px){.atom-headline.headline--h2 .overline[data-v-6aa65de1],.atom-headline.headline--h2 .subline[data-v-6aa65de1]{font-size:12px}}.font_raleway .js--visible .atom-headline.headline--h2 .overline[data-v-6aa65de1],.font_raleway .js--visible .atom-headline.headline--h2 .subline[data-v-6aa65de1]{font-family:Raleway,sans-serif}.font_raleway_500_normal .js--visible .atom-headline.headline--h2 .subline[data-v-6aa65de1]{font-weight:500}.atom-headline.headline--h2 .headline[data-v-6aa65de1]{font-size:9.6vw}@media (min-width:576px){.atom-headline.headline--h2 .headline[data-v-6aa65de1]{font-size:36px}}.font_amatic-sc .js--visible .atom-headline.headline--h2 .headline[data-v-6aa65de1]{font-family:Amatic SC,serif}.font_amatic-sc_700_normal .js--visible .atom-headline.headline--h2 .headline[data-v-6aa65de1]{font-weight:700}",""]),e.exports=t},161:function(e,t){},162:function(e,t,n){"use strict";var l=n(148);n.n(l).a},163:function(e,t,n){(t=n(30)(!1)).push([e.i,".atom-rich-text b[data-v-2abd1e12],.atom-rich-text em[data-v-2abd1e12],.atom-rich-text i[data-v-2abd1e12],.atom-rich-text strong[data-v-2abd1e12]{font-style:normal;font-weight:400}.atom-rich-text[data-v-2abd1e12]{font-family:sans-serif;font-size:4.26667vw;font-weight:400}@media (min-width:576px){.atom-rich-text[data-v-2abd1e12]{font-size:16px}}.font_raleway .js--visible .atom-rich-text[data-v-2abd1e12]{font-family:Raleway,sans-serif}",""]),e.exports=t},164:function(e,t){},165:function(e,t,n){"use strict";var l=n(149);n.n(l).a},166:function(e,t,n){(t=n(30)(!1)).push([e.i,"",""]),e.exports=t},167:function(e,t,n){var content=n(190);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(31).default)("02eba4d8",content,!0,{sourceMap:!1})},186:function(e,t,n){"use strict";var l={props:{tag:{type:String,required:!1,default:()=>"h1"},overline:{type:String,required:!1,default:()=>"Lorem Overline"},headline:{type:String,required:!1,default:()=>"Lorem Headline"},subline:{type:String,required:!1,default:()=>"Lorem Subline"}},computed:{styleClasses(){var e={};return e["headline--".concat(this.tag)]=!0,e}}},o=(n(159),n(7)),r=n(161),d=n.n(r),component=Object(o.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n(e.tag,{tag:"component",staticClass:"atom-headline",class:e.styleClasses},[e._t("default",[e.$slots.overline||e.overline?n("span",{staticClass:"overline"},[e._t("overline",[e._v("\n        "+e._s(e.overline)+"\n      ")])],2):e._e(),e._v(" "),e.$slots.headline||e.headline?n("span",{staticClass:"headline"},[e._t("headline",[e._v("\n        "+e._s(e.headline)+"\n      ")])],2):e._e(),e._v(" "),e.$slots.subline||e.subline?n("span",{staticClass:"subline"},[e._t("subline",[e._v("\n        "+e._s(e.subline)+"\n      ")])],2):e._e()])],2)}),[],!1,null,"6aa65de1",null);"function"==typeof d.a&&d()(component);var c={components:{AtomHeadline:component.exports,AtomRichText:n(158).a},props:{headline:{type:Object,default:()=>({overline:"Article Overline",headline:"Article Headline",subline:"Article Subline"})},content:{type:String,default:()=>"<p>Example Text</p>"}}},h=(n(165),Object(o.a)(c,(function(){var e=this.$createElement,t=this._self._c||e;return t("article",{staticClass:"molecule-article"},[this.headline?t("header",[t("atom-headline",this._b({attrs:{tag:"h2"}},"atom-headline",this.headline,!1))],1):this._e(),this._v(" "),this._t("default",[t("atom-rich-text",{attrs:{content:this.content}})])],2)}),[],!1,null,null,null));t.a=h.exports},189:function(e,t,n){"use strict";var l=n(167);n.n(l).a},190:function(e,t,n){(t=n(30)(!1)).push([e.i,"",""]),e.exports=t},91:function(e,t,n){"use strict";n.r(t);var l=n(64),o=n(186),r={components:{LayoutDefaultContainer:l.a,MoleculeContentArticle:o.a},props:{options:{type:Object,default:()=>null},article:{type:Object,default:()=>({headline:{overline:"Text Overline",headline:"Text Headline",subline:"Text Subline"},content:"<p>Example Text</p>"})}}},d=(n(189),n(7)),component=Object(d.a)(r,(function(){var e=this.$createElement,t=this._self._c||e;return t("layout-default-container",this._b({staticClass:"organism-text"},"layout-default-container",this.options,!1),[t("molecule-content-article",this._b({},"molecule-content-article",this.article,!1))],1)}),[],!1,null,null,null);t.default=component.exports}}]);