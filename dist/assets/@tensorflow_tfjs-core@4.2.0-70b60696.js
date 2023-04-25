import{l as Ta,L as Na}from"./vendor__L-bbabc4b5.js";import{s as xr}from"./vendor__S-f3323845.js";/**
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
 */const Aa=1e-7,_a=1e-4;class ib{constructor(t,n){this.backend=t,this.dataMover=n,this.data=new WeakMap,this.dataIdsCount=0}get(t){return this.data.has(t)||this.dataMover.moveData(this.backend,t),this.data.get(t)}set(t,n){this.dataIdsCount++,this.data.set(t,n)}has(t){return this.data.has(t)}delete(t){return this.dataIdsCount--,this.data.delete(t)}numDataIds(){return this.dataIdsCount}}class Ca{refCount(t){return ct("refCount")}incRef(t){return ct("incRef")}timerAvailable(){return!0}time(t){return ct("time")}read(t){return ct("read")}readSync(t){return ct("readSync")}readToGPU(t,n){return ct("readToGPU")}numDataIds(){return ct("numDataIds")}disposeData(t,n){return ct("disposeData")}write(t,n,r){return ct("write")}move(t,n,r,s,o){return ct("move")}createTensorFromGPUData(t,n,r){return ct("createTensorFromGPUData")}memory(){return ct("memory")}floatPrecision(){return ct("floatPrecision")}epsilon(){return this.floatPrecision()===32?Aa:_a}dispose(){return ct("dispose")}}function ct(e){throw new Error(`'${e}' not yet implemented or not found in the registry. This kernel may not be supported by the tfjs backend you have chosen`)}/**
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
 */function cb(e){let t=e.length,n=0;for(;t>0;)n=Math.random()*t|0,t--,Fa(e,t,n)}function Ee(e,t,n){return Math.max(e,Math.min(t,n))}function ub(e){return e%2===0?e:e+1}function Fa(e,t,n){const r=e[t];e[t]=e[n],e[n]=r}function lb(e){let t=0;for(let n=0;n<e.length;n++)t+=e[n];return t}function p(e,t){if(!e)throw new Error(typeof t=="string"?t:t())}function Ma(e,t,n=""){p(Ce(e,t),()=>n+` Shapes ${e} and ${t} must match`)}function $r(e){p(e!=null,()=>"The input to the tensor constructor must be a non-null value.")}function Z(e){if(e.length===0)return 1;let t=e[0];for(let n=1;n<e.length;n++)t*=e[n];return t}function Ce(e,t){if(e===t)return!0;if(e==null||t==null||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function fe(e){return e%1===0}function hb(e){const t=Math.ceil(Math.sqrt(e));return[t,Math.ceil(e/t)]}function xe(e,t){return t<=e.length?e:e+" ".repeat(t-e.length)}function fb(e,t=s=>0,n,r){return new Promise((s,o)=>{let a=0;const i=()=>{if(e()){s();return}a++;const c=t(a);if(n!=null&&a>=n){o();return}r!=null?r(i,c):setTimeout(i,c)};i()})}function pb(e,t){let n=1,r=-1;for(let o=0;o<e.length;++o)if(e[o]>=0)n*=e[o];else if(e[o]===-1){if(r!==-1)throw Error(`Shapes can only have 1 implicit size. Found -1 at dim ${r} and dim ${o}`);r=o}else if(e[o]<0)throw Error(`Shapes can not be < 0. Found ${e[o]} at dim ${o}`);if(r===-1){if(t>0&&t!==n)throw Error(`Size(${t}) must match the product of shape ${e}`);return e}if(n===0)throw Error(`Cannot infer the missing size in [${e}] when there are 0 elements`);if(t%n!==0)throw Error(`The implicit shape can't be a fractional number. Got ${t} / ${n}`);const s=e.slice();return s[r]=t/n,s}function mt(e,t){const n=t.length;return e=e==null?t.map((r,s)=>s):[].concat(e),p(e.every(r=>r>=-n&&r<n),()=>`All values in axis param must be in range [-${n}, ${n}) but got axis ${e}`),p(e.every(r=>fe(r)),()=>`All values in axis param must be integers but got axis ${e}`),e.map(r=>r<0?n+r:r)}function Ba(e,t){const n=[],r=[],s=t!=null&&Array.isArray(t)&&t.length===0,o=t==null||s?null:mt(t,e).sort();let a=0;for(let i=0;i<e.length;++i){if(o!=null){if(o[a]===i&&e[i]!==1)throw new Error(`Can't squeeze axis ${i} since its dim '${e[i]}' is not 1`);(o[a]==null||o[a]>i)&&e[i]===1&&(n.push(e[i]),r.push(i)),o[a]<=i&&a++}e[i]!==1&&(n.push(e[i]),r.push(i))}return{newShape:n,keptDims:r}}function db(e,t){let n=null;if(e==null||e==="float32")n=new Float32Array(t);else if(e==="int32")n=new Int32Array(t);else if(e==="bool")n=new Uint8Array(t);else throw new Error(`Unknown data type ${e}`);return n}function Ra(e,t){let n=null;if(e==null||e==="float32")n=new Float32Array(t);else if(e==="int32")n=new Int32Array(t);else if(e==="bool")n=new Uint8Array(t);else if(e==="string")n=new Array(t);else throw new Error(`Unknown data type ${e}`);return n}function Ga(e,t){for(let n=0;n<e.length;n++){const r=e[n];if(isNaN(r)||!isFinite(r))throw Error(`A tensor of type ${t} being uploaded contains ${r}.`)}}function Pa(e){return e==="bool"||e==="complex64"||e==="float32"||e==="int32"||e==="string"}function gb(e,t){return!(t==="complex64"||t==="float32"&&e!=="complex64"||t==="int32"&&e!=="float32"&&e!=="complex64"||t==="bool"&&e==="bool")}function Je(e){if(e==="float32"||e==="int32")return 4;if(e==="complex64")return 8;if(e==="bool")return 1;throw new Error(`Unknown dtype ${e}`)}function Oa(e){if(e==null)return 0;let t=0;return e.forEach(n=>t+=n.length),t}function mn(e){return typeof e=="string"||e instanceof String}function La(e){return typeof e=="boolean"}function Ka(e){return typeof e=="number"}function bn(e){return Array.isArray(e)?bn(e[0]):e instanceof Float32Array?"float32":e instanceof Int32Array||e instanceof Uint8Array||e instanceof Uint8ClampedArray?"int32":Ka(e)?"float32":mn(e)?"string":La(e)?"bool":"float32"}function Ye(e){return!!(e&&e.constructor&&e.call&&e.apply)}function Ze(e,t){for(let n=t;n<e;++n)if(e%n===0)return n;return e}function me(e){const t=e.length;if(t<2)return[];const n=new Array(t-1);n[t-2]=e[t-1];for(let r=t-3;r>=0;--r)n[r]=n[r+1]*e[r+1];return n}function Ir(e,t,n,r=!1){const s=new Array;if(t.length===1){const o=t[0]*(r?2:1);for(let a=0;a<o;a++)s[a]=n[e+a]}else{const o=t[0],a=t.slice(1),i=a.reduce((c,u)=>c*u)*(r?2:1);for(let c=0;c<o;c++)s[c]=Ir(e+c*i,a,n,r)}return s}function he(e,t,n=!1){if(e.length===0)return t[0];const r=e.reduce((s,o)=>s*o)*(n?2:1);if(r===0)return[];if(r!==t.length)throw new Error(`[${e}] does not match the input size ${t.length}${n?" for a complex tensor":""}.`);return Ir(0,e,t,n)}function mb(e,t){if(Array.isArray(e))return e;if(t==="float32")return e instanceof Float32Array?e:new Float32Array(e);if(t==="int32")return e instanceof Int32Array?e:new Int32Array(e);if(t==="bool"||t==="string")return Uint8Array.from(new Int32Array(e));throw new Error(`Unknown dtype ${t}`)}function Sr(e,t){const n=yn(e,t);for(let r=0;r<n.length;r++)n[r]=1;return n}function yn(e,t){if(t==null||t==="float32"||t==="complex64")return new Float32Array(e);if(t==="int32")return new Int32Array(e);if(t==="bool")return new Uint8Array(e);throw new Error(`Unknown data type ${t}`)}function bb(e,t){const n=e.reduce((r,s)=>r*s,1);if(t==null||t==="float32")return he(e,new Float32Array(n));if(t==="int32")return he(e,new Int32Array(n));if(t==="bool")return he(e,new Uint8Array(n));throw new Error(`Unknown data type ${t}`)}function St(e){e.forEach(t=>{p(Number.isInteger(t)&&t>=0,()=>`Tensor must have a shape comprised of positive integers but got shape [${e}].`)})}function yb(e,t,n){if(t===0)return 0;if(t===1)return e[0];let r=e[e.length-1];for(let s=0;s<e.length-1;++s)r+=n[s]*e[s];return r}function kb(e,t,n){if(t===0)return[];if(t===1)return[e];const r=new Array(t);for(let s=0;s<r.length-1;++s)r[s]=Math.floor(e/n[s]),e-=r[s]*n[s];return r[r.length-1]=e,r}function kn(e){return e&&e.then&&typeof e.then=="function"}/**
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
 */const Jn="tfjsflags";class Wa{constructor(t){this.global=t,this.flags={},this.flagRegistry={},this.urlFlags={},this.getQueryParams=za,this.populateURLFlags()}setPlatform(t,n){this.platform!=null&&(G().getBool("IS_TEST")||G().getBool("PROD")||console.warn(`Platform ${this.platformName} has already been set. Overwriting the platform with ${t}.`)),this.platformName=t,this.platform=n}registerFlag(t,n,r){if(this.flagRegistry[t]={evaluationFn:n,setHook:r},this.urlFlags[t]!=null){const s=this.urlFlags[t];G().getBool("IS_TEST")||G().getBool("PROD")||console.warn(`Setting feature override from URL ${t}: ${s}.`),this.set(t,s)}}async getAsync(t){return t in this.flags?this.flags[t]:(this.flags[t]=await this.evaluateFlag(t),this.flags[t])}get(t){if(t in this.flags)return this.flags[t];const n=this.evaluateFlag(t);if(kn(n))throw new Error(`Flag ${t} cannot be synchronously evaluated. Please use getAsync() instead.`);return this.flags[t]=n,this.flags[t]}getNumber(t){return this.get(t)}getBool(t){return this.get(t)}getFlags(){return this.flags}get features(){return this.flags}set(t,n){if(this.flagRegistry[t]==null)throw new Error(`Cannot set flag ${t} as it has not been registered.`);this.flags[t]=n,this.flagRegistry[t].setHook!=null&&this.flagRegistry[t].setHook(n)}evaluateFlag(t){if(this.flagRegistry[t]==null)throw new Error(`Cannot evaluate flag '${t}': no evaluation function found.`);return this.flagRegistry[t].evaluationFn()}setFlags(t){this.flags=Object.assign({},t)}reset(){this.flags={},this.urlFlags={},this.populateURLFlags()}populateURLFlags(){if(typeof this.global>"u"||typeof this.global.location>"u"||typeof this.global.location.search>"u")return;const t=this.getQueryParams(this.global.location.search);Jn in t&&t[Jn].split(",").forEach(r=>{const[s,o]=r.split(":");this.urlFlags[s]=Va(s,o)})}}function za(e){const t={};return e.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,(n,...r)=>(qa(t,r[0],r[1]),r.join("="))),t}function qa(e,t,n){e[decodeURIComponent(t)]=decodeURIComponent(n||"")}function Va(e,t){if(t=t.toLowerCase(),t==="true"||t==="false")return t==="true";if(`${+t}`===t)return+t;throw new Error(`Could not parse value flag value ${t} for flag ${e}.`)}function G(){return Er}let Er=null;function Ua(e){Er=e}/**
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
 */let qe;function vr(){if(qe==null){let e;if(typeof window<"u")e=window;else if(typeof global<"u")e=global;else if(typeof process<"u")e=process;else if(typeof self<"u")e=self;else throw new Error("Could not find a global object");qe=e}return qe}function Ha(){const e=vr();return e._tfGlobals==null&&(e._tfGlobals=new Map),e._tfGlobals}function wn(e,t){const n=Ha();if(n.has(e))return n.get(e);{const r=t();return n.set(e,r),n.get(e)}}const Dr="Abs",Tr="Acos",Nr="Acosh",xn="Add",ja="AddN",Xa="All",Ja="Any",Ar="ArgMax",_r="ArgMin",Cr="Asin",Fr="Asinh",Mr="Atan",Br="Atanh",Rr="Atan2",Gr="AvgPool",Ya="AvgPoolGrad",Pr="AvgPool3D",Za="AvgPool3DGrad",Or="BatchMatMul",Lr="BatchToSpaceND",Qa="Bincount",ti="BroadcastTo",wb="BroadcastArgs",$n="Cast",Kr="Ceil",Wr="ClipByValue",ei="Complex",zr="ComplexAbs",qr="Concat",Vr="Conv2D",ni="Conv2DBackpropFilter",Ur="Conv2DBackpropInput",Hr="Conv3D",ri="Conv3DBackpropFilterV2",si="Conv3DBackpropInputV2",jr="Cos",Xr="Cosh",oi="Cumprod",Jr="Cumsum",ai="CropAndResize",ii="DenseBincount",ci="DepthToSpace",Yr="DepthwiseConv2dNative",ui="DepthwiseConv2dNativeBackpropFilter",li="DepthwiseConv2dNativeBackpropInput",xb="Diag",Zr="Dilation2D",hi="Dilation2DBackpropInput",fi="Dilation2DBackpropFilter",Qr="RealDiv",$b="Einsum",ts="Elu",pi="EluGrad",es="Erf",di="Equal",ns="Exp",rs="ExpandDims",ss="Expm1",gi="FFT",mi="Fill",bi="FlipLeftRight",os="Floor",as="FloorDiv",is="FusedBatchNorm",cs="GatherV2",Ib="GatherNd",yi="Greater",us="GreaterEqual",In="Identity",ki="IFFT",wi="Imag",ls="IsFinite",hs="IsInf",fs="IsNan",ps="LeakyRelu",xi="Less",$i="LessEqual",Sb="LinSpace",ds="Log",gs="Log1p",Ii="LogicalAnd",Si="LogicalNot",Ei="LogicalOr",vi="LogSoftmax",ms="LRN",Di="LRNGrad",bs="Max",ys="Maximum",ks="MaxPool",Ti="MaxPoolGrad",ws="MaxPool3D",Ni="MaxPool3DGrad",Eb="MaxPoolWithArgmax",xs="Mean",$s="Min",Is="Minimum",Ss="MirrorPad",Es="Mod",vb="Multinomial",vs="Multiply",Ds="Neg",Ai="NotEqual",_i="NonMaxSuppressionV3",Ci="NonMaxSuppressionV4",Fi="NonMaxSuppressionV5",Ts="OnesLike",Ns="OneHot",As="Pack",_s="PadV2",Cs="Pow",Fs="Prelu",Ms="Prod",Db="RaggedGather",Tb="RaggedRange",Nb="RaggedTensorToTensor",Mi="Range",Bi="Real",Bs="Reciprocal",Rs="Relu",Gs="Reshape",Ps="ResizeNearestNeighbor",Ri="ResizeNearestNeighborGrad",Os="ResizeBilinear",Gi="ResizeBilinearGrad",Ls="Relu6",Ks="Reverse",Ws="Round",zs="Rsqrt",Ab="ScatterNd",_b="SearchSorted",qs="Select",Vs="Selu",Us="Slice",Hs="Sin",js="Sinh",Xs="Sign",Js="Sigmoid",Ys="Softplus",Zs="Sqrt",Qs="Sum",to="SpaceToBatchND",eo="SplitV",no="Softmax",Cb="SparseFillEmptyRows",Fb="SparseReshape",Mb="SparseSegmentMean",Bb="SparseSegmentSum",Rb="SparseToDense",ro="SquaredDifference",Pi="Square",Oi="StridedSlice",Gb="StringNGrams",Pb="StringSplit",Ob="StringToHashBucketFast",so="Sub",oo="Tan",ao="Tanh",Sn="Tile",Li="TopK",Ki="Transform",$e="Transpose",Wi="Unique",io="Unpack",co="UnsortedSegmentSum",uo="ZerosLike",lo="Step",Lb="FromPixels",zi="RotateWithOffset",Yn="_FusedMatMul",Zn="FusedConv2D",Kb="FusedDepthwiseConv2D";/**
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
 */function Tt(...e){G().getBool("IS_TEST")||G().getBool("PROD")||console.warn(...e)}function qi(...e){G().getBool("IS_TEST")||G().getBool("PROD")||console.log(...e)}/**
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
 */const ve=wn("kernelRegistry",()=>new Map),Qe=wn("gradRegistry",()=>new Map);function Qn(e,t){const n=ho(e,t);return ve.get(n)}function tr(e){return Qe.get(e)}function er(e){const t=ve.entries(),n=[];for(;;){const{done:r,value:s}=t.next();if(r)break;const[o,a]=s,[i]=o.split("_");i===e&&n.push(a)}return n}function Wb(e){const{kernelName:t,backendName:n}=e,r=ho(t,n);ve.has(r)&&Tt(`The kernel '${t}' for backend '${n}' is already registered`),ve.set(r,e)}function Vi(e){const{kernelName:t}=e;Qe.has(t)&&G().getBool("DEBUG")&&Tt(`Overriding the gradient for '${t}'`),Qe.set(t,e)}function ho(e,t){return`${t}_${e}`}/**
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
 */const Ft=Ta||Na;function Fe(e){return Ft.fromString(e,!0,16)}const fo=Fe("c3a5c85c97cb3127"),Ct=Fe("b492b66fbe98f273"),nt=Fe("9ae16a3b2f90404f");function tn(e){return e.xor(e.shru(47))}function po(e,t,n){const r=e.slice(t,t+n);return Ft.fromBytes(Array.from(r),!0,!0)}function W(e,t){return po(e,t,8)}function nr(e,t){return po(e,t,4)}function Y(e,t){return t===0?e:e.shru(t).or(e.shl(64-t))}function At(e,t,n=Fe("9ddfea08eb382d69")){let r=e.xor(t).mul(n);r=r.xor(r.shru(47));let s=t.xor(r).mul(n);return s=s.xor(s.shru(47)),s=s.mul(n),s}function Ui(e,t,n,r,s,o){s=s.add(e),o=Y(o.add(s).add(r),21);const a=s;return s=s.add(t),s=s.add(n),o=o.add(Y(s,44)),[s.add(r),o.add(a)]}function we(e,t,n,r){return Ui(W(e,t),W(e,t+8),W(e,t+16),W(e,t+24),n,r)}function Hi(e,t=e.length){if(t>=8){const n=nt.add(t*2),r=W(e,0).add(nt),s=W(e,t-8),o=Y(s,37).mul(n).add(r),a=Y(r,25).add(s).mul(n);return At(o,a,n)}if(t>=4){const n=nt.add(t*2),r=nr(e,0);return At(r.shl(3).add(t),nr(e,t-4),n)}if(t>0){const n=e[0],r=e[t>>1],s=e[t-1],o=n+(r<<8),a=t+(s<<2);return tn(nt.mul(o).xor(fo.mul(a))).mul(nt)}return nt}function ji(e,t=e.length){const n=nt.add(t*2),r=W(e,0).mul(Ct),s=W(e,8),o=W(e,t-8).mul(n),a=W(e,t-16).mul(nt);return At(Y(r.add(s),43).add(Y(o,30)).add(a),r.add(Y(s.add(nt),18)).add(o),n)}function Xi(e,t=e.length){const n=nt.add(t*2),r=W(e,0).mul(nt),s=W(e,8),o=W(e,t-8).mul(n),a=W(e,t-16).mul(nt),i=Y(r.add(s),43).add(Y(o,30)).add(a),c=At(i,r.add(Y(s.add(nt),18)).add(o),n),u=W(e,16).mul(n),h=W(e,24),l=i.add(W(e,t-32)).mul(n),f=c.add(W(e,t-24)).mul(n);return At(Y(u.add(h),43).add(Y(l,30)).add(f),u.add(Y(h.add(r),18)).add(l),n)}function zb(e,t=e.length){const n=Ft.fromNumber(81,!0);if(t<=32)return t<=16?Hi(e,t):ji(e,t);if(t<=64)return Xi(e,t);let r=n,s=n.mul(Ct).add(113),o=tn(s.mul(nt).add(113)).mul(nt),a=[Ft.UZERO,Ft.UZERO],i=[Ft.UZERO,Ft.UZERO];r=r.mul(nt).add(W(e,0));let c=0;const u=(t-1>>6)*64,h=u+(t-1&63)-63;do r=Y(r.add(s).add(a[0]).add(W(e,c+8)),37).mul(Ct),s=Y(s.add(a[1]).add(W(e,c+48)),42).mul(Ct),r=r.xor(i[1]),s=s.add(a[0]).add(W(e,c+40)),o=Y(o.add(i[0]),33).mul(Ct),a=we(e,c,a[1].mul(Ct),r.add(i[0])),i=we(e,c+32,o.add(i[1]),s.add(W(e,c+16))),[o,r]=[r,o],c+=64;while(c!==u);const l=Ct.add(o.and(255).shl(1));return c=h,i[0]=i[0].add(t-1&63),a[0]=a[0].add(i[0]),i[0]=i[0].add(a[0]),r=Y(r.add(s).add(a[0]).add(W(e,c+8)),37).mul(l),s=Y(s.add(a[1]).add(W(e,c+48)),42).mul(l),r=r.xor(i[1].mul(9)),s=s.add(a[0].mul(9).add(W(e,c+40))),o=Y(o.add(i[0]),33).mul(l),a=we(e,c,a[1].mul(l),r.add(i[0])),i=we(e,c+32,o.add(i[1]),s.add(W(e,c+16))),[o,r]=[r,o],At(At(a[0],i[0],l).add(tn(s).mul(fo)).add(o),At(a[1],i[1],l).add(r),l)}/**
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
 */function qb(e,t){return t==="string"?vn(e):En([e],t)}function Ji(e,t){return e instanceof Float32Array&&t==="float32"||e instanceof Int32Array&&t==="int32"||e instanceof Uint8Array&&t==="bool"}function En(e,t){if(t==="string")throw new Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(e)&&(e=pe(e)),G().getBool("DEBUG")&&Ga(e,t),Ji(e,t))return e;if(t==null||t==="float32"||t==="complex64")return new Float32Array(e);if(t==="int32")return new Int32Array(e);if(t==="bool"){const n=new Uint8Array(e.length);for(let r=0;r<n.length;++r)Math.round(e[r])!==0&&(n[r]=1);return n}else throw new Error(`Unknown data type ${t}`)}function De(){return G().platform.now()}function vn(e,t="utf-8"){return t=t||"utf-8",G().platform.encode(e,t)}function en(e,t="utf-8"){return t=t||"utf-8",G().platform.decode(e,t)}function gt(e){return G().platform.isTypedArray(e)}function pe(e,t=[],n=!1){if(t==null&&(t=[]),typeof e=="boolean"||typeof e=="number"||typeof e=="string"||kn(e)||e==null||gt(e)&&n)t.push(e);else if(Array.isArray(e)||gt(e))for(let r=0;r<e.length;++r)pe(e[r],t,n);else{let r=-1;for(const s of Object.keys(e))/^([1-9]+[0-9]*|0)$/.test(s)&&(r=Math.max(r,Number(s)));for(let s=0;s<=r;s++)pe(e[s],t,n)}return t}/**
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
 */class Yi{constructor(t,n){this.backendTimer=t,this.logger=n,n==null&&(this.logger=new Qi)}profileKernel(t,n,r){let s;const o=()=>{s=r()};let a;const i=De();if(this.backendTimer.timerAvailable())a=this.backendTimer.time(o);else{o();for(const u of s)u.dataSync();a=Promise.resolve({kernelMs:De()-i})}if(G().getBool("CHECK_COMPUTATION_FOR_ERRORS"))for(let u=0;u<s.length;u++){const h=s[u];h.data().then(l=>{Zi(l,h.dtype,t)})}return{kernelName:t,outputs:s,inputs:n,timeMs:a.then(u=>u.kernelMs),extraInfo:a.then(u=>u.getExtraProfileInfo!=null?u.getExtraProfileInfo():"")}}logKernelProfile(t){const{kernelName:n,outputs:r,timeMs:s,inputs:o,extraInfo:a}=t;r.forEach(i=>{Promise.all([i.data(),s,a]).then(c=>{this.logger.logKernelProfile(n,i,c[0],c[1],o,c[2])})})}}function Zi(e,t,n){if(t!=="float32")return!1;for(let r=0;r<e.length;r++){const s=e[r];if(isNaN(s)||!isFinite(s))return console.warn(`Found ${s} in the result of '${n}'`),!0}return!1}class Qi{logKernelProfile(t,n,r,s,o,a){const i=typeof s=="number"?xe(`${s}ms`,9):s.error,c=xe(t,25),u=n.rank,h=n.size,l=xe(n.shape.toString(),14);let f="";for(const m in o){const w=o[m];if(w!=null){const I=w.shape||n.shape,$=I.length;f+=`${m}: ${$}D ${$>0?I:""} `}}console.log(`%c${c}	%c${i}	%c${u}D ${l}	%c${h}	%c${f}	%c${a}`,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")}}/**
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
 */function tc(e,t,n){const r={},s={};for(let c=0;c<t.length;c++)r[t[c].id]=!0;for(let c=0;c<e.length;c++){const u=e[c],h=u.inputs;for(const l in h){const f=h[l];let m=!1;for(let w=0;w<t.length;w++)if(r[f.id]){u.outputs.forEach(I=>r[I.id]=!0),m=!0,s[u.id]=!0;break}if(m)break}}const o={};o[n.id]=!0;const a={};for(let c=e.length-1;c>=0;c--){const u=e[c],h=u.inputs;for(let l=0;l<u.outputs.length;l++)if(o[u.outputs[l].id]){for(const f in h)o[h[f].id]=!0,a[u.id]=!0;break}}const i=[];for(let c=0;c<e.length;c++){const u=e[c];if(s[u.id]&&a[u.id]){const h={};for(const f in u.inputs){const m=u.inputs[f];r[m.id]&&(h[f]=m)}const l=Object.assign({},u);l.inputs=h,l.outputs=u.outputs,i.push(l)}}return i}function ec(e,t,n,r){for(let s=t.length-1;s>=0;s--){const o=t[s],a=[];if(o.outputs.forEach(c=>{const u=e[c.id];u!=null?a.push(u):a.push(null)}),o.gradient==null)throw new Error(`Cannot compute gradient: gradient function not found for ${o.kernelName}.`);const i=o.gradient(a);for(const c in o.inputs){if(!(c in i))throw new Error(`Cannot backprop through input ${c}. Available gradients found: ${Object.keys(i)}.`);const u=n(()=>i[c]());if(u.dtype!=="float32")throw new Error(`Error in gradient for op ${o.kernelName}. The gradient of input ${c} must have 'float32' dtype, but has '${u.dtype}'`);const h=o.inputs[c];if(!Ce(u.shape,h.shape))throw new Error(`Error in gradient for op ${o.kernelName}. The gradient of input '${c}' has shape '${u.shape}', which does not match the shape of the input '${h.shape}'`);if(e[h.id]==null)e[h.id]=u;else{const l=e[h.id];e[h.id]=r(l,u),l.dispose()}}}}/**
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
 */const rr=20,ce=3,Ve=7;function nc(e,t,n,r){const s=me(t),o=rc(e,t,n,s),a=t.length,i=Ie(e,t,n,s,o),c=["Tensor"];return r&&(c.push(`  dtype: ${n}`),c.push(`  rank: ${a}`),c.push(`  shape: [${t}]`),c.push("  values:")),c.push(i.map(u=>"    "+u).join(`
`)),c.join(`
`)}function rc(e,t,n,r){const s=Z(t),o=r[r.length-1],a=new Array(o).fill(0),i=t.length,c=n==="complex64"?le(e):e;if(i>1)for(let u=0;u<s/o;u++){const h=u*o;for(let l=0;l<o;l++)a[l]=Math.max(a[l],ue(c[h+l],0,n).length)}return a}function ue(e,t,n){let r;return Array.isArray(e)?r=`${parseFloat(e[0].toFixed(Ve))} + ${parseFloat(e[1].toFixed(Ve))}j`:mn(e)?r=`'${e}'`:n==="bool"?r=go(e):r=parseFloat(e.toFixed(Ve)).toString(),xe(r,t)}function go(e){return e===0?"false":"true"}function Ie(e,t,n,r,s,o=!0){const a=n==="complex64"?2:1,i=t[0],c=t.length;if(c===0){if(n==="complex64"){const I=le(e);return[ue(I[0],0,n)]}return n==="bool"?[go(e[0])]:[e[0].toString()]}if(c===1){if(i>rr){const $=ce*a;let E=Array.from(e.slice(0,$)),F=Array.from(e.slice((i-ce)*a,i*a));return n==="complex64"&&(E=le(E),F=le(F)),["["+E.map((S,v)=>ue(S,s[v],n)).join(", ")+", ..., "+F.map((S,v)=>ue(S,s[i-ce+v],n)).join(", ")+"]"]}return["["+(n==="complex64"?le(e):Array.from(e)).map(($,E)=>ue($,s[E],n)).join(", ")+"]"]}const u=t.slice(1),h=r.slice(1),l=r[0]*a,f=[];if(i>rr){for(let I=0;I<ce;I++){const $=I*l,E=$+l;f.push(...Ie(e.slice($,E),u,n,h,s,!1))}f.push("...");for(let I=i-ce;I<i;I++){const $=I*l,E=$+l;f.push(...Ie(e.slice($,E),u,n,h,s,I===i-1))}}else for(let I=0;I<i;I++){const $=I*l,E=$+l;f.push(...Ie(e.slice($,E),u,n,h,s,I===i-1))}const m=c===2?",":"";f[0]="["+(i>0?f[0]+m:"");for(let I=1;I<f.length-1;I++)f[I]=" "+f[I]+m;let w=`,
`;for(let I=2;I<c;I++)w+=`
`;return f[f.length-1]=" "+f[f.length-1]+"]"+(o?"":w),f}function le(e){const t=[];for(let n=0;n<e.length;n+=2)t.push([e[n],e[n+1]]);return t}/**
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
 */class sc{constructor(t,n,r){if(this.dtype=n,this.shape=t.slice(),this.size=Z(t),r!=null){const s=r.length;p(s===this.size,()=>`Length of values '${s}' does not match the size inferred by the shape '${this.size}'.`)}if(n==="complex64")throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=r||Ra(n,this.size),this.strides=me(t)}set(t,...n){n.length===0&&(n=[0]),p(n.length===this.rank,()=>`The number of provided coordinates (${n.length}) must match the rank (${this.rank})`);const r=this.locToIndex(n);this.values[r]=t}get(...t){t.length===0&&(t=[0]);let n=0;for(const s of t){if(s<0||s>=this.shape[n]){const o=`Requested out of range element at ${t}.   Buffer shape=${this.shape}`;throw new Error(o)}n++}let r=t[t.length-1];for(let s=0;s<t.length-1;++s)r+=this.strides[s]*t[s];return this.values[r]}locToIndex(t){if(this.rank===0)return 0;if(this.rank===1)return t[0];let n=t[t.length-1];for(let r=0;r<t.length-1;++r)n+=this.strides[r]*t[r];return n}indexToLoc(t){if(this.rank===0)return[];if(this.rank===1)return[t];const n=new Array(this.shape.length);for(let r=0;r<n.length-1;++r)n[r]=Math.floor(t/this.strides[r]),t-=n[r]*this.strides[r];return n[n.length-1]=t,n}get rank(){return this.shape.length}toTensor(){return dt().makeTensor(this.values,this.shape,this.dtype)}}let dt=null,Vt=null;function oc(e){dt=e}function ac(e){Vt=e}class rt{constructor(t,n,r,s){this.kept=!1,this.isDisposedInternal=!1,this.shape=t.slice(),this.dtype=n||"float32",this.size=Z(t),this.strides=me(t),this.dataId=r,this.id=s,this.rankType=this.rank<5?this.rank.toString():"higher"}get rank(){return this.shape.length}async buffer(){const t=await this.data();return Vt.buffer(this.shape,this.dtype,t)}bufferSync(){return Vt.buffer(this.shape,this.dtype,this.dataSync())}async array(){const t=await this.data();return he(this.shape,t,this.dtype==="complex64")}arraySync(){return he(this.shape,this.dataSync(),this.dtype==="complex64")}async data(){this.throwIfDisposed();const t=dt().read(this.dataId);if(this.dtype==="string"){const n=await t;try{return n.map(r=>en(r))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}}return t}dataToGPU(t){return this.throwIfDisposed(),dt().readToGPU(this.dataId,t)}dataSync(){this.throwIfDisposed();const t=dt().readSync(this.dataId);if(this.dtype==="string")try{return t.map(n=>en(n))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return t}async bytes(){this.throwIfDisposed();const t=await dt().read(this.dataId);return this.dtype==="string"?t:new Uint8Array(t.buffer)}dispose(){this.isDisposed||(dt().disposeTensor(this),this.isDisposedInternal=!0)}get isDisposed(){return this.isDisposedInternal}throwIfDisposed(){if(this.isDisposed)throw new Error("Tensor is disposed.")}print(t=!1){return Vt.print(this,t)}clone(){return this.throwIfDisposed(),Vt.clone(this)}toString(t=!1){const n=this.dataSync();return nc(n,this.shape,this.dtype,t)}cast(t){return this.throwIfDisposed(),Vt.cast(this,t)}variable(t=!0,n,r){return this.throwIfDisposed(),dt().makeVariable(this,t,n,r)}}Object.defineProperty(rt,Symbol.hasInstance,{value:e=>!!e&&e.data!=null&&e.dataSync!=null&&e.throwIfDisposed!=null});function k(){return wn("Tensor",()=>rt)}k();class Te extends rt{constructor(t,n,r,s){super(t.shape,t.dtype,t.dataId,s),this.trainable=n,this.name=r}assign(t){if(t.dtype!==this.dtype)throw new Error(`dtype of the new value (${t.dtype}) and previous value (${this.dtype}) must match`);if(!Ce(t.shape,this.shape))throw new Error(`shape of the new value (${t.shape}) and previous value (${this.shape}) must match`);dt().disposeTensor(this),this.dataId=t.dataId,dt().incRef(this,null)}dispose(){dt().disposeVariable(this),this.isDisposedInternal=!0}}Object.defineProperty(Te,Symbol.hasInstance,{value:e=>e instanceof rt&&e.assign!=null&&e.assign instanceof Function});/**
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
 */var sr;(function(e){e.R0="R0",e.R1="R1",e.R2="R2",e.R3="R3",e.R4="R4",e.R5="R5",e.R6="R6"})(sr||(sr={}));var nn;(function(e){e.float32="float32",e.int32="int32",e.bool="int32",e.complex64="complex64"})(nn||(nn={}));var rn;(function(e){e.float32="float32",e.int32="int32",e.bool="bool",e.complex64="complex64"})(rn||(rn={}));var sn;(function(e){e.float32="float32",e.int32="float32",e.bool="float32",e.complex64="complex64"})(sn||(sn={}));var on;(function(e){e.float32="complex64",e.int32="complex64",e.bool="complex64",e.complex64="complex64"})(on||(on={}));const ic={float32:sn,int32:nn,bool:rn,complex64:on};function Dn(e,t){if(e==="string"||t==="string"){if(e==="string"&&t==="string")return"string";throw new Error(`Can not upcast ${e} with ${t}`)}return ic[e][t]}function Vb(e){return Dn(e,"int32")}/**
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
 */function H(e,t){if(e.dtype===t.dtype)return[e,t];const n=Dn(e.dtype,t.dtype);return[e.cast(n),t.cast(n)]}function mo(e){const t=[];return bo(e,t,new Set),t}function bo(e,t,n){if(e==null)return;if(e instanceof rt){t.push(e);return}if(!cc(e))return;const r=e;for(const s in r){const o=r[s];n.has(o)||(n.add(o),bo(o,t,n))}}function cc(e){return Array.isArray(e)||typeof e=="object"}/**
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
 */function Ue(e){return e.kernelName!=null}class or{constructor(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null,get kernelNames(){return Array.from(new Set(this.kernels.map(t=>t.name)))}}}dispose(){for(const t in this.registeredVariables)this.registeredVariables[t].dispose()}}class Yt{constructor(t){this.ENV=t,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new or}async ready(){if(this.pendingBackendInit!=null)return this.pendingBackendInit.then(()=>{});if(this.backendInstance!=null)return;const t=this.getSortedBackends();for(let n=0;n<t.length;n++){const r=t[n];if(await this.initializeBackend(r).success){await this.setBackend(r);return}}throw new Error("Could not initialize any backends, all backend initializations failed.")}get backend(){if(this.pendingBackendInit!=null)throw new Error(`Backend '${this.backendName}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);if(this.backendInstance==null){const{name:t,asyncInit:n}=this.initializeBackendsAndReturnBest();if(n)throw new Error(`The highest priority backend '${t}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);this.setBackend(t)}return this.backendInstance}backendNames(){return Object.keys(this.registryFactory)}findBackend(t){if(!(t in this.registry))if(t in this.registryFactory){const{asyncInit:n}=this.initializeBackend(t);if(n)return null}else return null;return this.registry[t]}findBackendFactory(t){return t in this.registryFactory?this.registryFactory[t].factory:null}registerBackend(t,n,r=1){return t in this.registryFactory?(Tt(`${t} backend was already registered. Reusing existing backend factory.`),!1):(this.registryFactory[t]={factory:n,priority:r},!0)}async setBackend(t){if(this.registryFactory[t]==null)throw new Error(`Backend name '${t}' not found in registry`);if(this.backendName=t,this.registry[t]==null){this.backendInstance=null;const{success:n,asyncInit:r}=this.initializeBackend(t);if(!(r?await n:n))return!1}return this.backendInstance=this.registry[t],this.setupRegisteredKernels(),this.profiler=new Yi(this.backendInstance),!0}setupRegisteredKernels(){er(this.backendName).forEach(n=>{n.setupFunc!=null&&n.setupFunc(this.backendInstance)})}disposeRegisteredKernels(t){er(t).forEach(r=>{r.disposeFunc!=null&&r.disposeFunc(this.registry[t])})}initializeBackend(t){const n=this.registryFactory[t];if(n==null)throw new Error(`Cannot initialize backend ${t}, no registration found.`);try{const r=n.factory();if(r&&!(r instanceof Ca)&&typeof r.then=="function"){const s=++this.pendingBackendInitId,o=r.then(a=>s<this.pendingBackendInitId?!1:(this.registry[t]=a,this.pendingBackendInit=null,!0)).catch(a=>(s<this.pendingBackendInitId||(this.pendingBackendInit=null,Tt(`Initialization of backend ${t} failed`),Tt(a.stack||a.message)),!1));return this.pendingBackendInit=o,{success:o,asyncInit:!0}}else return this.registry[t]=r,{success:!0,asyncInit:!1}}catch(r){return Tt(`Initialization of backend ${t} failed`),Tt(r.stack||r.message),{success:!1,asyncInit:!1}}}removeBackend(t){if(!(t in this.registryFactory))throw new Error(`${t} backend not found in registry`);this.backendName===t&&this.pendingBackendInit!=null&&this.pendingBackendInitId++,t in this.registry&&(this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t]),delete this.registryFactory[t],this.backendName===t&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)}getSortedBackends(){if(Object.keys(this.registryFactory).length===0)throw new Error("No backend found in registry.");return Object.keys(this.registryFactory).sort((t,n)=>this.registryFactory[n].priority-this.registryFactory[t].priority)}initializeBackendsAndReturnBest(){const t=this.getSortedBackends();for(let n=0;n<t.length;n++){const r=t[n],{success:s,asyncInit:o}=this.initializeBackend(r);if(o||s)return{name:r,asyncInit:o}}throw new Error("Could not initialize any backends, all backend initializations failed.")}moveData(t,n){const r=this.state.tensorInfo.get(n),s=r.backend,o=this.readSync(n),a=s.refCount(n);s.disposeData(n,!0),r.backend=t,t.move(n,o,r.shape,r.dtype,a),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++}tidy(t,n){let r=null;if(n==null){if(typeof t!="function")throw new Error("Please provide a function to tidy()");n=t}else{if(typeof t!="string"&&!(t instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if(typeof n!="function")throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");r=t}let s;return this.scopedRun(()=>this.startScope(r),()=>this.endScope(s),()=>(s=n(),s instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),s))}scopedRun(t,n,r){t();try{const s=r();return n(),s}catch(s){throw n(),s}}nextTensorId(){return Yt.nextTensorId++}nextVariableId(){return Yt.nextVariableId++}clone(t){const n=g.runKernel(In,{x:t}),r={x:t},s=a=>({x:()=>{const i="float32",c={x:a},u={dtype:i};return g.runKernel($n,c,u)}}),o=[];return this.addTapeNode(this.state.activeScope.name,r,[n],s,o,{}),n}runKernel(t,n,r){if(this.backendName==null&&this.backend,!(Qn(t,this.backendName)!=null))throw new Error(`Kernel '${t}' not registered for backend '${this.backendName}'`);return this.runKernelFunc({kernelName:t,inputs:n,attrs:r})}shouldCheckForMemLeaks(){return this.ENV.getBool("IS_TEST")}checkKernelForMemLeak(t,n,r){const s=this.backend.numDataIds();let o=0;r.forEach(c=>{o+=c.dtype==="complex64"?3:1});const a=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],i=s-n-o-a;if(i>0)throw new Error(`Backend '${this.backendName}' has an internal memory leak (${i} data ids) after running '${t}'`)}runKernelFunc(t){let n,r=[];const s=this.isTapeOn(),o=this.state.numBytes,a=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0);let i;this.backendName==null&&this.backend;let c;const u=Ue(t)?t.kernelName:this.state.activeScope!=null?this.state.activeScope.name:"";if(Ue(t)){const{kernelName:w,inputs:I,attrs:$}=t;this.backendName==null&&this.backend;const E=Qn(w,this.backendName);p(E!=null,()=>`Cannot find registered kernel '${w}' for backend '${this.backendName}'`),i=()=>{const F=this.backend.numDataIds();c=E.kernelFunc({inputs:I,attrs:$,backend:this.backend});const S=Array.isArray(c)?c:[c];this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(w,F,S);const v=S.map(T=>T.rank!=null?T:this.makeTensorFromTensorInfo(T));if(s){const T=this.getTensorsForGradient(w,I,v);r=this.saveTensorsForBackwardMode(T)}return v}}else{const{forwardFunc:w}=t,I=$=>{s&&(r=$.map(E=>this.keep(this.clone(E))))};i=()=>{const $=this.backend.numDataIds();c=this.tidy(()=>w(this.backend,I));const E=Array.isArray(c)?c:[c];return this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(u,$,E),E}}const{inputs:h,attrs:l}=t,f=Ue(t)?null:t.backwardsFunc;let m;return this.scopedRun(()=>this.state.kernelDepth++,()=>this.state.kernelDepth--,()=>{!this.ENV.getBool("DEBUG")&&!this.state.profiling?n=i():(m=this.profiler.profileKernel(u,h,()=>i()),this.ENV.getBool("DEBUG")&&this.profiler.logKernelProfile(m),n=m.outputs)}),s&&this.addTapeNode(u,h,n,f,r,l),this.state.profiling&&this.state.activeProfile.kernels.push({name:u,bytesAdded:this.state.numBytes-o,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-a,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(h).map(w=>h[w]!=null?h[w].shape:null),outputShapes:n.map(w=>w.shape),kernelTimeMs:m.timeMs,extraInfo:m.extraInfo}),Array.isArray(c)?n:n[0]}saveTensorsForBackwardMode(t){return t.map(r=>this.keep(this.clone(r)))}getTensorsForGradient(t,n,r){const s=tr(t);if(s!=null){const o=s.inputsToSave||[],a=s.outputsToSave||[];let i;s.saveAllInputs?(p(Array.isArray(n),()=>"saveAllInputs is true, expected inputs to be an array."),i=Object.keys(n).map(u=>n[u])):i=o.map(u=>n[u]);const c=r.filter((u,h)=>a[h]);return i.concat(c)}return[]}makeTensor(t,n,r,s){if(t==null)throw new Error("Values passed to engine.makeTensor() are null");r=r||"float32",s=s||this.backend;let o=t;r==="string"&&mn(t[0])&&(o=t.map(c=>vn(c)));const a=s.write(o,n,r),i=new rt(n,r,a,this.nextTensorId());if(this.trackTensor(i,s),r==="string"){const c=this.state.tensorInfo.get(a),u=Oa(o);this.state.numBytes+=u-c.bytes,c.bytes=u}return i}makeTensorFromDataId(t,n,r,s){r=r||"float32";const o={dataId:t,shape:n,dtype:r};return this.makeTensorFromTensorInfo(o,s)}makeTensorFromTensorInfo(t,n){const{dataId:r,shape:s,dtype:o}=t,a=new rt(s,o,r,this.nextTensorId());return this.trackTensor(a,n),a}makeVariable(t,n=!0,r,s){r=r||this.nextVariableId().toString(),s!=null&&s!==t.dtype&&(t=t.cast(s));const o=new Te(t,n,r,this.nextTensorId());if(this.state.registeredVariables[o.name]!=null)throw new Error(`Variable with name ${o.name} was already registered`);return this.state.registeredVariables[o.name]=o,this.incRef(o,this.backend),o}trackTensor(t,n){this.state.numTensors++,t.dtype==="string"&&this.state.numStringTensors++;let r=0;t.dtype!=="complex64"&&t.dtype!=="string"&&(r=t.size*Je(t.dtype)),this.state.numBytes+=r,this.state.tensorInfo.has(t.dataId)||(this.state.numDataBuffers++,this.state.tensorInfo.set(t.dataId,{backend:n||this.backend,dtype:t.dtype,shape:t.shape,bytes:r})),t instanceof Te||this.track(t)}incRef(t,n){this.trackTensor(t,n),this.backend.incRef(t.dataId)}removeDataId(t,n){this.state.tensorInfo.has(t)&&this.state.tensorInfo.get(t).backend===n&&(this.state.tensorInfo.delete(t),this.state.numDataBuffers--)}disposeTensor(t){if(!this.state.tensorInfo.has(t.dataId))return;const n=this.state.tensorInfo.get(t.dataId);if(this.state.numTensors--,t.dtype==="string"&&(this.state.numStringTensors--,this.state.numBytes-=n.bytes),t.dtype!=="complex64"&&t.dtype!=="string"){const r=t.size*Je(t.dtype);this.state.numBytes-=r}n.backend.disposeData(t.dataId)&&this.removeDataId(t.dataId,n.backend)}disposeVariables(){for(const t in this.state.registeredVariables){const n=this.state.registeredVariables[t];this.disposeVariable(n)}}disposeVariable(t){this.disposeTensor(t),this.state.registeredVariables[t.name]!=null&&delete this.state.registeredVariables[t.name]}memory(){const t=this.backend.memory();return t.numTensors=this.state.numTensors,t.numDataBuffers=this.state.numDataBuffers,t.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(t.unreliable=!0,t.reasons==null&&(t.reasons=[]),t.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),t}async profile(t){this.state.profiling=!0;const n=this.state.numBytes,r=this.state.numTensors;this.state.activeProfile.kernels=[],this.state.activeProfile.result=await t(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max(...this.state.activeProfile.kernels.map(s=>s.totalBytesSnapshot)),this.state.activeProfile.newBytes=this.state.numBytes-n,this.state.activeProfile.newTensors=this.state.numTensors-r;for(const s of this.state.activeProfile.kernels)s.kernelTimeMs=await s.kernelTimeMs,s.extraInfo=await s.extraInfo;return this.state.activeProfile}isTapeOn(){return this.state.gradientDepth>0&&this.state.kernelDepth===0}addTapeNode(t,n,r,s,o,a){const i={id:this.state.nextTapeNodeId++,kernelName:t,inputs:n,outputs:r,saved:o},c=tr(t);c!=null&&(s=c.gradFunc),s!=null&&(i.gradient=u=>(u=u.map((h,l)=>{if(h==null){const f=r[l],m=yn(f.size,f.dtype);return this.makeTensor(m,f.shape,f.dtype)}return h}),s(u.length>1?u:u[0],o,a))),this.state.activeTape.push(i)}keep(t){return t.kept=!0,t}startTape(){this.state.gradientDepth===0&&(this.state.activeTape=[]),this.state.gradientDepth++}endTape(){this.state.gradientDepth--}startScope(t){const n={track:[],name:"unnamed scope",id:this.state.nextScopeId++};t&&(n.name=t),this.state.scopeStack.push(n),this.state.activeScope=n}endScope(t){const n=mo(t),r=new Set(n.map(o=>o.id));for(let o=0;o<this.state.activeScope.track.length;o++){const a=this.state.activeScope.track[o];!a.kept&&!r.has(a.id)&&a.dispose()}const s=this.state.scopeStack.pop();this.state.activeScope=this.state.scopeStack.length===0?null:this.state.scopeStack[this.state.scopeStack.length-1],n.forEach(o=>{!o.kept&&o.scopeId===s.id&&this.track(o)})}gradients(t,n,r,s=!1){if(p(n.length>0,()=>"gradients() received an empty list of xs."),r!=null&&r.dtype!=="float32")throw new Error(`dy must have 'float32' dtype, but has '${r.dtype}'`);const o=this.scopedRun(()=>this.startTape(),()=>this.endTape(),()=>this.tidy("forward",t));p(o instanceof rt,()=>"The result y returned by f() must be a tensor.");const a=tc(this.state.activeTape,n,o);if(!s&&a.length===0&&n.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",()=>{const i={};i[o.id]=r??uc(o.shape),ec(i,a,u=>this.tidy(u),lc);const c=n.map(u=>i[u.id]);return this.state.gradientDepth===0&&(this.state.activeTape.forEach(u=>{for(const h of u.saved)h.dispose()}),this.state.activeTape=null),{value:o,grads:c}})}customGrad(t){return p(Ye(t),()=>"The f passed in customGrad(f) must be a function."),(...n)=>{p(n.every(i=>i instanceof rt),()=>"The args passed in customGrad(f)(x1, x2,...) must all be tensors");let r;const s={};n.forEach((i,c)=>{s[c]=i});const o=(i,c)=>(r=t(...n,c),p(r.value instanceof rt,()=>"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"),p(Ye(r.gradFunc),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."),r.value),a=(i,c)=>{const u=r.gradFunc(i,c),h=Array.isArray(u)?u:[u];p(h.length===n.length,()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."),p(h.every(f=>f instanceof rt),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors.");const l={};return h.forEach((f,m)=>{l[m]=()=>f}),l};return this.runKernelFunc({forwardFunc:o,backwardsFunc:a,inputs:s})}}readSync(t){return this.state.tensorInfo.get(t).backend.readSync(t)}read(t){return this.state.tensorInfo.get(t).backend.read(t)}readToGPU(t,n){return this.state.tensorInfo.get(t).backend.readToGPU(t,n)}async time(t){const n=De(),r=await this.backend.time(t);return r.wallMs=De()-n,r}track(t){return this.state.activeScope!=null&&(t.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(t)),t}get registeredVariables(){return this.state.registeredVariables}reset(){this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new or;for(const t in this.registry)this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null}}Yt.nextTensorId=0;Yt.nextVariableId=0;function uc(e){const t=Sr(Z(e),"float32");return g.makeTensor(t,e,"float32")}function yo(){const e=vr();if(e._tfengine==null){const t=new Wa(e);e._tfengine=new Yt(t)}return Ua(e._tfengine.ENV),oc(()=>e._tfengine),e._tfengine}const g=yo();function lc(e,t){const n={a:e,b:t};return g.runKernel(xn,n)}/**
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
 */function hc(){return typeof navigator<"u"&&navigator!=null}function Ub(e){if(e||hc()){if(e||(e=navigator),e.product==="ReactNative")return!0;const t=e.userAgent||e.vendor||(typeof window<"u"?window.opera:"");if(!t){const n=e;return n.userAgentData&&n.userAgentData.mobile}return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4))}return!1}function fc(){return typeof window<"u"&&window.document!=null||typeof WorkerGlobalScope<"u"}/**
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
 */const ht=G();ht.registerFlag("DEBUG",()=>!1,e=>{e&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")});ht.registerFlag("IS_BROWSER",()=>fc());ht.registerFlag("IS_NODE",()=>typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u");ht.registerFlag("IS_CHROME",()=>typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor));ht.registerFlag("PROD",()=>!1);ht.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",()=>ht.getBool("DEBUG"));ht.registerFlag("DEPRECATION_WARNINGS_ENABLED",()=>!0);ht.registerFlag("IS_TEST",()=>!1);ht.registerFlag("CHECK_COMPUTATION_FOR_ERRORS",()=>!0);ht.registerFlag("WRAP_TO_IMAGEBITMAP",()=>!1);ht.registerFlag("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU",()=>!1);ht.registerFlag("USE_SETTIMEOUTCUSTOM",()=>!1);/**
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
 */function Me(e,t){let n=e;if(gt(e))return t==="string"?[]:[e.length];if(typeof e=="object"){if("texture"in e){const o=e.channels||"RGBA";return[e.height,e.width*o.length]}else if("buffer"in e&&!(e.buffer instanceof ArrayBuffer))return[e.buffer.size/(t==null?4:Je(t))]}if(!Array.isArray(e))return[];const s=[];for(;Array.isArray(n)||gt(n)&&t!=="string";)s.push(n.length),n=n[0];return Array.isArray(e)&&G().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&ko(e,s,[]),s}function ko(e,t,n){if(n=n||[],!Array.isArray(e)&&!gt(e)){p(t.length===0,()=>`Element arr[${n.join("][")}] is a primitive, but should be an array/TypedArray of ${t[0]} elements`);return}p(t.length>0,()=>`Element arr[${n.join("][")}] should be a primitive, but is an array of ${e.length} elements`),p(e.length===t[0],()=>`Element arr[${n.join("][")}] should have ${t[0]} elements, but has ${e.length} elements`);const r=t.slice(1);for(let s=0;s<e.length;++s)ko(e[s],r,n.concat(s))}function ar(e,t,n,r){if(e!=="string_or_numeric"){if(e==null)throw new Error("Expected dtype cannot be null.");if(e!=="numeric"&&e!==t||e==="numeric"&&t==="string")throw new Error(`Argument '${n}' passed to '${r}' must be ${e} tensor, but got ${t} tensor`)}}function d(e,t,n,r="numeric"){if(e instanceof rt)return ar(r,e.dtype,t,n),e;let s=bn(e);if(s!=="string"&&["bool","int32","float32"].indexOf(r)>=0&&(s=r),ar(r,s,t,n),e==null||!gt(e)&&!Array.isArray(e)&&typeof e!="number"&&typeof e!="boolean"&&typeof e!="string"){const c=e==null?"null":e.constructor.name;throw new Error(`Argument '${t}' passed to '${n}' must be a Tensor or TensorLike, but got '${c}'`)}const o=Me(e,s);!gt(e)&&!Array.isArray(e)&&(e=[e]);const i=s!=="string"?En(e,s):pe(e,[],!0);return g.makeTensor(i,o,s)}function wo(e,t,n,r="numeric"){if(!Array.isArray(e))throw new Error(`Argument ${t} passed to ${n} must be a \`Tensor[]\` or \`TensorLike[]\``);return e.map((o,a)=>d(o,`${t}[${a}]`,n,r))}/**
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
 */const pc="__op";function b(e){const t=Object.keys(e);if(t.length!==1)throw new Error(`Please provide an object with a single key (operation name) mapping to a function. Got an object with ${t.length} keys.`);let n=t[0];const r=e[n];n.endsWith("_")&&(n=n.substring(0,n.length-1)),n=n+pc;const s=(...o)=>{g.startScope(n);try{const a=r(...o);return kn(a)&&console.error("Cannot return a Promise inside of tidy."),g.endScope(a),a}catch(a){throw g.endScope(null),a}};return Object.defineProperty(s,"name",{value:n,configurable:!0}),s}/**
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
 */function dc(e,t){const n=d(e,"real","complex"),r=d(t,"imag","complex");Ma(n.shape,r.shape,`real and imag shapes, ${n.shape} and ${r.shape}, must match in call to tf.complex().`);const s={real:n,imag:r};return g.runKernel(ei,s)}const Zt=b({complex_:dc});/**
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
 */function Be(e,t,n,r){if(r==null)r=bn(e);else if(r==="complex64")throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(typeof e=="object"&&("texture"in e||"buffer"in e&&!(e.buffer instanceof ArrayBuffer))){if(r!=="float32"&&r!=="int32")throw new Error(`Creating tensor from GPU data only supports 'float32'|'int32' dtype, while the dtype is ${r}.`);return g.backend.createTensorFromGPUData(e,t||n,r)}if(!gt(e)&&!Array.isArray(e)&&typeof e!="number"&&typeof e!="boolean"&&typeof e!="string")throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(t!=null){St(t);const s=Z(t),o=Z(n);p(s===o,()=>`Based on the provided shape, [${t}], the tensor should have ${s} values but has ${o}`);for(let a=0;a<n.length;++a){const i=n[a],c=a===n.length-1?i!==Z(t.slice(a)):!0;p(n[a]===t[a]||!c,()=>`Error creating a new Tensor. Inferred shape (${n}) does not match the provided shape (${t}). `)}}return!gt(e)&&!Array.isArray(e)&&(e=[e]),t=t||n,e=r!=="string"?En(e,r):pe(e,[],!0),g.makeTensor(e,t,r)}/**
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
 */function gc(e,t,n){const r=Me(e,n);return Be(e,t,r,n)}/**
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
 */const ir=4;async function Hb(e,t){const n=[],r=[],s=Array.isArray(e)?e.map(a=>a.name):Object.keys(e);for(let a=0;a<s.length;++a){const i=s[a],c=Array.isArray(e)?e[a].tensor:e[i];if(c.dtype!=="float32"&&c.dtype!=="int32"&&c.dtype!=="bool"&&c.dtype!=="string"&&c.dtype!=="complex64")throw new Error(`Unsupported dtype in weight '${i}': ${c.dtype}`);const u={name:i,shape:c.shape,dtype:c.dtype};if(c.dtype==="string"){const h=new Promise(async l=>{const f=await c.bytes(),m=f.reduce(($,E)=>$+E.length,0)+ir*f.length,w=new Uint8Array(m);let I=0;for(let $=0;$<f.length;$++){const E=f[$],F=new Uint8Array(new Uint32Array([E.length]).buffer);w.set(F,I),I+=ir,w.set(E,I),I+=E.length}l(w)});r.push(h)}else r.push(c.data());t!=null&&(u.group=t),n.push(u)}const o=await Promise.all(r);return{data:mc(o),specs:n}}function mc(e){if(e===null)throw new Error(`Invalid input value: ${JSON.stringify(e)}`);let t=0;const n=[];e.forEach(o=>{if(t+=o.byteLength,n.push(o.byteLength===o.buffer.byteLength?o:new o.constructor(o)),!(o instanceof Float32Array||o instanceof Int32Array||o instanceof Uint8Array))throw new Error(`Unsupported TypedArray subtype: ${o.constructor.name}`)});const r=new Uint8Array(t);let s=0;return n.forEach(o=>{r.set(new Uint8Array(o.buffer),s),s+=o.byteLength}),r.buffer}const Tn=typeof Buffer<"u"&&(typeof Blob>"u"||typeof atob>"u"||typeof btoa>"u");function cr(e){return Tn?Buffer.byteLength(e):new Blob([e]).size}function bc(e){if(Tn)return Buffer.from(e).toString("base64");const t=new Uint8Array(e);let n="";for(let r=0,s=t.length;r<s;r++)n+=String.fromCharCode(t[r]);return btoa(n)}function yc(e){if(Tn){const r=Buffer.from(e,"base64");return r.buffer.slice(r.byteOffset,r.byteOffset+r.byteLength)}const t=atob(e),n=new Uint8Array(t.length);for(let r=0;r<t.length;++r)n.set([t.charCodeAt(r)],r);return n.buffer}function jb(e){if(e.length===1)return e[0];let t=0;e.forEach(s=>{t+=s.byteLength});const n=new Uint8Array(t);let r=0;return e.forEach(s=>{n.set(new Uint8Array(s),r),r+=s.byteLength}),n.buffer}function xo(e){if(e.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:e.modelTopology==null?0:cr(JSON.stringify(e.modelTopology)),weightSpecsBytes:e.weightSpecs==null?0:cr(JSON.stringify(e.weightSpecs)),weightDataBytes:e.weightData==null?0:e.weightData.byteLength}}/**
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
 */class et{constructor(){this.saveRouters=[],this.loadRouters=[]}static getInstance(){return et.instance==null&&(et.instance=new et),et.instance}static registerSaveRouter(t){et.getInstance().saveRouters.push(t)}static registerLoadRouter(t){et.getInstance().loadRouters.push(t)}static getSaveHandlers(t){return et.getHandlers(t,"save")}static getLoadHandlers(t,n){return et.getHandlers(t,"load",n)}static getHandlers(t,n,r){const s=[];return(n==="load"?et.getInstance().loadRouters:et.getInstance().saveRouters).forEach(a=>{const i=a(t,r);i!==null&&s.push(i)}),s}}const Xb=e=>et.getSaveHandlers(e);/**
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
 */const an="tensorflowjs",cn=1,Bt="models_store",Nt="model_info_store";function $o(){if(!G().getBool("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");const e=typeof window>"u"?self:window,t=e.indexedDB||e.mozIndexedDB||e.webkitIndexedDB||e.msIndexedDB||e.shimIndexedDB;if(t==null)throw new Error("The current browser does not appear to support IndexedDB.");return t}function un(e){const t=e.result;t.createObjectStore(Bt,{keyPath:"modelPath"}),t.createObjectStore(Nt,{keyPath:"modelPath"})}class Rt{constructor(t){if(this.indexedDB=$o(),t==null||!t)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=t}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return this.databaseAction(this.modelPath,t)}async load(){return this.databaseAction(this.modelPath)}databaseAction(t,n){return new Promise((r,s)=>{const o=this.indexedDB.open(an,cn);o.onupgradeneeded=()=>un(o),o.onsuccess=()=>{const a=o.result;if(n==null){const i=a.transaction(Bt,"readonly"),u=i.objectStore(Bt).get(this.modelPath);u.onsuccess=()=>{if(u.result==null)return a.close(),s(new Error(`Cannot find model with path '${this.modelPath}' in IndexedDB.`));r(u.result.modelArtifacts)},u.onerror=h=>(a.close(),s(u.error)),i.oncomplete=()=>a.close()}else{const i=xo(n),c=a.transaction(Nt,"readwrite");let u=c.objectStore(Nt);const h=u.put({modelPath:this.modelPath,modelArtifactsInfo:i});let l;h.onsuccess=()=>{l=a.transaction(Bt,"readwrite");const m=l.objectStore(Bt).put({modelPath:this.modelPath,modelArtifacts:n,modelArtifactsInfo:i});m.onsuccess=()=>r({modelArtifactsInfo:i}),m.onerror=w=>{u=c.objectStore(Nt);const I=u.delete(this.modelPath);I.onsuccess=()=>(a.close(),s(m.error)),I.onerror=$=>(a.close(),s(m.error))}},h.onerror=f=>(a.close(),s(h.error)),c.oncomplete=()=>{l==null?a.close():l.oncomplete=()=>a.close()}}},o.onerror=a=>s(o.error)})}}Rt.URL_SCHEME="indexeddb://";const Io=e=>G().getBool("IS_BROWSER")&&!Array.isArray(e)&&e.startsWith(Rt.URL_SCHEME)?kc(e.slice(Rt.URL_SCHEME.length)):null;et.registerSaveRouter(Io);et.registerLoadRouter(Io);function kc(e){return new Rt(e)}function wc(e){return e.startsWith(Rt.URL_SCHEME)?e.slice(Rt.URL_SCHEME.length):e}class xc{constructor(){this.indexedDB=$o()}async listModels(){return new Promise((t,n)=>{const r=this.indexedDB.open(an,cn);r.onupgradeneeded=()=>un(r),r.onsuccess=()=>{const s=r.result,o=s.transaction(Nt,"readonly"),i=o.objectStore(Nt).getAll();i.onsuccess=()=>{const c={};for(const u of i.result)c[u.modelPath]=u.modelArtifactsInfo;t(c)},i.onerror=c=>(s.close(),n(i.error)),o.oncomplete=()=>s.close()},r.onerror=s=>n(r.error)})}async removeModel(t){return t=wc(t),new Promise((n,r)=>{const s=this.indexedDB.open(an,cn);s.onupgradeneeded=()=>un(s),s.onsuccess=()=>{const o=s.result,a=o.transaction(Nt,"readwrite"),i=a.objectStore(Nt),c=i.get(t);let u;c.onsuccess=()=>{if(c.result==null)return o.close(),r(new Error(`Cannot find model with path '${t}' in IndexedDB.`));{const h=i.delete(t),l=()=>{u=o.transaction(Bt,"readwrite");const m=u.objectStore(Bt).delete(t);m.onsuccess=()=>n(c.result.modelArtifactsInfo),m.onerror=w=>r(c.error)};h.onsuccess=l,h.onerror=f=>(l(),o.close(),r(c.error))}},c.onerror=h=>(o.close(),r(c.error)),a.oncomplete=()=>{u==null?o.close():u.oncomplete=()=>o.close()}},s.onerror=o=>r(s.error)})}}/**
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
 */const xt="/",Ut="tensorflowjs_models",So="info",$c="model_topology",Ic="weight_specs",Sc="weight_data",Ec="model_metadata";function Eo(e){return{info:[Ut,e,So].join(xt),topology:[Ut,e,$c].join(xt),weightSpecs:[Ut,e,Ic].join(xt),weightData:[Ut,e,Sc].join(xt),modelMetadata:[Ut,e,Ec].join(xt)}}function vo(e){for(const t of Object.values(e))window.localStorage.removeItem(t)}function vc(e){const t=e.split(xt);if(t.length<3)throw new Error(`Invalid key format: ${e}`);return t.slice(1,t.length-1).join(xt)}function Dc(e){return e.startsWith(Gt.URL_SCHEME)?e.slice(Gt.URL_SCHEME.length):e}class Gt{constructor(t){if(!G().getBool("IS_BROWSER")||typeof window>"u"||typeof window.localStorage>"u")throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,t==null||!t)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=t,this.keys=Eo(this.modelPath)}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");{const n=JSON.stringify(t.modelTopology),r=JSON.stringify(t.weightSpecs),s=xo(t);try{this.LS.setItem(this.keys.info,JSON.stringify(s)),this.LS.setItem(this.keys.topology,n),this.LS.setItem(this.keys.weightSpecs,r),this.LS.setItem(this.keys.weightData,bc(t.weightData));const o={format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,signature:t.signature!=null?t.signature:void 0,userDefinedMetadata:t.userDefinedMetadata!=null?t.userDefinedMetadata:void 0,modelInitializer:t.modelInitializer!=null?t.modelInitializer:void 0,initializerSignature:t.initializerSignature!=null?t.initializerSignature:void 0,trainingConfig:t.trainingConfig!=null?t.trainingConfig:void 0};return this.LS.setItem(this.keys.modelMetadata,JSON.stringify(o)),{modelArtifactsInfo:s}}catch{throw vo(this.keys),new Error(`Failed to save model '${this.modelPath}' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes=${s.modelTopologyBytes}, weightSpecsBytes=${s.weightSpecsBytes}, weightDataBytes=${s.weightDataBytes}.`)}}}async load(){const t=JSON.parse(this.LS.getItem(this.keys.info));if(t==null)throw new Error(`In local storage, there is no model with name '${this.modelPath}'`);if(t.modelTopologyType!=="JSON")throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");const n={},r=JSON.parse(this.LS.getItem(this.keys.topology));if(r==null)throw new Error(`In local storage, the topology of model '${this.modelPath}' is missing.`);n.modelTopology=r;const s=JSON.parse(this.LS.getItem(this.keys.weightSpecs));if(s==null)throw new Error(`In local storage, the weight specs of model '${this.modelPath}' are missing.`);n.weightSpecs=s;const o=this.LS.getItem(this.keys.modelMetadata);if(o!=null){const i=JSON.parse(o);n.format=i.format,n.generatedBy=i.generatedBy,n.convertedBy=i.convertedBy,i.signature!=null&&(n.signature=i.signature),i.userDefinedMetadata!=null&&(n.userDefinedMetadata=i.userDefinedMetadata),i.modelInitializer!=null&&(n.modelInitializer=i.modelInitializer),i.initializerSignature!=null&&(n.initializerSignature=i.initializerSignature),i.trainingConfig!=null&&(n.trainingConfig=i.trainingConfig)}const a=this.LS.getItem(this.keys.weightData);if(a==null)throw new Error(`In local storage, the binary weight values of model '${this.modelPath}' are missing.`);return n.weightData=yc(a),n}}Gt.URL_SCHEME="localstorage://";const Do=e=>G().getBool("IS_BROWSER")&&!Array.isArray(e)&&e.startsWith(Gt.URL_SCHEME)?Tc(e.slice(Gt.URL_SCHEME.length)):null;et.registerSaveRouter(Do);et.registerLoadRouter(Do);function Tc(e){return new Gt(e)}class Nc{constructor(){p(G().getBool("IS_BROWSER"),()=>"Current environment is not a web browser"),p(typeof window>"u"||typeof window.localStorage<"u",()=>"Current browser does not appear to support localStorage"),this.LS=window.localStorage}async listModels(){const t={},n=Ut+xt,r=xt+So;for(let s=0;s<this.LS.length;++s){const o=this.LS.key(s);if(o.startsWith(n)&&o.endsWith(r)){const a=vc(o);t[a]=JSON.parse(this.LS.getItem(o))}}return t}async removeModel(t){t=Dc(t);const n=Eo(t);if(this.LS.getItem(n.info)==null)throw new Error(`Cannot find model at path '${t}'`);const r=JSON.parse(this.LS.getItem(n.info));return vo(n),r}}/**
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
 */const ur="://";class yt{constructor(){this.managers={}}static getInstance(){return yt.instance==null&&(yt.instance=new yt),yt.instance}static registerManager(t,n){p(t!=null,()=>"scheme must not be undefined or null."),t.endsWith(ur)&&(t=t.slice(0,t.indexOf(ur))),p(t.length>0,()=>"scheme must not be an empty string.");const r=yt.getInstance();p(r.managers[t]==null,()=>`A model store manager is already registered for scheme '${t}'.`),r.managers[t]=n}static getManager(t){const n=yt.getInstance().managers[t];if(n==null)throw new Error(`Cannot find model manager for scheme '${t}'`);return n}static getSchemes(){return Object.keys(yt.getInstance().managers)}}/**
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
 */class Ac{constructor(){this.messageName="setTimeoutCustom",this.functionRefs=[],this.handledMessageCount=0,this.hasEventListener=!1}fetch(t,n){return fetch(t,n)}now(){return performance.now()}encode(t,n){if(n!=="utf-8"&&n!=="utf8")throw new Error(`Browser's encoder only supports utf-8, but got ${n}`);return this.textEncoder==null&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(t)}decode(t,n){return new TextDecoder(n).decode(t)}setTimeoutCustom(t,n){if(typeof window>"u"||!G().getBool("USE_SETTIMEOUTCUSTOM")){setTimeout(t,n);return}this.functionRefs.push(t),setTimeout(()=>{window.postMessage({name:this.messageName,index:this.functionRefs.length-1},"*")},n),this.hasEventListener||(this.hasEventListener=!0,window.addEventListener("message",r=>{if(r.source===window&&r.data.name===this.messageName){r.stopPropagation();const s=this.functionRefs[r.data.index];s(),this.handledMessageCount++,this.handledMessageCount===this.functionRefs.length&&(this.functionRefs=[],this.handledMessageCount=0)}},!0))}isTypedArray(t){return t instanceof Float32Array||t instanceof Int32Array||t instanceof Uint8Array||t instanceof Uint8ClampedArray}}if(G().get("IS_BROWSER")){G().setPlatform("browser",new Ac);try{yt.registerManager(Gt.URL_SCHEME,new Nc)}catch{}try{yt.registerManager(Rt.URL_SCHEME,new xc)}catch{}}/**
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
 */const _c={importFetch:()=>require("node-fetch")};let He;class Cc{constructor(){this.util=require("util"),this.textEncoder=new this.util.TextEncoder}fetch(t,n){return G().global.fetch!=null?G().global.fetch(t,n):(He==null&&(He=_c.importFetch()),He(t,n))}now(){const t=process.hrtime();return t[0]*1e3+t[1]/1e6}encode(t,n){if(n!=="utf-8"&&n!=="utf8")throw new Error(`Node built-in encoder only supports utf-8, but got ${n}`);return this.textEncoder.encode(t)}decode(t,n){return t.length===0?"":new this.util.TextDecoder(n).decode(t)}isTypedArray(t){return this.util.types.isFloat32Array(t)||this.util.types.isInt32Array(t)||this.util.types.isUint8Array(t)||this.util.types.isUint8ClampedArray(t)}}G().get("IS_NODE")&&!G().get("IS_BROWSER")&&G().setPlatform("node",new Cc);/**
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
 */function Pt(e,t="float32",n){return t=t||"float32",St(e),new sc(e,t,n)}/**
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
 */function Fc(e,t){const n=d(e,"x","cast");if(!Pa(t))throw new Error(`Failed to cast to unknown dtype ${t}`);if(t==="string"&&n.dtype!=="string"||t!=="string"&&n.dtype==="string")throw new Error("Only strings can be casted to strings");const r={x:n},s={dtype:t};return g.runKernel($n,r,s)}const D=b({cast_:Fc});/**
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
 */function Mc(e){const n={x:d(e,"x","clone","string_or_numeric")};return g.runKernel(In,n)}const Ht=b({clone_:Mc});/**
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
 */function Bc(e,t=!1){console.log(e.toString(t))}/**
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
 */yo();const Rc={buffer:Pt,cast:D,clone:Ht,print:Bc};ac(Rc);/**
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
 */function Jb(){return g}function Yb(){return g.memory()}function X(e,t){return g.tidy(e,t)}function ut(e){mo(e).forEach(n=>n.dispose())}function Gc(e){return g.keep(e)}function Zb(e,t,n=1){return g.registerBackend(e,t,n)}function Qb(){return g.backend}/**
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
 */function Pc(e,t){let n=d(e,"a","add"),r=d(t,"b","add");[n,r]=H(n,r);const s={a:n,b:r};return g.runKernel(xn,s)}const N=b({add_:Pc});/**
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
 */function Oc(e,t){let n=d(e,"a","floorDiv"),r=d(t,"b","floorDiv");[n,r]=H(n,r);const s={a:n,b:r};return g.runKernel(as,s)}const To=b({floorDiv_:Oc});/**
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
 */function Lc(e,t){let n=d(e,"a","div"),r=d(t,"b","div");if([n,r]=H(n,r),n.dtype==="int32"&&r.dtype==="int32")return To(n,r);const s={a:n,b:r},o={};return g.runKernel(Qr,s,o)}const C=b({div_:Lc});/**
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
 */function Kc(e,t){let n=d(e,"a","mul"),r=d(t,"b","mul");[n,r]=H(n,r);const s={a:n,b:r};return g.runKernel(vs,s)}const x=b({mul_:Kc});/**
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
 */function Wc(e){const t=d(e,"x","abs");if(t.dtype==="complex64"){const n={x:t};return g.runKernel(zr,n)}else{const n={x:t};return g.runKernel(Dr,n)}}const bt=b({abs_:Wc});/**
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
 */function zc(e){const n={x:d(e,"x","acos")};return g.runKernel(Tr,n)}const qc=b({acos_:zc});/**
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
 */function Vc(e){const n={x:d(e,"x","acosh")};return g.runKernel(Nr,n)}const Uc=b({acosh_:Vc});/**
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
 */function Hc(e,t=null,n=!1){const s={x:d(e,"x","all","bool")},o={axis:t,keepDims:n};return g.runKernel(Xa,s,o)}const jc=b({all_:Hc});/**
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
 */function Xc(e,t=null,n=!1){const s={x:d(e,"x","any","bool")},o={axis:t,keepDims:n};return g.runKernel(Ja,s,o)}const Jc=b({any_:Xc});/**
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
 */function Yc(e,t=0){const r={x:d(e,"x","argMax")},s={axis:t};return g.runKernel(Ar,r,s)}const Zc=b({argMax_:Yc});/**
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
 */function Qc(e,t=0){const r={x:d(e,"x","argMin")},s={axis:t};return g.runKernel(_r,r,s)}const tu=b({argMin_:Qc});/**
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
 */function eu(e){const n={x:d(e,"x","asin")};return g.runKernel(Cr,n)}const nu=b({asin_:eu});/**
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
 */function ru(e){const n={x:d(e,"x","asinh")};return g.runKernel(Fr,n)}const su=b({asinh_:ru});/**
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
 */function ou(e){const n={x:d(e,"x","atan")};return g.runKernel(Mr,n)}const au=b({atan_:ou});/**
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
 */function iu(e,t){let n=d(e,"a","atan2"),r=d(t,"b","atan2");[n,r]=H(n,r);const s={a:n,b:r};return g.runKernel(Rr,s)}const cu=b({atan2_:iu});/**
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
 */function uu(e){const n={x:d(e,"x","atanh")};return g.runKernel(Br,n)}const lu=b({atanh_:uu});/**
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
 */function hu(e,t,n,r,s="NHWC",o){const a=e[3],i=[...t,a],c=_o(s);return Re(e,i,n,o,r,null,null,c)}function No(e,t,n,r,s,o,a="channelsLast"){const[i,c]=de(t);let u;if(a==="channelsLast")u=[i,c,e[3],e[3]];else if(a==="channelsFirst")u=[i,c,e[1],e[1]];else throw new Error(`Unknown dataFormat ${a}`);return Re(e,u,n,r,s,o,!1,a)}function fu(e,t,n,r,s,o,a="NDHWC"){const[i,c,u]=ln(t);let h,l;if(a==="NDHWC")l="channelsLast",h=[i,c,u,e[4],e[4]];else if(a==="NCDHW")l="channelsFirst",h=[i,c,u,e[1],e[1]];else throw new Error(`Unknown dataFormat ${a}`);return Ao(e,h,n,r,s,!1,l,o)}function Re(e,t,n,r,s,o,a=!1,i="channelsLast"){let[c,u,h,l]=[-1,-1,-1,-1];if(i==="channelsLast")[c,u,h,l]=e;else if(i==="channelsFirst")[c,l,u,h]=e;else throw new Error(`Unknown dataFormat ${i}`);const[f,m,,w]=t,[I,$]=de(n),[E,F]=de(r),S=jt(f,E),v=jt(m,F),{padInfo:T,outHeight:A,outWidth:U}=gu(s,u,h,I,$,S,v,o,i),K=a?w*l:w;let P;return i==="channelsFirst"?P=[c,K,A,U]:i==="channelsLast"&&(P=[c,A,U,K]),{batchSize:c,dataFormat:i,inHeight:u,inWidth:h,inChannels:l,outHeight:A,outWidth:U,outChannels:K,padInfo:T,strideHeight:I,strideWidth:$,filterHeight:f,filterWidth:m,effectiveFilterHeight:S,effectiveFilterWidth:v,dilationHeight:E,dilationWidth:F,inShape:e,outShape:P,filterShape:t}}function Ao(e,t,n,r,s,o=!1,a="channelsLast",i){let[c,u,h,l,f]=[-1,-1,-1,-1,-1];if(a==="channelsLast")[c,u,h,l,f]=e;else if(a==="channelsFirst")[c,f,u,h,l]=e;else throw new Error(`Unknown dataFormat ${a}`);const[m,w,I,,$]=t,[E,F,S]=ln(n),[v,T,A]=ln(r),U=jt(m,v),K=jt(w,T),P=jt(I,A),{padInfo:j,outDepth:O,outHeight:Q,outWidth:ot}=mu(s,u,h,l,E,F,S,U,K,P,i),at=o?$*f:$;let it;return a==="channelsFirst"?it=[c,at,O,Q,ot]:a==="channelsLast"&&(it=[c,O,Q,ot,at]),{batchSize:c,dataFormat:a,inDepth:u,inHeight:h,inWidth:l,inChannels:f,outDepth:O,outHeight:Q,outWidth:ot,outChannels:at,padInfo:j,strideDepth:E,strideHeight:F,strideWidth:S,filterDepth:m,filterHeight:w,filterWidth:I,effectiveFilterDepth:U,effectiveFilterHeight:K,effectiveFilterWidth:P,dilationDepth:v,dilationHeight:T,dilationWidth:A,inShape:e,outShape:it,filterShape:t}}function pu(e,t,n,r,s){r==null&&(r=Nn(e,t,n));const o=e[0],a=e[1],i=ge((o-t+2*r)/n+1,s),c=ge((a-t+2*r)/n+1,s);return[i,c]}function du(e,t,n,r,s,o){s==null&&(s=Nn(e,t[0],r[0]));const a=[0,0,0,n];for(let i=0;i<3;i++)e[i]+2*s>=t[i]&&(a[i]=ge((e[i]-t[i]+2*s)/r[i]+1,o));return a}function Nn(e,t,n,r=1){const s=jt(t,r);return Math.floor((e[0]*(n-1)-n+s)/2)}function de(e){return typeof e=="number"?[e,e,e]:e.length===2?[e[0],e[1],1]:e}function ln(e){return typeof e=="number"?[e,e,e]:e}function jt(e,t){return t<=1?e:e+(e-1)*(t-1)}function gu(e,t,n,r,s,o,a,i,c){let u,h,l;if(typeof e=="number"){u={top:e,bottom:e,left:e,right:e,type:e===0?"VALID":"NUMBER"};const m=pu([t,n],o,r,e,i);h=m[0],l=m[1]}else if(e==="same"){h=Math.ceil(t/r),l=Math.ceil(n/s);const f=Math.max(0,(h-1)*r+o-t),m=Math.max(0,(l-1)*s+a-n),w=Math.floor(f/2),I=f-w,$=Math.floor(m/2),E=m-$;u={top:w,bottom:I,left:$,right:E,type:"SAME"}}else if(e==="valid")u={top:0,bottom:0,left:0,right:0,type:"VALID"},h=Math.ceil((t-o+1)/r),l=Math.ceil((n-a+1)/s);else if(typeof e=="object"){const f=c==="channelsLast"?e[1][0]:e[2][0],m=c==="channelsLast"?e[1][1]:e[2][1],w=c==="channelsLast"?e[2][0]:e[3][0],I=c==="channelsLast"?e[2][1]:e[3][1];u={top:f,bottom:m,left:w,right:I,type:f===0&&m===0&&w===0&&I===0?"VALID":"EXPLICIT"},h=ge((t-o+f+m)/r+1,i),l=ge((n-a+w+I)/s+1,i)}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:u,outHeight:h,outWidth:l}}function mu(e,t,n,r,s,o,a,i,c,u,h){let l,f,m,w;if(e==="valid"&&(e=0),typeof e=="number"){l={top:e,bottom:e,left:e,right:e,front:e,back:e,type:e===0?"VALID":"NUMBER"};const $=du([t,n,r,1],[i,c,u],1,[s,o,a],e,h);f=$[0],m=$[1],w=$[2]}else if(e==="same"){f=Math.ceil(t/s),m=Math.ceil(n/o),w=Math.ceil(r/a);const I=(f-1)*s+i-t,$=(m-1)*o+c-n,E=(w-1)*a+u-r,F=Math.floor(I/2),S=I-F,v=Math.floor($/2),T=$-v,A=Math.floor(E/2),U=E-A;l={top:v,bottom:T,left:A,right:U,front:F,back:S,type:"SAME"}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:l,outDepth:f,outHeight:m,outWidth:w}}function ge(e,t){if(!t)return Math.trunc(e);switch(t){case"round":return Math.round(e);case"ceil":return Math.ceil(e);case"floor":return Math.floor(e);default:throw new Error(`Unknown roundingMode ${t}`)}}function Ot(e){const[t,n,r]=de(e);return t===1&&n===1&&r===1}function Et(e,t){return Ot(e)||Ot(t)}function Lt(e){return de(e).every(t=>t>0)}function _o(e){if(e==="NHWC")return"channelsLast";if(e==="NCHW")return"channelsFirst";throw new Error(`Unknown dataFormat ${e}`)}function st(e,t,n){if(n!=null){if(typeof t=="string")throw Error(`Error in ${e}: pad must be an integer when using dimRoundingMode ${n} but got pad ${t}.`);if(typeof t=="number")p(fe(t),()=>`Error in ${e}: pad must be an integer when using dimRoundingMode ${n} but got pad ${t}.`);else if(typeof t=="object")t.forEach(r=>{r.forEach(s=>{p(fe(s),()=>`Error in ${e}: pad must be an integer when using dimRoundingMode ${n} but got pad ${s}.`)})});else throw Error(`Error in ${e}: Unknown padding parameter: ${t}`)}}/**
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
 */function bu(e,t){const r={x:d(e,"x","reshape","string_or_numeric")},s={shape:t};return g.runKernel(Gs,r,s)}const y=b({reshape_:bu});/**
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
 */function yu(e,t,n,r,s){const o=d(e,"x","avgPool","float32"),a=1;p(Et(n,a),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${n} and dilations '${a}'`);let i=o,c=!1;o.rank===3&&(c=!0,i=y(o,[1,o.shape[0],o.shape[1],o.shape[2]])),p(i.rank===4,()=>`Error in avgPool: x must be rank 4 but got rank ${i.rank}.`),st("avgPool",r,s);const u={x:i},h={filterSize:t,strides:n,pad:r,dimRoundingMode:s};let l=g.runKernel(Gr,u,h);return l=D(l,o.dtype),c?y(l,[l.shape[1],l.shape[2],l.shape[3]]):l}const Co=b({avgPool_:yu});/**
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
 */function ku(e,t,n,r,s,o="NDHWC"){const a=d(e,"x","avgPool3d","float32");let i=a,c=!1;a.rank===4&&(c=!0,i=y(a,[1,a.shape[0],a.shape[1],a.shape[2],a.shape[3]])),p(i.rank===5,()=>`Error in avgPool3d: x must be rank 5 but got rank ${i.rank}.`),p(o==="NDHWC",()=>`Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of ${o}`),p(typeof n=="number"&&n>0||Array.isArray(n)&&n[0]>0&&n[1]>0&&n[2]>0,()=>`Error in avgPool3d: Stride must be > 0, but got '${n}'`),st("avgPool3d",r,s);const u={x:i},h={filterSize:t,strides:n,pad:r,dimRoundingMode:s,dataFormat:o};let l=g.runKernel(Pr,u,h);return l=D(l,i.dtype),c?y(l,[l.shape[1],l.shape[2],l.shape[3],l.shape[4]]):l}const ty=b({avgPool3d_:ku});/**
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
 */function wu(e,t=0){p(e.length>=1,()=>"Pass at least one tensor to concat");const n=wo(e,"tensors","concat","string_or_numeric");if(n[0].dtype==="complex64"&&n.forEach(o=>{if(o.dtype!=="complex64")throw new Error(`Cannot concatenate complex64 tensors with a tensor
          with dtype ${o.dtype}. `)}),n.length===1)return Ht(n[0]);const r=n,s={axis:t};return g.runKernel(qr,r,s)}const pt=b({concat_:wu});/**
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
 */function xu(e,t,n=!1,r=!1){let s=d(e,"a","matMul"),o=d(t,"b","matMul");[s,o]=H(s,o);const a={a:s,b:o},i={transposeA:n,transposeB:r};return g.runKernel(Or,a,i)}const R=b({matMul_:xu});/**
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
 */function $u(e){const n={x:d(e,"x","sigmoid","float32")};return g.runKernel(Js,n)}const Ge=b({sigmoid_:$u});/**
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
 */function Iu(e,t,n){const r=d(e,"x","slice","string_or_numeric");if(r.rank===0)throw new Error("Slicing scalar is not possible");const s={x:r},o={begin:t,size:n};return g.runKernel(Us,s,o)}const V=b({slice_:Iu});/**
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
 */function Su(e){const n={x:d(e,"x","tanh","float32")};return g.runKernel(ao,n)}const Eu=b({tanh_:Su});/**
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
 */function vu(e,t,n){const r=d(e,"x","batchToSpaceND"),s=t.reduce((i,c)=>i*c);p(r.rank>=1+t.length,()=>`input rank is ${r.rank} but should be > than blockShape.length ${t.length}`),p(n.length===t.length,()=>`crops.length is ${n.length} but should be equal to blockShape.length  ${t.length}`),p(r.shape[0]%s===0,()=>`input tensor batch is ${r.shape[0]} but is not divisible by the product of the elements of blockShape ${t.join(" * ")} === ${s}`);const o={x:r},a={blockShape:t,crops:n};return g.runKernel(Lr,o,a)}const An=b({batchToSpaceND_:vu});function Du(e){let t;return e.rank===0||e.rank===1?t=y(e,[1,1,1,e.size]):e.rank===2?t=y(e,[1,1,e.shape[0],e.shape[1]]):e.rank===3?t=y(e,[1,e.shape[0],e.shape[1],e.shape[2]]):t=e,t}/**
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
 */function Tu(e,t,n,r,s,o){o==null&&(o=.001);const a=d(e,"x","batchNorm"),i=d(t,"mean","batchNorm"),c=d(n,"variance","batchNorm");let u;s!=null&&(u=d(s,"scale","batchNorm"));let h;r!=null&&(h=d(r,"offset","batchNorm")),p(i.rank===c.rank,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),p(h==null||i.rank===h.rank,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),p(u==null||i.rank===u.rank,()=>"Batch normalization gradient requires mean and scale to have equal ranks.");const f={x:Du(a),scale:u,offset:h,mean:i,variance:c},m={varianceEpsilon:o},w=g.runKernel(is,f,m);return y(w,a.shape)}const Pe=b({batchNorm_:Tu});function Nu(e,t,n,r,s,o){const a=d(e,"x","batchNorm"),i=d(t,"mean","batchNorm"),c=d(n,"variance","batchNorm");let u;s!=null&&(u=d(s,"scale","batchNorm"));let h;return r!=null&&(h=d(r,"offset","batchNorm")),p(a.rank===2,()=>`Error in batchNorm2D: x must be rank 2 but got rank ${a.rank}.`),p(i.rank===2||i.rank===1,()=>`Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank ${i.rank}.`),p(c.rank===2||c.rank===1,()=>`Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank ${c.rank}.`),u!=null&&p(u.rank===2||u.rank===1,()=>`Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank ${u.rank}.`),h!=null&&p(h.rank===2||h.rank===1,()=>`Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank ${h.rank}.`),Pe(a,i,c,h,u,o)}const ey=b({batchNorm2d_:Nu});function Au(e,t,n,r,s,o){const a=d(e,"x","batchNorm"),i=d(t,"mean","batchNorm"),c=d(n,"variance","batchNorm");let u;s!=null&&(u=d(s,"scale","batchNorm"));let h;return r!=null&&(h=d(r,"offset","batchNorm")),p(a.rank===3,()=>`Error in batchNorm3D: x must be rank 3 but got rank ${a.rank}.`),p(i.rank===3||i.rank===1,()=>`Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank ${i.rank}.`),p(c.rank===3||c.rank===1,()=>`Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank ${c.rank}.`),u!=null&&p(u.rank===3||u.rank===1,()=>`Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank ${u.rank}.`),h!=null&&p(h.rank===3||h.rank===1,()=>`Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank ${h.rank}.`),Pe(a,i,c,h,u,o)}const ny=b({batchNorm3d_:Au});function _u(e,t,n,r,s,o){const a=d(e,"x","batchNorm"),i=d(t,"mean","batchNorm"),c=d(n,"variance","batchNorm");let u;s!=null&&(u=d(s,"scale","batchNorm"));let h;return r!=null&&(h=d(r,"offset","batchNorm")),p(a.rank===4,()=>`Error in batchNorm4D: x must be rank 4 but got rank ${a.rank}.`),p(i.rank===4||i.rank===1,()=>`Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank ${i.rank}.`),p(c.rank===4||c.rank===1,()=>`Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank ${c.rank}.`),u!=null&&p(u.rank===4||u.rank===1,()=>`Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank ${u.rank}.`),h!=null&&p(h.rank===4||h.rank===1,()=>`Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank ${h.rank}.`),Pe(a,i,c,h,u,o)}const ry=b({batchNorm4d_:_u});/**
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
 */function Cu(e,t,n){const r=d(e,"x","bincount"),s=d(t,"weights","bincount");p(r.dtype==="int32",()=>`Error in bincount: input dtype must be int32, but got ${r.dtype}`),p(n>=0,()=>`size must be non-negative, but got ${n}.`),p(s.size===r.size||s.size===0,()=>`Error in bincount: weights must have the same size as input or0-length, but got input shape: ${r.shape}, weights shape: ${s.shape}.`);const o={x:r,weights:s},a={size:n};return g.runKernel(Qa,o,a)}const Fu=b({bincount_:Cu});/**
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
 */function Mu(e,t){let n=d(e,"broadcastTo","x");const r=n.shape;if(St(t),t.length<n.rank)throw new Error(`broadcastTo(): shape.length=${t.length} < input.rank=${n.rank}.`);if(t.length>n.rank){const u=n.shape.slice();for(;u.length<t.length;)u.unshift(1);n=y(n,u)}const s=n.shape,o=Array.from(t);for(let u=t.length-1;u>=0;u--)if(s[u]===t[u])o[u]=1;else if(n.shape[u]!==1)throw new Error(`broadcastTo(): [${r}] cannot be broadcast to [${t}].`);if(o.map((u,h)=>u>1?h:-1).filter(u=>u>=0).length===0)return Ht(n);const i={x:n},c={reps:o};return g.runKernel(Sn,i,c)}const Se=b({broadcastTo_:Mu});/**
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
 */function Bu(e){const n={x:d(e,"x","ceil","float32")};return g.runKernel(Kr,n)}const Ru=b({ceil_:Bu});/**
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
 */function _n(e,t,n){St(e);const r={shape:e,value:t,dtype:n};return g.runKernel(mi,{},r)}/**
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
 */function Gu(e,t,n){const r=d(e,"x","clipByValue");if(p(t<=n,()=>`Error in clip: min (${t}) must be less than or equal to max (${n}).`),t===n)return _n(r.shape,t,r.dtype);const s={x:r},o={clipValueMin:t,clipValueMax:n};return g.runKernel(Wr,s,o)}const Pu=b({clipByValue_:Gu});function Ou(e){return pt(e,0)}const sy=b({concat1d_:Ou});function Lu(e,t){return pt(e,t)}const oy=b({concat2d_:Lu});function Ku(e,t){return pt(e,t)}const ay=b({concat3d_:Ku});function Wu(e,t){return pt(e,t)}const iy=b({concat4d_:Wu});/**
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
 */function zu(e,t,n,r,s="NHWC",o=[1,1],a){const i=d(e,"x","conv2d","float32"),c=d(t,"filter","conv2d","float32");let u=i,h=!1;i.rank===3&&(h=!0,u=y(i,[1,i.shape[0],i.shape[1],i.shape[2]])),p(u.rank===4,()=>`Error in conv2d: input must be rank 4, but got rank ${u.rank}.`),p(c.rank===4,()=>`Error in conv2d: filter must be rank 4, but got rank ${c.rank}.`),st("conv2d",r,a);const l=s==="NHWC"?u.shape[3]:u.shape[1];p(l===c.shape[2],()=>`Error in conv2d: depth of input (${l}) must match input depth for filter ${c.shape[2]}.`),p(Et(n,o),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${n} and dilations '${o}'`),p(Lt(o),()=>"Error in conv2D: Dilated rates should be larger than 0."),p(Lt(n),()=>"Error in conv2D: Strides should be larger than 0.");const f={x:u,filter:c},m={strides:n,pad:r,dataFormat:s,dilations:o,dimRoundingMode:a},w=g.runKernel(Vr,f,m);return h?y(w,[w.shape[1],w.shape[2],w.shape[3]]):w}const be=b({conv2d_:zu});function qu(e,t,n,r,s="NWC",o=1,a){const i=d(e,"x","conv1d"),c=d(t,"filter","conv1d");let u=i,h=!1;i.rank===2&&(h=!0,u=y(i,[1,i.shape[0],i.shape[1]])),p(u.rank===3,()=>`Error in conv1d: input must be rank 3, but got rank ${u.rank}.`),p(c.rank===3,()=>`Error in conv1d: filter must be rank 3, but got rank ${c.rank}.`),st("conv1d",r,a),p(u.shape[2]===c.shape[1],()=>`Error in conv1d: depth of input (${u.shape[2]}) must match input depth for filter ${c.shape[1]}.`),p(Et(n,o),()=>`Error in conv1D: Either stride or dilation must be 1. Got stride ${n} and dilation '${o}'`),p(Lt(o),()=>"Error in conv1D: Dilated rates should be larger than 0."),p(Lt(n),()=>"Error in conv1D: Stride should be larger than 0."),p(s==="NWC",()=>`Error in conv1d: got dataFormat of ${s} but only NWC is currently supported.`);const l=y(c,[1,c.shape[0],c.shape[1],c.shape[2]]),f=y(u,[u.shape[0],1,u.shape[1],u.shape[2]]),$=be(f,l,[1,n],r,"NHWC",[1,o],a);return h?y($,[$.shape[2],$.shape[3]]):y($,[$.shape[0],$.shape[2],$.shape[3]])}const Vu=b({conv1d_:qu});/**
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
 */function Uu(e,t,n,r,s,o="NHWC",a){p(e.length===t.rank,()=>`Length of inShape (${e.length}) and rank of dy (${t.rank}) must match`);let i=e,c=t,u=!1;t.rank===3&&(u=!0,c=y(t,[1,t.shape[0],t.shape[1],t.shape[2]]),i=[1,e[0],e[1],e[2]]),p(i.length===4,()=>`Error in conv2dDerInput: inShape must be length 4, but got length ${i.length}.`),p(c.rank===4,()=>`Error in conv2dDerInput: dy must be rank 4, but got rank ${c.rank}`),p(n.rank===4,()=>`Error in conv2dDerInput: filter must be rank 4, but got rank ${n.rank}`);const h=o==="NHWC"?i[3]:i[1],l=o==="NHWC"?c.shape[3]:c.shape[1];p(h===n.shape[2],()=>`Error in conv2dDerInput: depth of input (${h}) must match input depth for filter ${n.shape[2]}.`),p(l===n.shape[3],()=>`Error in conv2dDerInput: depth of output (${l}) must match output depth for filter ${n.shape[3]}.`),st("conv2dDerInput",s,a);const f={dy:c,filter:n},m={strides:r,pad:s,dataFormat:o,dimRoundingMode:a,inputShape:i},w=g.runKernel(Ur,f,m);return u?y(w,[w.shape[1],w.shape[2],w.shape[3]]):w}const Cn=b({conv2DBackpropInput_:Uu});function Hu(e,t,n,r,s,o){const a=d(e,"x","conv2dTranspose"),i=d(t,"filter","conv2dTranspose");return Cn(n,a,i,r,s,"NHWC",o)}const ju=b({conv2dTranspose_:Hu});/**
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
 */function Xu(e,t,n,r,s="NDHWC",o=[1,1,1]){const a=d(e,"x","conv3d"),i=d(t,"filter","conv3d");let c=a,u=!1;a.rank===4&&(u=!0,c=y(a,[1,a.shape[0],a.shape[1],a.shape[2],a.shape[3]])),p(c.rank===5,()=>`Error in conv3d: input must be rank 5, but got rank ${c.rank}.`),p(i.rank===5,()=>`Error in conv3d: filter must be rank 5, but got rank ${i.rank}.`),p(c.shape[4]===i.shape[3],()=>`Error in conv3d: depth of input (${c.shape[4]}) must match input depth for filter ${i.shape[3]}.`),p(Et(n,o),()=>`Error in conv3D: Either strides or dilations must be 1. Got strides ${n} and dilations '${o}'`),p(s==="NDHWC",()=>`Error in conv3d: got dataFormat of ${s} but only NDHWC is currently supported.`),p(Lt(o),()=>"Error in conv3D: Dilated rates should be larger than 0."),p(Lt(n),()=>"Error in conv3D: Strides should be larger than 0.");const h={x:c,filter:i},l={strides:n,pad:r,dataFormat:s,dilations:o},f=g.runKernel(Hr,h,l);return u?y(f,[f.shape[1],f.shape[2],f.shape[3],f.shape[4]]):f}const cy=b({conv3d_:Xu});/**
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
 */function Ju(e,t,n,r,s){p(e.length===t.rank,()=>`Length of inShape (${e.length}) and rank of dy (${t.rank}) must match`);let o=e,a=t,i=!1;t.rank===4&&(i=!0,a=y(t,[1,t.shape[0],t.shape[1],t.shape[2],t.shape[3]]),o=[1,e[0],e[1],e[2],e[3]]);const c=o[4],u=a.shape[4];p(o.length===5,()=>`Error in conv3dDerInput: inShape must be length 5, but got length ${o.length}.`),p(a.rank===5,()=>`Error in conv3dDerInput: dy must be rank 5, but got rank ${a.rank}`),p(n.rank===5,()=>`Error in conv3dDerInput: filter must be rank 5, but got rank ${n.rank}`),p(c===n.shape[3],()=>`Error in conv3dDerInput: depth of input (${c}) must match input depth for filter ${n.shape[3]}.`),p(u===n.shape[4],()=>`Error in conv3dDerInput: depth of output (${u}) must match output depth for filter ${n.shape[4]}.`);const h={dy:a,filter:n},l={pad:s,strides:r,inputShape:o},f=g.runKernel(si,h,l);return i?y(f,[f.shape[1],f.shape[2],f.shape[3],f.shape[4]]):f}const Fo=b({conv3DBackpropInput_:Ju});function Yu(e,t,n,r,s){const o=d(e,"x","conv3dTranspose"),a=d(t,"filter","conv3dTranspose");return Fo(n,o,a,r,s)}const uy=b({conv3dTranspose_:Yu});/**
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
 */function Zu(e){const n={x:d(e,"x","cos","float32")};return g.runKernel(jr,n)}const Fn=b({cos_:Zu});/**
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
 */function Qu(e){const n={x:d(e,"x","cosh","float32")};return g.runKernel(Xr,n)}const Mo=b({cosh_:Qu});/**
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
 */function tl(e,t=0,n=!1,r=!1){const o={x:d(e,"x","cumprod")},a={axis:t,exclusive:n,reverse:r};return g.runKernel(oi,o,a)}const hn=b({cumprod_:tl});/**
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
 */function el(e,t=0,n=!1,r=!1){const o={x:d(e,"x","cumsum")},a={axis:t,exclusive:n,reverse:r};return g.runKernel(Jr,o,a)}const Bo=b({cumsum_:el});/**
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
 */function nl(e,t,n,r=!1){const s=d(e,"x","denseBincount"),o=d(t,"weights","denseBincount");p(s.dtype==="int32",()=>`Error in denseBincount: input dtype must be int32, but got ${s.dtype}`),p(s.rank<=2,()=>`Error in denseBincount: input must be at most rank 2, but got rank ${s.rank}.`),p(n>=0,()=>`size must be non-negative, but got ${n}.`),p(o.size===s.size||o.size===0,()=>`Error in denseBincount: weights must have the same shape as x or 0-length, but got x shape: ${s.shape}, weights shape: ${o.shape}.`);const a={x:s,weights:o},i={size:n,binaryOutput:r};return g.runKernel(ii,a,i)}const ly=b({denseBincount_:nl});/**
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
 */function rl(e,t,n="NHWC"){const r=d(e,"x","depthToSpace","float32"),s=n==="NHWC"?r.shape[1]:r.shape[2],o=n==="NHWC"?r.shape[2]:r.shape[3],a=n==="NHWC"?r.shape[3]:r.shape[1];p(t>1,()=>`blockSize should be > 1 for depthToSpace, but was: ${t}`),p(s*t>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${s} and ${t}  for depthToSpace with input shape
    ${r.shape}`),p(o*t>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${o} and ${t} for depthToSpace with input shape
        ${r.shape}`),p(a%(t*t)===0,()=>`Dimension size must be evenly divisible by ${t*t} but is ${a} for depthToSpace with input shape ${r.shape}`);const i={x:r},c={blockSize:t,dataFormat:n};return g.runKernel(ci,i,c)}const sl=b({depthToSpace_:rl});/**
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
 */function ol(e,t,n,r,s="NHWC",o=[1,1],a){const i=d(e,"x","depthwiseConv2d","float32"),c=d(t,"filter","depthwiseConv2d","float32");let u=i,h=!1;i.rank===3&&(h=!0,u=y(i,[1,i.shape[0],i.shape[1],i.shape[2]])),p(u.rank===4,()=>`Error in depthwiseConv2d: input must be rank 4, but got rank ${u.rank}.`),p(c.rank===4,()=>`Error in depthwiseConv2d: filter must be rank 4, but got rank ${c.rank}.`);const l=s==="NHWC"?u.shape[3]:u.shape[1];p(l===c.shape[2],()=>`Error in depthwiseConv2d: number of input channels (${l}) must match the inChannels dimension in filter ${c.shape[2]}.`),st("depthwiseConv2d",r,a);const f={x:u,filter:c},m={strides:n,pad:r,dataFormat:s,dilations:o,dimRoundingMode:a},w=g.runKernel(Yr,f,m);return h?y(w,[w.shape[1],w.shape[2],w.shape[3]]):w}const Ro=b({depthwiseConv2d_:ol});/**
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
 */function al(e,t,n,r,s=[1,1],o="NHWC"){const a=d(e,"x","dilation2d"),i=d(t,"filter","dilation2d");p(a.rank===3||a.rank===4,()=>`Error in dilation2d: input must be rank 3 or 4, but got rank ${a.rank}.`),p(i.rank===3,()=>`Error in dilation2d: filter must be rank 3, but got rank ${i.rank}.`),p(o==="NHWC",()=>`Error in dilation2d: Only NHWC is currently supported, but got dataFormat of ${o}`);let c=a,u=!1;a.rank===3&&(c=y(a,[1,a.shape[0],a.shape[1],a.shape[2]]),u=!0),p(c.shape[3]===i.shape[2],()=>`Error in dilation2d:  input and filter must have the same depth: ${c.shape[3]} vs ${i.shape[2]}`);const h={x:c,filter:i},l={strides:n,pad:r,dilations:s},f=g.runKernel(Zr,h,l);return u?y(f,[f.shape[1],f.shape[2],f.shape[3]]):f}const il=b({dilation2d_:al});/**
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
 */function cl(e,t){const n=e.length,r=[];for(let s=0;s<n;s++){const o=n-1-s,a=e[o]||1;(t[t.length-1-s]||1)>1&&a===1&&r.unshift(o)}return r}function J(e,t){const n=[];for(let r=0;r<t.length;r++){const s=e[e.length-r-1],o=t.length-r-1,a=t[o];(s==null||s===1&&a>1)&&n.unshift(o)}return n}function z(e,t){const n=[],r=Math.max(e.length,t.length);for(let s=0;s<r;s++){let o=e[e.length-s-1];o==null&&(o=1);let a=t[t.length-s-1];if(a==null&&(a=1),o===1)n.unshift(a);else if(a===1)n.unshift(o);else if(o!==a){const i=`Operands could not be broadcast together with shapes ${e} and ${t}.`;throw Error(i)}else n.unshift(o)}return n}/**
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
 */function ul(e,t){let n=d(e,"a","equal","string_or_numeric"),r=d(t,"b","equal","string_or_numeric");[n,r]=H(n,r),z(n.shape,r.shape);const s={a:n,b:r};return g.runKernel(di,s)}const Mn=b({equal_:ul});/**
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
 */function ll(e,t,n){const r=d(t,"a","where"),s=d(n,"b","where"),o=d(e,"condition","where","bool"),a=z(z(o.shape,r.shape),s.shape),i=Se(o,a),c=Se(r,a),u=Se(s,a),h={condition:i,t:c,e:u};return g.runKernel(qs,h)}const ft=b({where_:ll});/**
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
 */function hl(e){const n={x:d(e,"x","zerosLike")};return g.runKernel(uo,n)}const M=b({zerosLike_:hl});/**
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
 */function fl(e,t){let n=d(e,"a","div"),r=d(t,"b","div");[n,r]=H(n,r);const s=C(n,r),o=M(s),a=Mn(r,o);return ft(a,o,s)}const pl=b({divNoNan_:fl});/**
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
 */function dl(e,t){const n=d(e,"t1","dot"),r=d(t,"t2","dot");p((n.rank===1||n.rank===2)&&(r.rank===1||r.rank===2),()=>`Error in dot: inputs must all be rank 1 or 2, but got ranks ${n.rank} and ${r.rank}.`);const s=n.rank===1?n.size:n.shape[1],o=r.rank===1?r.size:r.shape[0];if(p(s===o,()=>`Error in dot: inner dimensions of inputs must match, but got ${s} and ${o}.`),n.rank===1&&r.rank===1){const a=y(n,[1,-1]),i=y(r,[-1,1]),c=R(a,i);return y(c,[])}else if(n.rank===1&&r.rank===2){const a=y(n,[1,-1]),i=y(r,[r.shape[0],r.shape[1]]),c=R(a,i);return y(c,[c.size])}else if(n.rank===2&&r.rank===1){const a=y(r,[-1,1]),i=R(n,a);return y(i,[i.size])}else{const a=y(r,[r.shape[0],r.shape[1]]);return R(n,a)}}const gl=b({dot_:dl});/**
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
 */function ml(e){const n={x:d(e,"x","elu","float32")};return g.runKernel(ts,n)}const Go=b({elu_:ml});/**
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
 */function bl(e){let t=d(e,"x","erf");p(t.dtype==="int32"||t.dtype==="float32",()=>"Input dtype must be `int32` or `float32`."),t.dtype==="int32"&&(t=D(t,"float32"));const n={x:t};return g.runKernel(es,n)}const yl=b({erf_:bl});/**
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
 */function Bn(e,t){for(let n=0;n<e.length;++n)if(e[e.length-n-1]!==t-1-n)return!1;return!0}function Po(e,t,n){const r=e.length+t.length,s=[];let o=0,a=0;for(let i=0;i<r;i++)n.indexOf(i)===-1?s.push(e[o++]):s.push(t[a++]);return s}function Oo(e,t){const n=[],r=e.length;for(let o=0;o<r;o++)t.indexOf(o)===-1&&n.push(e[o]);const s=t.map(o=>e[o]);return[n,s]}function Qt(e,t){const n=t.map(r=>1);return Po(e,n,t)}function kl(e,t,n){p(Bn(t,n),()=>`${e} supports only inner-most axes for now. Got axes ${t} and rank-${n} input.`)}function Rn(e,t){if(Bn(e,t))return null;const n=[];for(let r=0;r<t;++r)e.indexOf(r)===-1&&n.push(r);return e.forEach(r=>n.push(r)),n}function Oe(e){return e.map((t,n)=>[n,t]).sort((t,n)=>t[1]-n[1]).map(t=>t[0])}function wl(e,t){const n=[];for(let r=t-e;r<t;++r)n.push(r);return n}/**
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
 */function xl(e,t=null,n=!1){const s={x:d(e,"x","max")},o={reductionIndices:t,keepDims:n};return g.runKernel(bs,s,o)}const Xt=b({max_:xl});/**
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
 */function $l(e,t=null,n=!1){const s={x:d(e,"x","min")},o={axis:t,keepDims:n};return g.runKernel($s,s,o)}const fn=b({min_:$l});/**
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
 */function Il(e,t){let n=d(e,"base","pow"),r=d(t,"exp","pow");[n,r]=H(n,r);const s={a:n,b:r};return g.runKernel(Cs,s)}const te=b({pow_:Il});/**
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
 */function L(e,t){if((gt(e)&&t!=="string"||Array.isArray(e))&&t!=="complex64")throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if(t==="string"&&gt(e)&&!(e instanceof Uint8Array))throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return Be(e,[],[],t)}/**
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
 */function Sl(e){const n={x:d(e,"x","sqrt","float32")};return g.runKernel(Zs,n)}const lt=b({sqrt_:Sl});/**
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
 */function El(e){const t=d(e,"x","square"),n={};return g.runKernel("Square",{x:t},n)}const q=b({square_:El});/**
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
 */function vl(e,t=null,n=!1){let r=d(e,"x","sum");r.dtype==="bool"&&(r=D(r,"int32"));const s={x:r},o={axis:t,keepDims:n};return g.runKernel(Qs,s,o)}const _=b({sum_:vl});/**
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
 */function Dl(e,t="euclidean",n=null,r=!1){e=d(e,"x","norm");const s=Lo(e,t,n);let o=s.shape;if(r){const a=mt(n,e.shape);o=Qt(s.shape,a)}return y(s,o)}function Lo(e,t,n=null){if(e.rank===0)return bt(e);if(e.rank!==1&&n===null)return Lo(y(e,[-1]),t,n);if(e.rank===1||typeof n=="number"||Array.isArray(n)&&n.length===1){if(t===1)return _(bt(e),n);if(t===1/0)return Xt(bt(e),n);if(t===-1/0)return fn(bt(e),n);if(t==="euclidean"||t===2)return lt(_(te(bt(e),L(2,"int32")),n));throw new Error(`Error in norm: invalid ord value: ${t}`)}if(Array.isArray(n)&&n.length===2){if(t===1)return Xt(_(bt(e),n[0]),n[1]-1);if(t===1/0)return Xt(_(bt(e),n[1]),n[0]);if(t===-1/0)return fn(_(bt(e),n[1]),n[0]);if(t==="fro"||t==="euclidean")return lt(_(q(e),n));throw new Error(`Error in norm: invalid ord value: ${t}`)}throw new Error(`Error in norm: invalid axis: ${n}`)}const Le=b({norm_:Dl});/**
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
 */function Tl(e,t=null,n=!1){return Le(e,"euclidean",t,n)}const Nl=b({euclideanNorm_:Tl});/**
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
 */function Al(e){const n={x:d(e,"x","exp")};return g.runKernel(ns,n)}const _t=b({exp_:Al});/**
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
 */function _l(e,t=0){const n=d(e,"x","expandDims","string_or_numeric");p(t<=n.rank,()=>"Axis must be <= rank of the tensor");const r={input:n},s={dim:t};return g.runKernel(rs,r,s)}const Dt=b({expandDims_:_l});/**
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
 */function Cl(e){const n={x:d(e,"x","expm1")};return g.runKernel(ss,n)}const Fl=b({expm1_:Cl});/**
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
 */function Ml(e,t){const n=d(e,"x","tile","string_or_numeric");p(n.rank===t.length,()=>`Error in transpose: rank of input ${n.rank} must match length of reps ${t}.`);const r={x:n},s={reps:t};return g.runKernel(Sn,r,s)}const Jt=b({tile_:Ml});/**
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
 */function Bl(e,t,n,r="float32"){t==null&&(t=e);const s=Pt([e,t],r),o=e<=t?e:t;for(let i=0;i<o;++i)s.set(1,i,i);const a=y(s.toTensor(),[e,t]);if(n==null)return a;if(n.length===1)return Jt(Dt(a,0),[n[0],1,1]);if(n.length===2)return Jt(Dt(Dt(a,0),0),[n[0],n[1],1,1]);if(n.length===3)return Jt(Dt(Dt(Dt(a,0),0),0),[n[0],n[1],n[2],1,1]);throw new Error(`eye() currently supports only 1D and 2D batchShapes, but received ${n.length}D.`)}const Rl=b({eye_:Bl});/**
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
 */function Gl(e){const n={x:d(e,"x","floor","float32")};return g.runKernel(os,n)}const Gn=b({floor_:Gl});/**
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
 */function Pl(e,t,n=0,r=0){const s=d(e,"x","gather"),o=d(t,"indices","gather","int32"),a={x:s,indices:o},i={axis:n,batchDims:r};return g.runKernel(cs,a,i)}const Ko=b({gather_:Pl});/**
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
 */function Ol(e,t){let n=d(e,"a","greater","string_or_numeric"),r=d(t,"b","greater","string_or_numeric");[n,r]=H(n,r),z(n.shape,r.shape);const s={a:n,b:r};return g.runKernel(yi,s)}const vt=b({greater_:Ol});/**
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
 */function Ll(e,t){let n=d(e,"a","greaterEqual","string_or_numeric"),r=d(t,"b","greaterEqual","string_or_numeric");[n,r]=H(n,r),z(n.shape,r.shape);const s={a:n,b:r};return g.runKernel(us,s)}const ye=b({greaterEqual_:Ll});/**
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
 */function Kl(e){const n={input:d(e,"input","imag")};return g.runKernel(wi,n)}const Pn=b({imag_:Kl});/**
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
 */function Wl(e){const n={x:d(e,"x","isFinite")};return g.runKernel(ls,n)}const zl=b({isFinite_:Wl});/**
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
 */function ql(e){const n={x:d(e,"x","isInf")};return g.runKernel(hs,n)}const Vl=b({isInf_:ql});/**
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
 */function Ul(e){const n={x:d(e,"x","isNaN")};return g.runKernel(fs,n)}const Hl=b({isNaN_:Ul});/**
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
 */function jl(e,t=.2){const r={x:d(e,"x","leakyRelu")},s={alpha:t};return g.runKernel(ps,r,s)}const Wo=b({leakyRelu_:jl});/**
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
 */function Xl(e,t){let n=d(e,"a","less","string_or_numeric"),r=d(t,"b","less","string_or_numeric");[n,r]=H(n,r),z(n.shape,r.shape);const s={a:n,b:r};return g.runKernel(xi,s)}const zo=b({less_:Xl});/**
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
 */function Jl(e,t){let n=d(e,"a","lessEqual","string_or_numeric"),r=d(t,"b","lessEqual","string_or_numeric");[n,r]=H(n,r),z(n.shape,r.shape);const s={a:n,b:r};return g.runKernel($i,s)}const ae=b({lessEqual_:Jl});/**
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
 */function Yl(e,t=5,n=1,r=1,s=.5){const o=d(e,"x","localResponseNormalization");p(o.rank===4||o.rank===3,()=>`Error in localResponseNormalization: x must be rank 3 or 4 but got
               rank ${o.rank}.`),p(fe(t),()=>`Error in localResponseNormalization: depthRadius must be an integer but got depthRadius ${t}.`);let a=o,i=!1;o.rank===3&&(i=!0,a=y(o,[1,o.shape[0],o.shape[1],o.shape[2]]));const c={x:a},u={depthRadius:t,bias:n,alpha:r,beta:s},h=g.runKernel(ms,c,u);return i?y(h,[h.shape[1],h.shape[2],h.shape[3]]):h}const Zl=b({localResponseNormalization_:Yl});/**
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
 */function Ql(e){const n={x:d(e,"x","log","float32")};return g.runKernel(ds,n)}const Ke=b({log_:Ql});/**
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
 */function th(e){const n={x:d(e,"x","log1p")};return g.runKernel(gs,n)}const eh=b({log1p_:th});/**
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
 */function nh(e,t){p(Ye(e),()=>"The f passed in variableGrads(f) must be a function"),p(t==null||Array.isArray(t)&&t.every(u=>u instanceof Te),()=>"The varList passed in variableGrads(f, varList) must be an array of variables");const n=t!=null;if(!n){t=[];for(const u in g.registeredVariables)t.push(g.registeredVariables[u])}const r=n?t.filter(u=>!u.trainable):null,s=t.length;t=t.filter(u=>u.trainable),p(t.length>0,()=>`variableGrads() expects at least one of the input variables to be trainable, but none of the ${s} variables is trainable.`);const o=!0,{value:a,grads:i}=g.gradients(e,t,null,o);p(i.some(u=>u!=null),()=>"Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize()."),p(a.rank===0,()=>`The f passed in variableGrads(f) must return a scalar, but it returned a rank-${a.rank} tensor`);const c={};return t.forEach((u,h)=>{i[h]!=null&&(c[u.name]=i[h])}),r!=null&&r.forEach(u=>c[u.name]=null),{value:a,grads:c}}function ee(e){return g.customGrad(e)}/**
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
 */function rh(e){const n={x:d(e,"x","neg")};return g.runKernel(Ds,n)}const tt=b({neg_:rh});/**
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
 */function sh(e){const n={x:d(e,"x","softplus")};return g.runKernel(Ys,n)}const qo=b({softplus_:sh});/**
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
 */function oh(e){const t=d(e,"x","logSigmoid");return ee(r=>({value:tt(qo(tt(r))),gradFunc:a=>x(a,Ge(tt(r)))}))(t)}const ah=b({logSigmoid_:oh});/**
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
 */function ih(e,t){let n=d(e,"a","sub"),r=d(t,"b","sub");[n,r]=H(n,r);const s={a:n,b:r};return g.runKernel(so,s)}const B=b({sub_:ih});/**
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
 */function ch(e,t=-1){const n=d(e,"logits","logSoftmax");if(t===-1&&(t=n.rank-1),t!==n.rank-1)throw Error(`Log Softmax along a non-last dimension is not yet supported. Logits was rank ${n.rank} and axis was ${t}`);return ee((s,o)=>{const i=Xt(s,t,!0),c=B(s,i),u=B(D(c,"float32"),Ke(_(_t(c),t,!0)));return o([u]),{value:u,gradFunc:(l,f)=>{const[m]=f,w=!0,I=_t(m);return B(l,x(_(l,t,w),I))}}})(n)}const uh=b({logSoftmax_:ch});/**
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
 */function lh(e,t=null,n=!1){const r=d(e,"x","logSumExp"),s=mt(t,r.shape),o=Xt(r,s,!0),a=B(r,o),i=_t(a),c=_(i,s),u=Ke(c),h=N(y(o,u.shape),u);if(n){const l=Qt(h.shape,s);return y(h,l)}return h}const hh=b({logSumExp_:lh});/**
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
 */function fh(e,t){const n=d(e,"a","logicalAnd","bool"),r=d(t,"b","logicalAnd","bool");z(n.shape,r.shape);const s={a:n,b:r};return g.runKernel(Ii,s)}const ne=b({logicalAnd_:fh});/**
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
 */function ph(e){const n={x:d(e,"x","logicalNot","bool")};return g.runKernel(Si,n)}const On=b({logicalNot_:ph});/**
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
 */function dh(e,t){const n=d(e,"a","logicalOr","bool"),r=d(t,"b","logicalOr","bool");z(n.shape,r.shape);const s={a:n,b:r};return g.runKernel(Ei,s)}const Vo=b({logicalOr_:dh});/**
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
 */function gh(e,t){const n=d(e,"a","logicalXor","bool"),r=d(t,"b","logicalXor","bool");return z(n.shape,r.shape),ne(Vo(e,t),On(ne(e,t)))}const mh=b({logicalXor_:gh});/**
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
 */function bh(e,t,n,r,s){const o=d(e,"x","maxPool"),a=1;let i=o,c=!1;o.rank===3&&(c=!0,i=y(o,[1,o.shape[0],o.shape[1],o.shape[2]])),p(i.rank===4,()=>`Error in maxPool: input must be rank 4 but got rank ${i.rank}.`),p(Et(n,a),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${n} and dilations '${a}'`),st("maxPool",r,s);const u={x:i},h={filterSize:t,strides:n,pad:r,dimRoundingMode:s},l=g.runKernel(ks,u,h);return c?y(l,[l.shape[1],l.shape[2],l.shape[3]]):l}const Uo=b({maxPool_:bh});/**
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
 */function yh(e,t=[1,1,1],n,r,s,o="NDHWC"){const a=d(e,"x","maxPool3d");let i=a,c=!1;a.rank===4&&(c=!0,i=y(a,[1,a.shape[0],a.shape[1],a.shape[2],a.shape[3]])),p(i.rank===5,()=>`Error in maxPool3d: x must be rank 5 but got rank ${i.rank}.`),p(o==="NDHWC",()=>`Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of ${o}`),st("maxPool3d",r,s);const u={x:i},h={filterSize:t,strides:n,pad:r,dimRoundingMode:s,dataFormat:o},l=g.runKernel(ws,u,h);return c?y(l,[l.shape[1],l.shape[2],l.shape[3],l.shape[4]]):l}const hy=b({maxPool3d_:yh});/**
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
 */function kh(e,t){let n=d(e,"a","maximum"),r=d(t,"b","maximum");[n,r]=H(n,r),n.dtype==="bool"&&(n=D(n,"int32"),r=D(r,"int32")),z(n.shape,r.shape);const s={a:n,b:r};return g.runKernel(ys,s)}const Ln=b({maximum_:kh});/**
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
 */function wh(e,t=null,n=!1){const s={x:d(e,"x","mean")},o={axis:t,keepDims:n};return g.runKernel(xs,s,o)}const pn=b({mean_:wh});/**
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
 */function re(e,t="float32"){if(St(e),t==="complex64"){const r=re(e,"float32"),s=re(e,"float32");return Zt(r,s)}const n=yn(Z(e),t);return g.makeTensor(n,e,t)}/**
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
 */function We(e,t="float32"){if(St(e),t==="complex64"){const r=We(e,"float32"),s=re(e,"float32");return Zt(r,s)}const n=Sr(Z(e),t);return g.makeTensor(n,e,t)}/**
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
 */function xh(e,t){let n=d(e,"a","minimum"),r=d(t,"b","minimum");[n,r]=H(n,r),n.dtype==="bool"&&(n=D(n,"int32"),r=D(r,"int32")),z(n.shape,r.shape);const s={a:n,b:r};return g.runKernel(Is,s)}const $h=b({minimum_:xh});/**
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
 */function Ih(e,t,n){p(n==="reflect"||n==="symmetric",()=>`Invalid mode. Mode must be either reflect or symmetric. Got ${n}.`);const r=d(e,"x","mirrorPad");if(r.rank===0)throw new Error("mirrorPad(scalar) is not defined. Pass non-scalar to mirrorPad");p(t.length===r.rank,()=>`Padding doesn't match input. Must be ${r.rank}. Got ${t.length}.`);const s=n==="reflect"?1:0;for(let i=0;i<r.rank;i++)p(t[i].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),p(t[i][0]>=0&&t[i][0]<=r.shape[i]-s&&t[i][1]>=0&&t[i][1]<=r.shape[i]-s,()=>`Padding in dimension ${i} cannot be greater than or equal to ${r.shape[i]-s} or less than 0 for input of shape ${r.shape}`);const o={paddings:t,mode:n},a={x:r};return g.runKernel(Ss,a,o)}const Sh=b({mirrorPad_:Ih});/**
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
 */function Eh(e,t){let n=d(e,"a","mod"),r=d(t,"b","mod");[n,r]=H(n,r);const s={a:n,b:r};return g.runKernel(Es,s)}const vh=b({mod_:Eh});/**
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
 */function Dh(e,t=null,n=!1){e=d(e,"x","moments");const r=mt(t,e.shape),s=pn(e,r,n);let o=s.shape;n||(o=Qt(s.shape,r));const a=q(B(D(e,"float32"),y(s,o))),i=pn(a,r,n);return{mean:s,variance:i}}const fy=b({moments_:Dh});/**
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
 */function Th(e,t){let n=d(e,"a","notEqual","string_or_numeric"),r=d(t,"b","notEqual","string_or_numeric");[n,r]=H(n,r),z(n.shape,r.shape);const s={a:n,b:r};return g.runKernel(Ai,s)}const Nh=b({notEqual_:Th});/**
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
 */function Ah(e,t,n=1,r=0,s="int32"){if(t<2)throw new Error(`Error in oneHot: depth must be >=2, but it is ${t}`);const a={indices:d(e,"indices","oneHot","int32")},i={dtype:s,depth:t,onValue:n,offValue:r};return g.runKernel(Ns,a,i)}const _h=b({oneHot_:Ah});/**
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
 */function Ch(e){const n={x:d(e,"x","onesLike")};return g.runKernel(Ts,n)}const Fh=b({onesLike_:Ch});/**
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
 */function Mh(e,t,n=0){const r=d(e,"x","pad");if(r.rank===0)throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");const s={paddings:t,constantValue:n},o={x:r};return g.runKernel(_s,o,s)}const Ho=b({pad_:Mh});/**
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
 */function Bh(e,t,n){const r=d(e,"x","spaceToBatchND");p(r.rank>=1+t.length,()=>`input rank ${r.rank} should be > than [blockShape] ${t.length}`),p(n.length===t.length,()=>`paddings.shape[0] ${n.length} must be equal to [blockShape] ${t.length}`),p(r.shape.reduce((a,i,c)=>c>0&&c<=t.length?a&&(i+n[c-1][0]+n[c-1][1])%t[c-1]===0:a,!0),()=>`input spatial dimensions ${r.shape.slice(1)} with paddings ${n.toString()} must be divisible by blockShapes ${t.toString()}`);const s={x:r},o={blockShape:t,paddings:n};return g.runKernel(to,s,o)}const Kn=b({spaceToBatchND_:Bh});/**
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
 */function Rh(e,t,n,r,s,o,a){s==null&&(s=[1,1]),o==null&&(o=1),r===0&&(r="valid");const i=d(e,"x","maxPool");let c=i,u=!1;i.rank===3&&(u=!0,c=y(i,[1,i.shape[0],i.shape[1],i.shape[2]])),p(Et(o,s),()=>`Error in pool: Either strides or dilations must be 1. Got strides ${o} and dilations '${s}'`);const h=No(c.shape,t,o,s,r),l=[h.dilationHeight,h.dilationWidth];let f;r==="same"?f=Ph([h.filterHeight,h.filterWidth],l):f=[[0,0],[0,0]];const m=l[0]===1&&l[1]===1,[w,I]=Gh([h.inHeight,h.inWidth],l,f),$=m?r:"valid",E=m?c:Kn(c,l,w),S=(n==="avg"?()=>Co(E,t,o,$,a):()=>Uo(E,t,o,$,a))(),v=m?S:An(S,l,I);return u?y(v,[v.shape[1],v.shape[2],v.shape[3]]):v}function Gh(e,t,n){const r=n.map(h=>h[0]),s=n.map(h=>h[1]),o=e.concat(r,s),a=t.map((h,l)=>(h-o[l]%h)%h),i=s.map((h,l)=>h+a[l]),c=t.map((h,l)=>[r[l],i[l]]),u=t.map((h,l)=>[0,a[l]]);return[c,u]}function Ph(e,t){const r=e.map((a,i)=>a+(a-1)*(t[i]-1)).map(a=>a-1),s=r.map(a=>Math.floor(a/2)),o=r.map((a,i)=>a-s[i]);return r.map((a,i)=>[s[i],o[i]])}const Oh=b({pool_:Rh});/**
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
 */function Lh(e,t){const n=d(e,"x","prelu"),r=d(t,"alpha","prelu"),s={x:n,alpha:r};return g.runKernel(Fs,s)}const jo=b({prelu_:Lh});/**
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
 */function Kh(e,t=null,n=!1){let r=d(e,"x","prod");r.dtype==="bool"&&(r=D(r,"int32"));const s={x:r},o={axis:t,keepDims:n};return g.runKernel(Ms,s,o)}const Wh=b({prod_:Kh});/**
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
 */class Xo{constructor(t,n,r,s,o){this.mean=t,this.stdDev=n,this.dtype=r,this.nextVal=NaN,this.truncated=s,this.truncated&&(this.upper=this.mean+this.stdDev*2,this.lower=this.mean-this.stdDev*2);const a=o||Math.random();this.random=xr.alea(a.toString())}nextValue(){if(!isNaN(this.nextVal)){const s=this.nextVal;return this.nextVal=NaN,s}let t,n,r=!1;for(;!r;){let s,o,a;do s=2*this.random()-1,o=2*this.random()-1,a=s*s+o*o;while(a>=1||a===0);const i=Math.sqrt(-2*Math.log(a)/a);t=this.mean+this.stdDev*s*i,n=this.mean+this.stdDev*o*i,(!this.truncated||this.isValidTruncated(t))&&(r=!0)}return(!this.truncated||this.isValidTruncated(n))&&(this.nextVal=this.convertValue(n)),this.convertValue(t)}convertValue(t){return this.dtype==null||this.dtype==="float32"?t:Math.round(t)}isValidTruncated(t){return t<=this.upper&&t>=this.lower}}class zh{constructor(t=0,n=1,r,s){if(this.canReturnFloat=()=>this.dtype==null||this.dtype==="float32",this.min=t,this.range=n-t,this.dtype=r,s==null&&(s=Math.random()),typeof s=="number"&&(s=s.toString()),!this.canReturnFloat()&&this.range<=1)throw new Error(`The difference between ${t} - ${n} <= 1 and dtype is not float`);this.random=xr.alea(s)}convertValue(t){return this.canReturnFloat()?t:Math.round(t)}nextValue(){return this.convertValue(this.min+this.range*this.random())}}/**
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
 */function qh(e,t=0,n=1,r,s){if(St(e),r!=null&&r==="bool")throw new Error(`Unsupported data type ${r}`);const o=new Xo(t,n,r,!1,s),a=Pt(e,r);for(let i=0;i<a.values.length;i++)a.values[i]=o.nextValue();return a.toTensor()}const py=b({randomNormal_:qh});/**
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
 */function Vh(e,t=0,n=1,r="float32",s){St(e);const o=Pt(e,r),a=new zh(t,n,null,s);for(let i=0;i<o.values.length;i++)o.values[i]=a.nextValue();return o.toTensor()}const Uh=b({randomUniform_:Vh});/**
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
 */function Ne(e,t,n=1,r="float32"){if(n===0)throw new Error("Cannot have a step of zero");const s={start:e,stop:t,step:n,dtype:r};return g.runKernel(Mi,{},s)}/**
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
 */function Hh(e){const n={input:d(e,"input","real")};return g.runKernel(Bi,n)}const Ae=b({real_:Hh});/**
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
 */function jh(e){const n={x:d(e,"x","reciprocal")};return g.runKernel(Bs,n)}const Xh=b({reciprocal_:jh});/**
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
 */function Jh(e){const n={x:d(e,"x","relu")};return g.runKernel(Rs,n)}const Jo=b({relu_:Jh});/**
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
 */function Yh(e){const n={x:d(e,"x","relu6")};return g.runKernel(Ls,n)}const Yo=b({relu6_:Yh});/**
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
 */function Zh(e,t){const r={x:d(e,"x","reverse")},s={dims:t};return g.runKernel(Ks,r,s)}const _e=b({reverse_:Zh});/**
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
 */function Qh(e){const n={x:d(e,"x","round")};return g.runKernel(Ws,n)}const Zo=b({round_:Qh});/**
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
 */function tf(e){const n={x:d(e,"x","rsqrt","float32")};return g.runKernel(zs,n)}const Qo=b({rsqrt_:tf});/**
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
 */function ef(e){const n={x:d(e,"x","selu")};return g.runKernel(Vs,n)}const nf=b({selu_:ef});function rf(e,t,n,r,s,o=[1,1],a="NHWC"){const i=d(e,"x","separableConv2d"),c=d(t,"depthwiseFilter","separableConv2d"),u=d(n,"pointwiseFilter","separableConv2d");let h=i,l=!1;if(i.rank===3&&(l=!0,h=y(i,[1,i.shape[0],i.shape[1],i.shape[2]])),a==="NCHW")throw new Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");p(h.rank===4,()=>`Error in separableConv2d: input must be rank 4, but got rank ${h.rank}.`),p(c.rank===4,()=>`Error in separableConv2d: depthwise filter must be rank 4, but got rank ${c.rank}.`),p(u.rank===4,()=>`Error in separableConv2d: pointwise filter must be rank 4, but got rank ${c.rank}.`),p(u.shape[0]===1,()=>`Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got ${u.shape[0]}.`),p(u.shape[1]===1,()=>`Error in separableConv2d: the second dimension of pointwise filter must be 1, but got ${u.shape[1]}.`);const f=c.shape[2],m=c.shape[3];p(u.shape[2]===f*m,()=>`Error in separableConv2d: the third dimension of pointwise filter must be ${f*m}, but got ${u.shape[2]}.`);const w=Ro(h,c,r,s,a,o),$=be(w,u,1,"valid",a);return l?y($,[$.shape[1],$.shape[2],$.shape[3]]):$}const sf=b({separableConv2d_:rf});/**
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
 */function of(e){const n={x:d(e,"x","sign")};return g.runKernel(Xs,n)}const af=b({sign_:of});/**
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
 */function cf(e){const n={x:d(e,"x","sin","float32")};return g.runKernel(Hs,n)}const ta=b({sin_:cf});/**
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
 */function uf(e){const n={x:d(e,"x","sinh")};return g.runKernel(js,n)}const ea=b({sinh_:uf});/**
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
 */function lf(e,t,n){const r=d(e,"x","slice1d");return p(r.rank===1,()=>`slice1d expects a rank-1 tensor, but got a rank-${r.rank} tensor`),V(r,[t],[n])}const dy=b({slice1d_:lf});/**
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
 */function hf(e,t,n){const r=d(e,"x","slice2d");return p(r.rank===2,()=>`slice2d expects a rank-2 tensor, but got a rank-${r.rank} tensor`),V(r,t,n)}const gy=b({slice2d_:hf});/**
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
 */function ff(e,t,n){const r=d(e,"x","slice3d");return p(r.rank===3,()=>`slice3d expects a rank-3 tensor, but got a rank-${r.rank} tensor`),V(r,t,n)}const my=b({slice3d_:ff});/**
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
 */function pf(e,t,n){const r=d(e,"x","slice4d");return p(r.rank===4,()=>`slice4d expects a rank-4 tensor, but got a rank-${r.rank} tensor`),V(r,t,n)}const by=b({slice4d_:pf});/**
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
 */function df(e,t=-1){const n=d(e,"logits","softmax","float32");if(t===-1&&(t=n.rank-1),t!==n.rank-1)throw Error(`Softmax along a non-last dimension is not yet supported. Logits was rank ${n.rank} and dim was ${t}`);const r={logits:n},s={dim:t};return g.runKernel(no,r,s)}const gf=b({softmax_:df});/**
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
 */function mf(e){p(e.dtype==="complex64",()=>`The dtype for tf.spectral.fft() must be complex64 but got ${e.dtype}.`);const t={input:e};return g.runKernel(gi,t)}const na=b({fft_:mf});/**
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
 */function bf(e){p(e.dtype==="complex64",()=>`The dtype for tf.spectral.ifft() must be complex64 but got ${e.dtype}.`);const t={input:e};return g.runKernel(ki,t)}const dn=b({ifft_:bf});/**
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
 */function yf(e){const t=e.shape[e.shape.length-1],n=e.size/t;let r;if(t<=2){const s=y(e,[n,t]);r=dn(s)}else{const s=[n,2*(t-1)],o=y(Ae(e),[n,t]),a=y(Pn(e),[n,t]),i=_e(V(o,[0,1],[n,t-2]),1),c=x(_e(V(a,[0,1],[n,t-2]),1),L(-1)),u=pt([o,i],1),h=pt([a,c],1),l=y(Zt(u,h),[s[0],s[1]]);r=dn(l)}if(r=Ae(r),e.rank===3&&e.shape[0]!==0){const s=r,o=e.shape[0];r=y(r,[o,r.shape[0]/o,r.shape[1]]),s.dispose()}return r}const kf=b({irfft_:yf});/**
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
 */function wf(e,t,n=0){const s={x:d(e,"x","split")},o={numOrSizeSplits:t,axis:n};return g.runKernel(eo,s,o)}const se=b({split_:wf});/**
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
 */function xf(e,t){p(e.dtype==="float32",()=>`The dtype for rfft() must be real value but got ${e.dtype}`);let n=e.shape[e.shape.length-1];const r=e.size/n;let s;if(t!=null&&t<n){const w=e.shape.map($=>0),I=e.shape.map($=>$);I[e.shape.length-1]=t,s=V(e,w,I),n=t}else if(t!=null&&t>n){const w=e.shape.map(I=>I);w[e.shape.length-1]=t-n,s=pt([e,re(w)],e.shape.length-1),n=t}else s=e;const o=M(s),a=y(Zt(s,o),[r,n]),i=na(a),c=Math.floor(n/2)+1,u=Ae(i),h=Pn(i),l=se(u,[c,n-c],u.shape.length-1),f=se(h,[c,n-c],h.shape.length-1),m=s.shape.slice();return m[s.shape.length-1]=c,y(Zt(l[0],f[0]),m)}const $f=b({rfft_:xf});/**
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
 */function If(e,t){let n=d(e,"a","squaredDifference"),r=d(t,"b","squaredDifference");[n,r]=H(n,r),z(n.shape,r.shape);const s={a:n,b:r},o={};return g.runKernel(ro,s,o)}const Sf=b({squaredDifference_:If});/**
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
 */function Ef(e,t){const n=d(e,"x","squeeze","string_or_numeric");return y(n,Ba(n.shape,t).newShape)}const ra=b({squeeze_:Ef});/**
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
 */function vf(e,t=0){const n=wo(e,"tensors","stack","string_or_numeric");p(n.length>=1,()=>"Pass at least one tensor to tf.stack"),n.length>0&&p(t<=n[0].rank,()=>"Axis must be <= rank of the tensor");const r=n,s={axis:t};return g.runKernel(As,r,s)}const oe=b({stack_:vf});/**
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
 */function Df(e,t=0){const r={x:d(e,"x","step")},s={alpha:t};return g.runKernel(lo,r,s)}const ke=b({step_:Df});/**
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
 */function Tf(e,t,n,r,s=0,o=0,a=0,i=0,c=0){const h={x:d(e,"x","stridedSlice","string_or_numeric")},l={begin:t,end:n,strides:r,beginMask:s,endMask:o,ellipsisMask:a,newAxisMask:i,shrinkAxisMask:c};return g.runKernel(Oi,h,l)}const Nf=b({stridedSlice_:Tf});/**
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
 */function Af(e){const n={x:d(e,"x","tan","float32")};return g.runKernel(oo,n)}const _f=b({tan_:Af});/**
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
 */function $t(e,t){$r(e);const n=Me(e,t);if(n.length!==1)throw new Error("tensor1d() requires values to be a flat/TypedArray");return Be(e,null,n,t)}/**
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
 */function je(e,t,n){if($r(e),t!=null&&t.length!==2)throw new Error("tensor2d() requires shape to have two numbers");const r=Me(e,n);if(r.length!==2&&r.length!==1)throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(r.length===1&&t==null)throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return Be(e,t,r,n)}/**
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
 */function Cf(e,t=1,n=!0){const r=d(e,"x","topk");if(r.rank===0)throw new Error("topk() expects the input to be of rank 1 or higher");const s=r.shape[r.shape.length-1];if(t<0)throw new Error(`'k' passed to topk() must be >= 0 but got ${t}`);if(t>s)throw new Error(`'k' passed to topk() must be <= the last dimension (${s}) but got ${t}`);const o={x:r},a={k:t,sorted:n},[i,c]=g.runKernel(Li,o,a);return{values:i,indices:c}}const Ff=b({topk_:Cf});/**
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
 */function Mf(e,t=0,n=1,r,s){if(St(e),r!=null&&r==="bool")throw new Error("Unsupported data type $ { dtype }");const o=new Xo(t,n,r,!0,s),a=Pt(e,r);for(let i=0;i<a.values.length;i++)a.values[i]=o.nextValue();return a.toTensor()}const yy=b({truncatedNormal_:Mf});/**
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
 */function Bf(e,t=0){const n=d(e,"x","unique","string_or_numeric");p(n.rank>0,()=>"The input tensor must be at least 1D");const r={x:n},s={axis:t},[o,a]=g.runKernel(Wi,r,s);return{values:o,indices:a}}const Rf=b({unique_:Bf});/**
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
 */function Gf(e,t,n){const r=d(e,"x","unsortedSegmentSum"),s=d(t,"segmentIds","unsortedSegmentSum","int32");p(fe(n),()=>"numSegments must be of dtype int");const o={x:r,segmentIds:s},a={numSegments:n};return g.runKernel(co,o,a)}const sa=b({unsortedSegmentSum_:Gf});/**
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
 */function Pf(e,t=0){const n=d(e,"x","unstack","string_or_numeric");p(t>=-n.shape.length&&t<n.shape.length,()=>`Axis = ${t} is not in [-${n.shape.length}, ${n.shape.length})`);const r={value:n},s={axis:t};return g.runKernel(io,r,s)}const ze=b({unstack_:Pf});/**
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
 */function ky(e,t=!0,n,r){return g.makeVariable(e,t,n,r)}/**
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
 */function wy(e,t){const n=[];for(let o=0;o<t.length;o++)t[o]&&n.push(o);const r=Pt(e,"int32"),s=Pt([n.length,e.length],"int32");for(let o=0;o<n.length;o++){const a=r.indexToLoc(n[o]),i=o*e.length;s.values.set(a,i)}return s.toTensor()}/**
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
 */function Of(e,t,n){const r=d(e,"x","transpose");if(t==null&&(t=r.shape.map((a,i)=>i).reverse()),p(r.rank===t.length,()=>`Error in transpose: rank of input ${r.rank} must match length of perm ${t}.`),t.forEach(a=>{p(a>=0&&a<r.rank,()=>`All entries in 'perm' must be between 0 and ${r.rank-1} but got ${t}`)}),r.rank<=1)return r.clone();const s={x:r},o={perm:t};return r.dtype==="complex64"?X(()=>{let a=Ae(r),i=Pn(r);return a=g.runKernel($e,{x:a},o),i=g.runKernel($e,{x:i},o),n&&(i=tt(i)),Zt(a,i)}):g.runKernel($e,s,o)}const It=b({transpose_:Of});function oa(e,t,n){const r=t.rank>1?t.shape[t.rank-1]:1,s=t.rank>1?t.rank-1:1,o=`Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: ${n.shape}, indices.shape: ${t.shape}, shape: ${e}, sliceDim: ${r}, and batchDim: ${s}.`;if(n.rank<s)throw new Error(o+` update.rank < ${s}. `);if(e.length<r+(n.rank-s))throw new Error(o+` Output shape length < ${r+(n.rank-s)}`);if(n.rank!==s+e.length-r)throw new Error(o+` update.rank != ${s+e.length-r}`);for(let a=0;a<s;++a)if(n.shape[a]!==t.shape[a])throw new Error(o+` updates.shape[${a}] (${n.shape[a]}) != indices.shape[${a}] (${t.shape[a]}).`);for(let a=0;a<n.rank-s;++a)if(n.shape[a+s]!==e[a+r])throw new Error(o+` updates.shape[${a+s}] (${n.shape[a+s]}) != shape[${a+s}] (${e[a+s]})`)}function Lf(e,t,n){if(t.rank<1)throw new Error(`tf.scatterND() expects the indices to be rank 1 or higher, but the rank was ${t.rank}.`);if(e.rank<1)throw new Error(`tf.scatterND() expects the updates to be rank 1 or higher, but the rank was ${e.rank}.`);if(t.dtype!=="int32")throw new Error(`The dtype of 'indices' should be int32, but got dtype: ${t.dtype}`);if(n.length<1)throw new Error(`Output rank must be greater or equal to 1, but got shape: ${n}`);if(n.length===0){if(t.size===0)throw new Error(`Indices specified for empty output. indices shape: ${t.shape}`);if(e.size===0)throw new Error(`Updates specified for empty output. updates shape: ${e.shape}`)}oa(n,t,e)}function Kf(e,t,n){const r=t.shape.length,s=r>1?t.shape[r-1]:1,o=n.length;let a=1;for(let l=s;l<o;++l)a*=n[l];const i=s<1?1:s,c=Z(t.shape)/i,u=[...me(n.slice(0,s)),1],h=Z(n);return{sliceRank:s,numUpdates:c,sliceSize:a,strides:u,outputSize:h}}/**
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
 */function Wf(e,t){if(t==null)return e.shape.slice();if(Ce(e.shape,t))return t;if(e.shape.length===t.length){const n=[];for(let r=0;r<e.shape.length;r++)t[r]==null&&e.shape[r]!=null?n.push(e.shape[r]):n.push(t[r]);return n}return t}/**
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
 */function zf(e,t,n,r){const s=d(e,"x","dropout");if(p(s.dtype==="float32",()=>`x has to be a floating point tensor since it's going to be scaled, but got a ${s.dtype} tensor instead.`),p(t>=0&&t<1,()=>`rate must be a float in the range [0, 1), but got ${t}.`),t===0)return e instanceof rt?s.clone():s;const o=Wf(s,n),a=1-t,i=C(Gn(N(Uh(o,0,1,"float32",r),a)),a);return x(s,i)}const xy=b({dropout_:zf});/**
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
 */function qf(e,t,n,r,s,o="NHWC",a){let i=e;e.rank===3&&(i=y(e,[1,e.shape[0],e.shape[1],e.shape[2]]));let c=t;c.rank===3&&(c=y(t,[1,t.shape[0],t.shape[1],t.shape[2]])),p(i.rank===4,()=>`Error in conv2dDerFilter: input must be rank 4, but got shape ${i.shape}.`),p(c.rank===4,()=>`Error in conv2dDerFilter: dy must be rank 4, but got shape ${c.shape}.`),p(n.length===4,()=>`Error in conv2dDerFilter: filterShape must be length 4, but got ${n}.`);const u=o==="NHWC"?i.shape[3]:i.shape[1],h=o==="NHWC"?c.shape[3]:c.shape[1];p(u===n[2],()=>`Error in conv2dDerFilter: depth of input ${u}) must match input depth in filter (${n[2]}.`),p(h===n[3],()=>`Error in conv2dDerFilter: depth of dy (${h}) must match output depth for filter (${n[3]}).`),st("conv2dDerFilter",s,a);const l={x:i,dy:c},f={strides:r,pad:s,dataFormat:o,dimRoundingMode:a,filterShape:n};return g.runKernel(ni,l,f)}const Wn=b({conv2DBackpropFilter_:qf});/**
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
 */function zn(e,t,n){if(n==null||n==="linear")return e;if(n==="relu")return x(e,ke(t));throw new Error(`Cannot compute gradient for fused activation ${n}.`)}function qn(e,t){let n=t;const r=J(e.shape,t.shape);return r.length>0&&(n=_(n,r)),y(n,e.shape)}function Vn(e,t,n,r){if(t==="linear")return e;if(t==="relu")return Jo(e);if(t==="elu")return Go(e);if(t==="relu6")return Yo(e);if(t==="prelu")return jo(e,n);if(t==="leakyrelu")return Wo(e,r);if(t==="sigmoid")return Ge(e);throw new Error(`Unknown fused activation ${t}.`)}const Un=(e,t)=>!(e>0)||t==="linear";/**
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
 */function Vf({x:e,filter:t,strides:n,pad:r,dataFormat:s="NHWC",dilations:o=[1,1],dimRoundingMode:a,bias:i,activation:c="linear",preluActivationWeights:u,leakyreluAlpha:h}){if(c=c||"linear",Un(g.state.gradientDepth,c)===!1){p(s==="NHWC",()=>`Error in fused conv2d: got dataFormat of ${s} but only NHWC is currently supported for the case of gradient depth is 0 and the activation is not linear.`);let A=be(e,t,n,r,s,o,a);return i!=null&&(A=N(A,i)),Vn(A,c,u,h)}const l=d(e,"x","conv2d","float32"),f=d(t,"filter","conv2d","float32");let m=l,w=!1;l.rank===3&&(w=!0,m=y(l,[1,l.shape[0],l.shape[1],l.shape[2]])),p(m.rank===4,()=>`Error in fused conv2d: input must be rank 4, but got rank ${m.rank}.`),p(f.rank===4,()=>`Error in fused conv2d: filter must be rank 4, but got rank ${f.rank}.`),st("fused conv2d",r,a);const I=s==="NHWC"?m.shape[3]:m.shape[1];p(f.shape[2]===I,()=>`Error in conv2d: depth of input (${I}) must match input depth for filter ${f.shape[2]}.`),p(Et(n,o),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${n} and dilations '${o}'`);const $=Re(m.shape,f.shape,n,o,r,a);let E;i!=null&&(E=d(i,"bias","fused conv2d"),[E]=H(E,l),s==="NHWC"?z($.outShape,E.shape):(p(E.shape.length<=1,()=>`Error in fused conv2d: only supports scalar or 1-D Tensor bias for NCHW format but got the bias of rank-${E.shape.length}.`),p(E.shape.length===0||E.shape[0]===$.outChannels||E.shape[0]===1,()=>`Error in fused conv2d: bias shape (${E.shape}) is not compatible with the number of output channels (${$.outChannels})`)));let F;if(u!=null){const A=u.shape;if(p(A.length<=1||A.length===3,()=>`Error in fused conv2d: only supports scalar, 1-D Tensor or 3-D Tensor PReLU activation weights but got a tensor of rank-${A.length}.`),A.length===1)p(A[0]===1||A[0]===$.outChannels,()=>`Error in fused conv2d: PReLU activation weights (${A}) is not compatible with the number of output channels (${$.outChannels}).`);else if(A.length===3)try{z(A,$.outShape)}catch{const K=`Error in fused conv2d: PReLU activation weights (${A}) is not compatible with the output shape of the conv2d (${$.outShape}).`;throw Error(K)}F=d(u,"prelu weights","fused conv2d")}const S=(A,U)=>{p(s==="NHWC",()=>`Error in gradient of fused conv2D: got dataFormat of ${s} but only NHWC is currently supported.`);const[K,P,j,O]=U,Q=zn(A,j,c);p(Ot(o),()=>`Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${o}'`);const ot=Cn(P.shape,Q,K,n,r),at=Wn(P,Q,K.shape,n,r),it=[ot,at];if(O!=null){const Wt=qn(O,Q);it.push(Wt)}return it},v={x:m,filter:f,bias:E,preluActivationWeights:F},T={strides:n,pad:r,dataFormat:s,dilations:o,dimRoundingMode:a,activation:c,leakyreluAlpha:h};return i==null?ee((U,K,P)=>{let j=g.runKernel(Zn,v,T);return P([K,U,j]),w&&(j=y(j,[j.shape[1],j.shape[2],j.shape[3]])),{value:j,gradFunc:S}})(m,f):ee((U,K,P,j)=>{let O=g.runKernel(Zn,v,T);return j([K,U,O,P]),w&&(O=y(O,[O.shape[1],O.shape[2],O.shape[3]])),{value:O,gradFunc:S}})(m,f,E)}const $y=b({fusedConv2d_:Vf});/**
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
 */function Uf(e,t,n,r,s,o=[1,1],a){let i=e;e.rank===3&&(i=y(e,[1,e.shape[0],e.shape[1],e.shape[2]]));let c=t;c.rank===3&&(c=y(t,[1,t.shape[0],t.shape[1],t.shape[2]]));const u={x:i,dy:c},h={strides:r,pad:s,dimRoundingMode:a,dilations:o,filterShape:n};return g.runKernel(ui,u,h)}const Hf=b({depthwiseConv2dNativeBackpropFilter_:Uf});/**
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
 */function jf(e,t,n,r,s,o=[1,1],a){let i=t,c=!1;t.rank===3&&(c=!0,i=y(t,[1,t.shape[0],t.shape[1],t.shape[2]]));const u={dy:i,filter:n},h={strides:r,pad:s,dimRoundingMode:a,dilations:o,inputShape:e},l=g.runKernel(li,u,h);return c?y(l,[l.shape[1],l.shape[2],l.shape[3]]):l}const Xf=b({depthwiseConv2dNativeBackpropInput_:jf});/**
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
 */function Jf({a:e,b:t,transposeA:n=!1,transposeB:r=!1,bias:s,activation:o="linear",preluActivationWeights:a,leakyreluAlpha:i=.2}){if(Un(g.state.gradientDepth,o)===!1){let O=R(e,t,n,r);return s!=null&&(O=N(O,s)),Vn(O,o,a,i)}let c=d(e,"a","fused matMul"),u=d(t,"b","fused matMul");[c,u]=H(c,u);const h=n?c.shape[c.rank-2]:c.shape[c.rank-1],l=r?u.shape[u.rank-1]:u.shape[u.rank-2],f=n?c.shape[c.rank-1]:c.shape[c.rank-2],m=r?u.shape[u.rank-2]:u.shape[u.rank-1],w=c.shape.slice(0,-2),I=u.shape.slice(0,-2),$=Z(w),E=Z(I);p(h===l,()=>`Error in fused matMul: inner shapes (${h}) and (${l}) of Tensors with shapes ${c.shape} and ${u.shape} and transposeA=${n} and transposeB=${r} must match.`);const S=z(c.shape.slice(0,-2),u.shape.slice(0,-2)).concat([f,m]),v=n?y(c,[$,h,f]):y(c,[$,f,h]),T=r?y(u,[E,m,l]):y(u,[E,l,m]);let A;s!=null&&(A=d(s,"bias","fused matMul"),[A]=H(A,c),z(S,A.shape));let U;a!=null&&(U=d(a,"prelu weights","fused matMul"));const K=(O,Q)=>{const[ot,at,it,Wt]=Q,wt=zn(y(O,it.shape),it,o);let zt,qt;if(!n&&!r?(zt=R(wt,at,!1,!0),qt=R(ot,wt,!0,!1)):!n&&r?(zt=R(wt,at,!1,!1),qt=R(wt,ot,!0,!1)):n&&!r?(zt=R(at,wt,!1,!0),qt=R(ot,wt,!1,!1)):(zt=R(at,wt,!0,!0),qt=R(wt,ot,!0,!0)),s!=null){const Da=qn(Wt,wt);return[zt,qt,Da]}else return[zt,qt]},P={a:v,b:T,bias:A,preluActivationWeights:U},j={transposeA:n,transposeB:r,activation:o,leakyreluAlpha:i};return s==null?ee((Q,ot,at)=>{const it=g.runKernel(Yn,P,j);return at([Q,ot,it]),{value:y(it,S),gradFunc:K}})(v,T):ee((Q,ot,at,it)=>{const Wt=g.runKernel(Yn,P,j);return it([Q,ot,Wt,at]),{value:y(Wt,S),gradFunc:K}})(v,T,A)}const Iy=b({fusedMatMul_:Jf});/**
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
 */function Yf(e,t,n,r,s="bilinear",o=0){const a=d(e,"image","cropAndResize"),i=d(t,"boxes","cropAndResize","float32"),c=d(n,"boxInd","cropAndResize","int32"),u=i.shape[0];p(a.rank===4,()=>`Error in cropAndResize: image must be rank 4,but got rank ${a.rank}.`),p(i.rank===2&&i.shape[1]===4,()=>`Error in cropAndResize: boxes must be have size [${u},4] but had shape ${i.shape}.`),p(c.rank===1&&c.shape[0]===u,()=>`Error in cropAndResize: boxInd must be have size [${u}] but had shape ${i.shape}.`),p(r.length===2,()=>`Error in cropAndResize: cropSize must be of length 2, but got length ${r.length}.`),p(r[0]>=1&&r[1]>=1,()=>`cropSize must be atleast [1,1], but was ${r}`),p(s==="bilinear"||s==="nearest",()=>`method must be bilinear or nearest, but was ${s}`);const h={image:a,boxes:i,boxInd:c},l={method:s,extrapolationValue:o,cropSize:r};return g.runKernel(ai,h,l)}const Zf=b({cropAndResize_:Yf});/**
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
 */function Qf(e){const t=d(e,"image","flipLeftRight","float32");p(t.rank===4,()=>`Error in flipLeftRight: image must be rank 4,but got rank ${t.rank}.`);const n={image:t};return g.runKernel(bi,n,{})}const tp=b({flipLeftRight_:Qf});/**
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
 */function ep(e){const t=d(e,"image","grayscaleToRGB"),n=t.rank-1,r=t.shape[n];p(t.rank>=2,()=>`Error in grayscaleToRGB: images must be at least rank 2, but got rank ${t.rank}.`),p(r===1,()=>`Error in grayscaleToRGB: last dimension of a grayscale image should be size 1, but got size ${r}.`);const s=new Array(t.rank);return s.fill(1,0,n),s[n]=3,Jt(t,s)}const np=b({grayscaleToRGB_:ep});/**
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
 */function rp(e,t,n=0,r=.5){const s=d(e,"image","rotateWithOffset","float32");p(s.rank===4,()=>`Error in rotateWithOffset: image must be rank 4,but got rank ${s.rank}.`);const o={image:s},a={radians:t,fillValue:n,center:r};return g.runKernel(zi,o,a)}const sp=b({rotateWithOffset_:rp});/**
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
 */function ie(e,t,n,r,s,o){r==null&&(r=.5),s==null&&(s=Number.NEGATIVE_INFINITY),o==null&&(o=0);const a=e.shape[0];return n=Math.min(n,a),p(0<=r&&r<=1,()=>`iouThreshold must be in [0, 1], but was '${r}'`),p(e.rank===2,()=>`boxes must be a 2D tensor, but was of rank '${e.rank}'`),p(e.shape[1]===4,()=>`boxes must have 4 columns, but 2nd dimension was ${e.shape[1]}`),p(t.rank===1,()=>"scores must be a 1D tensor"),p(t.shape[0]===a,()=>`scores has incompatible shape with boxes. Expected ${a}, but was ${t.shape[0]}`),p(0<=o&&o<=1,()=>`softNmsSigma must be in [0, 1], but was '${o}'`),{maxOutputSize:n,iouThreshold:r,scoreThreshold:s,softNmsSigma:o}}/**
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
 */function op(e,t,n,r=.5,s=Number.NEGATIVE_INFINITY){const o=d(e,"boxes","nonMaxSuppression","float32"),a=d(t,"scores","nonMaxSuppression","float32"),i=ie(o,a,n,r,s);n=i.maxOutputSize,r=i.iouThreshold,s=i.scoreThreshold;const c={maxOutputSize:n,iouThreshold:r,scoreThreshold:s};return g.runKernel(_i,{boxes:o,scores:a},c)}const ap=b({nonMaxSuppression_:op});/**
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
 */function ip(e,t,n){const r=cp(e,t,n),s=r<0?-(r+1):r;e.splice(s,0,t)}function cp(e,t,n){return lp(e,t,n||up)}function up(e,t){return e>t?1:e<t?-1:0}function lp(e,t,n){let r=0,s=e.length,o=0,a=!1;for(;r<s;){o=r+(s-r>>>1);const i=n(t,e[o]);i>0?r=o+1:(s=o,a=!i)}return a?r:-r-1}/**
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
 */function hp(e,t,n,r,s){return Hn(e,t,n,r,s,0)}function fp(e,t,n,r,s,o){return Hn(e,t,n,r,s,0,!1,o,!0)}function pp(e,t,n,r,s,o){return Hn(e,t,n,r,s,o,!0)}function Hn(e,t,n,r,s,o,a=!1,i=!1,c=!1){const u=[];for(let $=0;$<t.length;$++)t[$]>s&&u.push({score:t[$],boxIndex:$,suppressBeginIndex:0});u.sort(lr);const h=o>0?-.5/o:0,l=[],f=[];for(;l.length<n&&u.length>0;){const $=u.pop(),{score:E,boxIndex:F,suppressBeginIndex:S}=$;if(E<s)break;let v=!1;for(let T=l.length-1;T>=S;--T){const A=dp(e,F,l[T]);if(A>=r){v=!0;break}if($.score=$.score*gp(r,h,A),$.score<=s)break}$.suppressBeginIndex=l.length,v||($.score===E?(l.push(F),f.push($.score)):$.score>s&&ip(u,$,lr))}const m=l.length,w=n-m;i&&w>0&&(l.push(...new Array(w).fill(0)),f.push(...new Array(w).fill(0)));const I={selectedIndices:l};return a&&(I.selectedScores=f),c&&(I.validOutputs=m),I}function dp(e,t,n){const r=e.subarray(t*4,t*4+4),s=e.subarray(n*4,n*4+4),o=Math.min(r[0],r[2]),a=Math.min(r[1],r[3]),i=Math.max(r[0],r[2]),c=Math.max(r[1],r[3]),u=Math.min(s[0],s[2]),h=Math.min(s[1],s[3]),l=Math.max(s[0],s[2]),f=Math.max(s[1],s[3]),m=(i-o)*(c-a),w=(l-u)*(f-h);if(m<=0||w<=0)return 0;const I=Math.max(o,u),$=Math.max(a,h),E=Math.min(i,l),F=Math.min(c,f),S=Math.max(E-I,0)*Math.max(F-$,0);return S/(m+w-S)}function gp(e,t,n){const r=Math.exp(t*n*n);return n<=e?r:0}function lr(e,t){return e.score-t.score||e.score===t.score&&t.boxIndex-e.boxIndex}/**
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
 */async function mp(e,t,n,r=.5,s=Number.NEGATIVE_INFINITY){const o=d(e,"boxes","nonMaxSuppressionAsync"),a=d(t,"scores","nonMaxSuppressionAsync"),i=ie(o,a,n,r,s);n=i.maxOutputSize,r=i.iouThreshold,s=i.scoreThreshold;const c=await Promise.all([o.data(),a.data()]),u=c[0],h=c[1],{selectedIndices:l}=hp(u,h,n,r,s);return o!==e&&o.dispose(),a!==t&&a.dispose(),$t(l,"int32")}const bp=mp;/**
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
 */function yp(e,t,n,r=.5,s=Number.NEGATIVE_INFINITY,o=0){const a=d(e,"boxes","nonMaxSuppression"),i=d(t,"scores","nonMaxSuppression"),c=ie(a,i,n,r,s,o);n=c.maxOutputSize,r=c.iouThreshold,s=c.scoreThreshold,o=c.softNmsSigma;const u={boxes:a,scores:i},h={maxOutputSize:n,iouThreshold:r,scoreThreshold:s,softNmsSigma:o},l=g.runKernel(Fi,u,h);return{selectedIndices:l[0],selectedScores:l[1]}}const kp=b({nonMaxSuppressionWithScore_:yp});/**
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
 */async function wp(e,t,n,r=.5,s=Number.NEGATIVE_INFINITY,o=0){const a=d(e,"boxes","nonMaxSuppressionAsync"),i=d(t,"scores","nonMaxSuppressionAsync"),c=ie(a,i,n,r,s,o);n=c.maxOutputSize,r=c.iouThreshold,s=c.scoreThreshold,o=c.softNmsSigma;const u=await Promise.all([a.data(),i.data()]),h=u[0],l=u[1],{selectedIndices:f,selectedScores:m}=pp(h,l,n,r,s,o);return a!==e&&a.dispose(),i!==t&&i.dispose(),{selectedIndices:$t(f,"int32"),selectedScores:$t(m)}}const xp=wp;/**
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
 */function $p(e,t,n,r=.5,s=Number.NEGATIVE_INFINITY,o=!1){const a=d(e,"boxes","nonMaxSuppression"),i=d(t,"scores","nonMaxSuppression"),c=ie(a,i,n,r,s,null),u=c.maxOutputSize,h=c.iouThreshold,l=c.scoreThreshold,f={boxes:a,scores:i},m={maxOutputSize:u,iouThreshold:h,scoreThreshold:l,padToMaxOutputSize:o},w=g.runKernel(Ci,f,m);return{selectedIndices:w[0],validOutputs:w[1]}}const Ip=b({nonMaxSuppressionPadded_:$p});/**
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
 */async function Sp(e,t,n,r=.5,s=Number.NEGATIVE_INFINITY,o=!1){const a=d(e,"boxes","nonMaxSuppressionAsync"),i=d(t,"scores","nonMaxSuppressionAsync"),c=ie(a,i,n,r,s,null),u=c.maxOutputSize,h=c.iouThreshold,l=c.scoreThreshold,[f,m]=await Promise.all([a.data(),i.data()]),{selectedIndices:w,validOutputs:I}=fp(f,m,u,h,l,o);return a!==e&&a.dispose(),i!==t&&i.dispose(),{selectedIndices:$t(w,"int32"),validOutputs:L(I,"int32")}}const Ep=Sp;/**
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
 */function vp(e,t,n=!1,r=!1){const s=d(e,"images","resizeBilinear");p(s.rank===3||s.rank===4,()=>`Error in resizeBilinear: x must be rank 3 or 4, but got rank ${s.rank}.`),p(t.length===2,()=>`Error in resizeBilinear: new shape must 2D, but got shape ${t}.`),p(r===!1||n===!1,()=>"Error in resizeBilinear: If halfPixelCenters is true, alignCorners must be false.");let o=s,a=!1;s.rank===3&&(a=!0,o=y(s,[1,s.shape[0],s.shape[1],s.shape[2]]));const i={images:o},c={alignCorners:n,halfPixelCenters:r,size:t},u=g.runKernel(Os,i,c);return a?y(u,[u.shape[1],u.shape[2],u.shape[3]]):u}const aa=b({resizeBilinear_:vp});/**
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
 */function Dp(e,t,n=!1,r=!1){const s=d(e,"images","resizeNearestNeighbor");p(s.rank===3||s.rank===4,()=>`Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank ${s.rank}.`),p(t.length===2,()=>`Error in resizeNearestNeighbor: new shape must 2D, but got shape ${t}.`),p(s.dtype==="float32"||s.dtype==="int32",()=>"`images` must have `int32` or `float32` as dtype"),p(r===!1||n===!1,()=>"Error in resizeNearestNeighbor: If halfPixelCenters is true, alignCorners must be false.");let o=s,a=!1;s.rank===3&&(a=!0,o=y(s,[1,s.shape[0],s.shape[1],s.shape[2]]));const i={images:o},c={alignCorners:n,halfPixelCenters:r,size:t},u=g.runKernel(Ps,i,c);return a?y(u,[u.shape[1],u.shape[2],u.shape[3]]):u}const ia=b({resizeNearestNeighbor_:Dp});/**
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
 */function Tp(e,t="binary",n=!1,r=.5){const s=d(e,"image","threshold"),o=.2989,a=.587,i=.114,c=s.shape[0]*s.shape[1];let u=x($t([r]),255),h,l,f,m;if(p(s.rank===3,()=>`Error in threshold: image must be rank 3,but got rank ${s.rank}.`),p(s.shape[2]===3||s.shape[2]===1,()=>`Error in threshold: image color channel must be equal to 3 or 1but got ${s.shape[2]}.`),p(s.dtype==="int32"||s.dtype==="float32",()=>`Error in dtype: image dtype must be int32 or float32,but got dtype ${s.dtype}.`),p(t==="otsu"||t==="binary",()=>`Method must be binary or otsu, but was ${t}`),s.shape[2]===3){[h,l,f]=se(s,[1,1,1],-1);const $=x(h,o),E=x(l,a),F=x(f,i);m=N(N($,E),F)}else m=e;if(t==="otsu"){const $=Fu(D(Zo(m),"int32"),gc([]),256);u=Np($,c)}const w=n?ae(m,u):vt(m,u);return D(x(w,255),"int32")}function Np(e,t){let n=$t([-1]),r=$t([0]),s=$t([0]),o,a,i,c,u,h;for(let l=0;l<e.size-1;l++){o=V(e,0,l+1),a=V(e,l+1),u=C(_(o),t),h=C(_(a),t);const f=_(x(o,Ne(0,o.size)));i=C(f,_(o));const m=_n(a.shape,o.size),w=N(Ne(0,a.size),m),I=x(a,w);c=C(_(I),_(a));const $=B(i,c),E=B(i,c),F=x(u,h);s=x(x(F,$),E);const S=vt(s,r);r=ft(S,s,r),n=ft(S,$t([l]),n)}return n}const Ap=b({threshold_:Tp});/**
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
 */function _p(e,t,n="nearest",r="constant",s=0,o){const a=d(e,"image","transform","float32"),i=d(t,"transforms","transform","float32");p(a.rank===4,()=>`Error in transform: image must be rank 4,but got rank ${a.rank}.`),p(i.rank===2&&(i.shape[0]===a.shape[0]||i.shape[0]===1)&&i.shape[1]===8,()=>"Error in transform: Input transform should be batch x 8 or 1 x 8"),p(o==null||o.length===2,()=>`Error in transform: outputShape must be [height, width] or null, but got ${o}.`);const c={image:a,transforms:i},u={interpolation:n,fillMode:r,fillValue:s,outputShape:o};return g.runKernel(Ki,c,u)}const Cp=b({transform_:_p});/**
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
 */function Fp(e,t,n){p(t%1===0,()=>`bandPart(): numLower must be an integer, got ${t}.`),p(n%1===0,()=>`bandPart(): numUpper must be an integer, got ${n}.`);const r=d(e,"a","bandPart");p(r.rank>=2,()=>`bandPart(): Rank must be at least 2, got ${r.rank}.`);const s=r.shape,[o,a]=r.shape.slice(-2);if(!(t<=o))throw new Error(`bandPart(): numLower (${t}) must not be greater than the number of rows (${o}).`);if(!(n<=a))throw new Error(`bandPart(): numUpper (${n}) must not be greater than the number of columns (${a}).`);t<0&&(t=o),n<0&&(n=a);const i=y(Ne(0,o,1,"int32"),[-1,1]),c=Ne(0,a,1,"int32"),u=B(i,c),h=ne(ae(u,L(+t,"int32")),ye(u,L(-n,"int32"))),l=re([o,a],r.dtype);return y(oe(ze(y(r,[-1,o,a])).map(f=>ft(h,f,l))),s)}const Mp=b({bandPart_:Fp});/**
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
 */function Bp(e){let t;if(Array.isArray(e)){t=!1,p(e!=null&&e.length>0,()=>"Gram-Schmidt process: input must not be null, undefined, or empty");const s=e[0].shape[0];for(let o=1;o<e.length;++o)p(e[o].shape[0]===s,()=>`Gram-Schmidt: Non-unique lengths found in the input vectors: (${e[o].shape[0]} vs. ${s})`)}else t=!0,e=se(e,e.shape[0],0).map(s=>ra(s,[0]));p(e.length<=e[0].shape[0],()=>`Gram-Schmidt: Number of vectors (${e.length}) exceeds number of dimensions (${e[0].shape[0]}).`);const n=[],r=e;for(let s=0;s<e.length;++s)n.push(g.tidy(()=>{let o=r[s];if(s>0)for(let a=0;a<s;++a){const i=x(_(x(n[a],o)),n[a]);o=B(o,i)}return C(o,Le(o,"euclidean"))}));return t?oe(n,0):n}const Rp=b({gramSchmidt_:Bp});/**
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
 */function Gp(e,t=!1){if(p(e.rank>=2,()=>`qr() requires input tensor to have a rank >= 2, but got rank ${e.rank}`),e.rank===2)return hr(e,t);{const n=e.shape.slice(0,e.shape.length-2).reduce((c,u)=>c*u),r=ze(y(e,[n,e.shape[e.shape.length-2],e.shape[e.shape.length-1]]),0),s=[],o=[];r.forEach(c=>{const[u,h]=hr(c,t);s.push(u),o.push(h)});const a=y(oe(s,0),e.shape),i=y(oe(o,0),e.shape);return[a,i]}}function hr(e,t=!1){return g.tidy(()=>{p(e.shape.length===2,()=>`qr2d() requires a 2D Tensor, but got a ${e.shape.length}D Tensor.`);const n=e.shape[0],r=e.shape[1];let s=Rl(n),o=Ht(e);const a=je([[1]],[1,1]);let i=Ht(a);const c=n>=r?r:n;for(let u=0;u<c;++u){const h=o,l=i,f=s;[i,o,s]=g.tidy(()=>{const m=V(o,[u,u],[n-u,1]),w=Le(m),I=V(o,[u,u],[1,1]),$=ft(vt(I,0),je([[-1]]),je([[1]])),E=B(I,x($,w)),F=C(m,E);F.shape[0]===1?i=Ht(a):i=pt([a,V(F,[1,0],[F.shape[0]-1,F.shape[1]])],0);const S=tt(C(R($,E),w)),v=V(o,[u,0],[n-u,r]),T=x(S,i),A=It(i);if(u===0)o=B(v,R(T,R(A,v)));else{const P=B(v,R(T,R(A,v)));o=pt([V(o,[0,0],[u,r]),P],0)}const U=It(T),K=V(s,[0,u],[n,s.shape[1]-u]);if(u===0)s=B(K,R(R(K,i),U));else{const P=B(K,R(R(K,i),U));s=pt([V(s,[0,0],[n,u]),P],1)}return[i,o,s]}),ut([h,l,f])}return!t&&n>r&&(s=V(s,[0,0],[n,r]),o=V(o,[0,0],[r,r])),[s,o]})}const Pp=b({qr_:Gp});/**
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
 */const Sy={flipLeftRight:tp,grayscaleToRGB:np,resizeNearestNeighbor:ia,resizeBilinear:aa,rotateWithOffset:sp,cropAndResize:Zf,nonMaxSuppression:ap,nonMaxSuppressionAsync:bp,nonMaxSuppressionWithScore:kp,nonMaxSuppressionWithScoreAsync:xp,nonMaxSuppressionPadded:Ip,nonMaxSuppressionPaddedAsync:Ep,threshold:Ap,transform:Cp},Ey={bandPart:Mp,gramSchmidt:Rp,qr:Pp};/**
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
 */class Op{getClassName(){return this.constructor.className}static fromConfig(t,n){return new t(n)}}class Mt{constructor(){this.classNameMap={}}static getMap(){return Mt.instance==null&&(Mt.instance=new Mt),Mt.instance}static register(t){Mt.getMap().classNameMap[t.className]=[t,t.fromConfig]}}function Lp(e){p(e.className!=null,()=>"Class being registered does not have the static className property defined."),p(typeof e.className=="string",()=>"className is required to be a string, but got type "+typeof e.className),p(e.className.length>0,()=>"Class being registered has an empty-string as its className, which is disallowed."),Mt.register(e)}/**
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
 */class Kt extends Op{minimize(t,n=!1,r){const{value:s,grads:o}=this.computeGradients(t,r);if(r!=null){const a=r.map(i=>({name:i.name,tensor:o[i.name]}));this.applyGradients(a)}else this.applyGradients(o);return ut(o),n?s:(s.dispose(),null)}get iterations(){return this.iterations_==null&&(this.iterations_=0),this.iterations_}incrementIterations(){this.iterations_=this.iterations+1}computeGradients(t,n){return nh(t,n)}dispose(){this.iterations_!=null&&ut(this.iterations_)}async saveIterations(){return this.iterations_==null&&(this.iterations_=0),{name:"iter",tensor:L(this.iterations_,"int32")}}async getWeights(){throw new Error("getWeights() is not implemented for this optimizer yet.")}async setWeights(t){throw new Error(`setWeights() is not implemented for this optimizer class ${this.getClassName()}`)}async extractIterations(t){return this.iterations_=(await t[0].tensor.data())[0],t.slice(1)}}Object.defineProperty(Kt,Symbol.hasInstance,{value:e=>e.minimize!=null&&e.computeGradients!=null&&e.applyGradients!=null});/**
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
 */class ca extends Kt{constructor(t,n,r=null){super(),this.learningRate=t,this.rho=n,this.epsilon=r,this.accumulatedGrads=[],this.accumulatedUpdates=[],r==null&&(this.epsilon=g.backend.epsilon())}static get className(){return"Adadelta"}applyGradients(t){(Array.isArray(t)?t.map(r=>r.name):Object.keys(t)).forEach((r,s)=>{const o=g.registeredVariables[r],a=!1;this.accumulatedGrads[s]==null&&(this.accumulatedGrads[s]={originalName:`${r}/accum_grad`,variable:X(()=>M(o).variable(a))}),this.accumulatedUpdates[s]==null&&(this.accumulatedUpdates[s]={originalName:`${r}/accum_var`,variable:X(()=>M(o).variable(a))});const i=Array.isArray(t)?t[s].tensor:t[r];if(i==null)return;const c=this.accumulatedGrads[s].variable,u=this.accumulatedUpdates[s].variable;X(()=>{const h=N(x(c,this.rho),x(q(i),1-this.rho)),l=x(C(lt(N(u,this.epsilon)),lt(N(c,this.epsilon))),i),f=N(x(u,this.rho),x(q(l),1-this.rho));c.assign(h),u.assign(f);const m=N(x(l,-this.learningRate),o);o.assign(m)})}),this.incrementIterations()}dispose(){this.accumulatedUpdates!=null&&(ut(this.accumulatedGrads.map(t=>t.variable)),ut(this.accumulatedUpdates.map(t=>t.variable)))}async getWeights(){const t=[...this.accumulatedGrads,...this.accumulatedUpdates];return[await this.saveIterations()].concat(t.map(n=>({name:n.originalName,tensor:n.variable})))}async setWeights(t){t=await this.extractIterations(t);const n=t.length/2,r=!1;this.accumulatedGrads=t.slice(0,n).map(s=>({originalName:s.name,variable:s.tensor.variable(r)})),this.accumulatedUpdates=t.slice(n,n*2).map(s=>({originalName:s.name,variable:s.tensor.variable(r)}))}getConfig(){return{learningRate:this.learningRate,rho:this.rho,epsilon:this.epsilon}}static fromConfig(t,n){return new t(n.learningRate,n.rho,n.epsilon)}}/**
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
 */class ua extends Kt{constructor(t,n=.1){super(),this.learningRate=t,this.initialAccumulatorValue=n,this.accumulatedGrads=[]}static get className(){return"Adagrad"}applyGradients(t){(Array.isArray(t)?t.map(r=>r.name):Object.keys(t)).forEach((r,s)=>{const o=g.registeredVariables[r];this.accumulatedGrads[s]==null&&(this.accumulatedGrads[s]={originalName:`${r}/accumulator`,variable:X(()=>_n(o.shape,this.initialAccumulatorValue).variable(!1))});const a=Array.isArray(t)?t[s].tensor:t[r];if(a==null)return;const i=this.accumulatedGrads[s].variable;X(()=>{const c=N(i,q(a));i.assign(c);const u=N(x(C(a,lt(N(c,g.backend.epsilon()))),-this.learningRate),o);o.assign(u)})}),this.incrementIterations()}dispose(){this.accumulatedGrads!=null&&ut(this.accumulatedGrads.map(t=>t.variable))}async getWeights(){return[await this.saveIterations()].concat(this.accumulatedGrads.map(t=>({name:t.originalName,tensor:t.variable})))}async setWeights(t){t=await this.extractIterations(t);const n=!1;this.accumulatedGrads=t.map(r=>({originalName:r.name,variable:r.tensor.variable(n)}))}getConfig(){return{learningRate:this.learningRate,initialAccumulatorValue:this.initialAccumulatorValue}}static fromConfig(t,n){return new t(n.learningRate,n.initialAccumulatorValue)}}/**
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
 */class la extends Kt{constructor(t,n,r,s=null){super(),this.learningRate=t,this.beta1=n,this.beta2=r,this.epsilon=s,this.accumulatedFirstMoment=[],this.accumulatedSecondMoment=[],X(()=>{this.accBeta1=L(n).variable(),this.accBeta2=L(r).variable()}),s==null&&(this.epsilon=g.backend.epsilon())}static get className(){return"Adam"}applyGradients(t){const n=Array.isArray(t)?t.map(r=>r.name):Object.keys(t);X(()=>{const r=B(1,this.accBeta1),s=B(1,this.accBeta2);n.forEach((o,a)=>{const i=g.registeredVariables[o],c=!1;this.accumulatedFirstMoment[a]==null&&(this.accumulatedFirstMoment[a]={originalName:`${o}/m`,variable:X(()=>M(i).variable(c))}),this.accumulatedSecondMoment[a]==null&&(this.accumulatedSecondMoment[a]={originalName:`${o}/v`,variable:X(()=>M(i).variable(c))});const u=Array.isArray(t)?t[a].tensor:t[o];if(u==null)return;const h=this.accumulatedFirstMoment[a].variable,l=this.accumulatedSecondMoment[a].variable,f=N(x(h,this.beta1),x(u,1-this.beta1)),m=N(x(l,this.beta2),x(q(u),1-this.beta2)),w=C(f,r),I=C(m,s);h.assign(f),l.assign(m);const $=N(x(C(w,N(lt(I),this.epsilon)),-this.learningRate),i);i.assign($)}),this.accBeta1.assign(x(this.accBeta1,this.beta1)),this.accBeta2.assign(x(this.accBeta2,this.beta2))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.accBeta2.dispose(),this.accumulatedFirstMoment!=null&&ut(this.accumulatedFirstMoment.map(t=>t.variable)),this.accumulatedSecondMoment!=null&&ut(this.accumulatedSecondMoment.map(t=>t.variable))}async getWeights(){const t=[...this.accumulatedFirstMoment,...this.accumulatedSecondMoment];return[await this.saveIterations()].concat(t.map(n=>({name:n.originalName,tensor:n.variable})))}async setWeights(t){t=await this.extractIterations(t),X(()=>{this.accBeta1.assign(te(this.beta1,this.iterations_+1)),this.accBeta2.assign(te(this.beta2,this.iterations_+1))});const n=t.length/2,r=!1;this.accumulatedFirstMoment=t.slice(0,n).map(s=>({originalName:s.name,variable:s.tensor.variable(r)})),this.accumulatedSecondMoment=t.slice(n,n*2).map(s=>({originalName:s.name,variable:s.tensor.variable(r)}))}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon}}static fromConfig(t,n){return new t(n.learningRate,n.beta1,n.beta2,n.epsilon)}}/**
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
 */class ha extends Kt{constructor(t,n,r,s=null,o=0){super(),this.learningRate=t,this.beta1=n,this.beta2=r,this.epsilon=s,this.decay=o,this.accumulatedFirstMoment=[],this.accumulatedWeightedInfNorm=[],X(()=>{this.iteration=L(0).variable(),this.accBeta1=L(n).variable()}),s==null&&(this.epsilon=g.backend.epsilon())}static get className(){return"Adamax"}applyGradients(t){const n=Array.isArray(t)?t.map(r=>r.name):Object.keys(t);X(()=>{const r=B(1,this.accBeta1),s=C(-this.learningRate,N(x(this.iteration,this.decay),1));n.forEach((o,a)=>{const i=g.registeredVariables[o],c=!1;this.accumulatedFirstMoment[a]==null&&(this.accumulatedFirstMoment[a]={originalName:`${o}/m`,variable:M(i).variable(c)}),this.accumulatedWeightedInfNorm[a]==null&&(this.accumulatedWeightedInfNorm[a]={originalName:`${o}/v`,variable:M(i).variable(c)});const u=Array.isArray(t)?t[a].tensor:t[o];if(u==null)return;const h=this.accumulatedFirstMoment[a].variable,l=this.accumulatedWeightedInfNorm[a].variable,f=N(x(h,this.beta1),x(u,1-this.beta1)),m=x(l,this.beta2),w=bt(u),I=Ln(m,w);h.assign(f),l.assign(I);const $=N(x(C(s,r),C(f,N(I,this.epsilon))),i);i.assign($)}),this.iteration.assign(N(this.iteration,1)),this.accBeta1.assign(x(this.accBeta1,this.beta1))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.iteration.dispose(),this.accumulatedFirstMoment!=null&&ut(this.accumulatedFirstMoment.map(t=>t.variable)),this.accumulatedWeightedInfNorm!=null&&ut(this.accumulatedWeightedInfNorm.map(t=>t.variable))}async getWeights(){throw new Error("getWeights() is not implemented for Adamax yet.")}async setWeights(t){throw new Error("setWeights() is not implemented for Adamax yet.")}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon,decay:this.decay}}static fromConfig(t,n){return new t(n.learningRate,n.beta1,n.beta2,n.epsilon,n.decay)}}/**
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
 */class jn extends Kt{constructor(t){super(),this.learningRate=t,this.setLearningRate(t)}static get className(){return"SGD"}applyGradients(t){(Array.isArray(t)?t.map(r=>r.name):Object.keys(t)).forEach((r,s)=>{const o=Array.isArray(t)?t[s].tensor:t[r];if(o==null)return;const a=g.registeredVariables[r];X(()=>{const i=N(x(this.c,o),a);a.assign(i)})}),this.incrementIterations()}setLearningRate(t){this.learningRate=t,this.c!=null&&this.c.dispose(),this.c=Gc(L(-t))}dispose(){this.c.dispose()}async getWeights(){return[await this.saveIterations()]}async setWeights(t){if(t=await this.extractIterations(t),t.length!==0)throw new Error("SGD optimizer does not have settable weights.")}getConfig(){return{learningRate:this.learningRate}}static fromConfig(t,n){return new t(n.learningRate)}}/**
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
 */class fa extends jn{constructor(t,n,r=!1){super(t),this.learningRate=t,this.momentum=n,this.useNesterov=r,this.accumulations=[],this.m=L(this.momentum)}static get className(){return"Momentum"}applyGradients(t){(Array.isArray(t)?t.map(r=>r.name):Object.keys(t)).forEach((r,s)=>{const o=g.registeredVariables[r];this.accumulations[s]==null&&(this.accumulations[s]={originalName:`${r}/momentum`,variable:X(()=>M(o).variable(!1))});const a=this.accumulations[s].variable,i=Array.isArray(t)?t[s].tensor:t[r];i!=null&&X(()=>{let c;const u=N(x(this.m,a),i);this.useNesterov?c=N(x(this.c,N(i,x(u,this.m))),o):c=N(x(this.c,u),o),a.assign(u),o.assign(c)})}),this.incrementIterations()}dispose(){this.m.dispose(),this.accumulations!=null&&ut(this.accumulations.map(t=>t.variable))}setMomentum(t){this.momentum=t}async getWeights(){return[await this.saveIterations()].concat(this.accumulations.map(t=>({name:t.originalName,tensor:t.variable})))}async setWeights(t){t=await this.extractIterations(t);const n=!1;this.accumulations=t.map(r=>({originalName:r.name,variable:r.tensor.variable(n)}))}getConfig(){return{learningRate:this.learningRate,momentum:this.momentum,useNesterov:this.useNesterov}}static fromConfig(t,n){return new t(n.learningRate,n.momentum,n.useNesterov)}}/**
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
 */class pa extends Kt{constructor(t,n=.9,r=0,s=null,o=!1){if(super(),this.learningRate=t,this.decay=n,this.momentum=r,this.epsilon=s,this.accumulatedMeanSquares=[],this.accumulatedMoments=[],this.accumulatedMeanGrads=[],this.centered=o,s==null&&(this.epsilon=g.backend.epsilon()),t==null)throw new Error("learningRate for RMSPropOptimizer must be defined.")}static get className(){return"RMSProp"}applyGradients(t){(Array.isArray(t)?t.map(r=>r.name):Object.keys(t)).forEach((r,s)=>{const o=g.registeredVariables[r],a=!1;this.accumulatedMeanSquares[s]==null&&(this.accumulatedMeanSquares[s]={originalName:`${r}/rms`,variable:X(()=>M(o).variable(a))}),this.accumulatedMoments[s]==null&&(this.accumulatedMoments[s]={originalName:`${r}/momentum`,variable:X(()=>M(o).variable(a))}),this.accumulatedMeanGrads[s]==null&&this.centered&&(this.accumulatedMeanGrads[s]={originalName:`${r}/mg`,variable:X(()=>M(o).variable(a))});const i=Array.isArray(t)?t[s].tensor:t[r];if(i==null)return;const c=this.accumulatedMeanSquares[s].variable,u=this.accumulatedMoments[s].variable;X(()=>{const h=N(x(c,this.decay),x(q(i),1-this.decay));if(this.centered){const l=this.accumulatedMeanGrads[s].variable,f=N(x(l,this.decay),x(i,1-this.decay)),m=C(x(i,this.learningRate),lt(B(h,N(q(f),this.epsilon)))),w=N(x(u,this.momentum),m);c.assign(h),l.assign(f),u.assign(w);const I=B(o,w);o.assign(I)}else{const l=N(x(c,this.decay),x(q(i),1-this.decay)),f=N(x(u,this.momentum),C(x(i,this.learningRate),lt(N(l,this.epsilon))));c.assign(l),u.assign(f);const m=B(o,f);o.assign(m)}})}),this.incrementIterations()}dispose(){this.accumulatedMeanSquares!=null&&ut(this.accumulatedMeanSquares.map(t=>t.variable)),this.accumulatedMeanGrads!=null&&this.centered&&ut(this.accumulatedMeanGrads.map(t=>t.variable)),this.accumulatedMoments!=null&&ut(this.accumulatedMoments.map(t=>t.variable))}async getWeights(){const t=[...this.accumulatedMeanSquares,...this.accumulatedMoments];return this.centered&&t.push(...this.accumulatedMeanGrads),[await this.saveIterations()].concat(t.map(n=>({name:n.originalName,tensor:n.variable})))}async setWeights(t){t=await this.extractIterations(t);const n=this.centered?t.length/3:t.length/2,r=!1;this.accumulatedMeanSquares=t.slice(0,n).map(s=>({originalName:s.name,variable:s.tensor.variable(r)})),this.accumulatedMoments=t.slice(n,n*2).map(s=>({originalName:s.name,variable:s.tensor.variable(r)})),this.centered&&(this.accumulatedMeanGrads=t.slice(n*2,n*3).map(s=>({originalName:s.name,variable:s.tensor.variable(r)})))}getConfig(){return{learningRate:this.learningRate,decay:this.decay,momentum:this.momentum,epsilon:this.epsilon,centered:this.centered}}static fromConfig(t,n){return new t(n.learningRate,n.decay,n.momentum,n.epsilon,n.centered)}}/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Kp=[ca,ua,la,ha,fa,pa,jn];function Wp(){for(const e of Kp)Lp(e)}function zp(e,t){const n=e.shape.length,r=t.shape.length;if(n<1)throw new Error(`tf.gatherND() expects the input to be rank 1 or higher, but the rank was ${n}.`);if(r<1)throw new Error(`tf.gatherND() expects the indices to be rank 1 or higher, but the rank was ${r}.`);if(t.dtype!=="int32")throw new Error(`tf.gatherND() expects the indices to be int32 type, but the dtype was ${t.dtype}.`);if(t.shape[r-1]>n)throw new Error(`index innermost dimension length must be <= tensor rank; saw: ${t.shape[r-1]} vs. ${n}`);if(Z(e.shape)===0)throw new Error(`Requested more than 0 entries, but input is empty. Input shape: ${e.shape}.`);const s=t.shape,o=s[s.length-1];let a=1;for(let l=0;l<s.length-1;++l)a*=s[l];const i=e.shape,c=s.slice();c.pop();let u=1;for(let l=o;l<n;++l)u*=i[l],c.push(i[l]);const h=[...me(e.shape).map(l=>l/u),1].slice(0,o);return[c,a,u,h]}/**
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
 */const gn=-2,qp=-1;function Vp(e,t,n){const r=e.shape.length;p(r===t.length,()=>`Error in slice${r}D: Length of begin ${t} must match the rank of the array (${r}).`),p(r===n.length,()=>`Error in slice${r}D: Length of size ${n} must match the rank of the array (${r}).`);for(let s=0;s<r;++s)p(t[s]+n[s]<=e.shape[s],()=>`Error in slice${r}D: begin[${s}] + size[${s}] (${t[s]+n[s]}) would overflow input.shape[${s}] (${e.shape[s]})`)}function Up(e){const t=[];let n=0;for(;e>0;)e&1&&t.push(n),e/=2,n++;return t}function Hp(e,t,n){const r=[];for(let s=0;s<e.length;s++)r[s]=Math.ceil((t[s]-e[s])/n[s]);return r}function da(e,t,n,r){const s=[...e];for(let o=s.length;o<r.length;o++)s.push(1);for(let o=0;o<n;o++)o===0?s[t]=1:(s.splice(t,0,1),s.pop());return s}function ga(e,t,n){return n<=e?n:n-(t-1)}function ma(e,t){const n=[];for(let r=0;r<e;r++)n.push(t+r);return n}function jp(e,t,n,r,s,o,a,i,c){const u=e.length;let h=new Array(u),l=new Array(u),f=new Array(u);if(t.length&&n>0){const m=t[0],w=n+1;h=ba(a,m,w,r,e),l=ya(i,m,w,s,e),f=da(o,m,w,e)}else for(let m=0;m<u;m++)h[m]=wa(a,r,o,e,m,c),l[m]=xa(i,s,o,e,m,c),f[m]=ka(o,m,c);return{begin:h,end:l,strides:f}}function ba(e,t,n,r,s){const o=[...s],a=ma(n,t);for(let i=0;i<o.length;i++)if(a.indexOf(i)>-1)o[i]=0;else{const c=ga(t,n,i);let u=r[c];e&1<<c&&(u=0),o[i]=u}return o}function ya(e,t,n,r,s){const o=[...s],a=ma(n,t);for(let i=0;i<o.length;i++)if(a.indexOf(i)>-1)o[i]=Number.MAX_SAFE_INTEGER;else{const c=ga(t,n,i);let u=r[c];e&1<<c&&(u=Number.MAX_SAFE_INTEGER),o[i]=u}for(let i=0;i<o.length;i++){const c=s[i];o[i]<0&&(o[i]+=c),o[i]=Ee(0,o[i],s[i])}return o}function ka(e,t,n){let r=e[t];return(n&1<<t||r==null)&&(r=1),r}function wa(e,t,n,r,s,o){let a=t[s];const i=n[s]||1;(e&1<<s||o&1<<s||a==null)&&(i>0?a=Number.MIN_SAFE_INTEGER:a=Number.MAX_SAFE_INTEGER);const c=r[s];return a<0&&(a+=c),a=Ee(0,a,c-1),a}function xa(e,t,n,r,s,o){let a=t[s];const i=n[s]||1;(e&1<<s||o&1<<s||a==null)&&(i>0?a=Number.MAX_SAFE_INTEGER:a=Number.MIN_SAFE_INTEGER);const c=r[s];return a<0&&(a+=c),i>0?a=Ee(0,a,c):a=Ee(-1,a,c-1),a}function Xp(e,t,n){let r=n.length;for(let s=0;s<n.length;s++)if(n[s]>1){r=s;break}for(let s=r+1;s<n.length;s++)if(t[s]>0||n[s]!==e[s])return!1;return!0}function Jp(e,t){let n=e.length>0?e[e.length-1]:1;for(let r=0;r<e.length-1;r++)n+=e[r]*t[r];return n}function $a(e,t,n){let r;const s=e.shape.length;typeof t=="number"?r=[t,...new Array(s-1).fill(0)]:t.length<s?r=t.concat(new Array(s-t.length).fill(0)):r=t.slice(),r.forEach(a=>{p(a!==-1,()=>"slice() does not support negative begin indexing.")});let o;return n==null?o=new Array(s).fill(-1):typeof n=="number"?o=[n,...new Array(s-1).fill(-1)]:n.length<s?o=n.concat(new Array(s-n.length).fill(-1)):o=n,o=o.map((a,i)=>a>=0?a:(p(a===-1,()=>`Negative size values should be exactly -1 but got ${a} for the slice() size at index ${i}.`),e.shape[i]-r[i])),[r,o]}function Yp(e,t,n,r,s,o,a,i,c){let u;if(r==null?(u=new Array(t.length),u.fill(1)):u=r,a!=null&&a&a-1)throw new Error("Multiple ellipses in slice is not allowed.");let h=!1;const l={dims:u.length,numAddAxisAfterEllipsis:0,begin:t.slice(),end:n.slice(),strides:u.slice(),beginMask:s,endMask:o,ellipsisMask:a,newAxisMask:i,shrinkAxisMask:c};for(let S=0;S<l.dims;S++)h&&1<<S&i&&l.numAddAxisAfterEllipsis++,1<<S&a&&(h=!0);h||(l.ellipsisMask|=1<<l.dims,l.dims++);const f={dims:e.length,beginMask:0,endMask:0,beginValid:!1,endValid:!1};Zp(l,f);let m=!0,w=!0,I=!0;const $=[],E=[];for(let S=0;S<e.length;++S){if(f.strides[S]===0)throw Error(`strides[${S}] must be non-zero`);const v=!!(f.shrinkAxisMask&1<<S),T=e[S];if(T===-1){$.push(v?1:-1);continue}const A=[f.beginMask&1<<S,f.endMask&1<<S],U=[f.strides[S]>0?0:-1,f.strides[S]>0?T:T-1];if(v&&f.strides[S]<=0)throw Error("only stride 1 allowed on non-range indexing.");I=I&&f.strides[S]===1;const K=!!(f.beginMask&1<<S&&f.endMask&1<<S);if(f.beginValid&&f.endValid){if(v){const Q=f.begin[S]<0?T+f.begin[S]:f.begin[S];if(f.begin[S]=Q,f.end[S]=f.begin[S]+1,Q<0||Q>=T)throw Error(`slice index ${f.begin[S]} of dimension ${S} out of bounds.`)}else f.begin[S]=fr(f.begin[S],0,f.strides[S],T,A,U),f.end[S]=fr(f.end[S],1,f.strides[S],T,A,U);const O=f.strides[S]===1&&f.begin[S]===0&&f.end[S]===T;m=m&&O,w=w&&(S===0&&f.strides[S]===1||O)}else m=m&&f.strides[S]===1&&K,w=w&&(S===0&&f.strides[S]===1||K);let P,j=!1;if(f.beginValid&&f.endValid?(P=f.end[S]-f.begin[S],j=!0):v?(P=1,j=!0):K&&T>=0&&(f.strides[S]<0?P=-T:P=T,j=!0),j){let O;P===0||P<0!=f.strides[S]<0?O=0:O=Math.trunc(P/f.strides[S])+(P%f.strides[S]!==0?1:0),$.push(O)}else $.push(-1)}for(let S=0;S<f.finalShapeGatherIndices.length;++S){const v=f.finalShapeGatherIndices[S];v>=0?E.push($[v]):v===gn&&E.push(1)}return{finalShapeSparse:E.filter((S,v)=>f.finalShapeGatherIndices[v]!==gn),finalShape:E,isIdentity:m,sliceDim0:w,isSimpleSlice:I,begin:f.begin,end:f.end,strides:f.strides}}function Zp(e,t){t.beginMask=0,t.endMask=0,t.shrinkAxisMask=0;let n=0;t.beginValid=e.begin!=null,t.endValid=e.end!=null,t.begin=new Array(t.dims),t.end=new Array(t.dims),t.strides=new Array(t.dims),t.finalShapeGatherIndices=[],t.finalShapeGatherIndicesSparse=[],t.inputShapeGatherIndicesSparse=new Array(t.dims);for(let r=0;r<e.dims;r++)if(1<<r&e.ellipsisMask){const s=Math.min(t.dims-(e.dims-r)+1+e.numAddAxisAfterEllipsis,t.dims);for(;n<s;n++)t.begin[n]=0,t.end[n]=0,t.strides[n]=1,t.beginMask|=1<<n,t.endMask|=1<<n,t.finalShapeGatherIndices.push(n),t.finalShapeGatherIndicesSparse.push(-1),t.inputShapeGatherIndicesSparse[n]=r}else if(1<<r&e.newAxisMask)t.finalShapeGatherIndices.push(gn),t.finalShapeGatherIndicesSparse.push(-1);else{if(n===t.begin.length)throw Error(`Index out of range using input dim ${n}; input has only ${t.dims} dims, ${t.begin.length}.`);e.begin!=null&&(t.begin[n]=e.begin[r]),e.end!=null&&(t.end[n]=e.end[r]),t.strides[n]=e.strides[r],e.beginMask&1<<r&&(t.beginMask|=1<<n),e.endMask&1<<r&&(t.endMask|=1<<n),e.shrinkAxisMask&1<<r?(t.finalShapeGatherIndices.push(qp),t.finalShapeGatherIndicesSparse.push(-1),t.shrinkAxisMask|=1<<n):(t.finalShapeGatherIndices.push(n),t.finalShapeGatherIndicesSparse.push(r)),t.inputShapeGatherIndicesSparse[n]=r,n++}}function fr(e,t,n,r,s,o){if(s[t])return n>0?o[t]:o[t+1&1];{const a=e<0?r+e:e;return a<o[0]?o[0]:a>o[1]?o[1]:a}}const Qp=Object.freeze(Object.defineProperty({__proto__:null,assertParamsValid:Vp,computeFlatOffset:Jp,computeOutShape:Hp,getNormalizedAxes:jp,isSliceContinous:Xp,maskToAxes:Up,parseSliceParams:$a,sliceInfo:Yp,startForAxis:wa,startIndicesWithElidedDims:ba,stopForAxis:xa,stopIndicesWithElidedDims:ya,stridesForAxis:ka,stridesWithElidedDims:da},Symbol.toStringTag,{value:"Module"}));/**
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
 */class td{static sgd(t){return new jn(t)}static momentum(t,n,r=!1){return new fa(t,n,r)}static rmsprop(t,n=.9,r=0,s=null,o=!1){return new pa(t,n,r,s,o)}static adam(t=.001,n=.9,r=.999,s=null){return new la(t,n,r,s)}static adadelta(t=.001,n=.95,r=null){return new ca(t,n,r)}static adamax(t=.002,n=.9,r=.999,s=null,o=0){return new ha(t,n,r,s,o)}static adagrad(t,n=.1){return new ua(t,n)}}/**
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
 */const vy=td;/**
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
 */const ed=(()=>typeof requestAnimationFrame<"u"?requestAnimationFrame:typeof setImmediate<"u"?setImmediate:e=>e())();function Dy(){return new Promise(e=>ed(()=>e()))}/**
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
 */function nd(e,t){const n=e[0].length;e.forEach((s,o)=>{p(s.length===n,()=>`Error in concat${n}D: rank of tensors[${o}] must be the same as the rank of the rest (${n})`)}),p(t>=0&&t<n,()=>`Error in concat${n}D: axis must be between 0 and ${n-1}.`);const r=e[0];e.forEach((s,o)=>{for(let a=0;a<n;a++)p(a===t||s[a]===r[a],()=>`Error in concat${n}D: Shape of tensors[${o}] (${s}) does not match the shape of the rest (${r}) along the non-concatenated axis ${o}.`)})}function rd(e,t){const n=e[0].slice();for(let r=1;r<e.length;r++)n[t]+=e[r][t];return n}/**
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
 */var kt;(function(e){e[e.FIRST_DIM_SIZE=0]="FIRST_DIM_SIZE",e[e.VALUE_ROWIDS=1]="VALUE_ROWIDS",e[e.ROW_LENGTHS=2]="ROW_LENGTHS",e[e.ROW_SPLITS=3]="ROW_SPLITS",e[e.ROW_LIMITS=4]="ROW_LIMITS",e[e.ROW_STARTS=5]="ROW_STARTS"})(kt||(kt={}));function sd(e,t,n){let r=new Array;if(n==null&&t==null)return r;if(t==null)for(;r.length<e+n.length;)r.push(-1);else r=t.slice();if(n==null)return r;if(e+n.length!==r.length)throw new Error(`rt input.shape and shape=${t} are incompatible: rt input.rank = ${e+n.length}, but shape.rank = ${r.length}`);for(let s=1;s<n.length;++s){const o=n[s],a=r[r.length-n.length+s],i=r[a];if(o>=0)if(i>=0){if(i!==o)throw new Error(`rt input.shape and shape=${t} are incompatible: rt input.shape[${s+e}] = ${o} but shape[${s+e}] = ${i}`)}else r[a]=o}return r}function od(e){const t={FIRST_DIM_SIZE:kt.FIRST_DIM_SIZE,VALUE_ROWIDS:kt.VALUE_ROWIDS,ROW_LENGTHS:kt.ROW_LENGTHS,ROW_SPLITS:kt.ROW_SPLITS,ROW_LIMITS:kt.ROW_LIMITS,ROW_STARTS:kt.ROW_STARTS},n=[];for(const r of e)if(r in t)n.push(t[r]);else break;return n}function ad(e){return e.length===0?0:e[0]===kt.FIRST_DIM_SIZE?e.length-1:e.length}function id(e,t){if(e==null||t==null)return;const n=e.length,r=t.length;if(n>=r)throw new Error(`defaultValue.shape=${e} and ragged tensor flatValues.shape=${t}, are incompatible: defaultValue.rank = ${n} must be less than ragged tensor input flatValues.rank = ${r})`);for(let s=0;s<Math.min(n,r-1);++s){const o=e[s],a=t[s+1];if(o>=0&&a>=0&&o!==1&&o!==a)throw new Error(`defaultValue.shape=${e}, and ragged tensor input flatValues.shape=${t} are incompatible: defaultValue.shape[${s-e.length}] = ${o} but ragged tensor input.flatValues.shape[${s-e.length}] = ${a}`)}}/**
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
 */const Xn=30;function cd(e){return e<=Xn?e:Ze(e,Math.floor(Math.sqrt(e)))}/**
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
 */function ud(e,t,n){const r=n*(typeof e=="number"?e:e[0]),s=t*(typeof e=="number"?e:e[1]);return[r,s]}/**
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
 */function ld(e,t,n,r=!0){let s=[];if(r)s=s.concat(t.slice(0)),s.push(e[0]/n),s=s.concat(e.slice(1));else{s=s.concat(e[0]);const o=t.length;for(let a=0;a<o;++a)s=s.concat([e[a+1]/t[a],t[a]]);s=s.concat(e.slice(o+1))}return s}function hd(e,t,n=!0){const r=[];if(n){r.push(t);for(let s=t+1;s<e;++s)s<=2*t?(r.push(s),r.push(s-(t+1))):r.push(s)}else{const s=[],o=[];for(let a=1;a<e;++a)a>=t*2+1||a%2===1?o.push(a):s.push(a);r.push(...s),r.push(0),r.push(...o)}return r}function fd(e,t,n,r=!0){const s=[];r?s.push(e[0]/n):s.push(e[0]*n);for(let o=1;o<e.length;++o)o<=t.length?r?s.push(t[o-1]*e[o]):s.push(e[o]/t[o-1]):s.push(e[o]);return s}function pd(e,t){const n=[0];for(let r=0;r<t;++r)n.push(e[r][0]);return n}function dd(e,t,n){const r=e.slice(0,1);for(let s=0;s<n;++s)r.push(e[s+1]-t[s][0]-t[s][1]);return r}/**
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
 */const Ia=1.7580993408473768,Sa=1.0507009873554805;/**
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
 */const gd=.3275911,md=.254829592,bd=-.284496736,yd=1.421413741,kd=-1.453152027,wd=1.061405429;/**
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
 */function xd(e,t){if(e.length!==t.length)throw new Error(`Cannot merge real and imag arrays of different lengths. real:${e.length}, imag: ${t.length}.`);const n=new Float32Array(e.length*2);for(let r=0;r<n.length;r+=2)n[r]=e[r/2],n[r+1]=t[r/2];return n}function $d(e){const t=new Float32Array(e.length/2),n=new Float32Array(e.length/2);for(let r=0;r<e.length;r+=2)t[r/2]=e[r],n[r/2]=e[r+1];return{real:t,imag:n}}function Id(e){const t=Math.ceil(e.length/4),n=new Float32Array(t),r=new Float32Array(t);for(let s=0;s<e.length;s+=4)n[Math.floor(s/4)]=e[s],r[Math.floor(s/4)]=e[s+1];return{real:n,imag:r}}function Sd(e){const t=Math.floor(e.length/4),n=new Float32Array(t),r=new Float32Array(t);for(let s=2;s<e.length;s+=4)n[Math.floor(s/4)]=e[s],r[Math.floor(s/4)]=e[s+1];return{real:n,imag:r}}function Ed(e,t){const n=e[t*2],r=e[t*2+1];return{real:n,imag:r}}function vd(e,t,n,r){e[r*2]=t,e[r*2+1]=n}function Dd(e,t){const n=new Float32Array(e/2),r=new Float32Array(e/2);for(let s=0;s<Math.ceil(e/2);s++){const o=(t?2:-2)*Math.PI*(s/e);n[s]=Math.cos(o),r[s]=Math.sin(o)}return{real:n,imag:r}}function Td(e,t,n){const r=(n?2:-2)*Math.PI*(e/t),s=Math.cos(r),o=Math.sin(r);return{real:s,imag:o}}/**
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
 */const Xe="->",Nd=/->/g,pr=",",dr="...";function Ad(e,t){e=e.replace(/\s/g,"");const n=(e.length-e.replace(Nd,"").length)/Xe.length;if(n<1)throw new Error("Equations without an arrow are not supported.");if(n>1)throw new Error(`Equation must contain exactly one arrow ("${Xe}").`);const[r,s]=e.split(Xe);p(r.indexOf(dr)===-1,()=>`The ellipsis notation ("${dr}") is not supported yet.`);const o=r.split(pr),a=o.length;if(t!==a)throw new Error(`Expected ${a} input tensors, received ${t}`);if(a>2)throw new Error("Support for more than 2 input tensors is not implemented yet.");const i=[];for(let f=0;f<s.length;++f){const m=s[f];if(!o.some(w=>w.indexOf(m)!==-1))throw new Error(`Output subscripts contain the label ${m} not present in the input subscripts.`);i.indexOf(m)===-1&&i.push(m)}for(let f=0;f<r.length;++f){const m=r[f];i.indexOf(m)===-1&&m!==pr&&i.push(m)}const c=new Array(o.length);for(let f=0;f<a;++f){if(new Set(o[f].split("")).size!==o[f].length)throw new Error(`Found duplicate axes in input component ${o[f]}. Support for duplicate axes in input is not implemented yet.`);c[f]=[];for(let m=0;m<o[f].length;++m)c[f].push(i.indexOf(o[f][m]))}const u=i.length,h=s.length,l=[];for(let f=h;f<u;++f)l.push(f);return{allDims:i,summedDims:l,idDims:c}}function _d(e,t){let n=new Array(e);n.fill(-1);for(let s=0;s<t.length;++s)n[t[s]]=s;const r=[];for(let s=0;s<e;++s)n[s]===-1&&r.push(s);return n=n.filter(s=>s!==-1),{permutationIndices:n,expandDims:r}}function Cd(e,t,n){const r=new Array(e);for(let s=0;s<n.length;++s){const o=n[s].shape;for(let a=0;a<t[s].length;++a)r[t[s][a]]===void 0?r[t[s][a]]=o[a]:p(r[t[s][a]]===o[a],()=>`Expected dimension ${r[t[s][a]]} at axis ${a} of input shaped ${JSON.stringify(o)}, but got dimension ${o[a]}`)}}function Fd(e,t){const n=e,r=[];let s=0;e.length===0&&n.push(-1),s=e.length+1;for(let a=0;a<s;++a)r.push([]);const o=[];for(let a=0;a<n.length;++a){const i=n[a],c=Bd(t,i);for(const u of c)o.indexOf(u)===-1&&(r[a].push(u),o.push(u))}return{path:n,steps:r}}function Md(e){return e.every((t,n)=>t===n)}function Bd(e,t){const n=[];for(let r=0;r<e.length;++r)(e[r].length===0||e[r].indexOf(t)!==-1||t===-1)&&n.push(r);return n}function Rd(e,t,n=0){let r=[];if(typeof t=="number")p(e.shape[n]%t===0,()=>"Number of splits must evenly divide the axis."),r=new Array(t).fill(e.shape[n]/t);else{const s=t.reduce((a,i)=>(i===-1&&(a+=1),a),0);p(s<=1,()=>"There should be only one negative value in split array.");const o=t.indexOf(-1);if(o!==-1){const a=t.reduce((i,c)=>c>0?i+c:i);t[o]=e.shape[n]-a}p(e.shape[n]===t.reduce((a,i)=>a+i),()=>"The sum of sizes must match the size of the axis dimension."),r=t}return r}/**
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
 */function Gd(e){return`Received SparseTensor with denseShape[0] = 0 but
  indices.shape[0] = ${e}`}function Pd(e,t){return`indices(${e}, 0) is invalid: ${t} < 0`}function Od(e,t,n){return`indices(${e}, 0) is invalid: ${t} >= ${n}`}/**
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
 */function Ld(e,t){return`only one output dimension may be -1, not both ${e} and ${t}`}function Kd(e,t){return`size ${e} must be non-negative, not ${t}`}function Wd(){return"reshape cannot infer the missing input size for an empty tensor unless all specified input sizes are non-zero"}function zd(e,t){const n=Z(e),r=Z(t);return`Input to reshape is a SparseTensor with ${n}
  dense values, but the requested shape requires a multiple of ${r}. inputShape=${e} outputShape= ${t}`}function qd(e,t){const n=Z(e),r=Z(t);return`Input to reshape is a tensor with ${n} dense values, but the requested shape has ${r}. inputShape=${e} outputShape=${t}`}/**
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
 */function Vd(){return"segment ids must be >= 0"}function Ud(){return"segment ids are not increasing"}function Hd(e,t){return`Segment id ${e} out of range [0, ${t}), possibly because segmentIds input is not sorted.`}function jd(e,t,n){return`Bad: indices[${e}] == ${t} out of range [0, ${n})`}/**
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
 */function Xd(e,t){let n=!1,r;for(e<=Xn?(r=e,n=!0):r=Ze(e,Math.floor(Math.sqrt(e)));!n;)r>t||r===e?n=!0:r=Ze(e,r+1);return r}function Jd(e,t,n){const r=[],s=e.length;for(let o=0;o<s;o++)o!==t?r.push(e[o]):r.push(n);return r}function Yd(e,t,n,r){const s=t.shape.length,o=e.shape.length;if(r!==0&&(r<-s||r>s))throw new Error(`Expect batchDims in the range of [-${s}, ${s}], but got ${r}`);if(r<0&&(r+=s),r>o)throw new Error(`batchDims (${r}) must be less than rank(x) (
    ${o}).`);if(n<r)throw new Error(`batchDims (${r}) must be less than or equal to axis (${n}).`);for(let l=0;l<r;++l)if(e.shape[l]!==t.shape[l])throw new Error(`x.shape[${l}]: ${e.shape[l]} should be equal to indices.shape[${l}]: ${t.shape[l]}.`);const a=e.shape[n],i=[];let c=1,u=1,h=1;for(let l=0;l<r;++l)i.push(e.shape[l]),c*=e.shape[l];for(let l=r;l<n;l++)i.push(e.shape[l]),u*=e.shape[l];for(let l=r;l<s;l++)i.push(t.shape[l]);for(let l=n+1;l<o;l++)i.push(e.shape[l]),h*=e.shape[l];return{batchSize:c,sliceSize:h,outerSize:u,dimSize:a,outputShape:i}}const Zd=Object.freeze(Object.defineProperty({__proto__:null,collectGatherOpShapeInfo:Yd,computeOutShape:Jd,segOpComputeOptimalWindowSize:Xd},Symbol.toStringTag,{value:"Module"}));/**
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
 */function Qd(e){try{return e.map(t=>en(t))}catch(t){throw new Error(`Failed to decode encoded string bytes into utf-8, error: ${t}`)}}function tg(e){return e.map(t=>vn(t))}const Ty=Object.freeze(Object.defineProperty({__proto__:null,ERF_A1:md,ERF_A2:bd,ERF_A3:yd,ERF_A4:kd,ERF_A5:wd,ERF_P:gd,PARALLELIZE_THRESHOLD:Xn,get RowPartitionType(){return kt},SELU_SCALE:Sa,SELU_SCALEALPHA:Ia,applyActivation:Vn,assertAndGetBroadcastShape:z,assertAxesAreInnerMostDims:kl,assertParamsConsistent:nd,assignToTypedArray:vd,axesAreInnerMostDims:Bn,calculateShapes:Kf,checkEinsumDimSizes:Cd,checkPadOnDimRoundingMode:st,combineLocations:Po,combineRaggedTensorToTensorShapes:sd,complexWithEvenIndex:Id,complexWithOddIndex:Sd,computeConv2DInfo:Re,computeConv3DInfo:Ao,computeDefaultPad:Nn,computeDilation2DInfo:hu,computeOptimalWindowSize:cd,computeOutAndReduceShapes:Oo,computeOutShape:rd,computePool2DInfo:No,computePool3DInfo:fu,convertConv2DDataFormat:_o,decodeEinsumEquation:Ad,eitherStridesOrDilationsAreOne:Et,expandShapeToKeepDim:Qt,exponent:Td,exponents:Dd,fromStringArrayToUint8:tg,fromUint8ToStringArray:Qd,getAxesPermutation:Rn,getBroadcastDims:cl,getComplexWithIndex:Ed,getEinsumComputePath:Fd,getEinsumPermutation:_d,getFusedBiasGradient:qn,getFusedDyActivation:zn,getImageCenter:ud,getInnerMostAxes:wl,getPermuted:hd,getRaggedRank:ad,getReductionAxes:J,getReshaped:ld,getReshapedPermuted:fd,getRowPartitionTypesHelper:od,getSliceBeginCoords:pd,getSliceSize:dd,getSparseFillEmptyRowsIndicesDenseShapeMismatch:Gd,getSparseFillEmptyRowsNegativeIndexErrorMessage:Pd,getSparseFillEmptyRowsOutOfRangeIndexErrorMessage:Od,getSparseReshapeEmptyTensorZeroOutputDimErrorMessage:Wd,getSparseReshapeInputOutputMismatchErrorMessage:qd,getSparseReshapeInputOutputMultipleErrorMessage:zd,getSparseReshapeMultipleNegativeOneOutputDimErrorMessage:Ld,getSparseReshapeNegativeOutputDimErrorMessage:Kd,getSparseSegmentReductionIndicesOutOfRangeErrorMessage:jd,getSparseSegmentReductionNegativeSegmentIdsErrorMessage:Vd,getSparseSegmentReductionNonIncreasingSegmentIdsErrorMessage:Ud,getSparseSegmentReductionSegmentIdOutOfRangeErrorMessage:Hd,getUndoAxesPermutation:Oe,isIdentityPermutation:Md,log:qi,mergeRealAndImagArrays:xd,prepareAndValidate:zp,prepareSplitSize:Rd,segment_util:Zd,shouldFuse:Un,slice_util:Qp,splitRealAndImagArrays:$d,stridesOrDilationsArePositive:Lt,tupleValuesAreOne:Ot,upcastType:Dn,validateDefaultValueShape:id,validateInput:Lf,validateUpdateShape:oa,warn:Tt},Symbol.toStringTag,{value:"Module"}));/**
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
 */Wp();/**
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
 */const Ea={kernelName:Dr,inputsToSave:["x"],gradFunc:(e,t)=>{const[n]=t;return{x:()=>x(e,ke(D(n,"float32"),-1))}}};/**
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
 */const eg={kernelName:Tr,inputsToSave:["x"],gradFunc:(e,t)=>{const[n]=t;return{x:()=>{const r=q(D(n,"float32")),s=lt(B(L(1),r));return tt(C(e,s))}}}};/**
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
 */const ng={kernelName:Nr,inputsToSave:["x"],gradFunc:(e,t)=>{const[n]=t;return{x:()=>{const r=lt(B(q(D(n,"float32")),1));return C(e,r)}}}};/**
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
 */const rg={kernelName:xn,inputsToSave:["a","b"],gradFunc:(e,t)=>{const[n,r]=t,s=z(n.shape,r.shape);return{a:()=>{let i=e;const c=J(n.shape,s);return c.length>0&&(i=_(i,c)),y(i,n.shape)},b:()=>{let i=e;const c=J(r.shape,s);return c.length>0&&(i=_(i,c)),y(i,r.shape)}}}};/**
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
 */const sg={kernelName:ja,saveAllInputs:!0,gradFunc:(e,t)=>{const n={};return t.forEach((r,s)=>{n[s]=()=>e.clone()}),n}};/**
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
 */const og={kernelName:Ar,inputsToSave:["x"],gradFunc:(e,t)=>{const[n]=t;return{x:()=>M(n)}}};/**
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
 */const ag={kernelName:_r,inputsToSave:["x"],gradFunc:(e,t)=>{const[n]=t;return{x:()=>M(n)}}};/**
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
 */const ig={kernelName:Cr,inputsToSave:["x"],gradFunc:(e,t)=>{const[n]=t;return{x:()=>C(e,lt(B(L(1),q(D(n,"float32")))))}}};/**
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
 */const cg={kernelName:Fr,inputsToSave:["x"],gradFunc:(e,t)=>{const[n]=t;return{x:()=>{const r=lt(N(L(1),q(D(n,"float32"))));return C(e,r)}}}};/**
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
 */const ug={kernelName:Rr,inputsToSave:["a","b"],gradFunc:(e,t)=>{const[n,r]=t,s=z(n.shape,r.shape);return{a:()=>{const i=N(q(n),q(r));let c=x(e,C(r,i));const u=J(n.shape,s);return u.length>0&&(c=_(c,u)),y(c,n.shape)},b:()=>{const i=N(q(n),q(r));let c=tt(x(e,C(n,i)));const u=J(r.shape,s);return u.length>0&&(c=_(c,u)),y(c,r.shape)}}}};/**
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
 */const lg={kernelName:Mr,inputsToSave:["x"],gradFunc:(e,t)=>{const[n]=t;return{x:()=>C(e,N(q(D(n,"float32")),1))}}};/**
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
 */const hg={kernelName:Br,inputsToSave:["x"],gradFunc:(e,t)=>{const[n]=t;return{x:()=>C(e,B(L(1),q(D(n,"float32"))))}}};/**
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
 */function fg(e,t,n,r,s,o){const a=d(e,"dy","avgPool3dGrad"),i=d(t,"input","avgPool3dGrad");let c=a,u=i,h=!1;i.rank===4&&(h=!0,c=y(a,[1,a.shape[0],a.shape[1],a.shape[2],a.shape[3]]),u=y(i,[1,i.shape[0],i.shape[1],i.shape[2],i.shape[3]])),p(c.rank===5,()=>`Error in avgPool3dGrad: dy must be rank 5 but got rank ${c.rank}.`),p(u.rank===5,()=>`Error in avgPool3dGrad: input must be rank 5 but got rank ${u.rank}.`),st("avgPool3dGrad",s,o);const l={dy:c,input:u},f={filterSize:n,strides:r,pad:s,dimRoundingMode:o},m=g.runKernel(Za,l,f);return h?y(m,[m.shape[1],m.shape[2],m.shape[3],m.shape[4]]):m}const pg=b({avgPool3dGrad_:fg});/**
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
 */const dg={kernelName:Pr,inputsToSave:["x"],gradFunc:(e,t,n)=>{const[r]=t,{filterSize:s,strides:o,pad:a,dimRoundingMode:i}=n;return{x:()=>pg(e,r,s,o,a,i)}}};/**
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
 */function gg(e,t,n,r,s){const o=d(e,"dy","avgPoolGrad"),a=d(t,"input","avgPoolGrad");p(a.rank===o.rank,()=>`Rank of input (${a.rank}) does not match rank of dy (${o.rank})`);let i=a,c=o,u=!1;a.rank===3&&(u=!0,i=y(a,[1,a.shape[0],a.shape[1],a.shape[2]]),c=y(o,[1,o.shape[0],o.shape[1],o.shape[2]])),p(c.rank===4,()=>`Error in avgPoolGrad: dy must be rank 4 but got rank ${c.rank}.`),p(i.rank===4,()=>`Error in avgPoolGrad: input must be rank 4 but got rank ${i.rank}.`);const h={dy:c,input:i},l={filterSize:n,strides:r,pad:s},f=g.runKernel(Ya,h,l);return u?y(f,[f.shape[1],f.shape[2],f.shape[3]]):f}const mg=b({avgPoolGrad_:gg});/**
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
 */const bg={kernelName:Gr,inputsToSave:["x"],gradFunc:(e,t,n)=>{const[r]=t,{filterSize:s,strides:o,pad:a}=n;return{x:()=>mg(e,r,s,o,a)}}};/**
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
 */const yg={kernelName:Or,inputsToSave:["a","b"],gradFunc:(e,t,n)=>{const[r,s]=t,{transposeA:o,transposeB:a}=n;return!o&&!a?{a:()=>R(e,s,!1,!0),b:()=>R(r,e,!0,!1)}:!o&&a?{a:()=>R(e,s,!1,!1),b:()=>R(e,r,!0,!1)}:o&&!a?{a:()=>R(s,e,!1,!0),b:()=>R(r,e,!1,!1)}:{a:()=>R(s,e,!0,!0),b:()=>R(e,r,!0,!0)}}};/**
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
 */const kg={kernelName:Lr,gradFunc:(e,t,n)=>{const{blockShape:r,crops:s}=n;return{x:()=>Kn(e,r,s)}}};/**
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
 */const wg={kernelName:ti,gradFunc:(e,t,n)=>{const r=n,s=r.inputShape,o=r.shape,a=Array.from(o);for(let c=s.length-1;c>=0;c--)if(s[c]===o[c])a[c]=1;else if(s[c]!==1)throw new Error(`broadcastTo(): [${s}] cannot be broadcast to [${o}].`);const i=[];for(let c=0;c<a.length;c++)a[c]>1&&i.push(c);return{x:()=>_(e,i,!0)}}};/**
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
 */const xg={kernelName:$n,gradFunc:e=>({x:()=>e.clone()})};/**
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
 */const $g={kernelName:Kr,gradFunc:e=>({x:()=>M(e)})};/**
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
 */const Ig={kernelName:Wr,inputsToSave:["x"],gradFunc:(e,t,n)=>{const[r]=t,{clipValueMin:s,clipValueMax:o}=n;return{x:()=>ft(ne(ye(r,s),ae(r,o)),e,M(e))}}};/**
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
 */const Sg={kernelName:zr,inputsToSave:["x"],gradFunc:Ea.gradFunc};/**
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
 */const Eg={kernelName:qr,saveAllInputs:!0,gradFunc:(e,t,n)=>{const r=t.map(c=>c.shape),{axis:s}=n,o=mt(s,t[0].shape)[0],a=r.map(c=>c[o]);return se(e,a,o).map(c=>()=>c)}};/**
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
 */const vg={kernelName:Vr,inputsToSave:["x","filter"],gradFunc:(e,t,n)=>{const[r,s]=t,{dilations:o,strides:a,pad:i,dataFormat:c}=n;return p(Ot(o),()=>`Error in gradient of conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${o}'`),{x:()=>Cn(r.shape,e,s,a,i,c),filter:()=>Wn(r,e,s.shape,a,i,c)}}};/**
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
 */const Dg={kernelName:Ur,inputsToSave:["dy","filter"],gradFunc:(e,t,n)=>{const[r,s]=t,{strides:o,pad:a,dataFormat:i,dimRoundingMode:c}=n;return{dy:()=>be(e,s,o,a,i,1,c),filter:()=>Wn(e,r,s.shape,o,a,i,c)}}};/**
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
 */function Tg(e,t,n,r,s){let o=e;e.rank===4&&(o=y(e,[1,e.shape[0],e.shape[1],e.shape[2],e.shape[3]]));let a=t;a.rank===4&&(a=y(t,[1,t.shape[0],t.shape[1],t.shape[2],t.shape[3]])),p(o.rank===5,()=>`Error in conv3dDerFilter: input must be rank 5, but got shape ${o.shape}.`),p(a.rank===5,()=>`Error in conv3dDerFilter: dy must be rank 5, but got shape ${a.shape}.`),p(n.length===5,()=>`Error in conv3dDerFilter: filterShape must be length 5, but got ${n}.`),p(o.shape[4]===n[3],()=>`Error in conv3dDerFilter: depth of input ${o.shape[4]}) must match input depth in filter (${n[3]}.`),p(a.shape[4]===n[4],()=>`Error in conv3dDerFilter: depth of dy (${a.shape[4]}) must match output depth for filter (${n[4]}).`);const i={x:o,dy:a},c={strides:r,pad:s,filterShape:n};return g.runKernel(ri,i,c)}const Ng=b({conv3DBackpropFilter_:Tg});/**
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
 */const Ag={kernelName:Hr,inputsToSave:["x","filter"],gradFunc:(e,t,n)=>{const{dilations:r,strides:s,pad:o}=n;p(Ot(r),()=>`Error in gradient of conv3D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${r}'`);const[a,i]=t;return{x:()=>Fo(a.shape,e,i,s,o),filter:()=>Ng(a,e,i.shape,s,o)}}};/**
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
 */const _g={kernelName:jr,inputsToSave:["x"],gradFunc:(e,t)=>{const[n]=t;return{x:()=>x(tt(ta(D(n,"float32"))),e)}}};/**
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
 */const Cg={kernelName:Xr,inputsToSave:["x"],gradFunc:(e,t)=>{const[n]=t;return{x:()=>x(ea(D(n,"float32")),e)}}};/**
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
 */const Fg={kernelName:Jr,inputsToSave:["x"],gradFunc:(e,t,n)=>{const[r]=t,{axis:s,exclusive:o,reverse:a}=n;return{x:()=>{const i=Rn([s],r.rank);let c=Bo(e,s,o,!a);return i!=null&&(c=It(c,i)),c}}}};/**
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
 */const Mg={kernelName:Yr,inputsToSave:["x","filter"],gradFunc:(e,t,n)=>{const{dilations:r,strides:s,pad:o,dimRoundingMode:a}=n,i=r??[1,1];p(Ot(i),()=>`Error in gradient of depthwiseConv2dNative: dilation rates greater than 1 are not yet supported. Got dilations '${i}'`);const[c,u]=t;return p(c.rank===4,()=>`Error in gradient of depthwiseConv2dNative: input must be rank 4, but got rank ${c.rank}.`),p(u.rank===4,()=>`Error in gradient of depthwiseConv2dNative: filter must be rank 4, but got rank ${u.rank}.`),p(c.shape[3]===u.shape[2],()=>`Error in gradient of depthwiseConv2d: number of input channels (${c.shape[3]}) must match the inChannels dimension in filter ${u.shape[2]}.`),p(Et(s,i),()=>`Error in gradient of depthwiseConv2d: Either strides or dilations must be  1. Got strides ${s} and dilations '${i}'.`),st("depthwiseConv2d",o,a),{x:()=>Xf(c.shape,e,u,s,o,i,a),filter:()=>Hf(c,e,u.shape,s,o,i,a)}}};/**
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
 */const Bg={kernelName:Zr,inputsToSave:["x","filter"],gradFunc:(e,t,n)=>{const[r,s]=t,o={x:r,filter:s,dy:e},a={x:r,filter:s,dy:e};return{x:()=>g.runKernel(hi,o,n),filter:()=>g.runKernel(fi,a,n)}}};/**
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
 */const Rg={kernelName:ts,outputsToSave:[!0],gradFunc:(e,t)=>{const[n]=t,r={dy:e,y:n};return{x:()=>g.runKernel(pi,r)}}};/**
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
 */const Gg={kernelName:es,inputsToSave:["x"],gradFunc:(e,t)=>{const[n]=t,r=x(_t(tt(q(n))),2/Math.sqrt(Math.PI));return{x:()=>x(e,r)}}};/**
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
 */const Pg={kernelName:ns,outputsToSave:[!0],gradFunc:(e,t)=>{const[n]=t;return{x:()=>x(e,n)}}};/**
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
 */const Og={kernelName:rs,inputsToSave:["input"],gradFunc:(e,t)=>{const[n]=t;return{input:()=>y(e,n.shape)}}};/**
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
 */const Lg={kernelName:ss,inputsToSave:["x"],gradFunc:(e,t)=>{const[n]=t;return{x:()=>x(e,_t(n))}}};/**
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
 */const Kg={kernelName:os,gradFunc:e=>({x:()=>M(e)})};/**
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
 */const Wg={kernelName:as,inputsToSave:["a","b"],gradFunc:(e,t)=>{const[n,r]=t,s=z(n.shape,r.shape);return{a:()=>{const i=C(e,D(r,"float32")),c=J(n.shape,s);return c.length>0?y(_(i,c),n.shape):i},b:()=>{let i=x(e,D(n,"float32"));const c=J(r.shape,s);c.length>0&&(i=y(_(i,c),r.shape));const u=q(r);return tt(C(i,D(u,"float32")))}}}};/**
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
 */const zg={kernelName:is,inputsToSave:["x","mean","variance","scale"],gradFunc:(e,t,n)=>{const{varianceEpsilon:r}=n,[s,o,a,i]=t,c=i??L(1),u=J(o.shape,s.shape),h=[];if(o.rank===1){for(let v=0;v<s.shape.length-1;++v)h.push(s.shape[v]);h.push(1)}const l=B(s,o),f=x(e,c),m=Qo(N(a,L(r))),w=x(x(x(m,m),m),L(-.5));return{x:()=>o.rank===1?y(x(x(e,Jt(y(m,[1,1,1,o.shape[0]]),h)),c),s.shape):y(x(x(e,m),c),s.shape),mean:()=>{let v=x(x(m,L(-1)),f);return o.rank===1&&(v=_(v,u)),y(v,o.shape)},variance:()=>{let v=x(x(w,l),f);return o.rank===1&&(v=_(v,u)),y(v,o.shape)},scale:()=>{const v=x(l,m);let T=x(e,v);return o.rank===1&&(T=_(T,u)),y(T,o.shape)},offset:()=>{let v=e;return o.rank===1&&(v=_(v,u)),y(v,o.shape)}}}};/**
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
 */const qg={kernelName:cs,inputsToSave:["x","indices"],gradFunc:(e,t,n)=>{const[r,s]=t,{axis:o}=n,a=mt(o,r.shape)[0];return{x:()=>{const c=r.shape,u=s.size,h=c.slice(0,a),l=h.length,f=c.slice(o,c.length).slice(1),m=f.length,w=gr(0,l),I=gr(l+1,l+1+m),$=mr([h,[u],f]),E=y(e,$),F=y(s,[u]),S=mr([[l],w,I]),v=It(E,S);let T=sa(v,F,r.shape[a]);const A=Oe(S);return T=It(T,A),T},indices:()=>s}}};function gr(e,t){const n=[];for(let r=e;r<t;++r)n.push(r);return n}function mr(e){const t=[];for(let n=0;n<e.length;++n)for(let r=0;r<e[n].length;++r)t.push(e[n][r]);return t}/**
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
 */const Vg={kernelName:us,inputsToSave:["a","b"],gradFunc:(e,t)=>{const[n,r]=t;return{a:()=>M(n),b:()=>M(r)}}};/**
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
 */const Ug={kernelName:In,gradFunc:e=>({x:()=>D(e,"float32")})};/**
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
 */const Hg={kernelName:ls,gradFunc:e=>({x:()=>M(e)})};/**
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
 */const jg={kernelName:hs,gradFunc:e=>({x:()=>M(e)})};/**
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
 */const Xg={kernelName:fs,gradFunc:e=>({x:()=>M(e)})};/**
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
 */const Jg={kernelName:ps,inputsToSave:["x"],gradFunc:(e,t,n)=>{const[r]=t,{alpha:s}=n,o=vt(r,0);return{x:()=>ft(o,e,x(e,s))}}};/**
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
 */const Yg={kernelName:gs,inputsToSave:["x"],gradFunc:(e,t)=>{const[n]=t;return{x:()=>C(e,N(n,1))}}};/**
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
 */const Zg={kernelName:ds,inputsToSave:["x"],gradFunc:(e,t)=>{const[n]=t;return{x:()=>C(e,D(n,"float32"))}}};/**
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
 */const Qg={kernelName:vi,inputsToSave:[],outputsToSave:[!0],gradFunc:(e,t,n)=>{const[r]=t,{axis:s}=n;return{logits:()=>{const a=_t(r);return B(e,x(_(e,s,!0),a))}}}};/**
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
 */function tm(e,t,n,r=5,s=1,o=1,a=.5){const i={x:e,y:t,dy:n},c={depthRadius:r,bias:s,alpha:o,beta:a};return g.runKernel(Di,i,c)}const em=b({localResponseNormalizationBackprop_:tm});/**
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
 */const nm={kernelName:ms,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(e,t,n)=>{const[r,s]=t,{depthRadius:o,bias:a,alpha:i,beta:c}=n;return{x:()=>em(r,s,e,o,a,i,c)}}};/**
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
 */function va(e,t,n,r){return t.rank<n.rank&&(t=y(t,Qt(t.shape,r))),e.rank<n.rank&&(e=y(e,Qt(e.shape,r))),{x:()=>x(e,D(Mn(n,t),e.dtype))}}/**
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
 */const br={kernelName:bs,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(e,t,n)=>{const r=n,{reductionIndices:s}=r,o=t[0],a=t[1],i=mt(s,o.shape),c=va(e,a,o,i);return{x:()=>c.x()}}};/**
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
 */const rm={kernelName:ys,inputsToSave:["a","b"],gradFunc:(e,t)=>{const[n,r]=t;return{a:()=>x(e,D(ye(n,r),"float32")),b:()=>x(e,D(zo(n,r),"float32"))}}};/**
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
 */function sm(e,t,n,r,s,o,a){const i=d(e,"dy","maxPool3dGrad"),c=d(t,"input","maxPool3dGrad"),u=d(n,"output","maxPool3dGrad");let h=i,l=c,f=u,m=!1;c.rank===4&&(m=!0,h=y(i,[1,i.shape[0],i.shape[1],i.shape[2],i.shape[3]]),l=y(c,[1,c.shape[0],c.shape[1],c.shape[2],c.shape[3]]),f=y(u,[1,u.shape[0],u.shape[1],u.shape[2],u.shape[3]])),p(h.rank===5,()=>`Error in maxPool3dGrad: dy must be rank 5 but got rank ${h.rank}.`),p(l.rank===5,()=>`Error in maxPool3dGrad: input must be rank 5 but got rank ${l.rank}.`),p(f.rank===5,()=>`Error in maxPool3dGrad: output must be rank 5 but got rank ${f.rank}.`),st("maxPool3dGrad",o,a);const w={dy:h,input:l,output:f},I={filterSize:r,strides:s,pad:o,dimRoundingMode:a},$=g.runKernel(Ni,w,I);return m?y($,[$.shape[1],$.shape[2],$.shape[3],$.shape[4]]):$}const om=b({maxPool3dGrad_:sm});/**
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
 */const am={kernelName:ws,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(e,t,n)=>{const[r,s]=t,{filterSize:o,strides:a,pad:i,dimRoundingMode:c}=n;return{x:()=>om(e,r,s,o,a,i,c)}}};/**
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
 */function im(e,t,n,r,s,o,a){const i=d(e,"dy","maxPoolGrad"),c=d(t,"input","maxPoolGrad"),u=d(n,"output","maxPoolGrad");p(c.rank===i.rank,()=>`Rank of input (${c.rank}) does not match rank of dy (${i.rank})`),p(i.rank===4,()=>`Error in maxPoolGrad: dy must be rank 4 but got rank ${i.rank}.`),p(c.rank===4,()=>`Error in maxPoolGrad: input must be rank 4 but got rank ${c.rank}.`),st("maxPoolGrad",o,a);const h={dy:i,input:c,output:u},l={filterSize:r,strides:s,pad:o,dimRoundingMode:a};return g.runKernel(Ti,h,l)}const cm=b({maxPoolGrad_:im});/**
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
 */const um={kernelName:ks,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(e,t,n)=>{const[r,s]=t,{filterSize:o,strides:a,pad:i}=n;return{x:()=>cm(e,r,s,o,a,i)}}};/**
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
 */const lm={kernelName:xs,inputsToSave:["x"],gradFunc:(e,t,n)=>{const[r]=t,{axis:s}=n,o=mt(s,r.shape),i=Oo(r.shape,o)[1],c=Z(i);return{x:()=>{const h=r.shape.slice();o.forEach(m=>{h[m]=1});const l=y(e,h);return C(x(l,We(r.shape,"float32")),c)}}}};/**
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
 */const hm={kernelName:$s,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(e,t,n)=>{const r=n,{axis:s}=r,[o,a]=t,i=mt(s,o.shape),c=va(e,a,o,i);return{x:()=>c.x()}}};/**
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
 */const fm={kernelName:Is,inputsToSave:["a","b"],gradFunc:(e,t)=>{const[n,r]=t;return{a:()=>x(e,D(ae(n,r),"float32")),b:()=>x(e,D(vt(n,r),"float32"))}}};/**
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
 */const pm={kernelName:Ss,inputsToSave:["x"],gradFunc:(e,t,n)=>{const r=t[0],{paddings:s}=n,o=s.map(a=>a[0]);return{x:()=>V(e,o,r.shape)}}};/**
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
 */const dm={kernelName:Es,inputsToSave:["a","b"],gradFunc:(e,t)=>{const[n,r]=t,s=z(n.shape,r.shape);return{a:()=>{const i=J(n.shape,s);return i.length>0?y(_(e,i),n.shape):e},b:()=>{const i=x(e,tt(Gn(C(n,r)))),c=J(r.shape,s);return c.length>0?y(_(i,c),r.shape):i}}}};/**
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
 */const gm={kernelName:vs,inputsToSave:["a","b"],gradFunc:(e,t)=>{const[n,r]=t,s=z(n.shape,r.shape);return{a:()=>{const i=x(e,D(r,"float32")),c=J(n.shape,s);return c.length>0?y(_(i,c),n.shape):i},b:()=>{const i=x(e,D(n,"float32")),c=J(r.shape,s);return c.length>0?y(_(i,c),r.shape):i}}}};/**
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
 */const mm={kernelName:Ds,gradFunc:e=>({x:()=>tt(e)})};/**
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
 */const bm={kernelName:Ns,inputsToSave:["indices"],gradFunc:(e,t)=>{const n=t[0];return{indices:()=>re(n.shape,"float32")}}};/**
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
 */const ym={kernelName:Ts,gradFunc:e=>({x:()=>M(e)})};/**
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
 */const km={kernelName:As,saveAllInputs:!0,gradFunc:(e,t,n)=>{const{axis:r}=n;return ze(e,r).map(o=>()=>o)}};/**
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
 */const yr={kernelName:_s,inputsToSave:["x"],gradFunc:(e,t,n)=>{const r=t[0],{paddings:s}=n,o=s.map(a=>a[0]);return{x:()=>V(e,o,r.shape)}}};/**
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
 */const wm={kernelName:Cs,inputsToSave:["a","b"],outputsToSave:[!0],gradFunc:(e,t)=>{const[n,r,s]=t,o=n,a=r,i=z(o.shape,a.shape);return{a:()=>{const h=D(a,"float32");let l=x(e,x(h,te(o,B(h,L(1)))));const f=J(o.shape,i);return f.length>0&&(l=_(l,f)),y(l,o.shape)},b:()=>{const h=vt(o,0),l=ft(h,Ke(o),M(o));let f=x(e,x(s,l));const m=J(a.shape,i);return m.length>0&&(f=_(f,m)),y(f,a.shape)}}}};/**
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
 */const xm={kernelName:Fs,inputsToSave:["x","alpha"],gradFunc:(e,t)=>{const[n,r]=t,s=vt(n,0);return{x:()=>ft(s,e,x(e,r)),alpha:()=>{let o=ft(s,M(e),x(e,n));const a=J(r.shape,e.shape);return a.length>0&&(o=_(o,a)),y(o,r.shape)}}}};/**
 * @license
 * Copyright 2022 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $m(e,t,n){const r=e.shape.slice();r[n]=1;const s=y(t,r),o=hn(e,n,!0,!1),a=hn(e,n,!0,!0),i=x(o,a);return x(s,i)}function Im(e,t,n){const r=e.shape.length,s=r-n.length,o=Rn(n,r);let a=e;o!=null&&(a=It(e,o));const i=a.shape.slice(),u=i.splice(r-n.length,n.length).reduce((f,m)=>f*m,1);i.push(u);const h=a.reshape(i);let l=$m(h,t,s);if(l=l.reshape(a.shape),o!=null){const f=Oe(o);l=It(l,f)}return l}const Sm={kernelName:Ms,inputsToSave:["x"],gradFunc:(e,t,n)=>{const[r]=t,{axis:s}=n;let o=[];return s==null?o=r.shape.map((a,i)=>i):typeof s=="number"?o=[s]:o=s,{x:()=>Im(r,e,o)}}};/**
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
 */const Em={kernelName:Qr,inputsToSave:["a","b"],gradFunc:(e,t)=>{const[n,r]=t,s=z(n.shape,r.shape);return{a:()=>{const i=C(e,D(r,"float32")),c=J(n.shape,s);return c.length>0?y(_(i,c),n.shape):i},b:()=>{let i=x(e,D(n,"float32"));const c=J(r.shape,s);c.length>0&&(i=y(_(i,c),r.shape));const u=q(r);return tt(C(i,D(u,"float32")))}}}};/**
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
 */const vm={kernelName:Bs,inputsToSave:["x"],gradFunc:(e,t)=>{const[n]=t;return{x:()=>C(e,tt(q(n)))}}};/**
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
 */const Dm={kernelName:Ls,inputsToSave:["x"],gradFunc:(e,t)=>{const[n]=t,r=x(ae(n,6),ke(n));return{x:()=>x(e,D(r,"float32"))}}};/**
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
 */const Tm={kernelName:Rs,inputsToSave:["x"],gradFunc:(e,t)=>{const[n]=t;return{x:()=>x(e,D(ke(n),"float32"))}}};/**
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
 */const Nm={kernelName:Gs,inputsToSave:["x"],gradFunc:(e,t)=>{const[n]=t;return{x:()=>y(e,n.shape)}}};/**
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
 */const Am={kernelName:Os,inputsToSave:["images"],gradFunc:(e,t,n)=>{const[r]=t,s={dy:e,images:r};return{images:()=>g.runKernel(Gi,s,n)}}};/**
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
 */const _m={kernelName:Ps,inputsToSave:["images"],gradFunc:(e,t,n)=>{const[r]=t,s={dy:e,images:r};return{images:()=>g.runKernel(Ri,s,n)}}};/**
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
 */const Cm={kernelName:Ks,gradFunc:(e,t,n)=>{const{dims:r}=n,s=mt(r,e.shape);return{x:()=>_e(e,s)}}};/**
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
 */const Fm={kernelName:Ws,gradFunc:e=>({x:()=>M(e)})};/**
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
 */const Mm={kernelName:zs,inputsToSave:["x"],gradFunc:(e,t)=>{const[n]=t;return{x:()=>tt(C(e,x(te(n,1.5),2)))}}};/**
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
 */const Bm={kernelName:qs,inputsToSave:["condition"],gradFunc:(e,t)=>{const[n]=t;return{condition:()=>D(M(n),"float32"),t:()=>x(e,D(n,e.dtype)),e:()=>x(e,D(On(n),e.dtype))}}};/**
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
 */const Rm={kernelName:Vs,inputsToSave:["x"],gradFunc:(e,t)=>{const[n]=t;return{x:()=>{const r=vt(n,L(0)),s=L(Ia),o=L(Sa),a=x(e,o),i=x(x(e,s),_t(D(n,"float32")));return ft(r,a,i)}}}};/**
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
 */const Gm={kernelName:Js,outputsToSave:[!0],gradFunc:(e,t)=>{const[n]=t;return{x:()=>x(e,x(n,B(L(1),n)))}}};/**
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
 */const Pm={kernelName:Xs,gradFunc:e=>({x:()=>M(e)})};/**
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
 */const Om={kernelName:Hs,inputsToSave:["x"],gradFunc:(e,t)=>{const[n]=t;return{x:()=>x(Fn(D(n,"float32")),e)}}};/**
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
 */const Lm={kernelName:js,inputsToSave:["x"],gradFunc:(e,t)=>{const[n]=t;return{x:()=>x(Mo(D(n,"float32")),e)}}};/**
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
 */const Km={kernelName:Us,inputsToSave:["x"],gradFunc:(e,t,n)=>{const[r]=t,{begin:s,size:o}=n,a=r.shape,[i,c]=$a(r,s,o),u=[];for(let h=0;h<e.rank;h++)u.push([i[h],a[h]-i[h]-c[h]]);return{x:()=>Ho(e,u)}}};/**
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
 */const Wm={kernelName:no,outputsToSave:[!0],gradFunc:(e,t,n)=>{const[r]=t,{dim:s}=n,o=!0,a=x(e,r);return{logits:()=>B(a,x(_(a,[s],o),r))}}};/**
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
 */const zm={kernelName:Ys,inputsToSave:["x"],gradFunc:(e,t)=>{const[n]=t;return{x:()=>x(e,Ge(n))}}};/**
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
 */const kr={kernelName:to,gradFunc:(e,t,n)=>{const{blockShape:r,paddings:s}=n;return{x:()=>An(e,r,s)}}};/**
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
 */const wr={kernelName:eo,gradFunc:(e,t,n)=>{const{axis:r}=n;return{x:()=>pt(e,r)}}};/**
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
 */const qm={kernelName:Zs,inputsToSave:["x"],gradFunc:(e,t)=>{const[n]=t;return{x:()=>C(e,x(lt(D(n,"float32")),2))}}};/**
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
 */const Vm={kernelName:Pi,inputsToSave:["x"],gradFunc:(e,t)=>{const[n]=t;return{x:()=>x(e,x(D(n,"float32"),2))}}};/**
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
 */const Um={kernelName:ro,inputsToSave:["a","b"],gradFunc:(e,t)=>{const[n,r]=t,s=L(2);return{a:()=>x(e,x(s,B(n,r))),b:()=>x(e,x(s,B(r,n)))}}};/**
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
 */const Hm={kernelName:lo,gradFunc:e=>({x:()=>M(e)})};/**
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
 */const jm={kernelName:so,inputsToSave:["a","b"],gradFunc:(e,t)=>{const[n,r]=t,s=z(n.shape,r.shape);return{a:()=>{let i=e;const c=J(n.shape,s);return c.length>0&&(i=_(i,c)),y(i,n.shape)},b:()=>{let i=e;const c=J(r.shape,s);return c.length>0&&(i=_(i,c)),y(tt(i),r.shape)}}}};/**
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
 */const Xm={kernelName:Qs,inputsToSave:["x"],gradFunc:(e,t,n)=>{const[r]=t,s=r.shape.slice(),{axis:o}=n;mt(o,r.shape).forEach(u=>{s[u]=1});const i=y(e,s),c=x(i,We(r.shape,"float32"));return{x:()=>c}}};/**
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
 */const Jm={kernelName:oo,inputsToSave:["x"],gradFunc:(e,t)=>{const[n]=t;return{x:()=>C(e,q(Fn(n)))}}};/**
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
 */const Ym={kernelName:ao,outputsToSave:[!0],gradFunc:(e,t)=>{const[n]=t;return{x:()=>x(B(L(1),q(n)),e)}}};/**
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
 */const Zm={kernelName:Sn,inputsToSave:["x"],gradFunc:(e,t,n)=>{const[r]=t,{reps:s}=n;return{x:()=>{let a=M(r);if(r.rank===1)for(let i=0;i<s[0];++i)a=N(a,V(e,[i*r.shape[0]],[r.shape[0]]));else if(r.rank===2)for(let i=0;i<s[0];++i)for(let c=0;c<s[1];++c)a=N(a,V(e,[i*r.shape[0],c*r.shape[1]],[r.shape[0],r.shape[1]]));else if(r.rank===3)for(let i=0;i<s[0];++i)for(let c=0;c<s[1];++c)for(let u=0;u<s[2];++u)a=N(a,V(e,[i*r.shape[0],c*r.shape[1],u*r.shape[2]],[r.shape[0],r.shape[1],r.shape[2]]));else if(r.rank===4)for(let i=0;i<s[0];++i)for(let c=0;c<s[1];++c)for(let u=0;u<s[2];++u)for(let h=0;h<s[3];++h)a=N(a,V(e,[i*r.shape[0],c*r.shape[1],u*r.shape[2],h*r.shape[3]],[r.shape[0],r.shape[1],r.shape[2],r.shape[3]]));else throw new Error(`Gradient for tile operation is not implemented for rank-${r.rank} tensors yet.`);return a}}}};/**
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
 */const Qm={kernelName:$e,gradFunc:(e,t,n)=>{const r=n,{perm:s}=r,o=Oe(s);return{x:()=>It(e,o)}}};/**
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
 */const tb={kernelName:io,gradFunc:(e,t,n)=>{const r=n,{axis:s}=r;return{value:()=>oe(e,s)}}};/**
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
 */const eb={kernelName:co,inputsToSave:["segmentIds"],gradFunc:(e,t)=>{const[n]=t;return{x:()=>nb(e,n)}}};function nb(e,t){const n=Ln(t,M(t)),r=Ko(e,n);let s=ye(t,L(0,"int32"));const o=r.rank-s.rank;for(let i=0;i<o;++i)s=Dt(s,i+1);s=ne(s,We(r.shape,"bool"));const a=M(r);return ft(s,r,a)}/**
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
 */const rb={kernelName:uo,gradFunc:e=>({x:()=>M(e)})};/**
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
 */const sb=[Ea,eg,ng,rg,sg,og,ag,ig,cg,ug,lg,hg,dg,bg,yg,kg,wg,xg,$g,Ig,Sg,Eg,Dg,vg,Ag,_g,Cg,Fg,Mg,Bg,Em,Rg,Gg,Pg,Og,Lg,Wg,Kg,zg,qg,Vg,Ug,Hg,jg,Xg,Jg,Yg,Zg,Qg,nm,br,br,rm,am,um,lm,hm,fm,pm,dm,gm,mm,bm,ym,km,yr,yr,wm,xm,Sm,vm,Dm,Tm,Nm,Am,_m,Cm,Fm,Mm,Bm,Rm,Gm,Pm,Om,Lm,Km,Wm,zm,kr,kr,wr,wr,qm,Um,Vm,Hm,jm,Xm,Jm,Ym,Zm,Qm,tb,eb,rb];for(const e of sb)Vi(e);/**
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
 */k().prototype.abs=function(){return this.throwIfDisposed(),bt(this)};/**
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
 */k().prototype.acos=function(){return this.throwIfDisposed(),qc(this)};/**
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
 */k().prototype.acosh=function(){return this.throwIfDisposed(),Uc(this)};/**
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
 */k().prototype.add=function(e){return this.throwIfDisposed(),N(this,e)};/**
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
 */k().prototype.all=function(e,t){return this.throwIfDisposed(),jc(this,e,t)};/**
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
 */k().prototype.any=function(e,t){return this.throwIfDisposed(),Jc(this,e,t)};/**
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
 */k().prototype.argMax=function(e){return this.throwIfDisposed(),Zc(this,e)};/**
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
 */k().prototype.argMin=function(e){return this.throwIfDisposed(),tu(this,e)};/**
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
 */k().prototype.asScalar=function(){return this.throwIfDisposed(),p(this.size===1,()=>"The array must have only 1 element."),y(this,[])};/**
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
 */k().prototype.asType=function(e){return this.throwIfDisposed(),D(this,e)};/**
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
 */k().prototype.as1D=function(){return this.throwIfDisposed(),y(this,[this.size])};/**
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
 */k().prototype.as2D=function(e,t){return this.throwIfDisposed(),y(this,[e,t])};/**
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
 */k().prototype.as3D=function(e,t,n){return this.throwIfDisposed(),y(this,[e,t,n])};/**
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
 */k().prototype.as4D=function(e,t,n,r){return this.throwIfDisposed(),y(this,[e,t,n,r])};/**
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
 */k().prototype.as5D=function(e,t,n,r,s){return this.throwIfDisposed(),y(this,[e,t,n,r,s])};/**
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
 */k().prototype.asin=function(){return this.throwIfDisposed(),nu(this)};/**
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
 */k().prototype.asinh=function(){return this.throwIfDisposed(),su(this)};/**
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
 */k().prototype.atan=function(){return this.throwIfDisposed(),au(this)};/**
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
 */k().prototype.atan2=function(e){return this.throwIfDisposed(),cu(this,e)};/**
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
 */k().prototype.atanh=function(){return this.throwIfDisposed(),lu(this)};k().prototype.avgPool=function(e,t,n,r){return this.throwIfDisposed(),Co(this,e,t,n,r)};/**
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
 */k().prototype.batchToSpaceND=function(e,t){return this.throwIfDisposed(),An(this,e,t)};/**
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
 */k().prototype.batchNorm=function(e,t,n,r,s){return this.throwIfDisposed(),Pe(this,e,t,n,r,s)};/**
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
 */k().prototype.broadcastTo=function(e){return this.throwIfDisposed(),Se(this,e)};/**
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
 */k().prototype.cast=function(e){return this.throwIfDisposed(),D(this,e)};/**
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
 */k().prototype.ceil=function(){return this.throwIfDisposed(),Ru(this)};/**
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
 */k().prototype.clipByValue=function(e,t){return this.throwIfDisposed(),Pu(this,e,t)};/**
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
 */k().prototype.concat=function(e,t){return this.throwIfDisposed(),e instanceof rt&&(e=[e]),pt([this,...e],t)};/**
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
 */k().prototype.conv1d=function(e,t,n,r,s,o){return this.throwIfDisposed(),Vu(this,e,t,n,r,s,o)};/**
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
 */k().prototype.conv2dTranspose=function(e,t,n,r,s){return this.throwIfDisposed(),ju(this,e,t,n,r,s)};/**
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
 */k().prototype.conv2d=function(e,t,n,r,s,o){return this.throwIfDisposed(),be(this,e,t,n,r,s,o)};/**
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
 */k().prototype.cos=function(){return this.throwIfDisposed(),Fn(this)};/**
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
 */k().prototype.cosh=function(){return this.throwIfDisposed(),Mo(this)};/**
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
 */k().prototype.cumprod=function(e,t,n){return this.throwIfDisposed(),hn(this,e,t,n)};/**
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
 */k().prototype.cumsum=function(e,t,n){return this.throwIfDisposed(),Bo(this,e,t,n)};/**
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
 */k().prototype.depthToSpace=function(e,t){return this.throwIfDisposed(),sl(this,e,t)};/**
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
 */k().prototype.depthwiseConv2d=function(e,t,n,r,s,o){return this.throwIfDisposed(),Ro(this,e,t,n,r,s,o)};/**
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
 */k().prototype.dilation2d=function(e,t,n,r,s){return this.throwIfDisposed(),il(this,e,t,n,r,s)};/**
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
 */k().prototype.divNoNan=function(e){return this.throwIfDisposed(),pl(this,e)};/**
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
 */k().prototype.div=function(e){return this.throwIfDisposed(),C(this,e)};/**
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
 */k().prototype.dot=function(e){return this.throwIfDisposed(),gl(this,e)};/**
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
 */k().prototype.elu=function(){return this.throwIfDisposed(),Go(this)};/**
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
 */k().prototype.equal=function(e){return this.throwIfDisposed(),Mn(this,e)};/**
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
 */k().prototype.erf=function(){return this.throwIfDisposed(),yl(this)};/**
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
 */k().prototype.euclideanNorm=function(e,t){return this.throwIfDisposed(),Nl(this,e,t)};/**
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
 */k().prototype.exp=function(){return this.throwIfDisposed(),_t(this)};/**
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
 */k().prototype.expandDims=function(e){return this.throwIfDisposed(),Dt(this,e)};/**
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
 */k().prototype.expm1=function(){return this.throwIfDisposed(),Fl(this)};/**
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
 */k().prototype.fft=function(){return this.throwIfDisposed(),na(this)};/**
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
 */k().prototype.flatten=function(){return this.throwIfDisposed(),y(this,[this.size])};/**
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
 */k().prototype.floor=function(){return this.throwIfDisposed(),Gn(this)};/**
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
 */k().prototype.floorDiv=function(e){return this.throwIfDisposed(),To(this,e)};/**
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
 */k().prototype.gather=function(e,t){return this.throwIfDisposed(),Ko(this,e,t)};/**
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
 */k().prototype.greaterEqual=function(e){return this.throwIfDisposed(),ye(this,e)};/**
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
 */k().prototype.greater=function(e){return this.throwIfDisposed(),vt(this,e)};/**
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
 */k().prototype.ifft=function(){return this.throwIfDisposed(),dn(this)};/**
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
 */k().prototype.irfft=function(){return this.throwIfDisposed(),kf(this)};/**
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
 */k().prototype.isFinite=function(){return this.throwIfDisposed(),zl(this)};/**
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
 */k().prototype.isInf=function(){return this.throwIfDisposed(),Vl(this)};/**
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
 */k().prototype.isNaN=function(){return this.throwIfDisposed(),Hl(this)};/**
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
 */k().prototype.leakyRelu=function(e){return this.throwIfDisposed(),Wo(this,e)};/**
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
 */k().prototype.lessEqual=function(e){return this.throwIfDisposed(),ae(this,e)};/**
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
 */k().prototype.less=function(e){return this.throwIfDisposed(),zo(this,e)};/**
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
 */k().prototype.localResponseNormalization=function(e,t,n,r){return this.throwIfDisposed(),Zl(this,e,t,n,r)};/**
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
 */k().prototype.logSigmoid=function(){return this.throwIfDisposed(),ah(this)};/**
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
 */k().prototype.logSoftmax=function(e){return this.throwIfDisposed(),uh(this,e)};/**
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
 */k().prototype.logSumExp=function(e,t){return this.throwIfDisposed(),hh(this,e,t)};/**
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
 */k().prototype.log=function(){return this.throwIfDisposed(),Ke(this)};/**
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
 */k().prototype.log1p=function(){return this.throwIfDisposed(),eh(this)};/**
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
 */k().prototype.logicalAnd=function(e){return this.throwIfDisposed(),ne(this,e)};/**
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
 */k().prototype.logicalNot=function(){return this.throwIfDisposed(),On(this)};/**
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
 */k().prototype.logicalOr=function(e){return this.throwIfDisposed(),Vo(this,e)};/**
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
 */k().prototype.logicalXor=function(e){return this.throwIfDisposed(),mh(this,e)};/**
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
 */k().prototype.matMul=function(e,t,n){return this.throwIfDisposed(),R(this,e,t,n)};k().prototype.maxPool=function(e,t,n,r){return this.throwIfDisposed(),Uo(this,e,t,n,r)};/**
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
 */k().prototype.max=function(e,t){return this.throwIfDisposed(),Xt(this,e,t)};/**
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
 */k().prototype.maximum=function(e){return this.throwIfDisposed(),Ln(this,e)};/**
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
 */k().prototype.mean=function(e,t){return this.throwIfDisposed(),pn(this,e,t)};/**
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
 */k().prototype.min=function(e,t){return this.throwIfDisposed(),fn(this,e,t)};/**
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
 */k().prototype.minimum=function(e){return this.throwIfDisposed(),$h(this,e)};/**
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
 */k().prototype.mirrorPad=function(e,t){return this.throwIfDisposed(),Sh(this,e,t)};/**
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
 */k().prototype.mod=function(e){return this.throwIfDisposed(),vh(this,e)};/**
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
 */k().prototype.mul=function(e){return this.throwIfDisposed(),x(this,e)};/**
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
 */k().prototype.neg=function(){return this.throwIfDisposed(),tt(this)};/**
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
 */k().prototype.norm=function(e,t,n){return this.throwIfDisposed(),Le(this,e,t,n)};/**
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
 */k().prototype.notEqual=function(e){return this.throwIfDisposed(),Nh(this,e)};/**
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
 */k().prototype.oneHot=function(e,t=1,n=0){return this.throwIfDisposed(),_h(this,e,t,n)};/**
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
 */k().prototype.onesLike=function(){return this.throwIfDisposed(),Fh(this)};/**
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
 */k().prototype.pad=function(e,t){return this.throwIfDisposed(),Ho(this,e,t)};k().prototype.pool=function(e,t,n,r,s,o){return this.throwIfDisposed(),Oh(this,e,t,n,r,s,o)};/**
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
 */k().prototype.pow=function(e){return this.throwIfDisposed(),te(this,e)};/**
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
 */k().prototype.prelu=function(e){return this.throwIfDisposed(),jo(this,e)};/**
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
 */k().prototype.prod=function(e,t){return this.throwIfDisposed(),Wh(this,e,t)};/**
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
 */k().prototype.reciprocal=function(){return this.throwIfDisposed(),Xh(this)};/**
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
 */k().prototype.relu=function(){return this.throwIfDisposed(),Jo(this)};/**
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
 */k().prototype.relu6=function(){return this.throwIfDisposed(),Yo(this)};/**
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
 */k().prototype.reshapeAs=function(e){return this.throwIfDisposed(),y(this,e.shape)};/**
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
 */k().prototype.reshape=function(e){return this.throwIfDisposed(),y(this,e)};/**
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
 */k().prototype.resizeBilinear=function(e,t,n){return this.throwIfDisposed(),aa(this,e,t,n)};/**
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
 */k().prototype.resizeNearestNeighbor=function(e,t,n){return this.throwIfDisposed(),ia(this,e,t,n)};/**
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
 */k().prototype.reverse=function(e){return this.throwIfDisposed(),_e(this,e)};/**
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
 */k().prototype.rfft=function(){return this.throwIfDisposed(),$f(this)};/**
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
 */k().prototype.round=function(){return this.throwIfDisposed(),Zo(this)};/**
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
 */k().prototype.rsqrt=function(){return this.throwIfDisposed(),Qo(this)};/**
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
 */k().prototype.selu=function(){return this.throwIfDisposed(),nf(this)};/**
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
 */k().prototype.separableConv2d=function(e,t,n,r,s,o){return this.throwIfDisposed(),sf(this,e,t,n,r,s,o)};/**
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
 */k().prototype.sigmoid=function(){return this.throwIfDisposed(),Ge(this)};/**
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
 */k().prototype.sign=function(){return this.throwIfDisposed(),af(this)};/**
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
 */k().prototype.sin=function(){return this.throwIfDisposed(),ta(this)};/**
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
 */k().prototype.sinh=function(){return this.throwIfDisposed(),ea(this)};/**
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
 */k().prototype.slice=function(e,t){return this.throwIfDisposed(),V(this,e,t)};/**
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
 */k().prototype.softmax=function(e){return this.throwIfDisposed(),gf(this,e)};/**
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
 */k().prototype.softplus=function(){return this.throwIfDisposed(),qo(this)};/**
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
 */k().prototype.spaceToBatchND=function(e,t){return this.throwIfDisposed(),Kn(this,e,t)};/**
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
 */k().prototype.split=function(e,t){return this.throwIfDisposed(),se(this,e,t)};/**
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
 */k().prototype.sqrt=function(){return this.throwIfDisposed(),lt(this)};/**
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
 */k().prototype.square=function(){return this.throwIfDisposed(),q(this)};/**
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
 */k().prototype.squaredDifference=function(e){return this.throwIfDisposed(),Sf(this,e)};/**
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
 */k().prototype.squeeze=function(e){return this.throwIfDisposed(),ra(this,e)};/**
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
 */k().prototype.stack=function(e,t){this.throwIfDisposed();const n=e instanceof rt?[this,e]:[this,...e];return oe(n,t)};/**
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
 */k().prototype.step=function(e){return this.throwIfDisposed(),ke(this,e)};/**
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
 */k().prototype.stridedSlice=function(e,t,n,r,s,o,a,i){return this.throwIfDisposed(),Nf(this,e,t,n,r,s,o,a,i)};/**
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
 */k().prototype.sub=function(e){return this.throwIfDisposed(),B(this,e)};/**
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
 */k().prototype.sum=function(e,t){return this.throwIfDisposed(),_(this,e,t)};/**
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
 */k().prototype.tan=function(){return this.throwIfDisposed(),_f(this)};/**
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
 */k().prototype.tanh=function(){return this.throwIfDisposed(),Eu(this)};/**
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
 */k().prototype.tile=function(e){return this.throwIfDisposed(),Jt(this,e)};/**
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
 */k().prototype.toBool=function(){return this.throwIfDisposed(),D(this,"bool")};/**
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
 */k().prototype.toFloat=function(){return this.throwIfDisposed(),D(this,"float32")};/**
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
 */k().prototype.toInt=function(){return this.throwIfDisposed(),D(this,"int32")};/**
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
 */k().prototype.topk=function(e,t){return this.throwIfDisposed(),Ff(this,e,t)};/**
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
 */k().prototype.transpose=function(e){return this.throwIfDisposed(),It(this,e)};/**
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
 */k().prototype.unique=function(e){return this.throwIfDisposed(),Rf(this,e)};/**
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
 */k().prototype.unsortedSegmentSum=function(e,t){return this.throwIfDisposed(),sa(this,e,t)};/**
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
 */k().prototype.unstack=function(e){return this.throwIfDisposed(),ze(this,e)};/**
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
 */k().prototype.where=function(e,t){return this.throwIfDisposed(),ft(e,this,t)};/**
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
 */k().prototype.zerosLike=function(){return this.throwIfDisposed(),M(this)};export{Qt as $,Dr as A,Kr as B,ei as C,ib as D,di as E,ns as F,ss as G,os as H,In as I,yi as J,Ca as K,us as L,xi as M,$i as N,ds as O,ys as P,Is as Q,Bi as R,vs as S,Ds as T,qb as U,Ai as V,$e as W,Ms as X,mt as Y,Rn as Z,wl as _,p as a,Pr as a$,Oo as a0,Dn as a1,od as a2,ad as a3,id as a4,sd as a5,X as a6,y as a7,Se as a8,kt as a9,Zb as aA,ts as aB,ps as aC,Fs as aD,Rs as aE,Ls as aF,Gs as aG,pb as aH,Or as aI,Yn as aJ,Tr as aK,Nr as aL,ja as aM,Xa as aN,kl as aO,Ja as aP,Ar as aQ,_r as aR,Cr as aS,Fr as aT,Mr as aU,Rr as aV,Br as aW,Gr as aX,Et as aY,No as aZ,Ce as a_,zs as aa,Js as ab,Us as ac,$a as ad,Vp as ae,Xp as af,Jp as ag,tg as ah,Gd as ai,Pd as aj,Od as ak,Ld as al,Kd as am,Wd as an,zd as ao,qd as ap,Vd as aq,Ud as ar,Hd as as,jd as at,Zs as au,ro as av,zb as aw,so as ax,Fa as ay,sc as az,G as b,Ed as b$,fu as b0,Za as b1,Ya as b2,is as b3,Lr as b4,ld as b5,hd as b6,fd as b7,pd as b8,dd as b9,Yr as bA,ui as bB,li as bC,xb as bD,Zr as bE,hu as bF,fi as bG,he as bH,bb as bI,hi as bJ,Qs as bK,$b as bL,Ad as bM,Cd as bN,Fd as bO,_d as bP,Md as bQ,pi as bR,es as bS,md as bT,bd as bU,yd as bV,kd as bW,wd as bX,gd as bY,rs as bZ,Qr as b_,Qa as ba,wb as bb,Wr as bc,zr as bd,wi as be,qr as bf,nd as bg,rd as bh,Vr as bi,_o as bj,Re as bk,ni as bl,Ur as bm,Hr as bn,Ao as bo,ri as bp,si as bq,jr as br,Xr as bs,ai as bt,oi as bu,Sr as bv,Oe as bw,Jr as bx,ii as by,ci as bz,vn as c,zi as c$,$d as c0,Id as c1,Sd as c2,Dd as c3,vd as c4,Td as c5,gi as c6,mi as c7,bn as c8,bi as c9,Ss as cA,Es as cB,no as cC,vb as cD,_i as cE,hp as cF,Ci as cG,fp as cH,Fi as cI,pp as cJ,Ns as cK,uo as cL,Ts as cM,As as cN,Ma as cO,_s as cP,Cs as cQ,Db as cR,Tb as cS,Nb as cT,Mi as cU,Bs as cV,Os as cW,Gi as cX,Ps as cY,Ri as cZ,Ks as c_,as as ca,Zn as cb,Kb as cc,Ib as cd,zp as ce,cs as cf,Yd as cg,ki as ch,ls as ci,hs as cj,fs as ck,Sb as cl,gs as cm,Ii as cn,Si as co,Ei as cp,ms as cq,Di as cr,bs as cs,ks as ct,ws as cu,Ni as cv,Ti as cw,Eb as cx,xs as cy,$s as cz,mb as d,Go as d$,ud as d0,Ws as d1,Ab as d2,Kf as d3,_b as d4,qs as d5,Vs as d6,Ia as d7,Sa as d8,Xs as d9,Wi as dA,io as dB,co as dC,Wb as dD,hb as dE,xe as dF,ub as dG,Ba as dH,Ub as dI,Ty as dJ,fb as dK,pe as dL,lb as dM,Je as dN,Dy as dO,L as dP,fc as dQ,fe as dR,cd as dS,Vb as dT,re as dU,Lb as dV,Jd as dW,Xd as dX,Qb as dY,py as dZ,N as d_,Hs as da,js as db,Ys as dc,to as dd,Cb as de,Fb as df,Mb as dg,Bb as dh,Rb as di,eo as dj,Rd as dk,Pi as dl,lo as dm,Oi as dn,Yp as dp,Hp as dq,Gb as dr,Pb as ds,Ob as dt,oo as du,ao as dv,Sn as dw,Li as dx,Ki as dy,Ee as dz,Jb as e,Hb as e$,C as e0,bt as e1,x as e2,Pu as e3,D as e4,V as e5,by as e6,my as e7,gy as e8,dy as e9,Ka as eA,_n as eB,Ln as eC,Gn as eD,_h as eE,gf as eF,tt as eG,Ke as eH,B as eI,pn as eJ,Xt as eK,qo as eL,eh as eM,_t as eN,Fh as eO,vt as eP,Mn as eQ,Zc as eR,ra as eS,ft as eT,ne as eU,vy as eV,Ht as eW,rt as eX,Kt as eY,cb as eZ,Xb as e_,pt as ea,iy as eb,ay as ec,oy as ed,sy as ee,Jt as ef,Iy as eg,It as eh,$t as ei,Ko as ej,xy as ek,Lp as el,We as em,Uh as en,yy as eo,Op as ep,Rl as eq,Ey as er,Mt as es,ky as et,ut as eu,Yb as ev,Jo as ew,lt as ex,_ as ey,Gc as ez,en as f,jb as f0,nf as f1,Ge as f2,Eu as f3,uh as f4,$h as f5,Wo as f6,jo as f7,ju as f8,uy as f9,ty as fA,gc as fB,Ne as fC,ly as fD,fn as fE,sf as fa,Sy as fb,Vu as fc,$y as fd,cy as fe,Ro as ff,se as fg,Dt as fh,_e as fi,ze as fj,oe as fk,be as fl,Jc as fm,Nh as fn,M as fo,jc as fp,R as fq,ye as fr,fy as fs,ey as ft,ny as fu,ry as fv,Ho as fw,Uo as fx,Co as fy,hy as fz,Pt as g,wy as h,mn as i,z as j,me as k,db as l,xd as m,De as n,cl as o,kb as p,yb as q,yn as r,Z as s,$n as t,gb as u,En as v,Tt as w,Qd as x,xn as y,Ra as z};
