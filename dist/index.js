module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t){e.exports=require("jsonpath-plus")},function(e,t){e.exports=require("lodash")},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("errno")},function(e,t,n){function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const o=n(1),i={jsENOENT:n(3).code.ENOENT.code,jsonPathNotFound:"JsonPathNotFound",errorAndErrorsMutuallyExclusive:"ErrorErrorsMutuallyExclusive",validation:"Validation"};class s{static create(e){const t=e.code,n=e.message,r=e.path,a=e.cause,c=t||e.type||i.validation,u={message:n};return i.validation===c||i.errorAndErrorsMutuallyExclusive===c?o.merge(u,e):(r&&o.merge(u,{params:{path:r}}),a&&o.merge(u,a)),new s(c,u)}constructor(e,t={}){Object.assign(this,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({type:e},t))}}e.exports={ApplicationError:s,ErrorType:i}},function(e,t,n){function r(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(e,t)}(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o,i=!0,s=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return i=e.done,e},e:function(e){s=!0,o=e},f:function(){try{i||null==r.return||r.return()}finally{if(s)throw o}}}}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t,n,r,a,o,i){try{var s=e[o](i),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,a)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function s(e){o(i,r,a,s,c,"next",e)}function c(e){o(i,r,a,s,c,"throw",e)}s(void 0)}))}}const s=n(1),c=n(6),u=n(2),l=n(7),p=n(8),f=n(0).JSONPath,m=n(3).custom.createError,d=n(9),h=n(10),y=h.getValidatorFactory,x=h.compileValidate,v=n(16),g=n(4),b=g.ApplicationError,O=g.ErrorType,w=n(19),E=w.createValidationResponse,P=w.dereferenceJsonSchema,j=Symbol("internal"),S=["yaml","yml"],T=m(O.jsonPathNotFound);function M(e){const t=v.getImplementation(e);e=t.prepare(e);let n=t.getJsonPathsToExamples().reduce((t,n)=>t.concat(function(e,t){return f({json:e,path:t,resultType:d.path})}(e,n)),[]);return function({impl:e},t,n){const r=k(),a={valid:!0,statistics:r,errors:[]},o=R(n);let i;try{i=e.buildValidationMap(t)}catch(e){if(!(e instanceof b))throw e;return a.valid=!1,a.errors.push(e),a}return Object.keys(i).forEach(e=>{!function({openapiSpec:e,createValidator:t,pathSchema:n,validationMap:r,statistics:a,validationResult:o}){const i=o.errors;r[n].forEach(r=>{const s=_(r,e),c=B(n,e,!0),u=D({createValidator:t,schema:c,example:s,statistics:a}).map(e=>(e.examplePath=f.toPointer(f.toPathArray(r)),e));u.length&&(o.valid=!1,i.splice(i.length-1,0,...u))})}({openapiSpec:n,createValidator:o,pathSchema:e,validationMap:i,statistics:r,validationResult:a})}),a}({impl:t},n,e)}function F(){return(F=i((function*(e){let t=null;try{t=yield N(e)}catch(e){return E({errors:[b.create(e)]})}return M(t)}))).apply(this,arguments)}function q(){return(q=i((function*(e,t,{cwdToMappingFile:n}={}){let a=0;let o=[];var i,p=r(l.sync(t,{nonull:!0}));try{for(p.s();!(i=p.n()).done;){let t=i.value,r=null,s=null;try{r=JSON.parse(c.readFileSync(t,"utf-8")),s=yield N(e),s=v.getImplementation(s).prepare(s)}catch(e){o.push(E({errors:[b.create(e)]}));continue}a++,o.push(J(e=>I(s,r,e,{cwdToMappingFile:n,dirPathMapExternalExamples:u.dirname(t)}).map(e=>Object.assign(e,{mapFilePath:t}))))}}catch(e){p.e(e)}finally{p.f()}return s.merge(o.reduce((e,t)=>e?W(e,t):t,null),{statistics:{matchingFilePathsMapping:a}})}))).apply(this,arguments)}function A(){return(A=i((function*(e,t,n){let r=null,a=null,o=null;try{r=JSON.parse(c.readFileSync(n,"utf-8")),o=yield N(e),o=v.getImplementation(o).prepare(o),a=B(t,o)}catch(e){return E({errors:[b.create(e)]})}return J(e=>D({createValidator:R(o),schema:a,example:r,statistics:e,filePathExample:n}))}))).apply(this,arguments)}function N(e){return $.apply(this,arguments)}function $(){return($=i((function*(e){const t=V(e)?p.parse(c.readFileSync(e,"utf-8")):JSON.parse(c.readFileSync(e,"utf-8"));return yield P(e,t)}))).apply(this,arguments)}function V(e){const t=e.split(".").pop();return S.includes(t)}function J(e){const t=k(),n=e(t);return E({errors:n,statistics:t})}function I(e,t,n,{cwdToMappingFile:r=!1,dirPathMapExternalExamples:a}){return s(t).entries().flatMap(([t,o])=>{let i=null;try{i=B(t,e)}catch(e){return b.create(e)}return s([o]).flatten().flatMap(t=>{let o=null;try{const e=r?u.join(a,t):t;o=JSON.parse(c.readFileSync(e,"utf-8"))}catch(e){return b.create(e)}return D({createValidator:R(e),schema:i,example:o,statistics:n,filePathExample:t})}).value()}).value()}function W(e,t){return E({errors:e.errors.concat(t.errors),statistics:s.entries(e.statistics).reduce((e,[n,a])=>{if("schemasWithExamples"===n){var o,i=r(t.statistics[j].schemasWithExamples.values());try{for(i.s();!(o=i.n()).done;){let t=o.value;e[j].schemasWithExamples.add(t)}}catch(e){i.e(e)}finally{i.f()}return e}return e[n]=a+t.statistics[n],e},k())})}function k(){const e={[j]:{schemasWithExamples:new Set},examplesTotal:0,examplesWithoutSchema:0};return Object.defineProperty(e,"schemasWithExamples",{enumerable:!0,get:()=>e[j].schemasWithExamples.size}),e}function _(e,t){return f({json:t,path:e,flatten:!0,wrap:!1,resultType:d.value})}function D({createValidator:e,schema:t,example:n,statistics:r,filePathExample:a}){const o=[];if(r.examplesTotal++,!t)return r.examplesWithoutSchema++,o;r[j].schemasWithExamples.add(t);const i=x(e(),t);return i(n)?o:o.concat(...i.errors.map(b.create)).map(e=>a?(e.exampleFilePath=a,e):e)}function R(e){return y(e,{allErrors:!0,nullable:!0})}function B(e,t,n=!1){const r=_(e,t);if(!n&&!r)throw new T(`Path to schema can't be found: '${e}'`,{params:{path:e}});return r}e.exports={default:M,validateFile:function(e){return F.apply(this,arguments)},validateExample:function(e,t,n){return A.apply(this,arguments)},validateExamplesByMap:function(e,t){return q.apply(this,arguments)}}},function(e,t){e.exports=require("fs")},function(e,t){e.exports=require("glob")},function(e,t){e.exports=require("yaml")},function(e,t){e.exports={parent:"parent",parentProperty:"parentProperty",path:"path",pointer:"pointer",value:"value"}},function(e,t,n){const r=n(0).JSONPath,a=n(11),o=n(12),i=n(13),s="https://www.npmjs.com/package/openapi-examples-validator/defs.json";function c(e){r({path:"$..$ref",json:e,callback(e,t,n){e.startsWith("#")&&(n.parent[n.parentProperty]=`${s}${e}`)}})}e.exports={getValidatorFactory:function(e,t){const n=function(e){const t={$id:s};return r({path:"$..$ref",json:e,callback(n){if(!n.startsWith("#"))return;const r=n.substring(1),o=a.get(e,r);a.set(t,r,o)}}),t}(e);return()=>{const e=new o(t);return e.addSchema(n),function(e){e.addFormat("int32",{type:"number",validate:i.int32}),e.addFormat("int64",{type:"string",validate:i.int64}),e.addFormat("float",{type:"number",validate:i.float}),e.addFormat("double",{type:"number",validate:i.double}),e.addFormat("byte",{type:"string",validate:i.byte})}(e),e}},compileValidate:function(e,t){const n=function(e,t){const n=Object.assign({},e);return n.$id=t,n}(t,"https://www.npmjs.com/package/openapi-examples-validator/schema.json");return c(n),e.compile(n)}}},function(e,t){e.exports=require("json-pointer")},function(e,t){e.exports=require("ajv")},function(e,t,n){const r=n(14);e.exports={int32:function(e){return Number.isInteger(+e)&&r.int32.max.greaterThanOrEqualTo(e)&&r.int32.min.lessThanOrEqualTo(e)},int64:function(e){return Number.isInteger(+e)&&r.int64.max.greaterThanOrEqualTo(e)&&r.int64.min.lessThanOrEqualTo(e)},float:function(e){return r.float.max.greaterThanOrEqualTo(e)&&r.float.min.lessThanOrEqualTo(e)},double:function(e){return r.double.max.greaterThanOrEqualTo(e)&&r.double.min.lessThanOrEqualTo(e)},byte:function(e){const t=e.length;if(!t||t%4!=0||/[^A-Z0-9+\/=]/i.test(e))return!1;const n=e.indexOf("=");return-1===n||n===t-1||n===t-2&&"="===e[t-1]}}},function(e,t,n){const r=n(15),a={byte:{min:new r("-128"),max:new r("127")},int32:{min:new r("-2147483648"),max:new r("2147483647")},int64:{min:new r("-9223372036854775808"),max:new r("9223372036854775807")},float:{min:new r(2).pow(128).negated(),max:new r(2).pow(128)},double:{min:new r(2).pow(1024).negated(),max:new r(2).pow(1024)}};e.exports=a},function(e,t){e.exports=require("decimal.js")},function(e,t,n){const r=n(17),a=n(18),o=/^3\./;e.exports={getImplementation:function(e){if("string"==typeof e.swagger)return r;if(e.openapi&&e.openapi.match(o))return a;return null}}},function(e,t,n){const r=n(0).JSONPath;e.exports={buildValidationMap:function(e){return e.reduce((e,t)=>{const n=function(e){const t=r.toPathArray(e).slice(),n=t.lastIndexOf("examples");return t.splice(n,t.length-n,"schema"),r.toPathString(t)}(t);return e[n]=(e[n]||new Set).add(t),e},{})},getJsonPathsToExamples:function(){return["$..examples.application/json"]},prepare:function(e){return e}}},function(e,t,n){const r=n(0).JSONPath,a=n(4),o=a.ApplicationError,i=a.ErrorType,s="single",c="multi";e.exports={buildValidationMap:function(e){const t=new Map;return e.reduce((e,n)=>{const a=function(e){const t=r.toPathArray(e).slice(),n=t.lastIndexOf("example"),a=n>-1?s:c,o=a===s?n:t.lastIndexOf("examples");return t.splice(o,t.length-o,"schema"),{exampleType:a,pathSchemaAsArray:t}}(n),u=a.pathSchemaAsArray,l=a.exampleType,p=r.toPathString(u),f=t.get(p);return f&&f!==l&&function(e){const t=e.slice(0,e.length-1);throw o.create({type:i.errorAndErrorsMutuallyExclusive,message:'Properties "error" and "errors" are mutually exclusive',params:{pathContext:r.toPointer(t)}})}(u),t.set(p,l),e[p]=(e[p]||new Set).add(n),e},{})},getJsonPathsToExamples:function(){return["$..responses..content.application/json.example","$..responses..content.application/json.examples..value","$..parameters..example","$..parameters..examples..value","$..requestBody.content.application/json.example","$..requestBody.content.application/json.examples..value"]},prepare:function(e){return e}}},function(e,t,n){function r(e,t,n,r,a,o,i){try{var s=e[o](i),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,a)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(a,o){var i=e.apply(t,n);function s(e){r(i,a,o,s,c,"next",e)}function c(e){r(i,a,o,s,c,"throw",e)}s(void 0)}))}}const o=n(2),i=n(20);function s(){return(s=a((function*(e,t){const n=process.cwd();process.chdir(o.dirname(e));const r=yield i.dereference(t);return process.chdir(n),r}))).apply(this,arguments)}e.exports={createValidationResponse:function({errors:e,statistics:t={}}){return{valid:!e.length,statistics:t,errors:e}},dereferenceJsonSchema:function(e,t){return s.apply(this,arguments)}}},function(e,t){e.exports=require("json-schema-ref-parser")}]);
//# sourceMappingURL=index.js.map