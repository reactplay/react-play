import{g as Uu}from"./index-2d91d905.js";import{l as zu,L as Vu}from"./vendor__L-bbabc4b5.js";import{s as pr}from"./vendor__S-f3323845.js";/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Hu=1e-7,ju=1e-4;class Xu{constructor(t,n){this.backend=t,this.dataMover=n,this.data=new WeakMap,this.dataIdsCount=0}get(t){return this.data.has(t)||this.dataMover.moveData(this.backend,t),this.data.get(t)}set(t,n){this.dataIdsCount++,this.data.set(t,n)}has(t){return this.data.has(t)}delete(t){return this.dataIdsCount--,this.data.delete(t)}numDataIds(){return this.dataIdsCount}}class Fs{refCount(t){return ht("refCount")}incRef(t){return ht("incRef")}timerAvailable(){return!0}time(t){return ht("time")}read(t){return ht("read")}readSync(t){return ht("readSync")}readToGPU(t,n){return ht("readToGPU")}numDataIds(){return ht("numDataIds")}disposeData(t,n){return ht("disposeData")}write(t,n,r){return ht("write")}move(t,n,r,s,o){return ht("move")}memory(){return ht("memory")}floatPrecision(){return ht("floatPrecision")}epsilon(){return this.floatPrecision()===32?Hu:ju}dispose(){return ht("dispose")}}function ht(e){throw new Error(`'${e}' not yet implemented or not found in the registry. This kernel may not be supported by the tfjs backend you have chosen`)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Rs(e){let t=e.length,n=0;for(;t>0;)n=Math.random()*t|0,t--,an(e,t,n)}function Yu(e,t){if(e.length!==t.length)throw new Error(`Array sizes must match to be shuffled together First array length was ${e.length}Second array length was ${t.length}`);let n=e.length,r=0;for(;n>0;)r=Math.random()*n|0,n--,an(e,n,r),an(t,n,r)}function Ne(e,t,n){return Math.max(e,Math.min(t,n))}function Ju(e){return e%2===0?e:e+1}function an(e,t,n){const r=e[t];e[t]=e[n],e[n]=r}function Zu(e){let t=0;for(let n=0;n<e.length;n++)t+=e[n];return t}function Qu(e,t){const n=Math.random();return t*n+(1-n)*e}function th(e,t){let n=0;for(let r=0;r<e.length;r++){const s=Number(e[r])-Number(t[r]);n+=s*s}return n}function p(e,t){if(!e)throw new Error(typeof t=="string"?t:t())}function st(e,t,n=""){p(Lt(e,t),()=>n+` Shapes ${e} and ${t} must match`)}function re(e){p(e!=null,()=>"The input to the tensor constructor must be a non-null value.")}function Jt(e,t=[],n=!1){if(t==null&&(t=[]),Array.isArray(e)||Q(e)&&!n)for(let r=0;r<e.length;++r)Jt(e[r],t,n);else t.push(e);return t}function q(e){if(e.length===0)return 1;let t=e[0];for(let n=1;n<e.length;n++)t*=e[n];return t}function eh(e){return e.length===0}function Lt(e,t){if(e===t)return!0;if(e==null||t==null||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function pe(e){return e%1===0}function nh(e){if(Math.tanh!=null)return Math.tanh(e);if(e===1/0)return 1;if(e===-1/0)return-1;{const t=Math.exp(2*e);return(t-1)/(t+1)}}function rh(e){const t=Math.ceil(Math.sqrt(e));return[t,Math.ceil(e/t)]}function sh(e){const t=new Uint32Array(e);for(let n=0;n<e;++n)t[n]=n;return Rs(t),t}function De(e,t){return t<=e.length?e:e+" ".repeat(t-e.length)}function oh(e,t=s=>0,n,r=setTimeout){return new Promise((s,o)=>{let a=0;const i=()=>{if(e()){s();return}a++;const c=t(a);if(n!=null&&a>=n){o();return}r(i,c)};i()})}function ah(e,t){let n=1,r=-1;for(let o=0;o<e.length;++o)if(e[o]>=0)n*=e[o];else if(e[o]===-1){if(r!==-1)throw Error(`Shapes can only have 1 implicit size. Found -1 at dim ${r} and dim ${o}`);r=o}else if(e[o]<0)throw Error(`Shapes can not be < 0. Found ${e[o]} at dim ${o}`);if(r===-1){if(t>0&&t!==n)throw Error(`Size(${t}) must match the product of shape ${e}`);return e}if(n===0)throw Error(`Cannot infer the missing size in [${e}] when there are 0 elements`);if(t%n!==0)throw Error(`The implicit shape can't be a fractional number. Got ${t} / ${n}`);const s=e.slice();return s[r]=t/n,s}function Ge(e,t){const n=t.length;return e=e==null?t.map((r,s)=>s):[].concat(e),p(e.every(r=>r>=-n&&r<n),()=>`All values in axis param must be in range [-${n}, ${n}) but got axis ${e}`),p(e.every(r=>pe(r)),()=>`All values in axis param must be integers but got axis ${e}`),e.map(r=>r<0?n+r:r)}function Ps(e,t){const n=[],r=[],s=t!=null&&Array.isArray(t)&&t.length===0,o=t==null||s?null:Ge(t,e).sort();let a=0;for(let i=0;i<e.length;++i){if(o!=null){if(o[a]===i&&e[i]!==1)throw new Error(`Can't squeeze axis ${i} since its dim '${e[i]}' is not 1`);(o[a]==null||o[a]>i)&&e[i]===1&&(n.push(e[i]),r.push(i)),o[a]<=i&&a++}e[i]!==1&&(n.push(e[i]),r.push(i))}return{newShape:n,keptDims:r}}function Os(e,t){let n=null;if(e==null||e==="float32")n=new Float32Array(t);else if(e==="int32")n=new Int32Array(t);else if(e==="bool")n=new Uint8Array(t);else throw new Error(`Unknown data type ${e}`);return n}function Ls(e,t){let n=null;if(e==null||e==="float32")n=new Float32Array(t);else if(e==="int32")n=new Int32Array(t);else if(e==="bool")n=new Uint8Array(t);else if(e==="string")n=new Array(t);else throw new Error(`Unknown data type ${e}`);return n}function Ws(e,t){for(let n=0;n<e.length;n++){const r=e[n];if(isNaN(r)||!isFinite(r))throw Error(`A tensor of type ${t} being uploaded contains ${r}.`)}}function Ks(e){return e==="bool"||e==="complex64"||e==="float32"||e==="int32"||e==="string"}function ih(e,t){return!(t==="complex64"||t==="float32"&&e!=="complex64"||t==="int32"&&e!=="float32"&&e!=="complex64"||t==="bool"&&e==="bool")}function Q(e){return e instanceof Float32Array||e instanceof Int32Array||e instanceof Uint8Array||e instanceof Uint8ClampedArray}function Hn(e){if(e==="float32"||e==="int32")return 4;if(e==="complex64")return 8;if(e==="bool")return 1;throw new Error(`Unknown dtype ${e}`)}function Gs(e){if(e==null)return 0;let t=0;return e.forEach(n=>t+=n.length),t}function Mt(e){return typeof e=="string"||e instanceof String}function qs(e){return typeof e=="boolean"}function Us(e){return typeof e=="number"}function wn(e){return Array.isArray(e)?wn(e[0]):e instanceof Float32Array?"float32":e instanceof Int32Array||e instanceof Uint8Array||e instanceof Uint8ClampedArray?"int32":Us(e)?"float32":Mt(e)?"string":qs(e)?"bool":"float32"}function Rt(e){return!!(e&&e.constructor&&e.call&&e.apply)}function cn(e,t){for(let n=t;n<e;++n)if(e%n===0)return n;return e}function Se(e){const t=e.length;if(t<2)return[];const n=new Array(t-1);n[t-2]=e[t-1];for(let r=t-3;r>=0;--r)n[r]=n[r+1]*e[r+1];return n}function zs(e,t,n,r=!1){const s=new Array;if(t.length===1){const o=t[0]*(r?2:1);for(let a=0;a<o;a++)s[a]=n[e+a]}else{const o=t[0],a=t.slice(1),i=a.reduce((c,l)=>c*l)*(r?2:1);for(let c=0;c<o;c++)s[c]=zs(e+c*i,a,n,r)}return s}function le(e,t,n=!1){if(e.length===0)return t[0];const r=e.reduce((s,o)=>s*o)*(n?2:1);if(r===0)return[];if(r!==t.length)throw new Error(`[${e}] does not match the input size ${t.length}${n?" for a complex tensor":""}.`);return zs(0,e,t,n)}function gr(e,t){const n=yn(e,t);for(let r=0;r<n.length;r++)n[r]=1;return n}function yn(e,t){if(t==null||t==="float32"||t==="complex64")return new Float32Array(e);if(t==="int32")return new Int32Array(e);if(t==="bool")return new Uint8Array(e);throw new Error(`Unknown data type ${t}`)}function ch(e,t){const n=e.reduce((r,s)=>r*s,1);if(t==null||t==="float32")return le(e,new Float32Array(n));if(t==="int32")return le(e,new Int32Array(n));if(t==="bool")return le(e,new Uint8Array(n));throw new Error(`Unknown data type ${t}`)}function mr(e){e.forEach(t=>{p(Number.isInteger(t)&&t>=0,()=>`Tensor must have a shape comprised of positive integers but got shape [${e}].`)})}function lh(e,t,n){if(t===0)return 0;if(t===1)return e[0];let r=e[e.length-1];for(let s=0;s<e.length-1;++s)r+=n[s]*e[s];return r}function uh(e,t,n){if(t===0)return[];if(t===1)return[e];const r=new Array(t);for(let s=0;s<r.length-1;++s)r[s]=Math.floor(e/n[s]),e-=r[s]*n[s];return r[r.length-1]=e,r}function br(e){return e&&e.then&&typeof e.then=="function"}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ks="tfjsflags";class Vs{constructor(t){this.global=t,this.flags={},this.flagRegistry={},this.urlFlags={},this.getQueryParams=hh,this.populateURLFlags()}setPlatform(t,n){this.platform!=null&&(M().getBool("IS_TEST")||M().getBool("PROD")||console.warn(`Platform ${this.platformName} has already been set. Overwriting the platform with ${t}.`)),this.platformName=t,this.platform=n}registerFlag(t,n,r){if(this.flagRegistry[t]={evaluationFn:n,setHook:r},this.urlFlags[t]!=null){const s=this.urlFlags[t];M().getBool("IS_TEST")||M().getBool("PROD")||console.warn(`Setting feature override from URL ${t}: ${s}.`),this.set(t,s)}}async getAsync(t){return t in this.flags?this.flags[t]:(this.flags[t]=await this.evaluateFlag(t),this.flags[t])}get(t){if(t in this.flags)return this.flags[t];const n=this.evaluateFlag(t);if(br(n))throw new Error(`Flag ${t} cannot be synchronously evaluated. Please use getAsync() instead.`);return this.flags[t]=n,this.flags[t]}getNumber(t){return this.get(t)}getBool(t){return this.get(t)}getFlags(){return this.flags}get features(){return this.flags}set(t,n){if(this.flagRegistry[t]==null)throw new Error(`Cannot set flag ${t} as it has not been registered.`);this.flags[t]=n,this.flagRegistry[t].setHook!=null&&this.flagRegistry[t].setHook(n)}evaluateFlag(t){if(this.flagRegistry[t]==null)throw new Error(`Cannot evaluate flag '${t}': no evaluation function found.`);return this.flagRegistry[t].evaluationFn()}setFlags(t){this.flags=Object.assign({},t)}reset(){this.flags={},this.urlFlags={},this.populateURLFlags()}populateURLFlags(){if(typeof this.global>"u"||typeof this.global.location>"u"||typeof this.global.location.search>"u")return;const t=this.getQueryParams(this.global.location.search);ks in t&&t[ks].split(",").forEach(r=>{const[s,o]=r.split(":");this.urlFlags[s]=dh(s,o)})}}function hh(e){const t={};return e.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,(n,...r)=>(fh(t,r[0],r[1]),r.join("="))),t}function fh(e,t,n){e[decodeURIComponent(t)]=decodeURIComponent(n||"")}function dh(e,t){if(t=t.toLowerCase(),t==="true"||t==="false")return t==="true";if(`${+t}`===t)return+t;throw new Error(`Could not parse value flag value ${t} for flag ${e}.`)}function M(){return wr}let wr=null;function ph(e){wr=e}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let Kn;function Hs(){if(Kn==null){let e;if(typeof window<"u")e=window;else if(typeof global<"u")e=global;else if(typeof process<"u")e=process;else if(typeof self<"u")e=self;else throw new Error("Could not find a global object");Kn=e}return Kn}function gh(){const e=Hs();return e._tfGlobals==null&&(e._tfGlobals=new Map),e._tfGlobals}function yr(e,t){const n=gh();if(n.has(e))return n.get(e);{const r=t();return n.set(e,r),n.get(e)}}const js="Abs",Xs="Acos",Ys="Acosh",$r="Add",Js="AddN",Zs="All",Qs="Any",to="ArgMax",eo="ArgMin",no="Asin",ro="Asinh",so="Atan",oo="Atanh",ao="Atan2",io="AvgPool",mh="AvgPoolGrad",co="AvgPool3D",bh="AvgPool3DGrad",lo="BatchMatMul",uo="BatchToSpaceND",ho="Bincount",wh="BroadcastTo",fo="BroadcastArgs",kr="Cast",po="Ceil",go="ClipByValue",mo="Complex",bo="ComplexAbs",wo="Concat",yo="Conv2D",$o="Conv2DBackpropFilter",ko="Conv2DBackpropInput",Eo="Conv3D",yh="Conv3DBackpropFilterV2",So="Conv3DBackpropInputV2",xo="Cos",vo="Cosh",Io="Cumprod",To="Cumsum",_o="CropAndResize",Ao="DenseBincount",Do="DepthToSpace",Mo="DepthwiseConv2dNative",No="DepthwiseConv2dNativeBackpropFilter",Bo="DepthwiseConv2dNativeBackpropInput",Co="Diag",Fo="Dilation2D",$h="Dilation2DBackpropInput",kh="Dilation2DBackpropFilter",Ro="RealDiv",Po="Einsum",Oo="Elu",Eh="EluGrad",Lo="Erf",Wo="Equal",Ko="Exp",Go="ExpandDims",qo="Expm1",Uo="FFT",zo="Fill",Vo="FlipLeftRight",Ho="Floor",jo="FloorDiv",Xo="FusedBatchNorm",Yo="GatherV2",Jo="GatherNd",Zo="Greater",Qo="GreaterEqual",Er="Identity",ta="IFFT",ea="Imag",na="IsFinite",ra="IsInf",sa="IsNan",oa="LeakyRelu",aa="Less",ia="LessEqual",ca="LinSpace",la="Log",ua="Log1p",ha="LogicalAnd",fa="LogicalNot",da="LogicalOr",Sh="LogicalXor",xh="LogSoftmax",vh="LowerBound",pa="LRN",Ih="LRNGrad",ga="Max",ma="Maximum",ba="MaxPool",Th="MaxPoolGrad",wa="MaxPool3D",_h="MaxPool3DGrad",ya="MaxPoolWithArgmax",$a="Mean",ka="Min",Ea="Minimum",Sa="MirrorPad",xa="Mod",va="Multinomial",Ia="Multiply",Ta="Neg",_a="NotEqual",Aa="NonMaxSuppressionV3",Da="NonMaxSuppressionV4",Ma="NonMaxSuppressionV5",Na="OnesLike",Ba="OneHot",Ca="Pack",Fa="PadV2",Ah="Pool",Ra="Pow",Pa="Prelu",Oa="Prod",La="RaggedGather",Wa="RaggedTensorToTensor",Ka="Range",Ga="Real",qa="Reciprocal",Ua="Relu",za="Reshape",Va="ResizeNearestNeighbor",Dh="ResizeNearestNeighborGrad",Ha="ResizeBilinear",Mh="ResizeBilinearGrad",ja="Relu6",Xa="Reverse",Ya="Round",Ja="Rsqrt",Za="ScatterNd",Qa="SearchSorted",ti="Select",ei="Selu",ni="Slice",ri="Sin",si="Sinh",oi="Sign",ai="Sigmoid",ii="Softplus",ci="Sqrt",li="Sum",ui="SpaceToBatchND",hi="SplitV",fi="Softmax",di="SparseFillEmptyRows",pi="SparseReshape",gi="SparseSegmentMean",mi="SparseSegmentSum",bi="SparseToDense",wi="SquaredDifference",Nh="Square",yi="StridedSlice",$i="StringNGrams",ki="StringSplit",Ei="StringToHashBucketFast",Si="Sub",xi="Tan",vi="Tanh",Sr="Tile",Ii="TopK",Ti="Transform",rn="Transpose",_i="Unique",Ai="Unpack",Di="UnsortedSegmentSum",Bh="UpperBound",Mi="ZerosLike",Ni="Step",jn="FromPixels",Bi="RotateWithOffset",Xn="_FusedMatMul",Yn="FusedConv2D",Jn="FusedDepthwiseConv2D";/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function At(...e){M().getBool("IS_TEST")||M().getBool("PROD")||console.warn(...e)}function Ch(...e){M().getBool("IS_TEST")||M().getBool("PROD")||console.log(...e)}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ge=yr("kernelRegistry",()=>new Map),Be=yr("gradRegistry",()=>new Map);function ln(e,t){const n=xr(e,t);return ge.get(n)}function Zn(e){return Be.get(e)}function un(e){const t=ge.entries(),n=[];for(;;){const{done:r,value:s}=t.next();if(r)break;const[o,a]=s,[i]=o.split("_");i===e&&n.push(a)}return n}function Ci(e){const{kernelName:t,backendName:n}=e,r=xr(t,n);ge.has(r)&&At(`The kernel '${t}' for backend '${n}' is already registered`),ge.set(r,e)}function Fh(e){const{kernelName:t}=e;Be.has(t)&&M().getBool("DEBUG")&&At(`Overriding the gradient for '${t}'`),Be.set(t,e)}function Rh(e,t){const n=xr(e,t);if(!ge.has(n))throw new Error(`The kernel '${e}' for backend '${t}' is not registered`);ge.delete(n)}function Ph(e){if(!Be.has(e))throw new Error(`The gradient '${e}' for backend is not registered`);Be.delete(e)}function Oh(e,t){un(e).forEach(r=>{const s=Object.assign({},r,{backendName:t});Ci(s)})}function xr(e,t){return`${t}_${e}`}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const zt=zu||Vu;function qe(e){return zt.fromString(e,!0,16)}const Fi=qe("c3a5c85c97cb3127"),Ut=qe("b492b66fbe98f273"),nt=qe("9ae16a3b2f90404f");function Qn(e){return e.xor(e.shru(47))}function Ri(e,t,n){const r=e.slice(t,t+n);return zt.fromBytes(Array.from(r),!0,!0)}function L(e,t){return Ri(e,t,8)}function Es(e,t){return Ri(e,t,4)}function J(e,t){return t===0?e:e.shru(t).or(e.shl(64-t))}function Ct(e,t,n=qe("9ddfea08eb382d69")){let r=e.xor(t).mul(n);r=r.xor(r.shru(47));let s=t.xor(r).mul(n);return s=s.xor(s.shru(47)),s=s.mul(n),s}function Lh(e,t,n,r,s,o){s=s.add(e),o=J(o.add(s).add(r),21);const a=s;return s=s.add(t),s=s.add(n),o=o.add(J(s,44)),[s.add(r),o.add(a)]}function en(e,t,n,r){return Lh(L(e,t),L(e,t+8),L(e,t+16),L(e,t+24),n,r)}function Wh(e,t=e.length){if(t>=8){const n=nt.add(t*2),r=L(e,0).add(nt),s=L(e,t-8),o=J(s,37).mul(n).add(r),a=J(r,25).add(s).mul(n);return Ct(o,a,n)}if(t>=4){const n=nt.add(t*2),r=Es(e,0);return Ct(r.shl(3).add(t),Es(e,t-4),n)}if(t>0){const n=e[0],r=e[t>>1],s=e[t-1],o=n+(r<<8),a=t+(s<<2);return Qn(nt.mul(o).xor(Fi.mul(a))).mul(nt)}return nt}function Kh(e,t=e.length){const n=nt.add(t*2),r=L(e,0).mul(Ut),s=L(e,8),o=L(e,t-8).mul(n),a=L(e,t-16).mul(nt);return Ct(J(r.add(s),43).add(J(o,30)).add(a),r.add(J(s.add(nt),18)).add(o),n)}function Gh(e,t=e.length){const n=nt.add(t*2),r=L(e,0).mul(nt),s=L(e,8),o=L(e,t-8).mul(n),a=L(e,t-16).mul(nt),i=J(r.add(s),43).add(J(o,30)).add(a),c=Ct(i,r.add(J(s.add(nt),18)).add(o),n),l=L(e,16).mul(n),h=L(e,24),u=i.add(L(e,t-32)).mul(n),d=c.add(L(e,t-24)).mul(n);return Ct(J(l.add(h),43).add(J(u,30)).add(d),l.add(J(h.add(r),18)).add(u),n)}function qh(e,t=e.length){const n=zt.fromNumber(81,!0);if(t<=32)return t<=16?Wh(e,t):Kh(e,t);if(t<=64)return Gh(e,t);let r=n,s=n.mul(Ut).add(113),o=Qn(s.mul(nt).add(113)).mul(nt),a=[zt.UZERO,zt.UZERO],i=[zt.UZERO,zt.UZERO];r=r.mul(nt).add(L(e,0));let c=0;const l=(t-1>>6)*64,h=l+(t-1&63)-63;do r=J(r.add(s).add(a[0]).add(L(e,c+8)),37).mul(Ut),s=J(s.add(a[1]).add(L(e,c+48)),42).mul(Ut),r=r.xor(i[1]),s=s.add(a[0]).add(L(e,c+40)),o=J(o.add(i[0]),33).mul(Ut),a=en(e,c,a[1].mul(Ut),r.add(i[0])),i=en(e,c+32,o.add(i[1]),s.add(L(e,c+16))),[o,r]=[r,o],c+=64;while(c!==l);const u=Ut.add(o.and(255).shl(1));return c=h,i[0]=i[0].add(t-1&63),a[0]=a[0].add(i[0]),i[0]=i[0].add(a[0]),r=J(r.add(s).add(a[0]).add(L(e,c+8)),37).mul(u),s=J(s.add(a[1]).add(L(e,c+48)),42).mul(u),r=r.xor(i[1].mul(9)),s=s.add(a[0].mul(9).add(L(e,c+40))),o=J(o.add(i[0]),33).mul(u),a=en(e,c,a[1].mul(u),r.add(i[0])),i=en(e,c+32,o.add(i[1]),s.add(L(e,c+16))),[o,r]=[r,o],Ct(Ct(a[0],i[0],u).add(Qn(s).mul(Fi)).add(o),Ct(a[1],i[1],u).add(r),u)}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Uh(e,t){return t==="string"?Ue(e):$n([e],t)}function zh(e,t){return e instanceof Float32Array&&t==="float32"||e instanceof Int32Array&&t==="int32"||e instanceof Uint8Array&&t==="bool"}function $n(e,t){if(t==="string")throw new Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(e)&&(e=Jt(e)),M().getBool("DEBUG")&&Ws(e,t),zh(e,t))return e;if(t==null||t==="float32"||t==="complex64")return new Float32Array(e);if(t==="int32")return new Int32Array(e);if(t==="bool"){const n=new Uint8Array(e.length);for(let r=0;r<n.length;++r)Math.round(e[r])!==0&&(n[r]=1);return n}else throw new Error(`Unknown data type ${t}`)}function Ce(){return M().platform.now()}function Vh(e,t){return M().platform.fetch(e,t)}function Ue(e,t="utf-8"){return t=t||"utf-8",M().platform.encode(e,t)}function hn(e,t="utf-8"){return t=t||"utf-8",M().platform.decode(e,t)}const Hh=Object.freeze(Object.defineProperty({__proto__:null,arraysEqual:Lt,assert:p,assertNonNegativeIntegerDimensions:mr,assertNonNull:re,assertShapesMatch:st,bytesFromStringArray:Gs,bytesPerElement:Hn,checkConversionForErrors:Ws,clamp:Ne,computeStrides:Se,createScalarValue:Uh,createShuffledIndices:sh,decodeString:hn,distSquared:th,encodeString:Ue,fetch:Vh,fingerPrint64:qh,flatten:Jt,getArrayFromDType:Ls,getTypedArrayFromDType:Os,hasEncodingLoss:ih,hexToLong:qe,indexToLoc:uh,inferDtype:wn,inferFromImplicitShape:ah,isBoolean:qs,isFunction:Rt,isInt:pe,isNumber:Us,isPromise:br,isScalarShape:eh,isString:Mt,isTypedArray:Q,isValidDtype:Ks,locToIndex:lh,makeOnesTypedArray:gr,makeZerosNestedTypedArray:ch,makeZerosTypedArray:yn,nearestDivisor:cn,nearestLargerEven:Ju,now:Ce,parseAxisParam:Ge,randUniform:Qu,repeatedTry:oh,rightPad:De,shuffle:Rs,shuffleCombo:Yu,sizeFromShape:q,sizeToSquarishShape:rh,squeezeShape:Ps,sum:Zu,swap:an,tanh:nh,toNestedArray:le,toTypedArray:$n},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class jh{constructor(t,n){this.backendTimer=t,this.logger=n,n==null&&(this.logger=new Yh)}profileKernel(t,n,r){let s;const o=()=>{s=r()};let a;const i=Ce();if(this.backendTimer.timerAvailable())a=this.backendTimer.time(o);else{o();for(const l of s)l.dataSync();a=Promise.resolve({kernelMs:Ce()-i})}if(M().getBool("CHECK_COMPUTATION_FOR_ERRORS"))for(let l=0;l<s.length;l++){const h=s[l];h.data().then(u=>{Xh(u,h.dtype,t)})}return{kernelName:t,outputs:s,inputs:n,timeMs:a.then(l=>l.kernelMs),extraInfo:a.then(l=>l.getExtraProfileInfo!=null?l.getExtraProfileInfo():"")}}logKernelProfile(t){const{kernelName:n,outputs:r,timeMs:s,inputs:o,extraInfo:a}=t;r.forEach(i=>{Promise.all([i.data(),s,a]).then(c=>{this.logger.logKernelProfile(n,i,c[0],c[1],o,c[2])})})}}function Xh(e,t,n){if(t!=="float32")return!1;for(let r=0;r<e.length;r++){const s=e[r];if(isNaN(s)||!isFinite(s))return console.warn(`Found ${s} in the result of '${n}'`),!0}return!1}class Yh{logKernelProfile(t,n,r,s,o,a){const i=typeof s=="number"?De(`${s}ms`,9):s.error,c=De(t,25),l=n.rank,h=n.size,u=De(n.shape.toString(),14);let d="";for(const b in o){const w=o[b];if(w!=null){const y=w.shape||n.shape,$=y.length;d+=`${b}: ${$}D ${$>0?y:""} `}}console.log(`%c${c}	%c${i}	%c${l}D ${u}	%c${h}	%c${d}	%c${a}`,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")}}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Jh(e,t,n){const r={},s={};for(let c=0;c<t.length;c++)r[t[c].id]=!0;for(let c=0;c<e.length;c++){const l=e[c],h=l.inputs;for(const u in h){const d=h[u];let b=!1;for(let w=0;w<t.length;w++)if(r[d.id]){l.outputs.forEach(y=>r[y.id]=!0),b=!0,s[l.id]=!0;break}if(b)break}}const o={};o[n.id]=!0;const a={};for(let c=e.length-1;c>=0;c--){const l=e[c],h=l.inputs;for(let u=0;u<l.outputs.length;u++)if(o[l.outputs[u].id]){for(const d in h)o[h[d].id]=!0,a[l.id]=!0;break}}const i=[];for(let c=0;c<e.length;c++){const l=e[c];if(s[l.id]&&a[l.id]){const h={};for(const d in l.inputs){const b=l.inputs[d];r[b.id]&&(h[d]=b)}const u=Object.assign({},l);u.inputs=h,u.outputs=l.outputs,i.push(u)}}return i}function Zh(e,t,n,r){for(let s=t.length-1;s>=0;s--){const o=t[s],a=[];if(o.outputs.forEach(c=>{const l=e[c.id];l!=null?a.push(l):a.push(null)}),o.gradient==null)throw new Error(`Cannot compute gradient: gradient function not found for ${o.kernelName}.`);const i=o.gradient(a);for(const c in o.inputs){if(!(c in i))throw new Error(`Cannot backprop through input ${c}. Available gradients found: ${Object.keys(i)}.`);const l=n(()=>i[c]());if(l.dtype!=="float32")throw new Error(`Error in gradient for op ${o.kernelName}. The gradient of input ${c} must have 'float32' dtype, but has '${l.dtype}'`);const h=o.inputs[c];if(!Lt(l.shape,h.shape))throw new Error(`Error in gradient for op ${o.kernelName}. The gradient of input '${c}' has shape '${l.shape}', which does not match the shape of the input '${h.shape}'`);if(e[h.id]==null)e[h.id]=l;else{const u=e[h.id];e[h.id]=r(u,l),u.dispose()}}}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ss=20,Te=3,Gn=7;function Qh(e,t,n,r){const s=Se(t),o=tf(e,t,n,s),a=t.length,i=sn(e,t,n,s,o),c=["Tensor"];return r&&(c.push(`  dtype: ${n}`),c.push(`  rank: ${a}`),c.push(`  shape: [${t}]`),c.push("  values:")),c.push(i.map(l=>"    "+l).join(`
`)),c.join(`
`)}function tf(e,t,n,r){const s=q(t),o=r[r.length-1],a=new Array(o).fill(0),i=t.length,c=n==="complex64"?Ae(e):e;if(i>1)for(let l=0;l<s/o;l++){const h=l*o;for(let u=0;u<o;u++)a[u]=Math.max(a[u],_e(c[h+u],0,n).length)}return a}function _e(e,t,n){let r;return Array.isArray(e)?r=`${parseFloat(e[0].toFixed(Gn))} + ${parseFloat(e[1].toFixed(Gn))}j`:Mt(e)?r=`'${e}'`:n==="bool"?r=Pi(e):r=parseFloat(e.toFixed(Gn)).toString(),De(r,t)}function Pi(e){return e===0?"false":"true"}function sn(e,t,n,r,s,o=!0){const a=n==="complex64"?2:1,i=t[0],c=t.length;if(c===0){if(n==="complex64"){const y=Ae(e);return[_e(y[0],0,n)]}return n==="bool"?[Pi(e[0])]:[e[0].toString()]}if(c===1){if(i>Ss){const $=Te*a;let S=Array.from(e.slice(0,$)),A=Array.from(e.slice((i-Te)*a,i*a));return n==="complex64"&&(S=Ae(S),A=Ae(A)),["["+S.map((E,v)=>_e(E,s[v],n)).join(", ")+", ..., "+A.map((E,v)=>_e(E,s[i-Te+v],n)).join(", ")+"]"]}return["["+(n==="complex64"?Ae(e):Array.from(e)).map(($,S)=>_e($,s[S],n)).join(", ")+"]"]}const l=t.slice(1),h=r.slice(1),u=r[0]*a,d=[];if(i>Ss){for(let y=0;y<Te;y++){const $=y*u,S=$+u;d.push(...sn(e.slice($,S),l,n,h,s,!1))}d.push("...");for(let y=i-Te;y<i;y++){const $=y*u,S=$+u;d.push(...sn(e.slice($,S),l,n,h,s,y===i-1))}}else for(let y=0;y<i;y++){const $=y*u,S=$+u;d.push(...sn(e.slice($,S),l,n,h,s,y===i-1))}const b=c===2?",":"";d[0]="["+d[0]+b;for(let y=1;y<d.length-1;y++)d[y]=" "+d[y]+b;let w=`,
`;for(let y=2;y<c;y++)w+=`
`;return d[d.length-1]=" "+d[d.length-1]+"]"+(o?"":w),d}function Ae(e){const t=[];for(let n=0;n<e.length;n+=2)t.push([e[n],e[n+1]]);return t}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class fn{constructor(t,n,r){if(this.dtype=n,this.shape=t.slice(),this.size=q(t),r!=null){const s=r.length;p(s===this.size,()=>`Length of values '${s}' does not match the size inferred by the shape '${this.size}'.`)}if(n==="complex64")throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=r||Ls(n,this.size),this.strides=Se(t)}set(t,...n){n.length===0&&(n=[0]),p(n.length===this.rank,()=>`The number of provided coordinates (${n.length}) must match the rank (${this.rank})`);const r=this.locToIndex(n);this.values[r]=t}get(...t){t.length===0&&(t=[0]);let n=0;for(const s of t){if(s<0||s>=this.shape[n]){const o=`Requested out of range element at ${t}.   Buffer shape=${this.shape}`;throw new Error(o)}n++}let r=t[t.length-1];for(let s=0;s<t.length-1;++s)r+=this.strides[s]*t[s];return this.values[r]}locToIndex(t){if(this.rank===0)return 0;if(this.rank===1)return t[0];let n=t[t.length-1];for(let r=0;r<t.length-1;++r)n+=this.strides[r]*t[r];return n}indexToLoc(t){if(this.rank===0)return[];if(this.rank===1)return[t];const n=new Array(this.shape.length);for(let r=0;r<n.length-1;++r)n[r]=Math.floor(t/this.strides[r]),t-=n[r]*this.strides[r];return n[n.length-1]=t,n}get rank(){return this.shape.length}toTensor(){return gt().makeTensor(this.values,this.shape,this.dtype)}}let gt=null,ie=null;function ef(e){gt=e}function nf(e){ie=e}class H{constructor(t,n,r,s){this.kept=!1,this.isDisposedInternal=!1,this.shape=t.slice(),this.dtype=n||"float32",this.size=q(t),this.strides=Se(t),this.dataId=r,this.id=s,this.rankType=this.rank<5?this.rank.toString():"higher"}get rank(){return this.shape.length}async buffer(){const t=await this.data();return ie.buffer(this.shape,this.dtype,t)}bufferSync(){return ie.buffer(this.shape,this.dtype,this.dataSync())}async array(){const t=await this.data();return le(this.shape,t,this.dtype==="complex64")}arraySync(){return le(this.shape,this.dataSync(),this.dtype==="complex64")}async data(){this.throwIfDisposed();const t=gt().read(this.dataId);if(this.dtype==="string"){const n=await t;try{return n.map(r=>hn(r))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}}return t}dataToGPU(t){return this.throwIfDisposed(),gt().readToGPU(this.dataId,t)}dataSync(){this.throwIfDisposed();const t=gt().readSync(this.dataId);if(this.dtype==="string")try{return t.map(n=>hn(n))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return t}async bytes(){this.throwIfDisposed();const t=await gt().read(this.dataId);return this.dtype==="string"?t:new Uint8Array(t.buffer)}dispose(){this.isDisposed||(gt().disposeTensor(this),this.isDisposedInternal=!0)}get isDisposed(){return this.isDisposedInternal}throwIfDisposed(){if(this.isDisposed)throw new Error("Tensor is disposed.")}print(t=!1){return ie.print(this,t)}clone(){return this.throwIfDisposed(),ie.clone(this)}toString(t=!1){const n=this.dataSync();return Qh(n,this.shape,this.dtype,t)}cast(t){return this.throwIfDisposed(),ie.cast(this,t)}variable(t=!0,n,r){return this.throwIfDisposed(),gt().makeVariable(this,t,n,r)}}Object.defineProperty(H,Symbol.hasInstance,{value:e=>!!e&&e.data!=null&&e.dataSync!=null&&e.throwIfDisposed!=null});function rf(){return yr("Tensor",()=>H)}rf();class Fe extends H{constructor(t,n,r,s){super(t.shape,t.dtype,t.dataId,s),this.trainable=n,this.name=r}assign(t){if(t.dtype!==this.dtype)throw new Error(`dtype of the new value (${t.dtype}) and previous value (${this.dtype}) must match`);if(!Lt(t.shape,this.shape))throw new Error(`shape of the new value (${t.shape}) and previous value (${this.shape}) must match`);gt().disposeTensor(this),this.dataId=t.dataId,gt().incRef(this,null)}dispose(){gt().disposeVariable(this),this.isDisposedInternal=!0}}Object.defineProperty(Fe,Symbol.hasInstance,{value:e=>e instanceof H&&e.assign!=null&&e.assign instanceof Function});/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var tr;(function(e){e.R0="R0",e.R1="R1",e.R2="R2",e.R3="R3",e.R4="R4",e.R5="R5",e.R6="R6"})(tr||(tr={}));var er;(function(e){e.float32="float32",e.int32="int32",e.bool="int32",e.complex64="complex64"})(er||(er={}));var nr;(function(e){e.float32="float32",e.int32="int32",e.bool="bool",e.complex64="complex64"})(nr||(nr={}));var rr;(function(e){e.float32="float32",e.int32="float32",e.bool="float32",e.complex64="complex64"})(rr||(rr={}));var sr;(function(e){e.float32="complex64",e.int32="complex64",e.bool="complex64",e.complex64="complex64"})(sr||(sr={}));const sf={float32:rr,int32:er,bool:nr,complex64:sr};function kn(e,t){if(e==="string"||t==="string"){if(e==="string"&&t==="string")return"string";throw new Error(`Can not upcast ${e} with ${t}`)}return sf[e][t]}function of(e){return kn(e,"int32")}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function V(e,t){if(e.dtype===t.dtype)return[e,t];const n=kn(e.dtype,t.dtype);return[e.cast(n),t.cast(n)]}function Oi(e,t){p(e.dtype===t.dtype,()=>`The dtypes of the first(${e.dtype}) and second(${t.dtype}) input must match`)}function af(e,t){return t.some(n=>n.id===e.id)}function vr(e){const t=[];return Li(e,t,new Set),t}function Li(e,t,n){if(e==null)return;if(e instanceof H){t.push(e);return}if(!cf(e))return;const r=e;for(const s in r){const o=r[s];n.has(o)||(n.add(o),Li(o,t,n))}}function cf(e){return Array.isArray(e)||typeof e=="object"}const lf=Object.freeze(Object.defineProperty({__proto__:null,assertTypesMatch:Oi,getTensorsInContainer:vr,isTensorInList:af,makeTypesMatch:V},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qn(e){return e.kernelName!=null}class xs{constructor(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null,get kernelNames(){return Array.from(new Set(this.kernels.map(t=>t.name)))}}}dispose(){for(const t in this.registeredVariables)this.registeredVariables[t].dispose()}}class me{constructor(t){this.ENV=t,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new xs}async ready(){if(this.pendingBackendInit!=null)return this.pendingBackendInit.then(()=>{});if(this.backendInstance!=null)return;const t=this.getSortedBackends();for(let n=0;n<t.length;n++){const r=t[n];if(await this.initializeBackend(r).success){await this.setBackend(r);return}}throw new Error("Could not initialize any backends, all backend initializations failed.")}get backend(){if(this.pendingBackendInit!=null)throw new Error(`Backend '${this.backendName}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);if(this.backendInstance==null){const{name:t,asyncInit:n}=this.initializeBackendsAndReturnBest();if(n)throw new Error(`The highest priority backend '${t}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);this.setBackend(t)}return this.backendInstance}backendNames(){return Object.keys(this.registryFactory)}findBackend(t){if(!(t in this.registry))if(t in this.registryFactory){const{asyncInit:n}=this.initializeBackend(t);if(n)return null}else return null;return this.registry[t]}findBackendFactory(t){return t in this.registryFactory?this.registryFactory[t].factory:null}registerBackend(t,n,r=1){return t in this.registryFactory?(At(`${t} backend was already registered. Reusing existing backend factory.`),!1):(this.registryFactory[t]={factory:n,priority:r},!0)}async setBackend(t){if(this.registryFactory[t]==null)throw new Error(`Backend name '${t}' not found in registry`);if(this.backendName=t,this.registry[t]==null){this.backendInstance=null;const{success:n,asyncInit:r}=this.initializeBackend(t);if(!(r?await n:n))return!1}return this.backendInstance=this.registry[t],this.setupRegisteredKernels(),this.profiler=new jh(this.backendInstance),!0}setupRegisteredKernels(){un(this.backendName).forEach(n=>{n.setupFunc!=null&&n.setupFunc(this.backendInstance)})}disposeRegisteredKernels(t){un(t).forEach(r=>{r.disposeFunc!=null&&r.disposeFunc(this.registry[t])})}initializeBackend(t){const n=this.registryFactory[t];if(n==null)throw new Error(`Cannot initialize backend ${t}, no registration found.`);try{const r=n.factory();if(r&&!(r instanceof Fs)&&typeof r.then=="function"){const s=++this.pendingBackendInitId,o=r.then(a=>s<this.pendingBackendInitId?!1:(this.registry[t]=a,this.pendingBackendInit=null,!0)).catch(a=>(s<this.pendingBackendInitId||(this.pendingBackendInit=null,At(`Initialization of backend ${t} failed`),At(a.stack||a.message)),!1));return this.pendingBackendInit=o,{success:o,asyncInit:!0}}else return this.registry[t]=r,{success:!0,asyncInit:!1}}catch(r){return At(`Initialization of backend ${t} failed`),At(r.stack||r.message),{success:!1,asyncInit:!1}}}removeBackend(t){if(!(t in this.registryFactory))throw new Error(`${t} backend not found in registry`);this.backendName===t&&this.pendingBackendInit!=null&&this.pendingBackendInitId++,t in this.registry&&(this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t]),delete this.registryFactory[t],this.backendName===t&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)}getSortedBackends(){if(Object.keys(this.registryFactory).length===0)throw new Error("No backend found in registry.");return Object.keys(this.registryFactory).sort((t,n)=>this.registryFactory[n].priority-this.registryFactory[t].priority)}initializeBackendsAndReturnBest(){const t=this.getSortedBackends();for(let n=0;n<t.length;n++){const r=t[n],{success:s,asyncInit:o}=this.initializeBackend(r);if(o||s)return{name:r,asyncInit:o}}throw new Error("Could not initialize any backends, all backend initializations failed.")}moveData(t,n){const r=this.state.tensorInfo.get(n),s=r.backend,o=this.readSync(n),a=s.refCount(n);s.disposeData(n,!0),r.backend=t,t.move(n,o,r.shape,r.dtype,a),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++}tidy(t,n){let r=null;if(n==null){if(typeof t!="function")throw new Error("Please provide a function to tidy()");n=t}else{if(typeof t!="string"&&!(t instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if(typeof n!="function")throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");r=t}let s;return this.scopedRun(()=>this.startScope(r),()=>this.endScope(s),()=>(s=n(),s instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),s))}scopedRun(t,n,r){t();try{const s=r();return n(),s}catch(s){throw n(),s}}nextTensorId(){return me.nextTensorId++}nextVariableId(){return me.nextVariableId++}clone(t){const n=m.runKernel(Er,{x:t}),r={x:t},s=a=>({x:()=>{const i="float32",c={x:a},l={dtype:i};return m.runKernel(kr,c,l)}}),o=[];return this.addTapeNode(this.state.activeScope.name,r,[n],s,o,{}),n}runKernel(t,n,r){if(this.backendName==null&&this.backend,!(ln(t,this.backendName)!=null))throw new Error(`Kernel '${t}' not registered for backend '${this.backendName}'`);return this.runKernelFunc({kernelName:t,inputs:n,attrs:r})}shouldCheckForMemLeaks(){return this.ENV.getBool("IS_TEST")}checkKernelForMemLeak(t,n,r){const s=this.backend.numDataIds();let o=0;r.forEach(c=>{o+=c.dtype==="complex64"?3:1});const a=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],i=s-n-o-a;if(i>0)throw new Error(`Backend '${this.backendName}' has an internal memory leak (${i} data ids) after running '${t}'`)}runKernelFunc(t){let n,r=[];const s=this.isTapeOn(),o=this.state.numBytes,a=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0);let i;this.backendName==null&&this.backend;let c;const l=qn(t)?t.kernelName:this.state.activeScope!=null?this.state.activeScope.name:"";if(qn(t)){const{kernelName:w,inputs:y,attrs:$}=t;this.backendName==null&&this.backend;const S=ln(w,this.backendName);p(S!=null,()=>`Cannot find registered kernel '${w}' for backend '${this.backendName}'`),i=()=>{const A=this.backend.numDataIds();c=S.kernelFunc({inputs:y,attrs:$,backend:this.backend});const E=Array.isArray(c)?c:[c];this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(w,A,E);const v=E.map(I=>I.rank!=null?I:this.makeTensorFromTensorInfo(I));if(s){const I=this.getTensorsForGradient(w,y,v);r=this.saveTensorsForBackwardMode(I)}return v}}else{const{forwardFunc:w}=t,y=$=>{s&&(r=$.map(S=>this.keep(this.clone(S))))};i=()=>{const $=this.backend.numDataIds();c=this.tidy(()=>w(this.backend,y));const S=Array.isArray(c)?c:[c];return this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(l,$,S),S}}const{inputs:h,attrs:u}=t,d=qn(t)?null:t.backwardsFunc;let b;return this.scopedRun(()=>this.state.kernelDepth++,()=>this.state.kernelDepth--,()=>{!this.ENV.getBool("DEBUG")&&!this.state.profiling?n=i():(b=this.profiler.profileKernel(l,h,()=>i()),this.ENV.getBool("DEBUG")&&this.profiler.logKernelProfile(b),n=b.outputs)}),s&&this.addTapeNode(l,h,n,d,r,u),this.state.profiling&&this.state.activeProfile.kernels.push({name:l,bytesAdded:this.state.numBytes-o,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-a,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(h).map(w=>h[w]!=null?h[w].shape:null),outputShapes:n.map(w=>w.shape),kernelTimeMs:b.timeMs,extraInfo:b.extraInfo}),Array.isArray(c)?n:n[0]}saveTensorsForBackwardMode(t){return t.map(r=>this.keep(this.clone(r)))}getTensorsForGradient(t,n,r){const s=Zn(t);if(s!=null){const o=s.inputsToSave||[],a=s.outputsToSave||[];let i;s.saveAllInputs?(p(Array.isArray(n),()=>"saveAllInputs is true, expected inputs to be an array."),i=Object.keys(n).map(l=>n[l])):i=o.map(l=>n[l]);const c=r.filter((l,h)=>a[h]);return i.concat(c)}return[]}makeTensor(t,n,r,s){if(t==null)throw new Error("Values passed to engine.makeTensor() are null");r=r||"float32",s=s||this.backend;let o=t;r==="string"&&Mt(t[0])&&(o=t.map(c=>Ue(c)));const a=s.write(o,n,r),i=new H(n,r,a,this.nextTensorId());if(this.trackTensor(i,s),r==="string"){const c=this.state.tensorInfo.get(a),l=Gs(o);this.state.numBytes+=l-c.bytes,c.bytes=l}return i}makeTensorFromDataId(t,n,r,s){r=r||"float32";const o={dataId:t,shape:n,dtype:r};return this.makeTensorFromTensorInfo(o,s)}makeTensorFromTensorInfo(t,n){const{dataId:r,shape:s,dtype:o}=t,a=new H(s,o,r,this.nextTensorId());return this.trackTensor(a,n),a}makeVariable(t,n=!0,r,s){r=r||this.nextVariableId().toString(),s!=null&&s!==t.dtype&&(t=t.cast(s));const o=new Fe(t,n,r,this.nextTensorId());if(this.state.registeredVariables[o.name]!=null)throw new Error(`Variable with name ${o.name} was already registered`);return this.state.registeredVariables[o.name]=o,this.incRef(o,this.backend),o}trackTensor(t,n){this.state.numTensors++,t.dtype==="string"&&this.state.numStringTensors++;let r=0;t.dtype!=="complex64"&&t.dtype!=="string"&&(r=t.size*Hn(t.dtype)),this.state.numBytes+=r,this.state.tensorInfo.has(t.dataId)||(this.state.numDataBuffers++,this.state.tensorInfo.set(t.dataId,{backend:n||this.backend,dtype:t.dtype,shape:t.shape,bytes:r})),t instanceof Fe||this.track(t)}incRef(t,n){this.trackTensor(t,n),this.backend.incRef(t.dataId)}removeDataId(t,n){this.state.tensorInfo.has(t)&&this.state.tensorInfo.get(t).backend===n&&(this.state.tensorInfo.delete(t),this.state.numDataBuffers--)}disposeTensor(t){if(!this.state.tensorInfo.has(t.dataId))return;const n=this.state.tensorInfo.get(t.dataId);if(this.state.numTensors--,t.dtype==="string"&&(this.state.numStringTensors--,this.state.numBytes-=n.bytes),t.dtype!=="complex64"&&t.dtype!=="string"){const r=t.size*Hn(t.dtype);this.state.numBytes-=r}n.backend.disposeData(t.dataId)&&this.removeDataId(t.dataId,n.backend)}disposeVariables(){for(const t in this.state.registeredVariables){const n=this.state.registeredVariables[t];this.disposeVariable(n)}}disposeVariable(t){this.disposeTensor(t),this.state.registeredVariables[t.name]!=null&&delete this.state.registeredVariables[t.name]}memory(){const t=this.backend.memory();return t.numTensors=this.state.numTensors,t.numDataBuffers=this.state.numDataBuffers,t.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(t.unreliable=!0,t.reasons==null&&(t.reasons=[]),t.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),t}async profile(t){this.state.profiling=!0;const n=this.state.numBytes,r=this.state.numTensors;this.state.activeProfile.kernels=[],this.state.activeProfile.result=await t(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max(...this.state.activeProfile.kernels.map(s=>s.totalBytesSnapshot)),this.state.activeProfile.newBytes=this.state.numBytes-n,this.state.activeProfile.newTensors=this.state.numTensors-r;for(const s of this.state.activeProfile.kernels)s.kernelTimeMs=await s.kernelTimeMs,s.extraInfo=await s.extraInfo;return this.state.activeProfile}isTapeOn(){return this.state.gradientDepth>0&&this.state.kernelDepth===0}addTapeNode(t,n,r,s,o,a){const i={id:this.state.nextTapeNodeId++,kernelName:t,inputs:n,outputs:r,saved:o},c=Zn(t);c!=null&&(s=c.gradFunc),s!=null&&(i.gradient=l=>(l=l.map((h,u)=>{if(h==null){const d=r[u],b=yn(d.size,d.dtype);return this.makeTensor(b,d.shape,d.dtype)}return h}),s(l.length>1?l:l[0],o,a))),this.state.activeTape.push(i)}keep(t){return t.kept=!0,t}startTape(){this.state.gradientDepth===0&&(this.state.activeTape=[]),this.state.gradientDepth++}endTape(){this.state.gradientDepth--}startScope(t){const n={track:[],name:"unnamed scope",id:this.state.nextScopeId++};t&&(n.name=t),this.state.scopeStack.push(n),this.state.activeScope=n}endScope(t){const n=vr(t),r=new Set(n.map(o=>o.id));for(let o=0;o<this.state.activeScope.track.length;o++){const a=this.state.activeScope.track[o];!a.kept&&!r.has(a.id)&&a.dispose()}const s=this.state.scopeStack.pop();this.state.activeScope=this.state.scopeStack.length===0?null:this.state.scopeStack[this.state.scopeStack.length-1],n.forEach(o=>{!o.kept&&o.scopeId===s.id&&this.track(o)})}gradients(t,n,r,s=!1){if(p(n.length>0,()=>"gradients() received an empty list of xs."),r!=null&&r.dtype!=="float32")throw new Error(`dy must have 'float32' dtype, but has '${r.dtype}'`);const o=this.scopedRun(()=>this.startTape(),()=>this.endTape(),()=>this.tidy("forward",t));p(o instanceof H,()=>"The result y returned by f() must be a tensor.");const a=Jh(this.state.activeTape,n,o);if(!s&&a.length===0&&n.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",()=>{const i={};i[o.id]=r??uf(o.shape),Zh(i,a,l=>this.tidy(l),hf);const c=n.map(l=>i[l.id]);return this.state.gradientDepth===0&&(this.state.activeTape.forEach(l=>{for(const h of l.saved)h.dispose()}),this.state.activeTape=null),{value:o,grads:c}})}customGrad(t){return p(Rt(t),()=>"The f passed in customGrad(f) must be a function."),(...n)=>{p(n.every(i=>i instanceof H),()=>"The args passed in customGrad(f)(x1, x2,...) must all be tensors");let r;const s={};n.forEach((i,c)=>{s[c]=i});const o=(i,c)=>(r=t(...n,c),p(r.value instanceof H,()=>"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"),p(Rt(r.gradFunc),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."),r.value),a=(i,c)=>{const l=r.gradFunc(i,c),h=Array.isArray(l)?l:[l];p(h.length===n.length,()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."),p(h.every(d=>d instanceof H),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors.");const u={};return h.forEach((d,b)=>{u[b]=()=>d}),u};return this.runKernelFunc({forwardFunc:o,backwardsFunc:a,inputs:s})}}readSync(t){return this.state.tensorInfo.get(t).backend.readSync(t)}read(t){return this.state.tensorInfo.get(t).backend.read(t)}readToGPU(t,n){return this.state.tensorInfo.get(t).backend.readToGPU(t,n)}async time(t){const n=Ce(),r=await this.backend.time(t);return r.wallMs=Ce()-n,r}track(t){return this.state.activeScope!=null&&(t.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(t)),t}get registeredVariables(){return this.state.registeredVariables}reset(){this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new xs;for(const t in this.registry)this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null}}me.nextTensorId=0;me.nextVariableId=0;function uf(e){const t=gr(q(e),"float32");return m.makeTensor(t,e,"float32")}function Wi(){const e=Hs();if(e._tfengine==null){const t=new Vs(e);e._tfengine=new me(t)}return ph(e._tfengine.ENV),ef(()=>e._tfengine),e._tfengine}const m=Wi();function hf(e,t){const n={a:e,b:t};return m.runKernel($r,n)}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ff(){return typeof navigator<"u"&&navigator!=null}let or;function df(e){or=e}function pf(e){if(or!==void 0)return or;if(e||ff()){if(e||(e=navigator),e.product==="ReactNative")return!0;const t=e.userAgent||e.vendor||(typeof window<"u"?window.opera:"");if(!t){const n=e;return n.userAgentData&&n.userAgentData.mobile}return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4))}return!1}function Ki(){return typeof window<"u"&&window.document!=null||typeof WorkerGlobalScope<"u"}const gf=Object.freeze(Object.defineProperty({__proto__:null,isBrowser:Ki,isMobile:pf,mockIsMobile:df},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ut=M();ut.registerFlag("DEBUG",()=>!1,e=>{e&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")});ut.registerFlag("IS_BROWSER",()=>Ki());ut.registerFlag("IS_NODE",()=>typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u");ut.registerFlag("IS_CHROME",()=>typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor));ut.registerFlag("PROD",()=>!1);ut.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",()=>ut.getBool("DEBUG"));ut.registerFlag("DEPRECATION_WARNINGS_ENABLED",()=>!0);ut.registerFlag("IS_TEST",()=>!1);ut.registerFlag("CHECK_COMPUTATION_FOR_ERRORS",()=>!0);ut.registerFlag("WRAP_TO_IMAGEBITMAP",()=>!1);ut.registerFlag("ENGINE_COMPILE_ONLY",()=>!1);ut.registerFlag("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU",()=>!1);ut.registerFlag("USE_SETTIMEOUTCUSTOM",()=>!1);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function wt(e,t){let n=e;if(Q(e))return t==="string"?[]:[e.length];if(!Array.isArray(e))return[];const r=[];for(;Array.isArray(n)||Q(n)&&t!=="string";)r.push(n.length),n=n[0];return Array.isArray(e)&&M().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&Gi(e,r,[]),r}function Gi(e,t,n){if(n=n||[],!Array.isArray(e)&&!Q(e)){p(t.length===0,()=>`Element arr[${n.join("][")}] is a primitive, but should be an array/TypedArray of ${t[0]} elements`);return}p(t.length>0,()=>`Element arr[${n.join("][")}] should be a primitive, but is an array of ${e.length} elements`),p(e.length===t[0],()=>`Element arr[${n.join("][")}] should have ${t[0]} elements, but has ${e.length} elements`);const r=t.slice(1);for(let s=0;s<e.length;++s)Gi(e[s],r,n.concat(s))}function vs(e,t,n,r){if(e!=="string_or_numeric"){if(e==null)throw new Error("Expected dtype cannot be null.");if(e!=="numeric"&&e!==t||e==="numeric"&&t==="string")throw new Error(`Argument '${n}' passed to '${r}' must be ${e} tensor, but got ${t} tensor`)}}function f(e,t,n,r="numeric"){if(e instanceof H)return vs(r,e.dtype,t,n),e;let s=wn(e);if(s!=="string"&&["bool","int32","float32"].indexOf(r)>=0&&(s=r),vs(r,s,t,n),e==null||!Q(e)&&!Array.isArray(e)&&typeof e!="number"&&typeof e!="boolean"&&typeof e!="string"){const c=e==null?"null":e.constructor.name;throw new Error(`Argument '${t}' passed to '${n}' must be a Tensor or TensorLike, but got '${c}'`)}const o=wt(e,s);!Q(e)&&!Array.isArray(e)&&(e=[e]);const i=s!=="string"?$n(e,s):Jt(e,[],!0);return m.makeTensor(i,o,s)}function Re(e,t,n,r="numeric"){if(!Array.isArray(e))throw new Error(`Argument ${t} passed to ${n} must be a \`Tensor[]\` or \`TensorLike[]\``);return e.map((o,a)=>f(o,`${t}[${a}]`,n,r))}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ir="__op";function g(e){const t=Object.keys(e);if(t.length!==1)throw new Error(`Please provide an object with a single key (operation name) mapping to a function. Got an object with ${t.length} keys.`);let n=t[0];const r=e[n];n.endsWith("_")&&(n=n.substring(0,n.length-1)),n=n+Ir;const s=(...o)=>{m.startScope(n);try{const a=r(...o);return br(a)&&console.error("Cannot return a Promise inside of tidy."),m.endScope(a),a}catch(a){throw m.endScope(null),a}};return Object.defineProperty(s,"name",{value:n,configurable:!0}),s}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function mf(e,t){const n=f(e,"real","complex"),r=f(t,"imag","complex");st(n.shape,r.shape,`real and imag shapes, ${n.shape} and ${r.shape}, must match in call to tf.complex().`);const s={real:n,imag:r};return m.runKernel(mo,s)}const xt=g({complex_:mf});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Wt(e,t,n,r){if(r==null&&(r=wn(e)),r==="complex64")throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(!Q(e)&&!Array.isArray(e)&&typeof e!="number"&&typeof e!="boolean"&&typeof e!="string")throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(t!=null){mr(t);const s=q(t),o=q(n);p(s===o,()=>`Based on the provided shape, [${t}], the tensor should have ${s} values but has ${o}`);for(let a=0;a<n.length;++a){const i=n[a],c=a===n.length-1?i!==q(t.slice(a)):!0;p(n[a]===t[a]||!c,()=>`Error creating a new Tensor. Inferred shape (${n}) does not match the provided shape (${t}). `)}}return!Q(e)&&!Array.isArray(e)&&(e=[e]),t=t||n,e=r!=="string"?$n(e,r):Jt(e,[],!0),m.makeTensor(e,t,r)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ht(e,t,n){const r=wt(e,n);return Wt(e,t,r,n)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ar={float32:4,float16:2,int32:4,uint16:2,uint8:1,bool:1,complex64:8};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const dn=4;async function bf(e,t){const n=[],r=[],s=Array.isArray(e)?e.map(a=>a.name):Object.keys(e);for(let a=0;a<s.length;++a){const i=s[a],c=Array.isArray(e)?e[a].tensor:e[i];if(c.dtype!=="float32"&&c.dtype!=="int32"&&c.dtype!=="bool"&&c.dtype!=="string"&&c.dtype!=="complex64")throw new Error(`Unsupported dtype in weight '${i}': ${c.dtype}`);const l={name:i,shape:c.shape,dtype:c.dtype};if(c.dtype==="string"){const h=new Promise(async u=>{const d=await c.bytes(),b=d.reduce(($,S)=>$+S.length,0)+dn*d.length,w=new Uint8Array(b);let y=0;for(let $=0;$<d.length;$++){const S=d[$],A=new Uint8Array(new Uint32Array([S.length]).buffer);w.set(A,y),y+=dn,w.set(S,y),y+=S.length}u(w)});r.push(h)}else r.push(c.data());t!=null&&(l.group=t),n.push(l)}const o=await Promise.all(r);return{data:wf(o),specs:n}}function qi(e,t){const n={};let r,s=0;for(const o of t){const a=o.name,i=o.dtype,c=o.shape,l=q(c);let h;if("quantization"in o){const u=o.quantization;if(u.dtype==="uint8"||u.dtype==="uint16"){if(!("min"in u&&"scale"in u))throw new Error(`Weight ${o.name} with quantization ${u.dtype} doesn't have corresponding metadata min and scale.`)}else if(u.dtype==="float16"){if(i!=="float32")throw new Error(`Weight ${o.name} is quantized with ${u.dtype} which only supports weights of type float32 not ${i}.`)}else throw new Error(`Weight ${o.name} has unknown quantization dtype ${u.dtype}. Supported quantization dtypes are: 'uint8', 'uint16', and 'float16'.`);const d=ar[u.dtype],b=e.slice(s,s+l*d),w=u.dtype==="uint8"?new Uint8Array(b):new Uint16Array(b);if(i==="float32")if(u.dtype==="uint8"||u.dtype==="uint16"){h=new Float32Array(w.length);for(let y=0;y<w.length;y++){const $=w[y];h[y]=$*u.scale+u.min}}else if(u.dtype==="float16")r===void 0&&(r=xf()),h=r(w);else throw new Error(`Unsupported quantization type ${u.dtype} for weight type float32.`);else if(i==="int32"){if(u.dtype!=="uint8"&&u.dtype!=="uint16")throw new Error(`Unsupported quantization type ${u.dtype} for weight type int32.`);h=new Int32Array(w.length);for(let y=0;y<w.length;y++){const $=w[y];h[y]=Math.round($*u.scale+u.min)}}else throw new Error(`Unsupported dtype in weight '${a}': ${i}`);s+=l*d}else if(i==="string"){const u=q(o.shape);h=[];for(let d=0;d<u;d++){const b=new Uint32Array(e.slice(s,s+dn))[0];s+=dn;const w=new Uint8Array(e.slice(s,s+b));h.push(w),s+=b}}else{const u=ar[i],d=e.slice(s,s+l*u);if(i==="float32")h=new Float32Array(d);else if(i==="int32")h=new Int32Array(d);else if(i==="bool")h=new Uint8Array(d);else if(i==="complex64"){h=new Float32Array(d);const b=new Float32Array(h.length/2),w=new Float32Array(h.length/2);for(let S=0;S<b.length;S++)b[S]=h[S*2],w[S]=h[S*2+1];const y=Ht(b,c,"float32"),$=Ht(w,c,"float32");n[a]=xt(y,$),y.dispose(),$.dispose()}else throw new Error(`Unsupported dtype in weight '${a}': ${i}`);s+=l*u}i!=="complex64"&&(n[a]=Ht(h,c,i))}return n}function wf(e){if(e===null)throw new Error(`Invalid input value: ${JSON.stringify(e)}`);let t=0;const n=[];e.forEach(o=>{if(t+=o.byteLength,n.push(o.byteLength===o.buffer.byteLength?o:new o.constructor(o)),!(o instanceof Float32Array||o instanceof Int32Array||o instanceof Uint8Array))throw new Error(`Unsupported TypedArray subtype: ${o.constructor.name}`)});const r=new Uint8Array(t);let s=0;return n.forEach(o=>{r.set(new Uint8Array(o.buffer),s),s+=o.byteLength}),r.buffer}const Tr=typeof Buffer<"u"&&(typeof Blob>"u"||typeof atob>"u"||typeof btoa>"u");function Is(e){return Tr?Buffer.byteLength(e):new Blob([e]).size}function yf(e){if(Tr)return Buffer.from(e).toString("base64");const t=new Uint8Array(e);let n="";for(let r=0,s=t.length;r<s;r++)n+=String.fromCharCode(t[r]);return btoa(n)}function $f(e){if(Tr){const r=Buffer.from(e,"base64");return r.buffer.slice(r.byteOffset,r.byteOffset+r.byteLength)}const t=atob(e),n=new Uint8Array(t.length);for(let r=0;r<t.length;++r)n.set([t.charCodeAt(r)],r);return n.buffer}function _r(e){if(e.length===1)return e[0];let t=0;e.forEach(s=>{t+=s.byteLength});const n=new Uint8Array(t);let r=0;return e.forEach(s=>{n.set(new Uint8Array(s),r),r+=s.byteLength}),n.buffer}function Ts(e){const t="/";for(e=e.trim();e.endsWith(t);)e=e.slice(0,e.length-1);const n=e.split(t);return n[n.length-1]}function Ui(e,t){const n={modelTopology:e.modelTopology,format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy,weightsManifest:t};return e.signature!=null&&(n.signature=e.signature),e.userDefinedMetadata!=null&&(n.userDefinedMetadata=e.userDefinedMetadata),e.modelInitializer!=null&&(n.modelInitializer=e.modelInitializer),e.trainingConfig!=null&&(n.trainingConfig=e.trainingConfig),n}function zi(e,t,n){const r={modelTopology:e.modelTopology,format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy};if(e.trainingConfig!=null&&(r.trainingConfig=e.trainingConfig),e.weightsManifest!=null){if(!t)throw new Error("modelJSON has weightsManifest but weightSpecs is null");if(!n)throw new Error("modelJSON has weightsManifest but weightData is null");r.weightSpecs=t,r.weightData=n}return e.signature!=null&&(r.signature=e.signature),e.userDefinedMetadata!=null&&(r.userDefinedMetadata=e.userDefinedMetadata),e.modelInitializer!=null&&(r.modelInitializer=e.modelInitializer),r}async function Ar(e,t){let n,r;return e.weightsManifest!=null&&([n,r]=await t(e.weightsManifest)),zi(e,n,r)}function ze(e){if(e.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:e.modelTopology==null?0:Is(JSON.stringify(e.modelTopology)),weightSpecsBytes:e.weightSpecs==null?0:Is(JSON.stringify(e.weightSpecs)),weightDataBytes:e.weightData==null?0:e.weightData.byteLength}}function Vi(e){const t=[];for(const n of e)t.push(...n.weights);return t}function kf(){const e=n=>{let r=n<<13,s=0;for(;!(r&8388608);)s-=8388608,r<<=1;return r&=-8388609,s+=947912704,r|s},t=new Uint32Array(2048);t[0]=0;for(let n=1;n<1024;n++)t[n]=e(n);for(let n=1024;n<2048;n++)t[n]=939524096+(n-1024<<13);return t}function Ef(){const e=new Uint32Array(64);e[0]=0,e[31]=1199570944,e[32]=2147483648,e[63]=3347054592;for(let t=1;t<31;t++)e[t]=t<<23;for(let t=33;t<63;t++)e[t]=2147483648+(t-32<<23);return e}function Sf(){const e=new Uint32Array(64);for(let t=0;t<64;t++)e[t]=1024;return e[0]=e[32]=0,e}function xf(){const e=kf(),t=Ef(),n=Sf();return r=>{const s=new ArrayBuffer(4*r.length),o=new Uint32Array(s);for(let a=0;a<r.length;a++){const i=r[a],c=e[n[i>>10]+(i&1023)]+t[i>>10];o[a]=c}return new Float32Array(s)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class U{constructor(){this.saveRouters=[],this.loadRouters=[]}static getInstance(){return U.instance==null&&(U.instance=new U),U.instance}static registerSaveRouter(t){U.getInstance().saveRouters.push(t)}static registerLoadRouter(t){U.getInstance().loadRouters.push(t)}static getSaveHandlers(t){return U.getHandlers(t,"save")}static getLoadHandlers(t,n){return U.getHandlers(t,"load",n)}static getHandlers(t,n,r){const s=[];return(n==="load"?U.getInstance().loadRouters:U.getInstance().saveRouters).forEach(a=>{const i=a(t,r);i!==null&&s.push(i)}),s}}const vf=e=>U.registerSaveRouter(e),If=e=>U.registerLoadRouter(e),Tf=e=>U.getSaveHandlers(e),_f=(e,t)=>U.getLoadHandlers(e,t);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ir="tensorflowjs",cr=1,Vt="models_store",Nt="model_info_store";function Hi(){if(!M().getBool("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");const e=typeof window>"u"?self:window,t=e.indexedDB||e.mozIndexedDB||e.webkitIndexedDB||e.msIndexedDB||e.shimIndexedDB;if(t==null)throw new Error("The current browser does not appear to support IndexedDB.");return t}function lr(e){const t=e.result;t.createObjectStore(Vt,{keyPath:"modelPath"}),t.createObjectStore(Nt,{keyPath:"modelPath"})}class Zt{constructor(t){if(this.indexedDB=Hi(),t==null||!t)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=t}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return this.databaseAction(this.modelPath,t)}async load(){return this.databaseAction(this.modelPath)}databaseAction(t,n){return new Promise((r,s)=>{const o=this.indexedDB.open(ir,cr);o.onupgradeneeded=()=>lr(o),o.onsuccess=()=>{const a=o.result;if(n==null){const i=a.transaction(Vt,"readonly"),l=i.objectStore(Vt).get(this.modelPath);l.onsuccess=()=>{if(l.result==null)return a.close(),s(new Error(`Cannot find model with path '${this.modelPath}' in IndexedDB.`));r(l.result.modelArtifacts)},l.onerror=h=>(a.close(),s(l.error)),i.oncomplete=()=>a.close()}else{const i=ze(n),c=a.transaction(Nt,"readwrite");let l=c.objectStore(Nt);const h=l.put({modelPath:this.modelPath,modelArtifactsInfo:i});let u;h.onsuccess=()=>{u=a.transaction(Vt,"readwrite");const b=u.objectStore(Vt).put({modelPath:this.modelPath,modelArtifacts:n,modelArtifactsInfo:i});b.onsuccess=()=>r({modelArtifactsInfo:i}),b.onerror=w=>{l=c.objectStore(Nt);const y=l.delete(this.modelPath);y.onsuccess=()=>(a.close(),s(b.error)),y.onerror=$=>(a.close(),s(b.error))}},h.onerror=d=>(a.close(),s(h.error)),c.oncomplete=()=>{u==null?a.close():u.oncomplete=()=>a.close()}}},o.onerror=a=>s(o.error)})}}Zt.URL_SCHEME="indexeddb://";const ji=e=>M().getBool("IS_BROWSER")&&!Array.isArray(e)&&e.startsWith(Zt.URL_SCHEME)?Af(e.slice(Zt.URL_SCHEME.length)):null;U.registerSaveRouter(ji);U.registerLoadRouter(ji);function Af(e){return new Zt(e)}function Df(e){return e.startsWith(Zt.URL_SCHEME)?e.slice(Zt.URL_SCHEME.length):e}class Mf{constructor(){this.indexedDB=Hi()}async listModels(){return new Promise((t,n)=>{const r=this.indexedDB.open(ir,cr);r.onupgradeneeded=()=>lr(r),r.onsuccess=()=>{const s=r.result,o=s.transaction(Nt,"readonly"),i=o.objectStore(Nt).getAll();i.onsuccess=()=>{const c={};for(const l of i.result)c[l.modelPath]=l.modelArtifactsInfo;t(c)},i.onerror=c=>(s.close(),n(i.error)),o.oncomplete=()=>s.close()},r.onerror=s=>n(r.error)})}async removeModel(t){return t=Df(t),new Promise((n,r)=>{const s=this.indexedDB.open(ir,cr);s.onupgradeneeded=()=>lr(s),s.onsuccess=()=>{const o=s.result,a=o.transaction(Nt,"readwrite"),i=a.objectStore(Nt),c=i.get(t);let l;c.onsuccess=()=>{if(c.result==null)return o.close(),r(new Error(`Cannot find model with path '${t}' in IndexedDB.`));{const h=i.delete(t),u=()=>{l=o.transaction(Vt,"readwrite");const b=l.objectStore(Vt).delete(t);b.onsuccess=()=>n(c.result.modelArtifactsInfo),b.onerror=w=>r(c.error)};h.onsuccess=u,h.onerror=d=>(u(),o.close(),r(c.error))}},c.onerror=h=>(o.close(),r(c.error)),a.oncomplete=()=>{l==null?o.close():l.oncomplete=()=>o.close()}},s.onerror=o=>r(s.error)})}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const St="/",ce="tensorflowjs_models",Xi="info",Nf="model_topology",Bf="weight_specs",Cf="weight_data",Ff="model_metadata";function Yi(e){return{info:[ce,e,Xi].join(St),topology:[ce,e,Nf].join(St),weightSpecs:[ce,e,Bf].join(St),weightData:[ce,e,Cf].join(St),modelMetadata:[ce,e,Ff].join(St)}}function Ji(e){for(const t of Object.values(e))window.localStorage.removeItem(t)}function Rf(e){const t=e.split(St);if(t.length<3)throw new Error(`Invalid key format: ${e}`);return t.slice(1,t.length-1).join(St)}function Pf(e){return e.startsWith(Qt.URL_SCHEME)?e.slice(Qt.URL_SCHEME.length):e}class Qt{constructor(t){if(!M().getBool("IS_BROWSER")||typeof window>"u"||typeof window.localStorage>"u")throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,t==null||!t)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=t,this.keys=Yi(this.modelPath)}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");{const n=JSON.stringify(t.modelTopology),r=JSON.stringify(t.weightSpecs),s=ze(t);try{this.LS.setItem(this.keys.info,JSON.stringify(s)),this.LS.setItem(this.keys.topology,n),this.LS.setItem(this.keys.weightSpecs,r),this.LS.setItem(this.keys.weightData,yf(t.weightData));const o={format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,signature:t.signature!=null?t.signature:void 0,userDefinedMetadata:t.userDefinedMetadata!=null?t.userDefinedMetadata:void 0,modelInitializer:t.modelInitializer!=null?t.modelInitializer:void 0,trainingConfig:t.trainingConfig!=null?t.trainingConfig:void 0};return this.LS.setItem(this.keys.modelMetadata,JSON.stringify(o)),{modelArtifactsInfo:s}}catch{throw Ji(this.keys),new Error(`Failed to save model '${this.modelPath}' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes=${s.modelTopologyBytes}, weightSpecsBytes=${s.weightSpecsBytes}, weightDataBytes=${s.weightDataBytes}.`)}}}async load(){const t=JSON.parse(this.LS.getItem(this.keys.info));if(t==null)throw new Error(`In local storage, there is no model with name '${this.modelPath}'`);if(t.modelTopologyType!=="JSON")throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");const n={},r=JSON.parse(this.LS.getItem(this.keys.topology));if(r==null)throw new Error(`In local storage, the topology of model '${this.modelPath}' is missing.`);n.modelTopology=r;const s=JSON.parse(this.LS.getItem(this.keys.weightSpecs));if(s==null)throw new Error(`In local storage, the weight specs of model '${this.modelPath}' are missing.`);n.weightSpecs=s;const o=this.LS.getItem(this.keys.modelMetadata);if(o!=null){const i=JSON.parse(o);n.format=i.format,n.generatedBy=i.generatedBy,n.convertedBy=i.convertedBy,i.signature!=null&&(n.signature=i.signature),i.userDefinedMetadata!=null&&(n.userDefinedMetadata=i.userDefinedMetadata),i.modelInitializer!=null&&(n.modelInitializer=i.modelInitializer),i.trainingConfig!=null&&(n.trainingConfig=i.trainingConfig)}const a=this.LS.getItem(this.keys.weightData);if(a==null)throw new Error(`In local storage, the binary weight values of model '${this.modelPath}' are missing.`);return n.weightData=$f(a),n}}Qt.URL_SCHEME="localstorage://";const Zi=e=>M().getBool("IS_BROWSER")&&!Array.isArray(e)&&e.startsWith(Qt.URL_SCHEME)?Of(e.slice(Qt.URL_SCHEME.length)):null;U.registerSaveRouter(Zi);U.registerLoadRouter(Zi);function Of(e){return new Qt(e)}class Lf{constructor(){p(M().getBool("IS_BROWSER"),()=>"Current environment is not a web browser"),p(typeof window>"u"||typeof window.localStorage<"u",()=>"Current browser does not appear to support localStorage"),this.LS=window.localStorage}async listModels(){const t={},n=ce+St,r=St+Xi;for(let s=0;s<this.LS.length;++s){const o=this.LS.key(s);if(o.startsWith(n)&&o.endsWith(r)){const a=Rf(o);t[a]=JSON.parse(this.LS.getItem(o))}}return t}async removeModel(t){t=Pf(t);const n=Yi(t);if(this.LS.getItem(n.info)==null)throw new Error(`Cannot find model at path '${t}'`);const r=JSON.parse(this.LS.getItem(n.info));return Ji(n),r}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ue="://";class et{constructor(){this.managers={}}static getInstance(){return et.instance==null&&(et.instance=new et),et.instance}static registerManager(t,n){p(t!=null,()=>"scheme must not be undefined or null."),t.endsWith(ue)&&(t=t.slice(0,t.indexOf(ue))),p(t.length>0,()=>"scheme must not be an empty string.");const r=et.getInstance();p(r.managers[t]==null,()=>`A model store manager is already registered for scheme '${t}'.`),r.managers[t]=n}static getManager(t){const n=et.getInstance().managers[t];if(n==null)throw new Error(`Cannot find model manager for scheme '${t}'`);return n}static getSchemes(){return Object.keys(et.getInstance().managers)}}function on(e){if(e.indexOf(ue)===-1)throw new Error(`The url string provided does not contain a scheme. Supported schemes are: ${et.getSchemes().join(",")}`);return{scheme:e.split(ue)[0],path:e.split(ue)[1]}}async function Qi(e,t,n=!1){p(e!==t,()=>`Old path and new path are the same: '${e}'`);const r=U.getLoadHandlers(e);p(r.length>0,()=>`Copying failed because no load handler is found for source URL ${e}.`),p(r.length<2,()=>`Copying failed because more than one (${r.length}) load handlers for source URL ${e}.`);const s=r[0],o=U.getSaveHandlers(t);p(o.length>0,()=>`Copying failed because no save handler is found for destination URL ${t}.`),p(o.length<2,()=>`Copying failed because more than one (${r.length}) save handlers for destination URL ${t}.`);const a=o[0],i=on(e).scheme,c=on(e).path,l=i===on(e).scheme,h=await s.load();n&&l&&await et.getManager(i).removeModel(c);const u=await a.save(h);return n&&!l&&await et.getManager(i).removeModel(c),u.modelArtifactsInfo}async function Wf(){const e=et.getSchemes(),t={};for(const n of e){const r=await et.getManager(n).listModels();for(const s in r){const o=n+ue+s;t[o]=r[s]}}return t}async function Kf(e){const t=on(e);return et.getManager(t.scheme).removeModel(t.path)}async function Gf(e,t){return Qi(e,t,!1)}async function qf(e,t){return Qi(e,t,!0)}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Uf{constructor(){this.messageName="setTimeoutCustom",this.functionRefs=[],this.handledMessageCount=0,this.hasEventListener=!1}fetch(t,n){return fetch(t,n)}now(){return performance.now()}encode(t,n){if(n!=="utf-8"&&n!=="utf8")throw new Error(`Browser's encoder only supports utf-8, but got ${n}`);return this.textEncoder==null&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(t)}decode(t,n){return new TextDecoder(n).decode(t)}setTimeoutCustom(t,n){if(!window||!M().getBool("USE_SETTIMEOUTCUSTOM")){setTimeout(t,n);return}this.functionRefs.push(t),setTimeout(()=>{window.postMessage({name:this.messageName,index:this.functionRefs.length-1},"*")},n),this.hasEventListener||(this.hasEventListener=!0,window.addEventListener("message",r=>{if(r.source===window&&r.data.name===this.messageName){r.stopPropagation();const s=this.functionRefs[r.data.index];s(),this.handledMessageCount++,this.handledMessageCount===this.functionRefs.length&&(this.functionRefs=[],this.handledMessageCount=0)}},!0))}}if(M().get("IS_BROWSER")){M().setPlatform("browser",new Uf);try{et.registerManager(Qt.URL_SCHEME,new Lf)}catch{}try{et.registerManager(Zt.URL_SCHEME,new Mf)}catch{}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const zf={importFetch:()=>require("node-fetch")};let Un;class Vf{constructor(){this.util=require("util"),this.textEncoder=new this.util.TextEncoder}fetch(t,n){return M().global.fetch!=null?M().global.fetch(t,n):(Un==null&&(Un=zf.importFetch()),Un(t,n))}now(){const t=process.hrtime();return t[0]*1e3+t[1]/1e6}encode(t,n){if(n!=="utf-8"&&n!=="utf8")throw new Error(`Node built-in encoder only supports utf-8, but got ${n}`);return this.textEncoder.encode(t)}decode(t,n){return t.length===0?"":new this.util.TextDecoder(n).decode(t)}}M().get("IS_NODE")&&!M().get("IS_BROWSER")&&M().setPlatform("node",new Vf);/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function yt(e,t="float32",n){return t=t||"float32",mr(e),new fn(e,t,n)}/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Hf(e,t){const n=f(e,"x","cast");if(!Ks(t))throw new Error(`Failed to cast to unknown dtype ${t}`);if(t==="string"&&n.dtype!=="string"||t!=="string"&&n.dtype==="string")throw new Error("Only strings can be casted to strings");const r={x:n},s={dtype:t};return m.runKernel(kr,r,s)}const z=g({cast_:Hf});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function jf(e){const n={x:f(e,"x","clone","string_or_numeric")};return m.runKernel(Er,n)}const Ft=g({clone_:jf});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Dr(e,t=!1){console.log(e.toString(t))}/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */Wi();const Xf={buffer:yt,cast:z,clone:Ft,print:Dr};nf(Xf);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Yf="model",Jf=".json",Zf=".weights.bin";function _s(e){return new Promise(t=>setTimeout(t)).then(e)}class te{constructor(t){if(!M().getBool("IS_BROWSER"))throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");t.startsWith(te.URL_SCHEME)&&(t=t.slice(te.URL_SCHEME.length)),(t==null||t.length===0)&&(t=Yf),this.modelJsonFileName=t+Jf,this.weightDataFileName=t+Zf}async save(t){if(typeof document>"u")throw new Error("Browser downloads are not supported in this environment since `document` is not present");const n=window.URL.createObjectURL(new Blob([t.weightData],{type:"application/octet-stream"}));if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");{const r=[{paths:["./"+this.weightDataFileName],weights:t.weightSpecs}],s=Ui(t,r),o=window.URL.createObjectURL(new Blob([JSON.stringify(s)],{type:"application/json"})),a=this.modelJsonAnchor==null?document.createElement("a"):this.modelJsonAnchor;if(a.download=this.modelJsonFileName,a.href=o,await _s(()=>a.dispatchEvent(new MouseEvent("click"))),t.weightData!=null){const i=this.weightDataAnchor==null?document.createElement("a"):this.weightDataAnchor;i.download=this.weightDataFileName,i.href=n,await _s(()=>i.dispatchEvent(new MouseEvent("click")))}return{modelArtifactsInfo:ze(t)}}}}te.URL_SCHEME="downloads://";class Qf{constructor(t){if(t==null||t.length<1)throw new Error(`When calling browserFiles, at least 1 file is required, but received ${t}`);this.jsonFile=t[0],this.weightsFiles=t.slice(1)}async load(){return new Promise((t,n)=>{const r=new FileReader;r.onload=s=>{const o=JSON.parse(s.target.result),a=o.modelTopology;if(a==null){n(new Error(`modelTopology field is missing from file ${this.jsonFile.name}`));return}if(o.weightsManifest==null){n(new Error(`weightManifest field is missing from file ${this.jsonFile.name}`));return}if(this.weightsFiles.length===0){t({modelTopology:a});return}const c=Ar(o,l=>this.loadWeights(l));t(c)},r.onerror=s=>n(`Failed to read model topology and weights manifest JSON from file '${this.jsonFile.name}'. BrowserFiles supports loading Keras-style tf.Model artifacts only.`),r.readAsText(this.jsonFile)})}loadWeights(t){const n=[],r=[];for(const a of t)n.push(...a.weights),r.push(...a.paths);const s=this.checkManifestAndWeightFiles(t),o=r.map(a=>this.loadWeightsFile(a,s[a]));return Promise.all(o).then(a=>[n,_r(a)])}loadWeightsFile(t,n){return new Promise((r,s)=>{const o=new FileReader;o.onload=a=>{const i=a.target.result;r(i)},o.onerror=a=>s(`Failed to weights data from file of path '${t}'.`),o.readAsArrayBuffer(n)})}checkManifestAndWeightFiles(t){const n=[],r=this.weightsFiles.map(o=>Ts(o.name)),s={};for(const o of t)o.paths.forEach(a=>{const i=Ts(a);if(n.indexOf(i)!==-1)throw new Error(`Duplicate file basename found in weights manifest: '${i}'`);if(n.push(i),r.indexOf(i)===-1)throw new Error(`Weight file with basename '${i}' is not provided.`);s[a]=this.weightsFiles[r.indexOf(i)]});if(n.length!==this.weightsFiles.length)throw new Error(`Mismatch in the number of files in weights manifest (${n.length}) and the number of weight files provided (${this.weightsFiles.length}).`);return s}}const td=e=>M().getBool("IS_BROWSER")&&!Array.isArray(e)&&e.startsWith(te.URL_SCHEME)?ed(e.slice(te.URL_SCHEME.length)):null;U.registerSaveRouter(td);function ed(e="model"){return new te(e)}function nd(e){return new Qf(e)}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function As(e,t,n,r){a(e),n=n??0,r=r??1,i(n,r);let s=0;const o=c=>(c.then(l=>{const h=n+ ++s/e.length*(r-n);return t(h),l}),c);function a(c){p(c!=null&&Array.isArray(c)&&c.length>0,()=>"promises must be a none empty array")}function i(c,l){p(c>=0&&c<=1,()=>`Progress fraction must be in range [0, 1], but got startFraction ${c}`),p(l>=0&&l<=1,()=>`Progress fraction must be in range [0, 1], but got endFraction ${l}`),p(l>=c,()=>`startFraction must be no more than endFraction, but got startFraction ${c} and endFraction ${l}`)}return Promise.all(e.map(o))}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function tc(e,t){t==null&&(t={});const n=t.fetchFunc==null?M().platform.fetch:t.fetchFunc,r=e.map(u=>n(u,t.requestInit,{isBinary:!0})),s=0,o=.5,i=(t.onProgress==null?await Promise.all(r):await As(r,t.onProgress,s,o)).map(u=>u.arrayBuffer()),c=.5,l=1;return t.onProgress==null?await Promise.all(i):await As(i,t.onProgress,c,l)}async function rd(e,t="",n,r){return ec(a=>tc(a,{requestInit:r}))(e,t,n)}function ec(e){return async(t,n="",r)=>{const s=t.map(()=>!1),o={},a=r!=null?r.map(()=>!1):[],i=[];if(t.forEach((b,w)=>{let y=0;b.weights.forEach($=>{const S="quantization"in $?$.quantization.dtype:$.dtype,A=ar[S]*q($.shape),E=()=>{s[w]=!0,o[w]==null&&(o[w]=[]),o[w].push({manifestEntry:$,groupOffset:y,sizeBytes:A})};r!=null?r.forEach((v,I)=>{v===$.name&&(E(),a[I]=!0)}):E(),i.push($.name),y+=A})}),!a.every(b=>b)){const b=r.filter((w,y)=>!a[y]);throw new Error(`Could not find weights in manifest with names: ${b.join(", ")}. 
Manifest JSON has weights with names: ${i.join(", ")}.`)}const c=s.reduce((b,w,y)=>(w&&b.push(y),b),[]),l=[];c.forEach(b=>{t[b].paths.forEach(w=>{const y=n+(n.endsWith("/")?"":"/")+w;l.push(y)})});const h=await e(l),u={};let d=0;return c.forEach(b=>{const w=t[b].paths.length;let y=0;for(let v=0;v<w;v++)y+=h[d+v].byteLength;const $=new ArrayBuffer(y),S=new Uint8Array($);let A=0;for(let v=0;v<w;v++){const I=new Uint8Array(h[d+v]);S.set(I,A),A+=I.byteLength}o[b].forEach(v=>{const I=$.slice(v.groupOffset,v.groupOffset+v.sizeBytes),T=qi(I,[v.manifestEntry]);for(const B in T)u[B]=T[B]}),d+=w}),u}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const sd="application/octet-stream",od="application/json";class Mr{constructor(t,n){if(this.DEFAULT_METHOD="POST",n==null&&(n={}),this.weightPathPrefix=n.weightPathPrefix,this.onProgress=n.onProgress,this.weightUrlConverter=n.weightUrlConverter,n.fetchFunc!=null?(p(typeof n.fetchFunc=="function",()=>"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"),this.fetch=n.fetchFunc):this.fetch=M().platform.fetch,p(t!=null&&t.length>0,()=>"URL path for http must not be null, undefined or empty."),Array.isArray(t)&&p(t.length===2,()=>`URL paths for http must have a length of 2, (actual length is ${t.length}).`),this.path=t,n.requestInit!=null&&n.requestInit.body!=null)throw new Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=n.requestInit||{}}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");const n=Object.assign({method:this.DEFAULT_METHOD},this.requestInit);n.body=new FormData;const r=[{paths:["./model.weights.bin"],weights:t.weightSpecs}],s=Ui(t,r);n.body.append("model.json",new Blob([JSON.stringify(s)],{type:od}),"model.json"),t.weightData!=null&&n.body.append("model.weights.bin",new Blob([t.weightData],{type:sd}),"model.weights.bin");const o=await this.fetch(this.path,n);if(o.ok)return{modelArtifactsInfo:ze(t),responses:[o]};throw new Error(`BrowserHTTPRequest.save() failed due to HTTP response status ${o.status}.`)}async load(){const t=await this.fetch(this.path,this.requestInit);if(!t.ok)throw new Error(`Request to ${this.path} failed with status code ${t.status}. Please verify this URL points to the model JSON of the model to load.`);let n;try{n=await t.json()}catch{let a=`Failed to parse model JSON of response from ${this.path}.`;throw this.path.endsWith(".pb")?a+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":a+=" Please make sure the server is serving valid JSON for this request.",new Error(a)}const r=n.modelTopology,s=n.weightsManifest;if(r==null&&s==null)throw new Error(`The JSON from HTTP path ${this.path} contains neither model topology or manifest for weights.`);return Ar(n,o=>this.loadWeights(o))}async loadWeights(t){const n=Array.isArray(this.path)?this.path[1]:this.path,[r,s]=ad(n),o=this.weightPathPrefix||r,a=Vi(t),i=[],c=[];for(const h of t)for(const u of h.paths)this.weightUrlConverter!=null?c.push(this.weightUrlConverter(u)):i.push(o+u+s);this.weightUrlConverter&&i.push(...await Promise.all(c));const l=await tc(i,{requestInit:this.requestInit,fetchFunc:this.fetch,onProgress:this.onProgress});return[a,_r(l)]}}Mr.URL_SCHEME_REGEX=/^https?:\/\//;function ad(e){const t=e.lastIndexOf("/"),n=e.lastIndexOf("?"),r=e.substring(0,t),s=n>t?e.substring(n):"";return[r+"/",s]}function ur(e){return e.match(Mr.URL_SCHEME_REGEX)!=null}const nc=(e,t)=>{if(typeof fetch>"u"&&(t==null||t.fetchFunc==null))return null;{let n=!0;if(Array.isArray(e)?n=e.every(r=>ur(r)):n=ur(e),n)return Nr(e,t)}return null};U.registerSaveRouter(nc);U.registerLoadRouter(nc);function Nr(e,t){return new Mr(e,t)}function id(e,t){return Nr(e,t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class zn{constructor(t){this.modelArtifacts=t}load(){return this.modelArtifacts}}class rc{constructor(t){this.saveHandler=t}save(t){return this.saveHandler(t)}}class cd{constructor(t){t.load&&(this.load=()=>Promise.resolve(t.load())),t.save&&(this.save=n=>Promise.resolve(t.save(n)))}}function ld(e,t,n,r){const s=arguments;return new cd(sc(...s))}function sc(e,t,n,r){return arguments.length===1?e.modelTopology!=null||e.weightSpecs!=null?new zn(e):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new zn({modelTopology:e})):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new zn({modelTopology:e,weightSpecs:t,weightData:n,trainingConfig:r}))}function ud(e){return new rc(e)}function hd(e){return new rc(e)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const fd=Object.freeze(Object.defineProperty({__proto__:null,browserFiles:nd,browserHTTPRequest:id,concatenateArrayBuffers:_r,copyModel:Gf,decodeWeights:qi,encodeWeights:bf,fromMemory:ld,fromMemorySync:sc,getLoadHandlers:_f,getModelArtifactsForJSON:Ar,getModelArtifactsForJSONSync:zi,getModelArtifactsInfoForJSON:ze,getSaveHandlers:Tf,getWeightSpecs:Vi,http:Nr,isHTTPScheme:ur,listModels:Wf,loadWeights:rd,moveModel:qf,registerLoadRouter:If,registerSaveRouter:vf,removeModel:Kf,weightsLoaderFactory:ec,withSaveHandler:ud,withSaveHandlerSync:hd},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function dd(e,t,n=!1,r=!1){let s=f(e,"a","matMul"),o=f(t,"b","matMul");[s,o]=V(s,o);const a={a:s,b:o},i={transposeA:n,transposeB:r};return m.runKernel(lo,a,i)}const P=g({matMul_:dd});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function pd(e,t,n=1,r=0,s="int32"){if(t<2)throw new Error(`Error in oneHot: depth must be >=2, but it is ${t}`);const a={indices:f(e,"indices","oneHot","int32")},i={dtype:s,depth:t,onValue:n,offValue:r};return m.runKernel(Ba,a,i)}const pn=g({oneHot_:pd});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gd(){M().set("PROD",!0)}function md(){M().set("DEBUG",!0)}function bd(){M().set("DEPRECATION_WARNINGS_ENABLED",!1),console.warn("TensorFlow.js deprecation warnings have been disabled.")}function wd(e){M().getBool("DEPRECATION_WARNINGS_ENABLED")&&console.warn(e+" You can disable deprecation warnings with tf.disableDeprecationWarnings().")}function yd(){m.disposeVariables()}function $d(){return m}function kd(){return m.memory()}function Ed(e){return m.profile(e)}function j(e,t){return m.tidy(e,t)}function ot(e){vr(e).forEach(n=>n.dispose())}function oc(e){return m.keep(e)}function Sd(e){return m.time(e)}function xd(e){return m.setBackend(e)}function vd(){return m.ready()}function Id(){return m.backendName}function Td(e){m.removeBackend(e)}function _d(e){return m.findBackend(e)}function Ad(e){return m.findBackendFactory(e)}function Dd(e,t,n=1){return m.registerBackend(e,t,n)}function Md(){return m.backend}function Nd(e,t){M().setPlatform(e,t)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Bd(e){const n={input:f(e,"input","imag")};return m.runKernel(ea,n)}const Ve=g({imag_:Bd});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Cd(e){const n={x:f(e,"x","neg")};return m.runKernel(Ta,n)}const bt=g({neg_:Cd});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Fd(e){const n={input:f(e,"input","real")};return m.runKernel(Ga,n)}const be=g({real_:Fd});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Rd(e,t,n){const r=f(e,"x","transpose");if(t==null&&(t=r.shape.map((a,i)=>i).reverse()),p(r.rank===t.length,()=>`Error in transpose: rank of input ${r.rank} must match length of perm ${t}.`),t.forEach(a=>{p(a>=0&&a<r.rank,()=>`All entries in 'perm' must be between 0 and ${r.rank-1} but got ${t}`)}),r.rank<=1)return r.clone();const s={x:r},o={perm:t};return r.dtype==="complex64"?j(()=>{let a=be(r),i=Ve(r);return a=m.runKernel(rn,{x:a},o),i=m.runKernel(rn,{x:i},o),n&&(i=bt(i)),xt(a,i)}):m.runKernel(rn,s,o)}const Pe=g({transpose_:Rd});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Pd(e,t,n){const r=f(e,"labels","confusionMatrix"),s=f(t,"predictions","confusionMatrix");p(n==null||n>0&&Number.isInteger(n),()=>`If provided, numClasses must be a positive integer, but got ${n}`),p(r.rank===1,()=>`Expected the rank of labels to be 1, but got ${r.rank}`),p(s.rank===1,()=>`Expected the rank of predictions to be 1, but got ${s.rank}`),p(r.shape[0]===s.shape[0],()=>`Mismatch in the number of examples: ${r.shape[0]} vs. ${s.shape[0]}. Labels and predictions should have the same number of elements.`),p(n>0&&Number.isInteger(n),()=>`numClasses is required to be a positive integer, but got ${n}`);const o=pn(z(r,"int32"),n),a=pn(z(s,"int32"),n),i=Pe(o),c=P(i,a);return z(c,"int32")}const Od=g({confusionMatrix_:Pd});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ld=Object.freeze(Object.defineProperty({__proto__:null,confusionMatrix:Od},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ac(e,t){const n=e.length,r=[];for(let s=0;s<n;s++){const o=n-1-s,a=e[o]||1;(t[t.length-1-s]||1)>1&&a===1&&r.unshift(o)}return r}function Br(e,t){const n=[];for(let r=0;r<t.length;r++){const s=e[e.length-r-1],o=t.length-r-1,a=t[o];(s==null||s===1&&a>1)&&n.unshift(o)}return n}function X(e,t){const n=[],r=Math.max(e.length,t.length);for(let s=0;s<r;s++){let o=e[e.length-s-1];o==null&&(o=1);let a=t[t.length-s-1];if(a==null&&(a=1),o===1)n.unshift(a);else if(a===1)n.unshift(o);else if(o!==a){const i=`Operands could not be broadcast together with shapes ${e} and ${t}.`;throw Error(i)}else n.unshift(o)}return n}const Wd=Object.freeze(Object.defineProperty({__proto__:null,assertAndGetBroadcastShape:X,getBroadcastDims:ac,getReductionAxes:Br},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Cr(e,t,n){if(re(e),t!=null&&t.length!==3)throw new Error("tensor3d() requires shape to have three numbers");const r=wt(e,n);if(r.length!==3&&r.length!==1)throw new Error("tensor3d() requires values to be number[][][] or flat/TypedArray");if(r.length===1&&t==null)throw new Error("tensor3d() requires shape to be provided when `values` are a flat array");return Wt(e,t,r,n)}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let qt;function ic(e,t=3){if(t>4)throw new Error("Cannot construct Tensor with more than 4 channels from pixels.");if(e==null)throw new Error("pixels passed to tf.browser.fromPixels() can not be null");let n=!1,r=!1,s=!1,o=!1,a=!1,i=!1;if(e.data instanceof Uint8Array)n=!0;else if(typeof ImageData<"u"&&e instanceof ImageData)r=!0;else if(typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement)s=!0;else if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement)o=!0;else if(e.getContext!=null)a=!0;else if(typeof ImageBitmap<"u"&&e instanceof ImageBitmap)i=!0;else throw new Error(`pixels passed to tf.browser.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData in browser, or OffscreenCanvas, ImageData in webworker or {data: Uint32Array, width: number, height: number}, but was ${e.constructor.name}`);if(ln(jn,m.backendName)!=null){const w={pixels:e},y={numChannels:t};return m.runKernel(jn,w,y)}const[l,h]=s?[e.videoWidth,e.videoHeight]:[e.width,e.height];let u;if(a)u=e.getContext("2d").getImageData(0,0,l,h).data;else if(r||n)u=e.data;else if(o||s||i){if(qt==null)if(typeof document>"u")if(typeof OffscreenCanvas<"u"&&typeof OffscreenCanvasRenderingContext2D<"u")qt=new OffscreenCanvas(1,1).getContext("2d");else throw new Error("Cannot parse input in current context. Reason: OffscreenCanvas Context2D rendering is not supported.");else qt=document.createElement("canvas").getContext("2d",{willReadFrequently:!0});qt.canvas.width=l,qt.canvas.height=h,qt.drawImage(e,0,0,l,h),u=qt.getImageData(0,0,l,h).data}let d;if(t===4)d=new Int32Array(u);else{const w=l*h;d=new Int32Array(w*t);for(let y=0;y<w;y++)for(let $=0;$<t;++$)d[y*t+$]=u[y*4+$]}return Cr(d,[h,l,t],"int32")}function Kd(e){return e!=null&&e.data instanceof Uint8Array}function Gd(){return typeof window<"u"&&typeof ImageBitmap<"u"&&window.hasOwnProperty("createImageBitmap")}function qd(e){return e!=null&&e.width!==0&&e.height!==0}function Ud(e){return Gd()&&!(e instanceof ImageBitmap)&&qd(e)&&!Kd(e)}async function zd(e,t=3){let n=null;if(M().getBool("WRAP_TO_IMAGEBITMAP")&&Ud(e)){let r;try{r=await createImageBitmap(e,{premultiplyAlpha:"none"})}catch{r=null}r!=null&&r.width===e.width&&r.height===e.height?n=r:n=e}else n=e;return ic(n,t)}async function Vd(e,t){let n=f(e,"img","toPixels");if(!(e instanceof H)){const l=n;n=z(l,"int32"),l.dispose()}if(n.rank!==2&&n.rank!==3)throw new Error(`toPixels only supports rank 2 or 3 tensors, got rank ${n.rank}.`);const[r,s]=n.shape.slice(0,2),o=n.rank===2?1:n.shape[2];if(o>4||o===2)throw new Error(`toPixels only supports depth of size 1, 3 or 4 but got ${o}`);if(n.dtype!=="float32"&&n.dtype!=="int32")throw new Error(`Unsupported type for toPixels: ${n.dtype}. Please use float32 or int32 tensors.`);const a=await n.data(),i=n.dtype==="float32"?255:1,c=new Uint8ClampedArray(s*r*4);for(let l=0;l<r*s;++l){const h=[0,0,0,255];for(let d=0;d<o;d++){const b=a[l*o+d];if(n.dtype==="float32"){if(b<0||b>1)throw new Error(`Tensor values for a float32 Tensor must be in the range [0 - 1] but encountered ${b}.`)}else if(n.dtype==="int32"&&(b<0||b>255))throw new Error(`Tensor values for a int32 Tensor must be in the range [0 - 255] but encountered ${b}.`);o===1?(h[0]=b*i,h[1]=b*i,h[2]=b*i):h[d]=b*i}const u=l*4;c[u+0]=Math.round(h[0]),c[u+1]=Math.round(h[1]),c[u+2]=Math.round(h[2]),c[u+3]=Math.round(h[3])}if(t!=null){t.width=s,t.height=r;const l=t.getContext("2d"),h=new ImageData(c,s,r);l.putImageData(h,0,0)}return n!==e&&n.dispose(),c}const Hd=g({fromPixels_:ic}),jd=Object.freeze(Object.defineProperty({__proto__:null,fromPixels:Hd,fromPixelsAsync:zd,toPixels:Vd},Symbol.toStringTag,{value:"Module"}));function cc(e,t){const n=e.shape.length,r=t.shape.length;if(n<1)throw new Error(`tf.gatherND() expects the input to be rank 1 or higher, but the rank was ${n}.`);if(r<1)throw new Error(`tf.gatherND() expects the indices to be rank 1 or higher, but the rank was ${r}.`);if(t.dtype!=="int32")throw new Error(`tf.gatherND() expects the indices to be int32 type, but the dtype was ${t.dtype}.`);if(t.shape[r-1]>n)throw new Error(`index innermost dimension length must be <= tensor rank; saw: ${t.shape[r-1]} vs. ${n}`);if(q(e.shape)===0)throw new Error(`Requested more than 0 entries, but input is empty. Input shape: ${e.shape}.`);const s=t.shape,o=s[s.length-1];let a=1;for(let u=0;u<s.length-1;++u)a*=s[u];const i=e.shape,c=s.slice();c.pop();let l=1;for(let u=o;u<n;++u)l*=i[u],c.push(i[u]);const h=[...Se(e.shape).map(u=>u/l),1].slice(0,o);return[c,a,l,h]}const Xd=Object.freeze(Object.defineProperty({__proto__:null,prepareAndValidate:cc},Symbol.toStringTag,{value:"Module"}));function Fr(e,t,n){const r=t.rank>1?t.shape[t.rank-1]:1,s=t.rank>1?t.rank-1:1,o=`Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: ${n.shape}, indices.shape: ${t.shape}, shape: ${e}, sliceDim: ${r}, and batchDim: ${s}.`;if(n.rank<s)throw new Error(o+` update.rank < ${s}. `);if(e.length<r+(n.rank-s))throw new Error(o+` Output shape length < ${r+(n.rank-s)}`);if(n.rank!==s+e.length-r)throw new Error(o+` update.rank != ${s+e.length-r}`);for(let a=0;a<s;++a)if(n.shape[a]!==t.shape[a])throw new Error(o+` updates.shape[${a}] (${n.shape[a]}) != indices.shape[${a}] (${t.shape[a]}).`);for(let a=0;a<n.rank-s;++a)if(n.shape[a+s]!==e[a+r])throw new Error(o+` updates.shape[${a+s}] (${n.shape[a+s]}) != shape[${a+s}] (${e[a+s]})`)}function Rr(e,t,n){if(t.rank<1)throw new Error(`tf.scatterND() expects the indices to be rank 1 or higher, but the rank was ${t.rank}.`);if(e.rank<1)throw new Error(`tf.scatterND() expects the updates to be rank 1 or higher, but the rank was ${e.rank}.`);if(t.dtype!=="int32")throw new Error(`The dtype of 'indices' should be int32, but got dtype: ${t.dtype}`);if(n.length<1)throw new Error(`Output rank must be greater or equal to 1, but got shape: ${n}`);if(n.length===0){if(t.size===0)throw new Error(`Indices specified for empty output. indices shape: ${t.shape}`);if(e.size===0)throw new Error(`Updates specified for empty output. updates shape: ${e.shape}`)}Fr(n,t,e)}function lc(e,t,n){const r=t.shape.length,s=r>1?t.shape[r-1]:1,o=n.length;let a=1;for(let u=s;u<o;++u)a*=n[u];const i=s<1?1:s,c=q(t.shape)/i,l=[...Se(n.slice(0,s)),1],h=q(n);return{sliceRank:s,numUpdates:c,sliceSize:a,strides:l,outputSize:h}}const Yd=Object.freeze(Object.defineProperty({__proto__:null,calculateShapes:lc,validateInput:Rr,validateUpdateShape:Fr},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const hr=-2,Jd=-1;function Zd(e,t,n){const r=e.shape.length;p(r===t.length,()=>`Error in slice${r}D: Length of begin ${t} must match the rank of the array (${r}).`),p(r===n.length,()=>`Error in slice${r}D: Length of size ${n} must match the rank of the array (${r}).`);for(let s=0;s<r;++s)p(t[s]+n[s]<=e.shape[s],()=>`Error in slice${r}D: begin[${s}] + size[${s}] (${t[s]+n[s]}) would overflow input.shape[${s}] (${e.shape[s]})`)}function Qd(e){const t=[];let n=0;for(;e>0;)e&1&&t.push(n),e/=2,n++;return t}function tp(e,t,n){const r=[];for(let s=0;s<e.length;s++)r[s]=Math.ceil((t[s]-e[s])/n[s]);return r}function uc(e,t,n,r){const s=[...e];for(let o=s.length;o<r.length;o++)s.push(1);for(let o=0;o<n;o++)o===0?s[t]=1:(s.splice(t,0,1),s.pop());return s}function hc(e,t,n){return n<=e?n:n-(t-1)}function fc(e,t){const n=[];for(let r=0;r<e;r++)n.push(t+r);return n}function ep(e,t,n,r,s,o,a,i,c){const l=e.length;let h=new Array(l),u=new Array(l),d=new Array(l);if(t.length&&n>0){const b=t[0],w=n+1;h=dc(a,b,w,r,e),u=pc(i,b,w,s,e),d=uc(o,b,w,e)}else for(let b=0;b<l;b++)h[b]=mc(a,r,o,e,b,c),u[b]=bc(i,s,o,e,b,c),d[b]=gc(o,b,c);return{begin:h,end:u,strides:d}}function dc(e,t,n,r,s){const o=[...s],a=fc(n,t);for(let i=0;i<o.length;i++)if(a.indexOf(i)>-1)o[i]=0;else{const c=hc(t,n,i);let l=r[c];e&1<<c&&(l=0),o[i]=l}return o}function pc(e,t,n,r,s){const o=[...s],a=fc(n,t);for(let i=0;i<o.length;i++)if(a.indexOf(i)>-1)o[i]=Number.MAX_SAFE_INTEGER;else{const c=hc(t,n,i);let l=r[c];e&1<<c&&(l=Number.MAX_SAFE_INTEGER),o[i]=l}for(let i=0;i<o.length;i++){const c=s[i];o[i]<0&&(o[i]+=c),o[i]=Ne(0,o[i],s[i])}return o}function gc(e,t,n){let r=e[t];return(n&1<<t||r==null)&&(r=1),r}function mc(e,t,n,r,s,o){let a=t[s];const i=n[s]||1;(e&1<<s||o&1<<s||a==null)&&(i>0?a=Number.MIN_SAFE_INTEGER:a=Number.MAX_SAFE_INTEGER);const c=r[s];return a<0&&(a+=c),a=Ne(0,a,c-1),a}function bc(e,t,n,r,s,o){let a=t[s];const i=n[s]||1;(e&1<<s||o&1<<s||a==null)&&(i>0?a=Number.MAX_SAFE_INTEGER:a=Number.MIN_SAFE_INTEGER);const c=r[s];return a<0&&(a+=c),i>0?a=Ne(0,a,c):a=Ne(-1,a,c-1),a}function np(e,t,n){let r=n.length;for(let s=0;s<n.length;s++)if(n[s]>1){r=s;break}for(let s=r+1;s<n.length;s++)if(t[s]>0||n[s]!==e[s])return!1;return!0}function rp(e,t){let n=e.length>0?e[e.length-1]:1;for(let r=0;r<e.length-1;r++)n+=e[r]*t[r];return n}function sp(e,t,n){let r;const s=e.shape.length;typeof t=="number"?r=[t,...new Array(s-1).fill(0)]:t.length<s?r=t.concat(new Array(s-t.length).fill(0)):r=t.slice(),r.forEach(a=>{p(a!==-1,()=>"slice() does not support negative begin indexing.")});let o;return n==null?o=new Array(s).fill(-1):typeof n=="number"?o=[n,...new Array(s-1).fill(-1)]:n.length<s?o=n.concat(new Array(s-n.length).fill(-1)):o=n,o=o.map((a,i)=>a>=0?a:(p(a===-1,()=>`Negative size values should be exactly -1 but got ${a} for the slice() size at index ${i}.`),e.shape[i]-r[i])),[r,o]}function op(e,t,n,r,s,o,a,i,c){let l;if(r==null?(l=new Array(t.length),l.fill(1)):l=r,a!=null&&a&a-1)throw new Error("Multiple ellipses in slice is not allowed.");let h=!1;const u={dims:l.length,numAddAxisAfterEllipsis:0,begin:t.slice(),end:n.slice(),strides:l.slice(),beginMask:s,endMask:o,ellipsisMask:a,newAxisMask:i,shrinkAxisMask:c};for(let E=0;E<u.dims;E++)h&&1<<E&i&&u.numAddAxisAfterEllipsis++,1<<E&a&&(h=!0);h||(u.ellipsisMask|=1<<u.dims,u.dims++);const d={dims:e.length,beginMask:0,endMask:0,beginValid:!1,endValid:!1};ap(u,d);let b=!0,w=!0,y=!0;const $=[],S=[];for(let E=0;E<e.length;++E){if(d.strides[E]===0)throw Error(`strides[${E}] must be non-zero`);const v=!!(d.shrinkAxisMask&1<<E),I=e[E];if(I===-1){$.push(v?1:-1);continue}const T=[d.beginMask&1<<E,d.endMask&1<<E],B=[d.strides[E]>0?0:-1,d.strides[E]>0?I:I-1];if(v&&d.strides[E]<=0)throw Error("only stride 1 allowed on non-range indexing.");y=y&&d.strides[E]===1;const C=!!(d.beginMask&1<<E&&d.endMask&1<<E);if(d.beginValid&&d.endValid){if(v){const Y=d.begin[E]<0?I+d.begin[E]:d.begin[E];if(d.begin[E]=Y,d.end[E]=d.begin[E]+1,Y<0||Y>=I)throw Error(`slice index ${d.begin[E]} of dimension ${E} out of bounds.`)}else d.begin[E]=Ds(d.begin[E],0,d.strides[E],I,T,B),d.end[E]=Ds(d.end[E],1,d.strides[E],I,T,B);const F=d.strides[E]===1&&d.begin[E]===0&&d.end[E]===I;b=b&&F,w=w&&(E===0&&d.strides[E]===1||F)}else b=b&&d.strides[E]===1&&C,w=w&&(E===0&&d.strides[E]===1||C);let D,R=!1;if(d.beginValid&&d.endValid?(D=d.end[E]-d.begin[E],R=!0):v?(D=1,R=!0):C&&I>=0&&(d.strides[E]<0?D=-I:D=I,R=!0),R){let F;D===0||D<0!=d.strides[E]<0?F=0:F=Math.trunc(D/d.strides[E])+(D%d.strides[E]!==0?1:0),$.push(F)}else $.push(-1)}for(let E=0;E<d.finalShapeGatherIndices.length;++E){const v=d.finalShapeGatherIndices[E];v>=0?S.push($[v]):v===hr&&S.push(1)}return{finalShapeSparse:S.filter((E,v)=>d.finalShapeGatherIndices[v]!==hr),finalShape:S,isIdentity:b,sliceDim0:w,isSimpleSlice:y,begin:d.begin,end:d.end,strides:d.strides}}function ap(e,t){t.beginMask=0,t.endMask=0,t.shrinkAxisMask=0;let n=0;t.beginValid=e.begin!=null,t.endValid=e.end!=null,t.begin=new Array(t.dims),t.end=new Array(t.dims),t.strides=new Array(t.dims),t.finalShapeGatherIndices=[],t.finalShapeGatherIndicesSparse=[],t.inputShapeGatherIndicesSparse=new Array(t.dims);for(let r=0;r<e.dims;r++)if(1<<r&e.ellipsisMask){const s=Math.min(t.dims-(e.dims-r)+1+e.numAddAxisAfterEllipsis,t.dims);for(;n<s;n++)t.begin[n]=0,t.end[n]=0,t.strides[n]=1,t.beginMask|=1<<n,t.endMask|=1<<n,t.finalShapeGatherIndices.push(n),t.finalShapeGatherIndicesSparse.push(-1),t.inputShapeGatherIndicesSparse[n]=r}else if(1<<r&e.newAxisMask)t.finalShapeGatherIndices.push(hr),t.finalShapeGatherIndicesSparse.push(-1);else{if(n===t.begin.length)throw Error(`Index out of range using input dim ${n}; input has only ${t.dims} dims, ${t.begin.length}.`);e.begin!=null&&(t.begin[n]=e.begin[r]),e.end!=null&&(t.end[n]=e.end[r]),t.strides[n]=e.strides[r],e.beginMask&1<<r&&(t.beginMask|=1<<n),e.endMask&1<<r&&(t.endMask|=1<<n),e.shrinkAxisMask&1<<r?(t.finalShapeGatherIndices.push(Jd),t.finalShapeGatherIndicesSparse.push(-1),t.shrinkAxisMask|=1<<n):(t.finalShapeGatherIndices.push(n),t.finalShapeGatherIndicesSparse.push(r)),t.inputShapeGatherIndicesSparse[n]=r,n++}}function Ds(e,t,n,r,s,o){if(s[t])return n>0?o[t]:o[t+1&1];{const a=e<0?r+e:e;return a<o[0]?o[0]:a>o[1]?o[1]:a}}const wc=Object.freeze(Object.defineProperty({__proto__:null,assertParamsValid:Zd,computeFlatOffset:rp,computeOutShape:tp,getNormalizedAxes:ep,isSliceContinous:np,maskToAxes:Qd,parseSliceParams:sp,sliceInfo:op,startForAxis:mc,startIndicesWithElidedDims:dc,stopForAxis:bc,stopIndicesWithElidedDims:pc,stridesForAxis:gc,stridesWithElidedDims:uc},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class yc{getClassName(){return this.constructor.className}static fromConfig(t,n){return new t(n)}}class Dt{constructor(){this.classNameMap={}}static getMap(){return Dt.instance==null&&(Dt.instance=new Dt),Dt.instance}static register(t){Dt.getMap().classNameMap[t.className]=[t,t.fromConfig]}}function Kt(e){p(e.className!=null,()=>"Class being registered does not have the static className property defined."),p(typeof e.className=="string",()=>"className is required to be a string, but got type "+typeof e.className),p(e.className.length>0,()=>"Class being registered has an empty-string as its className, which is disallowed."),Dt.register(e)}const ip=Object.freeze(Object.defineProperty({__proto__:null,Serializable:yc,SerializationMap:Dt,registerClass:Kt},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const cp=.001,$c=.1;function lp(e,t,n){return n==null&&(n=Pr()),fr(e,t,(r,s)=>Or(r,s,n))}function Pr(){return m.backend.floatPrecision()===32?cp:$c}function fr(e,t,n){let r=!0;if((Q(e)||Q(t))&&(r=!1),Q(e)&&Q(t)&&(r=!0),r){const a=e.constructor.name,i=t.constructor.name;if(a!==i)throw new Error(`Arrays are of different type. Actual: ${a}. Expected: ${i}`)}if(Array.isArray(e)&&Array.isArray(t)){const a=wt(e),i=wt(t);if(!Lt(a,i))throw new Error(`Arrays have different shapes. Actual: [${a}]. Expected: [${i}]`)}const s=Q(e)?e:Jt(e),o=Q(t)?t:Jt(t);if(s.length!==o.length)throw new Error(`Arrays have different lengths actual: ${s.length} vs expected: ${o.length}.
Actual:   ${s}.
Expected: ${o}.`);for(let a=0;a<o.length;++a){const i=s[a],c=o[a];if(!n(i,c))throw new Error(`Arrays differ: actual[${a}] = ${i}, expected[${a}] = ${c}.
Actual:   ${s}.
Expected: ${o}.`)}typeof expect<"u"&&expect().nothing()}function up(e,t){e().then(()=>t.fail(),()=>t()),typeof expect<"u"&&expect().nothing()}function hp(e,t){const n=typeof t=="string"||typeof t=="number"||typeof t=="boolean"?[t]:t;return Mt(e)||Mt(e[0])||Mt(t)||Mt(t[0])?fr(e,n,(r,s)=>r==s):fr(e,t,(r,s)=>Or(r,s,0))}function fp(e,t,n){if(n==null&&(n=Pr()),!Or(e,t,n))throw new Error(`Numbers differ: actual === ${e}, expected === ${t}`);typeof expect<"u"&&expect().nothing()}function Or(e,t,n){return!isFinite(e)&&!isFinite(t)?!0:!(isNaN(e)||isNaN(t)||Math.abs(e-t)>n)}function dp(e,t,n){for(let r=0;r<e.length;r++)if(e[r]<t||e[r]>n)throw new Error(`Value out of range:${e[r]} low: ${t}, high: ${n}`)}function pp(e,t){const n=new Float32Array(e),r=new Float32Array(t);if(n.length!==r.length)throw new Error(`Expected ArrayBuffer to be of length ${r.length}, but it was ${n.length}`);for(let s=0;s<r.length;s++)if(n[s]!==r[s])throw new Error(`Expected ArrayBuffer value at ${s} to be ${r[s]} but got ${n[s]} instead`)}function kc(e){for(let t=0;t<e.length;t++){const n=e[t];Array.isArray(n)?kc(n):e[t]=Ue(n)}return e}function gp(e){const t=document.createElement("video");return"playsInline"in t&&(t.playsInline=!0),t.muted=!0,t.loop=!0,t.style.position="fixed",t.style.left="0px",t.style.top="0px",t.preload="auto",t.appendChild(e),new Promise(n=>{t.addEventListener("loadeddata",r=>n(t)),t.load()})}async function mp(e){await e.play(),"requestVideoFrameCallback"in e&&await new Promise(t=>{e.requestVideoFrameCallback(t)})}const bp=Object.freeze(Object.defineProperty({__proto__:null,TEST_EPSILON_FLOAT16:$c,createVideoElement:gp,encodeStrings:kc,expectArrayBuffersEqual:pp,expectArraysClose:lp,expectArraysEqual:hp,expectNumbersClose:fp,expectPromiseToFail:up,expectValuesInRange:dp,play:mp,testEpsilon:Pr},Symbol.toStringTag,{value:"Module"}));/** @license See the LICENSE file. */const wp="3.21.0";/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function yp(e,t){let n=f(e,"a","add"),r=f(t,"b","add");[n,r]=V(n,r);const s={a:n,b:r};return m.runKernel($r,s)}const _=g({add_:yp});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $p(e,t){let n=f(e,"a","floorDiv"),r=f(t,"b","floorDiv");[n,r]=V(n,r);const s={a:n,b:r};return m.runKernel(jo,s)}const Lr=g({floorDiv_:$p});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function kp(e,t){let n=f(e,"a","div"),r=f(t,"b","div");if([n,r]=V(n,r),n.dtype==="int32"&&r.dtype==="int32")return Lr(n,r);const s={a:n,b:r},o={};return m.runKernel(Ro,s,o)}const K=g({div_:kp});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ep(e,t){let n=f(e,"a","mul"),r=f(t,"b","mul");[n,r]=V(n,r);const s={a:n,b:r};return m.runKernel(Ia,s)}const x=g({mul_:Ep});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Sp(e){const t=f(e,"x","abs");if(t.dtype==="complex64"){const n={x:t};return m.runKernel(bo,n)}else{const n={x:t};return m.runKernel(js,n)}}const ct=g({abs_:Sp});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xp(e){const n={x:f(e,"x","acos")};return m.runKernel(Xs,n)}const Ec=g({acos_:xp});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function vp(e){const n={x:f(e,"x","acosh")};return m.runKernel(Ys,n)}const Sc=g({acosh_:vp});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ip(e){p(Array.isArray(e),()=>"The argument passed to tf.addN() must be a list of tensors"),p(e.length>=1,()=>`Must pass at least one tensor to tf.addN(), but got ${e.length}`);const t=e.map((s,o)=>f(s,`tensors${o}`,"addN")),n=t[0];t.forEach(s=>{if(s.dtype!==n.dtype)throw new Error("All tensors passed to tf.addN() must have the same dtype")}),t.forEach(s=>{if(!Lt(s.shape,n.shape))throw new Error("All tensors passed to tf.addN() must have the same shape")});const r=t;return m.runKernel(Js,r)}const xc=g({addN_:Ip});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Tp(e,t=null,n=!1){const s={x:f(e,"x","all","bool")},o={axis:t,keepDims:n};return m.runKernel(Zs,s,o)}const vc=g({all_:Tp});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _p(e,t=null,n=!1){const s={x:f(e,"x","any","bool")},o={axis:t,keepDims:n};return m.runKernel(Qs,s,o)}const Ic=g({any_:_p});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ap(e,t=0){const r={x:f(e,"x","argMax")},s={axis:t};return m.runKernel(to,r,s)}const Tc=g({argMax_:Ap});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Dp(e,t=0){const r={x:f(e,"x","argMin")},s={axis:t};return m.runKernel(eo,r,s)}const _c=g({argMin_:Dp});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Mp(e){const n={x:f(e,"x","asin")};return m.runKernel(no,n)}const Ac=g({asin_:Mp});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Np(e){const n={x:f(e,"x","asinh")};return m.runKernel(ro,n)}const Dc=g({asinh_:Np});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Bp(e){const n={x:f(e,"x","atan")};return m.runKernel(so,n)}const Mc=g({atan_:Bp});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Cp(e,t){let n=f(e,"a","atan2"),r=f(t,"b","atan2");[n,r]=V(n,r);const s={a:n,b:r};return m.runKernel(ao,s)}const Nc=g({atan2_:Cp});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Fp(e){const n={x:f(e,"x","atanh")};return m.runKernel(oo,n)}const Bc=g({atanh_:Fp});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Rp(e,t,n,r,s="NHWC",o){const a=e[3],i=[...t,a],c=Rc(s);return He(e,i,n,o,r,null,null,c)}function Cc(e,t,n,r,s,o,a="channelsLast"){const[i,c]=gn(t);let l;if(a==="channelsLast")l=[i,c,e[3],e[3]];else if(a==="channelsFirst")l=[i,c,e[1],e[1]];else throw new Error(`Unknown dataFormat ${a}`);return He(e,l,n,r,s,o,!1,a)}function Pp(e,t,n,r,s,o,a="NDHWC"){const[i,c,l]=dr(t);let h,u;if(a==="NDHWC")u="channelsLast",h=[i,c,l,e[4],e[4]];else if(a==="NCDHW")u="channelsFirst",h=[i,c,l,e[1],e[1]];else throw new Error(`Unknown dataFormat ${a}`);return Fc(e,h,n,r,s,!1,u,o)}function He(e,t,n,r,s,o,a=!1,i="channelsLast"){let[c,l,h,u]=[-1,-1,-1,-1];if(i==="channelsLast")[c,l,h,u]=e;else if(i==="channelsFirst")[c,u,l,h]=e;else throw new Error(`Unknown dataFormat ${i}`);const[d,b,,w]=t,[y,$]=gn(n),[S,A]=gn(r),E=he(d,S),v=he(b,A),{padInfo:I,outHeight:T,outWidth:B}=Wp(s,l,h,y,$,E,v,o,i),C=a?w*u:w;let D;return i==="channelsFirst"?D=[c,C,T,B]:i==="channelsLast"&&(D=[c,T,B,C]),{batchSize:c,dataFormat:i,inHeight:l,inWidth:h,inChannels:u,outHeight:T,outWidth:B,outChannels:C,padInfo:I,strideHeight:y,strideWidth:$,filterHeight:d,filterWidth:b,effectiveFilterHeight:E,effectiveFilterWidth:v,dilationHeight:S,dilationWidth:A,inShape:e,outShape:D,filterShape:t}}function Fc(e,t,n,r,s,o=!1,a="channelsLast",i){let[c,l,h,u,d]=[-1,-1,-1,-1,-1];if(a==="channelsLast")[c,l,h,u,d]=e;else if(a==="channelsFirst")[c,d,l,h,u]=e;else throw new Error(`Unknown dataFormat ${a}`);const[b,w,y,,$]=t,[S,A,E]=dr(n),[v,I,T]=dr(r),B=he(b,v),C=he(w,I),D=he(y,T),{padInfo:R,outDepth:F,outHeight:Y,outWidth:Z}=Kp(s,l,h,u,S,A,E,B,C,D,i),tt=o?$*d:$;let it;return a==="channelsFirst"?it=[c,tt,F,Y,Z]:a==="channelsLast"&&(it=[c,F,Y,Z,tt]),{batchSize:c,dataFormat:a,inDepth:l,inHeight:h,inWidth:u,inChannels:d,outDepth:F,outHeight:Y,outWidth:Z,outChannels:tt,padInfo:R,strideDepth:S,strideHeight:A,strideWidth:E,filterDepth:b,filterHeight:w,filterWidth:y,effectiveFilterDepth:B,effectiveFilterHeight:C,effectiveFilterWidth:D,dilationDepth:v,dilationHeight:I,dilationWidth:T,inShape:e,outShape:it,filterShape:t}}function Op(e,t,n,r,s){r==null&&(r=Wr(e,t,n));const o=e[0],a=e[1],i=jt((o-t+2*r)/n+1,s),c=jt((a-t+2*r)/n+1,s);return[i,c]}function Lp(e,t,n,r,s,o){s==null&&(s=Wr(e,t,r));const a=e[0],i=e[1],c=e[2],l=jt((a-t+2*s)/r+1,o),h=jt((i-t+2*s)/r+1,o),u=jt((c-t+2*s)/r+1,o);return[l,h,u,n]}function Wr(e,t,n,r=1){const s=he(t,r);return Math.floor((e[0]*(n-1)-n+s)/2)}function gn(e){return typeof e=="number"?[e,e,e]:e.length===2?[e[0],e[1],1]:e}function dr(e){return typeof e=="number"?[e,e,e]:e}function he(e,t){return t<=1?e:e+(e-1)*(t-1)}function Wp(e,t,n,r,s,o,a,i,c){let l,h,u;if(typeof e=="number"){l={top:e,bottom:e,left:e,right:e,type:e===0?"VALID":"NUMBER"};const b=Op([t,n],o,r,e,i);h=b[0],u=b[1]}else if(e==="same"){h=Math.ceil(t/r),u=Math.ceil(n/s);const d=Math.max(0,(h-1)*r+o-t),b=Math.max(0,(u-1)*s+a-n),w=Math.floor(d/2),y=d-w,$=Math.floor(b/2),S=b-$;l={top:w,bottom:y,left:$,right:S,type:"SAME"}}else if(e==="valid")l={top:0,bottom:0,left:0,right:0,type:"VALID"},h=Math.ceil((t-o+1)/r),u=Math.ceil((n-a+1)/s);else if(typeof e=="object"){const d=c==="channelsLast"?e[1][0]:e[2][0],b=c==="channelsLast"?e[1][1]:e[2][1],w=c==="channelsLast"?e[2][0]:e[3][0],y=c==="channelsLast"?e[2][1]:e[3][1];l={top:d,bottom:b,left:w,right:y,type:d===0&&b===0&&w===0&&y===0?"VALID":"EXPLICIT"},h=jt((t-o+d+b)/r+1,i),u=jt((n-a+w+y)/s+1,i)}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:l,outHeight:h,outWidth:u}}function Kp(e,t,n,r,s,o,a,i,c,l,h){let u,d,b,w;if(typeof e=="number"){u={top:e,bottom:e,left:e,right:e,front:e,back:e,type:e===0?"VALID":"NUMBER"};const $=Lp([t,n,r,1],i,1,s,e,h);d=$[0],b=$[1],w=$[2]}else if(e==="same"){d=Math.ceil(t/s),b=Math.ceil(n/o),w=Math.ceil(r/a);const y=(d-1)*s+i-t,$=(b-1)*o+c-n,S=(w-1)*a+l-r,A=Math.floor(y/2),E=y-A,v=Math.floor($/2),I=$-v,T=Math.floor(S/2),B=S-T;u={top:v,bottom:I,left:T,right:B,front:A,back:E,type:"SAME"}}else if(e==="valid")u={top:0,bottom:0,left:0,right:0,front:0,back:0,type:"VALID"},d=Math.ceil((t-i+1)/s),b=Math.ceil((n-c+1)/o),w=Math.ceil((r-l+1)/a);else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:u,outDepth:d,outHeight:b,outWidth:w}}function jt(e,t){if(!t)return Math.trunc(e);switch(t){case"round":return Math.round(e);case"ceil":return Math.ceil(e);case"floor":return Math.floor(e);default:throw new Error(`Unknown roundingMode ${t}`)}}function Oe(e){const[t,n,r]=gn(e);return t===1&&n===1&&r===1}function vt(e,t){return Oe(e)||Oe(t)}function Rc(e){if(e==="NHWC")return"channelsLast";if(e==="NCHW")return"channelsFirst";throw new Error(`Unknown dataFormat ${e}`)}function pt(e,t,n){if(n!=null){if(typeof t=="string")throw Error(`Error in ${e}: pad must be an integer when using dimRoundingMode ${n} but got pad ${t}.`);if(typeof t=="number")p(pe(t),()=>`Error in ${e}: pad must be an integer when using dimRoundingMode ${n} but got pad ${t}.`);else if(typeof t=="object")t.forEach(r=>{r.forEach(s=>{p(pe(s),()=>`Error in ${e}: pad must be an integer when using dimRoundingMode ${n} but got pad ${s}.`)})});else throw Error(`Error in ${e}: Unknown padding parameter: ${t}`)}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Gp(e,t){const r={x:f(e,"x","reshape","string_or_numeric")},s={shape:t};return m.runKernel(za,r,s)}const k=g({reshape_:Gp});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qp(e,t,n,r,s){const o=f(e,"x","avgPool","float32"),a=1;p(vt(n,a),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${n} and dilations '${a}'`);let i=o,c=!1;o.rank===3&&(c=!0,i=k(o,[1,o.shape[0],o.shape[1],o.shape[2]])),p(i.rank===4,()=>`Error in avgPool: x must be rank 4 but got rank ${i.rank}.`),pt("avgPool",r,s);const l={x:i},h={filterSize:t,strides:n,pad:r,dimRoundingMode:s};let u=m.runKernel(io,l,h);return u=z(u,o.dtype),c?k(u,[u.shape[1],u.shape[2],u.shape[3]]):u}const Kr=g({avgPool_:qp});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Up(e,t,n,r,s,o="NDHWC"){const a=f(e,"x","avgPool3d","float32");let i=a,c=!1;a.rank===4&&(c=!0,i=k(a,[1,a.shape[0],a.shape[1],a.shape[2],a.shape[3]])),p(i.rank===5,()=>`Error in avgPool3d: x must be rank 5 but got rank ${i.rank}.`),p(o==="NDHWC",()=>`Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of ${o}`),pt("avgPool3d",r,s);const l={x:i},h={filterSize:t,strides:n,pad:r,dimRoundingMode:s,dataFormat:o};let u=m.runKernel(co,l,h);return u=z(u,i.dtype),c?k(u,[u.shape[1],u.shape[2],u.shape[3],u.shape[4]]):u}const Pc=g({avgPool3d_:Up});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zp(e,t=0){p(e.length>=1,()=>"Pass at least one tensor to concat");const n=Re(e,"tensors","concat","string_or_numeric");if(n[0].dtype==="complex64"&&n.forEach(o=>{if(o.dtype!=="complex64")throw new Error(`Cannot concatenate complex64 tensors with a tensor
          with dtype ${o.dtype}. `)}),n.length===1)return Ft(n[0]);const r=n,s={axis:t};return m.runKernel(wo,r,s)}const at=g({concat_:zp});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Vp(e){const n={x:f(e,"x","sigmoid","float32")};return m.runKernel(ai,n)}const Xt=g({sigmoid_:Vp});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Hp(e,t,n){const r=f(e,"x","slice","string_or_numeric");if(r.rank===0)throw new Error("Slicing scalar is not possible");const s={x:r},o={begin:t,size:n};return m.runKernel(ni,s,o)}const G=g({slice_:Hp});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function jp(e){const n={x:f(e,"x","tanh","float32")};return m.runKernel(vi,n)}const mn=g({tanh_:jp});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Xp(e,t,n,r,s,o){const a=f(e,"forgetBias","basicLSTMCell"),i=f(t,"lstmKernel","basicLSTMCell"),c=f(n,"lstmBias","basicLSTMCell"),l=f(r,"data","basicLSTMCell"),h=f(s,"c","basicLSTMCell"),u=f(o,"h","basicLSTMCell"),d=at([l,u],1),b=P(d,i),w=_(b,c),y=w.shape[0],$=w.shape[1]/4,S=[y,$],A=G(w,[0,0],S),E=G(w,[0,$],S),v=G(w,[0,$*2],S),I=G(w,[0,$*3],S),T=_(x(Xt(A),mn(E)),x(h,Xt(_(a,v)))),B=x(mn(T),Xt(I));return[T,B]}const Oc=g({basicLSTMCell_:Xp});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Yp(e,t,n){const r=f(e,"x","batchToSpaceND"),s=t.reduce((i,c)=>i*c);p(r.rank>=1+t.length,()=>`input rank is ${r.rank} but should be > than blockShape.length ${t.length}`),p(n.length===t.length,()=>`crops.length is ${n.length} but should be equal to blockShape.length  ${t.length}`),p(r.shape[0]%s===0,()=>`input tensor batch is ${r.shape[0]} but is not divisible by the product of the elements of blockShape ${t.join(" * ")} === ${s}`);const o={x:r},a={blockShape:t,crops:n};return m.runKernel(uo,o,a)}const Gr=g({batchToSpaceND_:Yp});function Jp(e){let t;return e.rank===0||e.rank===1?t=k(e,[1,1,1,e.size]):e.rank===2?t=k(e,[1,1,e.shape[0],e.shape[1]]):e.rank===3?t=k(e,[1,e.shape[0],e.shape[1],e.shape[2]]):t=e,t}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Zp(e,t,n,r,s,o){o==null&&(o=.001);const a=f(e,"x","batchNorm"),i=f(t,"mean","batchNorm"),c=f(n,"variance","batchNorm");let l;s!=null&&(l=f(s,"scale","batchNorm"));let h;r!=null&&(h=f(r,"offset","batchNorm")),p(i.rank===c.rank,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),p(h==null||i.rank===h.rank,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),p(l==null||i.rank===l.rank,()=>"Batch normalization gradient requires mean and scale to have equal ranks.");const d={x:Jp(a),scale:l,offset:h,mean:i,variance:c},b={varianceEpsilon:o},w=m.runKernel(Xo,d,b);return k(w,a.shape)}const je=g({batchNorm_:Zp});function Qp(e,t,n,r,s,o){const a=f(e,"x","batchNorm"),i=f(t,"mean","batchNorm"),c=f(n,"variance","batchNorm");let l;s!=null&&(l=f(s,"scale","batchNorm"));let h;return r!=null&&(h=f(r,"offset","batchNorm")),p(a.rank===2,()=>`Error in batchNorm2D: x must be rank 2 but got rank ${a.rank}.`),p(i.rank===2||i.rank===1,()=>`Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank ${i.rank}.`),p(c.rank===2||c.rank===1,()=>`Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank ${c.rank}.`),l!=null&&p(l.rank===2||l.rank===1,()=>`Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank ${l.rank}.`),h!=null&&p(h.rank===2||h.rank===1,()=>`Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank ${h.rank}.`),je(a,i,c,h,l,o)}const Lc=g({batchNorm2d_:Qp});function tg(e,t,n,r,s,o){const a=f(e,"x","batchNorm"),i=f(t,"mean","batchNorm"),c=f(n,"variance","batchNorm");let l;s!=null&&(l=f(s,"scale","batchNorm"));let h;return r!=null&&(h=f(r,"offset","batchNorm")),p(a.rank===3,()=>`Error in batchNorm3D: x must be rank 3 but got rank ${a.rank}.`),p(i.rank===3||i.rank===1,()=>`Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank ${i.rank}.`),p(c.rank===3||c.rank===1,()=>`Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank ${c.rank}.`),l!=null&&p(l.rank===3||l.rank===1,()=>`Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank ${l.rank}.`),h!=null&&p(h.rank===3||h.rank===1,()=>`Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank ${h.rank}.`),je(a,i,c,h,l,o)}const Wc=g({batchNorm3d_:tg});function eg(e,t,n,r,s,o){const a=f(e,"x","batchNorm"),i=f(t,"mean","batchNorm"),c=f(n,"variance","batchNorm");let l;s!=null&&(l=f(s,"scale","batchNorm"));let h;return r!=null&&(h=f(r,"offset","batchNorm")),p(a.rank===4,()=>`Error in batchNorm4D: x must be rank 4 but got rank ${a.rank}.`),p(i.rank===4||i.rank===1,()=>`Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank ${i.rank}.`),p(c.rank===4||c.rank===1,()=>`Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank ${c.rank}.`),l!=null&&p(l.rank===4||l.rank===1,()=>`Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank ${l.rank}.`),h!=null&&p(h.rank===4||h.rank===1,()=>`Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank ${h.rank}.`),je(a,i,c,h,l,o)}const Kc=g({batchNorm4d_:eg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ng(e,t,n){const r=f(e,"x","bincount"),s=f(t,"weights","bincount");p(r.dtype==="int32",()=>`Error in bincount: input dtype must be int32, but got ${r.dtype}`),p(n>=0,()=>`size must be non-negative, but got ${n}.`),p(s.size===r.size||s.size===0,()=>`Error in bincount: weights must have the same size as input or0-length, but got input shape: ${r.shape}, weights shape: ${s.shape}.`);const o={x:r,weights:s},a={size:n};return m.runKernel(ho,o,a)}const qr=g({bincount_:ng});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function rg(e,t){const n=f(e,"s0","broadcastArgs","int32"),r=f(t,"s1","broadcastArgs","int32");if(n.rank!==1)throw new Error(`broadcastArgs(): first input must be a vector (rank=1). Has rank ${n.rank}`);if(r.rank!==1)throw new Error(`broadcastArgs(): second input must be a vector (rank=1). Has rank ${r.rank}`);const s={s0:n,s1:r};return m.runKernel(fo,s)}const Gc=g({broadcastArgs_:rg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function sg(e,t){let n=f(e,"broadcastTo","x");const r=n.shape;if(t.some(l=>!(l>0)||l%1!==0))throw new Error(`broadcastTo(): Invalid broadcast shape [${t}].`);if(t.length<n.rank)throw new Error(`broadcastTo(): shape.length=${t.length} < input.rank=${n.rank}.`);if(t.length>n.rank){const l=n.shape.slice();for(;l.length<t.length;)l.unshift(1);n=k(n,l)}const s=n.shape,o=Array.from(t);for(let l=t.length-1;l>=0;l--)if(s[l]===t[l])o[l]=1;else if(n.shape[l]!==1)throw new Error(`broadcastTo(): [${r}] cannot be broadcast to [${t}].`);if(o.map((l,h)=>l>1?h:-1).filter(l=>l>=0).length===0)return Ft(n);const i={x:n},c={reps:o};return m.runKernel(Sr,i,c)}const Me=g({broadcastTo_:sg});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function og(e){const n={x:f(e,"x","ceil","float32")};return m.runKernel(po,n)}const qc=g({ceil_:og});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xe(e,t,n){const r={shape:e,value:t,dtype:n};return m.runKernel(zo,{},r)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ag(e,t,n){const r=f(e,"x","clipByValue");if(p(t<=n,()=>`Error in clip: min (${t}) must be less than or equal to max (${n}).`),t===n)return xe(r.shape,t,r.dtype);const s={x:r},o={clipValueMin:t,clipValueMax:n};return m.runKernel(go,s,o)}const Uc=g({clipByValue_:ag});function ig(e){return at(e,0)}const zc=g({concat1d_:ig});function cg(e,t){return at(e,t)}const Vc=g({concat2d_:cg});function lg(e,t){return at(e,t)}const Hc=g({concat3d_:lg});function ug(e,t){return at(e,t)}const jc=g({concat4d_:ug});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hg(e,t,n,r,s="NHWC",o=[1,1],a){const i=f(e,"x","conv2d","float32"),c=f(t,"filter","conv2d","float32");let l=i,h=!1;i.rank===3&&(h=!0,l=k(i,[1,i.shape[0],i.shape[1],i.shape[2]])),p(l.rank===4,()=>`Error in conv2d: input must be rank 4, but got rank ${l.rank}.`),p(c.rank===4,()=>`Error in conv2d: filter must be rank 4, but got rank ${c.rank}.`),pt("conv2d",r,a);const u=s==="NHWC"?l.shape[3]:l.shape[1];p(u===c.shape[2],()=>`Error in conv2d: depth of input (${u}) must match input depth for filter ${c.shape[2]}.`),p(vt(n,o),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${n} and dilations '${o}'`);const d={x:l,filter:c},b={strides:n,pad:r,dataFormat:s,dilations:o,dimRoundingMode:a},w=m.runKernel(yo,d,b);return h?k(w,[w.shape[1],w.shape[2],w.shape[3]]):w}const Xe=g({conv2d_:hg});function fg(e,t,n,r,s="NWC",o=1,a){const i=f(e,"x","conv1d"),c=f(t,"filter","conv1d");let l=i,h=!1;i.rank===2&&(h=!0,l=k(i,[1,i.shape[0],i.shape[1]])),p(l.rank===3,()=>`Error in conv1d: input must be rank 3, but got rank ${l.rank}.`),p(c.rank===3,()=>`Error in conv1d: filter must be rank 3, but got rank ${c.rank}.`),pt("conv1d",r,a),p(l.shape[2]===c.shape[1],()=>`Error in conv1d: depth of input (${l.shape[2]}) must match input depth for filter ${c.shape[1]}.`),p(vt(n,o),()=>`Error in conv1D: Either stride or dilation must be 1. Got stride ${n} and dilation '${o}'`),p(s==="NWC",()=>`Error in conv1d: got dataFormat of ${s} but only NWC is currently supported.`);const u=k(c,[1,c.shape[0],c.shape[1],c.shape[2]]),d=k(l,[l.shape[0],1,l.shape[1],l.shape[2]]),$=Xe(d,u,[1,n],r,"NHWC",[1,o],a);return h?k($,[$.shape[2],$.shape[3]]):k($,[$.shape[0],$.shape[2],$.shape[3]])}const Xc=g({conv1d_:fg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function dg(e,t,n,r,s,o="NHWC",a){p(e.length===t.rank,()=>`Length of inShape (${e.length}) and rank of dy (${t.rank}) must match`);let i=e,c=t,l=!1;t.rank===3&&(l=!0,c=k(t,[1,t.shape[0],t.shape[1],t.shape[2]]),i=[1,e[0],e[1],e[2]]),p(i.length===4,()=>`Error in conv2dDerInput: inShape must be length 4, but got length ${i.length}.`),p(c.rank===4,()=>`Error in conv2dDerInput: dy must be rank 4, but got rank ${c.rank}`),p(n.rank===4,()=>`Error in conv2dDerInput: filter must be rank 4, but got rank ${n.rank}`);const h=o==="NHWC"?i[3]:i[1],u=o==="NHWC"?c.shape[3]:c.shape[1];p(h===n.shape[2],()=>`Error in conv2dDerInput: depth of input (${h}) must match input depth for filter ${n.shape[2]}.`),p(u===n.shape[3],()=>`Error in conv2dDerInput: depth of output (${u}) must match output depth for filter ${n.shape[3]}.`),pt("conv2dDerInput",s,a);const d={dy:c,filter:n},b={strides:r,pad:s,dataFormat:o,dimRoundingMode:a,inputShape:i},w=m.runKernel(ko,d,b);return l?k(w,[w.shape[1],w.shape[2],w.shape[3]]):w}const Yc=g({conv2DBackpropInput_:dg});function pg(e,t,n,r,s,o){const a=f(e,"x","conv2dTranspose"),i=f(t,"filter","conv2dTranspose");return Yc(n,a,i,r,s,"NHWC",o)}const Jc=g({conv2dTranspose_:pg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gg(e,t,n,r,s="NDHWC",o=[1,1,1]){const a=f(e,"x","conv3d"),i=f(t,"filter","conv3d");let c=a,l=!1;a.rank===4&&(l=!0,c=k(a,[1,a.shape[0],a.shape[1],a.shape[2],a.shape[3]])),p(c.rank===5,()=>`Error in conv3d: input must be rank 5, but got rank ${c.rank}.`),p(i.rank===5,()=>`Error in conv3d: filter must be rank 5, but got rank ${i.rank}.`),p(c.shape[4]===i.shape[3],()=>`Error in conv3d: depth of input (${c.shape[4]}) must match input depth for filter ${i.shape[3]}.`),p(vt(n,o),()=>`Error in conv3D: Either strides or dilations must be 1. Got strides ${n} and dilations '${o}'`),p(s==="NDHWC",()=>`Error in conv3d: got dataFormat of ${s} but only NDHWC is currently supported.`);const h={x:c,filter:i},u={strides:n,pad:r,dataFormat:s,dilations:o},d=m.runKernel(Eo,h,u);return l?k(d,[d.shape[1],d.shape[2],d.shape[3],d.shape[4]]):d}const Zc=g({conv3d_:gg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function mg(e,t,n,r,s){p(e.length===t.rank,()=>`Length of inShape (${e.length}) and rank of dy (${t.rank}) must match`);let o=e,a=t,i=!1;t.rank===4&&(i=!0,a=k(t,[1,t.shape[0],t.shape[1],t.shape[2],t.shape[3]]),o=[1,e[0],e[1],e[2],e[3]]);const c=o[4],l=a.shape[4];p(o.length===5,()=>`Error in conv3dDerInput: inShape must be length 5, but got length ${o.length}.`),p(a.rank===5,()=>`Error in conv3dDerInput: dy must be rank 5, but got rank ${a.rank}`),p(n.rank===5,()=>`Error in conv3dDerInput: filter must be rank 5, but got rank ${n.rank}`),p(c===n.shape[3],()=>`Error in conv3dDerInput: depth of input (${c}) must match input depth for filter ${n.shape[3]}.`),p(l===n.shape[4],()=>`Error in conv3dDerInput: depth of output (${l}) must match output depth for filter ${n.shape[4]}.`);const h={dy:a,filter:n},u={pad:s,strides:r,inputShape:o},d=m.runKernel(So,h,u);return i?k(d,[d.shape[1],d.shape[2],d.shape[3],d.shape[4]]):d}const bg=g({conv3DBackpropInput_:mg});function wg(e,t,n,r,s){const o=f(e,"x","conv3dTranspose"),a=f(t,"filter","conv3dTranspose");return bg(n,o,a,r,s)}const Qc=g({conv3dTranspose_:wg});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function yg(e){const n={x:f(e,"x","cos","float32")};return m.runKernel(xo,n)}const tl=g({cos_:yg});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $g(e){const n={x:f(e,"x","cosh","float32")};return m.runKernel(vo,n)}const el=g({cosh_:$g});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function kg(e,t=0,n=!1,r=!1){const o={x:f(e,"x","cumprod")},a={axis:t,exclusive:n,reverse:r};return m.runKernel(Io,o,a)}const nl=g({cumprod_:kg});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Eg(e,t=0,n=!1,r=!1){const o={x:f(e,"x","cumsum")},a={axis:t,exclusive:n,reverse:r};return m.runKernel(To,o,a)}const rl=g({cumsum_:Eg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Sg(e,t,n,r=!1){const s=f(e,"x","denseBincount"),o=f(t,"weights","denseBincount");p(s.dtype==="int32",()=>`Error in denseBincount: input dtype must be int32, but got ${s.dtype}`),p(s.rank<=2,()=>`Error in denseBincount: input must be at most rank 2, but got rank ${s.rank}.`),p(n>=0,()=>`size must be non-negative, but got ${n}.`),p(o.size===s.size||o.size===0,()=>`Error in denseBincount: weights must have the same shape as x or 0-length, but got x shape: ${s.shape}, weights shape: ${o.shape}.`);const a={x:s,weights:o},i={size:n,binaryOutput:r};return m.runKernel(Ao,a,i)}const sl=g({denseBincount_:Sg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xg(e,t,n="NHWC"){const r=f(e,"x","depthToSpace","float32"),s=n==="NHWC"?r.shape[1]:r.shape[2],o=n==="NHWC"?r.shape[2]:r.shape[3],a=n==="NHWC"?r.shape[3]:r.shape[1];p(t>1,()=>`blockSize should be > 1 for depthToSpace, but was: ${t}`),p(s*t>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${s} and ${t}  for depthToSpace with input shape
    ${r.shape}`),p(o*t>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${o} and ${t} for depthToSpace with input shape
        ${r.shape}`),p(a%(t*t)===0,()=>`Dimension size must be evenly divisible by ${t*t} but is ${a} for depthToSpace with input shape ${r.shape}`);const i={x:r},c={blockSize:t,dataFormat:n};return m.runKernel(Do,i,c)}const ol=g({depthToSpace_:xg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function vg(e,t,n,r,s="NHWC",o=[1,1],a){const i=f(e,"x","depthwiseConv2d","float32"),c=f(t,"filter","depthwiseConv2d","float32");let l=i,h=!1;i.rank===3&&(h=!0,l=k(i,[1,i.shape[0],i.shape[1],i.shape[2]])),p(l.rank===4,()=>`Error in depthwiseConv2d: input must be rank 4, but got rank ${l.rank}.`),p(c.rank===4,()=>`Error in depthwiseConv2d: filter must be rank 4, but got rank ${c.rank}.`);const u=s==="NHWC"?l.shape[3]:l.shape[1];p(u===c.shape[2],()=>`Error in depthwiseConv2d: number of input channels (${u}) must match the inChannels dimension in filter ${c.shape[2]}.`),pt("depthwiseConv2d",r,a);const d={x:l,filter:c},b={strides:n,pad:r,dataFormat:s,dilations:o,dimRoundingMode:a},w=m.runKernel(Mo,d,b);return h?k(w,[w.shape[1],w.shape[2],w.shape[3]]):w}const En=g({depthwiseConv2d_:vg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ig(e){const n={x:f(e,"x","diag")};return m.runKernel(Co,n)}const al=g({diag_:Ig});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Tg(e,t,n,r,s=[1,1],o="NHWC"){const a=f(e,"x","dilation2d"),i=f(t,"filter","dilation2d");p(a.rank===3||a.rank===4,()=>`Error in dilation2d: input must be rank 3 or 4, but got rank ${a.rank}.`),p(i.rank===3,()=>`Error in dilation2d: filter must be rank 3, but got rank ${i.rank}.`),p(o==="NHWC",()=>`Error in dilation2d: Only NHWC is currently supported, but got dataFormat of ${o}`);let c=a,l=!1;a.rank===3&&(c=k(a,[1,a.shape[0],a.shape[1],a.shape[2]]),l=!0);const h={x:c,filter:i},u={strides:n,pad:r,dilations:s},d=m.runKernel(Fo,h,u);return l?k(d,[d.shape[1],d.shape[2],d.shape[3]]):d}const il=g({dilation2d_:Tg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _g(e,t){let n=f(e,"a","equal","string_or_numeric"),r=f(t,"b","equal","string_or_numeric");[n,r]=V(n,r),X(n.shape,r.shape);const s={a:n,b:r};return m.runKernel(Wo,s)}const Ur=g({equal_:_g});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ag(e,t,n){const r=f(t,"a","where"),s=f(n,"b","where"),o=f(e,"condition","where","bool"),a=X(X(o.shape,r.shape),s.shape),i=Me(o,a),c=Me(r,a),l=Me(s,a),h={condition:i,t:c,e:l};return m.runKernel(ti,h)}const ee=g({where_:Ag});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Dg(e){const n={x:f(e,"x","zerosLike")};return m.runKernel(Mi,n)}const lt=g({zerosLike_:Dg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Mg(e,t){let n=f(e,"a","div"),r=f(t,"b","div");[n,r]=V(n,r);const s=K(n,r),o=lt(s),a=Ur(r,o);return ee(a,o,s)}const cl=g({divNoNan_:Mg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ng(e,t){const n=f(e,"t1","dot"),r=f(t,"t2","dot");p((n.rank===1||n.rank===2)&&(r.rank===1||r.rank===2),()=>`Error in dot: inputs must all be rank 1 or 2, but got ranks ${n.rank} and ${r.rank}.`);const s=n.rank===1?n.size:n.shape[1],o=r.rank===1?r.size:r.shape[0];if(p(s===o,()=>`Error in dot: inner dimensions of inputs must match, but got ${s} and ${o}.`),n.rank===1&&r.rank===1){const a=k(n,[1,-1]),i=k(r,[-1,1]),c=P(a,i);return k(c,[])}else if(n.rank===1&&r.rank===2){const a=k(n,[1,-1]),i=k(r,[r.shape[0],r.shape[1]]),c=P(a,i);return k(c,[c.size])}else if(n.rank===2&&r.rank===1){const a=k(r,[-1,1]),i=P(n,a);return k(i,[i.size])}else{const a=k(r,[r.shape[0],r.shape[1]]);return P(n,a)}}const ll=g({dot_:Ng});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Bg(e,...t){const n=t.map((s,o)=>f(s,`tensors${o}`,"einsum")),r={equation:e};return m.runKernel(Po,n,r)}const ul=g({einsum_:Bg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Cg(e){const n={x:f(e,"x","elu","float32")};return m.runKernel(Oo,n)}const zr=g({elu_:Cg});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Fg(e){let t=f(e,"x","erf");p(t.dtype==="int32"||t.dtype==="float32",()=>"Input dtype must be `int32` or `float32`."),t.dtype==="int32"&&(t=z(t,"float32"));const n={x:t};return m.runKernel(Lo,n)}const hl=g({erf_:Fg});/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Vr(e,t){for(let n=0;n<e.length;++n)if(e[e.length-n-1]!==t-1-n)return!1;return!0}function fl(e,t,n){const r=e.length+t.length,s=[];let o=0,a=0;for(let i=0;i<r;i++)n.indexOf(i)===-1?s.push(e[o++]):s.push(t[a++]);return s}function Rg(e,t){const n=[],r=e.length;for(let o=0;o<r;o++)t.indexOf(o)===-1&&n.push(e[o]);const s=t.map(o=>e[o]);return[n,s]}function Ye(e,t){const n=t.map(r=>1);return fl(e,n,t)}function Pg(e,t,n){p(Vr(t,n),()=>`${e} supports only inner-most axes for now. Got axes ${t} and rank-${n} input.`)}function Og(e,t){if(Vr(e,t))return null;const n=[];for(let r=0;r<t;++r)e.indexOf(r)===-1&&n.push(r);return e.forEach(r=>n.push(r)),n}function Lg(e){return e.map((t,n)=>[n,t]).sort((t,n)=>t[1]-n[1]).map(t=>t[0])}function Wg(e,t){const n=[];for(let r=t-e;r<t;++r)n.push(r);return n}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Kg(e,t=null,n=!1){const s={x:f(e,"x","max")},o={reductionIndices:t,keepDims:n};return m.runKernel(ga,s,o)}const Yt=g({max_:Kg});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Gg(e,t=null,n=!1){const s={x:f(e,"x","min")},o={axis:t,keepDims:n};return m.runKernel(ka,s,o)}const bn=g({min_:Gg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qg(e,t){let n=f(e,"base","pow"),r=f(t,"exp","pow");[n,r]=V(n,r);const s={a:n,b:r};return m.runKernel(Ra,s)}const we=g({pow_:qg});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function O(e,t){if((Q(e)&&t!=="string"||Array.isArray(e))&&t!=="complex64")throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if(t==="string"&&Q(e)&&!(e instanceof Uint8Array))throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return Wt(e,[],[],t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ug(e){const n={x:f(e,"x","sqrt","float32")};return m.runKernel(ci,n)}const $t=g({sqrt_:Ug});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zg(e){const t=f(e,"x","square"),n={};return m.runKernel("Square",{x:t},n)}const dt=g({square_:zg});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Vg(e,t=null,n=!1){let r=f(e,"x","sum");r.dtype==="bool"&&(r=z(r,"int32"));const s={x:r},o={axis:t,keepDims:n};return m.runKernel(li,s,o)}const W=g({sum_:Vg});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Hg(e,t="euclidean",n=null,r=!1){e=f(e,"x","norm");const s=dl(e,t,n);let o=s.shape;if(r){const a=Ge(n,e.shape);o=Ye(s.shape,a)}return k(s,o)}function dl(e,t,n=null){if(e.rank===0)return ct(e);if(e.rank!==1&&n===null)return dl(k(e,[-1]),t,n);if(e.rank===1||typeof n=="number"||Array.isArray(n)&&n.length===1){if(t===1)return W(ct(e),n);if(t===1/0)return Yt(ct(e),n);if(t===-1/0)return bn(ct(e),n);if(t==="euclidean"||t===2)return $t(W(we(ct(e),O(2,"int32")),n));throw new Error(`Error in norm: invalid ord value: ${t}`)}if(Array.isArray(n)&&n.length===2){if(t===1)return Yt(W(ct(e),n[0]),n[1]-1);if(t===1/0)return Yt(W(ct(e),n[1]),n[0]);if(t===-1/0)return bn(W(ct(e),n[1]),n[0]);if(t==="fro"||t==="euclidean")return $t(W(dt(e),n));throw new Error(`Error in norm: invalid ord value: ${t}`)}throw new Error(`Error in norm: invalid axis: ${n}`)}const Je=g({norm_:Hg});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function jg(e,t=null,n=!1){return Je(e,"euclidean",t,n)}const pl=g({euclideanNorm_:jg});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Xg(e){const n={x:f(e,"x","exp")};return m.runKernel(Ko,n)}const Pt=g({exp_:Xg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Yg(e,t=0){const n=f(e,"x","expandDims","string_or_numeric");p(t<=n.rank,()=>"Axis must be <= rank of the tensor");const r={input:n},s={dim:t};return m.runKernel(Go,r,s)}const _t=g({expandDims_:Yg});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Jg(e){const n={x:f(e,"x","expm1")};return m.runKernel(qo,n)}const gl=g({expm1_:Jg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Zg(e,t){const n=f(e,"x","tile","string_or_numeric");p(n.rank===t.length,()=>`Error in transpose: rank of input ${n.rank} must match length of reps ${t}.`);const r={x:n},s={reps:t};return m.runKernel(Sr,r,s)}const fe=g({tile_:Zg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Qg(e,t,n,r="float32"){t==null&&(t=e);const s=yt([e,t],r),o=e<=t?e:t;for(let i=0;i<o;++i)s.set(1,i,i);const a=k(s.toTensor(),[e,t]);if(n==null)return a;if(n.length===1)return fe(_t(a,0),[n[0],1,1]);if(n.length===2)return fe(_t(_t(a,0),0),[n[0],n[1],1,1]);if(n.length===3)return fe(_t(_t(_t(a,0),0),0),[n[0],n[1],n[2],1,1]);throw new Error(`eye() currently supports only 1D and 2D batchShapes, but received ${n.length}D.`)}const Hr=g({eye_:Qg});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function tm(e){const n={x:f(e,"x","floor","float32")};return m.runKernel(Ho,n)}const jr=g({floor_:tm});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function em(e,t,n=0,r=0){const s=f(e,"x","gather"),o=f(t,"indices","gather","int32"),a={x:s,indices:o},i={axis:n,batchDims:r};return m.runKernel(Yo,a,i)}const Xr=g({gather_:em});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function nm(e,t){let n=f(e,"a","greater","string_or_numeric"),r=f(t,"b","greater","string_or_numeric");[n,r]=V(n,r),X(n.shape,r.shape);const s={a:n,b:r};return m.runKernel(Zo,s)}const Ze=g({greater_:nm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function rm(e,t){let n=f(e,"a","greaterEqual","string_or_numeric"),r=f(t,"b","greaterEqual","string_or_numeric");[n,r]=V(n,r),X(n.shape,r.shape);const s={a:n,b:r};return m.runKernel(Qo,s)}const Yr=g({greaterEqual_:rm});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function sm(e){const n={x:f(e,"x","isFinite")};return m.runKernel(na,n)}const ml=g({isFinite_:sm});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function om(e){const n={x:f(e,"x","isInf")};return m.runKernel(ra,n)}const bl=g({isInf_:om});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function am(e){const n={x:f(e,"x","isNaN")};return m.runKernel(sa,n)}const wl=g({isNaN_:am});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function im(e,t=.2){const r={x:f(e,"x","leakyRelu")},s={alpha:t};return m.runKernel(oa,r,s)}const Jr=g({leakyRelu_:im});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function cm(e,t){let n=f(e,"a","less","string_or_numeric"),r=f(t,"b","less","string_or_numeric");[n,r]=V(n,r),X(n.shape,r.shape);const s={a:n,b:r};return m.runKernel(aa,s)}const yl=g({less_:cm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function lm(e,t){let n=f(e,"a","lessEqual","string_or_numeric"),r=f(t,"b","lessEqual","string_or_numeric");[n,r]=V(n,r),X(n.shape,r.shape);const s={a:n,b:r};return m.runKernel(ia,s)}const Sn=g({lessEqual_:lm});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $l(e,t,n){if(n<=0)throw new Error("The number of values should be positive.");const r={start:e,stop:t,num:n};return m.runKernel(ca,{},r)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function um(e,t=5,n=1,r=1,s=.5){const o=f(e,"x","localResponseNormalization");p(o.rank===4||o.rank===3,()=>`Error in localResponseNormalization: x must be rank 3 or 4 but got
               rank ${o.rank}.`),p(pe(t),()=>`Error in localResponseNormalization: depthRadius must be an integer but got depthRadius ${t}.`);let a=o,i=!1;o.rank===3&&(i=!0,a=k(o,[1,o.shape[0],o.shape[1],o.shape[2]]));const c={x:a},l={depthRadius:t,bias:n,alpha:r,beta:s},h=m.runKernel(pa,c,l);return i?k(h,[h.shape[1],h.shape[2],h.shape[3]]):h}const kl=g({localResponseNormalization_:um});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hm(e){const n={x:f(e,"x","log","float32")};return m.runKernel(la,n)}const ye=g({log_:hm});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function fm(e){const n={x:f(e,"x","log1p")};return m.runKernel(ua,n)}const Zr=g({log1p_:fm});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function dm(e){return p(Rt(e),()=>"The f passed in grad(f) must be a function"),(t,n)=>{const r=f(t,"x","tf.grad","string_or_numeric"),s=n!=null?f(n,"dy","tf.grad"):null;return m.tidy(()=>{const{value:o,grads:a}=m.gradients(()=>e(r),[r],s);return s!=null&&st(o.shape,s.shape,"The shape of dy passed in grad(f)(x, dy) must match the shape returned by f(x)"),xn(a),a[0]})}}function pm(e){return p(Rt(e),()=>"The f passed in grads(f) must be a function"),(t,n)=>{p(Array.isArray(t),()=>"The args passed in grads(f)(args) must be an array of `Tensor`s or `TensorLike`s");const r=Re(t,"args","tf.grads","string_or_numeric"),s=n!=null?f(n,"dy","tf.grads"):null;return m.tidy(()=>{const{value:o,grads:a}=m.gradients(()=>e(...r),r,s);return s!=null&&st(o.shape,s.shape,"The shape of dy passed in grads(f)([x1,...], dy) must match the shape returned by f([x1,...])"),xn(a),a})}}function gm(e){return p(Rt(e),()=>"The f passed in valueAndGrad(f) must be a function"),(t,n)=>{p(t instanceof H,()=>"The x passed in valueAndGrad(f)(x) must be a tensor"),p(n==null||n instanceof H,()=>"The dy passed in valueAndGrad(f)(x, dy) must be a tensor");const{grads:r,value:s}=m.gradients(()=>e(t),[t],n);return xn(r),{grad:r[0],value:s}}}function mm(e){return p(Rt(e),()=>"The f passed in valueAndGrads(f) must be a function"),(t,n)=>{p(Array.isArray(t)&&t.every(s=>s instanceof H),()=>"The args passed in valueAndGrads(f)(args) must be array of tensors"),p(n==null||n instanceof H,()=>"The dy passed in valueAndGrads(f)(args, dy) must be a tensor");const r=m.gradients(()=>e(...t),t,n);return n!=null&&st(r.value.shape,n.shape,"The shape of dy passed in valueAndGrads(f)([x1,...], dy) must match the shape returned by f([x1,...])"),xn(r.grads),r}}function El(e,t){p(Rt(e),()=>"The f passed in variableGrads(f) must be a function"),p(t==null||Array.isArray(t)&&t.every(l=>l instanceof Fe),()=>"The varList passed in variableGrads(f, varList) must be an array of variables");const n=t!=null;if(!n){t=[];for(const l in m.registeredVariables)t.push(m.registeredVariables[l])}const r=n?t.filter(l=>!l.trainable):null,s=t.length;t=t.filter(l=>l.trainable),p(t.length>0,()=>`variableGrads() expects at least one of the input variables to be trainable, but none of the ${s} variables is trainable.`);const o=!0,{value:a,grads:i}=m.gradients(e,t,null,o);p(i.some(l=>l!=null),()=>"Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize()."),p(a.rank===0,()=>`The f passed in variableGrads(f) must return a scalar, but it returned a rank-${a.rank} tensor`);const c={};return t.forEach((l,h)=>{i[h]!=null&&(c[l.name]=i[h])}),r!=null&&r.forEach(l=>c[l.name]=null),{value:a,grads:c}}function kt(e){return m.customGrad(e)}function xn(e){if(e.filter(n=>n==null).length>0)throw new Error(`Cannot compute gradient of y=f(x) with respect to x. Make sure that
    the f you passed encloses all operations that lead from x to y.`)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function bm(e){const n={x:f(e,"x","softplus")};return m.runKernel(ii,n)}const Qr=g({softplus_:bm});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function wm(e){const t=f(e,"x","logSigmoid");return kt(r=>({value:bt(Qr(bt(r))),gradFunc:a=>x(a,Xt(bt(r)))}))(t)}const Sl=g({logSigmoid_:wm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ym(e,t){let n=f(e,"a","sub"),r=f(t,"b","sub");[n,r]=V(n,r);const s={a:n,b:r};return m.runKernel(Si,s)}const N=g({sub_:ym});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $m(e,t=-1){const n=f(e,"logits","logSoftmax");if(t===-1&&(t=n.rank-1),t!==n.rank-1)throw Error(`Log Softmax along a non-last dimension is not yet supported. Logits was rank ${n.rank} and axis was ${t}`);return kt((s,o)=>{const i=Yt(s,t,!0),c=N(s,i),l=N(z(c,"float32"),ye(W(Pt(c),t,!0)));return o([l]),{value:l,gradFunc:(u,d)=>{const[b]=d,w=!0,y=Pt(b);return N(u,x(W(u,t,w),y))}}})(n)}const xl=g({logSoftmax_:$m});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function km(e,t=null,n=!1){const r=f(e,"x","logSumExp"),s=Ge(t,r.shape),o=Yt(r,s,!0),a=N(r,o),i=Pt(a),c=W(i,s),l=ye(c),h=_(k(o,l.shape),l);if(n){const u=Ye(h.shape,s);return k(h,u)}return h}const ts=g({logSumExp_:km});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Em(e,t){const n=f(e,"a","logicalAnd","bool"),r=f(t,"b","logicalAnd","bool");X(n.shape,r.shape);const s={a:n,b:r};return m.runKernel(ha,s)}const Le=g({logicalAnd_:Em});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Sm(e){const n={x:f(e,"x","logicalNot","bool")};return m.runKernel(fa,n)}const es=g({logicalNot_:Sm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xm(e,t){const n=f(e,"a","logicalOr","bool"),r=f(t,"b","logicalOr","bool");X(n.shape,r.shape);const s={a:n,b:r};return m.runKernel(da,s)}const ns=g({logicalOr_:xm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function vm(e,t){const n=f(e,"a","logicalXor","bool"),r=f(t,"b","logicalXor","bool");return X(n.shape,r.shape),Le(ns(e,t),es(Le(e,t)))}const vl=g({logicalXor_:vm});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const nn=2147483648;function Im(e,t,n="left"){const r=f(e,"sortedSequence","searchSorted"),s=f(t,"values","searchSorted"),o=r.shape[r.shape.length-1],a=s.shape[s.shape.length-1],i=k(r,[-1,o]),c=k(s,[-1,a]);if(i.rank<2)throw new Error("Sorted input argument must be at least 2-dimensional");if(i.shape[0]!==c.shape[0])throw new Error("Leading dimension of 'sortedSequence' and 'values' must match.");if(q(c.shape)>=nn)throw new Error(`values tensor size must less than ${nn}`);if(i.shape[1]>=nn)throw new Error(`trailing dim_size must less than ${nn} for int32 output type, was ${i.shape[1]}`);const l={sortedSequence:i,values:c},h={side:n};return m.runKernel(Qa,l,h)}const vn=g({searchSorted_:Im});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Il(e,t){return vn(e,t,"left")}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Tm(e,t,n,r,s){const o=f(e,"x","maxPool"),a=1;let i=o,c=!1;o.rank===3&&(c=!0,i=k(o,[1,o.shape[0],o.shape[1],o.shape[2]])),p(i.rank===4,()=>`Error in maxPool: input must be rank 4 but got rank ${i.rank}.`),p(vt(n,a),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${n} and dilations '${a}'`),pt("maxPool",r,s);const l={x:i},h={filterSize:t,strides:n,pad:r,dimRoundingMode:s},u=m.runKernel(ba,l,h);return c?k(u,[u.shape[1],u.shape[2],u.shape[3]]):u}const rs=g({maxPool_:Tm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _m(e,t=[1,1,1],n,r,s,o="NDHWC"){const a=f(e,"x","maxPool3d");let i=a,c=!1;a.rank===4&&(c=!0,i=k(a,[1,a.shape[0],a.shape[1],a.shape[2],a.shape[3]])),p(i.rank===5,()=>`Error in maxPool3d: x must be rank 5 but got rank ${i.rank}.`),p(o==="NDHWC",()=>`Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of ${o}`),pt("maxPool3d",r,s);const l={x:i},h={filterSize:t,strides:n,pad:r,dimRoundingMode:s,dataFormat:o},u=m.runKernel(wa,l,h);return c?k(u,[u.shape[1],u.shape[2],u.shape[3],u.shape[4]]):u}const Tl=g({maxPool3d_:_m});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Am(e,t,n,r,s=!1){const a={x:f(e,"x","maxPoolWithArgmax")},i={filterSize:t,strides:n,pad:r,includeBatchInIndex:s},c=m.runKernel(ya,a,i);return{result:c[0],indexes:c[1]}}const _l=g({maxPoolWithArgmax_:Am});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Dm(e,t){let n=f(e,"a","maximum"),r=f(t,"b","maximum");[n,r]=V(n,r),n.dtype==="bool"&&(n=z(n,"int32"),r=z(r,"int32")),X(n.shape,r.shape);const s={a:n,b:r};return m.runKernel(ma,s)}const ss=g({maximum_:Dm});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Mm(e,t=null,n=!1){const s={x:f(e,"x","mean")},o={axis:t,keepDims:n};return m.runKernel($a,s,o)}const We=g({mean_:Mm});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ne(e,t="float32"){if(t==="complex64"){const r=ne(e,"float32"),s=ne(e,"float32");return xt(r,s)}const n=yn(q(e),t);return m.makeTensor(n,e,t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Bt(e,t="float32"){if(t==="complex64"){const r=Bt(e,"float32"),s=ne(e,"float32");return xt(r,s)}const n=gr(q(e),t);return m.makeTensor(n,e,t)}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Al(e,t,{indexing:n="xy"}={}){if(n!=="xy"&&n!=="ij")throw new TypeError(`${n} is not a valid third argument to meshgrid`);if(e===void 0)return[];let r=f(e,"x","meshgrid",e instanceof H?e.dtype:"float32");if(t===void 0)return[r];let s=f(t,"y","meshgrid",t instanceof H?t.dtype:"float32");const o=q(r.shape),a=q(s.shape);return n==="xy"?(r=k(r,[1,-1]),s=k(s,[-1,1]),[P(Bt([a,1],r.dtype),r),P(s,Bt([1,o],s.dtype))]):(r=k(r,[-1,1]),s=k(s,[1,-1]),[P(r,Bt([1,a],r.dtype)),P(Bt([o,1],s.dtype),s)])}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Nm(e,t){let n=f(e,"a","minimum"),r=f(t,"b","minimum");[n,r]=V(n,r),n.dtype==="bool"&&(n=z(n,"int32"),r=z(r,"int32")),X(n.shape,r.shape);const s={a:n,b:r};return m.runKernel(Ea,s)}const os=g({minimum_:Nm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Bm(e,t,n){p(n==="reflect"||n==="symmetric",()=>`Invalid mode. Mode must be either reflect or symmetric. Got ${n}.`);const r=f(e,"x","mirrorPad");if(r.rank===0)throw new Error("mirrorPad(scalar) is not defined. Pass non-scalar to mirrorPad");p(t.length===r.rank,()=>`Padding doesn't match input. Must be ${r.rank}. Got ${t.length}.`);const s=n==="reflect"?1:0;for(let i=0;i<r.rank;i++)p(t[i].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),p(t[i][0]>=0&&t[i][0]<=r.shape[i]-s&&t[i][1]>=0&&t[i][1]<=r.shape[i]-s,()=>`Padding in dimension ${i} cannot be greater than or equal to ${r.shape[i]-s} or less than 0 for input of shape ${r.shape}`);const o={paddings:t,mode:n},a={x:r};return m.runKernel(Sa,a,o)}const Dl=g({mirrorPad_:Bm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Cm(e,t){let n=f(e,"a","mod"),r=f(t,"b","mod");[n,r]=V(n,r);const s={a:n,b:r};return m.runKernel(xa,s)}const Ml=g({mod_:Cm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Fm(e,t=null,n=!1){e=f(e,"x","moments");const r=Ge(t,e.shape),s=We(e,r,n);let o=s.shape;n||(o=Ye(s.shape,r));const a=dt(N(z(e,"float32"),k(s,o))),i=We(a,r,n);return{mean:s,variance:i}}const Nl=g({moments_:Fm});function Rm(e,t,n,r){const s=f(t,"data","multiRNNCell"),o=Re(n,"c","multiRNNCell"),a=Re(r,"h","multiRNNCell");let i=s;const c=[];for(let u=0;u<e.length;u++){const d=e[u](i,o[u],a[u]);c.push(d[0]),c.push(d[1]),i=d[1]}const l=[],h=[];for(let u=0;u<c.length;u+=2)l.push(c[u]),h.push(c[u+1]);return[l,h]}const Bl=g({multiRNNCell_:Rm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Pm(e,t,n,r=!1){const s=f(e,"logits","multinomial"),o=s.size,a=s.rank;if(o<2)throw new Error(`Error in multinomial: you need at least 2 outcomes, but got ${o}.`);if(a>2)throw new Error(`Rank of probabilities must be 1 or 2, but is ${a}`);n=n||Math.random();const c={logits:a===1?k(s,[1,-1]):s},l={numSamples:t,seed:n,normalized:r},h=m.runKernel(va,c,l);return a===1?k(h,[h.size]):h}const Cl=g({multinomial_:Pm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Om(e,t){let n=f(e,"a","notEqual","string_or_numeric"),r=f(t,"b","notEqual","string_or_numeric");[n,r]=V(n,r),X(n.shape,r.shape);const s={a:n,b:r};return m.runKernel(_a,s)}const as=g({notEqual_:Om});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Lm(e){const n={x:f(e,"x","onesLike")};return m.runKernel(Na,n)}const Fl=g({onesLike_:Lm});function Wm(e,t){const n=f(e,"v1","outerProduct"),r=f(t,"v2","outerProduct");p(n.rank===1&&r.rank===1,()=>`Error in outerProduct: inputs must be rank 1, but got ranks ${n.rank} and ${r.rank}.`);const s=k(n,[-1,1]),o=k(r,[1,-1]);return P(s,o)}const Rl=g({outerProduct_:Wm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Km(e,t,n=0){const r=f(e,"x","pad");if(r.rank===0)throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");const s={paddings:t,constantValue:n},o={x:r};return m.runKernel(Fa,o,s)}const ve=g({pad_:Km});function Gm(e,t,n=0){return p(t.length===2,()=>"Invalid number of paddings. Must be length of 2."),ve(e,[t],n)}const Pl=g({pad1d_:Gm});function qm(e,t,n=0){return p(t.length===2&&t[0].length===2&&t[1].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),ve(e,t,n)}const Ol=g({pad2d_:qm});function Um(e,t,n=0){return p(t.length===3&&t[0].length===2&&t[1].length===2&&t[2].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),ve(e,t,n)}const Ll=g({pad3d_:Um});function zm(e,t,n=0){return p(t.length===4&&t[0].length===2&&t[1].length===2&&t[2].length===2&&t[3].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),ve(e,t,n)}const Wl=g({pad4d_:zm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Vm(e,t,n){const r=f(e,"x","spaceToBatchND");p(r.rank>=1+t.length,()=>`input rank ${r.rank} should be > than [blockShape] ${t.length}`),p(n.length===t.length,()=>`paddings.shape[0] ${n.length} must be equal to [blockShape] ${t.length}`),p(r.shape.reduce((a,i,c)=>c>0&&c<=t.length?a&&(i+n[c-1][0]+n[c-1][1])%t[c-1]===0:a,!0),()=>`input spatial dimensions ${r.shape.slice(1)} with paddings ${n.toString()} must be divisible by blockShapes ${t.toString()}`);const s={x:r},o={blockShape:t,paddings:n};return m.runKernel(ui,s,o)}const is=g({spaceToBatchND_:Vm});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Hm(e,t,n,r,s,o,a){s==null&&(s=[1,1]),o==null&&(o=1),r===0&&(r="valid");const i=f(e,"x","maxPool");let c=i,l=!1;i.rank===3&&(l=!0,c=k(i,[1,i.shape[0],i.shape[1],i.shape[2]])),p(vt(o,s),()=>`Error in pool: Either strides or dilations must be 1. Got strides ${o} and dilations '${s}'`);const h=Cc(c.shape,t,o,s,r),u=[h.dilationHeight,h.dilationWidth];let d;r==="same"?d=Xm([h.filterHeight,h.filterWidth],u):d=[[0,0],[0,0]];const b=u[0]===1&&u[1]===1,[w,y]=jm([h.inHeight,h.inWidth],u,d),$=b?r:"valid",S=b?c:is(c,u,w),E=(n==="avg"?()=>Kr(S,t,o,$,a):()=>rs(S,t,o,$,a))(),v=b?E:Gr(E,u,y);return l?k(v,[v.shape[1],v.shape[2],v.shape[3]]):v}function jm(e,t,n){const r=n.map(h=>h[0]),s=n.map(h=>h[1]),o=e.concat(r,s),a=t.map((h,u)=>(h-o[u]%h)%h),i=s.map((h,u)=>h+a[u]),c=t.map((h,u)=>[r[u],i[u]]),l=t.map((h,u)=>[0,a[u]]);return[c,l]}function Xm(e,t){const r=e.map((a,i)=>a+(a-1)*(t[i]-1)).map(a=>a-1),s=r.map(a=>Math.floor(a/2)),o=r.map((a,i)=>a-s[i]);return r.map((a,i)=>[s[i],o[i]])}const Kl=g({pool_:Hm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ym(e,t){const n=f(e,"x","prelu"),r=f(t,"alpha","prelu"),s={x:n,alpha:r};return m.runKernel(Pa,s)}const cs=g({prelu_:Ym});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Jm(e,t=null,n=!1){let r=f(e,"x","prod");r.dtype==="bool"&&(r=z(r,"int32"));const s={x:r},o={axis:t,keepDims:n};return m.runKernel(Oa,s,o)}const Gl=g({prod_:Jm});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Zm(e,t,n,r){const s=e.map((h,u)=>f(h,`tensors${u}`,"raggedGather","int32")),o=f(t,"paramsDenseValues","raggedGather"),a=f(n,"indices","raggedGather","int32"),i={paramsNestedSplits:s,paramsDenseValues:o,indices:a},c={outputRaggedRank:r},l=m.runKernel(La,i,c);return{outputNestedSplits:l.slice(0,l.length-1),outputDenseValues:l[l.length-1]}}const ql=g({raggedGather_:Zm});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Qm(e,t,n,r,s){const o=f(e,"shape","raggedTensorToTensor","int32"),a=f(t,"values","raggedTensorToTensor"),i=f(n,"defaultValue","raggedTensorToTensor",a.dtype),c=r.map((u,d)=>f(u,`tensors${d}`,"raggedTensorToTensor","int32")),l={shape:o,values:a,defaultValue:i,rowPartitionTensors:c},h={rowPartitionTypes:s};return m.runKernel(Wa,l,h)}const Ul=g({raggedTensorToTensor_:Qm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function tb(e,t,n){const r=q(e);let s=null;if(n==null||n==="float32")s=new Float32Array(r);else if(n==="int32")s=new Int32Array(r);else if(n==="bool")s=new Uint8Array(r);else throw new Error(`Unknown data type ${n}`);for(let o=0;o<r;o++)s[o]=t();return m.makeTensor(s,e,n)}const zl=g({rand_:tb});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class ls{constructor(t,n,r,s,o){this.mean=t,this.stdDev=n,this.dtype=r,this.nextVal=NaN,this.truncated=s,this.truncated&&(this.upper=this.mean+this.stdDev*2,this.lower=this.mean-this.stdDev*2);const a=o||Math.random();this.random=pr.alea(a.toString())}nextValue(){if(!isNaN(this.nextVal)){const s=this.nextVal;return this.nextVal=NaN,s}let t,n,r=!1;for(;!r;){let s,o,a;do s=2*this.random()-1,o=2*this.random()-1,a=s*s+o*o;while(a>=1||a===0);const i=Math.sqrt(-2*Math.log(a)/a);t=this.mean+this.stdDev*s*i,n=this.mean+this.stdDev*o*i,(!this.truncated||this.isValidTruncated(t))&&(r=!0)}return(!this.truncated||this.isValidTruncated(n))&&(this.nextVal=this.convertValue(n)),this.convertValue(t)}convertValue(t){return this.dtype==null||this.dtype==="float32"?t:Math.round(t)}isValidTruncated(t){return t<=this.upper&&t>=this.lower}}class eb{constructor(t,n,r,s){this.alpha=t,this.beta=1/n,this.dtype=r;const o=s||Math.random();this.randu=pr.alea(o.toString()),this.randn=new ls(0,1,r,!1,this.randu()),t<1?this.d=t+2/3:this.d=t-1/3,this.c=1/Math.sqrt(9*this.d)}nextValue(){let t,n,r,s,o,a;for(;;){do s=this.randn.nextValue(),a=1+this.c*s;while(a<=0);if(a*=a*a,t=s*s,n=1-.331*t*t,r=.5*t+this.d*(1-a+Math.log(a)),o=this.randu(),o<n||Math.log(o)<r)break}return a=1/this.beta*this.d*a,this.alpha<1&&(a*=Math.pow(this.randu(),1/this.alpha)),this.convertValue(a)}convertValue(t){return this.dtype==="float32"?t:Math.round(t)}}class nb{constructor(t=0,n=1,r,s){if(this.canReturnFloat=()=>this.dtype==null||this.dtype==="float32",this.min=t,this.range=n-t,this.dtype=r,s==null&&(s=Math.random()),typeof s=="number"&&(s=s.toString()),!this.canReturnFloat()&&this.range<=1)throw new Error(`The difference between ${t} - ${n} <= 1 and dtype is not float`);this.random=pr.alea(s)}convertValue(t){return this.canReturnFloat()?t:Math.round(t)}nextValue(){return this.convertValue(this.min+this.range*this.random())}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function rb(e,t,n=1,r="float32",s){if(n==null&&(n=1),r==null&&(r="float32"),r!=="float32"&&r!=="int32")throw new Error(`Unsupported data type ${r}`);const o=new eb(t,n,r,s),a=yt(e,r);for(let i=0;i<a.values.length;i++)a.values[i]=o.nextValue();return a.toTensor()}const Vl=g({randomGamma_:rb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function sb(e,t=0,n=1,r,s){if(r!=null&&r==="bool")throw new Error(`Unsupported data type ${r}`);const o=new ls(t,n,r,!1,s),a=yt(e,r);for(let i=0;i<a.values.length;i++)a.values[i]=o.nextValue();return a.toTensor()}const us=g({randomNormal_:sb});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ob(e,t,n){if(t!=null&&t==="bool")throw new Error(`Unsupported data type ${t}`);return us(e,0,1,t,n)}const Hl=g({randomStandardNormal_:ob});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ab(e,t=0,n=1,r="float32",s){const o=yt(e,r),a=new nb(t,n,null,s);for(let i=0;i<o.values.length;i++)o.values[i]=a.nextValue();return o.toTensor()}const hs=g({randomUniform_:ab});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $e(e,t,n=1,r="float32"){if(n===0)throw new Error("Cannot have a step of zero");const s={start:e,stop:t,step:n,dtype:r};return m.runKernel(Ka,{},s)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ib(e){const n={x:f(e,"x","reciprocal")};return m.runKernel(qa,n)}const jl=g({reciprocal_:ib});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function cb(e){const n={x:f(e,"x","relu")};return m.runKernel(Ua,n)}const Qe=g({relu_:cb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function lb(e){const n={x:f(e,"x","relu6")};return m.runKernel(ja,n)}const fs=g({relu6_:lb});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ub(e,t){const r={x:f(e,"x","reverse")},s={dims:t};return m.runKernel(Xa,r,s)}const Ot=g({reverse_:ub});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hb(e){const t=f(e,"x","reverse");return p(t.rank===1,()=>`Error in reverse1D: x must be rank 1 but got rank ${t.rank}.`),Ot(t,0)}const Xl=g({reverse1d_:hb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function fb(e,t){const n=f(e,"x","reverse");return p(n.rank===2,()=>`Error in reverse2D: x must be rank 2 but got rank ${n.rank}.`),Ot(n,t)}const Yl=g({reverse2d_:fb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function db(e,t){const n=f(e,"x","reverse");return p(n.rank===3,()=>`Error in reverse3D: x must be rank 3 but got rank ${n.rank}.`),Ot(n,t)}const Jl=g({reverse3d_:db});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function pb(e,t){const n=f(e,"x","reverse");return p(n.rank===4,()=>`Error in reverse4D: x must be rank 4 but got rank ${n.rank}.`),Ot(n,t)}const Zl=g({reverse4d_:pb});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gb(e){const n={x:f(e,"x","round")};return m.runKernel(Ya,n)}const ds=g({round_:gb});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function mb(e){const n={x:f(e,"x","rsqrt","float32")};return m.runKernel(Ja,n)}const Ql=g({rsqrt_:mb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function bb(e){const n={x:f(e,"x","selu")};return m.runKernel(ei,n)}const tu=g({selu_:bb});function wb(e,t,n,r,s,o=[1,1],a="NHWC"){const i=f(e,"x","separableConv2d"),c=f(t,"depthwiseFilter","separableConv2d"),l=f(n,"pointwiseFilter","separableConv2d");let h=i,u=!1;if(i.rank===3&&(u=!0,h=k(i,[1,i.shape[0],i.shape[1],i.shape[2]])),a==="NCHW")throw new Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");p(h.rank===4,()=>`Error in separableConv2d: input must be rank 4, but got rank ${h.rank}.`),p(c.rank===4,()=>`Error in separableConv2d: depthwise filter must be rank 4, but got rank ${c.rank}.`),p(l.rank===4,()=>`Error in separableConv2d: pointwise filter must be rank 4, but got rank ${c.rank}.`),p(l.shape[0]===1,()=>`Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got ${l.shape[0]}.`),p(l.shape[1]===1,()=>`Error in separableConv2d: the second dimension of pointwise filter must be 1, but got ${l.shape[1]}.`);const d=c.shape[2],b=c.shape[3];p(l.shape[2]===d*b,()=>`Error in separableConv2d: the third dimension of pointwise filter must be ${d*b}, but got ${l.shape[2]}.`);const w=En(h,c,r,s,a,o),$=Xe(w,l,1,"valid",a);return u?k($,[$.shape[1],$.shape[2],$.shape[3]]):$}const eu=g({separableConv2d_:wb});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function yb(e,t){const n=f(e,"x","setdiff1d"),r=f(t,"y","setdiff1d");p(n.dtype===r.dtype,()=>`x and y should have the same dtype, but got x (${n.dtype}) and y (${r.dtype}).`),p(n.rank===1,()=>`x should be 1D tensor, but got x (${n.shape}).`),p(r.rank===1,()=>`y should be 1D tensor, but got y (${r.shape}).`);const s=await n.data(),o=await r.data(),a=new Set(o);let i=0;for(let h=0;h<s.length;h++)a.has(s[h])||i++;const c=new fn([i],n.dtype),l=new fn([i],"int32");for(let h=0,u=0;h<s.length;h++)a.has(s[h])||(c.values[u]=s[h],l.values[u]=h,u++);return[c.toTensor(),l.toTensor()]}const nu=yb;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $b(e){const n={x:f(e,"x","sign")};return m.runKernel(oi,n)}const ru=g({sign_:$b});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function kb(e){const n={x:f(e,"x","sin","float32")};return m.runKernel(ri,n)}const su=g({sin_:kb});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Eb(e){const n={x:f(e,"x","sinh")};return m.runKernel(si,n)}const ou=g({sinh_:Eb});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Sb(e,t,n){const r=f(e,"x","slice1d");return p(r.rank===1,()=>`slice1d expects a rank-1 tensor, but got a rank-${r.rank} tensor`),G(r,[t],[n])}const au=g({slice1d_:Sb});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xb(e,t,n){const r=f(e,"x","slice2d");return p(r.rank===2,()=>`slice2d expects a rank-2 tensor, but got a rank-${r.rank} tensor`),G(r,t,n)}const iu=g({slice2d_:xb});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function vb(e,t,n){const r=f(e,"x","slice3d");return p(r.rank===3,()=>`slice3d expects a rank-3 tensor, but got a rank-${r.rank} tensor`),G(r,t,n)}const cu=g({slice3d_:vb});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ib(e,t,n){const r=f(e,"x","slice4d");return p(r.rank===4,()=>`slice4d expects a rank-4 tensor, but got a rank-${r.rank} tensor`),G(r,t,n)}const lu=g({slice4d_:Ib});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Tb(e,t=-1){const n=f(e,"logits","softmax","float32");if(t===-1&&(t=n.rank-1),t!==n.rank-1)throw Error(`Softmax along a non-last dimension is not yet supported. Logits was rank ${n.rank} and dim was ${t}`);const r={logits:n},s={dim:t};return m.runKernel(fi,r,s)}const uu=g({softmax_:Tb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _b(e){p(e.dtype==="complex64",()=>`The dtype for tf.spectral.fft() must be complex64 but got ${e.dtype}.`);const t={input:e};return m.runKernel(Uo,t)}const In=g({fft_:_b});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ab(e){p(e.dtype==="complex64",()=>`The dtype for tf.spectral.ifft() must be complex64 but got ${e.dtype}.`);const t={input:e};return m.runKernel(ta,t)}const Ke=g({ifft_:Ab});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Db(e){const t=e.shape[e.shape.length-1],n=e.size/t;let r;if(t<=2){const s=k(e,[n,t]);r=Ke(s)}else{const s=[n,2*(t-1)],o=k(be(e),[n,t]),a=k(Ve(e),[n,t]),i=Ot(G(o,[0,1],[n,t-2]),1),c=x(Ot(G(a,[0,1],[n,t-2]),1),O(-1)),l=at([o,i],1),h=at([a,c],1),u=k(xt(l,h),[s[0],s[1]]);r=Ke(u)}if(r=be(r),e.rank===3&&e.shape[0]!==0){const s=r,o=e.shape[0];r=k(r,[o,r.shape[0]/o,r.shape[1]]),s.dispose()}return r}const ps=g({irfft_:Db});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Mb(e,t,n=0){const s={x:f(e,"x","split")},o={numOrSizeSplits:t,axis:n};return m.runKernel(hi,s,o)}const ke=g({split_:Mb});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Nb(e,t){p(e.dtype==="float32",()=>`The dtype for rfft() must be real value but got ${e.dtype}`);let n=e.shape[e.shape.length-1];const r=e.size/n;let s;if(t!=null&&t<n){const w=e.shape.map($=>0),y=e.shape.map($=>$);y[e.shape.length-1]=t,s=G(e,w,y),n=t}else if(t!=null&&t>n){const w=e.shape.map(y=>y);w[e.shape.length-1]=t-n,s=at([e,ne(w)],e.shape.length-1),n=t}else s=e;const o=lt(s),a=k(xt(s,o),[r,n]),i=In(a),c=Math.floor(n/2)+1,l=be(i),h=Ve(i),u=ke(l,[c,n-c],l.shape.length-1),d=ke(h,[c,n-c],h.shape.length-1),b=s.shape.slice();return b[s.shape.length-1]=c,k(xt(u[0],d[0]),b)}const Tn=g({rfft_:Nb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Bb(e,t){let n=f(e,"a","squaredDifference"),r=f(t,"b","squaredDifference");[n,r]=V(n,r),X(n.shape,r.shape);const s={a:n,b:r},o={};return m.runKernel(wi,s,o)}const gs=g({squaredDifference_:Bb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Cb(e,t){const n=f(e,"x","squeeze","string_or_numeric");return k(n,Ps(n.shape,t).newShape)}const _n=g({squeeze_:Cb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Fb(e,t=0){const n=Re(e,"tensors","stack","string_or_numeric");p(n.length>=1,()=>"Pass at least one tensor to tf.stack"),n.length>0&&p(t<=n[0].rank,()=>"Axis must be <= rank of the tensor");const r=n,s={axis:t};return m.runKernel(Ca,r,s)}const Ee=g({stack_:Fb});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Rb(e,t=0){const r={x:f(e,"x","step")},s={alpha:t};return m.runKernel(Ni,r,s)}const ms=g({step_:Rb});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Pb(e,t,n,r,s=0,o=0,a=0,i=0,c=0){const h={x:f(e,"x","stridedSlice","string_or_numeric")},u={begin:t,end:n,strides:r,beginMask:s,endMask:o,ellipsisMask:a,newAxisMask:i,shrinkAxisMask:c};return m.runKernel(yi,h,u)}const hu=g({stridedSlice_:Pb});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ob(e){const n={x:f(e,"x","tan","float32")};return m.runKernel(xi,n)}const fu=g({tan_:Ob});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ft(e,t){re(e);const n=wt(e,t);if(n.length!==1)throw new Error("tensor1d() requires values to be a flat/TypedArray");return Wt(e,null,n,t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function de(e,t,n){if(re(e),t!=null&&t.length!==2)throw new Error("tensor2d() requires shape to have two numbers");const r=wt(e,n);if(r.length!==2&&r.length!==1)throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(r.length===1&&t==null)throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return Wt(e,t,r,n)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function du(e,t,n){if(re(e),t!=null&&t.length!==4)throw new Error("tensor4d() requires shape to have four numbers");const r=wt(e,n);if(r.length!==4&&r.length!==1)throw new Error("tensor4d() requires values to be number[][][][] or flat/TypedArray");if(r.length===1&&t==null)throw new Error("tensor4d() requires shape to be provided when `values` are a flat array");return Wt(e,t,r,n)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function pu(e,t,n){if(re(e),t!=null&&t.length!==5)throw new Error("tensor5d() requires shape to have five numbers");const r=wt(e,n);if(r.length!==5&&r.length!==1)throw new Error("tensor5d() requires values to be number[][][][][] or flat/TypedArray");if(r.length===1&&t==null)throw new Error("tensor5d() requires shape to be provided when `values` are a flat array");return Wt(e,t,r,n)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gu(e,t,n){if(re(e),t!=null&&t.length!==6)throw new Error("tensor6d() requires shape to have six numbers");const r=wt(e,n);if(r.length!==6&&r.length!==1)throw new Error("tensor6d() requires values to be number[][][][][][] or flat/TypedArray");if(r.length===1&&t==null)throw new Error("tensor6d() requires shape to be provided when `values` are a flat array");return t=t||r,Wt(e,t,r,n)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Lb(e,t=1,n=!0){const r=f(e,"x","topk");if(r.rank===0)throw new Error("topk() expects the input to be of rank 1 or higher");const s=r.shape[r.shape.length-1];if(t<0)throw new Error(`'k' passed to topk() must be >= 0 but got ${t}`);if(t>s)throw new Error(`'k' passed to topk() must be <= the last dimension (${s}) but got ${t}`);const o={x:r},a={k:t,sorted:n},[i,c]=m.runKernel(Ii,o,a);return{values:i,indices:c}}const mu=g({topk_:Lb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Wb(e,t=0,n=1,r,s){if(r!=null&&r==="bool")throw new Error("Unsupported data type $ { dtype }");const o=new ls(t,n,r,!0,s),a=yt(e,r);for(let i=0;i<a.values.length;i++)a.values[i]=o.nextValue();return a.toTensor()}const bu=g({truncatedNormal_:Wb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Kb(e,t=0){const n=f(e,"x","unique","string_or_numeric");p(n.rank>0,()=>"The input tensor must be at least 1D");const r={x:n},s={axis:t},[o,a]=m.runKernel(_i,r,s);return{values:o,indices:a}}const wu=g({unique_:Kb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Gb(e,t,n){const r=f(e,"x","unsortedSegmentSum"),s=f(t,"segmentIds","unsortedSegmentSum","int32");p(pe(n),()=>"numSegments must be of dtype int");const o={x:r,segmentIds:s},a={numSegments:n};return m.runKernel(Di,o,a)}const yu=g({unsortedSegmentSum_:Gb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qb(e,t=0){const n=f(e,"x","unstack","string_or_numeric");p(t>=-n.shape.length&&t<n.shape.length,()=>`Axis = ${t} is not in [-${n.shape.length}, ${n.shape.length})`);const r={value:n},s={axis:t};return m.runKernel(Ai,r,s)}const An=g({unstack_:qb});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $u(e,t){return vn(e,t,"right")}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ku(e,t=!0,n,r){return m.makeVariable(e,t,n,r)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Eu(e,t){const n=[];for(let o=0;o<t.length;o++)t[o]&&n.push(o);const r=yt(e,"int32"),s=yt([n.length,e.length],"int32");for(let o=0;o<n.length;o++){const a=r.indexToLoc(n[o]),i=o*e.length;s.values.set(a,i)}return s.toTensor()}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function Ub(e){const t=f(e,"condition","whereAsync","bool"),n=await t.data(),r=Eu(t.shape,n);return e!==t&&t.dispose(),r}const bs=Ub;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function zb(e,t,n){const r=f(e,"tensor","boolMask"),s=f(t,"mask","boolMask","bool"),o=n??0,a=s.rank,i=r.shape;p(a>0,()=>"mask cannot be scalar"),st(i.slice(o,o+a),s.shape,"mask's shape must match the first K dimensions of tensor's shape,");let c=1;for(let y=o;y<o+a;y++)c*=i[y];const l=i.slice(0,o).concat([c],i.slice(o+a)),h=k(r,l),u=k(s,[-1]),d=await bs(u),b=_n(d,[1]),w=Xr(h,b,o);return e!==r&&r.dispose(),t!==s&&s.dispose(),b.dispose(),h.dispose(),u.dispose(),d.dispose(),w}const Su=zb;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Vb(e,t,n,r,s=!0){const o=f(e,"v","movingAverage"),a=f(t,"x","movingAverage"),i=f(n,"decay","movingAverage");Oi(o,a),p(Lt(o.shape,a.shape),()=>"Shape mismatch in v and x");const c=O(1),l=N(c,i);let h=x(N(a,o),l);if(s){p(r!=null,()=>"When using zeroDebias: true, step is required.");const u=f(r,"step","movingAverage");h=K(h,N(c,we(i,u)))}return _(o,h)}const xu=g({movingAverage_:Vb});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Hb(e,t,n){const r=f(e,"indices","scatterND","int32"),s=f(t,"updates","scatterND");Rr(s,r,n);const o={indices:r,updates:s},a={shape:n};return m.runKernel(Za,o,a)}const vu=g({scatterND_:Hb});function jb(e,t,n,r){if(e.dtype!=="int32")throw new Error(`tf.sparseToDense() expects the indices to be int32 type, but the dtype was ${e.dtype}.`);if(e.rank>2)throw new Error(`sparseIndices should be a scalar, vector, or matrix, but got shape ${e.shape}.`);const s=e.rank>0?e.shape[0]:1,o=e.rank>1?e.shape[1]:1;if(n.length!==o)throw new Error(`outputShape has incorrect number of elements:, ${n.length}, should be: ${o}.`);const a=t.size;if(!(t.rank===0||t.rank===1&&a===s))throw new Error(`sparseValues has incorrect shape ${t.shape}, should be [] or [${s}]`);if(t.dtype!==r.dtype)throw new Error("sparseValues.dtype must match defaultValues.dtype")}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Xb(e,t,n,r=0){const s=f(e,"sparseIndices","sparseToDense","int32"),o=f(t,"sparseValues","sparseToDense","string_or_numeric"),a=f(r,"defaultValue","sparseToDense",o.dtype);jb(s,o,n,a);const i={sparseIndices:s,sparseValues:o,defaultValue:a},c={outputShape:n};return m.runKernel(bi,i,c)}const Iu=g({sparseToDense_:Xb});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Yb(e,t){const n=f(t,"indices","gatherND","int32"),s={params:f(e,"x","gatherND","string_or_numeric"),indices:n};return m.runKernel(Jo,s)}const Tu=g({gatherND_:Yb});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Jb(e,t){if(t==null)return e.shape.slice();if(Lt(e.shape,t))return t;if(e.shape.length===t.length){const n=[];for(let r=0;r<e.shape.length;r++)t[r]==null&&e.shape[r]!=null?n.push(e.shape[r]):n.push(t[r]);return n}return t}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Zb(e,t,n,r){const s=f(e,"x","dropout");if(p(s.dtype==="float32",()=>`x has to be a floating point tensor since it's going to be scaled, but got a ${s.dtype} tensor instead.`),p(t>=0&&t<1,()=>`rate must be a float in the range [0, 1), but got ${t}.`),t===0)return e instanceof H?s.clone():s;const o=Jb(s,n),a=1-t,i=K(jr(_(hs(o,0,1,"float32",r),a)),a);return x(s,i)}const _u=g({dropout_:Zb});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ws(e){return Math.floor(Math.pow(2,Math.ceil(Math.log(e)/Math.log(2))))}function Dn(e,t,n){const r=1-e%2,s=new Float32Array(e);for(let o=0;o<e;++o){const a=2*Math.PI*o/(e+r-1);s[o]=t-n*Math.cos(a)}return ft(s,"float32")}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function Qb(e,t,n=1){const r=f(e,"predictions","inTopK"),s=f(t,"targets","inTopK");p(r.rank>1,()=>`inTopK() expects the predictions to be of rank 2 or higher, but got ${r.rank}`),p(r.rank-1===s.rank,()=>`predictions rank should be 1 larger than targets rank, but got predictions rank ${r.rank} and targets rank ${s.rank}`),st(r.shape.slice(0,r.shape.length-1),s.shape,"predictions's shape should be align with the targets' shape, except the last dimension.");const o=r.shape[r.shape.length-1];p(n>0&&n<=o,()=>`'k' passed to inTopK() must be > 0 && <= the predictions last dimension (${o}), but got ${n}`);const a=await r.data(),i=await s.data(),[c,l]=[a.length/o,o],h=Os("bool",c);for(let u=0;u<c;u++){const d=u*l,b=a.subarray(d,d+l),w=[];for(let y=0;y<b.length;y++)w.push({value:b[y],index:y});w.sort((y,$)=>$.value-y.value),h[u]=0;for(let y=0;y<n;y++)if(w[y].index===i[u]){h[u]=1;break}}return e!==r&&r.dispose(),t!==s&&s.dispose(),Ht(h,s.shape,"bool")}const Au=Qb;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function tw(e,t,n,r,s,o="NHWC",a){let i=e;e.rank===3&&(i=k(e,[1,e.shape[0],e.shape[1],e.shape[2]]));let c=t;c.rank===3&&(c=k(t,[1,t.shape[0],t.shape[1],t.shape[2]])),p(i.rank===4,()=>`Error in conv2dDerFilter: input must be rank 4, but got shape ${i.shape}.`),p(c.rank===4,()=>`Error in conv2dDerFilter: dy must be rank 4, but got shape ${c.shape}.`),p(n.length===4,()=>`Error in conv2dDerFilter: filterShape must be length 4, but got ${n}.`);const l=o==="NHWC"?i.shape[3]:i.shape[1],h=o==="NHWC"?c.shape[3]:c.shape[1];p(l===n[2],()=>`Error in conv2dDerFilter: depth of input ${l}) must match input depth in filter (${n[2]}.`),p(h===n[3],()=>`Error in conv2dDerFilter: depth of dy (${h}) must match output depth for filter (${n[3]}).`),pt("conv2dDerFilter",s,a);const u={x:i,dy:c},d={strides:r,pad:s,dataFormat:o,dimRoundingMode:a,filterShape:n};return m.runKernel($o,u,d)}const ew=g({conv2DBackpropFilter_:tw});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Mn(e,t,n){if(n==null||n==="linear")return e;if(n==="relu")return x(e,ms(t));throw new Error(`Cannot compute gradient for fused activation ${n}.`)}function Nn(e,t){let n=t;const r=Br(e.shape,t.shape);return r.length>0&&(n=W(n,r)),k(n,e.shape)}function Bn(e,t,n,r){if(t==="linear")return e;if(t==="relu")return Qe(e);if(t==="elu")return zr(e);if(t==="relu6")return fs(e);if(t==="prelu")return cs(e,n);if(t==="leakyrelu")return Jr(e,r);if(t==="sigmoid")return Xt(e);throw new Error(`Unknown fused activation ${t}.`)}const Cn=(e,t)=>!(e>0)||t==="linear";/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function nw({x:e,filter:t,strides:n,pad:r,dataFormat:s="NHWC",dilations:o=[1,1],dimRoundingMode:a,bias:i,activation:c="linear",preluActivationWeights:l,leakyreluAlpha:h}){if(c=c||"linear",Cn(m.state.gradientDepth,c)===!1){p(s==="NHWC",()=>`Error in fused conv2d: got dataFormat of ${s} but only NHWC is currently supported for the case of gradient depth is 0 and the activation is not linear.`);let T=Xe(e,t,n,r,s,o,a);return i!=null&&(T=_(T,i)),Bn(T,c,l,h)}const u=f(e,"x","conv2d","float32"),d=f(t,"filter","conv2d","float32");let b=u,w=!1;u.rank===3&&(w=!0,b=k(u,[1,u.shape[0],u.shape[1],u.shape[2]])),p(b.rank===4,()=>`Error in fused conv2d: input must be rank 4, but got rank ${b.rank}.`),p(d.rank===4,()=>`Error in fused conv2d: filter must be rank 4, but got rank ${d.rank}.`),pt("fused conv2d",r,a);const y=s==="NHWC"?b.shape[3]:b.shape[1];p(d.shape[2]===y,()=>`Error in conv2d: depth of input (${y}) must match input depth for filter ${d.shape[2]}.`),p(vt(n,o),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${n} and dilations '${o}'`);const $=He(b.shape,d.shape,n,o,r,a);let S;i!=null&&(S=f(i,"bias","fused conv2d"),[S]=V(S,u),s==="NHWC"?X($.outShape,S.shape):(p(S.shape.length<=1,()=>`Error in fused conv2d: only supports scalar or 1-D Tensor bias for NCHW format but got the bias of rank-${S.shape.length}.`),p(S.shape.length===0||S.shape[0]===$.outChannels||S.shape[0]===1,()=>`Error in fused conv2d: bias shape (${S.shape}) is not compatible with the number of output channels (${$.outChannels})`)));let A;if(l!=null){const T=l.shape;if(p(T.length<=1||T.length===3,()=>`Error in fused conv2d: only supports scalar, 1-D Tensor or 3-D Tensor PReLU activation weights but got a tensor of rank-${T.length}.`),T.length===1)p(T[0]===1||T[0]===$.outChannels,()=>`Error in fused conv2d: PReLU activation weights (${T}) is not compatible with the number of output channels (${$.outChannels}).`);else if(T.length===3)try{X(T,$.outShape)}catch{const C=`Error in fused conv2d: PReLU activation weights (${T}) is not compatible with the output shape of the conv2d (${$.outShape}).`;throw Error(C)}A=f(l,"prelu weights","fused conv2d")}const E=(T,B)=>{p(s==="NHWC",()=>`Error in gradient of fused conv2D: got dataFormat of ${s} but only NHWC is currently supported.`);const[C,D,R,F]=B,Y=Mn(T,R,c);p(Oe(o),()=>`Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${o}'`);const Z=Yc(D.shape,Y,C,n,r),tt=ew(D,Y,C.shape,n,r),it=[Z,tt];if(F!=null){const se=Nn(F,Y);it.push(se)}return it},v={x:b,filter:d,bias:S,preluActivationWeights:A},I={strides:n,pad:r,dataFormat:s,dilations:o,dimRoundingMode:a,activation:c,leakyreluAlpha:h};return i==null?kt((B,C,D)=>{let R=m.runKernel(Yn,v,I);return D([C,B,R]),w&&(R=k(R,[R.shape[1],R.shape[2],R.shape[3]])),{value:R,gradFunc:E}})(b,d):kt((B,C,D,R)=>{let F=m.runKernel(Yn,v,I);return R([C,B,F,D]),w&&(F=k(F,[F.shape[1],F.shape[2],F.shape[3]])),{value:F,gradFunc:E}})(b,d,S)}const rw=g({fusedConv2d_:nw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function sw(e,t,n,r,s,o=[1,1],a){let i=e;e.rank===3&&(i=k(e,[1,e.shape[0],e.shape[1],e.shape[2]]));let c=t;c.rank===3&&(c=k(t,[1,t.shape[0],t.shape[1],t.shape[2]]));const l={x:i,dy:c},h={strides:r,pad:s,dimRoundingMode:a,dilations:o,filterShape:n};return m.runKernel(No,l,h)}const ow=g({depthwiseConv2dNativeBackpropFilter_:sw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function aw(e,t,n,r,s,o=[1,1],a){let i=t,c=!1;t.rank===3&&(c=!0,i=k(t,[1,t.shape[0],t.shape[1],t.shape[2]]));const l={dy:i,filter:n},h={strides:r,pad:s,dimRoundingMode:a,dilations:o,inputShape:e},u=m.runKernel(Bo,l,h);return c?k(u,[u.shape[1],u.shape[2],u.shape[3]]):u}const iw=g({depthwiseConv2dNativeBackpropInput_:aw});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function cw({x:e,filter:t,strides:n,pad:r,dataFormat:s="NHWC",dilations:o=[1,1],dimRoundingMode:a,bias:i,activation:c="linear",preluActivationWeights:l,leakyreluAlpha:h}){if(Cn(m.state.gradientDepth,c)===!1){let I=En(e,t,n,r,s,o,a);return i!=null&&(I=_(I,i)),Bn(I,c,l,h)}const u=f(e,"x","depthwiseConv2d","float32"),d=f(t,"filter","depthwiseConv2d","float32");let b=u,w=!1;u.rank===3&&(w=!0,b=k(u,[1,u.shape[0],u.shape[1],u.shape[2]])),p(b.rank===4,()=>`Error in fused depthwiseConv2d: input must be rank 4, but got rank ${b.rank}.`),p(d.rank===4,()=>`Error in fused depthwiseConv2d: filter must be rank 4, but got rank ${d.rank}.`),p(b.shape[3]===d.shape[2],()=>`Error in fused depthwiseConv2d: number of input channels (${b.shape[3]}) must match the inChannels dimension in filter ${d.shape[2]}.`),o==null&&(o=[1,1]),p(vt(n,o),()=>`Error in fused depthwiseConv2d: Either strides or dilations must be 1. Got strides ${n} and dilations '${o}'`),pt("fused depthwiseConv2d",r,a);const y=He(b.shape,d.shape,n,o,r,a,!0);let $;i!=null&&($=f(i,"bias","fused conv2d"),[$]=V($,u),X(y.outShape,$.shape));let S;l!=null&&(S=f(l,"prelu weights","fused depthwiseConv2d"));const A=(I,T)=>{p(Oe(o),()=>`Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '${o}'`);const[B,C,D,R]=T,F=Mn(I,D,c),Y=iw(C.shape,F,B,n,r,o,a),Z=ow(C,F,B.shape,n,r,o,a);if(R!=null){const tt=Nn($,F);return[Y,Z,tt]}return[Y,Z]},E={x:b,filter:d,bias:$,preluActivationWeights:S},v={strides:n,pad:r,dataFormat:s,dilations:o,dimRoundingMode:a,activation:c,leakyreluAlpha:h};return i==null?kt((T,B,C)=>{let D=m.runKernel(Jn,E,v);return C([B,T,D]),w&&(D=k(D,[D.shape[1],D.shape[2],D.shape[3]])),{value:D,gradFunc:A}})(b,d):kt((T,B,C,D)=>{let R=m.runKernel(Jn,E,v);return D([B,T,R,C]),w&&(R=k(R,[R.shape[1],R.shape[2],R.shape[3]])),{value:R,gradFunc:A}})(b,d,$)}const lw=g({fusedDepthwiseConv2d_:cw});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function uw({a:e,b:t,transposeA:n=!1,transposeB:r=!1,bias:s,activation:o="linear",preluActivationWeights:a,leakyreluAlpha:i=.2}){if(Cn(m.state.gradientDepth,o)===!1){let F=P(e,t,n,r);return s!=null&&(F=_(F,s)),Bn(F,o,a,i)}let c=f(e,"a","fused matMul"),l=f(t,"b","fused matMul");[c,l]=V(c,l);const h=n?c.shape[c.rank-2]:c.shape[c.rank-1],u=r?l.shape[l.rank-1]:l.shape[l.rank-2],d=n?c.shape[c.rank-1]:c.shape[c.rank-2],b=r?l.shape[l.rank-2]:l.shape[l.rank-1],w=c.shape.slice(0,-2),y=l.shape.slice(0,-2),$=q(w),S=q(y);p(h===u,()=>`Error in fused matMul: inner shapes (${h}) and (${u}) of Tensors with shapes ${c.shape} and ${l.shape} and transposeA=${n} and transposeB=${r} must match.`);const E=X(c.shape.slice(0,-2),l.shape.slice(0,-2)).concat([d,b]),v=n?k(c,[$,h,d]):k(c,[$,d,h]),I=r?k(l,[S,b,u]):k(l,[S,u,b]);let T;s!=null&&(T=f(s,"bias","fused matMul"),[T]=V(T,c),X(E,T.shape));let B;a!=null&&(B=f(a,"prelu weights","fused matMul"));const C=(F,Y)=>{const[Z,tt,it,se]=Y,Et=Mn(k(F,it.shape),it,o);let oe,ae;if(!n&&!r?(oe=P(Et,tt,!1,!0),ae=P(Z,Et,!0,!1)):!n&&r?(oe=P(Et,tt,!1,!1),ae=P(Et,Z,!0,!1)):n&&!r?(oe=P(tt,Et,!1,!0),ae=P(Z,Et,!1,!1)):(oe=P(tt,Et,!0,!0),ae=P(Et,Z,!0,!0)),s!=null){const qu=Nn(se,Et);return[oe,ae,qu]}else return[oe,ae]},D={a:v,b:I,bias:T,preluActivationWeights:B},R={transposeA:n,transposeB:r,activation:o,leakyreluAlpha:i};return s==null?kt((Y,Z,tt)=>{const it=m.runKernel(Xn,D,R);return tt([Y,Z,it]),{value:k(it,E),gradFunc:C}})(v,I):kt((Y,Z,tt,it)=>{const se=m.runKernel(Xn,D,R);return it([Y,Z,se,tt]),{value:k(se,E),gradFunc:C}})(v,I,T)}const hw=g({fusedMatMul_:uw});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Du=Object.freeze(Object.defineProperty({__proto__:null,conv2d:rw,depthwiseConv2d:lw,matMul:hw},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function fw(e){return Dn(e,.54,.46)}const dw=g({hammingWindow_:fw});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function pw(e){return Dn(e,.5,.5)}const Mu=g({hannWindow_:pw});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gw(e,t,n,r=!1,s=0){let o=0;const a=[];for(;o+t<=e.size;)a.push(G(e,o,t)),o+=n;if(r)for(;o<e.size;){const i=o+t-e.size,c=at([G(e,o,t-i),xe([i],s)]);a.push(c),o+=n}return a.length===0?de([],[0,t]):k(at(a),[a.length,t])}const Nu=g({frame_:gw});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function mw(e,t,n,r,s=Mu){r==null&&(r=ws(t));const o=Nu(e,t,n),a=x(o,s(t));return Tn(a,r)}const bw=g({stft_:mw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ww(e,t,n,r,s="bilinear",o=0){const a=f(e,"image","cropAndResize"),i=f(t,"boxes","cropAndResize","float32"),c=f(n,"boxInd","cropAndResize","int32"),l=i.shape[0];p(a.rank===4,()=>`Error in cropAndResize: image must be rank 4,but got rank ${a.rank}.`),p(i.rank===2&&i.shape[1]===4,()=>`Error in cropAndResize: boxes must be have size [${l},4] but had shape ${i.shape}.`),p(c.rank===1&&c.shape[0]===l,()=>`Error in cropAndResize: boxInd must be have size [${l}] but had shape ${i.shape}.`),p(r.length===2,()=>`Error in cropAndResize: cropSize must be of length 2, but got length ${r.length}.`),p(r[0]>=1&&r[1]>=1,()=>`cropSize must be atleast [1,1], but was ${r}`),p(s==="bilinear"||s==="nearest",()=>`method must be bilinear or nearest, but was ${s}`);const h={image:a,boxes:i,boxInd:c},u={method:s,extrapolationValue:o,cropSize:r};return m.runKernel(_o,h,u)}const yw=g({cropAndResize_:ww});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $w(e){const t=f(e,"image","flipLeftRight","float32");p(t.rank===4,()=>`Error in flipLeftRight: image must be rank 4,but got rank ${t.rank}.`);const n={image:t};return m.runKernel(Vo,n,{})}const kw=g({flipLeftRight_:$w});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ew(e){const t=f(e,"image","grayscaleToRGB"),n=t.rank-1,r=t.shape[n];p(t.rank>=2,()=>`Error in grayscaleToRGB: images must be at least rank 2, but got rank ${t.rank}.`),p(r===1,()=>`Error in grayscaleToRGB: last dimension of a grayscale image should be size 1, but got size ${r}.`);const s=new Array(t.rank);return s.fill(1,0,n),s[n]=3,fe(t,s)}const Sw=g({grayscaleToRGB_:Ew});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xw(e,t,n=0,r=.5){const s=f(e,"image","rotateWithOffset","float32");p(s.rank===4,()=>`Error in rotateWithOffset: image must be rank 4,but got rank ${s.rank}.`);const o={image:s},a={radians:t,fillValue:n,center:r};return m.runKernel(Bi,o,a)}const vw=g({rotateWithOffset_:xw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ie(e,t,n,r,s,o){r==null&&(r=.5),s==null&&(s=Number.NEGATIVE_INFINITY),o==null&&(o=0);const a=e.shape[0];return n=Math.min(n,a),p(0<=r&&r<=1,()=>`iouThreshold must be in [0, 1], but was '${r}'`),p(e.rank===2,()=>`boxes must be a 2D tensor, but was of rank '${e.rank}'`),p(e.shape[1]===4,()=>`boxes must have 4 columns, but 2nd dimension was ${e.shape[1]}`),p(t.rank===1,()=>"scores must be a 1D tensor"),p(t.shape[0]===a,()=>`scores has incompatible shape with boxes. Expected ${a}, but was ${t.shape[0]}`),p(0<=o&&o<=1,()=>`softNmsSigma must be in [0, 1], but was '${o}'`),{maxOutputSize:n,iouThreshold:r,scoreThreshold:s,softNmsSigma:o}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Iw(e,t,n,r=.5,s=Number.NEGATIVE_INFINITY){const o=f(e,"boxes","nonMaxSuppression","float32"),a=f(t,"scores","nonMaxSuppression","float32"),i=Ie(o,a,n,r,s);n=i.maxOutputSize,r=i.iouThreshold,s=i.scoreThreshold;const c={maxOutputSize:n,iouThreshold:r,scoreThreshold:s};return m.runKernel(Aa,{boxes:o,scores:a},c)}const Tw=g({nonMaxSuppression_:Iw});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _w(e,t,n){const r=Aw(e,t,n),s=r<0?-(r+1):r;e.splice(s,0,t)}function Aw(e,t,n){return Mw(e,t,n||Dw)}function Dw(e,t){return e>t?1:e<t?-1:0}function Mw(e,t,n){let r=0,s=e.length,o=0,a=!1;for(;r<s;){o=r+(s-r>>>1);const i=n(t,e[o]);i>0?r=o+1:(s=o,a=!i)}return a?r:-r-1}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Bu(e,t,n,r,s){return ys(e,t,n,r,s,0)}function Cu(e,t,n,r,s,o){return ys(e,t,n,r,s,0,!1,o,!0)}function Fu(e,t,n,r,s,o){return ys(e,t,n,r,s,o,!0)}function ys(e,t,n,r,s,o,a=!1,i=!1,c=!1){const l=[];for(let $=0;$<t.length;$++)t[$]>s&&l.push({score:t[$],boxIndex:$,suppressBeginIndex:0});l.sort(Ms);const h=o>0?-.5/o:0,u=[],d=[];for(;u.length<n&&l.length>0;){const $=l.pop(),{score:S,boxIndex:A,suppressBeginIndex:E}=$;if(S<s)break;let v=!1;for(let I=u.length-1;I>=E;--I){const T=Nw(e,A,u[I]);if(T>=r){v=!0;break}if($.score=$.score*Bw(r,h,T),$.score<=s)break}$.suppressBeginIndex=u.length,v||($.score===S?(u.push(A),d.push($.score)):$.score>s&&_w(l,$,Ms))}const b=u.length,w=n-b;i&&w>0&&(u.push(...new Array(w).fill(0)),d.push(...new Array(w).fill(0)));const y={selectedIndices:u};return a&&(y.selectedScores=d),c&&(y.validOutputs=b),y}function Nw(e,t,n){const r=e.subarray(t*4,t*4+4),s=e.subarray(n*4,n*4+4),o=Math.min(r[0],r[2]),a=Math.min(r[1],r[3]),i=Math.max(r[0],r[2]),c=Math.max(r[1],r[3]),l=Math.min(s[0],s[2]),h=Math.min(s[1],s[3]),u=Math.max(s[0],s[2]),d=Math.max(s[1],s[3]),b=(i-o)*(c-a),w=(u-l)*(d-h);if(b<=0||w<=0)return 0;const y=Math.max(o,l),$=Math.max(a,h),S=Math.min(i,u),A=Math.min(c,d),E=Math.max(S-y,0)*Math.max(A-$,0);return E/(b+w-E)}function Bw(e,t,n){const r=Math.exp(t*n*n);return n<=e?r:0}function Ms(e,t){return e.score-t.score||e.score===t.score&&t.boxIndex-e.boxIndex}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function Cw(e,t,n,r=.5,s=Number.NEGATIVE_INFINITY){const o=f(e,"boxes","nonMaxSuppressionAsync"),a=f(t,"scores","nonMaxSuppressionAsync"),i=Ie(o,a,n,r,s);n=i.maxOutputSize,r=i.iouThreshold,s=i.scoreThreshold;const c=await Promise.all([o.data(),a.data()]),l=c[0],h=c[1],{selectedIndices:u}=Bu(l,h,n,r,s);return o!==e&&o.dispose(),a!==t&&a.dispose(),ft(u,"int32")}const Fw=Cw;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Rw(e,t,n,r=.5,s=Number.NEGATIVE_INFINITY,o=0){const a=f(e,"boxes","nonMaxSuppression"),i=f(t,"scores","nonMaxSuppression"),c=Ie(a,i,n,r,s,o);n=c.maxOutputSize,r=c.iouThreshold,s=c.scoreThreshold,o=c.softNmsSigma;const l={boxes:a,scores:i},h={maxOutputSize:n,iouThreshold:r,scoreThreshold:s,softNmsSigma:o},u=m.runKernel(Ma,l,h);return{selectedIndices:u[0],selectedScores:u[1]}}const Pw=g({nonMaxSuppressionWithScore_:Rw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function Ow(e,t,n,r=.5,s=Number.NEGATIVE_INFINITY,o=0){const a=f(e,"boxes","nonMaxSuppressionAsync"),i=f(t,"scores","nonMaxSuppressionAsync"),c=Ie(a,i,n,r,s,o);n=c.maxOutputSize,r=c.iouThreshold,s=c.scoreThreshold,o=c.softNmsSigma;const l=await Promise.all([a.data(),i.data()]),h=l[0],u=l[1],{selectedIndices:d,selectedScores:b}=Fu(h,u,n,r,s,o);return a!==e&&a.dispose(),i!==t&&i.dispose(),{selectedIndices:ft(d,"int32"),selectedScores:ft(b)}}const Lw=Ow;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ww(e,t,n,r=.5,s=Number.NEGATIVE_INFINITY,o=!1){const a=f(e,"boxes","nonMaxSuppression"),i=f(t,"scores","nonMaxSuppression"),c=Ie(a,i,n,r,s,null),l=c.maxOutputSize,h=c.iouThreshold,u=c.scoreThreshold,d={boxes:a,scores:i},b={maxOutputSize:l,iouThreshold:h,scoreThreshold:u,padToMaxOutputSize:o},w=m.runKernel(Da,d,b);return{selectedIndices:w[0],validOutputs:w[1]}}const Kw=g({nonMaxSuppressionPadded_:Ww});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function Gw(e,t,n,r=.5,s=Number.NEGATIVE_INFINITY,o=!1){const a=f(e,"boxes","nonMaxSuppressionAsync"),i=f(t,"scores","nonMaxSuppressionAsync"),c=Ie(a,i,n,r,s,null),l=c.maxOutputSize,h=c.iouThreshold,u=c.scoreThreshold,[d,b]=await Promise.all([a.data(),i.data()]),{selectedIndices:w,validOutputs:y}=Cu(d,b,l,h,u,o);return a!==e&&a.dispose(),i!==t&&i.dispose(),{selectedIndices:ft(w,"int32"),validOutputs:O(y,"int32")}}const qw=Gw;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Uw(e,t,n=!1,r=!1){const s=f(e,"images","resizeBilinear");p(s.rank===3||s.rank===4,()=>`Error in resizeBilinear: x must be rank 3 or 4, but got rank ${s.rank}.`),p(t.length===2,()=>`Error in resizeBilinear: new shape must 2D, but got shape ${t}.`),p(r===!1||n===!1,()=>"Error in resizeBilinear: If halfPixelCenters is true, alignCorners must be false.");let o=s,a=!1;s.rank===3&&(a=!0,o=k(s,[1,s.shape[0],s.shape[1],s.shape[2]]));const i={images:o},c={alignCorners:n,halfPixelCenters:r,size:t},l=m.runKernel(Ha,i,c);return a?k(l,[l.shape[1],l.shape[2],l.shape[3]]):l}const zw=g({resizeBilinear_:Uw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Vw(e,t,n=!1,r=!1){const s=f(e,"images","resizeNearestNeighbor");p(s.rank===3||s.rank===4,()=>`Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank ${s.rank}.`),p(t.length===2,()=>`Error in resizeNearestNeighbor: new shape must 2D, but got shape ${t}.`),p(s.dtype==="float32"||s.dtype==="int32",()=>"`images` must have `int32` or `float32` as dtype"),p(r===!1||n===!1,()=>"Error in resizeNearestNeighbor: If halfPixelCenters is true, alignCorners must be false.");let o=s,a=!1;s.rank===3&&(a=!0,o=k(s,[1,s.shape[0],s.shape[1],s.shape[2]]));const i={images:o},c={alignCorners:n,halfPixelCenters:r,size:t},l=m.runKernel(Va,i,c);return a?k(l,[l.shape[1],l.shape[2],l.shape[3]]):l}const Hw=g({resizeNearestNeighbor_:Vw});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function jw(e,t="binary",n=!1,r=.5){const s=f(e,"image","threshold"),o=.2989,a=.587,i=.114,c=s.shape[0]*s.shape[1];let l=x(ft([r]),255),h,u,d,b;if(p(s.rank===3,()=>`Error in threshold: image must be rank 3,but got rank ${s.rank}.`),p(s.shape[2]===3||s.shape[2]===1,()=>`Error in threshold: image color channel must be equal to 3 or 1but got ${s.shape[2]}.`),p(s.dtype==="int32"||s.dtype==="float32",()=>`Error in dtype: image dtype must be int32 or float32,but got dtype ${s.dtype}.`),p(t==="otsu"||t==="binary",()=>`Method must be binary or otsu, but was ${t}`),s.shape[2]===3){[h,u,d]=ke(s,[1,1,1],-1);const $=x(h,o),S=x(u,a),A=x(d,i);b=_(_($,S),A)}else b=e;if(t==="otsu"){const $=qr(z(ds(b),"int32"),Ht([]),256);l=Xw($,c)}const w=n?Sn(b,l):Ze(b,l);return z(x(w,255),"int32")}function Xw(e,t){let n=ft([-1]),r=ft([0]),s=ft([0]),o,a,i,c,l,h;for(let u=0;u<e.size-1;u++){o=G(e,0,u+1),a=G(e,u+1),l=K(W(o),t),h=K(W(a),t);const d=W(x(o,$e(0,o.size)));i=K(d,W(o));const b=xe(a.shape,o.size),w=_($e(0,a.size),b),y=x(a,w);c=K(W(y),W(a));const $=N(i,c),S=N(i,c),A=x(l,h);s=x(x(A,$),S);const E=Ze(s,r);r=ee(E,s,r),n=ee(E,ft([u]),n)}return n}const Yw=g({threshold_:jw});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Jw(e,t,n="nearest",r="constant",s=0,o){const a=f(e,"image","transform","float32"),i=f(t,"transforms","transform","float32");p(a.rank===4,()=>`Error in transform: image must be rank 4,but got rank ${a.rank}.`),p(i.rank===2&&(i.shape[0]===a.shape[0]||i.shape[0]===1)&&i.shape[1]===8,()=>"Error in transform: Input transform should be batch x 8 or 1 x 8"),p(o==null||o.length===2,()=>`Error in transform: outputShape must be [height, width] or null, but got ${o}.`);const c={image:a,transforms:i},l={interpolation:n,fillMode:r,fillValue:s,outputShape:o};return m.runKernel(Ti,c,l)}const Zw=g({transform_:Jw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Qw(e,t,n){p(t%1===0,()=>`bandPart(): numLower must be an integer, got ${t}.`),p(n%1===0,()=>`bandPart(): numUpper must be an integer, got ${n}.`);const r=f(e,"a","bandPart");p(r.rank>=2,()=>`bandPart(): Rank must be at least 2, got ${r.rank}.`);const s=r.shape,[o,a]=r.shape.slice(-2);if(!(t<=o))throw new Error(`bandPart(): numLower (${t}) must not be greater than the number of rows (${o}).`);if(!(n<=a))throw new Error(`bandPart(): numUpper (${n}) must not be greater than the number of columns (${a}).`);t<0&&(t=o),n<0&&(n=a);const i=k($e(0,o,1,"int32"),[-1,1]),c=$e(0,a,1,"int32"),l=N(i,c),h=Le(Sn(l,O(+t,"int32")),Yr(l,O(-n,"int32"))),u=ne([o,a],r.dtype);return k(Ee(An(k(r,[-1,o,a])).map(d=>ee(h,d,u))),s)}const ty=g({bandPart_:Qw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ey(e){let t;if(Array.isArray(e)){t=!1,p(e!=null&&e.length>0,()=>"Gram-Schmidt process: input must not be null, undefined, or empty");const s=e[0].shape[0];for(let o=1;o<e.length;++o)p(e[o].shape[0]===s,()=>`Gram-Schmidt: Non-unique lengths found in the input vectors: (${e[o].shape[0]} vs. ${s})`)}else t=!0,e=ke(e,e.shape[0],0).map(s=>_n(s,[0]));p(e.length<=e[0].shape[0],()=>`Gram-Schmidt: Number of vectors (${e.length}) exceeds number of dimensions (${e[0].shape[0]}).`);const n=[],r=e;for(let s=0;s<e.length;++s)n.push(m.tidy(()=>{let o=r[s];if(s>0)for(let a=0;a<s;++a){const i=x(W(x(n[a],o)),n[a]);o=N(o,i)}return K(o,Je(o,"euclidean"))}));return t?Ee(n,0):n}const ny=g({gramSchmidt_:ey});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ry(e,t=!1){if(p(e.rank>=2,()=>`qr() requires input tensor to have a rank >= 2, but got rank ${e.rank}`),e.rank===2)return Ns(e,t);{const n=e.shape.slice(0,e.shape.length-2).reduce((c,l)=>c*l),r=An(k(e,[n,e.shape[e.shape.length-2],e.shape[e.shape.length-1]]),0),s=[],o=[];r.forEach(c=>{const[l,h]=Ns(c,t);s.push(l),o.push(h)});const a=k(Ee(s,0),e.shape),i=k(Ee(o,0),e.shape);return[a,i]}}function Ns(e,t=!1){return m.tidy(()=>{p(e.shape.length===2,()=>`qr2d() requires a 2D Tensor, but got a ${e.shape.length}D Tensor.`);const n=e.shape[0],r=e.shape[1];let s=Hr(n),o=Ft(e);const a=de([[1]],[1,1]);let i=Ft(a);const c=n>=r?r:n;for(let l=0;l<c;++l){const h=o,u=i,d=s;[i,o,s]=m.tidy(()=>{const b=G(o,[l,l],[n-l,1]),w=Je(b),y=G(o,[l,l],[1,1]),$=ee(Ze(y,0),de([[-1]]),de([[1]])),S=N(y,x($,w)),A=K(b,S);A.shape[0]===1?i=Ft(a):i=at([a,G(A,[1,0],[A.shape[0]-1,A.shape[1]])],0);const E=bt(K(P($,S),w)),v=G(o,[l,0],[n-l,r]),I=x(E,i),T=Pe(i);if(l===0)o=N(v,P(I,P(T,v)));else{const D=N(v,P(I,P(T,v)));o=at([G(o,[0,0],[l,r]),D],0)}const B=Pe(I),C=G(s,[0,l],[n,s.shape[1]-l]);if(l===0)s=N(C,P(P(C,i),B));else{const D=N(C,P(P(C,i),B));s=at([G(s,[0,0],[n,l]),D],1)}return[i,o,s]}),ot([h,u,d])}return!t&&n>r&&(s=G(s,[0,0],[n,r]),o=G(o,[0,0],[r,r])),[s,o]})}const sy=g({qr_:ry});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var rt;(function(e){e[e.NONE=0]="NONE",e[e.MEAN=1]="MEAN",e[e.SUM=2]="SUM",e[e.SUM_BY_NONZERO_WEIGHTS=3]="SUM_BY_NONZERO_WEIGHTS"})(rt||(rt={}));function oy(e,t,n=rt.SUM_BY_NONZERO_WEIGHTS){const r=f(e,"losses","computeWeightedLoss");let s=null;t!=null&&(s=f(t,"weights","computeWeightedLoss"));const o=s==null?r:x(r,s);if(n===rt.NONE)return o;if(n===rt.SUM)return W(o);if(n===rt.MEAN){if(s==null)return We(o);{const a=r.size/s.size,i=K(W(o),W(s));return a>1?K(i,O(a)):i}}if(n===rt.SUM_BY_NONZERO_WEIGHTS){if(s==null)return K(W(o),O(r.size));{const a=x(s,Bt(r.shape)),i=z(W(as(a,O(0))),"float32");return K(W(o),i)}}throw Error(`Unknown reduction: ${n}`)}const It=g({computeWeightedLoss_:oy});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ay(e,t,n,r=rt.SUM_BY_NONZERO_WEIGHTS){const s=f(e,"labels","absoluteDifference"),o=f(t,"predictions","absoluteDifference");let a=null;n!=null&&(a=f(n,"weights","absoluteDifference")),st(s.shape,o.shape,"Error in absoluteDifference: ");const i=ct(N(s,o));return It(i,a,r)}const iy=g({absoluteDifference_:ay});function cy(e,t,n,r,s=rt.SUM_BY_NONZERO_WEIGHTS){const o=f(e,"labels","cosineDistance"),a=f(t,"predictions","cosineDistance");let i=null;r!=null&&(i=f(r,"weights","cosineDistance")),st(o.shape,a.shape,"Error in cosineDistance: ");const c=O(1),l=N(c,W(x(o,a),n,!0));return It(l,i,s)}const ly=g({cosineDistance_:cy});function uy(e,t,n,r=rt.SUM_BY_NONZERO_WEIGHTS){let s=f(e,"labels","hingeLoss");const o=f(t,"predictions","hingeLoss");let a=null;n!=null&&(a=f(n,"weights","hingeLoss")),st(s.shape,o.shape,"Error in hingeLoss: ");const i=O(1);s=N(x(O(2),s),i);const c=Qe(N(i,x(s,o)));return It(c,a,r)}const hy=g({hingeLoss_:uy});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function fy(e,t,n,r=1,s=rt.SUM_BY_NONZERO_WEIGHTS){const o=f(e,"labels","huberLoss"),a=f(t,"predictions","huberLoss");let i=null;n!=null&&(i=f(n,"weights","huberLoss")),st(o.shape,a.shape,"Error in huberLoss: ");const c=O(r),l=ct(N(a,o)),h=os(l,c),u=N(l,h),d=_(x(O(.5),dt(h)),x(c,u));return It(d,i,s)}const dy=g({huberLoss_:fy});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function py(e,t,n,r=1e-7,s=rt.SUM_BY_NONZERO_WEIGHTS){const o=f(e,"labels","logLoss"),a=f(t,"predictions","logLoss");let i=null;n!=null&&(i=f(n,"weights","logLoss")),st(o.shape,a.shape,"Error in logLoss: ");const c=O(1),l=O(r),h=bt(x(o,ye(_(a,l)))),u=x(N(c,o),ye(_(N(c,a),l))),d=N(h,u);return It(d,i,s)}const gy=g({logLoss_:py});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function my(e,t,n,r=rt.SUM_BY_NONZERO_WEIGHTS){const s=f(e,"labels","meanSquaredError"),o=f(t,"predictions","meanSquaredError");let a=null;n!=null&&(a=f(n,"weights","meanSquaredError")),st(s.shape,o.shape,"Error in meanSquaredError: ");const i=gs(s,o);return It(i,a,r)}const by=g({meanSquaredError_:my});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function wy(e,t){const n=f(e,"labels","sigmoidCrossEntropyWithLogits"),r=f(t,"logits","sigmoidCrossEntropyWithLogits");st(n.shape,r.shape,"Error in sigmoidCrossEntropyWithLogits: ");const s=Qe(r),o=x(r,n),a=Zr(Pt(bt(ct(r))));return _(N(s,o),a)}function yy(e,t,n,r=0,s=rt.SUM_BY_NONZERO_WEIGHTS){let o=f(e,"multiClassLabels","sigmoidCrossEntropy");const a=f(t,"logits","sigmoidCrossEntropy");let i=null;if(n!=null&&(i=f(n,"weights","sigmoidCrossEntropy")),st(o.shape,a.shape,"Error in sigmoidCrossEntropy: "),r>0){const l=O(r),h=O(1),u=O(.5);o=_(x(o,N(h,l)),x(u,l))}const c=wy(o,a);return It(c,i,s)}const $y=g({sigmoidCrossEntropy_:yy});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ky(e,t,n=-1){if(n===-1&&(n=t.rank-1),n!==t.rank-1)throw Error(`Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank ${t.rank} and dim was ${n}`);return kt((s,o,a)=>{const c=ts(o,[n],!0),l=N(z(o,"float32"),c);a([s,l]);const h=bt(x(l,s));return{value:W(h,[n]),gradFunc:(b,w)=>{const[y,$]=w,S=Ye(b.shape,[n]);return[x(k(b,S),N(z(y,"float32"),Pt($))),x(k(b,S),N(Pt($),z(y,"float32")))]}}})(e,t)}function Ey(e,t,n,r=0,s=rt.SUM_BY_NONZERO_WEIGHTS){let o=f(e,"onehotLabels","softmaxCrossEntropy");const a=f(t,"logits","softmaxCrossEntropy");let i=null;if(n!=null&&(i=f(n,"weights","softmaxCrossEntropy")),st(o.shape,a.shape,"Error in softmaxCrossEntropy: "),r>0){const l=O(r),h=O(1),u=O(o.shape[1]);o=_(x(o,N(h,l)),K(l,u))}const c=ky(o,a);return It(c,i,s)}const Sy=g({softmaxCrossEntropy_:Ey});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xy(e,t,n,r){const s=f(e,"indices","sparseFillEmptyRows","int32"),o=f(t,"values","sparseFillEmptyRows"),a=f(n,"denseShape","sparseFillEmptyRows","int32"),i=f(r,"defaultValue","sparseFillEmptyRows",o.dtype);if(s.rank!==2)throw new Error(`Indices should be Tensor2D but received shape
        ${s.shape}`);if(o.rank!==1)throw new Error(`Values should be Tensor1D but received shape ${o.shape}`);if(a.rank!==1)throw new Error(`Dense shape should be Tensor1D but received shape ${a.shape}`);if(i.rank!==0)throw new Error(`Default value should be a scalar but received shape ${i.shape}`);const c={indices:s,values:o,denseShape:a,defaultValue:i},l=m.runKernel(di,c);return{outputIndices:l[0],outputValues:l[1],emptyRowIndicator:l[2],reverseIndexMap:l[3]}}const vy=g({sparseFillEmptyRows_:xy});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Iy(e,t,n){const r=f(e,"inputIndices","sparseReshape","int32"),s=f(t,"inputShape","sparseReshape","int32"),o=f(n,"newShape","sparseReshape","int32");if(r.rank!==2)throw new Error(`Input indices should be Tensor2D but received shape
        ${r.shape}`);if(s.rank!==1)throw new Error(`Input shape should be Tensor1D but received shape ${s.shape}`);if(o.rank!==1)throw new Error(`New shape should be Tensor1D but received shape ${o.shape}`);const a={inputIndices:r,inputShape:s,newShape:o},i=m.runKernel(pi,a);return{outputIndices:i[0],outputShape:i[1]}}const Ty=g({sparseReshape_:Iy});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _y(e,t,n){const r=f(e,"data","sparseSegmentMean"),s=f(t,"indices","sparseSegmentMean","int32"),o=f(n,"segmentIds","sparseSegmentMean","int32");if(r.rank<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(s.rank!==1)throw new Error(`Indices should be Tensor1D but received shape
          ${s.shape}`);if(o.rank!==1)throw new Error(`Segment ids should be Tensor1D but received shape
          ${o.shape}`);const a={data:r,indices:s,segmentIds:o};return m.runKernel(gi,a)}const Ay=g({sparseSegmentMean_:_y});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Dy(e,t,n){const r=f(e,"data","sparseSegmentSum"),s=f(t,"indices","sparseSegmentSum","int32"),o=f(n,"segmentIds","sparseSegmentSum","int32");if(r.rank<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(s.rank!==1)throw new Error(`Indices should be Tensor1D but received shape
         ${s.shape}`);if(o.rank!==1)throw new Error(`Segment ids should be Tensor1D but received shape
         ${o.shape}`);const a={data:r,indices:s,segmentIds:o};return m.runKernel(mi,a)}const My=g({sparseSegmentSum_:Dy});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ny(e,t,n,r,s,o,a,i){const c=f(e,"data","stringNGrams","string");if(c.dtype!=="string")throw new Error("Data must be of datatype string");if(c.shape.length!==1)throw new Error(`Data must be a vector, saw: ${c.shape}`);const l=f(t,"dataSplits","stringNGrams");if(l.dtype!=="int32")throw new Error("Data splits must be of datatype int32");const h={separator:n,nGramWidths:r,leftPad:s,rightPad:o,padWidth:a,preserveShortSequences:i},u={data:c,dataSplits:l},d=m.runKernel($i,u,h);return{nGrams:d[0],nGramsSplits:d[1]}}const By=g({stringNGrams_:Ny});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Cy(e,t,n=!0){const r=f(e,"input","stringSplit","string"),s=f(t,"delimiter","stringSplit","string");if(r.rank!==1)throw new Error(`Input should be Tensor1D but received shape ${r.shape}`);if(s.rank!==0)throw new Error(`Delimiter should be a scalar but received shape ${s.shape}`);const o={skipEmpty:n},a={input:r,delimiter:s},i=m.runKernel(ki,a,o);return{indices:i[0],values:i[1],shape:i[2]}}const Fy=g({stringSplit_:Cy});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ry(e,t){const n=f(e,"input","stringToHashBucketFast","string"),r={numBuckets:t};if(t<=0)throw new Error("Number of buckets must be at least 1");const s={input:n};return m.runKernel(Ei,s,r)}const Py=g({stringToHashBucketFast_:Ry});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ru={fft:In,ifft:Ke,rfft:Tn,irfft:ps},Pu={hammingWindow:dw,hannWindow:Mu,frame:Nu,stft:bw},Ou={flipLeftRight:kw,grayscaleToRGB:Sw,resizeNearestNeighbor:Hw,resizeBilinear:zw,rotateWithOffset:vw,cropAndResize:yw,nonMaxSuppression:Tw,nonMaxSuppressionAsync:Fw,nonMaxSuppressionWithScore:Pw,nonMaxSuppressionWithScoreAsync:Lw,nonMaxSuppressionPadded:Kw,nonMaxSuppressionPaddedAsync:qw,threshold:Yw,transform:Zw},Lu={bandPart:ty,gramSchmidt:ny,qr:sy},Wu={absoluteDifference:iy,computeWeightedLoss:It,cosineDistance:ly,hingeLoss:hy,huberLoss:dy,logLoss:gy,meanSquaredError:by,sigmoidCrossEntropy:$y,softmaxCrossEntropy:Sy},Ku={sparseFillEmptyRows:vy,sparseReshape:Ty,sparseSegmentMean:Ay,sparseSegmentSum:My},Gu={stringNGrams:By,stringSplit:Fy,stringToHashBucketFast:Py};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Gt extends yc{minimize(t,n=!1,r){const{value:s,grads:o}=this.computeGradients(t,r);if(r!=null){const a=r.map(i=>({name:i.name,tensor:o[i.name]}));this.applyGradients(a)}else this.applyGradients(o);return ot(o),n?s:(s.dispose(),null)}get iterations(){return this.iterations_==null&&(this.iterations_=0),this.iterations_}incrementIterations(){this.iterations_=this.iterations+1}computeGradients(t,n){return El(t,n)}dispose(){this.iterations_!=null&&ot(this.iterations_)}async saveIterations(){return this.iterations_==null&&(this.iterations_=0),{name:"iter",tensor:O(this.iterations_,"int32")}}async getWeights(){throw new Error("getWeights() is not implemented for this optimizer yet.")}async setWeights(t){throw new Error(`setWeights() is not implemented for this optimizer class ${this.getClassName()}`)}async extractIterations(t){return this.iterations_=(await t[0].tensor.data())[0],t.slice(1)}}Object.defineProperty(Gt,Symbol.hasInstance,{value:e=>e.minimize!=null&&e.computeGradients!=null&&e.applyGradients!=null});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Fn extends Gt{constructor(t,n,r=null){super(),this.learningRate=t,this.rho=n,this.epsilon=r,this.accumulatedGrads=[],this.accumulatedUpdates=[],r==null&&(this.epsilon=m.backend.epsilon())}applyGradients(t){(Array.isArray(t)?t.map(r=>r.name):Object.keys(t)).forEach((r,s)=>{const o=m.registeredVariables[r],a=!1;this.accumulatedGrads[s]==null&&(this.accumulatedGrads[s]={originalName:`${r}/accum_grad`,variable:j(()=>lt(o).variable(a))}),this.accumulatedUpdates[s]==null&&(this.accumulatedUpdates[s]={originalName:`${r}/accum_var`,variable:j(()=>lt(o).variable(a))});const i=Array.isArray(t)?t[s].tensor:t[r];if(i==null)return;const c=this.accumulatedGrads[s].variable,l=this.accumulatedUpdates[s].variable;j(()=>{const h=_(x(c,this.rho),x(dt(i),1-this.rho)),u=x(K($t(_(l,this.epsilon)),$t(_(c,this.epsilon))),i),d=_(x(l,this.rho),x(dt(u),1-this.rho));c.assign(h),l.assign(d);const b=_(x(u,-this.learningRate),o);o.assign(b)})}),this.incrementIterations()}dispose(){this.accumulatedUpdates!=null&&(ot(this.accumulatedGrads.map(t=>t.variable)),ot(this.accumulatedUpdates.map(t=>t.variable)))}async getWeights(){const t=[...this.accumulatedGrads,...this.accumulatedUpdates];return[await this.saveIterations()].concat(t.map(n=>({name:n.originalName,tensor:n.variable})))}async setWeights(t){t=await this.extractIterations(t);const n=t.length/2,r=!1;this.accumulatedGrads=t.slice(0,n).map(s=>({originalName:s.name,variable:s.tensor.variable(r)})),this.accumulatedUpdates=t.slice(n,n*2).map(s=>({originalName:s.name,variable:s.tensor.variable(r)}))}getConfig(){return{learningRate:this.learningRate,rho:this.rho,epsilon:this.epsilon}}static fromConfig(t,n){return new t(n.learningRate,n.rho,n.epsilon)}}Fn.className="Adadelta";Kt(Fn);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Rn extends Gt{constructor(t,n=.1){super(),this.learningRate=t,this.initialAccumulatorValue=n,this.accumulatedGrads=[]}applyGradients(t){(Array.isArray(t)?t.map(r=>r.name):Object.keys(t)).forEach((r,s)=>{const o=m.registeredVariables[r];this.accumulatedGrads[s]==null&&(this.accumulatedGrads[s]={originalName:`${r}/accumulator`,variable:j(()=>xe(o.shape,this.initialAccumulatorValue).variable(!1))});const a=Array.isArray(t)?t[s].tensor:t[r];if(a==null)return;const i=this.accumulatedGrads[s].variable;j(()=>{const c=_(i,dt(a));i.assign(c);const l=_(x(K(a,$t(_(c,m.backend.epsilon()))),-this.learningRate),o);o.assign(l)})}),this.incrementIterations()}dispose(){this.accumulatedGrads!=null&&ot(this.accumulatedGrads.map(t=>t.variable))}async getWeights(){return[await this.saveIterations()].concat(this.accumulatedGrads.map(t=>({name:t.originalName,tensor:t.variable})))}async setWeights(t){t=await this.extractIterations(t);const n=!1;this.accumulatedGrads=t.map(r=>({originalName:r.name,variable:r.tensor.variable(n)}))}getConfig(){return{learningRate:this.learningRate,initialAccumulatorValue:this.initialAccumulatorValue}}static fromConfig(t,n){return new t(n.learningRate,n.initialAccumulatorValue)}}Rn.className="Adagrad";Kt(Rn);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Pn extends Gt{constructor(t,n,r,s=null){super(),this.learningRate=t,this.beta1=n,this.beta2=r,this.epsilon=s,this.accumulatedFirstMoment=[],this.accumulatedSecondMoment=[],j(()=>{this.accBeta1=O(n).variable(),this.accBeta2=O(r).variable()}),s==null&&(this.epsilon=m.backend.epsilon())}applyGradients(t){const n=Array.isArray(t)?t.map(r=>r.name):Object.keys(t);j(()=>{const r=N(1,this.accBeta1),s=N(1,this.accBeta2);n.forEach((o,a)=>{const i=m.registeredVariables[o],c=!1;this.accumulatedFirstMoment[a]==null&&(this.accumulatedFirstMoment[a]={originalName:`${o}/m`,variable:j(()=>lt(i).variable(c))}),this.accumulatedSecondMoment[a]==null&&(this.accumulatedSecondMoment[a]={originalName:`${o}/v`,variable:j(()=>lt(i).variable(c))});const l=Array.isArray(t)?t[a].tensor:t[o];if(l==null)return;const h=this.accumulatedFirstMoment[a].variable,u=this.accumulatedSecondMoment[a].variable,d=_(x(h,this.beta1),x(l,1-this.beta1)),b=_(x(u,this.beta2),x(dt(l),1-this.beta2)),w=K(d,r),y=K(b,s);h.assign(d),u.assign(b);const $=_(x(K(w,_($t(y),this.epsilon)),-this.learningRate),i);i.assign($)}),this.accBeta1.assign(x(this.accBeta1,this.beta1)),this.accBeta2.assign(x(this.accBeta2,this.beta2))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.accBeta2.dispose(),this.accumulatedFirstMoment!=null&&ot(this.accumulatedFirstMoment.map(t=>t.variable)),this.accumulatedSecondMoment!=null&&ot(this.accumulatedSecondMoment.map(t=>t.variable))}async getWeights(){const t=[...this.accumulatedFirstMoment,...this.accumulatedSecondMoment];return[await this.saveIterations()].concat(t.map(n=>({name:n.originalName,tensor:n.variable})))}async setWeights(t){t=await this.extractIterations(t),j(()=>{this.accBeta1.assign(we(this.beta1,this.iterations_+1)),this.accBeta2.assign(we(this.beta2,this.iterations_+1))});const n=t.length/2,r=!1;this.accumulatedFirstMoment=t.slice(0,n).map(s=>({originalName:s.name,variable:s.tensor.variable(r)})),this.accumulatedSecondMoment=t.slice(n,n*2).map(s=>({originalName:s.name,variable:s.tensor.variable(r)}))}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon}}static fromConfig(t,n){return new t(n.learningRate,n.beta1,n.beta2,n.epsilon)}}Pn.className="Adam";Kt(Pn);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class On extends Gt{constructor(t,n,r,s=null,o=0){super(),this.learningRate=t,this.beta1=n,this.beta2=r,this.epsilon=s,this.decay=o,this.accumulatedFirstMoment=[],this.accumulatedWeightedInfNorm=[],j(()=>{this.iteration=O(0).variable(),this.accBeta1=O(n).variable()}),s==null&&(this.epsilon=m.backend.epsilon())}applyGradients(t){const n=Array.isArray(t)?t.map(r=>r.name):Object.keys(t);j(()=>{const r=N(1,this.accBeta1),s=K(-this.learningRate,_(x(this.iteration,this.decay),1));n.forEach((o,a)=>{const i=m.registeredVariables[o],c=!1;this.accumulatedFirstMoment[a]==null&&(this.accumulatedFirstMoment[a]={originalName:`${o}/m`,variable:lt(i).variable(c)}),this.accumulatedWeightedInfNorm[a]==null&&(this.accumulatedWeightedInfNorm[a]={originalName:`${o}/v`,variable:lt(i).variable(c)});const l=Array.isArray(t)?t[a].tensor:t[o];if(l==null)return;const h=this.accumulatedFirstMoment[a].variable,u=this.accumulatedWeightedInfNorm[a].variable,d=_(x(h,this.beta1),x(l,1-this.beta1)),b=x(u,this.beta2),w=ct(l),y=ss(b,w);h.assign(d),u.assign(y);const $=_(x(K(s,r),K(d,_(y,this.epsilon))),i);i.assign($)}),this.iteration.assign(_(this.iteration,1)),this.accBeta1.assign(x(this.accBeta1,this.beta1))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.iteration.dispose(),this.accumulatedFirstMoment!=null&&ot(this.accumulatedFirstMoment.map(t=>t.variable)),this.accumulatedWeightedInfNorm!=null&&ot(this.accumulatedWeightedInfNorm.map(t=>t.variable))}async getWeights(){throw new Error("getWeights() is not implemented for Adamax yet.")}async setWeights(t){throw new Error("setWeights() is not implemented for Adamax yet.")}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon,decay:this.decay}}static fromConfig(t,n){return new t(n.learningRate,n.beta1,n.beta2,n.epsilon,n.decay)}}On.className="Adamax";Kt(On);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class tn extends Gt{constructor(t){super(),this.learningRate=t,this.setLearningRate(t)}applyGradients(t){(Array.isArray(t)?t.map(r=>r.name):Object.keys(t)).forEach((r,s)=>{const o=Array.isArray(t)?t[s].tensor:t[r];if(o==null)return;const a=m.registeredVariables[r];j(()=>{const i=_(x(this.c,o),a);a.assign(i)})}),this.incrementIterations()}setLearningRate(t){this.learningRate=t,this.c!=null&&this.c.dispose(),this.c=oc(O(-t))}dispose(){this.c.dispose()}async getWeights(){return[await this.saveIterations()]}async setWeights(t){if(t=await this.extractIterations(t),t.length!==0)throw new Error("SGD optimizer does not have settable weights.")}getConfig(){return{learningRate:this.learningRate}}static fromConfig(t,n){return new t(n.learningRate)}}tn.className="SGD";Kt(tn);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Ln extends tn{constructor(t,n,r=!1){super(t),this.learningRate=t,this.momentum=n,this.useNesterov=r,this.accumulations=[],this.m=O(this.momentum)}applyGradients(t){(Array.isArray(t)?t.map(r=>r.name):Object.keys(t)).forEach((r,s)=>{const o=m.registeredVariables[r];this.accumulations[s]==null&&(this.accumulations[s]={originalName:`${r}/momentum`,variable:j(()=>lt(o).variable(!1))});const a=this.accumulations[s].variable,i=Array.isArray(t)?t[s].tensor:t[r];i!=null&&j(()=>{let c;const l=_(x(this.m,a),i);this.useNesterov?c=_(x(this.c,_(i,x(l,this.m))),o):c=_(x(this.c,l),o),a.assign(l),o.assign(c)})}),this.incrementIterations()}dispose(){this.m.dispose(),this.accumulations!=null&&ot(this.accumulations.map(t=>t.variable))}setMomentum(t){this.momentum=t}async getWeights(){return[await this.saveIterations()].concat(this.accumulations.map(t=>({name:t.originalName,tensor:t.variable})))}async setWeights(t){t=await this.extractIterations(t);const n=!1;this.accumulations=t.map(r=>({originalName:r.name,variable:r.tensor.variable(n)}))}getConfig(){return{learningRate:this.learningRate,momentum:this.momentum,useNesterov:this.useNesterov}}static fromConfig(t,n){return new t(n.learningRate,n.momentum,n.useNesterov)}}Ln.className="Momentum";Kt(Ln);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Wn extends Gt{constructor(t,n=.9,r=0,s=null,o=!1){if(super(),this.learningRate=t,this.decay=n,this.momentum=r,this.epsilon=s,this.accumulatedMeanSquares=[],this.accumulatedMoments=[],this.accumulatedMeanGrads=[],this.centered=o,s==null&&(this.epsilon=m.backend.epsilon()),t==null)throw new Error("learningRate for RMSPropOptimizer must be defined.")}applyGradients(t){(Array.isArray(t)?t.map(r=>r.name):Object.keys(t)).forEach((r,s)=>{const o=m.registeredVariables[r],a=!1;this.accumulatedMeanSquares[s]==null&&(this.accumulatedMeanSquares[s]={originalName:`${r}/rms`,variable:j(()=>lt(o).variable(a))}),this.accumulatedMoments[s]==null&&(this.accumulatedMoments[s]={originalName:`${r}/momentum`,variable:j(()=>lt(o).variable(a))}),this.accumulatedMeanGrads[s]==null&&this.centered&&(this.accumulatedMeanGrads[s]={originalName:`${r}/mg`,variable:j(()=>lt(o).variable(a))});const i=Array.isArray(t)?t[s].tensor:t[r];if(i==null)return;const c=this.accumulatedMeanSquares[s].variable,l=this.accumulatedMoments[s].variable;j(()=>{const h=_(x(c,this.decay),x(dt(i),1-this.decay));if(this.centered){const u=this.accumulatedMeanGrads[s].variable,d=_(x(u,this.decay),x(i,1-this.decay)),b=K(x(i,this.learningRate),$t(N(h,_(dt(d),this.epsilon)))),w=_(x(l,this.momentum),b);c.assign(h),u.assign(d),l.assign(w);const y=N(o,w);o.assign(y)}else{const u=_(x(c,this.decay),x(dt(i),1-this.decay)),d=_(x(l,this.momentum),K(x(i,this.learningRate),$t(_(u,this.epsilon))));c.assign(u),l.assign(d);const b=N(o,d);o.assign(b)}})}),this.incrementIterations()}dispose(){this.accumulatedMeanSquares!=null&&ot(this.accumulatedMeanSquares.map(t=>t.variable)),this.accumulatedMeanGrads!=null&&this.centered&&ot(this.accumulatedMeanGrads.map(t=>t.variable)),this.accumulatedMoments!=null&&ot(this.accumulatedMoments.map(t=>t.variable))}async getWeights(){const t=[...this.accumulatedMeanSquares,...this.accumulatedMoments];return this.centered&&t.push(...this.accumulatedMeanGrads),[await this.saveIterations()].concat(t.map(n=>({name:n.originalName,tensor:n.variable})))}async setWeights(t){t=await this.extractIterations(t);const n=this.centered?t.length/3:t.length/2,r=!1;this.accumulatedMeanSquares=t.slice(0,n).map(s=>({originalName:s.name,variable:s.tensor.variable(r)})),this.accumulatedMoments=t.slice(n,n*2).map(s=>({originalName:s.name,variable:s.tensor.variable(r)})),this.centered&&(this.accumulatedMeanGrads=t.slice(n*2,n*3).map(s=>({originalName:s.name,variable:s.tensor.variable(r)})))}getConfig(){return{learningRate:this.learningRate,decay:this.decay,momentum:this.momentum,epsilon:this.epsilon,centered:this.centered}}static fromConfig(t,n){return new t(n.learningRate,n.decay,n.momentum,n.epsilon,n.centered)}}Wn.className="RMSProp";Kt(Wn);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Tt{static sgd(t){return new tn(t)}static momentum(t,n,r=!1){return new Ln(t,n,r)}static rmsprop(t,n=.9,r=0,s=null,o=!1){return new Wn(t,n,r,s,o)}static adam(t=.001,n=.9,r=.999,s=null){return new Pn(t,n,r,s)}static adadelta(t=.001,n=.95,r=null){return new Fn(t,n,r)}static adamax(t=.002,n=.9,r=.999,s=null,o=0){return new On(t,n,r,s,o)}static adagrad(t,n=.1){return new Rn(t,n)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Oy={sgd:Tt.sgd,momentum:Tt.momentum,adadelta:Tt.adadelta,adagrad:Tt.adagrad,rmsprop:Tt.rmsprop,adamax:Tt.adamax,adam:Tt.adam};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ly=(()=>typeof requestAnimationFrame<"u"?requestAnimationFrame:typeof setImmediate<"u"?setImmediate:e=>e())();function Wy(){return new Promise(e=>Ly(()=>e()))}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ky(e,t){const n=e[0].length;e.forEach((s,o)=>{p(s.length===n,()=>`Error in concat${n}D: rank of tensors[${o}] must be the same as the rank of the rest (${n})`)}),p(t>=0&&t<n,()=>`Error in concat${n}D: axis must be between 0 and ${n-1}.`);const r=e[0];e.forEach((s,o)=>{for(let a=0;a<n;a++)p(a===t||s[a]===r[a],()=>`Error in concat${n}D: Shape of tensors[${o}] (${s}) does not match the shape of the rest (${r}) along the non-concatenated axis ${o}.`)})}function Gy(e,t){const n=e[0].slice();for(let r=1;r<e.length;r++)n[t]+=e[r][t];return n}/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var mt;(function(e){e[e.FIRST_DIM_SIZE=0]="FIRST_DIM_SIZE",e[e.VALUE_ROWIDS=1]="VALUE_ROWIDS",e[e.ROW_LENGTHS=2]="ROW_LENGTHS",e[e.ROW_SPLITS=3]="ROW_SPLITS",e[e.ROW_LIMITS=4]="ROW_LIMITS",e[e.ROW_STARTS=5]="ROW_STARTS"})(mt||(mt={}));function qy(e,t,n){let r=new Array;if(n==null&&t==null)return r;if(t==null)for(;r.length<e+n.length;)r.push(-1);else r=t.slice();if(n==null)return r;if(e+n.length!==r.length)throw new Error(`rt input.shape and shape=${t} are incompatible: rt input.rank = ${e+n.length}, but shape.rank = ${r.length}`);for(let s=1;s<n.length;++s){const o=n[s],a=r[r.length-n.length+s],i=r[a];if(o>=0)if(i>=0){if(i!==o)throw new Error(`rt input.shape and shape=${t} are incompatible: rt input.shape[${s+e}] = ${o} but shape[${s+e}] = ${i}`)}else r[a]=o}return r}function Uy(e){const t={FIRST_DIM_SIZE:mt.FIRST_DIM_SIZE,VALUE_ROWIDS:mt.VALUE_ROWIDS,ROW_LENGTHS:mt.ROW_LENGTHS,ROW_SPLITS:mt.ROW_SPLITS,ROW_LIMITS:mt.ROW_LIMITS,ROW_STARTS:mt.ROW_STARTS},n=[];for(const r of e)if(r in t)n.push(t[r]);else break;return n}function zy(e){return e.length===0?0:e[0]===mt.FIRST_DIM_SIZE?e.length-1:e.length}function Vy(e,t){if(e==null||t==null)return;const n=e.length,r=t.length;if(n>=r)throw new Error(`defaultValue.shape=${e} and ragged tensor flatValues.shape=${t}, are incompatible: defaultValue.rank = ${n} must be less than ragged tensor input flatValues.rank = ${r})`);for(let s=0;s<Math.min(n,r-1);++s){const o=e[s],a=t[s+1];if(o>=0&&a>=0&&o!==1&&o!==a)throw new Error(`defaultValue.shape=${e}, and ragged tensor input flatValues.shape=${t} are incompatible: defaultValue.shape[${s-e.length}] = ${o} but ragged tensor input.flatValues.shape[${s-e.length}] = ${a}`)}}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const $s=30;function Hy(e){return e<=$s?e:cn(e,Math.floor(Math.sqrt(e)))}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function jy(e,t,n){const r=n*(typeof e=="number"?e:e[0]),s=t*(typeof e=="number"?e:e[1]);return[r,s]}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Xy(e,t,n,r=!0){let s=[];if(r)s=s.concat(t.slice(0)),s.push(e[0]/n),s=s.concat(e.slice(1));else{s=s.concat(e[0]);const o=t.length;for(let a=0;a<o;++a)s=s.concat([e[a+1]/t[a],t[a]]);s=s.concat(e.slice(o+1))}return s}function Yy(e,t,n=!0){const r=[];if(n){r.push(t);for(let s=t+1;s<e;++s)s<=2*t?(r.push(s),r.push(s-(t+1))):r.push(s)}else{const s=[],o=[];for(let a=1;a<e;++a)a>=t*2+1||a%2===1?o.push(a):s.push(a);r.push(...s),r.push(0),r.push(...o)}return r}function Jy(e,t,n,r=!0){const s=[];r?s.push(e[0]/n):s.push(e[0]*n);for(let o=1;o<e.length;++o)o<=t.length?r?s.push(t[o-1]*e[o]):s.push(e[o]/t[o-1]):s.push(e[o]);return s}function Zy(e,t){const n=[0];for(let r=0;r<t;++r)n.push(e[r][0]);return n}function Qy(e,t,n){const r=e.slice(0,1);for(let s=0;s<n;++s)r.push(e[s+1]-t[s][0]-t[s][1]);return r}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const t$=1.7580993408473768,e$=1.0507009873554805;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const n$=.3275911,r$=.254829592,s$=-.284496736,o$=1.421413741,a$=-1.453152027,i$=1.061405429;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function c$(e,t){if(e.length!==t.length)throw new Error(`Cannot merge real and imag arrays of different lengths. real:${e.length}, imag: ${t.length}.`);const n=new Float32Array(e.length*2);for(let r=0;r<n.length;r+=2)n[r]=e[r/2],n[r+1]=t[r/2];return n}function l$(e){const t=new Float32Array(e.length/2),n=new Float32Array(e.length/2);for(let r=0;r<e.length;r+=2)t[r/2]=e[r],n[r/2]=e[r+1];return{real:t,imag:n}}function u$(e){const t=Math.ceil(e.length/4),n=new Float32Array(t),r=new Float32Array(t);for(let s=0;s<e.length;s+=4)n[Math.floor(s/4)]=e[s],r[Math.floor(s/4)]=e[s+1];return{real:n,imag:r}}function h$(e){const t=Math.floor(e.length/4),n=new Float32Array(t),r=new Float32Array(t);for(let s=2;s<e.length;s+=4)n[Math.floor(s/4)]=e[s],r[Math.floor(s/4)]=e[s+1];return{real:n,imag:r}}function f$(e,t){const n=e[t*2],r=e[t*2+1];return{real:n,imag:r}}function d$(e,t,n,r){e[r*2]=t,e[r*2+1]=n}function p$(e,t){const n=new Float32Array(e/2),r=new Float32Array(e/2);for(let s=0;s<Math.ceil(e/2);s++){const o=(t?2:-2)*Math.PI*(s/e);n[s]=Math.cos(o),r[s]=Math.sin(o)}return{real:n,imag:r}}function g$(e,t,n){const r=(n?2:-2)*Math.PI*(e/t),s=Math.cos(r),o=Math.sin(r);return{real:s,imag:o}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Vn="->",m$=/->/g,Bs=",",Cs="...";function b$(e,t){e=e.replace(/\s/g,"");const n=(e.length-e.replace(m$,"").length)/Vn.length;if(n<1)throw new Error("Equations without an arrow are not supported.");if(n>1)throw new Error(`Equation must contain exactly one arrow ("${Vn}").`);const[r,s]=e.split(Vn);p(r.indexOf(Cs)===-1,()=>`The ellipsis notation ("${Cs}") is not supported yet.`);const o=r.split(Bs),a=o.length;if(t!==a)throw new Error(`Expected ${a} input tensors, received ${t}`);if(a>2)throw new Error("Support for more than 2 input tensors is not implemented yet.");const i=[];for(let d=0;d<s.length;++d){const b=s[d];if(!o.some(w=>w.indexOf(b)!==-1))throw new Error(`Output subscripts contain the label ${b} not present in the input subscripts.`);i.indexOf(b)===-1&&i.push(b)}for(let d=0;d<r.length;++d){const b=r[d];i.indexOf(b)===-1&&b!==Bs&&i.push(b)}const c=new Array(o.length);for(let d=0;d<a;++d){if(new Set(o[d].split("")).size!==o[d].length)throw new Error(`Found duplicate axes in input component ${o[d]}. Support for duplicate axes in input is not implemented yet.`);c[d]=[];for(let b=0;b<o[d].length;++b)c[d].push(i.indexOf(o[d][b]))}const l=i.length,h=s.length,u=[];for(let d=h;d<l;++d)u.push(d);return{allDims:i,summedDims:u,idDims:c}}function w$(e,t){let n=new Array(e);n.fill(-1);for(let s=0;s<t.length;++s)n[t[s]]=s;const r=[];for(let s=0;s<e;++s)n[s]===-1&&r.push(s);return n=n.filter(s=>s!==-1),{permutationIndices:n,expandDims:r}}function y$(e,t,n){const r=new Array(e);for(let s=0;s<n.length;++s){const o=n[s].shape;for(let a=0;a<t[s].length;++a)r[t[s][a]]===void 0?r[t[s][a]]=o[a]:p(r[t[s][a]]===o[a],()=>`Expected dimension ${r[t[s][a]]} at axis ${a} of input shaped ${JSON.stringify(o)}, but got dimension ${o[a]}`)}}function $$(e,t){const n=e,r=[];let s=0;e.length===0&&n.push(-1),s=e.length+1;for(let a=0;a<s;++a)r.push([]);const o=[];for(let a=0;a<n.length;++a){const i=n[a],c=E$(t,i);for(const l of c)o.indexOf(l)===-1&&(r[a].push(l),o.push(l))}return{path:n,steps:r}}function k$(e){return e.every((t,n)=>t===n)}function E$(e,t){const n=[];for(let r=0;r<e.length;++r)(e[r].length===0||e[r].indexOf(t)!==-1||t===-1)&&n.push(r);return n}function S$(e,t,n=0){let r=[];if(typeof t=="number")p(e.shape[n]%t===0,()=>"Number of splits must evenly divide the axis."),r=new Array(t).fill(e.shape[n]/t);else{const s=t.reduce((a,i)=>(i===-1&&(a+=1),a),0);p(s<=1,()=>"There should be only one negative value in split array.");const o=t.indexOf(-1);if(o!==-1){const a=t.reduce((i,c)=>c>0?i+c:i);t[o]=e.shape[n]-a}p(e.shape[n]===t.reduce((a,i)=>a+i),()=>"The sum of sizes must match the size of the axis dimension."),r=t}return r}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function x$(e){return`Received SparseTensor with denseShape[0] = 0 but
  indices.shape[0] = ${e}`}function v$(e,t){return`indices(${e}, 0) is invalid: ${t} < 0`}function I$(e,t,n){return`indices(${e}, 0) is invalid: ${t} >= ${n}`}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function T$(e,t){return`only one output dimension may be -1, not both ${e} and ${t}`}function _$(e,t){return`size ${e} must be non-negative, not ${t}`}function A$(){return"reshape cannot infer the missing input size for an empty tensor unless all specified input sizes are non-zero"}function D$(e,t){const n=q(e),r=q(t);return`Input to reshape is a SparseTensor with ${n}
  dense values, but the requested shape requires a multiple of ${r}. inputShape=${e} outputShape= ${t}`}function M$(e,t){const n=q(e),r=q(t);return`Input to reshape is a tensor with ${n} dense values, but the requested shape has ${r}. inputShape=${e} outputShape=${t}`}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function N$(){return"segment ids must be >= 0"}function B$(){return"segment ids are not increasing"}function C$(e,t){return`Segment id ${e} out of range [0, ${t}), possibly because segmentIds input is not sorted.`}function F$(e,t,n){return`Bad: indices[${e}] == ${t} out of range [0, ${n})`}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function R$(e,t){let n=!1,r;for(e<=$s?(r=e,n=!0):r=cn(e,Math.floor(Math.sqrt(e)));!n;)r>t||r===e?n=!0:r=cn(e,r+1);return r}function P$(e,t,n){const r=[],s=e.length;for(let o=0;o<s;o++)o!==t?r.push(e[o]):r.push(n);return r}function O$(e,t,n,r){const s=t.shape.length,o=e.shape.length;if(r!==0&&(r<-s||r>s))throw new Error(`Expect batchDims in the range of [-${s}, ${s}], but got ${r}`);if(r<0&&(r+=s),r>o)throw new Error(`batchDims (${r}) must be less than rank(x) (
    ${o}).`);if(n<r)throw new Error(`batchDims (${r}) must be less than or equal to axis (${n}).`);for(let u=0;u<r;++u)if(e.shape[u]!==t.shape[u])throw new Error(`x.shape[${u}]: ${e.shape[u]} should be equal to indices.shape[${u}]: ${t.shape[u]}.`);const a=e.shape[n],i=[];let c=1,l=1,h=1;for(let u=0;u<r;++u)i.push(e.shape[u]),c*=e.shape[u];for(let u=r;u<n;u++)i.push(e.shape[u]),l*=e.shape[u];for(let u=r;u<s;u++)i.push(t.shape[u]);for(let u=n+1;u<o;u++)i.push(e.shape[u]),h*=e.shape[u];return{batchSize:c,sliceSize:h,outerSize:l,dimSize:a,outputShape:i}}const L$=Object.freeze(Object.defineProperty({__proto__:null,collectGatherOpShapeInfo:O$,computeOutShape:P$,segOpComputeOptimalWindowSize:R$},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function W$(e){try{return e.map(t=>hn(t))}catch(t){throw new Error(`Failed to decode encoded string bytes into utf-8, error: ${t}`)}}function K$(e){return e.map(t=>Ue(t))}const G$=Object.freeze(Object.defineProperty({__proto__:null,ERF_A1:r$,ERF_A2:s$,ERF_A3:o$,ERF_A4:a$,ERF_A5:i$,ERF_P:n$,PARALLELIZE_THRESHOLD:$s,get RowPartitionType(){return mt},SELU_SCALE:e$,SELU_SCALEALPHA:t$,applyActivation:Bn,assertAndGetBroadcastShape:X,assertAxesAreInnerMostDims:Pg,assertParamsConsistent:Ky,assignToTypedArray:d$,axesAreInnerMostDims:Vr,calculateShapes:lc,checkEinsumDimSizes:y$,checkPadOnDimRoundingMode:pt,combineLocations:fl,combineRaggedTensorToTensorShapes:qy,complexWithEvenIndex:u$,complexWithOddIndex:h$,computeConv2DInfo:He,computeConv3DInfo:Fc,computeDefaultPad:Wr,computeDilation2DInfo:Rp,computeOptimalWindowSize:Hy,computeOutAndReduceShapes:Rg,computeOutShape:Gy,computePool2DInfo:Cc,computePool3DInfo:Pp,convertConv2DDataFormat:Rc,decodeEinsumEquation:b$,eitherStridesOrDilationsAreOne:vt,expandShapeToKeepDim:Ye,exponent:g$,exponents:p$,fromStringArrayToUint8:K$,fromUint8ToStringArray:W$,getAxesPermutation:Og,getBroadcastDims:ac,getComplexWithIndex:f$,getEinsumComputePath:$$,getEinsumPermutation:w$,getFusedBiasGradient:Nn,getFusedDyActivation:Mn,getImageCenter:jy,getInnerMostAxes:Wg,getPermuted:Yy,getRaggedRank:zy,getReductionAxes:Br,getReshaped:Xy,getReshapedPermuted:Jy,getRowPartitionTypesHelper:Uy,getSliceBeginCoords:Zy,getSliceSize:Qy,getSparseFillEmptyRowsIndicesDenseShapeMismatch:x$,getSparseFillEmptyRowsNegativeIndexErrorMessage:v$,getSparseFillEmptyRowsOutOfRangeIndexErrorMessage:I$,getSparseReshapeEmptyTensorZeroOutputDimErrorMessage:A$,getSparseReshapeInputOutputMismatchErrorMessage:M$,getSparseReshapeInputOutputMultipleErrorMessage:D$,getSparseReshapeMultipleNegativeOneOutputDimErrorMessage:T$,getSparseReshapeNegativeOutputDimErrorMessage:_$,getSparseSegmentReductionIndicesOutOfRangeErrorMessage:F$,getSparseSegmentReductionNegativeSegmentIdsErrorMessage:N$,getSparseSegmentReductionNonIncreasingSegmentIdsErrorMessage:B$,getSparseSegmentReductionSegmentIdOutOfRangeErrorMessage:C$,getUndoAxesPermutation:Lg,isIdentityPermutation:k$,log:Ch,mergeRealAndImagArrays:c$,prepareAndValidate:cc,prepareSplitSize:S$,segment_util:L$,shouldFuse:Cn,slice_util:wc,splitRealAndImagArrays:l$,tupleValuesAreOne:Oe,upcastType:kn,validateDefaultValueShape:Vy,validateInput:Rr,validateUpdateShape:Fr,warn:At},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const q$=Object.freeze(Object.defineProperty({__proto__:null,nonMaxSuppressionV3Impl:Bu,nonMaxSuppressionV4Impl:Cu,nonMaxSuppressionV5Impl:Fu,whereImpl:Eu},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const U$=Object.freeze(Object.defineProperty({__proto__:null,Abs:js,Acos:Xs,Acosh:Ys,AdadeltaOptimizer:Fn,AdagradOptimizer:Rn,AdamOptimizer:Pn,AdamaxOptimizer:On,Add:$r,AddN:Js,All:Zs,Any:Qs,ArgMax:to,ArgMin:eo,Asin:no,Asinh:ro,Atan:so,Atan2:ao,Atanh:oo,AvgPool:io,AvgPool3D:co,AvgPool3DGrad:bh,AvgPoolGrad:mh,BatchMatMul:lo,BatchToSpaceND:uo,Bincount:ho,BroadcastArgs:fo,BroadcastTo:wh,Cast:kr,Ceil:po,ClipByValue:go,Complex:mo,ComplexAbs:bo,Concat:wo,Conv2D:yo,Conv2DBackpropFilter:$o,Conv2DBackpropInput:ko,Conv3D:Eo,Conv3DBackpropFilterV2:yh,Conv3DBackpropInputV2:So,Cos:xo,Cosh:vo,CropAndResize:_o,Cumprod:Io,Cumsum:To,DataStorage:Xu,DenseBincount:Ao,DepthToSpace:Do,DepthwiseConv2dNative:Mo,DepthwiseConv2dNativeBackpropFilter:No,DepthwiseConv2dNativeBackpropInput:Bo,Diag:Co,Dilation2D:Fo,Dilation2DBackpropFilter:kh,Dilation2DBackpropInput:$h,get ENV(){return wr},Einsum:Po,Elu:Oo,EluGrad:Eh,Environment:Vs,Equal:Wo,Erf:Lo,Exp:Ko,ExpandDims:Go,Expm1:qo,FFT:Uo,Fill:zo,FlipLeftRight:Vo,Floor:Ho,FloorDiv:jo,FromPixels:jn,FusedBatchNorm:Xo,FusedConv2D:Yn,FusedDepthwiseConv2D:Jn,GatherNd:Jo,GatherV2:Yo,Greater:Zo,GreaterEqual:Qo,IFFT:ta,Identity:Er,Imag:ea,IsFinite:na,IsInf:ra,IsNan:sa,KernelBackend:Fs,LRN:pa,LRNGrad:Ih,LeakyRelu:oa,Less:aa,LessEqual:ia,LinSpace:ca,Log:la,Log1p:ua,LogSoftmax:xh,LogicalAnd:ha,LogicalNot:fa,LogicalOr:da,LogicalXor:Sh,LowerBound:vh,Max:ga,MaxPool:ba,MaxPool3D:wa,MaxPool3DGrad:_h,MaxPoolGrad:Th,MaxPoolWithArgmax:ya,Maximum:ma,Mean:$a,Min:ka,Minimum:Ea,MirrorPad:Sa,Mod:xa,MomentumOptimizer:Ln,Multinomial:va,Multiply:Ia,Neg:Ta,NonMaxSuppressionV3:Aa,NonMaxSuppressionV4:Da,NonMaxSuppressionV5:Ma,NotEqual:_a,OP_SCOPE_SUFFIX:Ir,OneHot:Ba,OnesLike:Na,Optimizer:Gt,OptimizerConstructors:Tt,Pack:Ca,PadV2:Fa,Pool:Ah,Pow:Ra,Prelu:Pa,Prod:Oa,RMSPropOptimizer:Wn,RaggedGather:La,RaggedTensorToTensor:Wa,Range:Ka,get Rank(){return tr},Real:Ga,RealDiv:Ro,Reciprocal:qa,get Reduction(){return rt},Relu:Ua,Relu6:ja,Reshape:za,ResizeBilinear:Ha,ResizeBilinearGrad:Mh,ResizeNearestNeighbor:Va,ResizeNearestNeighborGrad:Dh,Reverse:Xa,RotateWithOffset:Bi,Round:Ya,Rsqrt:Ja,SGDOptimizer:tn,ScatterNd:Za,SearchSorted:Qa,Select:ti,Selu:ei,Sigmoid:ai,Sign:oi,Sin:ri,Sinh:si,Slice:ni,Softmax:fi,Softplus:ii,SpaceToBatchND:ui,SparseFillEmptyRows:di,SparseReshape:pi,SparseSegmentMean:gi,SparseSegmentSum:mi,SparseToDense:bi,SplitV:hi,Sqrt:ci,Square:Nh,SquaredDifference:wi,Step:Ni,StridedSlice:yi,StringNGrams:$i,StringSplit:ki,StringToHashBucketFast:Ei,Sub:Si,Sum:li,Tan:xi,Tanh:vi,Tensor:H,TensorBuffer:fn,Tile:Sr,TopK:Ii,Transform:Ti,Transpose:rn,Unique:_i,Unpack:Ai,UnsortedSegmentSum:Di,UpperBound:Bh,Variable:Fe,ZerosLike:Mi,_FusedMatMul:Xn,abs:ct,acos:Ec,acosh:Sc,add:_,addN:xc,all:vc,any:Ic,argMax:Tc,argMin:_c,asin:Ac,asinh:Dc,atan:Mc,atan2:Nc,atanh:Bc,avgPool:Kr,avgPool3d:Pc,backend:Md,backend_util:G$,basicLSTMCell:Oc,batchNorm:je,batchNorm2d:Lc,batchNorm3d:Wc,batchNorm4d:Kc,batchToSpaceND:Gr,bincount:qr,booleanMaskAsync:Su,broadcastArgs:Gc,broadcastTo:Me,broadcast_util:Wd,browser:jd,buffer:yt,cast:z,ceil:qc,clipByValue:Uc,clone:Ft,complex:xt,concat:at,concat1d:zc,concat2d:Vc,concat3d:Hc,concat4d:jc,conv1d:Xc,conv2d:Xe,conv2dTranspose:Jc,conv3d:Zc,conv3dTranspose:Qc,copyRegisteredKernels:Oh,cos:tl,cosh:el,cosineWindow:Dn,cumprod:nl,cumsum:rl,customGrad:kt,denseBincount:sl,deprecationWarn:wd,depthToSpace:ol,depthwiseConv2d:En,device_util:gf,diag:al,dilation2d:il,disableDeprecationWarnings:bd,dispose:ot,disposeVariables:yd,div:K,divNoNan:cl,dot:ll,dropout:_u,einsum:ul,elu:zr,enableDebugMode:md,enableProdMode:gd,enclosingPowerOfTwo:ws,engine:$d,env:M,equal:Ur,erf:hl,euclideanNorm:pl,exp:Pt,expandDims:_t,expm1:gl,eye:Hr,fft:In,fill:xe,findBackend:_d,findBackendFactory:Ad,floor:jr,floorDiv:Lr,fused:Du,gather:Xr,gatherND:Tu,gather_util:Xd,getBackend:Id,getGradient:Zn,getKernel:ln,getKernelsForBackend:un,grad:dm,grads:pm,greater:Ze,greaterEqual:Yr,ifft:Ke,imag:Ve,image:Ou,inTopKAsync:Au,io:fd,irfft:ps,isFinite:ml,isInf:bl,isNaN:wl,keep:oc,kernel_impls:q$,leakyRelu:Jr,less:yl,lessEqual:Sn,linalg:Lu,linspace:$l,localResponseNormalization:kl,log:ye,log1p:Zr,logSigmoid:Sl,logSoftmax:xl,logSumExp:ts,logicalAnd:Le,logicalNot:es,logicalOr:ns,logicalXor:vl,losses:Wu,lowerBound:Il,matMul:P,math:Ld,max:Yt,maxPool:rs,maxPool3d:Tl,maxPoolWithArgmax:_l,maximum:ss,mean:We,memory:kd,meshgrid:Al,min:bn,minimum:os,mirrorPad:Dl,mod:Ml,moments:Nl,movingAverage:xu,mul:x,multiRNNCell:Bl,multinomial:Cl,neg:bt,nextFrame:Wy,norm:Je,notEqual:as,oneHot:pn,ones:Bt,onesLike:Fl,op:g,outerProduct:Rl,pad:ve,pad1d:Pl,pad2d:Ol,pad3d:Ll,pad4d:Wl,pool:Kl,pow:we,prelu:cs,print:Dr,prod:Gl,profile:Ed,raggedGather:ql,raggedTensorToTensor:Ul,rand:zl,randomGamma:Vl,randomNormal:us,randomStandardNormal:Hl,randomUniform:hs,range:$e,ready:vd,real:be,reciprocal:jl,registerBackend:Dd,registerGradient:Fh,registerKernel:Ci,relu:Qe,relu6:fs,removeBackend:Td,reshape:k,reverse:Ot,reverse1d:Xl,reverse2d:Yl,reverse3d:Jl,reverse4d:Zl,rfft:Tn,round:ds,rsqrt:Ql,scalar:O,scatterND:vu,scatter_util:Yd,searchSorted:vn,selu:tu,separableConv2d:eu,serialization:ip,setBackend:xd,setPlatform:Nd,setdiff1dAsync:nu,sigmoid:Xt,sign:ru,signal:Pu,sin:su,sinh:ou,slice:G,slice1d:au,slice2d:iu,slice3d:cu,slice4d:lu,slice_util:wc,softmax:uu,softplus:Qr,spaceToBatchND:is,sparse:Ku,sparseToDense:Iu,spectral:Ru,split:ke,sqrt:$t,square:dt,squaredDifference:gs,squeeze:_n,stack:Ee,step:ms,stridedSlice:hu,string:Gu,sub:N,sum:W,sumOutType:of,tan:fu,tanh:mn,tensor:Ht,tensor1d:ft,tensor2d:de,tensor3d:Cr,tensor4d:du,tensor5d:pu,tensor6d:gu,tensor_util:lf,test_util:bp,tidy:j,tile:fe,time:Sd,topk:mu,train:Oy,transpose:Pe,truncatedNormal:bu,unique:wu,unregisterGradient:Ph,unregisterKernel:Rh,unsortedSegmentSum:yu,unstack:An,upcastType:kn,upperBound:$u,util:Hh,valueAndGrad:gm,valueAndGrads:mm,variable:ku,variableGrads:El,version_core:wp,where:ee,whereAsync:bs,zeros:ne,zerosLike:lt},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const j$=Object.freeze(Object.defineProperty({__proto__:null,OP_SCOPE_SUFFIX:Ir,abs:ct,acos:Ec,acosh:Sc,add:_,addN:xc,all:vc,any:Ic,argMax:Tc,argMin:_c,asin:Ac,asinh:Dc,atan:Mc,atan2:Nc,atanh:Bc,avgPool:Kr,avgPool3d:Pc,basicLSTMCell:Oc,batchNorm:je,batchNorm2d:Lc,batchNorm3d:Wc,batchNorm4d:Kc,batchToSpaceND:Gr,bincount:qr,booleanMaskAsync:Su,broadcastArgs:Gc,broadcastTo:Me,buffer:yt,cast:z,ceil:qc,clipByValue:Uc,clone:Ft,complex:xt,concat:at,concat1d:zc,concat2d:Vc,concat3d:Hc,concat4d:jc,conv1d:Xc,conv2d:Xe,conv2dTranspose:Jc,conv3d:Zc,conv3dTranspose:Qc,cos:tl,cosh:el,cosineWindow:Dn,cumprod:nl,cumsum:rl,denseBincount:sl,depthToSpace:ol,depthwiseConv2d:En,diag:al,dilation2d:il,div:K,divNoNan:cl,dot:ll,dropout:_u,einsum:ul,elu:zr,enclosingPowerOfTwo:ws,equal:Ur,erf:hl,euclideanNorm:pl,exp:Pt,expandDims:_t,expm1:gl,eye:Hr,fft:In,fill:xe,floor:jr,floorDiv:Lr,fused:Du,gather:Xr,gatherND:Tu,greater:Ze,greaterEqual:Yr,ifft:Ke,imag:Ve,image:Ou,inTopKAsync:Au,irfft:ps,isFinite:ml,isInf:bl,isNaN:wl,leakyRelu:Jr,less:yl,lessEqual:Sn,linalg:Lu,linspace:$l,localResponseNormalization:kl,log:ye,log1p:Zr,logSigmoid:Sl,logSoftmax:xl,logSumExp:ts,logicalAnd:Le,logicalNot:es,logicalOr:ns,logicalXor:vl,losses:Wu,lowerBound:Il,matMul:P,max:Yt,maxPool:rs,maxPool3d:Tl,maxPoolWithArgmax:_l,maximum:ss,mean:We,meshgrid:Al,min:bn,minimum:os,mirrorPad:Dl,mod:Ml,moments:Nl,movingAverage:xu,mul:x,multiRNNCell:Bl,multinomial:Cl,neg:bt,norm:Je,notEqual:as,oneHot:pn,ones:Bt,onesLike:Fl,op:g,outerProduct:Rl,pad:ve,pad1d:Pl,pad2d:Ol,pad3d:Ll,pad4d:Wl,pool:Kl,pow:we,prelu:cs,print:Dr,prod:Gl,raggedGather:ql,raggedTensorToTensor:Ul,rand:zl,randomGamma:Vl,randomNormal:us,randomStandardNormal:Hl,randomUniform:hs,range:$e,real:be,reciprocal:jl,relu:Qe,relu6:fs,reshape:k,reverse:Ot,reverse1d:Xl,reverse2d:Yl,reverse3d:Jl,reverse4d:Zl,rfft:Tn,round:ds,rsqrt:Ql,scalar:O,scatterND:vu,searchSorted:vn,selu:tu,separableConv2d:eu,setdiff1dAsync:nu,sigmoid:Xt,sign:ru,signal:Pu,sin:su,sinh:ou,slice:G,slice1d:au,slice2d:iu,slice3d:cu,slice4d:lu,softmax:uu,softplus:Qr,spaceToBatchND:is,sparse:Ku,sparseToDense:Iu,spectral:Ru,split:ke,sqrt:$t,square:dt,squaredDifference:gs,squeeze:_n,stack:Ee,step:ms,stridedSlice:hu,string:Gu,sub:N,sum:W,tan:fu,tanh:mn,tensor:Ht,tensor1d:ft,tensor2d:de,tensor3d:Cr,tensor4d:du,tensor5d:pu,tensor6d:gu,tile:fe,topk:mu,transpose:Pe,truncatedNormal:bu,unique:wu,unsortedSegmentSum:yu,unstack:An,upperBound:$u,variable:ku,where:ee,whereAsync:bs,zeros:ne,zerosLike:lt},Symbol.toStringTag,{value:"Module"})),X$=Uu(U$);export{H as T,j$ as a,p as b,Ft as c,Ht as d,M as e,Ee as f,at as g,j as h,G as i,Lt as j,oc as k,br as l,fd as m,Vi as n,zi as o,sc as p,X$ as q,k as r,O as s,le as t,An as u};
