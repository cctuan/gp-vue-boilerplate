(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{192:function(e,t,r){"use strict";r.r(t);var n=r(136),o=r(291),c={components:{LayoutDefaultContainer:n.a,AtomResponsiveImage:o.a},props:{options:{type:Object,default:function(){return null}},picture:{type:Object,required:!1,default:function(){return{sources:[{media:"default",srcset:"img/sample-a-16-9/412x232.jpg"},{media:"xs",srcset:"img/sample-a-16-9/768x432.jpg"},{media:"sm",srcset:"img/sample-a-16-9/992x558.jpg"},{media:"md",srcset:"img/sample-a-16-9/1200x675.jpg"},{media:"lg",srcset:"img/sample-a-16-9/1600x900.jpg"},{media:"xl",srcset:"img/sample-a-16-9/1920x1080.jpg"}]}}}}},l=(r(342),r(13)),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("layout-default-container",e._b({staticClass:"organism-picture",scopedSlots:e._u([{key:"container",fn:function(){return[r("atom-responsive-image",e._b({},"atom-responsive-image",e.picture,!1))]},proxy:!0}])},"layout-default-container",e.options,!1))}),[],!1,null,null,null);t.default=component.exports},276:function(e,t,r){"use strict";(function(e){r(64),r(19),r(8),r(65),r(186),r(283);var n=r(286),o={jpg:"image/jpeg",jpeg:"image/jpeg",png:"image/png",webp:"image/webp"};t.a={props:{loading:{type:String,required:!1,default:function(){return"auto"}},sourceClientOnly:{type:Boolean,required:!1,default:function(){return!0}},placeholder:{type:String,required:!1,default:function(){return"data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="}},sources:{type:[Array,Object],default:function(){return[{media:"default",srcset:"img/sample-a-16-9/412x232.jpg"},{media:"xs",srcset:"img/sample-a-16-9/768x432.jpg"},{media:"sm",srcset:"img/sample-a-16-9/992x558.jpg"},{media:"md",srcset:"img/sample-a-16-9/1200x675.jpg"},{media:"lg",srcset:"img/sample-a-16-9/1600x900.jpg"},{media:"xl",srcset:"img/sample-a-16-9/1920x1080.jpg"}]}},width:{type:Number,required:!1,default:function(){return null}},height:{type:Number,required:!1,default:function(){return null}},title:{type:String,required:!1,default:function(){return"image title"}},alt:{type:String,required:!1,default:function(){return"image description"}}},computed:{sorted:function(){return function(e,pattern){return e.sort((function(a,b){return pattern.indexOf(a.media)===pattern.indexOf(b.media)?0:pattern.indexOf(a.media)>pattern.indexOf(b.media)?1:-1}))}([].concat(this.sources),Array.from(n.a.keys())).reverse()},items:function(){var e=this;return this.sorted.map((function(source){var t;return(source=Object.assign({},source)).type="",e.sourceClientOnly,source.type=o[(t=source.srcset.replace(/.*\.(\w{3,4}).*$/,"$1"),/\w+$/.exec(t)[0])],source.media=n.a.get(source.media),source}))}},methods:{onLoad:function(){"objectFitImages"in e&&e.objectFitImages(this.$el.querySelector("img"))}}}}).call(this,r(25))},277:function(e,t,r){var content=r(289);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(63).default)("75eff58b",content,!0,{sourceMap:!1})},283:function(e,t,r){"use strict";var n=r(10),o=r(43),c=r(51),l=r(139),m=r(108),f=r(18),d=r(78).f,x=r(110).f,h=r(20).f,A=r(284).trim,w=n.Number,y=w,v=w.prototype,j="Number"==c(r(109)(v)),N="trim"in String.prototype,I=function(e){var t=m(e,!1);if("string"==typeof t&&t.length>2){var r,n,o,c=(t=N?t.trim():A(t,3)).charCodeAt(0);if(43===c||45===c){if(88===(r=t.charCodeAt(2))||120===r)return NaN}else if(48===c){switch(t.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+t}for(var code,l=t.slice(2),i=0,f=l.length;i<f;i++)if((code=l.charCodeAt(i))<48||code>o)return NaN;return parseInt(l,n)}}return+t};if(!w(" 0o1")||!w("0b1")||w("+0x1")){w=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof w&&(j?f((function(){v.valueOf.call(r)})):"Number"!=c(r))?l(new y(I(t)),r,w):I(t)};for(var E,O=r(14)?d(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),_=0;O.length>_;_++)o(y,E=O[_])&&!o(w,E)&&h(w,E,x(y,E));w.prototype=v,v.constructor=w,r(21)(n,"Number",w)}},284:function(e,t,r){var n=r(11),o=r(42),c=r(18),l=r(285),m="["+l+"]",f=RegExp("^"+m+m+"*"),d=RegExp(m+m+"*$"),x=function(e,t,r){var o={},m=c((function(){return!!l[e]()||"​"!="​"[e]()})),f=o[e]=m?t(h):l[e];r&&(o[r]=f),n(n.P+n.F*m,"String",o)},h=x.trim=function(e,t){return e=String(o(e)),1&t&&(e=e.replace(f,"")),2&t&&(e=e.replace(d,"")),e};e.exports=x},285:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},286:function(e,t,r){"use strict";r(64),r(188),r(19),r(8),r(65),r(187);var n,o=r(287),c=new Map(Object.entries(o));t.a=(n=new Map,c.forEach((function(e,t){n.set(t.replace("--",""),e)})),n)},287:function(e){e.exports=JSON.parse('{"--default":"all","--default-max":"(max-width: 575px)","--xs":"(min-width: 576px)","--xs-max":"(max-width: 767px)","--sm":"(min-width: 768px)","--sm-max":"(max-width: 991px)","--md":"(min-width: 992px)","--md-max":"(max-width: 1199px)","--lg":"(min-width: 1200px)","--lg-max":"(max-width: 1599px)","--xl":"(min-width: 1600px)","--xl-max":"(max-width: 1919px)","--xxl":"(min-width: 1920px)"}')},288:function(e,t,r){"use strict";var n=r(277);r.n(n).a},289:function(e,t,r){(t=r(62)(!1)).push([e.i,"picture,picture img{display:block}picture img{width:100%;max-width:100%}",""]),e.exports=t},290:function(e,t){},291:function(e,t,r){"use strict";var n=r(276).a,o=(r(288),r(13)),c=r(290),l=r.n(c),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("picture",{staticClass:"atom-responsive-image"},[e._l(e.items,(function(source,t){return r("source",e._b({key:t},"source",source,!1))})),e._v(" "),r("img",{attrs:{src:e.placeholder,alt:e.alt,title:e.title,loading:e.loading,width:e.width,height:e.height},on:{load:e.onLoad}})],2)}),[],!1,null,null,null);"function"==typeof l.a&&l()(component);t.a=component.exports},326:function(e,t,r){var content=r(343);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(63).default)("bad5e8a8",content,!0,{sourceMap:!1})},342:function(e,t,r){"use strict";var n=r(326);r.n(n).a},343:function(e,t,r){(t=r(62)(!1)).push([e.i,'.organism-picture{position:relative;width:100%}.organism-picture:before{display:block;width:100%;padding-top:56.25%;content:""}.organism-picture img{position:absolute;top:0;left:0;width:100%}',""]),e.exports=t}}]);