/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var s=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;function i(n){if(n==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(n)}function l(){try{if(!Object.assign)return!1;var n=new String("abc");if(n[5]="de",Object.getOwnPropertyNames(n)[0]==="5")return!1;for(var c={},r=0;r<10;r++)c["_"+String.fromCharCode(r)]=r;var a=Object.getOwnPropertyNames(c).map(function(e){return c[e]});if(a.join("")!=="0123456789")return!1;var t={};return"abcdefghijklmnopqrst".split("").forEach(function(e){t[e]=e}),Object.keys(Object.assign({},t)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var p=l()?Object.assign:function(n,c){for(var r,a=i(n),t,e=1;e<arguments.length;e++){r=Object(arguments[e]);for(var f in r)u.call(r,f)&&(a[f]=r[f]);if(s){t=s(r);for(var o=0;o<t.length;o++)b.call(r,t[o])&&(a[t[o]]=r[t[o]])}}return a};export{p as o};
