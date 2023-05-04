import{a as ut,K as ho,D as mo,e as Ae,b as go,w as Io,i as ko,c as ne,m as Lt,d as xo,f as Ue,g as tt,n as Pe,h as bo,A as So,s as G,j as de,k as K,l as ft,o as se,p as jt,q as St,C as yo,r as It,I as wo,R as No,t as Co,u as vo,v as ue,x as oe,y as Ke,z as ct,B as Xe,E as Ye,F as Ze,G as Je,H as Qe,J as tn,L as en,M as nn,N as sn,O as on,P as an,Q as rn,S as cn,T as To,U as be,V as ln,W as Mo,X as Ro,Y as mt,Z as wt,_ as Nt,$ as Pt,a0 as Tt,a1 as Jt,a2 as Fo,a3 as Do,a4 as Vo,a5 as Eo,a6 as Oo,a7 as Wo,a8 as Ao,a9 as Po,aa as dn,ab as un,ac as $o,ad as zo,ae as Ho,af as Lo,ag as Bo,ah as Go,ai as qo,aj as jo,ak as _o,al as Uo,am as Ko,an as Xo,ao as Yo,ap as Zo,aq as $e,ar as Jo,as as Qo,at as ta,au as pn,av as fn,aw as ea,ax as hn,ay as Xt,az as pt,aA as na,aB as mn,aC as sa,aD as oa,aE as gn,aF as In,aG as aa,aH as ra,aI as ia,aJ as ca,aK as kn,aL as xn,aM as la,aN as da,aO as $t,aP as ua,aQ as pa,aR as fa,aS as bn,aT as Sn,aU as yn,aV as wn,aW as Nn,aX as ha,aY as Se,aZ as Qt,a_ as ye,a$ as ma,b0 as pe,b1 as ga,b2 as Ia,b3 as ka,b4 as xa,b5 as Cn,b6 as vn,b7 as Tn,b8 as ba,b9 as Sa,ba as ya,bb as wa,bc as Mn,bd as Na,be as Ca,bf as va,bg as Ta,bh as Ie,bi as Ma,bj as we,bk as _t,bl as Ra,bm as Fa,bn as Da,bo as Ne,bp as Va,bq as Ea,br as Rn,bs as Fn,bt as Oa,bu as Wa,bv as Aa,bw as Dn,bx as Pa,by as $a,bz as za,bA as Ha,bB as La,bC as Ba,bD as Ga,bE as qa,bF as Ce,bG as ze,bH as Ht,bI as Vn,bJ as He,bK as ja,bL as _a,bM as Ua,bN as Ka,bO as Xa,bP as Ya,bQ as Za,bR as Ja,bS as En,bT as Qa,bU as tr,bV as er,bW as nr,bX as sr,bY as or,bZ as ar,b_ as On,b$ as Wn,c0 as rr,c1 as ir,c2 as cr,c3 as lr,c4 as dr,c5 as ur,c6 as pr,c7 as fr,c8 as hr,c9 as mr,ca as An,cb as gr,cc as Ir,cd as kr,ce as xr,cf as br,cg as Sr,ch as yr,ci as Pn,cj as $n,ck as zn,cl as wr,cm as Hn,cn as Ln,co as Bn,cp as Gn,cq as Nr,cr as Cr,cs as vr,ct as Tr,cu as Mr,cv as Rr,cw as Fr,cx as Dr,cy as Vr,cz as Er,cA as Or,cB as qn,cC as Wr,cD as Ar,cE as Pr,cF as $r,cG as zr,cH as Hr,cI as Lr,cJ as Br,cK as Gr,cL as qr,cM as jr,cN as _r,cO as Ur,cP as Kr,cQ as jn,cR as Xr,cS as Yr,cT as Zr,cU as Jr,cV as _n,cW as Qr,cX as ti,cY as ei,cZ as ni,c_ as si,c$ as oi,d0 as ai,d1 as Un,d2 as ri,d3 as Kn,d4 as ii,d5 as ci,d6 as Xn,d7 as li,d8 as di,d9 as Yn,da as Zn,db as Jn,dc as Qn,dd as ui,de as pi,df as fi,dg as hi,dh as mi,di as gi,dj as Ii,dk as ki,dl as xi,dm as ts,dn as bi,dp as Si,dq as yi,dr as wi,ds as Ni,dt as Ci,du as es,dv as ns,dw as vi,dx as Ti,dy as Mi,dz as ve,dA as Ri,dB as Fi,dC as Di,dD as Vi}from"./@tensorflow_tfjs-core@4.2.0-e61b4742.js";import{s as Ei}from"./vendor__S-b0bd511a.js";/**
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
 */function q(a,s){Array.isArray(a)||(a=[a]),a.forEach(t=>{t!=null&&ut(t.dtype!=="complex64",()=>`${s} does not support complex64 tensors in the CPU backend.`)})}/**
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
 */const Oi=bo;class fe extends ho{constructor(){super(),this.blockSize=48,this.firstUse=!0,this.data=new mo(this,Ae())}nextDataId(){return fe.nextDataId++}write(s,t,n){this.firstUse&&(this.firstUse=!1,go().get("IS_NODE")&&Io(`
============================
Hi, looks like you are running TensorFlow.js in Node.js. To speed things up dramatically, install our node backend, visit https://github.com/tensorflow/tfjs-node for more details. 
============================`));const e={id:this.nextDataId()};return this.data.set(e,{values:s,dtype:n,refCount:1}),e}makeTensorInfo(s,t,n){let e;if(t==="string"&&n!=null&&n.length>0&&ko(n[0])){const o=n.map(r=>ne(r));e=this.write(o,s,t)}else e=this.write(n,s,t);return{dataId:e,shape:s,dtype:t}}refCount(s){return this.data.has(s)?this.data.get(s).refCount:0}incRef(s){const t=this.data.get(s);t.refCount++}decRef(s){if(this.data.has(s)){const t=this.data.get(s);t.refCount--}}move(s,t,n,e,o){this.data.set(s,{values:t,dtype:e,refCount:o})}numDataIds(){return this.data.numDataIds()}async read(s){return this.readSync(s)}readSync(s){const{dtype:t,complexTensorInfos:n}=this.data.get(s);if(t==="complex64"){const e=this.readSync(n.real.dataId),o=this.readSync(n.imag.dataId);return Lt(e,o)}return xo(this.data.get(s).values,t)}bufferSync(s){const t=this.readSync(s.dataId);if(s.dtype==="string")try{const n=t.map(e=>Ue(e));return tt(s.shape,s.dtype,n)}catch{throw new Error("Failed to decode encoded string bytes into utf-8")}return tt(s.shape,s.dtype,t)}makeOutput(s,t,n){return Ae().makeTensorFromTensorInfo(this.makeTensorInfo(t,n,s),this)}disposeData(s,t=!1){if(this.data.has(s)){if(this.data.get(s).refCount--,!t&&this.data.get(s).refCount>0)return!1;const{complexTensorInfos:n}=this.data.get(s);n!=null&&(this.disposeData(n.real.dataId,!0),this.disposeData(n.imag.dataId,!0)),this.data.delete(s)}return!0}disposeIntermediateTensorInfo(s){this.disposeData(s.dataId)}async time(s){const t=Pe();return s(),{kernelMs:Pe()-t}}memory(){return{unreliable:!0,reasons:["The reported memory is an upper bound. Due to automatic garbage collection, the true allocated memory may be less."]}}where(s){q([s],"where");const t=this.readSync(s.dataId);return Oi(s.shape,t)}dispose(){}floatPrecision(){return 32}epsilon(){return super.epsilon()}}fe.nextDataId=0;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ss(a){const s=new Float32Array(a.length);for(let t=0;t<a.length;++t)s[t]=Math.abs(a[t]);return s}const Wi=a=>{const{x:s}=a.inputs,t=a.backend;q(s,"abs");let n=new Float32Array(G(s.shape));const e=t.data.get(s.dataId).values;return n=ss(e),t.makeOutput(n,s.shape,s.dtype)},Ai={kernelName:So,backendName:"cpu",kernelFunc:Wi};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function it(a){return(s,t,n,e,o)=>{const r=de(s,t),c=r.length,i=K(r),l=G(r),d=ft(o,l),u=s.length,p=t.length,h=K(s),m=K(t),g=se(s,r),f=se(t,r);if(g.length+f.length===0)for(let I=0;I<d.length;++I)d[I]=a(n[I%n.length],e[I%e.length]);else for(let I=0;I<d.length;++I){const k=jt(I,c,i),b=k.slice(-u);g.forEach(w=>b[w]=0);const x=St(b,u,h),S=k.slice(-p);f.forEach(w=>S[w]=0);const y=St(S,p,m);d[I]=a(n[x],e[y])}return[d,r]}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gt(a){const{inputs:s,backend:t}=a,{real:n,imag:e}=s,o=t.data.get(n.dataId).values,r=t.data.get(e.dataId).values,c=t.makeTensorInfo(n.shape,"complex64"),i=t.data.get(c.dataId);return i.complexTensorInfos={real:t.makeTensorInfo(n.shape,"float32",o),imag:t.makeTensorInfo(e.shape,"float32",r)},c}const Pi={kernelName:yo,backendName:"cpu",kernelFunc:gt};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ae(a,s,t="float32"){if(t==="complex64"){const e=ae(a,s,"float32"),o=ae(a,s,"float32");return gt({inputs:{real:e,imag:o},backend:a})}const n=It(G(s),t);return a.makeTensorInfo(s,t,n)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function yt(a){const{inputs:s,backend:t}=a,{x:n}=s;return t.incRef(n.dataId),{dataId:n.dataId,shape:n.shape,dtype:n.dtype}}const $i={kernelName:wo,backendName:"cpu",kernelFunc:yt};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Wt(a){const{inputs:s,backend:t}=a,{input:n}=s,e=t.data.get(n.dataId).complexTensorInfos.real,o=t.data.get(e.dataId).values;return t.makeTensorInfo(e.shape,e.dtype,o)}const zi={kernelName:No,backendName:"cpu",kernelFunc:Wt};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function os(a,s,t,n){if(n==="int32"){const e=Int32Array.from(a);return[s,"int32",e]}if(n==="bool"){const e=ue([0],t),[o,r]=it((c,i)=>c!==i?1:0)(s,[],a,e,"bool");return[r,"bool",o]}throw new Error(`Error in Cast: failed to cast ${t} to ${n}`)}function Vt(a){const{inputs:s,backend:t,attrs:n}=a,{x:e}=s,{dtype:o}=n;if(o==="complex64"){if(e.dtype==="complex64")return yt({inputs:{x:e},backend:t});const d=ae(t,e.shape,e.dtype),u=Vt({inputs:{x:e},backend:t,attrs:{dtype:"float32"}}),p=gt({inputs:{real:u,imag:d},backend:t});return t.disposeIntermediateTensorInfo(d),t.disposeIntermediateTensorInfo(u),p}if(e.dtype==="complex64"){const d=Wt({inputs:{input:e},backend:t}),u=Vt({inputs:{x:d},backend:t,attrs:{dtype:o}});return t.disposeIntermediateTensorInfo(d),u}if(!vo(e.dtype,o)){const d=yt({inputs:{x:e},backend:t});return{dataId:d.dataId,shape:d.shape,dtype:o}}const r=t.data.get(e.dataId).values,[c,i,l]=os(r,e.shape,e.dtype,o);return t.makeTensorInfo(c,i,l)}const Hi={kernelName:Co,backendName:"cpu",kernelFunc:Vt};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function lt(a,s,t,n){return t==null?({inputs:e,backend:o})=>{const{a:r,b:c}=e,i=o;q([r,c],a);const l=i.data.get(r.dataId).values,d=i.data.get(c.dataId).values,u=r.dtype==="string"?oe(l):l,p=r.dtype==="string"?oe(d):d,h=n||r.dtype,[m,g]=s(r.shape,c.shape,u,p,h);return i.makeTensorInfo(g,h,m)}:({inputs:e,backend:o})=>{const{a:r,b:c}=e,i=o;if(r.dtype==="complex64"||c.dtype==="complex64"){const l=Vt({inputs:{x:r},backend:i,attrs:{dtype:"complex64"}}),d=i.data.get(l.dataId),u=d.complexTensorInfos.real,p=d.complexTensorInfos.imag,h=i.data.get(u.dataId).values,m=i.data.get(p.dataId).values,g=Vt({inputs:{x:c},backend:i,attrs:{dtype:"complex64"}}),f=i.data.get(g.dataId),I=f.complexTensorInfos.real,k=f.complexTensorInfos.imag,b=i.data.get(I.dataId).values,x=i.data.get(k.dataId).values,[S,y,w]=t(r.shape,c.shape,h,m,b,x),N=i.makeTensorInfo(w,"float32",S),R=i.makeTensorInfo(w,"float32",y),F=gt({inputs:{real:N,imag:R},backend:i});return i.disposeIntermediateTensorInfo(l),i.disposeIntermediateTensorInfo(g),i.disposeIntermediateTensorInfo(N),i.disposeIntermediateTensorInfo(R),F}else{const l=i.data.get(r.dataId).values,d=i.data.get(c.dataId).values,u=n||r.dtype,[p,h]=s(r.shape,c.shape,l,d,u);return i.makeTensorInfo(h,u,p)}}}function Te(a){return(s,t,n,e,o,r)=>{const c=de(s,t),i=G(c),l=c.length,d=K(c),u=ft("float32",i),p=ft("float32",i),h=se(s,c),m=se(t,c),g=Lt(n,e),f=Lt(o,r),I=s.length,k=K(s),b=t.length,x=K(t);if(h.length+m.length===0)for(let S=0;S<u.length;S++){const y=S%g.length,w=S%f.length,N=a(g[y*2],g[y*2+1],f[w*2],f[w*2+1]);u[S]=N.real,p[S]=N.imag}else for(let S=0;S<u.length;S++){const y=jt(S,l,d),w=y.slice(-I);h.forEach(W=>w[W]=0);const N=St(w,I,k),R=y.slice(-b);m.forEach(W=>R[W]=0);const F=St(R,b,x),E=a(g[N*2],g[N*2+1],f[F*2],f[F*2+1]);u[S]=E.real,p[S]=E.imag}return[u,p,c]}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const as=it((a,s)=>a+s),Li=Te((a,s,t,n)=>({real:a+t,imag:s+n})),Bt=lt(Ke,as,Li),Bi={kernelName:Ke,backendName:"cpu",kernelFunc:Bt};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Me(a,s,t,n,e){const o=G(n),r=It(e,t);for(let c=0;c<a.length;c++){const i=a[c];if(i<0)throw new Error("Input x must be non-negative!");i>=e||(o>0?r[i]+=s[c]:r[i]+=1)}return r}function rs(a,s,t,n=!1){const e=a.shape[0],o=a.shape[1],r=tt([e,t],s.dtype);for(let c=0;c<e;c++)for(let i=0;i<o;i++){const l=a.get(c,i);if(l<0)throw new Error("Input x must be non-negative!");l>=t||(n?r.set(1,c,l):s.size>0?r.set(r.get(c,l)+s.get(c,i),c,l):r.set(r.get(c,l)+1,c,l))}return r}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Et(a){return(s,t,n)=>{const e=ft(t,s.length);for(let o=0;o<s.length;++o)e[o]=a(s[o],n);return e}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function J(a,s,t){return({inputs:n,attrs:e,backend:o})=>{const{x:r}=n;if(q(r,a),r.dtype==="string"||t==="string")throw new Error("unaryKernelFunc does not support string input/output");const c=o,i=c.data.get(r.dataId).values,l=G(r.shape),d=t||r.dtype,u=ct(d,l);for(let p=0;p<l;++p)u[p]=s(i[p],e);return c.makeTensorInfo(r.shape,d,u)}}function Ut(a,s,t){return({inputs:n,attrs:e,backend:o})=>{const{x:r}=n;if(q(r,a),r.dtype==="string"||t==="string")throw new Error("unaryKernelFunc does not support string input/output");const c=o,i=c.data.get(r.dataId).values,l=t||r.dtype,d=s(i,l,e);return c.makeTensorInfo(r.shape,l,d)}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const is=Et(a=>Math.ceil(a)),Gi=Ut(Xe,is),qi={kernelName:Xe,backendName:"cpu",kernelFunc:Gi};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function cs(a,s,t,n){const e=ct(t,G(s));if(n&&t!=="string"){let o=0;a.forEach(r=>{const c=G(r.shape);e.set(r.vals,o),o+=c})}else{let o=0;a.forEach(r=>{const c=t==="string"?oe(r.vals):r.vals;let i=0;for(let l=0;l<r.shape[0];++l){const d=l*s[1]+o;for(let u=0;u<r.shape[1];++u)e[d+u]=c[i++]}o+=r.shape[1]})}return e}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ls=it((a,s)=>a===s?1:0),ds=lt(Ye,ls,null,"bool"),ji={kernelName:Ye,backendName:"cpu",kernelFunc:ds};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const us=Et(a=>Math.exp(a)),ps=Ut(Ze,us,"float32"),_i={kernelName:Ze,backendName:"cpu",kernelFunc:ps};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const fs=Et(a=>Math.expm1(a)),Ui=Ut(Je,fs),Ki={kernelName:Je,backendName:"cpu",kernelFunc:Ui};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const hs=Et(a=>Math.floor(a)),Xi=Ut(Qe,hs),Yi={kernelName:Qe,backendName:"cpu",kernelFunc:Xi};/**
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
 */function ms(a,s,t,n,e,o,r,c,i){const l=tt([n,o],t);for(let d=0;d<n;d++){const u=[];let p=0;for(let h=0;h<e;h++){const m=a[d*e+h];p+=m*r[h],u.push(m)}if(p<0||p>=i/o)throw new Error(`Invalid indices: ${u} does not index into ${c}`);for(let h=0;h<o;h++)l.values[d*o+h]=s.get(...s.indexToLoc(p*o+h))}return l}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gs(a,s,t){const n=tt(t,a.dtype);for(let e=0;e<n.size;++e){const r=n.indexToLoc(e).slice(),c=r[0],i=r[2],l=s.locToIndex([c,i]);r[2]=s.values[l];const d=a.locToIndex(r);0<=d&&d<a.values.length&&(n.values[e]=a.values[d])}return n}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Is=it((a,s)=>a>s?1:0),Zi=lt(tn,Is,null,"bool"),Ji={kernelName:tn,backendName:"cpu",kernelFunc:Zi};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ks=it((a,s)=>a>=s?1:0),Qi=lt(en,ks,null,"bool"),tc={kernelName:en,backendName:"cpu",kernelFunc:Qi};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const xs=it((a,s)=>a<s?1:0),ec=lt(nn,xs,null,"bool"),nc={kernelName:nn,backendName:"cpu",kernelFunc:ec};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const bs=it((a,s)=>a<=s?1:0),sc=lt(sn,bs,null,"bool"),oc={kernelName:sn,backendName:"cpu",kernelFunc:sc};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ss(a,s,t){const n=(s-a)/(t-1),e=It(t,"float32");e[0]=a;for(let o=1;o<e.length;o++)e[o]=e[o-1]+n;return e}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ys=Et(a=>Math.log(a)),ac=Ut(on,ys),rc={kernelName:on,backendName:"cpu",kernelFunc:ac};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ws(a,s,t,n){const e=ft(n,G(t));for(let o=0;o<e.length;++o){const r=o*s;let c=a[r];for(let i=0;i<s;++i){const l=a[r+i];(Number.isNaN(l)||l>c)&&(c=l)}e[o]=c}return e}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ns=it((a,s)=>Math.max(a,s)),ic=lt(an,Ns),cc={kernelName:an,backendName:"cpu",kernelFunc:ic};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Cs=it((a,s)=>Math.min(a,s)),lc=lt(rn,Cs),dc={kernelName:rn,backendName:"cpu",kernelFunc:lc};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Re=it((a,s)=>a*s),uc=Te((a,s,t,n)=>({real:a*t-s*n,imag:a*n+s*t})),he=lt(cn,Re,uc),pc={kernelName:cn,backendName:"cpu",kernelFunc:he};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function vs(a,s,t){const n=be(-1,t);return Re([],s,n,a,t)}function fc(a){const{inputs:s,backend:t}=a,{x:n}=s;q(n,"neg");const e=t.data.get(n.dataId).values,[o,r]=vs(e,n.shape,n.dtype);return t.makeTensorInfo(r,n.dtype,o)}const hc={kernelName:To,backendName:"cpu",kernelFunc:fc};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ts=it((a,s)=>a!==s?1:0),mc=lt(ln,Ts,null,"bool"),gc={kernelName:ln,backendName:"cpu",kernelFunc:mc};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Fe(a,s,t,n,e){const o=s.length,r=G(s),c=K(s),i=K(e),l=ft(t,G(e));for(let d=0;d<r;++d){const u=jt(d,o,c),p=new Array(u.length);for(let m=0;m<p.length;m++)p[m]=u[n[m]];const h=St(p,o,i);l[h]=a[d]}return l}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ht(a){const{inputs:s,attrs:t,backend:n}=a,{x:e}=s,{perm:o}=t;q(e,"transpose");const r=e.shape.length,c=new Array(r);for(let u=0;u<c.length;u++)c[u]=e.shape[o[u]];const i=n.data.get(e.dataId).values,l=Fe(i,e.shape,e.dtype,o,c);return{dataId:n.write(l,c,e.dtype),shape:c,dtype:e.dtype}}const Ic={kernelName:Mo,backendName:"cpu",kernelFunc:ht};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ms(a,s,t,n){const[e,o]=Tt(a,n),r=Jt(s,"int32"),c=It(G(e),r),i=G(o);for(let l=0;l<c.length;++l){const d=l*i;let u=1;for(let p=0;p<i;++p)u*=t[d+p];c[l]=u}return{outVals:c,outShape:e,outDtype:r}}function kc(a){const{inputs:s,backend:t,attrs:n}=a,{x:e}=s,{axis:o,keepDims:r}=n;q(e,"prod");const c=e.shape.length,i=mt(o,e.shape),l=wt(i,c);let d=i,u=e;const p=[];l!=null&&(u=ht({inputs:{x:e},backend:t,attrs:{perm:l}}),p.push(u),d=Nt(d.length,c));const h=t.data.get(u.dataId).values,{outVals:m,outShape:g,outDtype:f}=Ms(u.shape,u.dtype,h,d);let I=g;return r&&(I=Pt(g,i)),p.forEach(k=>t.disposeIntermediateTensorInfo(k)),t.makeTensorInfo(I,f,m)}const xc={kernelName:Ro,backendName:"cpu",kernelFunc:kc};/**
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
 */function bc(a,s,t){a.forEach((n,e)=>{if(n<0||n>=t){const o=jt(e,s.length,K(s)).join(",");throw new Error(`indices[${o}] = ${n} is not in [0, ${t})`)}})}function Sc(a,s){for(let t=0;t<a.length;++t){const n=a[t],e=t===a.length-1?s:a[t+1].length;if(n.length===0)throw new Error("Ragged splits may not be empty");if(n[0]<0)throw new Error("Ragged splits must be non-negative");if(n[n.length-1]>e)throw new Error("Ragged splits must not point past values");for(let o=1;o<n.length;++o)if(n[o-1]>n[o])throw new Error("Ragged splits must be sorted in ascending order")}}function yc(a,s,t,n){const e=[];let o=0;const r=s.length-1+t.length,c=new Array(r).fill(null).map(()=>[0]);Sc(t,n);let i=1;for(let l=0;l<s.length-1;++l){i*=s[l];const d=s[l+1];for(let u=1;u<i+1;++u)c[l].push(u*d)}for(let l=0;l<a.length;++l){let d=a[l],u=a[l]+1;for(let p=0;p<t.length;++p){const h=t[p],m=p+s.length-1;if(m>=0){const g=c[m],f=g[g.length-1]-h[d];for(let I=d;I<u;++I)c[m].push(h[I+1]+f)}d=h[d],u=h[u]}u!==d&&(e.push([d,u]),o+=u-d)}return{outSplits:c,valueSlices:e,numValues:o}}function wc(a){const s=[];for(let t=0;t<a.length;++t){const n=a[t].length,e=ct("int32",n);s.push(e),a[t].forEach((o,r)=>e[r]=o)}return s}function Le(a,s){const t=a.slice(0,s);for(;t.length<s;)t.push(1);for(let n=s;n<a.length;n++)t[s-1]*=a[n];return t}function Nc(a,s,t,n,e,o){const r=Le(s,2)[1],c=Le(o,2)[1];let i=0;for(const l of t)for(let d=l[0];d<l[1];++d){for(let u=0;u<n;++u)e[i*c+u]=a[d*r+u];++i}}function Cc(a,s,t,n,e){const o=s.slice();o[0]=e;const r=ct(t,G(o)),c=a.length,i=c===0?0:c/s[0];return Nc(a,s,n,i,r,o),[r,o]}function Rs(a,s,t,n,e,o,r,c){if(a.length===0)throw new Error("paramsNestedSplits must be non empty");if(s[0].length===0)throw new Error("Split tensors must not be scalars");const i=s[0][0]-1;if(bc(o,r,i),n.length===0)throw new Error("params.rank must be nonzero");const l=n[0],{outSplits:d,valueSlices:u,numValues:p}=yc(o,r,a,l),h=wc(d),m=Cc(t,n,e,u,p);return[h,m[0],m[1]]}/**
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
 */const Be=2147483647;function Fs(a,s,t,n,e,o,r){if(s.length>1)throw new Error("starts must be a scalar or vector");if(e.length>1)throw new Error("limits must be a scalar or vector");if(r.length>1)throw new Error("deltas must be a scalar or vector");const c=s.length===0,i=e.length===0,l=r.length===0,d=[];c||d.push(s[0]),i||d.push(e[0]),l||d.push(r[0]);for(let f=1;f<d.length;++f)if(d[f]!==d[f-1])throw new Error("starts, limits, and deltas must have the same shape");const u=d.length===0?1:d[0],p=ct("int32",u+1);p[0]=0;for(let f=0;f<u;++f){const I=c?a[0]:a[f],k=i?n[0]:n[f],b=l?o[0]:o[f];if(b===0)throw new Error("Requires delta != 0");let x;if(b>0&&k<I||b<0&&k>I)x=0;else if(x=Math.ceil(Math.abs((k-I)/b)),x>Be)throw new Error(`Requires ((limit - start) / delta) <= ${Be}`);p[f+1]=p[f]+x}const h=p[u],m=ct(t,h);let g=0;for(let f=0;f<u;++f){const I=p[f+1]-p[f];let k=c?a[0]:a[f];const b=l?o[0]:o[f];for(let x=0;x<I;++x)m[g++]=k,k+=b}return[p,m]}/**
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
 */var xt=Po;class re{constructor(s,t,n,e,o,r,c,i,l,d){this.shape=s,this.shapeShape=t,this.values=n,this.valuesShape=e,this.valuesDType=o,this.defaultValue=r,this.defaultValueShape=c,this.rowPartitionValues=i,this.rowPartitionValuesShapes=l,this.rowPartitionTypes=Fo(d),this.raggedRank=Do(this.rowPartitionTypes)}getRowPartitionTypeByDimension(s){return this.rowPartitionTypes[0]===xt.FIRST_DIM_SIZE?this.rowPartitionTypes[s+1]:this.rowPartitionTypes[s]}getRowPartitionTensor(s){return this.rowPartitionTypes[0]===xt.FIRST_DIM_SIZE?this.rowPartitionValues[s+1]:this.rowPartitionValues[s]}getMaxWidth(s){const t=this.getRowPartitionTensor(s-1);switch(this.getRowPartitionTypeByDimension(s-1)){case xt.VALUE_ROWIDS:return re.getMaxWidthValueRowID(t);case xt.ROW_SPLITS:return re.getMaxWidthRowSplit(t);default:throw new Error(`Cannot handle partition type ${xt[this.getRowPartitionTypeByDimension(s-1)]}`)}}static getMaxWidthRowSplit(s){const t=s.length;if(t===0||t===1)return 0;let n=0;for(let e=0;e<t-1;++e){const o=s[e+1]-s[e];o>n&&(n=o)}return n}static getMaxWidthValueRowID(s){const t=s.length;if(t===0)return 0;let n=0,e=s[0],o=0;for(let r=1;r<t;++r){const c=s[r];c!==e&&(e=c,o=Math.max(r-n,o),n=r)}return Math.max(t-n,o)}tensorShapeFromTensor(s,t,n=!0){if(t.length===0){if(s[0]===-1)return[];throw new Error("The only valid scalar shape tensor is the fully unknown shape specified as -1.")}return qe(s,n)}calculateOutputSize(s){const t=this.valuesShape,n=this.defaultValueShape;Vo(n,t);const e=this.tensorShapeFromTensor(this.shape,this.shapeShape),r=Eo(this.raggedRank,e,t);r[0]<0&&(r[0]=s);for(let c=1;c<=this.raggedRank;++c)r[c]<0&&(r[c]=this.getMaxWidth(c));return r}calculateFirstParentOutputIndex(s,t,n){const e=Math.min(s,n),o=[];let r=0;for(let c=0;c<e;++c,r+=t)o.push(r);for(let c=e;c<s;++c)o.push(-1);return ut(o.length===s,()=>"Final length of result must be equal to firstDimension."),o}calculateOutputIndexRowSplit(s,t,n,e){const o=s.length,r=[];for(let c=0;c<o-1;++c){const i=s[c+1]-s[c];let l=Math.min(e,i),d=t[c];d===-1&&(l=0);for(let u=0;u<l;++u)r.push(d),d+=n;for(let u=0;u<i-l;++u)r.push(-1)}if(o>0&&r.length!==s[o-1])throw new Error("Invalid row split size.");return r}calculateOutputIndexValueRowID(s,t,n,e){const o=s.length,r=[];if(o===0)return[];let c=0,i=s[0];if(i>=t.length)throw new Error(`Got currentValueRowId=${i}, which is not less than ${t.length}`);let l=t[i];r.push(l);for(let d=1;d<o;++d){const u=s[d];if(u===i)l>=0&&(++c,c<e?l+=n:l=-1);else{if(c=0,i=u,u>=t.length)throw new Error(`Got nextValueRowId=${u} which is not less than ${t.length}`);l=t[u]}r.push(l)}if(r.length!==s.length)throw new Error("Invalid row ids.");return r}calculateOutputIndex(s,t,n,e){const o=this.getRowPartitionTensor(s),r=this.getRowPartitionTypeByDimension(s);switch(r){case xt.VALUE_ROWIDS:return this.calculateOutputIndexValueRowID(o,t,n,e);case xt.ROW_SPLITS:if(o.length-1>t.length)throw new Error(`Row partition size is greater than output size: ${o.length-1} > ${t.length}`);return this.calculateOutputIndexRowSplit(o,t,n,e);default:throw new Error(`Unsupported partition type: ${xt[r]}`)}}getFirstDimensionSize(){const s=this.rowPartitionValues[0];if(this.rowPartitionTypes.length===0)throw new Error("No row_partition_types given.");const t=this.rowPartitionTypes[0];switch(t){case xt.FIRST_DIM_SIZE:return s[0];case xt.VALUE_ROWIDS:throw new Error("Cannot handle VALUE_ROWIDS in first dimension.");case xt.ROW_SPLITS:return this.rowPartitionValuesShapes[0][0]-1;default:throw new Error(`Cannot handle type ${xt[t]}`)}}compute(){if(this.rowPartitionValues[0].length<=0)throw new Error("Invalid first partition input. Tensor requires at least one element.");const t=this.getFirstDimensionSize(),n=this.calculateOutputSize(t),e=new Array(this.raggedRank+1);e[e.length-1]=1;for(let i=e.length-2;i>=0;--i)e[i]=e[i+1]*n[i+1];const o=qe(n,!1),r=ct(this.valuesDType,G(o));if(e[0]*n[0]>0){let i=this.calculateFirstParentOutputIndex(t,e[0],n[0]);for(let l=1;l<=this.raggedRank;++l)i=this.calculateOutputIndex(l-1,i,e[l],n[l]);this.setOutput(this.raggedRank,i,r,o)}return[o,r]}setOutput(s,t,n,e){if(n.length===0)return;const o=this.values,r=n;let c=e.slice();c=c.slice(s+1);const i=G(c),l=t.length;let d=this.defaultValue;if(d.length!==i&&d.length!==1){const m=this.defaultValueShape;Oo(()=>{const g=Wo(d,m);d=Ao(g,c).dataSync()})}let u=0,p=0,h=0;for(let m=0;m<=l;++m){let g=m<l?t[m]:-1;if(g===h){++h;continue}if(p<h){const f=o.subarray(u*i),I=r.subarray(p*i),k=(h-p)*i;Ge(I,f,k)}if(m>=l){const f=n.length;g=Math.floor(f/i)}if(g>h)if(this.defaultValue.length===1)r.subarray(h*i,g*i).fill(this.defaultValue[0]),h=g;else for(;g>h;){const f=r.slice(h*i);Ge(f,d,i),++h}g<0?(u=m+1,p=h):(u=m,p=h,h=p+1)}}}function Ge(a,s,t){for(let n=0;n<t;n++)a[n]=s[n]}function qe(a,s){const t=[];for(let n of a){if(n<0){if(!s)throw new Error(`Dimension ${n} must be >= 0`);if(n<-1)throw new Error(`Dimension ${n} must be >= -1`);n=-1}t.push(n)}return t}function Ds(a,s,t,n,e,o,r,c,i,l){return new re(a,s,t,n,e,o,r,c,i,l).compute()}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Vs(a,s,t,n){const e=a===s,o=a<s&&t<0,r=s<a&&t>1;if(e||o||r)return It(0,n);const c=Math.abs(Math.ceil((s-a)/t)),i=It(c,n);s<a&&t===1&&(t=-1),i[0]=a;for(let l=1;l<i.length;l++)i[l]=i[l-1]+t;return i}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Es=Et(a=>1/Math.sqrt(a)),vc=Ut(dn,Es),Tc={kernelName:dn,backendName:"cpu",kernelFunc:vc};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zt(a,s,t,n,e,o,r,c,i,l){const d=[n/e,e],u=a.values,p=s.values;if(n===0)return tt(t,s.dtype);const h=tt(d,s.dtype);typeof i=="string"||typeof i=="number"?h.values.fill(i):typeof i=="boolean"&&h.values.fill(+i);for(let m=0;m<o;m++){const g=[];let f=0;for(let I=0;I<r;I++){const k=u[m*r+I];g.push(k),f+=k*c[I]}if(f<0||f>=n/e)throw new Error(`Invalid indices: ${g} does not index into ${t}`);for(let I=0;I<e;I++)l?h.values[f*e+I]+=p[m*e+I]:h.values[f*e+I]=s.rank===0?p[0]:p[m*e+I]}return h}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Mc=Et(a=>1/(1+Math.exp(-a))),Os=J(un,a=>1/(1+Math.exp(-a))),Rc={kernelName:un,backendName:"cpu",kernelFunc:Os};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ws(a,s,t,n,e){const o=Lo(n,s,t),r=G(t),c=K(n);if(o){const u=Bo(s,c);return e==="string"?a.slice(u,u+r):a.subarray(u,u+r)}const i=e==="string"?oe(a):a,l=tt(n,e,i),d=tt(t,e);for(let u=0;u<d.size;++u){const p=d.indexToLoc(u),h=p.map((m,g)=>m+s[g]);d.set(l.get(...h),...p)}return e==="string"?Go(d.values):d.values}function At(a){const{inputs:s,backend:t,attrs:n}=a,{x:e}=s,{begin:o,size:r}=n;q(e,"slice");const[c,i]=zo(e,o,r);Ho(e,c,i);const l=t.data.get(e.dataId).values,d=Ws(l,c,i,e.shape,e.dtype);return t.makeTensorInfo(i,e.dtype,d)}const Fc={kernelName:$o,backendName:"cpu",kernelFunc:At};/**
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
 */function As(a,s,t,n,e,o,r){const c=s[0],i=o[0],l=new Array(i),d=new Array(c),u=s[1];if(i===0){if(c!==0)throw new Error(qo(c));const f=ct(t,0),I=ct(e,0);return[f,[0,u],I,l,d]}let p=!0,h=0;const m=new Array(i).fill(0);for(let f=0;f<c;++f){const I=a[f*u];if(I<0)throw new Error(jo(f,I));if(I>=i)throw new Error(_o(f,I,i));++m[I],p=p&&I>=h,h=I}let g=!0;for(let f=0;f<i;++f){const I=m[f]===0;l[f]=I,g=g&&!I,m[f]=Math.max(m[f],1),f>0&&(m[f]+=m[f-1])}if(g&&p){const f=a,I=n;for(let k=0;k<c;++k)d[k]=k;return[f,[c,u],I,l,d]}else{const f=m[i-1],I=ct(t,f*u),k=ct(e,f),b=new Array(i).fill(0);for(let x=0;x<c;++x){const S=a[x*u],y=b[S],w=(S===0?0:m[S-1])+y;b[S]++;for(let N=0;N<u;++N)I[w*u+N]=a[x*u+N];k[w]=n[x],d[x]=w}for(let x=0;x<i;++x)if(b[x]===0){const y=x===0?0:m[x-1];I[y*u+0]=x;for(let w=1;w<u;++w)I[y*u+w]=0;k[y]=r}return[I,[f,u],k,l,d]}}/**
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
 */function Ps(a,s,t,n,e){const o=G(n),r=s[0],c=e.length,i=[];let l=1,d=-1;for(let f=0;f<c;++f){const I=e[f];if(I===-1){if(d!==-1)throw new Error(Uo(d,f));d=f,i.push(1)}else{if(I<0)throw new Error(Ko(f,I));l*=I,i.push(I)}}if(d!==-1){if(l<=0)throw new Error(Xo());const f=Math.trunc(o/l);if(l*f!==o)throw new Error(Yo(n,i));i[d]=f}if(G(i)!==o)throw new Error(Zo(n,i));const p=n.length,h=[];if(p>0){h[p-1]=1;for(let f=p-2;f>=0;--f)h[f]=h[f+1]*n[f+1]}const m=[];if(c>0){m[c-1]=1;for(let f=c-2;f>=0;--f)m[f]=m[f+1]*i[f+1]}const g=ct(t,r*c);for(let f=0;f<r;++f){let I=0;for(let k=0;k<p;++k)I+=a[f*p+k]*h[k];for(let k=0;k<c;++k)g[f*c+k]=Math.trunc(I/m[k]),I%=m[k]}return[g,[r,c],i]}/**
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
 */function De(a,s,t,n,e,o=!1,r=0){const c=n.length,i=[s[0],a.length/s[0]],l=i[1],u=c>0?e[c-1]+1:0;if(u<0)throw new Error($e());const p=s.slice();p[0]=u;const h=p.reduce((b,x)=>b*x,1),m=ct(t,h);if(c===0)return u>0&&m.fill(r),[m,p];if(u<=0)throw new Error($e());let g=0,f=1,I=0,k=e[g];for(;;){let b=0;if(f<c){if(b=e[f],k===b){++f;continue}if(k>=b)throw new Error(Jo())}if(k<0||k>=u)throw new Error(Qo(k,u));k>I&&m.fill(r,I*l,k*l);for(let x=g;x<f;++x){const S=n[x];if(S<0||S>=i[0])throw new Error(ta(x,n[x],i[0]));for(let y=0;y<l;y++)m[k*l+y]+=a[S*l+y]}if(o)for(let x=0;x<l;x++)m[k*l+x]/=f-g;if(g=f,++f,I=k+1,k=b,f>c)break}return I<u&&m.fill(r,I*l,u*l),[m,p]}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Dc=Et(a=>Math.sqrt(a)),Vc=J(pn,a=>Math.sqrt(a)),Ec={kernelName:pn,backendName:"cpu",kernelFunc:Vc};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const $s=it((a,s)=>{const t=a-s;return t*t}),Oc=lt(fn,$s),Wc={kernelName:fn,backendName:"cpu",kernelFunc:Oc};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zs(a,s,t,n){const e=tt(a,s.dtype);for(let o=0;o<e.size;o++){const r=e.indexToLoc(o),c=new Array(r.length);for(let i=0;i<c.length;i++)c[i]=r[i]*t[i]+n[i];e.set(s.get(...c),...r)}return e}/**
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
 */class Ac{constructor(s,t,n,e,o,r){this.separator=ne(s),this.nGramWidths=t,this.leftPad=ne(n),this.rightPad=ne(e),this.padWidth=o,this.preserveShort=r}getPadWidth(s){return Math.min(this.padWidth<0?s-1:this.padWidth,s-1)}getNumNGrams(s,t){const n=this.getPadWidth(t);return Math.max(0,s+2*n-t+1)}createNGrams(s,t,n,e,o,r){for(let c=0;c<o;++c){const i=this.getPadWidth(r),l=Math.max(0,i-c),d=Math.max(0,i-(o-(c+1))),u=r-(l+d),p=t+(l>0?0:c-i);let h=0;h+=l*this.leftPad.length;for(let k=0;k<u;++k)h+=s[p+k].length;h+=d*this.rightPad.length;const m=l+d+u-1;h+=m*this.separator.length,n[e+c]=new Uint8Array(h);const g=n[e+c];let f=0;const I=k=>k.forEach(b=>g[f++]=b);for(let k=0;k<l;++k)I(this.leftPad),I(this.separator);for(let k=0;k<u-1;++k)I(s[p+k]),I(this.separator);if(u>0){I(s[p+u-1]);for(let k=0;k<d;++k)I(this.separator),I(this.rightPad)}else{for(let k=0;k<d-1;++k)I(this.rightPad),I(this.separator);I(this.rightPad)}}}compute(s,t){const n=s.length,e=t.length;if(e>0){let i=t[0];if(i!==0)throw new Error(`First split value must be 0, got ${i}`);for(let l=1;l<e;++l){let d=t[l]>=i;if(d=d&&t[l]<=n,!d)throw new Error(`Invalid split value ${t[l]}, must be in [${i}, ${n}]`);i=t[l]}if(i!==n)throw new Error(`Last split value must be data size. Expected ${n}, got ${i}`)}const o=e-1,r=ct("int32",e);if(n===0||e===0){const i=new Array(n);for(let l=0;l<=o;++l)r[l]=0;return[i,r]}r[0]=0;for(let i=1;i<=o;++i){const l=t[i]-t[i-1];let d=0;this.nGramWidths.forEach(u=>{d+=this.getNumNGrams(l,u)}),this.preserveShort&&l>0&&d===0&&(d=1),r[i]=r[i-1]+d}const c=new Array(r[o]);for(let i=0;i<o;++i){const l=t[i];let d=r[i];if(this.nGramWidths.forEach(u=>{const p=t[i+1]-t[i],h=this.getNumNGrams(p,u);this.createNGrams(s,l,c,d,h,u),d+=h}),this.preserveShort&&d===r[i]){const u=t[i+1]-t[i];if(u===0)continue;const p=u+2*this.padWidth,h=1;this.createNGrams(s,l,c,d,h,p)}}return[c,r]}}function Hs(a,s,t,n,e,o,r,c){return new Ac(t,n,e,o,r,c).compute(a,s)}/**
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
 */function Pc(a,s,t,n){if(!a.length)return;if(s.length===0){for(let o=0;o<a.length;++o)n.push(a.subarray(o,o+1));return}if(s.length===1){const o=s[0];let r=a.indexOf(o);for(;r!==-1;){const c=a.subarray(0,r);(!t||c.length!==0)&&n.push(c),a=a.subarray(r+1),r=a.indexOf(o)}(!t||a.length!==0)&&n.push(a);return}let e=0;for(let o=0;o<a.length+1;o++)if(o===a.length||s.indexOf(a[o])!==-1){const r=a.subarray(e,o);(!t||r.length!==0)&&n.push(r),e=o+1}}function Ls(a,s,t){const n=a.length,e=[];let o=0,r=0;const c=new Array(n);for(let p=0;p<n;++p){const h=e.length;Pc(a[p],s,t,e);const m=e.length-h;c[p]=m,o+=m,r=Math.max(r,m)}const i=ct("int32",o*2),l=new Array(o),d=[n,r];let u=0;for(let p=0;p<n;++p)for(let h=0;h<c[p];++h)i[u*2]=p,i[u*2+1]=h,l[u]=e[u],++u;return[i,l,d]}/**
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
 */function Bs(a,s){const t=ct("int32",a.length);for(let n=0;n<a.length;++n)t[n]=ea(a[n]).modulo(s).getLowBitsUnsigned();return t}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Gs=it((a,s)=>a-s),$c=Te((a,s,t,n)=>({real:a-t,imag:s-n})),Ve=lt(hn,Gs,$c),zc={kernelName:hn,backendName:"cpu",kernelFunc:Ve};/**
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
 */function qs(a,s){const t=new Array(a.rank);for(let e=0;e<t.length;e++)t[e]=a.shape[e]*s[e];const n=tt(t,a.dtype);for(let e=0;e<n.values.length;++e){const o=n.indexToLoc(e),r=new Array(a.rank);for(let i=0;i<r.length;i++)r[i]=o[i]%a.shape[i];const c=a.locToIndex(r);n.values[e]=a.values[c]}return n}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Yt=(a,s)=>{const t=s.value-a.value;return t===0?a.index-s.index:t};function js(a,s,t=0,n=a.length-1){for(;n>t;){if(n-t>600){const c=n-t+1,i=s-t+1,l=Math.log(c),d=.5*Math.exp(2*l/3),u=.5*Math.sqrt(l*d*(c-d)/c)*Math.sign(i-c/2),p=Math.max(t,Math.floor(s-i*d/c+u)),h=Math.min(n,Math.floor(s+(c-i)*d/c+u));js(a,s,p,h)}const e=a[s];let o=t,r=n;for(Xt(a,t,s),Yt(a[n],e)>0&&Xt(a,t,n);o<r;){for(Xt(a,o,r),o++,r--;Yt(a[o],e)<0;)o=o+1;for(;Yt(a[r],e)>0;)r=r-1}Yt(a[t],e)===0?Xt(a,t,r):(r=r+1,Xt(a,r,n)),r<=s&&(t=r+1),s<=r&&(n=r-1)}}function _s(a,s,t,n,e){const o=s[s.length-1],[r,c]=[a.length/o,o],i=ft(t,r*n),l=ft("int32",r*n);for(let u=0;u<r;u++){const p=u*c,h=a.subarray(p,p+c);let m=new Array(h.length);h.forEach((k,b)=>m[b]={value:k,index:b}),n<m.length&&(js(m,n),m=m.slice(0,n)),e&&m.sort(Yt);const g=u*n,f=i.subarray(g,g+n),I=l.subarray(g,g+n);for(let k=0;k<n;k++)f[k]=m[k].value,I[k]=m[k].index}const d=s.slice();return d[d.length-1]=n,[tt(d,t,i),tt(d,"int32",l)]}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Us(a,s,t,n){const e=mt(s,t)[0],o=[1,t[0],1];for(let m=0;m<e;m++)o[0]*=t[m];o[1]=t[e];for(let m=e+1;m<t.length;m++)o[2]*=t[m];const r={},c=new Int32Array(t[e]),i=new pt(o,n,a),l=[],d=o[0]===1&&o[2]===1;for(let m=0;m<t[e];m++){let g;if(d)g=a[m].toString();else{const f=[];for(let I=0;I<o[0];I++)for(let k=0;k<o[2];k++)f.push(i.get(I,m,k));g=f.join(",")}if(r[g]!==void 0)c[m]=r[g];else{const f=Object.keys(r).length;r[g]=f,c[m]=f,l.push(m)}}const u=o.slice();u[1]=Object.keys(r).length;const p=new pt(u,n);l.forEach((m,g)=>{for(let f=0;f<o[0];f++)for(let I=0;I<o[2];I++)p.set(i.get(f,m,I),f,g,I)});const h=t.slice();return h[e]=u[1],{outputValues:p.values,outputShape:h,indices:c}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const oh=Object.freeze(Object.defineProperty({__proto__:null,addImpl:as,bincountImpl:Me,bincountReduceImpl:rs,castImpl:os,ceilImpl:is,concatImpl:cs,equalImpl:ls,expImpl:us,expm1Impl:fs,floorImpl:hs,gatherNdImpl:ms,gatherV2Impl:gs,greaterEqualImpl:ks,greaterImpl:Is,lessEqualImpl:bs,lessImpl:xs,linSpaceImpl:Ss,logImpl:ys,maxImpl:ws,maximumImpl:Ns,minimumImpl:Cs,multiplyImpl:Re,negImpl:vs,notEqualImpl:Ts,prodImpl:Ms,raggedGatherImpl:Rs,raggedRangeImpl:Fs,raggedTensorToTensorImpl:Ds,rangeImpl:Vs,rsqrtImpl:Es,scatterImpl:zt,sigmoidImpl:Mc,simpleAbsImpl:ss,sliceImpl:Ws,sparseFillEmptyRowsImpl:As,sparseReshapeImpl:Ps,sparseSegmentReductionImpl:De,sqrtImpl:Dc,squaredDifferenceImpl:$s,stridedSliceImpl:zs,stringNGramsImpl:Hs,stringSplitImpl:Ls,stringToHashBucketFastImpl:Bs,subImpl:Gs,tileImpl:qs,topKImpl:_s,transposeImpl:Fe,uniqueImpl:Us},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */na("cpu",()=>new fe,1);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ks=J(mn,a=>a>=0?a:Math.exp(a)-1),Hc={kernelName:mn,backendName:"cpu",kernelFunc:Ks};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Xs(a){const{inputs:s,backend:t,attrs:n}=a,{x:e}=s,{alpha:o}=n;q([e],"leakyRelu");const r=G(e.shape),c=t.data.get(e.dataId).values,i=ft("float32",r);for(let l=0;l<c.length;l++)i[l]=c[l]<0?o*c[l]:c[l];return t.makeTensorInfo(e.shape,"float32",i)}const Lc={kernelName:sa,backendName:"cpu",kernelFunc:Xs};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Bc=it((a,s)=>a<0?s*a:a);function Ys(a){const{inputs:s,backend:t}=a,{x:n,alpha:e}=s;q([n,e],"prelu");const o=t.data.get(n.dataId).values,r=t.data.get(e.dataId).values,[c,i]=Bc(n.shape,e.shape,o,r,"float32");return t.makeTensorInfo(i,"float32",c)}const Gc={kernelName:oa,backendName:"cpu",kernelFunc:Ys};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Zs=J(gn,a=>Math.max(0,a)),qc={kernelName:gn,backendName:"cpu",kernelFunc:Zs};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Js=J(In,a=>Math.min(Math.max(0,a),6)),jc={kernelName:In,backendName:"cpu",kernelFunc:Js};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ie(a,s,t,n,e){if(t==="linear")return yt({inputs:{x:s},backend:a});if(t==="relu")return Zs({inputs:{x:s},backend:a});if(t==="elu")return Ks({inputs:{x:s},backend:a});if(t==="relu6")return Js({inputs:{x:s},backend:a});if(t==="prelu")return Ys({inputs:{x:s,alpha:n},backend:a});if(t==="leakyrelu")return Xs({inputs:{x:s},backend:a,attrs:{alpha:e}});if(t==="sigmoid")return Os({inputs:{x:s},backend:a});throw new Error(`Activation ${t} has not been implemented for the CPU backend.`)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function st(a){const{inputs:s,backend:t,attrs:n}=a,{x:e}=s,{shape:o}=n,r=G(e.shape),c=ra(o,r),i=G(c);ut(r===i,()=>`The new shape (${c}) has ${i} elements and the old shape (${e.shape}) has ${r} elements. The new shape and old shape must have the same number of elements.`),t.incRef(e.dataId);const l=t.data.get(e.dataId);if(l.complexTensorInfos!=null){const d=l.complexTensorInfos.real,u=l.complexTensorInfos.imag;d.shape=c,u.shape=c}return{dataId:e.dataId,shape:c,dtype:e.dtype}}const _c={kernelName:aa,backendName:"cpu",kernelFunc:st};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Qs(a){const{inputs:s,backend:t,attrs:n}=a,{a:e,b:o}=s,{transposeA:r,transposeB:c}=n;q([e,o],"matMul");const i=e.shape.length,l=o.shape.length,d=r?e.shape[i-2]:e.shape[i-1],u=c?o.shape[l-1]:o.shape[l-2],p=r?e.shape[i-1]:e.shape[i-2],h=c?o.shape[l-2]:o.shape[l-1],m=e.shape.slice(0,-2),g=o.shape.slice(0,-2),f=G(m),I=G(g),b=de(e.shape.slice(0,-2),o.shape.slice(0,-2)).concat([p,h]);ut(d===u,()=>`Error in matMul: inner shapes (${d}) and (${u}) of Tensors with shapes ${e.shape} and ${o.shape} and transposeA=${r} and transposeB=${c} must match.`);const x=r?[f,d,p]:[f,p,d],S=c?[I,h,u]:[I,u,h],y=st({inputs:{x:e},backend:t,attrs:{shape:x}}),w=st({inputs:{x:o},backend:t,attrs:{shape:S}}),N=r?y.shape[1]:y.shape[2],R=r?y.shape[2]:y.shape[1],F=c?w.shape[1]:w.shape[2],E=Math.max(f,I),W=t.data.get(y.dataId).values,C=t.data.get(w.dataId).values,D=K(y.shape),v=K(w.shape),[T,O,M]=r?[D[0],1,D[1]]:[D[0],D[1],1],[V,P,A]=c?[1,v[1],v[0]]:[v[1],1,v[0]],H=R*F,$=tt([E,R,F],y.dtype),L=$.values,z=t.blockSize;for(let B=0;B<E;B++){const j=B%f,U=B%I;for(let _=0;_<R;_+=z){const X=Math.min(_+z,R);for(let Y=0;Y<F;Y+=z){const Z=Math.min(Y+z,F);for(let et=0;et<N;et+=z){const rt=Math.min(et+z,N);for(let nt=_;nt<X;nt++)for(let Q=Y;Q<Z;Q++){let at=0;for(let ot=et;ot<rt;ot++){const Ct=W[j*T+nt*O+ot*M],dt=C[ot*V+Q*P+U*A];at+=Ct*dt}L[B*H+(nt*F+Q)]+=at}}}}}return t.disposeIntermediateTensorInfo(y),t.disposeIntermediateTensorInfo(w),t.makeTensorInfo(b,$.dtype,$.values)}const Uc={kernelName:ia,backendName:"cpu",kernelFunc:Qs};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Kc(a){const{inputs:s,backend:t,attrs:n}=a,{a:e,b:o,bias:r,preluActivationWeights:c}=s,{transposeA:i,transposeB:l,activation:d,leakyreluAlpha:u}=n;let p,h,m;const g=[];p=Qs({inputs:{a:e,b:o},attrs:{transposeA:i,transposeB:l},backend:t}),r&&(h=Bt({inputs:{a:p,b:r},backend:t}),g.push(p),p=h),d&&(m=ie(t,p,d,c,u),g.push(p),p=m);for(const I of g)t.disposeIntermediateTensorInfo(I);return p}const Xc={kernelName:ca,backendName:"cpu",kernelFunc:Kc};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Yc=J(kn,a=>Math.acos(a)),Zc={kernelName:kn,backendName:"cpu",kernelFunc:Yc};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Jc=J(xn,a=>Math.acosh(a)),Qc={kernelName:xn,backendName:"cpu",kernelFunc:Jc};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function tl(a){const{inputs:s,backend:t}=a,n=s;q(s,"addN");const e=n.map(c=>t.data.get(c.dataId).values),o=tt(n[0].shape,n[0].dtype),r=o.values;for(let c=0;c<n.length;c++){const i=e[c];for(let l=0;l<r.length;l++)r[l]+=i[l]}return t.makeTensorInfo(o.shape,o.dtype,o.values)}const el={kernelName:la,backendName:"cpu",kernelFunc:tl};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function nl(a){const{inputs:s,backend:t,attrs:n}=a,{x:e}=s,{axis:o,keepDims:r}=n;q(e,"all");const c=mt(o,e.shape);let i=c;const l=wt(i,e.shape.length);let d=e;l!=null&&(d=ht({inputs:{x:e},backend:t,attrs:{perm:l}}),i=Nt(i.length,e.shape.length)),$t("all",i,d.shape.length);const[u,p]=Tt(d.shape,i),h=G(p),m=It(G(u),d.dtype),g=t.data.get(d.dataId).values;for(let I=0;I<m.length;++I){const k=I*h;let b=g[k];for(let x=0;x<h;++x){const S=g[k+x];b=b&&S}m[I]=b}l!=null&&t.disposeIntermediateTensorInfo(d);const f=t.makeTensorInfo(u,d.dtype,m);if(r){const I=Pt(u,c),k=st({inputs:{x:f},backend:t,attrs:{shape:I}});return t.disposeIntermediateTensorInfo(f),k}return f}const sl={kernelName:da,backendName:"cpu",kernelFunc:nl};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ol(a){const{inputs:s,backend:t,attrs:n}=a,{x:e}=s,{axis:o,keepDims:r}=n;q(e,"any");const c=mt(o,e.shape);let i=c;const l=wt(i,e.shape.length);let d=e;l!=null&&(d=ht({inputs:{x:e},backend:t,attrs:{perm:l}}),i=Nt(i.length,e.shape.length)),$t("any",i,d.shape.length);const[u,p]=Tt(d.shape,i),h=G(p),m=It(G(u),d.dtype),g=t.data.get(d.dataId).values;for(let I=0;I<m.length;++I){const k=I*h;let b=g[k];for(let x=0;x<h;++x){const S=g[k+x];b=b||S}m[I]=b}l!=null&&t.disposeIntermediateTensorInfo(d);const f=t.makeTensorInfo(u,d.dtype,m);if(r){const I=Pt(u,c),k=st({inputs:{x:f},backend:t,attrs:{shape:I}});return t.disposeIntermediateTensorInfo(f),k}return f}const al={kernelName:ua,backendName:"cpu",kernelFunc:ol};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function rl(a){const{inputs:s,backend:t,attrs:n}=a,{x:e}=s,{axis:o}=n;q(e,"argMax");let r=mt(o,e.shape);const c=wt(r,e.shape.length);let i=e;const l=[];c!=null&&(i=ht({inputs:{x:e},backend:t,attrs:{perm:c}}),l.push(i),r=Nt(r.length,i.shape.length)),r=[r[0]],$t("argMax",r,i.shape.length);const[d,u]=Tt(i.shape,r),p=G(d),h=It(p,"int32"),m=G(u),g=t.data.get(i.dataId).values;for(let f=0;f<h.length;++f){const I=f*m;let k=g[I],b=0;for(let x=0;x<m;++x){const S=g[I+x];S>k&&(k=S,b=x)}h[f]=b}return l.forEach(f=>t.disposeIntermediateTensorInfo(f)),t.makeTensorInfo(d,"int32",h)}const il={kernelName:pa,backendName:"cpu",kernelFunc:rl};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function cl(a){const{inputs:s,backend:t,attrs:n}=a,{x:e}=s,{axis:o}=n;q(e,"argMin");let r=mt(o,e.shape);const c=wt(r,e.shape.length);let i=e;const l=[];c!=null&&(i=ht({inputs:{x:e},backend:t,attrs:{perm:c}}),l.push(i),r=Nt(r.length,i.shape.length)),r=[r[0]],$t("argMin",r,i.shape.length);const[d,u]=Tt(i.shape,r),p=G(d),h=It(p,"int32"),m=G(u),g=t.data.get(i.dataId).values;for(let f=0;f<h.length;++f){const I=f*m;let k=g[I],b=0;for(let x=0;x<m;++x){const S=g[I+x];S<k&&(k=S,b=x)}h[f]=b}return l.forEach(f=>t.disposeIntermediateTensorInfo(f)),t.makeTensorInfo(d,"int32",h)}const ll={kernelName:fa,backendName:"cpu",kernelFunc:cl};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const dl=J(bn,a=>Math.asin(a)),ul={kernelName:bn,backendName:"cpu",kernelFunc:dl};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const pl=J(Sn,a=>Math.asinh(a)),fl={kernelName:Sn,backendName:"cpu",kernelFunc:pl};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const hl=J(yn,a=>Math.atan(a)),ml={kernelName:yn,backendName:"cpu",kernelFunc:hl};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const gl=it((a,s)=>Math.atan2(a,s)),Il=lt(wn,gl),kl={kernelName:wn,backendName:"cpu",kernelFunc:Il};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const xl=J(Nn,a=>Math.atanh(a)),bl={kernelName:Nn,backendName:"cpu",kernelFunc:xl};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ee(a,s,t,n,e,o){const r=e.strideHeight,c=e.strideWidth,i=e.dilationHeight,l=e.dilationWidth,d=e.effectiveFilterHeight,u=e.effectiveFilterWidth,p=e.padInfo.top,h=e.padInfo.left,m=o==="max"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,g=tt(e.outShape,t),f=g.values,I=e.outShape[1]*e.outShape[2]*e.outShape[3],k=e.outShape[2]*e.outShape[3],b=e.outShape[3];for(let x=0;x<e.batchSize;++x){const S=x*I,y=x*n[0];for(let w=0;w<e.inChannels;++w)for(let N=0;N<e.outHeight;++N){const R=N*r-p,F=Math.max(0,R),E=Math.min(e.inHeight,d+R),W=S+N*k;for(let C=0;C<e.outWidth;++C){const D=C*c-h,v=Math.max(0,D),T=Math.min(e.inWidth,u+D);let O=m,M=0,V=0;for(let A=F;A<E;A+=i){const H=y+A*n[1];for(let $=v;$<T;$+=l){const L=H+$*n[2],z=a[L+w];o==="max"&&z>O?O=z:o==="avg"&&(M+=z,V++)}if(isNaN(O))break}const P=W+C*b+w;f[P]=o==="avg"?M/V:O}}}return g}function to(a,s,t,n,e=!1,o=!1){const r=tt(n.outShape,"int32"),c=n.strideHeight,i=n.strideWidth,l=n.dilationHeight,d=n.dilationWidth,u=n.effectiveFilterHeight,p=n.effectiveFilterWidth,h=n.padInfo.top,m=n.padInfo.left,g=tt(s,t,a);for(let f=0;f<n.batchSize;++f)for(let I=0;I<n.inChannels;++I)for(let k=0;k<n.outHeight;++k){const b=k*c-h;let x=b;for(;x<0;)x+=l;const S=Math.min(n.inHeight,u+b);for(let y=0;y<n.outWidth;++y){const w=y*i-m;let N=w;for(;N<0;)N+=d;const R=Math.min(n.inWidth,p+w);let F=Number.NEGATIVE_INFINITY,E=-1;for(let W=x;W<S;W+=l){const C=W-b;for(let D=N;D<R;D+=d){const v=D-w,T=g.get(f,W,D,I);T>F&&(F=T,e?E=o?((f*n.inHeight+W)*n.inWidth+D)*n.inChannels+I:(W*n.inWidth+D)*n.inChannels+I:E=C*p+v)}}r.set(E,f,k,y,I)}}return r}function eo(a,s,t,n,e,o){const r=e.strideDepth,c=e.strideHeight,i=e.strideWidth,l=e.dilationDepth,d=e.dilationHeight,u=e.dilationWidth,p=e.effectiveFilterDepth,h=e.effectiveFilterHeight,m=e.effectiveFilterWidth,g=e.padInfo.front,f=e.padInfo.top,I=e.padInfo.left,k=o==="max"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,b=tt(e.outShape,t),x=b.values,S=e.outShape[1]*e.outShape[2]*e.outShape[3]*e.outShape[4],y=e.outShape[2]*e.outShape[3]*e.outShape[4],w=e.outShape[3]*e.outShape[4],N=e.outShape[4];for(let R=0;R<e.batchSize;++R){const F=R*S,E=R*n[0];for(let W=0;W<e.inChannels;++W)for(let C=0;C<e.outDepth;++C){const D=C*r-g;let v=D;for(;v<0;)v+=l;const T=Math.min(e.inDepth,p+D),O=F+C*y;for(let M=0;M<e.outHeight;++M){const V=M*c-f;let P=V;for(;P<0;)P+=d;const A=Math.min(e.inHeight,h+V),H=O+M*w;for(let $=0;$<e.outWidth;++$){const L=$*i-I;let z=L;for(;z<0;)z+=u;const B=Math.min(e.inWidth,m+L),j=H+$*N;let U=k,_=0,X=0;for(let Z=v;Z<T;Z+=l){const et=E+Z*n[1];for(let rt=P;rt<A;rt+=d){const nt=et+rt*n[2];for(let Q=z;Q<B;Q+=u){const at=nt+Q*n[3],ot=a[at+W];if(o==="max"&&ot>U?U=ot:o==="avg"&&(_+=ot,X++),isNaN(U))break}if(isNaN(U))break}if(isNaN(U))break}const Y=j+W;x[Y]=o==="avg"?_/Math.max(X,1):U}}}}return b}function Sl(a,s){const t=tt(s.outShape,"int32"),n=s.strideDepth,e=s.strideHeight,o=s.strideWidth,r=s.dilationDepth,c=s.dilationHeight,i=s.dilationWidth,l=s.effectiveFilterDepth,d=s.effectiveFilterHeight,u=s.effectiveFilterWidth,p=s.padInfo.front,h=s.padInfo.top,m=s.padInfo.left;for(let g=0;g<s.batchSize;++g)for(let f=0;f<s.inChannels;++f)for(let I=0;I<s.outDepth;++I){const k=I*n-p;let b=k;for(;b<0;)b+=r;const x=Math.min(s.inDepth,l+k);for(let S=0;S<s.outHeight;++S){const y=S*e-h;let w=y;for(;w<0;)w+=c;const N=Math.min(s.inHeight,d+y);for(let R=0;R<s.outWidth;++R){const F=R*o-m;let E=F;for(;E<0;)E+=i;const W=Math.min(s.inWidth,u+F);let C=Number.NEGATIVE_INFINITY,D=-1;for(let v=b;v<x;v+=r){const T=v-k;for(let O=w;O<N;O+=c){const M=O-y;for(let V=E;V<W;V+=i){const P=V-F,A=a.get(g,v,O,V,f);A>=C&&(C=A,D=T*d*u+M*d+P)}}}t.set(D,g,I,S,R,f)}}}return t}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function yl(a){const{inputs:s,backend:t,attrs:n}=a,{x:e}=s;q(e,"avgPool");const{filterSize:o,strides:r,pad:c,dimRoundingMode:i}=n,l=1;ut(Se(r,l),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${r} and dilations '${l}'`);const d=Qt(e.shape,o,r,l,c,i);let u;if(d.filterWidth===1&&d.filterHeight===1&&ye(d.inShape,d.outShape))u=yt({inputs:{x:e},backend:t});else{const p=t.data.get(e.dataId).values,h=K(e.shape),m=Ee(p,e.shape,e.dtype,h,d,"avg");u=t.makeTensorInfo(d.outShape,e.dtype,m.values)}return u}const wl={kernelName:ha,backendName:"cpu",kernelFunc:yl};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Nl(a){const{inputs:s,backend:t,attrs:n}=a,{x:e}=s,{filterSize:o,strides:r,pad:c,dimRoundingMode:i,dataFormat:l}=n;q(e,"avgPool3d");const d=pe(e.shape,o,r,1,c,i,l),u=t.data.get(e.dataId).values,p=eo(u,e.shape,e.dtype,K(e.shape),d,"avg");return t.makeTensorInfo(p.shape,"float32",p.values)}const Cl={kernelName:ma,backendName:"cpu",kernelFunc:Nl};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function vl(a){const{inputs:s,backend:t,attrs:n}=a,{dy:e,input:o}=s,{filterSize:r,strides:c,pad:i,dimRoundingMode:l}=n;q([e,o],"avgPool3DGrad");const d=pe(o.shape,r,c,1,i,l),u=d.strideDepth,p=d.strideHeight,h=d.strideWidth,m=d.filterDepth,g=d.filterHeight,f=d.filterWidth,I=d.dilationDepth,k=d.dilationHeight,b=d.dilationWidth,x=d.effectiveFilterDepth,S=d.effectiveFilterHeight,y=d.effectiveFilterWidth,w=x-1-d.padInfo.front,N=y-1-d.padInfo.left,R=S-1-d.padInfo.top,F=tt(o.shape,"float32"),E=1/(m*g*f),W=t.bufferSync(e);for(let C=0;C<d.batchSize;++C)for(let D=0;D<d.inChannels;++D)for(let v=0;v<d.inDepth;++v)for(let T=0;T<d.inHeight;++T)for(let O=0;O<d.inWidth;++O){const M=v-w,V=T-R,P=O-N;let A=0;for(let H=0;H<x;H+=I){const $=(M+H)/u;if(!($<0||$>=d.outDepth||Math.floor($)!==$))for(let L=0;L<S;L+=k){const z=(V+L)/p;if(!(z<0||z>=d.outHeight||Math.floor(z)!==z))for(let B=0;B<y;B+=b){const j=(P+B)/h;if(j<0||j>=d.outWidth||Math.floor(j)!==j)continue;const U=W.get(C,$,z,j,D);A+=U}}}F.set(A*E,C,v,T,O,D)}return t.makeTensorInfo(F.shape,F.dtype,F.values)}const Tl={kernelName:ga,backendName:"cpu",kernelFunc:vl};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ml(a){const{inputs:s,backend:t,attrs:n}=a,{dy:e,input:o}=s,r=o;q([e,o],"avgPoolGrad");const{filterSize:c,strides:i,pad:l}=n,d=Qt(r.shape,c,i,1,l),u=d.strideHeight,p=d.strideWidth,h=d.filterHeight,m=d.filterWidth,g=d.dilationHeight,f=d.dilationWidth,I=d.effectiveFilterHeight,k=d.effectiveFilterWidth,b=k-1-d.padInfo.left,x=I-1-d.padInfo.top,S=tt(r.shape,"float32"),y=1/(h*m),w=t.data.get(e.dataId).values,N=tt(e.shape,"float32",w);for(let R=0;R<d.batchSize;++R)for(let F=0;F<d.inChannels;++F)for(let E=0;E<d.inHeight;++E)for(let W=0;W<d.inWidth;++W){const C=E-x,D=W-b;let v=0;for(let T=0;T<I;T+=g){const O=(C+T)/u;if(!(O<0||O>=d.outHeight||Math.floor(O)!==O))for(let M=0;M<k;M+=f){const V=(D+M)/p;if(V<0||V>=d.outWidth||Math.floor(V)!==V)continue;const P=N.get(R,O,V,F);v+=P}}S.set(v*y,R,E,W,F)}return t.makeTensorInfo(S.shape,S.dtype,S.values)}const Rl={kernelName:Ia,backendName:"cpu",kernelFunc:Ml};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Fl(a){const{inputs:s,backend:t,attrs:n}=a,{x:e,scale:o,offset:r,mean:c,variance:i}=s;ut(c.shape.length===i.shape.length,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),ut(r==null||c.shape.length===r.shape.length,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),ut(o==null||c.shape.length===o.shape.length,()=>"Batch normalization gradient requires mean and scale to have equal ranks."),q([e,c,i,o,r],"batchNorm");let{varianceEpsilon:l}=n;l==null&&(l=.001);const d=t.data.get(e.dataId).values,u=t.data.get(c.dataId).values,p=t.data.get(i.dataId).values,h=o?t.data.get(o.dataId).values:new Float32Array([1]),m=r?t.data.get(r.dataId).values:new Float32Array([0]),g=new Float32Array(d.length),f=m.length,I=h.length,k=p.length,b=u.length;let x=0,S=0,y=0,w=0;for(let N=0;N<d.length;++N)g[N]=m[x++]+(d[N]-u[S++])*h[y++]/Math.sqrt(p[w++]+l),x>=f&&(x=0),S>=b&&(S=0),y>=I&&(y=0),w>=k&&(w=0);return t.makeTensorInfo(e.shape,e.dtype,g)}const Dl={kernelName:ka,backendName:"cpu",kernelFunc:Fl};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Vl(a){const{inputs:s,backend:t,attrs:n}=a,{x:e}=s,{blockShape:o,crops:r}=n;q([e],"batchToSpaceND");const c=o.reduce((I,k)=>I*k),i=Cn(e.shape,o,c),l=vn(i.length,o.length),d=Tn(e.shape,o,c),u=ba(r,o.length),p=Sa(d,r,o.length),h=st({inputs:{x:e},backend:t,attrs:{shape:i}}),m=ht({inputs:{x:h},backend:t,attrs:{perm:l}}),g=st({inputs:{x:m},backend:t,attrs:{shape:d}}),f=At({inputs:{x:g},backend:t,attrs:{begin:u,size:p}});return t.disposeIntermediateTensorInfo(h),t.disposeIntermediateTensorInfo(m),t.disposeIntermediateTensorInfo(g),f}const El={kernelName:xa,backendName:"cpu",kernelFunc:Vl};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ol(a){const{inputs:s,backend:t,attrs:n}=a,{x:e,weights:o}=s,{size:r}=n,c=t.data.get(e.dataId).values,i=t.data.get(o.dataId).values,l=Me(c,i,o.dtype,o.shape,r);return t.makeTensorInfo([r],o.dtype,l)}const Wl={kernelName:ya,backendName:"cpu",kernelFunc:Ol};/**
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
 */function Al(a){const{inputs:s,backend:t}=a,{s0:n,s1:e}=s,o=t.data.get(n.dataId).values,r=t.data.get(e.dataId).values,c=de(Array.from(o),Array.from(r));return t.makeTensorInfo([c.length],"int32",Int32Array.from(c))}const Pl={kernelName:wa,backendName:"cpu",kernelFunc:Al};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const $l=J(Mn,(a,s)=>{const t=s;return a>t.clipValueMax?t.clipValueMax:a<t.clipValueMin?t.clipValueMin:a}),zl={kernelName:Mn,backendName:"cpu",kernelFunc:$l};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Hl=a=>{const{x:s}=a.inputs,t=a.backend,n=new Float32Array(G(s.shape)),e=t.data.get(s.dataId),o=e.complexTensorInfos.real,r=e.complexTensorInfos.imag,c=t.data.get(o.dataId).values,i=t.data.get(r.dataId).values;for(let l=0;l<c.length;l++){const d=c[l],u=i[l];n[l]=Math.hypot(d,u)}return t.makeOutput(n,s.shape,"float32")},Ll={kernelName:Na,backendName:"cpu",kernelFunc:Hl};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Gt(a){const{inputs:s,backend:t}=a,{input:n}=s,e=t.data.get(n.dataId).complexTensorInfos.imag,o=t.data.get(e.dataId).values;return t.makeTensorInfo(e.shape,e.dtype,o)}const Bl={kernelName:Ca,backendName:"cpu",kernelFunc:Gt};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qt(a){const{inputs:s,backend:t,attrs:n}=a,{axis:e}=n,o=mt(e,s[0].shape)[0],r=s.map(g=>g.shape);Ta(r,o);let c=Ie(s.map(g=>g.shape),o);if(G(c)===0)return t.makeTensorInfo(c,s[0].dtype,[]);const i=s.filter(g=>G(g.shape)>0);if(i.length===1)return yt({inputs:{x:i[0]},backend:t});if(i[0].dtype==="complex64"){const g=i.map(x=>Wt({inputs:{input:x},backend:t})),f=i.map(x=>Gt({inputs:{input:x},backend:t})),I=qt({inputs:g,backend:t,attrs:{axis:o}}),k=qt({inputs:f,backend:t,attrs:{axis:o}}),b=gt({inputs:{real:I,imag:k},backend:t});return g.forEach(x=>t.disposeIntermediateTensorInfo(x)),f.forEach(x=>t.disposeIntermediateTensorInfo(x)),t.disposeIntermediateTensorInfo(I),t.disposeIntermediateTensorInfo(k),b}const l=i.map(g=>{const I=[-1,G(g.shape.slice(o))];return st({inputs:{x:g},backend:t,attrs:{shape:I}})}),d=l.map(g=>({vals:t.data.get(g.dataId).values,shape:g.shape}));c=Ie(l.map(g=>g.shape),1);const u=l[0].shape[0]===1,p=cs(d,c,s[0].dtype,u),h=Ie(i.map(g=>g.shape),o),m=t.makeTensorInfo(h,s[0].dtype,p);return l.forEach(g=>t.disposeIntermediateTensorInfo(g)),m}const Gl={kernelName:va,backendName:"cpu",kernelFunc:qt};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function no(a){const{inputs:s,backend:t,attrs:n}=a,{x:e,filter:o}=s,{strides:r,pad:c,dataFormat:i,dilations:l,dimRoundingMode:d}=n;q([e,o],"conv2d");const u=we(i),p=_t(e.shape,o.shape,r,l,c,d,!1,u),h=p.filterHeight,m=p.filterWidth,g=p.dilationHeight,f=p.dilationWidth,I=p.padInfo.left,k=p.padInfo.top,b=p.dataFormat==="channelsLast",x=new pt(p.outShape,e.dtype),S=K(e.shape),y=K(o.shape),w=S[0],N=b?S[1]:S[2],R=b?S[2]:1,F=b?1:S[1],E=x.strides[0],W=b?x.strides[1]:x.strides[2],C=b?x.strides[2]:1,D=b?1:x.strides[1],v=t.data.get(e.dataId).values,T=t.data.get(o.dataId).values,O=x.values;for(let M=0;M<p.batchSize;++M){const V=M*w,P=M*E;for(let A=0;A<p.outHeight;++A){const H=P+A*W,$=A*p.strideHeight-k;for(let L=0;L<h;++L){const z=$+L*g;if(z<0||z>=p.inHeight)continue;const B=L*y[0],j=V+z*N;for(let U=0;U<p.outWidth;++U){const _=H+U*C,X=U*p.strideWidth-I;for(let Y=0;Y<m;++Y){const Z=X+Y*f;if(Z<0||Z>=p.inWidth)continue;const et=B+Y*y[1],rt=j+Z*R;let nt=et;for(let Q=0;Q<p.inChannels;++Q){const at=v[rt+Q*F];for(let ot=0;ot<p.outChannels;++ot)O[_+ot*D]+=at*T[nt+ot];nt+=p.outChannels}}}}}}return t.makeTensorInfo(x.shape,x.dtype,O)}const ql={kernelName:Ma,backendName:"cpu",kernelFunc:no};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function jl(a){const{inputs:s,backend:t,attrs:n}=a,{x:e,dy:o}=s,{strides:r,pad:c,dataFormat:i,dimRoundingMode:l,filterShape:d}=n;q([e,o],"conv2dBackpropFilter");const u=we(i),p=_t(e.shape,d,r,1,c,l,!1,u),{strideHeight:h,strideWidth:m,filterHeight:g,filterWidth:f}=p,I=p.dataFormat==="channelsLast",k=new pt(p.filterShape,"float32"),b=p.padInfo.left,x=p.padInfo.top,S=t.data.get(e.dataId).values,y=t.data.get(o.dataId).values,w=new pt(e.shape,e.dtype,S),N=new pt(o.shape,o.dtype,y);for(let R=0;R<g;++R){const F=Math.max(0,Math.ceil((x-R)/h)),E=Math.min(p.outHeight,(p.inHeight+x-R)/h);for(let W=0;W<f;++W){const C=Math.max(0,Math.ceil((b-W)/m)),D=Math.min(p.outWidth,(p.inWidth+b-W)/m);for(let v=0;v<p.inChannels;++v)for(let T=0;T<p.outChannels;++T){let O=0;for(let M=0;M<p.batchSize;++M)for(let V=F;V<E;++V){const P=R+V*h-x;for(let A=C;A<D;++A){const H=W+A*m-b;I?O+=w.get(M,P,H,v)*N.get(M,V,A,T):O+=w.get(M,v,P,H)*N.get(M,T,V,A)}}k.set(O,R,W,v,T)}}}return t.makeTensorInfo(k.shape,k.dtype,k.values)}const _l={kernelName:Ra,backendName:"cpu",kernelFunc:jl};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ul(a){const{inputs:s,backend:t,attrs:n}=a,{dy:e,filter:o}=s,{inputShape:r,strides:c,pad:i,dataFormat:l,dimRoundingMode:d}=n;q([e,o],"conv2dBackpropInput");const u=K(o.shape),p=K(e.shape);let h=we(l);const m=_t(r,o.shape,c,1,i,d,!1,h),g=new pt(m.inShape,"float32"),f=g.values,I=t.data.get(e.dataId).values,k=t.data.get(o.dataId).values,[b,x,S]=u,{batchSize:y,filterHeight:w,filterWidth:N,inChannels:R,inHeight:F,inWidth:E,outChannels:W,outHeight:C,outWidth:D,strideHeight:v,strideWidth:T}=m;h=m.dataFormat;const O=w-1-m.padInfo.top,M=N-1-m.padInfo.left,V=h==="channelsLast",P=g.strides[0],A=V?g.strides[1]:g.strides[2],H=V?g.strides[2]:1,$=V?1:g.strides[1],L=p[0],z=V?p[1]:p[2],B=V?p[2]:1,j=V?1:p[1];for(let U=0;U<y;++U)for(let _=0;_<R;++_)for(let X=0;X<F;++X){const Y=X-O,Z=Math.max(0,Math.ceil(Y/v)),et=Math.min(C,(w+Y)/v);for(let rt=0;rt<E;++rt){const nt=rt-M,Q=Math.max(0,Math.ceil(nt/T)),at=Math.min(D,(N+nt)/T);let ot=0;for(let dt=Z;dt<et;++dt){const Mt=dt*v-Y;for(let kt=Q;kt<at;++kt){const Ot=kt*T-nt,bt=L*U+z*dt+B*kt,vt=b*(w-1-Mt)+x*(N-1-Ot)+S*_;for(let Rt=0;Rt<W;++Rt){const Ft=I[bt+j*Rt],Dt=k[vt+Rt];ot+=Ft*Dt}}}const Ct=P*U+A*X+H*rt+$*_;f[Ct]=ot}}return t.makeTensorInfo(g.shape,g.dtype,g.values)}const Kl={kernelName:Fa,backendName:"cpu",kernelFunc:Ul};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Xl(a){const{inputs:s,backend:t,attrs:n}=a,{x:e,filter:o}=s,{strides:r,pad:c,dilations:i}=n;q([e,o],"conv3d");const l=Ne(e.shape,o.shape,r,i,c),{filterDepth:d,filterHeight:u,filterWidth:p,dilationDepth:h,dilationHeight:m,dilationWidth:g,padInfo:f}=l,I=f.front,k=f.left,b=f.top,x=new pt(l.outShape,e.dtype),S=t.data.get(e.dataId).values,y=t.data.get(o.dataId).values,w=x.values,N=K(e.shape),R=K(o.shape);for(let F=0;F<l.batchSize;++F){const E=F*N[0],W=F*x.strides[0];for(let C=0;C<l.outDepth;++C){const D=W+C*x.strides[1],v=C*l.strideDepth-I;for(let T=0;T<d;++T){const O=v+T*h;if(O<0||O>=l.inDepth)continue;const M=T*R[0],V=E+O*N[1];for(let P=0;P<l.outHeight;++P){const A=D+P*x.strides[2],H=P*l.strideHeight-b;for(let $=0;$<u;++$){const L=H+$*m;if(L<0||L>=l.inHeight)continue;const z=M+$*R[1],B=V+L*N[2];for(let j=0;j<l.outWidth;++j){const U=A+j*l.outChannels,_=j*l.strideWidth-k;for(let X=0;X<p;++X){const Y=_+X*g;if(Y<0||Y>=l.inWidth)continue;const Z=z+X*R[2],et=B+Y*l.inChannels;let rt=Z;for(let nt=0;nt<l.inChannels;++nt){const Q=S[et+nt];for(let at=0;at<l.outChannels;++at)w[U+at]+=Q*y[rt+at];rt+=l.outChannels}}}}}}}}return t.makeTensorInfo(x.shape,x.dtype,x.values)}const Yl={kernelName:Da,backendName:"cpu",kernelFunc:Xl};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Zl(a){const{inputs:s,backend:t,attrs:n}=a,{x:e,dy:o}=s,{strides:r,pad:c,filterShape:i}=n;q([e,o],"conv3dBackpropFilterV2");const l=K(e.shape),d=K(o.shape),u=Ne(e.shape,i,r,1,c),p=u.strideDepth,h=u.strideHeight,m=u.strideWidth,g=u.filterDepth,f=u.filterHeight,I=u.filterWidth,k=new pt(u.filterShape,"float32"),b=k.values,[x,S,y,w]=k.strides,N=t.data.get(o.dataId).values,[R,F,E,W]=d,C=t.data.get(e.dataId).values,[D,v,T,O]=l,M=u.padInfo.front,V=u.padInfo.left,P=u.padInfo.top;for(let A=0;A<g;++A){const H=Math.max(0,Math.ceil((M-A)/p)),$=Math.min(u.outDepth,(u.inDepth+M-A)/p),L=A*x;for(let z=0;z<f;++z){const B=Math.max(0,Math.ceil((P-z)/h)),j=Math.min(u.outHeight,(u.inHeight+P-z)/h),U=z*S+L;for(let _=0;_<I;++_){const X=Math.max(0,Math.ceil((V-_)/m)),Y=Math.min(u.outWidth,(u.inWidth+V-_)/m),Z=_*y+U;for(let et=0;et<u.inChannels;++et){const rt=et*w+Z;for(let nt=0;nt<u.outChannels;++nt){let Q=0;for(let at=0;at<u.batchSize;++at){const ot=at*D,Ct=at*R;for(let dt=H;dt<$;++dt){const kt=(A+dt*p-M)*v+ot,Ot=dt*F+Ct;for(let bt=B;bt<j;++bt){const Rt=(z+bt*h-P)*T+kt,Ft=bt*E+Ot;for(let Dt=X;Dt<Y;++Dt){const me=(_+Dt*m-V)*O+Rt,ge=Dt*W+Ft;Q+=C[me+et]*N[ge+nt]}}}}b[rt+nt]=Q}}}}}return t.makeTensorInfo(k.shape,k.dtype,k.values)}const Jl={kernelName:Va,backendName:"cpu",kernelFunc:Zl};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ql(a){const{inputs:s,backend:t,attrs:n}=a,{dy:e,filter:o}=s,{pad:r,strides:c,inputShape:i}=n;q([e],"conv3dBackpropInputV2");const l=K(e.shape),d=K(o.shape),u=Ne(i,o.shape,c,1,r),p=new pt(u.inShape,"float32"),h=p.values,[m,g,f,I]=p.strides,k=t.data.get(e.dataId).values,[b,x,S,y]=l,w=t.data.get(o.dataId).values,[N,R,F,E]=d,{batchSize:W,filterDepth:C,filterHeight:D,filterWidth:v,inChannels:T,inDepth:O,inHeight:M,inWidth:V,outChannels:P,outDepth:A,outHeight:H,outWidth:$,strideDepth:L,strideHeight:z,strideWidth:B}=u,j=C-1-u.padInfo.front,U=D-1-u.padInfo.top,_=v-1-u.padInfo.left;for(let X=0;X<W;++X)for(let Y=0;Y<T;++Y)for(let Z=0;Z<O;++Z){const et=Z-j,rt=Math.max(0,Math.ceil(et/L)),nt=Math.min(A,(C+et)/L);for(let Q=0;Q<M;++Q){const at=Q-U,ot=Math.max(0,Math.ceil(at/z)),Ct=Math.min(H,(D+at)/z);for(let dt=0;dt<V;++dt){const Mt=dt-_,kt=Math.max(0,Math.ceil(Mt/B)),Ot=Math.min($,(v+Mt)/B);let bt=0;for(let vt=rt;vt<nt;++vt){const Rt=vt*L-et;for(let Ft=ot;Ft<Ct;++Ft){const Dt=Ft*z-at;for(let Kt=kt;Kt<Ot;++Kt){const me=Kt*B-Mt,ge=b*X+x*vt+S*Ft+y*Kt,uo=N*(C-1-Rt)+R*(D-1-Dt)+F*(v-1-me)+E*Y;for(let ee=0;ee<P;++ee){const po=k[ge+ee],fo=w[uo+ee];bt+=po*fo}}}}h[m*X+g*Z+f*Q+I*dt+Y]=bt}}}return t.makeTensorInfo(p.shape,p.dtype,p.values)}const td={kernelName:Ea,backendName:"cpu",kernelFunc:Ql};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ed=J(Rn,a=>Math.cos(a)),nd={kernelName:Rn,backendName:"cpu",kernelFunc:ed};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const sd=J(Fn,a=>Math.cosh(a)),od={kernelName:Fn,backendName:"cpu",kernelFunc:sd};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ad(a){const{inputs:s,backend:t,attrs:n}=a,{image:e,boxes:o,boxInd:r}=s,{cropSize:c,method:i,extrapolationValue:l}=n,[d,u,p,h]=e.shape,m=o.shape[0],[g,f]=c,I=tt([m,g,f,h],"float32"),k=t.data.get(o.dataId).values,b=t.data.get(r.dataId).values,x=t.data.get(e.dataId).values,S=K(e.shape),y=K(I.shape);for(let w=0;w<m;w++){const N=w*4,R=k[N],F=k[N+1],E=k[N+2],W=k[N+3],C=b[w];if(C>=d)continue;const D=g>1?(E-R)*(u-1)/(g-1):0,v=f>1?(W-F)*(p-1)/(f-1):0;for(let T=0;T<g;T++){const O=g>1?R*(u-1)+T*D:.5*(R+E)*(u-1);if(O<0||O>u-1){for(let M=0;M<f;M++)for(let V=0;V<h;V++){const P=V+M*y[2]+T*y[1]+w*y[0];I.values[P]=l}continue}if(i==="bilinear"){const M=Math.floor(O),V=Math.ceil(O),P=O-M;for(let A=0;A<f;A++){const H=f>1?F*(p-1)+A*v:.5*(F+W)*(p-1);if(H<0||H>p-1){for(let B=0;B<h;B++){const j=B+A*y[2]+T*y[1]+w*y[0];I.values[j]=l}continue}const $=Math.floor(H),L=Math.ceil(H),z=H-$;for(let B=0;B<h;B++){let j=B+$*S[2]+M*S[1]+C*S[0];const U=x[j];j=B+L*S[2]+M*S[1]+C*S[0];const _=x[j];j=B+$*S[2]+V*S[1]+C*S[0];const X=x[j];j=B+L*S[2]+V*S[1]+C*S[0];const Y=x[j],Z=U+(_-U)*z,et=X+(Y-X)*z;j=B+A*y[2]+T*y[1]+w*y[0],I.values[j]=Z+(et-Z)*P}}}else for(let M=0;M<f;++M){const V=f>1?F*(p-1)+M*v:.5*(F+W)*(p-1);if(V<0||V>p-1){for(let H=0;H<h;H++){const $=H+M*y[2]+T*y[1]+w*y[0];I.values[$]=l}continue}const P=Math.round(V),A=Math.round(O);for(let H=0;H<h;H++){const $=H+P*S[2]+A*S[1]+C*S[0],L=H+M*y[2]+T*y[1]+w*y[0];I.values[L]=x[$]}}}}return t.makeTensorInfo(I.shape,I.dtype,I.values)}const rd={kernelName:Oa,backendName:"cpu",kernelFunc:ad};/**
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
 */function id(a){const{inputs:s,backend:t,attrs:n}=a,{x:e}=s,{axis:o,exclusive:r,reverse:c}=n;q(e,"cumprod");const i=wt([o],e.shape.length);let l=e;i!=null&&(l=ht({inputs:{x:e},backend:t,attrs:{perm:i}}));const d=Nt(1,e.shape.length)[0];if(d!==l.shape.length-1)throw new Error(`backend.cumprod in CPU expects an inner-most axis=${l.shape.length-1} but got axis=${d}`);const u=Jt(l.dtype,"int32"),p=Aa(G(l.shape),u),h=t.data.get(l.dataId).values,m=l.shape[l.shape.length-1],g=c?(I,k)=>I+m-k-1:(I,k)=>I+k;for(let I=0;I<h.length;I+=m)for(let k=0;k<m;k++){const b=g(I,k);if(k===0)p[b]=r?1:h[b];else{const x=g(I,k-1);p[b]=r?h[x]*p[x]:h[b]*p[x]}}const f=t.makeTensorInfo(l.shape,u,p);if(i!=null){const I=Dn(i),k=ht({inputs:{x:f},backend:t,attrs:{perm:I}});return t.disposeIntermediateTensorInfo(f),t.disposeIntermediateTensorInfo(l),k}return f}const cd={kernelName:Wa,backendName:"cpu",kernelFunc:id};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ld(a){const{inputs:s,backend:t,attrs:n}=a,{x:e}=s,{axis:o,exclusive:r,reverse:c}=n;q(e,"cumsum");const i=wt([o],e.shape.length);let l=e;i!=null&&(l=ht({inputs:{x:e},backend:t,attrs:{perm:i}}));const d=Nt(1,e.shape.length)[0];if(d!==l.shape.length-1)throw new Error(`backend.cumsum in CPU expects an inner-most axis=${l.shape.length-1} but got axis=${d}`);const u=Jt(l.dtype,"int32"),p=It(G(l.shape),u),h=t.data.get(l.dataId).values,m=l.shape[l.shape.length-1],g=c?(I,k)=>I+m-k-1:(I,k)=>I+k;for(let I=0;I<h.length;I+=m)for(let k=0;k<m;k++){const b=g(I,k);if(k===0)p[b]=r?0:h[b];else{const x=g(I,k-1);p[b]=r?h[x]+p[x]:h[b]+p[x]}}const f=t.makeTensorInfo(l.shape,u,p);if(i!=null){const I=Dn(i),k=ht({inputs:{x:f},backend:t,attrs:{perm:I}});return t.disposeIntermediateTensorInfo(f),t.disposeIntermediateTensorInfo(l),k}return f}const dd={kernelName:Pa,backendName:"cpu",kernelFunc:ld};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ud(a){const{inputs:s,backend:t,attrs:n}=a,{x:e,weights:o}=s,{size:r,binaryOutput:c}=n;if(e.shape.length===1){const i=t.data.get(e.dataId).values,l=t.data.get(o.dataId).values,d=Me(i,l,o.dtype,o.shape,r);return t.makeTensorInfo([r],o.dtype,d)}else if(e.shape.length===2){const i=t.bufferSync(e),l=t.bufferSync(o),d=rs(i,l,r,c);return t.makeTensorInfo(d.shape,o.dtype,d.values)}throw new Error(`Error in denseBincount: input must be at most rank 2, but got rank${e.shape.length}.`)}const pd={kernelName:$a,backendName:"cpu",kernelFunc:ud};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function fd(a){const{inputs:s,backend:t,attrs:n}=a,{x:e}=s,{blockSize:o,dataFormat:r}=n;ut(r==="NHWC",()=>`Only NHWC dataFormat supported on CPU for depthToSpace. Got ${r}`);const c=e.shape[0],i=e.shape[1],l=e.shape[2],d=e.shape[3],u=i*o,p=l*o,h=d/(o*o),m=t.data.get(e.dataId).values,g=new Float32Array(c*u*p*h);let f=0;for(let I=0;I<c;++I)for(let k=0;k<u;++k){const b=Math.floor(k/o),x=k%o;for(let S=0;S<p;++S){const y=Math.floor(S/o),w=S%o,N=(x*o+w)*h;for(let R=0;R<h;++R){const E=R+N+d*(y+l*(b+i*I));g[f++]=m[E]}}}return t.makeTensorInfo([c,u,p,h],e.dtype,g)}const hd={kernelName:za,backendName:"cpu",kernelFunc:fd};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function so(a){const{inputs:s,backend:t,attrs:n}=a,{x:e,filter:o}=s,{strides:r,pad:c,dilations:i,dimRoundingMode:l}=n;q([e,o],"depthwiseConv2DNative");const d=K(e.shape),u=K(o.shape);let p=i;p==null&&(p=[1,1]),ut(Se(r,p),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${r} and dilations '${p}'`);const h=_t(e.shape,o.shape,r,p,c,l,!0),{filterHeight:m,filterWidth:g,dilationHeight:f,dilationWidth:I,padInfo:k}=h,b=k.left,x=k.top,S=h.outChannels/h.inChannels,y=new pt(h.outShape,e.dtype),w=t.data.get(e.dataId).values,N=t.data.get(o.dataId).values,R=y.values;for(let F=0;F<h.batchSize;++F){const E=F*d[0],W=F*y.strides[0];for(let C=0;C<h.outHeight;++C){const D=W+C*y.strides[1],v=C*h.strideHeight-x;for(let T=0;T<m;++T){const O=v+T*f;if(O<0||O>=h.inHeight)continue;const M=T*u[0],V=E+O*d[1];for(let P=0;P<h.outWidth;++P){const A=D+P*y.strides[2],H=P*h.strideWidth-b;for(let $=0;$<g;++$){const L=H+$*I;if(L<0||L>=h.inWidth)continue;const z=M+$*u[1],B=V+L*h.inChannels;let j=A,U=z;for(let _=0;_<h.inChannels;++_){const X=w[B+_];for(let Y=0;Y<S;++Y)R[j+Y]+=X*N[U+Y];j+=S,U+=S}}}}}}return t.makeTensorInfo(y.shape,y.dtype,y.values)}const md={kernelName:Ha,backendName:"cpu",kernelFunc:so};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gd(a){const{inputs:s,backend:t,attrs:n}=a,{x:e,dy:o}=s,{strides:r,dilations:c,pad:i,dimRoundingMode:l,filterShape:d}=n;q([e,o],"depthwiseConv2dNativeBackpropFilter");const u=_t(e.shape,d,r,c,i,l,!0),{strideHeight:p,strideWidth:h,filterHeight:m,filterWidth:g}=u,f=new pt(u.filterShape,"float32"),I=u.padInfo.left,k=u.padInfo.top,b=u.outChannels/u.inChannels,x=t.data.get(e.dataId).values,S=new pt(e.shape,e.dtype,x),y=t.data.get(o.dataId).values,w=new pt(o.shape,o.dtype,y);for(let N=0;N<m;++N){const R=Math.max(0,Math.ceil((k-N)/p)),F=Math.min(u.outHeight,(u.inHeight+k-N)/p);for(let E=0;E<g;++E){const W=Math.max(0,Math.ceil((I-E)/h)),C=Math.min(u.outWidth,(u.inWidth+I-E)/h);for(let D=0;D<u.outChannels;++D){const v=Math.trunc(D/b),T=D%b;let O=0;for(let M=0;M<u.batchSize;++M)for(let V=R;V<F;++V){const P=N+V*p-k;for(let A=W;A<C;++A){const H=E+A*h-I;O+=S.get(M,P,H,v)*w.get(M,V,A,D)}}f.set(O,N,E,v,T)}}}return t.makeTensorInfo(f.shape,f.dtype,f.values)}const Id={kernelName:La,backendName:"cpu",kernelFunc:gd};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function kd(a){const{inputs:s,backend:t,attrs:n}=a,{dy:e,filter:o}=s,{strides:r,dilations:c,pad:i,dimRoundingMode:l,inputShape:d}=n;q([e,o],"depthwiseConv2DNativeBackpropInput");const u=K(e.shape),p=K(o.shape),h=_t(d,o.shape,r,c,i,l,!0),m=new pt(h.inShape,"float32"),g=m.values,[f,I,k]=m.strides,b=t.data.get(e.dataId).values,[x,S,y]=u,w=t.data.get(o.dataId).values,[N,R,F]=p,{batchSize:E,filterHeight:W,filterWidth:C,inChannels:D,inHeight:v,inWidth:T,outChannels:O,outHeight:M,outWidth:V,strideHeight:P,strideWidth:A}=h,H=W-1-h.padInfo.top,$=C-1-h.padInfo.left,L=O/D;for(let z=0;z<E;++z)for(let B=0;B<D;++B)for(let j=0;j<v;++j){const U=j-H,_=Math.max(0,Math.ceil(U/P)),X=Math.min(M,(W+U)/P);for(let Y=0;Y<T;++Y){const Z=Y-$,et=Math.max(0,Math.ceil(Z/A)),rt=Math.min(V,(C+Z)/A);let nt=0;for(let Q=_;Q<X;++Q){const at=Q*P-U;for(let ot=et;ot<rt;++ot){const Ct=ot*A-Z,dt=x*z+S*Q+y*ot,Mt=N*(W-1-at)+R*(C-1-Ct)+F*B;for(let kt=0;kt<L;++kt){const Ot=B*L+kt,bt=b[dt+Ot],vt=w[Mt+kt];nt+=bt*vt}}}g[f*z+I*j+k*Y+B]=nt}}return t.makeTensorInfo(m.shape,m.dtype,m.values)}const xd={kernelName:Ba,backendName:"cpu",kernelFunc:kd};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function bd(a){const{inputs:s,backend:t}=a,{x:n}=s,e=G(n.shape),o=t.data.get(n.dataId).values,r=tt([e,e],n.dtype),c=r.values;for(let l=0;l<o.length;l++)c[l*e+l]=o[l];const i=[...n.shape,...n.shape];return t.makeTensorInfo(i,r.dtype,r.values)}const Sd={kernelName:Ga,backendName:"cpu",kernelFunc:bd};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const yd={kernelName:qa,backendName:"cpu",kernelFunc:({inputs:a,backend:s,attrs:t})=>{const{x:n,filter:e}=a,{strides:o,pad:r,dilations:c}=t,i=s,l=i.data.get(n.dataId).values,d=n.shape.length,u=i.data.get(e.dataId).values,p=e.shape.length,{batchSize:h,inHeight:m,inWidth:g,inChannels:f,outHeight:I,outWidth:k,padInfo:b,strideHeight:x,strideWidth:S,filterHeight:y,filterWidth:w,dilationHeight:N,dilationWidth:R,outShape:F}=Ce(n.shape,e.shape,o,r,"NHWC",c),E=G(F),W=F.length,C=ct(n.dtype,E);for(let v=0;v<h;++v)for(let T=0;T<I;++T){const O=T*x-b.top;for(let M=0;M<k;++M){const V=M*S-b.left;for(let P=0;P<f;++P){let A=Number.MIN_SAFE_INTEGER;for(let $=0;$<y;++$){const L=O+$*N;if(L>=0&&L<m)for(let z=0;z<w;++z){const B=V+z*R;if(B>=0&&B<g){const j=St([v,L,B,P],d,K(n.shape)),U=St([$,z,P],p,K(e.shape)),_=l[j]+u[U];_>A&&(A=_)}}}const H=St([v,T,M,P],W,K(F));C[H]=A}}}return{dataId:i.write(ue(C,n.dtype),F,n.dtype),shape:F,dtype:n.dtype}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const wd={kernelName:ze,backendName:"cpu",kernelFunc:({inputs:a,backend:s,attrs:t})=>{const{x:n,filter:e,dy:o}=a,{strides:r,pad:c,dilations:i}=t,l=s,d=Ht(n.shape,l.data.get(n.dataId).values),u=Ht(e.shape,l.data.get(e.dataId).values),{batchSize:p,inHeight:h,inWidth:m,inChannels:g,outHeight:f,outWidth:I,padInfo:k,strideHeight:b,strideWidth:x,filterHeight:S,filterWidth:y,dilationHeight:w,dilationWidth:N,outShape:R}=Ce(n.shape,e.shape,r,c,"NHWC",i);ut(o.rank===R.length,()=>`Error in ${ze}, dy must have the same rank as output ${R.length}, but got ${o.rank}`);const F=Ht(R,l.data.get(o.dataId).values),E=Vn(e.shape,e.dtype);for(let C=0;C<p;++C)for(let D=0;D<f;++D){const v=D*b-k.top;for(let T=0;T<I;++T){const O=T*x-k.left;for(let M=0;M<g;++M){let V=Number.MIN_SAFE_INTEGER,P=0,A=0;for(let H=0;H<S;++H){const $=v+H*w;if($>=0&&$<h)for(let L=0;L<y;++L){const z=O+L*N;if(z>=0&&z<m){const B=d[C][$][z][M]+u[H][L][M];B>V&&(V=B,P=H,A=L)}}}E[P][A][M]+=F[C][D][T][M]}}}return{dataId:l.write(ue(E,n.dtype),e.shape,e.dtype),shape:e.shape,dtype:e.dtype}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Nd={kernelName:He,backendName:"cpu",kernelFunc:({inputs:a,backend:s,attrs:t})=>{const{x:n,filter:e,dy:o}=a,{strides:r,pad:c,dilations:i}=t,l=s,d=Ht(n.shape,l.data.get(n.dataId).values),u=Ht(e.shape,l.data.get(e.dataId).values),{batchSize:p,inHeight:h,inWidth:m,inChannels:g,outHeight:f,outWidth:I,padInfo:k,strideHeight:b,strideWidth:x,filterHeight:S,filterWidth:y,dilationHeight:w,dilationWidth:N,outShape:R}=Ce(n.shape,e.shape,r,c,"NHWC",i);ut(o.rank===R.length,()=>`Error in ${He}, dy must have the same rank as output ${R.length}, but got ${o.rank}`);const F=Ht(R,l.data.get(o.dataId).values),E=Vn(n.shape,n.dtype);for(let C=0;C<p;++C)for(let D=0;D<f;++D){const v=D*b-k.top;for(let T=0;T<I;++T){const O=T*x-k.left;for(let M=0;M<g;++M){let V=Number.MIN_SAFE_INTEGER,P=v<0?0:v,A=O<0?0:O;for(let H=0;H<S;++H){const $=v+H*w;if($>=0&&$<h)for(let L=0;L<y;++L){const z=O+L*N;if(z>=0&&z<m){const B=d[C][$][z][M]+u[H][L][M];B>V&&(V=B,P=$,A=z)}}}E[C][P][A][M]+=F[C][D][T][M]}}}return{dataId:l.write(ue(E,n.dtype),n.shape,n.dtype),shape:n.shape,dtype:n.dtype}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function te(a){const{inputs:s,backend:t,attrs:n}=a,{x:e}=s,{axis:o,keepDims:r}=n;q(e,"sum");let c;e.dtype==="bool"?c=Vt({inputs:{x:e},backend:t,attrs:{dtype:"int32"}}):c=yt({inputs:{x:e},backend:t});const i=c.shape.length,l=mt(o,c.shape),d=wt(l,i);let u=l,p=c;d!=null&&(p=ht({inputs:{x:c},backend:t,attrs:{perm:d}}),u=Nt(u.length,i)),$t("sum",u,p.shape.length);const[h,m]=Tt(p.shape,u),g=Jt(p.dtype,"int32");let f=ae(t,h,g);const I=G(m),k=t.data.get(f.dataId).values,b=t.data.get(p.dataId).values;for(let x=0;x<k.length;++x){const S=x*I;let y=0;for(let w=0;w<I;++w)y+=b[S+w];k[x]=y}if(r){const x=Pt(f.shape,l),S=f;f=st({inputs:{x:f},backend:t,attrs:{shape:x}}),t.disposeIntermediateTensorInfo(S)}return t.disposeIntermediateTensorInfo(c),d!=null&&t.disposeIntermediateTensorInfo(p),f}const Cd={kernelName:ja,backendName:"cpu",kernelFunc:te};/**
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
 */function vd(a){const{inputs:s,backend:t,attrs:n}=a,{equation:e}=n,o=s,{allDims:r,summedDims:c,idDims:i}=Ua(e,o.length);Ka(r.length,i,o);const{path:l,steps:d}=Xa(c,i),u=d.length;let p=null,h=r.length;const m=[];for(let g=0;g<u;++g){for(const f of d[g]){const{permutationIndices:I,expandDims:k}=Ya(h,i[f]);let b;Za(I)?b=o[f]:(b=ht({inputs:{x:o[f]},backend:t,attrs:{perm:I}}),m.push(b));const x=b.shape.slice();for(let S=0;S<k.length;++S)x.splice(k[S],0,1);ye(b.shape,x)||(b=st({inputs:{x:b},backend:t,attrs:{shape:x}}),m.push(b)),p===null?p=b:(p=he({inputs:{a:b,b:p},backend:t}),m.push(p))}g<u-1&&(l[g]>=0&&(p=te({inputs:{x:p},backend:t,attrs:{axis:l[g]-(r.length-h),keepDims:!1}}),m.push(p)),h--)}for(const g of m)g!==p&&t.disposeIntermediateTensorInfo(g);return p}const Td={kernelName:_a,backendName:"cpu",kernelFunc:vd};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Md(a){const{inputs:s,backend:t}=a,{dy:n,y:e}=s;q([n,e],"eluGrad");const o=new Float32Array(G(e.shape)),r=t.data.get(e.dataId).values,c=t.data.get(n.dataId).values;for(let i=0;i<r.length;++i){const l=r[i];l>=1?o[i]=c[i]:o[i]=c[i]*(l+1)}return t.makeTensorInfo(e.shape,"float32",o)}const Rd={kernelName:Ja,backendName:"cpu",kernelFunc:Md};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Fd=or,Dd=Qa,Vd=tr,Ed=er,Od=nr,Wd=sr,Ad=J(En,a=>{const s=Math.sign(a),t=Math.abs(a),n=1/(1+Fd*t);return s*(1-((((Wd*n+Od)*n+Ed)*n+Vd)*n+Dd)*n*Math.exp(-t*t))}),Pd={kernelName:En,backendName:"cpu",kernelFunc:Ad};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ce(a){const{inputs:s,backend:t,attrs:n}=a,{input:e}=s,{dim:o}=n,r=e.shape.length,c=e.shape.slice();let i=o;return o<0&&(ut(-(r+1)<=o,()=>`Axis must be in the interval [${-(r+1)}, ${r}]`),i=r+o+1),c.splice(i,0,1),st({inputs:{x:e},backend:t,attrs:{shape:c}})}const $d={kernelName:ar,backendName:"cpu",kernelFunc:ce};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const zd=it((a,s)=>a/s),Oe=lt(On,zd),ke={kernelName:On,backendName:"cpu",kernelFunc:Oe};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function oo(a,s,t){const n=a.shape,e=n[0],o=n[1],r=t.data.get(a.dataId),c=r.complexTensorInfos.real,i=r.complexTensorInfos.imag,l=[e,o],d=G(l),u=ft("float32",d),p=ft("float32",d);for(let f=0;f<e;f++){const I=At({inputs:{x:c},backend:t,attrs:{begin:[f,0],size:[1,o]}}),k=At({inputs:{x:i},backend:t,attrs:{begin:[f,0],size:[1,o]}}),b=gt({inputs:{real:I,imag:k},backend:t}),{real:x,imag:S}=Hd(b,s,t),y=Lt(x,S);for(let w=0;w<o;w++){const N=Wn(y,w);u[f*o+w]=N.real,p[f*o+w]=N.imag}t.disposeIntermediateTensorInfo(I),t.disposeIntermediateTensorInfo(k),t.disposeIntermediateTensorInfo(b)}const h=t.makeTensorInfo(l,"float32",u),m=t.makeTensorInfo(l,"float32",p),g=gt({inputs:{real:h,imag:m},backend:t});return t.disposeIntermediateTensorInfo(h),t.disposeIntermediateTensorInfo(m),g}function Hd(a,s,t){const n=G(a.shape),e=t.data.get(a.dataId),o=t.data.get(e.complexTensorInfos.real.dataId).values,r=t.data.get(e.complexTensorInfos.imag.dataId).values;if(Ld(n)){const c=xe(o,r,n,s,t),i=[a.shape[0],a.shape[1]];if(s){const l=t.makeTensorInfo(i,"float32",c.real),d=t.makeTensorInfo(i,"float32",c.imag),u=t.makeTensorInfo([],"float32",be(n,"float32")),p=yt({inputs:{x:u},backend:t}),h=ke.kernelFunc({inputs:{a:l,b:u},backend:t}),m=ke.kernelFunc({inputs:{a:d,b:p},backend:t}),g=t.data.get(h.dataId).values,f=t.data.get(m.dataId).values;return t.disposeIntermediateTensorInfo(l),t.disposeIntermediateTensorInfo(d),t.disposeIntermediateTensorInfo(u),t.disposeIntermediateTensorInfo(p),t.disposeIntermediateTensorInfo(h),t.disposeIntermediateTensorInfo(m),{real:g,imag:f}}return c}else{const c=Lt(o,r),i=Bd(c,n,s);return rr(i)}}function Ld(a){return(a&a-1)===0}function xe(a,s,t,n,e){if(t===1)return{real:a,imag:s};const o=Lt(a,s),r=t/2,c=ir(o),i=c.real,l=c.imag,d=[i.length],u=e.makeTensorInfo(d,"float32",i),p=e.makeTensorInfo(d,"float32",l),h=gt({inputs:{real:u,imag:p},backend:e}),m=cr(o),g=m.real,f=m.imag,I=[g.length],k=e.makeTensorInfo(I,"float32",g),b=e.makeTensorInfo(I,"float32",f),x=gt({inputs:{real:k,imag:b},backend:e}),S=xe(i,l,r,n,e),y=S.real,w=S.imag,N=[y.length],R=e.makeTensorInfo(N,"float32",y),F=e.makeTensorInfo(N,"float32",w),E=gt({inputs:{real:R,imag:F},backend:e}),W=xe(g,f,r,n,e),C=W.real,D=W.imag,v=[C.length],T=e.makeTensorInfo(v,"float32",C),O=e.makeTensorInfo(v,"float32",D),M=gt({inputs:{real:T,imag:O},backend:e}),V=lr(t,n),P=[V.real.length],A=e.makeTensorInfo(P,"float32",V.real),H=e.makeTensorInfo(P,"float32",V.imag),$=gt({inputs:{real:A,imag:H},backend:e}),L=he({inputs:{a:$,b:M},backend:e}),z=Bt({inputs:{a:E,b:L},backend:e}),B=Ve({inputs:{a:E,b:L},backend:e}),j=Wt({inputs:{input:z},backend:e}),U=Wt({inputs:{input:B},backend:e}),_=Gt({inputs:{input:z},backend:e}),X=Gt({inputs:{input:B},backend:e}),Y=qt({inputs:[j,U],backend:e,attrs:{axis:0}}),Z=qt({inputs:[_,X],backend:e,attrs:{axis:0}}),et=e.data.get(Y.dataId).values,rt=e.data.get(Z.dataId).values;return e.disposeIntermediateTensorInfo(u),e.disposeIntermediateTensorInfo(p),e.disposeIntermediateTensorInfo(h),e.disposeIntermediateTensorInfo(k),e.disposeIntermediateTensorInfo(b),e.disposeIntermediateTensorInfo(x),e.disposeIntermediateTensorInfo(R),e.disposeIntermediateTensorInfo(F),e.disposeIntermediateTensorInfo(E),e.disposeIntermediateTensorInfo(T),e.disposeIntermediateTensorInfo(O),e.disposeIntermediateTensorInfo(M),e.disposeIntermediateTensorInfo(A),e.disposeIntermediateTensorInfo(H),e.disposeIntermediateTensorInfo($),e.disposeIntermediateTensorInfo(L),e.disposeIntermediateTensorInfo(z),e.disposeIntermediateTensorInfo(B),e.disposeIntermediateTensorInfo(j),e.disposeIntermediateTensorInfo(_),e.disposeIntermediateTensorInfo(U),e.disposeIntermediateTensorInfo(X),e.disposeIntermediateTensorInfo(Y),e.disposeIntermediateTensorInfo(Z),{real:et,imag:rt}}function Bd(a,s,t){const n=new Float32Array(s*2);for(let e=0;e<s;e++){let o=0,r=0;for(let c=0;c<s;c++){const i=ur(e*c,s,t),l=Wn(a,c);o+=l.real*i.real-l.imag*i.imag,r+=l.real*i.imag+l.imag*i.real}t&&(o/=s,r/=s),dr(n,o,r,e)}return n}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Gd(a){const{inputs:s,backend:t}=a,{input:n}=s,e=G(n.shape),o=n.shape[n.shape.length-1],r=e/o,c=st({inputs:{x:n},backend:t,attrs:{shape:[r,o]}}),i=oo(c,!1,t),l=st({inputs:{x:i},backend:t,attrs:{shape:n.shape}});return t.disposeIntermediateTensorInfo(c),t.disposeIntermediateTensorInfo(i),l}const qd={kernelName:pr,backendName:"cpu",kernelFunc:Gd};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function We(a){const{backend:s,attrs:t}=a,{shape:n,value:e,dtype:o}=t,r=o||hr(e),c=ct(r,G(n));return _d(c,e,r),s.makeTensorInfo(n,r,c)}const jd={kernelName:fr,backendName:"cpu",kernelFunc:We};function _d(a,s,t){a.fill(s)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ud={kernelName:mr,backendName:"cpu",kernelFunc:({inputs:a,attrs:s,backend:t})=>{const{image:n}=a,e=t,o=ft(n.dtype,G(n.shape)),[r,c,i,l]=n.shape,d=e.data.get(n.dataId).values;for(let p=0;p<r;p++){const h=p*i*c*l;for(let m=0;m<c;m++){const g=m*(i*l);for(let f=0;f<i;f++){const I=f*l;for(let k=0;k<l;k++){const b=Math.round(i-f-1),x=h+g+I+k;let S=d[x];if(b>=0&&b<i){const y=b*l,w=h+g+y+k;S=d[w]}o[x]=S}}}}return{dataId:e.write(o,n.shape,n.dtype),shape:n.shape,dtype:n.dtype}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Kd=it((a,s)=>Math.floor(a/s)),Xd=lt(An,Kd,null,"int32"),Yd={kernelName:An,backendName:"cpu",kernelFunc:Xd};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Zd(a){const{inputs:s,backend:t,attrs:n}=a,{x:e,filter:o,bias:r,preluActivationWeights:c}=s,{strides:i,pad:l,dataFormat:d,dilations:u,dimRoundingMode:p,activation:h,leakyreluAlpha:m}=n;let g=no({inputs:{x:e,filter:o},backend:t,attrs:{strides:i,pad:l,dataFormat:d,dilations:u,dimRoundingMode:p}});if(r){const f=g;if(d==="NCHW"&&r.shape.length===1&&r.shape[0]!==1){const I=st({inputs:{x:r},backend:t,attrs:{shape:[r.shape[0],1,1]}});g=Bt({inputs:{a:g,b:I},backend:t}),t.disposeIntermediateTensorInfo(I)}else g=Bt({inputs:{a:g,b:r},backend:t});t.disposeIntermediateTensorInfo(f)}if(h){const f=g;if(d==="NCHW"&&h==="prelu"&&c.shape.length===1&&c.shape[0]!==1){const I=st({inputs:{x:c},backend:t,attrs:{shape:[c.shape[0],1,1]}});g=ie(t,g,h,I,m),t.disposeIntermediateTensorInfo(I)}else g=ie(t,g,h,c,m);t.disposeIntermediateTensorInfo(f)}return g}const Jd={kernelName:gr,backendName:"cpu",kernelFunc:Zd};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Qd(a){const{inputs:s,backend:t,attrs:n}=a,{x:e,filter:o,bias:r,preluActivationWeights:c}=s,{strides:i,pad:l,dataFormat:d,dilations:u,dimRoundingMode:p,activation:h,leakyreluAlpha:m}=n;let g=so({inputs:{x:e,filter:o},backend:t,attrs:{strides:i,pad:l,dataFormat:d,dilations:u,dimRoundingMode:p}});if(r){const f=g;g=Bt({inputs:{a:g,b:r},backend:t}),t.disposeIntermediateTensorInfo(f)}if(h){const f=g;g=ie(t,g,h,c,m),t.disposeIntermediateTensorInfo(f)}return g}const tu={kernelName:Ir,backendName:"cpu",kernelFunc:Qd};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function eu(a){const{inputs:s,backend:t}=a,{params:n,indices:e}=s,o=G(n.shape),r=e.shape,c=r[r.length-1],[i,l,d,u]=xr(n,e);if(l===0)return t.makeTensorInfo(i,n.dtype,[]);const p=t.data.get(e.dataId).values,h=t.bufferSync(n),m=ms(p,h,n.dtype,l,c,d,u,n.shape,o);return t.makeTensorInfo(i,n.dtype,m.values)}const nu={kernelName:kr,backendName:"cpu",kernelFunc:eu};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function su(a){const{inputs:s,backend:t,attrs:n}=a,{x:e,indices:o}=s,{axis:r,batchDims:c}=n;q([e,o],"gatherV2");const i=mt(r,e.shape)[0],l=t.data.get(o.dataId).values,d=e.shape[i];for(let x=0;x<l.length;++x){const S=l[x];ut(S<=d-1&&S>=0,()=>`GatherV2: the index value ${S} is not in [0, ${d-1}]`)}let u=c;c==null&&(u=0);const p=G(o.shape),h=Sr(e,o,i,u),m=st({inputs:{x:e},backend:t,attrs:{shape:[h.batchSize,h.outerSize,h.dimSize,h.sliceSize]}}),g=st({inputs:{x:o},backend:t,attrs:{shape:[h.batchSize,p/h.batchSize]}}),f=[h.batchSize,h.outerSize,p/h.batchSize,h.sliceSize],I=t.bufferSync(g),k=t.bufferSync(m),b=gs(k,I,f);return t.disposeIntermediateTensorInfo(m),t.disposeIntermediateTensorInfo(g),t.makeTensorInfo(h.outputShape,b.dtype,b.values)}const ou={kernelName:br,backendName:"cpu",kernelFunc:su};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function au(a){const{inputs:s,backend:t}=a,{input:n}=s,e=G(n.shape),o=n.shape[n.shape.length-1],r=e/o,c=st({inputs:{x:n},backend:t,attrs:{shape:[r,o]}}),i=oo(c,!0,t),l=st({inputs:{x:i},backend:t,attrs:{shape:n.shape}});return t.disposeIntermediateTensorInfo(c),t.disposeIntermediateTensorInfo(i),l}const ru={kernelName:yr,backendName:"cpu",kernelFunc:au};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const iu=J(Pn,a=>Number.isFinite(a)?1:0,"bool"),cu={kernelName:Pn,backendName:"cpu",kernelFunc:iu};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const lu=J($n,a=>Math.abs(a)===1/0?1:0,"bool"),du={kernelName:$n,backendName:"cpu",kernelFunc:lu};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const uu=J(zn,a=>Number.isNaN(a)?1:0,"bool"),pu={kernelName:zn,backendName:"cpu",kernelFunc:uu};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function fu(a){const{backend:s,attrs:t}=a,{start:n,stop:e,num:o}=t,r=Ss(n,e,o);return s.makeTensorInfo([r.length],"float32",r)}const hu={kernelName:wr,backendName:"cpu",kernelFunc:fu};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const mu=J(Hn,a=>Math.log1p(a)),gu={kernelName:Hn,backendName:"cpu",kernelFunc:mu};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Iu=it((a,s)=>a&&s),ku=lt(Ln,Iu,null,"bool"),xu={kernelName:Ln,backendName:"cpu",kernelFunc:ku};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const bu=J(Bn,a=>a?0:1,"bool"),Su={kernelName:Bn,backendName:"cpu",kernelFunc:bu};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const yu=it((a,s)=>a||s),wu=lt(Gn,yu,null,"bool"),Nu={kernelName:Gn,backendName:"cpu",kernelFunc:wu};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Cu(a){const{inputs:s,backend:t,attrs:n}=a,{x:e}=s,{depthRadius:o,bias:r,alpha:c,beta:i}=n;q(e,"LRN");const l=e.shape[3],d=l-1,u=t.data.get(e.dataId).values,p=G(e.shape),h=new Float32Array(p);function m(g){const f=g%l;let I=g-f+Math.max(0,f-o);const k=g-f+Math.min(f+o,d);let b=0;for(;I<=k;I++){const x=u[I];b+=x*x}return b}for(let g=0;g<p;g++){const f=m(g),I=u[g]*Math.pow(r+c*f,-i);h[g]=I}return t.makeTensorInfo(e.shape,e.dtype,h)}const vu={kernelName:Nr,backendName:"cpu",kernelFunc:Cu};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Tu(a){const{inputs:s,backend:t,attrs:n}=a,{x:e,y:o,dy:r}=s,{depthRadius:c,bias:i,alpha:l,beta:d}=n;q(r,"LRNGrad");const u=G(r.shape),p=r.shape[3],h=t.data.get(r.dataId).values,m=t.data.get(e.dataId).values,g=t.data.get(o.dataId).values,f=new Float32Array(u),I=u;for(let k=0;k<I;k++){const b=k%p,x=k-b+Math.max(0,b-c),S=k-b+Math.min(p,b+c+1);let y=0;for(let w=x;w<S;w++)y+=Math.pow(m[w],2);y=l*y+i;for(let w=x;w<S;w++){let N=-2*l*d*m[w]*g[k]/y;k===w&&(N+=Math.pow(y,-d)),N*=h[k],f[w]+=N}}return t.makeTensorInfo(r.shape,e.dtype,f)}const Mu={kernelName:Cr,backendName:"cpu",kernelFunc:Tu};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ao(a){const{inputs:s,backend:t,attrs:n}=a,{x:e}=s,{reductionIndices:o,keepDims:r}=n,c=t;let i=e.shape;const l=i.length,d=mt(o,i);let u=d;const p=wt(u,l);let h=c.data.get(e.dataId).values;if(p!=null){const x=new Array(l);for(let S=0;S<x.length;S++)x[S]=i[p[S]];h=Fe(h,i,e.dtype,p,x),u=Nt(u.length,l),i=x}q(e,"max"),$t("max",u,l);const[m,g]=Tt(i,u),f=G(g),I=ws(h,f,m,e.dtype),k=c.write(I,m,e.dtype);let b=m;return r&&(b=Pt(m,d)),{dataId:k,shape:b,dtype:e.dtype}}const Ru={kernelName:vr,backendName:"cpu",kernelFunc:ao};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Fu(a){const{inputs:s,backend:t,attrs:n}=a,{x:e}=s;q(e,"maxPool");const{filterSize:o,strides:r,pad:c,dimRoundingMode:i}=n,l=1;ut(Se(r,l),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${r} and dilations '${l}'`);const d=Qt(e.shape,o,r,l,c,i);let u;if(d.filterWidth===1&&d.filterHeight===1&&ye(d.inShape,d.outShape))u=yt({inputs:{x:e},backend:t});else{const p=t.data.get(e.dataId).values,h=K(e.shape),m=Ee(p,e.shape,e.dtype,h,d,"max");u=t.makeTensorInfo(d.outShape,e.dtype,m.values)}return u}const Du={kernelName:Tr,backendName:"cpu",kernelFunc:Fu};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Vu(a){const{inputs:s,backend:t,attrs:n}=a,{x:e}=s,{filterSize:o,strides:r,pad:c,dimRoundingMode:i,dataFormat:l}=n;q(e,"maxPool3d");const d=pe(e.shape,o,r,1,c,i,l),u=t.data.get(e.dataId).values,p=eo(u,e.shape,e.dtype,K(e.shape),d,"max");return t.makeTensorInfo(p.shape,"float32",p.values)}const Eu={kernelName:Mr,backendName:"cpu",kernelFunc:Vu};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ou(a){const{inputs:s,backend:t,attrs:n}=a,{dy:e,input:o}=s,{filterSize:r,strides:c,pad:i,dimRoundingMode:l}=n;q([e,o],"maxPool3DGrad");const d=pe(o.shape,r,c,1,i,l),u=t.bufferSync(o),p=Sl(u,d),h=d.strideDepth,m=d.strideHeight,g=d.strideWidth,f=d.dilationDepth,I=d.dilationHeight,k=d.dilationWidth,b=d.effectiveFilterDepth,x=d.effectiveFilterHeight,S=d.effectiveFilterWidth,y=b-1-d.padInfo.front,w=S-1-d.padInfo.left,N=x-1-d.padInfo.top,R=tt(o.shape,"float32"),F=t.bufferSync(e);for(let E=0;E<d.batchSize;++E)for(let W=0;W<d.inChannels;++W)for(let C=0;C<d.inDepth;++C)for(let D=0;D<d.inHeight;++D)for(let v=0;v<d.inWidth;++v){const T=C-y,O=D-N,M=v-w;let V=0;for(let P=0;P<b;P+=f){const A=(T+P)/h;if(!(A<0||A>=d.outDepth||Math.floor(A)!==A))for(let H=0;H<x;H+=I){const $=(O+H)/m;if(!($<0||$>=d.outHeight||Math.floor($)!==$))for(let L=0;L<S;L+=k){const z=(M+L)/g;if(z<0||z>=d.outWidth||Math.floor(z)!==z)continue;const B=b*x*S-1-p.get(E,A,$,z,W),j=P*x*S+H*S+L,U=B===j?1:0;if(U===0)continue;const _=F.get(E,A,$,z,W);V+=_*U}}}R.set(V,E,C,D,v,W)}return t.makeTensorInfo(R.shape,R.dtype,R.values)}const Wu={kernelName:Rr,backendName:"cpu",kernelFunc:Ou};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Au(a){const{inputs:s,backend:t,attrs:n}=a,{dy:e,input:o,output:r}=s,c=o;q([o,r],"maxPoolGrad");const{filterSize:i,strides:l,pad:d,dimRoundingMode:u}=n,p=Qt(c.shape,i,l,1,d,u),h=t.data.get(c.dataId).values,m=tt(p.outShape,c.dtype,to(h,c.shape,c.dtype,p).values),g=p.strideHeight,f=p.strideWidth,I=p.dilationHeight,k=p.dilationWidth,b=p.effectiveFilterHeight,x=p.effectiveFilterWidth,S=x-1-p.padInfo.left,y=b-1-p.padInfo.top,w=tt(c.shape,"float32"),N=t.data.get(e.dataId).values,R=tt(e.shape,"float32",N);for(let F=0;F<p.batchSize;++F)for(let E=0;E<p.inChannels;++E)for(let W=0;W<p.inHeight;++W)for(let C=0;C<p.inWidth;++C){const D=W-y,v=C-S;let T=0;for(let O=0;O<b;O+=I){const M=(D+O)/g;if(!(M<0||M>=p.outHeight||Math.floor(M)!==M))for(let V=0;V<x;V+=k){const P=(v+V)/f;if(P<0||P>=p.outWidth||Math.floor(P)!==P)continue;const A=b*x-1-m.get(F,M,P,E),H=O*x+V,$=A===H?1:0;if($===0)continue;const L=R.get(F,M,P,E);T+=L*$}}w.set(T,F,W,C,E)}return t.makeTensorInfo(w.shape,w.dtype,w.values)}const Pu={kernelName:Fr,backendName:"cpu",kernelFunc:Au};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $u(a,s,t,n,e){const o=K(s),r=Ee(a,s,t,o,e,"max"),c=to(a,s,t,e,!0,n);return[r.values,c.values]}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const zu={kernelName:Dr,backendName:"cpu",kernelFunc:({inputs:a,attrs:s,backend:t})=>{const{x:n}=a,{filterSize:e,strides:o,pad:r,includeBatchInIndex:c}=s,i=t;q(n,"MaxPoolWithArgmax");const l=i.data.get(n.dataId).values,d=Qt(n.shape,e,o,[1,1],r),[u,p]=$u(l,n.shape,n.dtype,c,d),h=i.write(u,d.outShape,n.dtype),m=i.write(p,d.outShape,n.dtype);return[{dataId:h,shape:d.outShape,dtype:n.dtype},{dataId:m,shape:d.outShape,dtype:"int32"}]}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Hu(a){const{inputs:s,backend:t,attrs:n}=a,{x:e}=s,{axis:o,keepDims:r}=n,c=mt(o,e.shape),l=Tt(e.shape,c)[1],d=G(l),u=[],p=t.makeTensorInfo([],"float32",new Float32Array([d]));u.push(p);const h=Vt({inputs:{x:e},backend:t,attrs:{dtype:"float32"}});u.push(h);const m=Oe({inputs:{a:h,b:p},backend:t});u.push(m);const g=te({inputs:{x:m},backend:t,attrs:{axis:o,keepDims:r}});return u.forEach(f=>t.disposeIntermediateTensorInfo(f)),g}const Lu={kernelName:Vr,backendName:"cpu",kernelFunc:Hu};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Bu(a){const{inputs:s,backend:t,attrs:n}=a,{x:e}=s,{axis:o,keepDims:r}=n;q(e,"min");const c=mt(o,e.shape);let i=c;const l=wt(i,e.shape.length);let d=e;l!=null&&(d=ht({inputs:{x:e},backend:t,attrs:{perm:l}}),i=Nt(i.length,e.shape.length)),$t("min",i,d.shape.length);const[u,p]=Tt(d.shape,i),h=G(p),m=It(G(u),d.dtype),g=t.data.get(d.dataId).values;for(let I=0;I<m.length;++I){const k=I*h;let b=g[k];for(let x=0;x<h;++x){const S=g[k+x];(Number.isNaN(S)||S<b)&&(b=S)}m[I]=b}l!=null&&t.disposeIntermediateTensorInfo(d);const f=t.makeTensorInfo(u,d.dtype,m);if(r){const I=Pt(u,c),k=st({inputs:{x:f},backend:t,attrs:{shape:I}});return t.disposeIntermediateTensorInfo(f),k}return f}const Gu={kernelName:Er,backendName:"cpu",kernelFunc:Bu};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qu(a){const{inputs:s,backend:t,attrs:n}=a,{x:e}=s,{paddings:o,mode:r}=n;q(e,"mirrorPad");const c=o.map((b,x)=>b[0]+e.shape[x]+b[1]),i=o.map(b=>b[0]),l=o.map((b,x)=>b[0]+e.shape[x]),d=r==="reflect"?0:1,u=t.data.get(e.dataId).values,p=e.shape.length,h=K(e.shape),m=G(c),g=c.length,f=K(c),I=ft(e.dtype,m);for(let b=0;b<m;b++){let x=jt(b,g,f);for(let y=0;y<g;y++)x[y]<i[y]?x[y]=i[y]*2-x[y]-d:x[y]>=l[y]&&(x[y]=(l[y]-1)*2-x[y]+d);x=x.map((y,w)=>y-i[w]);const S=St(x,p,h);I[b]=u[S]}return{dataId:t.write(I,c,e.dtype),shape:c,dtype:e.dtype}}const ju={kernelName:Or,backendName:"cpu",kernelFunc:qu};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const _u=it((a,s)=>{const t=a%s;return a<0&&s<0||a>=0&&s>=0?t:(t+s)%s}),Uu=lt(qn,_u),Ku={kernelName:qn,backendName:"cpu",kernelFunc:Uu};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ro(a){const{inputs:s,backend:t,attrs:n}=a,{logits:e}=s,{dim:o}=n,r=e.shape.length;let c=o;if(c===-1&&(c=r-1),c!==r-1)throw Error(`Softmax along a non-last dimension is not yet supported. Logits was rank ${r} and dim was ${c}`);const i=mt([c],e.shape),l=ao({inputs:{x:e},backend:t,attrs:{reductionIndices:i,keepDims:!1}}),d=Pt(l.shape,i),u=st({inputs:{x:l},backend:t,attrs:{shape:d}}),p=Ve({inputs:{a:e,b:u},backend:t}),h=ps({inputs:{x:p},backend:t}),m=te({inputs:{x:h},backend:t,attrs:{axis:i,keepDims:!1}}),g=st({inputs:{x:m},backend:t,attrs:{shape:d}}),f=Oe({inputs:{a:h,b:g},backend:t});return t.disposeIntermediateTensorInfo(l),t.disposeIntermediateTensorInfo(u),t.disposeIntermediateTensorInfo(p),t.disposeIntermediateTensorInfo(h),t.disposeIntermediateTensorInfo(m),t.disposeIntermediateTensorInfo(g),f}const Xu={kernelName:Wr,backendName:"cpu",kernelFunc:ro};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Yu(a){const{inputs:s,backend:t,attrs:n}=a,{logits:e}=s,{numSamples:o,seed:r,normalized:c}=n;q(e,"multinomial");const i=c?e:ro({inputs:{logits:e},backend:t,attrs:{dim:-1}}),l=i.shape[0],d=i.shape[1],u=t.data.get(i.dataId).values,p=[l,o],h=It(G(p),"int32");for(let m=0;m<l;++m){const g=m*d,f=new Float32Array(d-1);f[0]=u[g];for(let b=1;b<f.length;++b)f[b]=f[b-1]+u[g+b];const I=Ei.alea(r.toString()),k=m*o;for(let b=0;b<o;++b){const x=I();h[k+b]=f.length;for(let S=0;S<f.length;S++)if(x<f[S]){h[k+b]=S;break}}}return c||t.disposeIntermediateTensorInfo(i),t.makeTensorInfo(p,"int32",h)}const Zu={kernelName:Ar,backendName:"cpu",kernelFunc:Yu};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ju=$r;function Qu(a){const{inputs:s,backend:t,attrs:n}=a,{boxes:e,scores:o}=s,{maxOutputSize:r,iouThreshold:c,scoreThreshold:i}=n;q(e,"NonMaxSuppression");const l=t.data.get(e.dataId).values,d=t.data.get(o.dataId).values,{selectedIndices:u}=Ju(l,d,r,c,i);return t.makeTensorInfo([u.length],"int32",new Int32Array(u))}const tp={kernelName:Pr,backendName:"cpu",kernelFunc:Qu};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ep=Hr;function np(a){const{inputs:s,backend:t,attrs:n}=a,{boxes:e,scores:o}=s,{maxOutputSize:r,iouThreshold:c,scoreThreshold:i,padToMaxOutputSize:l}=n;q(e,"NonMaxSuppressionPadded");const d=t.data.get(e.dataId).values,u=t.data.get(o.dataId).values,{selectedIndices:p,validOutputs:h}=ep(d,u,r,c,i,l);return[t.makeTensorInfo([p.length],"int32",new Int32Array(p)),t.makeTensorInfo([],"int32",new Int32Array([h]))]}const sp={kernelName:zr,backendName:"cpu",kernelFunc:np};/**
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
 */const op=Br;function ap(a){const{inputs:s,backend:t,attrs:n}=a,{boxes:e,scores:o}=s,{maxOutputSize:r,iouThreshold:c,scoreThreshold:i,softNmsSigma:l}=n;q(e,"NonMaxSuppressionWithScore");const d=t.data.get(e.dataId).values,u=t.data.get(o.dataId).values,p=r,h=c,m=i,g=l,{selectedIndices:f,selectedScores:I}=op(d,u,p,h,m,g);return[t.makeTensorInfo([f.length],"int32",new Int32Array(f)),t.makeTensorInfo([I.length],"float32",new Float32Array(I))]}const rp={kernelName:Lr,backendName:"cpu",kernelFunc:ap};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ip(a){const{inputs:s,backend:t,attrs:n}=a,{indices:e}=s,{dtype:o,depth:r,onValue:c,offValue:i}=n;q(e,"oneHot");const l=G(e.shape),d=new Float32Array(l*r);d.fill(i);const u=t.data.get(e.dataId).values;for(let p=0;p<l;++p)u[p]>=0&&u[p]<r&&(d[p*r+u[p]]=c);return t.makeTensorInfo([...e.shape,r],o,d)}const cp={kernelName:Gr,backendName:"cpu",kernelFunc:ip};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function le(a){const{inputs:s,backend:t}=a,{x:n}=s;if(n.dtype==="string")throw new Error("zerosLike is not supported for string tensors");if(n.dtype==="complex64"){const e=Wt({inputs:{input:n},backend:t}),o=le({inputs:{x:e},backend:t}),r=Gt({inputs:{input:n},backend:t}),c=le({inputs:{x:r},backend:t}),i=gt({inputs:{real:o,imag:c},backend:t});return t.disposeIntermediateTensorInfo(e),t.disposeIntermediateTensorInfo(o),t.disposeIntermediateTensorInfo(r),t.disposeIntermediateTensorInfo(c),i}else return We({backend:t,attrs:{shape:n.shape,value:0,dtype:n.dtype}})}const lp={kernelName:qr,backendName:"cpu",kernelFunc:le};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function io(a){const{inputs:s,backend:t}=a,{x:n}=s;if(n.dtype==="string")throw new Error("onesLike is not supported for string tensors");if(n.dtype==="complex64"){const e=Wt({inputs:{input:n},backend:t}),o=io({inputs:{x:e},backend:t}),r=Gt({inputs:{input:n},backend:t}),c=le({inputs:{x:r},backend:t}),i=gt({inputs:{real:o,imag:c},backend:t});return t.disposeIntermediateTensorInfo(e),t.disposeIntermediateTensorInfo(o),t.disposeIntermediateTensorInfo(r),t.disposeIntermediateTensorInfo(c),i}else return We({backend:t,attrs:{shape:n.shape,value:1,dtype:n.dtype}})}const dp={kernelName:jr,backendName:"cpu",kernelFunc:io};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function co(a){const{inputs:s,backend:t,attrs:n}=a,{axis:e}=n;if(s.length===1)return ce({inputs:{input:s[0]},backend:t,attrs:{dim:e}});const o=s[0].shape,r=s[0].dtype;s.forEach(d=>{Ur(o,d.shape,"All tensors passed to stack must have matching shapes"),ut(r===d.dtype,()=>"All tensors passed to stack must have matching dtypes")});const c=[],i=s.map(d=>{const u=ce({inputs:{input:d},backend:t,attrs:{dim:e}});return c.push(u),u}),l=qt({inputs:i,backend:t,attrs:{axis:e}});return c.forEach(d=>t.disposeIntermediateTensorInfo(d)),l}const up={kernelName:_r,backendName:"cpu",kernelFunc:co};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function pp(a){const{inputs:s,backend:t,attrs:n}=a,{x:e}=s,{paddings:o,constantValue:r}=n;q(e,"pad");const c=o.map((k,b)=>k[0]+e.shape[b]+k[1]),i=o.map(k=>k[0]),l=t.data.get(e.dataId).values,d=G(e.shape),u=e.shape.length,p=K(e.shape),h=G(c),m=c.length,g=K(c),f=ft(e.dtype,h);r!==0&&f.fill(r);for(let k=0;k<d;k++){const x=jt(k,u,p).map((y,w)=>y+i[w]),S=St(x,m,g);f[S]=l[k]}return{dataId:t.write(f,c,e.dtype),shape:c,dtype:e.dtype}}const lo={kernelName:Kr,backendName:"cpu",kernelFunc:pp};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const fp=it((a,s)=>Math.pow(a,s)),hp=lt(jn,fp),mp={kernelName:jn,backendName:"cpu",kernelFunc:hp};/**
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
 */function gp(a){const{inputs:s,backend:t,attrs:n}=a,{paramsNestedSplits:e,paramsDenseValues:o,indices:r}=s,c=e.map(f=>t.data.get(f.dataId).values),i=e.map(f=>f.shape),l=t.data.get(o.dataId).values,d=t.data.get(r.dataId).values,[u,p,h]=Rs(c,i,l,o.shape,o.dtype,d,r.shape),m=u.map(f=>t.makeTensorInfo([f.length],"int32",f)),g=t.makeTensorInfo(h,o.dtype,p);return m.concat([g])}const Ip={kernelName:Xr,backendName:"cpu",kernelFunc:gp};/**
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
 */function kp(a){const{inputs:s,backend:t}=a,{starts:n,limits:e,deltas:o}=s,r=t.data.get(n.dataId).values,c=t.data.get(e.dataId).values,i=t.data.get(o.dataId).values,[l,d]=Fs(r,n.shape,n.dtype,c,e.shape,i,o.shape),u=t.makeTensorInfo([l.length],"int32",l),p=t.makeTensorInfo([d.length],n.dtype,d);return[u,p]}const xp={kernelName:Yr,backendName:"cpu",kernelFunc:kp};/**
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
 */function bp(a){const{inputs:s,backend:t,attrs:n}=a,{shape:e,values:o,defaultValue:r,rowPartitionTensors:c}=s,{rowPartitionTypes:i}=n,l=t.data.get(e.dataId).values,d=t.data.get(o.dataId).values,u=t.data.get(r.dataId).values,p=c.map(f=>t.data.get(f.dataId).values),h=c.map(f=>f.shape),[m,g]=Ds(l,e.shape,d,o.shape,o.dtype,u,r.shape,p,h,i);return t.makeTensorInfo(m,o.dtype,g)}const Sp={kernelName:Zr,backendName:"cpu",kernelFunc:bp};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function yp(a){const{backend:s,attrs:t}=a,{start:n,stop:e,dtype:o,step:r}=t,c=Vs(n,e,r,o);return s.makeTensorInfo([c.length],o,c)}const wp={kernelName:Jr,backendName:"cpu",kernelFunc:yp};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Np=J(_n,a=>1/a),Cp={kernelName:_n,backendName:"cpu",kernelFunc:Np};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function vp(a){const{inputs:s,backend:t,attrs:n}=a,{images:e}=s,{alignCorners:o,halfPixelCenters:r,size:c}=n;q(e,"resizeBilinear");const i=K(e.shape),[l,d]=c,[u,p,h,m]=e.shape,g=t.data.get(e.dataId).values,f=new Float32Array(G([u,l,d,m])),I=[o&&l>1?p-1:p,o&&d>1?h-1:h],k=[o&&l>1?l-1:l,o&&d>1?d-1:d];let b=0;const x=I[0]/k[0],S=I[1]/k[1];for(let y=0;y<u;y++)for(let w=0;w<l;w++){let N;r?N=x*(w+.5)-.5:N=x*w;const R=Math.max(0,Math.floor(N)),F=N-R,E=Math.min(p-1,Math.ceil(N)),W=y*i[0]+R*i[1],C=y*i[0]+E*i[1];for(let D=0;D<d;D++){let v;r?v=S*(D+.5)-.5:v=S*D;const T=Math.max(0,Math.floor(v)),O=v-T,M=Math.min(h-1,Math.ceil(v)),V=W+T*i[2],P=C+T*i[2],A=W+M*i[2],H=C+M*i[2];for(let $=0;$<m;$++){const L=g[V+$],z=g[P+$],B=g[A+$],j=g[H+$],U=L+(B-L)*O,_=z+(j-z)*O,X=U+(_-U)*F;f[b++]=X}}}return t.makeTensorInfo([u,l,d,m],"float32",f)}const Tp={kernelName:Qr,backendName:"cpu",kernelFunc:vp};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Mp(a){const{inputs:s,backend:t,attrs:n}=a,{images:e,dy:o}=s,{alignCorners:r}=n;q([o,e],"resizeBilinearGrad");const c=K(e.shape),[i,l,d,u]=e.shape,[,p,h]=o.shape,m=new Float32Array(i*l*d*u),g=[r&&p>1?l-1:l,r&&h>1?d-1:d],f=[r&&p>1?p-1:p,r&&h>1?h-1:h],I=g[0]/f[0],k=g[1]/f[1],b=t.data.get(o.dataId).values;let x=0;for(let S=0;S<i;S++){const y=S*c[0];for(let w=0;w<p;w++){const N=w*I,R=Math.floor(N),F=Math.min(Math.ceil(N),l-1),E=y+R*c[1],W=y+F*c[1],C=N-R,D=1-C;for(let v=0;v<h;v++){const T=v*k,O=Math.floor(T),M=Math.min(Math.ceil(T),d-1),V=T-O,P=1-V,A=E+O*c[2],H=E+M*c[2],$=W+O*c[2],L=W+M*c[2],z=D*P,B=D*V,j=C*P,U=C*V;for(let _=0;_<u;_++){const X=b[x++];m[A+_]+=X*z,m[H+_]+=X*B,m[$+_]+=X*j,m[L+_]+=X*U}}}}return t.makeTensorInfo([i,d,l,u],"float32",m)}const Rp={kernelName:ti,backendName:"cpu",kernelFunc:Mp};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Fp(a){const{inputs:s,backend:t,attrs:n}=a,{images:e}=s,{alignCorners:o,halfPixelCenters:r,size:c}=n;q(e,"resizeNearestNeighbor");const i=K(e.shape),[l,d]=c,[u,p,h,m]=e.shape,g=t.data.get(e.dataId).values,f=new Float32Array(u*l*d*m),I=[o&&l>1?p-1:p,o&&d>1?h-1:h],k=[o&&l>1?l-1:l,o&&d>1?d-1:d],b=I[0]/k[0],x=I[1]/k[1];let S=0;for(let y=0;y<u;y++){const w=y*i[0];for(let N=0;N<l;N++){const R=r?b*(N+.5):b*N;let F=Math.min(p-1,o?Math.round(R):Math.floor(R));r&&(F=Math.max(0,F));const E=w+F*i[1];for(let W=0;W<d;W++){const C=r?x*(W+.5):x*W;let D=Math.min(h-1,o?Math.round(C):Math.floor(C));r&&(D=Math.max(0,D));const v=E+D*i[2];for(let T=0;T<m;T++){const O=g[v+T];f[S++]=O}}}}return t.makeTensorInfo([u,l,d,m],e.dtype,f)}const Dp={kernelName:ei,backendName:"cpu",kernelFunc:Fp};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Vp(a){const{inputs:s,backend:t,attrs:n}=a,{images:e,dy:o}=s,{alignCorners:r}=n;q([o,e],"resizeNearestNeighborGrad");const c=K(e.shape),i=K(o.shape),[l,d,u,p]=e.shape,[,h,m]=o.shape,g=new Float32Array(l*d*u*p),f=t.data.get(o.dataId).values,I=[r&&h>1?d-1:d,r&&m>1?u-1:u],k=[r&&h>1?h-1:h,r&&m>1?m-1:m],b=I[0]/k[0],x=I[1]/k[1],S=1/b,y=1/x,w=Math.ceil(S)*2+2,N=Math.ceil(y)*2+2;for(let R=0;R<l;R++){const F=R*c[0];for(let E=0;E<d;E++){const W=F+E*c[1],C=Math.floor(E*S),D=Math.floor(C-w/2);for(let v=0;v<u;v++){const T=W+v*c[2],O=Math.floor(v*y),M=Math.floor(O-N/2);for(let V=0;V<p;V++){let P=0;for(let A=0;A<w;A++){const H=A+D;if(H<0||H>=h)continue;const $=F+H*i[1],L=H*b,z=Math.min(d-1,r?Math.round(L):Math.floor(L));if(E===z)for(let B=0;B<N;B++){const j=B+M;if(j<0||j>=m)continue;const U=$+j*i[2],_=j*x,X=Math.min(u-1,r?Math.round(_):Math.floor(_));v===X&&(P+=f[U+V])}}g[T+V]=P}}}}return t.makeTensorInfo(e.shape,e.dtype,g)}const Ep={kernelName:ni,backendName:"cpu",kernelFunc:Vp};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Op(a){const{inputs:s,backend:t,attrs:n}=a,{x:e}=s,{dims:o}=n;q(e,"reverse");const r=e.shape.length,c=mt(o,e.shape);if(r===0)return yt({inputs:{x:e},backend:t});const i=new pt(e.shape,e.dtype),l=t.bufferSync(e);for(let d=0;d<i.size;d++){const u=i.indexToLoc(d),p=u.slice();c.forEach(h=>p[h]=e.shape[h]-1-p[h]),i.set(l.get(...p),...u)}return t.makeTensorInfo(i.shape,i.dtype,i.values)}const Wp={kernelName:si,backendName:"cpu",kernelFunc:Op};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ap={kernelName:oi,backendName:"cpu",kernelFunc:({inputs:a,attrs:s,backend:t})=>{const{image:n}=a,{radians:e,fillValue:o,center:r}=s,c=t,i=ft(n.dtype,G(n.shape)),[l,d,u,p]=n.shape,[h,m]=ai(r,d,u),g=255,f=Math.sin(e),I=Math.cos(e),k=c.data.get(n.dataId).values;for(let x=0;x<l;x++){const S=x*u*d*p;for(let y=0;y<d;y++){const w=y*(u*p);for(let N=0;N<u;N++){const R=N*p;for(let F=0;F<p;F++){const E=[l,y,N,F],W=E[2],C=E[1];let D=(W-h)*I-(C-m)*f,v=(W-h)*f+(C-m)*I;D=Math.round(D+h),v=Math.round(v+m);let T=o;if(typeof o!="number"&&(F===3?T=g:T=o[F]),D>=0&&D<u&&v>=0&&v<d){const M=v*(u*p),V=D*p,P=S+M+V+F;T=k[P]}const O=S+w+R+F;i[O]=T}}}}return{dataId:c.write(i,n.shape,n.dtype),shape:n.shape,dtype:n.dtype}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Pp=J(Un,a=>{const s=Math.floor(a);return a-s<.5?Math.floor(a):a-s>.5?Math.ceil(a):s%2===0?s:s+1}),$p={kernelName:Un,backendName:"cpu",kernelFunc:Pp};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zp(a){const{inputs:s,backend:t,attrs:n}=a,{indices:e,updates:o}=s,{shape:r}=n,{sliceRank:c,numUpdates:i,sliceSize:l,strides:d,outputSize:u}=Kn(o,e,r),p=!0,h=t.bufferSync(e),m=t.bufferSync(o),g=zt(h,m,r,u,l,i,c,d,0,p);return t.makeTensorInfo(r,g.dtype,g.values)}const Hp={kernelName:ri,backendName:"cpu",kernelFunc:zp};/**
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
 */function Lp(a,s){let t=0,n=a.length,e=0;for(;t<n;)e=Math.floor((t+n)/2),a[e]<s?t=e+1:n=e;return n}function Bp(a,s){let t=0,n=a.length,e=0;for(;t<n;)e=Math.floor((t+n)/2),a[e]<=s?t=e+1:n=e;return n}function Gp(a,s,t,n,e,o){const r=ct("int32",t*e);for(let c=0;c<t;++c){const i=a.slice(c*n,(c+1)*n),l=c*e;for(let d=0;d<e;++d)r[l+d]=o==="left"?Lp(i,s[d+l]):Bp(i,s[d+l])}return r}/**
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
 */function qp(a){const{inputs:s,backend:t,attrs:n}=a,{sortedSequence:e,values:o}=s,{side:r}=n,c=t.data.get(e.dataId).values,i=t.data.get(o.dataId).values,l=Gp(c,i,e.shape[0],e.shape[1],o.shape[1],r);return t.makeTensorInfo(o.shape,"int32",l)}const jp={kernelName:ii,backendName:"cpu",kernelFunc:qp};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _p(a){const{inputs:s,backend:t}=a,{condition:n,t:e,e:o}=s;q([n,e,o],"select");const r=n.shape.length,c=t.data.get(n.dataId).values,i=t.data.get(e.dataId).values,l=t.data.get(o.dataId).values,d=Jt(e.dtype,o.dtype),u=It(G(e.shape),d);let p=0;const h=r===0||r>1||e.shape.length===1?1:G(e.shape.slice(1));for(let m=0;m<c.length;m++)for(let g=0;g<h;g++)c[m]===1?u[p++]=i[m]:u[p++]=l[m];return t.makeTensorInfo(e.shape,d,u)}const Up={kernelName:ci,backendName:"cpu",kernelFunc:_p};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Kp=li,Xp=di,Yp=J(Xn,a=>a>=0?Xp*a:Kp*(Math.exp(a)-1)),Zp={kernelName:Xn,backendName:"cpu",kernelFunc:Yp};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Jp=J(Yn,a=>a<0?-1:a>0?1:0),Qp={kernelName:Yn,backendName:"cpu",kernelFunc:Jp};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const tf=J(Zn,a=>Math.sin(a)),ef={kernelName:Zn,backendName:"cpu",kernelFunc:tf};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const nf=J(Jn,a=>Math.sinh(a)),sf={kernelName:Jn,backendName:"cpu",kernelFunc:nf};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const of=11920928955078125e-23,je=Math.log(of)+2,af=J(Qn,a=>{const s=a>-je,t=a<je,n=Math.exp(a);let e;return t?e=n:s?e=a:e=Math.log(1+n),e}),rf={kernelName:Qn,backendName:"cpu",kernelFunc:af};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function cf(a){const{inputs:s,backend:t,attrs:n}=a,{x:e}=s,{blockShape:o,paddings:r}=n;q([e],"spaceToBatchND");const c=G(o),i=[[0,0]];i.push(...r);for(let y=1+o.length;y<e.shape.length;++y)i.push([0,0]);const l=lo.kernelFunc({inputs:{x:e},backend:t,attrs:{paddings:i,constantValue:0}}),d=Cn(l.shape,o,c,!1),u=vn(d.length,o.length,!1),p=Tn(l.shape,o,c,!1),g=st({inputs:{x:l},backend:t,attrs:{shape:d}}),k=ht({inputs:{x:g},backend:t,attrs:{perm:u}}),S=st({inputs:{x:k},backend:t,attrs:{shape:p}});return t.disposeIntermediateTensorInfo(l),t.disposeIntermediateTensorInfo(g),t.disposeIntermediateTensorInfo(k),S}const lf={kernelName:ui,backendName:"cpu",kernelFunc:cf};/**
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
 */function df(a){const{inputs:s,backend:t}=a,{indices:n,values:e,denseShape:o,defaultValue:r}=s;if(o.shape.length!==1)throw new Error(`Dense shape must be a vector, saw:
        ${o.shape}`);if(n.shape.length!==2)throw new Error(`Indices must be a matrix, saw:
        ${n.shape}`);if(e.shape.length!==1)throw new Error(`Values must be a vector, saw:
        ${e.shape}`);if(r.shape.length!==0)throw new Error(`Default value must be a scalar, saw:
        ${r.shape}`);const c=t.data.get(n.dataId).values,i=t.data.get(e.dataId).values,l=t.data.get(o.dataId).values,d=t.data.get(r.dataId).values[0],[u,p,h,m,g]=As(c,n.shape,n.dtype,i,e.dtype,l,d);return[t.makeTensorInfo(p,n.dtype,u),t.makeTensorInfo([p[0]],e.dtype,h),t.makeTensorInfo([m.length],"bool",new Uint8Array(m.map(f=>Number(f)))),t.makeTensorInfo([g.length],n.dtype,new Int32Array(g))]}const uf={kernelName:pi,backendName:"cpu",kernelFunc:df};/**
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
 */function pf(a){const{inputs:s,backend:t}=a,{inputIndices:n,inputShape:e,newShape:o}=s;if(n.shape.length!==2)throw new Error(`Input indices should be a matrix but received shape
        ${n.shape}`);if(e.shape.length!==1)throw new Error(`Input shape should be a vector but received shape
        ${e.shape}`);if(o.shape.length!==1)throw new Error(`Target shape should be a vector but received shape ${o.shape}`);const r=Array.from(t.data.get(e.dataId).values),c=t.data.get(n.dataId).values,i=Array.from(t.data.get(o.dataId).values),[l,d,u]=Ps(c,n.shape,n.dtype,r,i);return[t.makeTensorInfo(d,n.dtype,l),t.makeTensorInfo([u.length],o.dtype,new Int32Array(u))]}const ff={kernelName:fi,backendName:"cpu",kernelFunc:pf};/**
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
 */function hf(a){const{inputs:s,backend:t}=a,{data:n,indices:e,segmentIds:o}=s;if(n.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(e.shape.length!==1)throw new Error(`Indices should be a vector but received shape
          ${e.shape}`);if(o.shape.length!==1)throw new Error(`Segment ids should be a vector but received shape
          ${o.shape}`);if(e.shape[0]!==o.shape[0])throw new Error("segmentIds and indices should have same size.");const r=t.data.get(n.dataId).values,c=t.data.get(e.dataId).values,i=t.data.get(o.dataId).values,[l,d]=De(r,n.shape,n.dtype,c,i,!0);return t.makeTensorInfo(d,n.dtype,l)}const mf={kernelName:hi,backendName:"cpu",kernelFunc:hf};/**
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
 */function gf(a){const{inputs:s,backend:t}=a,{data:n,indices:e,segmentIds:o}=s;if(n.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(e.shape.length!==1)throw new Error(`Indices should be a vector but received shape
         ${e.shape}`);if(o.shape.length!==1)throw new Error(`Segment ids should be a vector but received shape
         ${o.shape}`);if(e.shape[0]!==o.shape[0])throw new Error("segmentIds and indices should have same size.");const r=t.data.get(n.dataId).values,c=t.data.get(e.dataId).values,i=t.data.get(o.dataId).values,[l,d]=De(r,n.shape,n.dtype,c,i);return t.makeTensorInfo(d,n.dtype,l)}const If={kernelName:mi,backendName:"cpu",kernelFunc:gf};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function kf(a){const{inputs:s,backend:t,attrs:n}=a,{sparseIndices:e,sparseValues:o,defaultValue:r}=s,{outputShape:c}=n,{sliceRank:i,numUpdates:l,sliceSize:d,strides:u,outputSize:p}=Kn(o,e,c),h=!1,m=t.bufferSync(e);let g;switch(o.dtype){case"bool":{const f=t.bufferSync(o),I=!!t.data.get(r.dataId).values[0];g=zt(m,f,c,p,d,l,i,u,I,h);break}case"float32":{const f=t.bufferSync(o),I=t.data.get(r.dataId).values[0];g=zt(m,f,c,p,d,l,i,u,I,h);break}case"int32":{const f=t.bufferSync(o),I=t.data.get(r.dataId).values[0];g=zt(m,f,c,p,d,l,i,u,I,h);break}case"string":{const f=t.bufferSync(o),I=Ue(t.data.get(r.dataId).values[0]);g=zt(m,f,c,p,d,l,i,u,I,h);break}default:throw new Error(`Unsupported type ${o.dtype}`)}return t.makeTensorInfo(c,g.dtype,g.values)}const xf={kernelName:gi,backendName:"cpu",kernelFunc:kf};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function bf(a){const{inputs:s,backend:t,attrs:n}=a,{x:e}=s,{numOrSizeSplits:o,axis:r}=n,c=mt(r,e.shape)[0],i=ki(e,o,c),l=new Array(e.shape.length).fill(0),d=e.shape.slice();return i.map(u=>{const p=[...d];p[c]=u;const h=At({inputs:{x:e},backend:t,attrs:{begin:l,size:p}});return l[c]+=u,h})}const Sf={kernelName:Ii,backendName:"cpu",kernelFunc:bf};/**
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
 */const yf={kernelName:xi,backendName:"cpu",kernelFunc:({inputs:a,backend:s})=>{const{x:t}=a,n=s;q(t,"square");const e=n.data.get(t.dataId).values,o=new Float32Array(e.length);for(let c=0;c<e.length;++c){const i=e[c];o[c]=i*i}return{dataId:n.write(o,t.shape,t.dtype),shape:t.shape,dtype:t.dtype}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const wf=J(ts,(a,s)=>{const t=s;return isNaN(a)?NaN:a>0?1:t.alpha}),Nf={kernelName:ts,backendName:"cpu",kernelFunc:wf};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Cf(a){const{inputs:s,backend:t,attrs:n}=a,{x:e}=s,{begin:o,end:r,strides:c,beginMask:i,endMask:l,ellipsisMask:d,newAxisMask:u,shrinkAxisMask:p}=n;q(e,"stridedSlice");const{finalShapeSparse:h,finalShape:m,isIdentity:g,sliceDim0:f,isSimpleSlice:I,begin:k,end:b,strides:x}=Si(e.shape,o,r,c,i,l,d,u,p);let S;if(g)S=st({inputs:{x:e},backend:t,attrs:{shape:m}});else if(f||I){ut(e.shape.length>=1,()=>`Input must have rank at least 1, got: ${e.shape.length}`);const y=yi(k,b,x),w=At({inputs:{x:e},backend:t,attrs:{begin:k,size:y}});S=st({inputs:{x:w},backend:t,attrs:{shape:m}}),t.disposeIntermediateTensorInfo(w)}else{const y=t.bufferSync(e),w=zs(h,y,x,k);S=t.makeTensorInfo(m,w.dtype,w.values)}return S}const vf={kernelName:bi,backendName:"cpu",kernelFunc:Cf};/**
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
 */function Tf(a){const{inputs:s,backend:t,attrs:n}=a,{separator:e,nGramWidths:o,leftPad:r,rightPad:c,padWidth:i,preserveShortSequences:l}=n,{data:d,dataSplits:u}=s,p=t.data.get(d.dataId).values,h=t.data.get(u.dataId).values,[m,g]=Hs(p,h,e,o,r,c,i,l);return[t.makeTensorInfo([m.length],"string",m),t.makeTensorInfo(u.shape,"int32",g)]}const Mf={kernelName:wi,backendName:"cpu",kernelFunc:Tf};/**
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
 */function Rf(a){const{inputs:s,backend:t,attrs:n}=a,{skipEmpty:e}=n,{input:o,delimiter:r}=s;if(o.dtype!=="string")throw new Error("Input must be of datatype string");if(o.shape.length!==1)throw new Error(`Input must be a vector, got shape: ${o.shape}`);if(r.shape.length!==0)throw new Error(`Delimiter must be a scalar, got shape: ${r.shape}`);const c=t.data.get(o.dataId).values,i=t.data.get(r.dataId).values[0],[l,d,u]=Ls(c,i,e),p=d.length;return[t.makeTensorInfo([p,2],"int32",l),t.makeTensorInfo([p],"string",d),t.makeTensorInfo([2],"int32",new Int32Array(u))]}const Ff={kernelName:Ni,backendName:"cpu",kernelFunc:Rf};/**
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
 */function Df(a){const{inputs:s,backend:t,attrs:n}=a,{numBuckets:e}=n,{input:o}=s;if(o.dtype!=="string")throw new Error("Input must be of datatype string");if(e<=0)throw new Error("Number of buckets must be at least 1");const r=t.data.get(o.dataId).values,c=Bs(r,e);return t.makeTensorInfo(o.shape,"int32",c)}const Vf={kernelName:Ci,backendName:"cpu",kernelFunc:Df};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ef=J(es,a=>Math.tan(a)),Of={kernelName:es,backendName:"cpu",kernelFunc:Ef};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Wf=J(ns,a=>Math.tanh(a)),Af={kernelName:ns,backendName:"cpu",kernelFunc:Wf};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Pf(a){const{inputs:s,backend:t,attrs:n}=a,{x:e}=s,{reps:o}=n;q(e,"tile");const r=qs(t.bufferSync(e),o);return t.makeTensorInfo(r.shape,r.dtype,r.values)}const $f={kernelName:vi,backendName:"cpu",kernelFunc:Pf};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zf(a){const{inputs:s,backend:t,attrs:n}=a,{x:e}=s,{k:o,sorted:r}=n;q(e,"topk");const c=t.data.get(e.dataId).values,[i,l]=_s(c,e.shape,e.dtype,o,r);return[t.makeTensorInfo(i.shape,i.dtype,i.values),t.makeTensorInfo(l.shape,l.dtype,l.values)]}const Hf={kernelName:Ti,backendName:"cpu",kernelFunc:zf};/**
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
 */function Lf(a){const{inputs:s,attrs:t,backend:n}=a,{image:e,transforms:o}=s,{interpolation:r,fillMode:c,fillValue:i,outputShape:l}=t,[d,u,p,h]=e.shape,[m,g]=l??[u,p],f=[d,m,g,h],I=K(e.shape),k=I[0],b=I[1],x=I[2],S=K(f),y=S[0],w=S[1],N=S[2],R=ft(e.dtype,G(f));R.fill(i);const F=n.data.get(e.dataId).values,E=n.data.get(o.dataId).values;for(let C=0;C<d;++C){const D=o.shape[0]===1?E:E.subarray(C*8,C*8+8);for(let v=0;v<m;++v)for(let T=0;T<g;++T)for(let O=0;O<h;++O){let M;const V=D[6]*T+D[7]*v+1;if(V===0)continue;const P=(D[0]*T+D[1]*v+D[2])/V,A=(D[3]*T+D[4]*v+D[5])/V,H=_e(P,p,c),$=_e(A,u,c);switch(r){case"nearest":M=Uf(F,u,p,k,b,x,C,$,H,O,i);break;case"bilinear":M=Kf(F,u,p,k,b,x,C,$,H,O,i);break;default:throw new Error(`Error in Transform: Expect 'nearest' or 'bilinear', but got ${r}`)}const L=C*y+v*w+T*N+O;R[L]=M}return n.makeTensorInfo(f,e.dtype,R)}return{dataId:n.write(R,f,e.dtype),shape:e.shape,dtype:e.dtype}}const Bf={kernelName:Mi,backendName:"cpu",kernelFunc:Lf};function _e(a,s,t){switch(t){case"reflect":return Gf(a,s);case"wrap":return qf(a,s);case"nearest":return _f(a,s);case"constant":default:return jf(a)}}function Gf(a,s){let t=a;if(t<0)if(s<=1)t=0;else{const n=2*s;t<n&&(t=n*Math.trunc(-t/n)+t),t=t<-s?t+n:-t-1}else if(t>s-1)if(s<=1)t=0;else{const n=2*s;t-=n*Math.trunc(t/n),t>=s&&(t=n-t-1)}return ve(0,t,s-1)}function qf(a,s){let t=a;if(t<0)if(s<=1)t=0;else{const n=s-1;t+=s*(Math.trunc(-t/n)+1)}else if(t>s-1)if(s<=1)t=0;else{const n=s-1;t-=s*Math.trunc(t/n)}return ve(0,t,s-1)}function jf(a,s){return a}function _f(a,s){return ve(0,a,s-1)}function Zt(a,s,t,n,e,o,r,c,i,l,d){const u=r*n+c*e+i*o+l;return 0<=c&&c<s&&0<=i&&i<t?a[u]:d}function Uf(a,s,t,n,e,o,r,c,i,l,d){const u=Math.round(c),p=Math.round(i);return Zt(a,s,t,n,e,o,r,u,p,l,d)}function Kf(a,s,t,n,e,o,r,c,i,l,d){const u=Math.floor(c),p=Math.floor(i),h=u+1,m=p+1,g=(m-i)*Zt(a,s,t,n,e,o,r,u,p,l,d)+(i-p)*Zt(a,s,t,n,e,o,r,u,m,l,d),f=(m-i)*Zt(a,s,t,n,e,o,r,h,p,l,d)+(i-p)*Zt(a,s,t,n,e,o,r,h,m,l,d);return(h-c)*g+(c-u)*f}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Xf(a){const{inputs:s,attrs:t,backend:n}=a,{axis:e}=t,{x:o}=s;q(o,"unique");const r=n.data.get(o.dataId).values,{outputValues:c,outputShape:i,indices:l}=Us(r,e,o.shape,o.dtype);return[n.makeTensorInfo(i,o.dtype,c),n.makeTensorInfo([l.length],"int32",l)]}const Yf={kernelName:Ri,backendName:"cpu",kernelFunc:Xf};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Zf(a){const{inputs:s,backend:t,attrs:n}=a,{value:e}=s;let{axis:o}=n;o<0&&(o+=e.shape.length);const r=e.shape.length,c=e.shape[o],i=new Array(r-1);let l=0;for(let h=0;h<r;h++)h!==o&&(i[l++]=e.shape[h]);const d=new Array(r).fill(0),u=e.shape.slice();u[o]=1;const p=new Array(c);for(let h=0;h<p.length;h++){d[o]=h;const m=At({inputs:{x:e},backend:t,attrs:{begin:d,size:u}});p[h]=st({inputs:{x:m},backend:t,attrs:{shape:i}}),t.disposeIntermediateTensorInfo(m)}return p}const Jf={kernelName:Fi,backendName:"cpu",kernelFunc:Zf};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Qf(a){const{inputs:s,backend:t,attrs:n}=a,{x:e,segmentIds:o}=s,{numSegments:r}=n;q(e,"unsortedSegmentSum");const c=e.shape.length,i=o.shape.length,l=[],d=[],u=c-i;let p=o;for(let m=0;m<u;++m){const g=ce({inputs:{input:p},backend:t,attrs:{dim:m+1}});p=g,d.push(g)}for(let m=0;m<r;++m){const g=be(m,"int32"),f=t.makeTensorInfo([],"int32",g),I=ds({inputs:{a:f,b:p},backend:t}),k=Vt({inputs:{x:I},backend:t,attrs:{dtype:"float32"}}),b=he({inputs:{a:k,b:e},backend:t}),x=te({inputs:{x:b},backend:t,attrs:{axis:0,keepDims:!1}});l.push(x),d.push(f),d.push(I),d.push(k),d.push(b),d.push(x)}const h=co({inputs:l,backend:t,attrs:{axis:0}});return d.forEach(m=>t.disposeIntermediateTensorInfo(m)),h}const th={kernelName:Di,backendName:"cpu",kernelFunc:Qf};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const eh=[Xc,Ai,Zc,Qc,Bi,el,sl,al,il,ll,ul,fl,ml,kl,bl,wl,Cl,Tl,Rl,Uc,Dl,El,Wl,Pl,Hi,qi,zl,Pi,Ll,Gl,ql,_l,Kl,Yl,Jl,td,nd,od,rd,cd,dd,pd,hd,md,Id,xd,Sd,yd,wd,Nd,Td,Hc,Rd,ji,Pd,_i,$d,Ki,qd,jd,Ud,Yi,Yd,Jd,tu,nu,ou,Ji,tc,$i,ru,Bl,cu,du,pu,Lc,nc,oc,hu,rc,gu,xu,Su,Nu,vu,Mu,Ru,cc,Du,Eu,Wu,Pu,zu,Lu,Gu,dc,ju,Ku,Zu,pc,hc,tp,sp,rp,gc,cp,dp,up,lo,mp,Gc,xc,Ip,xp,Sp,wp,zi,ke,Cp,qc,jc,_c,Tp,Rp,Dp,Ep,Wp,Ap,$p,Tc,Hp,jp,Up,Zp,Rc,Qp,ef,sf,Fc,Xu,rf,lf,uf,ff,mf,If,xf,Sf,Ec,yf,Wc,Nf,vf,Mf,Ff,Vf,zc,Cd,Of,Af,$f,Hf,Bf,Ic,Yf,Jf,th,lp];for(const a of eh)Vi(a);export{oh as s};
