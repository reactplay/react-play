import{b as I}from"./@tensorflow_tfjs-core@4.2.0-e61b4742.js";/**
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
 */const R=I();R.registerFlag("KEEP_INTERMEDIATE_TENSORS",()=>!1,_=>{_&&console.warn("Keep intermediate tensors is ON. This will print the values of all intermediate tensors during model inference. Not all models support this mode. For details, check e2e/benchmarks/ model_config.js. This significantly impacts performance.")});/**
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
 */var T;(function(_){_[_.DT_INVALID=0]="DT_INVALID",_[_.DT_FLOAT=1]="DT_FLOAT",_[_.DT_DOUBLE=2]="DT_DOUBLE",_[_.DT_INT32=3]="DT_INT32",_[_.DT_UINT8=4]="DT_UINT8",_[_.DT_INT16=5]="DT_INT16",_[_.DT_INT8=6]="DT_INT8",_[_.DT_STRING=7]="DT_STRING",_[_.DT_COMPLEX64=8]="DT_COMPLEX64",_[_.DT_INT64=9]="DT_INT64",_[_.DT_BOOL=10]="DT_BOOL",_[_.DT_QINT8=11]="DT_QINT8",_[_.DT_QUINT8=12]="DT_QUINT8",_[_.DT_QINT32=13]="DT_QINT32",_[_.DT_BFLOAT16=14]="DT_BFLOAT16",_[_.DT_QINT16=15]="DT_QINT16",_[_.DT_QUINT16=16]="DT_QUINT16",_[_.DT_UINT16=17]="DT_UINT16",_[_.DT_COMPLEX128=18]="DT_COMPLEX128",_[_.DT_HALF=19]="DT_HALF",_[_.DT_RESOURCE=20]="DT_RESOURCE",_[_.DT_VARIANT=21]="DT_VARIANT",_[_.DT_UINT32=22]="DT_UINT32",_[_.DT_UINT64=23]="DT_UINT64",_[_.DT_FLOAT_REF=101]="DT_FLOAT_REF",_[_.DT_DOUBLE_REF=102]="DT_DOUBLE_REF",_[_.DT_INT32_REF=103]="DT_INT32_REF",_[_.DT_UINT8_REF=104]="DT_UINT8_REF",_[_.DT_INT16_REF=105]="DT_INT16_REF",_[_.DT_INT8_REF=106]="DT_INT8_REF",_[_.DT_STRING_REF=107]="DT_STRING_REF",_[_.DT_COMPLEX64_REF=108]="DT_COMPLEX64_REF",_[_.DT_INT64_REF=109]="DT_INT64_REF",_[_.DT_BOOL_REF=110]="DT_BOOL_REF",_[_.DT_QINT8_REF=111]="DT_QINT8_REF",_[_.DT_QUINT8_REF=112]="DT_QUINT8_REF",_[_.DT_QINT32_REF=113]="DT_QINT32_REF",_[_.DT_BFLOAT16_REF=114]="DT_BFLOAT16_REF",_[_.DT_QINT16_REF=115]="DT_QINT16_REF",_[_.DT_QUINT16_REF=116]="DT_QUINT16_REF",_[_.DT_UINT16_REF=117]="DT_UINT16_REF",_[_.DT_COMPLEX128_REF=118]="DT_COMPLEX128_REF",_[_.DT_HALF_REF=119]="DT_HALF_REF",_[_.DT_RESOURCE_REF=120]="DT_RESOURCE_REF",_[_.DT_VARIANT_REF=121]="DT_VARIANT_REF",_[_.DT_UINT32_REF=122]="DT_UINT32_REF",_[_.DT_UINT64_REF=123]="DT_UINT64_REF"})(T||(T={}));var N;(function(_){(function(E){E[E.LEGACY=0]="LEGACY",E[E.V1=1]="V1",E[E.V2=2]="V2"})(_.CheckpointFormatVersion||(_.CheckpointFormatVersion={}))})(N||(N={}));
