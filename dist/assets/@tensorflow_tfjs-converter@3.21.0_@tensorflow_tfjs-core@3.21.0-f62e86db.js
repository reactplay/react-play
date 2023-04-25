import{g as Ie}from"./index-2d91d905.js";import{e as se,t as Ae,c as ve,a as T,b as C,s as V,k as L,d as R,f as j,g as Ne,u as q,h as A,r as k,i as be,j as ue,l as B,m as Te,T as me,n as ke,o as Le,p as pe}from"./@tensorflow_tfjs-core@3.21.0-479823c6.js";/**
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
 */const Ve=se();Ve.registerFlag("KEEP_INTERMEDIATE_TENSORS",()=>!1,a=>{a&&console.warn("Keep intermediate tensors is ON. This will print the values of all intermediate tensors during model inference. Not all models support this mode. For details, check e2e/benchmarks/ model_config.js. This significantly impacts performance.")});/**
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
 *
 * =============================================================================
 */var O;(function(a){a[a.DT_INVALID=0]="DT_INVALID",a[a.DT_FLOAT=1]="DT_FLOAT",a[a.DT_DOUBLE=2]="DT_DOUBLE",a[a.DT_INT32=3]="DT_INT32",a[a.DT_UINT8=4]="DT_UINT8",a[a.DT_INT16=5]="DT_INT16",a[a.DT_INT8=6]="DT_INT8",a[a.DT_STRING=7]="DT_STRING",a[a.DT_COMPLEX64=8]="DT_COMPLEX64",a[a.DT_INT64=9]="DT_INT64",a[a.DT_BOOL=10]="DT_BOOL",a[a.DT_QINT8=11]="DT_QINT8",a[a.DT_QUINT8=12]="DT_QUINT8",a[a.DT_QINT32=13]="DT_QINT32",a[a.DT_BFLOAT16=14]="DT_BFLOAT16",a[a.DT_QINT16=15]="DT_QINT16",a[a.DT_QUINT16=16]="DT_QUINT16",a[a.DT_UINT16=17]="DT_UINT16",a[a.DT_COMPLEX128=18]="DT_COMPLEX128",a[a.DT_HALF=19]="DT_HALF",a[a.DT_RESOURCE=20]="DT_RESOURCE",a[a.DT_VARIANT=21]="DT_VARIANT",a[a.DT_UINT32=22]="DT_UINT32",a[a.DT_UINT64=23]="DT_UINT64",a[a.DT_FLOAT_REF=101]="DT_FLOAT_REF",a[a.DT_DOUBLE_REF=102]="DT_DOUBLE_REF",a[a.DT_INT32_REF=103]="DT_INT32_REF",a[a.DT_UINT8_REF=104]="DT_UINT8_REF",a[a.DT_INT16_REF=105]="DT_INT16_REF",a[a.DT_INT8_REF=106]="DT_INT8_REF",a[a.DT_STRING_REF=107]="DT_STRING_REF",a[a.DT_COMPLEX64_REF=108]="DT_COMPLEX64_REF",a[a.DT_INT64_REF=109]="DT_INT64_REF",a[a.DT_BOOL_REF=110]="DT_BOOL_REF",a[a.DT_QINT8_REF=111]="DT_QINT8_REF",a[a.DT_QUINT8_REF=112]="DT_QUINT8_REF",a[a.DT_QINT32_REF=113]="DT_QINT32_REF",a[a.DT_BFLOAT16_REF=114]="DT_BFLOAT16_REF",a[a.DT_QINT16_REF=115]="DT_QINT16_REF",a[a.DT_QUINT16_REF=116]="DT_QUINT16_REF",a[a.DT_UINT16_REF=117]="DT_UINT16_REF",a[a.DT_COMPLEX128_REF=118]="DT_COMPLEX128_REF",a[a.DT_HALF_REF=119]="DT_HALF_REF",a[a.DT_RESOURCE_REF=120]="DT_RESOURCE_REF",a[a.DT_VARIANT_REF=121]="DT_VARIANT_REF",a[a.DT_UINT32_REF=122]="DT_UINT32_REF",a[a.DT_UINT64_REF=123]="DT_UINT64_REF"})(O||(O={}));var oe;(function(a){(function(e){e[e.LEGACY=0]="LEGACY",e[e.V1=1]="V1",e[e.V2=2]="V2"})(a.CheckpointFormatVersion||(a.CheckpointFormatVersion={}))})(oe||(oe={}));/**
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
 */const re={};function De(a,e){const t={tfOpName:a,category:"custom",inputs:[],attrs:[],customExecutor:e};re[a]=t}function Se(a){return re[a]}function ze(a){delete re[a]}/**
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
 */function r(a,e,t,s,n){const i=e.inputParams[a];if(i&&i.inputIndexStart!==void 0){const m=i.inputIndexStart,p=i.inputIndexEnd===0?void 0:i.inputIndexEnd===void 0?m+1:i.inputIndexEnd;if(i.type==="tensor")return S(e.inputNames[i.inputIndexStart],t,s,n);if(i.type==="tensors")return e.inputNames.slice(m,p).map(y=>S(y,t,s,n));const l=S(e.inputNames.slice(m)[0],t,s,n),o=l.dataSync();return i.type==="number"?o[0]:Ae(l.shape,o)}const u=e.attrParams[a];return u&&u.value}function S(a,e,t,s){const[n,i]=_(a);if(s!=null){const m=s.getHashTableHandleByName(n);if(m!=null)return m}const u=t.currentContextIds.find(m=>!!e[x(n,m)]);return u!==void 0?e[x(n,u)][i]:void 0}function Fe(a,e,t){return e[x(a,t.currentContextId)]}function I(a,e){const[t,s,n]=_(a);return[x(t,e&&e.currentContextId),s,n]}function x(a,e){return e?`${a}-${e}`:a}function _(a){const e=a.split(":");if(e.length===1)return[a,0,void 0];const t=e[0],s=e.length===3?e[1]:void 0,n=Number(e[e.length-1]);return[t,n,s]}function P(a,e,t){let s=r("pad",a,e,t);if(s==="explicit"){s=r("explicitPaddings",a,e,t);const n=[[0,0],[0,0],[0,0],[0,0]];for(let i=0;i<4;i++)n[i][0]=s[i*2],n[i][1]=s[i*2+1];return n}return s}function v(a){return a.kept?a:ve(a)}/**
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
 */const $e=[{tfOpName:"Add",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AddV2",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AddN",category:"arithmetic",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}]},{tfOpName:"BiasAdd",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"Sub",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"RealDiv",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Div",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"DivNoNan",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"FloorDiv",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Mul",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Maximum",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Minimum",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Pow",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SquaredDifference",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Mod",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"FloorMod",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}],Ce=Object.freeze(Object.defineProperty({__proto__:null,json:$e},Symbol.toStringTag,{value:"Module"}));/**
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
 */const Pe=[{tfOpName:"Abs",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Acos",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Asin",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atan2",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Ceil",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ClipByValue",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"clipValueMin",type:"number"},{start:2,name:"clipValueMax",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Complex",category:"basic_math",inputs:[{start:0,name:"real",type:"tensor"},{start:1,name:"imag",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ComplexAbs",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cos",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cosh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Elu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Exp",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Floor",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Log",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Imag",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"Tout",name:"outputType",type:"dtype",notSupported:!0}]},{tfOpName:"Neg",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Real",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"Tout",name:"outputType",type:"dtype",notSupported:!0}]},{tfOpName:"Prelu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"alpha",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Relu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Relu6",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Selu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sigmoid",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sin",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sinh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sqrt",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Rsqrt",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Square",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Tan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Tanh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sign",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Round",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Expm1",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Log1p",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Reciprocal",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Softplus",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Asinh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Acosh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atanh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Erf",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Prod",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axes",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool",notSupported:!0},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LeakyRelu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"alpha",name:"alpha",type:"number",defaultValue:.2},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"IsNan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}],Re=Object.freeze(Object.defineProperty({__proto__:null,json:Pe},Symbol.toStringTag,{value:"Module"}));/**
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
 */const je=[{tfOpName:"EmptyTensorList",category:"control",inputs:[{start:0,name:"elementShape",type:"shape"},{start:1,name:"maxNumElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"LoopCond",category:"control",inputs:[{start:0,name:"pred",type:"tensor"}]},{tfOpName:"Switch",category:"control",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"pred",type:"tensor"}]},{tfOpName:"Merge",category:"control",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}]},{tfOpName:"Enter",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"frame_name",name:"frameName",type:"string"},{tfName:"is_constant",name:"isConstant",type:"bool"}]},{tfOpName:"Exit",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"NextIteration",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayV3",category:"control",inputs:[{start:0,name:"size",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"dynamic_size",name:"dynamicSize",type:"bool"},{tfName:"clear_after_read",name:"clearAfterRead",type:"bool"},{tfName:"identical_element_shapes",name:"identicalElementShapes",type:"bool"},{tfName:"tensor_array_name",name:"name",type:"string"}]},{tfOpName:"TensorArrayWriteV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"tensor",type:"tensor"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayReadV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayGatherV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape",name:"elementShape",type:"shape"}]},{tfOpName:"TensorArrayScatterV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"tensor",type:"tensor"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"TensorArrayConcatV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape_except0",name:"elementShapeExcept0",type:"shape",notSupported:!0}]},{tfOpName:"TensorArraySplitV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"tensor",type:"tensor"},{start:2,name:"lengths",type:"number[]"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"TensorArraySizeV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"flowIn",type:"number"}]},{tfOpName:"TensorArrayCloseV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"}]},{tfOpName:"StatelessIf",category:"control",inputs:[{start:0,name:"cond",type:"tensor"},{start:1,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"then_branch",name:"thenBranch",type:"func"},{tfName:"else_branch",name:"elseBranch",type:"func"}]},{tfOpName:"If",category:"control",inputs:[{start:0,name:"cond",type:"tensor"},{start:1,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"then_branch",name:"thenBranch",type:"func"},{tfName:"else_branch",name:"elseBranch",type:"func"}]},{tfOpName:"StatelessWhile",category:"control",inputs:[{start:0,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"cond",name:"cond",type:"func"},{tfName:"body",name:"body",type:"func"}]},{tfOpName:"While",category:"control",inputs:[{start:0,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"cond",name:"cond",type:"func"},{tfName:"body",name:"body",type:"func"}]},{tfOpName:"TensorListScatter",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListScatterV2",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"},{start:3,name:"numElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListGather",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListGetItem",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListSetItem",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"tensor",type:"tensor"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListReserve",category:"control",inputs:[{start:0,name:"elementShape",type:"shape"},{start:1,name:"numElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListFromTensor",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListStack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"},{tfName:"num_elements",name:"numElements",type:"dtype"}]},{tfOpName:"TensorListSplit",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"elementShape",type:"shape"},{start:2,name:"lengths",type:"number[]"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListConcat",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}],attrs:[{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListConcatV2",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}],attrs:[{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListPopBack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListPushBack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"tensor",type:"tensor"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListLength",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}]},{tfOpName:"TensorListResize",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"size",type:"number"}]}],Be=Object.freeze(Object.defineProperty({__proto__:null,json:je},Symbol.toStringTag,{value:"Module"}));/**
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
 */const xe=[{tfOpName:"AvgPool",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPool",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[],notSupported:!0},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPoolWithArgmax",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"include_batch_in_index",name:"includeBatchInIndex",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AvgPool3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPool3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Conv1D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"stride",name:"stride",type:"number"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NWC"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"dilation",name:"dilation",type:"number",defaultValue:1}]},{tfOpName:"Conv2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"useCudnnOnGpu",name:"useCudnnOnGpu",type:"bool"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"_FusedConv2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"use_cudnn_on_gpu",name:"useCudnnOnGpu",type:"bool",defaultValue:!0},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]",defaultValue:[1,1,1,1]},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:1e-4},{tfName:"leakyrelu_alpha",name:"leakyreluAlpha",type:"number",defaultValue:.2}]},{tfOpName:"Conv2DBackpropInput",category:"convolution",inputs:[{start:2,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:0,name:"outputShape",type:"number[]"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]",notSupported:!0}]},{tfOpName:"DepthwiseConv2d",category:"convolution",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"DepthwiseConv2dNative",category:"convolution",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"FusedDepthwiseConv2dNative",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]",defaultValue:[1,1,1,1]},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]}]},{tfOpName:"Conv3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"Dilation2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"rates",name:"dilations",type:"number[]"},{tfName:"padding",name:"pad",type:"string"}]}],He=Object.freeze(Object.defineProperty({__proto__:null,json:xe},Symbol.toStringTag,{value:"Module"}));/**
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
 */const qe=[{tfOpName:"Fill",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"},{start:1,name:"value",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"LinSpace",category:"creation",inputs:[{start:0,name:"start",type:"number"},{start:1,name:"stop",type:"number"},{start:2,name:"num",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"OneHot",category:"creation",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"depth",type:"number"},{start:2,name:"onValue",type:"number",defaultValue:1},{start:3,name:"offValue",type:"number",defaultValue:0}],attrs:[{tfName:"axis",name:"axis",type:"number",notSupported:!0},{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"Ones",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"OnesLike",category:"creation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"RandomStandardNormal",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"seed",name:"seed",type:"number",defaultValue:0},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"RandomUniform",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"minval",name:"minval",type:"number",defaultValue:0},{tfName:"maxval",name:"maxval",type:"number",defaultValue:1},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"seed",name:"seed",type:"number",defaultValue:0},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"Range",category:"creation",inputs:[{start:0,name:"start",type:"number"},{start:1,name:"stop",type:"number"},{start:2,name:"step",type:"number",defaultValue:0}],attrs:[{tfName:"Tidx",name:"dtype",type:"dtype"}]},{tfOpName:"TruncatedNormal",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"means",name:"mean",type:"number",defaultValue:0},{tfName:"stddev",name:"stdDev",type:"number",defaultValue:1},{tfName:"seed",name:"seed",type:"number"},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"Zeros",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"ZerosLike",category:"creation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"Multinomial",category:"creation",inputs:[{start:0,name:"logits",type:"tensor"},{start:1,name:"numSamples",type:"number"}],attrs:[{tfName:"seed",name:"seed",type:"number"},{tfName:"seed2",name:"seed2",type:"number"},{tfName:"T",name:"dtype",type:"dtype"},{tfName:"output_dtype",name:"output_dtype",type:"dtype"}]}],Ue=Object.freeze(Object.defineProperty({__proto__:null,json:qe},Symbol.toStringTag,{value:"Module"}));/**
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
 */const We=[{tfOpName:"NonMaxSuppressionV2",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"}]},{tfOpName:"NonMaxSuppressionV3",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"}]},{tfOpName:"NonMaxSuppressionV4",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"T_threshold",name:"threshold",type:"dtype",notSupported:!0},{tfName:"pad_to_max_output_size",name:"padToMaxOutputSize",type:"bool"}]},{tfOpName:"NonMaxSuppressionV5",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"},{start:5,name:"softNmsSigma",type:"number"}]},{tfOpName:"Where",category:"dynamic",inputs:[{start:0,name:"condition",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ListDiff",category:"dynamic",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}],Ge=Object.freeze(Object.defineProperty({__proto__:null,json:We},Symbol.toStringTag,{value:"Module"}));/**
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
 */const Ke=[{tfOpName:"LowerBound",category:"evaluation",inputs:[{start:0,name:"sortedSequence",type:"tensor"},{start:1,name:"values",type:"tensor"}]},{tfOpName:"TopKV2",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"k",type:"number"}],attrs:[{tfName:"sorted",name:"sorted",type:"bool"}]},{tfOpName:"UpperBound",category:"evaluation",inputs:[{start:0,name:"sortedSequence",type:"tensor"},{start:1,name:"values",type:"tensor"}]},{tfOpName:"Unique",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"UniqueV2",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]}],Qe=Object.freeze(Object.defineProperty({__proto__:null,json:Ke},Symbol.toStringTag,{value:"Module"}));/**
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
 */const Xe=[{tfOpName:"PlaceholderWithDefault",category:"graph",inputs:[{start:0,name:"default",type:"tensor"}],attrs:[{tfName:"shape",name:"shape",type:"shape"},{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"Placeholder",category:"graph",attrs:[{tfName:"shape",name:"shape",type:"shape"},{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"Const",category:"graph"},{tfOpName:"Identity",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"IdentityN",category:"graph",inputs:[{start:0,end:0,name:"x",type:"tensors"}]},{tfOpName:"Snapshot",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Rank",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Size",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Shape",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"ShapeN",category:"graph",inputs:[{start:0,end:0,name:"x",type:"tensors"}]},{tfOpName:"Print",category:"graph",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"data",type:"tensors"}],attrs:[{tfName:"message",name:"message",type:"string"},{tfName:"first_n",name:"firstN",type:"number",notSupported:!0},{tfName:"summarize",name:"summarize",type:"number",defaultValue:3}]},{tfOpName:"NoOp",category:"graph",inputs:[]},{tfOpName:"StopGradient",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"FakeQuantWithMinMaxVars",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"min",name:"min",type:"number"},{tfName:"max",name:"max",type:"number"}]}],Je=Object.freeze(Object.defineProperty({__proto__:null,json:Xe},Symbol.toStringTag,{value:"Module"}));/**
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
 */const Ye=[{tfOpName:"HashTable",category:"hash_table",inputs:[],attrs:[{tfName:"shared_name",name:"sharedName",type:"string"},{tfName:"use_node_name_sharing",name:"useNodeNameSharing",type:"bool"},{tfName:"key_dtype",name:"keyDType",type:"dtype"},{tfName:"value_dtype",name:"valueDType",type:"dtype"}]},{tfOpName:"HashTableV2",category:"hash_table",inputs:[],attrs:[{tfName:"shared_name",name:"sharedName",type:"string"},{tfName:"use_node_name_sharing",name:"useNodeNameSharing",type:"bool"},{tfName:"key_dtype",name:"keyDType",type:"dtype"},{tfName:"value_dtype",name:"valueDType",type:"dtype"}]},{tfOpName:"LookupTableImport",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableImportV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableFind",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableFindV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableSize",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"}]},{tfOpName:"LookupTableSizeV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"}]}],Ze=Object.freeze(Object.defineProperty({__proto__:null,json:Ye},Symbol.toStringTag,{value:"Module"}));/**
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
 */const Me=[{tfOpName:"ResizeBilinear",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"size",type:"number[]"}],attrs:[{tfName:"align_corners",name:"alignCorners",type:"bool"},{tfName:"half_pixel_centers",name:"halfPixelCenters",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ResizeNearestNeighbor",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"size",type:"number[]"}],attrs:[{tfName:"align_corners",name:"alignCorners",type:"bool"},{tfName:"half_pixel_centers",name:"halfPixelCenters",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"CropAndResize",category:"image",inputs:[{start:0,name:"image",type:"tensor"},{start:1,name:"boxes",type:"tensor"},{start:2,name:"boxInd",type:"tensor"},{start:3,name:"cropSize",type:"number[]"}],attrs:[{tfName:"method",name:"method",type:"string"},{tfName:"extrapolation_value",name:"extrapolationValue",type:"number"}]},{tfOpName:"ImageProjectiveTransformV3",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"transforms",type:"tensor"},{start:2,name:"outputShape",type:"number[]"},{start:3,name:"fillValue",type:"number"}],attrs:[{tfName:"interpolation",name:"interpolation",type:"string"},{tfName:"fill_mode",name:"fillMode",type:"string"}]}],et=Object.freeze(Object.defineProperty({__proto__:null,json:Me},Symbol.toStringTag,{value:"Module"}));/**
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
 */const tt=[{tfOpName:"Equal",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"NotEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Greater",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"GreaterEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Less",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LessEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalAnd",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalNot",category:"logical",inputs:[{start:0,name:"a",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalOr",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Select",category:"logical",inputs:[{start:0,name:"condition",type:"tensor"},{start:1,name:"a",type:"tensor"},{start:2,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SelectV2",category:"logical",inputs:[{start:0,name:"condition",type:"tensor"},{start:1,name:"a",type:"tensor"},{start:2,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}],at=Object.freeze(Object.defineProperty({__proto__:null,json:tt},Symbol.toStringTag,{value:"Module"}));/**
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
 */const st=[{tfOpName:"_FusedMatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:1e-4},{tfName:"transpose_a",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"transpose_b",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"leakyrelu_alpha",name:"leakyreluAlpha",type:"number",defaultValue:.2},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"transpose_a",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"transpose_b",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BatchMatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"adj_x",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"adj_y",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BatchMatMulV2",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"adj_x",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"adj_y",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Transpose",category:"matrices",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"perm",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Einsum",category:"matrices",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}],attrs:[{tfName:"equation",name:"equation",type:"string"},{tfName:"N",name:"n",type:"number",defaultValue:2},{tfName:"T",name:"dtype",type:"dtype"}]}],rt=Object.freeze(Object.defineProperty({__proto__:null,json:st},Symbol.toStringTag,{value:"Module"}));/**
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
 */const nt=[{tfOpName:"EuclideanNorm",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool",defaultValue:!1}]},{tfOpName:"FusedBatchNorm",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"FusedBatchNormV2",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"FusedBatchNormV3",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"LRN",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"depth_radius",name:"radius",type:"number",defaultValue:5},{tfName:"bias",name:"bias",type:"number",defaultValue:1},{tfName:"alpha",name:"alpha",type:"number",defaultValue:1},{tfName:"beta",name:"beta",type:"number",defaultValue:.5}]},{tfOpName:"Softmax",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"LogSoftmax",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"SparseToDense",category:"normalization",inputs:[{start:0,name:"sparseIndices",type:"tensor"},{start:1,name:"outputShape",type:"number[]"},{start:2,name:"sparseValues",type:"tensor"},{start:3,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",defaultValue:!0,notSupported:!0}]}],it=Object.freeze(Object.defineProperty({__proto__:null,json:nt},Symbol.toStringTag,{value:"Module"}));/**
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
 */const ut=[{tfOpName:"Bincount",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"size",type:"number"},{start:2,name:"weights",type:"tensor"}]},{tfOpName:"DenseBincount",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"size",type:"number"},{start:2,name:"weights",type:"tensor"}],attrs:[{tfName:"binary_output",name:"binaryOutput",type:"bool"}]},{tfOpName:"Max",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Mean",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Min",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Sum",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"All",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Any",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"ArgMax",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"ArgMin",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"Prod",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Cumprod",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}],attrs:[{tfName:"exclusive",name:"exclusive",type:"bool"},{tfName:"reverse",name:"reverse",type:"bool"}]},{tfOpName:"Cumsum",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}],attrs:[{tfName:"exclusive",name:"exclusive",type:"bool"},{tfName:"reverse",name:"reverse",type:"bool"}]}],mt=Object.freeze(Object.defineProperty({__proto__:null,json:ut},Symbol.toStringTag,{value:"Module"}));/**
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
 */const pt=[{tfOpName:"ConcatV2",category:"slice_join",inputs:[{start:0,end:-1,name:"tensors",type:"tensors"},{start:-1,name:"axis",type:"number"}],attrs:[{tfName:"N",name:"n",type:"number",defaultValue:2}]},{tfOpName:"Concat",category:"slice_join",inputs:[{start:1,end:0,name:"tensors",type:"tensors"},{start:0,name:"axis",type:"number"}],attrs:[{tfName:"N",name:"n",type:"number",defaultValue:2}]},{tfOpName:"GatherV2",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"axis",type:"number",defaultValue:0}],attrs:[{tfName:"batch_dims",name:"batchDims",type:"number",defaultValue:0}]},{tfOpName:"Gather",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",notSupported:!0}]},{tfOpName:"Reverse",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"dims",type:"bool[]"}]},{tfOpName:"ReverseV2",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}]},{tfOpName:"Slice",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"begin",type:"number[]"},{start:2,name:"size",type:"number[]"}]},{tfOpName:"StridedSlice",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"begin",type:"number[]"},{start:2,name:"end",type:"number[]"},{start:3,name:"strides",type:"number[]"}],attrs:[{tfName:"begin_mask",name:"beginMask",type:"number",defaultValue:0},{tfName:"end_mask",name:"endMask",type:"number",defaultValue:0},{tfName:"new_axis_mask",name:"newAxisMask",type:"number",defaultValue:0},{tfName:"ellipsis_mask",name:"ellipsisMask",type:"number",defaultValue:0},{tfName:"shrink_axis_mask",name:"shrinkAxisMask",type:"number",defaultValue:0}]},{tfOpName:"Pack",category:"slice_join",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}],attrs:[{tfName:"axis",name:"axis",type:"number",defaultValue:0}]},{tfOpName:"Unpack",category:"slice_join",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"axis",name:"axis",type:"number",defaultValue:0},{tfName:"num",name:"num",type:"number",defaultValue:0,notSupported:!0}]},{tfOpName:"Tile",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"reps",type:"number[]"}]},{tfOpName:"Split",category:"slice_join",inputs:[{start:0,name:"axis",type:"number",defaultValue:0},{start:1,name:"x",type:"tensor"}],attrs:[{tfName:"num_split",name:"numOrSizeSplits",type:"number",defaultValue:1}]},{tfOpName:"SplitV",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"numOrSizeSplits",type:"number[]"},{start:2,name:"axis",type:"number",defaultValue:0}]},{tfOpName:"ScatterNd",category:"slice_join",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"values",type:"tensor"},{start:2,name:"shape",type:"number[]"}]},{tfOpName:"GatherNd",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"}]},{tfOpName:"SparseToDense",category:"slice_join",inputs:[{start:0,name:"sparseIndices",type:"tensor"},{start:1,name:"outputShape",type:"number[]"},{start:2,name:"sparseValues",type:"tensor"},{start:3,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",defaultValue:!1,notSupported:!0}]}],ot=Object.freeze(Object.defineProperty({__proto__:null,json:pt},Symbol.toStringTag,{value:"Module"}));/**
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
 */const lt=[{tfOpName:"SparseFillEmptyRows",category:"sparse",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"values",type:"tensor"},{start:2,name:"denseShape",type:"tensor"},{start:3,name:"defaultValue",type:"tensor"}]},{tfOpName:"SparseReshape",category:"sparse",inputs:[{start:0,name:"inputIndices",type:"tensor"},{start:1,name:"inputShape",type:"tensor"},{start:2,name:"newShape",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SparseSegmentMean",category:"sparse",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"segmentIds",type:"tensor"}]},{tfOpName:"SparseSegmentSum",category:"sparse",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"segmentIds",type:"tensor"}]}],ct=Object.freeze(Object.defineProperty({__proto__:null,json:lt},Symbol.toStringTag,{value:"Module"}));/**
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
 */const yt=[{tfOpName:"FFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"IFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"RFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"fft_length",type:"number",notSupported:!0}]},{tfOpName:"IRFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"fft_length",type:"number",notSupported:!0}]}],dt=Object.freeze(Object.defineProperty({__proto__:null,json:yt},Symbol.toStringTag,{value:"Module"}));/**
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
 */const ht=[{tfOpName:"StringNGrams",category:"string",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"dataSplits",type:"tensor"}],attrs:[{tfName:"separator",name:"separator",type:"string"},{tfName:"ngram_widths",name:"nGramWidths",type:"number[]"},{tfName:"left_pad",name:"leftPad",type:"string"},{tfName:"right_pad",name:"rightPad",type:"string"},{tfName:"pad_width",name:"padWidth",type:"number"},{tfName:"preserve_short_sequences",name:"preserveShortSequences",type:"bool"}],outputs:["ngrams","ngrams_splits"]},{tfOpName:"StringSplit",category:"string",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"delimiter",type:"tensor"}],attrs:[{tfName:"skip_empty",name:"skipEmpty",type:"bool"}],outputs:["indices","values","shape"]},{tfOpName:"StringToHashBucketFast",category:"string",inputs:[{start:0,name:"input",type:"tensor"}],attrs:[{tfName:"num_buckets",name:"numBuckets",type:"number"}]}],ft=Object.freeze(Object.defineProperty({__proto__:null,json:ht},Symbol.toStringTag,{value:"Module"}));/**
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
 */const gt=[{tfOpName:"Cast",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"SrcT",name:"sdtype",type:"dtype",notSupported:!0},{tfName:"DstT",name:"dtype",type:"dtype"}]},{tfOpName:"ExpandDims",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"MirrorPad",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"}],attrs:[{tfName:"mode",name:"mode",type:"string"}]},{tfOpName:"Pad",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"}],attrs:[{tfName:"constant_value",name:"constantValue",type:"number",defaultValue:0}]},{tfOpName:"PadV2",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"},{start:2,name:"constantValue",type:"number",defaultValue:0}]},{tfOpName:"Reshape",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}]},{tfOpName:"Squeeze",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"axis",tfDeprecatedName:"squeeze_dims",name:"axis",type:"number[]"}]},{tfOpName:"SpaceToBatchND",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"blockShape",type:"number[]"},{start:2,name:"paddings",type:"number[]"}]},{tfOpName:"BatchToSpaceND",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"blockShape",type:"number[]"},{start:2,name:"crops",type:"number[]"}]},{tfOpName:"DepthToSpace",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"block_size",name:"blockSize",type:"number"},{tfName:"data_format",name:"dataFormat",type:"string"}]},{tfOpName:"BroadcastTo",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}],attrs:[]},{tfOpName:"BroadcastArgs",category:"transformation",inputs:[{start:0,name:"s0",type:"tensor"},{start:1,name:"s1",type:"tensor"}],attrs:[]}],Nt=Object.freeze(Object.defineProperty({__proto__:null,json:gt},Symbol.toStringTag,{value:"Module"}));/**
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
 */class le{static get Instance(){return this._instance||(this._instance=new this)}constructor(){const e=[Ce,Re,Be,He,Ue,Ge,Qe,Je,Ze,et,at,rt,it,mt,ot,ct,dt,ft,Nt],t=[].concat(...e.map(s=>s.json));this.opMappers=t.reduce((s,n)=>(s[n.tfOpName]=n,s),{})}transformGraph(e,t={}){const s=e.node,n=[],i=[],u=[],m=s.reduce((f,h)=>(f[h.name]=this.mapNode(h),h.op.startsWith("Placeholder")?n.push(f[h.name]):h.op==="Const"?i.push(f[h.name]):(h.input==null||h.input.length===0)&&u.push(f[h.name]),f),{});let p=[];const l=[];let o={},c={};t!=null&&(o=this.mapSignatureEntries(t.inputs),c=this.mapSignatureEntries(t.outputs));const y=Object.keys(m);y.forEach(f=>{const h=m[f];h.inputNames.forEach((b,E)=>{const[g,,U]=I(b),z=m[g];if(z.outputs!=null){const F=z.outputs.indexOf(U);if(F!==-1){const Ee=`${g}:${F}`;h.inputNames[E]=Ee}}h.inputs.push(z),z.children.push(h)})}),Object.keys(c).length===0?y.forEach(f=>{const h=m[f];h.children.length===0&&l.push(h)}):Object.keys(c).forEach(f=>{const[h]=I(f),b=m[h];b!=null&&(b.signatureKey=c[f],l.push(b))}),Object.keys(o).length>0?Object.keys(o).forEach(f=>{const[h]=I(f),b=m[h];b&&(b.signatureKey=o[f],p.push(b))}):p=n;let d={};e.library!=null&&e.library.function!=null&&(d=e.library.function.reduce((f,h)=>(f[h.signature.name]=this.mapFunction(h),f),{}));const N={nodes:m,inputs:p,outputs:l,weights:i,placeholders:n,signature:t,functions:d};return u.length>0&&(N.initNodes=u),N}mapSignatureEntries(e){return Object.keys(e||{}).reduce((t,s)=>(t[e[s].name]=s,t),{})}mapNode(e){const t=Se(e.op)||this.opMappers[e.op]||{};e.attr==null&&(e.attr={});const s={name:e.name,op:e.op,category:t.category,inputNames:(e.input||[]).map(n=>n.startsWith("^")?n.slice(1):n),inputs:[],children:[],inputParams:{},attrParams:{},rawAttrs:e.attr,outputs:t.outputs};return t.inputs!=null&&(s.inputParams=t.inputs.reduce((n,i)=>(n[i.name]={type:i.type,inputIndexStart:i.start,inputIndexEnd:i.end},n),{})),t.attrs!=null&&(s.attrParams=t.attrs.reduce((n,i)=>{const u=i.type;let m;switch(i.type){case"string":m=G(e.attr,i.tfName,i.defaultValue),m===void 0&&i.tfDeprecatedName&&(m=G(e.attr,i.tfDeprecatedName,i.defaultValue));break;case"string[]":m=M(e.attr,i.tfName,i.defaultValue),m===void 0&&i.tfDeprecatedName&&(m=M(e.attr,i.tfDeprecatedName,i.defaultValue));break;case"number":m=Q(e.attr,i.tfName,i.defaultValue||0),m===void 0&&i.tfDeprecatedName&&(m=Q(e.attr,i.tfDeprecatedName,i.defaultValue));break;case"number[]":m=Z(e.attr,i.tfName,i.defaultValue),m===void 0&&i.tfDeprecatedName&&(m=Z(e.attr,i.tfDeprecatedName,i.defaultValue));break;case"bool":m=K(e.attr,i.tfName,i.defaultValue),m===void 0&&i.tfDeprecatedName&&(m=K(e.attr,i.tfDeprecatedName,i.defaultValue));break;case"bool[]":m=te(e.attr,i.tfName,i.defaultValue),m===void 0&&i.tfDeprecatedName&&(m=te(e.attr,i.tfDeprecatedName,i.defaultValue));break;case"shape":m=Y(e.attr,i.tfName,i.defaultValue),m===void 0&&i.tfDeprecatedName&&(m=Y(e.attr,i.tfDeprecatedName,i.defaultValue));break;case"shape[]":m=ee(e.attr,i.tfName,i.defaultValue),m===void 0&&i.tfDeprecatedName&&(m=ee(e.attr,i.tfDeprecatedName,i.defaultValue));break;case"dtype":m=X(e.attr,i.tfName,i.defaultValue),m===void 0&&i.tfDeprecatedName&&(m=X(e.attr,i.tfDeprecatedName,i.defaultValue));break;case"dtype[]":m=J(e.attr,i.tfName,i.defaultValue),m===void 0&&i.tfDeprecatedName&&(m=J(e.attr,i.tfDeprecatedName,i.defaultValue));break;case"func":m=ce(e.attr,i.tfName,i.defaultValue),m===void 0&&i.tfDeprecatedName&&(m=ce(e.attr,i.tfDeprecatedName,i.defaultValue));break;case"tensor":case"tensors":break;default:throw new Error(`Unsupported param type: ${i.type} for op: ${e.op}`)}return n[i.name]={value:m,type:u},n},{})),s}mapFunction(e){const t=e.nodeDef,s=[],n=[];let i={};t!=null&&(i=t.reduce((c,y)=>(c[y.name]=this.mapNode(y),y.op==="Const"&&n.push(c[y.name]),c),{}));const u=[],m=[];e.signature.inputArg.forEach(c=>{const[y]=I(c.name),d={name:y,op:"Placeholder",inputs:[],inputNames:[],category:"graph",inputParams:{},attrParams:{dtype:{value:ne(c.type),type:"dtype"}},children:[]};d.signatureKey=c.name,u.push(d),i[y]=d}),Object.keys(i).forEach(c=>{const y=i[c];y.inputNames.forEach((d,N)=>{const[f,,h]=I(d),b=i[f];if(b.outputs!=null){const E=b.outputs.indexOf(h);if(E!==-1){const g=`${f}:${E}`;y.inputNames[N]=g}}y.inputs.push(b),b.children.push(y)})});const l=e.ret;e.signature.outputArg.forEach(c=>{const[y,d]=I(l[c.name]),N=i[y];N!=null&&(N.defaultOutput=d,m.push(N))});const o=this.mapArgsToSignature(e);return{nodes:i,inputs:u,outputs:m,weights:n,placeholders:s,signature:o}}mapArgsToSignature(e){return{methodName:e.signature.name,inputs:e.signature.inputArg.reduce((t,s)=>(t[s.name]=this.mapArgToTensorInfo(s),t),{}),outputs:e.signature.outputArg.reduce((t,s)=>(t[s.name]=this.mapArgToTensorInfo(s,e.ret),t),{})}}mapArgToTensorInfo(e,t){let s=e.name;return t!=null&&(s=t[s]),{name:s,dtype:e.type}}}function bt(a){const e=se().global;if(typeof e.atob<"u")return e.atob(a);if(typeof Buffer<"u")return new Buffer(a,"base64").toString();throw new Error("Unable to decode base64 in this environment. Missing built-in atob() or Buffer()")}function _e(a,e){const t=Array.isArray(a)?String.fromCharCode.apply(null,a):bt(a);return e?t:t.toLowerCase()}function G(a,e,t,s=!1){const n=a[e];return n!=null?_e(n.s,s):t}function K(a,e,t){const s=a[e];return s?s.b:t}function Q(a,e,t){const s=a[e]||{},n=s.i!=null?s.i:s.f!=null?s.f:t;return typeof n=="number"?n:parseInt(n,10)}function ne(a){switch(typeof a=="string"&&(a=O[a]),a){case O.DT_FLOAT:case O.DT_HALF:return"float32";case O.DT_INT32:case O.DT_INT64:case O.DT_INT8:case O.DT_UINT8:return"int32";case O.DT_BOOL:return"bool";case O.DT_DOUBLE:return"float32";case O.DT_STRING:return"string";default:return null}}function ce(a,e,t){const s=a[e];return s&&s.func?s.func.name:t}function X(a,e,t){const s=a[e];return s&&s.type?ne(s.type):t}function J(a,e,t){const s=a[e];return s&&s.list&&s.list.type?s.list.type.map(n=>ne(n)):t}function Oe(a){if(!a.unknownRank)return a.dim!=null?a.dim.map(e=>typeof e.size=="number"?e.size:parseInt(e.size,10)):[]}function Y(a,e,t){const s=a[e];return s&&s.shape?Oe(s.shape):t}function Z(a,e,t){const s=a[e];return s?((s.list.f&&s.list.f.length?s.list.f:s.list.i)||[]).map(n=>typeof n=="number"?n:parseInt(n,10)):t}function M(a,e,t,s=!1){const n=a[e];return n&&n.list&&n.list.s?n.list.s.map(i=>_e(i,s)):t}function ee(a,e,t){const s=a[e];return s&&s.list&&s.list.shape?s.list.shape.map(n=>Oe(n)):t}function te(a,e,t){const s=a[e];return s&&s.list&&s.list.b?s.list.b:t}/**
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
 */class Tt{constructor(e,t,s){this.node=e,this.tensorMap=t,this.context=s,this.inputs=[],this.attrs={},this.inputs=e.inputNames.map(n=>this.getInput(n)),e.rawAttrs!=null&&(this.attrs=Object.keys(e.rawAttrs).reduce((n,i)=>(n[i]=this.getAttr(i),n),{}))}getInput(e){return S(e,this.tensorMap,this.context)}getAttr(e,t){const s=this.node.rawAttrs[e];if(s.tensor!=null)return S(e,this.tensorMap,this.context);if(s.i!=null||s.f!=null)return Q(this.node.rawAttrs,e,t);if(s.s!=null)return G(this.node.rawAttrs,e,t);if(s.b!=null)return K(this.node.rawAttrs,e,t);if(s.shape!=null)return Y(this.node.rawAttrs,e,t);if(s.type!=null)return X(this.node.rawAttrs,e,t);if(s.list!=null){if(s.list.i!=null||s.list.f!=null)return Z(this.node.rawAttrs,e,t);if(s.list.s!=null)return M(this.node.rawAttrs,e,t);if(s.list.shape!=null)return ee(this.node.rawAttrs,e,t);if(s.list.b!=null)return te(this.node.rawAttrs,e,t);if(s.list.type!=null)return J(this.node.rawAttrs,e,t)}return t}}/**
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
 */const St=(a,e,t,s=T)=>{switch(a.op){case"BiasAdd":case"AddV2":case"Add":return[s.add(r("a",a,e,t),r("b",a,e,t))];case"AddN":return[s.addN(r("tensors",a,e,t))];case"FloorMod":case"Mod":return[s.mod(r("a",a,e,t),r("b",a,e,t))];case"Mul":return[s.mul(r("a",a,e,t),r("b",a,e,t))];case"RealDiv":case"Div":return[s.div(r("a",a,e,t),r("b",a,e,t))];case"DivNoNan":return[s.divNoNan(r("a",a,e,t),r("b",a,e,t))];case"FloorDiv":return[s.floorDiv(r("a",a,e,t),r("b",a,e,t))];case"Sub":return[s.sub(r("a",a,e,t),r("b",a,e,t))];case"Minimum":return[s.minimum(r("a",a,e,t),r("b",a,e,t))];case"Maximum":return[s.maximum(r("a",a,e,t),r("b",a,e,t))];case"Pow":return[s.pow(r("a",a,e,t),r("b",a,e,t))];case"SquaredDifference":return[s.squaredDifference(r("a",a,e,t),r("b",a,e,t))];default:throw TypeError(`Node type ${a.op} is not implemented`)}};/**
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
 */const _t=(a,e,t,s=T)=>{switch(a.op){case"Abs":case"ComplexAbs":return[s.abs(r("x",a,e,t))];case"Acos":return[s.acos(r("x",a,e,t))];case"Acosh":return[s.acosh(r("x",a,e,t))];case"Asin":return[s.asin(r("x",a,e,t))];case"Asinh":return[s.asinh(r("x",a,e,t))];case"Atan":return[s.atan(r("x",a,e,t))];case"Atan2":return[s.atan2(r("x",a,e,t),r("y",a,e,t))];case"Atanh":return[s.atanh(r("x",a,e,t))];case"Ceil":return[s.ceil(r("x",a,e,t))];case"Complex":return[s.complex(r("real",a,e,t),r("imag",a,e,t))];case"Cos":return[s.cos(r("x",a,e,t))];case"Cosh":return[s.cosh(r("x",a,e,t))];case"Elu":return[s.elu(r("x",a,e,t))];case"Erf":return[s.erf(r("x",a,e,t))];case"Exp":return[s.exp(r("x",a,e,t))];case"Expm1":return[s.expm1(r("x",a,e,t))];case"Floor":return[s.floor(r("x",a,e,t))];case"Log":return[s.log(r("x",a,e,t))];case"Log1p":return[s.log1p(r("x",a,e,t))];case"Imag":return[s.imag(r("x",a,e,t))];case"Neg":return[s.neg(r("x",a,e,t))];case"Reciprocal":return[s.reciprocal(r("x",a,e,t))];case"Real":return[s.real(r("x",a,e,t))];case"Relu":return[s.relu(r("x",a,e,t))];case"Round":return[s.round(r("x",a,e,t))];case"Selu":return[s.selu(r("x",a,e,t))];case"Sigmoid":return[s.sigmoid(r("x",a,e,t))];case"Sin":return[s.sin(r("x",a,e,t))];case"Sign":return[s.sign(r("x",a,e,t))];case"Sinh":return[s.sinh(r("x",a,e,t))];case"Softplus":return[s.softplus(r("x",a,e,t))];case"Sqrt":return[s.sqrt(r("x",a,e,t))];case"Square":return[s.square(r("x",a,e,t))];case"Tanh":return[s.tanh(r("x",a,e,t))];case"Tan":return[s.tan(r("x",a,e,t))];case"ClipByValue":return[s.clipByValue(r("x",a,e,t),r("clipValueMin",a,e,t),r("clipValueMax",a,e,t))];case"Relu6":return[s.relu6(r("x",a,e,t))];case"Rsqrt":return[s.rsqrt(S(a.inputNames[0],e,t))];case"Prod":return[s.prod(r("x",a,e,t),r("axes",a,e,t))];case"LeakyRelu":return[s.leakyRelu(r("x",a,e,t),r("alpha",a,e,t))];case"Prelu":return[s.prelu(r("x",a,e,t),r("alpha",a,e,t))];case"IsNan":return[s.isNaN(S(a.inputNames[0],e,t))];default:throw TypeError(`Node type ${a.op} is not implemented`)}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function w(a,e,t=""){if(!(typeof a=="number"||typeof e=="number")){C(a.length===e.length,()=>t+` Shapes ${a} and ${e} must match`);for(let s=0;s<a.length;s++){const n=a[s],i=e[s];C(n<0||i<0||n===i,()=>t+` Shapes ${a} and ${e} must match`)}}}function ye(a){return!(typeof a=="number"||a.some(e=>e<0))}function $(a,e,t){let s=ae(a,t);const n=!ye(s);if(n&&e.length===0)throw new Error(`Tried to calculate elements of an empty list with non-fully-defined elementShape: ${s}`);if(n&&e.forEach(i=>{s=ae(i.shape,s)}),!ye(s))throw new Error(`Non-fully-defined elementShape: ${s}`);return s}function ae(a,e){if(typeof a=="number")return e;if(typeof e=="number")return a;if(a.length!==e.length)throw new Error(`Incompatible ranks during merge: ${a} vs. ${e}`);const t=[];for(let s=0;s<a.length;++s){const n=a[s],i=e[s];if(n>=0&&i>=0&&n!==i)throw new Error(`Incompatible shape during merge: ${a} vs. ${e}`);t[s]=n>=0?n:i}return t}/**
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
 */class Ot{constructor(e,t,s,n,i,u,m){this.name=e,this.dtype=t,this.maxSize=s,this.elementShape=n,this.identicalElementShapes=i,this.dynamicSize=u,this.clearAfterRead=m,this.tensors=[],this.closed_=!1,this.idTensor=V(0),L(this.idTensor)}get id(){return this.idTensor.id}get closed(){return this.closed_}clearAndClose(e){this.tensors.forEach(t=>{(e==null||!e.has(t.tensor.id))&&t.tensor.dispose()}),this.tensors=[],this.closed_=!0,this.idTensor.dispose()}size(){return this.tensors.length}read(e){if(this.closed_)throw new Error(`TensorArray ${this.name} has already been closed.`);if(e<0||e>=this.size())throw new Error(`Tried to read from index ${e}, but array size is: ${this.size()}`);const t=this.tensors[e];if(t.cleared)throw new Error(`TensorArray ${this.name}: Could not read index ${e} twice because it was cleared after a previous read (perhaps try setting clear_after_read = false?).`);return this.clearAfterRead&&(t.cleared=!0),t.read=!0,t.tensor}readMany(e){return e.map(t=>this.read(t))}write(e,t){if(this.closed_)throw new Error(`TensorArray ${this.name} has already been closed.`);if(e<0||!this.dynamicSize&&e>=this.maxSize)throw new Error(`Tried to write to index ${e}, but array is not resizeable and size is: ${this.maxSize}`);const s=this.tensors[e]||{};if(t.dtype!==this.dtype)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${e},
          because the value dtype is ${t.dtype}, but TensorArray dtype is ${this.dtype}.`);if(this.size()===0&&(this.elementShape==null||this.elementShape.length===0)&&(this.elementShape=t.shape),w(this.elementShape,t.shape,`TensorArray ${this.name}: Could not write to TensorArray index ${e}.`),s.read)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${e}, because it has already been read.`);if(s.written)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${e}, because it has already been written.`);s.tensor=t,L(t),s.written=!0,this.tensors[e]=s}writeMany(e,t){if(e.length!==t.length)throw new Error(`TensorArray ${this.name}: could not write multiple tensors,because the index size: ${e.length} is not the same as tensors size: ${t.length}.`);e.forEach((s,n)=>this.write(s,t[n]))}gather(e,t){if(t&&t!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but gather requested dtype ${t}`);if(e)e=e.slice(0,this.size());else{e=[];for(let n=0;n<this.size();n++)e.push(n)}if(e.length===0)return R([],[0].concat(this.elementShape));const s=this.readMany(e);return w(this.elementShape,s[0].shape,"TensorArray shape mismatch: "),j(s,0)}concat(e){if(e&&e!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but concat requested dtype ${e}`);if(this.size()===0)return R([],[0].concat(this.elementShape));const t=[];for(let n=0;n<this.size();n++)t.push(n);const s=this.readMany(t);return w(this.elementShape,s[0].shape,`TensorArray shape mismatch: tensor array shape (${this.elementShape}) vs first tensor shape (${s[0].shape})`),Ne(s,0)}scatter(e,t){if(t.dtype!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but tensor has dtype ${t.dtype}`);if(e.length!==t.shape[0])throw new Error(`Expected len(indices) == tensor.shape[0], but saw: ${e.length} vs. ${t.shape[0]}`);const s=Math.max(...e);if(!this.dynamicSize&&s>=this.maxSize)throw new Error(`Max index must be < array size (${s}  vs. ${this.maxSize})`);this.writeMany(e,q(t,0))}split(e,t){if(t.dtype!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but tensor has dtype ${t.dtype}`);let s=0;const n=e.map(p=>(s+=p,s));if(s!==t.shape[0])throw new Error(`Expected sum of lengths to be equal to
          tensor.shape[0], but sum of lengths is
        ${s}, and tensor's shape is: ${t.shape}`);if(!this.dynamicSize&&e.length!==this.maxSize)throw new Error(`TensorArray's size is not equal to the size of lengths (${this.maxSize} vs. ${e.length}), and the TensorArray is not marked as dynamically resizeable`);const i=s===0?0:t.size/s,u=[];A(()=>{t=k(t,[1,s,i]);for(let p=0;p<e.length;++p){const o=[0,p===0?0:n[p-1],0],c=[1,e[p],i];u[p]=k(be(t,o,c),this.elementShape)}return u});const m=[];for(let p=0;p<e.length;p++)m[p]=p;this.writeMany(m,u)}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class D{constructor(e,t,s,n=-1){this.tensors=e,this.elementShape=t,this.elementDtype=s,e!=null&&e.forEach(i=>{if(s!==i.dtype)throw new Error(`Invalid data types; op elements ${s}, but list elements ${i.dtype}`);w(t,i.shape,"TensorList shape mismatch: "),L(i)}),this.idTensor=V(0),this.maxNumElements=n,L(this.idTensor)}get id(){return this.idTensor.id}copy(){return new D([...this.tensors],this.elementShape,this.elementDtype)}clearAndClose(e){this.tensors.forEach(t=>{(e==null||!e.has(t.id))&&t.dispose()}),this.tensors.length=0,this.idTensor.dispose()}size(){return this.tensors.length}stack(e,t,s=-1){if(t!==this.elementDtype)throw new Error(`Invalid data types; op elements ${t}, but list elements ${this.elementDtype}`);if(s!==-1&&this.tensors.length!==s)throw new Error(`Operation expected a list with ${s} elements but got a list with ${this.tensors.length} elements.`);w(e,this.elementShape,"TensorList shape mismatch: ");const n=$(this.elementShape,this.tensors,e);return A(()=>{const i=this.tensors.map(u=>k(u,n));return j(i,0)})}popBack(e,t){if(t!==this.elementDtype)throw new Error(`Invalid data types; op elements ${t}, but list elements ${this.elementDtype}`);if(this.size()===0)throw new Error("Trying to pop from an empty list.");const s=$(this.elementShape,this.tensors,e),n=this.tensors.pop();return n.kept=!1,w(n.shape,e,"TensorList shape mismatch: "),k(n,s)}pushBack(e){if(e.dtype!==this.elementDtype)throw new Error(`Invalid data types; op elements ${e.dtype}, but list elements ${this.elementDtype}`);if(w(e.shape,this.elementShape,"TensorList shape mismatch: "),this.maxNumElements===this.size())throw new Error("Trying to push element into a full list.");L(e),this.tensors.push(e)}resize(e){if(e<0)throw new Error(`TensorListResize expects size to be non-negative. Got: ${e}`);if(this.maxNumElements!==-1&&e>this.maxNumElements)throw new Error(`TensorListResize input size ${e} is greater maxNumElement ${this.maxNumElements}.`);const t=new D([],this.elementShape,this.elementDtype,this.maxNumElements);t.tensors.length=e;for(let s=0;s<Math.min(this.tensors.length,e);++s)t.tensors[s]=this.tensors[s];return t}getItem(e,t,s){if(s!==this.elementDtype)throw new Error(`Invalid data types; op elements ${s}, but list elements ${this.elementDtype}`);if(e<0||e>this.tensors.length)throw new Error(`Trying to access element ${e} in a list with ${this.tensors.length} elements.`);if(this.tensors[e]==null)throw new Error(`element at index ${e} is null.`);w(this.tensors[e].shape,t,"TensorList shape mismatch: ");const n=$(this.elementShape,this.tensors,t);return k(this.tensors[e],n)}setItem(e,t){if(t.dtype!==this.elementDtype)throw new Error(`Invalid data types; op elements ${t.dtype}, but list elements ${this.elementDtype}`);if(e<0||this.maxNumElements!==-1&&e>=this.maxNumElements)throw new Error(`Trying to set element ${e} in a list with max ${this.maxNumElements} elements.`);w(this.elementShape,t.shape,"TensorList shape mismatch: "),L(t),this.tensors[e]!=null&&(this.tensors[e].kept=!1),this.tensors[e]=t}gather(e,t,s){if(t!==this.elementDtype)throw new Error(`Invalid data types; op elements ${t}, but list elements ${this.elementDtype}`);w(this.elementShape,s,"TensorList shape mismatch: "),e=e.slice(0,this.size());const n=$(this.elementShape,this.tensors,s);return e.length===0?R([],[0].concat(n)):A(()=>{const i=e.map(u=>k(this.tensors[u],n));return j(i,0)})}concat(e,t){if(e&&e!==this.elementDtype)throw new Error(`TensorList dtype is ${this.elementDtype} but concat requested dtype ${e}`);w(this.elementShape,t,"TensorList shape mismatch: ");const s=$(this.elementShape,this.tensors,t);return this.size()===0?R([],[0].concat(s)):A(()=>{const n=this.tensors.map(i=>k(i,s));return Ne(n,0)})}}function wt(a,e,t){const s=a.dtype;if(a.shape.length<1)throw new Error(`Tensor must be at least a vector, but saw shape: ${a.shape}`);if(a.dtype!==t)throw new Error(`Invalid data types; op elements ${a.dtype}, but list elements ${t}`);const n=a.shape.slice(1);w(n,e,"TensorList shape mismatch: ");const i=q(a);return new D(i,e,s)}function Et(a,e,t,s){return new D([],a,e,s)}function It(a,e,t,s){if(e.length!==a.shape[0])throw new Error(`Expected len(indices) == tensor.shape[0], but saw: ${e.length} vs. ${a.shape[0]}`);const n=Math.max(...e);if(s!=null&&s!==-1&&n>=s)throw new Error(`Max index must be < array size (${n}  vs. ${s})`);const i=new D([],t,a.dtype,s),u=q(a,0);return e.forEach((m,p)=>{i.setItem(m,u[p])}),i}function At(a,e,t){let s=0;const n=e.map(o=>(s+=o,s));if(s!==a.shape[0])throw new Error(`Expected sum of lengths to be equal to
          tensor.shape[0], but sum of lengths is
        ${s}, and tensor's shape is: ${a.shape}`);const i=a.shape.slice(1),u=ae(i,t),m=s===0?0:a.size/s,p=A(()=>{const o=[];a=k(a,[1,s,m]);for(let c=0;c<e.length;++c){const d=[0,c===0?0:n[c-1],0],N=[1,e[c],m];o[c]=k(be(a,d,N),u)}return a.dispose(),o}),l=new D([],t,a.dtype,e.length);for(let o=0;o<p.length;o++)l.setItem(o,p[o]);return l}/**
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
 */const vt=async(a,e,t)=>{switch(a.op){case"If":case"StatelessIf":{const s=r("thenBranch",a,e,t),n=r("elseBranch",a,e,t),i=r("cond",a,e,t),u=r("args",a,e,t);return(await i.data())[0]?t.functionMap[s].executeFunctionAsync(u,t.tensorArrayMap,t.tensorListMap):t.functionMap[n].executeFunctionAsync(u,t.tensorArrayMap,t.tensorListMap)}case"While":case"StatelessWhile":{const s=r("body",a,e,t),n=r("cond",a,e,t),i=r("args",a,e,t),u=await t.functionMap[n].executeFunctionAsync(i,t.tensorArrayMap,t.tensorListMap),m=i.map(o=>o.id);let p=await u[0].data();u.forEach(o=>{!o.kept&&m.indexOf(o.id)===-1&&o.dispose()});let l=i;for(;p[0];){const o=l;l=await t.functionMap[s].executeFunctionAsync(l,t.tensorArrayMap,t.tensorListMap);const c=l.map(d=>d.id);o.forEach(d=>{!d.kept&&m.indexOf(d.id)===-1&&c.indexOf(d.id)===-1&&d.dispose()});const y=await t.functionMap[n].executeFunctionAsync(l,t.tensorArrayMap,t.tensorListMap);p=await y[0].data(),y.forEach(d=>{!d.kept&&m.indexOf(d.id)===-1&&c.indexOf(d.id)===-1&&d.dispose()})}return l}case"LoopCond":{const s=r("pred",a,e,t);return[v(s)]}case"Switch":{const s=r("pred",a,e,t);let n=r("data",a,e,t);return n.kept||(n=v(n)),(await s.data())[0]?[void 0,n]:[n,void 0]}case"Merge":{const s=a.inputNames.find(n=>S(n,e,t)!==void 0);if(s){const n=S(s,e,t);return[v(n)]}return}case"Enter":{const s=r("frameName",a,e,t),n=r("tensor",a,e,t);return t.enterFrame(s),[v(n)]}case"Exit":{const s=r("tensor",a,e,t);return t.exitFrame(),[v(s)]}case"NextIteration":{const s=r("tensor",a,e,t);return t.nextIteration(),[v(s)]}case"TensorArrayV3":{const s=r("size",a,e,t),n=r("dtype",a,e,t),i=r("elementShape",a,e,t),u=r("dynamicSize",a,e,t),m=r("clearAfterRead",a,e,t),p=r("identicalElementShapes",a,e,t),l=r("name",a,e,t),o=new Ot(l,n,s,i,p,u,m);return t.addTensorArray(o),[o.idTensor,V(1)]}case"TensorArrayWriteV3":{const s=r("tensorArrayId",a,e,t),n=r("index",a,e,t),i=r("tensor",a,e,t),u=t.getTensorArray(s.id);return u.write(n,i),[u.idTensor]}case"TensorArrayReadV3":{const s=r("tensorArrayId",a,e,t),n=r("index",a,e,t);return[t.getTensorArray(s.id).read(n)]}case"TensorArrayGatherV3":{const s=r("tensorArrayId",a,e,t),n=r("indices",a,e,t),i=r("dtype",a,e,t);return[t.getTensorArray(s.id).gather(n,i)]}case"TensorArrayScatterV3":{const s=r("tensorArrayId",a,e,t),n=r("indices",a,e,t),i=r("tensor",a,e,t),u=t.getTensorArray(s.id);return u.scatter(n,i),[u.idTensor]}case"TensorArrayConcatV3":{const s=r("tensorArrayId",a,e,t),n=t.getTensorArray(s.id),i=r("dtype",a,e,t);return[n.concat(i)]}case"TensorArraySplitV3":{const s=r("tensorArrayId",a,e,t),n=r("tensor",a,e,t),i=r("lengths",a,e,t),u=t.getTensorArray(s.id);return u.split(i,n),[u.idTensor]}case"TensorArraySizeV3":{const s=r("tensorArrayId",a,e,t),n=t.getTensorArray(s.id);return[V(n.size(),"int32")]}case"TensorArrayCloseV3":{const s=r("tensorArrayId",a,e,t),n=t.getTensorArray(s.id);return n.clearAndClose(),[n.idTensor]}case"TensorListSetItem":{const s=r("tensorListId",a,e,t),n=r("index",a,e,t),i=r("tensor",a,e,t),u=t.getTensorList(s.id);return u.setItem(n,i),[u.idTensor]}case"TensorListGetItem":{const s=r("tensorListId",a,e,t),n=r("index",a,e,t),i=r("elementShape",a,e,t),u=r("elementDType",a,e,t);return[t.getTensorList(s.id).getItem(n,i,u)]}case"TensorListScatterV2":case"TensorListScatter":{const s=r("indices",a,e,t),n=r("tensor",a,e,t),i=r("elementShape",a,e,t),u=r("numElements",a,e,t),m=It(n,s,i,u);return t.addTensorList(m),[m.idTensor]}case"TensorListReserve":case"EmptyTensorList":{const s=r("elementShape",a,e,t),n=r("elementDType",a,e,t);let i;a.op==="TensorListReserve"?i="numElements":i="maxNumElements";const u=r(i,a,e,t),m=a.op==="TensorListReserve"?-1:u,p=Et(s,n,u,m);return t.addTensorList(p),[p.idTensor]}case"TensorListGather":{const s=r("tensorListId",a,e,t),n=r("indices",a,e,t),i=r("elementShape",a,e,t),u=r("elementDType",a,e,t);return[t.getTensorList(s.id).gather(n,u,i)]}case"TensorListStack":{const s=r("tensorListId",a,e,t),n=r("elementShape",a,e,t),i=r("elementDType",a,e,t),u=r("numElements",a,e,t);return[t.getTensorList(s.id).stack(n,i,u)]}case"TensorListFromTensor":{const s=r("tensor",a,e,t),n=r("elementShape",a,e,t),i=r("elementDType",a,e,t),u=wt(s,n,i);return t.addTensorList(u),[u.idTensor]}case"TensorListConcat":case"TensorListConcatV2":{const s=r("tensorListId",a,e,t),n=t.getTensorList(s.id),i=r("dtype",a,e,t),u=r("elementShape",a,e,t);return[n.concat(i,u)]}case"TensorListPushBack":{const s=r("tensorListId",a,e,t),n=r("tensor",a,e,t),i=t.getTensorList(s.id);return i.pushBack(n),[i.idTensor]}case"TensorListPopBack":{const s=r("tensorListId",a,e,t),n=r("elementShape",a,e,t),i=r("elementDType",a,e,t);return[t.getTensorList(s.id).popBack(n,i)]}case"TensorListSplit":{const s=r("tensor",a,e,t),n=r("elementShape",a,e,t),i=r("lengths",a,e,t),u=At(s,i,n);return t.addTensorList(u),[u.idTensor]}case"TensorListLength":{const s=r("tensorListId",a,e,t),n=t.getTensorList(s.id);return[V(n.size(),"int32")]}case"TensorListResize":{const s=r("tensorListId",a,e,t),n=r("size",a,e,t),u=t.getTensorList(s.id).resize(n);return t.addTensorList(u),[u.idTensor]}default:throw TypeError(`Node type ${a.op} is not implemented`)}};/**
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
 */function de(a,e,t){const[s,n]=r("fusedOps",a,e,t),i=s==="biasadd",u=!i,m=n==="prelu",p=s==="fusedbatchnorm",l=r("numArgs",a,e,t);if(i){if(m&&l!==2)throw new Error("FusedConv2d and DepthwiseConv2d with BiasAdd and Prelu must have two extra arguments: bias and alpha.");if(!m&&i&&l!==1)throw new Error("FusedConv2d and DepthwiseConv2d with BiasAdd must have one extra argument: bias.")}if(p)throw new Error("FusedConv2d and DepthwiseConv2d with FusedBatchNorm is not supported");const o=r("strides",a,e,t),c=P(a,e,t),y=r("dataFormat",a,e,t).toUpperCase(),d=r("dilations",a,e,t);let[N,f]=r("args",a,e,t);u&&(f=N,N=void 0);const h=r("leakyreluAlpha",a,e,t);return{stride:o,pad:c,dataFormat:y,dilations:d,biasArg:N,preluArg:f,activationFunc:n,leakyreluAlpha:h}}const kt=(a,e,t,s=T)=>{switch(a.op){case"Conv1D":{const n=r("stride",a,e,t),i=r("pad",a,e,t),u=r("dataFormat",a,e,t).toUpperCase(),m=r("dilation",a,e,t);return[s.conv1d(r("x",a,e,t),r("filter",a,e,t),n,i,u,m)]}case"Conv2D":{const n=r("strides",a,e,t),i=P(a,e,t),u=r("dataFormat",a,e,t).toUpperCase(),m=r("dilations",a,e,t);return[s.conv2d(r("x",a,e,t),r("filter",a,e,t),[n[1],n[2]],i,u,[m[1],m[2]])]}case"_FusedConv2D":{const{stride:n,pad:i,dataFormat:u,dilations:m,biasArg:p,preluArg:l,activationFunc:o,leakyreluAlpha:c}=de(a,e,t);return[s.fused.conv2d({x:r("x",a,e,t),filter:r("filter",a,e,t),strides:[n[1],n[2]],pad:i,dataFormat:u,dilations:[m[1],m[2]],bias:p,activation:o,preluActivationWeights:l,leakyreluAlpha:c})]}case"FusedDepthwiseConv2dNative":{const{stride:n,pad:i,dataFormat:u,dilations:m,biasArg:p,preluArg:l,activationFunc:o,leakyreluAlpha:c}=de(a,e,t);return[s.fused.depthwiseConv2d({x:r("x",a,e,t),filter:r("filter",a,e,t),strides:[n[1],n[2]],pad:i,dataFormat:u,dilations:[m[1],m[2]],bias:p,activation:o,preluActivationWeights:l,leakyreluAlpha:c})]}case"Conv2DBackpropInput":case"Conv2dTranspose":{const n=r("outputShape",a,e,t),i=r("strides",a,e,t),u=P(a,e,t);return[s.conv2dTranspose(r("x",a,e,t),r("filter",a,e,t),n,[i[1],i[2]],u)]}case"DepthwiseConv2dNative":case"DepthwiseConv2d":{const n=r("strides",a,e,t),i=P(a,e,t),u=r("dilations",a,e,t),m=r("dataFormat",a,e,t).toUpperCase();return[s.depthwiseConv2d(r("input",a,e,t),r("filter",a,e,t),[n[1],n[2]],i,m,[u[1],u[2]])]}case"Conv3D":{const n=r("strides",a,e,t),i=r("pad",a,e,t),u=r("dataFormat",a,e,t).toUpperCase(),m=r("dilations",a,e,t);return[s.conv3d(r("x",a,e,t),r("filter",a,e,t),[n[1],n[2],n[3]],i,u,[m[1],m[2],m[3]])]}case"AvgPool":{const n=r("strides",a,e,t),i=r("pad",a,e,t),u=r("kernelSize",a,e,t);return[s.avgPool(r("x",a,e,t),[u[1],u[2]],[n[1],n[2]],i)]}case"MaxPool":{const n=r("strides",a,e,t),i=r("pad",a,e,t),u=r("kernelSize",a,e,t);return[s.maxPool(r("x",a,e,t),[u[1],u[2]],[n[1],n[2]],i)]}case"MaxPoolWithArgmax":{const n=r("strides",a,e,t),i=r("pad",a,e,t),u=r("kernelSize",a,e,t),m=r("includeBatchInIndex",a,e,t),{result:p,indexes:l}=s.maxPoolWithArgmax(r("x",a,e,t),[u[1],u[2]],[n[1],n[2]],i,m);return[p,l]}case"AvgPool3D":{const n=r("strides",a,e,t),i=r("pad",a,e,t),u=r("kernelSize",a,e,t);return[s.avgPool3d(r("x",a,e,t),[u[1],u[2],u[3]],[n[1],n[2],n[3]],i)]}case"MaxPool3D":{const n=r("strides",a,e,t),i=r("pad",a,e,t),u=r("kernelSize",a,e,t);return[s.maxPool3d(r("x",a,e,t),[u[1],u[2],u[3]],[n[1],n[2],n[3]],i)]}case"Dilation2D":{const n=r("strides",a,e,t),i=r("pad",a,e,t),u=r("dilations",a,e,t),m=n[1],p=n[2],l=u[1],o=u[2];return[s.dilation2d(r("x",a,e,t),r("filter",a,e,t),[m,p],i,[l,o],"NHWC")]}default:throw TypeError(`Node type ${a.op} is not implemented`)}};/**
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
 */const Lt=(a,e,t,s=T)=>{switch(a.op){case"Fill":{const n=r("shape",a,e,t),i=r("dtype",a,e,t),u=r("value",a,e,t);return[s.fill(n,u,i)]}case"LinSpace":{const n=r("start",a,e,t),i=r("stop",a,e,t),u=r("num",a,e,t);return[s.linspace(n,i,u)]}case"Multinomial":{const n=r("logits",a,e,t),i=r("numSamples",a,e,t),u=r("seed",a,e,t);return[s.multinomial(n,i,u)]}case"OneHot":{const n=r("indices",a,e,t),i=r("depth",a,e,t),u=r("onValue",a,e,t),m=r("offValue",a,e,t),p=r("dtype",a,e,t);return[s.oneHot(n,i,u,m,p)]}case"Ones":return[s.ones(r("shape",a,e,t),r("dtype",a,e,t))];case"OnesLike":return[s.onesLike(r("x",a,e,t))];case"RandomStandardNormal":return[s.randomStandardNormal(r("shape",a,e,t),r("dtype",a,e,t),r("seed",a,e,t))];case"RandomUniform":return[s.randomUniform(r("shape",a,e,t),r("minval",a,e,t),r("maxval",a,e,t),r("dtype",a,e,t))];case"Range":{const n=r("start",a,e,t),i=r("stop",a,e,t),u=r("step",a,e,t);return[s.range(n,i,u,r("dtype",a,e,t))]}case"TruncatedNormal":{const n=r("shape",a,e,t),i=r("mean",a,e,t),u=r("stdDev",a,e,t),m=r("seed",a,e,t);return[s.truncatedNormal(n,i,u,r("dtype",a,e,t),m)]}case"Zeros":return[s.zeros(r("shape",a,e,t),r("dtype",a,e,t))];case"ZerosLike":return[s.zerosLike(r("x",a,e,t))];default:throw TypeError(`Node type ${a.op} is not implemented`)}};/**
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
 */function W(a,e,t){const s=r("boxes",a,e,t),n=r("scores",a,e,t),i=r("maxOutputSize",a,e,t),u=r("iouThreshold",a,e,t),m=r("scoreThreshold",a,e,t),p=r("softNmsSigma",a,e,t);return{boxes:s,scores:n,maxOutputSize:i,iouThreshold:u,scoreThreshold:m,softNmsSigma:p}}const Vt=async(a,e,t,s,n=T)=>{switch(a.op){case"NonMaxSuppressionV5":{const{boxes:i,scores:u,maxOutputSize:m,iouThreshold:p,scoreThreshold:l,softNmsSigma:o}=W(a,e,t),c=await n.image.nonMaxSuppressionWithScoreAsync(i,u,m,p,l,o);return[c.selectedIndices,c.selectedScores]}case"NonMaxSuppressionV4":{const{boxes:i,scores:u,maxOutputSize:m,iouThreshold:p,scoreThreshold:l}=W(a,e,t),o=r("padToMaxOutputSize",a,e,t),c=await n.image.nonMaxSuppressionPaddedAsync(i,u,m,p,l,o);return[c.selectedIndices,c.validOutputs]}case"NonMaxSuppressionV3":case"NonMaxSuppressionV2":{const{boxes:i,scores:u,maxOutputSize:m,iouThreshold:p,scoreThreshold:l}=W(a,e,t);return[await n.image.nonMaxSuppressionAsync(i,u,m,p,l)]}case"Where":{const i=n.cast(r("condition",a,e,t),"bool"),u=[await n.whereAsync(i)];return i.dispose(),u}case"ListDiff":return n.setdiff1dAsync(r("x",a,e,t),r("y",a,e,t));default:throw TypeError(`Node type ${a.op} is not implemented`)}};/**
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
 */const Dt=(a,e,t,s=T)=>{switch(a.op){case"LowerBound":{const n=r("sortedSequence",a,e,t),i=r("values",a,e,t);return[s.lowerBound(n,i)]}case"TopKV2":{const n=r("x",a,e,t),i=r("k",a,e,t),u=r("sorted",a,e,t),m=s.topk(n,i,u);return[m.values,m.indices]}case"UpperBound":{const n=r("sortedSequence",a,e,t),i=r("values",a,e,t);return[s.upperBound(n,i)]}case"Unique":{const n=r("x",a,e,t),i=s.unique(n);return[i.values,i.indices]}case"UniqueV2":{const n=r("x",a,e,t),i=r("axis",a,e,t),u=s.unique(n,i);return[u.values,u.indices]}default:throw TypeError(`Node type ${a.op} is not implemented`)}};/**
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
 */const zt=(a,e,t,s=T)=>{switch(a.op){case"Const":return e[a.name];case"PlaceholderWithDefault":const n=r("default",a,e,t);return[S(a.name,e,t)||n];case"Placeholder":return[S(a.name,e,t)];case"Identity":case"StopGradient":case"FakeQuantWithMinMaxVars":{const o=r("x",a,e,t);return[v(o)]}case"IdentityN":return r("x",a,e,t).map(o=>v(o));case"Snapshot":const i=r("x",a,e,t);return[v(i)];case"Shape":return[s.tensor1d(r("x",a,e,t).shape,"int32")];case"ShapeN":return r("x",a,e,t).map(o=>s.tensor1d(o.shape));case"Size":return[s.scalar(r("x",a,e,t).size,"int32")];case"Rank":return[s.scalar(r("x",a,e,t).rank,"int32")];case"NoOp":return[s.scalar(1)];case"Print":const u=r("x",a,e,t),m=r("data",a,e,t),p=r("message",a,e,t),l=r("summarize",a,e,t);console.warn("The graph has a tf.print() operation,usually used for debugging, which slows down performance."),console.log(p);for(let o=0;o<m.length;o++)console.log(Array.prototype.slice.call(m[o].dataSync()).slice(0,l));return[u];default:throw TypeError(`Node type ${a.op} is not implemented`)}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Ft{constructor(e,t){this.keyDType=e,this.valueDType=t,this.handle=V(0),this.tensorMap=new Map,L(this.handle)}get id(){return this.handle.id}clearAndClose(){this.tensorMap.forEach(e=>e.dispose()),this.tensorMap.clear(),this.handle.dispose()}size(){return this.tensorMap.size}tensorSize(){return V(this.size(),"int32")}async import(e,t){this.checkKeyAndValueTensor(e,t);const s=await e.data();return this.tensorMap.forEach(n=>n.dispose()),this.tensorMap.clear(),A(()=>{const n=q(t),i=s.length,u=n.length;C(i===u,()=>`The number of elements doesn't match, keys has ${i} elements, the values has ${u} elements.`);for(let m=0;m<i;m++){const p=s[m],l=n[m];L(l),this.tensorMap.set(p,l)}return this.handle})}async find(e,t){this.checkKeyAndValueTensor(e,t);const s=await e.data();return A(()=>{const n=[];for(let i=0;i<s.length;i++){const u=s[i],m=this.findWithDefault(u,t);n.push(m)}return j(n)})}findWithDefault(e,t){const s=this.tensorMap.get(e);return s??t}checkKeyAndValueTensor(e,t){if(e.dtype!==this.keyDType)throw new Error(`Expect key dtype ${this.keyDType}, but got ${e.dtype}`);if(t.dtype!==this.valueDType)throw new Error(`Expect value dtype ${this.valueDType}, but got ${t.dtype}`)}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const $t=async(a,e,t,s)=>{switch(a.op){case"HashTable":case"HashTableV2":{const n=r("keyDType",a,e,t),i=r("valueDType",a,e,t),u=new Ft(n,i);return s.addHashTable(a.name,u),[u.handle]}case"LookupTableImport":case"LookupTableImportV2":{const n=r("tableHandle",a,e,t,s),i=r("keys",a,e,t),u=r("values",a,e,t);return[await s.getHashTableById(n.id).import(i,u)]}case"LookupTableFind":case"LookupTableFindV2":{const n=r("tableHandle",a,e,t,s),i=r("keys",a,e,t),u=r("defaultValue",a,e,t);return[await s.getHashTableById(n.id).find(i,u)]}case"LookupTableSize":case"LookupTableSizeV2":{const n=r("tableHandle",a,e,t,s);return[s.getHashTableById(n.id).tensorSize()]}default:throw TypeError(`Node type ${a.op} is not implemented`)}};/**
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
 */const Ct=(a,e,t,s=T)=>{switch(a.op){case"ResizeBilinear":{const n=r("images",a,e,t),i=r("size",a,e,t),u=r("alignCorners",a,e,t),m=r("halfPixelCenters",a,e,t);return[s.image.resizeBilinear(n,[i[0],i[1]],u,m)]}case"ResizeNearestNeighbor":{const n=r("images",a,e,t),i=r("size",a,e,t),u=r("alignCorners",a,e,t),m=r("halfPixelCenters",a,e,t);return[s.image.resizeNearestNeighbor(n,[i[0],i[1]],u,m)]}case"CropAndResize":{const n=r("image",a,e,t),i=r("boxes",a,e,t),u=r("boxInd",a,e,t),m=r("cropSize",a,e,t),p=r("method",a,e,t),l=r("extrapolationValue",a,e,t);return[s.image.cropAndResize(n,i,u,m,p,l)]}case"ImageProjectiveTransformV3":{const n=r("images",a,e,t),i=r("transforms",a,e,t),u=r("outputShape",a,e,t),m=r("fillValue",a,e,t),p=r("interpolation",a,e,t),l=r("fillMode",a,e,t);return[s.image.transform(n,i,p.toLowerCase(),l.toLowerCase(),m,u)]}default:throw TypeError(`Node type ${a.op} is not implemented`)}};/**
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
 */const Pt=(a,e,t,s=T)=>{switch(a.op){case"Equal":return[s.equal(r("a",a,e,t),r("b",a,e,t))];case"NotEqual":return[s.notEqual(r("a",a,e,t),r("b",a,e,t))];case"Greater":return[s.greater(r("a",a,e,t),r("b",a,e,t))];case"GreaterEqual":return[s.greaterEqual(r("a",a,e,t),r("b",a,e,t))];case"Less":return[s.less(r("a",a,e,t),r("b",a,e,t))];case"LessEqual":return[s.lessEqual(r("a",a,e,t),r("b",a,e,t))];case"LogicalAnd":return[s.logicalAnd(r("a",a,e,t),r("b",a,e,t))];case"LogicalNot":return[s.logicalNot(r("a",a,e,t))];case"LogicalOr":return[s.logicalOr(r("a",a,e,t),r("b",a,e,t))];case"Select":case"SelectV2":return[s.where(r("condition",a,e,t),r("a",a,e,t),r("b",a,e,t))];default:throw TypeError(`Node type ${a.op} is not implemented`)}};/**
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
 */const Rt=(a,e,t,s=T)=>{switch(a.op){case"BatchMatMul":case"BatchMatMulV2":case"MatMul":return[s.matMul(r("a",a,e,t),r("b",a,e,t),r("transposeA",a,e,t),r("transposeB",a,e,t))];case"Einsum":return[s.einsum(r("equation",a,e,t),...r("tensors",a,e,t))];case"Transpose":return[s.transpose(r("x",a,e,t),r("perm",a,e,t))];case"_FusedMatMul":const[n,i]=r("fusedOps",a,e,t),u=n==="biasadd",m=i==="prelu",p=r("numArgs",a,e,t),l=r("leakyreluAlpha",a,e,t);if(u){if(m&&p!==2)throw new Error("Fused MatMul with BiasAdd and Prelu must have two extra arguments: bias and alpha.");if(!m&&p!==1)throw new Error("Fused MatMul with BiasAdd must have one extra argument: bias.")}const[o,c]=r("args",a,e,t);return[s.fused.matMul({a:r("a",a,e,t),b:r("b",a,e,t),transposeA:r("transposeA",a,e,t),transposeB:r("transposeB",a,e,t),bias:o,activation:i,preluActivationWeights:c,leakyreluAlpha:l})];default:throw TypeError(`Node type ${a.op} is not implemented`)}};/**
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
 */const jt=(a,e,t,s=T)=>{switch(a.op){case"EuclideanNorm":return[s.euclideanNorm(r("x",a,e,t),r("axis",a,e,t),r("keepDims",a,e,t))];case"FusedBatchNorm":case"FusedBatchNormV2":return[s.batchNorm(r("x",a,e,t),r("mean",a,e,t),r("variance",a,e,t),r("offset",a,e,t),r("scale",a,e,t),r("epsilon",a,e,t))];case"FusedBatchNormV3":return[s.batchNorm(r("x",a,e,t),r("mean",a,e,t),r("variance",a,e,t),r("offset",a,e,t),r("scale",a,e,t),r("epsilon",a,e,t))];case"LRN":return[s.localResponseNormalization(r("x",a,e,t),r("radius",a,e,t),r("bias",a,e,t),r("alpha",a,e,t),r("beta",a,e,t))];case"Softmax":return[s.softmax(r("x",a,e,t))];case"LogSoftmax":return[s.logSoftmax(r("x",a,e,t))];case"SparseToDense":return[s.sparseToDense(r("sparseIndices",a,e,t),r("outputShape",a,e,t),r("sparseValues",a,e,t),r("defaultValue",a,e,t))];default:throw TypeError(`Node type ${a.op} is not implemented`)}};/**
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
 */const Bt=(a,e,t,s=T)=>{switch(a.op){case"Max":{const m=r("axis",a,e,t),p=r("keepDims",a,e,t);return[s.max(r("x",a,e,t),m,p)]}case"Mean":{const m=r("axis",a,e,t),p=r("keepDims",a,e,t);return[s.mean(r("x",a,e,t),m,p)]}case"Min":{const m=r("axis",a,e,t),p=r("keepDims",a,e,t);return[s.min(r("x",a,e,t),m,p)]}case"Sum":{const m=r("axis",a,e,t),p=r("keepDims",a,e,t);return[s.sum(r("x",a,e,t),m,p)]}case"All":{const m=r("axis",a,e,t),p=r("keepDims",a,e,t);return[s.all(r("x",a,e,t),m,p)]}case"Any":{const m=r("axis",a,e,t),p=r("keepDims",a,e,t);return[s.any(r("x",a,e,t),m,p)]}case"ArgMax":{const m=r("axis",a,e,t);return[s.argMax(r("x",a,e,t),m)]}case"ArgMin":{const m=r("axis",a,e,t);return[s.argMin(r("x",a,e,t),m)]}case"Prod":{const m=r("axis",a,e,t),p=r("keepDims",a,e,t);return[s.prod(r("x",a,e,t),m,p)]}case"Cumprod":{const m=r("axis",a,e,t),p=r("exclusive",a,e,t),l=r("reverse",a,e,t);return[s.cumprod(r("x",a,e,t),m,p,l)]}case"Cumsum":{const m=r("axis",a,e,t),p=r("exclusive",a,e,t),l=r("reverse",a,e,t);return[s.cumsum(r("x",a,e,t),m,p,l)]}case"Bincount":const n=r("x",a,e,t),i=r("weights",a,e,t),u=r("size",a,e,t);return[s.bincount(n,i,u)];case"DenseBincount":{const m=r("x",a,e,t),p=r("weights",a,e,t),l=r("size",a,e,t),o=r("binaryOutput",a,e,t);return[s.denseBincount(m,p,l,o)]}default:throw TypeError(`Node type ${a.op} is not implemented`)}};/**
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
 */const xt=(a,e,t,s=T)=>{switch(a.op){case"ConcatV2":case"Concat":{const n=r("n",a,e,t),i=r("axis",a,e,t);let u=r("tensors",a,e,t);return u=u.slice(0,n),[s.concat(u,i)]}case"Gather":{const n=r("x",a,e,t),i=r("indices",a,e,t);return[s.gather(n,s.cast(i,"int32"),0)]}case"GatherV2":{const n=r("axis",a,e,t),i=r("batchDims",a,e,t),u=r("x",a,e,t),m=r("indices",a,e,t);return[s.gather(u,s.cast(m,"int32"),n,i)]}case"Reverse":{const n=r("dims",a,e,t),i=[];for(let m=0;m<n.length;m++)n[m]&&i.push(m);const u=r("x",a,e,t);return[s.reverse(u,i)]}case"ReverseV2":{const n=r("axis",a,e,t),i=r("x",a,e,t);return[s.reverse(i,n)]}case"Slice":{const n=r("begin",a,e,t),i=r("size",a,e,t);return[s.slice(r("x",a,e,t),n,i)]}case"StridedSlice":{const n=r("begin",a,e,t),i=r("end",a,e,t),u=r("strides",a,e,t),m=r("beginMask",a,e,t),p=r("endMask",a,e,t),l=r("ellipsisMask",a,e,t),o=r("newAxisMask",a,e,t),c=r("shrinkAxisMask",a,e,t),y=r("x",a,e,t);return[s.stridedSlice(y,n,i,u,m,p,l,o,c)]}case"Pack":return A(()=>{const n=r("axis",a,e,t),i=r("tensors",a,e,t),u=i[0].shape,m=s.squeeze(i[0]).shape,p=i.map(l=>{const o=ue(l.shape,u);if(!o&&!ue(s.squeeze(l).shape,m))throw new Error("the input tensors shape does not match");return o?l:s.reshape(l,u)});return[s.stack(p,n)]});case"Unpack":{const n=r("axis",a,e,t),i=r("tensor",a,e,t);return s.unstack(i,n)}case"Tile":{const n=r("reps",a,e,t);return[s.tile(r("x",a,e,t),n)]}case"Split":case"SplitV":{const n=r("axis",a,e,t),i=r("numOrSizeSplits",a,e,t),u=r("x",a,e,t);return s.split(u,i,n)}case"ScatterNd":{const n=r("indices",a,e,t),i=r("values",a,e,t),u=r("shape",a,e,t);return[s.scatterND(n,i,u)]}case"GatherNd":{const n=r("x",a,e,t),i=r("indices",a,e,t);return[s.gatherND(n,i)]}case"SparseToDense":{const n=r("sparseIndices",a,e,t),i=r("outputShape",a,e,t),u=r("sparseValues",a,e,t),m=r("defaultValue",a,e,t);return[s.sparseToDense(n,u,i,u.dtype===m.dtype?m:s.cast(m,u.dtype))]}default:throw TypeError(`Node type ${a.op} is not implemented`)}};/**
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
 */const Ht=(a,e,t,s=T)=>{switch(a.op){case"SparseFillEmptyRows":{const{outputIndices:n,outputValues:i,emptyRowIndicator:u,reverseIndexMap:m}=s.sparse.sparseFillEmptyRows(r("indices",a,e,t),r("values",a,e,t),r("denseShape",a,e,t),r("defaultValue",a,e,t));return[n,i,u,m]}case"SparseReshape":{const{outputIndices:n,outputShape:i}=s.sparse.sparseReshape(r("inputIndices",a,e,t),r("inputShape",a,e,t),r("newShape",a,e,t));return[n,i]}case"SparseSegmentMean":return[s.sparse.sparseSegmentMean(r("data",a,e,t),r("indices",a,e,t),r("segmentIds",a,e,t))];case"SparseSegmentSum":return[s.sparse.sparseSegmentSum(r("data",a,e,t),r("indices",a,e,t),r("segmentIds",a,e,t))];default:throw TypeError(`Node type ${a.op} is not implemented`)}};/**
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
 */const qt=(a,e,t,s=T)=>{switch(a.op){case"FFT":return[s.fft(r("x",a,e,t))];case"IFFT":return[s.ifft(r("x",a,e,t))];case"RFFT":return[s.rfft(r("x",a,e,t))];case"IRFFT":return[s.irfft(r("x",a,e,t))];default:throw TypeError(`Node type ${a.op} is not implemented`)}};/**
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
 */const Ut=(a,e,t,s=T)=>{switch(a.op){case"StringNGrams":{const{nGrams:n,nGramsSplits:i}=s.string.stringNGrams(r("data",a,e,t),r("dataSplits",a,e,t),r("separator",a,e,t),r("nGramWidths",a,e,t),r("leftPad",a,e,t),r("rightPad",a,e,t),r("padWidth",a,e,t),r("preserveShortSequences",a,e,t));return[n,i]}case"StringSplit":{const{indices:n,values:i,shape:u}=s.string.stringSplit(r("input",a,e,t),r("delimiter",a,e,t),r("skipEmpty",a,e,t));return[n,i,u]}case"StringToHashBucketFast":return[s.string.stringToHashBucketFast(r("input",a,e,t),r("numBuckets",a,e,t))];default:throw TypeError(`Node type ${a.op} is not implemented`)}};/**
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
 */const Wt=(a,e,t,s=T)=>{switch(a.op){case"Cast":return[s.cast(r("x",a,e,t),r("dtype",a,e,t))];case"ExpandDims":{const n=r("axis",a,e,t);return[s.expandDims(r("x",a,e,t),n)]}case"Squeeze":{const n=r("axis",a,e,t);return[s.squeeze(r("x",a,e,t),n)]}case"Reshape":return[s.reshape(r("x",a,e,t),r("shape",a,e,t))];case"MirrorPad":return[s.mirrorPad(r("x",a,e,t),r("padding",a,e,t),r("mode",a,e,t))];case"PadV2":case"Pad":return[s.pad(r("x",a,e,t),r("padding",a,e,t),r("constantValue",a,e,t))];case"SpaceToBatchND":{const n=r("blockShape",a,e,t),i=r("paddings",a,e,t);return[s.spaceToBatchND(r("x",a,e,t),n,i)]}case"BatchToSpaceND":{const n=r("blockShape",a,e,t),i=r("crops",a,e,t);return[s.batchToSpaceND(r("x",a,e,t),n,i)]}case"DepthToSpace":{const n=r("blockSize",a,e,t),i=r("dataFormat",a,e,t).toUpperCase();return[s.depthToSpace(r("x",a,e,t),n,i)]}case"BroadcastTo":return[s.broadcastTo(r("x",a,e,t),r("shape",a,e,t))];case"BroadcastArgs":return[s.broadcastArgs(r("s0",a,e,t),r("s1",a,e,t))];default:throw TypeError(`Node type ${a.op} is not implemented`)}};/**
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
 */function he(a,e,t,s,n=A){const i=((u,m,p)=>{switch(u.category){case"arithmetic":return n(()=>St(u,m,p));case"basic_math":return n(()=>_t(u,m,p));case"control":return vt(u,m,p);case"convolution":return n(()=>kt(u,m,p));case"creation":return n(()=>Lt(u,m,p));case"dynamic":return Vt(u,m,p);case"evaluation":return n(()=>Dt(u,m,p));case"image":return n(()=>Ct(u,m,p));case"graph":return n(()=>zt(u,m,p));case"logical":return n(()=>Pt(u,m,p));case"matrices":return n(()=>Rt(u,m,p));case"normalization":return n(()=>jt(u,m,p));case"reduction":return n(()=>Bt(u,m,p));case"slice_join":return n(()=>xt(u,m,p));case"sparse":return n(()=>Ht(u,m,p));case"spectral":return n(()=>qt(u,m,p));case"string":return n(()=>Ut(u,m,p));case"transformation":return n(()=>Wt(u,m,p));case"hash_table":return $t(u,m,p,s);case"custom":const l=Se(u.op);if(l&&l.customExecutor)return l.customExecutor(new Tt(u,m,p));throw TypeError(`Custom op ${u.op} is not registered.`);default:throw TypeError(`Unknown op '${u.op}'. File an issue at https://github.com/tensorflow/tfjs/issues so we can add it, or register a custom execution with tf.registerOp()`)}})(a,e,t);return B(i)?i.then(u=>[].concat(u)):[].concat(i)}class fe{constructor(e={},t={},s={},n={}){this.weightMap=e,this.tensorArrayMap=t,this.tensorListMap=s,this.functionMap=n,this.rootContext={id:0,frameName:"",iterationId:0},this.contexts=[this.rootContext],this.lastId=0,this.generateCurrentContextIds()}newFrame(e,t){return{id:e,frameName:t,iterationId:0}}set currentContext(e){this.contexts!==e&&(this.contexts=e,this.generateCurrentContextIds())}get currentContext(){return this.contexts}get currentContextId(){return this._currentContextIds[0]}get currentContextIds(){return this._currentContextIds}generateCurrentContextIds(){const e=[];for(let t=0;t<this.contexts.length-1;t++){const s=this.contexts.slice(0,this.contexts.length-t);e.push(this.contextIdforContexts(s))}e.push(""),this._currentContextIds=e}contextIdforContexts(e){return e?e.map(t=>t.id===0&&t.iterationId===0?"":`${t.frameName}-${t.iterationId}`).join("/"):""}enterFrame(e){this.contexts&&(this.lastId++,this.contexts=this.contexts.slice(),this.contexts.push(this.newFrame(this.lastId,e)),this._currentContextIds.unshift(this.contextIdforContexts(this.contexts)))}exitFrame(){if(this.contexts&&this.contexts.length>1)this.contexts=this.contexts.slice(),this.contexts.splice(-1),this.currentContextIds.shift();else throw new Error("Cannot exit frame, the context is empty")}nextIteration(){if(this.contexts&&this.contexts.length>0){this.contexts=this.contexts.slice(),this.lastId++;const e=Object.assign({},this.contexts[this.contexts.length-1]);e.iterationId+=1,e.id=this.lastId,this.contexts.splice(-1,1,e),this._currentContextIds.splice(0,1,this.contextIdforContexts(this.contexts))}else throw new Error("Cannot increase frame iteration, the context is empty")}getWeight(e){return this.weightMap[e]}addTensorArray(e){this.tensorArrayMap[e.id]=e}getTensorArray(e){return this.tensorArrayMap[e]}addTensorList(e){this.tensorListMap[e.id]=e}getTensorList(e){return this.tensorListMap[e]}dispose(e){for(const t in this.tensorArrayMap)this.tensorArrayMap[t].clearAndClose(e);for(const t in this.tensorListMap)this.tensorListMap[t].clearAndClose(e)}}/**
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
 */function ge(a,e,t,s){const n=new Set,i=[];let u=null,m=null;const p=new Set,l=Object.keys(a).map(y=>_(y)[0]);let o=[];s!=null&&(o=s.map(y=>_(y.name)[0]));const c=[...e];for(;c.length>0;){const y=c.pop();if((we(y)||Jt(y)||Yt(y))&&u==null&&(u=y,m=u.children.map(d=>d.name).filter(d=>n.has(d))),n.add(y.name),t[y.name]==null&&l.indexOf(y.name)===-1&&o.indexOf(y.name)===-1){if(y.inputs.length===0){i.push(y.name);continue}y.inputs.forEach(d=>{p.has(d.name)||(p.add(d.name),c.push(d))})}}return{inputs:a,outputs:e,usedNodes:n,missingInputs:i,dynamicNode:u,syncInputs:m}}function Gt(a,e,t){const{usedNodes:s,inputs:n}=t,i=[],u=Object.keys(n).map(o=>_(o)[0]).map(o=>a.nodes[o]),m=a.initNodes;u.forEach(o=>{s.has(o.name)&&i.push(o)}),a.weights.forEach(o=>{s.has(o.name)&&i.push(o)}),m!=null&&m.forEach(o=>{s.has(o.name)&&i.push(o)});const p=new Set,l=[];for(;i.length>0;){const o=i.pop();p.add(o.name),e[o.name]||l.push(o),o.children.forEach(c=>{!p.has(c.name)&&s.has(c.name)&&c.inputs.every(y=>p.has(y.name))&&i.push(c)})}return l}const Kt=["Switch","Merge","Enter","Exit","NextIteration","StatelessIf","StatelessWhile","if","While"],Qt=["NonMaxSuppressionV2","NonMaxSuppressionV3","NonMaxSuppressionV5","Where"],Xt=["HashTable","HashTableV2","LookupTableImport","LookupTableImportV2","LookupTableFind","LookupTableFindV2","LookupTableSize","LookupTableSizeV2"];function we(a){return Kt.indexOf(a.op)>=0}function Jt(a){return Qt.indexOf(a.op)>=0}function Yt(a){return Xt.indexOf(a.op)>=0}/**
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
 */class H{constructor(e,t){this.graph=e,this.parent=t,this.compiledMap=new Map,this._weightMap={},this.SEPERATOR=",",this._functions={},this._functionExecutorMap={},this.intermediateTensors={},this.keepTensorForDebug=!1,this._outputs=e.outputs,this._inputs=e.inputs,this._initNodes=e.initNodes,this._signature=e.signature,this._functions=e.functions,e.functions!=null&&Object.keys(e.functions).forEach(s=>{this._functionExecutorMap[s]=new H(e.functions[s],this)})}get weightIds(){return this.parent?this.parent.weightIds:this._weightIds}get functionExecutorMap(){return this.parent?this.parent.functionExecutorMap:this._functionExecutorMap}get weightMap(){return this.parent?this.parent.weightMap:this._weightMap}set weightMap(e){const t=Object.keys(e).map(s=>e[s].map(n=>n.id));this._weightIds=[].concat(...t),this._weightMap=e}set resourceManager(e){this._resourceManager=e}get inputs(){return this._inputs.map(e=>({name:e.name,shape:e.attrParams.shape?e.attrParams.shape.value:void 0,dtype:e.attrParams.dtype?e.attrParams.dtype.value:void 0}))}get outputs(){return this._outputs.map(e=>({name:e.name,shape:e.attrParams.shape?e.attrParams.shape.value:void 0,dtype:e.attrParams.dtype?e.attrParams.dtype.value:void 0}))}get inputNodes(){return this._inputs.map(e=>e.signatureKey||e.name)}get outputNodes(){return this._outputs.map(e=>{const t=e.signatureKey||e.name;return e.defaultOutput?`${t}:${e.defaultOutput}`:t})}get functions(){return Object.keys(this._functions).reduce((e,t)=>(e[t]=this._functions[t].signature,e),{})}getCompilationKey(e,t){const s=e.map(i=>i.name).sort(),n=t.map(i=>i.name).sort();return s.join(this.SEPERATOR)+"--"+n.join(this.SEPERATOR)}compile(e,t){const s=ge(e,t,this.weightMap,this._initNodes),{missingInputs:n,dynamicNode:i,syncInputs:u}=s;if(i!=null)throw new Error(`This execution contains the node '${i.name}', which has the dynamic op '${i.op}'. Please use model.executeAsync() instead. Alternatively, to avoid the dynamic ops, specify the inputs [${u}]`);if(n.length>0){const m=t.map(l=>l.name),p=Object.keys(e);throw new Error(`Cannot compute the outputs [${m}] from the provided inputs [${p}]. Missing the following inputs: [${n}]`)}return Gt(this.graph,this.weightMap,s)}execute(e,t){e=this.mapInputs(e);const s=Object.keys(e).sort();this.checkInputs(e),this.checkInputShapeAndType(e),t=this.mapOutputs(t),this.checkOutputs(t);const n=s.map(c=>this.graph.nodes[_(c)[0]]),i=t.map(c=>_(c)[0]);let u=i.map(c=>this.graph.nodes[c]);this.resetIntermediateTensors(),u.length===0&&(u=this._outputs);const m=this.getCompilationKey(n,u);let p=this.compiledMap.get(m);p==null&&(p=this.compile(e,u),this.compiledMap.set(m,p));const l={},o={};return A(()=>{const c=new fe(this.weightMap,l,o,this.functionExecutorMap),y=Object.assign({},this.weightMap);Object.keys(e).forEach(f=>{const[h,b]=_(f),E=[];E[b]=e[f],y[h]=E});const d=this.getFrozenTensorIds(y),N={};for(let f=0;f<p.length;f++){const h=p[f];if(!y[h.name]){const b=he(h,y,c,this._resourceManager);if(B(b))throw new Error(`The execution of the op '${h.op}' returned a promise. Please use model.executeAsync() instead.`);y[h.name]=b,this.checkTensorForDisposal(h.name,h,y,c,d,i,N)}}return this.parent==null&&c.dispose(d),t.map(f=>S(f,y,c))})}getFrozenTensorIds(e){const t=[].concat.apply([],Object.keys(e).map(s=>e[s]).map(s=>s.map(n=>n.id)));return new Set(t)}checkTensorForDisposal(e,t,s,n,i,u,m){t.category==="control"||u.indexOf(e)!==-1||(s[e].forEach(p=>{p!=null&&(m[p.id]=(m[p.id]||0)+t.children.length)}),t.inputs.forEach(p=>{if(p.category!=="control"){const l=Fe(p.name,s,n);l!=null&&l.forEach(o=>{if(o&&!o.kept&&!i.has(o.id)){const c=m[o.id];if(c===1){if(!this.keepTensorForDebug)o.dispose();else{const[y,d]=I(t.name,n);this.intermediateTensors[y]?this.intermediateTensors[y][d]=o:(this.intermediateTensors[y]=[],this.intermediateTensors[y][d]=o)}delete m[o.id]}else c!=null&&m[o.id]--}})}}))}async executeAsync(e,t){return this._executeAsync(e,t)}disposeIntermediateTensors(){this.intermediateTensors&&(Object.keys(this.intermediateTensors).forEach(e=>this.intermediateTensors[e].forEach(t=>t.dispose())),this.disposeTensorsMap())}disposeTensorsMap(){this.tensorsMap&&Object.keys(this.tensorsMap).forEach(e=>{this.tensorsMap[e].forEach(s=>{s&&!s.kept&&!s.isDisposed&&!this.keepIds.has(s.id)&&s.dispose()})})}getIntermediateTensors(){return this.tensorsMap}resetIntermediateTensors(){for(const e in this.intermediateTensors)this.intermediateTensors[e].forEach(t=>t.dispose()),delete this.intermediateTensors[e]}async _executeAsync(e,t,s=!1,n={},i={}){s||(e=this.mapInputs(e),this.checkInputs(e),this.checkInputShapeAndType(e),t=this.mapOutputs(t),this.checkOutputs(t));try{this.keepTensorForDebug=se().getBool("KEEP_INTERMEDIATE_TENSORS")}catch(o){console.warn(o.message)}this.resetIntermediateTensors();const u=new fe(this.weightMap,n,i,this.functionExecutorMap);this.tensorsMap=await this.executeWithControlFlow(e,u,t,s);const m=t.map(o=>S(o,this.tensorsMap,u)),p=m.map(o=>o.id),l=Object.keys(e).map(o=>e[o].id);return this.keepIds=new Set([...p,...l,...this.weightIds]),this.keepTensorForDebug||this.disposeTensorsMap(),this.parent==null&&u.dispose(this.keepIds),m}async executeFunctionAsync(e,t,s){const n=e.reduce((i,u,m)=>(i[this.inputs[m].name]=u,i),{});return this._executeAsync(n,this.outputNodes,!0,t,s)}async executeWithControlFlow(e,t,s,n){const i=Object.keys(e),u=i.map(g=>this.graph.nodes[_(g)[0]]),m=s.map(g=>_(g)[0]);let p=m.map(g=>this.graph.nodes[g]);p.length===0&&(p=this._outputs);const{usedNodes:l,missingInputs:o,dynamicNode:c,syncInputs:y}=ge(e,p,this.weightMap,this._initNodes),d=[...u,...this.graph.weights,...this._initNodes||[]].map(g=>({node:g,contexts:t.currentContext})),N=Object.assign({},this.weightMap);Object.keys(e).forEach(g=>{const[U,z]=_(g),F=[];F[z]=e[g],N[U]=F});const f={},h=this.getFrozenTensorIds(N),b={};for(;d.length>0;){const g=this.processStack(u,d,t,N,b,h,m,f,l);await Promise.all(g)}c==null&&!n&&console.warn("This model execution did not contain any nodes with control flow or dynamic output shapes. You can use model.execute() instead.");const E=p.filter(g=>!we(g)&&!S(g.name,N,t)).map(g=>g.name);if(E.length>0){let g="";throw c!=null&&(g=`Alternatively, to avoid the dynamic ops, use model.execute() and specify the inputs [${y}]`),new Error(`Cannot compute the outputs [${E}] from the provided inputs [${i}]. Consider providing the following inputs: [${o}]. ${g}`)}return N}processStack(e,t,s,n,i,u,m,p,l){const o=[];for(;t.length>0;){const c=t.pop();s.currentContext=c.contexts;let y="";if(c.node.op==="Enter"&&r("isConstant",c.node,n,s)&&([y]=I(c.node.name,s)),n[c.node.name]==null){const d=he(c.node,n,s,this._resourceManager);y||([y]=I(c.node.name,s));const N=s.currentContext;B(d)?o.push(d.then(f=>(n[y]=f,s.currentContext=N,this.checkTensorForDisposal(y,c.node,n,s,u,m,p),this.processChildNodes(c.node,t,s,n,i,l),f))):(n[y]=d,this.checkTensorForDisposal(y,c.node,n,s,u,m,p),this.processChildNodes(c.node,t,s,n,i,l))}else this.processChildNodes(c.node,t,s,n,i,l)}return o}processChildNodes(e,t,s,n,i,u){e.children.forEach(m=>{const[p]=I(m.name,s);i[p]||!u.has(m.name)||(m.op==="Merge"?m.inputNames.some(l=>!!S(l,n,s))&&(i[p]=!0,t.push({contexts:s.currentContext,node:m})):m.inputNames.every(l=>!!S(l,n,s))&&(i[p]=!0,t.push({contexts:s.currentContext,node:m})))})}dispose(){Object.keys(this.weightMap).forEach(e=>this.weightMap[e].forEach(t=>t.dispose()))}checkInputShapeAndType(e){Object.keys(e).forEach(t=>{const s=e[t],[n]=_(t),i=this.graph.nodes[n];if(i.attrParams.shape&&i.attrParams.shape.value){const u=i.attrParams.shape.value,m=u.length===s.shape.length&&s.shape.every((p,l)=>u[l]===-1||u[l]===p);C(m,()=>`The shape of dict['${i.name}'] provided in model.execute(dict) must be [${u}], but was [${s.shape}]`)}i.attrParams.dtype&&i.attrParams.dtype.value&&C(s.dtype===i.attrParams.dtype.value,()=>`The dtype of dict['${i.name}'] provided in model.execute(dict) must be ${i.attrParams.dtype.value}, but was ${s.dtype}`)})}mapInputs(e){const t={};for(const s in e)if(this._signature!=null&&this._signature.inputs!=null&&this._signature.inputs[s]!=null){const n=this._signature.inputs[s];t[n.name]=e[s]}else t[s]=e[s];return t}checkInputs(e){const t=Object.keys(e).filter(s=>{const[n]=_(s);return this.graph.nodes[n]==null});if(t.length>0)throw new Error(`The dict provided in model.execute(dict) has keys: [${t}] that are not part of graph`)}mapOutputs(e){return e.map(t=>this._signature!=null&&this._signature.outputs!=null&&this._signature.outputs[t]!=null?this._signature.outputs[t].name:t,{})}checkOutputs(e){e.forEach(t=>{const[s]=_(t);if(!this.graph.nodes[s])throw new Error(`The output '${t}' is not found in the graph`)})}}class Zt{constructor(e={},t={}){this.hashTableNameToHandle=e,this.hashTableMap=t}addHashTable(e,t){this.hashTableNameToHandle[e]=t.handle,this.hashTableMap[t.id]=t}getHashTableHandleByName(e){return this.hashTableNameToHandle[e]}getHashTableById(e){return this.hashTableMap[e]}dispose(){for(const e in this.hashTableMap)this.hashTableMap[e].clearAndClose(),delete this.hashTableMap[e];for(const e in this.hashTableNameToHandle)this.hashTableNameToHandle[e].dispose(),delete this.hashTableNameToHandle[e]}}/**
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
 */const Mt="?tfjs-format=file",ea="model.json";class ie{constructor(e,t={},s=Te){this.modelUrl=e,this.loadOptions=t,this.version="n/a",this.io=s,t==null&&(this.loadOptions={}),this.resourceManager=new Zt}get modelVersion(){return this.version}get inputNodes(){return this.executor.inputNodes}get outputNodes(){return this.executor.outputNodes}get inputs(){return this.executor.inputs}get outputs(){return this.executor.outputs}get weights(){return this.executor.weightMap}get metadata(){return this.artifacts.userDefinedMetadata}get modelSignature(){return this.signature}get modelStructuredOutputKeys(){return this.structuredOutputKeys}findIOHandler(){const e=this.modelUrl;if(e.load!=null)this.handler=e;else if(this.loadOptions.requestInit!=null)this.handler=this.io.browserHTTPRequest(e,this.loadOptions);else{const t=this.io.getLoadHandlers(e,this.loadOptions);if(t.length===0)t.push(this.io.browserHTTPRequest(e,this.loadOptions));else if(t.length>1)throw new Error(`Found more than one (${t.length}) load handlers for URL '${[e]}'`);this.handler=t[0]}}load(){if(this.findIOHandler(),this.handler.load==null)throw new Error("Cannot proceed with model loading because the IOHandler provided does not have the `load` method implemented.");const e=this.handler.load();return B(e)?e.then(t=>this.loadSync(t)):this.loadSync(e)}loadSync(e){this.artifacts=e;const t=this.artifacts.modelTopology;let s=this.artifacts.signature;if(this.artifacts.userDefinedMetadata!=null){const i=this.artifacts.userDefinedMetadata;i.signature!=null&&(s=i.signature),i.structuredOutputKeys!=null&&(this.structuredOutputKeys=i.structuredOutputKeys)}this.signature=s,this.version=`${t.versions.producer}.${t.versions.minConsumer}`;const n=this.io.decodeWeights(this.artifacts.weightData,this.artifacts.weightSpecs);if(this.executor=new H(le.Instance.transformGraph(t,this.signature)),this.executor.weightMap=this.convertTensorMapToTensorsMap(n),this.executor.resourceManager=this.resourceManager,e.modelInitializer!=null&&e.modelInitializer.node!=null){const i=le.Instance.transformGraph(e.modelInitializer);this.initializer=new H(i),this.initializer.weightMap=this.executor.weightMap,this.initializer.resourceManager=this.resourceManager,this.initializer.executeAsync({},[])}return!0}async save(e,t){if(typeof e=="string"){const s=this.io.getSaveHandlers(e);if(s.length===0)throw new Error(`Cannot find any save handlers for URL '${e}'`);if(s.length>1)throw new Error(`Found more than one (${s.length}) save handlers for URL '${e}'`);e=s[0]}if(e.save==null)throw new Error("GraphModel.save() cannot proceed because the IOHandler provided does not have the `save` attribute defined.");return e.save(this.artifacts)}predict(e,t){const s=this.execute(e,this.outputNodes);if(this.structuredOutputKeys){const n=s instanceof me?[s]:s,i={};return n.forEach((u,m)=>i[this.structuredOutputKeys[m]]=u),i}return s}normalizeInputs(e){if(!(e instanceof me)&&!Array.isArray(e))return e;if(e=Array.isArray(e)?e:[e],e.length!==this.inputNodes.length)throw new Error(`Input tensor count mismatch,the graph model has ${this.inputNodes.length} placeholders, while there are ${e.length} input tensors.`);return this.inputNodes.reduce((t,s,n)=>(t[s]=e[n],t),{})}normalizeOutputs(e){return e=e||this.outputNodes,Array.isArray(e)?e:[e]}execute(e,t){e=this.normalizeInputs(e),t=this.normalizeOutputs(t);const s=this.executor.execute(e,t);return s.length>1?s:s[0]}async executeAsync(e,t){e=this.normalizeInputs(e),t=this.normalizeOutputs(t);const s=await this.executor.executeAsync(e,t);return s.length>1?s:s[0]}getIntermediateTensors(){return this.executor.getIntermediateTensors()}disposeIntermediateTensors(){this.executor.disposeIntermediateTensors()}convertTensorMapToTensorsMap(e){return Object.keys(e).reduce((t,s)=>(t[s]=[e[s]],t),{})}dispose(){this.executor.dispose(),this.initializer&&this.initializer.dispose(),this.resourceManager.dispose()}}async function ta(a,e={},t=Te){if(a==null)throw new Error("modelUrl in loadGraphModel() cannot be null. Please provide a url or an IOHandler that loads the model");e==null&&(e={}),e.fromTFHub&&typeof a=="string"&&(a=sa(a));const s=new ie(a,e,t);return await s.load(),s}function aa(a){if(a==null)throw new Error("modelUrl in loadGraphModelSync() cannot be null. Please provide model artifacts or an IOHandler that loads the model");let e;if(a instanceof Array){const[s,n]=a;if(!s)throw new Error("modelJSON must be the first element of the array");if(!n||!(n instanceof ArrayBuffer))throw new Error("An ArrayBuffer of weights must be the second element of the array");if(!("modelTopology"in s))throw new Error("Model JSON is missing 'modelTopology'");if(!("weightsManifest"in s))throw new Error("Model JSON is missing 'weightsManifest'");const i=ke(s.weightsManifest),u=Le(s,i,n);e=pe(u)}else if("load"in a)e=a;else if("modelTopology"in a&&"weightSpecs"in a&&"weightData"in a)e=pe(a);else throw new Error("Unknown model format");const t=new ie(e);return t.load(),t}function sa(a){return a.endsWith("/")||(a=a+"/"),`${a}${ea}${Mt}`}/** @license See the LICENSE file. */const ra="3.21.0";/**
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
 */const na=Object.freeze(Object.defineProperty({__proto__:null,GraphModel:ie,deregisterOp:ze,loadGraphModel:ta,loadGraphModelSync:aa,registerOp:De,version_converter:ra},Symbol.toStringTag,{value:"Module"})),ma=Ie(na);export{ma as r};
