/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/auth0-js/dist/auth0.min.esm.js":
/*!*****************************************************!*\
  !*** ./node_modules/auth0-js/dist/auth0.min.esm.js ***!
  \*****************************************************/
/*! exports provided: default, Authentication, Management, WebAuth, version */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Authentication", function() { return Authentication; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Management", function() { return Management; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebAuth", function() { return WebAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
/**
 * auth0-js v9.10.2
 * Author: Auth0
 * Date: 2019-04-15
 * License: MIT
 */

var commonjsGlobal="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function createCommonjsModule(fn,module){return fn(module={exports:{}},module.exports),module.exports}var urlJoin=createCommonjsModule(function(module){var context,definition;context=commonjsGlobal,definition=function(){return function(){return function(strArray){var resultArray=[];if(strArray[0].match(/^[^\/:]+:\/*$/)&&strArray.length>1){var first=strArray.shift();strArray[0]=first+strArray[0]}strArray[0].match(/^file:\/\/\//)?strArray[0]=strArray[0].replace(/^([^\/:]+):\/*/,"$1:///"):strArray[0]=strArray[0].replace(/^([^\/:]+):\/*/,"$1://");for(var i=0;i<strArray.length;i++){var component=strArray[i];if("string"!=typeof component)throw new TypeError("Url must be a string. Received "+component);""!==component&&(i>0&&(component=component.replace(/^[\/]+/,"")),component=i<strArray.length-1?component.replace(/[\/]+$/,""):component.replace(/[\/]+$/,"/"),resultArray.push(component))}var str=resultArray.join("/"),parts=(str=str.replace(/\/(\?|&|#[^!])/g,"$1")).split("?");return str=parts.shift()+(parts.length>0?"?":"")+parts.join("&")}("object"==typeof arguments[0]?arguments[0]:[].slice.call(arguments))}},module.exports?module.exports=definition():context.urljoin=definition()}),utils=createCommonjsModule(function(module,exports){var has=Object.prototype.hasOwnProperty,hexTable=function(){for(var array=[],i=0;i<256;++i)array.push("%"+((i<16?"0":"")+i.toString(16)).toUpperCase());return array}();exports.arrayToObject=function(source,options){for(var obj=options&&options.plainObjects?Object.create(null):{},i=0;i<source.length;++i)void 0!==source[i]&&(obj[i]=source[i]);return obj},exports.merge=function(target,source,options){if(!source)return target;if("object"!=typeof source){if(Array.isArray(target))target.push(source);else{if("object"!=typeof target)return[target,source];(options.plainObjects||options.allowPrototypes||!has.call(Object.prototype,source))&&(target[source]=!0)}return target}if("object"!=typeof target)return[target].concat(source);var mergeTarget=target;return Array.isArray(target)&&!Array.isArray(source)&&(mergeTarget=exports.arrayToObject(target,options)),Array.isArray(target)&&Array.isArray(source)?(source.forEach(function(item,i){has.call(target,i)?target[i]&&"object"==typeof target[i]?target[i]=exports.merge(target[i],item,options):target.push(item):target[i]=item}),target):Object.keys(source).reduce(function(acc,key){var value=source[key];return Object.prototype.hasOwnProperty.call(acc,key)?acc[key]=exports.merge(acc[key],value,options):acc[key]=value,acc},mergeTarget)},exports.decode=function(str){try{return decodeURIComponent(str.replace(/\+/g," "))}catch(e){return str}},exports.encode=function(str){if(0===str.length)return str;for(var string="string"==typeof str?str:String(str),out="",i=0;i<string.length;++i){var c=string.charCodeAt(i);45===c||46===c||95===c||126===c||c>=48&&c<=57||c>=65&&c<=90||c>=97&&c<=122?out+=string.charAt(i):c<128?out+=hexTable[c]:c<2048?out+=hexTable[192|c>>6]+hexTable[128|63&c]:c<55296||c>=57344?out+=hexTable[224|c>>12]+hexTable[128|c>>6&63]+hexTable[128|63&c]:(i+=1,c=65536+((1023&c)<<10|1023&string.charCodeAt(i)),out+=hexTable[240|c>>18]+hexTable[128|c>>12&63]+hexTable[128|c>>6&63]+hexTable[128|63&c])}return out},exports.compact=function(obj,references){if("object"!=typeof obj||null===obj)return obj;var refs=references||[],lookup=refs.indexOf(obj);if(-1!==lookup)return refs[lookup];if(refs.push(obj),Array.isArray(obj)){for(var compacted=[],i=0;i<obj.length;++i)obj[i]&&"object"==typeof obj[i]?compacted.push(exports.compact(obj[i],refs)):void 0!==obj[i]&&compacted.push(obj[i]);return compacted}return Object.keys(obj).forEach(function(key){obj[key]=exports.compact(obj[key],refs)}),obj},exports.isRegExp=function(obj){return"[object RegExp]"===Object.prototype.toString.call(obj)},exports.isBuffer=function(obj){return null!=obj&&!!(obj.constructor&&obj.constructor.isBuffer&&obj.constructor.isBuffer(obj))}}),utils_1=utils.arrayToObject,utils_2=utils.merge,utils_3=utils.decode,utils_4=utils.encode,utils_5=utils.compact,utils_6=utils.isRegExp,utils_7=utils.isBuffer,replace=String.prototype.replace,percentTwenties=/%20/g,formats={default:"RFC3986",formatters:{RFC1738:function(value){return replace.call(value,percentTwenties,"+")},RFC3986:function(value){return value}},RFC1738:"RFC1738",RFC3986:"RFC3986"},arrayPrefixGenerators={brackets:function(prefix){return prefix+"[]"},indices:function(prefix,key){return prefix+"["+key+"]"},repeat:function(prefix){return prefix}},toISO=Date.prototype.toISOString,defaults={delimiter:"&",encode:!0,encoder:utils.encode,encodeValuesOnly:!1,serializeDate:function(date){return toISO.call(date)},skipNulls:!1,strictNullHandling:!1},stringify=function stringify(object,prefix,generateArrayPrefix,strictNullHandling,skipNulls,encoder,filter,sort,allowDots,serializeDate,formatter,encodeValuesOnly){var obj=object;if("function"==typeof filter)obj=filter(prefix,obj);else if(obj instanceof Date)obj=serializeDate(obj);else if(null===obj){if(strictNullHandling)return encoder&&!encodeValuesOnly?encoder(prefix):prefix;obj=""}if("string"==typeof obj||"number"==typeof obj||"boolean"==typeof obj||utils.isBuffer(obj))return encoder?[formatter(encodeValuesOnly?prefix:encoder(prefix))+"="+formatter(encoder(obj))]:[formatter(prefix)+"="+formatter(String(obj))];var objKeys,values=[];if(void 0===obj)return values;if(Array.isArray(filter))objKeys=filter;else{var keys=Object.keys(obj);objKeys=sort?keys.sort(sort):keys}for(var i=0;i<objKeys.length;++i){var key=objKeys[i];skipNulls&&null===obj[key]||(values=Array.isArray(obj)?values.concat(stringify(obj[key],generateArrayPrefix(prefix,key),generateArrayPrefix,strictNullHandling,skipNulls,encoder,filter,sort,allowDots,serializeDate,formatter,encodeValuesOnly)):values.concat(stringify(obj[key],prefix+(allowDots?"."+key:"["+key+"]"),generateArrayPrefix,strictNullHandling,skipNulls,encoder,filter,sort,allowDots,serializeDate,formatter,encodeValuesOnly)))}return values},stringify_1=function(object,opts){var obj=object,options=opts||{};if(null!==options.encoder&&void 0!==options.encoder&&"function"!=typeof options.encoder)throw new TypeError("Encoder has to be a function.");var delimiter=void 0===options.delimiter?defaults.delimiter:options.delimiter,strictNullHandling="boolean"==typeof options.strictNullHandling?options.strictNullHandling:defaults.strictNullHandling,skipNulls="boolean"==typeof options.skipNulls?options.skipNulls:defaults.skipNulls,encode="boolean"==typeof options.encode?options.encode:defaults.encode,encoder="function"==typeof options.encoder?options.encoder:defaults.encoder,sort="function"==typeof options.sort?options.sort:null,allowDots=void 0!==options.allowDots&&options.allowDots,serializeDate="function"==typeof options.serializeDate?options.serializeDate:defaults.serializeDate,encodeValuesOnly="boolean"==typeof options.encodeValuesOnly?options.encodeValuesOnly:defaults.encodeValuesOnly;if(void 0===options.format)options.format=formats.default;else if(!Object.prototype.hasOwnProperty.call(formats.formatters,options.format))throw new TypeError("Unknown format option provided.");var objKeys,filter,formatter=formats.formatters[options.format];"function"==typeof options.filter?obj=(filter=options.filter)("",obj):Array.isArray(options.filter)&&(objKeys=filter=options.filter);var arrayFormat,keys=[];if("object"!=typeof obj||null===obj)return"";arrayFormat=options.arrayFormat in arrayPrefixGenerators?options.arrayFormat:"indices"in options?options.indices?"indices":"repeat":"indices";var generateArrayPrefix=arrayPrefixGenerators[arrayFormat];objKeys||(objKeys=Object.keys(obj)),sort&&objKeys.sort(sort);for(var i=0;i<objKeys.length;++i){var key=objKeys[i];skipNulls&&null===obj[key]||(keys=keys.concat(stringify(obj[key],key,generateArrayPrefix,strictNullHandling,skipNulls,encode?encoder:null,filter,sort,allowDots,serializeDate,formatter,encodeValuesOnly)))}return keys.join(delimiter)},has=Object.prototype.hasOwnProperty,defaults$1={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:utils.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},parseValues=function(str,options){for(var obj={},parts=str.split(options.delimiter,options.parameterLimit===1/0?void 0:options.parameterLimit),i=0;i<parts.length;++i){var key,val,part=parts[i],pos=-1===part.indexOf("]=")?part.indexOf("="):part.indexOf("]=")+1;-1===pos?(key=options.decoder(part),val=options.strictNullHandling?null:""):(key=options.decoder(part.slice(0,pos)),val=options.decoder(part.slice(pos+1))),has.call(obj,key)?obj[key]=[].concat(obj[key]).concat(val):obj[key]=val}return obj},parseObject=function(chain,val,options){if(!chain.length)return val;var obj,root=chain.shift();if("[]"===root)obj=(obj=[]).concat(parseObject(chain,val,options));else{obj=options.plainObjects?Object.create(null):{};var cleanRoot="["===root.charAt(0)&&"]"===root.charAt(root.length-1)?root.slice(1,-1):root,index=parseInt(cleanRoot,10);!isNaN(index)&&root!==cleanRoot&&String(index)===cleanRoot&&index>=0&&options.parseArrays&&index<=options.arrayLimit?(obj=[])[index]=parseObject(chain,val,options):obj[cleanRoot]=parseObject(chain,val,options)}return obj},parseKeys=function(givenKey,val,options){if(givenKey){var key=options.allowDots?givenKey.replace(/\.([^.[]+)/g,"[$1]"):givenKey,child=/(\[[^[\]]*])/g,segment=/(\[[^[\]]*])/.exec(key),parent=segment?key.slice(0,segment.index):key,keys=[];if(parent){if(!options.plainObjects&&has.call(Object.prototype,parent)&&!options.allowPrototypes)return;keys.push(parent)}for(var i=0;null!==(segment=child.exec(key))&&i<options.depth;){if(i+=1,!options.plainObjects&&has.call(Object.prototype,segment[1].slice(1,-1))&&!options.allowPrototypes)return;keys.push(segment[1])}return segment&&keys.push("["+key.slice(segment.index)+"]"),parseObject(keys,val,options)}},parse=function(str,opts){var options=opts||{};if(null!==options.decoder&&void 0!==options.decoder&&"function"!=typeof options.decoder)throw new TypeError("Decoder has to be a function.");if(options.delimiter="string"==typeof options.delimiter||utils.isRegExp(options.delimiter)?options.delimiter:defaults$1.delimiter,options.depth="number"==typeof options.depth?options.depth:defaults$1.depth,options.arrayLimit="number"==typeof options.arrayLimit?options.arrayLimit:defaults$1.arrayLimit,options.parseArrays=!1!==options.parseArrays,options.decoder="function"==typeof options.decoder?options.decoder:defaults$1.decoder,options.allowDots="boolean"==typeof options.allowDots?options.allowDots:defaults$1.allowDots,options.plainObjects="boolean"==typeof options.plainObjects?options.plainObjects:defaults$1.plainObjects,options.allowPrototypes="boolean"==typeof options.allowPrototypes?options.allowPrototypes:defaults$1.allowPrototypes,options.parameterLimit="number"==typeof options.parameterLimit?options.parameterLimit:defaults$1.parameterLimit,options.strictNullHandling="boolean"==typeof options.strictNullHandling?options.strictNullHandling:defaults$1.strictNullHandling,""===str||null==str)return options.plainObjects?Object.create(null):{};for(var tempObj="string"==typeof str?parseValues(str,options):str,obj=options.plainObjects?Object.create(null):{},keys=Object.keys(tempObj),i=0;i<keys.length;++i){var key=keys[i],newObj=parseKeys(key,tempObj[key],options);obj=utils.merge(obj,newObj,options)}return utils.compact(obj)},lib={formats:formats,parse:parse,stringify:stringify_1},componentEmitter=createCommonjsModule(function(module){function Emitter(obj){if(obj)return function(obj){for(var key in Emitter.prototype)obj[key]=Emitter.prototype[key];return obj}(obj)}module.exports=Emitter,Emitter.prototype.on=Emitter.prototype.addEventListener=function(event,fn){return this._callbacks=this._callbacks||{},(this._callbacks["$"+event]=this._callbacks["$"+event]||[]).push(fn),this},Emitter.prototype.once=function(event,fn){function on(){this.off(event,on),fn.apply(this,arguments)}return on.fn=fn,this.on(event,on),this},Emitter.prototype.off=Emitter.prototype.removeListener=Emitter.prototype.removeAllListeners=Emitter.prototype.removeEventListener=function(event,fn){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var cb,callbacks=this._callbacks["$"+event];if(!callbacks)return this;if(1==arguments.length)return delete this._callbacks["$"+event],this;for(var i=0;i<callbacks.length;i++)if((cb=callbacks[i])===fn||cb.fn===fn){callbacks.splice(i,1);break}return this},Emitter.prototype.emit=function(event){this._callbacks=this._callbacks||{};var args=[].slice.call(arguments,1),callbacks=this._callbacks["$"+event];if(callbacks)for(var i=0,len=(callbacks=callbacks.slice(0)).length;i<len;++i)callbacks[i].apply(this,args);return this},Emitter.prototype.listeners=function(event){return this._callbacks=this._callbacks||{},this._callbacks["$"+event]||[]},Emitter.prototype.hasListeners=function(event){return!!this.listeners(event).length}});function isObject(obj){return null!==obj&&"object"==typeof obj}var isObject_1=isObject,requestBase=RequestBase;function RequestBase(obj){if(obj)return mixin(obj)}function mixin(obj){for(var key in RequestBase.prototype)obj[key]=RequestBase.prototype[key];return obj}RequestBase.prototype.clearTimeout=function(){return clearTimeout(this._timer),clearTimeout(this._responseTimeoutTimer),delete this._timer,delete this._responseTimeoutTimer,this},RequestBase.prototype.parse=function(fn){return this._parser=fn,this},RequestBase.prototype.responseType=function(val){return this._responseType=val,this},RequestBase.prototype.serialize=function(fn){return this._serializer=fn,this},RequestBase.prototype.timeout=function(options){if(!options||"object"!=typeof options)return this._timeout=options,this._responseTimeout=0,this;for(var option in options)switch(option){case"deadline":this._timeout=options.deadline;break;case"response":this._responseTimeout=options.response;break;default:console.warn("Unknown timeout option",option)}return this},RequestBase.prototype.retry=function(count,fn){return 0!==arguments.length&&!0!==count||(count=1),count<=0&&(count=0),this._maxRetries=count,this._retries=0,this._retryCallback=fn,this};var ERROR_CODES=["ECONNRESET","ETIMEDOUT","EADDRINFO","ESOCKETTIMEDOUT"];RequestBase.prototype._shouldRetry=function(err,res){if(!this._maxRetries||this._retries++>=this._maxRetries)return!1;if(this._retryCallback)try{var override=this._retryCallback(err,res);if(!0===override)return!0;if(!1===override)return!1}catch(e){console.error(e)}if(res&&res.status&&res.status>=500&&501!=res.status)return!0;if(err){if(err.code&&~ERROR_CODES.indexOf(err.code))return!0;if(err.timeout&&"ECONNABORTED"==err.code)return!0;if(err.crossDomain)return!0}return!1},RequestBase.prototype._retry=function(){return this.clearTimeout(),this.req&&(this.req=null,this.req=this.request()),this._aborted=!1,this.timedout=!1,this._end()},RequestBase.prototype.then=function(resolve,reject){if(!this._fullfilledPromise){var self=this;this._endCalled&&console.warn("Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises"),this._fullfilledPromise=new Promise(function(innerResolve,innerReject){self.end(function(err,res){err?innerReject(err):innerResolve(res)})})}return this._fullfilledPromise.then(resolve,reject)},RequestBase.prototype.catch=function(cb){return this.then(void 0,cb)},RequestBase.prototype.use=function(fn){return fn(this),this},RequestBase.prototype.ok=function(cb){if("function"!=typeof cb)throw Error("Callback required");return this._okCallback=cb,this},RequestBase.prototype._isResponseOK=function(res){return!!res&&(this._okCallback?this._okCallback(res):res.status>=200&&res.status<300)},RequestBase.prototype.get=function(field){return this._header[field.toLowerCase()]},RequestBase.prototype.getHeader=RequestBase.prototype.get,RequestBase.prototype.set=function(field,val){if(isObject_1(field)){for(var key in field)this.set(key,field[key]);return this}return this._header[field.toLowerCase()]=val,this.header[field]=val,this},RequestBase.prototype.unset=function(field){return delete this._header[field.toLowerCase()],delete this.header[field],this},RequestBase.prototype.field=function(name,val){if(null==name)throw new Error(".field(name, val) name can not be empty");if(this._data&&console.error(".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()"),isObject_1(name)){for(var key in name)this.field(key,name[key]);return this}if(Array.isArray(val)){for(var i in val)this.field(name,val[i]);return this}if(null==val)throw new Error(".field(name, val) val can not be empty");return"boolean"==typeof val&&(val=""+val),this._getFormData().append(name,val),this},RequestBase.prototype.abort=function(){return this._aborted?this:(this._aborted=!0,this.xhr&&this.xhr.abort(),this.req&&this.req.abort(),this.clearTimeout(),this.emit("abort"),this)},RequestBase.prototype._auth=function(user,pass,options,base64Encoder){switch(options.type){case"basic":this.set("Authorization","Basic "+base64Encoder(user+":"+pass));break;case"auto":this.username=user,this.password=pass;break;case"bearer":this.set("Authorization","Bearer "+user)}return this},RequestBase.prototype.withCredentials=function(on){return null==on&&(on=!0),this._withCredentials=on,this},RequestBase.prototype.redirects=function(n){return this._maxRedirects=n,this},RequestBase.prototype.maxResponseSize=function(n){if("number"!=typeof n)throw TypeError("Invalid argument");return this._maxResponseSize=n,this},RequestBase.prototype.toJSON=function(){return{method:this.method,url:this.url,data:this._data,headers:this._header}},RequestBase.prototype.send=function(data){var isObj=isObject_1(data),type=this._header["content-type"];if(this._formData&&console.error(".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()"),isObj&&!this._data)Array.isArray(data)?this._data=[]:this._isHost(data)||(this._data={});else if(data&&this._data&&this._isHost(this._data))throw Error("Can't merge these send calls");if(isObj&&isObject_1(this._data))for(var key in data)this._data[key]=data[key];else"string"==typeof data?(type||this.type("form"),type=this._header["content-type"],this._data="application/x-www-form-urlencoded"==type?this._data?this._data+"&"+data:data:(this._data||"")+data):this._data=data;return!isObj||this._isHost(data)?this:(type||this.type("json"),this)},RequestBase.prototype.sortQuery=function(sort){return this._sort=void 0===sort||sort,this},RequestBase.prototype._finalizeQueryString=function(){var query=this._query.join("&");if(query&&(this.url+=(this.url.indexOf("?")>=0?"&":"?")+query),this._query.length=0,this._sort){var index=this.url.indexOf("?");if(index>=0){var queryArr=this.url.substring(index+1).split("&");"function"==typeof this._sort?queryArr.sort(this._sort):queryArr.sort(),this.url=this.url.substring(0,index)+"?"+queryArr.join("&")}}},RequestBase.prototype._appendQueryString=function(){console.trace("Unsupported")},RequestBase.prototype._timeoutError=function(reason,timeout,errno){if(!this._aborted){var err=new Error(reason+timeout+"ms exceeded");err.timeout=timeout,err.code="ECONNABORTED",err.errno=errno,this.timedout=!0,this.abort(),this.callback(err)}},RequestBase.prototype._setTimeouts=function(){var self=this;this._timeout&&!this._timer&&(this._timer=setTimeout(function(){self._timeoutError("Timeout of ",self._timeout,"ETIME")},this._timeout)),this._responseTimeout&&!this._responseTimeoutTimer&&(this._responseTimeoutTimer=setTimeout(function(){self._timeoutError("Response timeout of ",self._responseTimeout,"ETIMEDOUT")},this._responseTimeout))};var type=function(str){return str.split(/ *; */).shift()},params=function(str){return str.split(/ *; */).reduce(function(obj,str){var parts=str.split(/ *= */),key=parts.shift(),val=parts.shift();return key&&val&&(obj[key]=val),obj},{})},parseLinks=function(str){return str.split(/ *, */).reduce(function(obj,str){var parts=str.split(/ *; */),url=parts[0].slice(1,-1);return obj[parts[1].split(/ *= */)[1].slice(1,-1)]=url,obj},{})},cleanHeader=function(header,changesOrigin){return delete header["content-type"],delete header["content-length"],delete header["transfer-encoding"],delete header.host,changesOrigin&&(delete header.authorization,delete header.cookie),header},utils$1={type:type,params:params,parseLinks:parseLinks,cleanHeader:cleanHeader},responseBase=ResponseBase;function ResponseBase(obj){if(obj)return mixin$1(obj)}function mixin$1(obj){for(var key in ResponseBase.prototype)obj[key]=ResponseBase.prototype[key];return obj}function Agent(){this._defaults=[]}ResponseBase.prototype.get=function(field){return this.header[field.toLowerCase()]},ResponseBase.prototype._setHeaderProperties=function(header){var ct=header["content-type"]||"";this.type=utils$1.type(ct);var params=utils$1.params(ct);for(var key in params)this[key]=params[key];this.links={};try{header.link&&(this.links=utils$1.parseLinks(header.link))}catch(err){}},ResponseBase.prototype._setStatusProperties=function(status){var type=status/100|0;this.status=this.statusCode=status,this.statusType=type,this.info=1==type,this.ok=2==type,this.redirect=3==type,this.clientError=4==type,this.serverError=5==type,this.error=(4==type||5==type)&&this.toError(),this.accepted=202==status,this.noContent=204==status,this.badRequest=400==status,this.unauthorized=401==status,this.notAcceptable=406==status,this.forbidden=403==status,this.notFound=404==status},["use","on","once","set","query","type","accept","auth","withCredentials","sortQuery","retry","ok","redirects","timeout","buffer","serialize","parse","ca","key","pfx","cert"].forEach(function(fn){Agent.prototype[fn]=function(){return this._defaults.push({fn:fn,arguments:arguments}),this}}),Agent.prototype._setDefaults=function(req){this._defaults.forEach(function(def){req[def.fn].apply(req,def.arguments)})};for(var agentBase=Agent,client=createCommonjsModule(function(module,exports){var root;function noop(){}"undefined"!=typeof window?root=window:"undefined"!=typeof self?root=self:(console.warn("Using browser-only version of superagent in non-browser environment"),root=commonjsGlobal);var request=exports=module.exports=function(method,url){return"function"==typeof url?new exports.Request("GET",method).end(url):1==arguments.length?new exports.Request("GET",method):new exports.Request(method,url)};exports.Request=Request,request.getXHR=function(){if(!(!root.XMLHttpRequest||root.location&&"file:"==root.location.protocol&&root.ActiveXObject))return new XMLHttpRequest;try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(e){}try{return new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(e){}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(e){}try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(e){}throw Error("Browser-only version of superagent could not find XHR")};var trim="".trim?function(s){return s.trim()}:function(s){return s.replace(/(^\s*|\s*$)/g,"")};function serialize(obj){if(!isObject_1(obj))return obj;var pairs=[];for(var key in obj)pushEncodedKeyValuePair(pairs,key,obj[key]);return pairs.join("&")}function pushEncodedKeyValuePair(pairs,key,val){if(null!=val)if(Array.isArray(val))val.forEach(function(v){pushEncodedKeyValuePair(pairs,key,v)});else if(isObject_1(val))for(var subkey in val)pushEncodedKeyValuePair(pairs,key+"["+subkey+"]",val[subkey]);else pairs.push(encodeURIComponent(key)+"="+encodeURIComponent(val));else null===val&&pairs.push(encodeURIComponent(key))}function parseString(str){for(var pair,pos,obj={},pairs=str.split("&"),i=0,len=pairs.length;i<len;++i)-1==(pos=(pair=pairs[i]).indexOf("="))?obj[decodeURIComponent(pair)]="":obj[decodeURIComponent(pair.slice(0,pos))]=decodeURIComponent(pair.slice(pos+1));return obj}function isJSON(mime){return/[\/+]json($|[^-\w])/.test(mime)}function Response(req){this.req=req,this.xhr=this.req.xhr,this.text="HEAD"!=this.req.method&&(""===this.xhr.responseType||"text"===this.xhr.responseType)||void 0===this.xhr.responseType?this.xhr.responseText:null,this.statusText=this.req.xhr.statusText;var status=this.xhr.status;1223===status&&(status=204),this._setStatusProperties(status),this.header=this.headers=function(str){for(var index,line,field,val,lines=str.split(/\r?\n/),fields={},i=0,len=lines.length;i<len;++i)-1!==(index=(line=lines[i]).indexOf(":"))&&(field=line.slice(0,index).toLowerCase(),val=trim(line.slice(index+1)),fields[field]=val);return fields}(this.xhr.getAllResponseHeaders()),this.header["content-type"]=this.xhr.getResponseHeader("content-type"),this._setHeaderProperties(this.header),null===this.text&&req._responseType?this.body=this.xhr.response:this.body="HEAD"!=this.req.method?this._parseBody(this.text?this.text:this.xhr.response):null}function Request(method,url){var self=this;this._query=this._query||[],this.method=method,this.url=url,this.header={},this._header={},this.on("end",function(){var new_err,err=null,res=null;try{res=new Response(self)}catch(e){return(err=new Error("Parser is unable to parse the response")).parse=!0,err.original=e,self.xhr?(err.rawResponse=void 0===self.xhr.responseType?self.xhr.responseText:self.xhr.response,err.status=self.xhr.status?self.xhr.status:null,err.statusCode=err.status):(err.rawResponse=null,err.status=null),self.callback(err)}self.emit("response",res);try{self._isResponseOK(res)||(new_err=new Error(res.statusText||"Unsuccessful HTTP response"))}catch(custom_err){new_err=custom_err}new_err?(new_err.original=err,new_err.response=res,new_err.status=res.status,self.callback(new_err,res)):self.callback(null,res)})}function del(url,data,fn){var req=request("DELETE",url);return"function"==typeof data&&(fn=data,data=null),data&&req.send(data),fn&&req.end(fn),req}request.serializeObject=serialize,request.parseString=parseString,request.types={html:"text/html",json:"application/json",xml:"text/xml",urlencoded:"application/x-www-form-urlencoded",form:"application/x-www-form-urlencoded","form-data":"application/x-www-form-urlencoded"},request.serialize={"application/x-www-form-urlencoded":serialize,"application/json":JSON.stringify},request.parse={"application/x-www-form-urlencoded":parseString,"application/json":JSON.parse},responseBase(Response.prototype),Response.prototype._parseBody=function(str){var parse=request.parse[this.type];return this.req._parser?this.req._parser(this,str):(!parse&&isJSON(this.type)&&(parse=request.parse["application/json"]),parse&&str&&(str.length||str instanceof Object)?parse(str):null)},Response.prototype.toError=function(){var req=this.req,method=req.method,url=req.url,msg="cannot "+method+" "+url+" ("+this.status+")",err=new Error(msg);return err.status=this.status,err.method=method,err.url=url,err},request.Response=Response,componentEmitter(Request.prototype),requestBase(Request.prototype),Request.prototype.type=function(type){return this.set("Content-Type",request.types[type]||type),this},Request.prototype.accept=function(type){return this.set("Accept",request.types[type]||type),this},Request.prototype.auth=function(user,pass,options){1===arguments.length&&(pass=""),"object"==typeof pass&&null!==pass&&(options=pass,pass=""),options||(options={type:"function"==typeof btoa?"basic":"auto"});return this._auth(user,pass,options,function(string){if("function"==typeof btoa)return btoa(string);throw new Error("Cannot use basic auth, btoa is not a function")})},Request.prototype.query=function(val){return"string"!=typeof val&&(val=serialize(val)),val&&this._query.push(val),this},Request.prototype.attach=function(field,file,options){if(file){if(this._data)throw Error("superagent can't mix .send() and .attach()");this._getFormData().append(field,file,options||file.name)}return this},Request.prototype._getFormData=function(){return this._formData||(this._formData=new root.FormData),this._formData},Request.prototype.callback=function(err,res){if(this._shouldRetry(err,res))return this._retry();var fn=this._callback;this.clearTimeout(),err&&(this._maxRetries&&(err.retries=this._retries-1),this.emit("error",err)),fn(err,res)},Request.prototype.crossDomainError=function(){var err=new Error("Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.");err.crossDomain=!0,err.status=this.status,err.method=this.method,err.url=this.url,this.callback(err)},Request.prototype.buffer=Request.prototype.ca=Request.prototype.agent=function(){return console.warn("This is not supported in browser version of superagent"),this},Request.prototype.pipe=Request.prototype.write=function(){throw Error("Streaming is not supported in browser version of superagent")},Request.prototype._isHost=function(obj){return obj&&"object"==typeof obj&&!Array.isArray(obj)&&"[object Object]"!==Object.prototype.toString.call(obj)},Request.prototype.end=function(fn){return this._endCalled&&console.warn("Warning: .end() was called twice. This is not supported in superagent"),this._endCalled=!0,this._callback=fn||noop,this._finalizeQueryString(),this._end()},Request.prototype._end=function(){var self=this,xhr=this.xhr=request.getXHR(),data=this._formData||this._data;this._setTimeouts(),xhr.onreadystatechange=function(){var readyState=xhr.readyState;if(readyState>=2&&self._responseTimeoutTimer&&clearTimeout(self._responseTimeoutTimer),4==readyState){var status;try{status=xhr.status}catch(e){status=0}if(!status){if(self.timedout||self._aborted)return;return self.crossDomainError()}self.emit("end")}};var handleProgress=function(direction,e){e.total>0&&(e.percent=e.loaded/e.total*100),e.direction=direction,self.emit("progress",e)};if(this.hasListeners("progress"))try{xhr.onprogress=handleProgress.bind(null,"download"),xhr.upload&&(xhr.upload.onprogress=handleProgress.bind(null,"upload"))}catch(e){}try{this.username&&this.password?xhr.open(this.method,this.url,!0,this.username,this.password):xhr.open(this.method,this.url,!0)}catch(err){return this.callback(err)}if(this._withCredentials&&(xhr.withCredentials=!0),!this._formData&&"GET"!=this.method&&"HEAD"!=this.method&&"string"!=typeof data&&!this._isHost(data)){var contentType=this._header["content-type"],serialize=this._serializer||request.serialize[contentType?contentType.split(";")[0]:""];!serialize&&isJSON(contentType)&&(serialize=request.serialize["application/json"]),serialize&&(data=serialize(data))}for(var field in this.header)null!=this.header[field]&&this.header.hasOwnProperty(field)&&xhr.setRequestHeader(field,this.header[field]);return this._responseType&&(xhr.responseType=this._responseType),this.emit("request",this),xhr.send(void 0!==data?data:null),this},request.agent=function(){return new agentBase},["GET","POST","OPTIONS","PATCH","PUT","DELETE"].forEach(function(method){agentBase.prototype[method.toLowerCase()]=function(url,fn){var req=new request.Request(method,url);return this._setDefaults(req),fn&&req.end(fn),req}}),agentBase.prototype.del=agentBase.prototype.delete,request.get=function(url,data,fn){var req=request("GET",url);return"function"==typeof data&&(fn=data,data=null),data&&req.query(data),fn&&req.end(fn),req},request.head=function(url,data,fn){var req=request("HEAD",url);return"function"==typeof data&&(fn=data,data=null),data&&req.query(data),fn&&req.end(fn),req},request.options=function(url,data,fn){var req=request("OPTIONS",url);return"function"==typeof data&&(fn=data,data=null),data&&req.send(data),fn&&req.end(fn),req},request.del=del,request.delete=del,request.patch=function(url,data,fn){var req=request("PATCH",url);return"function"==typeof data&&(fn=data,data=null),data&&req.send(data),fn&&req.end(fn),req},request.post=function(url,data,fn){var req=request("POST",url);return"function"==typeof data&&(fn=data,data=null),data&&req.send(data),fn&&req.end(fn),req},request.put=function(url,data,fn){var req=request("PUT",url);return"function"==typeof data&&(fn=data,data=null),data&&req.send(data),fn&&req.end(fn),req}}),client_1=client.Request,byteLength_1=byteLength,toByteArray_1=toByteArray,fromByteArray_1=fromByteArray,lookup=[],revLookup=[],Arr="undefined"!=typeof Uint8Array?Uint8Array:Array,code="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",i=0,len=code.length;i<len;++i)lookup[i]=code[i],revLookup[code.charCodeAt(i)]=i;function placeHoldersCount(b64){var len=b64.length;if(len%4>0)throw new Error("Invalid string. Length must be a multiple of 4");return"="===b64[len-2]?2:"="===b64[len-1]?1:0}function byteLength(b64){return 3*b64.length/4-placeHoldersCount(b64)}function toByteArray(b64){var i,j,l,tmp,placeHolders,arr,len=b64.length;placeHolders=placeHoldersCount(b64),arr=new Arr(3*len/4-placeHolders),l=placeHolders>0?len-4:len;var L=0;for(i=0,j=0;i<l;i+=4,j+=3)tmp=revLookup[b64.charCodeAt(i)]<<18|revLookup[b64.charCodeAt(i+1)]<<12|revLookup[b64.charCodeAt(i+2)]<<6|revLookup[b64.charCodeAt(i+3)],arr[L++]=tmp>>16&255,arr[L++]=tmp>>8&255,arr[L++]=255&tmp;return 2===placeHolders?(tmp=revLookup[b64.charCodeAt(i)]<<2|revLookup[b64.charCodeAt(i+1)]>>4,arr[L++]=255&tmp):1===placeHolders&&(tmp=revLookup[b64.charCodeAt(i)]<<10|revLookup[b64.charCodeAt(i+1)]<<4|revLookup[b64.charCodeAt(i+2)]>>2,arr[L++]=tmp>>8&255,arr[L++]=255&tmp),arr}function tripletToBase64(num){return lookup[num>>18&63]+lookup[num>>12&63]+lookup[num>>6&63]+lookup[63&num]}function encodeChunk(uint8,start,end){for(var tmp,output=[],i=start;i<end;i+=3)tmp=(uint8[i]<<16)+(uint8[i+1]<<8)+uint8[i+2],output.push(tripletToBase64(tmp));return output.join("")}function fromByteArray(uint8){for(var tmp,len=uint8.length,extraBytes=len%3,output="",parts=[],i=0,len2=len-extraBytes;i<len2;i+=16383)parts.push(encodeChunk(uint8,i,i+16383>len2?len2:i+16383));return 1===extraBytes?(tmp=uint8[len-1],output+=lookup[tmp>>2],output+=lookup[tmp<<4&63],output+="=="):2===extraBytes&&(tmp=(uint8[len-2]<<8)+uint8[len-1],output+=lookup[tmp>>10],output+=lookup[tmp>>4&63],output+=lookup[tmp<<2&63],output+="="),parts.push(output),parts.join("")}revLookup["-".charCodeAt(0)]=62,revLookup["_".charCodeAt(0)]=63;var base64Js={byteLength:byteLength_1,toByteArray:toByteArray_1,fromByteArray:fromByteArray_1};function padding(str){var mod=str.length%4;return 0===mod?str:str+new Array(1+(4-mod)).join("=")}function stringToByteArray(str){for(var arr=new Array(str.length),a=0;a<str.length;a++)arr[a]=str.charCodeAt(a);return arr}function byteArrayToString(array){for(var result="",i=0;i<array.length;i++)result+=String.fromCharCode(array[i]);return result}function encode(str){return base64Js.fromByteArray(stringToByteArray(str)).replace(/\+/g,"-").replace(/\//g,"_")}function decode(str){return str=padding(str).replace(/-/g,"+").replace(/_/g,"/"),byteArrayToString(base64Js.toByteArray(str))}var base64Url={encode:encode,decode:decode},version={raw:"9.10.2"},toString=Object.prototype.toString;function attribute(o,attr,type,text){if(type="array"===type?"object":type,o&&typeof o[attr]!==type)throw new Error(text)}function variable(o,type,text){if(typeof o!==type)throw new Error(text)}function value(o,values,text){if(-1===values.indexOf(o))throw new Error(text)}function check(o,config,attributes){if(config.optional&&!o||variable(o,config.type,config.message),"object"===config.type&&attributes)for(var keys=Object.keys(attributes),index=0;index<keys.length;index++){var a=keys[index];attributes[a].optional&&!o[a]||attributes[a].condition&&!attributes[a].condition(o)||(attribute(o,a,attributes[a].type,attributes[a].message),attributes[a].values&&value(o[a],attributes[a].values,attributes[a].value_message))}}function isArray(array){return this.supportsIsArray()?Array.isArray(array):"[object Array]"===toString.call(array)}function supportsIsArray(){return null!=Array.isArray}var assert={check:check,attribute:attribute,variable:variable,value:value,isArray:isArray,supportsIsArray:supportsIsArray};function get(){return Object.assign?Object.assign:objectAssignPolyfill}function objectAssignPolyfill(target){if(null==target)throw new TypeError("Cannot convert first argument to object");for(var to=Object(target),i=1;i<arguments.length;i++){var nextSource=arguments[i];if(null!=nextSource)for(var keysArray=Object.keys(Object(nextSource)),nextIndex=0,len=keysArray.length;nextIndex<len;nextIndex++){var nextKey=keysArray[nextIndex],desc=Object.getOwnPropertyDescriptor(nextSource,nextKey);void 0!==desc&&desc.enumerable&&(to[nextKey]=nextSource[nextKey])}}return to}var objectAssign={get:get,objectAssignPolyfill:objectAssignPolyfill};function pick(object,keys){return keys.reduce(function(prev,key){return object[key]&&(prev[key]=object[key]),prev},{})}function getKeysNotIn(obj,allowedKeys){var notAllowed=[];for(var key in obj)-1===allowedKeys.indexOf(key)&&notAllowed.push(key);return notAllowed}function objectValues(obj){var values=[];for(var key in obj)values.push(obj[key]);return values}function extend(){var params=objectValues(arguments);return params.unshift({}),objectAssign.get().apply(void 0,params)}function merge(object,keys){return{base:keys?pick(object,keys):object,with:function(object2,keys2){return object2=keys2?pick(object2,keys2):object2,extend(this.base,object2)}}}function blacklist(object,blacklistedKeys){return Object.keys(object).reduce(function(p,key){return-1===blacklistedKeys.indexOf(key)&&(p[key]=object[key]),p},{})}function camelToSnake(str){for(var code,newKey="",index=0,wasPrevNumber=!0,wasPrevUppercase=!0;index<str.length;)code=str.charCodeAt(index),!wasPrevUppercase&&code>=65&&code<=90||!wasPrevNumber&&code>=48&&code<=57?(newKey+="_",newKey+=str[index].toLowerCase()):newKey+=str[index].toLowerCase(),wasPrevNumber=code>=48&&code<=57,wasPrevUppercase=code>=65&&code<=90,index++;return newKey}function snakeToCamel(str){var parts=str.split("_");return parts.reduce(function(p,c){return p+c.charAt(0).toUpperCase()+c.slice(1)},parts.shift())}function toSnakeCase(object,exceptions){return"object"!=typeof object||assert.isArray(object)||null===object?object:(exceptions=exceptions||[],Object.keys(object).reduce(function(p,key){return p[-1===exceptions.indexOf(key)?camelToSnake(key):key]=toSnakeCase(object[key]),p},{}))}function toCamelCase(object,exceptions,options){return"object"!=typeof object||assert.isArray(object)||null===object?object:(exceptions=exceptions||[],options=options||{},Object.keys(object).reduce(function(p,key){var newKey=-1===exceptions.indexOf(key)?snakeToCamel(key):key;return p[newKey]=toCamelCase(object[newKey]||object[key],[],options),options.keepOriginal&&(p[key]=toCamelCase(object[key],[],options)),p},{}))}function getLocationFromUrl(href){var match=href.match(/^(https?:|file:)\/\/(([^:\/?#]*)(?::([0-9]+))?)([\/]{0,1}[^?#]*)(\?[^#]*|)(#.*|)$/);return match&&{href:href,protocol:match[1],host:match[2],hostname:match[3],port:match[4],pathname:match[5],search:match[6],hash:match[7]}}function getOriginFromUrl(url){if(url){var parsed=getLocationFromUrl(url),origin=parsed.protocol+"//"+parsed.hostname;return parsed.port&&(origin+=":"+parsed.port),origin}}function trim(options,key){var trimmed=extend(options);return options[key]&&(trimmed[key]=options[key].trim()),trimmed}function trimMultiple(options,keys){return keys.reduce(trim,options)}function trimUserDetails(options){return trimMultiple(options,["username","email","phoneNumber"])}var objectHelper={toSnakeCase:toSnakeCase,toCamelCase:toCamelCase,blacklist:blacklist,merge:merge,pick:pick,getKeysNotIn:getKeysNotIn,extend:extend,getOriginFromUrl:getOriginFromUrl,getLocationFromUrl:getLocationFromUrl,trimUserDetails:trimUserDetails};function RequestWrapper(req){this.request=req,this.method=req.method,this.url=req.url,this.body=req._data,this.headers=req._header}function RequestObj(req){this.request=req}function RequestBuilder(options){this._sendTelemetry=!1!==options._sendTelemetry||options._sendTelemetry,this._telemetryInfo=options._telemetryInfo||null,this._timesToRetryFailedRequests=options._timesToRetryFailedRequests,this.headers=options.headers||{},this._universalLoginPage=options.universalLoginPage}function redirect(url){getWindow().location=url}function getDocument(){return getWindow().document}function getWindow(){return window}function getOrigin(){var location=getWindow().location,origin=location.origin;return origin||(origin=objectHelper.getOriginFromUrl(location.href)),origin}RequestWrapper.prototype.abort=function(){this.request.abort()},RequestWrapper.prototype.getMethod=function(){return this.method},RequestWrapper.prototype.getBody=function(){return this.body},RequestWrapper.prototype.getUrl=function(){return this.url},RequestWrapper.prototype.getHeaders=function(){return this.headers},RequestObj.prototype.set=function(key,value){return this.request=this.request.set(key,value),this},RequestObj.prototype.send=function(body){return this.request=this.request.send(objectHelper.trimUserDetails(body)),this},RequestObj.prototype.withCredentials=function(){return this.request=this.request.withCredentials(),this},RequestObj.prototype.end=function(cb){return this.request=this.request.end(cb),new RequestWrapper(this.request)},RequestBuilder.prototype.setCommonConfiguration=function(ongoingRequest,options){if(options=options||{},this._timesToRetryFailedRequests>0&&(ongoingRequest=ongoingRequest.retry(this._timesToRetryFailedRequests)),options.noHeaders)return ongoingRequest;var headers=this.headers;ongoingRequest=ongoingRequest.set("Content-Type","application/json");for(var keys=Object.keys(this.headers),a=0;a<keys.length;a++)ongoingRequest=ongoingRequest.set(keys[a],headers[keys[a]]);return this._sendTelemetry&&(ongoingRequest=ongoingRequest.set("Auth0-Client",this.getTelemetryData())),ongoingRequest},RequestBuilder.prototype.getTelemetryData=function(){var telemetryName=this._universalLoginPage?"auth0.js-ulp":"auth0.js",clientInfo=this._telemetryInfo||{name:telemetryName,version:version.raw},jsonClientInfo=JSON.stringify(clientInfo);return base64Url.encode(jsonClientInfo)},RequestBuilder.prototype.get=function(url,options){return new RequestObj(this.setCommonConfiguration(client.get(url),options))},RequestBuilder.prototype.post=function(url,options){return new RequestObj(this.setCommonConfiguration(client.post(url),options))},RequestBuilder.prototype.patch=function(url,options){return new RequestObj(this.setCommonConfiguration(client.patch(url),options))};var windowHandler={redirect:redirect,getDocument:getDocument,getWindow:getWindow,getOrigin:getOrigin};function DummyStorage(){}DummyStorage.prototype.getItem=function(){return null},DummyStorage.prototype.removeItem=function(){},DummyStorage.prototype.setItem=function(){};var js_cookie=createCommonjsModule(function(module,exports){!function(factory){if(module.exports=factory(),!!0){var OldCookies=window.Cookies,api=window.Cookies=factory();api.noConflict=function(){return window.Cookies=OldCookies,api}}}(function(){function extend(){for(var i=0,result={};i<arguments.length;i++){var attributes=arguments[i];for(var key in attributes)result[key]=attributes[key]}return result}return function init(converter){function api(key,value,attributes){var result;if("undefined"!=typeof document){if(arguments.length>1){if("number"==typeof(attributes=extend({path:"/"},api.defaults,attributes)).expires){var expires=new Date;expires.setMilliseconds(expires.getMilliseconds()+864e5*attributes.expires),attributes.expires=expires}attributes.expires=attributes.expires?attributes.expires.toUTCString():"";try{result=JSON.stringify(value),/^[\{\[]/.test(result)&&(value=result)}catch(e){}value=converter.write?converter.write(value,key):encodeURIComponent(String(value)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),key=(key=(key=encodeURIComponent(String(key))).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape);var stringifiedAttributes="";for(var attributeName in attributes)attributes[attributeName]&&(stringifiedAttributes+="; "+attributeName,!0!==attributes[attributeName]&&(stringifiedAttributes+="="+attributes[attributeName]));return document.cookie=key+"="+value+stringifiedAttributes}key||(result={});for(var cookies=document.cookie?document.cookie.split("; "):[],rdecode=/(%[0-9A-Z]{2})+/g,i=0;i<cookies.length;i++){var parts=cookies[i].split("="),cookie=parts.slice(1).join("=");this.json||'"'!==cookie.charAt(0)||(cookie=cookie.slice(1,-1));try{var name=parts[0].replace(rdecode,decodeURIComponent);if(cookie=converter.read?converter.read(cookie,name):converter(cookie,name)||cookie.replace(rdecode,decodeURIComponent),this.json)try{cookie=JSON.parse(cookie)}catch(e){}if(key===name){result=cookie;break}key||(result[name]=cookie)}catch(e){}}return result}}return api.set=api,api.get=function(key){return api.call(api,key)},api.getJSON=function(){return api.apply({json:!0},[].slice.call(arguments))},api.defaults={},api.remove=function(key,attributes){api(key,"",extend(attributes,{expires:-1}))},api.withConverter=init,api}(function(){})})});function CookieStorage(){}function Warn(options){this.disableWarnings=options.disableWarnings}function StorageHandler(options){if(this.warn=new Warn({}),this.storage=new CookieStorage,!0===options.__tryLocalStorageFirst)try{var localStorage=windowHandler.getWindow().localStorage;localStorage&&(this.storage=localStorage)}catch(e){this.warn.warning(e),this.warn.warning("Can't use localStorage. Using CookieStorage instead.")}}function Storage(options){this.handler=new StorageHandler(options)}function SSODataStorage(options){this.storage=new Storage(options)}function buildResponse(error,description){return{error:error,errorDescription:description}}function invalidToken(description){return buildResponse("invalid_token",description)}CookieStorage.prototype.getItem=function(key){return js_cookie.get(key)},CookieStorage.prototype.removeItem=function(key){js_cookie.remove(key)},CookieStorage.prototype.setItem=function(key,value,options){var params=objectHelper.extend({expires:1},options);js_cookie.set(key,value,params)},Warn.prototype.warning=function(message){this.disableWarnings||console.warn(message)},StorageHandler.prototype.failover=function(){this.storage instanceof DummyStorage?this.warn.warning("DummyStorage: ignore failover"):this.storage instanceof CookieStorage?(this.warn.warning("CookieStorage: failing over DummyStorage"),this.storage=new DummyStorage):(this.warn.warning("LocalStorage: failing over CookieStorage"),this.storage=new CookieStorage)},StorageHandler.prototype.getItem=function(key){try{return this.storage.getItem(key)}catch(e){return this.warn.warning(e),this.failover(),this.getItem(key)}},StorageHandler.prototype.removeItem=function(key){try{return this.storage.removeItem(key)}catch(e){return this.warn.warning(e),this.failover(),this.removeItem(key)}},StorageHandler.prototype.setItem=function(key,value,options){try{return this.storage.setItem(key,value,options)}catch(e){return this.warn.warning(e),this.failover(),this.setItem(key,value,options)}},Storage.prototype.getItem=function(key){var value=this.handler.getItem(key);try{return JSON.parse(value)}catch(_){return value}},Storage.prototype.removeItem=function(key){return this.handler.removeItem(key)},Storage.prototype.setItem=function(key,value,options){var json=JSON.stringify(value);return this.handler.setItem(key,json,options)},SSODataStorage.prototype.set=function(connection,sub){var ssodata={lastUsedConnection:connection,lastUsedSub:sub};this.storage.setItem("auth0.ssodata",JSON.stringify(ssodata))},SSODataStorage.prototype.get=function(){var ssodata=this.storage.getItem("auth0.ssodata");if(ssodata)return JSON.parse(ssodata)};var error={buildResponse:buildResponse,invalidToken:invalidToken};function wrapCallback(cb,options){return(options=options||{}).ignoreCasing=!!options.ignoreCasing&&options.ignoreCasing,function(err,data){var errObj;return err||data?(!err&&data.err&&(err=data.err,data=null),!err&&data.error&&(err=data,data=null),err?(errObj={original:err},err.response&&err.response.statusCode&&(errObj.statusCode=err.response.statusCode),err.response&&err.response.statusText&&(errObj.statusText=err.response.statusText),err.response&&err.response.body&&(err=err.response.body),err.err&&(err=err.err),errObj.code=err.code||err.error||err.error_code||err.status||null,errObj.description=err.errorDescription||err.error_description||err.description||err.error||err.details||err.err||null,options.forceLegacyError&&(errObj.error=errObj.code,errObj.error_description=errObj.description),err.name&&(errObj.name=err.name),err.policy&&(errObj.policy=err.policy),cb(errObj)):!data.type||"text/html"!==data.type&&"text/plain"!==data.type?options.ignoreCasing?cb(null,data.body||data):cb(null,objectHelper.toCamelCase(data.body||data,[],{keepOriginal:options.keepOriginalCasing})):cb(null,data.text)):cb(error.buildResponse("generic_error","Something went wrong"))}}var tokenParams=["realm","audience","client_id","client_secret","redirect_uri","scope","code","grant_type","username","password","refresh_token","assertion","client_assertion","client_assertion_type","code_verifier"],authorizeParams=["connection","connection_scope","auth0Client","owp","device","realm","protocol","_csrf","_intstate","login_ticket","client_id","response_type","response_mode","redirect_uri","audience","scope","state","nonce","display","prompt","max_age","ui_locales","claims_locales","id_token_hint","login_hint","acr_values","claims","registration","request","request_uri","code_challenge","code_challenge_method","access_type","display"];function oauthAuthorizeParams(warn,params){var notAllowed=objectHelper.getKeysNotIn(params,authorizeParams);return notAllowed.length>0&&warn.warning("Following parameters are not allowed on the `/authorize` endpoint: ["+notAllowed.join(",")+"]"),params}function oauthTokenParams(warn,params){return objectHelper.pick(params,tokenParams)}var parametersWhitelist={oauthTokenParams:oauthTokenParams,oauthAuthorizeParams:oauthAuthorizeParams},core=createCommonjsModule(function(module,exports){var CryptoJS;module.exports=(CryptoJS=CryptoJS||function(Math,undefined){var create=Object.create||function(){function F(){}return function(obj){var subtype;return F.prototype=obj,subtype=new F,F.prototype=null,subtype}}(),C={},C_lib=C.lib={},Base=C_lib.Base={extend:function(overrides){var subtype=create(this);return overrides&&subtype.mixIn(overrides),subtype.hasOwnProperty("init")&&this.init!==subtype.init||(subtype.init=function(){subtype.$super.init.apply(this,arguments)}),subtype.init.prototype=subtype,subtype.$super=this,subtype},create:function(){var instance=this.extend();return instance.init.apply(instance,arguments),instance},init:function(){},mixIn:function(properties){for(var propertyName in properties)properties.hasOwnProperty(propertyName)&&(this[propertyName]=properties[propertyName]);properties.hasOwnProperty("toString")&&(this.toString=properties.toString)},clone:function(){return this.init.prototype.extend(this)}},WordArray=C_lib.WordArray=Base.extend({init:function(words,sigBytes){words=this.words=words||[],this.sigBytes=null!=sigBytes?sigBytes:4*words.length},toString:function(encoder){return(encoder||Hex).stringify(this)},concat:function(wordArray){var thisWords=this.words,thatWords=wordArray.words,thisSigBytes=this.sigBytes,thatSigBytes=wordArray.sigBytes;if(this.clamp(),thisSigBytes%4)for(var i=0;i<thatSigBytes;i++){var thatByte=thatWords[i>>>2]>>>24-i%4*8&255;thisWords[thisSigBytes+i>>>2]|=thatByte<<24-(thisSigBytes+i)%4*8}else for(var i=0;i<thatSigBytes;i+=4)thisWords[thisSigBytes+i>>>2]=thatWords[i>>>2];return this.sigBytes+=thatSigBytes,this},clamp:function(){var words=this.words,sigBytes=this.sigBytes;words[sigBytes>>>2]&=4294967295<<32-sigBytes%4*8,words.length=Math.ceil(sigBytes/4)},clone:function(){var clone=Base.clone.call(this);return clone.words=this.words.slice(0),clone},random:function(nBytes){for(var rcache,words=[],r=function(m_w){var m_w=m_w,m_z=987654321,mask=4294967295;return function(){var result=((m_z=36969*(65535&m_z)+(m_z>>16)&mask)<<16)+(m_w=18e3*(65535&m_w)+(m_w>>16)&mask)&mask;return result/=4294967296,(result+=.5)*(Math.random()>.5?1:-1)}},i=0;i<nBytes;i+=4){var _r=r(4294967296*(rcache||Math.random()));rcache=987654071*_r(),words.push(4294967296*_r()|0)}return new WordArray.init(words,nBytes)}}),C_enc=C.enc={},Hex=C_enc.Hex={stringify:function(wordArray){for(var words=wordArray.words,sigBytes=wordArray.sigBytes,hexChars=[],i=0;i<sigBytes;i++){var bite=words[i>>>2]>>>24-i%4*8&255;hexChars.push((bite>>>4).toString(16)),hexChars.push((15&bite).toString(16))}return hexChars.join("")},parse:function(hexStr){for(var hexStrLength=hexStr.length,words=[],i=0;i<hexStrLength;i+=2)words[i>>>3]|=parseInt(hexStr.substr(i,2),16)<<24-i%8*4;return new WordArray.init(words,hexStrLength/2)}},Latin1=C_enc.Latin1={stringify:function(wordArray){for(var words=wordArray.words,sigBytes=wordArray.sigBytes,latin1Chars=[],i=0;i<sigBytes;i++){var bite=words[i>>>2]>>>24-i%4*8&255;latin1Chars.push(String.fromCharCode(bite))}return latin1Chars.join("")},parse:function(latin1Str){for(var latin1StrLength=latin1Str.length,words=[],i=0;i<latin1StrLength;i++)words[i>>>2]|=(255&latin1Str.charCodeAt(i))<<24-i%4*8;return new WordArray.init(words,latin1StrLength)}},Utf8=C_enc.Utf8={stringify:function(wordArray){try{return decodeURIComponent(escape(Latin1.stringify(wordArray)))}catch(e){throw new Error("Malformed UTF-8 data")}},parse:function(utf8Str){return Latin1.parse(unescape(encodeURIComponent(utf8Str)))}},BufferedBlockAlgorithm=C_lib.BufferedBlockAlgorithm=Base.extend({reset:function(){this._data=new WordArray.init,this._nDataBytes=0},_append:function(data){"string"==typeof data&&(data=Utf8.parse(data)),this._data.concat(data),this._nDataBytes+=data.sigBytes},_process:function(doFlush){var data=this._data,dataWords=data.words,dataSigBytes=data.sigBytes,blockSize=this.blockSize,blockSizeBytes=4*blockSize,nBlocksReady=dataSigBytes/blockSizeBytes,nWordsReady=(nBlocksReady=doFlush?Math.ceil(nBlocksReady):Math.max((0|nBlocksReady)-this._minBufferSize,0))*blockSize,nBytesReady=Math.min(4*nWordsReady,dataSigBytes);if(nWordsReady){for(var offset=0;offset<nWordsReady;offset+=blockSize)this._doProcessBlock(dataWords,offset);var processedWords=dataWords.splice(0,nWordsReady);data.sigBytes-=nBytesReady}return new WordArray.init(processedWords,nBytesReady)},clone:function(){var clone=Base.clone.call(this);return clone._data=this._data.clone(),clone},_minBufferSize:0}),C_algo=(C_lib.Hasher=BufferedBlockAlgorithm.extend({cfg:Base.extend(),init:function(cfg){this.cfg=this.cfg.extend(cfg),this.reset()},reset:function(){BufferedBlockAlgorithm.reset.call(this),this._doReset()},update:function(messageUpdate){return this._append(messageUpdate),this._process(),this},finalize:function(messageUpdate){messageUpdate&&this._append(messageUpdate);var hash=this._doFinalize();return hash},blockSize:16,_createHelper:function(hasher){return function(message,cfg){return new hasher.init(cfg).finalize(message)}},_createHmacHelper:function(hasher){return function(message,key){return new C_algo.HMAC.init(hasher,key).finalize(message)}}}),C.algo={});return C}(Math),CryptoJS)}),sha256=createCommonjsModule(function(module,exports){var CryptoJS;module.exports=(CryptoJS=core,function(Math){var C=CryptoJS,C_lib=C.lib,WordArray=C_lib.WordArray,Hasher=C_lib.Hasher,C_algo=C.algo,H=[],K=[];!function(){function isPrime(n){for(var sqrtN=Math.sqrt(n),factor=2;factor<=sqrtN;factor++)if(!(n%factor))return!1;return!0}function getFractionalBits(n){return 4294967296*(n-(0|n))|0}for(var n=2,nPrime=0;nPrime<64;)isPrime(n)&&(nPrime<8&&(H[nPrime]=getFractionalBits(Math.pow(n,.5))),K[nPrime]=getFractionalBits(Math.pow(n,1/3)),nPrime++),n++}();var W=[],SHA256=C_algo.SHA256=Hasher.extend({_doReset:function(){this._hash=new WordArray.init(H.slice(0))},_doProcessBlock:function(M,offset){for(var H=this._hash.words,a=H[0],b=H[1],c=H[2],d=H[3],e=H[4],f=H[5],g=H[6],h=H[7],i=0;i<64;i++){if(i<16)W[i]=0|M[offset+i];else{var gamma0x=W[i-15],gamma0=(gamma0x<<25|gamma0x>>>7)^(gamma0x<<14|gamma0x>>>18)^gamma0x>>>3,gamma1x=W[i-2],gamma1=(gamma1x<<15|gamma1x>>>17)^(gamma1x<<13|gamma1x>>>19)^gamma1x>>>10;W[i]=gamma0+W[i-7]+gamma1+W[i-16]}var maj=a&b^a&c^b&c,sigma0=(a<<30|a>>>2)^(a<<19|a>>>13)^(a<<10|a>>>22),t1=h+((e<<26|e>>>6)^(e<<21|e>>>11)^(e<<7|e>>>25))+(e&f^~e&g)+K[i]+W[i];h=g,g=f,f=e,e=d+t1|0,d=c,c=b,b=a,a=t1+(sigma0+maj)|0}H[0]=H[0]+a|0,H[1]=H[1]+b|0,H[2]=H[2]+c|0,H[3]=H[3]+d|0,H[4]=H[4]+e|0,H[5]=H[5]+f|0,H[6]=H[6]+g|0,H[7]=H[7]+h|0},_doFinalize:function(){var data=this._data,dataWords=data.words,nBitsTotal=8*this._nDataBytes,nBitsLeft=8*data.sigBytes;return dataWords[nBitsLeft>>>5]|=128<<24-nBitsLeft%32,dataWords[14+(nBitsLeft+64>>>9<<4)]=Math.floor(nBitsTotal/4294967296),dataWords[15+(nBitsLeft+64>>>9<<4)]=nBitsTotal,data.sigBytes=4*dataWords.length,this._process(),this._hash},clone:function(){var clone=Hasher.clone.call(this);return clone._hash=this._hash.clone(),clone}});C.SHA256=Hasher._createHelper(SHA256),C.HmacSHA256=Hasher._createHmacHelper(SHA256)}(Math),CryptoJS.SHA256)}),encBase64=createCommonjsModule(function(module,exports){var CryptoJS,C,WordArray;module.exports=(WordArray=(C=CryptoJS=core).lib.WordArray,C.enc.Base64={stringify:function(wordArray){var words=wordArray.words,sigBytes=wordArray.sigBytes,map=this._map;wordArray.clamp();for(var base64Chars=[],i=0;i<sigBytes;i+=3)for(var triplet=(words[i>>>2]>>>24-i%4*8&255)<<16|(words[i+1>>>2]>>>24-(i+1)%4*8&255)<<8|words[i+2>>>2]>>>24-(i+2)%4*8&255,j=0;j<4&&i+.75*j<sigBytes;j++)base64Chars.push(map.charAt(triplet>>>6*(3-j)&63));var paddingChar=map.charAt(64);if(paddingChar)for(;base64Chars.length%4;)base64Chars.push(paddingChar);return base64Chars.join("")},parse:function(base64Str){var base64StrLength=base64Str.length,map=this._map,reverseMap=this._reverseMap;if(!reverseMap){reverseMap=this._reverseMap=[];for(var j=0;j<map.length;j++)reverseMap[map.charCodeAt(j)]=j}var paddingChar=map.charAt(64);if(paddingChar){var paddingIndex=base64Str.indexOf(paddingChar);-1!==paddingIndex&&(base64StrLength=paddingIndex)}return function(base64Str,base64StrLength,reverseMap){for(var words=[],nBytes=0,i=0;i<base64StrLength;i++)if(i%4){var bits1=reverseMap[base64Str.charCodeAt(i-1)]<<i%4*2,bits2=reverseMap[base64Str.charCodeAt(i)]>>>6-i%4*2;words[nBytes>>>2]|=(bits1|bits2)<<24-nBytes%4*8,nBytes++}return WordArray.create(words,nBytes)}(base64Str,base64StrLength,reverseMap)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="},CryptoJS.enc.Base64)}),encHex=createCommonjsModule(function(module,exports){module.exports=core.enc.Hex}),jsbn=createCommonjsModule(function(module,exports){(function(){var dbits;function BigInteger(a,b,c){null!=a&&("number"==typeof a?this.fromNumber(a,b,c):null==b&&"string"!=typeof a?this.fromString(a,256):this.fromString(a,b))}function nbi(){return new BigInteger(null)}var inBrowser="undefined"!=typeof navigator;inBrowser&&"Microsoft Internet Explorer"==navigator.appName?(BigInteger.prototype.am=function(i,x,w,j,c,n){for(var xl=32767&x,xh=x>>15;--n>=0;){var l=32767&this[i],h=this[i++]>>15,m=xh*l+h*xl;c=((l=xl*l+((32767&m)<<15)+w[j]+(1073741823&c))>>>30)+(m>>>15)+xh*h+(c>>>30),w[j++]=1073741823&l}return c},dbits=30):inBrowser&&"Netscape"!=navigator.appName?(BigInteger.prototype.am=function(i,x,w,j,c,n){for(;--n>=0;){var v=x*this[i++]+w[j]+c;c=Math.floor(v/67108864),w[j++]=67108863&v}return c},dbits=26):(BigInteger.prototype.am=function(i,x,w,j,c,n){for(var xl=16383&x,xh=x>>14;--n>=0;){var l=16383&this[i],h=this[i++]>>14,m=xh*l+h*xl;c=((l=xl*l+((16383&m)<<14)+w[j]+c)>>28)+(m>>14)+xh*h,w[j++]=268435455&l}return c},dbits=28),BigInteger.prototype.DB=dbits,BigInteger.prototype.DM=(1<<dbits)-1,BigInteger.prototype.DV=1<<dbits;BigInteger.prototype.FV=Math.pow(2,52),BigInteger.prototype.F1=52-dbits,BigInteger.prototype.F2=2*dbits-52;var rr,vv,BI_RM="0123456789abcdefghijklmnopqrstuvwxyz",BI_RC=new Array;for(rr="0".charCodeAt(0),vv=0;vv<=9;++vv)BI_RC[rr++]=vv;for(rr="a".charCodeAt(0),vv=10;vv<36;++vv)BI_RC[rr++]=vv;for(rr="A".charCodeAt(0),vv=10;vv<36;++vv)BI_RC[rr++]=vv;function int2char(n){return BI_RM.charAt(n)}function intAt(s,i){var c=BI_RC[s.charCodeAt(i)];return null==c?-1:c}function nbv(i){var r=nbi();return r.fromInt(i),r}function nbits(x){var t,r=1;return 0!=(t=x>>>16)&&(x=t,r+=16),0!=(t=x>>8)&&(x=t,r+=8),0!=(t=x>>4)&&(x=t,r+=4),0!=(t=x>>2)&&(x=t,r+=2),0!=(t=x>>1)&&(x=t,r+=1),r}function Classic(m){this.m=m}function Montgomery(m){this.m=m,this.mp=m.invDigit(),this.mpl=32767&this.mp,this.mph=this.mp>>15,this.um=(1<<m.DB-15)-1,this.mt2=2*m.t}function op_and(x,y){return x&y}function op_or(x,y){return x|y}function op_xor(x,y){return x^y}function op_andnot(x,y){return x&~y}function lbit(x){if(0==x)return-1;var r=0;return 0==(65535&x)&&(x>>=16,r+=16),0==(255&x)&&(x>>=8,r+=8),0==(15&x)&&(x>>=4,r+=4),0==(3&x)&&(x>>=2,r+=2),0==(1&x)&&++r,r}function cbit(x){for(var r=0;0!=x;)x&=x-1,++r;return r}function NullExp(){}function nNop(x){return x}function Barrett(m){this.r2=nbi(),this.q3=nbi(),BigInteger.ONE.dlShiftTo(2*m.t,this.r2),this.mu=this.r2.divide(m),this.m=m}Classic.prototype.convert=function(x){return x.s<0||x.compareTo(this.m)>=0?x.mod(this.m):x},Classic.prototype.revert=function(x){return x},Classic.prototype.reduce=function(x){x.divRemTo(this.m,null,x)},Classic.prototype.mulTo=function(x,y,r){x.multiplyTo(y,r),this.reduce(r)},Classic.prototype.sqrTo=function(x,r){x.squareTo(r),this.reduce(r)},Montgomery.prototype.convert=function(x){var r=nbi();return x.abs().dlShiftTo(this.m.t,r),r.divRemTo(this.m,null,r),x.s<0&&r.compareTo(BigInteger.ZERO)>0&&this.m.subTo(r,r),r},Montgomery.prototype.revert=function(x){var r=nbi();return x.copyTo(r),this.reduce(r),r},Montgomery.prototype.reduce=function(x){for(;x.t<=this.mt2;)x[x.t++]=0;for(var i=0;i<this.m.t;++i){var j=32767&x[i],u0=j*this.mpl+((j*this.mph+(x[i]>>15)*this.mpl&this.um)<<15)&x.DM;for(x[j=i+this.m.t]+=this.m.am(0,u0,x,i,0,this.m.t);x[j]>=x.DV;)x[j]-=x.DV,x[++j]++}x.clamp(),x.drShiftTo(this.m.t,x),x.compareTo(this.m)>=0&&x.subTo(this.m,x)},Montgomery.prototype.mulTo=function(x,y,r){x.multiplyTo(y,r),this.reduce(r)},Montgomery.prototype.sqrTo=function(x,r){x.squareTo(r),this.reduce(r)},BigInteger.prototype.copyTo=function(r){for(var i=this.t-1;i>=0;--i)r[i]=this[i];r.t=this.t,r.s=this.s},BigInteger.prototype.fromInt=function(x){this.t=1,this.s=x<0?-1:0,x>0?this[0]=x:x<-1?this[0]=x+this.DV:this.t=0},BigInteger.prototype.fromString=function(s,b){var k;if(16==b)k=4;else if(8==b)k=3;else if(256==b)k=8;else if(2==b)k=1;else if(32==b)k=5;else{if(4!=b)return void this.fromRadix(s,b);k=2}this.t=0,this.s=0;for(var i=s.length,mi=!1,sh=0;--i>=0;){var x=8==k?255&s[i]:intAt(s,i);x<0?"-"==s.charAt(i)&&(mi=!0):(mi=!1,0==sh?this[this.t++]=x:sh+k>this.DB?(this[this.t-1]|=(x&(1<<this.DB-sh)-1)<<sh,this[this.t++]=x>>this.DB-sh):this[this.t-1]|=x<<sh,(sh+=k)>=this.DB&&(sh-=this.DB))}8==k&&0!=(128&s[0])&&(this.s=-1,sh>0&&(this[this.t-1]|=(1<<this.DB-sh)-1<<sh)),this.clamp(),mi&&BigInteger.ZERO.subTo(this,this)},BigInteger.prototype.clamp=function(){for(var c=this.s&this.DM;this.t>0&&this[this.t-1]==c;)--this.t},BigInteger.prototype.dlShiftTo=function(n,r){var i;for(i=this.t-1;i>=0;--i)r[i+n]=this[i];for(i=n-1;i>=0;--i)r[i]=0;r.t=this.t+n,r.s=this.s},BigInteger.prototype.drShiftTo=function(n,r){for(var i=n;i<this.t;++i)r[i-n]=this[i];r.t=Math.max(this.t-n,0),r.s=this.s},BigInteger.prototype.lShiftTo=function(n,r){var i,bs=n%this.DB,cbs=this.DB-bs,bm=(1<<cbs)-1,ds=Math.floor(n/this.DB),c=this.s<<bs&this.DM;for(i=this.t-1;i>=0;--i)r[i+ds+1]=this[i]>>cbs|c,c=(this[i]&bm)<<bs;for(i=ds-1;i>=0;--i)r[i]=0;r[ds]=c,r.t=this.t+ds+1,r.s=this.s,r.clamp()},BigInteger.prototype.rShiftTo=function(n,r){r.s=this.s;var ds=Math.floor(n/this.DB);if(ds>=this.t)r.t=0;else{var bs=n%this.DB,cbs=this.DB-bs,bm=(1<<bs)-1;r[0]=this[ds]>>bs;for(var i=ds+1;i<this.t;++i)r[i-ds-1]|=(this[i]&bm)<<cbs,r[i-ds]=this[i]>>bs;bs>0&&(r[this.t-ds-1]|=(this.s&bm)<<cbs),r.t=this.t-ds,r.clamp()}},BigInteger.prototype.subTo=function(a,r){for(var i=0,c=0,m=Math.min(a.t,this.t);i<m;)c+=this[i]-a[i],r[i++]=c&this.DM,c>>=this.DB;if(a.t<this.t){for(c-=a.s;i<this.t;)c+=this[i],r[i++]=c&this.DM,c>>=this.DB;c+=this.s}else{for(c+=this.s;i<a.t;)c-=a[i],r[i++]=c&this.DM,c>>=this.DB;c-=a.s}r.s=c<0?-1:0,c<-1?r[i++]=this.DV+c:c>0&&(r[i++]=c),r.t=i,r.clamp()},BigInteger.prototype.multiplyTo=function(a,r){var x=this.abs(),y=a.abs(),i=x.t;for(r.t=i+y.t;--i>=0;)r[i]=0;for(i=0;i<y.t;++i)r[i+x.t]=x.am(0,y[i],r,i,0,x.t);r.s=0,r.clamp(),this.s!=a.s&&BigInteger.ZERO.subTo(r,r)},BigInteger.prototype.squareTo=function(r){for(var x=this.abs(),i=r.t=2*x.t;--i>=0;)r[i]=0;for(i=0;i<x.t-1;++i){var c=x.am(i,x[i],r,2*i,0,1);(r[i+x.t]+=x.am(i+1,2*x[i],r,2*i+1,c,x.t-i-1))>=x.DV&&(r[i+x.t]-=x.DV,r[i+x.t+1]=1)}r.t>0&&(r[r.t-1]+=x.am(i,x[i],r,2*i,0,1)),r.s=0,r.clamp()},BigInteger.prototype.divRemTo=function(m,q,r){var pm=m.abs();if(!(pm.t<=0)){var pt=this.abs();if(pt.t<pm.t)return null!=q&&q.fromInt(0),void(null!=r&&this.copyTo(r));null==r&&(r=nbi());var y=nbi(),ts=this.s,ms=m.s,nsh=this.DB-nbits(pm[pm.t-1]);nsh>0?(pm.lShiftTo(nsh,y),pt.lShiftTo(nsh,r)):(pm.copyTo(y),pt.copyTo(r));var ys=y.t,y0=y[ys-1];if(0!=y0){var yt=y0*(1<<this.F1)+(ys>1?y[ys-2]>>this.F2:0),d1=this.FV/yt,d2=(1<<this.F1)/yt,e=1<<this.F2,i=r.t,j=i-ys,t=null==q?nbi():q;for(y.dlShiftTo(j,t),r.compareTo(t)>=0&&(r[r.t++]=1,r.subTo(t,r)),BigInteger.ONE.dlShiftTo(ys,t),t.subTo(y,y);y.t<ys;)y[y.t++]=0;for(;--j>=0;){var qd=r[--i]==y0?this.DM:Math.floor(r[i]*d1+(r[i-1]+e)*d2);if((r[i]+=y.am(0,qd,r,j,0,ys))<qd)for(y.dlShiftTo(j,t),r.subTo(t,r);r[i]<--qd;)r.subTo(t,r)}null!=q&&(r.drShiftTo(ys,q),ts!=ms&&BigInteger.ZERO.subTo(q,q)),r.t=ys,r.clamp(),nsh>0&&r.rShiftTo(nsh,r),ts<0&&BigInteger.ZERO.subTo(r,r)}}},BigInteger.prototype.invDigit=function(){if(this.t<1)return 0;var x=this[0];if(0==(1&x))return 0;var y=3&x;return(y=(y=(y=(y=y*(2-(15&x)*y)&15)*(2-(255&x)*y)&255)*(2-((65535&x)*y&65535))&65535)*(2-x*y%this.DV)%this.DV)>0?this.DV-y:-y},BigInteger.prototype.isEven=function(){return 0==(this.t>0?1&this[0]:this.s)},BigInteger.prototype.exp=function(e,z){if(e>4294967295||e<1)return BigInteger.ONE;var r=nbi(),r2=nbi(),g=z.convert(this),i=nbits(e)-1;for(g.copyTo(r);--i>=0;)if(z.sqrTo(r,r2),(e&1<<i)>0)z.mulTo(r2,g,r);else{var t=r;r=r2,r2=t}return z.revert(r)},BigInteger.prototype.toString=function(b){if(this.s<0)return"-"+this.negate().toString(b);var k;if(16==b)k=4;else if(8==b)k=3;else if(2==b)k=1;else if(32==b)k=5;else{if(4!=b)return this.toRadix(b);k=2}var d,km=(1<<k)-1,m=!1,r="",i=this.t,p=this.DB-i*this.DB%k;if(i-- >0)for(p<this.DB&&(d=this[i]>>p)>0&&(m=!0,r=int2char(d));i>=0;)p<k?(d=(this[i]&(1<<p)-1)<<k-p,d|=this[--i]>>(p+=this.DB-k)):(d=this[i]>>(p-=k)&km,p<=0&&(p+=this.DB,--i)),d>0&&(m=!0),m&&(r+=int2char(d));return m?r:"0"},BigInteger.prototype.negate=function(){var r=nbi();return BigInteger.ZERO.subTo(this,r),r},BigInteger.prototype.abs=function(){return this.s<0?this.negate():this},BigInteger.prototype.compareTo=function(a){var r=this.s-a.s;if(0!=r)return r;var i=this.t;if(0!=(r=i-a.t))return this.s<0?-r:r;for(;--i>=0;)if(0!=(r=this[i]-a[i]))return r;return 0},BigInteger.prototype.bitLength=function(){return this.t<=0?0:this.DB*(this.t-1)+nbits(this[this.t-1]^this.s&this.DM)},BigInteger.prototype.mod=function(a){var r=nbi();return this.abs().divRemTo(a,null,r),this.s<0&&r.compareTo(BigInteger.ZERO)>0&&a.subTo(r,r),r},BigInteger.prototype.modPowInt=function(e,m){var z;return z=e<256||m.isEven()?new Classic(m):new Montgomery(m),this.exp(e,z)},BigInteger.ZERO=nbv(0),BigInteger.ONE=nbv(1),NullExp.prototype.convert=nNop,NullExp.prototype.revert=nNop,NullExp.prototype.mulTo=function(x,y,r){x.multiplyTo(y,r)},NullExp.prototype.sqrTo=function(x,r){x.squareTo(r)},Barrett.prototype.convert=function(x){if(x.s<0||x.t>2*this.m.t)return x.mod(this.m);if(x.compareTo(this.m)<0)return x;var r=nbi();return x.copyTo(r),this.reduce(r),r},Barrett.prototype.revert=function(x){return x},Barrett.prototype.reduce=function(x){for(x.drShiftTo(this.m.t-1,this.r2),x.t>this.m.t+1&&(x.t=this.m.t+1,x.clamp()),this.mu.multiplyUpperTo(this.r2,this.m.t+1,this.q3),this.m.multiplyLowerTo(this.q3,this.m.t+1,this.r2);x.compareTo(this.r2)<0;)x.dAddOffset(1,this.m.t+1);for(x.subTo(this.r2,x);x.compareTo(this.m)>=0;)x.subTo(this.m,x)},Barrett.prototype.mulTo=function(x,y,r){x.multiplyTo(y,r),this.reduce(r)},Barrett.prototype.sqrTo=function(x,r){x.squareTo(r),this.reduce(r)};var rng_state,rng_pool,rng_pptr,lowprimes=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509,521,523,541,547,557,563,569,571,577,587,593,599,601,607,613,617,619,631,641,643,647,653,659,661,673,677,683,691,701,709,719,727,733,739,743,751,757,761,769,773,787,797,809,811,821,823,827,829,839,853,857,859,863,877,881,883,887,907,911,919,929,937,941,947,953,967,971,977,983,991,997],lplim=(1<<26)/lowprimes[lowprimes.length-1];function rng_seed_time(){var x;x=(new Date).getTime(),rng_pool[rng_pptr++]^=255&x,rng_pool[rng_pptr++]^=x>>8&255,rng_pool[rng_pptr++]^=x>>16&255,rng_pool[rng_pptr++]^=x>>24&255,rng_pptr>=rng_psize&&(rng_pptr-=rng_psize)}if(BigInteger.prototype.chunkSize=function(r){return Math.floor(Math.LN2*this.DB/Math.log(r))},BigInteger.prototype.toRadix=function(b){if(null==b&&(b=10),0==this.signum()||b<2||b>36)return"0";var cs=this.chunkSize(b),a=Math.pow(b,cs),d=nbv(a),y=nbi(),z=nbi(),r="";for(this.divRemTo(d,y,z);y.signum()>0;)r=(a+z.intValue()).toString(b).substr(1)+r,y.divRemTo(d,y,z);return z.intValue().toString(b)+r},BigInteger.prototype.fromRadix=function(s,b){this.fromInt(0),null==b&&(b=10);for(var cs=this.chunkSize(b),d=Math.pow(b,cs),mi=!1,j=0,w=0,i=0;i<s.length;++i){var x=intAt(s,i);x<0?"-"==s.charAt(i)&&0==this.signum()&&(mi=!0):(w=b*w+x,++j>=cs&&(this.dMultiply(d),this.dAddOffset(w,0),j=0,w=0))}j>0&&(this.dMultiply(Math.pow(b,j)),this.dAddOffset(w,0)),mi&&BigInteger.ZERO.subTo(this,this)},BigInteger.prototype.fromNumber=function(a,b,c){if("number"==typeof b)if(a<2)this.fromInt(1);else for(this.fromNumber(a,c),this.testBit(a-1)||this.bitwiseTo(BigInteger.ONE.shiftLeft(a-1),op_or,this),this.isEven()&&this.dAddOffset(1,0);!this.isProbablePrime(b);)this.dAddOffset(2,0),this.bitLength()>a&&this.subTo(BigInteger.ONE.shiftLeft(a-1),this);else{var x=new Array,t=7&a;x.length=1+(a>>3),b.nextBytes(x),t>0?x[0]&=(1<<t)-1:x[0]=0,this.fromString(x,256)}},BigInteger.prototype.bitwiseTo=function(a,op,r){var i,f,m=Math.min(a.t,this.t);for(i=0;i<m;++i)r[i]=op(this[i],a[i]);if(a.t<this.t){for(f=a.s&this.DM,i=m;i<this.t;++i)r[i]=op(this[i],f);r.t=this.t}else{for(f=this.s&this.DM,i=m;i<a.t;++i)r[i]=op(f,a[i]);r.t=a.t}r.s=op(this.s,a.s),r.clamp()},BigInteger.prototype.changeBit=function(n,op){var r=BigInteger.ONE.shiftLeft(n);return this.bitwiseTo(r,op,r),r},BigInteger.prototype.addTo=function(a,r){for(var i=0,c=0,m=Math.min(a.t,this.t);i<m;)c+=this[i]+a[i],r[i++]=c&this.DM,c>>=this.DB;if(a.t<this.t){for(c+=a.s;i<this.t;)c+=this[i],r[i++]=c&this.DM,c>>=this.DB;c+=this.s}else{for(c+=this.s;i<a.t;)c+=a[i],r[i++]=c&this.DM,c>>=this.DB;c+=a.s}r.s=c<0?-1:0,c>0?r[i++]=c:c<-1&&(r[i++]=this.DV+c),r.t=i,r.clamp()},BigInteger.prototype.dMultiply=function(n){this[this.t]=this.am(0,n-1,this,0,0,this.t),++this.t,this.clamp()},BigInteger.prototype.dAddOffset=function(n,w){if(0!=n){for(;this.t<=w;)this[this.t++]=0;for(this[w]+=n;this[w]>=this.DV;)this[w]-=this.DV,++w>=this.t&&(this[this.t++]=0),++this[w]}},BigInteger.prototype.multiplyLowerTo=function(a,n,r){var j,i=Math.min(this.t+a.t,n);for(r.s=0,r.t=i;i>0;)r[--i]=0;for(j=r.t-this.t;i<j;++i)r[i+this.t]=this.am(0,a[i],r,i,0,this.t);for(j=Math.min(a.t,n);i<j;++i)this.am(0,a[i],r,i,0,n-i);r.clamp()},BigInteger.prototype.multiplyUpperTo=function(a,n,r){--n;var i=r.t=this.t+a.t-n;for(r.s=0;--i>=0;)r[i]=0;for(i=Math.max(n-this.t,0);i<a.t;++i)r[this.t+i-n]=this.am(n-i,a[i],r,0,0,this.t+i-n);r.clamp(),r.drShiftTo(1,r)},BigInteger.prototype.modInt=function(n){if(n<=0)return 0;var d=this.DV%n,r=this.s<0?n-1:0;if(this.t>0)if(0==d)r=this[0]%n;else for(var i=this.t-1;i>=0;--i)r=(d*r+this[i])%n;return r},BigInteger.prototype.millerRabin=function(t){var n1=this.subtract(BigInteger.ONE),k=n1.getLowestSetBit();if(k<=0)return!1;var r=n1.shiftRight(k);(t=t+1>>1)>lowprimes.length&&(t=lowprimes.length);for(var a=nbi(),i=0;i<t;++i){a.fromInt(lowprimes[Math.floor(Math.random()*lowprimes.length)]);var y=a.modPow(r,this);if(0!=y.compareTo(BigInteger.ONE)&&0!=y.compareTo(n1)){for(var j=1;j++<k&&0!=y.compareTo(n1);)if(0==(y=y.modPowInt(2,this)).compareTo(BigInteger.ONE))return!1;if(0!=y.compareTo(n1))return!1}}return!0},BigInteger.prototype.clone=function(){var r=nbi();return this.copyTo(r),r},BigInteger.prototype.intValue=function(){if(this.s<0){if(1==this.t)return this[0]-this.DV;if(0==this.t)return-1}else{if(1==this.t)return this[0];if(0==this.t)return 0}return(this[1]&(1<<32-this.DB)-1)<<this.DB|this[0]},BigInteger.prototype.byteValue=function(){return 0==this.t?this.s:this[0]<<24>>24},BigInteger.prototype.shortValue=function(){return 0==this.t?this.s:this[0]<<16>>16},BigInteger.prototype.signum=function(){return this.s<0?-1:this.t<=0||1==this.t&&this[0]<=0?0:1},BigInteger.prototype.toByteArray=function(){var i=this.t,r=new Array;r[0]=this.s;var d,p=this.DB-i*this.DB%8,k=0;if(i-- >0)for(p<this.DB&&(d=this[i]>>p)!=(this.s&this.DM)>>p&&(r[k++]=d|this.s<<this.DB-p);i>=0;)p<8?(d=(this[i]&(1<<p)-1)<<8-p,d|=this[--i]>>(p+=this.DB-8)):(d=this[i]>>(p-=8)&255,p<=0&&(p+=this.DB,--i)),0!=(128&d)&&(d|=-256),0==k&&(128&this.s)!=(128&d)&&++k,(k>0||d!=this.s)&&(r[k++]=d);return r},BigInteger.prototype.equals=function(a){return 0==this.compareTo(a)},BigInteger.prototype.min=function(a){return this.compareTo(a)<0?this:a},BigInteger.prototype.max=function(a){return this.compareTo(a)>0?this:a},BigInteger.prototype.and=function(a){var r=nbi();return this.bitwiseTo(a,op_and,r),r},BigInteger.prototype.or=function(a){var r=nbi();return this.bitwiseTo(a,op_or,r),r},BigInteger.prototype.xor=function(a){var r=nbi();return this.bitwiseTo(a,op_xor,r),r},BigInteger.prototype.andNot=function(a){var r=nbi();return this.bitwiseTo(a,op_andnot,r),r},BigInteger.prototype.not=function(){for(var r=nbi(),i=0;i<this.t;++i)r[i]=this.DM&~this[i];return r.t=this.t,r.s=~this.s,r},BigInteger.prototype.shiftLeft=function(n){var r=nbi();return n<0?this.rShiftTo(-n,r):this.lShiftTo(n,r),r},BigInteger.prototype.shiftRight=function(n){var r=nbi();return n<0?this.lShiftTo(-n,r):this.rShiftTo(n,r),r},BigInteger.prototype.getLowestSetBit=function(){for(var i=0;i<this.t;++i)if(0!=this[i])return i*this.DB+lbit(this[i]);return this.s<0?this.t*this.DB:-1},BigInteger.prototype.bitCount=function(){for(var r=0,x=this.s&this.DM,i=0;i<this.t;++i)r+=cbit(this[i]^x);return r},BigInteger.prototype.testBit=function(n){var j=Math.floor(n/this.DB);return j>=this.t?0!=this.s:0!=(this[j]&1<<n%this.DB)},BigInteger.prototype.setBit=function(n){return this.changeBit(n,op_or)},BigInteger.prototype.clearBit=function(n){return this.changeBit(n,op_andnot)},BigInteger.prototype.flipBit=function(n){return this.changeBit(n,op_xor)},BigInteger.prototype.add=function(a){var r=nbi();return this.addTo(a,r),r},BigInteger.prototype.subtract=function(a){var r=nbi();return this.subTo(a,r),r},BigInteger.prototype.multiply=function(a){var r=nbi();return this.multiplyTo(a,r),r},BigInteger.prototype.divide=function(a){var r=nbi();return this.divRemTo(a,r,null),r},BigInteger.prototype.remainder=function(a){var r=nbi();return this.divRemTo(a,null,r),r},BigInteger.prototype.divideAndRemainder=function(a){var q=nbi(),r=nbi();return this.divRemTo(a,q,r),new Array(q,r)},BigInteger.prototype.modPow=function(e,m){var k,z,i=e.bitLength(),r=nbv(1);if(i<=0)return r;k=i<18?1:i<48?3:i<144?4:i<768?5:6,z=i<8?new Classic(m):m.isEven()?new Barrett(m):new Montgomery(m);var g=new Array,n=3,k1=k-1,km=(1<<k)-1;if(g[1]=z.convert(this),k>1){var g2=nbi();for(z.sqrTo(g[1],g2);n<=km;)g[n]=nbi(),z.mulTo(g2,g[n-2],g[n]),n+=2}var w,t,j=e.t-1,is1=!0,r2=nbi();for(i=nbits(e[j])-1;j>=0;){for(i>=k1?w=e[j]>>i-k1&km:(w=(e[j]&(1<<i+1)-1)<<k1-i,j>0&&(w|=e[j-1]>>this.DB+i-k1)),n=k;0==(1&w);)w>>=1,--n;if((i-=n)<0&&(i+=this.DB,--j),is1)g[w].copyTo(r),is1=!1;else{for(;n>1;)z.sqrTo(r,r2),z.sqrTo(r2,r),n-=2;n>0?z.sqrTo(r,r2):(t=r,r=r2,r2=t),z.mulTo(r2,g[w],r)}for(;j>=0&&0==(e[j]&1<<i);)z.sqrTo(r,r2),t=r,r=r2,r2=t,--i<0&&(i=this.DB-1,--j)}return z.revert(r)},BigInteger.prototype.modInverse=function(m){var ac=m.isEven();if(this.isEven()&&ac||0==m.signum())return BigInteger.ZERO;for(var u=m.clone(),v=this.clone(),a=nbv(1),b=nbv(0),c=nbv(0),d=nbv(1);0!=u.signum();){for(;u.isEven();)u.rShiftTo(1,u),ac?(a.isEven()&&b.isEven()||(a.addTo(this,a),b.subTo(m,b)),a.rShiftTo(1,a)):b.isEven()||b.subTo(m,b),b.rShiftTo(1,b);for(;v.isEven();)v.rShiftTo(1,v),ac?(c.isEven()&&d.isEven()||(c.addTo(this,c),d.subTo(m,d)),c.rShiftTo(1,c)):d.isEven()||d.subTo(m,d),d.rShiftTo(1,d);u.compareTo(v)>=0?(u.subTo(v,u),ac&&a.subTo(c,a),b.subTo(d,b)):(v.subTo(u,v),ac&&c.subTo(a,c),d.subTo(b,d))}return 0!=v.compareTo(BigInteger.ONE)?BigInteger.ZERO:d.compareTo(m)>=0?d.subtract(m):d.signum()<0?(d.addTo(m,d),d.signum()<0?d.add(m):d):d},BigInteger.prototype.pow=function(e){return this.exp(e,new NullExp)},BigInteger.prototype.gcd=function(a){var x=this.s<0?this.negate():this.clone(),y=a.s<0?a.negate():a.clone();if(x.compareTo(y)<0){var t=x;x=y,y=t}var i=x.getLowestSetBit(),g=y.getLowestSetBit();if(g<0)return x;for(i<g&&(g=i),g>0&&(x.rShiftTo(g,x),y.rShiftTo(g,y));x.signum()>0;)(i=x.getLowestSetBit())>0&&x.rShiftTo(i,x),(i=y.getLowestSetBit())>0&&y.rShiftTo(i,y),x.compareTo(y)>=0?(x.subTo(y,x),x.rShiftTo(1,x)):(y.subTo(x,y),y.rShiftTo(1,y));return g>0&&y.lShiftTo(g,y),y},BigInteger.prototype.isProbablePrime=function(t){var i,x=this.abs();if(1==x.t&&x[0]<=lowprimes[lowprimes.length-1]){for(i=0;i<lowprimes.length;++i)if(x[0]==lowprimes[i])return!0;return!1}if(x.isEven())return!1;for(i=1;i<lowprimes.length;){for(var m=lowprimes[i],j=i+1;j<lowprimes.length&&m<lplim;)m*=lowprimes[j++];for(m=x.modInt(m);i<j;)if(m%lowprimes[i++]==0)return!1}return x.millerRabin(t)},BigInteger.prototype.square=function(){var r=nbi();return this.squareTo(r),r},BigInteger.prototype.Barrett=Barrett,null==rng_pool){var t;if(rng_pool=new Array,rng_pptr=0,"undefined"!=typeof window&&window.crypto)if(window.crypto.getRandomValues){var ua=new Uint8Array(32);for(window.crypto.getRandomValues(ua),t=0;t<32;++t)rng_pool[rng_pptr++]=ua[t]}else if("Netscape"==navigator.appName&&navigator.appVersion<"5"){var z=window.crypto.random(32);for(t=0;t<z.length;++t)rng_pool[rng_pptr++]=255&z.charCodeAt(t)}for(;rng_pptr<rng_psize;)t=Math.floor(65536*Math.random()),rng_pool[rng_pptr++]=t>>>8,rng_pool[rng_pptr++]=255&t;rng_pptr=0,rng_seed_time()}function rng_get_byte(){if(null==rng_state){for(rng_seed_time(),(rng_state=new Arcfour).init(rng_pool),rng_pptr=0;rng_pptr<rng_pool.length;++rng_pptr)rng_pool[rng_pptr]=0;rng_pptr=0}return rng_state.next()}function SecureRandom(){}function Arcfour(){this.i=0,this.j=0,this.S=new Array}SecureRandom.prototype.nextBytes=function(ba){var i;for(i=0;i<ba.length;++i)ba[i]=rng_get_byte()},Arcfour.prototype.init=function(key){var i,j,t;for(i=0;i<256;++i)this.S[i]=i;for(j=0,i=0;i<256;++i)j=j+this.S[i]+key[i%key.length]&255,t=this.S[i],this.S[i]=this.S[j],this.S[j]=t;this.i=0,this.j=0},Arcfour.prototype.next=function(){var t;return this.i=this.i+1&255,this.j=this.j+this.S[this.i]&255,t=this.S[this.i],this.S[this.i]=this.S[this.j],this.S[this.j]=t,this.S[t+this.S[this.i]&255]};var rng_psize=256;BigInteger.SecureRandom=SecureRandom,BigInteger.BigInteger=BigInteger,module.exports=BigInteger}).call(commonjsGlobal)}),BigInteger=jsbn.BigInteger,DigestInfoHead={sha1:"3021300906052b0e03021a05000414",sha224:"302d300d06096086480165030402040500041c",sha256:"3031300d060960864801650304020105000420",sha384:"3041300d060960864801650304020205000430",sha512:"3051300d060960864801650304020305000440",md2:"3020300c06082a864886f70d020205000410",md5:"3020300c06082a864886f70d020505000410",ripemd160:"3021300906052b2403020105000414"},DigestAlgs={sha256:sha256};function RSAVerifier(modulus,exp){if(this.n=null,this.e=0,!(null!=modulus&&null!=exp&&modulus.length>0&&exp.length>0))throw new Error("Invalid key data");this.n=new BigInteger(modulus,16),this.e=parseInt(exp,16)}function getAlgorithmFromDigest(hDigestInfo){for(var algName in DigestInfoHead){var head=DigestInfoHead[algName],len=head.length;if(hDigestInfo.substring(0,len)===head)return{alg:algName,hash:hDigestInfo.substring(len)}}return[]}RSAVerifier.prototype.verify=function(msg,encsig){encsig=encsig.replace(/[^0-9a-f]|[\s\n]]/gi,"");var sig=new BigInteger(encsig,16);if(sig.bitLength()>this.n.bitLength())throw new Error("Signature does not match with the key modulus.");var digestInfo=getAlgorithmFromDigest(sig.modPowInt(this.e,this.n).toString(16).replace(/^1f+00/,""));if(0===digestInfo.length)return!1;if(!DigestAlgs.hasOwnProperty(digestInfo.alg))throw new Error("Hashing algorithm is not supported.");var msgHash=DigestAlgs[digestInfo.alg](msg).toString();return digestInfo.hash===msgHash};var rsaVerifier=RSAVerifier;function padding$1(str){var mod=str.length%4;return 0===mod?str:str+new Array(1+(4-mod)).join("=")}function byteArrayToString$1(array){for(var result="",i=0;i<array.length;i++)result+=String.fromCharCode(array[i]);return result}function stringToByteArray$1(str){for(var arr=new Array(str.length),a=0;a<str.length;a++)arr[a]=str.charCodeAt(a);return arr}function byteArrayToHex(raw){for(var HEX="",i=0;i<raw.length;i++){var _hex=raw[i].toString(16);HEX+=2===_hex.length?_hex:"0"+_hex}return HEX}function encodeString(str){return base64Js.fromByteArray(stringToByteArray$1(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,function(match,p1){return String.fromCharCode("0x"+p1)}))).replace(/\+/g,"-").replace(/\//g,"_")}function decodeToString(str){return str=padding$1(str).replace(/\-/g,"+").replace(/_/g,"/"),decodeURIComponent(byteArrayToString$1(base64Js.toByteArray(str)).split("").map(function(c){return"%"+("00"+c.charCodeAt(0).toString(16)).slice(-2)}).join(""))}function decodeToHEX(str){return byteArrayToHex(base64Js.toByteArray(padding$1(str)))}function base64ToBase64Url(base64String){var SAFE_URL_ENCODING_MAPPING={"+":"-","/":"_","=":""};return base64String.replace(/[+\/=]/g,function(m){return SAFE_URL_ENCODING_MAPPING[m]})}var base64_1={encodeString:encodeString,decodeToString:decodeToString,byteArrayToString:byteArrayToString$1,stringToByteArray:stringToByteArray$1,padding:padding$1,byteArrayToHex:byteArrayToHex,decodeToHEX:decodeToHEX,base64ToBase64Url:base64ToBase64Url},urlJoin$1=createCommonjsModule(function(module){var context,definition;context=commonjsGlobal,definition=function(){return function(){var input=arguments;"object"==typeof arguments[0]&&(input=arguments[0],arguments[1]);var joined=[].slice.call(input,0).join("/");return joined.replace(/:\//g,"://").replace(/([^:\s])\/+/g,"$1/").replace(/\/(\?|&|#[^!])/g,"$1").replace(/(\?.+)\?/g,"$1&")}},module.exports?module.exports=definition():context.urljoin=definition()});function process(jwks){return{modulus:base64_1.decodeToHEX(jwks.n),exp:base64_1.decodeToHEX(jwks.e)}}function getJWKS(options,cb){var url=options.jwksURI||urlJoin$1(options.iss,".well-known","jwks.json");return client.get(url).end(function(err,data){var a,key,matchingKey=null;if(err)return cb(err);for(a=0;a<data.body.keys.length&&null===matchingKey;a++)(key=data.body.keys[a]).kid===options.kid&&(matchingKey=key);return cb(null,process(matchingKey))})}var jwks={process:process,getJWKS:getJWKS};function ConfigurationError(message){this.name="ConfigurationError",this.message=message||""}function TokenValidationError(message){this.name="TokenValidationError",this.message=message||""}ConfigurationError.prototype=Error.prototype,TokenValidationError.prototype=Error.prototype;var error$1={ConfigurationError:ConfigurationError,TokenValidationError:TokenValidationError};function DummyCache(){}DummyCache.prototype.get=function(){return null},DummyCache.prototype.has=function(){return!1},DummyCache.prototype.set=function(){};var dummyCache=DummyCache,supportedAlgs=["RS256"];function IdTokenVerifier(parameters){var options=parameters||{};if(this.jwksCache=options.jwksCache||new dummyCache,this.expectedAlg=options.expectedAlg||"RS256",this.issuer=options.issuer,this.audience=options.audience,this.leeway=options.leeway||0,this.__disableExpirationCheck=options.__disableExpirationCheck||!1,this.jwksURI=options.jwksURI,this.leeway<0||this.leeway>60)throw new error$1.ConfigurationError("The leeway should be positive and lower than a minute.");if(-1===supportedAlgs.indexOf(this.expectedAlg))throw new error$1.ConfigurationError("Algorithm "+this.expectedAlg+" is not supported. (Expected algs: ["+supportedAlgs.join(",")+"])")}IdTokenVerifier.prototype.verify=function(token,nonce,cb){var jwt=this.decode(token);if(jwt instanceof Error)return cb(jwt,!1);var headAndPayload=jwt.encoded.header+"."+jwt.encoded.payload,signature=base64_1.decodeToHEX(jwt.encoded.signature),alg=jwt.header.alg,kid=jwt.header.kid,aud=jwt.payload.aud,iss=jwt.payload.iss,exp=jwt.payload.exp,nbf=jwt.payload.nbf,tnonce=jwt.payload.nonce||null;if(this.issuer!==iss)return cb(new error$1.TokenValidationError("Issuer "+iss+" is not valid."),!1);if(this.audience!==aud)return cb(new error$1.TokenValidationError("Audience "+aud+" is not valid."),!1);if(this.expectedAlg!==alg)return cb(new error$1.TokenValidationError("Algorithm "+alg+" is not supported. (Expected algs: ["+supportedAlgs.join(",")+"])"),!1);if(tnonce!==nonce)return cb(new error$1.TokenValidationError("Nonce does not match."),!1);var expirationError=this.verifyExpAndNbf(exp,nbf);return expirationError?cb(expirationError,!1):this.getRsaVerifier(iss,kid,function(err,rsaVerifier$$1){return err?cb(err):rsaVerifier$$1.verify(headAndPayload,signature)?cb(null,jwt.payload):cb(new error$1.TokenValidationError("Invalid signature."))})},IdTokenVerifier.prototype.verifyExpAndNbf=function(exp,nbf){var now=new Date,expDate=new Date(0),nbfDate=new Date(0);return this.__disableExpirationCheck?null:(expDate.setUTCSeconds(exp+this.leeway),now>expDate?new error$1.TokenValidationError("Expired token."):void 0===nbf?null:(nbfDate.setUTCSeconds(nbf-this.leeway),now<nbfDate?new error$1.TokenValidationError("The token is not valid until later in the future. Please check your computed clock."):null))},IdTokenVerifier.prototype.verifyExpAndIat=function(exp,iat){var now=new Date,expDate=new Date(0),iatDate=new Date(0);return this.__disableExpirationCheck?null:(expDate.setUTCSeconds(exp+this.leeway),now>expDate?new error$1.TokenValidationError("Expired token."):(iatDate.setUTCSeconds(iat-this.leeway),now<iatDate?new error$1.TokenValidationError("The token was issued in the future. Please check your computed clock."):null))},IdTokenVerifier.prototype.getRsaVerifier=function(iss,kid,cb){var _this=this,cachekey=iss+kid;if(this.jwksCache.has(cachekey)){var keyInfo=this.jwksCache.get(cachekey);cb(null,new rsaVerifier(keyInfo.modulus,keyInfo.exp))}else jwks.getJWKS({jwksURI:this.jwksURI,iss:iss,kid:kid},function(err,keyInfo){return err?cb(err):(_this.jwksCache.set(cachekey,keyInfo),cb(null,new rsaVerifier(keyInfo.modulus,keyInfo.exp)))})},IdTokenVerifier.prototype.decode=function(token){var header,payload,parts=token.split(".");if(3!==parts.length)return new error$1.TokenValidationError("Cannot decode a malformed JWT");try{header=JSON.parse(base64_1.decodeToString(parts[0])),payload=JSON.parse(base64_1.decodeToString(parts[1]))}catch(e){return new error$1.TokenValidationError("Token header or payload is not valid JSON")}return{header:header,payload:payload,encoded:{header:parts[0],payload:parts[1],signature:parts[2]}}},IdTokenVerifier.prototype.validateAccessToken=function(accessToken,alg,atHash,cb){if(this.expectedAlg!==alg)return cb(new error$1.TokenValidationError("Algorithm "+alg+" is not supported. (Expected alg: "+this.expectedAlg+")"));var sha256AccessToken=sha256(accessToken),hashToHex=encHex.stringify(sha256AccessToken),hashToHexFirstHalf=hashToHex.substring(0,hashToHex.length/2),hashFirstHalfWordArray=encHex.parse(hashToHexFirstHalf),hashFirstHalfBase64=encBase64.stringify(hashFirstHalfWordArray);return cb(base64_1.base64ToBase64Url(hashFirstHalfBase64)!==atHash?new error$1.TokenValidationError("Invalid access_token"):null)};var src=IdTokenVerifier;function PluginHandler(webAuth,plugins){this.plugins=plugins;for(var a=0;a<this.plugins.length;a++){if(this.plugins[a].version!==version.raw){var pluginName="";throw this.plugins[a].constructor&&this.plugins[a].constructor.name&&(pluginName=this.plugins[a].constructor.name),new Error("Plugin "+pluginName+" version ("+this.plugins[a].version+") is not compatible with the SDK version ("+version.raw+")")}this.plugins[a].setWebAuth(webAuth)}}function randomString(length){var bytes=new Uint8Array(length),result=[],charset="0123456789ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvwxyz-._~",cryptoObj=windowHandler.getWindow().crypto||windowHandler.getWindow().msCrypto;if(!cryptoObj)return null;for(var random=cryptoObj.getRandomValues(bytes),a=0;a<random.length;a++)result.push(charset[random[a]%charset.length]);return result.join("")}PluginHandler.prototype.get=function(extensibilityPoint){for(var a=0;a<this.plugins.length;a++)if(this.plugins[a].supports(extensibilityPoint))return this.plugins[a].init();return null};var random={randomString:randomString},MINUTES_15=1/96,MINUTES_30=1/48,DEFAULT_NAMESPACE="com.auth0.auth.";function TransactionManager(options){var transaction=options.transaction||{};this.namespace=transaction.namespace||DEFAULT_NAMESPACE,this.keyLength=transaction.keyLength||32,this.storage=new Storage(options),this.options=options}function IframeHandler(options){if(this.url=options.url,this.callback=options.callback,this.timeout=options.timeout||6e4,this.timeoutCallback=options.timeoutCallback||null,this.eventListenerType=options.eventListenerType||"message",this.iframe=null,this.timeoutHandle=null,this._destroyTimeout=null,this.transientMessageEventListener=null,this.proxyEventListener=null,this.eventValidator=options.eventValidator||{isValid:function(){return!0}},"function"!=typeof this.callback)throw new Error("options.callback must be a function")}function runWebMessageFlow(authorizeUrl,options,callback){new IframeHandler({url:authorizeUrl,eventListenerType:"message",callback:function(eventData){callback(null,eventData)},timeout:options.timeout,eventValidator:{isValid:function(eventData){return"authorization_response"===eventData.event.data.type&&options.state===eventData.event.data.response.state}},timeoutCallback:function(){callback({error:"timeout",error_description:"Timeout during executing web_message communication",state:options.state})}}).init()}function WebMessageHandler(webAuth){this.webAuth=webAuth,this.warn=new Warn(webAuth.baseOptions)}function CrossOriginAuthentication(webAuth,options){this.webAuth=webAuth,this.baseOptions=options,this.request=new RequestBuilder(options),this.webMessageHandler=new WebMessageHandler(webAuth),this.storage=new Storage(options)}function getFragment(name){var parts=("&"+windowHandler.getWindow().location.hash.substring(1)).split("&"+name+"=");if(2===parts.length)return parts.pop().split("&").shift()}function createKey(origin,coId){return["co/verifier",encodeURIComponent(origin),encodeURIComponent(coId)].join("/")}function tryGetVerifier(storage,key){try{var verifier=storage.getItem(key);return storage.removeItem(key),verifier||""}catch(e){return""}}function Redirect(auth0,options){this.webAuth=auth0,this.baseOptions=options,this.crossOriginAuthentication=new CrossOriginAuthentication(auth0,this.baseOptions),this.warn=new Warn({disableWarnings:!!options._disableDeprecationWarnings})}TransactionManager.prototype.process=function(options){if(!options.responseType)throw new Error("responseType is required");var lastUsedConnection=options.realm||options.connection,responseTypeIncludesIdToken=-1!==options.responseType.indexOf("id_token"),transaction=this.generateTransaction(options.appState,options.state,options.nonce,lastUsedConnection,responseTypeIncludesIdToken);return options.state||(options.state=transaction.state),responseTypeIncludesIdToken&&!options.nonce&&(options.nonce=transaction.nonce),options},TransactionManager.prototype.generateTransaction=function(appState,state,nonce,lastUsedConnection,generateNonce){return state=state||random.randomString(this.keyLength),nonce=nonce||(generateNonce?random.randomString(this.keyLength):null),windowHandler.getWindow().location.host===this.options.domain||this.storage.setItem(this.namespace+state,{nonce:nonce,appState:appState,state:state,lastUsedConnection:lastUsedConnection},{expires:MINUTES_30}),{state:state,nonce:nonce}},TransactionManager.prototype.getStoredTransaction=function(state){var transactionData;return transactionData=this.storage.getItem(this.namespace+state),this.clearTransaction(state),transactionData},TransactionManager.prototype.clearTransaction=function(state){this.storage.removeItem(this.namespace+state)},IframeHandler.prototype.init=function(){var _this=this,_window=windowHandler.getWindow();switch(this.iframe=_window.document.createElement("iframe"),this.iframe.style.display="none",this.proxyEventListener=function(e){_this.eventListener(e)},this.eventListenerType){case"message":this.eventSourceObject=_window;break;case"load":this.eventSourceObject=this.iframe;break;default:throw new Error("Unsupported event listener type: "+this.eventListenerType)}this.eventSourceObject.addEventListener(this.eventListenerType,this.proxyEventListener,!1),_window.document.body.appendChild(this.iframe),this.iframe.src=this.url,this.timeoutHandle=setTimeout(function(){_this.timeoutHandler()},this.timeout)},IframeHandler.prototype.eventListener=function(event){var eventData={event:event,sourceObject:this.eventSourceObject};this.eventValidator.isValid(eventData)&&(this.destroy(),this.callback(eventData))},IframeHandler.prototype.timeoutHandler=function(){this.destroy(),this.timeoutCallback&&this.timeoutCallback()},IframeHandler.prototype.destroy=function(){var _this=this;clearTimeout(this.timeoutHandle),this._destroyTimeout=setTimeout(function(){_this.eventSourceObject.removeEventListener(_this.eventListenerType,_this.proxyEventListener,!1),_this.iframe.parentNode&&_this.iframe.parentNode.removeChild(_this.iframe)},0)},WebMessageHandler.prototype.run=function(options,cb){var _this=this;options.responseMode="web_message",options.prompt="none";var currentOrigin=windowHandler.getOrigin(),redirectUriOrigin=objectHelper.getOriginFromUrl(options.redirectUri);if(redirectUriOrigin&&currentOrigin!==redirectUriOrigin)return cb({error:"origin_mismatch",error_description:"The redirectUri's origin ("+redirectUriOrigin+") should match the window's origin ("+currentOrigin+")."});runWebMessageFlow(this.webAuth.client.buildAuthorizeUrl(options),options,function(err,eventData){var error=err;if(!err&&eventData.event.data.response.error&&(error=eventData.event.data.response),!error){var parsedHash=eventData.event.data.response;return _this.webAuth.validateAuthenticationResponse(options,parsedHash,cb)}return"consent_required"===error.error&&"localhost"===windowHandler.getWindow().location.hostname&&_this.warn.warning("Consent Required. Consent can't be skipped on localhost. Read more here: https://auth0.com/docs/api-auth/user-consent#skipping-consent-for-first-party-clients"),_this.webAuth.transactionManager.clearTransaction(error.state),cb(objectHelper.pick(error,["error","error_description"]))})},CrossOriginAuthentication.prototype.login=function(options,cb){var _this=this,url=urlJoin(this.baseOptions.rootUrl,"/co/authenticate");options.username=options.username||options.email,delete options.email;var authenticateBody={client_id:options.clientID||this.baseOptions.clientID,username:options.username};options.password&&(authenticateBody.password=options.password),options.otp&&(authenticateBody.otp=options.otp);var realm=options.realm||this.baseOptions.realm;if(realm){var credentialType=options.credentialType||this.baseOptions.credentialType||"http://auth0.com/oauth/grant-type/password-realm";authenticateBody.realm=realm,authenticateBody.credential_type=credentialType}else authenticateBody.credential_type="password";this.request.post(url).withCredentials().send(authenticateBody).end(function(err,data){if(err){var errorObject=err.response&&err.response.body||{error:"request_error",error_description:JSON.stringify(err)};return wrapCallback(cb,{forceLegacyError:!0})(errorObject)}var popupMode=!0===options.popup;options=objectHelper.blacklist(options,["password","credentialType","otp","popup"]);var authorizeOptions=objectHelper.merge(options).with({loginTicket:data.body.login_ticket}),key=createKey(_this.baseOptions.rootUrl,data.body.co_id);_this.storage.setItem(key,data.body.co_verifier,{expires:MINUTES_15}),popupMode?_this.webMessageHandler.run(authorizeOptions,wrapCallback(cb,{forceLegacyError:!0})):_this.webAuth.authorize(authorizeOptions)})},CrossOriginAuthentication.prototype.callback=function(){var targetOrigin=decodeURIComponent(getFragment("origin")),theWindow=windowHandler.getWindow(),_this=this;theWindow.addEventListener("message",function(evt){if("co_verifier_request"===evt.data.type){var key=createKey(evt.origin,evt.data.request.id),verifier=tryGetVerifier(_this.storage,key);evt.source.postMessage({type:"co_verifier_response",response:{verifier:verifier}},evt.origin)}}),theWindow.parent.postMessage({type:"ready"},targetOrigin)},Redirect.prototype.loginWithCredentials=function(options,cb){options.realm=options.realm||options.connection,delete options.connection,this.crossOriginAuthentication.login(options,cb)},Redirect.prototype.signupAndLogin=function(options,cb){var _this=this;return this.webAuth.client.dbConnection.signup(options,function(err){return err?cb(err):(options.realm=options.realm||options.connection,delete options.connection,_this.webAuth.login(options,cb))})};var winchan=createCommonjsModule(function(module){var WinChan=function(){var RELAY_FRAME_NAME="__winchan_relay_frame",CLOSE_CMD="die";function addListener(w,event,cb){w.attachEvent?w.attachEvent("on"+event,cb):w.addEventListener&&w.addEventListener(event,cb,!1)}function removeListener(w,event,cb){w.detachEvent?w.detachEvent("on"+event,cb):w.removeEventListener&&w.removeEventListener(event,cb,!1)}function extractOrigin(url){/^https?:\/\//.test(url)||(url=window.location.href);var m=/^(https?:\/\/[\-_a-zA-Z\.0-9:]+)/.exec(url);return m?m[1]:url}var isIE=function(){if("undefined"==typeof navigator)return!1;var rv=-1,ua=navigator.userAgent;"Microsoft Internet Explorer"===navigator.appName?null!=new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})").exec(ua)&&(rv=parseFloat(RegExp.$1)):ua.indexOf("Trident")>-1&&null!==new RegExp("rv:([0-9]{2,2}[.0-9]{0,})").exec(ua)&&(rv=parseFloat(RegExp.$1));return rv>=8}();return"undefined"!=typeof window&&window.JSON&&window.JSON.stringify&&window.JSON.parse&&window.postMessage?{open:function(opts,cb){if(!cb)throw"missing required callback argument";var err,iframe;opts.url||(err="missing required 'url' parameter"),opts.relay_url||(err="missing required 'relay_url' parameter"),err&&setTimeout(function(){cb(err)},0),opts.window_name||(opts.window_name=null),opts.window_features&&!function(){try{var userAgent=navigator.userAgent;return-1!=userAgent.indexOf("Fennec/")||-1!=userAgent.indexOf("Firefox/")&&-1!=userAgent.indexOf("Android")}catch(e){}return!1}()||(opts.window_features=void 0);var messageTarget,origin=opts.origin||extractOrigin(opts.url);if(origin!==extractOrigin(opts.relay_url))return setTimeout(function(){cb("invalid arguments: origin of url and relay_url must match")},0);isIE&&((iframe=document.createElement("iframe")).setAttribute("src",opts.relay_url),iframe.style.display="none",iframe.setAttribute("name",RELAY_FRAME_NAME),document.body.appendChild(iframe),messageTarget=iframe.contentWindow);var w=opts.popup||window.open(opts.url,opts.window_name,opts.window_features);opts.popup&&(w.location.href=opts.url),messageTarget||(messageTarget=w);var closeInterval=setInterval(function(){w&&w.closed&&(cleanup(),cb&&(cb("User closed the popup window"),cb=null))},500),req=JSON.stringify({a:"request",d:opts.params});function cleanup(){if(iframe&&document.body.removeChild(iframe),iframe=void 0,closeInterval&&(closeInterval=clearInterval(closeInterval)),removeListener(window,"message",onMessage),removeListener(window,"unload",cleanup),w)try{w.close()}catch(securityViolation){messageTarget.postMessage(CLOSE_CMD,origin)}w=messageTarget=void 0}function onMessage(e){if(e.origin===origin){try{var d=JSON.parse(e.data)}catch(err){if(cb)return cb(err);throw err}"ready"===d.a?messageTarget.postMessage(req,origin):"error"===d.a?(cleanup(),cb&&(cb(d.d),cb=null)):"response"===d.a&&(cleanup(),cb&&(cb(null,d.d),cb=null))}}return addListener(window,"unload",cleanup),addListener(window,"message",onMessage),{close:cleanup,focus:function(){if(w)try{w.focus()}catch(e){}}}},onOpen:function(cb){var o="*",msgTarget=isIE?function(){window.location;for(var frames=window.opener.frames,i=frames.length-1;i>=0;i--)try{if(frames[i].location.protocol===window.location.protocol&&frames[i].location.host===window.location.host&&frames[i].name===RELAY_FRAME_NAME)return frames[i]}catch(e){}}():window.opener;if(!msgTarget)throw"can't find relay frame";function doPost(msg){msg=JSON.stringify(msg),isIE?msgTarget.doPost(msg,o):msgTarget.postMessage(msg,o)}function onDie(e){if(e.data===CLOSE_CMD)try{window.close()}catch(o_O){}}addListener(isIE?msgTarget:window,"message",function onMessage(e){var d;try{d=JSON.parse(e.data)}catch(err){}d&&"request"===d.a&&(removeListener(window,"message",onMessage),o=e.origin,cb&&setTimeout(function(){cb(o,d.d,function(r){cb=void 0,doPost({a:"response",d:r})})},0))}),addListener(isIE?msgTarget:window,"message",onDie);try{doPost({a:"ready"})}catch(e){addListener(msgTarget,"load",function(e){doPost({a:"ready"})})}var onUnload=function(){try{removeListener(isIE?msgTarget:window,"message",onDie)}catch(ohWell){}cb&&doPost({a:"error",d:"client closed window"}),cb=void 0;try{window.close()}catch(e){}};return addListener(window,"unload",onUnload),{detach:function(){removeListener(window,"unload",onUnload)}}}}:{open:function(url,winopts,arg,cb){setTimeout(function(){cb("unsupported browser")},0)},onOpen:function(cb){setTimeout(function(){cb("unsupported browser")},0)}}}();module.exports&&(module.exports=WinChan)});function extractOrigin(url){/^https?:\/\//.test(url)||(url=window.location.href);var m=/^(https?:\/\/[-_a-zA-Z.0-9:]+)/.exec(url);return m?m[1]:url}var urlHelper={extractOrigin:extractOrigin};function PopupHandler(){this._current_popup=null}function Popup(webAuth,options){this.baseOptions=options,this.baseOptions.popupOrigin=options.popupOrigin,this.client=webAuth.client,this.webAuth=webAuth,this.transactionManager=new TransactionManager(this.baseOptions),this.crossOriginAuthentication=new CrossOriginAuthentication(webAuth,this.baseOptions),this.warn=new Warn({disableWarnings:!!options._disableDeprecationWarnings})}function SilentAuthenticationHandler(options){this.authenticationUrl=options.authenticationUrl,this.timeout=options.timeout||6e4,this.handler=null,this.postMessageDataType=options.postMessageDataType||!1,this.postMessageOrigin=options.postMessageOrigin||windowHandler.getWindow().location.origin||windowHandler.getWindow().location.protocol+"//"+windowHandler.getWindow().location.hostname+(windowHandler.getWindow().location.port?":"+windowHandler.getWindow().location.port:"")}function UsernamePassword(options){this.baseOptions=options,this.request=new RequestBuilder(options),this.transactionManager=new TransactionManager(this.baseOptions)}function HostedPages(client,options){this.baseOptions=options,this.client=client,this.baseOptions.universalLoginPage=!0,this.request=new RequestBuilder(this.baseOptions),this.warn=new Warn({disableWarnings:!!options._disableDeprecationWarnings})}function WebAuth(options){assert.check(options,{type:"object",message:"options parameter is not valid"},{domain:{type:"string",message:"domain option is required"},clientID:{type:"string",message:"clientID option is required"},responseType:{optional:!0,type:"string",message:"responseType is not valid"},responseMode:{optional:!0,type:"string",message:"responseMode is not valid"},redirectUri:{optional:!0,type:"string",message:"redirectUri is not valid"},scope:{optional:!0,type:"string",message:"scope is not valid"},audience:{optional:!0,type:"string",message:"audience is not valid"},popupOrigin:{optional:!0,type:"string",message:"popupOrigin is not valid"},leeway:{optional:!0,type:"number",message:"leeway is not valid"},plugins:{optional:!0,type:"array",message:"plugins is not valid"},_disableDeprecationWarnings:{optional:!0,type:"boolean",message:"_disableDeprecationWarnings option is not valid"},_sendTelemetry:{optional:!0,type:"boolean",message:"_sendTelemetry option is not valid"},_telemetryInfo:{optional:!0,type:"object",message:"_telemetryInfo option is not valid"},_timesToRetryFailedRequests:{optional:!0,type:"number",message:"_timesToRetryFailedRequests option is not valid"}}),options.overrides&&assert.check(options.overrides,{type:"object",message:"overrides option is not valid"},{__tenant:{optional:!0,type:"string",message:"__tenant option is required"},__token_issuer:{optional:!0,type:"string",message:"__token_issuer option is required"},__jwks_uri:{optional:!0,type:"string",message:"__jwks_uri is required"}}),this.baseOptions=options,this.baseOptions.plugins=new PluginHandler(this,this.baseOptions.plugins||[]),this.baseOptions._sendTelemetry=!1!==this.baseOptions._sendTelemetry||this.baseOptions._sendTelemetry,this.baseOptions._timesToRetryFailedRequests=options._timesToRetryFailedRequests?parseInt(options._timesToRetryFailedRequests,0):0,this.baseOptions.tenant=this.baseOptions.overrides&&this.baseOptions.overrides.__tenant||this.baseOptions.domain.split(".")[0],this.baseOptions.token_issuer=this.baseOptions.overrides&&this.baseOptions.overrides.__token_issuer||"https://"+this.baseOptions.domain+"/",this.baseOptions.jwksURI=this.baseOptions.overrides&&this.baseOptions.overrides.__jwks_uri,this.transactionManager=new TransactionManager(this.baseOptions),this.client=new Authentication(this.baseOptions),this.redirect=new Redirect(this,this.baseOptions),this.popup=new Popup(this,this.baseOptions),this.crossOriginAuthentication=new CrossOriginAuthentication(this,this.baseOptions),this.webMessageHandler=new WebMessageHandler(this),this._universalLogin=new HostedPages(this,this.baseOptions),this.ssodataStorage=new SSODataStorage(this.baseOptions)}function buildParseHashResponse(qsParams,appState,token){return{accessToken:qsParams.access_token||null,idToken:qsParams.id_token||null,idTokenPayload:token||null,appState:appState||null,refreshToken:qsParams.refresh_token||null,state:qsParams.state||null,expiresIn:qsParams.expires_in?parseInt(qsParams.expires_in,10):null,tokenType:qsParams.token_type||null,scope:qsParams.scope||null}}function PasswordlessAuthentication(request,options){this.baseOptions=options,this.request=request}function DBConnection(request,options){this.baseOptions=options,this.request=request}function Authentication(auth0,options){2===arguments.length?this.auth0=auth0:options=auth0,assert.check(options,{type:"object",message:"options parameter is not valid"},{domain:{type:"string",message:"domain option is required"},clientID:{type:"string",message:"clientID option is required"},responseType:{optional:!0,type:"string",message:"responseType is not valid"},responseMode:{optional:!0,type:"string",message:"responseMode is not valid"},redirectUri:{optional:!0,type:"string",message:"redirectUri is not valid"},scope:{optional:!0,type:"string",message:"scope is not valid"},audience:{optional:!0,type:"string",message:"audience is not valid"},_disableDeprecationWarnings:{optional:!0,type:"boolean",message:"_disableDeprecationWarnings option is not valid"},_sendTelemetry:{optional:!0,type:"boolean",message:"_sendTelemetry option is not valid"},_telemetryInfo:{optional:!0,type:"object",message:"_telemetryInfo option is not valid"}}),this.baseOptions=options,this.baseOptions._sendTelemetry=!1!==this.baseOptions._sendTelemetry||this.baseOptions._sendTelemetry,this.baseOptions.rootUrl="https://"+this.baseOptions.domain,this.request=new RequestBuilder(this.baseOptions),this.passwordless=new PasswordlessAuthentication(this.request,this.baseOptions),this.dbConnection=new DBConnection(this.request,this.baseOptions),this.warn=new Warn({disableWarnings:!!options._disableDeprecationWarnings}),this.ssodataStorage=new SSODataStorage(this.baseOptions)}function Management(options){assert.check(options,{type:"object",message:"options parameter is not valid"},{domain:{type:"string",message:"domain option is required"},token:{type:"string",message:"token option is required"},_sendTelemetry:{optional:!0,type:"boolean",message:"_sendTelemetry option is not valid"},_telemetryInfo:{optional:!0,type:"object",message:"_telemetryInfo option is not valid"}}),this.baseOptions=options,this.baseOptions.headers={Authorization:"Bearer "+this.baseOptions.token},this.request=new RequestBuilder(this.baseOptions),this.baseOptions.rootUrl=urlJoin("https://"+this.baseOptions.domain,"api","v2")}PopupHandler.prototype.calculatePosition=function(options){var width=options.width||500,height=options.height||600,_window=windowHandler.getWindow(),screenX=void 0!==_window.screenX?_window.screenX:_window.screenLeft,screenY=void 0!==_window.screenY?_window.screenY:_window.screenTop;return{width:width,height:height,left:screenX+((void 0!==_window.outerWidth?_window.outerWidth:_window.document.body.clientWidth)-width)/2,top:screenY+((void 0!==_window.outerHeight?_window.outerHeight:_window.document.body.clientHeight)-height)/2}},PopupHandler.prototype.preload=function(options){var _this=this,_window=windowHandler.getWindow(),popupPosition=this.calculatePosition(options.popupOptions||{}),popupOptions=objectHelper.merge(popupPosition).with(options.popupOptions),url=options.url||"about:blank",windowFeatures=lib.stringify(popupOptions,{encode:!1,delimiter:","});return this._current_popup&&!this._current_popup.closed?this._current_popup:(this._current_popup=_window.open(url,"auth0_signup_popup",windowFeatures),this._current_popup.kill=function(){this.close(),_this._current_popup=null},this._current_popup)},PopupHandler.prototype.load=function(url,relayUrl,options,cb){var _this=this,popupPosition=this.calculatePosition(options.popupOptions||{}),popupOptions=objectHelper.merge(popupPosition).with(options.popupOptions),winchanOptions=objectHelper.merge({url:url,relay_url:relayUrl,window_features:lib.stringify(popupOptions,{delimiter:",",encode:!1}),popup:this._current_popup}).with(options),popup=winchan.open(winchanOptions,function(err,data){return _this._current_popup=null,cb(err,data)});return popup.focus(),popup},Popup.prototype.buildPopupHandler=function(){var pluginHandler=this.baseOptions.plugins.get("popup.getPopupHandler");return pluginHandler?pluginHandler.getPopupHandler():new PopupHandler},Popup.prototype.preload=function(options){options=options||{};var popup=this.buildPopupHandler();return popup.preload(options),popup},Popup.prototype.getPopupHandler=function(options,preload){return options.popupHandler?options.popupHandler:preload?this.preload(options):this.buildPopupHandler()},Popup.prototype.callback=function(options){var _this=this,theWindow=windowHandler.getWindow(),originUrl=(options=options||{}).popupOrigin||this.baseOptions.popupOrigin||windowHandler.getOrigin();theWindow.opener?winchan.onOpen(function(popupOrigin,r,cb){if(popupOrigin!==originUrl)return cb({error:"origin_mismatch",error_description:"The popup's origin ("+popupOrigin+") should match the `popupOrigin` parameter ("+originUrl+")."});_this.webAuth.parseHash(options||{},function(err,data){return cb(err||data)})}):theWindow.doPost=function(msg){theWindow.parent&&theWindow.parent.postMessage(msg,originUrl)}},Popup.prototype.authorize=function(options,cb){var url,relayUrl,popOpts={},pluginHandler=this.baseOptions.plugins.get("popup.authorize"),params=objectHelper.merge(this.baseOptions,["clientID","scope","domain","audience","tenant","responseType","redirectUri","_csrf","state","_intstate","nonce"]).with(objectHelper.blacklist(options,["popupHandler"]));return assert.check(params,{type:"object",message:"options parameter is not valid"},{responseType:{type:"string",message:"responseType option is required"}}),relayUrl=urlJoin(this.baseOptions.rootUrl,"relay.html"),options.owp?params.owp=!0:(popOpts.origin=urlHelper.extractOrigin(params.redirectUri),relayUrl=params.redirectUri),options.popupOptions&&(popOpts.popupOptions=objectHelper.pick(options.popupOptions,["width","height"])),pluginHandler&&(params=pluginHandler.processParams(params)),(params=this.transactionManager.process(params)).scope=params.scope||"openid profile email",delete params.domain,url=this.client.buildAuthorizeUrl(params),this.getPopupHandler(options).load(url,relayUrl,popOpts,wrapCallback(cb,{keepOriginalCasing:!0}))},Popup.prototype.loginWithCredentials=function(options,cb){options.realm=options.realm||options.connection,options.popup=!0,options=objectHelper.merge(this.baseOptions,["redirectUri","responseType","state","nonce"]).with(objectHelper.blacklist(options,["popupHandler","connection"])),options=this.transactionManager.process(options),this.crossOriginAuthentication.login(options,cb)},Popup.prototype.passwordlessVerify=function(options,cb){var _this=this;return this.client.passwordless.verify(objectHelper.blacklist(options,["popupHandler"]),function(err){if(err)return cb(err);options.username=options.phoneNumber||options.email,options.password=options.verificationCode,delete options.email,delete options.phoneNumber,delete options.verificationCode,delete options.type,_this.client.loginWithResourceOwner(options,cb)})},Popup.prototype.signupAndLogin=function(options,cb){var _this=this,popupHandler=this.getPopupHandler(options,!0);return options.popupHandler=popupHandler,this.client.dbConnection.signup(objectHelper.blacklist(options,["popupHandler"]),function(err){if(err)return popupHandler._current_popup&&popupHandler._current_popup.kill(),cb(err);_this.loginWithCredentials(options,cb)})},SilentAuthenticationHandler.create=function(options){return new SilentAuthenticationHandler(options)},SilentAuthenticationHandler.prototype.login=function(usePostMessage,callback){this.handler=new IframeHandler({auth0:this.auth0,url:this.authenticationUrl,eventListenerType:usePostMessage?"message":"load",callback:this.getCallbackHandler(callback,usePostMessage),timeout:this.timeout,eventValidator:this.getEventValidator(),timeoutCallback:function(){callback(null,"#error=timeout&error_description=Timeout+during+authentication+renew.")},usePostMessage:usePostMessage||!1}),this.handler.init()},SilentAuthenticationHandler.prototype.getEventValidator=function(){var _this=this;return{isValid:function(eventData){switch(eventData.event.type){case"message":return eventData.event.origin===_this.postMessageOrigin&&eventData.event.source===_this.handler.iframe.contentWindow&&(!1===_this.postMessageDataType||eventData.event.data.type&&eventData.event.data.type===_this.postMessageDataType);case"load":if("about:"===eventData.sourceObject.contentWindow.location.protocol)return!1;default:return!0}}}},SilentAuthenticationHandler.prototype.getCallbackHandler=function(callback,usePostMessage){return function(eventData){var callbackValue;callbackValue=usePostMessage?"object"==typeof eventData.event.data&&eventData.event.data.hash?eventData.event.data.hash:eventData.event.data:eventData.sourceObject.contentWindow.location.hash,callback(null,callbackValue)}},UsernamePassword.prototype.login=function(options,cb){var url,body;return url=urlJoin(this.baseOptions.rootUrl,"usernamepassword","login"),options.username=options.username||options.email,options=objectHelper.blacklist(options,["email"]),body=objectHelper.merge(this.baseOptions,["clientID","redirectUri","tenant","responseType","responseMode","scope","audience"]).with(options),body=this.transactionManager.process(body),body=objectHelper.toSnakeCase(body,["auth0Client"]),this.request.post(url).send(body).end(wrapCallback(cb))},UsernamePassword.prototype.callback=function(formHtml){var div,_document=windowHandler.getDocument();(div=_document.createElement("div")).innerHTML=formHtml,_document.body.appendChild(div).children[0].submit()},HostedPages.prototype.login=function(options,cb){if(windowHandler.getWindow().location.host!==this.baseOptions.domain)throw new Error("This method is meant to be used only inside the Universal Login Page.");var usernamePassword,params=objectHelper.merge(this.baseOptions,["clientID","redirectUri","tenant","responseType","responseMode","scope","audience","_csrf","state","_intstate","nonce"]).with(options);return assert.check(params,{type:"object",message:"options parameter is not valid"},{responseType:{type:"string",message:"responseType option is required"}}),(usernamePassword=new UsernamePassword(this.baseOptions)).login(params,function(err,data){return err?cb(err):usernamePassword.callback(data)})},HostedPages.prototype.signupAndLogin=function(options,cb){var _this=this;return _this.client.client.dbConnection.signup(options,function(err){return err?cb(err):_this.login(options,cb)})},HostedPages.prototype.getSSOData=function(withActiveDirectories,cb){var url,params="";return"function"==typeof withActiveDirectories&&(cb=withActiveDirectories,withActiveDirectories=!1),assert.check(withActiveDirectories,{type:"boolean",message:"withActiveDirectories parameter is not valid"}),assert.check(cb,{type:"function",message:"cb parameter is not valid"}),withActiveDirectories&&(params="?"+lib.stringify({ldaps:1,client_id:this.baseOptions.clientID})),url=urlJoin(this.baseOptions.rootUrl,"user","ssodata",params),this.request.get(url,{noHeaders:!0}).withCredentials().end(wrapCallback(cb))},WebAuth.prototype.parseHash=function(options,cb){var parsedQs,err;cb||"function"!=typeof options?options=options||{}:(cb=options,options={});var _window=windowHandler.getWindow(),hashStr=void 0===options.hash?_window.location.hash:options.hash;if(hashStr=hashStr.replace(/^#?\/?/,""),(parsedQs=lib.parse(hashStr)).hasOwnProperty("error"))return err=error.buildResponse(parsedQs.error,parsedQs.error_description),parsedQs.state&&(err.state=parsedQs.state),cb(err);if(!parsedQs.hasOwnProperty("access_token")&&!parsedQs.hasOwnProperty("id_token")&&!parsedQs.hasOwnProperty("refresh_token"))return cb(null,null);var responseTypes=(this.baseOptions.responseType||options.responseType||"").split(" ");return responseTypes.length>0&&-1!==responseTypes.indexOf("token")&&!parsedQs.hasOwnProperty("access_token")?cb(error.buildResponse("invalid_hash","response_type contains `token`, but the parsed hash does not contain an `access_token` property")):responseTypes.length>0&&-1!==responseTypes.indexOf("id_token")&&!parsedQs.hasOwnProperty("id_token")?cb(error.buildResponse("invalid_hash","response_type contains `id_token`, but the parsed hash does not contain an `id_token` property")):this.validateAuthenticationResponse(options,parsedQs,cb)},WebAuth.prototype.validateAuthenticationResponse=function(options,parsedHash,cb){var _this=this;options.__enableIdPInitiatedLogin=options.__enableIdPInitiatedLogin||options.__enableImpersonation;var state=parsedHash.state,transaction=this.transactionManager.getStoredTransaction(state),transactionState=options.state||transaction&&transaction.state||null,transactionStateMatchesState=transactionState===state;if(!(!state&&!transactionState&&options.__enableIdPInitiatedLogin)&&!transactionStateMatchesState)return cb({error:"invalid_token",errorDescription:"`state` does not match."});var transactionNonce=options.nonce||transaction&&transaction.nonce||null,appState=options.state||transaction&&transaction.appState||null,callback=function(err,payload){if(err)return cb(err);var sub;transaction&&transaction.lastUsedConnection&&(payload&&(sub=payload.sub),_this.ssodataStorage.set(transaction.lastUsedConnection,sub));return cb(null,buildParseHashResponse(parsedHash,appState,payload))};return parsedHash.id_token?this.validateToken(parsedHash.id_token,transactionNonce,function(validationError,payload){if(!validationError)return parsedHash.access_token&&payload.at_hash?(new src).validateAccessToken(parsedHash.access_token,"RS256",payload.at_hash,function(err){return err?callback(error.invalidToken(err.message)):callback(null,payload)}):callback(null,payload);if("invalid_token"!==validationError.error||"Nonce does not match."===validationError.errorDescription)return callback(validationError);if("HS256"!==(new src).decode(parsedHash.id_token).header.alg)return callback(validationError);if(!parsedHash.access_token){return callback({error:"invalid_token",description:"The id_token cannot be validated because it was signed with the HS256 algorithm and public clients (like a browser) can’t store secrets. Please read the associated doc for possible ways to fix this. Read more: https://auth0.com/docs/errors/libraries/auth0-js/invalid-token#parsing-an-hs256-signed-id-token-without-an-access-token"})}return _this.client.userInfo(parsedHash.access_token,function(errUserInfo,profile){return errUserInfo?callback(errUserInfo):callback(null,profile)})}):callback(null,null)},WebAuth.prototype.validateToken=function(token,nonce,cb){new src({issuer:this.baseOptions.token_issuer,jwksURI:this.baseOptions.jwksURI,audience:this.baseOptions.clientID,leeway:this.baseOptions.leeway||0,__disableExpirationCheck:this.baseOptions.__disableExpirationCheck}).verify(token,nonce,function(err,payload){if(err)return cb(error.invalidToken(err.message));cb(null,payload)})},WebAuth.prototype.renewAuth=function(options,cb){var usePostMessage=!!options.usePostMessage,postMessageDataType=options.postMessageDataType||!1,postMessageOrigin=options.postMessageOrigin||windowHandler.getWindow().origin,timeout=options.timeout,_this=this,params=objectHelper.merge(this.baseOptions,["clientID","redirectUri","responseType","scope","audience","_csrf","state","_intstate","nonce"]).with(options);params.responseType=params.responseType||"token",params.responseMode=params.responseMode||"fragment",params=this.transactionManager.process(params),assert.check(params,{type:"object",message:"options parameter is not valid"}),assert.check(cb,{type:"function",message:"cb parameter is not valid"}),params.prompt="none",params=objectHelper.blacklist(params,["usePostMessage","tenant","postMessageDataType","postMessageOrigin"]),SilentAuthenticationHandler.create({authenticationUrl:this.client.buildAuthorizeUrl(params),postMessageDataType:postMessageDataType,postMessageOrigin:postMessageOrigin,timeout:timeout}).login(usePostMessage,function(err,hash){if("object"==typeof hash)return cb(err,hash);_this.parseHash({hash:hash},cb)})},WebAuth.prototype.checkSession=function(options,cb){var params=objectHelper.merge(this.baseOptions,["clientID","responseType","redirectUri","scope","audience","_csrf","state","_intstate","nonce"]).with(options);return"code"===params.responseType?cb({error:"error",error_description:"responseType can't be `code`"}):(options.nonce||(params=this.transactionManager.process(params)),params.redirectUri?(assert.check(params,{type:"object",message:"options parameter is not valid"}),assert.check(cb,{type:"function",message:"cb parameter is not valid"}),params=objectHelper.blacklist(params,["usePostMessage","tenant","postMessageDataType"]),void this.webMessageHandler.run(params,cb)):cb({error:"error",error_description:"redirectUri can't be empty"}))},WebAuth.prototype.changePassword=function(options,cb){return this.client.dbConnection.changePassword(options,cb)},WebAuth.prototype.passwordlessStart=function(options,cb){var authParams=objectHelper.merge(this.baseOptions,["responseType","responseMode","redirectUri","scope","audience","_csrf","state","_intstate","nonce"]).with(options.authParams);return options.authParams=this.transactionManager.process(authParams),this.client.passwordless.start(options,cb)},WebAuth.prototype.signup=function(options,cb){return this.client.dbConnection.signup(options,cb)},WebAuth.prototype.authorize=function(options){var params=objectHelper.merge(this.baseOptions,["clientID","responseType","responseMode","redirectUri","scope","audience","_csrf","state","_intstate","nonce"]).with(options);assert.check(params,{type:"object",message:"options parameter is not valid"},{responseType:{type:"string",message:"responseType option is required"}}),(params=this.transactionManager.process(params)).scope=params.scope||"openid profile email",windowHandler.redirect(this.client.buildAuthorizeUrl(params))},WebAuth.prototype.signupAndAuthorize=function(options,cb){var _this=this;return this.client.dbConnection.signup(objectHelper.blacklist(options,["popupHandler"]),function(err){if(err)return cb(err);options.realm=options.connection,options.username||(options.username=options.email),_this.client.login(options,cb)})},WebAuth.prototype.login=function(options,cb){var params=objectHelper.merge(this.baseOptions,["clientID","responseType","redirectUri","scope","audience","_csrf","state","_intstate","nonce"]).with(options);params=this.transactionManager.process(params),windowHandler.getWindow().location.host===this.baseOptions.domain?(params.connection=params.realm,delete params.realm,this._universalLogin.login(params,cb)):this.crossOriginAuthentication.login(params,cb)},WebAuth.prototype.passwordlessLogin=function(options,cb){var params=objectHelper.merge(this.baseOptions,["clientID","responseType","redirectUri","scope","audience","_csrf","state","_intstate","nonce"]).with(options);if(params=this.transactionManager.process(params),windowHandler.getWindow().location.host===this.baseOptions.domain)this.passwordlessVerify(params,cb);else{var crossOriginOptions=objectHelper.extend({credentialType:"http://auth0.com/oauth/grant-type/passwordless/otp",realm:params.connection,username:params.email||params.phoneNumber,otp:params.verificationCode},objectHelper.blacklist(params,["connection","email","phoneNumber","verificationCode"]));this.crossOriginAuthentication.login(crossOriginOptions,cb)}},WebAuth.prototype.crossOriginAuthenticationCallback=function(){this.crossOriginVerification()},WebAuth.prototype.crossOriginVerification=function(){this.crossOriginAuthentication.callback()},WebAuth.prototype.logout=function(options){windowHandler.redirect(this.client.buildLogoutUrl(options))},WebAuth.prototype.passwordlessVerify=function(options,cb){var _this=this,params=objectHelper.merge(this.baseOptions,["clientID","responseType","responseMode","redirectUri","scope","audience","_csrf","state","_intstate","nonce"]).with(options);return assert.check(params,{type:"object",message:"options parameter is not valid"},{responseType:{type:"string",message:"responseType option is required"}}),params=this.transactionManager.process(params),this.client.passwordless.verify(params,function(err){return err?cb(err):windowHandler.redirect(_this.client.passwordless.buildVerifyUrl(params))})},PasswordlessAuthentication.prototype.buildVerifyUrl=function(options){var params,qString;return assert.check(options,{type:"object",message:"options parameter is not valid"},{connection:{type:"string",message:"connection option is required"},verificationCode:{type:"string",message:"verificationCode option is required"},phoneNumber:{optional:!1,type:"string",message:"phoneNumber option is required",condition:function(o){return!o.email}},email:{optional:!1,type:"string",message:"email option is required",condition:function(o){return!o.phoneNumber}}}),params=objectHelper.merge(this.baseOptions,["clientID","responseType","responseMode","redirectUri","scope","audience","_csrf","state","_intstate","protocol","nonce"]).with(options),this.baseOptions._sendTelemetry&&(params.auth0Client=this.request.getTelemetryData()),params=objectHelper.toSnakeCase(params,["auth0Client"]),qString=lib.stringify(params),urlJoin(this.baseOptions.rootUrl,"passwordless","verify_redirect","?"+qString)},PasswordlessAuthentication.prototype.start=function(options,cb){var url,body;return assert.check(options,{type:"object",message:"options parameter is not valid"},{connection:{type:"string",message:"connection option is required"},send:{type:"string",message:"send option is required",values:["link","code"],value_message:"send is not valid ([link, code])"},phoneNumber:{optional:!0,type:"string",message:"phoneNumber option is required",condition:function(o){return"code"===o.send||!o.email}},email:{optional:!0,type:"string",message:"email option is required",condition:function(o){return"link"===o.send||!o.phoneNumber}},authParams:{optional:!0,type:"object",message:"authParams option is required"}}),assert.check(cb,{type:"function",message:"cb parameter is not valid"}),url=urlJoin(this.baseOptions.rootUrl,"passwordless","start"),(body=objectHelper.merge(this.baseOptions,["clientID","responseType","redirectUri","scope"]).with(options)).scope&&(body.authParams=body.authParams||{},body.authParams.scope=body.scope),body.redirectUri&&(body.authParams=body.authParams||{},body.authParams.redirect_uri=body.redirectUri),body.responseType&&(body.authParams=body.authParams||{},body.authParams.response_type=body.responseType),delete body.redirectUri,delete body.responseType,delete body.scope,body=objectHelper.toSnakeCase(body,["auth0Client","authParams"]),this.request.post(url).send(body).end(wrapCallback(cb))},PasswordlessAuthentication.prototype.verify=function(options,cb){var url,cleanOption;return assert.check(options,{type:"object",message:"options parameter is not valid"},{connection:{type:"string",message:"connection option is required"},verificationCode:{type:"string",message:"verificationCode option is required"},phoneNumber:{optional:!1,type:"string",message:"phoneNumber option is required",condition:function(o){return!o.email}},email:{optional:!1,type:"string",message:"email option is required",condition:function(o){return!o.phoneNumber}}}),assert.check(cb,{type:"function",message:"cb parameter is not valid"}),cleanOption=objectHelper.pick(options,["connection","verificationCode","phoneNumber","email","auth0Client"]),cleanOption=objectHelper.toSnakeCase(cleanOption,["auth0Client"]),url=urlJoin(this.baseOptions.rootUrl,"passwordless","verify"),this.request.post(url).send(cleanOption).end(wrapCallback(cb))},DBConnection.prototype.signup=function(options,cb){var url,body,metadata;return assert.check(options,{type:"object",message:"options parameter is not valid"},{connection:{type:"string",message:"connection option is required"},email:{type:"string",message:"email option is required"},password:{type:"string",message:"password option is required"}}),assert.check(cb,{type:"function",message:"cb parameter is not valid"}),url=urlJoin(this.baseOptions.rootUrl,"dbconnections","signup"),metadata=(body=objectHelper.merge(this.baseOptions,["clientID"]).with(options)).user_metadata||body.userMetadata,body=objectHelper.blacklist(body,["scope","userMetadata","user_metadata"]),body=objectHelper.toSnakeCase(body,["auth0Client"]),metadata&&(body.user_metadata=metadata),this.request.post(url).send(body).end(wrapCallback(cb))},DBConnection.prototype.changePassword=function(options,cb){var url,body;return assert.check(options,{type:"object",message:"options parameter is not valid"},{connection:{type:"string",message:"connection option is required"},email:{type:"string",message:"email option is required"}}),assert.check(cb,{type:"function",message:"cb parameter is not valid"}),url=urlJoin(this.baseOptions.rootUrl,"dbconnections","change_password"),body=objectHelper.merge(this.baseOptions,["clientID"]).with(options,["email","connection"]),body=objectHelper.toSnakeCase(body,["auth0Client"]),this.request.post(url).send(body).end(wrapCallback(cb))},Authentication.prototype.buildAuthorizeUrl=function(options){var params,qString;return assert.check(options,{type:"object",message:"options parameter is not valid"}),params=objectHelper.merge(this.baseOptions,["clientID","responseType","responseMode","redirectUri","scope","audience"]).with(options),assert.check(params,{type:"object",message:"options parameter is not valid"},{clientID:{type:"string",message:"clientID option is required"},redirectUri:{optional:!0,type:"string",message:"redirectUri option is required"},responseType:{type:"string",message:"responseType option is required"},nonce:{type:"string",message:"nonce option is required",condition:function(o){return-1===o.responseType.indexOf("code")&&-1!==o.responseType.indexOf("id_token")}},scope:{optional:!0,type:"string",message:"scope option is required"},audience:{optional:!0,type:"string",message:"audience option is required"}}),this.baseOptions._sendTelemetry&&(params.auth0Client=this.request.getTelemetryData()),params.connection_scope&&assert.isArray(params.connection_scope)&&(params.connection_scope=params.connection_scope.join(",")),params=objectHelper.blacklist(params,["username","popupOptions","domain","tenant","timeout"]),params=objectHelper.toSnakeCase(params,["auth0Client"]),params=parametersWhitelist.oauthAuthorizeParams(this.warn,params),qString=lib.stringify(params),urlJoin(this.baseOptions.rootUrl,"authorize","?"+qString)},Authentication.prototype.buildLogoutUrl=function(options){var params,qString;return assert.check(options,{optional:!0,type:"object",message:"options parameter is not valid"}),params=objectHelper.merge(this.baseOptions,["clientID"]).with(options||{}),this.baseOptions._sendTelemetry&&(params.auth0Client=this.request.getTelemetryData()),params=objectHelper.toSnakeCase(params,["auth0Client","returnTo"]),qString=lib.stringify(objectHelper.blacklist(params,["federated"])),options&&void 0!==options.federated&&!1!==options.federated&&"false"!==options.federated&&(qString+="&federated"),urlJoin(this.baseOptions.rootUrl,"v2","logout","?"+qString)},Authentication.prototype.loginWithDefaultDirectory=function(options,cb){return assert.check(options,{type:"object",message:"options parameter is not valid"},{username:{type:"string",message:"username option is required"},password:{type:"string",message:"password option is required"},scope:{optional:!0,type:"string",message:"scope option is required"},audience:{optional:!0,type:"string",message:"audience option is required"}}),options.grantType="password",this.oauthToken(options,cb)},Authentication.prototype.login=function(options,cb){return assert.check(options,{type:"object",message:"options parameter is not valid"},{username:{type:"string",message:"username option is required"},password:{type:"string",message:"password option is required"},realm:{type:"string",message:"realm option is required"},scope:{optional:!0,type:"string",message:"scope option is required"},audience:{optional:!0,type:"string",message:"audience option is required"}}),options.grantType="http://auth0.com/oauth/grant-type/password-realm",this.oauthToken(options,cb)},Authentication.prototype.oauthToken=function(options,cb){var url,body;return assert.check(options,{type:"object",message:"options parameter is not valid"}),assert.check(cb,{type:"function",message:"cb parameter is not valid"}),url=urlJoin(this.baseOptions.rootUrl,"oauth","token"),body=objectHelper.merge(this.baseOptions,["clientID","scope","audience"]).with(options),assert.check(body,{type:"object",message:"options parameter is not valid"},{clientID:{type:"string",message:"clientID option is required"},grantType:{type:"string",message:"grantType option is required"},scope:{optional:!0,type:"string",message:"scope option is required"},audience:{optional:!0,type:"string",message:"audience option is required"}}),body=objectHelper.toSnakeCase(body,["auth0Client"]),body=parametersWhitelist.oauthTokenParams(this.warn,body),this.request.post(url).send(body).end(wrapCallback(cb))},Authentication.prototype.loginWithResourceOwner=function(options,cb){var url,body;return assert.check(options,{type:"object",message:"options parameter is not valid"},{username:{type:"string",message:"username option is required"},password:{type:"string",message:"password option is required"},connection:{type:"string",message:"connection option is required"},scope:{optional:!0,type:"string",message:"scope option is required"}}),assert.check(cb,{type:"function",message:"cb parameter is not valid"}),url=urlJoin(this.baseOptions.rootUrl,"oauth","ro"),body=objectHelper.merge(this.baseOptions,["clientID","scope"]).with(options,["username","password","scope","connection","device"]),(body=objectHelper.toSnakeCase(body,["auth0Client"])).grant_type=body.grant_type||"password",this.request.post(url).send(body).end(wrapCallback(cb))},Authentication.prototype.getSSOData=function(withActiveDirectories,cb){if(this.auth0||(this.auth0=new WebAuth(this.baseOptions)),windowHandler.getWindow().location.host===this.baseOptions.domain)return this.auth0._universalLogin.getSSOData(withActiveDirectories,cb);"function"==typeof withActiveDirectories&&(cb=withActiveDirectories),assert.check(cb,{type:"function",message:"cb parameter is not valid"});var clientId=this.baseOptions.clientID,ssodataInformation=this.ssodataStorage.get()||{};this.auth0.checkSession({responseType:"token id_token",scope:"openid profile email",connection:ssodataInformation.lastUsedConnection,timeout:5e3},function(err,result){return err?"login_required"===err.error?cb(null,{sso:!1}):("consent_required"===err.error&&(err.error_description="Consent required. When using `getSSOData`, the user has to be authenticated with the following scope: `openid profile email`."),cb(err,{sso:!1})):ssodataInformation.lastUsedSub&&ssodataInformation.lastUsedSub!==result.idTokenPayload.sub?cb(err,{sso:!1}):cb(null,{lastUsedConnection:{name:ssodataInformation.lastUsedConnection},lastUsedUserID:result.idTokenPayload.sub,lastUsedUsername:result.idTokenPayload.email||result.idTokenPayload.name,lastUsedClientID:clientId,sessionClients:[clientId],sso:!0})})},Authentication.prototype.userInfo=function(accessToken,cb){var url;return assert.check(accessToken,{type:"string",message:"accessToken parameter is not valid"}),assert.check(cb,{type:"function",message:"cb parameter is not valid"}),url=urlJoin(this.baseOptions.rootUrl,"userinfo"),this.request.get(url).set("Authorization","Bearer "+accessToken).end(wrapCallback(cb,{ignoreCasing:!0}))},Authentication.prototype.delegation=function(options,cb){var url,body;return assert.check(options,{type:"object",message:"options parameter is not valid"},{grant_type:{type:"string",message:"grant_type option is required"}}),assert.check(cb,{type:"function",message:"cb parameter is not valid"}),url=urlJoin(this.baseOptions.rootUrl,"delegation"),body=objectHelper.merge(this.baseOptions,["clientID"]).with(options),body=objectHelper.toSnakeCase(body,["auth0Client"]),this.request.post(url).send(body).end(wrapCallback(cb))},Authentication.prototype.getUserCountry=function(cb){var url;return assert.check(cb,{type:"function",message:"cb parameter is not valid"}),url=urlJoin(this.baseOptions.rootUrl,"user","geoloc","country"),this.request.get(url).end(wrapCallback(cb))},Management.prototype.getUser=function(userId,cb){var url;return assert.check(userId,{type:"string",message:"userId parameter is not valid"}),assert.check(cb,{type:"function",message:"cb parameter is not valid"}),url=urlJoin(this.baseOptions.rootUrl,"users",userId),this.request.get(url).end(wrapCallback(cb,{ignoreCasing:!0}))},Management.prototype.patchUserMetadata=function(userId,userMetadata,cb){var url;return assert.check(userId,{type:"string",message:"userId parameter is not valid"}),assert.check(userMetadata,{type:"object",message:"userMetadata parameter is not valid"}),assert.check(cb,{type:"function",message:"cb parameter is not valid"}),url=urlJoin(this.baseOptions.rootUrl,"users",userId),this.request.patch(url).send({user_metadata:userMetadata}).end(wrapCallback(cb,{ignoreCasing:!0}))},Management.prototype.linkUser=function(userId,secondaryUserToken,cb){var url;return assert.check(userId,{type:"string",message:"userId parameter is not valid"}),assert.check(secondaryUserToken,{type:"string",message:"secondaryUserToken parameter is not valid"}),assert.check(cb,{type:"function",message:"cb parameter is not valid"}),url=urlJoin(this.baseOptions.rootUrl,"users",userId,"identities"),this.request.post(url).send({link_with:secondaryUserToken}).end(wrapCallback(cb,{ignoreCasing:!0}))};var index={Authentication:Authentication,Management:Management,WebAuth:WebAuth,version:version};/* harmony default export */ __webpack_exports__["default"] = (index);
//# sourceMappingURL=auth0.min.esm.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/index.css":
/*!*************************************************!*\
  !*** ./node_modules/css-loader!./src/index.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Rubik|Roboto);", ""]);

// module
exports.push([module.i, "/* index.css */\n\nbody,\nhtml {\n    height: 100%;\n    width: 100%;\n    padding: 0;\n    margin: 0;\n}\n\n.mouse-pointer {\n    cursor: pointer;\n}\n\n#outer-container {\n    width: 100%;\n    position: relative;\n    min-height: 100vh;\n}\n\n#app {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    width: 100%;\n    background: #ffffff;\n    font-family: 'Rubik', sans-serif;\n}\n\n.App {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    width: 100%;\n}\n\n.nav-bar {\n    flex: 1;\n    display: flex;\n    color: #ffffff;\n    font-family: Helvetica, Arial, sans-serif;\n    background: #39393f;\n    padding: 10px 0 10px 0;\n    max-height: 31px;\n}\n\n.main-stage {\n    flex: 10;\n    display: flex;\n    flex-direction: column;\n    padding: 1em;\n}\n\n.nav-button {\n    color: #00cf30;\n    font-size: 1.7rem;\n    cursor: pointer;\n    padding-right: 30px;\n}\n\n.nav-bar-title-outer {\n    vertical-align: middle;\n    padding-left: 20px;\n    padding-right: 30px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n}\n\n.nav-bar-title {\n    vertical-align: middle;\n    font-size: 1.5rem;\n    font-weight: 300;\n    font-family: 'Roboto', Helvetica, Arial, sans-serif;\n}\n\n.nav-bar-icon {\n    height: 100%;\n}\n\n.stage-banner {\n    position: relative;\n    margin: 0.5em;\n}\n\n.stage-banner svg {\n    position: absolute;\n    color: rgb(75, 75, 75);\n    right: 0;\n    top: 47%;\n    transform: translateY(-50%);\n    font-size: 120%;\n}\n\n.stage-title {\n    text-align: center;\n    padding: 1em 0;\n    margin: 0.5em;\n    color: rgb(0, 0, 0);\n    text-transform: uppercase;\n    font-weight: bold;\n    font-size: 210%;\n    letter-spacing: 2px;\n}\n\n.card-container {\n    display: flex;\n    flex-direction: column;\n    overflow-y: auto;\n}\n\n.conference-card {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    padding: 0.5em;\n    margin: 0.5em;\n    font-size: 100%;\n    background: rgb(245, 245, 245);\n}\n\n.conference-fields {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n}\n\n.conference-field {\n    display: flex;\n    margin: 0.5em;\n    font-size: 100%;\n}\n\n.ui-button {\n    align-self: center;\n    padding: 0.775rem 0.75rem;\n    width: 50%;\n    max-width: 500px;\n    \n    font-weight: 400;\n    font-family: Helvetica, Arial, sans-serif;\n    font-size: 1.3rem;\n    cursor: pointer;\n    text-align: center;\n    margin: auto;\n    color: #212529;\n    vertical-align: middle;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    background-color: transparent;\n    border: 1px solid transparent;\n    line-height: 1.5;\n    border-radius: 0.25rem;\n    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\n.ui-button-success {\n    color: #28a745;\n    border-color: #28a745;\n  }\n  \n.ui-button-success:hover {\n    color: #fff;\n    background-color: #28a745;\n    border-color: #28a745;\n}\n  \n.ui-button-success:focus, .ui-button-success.focus {\nbox-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\n}\n\n.ui-button-success.disabled, .ui-button-success:disabled {\ncolor: #28a745;\nbackground-color: transparent;\n}\n\n.ui-button-success:not(:disabled):not(.disabled):active, .ui-button-success:not(:disabled):not(.disabled).active,\n.show > .ui-button-success.dropdown-toggle {\ncolor: #fff;\nbackground-color: #28a745;\nborder-color: #28a745;\n}\n\n.ui-button-success:not(:disabled):not(.disabled):active:focus, .ui-button-success:not(:disabled):not(.disabled).active:focus,\n.show > .ui-button-success.dropdown-toggle:focus {\nbox-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\n}\n\n.ui-button-span {\n    vertical-align: middle;\n    text-align: center;\n}\n\n.welcomeViewOuter {\n    text-align: center;\n}\n\n.login-button-outer {\n    text-align: center;\n    width: 100%;\n    padding: 0;\n    margin: 0;\n}\n\n.login-button {\n    text-align: center;\n    margin: auto;\n    align-self: center !important;\n}\n\n.logout-button {\n    position: absolute;\n    top: -48px;\n    right: 0;\n    font-size: 1.2rem;\n    color: #ffffff;\n}\n\n.logout-button-color {\n    color: #ffffff !important;\n}\n\n#entry-form {\n    margin: 0 0 0.5em 20px;\n    display: flex;\n    flex-direction: column;\n    color: rgb(90, 90, 90);\n    font-weight: bold;\n}\n\n#entry-form label {\n    padding: 1em 0;\n    width: 100%;\n}\n\n#entry-form input[type=\"text\"] {\n    margin: 0 0 0.5em 0;\n    padding: 0.75em;\n    width: 91%;\n    max-width: 700px;\n    font-size: 16px;\n}\n\n.form-outer {\n    width: 100%;\n    max-width: 700px;\n    align-content: center;\n    align-items: center;\n    margin: auto;\n}\n\n.form-question {\n    align-items: center;\n    justify-content: left;\n    padding: 0;\n}\n\n.form-question label {\n    padding: 0;\n    margin-left: 30px;\n}\n\n.app-description {\n    margin-bottom: 20px;\n}\n\n.footerOuter {\n    height: 80px;\n}\n\n.main-footer {\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    height: 50px;\n    line-height: 50px;\n    background-color: #313131;\n    text-align: center;\n    font-family: Helvetica, Arial, sans-serif;\n}\n\n.main-footer a {\n    color: #fafafa !important;\n    text-decoration: none;\n}\n\n.main-footer a:hover {\n    color: #dadada !important;\n    text-decoration: none;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/mithril/mithril.js":
/*!*****************************************!*\
  !*** ./node_modules/mithril/mithril.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(setImmediate, global) {;(function() {
"use strict"
function Vnode(tag, key, attrs0, children, text, dom) {
	return {tag: tag, key: key, attrs: attrs0, children: children, text: text, dom: dom, domSize: undefined, state: undefined, _state: undefined, events: undefined, instance: undefined, skip: false}
}
Vnode.normalize = function(node) {
	if (Array.isArray(node)) return Vnode("[", undefined, undefined, Vnode.normalizeChildren(node), undefined, undefined)
	if (node != null && typeof node !== "object") return Vnode("#", undefined, undefined, node === false ? "" : node, undefined, undefined)
	return node
}
Vnode.normalizeChildren = function normalizeChildren(children) {
	for (var i = 0; i < children.length; i++) {
		children[i] = Vnode.normalize(children[i])
	}
	return children
}
var selectorParser = /(?:(^|#|\.)([^#\.\[\]]+))|(\[(.+?)(?:\s*=\s*("|'|)((?:\\["'\]]|.)*?)\5)?\])/g
var selectorCache = {}
var hasOwn = {}.hasOwnProperty
function isEmpty(object) {
	for (var key in object) if (hasOwn.call(object, key)) return false
	return true
}
function compileSelector(selector) {
	var match, tag = "div", classes = [], attrs = {}
	while (match = selectorParser.exec(selector)) {
		var type = match[1], value = match[2]
		if (type === "" && value !== "") tag = value
		else if (type === "#") attrs.id = value
		else if (type === ".") classes.push(value)
		else if (match[3][0] === "[") {
			var attrValue = match[6]
			if (attrValue) attrValue = attrValue.replace(/\\(["'])/g, "$1").replace(/\\\\/g, "\\")
			if (match[4] === "class") classes.push(attrValue)
			else attrs[match[4]] = attrValue === "" ? attrValue : attrValue || true
		}
	}
	if (classes.length > 0) attrs.className = classes.join(" ")
	return selectorCache[selector] = {tag: tag, attrs: attrs}
}
function execSelector(state, attrs, children) {
	var hasAttrs = false, childList, text
	var className = attrs.className || attrs.class
	if (!isEmpty(state.attrs) && !isEmpty(attrs)) {
		var newAttrs = {}
		for(var key in attrs) {
			if (hasOwn.call(attrs, key)) {
				newAttrs[key] = attrs[key]
			}
		}
		attrs = newAttrs
	}
	for (var key in state.attrs) {
		if (hasOwn.call(state.attrs, key)) {
			attrs[key] = state.attrs[key]
		}
	}
	if (className !== undefined) {
		if (attrs.class !== undefined) {
			attrs.class = undefined
			attrs.className = className
		}
		if (state.attrs.className != null) {
			attrs.className = state.attrs.className + " " + className
		}
	}
	for (var key in attrs) {
		if (hasOwn.call(attrs, key) && key !== "key") {
			hasAttrs = true
			break
		}
	}
	if (Array.isArray(children) && children.length === 1 && children[0] != null && children[0].tag === "#") {
		text = children[0].children
	} else {
		childList = children
	}
	return Vnode(state.tag, attrs.key, hasAttrs ? attrs : undefined, childList, text)
}
function hyperscript(selector) {
	// Because sloppy mode sucks
	var attrs = arguments[1], start = 2, children
	if (selector == null || typeof selector !== "string" && typeof selector !== "function" && typeof selector.view !== "function") {
		throw Error("The selector must be either a string or a component.");
	}
	if (typeof selector === "string") {
		var cached = selectorCache[selector] || compileSelector(selector)
	}
	if (attrs == null) {
		attrs = {}
	} else if (typeof attrs !== "object" || attrs.tag != null || Array.isArray(attrs)) {
		attrs = {}
		start = 1
	}
	if (arguments.length === start + 1) {
		children = arguments[start]
		if (!Array.isArray(children)) children = [children]
	} else {
		children = []
		while (start < arguments.length) children.push(arguments[start++])
	}
	var normalized = Vnode.normalizeChildren(children)
	if (typeof selector === "string") {
		return execSelector(cached, attrs, normalized)
	} else {
		return Vnode(selector, attrs.key, attrs, normalized)
	}
}
hyperscript.trust = function(html) {
	if (html == null) html = ""
	return Vnode("<", undefined, undefined, html, undefined, undefined)
}
hyperscript.fragment = function(attrs1, children) {
	return Vnode("[", attrs1.key, attrs1, Vnode.normalizeChildren(children), undefined, undefined)
}
var m = hyperscript
/** @constructor */
var PromisePolyfill = function(executor) {
	if (!(this instanceof PromisePolyfill)) throw new Error("Promise must be called with `new`")
	if (typeof executor !== "function") throw new TypeError("executor must be a function")
	var self = this, resolvers = [], rejectors = [], resolveCurrent = handler(resolvers, true), rejectCurrent = handler(rejectors, false)
	var instance = self._instance = {resolvers: resolvers, rejectors: rejectors}
	var callAsync = typeof setImmediate === "function" ? setImmediate : setTimeout
	function handler(list, shouldAbsorb) {
		return function execute(value) {
			var then
			try {
				if (shouldAbsorb && value != null && (typeof value === "object" || typeof value === "function") && typeof (then = value.then) === "function") {
					if (value === self) throw new TypeError("Promise can't be resolved w/ itself")
					executeOnce(then.bind(value))
				}
				else {
					callAsync(function() {
						if (!shouldAbsorb && list.length === 0) console.error("Possible unhandled promise rejection:", value)
						for (var i = 0; i < list.length; i++) list[i](value)
						resolvers.length = 0, rejectors.length = 0
						instance.state = shouldAbsorb
						instance.retry = function() {execute(value)}
					})
				}
			}
			catch (e) {
				rejectCurrent(e)
			}
		}
	}
	function executeOnce(then) {
		var runs = 0
		function run(fn) {
			return function(value) {
				if (runs++ > 0) return
				fn(value)
			}
		}
		var onerror = run(rejectCurrent)
		try {then(run(resolveCurrent), onerror)} catch (e) {onerror(e)}
	}
	executeOnce(executor)
}
PromisePolyfill.prototype.then = function(onFulfilled, onRejection) {
	var self = this, instance = self._instance
	function handle(callback, list, next, state) {
		list.push(function(value) {
			if (typeof callback !== "function") next(value)
			else try {resolveNext(callback(value))} catch (e) {if (rejectNext) rejectNext(e)}
		})
		if (typeof instance.retry === "function" && state === instance.state) instance.retry()
	}
	var resolveNext, rejectNext
	var promise = new PromisePolyfill(function(resolve, reject) {resolveNext = resolve, rejectNext = reject})
	handle(onFulfilled, instance.resolvers, resolveNext, true), handle(onRejection, instance.rejectors, rejectNext, false)
	return promise
}
PromisePolyfill.prototype.catch = function(onRejection) {
	return this.then(null, onRejection)
}
PromisePolyfill.resolve = function(value) {
	if (value instanceof PromisePolyfill) return value
	return new PromisePolyfill(function(resolve) {resolve(value)})
}
PromisePolyfill.reject = function(value) {
	return new PromisePolyfill(function(resolve, reject) {reject(value)})
}
PromisePolyfill.all = function(list) {
	return new PromisePolyfill(function(resolve, reject) {
		var total = list.length, count = 0, values = []
		if (list.length === 0) resolve([])
		else for (var i = 0; i < list.length; i++) {
			(function(i) {
				function consume(value) {
					count++
					values[i] = value
					if (count === total) resolve(values)
				}
				if (list[i] != null && (typeof list[i] === "object" || typeof list[i] === "function") && typeof list[i].then === "function") {
					list[i].then(consume, reject)
				}
				else consume(list[i])
			})(i)
		}
	})
}
PromisePolyfill.race = function(list) {
	return new PromisePolyfill(function(resolve, reject) {
		for (var i = 0; i < list.length; i++) {
			list[i].then(resolve, reject)
		}
	})
}
if (typeof window !== "undefined") {
	if (typeof window.Promise === "undefined") window.Promise = PromisePolyfill
	var PromisePolyfill = window.Promise
} else if (typeof global !== "undefined") {
	if (typeof global.Promise === "undefined") global.Promise = PromisePolyfill
	var PromisePolyfill = global.Promise
} else {
}
var buildQueryString = function(object) {
	if (Object.prototype.toString.call(object) !== "[object Object]") return ""
	var args = []
	for (var key0 in object) {
		destructure(key0, object[key0])
	}
	return args.join("&")
	function destructure(key0, value) {
		if (Array.isArray(value)) {
			for (var i = 0; i < value.length; i++) {
				destructure(key0 + "[" + i + "]", value[i])
			}
		}
		else if (Object.prototype.toString.call(value) === "[object Object]") {
			for (var i in value) {
				destructure(key0 + "[" + i + "]", value[i])
			}
		}
		else args.push(encodeURIComponent(key0) + (value != null && value !== "" ? "=" + encodeURIComponent(value) : ""))
	}
}
var FILE_PROTOCOL_REGEX = new RegExp("^file://", "i")
var _8 = function($window, Promise) {
	var callbackCount = 0
	var oncompletion
	function setCompletionCallback(callback) {oncompletion = callback}
	function finalizer() {
		var count = 0
		function complete() {if (--count === 0 && typeof oncompletion === "function") oncompletion()}
		return function finalize(promise0) {
			var then0 = promise0.then
			promise0.then = function() {
				count++
				var next = then0.apply(promise0, arguments)
				next.then(complete, function(e) {
					complete()
					if (count === 0) throw e
				})
				return finalize(next)
			}
			return promise0
		}
	}
	function normalize(args, extra) {
		if (typeof args === "string") {
			var url = args
			args = extra || {}
			if (args.url == null) args.url = url
		}
		return args
	}
	function request(args, extra) {
		var finalize = finalizer()
		args = normalize(args, extra)
		var promise0 = new Promise(function(resolve, reject) {
			if (args.method == null) args.method = "GET"
			args.method = args.method.toUpperCase()
			var useBody = (args.method === "GET" || args.method === "TRACE") ? false : (typeof args.useBody === "boolean" ? args.useBody : true)
			if (typeof args.serialize !== "function") args.serialize = typeof FormData !== "undefined" && args.data instanceof FormData ? function(value) {return value} : JSON.stringify
			if (typeof args.deserialize !== "function") args.deserialize = deserialize
			if (typeof args.extract !== "function") args.extract = extract
			args.url = interpolate(args.url, args.data)
			if (useBody) args.data = args.serialize(args.data)
			else args.url = assemble(args.url, args.data)
			var xhr = new $window.XMLHttpRequest(),
				aborted = false,
				_abort = xhr.abort
			xhr.abort = function abort() {
				aborted = true
				_abort.call(xhr)
			}
			xhr.open(args.method, args.url, typeof args.async === "boolean" ? args.async : true, typeof args.user === "string" ? args.user : undefined, typeof args.password === "string" ? args.password : undefined)
			if (args.serialize === JSON.stringify && useBody && !(args.headers && args.headers.hasOwnProperty("Content-Type"))) {
				xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8")
			}
			if (args.deserialize === deserialize && !(args.headers && args.headers.hasOwnProperty("Accept"))) {
				xhr.setRequestHeader("Accept", "application/json, text/*")
			}
			if (args.withCredentials) xhr.withCredentials = args.withCredentials
			for (var key in args.headers) if ({}.hasOwnProperty.call(args.headers, key)) {
				xhr.setRequestHeader(key, args.headers[key])
			}
			if (typeof args.config === "function") xhr = args.config(xhr, args) || xhr
			xhr.onreadystatechange = function() {
				// Don't throw errors on xhr.abort().
				if(aborted) return
				if (xhr.readyState === 4) {
					try {
						var response = (args.extract !== extract) ? args.extract(xhr, args) : args.deserialize(args.extract(xhr, args))
						if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304 || FILE_PROTOCOL_REGEX.test(args.url)) {
							resolve(cast(args.type, response))
						}
						else {
							var error = new Error(xhr.responseText)
							for (var key in response) error[key] = response[key]
							reject(error)
						}
					}
					catch (e) {
						reject(e)
					}
				}
			}
			if (useBody && (args.data != null)) xhr.send(args.data)
			else xhr.send()
		})
		return args.background === true ? promise0 : finalize(promise0)
	}
	function jsonp(args, extra) {
		var finalize = finalizer()
		args = normalize(args, extra)
		var promise0 = new Promise(function(resolve, reject) {
			var callbackName = args.callbackName || "_mithril_" + Math.round(Math.random() * 1e16) + "_" + callbackCount++
			var script = $window.document.createElement("script")
			$window[callbackName] = function(data) {
				script.parentNode.removeChild(script)
				resolve(cast(args.type, data))
				delete $window[callbackName]
			}
			script.onerror = function() {
				script.parentNode.removeChild(script)
				reject(new Error("JSONP request failed"))
				delete $window[callbackName]
			}
			if (args.data == null) args.data = {}
			args.url = interpolate(args.url, args.data)
			args.data[args.callbackKey || "callback"] = callbackName
			script.src = assemble(args.url, args.data)
			$window.document.documentElement.appendChild(script)
		})
		return args.background === true? promise0 : finalize(promise0)
	}
	function interpolate(url, data) {
		if (data == null) return url
		var tokens = url.match(/:[^\/]+/gi) || []
		for (var i = 0; i < tokens.length; i++) {
			var key = tokens[i].slice(1)
			if (data[key] != null) {
				url = url.replace(tokens[i], data[key])
			}
		}
		return url
	}
	function assemble(url, data) {
		var querystring = buildQueryString(data)
		if (querystring !== "") {
			var prefix = url.indexOf("?") < 0 ? "?" : "&"
			url += prefix + querystring
		}
		return url
	}
	function deserialize(data) {
		try {return data !== "" ? JSON.parse(data) : null}
		catch (e) {throw new Error(data)}
	}
	function extract(xhr) {return xhr.responseText}
	function cast(type0, data) {
		if (typeof type0 === "function") {
			if (Array.isArray(data)) {
				for (var i = 0; i < data.length; i++) {
					data[i] = new type0(data[i])
				}
			}
			else return new type0(data)
		}
		return data
	}
	return {request: request, jsonp: jsonp, setCompletionCallback: setCompletionCallback}
}
var requestService = _8(window, PromisePolyfill)
var coreRenderer = function($window) {
	var $doc = $window.document
	var $emptyFragment = $doc.createDocumentFragment()
	var nameSpace = {
		svg: "http://www.w3.org/2000/svg",
		math: "http://www.w3.org/1998/Math/MathML"
	}
	var onevent
	function setEventCallback(callback) {return onevent = callback}
	function getNameSpace(vnode) {
		return vnode.attrs && vnode.attrs.xmlns || nameSpace[vnode.tag]
	}
	//create
	function createNodes(parent, vnodes, start, end, hooks, nextSibling, ns) {
		for (var i = start; i < end; i++) {
			var vnode = vnodes[i]
			if (vnode != null) {
				createNode(parent, vnode, hooks, ns, nextSibling)
			}
		}
	}
	function createNode(parent, vnode, hooks, ns, nextSibling) {
		var tag = vnode.tag
		if (typeof tag === "string") {
			vnode.state = {}
			if (vnode.attrs != null) initLifecycle(vnode.attrs, vnode, hooks)
			switch (tag) {
				case "#": return createText(parent, vnode, nextSibling)
				case "<": return createHTML(parent, vnode, nextSibling)
				case "[": return createFragment(parent, vnode, hooks, ns, nextSibling)
				default: return createElement(parent, vnode, hooks, ns, nextSibling)
			}
		}
		else return createComponent(parent, vnode, hooks, ns, nextSibling)
	}
	function createText(parent, vnode, nextSibling) {
		vnode.dom = $doc.createTextNode(vnode.children)
		insertNode(parent, vnode.dom, nextSibling)
		return vnode.dom
	}
	function createHTML(parent, vnode, nextSibling) {
		var match1 = vnode.children.match(/^\s*?<(\w+)/im) || []
		var parent1 = {caption: "table", thead: "table", tbody: "table", tfoot: "table", tr: "tbody", th: "tr", td: "tr", colgroup: "table", col: "colgroup"}[match1[1]] || "div"
		var temp = $doc.createElement(parent1)
		temp.innerHTML = vnode.children
		vnode.dom = temp.firstChild
		vnode.domSize = temp.childNodes.length
		var fragment = $doc.createDocumentFragment()
		var child
		while (child = temp.firstChild) {
			fragment.appendChild(child)
		}
		insertNode(parent, fragment, nextSibling)
		return fragment
	}
	function createFragment(parent, vnode, hooks, ns, nextSibling) {
		var fragment = $doc.createDocumentFragment()
		if (vnode.children != null) {
			var children = vnode.children
			createNodes(fragment, children, 0, children.length, hooks, null, ns)
		}
		vnode.dom = fragment.firstChild
		vnode.domSize = fragment.childNodes.length
		insertNode(parent, fragment, nextSibling)
		return fragment
	}
	function createElement(parent, vnode, hooks, ns, nextSibling) {
		var tag = vnode.tag
		var attrs2 = vnode.attrs
		var is = attrs2 && attrs2.is
		ns = getNameSpace(vnode) || ns
		var element = ns ?
			is ? $doc.createElementNS(ns, tag, {is: is}) : $doc.createElementNS(ns, tag) :
			is ? $doc.createElement(tag, {is: is}) : $doc.createElement(tag)
		vnode.dom = element
		if (attrs2 != null) {
			setAttrs(vnode, attrs2, ns)
		}
		insertNode(parent, element, nextSibling)
		if (vnode.attrs != null && vnode.attrs.contenteditable != null) {
			setContentEditable(vnode)
		}
		else {
			if (vnode.text != null) {
				if (vnode.text !== "") element.textContent = vnode.text
				else vnode.children = [Vnode("#", undefined, undefined, vnode.text, undefined, undefined)]
			}
			if (vnode.children != null) {
				var children = vnode.children
				createNodes(element, children, 0, children.length, hooks, null, ns)
				setLateAttrs(vnode)
			}
		}
		return element
	}
	function initComponent(vnode, hooks) {
		var sentinel
		if (typeof vnode.tag.view === "function") {
			vnode.state = Object.create(vnode.tag)
			sentinel = vnode.state.view
			if (sentinel.$$reentrantLock$$ != null) return $emptyFragment
			sentinel.$$reentrantLock$$ = true
		} else {
			vnode.state = void 0
			sentinel = vnode.tag
			if (sentinel.$$reentrantLock$$ != null) return $emptyFragment
			sentinel.$$reentrantLock$$ = true
			vnode.state = (vnode.tag.prototype != null && typeof vnode.tag.prototype.view === "function") ? new vnode.tag(vnode) : vnode.tag(vnode)
		}
		vnode._state = vnode.state
		if (vnode.attrs != null) initLifecycle(vnode.attrs, vnode, hooks)
		initLifecycle(vnode._state, vnode, hooks)
		vnode.instance = Vnode.normalize(vnode._state.view.call(vnode.state, vnode))
		if (vnode.instance === vnode) throw Error("A view cannot return the vnode it received as argument")
		sentinel.$$reentrantLock$$ = null
	}
	function createComponent(parent, vnode, hooks, ns, nextSibling) {
		initComponent(vnode, hooks)
		if (vnode.instance != null) {
			var element = createNode(parent, vnode.instance, hooks, ns, nextSibling)
			vnode.dom = vnode.instance.dom
			vnode.domSize = vnode.dom != null ? vnode.instance.domSize : 0
			insertNode(parent, element, nextSibling)
			return element
		}
		else {
			vnode.domSize = 0
			return $emptyFragment
		}
	}
	//update
	function updateNodes(parent, old, vnodes, recycling, hooks, nextSibling, ns) {
		if (old === vnodes || old == null && vnodes == null) return
		else if (old == null) createNodes(parent, vnodes, 0, vnodes.length, hooks, nextSibling, ns)
		else if (vnodes == null) removeNodes(old, 0, old.length, vnodes)
		else {
			if (old.length === vnodes.length) {
				var isUnkeyed = false
				for (var i = 0; i < vnodes.length; i++) {
					if (vnodes[i] != null && old[i] != null) {
						isUnkeyed = vnodes[i].key == null && old[i].key == null
						break
					}
				}
				if (isUnkeyed) {
					for (var i = 0; i < old.length; i++) {
						if (old[i] === vnodes[i]) continue
						else if (old[i] == null && vnodes[i] != null) createNode(parent, vnodes[i], hooks, ns, getNextSibling(old, i + 1, nextSibling))
						else if (vnodes[i] == null) removeNodes(old, i, i + 1, vnodes)
						else updateNode(parent, old[i], vnodes[i], hooks, getNextSibling(old, i + 1, nextSibling), recycling, ns)
					}
					return
				}
			}
			recycling = recycling || isRecyclable(old, vnodes)
			if (recycling) {
				var pool = old.pool
				old = old.concat(old.pool)
			}
			var oldStart = 0, start = 0, oldEnd = old.length - 1, end = vnodes.length - 1, map
			while (oldEnd >= oldStart && end >= start) {
				var o = old[oldStart], v = vnodes[start]
				if (o === v && !recycling) oldStart++, start++
				else if (o == null) oldStart++
				else if (v == null) start++
				else if (o.key === v.key) {
					var shouldRecycle = (pool != null && oldStart >= old.length - pool.length) || ((pool == null) && recycling)
					oldStart++, start++
					updateNode(parent, o, v, hooks, getNextSibling(old, oldStart, nextSibling), shouldRecycle, ns)
					if (recycling && o.tag === v.tag) insertNode(parent, toFragment(o), nextSibling)
				}
				else {
					var o = old[oldEnd]
					if (o === v && !recycling) oldEnd--, start++
					else if (o == null) oldEnd--
					else if (v == null) start++
					else if (o.key === v.key) {
						var shouldRecycle = (pool != null && oldEnd >= old.length - pool.length) || ((pool == null) && recycling)
						updateNode(parent, o, v, hooks, getNextSibling(old, oldEnd + 1, nextSibling), shouldRecycle, ns)
						if (recycling || start < end) insertNode(parent, toFragment(o), getNextSibling(old, oldStart, nextSibling))
						oldEnd--, start++
					}
					else break
				}
			}
			while (oldEnd >= oldStart && end >= start) {
				var o = old[oldEnd], v = vnodes[end]
				if (o === v && !recycling) oldEnd--, end--
				else if (o == null) oldEnd--
				else if (v == null) end--
				else if (o.key === v.key) {
					var shouldRecycle = (pool != null && oldEnd >= old.length - pool.length) || ((pool == null) && recycling)
					updateNode(parent, o, v, hooks, getNextSibling(old, oldEnd + 1, nextSibling), shouldRecycle, ns)
					if (recycling && o.tag === v.tag) insertNode(parent, toFragment(o), nextSibling)
					if (o.dom != null) nextSibling = o.dom
					oldEnd--, end--
				}
				else {
					if (!map) map = getKeyMap(old, oldEnd)
					if (v != null) {
						var oldIndex = map[v.key]
						if (oldIndex != null) {
							var movable = old[oldIndex]
							var shouldRecycle = (pool != null && oldIndex >= old.length - pool.length) || ((pool == null) && recycling)
							updateNode(parent, movable, v, hooks, getNextSibling(old, oldEnd + 1, nextSibling), recycling, ns)
							insertNode(parent, toFragment(movable), nextSibling)
							old[oldIndex].skip = true
							if (movable.dom != null) nextSibling = movable.dom
						}
						else {
							var dom = createNode(parent, v, hooks, ns, nextSibling)
							nextSibling = dom
						}
					}
					end--
				}
				if (end < start) break
			}
			createNodes(parent, vnodes, start, end + 1, hooks, nextSibling, ns)
			removeNodes(old, oldStart, oldEnd + 1, vnodes)
		}
	}
	function updateNode(parent, old, vnode, hooks, nextSibling, recycling, ns) {
		var oldTag = old.tag, tag = vnode.tag
		if (oldTag === tag) {
			vnode.state = old.state
			vnode._state = old._state
			vnode.events = old.events
			if (!recycling && shouldNotUpdate(vnode, old)) return
			if (typeof oldTag === "string") {
				if (vnode.attrs != null) {
					if (recycling) {
						vnode.state = {}
						initLifecycle(vnode.attrs, vnode, hooks)
					}
					else updateLifecycle(vnode.attrs, vnode, hooks)
				}
				switch (oldTag) {
					case "#": updateText(old, vnode); break
					case "<": updateHTML(parent, old, vnode, nextSibling); break
					case "[": updateFragment(parent, old, vnode, recycling, hooks, nextSibling, ns); break
					default: updateElement(old, vnode, recycling, hooks, ns)
				}
			}
			else updateComponent(parent, old, vnode, hooks, nextSibling, recycling, ns)
		}
		else {
			removeNode(old, null)
			createNode(parent, vnode, hooks, ns, nextSibling)
		}
	}
	function updateText(old, vnode) {
		if (old.children.toString() !== vnode.children.toString()) {
			old.dom.nodeValue = vnode.children
		}
		vnode.dom = old.dom
	}
	function updateHTML(parent, old, vnode, nextSibling) {
		if (old.children !== vnode.children) {
			toFragment(old)
			createHTML(parent, vnode, nextSibling)
		}
		else vnode.dom = old.dom, vnode.domSize = old.domSize
	}
	function updateFragment(parent, old, vnode, recycling, hooks, nextSibling, ns) {
		updateNodes(parent, old.children, vnode.children, recycling, hooks, nextSibling, ns)
		var domSize = 0, children = vnode.children
		vnode.dom = null
		if (children != null) {
			for (var i = 0; i < children.length; i++) {
				var child = children[i]
				if (child != null && child.dom != null) {
					if (vnode.dom == null) vnode.dom = child.dom
					domSize += child.domSize || 1
				}
			}
			if (domSize !== 1) vnode.domSize = domSize
		}
	}
	function updateElement(old, vnode, recycling, hooks, ns) {
		var element = vnode.dom = old.dom
		ns = getNameSpace(vnode) || ns
		if (vnode.tag === "textarea") {
			if (vnode.attrs == null) vnode.attrs = {}
			if (vnode.text != null) {
				vnode.attrs.value = vnode.text //FIXME handle0 multiple children
				vnode.text = undefined
			}
		}
		updateAttrs(vnode, old.attrs, vnode.attrs, ns)
		if (vnode.attrs != null && vnode.attrs.contenteditable != null) {
			setContentEditable(vnode)
		}
		else if (old.text != null && vnode.text != null && vnode.text !== "") {
			if (old.text.toString() !== vnode.text.toString()) old.dom.firstChild.nodeValue = vnode.text
		}
		else {
			if (old.text != null) old.children = [Vnode("#", undefined, undefined, old.text, undefined, old.dom.firstChild)]
			if (vnode.text != null) vnode.children = [Vnode("#", undefined, undefined, vnode.text, undefined, undefined)]
			updateNodes(element, old.children, vnode.children, recycling, hooks, null, ns)
		}
	}
	function updateComponent(parent, old, vnode, hooks, nextSibling, recycling, ns) {
		if (recycling) {
			initComponent(vnode, hooks)
		} else {
			vnode.instance = Vnode.normalize(vnode._state.view.call(vnode.state, vnode))
			if (vnode.instance === vnode) throw Error("A view cannot return the vnode it received as argument")
			if (vnode.attrs != null) updateLifecycle(vnode.attrs, vnode, hooks)
			updateLifecycle(vnode._state, vnode, hooks)
		}
		if (vnode.instance != null) {
			if (old.instance == null) createNode(parent, vnode.instance, hooks, ns, nextSibling)
			else updateNode(parent, old.instance, vnode.instance, hooks, nextSibling, recycling, ns)
			vnode.dom = vnode.instance.dom
			vnode.domSize = vnode.instance.domSize
		}
		else if (old.instance != null) {
			removeNode(old.instance, null)
			vnode.dom = undefined
			vnode.domSize = 0
		}
		else {
			vnode.dom = old.dom
			vnode.domSize = old.domSize
		}
	}
	function isRecyclable(old, vnodes) {
		if (old.pool != null && Math.abs(old.pool.length - vnodes.length) <= Math.abs(old.length - vnodes.length)) {
			var oldChildrenLength = old[0] && old[0].children && old[0].children.length || 0
			var poolChildrenLength = old.pool[0] && old.pool[0].children && old.pool[0].children.length || 0
			var vnodesChildrenLength = vnodes[0] && vnodes[0].children && vnodes[0].children.length || 0
			if (Math.abs(poolChildrenLength - vnodesChildrenLength) <= Math.abs(oldChildrenLength - vnodesChildrenLength)) {
				return true
			}
		}
		return false
	}
	function getKeyMap(vnodes, end) {
		var map = {}, i = 0
		for (var i = 0; i < end; i++) {
			var vnode = vnodes[i]
			if (vnode != null) {
				var key2 = vnode.key
				if (key2 != null) map[key2] = i
			}
		}
		return map
	}
	function toFragment(vnode) {
		var count0 = vnode.domSize
		if (count0 != null || vnode.dom == null) {
			var fragment = $doc.createDocumentFragment()
			if (count0 > 0) {
				var dom = vnode.dom
				while (--count0) fragment.appendChild(dom.nextSibling)
				fragment.insertBefore(dom, fragment.firstChild)
			}
			return fragment
		}
		else return vnode.dom
	}
	function getNextSibling(vnodes, i, nextSibling) {
		for (; i < vnodes.length; i++) {
			if (vnodes[i] != null && vnodes[i].dom != null) return vnodes[i].dom
		}
		return nextSibling
	}
	function insertNode(parent, dom, nextSibling) {
		if (nextSibling && nextSibling.parentNode) parent.insertBefore(dom, nextSibling)
		else parent.appendChild(dom)
	}
	function setContentEditable(vnode) {
		var children = vnode.children
		if (children != null && children.length === 1 && children[0].tag === "<") {
			var content = children[0].children
			if (vnode.dom.innerHTML !== content) vnode.dom.innerHTML = content
		}
		else if (vnode.text != null || children != null && children.length !== 0) throw new Error("Child node of a contenteditable must be trusted")
	}
	//remove
	function removeNodes(vnodes, start, end, context) {
		for (var i = start; i < end; i++) {
			var vnode = vnodes[i]
			if (vnode != null) {
				if (vnode.skip) vnode.skip = false
				else removeNode(vnode, context)
			}
		}
	}
	function removeNode(vnode, context) {
		var expected = 1, called = 0
		if (vnode.attrs && typeof vnode.attrs.onbeforeremove === "function") {
			var result = vnode.attrs.onbeforeremove.call(vnode.state, vnode)
			if (result != null && typeof result.then === "function") {
				expected++
				result.then(continuation, continuation)
			}
		}
		if (typeof vnode.tag !== "string" && typeof vnode._state.onbeforeremove === "function") {
			var result = vnode._state.onbeforeremove.call(vnode.state, vnode)
			if (result != null && typeof result.then === "function") {
				expected++
				result.then(continuation, continuation)
			}
		}
		continuation()
		function continuation() {
			if (++called === expected) {
				onremove(vnode)
				if (vnode.dom) {
					var count0 = vnode.domSize || 1
					if (count0 > 1) {
						var dom = vnode.dom
						while (--count0) {
							removeNodeFromDOM(dom.nextSibling)
						}
					}
					removeNodeFromDOM(vnode.dom)
					if (context != null && vnode.domSize == null && !hasIntegrationMethods(vnode.attrs) && typeof vnode.tag === "string") { //TODO test custom elements
						if (!context.pool) context.pool = [vnode]
						else context.pool.push(vnode)
					}
				}
			}
		}
	}
	function removeNodeFromDOM(node) {
		var parent = node.parentNode
		if (parent != null) parent.removeChild(node)
	}
	function onremove(vnode) {
		if (vnode.attrs && typeof vnode.attrs.onremove === "function") vnode.attrs.onremove.call(vnode.state, vnode)
		if (typeof vnode.tag !== "string") {
			if (typeof vnode._state.onremove === "function") vnode._state.onremove.call(vnode.state, vnode)
			if (vnode.instance != null) onremove(vnode.instance)
		} else {
			var children = vnode.children
			if (Array.isArray(children)) {
				for (var i = 0; i < children.length; i++) {
					var child = children[i]
					if (child != null) onremove(child)
				}
			}
		}
	}
	//attrs2
	function setAttrs(vnode, attrs2, ns) {
		for (var key2 in attrs2) {
			setAttr(vnode, key2, null, attrs2[key2], ns)
		}
	}
	function setAttr(vnode, key2, old, value, ns) {
		var element = vnode.dom
		if (key2 === "key" || key2 === "is" || (old === value && !isFormAttribute(vnode, key2)) && typeof value !== "object" || typeof value === "undefined" || isLifecycleMethod(key2)) return
		var nsLastIndex = key2.indexOf(":")
		if (nsLastIndex > -1 && key2.substr(0, nsLastIndex) === "xlink") {
			element.setAttributeNS("http://www.w3.org/1999/xlink", key2.slice(nsLastIndex + 1), value)
		}
		else if (key2[0] === "o" && key2[1] === "n" && typeof value === "function") updateEvent(vnode, key2, value)
		else if (key2 === "style") updateStyle(element, old, value)
		else if (key2 in element && !isAttribute(key2) && ns === undefined && !isCustomElement(vnode)) {
			if (key2 === "value") {
				var normalized0 = "" + value // eslint-disable-line no-implicit-coercion
				//setting input[value] to same value by typing on focused element moves cursor to end in Chrome
				if ((vnode.tag === "input" || vnode.tag === "textarea") && vnode.dom.value === normalized0 && vnode.dom === $doc.activeElement) return
				//setting select[value] to same value while having select open blinks select dropdown in Chrome
				if (vnode.tag === "select") {
					if (value === null) {
						if (vnode.dom.selectedIndex === -1 && vnode.dom === $doc.activeElement) return
					} else {
						if (old !== null && vnode.dom.value === normalized0 && vnode.dom === $doc.activeElement) return
					}
				}
				//setting option[value] to same value while having select open blinks select dropdown in Chrome
				if (vnode.tag === "option" && old != null && vnode.dom.value === normalized0) return
			}
			// If you assign an input type1 that is not supported by IE 11 with an assignment expression, an error0 will occur.
			if (vnode.tag === "input" && key2 === "type") {
				element.setAttribute(key2, value)
				return
			}
			element[key2] = value
		}
		else {
			if (typeof value === "boolean") {
				if (value) element.setAttribute(key2, "")
				else element.removeAttribute(key2)
			}
			else element.setAttribute(key2 === "className" ? "class" : key2, value)
		}
	}
	function setLateAttrs(vnode) {
		var attrs2 = vnode.attrs
		if (vnode.tag === "select" && attrs2 != null) {
			if ("value" in attrs2) setAttr(vnode, "value", null, attrs2.value, undefined)
			if ("selectedIndex" in attrs2) setAttr(vnode, "selectedIndex", null, attrs2.selectedIndex, undefined)
		}
	}
	function updateAttrs(vnode, old, attrs2, ns) {
		if (attrs2 != null) {
			for (var key2 in attrs2) {
				setAttr(vnode, key2, old && old[key2], attrs2[key2], ns)
			}
		}
		if (old != null) {
			for (var key2 in old) {
				if (attrs2 == null || !(key2 in attrs2)) {
					if (key2 === "className") key2 = "class"
					if (key2[0] === "o" && key2[1] === "n" && !isLifecycleMethod(key2)) updateEvent(vnode, key2, undefined)
					else if (key2 !== "key") vnode.dom.removeAttribute(key2)
				}
			}
		}
	}
	function isFormAttribute(vnode, attr) {
		return attr === "value" || attr === "checked" || attr === "selectedIndex" || attr === "selected" && vnode.dom === $doc.activeElement
	}
	function isLifecycleMethod(attr) {
		return attr === "oninit" || attr === "oncreate" || attr === "onupdate" || attr === "onremove" || attr === "onbeforeremove" || attr === "onbeforeupdate"
	}
	function isAttribute(attr) {
		return attr === "href" || attr === "list" || attr === "form" || attr === "width" || attr === "height"// || attr === "type"
	}
	function isCustomElement(vnode){
		return vnode.attrs.is || vnode.tag.indexOf("-") > -1
	}
	function hasIntegrationMethods(source) {
		return source != null && (source.oncreate || source.onupdate || source.onbeforeremove || source.onremove)
	}
	//style
	function updateStyle(element, old, style) {
		if (old === style) element.style.cssText = "", old = null
		if (style == null) element.style.cssText = ""
		else if (typeof style === "string") element.style.cssText = style
		else {
			if (typeof old === "string") element.style.cssText = ""
			for (var key2 in style) {
				element.style[key2] = style[key2]
			}
			if (old != null && typeof old !== "string") {
				for (var key2 in old) {
					if (!(key2 in style)) element.style[key2] = ""
				}
			}
		}
	}
	//event
	function updateEvent(vnode, key2, value) {
		var element = vnode.dom
		var callback = typeof onevent !== "function" ? value : function(e) {
			var result = value.call(element, e)
			onevent.call(element, e)
			return result
		}
		if (key2 in element) element[key2] = typeof value === "function" ? callback : null
		else {
			var eventName = key2.slice(2)
			if (vnode.events === undefined) vnode.events = {}
			if (vnode.events[key2] === callback) return
			if (vnode.events[key2] != null) element.removeEventListener(eventName, vnode.events[key2], false)
			if (typeof value === "function") {
				vnode.events[key2] = callback
				element.addEventListener(eventName, vnode.events[key2], false)
			}
		}
	}
	//lifecycle
	function initLifecycle(source, vnode, hooks) {
		if (typeof source.oninit === "function") source.oninit.call(vnode.state, vnode)
		if (typeof source.oncreate === "function") hooks.push(source.oncreate.bind(vnode.state, vnode))
	}
	function updateLifecycle(source, vnode, hooks) {
		if (typeof source.onupdate === "function") hooks.push(source.onupdate.bind(vnode.state, vnode))
	}
	function shouldNotUpdate(vnode, old) {
		var forceVnodeUpdate, forceComponentUpdate
		if (vnode.attrs != null && typeof vnode.attrs.onbeforeupdate === "function") forceVnodeUpdate = vnode.attrs.onbeforeupdate.call(vnode.state, vnode, old)
		if (typeof vnode.tag !== "string" && typeof vnode._state.onbeforeupdate === "function") forceComponentUpdate = vnode._state.onbeforeupdate.call(vnode.state, vnode, old)
		if (!(forceVnodeUpdate === undefined && forceComponentUpdate === undefined) && !forceVnodeUpdate && !forceComponentUpdate) {
			vnode.dom = old.dom
			vnode.domSize = old.domSize
			vnode.instance = old.instance
			return true
		}
		return false
	}
	function render(dom, vnodes) {
		if (!dom) throw new Error("Ensure the DOM element being passed to m.route/m.mount/m.render is not undefined.")
		var hooks = []
		var active = $doc.activeElement
		var namespace = dom.namespaceURI
		// First time0 rendering into a node clears it out
		if (dom.vnodes == null) dom.textContent = ""
		if (!Array.isArray(vnodes)) vnodes = [vnodes]
		updateNodes(dom, dom.vnodes, Vnode.normalizeChildren(vnodes), false, hooks, null, namespace === "http://www.w3.org/1999/xhtml" ? undefined : namespace)
		dom.vnodes = vnodes
		// document.activeElement can return null in IE https://developer.mozilla.org/en-US/docs/Web/API/Document/activeElement
		if (active != null && $doc.activeElement !== active) active.focus()
		for (var i = 0; i < hooks.length; i++) hooks[i]()
	}
	return {render: render, setEventCallback: setEventCallback}
}
function throttle(callback) {
	//60fps translates to 16.6ms, round it down since setTimeout requires int
	var time = 16
	var last = 0, pending = null
	var timeout = typeof requestAnimationFrame === "function" ? requestAnimationFrame : setTimeout
	return function() {
		var now = Date.now()
		if (last === 0 || now - last >= time) {
			last = now
			callback()
		}
		else if (pending === null) {
			pending = timeout(function() {
				pending = null
				callback()
				last = Date.now()
			}, time - (now - last))
		}
	}
}
var _11 = function($window) {
	var renderService = coreRenderer($window)
	renderService.setEventCallback(function(e) {
		if (e.redraw === false) e.redraw = undefined
		else redraw()
	})
	var callbacks = []
	function subscribe(key1, callback) {
		unsubscribe(key1)
		callbacks.push(key1, throttle(callback))
	}
	function unsubscribe(key1) {
		var index = callbacks.indexOf(key1)
		if (index > -1) callbacks.splice(index, 2)
	}
	function redraw() {
		for (var i = 1; i < callbacks.length; i += 2) {
			callbacks[i]()
		}
	}
	return {subscribe: subscribe, unsubscribe: unsubscribe, redraw: redraw, render: renderService.render}
}
var redrawService = _11(window)
requestService.setCompletionCallback(redrawService.redraw)
var _16 = function(redrawService0) {
	return function(root, component) {
		if (component === null) {
			redrawService0.render(root, [])
			redrawService0.unsubscribe(root)
			return
		}
		
		if (component.view == null && typeof component !== "function") throw new Error("m.mount(element, component) expects a component, not a vnode")
		
		var run0 = function() {
			redrawService0.render(root, Vnode(component))
		}
		redrawService0.subscribe(root, run0)
		redrawService0.redraw()
	}
}
m.mount = _16(redrawService)
var Promise = PromisePolyfill
var parseQueryString = function(string) {
	if (string === "" || string == null) return {}
	if (string.charAt(0) === "?") string = string.slice(1)
	var entries = string.split("&"), data0 = {}, counters = {}
	for (var i = 0; i < entries.length; i++) {
		var entry = entries[i].split("=")
		var key5 = decodeURIComponent(entry[0])
		var value = entry.length === 2 ? decodeURIComponent(entry[1]) : ""
		if (value === "true") value = true
		else if (value === "false") value = false
		var levels = key5.split(/\]\[?|\[/)
		var cursor = data0
		if (key5.indexOf("[") > -1) levels.pop()
		for (var j = 0; j < levels.length; j++) {
			var level = levels[j], nextLevel = levels[j + 1]
			var isNumber = nextLevel == "" || !isNaN(parseInt(nextLevel, 10))
			var isValue = j === levels.length - 1
			if (level === "") {
				var key5 = levels.slice(0, j).join()
				if (counters[key5] == null) counters[key5] = 0
				level = counters[key5]++
			}
			if (cursor[level] == null) {
				cursor[level] = isValue ? value : isNumber ? [] : {}
			}
			cursor = cursor[level]
		}
	}
	return data0
}
var coreRouter = function($window) {
	var supportsPushState = typeof $window.history.pushState === "function"
	var callAsync0 = typeof setImmediate === "function" ? setImmediate : setTimeout
	function normalize1(fragment0) {
		var data = $window.location[fragment0].replace(/(?:%[a-f89][a-f0-9])+/gim, decodeURIComponent)
		if (fragment0 === "pathname" && data[0] !== "/") data = "/" + data
		return data
	}
	var asyncId
	function debounceAsync(callback0) {
		return function() {
			if (asyncId != null) return
			asyncId = callAsync0(function() {
				asyncId = null
				callback0()
			})
		}
	}
	function parsePath(path, queryData, hashData) {
		var queryIndex = path.indexOf("?")
		var hashIndex = path.indexOf("#")
		var pathEnd = queryIndex > -1 ? queryIndex : hashIndex > -1 ? hashIndex : path.length
		if (queryIndex > -1) {
			var queryEnd = hashIndex > -1 ? hashIndex : path.length
			var queryParams = parseQueryString(path.slice(queryIndex + 1, queryEnd))
			for (var key4 in queryParams) queryData[key4] = queryParams[key4]
		}
		if (hashIndex > -1) {
			var hashParams = parseQueryString(path.slice(hashIndex + 1))
			for (var key4 in hashParams) hashData[key4] = hashParams[key4]
		}
		return path.slice(0, pathEnd)
	}
	var router = {prefix: "#!"}
	router.getPath = function() {
		var type2 = router.prefix.charAt(0)
		switch (type2) {
			case "#": return normalize1("hash").slice(router.prefix.length)
			case "?": return normalize1("search").slice(router.prefix.length) + normalize1("hash")
			default: return normalize1("pathname").slice(router.prefix.length) + normalize1("search") + normalize1("hash")
		}
	}
	router.setPath = function(path, data, options) {
		var queryData = {}, hashData = {}
		path = parsePath(path, queryData, hashData)
		if (data != null) {
			for (var key4 in data) queryData[key4] = data[key4]
			path = path.replace(/:([^\/]+)/g, function(match2, token) {
				delete queryData[token]
				return data[token]
			})
		}
		var query = buildQueryString(queryData)
		if (query) path += "?" + query
		var hash = buildQueryString(hashData)
		if (hash) path += "#" + hash
		if (supportsPushState) {
			var state = options ? options.state : null
			var title = options ? options.title : null
			$window.onpopstate()
			if (options && options.replace) $window.history.replaceState(state, title, router.prefix + path)
			else $window.history.pushState(state, title, router.prefix + path)
		}
		else $window.location.href = router.prefix + path
	}
	router.defineRoutes = function(routes, resolve, reject) {
		function resolveRoute() {
			var path = router.getPath()
			var params = {}
			var pathname = parsePath(path, params, params)
			var state = $window.history.state
			if (state != null) {
				for (var k in state) params[k] = state[k]
			}
			for (var route0 in routes) {
				var matcher = new RegExp("^" + route0.replace(/:[^\/]+?\.{3}/g, "(.*?)").replace(/:[^\/]+/g, "([^\\/]+)") + "\/?$")
				if (matcher.test(pathname)) {
					pathname.replace(matcher, function() {
						var keys = route0.match(/:[^\/]+/g) || []
						var values = [].slice.call(arguments, 1, -2)
						for (var i = 0; i < keys.length; i++) {
							params[keys[i].replace(/:|\./g, "")] = decodeURIComponent(values[i])
						}
						resolve(routes[route0], params, path, route0)
					})
					return
				}
			}
			reject(path, params)
		}
		if (supportsPushState) $window.onpopstate = debounceAsync(resolveRoute)
		else if (router.prefix.charAt(0) === "#") $window.onhashchange = resolveRoute
		resolveRoute()
	}
	return router
}
var _20 = function($window, redrawService0) {
	var routeService = coreRouter($window)
	var identity = function(v) {return v}
	var render1, component, attrs3, currentPath, lastUpdate
	var route = function(root, defaultRoute, routes) {
		if (root == null) throw new Error("Ensure the DOM element that was passed to `m.route` is not undefined")
		var run1 = function() {
			if (render1 != null) redrawService0.render(root, render1(Vnode(component, attrs3.key, attrs3)))
		}
		var bail = function(path) {
			if (path !== defaultRoute) routeService.setPath(defaultRoute, null, {replace: true})
			else throw new Error("Could not resolve default route " + defaultRoute)
		}
		routeService.defineRoutes(routes, function(payload, params, path) {
			var update = lastUpdate = function(routeResolver, comp) {
				if (update !== lastUpdate) return
				component = comp != null && (typeof comp.view === "function" || typeof comp === "function")? comp : "div"
				attrs3 = params, currentPath = path, lastUpdate = null
				render1 = (routeResolver.render || identity).bind(routeResolver)
				run1()
			}
			if (payload.view || typeof payload === "function") update({}, payload)
			else {
				if (payload.onmatch) {
					Promise.resolve(payload.onmatch(params, path)).then(function(resolved) {
						update(payload, resolved)
					}, bail)
				}
				else update(payload, "div")
			}
		}, bail)
		redrawService0.subscribe(root, run1)
	}
	route.set = function(path, data, options) {
		if (lastUpdate != null) {
			options = options || {}
			options.replace = true
		}
		lastUpdate = null
		routeService.setPath(path, data, options)
	}
	route.get = function() {return currentPath}
	route.prefix = function(prefix0) {routeService.prefix = prefix0}
	route.link = function(vnode1) {
		vnode1.dom.setAttribute("href", routeService.prefix + vnode1.attrs.href)
		vnode1.dom.onclick = function(e) {
			if (e.ctrlKey || e.metaKey || e.shiftKey || e.which === 2) return
			e.preventDefault()
			e.redraw = false
			var href = this.getAttribute("href")
			if (href.indexOf(routeService.prefix) === 0) href = href.slice(routeService.prefix.length)
			route.set(href, undefined, undefined)
		}
	}
	route.param = function(key3) {
		if(typeof attrs3 !== "undefined" && typeof key3 !== "undefined") return attrs3[key3]
		return attrs3
	}
	return route
}
m.route = _20(window, redrawService)
m.withAttr = function(attrName, callback1, context) {
	return function(e) {
		callback1.call(context || this, attrName in e.currentTarget ? e.currentTarget[attrName] : e.currentTarget.getAttribute(attrName))
	}
}
var _28 = coreRenderer(window)
m.render = _28.render
m.redraw = redrawService.redraw
m.request = requestService.request
m.jsonp = requestService.jsonp
m.parseQueryString = parseQueryString
m.buildQueryString = buildQueryString
m.version = "1.1.6"
m.vnode = Vnode
if (true) module["exports"] = m
else {}
}());
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/components/EntryForm.jsx":
/*!**************************************!*\
  !*** ./src/components/EntryForm.jsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _data = __webpack_require__(/*! ../store/data */ "./src/store/data.js");

var _UIButton = __webpack_require__(/*! ./ui/UIButton.jsx */ "./src/components/ui/UIButton.jsx");

var _UIButton2 = _interopRequireDefault(_UIButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var entryFormHandler = function entryFormHandler(formDOM) {

	var formData = new FormData(formDOM);
	var newEntry = {};

	Array.from(formData.entries()).map(function (entryValue) {
		var key = entryValue[0];
		var value = entryValue[1];

		switch (value) {
			case "false":
				newEntry[key] = false;
				break;
			case "true":
				newEntry[key] = true;
				break;
			default:
				newEntry[key] = value;
				break;
		}
	});

	console.log(newEntry);

	newEntry["favorite"] = false;
	newEntry["CFPCompleted"] = newEntry.CFP ? false : "null";

	(0, _data.setMockData)(newEntry);

	formDOM.reset();
}; // EntryForm.jsx

var m = __webpack_require__(/*! mithril */ "./node_modules/mithril/mithril.js");


var EntryForm = {
	data: {
		CFP: false
	},
	view: function view(vnode) {
		return m(
			"div",
			{ "class": "form-outer-outer" },
			m(
				"div",
				{ "class": "form-outer" },
				m(
					"form",
					{ name: "entry-form", id: "entry-form" },
					m(
						"label",
						{ "for": "conf-name" },
						"Conference Name"
					),
					m("input", { id: "conf-name", type: "text", name: "name" }),
					m(
						"label",
						{ "for": "location" },
						"Location"
					),
					m("input", { id: "location", type: "text", name: "location" }),
					m(
						"label",
						{ "for": "date" },
						"Date"
					),
					m("input", { id: "date", type: "text", name: "date" }),
					m(
						"label",
						{ "class": "form-question" },
						"Registration Deadline?",
						m(
							"label",
							{ "for": "yes-cfp" },
							"Yes"
						),
						m("input", { value: true, type: "radio", id: "yes-cfp", name: "CFP",
							onclick: function onclick() {
								vnode.state.CFP = true;
							} }),
						m(
							"label",
							{ "for": "no-cfp" },
							"No"
						),
						m("input", { value: false, type: "radio", id: "no-cfp", name: "CFP",
							onclick: function onclick() {
								vnode.state.CFP = false;
							} })
					),
					vnode.state.CFP ? [m(
						"label",
						{ "for": "cfp" },
						"Registration Deadline"
					), m("input", { id: "cfp", type: "text", name: "CFPDate" })] : null,
					m(_UIButton2.default, { action: function action() {
							return entryFormHandler(vnode.dom);
						}, buttonName: "Save" })
				)
			)
		);
	}
};

exports.default = EntryForm;

/***/ }),

/***/ "./src/components/cards/CFPCard.jsx":
/*!******************************************!*\
  !*** ./src/components/cards/CFPCard.jsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ConferenceField = __webpack_require__(/*! ./ConferenceField.jsx */ "./src/components/cards/ConferenceField.jsx");

var _ConferenceField2 = _interopRequireDefault(_ConferenceField);

var _CountDownField = __webpack_require__(/*! ./CountDownField.jsx */ "./src/components/cards/CountDownField.jsx");

var _CountDownField2 = _interopRequireDefault(_CountDownField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// CFPCard.jsx

var m = __webpack_require__(/*! mithril */ "./node_modules/mithril/mithril.js");

var CFPCard = {
  view: function view(_ref) {
    var attrs = _ref.attrs;
    return m(
      "div",
      { "class": "conference-card" },
      m(
        "div",
        { "class": "conference-fields" },
        m(_ConferenceField2.default, { fieldValue: attrs.conference.name + " @ " + attrs.conference.location }),
        m(_ConferenceField2.default, { fieldValue: m("i", { "class": "fas fa-check-circle" }) })
      ),
      m(
        "div",
        { "class": "conference-fields" },
        m(_ConferenceField2.default, { fieldValue: attrs.conference.CFPDate }),
        m(_CountDownField2.default, { fieldValue: attrs.conference.CFPDate })
      )
    );
  }
};

exports.default = CFPCard;

/***/ }),

/***/ "./src/components/cards/ConferenceCard.jsx":
/*!*************************************************!*\
  !*** ./src/components/cards/ConferenceCard.jsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _ConferenceField = __webpack_require__(/*! ./ConferenceField.jsx */ "./src/components/cards/ConferenceField.jsx");

var _ConferenceField2 = _interopRequireDefault(_ConferenceField);

var _CountDownField = __webpack_require__(/*! ./CountDownField.jsx */ "./src/components/cards/CountDownField.jsx");

var _CountDownField2 = _interopRequireDefault(_CountDownField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ConferenceCard.jsx

var m = __webpack_require__(/*! mithril */ "./node_modules/mithril/mithril.js");

var ConferenceCard = {
	view: function view(_ref) {
		var attrs = _ref.attrs;
		return m(
			"div",
			{ "class": "conference-card" },
			m(
				"div",
				{ "class": "conference-fields" },
				m(_ConferenceField2.default, { fieldValue: attrs.conference.name + " @ " + attrs.conference.location }),
				m(_ConferenceField2.default, { fieldValue: m("i", { "class": "fas fa-star" }) })
			),
			m(
				"div",
				{ "class": "conference-fields" },
				m(_ConferenceField2.default, { fieldValue: attrs.conference.date }),
				m(_CountDownField2.default, { fieldValue: attrs.conference.date })
			)
		);
	}
};

exports.default = ConferenceCard;

/***/ }),

/***/ "./src/components/cards/ConferenceField.jsx":
/*!**************************************************!*\
  !*** ./src/components/cards/ConferenceField.jsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
// ConferenceField.jsx

var m = __webpack_require__(/*! mithril */ "./node_modules/mithril/mithril.js");

var ConferenceField = {
	view: function view(_ref) {
		var attrs = _ref.attrs;
		return m(
			"div",
			{ "class": "conference-field" },
			attrs.fieldValue
		);
	}
};

exports.default = ConferenceField;

/***/ }),

/***/ "./src/components/cards/CountDownField.jsx":
/*!*************************************************!*\
  !*** ./src/components/cards/CountDownField.jsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ConferenceField = __webpack_require__(/*! ./ConferenceField.jsx */ "./src/components/cards/ConferenceField.jsx");

var _ConferenceField2 = _interopRequireDefault(_ConferenceField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// CountDownField.jsx

var m = __webpack_require__(/*! mithril */ "./node_modules/mithril/mithril.js");

var CountDownField = function () {
	function CountDownField(vnode) {
		_classCallCheck(this, CountDownField);

		this.deadline = vnode.attrs.fieldValue;
		this.countDownDate = new Date(this.deadline).getTime();
		this.timeLeft = this.getTimeLeft();
		this.distance = this.countDownDate - new Date().getTime();
	}

	_createClass(CountDownField, [{
		key: "view",
		value: function view() {
			return m(_ConferenceField2.default, { fieldValue: this.timeLeft });
		}
	}, {
		key: "getTimeLeft",
		value: function getTimeLeft() {
			var now = new Date().getTime();
			this.distance = this.countDownDate - now;

			var days = Math.floor(this.distance / (1000 * 60 * 60 * 24));
			var hours = Math.floor(this.distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
			var minutes = Math.floor(this.distance % (1000 * 60 * 60) / (1000 * 60));
			var seconds = Math.floor(this.distance % (1000 * 60) / 1000);

			return days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
		}
	}, {
		key: "countdown",
		value: function countdown() {
			var _this = this;

			var countDownInterval = setInterval(function () {

				_this.timeLeft = _this.getTimeLeft();

				m.redraw();

				if (_this.distance < 0) {
					clearInterval(countDownInterval);
					_this.timeLeft = "EXPIRED";
				}
			}, 1000);
		}
	}, {
		key: "oninit",
		value: function oninit(vnode) {
			this.countdown(vnode.attrs.fieldValue);

			if (this.distance < 0) {
				this.timeLeft = "EXPIRED";
			}
		}
	}]);

	return CountDownField;
}();

exports.default = CountDownField;

/***/ }),

/***/ "./src/components/layout/App.jsx":
/*!***************************************!*\
  !*** ./src/components/layout/App.jsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _MainStage = __webpack_require__(/*! ./MainStage.jsx */ "./src/components/layout/MainStage.jsx");

var _MainStage2 = _interopRequireDefault(_MainStage);

var _NavBar = __webpack_require__(/*! ./NavBar.jsx */ "./src/components/layout/NavBar.jsx");

var _NavBar2 = _interopRequireDefault(_NavBar);

var _StageBanner = __webpack_require__(/*! ../../components/ui/StageBanner.jsx */ "./src/components/ui/StageBanner.jsx");

var _StageBanner2 = _interopRequireDefault(_StageBanner);

var _CardContainer = __webpack_require__(/*! ../../components/layout/CardContainer.jsx */ "./src/components/layout/CardContainer.jsx");

var _CardContainer2 = _interopRequireDefault(_CardContainer);

var _ConferenceCard = __webpack_require__(/*! ../../components/cards/ConferenceCard.jsx */ "./src/components/cards/ConferenceCard.jsx");

var _ConferenceCard2 = _interopRequireDefault(_ConferenceCard);

var _CFPCard = __webpack_require__(/*! ../../components/cards/CFPCard.jsx */ "./src/components/cards/CFPCard.jsx");

var _CFPCard2 = _interopRequireDefault(_CFPCard);

var _EntryForm = __webpack_require__(/*! ../../components/EntryForm.jsx */ "./src/components/EntryForm.jsx");

var _EntryForm2 = _interopRequireDefault(_EntryForm);

var _UIButton = __webpack_require__(/*! ../../components/ui/UIButton.jsx */ "./src/components/ui/UIButton.jsx");

var _UIButton2 = _interopRequireDefault(_UIButton);

var _auth = __webpack_require__(/*! ../../services/auth.js */ "./src/services/auth.js");

var _auth2 = _interopRequireDefault(_auth);

var _data = __webpack_require__(/*! ../../store/data */ "./src/store/data.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// App.jsx

var m = __webpack_require__(/*! mithril */ "./node_modules/mithril/mithril.js");

// Components

var auth = new _auth2.default();

// Mock data

var CONFERENCES = (0, _data.getMockData)();

var ConferenceView = function ConferenceView(conferences) {
	return [m(_StageBanner2.default, { action: function action() {
			return auth.logout();
		}, title: 'Conferences' }), m(
		_CardContainer2.default,
		null,
		conferences.map(function (conference) {
			return m(_ConferenceCard2.default, { conference: conference });
		})
	)];
};

var CFPView = function CFPView(conferences) {
	return [m(_StageBanner2.default, { action: function action() {
			return auth.logout();
		}, title: 'Registration Deadline' }), m(
		_CardContainer2.default,
		null,
		conferences.filter(function (conference) {
			return conference.CFP;
		}).map(function (conferenceWithCFP) {
			return m(_CFPCard2.default, { cfp: true, conference: conferenceWithCFP });
		})
	)];
};

var FormView = function FormView() {
	return [m(_StageBanner2.default, { action: function action() {
			return auth.logout();
		}, title: 'Add Event' }), m(
		_CardContainer2.default,
		null,
		m(_EntryForm2.default, null)
	)];
};

var WelcomeView = function WelcomeView() {
	return [m(
		'div',
		{ 'class': 'welcomeViewOuter' },
		m(
			'h1',
			{ 'class': 'app-title' },
			'Conference Tracker'
		),
		m(
			'h2',
			{ 'class': 'app-greeting' },
			'Welcome'
		),
		m(
			'div',
			{ 'class': 'app-description' },
			'Track conferences and other event dates.'
		),
		m(
			'div',
			{ 'class': 'login-button-outer' },
			m(_UIButton2.default, { action: function action() {
					return auth.login();
				}, buttonName: 'Login', 'class': 'login-button' })
		)
	)];
};

var App = {
	oncreate: function oncreate(vnode) {
		var mainStage = vnode.dom.querySelector(".main-stage");

		m.route(mainStage, "/conferences", {
			"/auth": {
				view: function view() {
					return WelcomeView();
				}
			},
			"/conferences": {
				view: function view() {
					return ConferenceView(CONFERENCES);
				}
			},
			"/cfp": {
				view: function view() {
					return CFPView(CONFERENCES);
				}
			},
			"/entry": {
				view: function view() {
					return FormView();
				}
			}
		});
	},
	view: function view(_ref) {
		var children = _ref.children;
		return m(
			'div',
			{ 'class': 'App' },
			m(_NavBar2.default, null),
			m(
				_MainStage2.default,
				null,
				children
			)
		);
	}
};

exports.default = App;

/***/ }),

/***/ "./src/components/layout/CardContainer.jsx":
/*!*************************************************!*\
  !*** ./src/components/layout/CardContainer.jsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// CardContainer.jsx

var m = __webpack_require__(/*! mithril */ "./node_modules/mithril/mithril.js");

var CardContainer = {
  view: function view(_ref) {
    var children = _ref.children;

    return m(
      "div",
      { "class": "card-container" },
      children
    );
  }
};

exports.default = CardContainer;

/***/ }),

/***/ "./src/components/layout/MainStage.jsx":
/*!*********************************************!*\
  !*** ./src/components/layout/MainStage.jsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
// MainStage.jsx

var m = __webpack_require__(/*! mithril */ "./node_modules/mithril/mithril.js");

var MainStage = {
	view: function view(vnode) {
		return m(
			"div",
			{ "class": "main-stage" },
			vnode.children
		);
	}
};

exports.default = MainStage;

/***/ }),

/***/ "./src/components/layout/NavBar.jsx":
/*!******************************************!*\
  !*** ./src/components/layout/NavBar.jsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _NavButton = __webpack_require__(/*! ../ui/NavButton.jsx */ "./src/components/ui/NavButton.jsx");

var _NavButton2 = _interopRequireDefault(_NavButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// NavBar.jsx

var m = __webpack_require__(/*! mithril */ "./node_modules/mithril/mithril.js");

var NavBar = {
	view: function view() {
		return m(
			"div",
			{ "class": "nav-bar" },
			m(
				"div",
				{ "class": "nav-bar-title-outer" },
				m(
					"span",
					{ "class": "nav-bar-title" },
					"Conference Tracker"
				)
			),
			m(
				"div",
				{ "class": "nav-bar-icons-outer" },
				m(_NavButton2.default, { path: "cfp", icon: m("i", { "class": "fas fa-stopwatch nav-bar-icon" }) }),
				m(_NavButton2.default, { path: "conferences", icon: m("i", { "class": "far fa-calendar-alt nav-bar-icon" }) }),
				m(_NavButton2.default, { path: "entry", icon: m("i", { "class": "fas fa-edit nav-bar-icon" }) })
			)
		);
	}
};

exports.default = NavBar;

/***/ }),

/***/ "./src/components/ui/LogoutButton.jsx":
/*!********************************************!*\
  !*** ./src/components/ui/LogoutButton.jsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
// LogoutButton.jsx

var m = __webpack_require__(/*! mithril */ "./node_modules/mithril/mithril.js");

var LogoutButton = {
	view: function view(_ref) {
		var attrs = _ref.attrs;
		return m(
			"div",
			{ onclick: attrs.action, "class": "mouse-pointer logout-button" },
			m("i", { "class": "fas fa-sign-out-alt logout-button-color" })
		);
	}
};

exports.default = LogoutButton;

/***/ }),

/***/ "./src/components/ui/NavButton.jsx":
/*!*****************************************!*\
  !*** ./src/components/ui/NavButton.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
// NavButton.jsx

var m = __webpack_require__(/*! mithril */ "./node_modules/mithril/mithril.js");

var NavButton = {
	view: function view(_ref) {
		var attrs = _ref.attrs;
		return m(
			"a",
			{ "class": "nav-button", href: "#!/" + attrs.path },
			attrs.icon
		);
	}
};

exports.default = NavButton;

/***/ }),

/***/ "./src/components/ui/StageBanner.jsx":
/*!*******************************************!*\
  !*** ./src/components/ui/StageBanner.jsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _StageTitle = __webpack_require__(/*! ./StageTitle.jsx */ "./src/components/ui/StageTitle.jsx");

var _StageTitle2 = _interopRequireDefault(_StageTitle);

var _LogoutButton = __webpack_require__(/*! ./LogoutButton.jsx */ "./src/components/ui/LogoutButton.jsx");

var _LogoutButton2 = _interopRequireDefault(_LogoutButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// StageBanner.jsx

var m = __webpack_require__(/*! mithril */ "./node_modules/mithril/mithril.js");

var StageBanner = {
	view: function view(_ref) {
		var attrs = _ref.attrs;
		return m(
			'div',
			{ 'class': 'stage-banner' },
			m(_StageTitle2.default, { title: attrs.title }),
			m(_LogoutButton2.default, { action: attrs.action })
		);
	}
};

exports.default = StageBanner;

/***/ }),

/***/ "./src/components/ui/StageTitle.jsx":
/*!******************************************!*\
  !*** ./src/components/ui/StageTitle.jsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
// StageTitle.jsx

var m = __webpack_require__(/*! mithril */ "./node_modules/mithril/mithril.js");

var StageTitle = {
	view: function view(_ref) {
		var attrs = _ref.attrs;
		return m(
			"div",
			{ "class": "stage-title" },
			attrs.title
		);
	}
};

exports.default = StageTitle;

/***/ }),

/***/ "./src/components/ui/UIButton.jsx":
/*!****************************************!*\
  !*** ./src/components/ui/UIButton.jsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var m = __webpack_require__(/*! mithril */ "./node_modules/mithril/mithril.js");

var UIButton = {
  view: function view(_ref) {
    var attrs = _ref.attrs;
    return m(
      "div",
      { onclick: attrs.action, "class": "ui-button ui-button-success" },
      m(
        "span",
        { "class": "ui-button-span" },
        attrs.buttonName
      )
    );
  }
};

exports.default = UIButton;

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader!./index.css */ "./node_modules/css-loader/index.js!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/index.jsx":
/*!***********************!*\
  !*** ./src/index.jsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./index.css */ "./src/index.css");

var _App = __webpack_require__(/*! ./components/layout/App.jsx */ "./src/components/layout/App.jsx");

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// index.jsx

var m = __webpack_require__(/*! mithril */ "./node_modules/mithril/mithril.js");
var root = document.getElementById("app");

// Styles


m.render(root, m(_App2.default, null));

/***/ }),

/***/ "./src/services/auth.js":
/*!******************************!*\
  !*** ./src/services/auth.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _auth0Js = __webpack_require__(/*! auth0-js */ "./node_modules/auth0-js/dist/auth0.min.esm.js");

var _auth0Js2 = _interopRequireDefault(_auth0Js);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var m = __webpack_require__(/*! mithril */ "./node_modules/mithril/mithril.js");

// import AUTH0_DATA from "./auth0-variables";

var Auth = function () {
  function Auth() {
    _classCallCheck(this, Auth);

    this.auth0 = new _auth0Js2.default.WebAuth({
      domain: process.env.A0_DOMAIN || AUTH0_DATA.DOMAIN,
      clientID: process.env.A0_CLIENT_ID || AUTH0_DATA.CLIENTID,
      redirectUri: process.env.AUTH0_CALLBACK_URL || AUTH0_DATA.CALLBACKURL,
      audience: process.env.A0_AUDIENCE || AUTH0_DATA.AUDIENCE,
      responseType: "token id_token",
      scope: "openid profile email"
    });
  }

  _createClass(Auth, [{
    key: "login",
    value: function login() {
      this.auth0.authorize();
    }
  }, {
    key: "handleAuthentication",
    value: function handleAuthentication() {
      var _this = this;

      this.auth0.parseHash(function (err, authResult) {
        if (authResult && authResult.accessToken && authResult.idToken) {
          _this.setSession(authResult);
          m.route.set("/conferences");
        } else if (err) {
          m.route.set("/auth");
          console.log(err);
        }
      });
    }
  }, {
    key: "setSession",
    value: function setSession(authResult) {
      // Set the time that the Access Token will expire at
      var expiresAt = JSON.stringify(authResult.expiresIn * 1000 + new Date().getTime());
      localStorage.setItem("access_token", authResult.accessToken);
      localStorage.setItem("id_token", authResult.idToken);
      localStorage.setItem("expires_at", expiresAt);
      // navigate to the home route
      m.route.set("/conferences");
    }
  }, {
    key: "logout",
    value: function logout() {
      // Clear Access Token and ID Token from local storage
      localStorage.removeItem("access_token");
      localStorage.removeItem("id_token");
      localStorage.removeItem("expires_at");
      // navigate to the default route
      m.route.set("/auth");
    }
  }, {
    key: "isAuthenticated",
    value: function isAuthenticated() {
      // Check whether the current time is past the
      // Access Token's expiry time
      var expiresAt = JSON.parse(localStorage.getItem("expires_at"));
      return new Date().getTime() < expiresAt;
    }
  }]);

  return Auth;
}();

exports.default = Auth;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./src/store/data.js":
/*!***************************!*\
  !*** ./src/store/data.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// data.js

var CONFERENCES = [{
	name: "MySQL Tutorial",
	location: "Brooklyn, NY",
	date: "06/07/2019",
	favorite: false,
	CFP: false,
	CFPDate: "",
	CFPCompleted: false
}, {
	name: "Vue.js 3 Launch",
	location: "San Francisco, CA",
	date: "07/18/2019",
	favorite: true,
	CFP: false,
	CFPDate: "",
	CFPCompleted: false
}, {
	name: "Angular 8 Launch",
	location: "San Francisco, CA",
	date: "09/25/2019",
	favorite: true,
	CFP: true,
	CFPDate: "09/23/2019",
	CFPCompleted: false
}];

exports.getMockData = function () {
	return CONFERENCES;
};
exports.setMockData = function (conference) {
	return CONFERENCES.push(conference);
};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F1dGgwLWpzL2Rpc3QvYXV0aDAubWluLmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWl0aHJpbC9taXRocmlsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NldGltbWVkaWF0ZS9zZXRJbW1lZGlhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RpbWVycy1icm93c2VyaWZ5L21haW4uanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9FbnRyeUZvcm0uanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NhcmRzL0NGUENhcmQuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NhcmRzL0NvbmZlcmVuY2VDYXJkLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYXJkcy9Db25mZXJlbmNlRmllbGQuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NhcmRzL0NvdW50RG93bkZpZWxkLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvQXBwLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvQ2FyZENvbnRhaW5lci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0L01haW5TdGFnZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0L05hdkJhci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdWkvTG9nb3V0QnV0dG9uLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy91aS9OYXZCdXR0b24uanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3VpL1N0YWdlQmFubmVyLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy91aS9TdGFnZVRpdGxlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy91aS9VSUJ1dHRvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmNzcz9kOGMzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2F1dGguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL2RhdGEuanMiXSwibmFtZXMiOlsiZW50cnlGb3JtSGFuZGxlciIsImZvcm1ET00iLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwibmV3RW50cnkiLCJBcnJheSIsImZyb20iLCJlbnRyaWVzIiwibWFwIiwiZW50cnlWYWx1ZSIsImtleSIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsIkNGUCIsInJlc2V0IiwibSIsInJlcXVpcmUiLCJFbnRyeUZvcm0iLCJkYXRhIiwidmlldyIsInZub2RlIiwic3RhdGUiLCJkb20iLCJDRlBDYXJkIiwiYXR0cnMiLCJjb25mZXJlbmNlIiwibmFtZSIsImxvY2F0aW9uIiwiQ0ZQRGF0ZSIsIkNvbmZlcmVuY2VDYXJkIiwiZGF0ZSIsIkNvbmZlcmVuY2VGaWVsZCIsImZpZWxkVmFsdWUiLCJDb3VudERvd25GaWVsZCIsImRlYWRsaW5lIiwiY291bnREb3duRGF0ZSIsIkRhdGUiLCJnZXRUaW1lIiwidGltZUxlZnQiLCJnZXRUaW1lTGVmdCIsImRpc3RhbmNlIiwibm93IiwiZGF5cyIsIk1hdGgiLCJmbG9vciIsImhvdXJzIiwibWludXRlcyIsInNlY29uZHMiLCJjb3VudERvd25JbnRlcnZhbCIsInNldEludGVydmFsIiwicmVkcmF3IiwiY2xlYXJJbnRlcnZhbCIsImNvdW50ZG93biIsImF1dGgiLCJBdXRoIiwiQ09ORkVSRU5DRVMiLCJDb25mZXJlbmNlVmlldyIsImNvbmZlcmVuY2VzIiwibG9nb3V0IiwiQ0ZQVmlldyIsImZpbHRlciIsImNvbmZlcmVuY2VXaXRoQ0ZQIiwiRm9ybVZpZXciLCJXZWxjb21lVmlldyIsImxvZ2luIiwiQXBwIiwib25jcmVhdGUiLCJtYWluU3RhZ2UiLCJxdWVyeVNlbGVjdG9yIiwicm91dGUiLCJjaGlsZHJlbiIsIkNhcmRDb250YWluZXIiLCJNYWluU3RhZ2UiLCJOYXZCYXIiLCJMb2dvdXRCdXR0b24iLCJhY3Rpb24iLCJOYXZCdXR0b24iLCJwYXRoIiwiaWNvbiIsIlN0YWdlQmFubmVyIiwidGl0bGUiLCJTdGFnZVRpdGxlIiwiVUlCdXR0b24iLCJidXR0b25OYW1lIiwicm9vdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW5kZXIiLCJhdXRoMCIsIldlYkF1dGgiLCJkb21haW4iLCJwcm9jZXNzIiwiZW52IiwiQTBfRE9NQUlOIiwiQVVUSDBfREFUQSIsIkRPTUFJTiIsImNsaWVudElEIiwiQTBfQ0xJRU5UX0lEIiwiQ0xJRU5USUQiLCJyZWRpcmVjdFVyaSIsIkFVVEgwX0NBTExCQUNLX1VSTCIsIkNBTExCQUNLVVJMIiwiYXVkaWVuY2UiLCJBMF9BVURJRU5DRSIsIkFVRElFTkNFIiwicmVzcG9uc2VUeXBlIiwic2NvcGUiLCJhdXRob3JpemUiLCJwYXJzZUhhc2giLCJlcnIiLCJhdXRoUmVzdWx0IiwiYWNjZXNzVG9rZW4iLCJpZFRva2VuIiwic2V0U2Vzc2lvbiIsInNldCIsImV4cGlyZXNBdCIsIkpTT04iLCJzdHJpbmdpZnkiLCJleHBpcmVzSW4iLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwicmVtb3ZlSXRlbSIsInBhcnNlIiwiZ2V0SXRlbSIsImZhdm9yaXRlIiwiQ0ZQQ29tcGxldGVkIiwiZXhwb3J0cyIsImdldE1vY2tEYXRhIiwic2V0TW9ja0RhdGEiLCJwdXNoIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0hBQXdILHlDQUF5QyxrQkFBa0IsV0FBVyxnQ0FBZ0Msa0RBQWtELHVCQUF1Qiw2Q0FBNkMsa0JBQWtCLDBCQUEwQixtQkFBbUIsMERBQTBELDJCQUEyQiw4QkFBOEIsdUpBQXVKLFlBQVksa0JBQWtCLEtBQUssMEJBQTBCLCtGQUErRiwyTEFBMkwseUZBQXlGLGlFQUFpRSx1RUFBdUUseUVBQXlFLHNEQUFzRCw0REFBNEQscUJBQXFCLE1BQU0saUVBQWlFLGFBQWEsR0FBRywrQ0FBK0Ms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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZCxpQkFBaUIsU0FBUztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsbUJBQW1CO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixTQUFTO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRIQUE0SDtBQUM1SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsbUJBQW1CLHFCQUFxQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixrQkFBa0I7QUFDbkM7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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UztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVTs7Ozs7Ozs7Ozs7O0FDdkx0QztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsaUJBQWlCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwQ0FBMEMsc0JBQXNCLEVBQUU7QUFDbEU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7QUN6TEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQSxjQUFjLG1CQUFPLENBQUMsdURBQVE7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsbUJBQW1CO0FBQ3BDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixzQkFBc0I7QUFDdkM7O0FBRUE7QUFDQSxtQkFBbUIsMkJBQTJCOztBQUU5QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLG1CQUFtQjtBQUNuQztBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLDJCQUEyQjtBQUM1QztBQUNBOztBQUVBLFFBQVEsdUJBQXVCO0FBQy9CO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsaUJBQWlCLHVCQUF1QjtBQUN4QztBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGdCQUFnQixpQkFBaUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7O0FBRWQsa0RBQWtELHNCQUFzQjtBQUN4RTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDs7QUFFQSw2QkFBNkIsbUJBQW1COztBQUVoRDs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdFhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtB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QjhCLFlBQVkwRSxJQUFaLENBQWlCeEcsVUFBakIsQ0FBaEI7QUFBQSxDQUF0QixDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzeFwiKTtcbiIsIi8qKlxuICogYXV0aDAtanMgdjkuMTAuMlxuICogQXV0aG9yOiBBdXRoMFxuICogRGF0ZTogMjAxOS0wNC0xNVxuICogTGljZW5zZTogTUlUXG4gKi9cblxudmFyIGNvbW1vbmpzR2xvYmFsPVwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3c/d2luZG93OlwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWw/Z2xvYmFsOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBzZWxmP3NlbGY6e307ZnVuY3Rpb24gY3JlYXRlQ29tbW9uanNNb2R1bGUoZm4sbW9kdWxlKXtyZXR1cm4gZm4obW9kdWxlPXtleHBvcnRzOnt9fSxtb2R1bGUuZXhwb3J0cyksbW9kdWxlLmV4cG9ydHN9dmFyIHVybEpvaW49Y3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24obW9kdWxlKXt2YXIgY29udGV4dCxkZWZpbml0aW9uO2NvbnRleHQ9Y29tbW9uanNHbG9iYWwsZGVmaW5pdGlvbj1mdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihzdHJBcnJheSl7dmFyIHJlc3VsdEFycmF5PVtdO2lmKHN0ckFycmF5WzBdLm1hdGNoKC9eW15cXC86XSs6XFwvKiQvKSYmc3RyQXJyYXkubGVuZ3RoPjEpe3ZhciBmaXJzdD1zdHJBcnJheS5zaGlmdCgpO3N0ckFycmF5WzBdPWZpcnN0K3N0ckFycmF5WzBdfXN0ckFycmF5WzBdLm1hdGNoKC9eZmlsZTpcXC9cXC9cXC8vKT9zdHJBcnJheVswXT1zdHJBcnJheVswXS5yZXBsYWNlKC9eKFteXFwvOl0rKTpcXC8qLyxcIiQxOi8vL1wiKTpzdHJBcnJheVswXT1zdHJBcnJheVswXS5yZXBsYWNlKC9eKFteXFwvOl0rKTpcXC8qLyxcIiQxOi8vXCIpO2Zvcih2YXIgaT0wO2k8c3RyQXJyYXkubGVuZ3RoO2krKyl7dmFyIGNvbXBvbmVudD1zdHJBcnJheVtpXTtpZihcInN0cmluZ1wiIT10eXBlb2YgY29tcG9uZW50KXRocm93IG5ldyBUeXBlRXJyb3IoXCJVcmwgbXVzdCBiZSBhIHN0cmluZy4gUmVjZWl2ZWQgXCIrY29tcG9uZW50KTtcIlwiIT09Y29tcG9uZW50JiYoaT4wJiYoY29tcG9uZW50PWNvbXBvbmVudC5yZXBsYWNlKC9eW1xcL10rLyxcIlwiKSksY29tcG9uZW50PWk8c3RyQXJyYXkubGVuZ3RoLTE/Y29tcG9uZW50LnJlcGxhY2UoL1tcXC9dKyQvLFwiXCIpOmNvbXBvbmVudC5yZXBsYWNlKC9bXFwvXSskLyxcIi9cIikscmVzdWx0QXJyYXkucHVzaChjb21wb25lbnQpKX12YXIgc3RyPXJlc3VsdEFycmF5LmpvaW4oXCIvXCIpLHBhcnRzPShzdHI9c3RyLnJlcGxhY2UoL1xcLyhcXD98JnwjW14hXSkvZyxcIiQxXCIpKS5zcGxpdChcIj9cIik7cmV0dXJuIHN0cj1wYXJ0cy5zaGlmdCgpKyhwYXJ0cy5sZW5ndGg+MD9cIj9cIjpcIlwiKStwYXJ0cy5qb2luKFwiJlwiKX0oXCJvYmplY3RcIj09dHlwZW9mIGFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06W10uc2xpY2UuY2FsbChhcmd1bWVudHMpKX19LG1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPWRlZmluaXRpb24oKTpjb250ZXh0LnVybGpvaW49ZGVmaW5pdGlvbigpfSksdXRpbHM9Y3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24obW9kdWxlLGV4cG9ydHMpe3ZhciBoYXM9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSxoZXhUYWJsZT1mdW5jdGlvbigpe2Zvcih2YXIgYXJyYXk9W10saT0wO2k8MjU2OysraSlhcnJheS5wdXNoKFwiJVwiKygoaTwxNj9cIjBcIjpcIlwiKStpLnRvU3RyaW5nKDE2KSkudG9VcHBlckNhc2UoKSk7cmV0dXJuIGFycmF5fSgpO2V4cG9ydHMuYXJyYXlUb09iamVjdD1mdW5jdGlvbihzb3VyY2Usb3B0aW9ucyl7Zm9yKHZhciBvYmo9b3B0aW9ucyYmb3B0aW9ucy5wbGFpbk9iamVjdHM/T2JqZWN0LmNyZWF0ZShudWxsKTp7fSxpPTA7aTxzb3VyY2UubGVuZ3RoOysraSl2b2lkIDAhPT1zb3VyY2VbaV0mJihvYmpbaV09c291cmNlW2ldKTtyZXR1cm4gb2JqfSxleHBvcnRzLm1lcmdlPWZ1bmN0aW9uKHRhcmdldCxzb3VyY2Usb3B0aW9ucyl7aWYoIXNvdXJjZSlyZXR1cm4gdGFyZ2V0O2lmKFwib2JqZWN0XCIhPXR5cGVvZiBzb3VyY2Upe2lmKEFycmF5LmlzQXJyYXkodGFyZ2V0KSl0YXJnZXQucHVzaChzb3VyY2UpO2Vsc2V7aWYoXCJvYmplY3RcIiE9dHlwZW9mIHRhcmdldClyZXR1cm5bdGFyZ2V0LHNvdXJjZV07KG9wdGlvbnMucGxhaW5PYmplY3RzfHxvcHRpb25zLmFsbG93UHJvdG90eXBlc3x8IWhhcy5jYWxsKE9iamVjdC5wcm90b3R5cGUsc291cmNlKSkmJih0YXJnZXRbc291cmNlXT0hMCl9cmV0dXJuIHRhcmdldH1pZihcIm9iamVjdFwiIT10eXBlb2YgdGFyZ2V0KXJldHVyblt0YXJnZXRdLmNvbmNhdChzb3VyY2UpO3ZhciBtZXJnZVRhcmdldD10YXJnZXQ7cmV0dXJuIEFycmF5LmlzQXJyYXkodGFyZ2V0KSYmIUFycmF5LmlzQXJyYXkoc291cmNlKSYmKG1lcmdlVGFyZ2V0PWV4cG9ydHMuYXJyYXlUb09iamVjdCh0YXJnZXQsb3B0aW9ucykpLEFycmF5LmlzQXJyYXkodGFyZ2V0KSYmQXJyYXkuaXNBcnJheShzb3VyY2UpPyhzb3VyY2UuZm9yRWFjaChmdW5jdGlvbihpdGVtLGkpe2hhcy5jYWxsKHRhcmdldCxpKT90YXJnZXRbaV0mJlwib2JqZWN0XCI9PXR5cGVvZiB0YXJnZXRbaV0/dGFyZ2V0W2ldPWV4cG9ydHMubWVyZ2UodGFyZ2V0W2ldLGl0ZW0sb3B0aW9ucyk6dGFyZ2V0LnB1c2goaXRlbSk6dGFyZ2V0W2ldPWl0ZW19KSx0YXJnZXQpOk9iamVjdC5rZXlzKHNvdXJjZSkucmVkdWNlKGZ1bmN0aW9uKGFjYyxrZXkpe3ZhciB2YWx1ZT1zb3VyY2Vba2V5XTtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGFjYyxrZXkpP2FjY1trZXldPWV4cG9ydHMubWVyZ2UoYWNjW2tleV0sdmFsdWUsb3B0aW9ucyk6YWNjW2tleV09dmFsdWUsYWNjfSxtZXJnZVRhcmdldCl9LGV4cG9ydHMuZGVjb2RlPWZ1bmN0aW9uKHN0cil7dHJ5e3JldHVybiBkZWNvZGVVUklDb21wb25lbnQoc3RyLnJlcGxhY2UoL1xcKy9nLFwiIFwiKSl9Y2F0Y2goZSl7cmV0dXJuIHN0cn19LGV4cG9ydHMuZW5jb2RlPWZ1bmN0aW9uKHN0cil7aWYoMD09PXN0ci5sZW5ndGgpcmV0dXJuIHN0cjtmb3IodmFyIHN0cmluZz1cInN0cmluZ1wiPT10eXBlb2Ygc3RyP3N0cjpTdHJpbmcoc3RyKSxvdXQ9XCJcIixpPTA7aTxzdHJpbmcubGVuZ3RoOysraSl7dmFyIGM9c3RyaW5nLmNoYXJDb2RlQXQoaSk7NDU9PT1jfHw0Nj09PWN8fDk1PT09Y3x8MTI2PT09Y3x8Yz49NDgmJmM8PTU3fHxjPj02NSYmYzw9OTB8fGM+PTk3JiZjPD0xMjI/b3V0Kz1zdHJpbmcuY2hhckF0KGkpOmM8MTI4P291dCs9aGV4VGFibGVbY106YzwyMDQ4P291dCs9aGV4VGFibGVbMTkyfGM+PjZdK2hleFRhYmxlWzEyOHw2MyZjXTpjPDU1Mjk2fHxjPj01NzM0ND9vdXQrPWhleFRhYmxlWzIyNHxjPj4xMl0raGV4VGFibGVbMTI4fGM+PjYmNjNdK2hleFRhYmxlWzEyOHw2MyZjXTooaSs9MSxjPTY1NTM2KygoMTAyMyZjKTw8MTB8MTAyMyZzdHJpbmcuY2hhckNvZGVBdChpKSksb3V0Kz1oZXhUYWJsZVsyNDB8Yz4+MThdK2hleFRhYmxlWzEyOHxjPj4xMiY2M10raGV4VGFibGVbMTI4fGM+PjYmNjNdK2hleFRhYmxlWzEyOHw2MyZjXSl9cmV0dXJuIG91dH0sZXhwb3J0cy5jb21wYWN0PWZ1bmN0aW9uKG9iaixyZWZlcmVuY2VzKXtpZihcIm9iamVjdFwiIT10eXBlb2Ygb2JqfHxudWxsPT09b2JqKXJldHVybiBvYmo7dmFyIHJlZnM9cmVmZXJlbmNlc3x8W10sbG9va3VwPXJlZnMuaW5kZXhPZihvYmopO2lmKC0xIT09bG9va3VwKXJldHVybiByZWZzW2xvb2t1cF07aWYocmVmcy5wdXNoKG9iaiksQXJyYXkuaXNBcnJheShvYmopKXtmb3IodmFyIGNvbXBhY3RlZD1bXSxpPTA7aTxvYmoubGVuZ3RoOysraSlvYmpbaV0mJlwib2JqZWN0XCI9PXR5cGVvZiBvYmpbaV0/Y29tcGFjdGVkLnB1c2goZXhwb3J0cy5jb21wYWN0KG9ialtpXSxyZWZzKSk6dm9pZCAwIT09b2JqW2ldJiZjb21wYWN0ZWQucHVzaChvYmpbaV0pO3JldHVybiBjb21wYWN0ZWR9cmV0dXJuIE9iamVjdC5rZXlzKG9iaikuZm9yRWFjaChmdW5jdGlvbihrZXkpe29ialtrZXldPWV4cG9ydHMuY29tcGFjdChvYmpba2V5XSxyZWZzKX0pLG9ian0sZXhwb3J0cy5pc1JlZ0V4cD1mdW5jdGlvbihvYmope3JldHVyblwiW29iamVjdCBSZWdFeHBdXCI9PT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKX0sZXhwb3J0cy5pc0J1ZmZlcj1mdW5jdGlvbihvYmope3JldHVybiBudWxsIT1vYmomJiEhKG9iai5jb25zdHJ1Y3RvciYmb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyJiZvYmouY29uc3RydWN0b3IuaXNCdWZmZXIob2JqKSl9fSksdXRpbHNfMT11dGlscy5hcnJheVRvT2JqZWN0LHV0aWxzXzI9dXRpbHMubWVyZ2UsdXRpbHNfMz11dGlscy5kZWNvZGUsdXRpbHNfND11dGlscy5lbmNvZGUsdXRpbHNfNT11dGlscy5jb21wYWN0LHV0aWxzXzY9dXRpbHMuaXNSZWdFeHAsdXRpbHNfNz11dGlscy5pc0J1ZmZlcixyZXBsYWNlPVN0cmluZy5wcm90b3R5cGUucmVwbGFjZSxwZXJjZW50VHdlbnRpZXM9LyUyMC9nLGZvcm1hdHM9e2RlZmF1bHQ6XCJSRkMzOTg2XCIsZm9ybWF0dGVyczp7UkZDMTczODpmdW5jdGlvbih2YWx1ZSl7cmV0dXJuIHJlcGxhY2UuY2FsbCh2YWx1ZSxwZXJjZW50VHdlbnRpZXMsXCIrXCIpfSxSRkMzOTg2OmZ1bmN0aW9uKHZhbHVlKXtyZXR1cm4gdmFsdWV9fSxSRkMxNzM4OlwiUkZDMTczOFwiLFJGQzM5ODY6XCJSRkMzOTg2XCJ9LGFycmF5UHJlZml4R2VuZXJhdG9ycz17YnJhY2tldHM6ZnVuY3Rpb24ocHJlZml4KXtyZXR1cm4gcHJlZml4K1wiW11cIn0saW5kaWNlczpmdW5jdGlvbihwcmVmaXgsa2V5KXtyZXR1cm4gcHJlZml4K1wiW1wiK2tleStcIl1cIn0scmVwZWF0OmZ1bmN0aW9uKHByZWZpeCl7cmV0dXJuIHByZWZpeH19LHRvSVNPPURhdGUucHJvdG90eXBlLnRvSVNPU3RyaW5nLGRlZmF1bHRzPXtkZWxpbWl0ZXI6XCImXCIsZW5jb2RlOiEwLGVuY29kZXI6dXRpbHMuZW5jb2RlLGVuY29kZVZhbHVlc09ubHk6ITEsc2VyaWFsaXplRGF0ZTpmdW5jdGlvbihkYXRlKXtyZXR1cm4gdG9JU08uY2FsbChkYXRlKX0sc2tpcE51bGxzOiExLHN0cmljdE51bGxIYW5kbGluZzohMX0sc3RyaW5naWZ5PWZ1bmN0aW9uIHN0cmluZ2lmeShvYmplY3QscHJlZml4LGdlbmVyYXRlQXJyYXlQcmVmaXgsc3RyaWN0TnVsbEhhbmRsaW5nLHNraXBOdWxscyxlbmNvZGVyLGZpbHRlcixzb3J0LGFsbG93RG90cyxzZXJpYWxpemVEYXRlLGZvcm1hdHRlcixlbmNvZGVWYWx1ZXNPbmx5KXt2YXIgb2JqPW9iamVjdDtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBmaWx0ZXIpb2JqPWZpbHRlcihwcmVmaXgsb2JqKTtlbHNlIGlmKG9iaiBpbnN0YW5jZW9mIERhdGUpb2JqPXNlcmlhbGl6ZURhdGUob2JqKTtlbHNlIGlmKG51bGw9PT1vYmope2lmKHN0cmljdE51bGxIYW5kbGluZylyZXR1cm4gZW5jb2RlciYmIWVuY29kZVZhbHVlc09ubHk/ZW5jb2RlcihwcmVmaXgpOnByZWZpeDtvYmo9XCJcIn1pZihcInN0cmluZ1wiPT10eXBlb2Ygb2JqfHxcIm51bWJlclwiPT10eXBlb2Ygb2JqfHxcImJvb2xlYW5cIj09dHlwZW9mIG9ianx8dXRpbHMuaXNCdWZmZXIob2JqKSlyZXR1cm4gZW5jb2Rlcj9bZm9ybWF0dGVyKGVuY29kZVZhbHVlc09ubHk/cHJlZml4OmVuY29kZXIocHJlZml4KSkrXCI9XCIrZm9ybWF0dGVyKGVuY29kZXIob2JqKSldOltmb3JtYXR0ZXIocHJlZml4KStcIj1cIitmb3JtYXR0ZXIoU3RyaW5nKG9iaikpXTt2YXIgb2JqS2V5cyx2YWx1ZXM9W107aWYodm9pZCAwPT09b2JqKXJldHVybiB2YWx1ZXM7aWYoQXJyYXkuaXNBcnJheShmaWx0ZXIpKW9iaktleXM9ZmlsdGVyO2Vsc2V7dmFyIGtleXM9T2JqZWN0LmtleXMob2JqKTtvYmpLZXlzPXNvcnQ/a2V5cy5zb3J0KHNvcnQpOmtleXN9Zm9yKHZhciBpPTA7aTxvYmpLZXlzLmxlbmd0aDsrK2kpe3ZhciBrZXk9b2JqS2V5c1tpXTtza2lwTnVsbHMmJm51bGw9PT1vYmpba2V5XXx8KHZhbHVlcz1BcnJheS5pc0FycmF5KG9iaik/dmFsdWVzLmNvbmNhdChzdHJpbmdpZnkob2JqW2tleV0sZ2VuZXJhdGVBcnJheVByZWZpeChwcmVmaXgsa2V5KSxnZW5lcmF0ZUFycmF5UHJlZml4LHN0cmljdE51bGxIYW5kbGluZyxza2lwTnVsbHMsZW5jb2RlcixmaWx0ZXIsc29ydCxhbGxvd0RvdHMsc2VyaWFsaXplRGF0ZSxmb3JtYXR0ZXIsZW5jb2RlVmFsdWVzT25seSkpOnZhbHVlcy5jb25jYXQoc3RyaW5naWZ5KG9ialtrZXldLHByZWZpeCsoYWxsb3dEb3RzP1wiLlwiK2tleTpcIltcIitrZXkrXCJdXCIpLGdlbmVyYXRlQXJyYXlQcmVmaXgsc3RyaWN0TnVsbEhhbmRsaW5nLHNraXBOdWxscyxlbmNvZGVyLGZpbHRlcixzb3J0LGFsbG93RG90cyxzZXJpYWxpemVEYXRlLGZvcm1hdHRlcixlbmNvZGVWYWx1ZXNPbmx5KSkpfXJldHVybiB2YWx1ZXN9LHN0cmluZ2lmeV8xPWZ1bmN0aW9uKG9iamVjdCxvcHRzKXt2YXIgb2JqPW9iamVjdCxvcHRpb25zPW9wdHN8fHt9O2lmKG51bGwhPT1vcHRpb25zLmVuY29kZXImJnZvaWQgMCE9PW9wdGlvbnMuZW5jb2RlciYmXCJmdW5jdGlvblwiIT10eXBlb2Ygb3B0aW9ucy5lbmNvZGVyKXRocm93IG5ldyBUeXBlRXJyb3IoXCJFbmNvZGVyIGhhcyB0byBiZSBhIGZ1bmN0aW9uLlwiKTt2YXIgZGVsaW1pdGVyPXZvaWQgMD09PW9wdGlvbnMuZGVsaW1pdGVyP2RlZmF1bHRzLmRlbGltaXRlcjpvcHRpb25zLmRlbGltaXRlcixzdHJpY3ROdWxsSGFuZGxpbmc9XCJib29sZWFuXCI9PXR5cGVvZiBvcHRpb25zLnN0cmljdE51bGxIYW5kbGluZz9vcHRpb25zLnN0cmljdE51bGxIYW5kbGluZzpkZWZhdWx0cy5zdHJpY3ROdWxsSGFuZGxpbmcsc2tpcE51bGxzPVwiYm9vbGVhblwiPT10eXBlb2Ygb3B0aW9ucy5za2lwTnVsbHM/b3B0aW9ucy5za2lwTnVsbHM6ZGVmYXVsdHMuc2tpcE51bGxzLGVuY29kZT1cImJvb2xlYW5cIj09dHlwZW9mIG9wdGlvbnMuZW5jb2RlP29wdGlvbnMuZW5jb2RlOmRlZmF1bHRzLmVuY29kZSxlbmNvZGVyPVwiZnVuY3Rpb25cIj09dHlwZW9mIG9wdGlvbnMuZW5jb2Rlcj9vcHRpb25zLmVuY29kZXI6ZGVmYXVsdHMuZW5jb2Rlcixzb3J0PVwiZnVuY3Rpb25cIj09dHlwZW9mIG9wdGlvbnMuc29ydD9vcHRpb25zLnNvcnQ6bnVsbCxhbGxvd0RvdHM9dm9pZCAwIT09b3B0aW9ucy5hbGxvd0RvdHMmJm9wdGlvbnMuYWxsb3dEb3RzLHNlcmlhbGl6ZURhdGU9XCJmdW5jdGlvblwiPT10eXBlb2Ygb3B0aW9ucy5zZXJpYWxpemVEYXRlP29wdGlvbnMuc2VyaWFsaXplRGF0ZTpkZWZhdWx0cy5zZXJpYWxpemVEYXRlLGVuY29kZVZhbHVlc09ubHk9XCJib29sZWFuXCI9PXR5cGVvZiBvcHRpb25zLmVuY29kZVZhbHVlc09ubHk/b3B0aW9ucy5lbmNvZGVWYWx1ZXNPbmx5OmRlZmF1bHRzLmVuY29kZVZhbHVlc09ubHk7aWYodm9pZCAwPT09b3B0aW9ucy5mb3JtYXQpb3B0aW9ucy5mb3JtYXQ9Zm9ybWF0cy5kZWZhdWx0O2Vsc2UgaWYoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChmb3JtYXRzLmZvcm1hdHRlcnMsb3B0aW9ucy5mb3JtYXQpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmtub3duIGZvcm1hdCBvcHRpb24gcHJvdmlkZWQuXCIpO3ZhciBvYmpLZXlzLGZpbHRlcixmb3JtYXR0ZXI9Zm9ybWF0cy5mb3JtYXR0ZXJzW29wdGlvbnMuZm9ybWF0XTtcImZ1bmN0aW9uXCI9PXR5cGVvZiBvcHRpb25zLmZpbHRlcj9vYmo9KGZpbHRlcj1vcHRpb25zLmZpbHRlcikoXCJcIixvYmopOkFycmF5LmlzQXJyYXkob3B0aW9ucy5maWx0ZXIpJiYob2JqS2V5cz1maWx0ZXI9b3B0aW9ucy5maWx0ZXIpO3ZhciBhcnJheUZvcm1hdCxrZXlzPVtdO2lmKFwib2JqZWN0XCIhPXR5cGVvZiBvYmp8fG51bGw9PT1vYmopcmV0dXJuXCJcIjthcnJheUZvcm1hdD1vcHRpb25zLmFycmF5Rm9ybWF0IGluIGFycmF5UHJlZml4R2VuZXJhdG9ycz9vcHRpb25zLmFycmF5Rm9ybWF0OlwiaW5kaWNlc1wiaW4gb3B0aW9ucz9vcHRpb25zLmluZGljZXM/XCJpbmRpY2VzXCI6XCJyZXBlYXRcIjpcImluZGljZXNcIjt2YXIgZ2VuZXJhdGVBcnJheVByZWZpeD1hcnJheVByZWZpeEdlbmVyYXRvcnNbYXJyYXlGb3JtYXRdO29iaktleXN8fChvYmpLZXlzPU9iamVjdC5rZXlzKG9iaikpLHNvcnQmJm9iaktleXMuc29ydChzb3J0KTtmb3IodmFyIGk9MDtpPG9iaktleXMubGVuZ3RoOysraSl7dmFyIGtleT1vYmpLZXlzW2ldO3NraXBOdWxscyYmbnVsbD09PW9ialtrZXldfHwoa2V5cz1rZXlzLmNvbmNhdChzdHJpbmdpZnkob2JqW2tleV0sa2V5LGdlbmVyYXRlQXJyYXlQcmVmaXgsc3RyaWN0TnVsbEhhbmRsaW5nLHNraXBOdWxscyxlbmNvZGU/ZW5jb2RlcjpudWxsLGZpbHRlcixzb3J0LGFsbG93RG90cyxzZXJpYWxpemVEYXRlLGZvcm1hdHRlcixlbmNvZGVWYWx1ZXNPbmx5KSkpfXJldHVybiBrZXlzLmpvaW4oZGVsaW1pdGVyKX0saGFzPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHksZGVmYXVsdHMkMT17YWxsb3dEb3RzOiExLGFsbG93UHJvdG90eXBlczohMSxhcnJheUxpbWl0OjIwLGRlY29kZXI6dXRpbHMuZGVjb2RlLGRlbGltaXRlcjpcIiZcIixkZXB0aDo1LHBhcmFtZXRlckxpbWl0OjFlMyxwbGFpbk9iamVjdHM6ITEsc3RyaWN0TnVsbEhhbmRsaW5nOiExfSxwYXJzZVZhbHVlcz1mdW5jdGlvbihzdHIsb3B0aW9ucyl7Zm9yKHZhciBvYmo9e30scGFydHM9c3RyLnNwbGl0KG9wdGlvbnMuZGVsaW1pdGVyLG9wdGlvbnMucGFyYW1ldGVyTGltaXQ9PT0xLzA/dm9pZCAwOm9wdGlvbnMucGFyYW1ldGVyTGltaXQpLGk9MDtpPHBhcnRzLmxlbmd0aDsrK2kpe3ZhciBrZXksdmFsLHBhcnQ9cGFydHNbaV0scG9zPS0xPT09cGFydC5pbmRleE9mKFwiXT1cIik/cGFydC5pbmRleE9mKFwiPVwiKTpwYXJ0LmluZGV4T2YoXCJdPVwiKSsxOy0xPT09cG9zPyhrZXk9b3B0aW9ucy5kZWNvZGVyKHBhcnQpLHZhbD1vcHRpb25zLnN0cmljdE51bGxIYW5kbGluZz9udWxsOlwiXCIpOihrZXk9b3B0aW9ucy5kZWNvZGVyKHBhcnQuc2xpY2UoMCxwb3MpKSx2YWw9b3B0aW9ucy5kZWNvZGVyKHBhcnQuc2xpY2UocG9zKzEpKSksaGFzLmNhbGwob2JqLGtleSk/b2JqW2tleV09W10uY29uY2F0KG9ialtrZXldKS5jb25jYXQodmFsKTpvYmpba2V5XT12YWx9cmV0dXJuIG9ian0scGFyc2VPYmplY3Q9ZnVuY3Rpb24oY2hhaW4sdmFsLG9wdGlvbnMpe2lmKCFjaGFpbi5sZW5ndGgpcmV0dXJuIHZhbDt2YXIgb2JqLHJvb3Q9Y2hhaW4uc2hpZnQoKTtpZihcIltdXCI9PT1yb290KW9iaj0ob2JqPVtdKS5jb25jYXQocGFyc2VPYmplY3QoY2hhaW4sdmFsLG9wdGlvbnMpKTtlbHNle29iaj1vcHRpb25zLnBsYWluT2JqZWN0cz9PYmplY3QuY3JlYXRlKG51bGwpOnt9O3ZhciBjbGVhblJvb3Q9XCJbXCI9PT1yb290LmNoYXJBdCgwKSYmXCJdXCI9PT1yb290LmNoYXJBdChyb290Lmxlbmd0aC0xKT9yb290LnNsaWNlKDEsLTEpOnJvb3QsaW5kZXg9cGFyc2VJbnQoY2xlYW5Sb290LDEwKTshaXNOYU4oaW5kZXgpJiZyb290IT09Y2xlYW5Sb290JiZTdHJpbmcoaW5kZXgpPT09Y2xlYW5Sb290JiZpbmRleD49MCYmb3B0aW9ucy5wYXJzZUFycmF5cyYmaW5kZXg8PW9wdGlvbnMuYXJyYXlMaW1pdD8ob2JqPVtdKVtpbmRleF09cGFyc2VPYmplY3QoY2hhaW4sdmFsLG9wdGlvbnMpOm9ialtjbGVhblJvb3RdPXBhcnNlT2JqZWN0KGNoYWluLHZhbCxvcHRpb25zKX1yZXR1cm4gb2JqfSxwYXJzZUtleXM9ZnVuY3Rpb24oZ2l2ZW5LZXksdmFsLG9wdGlvbnMpe2lmKGdpdmVuS2V5KXt2YXIga2V5PW9wdGlvbnMuYWxsb3dEb3RzP2dpdmVuS2V5LnJlcGxhY2UoL1xcLihbXi5bXSspL2csXCJbJDFdXCIpOmdpdmVuS2V5LGNoaWxkPS8oXFxbW15bXFxdXSpdKS9nLHNlZ21lbnQ9LyhcXFtbXltcXF1dKl0pLy5leGVjKGtleSkscGFyZW50PXNlZ21lbnQ/a2V5LnNsaWNlKDAsc2VnbWVudC5pbmRleCk6a2V5LGtleXM9W107aWYocGFyZW50KXtpZighb3B0aW9ucy5wbGFpbk9iamVjdHMmJmhhcy5jYWxsKE9iamVjdC5wcm90b3R5cGUscGFyZW50KSYmIW9wdGlvbnMuYWxsb3dQcm90b3R5cGVzKXJldHVybjtrZXlzLnB1c2gocGFyZW50KX1mb3IodmFyIGk9MDtudWxsIT09KHNlZ21lbnQ9Y2hpbGQuZXhlYyhrZXkpKSYmaTxvcHRpb25zLmRlcHRoOyl7aWYoaSs9MSwhb3B0aW9ucy5wbGFpbk9iamVjdHMmJmhhcy5jYWxsKE9iamVjdC5wcm90b3R5cGUsc2VnbWVudFsxXS5zbGljZSgxLC0xKSkmJiFvcHRpb25zLmFsbG93UHJvdG90eXBlcylyZXR1cm47a2V5cy5wdXNoKHNlZ21lbnRbMV0pfXJldHVybiBzZWdtZW50JiZrZXlzLnB1c2goXCJbXCIra2V5LnNsaWNlKHNlZ21lbnQuaW5kZXgpK1wiXVwiKSxwYXJzZU9iamVjdChrZXlzLHZhbCxvcHRpb25zKX19LHBhcnNlPWZ1bmN0aW9uKHN0cixvcHRzKXt2YXIgb3B0aW9ucz1vcHRzfHx7fTtpZihudWxsIT09b3B0aW9ucy5kZWNvZGVyJiZ2b2lkIDAhPT1vcHRpb25zLmRlY29kZXImJlwiZnVuY3Rpb25cIiE9dHlwZW9mIG9wdGlvbnMuZGVjb2Rlcil0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVjb2RlciBoYXMgdG8gYmUgYSBmdW5jdGlvbi5cIik7aWYob3B0aW9ucy5kZWxpbWl0ZXI9XCJzdHJpbmdcIj09dHlwZW9mIG9wdGlvbnMuZGVsaW1pdGVyfHx1dGlscy5pc1JlZ0V4cChvcHRpb25zLmRlbGltaXRlcik/b3B0aW9ucy5kZWxpbWl0ZXI6ZGVmYXVsdHMkMS5kZWxpbWl0ZXIsb3B0aW9ucy5kZXB0aD1cIm51bWJlclwiPT10eXBlb2Ygb3B0aW9ucy5kZXB0aD9vcHRpb25zLmRlcHRoOmRlZmF1bHRzJDEuZGVwdGgsb3B0aW9ucy5hcnJheUxpbWl0PVwibnVtYmVyXCI9PXR5cGVvZiBvcHRpb25zLmFycmF5TGltaXQ/b3B0aW9ucy5hcnJheUxpbWl0OmRlZmF1bHRzJDEuYXJyYXlMaW1pdCxvcHRpb25zLnBhcnNlQXJyYXlzPSExIT09b3B0aW9ucy5wYXJzZUFycmF5cyxvcHRpb25zLmRlY29kZXI9XCJmdW5jdGlvblwiPT10eXBlb2Ygb3B0aW9ucy5kZWNvZGVyP29wdGlvbnMuZGVjb2RlcjpkZWZhdWx0cyQxLmRlY29kZXIsb3B0aW9ucy5hbGxvd0RvdHM9XCJib29sZWFuXCI9PXR5cGVvZiBvcHRpb25zLmFsbG93RG90cz9vcHRpb25zLmFsbG93RG90czpkZWZhdWx0cyQxLmFsbG93RG90cyxvcHRpb25zLnBsYWluT2JqZWN0cz1cImJvb2xlYW5cIj09dHlwZW9mIG9wdGlvbnMucGxhaW5PYmplY3RzP29wdGlvbnMucGxhaW5PYmplY3RzOmRlZmF1bHRzJDEucGxhaW5PYmplY3RzLG9wdGlvbnMuYWxsb3dQcm90b3R5cGVzPVwiYm9vbGVhblwiPT10eXBlb2Ygb3B0aW9ucy5hbGxvd1Byb3RvdHlwZXM/b3B0aW9ucy5hbGxvd1Byb3RvdHlwZXM6ZGVmYXVsdHMkMS5hbGxvd1Byb3RvdHlwZXMsb3B0aW9ucy5wYXJhbWV0ZXJMaW1pdD1cIm51bWJlclwiPT10eXBlb2Ygb3B0aW9ucy5wYXJhbWV0ZXJMaW1pdD9vcHRpb25zLnBhcmFtZXRlckxpbWl0OmRlZmF1bHRzJDEucGFyYW1ldGVyTGltaXQsb3B0aW9ucy5zdHJpY3ROdWxsSGFuZGxpbmc9XCJib29sZWFuXCI9PXR5cGVvZiBvcHRpb25zLnN0cmljdE51bGxIYW5kbGluZz9vcHRpb25zLnN0cmljdE51bGxIYW5kbGluZzpkZWZhdWx0cyQxLnN0cmljdE51bGxIYW5kbGluZyxcIlwiPT09c3RyfHxudWxsPT1zdHIpcmV0dXJuIG9wdGlvbnMucGxhaW5PYmplY3RzP09iamVjdC5jcmVhdGUobnVsbCk6e307Zm9yKHZhciB0ZW1wT2JqPVwic3RyaW5nXCI9PXR5cGVvZiBzdHI/cGFyc2VWYWx1ZXMoc3RyLG9wdGlvbnMpOnN0cixvYmo9b3B0aW9ucy5wbGFpbk9iamVjdHM/T2JqZWN0LmNyZWF0ZShudWxsKTp7fSxrZXlzPU9iamVjdC5rZXlzKHRlbXBPYmopLGk9MDtpPGtleXMubGVuZ3RoOysraSl7dmFyIGtleT1rZXlzW2ldLG5ld09iaj1wYXJzZUtleXMoa2V5LHRlbXBPYmpba2V5XSxvcHRpb25zKTtvYmo9dXRpbHMubWVyZ2Uob2JqLG5ld09iaixvcHRpb25zKX1yZXR1cm4gdXRpbHMuY29tcGFjdChvYmopfSxsaWI9e2Zvcm1hdHM6Zm9ybWF0cyxwYXJzZTpwYXJzZSxzdHJpbmdpZnk6c3RyaW5naWZ5XzF9LGNvbXBvbmVudEVtaXR0ZXI9Y3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24obW9kdWxlKXtmdW5jdGlvbiBFbWl0dGVyKG9iail7aWYob2JqKXJldHVybiBmdW5jdGlvbihvYmope2Zvcih2YXIga2V5IGluIEVtaXR0ZXIucHJvdG90eXBlKW9ialtrZXldPUVtaXR0ZXIucHJvdG90eXBlW2tleV07cmV0dXJuIG9ian0ob2JqKX1tb2R1bGUuZXhwb3J0cz1FbWl0dGVyLEVtaXR0ZXIucHJvdG90eXBlLm9uPUVtaXR0ZXIucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXI9ZnVuY3Rpb24oZXZlbnQsZm4pe3JldHVybiB0aGlzLl9jYWxsYmFja3M9dGhpcy5fY2FsbGJhY2tzfHx7fSwodGhpcy5fY2FsbGJhY2tzW1wiJFwiK2V2ZW50XT10aGlzLl9jYWxsYmFja3NbXCIkXCIrZXZlbnRdfHxbXSkucHVzaChmbiksdGhpc30sRW1pdHRlci5wcm90b3R5cGUub25jZT1mdW5jdGlvbihldmVudCxmbil7ZnVuY3Rpb24gb24oKXt0aGlzLm9mZihldmVudCxvbiksZm4uYXBwbHkodGhpcyxhcmd1bWVudHMpfXJldHVybiBvbi5mbj1mbix0aGlzLm9uKGV2ZW50LG9uKSx0aGlzfSxFbWl0dGVyLnByb3RvdHlwZS5vZmY9RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXI9RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzPUVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXI9ZnVuY3Rpb24oZXZlbnQsZm4pe2lmKHRoaXMuX2NhbGxiYWNrcz10aGlzLl9jYWxsYmFja3N8fHt9LDA9PWFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIHRoaXMuX2NhbGxiYWNrcz17fSx0aGlzO3ZhciBjYixjYWxsYmFja3M9dGhpcy5fY2FsbGJhY2tzW1wiJFwiK2V2ZW50XTtpZighY2FsbGJhY2tzKXJldHVybiB0aGlzO2lmKDE9PWFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIGRlbGV0ZSB0aGlzLl9jYWxsYmFja3NbXCIkXCIrZXZlbnRdLHRoaXM7Zm9yKHZhciBpPTA7aTxjYWxsYmFja3MubGVuZ3RoO2krKylpZigoY2I9Y2FsbGJhY2tzW2ldKT09PWZufHxjYi5mbj09PWZuKXtjYWxsYmFja3Muc3BsaWNlKGksMSk7YnJlYWt9cmV0dXJuIHRoaXN9LEVtaXR0ZXIucHJvdG90eXBlLmVtaXQ9ZnVuY3Rpb24oZXZlbnQpe3RoaXMuX2NhbGxiYWNrcz10aGlzLl9jYWxsYmFja3N8fHt9O3ZhciBhcmdzPVtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLDEpLGNhbGxiYWNrcz10aGlzLl9jYWxsYmFja3NbXCIkXCIrZXZlbnRdO2lmKGNhbGxiYWNrcylmb3IodmFyIGk9MCxsZW49KGNhbGxiYWNrcz1jYWxsYmFja3Muc2xpY2UoMCkpLmxlbmd0aDtpPGxlbjsrK2kpY2FsbGJhY2tzW2ldLmFwcGx5KHRoaXMsYXJncyk7cmV0dXJuIHRoaXN9LEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycz1mdW5jdGlvbihldmVudCl7cmV0dXJuIHRoaXMuX2NhbGxiYWNrcz10aGlzLl9jYWxsYmFja3N8fHt9LHRoaXMuX2NhbGxiYWNrc1tcIiRcIitldmVudF18fFtdfSxFbWl0dGVyLnByb3RvdHlwZS5oYXNMaXN0ZW5lcnM9ZnVuY3Rpb24oZXZlbnQpe3JldHVybiEhdGhpcy5saXN0ZW5lcnMoZXZlbnQpLmxlbmd0aH19KTtmdW5jdGlvbiBpc09iamVjdChvYmope3JldHVybiBudWxsIT09b2JqJiZcIm9iamVjdFwiPT10eXBlb2Ygb2JqfXZhciBpc09iamVjdF8xPWlzT2JqZWN0LHJlcXVlc3RCYXNlPVJlcXVlc3RCYXNlO2Z1bmN0aW9uIFJlcXVlc3RCYXNlKG9iail7aWYob2JqKXJldHVybiBtaXhpbihvYmopfWZ1bmN0aW9uIG1peGluKG9iail7Zm9yKHZhciBrZXkgaW4gUmVxdWVzdEJhc2UucHJvdG90eXBlKW9ialtrZXldPVJlcXVlc3RCYXNlLnByb3RvdHlwZVtrZXldO3JldHVybiBvYmp9UmVxdWVzdEJhc2UucHJvdG90eXBlLmNsZWFyVGltZW91dD1mdW5jdGlvbigpe3JldHVybiBjbGVhclRpbWVvdXQodGhpcy5fdGltZXIpLGNsZWFyVGltZW91dCh0aGlzLl9yZXNwb25zZVRpbWVvdXRUaW1lciksZGVsZXRlIHRoaXMuX3RpbWVyLGRlbGV0ZSB0aGlzLl9yZXNwb25zZVRpbWVvdXRUaW1lcix0aGlzfSxSZXF1ZXN0QmFzZS5wcm90b3R5cGUucGFyc2U9ZnVuY3Rpb24oZm4pe3JldHVybiB0aGlzLl9wYXJzZXI9Zm4sdGhpc30sUmVxdWVzdEJhc2UucHJvdG90eXBlLnJlc3BvbnNlVHlwZT1mdW5jdGlvbih2YWwpe3JldHVybiB0aGlzLl9yZXNwb25zZVR5cGU9dmFsLHRoaXN9LFJlcXVlc3RCYXNlLnByb3RvdHlwZS5zZXJpYWxpemU9ZnVuY3Rpb24oZm4pe3JldHVybiB0aGlzLl9zZXJpYWxpemVyPWZuLHRoaXN9LFJlcXVlc3RCYXNlLnByb3RvdHlwZS50aW1lb3V0PWZ1bmN0aW9uKG9wdGlvbnMpe2lmKCFvcHRpb25zfHxcIm9iamVjdFwiIT10eXBlb2Ygb3B0aW9ucylyZXR1cm4gdGhpcy5fdGltZW91dD1vcHRpb25zLHRoaXMuX3Jlc3BvbnNlVGltZW91dD0wLHRoaXM7Zm9yKHZhciBvcHRpb24gaW4gb3B0aW9ucylzd2l0Y2gob3B0aW9uKXtjYXNlXCJkZWFkbGluZVwiOnRoaXMuX3RpbWVvdXQ9b3B0aW9ucy5kZWFkbGluZTticmVhaztjYXNlXCJyZXNwb25zZVwiOnRoaXMuX3Jlc3BvbnNlVGltZW91dD1vcHRpb25zLnJlc3BvbnNlO2JyZWFrO2RlZmF1bHQ6Y29uc29sZS53YXJuKFwiVW5rbm93biB0aW1lb3V0IG9wdGlvblwiLG9wdGlvbil9cmV0dXJuIHRoaXN9LFJlcXVlc3RCYXNlLnByb3RvdHlwZS5yZXRyeT1mdW5jdGlvbihjb3VudCxmbil7cmV0dXJuIDAhPT1hcmd1bWVudHMubGVuZ3RoJiYhMCE9PWNvdW50fHwoY291bnQ9MSksY291bnQ8PTAmJihjb3VudD0wKSx0aGlzLl9tYXhSZXRyaWVzPWNvdW50LHRoaXMuX3JldHJpZXM9MCx0aGlzLl9yZXRyeUNhbGxiYWNrPWZuLHRoaXN9O3ZhciBFUlJPUl9DT0RFUz1bXCJFQ09OTlJFU0VUXCIsXCJFVElNRURPVVRcIixcIkVBRERSSU5GT1wiLFwiRVNPQ0tFVFRJTUVET1VUXCJdO1JlcXVlc3RCYXNlLnByb3RvdHlwZS5fc2hvdWxkUmV0cnk9ZnVuY3Rpb24oZXJyLHJlcyl7aWYoIXRoaXMuX21heFJldHJpZXN8fHRoaXMuX3JldHJpZXMrKz49dGhpcy5fbWF4UmV0cmllcylyZXR1cm4hMTtpZih0aGlzLl9yZXRyeUNhbGxiYWNrKXRyeXt2YXIgb3ZlcnJpZGU9dGhpcy5fcmV0cnlDYWxsYmFjayhlcnIscmVzKTtpZighMD09PW92ZXJyaWRlKXJldHVybiEwO2lmKCExPT09b3ZlcnJpZGUpcmV0dXJuITF9Y2F0Y2goZSl7Y29uc29sZS5lcnJvcihlKX1pZihyZXMmJnJlcy5zdGF0dXMmJnJlcy5zdGF0dXM+PTUwMCYmNTAxIT1yZXMuc3RhdHVzKXJldHVybiEwO2lmKGVycil7aWYoZXJyLmNvZGUmJn5FUlJPUl9DT0RFUy5pbmRleE9mKGVyci5jb2RlKSlyZXR1cm4hMDtpZihlcnIudGltZW91dCYmXCJFQ09OTkFCT1JURURcIj09ZXJyLmNvZGUpcmV0dXJuITA7aWYoZXJyLmNyb3NzRG9tYWluKXJldHVybiEwfXJldHVybiExfSxSZXF1ZXN0QmFzZS5wcm90b3R5cGUuX3JldHJ5PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY2xlYXJUaW1lb3V0KCksdGhpcy5yZXEmJih0aGlzLnJlcT1udWxsLHRoaXMucmVxPXRoaXMucmVxdWVzdCgpKSx0aGlzLl9hYm9ydGVkPSExLHRoaXMudGltZWRvdXQ9ITEsdGhpcy5fZW5kKCl9LFJlcXVlc3RCYXNlLnByb3RvdHlwZS50aGVuPWZ1bmN0aW9uKHJlc29sdmUscmVqZWN0KXtpZighdGhpcy5fZnVsbGZpbGxlZFByb21pc2Upe3ZhciBzZWxmPXRoaXM7dGhpcy5fZW5kQ2FsbGVkJiZjb25zb2xlLndhcm4oXCJXYXJuaW5nOiBzdXBlcmFnZW50IHJlcXVlc3Qgd2FzIHNlbnQgdHdpY2UsIGJlY2F1c2UgYm90aCAuZW5kKCkgYW5kIC50aGVuKCkgd2VyZSBjYWxsZWQuIE5ldmVyIGNhbGwgLmVuZCgpIGlmIHlvdSB1c2UgcHJvbWlzZXNcIiksdGhpcy5fZnVsbGZpbGxlZFByb21pc2U9bmV3IFByb21pc2UoZnVuY3Rpb24oaW5uZXJSZXNvbHZlLGlubmVyUmVqZWN0KXtzZWxmLmVuZChmdW5jdGlvbihlcnIscmVzKXtlcnI/aW5uZXJSZWplY3QoZXJyKTppbm5lclJlc29sdmUocmVzKX0pfSl9cmV0dXJuIHRoaXMuX2Z1bGxmaWxsZWRQcm9taXNlLnRoZW4ocmVzb2x2ZSxyZWplY3QpfSxSZXF1ZXN0QmFzZS5wcm90b3R5cGUuY2F0Y2g9ZnVuY3Rpb24oY2Ipe3JldHVybiB0aGlzLnRoZW4odm9pZCAwLGNiKX0sUmVxdWVzdEJhc2UucHJvdG90eXBlLnVzZT1mdW5jdGlvbihmbil7cmV0dXJuIGZuKHRoaXMpLHRoaXN9LFJlcXVlc3RCYXNlLnByb3RvdHlwZS5vaz1mdW5jdGlvbihjYil7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgY2IpdGhyb3cgRXJyb3IoXCJDYWxsYmFjayByZXF1aXJlZFwiKTtyZXR1cm4gdGhpcy5fb2tDYWxsYmFjaz1jYix0aGlzfSxSZXF1ZXN0QmFzZS5wcm90b3R5cGUuX2lzUmVzcG9uc2VPSz1mdW5jdGlvbihyZXMpe3JldHVybiEhcmVzJiYodGhpcy5fb2tDYWxsYmFjaz90aGlzLl9va0NhbGxiYWNrKHJlcyk6cmVzLnN0YXR1cz49MjAwJiZyZXMuc3RhdHVzPDMwMCl9LFJlcXVlc3RCYXNlLnByb3RvdHlwZS5nZXQ9ZnVuY3Rpb24oZmllbGQpe3JldHVybiB0aGlzLl9oZWFkZXJbZmllbGQudG9Mb3dlckNhc2UoKV19LFJlcXVlc3RCYXNlLnByb3RvdHlwZS5nZXRIZWFkZXI9UmVxdWVzdEJhc2UucHJvdG90eXBlLmdldCxSZXF1ZXN0QmFzZS5wcm90b3R5cGUuc2V0PWZ1bmN0aW9uKGZpZWxkLHZhbCl7aWYoaXNPYmplY3RfMShmaWVsZCkpe2Zvcih2YXIga2V5IGluIGZpZWxkKXRoaXMuc2V0KGtleSxmaWVsZFtrZXldKTtyZXR1cm4gdGhpc31yZXR1cm4gdGhpcy5faGVhZGVyW2ZpZWxkLnRvTG93ZXJDYXNlKCldPXZhbCx0aGlzLmhlYWRlcltmaWVsZF09dmFsLHRoaXN9LFJlcXVlc3RCYXNlLnByb3RvdHlwZS51bnNldD1mdW5jdGlvbihmaWVsZCl7cmV0dXJuIGRlbGV0ZSB0aGlzLl9oZWFkZXJbZmllbGQudG9Mb3dlckNhc2UoKV0sZGVsZXRlIHRoaXMuaGVhZGVyW2ZpZWxkXSx0aGlzfSxSZXF1ZXN0QmFzZS5wcm90b3R5cGUuZmllbGQ9ZnVuY3Rpb24obmFtZSx2YWwpe2lmKG51bGw9PW5hbWUpdGhyb3cgbmV3IEVycm9yKFwiLmZpZWxkKG5hbWUsIHZhbCkgbmFtZSBjYW4gbm90IGJlIGVtcHR5XCIpO2lmKHRoaXMuX2RhdGEmJmNvbnNvbGUuZXJyb3IoXCIuZmllbGQoKSBjYW4ndCBiZSB1c2VkIGlmIC5zZW5kKCkgaXMgdXNlZC4gUGxlYXNlIHVzZSBvbmx5IC5zZW5kKCkgb3Igb25seSAuZmllbGQoKSAmIC5hdHRhY2goKVwiKSxpc09iamVjdF8xKG5hbWUpKXtmb3IodmFyIGtleSBpbiBuYW1lKXRoaXMuZmllbGQoa2V5LG5hbWVba2V5XSk7cmV0dXJuIHRoaXN9aWYoQXJyYXkuaXNBcnJheSh2YWwpKXtmb3IodmFyIGkgaW4gdmFsKXRoaXMuZmllbGQobmFtZSx2YWxbaV0pO3JldHVybiB0aGlzfWlmKG51bGw9PXZhbCl0aHJvdyBuZXcgRXJyb3IoXCIuZmllbGQobmFtZSwgdmFsKSB2YWwgY2FuIG5vdCBiZSBlbXB0eVwiKTtyZXR1cm5cImJvb2xlYW5cIj09dHlwZW9mIHZhbCYmKHZhbD1cIlwiK3ZhbCksdGhpcy5fZ2V0Rm9ybURhdGEoKS5hcHBlbmQobmFtZSx2YWwpLHRoaXN9LFJlcXVlc3RCYXNlLnByb3RvdHlwZS5hYm9ydD1mdW5jdGlvbigpe3JldHVybiB0aGlzLl9hYm9ydGVkP3RoaXM6KHRoaXMuX2Fib3J0ZWQ9ITAsdGhpcy54aHImJnRoaXMueGhyLmFib3J0KCksdGhpcy5yZXEmJnRoaXMucmVxLmFib3J0KCksdGhpcy5jbGVhclRpbWVvdXQoKSx0aGlzLmVtaXQoXCJhYm9ydFwiKSx0aGlzKX0sUmVxdWVzdEJhc2UucHJvdG90eXBlLl9hdXRoPWZ1bmN0aW9uKHVzZXIscGFzcyxvcHRpb25zLGJhc2U2NEVuY29kZXIpe3N3aXRjaChvcHRpb25zLnR5cGUpe2Nhc2VcImJhc2ljXCI6dGhpcy5zZXQoXCJBdXRob3JpemF0aW9uXCIsXCJCYXNpYyBcIitiYXNlNjRFbmNvZGVyKHVzZXIrXCI6XCIrcGFzcykpO2JyZWFrO2Nhc2VcImF1dG9cIjp0aGlzLnVzZXJuYW1lPXVzZXIsdGhpcy5wYXNzd29yZD1wYXNzO2JyZWFrO2Nhc2VcImJlYXJlclwiOnRoaXMuc2V0KFwiQXV0aG9yaXphdGlvblwiLFwiQmVhcmVyIFwiK3VzZXIpfXJldHVybiB0aGlzfSxSZXF1ZXN0QmFzZS5wcm90b3R5cGUud2l0aENyZWRlbnRpYWxzPWZ1bmN0aW9uKG9uKXtyZXR1cm4gbnVsbD09b24mJihvbj0hMCksdGhpcy5fd2l0aENyZWRlbnRpYWxzPW9uLHRoaXN9LFJlcXVlc3RCYXNlLnByb3RvdHlwZS5yZWRpcmVjdHM9ZnVuY3Rpb24obil7cmV0dXJuIHRoaXMuX21heFJlZGlyZWN0cz1uLHRoaXN9LFJlcXVlc3RCYXNlLnByb3RvdHlwZS5tYXhSZXNwb25zZVNpemU9ZnVuY3Rpb24obil7aWYoXCJudW1iZXJcIiE9dHlwZW9mIG4pdGhyb3cgVHlwZUVycm9yKFwiSW52YWxpZCBhcmd1bWVudFwiKTtyZXR1cm4gdGhpcy5fbWF4UmVzcG9uc2VTaXplPW4sdGhpc30sUmVxdWVzdEJhc2UucHJvdG90eXBlLnRvSlNPTj1mdW5jdGlvbigpe3JldHVybnttZXRob2Q6dGhpcy5tZXRob2QsdXJsOnRoaXMudXJsLGRhdGE6dGhpcy5fZGF0YSxoZWFkZXJzOnRoaXMuX2hlYWRlcn19LFJlcXVlc3RCYXNlLnByb3RvdHlwZS5zZW5kPWZ1bmN0aW9uKGRhdGEpe3ZhciBpc09iaj1pc09iamVjdF8xKGRhdGEpLHR5cGU9dGhpcy5faGVhZGVyW1wiY29udGVudC10eXBlXCJdO2lmKHRoaXMuX2Zvcm1EYXRhJiZjb25zb2xlLmVycm9yKFwiLnNlbmQoKSBjYW4ndCBiZSB1c2VkIGlmIC5hdHRhY2goKSBvciAuZmllbGQoKSBpcyB1c2VkLiBQbGVhc2UgdXNlIG9ubHkgLnNlbmQoKSBvciBvbmx5IC5maWVsZCgpICYgLmF0dGFjaCgpXCIpLGlzT2JqJiYhdGhpcy5fZGF0YSlBcnJheS5pc0FycmF5KGRhdGEpP3RoaXMuX2RhdGE9W106dGhpcy5faXNIb3N0KGRhdGEpfHwodGhpcy5fZGF0YT17fSk7ZWxzZSBpZihkYXRhJiZ0aGlzLl9kYXRhJiZ0aGlzLl9pc0hvc3QodGhpcy5fZGF0YSkpdGhyb3cgRXJyb3IoXCJDYW4ndCBtZXJnZSB0aGVzZSBzZW5kIGNhbGxzXCIpO2lmKGlzT2JqJiZpc09iamVjdF8xKHRoaXMuX2RhdGEpKWZvcih2YXIga2V5IGluIGRhdGEpdGhpcy5fZGF0YVtrZXldPWRhdGFba2V5XTtlbHNlXCJzdHJpbmdcIj09dHlwZW9mIGRhdGE/KHR5cGV8fHRoaXMudHlwZShcImZvcm1cIiksdHlwZT10aGlzLl9oZWFkZXJbXCJjb250ZW50LXR5cGVcIl0sdGhpcy5fZGF0YT1cImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiPT10eXBlP3RoaXMuX2RhdGE/dGhpcy5fZGF0YStcIiZcIitkYXRhOmRhdGE6KHRoaXMuX2RhdGF8fFwiXCIpK2RhdGEpOnRoaXMuX2RhdGE9ZGF0YTtyZXR1cm4haXNPYmp8fHRoaXMuX2lzSG9zdChkYXRhKT90aGlzOih0eXBlfHx0aGlzLnR5cGUoXCJqc29uXCIpLHRoaXMpfSxSZXF1ZXN0QmFzZS5wcm90b3R5cGUuc29ydFF1ZXJ5PWZ1bmN0aW9uKHNvcnQpe3JldHVybiB0aGlzLl9zb3J0PXZvaWQgMD09PXNvcnR8fHNvcnQsdGhpc30sUmVxdWVzdEJhc2UucHJvdG90eXBlLl9maW5hbGl6ZVF1ZXJ5U3RyaW5nPWZ1bmN0aW9uKCl7dmFyIHF1ZXJ5PXRoaXMuX3F1ZXJ5LmpvaW4oXCImXCIpO2lmKHF1ZXJ5JiYodGhpcy51cmwrPSh0aGlzLnVybC5pbmRleE9mKFwiP1wiKT49MD9cIiZcIjpcIj9cIikrcXVlcnkpLHRoaXMuX3F1ZXJ5Lmxlbmd0aD0wLHRoaXMuX3NvcnQpe3ZhciBpbmRleD10aGlzLnVybC5pbmRleE9mKFwiP1wiKTtpZihpbmRleD49MCl7dmFyIHF1ZXJ5QXJyPXRoaXMudXJsLnN1YnN0cmluZyhpbmRleCsxKS5zcGxpdChcIiZcIik7XCJmdW5jdGlvblwiPT10eXBlb2YgdGhpcy5fc29ydD9xdWVyeUFyci5zb3J0KHRoaXMuX3NvcnQpOnF1ZXJ5QXJyLnNvcnQoKSx0aGlzLnVybD10aGlzLnVybC5zdWJzdHJpbmcoMCxpbmRleCkrXCI/XCIrcXVlcnlBcnIuam9pbihcIiZcIil9fX0sUmVxdWVzdEJhc2UucHJvdG90eXBlLl9hcHBlbmRRdWVyeVN0cmluZz1mdW5jdGlvbigpe2NvbnNvbGUudHJhY2UoXCJVbnN1cHBvcnRlZFwiKX0sUmVxdWVzdEJhc2UucHJvdG90eXBlLl90aW1lb3V0RXJyb3I9ZnVuY3Rpb24ocmVhc29uLHRpbWVvdXQsZXJybm8pe2lmKCF0aGlzLl9hYm9ydGVkKXt2YXIgZXJyPW5ldyBFcnJvcihyZWFzb24rdGltZW91dCtcIm1zIGV4Y2VlZGVkXCIpO2Vyci50aW1lb3V0PXRpbWVvdXQsZXJyLmNvZGU9XCJFQ09OTkFCT1JURURcIixlcnIuZXJybm89ZXJybm8sdGhpcy50aW1lZG91dD0hMCx0aGlzLmFib3J0KCksdGhpcy5jYWxsYmFjayhlcnIpfX0sUmVxdWVzdEJhc2UucHJvdG90eXBlLl9zZXRUaW1lb3V0cz1mdW5jdGlvbigpe3ZhciBzZWxmPXRoaXM7dGhpcy5fdGltZW91dCYmIXRoaXMuX3RpbWVyJiYodGhpcy5fdGltZXI9c2V0VGltZW91dChmdW5jdGlvbigpe3NlbGYuX3RpbWVvdXRFcnJvcihcIlRpbWVvdXQgb2YgXCIsc2VsZi5fdGltZW91dCxcIkVUSU1FXCIpfSx0aGlzLl90aW1lb3V0KSksdGhpcy5fcmVzcG9uc2VUaW1lb3V0JiYhdGhpcy5fcmVzcG9uc2VUaW1lb3V0VGltZXImJih0aGlzLl9yZXNwb25zZVRpbWVvdXRUaW1lcj1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7c2VsZi5fdGltZW91dEVycm9yKFwiUmVzcG9uc2UgdGltZW91dCBvZiBcIixzZWxmLl9yZXNwb25zZVRpbWVvdXQsXCJFVElNRURPVVRcIil9LHRoaXMuX3Jlc3BvbnNlVGltZW91dCkpfTt2YXIgdHlwZT1mdW5jdGlvbihzdHIpe3JldHVybiBzdHIuc3BsaXQoLyAqOyAqLykuc2hpZnQoKX0scGFyYW1zPWZ1bmN0aW9uKHN0cil7cmV0dXJuIHN0ci5zcGxpdCgvICo7ICovKS5yZWR1Y2UoZnVuY3Rpb24ob2JqLHN0cil7dmFyIHBhcnRzPXN0ci5zcGxpdCgvICo9ICovKSxrZXk9cGFydHMuc2hpZnQoKSx2YWw9cGFydHMuc2hpZnQoKTtyZXR1cm4ga2V5JiZ2YWwmJihvYmpba2V5XT12YWwpLG9ian0se30pfSxwYXJzZUxpbmtzPWZ1bmN0aW9uKHN0cil7cmV0dXJuIHN0ci5zcGxpdCgvICosICovKS5yZWR1Y2UoZnVuY3Rpb24ob2JqLHN0cil7dmFyIHBhcnRzPXN0ci5zcGxpdCgvICo7ICovKSx1cmw9cGFydHNbMF0uc2xpY2UoMSwtMSk7cmV0dXJuIG9ialtwYXJ0c1sxXS5zcGxpdCgvICo9ICovKVsxXS5zbGljZSgxLC0xKV09dXJsLG9ian0se30pfSxjbGVhbkhlYWRlcj1mdW5jdGlvbihoZWFkZXIsY2hhbmdlc09yaWdpbil7cmV0dXJuIGRlbGV0ZSBoZWFkZXJbXCJjb250ZW50LXR5cGVcIl0sZGVsZXRlIGhlYWRlcltcImNvbnRlbnQtbGVuZ3RoXCJdLGRlbGV0ZSBoZWFkZXJbXCJ0cmFuc2Zlci1lbmNvZGluZ1wiXSxkZWxldGUgaGVhZGVyLmhvc3QsY2hhbmdlc09yaWdpbiYmKGRlbGV0ZSBoZWFkZXIuYXV0aG9yaXphdGlvbixkZWxldGUgaGVhZGVyLmNvb2tpZSksaGVhZGVyfSx1dGlscyQxPXt0eXBlOnR5cGUscGFyYW1zOnBhcmFtcyxwYXJzZUxpbmtzOnBhcnNlTGlua3MsY2xlYW5IZWFkZXI6Y2xlYW5IZWFkZXJ9LHJlc3BvbnNlQmFzZT1SZXNwb25zZUJhc2U7ZnVuY3Rpb24gUmVzcG9uc2VCYXNlKG9iail7aWYob2JqKXJldHVybiBtaXhpbiQxKG9iail9ZnVuY3Rpb24gbWl4aW4kMShvYmope2Zvcih2YXIga2V5IGluIFJlc3BvbnNlQmFzZS5wcm90b3R5cGUpb2JqW2tleV09UmVzcG9uc2VCYXNlLnByb3RvdHlwZVtrZXldO3JldHVybiBvYmp9ZnVuY3Rpb24gQWdlbnQoKXt0aGlzLl9kZWZhdWx0cz1bXX1SZXNwb25zZUJhc2UucHJvdG90eXBlLmdldD1mdW5jdGlvbihmaWVsZCl7cmV0dXJuIHRoaXMuaGVhZGVyW2ZpZWxkLnRvTG93ZXJDYXNlKCldfSxSZXNwb25zZUJhc2UucHJvdG90eXBlLl9zZXRIZWFkZXJQcm9wZXJ0aWVzPWZ1bmN0aW9uKGhlYWRlcil7dmFyIGN0PWhlYWRlcltcImNvbnRlbnQtdHlwZVwiXXx8XCJcIjt0aGlzLnR5cGU9dXRpbHMkMS50eXBlKGN0KTt2YXIgcGFyYW1zPXV0aWxzJDEucGFyYW1zKGN0KTtmb3IodmFyIGtleSBpbiBwYXJhbXMpdGhpc1trZXldPXBhcmFtc1trZXldO3RoaXMubGlua3M9e307dHJ5e2hlYWRlci5saW5rJiYodGhpcy5saW5rcz11dGlscyQxLnBhcnNlTGlua3MoaGVhZGVyLmxpbmspKX1jYXRjaChlcnIpe319LFJlc3BvbnNlQmFzZS5wcm90b3R5cGUuX3NldFN0YXR1c1Byb3BlcnRpZXM9ZnVuY3Rpb24oc3RhdHVzKXt2YXIgdHlwZT1zdGF0dXMvMTAwfDA7dGhpcy5zdGF0dXM9dGhpcy5zdGF0dXNDb2RlPXN0YXR1cyx0aGlzLnN0YXR1c1R5cGU9dHlwZSx0aGlzLmluZm89MT09dHlwZSx0aGlzLm9rPTI9PXR5cGUsdGhpcy5yZWRpcmVjdD0zPT10eXBlLHRoaXMuY2xpZW50RXJyb3I9ND09dHlwZSx0aGlzLnNlcnZlckVycm9yPTU9PXR5cGUsdGhpcy5lcnJvcj0oND09dHlwZXx8NT09dHlwZSkmJnRoaXMudG9FcnJvcigpLHRoaXMuYWNjZXB0ZWQ9MjAyPT1zdGF0dXMsdGhpcy5ub0NvbnRlbnQ9MjA0PT1zdGF0dXMsdGhpcy5iYWRSZXF1ZXN0PTQwMD09c3RhdHVzLHRoaXMudW5hdXRob3JpemVkPTQwMT09c3RhdHVzLHRoaXMubm90QWNjZXB0YWJsZT00MDY9PXN0YXR1cyx0aGlzLmZvcmJpZGRlbj00MDM9PXN0YXR1cyx0aGlzLm5vdEZvdW5kPTQwND09c3RhdHVzfSxbXCJ1c2VcIixcIm9uXCIsXCJvbmNlXCIsXCJzZXRcIixcInF1ZXJ5XCIsXCJ0eXBlXCIsXCJhY2NlcHRcIixcImF1dGhcIixcIndpdGhDcmVkZW50aWFsc1wiLFwic29ydFF1ZXJ5XCIsXCJyZXRyeVwiLFwib2tcIixcInJlZGlyZWN0c1wiLFwidGltZW91dFwiLFwiYnVmZmVyXCIsXCJzZXJpYWxpemVcIixcInBhcnNlXCIsXCJjYVwiLFwia2V5XCIsXCJwZnhcIixcImNlcnRcIl0uZm9yRWFjaChmdW5jdGlvbihmbil7QWdlbnQucHJvdG90eXBlW2ZuXT1mdW5jdGlvbigpe3JldHVybiB0aGlzLl9kZWZhdWx0cy5wdXNoKHtmbjpmbixhcmd1bWVudHM6YXJndW1lbnRzfSksdGhpc319KSxBZ2VudC5wcm90b3R5cGUuX3NldERlZmF1bHRzPWZ1bmN0aW9uKHJlcSl7dGhpcy5fZGVmYXVsdHMuZm9yRWFjaChmdW5jdGlvbihkZWYpe3JlcVtkZWYuZm5dLmFwcGx5KHJlcSxkZWYuYXJndW1lbnRzKX0pfTtmb3IodmFyIGFnZW50QmFzZT1BZ2VudCxjbGllbnQ9Y3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24obW9kdWxlLGV4cG9ydHMpe3ZhciByb290O2Z1bmN0aW9uIG5vb3AoKXt9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz9yb290PXdpbmRvdzpcInVuZGVmaW5lZFwiIT10eXBlb2Ygc2VsZj9yb290PXNlbGY6KGNvbnNvbGUud2FybihcIlVzaW5nIGJyb3dzZXItb25seSB2ZXJzaW9uIG9mIHN1cGVyYWdlbnQgaW4gbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIikscm9vdD1jb21tb25qc0dsb2JhbCk7dmFyIHJlcXVlc3Q9ZXhwb3J0cz1tb2R1bGUuZXhwb3J0cz1mdW5jdGlvbihtZXRob2QsdXJsKXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiB1cmw/bmV3IGV4cG9ydHMuUmVxdWVzdChcIkdFVFwiLG1ldGhvZCkuZW5kKHVybCk6MT09YXJndW1lbnRzLmxlbmd0aD9uZXcgZXhwb3J0cy5SZXF1ZXN0KFwiR0VUXCIsbWV0aG9kKTpuZXcgZXhwb3J0cy5SZXF1ZXN0KG1ldGhvZCx1cmwpfTtleHBvcnRzLlJlcXVlc3Q9UmVxdWVzdCxyZXF1ZXN0LmdldFhIUj1mdW5jdGlvbigpe2lmKCEoIXJvb3QuWE1MSHR0cFJlcXVlc3R8fHJvb3QubG9jYXRpb24mJlwiZmlsZTpcIj09cm9vdC5sb2NhdGlvbi5wcm90b2NvbCYmcm9vdC5BY3RpdmVYT2JqZWN0KSlyZXR1cm4gbmV3IFhNTEh0dHBSZXF1ZXN0O3RyeXtyZXR1cm4gbmV3IEFjdGl2ZVhPYmplY3QoXCJNaWNyb3NvZnQuWE1MSFRUUFwiKX1jYXRjaChlKXt9dHJ5e3JldHVybiBuZXcgQWN0aXZlWE9iamVjdChcIk1zeG1sMi5YTUxIVFRQLjYuMFwiKX1jYXRjaChlKXt9dHJ5e3JldHVybiBuZXcgQWN0aXZlWE9iamVjdChcIk1zeG1sMi5YTUxIVFRQLjMuMFwiKX1jYXRjaChlKXt9dHJ5e3JldHVybiBuZXcgQWN0aXZlWE9iamVjdChcIk1zeG1sMi5YTUxIVFRQXCIpfWNhdGNoKGUpe310aHJvdyBFcnJvcihcIkJyb3dzZXItb25seSB2ZXJzaW9uIG9mIHN1cGVyYWdlbnQgY291bGQgbm90IGZpbmQgWEhSXCIpfTt2YXIgdHJpbT1cIlwiLnRyaW0/ZnVuY3Rpb24ocyl7cmV0dXJuIHMudHJpbSgpfTpmdW5jdGlvbihzKXtyZXR1cm4gcy5yZXBsYWNlKC8oXlxccyp8XFxzKiQpL2csXCJcIil9O2Z1bmN0aW9uIHNlcmlhbGl6ZShvYmope2lmKCFpc09iamVjdF8xKG9iaikpcmV0dXJuIG9iajt2YXIgcGFpcnM9W107Zm9yKHZhciBrZXkgaW4gb2JqKXB1c2hFbmNvZGVkS2V5VmFsdWVQYWlyKHBhaXJzLGtleSxvYmpba2V5XSk7cmV0dXJuIHBhaXJzLmpvaW4oXCImXCIpfWZ1bmN0aW9uIHB1c2hFbmNvZGVkS2V5VmFsdWVQYWlyKHBhaXJzLGtleSx2YWwpe2lmKG51bGwhPXZhbClpZihBcnJheS5pc0FycmF5KHZhbCkpdmFsLmZvckVhY2goZnVuY3Rpb24odil7cHVzaEVuY29kZWRLZXlWYWx1ZVBhaXIocGFpcnMsa2V5LHYpfSk7ZWxzZSBpZihpc09iamVjdF8xKHZhbCkpZm9yKHZhciBzdWJrZXkgaW4gdmFsKXB1c2hFbmNvZGVkS2V5VmFsdWVQYWlyKHBhaXJzLGtleStcIltcIitzdWJrZXkrXCJdXCIsdmFsW3N1YmtleV0pO2Vsc2UgcGFpcnMucHVzaChlbmNvZGVVUklDb21wb25lbnQoa2V5KStcIj1cIitlbmNvZGVVUklDb21wb25lbnQodmFsKSk7ZWxzZSBudWxsPT09dmFsJiZwYWlycy5wdXNoKGVuY29kZVVSSUNvbXBvbmVudChrZXkpKX1mdW5jdGlvbiBwYXJzZVN0cmluZyhzdHIpe2Zvcih2YXIgcGFpcixwb3Msb2JqPXt9LHBhaXJzPXN0ci5zcGxpdChcIiZcIiksaT0wLGxlbj1wYWlycy5sZW5ndGg7aTxsZW47KytpKS0xPT0ocG9zPShwYWlyPXBhaXJzW2ldKS5pbmRleE9mKFwiPVwiKSk/b2JqW2RlY29kZVVSSUNvbXBvbmVudChwYWlyKV09XCJcIjpvYmpbZGVjb2RlVVJJQ29tcG9uZW50KHBhaXIuc2xpY2UoMCxwb3MpKV09ZGVjb2RlVVJJQ29tcG9uZW50KHBhaXIuc2xpY2UocG9zKzEpKTtyZXR1cm4gb2JqfWZ1bmN0aW9uIGlzSlNPTihtaW1lKXtyZXR1cm4vW1xcLytdanNvbigkfFteLVxcd10pLy50ZXN0KG1pbWUpfWZ1bmN0aW9uIFJlc3BvbnNlKHJlcSl7dGhpcy5yZXE9cmVxLHRoaXMueGhyPXRoaXMucmVxLnhocix0aGlzLnRleHQ9XCJIRUFEXCIhPXRoaXMucmVxLm1ldGhvZCYmKFwiXCI9PT10aGlzLnhoci5yZXNwb25zZVR5cGV8fFwidGV4dFwiPT09dGhpcy54aHIucmVzcG9uc2VUeXBlKXx8dm9pZCAwPT09dGhpcy54aHIucmVzcG9uc2VUeXBlP3RoaXMueGhyLnJlc3BvbnNlVGV4dDpudWxsLHRoaXMuc3RhdHVzVGV4dD10aGlzLnJlcS54aHIuc3RhdHVzVGV4dDt2YXIgc3RhdHVzPXRoaXMueGhyLnN0YXR1czsxMjIzPT09c3RhdHVzJiYoc3RhdHVzPTIwNCksdGhpcy5fc2V0U3RhdHVzUHJvcGVydGllcyhzdGF0dXMpLHRoaXMuaGVhZGVyPXRoaXMuaGVhZGVycz1mdW5jdGlvbihzdHIpe2Zvcih2YXIgaW5kZXgsbGluZSxmaWVsZCx2YWwsbGluZXM9c3RyLnNwbGl0KC9cXHI/XFxuLyksZmllbGRzPXt9LGk9MCxsZW49bGluZXMubGVuZ3RoO2k8bGVuOysraSktMSE9PShpbmRleD0obGluZT1saW5lc1tpXSkuaW5kZXhPZihcIjpcIikpJiYoZmllbGQ9bGluZS5zbGljZSgwLGluZGV4KS50b0xvd2VyQ2FzZSgpLHZhbD10cmltKGxpbmUuc2xpY2UoaW5kZXgrMSkpLGZpZWxkc1tmaWVsZF09dmFsKTtyZXR1cm4gZmllbGRzfSh0aGlzLnhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSksdGhpcy5oZWFkZXJbXCJjb250ZW50LXR5cGVcIl09dGhpcy54aHIuZ2V0UmVzcG9uc2VIZWFkZXIoXCJjb250ZW50LXR5cGVcIiksdGhpcy5fc2V0SGVhZGVyUHJvcGVydGllcyh0aGlzLmhlYWRlciksbnVsbD09PXRoaXMudGV4dCYmcmVxLl9yZXNwb25zZVR5cGU/dGhpcy5ib2R5PXRoaXMueGhyLnJlc3BvbnNlOnRoaXMuYm9keT1cIkhFQURcIiE9dGhpcy5yZXEubWV0aG9kP3RoaXMuX3BhcnNlQm9keSh0aGlzLnRleHQ/dGhpcy50ZXh0OnRoaXMueGhyLnJlc3BvbnNlKTpudWxsfWZ1bmN0aW9uIFJlcXVlc3QobWV0aG9kLHVybCl7dmFyIHNlbGY9dGhpczt0aGlzLl9xdWVyeT10aGlzLl9xdWVyeXx8W10sdGhpcy5tZXRob2Q9bWV0aG9kLHRoaXMudXJsPXVybCx0aGlzLmhlYWRlcj17fSx0aGlzLl9oZWFkZXI9e30sdGhpcy5vbihcImVuZFwiLGZ1bmN0aW9uKCl7dmFyIG5ld19lcnIsZXJyPW51bGwscmVzPW51bGw7dHJ5e3Jlcz1uZXcgUmVzcG9uc2Uoc2VsZil9Y2F0Y2goZSl7cmV0dXJuKGVycj1uZXcgRXJyb3IoXCJQYXJzZXIgaXMgdW5hYmxlIHRvIHBhcnNlIHRoZSByZXNwb25zZVwiKSkucGFyc2U9ITAsZXJyLm9yaWdpbmFsPWUsc2VsZi54aHI/KGVyci5yYXdSZXNwb25zZT12b2lkIDA9PT1zZWxmLnhoci5yZXNwb25zZVR5cGU/c2VsZi54aHIucmVzcG9uc2VUZXh0OnNlbGYueGhyLnJlc3BvbnNlLGVyci5zdGF0dXM9c2VsZi54aHIuc3RhdHVzP3NlbGYueGhyLnN0YXR1czpudWxsLGVyci5zdGF0dXNDb2RlPWVyci5zdGF0dXMpOihlcnIucmF3UmVzcG9uc2U9bnVsbCxlcnIuc3RhdHVzPW51bGwpLHNlbGYuY2FsbGJhY2soZXJyKX1zZWxmLmVtaXQoXCJyZXNwb25zZVwiLHJlcyk7dHJ5e3NlbGYuX2lzUmVzcG9uc2VPSyhyZXMpfHwobmV3X2Vycj1uZXcgRXJyb3IocmVzLnN0YXR1c1RleHR8fFwiVW5zdWNjZXNzZnVsIEhUVFAgcmVzcG9uc2VcIikpfWNhdGNoKGN1c3RvbV9lcnIpe25ld19lcnI9Y3VzdG9tX2Vycn1uZXdfZXJyPyhuZXdfZXJyLm9yaWdpbmFsPWVycixuZXdfZXJyLnJlc3BvbnNlPXJlcyxuZXdfZXJyLnN0YXR1cz1yZXMuc3RhdHVzLHNlbGYuY2FsbGJhY2sobmV3X2VycixyZXMpKTpzZWxmLmNhbGxiYWNrKG51bGwscmVzKX0pfWZ1bmN0aW9uIGRlbCh1cmwsZGF0YSxmbil7dmFyIHJlcT1yZXF1ZXN0KFwiREVMRVRFXCIsdXJsKTtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBkYXRhJiYoZm49ZGF0YSxkYXRhPW51bGwpLGRhdGEmJnJlcS5zZW5kKGRhdGEpLGZuJiZyZXEuZW5kKGZuKSxyZXF9cmVxdWVzdC5zZXJpYWxpemVPYmplY3Q9c2VyaWFsaXplLHJlcXVlc3QucGFyc2VTdHJpbmc9cGFyc2VTdHJpbmcscmVxdWVzdC50eXBlcz17aHRtbDpcInRleHQvaHRtbFwiLGpzb246XCJhcHBsaWNhdGlvbi9qc29uXCIseG1sOlwidGV4dC94bWxcIix1cmxlbmNvZGVkOlwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIsZm9ybTpcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiLFwiZm9ybS1kYXRhXCI6XCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIn0scmVxdWVzdC5zZXJpYWxpemU9e1wiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCI6c2VyaWFsaXplLFwiYXBwbGljYXRpb24vanNvblwiOkpTT04uc3RyaW5naWZ5fSxyZXF1ZXN0LnBhcnNlPXtcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiOnBhcnNlU3RyaW5nLFwiYXBwbGljYXRpb24vanNvblwiOkpTT04ucGFyc2V9LHJlc3BvbnNlQmFzZShSZXNwb25zZS5wcm90b3R5cGUpLFJlc3BvbnNlLnByb3RvdHlwZS5fcGFyc2VCb2R5PWZ1bmN0aW9uKHN0cil7dmFyIHBhcnNlPXJlcXVlc3QucGFyc2VbdGhpcy50eXBlXTtyZXR1cm4gdGhpcy5yZXEuX3BhcnNlcj90aGlzLnJlcS5fcGFyc2VyKHRoaXMsc3RyKTooIXBhcnNlJiZpc0pTT04odGhpcy50eXBlKSYmKHBhcnNlPXJlcXVlc3QucGFyc2VbXCJhcHBsaWNhdGlvbi9qc29uXCJdKSxwYXJzZSYmc3RyJiYoc3RyLmxlbmd0aHx8c3RyIGluc3RhbmNlb2YgT2JqZWN0KT9wYXJzZShzdHIpOm51bGwpfSxSZXNwb25zZS5wcm90b3R5cGUudG9FcnJvcj1mdW5jdGlvbigpe3ZhciByZXE9dGhpcy5yZXEsbWV0aG9kPXJlcS5tZXRob2QsdXJsPXJlcS51cmwsbXNnPVwiY2Fubm90IFwiK21ldGhvZCtcIiBcIit1cmwrXCIgKFwiK3RoaXMuc3RhdHVzK1wiKVwiLGVycj1uZXcgRXJyb3IobXNnKTtyZXR1cm4gZXJyLnN0YXR1cz10aGlzLnN0YXR1cyxlcnIubWV0aG9kPW1ldGhvZCxlcnIudXJsPXVybCxlcnJ9LHJlcXVlc3QuUmVzcG9uc2U9UmVzcG9uc2UsY29tcG9uZW50RW1pdHRlcihSZXF1ZXN0LnByb3RvdHlwZSkscmVxdWVzdEJhc2UoUmVxdWVzdC5wcm90b3R5cGUpLFJlcXVlc3QucHJvdG90eXBlLnR5cGU9ZnVuY3Rpb24odHlwZSl7cmV0dXJuIHRoaXMuc2V0KFwiQ29udGVudC1UeXBlXCIscmVxdWVzdC50eXBlc1t0eXBlXXx8dHlwZSksdGhpc30sUmVxdWVzdC5wcm90b3R5cGUuYWNjZXB0PWZ1bmN0aW9uKHR5cGUpe3JldHVybiB0aGlzLnNldChcIkFjY2VwdFwiLHJlcXVlc3QudHlwZXNbdHlwZV18fHR5cGUpLHRoaXN9LFJlcXVlc3QucHJvdG90eXBlLmF1dGg9ZnVuY3Rpb24odXNlcixwYXNzLG9wdGlvbnMpezE9PT1hcmd1bWVudHMubGVuZ3RoJiYocGFzcz1cIlwiKSxcIm9iamVjdFwiPT10eXBlb2YgcGFzcyYmbnVsbCE9PXBhc3MmJihvcHRpb25zPXBhc3MscGFzcz1cIlwiKSxvcHRpb25zfHwob3B0aW9ucz17dHlwZTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBidG9hP1wiYmFzaWNcIjpcImF1dG9cIn0pO3JldHVybiB0aGlzLl9hdXRoKHVzZXIscGFzcyxvcHRpb25zLGZ1bmN0aW9uKHN0cmluZyl7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgYnRvYSlyZXR1cm4gYnRvYShzdHJpbmcpO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCB1c2UgYmFzaWMgYXV0aCwgYnRvYSBpcyBub3QgYSBmdW5jdGlvblwiKX0pfSxSZXF1ZXN0LnByb3RvdHlwZS5xdWVyeT1mdW5jdGlvbih2YWwpe3JldHVyblwic3RyaW5nXCIhPXR5cGVvZiB2YWwmJih2YWw9c2VyaWFsaXplKHZhbCkpLHZhbCYmdGhpcy5fcXVlcnkucHVzaCh2YWwpLHRoaXN9LFJlcXVlc3QucHJvdG90eXBlLmF0dGFjaD1mdW5jdGlvbihmaWVsZCxmaWxlLG9wdGlvbnMpe2lmKGZpbGUpe2lmKHRoaXMuX2RhdGEpdGhyb3cgRXJyb3IoXCJzdXBlcmFnZW50IGNhbid0IG1peCAuc2VuZCgpIGFuZCAuYXR0YWNoKClcIik7dGhpcy5fZ2V0Rm9ybURhdGEoKS5hcHBlbmQoZmllbGQsZmlsZSxvcHRpb25zfHxmaWxlLm5hbWUpfXJldHVybiB0aGlzfSxSZXF1ZXN0LnByb3RvdHlwZS5fZ2V0Rm9ybURhdGE9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fZm9ybURhdGF8fCh0aGlzLl9mb3JtRGF0YT1uZXcgcm9vdC5Gb3JtRGF0YSksdGhpcy5fZm9ybURhdGF9LFJlcXVlc3QucHJvdG90eXBlLmNhbGxiYWNrPWZ1bmN0aW9uKGVycixyZXMpe2lmKHRoaXMuX3Nob3VsZFJldHJ5KGVycixyZXMpKXJldHVybiB0aGlzLl9yZXRyeSgpO3ZhciBmbj10aGlzLl9jYWxsYmFjazt0aGlzLmNsZWFyVGltZW91dCgpLGVyciYmKHRoaXMuX21heFJldHJpZXMmJihlcnIucmV0cmllcz10aGlzLl9yZXRyaWVzLTEpLHRoaXMuZW1pdChcImVycm9yXCIsZXJyKSksZm4oZXJyLHJlcyl9LFJlcXVlc3QucHJvdG90eXBlLmNyb3NzRG9tYWluRXJyb3I9ZnVuY3Rpb24oKXt2YXIgZXJyPW5ldyBFcnJvcihcIlJlcXVlc3QgaGFzIGJlZW4gdGVybWluYXRlZFxcblBvc3NpYmxlIGNhdXNlczogdGhlIG5ldHdvcmsgaXMgb2ZmbGluZSwgT3JpZ2luIGlzIG5vdCBhbGxvd2VkIGJ5IEFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbiwgdGhlIHBhZ2UgaXMgYmVpbmcgdW5sb2FkZWQsIGV0Yy5cIik7ZXJyLmNyb3NzRG9tYWluPSEwLGVyci5zdGF0dXM9dGhpcy5zdGF0dXMsZXJyLm1ldGhvZD10aGlzLm1ldGhvZCxlcnIudXJsPXRoaXMudXJsLHRoaXMuY2FsbGJhY2soZXJyKX0sUmVxdWVzdC5wcm90b3R5cGUuYnVmZmVyPVJlcXVlc3QucHJvdG90eXBlLmNhPVJlcXVlc3QucHJvdG90eXBlLmFnZW50PWZ1bmN0aW9uKCl7cmV0dXJuIGNvbnNvbGUud2FybihcIlRoaXMgaXMgbm90IHN1cHBvcnRlZCBpbiBicm93c2VyIHZlcnNpb24gb2Ygc3VwZXJhZ2VudFwiKSx0aGlzfSxSZXF1ZXN0LnByb3RvdHlwZS5waXBlPVJlcXVlc3QucHJvdG90eXBlLndyaXRlPWZ1bmN0aW9uKCl7dGhyb3cgRXJyb3IoXCJTdHJlYW1pbmcgaXMgbm90IHN1cHBvcnRlZCBpbiBicm93c2VyIHZlcnNpb24gb2Ygc3VwZXJhZ2VudFwiKX0sUmVxdWVzdC5wcm90b3R5cGUuX2lzSG9zdD1mdW5jdGlvbihvYmope3JldHVybiBvYmomJlwib2JqZWN0XCI9PXR5cGVvZiBvYmomJiFBcnJheS5pc0FycmF5KG9iaikmJlwiW29iamVjdCBPYmplY3RdXCIhPT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKX0sUmVxdWVzdC5wcm90b3R5cGUuZW5kPWZ1bmN0aW9uKGZuKXtyZXR1cm4gdGhpcy5fZW5kQ2FsbGVkJiZjb25zb2xlLndhcm4oXCJXYXJuaW5nOiAuZW5kKCkgd2FzIGNhbGxlZCB0d2ljZS4gVGhpcyBpcyBub3Qgc3VwcG9ydGVkIGluIHN1cGVyYWdlbnRcIiksdGhpcy5fZW5kQ2FsbGVkPSEwLHRoaXMuX2NhbGxiYWNrPWZufHxub29wLHRoaXMuX2ZpbmFsaXplUXVlcnlTdHJpbmcoKSx0aGlzLl9lbmQoKX0sUmVxdWVzdC5wcm90b3R5cGUuX2VuZD1mdW5jdGlvbigpe3ZhciBzZWxmPXRoaXMseGhyPXRoaXMueGhyPXJlcXVlc3QuZ2V0WEhSKCksZGF0YT10aGlzLl9mb3JtRGF0YXx8dGhpcy5fZGF0YTt0aGlzLl9zZXRUaW1lb3V0cygpLHhoci5vbnJlYWR5c3RhdGVjaGFuZ2U9ZnVuY3Rpb24oKXt2YXIgcmVhZHlTdGF0ZT14aHIucmVhZHlTdGF0ZTtpZihyZWFkeVN0YXRlPj0yJiZzZWxmLl9yZXNwb25zZVRpbWVvdXRUaW1lciYmY2xlYXJUaW1lb3V0KHNlbGYuX3Jlc3BvbnNlVGltZW91dFRpbWVyKSw0PT1yZWFkeVN0YXRlKXt2YXIgc3RhdHVzO3RyeXtzdGF0dXM9eGhyLnN0YXR1c31jYXRjaChlKXtzdGF0dXM9MH1pZighc3RhdHVzKXtpZihzZWxmLnRpbWVkb3V0fHxzZWxmLl9hYm9ydGVkKXJldHVybjtyZXR1cm4gc2VsZi5jcm9zc0RvbWFpbkVycm9yKCl9c2VsZi5lbWl0KFwiZW5kXCIpfX07dmFyIGhhbmRsZVByb2dyZXNzPWZ1bmN0aW9uKGRpcmVjdGlvbixlKXtlLnRvdGFsPjAmJihlLnBlcmNlbnQ9ZS5sb2FkZWQvZS50b3RhbCoxMDApLGUuZGlyZWN0aW9uPWRpcmVjdGlvbixzZWxmLmVtaXQoXCJwcm9ncmVzc1wiLGUpfTtpZih0aGlzLmhhc0xpc3RlbmVycyhcInByb2dyZXNzXCIpKXRyeXt4aHIub25wcm9ncmVzcz1oYW5kbGVQcm9ncmVzcy5iaW5kKG51bGwsXCJkb3dubG9hZFwiKSx4aHIudXBsb2FkJiYoeGhyLnVwbG9hZC5vbnByb2dyZXNzPWhhbmRsZVByb2dyZXNzLmJpbmQobnVsbCxcInVwbG9hZFwiKSl9Y2F0Y2goZSl7fXRyeXt0aGlzLnVzZXJuYW1lJiZ0aGlzLnBhc3N3b3JkP3hoci5vcGVuKHRoaXMubWV0aG9kLHRoaXMudXJsLCEwLHRoaXMudXNlcm5hbWUsdGhpcy5wYXNzd29yZCk6eGhyLm9wZW4odGhpcy5tZXRob2QsdGhpcy51cmwsITApfWNhdGNoKGVycil7cmV0dXJuIHRoaXMuY2FsbGJhY2soZXJyKX1pZih0aGlzLl93aXRoQ3JlZGVudGlhbHMmJih4aHIud2l0aENyZWRlbnRpYWxzPSEwKSwhdGhpcy5fZm9ybURhdGEmJlwiR0VUXCIhPXRoaXMubWV0aG9kJiZcIkhFQURcIiE9dGhpcy5tZXRob2QmJlwic3RyaW5nXCIhPXR5cGVvZiBkYXRhJiYhdGhpcy5faXNIb3N0KGRhdGEpKXt2YXIgY29udGVudFR5cGU9dGhpcy5faGVhZGVyW1wiY29udGVudC10eXBlXCJdLHNlcmlhbGl6ZT10aGlzLl9zZXJpYWxpemVyfHxyZXF1ZXN0LnNlcmlhbGl6ZVtjb250ZW50VHlwZT9jb250ZW50VHlwZS5zcGxpdChcIjtcIilbMF06XCJcIl07IXNlcmlhbGl6ZSYmaXNKU09OKGNvbnRlbnRUeXBlKSYmKHNlcmlhbGl6ZT1yZXF1ZXN0LnNlcmlhbGl6ZVtcImFwcGxpY2F0aW9uL2pzb25cIl0pLHNlcmlhbGl6ZSYmKGRhdGE9c2VyaWFsaXplKGRhdGEpKX1mb3IodmFyIGZpZWxkIGluIHRoaXMuaGVhZGVyKW51bGwhPXRoaXMuaGVhZGVyW2ZpZWxkXSYmdGhpcy5oZWFkZXIuaGFzT3duUHJvcGVydHkoZmllbGQpJiZ4aHIuc2V0UmVxdWVzdEhlYWRlcihmaWVsZCx0aGlzLmhlYWRlcltmaWVsZF0pO3JldHVybiB0aGlzLl9yZXNwb25zZVR5cGUmJih4aHIucmVzcG9uc2VUeXBlPXRoaXMuX3Jlc3BvbnNlVHlwZSksdGhpcy5lbWl0KFwicmVxdWVzdFwiLHRoaXMpLHhoci5zZW5kKHZvaWQgMCE9PWRhdGE/ZGF0YTpudWxsKSx0aGlzfSxyZXF1ZXN0LmFnZW50PWZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBhZ2VudEJhc2V9LFtcIkdFVFwiLFwiUE9TVFwiLFwiT1BUSU9OU1wiLFwiUEFUQ0hcIixcIlBVVFwiLFwiREVMRVRFXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKXthZ2VudEJhc2UucHJvdG90eXBlW21ldGhvZC50b0xvd2VyQ2FzZSgpXT1mdW5jdGlvbih1cmwsZm4pe3ZhciByZXE9bmV3IHJlcXVlc3QuUmVxdWVzdChtZXRob2QsdXJsKTtyZXR1cm4gdGhpcy5fc2V0RGVmYXVsdHMocmVxKSxmbiYmcmVxLmVuZChmbikscmVxfX0pLGFnZW50QmFzZS5wcm90b3R5cGUuZGVsPWFnZW50QmFzZS5wcm90b3R5cGUuZGVsZXRlLHJlcXVlc3QuZ2V0PWZ1bmN0aW9uKHVybCxkYXRhLGZuKXt2YXIgcmVxPXJlcXVlc3QoXCJHRVRcIix1cmwpO3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIGRhdGEmJihmbj1kYXRhLGRhdGE9bnVsbCksZGF0YSYmcmVxLnF1ZXJ5KGRhdGEpLGZuJiZyZXEuZW5kKGZuKSxyZXF9LHJlcXVlc3QuaGVhZD1mdW5jdGlvbih1cmwsZGF0YSxmbil7dmFyIHJlcT1yZXF1ZXN0KFwiSEVBRFwiLHVybCk7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgZGF0YSYmKGZuPWRhdGEsZGF0YT1udWxsKSxkYXRhJiZyZXEucXVlcnkoZGF0YSksZm4mJnJlcS5lbmQoZm4pLHJlcX0scmVxdWVzdC5vcHRpb25zPWZ1bmN0aW9uKHVybCxkYXRhLGZuKXt2YXIgcmVxPXJlcXVlc3QoXCJPUFRJT05TXCIsdXJsKTtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBkYXRhJiYoZm49ZGF0YSxkYXRhPW51bGwpLGRhdGEmJnJlcS5zZW5kKGRhdGEpLGZuJiZyZXEuZW5kKGZuKSxyZXF9LHJlcXVlc3QuZGVsPWRlbCxyZXF1ZXN0LmRlbGV0ZT1kZWwscmVxdWVzdC5wYXRjaD1mdW5jdGlvbih1cmwsZGF0YSxmbil7dmFyIHJlcT1yZXF1ZXN0KFwiUEFUQ0hcIix1cmwpO3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIGRhdGEmJihmbj1kYXRhLGRhdGE9bnVsbCksZGF0YSYmcmVxLnNlbmQoZGF0YSksZm4mJnJlcS5lbmQoZm4pLHJlcX0scmVxdWVzdC5wb3N0PWZ1bmN0aW9uKHVybCxkYXRhLGZuKXt2YXIgcmVxPXJlcXVlc3QoXCJQT1NUXCIsdXJsKTtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBkYXRhJiYoZm49ZGF0YSxkYXRhPW51bGwpLGRhdGEmJnJlcS5zZW5kKGRhdGEpLGZuJiZyZXEuZW5kKGZuKSxyZXF9LHJlcXVlc3QucHV0PWZ1bmN0aW9uKHVybCxkYXRhLGZuKXt2YXIgcmVxPXJlcXVlc3QoXCJQVVRcIix1cmwpO3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIGRhdGEmJihmbj1kYXRhLGRhdGE9bnVsbCksZGF0YSYmcmVxLnNlbmQoZGF0YSksZm4mJnJlcS5lbmQoZm4pLHJlcX19KSxjbGllbnRfMT1jbGllbnQuUmVxdWVzdCxieXRlTGVuZ3RoXzE9Ynl0ZUxlbmd0aCx0b0J5dGVBcnJheV8xPXRvQnl0ZUFycmF5LGZyb21CeXRlQXJyYXlfMT1mcm9tQnl0ZUFycmF5LGxvb2t1cD1bXSxyZXZMb29rdXA9W10sQXJyPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBVaW50OEFycmF5P1VpbnQ4QXJyYXk6QXJyYXksY29kZT1cIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky9cIixpPTAsbGVuPWNvZGUubGVuZ3RoO2k8bGVuOysraSlsb29rdXBbaV09Y29kZVtpXSxyZXZMb29rdXBbY29kZS5jaGFyQ29kZUF0KGkpXT1pO2Z1bmN0aW9uIHBsYWNlSG9sZGVyc0NvdW50KGI2NCl7dmFyIGxlbj1iNjQubGVuZ3RoO2lmKGxlbiU0PjApdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBzdHJpbmcuIExlbmd0aCBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgNFwiKTtyZXR1cm5cIj1cIj09PWI2NFtsZW4tMl0/MjpcIj1cIj09PWI2NFtsZW4tMV0/MTowfWZ1bmN0aW9uIGJ5dGVMZW5ndGgoYjY0KXtyZXR1cm4gMypiNjQubGVuZ3RoLzQtcGxhY2VIb2xkZXJzQ291bnQoYjY0KX1mdW5jdGlvbiB0b0J5dGVBcnJheShiNjQpe3ZhciBpLGosbCx0bXAscGxhY2VIb2xkZXJzLGFycixsZW49YjY0Lmxlbmd0aDtwbGFjZUhvbGRlcnM9cGxhY2VIb2xkZXJzQ291bnQoYjY0KSxhcnI9bmV3IEFycigzKmxlbi80LXBsYWNlSG9sZGVycyksbD1wbGFjZUhvbGRlcnM+MD9sZW4tNDpsZW47dmFyIEw9MDtmb3IoaT0wLGo9MDtpPGw7aSs9NCxqKz0zKXRtcD1yZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSldPDwxOHxyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSsxKV08PDEyfHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpKzIpXTw8NnxyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSszKV0sYXJyW0wrK109dG1wPj4xNiYyNTUsYXJyW0wrK109dG1wPj44JjI1NSxhcnJbTCsrXT0yNTUmdG1wO3JldHVybiAyPT09cGxhY2VIb2xkZXJzPyh0bXA9cmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkpXTw8MnxyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSsxKV0+PjQsYXJyW0wrK109MjU1JnRtcCk6MT09PXBsYWNlSG9sZGVycyYmKHRtcD1yZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSldPDwxMHxyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSsxKV08PDR8cmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkrMildPj4yLGFycltMKytdPXRtcD4+OCYyNTUsYXJyW0wrK109MjU1JnRtcCksYXJyfWZ1bmN0aW9uIHRyaXBsZXRUb0Jhc2U2NChudW0pe3JldHVybiBsb29rdXBbbnVtPj4xOCY2M10rbG9va3VwW251bT4+MTImNjNdK2xvb2t1cFtudW0+PjYmNjNdK2xvb2t1cFs2MyZudW1dfWZ1bmN0aW9uIGVuY29kZUNodW5rKHVpbnQ4LHN0YXJ0LGVuZCl7Zm9yKHZhciB0bXAsb3V0cHV0PVtdLGk9c3RhcnQ7aTxlbmQ7aSs9Myl0bXA9KHVpbnQ4W2ldPDwxNikrKHVpbnQ4W2krMV08PDgpK3VpbnQ4W2krMl0sb3V0cHV0LnB1c2godHJpcGxldFRvQmFzZTY0KHRtcCkpO3JldHVybiBvdXRwdXQuam9pbihcIlwiKX1mdW5jdGlvbiBmcm9tQnl0ZUFycmF5KHVpbnQ4KXtmb3IodmFyIHRtcCxsZW49dWludDgubGVuZ3RoLGV4dHJhQnl0ZXM9bGVuJTMsb3V0cHV0PVwiXCIscGFydHM9W10saT0wLGxlbjI9bGVuLWV4dHJhQnl0ZXM7aTxsZW4yO2krPTE2MzgzKXBhcnRzLnB1c2goZW5jb2RlQ2h1bmsodWludDgsaSxpKzE2MzgzPmxlbjI/bGVuMjppKzE2MzgzKSk7cmV0dXJuIDE9PT1leHRyYUJ5dGVzPyh0bXA9dWludDhbbGVuLTFdLG91dHB1dCs9bG9va3VwW3RtcD4+Ml0sb3V0cHV0Kz1sb29rdXBbdG1wPDw0JjYzXSxvdXRwdXQrPVwiPT1cIik6Mj09PWV4dHJhQnl0ZXMmJih0bXA9KHVpbnQ4W2xlbi0yXTw8OCkrdWludDhbbGVuLTFdLG91dHB1dCs9bG9va3VwW3RtcD4+MTBdLG91dHB1dCs9bG9va3VwW3RtcD4+NCY2M10sb3V0cHV0Kz1sb29rdXBbdG1wPDwyJjYzXSxvdXRwdXQrPVwiPVwiKSxwYXJ0cy5wdXNoKG91dHB1dCkscGFydHMuam9pbihcIlwiKX1yZXZMb29rdXBbXCItXCIuY2hhckNvZGVBdCgwKV09NjIscmV2TG9va3VwW1wiX1wiLmNoYXJDb2RlQXQoMCldPTYzO3ZhciBiYXNlNjRKcz17Ynl0ZUxlbmd0aDpieXRlTGVuZ3RoXzEsdG9CeXRlQXJyYXk6dG9CeXRlQXJyYXlfMSxmcm9tQnl0ZUFycmF5OmZyb21CeXRlQXJyYXlfMX07ZnVuY3Rpb24gcGFkZGluZyhzdHIpe3ZhciBtb2Q9c3RyLmxlbmd0aCU0O3JldHVybiAwPT09bW9kP3N0cjpzdHIrbmV3IEFycmF5KDErKDQtbW9kKSkuam9pbihcIj1cIil9ZnVuY3Rpb24gc3RyaW5nVG9CeXRlQXJyYXkoc3RyKXtmb3IodmFyIGFycj1uZXcgQXJyYXkoc3RyLmxlbmd0aCksYT0wO2E8c3RyLmxlbmd0aDthKyspYXJyW2FdPXN0ci5jaGFyQ29kZUF0KGEpO3JldHVybiBhcnJ9ZnVuY3Rpb24gYnl0ZUFycmF5VG9TdHJpbmcoYXJyYXkpe2Zvcih2YXIgcmVzdWx0PVwiXCIsaT0wO2k8YXJyYXkubGVuZ3RoO2krKylyZXN1bHQrPVN0cmluZy5mcm9tQ2hhckNvZGUoYXJyYXlbaV0pO3JldHVybiByZXN1bHR9ZnVuY3Rpb24gZW5jb2RlKHN0cil7cmV0dXJuIGJhc2U2NEpzLmZyb21CeXRlQXJyYXkoc3RyaW5nVG9CeXRlQXJyYXkoc3RyKSkucmVwbGFjZSgvXFwrL2csXCItXCIpLnJlcGxhY2UoL1xcLy9nLFwiX1wiKX1mdW5jdGlvbiBkZWNvZGUoc3RyKXtyZXR1cm4gc3RyPXBhZGRpbmcoc3RyKS5yZXBsYWNlKC8tL2csXCIrXCIpLnJlcGxhY2UoL18vZyxcIi9cIiksYnl0ZUFycmF5VG9TdHJpbmcoYmFzZTY0SnMudG9CeXRlQXJyYXkoc3RyKSl9dmFyIGJhc2U2NFVybD17ZW5jb2RlOmVuY29kZSxkZWNvZGU6ZGVjb2RlfSx2ZXJzaW9uPXtyYXc6XCI5LjEwLjJcIn0sdG9TdHJpbmc9T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztmdW5jdGlvbiBhdHRyaWJ1dGUobyxhdHRyLHR5cGUsdGV4dCl7aWYodHlwZT1cImFycmF5XCI9PT10eXBlP1wib2JqZWN0XCI6dHlwZSxvJiZ0eXBlb2Ygb1thdHRyXSE9PXR5cGUpdGhyb3cgbmV3IEVycm9yKHRleHQpfWZ1bmN0aW9uIHZhcmlhYmxlKG8sdHlwZSx0ZXh0KXtpZih0eXBlb2YgbyE9PXR5cGUpdGhyb3cgbmV3IEVycm9yKHRleHQpfWZ1bmN0aW9uIHZhbHVlKG8sdmFsdWVzLHRleHQpe2lmKC0xPT09dmFsdWVzLmluZGV4T2YobykpdGhyb3cgbmV3IEVycm9yKHRleHQpfWZ1bmN0aW9uIGNoZWNrKG8sY29uZmlnLGF0dHJpYnV0ZXMpe2lmKGNvbmZpZy5vcHRpb25hbCYmIW98fHZhcmlhYmxlKG8sY29uZmlnLnR5cGUsY29uZmlnLm1lc3NhZ2UpLFwib2JqZWN0XCI9PT1jb25maWcudHlwZSYmYXR0cmlidXRlcylmb3IodmFyIGtleXM9T2JqZWN0LmtleXMoYXR0cmlidXRlcyksaW5kZXg9MDtpbmRleDxrZXlzLmxlbmd0aDtpbmRleCsrKXt2YXIgYT1rZXlzW2luZGV4XTthdHRyaWJ1dGVzW2FdLm9wdGlvbmFsJiYhb1thXXx8YXR0cmlidXRlc1thXS5jb25kaXRpb24mJiFhdHRyaWJ1dGVzW2FdLmNvbmRpdGlvbihvKXx8KGF0dHJpYnV0ZShvLGEsYXR0cmlidXRlc1thXS50eXBlLGF0dHJpYnV0ZXNbYV0ubWVzc2FnZSksYXR0cmlidXRlc1thXS52YWx1ZXMmJnZhbHVlKG9bYV0sYXR0cmlidXRlc1thXS52YWx1ZXMsYXR0cmlidXRlc1thXS52YWx1ZV9tZXNzYWdlKSl9fWZ1bmN0aW9uIGlzQXJyYXkoYXJyYXkpe3JldHVybiB0aGlzLnN1cHBvcnRzSXNBcnJheSgpP0FycmF5LmlzQXJyYXkoYXJyYXkpOlwiW29iamVjdCBBcnJheV1cIj09PXRvU3RyaW5nLmNhbGwoYXJyYXkpfWZ1bmN0aW9uIHN1cHBvcnRzSXNBcnJheSgpe3JldHVybiBudWxsIT1BcnJheS5pc0FycmF5fXZhciBhc3NlcnQ9e2NoZWNrOmNoZWNrLGF0dHJpYnV0ZTphdHRyaWJ1dGUsdmFyaWFibGU6dmFyaWFibGUsdmFsdWU6dmFsdWUsaXNBcnJheTppc0FycmF5LHN1cHBvcnRzSXNBcnJheTpzdXBwb3J0c0lzQXJyYXl9O2Z1bmN0aW9uIGdldCgpe3JldHVybiBPYmplY3QuYXNzaWduP09iamVjdC5hc3NpZ246b2JqZWN0QXNzaWduUG9seWZpbGx9ZnVuY3Rpb24gb2JqZWN0QXNzaWduUG9seWZpbGwodGFyZ2V0KXtpZihudWxsPT10YXJnZXQpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjb252ZXJ0IGZpcnN0IGFyZ3VtZW50IHRvIG9iamVjdFwiKTtmb3IodmFyIHRvPU9iamVjdCh0YXJnZXQpLGk9MTtpPGFyZ3VtZW50cy5sZW5ndGg7aSsrKXt2YXIgbmV4dFNvdXJjZT1hcmd1bWVudHNbaV07aWYobnVsbCE9bmV4dFNvdXJjZSlmb3IodmFyIGtleXNBcnJheT1PYmplY3Qua2V5cyhPYmplY3QobmV4dFNvdXJjZSkpLG5leHRJbmRleD0wLGxlbj1rZXlzQXJyYXkubGVuZ3RoO25leHRJbmRleDxsZW47bmV4dEluZGV4Kyspe3ZhciBuZXh0S2V5PWtleXNBcnJheVtuZXh0SW5kZXhdLGRlc2M9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihuZXh0U291cmNlLG5leHRLZXkpO3ZvaWQgMCE9PWRlc2MmJmRlc2MuZW51bWVyYWJsZSYmKHRvW25leHRLZXldPW5leHRTb3VyY2VbbmV4dEtleV0pfX1yZXR1cm4gdG99dmFyIG9iamVjdEFzc2lnbj17Z2V0OmdldCxvYmplY3RBc3NpZ25Qb2x5ZmlsbDpvYmplY3RBc3NpZ25Qb2x5ZmlsbH07ZnVuY3Rpb24gcGljayhvYmplY3Qsa2V5cyl7cmV0dXJuIGtleXMucmVkdWNlKGZ1bmN0aW9uKHByZXYsa2V5KXtyZXR1cm4gb2JqZWN0W2tleV0mJihwcmV2W2tleV09b2JqZWN0W2tleV0pLHByZXZ9LHt9KX1mdW5jdGlvbiBnZXRLZXlzTm90SW4ob2JqLGFsbG93ZWRLZXlzKXt2YXIgbm90QWxsb3dlZD1bXTtmb3IodmFyIGtleSBpbiBvYmopLTE9PT1hbGxvd2VkS2V5cy5pbmRleE9mKGtleSkmJm5vdEFsbG93ZWQucHVzaChrZXkpO3JldHVybiBub3RBbGxvd2VkfWZ1bmN0aW9uIG9iamVjdFZhbHVlcyhvYmope3ZhciB2YWx1ZXM9W107Zm9yKHZhciBrZXkgaW4gb2JqKXZhbHVlcy5wdXNoKG9ialtrZXldKTtyZXR1cm4gdmFsdWVzfWZ1bmN0aW9uIGV4dGVuZCgpe3ZhciBwYXJhbXM9b2JqZWN0VmFsdWVzKGFyZ3VtZW50cyk7cmV0dXJuIHBhcmFtcy51bnNoaWZ0KHt9KSxvYmplY3RBc3NpZ24uZ2V0KCkuYXBwbHkodm9pZCAwLHBhcmFtcyl9ZnVuY3Rpb24gbWVyZ2Uob2JqZWN0LGtleXMpe3JldHVybntiYXNlOmtleXM/cGljayhvYmplY3Qsa2V5cyk6b2JqZWN0LHdpdGg6ZnVuY3Rpb24ob2JqZWN0MixrZXlzMil7cmV0dXJuIG9iamVjdDI9a2V5czI/cGljayhvYmplY3QyLGtleXMyKTpvYmplY3QyLGV4dGVuZCh0aGlzLmJhc2Usb2JqZWN0Mil9fX1mdW5jdGlvbiBibGFja2xpc3Qob2JqZWN0LGJsYWNrbGlzdGVkS2V5cyl7cmV0dXJuIE9iamVjdC5rZXlzKG9iamVjdCkucmVkdWNlKGZ1bmN0aW9uKHAsa2V5KXtyZXR1cm4tMT09PWJsYWNrbGlzdGVkS2V5cy5pbmRleE9mKGtleSkmJihwW2tleV09b2JqZWN0W2tleV0pLHB9LHt9KX1mdW5jdGlvbiBjYW1lbFRvU25ha2Uoc3RyKXtmb3IodmFyIGNvZGUsbmV3S2V5PVwiXCIsaW5kZXg9MCx3YXNQcmV2TnVtYmVyPSEwLHdhc1ByZXZVcHBlcmNhc2U9ITA7aW5kZXg8c3RyLmxlbmd0aDspY29kZT1zdHIuY2hhckNvZGVBdChpbmRleCksIXdhc1ByZXZVcHBlcmNhc2UmJmNvZGU+PTY1JiZjb2RlPD05MHx8IXdhc1ByZXZOdW1iZXImJmNvZGU+PTQ4JiZjb2RlPD01Nz8obmV3S2V5Kz1cIl9cIixuZXdLZXkrPXN0cltpbmRleF0udG9Mb3dlckNhc2UoKSk6bmV3S2V5Kz1zdHJbaW5kZXhdLnRvTG93ZXJDYXNlKCksd2FzUHJldk51bWJlcj1jb2RlPj00OCYmY29kZTw9NTcsd2FzUHJldlVwcGVyY2FzZT1jb2RlPj02NSYmY29kZTw9OTAsaW5kZXgrKztyZXR1cm4gbmV3S2V5fWZ1bmN0aW9uIHNuYWtlVG9DYW1lbChzdHIpe3ZhciBwYXJ0cz1zdHIuc3BsaXQoXCJfXCIpO3JldHVybiBwYXJ0cy5yZWR1Y2UoZnVuY3Rpb24ocCxjKXtyZXR1cm4gcCtjLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK2Muc2xpY2UoMSl9LHBhcnRzLnNoaWZ0KCkpfWZ1bmN0aW9uIHRvU25ha2VDYXNlKG9iamVjdCxleGNlcHRpb25zKXtyZXR1cm5cIm9iamVjdFwiIT10eXBlb2Ygb2JqZWN0fHxhc3NlcnQuaXNBcnJheShvYmplY3QpfHxudWxsPT09b2JqZWN0P29iamVjdDooZXhjZXB0aW9ucz1leGNlcHRpb25zfHxbXSxPYmplY3Qua2V5cyhvYmplY3QpLnJlZHVjZShmdW5jdGlvbihwLGtleSl7cmV0dXJuIHBbLTE9PT1leGNlcHRpb25zLmluZGV4T2Yoa2V5KT9jYW1lbFRvU25ha2Uoa2V5KTprZXldPXRvU25ha2VDYXNlKG9iamVjdFtrZXldKSxwfSx7fSkpfWZ1bmN0aW9uIHRvQ2FtZWxDYXNlKG9iamVjdCxleGNlcHRpb25zLG9wdGlvbnMpe3JldHVyblwib2JqZWN0XCIhPXR5cGVvZiBvYmplY3R8fGFzc2VydC5pc0FycmF5KG9iamVjdCl8fG51bGw9PT1vYmplY3Q/b2JqZWN0OihleGNlcHRpb25zPWV4Y2VwdGlvbnN8fFtdLG9wdGlvbnM9b3B0aW9uc3x8e30sT2JqZWN0LmtleXMob2JqZWN0KS5yZWR1Y2UoZnVuY3Rpb24ocCxrZXkpe3ZhciBuZXdLZXk9LTE9PT1leGNlcHRpb25zLmluZGV4T2Yoa2V5KT9zbmFrZVRvQ2FtZWwoa2V5KTprZXk7cmV0dXJuIHBbbmV3S2V5XT10b0NhbWVsQ2FzZShvYmplY3RbbmV3S2V5XXx8b2JqZWN0W2tleV0sW10sb3B0aW9ucyksb3B0aW9ucy5rZWVwT3JpZ2luYWwmJihwW2tleV09dG9DYW1lbENhc2Uob2JqZWN0W2tleV0sW10sb3B0aW9ucykpLHB9LHt9KSl9ZnVuY3Rpb24gZ2V0TG9jYXRpb25Gcm9tVXJsKGhyZWYpe3ZhciBtYXRjaD1ocmVmLm1hdGNoKC9eKGh0dHBzPzp8ZmlsZTopXFwvXFwvKChbXjpcXC8/I10qKSg/OjooWzAtOV0rKSk/KShbXFwvXXswLDF9W14/I10qKShcXD9bXiNdKnwpKCMuKnwpJC8pO3JldHVybiBtYXRjaCYme2hyZWY6aHJlZixwcm90b2NvbDptYXRjaFsxXSxob3N0Om1hdGNoWzJdLGhvc3RuYW1lOm1hdGNoWzNdLHBvcnQ6bWF0Y2hbNF0scGF0aG5hbWU6bWF0Y2hbNV0sc2VhcmNoOm1hdGNoWzZdLGhhc2g6bWF0Y2hbN119fWZ1bmN0aW9uIGdldE9yaWdpbkZyb21VcmwodXJsKXtpZih1cmwpe3ZhciBwYXJzZWQ9Z2V0TG9jYXRpb25Gcm9tVXJsKHVybCksb3JpZ2luPXBhcnNlZC5wcm90b2NvbCtcIi8vXCIrcGFyc2VkLmhvc3RuYW1lO3JldHVybiBwYXJzZWQucG9ydCYmKG9yaWdpbis9XCI6XCIrcGFyc2VkLnBvcnQpLG9yaWdpbn19ZnVuY3Rpb24gdHJpbShvcHRpb25zLGtleSl7dmFyIHRyaW1tZWQ9ZXh0ZW5kKG9wdGlvbnMpO3JldHVybiBvcHRpb25zW2tleV0mJih0cmltbWVkW2tleV09b3B0aW9uc1trZXldLnRyaW0oKSksdHJpbW1lZH1mdW5jdGlvbiB0cmltTXVsdGlwbGUob3B0aW9ucyxrZXlzKXtyZXR1cm4ga2V5cy5yZWR1Y2UodHJpbSxvcHRpb25zKX1mdW5jdGlvbiB0cmltVXNlckRldGFpbHMob3B0aW9ucyl7cmV0dXJuIHRyaW1NdWx0aXBsZShvcHRpb25zLFtcInVzZXJuYW1lXCIsXCJlbWFpbFwiLFwicGhvbmVOdW1iZXJcIl0pfXZhciBvYmplY3RIZWxwZXI9e3RvU25ha2VDYXNlOnRvU25ha2VDYXNlLHRvQ2FtZWxDYXNlOnRvQ2FtZWxDYXNlLGJsYWNrbGlzdDpibGFja2xpc3QsbWVyZ2U6bWVyZ2UscGljazpwaWNrLGdldEtleXNOb3RJbjpnZXRLZXlzTm90SW4sZXh0ZW5kOmV4dGVuZCxnZXRPcmlnaW5Gcm9tVXJsOmdldE9yaWdpbkZyb21VcmwsZ2V0TG9jYXRpb25Gcm9tVXJsOmdldExvY2F0aW9uRnJvbVVybCx0cmltVXNlckRldGFpbHM6dHJpbVVzZXJEZXRhaWxzfTtmdW5jdGlvbiBSZXF1ZXN0V3JhcHBlcihyZXEpe3RoaXMucmVxdWVzdD1yZXEsdGhpcy5tZXRob2Q9cmVxLm1ldGhvZCx0aGlzLnVybD1yZXEudXJsLHRoaXMuYm9keT1yZXEuX2RhdGEsdGhpcy5oZWFkZXJzPXJlcS5faGVhZGVyfWZ1bmN0aW9uIFJlcXVlc3RPYmoocmVxKXt0aGlzLnJlcXVlc3Q9cmVxfWZ1bmN0aW9uIFJlcXVlc3RCdWlsZGVyKG9wdGlvbnMpe3RoaXMuX3NlbmRUZWxlbWV0cnk9ITEhPT1vcHRpb25zLl9zZW5kVGVsZW1ldHJ5fHxvcHRpb25zLl9zZW5kVGVsZW1ldHJ5LHRoaXMuX3RlbGVtZXRyeUluZm89b3B0aW9ucy5fdGVsZW1ldHJ5SW5mb3x8bnVsbCx0aGlzLl90aW1lc1RvUmV0cnlGYWlsZWRSZXF1ZXN0cz1vcHRpb25zLl90aW1lc1RvUmV0cnlGYWlsZWRSZXF1ZXN0cyx0aGlzLmhlYWRlcnM9b3B0aW9ucy5oZWFkZXJzfHx7fSx0aGlzLl91bml2ZXJzYWxMb2dpblBhZ2U9b3B0aW9ucy51bml2ZXJzYWxMb2dpblBhZ2V9ZnVuY3Rpb24gcmVkaXJlY3QodXJsKXtnZXRXaW5kb3coKS5sb2NhdGlvbj11cmx9ZnVuY3Rpb24gZ2V0RG9jdW1lbnQoKXtyZXR1cm4gZ2V0V2luZG93KCkuZG9jdW1lbnR9ZnVuY3Rpb24gZ2V0V2luZG93KCl7cmV0dXJuIHdpbmRvd31mdW5jdGlvbiBnZXRPcmlnaW4oKXt2YXIgbG9jYXRpb249Z2V0V2luZG93KCkubG9jYXRpb24sb3JpZ2luPWxvY2F0aW9uLm9yaWdpbjtyZXR1cm4gb3JpZ2lufHwob3JpZ2luPW9iamVjdEhlbHBlci5nZXRPcmlnaW5Gcm9tVXJsKGxvY2F0aW9uLmhyZWYpKSxvcmlnaW59UmVxdWVzdFdyYXBwZXIucHJvdG90eXBlLmFib3J0PWZ1bmN0aW9uKCl7dGhpcy5yZXF1ZXN0LmFib3J0KCl9LFJlcXVlc3RXcmFwcGVyLnByb3RvdHlwZS5nZXRNZXRob2Q9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tZXRob2R9LFJlcXVlc3RXcmFwcGVyLnByb3RvdHlwZS5nZXRCb2R5PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuYm9keX0sUmVxdWVzdFdyYXBwZXIucHJvdG90eXBlLmdldFVybD1mdW5jdGlvbigpe3JldHVybiB0aGlzLnVybH0sUmVxdWVzdFdyYXBwZXIucHJvdG90eXBlLmdldEhlYWRlcnM9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5oZWFkZXJzfSxSZXF1ZXN0T2JqLnByb3RvdHlwZS5zZXQ9ZnVuY3Rpb24oa2V5LHZhbHVlKXtyZXR1cm4gdGhpcy5yZXF1ZXN0PXRoaXMucmVxdWVzdC5zZXQoa2V5LHZhbHVlKSx0aGlzfSxSZXF1ZXN0T2JqLnByb3RvdHlwZS5zZW5kPWZ1bmN0aW9uKGJvZHkpe3JldHVybiB0aGlzLnJlcXVlc3Q9dGhpcy5yZXF1ZXN0LnNlbmQob2JqZWN0SGVscGVyLnRyaW1Vc2VyRGV0YWlscyhib2R5KSksdGhpc30sUmVxdWVzdE9iai5wcm90b3R5cGUud2l0aENyZWRlbnRpYWxzPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucmVxdWVzdD10aGlzLnJlcXVlc3Qud2l0aENyZWRlbnRpYWxzKCksdGhpc30sUmVxdWVzdE9iai5wcm90b3R5cGUuZW5kPWZ1bmN0aW9uKGNiKXtyZXR1cm4gdGhpcy5yZXF1ZXN0PXRoaXMucmVxdWVzdC5lbmQoY2IpLG5ldyBSZXF1ZXN0V3JhcHBlcih0aGlzLnJlcXVlc3QpfSxSZXF1ZXN0QnVpbGRlci5wcm90b3R5cGUuc2V0Q29tbW9uQ29uZmlndXJhdGlvbj1mdW5jdGlvbihvbmdvaW5nUmVxdWVzdCxvcHRpb25zKXtpZihvcHRpb25zPW9wdGlvbnN8fHt9LHRoaXMuX3RpbWVzVG9SZXRyeUZhaWxlZFJlcXVlc3RzPjAmJihvbmdvaW5nUmVxdWVzdD1vbmdvaW5nUmVxdWVzdC5yZXRyeSh0aGlzLl90aW1lc1RvUmV0cnlGYWlsZWRSZXF1ZXN0cykpLG9wdGlvbnMubm9IZWFkZXJzKXJldHVybiBvbmdvaW5nUmVxdWVzdDt2YXIgaGVhZGVycz10aGlzLmhlYWRlcnM7b25nb2luZ1JlcXVlc3Q9b25nb2luZ1JlcXVlc3Quc2V0KFwiQ29udGVudC1UeXBlXCIsXCJhcHBsaWNhdGlvbi9qc29uXCIpO2Zvcih2YXIga2V5cz1PYmplY3Qua2V5cyh0aGlzLmhlYWRlcnMpLGE9MDthPGtleXMubGVuZ3RoO2ErKylvbmdvaW5nUmVxdWVzdD1vbmdvaW5nUmVxdWVzdC5zZXQoa2V5c1thXSxoZWFkZXJzW2tleXNbYV1dKTtyZXR1cm4gdGhpcy5fc2VuZFRlbGVtZXRyeSYmKG9uZ29pbmdSZXF1ZXN0PW9uZ29pbmdSZXF1ZXN0LnNldChcIkF1dGgwLUNsaWVudFwiLHRoaXMuZ2V0VGVsZW1ldHJ5RGF0YSgpKSksb25nb2luZ1JlcXVlc3R9LFJlcXVlc3RCdWlsZGVyLnByb3RvdHlwZS5nZXRUZWxlbWV0cnlEYXRhPWZ1bmN0aW9uKCl7dmFyIHRlbGVtZXRyeU5hbWU9dGhpcy5fdW5pdmVyc2FsTG9naW5QYWdlP1wiYXV0aDAuanMtdWxwXCI6XCJhdXRoMC5qc1wiLGNsaWVudEluZm89dGhpcy5fdGVsZW1ldHJ5SW5mb3x8e25hbWU6dGVsZW1ldHJ5TmFtZSx2ZXJzaW9uOnZlcnNpb24ucmF3fSxqc29uQ2xpZW50SW5mbz1KU09OLnN0cmluZ2lmeShjbGllbnRJbmZvKTtyZXR1cm4gYmFzZTY0VXJsLmVuY29kZShqc29uQ2xpZW50SW5mbyl9LFJlcXVlc3RCdWlsZGVyLnByb3RvdHlwZS5nZXQ9ZnVuY3Rpb24odXJsLG9wdGlvbnMpe3JldHVybiBuZXcgUmVxdWVzdE9iaih0aGlzLnNldENvbW1vbkNvbmZpZ3VyYXRpb24oY2xpZW50LmdldCh1cmwpLG9wdGlvbnMpKX0sUmVxdWVzdEJ1aWxkZXIucHJvdG90eXBlLnBvc3Q9ZnVuY3Rpb24odXJsLG9wdGlvbnMpe3JldHVybiBuZXcgUmVxdWVzdE9iaih0aGlzLnNldENvbW1vbkNvbmZpZ3VyYXRpb24oY2xpZW50LnBvc3QodXJsKSxvcHRpb25zKSl9LFJlcXVlc3RCdWlsZGVyLnByb3RvdHlwZS5wYXRjaD1mdW5jdGlvbih1cmwsb3B0aW9ucyl7cmV0dXJuIG5ldyBSZXF1ZXN0T2JqKHRoaXMuc2V0Q29tbW9uQ29uZmlndXJhdGlvbihjbGllbnQucGF0Y2godXJsKSxvcHRpb25zKSl9O3ZhciB3aW5kb3dIYW5kbGVyPXtyZWRpcmVjdDpyZWRpcmVjdCxnZXREb2N1bWVudDpnZXREb2N1bWVudCxnZXRXaW5kb3c6Z2V0V2luZG93LGdldE9yaWdpbjpnZXRPcmlnaW59O2Z1bmN0aW9uIER1bW15U3RvcmFnZSgpe31EdW1teVN0b3JhZ2UucHJvdG90eXBlLmdldEl0ZW09ZnVuY3Rpb24oKXtyZXR1cm4gbnVsbH0sRHVtbXlTdG9yYWdlLnByb3RvdHlwZS5yZW1vdmVJdGVtPWZ1bmN0aW9uKCl7fSxEdW1teVN0b3JhZ2UucHJvdG90eXBlLnNldEl0ZW09ZnVuY3Rpb24oKXt9O3ZhciBqc19jb29raWU9Y3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24obW9kdWxlLGV4cG9ydHMpeyFmdW5jdGlvbihmYWN0b3J5KXtpZihtb2R1bGUuZXhwb3J0cz1mYWN0b3J5KCksISEwKXt2YXIgT2xkQ29va2llcz13aW5kb3cuQ29va2llcyxhcGk9d2luZG93LkNvb2tpZXM9ZmFjdG9yeSgpO2FwaS5ub0NvbmZsaWN0PWZ1bmN0aW9uKCl7cmV0dXJuIHdpbmRvdy5Db29raWVzPU9sZENvb2tpZXMsYXBpfX19KGZ1bmN0aW9uKCl7ZnVuY3Rpb24gZXh0ZW5kKCl7Zm9yKHZhciBpPTAscmVzdWx0PXt9O2k8YXJndW1lbnRzLmxlbmd0aDtpKyspe3ZhciBhdHRyaWJ1dGVzPWFyZ3VtZW50c1tpXTtmb3IodmFyIGtleSBpbiBhdHRyaWJ1dGVzKXJlc3VsdFtrZXldPWF0dHJpYnV0ZXNba2V5XX1yZXR1cm4gcmVzdWx0fXJldHVybiBmdW5jdGlvbiBpbml0KGNvbnZlcnRlcil7ZnVuY3Rpb24gYXBpKGtleSx2YWx1ZSxhdHRyaWJ1dGVzKXt2YXIgcmVzdWx0O2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBkb2N1bWVudCl7aWYoYXJndW1lbnRzLmxlbmd0aD4xKXtpZihcIm51bWJlclwiPT10eXBlb2YoYXR0cmlidXRlcz1leHRlbmQoe3BhdGg6XCIvXCJ9LGFwaS5kZWZhdWx0cyxhdHRyaWJ1dGVzKSkuZXhwaXJlcyl7dmFyIGV4cGlyZXM9bmV3IERhdGU7ZXhwaXJlcy5zZXRNaWxsaXNlY29uZHMoZXhwaXJlcy5nZXRNaWxsaXNlY29uZHMoKSs4NjRlNSphdHRyaWJ1dGVzLmV4cGlyZXMpLGF0dHJpYnV0ZXMuZXhwaXJlcz1leHBpcmVzfWF0dHJpYnV0ZXMuZXhwaXJlcz1hdHRyaWJ1dGVzLmV4cGlyZXM/YXR0cmlidXRlcy5leHBpcmVzLnRvVVRDU3RyaW5nKCk6XCJcIjt0cnl7cmVzdWx0PUpTT04uc3RyaW5naWZ5KHZhbHVlKSwvXltcXHtcXFtdLy50ZXN0KHJlc3VsdCkmJih2YWx1ZT1yZXN1bHQpfWNhdGNoKGUpe312YWx1ZT1jb252ZXJ0ZXIud3JpdGU/Y29udmVydGVyLndyaXRlKHZhbHVlLGtleSk6ZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyh2YWx1ZSkpLnJlcGxhY2UoLyUoMjN8MjR8MjZ8MkJ8M0F8M0N8M0V8M0R8MkZ8M0Z8NDB8NUJ8NUR8NUV8NjB8N0J8N0R8N0MpL2csZGVjb2RlVVJJQ29tcG9uZW50KSxrZXk9KGtleT0oa2V5PWVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcoa2V5KSkpLnJlcGxhY2UoLyUoMjN8MjR8MjZ8MkJ8NUV8NjB8N0MpL2csZGVjb2RlVVJJQ29tcG9uZW50KSkucmVwbGFjZSgvW1xcKFxcKV0vZyxlc2NhcGUpO3ZhciBzdHJpbmdpZmllZEF0dHJpYnV0ZXM9XCJcIjtmb3IodmFyIGF0dHJpYnV0ZU5hbWUgaW4gYXR0cmlidXRlcylhdHRyaWJ1dGVzW2F0dHJpYnV0ZU5hbWVdJiYoc3RyaW5naWZpZWRBdHRyaWJ1dGVzKz1cIjsgXCIrYXR0cmlidXRlTmFtZSwhMCE9PWF0dHJpYnV0ZXNbYXR0cmlidXRlTmFtZV0mJihzdHJpbmdpZmllZEF0dHJpYnV0ZXMrPVwiPVwiK2F0dHJpYnV0ZXNbYXR0cmlidXRlTmFtZV0pKTtyZXR1cm4gZG9jdW1lbnQuY29va2llPWtleStcIj1cIit2YWx1ZStzdHJpbmdpZmllZEF0dHJpYnV0ZXN9a2V5fHwocmVzdWx0PXt9KTtmb3IodmFyIGNvb2tpZXM9ZG9jdW1lbnQuY29va2llP2RvY3VtZW50LmNvb2tpZS5zcGxpdChcIjsgXCIpOltdLHJkZWNvZGU9LyglWzAtOUEtWl17Mn0pKy9nLGk9MDtpPGNvb2tpZXMubGVuZ3RoO2krKyl7dmFyIHBhcnRzPWNvb2tpZXNbaV0uc3BsaXQoXCI9XCIpLGNvb2tpZT1wYXJ0cy5zbGljZSgxKS5qb2luKFwiPVwiKTt0aGlzLmpzb258fCdcIichPT1jb29raWUuY2hhckF0KDApfHwoY29va2llPWNvb2tpZS5zbGljZSgxLC0xKSk7dHJ5e3ZhciBuYW1lPXBhcnRzWzBdLnJlcGxhY2UocmRlY29kZSxkZWNvZGVVUklDb21wb25lbnQpO2lmKGNvb2tpZT1jb252ZXJ0ZXIucmVhZD9jb252ZXJ0ZXIucmVhZChjb29raWUsbmFtZSk6Y29udmVydGVyKGNvb2tpZSxuYW1lKXx8Y29va2llLnJlcGxhY2UocmRlY29kZSxkZWNvZGVVUklDb21wb25lbnQpLHRoaXMuanNvbil0cnl7Y29va2llPUpTT04ucGFyc2UoY29va2llKX1jYXRjaChlKXt9aWYoa2V5PT09bmFtZSl7cmVzdWx0PWNvb2tpZTticmVha31rZXl8fChyZXN1bHRbbmFtZV09Y29va2llKX1jYXRjaChlKXt9fXJldHVybiByZXN1bHR9fXJldHVybiBhcGkuc2V0PWFwaSxhcGkuZ2V0PWZ1bmN0aW9uKGtleSl7cmV0dXJuIGFwaS5jYWxsKGFwaSxrZXkpfSxhcGkuZ2V0SlNPTj1mdW5jdGlvbigpe3JldHVybiBhcGkuYXBwbHkoe2pzb246ITB9LFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKSl9LGFwaS5kZWZhdWx0cz17fSxhcGkucmVtb3ZlPWZ1bmN0aW9uKGtleSxhdHRyaWJ1dGVzKXthcGkoa2V5LFwiXCIsZXh0ZW5kKGF0dHJpYnV0ZXMse2V4cGlyZXM6LTF9KSl9LGFwaS53aXRoQ29udmVydGVyPWluaXQsYXBpfShmdW5jdGlvbigpe30pfSl9KTtmdW5jdGlvbiBDb29raWVTdG9yYWdlKCl7fWZ1bmN0aW9uIFdhcm4ob3B0aW9ucyl7dGhpcy5kaXNhYmxlV2FybmluZ3M9b3B0aW9ucy5kaXNhYmxlV2FybmluZ3N9ZnVuY3Rpb24gU3RvcmFnZUhhbmRsZXIob3B0aW9ucyl7aWYodGhpcy53YXJuPW5ldyBXYXJuKHt9KSx0aGlzLnN0b3JhZ2U9bmV3IENvb2tpZVN0b3JhZ2UsITA9PT1vcHRpb25zLl9fdHJ5TG9jYWxTdG9yYWdlRmlyc3QpdHJ5e3ZhciBsb2NhbFN0b3JhZ2U9d2luZG93SGFuZGxlci5nZXRXaW5kb3coKS5sb2NhbFN0b3JhZ2U7bG9jYWxTdG9yYWdlJiYodGhpcy5zdG9yYWdlPWxvY2FsU3RvcmFnZSl9Y2F0Y2goZSl7dGhpcy53YXJuLndhcm5pbmcoZSksdGhpcy53YXJuLndhcm5pbmcoXCJDYW4ndCB1c2UgbG9jYWxTdG9yYWdlLiBVc2luZyBDb29raWVTdG9yYWdlIGluc3RlYWQuXCIpfX1mdW5jdGlvbiBTdG9yYWdlKG9wdGlvbnMpe3RoaXMuaGFuZGxlcj1uZXcgU3RvcmFnZUhhbmRsZXIob3B0aW9ucyl9ZnVuY3Rpb24gU1NPRGF0YVN0b3JhZ2Uob3B0aW9ucyl7dGhpcy5zdG9yYWdlPW5ldyBTdG9yYWdlKG9wdGlvbnMpfWZ1bmN0aW9uIGJ1aWxkUmVzcG9uc2UoZXJyb3IsZGVzY3JpcHRpb24pe3JldHVybntlcnJvcjplcnJvcixlcnJvckRlc2NyaXB0aW9uOmRlc2NyaXB0aW9ufX1mdW5jdGlvbiBpbnZhbGlkVG9rZW4oZGVzY3JpcHRpb24pe3JldHVybiBidWlsZFJlc3BvbnNlKFwiaW52YWxpZF90b2tlblwiLGRlc2NyaXB0aW9uKX1Db29raWVTdG9yYWdlLnByb3RvdHlwZS5nZXRJdGVtPWZ1bmN0aW9uKGtleSl7cmV0dXJuIGpzX2Nvb2tpZS5nZXQoa2V5KX0sQ29va2llU3RvcmFnZS5wcm90b3R5cGUucmVtb3ZlSXRlbT1mdW5jdGlvbihrZXkpe2pzX2Nvb2tpZS5yZW1vdmUoa2V5KX0sQ29va2llU3RvcmFnZS5wcm90b3R5cGUuc2V0SXRlbT1mdW5jdGlvbihrZXksdmFsdWUsb3B0aW9ucyl7dmFyIHBhcmFtcz1vYmplY3RIZWxwZXIuZXh0ZW5kKHtleHBpcmVzOjF9LG9wdGlvbnMpO2pzX2Nvb2tpZS5zZXQoa2V5LHZhbHVlLHBhcmFtcyl9LFdhcm4ucHJvdG90eXBlLndhcm5pbmc9ZnVuY3Rpb24obWVzc2FnZSl7dGhpcy5kaXNhYmxlV2FybmluZ3N8fGNvbnNvbGUud2FybihtZXNzYWdlKX0sU3RvcmFnZUhhbmRsZXIucHJvdG90eXBlLmZhaWxvdmVyPWZ1bmN0aW9uKCl7dGhpcy5zdG9yYWdlIGluc3RhbmNlb2YgRHVtbXlTdG9yYWdlP3RoaXMud2Fybi53YXJuaW5nKFwiRHVtbXlTdG9yYWdlOiBpZ25vcmUgZmFpbG92ZXJcIik6dGhpcy5zdG9yYWdlIGluc3RhbmNlb2YgQ29va2llU3RvcmFnZT8odGhpcy53YXJuLndhcm5pbmcoXCJDb29raWVTdG9yYWdlOiBmYWlsaW5nIG92ZXIgRHVtbXlTdG9yYWdlXCIpLHRoaXMuc3RvcmFnZT1uZXcgRHVtbXlTdG9yYWdlKToodGhpcy53YXJuLndhcm5pbmcoXCJMb2NhbFN0b3JhZ2U6IGZhaWxpbmcgb3ZlciBDb29raWVTdG9yYWdlXCIpLHRoaXMuc3RvcmFnZT1uZXcgQ29va2llU3RvcmFnZSl9LFN0b3JhZ2VIYW5kbGVyLnByb3RvdHlwZS5nZXRJdGVtPWZ1bmN0aW9uKGtleSl7dHJ5e3JldHVybiB0aGlzLnN0b3JhZ2UuZ2V0SXRlbShrZXkpfWNhdGNoKGUpe3JldHVybiB0aGlzLndhcm4ud2FybmluZyhlKSx0aGlzLmZhaWxvdmVyKCksdGhpcy5nZXRJdGVtKGtleSl9fSxTdG9yYWdlSGFuZGxlci5wcm90b3R5cGUucmVtb3ZlSXRlbT1mdW5jdGlvbihrZXkpe3RyeXtyZXR1cm4gdGhpcy5zdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KX1jYXRjaChlKXtyZXR1cm4gdGhpcy53YXJuLndhcm5pbmcoZSksdGhpcy5mYWlsb3ZlcigpLHRoaXMucmVtb3ZlSXRlbShrZXkpfX0sU3RvcmFnZUhhbmRsZXIucHJvdG90eXBlLnNldEl0ZW09ZnVuY3Rpb24oa2V5LHZhbHVlLG9wdGlvbnMpe3RyeXtyZXR1cm4gdGhpcy5zdG9yYWdlLnNldEl0ZW0oa2V5LHZhbHVlLG9wdGlvbnMpfWNhdGNoKGUpe3JldHVybiB0aGlzLndhcm4ud2FybmluZyhlKSx0aGlzLmZhaWxvdmVyKCksdGhpcy5zZXRJdGVtKGtleSx2YWx1ZSxvcHRpb25zKX19LFN0b3JhZ2UucHJvdG90eXBlLmdldEl0ZW09ZnVuY3Rpb24oa2V5KXt2YXIgdmFsdWU9dGhpcy5oYW5kbGVyLmdldEl0ZW0oa2V5KTt0cnl7cmV0dXJuIEpTT04ucGFyc2UodmFsdWUpfWNhdGNoKF8pe3JldHVybiB2YWx1ZX19LFN0b3JhZ2UucHJvdG90eXBlLnJlbW92ZUl0ZW09ZnVuY3Rpb24oa2V5KXtyZXR1cm4gdGhpcy5oYW5kbGVyLnJlbW92ZUl0ZW0oa2V5KX0sU3RvcmFnZS5wcm90b3R5cGUuc2V0SXRlbT1mdW5jdGlvbihrZXksdmFsdWUsb3B0aW9ucyl7dmFyIGpzb249SlNPTi5zdHJpbmdpZnkodmFsdWUpO3JldHVybiB0aGlzLmhhbmRsZXIuc2V0SXRlbShrZXksanNvbixvcHRpb25zKX0sU1NPRGF0YVN0b3JhZ2UucHJvdG90eXBlLnNldD1mdW5jdGlvbihjb25uZWN0aW9uLHN1Yil7dmFyIHNzb2RhdGE9e2xhc3RVc2VkQ29ubmVjdGlvbjpjb25uZWN0aW9uLGxhc3RVc2VkU3ViOnN1Yn07dGhpcy5zdG9yYWdlLnNldEl0ZW0oXCJhdXRoMC5zc29kYXRhXCIsSlNPTi5zdHJpbmdpZnkoc3NvZGF0YSkpfSxTU09EYXRhU3RvcmFnZS5wcm90b3R5cGUuZ2V0PWZ1bmN0aW9uKCl7dmFyIHNzb2RhdGE9dGhpcy5zdG9yYWdlLmdldEl0ZW0oXCJhdXRoMC5zc29kYXRhXCIpO2lmKHNzb2RhdGEpcmV0dXJuIEpTT04ucGFyc2Uoc3NvZGF0YSl9O3ZhciBlcnJvcj17YnVpbGRSZXNwb25zZTpidWlsZFJlc3BvbnNlLGludmFsaWRUb2tlbjppbnZhbGlkVG9rZW59O2Z1bmN0aW9uIHdyYXBDYWxsYmFjayhjYixvcHRpb25zKXtyZXR1cm4ob3B0aW9ucz1vcHRpb25zfHx7fSkuaWdub3JlQ2FzaW5nPSEhb3B0aW9ucy5pZ25vcmVDYXNpbmcmJm9wdGlvbnMuaWdub3JlQ2FzaW5nLGZ1bmN0aW9uKGVycixkYXRhKXt2YXIgZXJyT2JqO3JldHVybiBlcnJ8fGRhdGE/KCFlcnImJmRhdGEuZXJyJiYoZXJyPWRhdGEuZXJyLGRhdGE9bnVsbCksIWVyciYmZGF0YS5lcnJvciYmKGVycj1kYXRhLGRhdGE9bnVsbCksZXJyPyhlcnJPYmo9e29yaWdpbmFsOmVycn0sZXJyLnJlc3BvbnNlJiZlcnIucmVzcG9uc2Uuc3RhdHVzQ29kZSYmKGVyck9iai5zdGF0dXNDb2RlPWVyci5yZXNwb25zZS5zdGF0dXNDb2RlKSxlcnIucmVzcG9uc2UmJmVyci5yZXNwb25zZS5zdGF0dXNUZXh0JiYoZXJyT2JqLnN0YXR1c1RleHQ9ZXJyLnJlc3BvbnNlLnN0YXR1c1RleHQpLGVyci5yZXNwb25zZSYmZXJyLnJlc3BvbnNlLmJvZHkmJihlcnI9ZXJyLnJlc3BvbnNlLmJvZHkpLGVyci5lcnImJihlcnI9ZXJyLmVyciksZXJyT2JqLmNvZGU9ZXJyLmNvZGV8fGVyci5lcnJvcnx8ZXJyLmVycm9yX2NvZGV8fGVyci5zdGF0dXN8fG51bGwsZXJyT2JqLmRlc2NyaXB0aW9uPWVyci5lcnJvckRlc2NyaXB0aW9ufHxlcnIuZXJyb3JfZGVzY3JpcHRpb258fGVyci5kZXNjcmlwdGlvbnx8ZXJyLmVycm9yfHxlcnIuZGV0YWlsc3x8ZXJyLmVycnx8bnVsbCxvcHRpb25zLmZvcmNlTGVnYWN5RXJyb3ImJihlcnJPYmouZXJyb3I9ZXJyT2JqLmNvZGUsZXJyT2JqLmVycm9yX2Rlc2NyaXB0aW9uPWVyck9iai5kZXNjcmlwdGlvbiksZXJyLm5hbWUmJihlcnJPYmoubmFtZT1lcnIubmFtZSksZXJyLnBvbGljeSYmKGVyck9iai5wb2xpY3k9ZXJyLnBvbGljeSksY2IoZXJyT2JqKSk6IWRhdGEudHlwZXx8XCJ0ZXh0L2h0bWxcIiE9PWRhdGEudHlwZSYmXCJ0ZXh0L3BsYWluXCIhPT1kYXRhLnR5cGU/b3B0aW9ucy5pZ25vcmVDYXNpbmc/Y2IobnVsbCxkYXRhLmJvZHl8fGRhdGEpOmNiKG51bGwsb2JqZWN0SGVscGVyLnRvQ2FtZWxDYXNlKGRhdGEuYm9keXx8ZGF0YSxbXSx7a2VlcE9yaWdpbmFsOm9wdGlvbnMua2VlcE9yaWdpbmFsQ2FzaW5nfSkpOmNiKG51bGwsZGF0YS50ZXh0KSk6Y2IoZXJyb3IuYnVpbGRSZXNwb25zZShcImdlbmVyaWNfZXJyb3JcIixcIlNvbWV0aGluZyB3ZW50IHdyb25nXCIpKX19dmFyIHRva2VuUGFyYW1zPVtcInJlYWxtXCIsXCJhdWRpZW5jZVwiLFwiY2xpZW50X2lkXCIsXCJjbGllbnRfc2VjcmV0XCIsXCJyZWRpcmVjdF91cmlcIixcInNjb3BlXCIsXCJjb2RlXCIsXCJncmFudF90eXBlXCIsXCJ1c2VybmFtZVwiLFwicGFzc3dvcmRcIixcInJlZnJlc2hfdG9rZW5cIixcImFzc2VydGlvblwiLFwiY2xpZW50X2Fzc2VydGlvblwiLFwiY2xpZW50X2Fzc2VydGlvbl90eXBlXCIsXCJjb2RlX3ZlcmlmaWVyXCJdLGF1dGhvcml6ZVBhcmFtcz1bXCJjb25uZWN0aW9uXCIsXCJjb25uZWN0aW9uX3Njb3BlXCIsXCJhdXRoMENsaWVudFwiLFwib3dwXCIsXCJkZXZpY2VcIixcInJlYWxtXCIsXCJwcm90b2NvbFwiLFwiX2NzcmZcIixcIl9pbnRzdGF0ZVwiLFwibG9naW5fdGlja2V0XCIsXCJjbGllbnRfaWRcIixcInJlc3BvbnNlX3R5cGVcIixcInJlc3BvbnNlX21vZGVcIixcInJlZGlyZWN0X3VyaVwiLFwiYXVkaWVuY2VcIixcInNjb3BlXCIsXCJzdGF0ZVwiLFwibm9uY2VcIixcImRpc3BsYXlcIixcInByb21wdFwiLFwibWF4X2FnZVwiLFwidWlfbG9jYWxlc1wiLFwiY2xhaW1zX2xvY2FsZXNcIixcImlkX3Rva2VuX2hpbnRcIixcImxvZ2luX2hpbnRcIixcImFjcl92YWx1ZXNcIixcImNsYWltc1wiLFwicmVnaXN0cmF0aW9uXCIsXCJyZXF1ZXN0XCIsXCJyZXF1ZXN0X3VyaVwiLFwiY29kZV9jaGFsbGVuZ2VcIixcImNvZGVfY2hhbGxlbmdlX21ldGhvZFwiLFwiYWNjZXNzX3R5cGVcIixcImRpc3BsYXlcIl07ZnVuY3Rpb24gb2F1dGhBdXRob3JpemVQYXJhbXMod2FybixwYXJhbXMpe3ZhciBub3RBbGxvd2VkPW9iamVjdEhlbHBlci5nZXRLZXlzTm90SW4ocGFyYW1zLGF1dGhvcml6ZVBhcmFtcyk7cmV0dXJuIG5vdEFsbG93ZWQubGVuZ3RoPjAmJndhcm4ud2FybmluZyhcIkZvbGxvd2luZyBwYXJhbWV0ZXJzIGFyZSBub3QgYWxsb3dlZCBvbiB0aGUgYC9hdXRob3JpemVgIGVuZHBvaW50OiBbXCIrbm90QWxsb3dlZC5qb2luKFwiLFwiKStcIl1cIikscGFyYW1zfWZ1bmN0aW9uIG9hdXRoVG9rZW5QYXJhbXMod2FybixwYXJhbXMpe3JldHVybiBvYmplY3RIZWxwZXIucGljayhwYXJhbXMsdG9rZW5QYXJhbXMpfXZhciBwYXJhbWV0ZXJzV2hpdGVsaXN0PXtvYXV0aFRva2VuUGFyYW1zOm9hdXRoVG9rZW5QYXJhbXMsb2F1dGhBdXRob3JpemVQYXJhbXM6b2F1dGhBdXRob3JpemVQYXJhbXN9LGNvcmU9Y3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24obW9kdWxlLGV4cG9ydHMpe3ZhciBDcnlwdG9KUzttb2R1bGUuZXhwb3J0cz0oQ3J5cHRvSlM9Q3J5cHRvSlN8fGZ1bmN0aW9uKE1hdGgsdW5kZWZpbmVkKXt2YXIgY3JlYXRlPU9iamVjdC5jcmVhdGV8fGZ1bmN0aW9uKCl7ZnVuY3Rpb24gRigpe31yZXR1cm4gZnVuY3Rpb24ob2JqKXt2YXIgc3VidHlwZTtyZXR1cm4gRi5wcm90b3R5cGU9b2JqLHN1YnR5cGU9bmV3IEYsRi5wcm90b3R5cGU9bnVsbCxzdWJ0eXBlfX0oKSxDPXt9LENfbGliPUMubGliPXt9LEJhc2U9Q19saWIuQmFzZT17ZXh0ZW5kOmZ1bmN0aW9uKG92ZXJyaWRlcyl7dmFyIHN1YnR5cGU9Y3JlYXRlKHRoaXMpO3JldHVybiBvdmVycmlkZXMmJnN1YnR5cGUubWl4SW4ob3ZlcnJpZGVzKSxzdWJ0eXBlLmhhc093blByb3BlcnR5KFwiaW5pdFwiKSYmdGhpcy5pbml0IT09c3VidHlwZS5pbml0fHwoc3VidHlwZS5pbml0PWZ1bmN0aW9uKCl7c3VidHlwZS4kc3VwZXIuaW5pdC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9KSxzdWJ0eXBlLmluaXQucHJvdG90eXBlPXN1YnR5cGUsc3VidHlwZS4kc3VwZXI9dGhpcyxzdWJ0eXBlfSxjcmVhdGU6ZnVuY3Rpb24oKXt2YXIgaW5zdGFuY2U9dGhpcy5leHRlbmQoKTtyZXR1cm4gaW5zdGFuY2UuaW5pdC5hcHBseShpbnN0YW5jZSxhcmd1bWVudHMpLGluc3RhbmNlfSxpbml0OmZ1bmN0aW9uKCl7fSxtaXhJbjpmdW5jdGlvbihwcm9wZXJ0aWVzKXtmb3IodmFyIHByb3BlcnR5TmFtZSBpbiBwcm9wZXJ0aWVzKXByb3BlcnRpZXMuaGFzT3duUHJvcGVydHkocHJvcGVydHlOYW1lKSYmKHRoaXNbcHJvcGVydHlOYW1lXT1wcm9wZXJ0aWVzW3Byb3BlcnR5TmFtZV0pO3Byb3BlcnRpZXMuaGFzT3duUHJvcGVydHkoXCJ0b1N0cmluZ1wiKSYmKHRoaXMudG9TdHJpbmc9cHJvcGVydGllcy50b1N0cmluZyl9LGNsb25lOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaW5pdC5wcm90b3R5cGUuZXh0ZW5kKHRoaXMpfX0sV29yZEFycmF5PUNfbGliLldvcmRBcnJheT1CYXNlLmV4dGVuZCh7aW5pdDpmdW5jdGlvbih3b3JkcyxzaWdCeXRlcyl7d29yZHM9dGhpcy53b3Jkcz13b3Jkc3x8W10sdGhpcy5zaWdCeXRlcz1udWxsIT1zaWdCeXRlcz9zaWdCeXRlczo0KndvcmRzLmxlbmd0aH0sdG9TdHJpbmc6ZnVuY3Rpb24oZW5jb2Rlcil7cmV0dXJuKGVuY29kZXJ8fEhleCkuc3RyaW5naWZ5KHRoaXMpfSxjb25jYXQ6ZnVuY3Rpb24od29yZEFycmF5KXt2YXIgdGhpc1dvcmRzPXRoaXMud29yZHMsdGhhdFdvcmRzPXdvcmRBcnJheS53b3Jkcyx0aGlzU2lnQnl0ZXM9dGhpcy5zaWdCeXRlcyx0aGF0U2lnQnl0ZXM9d29yZEFycmF5LnNpZ0J5dGVzO2lmKHRoaXMuY2xhbXAoKSx0aGlzU2lnQnl0ZXMlNClmb3IodmFyIGk9MDtpPHRoYXRTaWdCeXRlcztpKyspe3ZhciB0aGF0Qnl0ZT10aGF0V29yZHNbaT4+PjJdPj4+MjQtaSU0KjgmMjU1O3RoaXNXb3Jkc1t0aGlzU2lnQnl0ZXMraT4+PjJdfD10aGF0Qnl0ZTw8MjQtKHRoaXNTaWdCeXRlcytpKSU0Kjh9ZWxzZSBmb3IodmFyIGk9MDtpPHRoYXRTaWdCeXRlcztpKz00KXRoaXNXb3Jkc1t0aGlzU2lnQnl0ZXMraT4+PjJdPXRoYXRXb3Jkc1tpPj4+Ml07cmV0dXJuIHRoaXMuc2lnQnl0ZXMrPXRoYXRTaWdCeXRlcyx0aGlzfSxjbGFtcDpmdW5jdGlvbigpe3ZhciB3b3Jkcz10aGlzLndvcmRzLHNpZ0J5dGVzPXRoaXMuc2lnQnl0ZXM7d29yZHNbc2lnQnl0ZXM+Pj4yXSY9NDI5NDk2NzI5NTw8MzItc2lnQnl0ZXMlNCo4LHdvcmRzLmxlbmd0aD1NYXRoLmNlaWwoc2lnQnl0ZXMvNCl9LGNsb25lOmZ1bmN0aW9uKCl7dmFyIGNsb25lPUJhc2UuY2xvbmUuY2FsbCh0aGlzKTtyZXR1cm4gY2xvbmUud29yZHM9dGhpcy53b3Jkcy5zbGljZSgwKSxjbG9uZX0scmFuZG9tOmZ1bmN0aW9uKG5CeXRlcyl7Zm9yKHZhciByY2FjaGUsd29yZHM9W10scj1mdW5jdGlvbihtX3cpe3ZhciBtX3c9bV93LG1fej05ODc2NTQzMjEsbWFzaz00Mjk0OTY3Mjk1O3JldHVybiBmdW5jdGlvbigpe3ZhciByZXN1bHQ9KChtX3o9MzY5NjkqKDY1NTM1Jm1feikrKG1fej4+MTYpJm1hc2spPDwxNikrKG1fdz0xOGUzKig2NTUzNSZtX3cpKyhtX3c+PjE2KSZtYXNrKSZtYXNrO3JldHVybiByZXN1bHQvPTQyOTQ5NjcyOTYsKHJlc3VsdCs9LjUpKihNYXRoLnJhbmRvbSgpPi41PzE6LTEpfX0saT0wO2k8bkJ5dGVzO2krPTQpe3ZhciBfcj1yKDQyOTQ5NjcyOTYqKHJjYWNoZXx8TWF0aC5yYW5kb20oKSkpO3JjYWNoZT05ODc2NTQwNzEqX3IoKSx3b3Jkcy5wdXNoKDQyOTQ5NjcyOTYqX3IoKXwwKX1yZXR1cm4gbmV3IFdvcmRBcnJheS5pbml0KHdvcmRzLG5CeXRlcyl9fSksQ19lbmM9Qy5lbmM9e30sSGV4PUNfZW5jLkhleD17c3RyaW5naWZ5OmZ1bmN0aW9uKHdvcmRBcnJheSl7Zm9yKHZhciB3b3Jkcz13b3JkQXJyYXkud29yZHMsc2lnQnl0ZXM9d29yZEFycmF5LnNpZ0J5dGVzLGhleENoYXJzPVtdLGk9MDtpPHNpZ0J5dGVzO2krKyl7dmFyIGJpdGU9d29yZHNbaT4+PjJdPj4+MjQtaSU0KjgmMjU1O2hleENoYXJzLnB1c2goKGJpdGU+Pj40KS50b1N0cmluZygxNikpLGhleENoYXJzLnB1c2goKDE1JmJpdGUpLnRvU3RyaW5nKDE2KSl9cmV0dXJuIGhleENoYXJzLmpvaW4oXCJcIil9LHBhcnNlOmZ1bmN0aW9uKGhleFN0cil7Zm9yKHZhciBoZXhTdHJMZW5ndGg9aGV4U3RyLmxlbmd0aCx3b3Jkcz1bXSxpPTA7aTxoZXhTdHJMZW5ndGg7aSs9Mil3b3Jkc1tpPj4+M118PXBhcnNlSW50KGhleFN0ci5zdWJzdHIoaSwyKSwxNik8PDI0LWklOCo0O3JldHVybiBuZXcgV29yZEFycmF5LmluaXQod29yZHMsaGV4U3RyTGVuZ3RoLzIpfX0sTGF0aW4xPUNfZW5jLkxhdGluMT17c3RyaW5naWZ5OmZ1bmN0aW9uKHdvcmRBcnJheSl7Zm9yKHZhciB3b3Jkcz13b3JkQXJyYXkud29yZHMsc2lnQnl0ZXM9d29yZEFycmF5LnNpZ0J5dGVzLGxhdGluMUNoYXJzPVtdLGk9MDtpPHNpZ0J5dGVzO2krKyl7dmFyIGJpdGU9d29yZHNbaT4+PjJdPj4+MjQtaSU0KjgmMjU1O2xhdGluMUNoYXJzLnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZShiaXRlKSl9cmV0dXJuIGxhdGluMUNoYXJzLmpvaW4oXCJcIil9LHBhcnNlOmZ1bmN0aW9uKGxhdGluMVN0cil7Zm9yKHZhciBsYXRpbjFTdHJMZW5ndGg9bGF0aW4xU3RyLmxlbmd0aCx3b3Jkcz1bXSxpPTA7aTxsYXRpbjFTdHJMZW5ndGg7aSsrKXdvcmRzW2k+Pj4yXXw9KDI1NSZsYXRpbjFTdHIuY2hhckNvZGVBdChpKSk8PDI0LWklNCo4O3JldHVybiBuZXcgV29yZEFycmF5LmluaXQod29yZHMsbGF0aW4xU3RyTGVuZ3RoKX19LFV0Zjg9Q19lbmMuVXRmOD17c3RyaW5naWZ5OmZ1bmN0aW9uKHdvcmRBcnJheSl7dHJ5e3JldHVybiBkZWNvZGVVUklDb21wb25lbnQoZXNjYXBlKExhdGluMS5zdHJpbmdpZnkod29yZEFycmF5KSkpfWNhdGNoKGUpe3Rocm93IG5ldyBFcnJvcihcIk1hbGZvcm1lZCBVVEYtOCBkYXRhXCIpfX0scGFyc2U6ZnVuY3Rpb24odXRmOFN0cil7cmV0dXJuIExhdGluMS5wYXJzZSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQodXRmOFN0cikpKX19LEJ1ZmZlcmVkQmxvY2tBbGdvcml0aG09Q19saWIuQnVmZmVyZWRCbG9ja0FsZ29yaXRobT1CYXNlLmV4dGVuZCh7cmVzZXQ6ZnVuY3Rpb24oKXt0aGlzLl9kYXRhPW5ldyBXb3JkQXJyYXkuaW5pdCx0aGlzLl9uRGF0YUJ5dGVzPTB9LF9hcHBlbmQ6ZnVuY3Rpb24oZGF0YSl7XCJzdHJpbmdcIj09dHlwZW9mIGRhdGEmJihkYXRhPVV0ZjgucGFyc2UoZGF0YSkpLHRoaXMuX2RhdGEuY29uY2F0KGRhdGEpLHRoaXMuX25EYXRhQnl0ZXMrPWRhdGEuc2lnQnl0ZXN9LF9wcm9jZXNzOmZ1bmN0aW9uKGRvRmx1c2gpe3ZhciBkYXRhPXRoaXMuX2RhdGEsZGF0YVdvcmRzPWRhdGEud29yZHMsZGF0YVNpZ0J5dGVzPWRhdGEuc2lnQnl0ZXMsYmxvY2tTaXplPXRoaXMuYmxvY2tTaXplLGJsb2NrU2l6ZUJ5dGVzPTQqYmxvY2tTaXplLG5CbG9ja3NSZWFkeT1kYXRhU2lnQnl0ZXMvYmxvY2tTaXplQnl0ZXMsbldvcmRzUmVhZHk9KG5CbG9ja3NSZWFkeT1kb0ZsdXNoP01hdGguY2VpbChuQmxvY2tzUmVhZHkpOk1hdGgubWF4KCgwfG5CbG9ja3NSZWFkeSktdGhpcy5fbWluQnVmZmVyU2l6ZSwwKSkqYmxvY2tTaXplLG5CeXRlc1JlYWR5PU1hdGgubWluKDQqbldvcmRzUmVhZHksZGF0YVNpZ0J5dGVzKTtpZihuV29yZHNSZWFkeSl7Zm9yKHZhciBvZmZzZXQ9MDtvZmZzZXQ8bldvcmRzUmVhZHk7b2Zmc2V0Kz1ibG9ja1NpemUpdGhpcy5fZG9Qcm9jZXNzQmxvY2soZGF0YVdvcmRzLG9mZnNldCk7dmFyIHByb2Nlc3NlZFdvcmRzPWRhdGFXb3Jkcy5zcGxpY2UoMCxuV29yZHNSZWFkeSk7ZGF0YS5zaWdCeXRlcy09bkJ5dGVzUmVhZHl9cmV0dXJuIG5ldyBXb3JkQXJyYXkuaW5pdChwcm9jZXNzZWRXb3JkcyxuQnl0ZXNSZWFkeSl9LGNsb25lOmZ1bmN0aW9uKCl7dmFyIGNsb25lPUJhc2UuY2xvbmUuY2FsbCh0aGlzKTtyZXR1cm4gY2xvbmUuX2RhdGE9dGhpcy5fZGF0YS5jbG9uZSgpLGNsb25lfSxfbWluQnVmZmVyU2l6ZTowfSksQ19hbGdvPShDX2xpYi5IYXNoZXI9QnVmZmVyZWRCbG9ja0FsZ29yaXRobS5leHRlbmQoe2NmZzpCYXNlLmV4dGVuZCgpLGluaXQ6ZnVuY3Rpb24oY2ZnKXt0aGlzLmNmZz10aGlzLmNmZy5leHRlbmQoY2ZnKSx0aGlzLnJlc2V0KCl9LHJlc2V0OmZ1bmN0aW9uKCl7QnVmZmVyZWRCbG9ja0FsZ29yaXRobS5yZXNldC5jYWxsKHRoaXMpLHRoaXMuX2RvUmVzZXQoKX0sdXBkYXRlOmZ1bmN0aW9uKG1lc3NhZ2VVcGRhdGUpe3JldHVybiB0aGlzLl9hcHBlbmQobWVzc2FnZVVwZGF0ZSksdGhpcy5fcHJvY2VzcygpLHRoaXN9LGZpbmFsaXplOmZ1bmN0aW9uKG1lc3NhZ2VVcGRhdGUpe21lc3NhZ2VVcGRhdGUmJnRoaXMuX2FwcGVuZChtZXNzYWdlVXBkYXRlKTt2YXIgaGFzaD10aGlzLl9kb0ZpbmFsaXplKCk7cmV0dXJuIGhhc2h9LGJsb2NrU2l6ZToxNixfY3JlYXRlSGVscGVyOmZ1bmN0aW9uKGhhc2hlcil7cmV0dXJuIGZ1bmN0aW9uKG1lc3NhZ2UsY2ZnKXtyZXR1cm4gbmV3IGhhc2hlci5pbml0KGNmZykuZmluYWxpemUobWVzc2FnZSl9fSxfY3JlYXRlSG1hY0hlbHBlcjpmdW5jdGlvbihoYXNoZXIpe3JldHVybiBmdW5jdGlvbihtZXNzYWdlLGtleSl7cmV0dXJuIG5ldyBDX2FsZ28uSE1BQy5pbml0KGhhc2hlcixrZXkpLmZpbmFsaXplKG1lc3NhZ2UpfX19KSxDLmFsZ289e30pO3JldHVybiBDfShNYXRoKSxDcnlwdG9KUyl9KSxzaGEyNTY9Y3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24obW9kdWxlLGV4cG9ydHMpe3ZhciBDcnlwdG9KUzttb2R1bGUuZXhwb3J0cz0oQ3J5cHRvSlM9Y29yZSxmdW5jdGlvbihNYXRoKXt2YXIgQz1DcnlwdG9KUyxDX2xpYj1DLmxpYixXb3JkQXJyYXk9Q19saWIuV29yZEFycmF5LEhhc2hlcj1DX2xpYi5IYXNoZXIsQ19hbGdvPUMuYWxnbyxIPVtdLEs9W107IWZ1bmN0aW9uKCl7ZnVuY3Rpb24gaXNQcmltZShuKXtmb3IodmFyIHNxcnROPU1hdGguc3FydChuKSxmYWN0b3I9MjtmYWN0b3I8PXNxcnROO2ZhY3RvcisrKWlmKCEobiVmYWN0b3IpKXJldHVybiExO3JldHVybiEwfWZ1bmN0aW9uIGdldEZyYWN0aW9uYWxCaXRzKG4pe3JldHVybiA0Mjk0OTY3Mjk2KihuLSgwfG4pKXwwfWZvcih2YXIgbj0yLG5QcmltZT0wO25QcmltZTw2NDspaXNQcmltZShuKSYmKG5QcmltZTw4JiYoSFtuUHJpbWVdPWdldEZyYWN0aW9uYWxCaXRzKE1hdGgucG93KG4sLjUpKSksS1tuUHJpbWVdPWdldEZyYWN0aW9uYWxCaXRzKE1hdGgucG93KG4sMS8zKSksblByaW1lKyspLG4rK30oKTt2YXIgVz1bXSxTSEEyNTY9Q19hbGdvLlNIQTI1Nj1IYXNoZXIuZXh0ZW5kKHtfZG9SZXNldDpmdW5jdGlvbigpe3RoaXMuX2hhc2g9bmV3IFdvcmRBcnJheS5pbml0KEguc2xpY2UoMCkpfSxfZG9Qcm9jZXNzQmxvY2s6ZnVuY3Rpb24oTSxvZmZzZXQpe2Zvcih2YXIgSD10aGlzLl9oYXNoLndvcmRzLGE9SFswXSxiPUhbMV0sYz1IWzJdLGQ9SFszXSxlPUhbNF0sZj1IWzVdLGc9SFs2XSxoPUhbN10saT0wO2k8NjQ7aSsrKXtpZihpPDE2KVdbaV09MHxNW29mZnNldCtpXTtlbHNle3ZhciBnYW1tYTB4PVdbaS0xNV0sZ2FtbWEwPShnYW1tYTB4PDwyNXxnYW1tYTB4Pj4+NyleKGdhbW1hMHg8PDE0fGdhbW1hMHg+Pj4xOCleZ2FtbWEweD4+PjMsZ2FtbWExeD1XW2ktMl0sZ2FtbWExPShnYW1tYTF4PDwxNXxnYW1tYTF4Pj4+MTcpXihnYW1tYTF4PDwxM3xnYW1tYTF4Pj4+MTkpXmdhbW1hMXg+Pj4xMDtXW2ldPWdhbW1hMCtXW2ktN10rZ2FtbWExK1dbaS0xNl19dmFyIG1haj1hJmJeYSZjXmImYyxzaWdtYTA9KGE8PDMwfGE+Pj4yKV4oYTw8MTl8YT4+PjEzKV4oYTw8MTB8YT4+PjIyKSx0MT1oKygoZTw8MjZ8ZT4+PjYpXihlPDwyMXxlPj4+MTEpXihlPDw3fGU+Pj4yNSkpKyhlJmZefmUmZykrS1tpXStXW2ldO2g9ZyxnPWYsZj1lLGU9ZCt0MXwwLGQ9YyxjPWIsYj1hLGE9dDErKHNpZ21hMCttYWopfDB9SFswXT1IWzBdK2F8MCxIWzFdPUhbMV0rYnwwLEhbMl09SFsyXStjfDAsSFszXT1IWzNdK2R8MCxIWzRdPUhbNF0rZXwwLEhbNV09SFs1XStmfDAsSFs2XT1IWzZdK2d8MCxIWzddPUhbN10raHwwfSxfZG9GaW5hbGl6ZTpmdW5jdGlvbigpe3ZhciBkYXRhPXRoaXMuX2RhdGEsZGF0YVdvcmRzPWRhdGEud29yZHMsbkJpdHNUb3RhbD04KnRoaXMuX25EYXRhQnl0ZXMsbkJpdHNMZWZ0PTgqZGF0YS5zaWdCeXRlcztyZXR1cm4gZGF0YVdvcmRzW25CaXRzTGVmdD4+PjVdfD0xMjg8PDI0LW5CaXRzTGVmdCUzMixkYXRhV29yZHNbMTQrKG5CaXRzTGVmdCs2ND4+Pjk8PDQpXT1NYXRoLmZsb29yKG5CaXRzVG90YWwvNDI5NDk2NzI5NiksZGF0YVdvcmRzWzE1KyhuQml0c0xlZnQrNjQ+Pj45PDw0KV09bkJpdHNUb3RhbCxkYXRhLnNpZ0J5dGVzPTQqZGF0YVdvcmRzLmxlbmd0aCx0aGlzLl9wcm9jZXNzKCksdGhpcy5faGFzaH0sY2xvbmU6ZnVuY3Rpb24oKXt2YXIgY2xvbmU9SGFzaGVyLmNsb25lLmNhbGwodGhpcyk7cmV0dXJuIGNsb25lLl9oYXNoPXRoaXMuX2hhc2guY2xvbmUoKSxjbG9uZX19KTtDLlNIQTI1Nj1IYXNoZXIuX2NyZWF0ZUhlbHBlcihTSEEyNTYpLEMuSG1hY1NIQTI1Nj1IYXNoZXIuX2NyZWF0ZUhtYWNIZWxwZXIoU0hBMjU2KX0oTWF0aCksQ3J5cHRvSlMuU0hBMjU2KX0pLGVuY0Jhc2U2ND1jcmVhdGVDb21tb25qc01vZHVsZShmdW5jdGlvbihtb2R1bGUsZXhwb3J0cyl7dmFyIENyeXB0b0pTLEMsV29yZEFycmF5O21vZHVsZS5leHBvcnRzPShXb3JkQXJyYXk9KEM9Q3J5cHRvSlM9Y29yZSkubGliLldvcmRBcnJheSxDLmVuYy5CYXNlNjQ9e3N0cmluZ2lmeTpmdW5jdGlvbih3b3JkQXJyYXkpe3ZhciB3b3Jkcz13b3JkQXJyYXkud29yZHMsc2lnQnl0ZXM9d29yZEFycmF5LnNpZ0J5dGVzLG1hcD10aGlzLl9tYXA7d29yZEFycmF5LmNsYW1wKCk7Zm9yKHZhciBiYXNlNjRDaGFycz1bXSxpPTA7aTxzaWdCeXRlcztpKz0zKWZvcih2YXIgdHJpcGxldD0od29yZHNbaT4+PjJdPj4+MjQtaSU0KjgmMjU1KTw8MTZ8KHdvcmRzW2krMT4+PjJdPj4+MjQtKGkrMSklNCo4JjI1NSk8PDh8d29yZHNbaSsyPj4+Ml0+Pj4yNC0oaSsyKSU0KjgmMjU1LGo9MDtqPDQmJmkrLjc1Kmo8c2lnQnl0ZXM7aisrKWJhc2U2NENoYXJzLnB1c2gobWFwLmNoYXJBdCh0cmlwbGV0Pj4+NiooMy1qKSY2MykpO3ZhciBwYWRkaW5nQ2hhcj1tYXAuY2hhckF0KDY0KTtpZihwYWRkaW5nQ2hhcilmb3IoO2Jhc2U2NENoYXJzLmxlbmd0aCU0OyliYXNlNjRDaGFycy5wdXNoKHBhZGRpbmdDaGFyKTtyZXR1cm4gYmFzZTY0Q2hhcnMuam9pbihcIlwiKX0scGFyc2U6ZnVuY3Rpb24oYmFzZTY0U3RyKXt2YXIgYmFzZTY0U3RyTGVuZ3RoPWJhc2U2NFN0ci5sZW5ndGgsbWFwPXRoaXMuX21hcCxyZXZlcnNlTWFwPXRoaXMuX3JldmVyc2VNYXA7aWYoIXJldmVyc2VNYXApe3JldmVyc2VNYXA9dGhpcy5fcmV2ZXJzZU1hcD1bXTtmb3IodmFyIGo9MDtqPG1hcC5sZW5ndGg7aisrKXJldmVyc2VNYXBbbWFwLmNoYXJDb2RlQXQoaildPWp9dmFyIHBhZGRpbmdDaGFyPW1hcC5jaGFyQXQoNjQpO2lmKHBhZGRpbmdDaGFyKXt2YXIgcGFkZGluZ0luZGV4PWJhc2U2NFN0ci5pbmRleE9mKHBhZGRpbmdDaGFyKTstMSE9PXBhZGRpbmdJbmRleCYmKGJhc2U2NFN0ckxlbmd0aD1wYWRkaW5nSW5kZXgpfXJldHVybiBmdW5jdGlvbihiYXNlNjRTdHIsYmFzZTY0U3RyTGVuZ3RoLHJldmVyc2VNYXApe2Zvcih2YXIgd29yZHM9W10sbkJ5dGVzPTAsaT0wO2k8YmFzZTY0U3RyTGVuZ3RoO2krKylpZihpJTQpe3ZhciBiaXRzMT1yZXZlcnNlTWFwW2Jhc2U2NFN0ci5jaGFyQ29kZUF0KGktMSldPDxpJTQqMixiaXRzMj1yZXZlcnNlTWFwW2Jhc2U2NFN0ci5jaGFyQ29kZUF0KGkpXT4+PjYtaSU0KjI7d29yZHNbbkJ5dGVzPj4+Ml18PShiaXRzMXxiaXRzMik8PDI0LW5CeXRlcyU0KjgsbkJ5dGVzKyt9cmV0dXJuIFdvcmRBcnJheS5jcmVhdGUod29yZHMsbkJ5dGVzKX0oYmFzZTY0U3RyLGJhc2U2NFN0ckxlbmd0aCxyZXZlcnNlTWFwKX0sX21hcDpcIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky89XCJ9LENyeXB0b0pTLmVuYy5CYXNlNjQpfSksZW5jSGV4PWNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZ1bmN0aW9uKG1vZHVsZSxleHBvcnRzKXttb2R1bGUuZXhwb3J0cz1jb3JlLmVuYy5IZXh9KSxqc2JuPWNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZ1bmN0aW9uKG1vZHVsZSxleHBvcnRzKXsoZnVuY3Rpb24oKXt2YXIgZGJpdHM7ZnVuY3Rpb24gQmlnSW50ZWdlcihhLGIsYyl7bnVsbCE9YSYmKFwibnVtYmVyXCI9PXR5cGVvZiBhP3RoaXMuZnJvbU51bWJlcihhLGIsYyk6bnVsbD09YiYmXCJzdHJpbmdcIiE9dHlwZW9mIGE/dGhpcy5mcm9tU3RyaW5nKGEsMjU2KTp0aGlzLmZyb21TdHJpbmcoYSxiKSl9ZnVuY3Rpb24gbmJpKCl7cmV0dXJuIG5ldyBCaWdJbnRlZ2VyKG51bGwpfXZhciBpbkJyb3dzZXI9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIG5hdmlnYXRvcjtpbkJyb3dzZXImJlwiTWljcm9zb2Z0IEludGVybmV0IEV4cGxvcmVyXCI9PW5hdmlnYXRvci5hcHBOYW1lPyhCaWdJbnRlZ2VyLnByb3RvdHlwZS5hbT1mdW5jdGlvbihpLHgsdyxqLGMsbil7Zm9yKHZhciB4bD0zMjc2NyZ4LHhoPXg+PjE1Oy0tbj49MDspe3ZhciBsPTMyNzY3JnRoaXNbaV0saD10aGlzW2krK10+PjE1LG09eGgqbCtoKnhsO2M9KChsPXhsKmwrKCgzMjc2NyZtKTw8MTUpK3dbal0rKDEwNzM3NDE4MjMmYykpPj4+MzApKyhtPj4+MTUpK3hoKmgrKGM+Pj4zMCksd1tqKytdPTEwNzM3NDE4MjMmbH1yZXR1cm4gY30sZGJpdHM9MzApOmluQnJvd3NlciYmXCJOZXRzY2FwZVwiIT1uYXZpZ2F0b3IuYXBwTmFtZT8oQmlnSW50ZWdlci5wcm90b3R5cGUuYW09ZnVuY3Rpb24oaSx4LHcsaixjLG4pe2Zvcig7LS1uPj0wOyl7dmFyIHY9eCp0aGlzW2krK10rd1tqXStjO2M9TWF0aC5mbG9vcih2LzY3MTA4ODY0KSx3W2orK109NjcxMDg4NjMmdn1yZXR1cm4gY30sZGJpdHM9MjYpOihCaWdJbnRlZ2VyLnByb3RvdHlwZS5hbT1mdW5jdGlvbihpLHgsdyxqLGMsbil7Zm9yKHZhciB4bD0xNjM4MyZ4LHhoPXg+PjE0Oy0tbj49MDspe3ZhciBsPTE2MzgzJnRoaXNbaV0saD10aGlzW2krK10+PjE0LG09eGgqbCtoKnhsO2M9KChsPXhsKmwrKCgxNjM4MyZtKTw8MTQpK3dbal0rYyk+PjI4KSsobT4+MTQpK3hoKmgsd1tqKytdPTI2ODQzNTQ1NSZsfXJldHVybiBjfSxkYml0cz0yOCksQmlnSW50ZWdlci5wcm90b3R5cGUuREI9ZGJpdHMsQmlnSW50ZWdlci5wcm90b3R5cGUuRE09KDE8PGRiaXRzKS0xLEJpZ0ludGVnZXIucHJvdG90eXBlLkRWPTE8PGRiaXRzO0JpZ0ludGVnZXIucHJvdG90eXBlLkZWPU1hdGgucG93KDIsNTIpLEJpZ0ludGVnZXIucHJvdG90eXBlLkYxPTUyLWRiaXRzLEJpZ0ludGVnZXIucHJvdG90eXBlLkYyPTIqZGJpdHMtNTI7dmFyIHJyLHZ2LEJJX1JNPVwiMDEyMzQ1Njc4OWFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6XCIsQklfUkM9bmV3IEFycmF5O2Zvcihycj1cIjBcIi5jaGFyQ29kZUF0KDApLHZ2PTA7dnY8PTk7Kyt2dilCSV9SQ1tycisrXT12djtmb3IocnI9XCJhXCIuY2hhckNvZGVBdCgwKSx2dj0xMDt2djwzNjsrK3Z2KUJJX1JDW3JyKytdPXZ2O2Zvcihycj1cIkFcIi5jaGFyQ29kZUF0KDApLHZ2PTEwO3Z2PDM2OysrdnYpQklfUkNbcnIrK109dnY7ZnVuY3Rpb24gaW50MmNoYXIobil7cmV0dXJuIEJJX1JNLmNoYXJBdChuKX1mdW5jdGlvbiBpbnRBdChzLGkpe3ZhciBjPUJJX1JDW3MuY2hhckNvZGVBdChpKV07cmV0dXJuIG51bGw9PWM/LTE6Y31mdW5jdGlvbiBuYnYoaSl7dmFyIHI9bmJpKCk7cmV0dXJuIHIuZnJvbUludChpKSxyfWZ1bmN0aW9uIG5iaXRzKHgpe3ZhciB0LHI9MTtyZXR1cm4gMCE9KHQ9eD4+PjE2KSYmKHg9dCxyKz0xNiksMCE9KHQ9eD4+OCkmJih4PXQscis9OCksMCE9KHQ9eD4+NCkmJih4PXQscis9NCksMCE9KHQ9eD4+MikmJih4PXQscis9MiksMCE9KHQ9eD4+MSkmJih4PXQscis9MSkscn1mdW5jdGlvbiBDbGFzc2ljKG0pe3RoaXMubT1tfWZ1bmN0aW9uIE1vbnRnb21lcnkobSl7dGhpcy5tPW0sdGhpcy5tcD1tLmludkRpZ2l0KCksdGhpcy5tcGw9MzI3NjcmdGhpcy5tcCx0aGlzLm1waD10aGlzLm1wPj4xNSx0aGlzLnVtPSgxPDxtLkRCLTE1KS0xLHRoaXMubXQyPTIqbS50fWZ1bmN0aW9uIG9wX2FuZCh4LHkpe3JldHVybiB4Jnl9ZnVuY3Rpb24gb3Bfb3IoeCx5KXtyZXR1cm4geHx5fWZ1bmN0aW9uIG9wX3hvcih4LHkpe3JldHVybiB4Xnl9ZnVuY3Rpb24gb3BfYW5kbm90KHgseSl7cmV0dXJuIHgmfnl9ZnVuY3Rpb24gbGJpdCh4KXtpZigwPT14KXJldHVybi0xO3ZhciByPTA7cmV0dXJuIDA9PSg2NTUzNSZ4KSYmKHg+Pj0xNixyKz0xNiksMD09KDI1NSZ4KSYmKHg+Pj04LHIrPTgpLDA9PSgxNSZ4KSYmKHg+Pj00LHIrPTQpLDA9PSgzJngpJiYoeD4+PTIscis9MiksMD09KDEmeCkmJisrcixyfWZ1bmN0aW9uIGNiaXQoeCl7Zm9yKHZhciByPTA7MCE9eDspeCY9eC0xLCsrcjtyZXR1cm4gcn1mdW5jdGlvbiBOdWxsRXhwKCl7fWZ1bmN0aW9uIG5Ob3AoeCl7cmV0dXJuIHh9ZnVuY3Rpb24gQmFycmV0dChtKXt0aGlzLnIyPW5iaSgpLHRoaXMucTM9bmJpKCksQmlnSW50ZWdlci5PTkUuZGxTaGlmdFRvKDIqbS50LHRoaXMucjIpLHRoaXMubXU9dGhpcy5yMi5kaXZpZGUobSksdGhpcy5tPW19Q2xhc3NpYy5wcm90b3R5cGUuY29udmVydD1mdW5jdGlvbih4KXtyZXR1cm4geC5zPDB8fHguY29tcGFyZVRvKHRoaXMubSk+PTA/eC5tb2QodGhpcy5tKTp4fSxDbGFzc2ljLnByb3RvdHlwZS5yZXZlcnQ9ZnVuY3Rpb24oeCl7cmV0dXJuIHh9LENsYXNzaWMucHJvdG90eXBlLnJlZHVjZT1mdW5jdGlvbih4KXt4LmRpdlJlbVRvKHRoaXMubSxudWxsLHgpfSxDbGFzc2ljLnByb3RvdHlwZS5tdWxUbz1mdW5jdGlvbih4LHkscil7eC5tdWx0aXBseVRvKHksciksdGhpcy5yZWR1Y2Uocil9LENsYXNzaWMucHJvdG90eXBlLnNxclRvPWZ1bmN0aW9uKHgscil7eC5zcXVhcmVUbyhyKSx0aGlzLnJlZHVjZShyKX0sTW9udGdvbWVyeS5wcm90b3R5cGUuY29udmVydD1mdW5jdGlvbih4KXt2YXIgcj1uYmkoKTtyZXR1cm4geC5hYnMoKS5kbFNoaWZ0VG8odGhpcy5tLnQsciksci5kaXZSZW1Ubyh0aGlzLm0sbnVsbCxyKSx4LnM8MCYmci5jb21wYXJlVG8oQmlnSW50ZWdlci5aRVJPKT4wJiZ0aGlzLm0uc3ViVG8ocixyKSxyfSxNb250Z29tZXJ5LnByb3RvdHlwZS5yZXZlcnQ9ZnVuY3Rpb24oeCl7dmFyIHI9bmJpKCk7cmV0dXJuIHguY29weVRvKHIpLHRoaXMucmVkdWNlKHIpLHJ9LE1vbnRnb21lcnkucHJvdG90eXBlLnJlZHVjZT1mdW5jdGlvbih4KXtmb3IoO3gudDw9dGhpcy5tdDI7KXhbeC50KytdPTA7Zm9yKHZhciBpPTA7aTx0aGlzLm0udDsrK2kpe3ZhciBqPTMyNzY3JnhbaV0sdTA9aip0aGlzLm1wbCsoKGoqdGhpcy5tcGgrKHhbaV0+PjE1KSp0aGlzLm1wbCZ0aGlzLnVtKTw8MTUpJnguRE07Zm9yKHhbaj1pK3RoaXMubS50XSs9dGhpcy5tLmFtKDAsdTAseCxpLDAsdGhpcy5tLnQpO3hbal0+PXguRFY7KXhbal0tPXguRFYseFsrK2pdKyt9eC5jbGFtcCgpLHguZHJTaGlmdFRvKHRoaXMubS50LHgpLHguY29tcGFyZVRvKHRoaXMubSk+PTAmJnguc3ViVG8odGhpcy5tLHgpfSxNb250Z29tZXJ5LnByb3RvdHlwZS5tdWxUbz1mdW5jdGlvbih4LHkscil7eC5tdWx0aXBseVRvKHksciksdGhpcy5yZWR1Y2Uocil9LE1vbnRnb21lcnkucHJvdG90eXBlLnNxclRvPWZ1bmN0aW9uKHgscil7eC5zcXVhcmVUbyhyKSx0aGlzLnJlZHVjZShyKX0sQmlnSW50ZWdlci5wcm90b3R5cGUuY29weVRvPWZ1bmN0aW9uKHIpe2Zvcih2YXIgaT10aGlzLnQtMTtpPj0wOy0taSlyW2ldPXRoaXNbaV07ci50PXRoaXMudCxyLnM9dGhpcy5zfSxCaWdJbnRlZ2VyLnByb3RvdHlwZS5mcm9tSW50PWZ1bmN0aW9uKHgpe3RoaXMudD0xLHRoaXMucz14PDA/LTE6MCx4PjA/dGhpc1swXT14Ong8LTE/dGhpc1swXT14K3RoaXMuRFY6dGhpcy50PTB9LEJpZ0ludGVnZXIucHJvdG90eXBlLmZyb21TdHJpbmc9ZnVuY3Rpb24ocyxiKXt2YXIgaztpZigxNj09YilrPTQ7ZWxzZSBpZig4PT1iKWs9MztlbHNlIGlmKDI1Nj09YilrPTg7ZWxzZSBpZigyPT1iKWs9MTtlbHNlIGlmKDMyPT1iKWs9NTtlbHNle2lmKDQhPWIpcmV0dXJuIHZvaWQgdGhpcy5mcm9tUmFkaXgocyxiKTtrPTJ9dGhpcy50PTAsdGhpcy5zPTA7Zm9yKHZhciBpPXMubGVuZ3RoLG1pPSExLHNoPTA7LS1pPj0wOyl7dmFyIHg9OD09az8yNTUmc1tpXTppbnRBdChzLGkpO3g8MD9cIi1cIj09cy5jaGFyQXQoaSkmJihtaT0hMCk6KG1pPSExLDA9PXNoP3RoaXNbdGhpcy50KytdPXg6c2graz50aGlzLkRCPyh0aGlzW3RoaXMudC0xXXw9KHgmKDE8PHRoaXMuREItc2gpLTEpPDxzaCx0aGlzW3RoaXMudCsrXT14Pj50aGlzLkRCLXNoKTp0aGlzW3RoaXMudC0xXXw9eDw8c2gsKHNoKz1rKT49dGhpcy5EQiYmKHNoLT10aGlzLkRCKSl9OD09ayYmMCE9KDEyOCZzWzBdKSYmKHRoaXMucz0tMSxzaD4wJiYodGhpc1t0aGlzLnQtMV18PSgxPDx0aGlzLkRCLXNoKS0xPDxzaCkpLHRoaXMuY2xhbXAoKSxtaSYmQmlnSW50ZWdlci5aRVJPLnN1YlRvKHRoaXMsdGhpcyl9LEJpZ0ludGVnZXIucHJvdG90eXBlLmNsYW1wPWZ1bmN0aW9uKCl7Zm9yKHZhciBjPXRoaXMucyZ0aGlzLkRNO3RoaXMudD4wJiZ0aGlzW3RoaXMudC0xXT09YzspLS10aGlzLnR9LEJpZ0ludGVnZXIucHJvdG90eXBlLmRsU2hpZnRUbz1mdW5jdGlvbihuLHIpe3ZhciBpO2ZvcihpPXRoaXMudC0xO2k+PTA7LS1pKXJbaStuXT10aGlzW2ldO2ZvcihpPW4tMTtpPj0wOy0taSlyW2ldPTA7ci50PXRoaXMudCtuLHIucz10aGlzLnN9LEJpZ0ludGVnZXIucHJvdG90eXBlLmRyU2hpZnRUbz1mdW5jdGlvbihuLHIpe2Zvcih2YXIgaT1uO2k8dGhpcy50OysraSlyW2ktbl09dGhpc1tpXTtyLnQ9TWF0aC5tYXgodGhpcy50LW4sMCksci5zPXRoaXMuc30sQmlnSW50ZWdlci5wcm90b3R5cGUubFNoaWZ0VG89ZnVuY3Rpb24obixyKXt2YXIgaSxicz1uJXRoaXMuREIsY2JzPXRoaXMuREItYnMsYm09KDE8PGNicyktMSxkcz1NYXRoLmZsb29yKG4vdGhpcy5EQiksYz10aGlzLnM8PGJzJnRoaXMuRE07Zm9yKGk9dGhpcy50LTE7aT49MDstLWkpcltpK2RzKzFdPXRoaXNbaV0+PmNic3xjLGM9KHRoaXNbaV0mYm0pPDxicztmb3IoaT1kcy0xO2k+PTA7LS1pKXJbaV09MDtyW2RzXT1jLHIudD10aGlzLnQrZHMrMSxyLnM9dGhpcy5zLHIuY2xhbXAoKX0sQmlnSW50ZWdlci5wcm90b3R5cGUuclNoaWZ0VG89ZnVuY3Rpb24obixyKXtyLnM9dGhpcy5zO3ZhciBkcz1NYXRoLmZsb29yKG4vdGhpcy5EQik7aWYoZHM+PXRoaXMudClyLnQ9MDtlbHNle3ZhciBicz1uJXRoaXMuREIsY2JzPXRoaXMuREItYnMsYm09KDE8PGJzKS0xO3JbMF09dGhpc1tkc10+PmJzO2Zvcih2YXIgaT1kcysxO2k8dGhpcy50OysraSlyW2ktZHMtMV18PSh0aGlzW2ldJmJtKTw8Y2JzLHJbaS1kc109dGhpc1tpXT4+YnM7YnM+MCYmKHJbdGhpcy50LWRzLTFdfD0odGhpcy5zJmJtKTw8Y2JzKSxyLnQ9dGhpcy50LWRzLHIuY2xhbXAoKX19LEJpZ0ludGVnZXIucHJvdG90eXBlLnN1YlRvPWZ1bmN0aW9uKGEscil7Zm9yKHZhciBpPTAsYz0wLG09TWF0aC5taW4oYS50LHRoaXMudCk7aTxtOyljKz10aGlzW2ldLWFbaV0scltpKytdPWMmdGhpcy5ETSxjPj49dGhpcy5EQjtpZihhLnQ8dGhpcy50KXtmb3IoYy09YS5zO2k8dGhpcy50OyljKz10aGlzW2ldLHJbaSsrXT1jJnRoaXMuRE0sYz4+PXRoaXMuREI7Yys9dGhpcy5zfWVsc2V7Zm9yKGMrPXRoaXMucztpPGEudDspYy09YVtpXSxyW2krK109YyZ0aGlzLkRNLGM+Pj10aGlzLkRCO2MtPWEuc31yLnM9YzwwPy0xOjAsYzwtMT9yW2krK109dGhpcy5EVitjOmM+MCYmKHJbaSsrXT1jKSxyLnQ9aSxyLmNsYW1wKCl9LEJpZ0ludGVnZXIucHJvdG90eXBlLm11bHRpcGx5VG89ZnVuY3Rpb24oYSxyKXt2YXIgeD10aGlzLmFicygpLHk9YS5hYnMoKSxpPXgudDtmb3Ioci50PWkreS50Oy0taT49MDspcltpXT0wO2ZvcihpPTA7aTx5LnQ7KytpKXJbaSt4LnRdPXguYW0oMCx5W2ldLHIsaSwwLHgudCk7ci5zPTAsci5jbGFtcCgpLHRoaXMucyE9YS5zJiZCaWdJbnRlZ2VyLlpFUk8uc3ViVG8ocixyKX0sQmlnSW50ZWdlci5wcm90b3R5cGUuc3F1YXJlVG89ZnVuY3Rpb24ocil7Zm9yKHZhciB4PXRoaXMuYWJzKCksaT1yLnQ9Mip4LnQ7LS1pPj0wOylyW2ldPTA7Zm9yKGk9MDtpPHgudC0xOysraSl7dmFyIGM9eC5hbShpLHhbaV0sciwyKmksMCwxKTsocltpK3gudF0rPXguYW0oaSsxLDIqeFtpXSxyLDIqaSsxLGMseC50LWktMSkpPj14LkRWJiYocltpK3gudF0tPXguRFYscltpK3gudCsxXT0xKX1yLnQ+MCYmKHJbci50LTFdKz14LmFtKGkseFtpXSxyLDIqaSwwLDEpKSxyLnM9MCxyLmNsYW1wKCl9LEJpZ0ludGVnZXIucHJvdG90eXBlLmRpdlJlbVRvPWZ1bmN0aW9uKG0scSxyKXt2YXIgcG09bS5hYnMoKTtpZighKHBtLnQ8PTApKXt2YXIgcHQ9dGhpcy5hYnMoKTtpZihwdC50PHBtLnQpcmV0dXJuIG51bGwhPXEmJnEuZnJvbUludCgwKSx2b2lkKG51bGwhPXImJnRoaXMuY29weVRvKHIpKTtudWxsPT1yJiYocj1uYmkoKSk7dmFyIHk9bmJpKCksdHM9dGhpcy5zLG1zPW0ucyxuc2g9dGhpcy5EQi1uYml0cyhwbVtwbS50LTFdKTtuc2g+MD8ocG0ubFNoaWZ0VG8obnNoLHkpLHB0LmxTaGlmdFRvKG5zaCxyKSk6KHBtLmNvcHlUbyh5KSxwdC5jb3B5VG8ocikpO3ZhciB5cz15LnQseTA9eVt5cy0xXTtpZigwIT15MCl7dmFyIHl0PXkwKigxPDx0aGlzLkYxKSsoeXM+MT95W3lzLTJdPj50aGlzLkYyOjApLGQxPXRoaXMuRlYveXQsZDI9KDE8PHRoaXMuRjEpL3l0LGU9MTw8dGhpcy5GMixpPXIudCxqPWkteXMsdD1udWxsPT1xP25iaSgpOnE7Zm9yKHkuZGxTaGlmdFRvKGosdCksci5jb21wYXJlVG8odCk+PTAmJihyW3IudCsrXT0xLHIuc3ViVG8odCxyKSksQmlnSW50ZWdlci5PTkUuZGxTaGlmdFRvKHlzLHQpLHQuc3ViVG8oeSx5KTt5LnQ8eXM7KXlbeS50KytdPTA7Zm9yKDstLWo+PTA7KXt2YXIgcWQ9clstLWldPT15MD90aGlzLkRNOk1hdGguZmxvb3IocltpXSpkMSsocltpLTFdK2UpKmQyKTtpZigocltpXSs9eS5hbSgwLHFkLHIsaiwwLHlzKSk8cWQpZm9yKHkuZGxTaGlmdFRvKGosdCksci5zdWJUbyh0LHIpO3JbaV08LS1xZDspci5zdWJUbyh0LHIpfW51bGwhPXEmJihyLmRyU2hpZnRUbyh5cyxxKSx0cyE9bXMmJkJpZ0ludGVnZXIuWkVSTy5zdWJUbyhxLHEpKSxyLnQ9eXMsci5jbGFtcCgpLG5zaD4wJiZyLnJTaGlmdFRvKG5zaCxyKSx0czwwJiZCaWdJbnRlZ2VyLlpFUk8uc3ViVG8ocixyKX19fSxCaWdJbnRlZ2VyLnByb3RvdHlwZS5pbnZEaWdpdD1mdW5jdGlvbigpe2lmKHRoaXMudDwxKXJldHVybiAwO3ZhciB4PXRoaXNbMF07aWYoMD09KDEmeCkpcmV0dXJuIDA7dmFyIHk9MyZ4O3JldHVybih5PSh5PSh5PSh5PXkqKDItKDE1JngpKnkpJjE1KSooMi0oMjU1JngpKnkpJjI1NSkqKDItKCg2NTUzNSZ4KSp5JjY1NTM1KSkmNjU1MzUpKigyLXgqeSV0aGlzLkRWKSV0aGlzLkRWKT4wP3RoaXMuRFYteToteX0sQmlnSW50ZWdlci5wcm90b3R5cGUuaXNFdmVuPWZ1bmN0aW9uKCl7cmV0dXJuIDA9PSh0aGlzLnQ+MD8xJnRoaXNbMF06dGhpcy5zKX0sQmlnSW50ZWdlci5wcm90b3R5cGUuZXhwPWZ1bmN0aW9uKGUseil7aWYoZT40Mjk0OTY3Mjk1fHxlPDEpcmV0dXJuIEJpZ0ludGVnZXIuT05FO3ZhciByPW5iaSgpLHIyPW5iaSgpLGc9ei5jb252ZXJ0KHRoaXMpLGk9bmJpdHMoZSktMTtmb3IoZy5jb3B5VG8ocik7LS1pPj0wOylpZih6LnNxclRvKHIscjIpLChlJjE8PGkpPjApei5tdWxUbyhyMixnLHIpO2Vsc2V7dmFyIHQ9cjtyPXIyLHIyPXR9cmV0dXJuIHoucmV2ZXJ0KHIpfSxCaWdJbnRlZ2VyLnByb3RvdHlwZS50b1N0cmluZz1mdW5jdGlvbihiKXtpZih0aGlzLnM8MClyZXR1cm5cIi1cIit0aGlzLm5lZ2F0ZSgpLnRvU3RyaW5nKGIpO3ZhciBrO2lmKDE2PT1iKWs9NDtlbHNlIGlmKDg9PWIpaz0zO2Vsc2UgaWYoMj09YilrPTE7ZWxzZSBpZigzMj09YilrPTU7ZWxzZXtpZig0IT1iKXJldHVybiB0aGlzLnRvUmFkaXgoYik7az0yfXZhciBkLGttPSgxPDxrKS0xLG09ITEscj1cIlwiLGk9dGhpcy50LHA9dGhpcy5EQi1pKnRoaXMuREIlaztpZihpLS0gPjApZm9yKHA8dGhpcy5EQiYmKGQ9dGhpc1tpXT4+cCk+MCYmKG09ITAscj1pbnQyY2hhcihkKSk7aT49MDspcDxrPyhkPSh0aGlzW2ldJigxPDxwKS0xKTw8ay1wLGR8PXRoaXNbLS1pXT4+KHArPXRoaXMuREItaykpOihkPXRoaXNbaV0+PihwLT1rKSZrbSxwPD0wJiYocCs9dGhpcy5EQiwtLWkpKSxkPjAmJihtPSEwKSxtJiYocis9aW50MmNoYXIoZCkpO3JldHVybiBtP3I6XCIwXCJ9LEJpZ0ludGVnZXIucHJvdG90eXBlLm5lZ2F0ZT1mdW5jdGlvbigpe3ZhciByPW5iaSgpO3JldHVybiBCaWdJbnRlZ2VyLlpFUk8uc3ViVG8odGhpcyxyKSxyfSxCaWdJbnRlZ2VyLnByb3RvdHlwZS5hYnM9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5zPDA/dGhpcy5uZWdhdGUoKTp0aGlzfSxCaWdJbnRlZ2VyLnByb3RvdHlwZS5jb21wYXJlVG89ZnVuY3Rpb24oYSl7dmFyIHI9dGhpcy5zLWEucztpZigwIT1yKXJldHVybiByO3ZhciBpPXRoaXMudDtpZigwIT0ocj1pLWEudCkpcmV0dXJuIHRoaXMuczwwPy1yOnI7Zm9yKDstLWk+PTA7KWlmKDAhPShyPXRoaXNbaV0tYVtpXSkpcmV0dXJuIHI7cmV0dXJuIDB9LEJpZ0ludGVnZXIucHJvdG90eXBlLmJpdExlbmd0aD1mdW5jdGlvbigpe3JldHVybiB0aGlzLnQ8PTA/MDp0aGlzLkRCKih0aGlzLnQtMSkrbmJpdHModGhpc1t0aGlzLnQtMV1edGhpcy5zJnRoaXMuRE0pfSxCaWdJbnRlZ2VyLnByb3RvdHlwZS5tb2Q9ZnVuY3Rpb24oYSl7dmFyIHI9bmJpKCk7cmV0dXJuIHRoaXMuYWJzKCkuZGl2UmVtVG8oYSxudWxsLHIpLHRoaXMuczwwJiZyLmNvbXBhcmVUbyhCaWdJbnRlZ2VyLlpFUk8pPjAmJmEuc3ViVG8ocixyKSxyfSxCaWdJbnRlZ2VyLnByb3RvdHlwZS5tb2RQb3dJbnQ9ZnVuY3Rpb24oZSxtKXt2YXIgejtyZXR1cm4gej1lPDI1Nnx8bS5pc0V2ZW4oKT9uZXcgQ2xhc3NpYyhtKTpuZXcgTW9udGdvbWVyeShtKSx0aGlzLmV4cChlLHopfSxCaWdJbnRlZ2VyLlpFUk89bmJ2KDApLEJpZ0ludGVnZXIuT05FPW5idigxKSxOdWxsRXhwLnByb3RvdHlwZS5jb252ZXJ0PW5Ob3AsTnVsbEV4cC5wcm90b3R5cGUucmV2ZXJ0PW5Ob3AsTnVsbEV4cC5wcm90b3R5cGUubXVsVG89ZnVuY3Rpb24oeCx5LHIpe3gubXVsdGlwbHlUbyh5LHIpfSxOdWxsRXhwLnByb3RvdHlwZS5zcXJUbz1mdW5jdGlvbih4LHIpe3guc3F1YXJlVG8ocil9LEJhcnJldHQucHJvdG90eXBlLmNvbnZlcnQ9ZnVuY3Rpb24oeCl7aWYoeC5zPDB8fHgudD4yKnRoaXMubS50KXJldHVybiB4Lm1vZCh0aGlzLm0pO2lmKHguY29tcGFyZVRvKHRoaXMubSk8MClyZXR1cm4geDt2YXIgcj1uYmkoKTtyZXR1cm4geC5jb3B5VG8ociksdGhpcy5yZWR1Y2Uocikscn0sQmFycmV0dC5wcm90b3R5cGUucmV2ZXJ0PWZ1bmN0aW9uKHgpe3JldHVybiB4fSxCYXJyZXR0LnByb3RvdHlwZS5yZWR1Y2U9ZnVuY3Rpb24oeCl7Zm9yKHguZHJTaGlmdFRvKHRoaXMubS50LTEsdGhpcy5yMikseC50PnRoaXMubS50KzEmJih4LnQ9dGhpcy5tLnQrMSx4LmNsYW1wKCkpLHRoaXMubXUubXVsdGlwbHlVcHBlclRvKHRoaXMucjIsdGhpcy5tLnQrMSx0aGlzLnEzKSx0aGlzLm0ubXVsdGlwbHlMb3dlclRvKHRoaXMucTMsdGhpcy5tLnQrMSx0aGlzLnIyKTt4LmNvbXBhcmVUbyh0aGlzLnIyKTwwOyl4LmRBZGRPZmZzZXQoMSx0aGlzLm0udCsxKTtmb3IoeC5zdWJUbyh0aGlzLnIyLHgpO3guY29tcGFyZVRvKHRoaXMubSk+PTA7KXguc3ViVG8odGhpcy5tLHgpfSxCYXJyZXR0LnByb3RvdHlwZS5tdWxUbz1mdW5jdGlvbih4LHkscil7eC5tdWx0aXBseVRvKHksciksdGhpcy5yZWR1Y2Uocil9LEJhcnJldHQucHJvdG90eXBlLnNxclRvPWZ1bmN0aW9uKHgscil7eC5zcXVhcmVUbyhyKSx0aGlzLnJlZHVjZShyKX07dmFyIHJuZ19zdGF0ZSxybmdfcG9vbCxybmdfcHB0cixsb3dwcmltZXM9WzIsMyw1LDcsMTEsMTMsMTcsMTksMjMsMjksMzEsMzcsNDEsNDMsNDcsNTMsNTksNjEsNjcsNzEsNzMsNzksODMsODksOTcsMTAxLDEwMywxMDcsMTA5LDExMywxMjcsMTMxLDEzNywxMzksMTQ5LDE1MSwxNTcsMTYzLDE2NywxNzMsMTc5LDE4MSwxOTEsMTkzLDE5NywxOTksMjExLDIyMywyMjcsMjI5LDIzMywyMzksMjQxLDI1MSwyNTcsMjYzLDI2OSwyNzEsMjc3LDI4MSwyODMsMjkzLDMwNywzMTEsMzEzLDMxNywzMzEsMzM3LDM0NywzNDksMzUzLDM1OSwzNjcsMzczLDM3OSwzODMsMzg5LDM5Nyw0MDEsNDA5LDQxOSw0MjEsNDMxLDQzMyw0MzksNDQzLDQ0OSw0NTcsNDYxLDQ2Myw0NjcsNDc5LDQ4Nyw0OTEsNDk5LDUwMyw1MDksNTIxLDUyMyw1NDEsNTQ3LDU1Nyw1NjMsNTY5LDU3MSw1NzcsNTg3LDU5Myw1OTksNjAxLDYwNyw2MTMsNjE3LDYxOSw2MzEsNjQxLDY0Myw2NDcsNjUzLDY1OSw2NjEsNjczLDY3Nyw2ODMsNjkxLDcwMSw3MDksNzE5LDcyNyw3MzMsNzM5LDc0Myw3NTEsNzU3LDc2MSw3NjksNzczLDc4Nyw3OTcsODA5LDgxMSw4MjEsODIzLDgyNyw4MjksODM5LDg1Myw4NTcsODU5LDg2Myw4NzcsODgxLDg4Myw4ODcsOTA3LDkxMSw5MTksOTI5LDkzNyw5NDEsOTQ3LDk1Myw5NjcsOTcxLDk3Nyw5ODMsOTkxLDk5N10sbHBsaW09KDE8PDI2KS9sb3dwcmltZXNbbG93cHJpbWVzLmxlbmd0aC0xXTtmdW5jdGlvbiBybmdfc2VlZF90aW1lKCl7dmFyIHg7eD0obmV3IERhdGUpLmdldFRpbWUoKSxybmdfcG9vbFtybmdfcHB0cisrXV49MjU1Jngscm5nX3Bvb2xbcm5nX3BwdHIrK11ePXg+PjgmMjU1LHJuZ19wb29sW3JuZ19wcHRyKytdXj14Pj4xNiYyNTUscm5nX3Bvb2xbcm5nX3BwdHIrK11ePXg+PjI0JjI1NSxybmdfcHB0cj49cm5nX3BzaXplJiYocm5nX3BwdHItPXJuZ19wc2l6ZSl9aWYoQmlnSW50ZWdlci5wcm90b3R5cGUuY2h1bmtTaXplPWZ1bmN0aW9uKHIpe3JldHVybiBNYXRoLmZsb29yKE1hdGguTE4yKnRoaXMuREIvTWF0aC5sb2cocikpfSxCaWdJbnRlZ2VyLnByb3RvdHlwZS50b1JhZGl4PWZ1bmN0aW9uKGIpe2lmKG51bGw9PWImJihiPTEwKSwwPT10aGlzLnNpZ251bSgpfHxiPDJ8fGI+MzYpcmV0dXJuXCIwXCI7dmFyIGNzPXRoaXMuY2h1bmtTaXplKGIpLGE9TWF0aC5wb3coYixjcyksZD1uYnYoYSkseT1uYmkoKSx6PW5iaSgpLHI9XCJcIjtmb3IodGhpcy5kaXZSZW1UbyhkLHkseik7eS5zaWdudW0oKT4wOylyPShhK3ouaW50VmFsdWUoKSkudG9TdHJpbmcoYikuc3Vic3RyKDEpK3IseS5kaXZSZW1UbyhkLHkseik7cmV0dXJuIHouaW50VmFsdWUoKS50b1N0cmluZyhiKStyfSxCaWdJbnRlZ2VyLnByb3RvdHlwZS5mcm9tUmFkaXg9ZnVuY3Rpb24ocyxiKXt0aGlzLmZyb21JbnQoMCksbnVsbD09YiYmKGI9MTApO2Zvcih2YXIgY3M9dGhpcy5jaHVua1NpemUoYiksZD1NYXRoLnBvdyhiLGNzKSxtaT0hMSxqPTAsdz0wLGk9MDtpPHMubGVuZ3RoOysraSl7dmFyIHg9aW50QXQocyxpKTt4PDA/XCItXCI9PXMuY2hhckF0KGkpJiYwPT10aGlzLnNpZ251bSgpJiYobWk9ITApOih3PWIqdyt4LCsraj49Y3MmJih0aGlzLmRNdWx0aXBseShkKSx0aGlzLmRBZGRPZmZzZXQodywwKSxqPTAsdz0wKSl9aj4wJiYodGhpcy5kTXVsdGlwbHkoTWF0aC5wb3coYixqKSksdGhpcy5kQWRkT2Zmc2V0KHcsMCkpLG1pJiZCaWdJbnRlZ2VyLlpFUk8uc3ViVG8odGhpcyx0aGlzKX0sQmlnSW50ZWdlci5wcm90b3R5cGUuZnJvbU51bWJlcj1mdW5jdGlvbihhLGIsYyl7aWYoXCJudW1iZXJcIj09dHlwZW9mIGIpaWYoYTwyKXRoaXMuZnJvbUludCgxKTtlbHNlIGZvcih0aGlzLmZyb21OdW1iZXIoYSxjKSx0aGlzLnRlc3RCaXQoYS0xKXx8dGhpcy5iaXR3aXNlVG8oQmlnSW50ZWdlci5PTkUuc2hpZnRMZWZ0KGEtMSksb3Bfb3IsdGhpcyksdGhpcy5pc0V2ZW4oKSYmdGhpcy5kQWRkT2Zmc2V0KDEsMCk7IXRoaXMuaXNQcm9iYWJsZVByaW1lKGIpOyl0aGlzLmRBZGRPZmZzZXQoMiwwKSx0aGlzLmJpdExlbmd0aCgpPmEmJnRoaXMuc3ViVG8oQmlnSW50ZWdlci5PTkUuc2hpZnRMZWZ0KGEtMSksdGhpcyk7ZWxzZXt2YXIgeD1uZXcgQXJyYXksdD03JmE7eC5sZW5ndGg9MSsoYT4+MyksYi5uZXh0Qnl0ZXMoeCksdD4wP3hbMF0mPSgxPDx0KS0xOnhbMF09MCx0aGlzLmZyb21TdHJpbmcoeCwyNTYpfX0sQmlnSW50ZWdlci5wcm90b3R5cGUuYml0d2lzZVRvPWZ1bmN0aW9uKGEsb3Ascil7dmFyIGksZixtPU1hdGgubWluKGEudCx0aGlzLnQpO2ZvcihpPTA7aTxtOysraSlyW2ldPW9wKHRoaXNbaV0sYVtpXSk7aWYoYS50PHRoaXMudCl7Zm9yKGY9YS5zJnRoaXMuRE0saT1tO2k8dGhpcy50OysraSlyW2ldPW9wKHRoaXNbaV0sZik7ci50PXRoaXMudH1lbHNle2ZvcihmPXRoaXMucyZ0aGlzLkRNLGk9bTtpPGEudDsrK2kpcltpXT1vcChmLGFbaV0pO3IudD1hLnR9ci5zPW9wKHRoaXMucyxhLnMpLHIuY2xhbXAoKX0sQmlnSW50ZWdlci5wcm90b3R5cGUuY2hhbmdlQml0PWZ1bmN0aW9uKG4sb3Ape3ZhciByPUJpZ0ludGVnZXIuT05FLnNoaWZ0TGVmdChuKTtyZXR1cm4gdGhpcy5iaXR3aXNlVG8ocixvcCxyKSxyfSxCaWdJbnRlZ2VyLnByb3RvdHlwZS5hZGRUbz1mdW5jdGlvbihhLHIpe2Zvcih2YXIgaT0wLGM9MCxtPU1hdGgubWluKGEudCx0aGlzLnQpO2k8bTspYys9dGhpc1tpXSthW2ldLHJbaSsrXT1jJnRoaXMuRE0sYz4+PXRoaXMuREI7aWYoYS50PHRoaXMudCl7Zm9yKGMrPWEucztpPHRoaXMudDspYys9dGhpc1tpXSxyW2krK109YyZ0aGlzLkRNLGM+Pj10aGlzLkRCO2MrPXRoaXMuc31lbHNle2ZvcihjKz10aGlzLnM7aTxhLnQ7KWMrPWFbaV0scltpKytdPWMmdGhpcy5ETSxjPj49dGhpcy5EQjtjKz1hLnN9ci5zPWM8MD8tMTowLGM+MD9yW2krK109YzpjPC0xJiYocltpKytdPXRoaXMuRFYrYyksci50PWksci5jbGFtcCgpfSxCaWdJbnRlZ2VyLnByb3RvdHlwZS5kTXVsdGlwbHk9ZnVuY3Rpb24obil7dGhpc1t0aGlzLnRdPXRoaXMuYW0oMCxuLTEsdGhpcywwLDAsdGhpcy50KSwrK3RoaXMudCx0aGlzLmNsYW1wKCl9LEJpZ0ludGVnZXIucHJvdG90eXBlLmRBZGRPZmZzZXQ9ZnVuY3Rpb24obix3KXtpZigwIT1uKXtmb3IoO3RoaXMudDw9dzspdGhpc1t0aGlzLnQrK109MDtmb3IodGhpc1t3XSs9bjt0aGlzW3ddPj10aGlzLkRWOyl0aGlzW3ddLT10aGlzLkRWLCsrdz49dGhpcy50JiYodGhpc1t0aGlzLnQrK109MCksKyt0aGlzW3ddfX0sQmlnSW50ZWdlci5wcm90b3R5cGUubXVsdGlwbHlMb3dlclRvPWZ1bmN0aW9uKGEsbixyKXt2YXIgaixpPU1hdGgubWluKHRoaXMudCthLnQsbik7Zm9yKHIucz0wLHIudD1pO2k+MDspclstLWldPTA7Zm9yKGo9ci50LXRoaXMudDtpPGo7KytpKXJbaSt0aGlzLnRdPXRoaXMuYW0oMCxhW2ldLHIsaSwwLHRoaXMudCk7Zm9yKGo9TWF0aC5taW4oYS50LG4pO2k8ajsrK2kpdGhpcy5hbSgwLGFbaV0scixpLDAsbi1pKTtyLmNsYW1wKCl9LEJpZ0ludGVnZXIucHJvdG90eXBlLm11bHRpcGx5VXBwZXJUbz1mdW5jdGlvbihhLG4scil7LS1uO3ZhciBpPXIudD10aGlzLnQrYS50LW47Zm9yKHIucz0wOy0taT49MDspcltpXT0wO2ZvcihpPU1hdGgubWF4KG4tdGhpcy50LDApO2k8YS50OysraSlyW3RoaXMudCtpLW5dPXRoaXMuYW0obi1pLGFbaV0sciwwLDAsdGhpcy50K2ktbik7ci5jbGFtcCgpLHIuZHJTaGlmdFRvKDEscil9LEJpZ0ludGVnZXIucHJvdG90eXBlLm1vZEludD1mdW5jdGlvbihuKXtpZihuPD0wKXJldHVybiAwO3ZhciBkPXRoaXMuRFYlbixyPXRoaXMuczwwP24tMTowO2lmKHRoaXMudD4wKWlmKDA9PWQpcj10aGlzWzBdJW47ZWxzZSBmb3IodmFyIGk9dGhpcy50LTE7aT49MDstLWkpcj0oZCpyK3RoaXNbaV0pJW47cmV0dXJuIHJ9LEJpZ0ludGVnZXIucHJvdG90eXBlLm1pbGxlclJhYmluPWZ1bmN0aW9uKHQpe3ZhciBuMT10aGlzLnN1YnRyYWN0KEJpZ0ludGVnZXIuT05FKSxrPW4xLmdldExvd2VzdFNldEJpdCgpO2lmKGs8PTApcmV0dXJuITE7dmFyIHI9bjEuc2hpZnRSaWdodChrKTsodD10KzE+PjEpPmxvd3ByaW1lcy5sZW5ndGgmJih0PWxvd3ByaW1lcy5sZW5ndGgpO2Zvcih2YXIgYT1uYmkoKSxpPTA7aTx0OysraSl7YS5mcm9tSW50KGxvd3ByaW1lc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqbG93cHJpbWVzLmxlbmd0aCldKTt2YXIgeT1hLm1vZFBvdyhyLHRoaXMpO2lmKDAhPXkuY29tcGFyZVRvKEJpZ0ludGVnZXIuT05FKSYmMCE9eS5jb21wYXJlVG8objEpKXtmb3IodmFyIGo9MTtqKys8ayYmMCE9eS5jb21wYXJlVG8objEpOylpZigwPT0oeT15Lm1vZFBvd0ludCgyLHRoaXMpKS5jb21wYXJlVG8oQmlnSW50ZWdlci5PTkUpKXJldHVybiExO2lmKDAhPXkuY29tcGFyZVRvKG4xKSlyZXR1cm4hMX19cmV0dXJuITB9LEJpZ0ludGVnZXIucHJvdG90eXBlLmNsb25lPWZ1bmN0aW9uKCl7dmFyIHI9bmJpKCk7cmV0dXJuIHRoaXMuY29weVRvKHIpLHJ9LEJpZ0ludGVnZXIucHJvdG90eXBlLmludFZhbHVlPWZ1bmN0aW9uKCl7aWYodGhpcy5zPDApe2lmKDE9PXRoaXMudClyZXR1cm4gdGhpc1swXS10aGlzLkRWO2lmKDA9PXRoaXMudClyZXR1cm4tMX1lbHNle2lmKDE9PXRoaXMudClyZXR1cm4gdGhpc1swXTtpZigwPT10aGlzLnQpcmV0dXJuIDB9cmV0dXJuKHRoaXNbMV0mKDE8PDMyLXRoaXMuREIpLTEpPDx0aGlzLkRCfHRoaXNbMF19LEJpZ0ludGVnZXIucHJvdG90eXBlLmJ5dGVWYWx1ZT1mdW5jdGlvbigpe3JldHVybiAwPT10aGlzLnQ/dGhpcy5zOnRoaXNbMF08PDI0Pj4yNH0sQmlnSW50ZWdlci5wcm90b3R5cGUuc2hvcnRWYWx1ZT1mdW5jdGlvbigpe3JldHVybiAwPT10aGlzLnQ/dGhpcy5zOnRoaXNbMF08PDE2Pj4xNn0sQmlnSW50ZWdlci5wcm90b3R5cGUuc2lnbnVtPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuczwwPy0xOnRoaXMudDw9MHx8MT09dGhpcy50JiZ0aGlzWzBdPD0wPzA6MX0sQmlnSW50ZWdlci5wcm90b3R5cGUudG9CeXRlQXJyYXk9ZnVuY3Rpb24oKXt2YXIgaT10aGlzLnQscj1uZXcgQXJyYXk7clswXT10aGlzLnM7dmFyIGQscD10aGlzLkRCLWkqdGhpcy5EQiU4LGs9MDtpZihpLS0gPjApZm9yKHA8dGhpcy5EQiYmKGQ9dGhpc1tpXT4+cCkhPSh0aGlzLnMmdGhpcy5ETSk+PnAmJihyW2srK109ZHx0aGlzLnM8PHRoaXMuREItcCk7aT49MDspcDw4PyhkPSh0aGlzW2ldJigxPDxwKS0xKTw8OC1wLGR8PXRoaXNbLS1pXT4+KHArPXRoaXMuREItOCkpOihkPXRoaXNbaV0+PihwLT04KSYyNTUscDw9MCYmKHArPXRoaXMuREIsLS1pKSksMCE9KDEyOCZkKSYmKGR8PS0yNTYpLDA9PWsmJigxMjgmdGhpcy5zKSE9KDEyOCZkKSYmKytrLChrPjB8fGQhPXRoaXMucykmJihyW2srK109ZCk7cmV0dXJuIHJ9LEJpZ0ludGVnZXIucHJvdG90eXBlLmVxdWFscz1mdW5jdGlvbihhKXtyZXR1cm4gMD09dGhpcy5jb21wYXJlVG8oYSl9LEJpZ0ludGVnZXIucHJvdG90eXBlLm1pbj1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5jb21wYXJlVG8oYSk8MD90aGlzOmF9LEJpZ0ludGVnZXIucHJvdG90eXBlLm1heD1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5jb21wYXJlVG8oYSk+MD90aGlzOmF9LEJpZ0ludGVnZXIucHJvdG90eXBlLmFuZD1mdW5jdGlvbihhKXt2YXIgcj1uYmkoKTtyZXR1cm4gdGhpcy5iaXR3aXNlVG8oYSxvcF9hbmQscikscn0sQmlnSW50ZWdlci5wcm90b3R5cGUub3I9ZnVuY3Rpb24oYSl7dmFyIHI9bmJpKCk7cmV0dXJuIHRoaXMuYml0d2lzZVRvKGEsb3Bfb3Iscikscn0sQmlnSW50ZWdlci5wcm90b3R5cGUueG9yPWZ1bmN0aW9uKGEpe3ZhciByPW5iaSgpO3JldHVybiB0aGlzLmJpdHdpc2VUbyhhLG9wX3hvcixyKSxyfSxCaWdJbnRlZ2VyLnByb3RvdHlwZS5hbmROb3Q9ZnVuY3Rpb24oYSl7dmFyIHI9bmJpKCk7cmV0dXJuIHRoaXMuYml0d2lzZVRvKGEsb3BfYW5kbm90LHIpLHJ9LEJpZ0ludGVnZXIucHJvdG90eXBlLm5vdD1mdW5jdGlvbigpe2Zvcih2YXIgcj1uYmkoKSxpPTA7aTx0aGlzLnQ7KytpKXJbaV09dGhpcy5ETSZ+dGhpc1tpXTtyZXR1cm4gci50PXRoaXMudCxyLnM9fnRoaXMucyxyfSxCaWdJbnRlZ2VyLnByb3RvdHlwZS5zaGlmdExlZnQ9ZnVuY3Rpb24obil7dmFyIHI9bmJpKCk7cmV0dXJuIG48MD90aGlzLnJTaGlmdFRvKC1uLHIpOnRoaXMubFNoaWZ0VG8obixyKSxyfSxCaWdJbnRlZ2VyLnByb3RvdHlwZS5zaGlmdFJpZ2h0PWZ1bmN0aW9uKG4pe3ZhciByPW5iaSgpO3JldHVybiBuPDA/dGhpcy5sU2hpZnRUbygtbixyKTp0aGlzLnJTaGlmdFRvKG4scikscn0sQmlnSW50ZWdlci5wcm90b3R5cGUuZ2V0TG93ZXN0U2V0Qml0PWZ1bmN0aW9uKCl7Zm9yKHZhciBpPTA7aTx0aGlzLnQ7KytpKWlmKDAhPXRoaXNbaV0pcmV0dXJuIGkqdGhpcy5EQitsYml0KHRoaXNbaV0pO3JldHVybiB0aGlzLnM8MD90aGlzLnQqdGhpcy5EQjotMX0sQmlnSW50ZWdlci5wcm90b3R5cGUuYml0Q291bnQ9ZnVuY3Rpb24oKXtmb3IodmFyIHI9MCx4PXRoaXMucyZ0aGlzLkRNLGk9MDtpPHRoaXMudDsrK2kpcis9Y2JpdCh0aGlzW2ldXngpO3JldHVybiByfSxCaWdJbnRlZ2VyLnByb3RvdHlwZS50ZXN0Qml0PWZ1bmN0aW9uKG4pe3ZhciBqPU1hdGguZmxvb3Iobi90aGlzLkRCKTtyZXR1cm4gaj49dGhpcy50PzAhPXRoaXMuczowIT0odGhpc1tqXSYxPDxuJXRoaXMuREIpfSxCaWdJbnRlZ2VyLnByb3RvdHlwZS5zZXRCaXQ9ZnVuY3Rpb24obil7cmV0dXJuIHRoaXMuY2hhbmdlQml0KG4sb3Bfb3IpfSxCaWdJbnRlZ2VyLnByb3RvdHlwZS5jbGVhckJpdD1mdW5jdGlvbihuKXtyZXR1cm4gdGhpcy5jaGFuZ2VCaXQobixvcF9hbmRub3QpfSxCaWdJbnRlZ2VyLnByb3RvdHlwZS5mbGlwQml0PWZ1bmN0aW9uKG4pe3JldHVybiB0aGlzLmNoYW5nZUJpdChuLG9wX3hvcil9LEJpZ0ludGVnZXIucHJvdG90eXBlLmFkZD1mdW5jdGlvbihhKXt2YXIgcj1uYmkoKTtyZXR1cm4gdGhpcy5hZGRUbyhhLHIpLHJ9LEJpZ0ludGVnZXIucHJvdG90eXBlLnN1YnRyYWN0PWZ1bmN0aW9uKGEpe3ZhciByPW5iaSgpO3JldHVybiB0aGlzLnN1YlRvKGEscikscn0sQmlnSW50ZWdlci5wcm90b3R5cGUubXVsdGlwbHk9ZnVuY3Rpb24oYSl7dmFyIHI9bmJpKCk7cmV0dXJuIHRoaXMubXVsdGlwbHlUbyhhLHIpLHJ9LEJpZ0ludGVnZXIucHJvdG90eXBlLmRpdmlkZT1mdW5jdGlvbihhKXt2YXIgcj1uYmkoKTtyZXR1cm4gdGhpcy5kaXZSZW1UbyhhLHIsbnVsbCkscn0sQmlnSW50ZWdlci5wcm90b3R5cGUucmVtYWluZGVyPWZ1bmN0aW9uKGEpe3ZhciByPW5iaSgpO3JldHVybiB0aGlzLmRpdlJlbVRvKGEsbnVsbCxyKSxyfSxCaWdJbnRlZ2VyLnByb3RvdHlwZS5kaXZpZGVBbmRSZW1haW5kZXI9ZnVuY3Rpb24oYSl7dmFyIHE9bmJpKCkscj1uYmkoKTtyZXR1cm4gdGhpcy5kaXZSZW1UbyhhLHEsciksbmV3IEFycmF5KHEscil9LEJpZ0ludGVnZXIucHJvdG90eXBlLm1vZFBvdz1mdW5jdGlvbihlLG0pe3ZhciBrLHosaT1lLmJpdExlbmd0aCgpLHI9bmJ2KDEpO2lmKGk8PTApcmV0dXJuIHI7az1pPDE4PzE6aTw0OD8zOmk8MTQ0PzQ6aTw3Njg/NTo2LHo9aTw4P25ldyBDbGFzc2ljKG0pOm0uaXNFdmVuKCk/bmV3IEJhcnJldHQobSk6bmV3IE1vbnRnb21lcnkobSk7dmFyIGc9bmV3IEFycmF5LG49MyxrMT1rLTEsa209KDE8PGspLTE7aWYoZ1sxXT16LmNvbnZlcnQodGhpcyksaz4xKXt2YXIgZzI9bmJpKCk7Zm9yKHouc3FyVG8oZ1sxXSxnMik7bjw9a207KWdbbl09bmJpKCksei5tdWxUbyhnMixnW24tMl0sZ1tuXSksbis9Mn12YXIgdyx0LGo9ZS50LTEsaXMxPSEwLHIyPW5iaSgpO2ZvcihpPW5iaXRzKGVbal0pLTE7aj49MDspe2ZvcihpPj1rMT93PWVbal0+PmktazEma206KHc9KGVbal0mKDE8PGkrMSktMSk8PGsxLWksaj4wJiYod3w9ZVtqLTFdPj50aGlzLkRCK2ktazEpKSxuPWs7MD09KDEmdyk7KXc+Pj0xLC0tbjtpZigoaS09bik8MCYmKGkrPXRoaXMuREIsLS1qKSxpczEpZ1t3XS5jb3B5VG8ociksaXMxPSExO2Vsc2V7Zm9yKDtuPjE7KXouc3FyVG8ocixyMiksei5zcXJUbyhyMixyKSxuLT0yO24+MD96LnNxclRvKHIscjIpOih0PXIscj1yMixyMj10KSx6Lm11bFRvKHIyLGdbd10scil9Zm9yKDtqPj0wJiYwPT0oZVtqXSYxPDxpKTspei5zcXJUbyhyLHIyKSx0PXIscj1yMixyMj10LC0taTwwJiYoaT10aGlzLkRCLTEsLS1qKX1yZXR1cm4gei5yZXZlcnQocil9LEJpZ0ludGVnZXIucHJvdG90eXBlLm1vZEludmVyc2U9ZnVuY3Rpb24obSl7dmFyIGFjPW0uaXNFdmVuKCk7aWYodGhpcy5pc0V2ZW4oKSYmYWN8fDA9PW0uc2lnbnVtKCkpcmV0dXJuIEJpZ0ludGVnZXIuWkVSTztmb3IodmFyIHU9bS5jbG9uZSgpLHY9dGhpcy5jbG9uZSgpLGE9bmJ2KDEpLGI9bmJ2KDApLGM9bmJ2KDApLGQ9bmJ2KDEpOzAhPXUuc2lnbnVtKCk7KXtmb3IoO3UuaXNFdmVuKCk7KXUuclNoaWZ0VG8oMSx1KSxhYz8oYS5pc0V2ZW4oKSYmYi5pc0V2ZW4oKXx8KGEuYWRkVG8odGhpcyxhKSxiLnN1YlRvKG0sYikpLGEuclNoaWZ0VG8oMSxhKSk6Yi5pc0V2ZW4oKXx8Yi5zdWJUbyhtLGIpLGIuclNoaWZ0VG8oMSxiKTtmb3IoO3YuaXNFdmVuKCk7KXYuclNoaWZ0VG8oMSx2KSxhYz8oYy5pc0V2ZW4oKSYmZC5pc0V2ZW4oKXx8KGMuYWRkVG8odGhpcyxjKSxkLnN1YlRvKG0sZCkpLGMuclNoaWZ0VG8oMSxjKSk6ZC5pc0V2ZW4oKXx8ZC5zdWJUbyhtLGQpLGQuclNoaWZ0VG8oMSxkKTt1LmNvbXBhcmVUbyh2KT49MD8odS5zdWJUbyh2LHUpLGFjJiZhLnN1YlRvKGMsYSksYi5zdWJUbyhkLGIpKToodi5zdWJUbyh1LHYpLGFjJiZjLnN1YlRvKGEsYyksZC5zdWJUbyhiLGQpKX1yZXR1cm4gMCE9di5jb21wYXJlVG8oQmlnSW50ZWdlci5PTkUpP0JpZ0ludGVnZXIuWkVSTzpkLmNvbXBhcmVUbyhtKT49MD9kLnN1YnRyYWN0KG0pOmQuc2lnbnVtKCk8MD8oZC5hZGRUbyhtLGQpLGQuc2lnbnVtKCk8MD9kLmFkZChtKTpkKTpkfSxCaWdJbnRlZ2VyLnByb3RvdHlwZS5wb3c9ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuZXhwKGUsbmV3IE51bGxFeHApfSxCaWdJbnRlZ2VyLnByb3RvdHlwZS5nY2Q9ZnVuY3Rpb24oYSl7dmFyIHg9dGhpcy5zPDA/dGhpcy5uZWdhdGUoKTp0aGlzLmNsb25lKCkseT1hLnM8MD9hLm5lZ2F0ZSgpOmEuY2xvbmUoKTtpZih4LmNvbXBhcmVUbyh5KTwwKXt2YXIgdD14O3g9eSx5PXR9dmFyIGk9eC5nZXRMb3dlc3RTZXRCaXQoKSxnPXkuZ2V0TG93ZXN0U2V0Qml0KCk7aWYoZzwwKXJldHVybiB4O2ZvcihpPGcmJihnPWkpLGc+MCYmKHguclNoaWZ0VG8oZyx4KSx5LnJTaGlmdFRvKGcseSkpO3guc2lnbnVtKCk+MDspKGk9eC5nZXRMb3dlc3RTZXRCaXQoKSk+MCYmeC5yU2hpZnRUbyhpLHgpLChpPXkuZ2V0TG93ZXN0U2V0Qml0KCkpPjAmJnkuclNoaWZ0VG8oaSx5KSx4LmNvbXBhcmVUbyh5KT49MD8oeC5zdWJUbyh5LHgpLHguclNoaWZ0VG8oMSx4KSk6KHkuc3ViVG8oeCx5KSx5LnJTaGlmdFRvKDEseSkpO3JldHVybiBnPjAmJnkubFNoaWZ0VG8oZyx5KSx5fSxCaWdJbnRlZ2VyLnByb3RvdHlwZS5pc1Byb2JhYmxlUHJpbWU9ZnVuY3Rpb24odCl7dmFyIGkseD10aGlzLmFicygpO2lmKDE9PXgudCYmeFswXTw9bG93cHJpbWVzW2xvd3ByaW1lcy5sZW5ndGgtMV0pe2ZvcihpPTA7aTxsb3dwcmltZXMubGVuZ3RoOysraSlpZih4WzBdPT1sb3dwcmltZXNbaV0pcmV0dXJuITA7cmV0dXJuITF9aWYoeC5pc0V2ZW4oKSlyZXR1cm4hMTtmb3IoaT0xO2k8bG93cHJpbWVzLmxlbmd0aDspe2Zvcih2YXIgbT1sb3dwcmltZXNbaV0saj1pKzE7ajxsb3dwcmltZXMubGVuZ3RoJiZtPGxwbGltOyltKj1sb3dwcmltZXNbaisrXTtmb3IobT14Lm1vZEludChtKTtpPGo7KWlmKG0lbG93cHJpbWVzW2krK109PTApcmV0dXJuITF9cmV0dXJuIHgubWlsbGVyUmFiaW4odCl9LEJpZ0ludGVnZXIucHJvdG90eXBlLnNxdWFyZT1mdW5jdGlvbigpe3ZhciByPW5iaSgpO3JldHVybiB0aGlzLnNxdWFyZVRvKHIpLHJ9LEJpZ0ludGVnZXIucHJvdG90eXBlLkJhcnJldHQ9QmFycmV0dCxudWxsPT1ybmdfcG9vbCl7dmFyIHQ7aWYocm5nX3Bvb2w9bmV3IEFycmF5LHJuZ19wcHRyPTAsXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyYmd2luZG93LmNyeXB0bylpZih3aW5kb3cuY3J5cHRvLmdldFJhbmRvbVZhbHVlcyl7dmFyIHVhPW5ldyBVaW50OEFycmF5KDMyKTtmb3Iod2luZG93LmNyeXB0by5nZXRSYW5kb21WYWx1ZXModWEpLHQ9MDt0PDMyOysrdClybmdfcG9vbFtybmdfcHB0cisrXT11YVt0XX1lbHNlIGlmKFwiTmV0c2NhcGVcIj09bmF2aWdhdG9yLmFwcE5hbWUmJm5hdmlnYXRvci5hcHBWZXJzaW9uPFwiNVwiKXt2YXIgej13aW5kb3cuY3J5cHRvLnJhbmRvbSgzMik7Zm9yKHQ9MDt0PHoubGVuZ3RoOysrdClybmdfcG9vbFtybmdfcHB0cisrXT0yNTUmei5jaGFyQ29kZUF0KHQpfWZvcig7cm5nX3BwdHI8cm5nX3BzaXplOyl0PU1hdGguZmxvb3IoNjU1MzYqTWF0aC5yYW5kb20oKSkscm5nX3Bvb2xbcm5nX3BwdHIrK109dD4+Pjgscm5nX3Bvb2xbcm5nX3BwdHIrK109MjU1JnQ7cm5nX3BwdHI9MCxybmdfc2VlZF90aW1lKCl9ZnVuY3Rpb24gcm5nX2dldF9ieXRlKCl7aWYobnVsbD09cm5nX3N0YXRlKXtmb3Iocm5nX3NlZWRfdGltZSgpLChybmdfc3RhdGU9bmV3IEFyY2ZvdXIpLmluaXQocm5nX3Bvb2wpLHJuZ19wcHRyPTA7cm5nX3BwdHI8cm5nX3Bvb2wubGVuZ3RoOysrcm5nX3BwdHIpcm5nX3Bvb2xbcm5nX3BwdHJdPTA7cm5nX3BwdHI9MH1yZXR1cm4gcm5nX3N0YXRlLm5leHQoKX1mdW5jdGlvbiBTZWN1cmVSYW5kb20oKXt9ZnVuY3Rpb24gQXJjZm91cigpe3RoaXMuaT0wLHRoaXMuaj0wLHRoaXMuUz1uZXcgQXJyYXl9U2VjdXJlUmFuZG9tLnByb3RvdHlwZS5uZXh0Qnl0ZXM9ZnVuY3Rpb24oYmEpe3ZhciBpO2ZvcihpPTA7aTxiYS5sZW5ndGg7KytpKWJhW2ldPXJuZ19nZXRfYnl0ZSgpfSxBcmNmb3VyLnByb3RvdHlwZS5pbml0PWZ1bmN0aW9uKGtleSl7dmFyIGksaix0O2ZvcihpPTA7aTwyNTY7KytpKXRoaXMuU1tpXT1pO2ZvcihqPTAsaT0wO2k8MjU2OysraSlqPWordGhpcy5TW2ldK2tleVtpJWtleS5sZW5ndGhdJjI1NSx0PXRoaXMuU1tpXSx0aGlzLlNbaV09dGhpcy5TW2pdLHRoaXMuU1tqXT10O3RoaXMuaT0wLHRoaXMuaj0wfSxBcmNmb3VyLnByb3RvdHlwZS5uZXh0PWZ1bmN0aW9uKCl7dmFyIHQ7cmV0dXJuIHRoaXMuaT10aGlzLmkrMSYyNTUsdGhpcy5qPXRoaXMuait0aGlzLlNbdGhpcy5pXSYyNTUsdD10aGlzLlNbdGhpcy5pXSx0aGlzLlNbdGhpcy5pXT10aGlzLlNbdGhpcy5qXSx0aGlzLlNbdGhpcy5qXT10LHRoaXMuU1t0K3RoaXMuU1t0aGlzLmldJjI1NV19O3ZhciBybmdfcHNpemU9MjU2O0JpZ0ludGVnZXIuU2VjdXJlUmFuZG9tPVNlY3VyZVJhbmRvbSxCaWdJbnRlZ2VyLkJpZ0ludGVnZXI9QmlnSW50ZWdlcixtb2R1bGUuZXhwb3J0cz1CaWdJbnRlZ2VyfSkuY2FsbChjb21tb25qc0dsb2JhbCl9KSxCaWdJbnRlZ2VyPWpzYm4uQmlnSW50ZWdlcixEaWdlc3RJbmZvSGVhZD17c2hhMTpcIjMwMjEzMDA5MDYwNTJiMGUwMzAyMWEwNTAwMDQxNFwiLHNoYTIyNDpcIjMwMmQzMDBkMDYwOTYwODY0ODAxNjUwMzA0MDIwNDA1MDAwNDFjXCIsc2hhMjU2OlwiMzAzMTMwMGQwNjA5NjA4NjQ4MDE2NTAzMDQwMjAxMDUwMDA0MjBcIixzaGEzODQ6XCIzMDQxMzAwZDA2MDk2MDg2NDgwMTY1MDMwNDAyMDIwNTAwMDQzMFwiLHNoYTUxMjpcIjMwNTEzMDBkMDYwOTYwODY0ODAxNjUwMzA0MDIwMzA1MDAwNDQwXCIsbWQyOlwiMzAyMDMwMGMwNjA4MmE4NjQ4ODZmNzBkMDIwMjA1MDAwNDEwXCIsbWQ1OlwiMzAyMDMwMGMwNjA4MmE4NjQ4ODZmNzBkMDIwNTA1MDAwNDEwXCIscmlwZW1kMTYwOlwiMzAyMTMwMDkwNjA1MmIyNDAzMDIwMTA1MDAwNDE0XCJ9LERpZ2VzdEFsZ3M9e3NoYTI1NjpzaGEyNTZ9O2Z1bmN0aW9uIFJTQVZlcmlmaWVyKG1vZHVsdXMsZXhwKXtpZih0aGlzLm49bnVsbCx0aGlzLmU9MCwhKG51bGwhPW1vZHVsdXMmJm51bGwhPWV4cCYmbW9kdWx1cy5sZW5ndGg+MCYmZXhwLmxlbmd0aD4wKSl0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGtleSBkYXRhXCIpO3RoaXMubj1uZXcgQmlnSW50ZWdlcihtb2R1bHVzLDE2KSx0aGlzLmU9cGFyc2VJbnQoZXhwLDE2KX1mdW5jdGlvbiBnZXRBbGdvcml0aG1Gcm9tRGlnZXN0KGhEaWdlc3RJbmZvKXtmb3IodmFyIGFsZ05hbWUgaW4gRGlnZXN0SW5mb0hlYWQpe3ZhciBoZWFkPURpZ2VzdEluZm9IZWFkW2FsZ05hbWVdLGxlbj1oZWFkLmxlbmd0aDtpZihoRGlnZXN0SW5mby5zdWJzdHJpbmcoMCxsZW4pPT09aGVhZClyZXR1cm57YWxnOmFsZ05hbWUsaGFzaDpoRGlnZXN0SW5mby5zdWJzdHJpbmcobGVuKX19cmV0dXJuW119UlNBVmVyaWZpZXIucHJvdG90eXBlLnZlcmlmeT1mdW5jdGlvbihtc2csZW5jc2lnKXtlbmNzaWc9ZW5jc2lnLnJlcGxhY2UoL1teMC05YS1mXXxbXFxzXFxuXV0vZ2ksXCJcIik7dmFyIHNpZz1uZXcgQmlnSW50ZWdlcihlbmNzaWcsMTYpO2lmKHNpZy5iaXRMZW5ndGgoKT50aGlzLm4uYml0TGVuZ3RoKCkpdGhyb3cgbmV3IEVycm9yKFwiU2lnbmF0dXJlIGRvZXMgbm90IG1hdGNoIHdpdGggdGhlIGtleSBtb2R1bHVzLlwiKTt2YXIgZGlnZXN0SW5mbz1nZXRBbGdvcml0aG1Gcm9tRGlnZXN0KHNpZy5tb2RQb3dJbnQodGhpcy5lLHRoaXMubikudG9TdHJpbmcoMTYpLnJlcGxhY2UoL14xZiswMC8sXCJcIikpO2lmKDA9PT1kaWdlc3RJbmZvLmxlbmd0aClyZXR1cm4hMTtpZighRGlnZXN0QWxncy5oYXNPd25Qcm9wZXJ0eShkaWdlc3RJbmZvLmFsZykpdGhyb3cgbmV3IEVycm9yKFwiSGFzaGluZyBhbGdvcml0aG0gaXMgbm90IHN1cHBvcnRlZC5cIik7dmFyIG1zZ0hhc2g9RGlnZXN0QWxnc1tkaWdlc3RJbmZvLmFsZ10obXNnKS50b1N0cmluZygpO3JldHVybiBkaWdlc3RJbmZvLmhhc2g9PT1tc2dIYXNofTt2YXIgcnNhVmVyaWZpZXI9UlNBVmVyaWZpZXI7ZnVuY3Rpb24gcGFkZGluZyQxKHN0cil7dmFyIG1vZD1zdHIubGVuZ3RoJTQ7cmV0dXJuIDA9PT1tb2Q/c3RyOnN0cituZXcgQXJyYXkoMSsoNC1tb2QpKS5qb2luKFwiPVwiKX1mdW5jdGlvbiBieXRlQXJyYXlUb1N0cmluZyQxKGFycmF5KXtmb3IodmFyIHJlc3VsdD1cIlwiLGk9MDtpPGFycmF5Lmxlbmd0aDtpKyspcmVzdWx0Kz1TdHJpbmcuZnJvbUNoYXJDb2RlKGFycmF5W2ldKTtyZXR1cm4gcmVzdWx0fWZ1bmN0aW9uIHN0cmluZ1RvQnl0ZUFycmF5JDEoc3RyKXtmb3IodmFyIGFycj1uZXcgQXJyYXkoc3RyLmxlbmd0aCksYT0wO2E8c3RyLmxlbmd0aDthKyspYXJyW2FdPXN0ci5jaGFyQ29kZUF0KGEpO3JldHVybiBhcnJ9ZnVuY3Rpb24gYnl0ZUFycmF5VG9IZXgocmF3KXtmb3IodmFyIEhFWD1cIlwiLGk9MDtpPHJhdy5sZW5ndGg7aSsrKXt2YXIgX2hleD1yYXdbaV0udG9TdHJpbmcoMTYpO0hFWCs9Mj09PV9oZXgubGVuZ3RoP19oZXg6XCIwXCIrX2hleH1yZXR1cm4gSEVYfWZ1bmN0aW9uIGVuY29kZVN0cmluZyhzdHIpe3JldHVybiBiYXNlNjRKcy5mcm9tQnl0ZUFycmF5KHN0cmluZ1RvQnl0ZUFycmF5JDEoZW5jb2RlVVJJQ29tcG9uZW50KHN0cikucmVwbGFjZSgvJShbMC05QS1GXXsyfSkvZyxmdW5jdGlvbihtYXRjaCxwMSl7cmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoXCIweFwiK3AxKX0pKSkucmVwbGFjZSgvXFwrL2csXCItXCIpLnJlcGxhY2UoL1xcLy9nLFwiX1wiKX1mdW5jdGlvbiBkZWNvZGVUb1N0cmluZyhzdHIpe3JldHVybiBzdHI9cGFkZGluZyQxKHN0cikucmVwbGFjZSgvXFwtL2csXCIrXCIpLnJlcGxhY2UoL18vZyxcIi9cIiksZGVjb2RlVVJJQ29tcG9uZW50KGJ5dGVBcnJheVRvU3RyaW5nJDEoYmFzZTY0SnMudG9CeXRlQXJyYXkoc3RyKSkuc3BsaXQoXCJcIikubWFwKGZ1bmN0aW9uKGMpe3JldHVyblwiJVwiKyhcIjAwXCIrYy5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KSkuc2xpY2UoLTIpfSkuam9pbihcIlwiKSl9ZnVuY3Rpb24gZGVjb2RlVG9IRVgoc3RyKXtyZXR1cm4gYnl0ZUFycmF5VG9IZXgoYmFzZTY0SnMudG9CeXRlQXJyYXkocGFkZGluZyQxKHN0cikpKX1mdW5jdGlvbiBiYXNlNjRUb0Jhc2U2NFVybChiYXNlNjRTdHJpbmcpe3ZhciBTQUZFX1VSTF9FTkNPRElOR19NQVBQSU5HPXtcIitcIjpcIi1cIixcIi9cIjpcIl9cIixcIj1cIjpcIlwifTtyZXR1cm4gYmFzZTY0U3RyaW5nLnJlcGxhY2UoL1srXFwvPV0vZyxmdW5jdGlvbihtKXtyZXR1cm4gU0FGRV9VUkxfRU5DT0RJTkdfTUFQUElOR1ttXX0pfXZhciBiYXNlNjRfMT17ZW5jb2RlU3RyaW5nOmVuY29kZVN0cmluZyxkZWNvZGVUb1N0cmluZzpkZWNvZGVUb1N0cmluZyxieXRlQXJyYXlUb1N0cmluZzpieXRlQXJyYXlUb1N0cmluZyQxLHN0cmluZ1RvQnl0ZUFycmF5OnN0cmluZ1RvQnl0ZUFycmF5JDEscGFkZGluZzpwYWRkaW5nJDEsYnl0ZUFycmF5VG9IZXg6Ynl0ZUFycmF5VG9IZXgsZGVjb2RlVG9IRVg6ZGVjb2RlVG9IRVgsYmFzZTY0VG9CYXNlNjRVcmw6YmFzZTY0VG9CYXNlNjRVcmx9LHVybEpvaW4kMT1jcmVhdGVDb21tb25qc01vZHVsZShmdW5jdGlvbihtb2R1bGUpe3ZhciBjb250ZXh0LGRlZmluaXRpb247Y29udGV4dD1jb21tb25qc0dsb2JhbCxkZWZpbml0aW9uPWZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGlucHV0PWFyZ3VtZW50cztcIm9iamVjdFwiPT10eXBlb2YgYXJndW1lbnRzWzBdJiYoaW5wdXQ9YXJndW1lbnRzWzBdLGFyZ3VtZW50c1sxXSk7dmFyIGpvaW5lZD1bXS5zbGljZS5jYWxsKGlucHV0LDApLmpvaW4oXCIvXCIpO3JldHVybiBqb2luZWQucmVwbGFjZSgvOlxcLy9nLFwiOi8vXCIpLnJlcGxhY2UoLyhbXjpcXHNdKVxcLysvZyxcIiQxL1wiKS5yZXBsYWNlKC9cXC8oXFw/fCZ8I1teIV0pL2csXCIkMVwiKS5yZXBsYWNlKC8oXFw/LispXFw/L2csXCIkMSZcIil9fSxtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1kZWZpbml0aW9uKCk6Y29udGV4dC51cmxqb2luPWRlZmluaXRpb24oKX0pO2Z1bmN0aW9uIHByb2Nlc3Moandrcyl7cmV0dXJue21vZHVsdXM6YmFzZTY0XzEuZGVjb2RlVG9IRVgoandrcy5uKSxleHA6YmFzZTY0XzEuZGVjb2RlVG9IRVgoandrcy5lKX19ZnVuY3Rpb24gZ2V0SldLUyhvcHRpb25zLGNiKXt2YXIgdXJsPW9wdGlvbnMuandrc1VSSXx8dXJsSm9pbiQxKG9wdGlvbnMuaXNzLFwiLndlbGwta25vd25cIixcImp3a3MuanNvblwiKTtyZXR1cm4gY2xpZW50LmdldCh1cmwpLmVuZChmdW5jdGlvbihlcnIsZGF0YSl7dmFyIGEsa2V5LG1hdGNoaW5nS2V5PW51bGw7aWYoZXJyKXJldHVybiBjYihlcnIpO2ZvcihhPTA7YTxkYXRhLmJvZHkua2V5cy5sZW5ndGgmJm51bGw9PT1tYXRjaGluZ0tleTthKyspKGtleT1kYXRhLmJvZHkua2V5c1thXSkua2lkPT09b3B0aW9ucy5raWQmJihtYXRjaGluZ0tleT1rZXkpO3JldHVybiBjYihudWxsLHByb2Nlc3MobWF0Y2hpbmdLZXkpKX0pfXZhciBqd2tzPXtwcm9jZXNzOnByb2Nlc3MsZ2V0SldLUzpnZXRKV0tTfTtmdW5jdGlvbiBDb25maWd1cmF0aW9uRXJyb3IobWVzc2FnZSl7dGhpcy5uYW1lPVwiQ29uZmlndXJhdGlvbkVycm9yXCIsdGhpcy5tZXNzYWdlPW1lc3NhZ2V8fFwiXCJ9ZnVuY3Rpb24gVG9rZW5WYWxpZGF0aW9uRXJyb3IobWVzc2FnZSl7dGhpcy5uYW1lPVwiVG9rZW5WYWxpZGF0aW9uRXJyb3JcIix0aGlzLm1lc3NhZ2U9bWVzc2FnZXx8XCJcIn1Db25maWd1cmF0aW9uRXJyb3IucHJvdG90eXBlPUVycm9yLnByb3RvdHlwZSxUb2tlblZhbGlkYXRpb25FcnJvci5wcm90b3R5cGU9RXJyb3IucHJvdG90eXBlO3ZhciBlcnJvciQxPXtDb25maWd1cmF0aW9uRXJyb3I6Q29uZmlndXJhdGlvbkVycm9yLFRva2VuVmFsaWRhdGlvbkVycm9yOlRva2VuVmFsaWRhdGlvbkVycm9yfTtmdW5jdGlvbiBEdW1teUNhY2hlKCl7fUR1bW15Q2FjaGUucHJvdG90eXBlLmdldD1mdW5jdGlvbigpe3JldHVybiBudWxsfSxEdW1teUNhY2hlLnByb3RvdHlwZS5oYXM9ZnVuY3Rpb24oKXtyZXR1cm4hMX0sRHVtbXlDYWNoZS5wcm90b3R5cGUuc2V0PWZ1bmN0aW9uKCl7fTt2YXIgZHVtbXlDYWNoZT1EdW1teUNhY2hlLHN1cHBvcnRlZEFsZ3M9W1wiUlMyNTZcIl07ZnVuY3Rpb24gSWRUb2tlblZlcmlmaWVyKHBhcmFtZXRlcnMpe3ZhciBvcHRpb25zPXBhcmFtZXRlcnN8fHt9O2lmKHRoaXMuandrc0NhY2hlPW9wdGlvbnMuandrc0NhY2hlfHxuZXcgZHVtbXlDYWNoZSx0aGlzLmV4cGVjdGVkQWxnPW9wdGlvbnMuZXhwZWN0ZWRBbGd8fFwiUlMyNTZcIix0aGlzLmlzc3Vlcj1vcHRpb25zLmlzc3Vlcix0aGlzLmF1ZGllbmNlPW9wdGlvbnMuYXVkaWVuY2UsdGhpcy5sZWV3YXk9b3B0aW9ucy5sZWV3YXl8fDAsdGhpcy5fX2Rpc2FibGVFeHBpcmF0aW9uQ2hlY2s9b3B0aW9ucy5fX2Rpc2FibGVFeHBpcmF0aW9uQ2hlY2t8fCExLHRoaXMuandrc1VSST1vcHRpb25zLmp3a3NVUkksdGhpcy5sZWV3YXk8MHx8dGhpcy5sZWV3YXk+NjApdGhyb3cgbmV3IGVycm9yJDEuQ29uZmlndXJhdGlvbkVycm9yKFwiVGhlIGxlZXdheSBzaG91bGQgYmUgcG9zaXRpdmUgYW5kIGxvd2VyIHRoYW4gYSBtaW51dGUuXCIpO2lmKC0xPT09c3VwcG9ydGVkQWxncy5pbmRleE9mKHRoaXMuZXhwZWN0ZWRBbGcpKXRocm93IG5ldyBlcnJvciQxLkNvbmZpZ3VyYXRpb25FcnJvcihcIkFsZ29yaXRobSBcIit0aGlzLmV4cGVjdGVkQWxnK1wiIGlzIG5vdCBzdXBwb3J0ZWQuIChFeHBlY3RlZCBhbGdzOiBbXCIrc3VwcG9ydGVkQWxncy5qb2luKFwiLFwiKStcIl0pXCIpfUlkVG9rZW5WZXJpZmllci5wcm90b3R5cGUudmVyaWZ5PWZ1bmN0aW9uKHRva2VuLG5vbmNlLGNiKXt2YXIgand0PXRoaXMuZGVjb2RlKHRva2VuKTtpZihqd3QgaW5zdGFuY2VvZiBFcnJvcilyZXR1cm4gY2Ioand0LCExKTt2YXIgaGVhZEFuZFBheWxvYWQ9and0LmVuY29kZWQuaGVhZGVyK1wiLlwiK2p3dC5lbmNvZGVkLnBheWxvYWQsc2lnbmF0dXJlPWJhc2U2NF8xLmRlY29kZVRvSEVYKGp3dC5lbmNvZGVkLnNpZ25hdHVyZSksYWxnPWp3dC5oZWFkZXIuYWxnLGtpZD1qd3QuaGVhZGVyLmtpZCxhdWQ9and0LnBheWxvYWQuYXVkLGlzcz1qd3QucGF5bG9hZC5pc3MsZXhwPWp3dC5wYXlsb2FkLmV4cCxuYmY9and0LnBheWxvYWQubmJmLHRub25jZT1qd3QucGF5bG9hZC5ub25jZXx8bnVsbDtpZih0aGlzLmlzc3VlciE9PWlzcylyZXR1cm4gY2IobmV3IGVycm9yJDEuVG9rZW5WYWxpZGF0aW9uRXJyb3IoXCJJc3N1ZXIgXCIraXNzK1wiIGlzIG5vdCB2YWxpZC5cIiksITEpO2lmKHRoaXMuYXVkaWVuY2UhPT1hdWQpcmV0dXJuIGNiKG5ldyBlcnJvciQxLlRva2VuVmFsaWRhdGlvbkVycm9yKFwiQXVkaWVuY2UgXCIrYXVkK1wiIGlzIG5vdCB2YWxpZC5cIiksITEpO2lmKHRoaXMuZXhwZWN0ZWRBbGchPT1hbGcpcmV0dXJuIGNiKG5ldyBlcnJvciQxLlRva2VuVmFsaWRhdGlvbkVycm9yKFwiQWxnb3JpdGhtIFwiK2FsZytcIiBpcyBub3Qgc3VwcG9ydGVkLiAoRXhwZWN0ZWQgYWxnczogW1wiK3N1cHBvcnRlZEFsZ3Muam9pbihcIixcIikrXCJdKVwiKSwhMSk7aWYodG5vbmNlIT09bm9uY2UpcmV0dXJuIGNiKG5ldyBlcnJvciQxLlRva2VuVmFsaWRhdGlvbkVycm9yKFwiTm9uY2UgZG9lcyBub3QgbWF0Y2guXCIpLCExKTt2YXIgZXhwaXJhdGlvbkVycm9yPXRoaXMudmVyaWZ5RXhwQW5kTmJmKGV4cCxuYmYpO3JldHVybiBleHBpcmF0aW9uRXJyb3I/Y2IoZXhwaXJhdGlvbkVycm9yLCExKTp0aGlzLmdldFJzYVZlcmlmaWVyKGlzcyxraWQsZnVuY3Rpb24oZXJyLHJzYVZlcmlmaWVyJCQxKXtyZXR1cm4gZXJyP2NiKGVycik6cnNhVmVyaWZpZXIkJDEudmVyaWZ5KGhlYWRBbmRQYXlsb2FkLHNpZ25hdHVyZSk/Y2IobnVsbCxqd3QucGF5bG9hZCk6Y2IobmV3IGVycm9yJDEuVG9rZW5WYWxpZGF0aW9uRXJyb3IoXCJJbnZhbGlkIHNpZ25hdHVyZS5cIikpfSl9LElkVG9rZW5WZXJpZmllci5wcm90b3R5cGUudmVyaWZ5RXhwQW5kTmJmPWZ1bmN0aW9uKGV4cCxuYmYpe3ZhciBub3c9bmV3IERhdGUsZXhwRGF0ZT1uZXcgRGF0ZSgwKSxuYmZEYXRlPW5ldyBEYXRlKDApO3JldHVybiB0aGlzLl9fZGlzYWJsZUV4cGlyYXRpb25DaGVjaz9udWxsOihleHBEYXRlLnNldFVUQ1NlY29uZHMoZXhwK3RoaXMubGVld2F5KSxub3c+ZXhwRGF0ZT9uZXcgZXJyb3IkMS5Ub2tlblZhbGlkYXRpb25FcnJvcihcIkV4cGlyZWQgdG9rZW4uXCIpOnZvaWQgMD09PW5iZj9udWxsOihuYmZEYXRlLnNldFVUQ1NlY29uZHMobmJmLXRoaXMubGVld2F5KSxub3c8bmJmRGF0ZT9uZXcgZXJyb3IkMS5Ub2tlblZhbGlkYXRpb25FcnJvcihcIlRoZSB0b2tlbiBpcyBub3QgdmFsaWQgdW50aWwgbGF0ZXIgaW4gdGhlIGZ1dHVyZS4gUGxlYXNlIGNoZWNrIHlvdXIgY29tcHV0ZWQgY2xvY2suXCIpOm51bGwpKX0sSWRUb2tlblZlcmlmaWVyLnByb3RvdHlwZS52ZXJpZnlFeHBBbmRJYXQ9ZnVuY3Rpb24oZXhwLGlhdCl7dmFyIG5vdz1uZXcgRGF0ZSxleHBEYXRlPW5ldyBEYXRlKDApLGlhdERhdGU9bmV3IERhdGUoMCk7cmV0dXJuIHRoaXMuX19kaXNhYmxlRXhwaXJhdGlvbkNoZWNrP251bGw6KGV4cERhdGUuc2V0VVRDU2Vjb25kcyhleHArdGhpcy5sZWV3YXkpLG5vdz5leHBEYXRlP25ldyBlcnJvciQxLlRva2VuVmFsaWRhdGlvbkVycm9yKFwiRXhwaXJlZCB0b2tlbi5cIik6KGlhdERhdGUuc2V0VVRDU2Vjb25kcyhpYXQtdGhpcy5sZWV3YXkpLG5vdzxpYXREYXRlP25ldyBlcnJvciQxLlRva2VuVmFsaWRhdGlvbkVycm9yKFwiVGhlIHRva2VuIHdhcyBpc3N1ZWQgaW4gdGhlIGZ1dHVyZS4gUGxlYXNlIGNoZWNrIHlvdXIgY29tcHV0ZWQgY2xvY2suXCIpOm51bGwpKX0sSWRUb2tlblZlcmlmaWVyLnByb3RvdHlwZS5nZXRSc2FWZXJpZmllcj1mdW5jdGlvbihpc3Msa2lkLGNiKXt2YXIgX3RoaXM9dGhpcyxjYWNoZWtleT1pc3Mra2lkO2lmKHRoaXMuandrc0NhY2hlLmhhcyhjYWNoZWtleSkpe3ZhciBrZXlJbmZvPXRoaXMuandrc0NhY2hlLmdldChjYWNoZWtleSk7Y2IobnVsbCxuZXcgcnNhVmVyaWZpZXIoa2V5SW5mby5tb2R1bHVzLGtleUluZm8uZXhwKSl9ZWxzZSBqd2tzLmdldEpXS1Moe2p3a3NVUkk6dGhpcy5qd2tzVVJJLGlzczppc3Msa2lkOmtpZH0sZnVuY3Rpb24oZXJyLGtleUluZm8pe3JldHVybiBlcnI/Y2IoZXJyKTooX3RoaXMuandrc0NhY2hlLnNldChjYWNoZWtleSxrZXlJbmZvKSxjYihudWxsLG5ldyByc2FWZXJpZmllcihrZXlJbmZvLm1vZHVsdXMsa2V5SW5mby5leHApKSl9KX0sSWRUb2tlblZlcmlmaWVyLnByb3RvdHlwZS5kZWNvZGU9ZnVuY3Rpb24odG9rZW4pe3ZhciBoZWFkZXIscGF5bG9hZCxwYXJ0cz10b2tlbi5zcGxpdChcIi5cIik7aWYoMyE9PXBhcnRzLmxlbmd0aClyZXR1cm4gbmV3IGVycm9yJDEuVG9rZW5WYWxpZGF0aW9uRXJyb3IoXCJDYW5ub3QgZGVjb2RlIGEgbWFsZm9ybWVkIEpXVFwiKTt0cnl7aGVhZGVyPUpTT04ucGFyc2UoYmFzZTY0XzEuZGVjb2RlVG9TdHJpbmcocGFydHNbMF0pKSxwYXlsb2FkPUpTT04ucGFyc2UoYmFzZTY0XzEuZGVjb2RlVG9TdHJpbmcocGFydHNbMV0pKX1jYXRjaChlKXtyZXR1cm4gbmV3IGVycm9yJDEuVG9rZW5WYWxpZGF0aW9uRXJyb3IoXCJUb2tlbiBoZWFkZXIgb3IgcGF5bG9hZCBpcyBub3QgdmFsaWQgSlNPTlwiKX1yZXR1cm57aGVhZGVyOmhlYWRlcixwYXlsb2FkOnBheWxvYWQsZW5jb2RlZDp7aGVhZGVyOnBhcnRzWzBdLHBheWxvYWQ6cGFydHNbMV0sc2lnbmF0dXJlOnBhcnRzWzJdfX19LElkVG9rZW5WZXJpZmllci5wcm90b3R5cGUudmFsaWRhdGVBY2Nlc3NUb2tlbj1mdW5jdGlvbihhY2Nlc3NUb2tlbixhbGcsYXRIYXNoLGNiKXtpZih0aGlzLmV4cGVjdGVkQWxnIT09YWxnKXJldHVybiBjYihuZXcgZXJyb3IkMS5Ub2tlblZhbGlkYXRpb25FcnJvcihcIkFsZ29yaXRobSBcIithbGcrXCIgaXMgbm90IHN1cHBvcnRlZC4gKEV4cGVjdGVkIGFsZzogXCIrdGhpcy5leHBlY3RlZEFsZytcIilcIikpO3ZhciBzaGEyNTZBY2Nlc3NUb2tlbj1zaGEyNTYoYWNjZXNzVG9rZW4pLGhhc2hUb0hleD1lbmNIZXguc3RyaW5naWZ5KHNoYTI1NkFjY2Vzc1Rva2VuKSxoYXNoVG9IZXhGaXJzdEhhbGY9aGFzaFRvSGV4LnN1YnN0cmluZygwLGhhc2hUb0hleC5sZW5ndGgvMiksaGFzaEZpcnN0SGFsZldvcmRBcnJheT1lbmNIZXgucGFyc2UoaGFzaFRvSGV4Rmlyc3RIYWxmKSxoYXNoRmlyc3RIYWxmQmFzZTY0PWVuY0Jhc2U2NC5zdHJpbmdpZnkoaGFzaEZpcnN0SGFsZldvcmRBcnJheSk7cmV0dXJuIGNiKGJhc2U2NF8xLmJhc2U2NFRvQmFzZTY0VXJsKGhhc2hGaXJzdEhhbGZCYXNlNjQpIT09YXRIYXNoP25ldyBlcnJvciQxLlRva2VuVmFsaWRhdGlvbkVycm9yKFwiSW52YWxpZCBhY2Nlc3NfdG9rZW5cIik6bnVsbCl9O3ZhciBzcmM9SWRUb2tlblZlcmlmaWVyO2Z1bmN0aW9uIFBsdWdpbkhhbmRsZXIod2ViQXV0aCxwbHVnaW5zKXt0aGlzLnBsdWdpbnM9cGx1Z2lucztmb3IodmFyIGE9MDthPHRoaXMucGx1Z2lucy5sZW5ndGg7YSsrKXtpZih0aGlzLnBsdWdpbnNbYV0udmVyc2lvbiE9PXZlcnNpb24ucmF3KXt2YXIgcGx1Z2luTmFtZT1cIlwiO3Rocm93IHRoaXMucGx1Z2luc1thXS5jb25zdHJ1Y3RvciYmdGhpcy5wbHVnaW5zW2FdLmNvbnN0cnVjdG9yLm5hbWUmJihwbHVnaW5OYW1lPXRoaXMucGx1Z2luc1thXS5jb25zdHJ1Y3Rvci5uYW1lKSxuZXcgRXJyb3IoXCJQbHVnaW4gXCIrcGx1Z2luTmFtZStcIiB2ZXJzaW9uIChcIit0aGlzLnBsdWdpbnNbYV0udmVyc2lvbitcIikgaXMgbm90IGNvbXBhdGlibGUgd2l0aCB0aGUgU0RLIHZlcnNpb24gKFwiK3ZlcnNpb24ucmF3K1wiKVwiKX10aGlzLnBsdWdpbnNbYV0uc2V0V2ViQXV0aCh3ZWJBdXRoKX19ZnVuY3Rpb24gcmFuZG9tU3RyaW5nKGxlbmd0aCl7dmFyIGJ5dGVzPW5ldyBVaW50OEFycmF5KGxlbmd0aCkscmVzdWx0PVtdLGNoYXJzZXQ9XCIwMTIzNDU2Nzg5QUJDREVGR0hJSktMTU5PUFFSU1RVVlhZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6LS5fflwiLGNyeXB0b09iaj13aW5kb3dIYW5kbGVyLmdldFdpbmRvdygpLmNyeXB0b3x8d2luZG93SGFuZGxlci5nZXRXaW5kb3coKS5tc0NyeXB0bztpZighY3J5cHRvT2JqKXJldHVybiBudWxsO2Zvcih2YXIgcmFuZG9tPWNyeXB0b09iai5nZXRSYW5kb21WYWx1ZXMoYnl0ZXMpLGE9MDthPHJhbmRvbS5sZW5ndGg7YSsrKXJlc3VsdC5wdXNoKGNoYXJzZXRbcmFuZG9tW2FdJWNoYXJzZXQubGVuZ3RoXSk7cmV0dXJuIHJlc3VsdC5qb2luKFwiXCIpfVBsdWdpbkhhbmRsZXIucHJvdG90eXBlLmdldD1mdW5jdGlvbihleHRlbnNpYmlsaXR5UG9pbnQpe2Zvcih2YXIgYT0wO2E8dGhpcy5wbHVnaW5zLmxlbmd0aDthKyspaWYodGhpcy5wbHVnaW5zW2FdLnN1cHBvcnRzKGV4dGVuc2liaWxpdHlQb2ludCkpcmV0dXJuIHRoaXMucGx1Z2luc1thXS5pbml0KCk7cmV0dXJuIG51bGx9O3ZhciByYW5kb209e3JhbmRvbVN0cmluZzpyYW5kb21TdHJpbmd9LE1JTlVURVNfMTU9MS85NixNSU5VVEVTXzMwPTEvNDgsREVGQVVMVF9OQU1FU1BBQ0U9XCJjb20uYXV0aDAuYXV0aC5cIjtmdW5jdGlvbiBUcmFuc2FjdGlvbk1hbmFnZXIob3B0aW9ucyl7dmFyIHRyYW5zYWN0aW9uPW9wdGlvbnMudHJhbnNhY3Rpb258fHt9O3RoaXMubmFtZXNwYWNlPXRyYW5zYWN0aW9uLm5hbWVzcGFjZXx8REVGQVVMVF9OQU1FU1BBQ0UsdGhpcy5rZXlMZW5ndGg9dHJhbnNhY3Rpb24ua2V5TGVuZ3RofHwzMix0aGlzLnN0b3JhZ2U9bmV3IFN0b3JhZ2Uob3B0aW9ucyksdGhpcy5vcHRpb25zPW9wdGlvbnN9ZnVuY3Rpb24gSWZyYW1lSGFuZGxlcihvcHRpb25zKXtpZih0aGlzLnVybD1vcHRpb25zLnVybCx0aGlzLmNhbGxiYWNrPW9wdGlvbnMuY2FsbGJhY2ssdGhpcy50aW1lb3V0PW9wdGlvbnMudGltZW91dHx8NmU0LHRoaXMudGltZW91dENhbGxiYWNrPW9wdGlvbnMudGltZW91dENhbGxiYWNrfHxudWxsLHRoaXMuZXZlbnRMaXN0ZW5lclR5cGU9b3B0aW9ucy5ldmVudExpc3RlbmVyVHlwZXx8XCJtZXNzYWdlXCIsdGhpcy5pZnJhbWU9bnVsbCx0aGlzLnRpbWVvdXRIYW5kbGU9bnVsbCx0aGlzLl9kZXN0cm95VGltZW91dD1udWxsLHRoaXMudHJhbnNpZW50TWVzc2FnZUV2ZW50TGlzdGVuZXI9bnVsbCx0aGlzLnByb3h5RXZlbnRMaXN0ZW5lcj1udWxsLHRoaXMuZXZlbnRWYWxpZGF0b3I9b3B0aW9ucy5ldmVudFZhbGlkYXRvcnx8e2lzVmFsaWQ6ZnVuY3Rpb24oKXtyZXR1cm4hMH19LFwiZnVuY3Rpb25cIiE9dHlwZW9mIHRoaXMuY2FsbGJhY2spdGhyb3cgbmV3IEVycm9yKFwib3B0aW9ucy5jYWxsYmFjayBtdXN0IGJlIGEgZnVuY3Rpb25cIil9ZnVuY3Rpb24gcnVuV2ViTWVzc2FnZUZsb3coYXV0aG9yaXplVXJsLG9wdGlvbnMsY2FsbGJhY2spe25ldyBJZnJhbWVIYW5kbGVyKHt1cmw6YXV0aG9yaXplVXJsLGV2ZW50TGlzdGVuZXJUeXBlOlwibWVzc2FnZVwiLGNhbGxiYWNrOmZ1bmN0aW9uKGV2ZW50RGF0YSl7Y2FsbGJhY2sobnVsbCxldmVudERhdGEpfSx0aW1lb3V0Om9wdGlvbnMudGltZW91dCxldmVudFZhbGlkYXRvcjp7aXNWYWxpZDpmdW5jdGlvbihldmVudERhdGEpe3JldHVyblwiYXV0aG9yaXphdGlvbl9yZXNwb25zZVwiPT09ZXZlbnREYXRhLmV2ZW50LmRhdGEudHlwZSYmb3B0aW9ucy5zdGF0ZT09PWV2ZW50RGF0YS5ldmVudC5kYXRhLnJlc3BvbnNlLnN0YXRlfX0sdGltZW91dENhbGxiYWNrOmZ1bmN0aW9uKCl7Y2FsbGJhY2soe2Vycm9yOlwidGltZW91dFwiLGVycm9yX2Rlc2NyaXB0aW9uOlwiVGltZW91dCBkdXJpbmcgZXhlY3V0aW5nIHdlYl9tZXNzYWdlIGNvbW11bmljYXRpb25cIixzdGF0ZTpvcHRpb25zLnN0YXRlfSl9fSkuaW5pdCgpfWZ1bmN0aW9uIFdlYk1lc3NhZ2VIYW5kbGVyKHdlYkF1dGgpe3RoaXMud2ViQXV0aD13ZWJBdXRoLHRoaXMud2Fybj1uZXcgV2Fybih3ZWJBdXRoLmJhc2VPcHRpb25zKX1mdW5jdGlvbiBDcm9zc09yaWdpbkF1dGhlbnRpY2F0aW9uKHdlYkF1dGgsb3B0aW9ucyl7dGhpcy53ZWJBdXRoPXdlYkF1dGgsdGhpcy5iYXNlT3B0aW9ucz1vcHRpb25zLHRoaXMucmVxdWVzdD1uZXcgUmVxdWVzdEJ1aWxkZXIob3B0aW9ucyksdGhpcy53ZWJNZXNzYWdlSGFuZGxlcj1uZXcgV2ViTWVzc2FnZUhhbmRsZXIod2ViQXV0aCksdGhpcy5zdG9yYWdlPW5ldyBTdG9yYWdlKG9wdGlvbnMpfWZ1bmN0aW9uIGdldEZyYWdtZW50KG5hbWUpe3ZhciBwYXJ0cz0oXCImXCIrd2luZG93SGFuZGxlci5nZXRXaW5kb3coKS5sb2NhdGlvbi5oYXNoLnN1YnN0cmluZygxKSkuc3BsaXQoXCImXCIrbmFtZStcIj1cIik7aWYoMj09PXBhcnRzLmxlbmd0aClyZXR1cm4gcGFydHMucG9wKCkuc3BsaXQoXCImXCIpLnNoaWZ0KCl9ZnVuY3Rpb24gY3JlYXRlS2V5KG9yaWdpbixjb0lkKXtyZXR1cm5bXCJjby92ZXJpZmllclwiLGVuY29kZVVSSUNvbXBvbmVudChvcmlnaW4pLGVuY29kZVVSSUNvbXBvbmVudChjb0lkKV0uam9pbihcIi9cIil9ZnVuY3Rpb24gdHJ5R2V0VmVyaWZpZXIoc3RvcmFnZSxrZXkpe3RyeXt2YXIgdmVyaWZpZXI9c3RvcmFnZS5nZXRJdGVtKGtleSk7cmV0dXJuIHN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpLHZlcmlmaWVyfHxcIlwifWNhdGNoKGUpe3JldHVyblwiXCJ9fWZ1bmN0aW9uIFJlZGlyZWN0KGF1dGgwLG9wdGlvbnMpe3RoaXMud2ViQXV0aD1hdXRoMCx0aGlzLmJhc2VPcHRpb25zPW9wdGlvbnMsdGhpcy5jcm9zc09yaWdpbkF1dGhlbnRpY2F0aW9uPW5ldyBDcm9zc09yaWdpbkF1dGhlbnRpY2F0aW9uKGF1dGgwLHRoaXMuYmFzZU9wdGlvbnMpLHRoaXMud2Fybj1uZXcgV2Fybih7ZGlzYWJsZVdhcm5pbmdzOiEhb3B0aW9ucy5fZGlzYWJsZURlcHJlY2F0aW9uV2FybmluZ3N9KX1UcmFuc2FjdGlvbk1hbmFnZXIucHJvdG90eXBlLnByb2Nlc3M9ZnVuY3Rpb24ob3B0aW9ucyl7aWYoIW9wdGlvbnMucmVzcG9uc2VUeXBlKXRocm93IG5ldyBFcnJvcihcInJlc3BvbnNlVHlwZSBpcyByZXF1aXJlZFwiKTt2YXIgbGFzdFVzZWRDb25uZWN0aW9uPW9wdGlvbnMucmVhbG18fG9wdGlvbnMuY29ubmVjdGlvbixyZXNwb25zZVR5cGVJbmNsdWRlc0lkVG9rZW49LTEhPT1vcHRpb25zLnJlc3BvbnNlVHlwZS5pbmRleE9mKFwiaWRfdG9rZW5cIiksdHJhbnNhY3Rpb249dGhpcy5nZW5lcmF0ZVRyYW5zYWN0aW9uKG9wdGlvbnMuYXBwU3RhdGUsb3B0aW9ucy5zdGF0ZSxvcHRpb25zLm5vbmNlLGxhc3RVc2VkQ29ubmVjdGlvbixyZXNwb25zZVR5cGVJbmNsdWRlc0lkVG9rZW4pO3JldHVybiBvcHRpb25zLnN0YXRlfHwob3B0aW9ucy5zdGF0ZT10cmFuc2FjdGlvbi5zdGF0ZSkscmVzcG9uc2VUeXBlSW5jbHVkZXNJZFRva2VuJiYhb3B0aW9ucy5ub25jZSYmKG9wdGlvbnMubm9uY2U9dHJhbnNhY3Rpb24ubm9uY2UpLG9wdGlvbnN9LFRyYW5zYWN0aW9uTWFuYWdlci5wcm90b3R5cGUuZ2VuZXJhdGVUcmFuc2FjdGlvbj1mdW5jdGlvbihhcHBTdGF0ZSxzdGF0ZSxub25jZSxsYXN0VXNlZENvbm5lY3Rpb24sZ2VuZXJhdGVOb25jZSl7cmV0dXJuIHN0YXRlPXN0YXRlfHxyYW5kb20ucmFuZG9tU3RyaW5nKHRoaXMua2V5TGVuZ3RoKSxub25jZT1ub25jZXx8KGdlbmVyYXRlTm9uY2U/cmFuZG9tLnJhbmRvbVN0cmluZyh0aGlzLmtleUxlbmd0aCk6bnVsbCksd2luZG93SGFuZGxlci5nZXRXaW5kb3coKS5sb2NhdGlvbi5ob3N0PT09dGhpcy5vcHRpb25zLmRvbWFpbnx8dGhpcy5zdG9yYWdlLnNldEl0ZW0odGhpcy5uYW1lc3BhY2Urc3RhdGUse25vbmNlOm5vbmNlLGFwcFN0YXRlOmFwcFN0YXRlLHN0YXRlOnN0YXRlLGxhc3RVc2VkQ29ubmVjdGlvbjpsYXN0VXNlZENvbm5lY3Rpb259LHtleHBpcmVzOk1JTlVURVNfMzB9KSx7c3RhdGU6c3RhdGUsbm9uY2U6bm9uY2V9fSxUcmFuc2FjdGlvbk1hbmFnZXIucHJvdG90eXBlLmdldFN0b3JlZFRyYW5zYWN0aW9uPWZ1bmN0aW9uKHN0YXRlKXt2YXIgdHJhbnNhY3Rpb25EYXRhO3JldHVybiB0cmFuc2FjdGlvbkRhdGE9dGhpcy5zdG9yYWdlLmdldEl0ZW0odGhpcy5uYW1lc3BhY2Urc3RhdGUpLHRoaXMuY2xlYXJUcmFuc2FjdGlvbihzdGF0ZSksdHJhbnNhY3Rpb25EYXRhfSxUcmFuc2FjdGlvbk1hbmFnZXIucHJvdG90eXBlLmNsZWFyVHJhbnNhY3Rpb249ZnVuY3Rpb24oc3RhdGUpe3RoaXMuc3RvcmFnZS5yZW1vdmVJdGVtKHRoaXMubmFtZXNwYWNlK3N0YXRlKX0sSWZyYW1lSGFuZGxlci5wcm90b3R5cGUuaW5pdD1mdW5jdGlvbigpe3ZhciBfdGhpcz10aGlzLF93aW5kb3c9d2luZG93SGFuZGxlci5nZXRXaW5kb3coKTtzd2l0Y2godGhpcy5pZnJhbWU9X3dpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpLHRoaXMuaWZyYW1lLnN0eWxlLmRpc3BsYXk9XCJub25lXCIsdGhpcy5wcm94eUV2ZW50TGlzdGVuZXI9ZnVuY3Rpb24oZSl7X3RoaXMuZXZlbnRMaXN0ZW5lcihlKX0sdGhpcy5ldmVudExpc3RlbmVyVHlwZSl7Y2FzZVwibWVzc2FnZVwiOnRoaXMuZXZlbnRTb3VyY2VPYmplY3Q9X3dpbmRvdzticmVhaztjYXNlXCJsb2FkXCI6dGhpcy5ldmVudFNvdXJjZU9iamVjdD10aGlzLmlmcmFtZTticmVhaztkZWZhdWx0OnRocm93IG5ldyBFcnJvcihcIlVuc3VwcG9ydGVkIGV2ZW50IGxpc3RlbmVyIHR5cGU6IFwiK3RoaXMuZXZlbnRMaXN0ZW5lclR5cGUpfXRoaXMuZXZlbnRTb3VyY2VPYmplY3QuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLmV2ZW50TGlzdGVuZXJUeXBlLHRoaXMucHJveHlFdmVudExpc3RlbmVyLCExKSxfd2luZG93LmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5pZnJhbWUpLHRoaXMuaWZyYW1lLnNyYz10aGlzLnVybCx0aGlzLnRpbWVvdXRIYW5kbGU9c2V0VGltZW91dChmdW5jdGlvbigpe190aGlzLnRpbWVvdXRIYW5kbGVyKCl9LHRoaXMudGltZW91dCl9LElmcmFtZUhhbmRsZXIucHJvdG90eXBlLmV2ZW50TGlzdGVuZXI9ZnVuY3Rpb24oZXZlbnQpe3ZhciBldmVudERhdGE9e2V2ZW50OmV2ZW50LHNvdXJjZU9iamVjdDp0aGlzLmV2ZW50U291cmNlT2JqZWN0fTt0aGlzLmV2ZW50VmFsaWRhdG9yLmlzVmFsaWQoZXZlbnREYXRhKSYmKHRoaXMuZGVzdHJveSgpLHRoaXMuY2FsbGJhY2soZXZlbnREYXRhKSl9LElmcmFtZUhhbmRsZXIucHJvdG90eXBlLnRpbWVvdXRIYW5kbGVyPWZ1bmN0aW9uKCl7dGhpcy5kZXN0cm95KCksdGhpcy50aW1lb3V0Q2FsbGJhY2smJnRoaXMudGltZW91dENhbGxiYWNrKCl9LElmcmFtZUhhbmRsZXIucHJvdG90eXBlLmRlc3Ryb3k9ZnVuY3Rpb24oKXt2YXIgX3RoaXM9dGhpcztjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0SGFuZGxlKSx0aGlzLl9kZXN0cm95VGltZW91dD1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7X3RoaXMuZXZlbnRTb3VyY2VPYmplY3QucmVtb3ZlRXZlbnRMaXN0ZW5lcihfdGhpcy5ldmVudExpc3RlbmVyVHlwZSxfdGhpcy5wcm94eUV2ZW50TGlzdGVuZXIsITEpLF90aGlzLmlmcmFtZS5wYXJlbnROb2RlJiZfdGhpcy5pZnJhbWUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChfdGhpcy5pZnJhbWUpfSwwKX0sV2ViTWVzc2FnZUhhbmRsZXIucHJvdG90eXBlLnJ1bj1mdW5jdGlvbihvcHRpb25zLGNiKXt2YXIgX3RoaXM9dGhpcztvcHRpb25zLnJlc3BvbnNlTW9kZT1cIndlYl9tZXNzYWdlXCIsb3B0aW9ucy5wcm9tcHQ9XCJub25lXCI7dmFyIGN1cnJlbnRPcmlnaW49d2luZG93SGFuZGxlci5nZXRPcmlnaW4oKSxyZWRpcmVjdFVyaU9yaWdpbj1vYmplY3RIZWxwZXIuZ2V0T3JpZ2luRnJvbVVybChvcHRpb25zLnJlZGlyZWN0VXJpKTtpZihyZWRpcmVjdFVyaU9yaWdpbiYmY3VycmVudE9yaWdpbiE9PXJlZGlyZWN0VXJpT3JpZ2luKXJldHVybiBjYih7ZXJyb3I6XCJvcmlnaW5fbWlzbWF0Y2hcIixlcnJvcl9kZXNjcmlwdGlvbjpcIlRoZSByZWRpcmVjdFVyaSdzIG9yaWdpbiAoXCIrcmVkaXJlY3RVcmlPcmlnaW4rXCIpIHNob3VsZCBtYXRjaCB0aGUgd2luZG93J3Mgb3JpZ2luIChcIitjdXJyZW50T3JpZ2luK1wiKS5cIn0pO3J1bldlYk1lc3NhZ2VGbG93KHRoaXMud2ViQXV0aC5jbGllbnQuYnVpbGRBdXRob3JpemVVcmwob3B0aW9ucyksb3B0aW9ucyxmdW5jdGlvbihlcnIsZXZlbnREYXRhKXt2YXIgZXJyb3I9ZXJyO2lmKCFlcnImJmV2ZW50RGF0YS5ldmVudC5kYXRhLnJlc3BvbnNlLmVycm9yJiYoZXJyb3I9ZXZlbnREYXRhLmV2ZW50LmRhdGEucmVzcG9uc2UpLCFlcnJvcil7dmFyIHBhcnNlZEhhc2g9ZXZlbnREYXRhLmV2ZW50LmRhdGEucmVzcG9uc2U7cmV0dXJuIF90aGlzLndlYkF1dGgudmFsaWRhdGVBdXRoZW50aWNhdGlvblJlc3BvbnNlKG9wdGlvbnMscGFyc2VkSGFzaCxjYil9cmV0dXJuXCJjb25zZW50X3JlcXVpcmVkXCI9PT1lcnJvci5lcnJvciYmXCJsb2NhbGhvc3RcIj09PXdpbmRvd0hhbmRsZXIuZ2V0V2luZG93KCkubG9jYXRpb24uaG9zdG5hbWUmJl90aGlzLndhcm4ud2FybmluZyhcIkNvbnNlbnQgUmVxdWlyZWQuIENvbnNlbnQgY2FuJ3QgYmUgc2tpcHBlZCBvbiBsb2NhbGhvc3QuIFJlYWQgbW9yZSBoZXJlOiBodHRwczovL2F1dGgwLmNvbS9kb2NzL2FwaS1hdXRoL3VzZXItY29uc2VudCNza2lwcGluZy1jb25zZW50LWZvci1maXJzdC1wYXJ0eS1jbGllbnRzXCIpLF90aGlzLndlYkF1dGgudHJhbnNhY3Rpb25NYW5hZ2VyLmNsZWFyVHJhbnNhY3Rpb24oZXJyb3Iuc3RhdGUpLGNiKG9iamVjdEhlbHBlci5waWNrKGVycm9yLFtcImVycm9yXCIsXCJlcnJvcl9kZXNjcmlwdGlvblwiXSkpfSl9LENyb3NzT3JpZ2luQXV0aGVudGljYXRpb24ucHJvdG90eXBlLmxvZ2luPWZ1bmN0aW9uKG9wdGlvbnMsY2Ipe3ZhciBfdGhpcz10aGlzLHVybD11cmxKb2luKHRoaXMuYmFzZU9wdGlvbnMucm9vdFVybCxcIi9jby9hdXRoZW50aWNhdGVcIik7b3B0aW9ucy51c2VybmFtZT1vcHRpb25zLnVzZXJuYW1lfHxvcHRpb25zLmVtYWlsLGRlbGV0ZSBvcHRpb25zLmVtYWlsO3ZhciBhdXRoZW50aWNhdGVCb2R5PXtjbGllbnRfaWQ6b3B0aW9ucy5jbGllbnRJRHx8dGhpcy5iYXNlT3B0aW9ucy5jbGllbnRJRCx1c2VybmFtZTpvcHRpb25zLnVzZXJuYW1lfTtvcHRpb25zLnBhc3N3b3JkJiYoYXV0aGVudGljYXRlQm9keS5wYXNzd29yZD1vcHRpb25zLnBhc3N3b3JkKSxvcHRpb25zLm90cCYmKGF1dGhlbnRpY2F0ZUJvZHkub3RwPW9wdGlvbnMub3RwKTt2YXIgcmVhbG09b3B0aW9ucy5yZWFsbXx8dGhpcy5iYXNlT3B0aW9ucy5yZWFsbTtpZihyZWFsbSl7dmFyIGNyZWRlbnRpYWxUeXBlPW9wdGlvbnMuY3JlZGVudGlhbFR5cGV8fHRoaXMuYmFzZU9wdGlvbnMuY3JlZGVudGlhbFR5cGV8fFwiaHR0cDovL2F1dGgwLmNvbS9vYXV0aC9ncmFudC10eXBlL3Bhc3N3b3JkLXJlYWxtXCI7YXV0aGVudGljYXRlQm9keS5yZWFsbT1yZWFsbSxhdXRoZW50aWNhdGVCb2R5LmNyZWRlbnRpYWxfdHlwZT1jcmVkZW50aWFsVHlwZX1lbHNlIGF1dGhlbnRpY2F0ZUJvZHkuY3JlZGVudGlhbF90eXBlPVwicGFzc3dvcmRcIjt0aGlzLnJlcXVlc3QucG9zdCh1cmwpLndpdGhDcmVkZW50aWFscygpLnNlbmQoYXV0aGVudGljYXRlQm9keSkuZW5kKGZ1bmN0aW9uKGVycixkYXRhKXtpZihlcnIpe3ZhciBlcnJvck9iamVjdD1lcnIucmVzcG9uc2UmJmVyci5yZXNwb25zZS5ib2R5fHx7ZXJyb3I6XCJyZXF1ZXN0X2Vycm9yXCIsZXJyb3JfZGVzY3JpcHRpb246SlNPTi5zdHJpbmdpZnkoZXJyKX07cmV0dXJuIHdyYXBDYWxsYmFjayhjYix7Zm9yY2VMZWdhY3lFcnJvcjohMH0pKGVycm9yT2JqZWN0KX12YXIgcG9wdXBNb2RlPSEwPT09b3B0aW9ucy5wb3B1cDtvcHRpb25zPW9iamVjdEhlbHBlci5ibGFja2xpc3Qob3B0aW9ucyxbXCJwYXNzd29yZFwiLFwiY3JlZGVudGlhbFR5cGVcIixcIm90cFwiLFwicG9wdXBcIl0pO3ZhciBhdXRob3JpemVPcHRpb25zPW9iamVjdEhlbHBlci5tZXJnZShvcHRpb25zKS53aXRoKHtsb2dpblRpY2tldDpkYXRhLmJvZHkubG9naW5fdGlja2V0fSksa2V5PWNyZWF0ZUtleShfdGhpcy5iYXNlT3B0aW9ucy5yb290VXJsLGRhdGEuYm9keS5jb19pZCk7X3RoaXMuc3RvcmFnZS5zZXRJdGVtKGtleSxkYXRhLmJvZHkuY29fdmVyaWZpZXIse2V4cGlyZXM6TUlOVVRFU18xNX0pLHBvcHVwTW9kZT9fdGhpcy53ZWJNZXNzYWdlSGFuZGxlci5ydW4oYXV0aG9yaXplT3B0aW9ucyx3cmFwQ2FsbGJhY2soY2Ise2ZvcmNlTGVnYWN5RXJyb3I6ITB9KSk6X3RoaXMud2ViQXV0aC5hdXRob3JpemUoYXV0aG9yaXplT3B0aW9ucyl9KX0sQ3Jvc3NPcmlnaW5BdXRoZW50aWNhdGlvbi5wcm90b3R5cGUuY2FsbGJhY2s9ZnVuY3Rpb24oKXt2YXIgdGFyZ2V0T3JpZ2luPWRlY29kZVVSSUNvbXBvbmVudChnZXRGcmFnbWVudChcIm9yaWdpblwiKSksdGhlV2luZG93PXdpbmRvd0hhbmRsZXIuZ2V0V2luZG93KCksX3RoaXM9dGhpczt0aGVXaW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixmdW5jdGlvbihldnQpe2lmKFwiY29fdmVyaWZpZXJfcmVxdWVzdFwiPT09ZXZ0LmRhdGEudHlwZSl7dmFyIGtleT1jcmVhdGVLZXkoZXZ0Lm9yaWdpbixldnQuZGF0YS5yZXF1ZXN0LmlkKSx2ZXJpZmllcj10cnlHZXRWZXJpZmllcihfdGhpcy5zdG9yYWdlLGtleSk7ZXZ0LnNvdXJjZS5wb3N0TWVzc2FnZSh7dHlwZTpcImNvX3ZlcmlmaWVyX3Jlc3BvbnNlXCIscmVzcG9uc2U6e3ZlcmlmaWVyOnZlcmlmaWVyfX0sZXZ0Lm9yaWdpbil9fSksdGhlV2luZG93LnBhcmVudC5wb3N0TWVzc2FnZSh7dHlwZTpcInJlYWR5XCJ9LHRhcmdldE9yaWdpbil9LFJlZGlyZWN0LnByb3RvdHlwZS5sb2dpbldpdGhDcmVkZW50aWFscz1mdW5jdGlvbihvcHRpb25zLGNiKXtvcHRpb25zLnJlYWxtPW9wdGlvbnMucmVhbG18fG9wdGlvbnMuY29ubmVjdGlvbixkZWxldGUgb3B0aW9ucy5jb25uZWN0aW9uLHRoaXMuY3Jvc3NPcmlnaW5BdXRoZW50aWNhdGlvbi5sb2dpbihvcHRpb25zLGNiKX0sUmVkaXJlY3QucHJvdG90eXBlLnNpZ251cEFuZExvZ2luPWZ1bmN0aW9uKG9wdGlvbnMsY2Ipe3ZhciBfdGhpcz10aGlzO3JldHVybiB0aGlzLndlYkF1dGguY2xpZW50LmRiQ29ubmVjdGlvbi5zaWdudXAob3B0aW9ucyxmdW5jdGlvbihlcnIpe3JldHVybiBlcnI/Y2IoZXJyKToob3B0aW9ucy5yZWFsbT1vcHRpb25zLnJlYWxtfHxvcHRpb25zLmNvbm5lY3Rpb24sZGVsZXRlIG9wdGlvbnMuY29ubmVjdGlvbixfdGhpcy53ZWJBdXRoLmxvZ2luKG9wdGlvbnMsY2IpKX0pfTt2YXIgd2luY2hhbj1jcmVhdGVDb21tb25qc01vZHVsZShmdW5jdGlvbihtb2R1bGUpe3ZhciBXaW5DaGFuPWZ1bmN0aW9uKCl7dmFyIFJFTEFZX0ZSQU1FX05BTUU9XCJfX3dpbmNoYW5fcmVsYXlfZnJhbWVcIixDTE9TRV9DTUQ9XCJkaWVcIjtmdW5jdGlvbiBhZGRMaXN0ZW5lcih3LGV2ZW50LGNiKXt3LmF0dGFjaEV2ZW50P3cuYXR0YWNoRXZlbnQoXCJvblwiK2V2ZW50LGNiKTp3LmFkZEV2ZW50TGlzdGVuZXImJncuYWRkRXZlbnRMaXN0ZW5lcihldmVudCxjYiwhMSl9ZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXIodyxldmVudCxjYil7dy5kZXRhY2hFdmVudD93LmRldGFjaEV2ZW50KFwib25cIitldmVudCxjYik6dy5yZW1vdmVFdmVudExpc3RlbmVyJiZ3LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsY2IsITEpfWZ1bmN0aW9uIGV4dHJhY3RPcmlnaW4odXJsKXsvXmh0dHBzPzpcXC9cXC8vLnRlc3QodXJsKXx8KHVybD13aW5kb3cubG9jYXRpb24uaHJlZik7dmFyIG09L14oaHR0cHM/OlxcL1xcL1tcXC1fYS16QS1aXFwuMC05Ol0rKS8uZXhlYyh1cmwpO3JldHVybiBtP21bMV06dXJsfXZhciBpc0lFPWZ1bmN0aW9uKCl7aWYoXCJ1bmRlZmluZWRcIj09dHlwZW9mIG5hdmlnYXRvcilyZXR1cm4hMTt2YXIgcnY9LTEsdWE9bmF2aWdhdG9yLnVzZXJBZ2VudDtcIk1pY3Jvc29mdCBJbnRlcm5ldCBFeHBsb3JlclwiPT09bmF2aWdhdG9yLmFwcE5hbWU/bnVsbCE9bmV3IFJlZ0V4cChcIk1TSUUgKFswLTldezEsfVsuMC05XXswLH0pXCIpLmV4ZWModWEpJiYocnY9cGFyc2VGbG9hdChSZWdFeHAuJDEpKTp1YS5pbmRleE9mKFwiVHJpZGVudFwiKT4tMSYmbnVsbCE9PW5ldyBSZWdFeHAoXCJydjooWzAtOV17MiwyfVsuMC05XXswLH0pXCIpLmV4ZWModWEpJiYocnY9cGFyc2VGbG9hdChSZWdFeHAuJDEpKTtyZXR1cm4gcnY+PTh9KCk7cmV0dXJuXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyYmd2luZG93LkpTT04mJndpbmRvdy5KU09OLnN0cmluZ2lmeSYmd2luZG93LkpTT04ucGFyc2UmJndpbmRvdy5wb3N0TWVzc2FnZT97b3BlbjpmdW5jdGlvbihvcHRzLGNiKXtpZighY2IpdGhyb3dcIm1pc3NpbmcgcmVxdWlyZWQgY2FsbGJhY2sgYXJndW1lbnRcIjt2YXIgZXJyLGlmcmFtZTtvcHRzLnVybHx8KGVycj1cIm1pc3NpbmcgcmVxdWlyZWQgJ3VybCcgcGFyYW1ldGVyXCIpLG9wdHMucmVsYXlfdXJsfHwoZXJyPVwibWlzc2luZyByZXF1aXJlZCAncmVsYXlfdXJsJyBwYXJhbWV0ZXJcIiksZXJyJiZzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7Y2IoZXJyKX0sMCksb3B0cy53aW5kb3dfbmFtZXx8KG9wdHMud2luZG93X25hbWU9bnVsbCksb3B0cy53aW5kb3dfZmVhdHVyZXMmJiFmdW5jdGlvbigpe3RyeXt2YXIgdXNlckFnZW50PW5hdmlnYXRvci51c2VyQWdlbnQ7cmV0dXJuLTEhPXVzZXJBZ2VudC5pbmRleE9mKFwiRmVubmVjL1wiKXx8LTEhPXVzZXJBZ2VudC5pbmRleE9mKFwiRmlyZWZveC9cIikmJi0xIT11c2VyQWdlbnQuaW5kZXhPZihcIkFuZHJvaWRcIil9Y2F0Y2goZSl7fXJldHVybiExfSgpfHwob3B0cy53aW5kb3dfZmVhdHVyZXM9dm9pZCAwKTt2YXIgbWVzc2FnZVRhcmdldCxvcmlnaW49b3B0cy5vcmlnaW58fGV4dHJhY3RPcmlnaW4ob3B0cy51cmwpO2lmKG9yaWdpbiE9PWV4dHJhY3RPcmlnaW4ob3B0cy5yZWxheV91cmwpKXJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7Y2IoXCJpbnZhbGlkIGFyZ3VtZW50czogb3JpZ2luIG9mIHVybCBhbmQgcmVsYXlfdXJsIG11c3QgbWF0Y2hcIil9LDApO2lzSUUmJigoaWZyYW1lPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIikpLnNldEF0dHJpYnV0ZShcInNyY1wiLG9wdHMucmVsYXlfdXJsKSxpZnJhbWUuc3R5bGUuZGlzcGxheT1cIm5vbmVcIixpZnJhbWUuc2V0QXR0cmlidXRlKFwibmFtZVwiLFJFTEFZX0ZSQU1FX05BTUUpLGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaWZyYW1lKSxtZXNzYWdlVGFyZ2V0PWlmcmFtZS5jb250ZW50V2luZG93KTt2YXIgdz1vcHRzLnBvcHVwfHx3aW5kb3cub3BlbihvcHRzLnVybCxvcHRzLndpbmRvd19uYW1lLG9wdHMud2luZG93X2ZlYXR1cmVzKTtvcHRzLnBvcHVwJiYody5sb2NhdGlvbi5ocmVmPW9wdHMudXJsKSxtZXNzYWdlVGFyZ2V0fHwobWVzc2FnZVRhcmdldD13KTt2YXIgY2xvc2VJbnRlcnZhbD1zZXRJbnRlcnZhbChmdW5jdGlvbigpe3cmJncuY2xvc2VkJiYoY2xlYW51cCgpLGNiJiYoY2IoXCJVc2VyIGNsb3NlZCB0aGUgcG9wdXAgd2luZG93XCIpLGNiPW51bGwpKX0sNTAwKSxyZXE9SlNPTi5zdHJpbmdpZnkoe2E6XCJyZXF1ZXN0XCIsZDpvcHRzLnBhcmFtc30pO2Z1bmN0aW9uIGNsZWFudXAoKXtpZihpZnJhbWUmJmRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoaWZyYW1lKSxpZnJhbWU9dm9pZCAwLGNsb3NlSW50ZXJ2YWwmJihjbG9zZUludGVydmFsPWNsZWFySW50ZXJ2YWwoY2xvc2VJbnRlcnZhbCkpLHJlbW92ZUxpc3RlbmVyKHdpbmRvdyxcIm1lc3NhZ2VcIixvbk1lc3NhZ2UpLHJlbW92ZUxpc3RlbmVyKHdpbmRvdyxcInVubG9hZFwiLGNsZWFudXApLHcpdHJ5e3cuY2xvc2UoKX1jYXRjaChzZWN1cml0eVZpb2xhdGlvbil7bWVzc2FnZVRhcmdldC5wb3N0TWVzc2FnZShDTE9TRV9DTUQsb3JpZ2luKX13PW1lc3NhZ2VUYXJnZXQ9dm9pZCAwfWZ1bmN0aW9uIG9uTWVzc2FnZShlKXtpZihlLm9yaWdpbj09PW9yaWdpbil7dHJ5e3ZhciBkPUpTT04ucGFyc2UoZS5kYXRhKX1jYXRjaChlcnIpe2lmKGNiKXJldHVybiBjYihlcnIpO3Rocm93IGVycn1cInJlYWR5XCI9PT1kLmE/bWVzc2FnZVRhcmdldC5wb3N0TWVzc2FnZShyZXEsb3JpZ2luKTpcImVycm9yXCI9PT1kLmE/KGNsZWFudXAoKSxjYiYmKGNiKGQuZCksY2I9bnVsbCkpOlwicmVzcG9uc2VcIj09PWQuYSYmKGNsZWFudXAoKSxjYiYmKGNiKG51bGwsZC5kKSxjYj1udWxsKSl9fXJldHVybiBhZGRMaXN0ZW5lcih3aW5kb3csXCJ1bmxvYWRcIixjbGVhbnVwKSxhZGRMaXN0ZW5lcih3aW5kb3csXCJtZXNzYWdlXCIsb25NZXNzYWdlKSx7Y2xvc2U6Y2xlYW51cCxmb2N1czpmdW5jdGlvbigpe2lmKHcpdHJ5e3cuZm9jdXMoKX1jYXRjaChlKXt9fX19LG9uT3BlbjpmdW5jdGlvbihjYil7dmFyIG89XCIqXCIsbXNnVGFyZ2V0PWlzSUU/ZnVuY3Rpb24oKXt3aW5kb3cubG9jYXRpb247Zm9yKHZhciBmcmFtZXM9d2luZG93Lm9wZW5lci5mcmFtZXMsaT1mcmFtZXMubGVuZ3RoLTE7aT49MDtpLS0pdHJ5e2lmKGZyYW1lc1tpXS5sb2NhdGlvbi5wcm90b2NvbD09PXdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCYmZnJhbWVzW2ldLmxvY2F0aW9uLmhvc3Q9PT13aW5kb3cubG9jYXRpb24uaG9zdCYmZnJhbWVzW2ldLm5hbWU9PT1SRUxBWV9GUkFNRV9OQU1FKXJldHVybiBmcmFtZXNbaV19Y2F0Y2goZSl7fX0oKTp3aW5kb3cub3BlbmVyO2lmKCFtc2dUYXJnZXQpdGhyb3dcImNhbid0IGZpbmQgcmVsYXkgZnJhbWVcIjtmdW5jdGlvbiBkb1Bvc3QobXNnKXttc2c9SlNPTi5zdHJpbmdpZnkobXNnKSxpc0lFP21zZ1RhcmdldC5kb1Bvc3QobXNnLG8pOm1zZ1RhcmdldC5wb3N0TWVzc2FnZShtc2csbyl9ZnVuY3Rpb24gb25EaWUoZSl7aWYoZS5kYXRhPT09Q0xPU0VfQ01EKXRyeXt3aW5kb3cuY2xvc2UoKX1jYXRjaChvX08pe319YWRkTGlzdGVuZXIoaXNJRT9tc2dUYXJnZXQ6d2luZG93LFwibWVzc2FnZVwiLGZ1bmN0aW9uIG9uTWVzc2FnZShlKXt2YXIgZDt0cnl7ZD1KU09OLnBhcnNlKGUuZGF0YSl9Y2F0Y2goZXJyKXt9ZCYmXCJyZXF1ZXN0XCI9PT1kLmEmJihyZW1vdmVMaXN0ZW5lcih3aW5kb3csXCJtZXNzYWdlXCIsb25NZXNzYWdlKSxvPWUub3JpZ2luLGNiJiZzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7Y2IobyxkLmQsZnVuY3Rpb24ocil7Y2I9dm9pZCAwLGRvUG9zdCh7YTpcInJlc3BvbnNlXCIsZDpyfSl9KX0sMCkpfSksYWRkTGlzdGVuZXIoaXNJRT9tc2dUYXJnZXQ6d2luZG93LFwibWVzc2FnZVwiLG9uRGllKTt0cnl7ZG9Qb3N0KHthOlwicmVhZHlcIn0pfWNhdGNoKGUpe2FkZExpc3RlbmVyKG1zZ1RhcmdldCxcImxvYWRcIixmdW5jdGlvbihlKXtkb1Bvc3Qoe2E6XCJyZWFkeVwifSl9KX12YXIgb25VbmxvYWQ9ZnVuY3Rpb24oKXt0cnl7cmVtb3ZlTGlzdGVuZXIoaXNJRT9tc2dUYXJnZXQ6d2luZG93LFwibWVzc2FnZVwiLG9uRGllKX1jYXRjaChvaFdlbGwpe31jYiYmZG9Qb3N0KHthOlwiZXJyb3JcIixkOlwiY2xpZW50IGNsb3NlZCB3aW5kb3dcIn0pLGNiPXZvaWQgMDt0cnl7d2luZG93LmNsb3NlKCl9Y2F0Y2goZSl7fX07cmV0dXJuIGFkZExpc3RlbmVyKHdpbmRvdyxcInVubG9hZFwiLG9uVW5sb2FkKSx7ZGV0YWNoOmZ1bmN0aW9uKCl7cmVtb3ZlTGlzdGVuZXIod2luZG93LFwidW5sb2FkXCIsb25VbmxvYWQpfX19fTp7b3BlbjpmdW5jdGlvbih1cmwsd2lub3B0cyxhcmcsY2Ipe3NldFRpbWVvdXQoZnVuY3Rpb24oKXtjYihcInVuc3VwcG9ydGVkIGJyb3dzZXJcIil9LDApfSxvbk9wZW46ZnVuY3Rpb24oY2Ipe3NldFRpbWVvdXQoZnVuY3Rpb24oKXtjYihcInVuc3VwcG9ydGVkIGJyb3dzZXJcIil9LDApfX19KCk7bW9kdWxlLmV4cG9ydHMmJihtb2R1bGUuZXhwb3J0cz1XaW5DaGFuKX0pO2Z1bmN0aW9uIGV4dHJhY3RPcmlnaW4odXJsKXsvXmh0dHBzPzpcXC9cXC8vLnRlc3QodXJsKXx8KHVybD13aW5kb3cubG9jYXRpb24uaHJlZik7dmFyIG09L14oaHR0cHM/OlxcL1xcL1stX2EtekEtWi4wLTk6XSspLy5leGVjKHVybCk7cmV0dXJuIG0/bVsxXTp1cmx9dmFyIHVybEhlbHBlcj17ZXh0cmFjdE9yaWdpbjpleHRyYWN0T3JpZ2lufTtmdW5jdGlvbiBQb3B1cEhhbmRsZXIoKXt0aGlzLl9jdXJyZW50X3BvcHVwPW51bGx9ZnVuY3Rpb24gUG9wdXAod2ViQXV0aCxvcHRpb25zKXt0aGlzLmJhc2VPcHRpb25zPW9wdGlvbnMsdGhpcy5iYXNlT3B0aW9ucy5wb3B1cE9yaWdpbj1vcHRpb25zLnBvcHVwT3JpZ2luLHRoaXMuY2xpZW50PXdlYkF1dGguY2xpZW50LHRoaXMud2ViQXV0aD13ZWJBdXRoLHRoaXMudHJhbnNhY3Rpb25NYW5hZ2VyPW5ldyBUcmFuc2FjdGlvbk1hbmFnZXIodGhpcy5iYXNlT3B0aW9ucyksdGhpcy5jcm9zc09yaWdpbkF1dGhlbnRpY2F0aW9uPW5ldyBDcm9zc09yaWdpbkF1dGhlbnRpY2F0aW9uKHdlYkF1dGgsdGhpcy5iYXNlT3B0aW9ucyksdGhpcy53YXJuPW5ldyBXYXJuKHtkaXNhYmxlV2FybmluZ3M6ISFvcHRpb25zLl9kaXNhYmxlRGVwcmVjYXRpb25XYXJuaW5nc30pfWZ1bmN0aW9uIFNpbGVudEF1dGhlbnRpY2F0aW9uSGFuZGxlcihvcHRpb25zKXt0aGlzLmF1dGhlbnRpY2F0aW9uVXJsPW9wdGlvbnMuYXV0aGVudGljYXRpb25VcmwsdGhpcy50aW1lb3V0PW9wdGlvbnMudGltZW91dHx8NmU0LHRoaXMuaGFuZGxlcj1udWxsLHRoaXMucG9zdE1lc3NhZ2VEYXRhVHlwZT1vcHRpb25zLnBvc3RNZXNzYWdlRGF0YVR5cGV8fCExLHRoaXMucG9zdE1lc3NhZ2VPcmlnaW49b3B0aW9ucy5wb3N0TWVzc2FnZU9yaWdpbnx8d2luZG93SGFuZGxlci5nZXRXaW5kb3coKS5sb2NhdGlvbi5vcmlnaW58fHdpbmRvd0hhbmRsZXIuZ2V0V2luZG93KCkubG9jYXRpb24ucHJvdG9jb2wrXCIvL1wiK3dpbmRvd0hhbmRsZXIuZ2V0V2luZG93KCkubG9jYXRpb24uaG9zdG5hbWUrKHdpbmRvd0hhbmRsZXIuZ2V0V2luZG93KCkubG9jYXRpb24ucG9ydD9cIjpcIit3aW5kb3dIYW5kbGVyLmdldFdpbmRvdygpLmxvY2F0aW9uLnBvcnQ6XCJcIil9ZnVuY3Rpb24gVXNlcm5hbWVQYXNzd29yZChvcHRpb25zKXt0aGlzLmJhc2VPcHRpb25zPW9wdGlvbnMsdGhpcy5yZXF1ZXN0PW5ldyBSZXF1ZXN0QnVpbGRlcihvcHRpb25zKSx0aGlzLnRyYW5zYWN0aW9uTWFuYWdlcj1uZXcgVHJhbnNhY3Rpb25NYW5hZ2VyKHRoaXMuYmFzZU9wdGlvbnMpfWZ1bmN0aW9uIEhvc3RlZFBhZ2VzKGNsaWVudCxvcHRpb25zKXt0aGlzLmJhc2VPcHRpb25zPW9wdGlvbnMsdGhpcy5jbGllbnQ9Y2xpZW50LHRoaXMuYmFzZU9wdGlvbnMudW5pdmVyc2FsTG9naW5QYWdlPSEwLHRoaXMucmVxdWVzdD1uZXcgUmVxdWVzdEJ1aWxkZXIodGhpcy5iYXNlT3B0aW9ucyksdGhpcy53YXJuPW5ldyBXYXJuKHtkaXNhYmxlV2FybmluZ3M6ISFvcHRpb25zLl9kaXNhYmxlRGVwcmVjYXRpb25XYXJuaW5nc30pfWZ1bmN0aW9uIFdlYkF1dGgob3B0aW9ucyl7YXNzZXJ0LmNoZWNrKG9wdGlvbnMse3R5cGU6XCJvYmplY3RcIixtZXNzYWdlOlwib3B0aW9ucyBwYXJhbWV0ZXIgaXMgbm90IHZhbGlkXCJ9LHtkb21haW46e3R5cGU6XCJzdHJpbmdcIixtZXNzYWdlOlwiZG9tYWluIG9wdGlvbiBpcyByZXF1aXJlZFwifSxjbGllbnRJRDp7dHlwZTpcInN0cmluZ1wiLG1lc3NhZ2U6XCJjbGllbnRJRCBvcHRpb24gaXMgcmVxdWlyZWRcIn0scmVzcG9uc2VUeXBlOntvcHRpb25hbDohMCx0eXBlOlwic3RyaW5nXCIsbWVzc2FnZTpcInJlc3BvbnNlVHlwZSBpcyBub3QgdmFsaWRcIn0scmVzcG9uc2VNb2RlOntvcHRpb25hbDohMCx0eXBlOlwic3RyaW5nXCIsbWVzc2FnZTpcInJlc3BvbnNlTW9kZSBpcyBub3QgdmFsaWRcIn0scmVkaXJlY3RVcmk6e29wdGlvbmFsOiEwLHR5cGU6XCJzdHJpbmdcIixtZXNzYWdlOlwicmVkaXJlY3RVcmkgaXMgbm90IHZhbGlkXCJ9LHNjb3BlOntvcHRpb25hbDohMCx0eXBlOlwic3RyaW5nXCIsbWVzc2FnZTpcInNjb3BlIGlzIG5vdCB2YWxpZFwifSxhdWRpZW5jZTp7b3B0aW9uYWw6ITAsdHlwZTpcInN0cmluZ1wiLG1lc3NhZ2U6XCJhdWRpZW5jZSBpcyBub3QgdmFsaWRcIn0scG9wdXBPcmlnaW46e29wdGlvbmFsOiEwLHR5cGU6XCJzdHJpbmdcIixtZXNzYWdlOlwicG9wdXBPcmlnaW4gaXMgbm90IHZhbGlkXCJ9LGxlZXdheTp7b3B0aW9uYWw6ITAsdHlwZTpcIm51bWJlclwiLG1lc3NhZ2U6XCJsZWV3YXkgaXMgbm90IHZhbGlkXCJ9LHBsdWdpbnM6e29wdGlvbmFsOiEwLHR5cGU6XCJhcnJheVwiLG1lc3NhZ2U6XCJwbHVnaW5zIGlzIG5vdCB2YWxpZFwifSxfZGlzYWJsZURlcHJlY2F0aW9uV2FybmluZ3M6e29wdGlvbmFsOiEwLHR5cGU6XCJib29sZWFuXCIsbWVzc2FnZTpcIl9kaXNhYmxlRGVwcmVjYXRpb25XYXJuaW5ncyBvcHRpb24gaXMgbm90IHZhbGlkXCJ9LF9zZW5kVGVsZW1ldHJ5OntvcHRpb25hbDohMCx0eXBlOlwiYm9vbGVhblwiLG1lc3NhZ2U6XCJfc2VuZFRlbGVtZXRyeSBvcHRpb24gaXMgbm90IHZhbGlkXCJ9LF90ZWxlbWV0cnlJbmZvOntvcHRpb25hbDohMCx0eXBlOlwib2JqZWN0XCIsbWVzc2FnZTpcIl90ZWxlbWV0cnlJbmZvIG9wdGlvbiBpcyBub3QgdmFsaWRcIn0sX3RpbWVzVG9SZXRyeUZhaWxlZFJlcXVlc3RzOntvcHRpb25hbDohMCx0eXBlOlwibnVtYmVyXCIsbWVzc2FnZTpcIl90aW1lc1RvUmV0cnlGYWlsZWRSZXF1ZXN0cyBvcHRpb24gaXMgbm90IHZhbGlkXCJ9fSksb3B0aW9ucy5vdmVycmlkZXMmJmFzc2VydC5jaGVjayhvcHRpb25zLm92ZXJyaWRlcyx7dHlwZTpcIm9iamVjdFwiLG1lc3NhZ2U6XCJvdmVycmlkZXMgb3B0aW9uIGlzIG5vdCB2YWxpZFwifSx7X190ZW5hbnQ6e29wdGlvbmFsOiEwLHR5cGU6XCJzdHJpbmdcIixtZXNzYWdlOlwiX190ZW5hbnQgb3B0aW9uIGlzIHJlcXVpcmVkXCJ9LF9fdG9rZW5faXNzdWVyOntvcHRpb25hbDohMCx0eXBlOlwic3RyaW5nXCIsbWVzc2FnZTpcIl9fdG9rZW5faXNzdWVyIG9wdGlvbiBpcyByZXF1aXJlZFwifSxfX2p3a3NfdXJpOntvcHRpb25hbDohMCx0eXBlOlwic3RyaW5nXCIsbWVzc2FnZTpcIl9fandrc191cmkgaXMgcmVxdWlyZWRcIn19KSx0aGlzLmJhc2VPcHRpb25zPW9wdGlvbnMsdGhpcy5iYXNlT3B0aW9ucy5wbHVnaW5zPW5ldyBQbHVnaW5IYW5kbGVyKHRoaXMsdGhpcy5iYXNlT3B0aW9ucy5wbHVnaW5zfHxbXSksdGhpcy5iYXNlT3B0aW9ucy5fc2VuZFRlbGVtZXRyeT0hMSE9PXRoaXMuYmFzZU9wdGlvbnMuX3NlbmRUZWxlbWV0cnl8fHRoaXMuYmFzZU9wdGlvbnMuX3NlbmRUZWxlbWV0cnksdGhpcy5iYXNlT3B0aW9ucy5fdGltZXNUb1JldHJ5RmFpbGVkUmVxdWVzdHM9b3B0aW9ucy5fdGltZXNUb1JldHJ5RmFpbGVkUmVxdWVzdHM/cGFyc2VJbnQob3B0aW9ucy5fdGltZXNUb1JldHJ5RmFpbGVkUmVxdWVzdHMsMCk6MCx0aGlzLmJhc2VPcHRpb25zLnRlbmFudD10aGlzLmJhc2VPcHRpb25zLm92ZXJyaWRlcyYmdGhpcy5iYXNlT3B0aW9ucy5vdmVycmlkZXMuX190ZW5hbnR8fHRoaXMuYmFzZU9wdGlvbnMuZG9tYWluLnNwbGl0KFwiLlwiKVswXSx0aGlzLmJhc2VPcHRpb25zLnRva2VuX2lzc3Vlcj10aGlzLmJhc2VPcHRpb25zLm92ZXJyaWRlcyYmdGhpcy5iYXNlT3B0aW9ucy5vdmVycmlkZXMuX190b2tlbl9pc3N1ZXJ8fFwiaHR0cHM6Ly9cIit0aGlzLmJhc2VPcHRpb25zLmRvbWFpbitcIi9cIix0aGlzLmJhc2VPcHRpb25zLmp3a3NVUkk9dGhpcy5iYXNlT3B0aW9ucy5vdmVycmlkZXMmJnRoaXMuYmFzZU9wdGlvbnMub3ZlcnJpZGVzLl9fandrc191cmksdGhpcy50cmFuc2FjdGlvbk1hbmFnZXI9bmV3IFRyYW5zYWN0aW9uTWFuYWdlcih0aGlzLmJhc2VPcHRpb25zKSx0aGlzLmNsaWVudD1uZXcgQXV0aGVudGljYXRpb24odGhpcy5iYXNlT3B0aW9ucyksdGhpcy5yZWRpcmVjdD1uZXcgUmVkaXJlY3QodGhpcyx0aGlzLmJhc2VPcHRpb25zKSx0aGlzLnBvcHVwPW5ldyBQb3B1cCh0aGlzLHRoaXMuYmFzZU9wdGlvbnMpLHRoaXMuY3Jvc3NPcmlnaW5BdXRoZW50aWNhdGlvbj1uZXcgQ3Jvc3NPcmlnaW5BdXRoZW50aWNhdGlvbih0aGlzLHRoaXMuYmFzZU9wdGlvbnMpLHRoaXMud2ViTWVzc2FnZUhhbmRsZXI9bmV3IFdlYk1lc3NhZ2VIYW5kbGVyKHRoaXMpLHRoaXMuX3VuaXZlcnNhbExvZ2luPW5ldyBIb3N0ZWRQYWdlcyh0aGlzLHRoaXMuYmFzZU9wdGlvbnMpLHRoaXMuc3NvZGF0YVN0b3JhZ2U9bmV3IFNTT0RhdGFTdG9yYWdlKHRoaXMuYmFzZU9wdGlvbnMpfWZ1bmN0aW9uIGJ1aWxkUGFyc2VIYXNoUmVzcG9uc2UocXNQYXJhbXMsYXBwU3RhdGUsdG9rZW4pe3JldHVybnthY2Nlc3NUb2tlbjpxc1BhcmFtcy5hY2Nlc3NfdG9rZW58fG51bGwsaWRUb2tlbjpxc1BhcmFtcy5pZF90b2tlbnx8bnVsbCxpZFRva2VuUGF5bG9hZDp0b2tlbnx8bnVsbCxhcHBTdGF0ZTphcHBTdGF0ZXx8bnVsbCxyZWZyZXNoVG9rZW46cXNQYXJhbXMucmVmcmVzaF90b2tlbnx8bnVsbCxzdGF0ZTpxc1BhcmFtcy5zdGF0ZXx8bnVsbCxleHBpcmVzSW46cXNQYXJhbXMuZXhwaXJlc19pbj9wYXJzZUludChxc1BhcmFtcy5leHBpcmVzX2luLDEwKTpudWxsLHRva2VuVHlwZTpxc1BhcmFtcy50b2tlbl90eXBlfHxudWxsLHNjb3BlOnFzUGFyYW1zLnNjb3BlfHxudWxsfX1mdW5jdGlvbiBQYXNzd29yZGxlc3NBdXRoZW50aWNhdGlvbihyZXF1ZXN0LG9wdGlvbnMpe3RoaXMuYmFzZU9wdGlvbnM9b3B0aW9ucyx0aGlzLnJlcXVlc3Q9cmVxdWVzdH1mdW5jdGlvbiBEQkNvbm5lY3Rpb24ocmVxdWVzdCxvcHRpb25zKXt0aGlzLmJhc2VPcHRpb25zPW9wdGlvbnMsdGhpcy5yZXF1ZXN0PXJlcXVlc3R9ZnVuY3Rpb24gQXV0aGVudGljYXRpb24oYXV0aDAsb3B0aW9ucyl7Mj09PWFyZ3VtZW50cy5sZW5ndGg/dGhpcy5hdXRoMD1hdXRoMDpvcHRpb25zPWF1dGgwLGFzc2VydC5jaGVjayhvcHRpb25zLHt0eXBlOlwib2JqZWN0XCIsbWVzc2FnZTpcIm9wdGlvbnMgcGFyYW1ldGVyIGlzIG5vdCB2YWxpZFwifSx7ZG9tYWluOnt0eXBlOlwic3RyaW5nXCIsbWVzc2FnZTpcImRvbWFpbiBvcHRpb24gaXMgcmVxdWlyZWRcIn0sY2xpZW50SUQ6e3R5cGU6XCJzdHJpbmdcIixtZXNzYWdlOlwiY2xpZW50SUQgb3B0aW9uIGlzIHJlcXVpcmVkXCJ9LHJlc3BvbnNlVHlwZTp7b3B0aW9uYWw6ITAsdHlwZTpcInN0cmluZ1wiLG1lc3NhZ2U6XCJyZXNwb25zZVR5cGUgaXMgbm90IHZhbGlkXCJ9LHJlc3BvbnNlTW9kZTp7b3B0aW9uYWw6ITAsdHlwZTpcInN0cmluZ1wiLG1lc3NhZ2U6XCJyZXNwb25zZU1vZGUgaXMgbm90IHZhbGlkXCJ9LHJlZGlyZWN0VXJpOntvcHRpb25hbDohMCx0eXBlOlwic3RyaW5nXCIsbWVzc2FnZTpcInJlZGlyZWN0VXJpIGlzIG5vdCB2YWxpZFwifSxzY29wZTp7b3B0aW9uYWw6ITAsdHlwZTpcInN0cmluZ1wiLG1lc3NhZ2U6XCJzY29wZSBpcyBub3QgdmFsaWRcIn0sYXVkaWVuY2U6e29wdGlvbmFsOiEwLHR5cGU6XCJzdHJpbmdcIixtZXNzYWdlOlwiYXVkaWVuY2UgaXMgbm90IHZhbGlkXCJ9LF9kaXNhYmxlRGVwcmVjYXRpb25XYXJuaW5nczp7b3B0aW9uYWw6ITAsdHlwZTpcImJvb2xlYW5cIixtZXNzYWdlOlwiX2Rpc2FibGVEZXByZWNhdGlvbldhcm5pbmdzIG9wdGlvbiBpcyBub3QgdmFsaWRcIn0sX3NlbmRUZWxlbWV0cnk6e29wdGlvbmFsOiEwLHR5cGU6XCJib29sZWFuXCIsbWVzc2FnZTpcIl9zZW5kVGVsZW1ldHJ5IG9wdGlvbiBpcyBub3QgdmFsaWRcIn0sX3RlbGVtZXRyeUluZm86e29wdGlvbmFsOiEwLHR5cGU6XCJvYmplY3RcIixtZXNzYWdlOlwiX3RlbGVtZXRyeUluZm8gb3B0aW9uIGlzIG5vdCB2YWxpZFwifX0pLHRoaXMuYmFzZU9wdGlvbnM9b3B0aW9ucyx0aGlzLmJhc2VPcHRpb25zLl9zZW5kVGVsZW1ldHJ5PSExIT09dGhpcy5iYXNlT3B0aW9ucy5fc2VuZFRlbGVtZXRyeXx8dGhpcy5iYXNlT3B0aW9ucy5fc2VuZFRlbGVtZXRyeSx0aGlzLmJhc2VPcHRpb25zLnJvb3RVcmw9XCJodHRwczovL1wiK3RoaXMuYmFzZU9wdGlvbnMuZG9tYWluLHRoaXMucmVxdWVzdD1uZXcgUmVxdWVzdEJ1aWxkZXIodGhpcy5iYXNlT3B0aW9ucyksdGhpcy5wYXNzd29yZGxlc3M9bmV3IFBhc3N3b3JkbGVzc0F1dGhlbnRpY2F0aW9uKHRoaXMucmVxdWVzdCx0aGlzLmJhc2VPcHRpb25zKSx0aGlzLmRiQ29ubmVjdGlvbj1uZXcgREJDb25uZWN0aW9uKHRoaXMucmVxdWVzdCx0aGlzLmJhc2VPcHRpb25zKSx0aGlzLndhcm49bmV3IFdhcm4oe2Rpc2FibGVXYXJuaW5nczohIW9wdGlvbnMuX2Rpc2FibGVEZXByZWNhdGlvbldhcm5pbmdzfSksdGhpcy5zc29kYXRhU3RvcmFnZT1uZXcgU1NPRGF0YVN0b3JhZ2UodGhpcy5iYXNlT3B0aW9ucyl9ZnVuY3Rpb24gTWFuYWdlbWVudChvcHRpb25zKXthc3NlcnQuY2hlY2sob3B0aW9ucyx7dHlwZTpcIm9iamVjdFwiLG1lc3NhZ2U6XCJvcHRpb25zIHBhcmFtZXRlciBpcyBub3QgdmFsaWRcIn0se2RvbWFpbjp7dHlwZTpcInN0cmluZ1wiLG1lc3NhZ2U6XCJkb21haW4gb3B0aW9uIGlzIHJlcXVpcmVkXCJ9LHRva2VuOnt0eXBlOlwic3RyaW5nXCIsbWVzc2FnZTpcInRva2VuIG9wdGlvbiBpcyByZXF1aXJlZFwifSxfc2VuZFRlbGVtZXRyeTp7b3B0aW9uYWw6ITAsdHlwZTpcImJvb2xlYW5cIixtZXNzYWdlOlwiX3NlbmRUZWxlbWV0cnkgb3B0aW9uIGlzIG5vdCB2YWxpZFwifSxfdGVsZW1ldHJ5SW5mbzp7b3B0aW9uYWw6ITAsdHlwZTpcIm9iamVjdFwiLG1lc3NhZ2U6XCJfdGVsZW1ldHJ5SW5mbyBvcHRpb24gaXMgbm90IHZhbGlkXCJ9fSksdGhpcy5iYXNlT3B0aW9ucz1vcHRpb25zLHRoaXMuYmFzZU9wdGlvbnMuaGVhZGVycz17QXV0aG9yaXphdGlvbjpcIkJlYXJlciBcIit0aGlzLmJhc2VPcHRpb25zLnRva2VufSx0aGlzLnJlcXVlc3Q9bmV3IFJlcXVlc3RCdWlsZGVyKHRoaXMuYmFzZU9wdGlvbnMpLHRoaXMuYmFzZU9wdGlvbnMucm9vdFVybD11cmxKb2luKFwiaHR0cHM6Ly9cIit0aGlzLmJhc2VPcHRpb25zLmRvbWFpbixcImFwaVwiLFwidjJcIil9UG9wdXBIYW5kbGVyLnByb3RvdHlwZS5jYWxjdWxhdGVQb3NpdGlvbj1mdW5jdGlvbihvcHRpb25zKXt2YXIgd2lkdGg9b3B0aW9ucy53aWR0aHx8NTAwLGhlaWdodD1vcHRpb25zLmhlaWdodHx8NjAwLF93aW5kb3c9d2luZG93SGFuZGxlci5nZXRXaW5kb3coKSxzY3JlZW5YPXZvaWQgMCE9PV93aW5kb3cuc2NyZWVuWD9fd2luZG93LnNjcmVlblg6X3dpbmRvdy5zY3JlZW5MZWZ0LHNjcmVlblk9dm9pZCAwIT09X3dpbmRvdy5zY3JlZW5ZP193aW5kb3cuc2NyZWVuWTpfd2luZG93LnNjcmVlblRvcDtyZXR1cm57d2lkdGg6d2lkdGgsaGVpZ2h0OmhlaWdodCxsZWZ0OnNjcmVlblgrKCh2b2lkIDAhPT1fd2luZG93Lm91dGVyV2lkdGg/X3dpbmRvdy5vdXRlcldpZHRoOl93aW5kb3cuZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCktd2lkdGgpLzIsdG9wOnNjcmVlblkrKCh2b2lkIDAhPT1fd2luZG93Lm91dGVySGVpZ2h0P193aW5kb3cub3V0ZXJIZWlnaHQ6X3dpbmRvdy5kb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodCktaGVpZ2h0KS8yfX0sUG9wdXBIYW5kbGVyLnByb3RvdHlwZS5wcmVsb2FkPWZ1bmN0aW9uKG9wdGlvbnMpe3ZhciBfdGhpcz10aGlzLF93aW5kb3c9d2luZG93SGFuZGxlci5nZXRXaW5kb3coKSxwb3B1cFBvc2l0aW9uPXRoaXMuY2FsY3VsYXRlUG9zaXRpb24ob3B0aW9ucy5wb3B1cE9wdGlvbnN8fHt9KSxwb3B1cE9wdGlvbnM9b2JqZWN0SGVscGVyLm1lcmdlKHBvcHVwUG9zaXRpb24pLndpdGgob3B0aW9ucy5wb3B1cE9wdGlvbnMpLHVybD1vcHRpb25zLnVybHx8XCJhYm91dDpibGFua1wiLHdpbmRvd0ZlYXR1cmVzPWxpYi5zdHJpbmdpZnkocG9wdXBPcHRpb25zLHtlbmNvZGU6ITEsZGVsaW1pdGVyOlwiLFwifSk7cmV0dXJuIHRoaXMuX2N1cnJlbnRfcG9wdXAmJiF0aGlzLl9jdXJyZW50X3BvcHVwLmNsb3NlZD90aGlzLl9jdXJyZW50X3BvcHVwOih0aGlzLl9jdXJyZW50X3BvcHVwPV93aW5kb3cub3Blbih1cmwsXCJhdXRoMF9zaWdudXBfcG9wdXBcIix3aW5kb3dGZWF0dXJlcyksdGhpcy5fY3VycmVudF9wb3B1cC5raWxsPWZ1bmN0aW9uKCl7dGhpcy5jbG9zZSgpLF90aGlzLl9jdXJyZW50X3BvcHVwPW51bGx9LHRoaXMuX2N1cnJlbnRfcG9wdXApfSxQb3B1cEhhbmRsZXIucHJvdG90eXBlLmxvYWQ9ZnVuY3Rpb24odXJsLHJlbGF5VXJsLG9wdGlvbnMsY2Ipe3ZhciBfdGhpcz10aGlzLHBvcHVwUG9zaXRpb249dGhpcy5jYWxjdWxhdGVQb3NpdGlvbihvcHRpb25zLnBvcHVwT3B0aW9uc3x8e30pLHBvcHVwT3B0aW9ucz1vYmplY3RIZWxwZXIubWVyZ2UocG9wdXBQb3NpdGlvbikud2l0aChvcHRpb25zLnBvcHVwT3B0aW9ucyksd2luY2hhbk9wdGlvbnM9b2JqZWN0SGVscGVyLm1lcmdlKHt1cmw6dXJsLHJlbGF5X3VybDpyZWxheVVybCx3aW5kb3dfZmVhdHVyZXM6bGliLnN0cmluZ2lmeShwb3B1cE9wdGlvbnMse2RlbGltaXRlcjpcIixcIixlbmNvZGU6ITF9KSxwb3B1cDp0aGlzLl9jdXJyZW50X3BvcHVwfSkud2l0aChvcHRpb25zKSxwb3B1cD13aW5jaGFuLm9wZW4od2luY2hhbk9wdGlvbnMsZnVuY3Rpb24oZXJyLGRhdGEpe3JldHVybiBfdGhpcy5fY3VycmVudF9wb3B1cD1udWxsLGNiKGVycixkYXRhKX0pO3JldHVybiBwb3B1cC5mb2N1cygpLHBvcHVwfSxQb3B1cC5wcm90b3R5cGUuYnVpbGRQb3B1cEhhbmRsZXI9ZnVuY3Rpb24oKXt2YXIgcGx1Z2luSGFuZGxlcj10aGlzLmJhc2VPcHRpb25zLnBsdWdpbnMuZ2V0KFwicG9wdXAuZ2V0UG9wdXBIYW5kbGVyXCIpO3JldHVybiBwbHVnaW5IYW5kbGVyP3BsdWdpbkhhbmRsZXIuZ2V0UG9wdXBIYW5kbGVyKCk6bmV3IFBvcHVwSGFuZGxlcn0sUG9wdXAucHJvdG90eXBlLnByZWxvYWQ9ZnVuY3Rpb24ob3B0aW9ucyl7b3B0aW9ucz1vcHRpb25zfHx7fTt2YXIgcG9wdXA9dGhpcy5idWlsZFBvcHVwSGFuZGxlcigpO3JldHVybiBwb3B1cC5wcmVsb2FkKG9wdGlvbnMpLHBvcHVwfSxQb3B1cC5wcm90b3R5cGUuZ2V0UG9wdXBIYW5kbGVyPWZ1bmN0aW9uKG9wdGlvbnMscHJlbG9hZCl7cmV0dXJuIG9wdGlvbnMucG9wdXBIYW5kbGVyP29wdGlvbnMucG9wdXBIYW5kbGVyOnByZWxvYWQ/dGhpcy5wcmVsb2FkKG9wdGlvbnMpOnRoaXMuYnVpbGRQb3B1cEhhbmRsZXIoKX0sUG9wdXAucHJvdG90eXBlLmNhbGxiYWNrPWZ1bmN0aW9uKG9wdGlvbnMpe3ZhciBfdGhpcz10aGlzLHRoZVdpbmRvdz13aW5kb3dIYW5kbGVyLmdldFdpbmRvdygpLG9yaWdpblVybD0ob3B0aW9ucz1vcHRpb25zfHx7fSkucG9wdXBPcmlnaW58fHRoaXMuYmFzZU9wdGlvbnMucG9wdXBPcmlnaW58fHdpbmRvd0hhbmRsZXIuZ2V0T3JpZ2luKCk7dGhlV2luZG93Lm9wZW5lcj93aW5jaGFuLm9uT3BlbihmdW5jdGlvbihwb3B1cE9yaWdpbixyLGNiKXtpZihwb3B1cE9yaWdpbiE9PW9yaWdpblVybClyZXR1cm4gY2Ioe2Vycm9yOlwib3JpZ2luX21pc21hdGNoXCIsZXJyb3JfZGVzY3JpcHRpb246XCJUaGUgcG9wdXAncyBvcmlnaW4gKFwiK3BvcHVwT3JpZ2luK1wiKSBzaG91bGQgbWF0Y2ggdGhlIGBwb3B1cE9yaWdpbmAgcGFyYW1ldGVyIChcIitvcmlnaW5VcmwrXCIpLlwifSk7X3RoaXMud2ViQXV0aC5wYXJzZUhhc2gob3B0aW9uc3x8e30sZnVuY3Rpb24oZXJyLGRhdGEpe3JldHVybiBjYihlcnJ8fGRhdGEpfSl9KTp0aGVXaW5kb3cuZG9Qb3N0PWZ1bmN0aW9uKG1zZyl7dGhlV2luZG93LnBhcmVudCYmdGhlV2luZG93LnBhcmVudC5wb3N0TWVzc2FnZShtc2csb3JpZ2luVXJsKX19LFBvcHVwLnByb3RvdHlwZS5hdXRob3JpemU9ZnVuY3Rpb24ob3B0aW9ucyxjYil7dmFyIHVybCxyZWxheVVybCxwb3BPcHRzPXt9LHBsdWdpbkhhbmRsZXI9dGhpcy5iYXNlT3B0aW9ucy5wbHVnaW5zLmdldChcInBvcHVwLmF1dGhvcml6ZVwiKSxwYXJhbXM9b2JqZWN0SGVscGVyLm1lcmdlKHRoaXMuYmFzZU9wdGlvbnMsW1wiY2xpZW50SURcIixcInNjb3BlXCIsXCJkb21haW5cIixcImF1ZGllbmNlXCIsXCJ0ZW5hbnRcIixcInJlc3BvbnNlVHlwZVwiLFwicmVkaXJlY3RVcmlcIixcIl9jc3JmXCIsXCJzdGF0ZVwiLFwiX2ludHN0YXRlXCIsXCJub25jZVwiXSkud2l0aChvYmplY3RIZWxwZXIuYmxhY2tsaXN0KG9wdGlvbnMsW1wicG9wdXBIYW5kbGVyXCJdKSk7cmV0dXJuIGFzc2VydC5jaGVjayhwYXJhbXMse3R5cGU6XCJvYmplY3RcIixtZXNzYWdlOlwib3B0aW9ucyBwYXJhbWV0ZXIgaXMgbm90IHZhbGlkXCJ9LHtyZXNwb25zZVR5cGU6e3R5cGU6XCJzdHJpbmdcIixtZXNzYWdlOlwicmVzcG9uc2VUeXBlIG9wdGlvbiBpcyByZXF1aXJlZFwifX0pLHJlbGF5VXJsPXVybEpvaW4odGhpcy5iYXNlT3B0aW9ucy5yb290VXJsLFwicmVsYXkuaHRtbFwiKSxvcHRpb25zLm93cD9wYXJhbXMub3dwPSEwOihwb3BPcHRzLm9yaWdpbj11cmxIZWxwZXIuZXh0cmFjdE9yaWdpbihwYXJhbXMucmVkaXJlY3RVcmkpLHJlbGF5VXJsPXBhcmFtcy5yZWRpcmVjdFVyaSksb3B0aW9ucy5wb3B1cE9wdGlvbnMmJihwb3BPcHRzLnBvcHVwT3B0aW9ucz1vYmplY3RIZWxwZXIucGljayhvcHRpb25zLnBvcHVwT3B0aW9ucyxbXCJ3aWR0aFwiLFwiaGVpZ2h0XCJdKSkscGx1Z2luSGFuZGxlciYmKHBhcmFtcz1wbHVnaW5IYW5kbGVyLnByb2Nlc3NQYXJhbXMocGFyYW1zKSksKHBhcmFtcz10aGlzLnRyYW5zYWN0aW9uTWFuYWdlci5wcm9jZXNzKHBhcmFtcykpLnNjb3BlPXBhcmFtcy5zY29wZXx8XCJvcGVuaWQgcHJvZmlsZSBlbWFpbFwiLGRlbGV0ZSBwYXJhbXMuZG9tYWluLHVybD10aGlzLmNsaWVudC5idWlsZEF1dGhvcml6ZVVybChwYXJhbXMpLHRoaXMuZ2V0UG9wdXBIYW5kbGVyKG9wdGlvbnMpLmxvYWQodXJsLHJlbGF5VXJsLHBvcE9wdHMsd3JhcENhbGxiYWNrKGNiLHtrZWVwT3JpZ2luYWxDYXNpbmc6ITB9KSl9LFBvcHVwLnByb3RvdHlwZS5sb2dpbldpdGhDcmVkZW50aWFscz1mdW5jdGlvbihvcHRpb25zLGNiKXtvcHRpb25zLnJlYWxtPW9wdGlvbnMucmVhbG18fG9wdGlvbnMuY29ubmVjdGlvbixvcHRpb25zLnBvcHVwPSEwLG9wdGlvbnM9b2JqZWN0SGVscGVyLm1lcmdlKHRoaXMuYmFzZU9wdGlvbnMsW1wicmVkaXJlY3RVcmlcIixcInJlc3BvbnNlVHlwZVwiLFwic3RhdGVcIixcIm5vbmNlXCJdKS53aXRoKG9iamVjdEhlbHBlci5ibGFja2xpc3Qob3B0aW9ucyxbXCJwb3B1cEhhbmRsZXJcIixcImNvbm5lY3Rpb25cIl0pKSxvcHRpb25zPXRoaXMudHJhbnNhY3Rpb25NYW5hZ2VyLnByb2Nlc3Mob3B0aW9ucyksdGhpcy5jcm9zc09yaWdpbkF1dGhlbnRpY2F0aW9uLmxvZ2luKG9wdGlvbnMsY2IpfSxQb3B1cC5wcm90b3R5cGUucGFzc3dvcmRsZXNzVmVyaWZ5PWZ1bmN0aW9uKG9wdGlvbnMsY2Ipe3ZhciBfdGhpcz10aGlzO3JldHVybiB0aGlzLmNsaWVudC5wYXNzd29yZGxlc3MudmVyaWZ5KG9iamVjdEhlbHBlci5ibGFja2xpc3Qob3B0aW9ucyxbXCJwb3B1cEhhbmRsZXJcIl0pLGZ1bmN0aW9uKGVycil7aWYoZXJyKXJldHVybiBjYihlcnIpO29wdGlvbnMudXNlcm5hbWU9b3B0aW9ucy5waG9uZU51bWJlcnx8b3B0aW9ucy5lbWFpbCxvcHRpb25zLnBhc3N3b3JkPW9wdGlvbnMudmVyaWZpY2F0aW9uQ29kZSxkZWxldGUgb3B0aW9ucy5lbWFpbCxkZWxldGUgb3B0aW9ucy5waG9uZU51bWJlcixkZWxldGUgb3B0aW9ucy52ZXJpZmljYXRpb25Db2RlLGRlbGV0ZSBvcHRpb25zLnR5cGUsX3RoaXMuY2xpZW50LmxvZ2luV2l0aFJlc291cmNlT3duZXIob3B0aW9ucyxjYil9KX0sUG9wdXAucHJvdG90eXBlLnNpZ251cEFuZExvZ2luPWZ1bmN0aW9uKG9wdGlvbnMsY2Ipe3ZhciBfdGhpcz10aGlzLHBvcHVwSGFuZGxlcj10aGlzLmdldFBvcHVwSGFuZGxlcihvcHRpb25zLCEwKTtyZXR1cm4gb3B0aW9ucy5wb3B1cEhhbmRsZXI9cG9wdXBIYW5kbGVyLHRoaXMuY2xpZW50LmRiQ29ubmVjdGlvbi5zaWdudXAob2JqZWN0SGVscGVyLmJsYWNrbGlzdChvcHRpb25zLFtcInBvcHVwSGFuZGxlclwiXSksZnVuY3Rpb24oZXJyKXtpZihlcnIpcmV0dXJuIHBvcHVwSGFuZGxlci5fY3VycmVudF9wb3B1cCYmcG9wdXBIYW5kbGVyLl9jdXJyZW50X3BvcHVwLmtpbGwoKSxjYihlcnIpO190aGlzLmxvZ2luV2l0aENyZWRlbnRpYWxzKG9wdGlvbnMsY2IpfSl9LFNpbGVudEF1dGhlbnRpY2F0aW9uSGFuZGxlci5jcmVhdGU9ZnVuY3Rpb24ob3B0aW9ucyl7cmV0dXJuIG5ldyBTaWxlbnRBdXRoZW50aWNhdGlvbkhhbmRsZXIob3B0aW9ucyl9LFNpbGVudEF1dGhlbnRpY2F0aW9uSGFuZGxlci5wcm90b3R5cGUubG9naW49ZnVuY3Rpb24odXNlUG9zdE1lc3NhZ2UsY2FsbGJhY2spe3RoaXMuaGFuZGxlcj1uZXcgSWZyYW1lSGFuZGxlcih7YXV0aDA6dGhpcy5hdXRoMCx1cmw6dGhpcy5hdXRoZW50aWNhdGlvblVybCxldmVudExpc3RlbmVyVHlwZTp1c2VQb3N0TWVzc2FnZT9cIm1lc3NhZ2VcIjpcImxvYWRcIixjYWxsYmFjazp0aGlzLmdldENhbGxiYWNrSGFuZGxlcihjYWxsYmFjayx1c2VQb3N0TWVzc2FnZSksdGltZW91dDp0aGlzLnRpbWVvdXQsZXZlbnRWYWxpZGF0b3I6dGhpcy5nZXRFdmVudFZhbGlkYXRvcigpLHRpbWVvdXRDYWxsYmFjazpmdW5jdGlvbigpe2NhbGxiYWNrKG51bGwsXCIjZXJyb3I9dGltZW91dCZlcnJvcl9kZXNjcmlwdGlvbj1UaW1lb3V0K2R1cmluZythdXRoZW50aWNhdGlvbityZW5ldy5cIil9LHVzZVBvc3RNZXNzYWdlOnVzZVBvc3RNZXNzYWdlfHwhMX0pLHRoaXMuaGFuZGxlci5pbml0KCl9LFNpbGVudEF1dGhlbnRpY2F0aW9uSGFuZGxlci5wcm90b3R5cGUuZ2V0RXZlbnRWYWxpZGF0b3I9ZnVuY3Rpb24oKXt2YXIgX3RoaXM9dGhpcztyZXR1cm57aXNWYWxpZDpmdW5jdGlvbihldmVudERhdGEpe3N3aXRjaChldmVudERhdGEuZXZlbnQudHlwZSl7Y2FzZVwibWVzc2FnZVwiOnJldHVybiBldmVudERhdGEuZXZlbnQub3JpZ2luPT09X3RoaXMucG9zdE1lc3NhZ2VPcmlnaW4mJmV2ZW50RGF0YS5ldmVudC5zb3VyY2U9PT1fdGhpcy5oYW5kbGVyLmlmcmFtZS5jb250ZW50V2luZG93JiYoITE9PT1fdGhpcy5wb3N0TWVzc2FnZURhdGFUeXBlfHxldmVudERhdGEuZXZlbnQuZGF0YS50eXBlJiZldmVudERhdGEuZXZlbnQuZGF0YS50eXBlPT09X3RoaXMucG9zdE1lc3NhZ2VEYXRhVHlwZSk7Y2FzZVwibG9hZFwiOmlmKFwiYWJvdXQ6XCI9PT1ldmVudERhdGEuc291cmNlT2JqZWN0LmNvbnRlbnRXaW5kb3cubG9jYXRpb24ucHJvdG9jb2wpcmV0dXJuITE7ZGVmYXVsdDpyZXR1cm4hMH19fX0sU2lsZW50QXV0aGVudGljYXRpb25IYW5kbGVyLnByb3RvdHlwZS5nZXRDYWxsYmFja0hhbmRsZXI9ZnVuY3Rpb24oY2FsbGJhY2ssdXNlUG9zdE1lc3NhZ2Upe3JldHVybiBmdW5jdGlvbihldmVudERhdGEpe3ZhciBjYWxsYmFja1ZhbHVlO2NhbGxiYWNrVmFsdWU9dXNlUG9zdE1lc3NhZ2U/XCJvYmplY3RcIj09dHlwZW9mIGV2ZW50RGF0YS5ldmVudC5kYXRhJiZldmVudERhdGEuZXZlbnQuZGF0YS5oYXNoP2V2ZW50RGF0YS5ldmVudC5kYXRhLmhhc2g6ZXZlbnREYXRhLmV2ZW50LmRhdGE6ZXZlbnREYXRhLnNvdXJjZU9iamVjdC5jb250ZW50V2luZG93LmxvY2F0aW9uLmhhc2gsY2FsbGJhY2sobnVsbCxjYWxsYmFja1ZhbHVlKX19LFVzZXJuYW1lUGFzc3dvcmQucHJvdG90eXBlLmxvZ2luPWZ1bmN0aW9uKG9wdGlvbnMsY2Ipe3ZhciB1cmwsYm9keTtyZXR1cm4gdXJsPXVybEpvaW4odGhpcy5iYXNlT3B0aW9ucy5yb290VXJsLFwidXNlcm5hbWVwYXNzd29yZFwiLFwibG9naW5cIiksb3B0aW9ucy51c2VybmFtZT1vcHRpb25zLnVzZXJuYW1lfHxvcHRpb25zLmVtYWlsLG9wdGlvbnM9b2JqZWN0SGVscGVyLmJsYWNrbGlzdChvcHRpb25zLFtcImVtYWlsXCJdKSxib2R5PW9iamVjdEhlbHBlci5tZXJnZSh0aGlzLmJhc2VPcHRpb25zLFtcImNsaWVudElEXCIsXCJyZWRpcmVjdFVyaVwiLFwidGVuYW50XCIsXCJyZXNwb25zZVR5cGVcIixcInJlc3BvbnNlTW9kZVwiLFwic2NvcGVcIixcImF1ZGllbmNlXCJdKS53aXRoKG9wdGlvbnMpLGJvZHk9dGhpcy50cmFuc2FjdGlvbk1hbmFnZXIucHJvY2Vzcyhib2R5KSxib2R5PW9iamVjdEhlbHBlci50b1NuYWtlQ2FzZShib2R5LFtcImF1dGgwQ2xpZW50XCJdKSx0aGlzLnJlcXVlc3QucG9zdCh1cmwpLnNlbmQoYm9keSkuZW5kKHdyYXBDYWxsYmFjayhjYikpfSxVc2VybmFtZVBhc3N3b3JkLnByb3RvdHlwZS5jYWxsYmFjaz1mdW5jdGlvbihmb3JtSHRtbCl7dmFyIGRpdixfZG9jdW1lbnQ9d2luZG93SGFuZGxlci5nZXREb2N1bWVudCgpOyhkaXY9X2RvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpLmlubmVySFRNTD1mb3JtSHRtbCxfZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYpLmNoaWxkcmVuWzBdLnN1Ym1pdCgpfSxIb3N0ZWRQYWdlcy5wcm90b3R5cGUubG9naW49ZnVuY3Rpb24ob3B0aW9ucyxjYil7aWYod2luZG93SGFuZGxlci5nZXRXaW5kb3coKS5sb2NhdGlvbi5ob3N0IT09dGhpcy5iYXNlT3B0aW9ucy5kb21haW4pdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBtZXRob2QgaXMgbWVhbnQgdG8gYmUgdXNlZCBvbmx5IGluc2lkZSB0aGUgVW5pdmVyc2FsIExvZ2luIFBhZ2UuXCIpO3ZhciB1c2VybmFtZVBhc3N3b3JkLHBhcmFtcz1vYmplY3RIZWxwZXIubWVyZ2UodGhpcy5iYXNlT3B0aW9ucyxbXCJjbGllbnRJRFwiLFwicmVkaXJlY3RVcmlcIixcInRlbmFudFwiLFwicmVzcG9uc2VUeXBlXCIsXCJyZXNwb25zZU1vZGVcIixcInNjb3BlXCIsXCJhdWRpZW5jZVwiLFwiX2NzcmZcIixcInN0YXRlXCIsXCJfaW50c3RhdGVcIixcIm5vbmNlXCJdKS53aXRoKG9wdGlvbnMpO3JldHVybiBhc3NlcnQuY2hlY2socGFyYW1zLHt0eXBlOlwib2JqZWN0XCIsbWVzc2FnZTpcIm9wdGlvbnMgcGFyYW1ldGVyIGlzIG5vdCB2YWxpZFwifSx7cmVzcG9uc2VUeXBlOnt0eXBlOlwic3RyaW5nXCIsbWVzc2FnZTpcInJlc3BvbnNlVHlwZSBvcHRpb24gaXMgcmVxdWlyZWRcIn19KSwodXNlcm5hbWVQYXNzd29yZD1uZXcgVXNlcm5hbWVQYXNzd29yZCh0aGlzLmJhc2VPcHRpb25zKSkubG9naW4ocGFyYW1zLGZ1bmN0aW9uKGVycixkYXRhKXtyZXR1cm4gZXJyP2NiKGVycik6dXNlcm5hbWVQYXNzd29yZC5jYWxsYmFjayhkYXRhKX0pfSxIb3N0ZWRQYWdlcy5wcm90b3R5cGUuc2lnbnVwQW5kTG9naW49ZnVuY3Rpb24ob3B0aW9ucyxjYil7dmFyIF90aGlzPXRoaXM7cmV0dXJuIF90aGlzLmNsaWVudC5jbGllbnQuZGJDb25uZWN0aW9uLnNpZ251cChvcHRpb25zLGZ1bmN0aW9uKGVycil7cmV0dXJuIGVycj9jYihlcnIpOl90aGlzLmxvZ2luKG9wdGlvbnMsY2IpfSl9LEhvc3RlZFBhZ2VzLnByb3RvdHlwZS5nZXRTU09EYXRhPWZ1bmN0aW9uKHdpdGhBY3RpdmVEaXJlY3RvcmllcyxjYil7dmFyIHVybCxwYXJhbXM9XCJcIjtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiB3aXRoQWN0aXZlRGlyZWN0b3JpZXMmJihjYj13aXRoQWN0aXZlRGlyZWN0b3JpZXMsd2l0aEFjdGl2ZURpcmVjdG9yaWVzPSExKSxhc3NlcnQuY2hlY2sod2l0aEFjdGl2ZURpcmVjdG9yaWVzLHt0eXBlOlwiYm9vbGVhblwiLG1lc3NhZ2U6XCJ3aXRoQWN0aXZlRGlyZWN0b3JpZXMgcGFyYW1ldGVyIGlzIG5vdCB2YWxpZFwifSksYXNzZXJ0LmNoZWNrKGNiLHt0eXBlOlwiZnVuY3Rpb25cIixtZXNzYWdlOlwiY2IgcGFyYW1ldGVyIGlzIG5vdCB2YWxpZFwifSksd2l0aEFjdGl2ZURpcmVjdG9yaWVzJiYocGFyYW1zPVwiP1wiK2xpYi5zdHJpbmdpZnkoe2xkYXBzOjEsY2xpZW50X2lkOnRoaXMuYmFzZU9wdGlvbnMuY2xpZW50SUR9KSksdXJsPXVybEpvaW4odGhpcy5iYXNlT3B0aW9ucy5yb290VXJsLFwidXNlclwiLFwic3NvZGF0YVwiLHBhcmFtcyksdGhpcy5yZXF1ZXN0LmdldCh1cmwse25vSGVhZGVyczohMH0pLndpdGhDcmVkZW50aWFscygpLmVuZCh3cmFwQ2FsbGJhY2soY2IpKX0sV2ViQXV0aC5wcm90b3R5cGUucGFyc2VIYXNoPWZ1bmN0aW9uKG9wdGlvbnMsY2Ipe3ZhciBwYXJzZWRRcyxlcnI7Y2J8fFwiZnVuY3Rpb25cIiE9dHlwZW9mIG9wdGlvbnM/b3B0aW9ucz1vcHRpb25zfHx7fTooY2I9b3B0aW9ucyxvcHRpb25zPXt9KTt2YXIgX3dpbmRvdz13aW5kb3dIYW5kbGVyLmdldFdpbmRvdygpLGhhc2hTdHI9dm9pZCAwPT09b3B0aW9ucy5oYXNoP193aW5kb3cubG9jYXRpb24uaGFzaDpvcHRpb25zLmhhc2g7aWYoaGFzaFN0cj1oYXNoU3RyLnJlcGxhY2UoL14jP1xcLz8vLFwiXCIpLChwYXJzZWRRcz1saWIucGFyc2UoaGFzaFN0cikpLmhhc093blByb3BlcnR5KFwiZXJyb3JcIikpcmV0dXJuIGVycj1lcnJvci5idWlsZFJlc3BvbnNlKHBhcnNlZFFzLmVycm9yLHBhcnNlZFFzLmVycm9yX2Rlc2NyaXB0aW9uKSxwYXJzZWRRcy5zdGF0ZSYmKGVyci5zdGF0ZT1wYXJzZWRRcy5zdGF0ZSksY2IoZXJyKTtpZighcGFyc2VkUXMuaGFzT3duUHJvcGVydHkoXCJhY2Nlc3NfdG9rZW5cIikmJiFwYXJzZWRRcy5oYXNPd25Qcm9wZXJ0eShcImlkX3Rva2VuXCIpJiYhcGFyc2VkUXMuaGFzT3duUHJvcGVydHkoXCJyZWZyZXNoX3Rva2VuXCIpKXJldHVybiBjYihudWxsLG51bGwpO3ZhciByZXNwb25zZVR5cGVzPSh0aGlzLmJhc2VPcHRpb25zLnJlc3BvbnNlVHlwZXx8b3B0aW9ucy5yZXNwb25zZVR5cGV8fFwiXCIpLnNwbGl0KFwiIFwiKTtyZXR1cm4gcmVzcG9uc2VUeXBlcy5sZW5ndGg+MCYmLTEhPT1yZXNwb25zZVR5cGVzLmluZGV4T2YoXCJ0b2tlblwiKSYmIXBhcnNlZFFzLmhhc093blByb3BlcnR5KFwiYWNjZXNzX3Rva2VuXCIpP2NiKGVycm9yLmJ1aWxkUmVzcG9uc2UoXCJpbnZhbGlkX2hhc2hcIixcInJlc3BvbnNlX3R5cGUgY29udGFpbnMgYHRva2VuYCwgYnV0IHRoZSBwYXJzZWQgaGFzaCBkb2VzIG5vdCBjb250YWluIGFuIGBhY2Nlc3NfdG9rZW5gIHByb3BlcnR5XCIpKTpyZXNwb25zZVR5cGVzLmxlbmd0aD4wJiYtMSE9PXJlc3BvbnNlVHlwZXMuaW5kZXhPZihcImlkX3Rva2VuXCIpJiYhcGFyc2VkUXMuaGFzT3duUHJvcGVydHkoXCJpZF90b2tlblwiKT9jYihlcnJvci5idWlsZFJlc3BvbnNlKFwiaW52YWxpZF9oYXNoXCIsXCJyZXNwb25zZV90eXBlIGNvbnRhaW5zIGBpZF90b2tlbmAsIGJ1dCB0aGUgcGFyc2VkIGhhc2ggZG9lcyBub3QgY29udGFpbiBhbiBgaWRfdG9rZW5gIHByb3BlcnR5XCIpKTp0aGlzLnZhbGlkYXRlQXV0aGVudGljYXRpb25SZXNwb25zZShvcHRpb25zLHBhcnNlZFFzLGNiKX0sV2ViQXV0aC5wcm90b3R5cGUudmFsaWRhdGVBdXRoZW50aWNhdGlvblJlc3BvbnNlPWZ1bmN0aW9uKG9wdGlvbnMscGFyc2VkSGFzaCxjYil7dmFyIF90aGlzPXRoaXM7b3B0aW9ucy5fX2VuYWJsZUlkUEluaXRpYXRlZExvZ2luPW9wdGlvbnMuX19lbmFibGVJZFBJbml0aWF0ZWRMb2dpbnx8b3B0aW9ucy5fX2VuYWJsZUltcGVyc29uYXRpb247dmFyIHN0YXRlPXBhcnNlZEhhc2guc3RhdGUsdHJhbnNhY3Rpb249dGhpcy50cmFuc2FjdGlvbk1hbmFnZXIuZ2V0U3RvcmVkVHJhbnNhY3Rpb24oc3RhdGUpLHRyYW5zYWN0aW9uU3RhdGU9b3B0aW9ucy5zdGF0ZXx8dHJhbnNhY3Rpb24mJnRyYW5zYWN0aW9uLnN0YXRlfHxudWxsLHRyYW5zYWN0aW9uU3RhdGVNYXRjaGVzU3RhdGU9dHJhbnNhY3Rpb25TdGF0ZT09PXN0YXRlO2lmKCEoIXN0YXRlJiYhdHJhbnNhY3Rpb25TdGF0ZSYmb3B0aW9ucy5fX2VuYWJsZUlkUEluaXRpYXRlZExvZ2luKSYmIXRyYW5zYWN0aW9uU3RhdGVNYXRjaGVzU3RhdGUpcmV0dXJuIGNiKHtlcnJvcjpcImludmFsaWRfdG9rZW5cIixlcnJvckRlc2NyaXB0aW9uOlwiYHN0YXRlYCBkb2VzIG5vdCBtYXRjaC5cIn0pO3ZhciB0cmFuc2FjdGlvbk5vbmNlPW9wdGlvbnMubm9uY2V8fHRyYW5zYWN0aW9uJiZ0cmFuc2FjdGlvbi5ub25jZXx8bnVsbCxhcHBTdGF0ZT1vcHRpb25zLnN0YXRlfHx0cmFuc2FjdGlvbiYmdHJhbnNhY3Rpb24uYXBwU3RhdGV8fG51bGwsY2FsbGJhY2s9ZnVuY3Rpb24oZXJyLHBheWxvYWQpe2lmKGVycilyZXR1cm4gY2IoZXJyKTt2YXIgc3ViO3RyYW5zYWN0aW9uJiZ0cmFuc2FjdGlvbi5sYXN0VXNlZENvbm5lY3Rpb24mJihwYXlsb2FkJiYoc3ViPXBheWxvYWQuc3ViKSxfdGhpcy5zc29kYXRhU3RvcmFnZS5zZXQodHJhbnNhY3Rpb24ubGFzdFVzZWRDb25uZWN0aW9uLHN1YikpO3JldHVybiBjYihudWxsLGJ1aWxkUGFyc2VIYXNoUmVzcG9uc2UocGFyc2VkSGFzaCxhcHBTdGF0ZSxwYXlsb2FkKSl9O3JldHVybiBwYXJzZWRIYXNoLmlkX3Rva2VuP3RoaXMudmFsaWRhdGVUb2tlbihwYXJzZWRIYXNoLmlkX3Rva2VuLHRyYW5zYWN0aW9uTm9uY2UsZnVuY3Rpb24odmFsaWRhdGlvbkVycm9yLHBheWxvYWQpe2lmKCF2YWxpZGF0aW9uRXJyb3IpcmV0dXJuIHBhcnNlZEhhc2guYWNjZXNzX3Rva2VuJiZwYXlsb2FkLmF0X2hhc2g/KG5ldyBzcmMpLnZhbGlkYXRlQWNjZXNzVG9rZW4ocGFyc2VkSGFzaC5hY2Nlc3NfdG9rZW4sXCJSUzI1NlwiLHBheWxvYWQuYXRfaGFzaCxmdW5jdGlvbihlcnIpe3JldHVybiBlcnI/Y2FsbGJhY2soZXJyb3IuaW52YWxpZFRva2VuKGVyci5tZXNzYWdlKSk6Y2FsbGJhY2sobnVsbCxwYXlsb2FkKX0pOmNhbGxiYWNrKG51bGwscGF5bG9hZCk7aWYoXCJpbnZhbGlkX3Rva2VuXCIhPT12YWxpZGF0aW9uRXJyb3IuZXJyb3J8fFwiTm9uY2UgZG9lcyBub3QgbWF0Y2guXCI9PT12YWxpZGF0aW9uRXJyb3IuZXJyb3JEZXNjcmlwdGlvbilyZXR1cm4gY2FsbGJhY2sodmFsaWRhdGlvbkVycm9yKTtpZihcIkhTMjU2XCIhPT0obmV3IHNyYykuZGVjb2RlKHBhcnNlZEhhc2guaWRfdG9rZW4pLmhlYWRlci5hbGcpcmV0dXJuIGNhbGxiYWNrKHZhbGlkYXRpb25FcnJvcik7aWYoIXBhcnNlZEhhc2guYWNjZXNzX3Rva2VuKXtyZXR1cm4gY2FsbGJhY2soe2Vycm9yOlwiaW52YWxpZF90b2tlblwiLGRlc2NyaXB0aW9uOlwiVGhlIGlkX3Rva2VuIGNhbm5vdCBiZSB2YWxpZGF0ZWQgYmVjYXVzZSBpdCB3YXMgc2lnbmVkIHdpdGggdGhlIEhTMjU2IGFsZ29yaXRobSBhbmQgcHVibGljIGNsaWVudHMgKGxpa2UgYSBicm93c2VyKSBjYW7igJl0IHN0b3JlIHNlY3JldHMuIFBsZWFzZSByZWFkIHRoZSBhc3NvY2lhdGVkIGRvYyBmb3IgcG9zc2libGUgd2F5cyB0byBmaXggdGhpcy4gUmVhZCBtb3JlOiBodHRwczovL2F1dGgwLmNvbS9kb2NzL2Vycm9ycy9saWJyYXJpZXMvYXV0aDAtanMvaW52YWxpZC10b2tlbiNwYXJzaW5nLWFuLWhzMjU2LXNpZ25lZC1pZC10b2tlbi13aXRob3V0LWFuLWFjY2Vzcy10b2tlblwifSl9cmV0dXJuIF90aGlzLmNsaWVudC51c2VySW5mbyhwYXJzZWRIYXNoLmFjY2Vzc190b2tlbixmdW5jdGlvbihlcnJVc2VySW5mbyxwcm9maWxlKXtyZXR1cm4gZXJyVXNlckluZm8/Y2FsbGJhY2soZXJyVXNlckluZm8pOmNhbGxiYWNrKG51bGwscHJvZmlsZSl9KX0pOmNhbGxiYWNrKG51bGwsbnVsbCl9LFdlYkF1dGgucHJvdG90eXBlLnZhbGlkYXRlVG9rZW49ZnVuY3Rpb24odG9rZW4sbm9uY2UsY2Ipe25ldyBzcmMoe2lzc3Vlcjp0aGlzLmJhc2VPcHRpb25zLnRva2VuX2lzc3Vlcixqd2tzVVJJOnRoaXMuYmFzZU9wdGlvbnMuandrc1VSSSxhdWRpZW5jZTp0aGlzLmJhc2VPcHRpb25zLmNsaWVudElELGxlZXdheTp0aGlzLmJhc2VPcHRpb25zLmxlZXdheXx8MCxfX2Rpc2FibGVFeHBpcmF0aW9uQ2hlY2s6dGhpcy5iYXNlT3B0aW9ucy5fX2Rpc2FibGVFeHBpcmF0aW9uQ2hlY2t9KS52ZXJpZnkodG9rZW4sbm9uY2UsZnVuY3Rpb24oZXJyLHBheWxvYWQpe2lmKGVycilyZXR1cm4gY2IoZXJyb3IuaW52YWxpZFRva2VuKGVyci5tZXNzYWdlKSk7Y2IobnVsbCxwYXlsb2FkKX0pfSxXZWJBdXRoLnByb3RvdHlwZS5yZW5ld0F1dGg9ZnVuY3Rpb24ob3B0aW9ucyxjYil7dmFyIHVzZVBvc3RNZXNzYWdlPSEhb3B0aW9ucy51c2VQb3N0TWVzc2FnZSxwb3N0TWVzc2FnZURhdGFUeXBlPW9wdGlvbnMucG9zdE1lc3NhZ2VEYXRhVHlwZXx8ITEscG9zdE1lc3NhZ2VPcmlnaW49b3B0aW9ucy5wb3N0TWVzc2FnZU9yaWdpbnx8d2luZG93SGFuZGxlci5nZXRXaW5kb3coKS5vcmlnaW4sdGltZW91dD1vcHRpb25zLnRpbWVvdXQsX3RoaXM9dGhpcyxwYXJhbXM9b2JqZWN0SGVscGVyLm1lcmdlKHRoaXMuYmFzZU9wdGlvbnMsW1wiY2xpZW50SURcIixcInJlZGlyZWN0VXJpXCIsXCJyZXNwb25zZVR5cGVcIixcInNjb3BlXCIsXCJhdWRpZW5jZVwiLFwiX2NzcmZcIixcInN0YXRlXCIsXCJfaW50c3RhdGVcIixcIm5vbmNlXCJdKS53aXRoKG9wdGlvbnMpO3BhcmFtcy5yZXNwb25zZVR5cGU9cGFyYW1zLnJlc3BvbnNlVHlwZXx8XCJ0b2tlblwiLHBhcmFtcy5yZXNwb25zZU1vZGU9cGFyYW1zLnJlc3BvbnNlTW9kZXx8XCJmcmFnbWVudFwiLHBhcmFtcz10aGlzLnRyYW5zYWN0aW9uTWFuYWdlci5wcm9jZXNzKHBhcmFtcyksYXNzZXJ0LmNoZWNrKHBhcmFtcyx7dHlwZTpcIm9iamVjdFwiLG1lc3NhZ2U6XCJvcHRpb25zIHBhcmFtZXRlciBpcyBub3QgdmFsaWRcIn0pLGFzc2VydC5jaGVjayhjYix7dHlwZTpcImZ1bmN0aW9uXCIsbWVzc2FnZTpcImNiIHBhcmFtZXRlciBpcyBub3QgdmFsaWRcIn0pLHBhcmFtcy5wcm9tcHQ9XCJub25lXCIscGFyYW1zPW9iamVjdEhlbHBlci5ibGFja2xpc3QocGFyYW1zLFtcInVzZVBvc3RNZXNzYWdlXCIsXCJ0ZW5hbnRcIixcInBvc3RNZXNzYWdlRGF0YVR5cGVcIixcInBvc3RNZXNzYWdlT3JpZ2luXCJdKSxTaWxlbnRBdXRoZW50aWNhdGlvbkhhbmRsZXIuY3JlYXRlKHthdXRoZW50aWNhdGlvblVybDp0aGlzLmNsaWVudC5idWlsZEF1dGhvcml6ZVVybChwYXJhbXMpLHBvc3RNZXNzYWdlRGF0YVR5cGU6cG9zdE1lc3NhZ2VEYXRhVHlwZSxwb3N0TWVzc2FnZU9yaWdpbjpwb3N0TWVzc2FnZU9yaWdpbix0aW1lb3V0OnRpbWVvdXR9KS5sb2dpbih1c2VQb3N0TWVzc2FnZSxmdW5jdGlvbihlcnIsaGFzaCl7aWYoXCJvYmplY3RcIj09dHlwZW9mIGhhc2gpcmV0dXJuIGNiKGVycixoYXNoKTtfdGhpcy5wYXJzZUhhc2goe2hhc2g6aGFzaH0sY2IpfSl9LFdlYkF1dGgucHJvdG90eXBlLmNoZWNrU2Vzc2lvbj1mdW5jdGlvbihvcHRpb25zLGNiKXt2YXIgcGFyYW1zPW9iamVjdEhlbHBlci5tZXJnZSh0aGlzLmJhc2VPcHRpb25zLFtcImNsaWVudElEXCIsXCJyZXNwb25zZVR5cGVcIixcInJlZGlyZWN0VXJpXCIsXCJzY29wZVwiLFwiYXVkaWVuY2VcIixcIl9jc3JmXCIsXCJzdGF0ZVwiLFwiX2ludHN0YXRlXCIsXCJub25jZVwiXSkud2l0aChvcHRpb25zKTtyZXR1cm5cImNvZGVcIj09PXBhcmFtcy5yZXNwb25zZVR5cGU/Y2Ioe2Vycm9yOlwiZXJyb3JcIixlcnJvcl9kZXNjcmlwdGlvbjpcInJlc3BvbnNlVHlwZSBjYW4ndCBiZSBgY29kZWBcIn0pOihvcHRpb25zLm5vbmNlfHwocGFyYW1zPXRoaXMudHJhbnNhY3Rpb25NYW5hZ2VyLnByb2Nlc3MocGFyYW1zKSkscGFyYW1zLnJlZGlyZWN0VXJpPyhhc3NlcnQuY2hlY2socGFyYW1zLHt0eXBlOlwib2JqZWN0XCIsbWVzc2FnZTpcIm9wdGlvbnMgcGFyYW1ldGVyIGlzIG5vdCB2YWxpZFwifSksYXNzZXJ0LmNoZWNrKGNiLHt0eXBlOlwiZnVuY3Rpb25cIixtZXNzYWdlOlwiY2IgcGFyYW1ldGVyIGlzIG5vdCB2YWxpZFwifSkscGFyYW1zPW9iamVjdEhlbHBlci5ibGFja2xpc3QocGFyYW1zLFtcInVzZVBvc3RNZXNzYWdlXCIsXCJ0ZW5hbnRcIixcInBvc3RNZXNzYWdlRGF0YVR5cGVcIl0pLHZvaWQgdGhpcy53ZWJNZXNzYWdlSGFuZGxlci5ydW4ocGFyYW1zLGNiKSk6Y2Ioe2Vycm9yOlwiZXJyb3JcIixlcnJvcl9kZXNjcmlwdGlvbjpcInJlZGlyZWN0VXJpIGNhbid0IGJlIGVtcHR5XCJ9KSl9LFdlYkF1dGgucHJvdG90eXBlLmNoYW5nZVBhc3N3b3JkPWZ1bmN0aW9uKG9wdGlvbnMsY2Ipe3JldHVybiB0aGlzLmNsaWVudC5kYkNvbm5lY3Rpb24uY2hhbmdlUGFzc3dvcmQob3B0aW9ucyxjYil9LFdlYkF1dGgucHJvdG90eXBlLnBhc3N3b3JkbGVzc1N0YXJ0PWZ1bmN0aW9uKG9wdGlvbnMsY2Ipe3ZhciBhdXRoUGFyYW1zPW9iamVjdEhlbHBlci5tZXJnZSh0aGlzLmJhc2VPcHRpb25zLFtcInJlc3BvbnNlVHlwZVwiLFwicmVzcG9uc2VNb2RlXCIsXCJyZWRpcmVjdFVyaVwiLFwic2NvcGVcIixcImF1ZGllbmNlXCIsXCJfY3NyZlwiLFwic3RhdGVcIixcIl9pbnRzdGF0ZVwiLFwibm9uY2VcIl0pLndpdGgob3B0aW9ucy5hdXRoUGFyYW1zKTtyZXR1cm4gb3B0aW9ucy5hdXRoUGFyYW1zPXRoaXMudHJhbnNhY3Rpb25NYW5hZ2VyLnByb2Nlc3MoYXV0aFBhcmFtcyksdGhpcy5jbGllbnQucGFzc3dvcmRsZXNzLnN0YXJ0KG9wdGlvbnMsY2IpfSxXZWJBdXRoLnByb3RvdHlwZS5zaWdudXA9ZnVuY3Rpb24ob3B0aW9ucyxjYil7cmV0dXJuIHRoaXMuY2xpZW50LmRiQ29ubmVjdGlvbi5zaWdudXAob3B0aW9ucyxjYil9LFdlYkF1dGgucHJvdG90eXBlLmF1dGhvcml6ZT1mdW5jdGlvbihvcHRpb25zKXt2YXIgcGFyYW1zPW9iamVjdEhlbHBlci5tZXJnZSh0aGlzLmJhc2VPcHRpb25zLFtcImNsaWVudElEXCIsXCJyZXNwb25zZVR5cGVcIixcInJlc3BvbnNlTW9kZVwiLFwicmVkaXJlY3RVcmlcIixcInNjb3BlXCIsXCJhdWRpZW5jZVwiLFwiX2NzcmZcIixcInN0YXRlXCIsXCJfaW50c3RhdGVcIixcIm5vbmNlXCJdKS53aXRoKG9wdGlvbnMpO2Fzc2VydC5jaGVjayhwYXJhbXMse3R5cGU6XCJvYmplY3RcIixtZXNzYWdlOlwib3B0aW9ucyBwYXJhbWV0ZXIgaXMgbm90IHZhbGlkXCJ9LHtyZXNwb25zZVR5cGU6e3R5cGU6XCJzdHJpbmdcIixtZXNzYWdlOlwicmVzcG9uc2VUeXBlIG9wdGlvbiBpcyByZXF1aXJlZFwifX0pLChwYXJhbXM9dGhpcy50cmFuc2FjdGlvbk1hbmFnZXIucHJvY2VzcyhwYXJhbXMpKS5zY29wZT1wYXJhbXMuc2NvcGV8fFwib3BlbmlkIHByb2ZpbGUgZW1haWxcIix3aW5kb3dIYW5kbGVyLnJlZGlyZWN0KHRoaXMuY2xpZW50LmJ1aWxkQXV0aG9yaXplVXJsKHBhcmFtcykpfSxXZWJBdXRoLnByb3RvdHlwZS5zaWdudXBBbmRBdXRob3JpemU9ZnVuY3Rpb24ob3B0aW9ucyxjYil7dmFyIF90aGlzPXRoaXM7cmV0dXJuIHRoaXMuY2xpZW50LmRiQ29ubmVjdGlvbi5zaWdudXAob2JqZWN0SGVscGVyLmJsYWNrbGlzdChvcHRpb25zLFtcInBvcHVwSGFuZGxlclwiXSksZnVuY3Rpb24oZXJyKXtpZihlcnIpcmV0dXJuIGNiKGVycik7b3B0aW9ucy5yZWFsbT1vcHRpb25zLmNvbm5lY3Rpb24sb3B0aW9ucy51c2VybmFtZXx8KG9wdGlvbnMudXNlcm5hbWU9b3B0aW9ucy5lbWFpbCksX3RoaXMuY2xpZW50LmxvZ2luKG9wdGlvbnMsY2IpfSl9LFdlYkF1dGgucHJvdG90eXBlLmxvZ2luPWZ1bmN0aW9uKG9wdGlvbnMsY2Ipe3ZhciBwYXJhbXM9b2JqZWN0SGVscGVyLm1lcmdlKHRoaXMuYmFzZU9wdGlvbnMsW1wiY2xpZW50SURcIixcInJlc3BvbnNlVHlwZVwiLFwicmVkaXJlY3RVcmlcIixcInNjb3BlXCIsXCJhdWRpZW5jZVwiLFwiX2NzcmZcIixcInN0YXRlXCIsXCJfaW50c3RhdGVcIixcIm5vbmNlXCJdKS53aXRoKG9wdGlvbnMpO3BhcmFtcz10aGlzLnRyYW5zYWN0aW9uTWFuYWdlci5wcm9jZXNzKHBhcmFtcyksd2luZG93SGFuZGxlci5nZXRXaW5kb3coKS5sb2NhdGlvbi5ob3N0PT09dGhpcy5iYXNlT3B0aW9ucy5kb21haW4/KHBhcmFtcy5jb25uZWN0aW9uPXBhcmFtcy5yZWFsbSxkZWxldGUgcGFyYW1zLnJlYWxtLHRoaXMuX3VuaXZlcnNhbExvZ2luLmxvZ2luKHBhcmFtcyxjYikpOnRoaXMuY3Jvc3NPcmlnaW5BdXRoZW50aWNhdGlvbi5sb2dpbihwYXJhbXMsY2IpfSxXZWJBdXRoLnByb3RvdHlwZS5wYXNzd29yZGxlc3NMb2dpbj1mdW5jdGlvbihvcHRpb25zLGNiKXt2YXIgcGFyYW1zPW9iamVjdEhlbHBlci5tZXJnZSh0aGlzLmJhc2VPcHRpb25zLFtcImNsaWVudElEXCIsXCJyZXNwb25zZVR5cGVcIixcInJlZGlyZWN0VXJpXCIsXCJzY29wZVwiLFwiYXVkaWVuY2VcIixcIl9jc3JmXCIsXCJzdGF0ZVwiLFwiX2ludHN0YXRlXCIsXCJub25jZVwiXSkud2l0aChvcHRpb25zKTtpZihwYXJhbXM9dGhpcy50cmFuc2FjdGlvbk1hbmFnZXIucHJvY2VzcyhwYXJhbXMpLHdpbmRvd0hhbmRsZXIuZ2V0V2luZG93KCkubG9jYXRpb24uaG9zdD09PXRoaXMuYmFzZU9wdGlvbnMuZG9tYWluKXRoaXMucGFzc3dvcmRsZXNzVmVyaWZ5KHBhcmFtcyxjYik7ZWxzZXt2YXIgY3Jvc3NPcmlnaW5PcHRpb25zPW9iamVjdEhlbHBlci5leHRlbmQoe2NyZWRlbnRpYWxUeXBlOlwiaHR0cDovL2F1dGgwLmNvbS9vYXV0aC9ncmFudC10eXBlL3Bhc3N3b3JkbGVzcy9vdHBcIixyZWFsbTpwYXJhbXMuY29ubmVjdGlvbix1c2VybmFtZTpwYXJhbXMuZW1haWx8fHBhcmFtcy5waG9uZU51bWJlcixvdHA6cGFyYW1zLnZlcmlmaWNhdGlvbkNvZGV9LG9iamVjdEhlbHBlci5ibGFja2xpc3QocGFyYW1zLFtcImNvbm5lY3Rpb25cIixcImVtYWlsXCIsXCJwaG9uZU51bWJlclwiLFwidmVyaWZpY2F0aW9uQ29kZVwiXSkpO3RoaXMuY3Jvc3NPcmlnaW5BdXRoZW50aWNhdGlvbi5sb2dpbihjcm9zc09yaWdpbk9wdGlvbnMsY2IpfX0sV2ViQXV0aC5wcm90b3R5cGUuY3Jvc3NPcmlnaW5BdXRoZW50aWNhdGlvbkNhbGxiYWNrPWZ1bmN0aW9uKCl7dGhpcy5jcm9zc09yaWdpblZlcmlmaWNhdGlvbigpfSxXZWJBdXRoLnByb3RvdHlwZS5jcm9zc09yaWdpblZlcmlmaWNhdGlvbj1mdW5jdGlvbigpe3RoaXMuY3Jvc3NPcmlnaW5BdXRoZW50aWNhdGlvbi5jYWxsYmFjaygpfSxXZWJBdXRoLnByb3RvdHlwZS5sb2dvdXQ9ZnVuY3Rpb24ob3B0aW9ucyl7d2luZG93SGFuZGxlci5yZWRpcmVjdCh0aGlzLmNsaWVudC5idWlsZExvZ291dFVybChvcHRpb25zKSl9LFdlYkF1dGgucHJvdG90eXBlLnBhc3N3b3JkbGVzc1ZlcmlmeT1mdW5jdGlvbihvcHRpb25zLGNiKXt2YXIgX3RoaXM9dGhpcyxwYXJhbXM9b2JqZWN0SGVscGVyLm1lcmdlKHRoaXMuYmFzZU9wdGlvbnMsW1wiY2xpZW50SURcIixcInJlc3BvbnNlVHlwZVwiLFwicmVzcG9uc2VNb2RlXCIsXCJyZWRpcmVjdFVyaVwiLFwic2NvcGVcIixcImF1ZGllbmNlXCIsXCJfY3NyZlwiLFwic3RhdGVcIixcIl9pbnRzdGF0ZVwiLFwibm9uY2VcIl0pLndpdGgob3B0aW9ucyk7cmV0dXJuIGFzc2VydC5jaGVjayhwYXJhbXMse3R5cGU6XCJvYmplY3RcIixtZXNzYWdlOlwib3B0aW9ucyBwYXJhbWV0ZXIgaXMgbm90IHZhbGlkXCJ9LHtyZXNwb25zZVR5cGU6e3R5cGU6XCJzdHJpbmdcIixtZXNzYWdlOlwicmVzcG9uc2VUeXBlIG9wdGlvbiBpcyByZXF1aXJlZFwifX0pLHBhcmFtcz10aGlzLnRyYW5zYWN0aW9uTWFuYWdlci5wcm9jZXNzKHBhcmFtcyksdGhpcy5jbGllbnQucGFzc3dvcmRsZXNzLnZlcmlmeShwYXJhbXMsZnVuY3Rpb24oZXJyKXtyZXR1cm4gZXJyP2NiKGVycik6d2luZG93SGFuZGxlci5yZWRpcmVjdChfdGhpcy5jbGllbnQucGFzc3dvcmRsZXNzLmJ1aWxkVmVyaWZ5VXJsKHBhcmFtcykpfSl9LFBhc3N3b3JkbGVzc0F1dGhlbnRpY2F0aW9uLnByb3RvdHlwZS5idWlsZFZlcmlmeVVybD1mdW5jdGlvbihvcHRpb25zKXt2YXIgcGFyYW1zLHFTdHJpbmc7cmV0dXJuIGFzc2VydC5jaGVjayhvcHRpb25zLHt0eXBlOlwib2JqZWN0XCIsbWVzc2FnZTpcIm9wdGlvbnMgcGFyYW1ldGVyIGlzIG5vdCB2YWxpZFwifSx7Y29ubmVjdGlvbjp7dHlwZTpcInN0cmluZ1wiLG1lc3NhZ2U6XCJjb25uZWN0aW9uIG9wdGlvbiBpcyByZXF1aXJlZFwifSx2ZXJpZmljYXRpb25Db2RlOnt0eXBlOlwic3RyaW5nXCIsbWVzc2FnZTpcInZlcmlmaWNhdGlvbkNvZGUgb3B0aW9uIGlzIHJlcXVpcmVkXCJ9LHBob25lTnVtYmVyOntvcHRpb25hbDohMSx0eXBlOlwic3RyaW5nXCIsbWVzc2FnZTpcInBob25lTnVtYmVyIG9wdGlvbiBpcyByZXF1aXJlZFwiLGNvbmRpdGlvbjpmdW5jdGlvbihvKXtyZXR1cm4hby5lbWFpbH19LGVtYWlsOntvcHRpb25hbDohMSx0eXBlOlwic3RyaW5nXCIsbWVzc2FnZTpcImVtYWlsIG9wdGlvbiBpcyByZXF1aXJlZFwiLGNvbmRpdGlvbjpmdW5jdGlvbihvKXtyZXR1cm4hby5waG9uZU51bWJlcn19fSkscGFyYW1zPW9iamVjdEhlbHBlci5tZXJnZSh0aGlzLmJhc2VPcHRpb25zLFtcImNsaWVudElEXCIsXCJyZXNwb25zZVR5cGVcIixcInJlc3BvbnNlTW9kZVwiLFwicmVkaXJlY3RVcmlcIixcInNjb3BlXCIsXCJhdWRpZW5jZVwiLFwiX2NzcmZcIixcInN0YXRlXCIsXCJfaW50c3RhdGVcIixcInByb3RvY29sXCIsXCJub25jZVwiXSkud2l0aChvcHRpb25zKSx0aGlzLmJhc2VPcHRpb25zLl9zZW5kVGVsZW1ldHJ5JiYocGFyYW1zLmF1dGgwQ2xpZW50PXRoaXMucmVxdWVzdC5nZXRUZWxlbWV0cnlEYXRhKCkpLHBhcmFtcz1vYmplY3RIZWxwZXIudG9TbmFrZUNhc2UocGFyYW1zLFtcImF1dGgwQ2xpZW50XCJdKSxxU3RyaW5nPWxpYi5zdHJpbmdpZnkocGFyYW1zKSx1cmxKb2luKHRoaXMuYmFzZU9wdGlvbnMucm9vdFVybCxcInBhc3N3b3JkbGVzc1wiLFwidmVyaWZ5X3JlZGlyZWN0XCIsXCI/XCIrcVN0cmluZyl9LFBhc3N3b3JkbGVzc0F1dGhlbnRpY2F0aW9uLnByb3RvdHlwZS5zdGFydD1mdW5jdGlvbihvcHRpb25zLGNiKXt2YXIgdXJsLGJvZHk7cmV0dXJuIGFzc2VydC5jaGVjayhvcHRpb25zLHt0eXBlOlwib2JqZWN0XCIsbWVzc2FnZTpcIm9wdGlvbnMgcGFyYW1ldGVyIGlzIG5vdCB2YWxpZFwifSx7Y29ubmVjdGlvbjp7dHlwZTpcInN0cmluZ1wiLG1lc3NhZ2U6XCJjb25uZWN0aW9uIG9wdGlvbiBpcyByZXF1aXJlZFwifSxzZW5kOnt0eXBlOlwic3RyaW5nXCIsbWVzc2FnZTpcInNlbmQgb3B0aW9uIGlzIHJlcXVpcmVkXCIsdmFsdWVzOltcImxpbmtcIixcImNvZGVcIl0sdmFsdWVfbWVzc2FnZTpcInNlbmQgaXMgbm90IHZhbGlkIChbbGluaywgY29kZV0pXCJ9LHBob25lTnVtYmVyOntvcHRpb25hbDohMCx0eXBlOlwic3RyaW5nXCIsbWVzc2FnZTpcInBob25lTnVtYmVyIG9wdGlvbiBpcyByZXF1aXJlZFwiLGNvbmRpdGlvbjpmdW5jdGlvbihvKXtyZXR1cm5cImNvZGVcIj09PW8uc2VuZHx8IW8uZW1haWx9fSxlbWFpbDp7b3B0aW9uYWw6ITAsdHlwZTpcInN0cmluZ1wiLG1lc3NhZ2U6XCJlbWFpbCBvcHRpb24gaXMgcmVxdWlyZWRcIixjb25kaXRpb246ZnVuY3Rpb24obyl7cmV0dXJuXCJsaW5rXCI9PT1vLnNlbmR8fCFvLnBob25lTnVtYmVyfX0sYXV0aFBhcmFtczp7b3B0aW9uYWw6ITAsdHlwZTpcIm9iamVjdFwiLG1lc3NhZ2U6XCJhdXRoUGFyYW1zIG9wdGlvbiBpcyByZXF1aXJlZFwifX0pLGFzc2VydC5jaGVjayhjYix7dHlwZTpcImZ1bmN0aW9uXCIsbWVzc2FnZTpcImNiIHBhcmFtZXRlciBpcyBub3QgdmFsaWRcIn0pLHVybD11cmxKb2luKHRoaXMuYmFzZU9wdGlvbnMucm9vdFVybCxcInBhc3N3b3JkbGVzc1wiLFwic3RhcnRcIiksKGJvZHk9b2JqZWN0SGVscGVyLm1lcmdlKHRoaXMuYmFzZU9wdGlvbnMsW1wiY2xpZW50SURcIixcInJlc3BvbnNlVHlwZVwiLFwicmVkaXJlY3RVcmlcIixcInNjb3BlXCJdKS53aXRoKG9wdGlvbnMpKS5zY29wZSYmKGJvZHkuYXV0aFBhcmFtcz1ib2R5LmF1dGhQYXJhbXN8fHt9LGJvZHkuYXV0aFBhcmFtcy5zY29wZT1ib2R5LnNjb3BlKSxib2R5LnJlZGlyZWN0VXJpJiYoYm9keS5hdXRoUGFyYW1zPWJvZHkuYXV0aFBhcmFtc3x8e30sYm9keS5hdXRoUGFyYW1zLnJlZGlyZWN0X3VyaT1ib2R5LnJlZGlyZWN0VXJpKSxib2R5LnJlc3BvbnNlVHlwZSYmKGJvZHkuYXV0aFBhcmFtcz1ib2R5LmF1dGhQYXJhbXN8fHt9LGJvZHkuYXV0aFBhcmFtcy5yZXNwb25zZV90eXBlPWJvZHkucmVzcG9uc2VUeXBlKSxkZWxldGUgYm9keS5yZWRpcmVjdFVyaSxkZWxldGUgYm9keS5yZXNwb25zZVR5cGUsZGVsZXRlIGJvZHkuc2NvcGUsYm9keT1vYmplY3RIZWxwZXIudG9TbmFrZUNhc2UoYm9keSxbXCJhdXRoMENsaWVudFwiLFwiYXV0aFBhcmFtc1wiXSksdGhpcy5yZXF1ZXN0LnBvc3QodXJsKS5zZW5kKGJvZHkpLmVuZCh3cmFwQ2FsbGJhY2soY2IpKX0sUGFzc3dvcmRsZXNzQXV0aGVudGljYXRpb24ucHJvdG90eXBlLnZlcmlmeT1mdW5jdGlvbihvcHRpb25zLGNiKXt2YXIgdXJsLGNsZWFuT3B0aW9uO3JldHVybiBhc3NlcnQuY2hlY2sob3B0aW9ucyx7dHlwZTpcIm9iamVjdFwiLG1lc3NhZ2U6XCJvcHRpb25zIHBhcmFtZXRlciBpcyBub3QgdmFsaWRcIn0se2Nvbm5lY3Rpb246e3R5cGU6XCJzdHJpbmdcIixtZXNzYWdlOlwiY29ubmVjdGlvbiBvcHRpb24gaXMgcmVxdWlyZWRcIn0sdmVyaWZpY2F0aW9uQ29kZTp7dHlwZTpcInN0cmluZ1wiLG1lc3NhZ2U6XCJ2ZXJpZmljYXRpb25Db2RlIG9wdGlvbiBpcyByZXF1aXJlZFwifSxwaG9uZU51bWJlcjp7b3B0aW9uYWw6ITEsdHlwZTpcInN0cmluZ1wiLG1lc3NhZ2U6XCJwaG9uZU51bWJlciBvcHRpb24gaXMgcmVxdWlyZWRcIixjb25kaXRpb246ZnVuY3Rpb24obyl7cmV0dXJuIW8uZW1haWx9fSxlbWFpbDp7b3B0aW9uYWw6ITEsdHlwZTpcInN0cmluZ1wiLG1lc3NhZ2U6XCJlbWFpbCBvcHRpb24gaXMgcmVxdWlyZWRcIixjb25kaXRpb246ZnVuY3Rpb24obyl7cmV0dXJuIW8ucGhvbmVOdW1iZXJ9fX0pLGFzc2VydC5jaGVjayhjYix7dHlwZTpcImZ1bmN0aW9uXCIsbWVzc2FnZTpcImNiIHBhcmFtZXRlciBpcyBub3QgdmFsaWRcIn0pLGNsZWFuT3B0aW9uPW9iamVjdEhlbHBlci5waWNrKG9wdGlvbnMsW1wiY29ubmVjdGlvblwiLFwidmVyaWZpY2F0aW9uQ29kZVwiLFwicGhvbmVOdW1iZXJcIixcImVtYWlsXCIsXCJhdXRoMENsaWVudFwiXSksY2xlYW5PcHRpb249b2JqZWN0SGVscGVyLnRvU25ha2VDYXNlKGNsZWFuT3B0aW9uLFtcImF1dGgwQ2xpZW50XCJdKSx1cmw9dXJsSm9pbih0aGlzLmJhc2VPcHRpb25zLnJvb3RVcmwsXCJwYXNzd29yZGxlc3NcIixcInZlcmlmeVwiKSx0aGlzLnJlcXVlc3QucG9zdCh1cmwpLnNlbmQoY2xlYW5PcHRpb24pLmVuZCh3cmFwQ2FsbGJhY2soY2IpKX0sREJDb25uZWN0aW9uLnByb3RvdHlwZS5zaWdudXA9ZnVuY3Rpb24ob3B0aW9ucyxjYil7dmFyIHVybCxib2R5LG1ldGFkYXRhO3JldHVybiBhc3NlcnQuY2hlY2sob3B0aW9ucyx7dHlwZTpcIm9iamVjdFwiLG1lc3NhZ2U6XCJvcHRpb25zIHBhcmFtZXRlciBpcyBub3QgdmFsaWRcIn0se2Nvbm5lY3Rpb246e3R5cGU6XCJzdHJpbmdcIixtZXNzYWdlOlwiY29ubmVjdGlvbiBvcHRpb24gaXMgcmVxdWlyZWRcIn0sZW1haWw6e3R5cGU6XCJzdHJpbmdcIixtZXNzYWdlOlwiZW1haWwgb3B0aW9uIGlzIHJlcXVpcmVkXCJ9LHBhc3N3b3JkOnt0eXBlOlwic3RyaW5nXCIsbWVzc2FnZTpcInBhc3N3b3JkIG9wdGlvbiBpcyByZXF1aXJlZFwifX0pLGFzc2VydC5jaGVjayhjYix7dHlwZTpcImZ1bmN0aW9uXCIsbWVzc2FnZTpcImNiIHBhcmFtZXRlciBpcyBub3QgdmFsaWRcIn0pLHVybD11cmxKb2luKHRoaXMuYmFzZU9wdGlvbnMucm9vdFVybCxcImRiY29ubmVjdGlvbnNcIixcInNpZ251cFwiKSxtZXRhZGF0YT0oYm9keT1vYmplY3RIZWxwZXIubWVyZ2UodGhpcy5iYXNlT3B0aW9ucyxbXCJjbGllbnRJRFwiXSkud2l0aChvcHRpb25zKSkudXNlcl9tZXRhZGF0YXx8Ym9keS51c2VyTWV0YWRhdGEsYm9keT1vYmplY3RIZWxwZXIuYmxhY2tsaXN0KGJvZHksW1wic2NvcGVcIixcInVzZXJNZXRhZGF0YVwiLFwidXNlcl9tZXRhZGF0YVwiXSksYm9keT1vYmplY3RIZWxwZXIudG9TbmFrZUNhc2UoYm9keSxbXCJhdXRoMENsaWVudFwiXSksbWV0YWRhdGEmJihib2R5LnVzZXJfbWV0YWRhdGE9bWV0YWRhdGEpLHRoaXMucmVxdWVzdC5wb3N0KHVybCkuc2VuZChib2R5KS5lbmQod3JhcENhbGxiYWNrKGNiKSl9LERCQ29ubmVjdGlvbi5wcm90b3R5cGUuY2hhbmdlUGFzc3dvcmQ9ZnVuY3Rpb24ob3B0aW9ucyxjYil7dmFyIHVybCxib2R5O3JldHVybiBhc3NlcnQuY2hlY2sob3B0aW9ucyx7dHlwZTpcIm9iamVjdFwiLG1lc3NhZ2U6XCJvcHRpb25zIHBhcmFtZXRlciBpcyBub3QgdmFsaWRcIn0se2Nvbm5lY3Rpb246e3R5cGU6XCJzdHJpbmdcIixtZXNzYWdlOlwiY29ubmVjdGlvbiBvcHRpb24gaXMgcmVxdWlyZWRcIn0sZW1haWw6e3R5cGU6XCJzdHJpbmdcIixtZXNzYWdlOlwiZW1haWwgb3B0aW9uIGlzIHJlcXVpcmVkXCJ9fSksYXNzZXJ0LmNoZWNrKGNiLHt0eXBlOlwiZnVuY3Rpb25cIixtZXNzYWdlOlwiY2IgcGFyYW1ldGVyIGlzIG5vdCB2YWxpZFwifSksdXJsPXVybEpvaW4odGhpcy5iYXNlT3B0aW9ucy5yb290VXJsLFwiZGJjb25uZWN0aW9uc1wiLFwiY2hhbmdlX3Bhc3N3b3JkXCIpLGJvZHk9b2JqZWN0SGVscGVyLm1lcmdlKHRoaXMuYmFzZU9wdGlvbnMsW1wiY2xpZW50SURcIl0pLndpdGgob3B0aW9ucyxbXCJlbWFpbFwiLFwiY29ubmVjdGlvblwiXSksYm9keT1vYmplY3RIZWxwZXIudG9TbmFrZUNhc2UoYm9keSxbXCJhdXRoMENsaWVudFwiXSksdGhpcy5yZXF1ZXN0LnBvc3QodXJsKS5zZW5kKGJvZHkpLmVuZCh3cmFwQ2FsbGJhY2soY2IpKX0sQXV0aGVudGljYXRpb24ucHJvdG90eXBlLmJ1aWxkQXV0aG9yaXplVXJsPWZ1bmN0aW9uKG9wdGlvbnMpe3ZhciBwYXJhbXMscVN0cmluZztyZXR1cm4gYXNzZXJ0LmNoZWNrKG9wdGlvbnMse3R5cGU6XCJvYmplY3RcIixtZXNzYWdlOlwib3B0aW9ucyBwYXJhbWV0ZXIgaXMgbm90IHZhbGlkXCJ9KSxwYXJhbXM9b2JqZWN0SGVscGVyLm1lcmdlKHRoaXMuYmFzZU9wdGlvbnMsW1wiY2xpZW50SURcIixcInJlc3BvbnNlVHlwZVwiLFwicmVzcG9uc2VNb2RlXCIsXCJyZWRpcmVjdFVyaVwiLFwic2NvcGVcIixcImF1ZGllbmNlXCJdKS53aXRoKG9wdGlvbnMpLGFzc2VydC5jaGVjayhwYXJhbXMse3R5cGU6XCJvYmplY3RcIixtZXNzYWdlOlwib3B0aW9ucyBwYXJhbWV0ZXIgaXMgbm90IHZhbGlkXCJ9LHtjbGllbnRJRDp7dHlwZTpcInN0cmluZ1wiLG1lc3NhZ2U6XCJjbGllbnRJRCBvcHRpb24gaXMgcmVxdWlyZWRcIn0scmVkaXJlY3RVcmk6e29wdGlvbmFsOiEwLHR5cGU6XCJzdHJpbmdcIixtZXNzYWdlOlwicmVkaXJlY3RVcmkgb3B0aW9uIGlzIHJlcXVpcmVkXCJ9LHJlc3BvbnNlVHlwZTp7dHlwZTpcInN0cmluZ1wiLG1lc3NhZ2U6XCJyZXNwb25zZVR5cGUgb3B0aW9uIGlzIHJlcXVpcmVkXCJ9LG5vbmNlOnt0eXBlOlwic3RyaW5nXCIsbWVzc2FnZTpcIm5vbmNlIG9wdGlvbiBpcyByZXF1aXJlZFwiLGNvbmRpdGlvbjpmdW5jdGlvbihvKXtyZXR1cm4tMT09PW8ucmVzcG9uc2VUeXBlLmluZGV4T2YoXCJjb2RlXCIpJiYtMSE9PW8ucmVzcG9uc2VUeXBlLmluZGV4T2YoXCJpZF90b2tlblwiKX19LHNjb3BlOntvcHRpb25hbDohMCx0eXBlOlwic3RyaW5nXCIsbWVzc2FnZTpcInNjb3BlIG9wdGlvbiBpcyByZXF1aXJlZFwifSxhdWRpZW5jZTp7b3B0aW9uYWw6ITAsdHlwZTpcInN0cmluZ1wiLG1lc3NhZ2U6XCJhdWRpZW5jZSBvcHRpb24gaXMgcmVxdWlyZWRcIn19KSx0aGlzLmJhc2VPcHRpb25zLl9zZW5kVGVsZW1ldHJ5JiYocGFyYW1zLmF1dGgwQ2xpZW50PXRoaXMucmVxdWVzdC5nZXRUZWxlbWV0cnlEYXRhKCkpLHBhcmFtcy5jb25uZWN0aW9uX3Njb3BlJiZhc3NlcnQuaXNBcnJheShwYXJhbXMuY29ubmVjdGlvbl9zY29wZSkmJihwYXJhbXMuY29ubmVjdGlvbl9zY29wZT1wYXJhbXMuY29ubmVjdGlvbl9zY29wZS5qb2luKFwiLFwiKSkscGFyYW1zPW9iamVjdEhlbHBlci5ibGFja2xpc3QocGFyYW1zLFtcInVzZXJuYW1lXCIsXCJwb3B1cE9wdGlvbnNcIixcImRvbWFpblwiLFwidGVuYW50XCIsXCJ0aW1lb3V0XCJdKSxwYXJhbXM9b2JqZWN0SGVscGVyLnRvU25ha2VDYXNlKHBhcmFtcyxbXCJhdXRoMENsaWVudFwiXSkscGFyYW1zPXBhcmFtZXRlcnNXaGl0ZWxpc3Qub2F1dGhBdXRob3JpemVQYXJhbXModGhpcy53YXJuLHBhcmFtcykscVN0cmluZz1saWIuc3RyaW5naWZ5KHBhcmFtcyksdXJsSm9pbih0aGlzLmJhc2VPcHRpb25zLnJvb3RVcmwsXCJhdXRob3JpemVcIixcIj9cIitxU3RyaW5nKX0sQXV0aGVudGljYXRpb24ucHJvdG90eXBlLmJ1aWxkTG9nb3V0VXJsPWZ1bmN0aW9uKG9wdGlvbnMpe3ZhciBwYXJhbXMscVN0cmluZztyZXR1cm4gYXNzZXJ0LmNoZWNrKG9wdGlvbnMse29wdGlvbmFsOiEwLHR5cGU6XCJvYmplY3RcIixtZXNzYWdlOlwib3B0aW9ucyBwYXJhbWV0ZXIgaXMgbm90IHZhbGlkXCJ9KSxwYXJhbXM9b2JqZWN0SGVscGVyLm1lcmdlKHRoaXMuYmFzZU9wdGlvbnMsW1wiY2xpZW50SURcIl0pLndpdGgob3B0aW9uc3x8e30pLHRoaXMuYmFzZU9wdGlvbnMuX3NlbmRUZWxlbWV0cnkmJihwYXJhbXMuYXV0aDBDbGllbnQ9dGhpcy5yZXF1ZXN0LmdldFRlbGVtZXRyeURhdGEoKSkscGFyYW1zPW9iamVjdEhlbHBlci50b1NuYWtlQ2FzZShwYXJhbXMsW1wiYXV0aDBDbGllbnRcIixcInJldHVyblRvXCJdKSxxU3RyaW5nPWxpYi5zdHJpbmdpZnkob2JqZWN0SGVscGVyLmJsYWNrbGlzdChwYXJhbXMsW1wiZmVkZXJhdGVkXCJdKSksb3B0aW9ucyYmdm9pZCAwIT09b3B0aW9ucy5mZWRlcmF0ZWQmJiExIT09b3B0aW9ucy5mZWRlcmF0ZWQmJlwiZmFsc2VcIiE9PW9wdGlvbnMuZmVkZXJhdGVkJiYocVN0cmluZys9XCImZmVkZXJhdGVkXCIpLHVybEpvaW4odGhpcy5iYXNlT3B0aW9ucy5yb290VXJsLFwidjJcIixcImxvZ291dFwiLFwiP1wiK3FTdHJpbmcpfSxBdXRoZW50aWNhdGlvbi5wcm90b3R5cGUubG9naW5XaXRoRGVmYXVsdERpcmVjdG9yeT1mdW5jdGlvbihvcHRpb25zLGNiKXtyZXR1cm4gYXNzZXJ0LmNoZWNrKG9wdGlvbnMse3R5cGU6XCJvYmplY3RcIixtZXNzYWdlOlwib3B0aW9ucyBwYXJhbWV0ZXIgaXMgbm90IHZhbGlkXCJ9LHt1c2VybmFtZTp7dHlwZTpcInN0cmluZ1wiLG1lc3NhZ2U6XCJ1c2VybmFtZSBvcHRpb24gaXMgcmVxdWlyZWRcIn0scGFzc3dvcmQ6e3R5cGU6XCJzdHJpbmdcIixtZXNzYWdlOlwicGFzc3dvcmQgb3B0aW9uIGlzIHJlcXVpcmVkXCJ9LHNjb3BlOntvcHRpb25hbDohMCx0eXBlOlwic3RyaW5nXCIsbWVzc2FnZTpcInNjb3BlIG9wdGlvbiBpcyByZXF1aXJlZFwifSxhdWRpZW5jZTp7b3B0aW9uYWw6ITAsdHlwZTpcInN0cmluZ1wiLG1lc3NhZ2U6XCJhdWRpZW5jZSBvcHRpb24gaXMgcmVxdWlyZWRcIn19KSxvcHRpb25zLmdyYW50VHlwZT1cInBhc3N3b3JkXCIsdGhpcy5vYXV0aFRva2VuKG9wdGlvbnMsY2IpfSxBdXRoZW50aWNhdGlvbi5wcm90b3R5cGUubG9naW49ZnVuY3Rpb24ob3B0aW9ucyxjYil7cmV0dXJuIGFzc2VydC5jaGVjayhvcHRpb25zLHt0eXBlOlwib2JqZWN0XCIsbWVzc2FnZTpcIm9wdGlvbnMgcGFyYW1ldGVyIGlzIG5vdCB2YWxpZFwifSx7dXNlcm5hbWU6e3R5cGU6XCJzdHJpbmdcIixtZXNzYWdlOlwidXNlcm5hbWUgb3B0aW9uIGlzIHJlcXVpcmVkXCJ9LHBhc3N3b3JkOnt0eXBlOlwic3RyaW5nXCIsbWVzc2FnZTpcInBhc3N3b3JkIG9wdGlvbiBpcyByZXF1aXJlZFwifSxyZWFsbTp7dHlwZTpcInN0cmluZ1wiLG1lc3NhZ2U6XCJyZWFsbSBvcHRpb24gaXMgcmVxdWlyZWRcIn0sc2NvcGU6e29wdGlvbmFsOiEwLHR5cGU6XCJzdHJpbmdcIixtZXNzYWdlOlwic2NvcGUgb3B0aW9uIGlzIHJlcXVpcmVkXCJ9LGF1ZGllbmNlOntvcHRpb25hbDohMCx0eXBlOlwic3RyaW5nXCIsbWVzc2FnZTpcImF1ZGllbmNlIG9wdGlvbiBpcyByZXF1aXJlZFwifX0pLG9wdGlvbnMuZ3JhbnRUeXBlPVwiaHR0cDovL2F1dGgwLmNvbS9vYXV0aC9ncmFudC10eXBlL3Bhc3N3b3JkLXJlYWxtXCIsdGhpcy5vYXV0aFRva2VuKG9wdGlvbnMsY2IpfSxBdXRoZW50aWNhdGlvbi5wcm90b3R5cGUub2F1dGhUb2tlbj1mdW5jdGlvbihvcHRpb25zLGNiKXt2YXIgdXJsLGJvZHk7cmV0dXJuIGFzc2VydC5jaGVjayhvcHRpb25zLHt0eXBlOlwib2JqZWN0XCIsbWVzc2FnZTpcIm9wdGlvbnMgcGFyYW1ldGVyIGlzIG5vdCB2YWxpZFwifSksYXNzZXJ0LmNoZWNrKGNiLHt0eXBlOlwiZnVuY3Rpb25cIixtZXNzYWdlOlwiY2IgcGFyYW1ldGVyIGlzIG5vdCB2YWxpZFwifSksdXJsPXVybEpvaW4odGhpcy5iYXNlT3B0aW9ucy5yb290VXJsLFwib2F1dGhcIixcInRva2VuXCIpLGJvZHk9b2JqZWN0SGVscGVyLm1lcmdlKHRoaXMuYmFzZU9wdGlvbnMsW1wiY2xpZW50SURcIixcInNjb3BlXCIsXCJhdWRpZW5jZVwiXSkud2l0aChvcHRpb25zKSxhc3NlcnQuY2hlY2soYm9keSx7dHlwZTpcIm9iamVjdFwiLG1lc3NhZ2U6XCJvcHRpb25zIHBhcmFtZXRlciBpcyBub3QgdmFsaWRcIn0se2NsaWVudElEOnt0eXBlOlwic3RyaW5nXCIsbWVzc2FnZTpcImNsaWVudElEIG9wdGlvbiBpcyByZXF1aXJlZFwifSxncmFudFR5cGU6e3R5cGU6XCJzdHJpbmdcIixtZXNzYWdlOlwiZ3JhbnRUeXBlIG9wdGlvbiBpcyByZXF1aXJlZFwifSxzY29wZTp7b3B0aW9uYWw6ITAsdHlwZTpcInN0cmluZ1wiLG1lc3NhZ2U6XCJzY29wZSBvcHRpb24gaXMgcmVxdWlyZWRcIn0sYXVkaWVuY2U6e29wdGlvbmFsOiEwLHR5cGU6XCJzdHJpbmdcIixtZXNzYWdlOlwiYXVkaWVuY2Ugb3B0aW9uIGlzIHJlcXVpcmVkXCJ9fSksYm9keT1vYmplY3RIZWxwZXIudG9TbmFrZUNhc2UoYm9keSxbXCJhdXRoMENsaWVudFwiXSksYm9keT1wYXJhbWV0ZXJzV2hpdGVsaXN0Lm9hdXRoVG9rZW5QYXJhbXModGhpcy53YXJuLGJvZHkpLHRoaXMucmVxdWVzdC5wb3N0KHVybCkuc2VuZChib2R5KS5lbmQod3JhcENhbGxiYWNrKGNiKSl9LEF1dGhlbnRpY2F0aW9uLnByb3RvdHlwZS5sb2dpbldpdGhSZXNvdXJjZU93bmVyPWZ1bmN0aW9uKG9wdGlvbnMsY2Ipe3ZhciB1cmwsYm9keTtyZXR1cm4gYXNzZXJ0LmNoZWNrKG9wdGlvbnMse3R5cGU6XCJvYmplY3RcIixtZXNzYWdlOlwib3B0aW9ucyBwYXJhbWV0ZXIgaXMgbm90IHZhbGlkXCJ9LHt1c2VybmFtZTp7dHlwZTpcInN0cmluZ1wiLG1lc3NhZ2U6XCJ1c2VybmFtZSBvcHRpb24gaXMgcmVxdWlyZWRcIn0scGFzc3dvcmQ6e3R5cGU6XCJzdHJpbmdcIixtZXNzYWdlOlwicGFzc3dvcmQgb3B0aW9uIGlzIHJlcXVpcmVkXCJ9LGNvbm5lY3Rpb246e3R5cGU6XCJzdHJpbmdcIixtZXNzYWdlOlwiY29ubmVjdGlvbiBvcHRpb24gaXMgcmVxdWlyZWRcIn0sc2NvcGU6e29wdGlvbmFsOiEwLHR5cGU6XCJzdHJpbmdcIixtZXNzYWdlOlwic2NvcGUgb3B0aW9uIGlzIHJlcXVpcmVkXCJ9fSksYXNzZXJ0LmNoZWNrKGNiLHt0eXBlOlwiZnVuY3Rpb25cIixtZXNzYWdlOlwiY2IgcGFyYW1ldGVyIGlzIG5vdCB2YWxpZFwifSksdXJsPXVybEpvaW4odGhpcy5iYXNlT3B0aW9ucy5yb290VXJsLFwib2F1dGhcIixcInJvXCIpLGJvZHk9b2JqZWN0SGVscGVyLm1lcmdlKHRoaXMuYmFzZU9wdGlvbnMsW1wiY2xpZW50SURcIixcInNjb3BlXCJdKS53aXRoKG9wdGlvbnMsW1widXNlcm5hbWVcIixcInBhc3N3b3JkXCIsXCJzY29wZVwiLFwiY29ubmVjdGlvblwiLFwiZGV2aWNlXCJdKSwoYm9keT1vYmplY3RIZWxwZXIudG9TbmFrZUNhc2UoYm9keSxbXCJhdXRoMENsaWVudFwiXSkpLmdyYW50X3R5cGU9Ym9keS5ncmFudF90eXBlfHxcInBhc3N3b3JkXCIsdGhpcy5yZXF1ZXN0LnBvc3QodXJsKS5zZW5kKGJvZHkpLmVuZCh3cmFwQ2FsbGJhY2soY2IpKX0sQXV0aGVudGljYXRpb24ucHJvdG90eXBlLmdldFNTT0RhdGE9ZnVuY3Rpb24od2l0aEFjdGl2ZURpcmVjdG9yaWVzLGNiKXtpZih0aGlzLmF1dGgwfHwodGhpcy5hdXRoMD1uZXcgV2ViQXV0aCh0aGlzLmJhc2VPcHRpb25zKSksd2luZG93SGFuZGxlci5nZXRXaW5kb3coKS5sb2NhdGlvbi5ob3N0PT09dGhpcy5iYXNlT3B0aW9ucy5kb21haW4pcmV0dXJuIHRoaXMuYXV0aDAuX3VuaXZlcnNhbExvZ2luLmdldFNTT0RhdGEod2l0aEFjdGl2ZURpcmVjdG9yaWVzLGNiKTtcImZ1bmN0aW9uXCI9PXR5cGVvZiB3aXRoQWN0aXZlRGlyZWN0b3JpZXMmJihjYj13aXRoQWN0aXZlRGlyZWN0b3JpZXMpLGFzc2VydC5jaGVjayhjYix7dHlwZTpcImZ1bmN0aW9uXCIsbWVzc2FnZTpcImNiIHBhcmFtZXRlciBpcyBub3QgdmFsaWRcIn0pO3ZhciBjbGllbnRJZD10aGlzLmJhc2VPcHRpb25zLmNsaWVudElELHNzb2RhdGFJbmZvcm1hdGlvbj10aGlzLnNzb2RhdGFTdG9yYWdlLmdldCgpfHx7fTt0aGlzLmF1dGgwLmNoZWNrU2Vzc2lvbih7cmVzcG9uc2VUeXBlOlwidG9rZW4gaWRfdG9rZW5cIixzY29wZTpcIm9wZW5pZCBwcm9maWxlIGVtYWlsXCIsY29ubmVjdGlvbjpzc29kYXRhSW5mb3JtYXRpb24ubGFzdFVzZWRDb25uZWN0aW9uLHRpbWVvdXQ6NWUzfSxmdW5jdGlvbihlcnIscmVzdWx0KXtyZXR1cm4gZXJyP1wibG9naW5fcmVxdWlyZWRcIj09PWVyci5lcnJvcj9jYihudWxsLHtzc286ITF9KTooXCJjb25zZW50X3JlcXVpcmVkXCI9PT1lcnIuZXJyb3ImJihlcnIuZXJyb3JfZGVzY3JpcHRpb249XCJDb25zZW50IHJlcXVpcmVkLiBXaGVuIHVzaW5nIGBnZXRTU09EYXRhYCwgdGhlIHVzZXIgaGFzIHRvIGJlIGF1dGhlbnRpY2F0ZWQgd2l0aCB0aGUgZm9sbG93aW5nIHNjb3BlOiBgb3BlbmlkIHByb2ZpbGUgZW1haWxgLlwiKSxjYihlcnIse3NzbzohMX0pKTpzc29kYXRhSW5mb3JtYXRpb24ubGFzdFVzZWRTdWImJnNzb2RhdGFJbmZvcm1hdGlvbi5sYXN0VXNlZFN1YiE9PXJlc3VsdC5pZFRva2VuUGF5bG9hZC5zdWI/Y2IoZXJyLHtzc286ITF9KTpjYihudWxsLHtsYXN0VXNlZENvbm5lY3Rpb246e25hbWU6c3NvZGF0YUluZm9ybWF0aW9uLmxhc3RVc2VkQ29ubmVjdGlvbn0sbGFzdFVzZWRVc2VySUQ6cmVzdWx0LmlkVG9rZW5QYXlsb2FkLnN1YixsYXN0VXNlZFVzZXJuYW1lOnJlc3VsdC5pZFRva2VuUGF5bG9hZC5lbWFpbHx8cmVzdWx0LmlkVG9rZW5QYXlsb2FkLm5hbWUsbGFzdFVzZWRDbGllbnRJRDpjbGllbnRJZCxzZXNzaW9uQ2xpZW50czpbY2xpZW50SWRdLHNzbzohMH0pfSl9LEF1dGhlbnRpY2F0aW9uLnByb3RvdHlwZS51c2VySW5mbz1mdW5jdGlvbihhY2Nlc3NUb2tlbixjYil7dmFyIHVybDtyZXR1cm4gYXNzZXJ0LmNoZWNrKGFjY2Vzc1Rva2VuLHt0eXBlOlwic3RyaW5nXCIsbWVzc2FnZTpcImFjY2Vzc1Rva2VuIHBhcmFtZXRlciBpcyBub3QgdmFsaWRcIn0pLGFzc2VydC5jaGVjayhjYix7dHlwZTpcImZ1bmN0aW9uXCIsbWVzc2FnZTpcImNiIHBhcmFtZXRlciBpcyBub3QgdmFsaWRcIn0pLHVybD11cmxKb2luKHRoaXMuYmFzZU9wdGlvbnMucm9vdFVybCxcInVzZXJpbmZvXCIpLHRoaXMucmVxdWVzdC5nZXQodXJsKS5zZXQoXCJBdXRob3JpemF0aW9uXCIsXCJCZWFyZXIgXCIrYWNjZXNzVG9rZW4pLmVuZCh3cmFwQ2FsbGJhY2soY2Ise2lnbm9yZUNhc2luZzohMH0pKX0sQXV0aGVudGljYXRpb24ucHJvdG90eXBlLmRlbGVnYXRpb249ZnVuY3Rpb24ob3B0aW9ucyxjYil7dmFyIHVybCxib2R5O3JldHVybiBhc3NlcnQuY2hlY2sob3B0aW9ucyx7dHlwZTpcIm9iamVjdFwiLG1lc3NhZ2U6XCJvcHRpb25zIHBhcmFtZXRlciBpcyBub3QgdmFsaWRcIn0se2dyYW50X3R5cGU6e3R5cGU6XCJzdHJpbmdcIixtZXNzYWdlOlwiZ3JhbnRfdHlwZSBvcHRpb24gaXMgcmVxdWlyZWRcIn19KSxhc3NlcnQuY2hlY2soY2Ise3R5cGU6XCJmdW5jdGlvblwiLG1lc3NhZ2U6XCJjYiBwYXJhbWV0ZXIgaXMgbm90IHZhbGlkXCJ9KSx1cmw9dXJsSm9pbih0aGlzLmJhc2VPcHRpb25zLnJvb3RVcmwsXCJkZWxlZ2F0aW9uXCIpLGJvZHk9b2JqZWN0SGVscGVyLm1lcmdlKHRoaXMuYmFzZU9wdGlvbnMsW1wiY2xpZW50SURcIl0pLndpdGgob3B0aW9ucyksYm9keT1vYmplY3RIZWxwZXIudG9TbmFrZUNhc2UoYm9keSxbXCJhdXRoMENsaWVudFwiXSksdGhpcy5yZXF1ZXN0LnBvc3QodXJsKS5zZW5kKGJvZHkpLmVuZCh3cmFwQ2FsbGJhY2soY2IpKX0sQXV0aGVudGljYXRpb24ucHJvdG90eXBlLmdldFVzZXJDb3VudHJ5PWZ1bmN0aW9uKGNiKXt2YXIgdXJsO3JldHVybiBhc3NlcnQuY2hlY2soY2Ise3R5cGU6XCJmdW5jdGlvblwiLG1lc3NhZ2U6XCJjYiBwYXJhbWV0ZXIgaXMgbm90IHZhbGlkXCJ9KSx1cmw9dXJsSm9pbih0aGlzLmJhc2VPcHRpb25zLnJvb3RVcmwsXCJ1c2VyXCIsXCJnZW9sb2NcIixcImNvdW50cnlcIiksdGhpcy5yZXF1ZXN0LmdldCh1cmwpLmVuZCh3cmFwQ2FsbGJhY2soY2IpKX0sTWFuYWdlbWVudC5wcm90b3R5cGUuZ2V0VXNlcj1mdW5jdGlvbih1c2VySWQsY2Ipe3ZhciB1cmw7cmV0dXJuIGFzc2VydC5jaGVjayh1c2VySWQse3R5cGU6XCJzdHJpbmdcIixtZXNzYWdlOlwidXNlcklkIHBhcmFtZXRlciBpcyBub3QgdmFsaWRcIn0pLGFzc2VydC5jaGVjayhjYix7dHlwZTpcImZ1bmN0aW9uXCIsbWVzc2FnZTpcImNiIHBhcmFtZXRlciBpcyBub3QgdmFsaWRcIn0pLHVybD11cmxKb2luKHRoaXMuYmFzZU9wdGlvbnMucm9vdFVybCxcInVzZXJzXCIsdXNlcklkKSx0aGlzLnJlcXVlc3QuZ2V0KHVybCkuZW5kKHdyYXBDYWxsYmFjayhjYix7aWdub3JlQ2FzaW5nOiEwfSkpfSxNYW5hZ2VtZW50LnByb3RvdHlwZS5wYXRjaFVzZXJNZXRhZGF0YT1mdW5jdGlvbih1c2VySWQsdXNlck1ldGFkYXRhLGNiKXt2YXIgdXJsO3JldHVybiBhc3NlcnQuY2hlY2sodXNlcklkLHt0eXBlOlwic3RyaW5nXCIsbWVzc2FnZTpcInVzZXJJZCBwYXJhbWV0ZXIgaXMgbm90IHZhbGlkXCJ9KSxhc3NlcnQuY2hlY2sodXNlck1ldGFkYXRhLHt0eXBlOlwib2JqZWN0XCIsbWVzc2FnZTpcInVzZXJNZXRhZGF0YSBwYXJhbWV0ZXIgaXMgbm90IHZhbGlkXCJ9KSxhc3NlcnQuY2hlY2soY2Ise3R5cGU6XCJmdW5jdGlvblwiLG1lc3NhZ2U6XCJjYiBwYXJhbWV0ZXIgaXMgbm90IHZhbGlkXCJ9KSx1cmw9dXJsSm9pbih0aGlzLmJhc2VPcHRpb25zLnJvb3RVcmwsXCJ1c2Vyc1wiLHVzZXJJZCksdGhpcy5yZXF1ZXN0LnBhdGNoKHVybCkuc2VuZCh7dXNlcl9tZXRhZGF0YTp1c2VyTWV0YWRhdGF9KS5lbmQod3JhcENhbGxiYWNrKGNiLHtpZ25vcmVDYXNpbmc6ITB9KSl9LE1hbmFnZW1lbnQucHJvdG90eXBlLmxpbmtVc2VyPWZ1bmN0aW9uKHVzZXJJZCxzZWNvbmRhcnlVc2VyVG9rZW4sY2Ipe3ZhciB1cmw7cmV0dXJuIGFzc2VydC5jaGVjayh1c2VySWQse3R5cGU6XCJzdHJpbmdcIixtZXNzYWdlOlwidXNlcklkIHBhcmFtZXRlciBpcyBub3QgdmFsaWRcIn0pLGFzc2VydC5jaGVjayhzZWNvbmRhcnlVc2VyVG9rZW4se3R5cGU6XCJzdHJpbmdcIixtZXNzYWdlOlwic2Vjb25kYXJ5VXNlclRva2VuIHBhcmFtZXRlciBpcyBub3QgdmFsaWRcIn0pLGFzc2VydC5jaGVjayhjYix7dHlwZTpcImZ1bmN0aW9uXCIsbWVzc2FnZTpcImNiIHBhcmFtZXRlciBpcyBub3QgdmFsaWRcIn0pLHVybD11cmxKb2luKHRoaXMuYmFzZU9wdGlvbnMucm9vdFVybCxcInVzZXJzXCIsdXNlcklkLFwiaWRlbnRpdGllc1wiKSx0aGlzLnJlcXVlc3QucG9zdCh1cmwpLnNlbmQoe2xpbmtfd2l0aDpzZWNvbmRhcnlVc2VyVG9rZW59KS5lbmQod3JhcENhbGxiYWNrKGNiLHtpZ25vcmVDYXNpbmc6ITB9KSl9O3ZhciBpbmRleD17QXV0aGVudGljYXRpb246QXV0aGVudGljYXRpb24sTWFuYWdlbWVudDpNYW5hZ2VtZW50LFdlYkF1dGg6V2ViQXV0aCx2ZXJzaW9uOnZlcnNpb259O2V4cG9ydCBkZWZhdWx0IGluZGV4O2V4cG9ydHtBdXRoZW50aWNhdGlvbixNYW5hZ2VtZW50LFdlYkF1dGgsdmVyc2lvbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hdXRoMC5taW4uZXNtLmpzLm1hcFxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UnViaWt8Um9ib3RvKTtcIiwgXCJcIl0pO1xuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qIGluZGV4LmNzcyAqL1xcblxcbmJvZHksXFxuaHRtbCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLm1vdXNlLXBvaW50ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNvdXRlci1jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuI2FwcCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XFxuICAgIGZvbnQtZmFtaWx5OiAnUnViaWsnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uQXBwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLm5hdi1iYXIge1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICAgIGJhY2tncm91bmQ6ICMzOTM5M2Y7XFxuICAgIHBhZGRpbmc6IDEwcHggMCAxMHB4IDA7XFxuICAgIG1heC1oZWlnaHQ6IDMxcHg7XFxufVxcblxcbi5tYWluLXN0YWdlIHtcXG4gICAgZmxleDogMTA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDFlbTtcXG59XFxuXFxuLm5hdi1idXR0b24ge1xcbiAgICBjb2xvcjogIzAwY2YzMDtcXG4gICAgZm9udC1zaXplOiAxLjdyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcXG59XFxuXFxuLm5hdi1iYXItdGl0bGUtb3V0ZXIge1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4ubmF2LWJhci10aXRsZSB7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5uYXYtYmFyLWljb24ge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5zdGFnZS1iYW5uZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1hcmdpbjogMC41ZW07XFxufVxcblxcbi5zdGFnZS1iYW5uZXIgc3ZnIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjb2xvcjogcmdiKDc1LCA3NSwgNzUpO1xcbiAgICByaWdodDogMDtcXG4gICAgdG9wOiA0NyU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gICAgZm9udC1zaXplOiAxMjAlO1xcbn1cXG5cXG4uc3RhZ2UtdGl0bGUge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDFlbSAwO1xcbiAgICBtYXJnaW46IDAuNWVtO1xcbiAgICBjb2xvcjogcmdiKDAsIDAsIDApO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAyMTAlO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbn1cXG5cXG4uY2FyZC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4uY29uZmVyZW5jZS1jYXJkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiAwLjVlbTtcXG4gICAgbWFyZ2luOiAwLjVlbTtcXG4gICAgZm9udC1zaXplOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjQ1LCAyNDUsIDI0NSk7XFxufVxcblxcbi5jb25mZXJlbmNlLWZpZWxkcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmNvbmZlcmVuY2UtZmllbGQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXJnaW46IDAuNWVtO1xcbiAgICBmb250LXNpemU6IDEwMCU7XFxufVxcblxcbi51aS1idXR0b24ge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAuNzc1cmVtIDAuNzVyZW07XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIG1heC13aWR0aDogNTAwcHg7XFxuICAgIFxcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGNvbG9yOiAjMjEyNTI5O1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi51aS1idXR0b24tc3VjY2VzcyB7XFxuICAgIGNvbG9yOiAjMjhhNzQ1O1xcbiAgICBib3JkZXItY29sb3I6ICMyOGE3NDU7XFxuICB9XFxuICBcXG4udWktYnV0dG9uLXN1Y2Nlc3M6aG92ZXIge1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4YTc0NTtcXG4gICAgYm9yZGVyLWNvbG9yOiAjMjhhNzQ1O1xcbn1cXG4gIFxcbi51aS1idXR0b24tc3VjY2Vzczpmb2N1cywgLnVpLWJ1dHRvbi1zdWNjZXNzLmZvY3VzIHtcXG5ib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSg0MCwgMTY3LCA2OSwgMC41KTtcXG59XFxuXFxuLnVpLWJ1dHRvbi1zdWNjZXNzLmRpc2FibGVkLCAudWktYnV0dG9uLXN1Y2Nlc3M6ZGlzYWJsZWQge1xcbmNvbG9yOiAjMjhhNzQ1O1xcbmJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4udWktYnV0dG9uLXN1Y2Nlc3M6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlLCAudWktYnV0dG9uLXN1Y2Nlc3M6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkuYWN0aXZlLFxcbi5zaG93ID4gLnVpLWJ1dHRvbi1zdWNjZXNzLmRyb3Bkb3duLXRvZ2dsZSB7XFxuY29sb3I6ICNmZmY7XFxuYmFja2dyb3VuZC1jb2xvcjogIzI4YTc0NTtcXG5ib3JkZXItY29sb3I6ICMyOGE3NDU7XFxufVxcblxcbi51aS1idXR0b24tc3VjY2Vzczpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmU6Zm9jdXMsIC51aS1idXR0b24tc3VjY2Vzczpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKS5hY3RpdmU6Zm9jdXMsXFxuLnNob3cgPiAudWktYnV0dG9uLXN1Y2Nlc3MuZHJvcGRvd24tdG9nZ2xlOmZvY3VzIHtcXG5ib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSg0MCwgMTY3LCA2OSwgMC41KTtcXG59XFxuXFxuLnVpLWJ1dHRvbi1zcGFuIHtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ud2VsY29tZVZpZXdPdXRlciB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmxvZ2luLWJ1dHRvbi1vdXRlciB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLmxvZ2luLWJ1dHRvbiB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXIgIWltcG9ydGFudDtcXG59XFxuXFxuLmxvZ291dC1idXR0b24ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogLTQ4cHg7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxufVxcblxcbi5sb2dvdXQtYnV0dG9uLWNvbG9yIHtcXG4gICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcXG59XFxuXFxuI2VudHJ5LWZvcm0ge1xcbiAgICBtYXJnaW46IDAgMCAwLjVlbSAyMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBjb2xvcjogcmdiKDkwLCA5MCwgOTApO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuI2VudHJ5LWZvcm0gbGFiZWwge1xcbiAgICBwYWRkaW5nOiAxZW0gMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNlbnRyeS1mb3JtIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuICAgIG1hcmdpbjogMCAwIDAuNWVtIDA7XFxuICAgIHBhZGRpbmc6IDAuNzVlbTtcXG4gICAgd2lkdGg6IDkxJTtcXG4gICAgbWF4LXdpZHRoOiA3MDBweDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4uZm9ybS1vdXRlciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXgtd2lkdGg6IDcwMHB4O1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogYXV0bztcXG59XFxuXFxuLmZvcm0tcXVlc3Rpb24ge1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi5mb3JtLXF1ZXN0aW9uIGxhYmVsIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XFxufVxcblxcbi5hcHAtZGVzY3JpcHRpb24ge1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4uZm9vdGVyT3V0ZXIge1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxufVxcblxcbi5tYWluLWZvb3RlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBsaW5lLWhlaWdodDogNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMxMzEzMTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLm1haW4tZm9vdGVyIGEge1xcbiAgICBjb2xvcjogI2ZhZmFmYSAhaW1wb3J0YW50O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5tYWluLWZvb3RlciBhOmhvdmVyIHtcXG4gICAgY29sb3I6ICNkYWRhZGEgIWltcG9ydGFudDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odXNlU291cmNlTWFwKSB7XG5cdHZhciBsaXN0ID0gW107XG5cblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHR2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblx0XHRcdGlmKGl0ZW1bMl0pIHtcblx0XHRcdFx0cmV0dXJuIFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgY29udGVudCArIFwifVwiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0XHR9XG5cdFx0fSkuam9pbihcIlwiKTtcblx0fTtcblxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuXHRcdH1cblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcblx0dmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuXHR2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cdGlmICghY3NzTWFwcGluZykge1xuXHRcdHJldHVybiBjb250ZW50O1xuXHR9XG5cblx0aWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuXHRcdHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG5cdFx0XHRyZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcblx0fVxuXG5cdHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59XG5cbi8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuXHR2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuXG5cdHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59XG4iLCI7KGZ1bmN0aW9uKCkge1xuXCJ1c2Ugc3RyaWN0XCJcbmZ1bmN0aW9uIFZub2RlKHRhZywga2V5LCBhdHRyczAsIGNoaWxkcmVuLCB0ZXh0LCBkb20pIHtcblx0cmV0dXJuIHt0YWc6IHRhZywga2V5OiBrZXksIGF0dHJzOiBhdHRyczAsIGNoaWxkcmVuOiBjaGlsZHJlbiwgdGV4dDogdGV4dCwgZG9tOiBkb20sIGRvbVNpemU6IHVuZGVmaW5lZCwgc3RhdGU6IHVuZGVmaW5lZCwgX3N0YXRlOiB1bmRlZmluZWQsIGV2ZW50czogdW5kZWZpbmVkLCBpbnN0YW5jZTogdW5kZWZpbmVkLCBza2lwOiBmYWxzZX1cbn1cblZub2RlLm5vcm1hbGl6ZSA9IGZ1bmN0aW9uKG5vZGUpIHtcblx0aWYgKEFycmF5LmlzQXJyYXkobm9kZSkpIHJldHVybiBWbm9kZShcIltcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIFZub2RlLm5vcm1hbGl6ZUNoaWxkcmVuKG5vZGUpLCB1bmRlZmluZWQsIHVuZGVmaW5lZClcblx0aWYgKG5vZGUgIT0gbnVsbCAmJiB0eXBlb2Ygbm9kZSAhPT0gXCJvYmplY3RcIikgcmV0dXJuIFZub2RlKFwiI1wiLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgbm9kZSA9PT0gZmFsc2UgPyBcIlwiIDogbm9kZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQpXG5cdHJldHVybiBub2RlXG59XG5Wbm9kZS5ub3JtYWxpemVDaGlsZHJlbiA9IGZ1bmN0aW9uIG5vcm1hbGl6ZUNoaWxkcmVuKGNoaWxkcmVuKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcblx0XHRjaGlsZHJlbltpXSA9IFZub2RlLm5vcm1hbGl6ZShjaGlsZHJlbltpXSlcblx0fVxuXHRyZXR1cm4gY2hpbGRyZW5cbn1cbnZhciBzZWxlY3RvclBhcnNlciA9IC8oPzooXnwjfFxcLikoW14jXFwuXFxbXFxdXSspKXwoXFxbKC4rPykoPzpcXHMqPVxccyooXCJ8J3wpKCg/OlxcXFxbXCInXFxdXXwuKSo/KVxcNSk/XFxdKS9nXG52YXIgc2VsZWN0b3JDYWNoZSA9IHt9XG52YXIgaGFzT3duID0ge30uaGFzT3duUHJvcGVydHlcbmZ1bmN0aW9uIGlzRW1wdHkob2JqZWN0KSB7XG5cdGZvciAodmFyIGtleSBpbiBvYmplY3QpIGlmIChoYXNPd24uY2FsbChvYmplY3QsIGtleSkpIHJldHVybiBmYWxzZVxuXHRyZXR1cm4gdHJ1ZVxufVxuZnVuY3Rpb24gY29tcGlsZVNlbGVjdG9yKHNlbGVjdG9yKSB7XG5cdHZhciBtYXRjaCwgdGFnID0gXCJkaXZcIiwgY2xhc3NlcyA9IFtdLCBhdHRycyA9IHt9XG5cdHdoaWxlIChtYXRjaCA9IHNlbGVjdG9yUGFyc2VyLmV4ZWMoc2VsZWN0b3IpKSB7XG5cdFx0dmFyIHR5cGUgPSBtYXRjaFsxXSwgdmFsdWUgPSBtYXRjaFsyXVxuXHRcdGlmICh0eXBlID09PSBcIlwiICYmIHZhbHVlICE9PSBcIlwiKSB0YWcgPSB2YWx1ZVxuXHRcdGVsc2UgaWYgKHR5cGUgPT09IFwiI1wiKSBhdHRycy5pZCA9IHZhbHVlXG5cdFx0ZWxzZSBpZiAodHlwZSA9PT0gXCIuXCIpIGNsYXNzZXMucHVzaCh2YWx1ZSlcblx0XHRlbHNlIGlmIChtYXRjaFszXVswXSA9PT0gXCJbXCIpIHtcblx0XHRcdHZhciBhdHRyVmFsdWUgPSBtYXRjaFs2XVxuXHRcdFx0aWYgKGF0dHJWYWx1ZSkgYXR0clZhbHVlID0gYXR0clZhbHVlLnJlcGxhY2UoL1xcXFwoW1wiJ10pL2csIFwiJDFcIikucmVwbGFjZSgvXFxcXFxcXFwvZywgXCJcXFxcXCIpXG5cdFx0XHRpZiAobWF0Y2hbNF0gPT09IFwiY2xhc3NcIikgY2xhc3Nlcy5wdXNoKGF0dHJWYWx1ZSlcblx0XHRcdGVsc2UgYXR0cnNbbWF0Y2hbNF1dID0gYXR0clZhbHVlID09PSBcIlwiID8gYXR0clZhbHVlIDogYXR0clZhbHVlIHx8IHRydWVcblx0XHR9XG5cdH1cblx0aWYgKGNsYXNzZXMubGVuZ3RoID4gMCkgYXR0cnMuY2xhc3NOYW1lID0gY2xhc3Nlcy5qb2luKFwiIFwiKVxuXHRyZXR1cm4gc2VsZWN0b3JDYWNoZVtzZWxlY3Rvcl0gPSB7dGFnOiB0YWcsIGF0dHJzOiBhdHRyc31cbn1cbmZ1bmN0aW9uIGV4ZWNTZWxlY3RvcihzdGF0ZSwgYXR0cnMsIGNoaWxkcmVuKSB7XG5cdHZhciBoYXNBdHRycyA9IGZhbHNlLCBjaGlsZExpc3QsIHRleHRcblx0dmFyIGNsYXNzTmFtZSA9IGF0dHJzLmNsYXNzTmFtZSB8fCBhdHRycy5jbGFzc1xuXHRpZiAoIWlzRW1wdHkoc3RhdGUuYXR0cnMpICYmICFpc0VtcHR5KGF0dHJzKSkge1xuXHRcdHZhciBuZXdBdHRycyA9IHt9XG5cdFx0Zm9yKHZhciBrZXkgaW4gYXR0cnMpIHtcblx0XHRcdGlmIChoYXNPd24uY2FsbChhdHRycywga2V5KSkge1xuXHRcdFx0XHRuZXdBdHRyc1trZXldID0gYXR0cnNba2V5XVxuXHRcdFx0fVxuXHRcdH1cblx0XHRhdHRycyA9IG5ld0F0dHJzXG5cdH1cblx0Zm9yICh2YXIga2V5IGluIHN0YXRlLmF0dHJzKSB7XG5cdFx0aWYgKGhhc093bi5jYWxsKHN0YXRlLmF0dHJzLCBrZXkpKSB7XG5cdFx0XHRhdHRyc1trZXldID0gc3RhdGUuYXR0cnNba2V5XVxuXHRcdH1cblx0fVxuXHRpZiAoY2xhc3NOYW1lICE9PSB1bmRlZmluZWQpIHtcblx0XHRpZiAoYXR0cnMuY2xhc3MgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0YXR0cnMuY2xhc3MgPSB1bmRlZmluZWRcblx0XHRcdGF0dHJzLmNsYXNzTmFtZSA9IGNsYXNzTmFtZVxuXHRcdH1cblx0XHRpZiAoc3RhdGUuYXR0cnMuY2xhc3NOYW1lICE9IG51bGwpIHtcblx0XHRcdGF0dHJzLmNsYXNzTmFtZSA9IHN0YXRlLmF0dHJzLmNsYXNzTmFtZSArIFwiIFwiICsgY2xhc3NOYW1lXG5cdFx0fVxuXHR9XG5cdGZvciAodmFyIGtleSBpbiBhdHRycykge1xuXHRcdGlmIChoYXNPd24uY2FsbChhdHRycywga2V5KSAmJiBrZXkgIT09IFwia2V5XCIpIHtcblx0XHRcdGhhc0F0dHJzID0gdHJ1ZVxuXHRcdFx0YnJlYWtcblx0XHR9XG5cdH1cblx0aWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pICYmIGNoaWxkcmVuLmxlbmd0aCA9PT0gMSAmJiBjaGlsZHJlblswXSAhPSBudWxsICYmIGNoaWxkcmVuWzBdLnRhZyA9PT0gXCIjXCIpIHtcblx0XHR0ZXh0ID0gY2hpbGRyZW5bMF0uY2hpbGRyZW5cblx0fSBlbHNlIHtcblx0XHRjaGlsZExpc3QgPSBjaGlsZHJlblxuXHR9XG5cdHJldHVybiBWbm9kZShzdGF0ZS50YWcsIGF0dHJzLmtleSwgaGFzQXR0cnMgPyBhdHRycyA6IHVuZGVmaW5lZCwgY2hpbGRMaXN0LCB0ZXh0KVxufVxuZnVuY3Rpb24gaHlwZXJzY3JpcHQoc2VsZWN0b3IpIHtcblx0Ly8gQmVjYXVzZSBzbG9wcHkgbW9kZSBzdWNrc1xuXHR2YXIgYXR0cnMgPSBhcmd1bWVudHNbMV0sIHN0YXJ0ID0gMiwgY2hpbGRyZW5cblx0aWYgKHNlbGVjdG9yID09IG51bGwgfHwgdHlwZW9mIHNlbGVjdG9yICE9PSBcInN0cmluZ1wiICYmIHR5cGVvZiBzZWxlY3RvciAhPT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBzZWxlY3Rvci52aWV3ICE9PSBcImZ1bmN0aW9uXCIpIHtcblx0XHR0aHJvdyBFcnJvcihcIlRoZSBzZWxlY3RvciBtdXN0IGJlIGVpdGhlciBhIHN0cmluZyBvciBhIGNvbXBvbmVudC5cIik7XG5cdH1cblx0aWYgKHR5cGVvZiBzZWxlY3RvciA9PT0gXCJzdHJpbmdcIikge1xuXHRcdHZhciBjYWNoZWQgPSBzZWxlY3RvckNhY2hlW3NlbGVjdG9yXSB8fCBjb21waWxlU2VsZWN0b3Ioc2VsZWN0b3IpXG5cdH1cblx0aWYgKGF0dHJzID09IG51bGwpIHtcblx0XHRhdHRycyA9IHt9XG5cdH0gZWxzZSBpZiAodHlwZW9mIGF0dHJzICE9PSBcIm9iamVjdFwiIHx8IGF0dHJzLnRhZyAhPSBudWxsIHx8IEFycmF5LmlzQXJyYXkoYXR0cnMpKSB7XG5cdFx0YXR0cnMgPSB7fVxuXHRcdHN0YXJ0ID0gMVxuXHR9XG5cdGlmIChhcmd1bWVudHMubGVuZ3RoID09PSBzdGFydCArIDEpIHtcblx0XHRjaGlsZHJlbiA9IGFyZ3VtZW50c1tzdGFydF1cblx0XHRpZiAoIUFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSBjaGlsZHJlbiA9IFtjaGlsZHJlbl1cblx0fSBlbHNlIHtcblx0XHRjaGlsZHJlbiA9IFtdXG5cdFx0d2hpbGUgKHN0YXJ0IDwgYXJndW1lbnRzLmxlbmd0aCkgY2hpbGRyZW4ucHVzaChhcmd1bWVudHNbc3RhcnQrK10pXG5cdH1cblx0dmFyIG5vcm1hbGl6ZWQgPSBWbm9kZS5ub3JtYWxpemVDaGlsZHJlbihjaGlsZHJlbilcblx0aWYgKHR5cGVvZiBzZWxlY3RvciA9PT0gXCJzdHJpbmdcIikge1xuXHRcdHJldHVybiBleGVjU2VsZWN0b3IoY2FjaGVkLCBhdHRycywgbm9ybWFsaXplZClcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gVm5vZGUoc2VsZWN0b3IsIGF0dHJzLmtleSwgYXR0cnMsIG5vcm1hbGl6ZWQpXG5cdH1cbn1cbmh5cGVyc2NyaXB0LnRydXN0ID0gZnVuY3Rpb24oaHRtbCkge1xuXHRpZiAoaHRtbCA9PSBudWxsKSBodG1sID0gXCJcIlxuXHRyZXR1cm4gVm5vZGUoXCI8XCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBodG1sLCB1bmRlZmluZWQsIHVuZGVmaW5lZClcbn1cbmh5cGVyc2NyaXB0LmZyYWdtZW50ID0gZnVuY3Rpb24oYXR0cnMxLCBjaGlsZHJlbikge1xuXHRyZXR1cm4gVm5vZGUoXCJbXCIsIGF0dHJzMS5rZXksIGF0dHJzMSwgVm5vZGUubm9ybWFsaXplQ2hpbGRyZW4oY2hpbGRyZW4pLCB1bmRlZmluZWQsIHVuZGVmaW5lZClcbn1cbnZhciBtID0gaHlwZXJzY3JpcHRcbi8qKiBAY29uc3RydWN0b3IgKi9cbnZhciBQcm9taXNlUG9seWZpbGwgPSBmdW5jdGlvbihleGVjdXRvcikge1xuXHRpZiAoISh0aGlzIGluc3RhbmNlb2YgUHJvbWlzZVBvbHlmaWxsKSkgdGhyb3cgbmV3IEVycm9yKFwiUHJvbWlzZSBtdXN0IGJlIGNhbGxlZCB3aXRoIGBuZXdgXCIpXG5cdGlmICh0eXBlb2YgZXhlY3V0b3IgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcImV4ZWN1dG9yIG11c3QgYmUgYSBmdW5jdGlvblwiKVxuXHR2YXIgc2VsZiA9IHRoaXMsIHJlc29sdmVycyA9IFtdLCByZWplY3RvcnMgPSBbXSwgcmVzb2x2ZUN1cnJlbnQgPSBoYW5kbGVyKHJlc29sdmVycywgdHJ1ZSksIHJlamVjdEN1cnJlbnQgPSBoYW5kbGVyKHJlamVjdG9ycywgZmFsc2UpXG5cdHZhciBpbnN0YW5jZSA9IHNlbGYuX2luc3RhbmNlID0ge3Jlc29sdmVyczogcmVzb2x2ZXJzLCByZWplY3RvcnM6IHJlamVjdG9yc31cblx0dmFyIGNhbGxBc3luYyA9IHR5cGVvZiBzZXRJbW1lZGlhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHNldEltbWVkaWF0ZSA6IHNldFRpbWVvdXRcblx0ZnVuY3Rpb24gaGFuZGxlcihsaXN0LCBzaG91bGRBYnNvcmIpIHtcblx0XHRyZXR1cm4gZnVuY3Rpb24gZXhlY3V0ZSh2YWx1ZSkge1xuXHRcdFx0dmFyIHRoZW5cblx0XHRcdHRyeSB7XG5cdFx0XHRcdGlmIChzaG91bGRBYnNvcmIgJiYgdmFsdWUgIT0gbnVsbCAmJiAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiKSAmJiB0eXBlb2YgKHRoZW4gPSB2YWx1ZS50aGVuKSA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdFx0aWYgKHZhbHVlID09PSBzZWxmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJvbWlzZSBjYW4ndCBiZSByZXNvbHZlZCB3LyBpdHNlbGZcIilcblx0XHRcdFx0XHRleGVjdXRlT25jZSh0aGVuLmJpbmQodmFsdWUpKVxuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdGNhbGxBc3luYyhmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdGlmICghc2hvdWxkQWJzb3JiICYmIGxpc3QubGVuZ3RoID09PSAwKSBjb25zb2xlLmVycm9yKFwiUG9zc2libGUgdW5oYW5kbGVkIHByb21pc2UgcmVqZWN0aW9uOlwiLCB2YWx1ZSlcblx0XHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykgbGlzdFtpXSh2YWx1ZSlcblx0XHRcdFx0XHRcdHJlc29sdmVycy5sZW5ndGggPSAwLCByZWplY3RvcnMubGVuZ3RoID0gMFxuXHRcdFx0XHRcdFx0aW5zdGFuY2Uuc3RhdGUgPSBzaG91bGRBYnNvcmJcblx0XHRcdFx0XHRcdGluc3RhbmNlLnJldHJ5ID0gZnVuY3Rpb24oKSB7ZXhlY3V0ZSh2YWx1ZSl9XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Y2F0Y2ggKGUpIHtcblx0XHRcdFx0cmVqZWN0Q3VycmVudChlKVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRmdW5jdGlvbiBleGVjdXRlT25jZSh0aGVuKSB7XG5cdFx0dmFyIHJ1bnMgPSAwXG5cdFx0ZnVuY3Rpb24gcnVuKGZuKSB7XG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24odmFsdWUpIHtcblx0XHRcdFx0aWYgKHJ1bnMrKyA+IDApIHJldHVyblxuXHRcdFx0XHRmbih2YWx1ZSlcblx0XHRcdH1cblx0XHR9XG5cdFx0dmFyIG9uZXJyb3IgPSBydW4ocmVqZWN0Q3VycmVudClcblx0XHR0cnkge3RoZW4ocnVuKHJlc29sdmVDdXJyZW50KSwgb25lcnJvcil9IGNhdGNoIChlKSB7b25lcnJvcihlKX1cblx0fVxuXHRleGVjdXRlT25jZShleGVjdXRvcilcbn1cblByb21pc2VQb2x5ZmlsbC5wcm90b3R5cGUudGhlbiA9IGZ1bmN0aW9uKG9uRnVsZmlsbGVkLCBvblJlamVjdGlvbikge1xuXHR2YXIgc2VsZiA9IHRoaXMsIGluc3RhbmNlID0gc2VsZi5faW5zdGFuY2Vcblx0ZnVuY3Rpb24gaGFuZGxlKGNhbGxiYWNrLCBsaXN0LCBuZXh0LCBzdGF0ZSkge1xuXHRcdGxpc3QucHVzaChmdW5jdGlvbih2YWx1ZSkge1xuXHRcdFx0aWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gXCJmdW5jdGlvblwiKSBuZXh0KHZhbHVlKVxuXHRcdFx0ZWxzZSB0cnkge3Jlc29sdmVOZXh0KGNhbGxiYWNrKHZhbHVlKSl9IGNhdGNoIChlKSB7aWYgKHJlamVjdE5leHQpIHJlamVjdE5leHQoZSl9XG5cdFx0fSlcblx0XHRpZiAodHlwZW9mIGluc3RhbmNlLnJldHJ5ID09PSBcImZ1bmN0aW9uXCIgJiYgc3RhdGUgPT09IGluc3RhbmNlLnN0YXRlKSBpbnN0YW5jZS5yZXRyeSgpXG5cdH1cblx0dmFyIHJlc29sdmVOZXh0LCByZWplY3ROZXh0XG5cdHZhciBwcm9taXNlID0gbmV3IFByb21pc2VQb2x5ZmlsbChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtyZXNvbHZlTmV4dCA9IHJlc29sdmUsIHJlamVjdE5leHQgPSByZWplY3R9KVxuXHRoYW5kbGUob25GdWxmaWxsZWQsIGluc3RhbmNlLnJlc29sdmVycywgcmVzb2x2ZU5leHQsIHRydWUpLCBoYW5kbGUob25SZWplY3Rpb24sIGluc3RhbmNlLnJlamVjdG9ycywgcmVqZWN0TmV4dCwgZmFsc2UpXG5cdHJldHVybiBwcm9taXNlXG59XG5Qcm9taXNlUG9seWZpbGwucHJvdG90eXBlLmNhdGNoID0gZnVuY3Rpb24ob25SZWplY3Rpb24pIHtcblx0cmV0dXJuIHRoaXMudGhlbihudWxsLCBvblJlamVjdGlvbilcbn1cblByb21pc2VQb2x5ZmlsbC5yZXNvbHZlID0gZnVuY3Rpb24odmFsdWUpIHtcblx0aWYgKHZhbHVlIGluc3RhbmNlb2YgUHJvbWlzZVBvbHlmaWxsKSByZXR1cm4gdmFsdWVcblx0cmV0dXJuIG5ldyBQcm9taXNlUG9seWZpbGwoZnVuY3Rpb24ocmVzb2x2ZSkge3Jlc29sdmUodmFsdWUpfSlcbn1cblByb21pc2VQb2x5ZmlsbC5yZWplY3QgPSBmdW5jdGlvbih2YWx1ZSkge1xuXHRyZXR1cm4gbmV3IFByb21pc2VQb2x5ZmlsbChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtyZWplY3QodmFsdWUpfSlcbn1cblByb21pc2VQb2x5ZmlsbC5hbGwgPSBmdW5jdGlvbihsaXN0KSB7XG5cdHJldHVybiBuZXcgUHJvbWlzZVBvbHlmaWxsKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdHZhciB0b3RhbCA9IGxpc3QubGVuZ3RoLCBjb3VudCA9IDAsIHZhbHVlcyA9IFtdXG5cdFx0aWYgKGxpc3QubGVuZ3RoID09PSAwKSByZXNvbHZlKFtdKVxuXHRcdGVsc2UgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHQoZnVuY3Rpb24oaSkge1xuXHRcdFx0XHRmdW5jdGlvbiBjb25zdW1lKHZhbHVlKSB7XG5cdFx0XHRcdFx0Y291bnQrK1xuXHRcdFx0XHRcdHZhbHVlc1tpXSA9IHZhbHVlXG5cdFx0XHRcdFx0aWYgKGNvdW50ID09PSB0b3RhbCkgcmVzb2x2ZSh2YWx1ZXMpXG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGxpc3RbaV0gIT0gbnVsbCAmJiAodHlwZW9mIGxpc3RbaV0gPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGxpc3RbaV0gPT09IFwiZnVuY3Rpb25cIikgJiYgdHlwZW9mIGxpc3RbaV0udGhlbiA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdFx0bGlzdFtpXS50aGVuKGNvbnN1bWUsIHJlamVjdClcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIGNvbnN1bWUobGlzdFtpXSlcblx0XHRcdH0pKGkpXG5cdFx0fVxuXHR9KVxufVxuUHJvbWlzZVBvbHlmaWxsLnJhY2UgPSBmdW5jdGlvbihsaXN0KSB7XG5cdHJldHVybiBuZXcgUHJvbWlzZVBvbHlmaWxsKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdFx0bGlzdFtpXS50aGVuKHJlc29sdmUsIHJlamVjdClcblx0XHR9XG5cdH0pXG59XG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuXHRpZiAodHlwZW9mIHdpbmRvdy5Qcm9taXNlID09PSBcInVuZGVmaW5lZFwiKSB3aW5kb3cuUHJvbWlzZSA9IFByb21pc2VQb2x5ZmlsbFxuXHR2YXIgUHJvbWlzZVBvbHlmaWxsID0gd2luZG93LlByb21pc2Vcbn0gZWxzZSBpZiAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIikge1xuXHRpZiAodHlwZW9mIGdsb2JhbC5Qcm9taXNlID09PSBcInVuZGVmaW5lZFwiKSBnbG9iYWwuUHJvbWlzZSA9IFByb21pc2VQb2x5ZmlsbFxuXHR2YXIgUHJvbWlzZVBvbHlmaWxsID0gZ2xvYmFsLlByb21pc2Vcbn0gZWxzZSB7XG59XG52YXIgYnVpbGRRdWVyeVN0cmluZyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuXHRpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iamVjdCkgIT09IFwiW29iamVjdCBPYmplY3RdXCIpIHJldHVybiBcIlwiXG5cdHZhciBhcmdzID0gW11cblx0Zm9yICh2YXIga2V5MCBpbiBvYmplY3QpIHtcblx0XHRkZXN0cnVjdHVyZShrZXkwLCBvYmplY3Rba2V5MF0pXG5cdH1cblx0cmV0dXJuIGFyZ3Muam9pbihcIiZcIilcblx0ZnVuY3Rpb24gZGVzdHJ1Y3R1cmUoa2V5MCwgdmFsdWUpIHtcblx0XHRpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0ZGVzdHJ1Y3R1cmUoa2V5MCArIFwiW1wiICsgaSArIFwiXVwiLCB2YWx1ZVtpXSlcblx0XHRcdH1cblx0XHR9XG5cdFx0ZWxzZSBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gXCJbb2JqZWN0IE9iamVjdF1cIikge1xuXHRcdFx0Zm9yICh2YXIgaSBpbiB2YWx1ZSkge1xuXHRcdFx0XHRkZXN0cnVjdHVyZShrZXkwICsgXCJbXCIgKyBpICsgXCJdXCIsIHZhbHVlW2ldKVxuXHRcdFx0fVxuXHRcdH1cblx0XHRlbHNlIGFyZ3MucHVzaChlbmNvZGVVUklDb21wb25lbnQoa2V5MCkgKyAodmFsdWUgIT0gbnVsbCAmJiB2YWx1ZSAhPT0gXCJcIiA/IFwiPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSA6IFwiXCIpKVxuXHR9XG59XG52YXIgRklMRV9QUk9UT0NPTF9SRUdFWCA9IG5ldyBSZWdFeHAoXCJeZmlsZTovL1wiLCBcImlcIilcbnZhciBfOCA9IGZ1bmN0aW9uKCR3aW5kb3csIFByb21pc2UpIHtcblx0dmFyIGNhbGxiYWNrQ291bnQgPSAwXG5cdHZhciBvbmNvbXBsZXRpb25cblx0ZnVuY3Rpb24gc2V0Q29tcGxldGlvbkNhbGxiYWNrKGNhbGxiYWNrKSB7b25jb21wbGV0aW9uID0gY2FsbGJhY2t9XG5cdGZ1bmN0aW9uIGZpbmFsaXplcigpIHtcblx0XHR2YXIgY291bnQgPSAwXG5cdFx0ZnVuY3Rpb24gY29tcGxldGUoKSB7aWYgKC0tY291bnQgPT09IDAgJiYgdHlwZW9mIG9uY29tcGxldGlvbiA9PT0gXCJmdW5jdGlvblwiKSBvbmNvbXBsZXRpb24oKX1cblx0XHRyZXR1cm4gZnVuY3Rpb24gZmluYWxpemUocHJvbWlzZTApIHtcblx0XHRcdHZhciB0aGVuMCA9IHByb21pc2UwLnRoZW5cblx0XHRcdHByb21pc2UwLnRoZW4gPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0Y291bnQrK1xuXHRcdFx0XHR2YXIgbmV4dCA9IHRoZW4wLmFwcGx5KHByb21pc2UwLCBhcmd1bWVudHMpXG5cdFx0XHRcdG5leHQudGhlbihjb21wbGV0ZSwgZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRcdGNvbXBsZXRlKClcblx0XHRcdFx0XHRpZiAoY291bnQgPT09IDApIHRocm93IGVcblx0XHRcdFx0fSlcblx0XHRcdFx0cmV0dXJuIGZpbmFsaXplKG5leHQpXG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcHJvbWlzZTBcblx0XHR9XG5cdH1cblx0ZnVuY3Rpb24gbm9ybWFsaXplKGFyZ3MsIGV4dHJhKSB7XG5cdFx0aWYgKHR5cGVvZiBhcmdzID09PSBcInN0cmluZ1wiKSB7XG5cdFx0XHR2YXIgdXJsID0gYXJnc1xuXHRcdFx0YXJncyA9IGV4dHJhIHx8IHt9XG5cdFx0XHRpZiAoYXJncy51cmwgPT0gbnVsbCkgYXJncy51cmwgPSB1cmxcblx0XHR9XG5cdFx0cmV0dXJuIGFyZ3Ncblx0fVxuXHRmdW5jdGlvbiByZXF1ZXN0KGFyZ3MsIGV4dHJhKSB7XG5cdFx0dmFyIGZpbmFsaXplID0gZmluYWxpemVyKClcblx0XHRhcmdzID0gbm9ybWFsaXplKGFyZ3MsIGV4dHJhKVxuXHRcdHZhciBwcm9taXNlMCA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdFx0aWYgKGFyZ3MubWV0aG9kID09IG51bGwpIGFyZ3MubWV0aG9kID0gXCJHRVRcIlxuXHRcdFx0YXJncy5tZXRob2QgPSBhcmdzLm1ldGhvZC50b1VwcGVyQ2FzZSgpXG5cdFx0XHR2YXIgdXNlQm9keSA9IChhcmdzLm1ldGhvZCA9PT0gXCJHRVRcIiB8fCBhcmdzLm1ldGhvZCA9PT0gXCJUUkFDRVwiKSA/IGZhbHNlIDogKHR5cGVvZiBhcmdzLnVzZUJvZHkgPT09IFwiYm9vbGVhblwiID8gYXJncy51c2VCb2R5IDogdHJ1ZSlcblx0XHRcdGlmICh0eXBlb2YgYXJncy5zZXJpYWxpemUgIT09IFwiZnVuY3Rpb25cIikgYXJncy5zZXJpYWxpemUgPSB0eXBlb2YgRm9ybURhdGEgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJncy5kYXRhIGluc3RhbmNlb2YgRm9ybURhdGEgPyBmdW5jdGlvbih2YWx1ZSkge3JldHVybiB2YWx1ZX0gOiBKU09OLnN0cmluZ2lmeVxuXHRcdFx0aWYgKHR5cGVvZiBhcmdzLmRlc2VyaWFsaXplICE9PSBcImZ1bmN0aW9uXCIpIGFyZ3MuZGVzZXJpYWxpemUgPSBkZXNlcmlhbGl6ZVxuXHRcdFx0aWYgKHR5cGVvZiBhcmdzLmV4dHJhY3QgIT09IFwiZnVuY3Rpb25cIikgYXJncy5leHRyYWN0ID0gZXh0cmFjdFxuXHRcdFx0YXJncy51cmwgPSBpbnRlcnBvbGF0ZShhcmdzLnVybCwgYXJncy5kYXRhKVxuXHRcdFx0aWYgKHVzZUJvZHkpIGFyZ3MuZGF0YSA9IGFyZ3Muc2VyaWFsaXplKGFyZ3MuZGF0YSlcblx0XHRcdGVsc2UgYXJncy51cmwgPSBhc3NlbWJsZShhcmdzLnVybCwgYXJncy5kYXRhKVxuXHRcdFx0dmFyIHhociA9IG5ldyAkd2luZG93LlhNTEh0dHBSZXF1ZXN0KCksXG5cdFx0XHRcdGFib3J0ZWQgPSBmYWxzZSxcblx0XHRcdFx0X2Fib3J0ID0geGhyLmFib3J0XG5cdFx0XHR4aHIuYWJvcnQgPSBmdW5jdGlvbiBhYm9ydCgpIHtcblx0XHRcdFx0YWJvcnRlZCA9IHRydWVcblx0XHRcdFx0X2Fib3J0LmNhbGwoeGhyKVxuXHRcdFx0fVxuXHRcdFx0eGhyLm9wZW4oYXJncy5tZXRob2QsIGFyZ3MudXJsLCB0eXBlb2YgYXJncy5hc3luYyA9PT0gXCJib29sZWFuXCIgPyBhcmdzLmFzeW5jIDogdHJ1ZSwgdHlwZW9mIGFyZ3MudXNlciA9PT0gXCJzdHJpbmdcIiA/IGFyZ3MudXNlciA6IHVuZGVmaW5lZCwgdHlwZW9mIGFyZ3MucGFzc3dvcmQgPT09IFwic3RyaW5nXCIgPyBhcmdzLnBhc3N3b3JkIDogdW5kZWZpbmVkKVxuXHRcdFx0aWYgKGFyZ3Muc2VyaWFsaXplID09PSBKU09OLnN0cmluZ2lmeSAmJiB1c2VCb2R5ICYmICEoYXJncy5oZWFkZXJzICYmIGFyZ3MuaGVhZGVycy5oYXNPd25Qcm9wZXJ0eShcIkNvbnRlbnQtVHlwZVwiKSkpIHtcblx0XHRcdFx0eGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIpXG5cdFx0XHR9XG5cdFx0XHRpZiAoYXJncy5kZXNlcmlhbGl6ZSA9PT0gZGVzZXJpYWxpemUgJiYgIShhcmdzLmhlYWRlcnMgJiYgYXJncy5oZWFkZXJzLmhhc093blByb3BlcnR5KFwiQWNjZXB0XCIpKSkge1xuXHRcdFx0XHR4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkFjY2VwdFwiLCBcImFwcGxpY2F0aW9uL2pzb24sIHRleHQvKlwiKVxuXHRcdFx0fVxuXHRcdFx0aWYgKGFyZ3Mud2l0aENyZWRlbnRpYWxzKSB4aHIud2l0aENyZWRlbnRpYWxzID0gYXJncy53aXRoQ3JlZGVudGlhbHNcblx0XHRcdGZvciAodmFyIGtleSBpbiBhcmdzLmhlYWRlcnMpIGlmICh7fS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGFyZ3MuaGVhZGVycywga2V5KSkge1xuXHRcdFx0XHR4aHIuc2V0UmVxdWVzdEhlYWRlcihrZXksIGFyZ3MuaGVhZGVyc1trZXldKVxuXHRcdFx0fVxuXHRcdFx0aWYgKHR5cGVvZiBhcmdzLmNvbmZpZyA9PT0gXCJmdW5jdGlvblwiKSB4aHIgPSBhcmdzLmNvbmZpZyh4aHIsIGFyZ3MpIHx8IHhoclxuXHRcdFx0eGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQvLyBEb24ndCB0aHJvdyBlcnJvcnMgb24geGhyLmFib3J0KCkuXG5cdFx0XHRcdGlmKGFib3J0ZWQpIHJldHVyblxuXHRcdFx0XHRpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHtcblx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0dmFyIHJlc3BvbnNlID0gKGFyZ3MuZXh0cmFjdCAhPT0gZXh0cmFjdCkgPyBhcmdzLmV4dHJhY3QoeGhyLCBhcmdzKSA6IGFyZ3MuZGVzZXJpYWxpemUoYXJncy5leHRyYWN0KHhociwgYXJncykpXG5cdFx0XHRcdFx0XHRpZiAoKHhoci5zdGF0dXMgPj0gMjAwICYmIHhoci5zdGF0dXMgPCAzMDApIHx8IHhoci5zdGF0dXMgPT09IDMwNCB8fCBGSUxFX1BST1RPQ09MX1JFR0VYLnRlc3QoYXJncy51cmwpKSB7XG5cdFx0XHRcdFx0XHRcdHJlc29sdmUoY2FzdChhcmdzLnR5cGUsIHJlc3BvbnNlKSlcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdFx0XHR2YXIgZXJyb3IgPSBuZXcgRXJyb3IoeGhyLnJlc3BvbnNlVGV4dClcblx0XHRcdFx0XHRcdFx0Zm9yICh2YXIga2V5IGluIHJlc3BvbnNlKSBlcnJvcltrZXldID0gcmVzcG9uc2Vba2V5XVxuXHRcdFx0XHRcdFx0XHRyZWplY3QoZXJyb3IpXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNhdGNoIChlKSB7XG5cdFx0XHRcdFx0XHRyZWplY3QoZSlcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmICh1c2VCb2R5ICYmIChhcmdzLmRhdGEgIT0gbnVsbCkpIHhoci5zZW5kKGFyZ3MuZGF0YSlcblx0XHRcdGVsc2UgeGhyLnNlbmQoKVxuXHRcdH0pXG5cdFx0cmV0dXJuIGFyZ3MuYmFja2dyb3VuZCA9PT0gdHJ1ZSA/IHByb21pc2UwIDogZmluYWxpemUocHJvbWlzZTApXG5cdH1cblx0ZnVuY3Rpb24ganNvbnAoYXJncywgZXh0cmEpIHtcblx0XHR2YXIgZmluYWxpemUgPSBmaW5hbGl6ZXIoKVxuXHRcdGFyZ3MgPSBub3JtYWxpemUoYXJncywgZXh0cmEpXG5cdFx0dmFyIHByb21pc2UwID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0XHR2YXIgY2FsbGJhY2tOYW1lID0gYXJncy5jYWxsYmFja05hbWUgfHwgXCJfbWl0aHJpbF9cIiArIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDFlMTYpICsgXCJfXCIgKyBjYWxsYmFja0NvdW50Kytcblx0XHRcdHZhciBzY3JpcHQgPSAkd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIilcblx0XHRcdCR3aW5kb3dbY2FsbGJhY2tOYW1lXSA9IGZ1bmN0aW9uKGRhdGEpIHtcblx0XHRcdFx0c2NyaXB0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2NyaXB0KVxuXHRcdFx0XHRyZXNvbHZlKGNhc3QoYXJncy50eXBlLCBkYXRhKSlcblx0XHRcdFx0ZGVsZXRlICR3aW5kb3dbY2FsbGJhY2tOYW1lXVxuXHRcdFx0fVxuXHRcdFx0c2NyaXB0Lm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0c2NyaXB0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2NyaXB0KVxuXHRcdFx0XHRyZWplY3QobmV3IEVycm9yKFwiSlNPTlAgcmVxdWVzdCBmYWlsZWRcIikpXG5cdFx0XHRcdGRlbGV0ZSAkd2luZG93W2NhbGxiYWNrTmFtZV1cblx0XHRcdH1cblx0XHRcdGlmIChhcmdzLmRhdGEgPT0gbnVsbCkgYXJncy5kYXRhID0ge31cblx0XHRcdGFyZ3MudXJsID0gaW50ZXJwb2xhdGUoYXJncy51cmwsIGFyZ3MuZGF0YSlcblx0XHRcdGFyZ3MuZGF0YVthcmdzLmNhbGxiYWNrS2V5IHx8IFwiY2FsbGJhY2tcIl0gPSBjYWxsYmFja05hbWVcblx0XHRcdHNjcmlwdC5zcmMgPSBhc3NlbWJsZShhcmdzLnVybCwgYXJncy5kYXRhKVxuXHRcdFx0JHdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoc2NyaXB0KVxuXHRcdH0pXG5cdFx0cmV0dXJuIGFyZ3MuYmFja2dyb3VuZCA9PT0gdHJ1ZT8gcHJvbWlzZTAgOiBmaW5hbGl6ZShwcm9taXNlMClcblx0fVxuXHRmdW5jdGlvbiBpbnRlcnBvbGF0ZSh1cmwsIGRhdGEpIHtcblx0XHRpZiAoZGF0YSA9PSBudWxsKSByZXR1cm4gdXJsXG5cdFx0dmFyIHRva2VucyA9IHVybC5tYXRjaCgvOlteXFwvXSsvZ2kpIHx8IFtdXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBrZXkgPSB0b2tlbnNbaV0uc2xpY2UoMSlcblx0XHRcdGlmIChkYXRhW2tleV0gIT0gbnVsbCkge1xuXHRcdFx0XHR1cmwgPSB1cmwucmVwbGFjZSh0b2tlbnNbaV0sIGRhdGFba2V5XSlcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHVybFxuXHR9XG5cdGZ1bmN0aW9uIGFzc2VtYmxlKHVybCwgZGF0YSkge1xuXHRcdHZhciBxdWVyeXN0cmluZyA9IGJ1aWxkUXVlcnlTdHJpbmcoZGF0YSlcblx0XHRpZiAocXVlcnlzdHJpbmcgIT09IFwiXCIpIHtcblx0XHRcdHZhciBwcmVmaXggPSB1cmwuaW5kZXhPZihcIj9cIikgPCAwID8gXCI/XCIgOiBcIiZcIlxuXHRcdFx0dXJsICs9IHByZWZpeCArIHF1ZXJ5c3RyaW5nXG5cdFx0fVxuXHRcdHJldHVybiB1cmxcblx0fVxuXHRmdW5jdGlvbiBkZXNlcmlhbGl6ZShkYXRhKSB7XG5cdFx0dHJ5IHtyZXR1cm4gZGF0YSAhPT0gXCJcIiA/IEpTT04ucGFyc2UoZGF0YSkgOiBudWxsfVxuXHRcdGNhdGNoIChlKSB7dGhyb3cgbmV3IEVycm9yKGRhdGEpfVxuXHR9XG5cdGZ1bmN0aW9uIGV4dHJhY3QoeGhyKSB7cmV0dXJuIHhoci5yZXNwb25zZVRleHR9XG5cdGZ1bmN0aW9uIGNhc3QodHlwZTAsIGRhdGEpIHtcblx0XHRpZiAodHlwZW9mIHR5cGUwID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGRhdGFbaV0gPSBuZXcgdHlwZTAoZGF0YVtpXSlcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0ZWxzZSByZXR1cm4gbmV3IHR5cGUwKGRhdGEpXG5cdFx0fVxuXHRcdHJldHVybiBkYXRhXG5cdH1cblx0cmV0dXJuIHtyZXF1ZXN0OiByZXF1ZXN0LCBqc29ucDoganNvbnAsIHNldENvbXBsZXRpb25DYWxsYmFjazogc2V0Q29tcGxldGlvbkNhbGxiYWNrfVxufVxudmFyIHJlcXVlc3RTZXJ2aWNlID0gXzgod2luZG93LCBQcm9taXNlUG9seWZpbGwpXG52YXIgY29yZVJlbmRlcmVyID0gZnVuY3Rpb24oJHdpbmRvdykge1xuXHR2YXIgJGRvYyA9ICR3aW5kb3cuZG9jdW1lbnRcblx0dmFyICRlbXB0eUZyYWdtZW50ID0gJGRvYy5jcmVhdGVEb2N1bWVudEZyYWdtZW50KClcblx0dmFyIG5hbWVTcGFjZSA9IHtcblx0XHRzdmc6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcblx0XHRtYXRoOiBcImh0dHA6Ly93d3cudzMub3JnLzE5OTgvTWF0aC9NYXRoTUxcIlxuXHR9XG5cdHZhciBvbmV2ZW50XG5cdGZ1bmN0aW9uIHNldEV2ZW50Q2FsbGJhY2soY2FsbGJhY2spIHtyZXR1cm4gb25ldmVudCA9IGNhbGxiYWNrfVxuXHRmdW5jdGlvbiBnZXROYW1lU3BhY2Uodm5vZGUpIHtcblx0XHRyZXR1cm4gdm5vZGUuYXR0cnMgJiYgdm5vZGUuYXR0cnMueG1sbnMgfHwgbmFtZVNwYWNlW3Zub2RlLnRhZ11cblx0fVxuXHQvL2NyZWF0ZVxuXHRmdW5jdGlvbiBjcmVhdGVOb2RlcyhwYXJlbnQsIHZub2Rlcywgc3RhcnQsIGVuZCwgaG9va3MsIG5leHRTaWJsaW5nLCBucykge1xuXHRcdGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XG5cdFx0XHR2YXIgdm5vZGUgPSB2bm9kZXNbaV1cblx0XHRcdGlmICh2bm9kZSAhPSBudWxsKSB7XG5cdFx0XHRcdGNyZWF0ZU5vZGUocGFyZW50LCB2bm9kZSwgaG9va3MsIG5zLCBuZXh0U2libGluZylcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0ZnVuY3Rpb24gY3JlYXRlTm9kZShwYXJlbnQsIHZub2RlLCBob29rcywgbnMsIG5leHRTaWJsaW5nKSB7XG5cdFx0dmFyIHRhZyA9IHZub2RlLnRhZ1xuXHRcdGlmICh0eXBlb2YgdGFnID09PSBcInN0cmluZ1wiKSB7XG5cdFx0XHR2bm9kZS5zdGF0ZSA9IHt9XG5cdFx0XHRpZiAodm5vZGUuYXR0cnMgIT0gbnVsbCkgaW5pdExpZmVjeWNsZSh2bm9kZS5hdHRycywgdm5vZGUsIGhvb2tzKVxuXHRcdFx0c3dpdGNoICh0YWcpIHtcblx0XHRcdFx0Y2FzZSBcIiNcIjogcmV0dXJuIGNyZWF0ZVRleHQocGFyZW50LCB2bm9kZSwgbmV4dFNpYmxpbmcpXG5cdFx0XHRcdGNhc2UgXCI8XCI6IHJldHVybiBjcmVhdGVIVE1MKHBhcmVudCwgdm5vZGUsIG5leHRTaWJsaW5nKVxuXHRcdFx0XHRjYXNlIFwiW1wiOiByZXR1cm4gY3JlYXRlRnJhZ21lbnQocGFyZW50LCB2bm9kZSwgaG9va3MsIG5zLCBuZXh0U2libGluZylcblx0XHRcdFx0ZGVmYXVsdDogcmV0dXJuIGNyZWF0ZUVsZW1lbnQocGFyZW50LCB2bm9kZSwgaG9va3MsIG5zLCBuZXh0U2libGluZylcblx0XHRcdH1cblx0XHR9XG5cdFx0ZWxzZSByZXR1cm4gY3JlYXRlQ29tcG9uZW50KHBhcmVudCwgdm5vZGUsIGhvb2tzLCBucywgbmV4dFNpYmxpbmcpXG5cdH1cblx0ZnVuY3Rpb24gY3JlYXRlVGV4dChwYXJlbnQsIHZub2RlLCBuZXh0U2libGluZykge1xuXHRcdHZub2RlLmRvbSA9ICRkb2MuY3JlYXRlVGV4dE5vZGUodm5vZGUuY2hpbGRyZW4pXG5cdFx0aW5zZXJ0Tm9kZShwYXJlbnQsIHZub2RlLmRvbSwgbmV4dFNpYmxpbmcpXG5cdFx0cmV0dXJuIHZub2RlLmRvbVxuXHR9XG5cdGZ1bmN0aW9uIGNyZWF0ZUhUTUwocGFyZW50LCB2bm9kZSwgbmV4dFNpYmxpbmcpIHtcblx0XHR2YXIgbWF0Y2gxID0gdm5vZGUuY2hpbGRyZW4ubWF0Y2goL15cXHMqPzwoXFx3KykvaW0pIHx8IFtdXG5cdFx0dmFyIHBhcmVudDEgPSB7Y2FwdGlvbjogXCJ0YWJsZVwiLCB0aGVhZDogXCJ0YWJsZVwiLCB0Ym9keTogXCJ0YWJsZVwiLCB0Zm9vdDogXCJ0YWJsZVwiLCB0cjogXCJ0Ym9keVwiLCB0aDogXCJ0clwiLCB0ZDogXCJ0clwiLCBjb2xncm91cDogXCJ0YWJsZVwiLCBjb2w6IFwiY29sZ3JvdXBcIn1bbWF0Y2gxWzFdXSB8fCBcImRpdlwiXG5cdFx0dmFyIHRlbXAgPSAkZG9jLmNyZWF0ZUVsZW1lbnQocGFyZW50MSlcblx0XHR0ZW1wLmlubmVySFRNTCA9IHZub2RlLmNoaWxkcmVuXG5cdFx0dm5vZGUuZG9tID0gdGVtcC5maXJzdENoaWxkXG5cdFx0dm5vZGUuZG9tU2l6ZSA9IHRlbXAuY2hpbGROb2Rlcy5sZW5ndGhcblx0XHR2YXIgZnJhZ21lbnQgPSAkZG9jLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKVxuXHRcdHZhciBjaGlsZFxuXHRcdHdoaWxlIChjaGlsZCA9IHRlbXAuZmlyc3RDaGlsZCkge1xuXHRcdFx0ZnJhZ21lbnQuYXBwZW5kQ2hpbGQoY2hpbGQpXG5cdFx0fVxuXHRcdGluc2VydE5vZGUocGFyZW50LCBmcmFnbWVudCwgbmV4dFNpYmxpbmcpXG5cdFx0cmV0dXJuIGZyYWdtZW50XG5cdH1cblx0ZnVuY3Rpb24gY3JlYXRlRnJhZ21lbnQocGFyZW50LCB2bm9kZSwgaG9va3MsIG5zLCBuZXh0U2libGluZykge1xuXHRcdHZhciBmcmFnbWVudCA9ICRkb2MuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpXG5cdFx0aWYgKHZub2RlLmNoaWxkcmVuICE9IG51bGwpIHtcblx0XHRcdHZhciBjaGlsZHJlbiA9IHZub2RlLmNoaWxkcmVuXG5cdFx0XHRjcmVhdGVOb2RlcyhmcmFnbWVudCwgY2hpbGRyZW4sIDAsIGNoaWxkcmVuLmxlbmd0aCwgaG9va3MsIG51bGwsIG5zKVxuXHRcdH1cblx0XHR2bm9kZS5kb20gPSBmcmFnbWVudC5maXJzdENoaWxkXG5cdFx0dm5vZGUuZG9tU2l6ZSA9IGZyYWdtZW50LmNoaWxkTm9kZXMubGVuZ3RoXG5cdFx0aW5zZXJ0Tm9kZShwYXJlbnQsIGZyYWdtZW50LCBuZXh0U2libGluZylcblx0XHRyZXR1cm4gZnJhZ21lbnRcblx0fVxuXHRmdW5jdGlvbiBjcmVhdGVFbGVtZW50KHBhcmVudCwgdm5vZGUsIGhvb2tzLCBucywgbmV4dFNpYmxpbmcpIHtcblx0XHR2YXIgdGFnID0gdm5vZGUudGFnXG5cdFx0dmFyIGF0dHJzMiA9IHZub2RlLmF0dHJzXG5cdFx0dmFyIGlzID0gYXR0cnMyICYmIGF0dHJzMi5pc1xuXHRcdG5zID0gZ2V0TmFtZVNwYWNlKHZub2RlKSB8fCBuc1xuXHRcdHZhciBlbGVtZW50ID0gbnMgP1xuXHRcdFx0aXMgPyAkZG9jLmNyZWF0ZUVsZW1lbnROUyhucywgdGFnLCB7aXM6IGlzfSkgOiAkZG9jLmNyZWF0ZUVsZW1lbnROUyhucywgdGFnKSA6XG5cdFx0XHRpcyA/ICRkb2MuY3JlYXRlRWxlbWVudCh0YWcsIHtpczogaXN9KSA6ICRkb2MuY3JlYXRlRWxlbWVudCh0YWcpXG5cdFx0dm5vZGUuZG9tID0gZWxlbWVudFxuXHRcdGlmIChhdHRyczIgIT0gbnVsbCkge1xuXHRcdFx0c2V0QXR0cnModm5vZGUsIGF0dHJzMiwgbnMpXG5cdFx0fVxuXHRcdGluc2VydE5vZGUocGFyZW50LCBlbGVtZW50LCBuZXh0U2libGluZylcblx0XHRpZiAodm5vZGUuYXR0cnMgIT0gbnVsbCAmJiB2bm9kZS5hdHRycy5jb250ZW50ZWRpdGFibGUgIT0gbnVsbCkge1xuXHRcdFx0c2V0Q29udGVudEVkaXRhYmxlKHZub2RlKVxuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdGlmICh2bm9kZS50ZXh0ICE9IG51bGwpIHtcblx0XHRcdFx0aWYgKHZub2RlLnRleHQgIT09IFwiXCIpIGVsZW1lbnQudGV4dENvbnRlbnQgPSB2bm9kZS50ZXh0XG5cdFx0XHRcdGVsc2Ugdm5vZGUuY2hpbGRyZW4gPSBbVm5vZGUoXCIjXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB2bm9kZS50ZXh0LCB1bmRlZmluZWQsIHVuZGVmaW5lZCldXG5cdFx0XHR9XG5cdFx0XHRpZiAodm5vZGUuY2hpbGRyZW4gIT0gbnVsbCkge1xuXHRcdFx0XHR2YXIgY2hpbGRyZW4gPSB2bm9kZS5jaGlsZHJlblxuXHRcdFx0XHRjcmVhdGVOb2RlcyhlbGVtZW50LCBjaGlsZHJlbiwgMCwgY2hpbGRyZW4ubGVuZ3RoLCBob29rcywgbnVsbCwgbnMpXG5cdFx0XHRcdHNldExhdGVBdHRycyh2bm9kZSlcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGVsZW1lbnRcblx0fVxuXHRmdW5jdGlvbiBpbml0Q29tcG9uZW50KHZub2RlLCBob29rcykge1xuXHRcdHZhciBzZW50aW5lbFxuXHRcdGlmICh0eXBlb2Ygdm5vZGUudGFnLnZpZXcgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0dm5vZGUuc3RhdGUgPSBPYmplY3QuY3JlYXRlKHZub2RlLnRhZylcblx0XHRcdHNlbnRpbmVsID0gdm5vZGUuc3RhdGUudmlld1xuXHRcdFx0aWYgKHNlbnRpbmVsLiQkcmVlbnRyYW50TG9jayQkICE9IG51bGwpIHJldHVybiAkZW1wdHlGcmFnbWVudFxuXHRcdFx0c2VudGluZWwuJCRyZWVudHJhbnRMb2NrJCQgPSB0cnVlXG5cdFx0fSBlbHNlIHtcblx0XHRcdHZub2RlLnN0YXRlID0gdm9pZCAwXG5cdFx0XHRzZW50aW5lbCA9IHZub2RlLnRhZ1xuXHRcdFx0aWYgKHNlbnRpbmVsLiQkcmVlbnRyYW50TG9jayQkICE9IG51bGwpIHJldHVybiAkZW1wdHlGcmFnbWVudFxuXHRcdFx0c2VudGluZWwuJCRyZWVudHJhbnRMb2NrJCQgPSB0cnVlXG5cdFx0XHR2bm9kZS5zdGF0ZSA9ICh2bm9kZS50YWcucHJvdG90eXBlICE9IG51bGwgJiYgdHlwZW9mIHZub2RlLnRhZy5wcm90b3R5cGUudmlldyA9PT0gXCJmdW5jdGlvblwiKSA/IG5ldyB2bm9kZS50YWcodm5vZGUpIDogdm5vZGUudGFnKHZub2RlKVxuXHRcdH1cblx0XHR2bm9kZS5fc3RhdGUgPSB2bm9kZS5zdGF0ZVxuXHRcdGlmICh2bm9kZS5hdHRycyAhPSBudWxsKSBpbml0TGlmZWN5Y2xlKHZub2RlLmF0dHJzLCB2bm9kZSwgaG9va3MpXG5cdFx0aW5pdExpZmVjeWNsZSh2bm9kZS5fc3RhdGUsIHZub2RlLCBob29rcylcblx0XHR2bm9kZS5pbnN0YW5jZSA9IFZub2RlLm5vcm1hbGl6ZSh2bm9kZS5fc3RhdGUudmlldy5jYWxsKHZub2RlLnN0YXRlLCB2bm9kZSkpXG5cdFx0aWYgKHZub2RlLmluc3RhbmNlID09PSB2bm9kZSkgdGhyb3cgRXJyb3IoXCJBIHZpZXcgY2Fubm90IHJldHVybiB0aGUgdm5vZGUgaXQgcmVjZWl2ZWQgYXMgYXJndW1lbnRcIilcblx0XHRzZW50aW5lbC4kJHJlZW50cmFudExvY2skJCA9IG51bGxcblx0fVxuXHRmdW5jdGlvbiBjcmVhdGVDb21wb25lbnQocGFyZW50LCB2bm9kZSwgaG9va3MsIG5zLCBuZXh0U2libGluZykge1xuXHRcdGluaXRDb21wb25lbnQodm5vZGUsIGhvb2tzKVxuXHRcdGlmICh2bm9kZS5pbnN0YW5jZSAhPSBudWxsKSB7XG5cdFx0XHR2YXIgZWxlbWVudCA9IGNyZWF0ZU5vZGUocGFyZW50LCB2bm9kZS5pbnN0YW5jZSwgaG9va3MsIG5zLCBuZXh0U2libGluZylcblx0XHRcdHZub2RlLmRvbSA9IHZub2RlLmluc3RhbmNlLmRvbVxuXHRcdFx0dm5vZGUuZG9tU2l6ZSA9IHZub2RlLmRvbSAhPSBudWxsID8gdm5vZGUuaW5zdGFuY2UuZG9tU2l6ZSA6IDBcblx0XHRcdGluc2VydE5vZGUocGFyZW50LCBlbGVtZW50LCBuZXh0U2libGluZylcblx0XHRcdHJldHVybiBlbGVtZW50XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0dm5vZGUuZG9tU2l6ZSA9IDBcblx0XHRcdHJldHVybiAkZW1wdHlGcmFnbWVudFxuXHRcdH1cblx0fVxuXHQvL3VwZGF0ZVxuXHRmdW5jdGlvbiB1cGRhdGVOb2RlcyhwYXJlbnQsIG9sZCwgdm5vZGVzLCByZWN5Y2xpbmcsIGhvb2tzLCBuZXh0U2libGluZywgbnMpIHtcblx0XHRpZiAob2xkID09PSB2bm9kZXMgfHwgb2xkID09IG51bGwgJiYgdm5vZGVzID09IG51bGwpIHJldHVyblxuXHRcdGVsc2UgaWYgKG9sZCA9PSBudWxsKSBjcmVhdGVOb2RlcyhwYXJlbnQsIHZub2RlcywgMCwgdm5vZGVzLmxlbmd0aCwgaG9va3MsIG5leHRTaWJsaW5nLCBucylcblx0XHRlbHNlIGlmICh2bm9kZXMgPT0gbnVsbCkgcmVtb3ZlTm9kZXMob2xkLCAwLCBvbGQubGVuZ3RoLCB2bm9kZXMpXG5cdFx0ZWxzZSB7XG5cdFx0XHRpZiAob2xkLmxlbmd0aCA9PT0gdm5vZGVzLmxlbmd0aCkge1xuXHRcdFx0XHR2YXIgaXNVbmtleWVkID0gZmFsc2Vcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB2bm9kZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRpZiAodm5vZGVzW2ldICE9IG51bGwgJiYgb2xkW2ldICE9IG51bGwpIHtcblx0XHRcdFx0XHRcdGlzVW5rZXllZCA9IHZub2Rlc1tpXS5rZXkgPT0gbnVsbCAmJiBvbGRbaV0ua2V5ID09IG51bGxcblx0XHRcdFx0XHRcdGJyZWFrXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChpc1Vua2V5ZWQpIHtcblx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG9sZC5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdFx0aWYgKG9sZFtpXSA9PT0gdm5vZGVzW2ldKSBjb250aW51ZVxuXHRcdFx0XHRcdFx0ZWxzZSBpZiAob2xkW2ldID09IG51bGwgJiYgdm5vZGVzW2ldICE9IG51bGwpIGNyZWF0ZU5vZGUocGFyZW50LCB2bm9kZXNbaV0sIGhvb2tzLCBucywgZ2V0TmV4dFNpYmxpbmcob2xkLCBpICsgMSwgbmV4dFNpYmxpbmcpKVxuXHRcdFx0XHRcdFx0ZWxzZSBpZiAodm5vZGVzW2ldID09IG51bGwpIHJlbW92ZU5vZGVzKG9sZCwgaSwgaSArIDEsIHZub2Rlcylcblx0XHRcdFx0XHRcdGVsc2UgdXBkYXRlTm9kZShwYXJlbnQsIG9sZFtpXSwgdm5vZGVzW2ldLCBob29rcywgZ2V0TmV4dFNpYmxpbmcob2xkLCBpICsgMSwgbmV4dFNpYmxpbmcpLCByZWN5Y2xpbmcsIG5zKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm5cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmVjeWNsaW5nID0gcmVjeWNsaW5nIHx8IGlzUmVjeWNsYWJsZShvbGQsIHZub2Rlcylcblx0XHRcdGlmIChyZWN5Y2xpbmcpIHtcblx0XHRcdFx0dmFyIHBvb2wgPSBvbGQucG9vbFxuXHRcdFx0XHRvbGQgPSBvbGQuY29uY2F0KG9sZC5wb29sKVxuXHRcdFx0fVxuXHRcdFx0dmFyIG9sZFN0YXJ0ID0gMCwgc3RhcnQgPSAwLCBvbGRFbmQgPSBvbGQubGVuZ3RoIC0gMSwgZW5kID0gdm5vZGVzLmxlbmd0aCAtIDEsIG1hcFxuXHRcdFx0d2hpbGUgKG9sZEVuZCA+PSBvbGRTdGFydCAmJiBlbmQgPj0gc3RhcnQpIHtcblx0XHRcdFx0dmFyIG8gPSBvbGRbb2xkU3RhcnRdLCB2ID0gdm5vZGVzW3N0YXJ0XVxuXHRcdFx0XHRpZiAobyA9PT0gdiAmJiAhcmVjeWNsaW5nKSBvbGRTdGFydCsrLCBzdGFydCsrXG5cdFx0XHRcdGVsc2UgaWYgKG8gPT0gbnVsbCkgb2xkU3RhcnQrK1xuXHRcdFx0XHRlbHNlIGlmICh2ID09IG51bGwpIHN0YXJ0Kytcblx0XHRcdFx0ZWxzZSBpZiAoby5rZXkgPT09IHYua2V5KSB7XG5cdFx0XHRcdFx0dmFyIHNob3VsZFJlY3ljbGUgPSAocG9vbCAhPSBudWxsICYmIG9sZFN0YXJ0ID49IG9sZC5sZW5ndGggLSBwb29sLmxlbmd0aCkgfHwgKChwb29sID09IG51bGwpICYmIHJlY3ljbGluZylcblx0XHRcdFx0XHRvbGRTdGFydCsrLCBzdGFydCsrXG5cdFx0XHRcdFx0dXBkYXRlTm9kZShwYXJlbnQsIG8sIHYsIGhvb2tzLCBnZXROZXh0U2libGluZyhvbGQsIG9sZFN0YXJ0LCBuZXh0U2libGluZyksIHNob3VsZFJlY3ljbGUsIG5zKVxuXHRcdFx0XHRcdGlmIChyZWN5Y2xpbmcgJiYgby50YWcgPT09IHYudGFnKSBpbnNlcnROb2RlKHBhcmVudCwgdG9GcmFnbWVudChvKSwgbmV4dFNpYmxpbmcpXG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0dmFyIG8gPSBvbGRbb2xkRW5kXVxuXHRcdFx0XHRcdGlmIChvID09PSB2ICYmICFyZWN5Y2xpbmcpIG9sZEVuZC0tLCBzdGFydCsrXG5cdFx0XHRcdFx0ZWxzZSBpZiAobyA9PSBudWxsKSBvbGRFbmQtLVxuXHRcdFx0XHRcdGVsc2UgaWYgKHYgPT0gbnVsbCkgc3RhcnQrK1xuXHRcdFx0XHRcdGVsc2UgaWYgKG8ua2V5ID09PSB2LmtleSkge1xuXHRcdFx0XHRcdFx0dmFyIHNob3VsZFJlY3ljbGUgPSAocG9vbCAhPSBudWxsICYmIG9sZEVuZCA+PSBvbGQubGVuZ3RoIC0gcG9vbC5sZW5ndGgpIHx8ICgocG9vbCA9PSBudWxsKSAmJiByZWN5Y2xpbmcpXG5cdFx0XHRcdFx0XHR1cGRhdGVOb2RlKHBhcmVudCwgbywgdiwgaG9va3MsIGdldE5leHRTaWJsaW5nKG9sZCwgb2xkRW5kICsgMSwgbmV4dFNpYmxpbmcpLCBzaG91bGRSZWN5Y2xlLCBucylcblx0XHRcdFx0XHRcdGlmIChyZWN5Y2xpbmcgfHwgc3RhcnQgPCBlbmQpIGluc2VydE5vZGUocGFyZW50LCB0b0ZyYWdtZW50KG8pLCBnZXROZXh0U2libGluZyhvbGQsIG9sZFN0YXJ0LCBuZXh0U2libGluZykpXG5cdFx0XHRcdFx0XHRvbGRFbmQtLSwgc3RhcnQrK1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbHNlIGJyZWFrXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHdoaWxlIChvbGRFbmQgPj0gb2xkU3RhcnQgJiYgZW5kID49IHN0YXJ0KSB7XG5cdFx0XHRcdHZhciBvID0gb2xkW29sZEVuZF0sIHYgPSB2bm9kZXNbZW5kXVxuXHRcdFx0XHRpZiAobyA9PT0gdiAmJiAhcmVjeWNsaW5nKSBvbGRFbmQtLSwgZW5kLS1cblx0XHRcdFx0ZWxzZSBpZiAobyA9PSBudWxsKSBvbGRFbmQtLVxuXHRcdFx0XHRlbHNlIGlmICh2ID09IG51bGwpIGVuZC0tXG5cdFx0XHRcdGVsc2UgaWYgKG8ua2V5ID09PSB2LmtleSkge1xuXHRcdFx0XHRcdHZhciBzaG91bGRSZWN5Y2xlID0gKHBvb2wgIT0gbnVsbCAmJiBvbGRFbmQgPj0gb2xkLmxlbmd0aCAtIHBvb2wubGVuZ3RoKSB8fCAoKHBvb2wgPT0gbnVsbCkgJiYgcmVjeWNsaW5nKVxuXHRcdFx0XHRcdHVwZGF0ZU5vZGUocGFyZW50LCBvLCB2LCBob29rcywgZ2V0TmV4dFNpYmxpbmcob2xkLCBvbGRFbmQgKyAxLCBuZXh0U2libGluZyksIHNob3VsZFJlY3ljbGUsIG5zKVxuXHRcdFx0XHRcdGlmIChyZWN5Y2xpbmcgJiYgby50YWcgPT09IHYudGFnKSBpbnNlcnROb2RlKHBhcmVudCwgdG9GcmFnbWVudChvKSwgbmV4dFNpYmxpbmcpXG5cdFx0XHRcdFx0aWYgKG8uZG9tICE9IG51bGwpIG5leHRTaWJsaW5nID0gby5kb21cblx0XHRcdFx0XHRvbGRFbmQtLSwgZW5kLS1cblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRpZiAoIW1hcCkgbWFwID0gZ2V0S2V5TWFwKG9sZCwgb2xkRW5kKVxuXHRcdFx0XHRcdGlmICh2ICE9IG51bGwpIHtcblx0XHRcdFx0XHRcdHZhciBvbGRJbmRleCA9IG1hcFt2LmtleV1cblx0XHRcdFx0XHRcdGlmIChvbGRJbmRleCAhPSBudWxsKSB7XG5cdFx0XHRcdFx0XHRcdHZhciBtb3ZhYmxlID0gb2xkW29sZEluZGV4XVxuXHRcdFx0XHRcdFx0XHR2YXIgc2hvdWxkUmVjeWNsZSA9IChwb29sICE9IG51bGwgJiYgb2xkSW5kZXggPj0gb2xkLmxlbmd0aCAtIHBvb2wubGVuZ3RoKSB8fCAoKHBvb2wgPT0gbnVsbCkgJiYgcmVjeWNsaW5nKVxuXHRcdFx0XHRcdFx0XHR1cGRhdGVOb2RlKHBhcmVudCwgbW92YWJsZSwgdiwgaG9va3MsIGdldE5leHRTaWJsaW5nKG9sZCwgb2xkRW5kICsgMSwgbmV4dFNpYmxpbmcpLCByZWN5Y2xpbmcsIG5zKVxuXHRcdFx0XHRcdFx0XHRpbnNlcnROb2RlKHBhcmVudCwgdG9GcmFnbWVudChtb3ZhYmxlKSwgbmV4dFNpYmxpbmcpXG5cdFx0XHRcdFx0XHRcdG9sZFtvbGRJbmRleF0uc2tpcCA9IHRydWVcblx0XHRcdFx0XHRcdFx0aWYgKG1vdmFibGUuZG9tICE9IG51bGwpIG5leHRTaWJsaW5nID0gbW92YWJsZS5kb21cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdFx0XHR2YXIgZG9tID0gY3JlYXRlTm9kZShwYXJlbnQsIHYsIGhvb2tzLCBucywgbmV4dFNpYmxpbmcpXG5cdFx0XHRcdFx0XHRcdG5leHRTaWJsaW5nID0gZG9tXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVuZC0tXG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGVuZCA8IHN0YXJ0KSBicmVha1xuXHRcdFx0fVxuXHRcdFx0Y3JlYXRlTm9kZXMocGFyZW50LCB2bm9kZXMsIHN0YXJ0LCBlbmQgKyAxLCBob29rcywgbmV4dFNpYmxpbmcsIG5zKVxuXHRcdFx0cmVtb3ZlTm9kZXMob2xkLCBvbGRTdGFydCwgb2xkRW5kICsgMSwgdm5vZGVzKVxuXHRcdH1cblx0fVxuXHRmdW5jdGlvbiB1cGRhdGVOb2RlKHBhcmVudCwgb2xkLCB2bm9kZSwgaG9va3MsIG5leHRTaWJsaW5nLCByZWN5Y2xpbmcsIG5zKSB7XG5cdFx0dmFyIG9sZFRhZyA9IG9sZC50YWcsIHRhZyA9IHZub2RlLnRhZ1xuXHRcdGlmIChvbGRUYWcgPT09IHRhZykge1xuXHRcdFx0dm5vZGUuc3RhdGUgPSBvbGQuc3RhdGVcblx0XHRcdHZub2RlLl9zdGF0ZSA9IG9sZC5fc3RhdGVcblx0XHRcdHZub2RlLmV2ZW50cyA9IG9sZC5ldmVudHNcblx0XHRcdGlmICghcmVjeWNsaW5nICYmIHNob3VsZE5vdFVwZGF0ZSh2bm9kZSwgb2xkKSkgcmV0dXJuXG5cdFx0XHRpZiAodHlwZW9mIG9sZFRhZyA9PT0gXCJzdHJpbmdcIikge1xuXHRcdFx0XHRpZiAodm5vZGUuYXR0cnMgIT0gbnVsbCkge1xuXHRcdFx0XHRcdGlmIChyZWN5Y2xpbmcpIHtcblx0XHRcdFx0XHRcdHZub2RlLnN0YXRlID0ge31cblx0XHRcdFx0XHRcdGluaXRMaWZlY3ljbGUodm5vZGUuYXR0cnMsIHZub2RlLCBob29rcylcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZWxzZSB1cGRhdGVMaWZlY3ljbGUodm5vZGUuYXR0cnMsIHZub2RlLCBob29rcylcblx0XHRcdFx0fVxuXHRcdFx0XHRzd2l0Y2ggKG9sZFRhZykge1xuXHRcdFx0XHRcdGNhc2UgXCIjXCI6IHVwZGF0ZVRleHQob2xkLCB2bm9kZSk7IGJyZWFrXG5cdFx0XHRcdFx0Y2FzZSBcIjxcIjogdXBkYXRlSFRNTChwYXJlbnQsIG9sZCwgdm5vZGUsIG5leHRTaWJsaW5nKTsgYnJlYWtcblx0XHRcdFx0XHRjYXNlIFwiW1wiOiB1cGRhdGVGcmFnbWVudChwYXJlbnQsIG9sZCwgdm5vZGUsIHJlY3ljbGluZywgaG9va3MsIG5leHRTaWJsaW5nLCBucyk7IGJyZWFrXG5cdFx0XHRcdFx0ZGVmYXVsdDogdXBkYXRlRWxlbWVudChvbGQsIHZub2RlLCByZWN5Y2xpbmcsIGhvb2tzLCBucylcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0ZWxzZSB1cGRhdGVDb21wb25lbnQocGFyZW50LCBvbGQsIHZub2RlLCBob29rcywgbmV4dFNpYmxpbmcsIHJlY3ljbGluZywgbnMpXG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0cmVtb3ZlTm9kZShvbGQsIG51bGwpXG5cdFx0XHRjcmVhdGVOb2RlKHBhcmVudCwgdm5vZGUsIGhvb2tzLCBucywgbmV4dFNpYmxpbmcpXG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIHVwZGF0ZVRleHQob2xkLCB2bm9kZSkge1xuXHRcdGlmIChvbGQuY2hpbGRyZW4udG9TdHJpbmcoKSAhPT0gdm5vZGUuY2hpbGRyZW4udG9TdHJpbmcoKSkge1xuXHRcdFx0b2xkLmRvbS5ub2RlVmFsdWUgPSB2bm9kZS5jaGlsZHJlblxuXHRcdH1cblx0XHR2bm9kZS5kb20gPSBvbGQuZG9tXG5cdH1cblx0ZnVuY3Rpb24gdXBkYXRlSFRNTChwYXJlbnQsIG9sZCwgdm5vZGUsIG5leHRTaWJsaW5nKSB7XG5cdFx0aWYgKG9sZC5jaGlsZHJlbiAhPT0gdm5vZGUuY2hpbGRyZW4pIHtcblx0XHRcdHRvRnJhZ21lbnQob2xkKVxuXHRcdFx0Y3JlYXRlSFRNTChwYXJlbnQsIHZub2RlLCBuZXh0U2libGluZylcblx0XHR9XG5cdFx0ZWxzZSB2bm9kZS5kb20gPSBvbGQuZG9tLCB2bm9kZS5kb21TaXplID0gb2xkLmRvbVNpemVcblx0fVxuXHRmdW5jdGlvbiB1cGRhdGVGcmFnbWVudChwYXJlbnQsIG9sZCwgdm5vZGUsIHJlY3ljbGluZywgaG9va3MsIG5leHRTaWJsaW5nLCBucykge1xuXHRcdHVwZGF0ZU5vZGVzKHBhcmVudCwgb2xkLmNoaWxkcmVuLCB2bm9kZS5jaGlsZHJlbiwgcmVjeWNsaW5nLCBob29rcywgbmV4dFNpYmxpbmcsIG5zKVxuXHRcdHZhciBkb21TaXplID0gMCwgY2hpbGRyZW4gPSB2bm9kZS5jaGlsZHJlblxuXHRcdHZub2RlLmRvbSA9IG51bGxcblx0XHRpZiAoY2hpbGRyZW4gIT0gbnVsbCkge1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHR2YXIgY2hpbGQgPSBjaGlsZHJlbltpXVxuXHRcdFx0XHRpZiAoY2hpbGQgIT0gbnVsbCAmJiBjaGlsZC5kb20gIT0gbnVsbCkge1xuXHRcdFx0XHRcdGlmICh2bm9kZS5kb20gPT0gbnVsbCkgdm5vZGUuZG9tID0gY2hpbGQuZG9tXG5cdFx0XHRcdFx0ZG9tU2l6ZSArPSBjaGlsZC5kb21TaXplIHx8IDFcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKGRvbVNpemUgIT09IDEpIHZub2RlLmRvbVNpemUgPSBkb21TaXplXG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIHVwZGF0ZUVsZW1lbnQob2xkLCB2bm9kZSwgcmVjeWNsaW5nLCBob29rcywgbnMpIHtcblx0XHR2YXIgZWxlbWVudCA9IHZub2RlLmRvbSA9IG9sZC5kb21cblx0XHRucyA9IGdldE5hbWVTcGFjZSh2bm9kZSkgfHwgbnNcblx0XHRpZiAodm5vZGUudGFnID09PSBcInRleHRhcmVhXCIpIHtcblx0XHRcdGlmICh2bm9kZS5hdHRycyA9PSBudWxsKSB2bm9kZS5hdHRycyA9IHt9XG5cdFx0XHRpZiAodm5vZGUudGV4dCAhPSBudWxsKSB7XG5cdFx0XHRcdHZub2RlLmF0dHJzLnZhbHVlID0gdm5vZGUudGV4dCAvL0ZJWE1FIGhhbmRsZTAgbXVsdGlwbGUgY2hpbGRyZW5cblx0XHRcdFx0dm5vZGUudGV4dCA9IHVuZGVmaW5lZFxuXHRcdFx0fVxuXHRcdH1cblx0XHR1cGRhdGVBdHRycyh2bm9kZSwgb2xkLmF0dHJzLCB2bm9kZS5hdHRycywgbnMpXG5cdFx0aWYgKHZub2RlLmF0dHJzICE9IG51bGwgJiYgdm5vZGUuYXR0cnMuY29udGVudGVkaXRhYmxlICE9IG51bGwpIHtcblx0XHRcdHNldENvbnRlbnRFZGl0YWJsZSh2bm9kZSlcblx0XHR9XG5cdFx0ZWxzZSBpZiAob2xkLnRleHQgIT0gbnVsbCAmJiB2bm9kZS50ZXh0ICE9IG51bGwgJiYgdm5vZGUudGV4dCAhPT0gXCJcIikge1xuXHRcdFx0aWYgKG9sZC50ZXh0LnRvU3RyaW5nKCkgIT09IHZub2RlLnRleHQudG9TdHJpbmcoKSkgb2xkLmRvbS5maXJzdENoaWxkLm5vZGVWYWx1ZSA9IHZub2RlLnRleHRcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRpZiAob2xkLnRleHQgIT0gbnVsbCkgb2xkLmNoaWxkcmVuID0gW1Zub2RlKFwiI1wiLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgb2xkLnRleHQsIHVuZGVmaW5lZCwgb2xkLmRvbS5maXJzdENoaWxkKV1cblx0XHRcdGlmICh2bm9kZS50ZXh0ICE9IG51bGwpIHZub2RlLmNoaWxkcmVuID0gW1Zub2RlKFwiI1wiLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdm5vZGUudGV4dCwgdW5kZWZpbmVkLCB1bmRlZmluZWQpXVxuXHRcdFx0dXBkYXRlTm9kZXMoZWxlbWVudCwgb2xkLmNoaWxkcmVuLCB2bm9kZS5jaGlsZHJlbiwgcmVjeWNsaW5nLCBob29rcywgbnVsbCwgbnMpXG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIHVwZGF0ZUNvbXBvbmVudChwYXJlbnQsIG9sZCwgdm5vZGUsIGhvb2tzLCBuZXh0U2libGluZywgcmVjeWNsaW5nLCBucykge1xuXHRcdGlmIChyZWN5Y2xpbmcpIHtcblx0XHRcdGluaXRDb21wb25lbnQodm5vZGUsIGhvb2tzKVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2bm9kZS5pbnN0YW5jZSA9IFZub2RlLm5vcm1hbGl6ZSh2bm9kZS5fc3RhdGUudmlldy5jYWxsKHZub2RlLnN0YXRlLCB2bm9kZSkpXG5cdFx0XHRpZiAodm5vZGUuaW5zdGFuY2UgPT09IHZub2RlKSB0aHJvdyBFcnJvcihcIkEgdmlldyBjYW5ub3QgcmV0dXJuIHRoZSB2bm9kZSBpdCByZWNlaXZlZCBhcyBhcmd1bWVudFwiKVxuXHRcdFx0aWYgKHZub2RlLmF0dHJzICE9IG51bGwpIHVwZGF0ZUxpZmVjeWNsZSh2bm9kZS5hdHRycywgdm5vZGUsIGhvb2tzKVxuXHRcdFx0dXBkYXRlTGlmZWN5Y2xlKHZub2RlLl9zdGF0ZSwgdm5vZGUsIGhvb2tzKVxuXHRcdH1cblx0XHRpZiAodm5vZGUuaW5zdGFuY2UgIT0gbnVsbCkge1xuXHRcdFx0aWYgKG9sZC5pbnN0YW5jZSA9PSBudWxsKSBjcmVhdGVOb2RlKHBhcmVudCwgdm5vZGUuaW5zdGFuY2UsIGhvb2tzLCBucywgbmV4dFNpYmxpbmcpXG5cdFx0XHRlbHNlIHVwZGF0ZU5vZGUocGFyZW50LCBvbGQuaW5zdGFuY2UsIHZub2RlLmluc3RhbmNlLCBob29rcywgbmV4dFNpYmxpbmcsIHJlY3ljbGluZywgbnMpXG5cdFx0XHR2bm9kZS5kb20gPSB2bm9kZS5pbnN0YW5jZS5kb21cblx0XHRcdHZub2RlLmRvbVNpemUgPSB2bm9kZS5pbnN0YW5jZS5kb21TaXplXG5cdFx0fVxuXHRcdGVsc2UgaWYgKG9sZC5pbnN0YW5jZSAhPSBudWxsKSB7XG5cdFx0XHRyZW1vdmVOb2RlKG9sZC5pbnN0YW5jZSwgbnVsbClcblx0XHRcdHZub2RlLmRvbSA9IHVuZGVmaW5lZFxuXHRcdFx0dm5vZGUuZG9tU2l6ZSA9IDBcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHR2bm9kZS5kb20gPSBvbGQuZG9tXG5cdFx0XHR2bm9kZS5kb21TaXplID0gb2xkLmRvbVNpemVcblx0XHR9XG5cdH1cblx0ZnVuY3Rpb24gaXNSZWN5Y2xhYmxlKG9sZCwgdm5vZGVzKSB7XG5cdFx0aWYgKG9sZC5wb29sICE9IG51bGwgJiYgTWF0aC5hYnMob2xkLnBvb2wubGVuZ3RoIC0gdm5vZGVzLmxlbmd0aCkgPD0gTWF0aC5hYnMob2xkLmxlbmd0aCAtIHZub2Rlcy5sZW5ndGgpKSB7XG5cdFx0XHR2YXIgb2xkQ2hpbGRyZW5MZW5ndGggPSBvbGRbMF0gJiYgb2xkWzBdLmNoaWxkcmVuICYmIG9sZFswXS5jaGlsZHJlbi5sZW5ndGggfHwgMFxuXHRcdFx0dmFyIHBvb2xDaGlsZHJlbkxlbmd0aCA9IG9sZC5wb29sWzBdICYmIG9sZC5wb29sWzBdLmNoaWxkcmVuICYmIG9sZC5wb29sWzBdLmNoaWxkcmVuLmxlbmd0aCB8fCAwXG5cdFx0XHR2YXIgdm5vZGVzQ2hpbGRyZW5MZW5ndGggPSB2bm9kZXNbMF0gJiYgdm5vZGVzWzBdLmNoaWxkcmVuICYmIHZub2Rlc1swXS5jaGlsZHJlbi5sZW5ndGggfHwgMFxuXHRcdFx0aWYgKE1hdGguYWJzKHBvb2xDaGlsZHJlbkxlbmd0aCAtIHZub2Rlc0NoaWxkcmVuTGVuZ3RoKSA8PSBNYXRoLmFicyhvbGRDaGlsZHJlbkxlbmd0aCAtIHZub2Rlc0NoaWxkcmVuTGVuZ3RoKSkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2Vcblx0fVxuXHRmdW5jdGlvbiBnZXRLZXlNYXAodm5vZGVzLCBlbmQpIHtcblx0XHR2YXIgbWFwID0ge30sIGkgPSAwXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBlbmQ7IGkrKykge1xuXHRcdFx0dmFyIHZub2RlID0gdm5vZGVzW2ldXG5cdFx0XHRpZiAodm5vZGUgIT0gbnVsbCkge1xuXHRcdFx0XHR2YXIga2V5MiA9IHZub2RlLmtleVxuXHRcdFx0XHRpZiAoa2V5MiAhPSBudWxsKSBtYXBba2V5Ml0gPSBpXG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBtYXBcblx0fVxuXHRmdW5jdGlvbiB0b0ZyYWdtZW50KHZub2RlKSB7XG5cdFx0dmFyIGNvdW50MCA9IHZub2RlLmRvbVNpemVcblx0XHRpZiAoY291bnQwICE9IG51bGwgfHwgdm5vZGUuZG9tID09IG51bGwpIHtcblx0XHRcdHZhciBmcmFnbWVudCA9ICRkb2MuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpXG5cdFx0XHRpZiAoY291bnQwID4gMCkge1xuXHRcdFx0XHR2YXIgZG9tID0gdm5vZGUuZG9tXG5cdFx0XHRcdHdoaWxlICgtLWNvdW50MCkgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoZG9tLm5leHRTaWJsaW5nKVxuXHRcdFx0XHRmcmFnbWVudC5pbnNlcnRCZWZvcmUoZG9tLCBmcmFnbWVudC5maXJzdENoaWxkKVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZyYWdtZW50XG5cdFx0fVxuXHRcdGVsc2UgcmV0dXJuIHZub2RlLmRvbVxuXHR9XG5cdGZ1bmN0aW9uIGdldE5leHRTaWJsaW5nKHZub2RlcywgaSwgbmV4dFNpYmxpbmcpIHtcblx0XHRmb3IgKDsgaSA8IHZub2Rlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKHZub2Rlc1tpXSAhPSBudWxsICYmIHZub2Rlc1tpXS5kb20gIT0gbnVsbCkgcmV0dXJuIHZub2Rlc1tpXS5kb21cblx0XHR9XG5cdFx0cmV0dXJuIG5leHRTaWJsaW5nXG5cdH1cblx0ZnVuY3Rpb24gaW5zZXJ0Tm9kZShwYXJlbnQsIGRvbSwgbmV4dFNpYmxpbmcpIHtcblx0XHRpZiAobmV4dFNpYmxpbmcgJiYgbmV4dFNpYmxpbmcucGFyZW50Tm9kZSkgcGFyZW50Lmluc2VydEJlZm9yZShkb20sIG5leHRTaWJsaW5nKVxuXHRcdGVsc2UgcGFyZW50LmFwcGVuZENoaWxkKGRvbSlcblx0fVxuXHRmdW5jdGlvbiBzZXRDb250ZW50RWRpdGFibGUodm5vZGUpIHtcblx0XHR2YXIgY2hpbGRyZW4gPSB2bm9kZS5jaGlsZHJlblxuXHRcdGlmIChjaGlsZHJlbiAhPSBudWxsICYmIGNoaWxkcmVuLmxlbmd0aCA9PT0gMSAmJiBjaGlsZHJlblswXS50YWcgPT09IFwiPFwiKSB7XG5cdFx0XHR2YXIgY29udGVudCA9IGNoaWxkcmVuWzBdLmNoaWxkcmVuXG5cdFx0XHRpZiAodm5vZGUuZG9tLmlubmVySFRNTCAhPT0gY29udGVudCkgdm5vZGUuZG9tLmlubmVySFRNTCA9IGNvbnRlbnRcblx0XHR9XG5cdFx0ZWxzZSBpZiAodm5vZGUudGV4dCAhPSBudWxsIHx8IGNoaWxkcmVuICE9IG51bGwgJiYgY2hpbGRyZW4ubGVuZ3RoICE9PSAwKSB0aHJvdyBuZXcgRXJyb3IoXCJDaGlsZCBub2RlIG9mIGEgY29udGVudGVkaXRhYmxlIG11c3QgYmUgdHJ1c3RlZFwiKVxuXHR9XG5cdC8vcmVtb3ZlXG5cdGZ1bmN0aW9uIHJlbW92ZU5vZGVzKHZub2Rlcywgc3RhcnQsIGVuZCwgY29udGV4dCkge1xuXHRcdGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XG5cdFx0XHR2YXIgdm5vZGUgPSB2bm9kZXNbaV1cblx0XHRcdGlmICh2bm9kZSAhPSBudWxsKSB7XG5cdFx0XHRcdGlmICh2bm9kZS5za2lwKSB2bm9kZS5za2lwID0gZmFsc2Vcblx0XHRcdFx0ZWxzZSByZW1vdmVOb2RlKHZub2RlLCBjb250ZXh0KVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRmdW5jdGlvbiByZW1vdmVOb2RlKHZub2RlLCBjb250ZXh0KSB7XG5cdFx0dmFyIGV4cGVjdGVkID0gMSwgY2FsbGVkID0gMFxuXHRcdGlmICh2bm9kZS5hdHRycyAmJiB0eXBlb2Ygdm5vZGUuYXR0cnMub25iZWZvcmVyZW1vdmUgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0dmFyIHJlc3VsdCA9IHZub2RlLmF0dHJzLm9uYmVmb3JlcmVtb3ZlLmNhbGwodm5vZGUuc3RhdGUsIHZub2RlKVxuXHRcdFx0aWYgKHJlc3VsdCAhPSBudWxsICYmIHR5cGVvZiByZXN1bHQudGhlbiA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdGV4cGVjdGVkKytcblx0XHRcdFx0cmVzdWx0LnRoZW4oY29udGludWF0aW9uLCBjb250aW51YXRpb24pXG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmICh0eXBlb2Ygdm5vZGUudGFnICE9PSBcInN0cmluZ1wiICYmIHR5cGVvZiB2bm9kZS5fc3RhdGUub25iZWZvcmVyZW1vdmUgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0dmFyIHJlc3VsdCA9IHZub2RlLl9zdGF0ZS5vbmJlZm9yZXJlbW92ZS5jYWxsKHZub2RlLnN0YXRlLCB2bm9kZSlcblx0XHRcdGlmIChyZXN1bHQgIT0gbnVsbCAmJiB0eXBlb2YgcmVzdWx0LnRoZW4gPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHRleHBlY3RlZCsrXG5cdFx0XHRcdHJlc3VsdC50aGVuKGNvbnRpbnVhdGlvbiwgY29udGludWF0aW9uKVxuXHRcdFx0fVxuXHRcdH1cblx0XHRjb250aW51YXRpb24oKVxuXHRcdGZ1bmN0aW9uIGNvbnRpbnVhdGlvbigpIHtcblx0XHRcdGlmICgrK2NhbGxlZCA9PT0gZXhwZWN0ZWQpIHtcblx0XHRcdFx0b25yZW1vdmUodm5vZGUpXG5cdFx0XHRcdGlmICh2bm9kZS5kb20pIHtcblx0XHRcdFx0XHR2YXIgY291bnQwID0gdm5vZGUuZG9tU2l6ZSB8fCAxXG5cdFx0XHRcdFx0aWYgKGNvdW50MCA+IDEpIHtcblx0XHRcdFx0XHRcdHZhciBkb20gPSB2bm9kZS5kb21cblx0XHRcdFx0XHRcdHdoaWxlICgtLWNvdW50MCkge1xuXHRcdFx0XHRcdFx0XHRyZW1vdmVOb2RlRnJvbURPTShkb20ubmV4dFNpYmxpbmcpXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJlbW92ZU5vZGVGcm9tRE9NKHZub2RlLmRvbSlcblx0XHRcdFx0XHRpZiAoY29udGV4dCAhPSBudWxsICYmIHZub2RlLmRvbVNpemUgPT0gbnVsbCAmJiAhaGFzSW50ZWdyYXRpb25NZXRob2RzKHZub2RlLmF0dHJzKSAmJiB0eXBlb2Ygdm5vZGUudGFnID09PSBcInN0cmluZ1wiKSB7IC8vVE9ETyB0ZXN0IGN1c3RvbSBlbGVtZW50c1xuXHRcdFx0XHRcdFx0aWYgKCFjb250ZXh0LnBvb2wpIGNvbnRleHQucG9vbCA9IFt2bm9kZV1cblx0XHRcdFx0XHRcdGVsc2UgY29udGV4dC5wb29sLnB1c2godm5vZGUpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIHJlbW92ZU5vZGVGcm9tRE9NKG5vZGUpIHtcblx0XHR2YXIgcGFyZW50ID0gbm9kZS5wYXJlbnROb2RlXG5cdFx0aWYgKHBhcmVudCAhPSBudWxsKSBwYXJlbnQucmVtb3ZlQ2hpbGQobm9kZSlcblx0fVxuXHRmdW5jdGlvbiBvbnJlbW92ZSh2bm9kZSkge1xuXHRcdGlmICh2bm9kZS5hdHRycyAmJiB0eXBlb2Ygdm5vZGUuYXR0cnMub25yZW1vdmUgPT09IFwiZnVuY3Rpb25cIikgdm5vZGUuYXR0cnMub25yZW1vdmUuY2FsbCh2bm9kZS5zdGF0ZSwgdm5vZGUpXG5cdFx0aWYgKHR5cGVvZiB2bm9kZS50YWcgIT09IFwic3RyaW5nXCIpIHtcblx0XHRcdGlmICh0eXBlb2Ygdm5vZGUuX3N0YXRlLm9ucmVtb3ZlID09PSBcImZ1bmN0aW9uXCIpIHZub2RlLl9zdGF0ZS5vbnJlbW92ZS5jYWxsKHZub2RlLnN0YXRlLCB2bm9kZSlcblx0XHRcdGlmICh2bm9kZS5pbnN0YW5jZSAhPSBudWxsKSBvbnJlbW92ZSh2bm9kZS5pbnN0YW5jZSlcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIGNoaWxkcmVuID0gdm5vZGUuY2hpbGRyZW5cblx0XHRcdGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0dmFyIGNoaWxkID0gY2hpbGRyZW5baV1cblx0XHRcdFx0XHRpZiAoY2hpbGQgIT0gbnVsbCkgb25yZW1vdmUoY2hpbGQpXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblx0Ly9hdHRyczJcblx0ZnVuY3Rpb24gc2V0QXR0cnModm5vZGUsIGF0dHJzMiwgbnMpIHtcblx0XHRmb3IgKHZhciBrZXkyIGluIGF0dHJzMikge1xuXHRcdFx0c2V0QXR0cih2bm9kZSwga2V5MiwgbnVsbCwgYXR0cnMyW2tleTJdLCBucylcblx0XHR9XG5cdH1cblx0ZnVuY3Rpb24gc2V0QXR0cih2bm9kZSwga2V5Miwgb2xkLCB2YWx1ZSwgbnMpIHtcblx0XHR2YXIgZWxlbWVudCA9IHZub2RlLmRvbVxuXHRcdGlmIChrZXkyID09PSBcImtleVwiIHx8IGtleTIgPT09IFwiaXNcIiB8fCAob2xkID09PSB2YWx1ZSAmJiAhaXNGb3JtQXR0cmlidXRlKHZub2RlLCBrZXkyKSkgJiYgdHlwZW9mIHZhbHVlICE9PSBcIm9iamVjdFwiIHx8IHR5cGVvZiB2YWx1ZSA9PT0gXCJ1bmRlZmluZWRcIiB8fCBpc0xpZmVjeWNsZU1ldGhvZChrZXkyKSkgcmV0dXJuXG5cdFx0dmFyIG5zTGFzdEluZGV4ID0ga2V5Mi5pbmRleE9mKFwiOlwiKVxuXHRcdGlmIChuc0xhc3RJbmRleCA+IC0xICYmIGtleTIuc3Vic3RyKDAsIG5zTGFzdEluZGV4KSA9PT0gXCJ4bGlua1wiKSB7XG5cdFx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZU5TKFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiLCBrZXkyLnNsaWNlKG5zTGFzdEluZGV4ICsgMSksIHZhbHVlKVxuXHRcdH1cblx0XHRlbHNlIGlmIChrZXkyWzBdID09PSBcIm9cIiAmJiBrZXkyWzFdID09PSBcIm5cIiAmJiB0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIikgdXBkYXRlRXZlbnQodm5vZGUsIGtleTIsIHZhbHVlKVxuXHRcdGVsc2UgaWYgKGtleTIgPT09IFwic3R5bGVcIikgdXBkYXRlU3R5bGUoZWxlbWVudCwgb2xkLCB2YWx1ZSlcblx0XHRlbHNlIGlmIChrZXkyIGluIGVsZW1lbnQgJiYgIWlzQXR0cmlidXRlKGtleTIpICYmIG5zID09PSB1bmRlZmluZWQgJiYgIWlzQ3VzdG9tRWxlbWVudCh2bm9kZSkpIHtcblx0XHRcdGlmIChrZXkyID09PSBcInZhbHVlXCIpIHtcblx0XHRcdFx0dmFyIG5vcm1hbGl6ZWQwID0gXCJcIiArIHZhbHVlIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8taW1wbGljaXQtY29lcmNpb25cblx0XHRcdFx0Ly9zZXR0aW5nIGlucHV0W3ZhbHVlXSB0byBzYW1lIHZhbHVlIGJ5IHR5cGluZyBvbiBmb2N1c2VkIGVsZW1lbnQgbW92ZXMgY3Vyc29yIHRvIGVuZCBpbiBDaHJvbWVcblx0XHRcdFx0aWYgKCh2bm9kZS50YWcgPT09IFwiaW5wdXRcIiB8fCB2bm9kZS50YWcgPT09IFwidGV4dGFyZWFcIikgJiYgdm5vZGUuZG9tLnZhbHVlID09PSBub3JtYWxpemVkMCAmJiB2bm9kZS5kb20gPT09ICRkb2MuYWN0aXZlRWxlbWVudCkgcmV0dXJuXG5cdFx0XHRcdC8vc2V0dGluZyBzZWxlY3RbdmFsdWVdIHRvIHNhbWUgdmFsdWUgd2hpbGUgaGF2aW5nIHNlbGVjdCBvcGVuIGJsaW5rcyBzZWxlY3QgZHJvcGRvd24gaW4gQ2hyb21lXG5cdFx0XHRcdGlmICh2bm9kZS50YWcgPT09IFwic2VsZWN0XCIpIHtcblx0XHRcdFx0XHRpZiAodmFsdWUgPT09IG51bGwpIHtcblx0XHRcdFx0XHRcdGlmICh2bm9kZS5kb20uc2VsZWN0ZWRJbmRleCA9PT0gLTEgJiYgdm5vZGUuZG9tID09PSAkZG9jLmFjdGl2ZUVsZW1lbnQpIHJldHVyblxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRpZiAob2xkICE9PSBudWxsICYmIHZub2RlLmRvbS52YWx1ZSA9PT0gbm9ybWFsaXplZDAgJiYgdm5vZGUuZG9tID09PSAkZG9jLmFjdGl2ZUVsZW1lbnQpIHJldHVyblxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHQvL3NldHRpbmcgb3B0aW9uW3ZhbHVlXSB0byBzYW1lIHZhbHVlIHdoaWxlIGhhdmluZyBzZWxlY3Qgb3BlbiBibGlua3Mgc2VsZWN0IGRyb3Bkb3duIGluIENocm9tZVxuXHRcdFx0XHRpZiAodm5vZGUudGFnID09PSBcIm9wdGlvblwiICYmIG9sZCAhPSBudWxsICYmIHZub2RlLmRvbS52YWx1ZSA9PT0gbm9ybWFsaXplZDApIHJldHVyblxuXHRcdFx0fVxuXHRcdFx0Ly8gSWYgeW91IGFzc2lnbiBhbiBpbnB1dCB0eXBlMSB0aGF0IGlzIG5vdCBzdXBwb3J0ZWQgYnkgSUUgMTEgd2l0aCBhbiBhc3NpZ25tZW50IGV4cHJlc3Npb24sIGFuIGVycm9yMCB3aWxsIG9jY3VyLlxuXHRcdFx0aWYgKHZub2RlLnRhZyA9PT0gXCJpbnB1dFwiICYmIGtleTIgPT09IFwidHlwZVwiKSB7XG5cdFx0XHRcdGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleTIsIHZhbHVlKVxuXHRcdFx0XHRyZXR1cm5cblx0XHRcdH1cblx0XHRcdGVsZW1lbnRba2V5Ml0gPSB2YWx1ZVxuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdGlmICh0eXBlb2YgdmFsdWUgPT09IFwiYm9vbGVhblwiKSB7XG5cdFx0XHRcdGlmICh2YWx1ZSkgZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5MiwgXCJcIilcblx0XHRcdFx0ZWxzZSBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShrZXkyKVxuXHRcdFx0fVxuXHRcdFx0ZWxzZSBlbGVtZW50LnNldEF0dHJpYnV0ZShrZXkyID09PSBcImNsYXNzTmFtZVwiID8gXCJjbGFzc1wiIDoga2V5MiwgdmFsdWUpXG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIHNldExhdGVBdHRycyh2bm9kZSkge1xuXHRcdHZhciBhdHRyczIgPSB2bm9kZS5hdHRyc1xuXHRcdGlmICh2bm9kZS50YWcgPT09IFwic2VsZWN0XCIgJiYgYXR0cnMyICE9IG51bGwpIHtcblx0XHRcdGlmIChcInZhbHVlXCIgaW4gYXR0cnMyKSBzZXRBdHRyKHZub2RlLCBcInZhbHVlXCIsIG51bGwsIGF0dHJzMi52YWx1ZSwgdW5kZWZpbmVkKVxuXHRcdFx0aWYgKFwic2VsZWN0ZWRJbmRleFwiIGluIGF0dHJzMikgc2V0QXR0cih2bm9kZSwgXCJzZWxlY3RlZEluZGV4XCIsIG51bGwsIGF0dHJzMi5zZWxlY3RlZEluZGV4LCB1bmRlZmluZWQpXG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIHVwZGF0ZUF0dHJzKHZub2RlLCBvbGQsIGF0dHJzMiwgbnMpIHtcblx0XHRpZiAoYXR0cnMyICE9IG51bGwpIHtcblx0XHRcdGZvciAodmFyIGtleTIgaW4gYXR0cnMyKSB7XG5cdFx0XHRcdHNldEF0dHIodm5vZGUsIGtleTIsIG9sZCAmJiBvbGRba2V5Ml0sIGF0dHJzMltrZXkyXSwgbnMpXG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmIChvbGQgIT0gbnVsbCkge1xuXHRcdFx0Zm9yICh2YXIga2V5MiBpbiBvbGQpIHtcblx0XHRcdFx0aWYgKGF0dHJzMiA9PSBudWxsIHx8ICEoa2V5MiBpbiBhdHRyczIpKSB7XG5cdFx0XHRcdFx0aWYgKGtleTIgPT09IFwiY2xhc3NOYW1lXCIpIGtleTIgPSBcImNsYXNzXCJcblx0XHRcdFx0XHRpZiAoa2V5MlswXSA9PT0gXCJvXCIgJiYga2V5MlsxXSA9PT0gXCJuXCIgJiYgIWlzTGlmZWN5Y2xlTWV0aG9kKGtleTIpKSB1cGRhdGVFdmVudCh2bm9kZSwga2V5MiwgdW5kZWZpbmVkKVxuXHRcdFx0XHRcdGVsc2UgaWYgKGtleTIgIT09IFwia2V5XCIpIHZub2RlLmRvbS5yZW1vdmVBdHRyaWJ1dGUoa2V5Milcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRmdW5jdGlvbiBpc0Zvcm1BdHRyaWJ1dGUodm5vZGUsIGF0dHIpIHtcblx0XHRyZXR1cm4gYXR0ciA9PT0gXCJ2YWx1ZVwiIHx8IGF0dHIgPT09IFwiY2hlY2tlZFwiIHx8IGF0dHIgPT09IFwic2VsZWN0ZWRJbmRleFwiIHx8IGF0dHIgPT09IFwic2VsZWN0ZWRcIiAmJiB2bm9kZS5kb20gPT09ICRkb2MuYWN0aXZlRWxlbWVudFxuXHR9XG5cdGZ1bmN0aW9uIGlzTGlmZWN5Y2xlTWV0aG9kKGF0dHIpIHtcblx0XHRyZXR1cm4gYXR0ciA9PT0gXCJvbmluaXRcIiB8fCBhdHRyID09PSBcIm9uY3JlYXRlXCIgfHwgYXR0ciA9PT0gXCJvbnVwZGF0ZVwiIHx8IGF0dHIgPT09IFwib25yZW1vdmVcIiB8fCBhdHRyID09PSBcIm9uYmVmb3JlcmVtb3ZlXCIgfHwgYXR0ciA9PT0gXCJvbmJlZm9yZXVwZGF0ZVwiXG5cdH1cblx0ZnVuY3Rpb24gaXNBdHRyaWJ1dGUoYXR0cikge1xuXHRcdHJldHVybiBhdHRyID09PSBcImhyZWZcIiB8fCBhdHRyID09PSBcImxpc3RcIiB8fCBhdHRyID09PSBcImZvcm1cIiB8fCBhdHRyID09PSBcIndpZHRoXCIgfHwgYXR0ciA9PT0gXCJoZWlnaHRcIi8vIHx8IGF0dHIgPT09IFwidHlwZVwiXG5cdH1cblx0ZnVuY3Rpb24gaXNDdXN0b21FbGVtZW50KHZub2RlKXtcblx0XHRyZXR1cm4gdm5vZGUuYXR0cnMuaXMgfHwgdm5vZGUudGFnLmluZGV4T2YoXCItXCIpID4gLTFcblx0fVxuXHRmdW5jdGlvbiBoYXNJbnRlZ3JhdGlvbk1ldGhvZHMoc291cmNlKSB7XG5cdFx0cmV0dXJuIHNvdXJjZSAhPSBudWxsICYmIChzb3VyY2Uub25jcmVhdGUgfHwgc291cmNlLm9udXBkYXRlIHx8IHNvdXJjZS5vbmJlZm9yZXJlbW92ZSB8fCBzb3VyY2Uub25yZW1vdmUpXG5cdH1cblx0Ly9zdHlsZVxuXHRmdW5jdGlvbiB1cGRhdGVTdHlsZShlbGVtZW50LCBvbGQsIHN0eWxlKSB7XG5cdFx0aWYgKG9sZCA9PT0gc3R5bGUpIGVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IFwiXCIsIG9sZCA9IG51bGxcblx0XHRpZiAoc3R5bGUgPT0gbnVsbCkgZWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gXCJcIlxuXHRcdGVsc2UgaWYgKHR5cGVvZiBzdHlsZSA9PT0gXCJzdHJpbmdcIikgZWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVcblx0XHRlbHNlIHtcblx0XHRcdGlmICh0eXBlb2Ygb2xkID09PSBcInN0cmluZ1wiKSBlbGVtZW50LnN0eWxlLmNzc1RleHQgPSBcIlwiXG5cdFx0XHRmb3IgKHZhciBrZXkyIGluIHN0eWxlKSB7XG5cdFx0XHRcdGVsZW1lbnQuc3R5bGVba2V5Ml0gPSBzdHlsZVtrZXkyXVxuXHRcdFx0fVxuXHRcdFx0aWYgKG9sZCAhPSBudWxsICYmIHR5cGVvZiBvbGQgIT09IFwic3RyaW5nXCIpIHtcblx0XHRcdFx0Zm9yICh2YXIga2V5MiBpbiBvbGQpIHtcblx0XHRcdFx0XHRpZiAoIShrZXkyIGluIHN0eWxlKSkgZWxlbWVudC5zdHlsZVtrZXkyXSA9IFwiXCJcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHQvL2V2ZW50XG5cdGZ1bmN0aW9uIHVwZGF0ZUV2ZW50KHZub2RlLCBrZXkyLCB2YWx1ZSkge1xuXHRcdHZhciBlbGVtZW50ID0gdm5vZGUuZG9tXG5cdFx0dmFyIGNhbGxiYWNrID0gdHlwZW9mIG9uZXZlbnQgIT09IFwiZnVuY3Rpb25cIiA/IHZhbHVlIDogZnVuY3Rpb24oZSkge1xuXHRcdFx0dmFyIHJlc3VsdCA9IHZhbHVlLmNhbGwoZWxlbWVudCwgZSlcblx0XHRcdG9uZXZlbnQuY2FsbChlbGVtZW50LCBlKVxuXHRcdFx0cmV0dXJuIHJlc3VsdFxuXHRcdH1cblx0XHRpZiAoa2V5MiBpbiBlbGVtZW50KSBlbGVtZW50W2tleTJdID0gdHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIgPyBjYWxsYmFjayA6IG51bGxcblx0XHRlbHNlIHtcblx0XHRcdHZhciBldmVudE5hbWUgPSBrZXkyLnNsaWNlKDIpXG5cdFx0XHRpZiAodm5vZGUuZXZlbnRzID09PSB1bmRlZmluZWQpIHZub2RlLmV2ZW50cyA9IHt9XG5cdFx0XHRpZiAodm5vZGUuZXZlbnRzW2tleTJdID09PSBjYWxsYmFjaykgcmV0dXJuXG5cdFx0XHRpZiAodm5vZGUuZXZlbnRzW2tleTJdICE9IG51bGwpIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIHZub2RlLmV2ZW50c1trZXkyXSwgZmFsc2UpXG5cdFx0XHRpZiAodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0dm5vZGUuZXZlbnRzW2tleTJdID0gY2FsbGJhY2tcblx0XHRcdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgdm5vZGUuZXZlbnRzW2tleTJdLCBmYWxzZSlcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0Ly9saWZlY3ljbGVcblx0ZnVuY3Rpb24gaW5pdExpZmVjeWNsZShzb3VyY2UsIHZub2RlLCBob29rcykge1xuXHRcdGlmICh0eXBlb2Ygc291cmNlLm9uaW5pdCA9PT0gXCJmdW5jdGlvblwiKSBzb3VyY2Uub25pbml0LmNhbGwodm5vZGUuc3RhdGUsIHZub2RlKVxuXHRcdGlmICh0eXBlb2Ygc291cmNlLm9uY3JlYXRlID09PSBcImZ1bmN0aW9uXCIpIGhvb2tzLnB1c2goc291cmNlLm9uY3JlYXRlLmJpbmQodm5vZGUuc3RhdGUsIHZub2RlKSlcblx0fVxuXHRmdW5jdGlvbiB1cGRhdGVMaWZlY3ljbGUoc291cmNlLCB2bm9kZSwgaG9va3MpIHtcblx0XHRpZiAodHlwZW9mIHNvdXJjZS5vbnVwZGF0ZSA9PT0gXCJmdW5jdGlvblwiKSBob29rcy5wdXNoKHNvdXJjZS5vbnVwZGF0ZS5iaW5kKHZub2RlLnN0YXRlLCB2bm9kZSkpXG5cdH1cblx0ZnVuY3Rpb24gc2hvdWxkTm90VXBkYXRlKHZub2RlLCBvbGQpIHtcblx0XHR2YXIgZm9yY2VWbm9kZVVwZGF0ZSwgZm9yY2VDb21wb25lbnRVcGRhdGVcblx0XHRpZiAodm5vZGUuYXR0cnMgIT0gbnVsbCAmJiB0eXBlb2Ygdm5vZGUuYXR0cnMub25iZWZvcmV1cGRhdGUgPT09IFwiZnVuY3Rpb25cIikgZm9yY2VWbm9kZVVwZGF0ZSA9IHZub2RlLmF0dHJzLm9uYmVmb3JldXBkYXRlLmNhbGwodm5vZGUuc3RhdGUsIHZub2RlLCBvbGQpXG5cdFx0aWYgKHR5cGVvZiB2bm9kZS50YWcgIT09IFwic3RyaW5nXCIgJiYgdHlwZW9mIHZub2RlLl9zdGF0ZS5vbmJlZm9yZXVwZGF0ZSA9PT0gXCJmdW5jdGlvblwiKSBmb3JjZUNvbXBvbmVudFVwZGF0ZSA9IHZub2RlLl9zdGF0ZS5vbmJlZm9yZXVwZGF0ZS5jYWxsKHZub2RlLnN0YXRlLCB2bm9kZSwgb2xkKVxuXHRcdGlmICghKGZvcmNlVm5vZGVVcGRhdGUgPT09IHVuZGVmaW5lZCAmJiBmb3JjZUNvbXBvbmVudFVwZGF0ZSA9PT0gdW5kZWZpbmVkKSAmJiAhZm9yY2VWbm9kZVVwZGF0ZSAmJiAhZm9yY2VDb21wb25lbnRVcGRhdGUpIHtcblx0XHRcdHZub2RlLmRvbSA9IG9sZC5kb21cblx0XHRcdHZub2RlLmRvbVNpemUgPSBvbGQuZG9tU2l6ZVxuXHRcdFx0dm5vZGUuaW5zdGFuY2UgPSBvbGQuaW5zdGFuY2Vcblx0XHRcdHJldHVybiB0cnVlXG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZVxuXHR9XG5cdGZ1bmN0aW9uIHJlbmRlcihkb20sIHZub2Rlcykge1xuXHRcdGlmICghZG9tKSB0aHJvdyBuZXcgRXJyb3IoXCJFbnN1cmUgdGhlIERPTSBlbGVtZW50IGJlaW5nIHBhc3NlZCB0byBtLnJvdXRlL20ubW91bnQvbS5yZW5kZXIgaXMgbm90IHVuZGVmaW5lZC5cIilcblx0XHR2YXIgaG9va3MgPSBbXVxuXHRcdHZhciBhY3RpdmUgPSAkZG9jLmFjdGl2ZUVsZW1lbnRcblx0XHR2YXIgbmFtZXNwYWNlID0gZG9tLm5hbWVzcGFjZVVSSVxuXHRcdC8vIEZpcnN0IHRpbWUwIHJlbmRlcmluZyBpbnRvIGEgbm9kZSBjbGVhcnMgaXQgb3V0XG5cdFx0aWYgKGRvbS52bm9kZXMgPT0gbnVsbCkgZG9tLnRleHRDb250ZW50ID0gXCJcIlxuXHRcdGlmICghQXJyYXkuaXNBcnJheSh2bm9kZXMpKSB2bm9kZXMgPSBbdm5vZGVzXVxuXHRcdHVwZGF0ZU5vZGVzKGRvbSwgZG9tLnZub2RlcywgVm5vZGUubm9ybWFsaXplQ2hpbGRyZW4odm5vZGVzKSwgZmFsc2UsIGhvb2tzLCBudWxsLCBuYW1lc3BhY2UgPT09IFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiID8gdW5kZWZpbmVkIDogbmFtZXNwYWNlKVxuXHRcdGRvbS52bm9kZXMgPSB2bm9kZXNcblx0XHQvLyBkb2N1bWVudC5hY3RpdmVFbGVtZW50IGNhbiByZXR1cm4gbnVsbCBpbiBJRSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRG9jdW1lbnQvYWN0aXZlRWxlbWVudFxuXHRcdGlmIChhY3RpdmUgIT0gbnVsbCAmJiAkZG9jLmFjdGl2ZUVsZW1lbnQgIT09IGFjdGl2ZSkgYWN0aXZlLmZvY3VzKClcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGhvb2tzLmxlbmd0aDsgaSsrKSBob29rc1tpXSgpXG5cdH1cblx0cmV0dXJuIHtyZW5kZXI6IHJlbmRlciwgc2V0RXZlbnRDYWxsYmFjazogc2V0RXZlbnRDYWxsYmFja31cbn1cbmZ1bmN0aW9uIHRocm90dGxlKGNhbGxiYWNrKSB7XG5cdC8vNjBmcHMgdHJhbnNsYXRlcyB0byAxNi42bXMsIHJvdW5kIGl0IGRvd24gc2luY2Ugc2V0VGltZW91dCByZXF1aXJlcyBpbnRcblx0dmFyIHRpbWUgPSAxNlxuXHR2YXIgbGFzdCA9IDAsIHBlbmRpbmcgPSBudWxsXG5cdHZhciB0aW1lb3V0ID0gdHlwZW9mIHJlcXVlc3RBbmltYXRpb25GcmFtZSA9PT0gXCJmdW5jdGlvblwiID8gcmVxdWVzdEFuaW1hdGlvbkZyYW1lIDogc2V0VGltZW91dFxuXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5vdyA9IERhdGUubm93KClcblx0XHRpZiAobGFzdCA9PT0gMCB8fCBub3cgLSBsYXN0ID49IHRpbWUpIHtcblx0XHRcdGxhc3QgPSBub3dcblx0XHRcdGNhbGxiYWNrKClcblx0XHR9XG5cdFx0ZWxzZSBpZiAocGVuZGluZyA9PT0gbnVsbCkge1xuXHRcdFx0cGVuZGluZyA9IHRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHBlbmRpbmcgPSBudWxsXG5cdFx0XHRcdGNhbGxiYWNrKClcblx0XHRcdFx0bGFzdCA9IERhdGUubm93KClcblx0XHRcdH0sIHRpbWUgLSAobm93IC0gbGFzdCkpXG5cdFx0fVxuXHR9XG59XG52YXIgXzExID0gZnVuY3Rpb24oJHdpbmRvdykge1xuXHR2YXIgcmVuZGVyU2VydmljZSA9IGNvcmVSZW5kZXJlcigkd2luZG93KVxuXHRyZW5kZXJTZXJ2aWNlLnNldEV2ZW50Q2FsbGJhY2soZnVuY3Rpb24oZSkge1xuXHRcdGlmIChlLnJlZHJhdyA9PT0gZmFsc2UpIGUucmVkcmF3ID0gdW5kZWZpbmVkXG5cdFx0ZWxzZSByZWRyYXcoKVxuXHR9KVxuXHR2YXIgY2FsbGJhY2tzID0gW11cblx0ZnVuY3Rpb24gc3Vic2NyaWJlKGtleTEsIGNhbGxiYWNrKSB7XG5cdFx0dW5zdWJzY3JpYmUoa2V5MSlcblx0XHRjYWxsYmFja3MucHVzaChrZXkxLCB0aHJvdHRsZShjYWxsYmFjaykpXG5cdH1cblx0ZnVuY3Rpb24gdW5zdWJzY3JpYmUoa2V5MSkge1xuXHRcdHZhciBpbmRleCA9IGNhbGxiYWNrcy5pbmRleE9mKGtleTEpXG5cdFx0aWYgKGluZGV4ID4gLTEpIGNhbGxiYWNrcy5zcGxpY2UoaW5kZXgsIDIpXG5cdH1cblx0ZnVuY3Rpb24gcmVkcmF3KCkge1xuXHRcdGZvciAodmFyIGkgPSAxOyBpIDwgY2FsbGJhY2tzLmxlbmd0aDsgaSArPSAyKSB7XG5cdFx0XHRjYWxsYmFja3NbaV0oKVxuXHRcdH1cblx0fVxuXHRyZXR1cm4ge3N1YnNjcmliZTogc3Vic2NyaWJlLCB1bnN1YnNjcmliZTogdW5zdWJzY3JpYmUsIHJlZHJhdzogcmVkcmF3LCByZW5kZXI6IHJlbmRlclNlcnZpY2UucmVuZGVyfVxufVxudmFyIHJlZHJhd1NlcnZpY2UgPSBfMTEod2luZG93KVxucmVxdWVzdFNlcnZpY2Uuc2V0Q29tcGxldGlvbkNhbGxiYWNrKHJlZHJhd1NlcnZpY2UucmVkcmF3KVxudmFyIF8xNiA9IGZ1bmN0aW9uKHJlZHJhd1NlcnZpY2UwKSB7XG5cdHJldHVybiBmdW5jdGlvbihyb290LCBjb21wb25lbnQpIHtcblx0XHRpZiAoY29tcG9uZW50ID09PSBudWxsKSB7XG5cdFx0XHRyZWRyYXdTZXJ2aWNlMC5yZW5kZXIocm9vdCwgW10pXG5cdFx0XHRyZWRyYXdTZXJ2aWNlMC51bnN1YnNjcmliZShyb290KVxuXHRcdFx0cmV0dXJuXG5cdFx0fVxuXHRcdFxuXHRcdGlmIChjb21wb25lbnQudmlldyA9PSBudWxsICYmIHR5cGVvZiBjb21wb25lbnQgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IEVycm9yKFwibS5tb3VudChlbGVtZW50LCBjb21wb25lbnQpIGV4cGVjdHMgYSBjb21wb25lbnQsIG5vdCBhIHZub2RlXCIpXG5cdFx0XG5cdFx0dmFyIHJ1bjAgPSBmdW5jdGlvbigpIHtcblx0XHRcdHJlZHJhd1NlcnZpY2UwLnJlbmRlcihyb290LCBWbm9kZShjb21wb25lbnQpKVxuXHRcdH1cblx0XHRyZWRyYXdTZXJ2aWNlMC5zdWJzY3JpYmUocm9vdCwgcnVuMClcblx0XHRyZWRyYXdTZXJ2aWNlMC5yZWRyYXcoKVxuXHR9XG59XG5tLm1vdW50ID0gXzE2KHJlZHJhd1NlcnZpY2UpXG52YXIgUHJvbWlzZSA9IFByb21pc2VQb2x5ZmlsbFxudmFyIHBhcnNlUXVlcnlTdHJpbmcgPSBmdW5jdGlvbihzdHJpbmcpIHtcblx0aWYgKHN0cmluZyA9PT0gXCJcIiB8fCBzdHJpbmcgPT0gbnVsbCkgcmV0dXJuIHt9XG5cdGlmIChzdHJpbmcuY2hhckF0KDApID09PSBcIj9cIikgc3RyaW5nID0gc3RyaW5nLnNsaWNlKDEpXG5cdHZhciBlbnRyaWVzID0gc3RyaW5nLnNwbGl0KFwiJlwiKSwgZGF0YTAgPSB7fSwgY291bnRlcnMgPSB7fVxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGVudHJpZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgZW50cnkgPSBlbnRyaWVzW2ldLnNwbGl0KFwiPVwiKVxuXHRcdHZhciBrZXk1ID0gZGVjb2RlVVJJQ29tcG9uZW50KGVudHJ5WzBdKVxuXHRcdHZhciB2YWx1ZSA9IGVudHJ5Lmxlbmd0aCA9PT0gMiA/IGRlY29kZVVSSUNvbXBvbmVudChlbnRyeVsxXSkgOiBcIlwiXG5cdFx0aWYgKHZhbHVlID09PSBcInRydWVcIikgdmFsdWUgPSB0cnVlXG5cdFx0ZWxzZSBpZiAodmFsdWUgPT09IFwiZmFsc2VcIikgdmFsdWUgPSBmYWxzZVxuXHRcdHZhciBsZXZlbHMgPSBrZXk1LnNwbGl0KC9cXF1cXFs/fFxcWy8pXG5cdFx0dmFyIGN1cnNvciA9IGRhdGEwXG5cdFx0aWYgKGtleTUuaW5kZXhPZihcIltcIikgPiAtMSkgbGV2ZWxzLnBvcCgpXG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBsZXZlbHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdHZhciBsZXZlbCA9IGxldmVsc1tqXSwgbmV4dExldmVsID0gbGV2ZWxzW2ogKyAxXVxuXHRcdFx0dmFyIGlzTnVtYmVyID0gbmV4dExldmVsID09IFwiXCIgfHwgIWlzTmFOKHBhcnNlSW50KG5leHRMZXZlbCwgMTApKVxuXHRcdFx0dmFyIGlzVmFsdWUgPSBqID09PSBsZXZlbHMubGVuZ3RoIC0gMVxuXHRcdFx0aWYgKGxldmVsID09PSBcIlwiKSB7XG5cdFx0XHRcdHZhciBrZXk1ID0gbGV2ZWxzLnNsaWNlKDAsIGopLmpvaW4oKVxuXHRcdFx0XHRpZiAoY291bnRlcnNba2V5NV0gPT0gbnVsbCkgY291bnRlcnNba2V5NV0gPSAwXG5cdFx0XHRcdGxldmVsID0gY291bnRlcnNba2V5NV0rK1xuXHRcdFx0fVxuXHRcdFx0aWYgKGN1cnNvcltsZXZlbF0gPT0gbnVsbCkge1xuXHRcdFx0XHRjdXJzb3JbbGV2ZWxdID0gaXNWYWx1ZSA/IHZhbHVlIDogaXNOdW1iZXIgPyBbXSA6IHt9XG5cdFx0XHR9XG5cdFx0XHRjdXJzb3IgPSBjdXJzb3JbbGV2ZWxdXG5cdFx0fVxuXHR9XG5cdHJldHVybiBkYXRhMFxufVxudmFyIGNvcmVSb3V0ZXIgPSBmdW5jdGlvbigkd2luZG93KSB7XG5cdHZhciBzdXBwb3J0c1B1c2hTdGF0ZSA9IHR5cGVvZiAkd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlID09PSBcImZ1bmN0aW9uXCJcblx0dmFyIGNhbGxBc3luYzAgPSB0eXBlb2Ygc2V0SW1tZWRpYXRlID09PSBcImZ1bmN0aW9uXCIgPyBzZXRJbW1lZGlhdGUgOiBzZXRUaW1lb3V0XG5cdGZ1bmN0aW9uIG5vcm1hbGl6ZTEoZnJhZ21lbnQwKSB7XG5cdFx0dmFyIGRhdGEgPSAkd2luZG93LmxvY2F0aW9uW2ZyYWdtZW50MF0ucmVwbGFjZSgvKD86JVthLWY4OV1bYS1mMC05XSkrL2dpbSwgZGVjb2RlVVJJQ29tcG9uZW50KVxuXHRcdGlmIChmcmFnbWVudDAgPT09IFwicGF0aG5hbWVcIiAmJiBkYXRhWzBdICE9PSBcIi9cIikgZGF0YSA9IFwiL1wiICsgZGF0YVxuXHRcdHJldHVybiBkYXRhXG5cdH1cblx0dmFyIGFzeW5jSWRcblx0ZnVuY3Rpb24gZGVib3VuY2VBc3luYyhjYWxsYmFjazApIHtcblx0XHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdFx0XHRpZiAoYXN5bmNJZCAhPSBudWxsKSByZXR1cm5cblx0XHRcdGFzeW5jSWQgPSBjYWxsQXN5bmMwKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRhc3luY0lkID0gbnVsbFxuXHRcdFx0XHRjYWxsYmFjazAoKVxuXHRcdFx0fSlcblx0XHR9XG5cdH1cblx0ZnVuY3Rpb24gcGFyc2VQYXRoKHBhdGgsIHF1ZXJ5RGF0YSwgaGFzaERhdGEpIHtcblx0XHR2YXIgcXVlcnlJbmRleCA9IHBhdGguaW5kZXhPZihcIj9cIilcblx0XHR2YXIgaGFzaEluZGV4ID0gcGF0aC5pbmRleE9mKFwiI1wiKVxuXHRcdHZhciBwYXRoRW5kID0gcXVlcnlJbmRleCA+IC0xID8gcXVlcnlJbmRleCA6IGhhc2hJbmRleCA+IC0xID8gaGFzaEluZGV4IDogcGF0aC5sZW5ndGhcblx0XHRpZiAocXVlcnlJbmRleCA+IC0xKSB7XG5cdFx0XHR2YXIgcXVlcnlFbmQgPSBoYXNoSW5kZXggPiAtMSA/IGhhc2hJbmRleCA6IHBhdGgubGVuZ3RoXG5cdFx0XHR2YXIgcXVlcnlQYXJhbXMgPSBwYXJzZVF1ZXJ5U3RyaW5nKHBhdGguc2xpY2UocXVlcnlJbmRleCArIDEsIHF1ZXJ5RW5kKSlcblx0XHRcdGZvciAodmFyIGtleTQgaW4gcXVlcnlQYXJhbXMpIHF1ZXJ5RGF0YVtrZXk0XSA9IHF1ZXJ5UGFyYW1zW2tleTRdXG5cdFx0fVxuXHRcdGlmIChoYXNoSW5kZXggPiAtMSkge1xuXHRcdFx0dmFyIGhhc2hQYXJhbXMgPSBwYXJzZVF1ZXJ5U3RyaW5nKHBhdGguc2xpY2UoaGFzaEluZGV4ICsgMSkpXG5cdFx0XHRmb3IgKHZhciBrZXk0IGluIGhhc2hQYXJhbXMpIGhhc2hEYXRhW2tleTRdID0gaGFzaFBhcmFtc1trZXk0XVxuXHRcdH1cblx0XHRyZXR1cm4gcGF0aC5zbGljZSgwLCBwYXRoRW5kKVxuXHR9XG5cdHZhciByb3V0ZXIgPSB7cHJlZml4OiBcIiMhXCJ9XG5cdHJvdXRlci5nZXRQYXRoID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIHR5cGUyID0gcm91dGVyLnByZWZpeC5jaGFyQXQoMClcblx0XHRzd2l0Y2ggKHR5cGUyKSB7XG5cdFx0XHRjYXNlIFwiI1wiOiByZXR1cm4gbm9ybWFsaXplMShcImhhc2hcIikuc2xpY2Uocm91dGVyLnByZWZpeC5sZW5ndGgpXG5cdFx0XHRjYXNlIFwiP1wiOiByZXR1cm4gbm9ybWFsaXplMShcInNlYXJjaFwiKS5zbGljZShyb3V0ZXIucHJlZml4Lmxlbmd0aCkgKyBub3JtYWxpemUxKFwiaGFzaFwiKVxuXHRcdFx0ZGVmYXVsdDogcmV0dXJuIG5vcm1hbGl6ZTEoXCJwYXRobmFtZVwiKS5zbGljZShyb3V0ZXIucHJlZml4Lmxlbmd0aCkgKyBub3JtYWxpemUxKFwic2VhcmNoXCIpICsgbm9ybWFsaXplMShcImhhc2hcIilcblx0XHR9XG5cdH1cblx0cm91dGVyLnNldFBhdGggPSBmdW5jdGlvbihwYXRoLCBkYXRhLCBvcHRpb25zKSB7XG5cdFx0dmFyIHF1ZXJ5RGF0YSA9IHt9LCBoYXNoRGF0YSA9IHt9XG5cdFx0cGF0aCA9IHBhcnNlUGF0aChwYXRoLCBxdWVyeURhdGEsIGhhc2hEYXRhKVxuXHRcdGlmIChkYXRhICE9IG51bGwpIHtcblx0XHRcdGZvciAodmFyIGtleTQgaW4gZGF0YSkgcXVlcnlEYXRhW2tleTRdID0gZGF0YVtrZXk0XVxuXHRcdFx0cGF0aCA9IHBhdGgucmVwbGFjZSgvOihbXlxcL10rKS9nLCBmdW5jdGlvbihtYXRjaDIsIHRva2VuKSB7XG5cdFx0XHRcdGRlbGV0ZSBxdWVyeURhdGFbdG9rZW5dXG5cdFx0XHRcdHJldHVybiBkYXRhW3Rva2VuXVxuXHRcdFx0fSlcblx0XHR9XG5cdFx0dmFyIHF1ZXJ5ID0gYnVpbGRRdWVyeVN0cmluZyhxdWVyeURhdGEpXG5cdFx0aWYgKHF1ZXJ5KSBwYXRoICs9IFwiP1wiICsgcXVlcnlcblx0XHR2YXIgaGFzaCA9IGJ1aWxkUXVlcnlTdHJpbmcoaGFzaERhdGEpXG5cdFx0aWYgKGhhc2gpIHBhdGggKz0gXCIjXCIgKyBoYXNoXG5cdFx0aWYgKHN1cHBvcnRzUHVzaFN0YXRlKSB7XG5cdFx0XHR2YXIgc3RhdGUgPSBvcHRpb25zID8gb3B0aW9ucy5zdGF0ZSA6IG51bGxcblx0XHRcdHZhciB0aXRsZSA9IG9wdGlvbnMgPyBvcHRpb25zLnRpdGxlIDogbnVsbFxuXHRcdFx0JHdpbmRvdy5vbnBvcHN0YXRlKClcblx0XHRcdGlmIChvcHRpb25zICYmIG9wdGlvbnMucmVwbGFjZSkgJHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZShzdGF0ZSwgdGl0bGUsIHJvdXRlci5wcmVmaXggKyBwYXRoKVxuXHRcdFx0ZWxzZSAkd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHN0YXRlLCB0aXRsZSwgcm91dGVyLnByZWZpeCArIHBhdGgpXG5cdFx0fVxuXHRcdGVsc2UgJHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcm91dGVyLnByZWZpeCArIHBhdGhcblx0fVxuXHRyb3V0ZXIuZGVmaW5lUm91dGVzID0gZnVuY3Rpb24ocm91dGVzLCByZXNvbHZlLCByZWplY3QpIHtcblx0XHRmdW5jdGlvbiByZXNvbHZlUm91dGUoKSB7XG5cdFx0XHR2YXIgcGF0aCA9IHJvdXRlci5nZXRQYXRoKClcblx0XHRcdHZhciBwYXJhbXMgPSB7fVxuXHRcdFx0dmFyIHBhdGhuYW1lID0gcGFyc2VQYXRoKHBhdGgsIHBhcmFtcywgcGFyYW1zKVxuXHRcdFx0dmFyIHN0YXRlID0gJHdpbmRvdy5oaXN0b3J5LnN0YXRlXG5cdFx0XHRpZiAoc3RhdGUgIT0gbnVsbCkge1xuXHRcdFx0XHRmb3IgKHZhciBrIGluIHN0YXRlKSBwYXJhbXNba10gPSBzdGF0ZVtrXVxuXHRcdFx0fVxuXHRcdFx0Zm9yICh2YXIgcm91dGUwIGluIHJvdXRlcykge1xuXHRcdFx0XHR2YXIgbWF0Y2hlciA9IG5ldyBSZWdFeHAoXCJeXCIgKyByb3V0ZTAucmVwbGFjZSgvOlteXFwvXSs/XFwuezN9L2csIFwiKC4qPylcIikucmVwbGFjZSgvOlteXFwvXSsvZywgXCIoW15cXFxcL10rKVwiKSArIFwiXFwvPyRcIilcblx0XHRcdFx0aWYgKG1hdGNoZXIudGVzdChwYXRobmFtZSkpIHtcblx0XHRcdFx0XHRwYXRobmFtZS5yZXBsYWNlKG1hdGNoZXIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0dmFyIGtleXMgPSByb3V0ZTAubWF0Y2goLzpbXlxcL10rL2cpIHx8IFtdXG5cdFx0XHRcdFx0XHR2YXIgdmFsdWVzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEsIC0yKVxuXHRcdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0XHRcdHBhcmFtc1trZXlzW2ldLnJlcGxhY2UoLzp8XFwuL2csIFwiXCIpXSA9IGRlY29kZVVSSUNvbXBvbmVudCh2YWx1ZXNbaV0pXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRyZXNvbHZlKHJvdXRlc1tyb3V0ZTBdLCBwYXJhbXMsIHBhdGgsIHJvdXRlMClcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdHJldHVyblxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZWplY3QocGF0aCwgcGFyYW1zKVxuXHRcdH1cblx0XHRpZiAoc3VwcG9ydHNQdXNoU3RhdGUpICR3aW5kb3cub25wb3BzdGF0ZSA9IGRlYm91bmNlQXN5bmMocmVzb2x2ZVJvdXRlKVxuXHRcdGVsc2UgaWYgKHJvdXRlci5wcmVmaXguY2hhckF0KDApID09PSBcIiNcIikgJHdpbmRvdy5vbmhhc2hjaGFuZ2UgPSByZXNvbHZlUm91dGVcblx0XHRyZXNvbHZlUm91dGUoKVxuXHR9XG5cdHJldHVybiByb3V0ZXJcbn1cbnZhciBfMjAgPSBmdW5jdGlvbigkd2luZG93LCByZWRyYXdTZXJ2aWNlMCkge1xuXHR2YXIgcm91dGVTZXJ2aWNlID0gY29yZVJvdXRlcigkd2luZG93KVxuXHR2YXIgaWRlbnRpdHkgPSBmdW5jdGlvbih2KSB7cmV0dXJuIHZ9XG5cdHZhciByZW5kZXIxLCBjb21wb25lbnQsIGF0dHJzMywgY3VycmVudFBhdGgsIGxhc3RVcGRhdGVcblx0dmFyIHJvdXRlID0gZnVuY3Rpb24ocm9vdCwgZGVmYXVsdFJvdXRlLCByb3V0ZXMpIHtcblx0XHRpZiAocm9vdCA9PSBudWxsKSB0aHJvdyBuZXcgRXJyb3IoXCJFbnN1cmUgdGhlIERPTSBlbGVtZW50IHRoYXQgd2FzIHBhc3NlZCB0byBgbS5yb3V0ZWAgaXMgbm90IHVuZGVmaW5lZFwiKVxuXHRcdHZhciBydW4xID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRpZiAocmVuZGVyMSAhPSBudWxsKSByZWRyYXdTZXJ2aWNlMC5yZW5kZXIocm9vdCwgcmVuZGVyMShWbm9kZShjb21wb25lbnQsIGF0dHJzMy5rZXksIGF0dHJzMykpKVxuXHRcdH1cblx0XHR2YXIgYmFpbCA9IGZ1bmN0aW9uKHBhdGgpIHtcblx0XHRcdGlmIChwYXRoICE9PSBkZWZhdWx0Um91dGUpIHJvdXRlU2VydmljZS5zZXRQYXRoKGRlZmF1bHRSb3V0ZSwgbnVsbCwge3JlcGxhY2U6IHRydWV9KVxuXHRcdFx0ZWxzZSB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgcmVzb2x2ZSBkZWZhdWx0IHJvdXRlIFwiICsgZGVmYXVsdFJvdXRlKVxuXHRcdH1cblx0XHRyb3V0ZVNlcnZpY2UuZGVmaW5lUm91dGVzKHJvdXRlcywgZnVuY3Rpb24ocGF5bG9hZCwgcGFyYW1zLCBwYXRoKSB7XG5cdFx0XHR2YXIgdXBkYXRlID0gbGFzdFVwZGF0ZSA9IGZ1bmN0aW9uKHJvdXRlUmVzb2x2ZXIsIGNvbXApIHtcblx0XHRcdFx0aWYgKHVwZGF0ZSAhPT0gbGFzdFVwZGF0ZSkgcmV0dXJuXG5cdFx0XHRcdGNvbXBvbmVudCA9IGNvbXAgIT0gbnVsbCAmJiAodHlwZW9mIGNvbXAudmlldyA9PT0gXCJmdW5jdGlvblwiIHx8IHR5cGVvZiBjb21wID09PSBcImZ1bmN0aW9uXCIpPyBjb21wIDogXCJkaXZcIlxuXHRcdFx0XHRhdHRyczMgPSBwYXJhbXMsIGN1cnJlbnRQYXRoID0gcGF0aCwgbGFzdFVwZGF0ZSA9IG51bGxcblx0XHRcdFx0cmVuZGVyMSA9IChyb3V0ZVJlc29sdmVyLnJlbmRlciB8fCBpZGVudGl0eSkuYmluZChyb3V0ZVJlc29sdmVyKVxuXHRcdFx0XHRydW4xKClcblx0XHRcdH1cblx0XHRcdGlmIChwYXlsb2FkLnZpZXcgfHwgdHlwZW9mIHBheWxvYWQgPT09IFwiZnVuY3Rpb25cIikgdXBkYXRlKHt9LCBwYXlsb2FkKVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdGlmIChwYXlsb2FkLm9ubWF0Y2gpIHtcblx0XHRcdFx0XHRQcm9taXNlLnJlc29sdmUocGF5bG9hZC5vbm1hdGNoKHBhcmFtcywgcGF0aCkpLnRoZW4oZnVuY3Rpb24ocmVzb2x2ZWQpIHtcblx0XHRcdFx0XHRcdHVwZGF0ZShwYXlsb2FkLCByZXNvbHZlZClcblx0XHRcdFx0XHR9LCBiYWlsKVxuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2UgdXBkYXRlKHBheWxvYWQsIFwiZGl2XCIpXG5cdFx0XHR9XG5cdFx0fSwgYmFpbClcblx0XHRyZWRyYXdTZXJ2aWNlMC5zdWJzY3JpYmUocm9vdCwgcnVuMSlcblx0fVxuXHRyb3V0ZS5zZXQgPSBmdW5jdGlvbihwYXRoLCBkYXRhLCBvcHRpb25zKSB7XG5cdFx0aWYgKGxhc3RVcGRhdGUgIT0gbnVsbCkge1xuXHRcdFx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge31cblx0XHRcdG9wdGlvbnMucmVwbGFjZSA9IHRydWVcblx0XHR9XG5cdFx0bGFzdFVwZGF0ZSA9IG51bGxcblx0XHRyb3V0ZVNlcnZpY2Uuc2V0UGF0aChwYXRoLCBkYXRhLCBvcHRpb25zKVxuXHR9XG5cdHJvdXRlLmdldCA9IGZ1bmN0aW9uKCkge3JldHVybiBjdXJyZW50UGF0aH1cblx0cm91dGUucHJlZml4ID0gZnVuY3Rpb24ocHJlZml4MCkge3JvdXRlU2VydmljZS5wcmVmaXggPSBwcmVmaXgwfVxuXHRyb3V0ZS5saW5rID0gZnVuY3Rpb24odm5vZGUxKSB7XG5cdFx0dm5vZGUxLmRvbS5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIHJvdXRlU2VydmljZS5wcmVmaXggKyB2bm9kZTEuYXR0cnMuaHJlZilcblx0XHR2bm9kZTEuZG9tLm9uY2xpY2sgPSBmdW5jdGlvbihlKSB7XG5cdFx0XHRpZiAoZS5jdHJsS2V5IHx8IGUubWV0YUtleSB8fCBlLnNoaWZ0S2V5IHx8IGUud2hpY2ggPT09IDIpIHJldHVyblxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0XHRlLnJlZHJhdyA9IGZhbHNlXG5cdFx0XHR2YXIgaHJlZiA9IHRoaXMuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKVxuXHRcdFx0aWYgKGhyZWYuaW5kZXhPZihyb3V0ZVNlcnZpY2UucHJlZml4KSA9PT0gMCkgaHJlZiA9IGhyZWYuc2xpY2Uocm91dGVTZXJ2aWNlLnByZWZpeC5sZW5ndGgpXG5cdFx0XHRyb3V0ZS5zZXQoaHJlZiwgdW5kZWZpbmVkLCB1bmRlZmluZWQpXG5cdFx0fVxuXHR9XG5cdHJvdXRlLnBhcmFtID0gZnVuY3Rpb24oa2V5Mykge1xuXHRcdGlmKHR5cGVvZiBhdHRyczMgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIGtleTMgIT09IFwidW5kZWZpbmVkXCIpIHJldHVybiBhdHRyczNba2V5M11cblx0XHRyZXR1cm4gYXR0cnMzXG5cdH1cblx0cmV0dXJuIHJvdXRlXG59XG5tLnJvdXRlID0gXzIwKHdpbmRvdywgcmVkcmF3U2VydmljZSlcbm0ud2l0aEF0dHIgPSBmdW5jdGlvbihhdHRyTmFtZSwgY2FsbGJhY2sxLCBjb250ZXh0KSB7XG5cdHJldHVybiBmdW5jdGlvbihlKSB7XG5cdFx0Y2FsbGJhY2sxLmNhbGwoY29udGV4dCB8fCB0aGlzLCBhdHRyTmFtZSBpbiBlLmN1cnJlbnRUYXJnZXQgPyBlLmN1cnJlbnRUYXJnZXRbYXR0ck5hbWVdIDogZS5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZShhdHRyTmFtZSkpXG5cdH1cbn1cbnZhciBfMjggPSBjb3JlUmVuZGVyZXIod2luZG93KVxubS5yZW5kZXIgPSBfMjgucmVuZGVyXG5tLnJlZHJhdyA9IHJlZHJhd1NlcnZpY2UucmVkcmF3XG5tLnJlcXVlc3QgPSByZXF1ZXN0U2VydmljZS5yZXF1ZXN0XG5tLmpzb25wID0gcmVxdWVzdFNlcnZpY2UuanNvbnBcbm0ucGFyc2VRdWVyeVN0cmluZyA9IHBhcnNlUXVlcnlTdHJpbmdcbm0uYnVpbGRRdWVyeVN0cmluZyA9IGJ1aWxkUXVlcnlTdHJpbmdcbm0udmVyc2lvbiA9IFwiMS4xLjZcIlxubS52bm9kZSA9IFZub2RlXG5pZiAodHlwZW9mIG1vZHVsZSAhPT0gXCJ1bmRlZmluZWRcIikgbW9kdWxlW1wiZXhwb3J0c1wiXSA9IG1cbmVsc2Ugd2luZG93Lm0gPSBtXG59KCkpOyIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCIoZnVuY3Rpb24gKGdsb2JhbCwgdW5kZWZpbmVkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICBpZiAoZ2xvYmFsLnNldEltbWVkaWF0ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIG5leHRIYW5kbGUgPSAxOyAvLyBTcGVjIHNheXMgZ3JlYXRlciB0aGFuIHplcm9cbiAgICB2YXIgdGFza3NCeUhhbmRsZSA9IHt9O1xuICAgIHZhciBjdXJyZW50bHlSdW5uaW5nQVRhc2sgPSBmYWxzZTtcbiAgICB2YXIgZG9jID0gZ2xvYmFsLmRvY3VtZW50O1xuICAgIHZhciByZWdpc3RlckltbWVkaWF0ZTtcblxuICAgIGZ1bmN0aW9uIHNldEltbWVkaWF0ZShjYWxsYmFjaykge1xuICAgICAgLy8gQ2FsbGJhY2sgY2FuIGVpdGhlciBiZSBhIGZ1bmN0aW9uIG9yIGEgc3RyaW5nXG4gICAgICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgY2FsbGJhY2sgPSBuZXcgRnVuY3Rpb24oXCJcIiArIGNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICAgIC8vIENvcHkgZnVuY3Rpb24gYXJndW1lbnRzXG4gICAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2kgKyAxXTtcbiAgICAgIH1cbiAgICAgIC8vIFN0b3JlIGFuZCByZWdpc3RlciB0aGUgdGFza1xuICAgICAgdmFyIHRhc2sgPSB7IGNhbGxiYWNrOiBjYWxsYmFjaywgYXJnczogYXJncyB9O1xuICAgICAgdGFza3NCeUhhbmRsZVtuZXh0SGFuZGxlXSA9IHRhc2s7XG4gICAgICByZWdpc3RlckltbWVkaWF0ZShuZXh0SGFuZGxlKTtcbiAgICAgIHJldHVybiBuZXh0SGFuZGxlKys7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYXJJbW1lZGlhdGUoaGFuZGxlKSB7XG4gICAgICAgIGRlbGV0ZSB0YXNrc0J5SGFuZGxlW2hhbmRsZV07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcnVuKHRhc2spIHtcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gdGFzay5jYWxsYmFjaztcbiAgICAgICAgdmFyIGFyZ3MgPSB0YXNrLmFyZ3M7XG4gICAgICAgIHN3aXRjaCAoYXJncy5sZW5ndGgpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgY2FsbGJhY2suYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcnVuSWZQcmVzZW50KGhhbmRsZSkge1xuICAgICAgICAvLyBGcm9tIHRoZSBzcGVjOiBcIldhaXQgdW50aWwgYW55IGludm9jYXRpb25zIG9mIHRoaXMgYWxnb3JpdGhtIHN0YXJ0ZWQgYmVmb3JlIHRoaXMgb25lIGhhdmUgY29tcGxldGVkLlwiXG4gICAgICAgIC8vIFNvIGlmIHdlJ3JlIGN1cnJlbnRseSBydW5uaW5nIGEgdGFzaywgd2UnbGwgbmVlZCB0byBkZWxheSB0aGlzIGludm9jYXRpb24uXG4gICAgICAgIGlmIChjdXJyZW50bHlSdW5uaW5nQVRhc2spIHtcbiAgICAgICAgICAgIC8vIERlbGF5IGJ5IGRvaW5nIGEgc2V0VGltZW91dC4gc2V0SW1tZWRpYXRlIHdhcyB0cmllZCBpbnN0ZWFkLCBidXQgaW4gRmlyZWZveCA3IGl0IGdlbmVyYXRlZCBhXG4gICAgICAgICAgICAvLyBcInRvbyBtdWNoIHJlY3Vyc2lvblwiIGVycm9yLlxuICAgICAgICAgICAgc2V0VGltZW91dChydW5JZlByZXNlbnQsIDAsIGhhbmRsZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgdGFzayA9IHRhc2tzQnlIYW5kbGVbaGFuZGxlXTtcbiAgICAgICAgICAgIGlmICh0YXNrKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudGx5UnVubmluZ0FUYXNrID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBydW4odGFzayk7XG4gICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbW1lZGlhdGUoaGFuZGxlKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudGx5UnVubmluZ0FUYXNrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbE5leHRUaWNrSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uICgpIHsgcnVuSWZQcmVzZW50KGhhbmRsZSk7IH0pO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhblVzZVBvc3RNZXNzYWdlKCkge1xuICAgICAgICAvLyBUaGUgdGVzdCBhZ2FpbnN0IGBpbXBvcnRTY3JpcHRzYCBwcmV2ZW50cyB0aGlzIGltcGxlbWVudGF0aW9uIGZyb20gYmVpbmcgaW5zdGFsbGVkIGluc2lkZSBhIHdlYiB3b3JrZXIsXG4gICAgICAgIC8vIHdoZXJlIGBnbG9iYWwucG9zdE1lc3NhZ2VgIG1lYW5zIHNvbWV0aGluZyBjb21wbGV0ZWx5IGRpZmZlcmVudCBhbmQgY2FuJ3QgYmUgdXNlZCBmb3IgdGhpcyBwdXJwb3NlLlxuICAgICAgICBpZiAoZ2xvYmFsLnBvc3RNZXNzYWdlICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cykge1xuICAgICAgICAgICAgdmFyIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXMgPSB0cnVlO1xuICAgICAgICAgICAgdmFyIG9sZE9uTWVzc2FnZSA9IGdsb2JhbC5vbm1lc3NhZ2U7XG4gICAgICAgICAgICBnbG9iYWwub25tZXNzYWdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cyA9IGZhbHNlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShcIlwiLCBcIipcIik7XG4gICAgICAgICAgICBnbG9iYWwub25tZXNzYWdlID0gb2xkT25NZXNzYWdlO1xuICAgICAgICAgICAgcmV0dXJuIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsUG9zdE1lc3NhZ2VJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgLy8gSW5zdGFsbHMgYW4gZXZlbnQgaGFuZGxlciBvbiBgZ2xvYmFsYCBmb3IgdGhlIGBtZXNzYWdlYCBldmVudDogc2VlXG4gICAgICAgIC8vICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4vRE9NL3dpbmRvdy5wb3N0TWVzc2FnZVxuICAgICAgICAvLyAqIGh0dHA6Ly93d3cud2hhdHdnLm9yZy9zcGVjcy93ZWItYXBwcy9jdXJyZW50LXdvcmsvbXVsdGlwYWdlL2NvbW1zLmh0bWwjY3Jvc3NEb2N1bWVudE1lc3NhZ2VzXG5cbiAgICAgICAgdmFyIG1lc3NhZ2VQcmVmaXggPSBcInNldEltbWVkaWF0ZSRcIiArIE1hdGgucmFuZG9tKCkgKyBcIiRcIjtcbiAgICAgICAgdmFyIG9uR2xvYmFsTWVzc2FnZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuc291cmNlID09PSBnbG9iYWwgJiZcbiAgICAgICAgICAgICAgICB0eXBlb2YgZXZlbnQuZGF0YSA9PT0gXCJzdHJpbmdcIiAmJlxuICAgICAgICAgICAgICAgIGV2ZW50LmRhdGEuaW5kZXhPZihtZXNzYWdlUHJlZml4KSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJ1bklmUHJlc2VudCgrZXZlbnQuZGF0YS5zbGljZShtZXNzYWdlUHJlZml4Lmxlbmd0aCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICAgICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIG9uR2xvYmFsTWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ2xvYmFsLmF0dGFjaEV2ZW50KFwib25tZXNzYWdlXCIsIG9uR2xvYmFsTWVzc2FnZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKG1lc3NhZ2VQcmVmaXggKyBoYW5kbGUsIFwiKlwiKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsTWVzc2FnZUNoYW5uZWxJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgdmFyIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICAgICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgdmFyIGhhbmRsZSA9IGV2ZW50LmRhdGE7XG4gICAgICAgICAgICBydW5JZlByZXNlbnQoaGFuZGxlKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgY2hhbm5lbC5wb3J0Mi5wb3N0TWVzc2FnZShoYW5kbGUpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxSZWFkeVN0YXRlQ2hhbmdlSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHZhciBodG1sID0gZG9jLmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhIDxzY3JpcHQ+IGVsZW1lbnQ7IGl0cyByZWFkeXN0YXRlY2hhbmdlIGV2ZW50IHdpbGwgYmUgZmlyZWQgYXN5bmNocm9ub3VzbHkgb25jZSBpdCBpcyBpbnNlcnRlZFxuICAgICAgICAgICAgLy8gaW50byB0aGUgZG9jdW1lbnQuIERvIHNvLCB0aHVzIHF1ZXVpbmcgdXAgdGhlIHRhc2suIFJlbWVtYmVyIHRvIGNsZWFuIHVwIG9uY2UgaXQncyBiZWVuIGNhbGxlZC5cbiAgICAgICAgICAgIHZhciBzY3JpcHQgPSBkb2MuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgICAgICAgICAgIHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcnVuSWZQcmVzZW50KGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgaHRtbC5yZW1vdmVDaGlsZChzY3JpcHQpO1xuICAgICAgICAgICAgICAgIHNjcmlwdCA9IG51bGw7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaHRtbC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxTZXRUaW1lb3V0SW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KHJ1bklmUHJlc2VudCwgMCwgaGFuZGxlKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBJZiBzdXBwb3J0ZWQsIHdlIHNob3VsZCBhdHRhY2ggdG8gdGhlIHByb3RvdHlwZSBvZiBnbG9iYWwsIHNpbmNlIHRoYXQgaXMgd2hlcmUgc2V0VGltZW91dCBldCBhbC4gbGl2ZS5cbiAgICB2YXIgYXR0YWNoVG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgJiYgT2JqZWN0LmdldFByb3RvdHlwZU9mKGdsb2JhbCk7XG4gICAgYXR0YWNoVG8gPSBhdHRhY2hUbyAmJiBhdHRhY2hUby5zZXRUaW1lb3V0ID8gYXR0YWNoVG8gOiBnbG9iYWw7XG5cbiAgICAvLyBEb24ndCBnZXQgZm9vbGVkIGJ5IGUuZy4gYnJvd3NlcmlmeSBlbnZpcm9ubWVudHMuXG4gICAgaWYgKHt9LnRvU3RyaW5nLmNhbGwoZ2xvYmFsLnByb2Nlc3MpID09PSBcIltvYmplY3QgcHJvY2Vzc11cIikge1xuICAgICAgICAvLyBGb3IgTm9kZS5qcyBiZWZvcmUgMC45XG4gICAgICAgIGluc3RhbGxOZXh0VGlja0ltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGNhblVzZVBvc3RNZXNzYWdlKCkpIHtcbiAgICAgICAgLy8gRm9yIG5vbi1JRTEwIG1vZGVybiBicm93c2Vyc1xuICAgICAgICBpbnN0YWxsUG9zdE1lc3NhZ2VJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChnbG9iYWwuTWVzc2FnZUNoYW5uZWwpIHtcbiAgICAgICAgLy8gRm9yIHdlYiB3b3JrZXJzLCB3aGVyZSBzdXBwb3J0ZWRcbiAgICAgICAgaW5zdGFsbE1lc3NhZ2VDaGFubmVsSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoZG9jICYmIFwib25yZWFkeXN0YXRlY2hhbmdlXCIgaW4gZG9jLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIikpIHtcbiAgICAgICAgLy8gRm9yIElFIDbigJM4XG4gICAgICAgIGluc3RhbGxSZWFkeVN0YXRlQ2hhbmdlSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEZvciBvbGRlciBicm93c2Vyc1xuICAgICAgICBpbnN0YWxsU2V0VGltZW91dEltcGxlbWVudGF0aW9uKCk7XG4gICAgfVxuXG4gICAgYXR0YWNoVG8uc2V0SW1tZWRpYXRlID0gc2V0SW1tZWRpYXRlO1xuICAgIGF0dGFjaFRvLmNsZWFySW1tZWRpYXRlID0gY2xlYXJJbW1lZGlhdGU7XG59KHR5cGVvZiBzZWxmID09PSBcInVuZGVmaW5lZFwiID8gdHlwZW9mIGdsb2JhbCA9PT0gXCJ1bmRlZmluZWRcIiA/IHRoaXMgOiBnbG9iYWwgOiBzZWxmKSk7XG4iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHBhc3NpbmcgZnVuY3Rpb24gaW4gb3B0aW9ucywgdGhlbiB1c2UgaXQgZm9yIHJlc29sdmUgXCJoZWFkXCIgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvLyBVc2VmdWwgZm9yIFNoYWRvdyBSb290IHN0eWxlIGkuZVxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgIGluc2VydEludG86IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vXCIpLnNoYWRvd1Jvb3QgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0VGFyZ2V0LmNhbGwodGhpcywgdGFyZ2V0KTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3RhcmdldF1cblx0fTtcbn0pKCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG4gICAgICAgIGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvICsgXCIgXCIgKyBvcHRpb25zLmluc2VydEF0LmJlZm9yZSk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG4iLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcL3xcXHMqJCkvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcbiIsInZhciBzY29wZSA9ICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiICYmIGdsb2JhbCkgfHxcbiAgICAgICAgICAgICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzZWxmKSB8fFxuICAgICAgICAgICAgd2luZG93O1xudmFyIGFwcGx5ID0gRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5O1xuXG4vLyBET00gQVBJcywgZm9yIGNvbXBsZXRlbmVzc1xuXG5leHBvcnRzLnNldFRpbWVvdXQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBUaW1lb3V0KGFwcGx5LmNhbGwoc2V0VGltZW91dCwgc2NvcGUsIGFyZ3VtZW50cyksIGNsZWFyVGltZW91dCk7XG59O1xuZXhwb3J0cy5zZXRJbnRlcnZhbCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFRpbWVvdXQoYXBwbHkuY2FsbChzZXRJbnRlcnZhbCwgc2NvcGUsIGFyZ3VtZW50cyksIGNsZWFySW50ZXJ2YWwpO1xufTtcbmV4cG9ydHMuY2xlYXJUaW1lb3V0ID1cbmV4cG9ydHMuY2xlYXJJbnRlcnZhbCA9IGZ1bmN0aW9uKHRpbWVvdXQpIHtcbiAgaWYgKHRpbWVvdXQpIHtcbiAgICB0aW1lb3V0LmNsb3NlKCk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIFRpbWVvdXQoaWQsIGNsZWFyRm4pIHtcbiAgdGhpcy5faWQgPSBpZDtcbiAgdGhpcy5fY2xlYXJGbiA9IGNsZWFyRm47XG59XG5UaW1lb3V0LnByb3RvdHlwZS51bnJlZiA9IFRpbWVvdXQucHJvdG90eXBlLnJlZiA9IGZ1bmN0aW9uKCkge307XG5UaW1lb3V0LnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLl9jbGVhckZuLmNhbGwoc2NvcGUsIHRoaXMuX2lkKTtcbn07XG5cbi8vIERvZXMgbm90IHN0YXJ0IHRoZSB0aW1lLCBqdXN0IHNldHMgdXAgdGhlIG1lbWJlcnMgbmVlZGVkLlxuZXhwb3J0cy5lbnJvbGwgPSBmdW5jdGlvbihpdGVtLCBtc2Vjcykge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG4gIGl0ZW0uX2lkbGVUaW1lb3V0ID0gbXNlY3M7XG59O1xuXG5leHBvcnRzLnVuZW5yb2xsID0gZnVuY3Rpb24oaXRlbSkge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG4gIGl0ZW0uX2lkbGVUaW1lb3V0ID0gLTE7XG59O1xuXG5leHBvcnRzLl91bnJlZkFjdGl2ZSA9IGV4cG9ydHMuYWN0aXZlID0gZnVuY3Rpb24oaXRlbSkge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG5cbiAgdmFyIG1zZWNzID0gaXRlbS5faWRsZVRpbWVvdXQ7XG4gIGlmIChtc2VjcyA+PSAwKSB7XG4gICAgaXRlbS5faWRsZVRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gb25UaW1lb3V0KCkge1xuICAgICAgaWYgKGl0ZW0uX29uVGltZW91dClcbiAgICAgICAgaXRlbS5fb25UaW1lb3V0KCk7XG4gICAgfSwgbXNlY3MpO1xuICB9XG59O1xuXG4vLyBzZXRpbW1lZGlhdGUgYXR0YWNoZXMgaXRzZWxmIHRvIHRoZSBnbG9iYWwgb2JqZWN0XG5yZXF1aXJlKFwic2V0aW1tZWRpYXRlXCIpO1xuLy8gT24gc29tZSBleG90aWMgZW52aXJvbm1lbnRzLCBpdCdzIG5vdCBjbGVhciB3aGljaCBvYmplY3QgYHNldGltbWVkaWF0ZWAgd2FzXG4vLyBhYmxlIHRvIGluc3RhbGwgb250by4gIFNlYXJjaCBlYWNoIHBvc3NpYmlsaXR5IGluIHRoZSBzYW1lIG9yZGVyIGFzIHRoZVxuLy8gYHNldGltbWVkaWF0ZWAgbGlicmFyeS5cbmV4cG9ydHMuc2V0SW1tZWRpYXRlID0gKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmIHNlbGYuc2V0SW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBnbG9iYWwuc2V0SW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAodGhpcyAmJiB0aGlzLnNldEltbWVkaWF0ZSk7XG5leHBvcnRzLmNsZWFySW1tZWRpYXRlID0gKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmIHNlbGYuY2xlYXJJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgJiYgZ2xvYmFsLmNsZWFySW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzICYmIHRoaXMuY2xlYXJJbW1lZGlhdGUpO1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiLy8gRW50cnlGb3JtLmpzeFxuXG5pbXBvcnQge3NldE1vY2tEYXRhfSBmcm9tIFwiLi4vc3RvcmUvZGF0YVwiO1xuXG5jb25zdCBlbnRyeUZvcm1IYW5kbGVyID0gKGZvcm1ET00pID0+IHtcblxuXHRjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtRE9NKTtcblx0Y29uc3QgbmV3RW50cnkgPSB7fTtcblxuXHRBcnJheS5mcm9tKGZvcm1EYXRhLmVudHJpZXMoKSkubWFwKChlbnRyeVZhbHVlKSA9PiB7XG5cdFx0Y29uc3Qga2V5ID0gZW50cnlWYWx1ZVswXTtcblx0XHRjb25zdCB2YWx1ZSA9IGVudHJ5VmFsdWVbMV07XG5cblx0XHRzd2l0Y2ggKHZhbHVlKSB7XG4gICAgICBjYXNlIFwiZmFsc2VcIjpcblx0ICAgICAgbmV3RW50cnlba2V5XSA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJ0cnVlXCI6XG5cdCAgICAgIG5ld0VudHJ5W2tleV0gPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG5cdCAgICAgIG5ld0VudHJ5W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXHR9KTtcblxuXHRjb25zb2xlLmxvZyhuZXdFbnRyeSk7XG5cblx0bmV3RW50cnlbXCJmYXZvcml0ZVwiXSA9IGZhbHNlO1xuXHRuZXdFbnRyeVtcIkNGUENvbXBsZXRlZFwiXSA9IG5ld0VudHJ5LkNGUCA/IGZhbHNlIDogXCJudWxsXCI7XG5cblx0c2V0TW9ja0RhdGEobmV3RW50cnkpO1xuXG5cdGZvcm1ET00ucmVzZXQoKTtcbn07XG5cbmNvbnN0IG0gPSByZXF1aXJlKCdtaXRocmlsJyk7XG5pbXBvcnQgVUlCdXR0b24gZnJvbSAnLi91aS9VSUJ1dHRvbi5qc3gnO1xuXG5jb25zdCBFbnRyeUZvcm0gPSB7XG5cdGRhdGE6IHtcblx0XHRDRlA6IGZhbHNlXG5cdH0sXG5cdHZpZXc6ICh2bm9kZSkgPT5cblx0ICA8ZGl2IGNsYXNzPVwiZm9ybS1vdXRlci1vdXRlclwiPlxuXHRcdFx0PGRpdiBjbGFzcz1cImZvcm0tb3V0ZXJcIj5cblx0XHRcdFx0PGZvcm0gbmFtZT1cImVudHJ5LWZvcm1cIiBpZD1cImVudHJ5LWZvcm1cIj5cblx0XHRcdFx0XHR7LyoqL31cblx0XHRcdFx0XHQ8bGFiZWwgZm9yPVwiY29uZi1uYW1lXCI+XG5cdFx0XHRcdFx0XHR7YENvbmZlcmVuY2UgTmFtZWB9XG5cdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHQ8aW5wdXQgaWQ9XCJjb25mLW5hbWVcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgLz5cblx0XHRcdFx0XHQ8bGFiZWwgZm9yPVwibG9jYXRpb25cIj5cblx0XHRcdFx0XHRcdHtgTG9jYXRpb25gfVxuXHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0PGlucHV0IGlkPVwibG9jYXRpb25cIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJsb2NhdGlvblwiIC8+XG5cdFx0XHRcdFx0PGxhYmVsIGZvcj1cImRhdGVcIj5cblx0XHRcdFx0XHRcdHtgRGF0ZWB9XG5cdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHQ8aW5wdXQgaWQ9XCJkYXRlXCIgdHlwZT1cInRleHRcIiBuYW1lPVwiZGF0ZVwiIC8+XG5cdFx0XHRcdFx0PGxhYmVsIGNsYXNzPVwiZm9ybS1xdWVzdGlvblwiPlxuXHRcdFx0XHRcdFx0e2BSZWdpc3RyYXRpb24gRGVhZGxpbmU/YH1cblx0XHRcdFx0XHRcdDxsYWJlbCBmb3I9XCJ5ZXMtY2ZwXCI+WWVzPC9sYWJlbD5cblx0XHRcdFx0XHRcdDxpbnB1dCB2YWx1ZT17dHJ1ZX0gdHlwZT1cInJhZGlvXCIgaWQ9XCJ5ZXMtY2ZwXCIgbmFtZT1cIkNGUFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRvbmNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZub2RlLnN0YXRlLkNGUCA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdFx0XHR9fSAvPlxuXHRcdFx0XHRcdFx0PGxhYmVsIGZvcj1cIm5vLWNmcFwiPk5vPC9sYWJlbD5cblx0XHRcdFx0XHRcdDxpbnB1dCB2YWx1ZT17ZmFsc2V9IHR5cGU9XCJyYWRpb1wiIGlkPVwibm8tY2ZwXCIgbmFtZT1cIkNGUFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRvbmNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZub2RlLnN0YXRlLkNGUCA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0XHRcdFx0fX0gLz5cblx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHZub2RlLnN0YXRlLkNGUCA/XG5cdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgZm9yPVwiY2ZwXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHR7YFJlZ2lzdHJhdGlvbiBEZWFkbGluZWB9XG5cdFx0XHRcdFx0XHRcdFx0PC9sYWJlbD4sXG5cdFx0XHRcdFx0XHRcdFx0PGlucHV0IGlkPVwiY2ZwXCIgdHlwZT1cInRleHRcIiBuYW1lPVwiQ0ZQRGF0ZVwiIC8+XG5cdFx0XHRcdFx0XHRcdF0gOlxuXHRcdFx0XHRcdFx0XHRudWxsXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdDxVSUJ1dHRvbiBhY3Rpb249eygpID0+IGVudHJ5Rm9ybUhhbmRsZXIodm5vZGUuZG9tKX0gYnV0dG9uTmFtZT1cIlNhdmVcIiAvPlxuXHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVudHJ5Rm9ybTsiLCIvLyBDRlBDYXJkLmpzeFxuXG5jb25zdCBtID0gcmVxdWlyZShcIm1pdGhyaWxcIik7XG5cbmltcG9ydCBDb25mZXJlbmNlRmllbGQgZnJvbSAnLi9Db25mZXJlbmNlRmllbGQuanN4JztcbmltcG9ydCBDb3VudERvd25GaWVsZCBmcm9tIFwiLi9Db3VudERvd25GaWVsZC5qc3hcIjtcblxuY29uc3QgQ0ZQQ2FyZCA9IHtcbiAgdmlldzogKHsgYXR0cnMgfSkgPT5cbiAgICA8ZGl2IGNsYXNzPVwiY29uZmVyZW5jZS1jYXJkXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29uZmVyZW5jZS1maWVsZHNcIj5cbiAgICAgICAgPENvbmZlcmVuY2VGaWVsZCBmaWVsZFZhbHVlPXtgJHthdHRycy5jb25mZXJlbmNlLm5hbWV9IEAgJHthdHRycy5jb25mZXJlbmNlLmxvY2F0aW9ufWB9IC8+XG4gICAgICAgIDxDb25mZXJlbmNlRmllbGQgZmllbGRWYWx1ZT17XG4gICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtY2hlY2stY2lyY2xlXCIgLz5cbiAgICAgICAgfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29uZmVyZW5jZS1maWVsZHNcIj5cbiAgICAgICAgPENvbmZlcmVuY2VGaWVsZCBmaWVsZFZhbHVlPXthdHRycy5jb25mZXJlbmNlLkNGUERhdGV9IC8+XG4gICAgICAgIDxDb3VudERvd25GaWVsZCBmaWVsZFZhbHVlPXthdHRycy5jb25mZXJlbmNlLkNGUERhdGV9IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IENGUENhcmQ7IiwiLy8gQ29uZmVyZW5jZUNhcmQuanN4XG5cbmNvbnN0IG0gPSByZXF1aXJlKFwibWl0aHJpbFwiKTtcblxuaW1wb3J0IENvbmZlcmVuY2VGaWVsZCBmcm9tICcuL0NvbmZlcmVuY2VGaWVsZC5qc3gnO1xuaW1wb3J0IENvdW50RG93bkZpZWxkIGZyb20gXCIuL0NvdW50RG93bkZpZWxkLmpzeFwiO1xuXG5jb25zdCBDb25mZXJlbmNlQ2FyZCA9IHtcblx0dmlldzogKHsgYXR0cnMgfSkgPT5cblx0XHQ8ZGl2IGNsYXNzPVwiY29uZmVyZW5jZS1jYXJkXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29uZmVyZW5jZS1maWVsZHNcIj5cblx0XHRcdFx0PENvbmZlcmVuY2VGaWVsZCBmaWVsZFZhbHVlPXtgJHthdHRycy5jb25mZXJlbmNlLm5hbWV9IEAgJHthdHRycy5jb25mZXJlbmNlLmxvY2F0aW9ufWB9IC8+XG5cdFx0XHRcdDxDb25mZXJlbmNlRmllbGQgZmllbGRWYWx1ZT17XG5cdFx0XHRcdFx0PGkgY2xhc3M9XCJmYXMgZmEtc3RhclwiIC8+XG5cdFx0XHRcdH0gLz5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz1cImNvbmZlcmVuY2UtZmllbGRzXCI+XG5cdFx0XHRcdDxDb25mZXJlbmNlRmllbGQgZmllbGRWYWx1ZT17YXR0cnMuY29uZmVyZW5jZS5kYXRlfSAvPlxuXHRcdFx0XHQ8Q291bnREb3duRmllbGQgZmllbGRWYWx1ZT17YXR0cnMuY29uZmVyZW5jZS5kYXRlfSAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb25mZXJlbmNlQ2FyZDsiLCIvLyBDb25mZXJlbmNlRmllbGQuanN4XG5cbmNvbnN0IG0gPSByZXF1aXJlKFwibWl0aHJpbFwiKTtcblxuY29uc3QgQ29uZmVyZW5jZUZpZWxkID0ge1xuXHR2aWV3OiAoeyBhdHRycyB9KSA9PlxuXHRcdDxkaXYgY2xhc3M9XCJjb25mZXJlbmNlLWZpZWxkXCI+XG5cdFx0XHR7YXR0cnMuZmllbGRWYWx1ZX1cblx0XHQ8L2RpdiA+XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb25mZXJlbmNlRmllbGQ7IiwiLy8gQ291bnREb3duRmllbGQuanN4XG5cbmNvbnN0IG0gPSByZXF1aXJlKFwibWl0aHJpbFwiKTtcblxuaW1wb3J0IENvbmZlcmVuY2VGaWVsZCBmcm9tIFwiLi9Db25mZXJlbmNlRmllbGQuanN4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvdW50RG93bkZpZWxkIHtcblx0Y29uc3RydWN0b3Iodm5vZGUpIHtcblx0XHR0aGlzLmRlYWRsaW5lID0gdm5vZGUuYXR0cnMuZmllbGRWYWx1ZTtcblx0XHR0aGlzLmNvdW50RG93bkRhdGUgPSBuZXcgRGF0ZSh0aGlzLmRlYWRsaW5lKS5nZXRUaW1lKCk7XG5cdFx0dGhpcy50aW1lTGVmdCA9IHRoaXMuZ2V0VGltZUxlZnQoKTtcblx0XHR0aGlzLmRpc3RhbmNlID0gdGhpcy5jb3VudERvd25EYXRlIC0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cdH1cblxuXHR2aWV3KCkge1xuXHRcdHJldHVybiA8Q29uZmVyZW5jZUZpZWxkIGZpZWxkVmFsdWU9e3RoaXMudGltZUxlZnR9IC8+O1xuXHR9XG5cblx0Z2V0VGltZUxlZnQoKSB7XG5cdFx0Y29uc3Qgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cdFx0dGhpcy5kaXN0YW5jZSA9IHRoaXMuY291bnREb3duRGF0ZSAtIG5vdztcblxuXHRcdGNvbnN0IGRheXMgPSBNYXRoLmZsb29yKHRoaXMuZGlzdGFuY2UgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpO1xuXHRcdGNvbnN0IGhvdXJzID0gTWF0aC5mbG9vcigodGhpcy5kaXN0YW5jZSAlICgxMDAwICogNjAgKiA2MCAqIDI0KSkgLyAoMTAwMCAqIDYwICogNjApKTtcblx0XHRjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcigodGhpcy5kaXN0YW5jZSAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MCkpO1xuXHRcdGNvbnN0IHNlY29uZHMgPSBNYXRoLmZsb29yKCh0aGlzLmRpc3RhbmNlICUgKDEwMDAgKiA2MCkpIC8gMTAwMCk7XG5cblx0XHRyZXR1cm4gZGF5cyArIFwiZCBcIiArIGhvdXJzICsgXCJoIFwiXG5cdFx0XHQrIG1pbnV0ZXMgKyBcIm0gXCIgKyBzZWNvbmRzICsgXCJzIFwiO1xuXHR9XG5cblx0Y291bnRkb3duKCkge1xuXG5cdFx0Y29uc3QgY291bnREb3duSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG5cblx0XHRcdHRoaXMudGltZUxlZnQgPSB0aGlzLmdldFRpbWVMZWZ0KCk7XG5cblx0XHRcdG0ucmVkcmF3KCk7XG5cblx0XHRcdGlmICh0aGlzLmRpc3RhbmNlIDwgMCkge1xuXHRcdFx0XHRjbGVhckludGVydmFsKGNvdW50RG93bkludGVydmFsKTtcblx0XHRcdFx0dGhpcy50aW1lTGVmdCA9IFwiRVhQSVJFRFwiO1xuXHRcdFx0fVxuXHRcdH0sIDEwMDApO1xuXHR9XG5cblx0b25pbml0KHZub2RlKSB7XG5cdFx0dGhpcy5jb3VudGRvd24odm5vZGUuYXR0cnMuZmllbGRWYWx1ZSk7XG5cblx0XHRpZiAodGhpcy5kaXN0YW5jZSA8IDApIHtcblx0XHRcdHRoaXMudGltZUxlZnQgPSBcIkVYUElSRURcIjtcblx0XHR9XG5cdH1cbn0iLCIvLyBBcHAuanN4XG5cbmNvbnN0IG0gPSByZXF1aXJlKCdtaXRocmlsJyk7XG5cbmltcG9ydCBNYWluU3RhZ2UgZnJvbSAnLi9NYWluU3RhZ2UuanN4JztcbmltcG9ydCBOYXZCYXIgZnJvbSAnLi9OYXZCYXIuanN4JztcblxuLy8gQ29tcG9uZW50c1xuaW1wb3J0IFN0YWdlQmFubmVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdWkvU3RhZ2VCYW5uZXIuanN4JztcbmltcG9ydCBDYXJkQ29udGFpbmVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0L0NhcmRDb250YWluZXIuanN4JztcbmltcG9ydCBDb25mZXJlbmNlQ2FyZCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NhcmRzL0NvbmZlcmVuY2VDYXJkLmpzeCc7XG5pbXBvcnQgQ0ZQQ2FyZCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NhcmRzL0NGUENhcmQuanN4JztcbmltcG9ydCBFbnRyeUZvcm0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9FbnRyeUZvcm0uanN4JztcbmltcG9ydCBVSUJ1dHRvbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy91aS9VSUJ1dHRvbi5qc3hcIjtcblxuaW1wb3J0IEF1dGggZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2F1dGguanNcIjtcbmNvbnN0IGF1dGggPSBuZXcgQXV0aCgpO1xuXG4vLyBNb2NrIGRhdGFcbmltcG9ydCB7Z2V0TW9ja0RhdGF9IGZyb20gJy4uLy4uL3N0b3JlL2RhdGEnO1xuY29uc3QgQ09ORkVSRU5DRVMgPSBnZXRNb2NrRGF0YSgpO1xuXG5jb25zdCBDb25mZXJlbmNlVmlldyA9IChjb25mZXJlbmNlcykgPT4gW1xuXHQ8U3RhZ2VCYW5uZXIgYWN0aW9uPXsoKSA9PiBhdXRoLmxvZ291dCgpfSB0aXRsZT1cIkNvbmZlcmVuY2VzXCIgLz4sXG5cdDxDYXJkQ29udGFpbmVyPlxuXHRcdHtcblx0XHRcdGNvbmZlcmVuY2VzXG5cdFx0XHRcdC5tYXAoKGNvbmZlcmVuY2UpID0+IDxDb25mZXJlbmNlQ2FyZCBjb25mZXJlbmNlPXtjb25mZXJlbmNlfSAvPilcblx0XHR9XG5cdDwvQ2FyZENvbnRhaW5lcj5cbl07XG5cbmNvbnN0IENGUFZpZXcgPSAoY29uZmVyZW5jZXMpID0+IFtcblx0PFN0YWdlQmFubmVyIGFjdGlvbj17KCkgPT4gYXV0aC5sb2dvdXQoKX0gdGl0bGU9XCJSZWdpc3RyYXRpb24gRGVhZGxpbmVcIiAvPixcblx0PENhcmRDb250YWluZXI+XG5cdFx0e1xuXHRcdFx0Y29uZmVyZW5jZXNcblx0XHRcdFx0LmZpbHRlcihjb25mZXJlbmNlID0+IGNvbmZlcmVuY2UuQ0ZQKVxuXHRcdFx0XHQubWFwKGNvbmZlcmVuY2VXaXRoQ0ZQID0+IDxDRlBDYXJkIGNmcD17dHJ1ZX0gY29uZmVyZW5jZT17Y29uZmVyZW5jZVdpdGhDRlB9IC8+KVxuXHRcdH1cblx0PC9DYXJkQ29udGFpbmVyPlxuXTtcblxuY29uc3QgRm9ybVZpZXcgPSAoKSA9PiBbXG5cdDxTdGFnZUJhbm5lciBhY3Rpb249eygpID0+IGF1dGgubG9nb3V0KCl9IHRpdGxlPVwiQWRkIEV2ZW50XCIgLz4sXG5cdDxDYXJkQ29udGFpbmVyPlxuXHRcdDxFbnRyeUZvcm0gLz5cblx0PC9DYXJkQ29udGFpbmVyPlxuXTtcblxuY29uc3QgV2VsY29tZVZpZXcgPSAoKSA9PiBbXG5cdDxkaXYgY2xhc3M9XCJ3ZWxjb21lVmlld091dGVyXCI+XG5cdFx0PGgxIGNsYXNzPVwiYXBwLXRpdGxlXCI+Q29uZmVyZW5jZSBUcmFja2VyPC9oMT5cblx0XHQ8aDIgY2xhc3M9XCJhcHAtZ3JlZXRpbmdcIj5XZWxjb21lPC9oMj5cblx0XHQ8ZGl2IGNsYXNzPVwiYXBwLWRlc2NyaXB0aW9uXCI+VHJhY2sgY29uZmVyZW5jZXMgYW5kIG90aGVyIGV2ZW50IGRhdGVzLjwvZGl2PlxuXHRcdDxkaXYgY2xhc3M9XCJsb2dpbi1idXR0b24tb3V0ZXJcIj5cblx0XHQgIDxVSUJ1dHRvbiBhY3Rpb249eygpID0+IGF1dGgubG9naW4oKX0gYnV0dG9uTmFtZT1cIkxvZ2luXCIgY2xhc3M9XCJsb2dpbi1idXR0b25cIiAvPlxuXHRcdDwvZGl2PlxuXHQ8L2Rpdj5cbl07XG5cbmNvbnN0IEFwcCA9IHtcblx0b25jcmVhdGU6ICh2bm9kZSkgPT4ge1xuXHRcdGNvbnN0IG1haW5TdGFnZSA9IHZub2RlLmRvbS5xdWVyeVNlbGVjdG9yKFwiLm1haW4tc3RhZ2VcIik7XG5cblx0XHRtLnJvdXRlKG1haW5TdGFnZSwgXCIvY29uZmVyZW5jZXNcIiwge1xuICAgICAgXCIvYXV0aFwiOiB7XG4gICAgICAgIHZpZXc6ICgpID0+IFdlbGNvbWVWaWV3KClcbiAgICAgIH0sXG4gICAgICBcIi9jb25mZXJlbmNlc1wiOiB7XG4gICAgICAgIHZpZXc6ICgpID0+IENvbmZlcmVuY2VWaWV3KENPTkZFUkVOQ0VTKVxuICAgICAgfSxcbiAgICAgIFwiL2NmcFwiOiB7XG4gICAgICAgIHZpZXc6ICgpID0+IENGUFZpZXcoQ09ORkVSRU5DRVMpXG4gICAgICB9LFxuICAgICAgXCIvZW50cnlcIjoge1xuICAgICAgICB2aWV3OiAoKSA9PiBGb3JtVmlldygpXG4gICAgICB9XG5cdFx0fSk7XG5cdH0sXG5cdHZpZXc6ICh7IGNoaWxkcmVuIH0pID0+XG5cdFx0PGRpdiBjbGFzcz1cIkFwcFwiPlxuXHRcdCAgPE5hdkJhciAvPlxuXHRcdFx0PE1haW5TdGFnZT5cblx0XHRcdFx0e2NoaWxkcmVufVxuXHRcdFx0PC9NYWluU3RhZ2U+XG5cdFx0PC9kaXY+XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7IiwiLy8gQ2FyZENvbnRhaW5lci5qc3hcblxuY29uc3QgbSA9IHJlcXVpcmUoXCJtaXRocmlsXCIpO1xuXG5jb25zdCBDYXJkQ29udGFpbmVyID0ge1xuICB2aWV3OiAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRhaW5lclwiPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcmRDb250YWluZXI7IiwiLy8gTWFpblN0YWdlLmpzeFxuXG5jb25zdCBtID0gcmVxdWlyZShcIm1pdGhyaWxcIik7XG5cbmNvbnN0IE1haW5TdGFnZSA9IHtcblx0dmlldzogKHZub2RlKSA9PlxuXHRcdDxkaXYgY2xhc3M9XCJtYWluLXN0YWdlXCI+XG5cdFx0XHR7dm5vZGUuY2hpbGRyZW59XG5cdFx0PC9kaXY+XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNYWluU3RhZ2U7IiwiLy8gTmF2QmFyLmpzeFxuXG5jb25zdCBtID0gcmVxdWlyZShcIm1pdGhyaWxcIik7XG5cbmltcG9ydCBOYXZCdXR0b24gZnJvbSAnLi4vdWkvTmF2QnV0dG9uLmpzeCc7XG5cbmNvbnN0IE5hdkJhciA9IHtcblx0dmlldzogKCkgPT5cblx0XHQ8ZGl2IGNsYXNzPVwibmF2LWJhclwiPlxuXHRcdFx0PGRpdiBjbGFzcz1cIm5hdi1iYXItdGl0bGUtb3V0ZXJcIj5cblx0XHRcdCAgPHNwYW4gY2xhc3M9XCJuYXYtYmFyLXRpdGxlXCI+Q29uZmVyZW5jZSBUcmFja2VyPC9zcGFuPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwibmF2LWJhci1pY29ucy1vdXRlclwiPlxuXHRcdFx0XHQ8TmF2QnV0dG9uIHBhdGg9e2BjZnBgfSBpY29uPXs8aSBjbGFzcz1cImZhcyBmYS1zdG9wd2F0Y2ggbmF2LWJhci1pY29uXCIvPn0gLz5cblx0XHRcdFx0PE5hdkJ1dHRvbiBwYXRoPXtgY29uZmVyZW5jZXNgfSBpY29uPXs8aSBjbGFzcz1cImZhciBmYS1jYWxlbmRhci1hbHQgbmF2LWJhci1pY29uXCIvPn0gLz5cblx0XHRcdFx0PE5hdkJ1dHRvbiBwYXRoPXtgZW50cnlgfSBpY29uPXs8aSBjbGFzcz1cImZhcyBmYS1lZGl0IG5hdi1iYXItaWNvblwiLz59IC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdkJhcjsiLCIvLyBMb2dvdXRCdXR0b24uanN4XG5cbmNvbnN0IG0gPSByZXF1aXJlKFwibWl0aHJpbFwiKTtcblxuY29uc3QgTG9nb3V0QnV0dG9uID0ge1xuXHR2aWV3OiAoeyBhdHRycyB9KSA9PlxuXHRcdDxkaXYgb25jbGljaz17YXR0cnMuYWN0aW9ufSBjbGFzcz1cIm1vdXNlLXBvaW50ZXIgbG9nb3V0LWJ1dHRvblwiPlxuXHRcdFx0PGkgY2xhc3M9XCJmYXMgZmEtc2lnbi1vdXQtYWx0IGxvZ291dC1idXR0b24tY29sb3JcIi8+XG5cdFx0PC9kaXY+XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2dvdXRCdXR0b247IiwiLy8gTmF2QnV0dG9uLmpzeFxuXG5jb25zdCBtID0gcmVxdWlyZShcIm1pdGhyaWxcIik7XG5cbmNvbnN0IE5hdkJ1dHRvbiA9IHtcblx0dmlldzogKHsgYXR0cnMgfSkgPT5cblx0XHQ8YSBjbGFzcz1cIm5hdi1idXR0b25cIiBocmVmPXtgIyEvJHthdHRycy5wYXRofWB9PlxuXHRcdFx0e2F0dHJzLmljb259XG5cdFx0PC9hPlxufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2QnV0dG9uOyIsIi8vIFN0YWdlQmFubmVyLmpzeFxuXG5jb25zdCBtID0gcmVxdWlyZSgnbWl0aHJpbCcpO1xuXG5pbXBvcnQgU3RhZ2VUaXRsZSBmcm9tICcuL1N0YWdlVGl0bGUuanN4JztcbmltcG9ydCBMb2dvdXRCdXR0b24gZnJvbSAnLi9Mb2dvdXRCdXR0b24uanN4JztcblxuY29uc3QgU3RhZ2VCYW5uZXIgPSB7XG5cdHZpZXc6ICh7IGF0dHJzIH0pID0+XG5cdFx0PGRpdiBjbGFzcz1cInN0YWdlLWJhbm5lclwiPlxuXHRcdFx0PFN0YWdlVGl0bGUgdGl0bGU9e2F0dHJzLnRpdGxlfSAvPlxuXHRcdFx0PExvZ291dEJ1dHRvbiBhY3Rpb249e2F0dHJzLmFjdGlvbn0gLz5cblx0XHQ8L2Rpdj5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0YWdlQmFubmVyOyIsIi8vIFN0YWdlVGl0bGUuanN4XG5cbmNvbnN0IG0gPSByZXF1aXJlKFwibWl0aHJpbFwiKTtcblxuY29uc3QgU3RhZ2VUaXRsZSA9IHtcblx0dmlldzogKHsgYXR0cnMgfSkgPT5cblx0XHQ8ZGl2IGNsYXNzPVwic3RhZ2UtdGl0bGVcIj57YXR0cnMudGl0bGV9PC9kaXY+XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdGFnZVRpdGxlOyIsImNvbnN0IG0gPSByZXF1aXJlKFwibWl0aHJpbFwiKTtcblxuY29uc3QgVUlCdXR0b24gPSB7XG4gIHZpZXc6ICh7IGF0dHJzIH0pID0+XG4gICAgPGRpdiBvbmNsaWNrPXthdHRycy5hY3Rpb259IGNsYXNzPVwidWktYnV0dG9uIHVpLWJ1dHRvbi1zdWNjZXNzXCI+XG4gICAgICA8c3BhbiBjbGFzcz1cInVpLWJ1dHRvbi1zcGFuXCI+e2F0dHJzLmJ1dHRvbk5hbWV9PC9zcGFuPlxuICAgIDwvZGl2PlxufTtcblxuZXhwb3J0IGRlZmF1bHQgVUlCdXR0b247IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vaW5kZXguY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2luZGV4LmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vaW5kZXguY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gaW5kZXguanN4XG5cbmNvbnN0IG0gPSByZXF1aXJlKFwibWl0aHJpbFwiKTtcbmNvbnN0IHJvb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcblxuLy8gU3R5bGVzXG5pbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xuXG5pbXBvcnQgQXBwIGZyb20gJy4vY29tcG9uZW50cy9sYXlvdXQvQXBwLmpzeCc7XG5cbm0ucmVuZGVyKHJvb3QsIDxBcHAgLz4pO1xuIiwiY29uc3QgbSA9IHJlcXVpcmUoXCJtaXRocmlsXCIpO1xuXG5pbXBvcnQgYXV0aDAgZnJvbSBcImF1dGgwLWpzXCI7XG4vLyBpbXBvcnQgQVVUSDBfREFUQSBmcm9tIFwiLi9hdXRoMC12YXJpYWJsZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0aCB7XG4gIGF1dGgwID0gbmV3IGF1dGgwLldlYkF1dGgoe1xuICAgIGRvbWFpbjogcHJvY2Vzcy5lbnYuQTBfRE9NQUlOIHx8IEFVVEgwX0RBVEEuRE9NQUlOLFxuICAgIGNsaWVudElEOiBwcm9jZXNzLmVudi5BMF9DTElFTlRfSUQgfHwgQVVUSDBfREFUQS5DTElFTlRJRCxcbiAgICByZWRpcmVjdFVyaTogcHJvY2Vzcy5lbnYuQVVUSDBfQ0FMTEJBQ0tfVVJMIHx8IEFVVEgwX0RBVEEuQ0FMTEJBQ0tVUkwsXG4gICAgYXVkaWVuY2U6IHByb2Nlc3MuZW52LkEwX0FVRElFTkNFIHx8IEFVVEgwX0RBVEEuQVVESUVOQ0UsXG4gICAgcmVzcG9uc2VUeXBlOiBcInRva2VuIGlkX3Rva2VuXCIsXG4gICAgc2NvcGU6IFwib3BlbmlkIHByb2ZpbGUgZW1haWxcIlxuICB9KTtcblxuICBsb2dpbigpIHtcbiAgICB0aGlzLmF1dGgwLmF1dGhvcml6ZSgpO1xuICB9XG5cbiAgaGFuZGxlQXV0aGVudGljYXRpb24oKSB7XG4gICAgdGhpcy5hdXRoMC5wYXJzZUhhc2goKGVyciwgYXV0aFJlc3VsdCkgPT4ge1xuICAgICAgaWYgKGF1dGhSZXN1bHQgJiYgYXV0aFJlc3VsdC5hY2Nlc3NUb2tlbiAmJiBhdXRoUmVzdWx0LmlkVG9rZW4pIHtcbiAgICAgICAgdGhpcy5zZXRTZXNzaW9uKGF1dGhSZXN1bHQpO1xuICAgICAgICBtLnJvdXRlLnNldChcIi9jb25mZXJlbmNlc1wiKTtcbiAgICAgIH0gZWxzZSBpZiAoZXJyKSB7XG4gICAgICAgIG0ucm91dGUuc2V0KFwiL2F1dGhcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzZXRTZXNzaW9uKGF1dGhSZXN1bHQpIHtcbiAgICAvLyBTZXQgdGhlIHRpbWUgdGhhdCB0aGUgQWNjZXNzIFRva2VuIHdpbGwgZXhwaXJlIGF0XG4gICAgbGV0IGV4cGlyZXNBdCA9IEpTT04uc3RyaW5naWZ5KFxuICAgICAgYXV0aFJlc3VsdC5leHBpcmVzSW4gKiAxMDAwICsgbmV3IERhdGUoKS5nZXRUaW1lKClcbiAgICApO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYWNjZXNzX3Rva2VuXCIsIGF1dGhSZXN1bHQuYWNjZXNzVG9rZW4pO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiaWRfdG9rZW5cIiwgYXV0aFJlc3VsdC5pZFRva2VuKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImV4cGlyZXNfYXRcIiwgZXhwaXJlc0F0KTtcbiAgICAvLyBuYXZpZ2F0ZSB0byB0aGUgaG9tZSByb3V0ZVxuICAgIG0ucm91dGUuc2V0KFwiL2NvbmZlcmVuY2VzXCIpO1xuICB9XG5cbiAgbG9nb3V0KCkge1xuICAgIC8vIENsZWFyIEFjY2VzcyBUb2tlbiBhbmQgSUQgVG9rZW4gZnJvbSBsb2NhbCBzdG9yYWdlXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJhY2Nlc3NfdG9rZW5cIik7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJpZF90b2tlblwiKTtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImV4cGlyZXNfYXRcIik7XG4gICAgLy8gbmF2aWdhdGUgdG8gdGhlIGRlZmF1bHQgcm91dGVcbiAgICBtLnJvdXRlLnNldChcIi9hdXRoXCIpO1xuICB9XG5cbiAgaXNBdXRoZW50aWNhdGVkKCkge1xuICAgIC8vIENoZWNrIHdoZXRoZXIgdGhlIGN1cnJlbnQgdGltZSBpcyBwYXN0IHRoZVxuICAgIC8vIEFjY2VzcyBUb2tlbidzIGV4cGlyeSB0aW1lXG4gICAgbGV0IGV4cGlyZXNBdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJleHBpcmVzX2F0XCIpKTtcbiAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCkgPCBleHBpcmVzQXQ7XG4gIH1cbn0iLCIvLyBkYXRhLmpzXG5cbmNvbnN0IENPTkZFUkVOQ0VTID0gW1xuXHR7XG5cdFx0bmFtZTogXCJNeVNRTCBUdXRvcmlhbFwiLFxuXHRcdGxvY2F0aW9uOiBcIkJyb29rbHluLCBOWVwiLFxuXHRcdGRhdGU6IFwiMDYvMDcvMjAxOVwiLFxuXHRcdGZhdm9yaXRlOiBmYWxzZSxcblx0XHRDRlA6IGZhbHNlLFxuXHRcdENGUERhdGU6IFwiXCIsXG5cdFx0Q0ZQQ29tcGxldGVkOiBmYWxzZVxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCJWdWUuanMgMyBMYXVuY2hcIixcblx0XHRsb2NhdGlvbjogXCJTYW4gRnJhbmNpc2NvLCBDQVwiLFxuXHRcdGRhdGU6IFwiMDcvMTgvMjAxOVwiLFxuXHRcdGZhdm9yaXRlOiB0cnVlLFxuXHRcdENGUDogZmFsc2UsXG5cdFx0Q0ZQRGF0ZTogXCJcIixcblx0XHRDRlBDb21wbGV0ZWQ6IGZhbHNlXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIkFuZ3VsYXIgOCBMYXVuY2hcIixcblx0XHRsb2NhdGlvbjogXCJTYW4gRnJhbmNpc2NvLCBDQVwiLFxuXHRcdGRhdGU6IFwiMDkvMjUvMjAxOVwiLFxuXHRcdGZhdm9yaXRlOiB0cnVlLFxuXHRcdENGUDogdHJ1ZSxcblx0XHRDRlBEYXRlOiBcIjA5LzIzLzIwMTlcIixcblx0XHRDRlBDb21wbGV0ZWQ6IGZhbHNlXG4gIH0sXG5dO1xuXG5leHBvcnRzLmdldE1vY2tEYXRhID0gKCkgPT4gQ09ORkVSRU5DRVM7XG5leHBvcnRzLnNldE1vY2tEYXRhID0gKGNvbmZlcmVuY2UpID0+IENPTkZFUkVOQ0VTLnB1c2goY29uZmVyZW5jZSk7Il0sInNvdXJjZVJvb3QiOiIifQ==