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


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _auth0Js = __webpack_require__(/*! auth0-js */ "./node_modules/auth0-js/dist/auth0.min.esm.js");

var _auth0Js2 = _interopRequireDefault(_auth0Js);

var _auth0Variables = __webpack_require__(/*! ./auth0-variables */ "./src/services/auth0-variables.js");

var _auth0Variables2 = _interopRequireDefault(_auth0Variables);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var m = __webpack_require__(/*! mithril */ "./node_modules/mithril/mithril.js");

var Auth = function () {
  function Auth() {
    _classCallCheck(this, Auth);

    this.auth0 = new _auth0Js2.default.WebAuth({
      domain: _auth0Variables2.default.DOMAIN,
      clientID: _auth0Variables2.default.CLIENTID,
      redirectUri: _auth0Variables2.default.CALLBACKURL,
      audience: _auth0Variables2.default.AUDIENCE,
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

/***/ }),

/***/ "./src/services/auth0-variables.js":
/*!*****************************************!*\
  !*** ./src/services/auth0-variables.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var AUTH0 = {
  CLIENTID: "LZXOYccCrztk1KK99z1DZ7AY45SEyYMD",
  DOMAIN: "jsnspr.auth0.com",
  CALLBACKURL: "http://localhost:8080/#!/conferences",
  AUDIENCE: "https://jsnspr.auth0.com/userinfo"
};

exports.default = AUTH0;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F1dGgwLWpzL2Rpc3QvYXV0aDAubWluLmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWl0aHJpbC9taXRocmlsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NldGltbWVkaWF0ZS9zZXRJbW1lZGlhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RpbWVycy1icm93c2VyaWZ5L21haW4uanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9FbnRyeUZvcm0uanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NhcmRzL0NGUENhcmQuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NhcmRzL0NvbmZlcmVuY2VDYXJkLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYXJkcy9Db25mZXJlbmNlRmllbGQuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NhcmRzL0NvdW50RG93bkZpZWxkLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvQXBwLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvQ2FyZENvbnRhaW5lci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0L01haW5TdGFnZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0L05hdkJhci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdWkvTG9nb3V0QnV0dG9uLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy91aS9OYXZCdXR0b24uanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3VpL1N0YWdlQmFubmVyLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy91aS9TdGFnZVRpdGxlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy91aS9VSUJ1dHRvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmNzcz9kOGMzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2F1dGguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2F1dGgwLXZhcmlhYmxlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvZGF0YS5qcyJdLCJuYW1lcyI6WyJlbnRyeUZvcm1IYW5kbGVyIiwiZm9ybURPTSIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJuZXdFbnRyeSIsIkFycmF5IiwiZnJvbSIsImVudHJpZXMiLCJtYXAiLCJlbnRyeVZhbHVlIiwia2V5IiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwiQ0ZQIiwicmVzZXQiLCJtIiwicmVxdWlyZSIsIkVudHJ5Rm9ybSIsImRhdGEiLCJ2aWV3Iiwidm5vZGUiLCJzdGF0ZSIsImRvbSIsIkNGUENhcmQiLCJhdHRycyIsImNvbmZlcmVuY2UiLCJuYW1lIiwibG9jYXRpb24iLCJDRlBEYXRlIiwiQ29uZmVyZW5jZUNhcmQiLCJkYXRlIiwiQ29uZmVyZW5jZUZpZWxkIiwiZmllbGRWYWx1ZSIsIkNvdW50RG93bkZpZWxkIiwiZGVhZGxpbmUiLCJjb3VudERvd25EYXRlIiwiRGF0ZSIsImdldFRpbWUiLCJ0aW1lTGVmdCIsImdldFRpbWVMZWZ0IiwiZGlzdGFuY2UiLCJub3ciLCJkYXlzIiwiTWF0aCIsImZsb29yIiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsImNvdW50RG93bkludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJyZWRyYXciLCJjbGVhckludGVydmFsIiwiY291bnRkb3duIiwiYXV0aCIsIkF1dGgiLCJDT05GRVJFTkNFUyIsIkNvbmZlcmVuY2VWaWV3IiwiY29uZmVyZW5jZXMiLCJsb2dvdXQiLCJDRlBWaWV3IiwiZmlsdGVyIiwiY29uZmVyZW5jZVdpdGhDRlAiLCJGb3JtVmlldyIsIldlbGNvbWVWaWV3IiwibG9naW4iLCJBcHAiLCJvbmNyZWF0ZSIsIm1haW5TdGFnZSIsInF1ZXJ5U2VsZWN0b3IiLCJyb3V0ZSIsImNoaWxkcmVuIiwiQ2FyZENvbnRhaW5lciIsIk1haW5TdGFnZSIsIk5hdkJhciIsIkxvZ291dEJ1dHRvbiIsImFjdGlvbiIsIk5hdkJ1dHRvbiIsInBhdGgiLCJpY29uIiwiU3RhZ2VCYW5uZXIiLCJ0aXRsZSIsIlN0YWdlVGl0bGUiLCJVSUJ1dHRvbiIsImJ1dHRvbk5hbWUiLCJyb290IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJlbmRlciIsImF1dGgwIiwiV2ViQXV0aCIsImRvbWFpbiIsIkFVVEgwX0RBVEEiLCJET01BSU4iLCJjbGllbnRJRCIsIkNMSUVOVElEIiwicmVkaXJlY3RVcmkiLCJDQUxMQkFDS1VSTCIsImF1ZGllbmNlIiwiQVVESUVOQ0UiLCJyZXNwb25zZVR5cGUiLCJzY29wZSIsImF1dGhvcml6ZSIsInBhcnNlSGFzaCIsImVyciIsImF1dGhSZXN1bHQiLCJhY2Nlc3NUb2tlbiIsImlkVG9rZW4iLCJzZXRTZXNzaW9uIiwic2V0IiwiZXhwaXJlc0F0IiwiSlNPTiIsInN0cmluZ2lmeSIsImV4cGlyZXNJbiIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJyZW1vdmVJdGVtIiwicGFyc2UiLCJnZXRJdGVtIiwiQVVUSDAiLCJmYXZvcml0ZSIsIkNGUENvbXBsZXRlZCIsImV4cG9ydHMiLCJnZXRNb2NrRGF0YSIsInNldE1vY2tEYXRhIiwicHVzaCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdIQUF3SCx5Q0FBeUMsa0JBQWtCLFdBQVcsZ0NBQWdDLGtEQUFrRCx1QkFBdUIsNkNBQTZDLGtCQUFrQiwwQkFBMEIsbUJBQW1CLDBEQUEwRCwyQkFBMkIsOEJBQThCLHVKQUF1SixZQUFZLGtCQUFrQixLQUFLLDBCQUEwQiwrRkFBK0YsMkxBQTJMLHlGQUF5RixpRUFBaUUsdUVBQXVFLHlFQUF5RSxzREFBc0QsNERBQTRELHFCQUFxQixNQUFNLGlFQUFpRSxhQUFhLEdBQUcsK0NBQStDLGdFQUFnRSxLQUFLLGdCQUFnQiwyQ0FB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLG1CQUFtQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsZ0JBQWdCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEMsMkRBQTJEO0FBQzNELHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixxQkFBcUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2QsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLG1CQUFtQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsU0FBUztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0SEFBNEg7QUFDNUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLG1CQUFtQixxQkFBcUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsa0JBQWtCO0FBQ25DO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFVBQVU7Ozs7Ozs7Ozs7OztBQ3ZMdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGlCQUFpQjtBQUN0QztBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMENBQTBDLHNCQUFzQixFQUFFO0FBQ2xFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDekxEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUEsY0FBYyxtQkFBTyxDQUFDLHVEQUFROztBQUU5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLG1CQUFtQjtBQUNwQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDOztBQUVBO0FBQ0EsbUJBQW1CLDJCQUEyQjs7QUFFOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixtQkFBbUI7QUFDbkM7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQiwyQkFBMkI7QUFDNUM7QUFDQTs7QUFFQSxRQUFRLHVCQUF1QjtBQUMvQjtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBLGlCQUFpQix1QkFBdUI7QUFDeEM7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZ0IsaUJBQWlCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjOztBQUVkLGtEQUFrRCxzQkFBc0I7QUFDeEU7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7O0FBRUEsNkJBQTZCLG1CQUFtQjs7QUFFaEQ7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3RYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FB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QUFqQixDQUFoQjtBQUFBLENBQXRCLEMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanN4XCIpO1xuIiwiLyoqXG4gKiBhdXRoMC1qcyB2OS4xMC4yXG4gKiBBdXRob3I6IEF1dGgwXG4gKiBEYXRlOiAyMDE5LTA0LTE1XG4gKiBMaWNlbnNlOiBNSVRcbiAqL1xuXG52YXIgY29tbW9uanNHbG9iYWw9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz93aW5kb3c6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbD9nbG9iYWw6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHNlbGY/c2VsZjp7fTtmdW5jdGlvbiBjcmVhdGVDb21tb25qc01vZHVsZShmbixtb2R1bGUpe3JldHVybiBmbihtb2R1bGU9e2V4cG9ydHM6e319LG1vZHVsZS5leHBvcnRzKSxtb2R1bGUuZXhwb3J0c312YXIgdXJsSm9pbj1jcmVhdGVDb21tb25qc01vZHVsZShmdW5jdGlvbihtb2R1bGUpe3ZhciBjb250ZXh0LGRlZmluaXRpb247Y29udGV4dD1jb21tb25qc0dsb2JhbCxkZWZpbml0aW9uPWZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKHN0ckFycmF5KXt2YXIgcmVzdWx0QXJyYXk9W107aWYoc3RyQXJyYXlbMF0ubWF0Y2goL15bXlxcLzpdKzpcXC8qJC8pJiZzdHJBcnJheS5sZW5ndGg+MSl7dmFyIGZpcnN0PXN0ckFycmF5LnNoaWZ0KCk7c3RyQXJyYXlbMF09Zmlyc3Qrc3RyQXJyYXlbMF19c3RyQXJyYXlbMF0ubWF0Y2goL15maWxlOlxcL1xcL1xcLy8pP3N0ckFycmF5WzBdPXN0ckFycmF5WzBdLnJlcGxhY2UoL14oW15cXC86XSspOlxcLyovLFwiJDE6Ly8vXCIpOnN0ckFycmF5WzBdPXN0ckFycmF5WzBdLnJlcGxhY2UoL14oW15cXC86XSspOlxcLyovLFwiJDE6Ly9cIik7Zm9yKHZhciBpPTA7aTxzdHJBcnJheS5sZW5ndGg7aSsrKXt2YXIgY29tcG9uZW50PXN0ckFycmF5W2ldO2lmKFwic3RyaW5nXCIhPXR5cGVvZiBjb21wb25lbnQpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVybCBtdXN0IGJlIGEgc3RyaW5nLiBSZWNlaXZlZCBcIitjb21wb25lbnQpO1wiXCIhPT1jb21wb25lbnQmJihpPjAmJihjb21wb25lbnQ9Y29tcG9uZW50LnJlcGxhY2UoL15bXFwvXSsvLFwiXCIpKSxjb21wb25lbnQ9aTxzdHJBcnJheS5sZW5ndGgtMT9jb21wb25lbnQucmVwbGFjZSgvW1xcL10rJC8sXCJcIik6Y29tcG9uZW50LnJlcGxhY2UoL1tcXC9dKyQvLFwiL1wiKSxyZXN1bHRBcnJheS5wdXNoKGNvbXBvbmVudCkpfXZhciBzdHI9cmVzdWx0QXJyYXkuam9pbihcIi9cIikscGFydHM9KHN0cj1zdHIucmVwbGFjZSgvXFwvKFxcP3wmfCNbXiFdKS9nLFwiJDFcIikpLnNwbGl0KFwiP1wiKTtyZXR1cm4gc3RyPXBhcnRzLnNoaWZ0KCkrKHBhcnRzLmxlbmd0aD4wP1wiP1wiOlwiXCIpK3BhcnRzLmpvaW4oXCImXCIpfShcIm9iamVjdFwiPT10eXBlb2YgYXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTpbXS5zbGljZS5jYWxsKGFyZ3VtZW50cykpfX0sbW9kdWxlLmV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9ZGVmaW5pdGlvbigpOmNvbnRleHQudXJsam9pbj1kZWZpbml0aW9uKCl9KSx1dGlscz1jcmVhdGVDb21tb25qc01vZHVsZShmdW5jdGlvbihtb2R1bGUsZXhwb3J0cyl7dmFyIGhhcz1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LGhleFRhYmxlPWZ1bmN0aW9uKCl7Zm9yKHZhciBhcnJheT1bXSxpPTA7aTwyNTY7KytpKWFycmF5LnB1c2goXCIlXCIrKChpPDE2P1wiMFwiOlwiXCIpK2kudG9TdHJpbmcoMTYpKS50b1VwcGVyQ2FzZSgpKTtyZXR1cm4gYXJyYXl9KCk7ZXhwb3J0cy5hcnJheVRvT2JqZWN0PWZ1bmN0aW9uKHNvdXJjZSxvcHRpb25zKXtmb3IodmFyIG9iaj1vcHRpb25zJiZvcHRpb25zLnBsYWluT2JqZWN0cz9PYmplY3QuY3JlYXRlKG51bGwpOnt9LGk9MDtpPHNvdXJjZS5sZW5ndGg7KytpKXZvaWQgMCE9PXNvdXJjZVtpXSYmKG9ialtpXT1zb3VyY2VbaV0pO3JldHVybiBvYmp9LGV4cG9ydHMubWVyZ2U9ZnVuY3Rpb24odGFyZ2V0LHNvdXJjZSxvcHRpb25zKXtpZighc291cmNlKXJldHVybiB0YXJnZXQ7aWYoXCJvYmplY3RcIiE9dHlwZW9mIHNvdXJjZSl7aWYoQXJyYXkuaXNBcnJheSh0YXJnZXQpKXRhcmdldC5wdXNoKHNvdXJjZSk7ZWxzZXtpZihcIm9iamVjdFwiIT10eXBlb2YgdGFyZ2V0KXJldHVyblt0YXJnZXQsc291cmNlXTsob3B0aW9ucy5wbGFpbk9iamVjdHN8fG9wdGlvbnMuYWxsb3dQcm90b3R5cGVzfHwhaGFzLmNhbGwoT2JqZWN0LnByb3RvdHlwZSxzb3VyY2UpKSYmKHRhcmdldFtzb3VyY2VdPSEwKX1yZXR1cm4gdGFyZ2V0fWlmKFwib2JqZWN0XCIhPXR5cGVvZiB0YXJnZXQpcmV0dXJuW3RhcmdldF0uY29uY2F0KHNvdXJjZSk7dmFyIG1lcmdlVGFyZ2V0PXRhcmdldDtyZXR1cm4gQXJyYXkuaXNBcnJheSh0YXJnZXQpJiYhQXJyYXkuaXNBcnJheShzb3VyY2UpJiYobWVyZ2VUYXJnZXQ9ZXhwb3J0cy5hcnJheVRvT2JqZWN0KHRhcmdldCxvcHRpb25zKSksQXJyYXkuaXNBcnJheSh0YXJnZXQpJiZBcnJheS5pc0FycmF5KHNvdXJjZSk/KHNvdXJjZS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0saSl7aGFzLmNhbGwodGFyZ2V0LGkpP3RhcmdldFtpXSYmXCJvYmplY3RcIj09dHlwZW9mIHRhcmdldFtpXT90YXJnZXRbaV09ZXhwb3J0cy5tZXJnZSh0YXJnZXRbaV0saXRlbSxvcHRpb25zKTp0YXJnZXQucHVzaChpdGVtKTp0YXJnZXRbaV09aXRlbX0pLHRhcmdldCk6T2JqZWN0LmtleXMoc291cmNlKS5yZWR1Y2UoZnVuY3Rpb24oYWNjLGtleSl7dmFyIHZhbHVlPXNvdXJjZVtrZXldO3JldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYWNjLGtleSk/YWNjW2tleV09ZXhwb3J0cy5tZXJnZShhY2Nba2V5XSx2YWx1ZSxvcHRpb25zKTphY2Nba2V5XT12YWx1ZSxhY2N9LG1lcmdlVGFyZ2V0KX0sZXhwb3J0cy5kZWNvZGU9ZnVuY3Rpb24oc3RyKXt0cnl7cmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChzdHIucmVwbGFjZSgvXFwrL2csXCIgXCIpKX1jYXRjaChlKXtyZXR1cm4gc3RyfX0sZXhwb3J0cy5lbmNvZGU9ZnVuY3Rpb24oc3RyKXtpZigwPT09c3RyLmxlbmd0aClyZXR1cm4gc3RyO2Zvcih2YXIgc3RyaW5nPVwic3RyaW5nXCI9PXR5cGVvZiBzdHI/c3RyOlN0cmluZyhzdHIpLG91dD1cIlwiLGk9MDtpPHN0cmluZy5sZW5ndGg7KytpKXt2YXIgYz1zdHJpbmcuY2hhckNvZGVBdChpKTs0NT09PWN8fDQ2PT09Y3x8OTU9PT1jfHwxMjY9PT1jfHxjPj00OCYmYzw9NTd8fGM+PTY1JiZjPD05MHx8Yz49OTcmJmM8PTEyMj9vdXQrPXN0cmluZy5jaGFyQXQoaSk6YzwxMjg/b3V0Kz1oZXhUYWJsZVtjXTpjPDIwNDg/b3V0Kz1oZXhUYWJsZVsxOTJ8Yz4+Nl0raGV4VGFibGVbMTI4fDYzJmNdOmM8NTUyOTZ8fGM+PTU3MzQ0P291dCs9aGV4VGFibGVbMjI0fGM+PjEyXStoZXhUYWJsZVsxMjh8Yz4+NiY2M10raGV4VGFibGVbMTI4fDYzJmNdOihpKz0xLGM9NjU1MzYrKCgxMDIzJmMpPDwxMHwxMDIzJnN0cmluZy5jaGFyQ29kZUF0KGkpKSxvdXQrPWhleFRhYmxlWzI0MHxjPj4xOF0raGV4VGFibGVbMTI4fGM+PjEyJjYzXStoZXhUYWJsZVsxMjh8Yz4+NiY2M10raGV4VGFibGVbMTI4fDYzJmNdKX1yZXR1cm4gb3V0fSxleHBvcnRzLmNvbXBhY3Q9ZnVuY3Rpb24ob2JqLHJlZmVyZW5jZXMpe2lmKFwib2JqZWN0XCIhPXR5cGVvZiBvYmp8fG51bGw9PT1vYmopcmV0dXJuIG9iajt2YXIgcmVmcz1yZWZlcmVuY2VzfHxbXSxsb29rdXA9cmVmcy5pbmRleE9mKG9iaik7aWYoLTEhPT1sb29rdXApcmV0dXJuIHJlZnNbbG9va3VwXTtpZihyZWZzLnB1c2gob2JqKSxBcnJheS5pc0FycmF5KG9iaikpe2Zvcih2YXIgY29tcGFjdGVkPVtdLGk9MDtpPG9iai5sZW5ndGg7KytpKW9ialtpXSYmXCJvYmplY3RcIj09dHlwZW9mIG9ialtpXT9jb21wYWN0ZWQucHVzaChleHBvcnRzLmNvbXBhY3Qob2JqW2ldLHJlZnMpKTp2b2lkIDAhPT1vYmpbaV0mJmNvbXBhY3RlZC5wdXNoKG9ialtpXSk7cmV0dXJuIGNvbXBhY3RlZH1yZXR1cm4gT2JqZWN0LmtleXMob2JqKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSl7b2JqW2tleV09ZXhwb3J0cy5jb21wYWN0KG9ialtrZXldLHJlZnMpfSksb2JqfSxleHBvcnRzLmlzUmVnRXhwPWZ1bmN0aW9uKG9iail7cmV0dXJuXCJbb2JqZWN0IFJlZ0V4cF1cIj09PU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopfSxleHBvcnRzLmlzQnVmZmVyPWZ1bmN0aW9uKG9iail7cmV0dXJuIG51bGwhPW9iaiYmISEob2JqLmNvbnN0cnVjdG9yJiZvYmouY29uc3RydWN0b3IuaXNCdWZmZXImJm9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlcihvYmopKX19KSx1dGlsc18xPXV0aWxzLmFycmF5VG9PYmplY3QsdXRpbHNfMj11dGlscy5tZXJnZSx1dGlsc18zPXV0aWxzLmRlY29kZSx1dGlsc180PXV0aWxzLmVuY29kZSx1dGlsc181PXV0aWxzLmNvbXBhY3QsdXRpbHNfNj11dGlscy5pc1JlZ0V4cCx1dGlsc183PXV0aWxzLmlzQnVmZmVyLHJlcGxhY2U9U3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlLHBlcmNlbnRUd2VudGllcz0vJTIwL2csZm9ybWF0cz17ZGVmYXVsdDpcIlJGQzM5ODZcIixmb3JtYXR0ZXJzOntSRkMxNzM4OmZ1bmN0aW9uKHZhbHVlKXtyZXR1cm4gcmVwbGFjZS5jYWxsKHZhbHVlLHBlcmNlbnRUd2VudGllcyxcIitcIil9LFJGQzM5ODY6ZnVuY3Rpb24odmFsdWUpe3JldHVybiB2YWx1ZX19LFJGQzE3Mzg6XCJSRkMxNzM4XCIsUkZDMzk4NjpcIlJGQzM5ODZcIn0sYXJyYXlQcmVmaXhHZW5lcmF0b3JzPXticmFja2V0czpmdW5jdGlvbihwcmVmaXgpe3JldHVybiBwcmVmaXgrXCJbXVwifSxpbmRpY2VzOmZ1bmN0aW9uKHByZWZpeCxrZXkpe3JldHVybiBwcmVmaXgrXCJbXCIra2V5K1wiXVwifSxyZXBlYXQ6ZnVuY3Rpb24ocHJlZml4KXtyZXR1cm4gcHJlZml4fX0sdG9JU089RGF0ZS5wcm90b3R5cGUudG9JU09TdHJpbmcsZGVmYXVsdHM9e2RlbGltaXRlcjpcIiZcIixlbmNvZGU6ITAsZW5jb2Rlcjp1dGlscy5lbmNvZGUsZW5jb2RlVmFsdWVzT25seTohMSxzZXJpYWxpemVEYXRlOmZ1bmN0aW9uKGRhdGUpe3JldHVybiB0b0lTTy5jYWxsKGRhdGUpfSxza2lwTnVsbHM6ITEsc3RyaWN0TnVsbEhhbmRsaW5nOiExfSxzdHJpbmdpZnk9ZnVuY3Rpb24gc3RyaW5naWZ5KG9iamVjdCxwcmVmaXgsZ2VuZXJhdGVBcnJheVByZWZpeCxzdHJpY3ROdWxsSGFuZGxpbmcsc2tpcE51bGxzLGVuY29kZXIsZmlsdGVyLHNvcnQsYWxsb3dEb3RzLHNlcmlhbGl6ZURhdGUsZm9ybWF0dGVyLGVuY29kZVZhbHVlc09ubHkpe3ZhciBvYmo9b2JqZWN0O2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGZpbHRlcilvYmo9ZmlsdGVyKHByZWZpeCxvYmopO2Vsc2UgaWYob2JqIGluc3RhbmNlb2YgRGF0ZSlvYmo9c2VyaWFsaXplRGF0ZShvYmopO2Vsc2UgaWYobnVsbD09PW9iail7aWYoc3RyaWN0TnVsbEhhbmRsaW5nKXJldHVybiBlbmNvZGVyJiYhZW5jb2RlVmFsdWVzT25seT9lbmNvZGVyKHByZWZpeCk6cHJlZml4O29iaj1cIlwifWlmKFwic3RyaW5nXCI9PXR5cGVvZiBvYmp8fFwibnVtYmVyXCI9PXR5cGVvZiBvYmp8fFwiYm9vbGVhblwiPT10eXBlb2Ygb2JqfHx1dGlscy5pc0J1ZmZlcihvYmopKXJldHVybiBlbmNvZGVyP1tmb3JtYXR0ZXIoZW5jb2RlVmFsdWVzT25seT9wcmVmaXg6ZW5jb2RlcihwcmVmaXgpKStcIj1cIitmb3JtYXR0ZXIoZW5jb2RlcihvYmopKV06W2Zvcm1hdHRlcihwcmVmaXgpK1wiPVwiK2Zvcm1hdHRlcihTdHJpbmcob2JqKSldO3ZhciBvYmpLZXlzLHZhbHVlcz1bXTtpZih2b2lkIDA9PT1vYmopcmV0dXJuIHZhbHVlcztpZihBcnJheS5pc0FycmF5KGZpbHRlcikpb2JqS2V5cz1maWx0ZXI7ZWxzZXt2YXIga2V5cz1PYmplY3Qua2V5cyhvYmopO29iaktleXM9c29ydD9rZXlzLnNvcnQoc29ydCk6a2V5c31mb3IodmFyIGk9MDtpPG9iaktleXMubGVuZ3RoOysraSl7dmFyIGtleT1vYmpLZXlzW2ldO3NraXBOdWxscyYmbnVsbD09PW9ialtrZXldfHwodmFsdWVzPUFycmF5LmlzQXJyYXkob2JqKT92YWx1ZXMuY29uY2F0KHN0cmluZ2lmeShvYmpba2V5XSxnZW5lcmF0ZUFycmF5UHJlZml4KHByZWZpeCxrZXkpLGdlbmVyYXRlQXJyYXlQcmVmaXgsc3RyaWN0TnVsbEhhbmRsaW5nLHNraXBOdWxscyxlbmNvZGVyLGZpbHRlcixzb3J0LGFsbG93RG90cyxzZXJpYWxpemVEYXRlLGZvcm1hdHRlcixlbmNvZGVWYWx1ZXNPbmx5KSk6dmFsdWVzLmNvbmNhdChzdHJpbmdpZnkob2JqW2tleV0scHJlZml4KyhhbGxvd0RvdHM/XCIuXCIra2V5OlwiW1wiK2tleStcIl1cIiksZ2VuZXJhdGVBcnJheVByZWZpeCxzdHJpY3ROdWxsSGFuZGxpbmcsc2tpcE51bGxzLGVuY29kZXIsZmlsdGVyLHNvcnQsYWxsb3dEb3RzLHNlcmlhbGl6ZURhdGUsZm9ybWF0dGVyLGVuY29kZVZhbHVlc09ubHkpKSl9cmV0dXJuIHZhbHVlc30sc3RyaW5naWZ5XzE9ZnVuY3Rpb24ob2JqZWN0LG9wdHMpe3ZhciBvYmo9b2JqZWN0LG9wdGlvbnM9b3B0c3x8e307aWYobnVsbCE9PW9wdGlvbnMuZW5jb2RlciYmdm9pZCAwIT09b3B0aW9ucy5lbmNvZGVyJiZcImZ1bmN0aW9uXCIhPXR5cGVvZiBvcHRpb25zLmVuY29kZXIpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkVuY29kZXIgaGFzIHRvIGJlIGEgZnVuY3Rpb24uXCIpO3ZhciBkZWxpbWl0ZXI9dm9pZCAwPT09b3B0aW9ucy5kZWxpbWl0ZXI/ZGVmYXVsdHMuZGVsaW1pdGVyOm9wdGlvbnMuZGVsaW1pdGVyLHN0cmljdE51bGxIYW5kbGluZz1cImJvb2xlYW5cIj09dHlwZW9mIG9wdGlvbnMuc3RyaWN0TnVsbEhhbmRsaW5nP29wdGlvbnMuc3RyaWN0TnVsbEhhbmRsaW5nOmRlZmF1bHRzLnN0cmljdE51bGxIYW5kbGluZyxza2lwTnVsbHM9XCJib29sZWFuXCI9PXR5cGVvZiBvcHRpb25zLnNraXBOdWxscz9vcHRpb25zLnNraXBOdWxsczpkZWZhdWx0cy5za2lwTnVsbHMsZW5jb2RlPVwiYm9vbGVhblwiPT10eXBlb2Ygb3B0aW9ucy5lbmNvZGU/b3B0aW9ucy5lbmNvZGU6ZGVmYXVsdHMuZW5jb2RlLGVuY29kZXI9XCJmdW5jdGlvblwiPT10eXBlb2Ygb3B0aW9ucy5lbmNvZGVyP29wdGlvbnMuZW5jb2RlcjpkZWZhdWx0cy5lbmNvZGVyLHNvcnQ9XCJmdW5jdGlvblwiPT10eXBlb2Ygb3B0aW9ucy5zb3J0P29wdGlvbnMuc29ydDpudWxsLGFsbG93RG90cz12b2lkIDAhPT1vcHRpb25zLmFsbG93RG90cyYmb3B0aW9ucy5hbGxvd0RvdHMsc2VyaWFsaXplRGF0ZT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBvcHRpb25zLnNlcmlhbGl6ZURhdGU/b3B0aW9ucy5zZXJpYWxpemVEYXRlOmRlZmF1bHRzLnNlcmlhbGl6ZURhdGUsZW5jb2RlVmFsdWVzT25seT1cImJvb2xlYW5cIj09dHlwZW9mIG9wdGlvbnMuZW5jb2RlVmFsdWVzT25seT9vcHRpb25zLmVuY29kZVZhbHVlc09ubHk6ZGVmYXVsdHMuZW5jb2RlVmFsdWVzT25seTtpZih2b2lkIDA9PT1vcHRpb25zLmZvcm1hdClvcHRpb25zLmZvcm1hdD1mb3JtYXRzLmRlZmF1bHQ7ZWxzZSBpZighT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGZvcm1hdHMuZm9ybWF0dGVycyxvcHRpb25zLmZvcm1hdCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVua25vd24gZm9ybWF0IG9wdGlvbiBwcm92aWRlZC5cIik7dmFyIG9iaktleXMsZmlsdGVyLGZvcm1hdHRlcj1mb3JtYXRzLmZvcm1hdHRlcnNbb3B0aW9ucy5mb3JtYXRdO1wiZnVuY3Rpb25cIj09dHlwZW9mIG9wdGlvbnMuZmlsdGVyP29iaj0oZmlsdGVyPW9wdGlvbnMuZmlsdGVyKShcIlwiLG9iaik6QXJyYXkuaXNBcnJheShvcHRpb25zLmZpbHRlcikmJihvYmpLZXlzPWZpbHRlcj1vcHRpb25zLmZpbHRlcik7dmFyIGFycmF5Rm9ybWF0LGtleXM9W107aWYoXCJvYmplY3RcIiE9dHlwZW9mIG9ianx8bnVsbD09PW9iailyZXR1cm5cIlwiO2FycmF5Rm9ybWF0PW9wdGlvbnMuYXJyYXlGb3JtYXQgaW4gYXJyYXlQcmVmaXhHZW5lcmF0b3JzP29wdGlvbnMuYXJyYXlGb3JtYXQ6XCJpbmRpY2VzXCJpbiBvcHRpb25zP29wdGlvbnMuaW5kaWNlcz9cImluZGljZXNcIjpcInJlcGVhdFwiOlwiaW5kaWNlc1wiO3ZhciBnZW5lcmF0ZUFycmF5UHJlZml4PWFycmF5UHJlZml4R2VuZXJhdG9yc1thcnJheUZvcm1hdF07b2JqS2V5c3x8KG9iaktleXM9T2JqZWN0LmtleXMob2JqKSksc29ydCYmb2JqS2V5cy5zb3J0KHNvcnQpO2Zvcih2YXIgaT0wO2k8b2JqS2V5cy5sZW5ndGg7KytpKXt2YXIga2V5PW9iaktleXNbaV07c2tpcE51bGxzJiZudWxsPT09b2JqW2tleV18fChrZXlzPWtleXMuY29uY2F0KHN0cmluZ2lmeShvYmpba2V5XSxrZXksZ2VuZXJhdGVBcnJheVByZWZpeCxzdHJpY3ROdWxsSGFuZGxpbmcsc2tpcE51bGxzLGVuY29kZT9lbmNvZGVyOm51bGwsZmlsdGVyLHNvcnQsYWxsb3dEb3RzLHNlcmlhbGl6ZURhdGUsZm9ybWF0dGVyLGVuY29kZVZhbHVlc09ubHkpKSl9cmV0dXJuIGtleXMuam9pbihkZWxpbWl0ZXIpfSxoYXM9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSxkZWZhdWx0cyQxPXthbGxvd0RvdHM6ITEsYWxsb3dQcm90b3R5cGVzOiExLGFycmF5TGltaXQ6MjAsZGVjb2Rlcjp1dGlscy5kZWNvZGUsZGVsaW1pdGVyOlwiJlwiLGRlcHRoOjUscGFyYW1ldGVyTGltaXQ6MWUzLHBsYWluT2JqZWN0czohMSxzdHJpY3ROdWxsSGFuZGxpbmc6ITF9LHBhcnNlVmFsdWVzPWZ1bmN0aW9uKHN0cixvcHRpb25zKXtmb3IodmFyIG9iaj17fSxwYXJ0cz1zdHIuc3BsaXQob3B0aW9ucy5kZWxpbWl0ZXIsb3B0aW9ucy5wYXJhbWV0ZXJMaW1pdD09PTEvMD92b2lkIDA6b3B0aW9ucy5wYXJhbWV0ZXJMaW1pdCksaT0wO2k8cGFydHMubGVuZ3RoOysraSl7dmFyIGtleSx2YWwscGFydD1wYXJ0c1tpXSxwb3M9LTE9PT1wYXJ0LmluZGV4T2YoXCJdPVwiKT9wYXJ0LmluZGV4T2YoXCI9XCIpOnBhcnQuaW5kZXhPZihcIl09XCIpKzE7LTE9PT1wb3M/KGtleT1vcHRpb25zLmRlY29kZXIocGFydCksdmFsPW9wdGlvbnMuc3RyaWN0TnVsbEhhbmRsaW5nP251bGw6XCJcIik6KGtleT1vcHRpb25zLmRlY29kZXIocGFydC5zbGljZSgwLHBvcykpLHZhbD1vcHRpb25zLmRlY29kZXIocGFydC5zbGljZShwb3MrMSkpKSxoYXMuY2FsbChvYmosa2V5KT9vYmpba2V5XT1bXS5jb25jYXQob2JqW2tleV0pLmNvbmNhdCh2YWwpOm9ialtrZXldPXZhbH1yZXR1cm4gb2JqfSxwYXJzZU9iamVjdD1mdW5jdGlvbihjaGFpbix2YWwsb3B0aW9ucyl7aWYoIWNoYWluLmxlbmd0aClyZXR1cm4gdmFsO3ZhciBvYmoscm9vdD1jaGFpbi5zaGlmdCgpO2lmKFwiW11cIj09PXJvb3Qpb2JqPShvYmo9W10pLmNvbmNhdChwYXJzZU9iamVjdChjaGFpbix2YWwsb3B0aW9ucykpO2Vsc2V7b2JqPW9wdGlvbnMucGxhaW5PYmplY3RzP09iamVjdC5jcmVhdGUobnVsbCk6e307dmFyIGNsZWFuUm9vdD1cIltcIj09PXJvb3QuY2hhckF0KDApJiZcIl1cIj09PXJvb3QuY2hhckF0KHJvb3QubGVuZ3RoLTEpP3Jvb3Quc2xpY2UoMSwtMSk6cm9vdCxpbmRleD1wYXJzZUludChjbGVhblJvb3QsMTApOyFpc05hTihpbmRleCkmJnJvb3QhPT1jbGVhblJvb3QmJlN0cmluZyhpbmRleCk9PT1jbGVhblJvb3QmJmluZGV4Pj0wJiZvcHRpb25zLnBhcnNlQXJyYXlzJiZpbmRleDw9b3B0aW9ucy5hcnJheUxpbWl0PyhvYmo9W10pW2luZGV4XT1wYXJzZU9iamVjdChjaGFpbix2YWwsb3B0aW9ucyk6b2JqW2NsZWFuUm9vdF09cGFyc2VPYmplY3QoY2hhaW4sdmFsLG9wdGlvbnMpfXJldHVybiBvYmp9LHBhcnNlS2V5cz1mdW5jdGlvbihnaXZlbktleSx2YWwsb3B0aW9ucyl7aWYoZ2l2ZW5LZXkpe3ZhciBrZXk9b3B0aW9ucy5hbGxvd0RvdHM/Z2l2ZW5LZXkucmVwbGFjZSgvXFwuKFteLltdKykvZyxcIlskMV1cIik6Z2l2ZW5LZXksY2hpbGQ9LyhcXFtbXltcXF1dKl0pL2csc2VnbWVudD0vKFxcW1teW1xcXV0qXSkvLmV4ZWMoa2V5KSxwYXJlbnQ9c2VnbWVudD9rZXkuc2xpY2UoMCxzZWdtZW50LmluZGV4KTprZXksa2V5cz1bXTtpZihwYXJlbnQpe2lmKCFvcHRpb25zLnBsYWluT2JqZWN0cyYmaGFzLmNhbGwoT2JqZWN0LnByb3RvdHlwZSxwYXJlbnQpJiYhb3B0aW9ucy5hbGxvd1Byb3RvdHlwZXMpcmV0dXJuO2tleXMucHVzaChwYXJlbnQpfWZvcih2YXIgaT0wO251bGwhPT0oc2VnbWVudD1jaGlsZC5leGVjKGtleSkpJiZpPG9wdGlvbnMuZGVwdGg7KXtpZihpKz0xLCFvcHRpb25zLnBsYWluT2JqZWN0cyYmaGFzLmNhbGwoT2JqZWN0LnByb3RvdHlwZSxzZWdtZW50WzFdLnNsaWNlKDEsLTEpKSYmIW9wdGlvbnMuYWxsb3dQcm90b3R5cGVzKXJldHVybjtrZXlzLnB1c2goc2VnbWVudFsxXSl9cmV0dXJuIHNlZ21lbnQmJmtleXMucHVzaChcIltcIitrZXkuc2xpY2Uoc2VnbWVudC5pbmRleCkrXCJdXCIpLHBhcnNlT2JqZWN0KGtleXMsdmFsLG9wdGlvbnMpfX0scGFyc2U9ZnVuY3Rpb24oc3RyLG9wdHMpe3ZhciBvcHRpb25zPW9wdHN8fHt9O2lmKG51bGwhPT1vcHRpb25zLmRlY29kZXImJnZvaWQgMCE9PW9wdGlvbnMuZGVjb2RlciYmXCJmdW5jdGlvblwiIT10eXBlb2Ygb3B0aW9ucy5kZWNvZGVyKXRocm93IG5ldyBUeXBlRXJyb3IoXCJEZWNvZGVyIGhhcyB0byBiZSBhIGZ1bmN0aW9uLlwiKTtpZihvcHRpb25zLmRlbGltaXRlcj1cInN0cmluZ1wiPT10eXBlb2Ygb3B0aW9ucy5kZWxpbWl0ZXJ8fHV0aWxzLmlzUmVnRXhwKG9wdGlvbnMuZGVsaW1pdGVyKT9vcHRpb25zLmRlbGltaXRlcjpkZWZhdWx0cyQxLmRlbGltaXRlcixvcHRpb25zLmRlcHRoPVwibnVtYmVyXCI9PXR5cGVvZiBvcHRpb25zLmRlcHRoP29wdGlvbnMuZGVwdGg6ZGVmYXVsdHMkMS5kZXB0aCxvcHRpb25zLmFycmF5TGltaXQ9XCJudW1iZXJcIj09dHlwZW9mIG9wdGlvbnMuYXJyYXlMaW1pdD9vcHRpb25zLmFycmF5TGltaXQ6ZGVmYXVsdHMkMS5hcnJheUxpbWl0LG9wdGlvbnMucGFyc2VBcnJheXM9ITEhPT1vcHRpb25zLnBhcnNlQXJyYXlzLG9wdGlvbnMuZGVjb2Rlcj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBvcHRpb25zLmRlY29kZXI/b3B0aW9ucy5kZWNvZGVyOmRlZmF1bHRzJDEuZGVjb2RlcixvcHRpb25zLmFsbG93RG90cz1cImJvb2xlYW5cIj09dHlwZW9mIG9wdGlvbnMuYWxsb3dEb3RzP29wdGlvbnMuYWxsb3dEb3RzOmRlZmF1bHRzJDEuYWxsb3dEb3RzLG9wdGlvbnMucGxhaW5PYmplY3RzPVwiYm9vbGVhblwiPT10eXBlb2Ygb3B0aW9ucy5wbGFpbk9iamVjdHM/b3B0aW9ucy5wbGFpbk9iamVjdHM6ZGVmYXVsdHMkMS5wbGFpbk9iamVjdHMsb3B0aW9ucy5hbGxvd1Byb3RvdHlwZXM9XCJib29sZWFuXCI9PXR5cGVvZiBvcHRpb25zLmFsbG93UHJvdG90eXBlcz9vcHRpb25zLmFsbG93UHJvdG90eXBlczpkZWZhdWx0cyQxLmFsbG93UHJvdG90eXBlcyxvcHRpb25zLnBhcmFtZXRlckxpbWl0PVwibnVtYmVyXCI9PXR5cGVvZiBvcHRpb25zLnBhcmFtZXRlckxpbWl0P29wdGlvbnMucGFyYW1ldGVyTGltaXQ6ZGVmYXVsdHMkMS5wYXJhbWV0ZXJMaW1pdCxvcHRpb25zLnN0cmljdE51bGxIYW5kbGluZz1cImJvb2xlYW5cIj09dHlwZW9mIG9wdGlvbnMuc3RyaWN0TnVsbEhhbmRsaW5nP29wdGlvbnMuc3RyaWN0TnVsbEhhbmRsaW5nOmRlZmF1bHRzJDEuc3RyaWN0TnVsbEhhbmRsaW5nLFwiXCI9PT1zdHJ8fG51bGw9PXN0cilyZXR1cm4gb3B0aW9ucy5wbGFpbk9iamVjdHM/T2JqZWN0LmNyZWF0ZShudWxsKTp7fTtmb3IodmFyIHRlbXBPYmo9XCJzdHJpbmdcIj09dHlwZW9mIHN0cj9wYXJzZVZhbHVlcyhzdHIsb3B0aW9ucyk6c3RyLG9iaj1vcHRpb25zLnBsYWluT2JqZWN0cz9PYmplY3QuY3JlYXRlKG51bGwpOnt9LGtleXM9T2JqZWN0LmtleXModGVtcE9iaiksaT0wO2k8a2V5cy5sZW5ndGg7KytpKXt2YXIga2V5PWtleXNbaV0sbmV3T2JqPXBhcnNlS2V5cyhrZXksdGVtcE9ialtrZXldLG9wdGlvbnMpO29iaj11dGlscy5tZXJnZShvYmosbmV3T2JqLG9wdGlvbnMpfXJldHVybiB1dGlscy5jb21wYWN0KG9iail9LGxpYj17Zm9ybWF0czpmb3JtYXRzLHBhcnNlOnBhcnNlLHN0cmluZ2lmeTpzdHJpbmdpZnlfMX0sY29tcG9uZW50RW1pdHRlcj1jcmVhdGVDb21tb25qc01vZHVsZShmdW5jdGlvbihtb2R1bGUpe2Z1bmN0aW9uIEVtaXR0ZXIob2JqKXtpZihvYmopcmV0dXJuIGZ1bmN0aW9uKG9iail7Zm9yKHZhciBrZXkgaW4gRW1pdHRlci5wcm90b3R5cGUpb2JqW2tleV09RW1pdHRlci5wcm90b3R5cGVba2V5XTtyZXR1cm4gb2JqfShvYmopfW1vZHVsZS5leHBvcnRzPUVtaXR0ZXIsRW1pdHRlci5wcm90b3R5cGUub249RW1pdHRlci5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lcj1mdW5jdGlvbihldmVudCxmbil7cmV0dXJuIHRoaXMuX2NhbGxiYWNrcz10aGlzLl9jYWxsYmFja3N8fHt9LCh0aGlzLl9jYWxsYmFja3NbXCIkXCIrZXZlbnRdPXRoaXMuX2NhbGxiYWNrc1tcIiRcIitldmVudF18fFtdKS5wdXNoKGZuKSx0aGlzfSxFbWl0dGVyLnByb3RvdHlwZS5vbmNlPWZ1bmN0aW9uKGV2ZW50LGZuKXtmdW5jdGlvbiBvbigpe3RoaXMub2ZmKGV2ZW50LG9uKSxmbi5hcHBseSh0aGlzLGFyZ3VtZW50cyl9cmV0dXJuIG9uLmZuPWZuLHRoaXMub24oZXZlbnQsb24pLHRoaXN9LEVtaXR0ZXIucHJvdG90eXBlLm9mZj1FbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lcj1FbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVBbGxMaXN0ZW5lcnM9RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lcj1mdW5jdGlvbihldmVudCxmbil7aWYodGhpcy5fY2FsbGJhY2tzPXRoaXMuX2NhbGxiYWNrc3x8e30sMD09YXJndW1lbnRzLmxlbmd0aClyZXR1cm4gdGhpcy5fY2FsbGJhY2tzPXt9LHRoaXM7dmFyIGNiLGNhbGxiYWNrcz10aGlzLl9jYWxsYmFja3NbXCIkXCIrZXZlbnRdO2lmKCFjYWxsYmFja3MpcmV0dXJuIHRoaXM7aWYoMT09YXJndW1lbnRzLmxlbmd0aClyZXR1cm4gZGVsZXRlIHRoaXMuX2NhbGxiYWNrc1tcIiRcIitldmVudF0sdGhpcztmb3IodmFyIGk9MDtpPGNhbGxiYWNrcy5sZW5ndGg7aSsrKWlmKChjYj1jYWxsYmFja3NbaV0pPT09Zm58fGNiLmZuPT09Zm4pe2NhbGxiYWNrcy5zcGxpY2UoaSwxKTticmVha31yZXR1cm4gdGhpc30sRW1pdHRlci5wcm90b3R5cGUuZW1pdD1mdW5jdGlvbihldmVudCl7dGhpcy5fY2FsbGJhY2tzPXRoaXMuX2NhbGxiYWNrc3x8e307dmFyIGFyZ3M9W10uc2xpY2UuY2FsbChhcmd1bWVudHMsMSksY2FsbGJhY2tzPXRoaXMuX2NhbGxiYWNrc1tcIiRcIitldmVudF07aWYoY2FsbGJhY2tzKWZvcih2YXIgaT0wLGxlbj0oY2FsbGJhY2tzPWNhbGxiYWNrcy5zbGljZSgwKSkubGVuZ3RoO2k8bGVuOysraSljYWxsYmFja3NbaV0uYXBwbHkodGhpcyxhcmdzKTtyZXR1cm4gdGhpc30sRW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJzPWZ1bmN0aW9uKGV2ZW50KXtyZXR1cm4gdGhpcy5fY2FsbGJhY2tzPXRoaXMuX2NhbGxiYWNrc3x8e30sdGhpcy5fY2FsbGJhY2tzW1wiJFwiK2V2ZW50XXx8W119LEVtaXR0ZXIucHJvdG90eXBlLmhhc0xpc3RlbmVycz1mdW5jdGlvbihldmVudCl7cmV0dXJuISF0aGlzLmxpc3RlbmVycyhldmVudCkubGVuZ3RofX0pO2Z1bmN0aW9uIGlzT2JqZWN0KG9iail7cmV0dXJuIG51bGwhPT1vYmomJlwib2JqZWN0XCI9PXR5cGVvZiBvYmp9dmFyIGlzT2JqZWN0XzE9aXNPYmplY3QscmVxdWVzdEJhc2U9UmVxdWVzdEJhc2U7ZnVuY3Rpb24gUmVxdWVzdEJhc2Uob2JqKXtpZihvYmopcmV0dXJuIG1peGluKG9iail9ZnVuY3Rpb24gbWl4aW4ob2JqKXtmb3IodmFyIGtleSBpbiBSZXF1ZXN0QmFzZS5wcm90b3R5cGUpb2JqW2tleV09UmVxdWVzdEJhc2UucHJvdG90eXBlW2tleV07cmV0dXJuIG9ian1SZXF1ZXN0QmFzZS5wcm90b3R5cGUuY2xlYXJUaW1lb3V0PWZ1bmN0aW9uKCl7cmV0dXJuIGNsZWFyVGltZW91dCh0aGlzLl90aW1lciksY2xlYXJUaW1lb3V0KHRoaXMuX3Jlc3BvbnNlVGltZW91dFRpbWVyKSxkZWxldGUgdGhpcy5fdGltZXIsZGVsZXRlIHRoaXMuX3Jlc3BvbnNlVGltZW91dFRpbWVyLHRoaXN9LFJlcXVlc3RCYXNlLnByb3RvdHlwZS5wYXJzZT1mdW5jdGlvbihmbil7cmV0dXJuIHRoaXMuX3BhcnNlcj1mbix0aGlzfSxSZXF1ZXN0QmFzZS5wcm90b3R5cGUucmVzcG9uc2VUeXBlPWZ1bmN0aW9uKHZhbCl7cmV0dXJuIHRoaXMuX3Jlc3BvbnNlVHlwZT12YWwsdGhpc30sUmVxdWVzdEJhc2UucHJvdG90eXBlLnNlcmlhbGl6ZT1mdW5jdGlvbihmbil7cmV0dXJuIHRoaXMuX3NlcmlhbGl6ZXI9Zm4sdGhpc30sUmVxdWVzdEJhc2UucHJvdG90eXBlLnRpbWVvdXQ9ZnVuY3Rpb24ob3B0aW9ucyl7aWYoIW9wdGlvbnN8fFwib2JqZWN0XCIhPXR5cGVvZiBvcHRpb25zKXJldHVybiB0aGlzLl90aW1lb3V0PW9wdGlvbnMsdGhpcy5fcmVzcG9uc2VUaW1lb3V0PTAsdGhpcztmb3IodmFyIG9wdGlvbiBpbiBvcHRpb25zKXN3aXRjaChvcHRpb24pe2Nhc2VcImRlYWRsaW5lXCI6dGhpcy5fdGltZW91dD1vcHRpb25zLmRlYWRsaW5lO2JyZWFrO2Nhc2VcInJlc3BvbnNlXCI6dGhpcy5fcmVzcG9uc2VUaW1lb3V0PW9wdGlvbnMucmVzcG9uc2U7YnJlYWs7ZGVmYXVsdDpjb25zb2xlLndhcm4oXCJVbmtub3duIHRpbWVvdXQgb3B0aW9uXCIsb3B0aW9uKX1yZXR1cm4gdGhpc30sUmVxdWVzdEJhc2UucHJvdG90eXBlLnJldHJ5PWZ1bmN0aW9uKGNvdW50LGZuKXtyZXR1cm4gMCE9PWFyZ3VtZW50cy5sZW5ndGgmJiEwIT09Y291bnR8fChjb3VudD0xKSxjb3VudDw9MCYmKGNvdW50PTApLHRoaXMuX21heFJldHJpZXM9Y291bnQsdGhpcy5fcmV0cmllcz0wLHRoaXMuX3JldHJ5Q2FsbGJhY2s9Zm4sdGhpc307dmFyIEVSUk9SX0NPREVTPVtcIkVDT05OUkVTRVRcIixcIkVUSU1FRE9VVFwiLFwiRUFERFJJTkZPXCIsXCJFU09DS0VUVElNRURPVVRcIl07UmVxdWVzdEJhc2UucHJvdG90eXBlLl9zaG91bGRSZXRyeT1mdW5jdGlvbihlcnIscmVzKXtpZighdGhpcy5fbWF4UmV0cmllc3x8dGhpcy5fcmV0cmllcysrPj10aGlzLl9tYXhSZXRyaWVzKXJldHVybiExO2lmKHRoaXMuX3JldHJ5Q2FsbGJhY2spdHJ5e3ZhciBvdmVycmlkZT10aGlzLl9yZXRyeUNhbGxiYWNrKGVycixyZXMpO2lmKCEwPT09b3ZlcnJpZGUpcmV0dXJuITA7aWYoITE9PT1vdmVycmlkZSlyZXR1cm4hMX1jYXRjaChlKXtjb25zb2xlLmVycm9yKGUpfWlmKHJlcyYmcmVzLnN0YXR1cyYmcmVzLnN0YXR1cz49NTAwJiY1MDEhPXJlcy5zdGF0dXMpcmV0dXJuITA7aWYoZXJyKXtpZihlcnIuY29kZSYmfkVSUk9SX0NPREVTLmluZGV4T2YoZXJyLmNvZGUpKXJldHVybiEwO2lmKGVyci50aW1lb3V0JiZcIkVDT05OQUJPUlRFRFwiPT1lcnIuY29kZSlyZXR1cm4hMDtpZihlcnIuY3Jvc3NEb21haW4pcmV0dXJuITB9cmV0dXJuITF9LFJlcXVlc3RCYXNlLnByb3RvdHlwZS5fcmV0cnk9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jbGVhclRpbWVvdXQoKSx0aGlzLnJlcSYmKHRoaXMucmVxPW51bGwsdGhpcy5yZXE9dGhpcy5yZXF1ZXN0KCkpLHRoaXMuX2Fib3J0ZWQ9ITEsdGhpcy50aW1lZG91dD0hMSx0aGlzLl9lbmQoKX0sUmVxdWVzdEJhc2UucHJvdG90eXBlLnRoZW49ZnVuY3Rpb24ocmVzb2x2ZSxyZWplY3Qpe2lmKCF0aGlzLl9mdWxsZmlsbGVkUHJvbWlzZSl7dmFyIHNlbGY9dGhpczt0aGlzLl9lbmRDYWxsZWQmJmNvbnNvbGUud2FybihcIldhcm5pbmc6IHN1cGVyYWdlbnQgcmVxdWVzdCB3YXMgc2VudCB0d2ljZSwgYmVjYXVzZSBib3RoIC5lbmQoKSBhbmQgLnRoZW4oKSB3ZXJlIGNhbGxlZC4gTmV2ZXIgY2FsbCAuZW5kKCkgaWYgeW91IHVzZSBwcm9taXNlc1wiKSx0aGlzLl9mdWxsZmlsbGVkUHJvbWlzZT1uZXcgUHJvbWlzZShmdW5jdGlvbihpbm5lclJlc29sdmUsaW5uZXJSZWplY3Qpe3NlbGYuZW5kKGZ1bmN0aW9uKGVycixyZXMpe2Vycj9pbm5lclJlamVjdChlcnIpOmlubmVyUmVzb2x2ZShyZXMpfSl9KX1yZXR1cm4gdGhpcy5fZnVsbGZpbGxlZFByb21pc2UudGhlbihyZXNvbHZlLHJlamVjdCl9LFJlcXVlc3RCYXNlLnByb3RvdHlwZS5jYXRjaD1mdW5jdGlvbihjYil7cmV0dXJuIHRoaXMudGhlbih2b2lkIDAsY2IpfSxSZXF1ZXN0QmFzZS5wcm90b3R5cGUudXNlPWZ1bmN0aW9uKGZuKXtyZXR1cm4gZm4odGhpcyksdGhpc30sUmVxdWVzdEJhc2UucHJvdG90eXBlLm9rPWZ1bmN0aW9uKGNiKXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBjYil0aHJvdyBFcnJvcihcIkNhbGxiYWNrIHJlcXVpcmVkXCIpO3JldHVybiB0aGlzLl9va0NhbGxiYWNrPWNiLHRoaXN9LFJlcXVlc3RCYXNlLnByb3RvdHlwZS5faXNSZXNwb25zZU9LPWZ1bmN0aW9uKHJlcyl7cmV0dXJuISFyZXMmJih0aGlzLl9va0NhbGxiYWNrP3RoaXMuX29rQ2FsbGJhY2socmVzKTpyZXMuc3RhdHVzPj0yMDAmJnJlcy5zdGF0dXM8MzAwKX0sUmVxdWVzdEJhc2UucHJvdG90eXBlLmdldD1mdW5jdGlvbihmaWVsZCl7cmV0dXJuIHRoaXMuX2hlYWRlcltmaWVsZC50b0xvd2VyQ2FzZSgpXX0sUmVxdWVzdEJhc2UucHJvdG90eXBlLmdldEhlYWRlcj1SZXF1ZXN0QmFzZS5wcm90b3R5cGUuZ2V0LFJlcXVlc3RCYXNlLnByb3RvdHlwZS5zZXQ9ZnVuY3Rpb24oZmllbGQsdmFsKXtpZihpc09iamVjdF8xKGZpZWxkKSl7Zm9yKHZhciBrZXkgaW4gZmllbGQpdGhpcy5zZXQoa2V5LGZpZWxkW2tleV0pO3JldHVybiB0aGlzfXJldHVybiB0aGlzLl9oZWFkZXJbZmllbGQudG9Mb3dlckNhc2UoKV09dmFsLHRoaXMuaGVhZGVyW2ZpZWxkXT12YWwsdGhpc30sUmVxdWVzdEJhc2UucHJvdG90eXBlLnVuc2V0PWZ1bmN0aW9uKGZpZWxkKXtyZXR1cm4gZGVsZXRlIHRoaXMuX2hlYWRlcltmaWVsZC50b0xvd2VyQ2FzZSgpXSxkZWxldGUgdGhpcy5oZWFkZXJbZmllbGRdLHRoaXN9LFJlcXVlc3RCYXNlLnByb3RvdHlwZS5maWVsZD1mdW5jdGlvbihuYW1lLHZhbCl7aWYobnVsbD09bmFtZSl0aHJvdyBuZXcgRXJyb3IoXCIuZmllbGQobmFtZSwgdmFsKSBuYW1lIGNhbiBub3QgYmUgZW1wdHlcIik7aWYodGhpcy5fZGF0YSYmY29uc29sZS5lcnJvcihcIi5maWVsZCgpIGNhbid0IGJlIHVzZWQgaWYgLnNlbmQoKSBpcyB1c2VkLiBQbGVhc2UgdXNlIG9ubHkgLnNlbmQoKSBvciBvbmx5IC5maWVsZCgpICYgLmF0dGFjaCgpXCIpLGlzT2JqZWN0XzEobmFtZSkpe2Zvcih2YXIga2V5IGluIG5hbWUpdGhpcy5maWVsZChrZXksbmFtZVtrZXldKTtyZXR1cm4gdGhpc31pZihBcnJheS5pc0FycmF5KHZhbCkpe2Zvcih2YXIgaSBpbiB2YWwpdGhpcy5maWVsZChuYW1lLHZhbFtpXSk7cmV0dXJuIHRoaXN9aWYobnVsbD09dmFsKXRocm93IG5ldyBFcnJvcihcIi5maWVsZChuYW1lLCB2YWwpIHZhbCBjYW4gbm90IGJlIGVtcHR5XCIpO3JldHVyblwiYm9vbGVhblwiPT10eXBlb2YgdmFsJiYodmFsPVwiXCIrdmFsKSx0aGlzLl9nZXRGb3JtRGF0YSgpLmFwcGVuZChuYW1lLHZhbCksdGhpc30sUmVxdWVzdEJhc2UucHJvdG90eXBlLmFib3J0PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2Fib3J0ZWQ/dGhpczoodGhpcy5fYWJvcnRlZD0hMCx0aGlzLnhociYmdGhpcy54aHIuYWJvcnQoKSx0aGlzLnJlcSYmdGhpcy5yZXEuYWJvcnQoKSx0aGlzLmNsZWFyVGltZW91dCgpLHRoaXMuZW1pdChcImFib3J0XCIpLHRoaXMpfSxSZXF1ZXN0QmFzZS5wcm90b3R5cGUuX2F1dGg9ZnVuY3Rpb24odXNlcixwYXNzLG9wdGlvbnMsYmFzZTY0RW5jb2Rlcil7c3dpdGNoKG9wdGlvbnMudHlwZSl7Y2FzZVwiYmFzaWNcIjp0aGlzLnNldChcIkF1dGhvcml6YXRpb25cIixcIkJhc2ljIFwiK2Jhc2U2NEVuY29kZXIodXNlcitcIjpcIitwYXNzKSk7YnJlYWs7Y2FzZVwiYXV0b1wiOnRoaXMudXNlcm5hbWU9dXNlcix0aGlzLnBhc3N3b3JkPXBhc3M7YnJlYWs7Y2FzZVwiYmVhcmVyXCI6dGhpcy5zZXQoXCJBdXRob3JpemF0aW9uXCIsXCJCZWFyZXIgXCIrdXNlcil9cmV0dXJuIHRoaXN9LFJlcXVlc3RCYXNlLnByb3RvdHlwZS53aXRoQ3JlZGVudGlhbHM9ZnVuY3Rpb24ob24pe3JldHVybiBudWxsPT1vbiYmKG9uPSEwKSx0aGlzLl93aXRoQ3JlZGVudGlhbHM9b24sdGhpc30sUmVxdWVzdEJhc2UucHJvdG90eXBlLnJlZGlyZWN0cz1mdW5jdGlvbihuKXtyZXR1cm4gdGhpcy5fbWF4UmVkaXJlY3RzPW4sdGhpc30sUmVxdWVzdEJhc2UucHJvdG90eXBlLm1heFJlc3BvbnNlU2l6ZT1mdW5jdGlvbihuKXtpZihcIm51bWJlclwiIT10eXBlb2Ygbil0aHJvdyBUeXBlRXJyb3IoXCJJbnZhbGlkIGFyZ3VtZW50XCIpO3JldHVybiB0aGlzLl9tYXhSZXNwb25zZVNpemU9bix0aGlzfSxSZXF1ZXN0QmFzZS5wcm90b3R5cGUudG9KU09OPWZ1bmN0aW9uKCl7cmV0dXJue21ldGhvZDp0aGlzLm1ldGhvZCx1cmw6dGhpcy51cmwsZGF0YTp0aGlzLl9kYXRhLGhlYWRlcnM6dGhpcy5faGVhZGVyfX0sUmVxdWVzdEJhc2UucHJvdG90eXBlLnNlbmQ9ZnVuY3Rpb24oZGF0YSl7dmFyIGlzT2JqPWlzT2JqZWN0XzEoZGF0YSksdHlwZT10aGlzLl9oZWFkZXJbXCJjb250ZW50LXR5cGVcIl07aWYodGhpcy5fZm9ybURhdGEmJmNvbnNvbGUuZXJyb3IoXCIuc2VuZCgpIGNhbid0IGJlIHVzZWQgaWYgLmF0dGFjaCgpIG9yIC5maWVsZCgpIGlzIHVzZWQuIFBsZWFzZSB1c2Ugb25seSAuc2VuZCgpIG9yIG9ubHkgLmZpZWxkKCkgJiAuYXR0YWNoKClcIiksaXNPYmomJiF0aGlzLl9kYXRhKUFycmF5LmlzQXJyYXkoZGF0YSk/dGhpcy5fZGF0YT1bXTp0aGlzLl9pc0hvc3QoZGF0YSl8fCh0aGlzLl9kYXRhPXt9KTtlbHNlIGlmKGRhdGEmJnRoaXMuX2RhdGEmJnRoaXMuX2lzSG9zdCh0aGlzLl9kYXRhKSl0aHJvdyBFcnJvcihcIkNhbid0IG1lcmdlIHRoZXNlIHNlbmQgY2FsbHNcIik7aWYoaXNPYmomJmlzT2JqZWN0XzEodGhpcy5fZGF0YSkpZm9yKHZhciBrZXkgaW4gZGF0YSl0aGlzLl9kYXRhW2tleV09ZGF0YVtrZXldO2Vsc2VcInN0cmluZ1wiPT10eXBlb2YgZGF0YT8odHlwZXx8dGhpcy50eXBlKFwiZm9ybVwiKSx0eXBlPXRoaXMuX2hlYWRlcltcImNvbnRlbnQtdHlwZVwiXSx0aGlzLl9kYXRhPVwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCI9PXR5cGU/dGhpcy5fZGF0YT90aGlzLl9kYXRhK1wiJlwiK2RhdGE6ZGF0YToodGhpcy5fZGF0YXx8XCJcIikrZGF0YSk6dGhpcy5fZGF0YT1kYXRhO3JldHVybiFpc09ianx8dGhpcy5faXNIb3N0KGRhdGEpP3RoaXM6KHR5cGV8fHRoaXMudHlwZShcImpzb25cIiksdGhpcyl9LFJlcXVlc3RCYXNlLnByb3RvdHlwZS5zb3J0UXVlcnk9ZnVuY3Rpb24oc29ydCl7cmV0dXJuIHRoaXMuX3NvcnQ9dm9pZCAwPT09c29ydHx8c29ydCx0aGlzfSxSZXF1ZXN0QmFzZS5wcm90b3R5cGUuX2ZpbmFsaXplUXVlcnlTdHJpbmc9ZnVuY3Rpb24oKXt2YXIgcXVlcnk9dGhpcy5fcXVlcnkuam9pbihcIiZcIik7aWYocXVlcnkmJih0aGlzLnVybCs9KHRoaXMudXJsLmluZGV4T2YoXCI/XCIpPj0wP1wiJlwiOlwiP1wiKStxdWVyeSksdGhpcy5fcXVlcnkubGVuZ3RoPTAsdGhpcy5fc29ydCl7dmFyIGluZGV4PXRoaXMudXJsLmluZGV4T2YoXCI/XCIpO2lmKGluZGV4Pj0wKXt2YXIgcXVlcnlBcnI9dGhpcy51cmwuc3Vic3RyaW5nKGluZGV4KzEpLnNwbGl0KFwiJlwiKTtcImZ1bmN0aW9uXCI9PXR5cGVvZiB0aGlzLl9zb3J0P3F1ZXJ5QXJyLnNvcnQodGhpcy5fc29ydCk6cXVlcnlBcnIuc29ydCgpLHRoaXMudXJsPXRoaXMudXJsLnN1YnN0cmluZygwLGluZGV4KStcIj9cIitxdWVyeUFyci5qb2luKFwiJlwiKX19fSxSZXF1ZXN0QmFzZS5wcm90b3R5cGUuX2FwcGVuZFF1ZXJ5U3RyaW5nPWZ1bmN0aW9uKCl7Y29uc29sZS50cmFjZShcIlVuc3VwcG9ydGVkXCIpfSxSZXF1ZXN0QmFzZS5wcm90b3R5cGUuX3RpbWVvdXRFcnJvcj1mdW5jdGlvbihyZWFzb24sdGltZW91dCxlcnJubyl7aWYoIXRoaXMuX2Fib3J0ZWQpe3ZhciBlcnI9bmV3IEVycm9yKHJlYXNvbit0aW1lb3V0K1wibXMgZXhjZWVkZWRcIik7ZXJyLnRpbWVvdXQ9dGltZW91dCxlcnIuY29kZT1cIkVDT05OQUJPUlRFRFwiLGVyci5lcnJubz1lcnJubyx0aGlzLnRpbWVkb3V0PSEwLHRoaXMuYWJvcnQoKSx0aGlzLmNhbGxiYWNrKGVycil9fSxSZXF1ZXN0QmFzZS5wcm90b3R5cGUuX3NldFRpbWVvdXRzPWZ1bmN0aW9uKCl7dmFyIHNlbGY9dGhpczt0aGlzLl90aW1lb3V0JiYhdGhpcy5fdGltZXImJih0aGlzLl90aW1lcj1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7c2VsZi5fdGltZW91dEVycm9yKFwiVGltZW91dCBvZiBcIixzZWxmLl90aW1lb3V0LFwiRVRJTUVcIil9LHRoaXMuX3RpbWVvdXQpKSx0aGlzLl9yZXNwb25zZVRpbWVvdXQmJiF0aGlzLl9yZXNwb25zZVRpbWVvdXRUaW1lciYmKHRoaXMuX3Jlc3BvbnNlVGltZW91dFRpbWVyPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtzZWxmLl90aW1lb3V0RXJyb3IoXCJSZXNwb25zZSB0aW1lb3V0IG9mIFwiLHNlbGYuX3Jlc3BvbnNlVGltZW91dCxcIkVUSU1FRE9VVFwiKX0sdGhpcy5fcmVzcG9uc2VUaW1lb3V0KSl9O3ZhciB0eXBlPWZ1bmN0aW9uKHN0cil7cmV0dXJuIHN0ci5zcGxpdCgvICo7ICovKS5zaGlmdCgpfSxwYXJhbXM9ZnVuY3Rpb24oc3RyKXtyZXR1cm4gc3RyLnNwbGl0KC8gKjsgKi8pLnJlZHVjZShmdW5jdGlvbihvYmosc3RyKXt2YXIgcGFydHM9c3RyLnNwbGl0KC8gKj0gKi8pLGtleT1wYXJ0cy5zaGlmdCgpLHZhbD1wYXJ0cy5zaGlmdCgpO3JldHVybiBrZXkmJnZhbCYmKG9ialtrZXldPXZhbCksb2JqfSx7fSl9LHBhcnNlTGlua3M9ZnVuY3Rpb24oc3RyKXtyZXR1cm4gc3RyLnNwbGl0KC8gKiwgKi8pLnJlZHVjZShmdW5jdGlvbihvYmosc3RyKXt2YXIgcGFydHM9c3RyLnNwbGl0KC8gKjsgKi8pLHVybD1wYXJ0c1swXS5zbGljZSgxLC0xKTtyZXR1cm4gb2JqW3BhcnRzWzFdLnNwbGl0KC8gKj0gKi8pWzFdLnNsaWNlKDEsLTEpXT11cmwsb2JqfSx7fSl9LGNsZWFuSGVhZGVyPWZ1bmN0aW9uKGhlYWRlcixjaGFuZ2VzT3JpZ2luKXtyZXR1cm4gZGVsZXRlIGhlYWRlcltcImNvbnRlbnQtdHlwZVwiXSxkZWxldGUgaGVhZGVyW1wiY29udGVudC1sZW5ndGhcIl0sZGVsZXRlIGhlYWRlcltcInRyYW5zZmVyLWVuY29kaW5nXCJdLGRlbGV0ZSBoZWFkZXIuaG9zdCxjaGFuZ2VzT3JpZ2luJiYoZGVsZXRlIGhlYWRlci5hdXRob3JpemF0aW9uLGRlbGV0ZSBoZWFkZXIuY29va2llKSxoZWFkZXJ9LHV0aWxzJDE9e3R5cGU6dHlwZSxwYXJhbXM6cGFyYW1zLHBhcnNlTGlua3M6cGFyc2VMaW5rcyxjbGVhbkhlYWRlcjpjbGVhbkhlYWRlcn0scmVzcG9uc2VCYXNlPVJlc3BvbnNlQmFzZTtmdW5jdGlvbiBSZXNwb25zZUJhc2Uob2JqKXtpZihvYmopcmV0dXJuIG1peGluJDEob2JqKX1mdW5jdGlvbiBtaXhpbiQxKG9iail7Zm9yKHZhciBrZXkgaW4gUmVzcG9uc2VCYXNlLnByb3RvdHlwZSlvYmpba2V5XT1SZXNwb25zZUJhc2UucHJvdG90eXBlW2tleV07cmV0dXJuIG9ian1mdW5jdGlvbiBBZ2VudCgpe3RoaXMuX2RlZmF1bHRzPVtdfVJlc3BvbnNlQmFzZS5wcm90b3R5cGUuZ2V0PWZ1bmN0aW9uKGZpZWxkKXtyZXR1cm4gdGhpcy5oZWFkZXJbZmllbGQudG9Mb3dlckNhc2UoKV19LFJlc3BvbnNlQmFzZS5wcm90b3R5cGUuX3NldEhlYWRlclByb3BlcnRpZXM9ZnVuY3Rpb24oaGVhZGVyKXt2YXIgY3Q9aGVhZGVyW1wiY29udGVudC10eXBlXCJdfHxcIlwiO3RoaXMudHlwZT11dGlscyQxLnR5cGUoY3QpO3ZhciBwYXJhbXM9dXRpbHMkMS5wYXJhbXMoY3QpO2Zvcih2YXIga2V5IGluIHBhcmFtcyl0aGlzW2tleV09cGFyYW1zW2tleV07dGhpcy5saW5rcz17fTt0cnl7aGVhZGVyLmxpbmsmJih0aGlzLmxpbmtzPXV0aWxzJDEucGFyc2VMaW5rcyhoZWFkZXIubGluaykpfWNhdGNoKGVycil7fX0sUmVzcG9uc2VCYXNlLnByb3RvdHlwZS5fc2V0U3RhdHVzUHJvcGVydGllcz1mdW5jdGlvbihzdGF0dXMpe3ZhciB0eXBlPXN0YXR1cy8xMDB8MDt0aGlzLnN0YXR1cz10aGlzLnN0YXR1c0NvZGU9c3RhdHVzLHRoaXMuc3RhdHVzVHlwZT10eXBlLHRoaXMuaW5mbz0xPT10eXBlLHRoaXMub2s9Mj09dHlwZSx0aGlzLnJlZGlyZWN0PTM9PXR5cGUsdGhpcy5jbGllbnRFcnJvcj00PT10eXBlLHRoaXMuc2VydmVyRXJyb3I9NT09dHlwZSx0aGlzLmVycm9yPSg0PT10eXBlfHw1PT10eXBlKSYmdGhpcy50b0Vycm9yKCksdGhpcy5hY2NlcHRlZD0yMDI9PXN0YXR1cyx0aGlzLm5vQ29udGVudD0yMDQ9PXN0YXR1cyx0aGlzLmJhZFJlcXVlc3Q9NDAwPT1zdGF0dXMsdGhpcy51bmF1dGhvcml6ZWQ9NDAxPT1zdGF0dXMsdGhpcy5ub3RBY2NlcHRhYmxlPTQwNj09c3RhdHVzLHRoaXMuZm9yYmlkZGVuPTQwMz09c3RhdHVzLHRoaXMubm90Rm91bmQ9NDA0PT1zdGF0dXN9LFtcInVzZVwiLFwib25cIixcIm9uY2VcIixcInNldFwiLFwicXVlcnlcIixcInR5cGVcIixcImFjY2VwdFwiLFwiYXV0aFwiLFwid2l0aENyZWRlbnRpYWxzXCIsXCJzb3J0UXVlcnlcIixcInJldHJ5XCIsXCJva1wiLFwicmVkaXJlY3RzXCIsXCJ0aW1lb3V0XCIsXCJidWZmZXJcIixcInNlcmlhbGl6ZVwiLFwicGFyc2VcIixcImNhXCIsXCJrZXlcIixcInBmeFwiLFwiY2VydFwiXS5mb3JFYWNoKGZ1bmN0aW9uKGZuKXtBZ2VudC5wcm90b3R5cGVbZm5dPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2RlZmF1bHRzLnB1c2goe2ZuOmZuLGFyZ3VtZW50czphcmd1bWVudHN9KSx0aGlzfX0pLEFnZW50LnByb3RvdHlwZS5fc2V0RGVmYXVsdHM9ZnVuY3Rpb24ocmVxKXt0aGlzLl9kZWZhdWx0cy5mb3JFYWNoKGZ1bmN0aW9uKGRlZil7cmVxW2RlZi5mbl0uYXBwbHkocmVxLGRlZi5hcmd1bWVudHMpfSl9O2Zvcih2YXIgYWdlbnRCYXNlPUFnZW50LGNsaWVudD1jcmVhdGVDb21tb25qc01vZHVsZShmdW5jdGlvbihtb2R1bGUsZXhwb3J0cyl7dmFyIHJvb3Q7ZnVuY3Rpb24gbm9vcCgpe31cInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93P3Jvb3Q9d2luZG93OlwidW5kZWZpbmVkXCIhPXR5cGVvZiBzZWxmP3Jvb3Q9c2VsZjooY29uc29sZS53YXJuKFwiVXNpbmcgYnJvd3Nlci1vbmx5IHZlcnNpb24gb2Ygc3VwZXJhZ2VudCBpbiBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKSxyb290PWNvbW1vbmpzR2xvYmFsKTt2YXIgcmVxdWVzdD1leHBvcnRzPW1vZHVsZS5leHBvcnRzPWZ1bmN0aW9uKG1ldGhvZCx1cmwpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIHVybD9uZXcgZXhwb3J0cy5SZXF1ZXN0KFwiR0VUXCIsbWV0aG9kKS5lbmQodXJsKToxPT1hcmd1bWVudHMubGVuZ3RoP25ldyBleHBvcnRzLlJlcXVlc3QoXCJHRVRcIixtZXRob2QpOm5ldyBleHBvcnRzLlJlcXVlc3QobWV0aG9kLHVybCl9O2V4cG9ydHMuUmVxdWVzdD1SZXF1ZXN0LHJlcXVlc3QuZ2V0WEhSPWZ1bmN0aW9uKCl7aWYoISghcm9vdC5YTUxIdHRwUmVxdWVzdHx8cm9vdC5sb2NhdGlvbiYmXCJmaWxlOlwiPT1yb290LmxvY2F0aW9uLnByb3RvY29sJiZyb290LkFjdGl2ZVhPYmplY3QpKXJldHVybiBuZXcgWE1MSHR0cFJlcXVlc3Q7dHJ5e3JldHVybiBuZXcgQWN0aXZlWE9iamVjdChcIk1pY3Jvc29mdC5YTUxIVFRQXCIpfWNhdGNoKGUpe310cnl7cmV0dXJuIG5ldyBBY3RpdmVYT2JqZWN0KFwiTXN4bWwyLlhNTEhUVFAuNi4wXCIpfWNhdGNoKGUpe310cnl7cmV0dXJuIG5ldyBBY3RpdmVYT2JqZWN0KFwiTXN4bWwyLlhNTEhUVFAuMy4wXCIpfWNhdGNoKGUpe310cnl7cmV0dXJuIG5ldyBBY3RpdmVYT2JqZWN0KFwiTXN4bWwyLlhNTEhUVFBcIil9Y2F0Y2goZSl7fXRocm93IEVycm9yKFwiQnJvd3Nlci1vbmx5IHZlcnNpb24gb2Ygc3VwZXJhZ2VudCBjb3VsZCBub3QgZmluZCBYSFJcIil9O3ZhciB0cmltPVwiXCIudHJpbT9mdW5jdGlvbihzKXtyZXR1cm4gcy50cmltKCl9OmZ1bmN0aW9uKHMpe3JldHVybiBzLnJlcGxhY2UoLyheXFxzKnxcXHMqJCkvZyxcIlwiKX07ZnVuY3Rpb24gc2VyaWFsaXplKG9iail7aWYoIWlzT2JqZWN0XzEob2JqKSlyZXR1cm4gb2JqO3ZhciBwYWlycz1bXTtmb3IodmFyIGtleSBpbiBvYmopcHVzaEVuY29kZWRLZXlWYWx1ZVBhaXIocGFpcnMsa2V5LG9ialtrZXldKTtyZXR1cm4gcGFpcnMuam9pbihcIiZcIil9ZnVuY3Rpb24gcHVzaEVuY29kZWRLZXlWYWx1ZVBhaXIocGFpcnMsa2V5LHZhbCl7aWYobnVsbCE9dmFsKWlmKEFycmF5LmlzQXJyYXkodmFsKSl2YWwuZm9yRWFjaChmdW5jdGlvbih2KXtwdXNoRW5jb2RlZEtleVZhbHVlUGFpcihwYWlycyxrZXksdil9KTtlbHNlIGlmKGlzT2JqZWN0XzEodmFsKSlmb3IodmFyIHN1YmtleSBpbiB2YWwpcHVzaEVuY29kZWRLZXlWYWx1ZVBhaXIocGFpcnMsa2V5K1wiW1wiK3N1YmtleStcIl1cIix2YWxbc3Via2V5XSk7ZWxzZSBwYWlycy5wdXNoKGVuY29kZVVSSUNvbXBvbmVudChrZXkpK1wiPVwiK2VuY29kZVVSSUNvbXBvbmVudCh2YWwpKTtlbHNlIG51bGw9PT12YWwmJnBhaXJzLnB1c2goZW5jb2RlVVJJQ29tcG9uZW50KGtleSkpfWZ1bmN0aW9uIHBhcnNlU3RyaW5nKHN0cil7Zm9yKHZhciBwYWlyLHBvcyxvYmo9e30scGFpcnM9c3RyLnNwbGl0KFwiJlwiKSxpPTAsbGVuPXBhaXJzLmxlbmd0aDtpPGxlbjsrK2kpLTE9PShwb3M9KHBhaXI9cGFpcnNbaV0pLmluZGV4T2YoXCI9XCIpKT9vYmpbZGVjb2RlVVJJQ29tcG9uZW50KHBhaXIpXT1cIlwiOm9ialtkZWNvZGVVUklDb21wb25lbnQocGFpci5zbGljZSgwLHBvcykpXT1kZWNvZGVVUklDb21wb25lbnQocGFpci5zbGljZShwb3MrMSkpO3JldHVybiBvYmp9ZnVuY3Rpb24gaXNKU09OKG1pbWUpe3JldHVybi9bXFwvK11qc29uKCR8W14tXFx3XSkvLnRlc3QobWltZSl9ZnVuY3Rpb24gUmVzcG9uc2UocmVxKXt0aGlzLnJlcT1yZXEsdGhpcy54aHI9dGhpcy5yZXEueGhyLHRoaXMudGV4dD1cIkhFQURcIiE9dGhpcy5yZXEubWV0aG9kJiYoXCJcIj09PXRoaXMueGhyLnJlc3BvbnNlVHlwZXx8XCJ0ZXh0XCI9PT10aGlzLnhoci5yZXNwb25zZVR5cGUpfHx2b2lkIDA9PT10aGlzLnhoci5yZXNwb25zZVR5cGU/dGhpcy54aHIucmVzcG9uc2VUZXh0Om51bGwsdGhpcy5zdGF0dXNUZXh0PXRoaXMucmVxLnhoci5zdGF0dXNUZXh0O3ZhciBzdGF0dXM9dGhpcy54aHIuc3RhdHVzOzEyMjM9PT1zdGF0dXMmJihzdGF0dXM9MjA0KSx0aGlzLl9zZXRTdGF0dXNQcm9wZXJ0aWVzKHN0YXR1cyksdGhpcy5oZWFkZXI9dGhpcy5oZWFkZXJzPWZ1bmN0aW9uKHN0cil7Zm9yKHZhciBpbmRleCxsaW5lLGZpZWxkLHZhbCxsaW5lcz1zdHIuc3BsaXQoL1xccj9cXG4vKSxmaWVsZHM9e30saT0wLGxlbj1saW5lcy5sZW5ndGg7aTxsZW47KytpKS0xIT09KGluZGV4PShsaW5lPWxpbmVzW2ldKS5pbmRleE9mKFwiOlwiKSkmJihmaWVsZD1saW5lLnNsaWNlKDAsaW5kZXgpLnRvTG93ZXJDYXNlKCksdmFsPXRyaW0obGluZS5zbGljZShpbmRleCsxKSksZmllbGRzW2ZpZWxkXT12YWwpO3JldHVybiBmaWVsZHN9KHRoaXMueGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpKSx0aGlzLmhlYWRlcltcImNvbnRlbnQtdHlwZVwiXT10aGlzLnhoci5nZXRSZXNwb25zZUhlYWRlcihcImNvbnRlbnQtdHlwZVwiKSx0aGlzLl9zZXRIZWFkZXJQcm9wZXJ0aWVzKHRoaXMuaGVhZGVyKSxudWxsPT09dGhpcy50ZXh0JiZyZXEuX3Jlc3BvbnNlVHlwZT90aGlzLmJvZHk9dGhpcy54aHIucmVzcG9uc2U6dGhpcy5ib2R5PVwiSEVBRFwiIT10aGlzLnJlcS5tZXRob2Q/dGhpcy5fcGFyc2VCb2R5KHRoaXMudGV4dD90aGlzLnRleHQ6dGhpcy54aHIucmVzcG9uc2UpOm51bGx9ZnVuY3Rpb24gUmVxdWVzdChtZXRob2QsdXJsKXt2YXIgc2VsZj10aGlzO3RoaXMuX3F1ZXJ5PXRoaXMuX3F1ZXJ5fHxbXSx0aGlzLm1ldGhvZD1tZXRob2QsdGhpcy51cmw9dXJsLHRoaXMuaGVhZGVyPXt9LHRoaXMuX2hlYWRlcj17fSx0aGlzLm9uKFwiZW5kXCIsZnVuY3Rpb24oKXt2YXIgbmV3X2VycixlcnI9bnVsbCxyZXM9bnVsbDt0cnl7cmVzPW5ldyBSZXNwb25zZShzZWxmKX1jYXRjaChlKXtyZXR1cm4oZXJyPW5ldyBFcnJvcihcIlBhcnNlciBpcyB1bmFibGUgdG8gcGFyc2UgdGhlIHJlc3BvbnNlXCIpKS5wYXJzZT0hMCxlcnIub3JpZ2luYWw9ZSxzZWxmLnhocj8oZXJyLnJhd1Jlc3BvbnNlPXZvaWQgMD09PXNlbGYueGhyLnJlc3BvbnNlVHlwZT9zZWxmLnhoci5yZXNwb25zZVRleHQ6c2VsZi54aHIucmVzcG9uc2UsZXJyLnN0YXR1cz1zZWxmLnhoci5zdGF0dXM/c2VsZi54aHIuc3RhdHVzOm51bGwsZXJyLnN0YXR1c0NvZGU9ZXJyLnN0YXR1cyk6KGVyci5yYXdSZXNwb25zZT1udWxsLGVyci5zdGF0dXM9bnVsbCksc2VsZi5jYWxsYmFjayhlcnIpfXNlbGYuZW1pdChcInJlc3BvbnNlXCIscmVzKTt0cnl7c2VsZi5faXNSZXNwb25zZU9LKHJlcyl8fChuZXdfZXJyPW5ldyBFcnJvcihyZXMuc3RhdHVzVGV4dHx8XCJVbnN1Y2Nlc3NmdWwgSFRUUCByZXNwb25zZVwiKSl9Y2F0Y2goY3VzdG9tX2Vycil7bmV3X2Vycj1jdXN0b21fZXJyfW5ld19lcnI/KG5ld19lcnIub3JpZ2luYWw9ZXJyLG5ld19lcnIucmVzcG9uc2U9cmVzLG5ld19lcnIuc3RhdHVzPXJlcy5zdGF0dXMsc2VsZi5jYWxsYmFjayhuZXdfZXJyLHJlcykpOnNlbGYuY2FsbGJhY2sobnVsbCxyZXMpfSl9ZnVuY3Rpb24gZGVsKHVybCxkYXRhLGZuKXt2YXIgcmVxPXJlcXVlc3QoXCJERUxFVEVcIix1cmwpO3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIGRhdGEmJihmbj1kYXRhLGRhdGE9bnVsbCksZGF0YSYmcmVxLnNlbmQoZGF0YSksZm4mJnJlcS5lbmQoZm4pLHJlcX1yZXF1ZXN0LnNlcmlhbGl6ZU9iamVjdD1zZXJpYWxpemUscmVxdWVzdC5wYXJzZVN0cmluZz1wYXJzZVN0cmluZyxyZXF1ZXN0LnR5cGVzPXtodG1sOlwidGV4dC9odG1sXCIsanNvbjpcImFwcGxpY2F0aW9uL2pzb25cIix4bWw6XCJ0ZXh0L3htbFwiLHVybGVuY29kZWQ6XCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIixmb3JtOlwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIsXCJmb3JtLWRhdGFcIjpcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwifSxyZXF1ZXN0LnNlcmlhbGl6ZT17XCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIjpzZXJpYWxpemUsXCJhcHBsaWNhdGlvbi9qc29uXCI6SlNPTi5zdHJpbmdpZnl9LHJlcXVlc3QucGFyc2U9e1wiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCI6cGFyc2VTdHJpbmcsXCJhcHBsaWNhdGlvbi9qc29uXCI6SlNPTi5wYXJzZX0scmVzcG9uc2VCYXNlKFJlc3BvbnNlLnByb3RvdHlwZSksUmVzcG9uc2UucHJvdG90eXBlLl9wYXJzZUJvZHk9ZnVuY3Rpb24oc3RyKXt2YXIgcGFyc2U9cmVxdWVzdC5wYXJzZVt0aGlzLnR5cGVdO3JldHVybiB0aGlzLnJlcS5fcGFyc2VyP3RoaXMucmVxLl9wYXJzZXIodGhpcyxzdHIpOighcGFyc2UmJmlzSlNPTih0aGlzLnR5cGUpJiYocGFyc2U9cmVxdWVzdC5wYXJzZVtcImFwcGxpY2F0aW9uL2pzb25cIl0pLHBhcnNlJiZzdHImJihzdHIubGVuZ3RofHxzdHIgaW5zdGFuY2VvZiBPYmplY3QpP3BhcnNlKHN0cik6bnVsbCl9LFJlc3BvbnNlLnByb3RvdHlwZS50b0Vycm9yPWZ1bmN0aW9uKCl7dmFyIHJlcT10aGlzLnJlcSxtZXRob2Q9cmVxLm1ldGhvZCx1cmw9cmVxLnVybCxtc2c9XCJjYW5ub3QgXCIrbWV0aG9kK1wiIFwiK3VybCtcIiAoXCIrdGhpcy5zdGF0dXMrXCIpXCIsZXJyPW5ldyBFcnJvcihtc2cpO3JldHVybiBlcnIuc3RhdHVzPXRoaXMuc3RhdHVzLGVyci5tZXRob2Q9bWV0aG9kLGVyci51cmw9dXJsLGVycn0scmVxdWVzdC5SZXNwb25zZT1SZXNwb25zZSxjb21wb25lbnRFbWl0dGVyKFJlcXVlc3QucHJvdG90eXBlKSxyZXF1ZXN0QmFzZShSZXF1ZXN0LnByb3RvdHlwZSksUmVxdWVzdC5wcm90b3R5cGUudHlwZT1mdW5jdGlvbih0eXBlKXtyZXR1cm4gdGhpcy5zZXQoXCJDb250ZW50LVR5cGVcIixyZXF1ZXN0LnR5cGVzW3R5cGVdfHx0eXBlKSx0aGlzfSxSZXF1ZXN0LnByb3RvdHlwZS5hY2NlcHQ9ZnVuY3Rpb24odHlwZSl7cmV0dXJuIHRoaXMuc2V0KFwiQWNjZXB0XCIscmVxdWVzdC50eXBlc1t0eXBlXXx8dHlwZSksdGhpc30sUmVxdWVzdC5wcm90b3R5cGUuYXV0aD1mdW5jdGlvbih1c2VyLHBhc3Msb3B0aW9ucyl7MT09PWFyZ3VtZW50cy5sZW5ndGgmJihwYXNzPVwiXCIpLFwib2JqZWN0XCI9PXR5cGVvZiBwYXNzJiZudWxsIT09cGFzcyYmKG9wdGlvbnM9cGFzcyxwYXNzPVwiXCIpLG9wdGlvbnN8fChvcHRpb25zPXt0eXBlOlwiZnVuY3Rpb25cIj09dHlwZW9mIGJ0b2E/XCJiYXNpY1wiOlwiYXV0b1wifSk7cmV0dXJuIHRoaXMuX2F1dGgodXNlcixwYXNzLG9wdGlvbnMsZnVuY3Rpb24oc3RyaW5nKXtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBidG9hKXJldHVybiBidG9hKHN0cmluZyk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IHVzZSBiYXNpYyBhdXRoLCBidG9hIGlzIG5vdCBhIGZ1bmN0aW9uXCIpfSl9LFJlcXVlc3QucHJvdG90eXBlLnF1ZXJ5PWZ1bmN0aW9uKHZhbCl7cmV0dXJuXCJzdHJpbmdcIiE9dHlwZW9mIHZhbCYmKHZhbD1zZXJpYWxpemUodmFsKSksdmFsJiZ0aGlzLl9xdWVyeS5wdXNoKHZhbCksdGhpc30sUmVxdWVzdC5wcm90b3R5cGUuYXR0YWNoPWZ1bmN0aW9uKGZpZWxkLGZpbGUsb3B0aW9ucyl7aWYoZmlsZSl7aWYodGhpcy5fZGF0YSl0aHJvdyBFcnJvcihcInN1cGVyYWdlbnQgY2FuJ3QgbWl4IC5zZW5kKCkgYW5kIC5hdHRhY2goKVwiKTt0aGlzLl9nZXRGb3JtRGF0YSgpLmFwcGVuZChmaWVsZCxmaWxlLG9wdGlvbnN8fGZpbGUubmFtZSl9cmV0dXJuIHRoaXN9LFJlcXVlc3QucHJvdG90eXBlLl9nZXRGb3JtRGF0YT1mdW5jdGlvbigpe3JldHVybiB0aGlzLl9mb3JtRGF0YXx8KHRoaXMuX2Zvcm1EYXRhPW5ldyByb290LkZvcm1EYXRhKSx0aGlzLl9mb3JtRGF0YX0sUmVxdWVzdC5wcm90b3R5cGUuY2FsbGJhY2s9ZnVuY3Rpb24oZXJyLHJlcyl7aWYodGhpcy5fc2hvdWxkUmV0cnkoZXJyLHJlcykpcmV0dXJuIHRoaXMuX3JldHJ5KCk7dmFyIGZuPXRoaXMuX2NhbGxiYWNrO3RoaXMuY2xlYXJUaW1lb3V0KCksZXJyJiYodGhpcy5fbWF4UmV0cmllcyYmKGVyci5yZXRyaWVzPXRoaXMuX3JldHJpZXMtMSksdGhpcy5lbWl0KFwiZXJyb3JcIixlcnIpKSxmbihlcnIscmVzKX0sUmVxdWVzdC5wcm90b3R5cGUuY3Jvc3NEb21haW5FcnJvcj1mdW5jdGlvbigpe3ZhciBlcnI9bmV3IEVycm9yKFwiUmVxdWVzdCBoYXMgYmVlbiB0ZXJtaW5hdGVkXFxuUG9zc2libGUgY2F1c2VzOiB0aGUgbmV0d29yayBpcyBvZmZsaW5lLCBPcmlnaW4gaXMgbm90IGFsbG93ZWQgYnkgQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luLCB0aGUgcGFnZSBpcyBiZWluZyB1bmxvYWRlZCwgZXRjLlwiKTtlcnIuY3Jvc3NEb21haW49ITAsZXJyLnN0YXR1cz10aGlzLnN0YXR1cyxlcnIubWV0aG9kPXRoaXMubWV0aG9kLGVyci51cmw9dGhpcy51cmwsdGhpcy5jYWxsYmFjayhlcnIpfSxSZXF1ZXN0LnByb3RvdHlwZS5idWZmZXI9UmVxdWVzdC5wcm90b3R5cGUuY2E9UmVxdWVzdC5wcm90b3R5cGUuYWdlbnQ9ZnVuY3Rpb24oKXtyZXR1cm4gY29uc29sZS53YXJuKFwiVGhpcyBpcyBub3Qgc3VwcG9ydGVkIGluIGJyb3dzZXIgdmVyc2lvbiBvZiBzdXBlcmFnZW50XCIpLHRoaXN9LFJlcXVlc3QucHJvdG90eXBlLnBpcGU9UmVxdWVzdC5wcm90b3R5cGUud3JpdGU9ZnVuY3Rpb24oKXt0aHJvdyBFcnJvcihcIlN0cmVhbWluZyBpcyBub3Qgc3VwcG9ydGVkIGluIGJyb3dzZXIgdmVyc2lvbiBvZiBzdXBlcmFnZW50XCIpfSxSZXF1ZXN0LnByb3RvdHlwZS5faXNIb3N0PWZ1bmN0aW9uKG9iail7cmV0dXJuIG9iaiYmXCJvYmplY3RcIj09dHlwZW9mIG9iaiYmIUFycmF5LmlzQXJyYXkob2JqKSYmXCJbb2JqZWN0IE9iamVjdF1cIiE9PU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopfSxSZXF1ZXN0LnByb3RvdHlwZS5lbmQ9ZnVuY3Rpb24oZm4pe3JldHVybiB0aGlzLl9lbmRDYWxsZWQmJmNvbnNvbGUud2FybihcIldhcm5pbmc6IC5lbmQoKSB3YXMgY2FsbGVkIHR3aWNlLiBUaGlzIGlzIG5vdCBzdXBwb3J0ZWQgaW4gc3VwZXJhZ2VudFwiKSx0aGlzLl9lbmRDYWxsZWQ9ITAsdGhpcy5fY2FsbGJhY2s9Zm58fG5vb3AsdGhpcy5fZmluYWxpemVRdWVyeVN0cmluZygpLHRoaXMuX2VuZCgpfSxSZXF1ZXN0LnByb3RvdHlwZS5fZW5kPWZ1bmN0aW9uKCl7dmFyIHNlbGY9dGhpcyx4aHI9dGhpcy54aHI9cmVxdWVzdC5nZXRYSFIoKSxkYXRhPXRoaXMuX2Zvcm1EYXRhfHx0aGlzLl9kYXRhO3RoaXMuX3NldFRpbWVvdXRzKCkseGhyLm9ucmVhZHlzdGF0ZWNoYW5nZT1mdW5jdGlvbigpe3ZhciByZWFkeVN0YXRlPXhoci5yZWFkeVN0YXRlO2lmKHJlYWR5U3RhdGU+PTImJnNlbGYuX3Jlc3BvbnNlVGltZW91dFRpbWVyJiZjbGVhclRpbWVvdXQoc2VsZi5fcmVzcG9uc2VUaW1lb3V0VGltZXIpLDQ9PXJlYWR5U3RhdGUpe3ZhciBzdGF0dXM7dHJ5e3N0YXR1cz14aHIuc3RhdHVzfWNhdGNoKGUpe3N0YXR1cz0wfWlmKCFzdGF0dXMpe2lmKHNlbGYudGltZWRvdXR8fHNlbGYuX2Fib3J0ZWQpcmV0dXJuO3JldHVybiBzZWxmLmNyb3NzRG9tYWluRXJyb3IoKX1zZWxmLmVtaXQoXCJlbmRcIil9fTt2YXIgaGFuZGxlUHJvZ3Jlc3M9ZnVuY3Rpb24oZGlyZWN0aW9uLGUpe2UudG90YWw+MCYmKGUucGVyY2VudD1lLmxvYWRlZC9lLnRvdGFsKjEwMCksZS5kaXJlY3Rpb249ZGlyZWN0aW9uLHNlbGYuZW1pdChcInByb2dyZXNzXCIsZSl9O2lmKHRoaXMuaGFzTGlzdGVuZXJzKFwicHJvZ3Jlc3NcIikpdHJ5e3hoci5vbnByb2dyZXNzPWhhbmRsZVByb2dyZXNzLmJpbmQobnVsbCxcImRvd25sb2FkXCIpLHhoci51cGxvYWQmJih4aHIudXBsb2FkLm9ucHJvZ3Jlc3M9aGFuZGxlUHJvZ3Jlc3MuYmluZChudWxsLFwidXBsb2FkXCIpKX1jYXRjaChlKXt9dHJ5e3RoaXMudXNlcm5hbWUmJnRoaXMucGFzc3dvcmQ/eGhyLm9wZW4odGhpcy5tZXRob2QsdGhpcy51cmwsITAsdGhpcy51c2VybmFtZSx0aGlzLnBhc3N3b3JkKTp4aHIub3Blbih0aGlzLm1ldGhvZCx0aGlzLnVybCwhMCl9Y2F0Y2goZXJyKXtyZXR1cm4gdGhpcy5jYWxsYmFjayhlcnIpfWlmKHRoaXMuX3dpdGhDcmVkZW50aWFscyYmKHhoci53aXRoQ3JlZGVudGlhbHM9ITApLCF0aGlzLl9mb3JtRGF0YSYmXCJHRVRcIiE9dGhpcy5tZXRob2QmJlwiSEVBRFwiIT10aGlzLm1ldGhvZCYmXCJzdHJpbmdcIiE9dHlwZW9mIGRhdGEmJiF0aGlzLl9pc0hvc3QoZGF0YSkpe3ZhciBjb250ZW50VHlwZT10aGlzLl9oZWFkZXJbXCJjb250ZW50LXR5cGVcIl0sc2VyaWFsaXplPXRoaXMuX3NlcmlhbGl6ZXJ8fHJlcXVlc3Quc2VyaWFsaXplW2NvbnRlbnRUeXBlP2NvbnRlbnRUeXBlLnNwbGl0KFwiO1wiKVswXTpcIlwiXTshc2VyaWFsaXplJiZpc0pTT04oY29udGVudFR5cGUpJiYoc2VyaWFsaXplPXJlcXVlc3Quc2VyaWFsaXplW1wiYXBwbGljYXRpb24vanNvblwiXSksc2VyaWFsaXplJiYoZGF0YT1zZXJpYWxpemUoZGF0YSkpfWZvcih2YXIgZmllbGQgaW4gdGhpcy5oZWFkZXIpbnVsbCE9dGhpcy5oZWFkZXJbZmllbGRdJiZ0aGlzLmhlYWRlci5oYXNPd25Qcm9wZXJ0eShmaWVsZCkmJnhoci5zZXRSZXF1ZXN0SGVhZGVyKGZpZWxkLHRoaXMuaGVhZGVyW2ZpZWxkXSk7cmV0dXJuIHRoaXMuX3Jlc3BvbnNlVHlwZSYmKHhoci5yZXNwb25zZVR5cGU9dGhpcy5fcmVzcG9uc2VUeXBlKSx0aGlzLmVtaXQoXCJyZXF1ZXN0XCIsdGhpcykseGhyLnNlbmQodm9pZCAwIT09ZGF0YT9kYXRhOm51bGwpLHRoaXN9LHJlcXVlc3QuYWdlbnQ9ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IGFnZW50QmFzZX0sW1wiR0VUXCIsXCJQT1NUXCIsXCJPUFRJT05TXCIsXCJQQVRDSFwiLFwiUFVUXCIsXCJERUxFVEVcIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2Qpe2FnZW50QmFzZS5wcm90b3R5cGVbbWV0aG9kLnRvTG93ZXJDYXNlKCldPWZ1bmN0aW9uKHVybCxmbil7dmFyIHJlcT1uZXcgcmVxdWVzdC5SZXF1ZXN0KG1ldGhvZCx1cmwpO3JldHVybiB0aGlzLl9zZXREZWZhdWx0cyhyZXEpLGZuJiZyZXEuZW5kKGZuKSxyZXF9fSksYWdlbnRCYXNlLnByb3RvdHlwZS5kZWw9YWdlbnRCYXNlLnByb3RvdHlwZS5kZWxldGUscmVxdWVzdC5nZXQ9ZnVuY3Rpb24odXJsLGRhdGEsZm4pe3ZhciByZXE9cmVxdWVzdChcIkdFVFwiLHVybCk7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgZGF0YSYmKGZuPWRhdGEsZGF0YT1udWxsKSxkYXRhJiZyZXEucXVlcnkoZGF0YSksZm4mJnJlcS5lbmQoZm4pLHJlcX0scmVxdWVzdC5oZWFkPWZ1bmN0aW9uKHVybCxkYXRhLGZuKXt2YXIgcmVxPXJlcXVlc3QoXCJIRUFEXCIsdXJsKTtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBkYXRhJiYoZm49ZGF0YSxkYXRhPW51bGwpLGRhdGEmJnJlcS5xdWVyeShkYXRhKSxmbiYmcmVxLmVuZChmbikscmVxfSxyZXF1ZXN0Lm9wdGlvbnM9ZnVuY3Rpb24odXJsLGRhdGEsZm4pe3ZhciByZXE9cmVxdWVzdChcIk9QVElPTlNcIix1cmwpO3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIGRhdGEmJihmbj1kYXRhLGRhdGE9bnVsbCksZGF0YSYmcmVxLnNlbmQoZGF0YSksZm4mJnJlcS5lbmQoZm4pLHJlcX0scmVxdWVzdC5kZWw9ZGVsLHJlcXVlc3QuZGVsZXRlPWRlbCxyZXF1ZXN0LnBhdGNoPWZ1bmN0aW9uKHVybCxkYXRhLGZuKXt2YXIgcmVxPXJlcXVlc3QoXCJQQVRDSFwiLHVybCk7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgZGF0YSYmKGZuPWRhdGEsZGF0YT1udWxsKSxkYXRhJiZyZXEuc2VuZChkYXRhKSxmbiYmcmVxLmVuZChmbikscmVxfSxyZXF1ZXN0LnBvc3Q9ZnVuY3Rpb24odXJsLGRhdGEsZm4pe3ZhciByZXE9cmVxdWVzdChcIlBPU1RcIix1cmwpO3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIGRhdGEmJihmbj1kYXRhLGRhdGE9bnVsbCksZGF0YSYmcmVxLnNlbmQoZGF0YSksZm4mJnJlcS5lbmQoZm4pLHJlcX0scmVxdWVzdC5wdXQ9ZnVuY3Rpb24odXJsLGRhdGEsZm4pe3ZhciByZXE9cmVxdWVzdChcIlBVVFwiLHVybCk7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgZGF0YSYmKGZuPWRhdGEsZGF0YT1udWxsKSxkYXRhJiZyZXEuc2VuZChkYXRhKSxmbiYmcmVxLmVuZChmbikscmVxfX0pLGNsaWVudF8xPWNsaWVudC5SZXF1ZXN0LGJ5dGVMZW5ndGhfMT1ieXRlTGVuZ3RoLHRvQnl0ZUFycmF5XzE9dG9CeXRlQXJyYXksZnJvbUJ5dGVBcnJheV8xPWZyb21CeXRlQXJyYXksbG9va3VwPVtdLHJldkxvb2t1cD1bXSxBcnI9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFVpbnQ4QXJyYXk/VWludDhBcnJheTpBcnJheSxjb2RlPVwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrL1wiLGk9MCxsZW49Y29kZS5sZW5ndGg7aTxsZW47KytpKWxvb2t1cFtpXT1jb2RlW2ldLHJldkxvb2t1cFtjb2RlLmNoYXJDb2RlQXQoaSldPWk7ZnVuY3Rpb24gcGxhY2VIb2xkZXJzQ291bnQoYjY0KXt2YXIgbGVuPWI2NC5sZW5ndGg7aWYobGVuJTQ+MCl0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHN0cmluZy4gTGVuZ3RoIG11c3QgYmUgYSBtdWx0aXBsZSBvZiA0XCIpO3JldHVyblwiPVwiPT09YjY0W2xlbi0yXT8yOlwiPVwiPT09YjY0W2xlbi0xXT8xOjB9ZnVuY3Rpb24gYnl0ZUxlbmd0aChiNjQpe3JldHVybiAzKmI2NC5sZW5ndGgvNC1wbGFjZUhvbGRlcnNDb3VudChiNjQpfWZ1bmN0aW9uIHRvQnl0ZUFycmF5KGI2NCl7dmFyIGksaixsLHRtcCxwbGFjZUhvbGRlcnMsYXJyLGxlbj1iNjQubGVuZ3RoO3BsYWNlSG9sZGVycz1wbGFjZUhvbGRlcnNDb3VudChiNjQpLGFycj1uZXcgQXJyKDMqbGVuLzQtcGxhY2VIb2xkZXJzKSxsPXBsYWNlSG9sZGVycz4wP2xlbi00Omxlbjt2YXIgTD0wO2ZvcihpPTAsaj0wO2k8bDtpKz00LGorPTMpdG1wPXJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpKV08PDE4fHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpKzEpXTw8MTJ8cmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkrMildPDw2fHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpKzMpXSxhcnJbTCsrXT10bXA+PjE2JjI1NSxhcnJbTCsrXT10bXA+PjgmMjU1LGFycltMKytdPTI1NSZ0bXA7cmV0dXJuIDI9PT1wbGFjZUhvbGRlcnM/KHRtcD1yZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSldPDwyfHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpKzEpXT4+NCxhcnJbTCsrXT0yNTUmdG1wKToxPT09cGxhY2VIb2xkZXJzJiYodG1wPXJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpKV08PDEwfHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpKzEpXTw8NHxyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSsyKV0+PjIsYXJyW0wrK109dG1wPj44JjI1NSxhcnJbTCsrXT0yNTUmdG1wKSxhcnJ9ZnVuY3Rpb24gdHJpcGxldFRvQmFzZTY0KG51bSl7cmV0dXJuIGxvb2t1cFtudW0+PjE4JjYzXStsb29rdXBbbnVtPj4xMiY2M10rbG9va3VwW251bT4+NiY2M10rbG9va3VwWzYzJm51bV19ZnVuY3Rpb24gZW5jb2RlQ2h1bmsodWludDgsc3RhcnQsZW5kKXtmb3IodmFyIHRtcCxvdXRwdXQ9W10saT1zdGFydDtpPGVuZDtpKz0zKXRtcD0odWludDhbaV08PDE2KSsodWludDhbaSsxXTw8OCkrdWludDhbaSsyXSxvdXRwdXQucHVzaCh0cmlwbGV0VG9CYXNlNjQodG1wKSk7cmV0dXJuIG91dHB1dC5qb2luKFwiXCIpfWZ1bmN0aW9uIGZyb21CeXRlQXJyYXkodWludDgpe2Zvcih2YXIgdG1wLGxlbj11aW50OC5sZW5ndGgsZXh0cmFCeXRlcz1sZW4lMyxvdXRwdXQ9XCJcIixwYXJ0cz1bXSxpPTAsbGVuMj1sZW4tZXh0cmFCeXRlcztpPGxlbjI7aSs9MTYzODMpcGFydHMucHVzaChlbmNvZGVDaHVuayh1aW50OCxpLGkrMTYzODM+bGVuMj9sZW4yOmkrMTYzODMpKTtyZXR1cm4gMT09PWV4dHJhQnl0ZXM/KHRtcD11aW50OFtsZW4tMV0sb3V0cHV0Kz1sb29rdXBbdG1wPj4yXSxvdXRwdXQrPWxvb2t1cFt0bXA8PDQmNjNdLG91dHB1dCs9XCI9PVwiKToyPT09ZXh0cmFCeXRlcyYmKHRtcD0odWludDhbbGVuLTJdPDw4KSt1aW50OFtsZW4tMV0sb3V0cHV0Kz1sb29rdXBbdG1wPj4xMF0sb3V0cHV0Kz1sb29rdXBbdG1wPj40JjYzXSxvdXRwdXQrPWxvb2t1cFt0bXA8PDImNjNdLG91dHB1dCs9XCI9XCIpLHBhcnRzLnB1c2gob3V0cHV0KSxwYXJ0cy5qb2luKFwiXCIpfXJldkxvb2t1cFtcIi1cIi5jaGFyQ29kZUF0KDApXT02MixyZXZMb29rdXBbXCJfXCIuY2hhckNvZGVBdCgwKV09NjM7dmFyIGJhc2U2NEpzPXtieXRlTGVuZ3RoOmJ5dGVMZW5ndGhfMSx0b0J5dGVBcnJheTp0b0J5dGVBcnJheV8xLGZyb21CeXRlQXJyYXk6ZnJvbUJ5dGVBcnJheV8xfTtmdW5jdGlvbiBwYWRkaW5nKHN0cil7dmFyIG1vZD1zdHIubGVuZ3RoJTQ7cmV0dXJuIDA9PT1tb2Q/c3RyOnN0cituZXcgQXJyYXkoMSsoNC1tb2QpKS5qb2luKFwiPVwiKX1mdW5jdGlvbiBzdHJpbmdUb0J5dGVBcnJheShzdHIpe2Zvcih2YXIgYXJyPW5ldyBBcnJheShzdHIubGVuZ3RoKSxhPTA7YTxzdHIubGVuZ3RoO2ErKylhcnJbYV09c3RyLmNoYXJDb2RlQXQoYSk7cmV0dXJuIGFycn1mdW5jdGlvbiBieXRlQXJyYXlUb1N0cmluZyhhcnJheSl7Zm9yKHZhciByZXN1bHQ9XCJcIixpPTA7aTxhcnJheS5sZW5ndGg7aSsrKXJlc3VsdCs9U3RyaW5nLmZyb21DaGFyQ29kZShhcnJheVtpXSk7cmV0dXJuIHJlc3VsdH1mdW5jdGlvbiBlbmNvZGUoc3RyKXtyZXR1cm4gYmFzZTY0SnMuZnJvbUJ5dGVBcnJheShzdHJpbmdUb0J5dGVBcnJheShzdHIpKS5yZXBsYWNlKC9cXCsvZyxcIi1cIikucmVwbGFjZSgvXFwvL2csXCJfXCIpfWZ1bmN0aW9uIGRlY29kZShzdHIpe3JldHVybiBzdHI9cGFkZGluZyhzdHIpLnJlcGxhY2UoLy0vZyxcIitcIikucmVwbGFjZSgvXy9nLFwiL1wiKSxieXRlQXJyYXlUb1N0cmluZyhiYXNlNjRKcy50b0J5dGVBcnJheShzdHIpKX12YXIgYmFzZTY0VXJsPXtlbmNvZGU6ZW5jb2RlLGRlY29kZTpkZWNvZGV9LHZlcnNpb249e3JhdzpcIjkuMTAuMlwifSx0b1N0cmluZz1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO2Z1bmN0aW9uIGF0dHJpYnV0ZShvLGF0dHIsdHlwZSx0ZXh0KXtpZih0eXBlPVwiYXJyYXlcIj09PXR5cGU/XCJvYmplY3RcIjp0eXBlLG8mJnR5cGVvZiBvW2F0dHJdIT09dHlwZSl0aHJvdyBuZXcgRXJyb3IodGV4dCl9ZnVuY3Rpb24gdmFyaWFibGUobyx0eXBlLHRleHQpe2lmKHR5cGVvZiBvIT09dHlwZSl0aHJvdyBuZXcgRXJyb3IodGV4dCl9ZnVuY3Rpb24gdmFsdWUobyx2YWx1ZXMsdGV4dCl7aWYoLTE9PT12YWx1ZXMuaW5kZXhPZihvKSl0aHJvdyBuZXcgRXJyb3IodGV4dCl9ZnVuY3Rpb24gY2hlY2sobyxjb25maWcsYXR0cmlidXRlcyl7aWYoY29uZmlnLm9wdGlvbmFsJiYhb3x8dmFyaWFibGUobyxjb25maWcudHlwZSxjb25maWcubWVzc2FnZSksXCJvYmplY3RcIj09PWNvbmZpZy50eXBlJiZhdHRyaWJ1dGVzKWZvcih2YXIga2V5cz1PYmplY3Qua2V5cyhhdHRyaWJ1dGVzKSxpbmRleD0wO2luZGV4PGtleXMubGVuZ3RoO2luZGV4Kyspe3ZhciBhPWtleXNbaW5kZXhdO2F0dHJpYnV0ZXNbYV0ub3B0aW9uYWwmJiFvW2FdfHxhdHRyaWJ1dGVzW2FdLmNvbmRpdGlvbiYmIWF0dHJpYnV0ZXNbYV0uY29uZGl0aW9uKG8pfHwoYXR0cmlidXRlKG8sYSxhdHRyaWJ1dGVzW2FdLnR5cGUsYXR0cmlidXRlc1thXS5tZXNzYWdlKSxhdHRyaWJ1dGVzW2FdLnZhbHVlcyYmdmFsdWUob1thXSxhdHRyaWJ1dGVzW2FdLnZhbHVlcyxhdHRyaWJ1dGVzW2FdLnZhbHVlX21lc3NhZ2UpKX19ZnVuY3Rpb24gaXNBcnJheShhcnJheSl7cmV0dXJuIHRoaXMuc3VwcG9ydHNJc0FycmF5KCk/QXJyYXkuaXNBcnJheShhcnJheSk6XCJbb2JqZWN0IEFycmF5XVwiPT09dG9TdHJpbmcuY2FsbChhcnJheSl9ZnVuY3Rpb24gc3VwcG9ydHNJc0FycmF5KCl7cmV0dXJuIG51bGwhPUFycmF5LmlzQXJyYXl9dmFyIGFzc2VydD17Y2hlY2s6Y2hlY2ssYXR0cmlidXRlOmF0dHJpYnV0ZSx2YXJpYWJsZTp2YXJpYWJsZSx2YWx1ZTp2YWx1ZSxpc0FycmF5OmlzQXJyYXksc3VwcG9ydHNJc0FycmF5OnN1cHBvcnRzSXNBcnJheX07ZnVuY3Rpb24gZ2V0KCl7cmV0dXJuIE9iamVjdC5hc3NpZ24/T2JqZWN0LmFzc2lnbjpvYmplY3RBc3NpZ25Qb2x5ZmlsbH1mdW5jdGlvbiBvYmplY3RBc3NpZ25Qb2x5ZmlsbCh0YXJnZXQpe2lmKG51bGw9PXRhcmdldCl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNvbnZlcnQgZmlyc3QgYXJndW1lbnQgdG8gb2JqZWN0XCIpO2Zvcih2YXIgdG89T2JqZWN0KHRhcmdldCksaT0xO2k8YXJndW1lbnRzLmxlbmd0aDtpKyspe3ZhciBuZXh0U291cmNlPWFyZ3VtZW50c1tpXTtpZihudWxsIT1uZXh0U291cmNlKWZvcih2YXIga2V5c0FycmF5PU9iamVjdC5rZXlzKE9iamVjdChuZXh0U291cmNlKSksbmV4dEluZGV4PTAsbGVuPWtleXNBcnJheS5sZW5ndGg7bmV4dEluZGV4PGxlbjtuZXh0SW5kZXgrKyl7dmFyIG5leHRLZXk9a2V5c0FycmF5W25leHRJbmRleF0sZGVzYz1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG5leHRTb3VyY2UsbmV4dEtleSk7dm9pZCAwIT09ZGVzYyYmZGVzYy5lbnVtZXJhYmxlJiYodG9bbmV4dEtleV09bmV4dFNvdXJjZVtuZXh0S2V5XSl9fXJldHVybiB0b312YXIgb2JqZWN0QXNzaWduPXtnZXQ6Z2V0LG9iamVjdEFzc2lnblBvbHlmaWxsOm9iamVjdEFzc2lnblBvbHlmaWxsfTtmdW5jdGlvbiBwaWNrKG9iamVjdCxrZXlzKXtyZXR1cm4ga2V5cy5yZWR1Y2UoZnVuY3Rpb24ocHJldixrZXkpe3JldHVybiBvYmplY3Rba2V5XSYmKHByZXZba2V5XT1vYmplY3Rba2V5XSkscHJldn0se30pfWZ1bmN0aW9uIGdldEtleXNOb3RJbihvYmosYWxsb3dlZEtleXMpe3ZhciBub3RBbGxvd2VkPVtdO2Zvcih2YXIga2V5IGluIG9iaiktMT09PWFsbG93ZWRLZXlzLmluZGV4T2Yoa2V5KSYmbm90QWxsb3dlZC5wdXNoKGtleSk7cmV0dXJuIG5vdEFsbG93ZWR9ZnVuY3Rpb24gb2JqZWN0VmFsdWVzKG9iail7dmFyIHZhbHVlcz1bXTtmb3IodmFyIGtleSBpbiBvYmopdmFsdWVzLnB1c2gob2JqW2tleV0pO3JldHVybiB2YWx1ZXN9ZnVuY3Rpb24gZXh0ZW5kKCl7dmFyIHBhcmFtcz1vYmplY3RWYWx1ZXMoYXJndW1lbnRzKTtyZXR1cm4gcGFyYW1zLnVuc2hpZnQoe30pLG9iamVjdEFzc2lnbi5nZXQoKS5hcHBseSh2b2lkIDAscGFyYW1zKX1mdW5jdGlvbiBtZXJnZShvYmplY3Qsa2V5cyl7cmV0dXJue2Jhc2U6a2V5cz9waWNrKG9iamVjdCxrZXlzKTpvYmplY3Qsd2l0aDpmdW5jdGlvbihvYmplY3QyLGtleXMyKXtyZXR1cm4gb2JqZWN0Mj1rZXlzMj9waWNrKG9iamVjdDIsa2V5czIpOm9iamVjdDIsZXh0ZW5kKHRoaXMuYmFzZSxvYmplY3QyKX19fWZ1bmN0aW9uIGJsYWNrbGlzdChvYmplY3QsYmxhY2tsaXN0ZWRLZXlzKXtyZXR1cm4gT2JqZWN0LmtleXMob2JqZWN0KS5yZWR1Y2UoZnVuY3Rpb24ocCxrZXkpe3JldHVybi0xPT09YmxhY2tsaXN0ZWRLZXlzLmluZGV4T2Yoa2V5KSYmKHBba2V5XT1vYmplY3Rba2V5XSkscH0se30pfWZ1bmN0aW9uIGNhbWVsVG9TbmFrZShzdHIpe2Zvcih2YXIgY29kZSxuZXdLZXk9XCJcIixpbmRleD0wLHdhc1ByZXZOdW1iZXI9ITAsd2FzUHJldlVwcGVyY2FzZT0hMDtpbmRleDxzdHIubGVuZ3RoOyljb2RlPXN0ci5jaGFyQ29kZUF0KGluZGV4KSwhd2FzUHJldlVwcGVyY2FzZSYmY29kZT49NjUmJmNvZGU8PTkwfHwhd2FzUHJldk51bWJlciYmY29kZT49NDgmJmNvZGU8PTU3PyhuZXdLZXkrPVwiX1wiLG5ld0tleSs9c3RyW2luZGV4XS50b0xvd2VyQ2FzZSgpKTpuZXdLZXkrPXN0cltpbmRleF0udG9Mb3dlckNhc2UoKSx3YXNQcmV2TnVtYmVyPWNvZGU+PTQ4JiZjb2RlPD01Nyx3YXNQcmV2VXBwZXJjYXNlPWNvZGU+PTY1JiZjb2RlPD05MCxpbmRleCsrO3JldHVybiBuZXdLZXl9ZnVuY3Rpb24gc25ha2VUb0NhbWVsKHN0cil7dmFyIHBhcnRzPXN0ci5zcGxpdChcIl9cIik7cmV0dXJuIHBhcnRzLnJlZHVjZShmdW5jdGlvbihwLGMpe3JldHVybiBwK2MuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrYy5zbGljZSgxKX0scGFydHMuc2hpZnQoKSl9ZnVuY3Rpb24gdG9TbmFrZUNhc2Uob2JqZWN0LGV4Y2VwdGlvbnMpe3JldHVyblwib2JqZWN0XCIhPXR5cGVvZiBvYmplY3R8fGFzc2VydC5pc0FycmF5KG9iamVjdCl8fG51bGw9PT1vYmplY3Q/b2JqZWN0OihleGNlcHRpb25zPWV4Y2VwdGlvbnN8fFtdLE9iamVjdC5rZXlzKG9iamVjdCkucmVkdWNlKGZ1bmN0aW9uKHAsa2V5KXtyZXR1cm4gcFstMT09PWV4Y2VwdGlvbnMuaW5kZXhPZihrZXkpP2NhbWVsVG9TbmFrZShrZXkpOmtleV09dG9TbmFrZUNhc2Uob2JqZWN0W2tleV0pLHB9LHt9KSl9ZnVuY3Rpb24gdG9DYW1lbENhc2Uob2JqZWN0LGV4Y2VwdGlvbnMsb3B0aW9ucyl7cmV0dXJuXCJvYmplY3RcIiE9dHlwZW9mIG9iamVjdHx8YXNzZXJ0LmlzQXJyYXkob2JqZWN0KXx8bnVsbD09PW9iamVjdD9vYmplY3Q6KGV4Y2VwdGlvbnM9ZXhjZXB0aW9uc3x8W10sb3B0aW9ucz1vcHRpb25zfHx7fSxPYmplY3Qua2V5cyhvYmplY3QpLnJlZHVjZShmdW5jdGlvbihwLGtleSl7dmFyIG5ld0tleT0tMT09PWV4Y2VwdGlvbnMuaW5kZXhPZihrZXkpP3NuYWtlVG9DYW1lbChrZXkpOmtleTtyZXR1cm4gcFtuZXdLZXldPXRvQ2FtZWxDYXNlKG9iamVjdFtuZXdLZXldfHxvYmplY3Rba2V5XSxbXSxvcHRpb25zKSxvcHRpb25zLmtlZXBPcmlnaW5hbCYmKHBba2V5XT10b0NhbWVsQ2FzZShvYmplY3Rba2V5XSxbXSxvcHRpb25zKSkscH0se30pKX1mdW5jdGlvbiBnZXRMb2NhdGlvbkZyb21VcmwoaHJlZil7dmFyIG1hdGNoPWhyZWYubWF0Y2goL14oaHR0cHM/OnxmaWxlOilcXC9cXC8oKFteOlxcLz8jXSopKD86OihbMC05XSspKT8pKFtcXC9dezAsMX1bXj8jXSopKFxcP1teI10qfCkoIy4qfCkkLyk7cmV0dXJuIG1hdGNoJiZ7aHJlZjpocmVmLHByb3RvY29sOm1hdGNoWzFdLGhvc3Q6bWF0Y2hbMl0saG9zdG5hbWU6bWF0Y2hbM10scG9ydDptYXRjaFs0XSxwYXRobmFtZTptYXRjaFs1XSxzZWFyY2g6bWF0Y2hbNl0saGFzaDptYXRjaFs3XX19ZnVuY3Rpb24gZ2V0T3JpZ2luRnJvbVVybCh1cmwpe2lmKHVybCl7dmFyIHBhcnNlZD1nZXRMb2NhdGlvbkZyb21VcmwodXJsKSxvcmlnaW49cGFyc2VkLnByb3RvY29sK1wiLy9cIitwYXJzZWQuaG9zdG5hbWU7cmV0dXJuIHBhcnNlZC5wb3J0JiYob3JpZ2luKz1cIjpcIitwYXJzZWQucG9ydCksb3JpZ2lufX1mdW5jdGlvbiB0cmltKG9wdGlvbnMsa2V5KXt2YXIgdHJpbW1lZD1leHRlbmQob3B0aW9ucyk7cmV0dXJuIG9wdGlvbnNba2V5XSYmKHRyaW1tZWRba2V5XT1vcHRpb25zW2tleV0udHJpbSgpKSx0cmltbWVkfWZ1bmN0aW9uIHRyaW1NdWx0aXBsZShvcHRpb25zLGtleXMpe3JldHVybiBrZXlzLnJlZHVjZSh0cmltLG9wdGlvbnMpfWZ1bmN0aW9uIHRyaW1Vc2VyRGV0YWlscyhvcHRpb25zKXtyZXR1cm4gdHJpbU11bHRpcGxlKG9wdGlvbnMsW1widXNlcm5hbWVcIixcImVtYWlsXCIsXCJwaG9uZU51bWJlclwiXSl9dmFyIG9iamVjdEhlbHBlcj17dG9TbmFrZUNhc2U6dG9TbmFrZUNhc2UsdG9DYW1lbENhc2U6dG9DYW1lbENhc2UsYmxhY2tsaXN0OmJsYWNrbGlzdCxtZXJnZTptZXJnZSxwaWNrOnBpY2ssZ2V0S2V5c05vdEluOmdldEtleXNOb3RJbixleHRlbmQ6ZXh0ZW5kLGdldE9yaWdpbkZyb21Vcmw6Z2V0T3JpZ2luRnJvbVVybCxnZXRMb2NhdGlvbkZyb21Vcmw6Z2V0TG9jYXRpb25Gcm9tVXJsLHRyaW1Vc2VyRGV0YWlsczp0cmltVXNlckRldGFpbHN9O2Z1bmN0aW9uIFJlcXVlc3RXcmFwcGVyKHJlcSl7dGhpcy5yZXF1ZXN0PXJlcSx0aGlzLm1ldGhvZD1yZXEubWV0aG9kLHRoaXMudXJsPXJlcS51cmwsdGhpcy5ib2R5PXJlcS5fZGF0YSx0aGlzLmhlYWRlcnM9cmVxLl9oZWFkZXJ9ZnVuY3Rpb24gUmVxdWVzdE9iaihyZXEpe3RoaXMucmVxdWVzdD1yZXF9ZnVuY3Rpb24gUmVxdWVzdEJ1aWxkZXIob3B0aW9ucyl7dGhpcy5fc2VuZFRlbGVtZXRyeT0hMSE9PW9wdGlvbnMuX3NlbmRUZWxlbWV0cnl8fG9wdGlvbnMuX3NlbmRUZWxlbWV0cnksdGhpcy5fdGVsZW1ldHJ5SW5mbz1vcHRpb25zLl90ZWxlbWV0cnlJbmZvfHxudWxsLHRoaXMuX3RpbWVzVG9SZXRyeUZhaWxlZFJlcXVlc3RzPW9wdGlvbnMuX3RpbWVzVG9SZXRyeUZhaWxlZFJlcXVlc3RzLHRoaXMuaGVhZGVycz1vcHRpb25zLmhlYWRlcnN8fHt9LHRoaXMuX3VuaXZlcnNhbExvZ2luUGFnZT1vcHRpb25zLnVuaXZlcnNhbExvZ2luUGFnZX1mdW5jdGlvbiByZWRpcmVjdCh1cmwpe2dldFdpbmRvdygpLmxvY2F0aW9uPXVybH1mdW5jdGlvbiBnZXREb2N1bWVudCgpe3JldHVybiBnZXRXaW5kb3coKS5kb2N1bWVudH1mdW5jdGlvbiBnZXRXaW5kb3coKXtyZXR1cm4gd2luZG93fWZ1bmN0aW9uIGdldE9yaWdpbigpe3ZhciBsb2NhdGlvbj1nZXRXaW5kb3coKS5sb2NhdGlvbixvcmlnaW49bG9jYXRpb24ub3JpZ2luO3JldHVybiBvcmlnaW58fChvcmlnaW49b2JqZWN0SGVscGVyLmdldE9yaWdpbkZyb21VcmwobG9jYXRpb24uaHJlZikpLG9yaWdpbn1SZXF1ZXN0V3JhcHBlci5wcm90b3R5cGUuYWJvcnQ9ZnVuY3Rpb24oKXt0aGlzLnJlcXVlc3QuYWJvcnQoKX0sUmVxdWVzdFdyYXBwZXIucHJvdG90eXBlLmdldE1ldGhvZD1mdW5jdGlvbigpe3JldHVybiB0aGlzLm1ldGhvZH0sUmVxdWVzdFdyYXBwZXIucHJvdG90eXBlLmdldEJvZHk9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5ib2R5fSxSZXF1ZXN0V3JhcHBlci5wcm90b3R5cGUuZ2V0VXJsPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudXJsfSxSZXF1ZXN0V3JhcHBlci5wcm90b3R5cGUuZ2V0SGVhZGVycz1mdW5jdGlvbigpe3JldHVybiB0aGlzLmhlYWRlcnN9LFJlcXVlc3RPYmoucHJvdG90eXBlLnNldD1mdW5jdGlvbihrZXksdmFsdWUpe3JldHVybiB0aGlzLnJlcXVlc3Q9dGhpcy5yZXF1ZXN0LnNldChrZXksdmFsdWUpLHRoaXN9LFJlcXVlc3RPYmoucHJvdG90eXBlLnNlbmQ9ZnVuY3Rpb24oYm9keSl7cmV0dXJuIHRoaXMucmVxdWVzdD10aGlzLnJlcXVlc3Quc2VuZChvYmplY3RIZWxwZXIudHJpbVVzZXJEZXRhaWxzKGJvZHkpKSx0aGlzfSxSZXF1ZXN0T2JqLnByb3RvdHlwZS53aXRoQ3JlZGVudGlhbHM9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5yZXF1ZXN0PXRoaXMucmVxdWVzdC53aXRoQ3JlZGVudGlhbHMoKSx0aGlzfSxSZXF1ZXN0T2JqLnByb3RvdHlwZS5lbmQ9ZnVuY3Rpb24oY2Ipe3JldHVybiB0aGlzLnJlcXVlc3Q9dGhpcy5yZXF1ZXN0LmVuZChjYiksbmV3IFJlcXVlc3RXcmFwcGVyKHRoaXMucmVxdWVzdCl9LFJlcXVlc3RCdWlsZGVyLnByb3RvdHlwZS5zZXRDb21tb25Db25maWd1cmF0aW9uPWZ1bmN0aW9uKG9uZ29pbmdSZXF1ZXN0LG9wdGlvbnMpe2lmKG9wdGlvbnM9b3B0aW9uc3x8e30sdGhpcy5fdGltZXNUb1JldHJ5RmFpbGVkUmVxdWVzdHM+MCYmKG9uZ29pbmdSZXF1ZXN0PW9uZ29pbmdSZXF1ZXN0LnJldHJ5KHRoaXMuX3RpbWVzVG9SZXRyeUZhaWxlZFJlcXVlc3RzKSksb3B0aW9ucy5ub0hlYWRlcnMpcmV0dXJuIG9uZ29pbmdSZXF1ZXN0O3ZhciBoZWFkZXJzPXRoaXMuaGVhZGVycztvbmdvaW5nUmVxdWVzdD1vbmdvaW5nUmVxdWVzdC5zZXQoXCJDb250ZW50LVR5cGVcIixcImFwcGxpY2F0aW9uL2pzb25cIik7Zm9yKHZhciBrZXlzPU9iamVjdC5rZXlzKHRoaXMuaGVhZGVycyksYT0wO2E8a2V5cy5sZW5ndGg7YSsrKW9uZ29pbmdSZXF1ZXN0PW9uZ29pbmdSZXF1ZXN0LnNldChrZXlzW2FdLGhlYWRlcnNba2V5c1thXV0pO3JldHVybiB0aGlzLl9zZW5kVGVsZW1ldHJ5JiYob25nb2luZ1JlcXVlc3Q9b25nb2luZ1JlcXVlc3Quc2V0KFwiQXV0aDAtQ2xpZW50XCIsdGhpcy5nZXRUZWxlbWV0cnlEYXRhKCkpKSxvbmdvaW5nUmVxdWVzdH0sUmVxdWVzdEJ1aWxkZXIucHJvdG90eXBlLmdldFRlbGVtZXRyeURhdGE9ZnVuY3Rpb24oKXt2YXIgdGVsZW1ldHJ5TmFtZT10aGlzLl91bml2ZXJzYWxMb2dpblBhZ2U/XCJhdXRoMC5qcy11bHBcIjpcImF1dGgwLmpzXCIsY2xpZW50SW5mbz10aGlzLl90ZWxlbWV0cnlJbmZvfHx7bmFtZTp0ZWxlbWV0cnlOYW1lLHZlcnNpb246dmVyc2lvbi5yYXd9LGpzb25DbGllbnRJbmZvPUpTT04uc3RyaW5naWZ5KGNsaWVudEluZm8pO3JldHVybiBiYXNlNjRVcmwuZW5jb2RlKGpzb25DbGllbnRJbmZvKX0sUmVxdWVzdEJ1aWxkZXIucHJvdG90eXBlLmdldD1mdW5jdGlvbih1cmwsb3B0aW9ucyl7cmV0dXJuIG5ldyBSZXF1ZXN0T2JqKHRoaXMuc2V0Q29tbW9uQ29uZmlndXJhdGlvbihjbGllbnQuZ2V0KHVybCksb3B0aW9ucykpfSxSZXF1ZXN0QnVpbGRlci5wcm90b3R5cGUucG9zdD1mdW5jdGlvbih1cmwsb3B0aW9ucyl7cmV0dXJuIG5ldyBSZXF1ZXN0T2JqKHRoaXMuc2V0Q29tbW9uQ29uZmlndXJhdGlvbihjbGllbnQucG9zdCh1cmwpLG9wdGlvbnMpKX0sUmVxdWVzdEJ1aWxkZXIucHJvdG90eXBlLnBhdGNoPWZ1bmN0aW9uKHVybCxvcHRpb25zKXtyZXR1cm4gbmV3IFJlcXVlc3RPYmoodGhpcy5zZXRDb21tb25Db25maWd1cmF0aW9uKGNsaWVudC5wYXRjaCh1cmwpLG9wdGlvbnMpKX07dmFyIHdpbmRvd0hhbmRsZXI9e3JlZGlyZWN0OnJlZGlyZWN0LGdldERvY3VtZW50OmdldERvY3VtZW50LGdldFdpbmRvdzpnZXRXaW5kb3csZ2V0T3JpZ2luOmdldE9yaWdpbn07ZnVuY3Rpb24gRHVtbXlTdG9yYWdlKCl7fUR1bW15U3RvcmFnZS5wcm90b3R5cGUuZ2V0SXRlbT1mdW5jdGlvbigpe3JldHVybiBudWxsfSxEdW1teVN0b3JhZ2UucHJvdG90eXBlLnJlbW92ZUl0ZW09ZnVuY3Rpb24oKXt9LER1bW15U3RvcmFnZS5wcm90b3R5cGUuc2V0SXRlbT1mdW5jdGlvbigpe307dmFyIGpzX2Nvb2tpZT1jcmVhdGVDb21tb25qc01vZHVsZShmdW5jdGlvbihtb2R1bGUsZXhwb3J0cyl7IWZ1bmN0aW9uKGZhY3Rvcnkpe2lmKG1vZHVsZS5leHBvcnRzPWZhY3RvcnkoKSwhITApe3ZhciBPbGRDb29raWVzPXdpbmRvdy5Db29raWVzLGFwaT13aW5kb3cuQ29va2llcz1mYWN0b3J5KCk7YXBpLm5vQ29uZmxpY3Q9ZnVuY3Rpb24oKXtyZXR1cm4gd2luZG93LkNvb2tpZXM9T2xkQ29va2llcyxhcGl9fX0oZnVuY3Rpb24oKXtmdW5jdGlvbiBleHRlbmQoKXtmb3IodmFyIGk9MCxyZXN1bHQ9e307aTxhcmd1bWVudHMubGVuZ3RoO2krKyl7dmFyIGF0dHJpYnV0ZXM9YXJndW1lbnRzW2ldO2Zvcih2YXIga2V5IGluIGF0dHJpYnV0ZXMpcmVzdWx0W2tleV09YXR0cmlidXRlc1trZXldfXJldHVybiByZXN1bHR9cmV0dXJuIGZ1bmN0aW9uIGluaXQoY29udmVydGVyKXtmdW5jdGlvbiBhcGkoa2V5LHZhbHVlLGF0dHJpYnV0ZXMpe3ZhciByZXN1bHQ7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGRvY3VtZW50KXtpZihhcmd1bWVudHMubGVuZ3RoPjEpe2lmKFwibnVtYmVyXCI9PXR5cGVvZihhdHRyaWJ1dGVzPWV4dGVuZCh7cGF0aDpcIi9cIn0sYXBpLmRlZmF1bHRzLGF0dHJpYnV0ZXMpKS5leHBpcmVzKXt2YXIgZXhwaXJlcz1uZXcgRGF0ZTtleHBpcmVzLnNldE1pbGxpc2Vjb25kcyhleHBpcmVzLmdldE1pbGxpc2Vjb25kcygpKzg2NGU1KmF0dHJpYnV0ZXMuZXhwaXJlcyksYXR0cmlidXRlcy5leHBpcmVzPWV4cGlyZXN9YXR0cmlidXRlcy5leHBpcmVzPWF0dHJpYnV0ZXMuZXhwaXJlcz9hdHRyaWJ1dGVzLmV4cGlyZXMudG9VVENTdHJpbmcoKTpcIlwiO3RyeXtyZXN1bHQ9SlNPTi5zdHJpbmdpZnkodmFsdWUpLC9eW1xce1xcW10vLnRlc3QocmVzdWx0KSYmKHZhbHVlPXJlc3VsdCl9Y2F0Y2goZSl7fXZhbHVlPWNvbnZlcnRlci53cml0ZT9jb252ZXJ0ZXIud3JpdGUodmFsdWUsa2V5KTplbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKHZhbHVlKSkucmVwbGFjZSgvJSgyM3wyNHwyNnwyQnwzQXwzQ3wzRXwzRHwyRnwzRnw0MHw1Qnw1RHw1RXw2MHw3Qnw3RHw3QykvZyxkZWNvZGVVUklDb21wb25lbnQpLGtleT0oa2V5PShrZXk9ZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyhrZXkpKSkucmVwbGFjZSgvJSgyM3wyNHwyNnwyQnw1RXw2MHw3QykvZyxkZWNvZGVVUklDb21wb25lbnQpKS5yZXBsYWNlKC9bXFwoXFwpXS9nLGVzY2FwZSk7dmFyIHN0cmluZ2lmaWVkQXR0cmlidXRlcz1cIlwiO2Zvcih2YXIgYXR0cmlidXRlTmFtZSBpbiBhdHRyaWJ1dGVzKWF0dHJpYnV0ZXNbYXR0cmlidXRlTmFtZV0mJihzdHJpbmdpZmllZEF0dHJpYnV0ZXMrPVwiOyBcIithdHRyaWJ1dGVOYW1lLCEwIT09YXR0cmlidXRlc1thdHRyaWJ1dGVOYW1lXSYmKHN0cmluZ2lmaWVkQXR0cmlidXRlcys9XCI9XCIrYXR0cmlidXRlc1thdHRyaWJ1dGVOYW1lXSkpO3JldHVybiBkb2N1bWVudC5jb29raWU9a2V5K1wiPVwiK3ZhbHVlK3N0cmluZ2lmaWVkQXR0cmlidXRlc31rZXl8fChyZXN1bHQ9e30pO2Zvcih2YXIgY29va2llcz1kb2N1bWVudC5jb29raWU/ZG9jdW1lbnQuY29va2llLnNwbGl0KFwiOyBcIik6W10scmRlY29kZT0vKCVbMC05QS1aXXsyfSkrL2csaT0wO2k8Y29va2llcy5sZW5ndGg7aSsrKXt2YXIgcGFydHM9Y29va2llc1tpXS5zcGxpdChcIj1cIiksY29va2llPXBhcnRzLnNsaWNlKDEpLmpvaW4oXCI9XCIpO3RoaXMuanNvbnx8J1wiJyE9PWNvb2tpZS5jaGFyQXQoMCl8fChjb29raWU9Y29va2llLnNsaWNlKDEsLTEpKTt0cnl7dmFyIG5hbWU9cGFydHNbMF0ucmVwbGFjZShyZGVjb2RlLGRlY29kZVVSSUNvbXBvbmVudCk7aWYoY29va2llPWNvbnZlcnRlci5yZWFkP2NvbnZlcnRlci5yZWFkKGNvb2tpZSxuYW1lKTpjb252ZXJ0ZXIoY29va2llLG5hbWUpfHxjb29raWUucmVwbGFjZShyZGVjb2RlLGRlY29kZVVSSUNvbXBvbmVudCksdGhpcy5qc29uKXRyeXtjb29raWU9SlNPTi5wYXJzZShjb29raWUpfWNhdGNoKGUpe31pZihrZXk9PT1uYW1lKXtyZXN1bHQ9Y29va2llO2JyZWFrfWtleXx8KHJlc3VsdFtuYW1lXT1jb29raWUpfWNhdGNoKGUpe319cmV0dXJuIHJlc3VsdH19cmV0dXJuIGFwaS5zZXQ9YXBpLGFwaS5nZXQ9ZnVuY3Rpb24oa2V5KXtyZXR1cm4gYXBpLmNhbGwoYXBpLGtleSl9LGFwaS5nZXRKU09OPWZ1bmN0aW9uKCl7cmV0dXJuIGFwaS5hcHBseSh7anNvbjohMH0sW10uc2xpY2UuY2FsbChhcmd1bWVudHMpKX0sYXBpLmRlZmF1bHRzPXt9LGFwaS5yZW1vdmU9ZnVuY3Rpb24oa2V5LGF0dHJpYnV0ZXMpe2FwaShrZXksXCJcIixleHRlbmQoYXR0cmlidXRlcyx7ZXhwaXJlczotMX0pKX0sYXBpLndpdGhDb252ZXJ0ZXI9aW5pdCxhcGl9KGZ1bmN0aW9uKCl7fSl9KX0pO2Z1bmN0aW9uIENvb2tpZVN0b3JhZ2UoKXt9ZnVuY3Rpb24gV2FybihvcHRpb25zKXt0aGlzLmRpc2FibGVXYXJuaW5ncz1vcHRpb25zLmRpc2FibGVXYXJuaW5nc31mdW5jdGlvbiBTdG9yYWdlSGFuZGxlcihvcHRpb25zKXtpZih0aGlzLndhcm49bmV3IFdhcm4oe30pLHRoaXMuc3RvcmFnZT1uZXcgQ29va2llU3RvcmFnZSwhMD09PW9wdGlvbnMuX190cnlMb2NhbFN0b3JhZ2VGaXJzdCl0cnl7dmFyIGxvY2FsU3RvcmFnZT13aW5kb3dIYW5kbGVyLmdldFdpbmRvdygpLmxvY2FsU3RvcmFnZTtsb2NhbFN0b3JhZ2UmJih0aGlzLnN0b3JhZ2U9bG9jYWxTdG9yYWdlKX1jYXRjaChlKXt0aGlzLndhcm4ud2FybmluZyhlKSx0aGlzLndhcm4ud2FybmluZyhcIkNhbid0IHVzZSBsb2NhbFN0b3JhZ2UuIFVzaW5nIENvb2tpZVN0b3JhZ2UgaW5zdGVhZC5cIil9fWZ1bmN0aW9uIFN0b3JhZ2Uob3B0aW9ucyl7dGhpcy5oYW5kbGVyPW5ldyBTdG9yYWdlSGFuZGxlcihvcHRpb25zKX1mdW5jdGlvbiBTU09EYXRhU3RvcmFnZShvcHRpb25zKXt0aGlzLnN0b3JhZ2U9bmV3IFN0b3JhZ2Uob3B0aW9ucyl9ZnVuY3Rpb24gYnVpbGRSZXNwb25zZShlcnJvcixkZXNjcmlwdGlvbil7cmV0dXJue2Vycm9yOmVycm9yLGVycm9yRGVzY3JpcHRpb246ZGVzY3JpcHRpb259fWZ1bmN0aW9uIGludmFsaWRUb2tlbihkZXNjcmlwdGlvbil7cmV0dXJuIGJ1aWxkUmVzcG9uc2UoXCJpbnZhbGlkX3Rva2VuXCIsZGVzY3JpcHRpb24pfUNvb2tpZVN0b3JhZ2UucHJvdG90eXBlLmdldEl0ZW09ZnVuY3Rpb24oa2V5KXtyZXR1cm4ganNfY29va2llLmdldChrZXkpfSxDb29raWVTdG9yYWdlLnByb3RvdHlwZS5yZW1vdmVJdGVtPWZ1bmN0aW9uKGtleSl7anNfY29va2llLnJlbW92ZShrZXkpfSxDb29raWVTdG9yYWdlLnByb3RvdHlwZS5zZXRJdGVtPWZ1bmN0aW9uKGtleSx2YWx1ZSxvcHRpb25zKXt2YXIgcGFyYW1zPW9iamVjdEhlbHBlci5leHRlbmQoe2V4cGlyZXM6MX0sb3B0aW9ucyk7anNfY29va2llLnNldChrZXksdmFsdWUscGFyYW1zKX0sV2Fybi5wcm90b3R5cGUud2FybmluZz1mdW5jdGlvbihtZXNzYWdlKXt0aGlzLmRpc2FibGVXYXJuaW5nc3x8Y29uc29sZS53YXJuKG1lc3NhZ2UpfSxTdG9yYWdlSGFuZGxlci5wcm90b3R5cGUuZmFpbG92ZXI9ZnVuY3Rpb24oKXt0aGlzLnN0b3JhZ2UgaW5zdGFuY2VvZiBEdW1teVN0b3JhZ2U/dGhpcy53YXJuLndhcm5pbmcoXCJEdW1teVN0b3JhZ2U6IGlnbm9yZSBmYWlsb3ZlclwiKTp0aGlzLnN0b3JhZ2UgaW5zdGFuY2VvZiBDb29raWVTdG9yYWdlPyh0aGlzLndhcm4ud2FybmluZyhcIkNvb2tpZVN0b3JhZ2U6IGZhaWxpbmcgb3ZlciBEdW1teVN0b3JhZ2VcIiksdGhpcy5zdG9yYWdlPW5ldyBEdW1teVN0b3JhZ2UpOih0aGlzLndhcm4ud2FybmluZyhcIkxvY2FsU3RvcmFnZTogZmFpbGluZyBvdmVyIENvb2tpZVN0b3JhZ2VcIiksdGhpcy5zdG9yYWdlPW5ldyBDb29raWVTdG9yYWdlKX0sU3RvcmFnZUhhbmRsZXIucHJvdG90eXBlLmdldEl0ZW09ZnVuY3Rpb24oa2V5KXt0cnl7cmV0dXJuIHRoaXMuc3RvcmFnZS5nZXRJdGVtKGtleSl9Y2F0Y2goZSl7cmV0dXJuIHRoaXMud2Fybi53YXJuaW5nKGUpLHRoaXMuZmFpbG92ZXIoKSx0aGlzLmdldEl0ZW0oa2V5KX19LFN0b3JhZ2VIYW5kbGVyLnByb3RvdHlwZS5yZW1vdmVJdGVtPWZ1bmN0aW9uKGtleSl7dHJ5e3JldHVybiB0aGlzLnN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpfWNhdGNoKGUpe3JldHVybiB0aGlzLndhcm4ud2FybmluZyhlKSx0aGlzLmZhaWxvdmVyKCksdGhpcy5yZW1vdmVJdGVtKGtleSl9fSxTdG9yYWdlSGFuZGxlci5wcm90b3R5cGUuc2V0SXRlbT1mdW5jdGlvbihrZXksdmFsdWUsb3B0aW9ucyl7dHJ5e3JldHVybiB0aGlzLnN0b3JhZ2Uuc2V0SXRlbShrZXksdmFsdWUsb3B0aW9ucyl9Y2F0Y2goZSl7cmV0dXJuIHRoaXMud2Fybi53YXJuaW5nKGUpLHRoaXMuZmFpbG92ZXIoKSx0aGlzLnNldEl0ZW0oa2V5LHZhbHVlLG9wdGlvbnMpfX0sU3RvcmFnZS5wcm90b3R5cGUuZ2V0SXRlbT1mdW5jdGlvbihrZXkpe3ZhciB2YWx1ZT10aGlzLmhhbmRsZXIuZ2V0SXRlbShrZXkpO3RyeXtyZXR1cm4gSlNPTi5wYXJzZSh2YWx1ZSl9Y2F0Y2goXyl7cmV0dXJuIHZhbHVlfX0sU3RvcmFnZS5wcm90b3R5cGUucmVtb3ZlSXRlbT1mdW5jdGlvbihrZXkpe3JldHVybiB0aGlzLmhhbmRsZXIucmVtb3ZlSXRlbShrZXkpfSxTdG9yYWdlLnByb3RvdHlwZS5zZXRJdGVtPWZ1bmN0aW9uKGtleSx2YWx1ZSxvcHRpb25zKXt2YXIganNvbj1KU09OLnN0cmluZ2lmeSh2YWx1ZSk7cmV0dXJuIHRoaXMuaGFuZGxlci5zZXRJdGVtKGtleSxqc29uLG9wdGlvbnMpfSxTU09EYXRhU3RvcmFnZS5wcm90b3R5cGUuc2V0PWZ1bmN0aW9uKGNvbm5lY3Rpb24sc3ViKXt2YXIgc3NvZGF0YT17bGFzdFVzZWRDb25uZWN0aW9uOmNvbm5lY3Rpb24sbGFzdFVzZWRTdWI6c3VifTt0aGlzLnN0b3JhZ2Uuc2V0SXRlbShcImF1dGgwLnNzb2RhdGFcIixKU09OLnN0cmluZ2lmeShzc29kYXRhKSl9LFNTT0RhdGFTdG9yYWdlLnByb3RvdHlwZS5nZXQ9ZnVuY3Rpb24oKXt2YXIgc3NvZGF0YT10aGlzLnN0b3JhZ2UuZ2V0SXRlbShcImF1dGgwLnNzb2RhdGFcIik7aWYoc3NvZGF0YSlyZXR1cm4gSlNPTi5wYXJzZShzc29kYXRhKX07dmFyIGVycm9yPXtidWlsZFJlc3BvbnNlOmJ1aWxkUmVzcG9uc2UsaW52YWxpZFRva2VuOmludmFsaWRUb2tlbn07ZnVuY3Rpb24gd3JhcENhbGxiYWNrKGNiLG9wdGlvbnMpe3JldHVybihvcHRpb25zPW9wdGlvbnN8fHt9KS5pZ25vcmVDYXNpbmc9ISFvcHRpb25zLmlnbm9yZUNhc2luZyYmb3B0aW9ucy5pZ25vcmVDYXNpbmcsZnVuY3Rpb24oZXJyLGRhdGEpe3ZhciBlcnJPYmo7cmV0dXJuIGVycnx8ZGF0YT8oIWVyciYmZGF0YS5lcnImJihlcnI9ZGF0YS5lcnIsZGF0YT1udWxsKSwhZXJyJiZkYXRhLmVycm9yJiYoZXJyPWRhdGEsZGF0YT1udWxsKSxlcnI/KGVyck9iaj17b3JpZ2luYWw6ZXJyfSxlcnIucmVzcG9uc2UmJmVyci5yZXNwb25zZS5zdGF0dXNDb2RlJiYoZXJyT2JqLnN0YXR1c0NvZGU9ZXJyLnJlc3BvbnNlLnN0YXR1c0NvZGUpLGVyci5yZXNwb25zZSYmZXJyLnJlc3BvbnNlLnN0YXR1c1RleHQmJihlcnJPYmouc3RhdHVzVGV4dD1lcnIucmVzcG9uc2Uuc3RhdHVzVGV4dCksZXJyLnJlc3BvbnNlJiZlcnIucmVzcG9uc2UuYm9keSYmKGVycj1lcnIucmVzcG9uc2UuYm9keSksZXJyLmVyciYmKGVycj1lcnIuZXJyKSxlcnJPYmouY29kZT1lcnIuY29kZXx8ZXJyLmVycm9yfHxlcnIuZXJyb3JfY29kZXx8ZXJyLnN0YXR1c3x8bnVsbCxlcnJPYmouZGVzY3JpcHRpb249ZXJyLmVycm9yRGVzY3JpcHRpb258fGVyci5lcnJvcl9kZXNjcmlwdGlvbnx8ZXJyLmRlc2NyaXB0aW9ufHxlcnIuZXJyb3J8fGVyci5kZXRhaWxzfHxlcnIuZXJyfHxudWxsLG9wdGlvbnMuZm9yY2VMZWdhY3lFcnJvciYmKGVyck9iai5lcnJvcj1lcnJPYmouY29kZSxlcnJPYmouZXJyb3JfZGVzY3JpcHRpb249ZXJyT2JqLmRlc2NyaXB0aW9uKSxlcnIubmFtZSYmKGVyck9iai5uYW1lPWVyci5uYW1lKSxlcnIucG9saWN5JiYoZXJyT2JqLnBvbGljeT1lcnIucG9saWN5KSxjYihlcnJPYmopKTohZGF0YS50eXBlfHxcInRleHQvaHRtbFwiIT09ZGF0YS50eXBlJiZcInRleHQvcGxhaW5cIiE9PWRhdGEudHlwZT9vcHRpb25zLmlnbm9yZUNhc2luZz9jYihudWxsLGRhdGEuYm9keXx8ZGF0YSk6Y2IobnVsbCxvYmplY3RIZWxwZXIudG9DYW1lbENhc2UoZGF0YS5ib2R5fHxkYXRhLFtdLHtrZWVwT3JpZ2luYWw6b3B0aW9ucy5rZWVwT3JpZ2luYWxDYXNpbmd9KSk6Y2IobnVsbCxkYXRhLnRleHQpKTpjYihlcnJvci5idWlsZFJlc3BvbnNlKFwiZ2VuZXJpY19lcnJvclwiLFwiU29tZXRoaW5nIHdlbnQgd3JvbmdcIikpfX12YXIgdG9rZW5QYXJhbXM9W1wicmVhbG1cIixcImF1ZGllbmNlXCIsXCJjbGllbnRfaWRcIixcImNsaWVudF9zZWNyZXRcIixcInJlZGlyZWN0X3VyaVwiLFwic2NvcGVcIixcImNvZGVcIixcImdyYW50X3R5cGVcIixcInVzZXJuYW1lXCIsXCJwYXNzd29yZFwiLFwicmVmcmVzaF90b2tlblwiLFwiYXNzZXJ0aW9uXCIsXCJjbGllbnRfYXNzZXJ0aW9uXCIsXCJjbGllbnRfYXNzZXJ0aW9uX3R5cGVcIixcImNvZGVfdmVyaWZpZXJcIl0sYXV0aG9yaXplUGFyYW1zPVtcImNvbm5lY3Rpb25cIixcImNvbm5lY3Rpb25fc2NvcGVcIixcImF1dGgwQ2xpZW50XCIsXCJvd3BcIixcImRldmljZVwiLFwicmVhbG1cIixcInByb3RvY29sXCIsXCJfY3NyZlwiLFwiX2ludHN0YXRlXCIsXCJsb2dpbl90aWNrZXRcIixcImNsaWVudF9pZFwiLFwicmVzcG9uc2VfdHlwZVwiLFwicmVzcG9uc2VfbW9kZVwiLFwicmVkaXJlY3RfdXJpXCIsXCJhdWRpZW5jZVwiLFwic2NvcGVcIixcInN0YXRlXCIsXCJub25jZVwiLFwiZGlzcGxheVwiLFwicHJvbXB0XCIsXCJtYXhfYWdlXCIsXCJ1aV9sb2NhbGVzXCIsXCJjbGFpbXNfbG9jYWxlc1wiLFwiaWRfdG9rZW5faGludFwiLFwibG9naW5faGludFwiLFwiYWNyX3ZhbHVlc1wiLFwiY2xhaW1zXCIsXCJyZWdpc3RyYXRpb25cIixcInJlcXVlc3RcIixcInJlcXVlc3RfdXJpXCIsXCJjb2RlX2NoYWxsZW5nZVwiLFwiY29kZV9jaGFsbGVuZ2VfbWV0aG9kXCIsXCJhY2Nlc3NfdHlwZVwiLFwiZGlzcGxheVwiXTtmdW5jdGlvbiBvYXV0aEF1dGhvcml6ZVBhcmFtcyh3YXJuLHBhcmFtcyl7dmFyIG5vdEFsbG93ZWQ9b2JqZWN0SGVscGVyLmdldEtleXNOb3RJbihwYXJhbXMsYXV0aG9yaXplUGFyYW1zKTtyZXR1cm4gbm90QWxsb3dlZC5sZW5ndGg+MCYmd2Fybi53YXJuaW5nKFwiRm9sbG93aW5nIHBhcmFtZXRlcnMgYXJlIG5vdCBhbGxvd2VkIG9uIHRoZSBgL2F1dGhvcml6ZWAgZW5kcG9pbnQ6IFtcIitub3RBbGxvd2VkLmpvaW4oXCIsXCIpK1wiXVwiKSxwYXJhbXN9ZnVuY3Rpb24gb2F1dGhUb2tlblBhcmFtcyh3YXJuLHBhcmFtcyl7cmV0dXJuIG9iamVjdEhlbHBlci5waWNrKHBhcmFtcyx0b2tlblBhcmFtcyl9dmFyIHBhcmFtZXRlcnNXaGl0ZWxpc3Q9e29hdXRoVG9rZW5QYXJhbXM6b2F1dGhUb2tlblBhcmFtcyxvYXV0aEF1dGhvcml6ZVBhcmFtczpvYXV0aEF1dGhvcml6ZVBhcmFtc30sY29yZT1jcmVhdGVDb21tb25qc01vZHVsZShmdW5jdGlvbihtb2R1bGUsZXhwb3J0cyl7dmFyIENyeXB0b0pTO21vZHVsZS5leHBvcnRzPShDcnlwdG9KUz1DcnlwdG9KU3x8ZnVuY3Rpb24oTWF0aCx1bmRlZmluZWQpe3ZhciBjcmVhdGU9T2JqZWN0LmNyZWF0ZXx8ZnVuY3Rpb24oKXtmdW5jdGlvbiBGKCl7fXJldHVybiBmdW5jdGlvbihvYmope3ZhciBzdWJ0eXBlO3JldHVybiBGLnByb3RvdHlwZT1vYmosc3VidHlwZT1uZXcgRixGLnByb3RvdHlwZT1udWxsLHN1YnR5cGV9fSgpLEM9e30sQ19saWI9Qy5saWI9e30sQmFzZT1DX2xpYi5CYXNlPXtleHRlbmQ6ZnVuY3Rpb24ob3ZlcnJpZGVzKXt2YXIgc3VidHlwZT1jcmVhdGUodGhpcyk7cmV0dXJuIG92ZXJyaWRlcyYmc3VidHlwZS5taXhJbihvdmVycmlkZXMpLHN1YnR5cGUuaGFzT3duUHJvcGVydHkoXCJpbml0XCIpJiZ0aGlzLmluaXQhPT1zdWJ0eXBlLmluaXR8fChzdWJ0eXBlLmluaXQ9ZnVuY3Rpb24oKXtzdWJ0eXBlLiRzdXBlci5pbml0LmFwcGx5KHRoaXMsYXJndW1lbnRzKX0pLHN1YnR5cGUuaW5pdC5wcm90b3R5cGU9c3VidHlwZSxzdWJ0eXBlLiRzdXBlcj10aGlzLHN1YnR5cGV9LGNyZWF0ZTpmdW5jdGlvbigpe3ZhciBpbnN0YW5jZT10aGlzLmV4dGVuZCgpO3JldHVybiBpbnN0YW5jZS5pbml0LmFwcGx5KGluc3RhbmNlLGFyZ3VtZW50cyksaW5zdGFuY2V9LGluaXQ6ZnVuY3Rpb24oKXt9LG1peEluOmZ1bmN0aW9uKHByb3BlcnRpZXMpe2Zvcih2YXIgcHJvcGVydHlOYW1lIGluIHByb3BlcnRpZXMpcHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eU5hbWUpJiYodGhpc1twcm9wZXJ0eU5hbWVdPXByb3BlcnRpZXNbcHJvcGVydHlOYW1lXSk7cHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShcInRvU3RyaW5nXCIpJiYodGhpcy50b1N0cmluZz1wcm9wZXJ0aWVzLnRvU3RyaW5nKX0sY2xvbmU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5pbml0LnByb3RvdHlwZS5leHRlbmQodGhpcyl9fSxXb3JkQXJyYXk9Q19saWIuV29yZEFycmF5PUJhc2UuZXh0ZW5kKHtpbml0OmZ1bmN0aW9uKHdvcmRzLHNpZ0J5dGVzKXt3b3Jkcz10aGlzLndvcmRzPXdvcmRzfHxbXSx0aGlzLnNpZ0J5dGVzPW51bGwhPXNpZ0J5dGVzP3NpZ0J5dGVzOjQqd29yZHMubGVuZ3RofSx0b1N0cmluZzpmdW5jdGlvbihlbmNvZGVyKXtyZXR1cm4oZW5jb2Rlcnx8SGV4KS5zdHJpbmdpZnkodGhpcyl9LGNvbmNhdDpmdW5jdGlvbih3b3JkQXJyYXkpe3ZhciB0aGlzV29yZHM9dGhpcy53b3Jkcyx0aGF0V29yZHM9d29yZEFycmF5LndvcmRzLHRoaXNTaWdCeXRlcz10aGlzLnNpZ0J5dGVzLHRoYXRTaWdCeXRlcz13b3JkQXJyYXkuc2lnQnl0ZXM7aWYodGhpcy5jbGFtcCgpLHRoaXNTaWdCeXRlcyU0KWZvcih2YXIgaT0wO2k8dGhhdFNpZ0J5dGVzO2krKyl7dmFyIHRoYXRCeXRlPXRoYXRXb3Jkc1tpPj4+Ml0+Pj4yNC1pJTQqOCYyNTU7dGhpc1dvcmRzW3RoaXNTaWdCeXRlcytpPj4+Ml18PXRoYXRCeXRlPDwyNC0odGhpc1NpZ0J5dGVzK2kpJTQqOH1lbHNlIGZvcih2YXIgaT0wO2k8dGhhdFNpZ0J5dGVzO2krPTQpdGhpc1dvcmRzW3RoaXNTaWdCeXRlcytpPj4+Ml09dGhhdFdvcmRzW2k+Pj4yXTtyZXR1cm4gdGhpcy5zaWdCeXRlcys9dGhhdFNpZ0J5dGVzLHRoaXN9LGNsYW1wOmZ1bmN0aW9uKCl7dmFyIHdvcmRzPXRoaXMud29yZHMsc2lnQnl0ZXM9dGhpcy5zaWdCeXRlczt3b3Jkc1tzaWdCeXRlcz4+PjJdJj00Mjk0OTY3Mjk1PDwzMi1zaWdCeXRlcyU0Kjgsd29yZHMubGVuZ3RoPU1hdGguY2VpbChzaWdCeXRlcy80KX0sY2xvbmU6ZnVuY3Rpb24oKXt2YXIgY2xvbmU9QmFzZS5jbG9uZS5jYWxsKHRoaXMpO3JldHVybiBjbG9uZS53b3Jkcz10aGlzLndvcmRzLnNsaWNlKDApLGNsb25lfSxyYW5kb206ZnVuY3Rpb24obkJ5dGVzKXtmb3IodmFyIHJjYWNoZSx3b3Jkcz1bXSxyPWZ1bmN0aW9uKG1fdyl7dmFyIG1fdz1tX3csbV96PTk4NzY1NDMyMSxtYXNrPTQyOTQ5NjcyOTU7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIHJlc3VsdD0oKG1fej0zNjk2OSooNjU1MzUmbV96KSsobV96Pj4xNikmbWFzayk8PDE2KSsobV93PTE4ZTMqKDY1NTM1Jm1fdykrKG1fdz4+MTYpJm1hc2spJm1hc2s7cmV0dXJuIHJlc3VsdC89NDI5NDk2NzI5NiwocmVzdWx0Kz0uNSkqKE1hdGgucmFuZG9tKCk+LjU/MTotMSl9fSxpPTA7aTxuQnl0ZXM7aSs9NCl7dmFyIF9yPXIoNDI5NDk2NzI5NioocmNhY2hlfHxNYXRoLnJhbmRvbSgpKSk7cmNhY2hlPTk4NzY1NDA3MSpfcigpLHdvcmRzLnB1c2goNDI5NDk2NzI5NipfcigpfDApfXJldHVybiBuZXcgV29yZEFycmF5LmluaXQod29yZHMsbkJ5dGVzKX19KSxDX2VuYz1DLmVuYz17fSxIZXg9Q19lbmMuSGV4PXtzdHJpbmdpZnk6ZnVuY3Rpb24od29yZEFycmF5KXtmb3IodmFyIHdvcmRzPXdvcmRBcnJheS53b3JkcyxzaWdCeXRlcz13b3JkQXJyYXkuc2lnQnl0ZXMsaGV4Q2hhcnM9W10saT0wO2k8c2lnQnl0ZXM7aSsrKXt2YXIgYml0ZT13b3Jkc1tpPj4+Ml0+Pj4yNC1pJTQqOCYyNTU7aGV4Q2hhcnMucHVzaCgoYml0ZT4+PjQpLnRvU3RyaW5nKDE2KSksaGV4Q2hhcnMucHVzaCgoMTUmYml0ZSkudG9TdHJpbmcoMTYpKX1yZXR1cm4gaGV4Q2hhcnMuam9pbihcIlwiKX0scGFyc2U6ZnVuY3Rpb24oaGV4U3RyKXtmb3IodmFyIGhleFN0ckxlbmd0aD1oZXhTdHIubGVuZ3RoLHdvcmRzPVtdLGk9MDtpPGhleFN0ckxlbmd0aDtpKz0yKXdvcmRzW2k+Pj4zXXw9cGFyc2VJbnQoaGV4U3RyLnN1YnN0cihpLDIpLDE2KTw8MjQtaSU4KjQ7cmV0dXJuIG5ldyBXb3JkQXJyYXkuaW5pdCh3b3JkcyxoZXhTdHJMZW5ndGgvMil9fSxMYXRpbjE9Q19lbmMuTGF0aW4xPXtzdHJpbmdpZnk6ZnVuY3Rpb24od29yZEFycmF5KXtmb3IodmFyIHdvcmRzPXdvcmRBcnJheS53b3JkcyxzaWdCeXRlcz13b3JkQXJyYXkuc2lnQnl0ZXMsbGF0aW4xQ2hhcnM9W10saT0wO2k8c2lnQnl0ZXM7aSsrKXt2YXIgYml0ZT13b3Jkc1tpPj4+Ml0+Pj4yNC1pJTQqOCYyNTU7bGF0aW4xQ2hhcnMucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKGJpdGUpKX1yZXR1cm4gbGF0aW4xQ2hhcnMuam9pbihcIlwiKX0scGFyc2U6ZnVuY3Rpb24obGF0aW4xU3RyKXtmb3IodmFyIGxhdGluMVN0ckxlbmd0aD1sYXRpbjFTdHIubGVuZ3RoLHdvcmRzPVtdLGk9MDtpPGxhdGluMVN0ckxlbmd0aDtpKyspd29yZHNbaT4+PjJdfD0oMjU1JmxhdGluMVN0ci5jaGFyQ29kZUF0KGkpKTw8MjQtaSU0Kjg7cmV0dXJuIG5ldyBXb3JkQXJyYXkuaW5pdCh3b3JkcyxsYXRpbjFTdHJMZW5ndGgpfX0sVXRmOD1DX2VuYy5VdGY4PXtzdHJpbmdpZnk6ZnVuY3Rpb24od29yZEFycmF5KXt0cnl7cmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChlc2NhcGUoTGF0aW4xLnN0cmluZ2lmeSh3b3JkQXJyYXkpKSl9Y2F0Y2goZSl7dGhyb3cgbmV3IEVycm9yKFwiTWFsZm9ybWVkIFVURi04IGRhdGFcIil9fSxwYXJzZTpmdW5jdGlvbih1dGY4U3RyKXtyZXR1cm4gTGF0aW4xLnBhcnNlKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudCh1dGY4U3RyKSkpfX0sQnVmZmVyZWRCbG9ja0FsZ29yaXRobT1DX2xpYi5CdWZmZXJlZEJsb2NrQWxnb3JpdGhtPUJhc2UuZXh0ZW5kKHtyZXNldDpmdW5jdGlvbigpe3RoaXMuX2RhdGE9bmV3IFdvcmRBcnJheS5pbml0LHRoaXMuX25EYXRhQnl0ZXM9MH0sX2FwcGVuZDpmdW5jdGlvbihkYXRhKXtcInN0cmluZ1wiPT10eXBlb2YgZGF0YSYmKGRhdGE9VXRmOC5wYXJzZShkYXRhKSksdGhpcy5fZGF0YS5jb25jYXQoZGF0YSksdGhpcy5fbkRhdGFCeXRlcys9ZGF0YS5zaWdCeXRlc30sX3Byb2Nlc3M6ZnVuY3Rpb24oZG9GbHVzaCl7dmFyIGRhdGE9dGhpcy5fZGF0YSxkYXRhV29yZHM9ZGF0YS53b3JkcyxkYXRhU2lnQnl0ZXM9ZGF0YS5zaWdCeXRlcyxibG9ja1NpemU9dGhpcy5ibG9ja1NpemUsYmxvY2tTaXplQnl0ZXM9NCpibG9ja1NpemUsbkJsb2Nrc1JlYWR5PWRhdGFTaWdCeXRlcy9ibG9ja1NpemVCeXRlcyxuV29yZHNSZWFkeT0obkJsb2Nrc1JlYWR5PWRvRmx1c2g/TWF0aC5jZWlsKG5CbG9ja3NSZWFkeSk6TWF0aC5tYXgoKDB8bkJsb2Nrc1JlYWR5KS10aGlzLl9taW5CdWZmZXJTaXplLDApKSpibG9ja1NpemUsbkJ5dGVzUmVhZHk9TWF0aC5taW4oNCpuV29yZHNSZWFkeSxkYXRhU2lnQnl0ZXMpO2lmKG5Xb3Jkc1JlYWR5KXtmb3IodmFyIG9mZnNldD0wO29mZnNldDxuV29yZHNSZWFkeTtvZmZzZXQrPWJsb2NrU2l6ZSl0aGlzLl9kb1Byb2Nlc3NCbG9jayhkYXRhV29yZHMsb2Zmc2V0KTt2YXIgcHJvY2Vzc2VkV29yZHM9ZGF0YVdvcmRzLnNwbGljZSgwLG5Xb3Jkc1JlYWR5KTtkYXRhLnNpZ0J5dGVzLT1uQnl0ZXNSZWFkeX1yZXR1cm4gbmV3IFdvcmRBcnJheS5pbml0KHByb2Nlc3NlZFdvcmRzLG5CeXRlc1JlYWR5KX0sY2xvbmU6ZnVuY3Rpb24oKXt2YXIgY2xvbmU9QmFzZS5jbG9uZS5jYWxsKHRoaXMpO3JldHVybiBjbG9uZS5fZGF0YT10aGlzLl9kYXRhLmNsb25lKCksY2xvbmV9LF9taW5CdWZmZXJTaXplOjB9KSxDX2FsZ289KENfbGliLkhhc2hlcj1CdWZmZXJlZEJsb2NrQWxnb3JpdGhtLmV4dGVuZCh7Y2ZnOkJhc2UuZXh0ZW5kKCksaW5pdDpmdW5jdGlvbihjZmcpe3RoaXMuY2ZnPXRoaXMuY2ZnLmV4dGVuZChjZmcpLHRoaXMucmVzZXQoKX0scmVzZXQ6ZnVuY3Rpb24oKXtCdWZmZXJlZEJsb2NrQWxnb3JpdGhtLnJlc2V0LmNhbGwodGhpcyksdGhpcy5fZG9SZXNldCgpfSx1cGRhdGU6ZnVuY3Rpb24obWVzc2FnZVVwZGF0ZSl7cmV0dXJuIHRoaXMuX2FwcGVuZChtZXNzYWdlVXBkYXRlKSx0aGlzLl9wcm9jZXNzKCksdGhpc30sZmluYWxpemU6ZnVuY3Rpb24obWVzc2FnZVVwZGF0ZSl7bWVzc2FnZVVwZGF0ZSYmdGhpcy5fYXBwZW5kKG1lc3NhZ2VVcGRhdGUpO3ZhciBoYXNoPXRoaXMuX2RvRmluYWxpemUoKTtyZXR1cm4gaGFzaH0sYmxvY2tTaXplOjE2LF9jcmVhdGVIZWxwZXI6ZnVuY3Rpb24oaGFzaGVyKXtyZXR1cm4gZnVuY3Rpb24obWVzc2FnZSxjZmcpe3JldHVybiBuZXcgaGFzaGVyLmluaXQoY2ZnKS5maW5hbGl6ZShtZXNzYWdlKX19LF9jcmVhdGVIbWFjSGVscGVyOmZ1bmN0aW9uKGhhc2hlcil7cmV0dXJuIGZ1bmN0aW9uKG1lc3NhZ2Usa2V5KXtyZXR1cm4gbmV3IENfYWxnby5ITUFDLmluaXQoaGFzaGVyLGtleSkuZmluYWxpemUobWVzc2FnZSl9fX0pLEMuYWxnbz17fSk7cmV0dXJuIEN9KE1hdGgpLENyeXB0b0pTKX0pLHNoYTI1Nj1jcmVhdGVDb21tb25qc01vZHVsZShmdW5jdGlvbihtb2R1bGUsZXhwb3J0cyl7dmFyIENyeXB0b0pTO21vZHVsZS5leHBvcnRzPShDcnlwdG9KUz1jb3JlLGZ1bmN0aW9uKE1hdGgpe3ZhciBDPUNyeXB0b0pTLENfbGliPUMubGliLFdvcmRBcnJheT1DX2xpYi5Xb3JkQXJyYXksSGFzaGVyPUNfbGliLkhhc2hlcixDX2FsZ289Qy5hbGdvLEg9W10sSz1bXTshZnVuY3Rpb24oKXtmdW5jdGlvbiBpc1ByaW1lKG4pe2Zvcih2YXIgc3FydE49TWF0aC5zcXJ0KG4pLGZhY3Rvcj0yO2ZhY3Rvcjw9c3FydE47ZmFjdG9yKyspaWYoIShuJWZhY3RvcikpcmV0dXJuITE7cmV0dXJuITB9ZnVuY3Rpb24gZ2V0RnJhY3Rpb25hbEJpdHMobil7cmV0dXJuIDQyOTQ5NjcyOTYqKG4tKDB8bikpfDB9Zm9yKHZhciBuPTIsblByaW1lPTA7blByaW1lPDY0Oylpc1ByaW1lKG4pJiYoblByaW1lPDgmJihIW25QcmltZV09Z2V0RnJhY3Rpb25hbEJpdHMoTWF0aC5wb3cobiwuNSkpKSxLW25QcmltZV09Z2V0RnJhY3Rpb25hbEJpdHMoTWF0aC5wb3cobiwxLzMpKSxuUHJpbWUrKyksbisrfSgpO3ZhciBXPVtdLFNIQTI1Nj1DX2FsZ28uU0hBMjU2PUhhc2hlci5leHRlbmQoe19kb1Jlc2V0OmZ1bmN0aW9uKCl7dGhpcy5faGFzaD1uZXcgV29yZEFycmF5LmluaXQoSC5zbGljZSgwKSl9LF9kb1Byb2Nlc3NCbG9jazpmdW5jdGlvbihNLG9mZnNldCl7Zm9yKHZhciBIPXRoaXMuX2hhc2gud29yZHMsYT1IWzBdLGI9SFsxXSxjPUhbMl0sZD1IWzNdLGU9SFs0XSxmPUhbNV0sZz1IWzZdLGg9SFs3XSxpPTA7aTw2NDtpKyspe2lmKGk8MTYpV1tpXT0wfE1bb2Zmc2V0K2ldO2Vsc2V7dmFyIGdhbW1hMHg9V1tpLTE1XSxnYW1tYTA9KGdhbW1hMHg8PDI1fGdhbW1hMHg+Pj43KV4oZ2FtbWEweDw8MTR8Z2FtbWEweD4+PjE4KV5nYW1tYTB4Pj4+MyxnYW1tYTF4PVdbaS0yXSxnYW1tYTE9KGdhbW1hMXg8PDE1fGdhbW1hMXg+Pj4xNyleKGdhbW1hMXg8PDEzfGdhbW1hMXg+Pj4xOSleZ2FtbWExeD4+PjEwO1dbaV09Z2FtbWEwK1dbaS03XStnYW1tYTErV1tpLTE2XX12YXIgbWFqPWEmYl5hJmNeYiZjLHNpZ21hMD0oYTw8MzB8YT4+PjIpXihhPDwxOXxhPj4+MTMpXihhPDwxMHxhPj4+MjIpLHQxPWgrKChlPDwyNnxlPj4+NileKGU8PDIxfGU+Pj4xMSleKGU8PDd8ZT4+PjI1KSkrKGUmZl5+ZSZnKStLW2ldK1dbaV07aD1nLGc9ZixmPWUsZT1kK3QxfDAsZD1jLGM9YixiPWEsYT10MSsoc2lnbWEwK21hail8MH1IWzBdPUhbMF0rYXwwLEhbMV09SFsxXStifDAsSFsyXT1IWzJdK2N8MCxIWzNdPUhbM10rZHwwLEhbNF09SFs0XStlfDAsSFs1XT1IWzVdK2Z8MCxIWzZdPUhbNl0rZ3wwLEhbN109SFs3XStofDB9LF9kb0ZpbmFsaXplOmZ1bmN0aW9uKCl7dmFyIGRhdGE9dGhpcy5fZGF0YSxkYXRhV29yZHM9ZGF0YS53b3JkcyxuQml0c1RvdGFsPTgqdGhpcy5fbkRhdGFCeXRlcyxuQml0c0xlZnQ9OCpkYXRhLnNpZ0J5dGVzO3JldHVybiBkYXRhV29yZHNbbkJpdHNMZWZ0Pj4+NV18PTEyODw8MjQtbkJpdHNMZWZ0JTMyLGRhdGFXb3Jkc1sxNCsobkJpdHNMZWZ0KzY0Pj4+OTw8NCldPU1hdGguZmxvb3IobkJpdHNUb3RhbC80Mjk0OTY3Mjk2KSxkYXRhV29yZHNbMTUrKG5CaXRzTGVmdCs2ND4+Pjk8PDQpXT1uQml0c1RvdGFsLGRhdGEuc2lnQnl0ZXM9NCpkYXRhV29yZHMubGVuZ3RoLHRoaXMuX3Byb2Nlc3MoKSx0aGlzLl9oYXNofSxjbG9uZTpmdW5jdGlvbigpe3ZhciBjbG9uZT1IYXNoZXIuY2xvbmUuY2FsbCh0aGlzKTtyZXR1cm4gY2xvbmUuX2hhc2g9dGhpcy5faGFzaC5jbG9uZSgpLGNsb25lfX0pO0MuU0hBMjU2PUhhc2hlci5fY3JlYXRlSGVscGVyKFNIQTI1NiksQy5IbWFjU0hBMjU2PUhhc2hlci5fY3JlYXRlSG1hY0hlbHBlcihTSEEyNTYpfShNYXRoKSxDcnlwdG9KUy5TSEEyNTYpfSksZW5jQmFzZTY0PWNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZ1bmN0aW9uKG1vZHVsZSxleHBvcnRzKXt2YXIgQ3J5cHRvSlMsQyxXb3JkQXJyYXk7bW9kdWxlLmV4cG9ydHM9KFdvcmRBcnJheT0oQz1DcnlwdG9KUz1jb3JlKS5saWIuV29yZEFycmF5LEMuZW5jLkJhc2U2ND17c3RyaW5naWZ5OmZ1bmN0aW9uKHdvcmRBcnJheSl7dmFyIHdvcmRzPXdvcmRBcnJheS53b3JkcyxzaWdCeXRlcz13b3JkQXJyYXkuc2lnQnl0ZXMsbWFwPXRoaXMuX21hcDt3b3JkQXJyYXkuY2xhbXAoKTtmb3IodmFyIGJhc2U2NENoYXJzPVtdLGk9MDtpPHNpZ0J5dGVzO2krPTMpZm9yKHZhciB0cmlwbGV0PSh3b3Jkc1tpPj4+Ml0+Pj4yNC1pJTQqOCYyNTUpPDwxNnwod29yZHNbaSsxPj4+Ml0+Pj4yNC0oaSsxKSU0KjgmMjU1KTw8OHx3b3Jkc1tpKzI+Pj4yXT4+PjI0LShpKzIpJTQqOCYyNTUsaj0wO2o8NCYmaSsuNzUqajxzaWdCeXRlcztqKyspYmFzZTY0Q2hhcnMucHVzaChtYXAuY2hhckF0KHRyaXBsZXQ+Pj42KigzLWopJjYzKSk7dmFyIHBhZGRpbmdDaGFyPW1hcC5jaGFyQXQoNjQpO2lmKHBhZGRpbmdDaGFyKWZvcig7YmFzZTY0Q2hhcnMubGVuZ3RoJTQ7KWJhc2U2NENoYXJzLnB1c2gocGFkZGluZ0NoYXIpO3JldHVybiBiYXNlNjRDaGFycy5qb2luKFwiXCIpfSxwYXJzZTpmdW5jdGlvbihiYXNlNjRTdHIpe3ZhciBiYXNlNjRTdHJMZW5ndGg9YmFzZTY0U3RyLmxlbmd0aCxtYXA9dGhpcy5fbWFwLHJldmVyc2VNYXA9dGhpcy5fcmV2ZXJzZU1hcDtpZighcmV2ZXJzZU1hcCl7cmV2ZXJzZU1hcD10aGlzLl9yZXZlcnNlTWFwPVtdO2Zvcih2YXIgaj0wO2o8bWFwLmxlbmd0aDtqKyspcmV2ZXJzZU1hcFttYXAuY2hhckNvZGVBdChqKV09an12YXIgcGFkZGluZ0NoYXI9bWFwLmNoYXJBdCg2NCk7aWYocGFkZGluZ0NoYXIpe3ZhciBwYWRkaW5nSW5kZXg9YmFzZTY0U3RyLmluZGV4T2YocGFkZGluZ0NoYXIpOy0xIT09cGFkZGluZ0luZGV4JiYoYmFzZTY0U3RyTGVuZ3RoPXBhZGRpbmdJbmRleCl9cmV0dXJuIGZ1bmN0aW9uKGJhc2U2NFN0cixiYXNlNjRTdHJMZW5ndGgscmV2ZXJzZU1hcCl7Zm9yKHZhciB3b3Jkcz1bXSxuQnl0ZXM9MCxpPTA7aTxiYXNlNjRTdHJMZW5ndGg7aSsrKWlmKGklNCl7dmFyIGJpdHMxPXJldmVyc2VNYXBbYmFzZTY0U3RyLmNoYXJDb2RlQXQoaS0xKV08PGklNCoyLGJpdHMyPXJldmVyc2VNYXBbYmFzZTY0U3RyLmNoYXJDb2RlQXQoaSldPj4+Ni1pJTQqMjt3b3Jkc1tuQnl0ZXM+Pj4yXXw9KGJpdHMxfGJpdHMyKTw8MjQtbkJ5dGVzJTQqOCxuQnl0ZXMrK31yZXR1cm4gV29yZEFycmF5LmNyZWF0ZSh3b3JkcyxuQnl0ZXMpfShiYXNlNjRTdHIsYmFzZTY0U3RyTGVuZ3RoLHJldmVyc2VNYXApfSxfbWFwOlwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz1cIn0sQ3J5cHRvSlMuZW5jLkJhc2U2NCl9KSxlbmNIZXg9Y3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24obW9kdWxlLGV4cG9ydHMpe21vZHVsZS5leHBvcnRzPWNvcmUuZW5jLkhleH0pLGpzYm49Y3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24obW9kdWxlLGV4cG9ydHMpeyhmdW5jdGlvbigpe3ZhciBkYml0cztmdW5jdGlvbiBCaWdJbnRlZ2VyKGEsYixjKXtudWxsIT1hJiYoXCJudW1iZXJcIj09dHlwZW9mIGE/dGhpcy5mcm9tTnVtYmVyKGEsYixjKTpudWxsPT1iJiZcInN0cmluZ1wiIT10eXBlb2YgYT90aGlzLmZyb21TdHJpbmcoYSwyNTYpOnRoaXMuZnJvbVN0cmluZyhhLGIpKX1mdW5jdGlvbiBuYmkoKXtyZXR1cm4gbmV3IEJpZ0ludGVnZXIobnVsbCl9dmFyIGluQnJvd3Nlcj1cInVuZGVmaW5lZFwiIT10eXBlb2YgbmF2aWdhdG9yO2luQnJvd3NlciYmXCJNaWNyb3NvZnQgSW50ZXJuZXQgRXhwbG9yZXJcIj09bmF2aWdhdG9yLmFwcE5hbWU/KEJpZ0ludGVnZXIucHJvdG90eXBlLmFtPWZ1bmN0aW9uKGkseCx3LGosYyxuKXtmb3IodmFyIHhsPTMyNzY3JngseGg9eD4+MTU7LS1uPj0wOyl7dmFyIGw9MzI3NjcmdGhpc1tpXSxoPXRoaXNbaSsrXT4+MTUsbT14aCpsK2gqeGw7Yz0oKGw9eGwqbCsoKDMyNzY3Jm0pPDwxNSkrd1tqXSsoMTA3Mzc0MTgyMyZjKSk+Pj4zMCkrKG0+Pj4xNSkreGgqaCsoYz4+PjMwKSx3W2orK109MTA3Mzc0MTgyMyZsfXJldHVybiBjfSxkYml0cz0zMCk6aW5Ccm93c2VyJiZcIk5ldHNjYXBlXCIhPW5hdmlnYXRvci5hcHBOYW1lPyhCaWdJbnRlZ2VyLnByb3RvdHlwZS5hbT1mdW5jdGlvbihpLHgsdyxqLGMsbil7Zm9yKDstLW4+PTA7KXt2YXIgdj14KnRoaXNbaSsrXSt3W2pdK2M7Yz1NYXRoLmZsb29yKHYvNjcxMDg4NjQpLHdbaisrXT02NzEwODg2MyZ2fXJldHVybiBjfSxkYml0cz0yNik6KEJpZ0ludGVnZXIucHJvdG90eXBlLmFtPWZ1bmN0aW9uKGkseCx3LGosYyxuKXtmb3IodmFyIHhsPTE2MzgzJngseGg9eD4+MTQ7LS1uPj0wOyl7dmFyIGw9MTYzODMmdGhpc1tpXSxoPXRoaXNbaSsrXT4+MTQsbT14aCpsK2gqeGw7Yz0oKGw9eGwqbCsoKDE2MzgzJm0pPDwxNCkrd1tqXStjKT4+MjgpKyhtPj4xNCkreGgqaCx3W2orK109MjY4NDM1NDU1Jmx9cmV0dXJuIGN9LGRiaXRzPTI4KSxCaWdJbnRlZ2VyLnByb3RvdHlwZS5EQj1kYml0cyxCaWdJbnRlZ2VyLnByb3RvdHlwZS5ETT0oMTw8ZGJpdHMpLTEsQmlnSW50ZWdlci5wcm90b3R5cGUuRFY9MTw8ZGJpdHM7QmlnSW50ZWdlci5wcm90b3R5cGUuRlY9TWF0aC5wb3coMiw1MiksQmlnSW50ZWdlci5wcm90b3R5cGUuRjE9NTItZGJpdHMsQmlnSW50ZWdlci5wcm90b3R5cGUuRjI9MipkYml0cy01Mjt2YXIgcnIsdnYsQklfUk09XCIwMTIzNDU2Nzg5YWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXpcIixCSV9SQz1uZXcgQXJyYXk7Zm9yKHJyPVwiMFwiLmNoYXJDb2RlQXQoMCksdnY9MDt2djw9OTsrK3Z2KUJJX1JDW3JyKytdPXZ2O2Zvcihycj1cImFcIi5jaGFyQ29kZUF0KDApLHZ2PTEwO3Z2PDM2OysrdnYpQklfUkNbcnIrK109dnY7Zm9yKHJyPVwiQVwiLmNoYXJDb2RlQXQoMCksdnY9MTA7dnY8MzY7Kyt2dilCSV9SQ1tycisrXT12djtmdW5jdGlvbiBpbnQyY2hhcihuKXtyZXR1cm4gQklfUk0uY2hhckF0KG4pfWZ1bmN0aW9uIGludEF0KHMsaSl7dmFyIGM9QklfUkNbcy5jaGFyQ29kZUF0KGkpXTtyZXR1cm4gbnVsbD09Yz8tMTpjfWZ1bmN0aW9uIG5idihpKXt2YXIgcj1uYmkoKTtyZXR1cm4gci5mcm9tSW50KGkpLHJ9ZnVuY3Rpb24gbmJpdHMoeCl7dmFyIHQscj0xO3JldHVybiAwIT0odD14Pj4+MTYpJiYoeD10LHIrPTE2KSwwIT0odD14Pj44KSYmKHg9dCxyKz04KSwwIT0odD14Pj40KSYmKHg9dCxyKz00KSwwIT0odD14Pj4yKSYmKHg9dCxyKz0yKSwwIT0odD14Pj4xKSYmKHg9dCxyKz0xKSxyfWZ1bmN0aW9uIENsYXNzaWMobSl7dGhpcy5tPW19ZnVuY3Rpb24gTW9udGdvbWVyeShtKXt0aGlzLm09bSx0aGlzLm1wPW0uaW52RGlnaXQoKSx0aGlzLm1wbD0zMjc2NyZ0aGlzLm1wLHRoaXMubXBoPXRoaXMubXA+PjE1LHRoaXMudW09KDE8PG0uREItMTUpLTEsdGhpcy5tdDI9MiptLnR9ZnVuY3Rpb24gb3BfYW5kKHgseSl7cmV0dXJuIHgmeX1mdW5jdGlvbiBvcF9vcih4LHkpe3JldHVybiB4fHl9ZnVuY3Rpb24gb3BfeG9yKHgseSl7cmV0dXJuIHheeX1mdW5jdGlvbiBvcF9hbmRub3QoeCx5KXtyZXR1cm4geCZ+eX1mdW5jdGlvbiBsYml0KHgpe2lmKDA9PXgpcmV0dXJuLTE7dmFyIHI9MDtyZXR1cm4gMD09KDY1NTM1JngpJiYoeD4+PTE2LHIrPTE2KSwwPT0oMjU1JngpJiYoeD4+PTgscis9OCksMD09KDE1JngpJiYoeD4+PTQscis9NCksMD09KDMmeCkmJih4Pj49MixyKz0yKSwwPT0oMSZ4KSYmKytyLHJ9ZnVuY3Rpb24gY2JpdCh4KXtmb3IodmFyIHI9MDswIT14Oyl4Jj14LTEsKytyO3JldHVybiByfWZ1bmN0aW9uIE51bGxFeHAoKXt9ZnVuY3Rpb24gbk5vcCh4KXtyZXR1cm4geH1mdW5jdGlvbiBCYXJyZXR0KG0pe3RoaXMucjI9bmJpKCksdGhpcy5xMz1uYmkoKSxCaWdJbnRlZ2VyLk9ORS5kbFNoaWZ0VG8oMiptLnQsdGhpcy5yMiksdGhpcy5tdT10aGlzLnIyLmRpdmlkZShtKSx0aGlzLm09bX1DbGFzc2ljLnByb3RvdHlwZS5jb252ZXJ0PWZ1bmN0aW9uKHgpe3JldHVybiB4LnM8MHx8eC5jb21wYXJlVG8odGhpcy5tKT49MD94Lm1vZCh0aGlzLm0pOnh9LENsYXNzaWMucHJvdG90eXBlLnJldmVydD1mdW5jdGlvbih4KXtyZXR1cm4geH0sQ2xhc3NpYy5wcm90b3R5cGUucmVkdWNlPWZ1bmN0aW9uKHgpe3guZGl2UmVtVG8odGhpcy5tLG51bGwseCl9LENsYXNzaWMucHJvdG90eXBlLm11bFRvPWZ1bmN0aW9uKHgseSxyKXt4Lm11bHRpcGx5VG8oeSxyKSx0aGlzLnJlZHVjZShyKX0sQ2xhc3NpYy5wcm90b3R5cGUuc3FyVG89ZnVuY3Rpb24oeCxyKXt4LnNxdWFyZVRvKHIpLHRoaXMucmVkdWNlKHIpfSxNb250Z29tZXJ5LnByb3RvdHlwZS5jb252ZXJ0PWZ1bmN0aW9uKHgpe3ZhciByPW5iaSgpO3JldHVybiB4LmFicygpLmRsU2hpZnRUbyh0aGlzLm0udCxyKSxyLmRpdlJlbVRvKHRoaXMubSxudWxsLHIpLHguczwwJiZyLmNvbXBhcmVUbyhCaWdJbnRlZ2VyLlpFUk8pPjAmJnRoaXMubS5zdWJUbyhyLHIpLHJ9LE1vbnRnb21lcnkucHJvdG90eXBlLnJldmVydD1mdW5jdGlvbih4KXt2YXIgcj1uYmkoKTtyZXR1cm4geC5jb3B5VG8ociksdGhpcy5yZWR1Y2Uocikscn0sTW9udGdvbWVyeS5wcm90b3R5cGUucmVkdWNlPWZ1bmN0aW9uKHgpe2Zvcig7eC50PD10aGlzLm10MjspeFt4LnQrK109MDtmb3IodmFyIGk9MDtpPHRoaXMubS50OysraSl7dmFyIGo9MzI3NjcmeFtpXSx1MD1qKnRoaXMubXBsKygoaip0aGlzLm1waCsoeFtpXT4+MTUpKnRoaXMubXBsJnRoaXMudW0pPDwxNSkmeC5ETTtmb3IoeFtqPWkrdGhpcy5tLnRdKz10aGlzLm0uYW0oMCx1MCx4LGksMCx0aGlzLm0udCk7eFtqXT49eC5EVjspeFtqXS09eC5EVix4Wysral0rK314LmNsYW1wKCkseC5kclNoaWZ0VG8odGhpcy5tLnQseCkseC5jb21wYXJlVG8odGhpcy5tKT49MCYmeC5zdWJUbyh0aGlzLm0seCl9LE1vbnRnb21lcnkucHJvdG90eXBlLm11bFRvPWZ1bmN0aW9uKHgseSxyKXt4Lm11bHRpcGx5VG8oeSxyKSx0aGlzLnJlZHVjZShyKX0sTW9udGdvbWVyeS5wcm90b3R5cGUuc3FyVG89ZnVuY3Rpb24oeCxyKXt4LnNxdWFyZVRvKHIpLHRoaXMucmVkdWNlKHIpfSxCaWdJbnRlZ2VyLnByb3RvdHlwZS5jb3B5VG89ZnVuY3Rpb24ocil7Zm9yKHZhciBpPXRoaXMudC0xO2k+PTA7LS1pKXJbaV09dGhpc1tpXTtyLnQ9dGhpcy50LHIucz10aGlzLnN9LEJpZ0ludGVnZXIucHJvdG90eXBlLmZyb21JbnQ9ZnVuY3Rpb24oeCl7dGhpcy50PTEsdGhpcy5zPXg8MD8tMTowLHg+MD90aGlzWzBdPXg6eDwtMT90aGlzWzBdPXgrdGhpcy5EVjp0aGlzLnQ9MH0sQmlnSW50ZWdlci5wcm90b3R5cGUuZnJvbVN0cmluZz1mdW5jdGlvbihzLGIpe3ZhciBrO2lmKDE2PT1iKWs9NDtlbHNlIGlmKDg9PWIpaz0zO2Vsc2UgaWYoMjU2PT1iKWs9ODtlbHNlIGlmKDI9PWIpaz0xO2Vsc2UgaWYoMzI9PWIpaz01O2Vsc2V7aWYoNCE9YilyZXR1cm4gdm9pZCB0aGlzLmZyb21SYWRpeChzLGIpO2s9Mn10aGlzLnQ9MCx0aGlzLnM9MDtmb3IodmFyIGk9cy5sZW5ndGgsbWk9ITEsc2g9MDstLWk+PTA7KXt2YXIgeD04PT1rPzI1NSZzW2ldOmludEF0KHMsaSk7eDwwP1wiLVwiPT1zLmNoYXJBdChpKSYmKG1pPSEwKToobWk9ITEsMD09c2g/dGhpc1t0aGlzLnQrK109eDpzaCtrPnRoaXMuREI/KHRoaXNbdGhpcy50LTFdfD0oeCYoMTw8dGhpcy5EQi1zaCktMSk8PHNoLHRoaXNbdGhpcy50KytdPXg+PnRoaXMuREItc2gpOnRoaXNbdGhpcy50LTFdfD14PDxzaCwoc2grPWspPj10aGlzLkRCJiYoc2gtPXRoaXMuREIpKX04PT1rJiYwIT0oMTI4JnNbMF0pJiYodGhpcy5zPS0xLHNoPjAmJih0aGlzW3RoaXMudC0xXXw9KDE8PHRoaXMuREItc2gpLTE8PHNoKSksdGhpcy5jbGFtcCgpLG1pJiZCaWdJbnRlZ2VyLlpFUk8uc3ViVG8odGhpcyx0aGlzKX0sQmlnSW50ZWdlci5wcm90b3R5cGUuY2xhbXA9ZnVuY3Rpb24oKXtmb3IodmFyIGM9dGhpcy5zJnRoaXMuRE07dGhpcy50PjAmJnRoaXNbdGhpcy50LTFdPT1jOyktLXRoaXMudH0sQmlnSW50ZWdlci5wcm90b3R5cGUuZGxTaGlmdFRvPWZ1bmN0aW9uKG4scil7dmFyIGk7Zm9yKGk9dGhpcy50LTE7aT49MDstLWkpcltpK25dPXRoaXNbaV07Zm9yKGk9bi0xO2k+PTA7LS1pKXJbaV09MDtyLnQ9dGhpcy50K24sci5zPXRoaXMuc30sQmlnSW50ZWdlci5wcm90b3R5cGUuZHJTaGlmdFRvPWZ1bmN0aW9uKG4scil7Zm9yKHZhciBpPW47aTx0aGlzLnQ7KytpKXJbaS1uXT10aGlzW2ldO3IudD1NYXRoLm1heCh0aGlzLnQtbiwwKSxyLnM9dGhpcy5zfSxCaWdJbnRlZ2VyLnByb3RvdHlwZS5sU2hpZnRUbz1mdW5jdGlvbihuLHIpe3ZhciBpLGJzPW4ldGhpcy5EQixjYnM9dGhpcy5EQi1icyxibT0oMTw8Y2JzKS0xLGRzPU1hdGguZmxvb3Iobi90aGlzLkRCKSxjPXRoaXMuczw8YnMmdGhpcy5ETTtmb3IoaT10aGlzLnQtMTtpPj0wOy0taSlyW2krZHMrMV09dGhpc1tpXT4+Y2JzfGMsYz0odGhpc1tpXSZibSk8PGJzO2ZvcihpPWRzLTE7aT49MDstLWkpcltpXT0wO3JbZHNdPWMsci50PXRoaXMudCtkcysxLHIucz10aGlzLnMsci5jbGFtcCgpfSxCaWdJbnRlZ2VyLnByb3RvdHlwZS5yU2hpZnRUbz1mdW5jdGlvbihuLHIpe3Iucz10aGlzLnM7dmFyIGRzPU1hdGguZmxvb3Iobi90aGlzLkRCKTtpZihkcz49dGhpcy50KXIudD0wO2Vsc2V7dmFyIGJzPW4ldGhpcy5EQixjYnM9dGhpcy5EQi1icyxibT0oMTw8YnMpLTE7clswXT10aGlzW2RzXT4+YnM7Zm9yKHZhciBpPWRzKzE7aTx0aGlzLnQ7KytpKXJbaS1kcy0xXXw9KHRoaXNbaV0mYm0pPDxjYnMscltpLWRzXT10aGlzW2ldPj5iczticz4wJiYoclt0aGlzLnQtZHMtMV18PSh0aGlzLnMmYm0pPDxjYnMpLHIudD10aGlzLnQtZHMsci5jbGFtcCgpfX0sQmlnSW50ZWdlci5wcm90b3R5cGUuc3ViVG89ZnVuY3Rpb24oYSxyKXtmb3IodmFyIGk9MCxjPTAsbT1NYXRoLm1pbihhLnQsdGhpcy50KTtpPG07KWMrPXRoaXNbaV0tYVtpXSxyW2krK109YyZ0aGlzLkRNLGM+Pj10aGlzLkRCO2lmKGEudDx0aGlzLnQpe2ZvcihjLT1hLnM7aTx0aGlzLnQ7KWMrPXRoaXNbaV0scltpKytdPWMmdGhpcy5ETSxjPj49dGhpcy5EQjtjKz10aGlzLnN9ZWxzZXtmb3IoYys9dGhpcy5zO2k8YS50OyljLT1hW2ldLHJbaSsrXT1jJnRoaXMuRE0sYz4+PXRoaXMuREI7Yy09YS5zfXIucz1jPDA/LTE6MCxjPC0xP3JbaSsrXT10aGlzLkRWK2M6Yz4wJiYocltpKytdPWMpLHIudD1pLHIuY2xhbXAoKX0sQmlnSW50ZWdlci5wcm90b3R5cGUubXVsdGlwbHlUbz1mdW5jdGlvbihhLHIpe3ZhciB4PXRoaXMuYWJzKCkseT1hLmFicygpLGk9eC50O2ZvcihyLnQ9aSt5LnQ7LS1pPj0wOylyW2ldPTA7Zm9yKGk9MDtpPHkudDsrK2kpcltpK3gudF09eC5hbSgwLHlbaV0scixpLDAseC50KTtyLnM9MCxyLmNsYW1wKCksdGhpcy5zIT1hLnMmJkJpZ0ludGVnZXIuWkVSTy5zdWJUbyhyLHIpfSxCaWdJbnRlZ2VyLnByb3RvdHlwZS5zcXVhcmVUbz1mdW5jdGlvbihyKXtmb3IodmFyIHg9dGhpcy5hYnMoKSxpPXIudD0yKngudDstLWk+PTA7KXJbaV09MDtmb3IoaT0wO2k8eC50LTE7KytpKXt2YXIgYz14LmFtKGkseFtpXSxyLDIqaSwwLDEpOyhyW2kreC50XSs9eC5hbShpKzEsMip4W2ldLHIsMippKzEsYyx4LnQtaS0xKSk+PXguRFYmJihyW2kreC50XS09eC5EVixyW2kreC50KzFdPTEpfXIudD4wJiYocltyLnQtMV0rPXguYW0oaSx4W2ldLHIsMippLDAsMSkpLHIucz0wLHIuY2xhbXAoKX0sQmlnSW50ZWdlci5wcm90b3R5cGUuZGl2UmVtVG89ZnVuY3Rpb24obSxxLHIpe3ZhciBwbT1tLmFicygpO2lmKCEocG0udDw9MCkpe3ZhciBwdD10aGlzLmFicygpO2lmKHB0LnQ8cG0udClyZXR1cm4gbnVsbCE9cSYmcS5mcm9tSW50KDApLHZvaWQobnVsbCE9ciYmdGhpcy5jb3B5VG8ocikpO251bGw9PXImJihyPW5iaSgpKTt2YXIgeT1uYmkoKSx0cz10aGlzLnMsbXM9bS5zLG5zaD10aGlzLkRCLW5iaXRzKHBtW3BtLnQtMV0pO25zaD4wPyhwbS5sU2hpZnRUbyhuc2gseSkscHQubFNoaWZ0VG8obnNoLHIpKToocG0uY29weVRvKHkpLHB0LmNvcHlUbyhyKSk7dmFyIHlzPXkudCx5MD15W3lzLTFdO2lmKDAhPXkwKXt2YXIgeXQ9eTAqKDE8PHRoaXMuRjEpKyh5cz4xP3lbeXMtMl0+PnRoaXMuRjI6MCksZDE9dGhpcy5GVi95dCxkMj0oMTw8dGhpcy5GMSkveXQsZT0xPDx0aGlzLkYyLGk9ci50LGo9aS15cyx0PW51bGw9PXE/bmJpKCk6cTtmb3IoeS5kbFNoaWZ0VG8oaix0KSxyLmNvbXBhcmVUbyh0KT49MCYmKHJbci50KytdPTEsci5zdWJUbyh0LHIpKSxCaWdJbnRlZ2VyLk9ORS5kbFNoaWZ0VG8oeXMsdCksdC5zdWJUbyh5LHkpO3kudDx5czspeVt5LnQrK109MDtmb3IoOy0taj49MDspe3ZhciBxZD1yWy0taV09PXkwP3RoaXMuRE06TWF0aC5mbG9vcihyW2ldKmQxKyhyW2ktMV0rZSkqZDIpO2lmKChyW2ldKz15LmFtKDAscWQscixqLDAseXMpKTxxZClmb3IoeS5kbFNoaWZ0VG8oaix0KSxyLnN1YlRvKHQscik7cltpXTwtLXFkOylyLnN1YlRvKHQscil9bnVsbCE9cSYmKHIuZHJTaGlmdFRvKHlzLHEpLHRzIT1tcyYmQmlnSW50ZWdlci5aRVJPLnN1YlRvKHEscSkpLHIudD15cyxyLmNsYW1wKCksbnNoPjAmJnIuclNoaWZ0VG8obnNoLHIpLHRzPDAmJkJpZ0ludGVnZXIuWkVSTy5zdWJUbyhyLHIpfX19LEJpZ0ludGVnZXIucHJvdG90eXBlLmludkRpZ2l0PWZ1bmN0aW9uKCl7aWYodGhpcy50PDEpcmV0dXJuIDA7dmFyIHg9dGhpc1swXTtpZigwPT0oMSZ4KSlyZXR1cm4gMDt2YXIgeT0zJng7cmV0dXJuKHk9KHk9KHk9KHk9eSooMi0oMTUmeCkqeSkmMTUpKigyLSgyNTUmeCkqeSkmMjU1KSooMi0oKDY1NTM1JngpKnkmNjU1MzUpKSY2NTUzNSkqKDIteCp5JXRoaXMuRFYpJXRoaXMuRFYpPjA/dGhpcy5EVi15Oi15fSxCaWdJbnRlZ2VyLnByb3RvdHlwZS5pc0V2ZW49ZnVuY3Rpb24oKXtyZXR1cm4gMD09KHRoaXMudD4wPzEmdGhpc1swXTp0aGlzLnMpfSxCaWdJbnRlZ2VyLnByb3RvdHlwZS5leHA9ZnVuY3Rpb24oZSx6KXtpZihlPjQyOTQ5NjcyOTV8fGU8MSlyZXR1cm4gQmlnSW50ZWdlci5PTkU7dmFyIHI9bmJpKCkscjI9bmJpKCksZz16LmNvbnZlcnQodGhpcyksaT1uYml0cyhlKS0xO2ZvcihnLmNvcHlUbyhyKTstLWk+PTA7KWlmKHouc3FyVG8ocixyMiksKGUmMTw8aSk+MCl6Lm11bFRvKHIyLGcscik7ZWxzZXt2YXIgdD1yO3I9cjIscjI9dH1yZXR1cm4gei5yZXZlcnQocil9LEJpZ0ludGVnZXIucHJvdG90eXBlLnRvU3RyaW5nPWZ1bmN0aW9uKGIpe2lmKHRoaXMuczwwKXJldHVyblwiLVwiK3RoaXMubmVnYXRlKCkudG9TdHJpbmcoYik7dmFyIGs7aWYoMTY9PWIpaz00O2Vsc2UgaWYoOD09YilrPTM7ZWxzZSBpZigyPT1iKWs9MTtlbHNlIGlmKDMyPT1iKWs9NTtlbHNle2lmKDQhPWIpcmV0dXJuIHRoaXMudG9SYWRpeChiKTtrPTJ9dmFyIGQsa209KDE8PGspLTEsbT0hMSxyPVwiXCIsaT10aGlzLnQscD10aGlzLkRCLWkqdGhpcy5EQiVrO2lmKGktLSA+MClmb3IocDx0aGlzLkRCJiYoZD10aGlzW2ldPj5wKT4wJiYobT0hMCxyPWludDJjaGFyKGQpKTtpPj0wOylwPGs/KGQ9KHRoaXNbaV0mKDE8PHApLTEpPDxrLXAsZHw9dGhpc1stLWldPj4ocCs9dGhpcy5EQi1rKSk6KGQ9dGhpc1tpXT4+KHAtPWspJmttLHA8PTAmJihwKz10aGlzLkRCLC0taSkpLGQ+MCYmKG09ITApLG0mJihyKz1pbnQyY2hhcihkKSk7cmV0dXJuIG0/cjpcIjBcIn0sQmlnSW50ZWdlci5wcm90b3R5cGUubmVnYXRlPWZ1bmN0aW9uKCl7dmFyIHI9bmJpKCk7cmV0dXJuIEJpZ0ludGVnZXIuWkVSTy5zdWJUbyh0aGlzLHIpLHJ9LEJpZ0ludGVnZXIucHJvdG90eXBlLmFicz1mdW5jdGlvbigpe3JldHVybiB0aGlzLnM8MD90aGlzLm5lZ2F0ZSgpOnRoaXN9LEJpZ0ludGVnZXIucHJvdG90eXBlLmNvbXBhcmVUbz1mdW5jdGlvbihhKXt2YXIgcj10aGlzLnMtYS5zO2lmKDAhPXIpcmV0dXJuIHI7dmFyIGk9dGhpcy50O2lmKDAhPShyPWktYS50KSlyZXR1cm4gdGhpcy5zPDA/LXI6cjtmb3IoOy0taT49MDspaWYoMCE9KHI9dGhpc1tpXS1hW2ldKSlyZXR1cm4gcjtyZXR1cm4gMH0sQmlnSW50ZWdlci5wcm90b3R5cGUuYml0TGVuZ3RoPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudDw9MD8wOnRoaXMuREIqKHRoaXMudC0xKStuYml0cyh0aGlzW3RoaXMudC0xXV50aGlzLnMmdGhpcy5ETSl9LEJpZ0ludGVnZXIucHJvdG90eXBlLm1vZD1mdW5jdGlvbihhKXt2YXIgcj1uYmkoKTtyZXR1cm4gdGhpcy5hYnMoKS5kaXZSZW1UbyhhLG51bGwsciksdGhpcy5zPDAmJnIuY29tcGFyZVRvKEJpZ0ludGVnZXIuWkVSTyk+MCYmYS5zdWJUbyhyLHIpLHJ9LEJpZ0ludGVnZXIucHJvdG90eXBlLm1vZFBvd0ludD1mdW5jdGlvbihlLG0pe3ZhciB6O3JldHVybiB6PWU8MjU2fHxtLmlzRXZlbigpP25ldyBDbGFzc2ljKG0pOm5ldyBNb250Z29tZXJ5KG0pLHRoaXMuZXhwKGUseil9LEJpZ0ludGVnZXIuWkVSTz1uYnYoMCksQmlnSW50ZWdlci5PTkU9bmJ2KDEpLE51bGxFeHAucHJvdG90eXBlLmNvbnZlcnQ9bk5vcCxOdWxsRXhwLnByb3RvdHlwZS5yZXZlcnQ9bk5vcCxOdWxsRXhwLnByb3RvdHlwZS5tdWxUbz1mdW5jdGlvbih4LHkscil7eC5tdWx0aXBseVRvKHkscil9LE51bGxFeHAucHJvdG90eXBlLnNxclRvPWZ1bmN0aW9uKHgscil7eC5zcXVhcmVUbyhyKX0sQmFycmV0dC5wcm90b3R5cGUuY29udmVydD1mdW5jdGlvbih4KXtpZih4LnM8MHx8eC50PjIqdGhpcy5tLnQpcmV0dXJuIHgubW9kKHRoaXMubSk7aWYoeC5jb21wYXJlVG8odGhpcy5tKTwwKXJldHVybiB4O3ZhciByPW5iaSgpO3JldHVybiB4LmNvcHlUbyhyKSx0aGlzLnJlZHVjZShyKSxyfSxCYXJyZXR0LnByb3RvdHlwZS5yZXZlcnQ9ZnVuY3Rpb24oeCl7cmV0dXJuIHh9LEJhcnJldHQucHJvdG90eXBlLnJlZHVjZT1mdW5jdGlvbih4KXtmb3IoeC5kclNoaWZ0VG8odGhpcy5tLnQtMSx0aGlzLnIyKSx4LnQ+dGhpcy5tLnQrMSYmKHgudD10aGlzLm0udCsxLHguY2xhbXAoKSksdGhpcy5tdS5tdWx0aXBseVVwcGVyVG8odGhpcy5yMix0aGlzLm0udCsxLHRoaXMucTMpLHRoaXMubS5tdWx0aXBseUxvd2VyVG8odGhpcy5xMyx0aGlzLm0udCsxLHRoaXMucjIpO3guY29tcGFyZVRvKHRoaXMucjIpPDA7KXguZEFkZE9mZnNldCgxLHRoaXMubS50KzEpO2Zvcih4LnN1YlRvKHRoaXMucjIseCk7eC5jb21wYXJlVG8odGhpcy5tKT49MDspeC5zdWJUbyh0aGlzLm0seCl9LEJhcnJldHQucHJvdG90eXBlLm11bFRvPWZ1bmN0aW9uKHgseSxyKXt4Lm11bHRpcGx5VG8oeSxyKSx0aGlzLnJlZHVjZShyKX0sQmFycmV0dC5wcm90b3R5cGUuc3FyVG89ZnVuY3Rpb24oeCxyKXt4LnNxdWFyZVRvKHIpLHRoaXMucmVkdWNlKHIpfTt2YXIgcm5nX3N0YXRlLHJuZ19wb29sLHJuZ19wcHRyLGxvd3ByaW1lcz1bMiwzLDUsNywxMSwxMywxNywxOSwyMywyOSwzMSwzNyw0MSw0Myw0Nyw1Myw1OSw2MSw2Nyw3MSw3Myw3OSw4Myw4OSw5NywxMDEsMTAzLDEwNywxMDksMTEzLDEyNywxMzEsMTM3LDEzOSwxNDksMTUxLDE1NywxNjMsMTY3LDE3MywxNzksMTgxLDE5MSwxOTMsMTk3LDE5OSwyMTEsMjIzLDIyNywyMjksMjMzLDIzOSwyNDEsMjUxLDI1NywyNjMsMjY5LDI3MSwyNzcsMjgxLDI4MywyOTMsMzA3LDMxMSwzMTMsMzE3LDMzMSwzMzcsMzQ3LDM0OSwzNTMsMzU5LDM2NywzNzMsMzc5LDM4MywzODksMzk3LDQwMSw0MDksNDE5LDQyMSw0MzEsNDMzLDQzOSw0NDMsNDQ5LDQ1Nyw0NjEsNDYzLDQ2Nyw0NzksNDg3LDQ5MSw0OTksNTAzLDUwOSw1MjEsNTIzLDU0MSw1NDcsNTU3LDU2Myw1NjksNTcxLDU3Nyw1ODcsNTkzLDU5OSw2MDEsNjA3LDYxMyw2MTcsNjE5LDYzMSw2NDEsNjQzLDY0Nyw2NTMsNjU5LDY2MSw2NzMsNjc3LDY4Myw2OTEsNzAxLDcwOSw3MTksNzI3LDczMyw3MzksNzQzLDc1MSw3NTcsNzYxLDc2OSw3NzMsNzg3LDc5Nyw4MDksODExLDgyMSw4MjMsODI3LDgyOSw4MzksODUzLDg1Nyw4NTksODYzLDg3Nyw4ODEsODgzLDg4Nyw5MDcsOTExLDkxOSw5MjksOTM3LDk0MSw5NDcsOTUzLDk2Nyw5NzEsOTc3LDk4Myw5OTEsOTk3XSxscGxpbT0oMTw8MjYpL2xvd3ByaW1lc1tsb3dwcmltZXMubGVuZ3RoLTFdO2Z1bmN0aW9uIHJuZ19zZWVkX3RpbWUoKXt2YXIgeDt4PShuZXcgRGF0ZSkuZ2V0VGltZSgpLHJuZ19wb29sW3JuZ19wcHRyKytdXj0yNTUmeCxybmdfcG9vbFtybmdfcHB0cisrXV49eD4+OCYyNTUscm5nX3Bvb2xbcm5nX3BwdHIrK11ePXg+PjE2JjI1NSxybmdfcG9vbFtybmdfcHB0cisrXV49eD4+MjQmMjU1LHJuZ19wcHRyPj1ybmdfcHNpemUmJihybmdfcHB0ci09cm5nX3BzaXplKX1pZihCaWdJbnRlZ2VyLnByb3RvdHlwZS5jaHVua1NpemU9ZnVuY3Rpb24ocil7cmV0dXJuIE1hdGguZmxvb3IoTWF0aC5MTjIqdGhpcy5EQi9NYXRoLmxvZyhyKSl9LEJpZ0ludGVnZXIucHJvdG90eXBlLnRvUmFkaXg9ZnVuY3Rpb24oYil7aWYobnVsbD09YiYmKGI9MTApLDA9PXRoaXMuc2lnbnVtKCl8fGI8Mnx8Yj4zNilyZXR1cm5cIjBcIjt2YXIgY3M9dGhpcy5jaHVua1NpemUoYiksYT1NYXRoLnBvdyhiLGNzKSxkPW5idihhKSx5PW5iaSgpLHo9bmJpKCkscj1cIlwiO2Zvcih0aGlzLmRpdlJlbVRvKGQseSx6KTt5LnNpZ251bSgpPjA7KXI9KGErei5pbnRWYWx1ZSgpKS50b1N0cmluZyhiKS5zdWJzdHIoMSkrcix5LmRpdlJlbVRvKGQseSx6KTtyZXR1cm4gei5pbnRWYWx1ZSgpLnRvU3RyaW5nKGIpK3J9LEJpZ0ludGVnZXIucHJvdG90eXBlLmZyb21SYWRpeD1mdW5jdGlvbihzLGIpe3RoaXMuZnJvbUludCgwKSxudWxsPT1iJiYoYj0xMCk7Zm9yKHZhciBjcz10aGlzLmNodW5rU2l6ZShiKSxkPU1hdGgucG93KGIsY3MpLG1pPSExLGo9MCx3PTAsaT0wO2k8cy5sZW5ndGg7KytpKXt2YXIgeD1pbnRBdChzLGkpO3g8MD9cIi1cIj09cy5jaGFyQXQoaSkmJjA9PXRoaXMuc2lnbnVtKCkmJihtaT0hMCk6KHc9Yip3K3gsKytqPj1jcyYmKHRoaXMuZE11bHRpcGx5KGQpLHRoaXMuZEFkZE9mZnNldCh3LDApLGo9MCx3PTApKX1qPjAmJih0aGlzLmRNdWx0aXBseShNYXRoLnBvdyhiLGopKSx0aGlzLmRBZGRPZmZzZXQodywwKSksbWkmJkJpZ0ludGVnZXIuWkVSTy5zdWJUbyh0aGlzLHRoaXMpfSxCaWdJbnRlZ2VyLnByb3RvdHlwZS5mcm9tTnVtYmVyPWZ1bmN0aW9uKGEsYixjKXtpZihcIm51bWJlclwiPT10eXBlb2YgYilpZihhPDIpdGhpcy5mcm9tSW50KDEpO2Vsc2UgZm9yKHRoaXMuZnJvbU51bWJlcihhLGMpLHRoaXMudGVzdEJpdChhLTEpfHx0aGlzLmJpdHdpc2VUbyhCaWdJbnRlZ2VyLk9ORS5zaGlmdExlZnQoYS0xKSxvcF9vcix0aGlzKSx0aGlzLmlzRXZlbigpJiZ0aGlzLmRBZGRPZmZzZXQoMSwwKTshdGhpcy5pc1Byb2JhYmxlUHJpbWUoYik7KXRoaXMuZEFkZE9mZnNldCgyLDApLHRoaXMuYml0TGVuZ3RoKCk+YSYmdGhpcy5zdWJUbyhCaWdJbnRlZ2VyLk9ORS5zaGlmdExlZnQoYS0xKSx0aGlzKTtlbHNle3ZhciB4PW5ldyBBcnJheSx0PTcmYTt4Lmxlbmd0aD0xKyhhPj4zKSxiLm5leHRCeXRlcyh4KSx0PjA/eFswXSY9KDE8PHQpLTE6eFswXT0wLHRoaXMuZnJvbVN0cmluZyh4LDI1Nil9fSxCaWdJbnRlZ2VyLnByb3RvdHlwZS5iaXR3aXNlVG89ZnVuY3Rpb24oYSxvcCxyKXt2YXIgaSxmLG09TWF0aC5taW4oYS50LHRoaXMudCk7Zm9yKGk9MDtpPG07KytpKXJbaV09b3AodGhpc1tpXSxhW2ldKTtpZihhLnQ8dGhpcy50KXtmb3IoZj1hLnMmdGhpcy5ETSxpPW07aTx0aGlzLnQ7KytpKXJbaV09b3AodGhpc1tpXSxmKTtyLnQ9dGhpcy50fWVsc2V7Zm9yKGY9dGhpcy5zJnRoaXMuRE0saT1tO2k8YS50OysraSlyW2ldPW9wKGYsYVtpXSk7ci50PWEudH1yLnM9b3AodGhpcy5zLGEucyksci5jbGFtcCgpfSxCaWdJbnRlZ2VyLnByb3RvdHlwZS5jaGFuZ2VCaXQ9ZnVuY3Rpb24obixvcCl7dmFyIHI9QmlnSW50ZWdlci5PTkUuc2hpZnRMZWZ0KG4pO3JldHVybiB0aGlzLmJpdHdpc2VUbyhyLG9wLHIpLHJ9LEJpZ0ludGVnZXIucHJvdG90eXBlLmFkZFRvPWZ1bmN0aW9uKGEscil7Zm9yKHZhciBpPTAsYz0wLG09TWF0aC5taW4oYS50LHRoaXMudCk7aTxtOyljKz10aGlzW2ldK2FbaV0scltpKytdPWMmdGhpcy5ETSxjPj49dGhpcy5EQjtpZihhLnQ8dGhpcy50KXtmb3IoYys9YS5zO2k8dGhpcy50OyljKz10aGlzW2ldLHJbaSsrXT1jJnRoaXMuRE0sYz4+PXRoaXMuREI7Yys9dGhpcy5zfWVsc2V7Zm9yKGMrPXRoaXMucztpPGEudDspYys9YVtpXSxyW2krK109YyZ0aGlzLkRNLGM+Pj10aGlzLkRCO2MrPWEuc31yLnM9YzwwPy0xOjAsYz4wP3JbaSsrXT1jOmM8LTEmJihyW2krK109dGhpcy5EVitjKSxyLnQ9aSxyLmNsYW1wKCl9LEJpZ0ludGVnZXIucHJvdG90eXBlLmRNdWx0aXBseT1mdW5jdGlvbihuKXt0aGlzW3RoaXMudF09dGhpcy5hbSgwLG4tMSx0aGlzLDAsMCx0aGlzLnQpLCsrdGhpcy50LHRoaXMuY2xhbXAoKX0sQmlnSW50ZWdlci5wcm90b3R5cGUuZEFkZE9mZnNldD1mdW5jdGlvbihuLHcpe2lmKDAhPW4pe2Zvcig7dGhpcy50PD13Oyl0aGlzW3RoaXMudCsrXT0wO2Zvcih0aGlzW3ddKz1uO3RoaXNbd10+PXRoaXMuRFY7KXRoaXNbd10tPXRoaXMuRFYsKyt3Pj10aGlzLnQmJih0aGlzW3RoaXMudCsrXT0wKSwrK3RoaXNbd119fSxCaWdJbnRlZ2VyLnByb3RvdHlwZS5tdWx0aXBseUxvd2VyVG89ZnVuY3Rpb24oYSxuLHIpe3ZhciBqLGk9TWF0aC5taW4odGhpcy50K2EudCxuKTtmb3Ioci5zPTAsci50PWk7aT4wOylyWy0taV09MDtmb3Ioaj1yLnQtdGhpcy50O2k8ajsrK2kpcltpK3RoaXMudF09dGhpcy5hbSgwLGFbaV0scixpLDAsdGhpcy50KTtmb3Ioaj1NYXRoLm1pbihhLnQsbik7aTxqOysraSl0aGlzLmFtKDAsYVtpXSxyLGksMCxuLWkpO3IuY2xhbXAoKX0sQmlnSW50ZWdlci5wcm90b3R5cGUubXVsdGlwbHlVcHBlclRvPWZ1bmN0aW9uKGEsbixyKXstLW47dmFyIGk9ci50PXRoaXMudCthLnQtbjtmb3Ioci5zPTA7LS1pPj0wOylyW2ldPTA7Zm9yKGk9TWF0aC5tYXgobi10aGlzLnQsMCk7aTxhLnQ7KytpKXJbdGhpcy50K2ktbl09dGhpcy5hbShuLWksYVtpXSxyLDAsMCx0aGlzLnQraS1uKTtyLmNsYW1wKCksci5kclNoaWZ0VG8oMSxyKX0sQmlnSW50ZWdlci5wcm90b3R5cGUubW9kSW50PWZ1bmN0aW9uKG4pe2lmKG48PTApcmV0dXJuIDA7dmFyIGQ9dGhpcy5EViVuLHI9dGhpcy5zPDA/bi0xOjA7aWYodGhpcy50PjApaWYoMD09ZClyPXRoaXNbMF0lbjtlbHNlIGZvcih2YXIgaT10aGlzLnQtMTtpPj0wOy0taSlyPShkKnIrdGhpc1tpXSklbjtyZXR1cm4gcn0sQmlnSW50ZWdlci5wcm90b3R5cGUubWlsbGVyUmFiaW49ZnVuY3Rpb24odCl7dmFyIG4xPXRoaXMuc3VidHJhY3QoQmlnSW50ZWdlci5PTkUpLGs9bjEuZ2V0TG93ZXN0U2V0Qml0KCk7aWYoazw9MClyZXR1cm4hMTt2YXIgcj1uMS5zaGlmdFJpZ2h0KGspOyh0PXQrMT4+MSk+bG93cHJpbWVzLmxlbmd0aCYmKHQ9bG93cHJpbWVzLmxlbmd0aCk7Zm9yKHZhciBhPW5iaSgpLGk9MDtpPHQ7KytpKXthLmZyb21JbnQobG93cHJpbWVzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSpsb3dwcmltZXMubGVuZ3RoKV0pO3ZhciB5PWEubW9kUG93KHIsdGhpcyk7aWYoMCE9eS5jb21wYXJlVG8oQmlnSW50ZWdlci5PTkUpJiYwIT15LmNvbXBhcmVUbyhuMSkpe2Zvcih2YXIgaj0xO2orKzxrJiYwIT15LmNvbXBhcmVUbyhuMSk7KWlmKDA9PSh5PXkubW9kUG93SW50KDIsdGhpcykpLmNvbXBhcmVUbyhCaWdJbnRlZ2VyLk9ORSkpcmV0dXJuITE7aWYoMCE9eS5jb21wYXJlVG8objEpKXJldHVybiExfX1yZXR1cm4hMH0sQmlnSW50ZWdlci5wcm90b3R5cGUuY2xvbmU9ZnVuY3Rpb24oKXt2YXIgcj1uYmkoKTtyZXR1cm4gdGhpcy5jb3B5VG8ocikscn0sQmlnSW50ZWdlci5wcm90b3R5cGUuaW50VmFsdWU9ZnVuY3Rpb24oKXtpZih0aGlzLnM8MCl7aWYoMT09dGhpcy50KXJldHVybiB0aGlzWzBdLXRoaXMuRFY7aWYoMD09dGhpcy50KXJldHVybi0xfWVsc2V7aWYoMT09dGhpcy50KXJldHVybiB0aGlzWzBdO2lmKDA9PXRoaXMudClyZXR1cm4gMH1yZXR1cm4odGhpc1sxXSYoMTw8MzItdGhpcy5EQiktMSk8PHRoaXMuREJ8dGhpc1swXX0sQmlnSW50ZWdlci5wcm90b3R5cGUuYnl0ZVZhbHVlPWZ1bmN0aW9uKCl7cmV0dXJuIDA9PXRoaXMudD90aGlzLnM6dGhpc1swXTw8MjQ+PjI0fSxCaWdJbnRlZ2VyLnByb3RvdHlwZS5zaG9ydFZhbHVlPWZ1bmN0aW9uKCl7cmV0dXJuIDA9PXRoaXMudD90aGlzLnM6dGhpc1swXTw8MTY+PjE2fSxCaWdJbnRlZ2VyLnByb3RvdHlwZS5zaWdudW09ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5zPDA/LTE6dGhpcy50PD0wfHwxPT10aGlzLnQmJnRoaXNbMF08PTA/MDoxfSxCaWdJbnRlZ2VyLnByb3RvdHlwZS50b0J5dGVBcnJheT1mdW5jdGlvbigpe3ZhciBpPXRoaXMudCxyPW5ldyBBcnJheTtyWzBdPXRoaXMuczt2YXIgZCxwPXRoaXMuREItaSp0aGlzLkRCJTgsaz0wO2lmKGktLSA+MClmb3IocDx0aGlzLkRCJiYoZD10aGlzW2ldPj5wKSE9KHRoaXMucyZ0aGlzLkRNKT4+cCYmKHJbaysrXT1kfHRoaXMuczw8dGhpcy5EQi1wKTtpPj0wOylwPDg/KGQ9KHRoaXNbaV0mKDE8PHApLTEpPDw4LXAsZHw9dGhpc1stLWldPj4ocCs9dGhpcy5EQi04KSk6KGQ9dGhpc1tpXT4+KHAtPTgpJjI1NSxwPD0wJiYocCs9dGhpcy5EQiwtLWkpKSwwIT0oMTI4JmQpJiYoZHw9LTI1NiksMD09ayYmKDEyOCZ0aGlzLnMpIT0oMTI4JmQpJiYrK2ssKGs+MHx8ZCE9dGhpcy5zKSYmKHJbaysrXT1kKTtyZXR1cm4gcn0sQmlnSW50ZWdlci5wcm90b3R5cGUuZXF1YWxzPWZ1bmN0aW9uKGEpe3JldHVybiAwPT10aGlzLmNvbXBhcmVUbyhhKX0sQmlnSW50ZWdlci5wcm90b3R5cGUubWluPWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmNvbXBhcmVUbyhhKTwwP3RoaXM6YX0sQmlnSW50ZWdlci5wcm90b3R5cGUubWF4PWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmNvbXBhcmVUbyhhKT4wP3RoaXM6YX0sQmlnSW50ZWdlci5wcm90b3R5cGUuYW5kPWZ1bmN0aW9uKGEpe3ZhciByPW5iaSgpO3JldHVybiB0aGlzLmJpdHdpc2VUbyhhLG9wX2FuZCxyKSxyfSxCaWdJbnRlZ2VyLnByb3RvdHlwZS5vcj1mdW5jdGlvbihhKXt2YXIgcj1uYmkoKTtyZXR1cm4gdGhpcy5iaXR3aXNlVG8oYSxvcF9vcixyKSxyfSxCaWdJbnRlZ2VyLnByb3RvdHlwZS54b3I9ZnVuY3Rpb24oYSl7dmFyIHI9bmJpKCk7cmV0dXJuIHRoaXMuYml0d2lzZVRvKGEsb3BfeG9yLHIpLHJ9LEJpZ0ludGVnZXIucHJvdG90eXBlLmFuZE5vdD1mdW5jdGlvbihhKXt2YXIgcj1uYmkoKTtyZXR1cm4gdGhpcy5iaXR3aXNlVG8oYSxvcF9hbmRub3Qscikscn0sQmlnSW50ZWdlci5wcm90b3R5cGUubm90PWZ1bmN0aW9uKCl7Zm9yKHZhciByPW5iaSgpLGk9MDtpPHRoaXMudDsrK2kpcltpXT10aGlzLkRNJn50aGlzW2ldO3JldHVybiByLnQ9dGhpcy50LHIucz1+dGhpcy5zLHJ9LEJpZ0ludGVnZXIucHJvdG90eXBlLnNoaWZ0TGVmdD1mdW5jdGlvbihuKXt2YXIgcj1uYmkoKTtyZXR1cm4gbjwwP3RoaXMuclNoaWZ0VG8oLW4scik6dGhpcy5sU2hpZnRUbyhuLHIpLHJ9LEJpZ0ludGVnZXIucHJvdG90eXBlLnNoaWZ0UmlnaHQ9ZnVuY3Rpb24obil7dmFyIHI9bmJpKCk7cmV0dXJuIG48MD90aGlzLmxTaGlmdFRvKC1uLHIpOnRoaXMuclNoaWZ0VG8obixyKSxyfSxCaWdJbnRlZ2VyLnByb3RvdHlwZS5nZXRMb3dlc3RTZXRCaXQ9ZnVuY3Rpb24oKXtmb3IodmFyIGk9MDtpPHRoaXMudDsrK2kpaWYoMCE9dGhpc1tpXSlyZXR1cm4gaSp0aGlzLkRCK2xiaXQodGhpc1tpXSk7cmV0dXJuIHRoaXMuczwwP3RoaXMudCp0aGlzLkRCOi0xfSxCaWdJbnRlZ2VyLnByb3RvdHlwZS5iaXRDb3VudD1mdW5jdGlvbigpe2Zvcih2YXIgcj0wLHg9dGhpcy5zJnRoaXMuRE0saT0wO2k8dGhpcy50OysraSlyKz1jYml0KHRoaXNbaV1eeCk7cmV0dXJuIHJ9LEJpZ0ludGVnZXIucHJvdG90eXBlLnRlc3RCaXQ9ZnVuY3Rpb24obil7dmFyIGo9TWF0aC5mbG9vcihuL3RoaXMuREIpO3JldHVybiBqPj10aGlzLnQ/MCE9dGhpcy5zOjAhPSh0aGlzW2pdJjE8PG4ldGhpcy5EQil9LEJpZ0ludGVnZXIucHJvdG90eXBlLnNldEJpdD1mdW5jdGlvbihuKXtyZXR1cm4gdGhpcy5jaGFuZ2VCaXQobixvcF9vcil9LEJpZ0ludGVnZXIucHJvdG90eXBlLmNsZWFyQml0PWZ1bmN0aW9uKG4pe3JldHVybiB0aGlzLmNoYW5nZUJpdChuLG9wX2FuZG5vdCl9LEJpZ0ludGVnZXIucHJvdG90eXBlLmZsaXBCaXQ9ZnVuY3Rpb24obil7cmV0dXJuIHRoaXMuY2hhbmdlQml0KG4sb3BfeG9yKX0sQmlnSW50ZWdlci5wcm90b3R5cGUuYWRkPWZ1bmN0aW9uKGEpe3ZhciByPW5iaSgpO3JldHVybiB0aGlzLmFkZFRvKGEscikscn0sQmlnSW50ZWdlci5wcm90b3R5cGUuc3VidHJhY3Q9ZnVuY3Rpb24oYSl7dmFyIHI9bmJpKCk7cmV0dXJuIHRoaXMuc3ViVG8oYSxyKSxyfSxCaWdJbnRlZ2VyLnByb3RvdHlwZS5tdWx0aXBseT1mdW5jdGlvbihhKXt2YXIgcj1uYmkoKTtyZXR1cm4gdGhpcy5tdWx0aXBseVRvKGEscikscn0sQmlnSW50ZWdlci5wcm90b3R5cGUuZGl2aWRlPWZ1bmN0aW9uKGEpe3ZhciByPW5iaSgpO3JldHVybiB0aGlzLmRpdlJlbVRvKGEscixudWxsKSxyfSxCaWdJbnRlZ2VyLnByb3RvdHlwZS5yZW1haW5kZXI9ZnVuY3Rpb24oYSl7dmFyIHI9bmJpKCk7cmV0dXJuIHRoaXMuZGl2UmVtVG8oYSxudWxsLHIpLHJ9LEJpZ0ludGVnZXIucHJvdG90eXBlLmRpdmlkZUFuZFJlbWFpbmRlcj1mdW5jdGlvbihhKXt2YXIgcT1uYmkoKSxyPW5iaSgpO3JldHVybiB0aGlzLmRpdlJlbVRvKGEscSxyKSxuZXcgQXJyYXkocSxyKX0sQmlnSW50ZWdlci5wcm90b3R5cGUubW9kUG93PWZ1bmN0aW9uKGUsbSl7dmFyIGsseixpPWUuYml0TGVuZ3RoKCkscj1uYnYoMSk7aWYoaTw9MClyZXR1cm4gcjtrPWk8MTg/MTppPDQ4PzM6aTwxNDQ/NDppPDc2OD81OjYsej1pPDg/bmV3IENsYXNzaWMobSk6bS5pc0V2ZW4oKT9uZXcgQmFycmV0dChtKTpuZXcgTW9udGdvbWVyeShtKTt2YXIgZz1uZXcgQXJyYXksbj0zLGsxPWstMSxrbT0oMTw8ayktMTtpZihnWzFdPXouY29udmVydCh0aGlzKSxrPjEpe3ZhciBnMj1uYmkoKTtmb3Ioei5zcXJUbyhnWzFdLGcyKTtuPD1rbTspZ1tuXT1uYmkoKSx6Lm11bFRvKGcyLGdbbi0yXSxnW25dKSxuKz0yfXZhciB3LHQsaj1lLnQtMSxpczE9ITAscjI9bmJpKCk7Zm9yKGk9bmJpdHMoZVtqXSktMTtqPj0wOyl7Zm9yKGk+PWsxP3c9ZVtqXT4+aS1rMSZrbToodz0oZVtqXSYoMTw8aSsxKS0xKTw8azEtaSxqPjAmJih3fD1lW2otMV0+PnRoaXMuREIraS1rMSkpLG49azswPT0oMSZ3KTspdz4+PTEsLS1uO2lmKChpLT1uKTwwJiYoaSs9dGhpcy5EQiwtLWopLGlzMSlnW3ddLmNvcHlUbyhyKSxpczE9ITE7ZWxzZXtmb3IoO24+MTspei5zcXJUbyhyLHIyKSx6LnNxclRvKHIyLHIpLG4tPTI7bj4wP3ouc3FyVG8ocixyMik6KHQ9cixyPXIyLHIyPXQpLHoubXVsVG8ocjIsZ1t3XSxyKX1mb3IoO2o+PTAmJjA9PShlW2pdJjE8PGkpOyl6LnNxclRvKHIscjIpLHQ9cixyPXIyLHIyPXQsLS1pPDAmJihpPXRoaXMuREItMSwtLWopfXJldHVybiB6LnJldmVydChyKX0sQmlnSW50ZWdlci5wcm90b3R5cGUubW9kSW52ZXJzZT1mdW5jdGlvbihtKXt2YXIgYWM9bS5pc0V2ZW4oKTtpZih0aGlzLmlzRXZlbigpJiZhY3x8MD09bS5zaWdudW0oKSlyZXR1cm4gQmlnSW50ZWdlci5aRVJPO2Zvcih2YXIgdT1tLmNsb25lKCksdj10aGlzLmNsb25lKCksYT1uYnYoMSksYj1uYnYoMCksYz1uYnYoMCksZD1uYnYoMSk7MCE9dS5zaWdudW0oKTspe2Zvcig7dS5pc0V2ZW4oKTspdS5yU2hpZnRUbygxLHUpLGFjPyhhLmlzRXZlbigpJiZiLmlzRXZlbigpfHwoYS5hZGRUbyh0aGlzLGEpLGIuc3ViVG8obSxiKSksYS5yU2hpZnRUbygxLGEpKTpiLmlzRXZlbigpfHxiLnN1YlRvKG0sYiksYi5yU2hpZnRUbygxLGIpO2Zvcig7di5pc0V2ZW4oKTspdi5yU2hpZnRUbygxLHYpLGFjPyhjLmlzRXZlbigpJiZkLmlzRXZlbigpfHwoYy5hZGRUbyh0aGlzLGMpLGQuc3ViVG8obSxkKSksYy5yU2hpZnRUbygxLGMpKTpkLmlzRXZlbigpfHxkLnN1YlRvKG0sZCksZC5yU2hpZnRUbygxLGQpO3UuY29tcGFyZVRvKHYpPj0wPyh1LnN1YlRvKHYsdSksYWMmJmEuc3ViVG8oYyxhKSxiLnN1YlRvKGQsYikpOih2LnN1YlRvKHUsdiksYWMmJmMuc3ViVG8oYSxjKSxkLnN1YlRvKGIsZCkpfXJldHVybiAwIT12LmNvbXBhcmVUbyhCaWdJbnRlZ2VyLk9ORSk/QmlnSW50ZWdlci5aRVJPOmQuY29tcGFyZVRvKG0pPj0wP2Quc3VidHJhY3QobSk6ZC5zaWdudW0oKTwwPyhkLmFkZFRvKG0sZCksZC5zaWdudW0oKTwwP2QuYWRkKG0pOmQpOmR9LEJpZ0ludGVnZXIucHJvdG90eXBlLnBvdz1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5leHAoZSxuZXcgTnVsbEV4cCl9LEJpZ0ludGVnZXIucHJvdG90eXBlLmdjZD1mdW5jdGlvbihhKXt2YXIgeD10aGlzLnM8MD90aGlzLm5lZ2F0ZSgpOnRoaXMuY2xvbmUoKSx5PWEuczwwP2EubmVnYXRlKCk6YS5jbG9uZSgpO2lmKHguY29tcGFyZVRvKHkpPDApe3ZhciB0PXg7eD15LHk9dH12YXIgaT14LmdldExvd2VzdFNldEJpdCgpLGc9eS5nZXRMb3dlc3RTZXRCaXQoKTtpZihnPDApcmV0dXJuIHg7Zm9yKGk8ZyYmKGc9aSksZz4wJiYoeC5yU2hpZnRUbyhnLHgpLHkuclNoaWZ0VG8oZyx5KSk7eC5zaWdudW0oKT4wOykoaT14LmdldExvd2VzdFNldEJpdCgpKT4wJiZ4LnJTaGlmdFRvKGkseCksKGk9eS5nZXRMb3dlc3RTZXRCaXQoKSk+MCYmeS5yU2hpZnRUbyhpLHkpLHguY29tcGFyZVRvKHkpPj0wPyh4LnN1YlRvKHkseCkseC5yU2hpZnRUbygxLHgpKTooeS5zdWJUbyh4LHkpLHkuclNoaWZ0VG8oMSx5KSk7cmV0dXJuIGc+MCYmeS5sU2hpZnRUbyhnLHkpLHl9LEJpZ0ludGVnZXIucHJvdG90eXBlLmlzUHJvYmFibGVQcmltZT1mdW5jdGlvbih0KXt2YXIgaSx4PXRoaXMuYWJzKCk7aWYoMT09eC50JiZ4WzBdPD1sb3dwcmltZXNbbG93cHJpbWVzLmxlbmd0aC0xXSl7Zm9yKGk9MDtpPGxvd3ByaW1lcy5sZW5ndGg7KytpKWlmKHhbMF09PWxvd3ByaW1lc1tpXSlyZXR1cm4hMDtyZXR1cm4hMX1pZih4LmlzRXZlbigpKXJldHVybiExO2ZvcihpPTE7aTxsb3dwcmltZXMubGVuZ3RoOyl7Zm9yKHZhciBtPWxvd3ByaW1lc1tpXSxqPWkrMTtqPGxvd3ByaW1lcy5sZW5ndGgmJm08bHBsaW07KW0qPWxvd3ByaW1lc1tqKytdO2ZvcihtPXgubW9kSW50KG0pO2k8ajspaWYobSVsb3dwcmltZXNbaSsrXT09MClyZXR1cm4hMX1yZXR1cm4geC5taWxsZXJSYWJpbih0KX0sQmlnSW50ZWdlci5wcm90b3R5cGUuc3F1YXJlPWZ1bmN0aW9uKCl7dmFyIHI9bmJpKCk7cmV0dXJuIHRoaXMuc3F1YXJlVG8ocikscn0sQmlnSW50ZWdlci5wcm90b3R5cGUuQmFycmV0dD1CYXJyZXR0LG51bGw9PXJuZ19wb29sKXt2YXIgdDtpZihybmdfcG9vbD1uZXcgQXJyYXkscm5nX3BwdHI9MCxcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93JiZ3aW5kb3cuY3J5cHRvKWlmKHdpbmRvdy5jcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKXt2YXIgdWE9bmV3IFVpbnQ4QXJyYXkoMzIpO2Zvcih3aW5kb3cuY3J5cHRvLmdldFJhbmRvbVZhbHVlcyh1YSksdD0wO3Q8MzI7Kyt0KXJuZ19wb29sW3JuZ19wcHRyKytdPXVhW3RdfWVsc2UgaWYoXCJOZXRzY2FwZVwiPT1uYXZpZ2F0b3IuYXBwTmFtZSYmbmF2aWdhdG9yLmFwcFZlcnNpb248XCI1XCIpe3ZhciB6PXdpbmRvdy5jcnlwdG8ucmFuZG9tKDMyKTtmb3IodD0wO3Q8ei5sZW5ndGg7Kyt0KXJuZ19wb29sW3JuZ19wcHRyKytdPTI1NSZ6LmNoYXJDb2RlQXQodCl9Zm9yKDtybmdfcHB0cjxybmdfcHNpemU7KXQ9TWF0aC5mbG9vcig2NTUzNipNYXRoLnJhbmRvbSgpKSxybmdfcG9vbFtybmdfcHB0cisrXT10Pj4+OCxybmdfcG9vbFtybmdfcHB0cisrXT0yNTUmdDtybmdfcHB0cj0wLHJuZ19zZWVkX3RpbWUoKX1mdW5jdGlvbiBybmdfZ2V0X2J5dGUoKXtpZihudWxsPT1ybmdfc3RhdGUpe2Zvcihybmdfc2VlZF90aW1lKCksKHJuZ19zdGF0ZT1uZXcgQXJjZm91cikuaW5pdChybmdfcG9vbCkscm5nX3BwdHI9MDtybmdfcHB0cjxybmdfcG9vbC5sZW5ndGg7KytybmdfcHB0cilybmdfcG9vbFtybmdfcHB0cl09MDtybmdfcHB0cj0wfXJldHVybiBybmdfc3RhdGUubmV4dCgpfWZ1bmN0aW9uIFNlY3VyZVJhbmRvbSgpe31mdW5jdGlvbiBBcmNmb3VyKCl7dGhpcy5pPTAsdGhpcy5qPTAsdGhpcy5TPW5ldyBBcnJheX1TZWN1cmVSYW5kb20ucHJvdG90eXBlLm5leHRCeXRlcz1mdW5jdGlvbihiYSl7dmFyIGk7Zm9yKGk9MDtpPGJhLmxlbmd0aDsrK2kpYmFbaV09cm5nX2dldF9ieXRlKCl9LEFyY2ZvdXIucHJvdG90eXBlLmluaXQ9ZnVuY3Rpb24oa2V5KXt2YXIgaSxqLHQ7Zm9yKGk9MDtpPDI1NjsrK2kpdGhpcy5TW2ldPWk7Zm9yKGo9MCxpPTA7aTwyNTY7KytpKWo9ait0aGlzLlNbaV0ra2V5W2kla2V5Lmxlbmd0aF0mMjU1LHQ9dGhpcy5TW2ldLHRoaXMuU1tpXT10aGlzLlNbal0sdGhpcy5TW2pdPXQ7dGhpcy5pPTAsdGhpcy5qPTB9LEFyY2ZvdXIucHJvdG90eXBlLm5leHQ9ZnVuY3Rpb24oKXt2YXIgdDtyZXR1cm4gdGhpcy5pPXRoaXMuaSsxJjI1NSx0aGlzLmo9dGhpcy5qK3RoaXMuU1t0aGlzLmldJjI1NSx0PXRoaXMuU1t0aGlzLmldLHRoaXMuU1t0aGlzLmldPXRoaXMuU1t0aGlzLmpdLHRoaXMuU1t0aGlzLmpdPXQsdGhpcy5TW3QrdGhpcy5TW3RoaXMuaV0mMjU1XX07dmFyIHJuZ19wc2l6ZT0yNTY7QmlnSW50ZWdlci5TZWN1cmVSYW5kb209U2VjdXJlUmFuZG9tLEJpZ0ludGVnZXIuQmlnSW50ZWdlcj1CaWdJbnRlZ2VyLG1vZHVsZS5leHBvcnRzPUJpZ0ludGVnZXJ9KS5jYWxsKGNvbW1vbmpzR2xvYmFsKX0pLEJpZ0ludGVnZXI9anNibi5CaWdJbnRlZ2VyLERpZ2VzdEluZm9IZWFkPXtzaGExOlwiMzAyMTMwMDkwNjA1MmIwZTAzMDIxYTA1MDAwNDE0XCIsc2hhMjI0OlwiMzAyZDMwMGQwNjA5NjA4NjQ4MDE2NTAzMDQwMjA0MDUwMDA0MWNcIixzaGEyNTY6XCIzMDMxMzAwZDA2MDk2MDg2NDgwMTY1MDMwNDAyMDEwNTAwMDQyMFwiLHNoYTM4NDpcIjMwNDEzMDBkMDYwOTYwODY0ODAxNjUwMzA0MDIwMjA1MDAwNDMwXCIsc2hhNTEyOlwiMzA1MTMwMGQwNjA5NjA4NjQ4MDE2NTAzMDQwMjAzMDUwMDA0NDBcIixtZDI6XCIzMDIwMzAwYzA2MDgyYTg2NDg4NmY3MGQwMjAyMDUwMDA0MTBcIixtZDU6XCIzMDIwMzAwYzA2MDgyYTg2NDg4NmY3MGQwMjA1MDUwMDA0MTBcIixyaXBlbWQxNjA6XCIzMDIxMzAwOTA2MDUyYjI0MDMwMjAxMDUwMDA0MTRcIn0sRGlnZXN0QWxncz17c2hhMjU2OnNoYTI1Nn07ZnVuY3Rpb24gUlNBVmVyaWZpZXIobW9kdWx1cyxleHApe2lmKHRoaXMubj1udWxsLHRoaXMuZT0wLCEobnVsbCE9bW9kdWx1cyYmbnVsbCE9ZXhwJiZtb2R1bHVzLmxlbmd0aD4wJiZleHAubGVuZ3RoPjApKXRocm93IG5ldyBFcnJvcihcIkludmFsaWQga2V5IGRhdGFcIik7dGhpcy5uPW5ldyBCaWdJbnRlZ2VyKG1vZHVsdXMsMTYpLHRoaXMuZT1wYXJzZUludChleHAsMTYpfWZ1bmN0aW9uIGdldEFsZ29yaXRobUZyb21EaWdlc3QoaERpZ2VzdEluZm8pe2Zvcih2YXIgYWxnTmFtZSBpbiBEaWdlc3RJbmZvSGVhZCl7dmFyIGhlYWQ9RGlnZXN0SW5mb0hlYWRbYWxnTmFtZV0sbGVuPWhlYWQubGVuZ3RoO2lmKGhEaWdlc3RJbmZvLnN1YnN0cmluZygwLGxlbik9PT1oZWFkKXJldHVybnthbGc6YWxnTmFtZSxoYXNoOmhEaWdlc3RJbmZvLnN1YnN0cmluZyhsZW4pfX1yZXR1cm5bXX1SU0FWZXJpZmllci5wcm90b3R5cGUudmVyaWZ5PWZ1bmN0aW9uKG1zZyxlbmNzaWcpe2VuY3NpZz1lbmNzaWcucmVwbGFjZSgvW14wLTlhLWZdfFtcXHNcXG5dXS9naSxcIlwiKTt2YXIgc2lnPW5ldyBCaWdJbnRlZ2VyKGVuY3NpZywxNik7aWYoc2lnLmJpdExlbmd0aCgpPnRoaXMubi5iaXRMZW5ndGgoKSl0aHJvdyBuZXcgRXJyb3IoXCJTaWduYXR1cmUgZG9lcyBub3QgbWF0Y2ggd2l0aCB0aGUga2V5IG1vZHVsdXMuXCIpO3ZhciBkaWdlc3RJbmZvPWdldEFsZ29yaXRobUZyb21EaWdlc3Qoc2lnLm1vZFBvd0ludCh0aGlzLmUsdGhpcy5uKS50b1N0cmluZygxNikucmVwbGFjZSgvXjFmKzAwLyxcIlwiKSk7aWYoMD09PWRpZ2VzdEluZm8ubGVuZ3RoKXJldHVybiExO2lmKCFEaWdlc3RBbGdzLmhhc093blByb3BlcnR5KGRpZ2VzdEluZm8uYWxnKSl0aHJvdyBuZXcgRXJyb3IoXCJIYXNoaW5nIGFsZ29yaXRobSBpcyBub3Qgc3VwcG9ydGVkLlwiKTt2YXIgbXNnSGFzaD1EaWdlc3RBbGdzW2RpZ2VzdEluZm8uYWxnXShtc2cpLnRvU3RyaW5nKCk7cmV0dXJuIGRpZ2VzdEluZm8uaGFzaD09PW1zZ0hhc2h9O3ZhciByc2FWZXJpZmllcj1SU0FWZXJpZmllcjtmdW5jdGlvbiBwYWRkaW5nJDEoc3RyKXt2YXIgbW9kPXN0ci5sZW5ndGglNDtyZXR1cm4gMD09PW1vZD9zdHI6c3RyK25ldyBBcnJheSgxKyg0LW1vZCkpLmpvaW4oXCI9XCIpfWZ1bmN0aW9uIGJ5dGVBcnJheVRvU3RyaW5nJDEoYXJyYXkpe2Zvcih2YXIgcmVzdWx0PVwiXCIsaT0wO2k8YXJyYXkubGVuZ3RoO2krKylyZXN1bHQrPVN0cmluZy5mcm9tQ2hhckNvZGUoYXJyYXlbaV0pO3JldHVybiByZXN1bHR9ZnVuY3Rpb24gc3RyaW5nVG9CeXRlQXJyYXkkMShzdHIpe2Zvcih2YXIgYXJyPW5ldyBBcnJheShzdHIubGVuZ3RoKSxhPTA7YTxzdHIubGVuZ3RoO2ErKylhcnJbYV09c3RyLmNoYXJDb2RlQXQoYSk7cmV0dXJuIGFycn1mdW5jdGlvbiBieXRlQXJyYXlUb0hleChyYXcpe2Zvcih2YXIgSEVYPVwiXCIsaT0wO2k8cmF3Lmxlbmd0aDtpKyspe3ZhciBfaGV4PXJhd1tpXS50b1N0cmluZygxNik7SEVYKz0yPT09X2hleC5sZW5ndGg/X2hleDpcIjBcIitfaGV4fXJldHVybiBIRVh9ZnVuY3Rpb24gZW5jb2RlU3RyaW5nKHN0cil7cmV0dXJuIGJhc2U2NEpzLmZyb21CeXRlQXJyYXkoc3RyaW5nVG9CeXRlQXJyYXkkMShlbmNvZGVVUklDb21wb25lbnQoc3RyKS5yZXBsYWNlKC8lKFswLTlBLUZdezJ9KS9nLGZ1bmN0aW9uKG1hdGNoLHAxKXtyZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShcIjB4XCIrcDEpfSkpKS5yZXBsYWNlKC9cXCsvZyxcIi1cIikucmVwbGFjZSgvXFwvL2csXCJfXCIpfWZ1bmN0aW9uIGRlY29kZVRvU3RyaW5nKHN0cil7cmV0dXJuIHN0cj1wYWRkaW5nJDEoc3RyKS5yZXBsYWNlKC9cXC0vZyxcIitcIikucmVwbGFjZSgvXy9nLFwiL1wiKSxkZWNvZGVVUklDb21wb25lbnQoYnl0ZUFycmF5VG9TdHJpbmckMShiYXNlNjRKcy50b0J5dGVBcnJheShzdHIpKS5zcGxpdChcIlwiKS5tYXAoZnVuY3Rpb24oYyl7cmV0dXJuXCIlXCIrKFwiMDBcIitjLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpKS5zbGljZSgtMil9KS5qb2luKFwiXCIpKX1mdW5jdGlvbiBkZWNvZGVUb0hFWChzdHIpe3JldHVybiBieXRlQXJyYXlUb0hleChiYXNlNjRKcy50b0J5dGVBcnJheShwYWRkaW5nJDEoc3RyKSkpfWZ1bmN0aW9uIGJhc2U2NFRvQmFzZTY0VXJsKGJhc2U2NFN0cmluZyl7dmFyIFNBRkVfVVJMX0VOQ09ESU5HX01BUFBJTkc9e1wiK1wiOlwiLVwiLFwiL1wiOlwiX1wiLFwiPVwiOlwiXCJ9O3JldHVybiBiYXNlNjRTdHJpbmcucmVwbGFjZSgvWytcXC89XS9nLGZ1bmN0aW9uKG0pe3JldHVybiBTQUZFX1VSTF9FTkNPRElOR19NQVBQSU5HW21dfSl9dmFyIGJhc2U2NF8xPXtlbmNvZGVTdHJpbmc6ZW5jb2RlU3RyaW5nLGRlY29kZVRvU3RyaW5nOmRlY29kZVRvU3RyaW5nLGJ5dGVBcnJheVRvU3RyaW5nOmJ5dGVBcnJheVRvU3RyaW5nJDEsc3RyaW5nVG9CeXRlQXJyYXk6c3RyaW5nVG9CeXRlQXJyYXkkMSxwYWRkaW5nOnBhZGRpbmckMSxieXRlQXJyYXlUb0hleDpieXRlQXJyYXlUb0hleCxkZWNvZGVUb0hFWDpkZWNvZGVUb0hFWCxiYXNlNjRUb0Jhc2U2NFVybDpiYXNlNjRUb0Jhc2U2NFVybH0sdXJsSm9pbiQxPWNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZ1bmN0aW9uKG1vZHVsZSl7dmFyIGNvbnRleHQsZGVmaW5pdGlvbjtjb250ZXh0PWNvbW1vbmpzR2xvYmFsLGRlZmluaXRpb249ZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgaW5wdXQ9YXJndW1lbnRzO1wib2JqZWN0XCI9PXR5cGVvZiBhcmd1bWVudHNbMF0mJihpbnB1dD1hcmd1bWVudHNbMF0sYXJndW1lbnRzWzFdKTt2YXIgam9pbmVkPVtdLnNsaWNlLmNhbGwoaW5wdXQsMCkuam9pbihcIi9cIik7cmV0dXJuIGpvaW5lZC5yZXBsYWNlKC86XFwvL2csXCI6Ly9cIikucmVwbGFjZSgvKFteOlxcc10pXFwvKy9nLFwiJDEvXCIpLnJlcGxhY2UoL1xcLyhcXD98JnwjW14hXSkvZyxcIiQxXCIpLnJlcGxhY2UoLyhcXD8uKylcXD8vZyxcIiQxJlwiKX19LG1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPWRlZmluaXRpb24oKTpjb250ZXh0LnVybGpvaW49ZGVmaW5pdGlvbigpfSk7ZnVuY3Rpb24gcHJvY2Vzcyhqd2tzKXtyZXR1cm57bW9kdWx1czpiYXNlNjRfMS5kZWNvZGVUb0hFWChqd2tzLm4pLGV4cDpiYXNlNjRfMS5kZWNvZGVUb0hFWChqd2tzLmUpfX1mdW5jdGlvbiBnZXRKV0tTKG9wdGlvbnMsY2Ipe3ZhciB1cmw9b3B0aW9ucy5qd2tzVVJJfHx1cmxKb2luJDEob3B0aW9ucy5pc3MsXCIud2VsbC1rbm93blwiLFwiandrcy5qc29uXCIpO3JldHVybiBjbGllbnQuZ2V0KHVybCkuZW5kKGZ1bmN0aW9uKGVycixkYXRhKXt2YXIgYSxrZXksbWF0Y2hpbmdLZXk9bnVsbDtpZihlcnIpcmV0dXJuIGNiKGVycik7Zm9yKGE9MDthPGRhdGEuYm9keS5rZXlzLmxlbmd0aCYmbnVsbD09PW1hdGNoaW5nS2V5O2ErKykoa2V5PWRhdGEuYm9keS5rZXlzW2FdKS5raWQ9PT1vcHRpb25zLmtpZCYmKG1hdGNoaW5nS2V5PWtleSk7cmV0dXJuIGNiKG51bGwscHJvY2VzcyhtYXRjaGluZ0tleSkpfSl9dmFyIGp3a3M9e3Byb2Nlc3M6cHJvY2VzcyxnZXRKV0tTOmdldEpXS1N9O2Z1bmN0aW9uIENvbmZpZ3VyYXRpb25FcnJvcihtZXNzYWdlKXt0aGlzLm5hbWU9XCJDb25maWd1cmF0aW9uRXJyb3JcIix0aGlzLm1lc3NhZ2U9bWVzc2FnZXx8XCJcIn1mdW5jdGlvbiBUb2tlblZhbGlkYXRpb25FcnJvcihtZXNzYWdlKXt0aGlzLm5hbWU9XCJUb2tlblZhbGlkYXRpb25FcnJvclwiLHRoaXMubWVzc2FnZT1tZXNzYWdlfHxcIlwifUNvbmZpZ3VyYXRpb25FcnJvci5wcm90b3R5cGU9RXJyb3IucHJvdG90eXBlLFRva2VuVmFsaWRhdGlvbkVycm9yLnByb3RvdHlwZT1FcnJvci5wcm90b3R5cGU7dmFyIGVycm9yJDE9e0NvbmZpZ3VyYXRpb25FcnJvcjpDb25maWd1cmF0aW9uRXJyb3IsVG9rZW5WYWxpZGF0aW9uRXJyb3I6VG9rZW5WYWxpZGF0aW9uRXJyb3J9O2Z1bmN0aW9uIER1bW15Q2FjaGUoKXt9RHVtbXlDYWNoZS5wcm90b3R5cGUuZ2V0PWZ1bmN0aW9uKCl7cmV0dXJuIG51bGx9LER1bW15Q2FjaGUucHJvdG90eXBlLmhhcz1mdW5jdGlvbigpe3JldHVybiExfSxEdW1teUNhY2hlLnByb3RvdHlwZS5zZXQ9ZnVuY3Rpb24oKXt9O3ZhciBkdW1teUNhY2hlPUR1bW15Q2FjaGUsc3VwcG9ydGVkQWxncz1bXCJSUzI1NlwiXTtmdW5jdGlvbiBJZFRva2VuVmVyaWZpZXIocGFyYW1ldGVycyl7dmFyIG9wdGlvbnM9cGFyYW1ldGVyc3x8e307aWYodGhpcy5qd2tzQ2FjaGU9b3B0aW9ucy5qd2tzQ2FjaGV8fG5ldyBkdW1teUNhY2hlLHRoaXMuZXhwZWN0ZWRBbGc9b3B0aW9ucy5leHBlY3RlZEFsZ3x8XCJSUzI1NlwiLHRoaXMuaXNzdWVyPW9wdGlvbnMuaXNzdWVyLHRoaXMuYXVkaWVuY2U9b3B0aW9ucy5hdWRpZW5jZSx0aGlzLmxlZXdheT1vcHRpb25zLmxlZXdheXx8MCx0aGlzLl9fZGlzYWJsZUV4cGlyYXRpb25DaGVjaz1vcHRpb25zLl9fZGlzYWJsZUV4cGlyYXRpb25DaGVja3x8ITEsdGhpcy5qd2tzVVJJPW9wdGlvbnMuandrc1VSSSx0aGlzLmxlZXdheTwwfHx0aGlzLmxlZXdheT42MCl0aHJvdyBuZXcgZXJyb3IkMS5Db25maWd1cmF0aW9uRXJyb3IoXCJUaGUgbGVld2F5IHNob3VsZCBiZSBwb3NpdGl2ZSBhbmQgbG93ZXIgdGhhbiBhIG1pbnV0ZS5cIik7aWYoLTE9PT1zdXBwb3J0ZWRBbGdzLmluZGV4T2YodGhpcy5leHBlY3RlZEFsZykpdGhyb3cgbmV3IGVycm9yJDEuQ29uZmlndXJhdGlvbkVycm9yKFwiQWxnb3JpdGhtIFwiK3RoaXMuZXhwZWN0ZWRBbGcrXCIgaXMgbm90IHN1cHBvcnRlZC4gKEV4cGVjdGVkIGFsZ3M6IFtcIitzdXBwb3J0ZWRBbGdzLmpvaW4oXCIsXCIpK1wiXSlcIil9SWRUb2tlblZlcmlmaWVyLnByb3RvdHlwZS52ZXJpZnk9ZnVuY3Rpb24odG9rZW4sbm9uY2UsY2Ipe3ZhciBqd3Q9dGhpcy5kZWNvZGUodG9rZW4pO2lmKGp3dCBpbnN0YW5jZW9mIEVycm9yKXJldHVybiBjYihqd3QsITEpO3ZhciBoZWFkQW5kUGF5bG9hZD1qd3QuZW5jb2RlZC5oZWFkZXIrXCIuXCIrand0LmVuY29kZWQucGF5bG9hZCxzaWduYXR1cmU9YmFzZTY0XzEuZGVjb2RlVG9IRVgoand0LmVuY29kZWQuc2lnbmF0dXJlKSxhbGc9and0LmhlYWRlci5hbGcsa2lkPWp3dC5oZWFkZXIua2lkLGF1ZD1qd3QucGF5bG9hZC5hdWQsaXNzPWp3dC5wYXlsb2FkLmlzcyxleHA9and0LnBheWxvYWQuZXhwLG5iZj1qd3QucGF5bG9hZC5uYmYsdG5vbmNlPWp3dC5wYXlsb2FkLm5vbmNlfHxudWxsO2lmKHRoaXMuaXNzdWVyIT09aXNzKXJldHVybiBjYihuZXcgZXJyb3IkMS5Ub2tlblZhbGlkYXRpb25FcnJvcihcIklzc3VlciBcIitpc3MrXCIgaXMgbm90IHZhbGlkLlwiKSwhMSk7aWYodGhpcy5hdWRpZW5jZSE9PWF1ZClyZXR1cm4gY2IobmV3IGVycm9yJDEuVG9rZW5WYWxpZGF0aW9uRXJyb3IoXCJBdWRpZW5jZSBcIithdWQrXCIgaXMgbm90IHZhbGlkLlwiKSwhMSk7aWYodGhpcy5leHBlY3RlZEFsZyE9PWFsZylyZXR1cm4gY2IobmV3IGVycm9yJDEuVG9rZW5WYWxpZGF0aW9uRXJyb3IoXCJBbGdvcml0aG0gXCIrYWxnK1wiIGlzIG5vdCBzdXBwb3J0ZWQuIChFeHBlY3RlZCBhbGdzOiBbXCIrc3VwcG9ydGVkQWxncy5qb2luKFwiLFwiKStcIl0pXCIpLCExKTtpZih0bm9uY2UhPT1ub25jZSlyZXR1cm4gY2IobmV3IGVycm9yJDEuVG9rZW5WYWxpZGF0aW9uRXJyb3IoXCJOb25jZSBkb2VzIG5vdCBtYXRjaC5cIiksITEpO3ZhciBleHBpcmF0aW9uRXJyb3I9dGhpcy52ZXJpZnlFeHBBbmROYmYoZXhwLG5iZik7cmV0dXJuIGV4cGlyYXRpb25FcnJvcj9jYihleHBpcmF0aW9uRXJyb3IsITEpOnRoaXMuZ2V0UnNhVmVyaWZpZXIoaXNzLGtpZCxmdW5jdGlvbihlcnIscnNhVmVyaWZpZXIkJDEpe3JldHVybiBlcnI/Y2IoZXJyKTpyc2FWZXJpZmllciQkMS52ZXJpZnkoaGVhZEFuZFBheWxvYWQsc2lnbmF0dXJlKT9jYihudWxsLGp3dC5wYXlsb2FkKTpjYihuZXcgZXJyb3IkMS5Ub2tlblZhbGlkYXRpb25FcnJvcihcIkludmFsaWQgc2lnbmF0dXJlLlwiKSl9KX0sSWRUb2tlblZlcmlmaWVyLnByb3RvdHlwZS52ZXJpZnlFeHBBbmROYmY9ZnVuY3Rpb24oZXhwLG5iZil7dmFyIG5vdz1uZXcgRGF0ZSxleHBEYXRlPW5ldyBEYXRlKDApLG5iZkRhdGU9bmV3IERhdGUoMCk7cmV0dXJuIHRoaXMuX19kaXNhYmxlRXhwaXJhdGlvbkNoZWNrP251bGw6KGV4cERhdGUuc2V0VVRDU2Vjb25kcyhleHArdGhpcy5sZWV3YXkpLG5vdz5leHBEYXRlP25ldyBlcnJvciQxLlRva2VuVmFsaWRhdGlvbkVycm9yKFwiRXhwaXJlZCB0b2tlbi5cIik6dm9pZCAwPT09bmJmP251bGw6KG5iZkRhdGUuc2V0VVRDU2Vjb25kcyhuYmYtdGhpcy5sZWV3YXkpLG5vdzxuYmZEYXRlP25ldyBlcnJvciQxLlRva2VuVmFsaWRhdGlvbkVycm9yKFwiVGhlIHRva2VuIGlzIG5vdCB2YWxpZCB1bnRpbCBsYXRlciBpbiB0aGUgZnV0dXJlLiBQbGVhc2UgY2hlY2sgeW91ciBjb21wdXRlZCBjbG9jay5cIik6bnVsbCkpfSxJZFRva2VuVmVyaWZpZXIucHJvdG90eXBlLnZlcmlmeUV4cEFuZElhdD1mdW5jdGlvbihleHAsaWF0KXt2YXIgbm93PW5ldyBEYXRlLGV4cERhdGU9bmV3IERhdGUoMCksaWF0RGF0ZT1uZXcgRGF0ZSgwKTtyZXR1cm4gdGhpcy5fX2Rpc2FibGVFeHBpcmF0aW9uQ2hlY2s/bnVsbDooZXhwRGF0ZS5zZXRVVENTZWNvbmRzKGV4cCt0aGlzLmxlZXdheSksbm93PmV4cERhdGU/bmV3IGVycm9yJDEuVG9rZW5WYWxpZGF0aW9uRXJyb3IoXCJFeHBpcmVkIHRva2VuLlwiKTooaWF0RGF0ZS5zZXRVVENTZWNvbmRzKGlhdC10aGlzLmxlZXdheSksbm93PGlhdERhdGU/bmV3IGVycm9yJDEuVG9rZW5WYWxpZGF0aW9uRXJyb3IoXCJUaGUgdG9rZW4gd2FzIGlzc3VlZCBpbiB0aGUgZnV0dXJlLiBQbGVhc2UgY2hlY2sgeW91ciBjb21wdXRlZCBjbG9jay5cIik6bnVsbCkpfSxJZFRva2VuVmVyaWZpZXIucHJvdG90eXBlLmdldFJzYVZlcmlmaWVyPWZ1bmN0aW9uKGlzcyxraWQsY2Ipe3ZhciBfdGhpcz10aGlzLGNhY2hla2V5PWlzcytraWQ7aWYodGhpcy5qd2tzQ2FjaGUuaGFzKGNhY2hla2V5KSl7dmFyIGtleUluZm89dGhpcy5qd2tzQ2FjaGUuZ2V0KGNhY2hla2V5KTtjYihudWxsLG5ldyByc2FWZXJpZmllcihrZXlJbmZvLm1vZHVsdXMsa2V5SW5mby5leHApKX1lbHNlIGp3a3MuZ2V0SldLUyh7andrc1VSSTp0aGlzLmp3a3NVUkksaXNzOmlzcyxraWQ6a2lkfSxmdW5jdGlvbihlcnIsa2V5SW5mbyl7cmV0dXJuIGVycj9jYihlcnIpOihfdGhpcy5qd2tzQ2FjaGUuc2V0KGNhY2hla2V5LGtleUluZm8pLGNiKG51bGwsbmV3IHJzYVZlcmlmaWVyKGtleUluZm8ubW9kdWx1cyxrZXlJbmZvLmV4cCkpKX0pfSxJZFRva2VuVmVyaWZpZXIucHJvdG90eXBlLmRlY29kZT1mdW5jdGlvbih0b2tlbil7dmFyIGhlYWRlcixwYXlsb2FkLHBhcnRzPXRva2VuLnNwbGl0KFwiLlwiKTtpZigzIT09cGFydHMubGVuZ3RoKXJldHVybiBuZXcgZXJyb3IkMS5Ub2tlblZhbGlkYXRpb25FcnJvcihcIkNhbm5vdCBkZWNvZGUgYSBtYWxmb3JtZWQgSldUXCIpO3RyeXtoZWFkZXI9SlNPTi5wYXJzZShiYXNlNjRfMS5kZWNvZGVUb1N0cmluZyhwYXJ0c1swXSkpLHBheWxvYWQ9SlNPTi5wYXJzZShiYXNlNjRfMS5kZWNvZGVUb1N0cmluZyhwYXJ0c1sxXSkpfWNhdGNoKGUpe3JldHVybiBuZXcgZXJyb3IkMS5Ub2tlblZhbGlkYXRpb25FcnJvcihcIlRva2VuIGhlYWRlciBvciBwYXlsb2FkIGlzIG5vdCB2YWxpZCBKU09OXCIpfXJldHVybntoZWFkZXI6aGVhZGVyLHBheWxvYWQ6cGF5bG9hZCxlbmNvZGVkOntoZWFkZXI6cGFydHNbMF0scGF5bG9hZDpwYXJ0c1sxXSxzaWduYXR1cmU6cGFydHNbMl19fX0sSWRUb2tlblZlcmlmaWVyLnByb3RvdHlwZS52YWxpZGF0ZUFjY2Vzc1Rva2VuPWZ1bmN0aW9uKGFjY2Vzc1Rva2VuLGFsZyxhdEhhc2gsY2Ipe2lmKHRoaXMuZXhwZWN0ZWRBbGchPT1hbGcpcmV0dXJuIGNiKG5ldyBlcnJvciQxLlRva2VuVmFsaWRhdGlvbkVycm9yKFwiQWxnb3JpdGhtIFwiK2FsZytcIiBpcyBub3Qgc3VwcG9ydGVkLiAoRXhwZWN0ZWQgYWxnOiBcIit0aGlzLmV4cGVjdGVkQWxnK1wiKVwiKSk7dmFyIHNoYTI1NkFjY2Vzc1Rva2VuPXNoYTI1NihhY2Nlc3NUb2tlbiksaGFzaFRvSGV4PWVuY0hleC5zdHJpbmdpZnkoc2hhMjU2QWNjZXNzVG9rZW4pLGhhc2hUb0hleEZpcnN0SGFsZj1oYXNoVG9IZXguc3Vic3RyaW5nKDAsaGFzaFRvSGV4Lmxlbmd0aC8yKSxoYXNoRmlyc3RIYWxmV29yZEFycmF5PWVuY0hleC5wYXJzZShoYXNoVG9IZXhGaXJzdEhhbGYpLGhhc2hGaXJzdEhhbGZCYXNlNjQ9ZW5jQmFzZTY0LnN0cmluZ2lmeShoYXNoRmlyc3RIYWxmV29yZEFycmF5KTtyZXR1cm4gY2IoYmFzZTY0XzEuYmFzZTY0VG9CYXNlNjRVcmwoaGFzaEZpcnN0SGFsZkJhc2U2NCkhPT1hdEhhc2g/bmV3IGVycm9yJDEuVG9rZW5WYWxpZGF0aW9uRXJyb3IoXCJJbnZhbGlkIGFjY2Vzc190b2tlblwiKTpudWxsKX07dmFyIHNyYz1JZFRva2VuVmVyaWZpZXI7ZnVuY3Rpb24gUGx1Z2luSGFuZGxlcih3ZWJBdXRoLHBsdWdpbnMpe3RoaXMucGx1Z2lucz1wbHVnaW5zO2Zvcih2YXIgYT0wO2E8dGhpcy5wbHVnaW5zLmxlbmd0aDthKyspe2lmKHRoaXMucGx1Z2luc1thXS52ZXJzaW9uIT09dmVyc2lvbi5yYXcpe3ZhciBwbHVnaW5OYW1lPVwiXCI7dGhyb3cgdGhpcy5wbHVnaW5zW2FdLmNvbnN0cnVjdG9yJiZ0aGlzLnBsdWdpbnNbYV0uY29uc3RydWN0b3IubmFtZSYmKHBsdWdpbk5hbWU9dGhpcy5wbHVnaW5zW2FdLmNvbnN0cnVjdG9yLm5hbWUpLG5ldyBFcnJvcihcIlBsdWdpbiBcIitwbHVnaW5OYW1lK1wiIHZlcnNpb24gKFwiK3RoaXMucGx1Z2luc1thXS52ZXJzaW9uK1wiKSBpcyBub3QgY29tcGF0aWJsZSB3aXRoIHRoZSBTREsgdmVyc2lvbiAoXCIrdmVyc2lvbi5yYXcrXCIpXCIpfXRoaXMucGx1Z2luc1thXS5zZXRXZWJBdXRoKHdlYkF1dGgpfX1mdW5jdGlvbiByYW5kb21TdHJpbmcobGVuZ3RoKXt2YXIgYnl0ZXM9bmV3IFVpbnQ4QXJyYXkobGVuZ3RoKSxyZXN1bHQ9W10sY2hhcnNldD1cIjAxMjM0NTY3ODlBQkNERUZHSElKS0xNTk9QUVJTVFVWWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXotLl9+XCIsY3J5cHRvT2JqPXdpbmRvd0hhbmRsZXIuZ2V0V2luZG93KCkuY3J5cHRvfHx3aW5kb3dIYW5kbGVyLmdldFdpbmRvdygpLm1zQ3J5cHRvO2lmKCFjcnlwdG9PYmopcmV0dXJuIG51bGw7Zm9yKHZhciByYW5kb209Y3J5cHRvT2JqLmdldFJhbmRvbVZhbHVlcyhieXRlcyksYT0wO2E8cmFuZG9tLmxlbmd0aDthKyspcmVzdWx0LnB1c2goY2hhcnNldFtyYW5kb21bYV0lY2hhcnNldC5sZW5ndGhdKTtyZXR1cm4gcmVzdWx0LmpvaW4oXCJcIil9UGx1Z2luSGFuZGxlci5wcm90b3R5cGUuZ2V0PWZ1bmN0aW9uKGV4dGVuc2liaWxpdHlQb2ludCl7Zm9yKHZhciBhPTA7YTx0aGlzLnBsdWdpbnMubGVuZ3RoO2ErKylpZih0aGlzLnBsdWdpbnNbYV0uc3VwcG9ydHMoZXh0ZW5zaWJpbGl0eVBvaW50KSlyZXR1cm4gdGhpcy5wbHVnaW5zW2FdLmluaXQoKTtyZXR1cm4gbnVsbH07dmFyIHJhbmRvbT17cmFuZG9tU3RyaW5nOnJhbmRvbVN0cmluZ30sTUlOVVRFU18xNT0xLzk2LE1JTlVURVNfMzA9MS80OCxERUZBVUxUX05BTUVTUEFDRT1cImNvbS5hdXRoMC5hdXRoLlwiO2Z1bmN0aW9uIFRyYW5zYWN0aW9uTWFuYWdlcihvcHRpb25zKXt2YXIgdHJhbnNhY3Rpb249b3B0aW9ucy50cmFuc2FjdGlvbnx8e307dGhpcy5uYW1lc3BhY2U9dHJhbnNhY3Rpb24ubmFtZXNwYWNlfHxERUZBVUxUX05BTUVTUEFDRSx0aGlzLmtleUxlbmd0aD10cmFuc2FjdGlvbi5rZXlMZW5ndGh8fDMyLHRoaXMuc3RvcmFnZT1uZXcgU3RvcmFnZShvcHRpb25zKSx0aGlzLm9wdGlvbnM9b3B0aW9uc31mdW5jdGlvbiBJZnJhbWVIYW5kbGVyKG9wdGlvbnMpe2lmKHRoaXMudXJsPW9wdGlvbnMudXJsLHRoaXMuY2FsbGJhY2s9b3B0aW9ucy5jYWxsYmFjayx0aGlzLnRpbWVvdXQ9b3B0aW9ucy50aW1lb3V0fHw2ZTQsdGhpcy50aW1lb3V0Q2FsbGJhY2s9b3B0aW9ucy50aW1lb3V0Q2FsbGJhY2t8fG51bGwsdGhpcy5ldmVudExpc3RlbmVyVHlwZT1vcHRpb25zLmV2ZW50TGlzdGVuZXJUeXBlfHxcIm1lc3NhZ2VcIix0aGlzLmlmcmFtZT1udWxsLHRoaXMudGltZW91dEhhbmRsZT1udWxsLHRoaXMuX2Rlc3Ryb3lUaW1lb3V0PW51bGwsdGhpcy50cmFuc2llbnRNZXNzYWdlRXZlbnRMaXN0ZW5lcj1udWxsLHRoaXMucHJveHlFdmVudExpc3RlbmVyPW51bGwsdGhpcy5ldmVudFZhbGlkYXRvcj1vcHRpb25zLmV2ZW50VmFsaWRhdG9yfHx7aXNWYWxpZDpmdW5jdGlvbigpe3JldHVybiEwfX0sXCJmdW5jdGlvblwiIT10eXBlb2YgdGhpcy5jYWxsYmFjayl0aHJvdyBuZXcgRXJyb3IoXCJvcHRpb25zLmNhbGxiYWNrIG11c3QgYmUgYSBmdW5jdGlvblwiKX1mdW5jdGlvbiBydW5XZWJNZXNzYWdlRmxvdyhhdXRob3JpemVVcmwsb3B0aW9ucyxjYWxsYmFjayl7bmV3IElmcmFtZUhhbmRsZXIoe3VybDphdXRob3JpemVVcmwsZXZlbnRMaXN0ZW5lclR5cGU6XCJtZXNzYWdlXCIsY2FsbGJhY2s6ZnVuY3Rpb24oZXZlbnREYXRhKXtjYWxsYmFjayhudWxsLGV2ZW50RGF0YSl9LHRpbWVvdXQ6b3B0aW9ucy50aW1lb3V0LGV2ZW50VmFsaWRhdG9yOntpc1ZhbGlkOmZ1bmN0aW9uKGV2ZW50RGF0YSl7cmV0dXJuXCJhdXRob3JpemF0aW9uX3Jlc3BvbnNlXCI9PT1ldmVudERhdGEuZXZlbnQuZGF0YS50eXBlJiZvcHRpb25zLnN0YXRlPT09ZXZlbnREYXRhLmV2ZW50LmRhdGEucmVzcG9uc2Uuc3RhdGV9fSx0aW1lb3V0Q2FsbGJhY2s6ZnVuY3Rpb24oKXtjYWxsYmFjayh7ZXJyb3I6XCJ0aW1lb3V0XCIsZXJyb3JfZGVzY3JpcHRpb246XCJUaW1lb3V0IGR1cmluZyBleGVjdXRpbmcgd2ViX21lc3NhZ2UgY29tbXVuaWNhdGlvblwiLHN0YXRlOm9wdGlvbnMuc3RhdGV9KX19KS5pbml0KCl9ZnVuY3Rpb24gV2ViTWVzc2FnZUhhbmRsZXIod2ViQXV0aCl7dGhpcy53ZWJBdXRoPXdlYkF1dGgsdGhpcy53YXJuPW5ldyBXYXJuKHdlYkF1dGguYmFzZU9wdGlvbnMpfWZ1bmN0aW9uIENyb3NzT3JpZ2luQXV0aGVudGljYXRpb24od2ViQXV0aCxvcHRpb25zKXt0aGlzLndlYkF1dGg9d2ViQXV0aCx0aGlzLmJhc2VPcHRpb25zPW9wdGlvbnMsdGhpcy5yZXF1ZXN0PW5ldyBSZXF1ZXN0QnVpbGRlcihvcHRpb25zKSx0aGlzLndlYk1lc3NhZ2VIYW5kbGVyPW5ldyBXZWJNZXNzYWdlSGFuZGxlcih3ZWJBdXRoKSx0aGlzLnN0b3JhZ2U9bmV3IFN0b3JhZ2Uob3B0aW9ucyl9ZnVuY3Rpb24gZ2V0RnJhZ21lbnQobmFtZSl7dmFyIHBhcnRzPShcIiZcIit3aW5kb3dIYW5kbGVyLmdldFdpbmRvdygpLmxvY2F0aW9uLmhhc2guc3Vic3RyaW5nKDEpKS5zcGxpdChcIiZcIituYW1lK1wiPVwiKTtpZigyPT09cGFydHMubGVuZ3RoKXJldHVybiBwYXJ0cy5wb3AoKS5zcGxpdChcIiZcIikuc2hpZnQoKX1mdW5jdGlvbiBjcmVhdGVLZXkob3JpZ2luLGNvSWQpe3JldHVybltcImNvL3ZlcmlmaWVyXCIsZW5jb2RlVVJJQ29tcG9uZW50KG9yaWdpbiksZW5jb2RlVVJJQ29tcG9uZW50KGNvSWQpXS5qb2luKFwiL1wiKX1mdW5jdGlvbiB0cnlHZXRWZXJpZmllcihzdG9yYWdlLGtleSl7dHJ5e3ZhciB2ZXJpZmllcj1zdG9yYWdlLmdldEl0ZW0oa2V5KTtyZXR1cm4gc3RvcmFnZS5yZW1vdmVJdGVtKGtleSksdmVyaWZpZXJ8fFwiXCJ9Y2F0Y2goZSl7cmV0dXJuXCJcIn19ZnVuY3Rpb24gUmVkaXJlY3QoYXV0aDAsb3B0aW9ucyl7dGhpcy53ZWJBdXRoPWF1dGgwLHRoaXMuYmFzZU9wdGlvbnM9b3B0aW9ucyx0aGlzLmNyb3NzT3JpZ2luQXV0aGVudGljYXRpb249bmV3IENyb3NzT3JpZ2luQXV0aGVudGljYXRpb24oYXV0aDAsdGhpcy5iYXNlT3B0aW9ucyksdGhpcy53YXJuPW5ldyBXYXJuKHtkaXNhYmxlV2FybmluZ3M6ISFvcHRpb25zLl9kaXNhYmxlRGVwcmVjYXRpb25XYXJuaW5nc30pfVRyYW5zYWN0aW9uTWFuYWdlci5wcm90b3R5cGUucHJvY2Vzcz1mdW5jdGlvbihvcHRpb25zKXtpZighb3B0aW9ucy5yZXNwb25zZVR5cGUpdGhyb3cgbmV3IEVycm9yKFwicmVzcG9uc2VUeXBlIGlzIHJlcXVpcmVkXCIpO3ZhciBsYXN0VXNlZENvbm5lY3Rpb249b3B0aW9ucy5yZWFsbXx8b3B0aW9ucy5jb25uZWN0aW9uLHJlc3BvbnNlVHlwZUluY2x1ZGVzSWRUb2tlbj0tMSE9PW9wdGlvbnMucmVzcG9uc2VUeXBlLmluZGV4T2YoXCJpZF90b2tlblwiKSx0cmFuc2FjdGlvbj10aGlzLmdlbmVyYXRlVHJhbnNhY3Rpb24ob3B0aW9ucy5hcHBTdGF0ZSxvcHRpb25zLnN0YXRlLG9wdGlvbnMubm9uY2UsbGFzdFVzZWRDb25uZWN0aW9uLHJlc3BvbnNlVHlwZUluY2x1ZGVzSWRUb2tlbik7cmV0dXJuIG9wdGlvbnMuc3RhdGV8fChvcHRpb25zLnN0YXRlPXRyYW5zYWN0aW9uLnN0YXRlKSxyZXNwb25zZVR5cGVJbmNsdWRlc0lkVG9rZW4mJiFvcHRpb25zLm5vbmNlJiYob3B0aW9ucy5ub25jZT10cmFuc2FjdGlvbi5ub25jZSksb3B0aW9uc30sVHJhbnNhY3Rpb25NYW5hZ2VyLnByb3RvdHlwZS5nZW5lcmF0ZVRyYW5zYWN0aW9uPWZ1bmN0aW9uKGFwcFN0YXRlLHN0YXRlLG5vbmNlLGxhc3RVc2VkQ29ubmVjdGlvbixnZW5lcmF0ZU5vbmNlKXtyZXR1cm4gc3RhdGU9c3RhdGV8fHJhbmRvbS5yYW5kb21TdHJpbmcodGhpcy5rZXlMZW5ndGgpLG5vbmNlPW5vbmNlfHwoZ2VuZXJhdGVOb25jZT9yYW5kb20ucmFuZG9tU3RyaW5nKHRoaXMua2V5TGVuZ3RoKTpudWxsKSx3aW5kb3dIYW5kbGVyLmdldFdpbmRvdygpLmxvY2F0aW9uLmhvc3Q9PT10aGlzLm9wdGlvbnMuZG9tYWlufHx0aGlzLnN0b3JhZ2Uuc2V0SXRlbSh0aGlzLm5hbWVzcGFjZStzdGF0ZSx7bm9uY2U6bm9uY2UsYXBwU3RhdGU6YXBwU3RhdGUsc3RhdGU6c3RhdGUsbGFzdFVzZWRDb25uZWN0aW9uOmxhc3RVc2VkQ29ubmVjdGlvbn0se2V4cGlyZXM6TUlOVVRFU18zMH0pLHtzdGF0ZTpzdGF0ZSxub25jZTpub25jZX19LFRyYW5zYWN0aW9uTWFuYWdlci5wcm90b3R5cGUuZ2V0U3RvcmVkVHJhbnNhY3Rpb249ZnVuY3Rpb24oc3RhdGUpe3ZhciB0cmFuc2FjdGlvbkRhdGE7cmV0dXJuIHRyYW5zYWN0aW9uRGF0YT10aGlzLnN0b3JhZ2UuZ2V0SXRlbSh0aGlzLm5hbWVzcGFjZStzdGF0ZSksdGhpcy5jbGVhclRyYW5zYWN0aW9uKHN0YXRlKSx0cmFuc2FjdGlvbkRhdGF9LFRyYW5zYWN0aW9uTWFuYWdlci5wcm90b3R5cGUuY2xlYXJUcmFuc2FjdGlvbj1mdW5jdGlvbihzdGF0ZSl7dGhpcy5zdG9yYWdlLnJlbW92ZUl0ZW0odGhpcy5uYW1lc3BhY2Urc3RhdGUpfSxJZnJhbWVIYW5kbGVyLnByb3RvdHlwZS5pbml0PWZ1bmN0aW9uKCl7dmFyIF90aGlzPXRoaXMsX3dpbmRvdz13aW5kb3dIYW5kbGVyLmdldFdpbmRvdygpO3N3aXRjaCh0aGlzLmlmcmFtZT1fd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIiksdGhpcy5pZnJhbWUuc3R5bGUuZGlzcGxheT1cIm5vbmVcIix0aGlzLnByb3h5RXZlbnRMaXN0ZW5lcj1mdW5jdGlvbihlKXtfdGhpcy5ldmVudExpc3RlbmVyKGUpfSx0aGlzLmV2ZW50TGlzdGVuZXJUeXBlKXtjYXNlXCJtZXNzYWdlXCI6dGhpcy5ldmVudFNvdXJjZU9iamVjdD1fd2luZG93O2JyZWFrO2Nhc2VcImxvYWRcIjp0aGlzLmV2ZW50U291cmNlT2JqZWN0PXRoaXMuaWZyYW1lO2JyZWFrO2RlZmF1bHQ6dGhyb3cgbmV3IEVycm9yKFwiVW5zdXBwb3J0ZWQgZXZlbnQgbGlzdGVuZXIgdHlwZTogXCIrdGhpcy5ldmVudExpc3RlbmVyVHlwZSl9dGhpcy5ldmVudFNvdXJjZU9iamVjdC5hZGRFdmVudExpc3RlbmVyKHRoaXMuZXZlbnRMaXN0ZW5lclR5cGUsdGhpcy5wcm94eUV2ZW50TGlzdGVuZXIsITEpLF93aW5kb3cuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmlmcmFtZSksdGhpcy5pZnJhbWUuc3JjPXRoaXMudXJsLHRoaXMudGltZW91dEhhbmRsZT1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7X3RoaXMudGltZW91dEhhbmRsZXIoKX0sdGhpcy50aW1lb3V0KX0sSWZyYW1lSGFuZGxlci5wcm90b3R5cGUuZXZlbnRMaXN0ZW5lcj1mdW5jdGlvbihldmVudCl7dmFyIGV2ZW50RGF0YT17ZXZlbnQ6ZXZlbnQsc291cmNlT2JqZWN0OnRoaXMuZXZlbnRTb3VyY2VPYmplY3R9O3RoaXMuZXZlbnRWYWxpZGF0b3IuaXNWYWxpZChldmVudERhdGEpJiYodGhpcy5kZXN0cm95KCksdGhpcy5jYWxsYmFjayhldmVudERhdGEpKX0sSWZyYW1lSGFuZGxlci5wcm90b3R5cGUudGltZW91dEhhbmRsZXI9ZnVuY3Rpb24oKXt0aGlzLmRlc3Ryb3koKSx0aGlzLnRpbWVvdXRDYWxsYmFjayYmdGhpcy50aW1lb3V0Q2FsbGJhY2soKX0sSWZyYW1lSGFuZGxlci5wcm90b3R5cGUuZGVzdHJveT1mdW5jdGlvbigpe3ZhciBfdGhpcz10aGlzO2NsZWFyVGltZW91dCh0aGlzLnRpbWVvdXRIYW5kbGUpLHRoaXMuX2Rlc3Ryb3lUaW1lb3V0PXNldFRpbWVvdXQoZnVuY3Rpb24oKXtfdGhpcy5ldmVudFNvdXJjZU9iamVjdC5yZW1vdmVFdmVudExpc3RlbmVyKF90aGlzLmV2ZW50TGlzdGVuZXJUeXBlLF90aGlzLnByb3h5RXZlbnRMaXN0ZW5lciwhMSksX3RoaXMuaWZyYW1lLnBhcmVudE5vZGUmJl90aGlzLmlmcmFtZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKF90aGlzLmlmcmFtZSl9LDApfSxXZWJNZXNzYWdlSGFuZGxlci5wcm90b3R5cGUucnVuPWZ1bmN0aW9uKG9wdGlvbnMsY2Ipe3ZhciBfdGhpcz10aGlzO29wdGlvbnMucmVzcG9uc2VNb2RlPVwid2ViX21lc3NhZ2VcIixvcHRpb25zLnByb21wdD1cIm5vbmVcIjt2YXIgY3VycmVudE9yaWdpbj13aW5kb3dIYW5kbGVyLmdldE9yaWdpbigpLHJlZGlyZWN0VXJpT3JpZ2luPW9iamVjdEhlbHBlci5nZXRPcmlnaW5Gcm9tVXJsKG9wdGlvbnMucmVkaXJlY3RVcmkpO2lmKHJlZGlyZWN0VXJpT3JpZ2luJiZjdXJyZW50T3JpZ2luIT09cmVkaXJlY3RVcmlPcmlnaW4pcmV0dXJuIGNiKHtlcnJvcjpcIm9yaWdpbl9taXNtYXRjaFwiLGVycm9yX2Rlc2NyaXB0aW9uOlwiVGhlIHJlZGlyZWN0VXJpJ3Mgb3JpZ2luIChcIityZWRpcmVjdFVyaU9yaWdpbitcIikgc2hvdWxkIG1hdGNoIHRoZSB3aW5kb3cncyBvcmlnaW4gKFwiK2N1cnJlbnRPcmlnaW4rXCIpLlwifSk7cnVuV2ViTWVzc2FnZUZsb3codGhpcy53ZWJBdXRoLmNsaWVudC5idWlsZEF1dGhvcml6ZVVybChvcHRpb25zKSxvcHRpb25zLGZ1bmN0aW9uKGVycixldmVudERhdGEpe3ZhciBlcnJvcj1lcnI7aWYoIWVyciYmZXZlbnREYXRhLmV2ZW50LmRhdGEucmVzcG9uc2UuZXJyb3ImJihlcnJvcj1ldmVudERhdGEuZXZlbnQuZGF0YS5yZXNwb25zZSksIWVycm9yKXt2YXIgcGFyc2VkSGFzaD1ldmVudERhdGEuZXZlbnQuZGF0YS5yZXNwb25zZTtyZXR1cm4gX3RoaXMud2ViQXV0aC52YWxpZGF0ZUF1dGhlbnRpY2F0aW9uUmVzcG9uc2Uob3B0aW9ucyxwYXJzZWRIYXNoLGNiKX1yZXR1cm5cImNvbnNlbnRfcmVxdWlyZWRcIj09PWVycm9yLmVycm9yJiZcImxvY2FsaG9zdFwiPT09d2luZG93SGFuZGxlci5nZXRXaW5kb3coKS5sb2NhdGlvbi5ob3N0bmFtZSYmX3RoaXMud2Fybi53YXJuaW5nKFwiQ29uc2VudCBSZXF1aXJlZC4gQ29uc2VudCBjYW4ndCBiZSBza2lwcGVkIG9uIGxvY2FsaG9zdC4gUmVhZCBtb3JlIGhlcmU6IGh0dHBzOi8vYXV0aDAuY29tL2RvY3MvYXBpLWF1dGgvdXNlci1jb25zZW50I3NraXBwaW5nLWNvbnNlbnQtZm9yLWZpcnN0LXBhcnR5LWNsaWVudHNcIiksX3RoaXMud2ViQXV0aC50cmFuc2FjdGlvbk1hbmFnZXIuY2xlYXJUcmFuc2FjdGlvbihlcnJvci5zdGF0ZSksY2Iob2JqZWN0SGVscGVyLnBpY2soZXJyb3IsW1wiZXJyb3JcIixcImVycm9yX2Rlc2NyaXB0aW9uXCJdKSl9KX0sQ3Jvc3NPcmlnaW5BdXRoZW50aWNhdGlvbi5wcm90b3R5cGUubG9naW49ZnVuY3Rpb24ob3B0aW9ucyxjYil7dmFyIF90aGlzPXRoaXMsdXJsPXVybEpvaW4odGhpcy5iYXNlT3B0aW9ucy5yb290VXJsLFwiL2NvL2F1dGhlbnRpY2F0ZVwiKTtvcHRpb25zLnVzZXJuYW1lPW9wdGlvbnMudXNlcm5hbWV8fG9wdGlvbnMuZW1haWwsZGVsZXRlIG9wdGlvbnMuZW1haWw7dmFyIGF1dGhlbnRpY2F0ZUJvZHk9e2NsaWVudF9pZDpvcHRpb25zLmNsaWVudElEfHx0aGlzLmJhc2VPcHRpb25zLmNsaWVudElELHVzZXJuYW1lOm9wdGlvbnMudXNlcm5hbWV9O29wdGlvbnMucGFzc3dvcmQmJihhdXRoZW50aWNhdGVCb2R5LnBhc3N3b3JkPW9wdGlvbnMucGFzc3dvcmQpLG9wdGlvbnMub3RwJiYoYXV0aGVudGljYXRlQm9keS5vdHA9b3B0aW9ucy5vdHApO3ZhciByZWFsbT1vcHRpb25zLnJlYWxtfHx0aGlzLmJhc2VPcHRpb25zLnJlYWxtO2lmKHJlYWxtKXt2YXIgY3JlZGVudGlhbFR5cGU9b3B0aW9ucy5jcmVkZW50aWFsVHlwZXx8dGhpcy5iYXNlT3B0aW9ucy5jcmVkZW50aWFsVHlwZXx8XCJodHRwOi8vYXV0aDAuY29tL29hdXRoL2dyYW50LXR5cGUvcGFzc3dvcmQtcmVhbG1cIjthdXRoZW50aWNhdGVCb2R5LnJlYWxtPXJlYWxtLGF1dGhlbnRpY2F0ZUJvZHkuY3JlZGVudGlhbF90eXBlPWNyZWRlbnRpYWxUeXBlfWVsc2UgYXV0aGVudGljYXRlQm9keS5jcmVkZW50aWFsX3R5cGU9XCJwYXNzd29yZFwiO3RoaXMucmVxdWVzdC5wb3N0KHVybCkud2l0aENyZWRlbnRpYWxzKCkuc2VuZChhdXRoZW50aWNhdGVCb2R5KS5lbmQoZnVuY3Rpb24oZXJyLGRhdGEpe2lmKGVycil7dmFyIGVycm9yT2JqZWN0PWVyci5yZXNwb25zZSYmZXJyLnJlc3BvbnNlLmJvZHl8fHtlcnJvcjpcInJlcXVlc3RfZXJyb3JcIixlcnJvcl9kZXNjcmlwdGlvbjpKU09OLnN0cmluZ2lmeShlcnIpfTtyZXR1cm4gd3JhcENhbGxiYWNrKGNiLHtmb3JjZUxlZ2FjeUVycm9yOiEwfSkoZXJyb3JPYmplY3QpfXZhciBwb3B1cE1vZGU9ITA9PT1vcHRpb25zLnBvcHVwO29wdGlvbnM9b2JqZWN0SGVscGVyLmJsYWNrbGlzdChvcHRpb25zLFtcInBhc3N3b3JkXCIsXCJjcmVkZW50aWFsVHlwZVwiLFwib3RwXCIsXCJwb3B1cFwiXSk7dmFyIGF1dGhvcml6ZU9wdGlvbnM9b2JqZWN0SGVscGVyLm1lcmdlKG9wdGlvbnMpLndpdGgoe2xvZ2luVGlja2V0OmRhdGEuYm9keS5sb2dpbl90aWNrZXR9KSxrZXk9Y3JlYXRlS2V5KF90aGlzLmJhc2VPcHRpb25zLnJvb3RVcmwsZGF0YS5ib2R5LmNvX2lkKTtfdGhpcy5zdG9yYWdlLnNldEl0ZW0oa2V5LGRhdGEuYm9keS5jb192ZXJpZmllcix7ZXhwaXJlczpNSU5VVEVTXzE1fSkscG9wdXBNb2RlP190aGlzLndlYk1lc3NhZ2VIYW5kbGVyLnJ1bihhdXRob3JpemVPcHRpb25zLHdyYXBDYWxsYmFjayhjYix7Zm9yY2VMZWdhY3lFcnJvcjohMH0pKTpfdGhpcy53ZWJBdXRoLmF1dGhvcml6ZShhdXRob3JpemVPcHRpb25zKX0pfSxDcm9zc09yaWdpbkF1dGhlbnRpY2F0aW9uLnByb3RvdHlwZS5jYWxsYmFjaz1mdW5jdGlvbigpe3ZhciB0YXJnZXRPcmlnaW49ZGVjb2RlVVJJQ29tcG9uZW50KGdldEZyYWdtZW50KFwib3JpZ2luXCIpKSx0aGVXaW5kb3c9d2luZG93SGFuZGxlci5nZXRXaW5kb3coKSxfdGhpcz10aGlzO3RoZVdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLGZ1bmN0aW9uKGV2dCl7aWYoXCJjb192ZXJpZmllcl9yZXF1ZXN0XCI9PT1ldnQuZGF0YS50eXBlKXt2YXIga2V5PWNyZWF0ZUtleShldnQub3JpZ2luLGV2dC5kYXRhLnJlcXVlc3QuaWQpLHZlcmlmaWVyPXRyeUdldFZlcmlmaWVyKF90aGlzLnN0b3JhZ2Usa2V5KTtldnQuc291cmNlLnBvc3RNZXNzYWdlKHt0eXBlOlwiY29fdmVyaWZpZXJfcmVzcG9uc2VcIixyZXNwb25zZTp7dmVyaWZpZXI6dmVyaWZpZXJ9fSxldnQub3JpZ2luKX19KSx0aGVXaW5kb3cucGFyZW50LnBvc3RNZXNzYWdlKHt0eXBlOlwicmVhZHlcIn0sdGFyZ2V0T3JpZ2luKX0sUmVkaXJlY3QucHJvdG90eXBlLmxvZ2luV2l0aENyZWRlbnRpYWxzPWZ1bmN0aW9uKG9wdGlvbnMsY2Ipe29wdGlvbnMucmVhbG09b3B0aW9ucy5yZWFsbXx8b3B0aW9ucy5jb25uZWN0aW9uLGRlbGV0ZSBvcHRpb25zLmNvbm5lY3Rpb24sdGhpcy5jcm9zc09yaWdpbkF1dGhlbnRpY2F0aW9uLmxvZ2luKG9wdGlvbnMsY2IpfSxSZWRpcmVjdC5wcm90b3R5cGUuc2lnbnVwQW5kTG9naW49ZnVuY3Rpb24ob3B0aW9ucyxjYil7dmFyIF90aGlzPXRoaXM7cmV0dXJuIHRoaXMud2ViQXV0aC5jbGllbnQuZGJDb25uZWN0aW9uLnNpZ251cChvcHRpb25zLGZ1bmN0aW9uKGVycil7cmV0dXJuIGVycj9jYihlcnIpOihvcHRpb25zLnJlYWxtPW9wdGlvbnMucmVhbG18fG9wdGlvbnMuY29ubmVjdGlvbixkZWxldGUgb3B0aW9ucy5jb25uZWN0aW9uLF90aGlzLndlYkF1dGgubG9naW4ob3B0aW9ucyxjYikpfSl9O3ZhciB3aW5jaGFuPWNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZ1bmN0aW9uKG1vZHVsZSl7dmFyIFdpbkNoYW49ZnVuY3Rpb24oKXt2YXIgUkVMQVlfRlJBTUVfTkFNRT1cIl9fd2luY2hhbl9yZWxheV9mcmFtZVwiLENMT1NFX0NNRD1cImRpZVwiO2Z1bmN0aW9uIGFkZExpc3RlbmVyKHcsZXZlbnQsY2Ipe3cuYXR0YWNoRXZlbnQ/dy5hdHRhY2hFdmVudChcIm9uXCIrZXZlbnQsY2IpOncuYWRkRXZlbnRMaXN0ZW5lciYmdy5hZGRFdmVudExpc3RlbmVyKGV2ZW50LGNiLCExKX1mdW5jdGlvbiByZW1vdmVMaXN0ZW5lcih3LGV2ZW50LGNiKXt3LmRldGFjaEV2ZW50P3cuZGV0YWNoRXZlbnQoXCJvblwiK2V2ZW50LGNiKTp3LnJlbW92ZUV2ZW50TGlzdGVuZXImJncucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCxjYiwhMSl9ZnVuY3Rpb24gZXh0cmFjdE9yaWdpbih1cmwpey9eaHR0cHM/OlxcL1xcLy8udGVzdCh1cmwpfHwodXJsPXdpbmRvdy5sb2NhdGlvbi5ocmVmKTt2YXIgbT0vXihodHRwcz86XFwvXFwvW1xcLV9hLXpBLVpcXC4wLTk6XSspLy5leGVjKHVybCk7cmV0dXJuIG0/bVsxXTp1cmx9dmFyIGlzSUU9ZnVuY3Rpb24oKXtpZihcInVuZGVmaW5lZFwiPT10eXBlb2YgbmF2aWdhdG9yKXJldHVybiExO3ZhciBydj0tMSx1YT1uYXZpZ2F0b3IudXNlckFnZW50O1wiTWljcm9zb2Z0IEludGVybmV0IEV4cGxvcmVyXCI9PT1uYXZpZ2F0b3IuYXBwTmFtZT9udWxsIT1uZXcgUmVnRXhwKFwiTVNJRSAoWzAtOV17MSx9Wy4wLTldezAsfSlcIikuZXhlYyh1YSkmJihydj1wYXJzZUZsb2F0KFJlZ0V4cC4kMSkpOnVhLmluZGV4T2YoXCJUcmlkZW50XCIpPi0xJiZudWxsIT09bmV3IFJlZ0V4cChcInJ2OihbMC05XXsyLDJ9Wy4wLTldezAsfSlcIikuZXhlYyh1YSkmJihydj1wYXJzZUZsb2F0KFJlZ0V4cC4kMSkpO3JldHVybiBydj49OH0oKTtyZXR1cm5cInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93JiZ3aW5kb3cuSlNPTiYmd2luZG93LkpTT04uc3RyaW5naWZ5JiZ3aW5kb3cuSlNPTi5wYXJzZSYmd2luZG93LnBvc3RNZXNzYWdlP3tvcGVuOmZ1bmN0aW9uKG9wdHMsY2Ipe2lmKCFjYil0aHJvd1wibWlzc2luZyByZXF1aXJlZCBjYWxsYmFjayBhcmd1bWVudFwiO3ZhciBlcnIsaWZyYW1lO29wdHMudXJsfHwoZXJyPVwibWlzc2luZyByZXF1aXJlZCAndXJsJyBwYXJhbWV0ZXJcIiksb3B0cy5yZWxheV91cmx8fChlcnI9XCJtaXNzaW5nIHJlcXVpcmVkICdyZWxheV91cmwnIHBhcmFtZXRlclwiKSxlcnImJnNldFRpbWVvdXQoZnVuY3Rpb24oKXtjYihlcnIpfSwwKSxvcHRzLndpbmRvd19uYW1lfHwob3B0cy53aW5kb3dfbmFtZT1udWxsKSxvcHRzLndpbmRvd19mZWF0dXJlcyYmIWZ1bmN0aW9uKCl7dHJ5e3ZhciB1c2VyQWdlbnQ9bmF2aWdhdG9yLnVzZXJBZ2VudDtyZXR1cm4tMSE9dXNlckFnZW50LmluZGV4T2YoXCJGZW5uZWMvXCIpfHwtMSE9dXNlckFnZW50LmluZGV4T2YoXCJGaXJlZm94L1wiKSYmLTEhPXVzZXJBZ2VudC5pbmRleE9mKFwiQW5kcm9pZFwiKX1jYXRjaChlKXt9cmV0dXJuITF9KCl8fChvcHRzLndpbmRvd19mZWF0dXJlcz12b2lkIDApO3ZhciBtZXNzYWdlVGFyZ2V0LG9yaWdpbj1vcHRzLm9yaWdpbnx8ZXh0cmFjdE9yaWdpbihvcHRzLnVybCk7aWYob3JpZ2luIT09ZXh0cmFjdE9yaWdpbihvcHRzLnJlbGF5X3VybCkpcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtjYihcImludmFsaWQgYXJndW1lbnRzOiBvcmlnaW4gb2YgdXJsIGFuZCByZWxheV91cmwgbXVzdCBtYXRjaFwiKX0sMCk7aXNJRSYmKChpZnJhbWU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKSkuc2V0QXR0cmlidXRlKFwic3JjXCIsb3B0cy5yZWxheV91cmwpLGlmcmFtZS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiLGlmcmFtZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsUkVMQVlfRlJBTUVfTkFNRSksZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpZnJhbWUpLG1lc3NhZ2VUYXJnZXQ9aWZyYW1lLmNvbnRlbnRXaW5kb3cpO3ZhciB3PW9wdHMucG9wdXB8fHdpbmRvdy5vcGVuKG9wdHMudXJsLG9wdHMud2luZG93X25hbWUsb3B0cy53aW5kb3dfZmVhdHVyZXMpO29wdHMucG9wdXAmJih3LmxvY2F0aW9uLmhyZWY9b3B0cy51cmwpLG1lc3NhZ2VUYXJnZXR8fChtZXNzYWdlVGFyZ2V0PXcpO3ZhciBjbG9zZUludGVydmFsPXNldEludGVydmFsKGZ1bmN0aW9uKCl7dyYmdy5jbG9zZWQmJihjbGVhbnVwKCksY2ImJihjYihcIlVzZXIgY2xvc2VkIHRoZSBwb3B1cCB3aW5kb3dcIiksY2I9bnVsbCkpfSw1MDApLHJlcT1KU09OLnN0cmluZ2lmeSh7YTpcInJlcXVlc3RcIixkOm9wdHMucGFyYW1zfSk7ZnVuY3Rpb24gY2xlYW51cCgpe2lmKGlmcmFtZSYmZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChpZnJhbWUpLGlmcmFtZT12b2lkIDAsY2xvc2VJbnRlcnZhbCYmKGNsb3NlSW50ZXJ2YWw9Y2xlYXJJbnRlcnZhbChjbG9zZUludGVydmFsKSkscmVtb3ZlTGlzdGVuZXIod2luZG93LFwibWVzc2FnZVwiLG9uTWVzc2FnZSkscmVtb3ZlTGlzdGVuZXIod2luZG93LFwidW5sb2FkXCIsY2xlYW51cCksdyl0cnl7dy5jbG9zZSgpfWNhdGNoKHNlY3VyaXR5VmlvbGF0aW9uKXttZXNzYWdlVGFyZ2V0LnBvc3RNZXNzYWdlKENMT1NFX0NNRCxvcmlnaW4pfXc9bWVzc2FnZVRhcmdldD12b2lkIDB9ZnVuY3Rpb24gb25NZXNzYWdlKGUpe2lmKGUub3JpZ2luPT09b3JpZ2luKXt0cnl7dmFyIGQ9SlNPTi5wYXJzZShlLmRhdGEpfWNhdGNoKGVycil7aWYoY2IpcmV0dXJuIGNiKGVycik7dGhyb3cgZXJyfVwicmVhZHlcIj09PWQuYT9tZXNzYWdlVGFyZ2V0LnBvc3RNZXNzYWdlKHJlcSxvcmlnaW4pOlwiZXJyb3JcIj09PWQuYT8oY2xlYW51cCgpLGNiJiYoY2IoZC5kKSxjYj1udWxsKSk6XCJyZXNwb25zZVwiPT09ZC5hJiYoY2xlYW51cCgpLGNiJiYoY2IobnVsbCxkLmQpLGNiPW51bGwpKX19cmV0dXJuIGFkZExpc3RlbmVyKHdpbmRvdyxcInVubG9hZFwiLGNsZWFudXApLGFkZExpc3RlbmVyKHdpbmRvdyxcIm1lc3NhZ2VcIixvbk1lc3NhZ2UpLHtjbG9zZTpjbGVhbnVwLGZvY3VzOmZ1bmN0aW9uKCl7aWYodyl0cnl7dy5mb2N1cygpfWNhdGNoKGUpe319fX0sb25PcGVuOmZ1bmN0aW9uKGNiKXt2YXIgbz1cIipcIixtc2dUYXJnZXQ9aXNJRT9mdW5jdGlvbigpe3dpbmRvdy5sb2NhdGlvbjtmb3IodmFyIGZyYW1lcz13aW5kb3cub3BlbmVyLmZyYW1lcyxpPWZyYW1lcy5sZW5ndGgtMTtpPj0wO2ktLSl0cnl7aWYoZnJhbWVzW2ldLmxvY2F0aW9uLnByb3RvY29sPT09d2luZG93LmxvY2F0aW9uLnByb3RvY29sJiZmcmFtZXNbaV0ubG9jYXRpb24uaG9zdD09PXdpbmRvdy5sb2NhdGlvbi5ob3N0JiZmcmFtZXNbaV0ubmFtZT09PVJFTEFZX0ZSQU1FX05BTUUpcmV0dXJuIGZyYW1lc1tpXX1jYXRjaChlKXt9fSgpOndpbmRvdy5vcGVuZXI7aWYoIW1zZ1RhcmdldCl0aHJvd1wiY2FuJ3QgZmluZCByZWxheSBmcmFtZVwiO2Z1bmN0aW9uIGRvUG9zdChtc2cpe21zZz1KU09OLnN0cmluZ2lmeShtc2cpLGlzSUU/bXNnVGFyZ2V0LmRvUG9zdChtc2csbyk6bXNnVGFyZ2V0LnBvc3RNZXNzYWdlKG1zZyxvKX1mdW5jdGlvbiBvbkRpZShlKXtpZihlLmRhdGE9PT1DTE9TRV9DTUQpdHJ5e3dpbmRvdy5jbG9zZSgpfWNhdGNoKG9fTyl7fX1hZGRMaXN0ZW5lcihpc0lFP21zZ1RhcmdldDp3aW5kb3csXCJtZXNzYWdlXCIsZnVuY3Rpb24gb25NZXNzYWdlKGUpe3ZhciBkO3RyeXtkPUpTT04ucGFyc2UoZS5kYXRhKX1jYXRjaChlcnIpe31kJiZcInJlcXVlc3RcIj09PWQuYSYmKHJlbW92ZUxpc3RlbmVyKHdpbmRvdyxcIm1lc3NhZ2VcIixvbk1lc3NhZ2UpLG89ZS5vcmlnaW4sY2ImJnNldFRpbWVvdXQoZnVuY3Rpb24oKXtjYihvLGQuZCxmdW5jdGlvbihyKXtjYj12b2lkIDAsZG9Qb3N0KHthOlwicmVzcG9uc2VcIixkOnJ9KX0pfSwwKSl9KSxhZGRMaXN0ZW5lcihpc0lFP21zZ1RhcmdldDp3aW5kb3csXCJtZXNzYWdlXCIsb25EaWUpO3RyeXtkb1Bvc3Qoe2E6XCJyZWFkeVwifSl9Y2F0Y2goZSl7YWRkTGlzdGVuZXIobXNnVGFyZ2V0LFwibG9hZFwiLGZ1bmN0aW9uKGUpe2RvUG9zdCh7YTpcInJlYWR5XCJ9KX0pfXZhciBvblVubG9hZD1mdW5jdGlvbigpe3RyeXtyZW1vdmVMaXN0ZW5lcihpc0lFP21zZ1RhcmdldDp3aW5kb3csXCJtZXNzYWdlXCIsb25EaWUpfWNhdGNoKG9oV2VsbCl7fWNiJiZkb1Bvc3Qoe2E6XCJlcnJvclwiLGQ6XCJjbGllbnQgY2xvc2VkIHdpbmRvd1wifSksY2I9dm9pZCAwO3RyeXt3aW5kb3cuY2xvc2UoKX1jYXRjaChlKXt9fTtyZXR1cm4gYWRkTGlzdGVuZXIod2luZG93LFwidW5sb2FkXCIsb25VbmxvYWQpLHtkZXRhY2g6ZnVuY3Rpb24oKXtyZW1vdmVMaXN0ZW5lcih3aW5kb3csXCJ1bmxvYWRcIixvblVubG9hZCl9fX19OntvcGVuOmZ1bmN0aW9uKHVybCx3aW5vcHRzLGFyZyxjYil7c2V0VGltZW91dChmdW5jdGlvbigpe2NiKFwidW5zdXBwb3J0ZWQgYnJvd3NlclwiKX0sMCl9LG9uT3BlbjpmdW5jdGlvbihjYil7c2V0VGltZW91dChmdW5jdGlvbigpe2NiKFwidW5zdXBwb3J0ZWQgYnJvd3NlclwiKX0sMCl9fX0oKTttb2R1bGUuZXhwb3J0cyYmKG1vZHVsZS5leHBvcnRzPVdpbkNoYW4pfSk7ZnVuY3Rpb24gZXh0cmFjdE9yaWdpbih1cmwpey9eaHR0cHM/OlxcL1xcLy8udGVzdCh1cmwpfHwodXJsPXdpbmRvdy5sb2NhdGlvbi5ocmVmKTt2YXIgbT0vXihodHRwcz86XFwvXFwvWy1fYS16QS1aLjAtOTpdKykvLmV4ZWModXJsKTtyZXR1cm4gbT9tWzFdOnVybH12YXIgdXJsSGVscGVyPXtleHRyYWN0T3JpZ2luOmV4dHJhY3RPcmlnaW59O2Z1bmN0aW9uIFBvcHVwSGFuZGxlcigpe3RoaXMuX2N1cnJlbnRfcG9wdXA9bnVsbH1mdW5jdGlvbiBQb3B1cCh3ZWJBdXRoLG9wdGlvbnMpe3RoaXMuYmFzZU9wdGlvbnM9b3B0aW9ucyx0aGlzLmJhc2VPcHRpb25zLnBvcHVwT3JpZ2luPW9wdGlvbnMucG9wdXBPcmlnaW4sdGhpcy5jbGllbnQ9d2ViQXV0aC5jbGllbnQsdGhpcy53ZWJBdXRoPXdlYkF1dGgsdGhpcy50cmFuc2FjdGlvbk1hbmFnZXI9bmV3IFRyYW5zYWN0aW9uTWFuYWdlcih0aGlzLmJhc2VPcHRpb25zKSx0aGlzLmNyb3NzT3JpZ2luQXV0aGVudGljYXRpb249bmV3IENyb3NzT3JpZ2luQXV0aGVudGljYXRpb24od2ViQXV0aCx0aGlzLmJhc2VPcHRpb25zKSx0aGlzLndhcm49bmV3IFdhcm4oe2Rpc2FibGVXYXJuaW5nczohIW9wdGlvbnMuX2Rpc2FibGVEZXByZWNhdGlvbldhcm5pbmdzfSl9ZnVuY3Rpb24gU2lsZW50QXV0aGVudGljYXRpb25IYW5kbGVyKG9wdGlvbnMpe3RoaXMuYXV0aGVudGljYXRpb25Vcmw9b3B0aW9ucy5hdXRoZW50aWNhdGlvblVybCx0aGlzLnRpbWVvdXQ9b3B0aW9ucy50aW1lb3V0fHw2ZTQsdGhpcy5oYW5kbGVyPW51bGwsdGhpcy5wb3N0TWVzc2FnZURhdGFUeXBlPW9wdGlvbnMucG9zdE1lc3NhZ2VEYXRhVHlwZXx8ITEsdGhpcy5wb3N0TWVzc2FnZU9yaWdpbj1vcHRpb25zLnBvc3RNZXNzYWdlT3JpZ2lufHx3aW5kb3dIYW5kbGVyLmdldFdpbmRvdygpLmxvY2F0aW9uLm9yaWdpbnx8d2luZG93SGFuZGxlci5nZXRXaW5kb3coKS5sb2NhdGlvbi5wcm90b2NvbCtcIi8vXCIrd2luZG93SGFuZGxlci5nZXRXaW5kb3coKS5sb2NhdGlvbi5ob3N0bmFtZSsod2luZG93SGFuZGxlci5nZXRXaW5kb3coKS5sb2NhdGlvbi5wb3J0P1wiOlwiK3dpbmRvd0hhbmRsZXIuZ2V0V2luZG93KCkubG9jYXRpb24ucG9ydDpcIlwiKX1mdW5jdGlvbiBVc2VybmFtZVBhc3N3b3JkKG9wdGlvbnMpe3RoaXMuYmFzZU9wdGlvbnM9b3B0aW9ucyx0aGlzLnJlcXVlc3Q9bmV3IFJlcXVlc3RCdWlsZGVyKG9wdGlvbnMpLHRoaXMudHJhbnNhY3Rpb25NYW5hZ2VyPW5ldyBUcmFuc2FjdGlvbk1hbmFnZXIodGhpcy5iYXNlT3B0aW9ucyl9ZnVuY3Rpb24gSG9zdGVkUGFnZXMoY2xpZW50LG9wdGlvbnMpe3RoaXMuYmFzZU9wdGlvbnM9b3B0aW9ucyx0aGlzLmNsaWVudD1jbGllbnQsdGhpcy5iYXNlT3B0aW9ucy51bml2ZXJzYWxMb2dpblBhZ2U9ITAsdGhpcy5yZXF1ZXN0PW5ldyBSZXF1ZXN0QnVpbGRlcih0aGlzLmJhc2VPcHRpb25zKSx0aGlzLndhcm49bmV3IFdhcm4oe2Rpc2FibGVXYXJuaW5nczohIW9wdGlvbnMuX2Rpc2FibGVEZXByZWNhdGlvbldhcm5pbmdzfSl9ZnVuY3Rpb24gV2ViQXV0aChvcHRpb25zKXthc3NlcnQuY2hlY2sob3B0aW9ucyx7dHlwZTpcIm9iamVjdFwiLG1lc3NhZ2U6XCJvcHRpb25zIHBhcmFtZXRlciBpcyBub3QgdmFsaWRcIn0se2RvbWFpbjp7dHlwZTpcInN0cmluZ1wiLG1lc3NhZ2U6XCJkb21haW4gb3B0aW9uIGlzIHJlcXVpcmVkXCJ9LGNsaWVudElEOnt0eXBlOlwic3RyaW5nXCIsbWVzc2FnZTpcImNsaWVudElEIG9wdGlvbiBpcyByZXF1aXJlZFwifSxyZXNwb25zZVR5cGU6e29wdGlvbmFsOiEwLHR5cGU6XCJzdHJpbmdcIixtZXNzYWdlOlwicmVzcG9uc2VUeXBlIGlzIG5vdCB2YWxpZFwifSxyZXNwb25zZU1vZGU6e29wdGlvbmFsOiEwLHR5cGU6XCJzdHJpbmdcIixtZXNzYWdlOlwicmVzcG9uc2VNb2RlIGlzIG5vdCB2YWxpZFwifSxyZWRpcmVjdFVyaTp7b3B0aW9uYWw6ITAsdHlwZTpcInN0cmluZ1wiLG1lc3NhZ2U6XCJyZWRpcmVjdFVyaSBpcyBub3QgdmFsaWRcIn0sc2NvcGU6e29wdGlvbmFsOiEwLHR5cGU6XCJzdHJpbmdcIixtZXNzYWdlOlwic2NvcGUgaXMgbm90IHZhbGlkXCJ9LGF1ZGllbmNlOntvcHRpb25hbDohMCx0eXBlOlwic3RyaW5nXCIsbWVzc2FnZTpcImF1ZGllbmNlIGlzIG5vdCB2YWxpZFwifSxwb3B1cE9yaWdpbjp7b3B0aW9uYWw6ITAsdHlwZTpcInN0cmluZ1wiLG1lc3NhZ2U6XCJwb3B1cE9yaWdpbiBpcyBub3QgdmFsaWRcIn0sbGVld2F5OntvcHRpb25hbDohMCx0eXBlOlwibnVtYmVyXCIsbWVzc2FnZTpcImxlZXdheSBpcyBub3QgdmFsaWRcIn0scGx1Z2luczp7b3B0aW9uYWw6ITAsdHlwZTpcImFycmF5XCIsbWVzc2FnZTpcInBsdWdpbnMgaXMgbm90IHZhbGlkXCJ9LF9kaXNhYmxlRGVwcmVjYXRpb25XYXJuaW5nczp7b3B0aW9uYWw6ITAsdHlwZTpcImJvb2xlYW5cIixtZXNzYWdlOlwiX2Rpc2FibGVEZXByZWNhdGlvbldhcm5pbmdzIG9wdGlvbiBpcyBub3QgdmFsaWRcIn0sX3NlbmRUZWxlbWV0cnk6e29wdGlvbmFsOiEwLHR5cGU6XCJib29sZWFuXCIsbWVzc2FnZTpcIl9zZW5kVGVsZW1ldHJ5IG9wdGlvbiBpcyBub3QgdmFsaWRcIn0sX3RlbGVtZXRyeUluZm86e29wdGlvbmFsOiEwLHR5cGU6XCJvYmplY3RcIixtZXNzYWdlOlwiX3RlbGVtZXRyeUluZm8gb3B0aW9uIGlzIG5vdCB2YWxpZFwifSxfdGltZXNUb1JldHJ5RmFpbGVkUmVxdWVzdHM6e29wdGlvbmFsOiEwLHR5cGU6XCJudW1iZXJcIixtZXNzYWdlOlwiX3RpbWVzVG9SZXRyeUZhaWxlZFJlcXVlc3RzIG9wdGlvbiBpcyBub3QgdmFsaWRcIn19KSxvcHRpb25zLm92ZXJyaWRlcyYmYXNzZXJ0LmNoZWNrKG9wdGlvbnMub3ZlcnJpZGVzLHt0eXBlOlwib2JqZWN0XCIsbWVzc2FnZTpcIm92ZXJyaWRlcyBvcHRpb24gaXMgbm90IHZhbGlkXCJ9LHtfX3RlbmFudDp7b3B0aW9uYWw6ITAsdHlwZTpcInN0cmluZ1wiLG1lc3NhZ2U6XCJfX3RlbmFudCBvcHRpb24gaXMgcmVxdWlyZWRcIn0sX190b2tlbl9pc3N1ZXI6e29wdGlvbmFsOiEwLHR5cGU6XCJzdHJpbmdcIixtZXNzYWdlOlwiX190b2tlbl9pc3N1ZXIgb3B0aW9uIGlzIHJlcXVpcmVkXCJ9LF9fandrc191cmk6e29wdGlvbmFsOiEwLHR5cGU6XCJzdHJpbmdcIixtZXNzYWdlOlwiX19qd2tzX3VyaSBpcyByZXF1aXJlZFwifX0pLHRoaXMuYmFzZU9wdGlvbnM9b3B0aW9ucyx0aGlzLmJhc2VPcHRpb25zLnBsdWdpbnM9bmV3IFBsdWdpbkhhbmRsZXIodGhpcyx0aGlzLmJhc2VPcHRpb25zLnBsdWdpbnN8fFtdKSx0aGlzLmJhc2VPcHRpb25zLl9zZW5kVGVsZW1ldHJ5PSExIT09dGhpcy5iYXNlT3B0aW9ucy5fc2VuZFRlbGVtZXRyeXx8dGhpcy5iYXNlT3B0aW9ucy5fc2VuZFRlbGVtZXRyeSx0aGlzLmJhc2VPcHRpb25zLl90aW1lc1RvUmV0cnlGYWlsZWRSZXF1ZXN0cz1vcHRpb25zLl90aW1lc1RvUmV0cnlGYWlsZWRSZXF1ZXN0cz9wYXJzZUludChvcHRpb25zLl90aW1lc1RvUmV0cnlGYWlsZWRSZXF1ZXN0cywwKTowLHRoaXMuYmFzZU9wdGlvbnMudGVuYW50PXRoaXMuYmFzZU9wdGlvbnMub3ZlcnJpZGVzJiZ0aGlzLmJhc2VPcHRpb25zLm92ZXJyaWRlcy5fX3RlbmFudHx8dGhpcy5iYXNlT3B0aW9ucy5kb21haW4uc3BsaXQoXCIuXCIpWzBdLHRoaXMuYmFzZU9wdGlvbnMudG9rZW5faXNzdWVyPXRoaXMuYmFzZU9wdGlvbnMub3ZlcnJpZGVzJiZ0aGlzLmJhc2VPcHRpb25zLm92ZXJyaWRlcy5fX3Rva2VuX2lzc3Vlcnx8XCJodHRwczovL1wiK3RoaXMuYmFzZU9wdGlvbnMuZG9tYWluK1wiL1wiLHRoaXMuYmFzZU9wdGlvbnMuandrc1VSST10aGlzLmJhc2VPcHRpb25zLm92ZXJyaWRlcyYmdGhpcy5iYXNlT3B0aW9ucy5vdmVycmlkZXMuX19qd2tzX3VyaSx0aGlzLnRyYW5zYWN0aW9uTWFuYWdlcj1uZXcgVHJhbnNhY3Rpb25NYW5hZ2VyKHRoaXMuYmFzZU9wdGlvbnMpLHRoaXMuY2xpZW50PW5ldyBBdXRoZW50aWNhdGlvbih0aGlzLmJhc2VPcHRpb25zKSx0aGlzLnJlZGlyZWN0PW5ldyBSZWRpcmVjdCh0aGlzLHRoaXMuYmFzZU9wdGlvbnMpLHRoaXMucG9wdXA9bmV3IFBvcHVwKHRoaXMsdGhpcy5iYXNlT3B0aW9ucyksdGhpcy5jcm9zc09yaWdpbkF1dGhlbnRpY2F0aW9uPW5ldyBDcm9zc09yaWdpbkF1dGhlbnRpY2F0aW9uKHRoaXMsdGhpcy5iYXNlT3B0aW9ucyksdGhpcy53ZWJNZXNzYWdlSGFuZGxlcj1uZXcgV2ViTWVzc2FnZUhhbmRsZXIodGhpcyksdGhpcy5fdW5pdmVyc2FsTG9naW49bmV3IEhvc3RlZFBhZ2VzKHRoaXMsdGhpcy5iYXNlT3B0aW9ucyksdGhpcy5zc29kYXRhU3RvcmFnZT1uZXcgU1NPRGF0YVN0b3JhZ2UodGhpcy5iYXNlT3B0aW9ucyl9ZnVuY3Rpb24gYnVpbGRQYXJzZUhhc2hSZXNwb25zZShxc1BhcmFtcyxhcHBTdGF0ZSx0b2tlbil7cmV0dXJue2FjY2Vzc1Rva2VuOnFzUGFyYW1zLmFjY2Vzc190b2tlbnx8bnVsbCxpZFRva2VuOnFzUGFyYW1zLmlkX3Rva2VufHxudWxsLGlkVG9rZW5QYXlsb2FkOnRva2VufHxudWxsLGFwcFN0YXRlOmFwcFN0YXRlfHxudWxsLHJlZnJlc2hUb2tlbjpxc1BhcmFtcy5yZWZyZXNoX3Rva2VufHxudWxsLHN0YXRlOnFzUGFyYW1zLnN0YXRlfHxudWxsLGV4cGlyZXNJbjpxc1BhcmFtcy5leHBpcmVzX2luP3BhcnNlSW50KHFzUGFyYW1zLmV4cGlyZXNfaW4sMTApOm51bGwsdG9rZW5UeXBlOnFzUGFyYW1zLnRva2VuX3R5cGV8fG51bGwsc2NvcGU6cXNQYXJhbXMuc2NvcGV8fG51bGx9fWZ1bmN0aW9uIFBhc3N3b3JkbGVzc0F1dGhlbnRpY2F0aW9uKHJlcXVlc3Qsb3B0aW9ucyl7dGhpcy5iYXNlT3B0aW9ucz1vcHRpb25zLHRoaXMucmVxdWVzdD1yZXF1ZXN0fWZ1bmN0aW9uIERCQ29ubmVjdGlvbihyZXF1ZXN0LG9wdGlvbnMpe3RoaXMuYmFzZU9wdGlvbnM9b3B0aW9ucyx0aGlzLnJlcXVlc3Q9cmVxdWVzdH1mdW5jdGlvbiBBdXRoZW50aWNhdGlvbihhdXRoMCxvcHRpb25zKXsyPT09YXJndW1lbnRzLmxlbmd0aD90aGlzLmF1dGgwPWF1dGgwOm9wdGlvbnM9YXV0aDAsYXNzZXJ0LmNoZWNrKG9wdGlvbnMse3R5cGU6XCJvYmplY3RcIixtZXNzYWdlOlwib3B0aW9ucyBwYXJhbWV0ZXIgaXMgbm90IHZhbGlkXCJ9LHtkb21haW46e3R5cGU6XCJzdHJpbmdcIixtZXNzYWdlOlwiZG9tYWluIG9wdGlvbiBpcyByZXF1aXJlZFwifSxjbGllbnRJRDp7dHlwZTpcInN0cmluZ1wiLG1lc3NhZ2U6XCJjbGllbnRJRCBvcHRpb24gaXMgcmVxdWlyZWRcIn0scmVzcG9uc2VUeXBlOntvcHRpb25hbDohMCx0eXBlOlwic3RyaW5nXCIsbWVzc2FnZTpcInJlc3BvbnNlVHlwZSBpcyBub3QgdmFsaWRcIn0scmVzcG9uc2VNb2RlOntvcHRpb25hbDohMCx0eXBlOlwic3RyaW5nXCIsbWVzc2FnZTpcInJlc3BvbnNlTW9kZSBpcyBub3QgdmFsaWRcIn0scmVkaXJlY3RVcmk6e29wdGlvbmFsOiEwLHR5cGU6XCJzdHJpbmdcIixtZXNzYWdlOlwicmVkaXJlY3RVcmkgaXMgbm90IHZhbGlkXCJ9LHNjb3BlOntvcHRpb25hbDohMCx0eXBlOlwic3RyaW5nXCIsbWVzc2FnZTpcInNjb3BlIGlzIG5vdCB2YWxpZFwifSxhdWRpZW5jZTp7b3B0aW9uYWw6ITAsdHlwZTpcInN0cmluZ1wiLG1lc3NhZ2U6XCJhdWRpZW5jZSBpcyBub3QgdmFsaWRcIn0sX2Rpc2FibGVEZXByZWNhdGlvbldhcm5pbmdzOntvcHRpb25hbDohMCx0eXBlOlwiYm9vbGVhblwiLG1lc3NhZ2U6XCJfZGlzYWJsZURlcHJlY2F0aW9uV2FybmluZ3Mgb3B0aW9uIGlzIG5vdCB2YWxpZFwifSxfc2VuZFRlbGVtZXRyeTp7b3B0aW9uYWw6ITAsdHlwZTpcImJvb2xlYW5cIixtZXNzYWdlOlwiX3NlbmRUZWxlbWV0cnkgb3B0aW9uIGlzIG5vdCB2YWxpZFwifSxfdGVsZW1ldHJ5SW5mbzp7b3B0aW9uYWw6ITAsdHlwZTpcIm9iamVjdFwiLG1lc3NhZ2U6XCJfdGVsZW1ldHJ5SW5mbyBvcHRpb24gaXMgbm90IHZhbGlkXCJ9fSksdGhpcy5iYXNlT3B0aW9ucz1vcHRpb25zLHRoaXMuYmFzZU9wdGlvbnMuX3NlbmRUZWxlbWV0cnk9ITEhPT10aGlzLmJhc2VPcHRpb25zLl9zZW5kVGVsZW1ldHJ5fHx0aGlzLmJhc2VPcHRpb25zLl9zZW5kVGVsZW1ldHJ5LHRoaXMuYmFzZU9wdGlvbnMucm9vdFVybD1cImh0dHBzOi8vXCIrdGhpcy5iYXNlT3B0aW9ucy5kb21haW4sdGhpcy5yZXF1ZXN0PW5ldyBSZXF1ZXN0QnVpbGRlcih0aGlzLmJhc2VPcHRpb25zKSx0aGlzLnBhc3N3b3JkbGVzcz1uZXcgUGFzc3dvcmRsZXNzQXV0aGVudGljYXRpb24odGhpcy5yZXF1ZXN0LHRoaXMuYmFzZU9wdGlvbnMpLHRoaXMuZGJDb25uZWN0aW9uPW5ldyBEQkNvbm5lY3Rpb24odGhpcy5yZXF1ZXN0LHRoaXMuYmFzZU9wdGlvbnMpLHRoaXMud2Fybj1uZXcgV2Fybih7ZGlzYWJsZVdhcm5pbmdzOiEhb3B0aW9ucy5fZGlzYWJsZURlcHJlY2F0aW9uV2FybmluZ3N9KSx0aGlzLnNzb2RhdGFTdG9yYWdlPW5ldyBTU09EYXRhU3RvcmFnZSh0aGlzLmJhc2VPcHRpb25zKX1mdW5jdGlvbiBNYW5hZ2VtZW50KG9wdGlvbnMpe2Fzc2VydC5jaGVjayhvcHRpb25zLHt0eXBlOlwib2JqZWN0XCIsbWVzc2FnZTpcIm9wdGlvbnMgcGFyYW1ldGVyIGlzIG5vdCB2YWxpZFwifSx7ZG9tYWluOnt0eXBlOlwic3RyaW5nXCIsbWVzc2FnZTpcImRvbWFpbiBvcHRpb24gaXMgcmVxdWlyZWRcIn0sdG9rZW46e3R5cGU6XCJzdHJpbmdcIixtZXNzYWdlOlwidG9rZW4gb3B0aW9uIGlzIHJlcXVpcmVkXCJ9LF9zZW5kVGVsZW1ldHJ5OntvcHRpb25hbDohMCx0eXBlOlwiYm9vbGVhblwiLG1lc3NhZ2U6XCJfc2VuZFRlbGVtZXRyeSBvcHRpb24gaXMgbm90IHZhbGlkXCJ9LF90ZWxlbWV0cnlJbmZvOntvcHRpb25hbDohMCx0eXBlOlwib2JqZWN0XCIsbWVzc2FnZTpcIl90ZWxlbWV0cnlJbmZvIG9wdGlvbiBpcyBub3QgdmFsaWRcIn19KSx0aGlzLmJhc2VPcHRpb25zPW9wdGlvbnMsdGhpcy5iYXNlT3B0aW9ucy5oZWFkZXJzPXtBdXRob3JpemF0aW9uOlwiQmVhcmVyIFwiK3RoaXMuYmFzZU9wdGlvbnMudG9rZW59LHRoaXMucmVxdWVzdD1uZXcgUmVxdWVzdEJ1aWxkZXIodGhpcy5iYXNlT3B0aW9ucyksdGhpcy5iYXNlT3B0aW9ucy5yb290VXJsPXVybEpvaW4oXCJodHRwczovL1wiK3RoaXMuYmFzZU9wdGlvbnMuZG9tYWluLFwiYXBpXCIsXCJ2MlwiKX1Qb3B1cEhhbmRsZXIucHJvdG90eXBlLmNhbGN1bGF0ZVBvc2l0aW9uPWZ1bmN0aW9uKG9wdGlvbnMpe3ZhciB3aWR0aD1vcHRpb25zLndpZHRofHw1MDAsaGVpZ2h0PW9wdGlvbnMuaGVpZ2h0fHw2MDAsX3dpbmRvdz13aW5kb3dIYW5kbGVyLmdldFdpbmRvdygpLHNjcmVlblg9dm9pZCAwIT09X3dpbmRvdy5zY3JlZW5YP193aW5kb3cuc2NyZWVuWDpfd2luZG93LnNjcmVlbkxlZnQsc2NyZWVuWT12b2lkIDAhPT1fd2luZG93LnNjcmVlblk/X3dpbmRvdy5zY3JlZW5ZOl93aW5kb3cuc2NyZWVuVG9wO3JldHVybnt3aWR0aDp3aWR0aCxoZWlnaHQ6aGVpZ2h0LGxlZnQ6c2NyZWVuWCsoKHZvaWQgMCE9PV93aW5kb3cub3V0ZXJXaWR0aD9fd2luZG93Lm91dGVyV2lkdGg6X3dpbmRvdy5kb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoKS13aWR0aCkvMix0b3A6c2NyZWVuWSsoKHZvaWQgMCE9PV93aW5kb3cub3V0ZXJIZWlnaHQ/X3dpbmRvdy5vdXRlckhlaWdodDpfd2luZG93LmRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0KS1oZWlnaHQpLzJ9fSxQb3B1cEhhbmRsZXIucHJvdG90eXBlLnByZWxvYWQ9ZnVuY3Rpb24ob3B0aW9ucyl7dmFyIF90aGlzPXRoaXMsX3dpbmRvdz13aW5kb3dIYW5kbGVyLmdldFdpbmRvdygpLHBvcHVwUG9zaXRpb249dGhpcy5jYWxjdWxhdGVQb3NpdGlvbihvcHRpb25zLnBvcHVwT3B0aW9uc3x8e30pLHBvcHVwT3B0aW9ucz1vYmplY3RIZWxwZXIubWVyZ2UocG9wdXBQb3NpdGlvbikud2l0aChvcHRpb25zLnBvcHVwT3B0aW9ucyksdXJsPW9wdGlvbnMudXJsfHxcImFib3V0OmJsYW5rXCIsd2luZG93RmVhdHVyZXM9bGliLnN0cmluZ2lmeShwb3B1cE9wdGlvbnMse2VuY29kZTohMSxkZWxpbWl0ZXI6XCIsXCJ9KTtyZXR1cm4gdGhpcy5fY3VycmVudF9wb3B1cCYmIXRoaXMuX2N1cnJlbnRfcG9wdXAuY2xvc2VkP3RoaXMuX2N1cnJlbnRfcG9wdXA6KHRoaXMuX2N1cnJlbnRfcG9wdXA9X3dpbmRvdy5vcGVuKHVybCxcImF1dGgwX3NpZ251cF9wb3B1cFwiLHdpbmRvd0ZlYXR1cmVzKSx0aGlzLl9jdXJyZW50X3BvcHVwLmtpbGw9ZnVuY3Rpb24oKXt0aGlzLmNsb3NlKCksX3RoaXMuX2N1cnJlbnRfcG9wdXA9bnVsbH0sdGhpcy5fY3VycmVudF9wb3B1cCl9LFBvcHVwSGFuZGxlci5wcm90b3R5cGUubG9hZD1mdW5jdGlvbih1cmwscmVsYXlVcmwsb3B0aW9ucyxjYil7dmFyIF90aGlzPXRoaXMscG9wdXBQb3NpdGlvbj10aGlzLmNhbGN1bGF0ZVBvc2l0aW9uKG9wdGlvbnMucG9wdXBPcHRpb25zfHx7fSkscG9wdXBPcHRpb25zPW9iamVjdEhlbHBlci5tZXJnZShwb3B1cFBvc2l0aW9uKS53aXRoKG9wdGlvbnMucG9wdXBPcHRpb25zKSx3aW5jaGFuT3B0aW9ucz1vYmplY3RIZWxwZXIubWVyZ2Uoe3VybDp1cmwscmVsYXlfdXJsOnJlbGF5VXJsLHdpbmRvd19mZWF0dXJlczpsaWIuc3RyaW5naWZ5KHBvcHVwT3B0aW9ucyx7ZGVsaW1pdGVyOlwiLFwiLGVuY29kZTohMX0pLHBvcHVwOnRoaXMuX2N1cnJlbnRfcG9wdXB9KS53aXRoKG9wdGlvbnMpLHBvcHVwPXdpbmNoYW4ub3Blbih3aW5jaGFuT3B0aW9ucyxmdW5jdGlvbihlcnIsZGF0YSl7cmV0dXJuIF90aGlzLl9jdXJyZW50X3BvcHVwPW51bGwsY2IoZXJyLGRhdGEpfSk7cmV0dXJuIHBvcHVwLmZvY3VzKCkscG9wdXB9LFBvcHVwLnByb3RvdHlwZS5idWlsZFBvcHVwSGFuZGxlcj1mdW5jdGlvbigpe3ZhciBwbHVnaW5IYW5kbGVyPXRoaXMuYmFzZU9wdGlvbnMucGx1Z2lucy5nZXQoXCJwb3B1cC5nZXRQb3B1cEhhbmRsZXJcIik7cmV0dXJuIHBsdWdpbkhhbmRsZXI/cGx1Z2luSGFuZGxlci5nZXRQb3B1cEhhbmRsZXIoKTpuZXcgUG9wdXBIYW5kbGVyfSxQb3B1cC5wcm90b3R5cGUucHJlbG9hZD1mdW5jdGlvbihvcHRpb25zKXtvcHRpb25zPW9wdGlvbnN8fHt9O3ZhciBwb3B1cD10aGlzLmJ1aWxkUG9wdXBIYW5kbGVyKCk7cmV0dXJuIHBvcHVwLnByZWxvYWQob3B0aW9ucykscG9wdXB9LFBvcHVwLnByb3RvdHlwZS5nZXRQb3B1cEhhbmRsZXI9ZnVuY3Rpb24ob3B0aW9ucyxwcmVsb2FkKXtyZXR1cm4gb3B0aW9ucy5wb3B1cEhhbmRsZXI/b3B0aW9ucy5wb3B1cEhhbmRsZXI6cHJlbG9hZD90aGlzLnByZWxvYWQob3B0aW9ucyk6dGhpcy5idWlsZFBvcHVwSGFuZGxlcigpfSxQb3B1cC5wcm90b3R5cGUuY2FsbGJhY2s9ZnVuY3Rpb24ob3B0aW9ucyl7dmFyIF90aGlzPXRoaXMsdGhlV2luZG93PXdpbmRvd0hhbmRsZXIuZ2V0V2luZG93KCksb3JpZ2luVXJsPShvcHRpb25zPW9wdGlvbnN8fHt9KS5wb3B1cE9yaWdpbnx8dGhpcy5iYXNlT3B0aW9ucy5wb3B1cE9yaWdpbnx8d2luZG93SGFuZGxlci5nZXRPcmlnaW4oKTt0aGVXaW5kb3cub3BlbmVyP3dpbmNoYW4ub25PcGVuKGZ1bmN0aW9uKHBvcHVwT3JpZ2luLHIsY2Ipe2lmKHBvcHVwT3JpZ2luIT09b3JpZ2luVXJsKXJldHVybiBjYih7ZXJyb3I6XCJvcmlnaW5fbWlzbWF0Y2hcIixlcnJvcl9kZXNjcmlwdGlvbjpcIlRoZSBwb3B1cCdzIG9yaWdpbiAoXCIrcG9wdXBPcmlnaW4rXCIpIHNob3VsZCBtYXRjaCB0aGUgYHBvcHVwT3JpZ2luYCBwYXJhbWV0ZXIgKFwiK29yaWdpblVybCtcIikuXCJ9KTtfdGhpcy53ZWJBdXRoLnBhcnNlSGFzaChvcHRpb25zfHx7fSxmdW5jdGlvbihlcnIsZGF0YSl7cmV0dXJuIGNiKGVycnx8ZGF0YSl9KX0pOnRoZVdpbmRvdy5kb1Bvc3Q9ZnVuY3Rpb24obXNnKXt0aGVXaW5kb3cucGFyZW50JiZ0aGVXaW5kb3cucGFyZW50LnBvc3RNZXNzYWdlKG1zZyxvcmlnaW5VcmwpfX0sUG9wdXAucHJvdG90eXBlLmF1dGhvcml6ZT1mdW5jdGlvbihvcHRpb25zLGNiKXt2YXIgdXJsLHJlbGF5VXJsLHBvcE9wdHM9e30scGx1Z2luSGFuZGxlcj10aGlzLmJhc2VPcHRpb25zLnBsdWdpbnMuZ2V0KFwicG9wdXAuYXV0aG9yaXplXCIpLHBhcmFtcz1vYmplY3RIZWxwZXIubWVyZ2UodGhpcy5iYXNlT3B0aW9ucyxbXCJjbGllbnRJRFwiLFwic2NvcGVcIixcImRvbWFpblwiLFwiYXVkaWVuY2VcIixcInRlbmFudFwiLFwicmVzcG9uc2VUeXBlXCIsXCJyZWRpcmVjdFVyaVwiLFwiX2NzcmZcIixcInN0YXRlXCIsXCJfaW50c3RhdGVcIixcIm5vbmNlXCJdKS53aXRoKG9iamVjdEhlbHBlci5ibGFja2xpc3Qob3B0aW9ucyxbXCJwb3B1cEhhbmRsZXJcIl0pKTtyZXR1cm4gYXNzZXJ0LmNoZWNrKHBhcmFtcyx7dHlwZTpcIm9iamVjdFwiLG1lc3NhZ2U6XCJvcHRpb25zIHBhcmFtZXRlciBpcyBub3QgdmFsaWRcIn0se3Jlc3BvbnNlVHlwZTp7dHlwZTpcInN0cmluZ1wiLG1lc3NhZ2U6XCJyZXNwb25zZVR5cGUgb3B0aW9uIGlzIHJlcXVpcmVkXCJ9fSkscmVsYXlVcmw9dXJsSm9pbih0aGlzLmJhc2VPcHRpb25zLnJvb3RVcmwsXCJyZWxheS5odG1sXCIpLG9wdGlvbnMub3dwP3BhcmFtcy5vd3A9ITA6KHBvcE9wdHMub3JpZ2luPXVybEhlbHBlci5leHRyYWN0T3JpZ2luKHBhcmFtcy5yZWRpcmVjdFVyaSkscmVsYXlVcmw9cGFyYW1zLnJlZGlyZWN0VXJpKSxvcHRpb25zLnBvcHVwT3B0aW9ucyYmKHBvcE9wdHMucG9wdXBPcHRpb25zPW9iamVjdEhlbHBlci5waWNrKG9wdGlvbnMucG9wdXBPcHRpb25zLFtcIndpZHRoXCIsXCJoZWlnaHRcIl0pKSxwbHVnaW5IYW5kbGVyJiYocGFyYW1zPXBsdWdpbkhhbmRsZXIucHJvY2Vzc1BhcmFtcyhwYXJhbXMpKSwocGFyYW1zPXRoaXMudHJhbnNhY3Rpb25NYW5hZ2VyLnByb2Nlc3MocGFyYW1zKSkuc2NvcGU9cGFyYW1zLnNjb3BlfHxcIm9wZW5pZCBwcm9maWxlIGVtYWlsXCIsZGVsZXRlIHBhcmFtcy5kb21haW4sdXJsPXRoaXMuY2xpZW50LmJ1aWxkQXV0aG9yaXplVXJsKHBhcmFtcyksdGhpcy5nZXRQb3B1cEhhbmRsZXIob3B0aW9ucykubG9hZCh1cmwscmVsYXlVcmwscG9wT3B0cyx3cmFwQ2FsbGJhY2soY2Ise2tlZXBPcmlnaW5hbENhc2luZzohMH0pKX0sUG9wdXAucHJvdG90eXBlLmxvZ2luV2l0aENyZWRlbnRpYWxzPWZ1bmN0aW9uKG9wdGlvbnMsY2Ipe29wdGlvbnMucmVhbG09b3B0aW9ucy5yZWFsbXx8b3B0aW9ucy5jb25uZWN0aW9uLG9wdGlvbnMucG9wdXA9ITAsb3B0aW9ucz1vYmplY3RIZWxwZXIubWVyZ2UodGhpcy5iYXNlT3B0aW9ucyxbXCJyZWRpcmVjdFVyaVwiLFwicmVzcG9uc2VUeXBlXCIsXCJzdGF0ZVwiLFwibm9uY2VcIl0pLndpdGgob2JqZWN0SGVscGVyLmJsYWNrbGlzdChvcHRpb25zLFtcInBvcHVwSGFuZGxlclwiLFwiY29ubmVjdGlvblwiXSkpLG9wdGlvbnM9dGhpcy50cmFuc2FjdGlvbk1hbmFnZXIucHJvY2VzcyhvcHRpb25zKSx0aGlzLmNyb3NzT3JpZ2luQXV0aGVudGljYXRpb24ubG9naW4ob3B0aW9ucyxjYil9LFBvcHVwLnByb3RvdHlwZS5wYXNzd29yZGxlc3NWZXJpZnk9ZnVuY3Rpb24ob3B0aW9ucyxjYil7dmFyIF90aGlzPXRoaXM7cmV0dXJuIHRoaXMuY2xpZW50LnBhc3N3b3JkbGVzcy52ZXJpZnkob2JqZWN0SGVscGVyLmJsYWNrbGlzdChvcHRpb25zLFtcInBvcHVwSGFuZGxlclwiXSksZnVuY3Rpb24oZXJyKXtpZihlcnIpcmV0dXJuIGNiKGVycik7b3B0aW9ucy51c2VybmFtZT1vcHRpb25zLnBob25lTnVtYmVyfHxvcHRpb25zLmVtYWlsLG9wdGlvbnMucGFzc3dvcmQ9b3B0aW9ucy52ZXJpZmljYXRpb25Db2RlLGRlbGV0ZSBvcHRpb25zLmVtYWlsLGRlbGV0ZSBvcHRpb25zLnBob25lTnVtYmVyLGRlbGV0ZSBvcHRpb25zLnZlcmlmaWNhdGlvbkNvZGUsZGVsZXRlIG9wdGlvbnMudHlwZSxfdGhpcy5jbGllbnQubG9naW5XaXRoUmVzb3VyY2VPd25lcihvcHRpb25zLGNiKX0pfSxQb3B1cC5wcm90b3R5cGUuc2lnbnVwQW5kTG9naW49ZnVuY3Rpb24ob3B0aW9ucyxjYil7dmFyIF90aGlzPXRoaXMscG9wdXBIYW5kbGVyPXRoaXMuZ2V0UG9wdXBIYW5kbGVyKG9wdGlvbnMsITApO3JldHVybiBvcHRpb25zLnBvcHVwSGFuZGxlcj1wb3B1cEhhbmRsZXIsdGhpcy5jbGllbnQuZGJDb25uZWN0aW9uLnNpZ251cChvYmplY3RIZWxwZXIuYmxhY2tsaXN0KG9wdGlvbnMsW1wicG9wdXBIYW5kbGVyXCJdKSxmdW5jdGlvbihlcnIpe2lmKGVycilyZXR1cm4gcG9wdXBIYW5kbGVyLl9jdXJyZW50X3BvcHVwJiZwb3B1cEhhbmRsZXIuX2N1cnJlbnRfcG9wdXAua2lsbCgpLGNiKGVycik7X3RoaXMubG9naW5XaXRoQ3JlZGVudGlhbHMob3B0aW9ucyxjYil9KX0sU2lsZW50QXV0aGVudGljYXRpb25IYW5kbGVyLmNyZWF0ZT1mdW5jdGlvbihvcHRpb25zKXtyZXR1cm4gbmV3IFNpbGVudEF1dGhlbnRpY2F0aW9uSGFuZGxlcihvcHRpb25zKX0sU2lsZW50QXV0aGVudGljYXRpb25IYW5kbGVyLnByb3RvdHlwZS5sb2dpbj1mdW5jdGlvbih1c2VQb3N0TWVzc2FnZSxjYWxsYmFjayl7dGhpcy5oYW5kbGVyPW5ldyBJZnJhbWVIYW5kbGVyKHthdXRoMDp0aGlzLmF1dGgwLHVybDp0aGlzLmF1dGhlbnRpY2F0aW9uVXJsLGV2ZW50TGlzdGVuZXJUeXBlOnVzZVBvc3RNZXNzYWdlP1wibWVzc2FnZVwiOlwibG9hZFwiLGNhbGxiYWNrOnRoaXMuZ2V0Q2FsbGJhY2tIYW5kbGVyKGNhbGxiYWNrLHVzZVBvc3RNZXNzYWdlKSx0aW1lb3V0OnRoaXMudGltZW91dCxldmVudFZhbGlkYXRvcjp0aGlzLmdldEV2ZW50VmFsaWRhdG9yKCksdGltZW91dENhbGxiYWNrOmZ1bmN0aW9uKCl7Y2FsbGJhY2sobnVsbCxcIiNlcnJvcj10aW1lb3V0JmVycm9yX2Rlc2NyaXB0aW9uPVRpbWVvdXQrZHVyaW5nK2F1dGhlbnRpY2F0aW9uK3JlbmV3LlwiKX0sdXNlUG9zdE1lc3NhZ2U6dXNlUG9zdE1lc3NhZ2V8fCExfSksdGhpcy5oYW5kbGVyLmluaXQoKX0sU2lsZW50QXV0aGVudGljYXRpb25IYW5kbGVyLnByb3RvdHlwZS5nZXRFdmVudFZhbGlkYXRvcj1mdW5jdGlvbigpe3ZhciBfdGhpcz10aGlzO3JldHVybntpc1ZhbGlkOmZ1bmN0aW9uKGV2ZW50RGF0YSl7c3dpdGNoKGV2ZW50RGF0YS5ldmVudC50eXBlKXtjYXNlXCJtZXNzYWdlXCI6cmV0dXJuIGV2ZW50RGF0YS5ldmVudC5vcmlnaW49PT1fdGhpcy5wb3N0TWVzc2FnZU9yaWdpbiYmZXZlbnREYXRhLmV2ZW50LnNvdXJjZT09PV90aGlzLmhhbmRsZXIuaWZyYW1lLmNvbnRlbnRXaW5kb3cmJighMT09PV90aGlzLnBvc3RNZXNzYWdlRGF0YVR5cGV8fGV2ZW50RGF0YS5ldmVudC5kYXRhLnR5cGUmJmV2ZW50RGF0YS5ldmVudC5kYXRhLnR5cGU9PT1fdGhpcy5wb3N0TWVzc2FnZURhdGFUeXBlKTtjYXNlXCJsb2FkXCI6aWYoXCJhYm91dDpcIj09PWV2ZW50RGF0YS5zb3VyY2VPYmplY3QuY29udGVudFdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbClyZXR1cm4hMTtkZWZhdWx0OnJldHVybiEwfX19fSxTaWxlbnRBdXRoZW50aWNhdGlvbkhhbmRsZXIucHJvdG90eXBlLmdldENhbGxiYWNrSGFuZGxlcj1mdW5jdGlvbihjYWxsYmFjayx1c2VQb3N0TWVzc2FnZSl7cmV0dXJuIGZ1bmN0aW9uKGV2ZW50RGF0YSl7dmFyIGNhbGxiYWNrVmFsdWU7Y2FsbGJhY2tWYWx1ZT11c2VQb3N0TWVzc2FnZT9cIm9iamVjdFwiPT10eXBlb2YgZXZlbnREYXRhLmV2ZW50LmRhdGEmJmV2ZW50RGF0YS5ldmVudC5kYXRhLmhhc2g/ZXZlbnREYXRhLmV2ZW50LmRhdGEuaGFzaDpldmVudERhdGEuZXZlbnQuZGF0YTpldmVudERhdGEuc291cmNlT2JqZWN0LmNvbnRlbnRXaW5kb3cubG9jYXRpb24uaGFzaCxjYWxsYmFjayhudWxsLGNhbGxiYWNrVmFsdWUpfX0sVXNlcm5hbWVQYXNzd29yZC5wcm90b3R5cGUubG9naW49ZnVuY3Rpb24ob3B0aW9ucyxjYil7dmFyIHVybCxib2R5O3JldHVybiB1cmw9dXJsSm9pbih0aGlzLmJhc2VPcHRpb25zLnJvb3RVcmwsXCJ1c2VybmFtZXBhc3N3b3JkXCIsXCJsb2dpblwiKSxvcHRpb25zLnVzZXJuYW1lPW9wdGlvbnMudXNlcm5hbWV8fG9wdGlvbnMuZW1haWwsb3B0aW9ucz1vYmplY3RIZWxwZXIuYmxhY2tsaXN0KG9wdGlvbnMsW1wiZW1haWxcIl0pLGJvZHk9b2JqZWN0SGVscGVyLm1lcmdlKHRoaXMuYmFzZU9wdGlvbnMsW1wiY2xpZW50SURcIixcInJlZGlyZWN0VXJpXCIsXCJ0ZW5hbnRcIixcInJlc3BvbnNlVHlwZVwiLFwicmVzcG9uc2VNb2RlXCIsXCJzY29wZVwiLFwiYXVkaWVuY2VcIl0pLndpdGgob3B0aW9ucyksYm9keT10aGlzLnRyYW5zYWN0aW9uTWFuYWdlci5wcm9jZXNzKGJvZHkpLGJvZHk9b2JqZWN0SGVscGVyLnRvU25ha2VDYXNlKGJvZHksW1wiYXV0aDBDbGllbnRcIl0pLHRoaXMucmVxdWVzdC5wb3N0KHVybCkuc2VuZChib2R5KS5lbmQod3JhcENhbGxiYWNrKGNiKSl9LFVzZXJuYW1lUGFzc3dvcmQucHJvdG90eXBlLmNhbGxiYWNrPWZ1bmN0aW9uKGZvcm1IdG1sKXt2YXIgZGl2LF9kb2N1bWVudD13aW5kb3dIYW5kbGVyLmdldERvY3VtZW50KCk7KGRpdj1fZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSkuaW5uZXJIVE1MPWZvcm1IdG1sLF9kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpdikuY2hpbGRyZW5bMF0uc3VibWl0KCl9LEhvc3RlZFBhZ2VzLnByb3RvdHlwZS5sb2dpbj1mdW5jdGlvbihvcHRpb25zLGNiKXtpZih3aW5kb3dIYW5kbGVyLmdldFdpbmRvdygpLmxvY2F0aW9uLmhvc3QhPT10aGlzLmJhc2VPcHRpb25zLmRvbWFpbil0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIG1ldGhvZCBpcyBtZWFudCB0byBiZSB1c2VkIG9ubHkgaW5zaWRlIHRoZSBVbml2ZXJzYWwgTG9naW4gUGFnZS5cIik7dmFyIHVzZXJuYW1lUGFzc3dvcmQscGFyYW1zPW9iamVjdEhlbHBlci5tZXJnZSh0aGlzLmJhc2VPcHRpb25zLFtcImNsaWVudElEXCIsXCJyZWRpcmVjdFVyaVwiLFwidGVuYW50XCIsXCJyZXNwb25zZVR5cGVcIixcInJlc3BvbnNlTW9kZVwiLFwic2NvcGVcIixcImF1ZGllbmNlXCIsXCJfY3NyZlwiLFwic3RhdGVcIixcIl9pbnRzdGF0ZVwiLFwibm9uY2VcIl0pLndpdGgob3B0aW9ucyk7cmV0dXJuIGFzc2VydC5jaGVjayhwYXJhbXMse3R5cGU6XCJvYmplY3RcIixtZXNzYWdlOlwib3B0aW9ucyBwYXJhbWV0ZXIgaXMgbm90IHZhbGlkXCJ9LHtyZXNwb25zZVR5cGU6e3R5cGU6XCJzdHJpbmdcIixtZXNzYWdlOlwicmVzcG9uc2VUeXBlIG9wdGlvbiBpcyByZXF1aXJlZFwifX0pLCh1c2VybmFtZVBhc3N3b3JkPW5ldyBVc2VybmFtZVBhc3N3b3JkKHRoaXMuYmFzZU9wdGlvbnMpKS5sb2dpbihwYXJhbXMsZnVuY3Rpb24oZXJyLGRhdGEpe3JldHVybiBlcnI/Y2IoZXJyKTp1c2VybmFtZVBhc3N3b3JkLmNhbGxiYWNrKGRhdGEpfSl9LEhvc3RlZFBhZ2VzLnByb3RvdHlwZS5zaWdudXBBbmRMb2dpbj1mdW5jdGlvbihvcHRpb25zLGNiKXt2YXIgX3RoaXM9dGhpcztyZXR1cm4gX3RoaXMuY2xpZW50LmNsaWVudC5kYkNvbm5lY3Rpb24uc2lnbnVwKG9wdGlvbnMsZnVuY3Rpb24oZXJyKXtyZXR1cm4gZXJyP2NiKGVycik6X3RoaXMubG9naW4ob3B0aW9ucyxjYil9KX0sSG9zdGVkUGFnZXMucHJvdG90eXBlLmdldFNTT0RhdGE9ZnVuY3Rpb24od2l0aEFjdGl2ZURpcmVjdG9yaWVzLGNiKXt2YXIgdXJsLHBhcmFtcz1cIlwiO3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIHdpdGhBY3RpdmVEaXJlY3RvcmllcyYmKGNiPXdpdGhBY3RpdmVEaXJlY3Rvcmllcyx3aXRoQWN0aXZlRGlyZWN0b3JpZXM9ITEpLGFzc2VydC5jaGVjayh3aXRoQWN0aXZlRGlyZWN0b3JpZXMse3R5cGU6XCJib29sZWFuXCIsbWVzc2FnZTpcIndpdGhBY3RpdmVEaXJlY3RvcmllcyBwYXJhbWV0ZXIgaXMgbm90IHZhbGlkXCJ9KSxhc3NlcnQuY2hlY2soY2Ise3R5cGU6XCJmdW5jdGlvblwiLG1lc3NhZ2U6XCJjYiBwYXJhbWV0ZXIgaXMgbm90IHZhbGlkXCJ9KSx3aXRoQWN0aXZlRGlyZWN0b3JpZXMmJihwYXJhbXM9XCI/XCIrbGliLnN0cmluZ2lmeSh7bGRhcHM6MSxjbGllbnRfaWQ6dGhpcy5iYXNlT3B0aW9ucy5jbGllbnRJRH0pKSx1cmw9dXJsSm9pbih0aGlzLmJhc2VPcHRpb25zLnJvb3RVcmwsXCJ1c2VyXCIsXCJzc29kYXRhXCIscGFyYW1zKSx0aGlzLnJlcXVlc3QuZ2V0KHVybCx7bm9IZWFkZXJzOiEwfSkud2l0aENyZWRlbnRpYWxzKCkuZW5kKHdyYXBDYWxsYmFjayhjYikpfSxXZWJBdXRoLnByb3RvdHlwZS5wYXJzZUhhc2g9ZnVuY3Rpb24ob3B0aW9ucyxjYil7dmFyIHBhcnNlZFFzLGVycjtjYnx8XCJmdW5jdGlvblwiIT10eXBlb2Ygb3B0aW9ucz9vcHRpb25zPW9wdGlvbnN8fHt9OihjYj1vcHRpb25zLG9wdGlvbnM9e30pO3ZhciBfd2luZG93PXdpbmRvd0hhbmRsZXIuZ2V0V2luZG93KCksaGFzaFN0cj12b2lkIDA9PT1vcHRpb25zLmhhc2g/X3dpbmRvdy5sb2NhdGlvbi5oYXNoOm9wdGlvbnMuaGFzaDtpZihoYXNoU3RyPWhhc2hTdHIucmVwbGFjZSgvXiM/XFwvPy8sXCJcIiksKHBhcnNlZFFzPWxpYi5wYXJzZShoYXNoU3RyKSkuaGFzT3duUHJvcGVydHkoXCJlcnJvclwiKSlyZXR1cm4gZXJyPWVycm9yLmJ1aWxkUmVzcG9uc2UocGFyc2VkUXMuZXJyb3IscGFyc2VkUXMuZXJyb3JfZGVzY3JpcHRpb24pLHBhcnNlZFFzLnN0YXRlJiYoZXJyLnN0YXRlPXBhcnNlZFFzLnN0YXRlKSxjYihlcnIpO2lmKCFwYXJzZWRRcy5oYXNPd25Qcm9wZXJ0eShcImFjY2Vzc190b2tlblwiKSYmIXBhcnNlZFFzLmhhc093blByb3BlcnR5KFwiaWRfdG9rZW5cIikmJiFwYXJzZWRRcy5oYXNPd25Qcm9wZXJ0eShcInJlZnJlc2hfdG9rZW5cIikpcmV0dXJuIGNiKG51bGwsbnVsbCk7dmFyIHJlc3BvbnNlVHlwZXM9KHRoaXMuYmFzZU9wdGlvbnMucmVzcG9uc2VUeXBlfHxvcHRpb25zLnJlc3BvbnNlVHlwZXx8XCJcIikuc3BsaXQoXCIgXCIpO3JldHVybiByZXNwb25zZVR5cGVzLmxlbmd0aD4wJiYtMSE9PXJlc3BvbnNlVHlwZXMuaW5kZXhPZihcInRva2VuXCIpJiYhcGFyc2VkUXMuaGFzT3duUHJvcGVydHkoXCJhY2Nlc3NfdG9rZW5cIik/Y2IoZXJyb3IuYnVpbGRSZXNwb25zZShcImludmFsaWRfaGFzaFwiLFwicmVzcG9uc2VfdHlwZSBjb250YWlucyBgdG9rZW5gLCBidXQgdGhlIHBhcnNlZCBoYXNoIGRvZXMgbm90IGNvbnRhaW4gYW4gYGFjY2Vzc190b2tlbmAgcHJvcGVydHlcIikpOnJlc3BvbnNlVHlwZXMubGVuZ3RoPjAmJi0xIT09cmVzcG9uc2VUeXBlcy5pbmRleE9mKFwiaWRfdG9rZW5cIikmJiFwYXJzZWRRcy5oYXNPd25Qcm9wZXJ0eShcImlkX3Rva2VuXCIpP2NiKGVycm9yLmJ1aWxkUmVzcG9uc2UoXCJpbnZhbGlkX2hhc2hcIixcInJlc3BvbnNlX3R5cGUgY29udGFpbnMgYGlkX3Rva2VuYCwgYnV0IHRoZSBwYXJzZWQgaGFzaCBkb2VzIG5vdCBjb250YWluIGFuIGBpZF90b2tlbmAgcHJvcGVydHlcIikpOnRoaXMudmFsaWRhdGVBdXRoZW50aWNhdGlvblJlc3BvbnNlKG9wdGlvbnMscGFyc2VkUXMsY2IpfSxXZWJBdXRoLnByb3RvdHlwZS52YWxpZGF0ZUF1dGhlbnRpY2F0aW9uUmVzcG9uc2U9ZnVuY3Rpb24ob3B0aW9ucyxwYXJzZWRIYXNoLGNiKXt2YXIgX3RoaXM9dGhpcztvcHRpb25zLl9fZW5hYmxlSWRQSW5pdGlhdGVkTG9naW49b3B0aW9ucy5fX2VuYWJsZUlkUEluaXRpYXRlZExvZ2lufHxvcHRpb25zLl9fZW5hYmxlSW1wZXJzb25hdGlvbjt2YXIgc3RhdGU9cGFyc2VkSGFzaC5zdGF0ZSx0cmFuc2FjdGlvbj10aGlzLnRyYW5zYWN0aW9uTWFuYWdlci5nZXRTdG9yZWRUcmFuc2FjdGlvbihzdGF0ZSksdHJhbnNhY3Rpb25TdGF0ZT1vcHRpb25zLnN0YXRlfHx0cmFuc2FjdGlvbiYmdHJhbnNhY3Rpb24uc3RhdGV8fG51bGwsdHJhbnNhY3Rpb25TdGF0ZU1hdGNoZXNTdGF0ZT10cmFuc2FjdGlvblN0YXRlPT09c3RhdGU7aWYoISghc3RhdGUmJiF0cmFuc2FjdGlvblN0YXRlJiZvcHRpb25zLl9fZW5hYmxlSWRQSW5pdGlhdGVkTG9naW4pJiYhdHJhbnNhY3Rpb25TdGF0ZU1hdGNoZXNTdGF0ZSlyZXR1cm4gY2Ioe2Vycm9yOlwiaW52YWxpZF90b2tlblwiLGVycm9yRGVzY3JpcHRpb246XCJgc3RhdGVgIGRvZXMgbm90IG1hdGNoLlwifSk7dmFyIHRyYW5zYWN0aW9uTm9uY2U9b3B0aW9ucy5ub25jZXx8dHJhbnNhY3Rpb24mJnRyYW5zYWN0aW9uLm5vbmNlfHxudWxsLGFwcFN0YXRlPW9wdGlvbnMuc3RhdGV8fHRyYW5zYWN0aW9uJiZ0cmFuc2FjdGlvbi5hcHBTdGF0ZXx8bnVsbCxjYWxsYmFjaz1mdW5jdGlvbihlcnIscGF5bG9hZCl7aWYoZXJyKXJldHVybiBjYihlcnIpO3ZhciBzdWI7dHJhbnNhY3Rpb24mJnRyYW5zYWN0aW9uLmxhc3RVc2VkQ29ubmVjdGlvbiYmKHBheWxvYWQmJihzdWI9cGF5bG9hZC5zdWIpLF90aGlzLnNzb2RhdGFTdG9yYWdlLnNldCh0cmFuc2FjdGlvbi5sYXN0VXNlZENvbm5lY3Rpb24sc3ViKSk7cmV0dXJuIGNiKG51bGwsYnVpbGRQYXJzZUhhc2hSZXNwb25zZShwYXJzZWRIYXNoLGFwcFN0YXRlLHBheWxvYWQpKX07cmV0dXJuIHBhcnNlZEhhc2guaWRfdG9rZW4/dGhpcy52YWxpZGF0ZVRva2VuKHBhcnNlZEhhc2guaWRfdG9rZW4sdHJhbnNhY3Rpb25Ob25jZSxmdW5jdGlvbih2YWxpZGF0aW9uRXJyb3IscGF5bG9hZCl7aWYoIXZhbGlkYXRpb25FcnJvcilyZXR1cm4gcGFyc2VkSGFzaC5hY2Nlc3NfdG9rZW4mJnBheWxvYWQuYXRfaGFzaD8obmV3IHNyYykudmFsaWRhdGVBY2Nlc3NUb2tlbihwYXJzZWRIYXNoLmFjY2Vzc190b2tlbixcIlJTMjU2XCIscGF5bG9hZC5hdF9oYXNoLGZ1bmN0aW9uKGVycil7cmV0dXJuIGVycj9jYWxsYmFjayhlcnJvci5pbnZhbGlkVG9rZW4oZXJyLm1lc3NhZ2UpKTpjYWxsYmFjayhudWxsLHBheWxvYWQpfSk6Y2FsbGJhY2sobnVsbCxwYXlsb2FkKTtpZihcImludmFsaWRfdG9rZW5cIiE9PXZhbGlkYXRpb25FcnJvci5lcnJvcnx8XCJOb25jZSBkb2VzIG5vdCBtYXRjaC5cIj09PXZhbGlkYXRpb25FcnJvci5lcnJvckRlc2NyaXB0aW9uKXJldHVybiBjYWxsYmFjayh2YWxpZGF0aW9uRXJyb3IpO2lmKFwiSFMyNTZcIiE9PShuZXcgc3JjKS5kZWNvZGUocGFyc2VkSGFzaC5pZF90b2tlbikuaGVhZGVyLmFsZylyZXR1cm4gY2FsbGJhY2sodmFsaWRhdGlvbkVycm9yKTtpZighcGFyc2VkSGFzaC5hY2Nlc3NfdG9rZW4pe3JldHVybiBjYWxsYmFjayh7ZXJyb3I6XCJpbnZhbGlkX3Rva2VuXCIsZGVzY3JpcHRpb246XCJUaGUgaWRfdG9rZW4gY2Fubm90IGJlIHZhbGlkYXRlZCBiZWNhdXNlIGl0IHdhcyBzaWduZWQgd2l0aCB0aGUgSFMyNTYgYWxnb3JpdGhtIGFuZCBwdWJsaWMgY2xpZW50cyAobGlrZSBhIGJyb3dzZXIpIGNhbuKAmXQgc3RvcmUgc2VjcmV0cy4gUGxlYXNlIHJlYWQgdGhlIGFzc29jaWF0ZWQgZG9jIGZvciBwb3NzaWJsZSB3YXlzIHRvIGZpeCB0aGlzLiBSZWFkIG1vcmU6IGh0dHBzOi8vYXV0aDAuY29tL2RvY3MvZXJyb3JzL2xpYnJhcmllcy9hdXRoMC1qcy9pbnZhbGlkLXRva2VuI3BhcnNpbmctYW4taHMyNTYtc2lnbmVkLWlkLXRva2VuLXdpdGhvdXQtYW4tYWNjZXNzLXRva2VuXCJ9KX1yZXR1cm4gX3RoaXMuY2xpZW50LnVzZXJJbmZvKHBhcnNlZEhhc2guYWNjZXNzX3Rva2VuLGZ1bmN0aW9uKGVyclVzZXJJbmZvLHByb2ZpbGUpe3JldHVybiBlcnJVc2VySW5mbz9jYWxsYmFjayhlcnJVc2VySW5mbyk6Y2FsbGJhY2sobnVsbCxwcm9maWxlKX0pfSk6Y2FsbGJhY2sobnVsbCxudWxsKX0sV2ViQXV0aC5wcm90b3R5cGUudmFsaWRhdGVUb2tlbj1mdW5jdGlvbih0b2tlbixub25jZSxjYil7bmV3IHNyYyh7aXNzdWVyOnRoaXMuYmFzZU9wdGlvbnMudG9rZW5faXNzdWVyLGp3a3NVUkk6dGhpcy5iYXNlT3B0aW9ucy5qd2tzVVJJLGF1ZGllbmNlOnRoaXMuYmFzZU9wdGlvbnMuY2xpZW50SUQsbGVld2F5OnRoaXMuYmFzZU9wdGlvbnMubGVld2F5fHwwLF9fZGlzYWJsZUV4cGlyYXRpb25DaGVjazp0aGlzLmJhc2VPcHRpb25zLl9fZGlzYWJsZUV4cGlyYXRpb25DaGVja30pLnZlcmlmeSh0b2tlbixub25jZSxmdW5jdGlvbihlcnIscGF5bG9hZCl7aWYoZXJyKXJldHVybiBjYihlcnJvci5pbnZhbGlkVG9rZW4oZXJyLm1lc3NhZ2UpKTtjYihudWxsLHBheWxvYWQpfSl9LFdlYkF1dGgucHJvdG90eXBlLnJlbmV3QXV0aD1mdW5jdGlvbihvcHRpb25zLGNiKXt2YXIgdXNlUG9zdE1lc3NhZ2U9ISFvcHRpb25zLnVzZVBvc3RNZXNzYWdlLHBvc3RNZXNzYWdlRGF0YVR5cGU9b3B0aW9ucy5wb3N0TWVzc2FnZURhdGFUeXBlfHwhMSxwb3N0TWVzc2FnZU9yaWdpbj1vcHRpb25zLnBvc3RNZXNzYWdlT3JpZ2lufHx3aW5kb3dIYW5kbGVyLmdldFdpbmRvdygpLm9yaWdpbix0aW1lb3V0PW9wdGlvbnMudGltZW91dCxfdGhpcz10aGlzLHBhcmFtcz1vYmplY3RIZWxwZXIubWVyZ2UodGhpcy5iYXNlT3B0aW9ucyxbXCJjbGllbnRJRFwiLFwicmVkaXJlY3RVcmlcIixcInJlc3BvbnNlVHlwZVwiLFwic2NvcGVcIixcImF1ZGllbmNlXCIsXCJfY3NyZlwiLFwic3RhdGVcIixcIl9pbnRzdGF0ZVwiLFwibm9uY2VcIl0pLndpdGgob3B0aW9ucyk7cGFyYW1zLnJlc3BvbnNlVHlwZT1wYXJhbXMucmVzcG9uc2VUeXBlfHxcInRva2VuXCIscGFyYW1zLnJlc3BvbnNlTW9kZT1wYXJhbXMucmVzcG9uc2VNb2RlfHxcImZyYWdtZW50XCIscGFyYW1zPXRoaXMudHJhbnNhY3Rpb25NYW5hZ2VyLnByb2Nlc3MocGFyYW1zKSxhc3NlcnQuY2hlY2socGFyYW1zLHt0eXBlOlwib2JqZWN0XCIsbWVzc2FnZTpcIm9wdGlvbnMgcGFyYW1ldGVyIGlzIG5vdCB2YWxpZFwifSksYXNzZXJ0LmNoZWNrKGNiLHt0eXBlOlwiZnVuY3Rpb25cIixtZXNzYWdlOlwiY2IgcGFyYW1ldGVyIGlzIG5vdCB2YWxpZFwifSkscGFyYW1zLnByb21wdD1cIm5vbmVcIixwYXJhbXM9b2JqZWN0SGVscGVyLmJsYWNrbGlzdChwYXJhbXMsW1widXNlUG9zdE1lc3NhZ2VcIixcInRlbmFudFwiLFwicG9zdE1lc3NhZ2VEYXRhVHlwZVwiLFwicG9zdE1lc3NhZ2VPcmlnaW5cIl0pLFNpbGVudEF1dGhlbnRpY2F0aW9uSGFuZGxlci5jcmVhdGUoe2F1dGhlbnRpY2F0aW9uVXJsOnRoaXMuY2xpZW50LmJ1aWxkQXV0aG9yaXplVXJsKHBhcmFtcykscG9zdE1lc3NhZ2VEYXRhVHlwZTpwb3N0TWVzc2FnZURhdGFUeXBlLHBvc3RNZXNzYWdlT3JpZ2luOnBvc3RNZXNzYWdlT3JpZ2luLHRpbWVvdXQ6dGltZW91dH0pLmxvZ2luKHVzZVBvc3RNZXNzYWdlLGZ1bmN0aW9uKGVycixoYXNoKXtpZihcIm9iamVjdFwiPT10eXBlb2YgaGFzaClyZXR1cm4gY2IoZXJyLGhhc2gpO190aGlzLnBhcnNlSGFzaCh7aGFzaDpoYXNofSxjYil9KX0sV2ViQXV0aC5wcm90b3R5cGUuY2hlY2tTZXNzaW9uPWZ1bmN0aW9uKG9wdGlvbnMsY2Ipe3ZhciBwYXJhbXM9b2JqZWN0SGVscGVyLm1lcmdlKHRoaXMuYmFzZU9wdGlvbnMsW1wiY2xpZW50SURcIixcInJlc3BvbnNlVHlwZVwiLFwicmVkaXJlY3RVcmlcIixcInNjb3BlXCIsXCJhdWRpZW5jZVwiLFwiX2NzcmZcIixcInN0YXRlXCIsXCJfaW50c3RhdGVcIixcIm5vbmNlXCJdKS53aXRoKG9wdGlvbnMpO3JldHVyblwiY29kZVwiPT09cGFyYW1zLnJlc3BvbnNlVHlwZT9jYih7ZXJyb3I6XCJlcnJvclwiLGVycm9yX2Rlc2NyaXB0aW9uOlwicmVzcG9uc2VUeXBlIGNhbid0IGJlIGBjb2RlYFwifSk6KG9wdGlvbnMubm9uY2V8fChwYXJhbXM9dGhpcy50cmFuc2FjdGlvbk1hbmFnZXIucHJvY2VzcyhwYXJhbXMpKSxwYXJhbXMucmVkaXJlY3RVcmk/KGFzc2VydC5jaGVjayhwYXJhbXMse3R5cGU6XCJvYmplY3RcIixtZXNzYWdlOlwib3B0aW9ucyBwYXJhbWV0ZXIgaXMgbm90IHZhbGlkXCJ9KSxhc3NlcnQuY2hlY2soY2Ise3R5cGU6XCJmdW5jdGlvblwiLG1lc3NhZ2U6XCJjYiBwYXJhbWV0ZXIgaXMgbm90IHZhbGlkXCJ9KSxwYXJhbXM9b2JqZWN0SGVscGVyLmJsYWNrbGlzdChwYXJhbXMsW1widXNlUG9zdE1lc3NhZ2VcIixcInRlbmFudFwiLFwicG9zdE1lc3NhZ2VEYXRhVHlwZVwiXSksdm9pZCB0aGlzLndlYk1lc3NhZ2VIYW5kbGVyLnJ1bihwYXJhbXMsY2IpKTpjYih7ZXJyb3I6XCJlcnJvclwiLGVycm9yX2Rlc2NyaXB0aW9uOlwicmVkaXJlY3RVcmkgY2FuJ3QgYmUgZW1wdHlcIn0pKX0sV2ViQXV0aC5wcm90b3R5cGUuY2hhbmdlUGFzc3dvcmQ9ZnVuY3Rpb24ob3B0aW9ucyxjYil7cmV0dXJuIHRoaXMuY2xpZW50LmRiQ29ubmVjdGlvbi5jaGFuZ2VQYXNzd29yZChvcHRpb25zLGNiKX0sV2ViQXV0aC5wcm90b3R5cGUucGFzc3dvcmRsZXNzU3RhcnQ9ZnVuY3Rpb24ob3B0aW9ucyxjYil7dmFyIGF1dGhQYXJhbXM9b2JqZWN0SGVscGVyLm1lcmdlKHRoaXMuYmFzZU9wdGlvbnMsW1wicmVzcG9uc2VUeXBlXCIsXCJyZXNwb25zZU1vZGVcIixcInJlZGlyZWN0VXJpXCIsXCJzY29wZVwiLFwiYXVkaWVuY2VcIixcIl9jc3JmXCIsXCJzdGF0ZVwiLFwiX2ludHN0YXRlXCIsXCJub25jZVwiXSkud2l0aChvcHRpb25zLmF1dGhQYXJhbXMpO3JldHVybiBvcHRpb25zLmF1dGhQYXJhbXM9dGhpcy50cmFuc2FjdGlvbk1hbmFnZXIucHJvY2VzcyhhdXRoUGFyYW1zKSx0aGlzLmNsaWVudC5wYXNzd29yZGxlc3Muc3RhcnQob3B0aW9ucyxjYil9LFdlYkF1dGgucHJvdG90eXBlLnNpZ251cD1mdW5jdGlvbihvcHRpb25zLGNiKXtyZXR1cm4gdGhpcy5jbGllbnQuZGJDb25uZWN0aW9uLnNpZ251cChvcHRpb25zLGNiKX0sV2ViQXV0aC5wcm90b3R5cGUuYXV0aG9yaXplPWZ1bmN0aW9uKG9wdGlvbnMpe3ZhciBwYXJhbXM9b2JqZWN0SGVscGVyLm1lcmdlKHRoaXMuYmFzZU9wdGlvbnMsW1wiY2xpZW50SURcIixcInJlc3BvbnNlVHlwZVwiLFwicmVzcG9uc2VNb2RlXCIsXCJyZWRpcmVjdFVyaVwiLFwic2NvcGVcIixcImF1ZGllbmNlXCIsXCJfY3NyZlwiLFwic3RhdGVcIixcIl9pbnRzdGF0ZVwiLFwibm9uY2VcIl0pLndpdGgob3B0aW9ucyk7YXNzZXJ0LmNoZWNrKHBhcmFtcyx7dHlwZTpcIm9iamVjdFwiLG1lc3NhZ2U6XCJvcHRpb25zIHBhcmFtZXRlciBpcyBub3QgdmFsaWRcIn0se3Jlc3BvbnNlVHlwZTp7dHlwZTpcInN0cmluZ1wiLG1lc3NhZ2U6XCJyZXNwb25zZVR5cGUgb3B0aW9uIGlzIHJlcXVpcmVkXCJ9fSksKHBhcmFtcz10aGlzLnRyYW5zYWN0aW9uTWFuYWdlci5wcm9jZXNzKHBhcmFtcykpLnNjb3BlPXBhcmFtcy5zY29wZXx8XCJvcGVuaWQgcHJvZmlsZSBlbWFpbFwiLHdpbmRvd0hhbmRsZXIucmVkaXJlY3QodGhpcy5jbGllbnQuYnVpbGRBdXRob3JpemVVcmwocGFyYW1zKSl9LFdlYkF1dGgucHJvdG90eXBlLnNpZ251cEFuZEF1dGhvcml6ZT1mdW5jdGlvbihvcHRpb25zLGNiKXt2YXIgX3RoaXM9dGhpcztyZXR1cm4gdGhpcy5jbGllbnQuZGJDb25uZWN0aW9uLnNpZ251cChvYmplY3RIZWxwZXIuYmxhY2tsaXN0KG9wdGlvbnMsW1wicG9wdXBIYW5kbGVyXCJdKSxmdW5jdGlvbihlcnIpe2lmKGVycilyZXR1cm4gY2IoZXJyKTtvcHRpb25zLnJlYWxtPW9wdGlvbnMuY29ubmVjdGlvbixvcHRpb25zLnVzZXJuYW1lfHwob3B0aW9ucy51c2VybmFtZT1vcHRpb25zLmVtYWlsKSxfdGhpcy5jbGllbnQubG9naW4ob3B0aW9ucyxjYil9KX0sV2ViQXV0aC5wcm90b3R5cGUubG9naW49ZnVuY3Rpb24ob3B0aW9ucyxjYil7dmFyIHBhcmFtcz1vYmplY3RIZWxwZXIubWVyZ2UodGhpcy5iYXNlT3B0aW9ucyxbXCJjbGllbnRJRFwiLFwicmVzcG9uc2VUeXBlXCIsXCJyZWRpcmVjdFVyaVwiLFwic2NvcGVcIixcImF1ZGllbmNlXCIsXCJfY3NyZlwiLFwic3RhdGVcIixcIl9pbnRzdGF0ZVwiLFwibm9uY2VcIl0pLndpdGgob3B0aW9ucyk7cGFyYW1zPXRoaXMudHJhbnNhY3Rpb25NYW5hZ2VyLnByb2Nlc3MocGFyYW1zKSx3aW5kb3dIYW5kbGVyLmdldFdpbmRvdygpLmxvY2F0aW9uLmhvc3Q9PT10aGlzLmJhc2VPcHRpb25zLmRvbWFpbj8ocGFyYW1zLmNvbm5lY3Rpb249cGFyYW1zLnJlYWxtLGRlbGV0ZSBwYXJhbXMucmVhbG0sdGhpcy5fdW5pdmVyc2FsTG9naW4ubG9naW4ocGFyYW1zLGNiKSk6dGhpcy5jcm9zc09yaWdpbkF1dGhlbnRpY2F0aW9uLmxvZ2luKHBhcmFtcyxjYil9LFdlYkF1dGgucHJvdG90eXBlLnBhc3N3b3JkbGVzc0xvZ2luPWZ1bmN0aW9uKG9wdGlvbnMsY2Ipe3ZhciBwYXJhbXM9b2JqZWN0SGVscGVyLm1lcmdlKHRoaXMuYmFzZU9wdGlvbnMsW1wiY2xpZW50SURcIixcInJlc3BvbnNlVHlwZVwiLFwicmVkaXJlY3RVcmlcIixcInNjb3BlXCIsXCJhdWRpZW5jZVwiLFwiX2NzcmZcIixcInN0YXRlXCIsXCJfaW50c3RhdGVcIixcIm5vbmNlXCJdKS53aXRoKG9wdGlvbnMpO2lmKHBhcmFtcz10aGlzLnRyYW5zYWN0aW9uTWFuYWdlci5wcm9jZXNzKHBhcmFtcyksd2luZG93SGFuZGxlci5nZXRXaW5kb3coKS5sb2NhdGlvbi5ob3N0PT09dGhpcy5iYXNlT3B0aW9ucy5kb21haW4pdGhpcy5wYXNzd29yZGxlc3NWZXJpZnkocGFyYW1zLGNiKTtlbHNle3ZhciBjcm9zc09yaWdpbk9wdGlvbnM9b2JqZWN0SGVscGVyLmV4dGVuZCh7Y3JlZGVudGlhbFR5cGU6XCJodHRwOi8vYXV0aDAuY29tL29hdXRoL2dyYW50LXR5cGUvcGFzc3dvcmRsZXNzL290cFwiLHJlYWxtOnBhcmFtcy5jb25uZWN0aW9uLHVzZXJuYW1lOnBhcmFtcy5lbWFpbHx8cGFyYW1zLnBob25lTnVtYmVyLG90cDpwYXJhbXMudmVyaWZpY2F0aW9uQ29kZX0sb2JqZWN0SGVscGVyLmJsYWNrbGlzdChwYXJhbXMsW1wiY29ubmVjdGlvblwiLFwiZW1haWxcIixcInBob25lTnVtYmVyXCIsXCJ2ZXJpZmljYXRpb25Db2RlXCJdKSk7dGhpcy5jcm9zc09yaWdpbkF1dGhlbnRpY2F0aW9uLmxvZ2luKGNyb3NzT3JpZ2luT3B0aW9ucyxjYil9fSxXZWJBdXRoLnByb3RvdHlwZS5jcm9zc09yaWdpbkF1dGhlbnRpY2F0aW9uQ2FsbGJhY2s9ZnVuY3Rpb24oKXt0aGlzLmNyb3NzT3JpZ2luVmVyaWZpY2F0aW9uKCl9LFdlYkF1dGgucHJvdG90eXBlLmNyb3NzT3JpZ2luVmVyaWZpY2F0aW9uPWZ1bmN0aW9uKCl7dGhpcy5jcm9zc09yaWdpbkF1dGhlbnRpY2F0aW9uLmNhbGxiYWNrKCl9LFdlYkF1dGgucHJvdG90eXBlLmxvZ291dD1mdW5jdGlvbihvcHRpb25zKXt3aW5kb3dIYW5kbGVyLnJlZGlyZWN0KHRoaXMuY2xpZW50LmJ1aWxkTG9nb3V0VXJsKG9wdGlvbnMpKX0sV2ViQXV0aC5wcm90b3R5cGUucGFzc3dvcmRsZXNzVmVyaWZ5PWZ1bmN0aW9uKG9wdGlvbnMsY2Ipe3ZhciBfdGhpcz10aGlzLHBhcmFtcz1vYmplY3RIZWxwZXIubWVyZ2UodGhpcy5iYXNlT3B0aW9ucyxbXCJjbGllbnRJRFwiLFwicmVzcG9uc2VUeXBlXCIsXCJyZXNwb25zZU1vZGVcIixcInJlZGlyZWN0VXJpXCIsXCJzY29wZVwiLFwiYXVkaWVuY2VcIixcIl9jc3JmXCIsXCJzdGF0ZVwiLFwiX2ludHN0YXRlXCIsXCJub25jZVwiXSkud2l0aChvcHRpb25zKTtyZXR1cm4gYXNzZXJ0LmNoZWNrKHBhcmFtcyx7dHlwZTpcIm9iamVjdFwiLG1lc3NhZ2U6XCJvcHRpb25zIHBhcmFtZXRlciBpcyBub3QgdmFsaWRcIn0se3Jlc3BvbnNlVHlwZTp7dHlwZTpcInN0cmluZ1wiLG1lc3NhZ2U6XCJyZXNwb25zZVR5cGUgb3B0aW9uIGlzIHJlcXVpcmVkXCJ9fSkscGFyYW1zPXRoaXMudHJhbnNhY3Rpb25NYW5hZ2VyLnByb2Nlc3MocGFyYW1zKSx0aGlzLmNsaWVudC5wYXNzd29yZGxlc3MudmVyaWZ5KHBhcmFtcyxmdW5jdGlvbihlcnIpe3JldHVybiBlcnI/Y2IoZXJyKTp3aW5kb3dIYW5kbGVyLnJlZGlyZWN0KF90aGlzLmNsaWVudC5wYXNzd29yZGxlc3MuYnVpbGRWZXJpZnlVcmwocGFyYW1zKSl9KX0sUGFzc3dvcmRsZXNzQXV0aGVudGljYXRpb24ucHJvdG90eXBlLmJ1aWxkVmVyaWZ5VXJsPWZ1bmN0aW9uKG9wdGlvbnMpe3ZhciBwYXJhbXMscVN0cmluZztyZXR1cm4gYXNzZXJ0LmNoZWNrKG9wdGlvbnMse3R5cGU6XCJvYmplY3RcIixtZXNzYWdlOlwib3B0aW9ucyBwYXJhbWV0ZXIgaXMgbm90IHZhbGlkXCJ9LHtjb25uZWN0aW9uOnt0eXBlOlwic3RyaW5nXCIsbWVzc2FnZTpcImNvbm5lY3Rpb24gb3B0aW9uIGlzIHJlcXVpcmVkXCJ9LHZlcmlmaWNhdGlvbkNvZGU6e3R5cGU6XCJzdHJpbmdcIixtZXNzYWdlOlwidmVyaWZpY2F0aW9uQ29kZSBvcHRpb24gaXMgcmVxdWlyZWRcIn0scGhvbmVOdW1iZXI6e29wdGlvbmFsOiExLHR5cGU6XCJzdHJpbmdcIixtZXNzYWdlOlwicGhvbmVOdW1iZXIgb3B0aW9uIGlzIHJlcXVpcmVkXCIsY29uZGl0aW9uOmZ1bmN0aW9uKG8pe3JldHVybiFvLmVtYWlsfX0sZW1haWw6e29wdGlvbmFsOiExLHR5cGU6XCJzdHJpbmdcIixtZXNzYWdlOlwiZW1haWwgb3B0aW9uIGlzIHJlcXVpcmVkXCIsY29uZGl0aW9uOmZ1bmN0aW9uKG8pe3JldHVybiFvLnBob25lTnVtYmVyfX19KSxwYXJhbXM9b2JqZWN0SGVscGVyLm1lcmdlKHRoaXMuYmFzZU9wdGlvbnMsW1wiY2xpZW50SURcIixcInJlc3BvbnNlVHlwZVwiLFwicmVzcG9uc2VNb2RlXCIsXCJyZWRpcmVjdFVyaVwiLFwic2NvcGVcIixcImF1ZGllbmNlXCIsXCJfY3NyZlwiLFwic3RhdGVcIixcIl9pbnRzdGF0ZVwiLFwicHJvdG9jb2xcIixcIm5vbmNlXCJdKS53aXRoKG9wdGlvbnMpLHRoaXMuYmFzZU9wdGlvbnMuX3NlbmRUZWxlbWV0cnkmJihwYXJhbXMuYXV0aDBDbGllbnQ9dGhpcy5yZXF1ZXN0LmdldFRlbGVtZXRyeURhdGEoKSkscGFyYW1zPW9iamVjdEhlbHBlci50b1NuYWtlQ2FzZShwYXJhbXMsW1wiYXV0aDBDbGllbnRcIl0pLHFTdHJpbmc9bGliLnN0cmluZ2lmeShwYXJhbXMpLHVybEpvaW4odGhpcy5iYXNlT3B0aW9ucy5yb290VXJsLFwicGFzc3dvcmRsZXNzXCIsXCJ2ZXJpZnlfcmVkaXJlY3RcIixcIj9cIitxU3RyaW5nKX0sUGFzc3dvcmRsZXNzQXV0aGVudGljYXRpb24ucHJvdG90eXBlLnN0YXJ0PWZ1bmN0aW9uKG9wdGlvbnMsY2Ipe3ZhciB1cmwsYm9keTtyZXR1cm4gYXNzZXJ0LmNoZWNrKG9wdGlvbnMse3R5cGU6XCJvYmplY3RcIixtZXNzYWdlOlwib3B0aW9ucyBwYXJhbWV0ZXIgaXMgbm90IHZhbGlkXCJ9LHtjb25uZWN0aW9uOnt0eXBlOlwic3RyaW5nXCIsbWVzc2FnZTpcImNvbm5lY3Rpb24gb3B0aW9uIGlzIHJlcXVpcmVkXCJ9LHNlbmQ6e3R5cGU6XCJzdHJpbmdcIixtZXNzYWdlOlwic2VuZCBvcHRpb24gaXMgcmVxdWlyZWRcIix2YWx1ZXM6W1wibGlua1wiLFwiY29kZVwiXSx2YWx1ZV9tZXNzYWdlOlwic2VuZCBpcyBub3QgdmFsaWQgKFtsaW5rLCBjb2RlXSlcIn0scGhvbmVOdW1iZXI6e29wdGlvbmFsOiEwLHR5cGU6XCJzdHJpbmdcIixtZXNzYWdlOlwicGhvbmVOdW1iZXIgb3B0aW9uIGlzIHJlcXVpcmVkXCIsY29uZGl0aW9uOmZ1bmN0aW9uKG8pe3JldHVyblwiY29kZVwiPT09by5zZW5kfHwhby5lbWFpbH19LGVtYWlsOntvcHRpb25hbDohMCx0eXBlOlwic3RyaW5nXCIsbWVzc2FnZTpcImVtYWlsIG9wdGlvbiBpcyByZXF1aXJlZFwiLGNvbmRpdGlvbjpmdW5jdGlvbihvKXtyZXR1cm5cImxpbmtcIj09PW8uc2VuZHx8IW8ucGhvbmVOdW1iZXJ9fSxhdXRoUGFyYW1zOntvcHRpb25hbDohMCx0eXBlOlwib2JqZWN0XCIsbWVzc2FnZTpcImF1dGhQYXJhbXMgb3B0aW9uIGlzIHJlcXVpcmVkXCJ9fSksYXNzZXJ0LmNoZWNrKGNiLHt0eXBlOlwiZnVuY3Rpb25cIixtZXNzYWdlOlwiY2IgcGFyYW1ldGVyIGlzIG5vdCB2YWxpZFwifSksdXJsPXVybEpvaW4odGhpcy5iYXNlT3B0aW9ucy5yb290VXJsLFwicGFzc3dvcmRsZXNzXCIsXCJzdGFydFwiKSwoYm9keT1vYmplY3RIZWxwZXIubWVyZ2UodGhpcy5iYXNlT3B0aW9ucyxbXCJjbGllbnRJRFwiLFwicmVzcG9uc2VUeXBlXCIsXCJyZWRpcmVjdFVyaVwiLFwic2NvcGVcIl0pLndpdGgob3B0aW9ucykpLnNjb3BlJiYoYm9keS5hdXRoUGFyYW1zPWJvZHkuYXV0aFBhcmFtc3x8e30sYm9keS5hdXRoUGFyYW1zLnNjb3BlPWJvZHkuc2NvcGUpLGJvZHkucmVkaXJlY3RVcmkmJihib2R5LmF1dGhQYXJhbXM9Ym9keS5hdXRoUGFyYW1zfHx7fSxib2R5LmF1dGhQYXJhbXMucmVkaXJlY3RfdXJpPWJvZHkucmVkaXJlY3RVcmkpLGJvZHkucmVzcG9uc2VUeXBlJiYoYm9keS5hdXRoUGFyYW1zPWJvZHkuYXV0aFBhcmFtc3x8e30sYm9keS5hdXRoUGFyYW1zLnJlc3BvbnNlX3R5cGU9Ym9keS5yZXNwb25zZVR5cGUpLGRlbGV0ZSBib2R5LnJlZGlyZWN0VXJpLGRlbGV0ZSBib2R5LnJlc3BvbnNlVHlwZSxkZWxldGUgYm9keS5zY29wZSxib2R5PW9iamVjdEhlbHBlci50b1NuYWtlQ2FzZShib2R5LFtcImF1dGgwQ2xpZW50XCIsXCJhdXRoUGFyYW1zXCJdKSx0aGlzLnJlcXVlc3QucG9zdCh1cmwpLnNlbmQoYm9keSkuZW5kKHdyYXBDYWxsYmFjayhjYikpfSxQYXNzd29yZGxlc3NBdXRoZW50aWNhdGlvbi5wcm90b3R5cGUudmVyaWZ5PWZ1bmN0aW9uKG9wdGlvbnMsY2Ipe3ZhciB1cmwsY2xlYW5PcHRpb247cmV0dXJuIGFzc2VydC5jaGVjayhvcHRpb25zLHt0eXBlOlwib2JqZWN0XCIsbWVzc2FnZTpcIm9wdGlvbnMgcGFyYW1ldGVyIGlzIG5vdCB2YWxpZFwifSx7Y29ubmVjdGlvbjp7dHlwZTpcInN0cmluZ1wiLG1lc3NhZ2U6XCJjb25uZWN0aW9uIG9wdGlvbiBpcyByZXF1aXJlZFwifSx2ZXJpZmljYXRpb25Db2RlOnt0eXBlOlwic3RyaW5nXCIsbWVzc2FnZTpcInZlcmlmaWNhdGlvbkNvZGUgb3B0aW9uIGlzIHJlcXVpcmVkXCJ9LHBob25lTnVtYmVyOntvcHRpb25hbDohMSx0eXBlOlwic3RyaW5nXCIsbWVzc2FnZTpcInBob25lTnVtYmVyIG9wdGlvbiBpcyByZXF1aXJlZFwiLGNvbmRpdGlvbjpmdW5jdGlvbihvKXtyZXR1cm4hby5lbWFpbH19LGVtYWlsOntvcHRpb25hbDohMSx0eXBlOlwic3RyaW5nXCIsbWVzc2FnZTpcImVtYWlsIG9wdGlvbiBpcyByZXF1aXJlZFwiLGNvbmRpdGlvbjpmdW5jdGlvbihvKXtyZXR1cm4hby5waG9uZU51bWJlcn19fSksYXNzZXJ0LmNoZWNrKGNiLHt0eXBlOlwiZnVuY3Rpb25cIixtZXNzYWdlOlwiY2IgcGFyYW1ldGVyIGlzIG5vdCB2YWxpZFwifSksY2xlYW5PcHRpb249b2JqZWN0SGVscGVyLnBpY2sob3B0aW9ucyxbXCJjb25uZWN0aW9uXCIsXCJ2ZXJpZmljYXRpb25Db2RlXCIsXCJwaG9uZU51bWJlclwiLFwiZW1haWxcIixcImF1dGgwQ2xpZW50XCJdKSxjbGVhbk9wdGlvbj1vYmplY3RIZWxwZXIudG9TbmFrZUNhc2UoY2xlYW5PcHRpb24sW1wiYXV0aDBDbGllbnRcIl0pLHVybD11cmxKb2luKHRoaXMuYmFzZU9wdGlvbnMucm9vdFVybCxcInBhc3N3b3JkbGVzc1wiLFwidmVyaWZ5XCIpLHRoaXMucmVxdWVzdC5wb3N0KHVybCkuc2VuZChjbGVhbk9wdGlvbikuZW5kKHdyYXBDYWxsYmFjayhjYikpfSxEQkNvbm5lY3Rpb24ucHJvdG90eXBlLnNpZ251cD1mdW5jdGlvbihvcHRpb25zLGNiKXt2YXIgdXJsLGJvZHksbWV0YWRhdGE7cmV0dXJuIGFzc2VydC5jaGVjayhvcHRpb25zLHt0eXBlOlwib2JqZWN0XCIsbWVzc2FnZTpcIm9wdGlvbnMgcGFyYW1ldGVyIGlzIG5vdCB2YWxpZFwifSx7Y29ubmVjdGlvbjp7dHlwZTpcInN0cmluZ1wiLG1lc3NhZ2U6XCJjb25uZWN0aW9uIG9wdGlvbiBpcyByZXF1aXJlZFwifSxlbWFpbDp7dHlwZTpcInN0cmluZ1wiLG1lc3NhZ2U6XCJlbWFpbCBvcHRpb24gaXMgcmVxdWlyZWRcIn0scGFzc3dvcmQ6e3R5cGU6XCJzdHJpbmdcIixtZXNzYWdlOlwicGFzc3dvcmQgb3B0aW9uIGlzIHJlcXVpcmVkXCJ9fSksYXNzZXJ0LmNoZWNrKGNiLHt0eXBlOlwiZnVuY3Rpb25cIixtZXNzYWdlOlwiY2IgcGFyYW1ldGVyIGlzIG5vdCB2YWxpZFwifSksdXJsPXVybEpvaW4odGhpcy5iYXNlT3B0aW9ucy5yb290VXJsLFwiZGJjb25uZWN0aW9uc1wiLFwic2lnbnVwXCIpLG1ldGFkYXRhPShib2R5PW9iamVjdEhlbHBlci5tZXJnZSh0aGlzLmJhc2VPcHRpb25zLFtcImNsaWVudElEXCJdKS53aXRoKG9wdGlvbnMpKS51c2VyX21ldGFkYXRhfHxib2R5LnVzZXJNZXRhZGF0YSxib2R5PW9iamVjdEhlbHBlci5ibGFja2xpc3QoYm9keSxbXCJzY29wZVwiLFwidXNlck1ldGFkYXRhXCIsXCJ1c2VyX21ldGFkYXRhXCJdKSxib2R5PW9iamVjdEhlbHBlci50b1NuYWtlQ2FzZShib2R5LFtcImF1dGgwQ2xpZW50XCJdKSxtZXRhZGF0YSYmKGJvZHkudXNlcl9tZXRhZGF0YT1tZXRhZGF0YSksdGhpcy5yZXF1ZXN0LnBvc3QodXJsKS5zZW5kKGJvZHkpLmVuZCh3cmFwQ2FsbGJhY2soY2IpKX0sREJDb25uZWN0aW9uLnByb3RvdHlwZS5jaGFuZ2VQYXNzd29yZD1mdW5jdGlvbihvcHRpb25zLGNiKXt2YXIgdXJsLGJvZHk7cmV0dXJuIGFzc2VydC5jaGVjayhvcHRpb25zLHt0eXBlOlwib2JqZWN0XCIsbWVzc2FnZTpcIm9wdGlvbnMgcGFyYW1ldGVyIGlzIG5vdCB2YWxpZFwifSx7Y29ubmVjdGlvbjp7dHlwZTpcInN0cmluZ1wiLG1lc3NhZ2U6XCJjb25uZWN0aW9uIG9wdGlvbiBpcyByZXF1aXJlZFwifSxlbWFpbDp7dHlwZTpcInN0cmluZ1wiLG1lc3NhZ2U6XCJlbWFpbCBvcHRpb24gaXMgcmVxdWlyZWRcIn19KSxhc3NlcnQuY2hlY2soY2Ise3R5cGU6XCJmdW5jdGlvblwiLG1lc3NhZ2U6XCJjYiBwYXJhbWV0ZXIgaXMgbm90IHZhbGlkXCJ9KSx1cmw9dXJsSm9pbih0aGlzLmJhc2VPcHRpb25zLnJvb3RVcmwsXCJkYmNvbm5lY3Rpb25zXCIsXCJjaGFuZ2VfcGFzc3dvcmRcIiksYm9keT1vYmplY3RIZWxwZXIubWVyZ2UodGhpcy5iYXNlT3B0aW9ucyxbXCJjbGllbnRJRFwiXSkud2l0aChvcHRpb25zLFtcImVtYWlsXCIsXCJjb25uZWN0aW9uXCJdKSxib2R5PW9iamVjdEhlbHBlci50b1NuYWtlQ2FzZShib2R5LFtcImF1dGgwQ2xpZW50XCJdKSx0aGlzLnJlcXVlc3QucG9zdCh1cmwpLnNlbmQoYm9keSkuZW5kKHdyYXBDYWxsYmFjayhjYikpfSxBdXRoZW50aWNhdGlvbi5wcm90b3R5cGUuYnVpbGRBdXRob3JpemVVcmw9ZnVuY3Rpb24ob3B0aW9ucyl7dmFyIHBhcmFtcyxxU3RyaW5nO3JldHVybiBhc3NlcnQuY2hlY2sob3B0aW9ucyx7dHlwZTpcIm9iamVjdFwiLG1lc3NhZ2U6XCJvcHRpb25zIHBhcmFtZXRlciBpcyBub3QgdmFsaWRcIn0pLHBhcmFtcz1vYmplY3RIZWxwZXIubWVyZ2UodGhpcy5iYXNlT3B0aW9ucyxbXCJjbGllbnRJRFwiLFwicmVzcG9uc2VUeXBlXCIsXCJyZXNwb25zZU1vZGVcIixcInJlZGlyZWN0VXJpXCIsXCJzY29wZVwiLFwiYXVkaWVuY2VcIl0pLndpdGgob3B0aW9ucyksYXNzZXJ0LmNoZWNrKHBhcmFtcyx7dHlwZTpcIm9iamVjdFwiLG1lc3NhZ2U6XCJvcHRpb25zIHBhcmFtZXRlciBpcyBub3QgdmFsaWRcIn0se2NsaWVudElEOnt0eXBlOlwic3RyaW5nXCIsbWVzc2FnZTpcImNsaWVudElEIG9wdGlvbiBpcyByZXF1aXJlZFwifSxyZWRpcmVjdFVyaTp7b3B0aW9uYWw6ITAsdHlwZTpcInN0cmluZ1wiLG1lc3NhZ2U6XCJyZWRpcmVjdFVyaSBvcHRpb24gaXMgcmVxdWlyZWRcIn0scmVzcG9uc2VUeXBlOnt0eXBlOlwic3RyaW5nXCIsbWVzc2FnZTpcInJlc3BvbnNlVHlwZSBvcHRpb24gaXMgcmVxdWlyZWRcIn0sbm9uY2U6e3R5cGU6XCJzdHJpbmdcIixtZXNzYWdlOlwibm9uY2Ugb3B0aW9uIGlzIHJlcXVpcmVkXCIsY29uZGl0aW9uOmZ1bmN0aW9uKG8pe3JldHVybi0xPT09by5yZXNwb25zZVR5cGUuaW5kZXhPZihcImNvZGVcIikmJi0xIT09by5yZXNwb25zZVR5cGUuaW5kZXhPZihcImlkX3Rva2VuXCIpfX0sc2NvcGU6e29wdGlvbmFsOiEwLHR5cGU6XCJzdHJpbmdcIixtZXNzYWdlOlwic2NvcGUgb3B0aW9uIGlzIHJlcXVpcmVkXCJ9LGF1ZGllbmNlOntvcHRpb25hbDohMCx0eXBlOlwic3RyaW5nXCIsbWVzc2FnZTpcImF1ZGllbmNlIG9wdGlvbiBpcyByZXF1aXJlZFwifX0pLHRoaXMuYmFzZU9wdGlvbnMuX3NlbmRUZWxlbWV0cnkmJihwYXJhbXMuYXV0aDBDbGllbnQ9dGhpcy5yZXF1ZXN0LmdldFRlbGVtZXRyeURhdGEoKSkscGFyYW1zLmNvbm5lY3Rpb25fc2NvcGUmJmFzc2VydC5pc0FycmF5KHBhcmFtcy5jb25uZWN0aW9uX3Njb3BlKSYmKHBhcmFtcy5jb25uZWN0aW9uX3Njb3BlPXBhcmFtcy5jb25uZWN0aW9uX3Njb3BlLmpvaW4oXCIsXCIpKSxwYXJhbXM9b2JqZWN0SGVscGVyLmJsYWNrbGlzdChwYXJhbXMsW1widXNlcm5hbWVcIixcInBvcHVwT3B0aW9uc1wiLFwiZG9tYWluXCIsXCJ0ZW5hbnRcIixcInRpbWVvdXRcIl0pLHBhcmFtcz1vYmplY3RIZWxwZXIudG9TbmFrZUNhc2UocGFyYW1zLFtcImF1dGgwQ2xpZW50XCJdKSxwYXJhbXM9cGFyYW1ldGVyc1doaXRlbGlzdC5vYXV0aEF1dGhvcml6ZVBhcmFtcyh0aGlzLndhcm4scGFyYW1zKSxxU3RyaW5nPWxpYi5zdHJpbmdpZnkocGFyYW1zKSx1cmxKb2luKHRoaXMuYmFzZU9wdGlvbnMucm9vdFVybCxcImF1dGhvcml6ZVwiLFwiP1wiK3FTdHJpbmcpfSxBdXRoZW50aWNhdGlvbi5wcm90b3R5cGUuYnVpbGRMb2dvdXRVcmw9ZnVuY3Rpb24ob3B0aW9ucyl7dmFyIHBhcmFtcyxxU3RyaW5nO3JldHVybiBhc3NlcnQuY2hlY2sob3B0aW9ucyx7b3B0aW9uYWw6ITAsdHlwZTpcIm9iamVjdFwiLG1lc3NhZ2U6XCJvcHRpb25zIHBhcmFtZXRlciBpcyBub3QgdmFsaWRcIn0pLHBhcmFtcz1vYmplY3RIZWxwZXIubWVyZ2UodGhpcy5iYXNlT3B0aW9ucyxbXCJjbGllbnRJRFwiXSkud2l0aChvcHRpb25zfHx7fSksdGhpcy5iYXNlT3B0aW9ucy5fc2VuZFRlbGVtZXRyeSYmKHBhcmFtcy5hdXRoMENsaWVudD10aGlzLnJlcXVlc3QuZ2V0VGVsZW1ldHJ5RGF0YSgpKSxwYXJhbXM9b2JqZWN0SGVscGVyLnRvU25ha2VDYXNlKHBhcmFtcyxbXCJhdXRoMENsaWVudFwiLFwicmV0dXJuVG9cIl0pLHFTdHJpbmc9bGliLnN0cmluZ2lmeShvYmplY3RIZWxwZXIuYmxhY2tsaXN0KHBhcmFtcyxbXCJmZWRlcmF0ZWRcIl0pKSxvcHRpb25zJiZ2b2lkIDAhPT1vcHRpb25zLmZlZGVyYXRlZCYmITEhPT1vcHRpb25zLmZlZGVyYXRlZCYmXCJmYWxzZVwiIT09b3B0aW9ucy5mZWRlcmF0ZWQmJihxU3RyaW5nKz1cIiZmZWRlcmF0ZWRcIiksdXJsSm9pbih0aGlzLmJhc2VPcHRpb25zLnJvb3RVcmwsXCJ2MlwiLFwibG9nb3V0XCIsXCI/XCIrcVN0cmluZyl9LEF1dGhlbnRpY2F0aW9uLnByb3RvdHlwZS5sb2dpbldpdGhEZWZhdWx0RGlyZWN0b3J5PWZ1bmN0aW9uKG9wdGlvbnMsY2Ipe3JldHVybiBhc3NlcnQuY2hlY2sob3B0aW9ucyx7dHlwZTpcIm9iamVjdFwiLG1lc3NhZ2U6XCJvcHRpb25zIHBhcmFtZXRlciBpcyBub3QgdmFsaWRcIn0se3VzZXJuYW1lOnt0eXBlOlwic3RyaW5nXCIsbWVzc2FnZTpcInVzZXJuYW1lIG9wdGlvbiBpcyByZXF1aXJlZFwifSxwYXNzd29yZDp7dHlwZTpcInN0cmluZ1wiLG1lc3NhZ2U6XCJwYXNzd29yZCBvcHRpb24gaXMgcmVxdWlyZWRcIn0sc2NvcGU6e29wdGlvbmFsOiEwLHR5cGU6XCJzdHJpbmdcIixtZXNzYWdlOlwic2NvcGUgb3B0aW9uIGlzIHJlcXVpcmVkXCJ9LGF1ZGllbmNlOntvcHRpb25hbDohMCx0eXBlOlwic3RyaW5nXCIsbWVzc2FnZTpcImF1ZGllbmNlIG9wdGlvbiBpcyByZXF1aXJlZFwifX0pLG9wdGlvbnMuZ3JhbnRUeXBlPVwicGFzc3dvcmRcIix0aGlzLm9hdXRoVG9rZW4ob3B0aW9ucyxjYil9LEF1dGhlbnRpY2F0aW9uLnByb3RvdHlwZS5sb2dpbj1mdW5jdGlvbihvcHRpb25zLGNiKXtyZXR1cm4gYXNzZXJ0LmNoZWNrKG9wdGlvbnMse3R5cGU6XCJvYmplY3RcIixtZXNzYWdlOlwib3B0aW9ucyBwYXJhbWV0ZXIgaXMgbm90IHZhbGlkXCJ9LHt1c2VybmFtZTp7dHlwZTpcInN0cmluZ1wiLG1lc3NhZ2U6XCJ1c2VybmFtZSBvcHRpb24gaXMgcmVxdWlyZWRcIn0scGFzc3dvcmQ6e3R5cGU6XCJzdHJpbmdcIixtZXNzYWdlOlwicGFzc3dvcmQgb3B0aW9uIGlzIHJlcXVpcmVkXCJ9LHJlYWxtOnt0eXBlOlwic3RyaW5nXCIsbWVzc2FnZTpcInJlYWxtIG9wdGlvbiBpcyByZXF1aXJlZFwifSxzY29wZTp7b3B0aW9uYWw6ITAsdHlwZTpcInN0cmluZ1wiLG1lc3NhZ2U6XCJzY29wZSBvcHRpb24gaXMgcmVxdWlyZWRcIn0sYXVkaWVuY2U6e29wdGlvbmFsOiEwLHR5cGU6XCJzdHJpbmdcIixtZXNzYWdlOlwiYXVkaWVuY2Ugb3B0aW9uIGlzIHJlcXVpcmVkXCJ9fSksb3B0aW9ucy5ncmFudFR5cGU9XCJodHRwOi8vYXV0aDAuY29tL29hdXRoL2dyYW50LXR5cGUvcGFzc3dvcmQtcmVhbG1cIix0aGlzLm9hdXRoVG9rZW4ob3B0aW9ucyxjYil9LEF1dGhlbnRpY2F0aW9uLnByb3RvdHlwZS5vYXV0aFRva2VuPWZ1bmN0aW9uKG9wdGlvbnMsY2Ipe3ZhciB1cmwsYm9keTtyZXR1cm4gYXNzZXJ0LmNoZWNrKG9wdGlvbnMse3R5cGU6XCJvYmplY3RcIixtZXNzYWdlOlwib3B0aW9ucyBwYXJhbWV0ZXIgaXMgbm90IHZhbGlkXCJ9KSxhc3NlcnQuY2hlY2soY2Ise3R5cGU6XCJmdW5jdGlvblwiLG1lc3NhZ2U6XCJjYiBwYXJhbWV0ZXIgaXMgbm90IHZhbGlkXCJ9KSx1cmw9dXJsSm9pbih0aGlzLmJhc2VPcHRpb25zLnJvb3RVcmwsXCJvYXV0aFwiLFwidG9rZW5cIiksYm9keT1vYmplY3RIZWxwZXIubWVyZ2UodGhpcy5iYXNlT3B0aW9ucyxbXCJjbGllbnRJRFwiLFwic2NvcGVcIixcImF1ZGllbmNlXCJdKS53aXRoKG9wdGlvbnMpLGFzc2VydC5jaGVjayhib2R5LHt0eXBlOlwib2JqZWN0XCIsbWVzc2FnZTpcIm9wdGlvbnMgcGFyYW1ldGVyIGlzIG5vdCB2YWxpZFwifSx7Y2xpZW50SUQ6e3R5cGU6XCJzdHJpbmdcIixtZXNzYWdlOlwiY2xpZW50SUQgb3B0aW9uIGlzIHJlcXVpcmVkXCJ9LGdyYW50VHlwZTp7dHlwZTpcInN0cmluZ1wiLG1lc3NhZ2U6XCJncmFudFR5cGUgb3B0aW9uIGlzIHJlcXVpcmVkXCJ9LHNjb3BlOntvcHRpb25hbDohMCx0eXBlOlwic3RyaW5nXCIsbWVzc2FnZTpcInNjb3BlIG9wdGlvbiBpcyByZXF1aXJlZFwifSxhdWRpZW5jZTp7b3B0aW9uYWw6ITAsdHlwZTpcInN0cmluZ1wiLG1lc3NhZ2U6XCJhdWRpZW5jZSBvcHRpb24gaXMgcmVxdWlyZWRcIn19KSxib2R5PW9iamVjdEhlbHBlci50b1NuYWtlQ2FzZShib2R5LFtcImF1dGgwQ2xpZW50XCJdKSxib2R5PXBhcmFtZXRlcnNXaGl0ZWxpc3Qub2F1dGhUb2tlblBhcmFtcyh0aGlzLndhcm4sYm9keSksdGhpcy5yZXF1ZXN0LnBvc3QodXJsKS5zZW5kKGJvZHkpLmVuZCh3cmFwQ2FsbGJhY2soY2IpKX0sQXV0aGVudGljYXRpb24ucHJvdG90eXBlLmxvZ2luV2l0aFJlc291cmNlT3duZXI9ZnVuY3Rpb24ob3B0aW9ucyxjYil7dmFyIHVybCxib2R5O3JldHVybiBhc3NlcnQuY2hlY2sob3B0aW9ucyx7dHlwZTpcIm9iamVjdFwiLG1lc3NhZ2U6XCJvcHRpb25zIHBhcmFtZXRlciBpcyBub3QgdmFsaWRcIn0se3VzZXJuYW1lOnt0eXBlOlwic3RyaW5nXCIsbWVzc2FnZTpcInVzZXJuYW1lIG9wdGlvbiBpcyByZXF1aXJlZFwifSxwYXNzd29yZDp7dHlwZTpcInN0cmluZ1wiLG1lc3NhZ2U6XCJwYXNzd29yZCBvcHRpb24gaXMgcmVxdWlyZWRcIn0sY29ubmVjdGlvbjp7dHlwZTpcInN0cmluZ1wiLG1lc3NhZ2U6XCJjb25uZWN0aW9uIG9wdGlvbiBpcyByZXF1aXJlZFwifSxzY29wZTp7b3B0aW9uYWw6ITAsdHlwZTpcInN0cmluZ1wiLG1lc3NhZ2U6XCJzY29wZSBvcHRpb24gaXMgcmVxdWlyZWRcIn19KSxhc3NlcnQuY2hlY2soY2Ise3R5cGU6XCJmdW5jdGlvblwiLG1lc3NhZ2U6XCJjYiBwYXJhbWV0ZXIgaXMgbm90IHZhbGlkXCJ9KSx1cmw9dXJsSm9pbih0aGlzLmJhc2VPcHRpb25zLnJvb3RVcmwsXCJvYXV0aFwiLFwicm9cIiksYm9keT1vYmplY3RIZWxwZXIubWVyZ2UodGhpcy5iYXNlT3B0aW9ucyxbXCJjbGllbnRJRFwiLFwic2NvcGVcIl0pLndpdGgob3B0aW9ucyxbXCJ1c2VybmFtZVwiLFwicGFzc3dvcmRcIixcInNjb3BlXCIsXCJjb25uZWN0aW9uXCIsXCJkZXZpY2VcIl0pLChib2R5PW9iamVjdEhlbHBlci50b1NuYWtlQ2FzZShib2R5LFtcImF1dGgwQ2xpZW50XCJdKSkuZ3JhbnRfdHlwZT1ib2R5LmdyYW50X3R5cGV8fFwicGFzc3dvcmRcIix0aGlzLnJlcXVlc3QucG9zdCh1cmwpLnNlbmQoYm9keSkuZW5kKHdyYXBDYWxsYmFjayhjYikpfSxBdXRoZW50aWNhdGlvbi5wcm90b3R5cGUuZ2V0U1NPRGF0YT1mdW5jdGlvbih3aXRoQWN0aXZlRGlyZWN0b3JpZXMsY2Ipe2lmKHRoaXMuYXV0aDB8fCh0aGlzLmF1dGgwPW5ldyBXZWJBdXRoKHRoaXMuYmFzZU9wdGlvbnMpKSx3aW5kb3dIYW5kbGVyLmdldFdpbmRvdygpLmxvY2F0aW9uLmhvc3Q9PT10aGlzLmJhc2VPcHRpb25zLmRvbWFpbilyZXR1cm4gdGhpcy5hdXRoMC5fdW5pdmVyc2FsTG9naW4uZ2V0U1NPRGF0YSh3aXRoQWN0aXZlRGlyZWN0b3JpZXMsY2IpO1wiZnVuY3Rpb25cIj09dHlwZW9mIHdpdGhBY3RpdmVEaXJlY3RvcmllcyYmKGNiPXdpdGhBY3RpdmVEaXJlY3RvcmllcyksYXNzZXJ0LmNoZWNrKGNiLHt0eXBlOlwiZnVuY3Rpb25cIixtZXNzYWdlOlwiY2IgcGFyYW1ldGVyIGlzIG5vdCB2YWxpZFwifSk7dmFyIGNsaWVudElkPXRoaXMuYmFzZU9wdGlvbnMuY2xpZW50SUQsc3NvZGF0YUluZm9ybWF0aW9uPXRoaXMuc3NvZGF0YVN0b3JhZ2UuZ2V0KCl8fHt9O3RoaXMuYXV0aDAuY2hlY2tTZXNzaW9uKHtyZXNwb25zZVR5cGU6XCJ0b2tlbiBpZF90b2tlblwiLHNjb3BlOlwib3BlbmlkIHByb2ZpbGUgZW1haWxcIixjb25uZWN0aW9uOnNzb2RhdGFJbmZvcm1hdGlvbi5sYXN0VXNlZENvbm5lY3Rpb24sdGltZW91dDo1ZTN9LGZ1bmN0aW9uKGVycixyZXN1bHQpe3JldHVybiBlcnI/XCJsb2dpbl9yZXF1aXJlZFwiPT09ZXJyLmVycm9yP2NiKG51bGwse3NzbzohMX0pOihcImNvbnNlbnRfcmVxdWlyZWRcIj09PWVyci5lcnJvciYmKGVyci5lcnJvcl9kZXNjcmlwdGlvbj1cIkNvbnNlbnQgcmVxdWlyZWQuIFdoZW4gdXNpbmcgYGdldFNTT0RhdGFgLCB0aGUgdXNlciBoYXMgdG8gYmUgYXV0aGVudGljYXRlZCB3aXRoIHRoZSBmb2xsb3dpbmcgc2NvcGU6IGBvcGVuaWQgcHJvZmlsZSBlbWFpbGAuXCIpLGNiKGVycix7c3NvOiExfSkpOnNzb2RhdGFJbmZvcm1hdGlvbi5sYXN0VXNlZFN1YiYmc3NvZGF0YUluZm9ybWF0aW9uLmxhc3RVc2VkU3ViIT09cmVzdWx0LmlkVG9rZW5QYXlsb2FkLnN1Yj9jYihlcnIse3NzbzohMX0pOmNiKG51bGwse2xhc3RVc2VkQ29ubmVjdGlvbjp7bmFtZTpzc29kYXRhSW5mb3JtYXRpb24ubGFzdFVzZWRDb25uZWN0aW9ufSxsYXN0VXNlZFVzZXJJRDpyZXN1bHQuaWRUb2tlblBheWxvYWQuc3ViLGxhc3RVc2VkVXNlcm5hbWU6cmVzdWx0LmlkVG9rZW5QYXlsb2FkLmVtYWlsfHxyZXN1bHQuaWRUb2tlblBheWxvYWQubmFtZSxsYXN0VXNlZENsaWVudElEOmNsaWVudElkLHNlc3Npb25DbGllbnRzOltjbGllbnRJZF0sc3NvOiEwfSl9KX0sQXV0aGVudGljYXRpb24ucHJvdG90eXBlLnVzZXJJbmZvPWZ1bmN0aW9uKGFjY2Vzc1Rva2VuLGNiKXt2YXIgdXJsO3JldHVybiBhc3NlcnQuY2hlY2soYWNjZXNzVG9rZW4se3R5cGU6XCJzdHJpbmdcIixtZXNzYWdlOlwiYWNjZXNzVG9rZW4gcGFyYW1ldGVyIGlzIG5vdCB2YWxpZFwifSksYXNzZXJ0LmNoZWNrKGNiLHt0eXBlOlwiZnVuY3Rpb25cIixtZXNzYWdlOlwiY2IgcGFyYW1ldGVyIGlzIG5vdCB2YWxpZFwifSksdXJsPXVybEpvaW4odGhpcy5iYXNlT3B0aW9ucy5yb290VXJsLFwidXNlcmluZm9cIiksdGhpcy5yZXF1ZXN0LmdldCh1cmwpLnNldChcIkF1dGhvcml6YXRpb25cIixcIkJlYXJlciBcIithY2Nlc3NUb2tlbikuZW5kKHdyYXBDYWxsYmFjayhjYix7aWdub3JlQ2FzaW5nOiEwfSkpfSxBdXRoZW50aWNhdGlvbi5wcm90b3R5cGUuZGVsZWdhdGlvbj1mdW5jdGlvbihvcHRpb25zLGNiKXt2YXIgdXJsLGJvZHk7cmV0dXJuIGFzc2VydC5jaGVjayhvcHRpb25zLHt0eXBlOlwib2JqZWN0XCIsbWVzc2FnZTpcIm9wdGlvbnMgcGFyYW1ldGVyIGlzIG5vdCB2YWxpZFwifSx7Z3JhbnRfdHlwZTp7dHlwZTpcInN0cmluZ1wiLG1lc3NhZ2U6XCJncmFudF90eXBlIG9wdGlvbiBpcyByZXF1aXJlZFwifX0pLGFzc2VydC5jaGVjayhjYix7dHlwZTpcImZ1bmN0aW9uXCIsbWVzc2FnZTpcImNiIHBhcmFtZXRlciBpcyBub3QgdmFsaWRcIn0pLHVybD11cmxKb2luKHRoaXMuYmFzZU9wdGlvbnMucm9vdFVybCxcImRlbGVnYXRpb25cIiksYm9keT1vYmplY3RIZWxwZXIubWVyZ2UodGhpcy5iYXNlT3B0aW9ucyxbXCJjbGllbnRJRFwiXSkud2l0aChvcHRpb25zKSxib2R5PW9iamVjdEhlbHBlci50b1NuYWtlQ2FzZShib2R5LFtcImF1dGgwQ2xpZW50XCJdKSx0aGlzLnJlcXVlc3QucG9zdCh1cmwpLnNlbmQoYm9keSkuZW5kKHdyYXBDYWxsYmFjayhjYikpfSxBdXRoZW50aWNhdGlvbi5wcm90b3R5cGUuZ2V0VXNlckNvdW50cnk9ZnVuY3Rpb24oY2Ipe3ZhciB1cmw7cmV0dXJuIGFzc2VydC5jaGVjayhjYix7dHlwZTpcImZ1bmN0aW9uXCIsbWVzc2FnZTpcImNiIHBhcmFtZXRlciBpcyBub3QgdmFsaWRcIn0pLHVybD11cmxKb2luKHRoaXMuYmFzZU9wdGlvbnMucm9vdFVybCxcInVzZXJcIixcImdlb2xvY1wiLFwiY291bnRyeVwiKSx0aGlzLnJlcXVlc3QuZ2V0KHVybCkuZW5kKHdyYXBDYWxsYmFjayhjYikpfSxNYW5hZ2VtZW50LnByb3RvdHlwZS5nZXRVc2VyPWZ1bmN0aW9uKHVzZXJJZCxjYil7dmFyIHVybDtyZXR1cm4gYXNzZXJ0LmNoZWNrKHVzZXJJZCx7dHlwZTpcInN0cmluZ1wiLG1lc3NhZ2U6XCJ1c2VySWQgcGFyYW1ldGVyIGlzIG5vdCB2YWxpZFwifSksYXNzZXJ0LmNoZWNrKGNiLHt0eXBlOlwiZnVuY3Rpb25cIixtZXNzYWdlOlwiY2IgcGFyYW1ldGVyIGlzIG5vdCB2YWxpZFwifSksdXJsPXVybEpvaW4odGhpcy5iYXNlT3B0aW9ucy5yb290VXJsLFwidXNlcnNcIix1c2VySWQpLHRoaXMucmVxdWVzdC5nZXQodXJsKS5lbmQod3JhcENhbGxiYWNrKGNiLHtpZ25vcmVDYXNpbmc6ITB9KSl9LE1hbmFnZW1lbnQucHJvdG90eXBlLnBhdGNoVXNlck1ldGFkYXRhPWZ1bmN0aW9uKHVzZXJJZCx1c2VyTWV0YWRhdGEsY2Ipe3ZhciB1cmw7cmV0dXJuIGFzc2VydC5jaGVjayh1c2VySWQse3R5cGU6XCJzdHJpbmdcIixtZXNzYWdlOlwidXNlcklkIHBhcmFtZXRlciBpcyBub3QgdmFsaWRcIn0pLGFzc2VydC5jaGVjayh1c2VyTWV0YWRhdGEse3R5cGU6XCJvYmplY3RcIixtZXNzYWdlOlwidXNlck1ldGFkYXRhIHBhcmFtZXRlciBpcyBub3QgdmFsaWRcIn0pLGFzc2VydC5jaGVjayhjYix7dHlwZTpcImZ1bmN0aW9uXCIsbWVzc2FnZTpcImNiIHBhcmFtZXRlciBpcyBub3QgdmFsaWRcIn0pLHVybD11cmxKb2luKHRoaXMuYmFzZU9wdGlvbnMucm9vdFVybCxcInVzZXJzXCIsdXNlcklkKSx0aGlzLnJlcXVlc3QucGF0Y2godXJsKS5zZW5kKHt1c2VyX21ldGFkYXRhOnVzZXJNZXRhZGF0YX0pLmVuZCh3cmFwQ2FsbGJhY2soY2Ise2lnbm9yZUNhc2luZzohMH0pKX0sTWFuYWdlbWVudC5wcm90b3R5cGUubGlua1VzZXI9ZnVuY3Rpb24odXNlcklkLHNlY29uZGFyeVVzZXJUb2tlbixjYil7dmFyIHVybDtyZXR1cm4gYXNzZXJ0LmNoZWNrKHVzZXJJZCx7dHlwZTpcInN0cmluZ1wiLG1lc3NhZ2U6XCJ1c2VySWQgcGFyYW1ldGVyIGlzIG5vdCB2YWxpZFwifSksYXNzZXJ0LmNoZWNrKHNlY29uZGFyeVVzZXJUb2tlbix7dHlwZTpcInN0cmluZ1wiLG1lc3NhZ2U6XCJzZWNvbmRhcnlVc2VyVG9rZW4gcGFyYW1ldGVyIGlzIG5vdCB2YWxpZFwifSksYXNzZXJ0LmNoZWNrKGNiLHt0eXBlOlwiZnVuY3Rpb25cIixtZXNzYWdlOlwiY2IgcGFyYW1ldGVyIGlzIG5vdCB2YWxpZFwifSksdXJsPXVybEpvaW4odGhpcy5iYXNlT3B0aW9ucy5yb290VXJsLFwidXNlcnNcIix1c2VySWQsXCJpZGVudGl0aWVzXCIpLHRoaXMucmVxdWVzdC5wb3N0KHVybCkuc2VuZCh7bGlua193aXRoOnNlY29uZGFyeVVzZXJUb2tlbn0pLmVuZCh3cmFwQ2FsbGJhY2soY2Ise2lnbm9yZUNhc2luZzohMH0pKX07dmFyIGluZGV4PXtBdXRoZW50aWNhdGlvbjpBdXRoZW50aWNhdGlvbixNYW5hZ2VtZW50Ok1hbmFnZW1lbnQsV2ViQXV0aDpXZWJBdXRoLHZlcnNpb246dmVyc2lvbn07ZXhwb3J0IGRlZmF1bHQgaW5kZXg7ZXhwb3J0e0F1dGhlbnRpY2F0aW9uLE1hbmFnZW1lbnQsV2ViQXV0aCx2ZXJzaW9ufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWF1dGgwLm1pbi5lc20uanMubWFwXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1SdWJpa3xSb2JvdG8pO1wiLCBcIlwiXSk7XG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogaW5kZXguY3NzICovXFxuXFxuYm9keSxcXG5odG1sIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ubW91c2UtcG9pbnRlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI291dGVyLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4jYXBwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcXG4gICAgZm9udC1mYW1pbHk6ICdSdWJpaycsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5BcHAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubmF2LWJhciB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gICAgYmFja2dyb3VuZDogIzM5MzkzZjtcXG4gICAgcGFkZGluZzogMTBweCAwIDEwcHggMDtcXG4gICAgbWF4LWhlaWdodDogMzFweDtcXG59XFxuXFxuLm1haW4tc3RhZ2Uge1xcbiAgICBmbGV4OiAxMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMWVtO1xcbn1cXG5cXG4ubmF2LWJ1dHRvbiB7XFxuICAgIGNvbG9yOiAjMDBjZjMwO1xcbiAgICBmb250LXNpemU6IDEuN3JlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xcbn1cXG5cXG4ubmF2LWJhci10aXRsZS1vdXRlciB7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5uYXYtYmFyLXRpdGxlIHtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLm5hdi1iYXItaWNvbiB7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLnN0YWdlLWJhbm5lciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWFyZ2luOiAwLjVlbTtcXG59XFxuXFxuLnN0YWdlLWJhbm5lciBzdmcge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGNvbG9yOiByZ2IoNzUsIDc1LCA3NSk7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB0b3A6IDQ3JTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgICBmb250LXNpemU6IDEyMCU7XFxufVxcblxcbi5zdGFnZS10aXRsZSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMWVtIDA7XFxuICAgIG1hcmdpbjogMC41ZW07XFxuICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDIxMCU7XFxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XFxufVxcblxcbi5jYXJkLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbi5jb25mZXJlbmNlLWNhcmQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmc6IDAuNWVtO1xcbiAgICBtYXJnaW46IDAuNWVtO1xcbiAgICBmb250LXNpemU6IDEwMCU7XFxuICAgIGJhY2tncm91bmQ6IHJnYigyNDUsIDI0NSwgMjQ1KTtcXG59XFxuXFxuLmNvbmZlcmVuY2UtZmllbGRzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uY29uZmVyZW5jZS1maWVsZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbjogMC41ZW07XFxuICAgIGZvbnQtc2l6ZTogMTAwJTtcXG59XFxuXFxuLnVpLWJ1dHRvbiB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMC43NzVyZW0gMC43NXJlbTtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcXG4gICAgXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgY29sb3I6ICMyMTI1Mjk7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnVpLWJ1dHRvbi1zdWNjZXNzIHtcXG4gICAgY29sb3I6ICMyOGE3NDU7XFxuICAgIGJvcmRlci1jb2xvcjogIzI4YTc0NTtcXG4gIH1cXG4gIFxcbi51aS1idXR0b24tc3VjY2Vzczpob3ZlciB7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhhNzQ1O1xcbiAgICBib3JkZXItY29sb3I6ICMyOGE3NDU7XFxufVxcbiAgXFxuLnVpLWJ1dHRvbi1zdWNjZXNzOmZvY3VzLCAudWktYnV0dG9uLXN1Y2Nlc3MuZm9jdXMge1xcbmJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDQwLCAxNjcsIDY5LCAwLjUpO1xcbn1cXG5cXG4udWktYnV0dG9uLXN1Y2Nlc3MuZGlzYWJsZWQsIC51aS1idXR0b24tc3VjY2VzczpkaXNhYmxlZCB7XFxuY29sb3I6ICMyOGE3NDU7XFxuYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi51aS1idXR0b24tc3VjY2Vzczpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmUsIC51aS1idXR0b24tc3VjY2Vzczpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKS5hY3RpdmUsXFxuLnNob3cgPiAudWktYnV0dG9uLXN1Y2Nlc3MuZHJvcGRvd24tdG9nZ2xlIHtcXG5jb2xvcjogI2ZmZjtcXG5iYWNrZ3JvdW5kLWNvbG9yOiAjMjhhNzQ1O1xcbmJvcmRlci1jb2xvcjogIzI4YTc0NTtcXG59XFxuXFxuLnVpLWJ1dHRvbi1zdWNjZXNzOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZTpmb2N1cywgLnVpLWJ1dHRvbi1zdWNjZXNzOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZTpmb2N1cyxcXG4uc2hvdyA+IC51aS1idXR0b24tc3VjY2Vzcy5kcm9wZG93bi10b2dnbGU6Zm9jdXMge1xcbmJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDQwLCAxNjcsIDY5LCAwLjUpO1xcbn1cXG5cXG4udWktYnV0dG9uLXNwYW4ge1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi53ZWxjb21lVmlld091dGVyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubG9naW4tYnV0dG9uLW91dGVyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ubG9naW4tYnV0dG9uIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlciAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubG9nb3V0LWJ1dHRvbiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAtNDhweDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuXFxuLmxvZ291dC1idXR0b24tY29sb3Ige1xcbiAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xcbn1cXG5cXG4jZW50cnktZm9ybSB7XFxuICAgIG1hcmdpbjogMCAwIDAuNWVtIDIwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGNvbG9yOiByZ2IoOTAsIDkwLCA5MCk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4jZW50cnktZm9ybSBsYWJlbCB7XFxuICAgIHBhZGRpbmc6IDFlbSAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI2VudHJ5LWZvcm0gaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXG4gICAgbWFyZ2luOiAwIDAgMC41ZW0gMDtcXG4gICAgcGFkZGluZzogMC43NWVtO1xcbiAgICB3aWR0aDogOTElO1xcbiAgICBtYXgtd2lkdGg6IDcwMHB4O1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbi5mb3JtLW91dGVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1heC13aWR0aDogNzAwcHg7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4uZm9ybS1xdWVzdGlvbiB7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLmZvcm0tcXVlc3Rpb24gbGFiZWwge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcXG59XFxuXFxuLmFwcC1kZXNjcmlwdGlvbiB7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5mb290ZXJPdXRlciB7XFxuICAgIGhlaWdodDogODBweDtcXG59XFxuXFxuLm1haW4tZm9vdGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzEzMTMxO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4ubWFpbi1mb290ZXIgYSB7XFxuICAgIGNvbG9yOiAjZmFmYWZhICFpbXBvcnRhbnQ7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLm1haW4tZm9vdGVyIGE6aG92ZXIge1xcbiAgICBjb2xvcjogI2RhZGFkYSAhaW1wb3J0YW50O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih1c2VTb3VyY2VNYXApIHtcblx0dmFyIGxpc3QgPSBbXTtcblxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXHRcdFx0aWYoaXRlbVsyXSkge1xuXHRcdFx0XHRyZXR1cm4gXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBjb250ZW50ICsgXCJ9XCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHRcdH1cblx0XHR9KS5qb2luKFwiXCIpO1xuXHR9O1xuXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG5cdFx0fVxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0cmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG5cdHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblx0aWYgKCFjc3NNYXBwaW5nKSB7XG5cdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdH1cblxuXHRpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0dmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG5cdFx0dmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcblx0XHRcdHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLydcblx0XHR9KTtcblxuXHRcdHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuXHR9XG5cblx0cmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn1cblxuLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcblx0dmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG5cdHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG5cblx0cmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn1cbiIsIjsoZnVuY3Rpb24oKSB7XG5cInVzZSBzdHJpY3RcIlxuZnVuY3Rpb24gVm5vZGUodGFnLCBrZXksIGF0dHJzMCwgY2hpbGRyZW4sIHRleHQsIGRvbSkge1xuXHRyZXR1cm4ge3RhZzogdGFnLCBrZXk6IGtleSwgYXR0cnM6IGF0dHJzMCwgY2hpbGRyZW46IGNoaWxkcmVuLCB0ZXh0OiB0ZXh0LCBkb206IGRvbSwgZG9tU2l6ZTogdW5kZWZpbmVkLCBzdGF0ZTogdW5kZWZpbmVkLCBfc3RhdGU6IHVuZGVmaW5lZCwgZXZlbnRzOiB1bmRlZmluZWQsIGluc3RhbmNlOiB1bmRlZmluZWQsIHNraXA6IGZhbHNlfVxufVxuVm5vZGUubm9ybWFsaXplID0gZnVuY3Rpb24obm9kZSkge1xuXHRpZiAoQXJyYXkuaXNBcnJheShub2RlKSkgcmV0dXJuIFZub2RlKFwiW1wiLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgVm5vZGUubm9ybWFsaXplQ2hpbGRyZW4obm9kZSksIHVuZGVmaW5lZCwgdW5kZWZpbmVkKVxuXHRpZiAobm9kZSAhPSBudWxsICYmIHR5cGVvZiBub2RlICE9PSBcIm9iamVjdFwiKSByZXR1cm4gVm5vZGUoXCIjXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBub2RlID09PSBmYWxzZSA/IFwiXCIgOiBub2RlLCB1bmRlZmluZWQsIHVuZGVmaW5lZClcblx0cmV0dXJuIG5vZGVcbn1cblZub2RlLm5vcm1hbGl6ZUNoaWxkcmVuID0gZnVuY3Rpb24gbm9ybWFsaXplQ2hpbGRyZW4oY2hpbGRyZW4pIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuXHRcdGNoaWxkcmVuW2ldID0gVm5vZGUubm9ybWFsaXplKGNoaWxkcmVuW2ldKVxuXHR9XG5cdHJldHVybiBjaGlsZHJlblxufVxudmFyIHNlbGVjdG9yUGFyc2VyID0gLyg/OihefCN8XFwuKShbXiNcXC5cXFtcXF1dKykpfChcXFsoLis/KSg/Olxccyo9XFxzKihcInwnfCkoKD86XFxcXFtcIidcXF1dfC4pKj8pXFw1KT9cXF0pL2dcbnZhciBzZWxlY3RvckNhY2hlID0ge31cbnZhciBoYXNPd24gPSB7fS5oYXNPd25Qcm9wZXJ0eVxuZnVuY3Rpb24gaXNFbXB0eShvYmplY3QpIHtcblx0Zm9yICh2YXIga2V5IGluIG9iamVjdCkgaWYgKGhhc093bi5jYWxsKG9iamVjdCwga2V5KSkgcmV0dXJuIGZhbHNlXG5cdHJldHVybiB0cnVlXG59XG5mdW5jdGlvbiBjb21waWxlU2VsZWN0b3Ioc2VsZWN0b3IpIHtcblx0dmFyIG1hdGNoLCB0YWcgPSBcImRpdlwiLCBjbGFzc2VzID0gW10sIGF0dHJzID0ge31cblx0d2hpbGUgKG1hdGNoID0gc2VsZWN0b3JQYXJzZXIuZXhlYyhzZWxlY3RvcikpIHtcblx0XHR2YXIgdHlwZSA9IG1hdGNoWzFdLCB2YWx1ZSA9IG1hdGNoWzJdXG5cdFx0aWYgKHR5cGUgPT09IFwiXCIgJiYgdmFsdWUgIT09IFwiXCIpIHRhZyA9IHZhbHVlXG5cdFx0ZWxzZSBpZiAodHlwZSA9PT0gXCIjXCIpIGF0dHJzLmlkID0gdmFsdWVcblx0XHRlbHNlIGlmICh0eXBlID09PSBcIi5cIikgY2xhc3Nlcy5wdXNoKHZhbHVlKVxuXHRcdGVsc2UgaWYgKG1hdGNoWzNdWzBdID09PSBcIltcIikge1xuXHRcdFx0dmFyIGF0dHJWYWx1ZSA9IG1hdGNoWzZdXG5cdFx0XHRpZiAoYXR0clZhbHVlKSBhdHRyVmFsdWUgPSBhdHRyVmFsdWUucmVwbGFjZSgvXFxcXChbXCInXSkvZywgXCIkMVwiKS5yZXBsYWNlKC9cXFxcXFxcXC9nLCBcIlxcXFxcIilcblx0XHRcdGlmIChtYXRjaFs0XSA9PT0gXCJjbGFzc1wiKSBjbGFzc2VzLnB1c2goYXR0clZhbHVlKVxuXHRcdFx0ZWxzZSBhdHRyc1ttYXRjaFs0XV0gPSBhdHRyVmFsdWUgPT09IFwiXCIgPyBhdHRyVmFsdWUgOiBhdHRyVmFsdWUgfHwgdHJ1ZVxuXHRcdH1cblx0fVxuXHRpZiAoY2xhc3Nlcy5sZW5ndGggPiAwKSBhdHRycy5jbGFzc05hbWUgPSBjbGFzc2VzLmpvaW4oXCIgXCIpXG5cdHJldHVybiBzZWxlY3RvckNhY2hlW3NlbGVjdG9yXSA9IHt0YWc6IHRhZywgYXR0cnM6IGF0dHJzfVxufVxuZnVuY3Rpb24gZXhlY1NlbGVjdG9yKHN0YXRlLCBhdHRycywgY2hpbGRyZW4pIHtcblx0dmFyIGhhc0F0dHJzID0gZmFsc2UsIGNoaWxkTGlzdCwgdGV4dFxuXHR2YXIgY2xhc3NOYW1lID0gYXR0cnMuY2xhc3NOYW1lIHx8IGF0dHJzLmNsYXNzXG5cdGlmICghaXNFbXB0eShzdGF0ZS5hdHRycykgJiYgIWlzRW1wdHkoYXR0cnMpKSB7XG5cdFx0dmFyIG5ld0F0dHJzID0ge31cblx0XHRmb3IodmFyIGtleSBpbiBhdHRycykge1xuXHRcdFx0aWYgKGhhc093bi5jYWxsKGF0dHJzLCBrZXkpKSB7XG5cdFx0XHRcdG5ld0F0dHJzW2tleV0gPSBhdHRyc1trZXldXG5cdFx0XHR9XG5cdFx0fVxuXHRcdGF0dHJzID0gbmV3QXR0cnNcblx0fVxuXHRmb3IgKHZhciBrZXkgaW4gc3RhdGUuYXR0cnMpIHtcblx0XHRpZiAoaGFzT3duLmNhbGwoc3RhdGUuYXR0cnMsIGtleSkpIHtcblx0XHRcdGF0dHJzW2tleV0gPSBzdGF0ZS5hdHRyc1trZXldXG5cdFx0fVxuXHR9XG5cdGlmIChjbGFzc05hbWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdGlmIChhdHRycy5jbGFzcyAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRhdHRycy5jbGFzcyA9IHVuZGVmaW5lZFxuXHRcdFx0YXR0cnMuY2xhc3NOYW1lID0gY2xhc3NOYW1lXG5cdFx0fVxuXHRcdGlmIChzdGF0ZS5hdHRycy5jbGFzc05hbWUgIT0gbnVsbCkge1xuXHRcdFx0YXR0cnMuY2xhc3NOYW1lID0gc3RhdGUuYXR0cnMuY2xhc3NOYW1lICsgXCIgXCIgKyBjbGFzc05hbWVcblx0XHR9XG5cdH1cblx0Zm9yICh2YXIga2V5IGluIGF0dHJzKSB7XG5cdFx0aWYgKGhhc093bi5jYWxsKGF0dHJzLCBrZXkpICYmIGtleSAhPT0gXCJrZXlcIikge1xuXHRcdFx0aGFzQXR0cnMgPSB0cnVlXG5cdFx0XHRicmVha1xuXHRcdH1cblx0fVxuXHRpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikgJiYgY2hpbGRyZW4ubGVuZ3RoID09PSAxICYmIGNoaWxkcmVuWzBdICE9IG51bGwgJiYgY2hpbGRyZW5bMF0udGFnID09PSBcIiNcIikge1xuXHRcdHRleHQgPSBjaGlsZHJlblswXS5jaGlsZHJlblxuXHR9IGVsc2Uge1xuXHRcdGNoaWxkTGlzdCA9IGNoaWxkcmVuXG5cdH1cblx0cmV0dXJuIFZub2RlKHN0YXRlLnRhZywgYXR0cnMua2V5LCBoYXNBdHRycyA/IGF0dHJzIDogdW5kZWZpbmVkLCBjaGlsZExpc3QsIHRleHQpXG59XG5mdW5jdGlvbiBoeXBlcnNjcmlwdChzZWxlY3Rvcikge1xuXHQvLyBCZWNhdXNlIHNsb3BweSBtb2RlIHN1Y2tzXG5cdHZhciBhdHRycyA9IGFyZ3VtZW50c1sxXSwgc3RhcnQgPSAyLCBjaGlsZHJlblxuXHRpZiAoc2VsZWN0b3IgPT0gbnVsbCB8fCB0eXBlb2Ygc2VsZWN0b3IgIT09IFwic3RyaW5nXCIgJiYgdHlwZW9mIHNlbGVjdG9yICE9PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIHNlbGVjdG9yLnZpZXcgIT09IFwiZnVuY3Rpb25cIikge1xuXHRcdHRocm93IEVycm9yKFwiVGhlIHNlbGVjdG9yIG11c3QgYmUgZWl0aGVyIGEgc3RyaW5nIG9yIGEgY29tcG9uZW50LlwiKTtcblx0fVxuXHRpZiAodHlwZW9mIHNlbGVjdG9yID09PSBcInN0cmluZ1wiKSB7XG5cdFx0dmFyIGNhY2hlZCA9IHNlbGVjdG9yQ2FjaGVbc2VsZWN0b3JdIHx8IGNvbXBpbGVTZWxlY3RvcihzZWxlY3Rvcilcblx0fVxuXHRpZiAoYXR0cnMgPT0gbnVsbCkge1xuXHRcdGF0dHJzID0ge31cblx0fSBlbHNlIGlmICh0eXBlb2YgYXR0cnMgIT09IFwib2JqZWN0XCIgfHwgYXR0cnMudGFnICE9IG51bGwgfHwgQXJyYXkuaXNBcnJheShhdHRycykpIHtcblx0XHRhdHRycyA9IHt9XG5cdFx0c3RhcnQgPSAxXG5cdH1cblx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IHN0YXJ0ICsgMSkge1xuXHRcdGNoaWxkcmVuID0gYXJndW1lbnRzW3N0YXJ0XVxuXHRcdGlmICghQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIGNoaWxkcmVuID0gW2NoaWxkcmVuXVxuXHR9IGVsc2Uge1xuXHRcdGNoaWxkcmVuID0gW11cblx0XHR3aGlsZSAoc3RhcnQgPCBhcmd1bWVudHMubGVuZ3RoKSBjaGlsZHJlbi5wdXNoKGFyZ3VtZW50c1tzdGFydCsrXSlcblx0fVxuXHR2YXIgbm9ybWFsaXplZCA9IFZub2RlLm5vcm1hbGl6ZUNoaWxkcmVuKGNoaWxkcmVuKVxuXHRpZiAodHlwZW9mIHNlbGVjdG9yID09PSBcInN0cmluZ1wiKSB7XG5cdFx0cmV0dXJuIGV4ZWNTZWxlY3RvcihjYWNoZWQsIGF0dHJzLCBub3JtYWxpemVkKVxuXHR9IGVsc2Uge1xuXHRcdHJldHVybiBWbm9kZShzZWxlY3RvciwgYXR0cnMua2V5LCBhdHRycywgbm9ybWFsaXplZClcblx0fVxufVxuaHlwZXJzY3JpcHQudHJ1c3QgPSBmdW5jdGlvbihodG1sKSB7XG5cdGlmIChodG1sID09IG51bGwpIGh0bWwgPSBcIlwiXG5cdHJldHVybiBWbm9kZShcIjxcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIGh0bWwsIHVuZGVmaW5lZCwgdW5kZWZpbmVkKVxufVxuaHlwZXJzY3JpcHQuZnJhZ21lbnQgPSBmdW5jdGlvbihhdHRyczEsIGNoaWxkcmVuKSB7XG5cdHJldHVybiBWbm9kZShcIltcIiwgYXR0cnMxLmtleSwgYXR0cnMxLCBWbm9kZS5ub3JtYWxpemVDaGlsZHJlbihjaGlsZHJlbiksIHVuZGVmaW5lZCwgdW5kZWZpbmVkKVxufVxudmFyIG0gPSBoeXBlcnNjcmlwdFxuLyoqIEBjb25zdHJ1Y3RvciAqL1xudmFyIFByb21pc2VQb2x5ZmlsbCA9IGZ1bmN0aW9uKGV4ZWN1dG9yKSB7XG5cdGlmICghKHRoaXMgaW5zdGFuY2VvZiBQcm9taXNlUG9seWZpbGwpKSB0aHJvdyBuZXcgRXJyb3IoXCJQcm9taXNlIG11c3QgYmUgY2FsbGVkIHdpdGggYG5ld2BcIilcblx0aWYgKHR5cGVvZiBleGVjdXRvciAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiZXhlY3V0b3IgbXVzdCBiZSBhIGZ1bmN0aW9uXCIpXG5cdHZhciBzZWxmID0gdGhpcywgcmVzb2x2ZXJzID0gW10sIHJlamVjdG9ycyA9IFtdLCByZXNvbHZlQ3VycmVudCA9IGhhbmRsZXIocmVzb2x2ZXJzLCB0cnVlKSwgcmVqZWN0Q3VycmVudCA9IGhhbmRsZXIocmVqZWN0b3JzLCBmYWxzZSlcblx0dmFyIGluc3RhbmNlID0gc2VsZi5faW5zdGFuY2UgPSB7cmVzb2x2ZXJzOiByZXNvbHZlcnMsIHJlamVjdG9yczogcmVqZWN0b3JzfVxuXHR2YXIgY2FsbEFzeW5jID0gdHlwZW9mIHNldEltbWVkaWF0ZSA9PT0gXCJmdW5jdGlvblwiID8gc2V0SW1tZWRpYXRlIDogc2V0VGltZW91dFxuXHRmdW5jdGlvbiBoYW5kbGVyKGxpc3QsIHNob3VsZEFic29yYikge1xuXHRcdHJldHVybiBmdW5jdGlvbiBleGVjdXRlKHZhbHVlKSB7XG5cdFx0XHR2YXIgdGhlblxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0aWYgKHNob3VsZEFic29yYiAmJiB2YWx1ZSAhPSBudWxsICYmICh0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIpICYmIHR5cGVvZiAodGhlbiA9IHZhbHVlLnRoZW4pID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0XHRpZiAodmFsdWUgPT09IHNlbGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcm9taXNlIGNhbid0IGJlIHJlc29sdmVkIHcvIGl0c2VsZlwiKVxuXHRcdFx0XHRcdGV4ZWN1dGVPbmNlKHRoZW4uYmluZCh2YWx1ZSkpXG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0Y2FsbEFzeW5jKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0aWYgKCFzaG91bGRBYnNvcmIgJiYgbGlzdC5sZW5ndGggPT09IDApIGNvbnNvbGUuZXJyb3IoXCJQb3NzaWJsZSB1bmhhbmRsZWQgcHJvbWlzZSByZWplY3Rpb246XCIsIHZhbHVlKVxuXHRcdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSBsaXN0W2ldKHZhbHVlKVxuXHRcdFx0XHRcdFx0cmVzb2x2ZXJzLmxlbmd0aCA9IDAsIHJlamVjdG9ycy5sZW5ndGggPSAwXG5cdFx0XHRcdFx0XHRpbnN0YW5jZS5zdGF0ZSA9IHNob3VsZEFic29yYlxuXHRcdFx0XHRcdFx0aW5zdGFuY2UucmV0cnkgPSBmdW5jdGlvbigpIHtleGVjdXRlKHZhbHVlKX1cblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRjYXRjaCAoZSkge1xuXHRcdFx0XHRyZWplY3RDdXJyZW50KGUpXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIGV4ZWN1dGVPbmNlKHRoZW4pIHtcblx0XHR2YXIgcnVucyA9IDBcblx0XHRmdW5jdGlvbiBydW4oZm4pIHtcblx0XHRcdHJldHVybiBmdW5jdGlvbih2YWx1ZSkge1xuXHRcdFx0XHRpZiAocnVucysrID4gMCkgcmV0dXJuXG5cdFx0XHRcdGZuKHZhbHVlKVxuXHRcdFx0fVxuXHRcdH1cblx0XHR2YXIgb25lcnJvciA9IHJ1bihyZWplY3RDdXJyZW50KVxuXHRcdHRyeSB7dGhlbihydW4ocmVzb2x2ZUN1cnJlbnQpLCBvbmVycm9yKX0gY2F0Y2ggKGUpIHtvbmVycm9yKGUpfVxuXHR9XG5cdGV4ZWN1dGVPbmNlKGV4ZWN1dG9yKVxufVxuUHJvbWlzZVBvbHlmaWxsLnByb3RvdHlwZS50aGVuID0gZnVuY3Rpb24ob25GdWxmaWxsZWQsIG9uUmVqZWN0aW9uKSB7XG5cdHZhciBzZWxmID0gdGhpcywgaW5zdGFuY2UgPSBzZWxmLl9pbnN0YW5jZVxuXHRmdW5jdGlvbiBoYW5kbGUoY2FsbGJhY2ssIGxpc3QsIG5leHQsIHN0YXRlKSB7XG5cdFx0bGlzdC5wdXNoKGZ1bmN0aW9uKHZhbHVlKSB7XG5cdFx0XHRpZiAodHlwZW9mIGNhbGxiYWNrICE9PSBcImZ1bmN0aW9uXCIpIG5leHQodmFsdWUpXG5cdFx0XHRlbHNlIHRyeSB7cmVzb2x2ZU5leHQoY2FsbGJhY2sodmFsdWUpKX0gY2F0Y2ggKGUpIHtpZiAocmVqZWN0TmV4dCkgcmVqZWN0TmV4dChlKX1cblx0XHR9KVxuXHRcdGlmICh0eXBlb2YgaW5zdGFuY2UucmV0cnkgPT09IFwiZnVuY3Rpb25cIiAmJiBzdGF0ZSA9PT0gaW5zdGFuY2Uuc3RhdGUpIGluc3RhbmNlLnJldHJ5KClcblx0fVxuXHR2YXIgcmVzb2x2ZU5leHQsIHJlamVjdE5leHRcblx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZVBvbHlmaWxsKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge3Jlc29sdmVOZXh0ID0gcmVzb2x2ZSwgcmVqZWN0TmV4dCA9IHJlamVjdH0pXG5cdGhhbmRsZShvbkZ1bGZpbGxlZCwgaW5zdGFuY2UucmVzb2x2ZXJzLCByZXNvbHZlTmV4dCwgdHJ1ZSksIGhhbmRsZShvblJlamVjdGlvbiwgaW5zdGFuY2UucmVqZWN0b3JzLCByZWplY3ROZXh0LCBmYWxzZSlcblx0cmV0dXJuIHByb21pc2Vcbn1cblByb21pc2VQb2x5ZmlsbC5wcm90b3R5cGUuY2F0Y2ggPSBmdW5jdGlvbihvblJlamVjdGlvbikge1xuXHRyZXR1cm4gdGhpcy50aGVuKG51bGwsIG9uUmVqZWN0aW9uKVxufVxuUHJvbWlzZVBvbHlmaWxsLnJlc29sdmUgPSBmdW5jdGlvbih2YWx1ZSkge1xuXHRpZiAodmFsdWUgaW5zdGFuY2VvZiBQcm9taXNlUG9seWZpbGwpIHJldHVybiB2YWx1ZVxuXHRyZXR1cm4gbmV3IFByb21pc2VQb2x5ZmlsbChmdW5jdGlvbihyZXNvbHZlKSB7cmVzb2x2ZSh2YWx1ZSl9KVxufVxuUHJvbWlzZVBvbHlmaWxsLnJlamVjdCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG5cdHJldHVybiBuZXcgUHJvbWlzZVBvbHlmaWxsKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge3JlamVjdCh2YWx1ZSl9KVxufVxuUHJvbWlzZVBvbHlmaWxsLmFsbCA9IGZ1bmN0aW9uKGxpc3QpIHtcblx0cmV0dXJuIG5ldyBQcm9taXNlUG9seWZpbGwoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0dmFyIHRvdGFsID0gbGlzdC5sZW5ndGgsIGNvdW50ID0gMCwgdmFsdWVzID0gW11cblx0XHRpZiAobGlzdC5sZW5ndGggPT09IDApIHJlc29sdmUoW10pXG5cdFx0ZWxzZSBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHRcdChmdW5jdGlvbihpKSB7XG5cdFx0XHRcdGZ1bmN0aW9uIGNvbnN1bWUodmFsdWUpIHtcblx0XHRcdFx0XHRjb3VudCsrXG5cdFx0XHRcdFx0dmFsdWVzW2ldID0gdmFsdWVcblx0XHRcdFx0XHRpZiAoY291bnQgPT09IHRvdGFsKSByZXNvbHZlKHZhbHVlcylcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAobGlzdFtpXSAhPSBudWxsICYmICh0eXBlb2YgbGlzdFtpXSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgbGlzdFtpXSA9PT0gXCJmdW5jdGlvblwiKSAmJiB0eXBlb2YgbGlzdFtpXS50aGVuID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0XHRsaXN0W2ldLnRoZW4oY29uc3VtZSwgcmVqZWN0KVxuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2UgY29uc3VtZShsaXN0W2ldKVxuXHRcdFx0fSkoaSlcblx0XHR9XG5cdH0pXG59XG5Qcm9taXNlUG9seWZpbGwucmFjZSA9IGZ1bmN0aW9uKGxpc3QpIHtcblx0cmV0dXJuIG5ldyBQcm9taXNlUG9seWZpbGwoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRsaXN0W2ldLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KVxuXHRcdH1cblx0fSlcbn1cbmlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG5cdGlmICh0eXBlb2Ygd2luZG93LlByb21pc2UgPT09IFwidW5kZWZpbmVkXCIpIHdpbmRvdy5Qcm9taXNlID0gUHJvbWlzZVBvbHlmaWxsXG5cdHZhciBQcm9taXNlUG9seWZpbGwgPSB3aW5kb3cuUHJvbWlzZVxufSBlbHNlIGlmICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsLlByb21pc2UgPT09IFwidW5kZWZpbmVkXCIpIGdsb2JhbC5Qcm9taXNlID0gUHJvbWlzZVBvbHlmaWxsXG5cdHZhciBQcm9taXNlUG9seWZpbGwgPSBnbG9iYWwuUHJvbWlzZVxufSBlbHNlIHtcbn1cbnZhciBidWlsZFF1ZXJ5U3RyaW5nID0gZnVuY3Rpb24ob2JqZWN0KSB7XG5cdGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqZWN0KSAhPT0gXCJbb2JqZWN0IE9iamVjdF1cIikgcmV0dXJuIFwiXCJcblx0dmFyIGFyZ3MgPSBbXVxuXHRmb3IgKHZhciBrZXkwIGluIG9iamVjdCkge1xuXHRcdGRlc3RydWN0dXJlKGtleTAsIG9iamVjdFtrZXkwXSlcblx0fVxuXHRyZXR1cm4gYXJncy5qb2luKFwiJlwiKVxuXHRmdW5jdGlvbiBkZXN0cnVjdHVyZShrZXkwLCB2YWx1ZSkge1xuXHRcdGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRkZXN0cnVjdHVyZShrZXkwICsgXCJbXCIgKyBpICsgXCJdXCIsIHZhbHVlW2ldKVxuXHRcdFx0fVxuXHRcdH1cblx0XHRlbHNlIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSBcIltvYmplY3QgT2JqZWN0XVwiKSB7XG5cdFx0XHRmb3IgKHZhciBpIGluIHZhbHVlKSB7XG5cdFx0XHRcdGRlc3RydWN0dXJlKGtleTAgKyBcIltcIiArIGkgKyBcIl1cIiwgdmFsdWVbaV0pXG5cdFx0XHR9XG5cdFx0fVxuXHRcdGVsc2UgYXJncy5wdXNoKGVuY29kZVVSSUNvbXBvbmVudChrZXkwKSArICh2YWx1ZSAhPSBudWxsICYmIHZhbHVlICE9PSBcIlwiID8gXCI9XCIgKyBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpIDogXCJcIikpXG5cdH1cbn1cbnZhciBGSUxFX1BST1RPQ09MX1JFR0VYID0gbmV3IFJlZ0V4cChcIl5maWxlOi8vXCIsIFwiaVwiKVxudmFyIF84ID0gZnVuY3Rpb24oJHdpbmRvdywgUHJvbWlzZSkge1xuXHR2YXIgY2FsbGJhY2tDb3VudCA9IDBcblx0dmFyIG9uY29tcGxldGlvblxuXHRmdW5jdGlvbiBzZXRDb21wbGV0aW9uQ2FsbGJhY2soY2FsbGJhY2spIHtvbmNvbXBsZXRpb24gPSBjYWxsYmFja31cblx0ZnVuY3Rpb24gZmluYWxpemVyKCkge1xuXHRcdHZhciBjb3VudCA9IDBcblx0XHRmdW5jdGlvbiBjb21wbGV0ZSgpIHtpZiAoLS1jb3VudCA9PT0gMCAmJiB0eXBlb2Ygb25jb21wbGV0aW9uID09PSBcImZ1bmN0aW9uXCIpIG9uY29tcGxldGlvbigpfVxuXHRcdHJldHVybiBmdW5jdGlvbiBmaW5hbGl6ZShwcm9taXNlMCkge1xuXHRcdFx0dmFyIHRoZW4wID0gcHJvbWlzZTAudGhlblxuXHRcdFx0cHJvbWlzZTAudGhlbiA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRjb3VudCsrXG5cdFx0XHRcdHZhciBuZXh0ID0gdGhlbjAuYXBwbHkocHJvbWlzZTAsIGFyZ3VtZW50cylcblx0XHRcdFx0bmV4dC50aGVuKGNvbXBsZXRlLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdFx0Y29tcGxldGUoKVxuXHRcdFx0XHRcdGlmIChjb3VudCA9PT0gMCkgdGhyb3cgZVxuXHRcdFx0XHR9KVxuXHRcdFx0XHRyZXR1cm4gZmluYWxpemUobmV4dClcblx0XHRcdH1cblx0XHRcdHJldHVybiBwcm9taXNlMFxuXHRcdH1cblx0fVxuXHRmdW5jdGlvbiBub3JtYWxpemUoYXJncywgZXh0cmEpIHtcblx0XHRpZiAodHlwZW9mIGFyZ3MgPT09IFwic3RyaW5nXCIpIHtcblx0XHRcdHZhciB1cmwgPSBhcmdzXG5cdFx0XHRhcmdzID0gZXh0cmEgfHwge31cblx0XHRcdGlmIChhcmdzLnVybCA9PSBudWxsKSBhcmdzLnVybCA9IHVybFxuXHRcdH1cblx0XHRyZXR1cm4gYXJnc1xuXHR9XG5cdGZ1bmN0aW9uIHJlcXVlc3QoYXJncywgZXh0cmEpIHtcblx0XHR2YXIgZmluYWxpemUgPSBmaW5hbGl6ZXIoKVxuXHRcdGFyZ3MgPSBub3JtYWxpemUoYXJncywgZXh0cmEpXG5cdFx0dmFyIHByb21pc2UwID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0XHRpZiAoYXJncy5tZXRob2QgPT0gbnVsbCkgYXJncy5tZXRob2QgPSBcIkdFVFwiXG5cdFx0XHRhcmdzLm1ldGhvZCA9IGFyZ3MubWV0aG9kLnRvVXBwZXJDYXNlKClcblx0XHRcdHZhciB1c2VCb2R5ID0gKGFyZ3MubWV0aG9kID09PSBcIkdFVFwiIHx8IGFyZ3MubWV0aG9kID09PSBcIlRSQUNFXCIpID8gZmFsc2UgOiAodHlwZW9mIGFyZ3MudXNlQm9keSA9PT0gXCJib29sZWFuXCIgPyBhcmdzLnVzZUJvZHkgOiB0cnVlKVxuXHRcdFx0aWYgKHR5cGVvZiBhcmdzLnNlcmlhbGl6ZSAhPT0gXCJmdW5jdGlvblwiKSBhcmdzLnNlcmlhbGl6ZSA9IHR5cGVvZiBGb3JtRGF0YSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcmdzLmRhdGEgaW5zdGFuY2VvZiBGb3JtRGF0YSA/IGZ1bmN0aW9uKHZhbHVlKSB7cmV0dXJuIHZhbHVlfSA6IEpTT04uc3RyaW5naWZ5XG5cdFx0XHRpZiAodHlwZW9mIGFyZ3MuZGVzZXJpYWxpemUgIT09IFwiZnVuY3Rpb25cIikgYXJncy5kZXNlcmlhbGl6ZSA9IGRlc2VyaWFsaXplXG5cdFx0XHRpZiAodHlwZW9mIGFyZ3MuZXh0cmFjdCAhPT0gXCJmdW5jdGlvblwiKSBhcmdzLmV4dHJhY3QgPSBleHRyYWN0XG5cdFx0XHRhcmdzLnVybCA9IGludGVycG9sYXRlKGFyZ3MudXJsLCBhcmdzLmRhdGEpXG5cdFx0XHRpZiAodXNlQm9keSkgYXJncy5kYXRhID0gYXJncy5zZXJpYWxpemUoYXJncy5kYXRhKVxuXHRcdFx0ZWxzZSBhcmdzLnVybCA9IGFzc2VtYmxlKGFyZ3MudXJsLCBhcmdzLmRhdGEpXG5cdFx0XHR2YXIgeGhyID0gbmV3ICR3aW5kb3cuWE1MSHR0cFJlcXVlc3QoKSxcblx0XHRcdFx0YWJvcnRlZCA9IGZhbHNlLFxuXHRcdFx0XHRfYWJvcnQgPSB4aHIuYWJvcnRcblx0XHRcdHhoci5hYm9ydCA9IGZ1bmN0aW9uIGFib3J0KCkge1xuXHRcdFx0XHRhYm9ydGVkID0gdHJ1ZVxuXHRcdFx0XHRfYWJvcnQuY2FsbCh4aHIpXG5cdFx0XHR9XG5cdFx0XHR4aHIub3BlbihhcmdzLm1ldGhvZCwgYXJncy51cmwsIHR5cGVvZiBhcmdzLmFzeW5jID09PSBcImJvb2xlYW5cIiA/IGFyZ3MuYXN5bmMgOiB0cnVlLCB0eXBlb2YgYXJncy51c2VyID09PSBcInN0cmluZ1wiID8gYXJncy51c2VyIDogdW5kZWZpbmVkLCB0eXBlb2YgYXJncy5wYXNzd29yZCA9PT0gXCJzdHJpbmdcIiA/IGFyZ3MucGFzc3dvcmQgOiB1bmRlZmluZWQpXG5cdFx0XHRpZiAoYXJncy5zZXJpYWxpemUgPT09IEpTT04uc3RyaW5naWZ5ICYmIHVzZUJvZHkgJiYgIShhcmdzLmhlYWRlcnMgJiYgYXJncy5oZWFkZXJzLmhhc093blByb3BlcnR5KFwiQ29udGVudC1UeXBlXCIpKSkge1xuXHRcdFx0XHR4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIilcblx0XHRcdH1cblx0XHRcdGlmIChhcmdzLmRlc2VyaWFsaXplID09PSBkZXNlcmlhbGl6ZSAmJiAhKGFyZ3MuaGVhZGVycyAmJiBhcmdzLmhlYWRlcnMuaGFzT3duUHJvcGVydHkoXCJBY2NlcHRcIikpKSB7XG5cdFx0XHRcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQWNjZXB0XCIsIFwiYXBwbGljYXRpb24vanNvbiwgdGV4dC8qXCIpXG5cdFx0XHR9XG5cdFx0XHRpZiAoYXJncy53aXRoQ3JlZGVudGlhbHMpIHhoci53aXRoQ3JlZGVudGlhbHMgPSBhcmdzLndpdGhDcmVkZW50aWFsc1xuXHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZ3MuaGVhZGVycykgaWYgKHt9Lmhhc093blByb3BlcnR5LmNhbGwoYXJncy5oZWFkZXJzLCBrZXkpKSB7XG5cdFx0XHRcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgYXJncy5oZWFkZXJzW2tleV0pXG5cdFx0XHR9XG5cdFx0XHRpZiAodHlwZW9mIGFyZ3MuY29uZmlnID09PSBcImZ1bmN0aW9uXCIpIHhociA9IGFyZ3MuY29uZmlnKHhociwgYXJncykgfHwgeGhyXG5cdFx0XHR4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdC8vIERvbid0IHRocm93IGVycm9ycyBvbiB4aHIuYWJvcnQoKS5cblx0XHRcdFx0aWYoYWJvcnRlZCkgcmV0dXJuXG5cdFx0XHRcdGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCkge1xuXHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHR2YXIgcmVzcG9uc2UgPSAoYXJncy5leHRyYWN0ICE9PSBleHRyYWN0KSA/IGFyZ3MuZXh0cmFjdCh4aHIsIGFyZ3MpIDogYXJncy5kZXNlcmlhbGl6ZShhcmdzLmV4dHJhY3QoeGhyLCBhcmdzKSlcblx0XHRcdFx0XHRcdGlmICgoeGhyLnN0YXR1cyA+PSAyMDAgJiYgeGhyLnN0YXR1cyA8IDMwMCkgfHwgeGhyLnN0YXR1cyA9PT0gMzA0IHx8IEZJTEVfUFJPVE9DT0xfUkVHRVgudGVzdChhcmdzLnVybCkpIHtcblx0XHRcdFx0XHRcdFx0cmVzb2x2ZShjYXN0KGFyZ3MudHlwZSwgcmVzcG9uc2UpKVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHZhciBlcnJvciA9IG5ldyBFcnJvcih4aHIucmVzcG9uc2VUZXh0KVxuXHRcdFx0XHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gcmVzcG9uc2UpIGVycm9yW2tleV0gPSByZXNwb25zZVtrZXldXG5cdFx0XHRcdFx0XHRcdHJlamVjdChlcnJvcilcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y2F0Y2ggKGUpIHtcblx0XHRcdFx0XHRcdHJlamVjdChlKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKHVzZUJvZHkgJiYgKGFyZ3MuZGF0YSAhPSBudWxsKSkgeGhyLnNlbmQoYXJncy5kYXRhKVxuXHRcdFx0ZWxzZSB4aHIuc2VuZCgpXG5cdFx0fSlcblx0XHRyZXR1cm4gYXJncy5iYWNrZ3JvdW5kID09PSB0cnVlID8gcHJvbWlzZTAgOiBmaW5hbGl6ZShwcm9taXNlMClcblx0fVxuXHRmdW5jdGlvbiBqc29ucChhcmdzLCBleHRyYSkge1xuXHRcdHZhciBmaW5hbGl6ZSA9IGZpbmFsaXplcigpXG5cdFx0YXJncyA9IG5vcm1hbGl6ZShhcmdzLCBleHRyYSlcblx0XHR2YXIgcHJvbWlzZTAgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcblx0XHRcdHZhciBjYWxsYmFja05hbWUgPSBhcmdzLmNhbGxiYWNrTmFtZSB8fCBcIl9taXRocmlsX1wiICsgTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMWUxNikgKyBcIl9cIiArIGNhbGxiYWNrQ291bnQrK1xuXHRcdFx0dmFyIHNjcmlwdCA9ICR3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKVxuXHRcdFx0JHdpbmRvd1tjYWxsYmFja05hbWVdID0gZnVuY3Rpb24oZGF0YSkge1xuXHRcdFx0XHRzY3JpcHQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzY3JpcHQpXG5cdFx0XHRcdHJlc29sdmUoY2FzdChhcmdzLnR5cGUsIGRhdGEpKVxuXHRcdFx0XHRkZWxldGUgJHdpbmRvd1tjYWxsYmFja05hbWVdXG5cdFx0XHR9XG5cdFx0XHRzY3JpcHQub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRzY3JpcHQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzY3JpcHQpXG5cdFx0XHRcdHJlamVjdChuZXcgRXJyb3IoXCJKU09OUCByZXF1ZXN0IGZhaWxlZFwiKSlcblx0XHRcdFx0ZGVsZXRlICR3aW5kb3dbY2FsbGJhY2tOYW1lXVxuXHRcdFx0fVxuXHRcdFx0aWYgKGFyZ3MuZGF0YSA9PSBudWxsKSBhcmdzLmRhdGEgPSB7fVxuXHRcdFx0YXJncy51cmwgPSBpbnRlcnBvbGF0ZShhcmdzLnVybCwgYXJncy5kYXRhKVxuXHRcdFx0YXJncy5kYXRhW2FyZ3MuY2FsbGJhY2tLZXkgfHwgXCJjYWxsYmFja1wiXSA9IGNhbGxiYWNrTmFtZVxuXHRcdFx0c2NyaXB0LnNyYyA9IGFzc2VtYmxlKGFyZ3MudXJsLCBhcmdzLmRhdGEpXG5cdFx0XHQkd2luZG93LmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hcHBlbmRDaGlsZChzY3JpcHQpXG5cdFx0fSlcblx0XHRyZXR1cm4gYXJncy5iYWNrZ3JvdW5kID09PSB0cnVlPyBwcm9taXNlMCA6IGZpbmFsaXplKHByb21pc2UwKVxuXHR9XG5cdGZ1bmN0aW9uIGludGVycG9sYXRlKHVybCwgZGF0YSkge1xuXHRcdGlmIChkYXRhID09IG51bGwpIHJldHVybiB1cmxcblx0XHR2YXIgdG9rZW5zID0gdXJsLm1hdGNoKC86W15cXC9dKy9naSkgfHwgW11cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGtleSA9IHRva2Vuc1tpXS5zbGljZSgxKVxuXHRcdFx0aWYgKGRhdGFba2V5XSAhPSBudWxsKSB7XG5cdFx0XHRcdHVybCA9IHVybC5yZXBsYWNlKHRva2Vuc1tpXSwgZGF0YVtrZXldKVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gdXJsXG5cdH1cblx0ZnVuY3Rpb24gYXNzZW1ibGUodXJsLCBkYXRhKSB7XG5cdFx0dmFyIHF1ZXJ5c3RyaW5nID0gYnVpbGRRdWVyeVN0cmluZyhkYXRhKVxuXHRcdGlmIChxdWVyeXN0cmluZyAhPT0gXCJcIikge1xuXHRcdFx0dmFyIHByZWZpeCA9IHVybC5pbmRleE9mKFwiP1wiKSA8IDAgPyBcIj9cIiA6IFwiJlwiXG5cdFx0XHR1cmwgKz0gcHJlZml4ICsgcXVlcnlzdHJpbmdcblx0XHR9XG5cdFx0cmV0dXJuIHVybFxuXHR9XG5cdGZ1bmN0aW9uIGRlc2VyaWFsaXplKGRhdGEpIHtcblx0XHR0cnkge3JldHVybiBkYXRhICE9PSBcIlwiID8gSlNPTi5wYXJzZShkYXRhKSA6IG51bGx9XG5cdFx0Y2F0Y2ggKGUpIHt0aHJvdyBuZXcgRXJyb3IoZGF0YSl9XG5cdH1cblx0ZnVuY3Rpb24gZXh0cmFjdCh4aHIpIHtyZXR1cm4geGhyLnJlc3BvbnNlVGV4dH1cblx0ZnVuY3Rpb24gY2FzdCh0eXBlMCwgZGF0YSkge1xuXHRcdGlmICh0eXBlb2YgdHlwZTAgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0aWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0ZGF0YVtpXSA9IG5ldyB0eXBlMChkYXRhW2ldKVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHJldHVybiBuZXcgdHlwZTAoZGF0YSlcblx0XHR9XG5cdFx0cmV0dXJuIGRhdGFcblx0fVxuXHRyZXR1cm4ge3JlcXVlc3Q6IHJlcXVlc3QsIGpzb25wOiBqc29ucCwgc2V0Q29tcGxldGlvbkNhbGxiYWNrOiBzZXRDb21wbGV0aW9uQ2FsbGJhY2t9XG59XG52YXIgcmVxdWVzdFNlcnZpY2UgPSBfOCh3aW5kb3csIFByb21pc2VQb2x5ZmlsbClcbnZhciBjb3JlUmVuZGVyZXIgPSBmdW5jdGlvbigkd2luZG93KSB7XG5cdHZhciAkZG9jID0gJHdpbmRvdy5kb2N1bWVudFxuXHR2YXIgJGVtcHR5RnJhZ21lbnQgPSAkZG9jLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKVxuXHR2YXIgbmFtZVNwYWNlID0ge1xuXHRcdHN2ZzogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuXHRcdG1hdGg6IFwiaHR0cDovL3d3dy53My5vcmcvMTk5OC9NYXRoL01hdGhNTFwiXG5cdH1cblx0dmFyIG9uZXZlbnRcblx0ZnVuY3Rpb24gc2V0RXZlbnRDYWxsYmFjayhjYWxsYmFjaykge3JldHVybiBvbmV2ZW50ID0gY2FsbGJhY2t9XG5cdGZ1bmN0aW9uIGdldE5hbWVTcGFjZSh2bm9kZSkge1xuXHRcdHJldHVybiB2bm9kZS5hdHRycyAmJiB2bm9kZS5hdHRycy54bWxucyB8fCBuYW1lU3BhY2Vbdm5vZGUudGFnXVxuXHR9XG5cdC8vY3JlYXRlXG5cdGZ1bmN0aW9uIGNyZWF0ZU5vZGVzKHBhcmVudCwgdm5vZGVzLCBzdGFydCwgZW5kLCBob29rcywgbmV4dFNpYmxpbmcsIG5zKSB7XG5cdFx0Zm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHtcblx0XHRcdHZhciB2bm9kZSA9IHZub2Rlc1tpXVxuXHRcdFx0aWYgKHZub2RlICE9IG51bGwpIHtcblx0XHRcdFx0Y3JlYXRlTm9kZShwYXJlbnQsIHZub2RlLCBob29rcywgbnMsIG5leHRTaWJsaW5nKVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRmdW5jdGlvbiBjcmVhdGVOb2RlKHBhcmVudCwgdm5vZGUsIGhvb2tzLCBucywgbmV4dFNpYmxpbmcpIHtcblx0XHR2YXIgdGFnID0gdm5vZGUudGFnXG5cdFx0aWYgKHR5cGVvZiB0YWcgPT09IFwic3RyaW5nXCIpIHtcblx0XHRcdHZub2RlLnN0YXRlID0ge31cblx0XHRcdGlmICh2bm9kZS5hdHRycyAhPSBudWxsKSBpbml0TGlmZWN5Y2xlKHZub2RlLmF0dHJzLCB2bm9kZSwgaG9va3MpXG5cdFx0XHRzd2l0Y2ggKHRhZykge1xuXHRcdFx0XHRjYXNlIFwiI1wiOiByZXR1cm4gY3JlYXRlVGV4dChwYXJlbnQsIHZub2RlLCBuZXh0U2libGluZylcblx0XHRcdFx0Y2FzZSBcIjxcIjogcmV0dXJuIGNyZWF0ZUhUTUwocGFyZW50LCB2bm9kZSwgbmV4dFNpYmxpbmcpXG5cdFx0XHRcdGNhc2UgXCJbXCI6IHJldHVybiBjcmVhdGVGcmFnbWVudChwYXJlbnQsIHZub2RlLCBob29rcywgbnMsIG5leHRTaWJsaW5nKVxuXHRcdFx0XHRkZWZhdWx0OiByZXR1cm4gY3JlYXRlRWxlbWVudChwYXJlbnQsIHZub2RlLCBob29rcywgbnMsIG5leHRTaWJsaW5nKVxuXHRcdFx0fVxuXHRcdH1cblx0XHRlbHNlIHJldHVybiBjcmVhdGVDb21wb25lbnQocGFyZW50LCB2bm9kZSwgaG9va3MsIG5zLCBuZXh0U2libGluZylcblx0fVxuXHRmdW5jdGlvbiBjcmVhdGVUZXh0KHBhcmVudCwgdm5vZGUsIG5leHRTaWJsaW5nKSB7XG5cdFx0dm5vZGUuZG9tID0gJGRvYy5jcmVhdGVUZXh0Tm9kZSh2bm9kZS5jaGlsZHJlbilcblx0XHRpbnNlcnROb2RlKHBhcmVudCwgdm5vZGUuZG9tLCBuZXh0U2libGluZylcblx0XHRyZXR1cm4gdm5vZGUuZG9tXG5cdH1cblx0ZnVuY3Rpb24gY3JlYXRlSFRNTChwYXJlbnQsIHZub2RlLCBuZXh0U2libGluZykge1xuXHRcdHZhciBtYXRjaDEgPSB2bm9kZS5jaGlsZHJlbi5tYXRjaCgvXlxccyo/PChcXHcrKS9pbSkgfHwgW11cblx0XHR2YXIgcGFyZW50MSA9IHtjYXB0aW9uOiBcInRhYmxlXCIsIHRoZWFkOiBcInRhYmxlXCIsIHRib2R5OiBcInRhYmxlXCIsIHRmb290OiBcInRhYmxlXCIsIHRyOiBcInRib2R5XCIsIHRoOiBcInRyXCIsIHRkOiBcInRyXCIsIGNvbGdyb3VwOiBcInRhYmxlXCIsIGNvbDogXCJjb2xncm91cFwifVttYXRjaDFbMV1dIHx8IFwiZGl2XCJcblx0XHR2YXIgdGVtcCA9ICRkb2MuY3JlYXRlRWxlbWVudChwYXJlbnQxKVxuXHRcdHRlbXAuaW5uZXJIVE1MID0gdm5vZGUuY2hpbGRyZW5cblx0XHR2bm9kZS5kb20gPSB0ZW1wLmZpcnN0Q2hpbGRcblx0XHR2bm9kZS5kb21TaXplID0gdGVtcC5jaGlsZE5vZGVzLmxlbmd0aFxuXHRcdHZhciBmcmFnbWVudCA9ICRkb2MuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpXG5cdFx0dmFyIGNoaWxkXG5cdFx0d2hpbGUgKGNoaWxkID0gdGVtcC5maXJzdENoaWxkKSB7XG5cdFx0XHRmcmFnbWVudC5hcHBlbmRDaGlsZChjaGlsZClcblx0XHR9XG5cdFx0aW5zZXJ0Tm9kZShwYXJlbnQsIGZyYWdtZW50LCBuZXh0U2libGluZylcblx0XHRyZXR1cm4gZnJhZ21lbnRcblx0fVxuXHRmdW5jdGlvbiBjcmVhdGVGcmFnbWVudChwYXJlbnQsIHZub2RlLCBob29rcywgbnMsIG5leHRTaWJsaW5nKSB7XG5cdFx0dmFyIGZyYWdtZW50ID0gJGRvYy5jcmVhdGVEb2N1bWVudEZyYWdtZW50KClcblx0XHRpZiAodm5vZGUuY2hpbGRyZW4gIT0gbnVsbCkge1xuXHRcdFx0dmFyIGNoaWxkcmVuID0gdm5vZGUuY2hpbGRyZW5cblx0XHRcdGNyZWF0ZU5vZGVzKGZyYWdtZW50LCBjaGlsZHJlbiwgMCwgY2hpbGRyZW4ubGVuZ3RoLCBob29rcywgbnVsbCwgbnMpXG5cdFx0fVxuXHRcdHZub2RlLmRvbSA9IGZyYWdtZW50LmZpcnN0Q2hpbGRcblx0XHR2bm9kZS5kb21TaXplID0gZnJhZ21lbnQuY2hpbGROb2Rlcy5sZW5ndGhcblx0XHRpbnNlcnROb2RlKHBhcmVudCwgZnJhZ21lbnQsIG5leHRTaWJsaW5nKVxuXHRcdHJldHVybiBmcmFnbWVudFxuXHR9XG5cdGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQocGFyZW50LCB2bm9kZSwgaG9va3MsIG5zLCBuZXh0U2libGluZykge1xuXHRcdHZhciB0YWcgPSB2bm9kZS50YWdcblx0XHR2YXIgYXR0cnMyID0gdm5vZGUuYXR0cnNcblx0XHR2YXIgaXMgPSBhdHRyczIgJiYgYXR0cnMyLmlzXG5cdFx0bnMgPSBnZXROYW1lU3BhY2Uodm5vZGUpIHx8IG5zXG5cdFx0dmFyIGVsZW1lbnQgPSBucyA/XG5cdFx0XHRpcyA/ICRkb2MuY3JlYXRlRWxlbWVudE5TKG5zLCB0YWcsIHtpczogaXN9KSA6ICRkb2MuY3JlYXRlRWxlbWVudE5TKG5zLCB0YWcpIDpcblx0XHRcdGlzID8gJGRvYy5jcmVhdGVFbGVtZW50KHRhZywge2lzOiBpc30pIDogJGRvYy5jcmVhdGVFbGVtZW50KHRhZylcblx0XHR2bm9kZS5kb20gPSBlbGVtZW50XG5cdFx0aWYgKGF0dHJzMiAhPSBudWxsKSB7XG5cdFx0XHRzZXRBdHRycyh2bm9kZSwgYXR0cnMyLCBucylcblx0XHR9XG5cdFx0aW5zZXJ0Tm9kZShwYXJlbnQsIGVsZW1lbnQsIG5leHRTaWJsaW5nKVxuXHRcdGlmICh2bm9kZS5hdHRycyAhPSBudWxsICYmIHZub2RlLmF0dHJzLmNvbnRlbnRlZGl0YWJsZSAhPSBudWxsKSB7XG5cdFx0XHRzZXRDb250ZW50RWRpdGFibGUodm5vZGUpXG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0aWYgKHZub2RlLnRleHQgIT0gbnVsbCkge1xuXHRcdFx0XHRpZiAodm5vZGUudGV4dCAhPT0gXCJcIikgZWxlbWVudC50ZXh0Q29udGVudCA9IHZub2RlLnRleHRcblx0XHRcdFx0ZWxzZSB2bm9kZS5jaGlsZHJlbiA9IFtWbm9kZShcIiNcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHZub2RlLnRleHQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkKV1cblx0XHRcdH1cblx0XHRcdGlmICh2bm9kZS5jaGlsZHJlbiAhPSBudWxsKSB7XG5cdFx0XHRcdHZhciBjaGlsZHJlbiA9IHZub2RlLmNoaWxkcmVuXG5cdFx0XHRcdGNyZWF0ZU5vZGVzKGVsZW1lbnQsIGNoaWxkcmVuLCAwLCBjaGlsZHJlbi5sZW5ndGgsIGhvb2tzLCBudWxsLCBucylcblx0XHRcdFx0c2V0TGF0ZUF0dHJzKHZub2RlKVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gZWxlbWVudFxuXHR9XG5cdGZ1bmN0aW9uIGluaXRDb21wb25lbnQodm5vZGUsIGhvb2tzKSB7XG5cdFx0dmFyIHNlbnRpbmVsXG5cdFx0aWYgKHR5cGVvZiB2bm9kZS50YWcudmlldyA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHR2bm9kZS5zdGF0ZSA9IE9iamVjdC5jcmVhdGUodm5vZGUudGFnKVxuXHRcdFx0c2VudGluZWwgPSB2bm9kZS5zdGF0ZS52aWV3XG5cdFx0XHRpZiAoc2VudGluZWwuJCRyZWVudHJhbnRMb2NrJCQgIT0gbnVsbCkgcmV0dXJuICRlbXB0eUZyYWdtZW50XG5cdFx0XHRzZW50aW5lbC4kJHJlZW50cmFudExvY2skJCA9IHRydWVcblx0XHR9IGVsc2Uge1xuXHRcdFx0dm5vZGUuc3RhdGUgPSB2b2lkIDBcblx0XHRcdHNlbnRpbmVsID0gdm5vZGUudGFnXG5cdFx0XHRpZiAoc2VudGluZWwuJCRyZWVudHJhbnRMb2NrJCQgIT0gbnVsbCkgcmV0dXJuICRlbXB0eUZyYWdtZW50XG5cdFx0XHRzZW50aW5lbC4kJHJlZW50cmFudExvY2skJCA9IHRydWVcblx0XHRcdHZub2RlLnN0YXRlID0gKHZub2RlLnRhZy5wcm90b3R5cGUgIT0gbnVsbCAmJiB0eXBlb2Ygdm5vZGUudGFnLnByb3RvdHlwZS52aWV3ID09PSBcImZ1bmN0aW9uXCIpID8gbmV3IHZub2RlLnRhZyh2bm9kZSkgOiB2bm9kZS50YWcodm5vZGUpXG5cdFx0fVxuXHRcdHZub2RlLl9zdGF0ZSA9IHZub2RlLnN0YXRlXG5cdFx0aWYgKHZub2RlLmF0dHJzICE9IG51bGwpIGluaXRMaWZlY3ljbGUodm5vZGUuYXR0cnMsIHZub2RlLCBob29rcylcblx0XHRpbml0TGlmZWN5Y2xlKHZub2RlLl9zdGF0ZSwgdm5vZGUsIGhvb2tzKVxuXHRcdHZub2RlLmluc3RhbmNlID0gVm5vZGUubm9ybWFsaXplKHZub2RlLl9zdGF0ZS52aWV3LmNhbGwodm5vZGUuc3RhdGUsIHZub2RlKSlcblx0XHRpZiAodm5vZGUuaW5zdGFuY2UgPT09IHZub2RlKSB0aHJvdyBFcnJvcihcIkEgdmlldyBjYW5ub3QgcmV0dXJuIHRoZSB2bm9kZSBpdCByZWNlaXZlZCBhcyBhcmd1bWVudFwiKVxuXHRcdHNlbnRpbmVsLiQkcmVlbnRyYW50TG9jayQkID0gbnVsbFxuXHR9XG5cdGZ1bmN0aW9uIGNyZWF0ZUNvbXBvbmVudChwYXJlbnQsIHZub2RlLCBob29rcywgbnMsIG5leHRTaWJsaW5nKSB7XG5cdFx0aW5pdENvbXBvbmVudCh2bm9kZSwgaG9va3MpXG5cdFx0aWYgKHZub2RlLmluc3RhbmNlICE9IG51bGwpIHtcblx0XHRcdHZhciBlbGVtZW50ID0gY3JlYXRlTm9kZShwYXJlbnQsIHZub2RlLmluc3RhbmNlLCBob29rcywgbnMsIG5leHRTaWJsaW5nKVxuXHRcdFx0dm5vZGUuZG9tID0gdm5vZGUuaW5zdGFuY2UuZG9tXG5cdFx0XHR2bm9kZS5kb21TaXplID0gdm5vZGUuZG9tICE9IG51bGwgPyB2bm9kZS5pbnN0YW5jZS5kb21TaXplIDogMFxuXHRcdFx0aW5zZXJ0Tm9kZShwYXJlbnQsIGVsZW1lbnQsIG5leHRTaWJsaW5nKVxuXHRcdFx0cmV0dXJuIGVsZW1lbnRcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHR2bm9kZS5kb21TaXplID0gMFxuXHRcdFx0cmV0dXJuICRlbXB0eUZyYWdtZW50XG5cdFx0fVxuXHR9XG5cdC8vdXBkYXRlXG5cdGZ1bmN0aW9uIHVwZGF0ZU5vZGVzKHBhcmVudCwgb2xkLCB2bm9kZXMsIHJlY3ljbGluZywgaG9va3MsIG5leHRTaWJsaW5nLCBucykge1xuXHRcdGlmIChvbGQgPT09IHZub2RlcyB8fCBvbGQgPT0gbnVsbCAmJiB2bm9kZXMgPT0gbnVsbCkgcmV0dXJuXG5cdFx0ZWxzZSBpZiAob2xkID09IG51bGwpIGNyZWF0ZU5vZGVzKHBhcmVudCwgdm5vZGVzLCAwLCB2bm9kZXMubGVuZ3RoLCBob29rcywgbmV4dFNpYmxpbmcsIG5zKVxuXHRcdGVsc2UgaWYgKHZub2RlcyA9PSBudWxsKSByZW1vdmVOb2RlcyhvbGQsIDAsIG9sZC5sZW5ndGgsIHZub2Rlcylcblx0XHRlbHNlIHtcblx0XHRcdGlmIChvbGQubGVuZ3RoID09PSB2bm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRcdHZhciBpc1Vua2V5ZWQgPSBmYWxzZVxuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHZub2Rlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGlmICh2bm9kZXNbaV0gIT0gbnVsbCAmJiBvbGRbaV0gIT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0aXNVbmtleWVkID0gdm5vZGVzW2ldLmtleSA9PSBudWxsICYmIG9sZFtpXS5rZXkgPT0gbnVsbFxuXHRcdFx0XHRcdFx0YnJlYWtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGlzVW5rZXllZCkge1xuXHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgb2xkLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0XHRpZiAob2xkW2ldID09PSB2bm9kZXNbaV0pIGNvbnRpbnVlXG5cdFx0XHRcdFx0XHRlbHNlIGlmIChvbGRbaV0gPT0gbnVsbCAmJiB2bm9kZXNbaV0gIT0gbnVsbCkgY3JlYXRlTm9kZShwYXJlbnQsIHZub2Rlc1tpXSwgaG9va3MsIG5zLCBnZXROZXh0U2libGluZyhvbGQsIGkgKyAxLCBuZXh0U2libGluZykpXG5cdFx0XHRcdFx0XHRlbHNlIGlmICh2bm9kZXNbaV0gPT0gbnVsbCkgcmVtb3ZlTm9kZXMob2xkLCBpLCBpICsgMSwgdm5vZGVzKVxuXHRcdFx0XHRcdFx0ZWxzZSB1cGRhdGVOb2RlKHBhcmVudCwgb2xkW2ldLCB2bm9kZXNbaV0sIGhvb2tzLCBnZXROZXh0U2libGluZyhvbGQsIGkgKyAxLCBuZXh0U2libGluZyksIHJlY3ljbGluZywgbnMpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVyblxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZWN5Y2xpbmcgPSByZWN5Y2xpbmcgfHwgaXNSZWN5Y2xhYmxlKG9sZCwgdm5vZGVzKVxuXHRcdFx0aWYgKHJlY3ljbGluZykge1xuXHRcdFx0XHR2YXIgcG9vbCA9IG9sZC5wb29sXG5cdFx0XHRcdG9sZCA9IG9sZC5jb25jYXQob2xkLnBvb2wpXG5cdFx0XHR9XG5cdFx0XHR2YXIgb2xkU3RhcnQgPSAwLCBzdGFydCA9IDAsIG9sZEVuZCA9IG9sZC5sZW5ndGggLSAxLCBlbmQgPSB2bm9kZXMubGVuZ3RoIC0gMSwgbWFwXG5cdFx0XHR3aGlsZSAob2xkRW5kID49IG9sZFN0YXJ0ICYmIGVuZCA+PSBzdGFydCkge1xuXHRcdFx0XHR2YXIgbyA9IG9sZFtvbGRTdGFydF0sIHYgPSB2bm9kZXNbc3RhcnRdXG5cdFx0XHRcdGlmIChvID09PSB2ICYmICFyZWN5Y2xpbmcpIG9sZFN0YXJ0KyssIHN0YXJ0Kytcblx0XHRcdFx0ZWxzZSBpZiAobyA9PSBudWxsKSBvbGRTdGFydCsrXG5cdFx0XHRcdGVsc2UgaWYgKHYgPT0gbnVsbCkgc3RhcnQrK1xuXHRcdFx0XHRlbHNlIGlmIChvLmtleSA9PT0gdi5rZXkpIHtcblx0XHRcdFx0XHR2YXIgc2hvdWxkUmVjeWNsZSA9IChwb29sICE9IG51bGwgJiYgb2xkU3RhcnQgPj0gb2xkLmxlbmd0aCAtIHBvb2wubGVuZ3RoKSB8fCAoKHBvb2wgPT0gbnVsbCkgJiYgcmVjeWNsaW5nKVxuXHRcdFx0XHRcdG9sZFN0YXJ0KyssIHN0YXJ0Kytcblx0XHRcdFx0XHR1cGRhdGVOb2RlKHBhcmVudCwgbywgdiwgaG9va3MsIGdldE5leHRTaWJsaW5nKG9sZCwgb2xkU3RhcnQsIG5leHRTaWJsaW5nKSwgc2hvdWxkUmVjeWNsZSwgbnMpXG5cdFx0XHRcdFx0aWYgKHJlY3ljbGluZyAmJiBvLnRhZyA9PT0gdi50YWcpIGluc2VydE5vZGUocGFyZW50LCB0b0ZyYWdtZW50KG8pLCBuZXh0U2libGluZylcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHR2YXIgbyA9IG9sZFtvbGRFbmRdXG5cdFx0XHRcdFx0aWYgKG8gPT09IHYgJiYgIXJlY3ljbGluZykgb2xkRW5kLS0sIHN0YXJ0Kytcblx0XHRcdFx0XHRlbHNlIGlmIChvID09IG51bGwpIG9sZEVuZC0tXG5cdFx0XHRcdFx0ZWxzZSBpZiAodiA9PSBudWxsKSBzdGFydCsrXG5cdFx0XHRcdFx0ZWxzZSBpZiAoby5rZXkgPT09IHYua2V5KSB7XG5cdFx0XHRcdFx0XHR2YXIgc2hvdWxkUmVjeWNsZSA9IChwb29sICE9IG51bGwgJiYgb2xkRW5kID49IG9sZC5sZW5ndGggLSBwb29sLmxlbmd0aCkgfHwgKChwb29sID09IG51bGwpICYmIHJlY3ljbGluZylcblx0XHRcdFx0XHRcdHVwZGF0ZU5vZGUocGFyZW50LCBvLCB2LCBob29rcywgZ2V0TmV4dFNpYmxpbmcob2xkLCBvbGRFbmQgKyAxLCBuZXh0U2libGluZyksIHNob3VsZFJlY3ljbGUsIG5zKVxuXHRcdFx0XHRcdFx0aWYgKHJlY3ljbGluZyB8fCBzdGFydCA8IGVuZCkgaW5zZXJ0Tm9kZShwYXJlbnQsIHRvRnJhZ21lbnQobyksIGdldE5leHRTaWJsaW5nKG9sZCwgb2xkU3RhcnQsIG5leHRTaWJsaW5nKSlcblx0XHRcdFx0XHRcdG9sZEVuZC0tLCBzdGFydCsrXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVsc2UgYnJlYWtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0d2hpbGUgKG9sZEVuZCA+PSBvbGRTdGFydCAmJiBlbmQgPj0gc3RhcnQpIHtcblx0XHRcdFx0dmFyIG8gPSBvbGRbb2xkRW5kXSwgdiA9IHZub2Rlc1tlbmRdXG5cdFx0XHRcdGlmIChvID09PSB2ICYmICFyZWN5Y2xpbmcpIG9sZEVuZC0tLCBlbmQtLVxuXHRcdFx0XHRlbHNlIGlmIChvID09IG51bGwpIG9sZEVuZC0tXG5cdFx0XHRcdGVsc2UgaWYgKHYgPT0gbnVsbCkgZW5kLS1cblx0XHRcdFx0ZWxzZSBpZiAoby5rZXkgPT09IHYua2V5KSB7XG5cdFx0XHRcdFx0dmFyIHNob3VsZFJlY3ljbGUgPSAocG9vbCAhPSBudWxsICYmIG9sZEVuZCA+PSBvbGQubGVuZ3RoIC0gcG9vbC5sZW5ndGgpIHx8ICgocG9vbCA9PSBudWxsKSAmJiByZWN5Y2xpbmcpXG5cdFx0XHRcdFx0dXBkYXRlTm9kZShwYXJlbnQsIG8sIHYsIGhvb2tzLCBnZXROZXh0U2libGluZyhvbGQsIG9sZEVuZCArIDEsIG5leHRTaWJsaW5nKSwgc2hvdWxkUmVjeWNsZSwgbnMpXG5cdFx0XHRcdFx0aWYgKHJlY3ljbGluZyAmJiBvLnRhZyA9PT0gdi50YWcpIGluc2VydE5vZGUocGFyZW50LCB0b0ZyYWdtZW50KG8pLCBuZXh0U2libGluZylcblx0XHRcdFx0XHRpZiAoby5kb20gIT0gbnVsbCkgbmV4dFNpYmxpbmcgPSBvLmRvbVxuXHRcdFx0XHRcdG9sZEVuZC0tLCBlbmQtLVxuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdGlmICghbWFwKSBtYXAgPSBnZXRLZXlNYXAob2xkLCBvbGRFbmQpXG5cdFx0XHRcdFx0aWYgKHYgIT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0dmFyIG9sZEluZGV4ID0gbWFwW3Yua2V5XVxuXHRcdFx0XHRcdFx0aWYgKG9sZEluZGV4ICE9IG51bGwpIHtcblx0XHRcdFx0XHRcdFx0dmFyIG1vdmFibGUgPSBvbGRbb2xkSW5kZXhdXG5cdFx0XHRcdFx0XHRcdHZhciBzaG91bGRSZWN5Y2xlID0gKHBvb2wgIT0gbnVsbCAmJiBvbGRJbmRleCA+PSBvbGQubGVuZ3RoIC0gcG9vbC5sZW5ndGgpIHx8ICgocG9vbCA9PSBudWxsKSAmJiByZWN5Y2xpbmcpXG5cdFx0XHRcdFx0XHRcdHVwZGF0ZU5vZGUocGFyZW50LCBtb3ZhYmxlLCB2LCBob29rcywgZ2V0TmV4dFNpYmxpbmcob2xkLCBvbGRFbmQgKyAxLCBuZXh0U2libGluZyksIHJlY3ljbGluZywgbnMpXG5cdFx0XHRcdFx0XHRcdGluc2VydE5vZGUocGFyZW50LCB0b0ZyYWdtZW50KG1vdmFibGUpLCBuZXh0U2libGluZylcblx0XHRcdFx0XHRcdFx0b2xkW29sZEluZGV4XS5za2lwID0gdHJ1ZVxuXHRcdFx0XHRcdFx0XHRpZiAobW92YWJsZS5kb20gIT0gbnVsbCkgbmV4dFNpYmxpbmcgPSBtb3ZhYmxlLmRvbVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHZhciBkb20gPSBjcmVhdGVOb2RlKHBhcmVudCwgdiwgaG9va3MsIG5zLCBuZXh0U2libGluZylcblx0XHRcdFx0XHRcdFx0bmV4dFNpYmxpbmcgPSBkb21cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZW5kLS1cblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZW5kIDwgc3RhcnQpIGJyZWFrXG5cdFx0XHR9XG5cdFx0XHRjcmVhdGVOb2RlcyhwYXJlbnQsIHZub2Rlcywgc3RhcnQsIGVuZCArIDEsIGhvb2tzLCBuZXh0U2libGluZywgbnMpXG5cdFx0XHRyZW1vdmVOb2RlcyhvbGQsIG9sZFN0YXJ0LCBvbGRFbmQgKyAxLCB2bm9kZXMpXG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIHVwZGF0ZU5vZGUocGFyZW50LCBvbGQsIHZub2RlLCBob29rcywgbmV4dFNpYmxpbmcsIHJlY3ljbGluZywgbnMpIHtcblx0XHR2YXIgb2xkVGFnID0gb2xkLnRhZywgdGFnID0gdm5vZGUudGFnXG5cdFx0aWYgKG9sZFRhZyA9PT0gdGFnKSB7XG5cdFx0XHR2bm9kZS5zdGF0ZSA9IG9sZC5zdGF0ZVxuXHRcdFx0dm5vZGUuX3N0YXRlID0gb2xkLl9zdGF0ZVxuXHRcdFx0dm5vZGUuZXZlbnRzID0gb2xkLmV2ZW50c1xuXHRcdFx0aWYgKCFyZWN5Y2xpbmcgJiYgc2hvdWxkTm90VXBkYXRlKHZub2RlLCBvbGQpKSByZXR1cm5cblx0XHRcdGlmICh0eXBlb2Ygb2xkVGFnID09PSBcInN0cmluZ1wiKSB7XG5cdFx0XHRcdGlmICh2bm9kZS5hdHRycyAhPSBudWxsKSB7XG5cdFx0XHRcdFx0aWYgKHJlY3ljbGluZykge1xuXHRcdFx0XHRcdFx0dm5vZGUuc3RhdGUgPSB7fVxuXHRcdFx0XHRcdFx0aW5pdExpZmVjeWNsZSh2bm9kZS5hdHRycywgdm5vZGUsIGhvb2tzKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbHNlIHVwZGF0ZUxpZmVjeWNsZSh2bm9kZS5hdHRycywgdm5vZGUsIGhvb2tzKVxuXHRcdFx0XHR9XG5cdFx0XHRcdHN3aXRjaCAob2xkVGFnKSB7XG5cdFx0XHRcdFx0Y2FzZSBcIiNcIjogdXBkYXRlVGV4dChvbGQsIHZub2RlKTsgYnJlYWtcblx0XHRcdFx0XHRjYXNlIFwiPFwiOiB1cGRhdGVIVE1MKHBhcmVudCwgb2xkLCB2bm9kZSwgbmV4dFNpYmxpbmcpOyBicmVha1xuXHRcdFx0XHRcdGNhc2UgXCJbXCI6IHVwZGF0ZUZyYWdtZW50KHBhcmVudCwgb2xkLCB2bm9kZSwgcmVjeWNsaW5nLCBob29rcywgbmV4dFNpYmxpbmcsIG5zKTsgYnJlYWtcblx0XHRcdFx0XHRkZWZhdWx0OiB1cGRhdGVFbGVtZW50KG9sZCwgdm5vZGUsIHJlY3ljbGluZywgaG9va3MsIG5zKVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHVwZGF0ZUNvbXBvbmVudChwYXJlbnQsIG9sZCwgdm5vZGUsIGhvb2tzLCBuZXh0U2libGluZywgcmVjeWNsaW5nLCBucylcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRyZW1vdmVOb2RlKG9sZCwgbnVsbClcblx0XHRcdGNyZWF0ZU5vZGUocGFyZW50LCB2bm9kZSwgaG9va3MsIG5zLCBuZXh0U2libGluZylcblx0XHR9XG5cdH1cblx0ZnVuY3Rpb24gdXBkYXRlVGV4dChvbGQsIHZub2RlKSB7XG5cdFx0aWYgKG9sZC5jaGlsZHJlbi50b1N0cmluZygpICE9PSB2bm9kZS5jaGlsZHJlbi50b1N0cmluZygpKSB7XG5cdFx0XHRvbGQuZG9tLm5vZGVWYWx1ZSA9IHZub2RlLmNoaWxkcmVuXG5cdFx0fVxuXHRcdHZub2RlLmRvbSA9IG9sZC5kb21cblx0fVxuXHRmdW5jdGlvbiB1cGRhdGVIVE1MKHBhcmVudCwgb2xkLCB2bm9kZSwgbmV4dFNpYmxpbmcpIHtcblx0XHRpZiAob2xkLmNoaWxkcmVuICE9PSB2bm9kZS5jaGlsZHJlbikge1xuXHRcdFx0dG9GcmFnbWVudChvbGQpXG5cdFx0XHRjcmVhdGVIVE1MKHBhcmVudCwgdm5vZGUsIG5leHRTaWJsaW5nKVxuXHRcdH1cblx0XHRlbHNlIHZub2RlLmRvbSA9IG9sZC5kb20sIHZub2RlLmRvbVNpemUgPSBvbGQuZG9tU2l6ZVxuXHR9XG5cdGZ1bmN0aW9uIHVwZGF0ZUZyYWdtZW50KHBhcmVudCwgb2xkLCB2bm9kZSwgcmVjeWNsaW5nLCBob29rcywgbmV4dFNpYmxpbmcsIG5zKSB7XG5cdFx0dXBkYXRlTm9kZXMocGFyZW50LCBvbGQuY2hpbGRyZW4sIHZub2RlLmNoaWxkcmVuLCByZWN5Y2xpbmcsIGhvb2tzLCBuZXh0U2libGluZywgbnMpXG5cdFx0dmFyIGRvbVNpemUgPSAwLCBjaGlsZHJlbiA9IHZub2RlLmNoaWxkcmVuXG5cdFx0dm5vZGUuZG9tID0gbnVsbFxuXHRcdGlmIChjaGlsZHJlbiAhPSBudWxsKSB7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHZhciBjaGlsZCA9IGNoaWxkcmVuW2ldXG5cdFx0XHRcdGlmIChjaGlsZCAhPSBudWxsICYmIGNoaWxkLmRvbSAhPSBudWxsKSB7XG5cdFx0XHRcdFx0aWYgKHZub2RlLmRvbSA9PSBudWxsKSB2bm9kZS5kb20gPSBjaGlsZC5kb21cblx0XHRcdFx0XHRkb21TaXplICs9IGNoaWxkLmRvbVNpemUgfHwgMVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoZG9tU2l6ZSAhPT0gMSkgdm5vZGUuZG9tU2l6ZSA9IGRvbVNpemVcblx0XHR9XG5cdH1cblx0ZnVuY3Rpb24gdXBkYXRlRWxlbWVudChvbGQsIHZub2RlLCByZWN5Y2xpbmcsIGhvb2tzLCBucykge1xuXHRcdHZhciBlbGVtZW50ID0gdm5vZGUuZG9tID0gb2xkLmRvbVxuXHRcdG5zID0gZ2V0TmFtZVNwYWNlKHZub2RlKSB8fCBuc1xuXHRcdGlmICh2bm9kZS50YWcgPT09IFwidGV4dGFyZWFcIikge1xuXHRcdFx0aWYgKHZub2RlLmF0dHJzID09IG51bGwpIHZub2RlLmF0dHJzID0ge31cblx0XHRcdGlmICh2bm9kZS50ZXh0ICE9IG51bGwpIHtcblx0XHRcdFx0dm5vZGUuYXR0cnMudmFsdWUgPSB2bm9kZS50ZXh0IC8vRklYTUUgaGFuZGxlMCBtdWx0aXBsZSBjaGlsZHJlblxuXHRcdFx0XHR2bm9kZS50ZXh0ID0gdW5kZWZpbmVkXG5cdFx0XHR9XG5cdFx0fVxuXHRcdHVwZGF0ZUF0dHJzKHZub2RlLCBvbGQuYXR0cnMsIHZub2RlLmF0dHJzLCBucylcblx0XHRpZiAodm5vZGUuYXR0cnMgIT0gbnVsbCAmJiB2bm9kZS5hdHRycy5jb250ZW50ZWRpdGFibGUgIT0gbnVsbCkge1xuXHRcdFx0c2V0Q29udGVudEVkaXRhYmxlKHZub2RlKVxuXHRcdH1cblx0XHRlbHNlIGlmIChvbGQudGV4dCAhPSBudWxsICYmIHZub2RlLnRleHQgIT0gbnVsbCAmJiB2bm9kZS50ZXh0ICE9PSBcIlwiKSB7XG5cdFx0XHRpZiAob2xkLnRleHQudG9TdHJpbmcoKSAhPT0gdm5vZGUudGV4dC50b1N0cmluZygpKSBvbGQuZG9tLmZpcnN0Q2hpbGQubm9kZVZhbHVlID0gdm5vZGUudGV4dFxuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdGlmIChvbGQudGV4dCAhPSBudWxsKSBvbGQuY2hpbGRyZW4gPSBbVm5vZGUoXCIjXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBvbGQudGV4dCwgdW5kZWZpbmVkLCBvbGQuZG9tLmZpcnN0Q2hpbGQpXVxuXHRcdFx0aWYgKHZub2RlLnRleHQgIT0gbnVsbCkgdm5vZGUuY2hpbGRyZW4gPSBbVm5vZGUoXCIjXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB2bm9kZS50ZXh0LCB1bmRlZmluZWQsIHVuZGVmaW5lZCldXG5cdFx0XHR1cGRhdGVOb2RlcyhlbGVtZW50LCBvbGQuY2hpbGRyZW4sIHZub2RlLmNoaWxkcmVuLCByZWN5Y2xpbmcsIGhvb2tzLCBudWxsLCBucylcblx0XHR9XG5cdH1cblx0ZnVuY3Rpb24gdXBkYXRlQ29tcG9uZW50KHBhcmVudCwgb2xkLCB2bm9kZSwgaG9va3MsIG5leHRTaWJsaW5nLCByZWN5Y2xpbmcsIG5zKSB7XG5cdFx0aWYgKHJlY3ljbGluZykge1xuXHRcdFx0aW5pdENvbXBvbmVudCh2bm9kZSwgaG9va3MpXG5cdFx0fSBlbHNlIHtcblx0XHRcdHZub2RlLmluc3RhbmNlID0gVm5vZGUubm9ybWFsaXplKHZub2RlLl9zdGF0ZS52aWV3LmNhbGwodm5vZGUuc3RhdGUsIHZub2RlKSlcblx0XHRcdGlmICh2bm9kZS5pbnN0YW5jZSA9PT0gdm5vZGUpIHRocm93IEVycm9yKFwiQSB2aWV3IGNhbm5vdCByZXR1cm4gdGhlIHZub2RlIGl0IHJlY2VpdmVkIGFzIGFyZ3VtZW50XCIpXG5cdFx0XHRpZiAodm5vZGUuYXR0cnMgIT0gbnVsbCkgdXBkYXRlTGlmZWN5Y2xlKHZub2RlLmF0dHJzLCB2bm9kZSwgaG9va3MpXG5cdFx0XHR1cGRhdGVMaWZlY3ljbGUodm5vZGUuX3N0YXRlLCB2bm9kZSwgaG9va3MpXG5cdFx0fVxuXHRcdGlmICh2bm9kZS5pbnN0YW5jZSAhPSBudWxsKSB7XG5cdFx0XHRpZiAob2xkLmluc3RhbmNlID09IG51bGwpIGNyZWF0ZU5vZGUocGFyZW50LCB2bm9kZS5pbnN0YW5jZSwgaG9va3MsIG5zLCBuZXh0U2libGluZylcblx0XHRcdGVsc2UgdXBkYXRlTm9kZShwYXJlbnQsIG9sZC5pbnN0YW5jZSwgdm5vZGUuaW5zdGFuY2UsIGhvb2tzLCBuZXh0U2libGluZywgcmVjeWNsaW5nLCBucylcblx0XHRcdHZub2RlLmRvbSA9IHZub2RlLmluc3RhbmNlLmRvbVxuXHRcdFx0dm5vZGUuZG9tU2l6ZSA9IHZub2RlLmluc3RhbmNlLmRvbVNpemVcblx0XHR9XG5cdFx0ZWxzZSBpZiAob2xkLmluc3RhbmNlICE9IG51bGwpIHtcblx0XHRcdHJlbW92ZU5vZGUob2xkLmluc3RhbmNlLCBudWxsKVxuXHRcdFx0dm5vZGUuZG9tID0gdW5kZWZpbmVkXG5cdFx0XHR2bm9kZS5kb21TaXplID0gMFxuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHZub2RlLmRvbSA9IG9sZC5kb21cblx0XHRcdHZub2RlLmRvbVNpemUgPSBvbGQuZG9tU2l6ZVxuXHRcdH1cblx0fVxuXHRmdW5jdGlvbiBpc1JlY3ljbGFibGUob2xkLCB2bm9kZXMpIHtcblx0XHRpZiAob2xkLnBvb2wgIT0gbnVsbCAmJiBNYXRoLmFicyhvbGQucG9vbC5sZW5ndGggLSB2bm9kZXMubGVuZ3RoKSA8PSBNYXRoLmFicyhvbGQubGVuZ3RoIC0gdm5vZGVzLmxlbmd0aCkpIHtcblx0XHRcdHZhciBvbGRDaGlsZHJlbkxlbmd0aCA9IG9sZFswXSAmJiBvbGRbMF0uY2hpbGRyZW4gJiYgb2xkWzBdLmNoaWxkcmVuLmxlbmd0aCB8fCAwXG5cdFx0XHR2YXIgcG9vbENoaWxkcmVuTGVuZ3RoID0gb2xkLnBvb2xbMF0gJiYgb2xkLnBvb2xbMF0uY2hpbGRyZW4gJiYgb2xkLnBvb2xbMF0uY2hpbGRyZW4ubGVuZ3RoIHx8IDBcblx0XHRcdHZhciB2bm9kZXNDaGlsZHJlbkxlbmd0aCA9IHZub2Rlc1swXSAmJiB2bm9kZXNbMF0uY2hpbGRyZW4gJiYgdm5vZGVzWzBdLmNoaWxkcmVuLmxlbmd0aCB8fCAwXG5cdFx0XHRpZiAoTWF0aC5hYnMocG9vbENoaWxkcmVuTGVuZ3RoIC0gdm5vZGVzQ2hpbGRyZW5MZW5ndGgpIDw9IE1hdGguYWJzKG9sZENoaWxkcmVuTGVuZ3RoIC0gdm5vZGVzQ2hpbGRyZW5MZW5ndGgpKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlXG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZVxuXHR9XG5cdGZ1bmN0aW9uIGdldEtleU1hcCh2bm9kZXMsIGVuZCkge1xuXHRcdHZhciBtYXAgPSB7fSwgaSA9IDBcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGVuZDsgaSsrKSB7XG5cdFx0XHR2YXIgdm5vZGUgPSB2bm9kZXNbaV1cblx0XHRcdGlmICh2bm9kZSAhPSBudWxsKSB7XG5cdFx0XHRcdHZhciBrZXkyID0gdm5vZGUua2V5XG5cdFx0XHRcdGlmIChrZXkyICE9IG51bGwpIG1hcFtrZXkyXSA9IGlcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIG1hcFxuXHR9XG5cdGZ1bmN0aW9uIHRvRnJhZ21lbnQodm5vZGUpIHtcblx0XHR2YXIgY291bnQwID0gdm5vZGUuZG9tU2l6ZVxuXHRcdGlmIChjb3VudDAgIT0gbnVsbCB8fCB2bm9kZS5kb20gPT0gbnVsbCkge1xuXHRcdFx0dmFyIGZyYWdtZW50ID0gJGRvYy5jcmVhdGVEb2N1bWVudEZyYWdtZW50KClcblx0XHRcdGlmIChjb3VudDAgPiAwKSB7XG5cdFx0XHRcdHZhciBkb20gPSB2bm9kZS5kb21cblx0XHRcdFx0d2hpbGUgKC0tY291bnQwKSBmcmFnbWVudC5hcHBlbmRDaGlsZChkb20ubmV4dFNpYmxpbmcpXG5cdFx0XHRcdGZyYWdtZW50Lmluc2VydEJlZm9yZShkb20sIGZyYWdtZW50LmZpcnN0Q2hpbGQpXG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZnJhZ21lbnRcblx0XHR9XG5cdFx0ZWxzZSByZXR1cm4gdm5vZGUuZG9tXG5cdH1cblx0ZnVuY3Rpb24gZ2V0TmV4dFNpYmxpbmcodm5vZGVzLCBpLCBuZXh0U2libGluZykge1xuXHRcdGZvciAoOyBpIDwgdm5vZGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAodm5vZGVzW2ldICE9IG51bGwgJiYgdm5vZGVzW2ldLmRvbSAhPSBudWxsKSByZXR1cm4gdm5vZGVzW2ldLmRvbVxuXHRcdH1cblx0XHRyZXR1cm4gbmV4dFNpYmxpbmdcblx0fVxuXHRmdW5jdGlvbiBpbnNlcnROb2RlKHBhcmVudCwgZG9tLCBuZXh0U2libGluZykge1xuXHRcdGlmIChuZXh0U2libGluZyAmJiBuZXh0U2libGluZy5wYXJlbnROb2RlKSBwYXJlbnQuaW5zZXJ0QmVmb3JlKGRvbSwgbmV4dFNpYmxpbmcpXG5cdFx0ZWxzZSBwYXJlbnQuYXBwZW5kQ2hpbGQoZG9tKVxuXHR9XG5cdGZ1bmN0aW9uIHNldENvbnRlbnRFZGl0YWJsZSh2bm9kZSkge1xuXHRcdHZhciBjaGlsZHJlbiA9IHZub2RlLmNoaWxkcmVuXG5cdFx0aWYgKGNoaWxkcmVuICE9IG51bGwgJiYgY2hpbGRyZW4ubGVuZ3RoID09PSAxICYmIGNoaWxkcmVuWzBdLnRhZyA9PT0gXCI8XCIpIHtcblx0XHRcdHZhciBjb250ZW50ID0gY2hpbGRyZW5bMF0uY2hpbGRyZW5cblx0XHRcdGlmICh2bm9kZS5kb20uaW5uZXJIVE1MICE9PSBjb250ZW50KSB2bm9kZS5kb20uaW5uZXJIVE1MID0gY29udGVudFxuXHRcdH1cblx0XHRlbHNlIGlmICh2bm9kZS50ZXh0ICE9IG51bGwgfHwgY2hpbGRyZW4gIT0gbnVsbCAmJiBjaGlsZHJlbi5sZW5ndGggIT09IDApIHRocm93IG5ldyBFcnJvcihcIkNoaWxkIG5vZGUgb2YgYSBjb250ZW50ZWRpdGFibGUgbXVzdCBiZSB0cnVzdGVkXCIpXG5cdH1cblx0Ly9yZW1vdmVcblx0ZnVuY3Rpb24gcmVtb3ZlTm9kZXModm5vZGVzLCBzdGFydCwgZW5kLCBjb250ZXh0KSB7XG5cdFx0Zm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHtcblx0XHRcdHZhciB2bm9kZSA9IHZub2Rlc1tpXVxuXHRcdFx0aWYgKHZub2RlICE9IG51bGwpIHtcblx0XHRcdFx0aWYgKHZub2RlLnNraXApIHZub2RlLnNraXAgPSBmYWxzZVxuXHRcdFx0XHRlbHNlIHJlbW92ZU5vZGUodm5vZGUsIGNvbnRleHQpXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIHJlbW92ZU5vZGUodm5vZGUsIGNvbnRleHQpIHtcblx0XHR2YXIgZXhwZWN0ZWQgPSAxLCBjYWxsZWQgPSAwXG5cdFx0aWYgKHZub2RlLmF0dHJzICYmIHR5cGVvZiB2bm9kZS5hdHRycy5vbmJlZm9yZXJlbW92ZSA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHR2YXIgcmVzdWx0ID0gdm5vZGUuYXR0cnMub25iZWZvcmVyZW1vdmUuY2FsbCh2bm9kZS5zdGF0ZSwgdm5vZGUpXG5cdFx0XHRpZiAocmVzdWx0ICE9IG51bGwgJiYgdHlwZW9mIHJlc3VsdC50aGVuID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0ZXhwZWN0ZWQrK1xuXHRcdFx0XHRyZXN1bHQudGhlbihjb250aW51YXRpb24sIGNvbnRpbnVhdGlvbilcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKHR5cGVvZiB2bm9kZS50YWcgIT09IFwic3RyaW5nXCIgJiYgdHlwZW9mIHZub2RlLl9zdGF0ZS5vbmJlZm9yZXJlbW92ZSA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHR2YXIgcmVzdWx0ID0gdm5vZGUuX3N0YXRlLm9uYmVmb3JlcmVtb3ZlLmNhbGwodm5vZGUuc3RhdGUsIHZub2RlKVxuXHRcdFx0aWYgKHJlc3VsdCAhPSBudWxsICYmIHR5cGVvZiByZXN1bHQudGhlbiA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdGV4cGVjdGVkKytcblx0XHRcdFx0cmVzdWx0LnRoZW4oY29udGludWF0aW9uLCBjb250aW51YXRpb24pXG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNvbnRpbnVhdGlvbigpXG5cdFx0ZnVuY3Rpb24gY29udGludWF0aW9uKCkge1xuXHRcdFx0aWYgKCsrY2FsbGVkID09PSBleHBlY3RlZCkge1xuXHRcdFx0XHRvbnJlbW92ZSh2bm9kZSlcblx0XHRcdFx0aWYgKHZub2RlLmRvbSkge1xuXHRcdFx0XHRcdHZhciBjb3VudDAgPSB2bm9kZS5kb21TaXplIHx8IDFcblx0XHRcdFx0XHRpZiAoY291bnQwID4gMSkge1xuXHRcdFx0XHRcdFx0dmFyIGRvbSA9IHZub2RlLmRvbVxuXHRcdFx0XHRcdFx0d2hpbGUgKC0tY291bnQwKSB7XG5cdFx0XHRcdFx0XHRcdHJlbW92ZU5vZGVGcm9tRE9NKGRvbS5uZXh0U2libGluZylcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmVtb3ZlTm9kZUZyb21ET00odm5vZGUuZG9tKVxuXHRcdFx0XHRcdGlmIChjb250ZXh0ICE9IG51bGwgJiYgdm5vZGUuZG9tU2l6ZSA9PSBudWxsICYmICFoYXNJbnRlZ3JhdGlvbk1ldGhvZHModm5vZGUuYXR0cnMpICYmIHR5cGVvZiB2bm9kZS50YWcgPT09IFwic3RyaW5nXCIpIHsgLy9UT0RPIHRlc3QgY3VzdG9tIGVsZW1lbnRzXG5cdFx0XHRcdFx0XHRpZiAoIWNvbnRleHQucG9vbCkgY29udGV4dC5wb29sID0gW3Zub2RlXVxuXHRcdFx0XHRcdFx0ZWxzZSBjb250ZXh0LnBvb2wucHVzaCh2bm9kZSlcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblx0ZnVuY3Rpb24gcmVtb3ZlTm9kZUZyb21ET00obm9kZSkge1xuXHRcdHZhciBwYXJlbnQgPSBub2RlLnBhcmVudE5vZGVcblx0XHRpZiAocGFyZW50ICE9IG51bGwpIHBhcmVudC5yZW1vdmVDaGlsZChub2RlKVxuXHR9XG5cdGZ1bmN0aW9uIG9ucmVtb3ZlKHZub2RlKSB7XG5cdFx0aWYgKHZub2RlLmF0dHJzICYmIHR5cGVvZiB2bm9kZS5hdHRycy5vbnJlbW92ZSA9PT0gXCJmdW5jdGlvblwiKSB2bm9kZS5hdHRycy5vbnJlbW92ZS5jYWxsKHZub2RlLnN0YXRlLCB2bm9kZSlcblx0XHRpZiAodHlwZW9mIHZub2RlLnRhZyAhPT0gXCJzdHJpbmdcIikge1xuXHRcdFx0aWYgKHR5cGVvZiB2bm9kZS5fc3RhdGUub25yZW1vdmUgPT09IFwiZnVuY3Rpb25cIikgdm5vZGUuX3N0YXRlLm9ucmVtb3ZlLmNhbGwodm5vZGUuc3RhdGUsIHZub2RlKVxuXHRcdFx0aWYgKHZub2RlLmluc3RhbmNlICE9IG51bGwpIG9ucmVtb3ZlKHZub2RlLmluc3RhbmNlKVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgY2hpbGRyZW4gPSB2bm9kZS5jaGlsZHJlblxuXHRcdFx0aWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHR2YXIgY2hpbGQgPSBjaGlsZHJlbltpXVxuXHRcdFx0XHRcdGlmIChjaGlsZCAhPSBudWxsKSBvbnJlbW92ZShjaGlsZClcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHQvL2F0dHJzMlxuXHRmdW5jdGlvbiBzZXRBdHRycyh2bm9kZSwgYXR0cnMyLCBucykge1xuXHRcdGZvciAodmFyIGtleTIgaW4gYXR0cnMyKSB7XG5cdFx0XHRzZXRBdHRyKHZub2RlLCBrZXkyLCBudWxsLCBhdHRyczJba2V5Ml0sIG5zKVxuXHRcdH1cblx0fVxuXHRmdW5jdGlvbiBzZXRBdHRyKHZub2RlLCBrZXkyLCBvbGQsIHZhbHVlLCBucykge1xuXHRcdHZhciBlbGVtZW50ID0gdm5vZGUuZG9tXG5cdFx0aWYgKGtleTIgPT09IFwia2V5XCIgfHwga2V5MiA9PT0gXCJpc1wiIHx8IChvbGQgPT09IHZhbHVlICYmICFpc0Zvcm1BdHRyaWJ1dGUodm5vZGUsIGtleTIpKSAmJiB0eXBlb2YgdmFsdWUgIT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIHZhbHVlID09PSBcInVuZGVmaW5lZFwiIHx8IGlzTGlmZWN5Y2xlTWV0aG9kKGtleTIpKSByZXR1cm5cblx0XHR2YXIgbnNMYXN0SW5kZXggPSBrZXkyLmluZGV4T2YoXCI6XCIpXG5cdFx0aWYgKG5zTGFzdEluZGV4ID4gLTEgJiYga2V5Mi5zdWJzdHIoMCwgbnNMYXN0SW5kZXgpID09PSBcInhsaW5rXCIpIHtcblx0XHRcdGVsZW1lbnQuc2V0QXR0cmlidXRlTlMoXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIsIGtleTIuc2xpY2UobnNMYXN0SW5kZXggKyAxKSwgdmFsdWUpXG5cdFx0fVxuXHRcdGVsc2UgaWYgKGtleTJbMF0gPT09IFwib1wiICYmIGtleTJbMV0gPT09IFwiblwiICYmIHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiKSB1cGRhdGVFdmVudCh2bm9kZSwga2V5MiwgdmFsdWUpXG5cdFx0ZWxzZSBpZiAoa2V5MiA9PT0gXCJzdHlsZVwiKSB1cGRhdGVTdHlsZShlbGVtZW50LCBvbGQsIHZhbHVlKVxuXHRcdGVsc2UgaWYgKGtleTIgaW4gZWxlbWVudCAmJiAhaXNBdHRyaWJ1dGUoa2V5MikgJiYgbnMgPT09IHVuZGVmaW5lZCAmJiAhaXNDdXN0b21FbGVtZW50KHZub2RlKSkge1xuXHRcdFx0aWYgKGtleTIgPT09IFwidmFsdWVcIikge1xuXHRcdFx0XHR2YXIgbm9ybWFsaXplZDAgPSBcIlwiICsgdmFsdWUgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1pbXBsaWNpdC1jb2VyY2lvblxuXHRcdFx0XHQvL3NldHRpbmcgaW5wdXRbdmFsdWVdIHRvIHNhbWUgdmFsdWUgYnkgdHlwaW5nIG9uIGZvY3VzZWQgZWxlbWVudCBtb3ZlcyBjdXJzb3IgdG8gZW5kIGluIENocm9tZVxuXHRcdFx0XHRpZiAoKHZub2RlLnRhZyA9PT0gXCJpbnB1dFwiIHx8IHZub2RlLnRhZyA9PT0gXCJ0ZXh0YXJlYVwiKSAmJiB2bm9kZS5kb20udmFsdWUgPT09IG5vcm1hbGl6ZWQwICYmIHZub2RlLmRvbSA9PT0gJGRvYy5hY3RpdmVFbGVtZW50KSByZXR1cm5cblx0XHRcdFx0Ly9zZXR0aW5nIHNlbGVjdFt2YWx1ZV0gdG8gc2FtZSB2YWx1ZSB3aGlsZSBoYXZpbmcgc2VsZWN0IG9wZW4gYmxpbmtzIHNlbGVjdCBkcm9wZG93biBpbiBDaHJvbWVcblx0XHRcdFx0aWYgKHZub2RlLnRhZyA9PT0gXCJzZWxlY3RcIikge1xuXHRcdFx0XHRcdGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0aWYgKHZub2RlLmRvbS5zZWxlY3RlZEluZGV4ID09PSAtMSAmJiB2bm9kZS5kb20gPT09ICRkb2MuYWN0aXZlRWxlbWVudCkgcmV0dXJuXG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGlmIChvbGQgIT09IG51bGwgJiYgdm5vZGUuZG9tLnZhbHVlID09PSBub3JtYWxpemVkMCAmJiB2bm9kZS5kb20gPT09ICRkb2MuYWN0aXZlRWxlbWVudCkgcmV0dXJuXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdC8vc2V0dGluZyBvcHRpb25bdmFsdWVdIHRvIHNhbWUgdmFsdWUgd2hpbGUgaGF2aW5nIHNlbGVjdCBvcGVuIGJsaW5rcyBzZWxlY3QgZHJvcGRvd24gaW4gQ2hyb21lXG5cdFx0XHRcdGlmICh2bm9kZS50YWcgPT09IFwib3B0aW9uXCIgJiYgb2xkICE9IG51bGwgJiYgdm5vZGUuZG9tLnZhbHVlID09PSBub3JtYWxpemVkMCkgcmV0dXJuXG5cdFx0XHR9XG5cdFx0XHQvLyBJZiB5b3UgYXNzaWduIGFuIGlucHV0IHR5cGUxIHRoYXQgaXMgbm90IHN1cHBvcnRlZCBieSBJRSAxMSB3aXRoIGFuIGFzc2lnbm1lbnQgZXhwcmVzc2lvbiwgYW4gZXJyb3IwIHdpbGwgb2NjdXIuXG5cdFx0XHRpZiAodm5vZGUudGFnID09PSBcImlucHV0XCIgJiYga2V5MiA9PT0gXCJ0eXBlXCIpIHtcblx0XHRcdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5MiwgdmFsdWUpXG5cdFx0XHRcdHJldHVyblxuXHRcdFx0fVxuXHRcdFx0ZWxlbWVudFtrZXkyXSA9IHZhbHVlXG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJib29sZWFuXCIpIHtcblx0XHRcdFx0aWYgKHZhbHVlKSBlbGVtZW50LnNldEF0dHJpYnV0ZShrZXkyLCBcIlwiKVxuXHRcdFx0XHRlbHNlIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGtleTIpXG5cdFx0XHR9XG5cdFx0XHRlbHNlIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleTIgPT09IFwiY2xhc3NOYW1lXCIgPyBcImNsYXNzXCIgOiBrZXkyLCB2YWx1ZSlcblx0XHR9XG5cdH1cblx0ZnVuY3Rpb24gc2V0TGF0ZUF0dHJzKHZub2RlKSB7XG5cdFx0dmFyIGF0dHJzMiA9IHZub2RlLmF0dHJzXG5cdFx0aWYgKHZub2RlLnRhZyA9PT0gXCJzZWxlY3RcIiAmJiBhdHRyczIgIT0gbnVsbCkge1xuXHRcdFx0aWYgKFwidmFsdWVcIiBpbiBhdHRyczIpIHNldEF0dHIodm5vZGUsIFwidmFsdWVcIiwgbnVsbCwgYXR0cnMyLnZhbHVlLCB1bmRlZmluZWQpXG5cdFx0XHRpZiAoXCJzZWxlY3RlZEluZGV4XCIgaW4gYXR0cnMyKSBzZXRBdHRyKHZub2RlLCBcInNlbGVjdGVkSW5kZXhcIiwgbnVsbCwgYXR0cnMyLnNlbGVjdGVkSW5kZXgsIHVuZGVmaW5lZClcblx0XHR9XG5cdH1cblx0ZnVuY3Rpb24gdXBkYXRlQXR0cnModm5vZGUsIG9sZCwgYXR0cnMyLCBucykge1xuXHRcdGlmIChhdHRyczIgIT0gbnVsbCkge1xuXHRcdFx0Zm9yICh2YXIga2V5MiBpbiBhdHRyczIpIHtcblx0XHRcdFx0c2V0QXR0cih2bm9kZSwga2V5Miwgb2xkICYmIG9sZFtrZXkyXSwgYXR0cnMyW2tleTJdLCBucylcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKG9sZCAhPSBudWxsKSB7XG5cdFx0XHRmb3IgKHZhciBrZXkyIGluIG9sZCkge1xuXHRcdFx0XHRpZiAoYXR0cnMyID09IG51bGwgfHwgIShrZXkyIGluIGF0dHJzMikpIHtcblx0XHRcdFx0XHRpZiAoa2V5MiA9PT0gXCJjbGFzc05hbWVcIikga2V5MiA9IFwiY2xhc3NcIlxuXHRcdFx0XHRcdGlmIChrZXkyWzBdID09PSBcIm9cIiAmJiBrZXkyWzFdID09PSBcIm5cIiAmJiAhaXNMaWZlY3ljbGVNZXRob2Qoa2V5MikpIHVwZGF0ZUV2ZW50KHZub2RlLCBrZXkyLCB1bmRlZmluZWQpXG5cdFx0XHRcdFx0ZWxzZSBpZiAoa2V5MiAhPT0gXCJrZXlcIikgdm5vZGUuZG9tLnJlbW92ZUF0dHJpYnV0ZShrZXkyKVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIGlzRm9ybUF0dHJpYnV0ZSh2bm9kZSwgYXR0cikge1xuXHRcdHJldHVybiBhdHRyID09PSBcInZhbHVlXCIgfHwgYXR0ciA9PT0gXCJjaGVja2VkXCIgfHwgYXR0ciA9PT0gXCJzZWxlY3RlZEluZGV4XCIgfHwgYXR0ciA9PT0gXCJzZWxlY3RlZFwiICYmIHZub2RlLmRvbSA9PT0gJGRvYy5hY3RpdmVFbGVtZW50XG5cdH1cblx0ZnVuY3Rpb24gaXNMaWZlY3ljbGVNZXRob2QoYXR0cikge1xuXHRcdHJldHVybiBhdHRyID09PSBcIm9uaW5pdFwiIHx8IGF0dHIgPT09IFwib25jcmVhdGVcIiB8fCBhdHRyID09PSBcIm9udXBkYXRlXCIgfHwgYXR0ciA9PT0gXCJvbnJlbW92ZVwiIHx8IGF0dHIgPT09IFwib25iZWZvcmVyZW1vdmVcIiB8fCBhdHRyID09PSBcIm9uYmVmb3JldXBkYXRlXCJcblx0fVxuXHRmdW5jdGlvbiBpc0F0dHJpYnV0ZShhdHRyKSB7XG5cdFx0cmV0dXJuIGF0dHIgPT09IFwiaHJlZlwiIHx8IGF0dHIgPT09IFwibGlzdFwiIHx8IGF0dHIgPT09IFwiZm9ybVwiIHx8IGF0dHIgPT09IFwid2lkdGhcIiB8fCBhdHRyID09PSBcImhlaWdodFwiLy8gfHwgYXR0ciA9PT0gXCJ0eXBlXCJcblx0fVxuXHRmdW5jdGlvbiBpc0N1c3RvbUVsZW1lbnQodm5vZGUpe1xuXHRcdHJldHVybiB2bm9kZS5hdHRycy5pcyB8fCB2bm9kZS50YWcuaW5kZXhPZihcIi1cIikgPiAtMVxuXHR9XG5cdGZ1bmN0aW9uIGhhc0ludGVncmF0aW9uTWV0aG9kcyhzb3VyY2UpIHtcblx0XHRyZXR1cm4gc291cmNlICE9IG51bGwgJiYgKHNvdXJjZS5vbmNyZWF0ZSB8fCBzb3VyY2Uub251cGRhdGUgfHwgc291cmNlLm9uYmVmb3JlcmVtb3ZlIHx8IHNvdXJjZS5vbnJlbW92ZSlcblx0fVxuXHQvL3N0eWxlXG5cdGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKGVsZW1lbnQsIG9sZCwgc3R5bGUpIHtcblx0XHRpZiAob2xkID09PSBzdHlsZSkgZWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gXCJcIiwgb2xkID0gbnVsbFxuXHRcdGlmIChzdHlsZSA9PSBudWxsKSBlbGVtZW50LnN0eWxlLmNzc1RleHQgPSBcIlwiXG5cdFx0ZWxzZSBpZiAodHlwZW9mIHN0eWxlID09PSBcInN0cmluZ1wiKSBlbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZVxuXHRcdGVsc2Uge1xuXHRcdFx0aWYgKHR5cGVvZiBvbGQgPT09IFwic3RyaW5nXCIpIGVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IFwiXCJcblx0XHRcdGZvciAodmFyIGtleTIgaW4gc3R5bGUpIHtcblx0XHRcdFx0ZWxlbWVudC5zdHlsZVtrZXkyXSA9IHN0eWxlW2tleTJdXG5cdFx0XHR9XG5cdFx0XHRpZiAob2xkICE9IG51bGwgJiYgdHlwZW9mIG9sZCAhPT0gXCJzdHJpbmdcIikge1xuXHRcdFx0XHRmb3IgKHZhciBrZXkyIGluIG9sZCkge1xuXHRcdFx0XHRcdGlmICghKGtleTIgaW4gc3R5bGUpKSBlbGVtZW50LnN0eWxlW2tleTJdID0gXCJcIlxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdC8vZXZlbnRcblx0ZnVuY3Rpb24gdXBkYXRlRXZlbnQodm5vZGUsIGtleTIsIHZhbHVlKSB7XG5cdFx0dmFyIGVsZW1lbnQgPSB2bm9kZS5kb21cblx0XHR2YXIgY2FsbGJhY2sgPSB0eXBlb2Ygb25ldmVudCAhPT0gXCJmdW5jdGlvblwiID8gdmFsdWUgOiBmdW5jdGlvbihlKSB7XG5cdFx0XHR2YXIgcmVzdWx0ID0gdmFsdWUuY2FsbChlbGVtZW50LCBlKVxuXHRcdFx0b25ldmVudC5jYWxsKGVsZW1lbnQsIGUpXG5cdFx0XHRyZXR1cm4gcmVzdWx0XG5cdFx0fVxuXHRcdGlmIChrZXkyIGluIGVsZW1lbnQpIGVsZW1lbnRba2V5Ml0gPSB0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIiA/IGNhbGxiYWNrIDogbnVsbFxuXHRcdGVsc2Uge1xuXHRcdFx0dmFyIGV2ZW50TmFtZSA9IGtleTIuc2xpY2UoMilcblx0XHRcdGlmICh2bm9kZS5ldmVudHMgPT09IHVuZGVmaW5lZCkgdm5vZGUuZXZlbnRzID0ge31cblx0XHRcdGlmICh2bm9kZS5ldmVudHNba2V5Ml0gPT09IGNhbGxiYWNrKSByZXR1cm5cblx0XHRcdGlmICh2bm9kZS5ldmVudHNba2V5Ml0gIT0gbnVsbCkgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgdm5vZGUuZXZlbnRzW2tleTJdLCBmYWxzZSlcblx0XHRcdGlmICh0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHR2bm9kZS5ldmVudHNba2V5Ml0gPSBjYWxsYmFja1xuXHRcdFx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCB2bm9kZS5ldmVudHNba2V5Ml0sIGZhbHNlKVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHQvL2xpZmVjeWNsZVxuXHRmdW5jdGlvbiBpbml0TGlmZWN5Y2xlKHNvdXJjZSwgdm5vZGUsIGhvb2tzKSB7XG5cdFx0aWYgKHR5cGVvZiBzb3VyY2Uub25pbml0ID09PSBcImZ1bmN0aW9uXCIpIHNvdXJjZS5vbmluaXQuY2FsbCh2bm9kZS5zdGF0ZSwgdm5vZGUpXG5cdFx0aWYgKHR5cGVvZiBzb3VyY2Uub25jcmVhdGUgPT09IFwiZnVuY3Rpb25cIikgaG9va3MucHVzaChzb3VyY2Uub25jcmVhdGUuYmluZCh2bm9kZS5zdGF0ZSwgdm5vZGUpKVxuXHR9XG5cdGZ1bmN0aW9uIHVwZGF0ZUxpZmVjeWNsZShzb3VyY2UsIHZub2RlLCBob29rcykge1xuXHRcdGlmICh0eXBlb2Ygc291cmNlLm9udXBkYXRlID09PSBcImZ1bmN0aW9uXCIpIGhvb2tzLnB1c2goc291cmNlLm9udXBkYXRlLmJpbmQodm5vZGUuc3RhdGUsIHZub2RlKSlcblx0fVxuXHRmdW5jdGlvbiBzaG91bGROb3RVcGRhdGUodm5vZGUsIG9sZCkge1xuXHRcdHZhciBmb3JjZVZub2RlVXBkYXRlLCBmb3JjZUNvbXBvbmVudFVwZGF0ZVxuXHRcdGlmICh2bm9kZS5hdHRycyAhPSBudWxsICYmIHR5cGVvZiB2bm9kZS5hdHRycy5vbmJlZm9yZXVwZGF0ZSA9PT0gXCJmdW5jdGlvblwiKSBmb3JjZVZub2RlVXBkYXRlID0gdm5vZGUuYXR0cnMub25iZWZvcmV1cGRhdGUuY2FsbCh2bm9kZS5zdGF0ZSwgdm5vZGUsIG9sZClcblx0XHRpZiAodHlwZW9mIHZub2RlLnRhZyAhPT0gXCJzdHJpbmdcIiAmJiB0eXBlb2Ygdm5vZGUuX3N0YXRlLm9uYmVmb3JldXBkYXRlID09PSBcImZ1bmN0aW9uXCIpIGZvcmNlQ29tcG9uZW50VXBkYXRlID0gdm5vZGUuX3N0YXRlLm9uYmVmb3JldXBkYXRlLmNhbGwodm5vZGUuc3RhdGUsIHZub2RlLCBvbGQpXG5cdFx0aWYgKCEoZm9yY2VWbm9kZVVwZGF0ZSA9PT0gdW5kZWZpbmVkICYmIGZvcmNlQ29tcG9uZW50VXBkYXRlID09PSB1bmRlZmluZWQpICYmICFmb3JjZVZub2RlVXBkYXRlICYmICFmb3JjZUNvbXBvbmVudFVwZGF0ZSkge1xuXHRcdFx0dm5vZGUuZG9tID0gb2xkLmRvbVxuXHRcdFx0dm5vZGUuZG9tU2l6ZSA9IG9sZC5kb21TaXplXG5cdFx0XHR2bm9kZS5pbnN0YW5jZSA9IG9sZC5pbnN0YW5jZVxuXHRcdFx0cmV0dXJuIHRydWVcblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlXG5cdH1cblx0ZnVuY3Rpb24gcmVuZGVyKGRvbSwgdm5vZGVzKSB7XG5cdFx0aWYgKCFkb20pIHRocm93IG5ldyBFcnJvcihcIkVuc3VyZSB0aGUgRE9NIGVsZW1lbnQgYmVpbmcgcGFzc2VkIHRvIG0ucm91dGUvbS5tb3VudC9tLnJlbmRlciBpcyBub3QgdW5kZWZpbmVkLlwiKVxuXHRcdHZhciBob29rcyA9IFtdXG5cdFx0dmFyIGFjdGl2ZSA9ICRkb2MuYWN0aXZlRWxlbWVudFxuXHRcdHZhciBuYW1lc3BhY2UgPSBkb20ubmFtZXNwYWNlVVJJXG5cdFx0Ly8gRmlyc3QgdGltZTAgcmVuZGVyaW5nIGludG8gYSBub2RlIGNsZWFycyBpdCBvdXRcblx0XHRpZiAoZG9tLnZub2RlcyA9PSBudWxsKSBkb20udGV4dENvbnRlbnQgPSBcIlwiXG5cdFx0aWYgKCFBcnJheS5pc0FycmF5KHZub2RlcykpIHZub2RlcyA9IFt2bm9kZXNdXG5cdFx0dXBkYXRlTm9kZXMoZG9tLCBkb20udm5vZGVzLCBWbm9kZS5ub3JtYWxpemVDaGlsZHJlbih2bm9kZXMpLCBmYWxzZSwgaG9va3MsIG51bGwsIG5hbWVzcGFjZSA9PT0gXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCIgPyB1bmRlZmluZWQgOiBuYW1lc3BhY2UpXG5cdFx0ZG9tLnZub2RlcyA9IHZub2Rlc1xuXHRcdC8vIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgY2FuIHJldHVybiBudWxsIGluIElFIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9Eb2N1bWVudC9hY3RpdmVFbGVtZW50XG5cdFx0aWYgKGFjdGl2ZSAhPSBudWxsICYmICRkb2MuYWN0aXZlRWxlbWVudCAhPT0gYWN0aXZlKSBhY3RpdmUuZm9jdXMoKVxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgaG9va3MubGVuZ3RoOyBpKyspIGhvb2tzW2ldKClcblx0fVxuXHRyZXR1cm4ge3JlbmRlcjogcmVuZGVyLCBzZXRFdmVudENhbGxiYWNrOiBzZXRFdmVudENhbGxiYWNrfVxufVxuZnVuY3Rpb24gdGhyb3R0bGUoY2FsbGJhY2spIHtcblx0Ly82MGZwcyB0cmFuc2xhdGVzIHRvIDE2LjZtcywgcm91bmQgaXQgZG93biBzaW5jZSBzZXRUaW1lb3V0IHJlcXVpcmVzIGludFxuXHR2YXIgdGltZSA9IDE2XG5cdHZhciBsYXN0ID0gMCwgcGVuZGluZyA9IG51bGxcblx0dmFyIHRpbWVvdXQgPSB0eXBlb2YgcmVxdWVzdEFuaW1hdGlvbkZyYW1lID09PSBcImZ1bmN0aW9uXCIgPyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgOiBzZXRUaW1lb3V0XG5cdHJldHVybiBmdW5jdGlvbigpIHtcblx0XHR2YXIgbm93ID0gRGF0ZS5ub3coKVxuXHRcdGlmIChsYXN0ID09PSAwIHx8IG5vdyAtIGxhc3QgPj0gdGltZSkge1xuXHRcdFx0bGFzdCA9IG5vd1xuXHRcdFx0Y2FsbGJhY2soKVxuXHRcdH1cblx0XHRlbHNlIGlmIChwZW5kaW5nID09PSBudWxsKSB7XG5cdFx0XHRwZW5kaW5nID0gdGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0cGVuZGluZyA9IG51bGxcblx0XHRcdFx0Y2FsbGJhY2soKVxuXHRcdFx0XHRsYXN0ID0gRGF0ZS5ub3coKVxuXHRcdFx0fSwgdGltZSAtIChub3cgLSBsYXN0KSlcblx0XHR9XG5cdH1cbn1cbnZhciBfMTEgPSBmdW5jdGlvbigkd2luZG93KSB7XG5cdHZhciByZW5kZXJTZXJ2aWNlID0gY29yZVJlbmRlcmVyKCR3aW5kb3cpXG5cdHJlbmRlclNlcnZpY2Uuc2V0RXZlbnRDYWxsYmFjayhmdW5jdGlvbihlKSB7XG5cdFx0aWYgKGUucmVkcmF3ID09PSBmYWxzZSkgZS5yZWRyYXcgPSB1bmRlZmluZWRcblx0XHRlbHNlIHJlZHJhdygpXG5cdH0pXG5cdHZhciBjYWxsYmFja3MgPSBbXVxuXHRmdW5jdGlvbiBzdWJzY3JpYmUoa2V5MSwgY2FsbGJhY2spIHtcblx0XHR1bnN1YnNjcmliZShrZXkxKVxuXHRcdGNhbGxiYWNrcy5wdXNoKGtleTEsIHRocm90dGxlKGNhbGxiYWNrKSlcblx0fVxuXHRmdW5jdGlvbiB1bnN1YnNjcmliZShrZXkxKSB7XG5cdFx0dmFyIGluZGV4ID0gY2FsbGJhY2tzLmluZGV4T2Yoa2V5MSlcblx0XHRpZiAoaW5kZXggPiAtMSkgY2FsbGJhY2tzLnNwbGljZShpbmRleCwgMilcblx0fVxuXHRmdW5jdGlvbiByZWRyYXcoKSB7XG5cdFx0Zm9yICh2YXIgaSA9IDE7IGkgPCBjYWxsYmFja3MubGVuZ3RoOyBpICs9IDIpIHtcblx0XHRcdGNhbGxiYWNrc1tpXSgpXG5cdFx0fVxuXHR9XG5cdHJldHVybiB7c3Vic2NyaWJlOiBzdWJzY3JpYmUsIHVuc3Vic2NyaWJlOiB1bnN1YnNjcmliZSwgcmVkcmF3OiByZWRyYXcsIHJlbmRlcjogcmVuZGVyU2VydmljZS5yZW5kZXJ9XG59XG52YXIgcmVkcmF3U2VydmljZSA9IF8xMSh3aW5kb3cpXG5yZXF1ZXN0U2VydmljZS5zZXRDb21wbGV0aW9uQ2FsbGJhY2socmVkcmF3U2VydmljZS5yZWRyYXcpXG52YXIgXzE2ID0gZnVuY3Rpb24ocmVkcmF3U2VydmljZTApIHtcblx0cmV0dXJuIGZ1bmN0aW9uKHJvb3QsIGNvbXBvbmVudCkge1xuXHRcdGlmIChjb21wb25lbnQgPT09IG51bGwpIHtcblx0XHRcdHJlZHJhd1NlcnZpY2UwLnJlbmRlcihyb290LCBbXSlcblx0XHRcdHJlZHJhd1NlcnZpY2UwLnVuc3Vic2NyaWJlKHJvb3QpXG5cdFx0XHRyZXR1cm5cblx0XHR9XG5cdFx0XG5cdFx0aWYgKGNvbXBvbmVudC52aWV3ID09IG51bGwgJiYgdHlwZW9mIGNvbXBvbmVudCAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgRXJyb3IoXCJtLm1vdW50KGVsZW1lbnQsIGNvbXBvbmVudCkgZXhwZWN0cyBhIGNvbXBvbmVudCwgbm90IGEgdm5vZGVcIilcblx0XHRcblx0XHR2YXIgcnVuMCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmVkcmF3U2VydmljZTAucmVuZGVyKHJvb3QsIFZub2RlKGNvbXBvbmVudCkpXG5cdFx0fVxuXHRcdHJlZHJhd1NlcnZpY2UwLnN1YnNjcmliZShyb290LCBydW4wKVxuXHRcdHJlZHJhd1NlcnZpY2UwLnJlZHJhdygpXG5cdH1cbn1cbm0ubW91bnQgPSBfMTYocmVkcmF3U2VydmljZSlcbnZhciBQcm9taXNlID0gUHJvbWlzZVBvbHlmaWxsXG52YXIgcGFyc2VRdWVyeVN0cmluZyA9IGZ1bmN0aW9uKHN0cmluZykge1xuXHRpZiAoc3RyaW5nID09PSBcIlwiIHx8IHN0cmluZyA9PSBudWxsKSByZXR1cm4ge31cblx0aWYgKHN0cmluZy5jaGFyQXQoMCkgPT09IFwiP1wiKSBzdHJpbmcgPSBzdHJpbmcuc2xpY2UoMSlcblx0dmFyIGVudHJpZXMgPSBzdHJpbmcuc3BsaXQoXCImXCIpLCBkYXRhMCA9IHt9LCBjb3VudGVycyA9IHt9XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZW50cmllcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBlbnRyeSA9IGVudHJpZXNbaV0uc3BsaXQoXCI9XCIpXG5cdFx0dmFyIGtleTUgPSBkZWNvZGVVUklDb21wb25lbnQoZW50cnlbMF0pXG5cdFx0dmFyIHZhbHVlID0gZW50cnkubGVuZ3RoID09PSAyID8gZGVjb2RlVVJJQ29tcG9uZW50KGVudHJ5WzFdKSA6IFwiXCJcblx0XHRpZiAodmFsdWUgPT09IFwidHJ1ZVwiKSB2YWx1ZSA9IHRydWVcblx0XHRlbHNlIGlmICh2YWx1ZSA9PT0gXCJmYWxzZVwiKSB2YWx1ZSA9IGZhbHNlXG5cdFx0dmFyIGxldmVscyA9IGtleTUuc3BsaXQoL1xcXVxcWz98XFxbLylcblx0XHR2YXIgY3Vyc29yID0gZGF0YTBcblx0XHRpZiAoa2V5NS5pbmRleE9mKFwiW1wiKSA+IC0xKSBsZXZlbHMucG9wKClcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGxldmVscy5sZW5ndGg7IGorKykge1xuXHRcdFx0dmFyIGxldmVsID0gbGV2ZWxzW2pdLCBuZXh0TGV2ZWwgPSBsZXZlbHNbaiArIDFdXG5cdFx0XHR2YXIgaXNOdW1iZXIgPSBuZXh0TGV2ZWwgPT0gXCJcIiB8fCAhaXNOYU4ocGFyc2VJbnQobmV4dExldmVsLCAxMCkpXG5cdFx0XHR2YXIgaXNWYWx1ZSA9IGogPT09IGxldmVscy5sZW5ndGggLSAxXG5cdFx0XHRpZiAobGV2ZWwgPT09IFwiXCIpIHtcblx0XHRcdFx0dmFyIGtleTUgPSBsZXZlbHMuc2xpY2UoMCwgaikuam9pbigpXG5cdFx0XHRcdGlmIChjb3VudGVyc1trZXk1XSA9PSBudWxsKSBjb3VudGVyc1trZXk1XSA9IDBcblx0XHRcdFx0bGV2ZWwgPSBjb3VudGVyc1trZXk1XSsrXG5cdFx0XHR9XG5cdFx0XHRpZiAoY3Vyc29yW2xldmVsXSA9PSBudWxsKSB7XG5cdFx0XHRcdGN1cnNvcltsZXZlbF0gPSBpc1ZhbHVlID8gdmFsdWUgOiBpc051bWJlciA/IFtdIDoge31cblx0XHRcdH1cblx0XHRcdGN1cnNvciA9IGN1cnNvcltsZXZlbF1cblx0XHR9XG5cdH1cblx0cmV0dXJuIGRhdGEwXG59XG52YXIgY29yZVJvdXRlciA9IGZ1bmN0aW9uKCR3aW5kb3cpIHtcblx0dmFyIHN1cHBvcnRzUHVzaFN0YXRlID0gdHlwZW9mICR3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUgPT09IFwiZnVuY3Rpb25cIlxuXHR2YXIgY2FsbEFzeW5jMCA9IHR5cGVvZiBzZXRJbW1lZGlhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHNldEltbWVkaWF0ZSA6IHNldFRpbWVvdXRcblx0ZnVuY3Rpb24gbm9ybWFsaXplMShmcmFnbWVudDApIHtcblx0XHR2YXIgZGF0YSA9ICR3aW5kb3cubG9jYXRpb25bZnJhZ21lbnQwXS5yZXBsYWNlKC8oPzolW2EtZjg5XVthLWYwLTldKSsvZ2ltLCBkZWNvZGVVUklDb21wb25lbnQpXG5cdFx0aWYgKGZyYWdtZW50MCA9PT0gXCJwYXRobmFtZVwiICYmIGRhdGFbMF0gIT09IFwiL1wiKSBkYXRhID0gXCIvXCIgKyBkYXRhXG5cdFx0cmV0dXJuIGRhdGFcblx0fVxuXHR2YXIgYXN5bmNJZFxuXHRmdW5jdGlvbiBkZWJvdW5jZUFzeW5jKGNhbGxiYWNrMCkge1xuXHRcdHJldHVybiBmdW5jdGlvbigpIHtcblx0XHRcdGlmIChhc3luY0lkICE9IG51bGwpIHJldHVyblxuXHRcdFx0YXN5bmNJZCA9IGNhbGxBc3luYzAoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGFzeW5jSWQgPSBudWxsXG5cdFx0XHRcdGNhbGxiYWNrMCgpXG5cdFx0XHR9KVxuXHRcdH1cblx0fVxuXHRmdW5jdGlvbiBwYXJzZVBhdGgocGF0aCwgcXVlcnlEYXRhLCBoYXNoRGF0YSkge1xuXHRcdHZhciBxdWVyeUluZGV4ID0gcGF0aC5pbmRleE9mKFwiP1wiKVxuXHRcdHZhciBoYXNoSW5kZXggPSBwYXRoLmluZGV4T2YoXCIjXCIpXG5cdFx0dmFyIHBhdGhFbmQgPSBxdWVyeUluZGV4ID4gLTEgPyBxdWVyeUluZGV4IDogaGFzaEluZGV4ID4gLTEgPyBoYXNoSW5kZXggOiBwYXRoLmxlbmd0aFxuXHRcdGlmIChxdWVyeUluZGV4ID4gLTEpIHtcblx0XHRcdHZhciBxdWVyeUVuZCA9IGhhc2hJbmRleCA+IC0xID8gaGFzaEluZGV4IDogcGF0aC5sZW5ndGhcblx0XHRcdHZhciBxdWVyeVBhcmFtcyA9IHBhcnNlUXVlcnlTdHJpbmcocGF0aC5zbGljZShxdWVyeUluZGV4ICsgMSwgcXVlcnlFbmQpKVxuXHRcdFx0Zm9yICh2YXIga2V5NCBpbiBxdWVyeVBhcmFtcykgcXVlcnlEYXRhW2tleTRdID0gcXVlcnlQYXJhbXNba2V5NF1cblx0XHR9XG5cdFx0aWYgKGhhc2hJbmRleCA+IC0xKSB7XG5cdFx0XHR2YXIgaGFzaFBhcmFtcyA9IHBhcnNlUXVlcnlTdHJpbmcocGF0aC5zbGljZShoYXNoSW5kZXggKyAxKSlcblx0XHRcdGZvciAodmFyIGtleTQgaW4gaGFzaFBhcmFtcykgaGFzaERhdGFba2V5NF0gPSBoYXNoUGFyYW1zW2tleTRdXG5cdFx0fVxuXHRcdHJldHVybiBwYXRoLnNsaWNlKDAsIHBhdGhFbmQpXG5cdH1cblx0dmFyIHJvdXRlciA9IHtwcmVmaXg6IFwiIyFcIn1cblx0cm91dGVyLmdldFBhdGggPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgdHlwZTIgPSByb3V0ZXIucHJlZml4LmNoYXJBdCgwKVxuXHRcdHN3aXRjaCAodHlwZTIpIHtcblx0XHRcdGNhc2UgXCIjXCI6IHJldHVybiBub3JtYWxpemUxKFwiaGFzaFwiKS5zbGljZShyb3V0ZXIucHJlZml4Lmxlbmd0aClcblx0XHRcdGNhc2UgXCI/XCI6IHJldHVybiBub3JtYWxpemUxKFwic2VhcmNoXCIpLnNsaWNlKHJvdXRlci5wcmVmaXgubGVuZ3RoKSArIG5vcm1hbGl6ZTEoXCJoYXNoXCIpXG5cdFx0XHRkZWZhdWx0OiByZXR1cm4gbm9ybWFsaXplMShcInBhdGhuYW1lXCIpLnNsaWNlKHJvdXRlci5wcmVmaXgubGVuZ3RoKSArIG5vcm1hbGl6ZTEoXCJzZWFyY2hcIikgKyBub3JtYWxpemUxKFwiaGFzaFwiKVxuXHRcdH1cblx0fVxuXHRyb3V0ZXIuc2V0UGF0aCA9IGZ1bmN0aW9uKHBhdGgsIGRhdGEsIG9wdGlvbnMpIHtcblx0XHR2YXIgcXVlcnlEYXRhID0ge30sIGhhc2hEYXRhID0ge31cblx0XHRwYXRoID0gcGFyc2VQYXRoKHBhdGgsIHF1ZXJ5RGF0YSwgaGFzaERhdGEpXG5cdFx0aWYgKGRhdGEgIT0gbnVsbCkge1xuXHRcdFx0Zm9yICh2YXIga2V5NCBpbiBkYXRhKSBxdWVyeURhdGFba2V5NF0gPSBkYXRhW2tleTRdXG5cdFx0XHRwYXRoID0gcGF0aC5yZXBsYWNlKC86KFteXFwvXSspL2csIGZ1bmN0aW9uKG1hdGNoMiwgdG9rZW4pIHtcblx0XHRcdFx0ZGVsZXRlIHF1ZXJ5RGF0YVt0b2tlbl1cblx0XHRcdFx0cmV0dXJuIGRhdGFbdG9rZW5dXG5cdFx0XHR9KVxuXHRcdH1cblx0XHR2YXIgcXVlcnkgPSBidWlsZFF1ZXJ5U3RyaW5nKHF1ZXJ5RGF0YSlcblx0XHRpZiAocXVlcnkpIHBhdGggKz0gXCI/XCIgKyBxdWVyeVxuXHRcdHZhciBoYXNoID0gYnVpbGRRdWVyeVN0cmluZyhoYXNoRGF0YSlcblx0XHRpZiAoaGFzaCkgcGF0aCArPSBcIiNcIiArIGhhc2hcblx0XHRpZiAoc3VwcG9ydHNQdXNoU3RhdGUpIHtcblx0XHRcdHZhciBzdGF0ZSA9IG9wdGlvbnMgPyBvcHRpb25zLnN0YXRlIDogbnVsbFxuXHRcdFx0dmFyIHRpdGxlID0gb3B0aW9ucyA/IG9wdGlvbnMudGl0bGUgOiBudWxsXG5cdFx0XHQkd2luZG93Lm9ucG9wc3RhdGUoKVxuXHRcdFx0aWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5yZXBsYWNlKSAkd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKHN0YXRlLCB0aXRsZSwgcm91dGVyLnByZWZpeCArIHBhdGgpXG5cdFx0XHRlbHNlICR3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoc3RhdGUsIHRpdGxlLCByb3V0ZXIucHJlZml4ICsgcGF0aClcblx0XHR9XG5cdFx0ZWxzZSAkd2luZG93LmxvY2F0aW9uLmhyZWYgPSByb3V0ZXIucHJlZml4ICsgcGF0aFxuXHR9XG5cdHJvdXRlci5kZWZpbmVSb3V0ZXMgPSBmdW5jdGlvbihyb3V0ZXMsIHJlc29sdmUsIHJlamVjdCkge1xuXHRcdGZ1bmN0aW9uIHJlc29sdmVSb3V0ZSgpIHtcblx0XHRcdHZhciBwYXRoID0gcm91dGVyLmdldFBhdGgoKVxuXHRcdFx0dmFyIHBhcmFtcyA9IHt9XG5cdFx0XHR2YXIgcGF0aG5hbWUgPSBwYXJzZVBhdGgocGF0aCwgcGFyYW1zLCBwYXJhbXMpXG5cdFx0XHR2YXIgc3RhdGUgPSAkd2luZG93Lmhpc3Rvcnkuc3RhdGVcblx0XHRcdGlmIChzdGF0ZSAhPSBudWxsKSB7XG5cdFx0XHRcdGZvciAodmFyIGsgaW4gc3RhdGUpIHBhcmFtc1trXSA9IHN0YXRlW2tdXG5cdFx0XHR9XG5cdFx0XHRmb3IgKHZhciByb3V0ZTAgaW4gcm91dGVzKSB7XG5cdFx0XHRcdHZhciBtYXRjaGVyID0gbmV3IFJlZ0V4cChcIl5cIiArIHJvdXRlMC5yZXBsYWNlKC86W15cXC9dKz9cXC57M30vZywgXCIoLio/KVwiKS5yZXBsYWNlKC86W15cXC9dKy9nLCBcIihbXlxcXFwvXSspXCIpICsgXCJcXC8/JFwiKVxuXHRcdFx0XHRpZiAobWF0Y2hlci50ZXN0KHBhdGhuYW1lKSkge1xuXHRcdFx0XHRcdHBhdGhuYW1lLnJlcGxhY2UobWF0Y2hlciwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHR2YXIga2V5cyA9IHJvdXRlMC5tYXRjaCgvOlteXFwvXSsvZykgfHwgW11cblx0XHRcdFx0XHRcdHZhciB2YWx1ZXMgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSwgLTIpXG5cdFx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRcdFx0cGFyYW1zW2tleXNbaV0ucmVwbGFjZSgvOnxcXC4vZywgXCJcIildID0gZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlc1tpXSlcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHJlc29sdmUocm91dGVzW3JvdXRlMF0sIHBhcmFtcywgcGF0aCwgcm91dGUwKVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0cmV0dXJuXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJlamVjdChwYXRoLCBwYXJhbXMpXG5cdFx0fVxuXHRcdGlmIChzdXBwb3J0c1B1c2hTdGF0ZSkgJHdpbmRvdy5vbnBvcHN0YXRlID0gZGVib3VuY2VBc3luYyhyZXNvbHZlUm91dGUpXG5cdFx0ZWxzZSBpZiAocm91dGVyLnByZWZpeC5jaGFyQXQoMCkgPT09IFwiI1wiKSAkd2luZG93Lm9uaGFzaGNoYW5nZSA9IHJlc29sdmVSb3V0ZVxuXHRcdHJlc29sdmVSb3V0ZSgpXG5cdH1cblx0cmV0dXJuIHJvdXRlclxufVxudmFyIF8yMCA9IGZ1bmN0aW9uKCR3aW5kb3csIHJlZHJhd1NlcnZpY2UwKSB7XG5cdHZhciByb3V0ZVNlcnZpY2UgPSBjb3JlUm91dGVyKCR3aW5kb3cpXG5cdHZhciBpZGVudGl0eSA9IGZ1bmN0aW9uKHYpIHtyZXR1cm4gdn1cblx0dmFyIHJlbmRlcjEsIGNvbXBvbmVudCwgYXR0cnMzLCBjdXJyZW50UGF0aCwgbGFzdFVwZGF0ZVxuXHR2YXIgcm91dGUgPSBmdW5jdGlvbihyb290LCBkZWZhdWx0Um91dGUsIHJvdXRlcykge1xuXHRcdGlmIChyb290ID09IG51bGwpIHRocm93IG5ldyBFcnJvcihcIkVuc3VyZSB0aGUgRE9NIGVsZW1lbnQgdGhhdCB3YXMgcGFzc2VkIHRvIGBtLnJvdXRlYCBpcyBub3QgdW5kZWZpbmVkXCIpXG5cdFx0dmFyIHJ1bjEgPSBmdW5jdGlvbigpIHtcblx0XHRcdGlmIChyZW5kZXIxICE9IG51bGwpIHJlZHJhd1NlcnZpY2UwLnJlbmRlcihyb290LCByZW5kZXIxKFZub2RlKGNvbXBvbmVudCwgYXR0cnMzLmtleSwgYXR0cnMzKSkpXG5cdFx0fVxuXHRcdHZhciBiYWlsID0gZnVuY3Rpb24ocGF0aCkge1xuXHRcdFx0aWYgKHBhdGggIT09IGRlZmF1bHRSb3V0ZSkgcm91dGVTZXJ2aWNlLnNldFBhdGgoZGVmYXVsdFJvdXRlLCBudWxsLCB7cmVwbGFjZTogdHJ1ZX0pXG5cdFx0XHRlbHNlIHRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCByZXNvbHZlIGRlZmF1bHQgcm91dGUgXCIgKyBkZWZhdWx0Um91dGUpXG5cdFx0fVxuXHRcdHJvdXRlU2VydmljZS5kZWZpbmVSb3V0ZXMocm91dGVzLCBmdW5jdGlvbihwYXlsb2FkLCBwYXJhbXMsIHBhdGgpIHtcblx0XHRcdHZhciB1cGRhdGUgPSBsYXN0VXBkYXRlID0gZnVuY3Rpb24ocm91dGVSZXNvbHZlciwgY29tcCkge1xuXHRcdFx0XHRpZiAodXBkYXRlICE9PSBsYXN0VXBkYXRlKSByZXR1cm5cblx0XHRcdFx0Y29tcG9uZW50ID0gY29tcCAhPSBudWxsICYmICh0eXBlb2YgY29tcC52aWV3ID09PSBcImZ1bmN0aW9uXCIgfHwgdHlwZW9mIGNvbXAgPT09IFwiZnVuY3Rpb25cIik/IGNvbXAgOiBcImRpdlwiXG5cdFx0XHRcdGF0dHJzMyA9IHBhcmFtcywgY3VycmVudFBhdGggPSBwYXRoLCBsYXN0VXBkYXRlID0gbnVsbFxuXHRcdFx0XHRyZW5kZXIxID0gKHJvdXRlUmVzb2x2ZXIucmVuZGVyIHx8IGlkZW50aXR5KS5iaW5kKHJvdXRlUmVzb2x2ZXIpXG5cdFx0XHRcdHJ1bjEoKVxuXHRcdFx0fVxuXHRcdFx0aWYgKHBheWxvYWQudmlldyB8fCB0eXBlb2YgcGF5bG9hZCA9PT0gXCJmdW5jdGlvblwiKSB1cGRhdGUoe30sIHBheWxvYWQpXG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0aWYgKHBheWxvYWQub25tYXRjaCkge1xuXHRcdFx0XHRcdFByb21pc2UucmVzb2x2ZShwYXlsb2FkLm9ubWF0Y2gocGFyYW1zLCBwYXRoKSkudGhlbihmdW5jdGlvbihyZXNvbHZlZCkge1xuXHRcdFx0XHRcdFx0dXBkYXRlKHBheWxvYWQsIHJlc29sdmVkKVxuXHRcdFx0XHRcdH0sIGJhaWwpXG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSB1cGRhdGUocGF5bG9hZCwgXCJkaXZcIilcblx0XHRcdH1cblx0XHR9LCBiYWlsKVxuXHRcdHJlZHJhd1NlcnZpY2UwLnN1YnNjcmliZShyb290LCBydW4xKVxuXHR9XG5cdHJvdXRlLnNldCA9IGZ1bmN0aW9uKHBhdGgsIGRhdGEsIG9wdGlvbnMpIHtcblx0XHRpZiAobGFzdFVwZGF0ZSAhPSBudWxsKSB7XG5cdFx0XHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fVxuXHRcdFx0b3B0aW9ucy5yZXBsYWNlID0gdHJ1ZVxuXHRcdH1cblx0XHRsYXN0VXBkYXRlID0gbnVsbFxuXHRcdHJvdXRlU2VydmljZS5zZXRQYXRoKHBhdGgsIGRhdGEsIG9wdGlvbnMpXG5cdH1cblx0cm91dGUuZ2V0ID0gZnVuY3Rpb24oKSB7cmV0dXJuIGN1cnJlbnRQYXRofVxuXHRyb3V0ZS5wcmVmaXggPSBmdW5jdGlvbihwcmVmaXgwKSB7cm91dGVTZXJ2aWNlLnByZWZpeCA9IHByZWZpeDB9XG5cdHJvdXRlLmxpbmsgPSBmdW5jdGlvbih2bm9kZTEpIHtcblx0XHR2bm9kZTEuZG9tLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgcm91dGVTZXJ2aWNlLnByZWZpeCArIHZub2RlMS5hdHRycy5ocmVmKVxuXHRcdHZub2RlMS5kb20ub25jbGljayA9IGZ1bmN0aW9uKGUpIHtcblx0XHRcdGlmIChlLmN0cmxLZXkgfHwgZS5tZXRhS2V5IHx8IGUuc2hpZnRLZXkgfHwgZS53aGljaCA9PT0gMikgcmV0dXJuXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHRcdGUucmVkcmF3ID0gZmFsc2Vcblx0XHRcdHZhciBocmVmID0gdGhpcy5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpXG5cdFx0XHRpZiAoaHJlZi5pbmRleE9mKHJvdXRlU2VydmljZS5wcmVmaXgpID09PSAwKSBocmVmID0gaHJlZi5zbGljZShyb3V0ZVNlcnZpY2UucHJlZml4Lmxlbmd0aClcblx0XHRcdHJvdXRlLnNldChocmVmLCB1bmRlZmluZWQsIHVuZGVmaW5lZClcblx0XHR9XG5cdH1cblx0cm91dGUucGFyYW0gPSBmdW5jdGlvbihrZXkzKSB7XG5cdFx0aWYodHlwZW9mIGF0dHJzMyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2Yga2V5MyAhPT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuIGF0dHJzM1trZXkzXVxuXHRcdHJldHVybiBhdHRyczNcblx0fVxuXHRyZXR1cm4gcm91dGVcbn1cbm0ucm91dGUgPSBfMjAod2luZG93LCByZWRyYXdTZXJ2aWNlKVxubS53aXRoQXR0ciA9IGZ1bmN0aW9uKGF0dHJOYW1lLCBjYWxsYmFjazEsIGNvbnRleHQpIHtcblx0cmV0dXJuIGZ1bmN0aW9uKGUpIHtcblx0XHRjYWxsYmFjazEuY2FsbChjb250ZXh0IHx8IHRoaXMsIGF0dHJOYW1lIGluIGUuY3VycmVudFRhcmdldCA/IGUuY3VycmVudFRhcmdldFthdHRyTmFtZV0gOiBlLmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKGF0dHJOYW1lKSlcblx0fVxufVxudmFyIF8yOCA9IGNvcmVSZW5kZXJlcih3aW5kb3cpXG5tLnJlbmRlciA9IF8yOC5yZW5kZXJcbm0ucmVkcmF3ID0gcmVkcmF3U2VydmljZS5yZWRyYXdcbm0ucmVxdWVzdCA9IHJlcXVlc3RTZXJ2aWNlLnJlcXVlc3Rcbm0uanNvbnAgPSByZXF1ZXN0U2VydmljZS5qc29ucFxubS5wYXJzZVF1ZXJ5U3RyaW5nID0gcGFyc2VRdWVyeVN0cmluZ1xubS5idWlsZFF1ZXJ5U3RyaW5nID0gYnVpbGRRdWVyeVN0cmluZ1xubS52ZXJzaW9uID0gXCIxLjEuNlwiXG5tLnZub2RlID0gVm5vZGVcbmlmICh0eXBlb2YgbW9kdWxlICE9PSBcInVuZGVmaW5lZFwiKSBtb2R1bGVbXCJleHBvcnRzXCJdID0gbVxuZWxzZSB3aW5kb3cubSA9IG1cbn0oKSk7IiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsIihmdW5jdGlvbiAoZ2xvYmFsLCB1bmRlZmluZWQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIGlmIChnbG9iYWwuc2V0SW1tZWRpYXRlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgbmV4dEhhbmRsZSA9IDE7IC8vIFNwZWMgc2F5cyBncmVhdGVyIHRoYW4gemVyb1xuICAgIHZhciB0YXNrc0J5SGFuZGxlID0ge307XG4gICAgdmFyIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IGZhbHNlO1xuICAgIHZhciBkb2MgPSBnbG9iYWwuZG9jdW1lbnQ7XG4gICAgdmFyIHJlZ2lzdGVySW1tZWRpYXRlO1xuXG4gICAgZnVuY3Rpb24gc2V0SW1tZWRpYXRlKGNhbGxiYWNrKSB7XG4gICAgICAvLyBDYWxsYmFjayBjYW4gZWl0aGVyIGJlIGEgZnVuY3Rpb24gb3IgYSBzdHJpbmdcbiAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBjYWxsYmFjayA9IG5ldyBGdW5jdGlvbihcIlwiICsgY2FsbGJhY2spO1xuICAgICAgfVxuICAgICAgLy8gQ29weSBmdW5jdGlvbiBhcmd1bWVudHNcbiAgICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaSArIDFdO1xuICAgICAgfVxuICAgICAgLy8gU3RvcmUgYW5kIHJlZ2lzdGVyIHRoZSB0YXNrXG4gICAgICB2YXIgdGFzayA9IHsgY2FsbGJhY2s6IGNhbGxiYWNrLCBhcmdzOiBhcmdzIH07XG4gICAgICB0YXNrc0J5SGFuZGxlW25leHRIYW5kbGVdID0gdGFzaztcbiAgICAgIHJlZ2lzdGVySW1tZWRpYXRlKG5leHRIYW5kbGUpO1xuICAgICAgcmV0dXJuIG5leHRIYW5kbGUrKztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhckltbWVkaWF0ZShoYW5kbGUpIHtcbiAgICAgICAgZGVsZXRlIHRhc2tzQnlIYW5kbGVbaGFuZGxlXTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBydW4odGFzaykge1xuICAgICAgICB2YXIgY2FsbGJhY2sgPSB0YXNrLmNhbGxiYWNrO1xuICAgICAgICB2YXIgYXJncyA9IHRhc2suYXJncztcbiAgICAgICAgc3dpdGNoIChhcmdzLmxlbmd0aCkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIGNhbGxiYWNrKGFyZ3NbMF0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIGNhbGxiYWNrKGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIGNhbGxiYWNrKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBjYWxsYmFjay5hcHBseSh1bmRlZmluZWQsIGFyZ3MpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBydW5JZlByZXNlbnQoaGFuZGxlKSB7XG4gICAgICAgIC8vIEZyb20gdGhlIHNwZWM6IFwiV2FpdCB1bnRpbCBhbnkgaW52b2NhdGlvbnMgb2YgdGhpcyBhbGdvcml0aG0gc3RhcnRlZCBiZWZvcmUgdGhpcyBvbmUgaGF2ZSBjb21wbGV0ZWQuXCJcbiAgICAgICAgLy8gU28gaWYgd2UncmUgY3VycmVudGx5IHJ1bm5pbmcgYSB0YXNrLCB3ZSdsbCBuZWVkIHRvIGRlbGF5IHRoaXMgaW52b2NhdGlvbi5cbiAgICAgICAgaWYgKGN1cnJlbnRseVJ1bm5pbmdBVGFzaykge1xuICAgICAgICAgICAgLy8gRGVsYXkgYnkgZG9pbmcgYSBzZXRUaW1lb3V0LiBzZXRJbW1lZGlhdGUgd2FzIHRyaWVkIGluc3RlYWQsIGJ1dCBpbiBGaXJlZm94IDcgaXQgZ2VuZXJhdGVkIGFcbiAgICAgICAgICAgIC8vIFwidG9vIG11Y2ggcmVjdXJzaW9uXCIgZXJyb3IuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KHJ1bklmUHJlc2VudCwgMCwgaGFuZGxlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciB0YXNrID0gdGFza3NCeUhhbmRsZVtoYW5kbGVdO1xuICAgICAgICAgICAgaWYgKHRhc2spIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50bHlSdW5uaW5nQVRhc2sgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJ1bih0YXNrKTtcbiAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckltbWVkaWF0ZShoYW5kbGUpO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50bHlSdW5uaW5nQVRhc2sgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsTmV4dFRpY2tJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIHByb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24gKCkgeyBydW5JZlByZXNlbnQoaGFuZGxlKTsgfSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FuVXNlUG9zdE1lc3NhZ2UoKSB7XG4gICAgICAgIC8vIFRoZSB0ZXN0IGFnYWluc3QgYGltcG9ydFNjcmlwdHNgIHByZXZlbnRzIHRoaXMgaW1wbGVtZW50YXRpb24gZnJvbSBiZWluZyBpbnN0YWxsZWQgaW5zaWRlIGEgd2ViIHdvcmtlcixcbiAgICAgICAgLy8gd2hlcmUgYGdsb2JhbC5wb3N0TWVzc2FnZWAgbWVhbnMgc29tZXRoaW5nIGNvbXBsZXRlbHkgZGlmZmVyZW50IGFuZCBjYW4ndCBiZSB1c2VkIGZvciB0aGlzIHB1cnBvc2UuXG4gICAgICAgIGlmIChnbG9iYWwucG9zdE1lc3NhZ2UgJiYgIWdsb2JhbC5pbXBvcnRTY3JpcHRzKSB7XG4gICAgICAgICAgICB2YXIgcG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cyA9IHRydWU7XG4gICAgICAgICAgICB2YXIgb2xkT25NZXNzYWdlID0gZ2xvYmFsLm9ubWVzc2FnZTtcbiAgICAgICAgICAgIGdsb2JhbC5vbm1lc3NhZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzID0gZmFsc2U7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKFwiXCIsIFwiKlwiKTtcbiAgICAgICAgICAgIGdsb2JhbC5vbm1lc3NhZ2UgPSBvbGRPbk1lc3NhZ2U7XG4gICAgICAgICAgICByZXR1cm4gcG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxQb3N0TWVzc2FnZUltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICAvLyBJbnN0YWxscyBhbiBldmVudCBoYW5kbGVyIG9uIGBnbG9iYWxgIGZvciB0aGUgYG1lc3NhZ2VgIGV2ZW50OiBzZWVcbiAgICAgICAgLy8gKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9ET00vd2luZG93LnBvc3RNZXNzYWdlXG4gICAgICAgIC8vICogaHR0cDovL3d3dy53aGF0d2cub3JnL3NwZWNzL3dlYi1hcHBzL2N1cnJlbnQtd29yay9tdWx0aXBhZ2UvY29tbXMuaHRtbCNjcm9zc0RvY3VtZW50TWVzc2FnZXNcblxuICAgICAgICB2YXIgbWVzc2FnZVByZWZpeCA9IFwic2V0SW1tZWRpYXRlJFwiICsgTWF0aC5yYW5kb20oKSArIFwiJFwiO1xuICAgICAgICB2YXIgb25HbG9iYWxNZXNzYWdlID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChldmVudC5zb3VyY2UgPT09IGdsb2JhbCAmJlxuICAgICAgICAgICAgICAgIHR5cGVvZiBldmVudC5kYXRhID09PSBcInN0cmluZ1wiICYmXG4gICAgICAgICAgICAgICAgZXZlbnQuZGF0YS5pbmRleE9mKG1lc3NhZ2VQcmVmaXgpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcnVuSWZQcmVzZW50KCtldmVudC5kYXRhLnNsaWNlKG1lc3NhZ2VQcmVmaXgubGVuZ3RoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICAgICAgICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgb25HbG9iYWxNZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBnbG9iYWwuYXR0YWNoRXZlbnQoXCJvbm1lc3NhZ2VcIiwgb25HbG9iYWxNZXNzYWdlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBnbG9iYWwucG9zdE1lc3NhZ2UobWVzc2FnZVByZWZpeCArIGhhbmRsZSwgXCIqXCIpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxNZXNzYWdlQ2hhbm5lbEltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICB2YXIgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuICAgICAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgaGFuZGxlID0gZXZlbnQuZGF0YTtcbiAgICAgICAgICAgIHJ1bklmUHJlc2VudChoYW5kbGUpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBjaGFubmVsLnBvcnQyLnBvc3RNZXNzYWdlKGhhbmRsZSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbFJlYWR5U3RhdGVDaGFuZ2VJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgdmFyIGh0bWwgPSBkb2MuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgLy8gQ3JlYXRlIGEgPHNjcmlwdD4gZWxlbWVudDsgaXRzIHJlYWR5c3RhdGVjaGFuZ2UgZXZlbnQgd2lsbCBiZSBmaXJlZCBhc3luY2hyb25vdXNseSBvbmNlIGl0IGlzIGluc2VydGVkXG4gICAgICAgICAgICAvLyBpbnRvIHRoZSBkb2N1bWVudC4gRG8gc28sIHRodXMgcXVldWluZyB1cCB0aGUgdGFzay4gUmVtZW1iZXIgdG8gY2xlYW4gdXAgb25jZSBpdCdzIGJlZW4gY2FsbGVkLlxuICAgICAgICAgICAgdmFyIHNjcmlwdCA9IGRvYy5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICAgICAgICAgICAgc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBydW5JZlByZXNlbnQoaGFuZGxlKTtcbiAgICAgICAgICAgICAgICBzY3JpcHQub25yZWFkeXN0YXRlY2hhbmdlID0gbnVsbDtcbiAgICAgICAgICAgICAgICBodG1sLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG4gICAgICAgICAgICAgICAgc2NyaXB0ID0gbnVsbDtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBodG1sLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbFNldFRpbWVvdXRJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQocnVuSWZQcmVzZW50LCAwLCBoYW5kbGUpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8vIElmIHN1cHBvcnRlZCwgd2Ugc2hvdWxkIGF0dGFjaCB0byB0aGUgcHJvdG90eXBlIG9mIGdsb2JhbCwgc2luY2UgdGhhdCBpcyB3aGVyZSBzZXRUaW1lb3V0IGV0IGFsLiBsaXZlLlxuICAgIHZhciBhdHRhY2hUbyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiAmJiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoZ2xvYmFsKTtcbiAgICBhdHRhY2hUbyA9IGF0dGFjaFRvICYmIGF0dGFjaFRvLnNldFRpbWVvdXQgPyBhdHRhY2hUbyA6IGdsb2JhbDtcblxuICAgIC8vIERvbid0IGdldCBmb29sZWQgYnkgZS5nLiBicm93c2VyaWZ5IGVudmlyb25tZW50cy5cbiAgICBpZiAoe30udG9TdHJpbmcuY2FsbChnbG9iYWwucHJvY2VzcykgPT09IFwiW29iamVjdCBwcm9jZXNzXVwiKSB7XG4gICAgICAgIC8vIEZvciBOb2RlLmpzIGJlZm9yZSAwLjlcbiAgICAgICAgaW5zdGFsbE5leHRUaWNrSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoY2FuVXNlUG9zdE1lc3NhZ2UoKSkge1xuICAgICAgICAvLyBGb3Igbm9uLUlFMTAgbW9kZXJuIGJyb3dzZXJzXG4gICAgICAgIGluc3RhbGxQb3N0TWVzc2FnZUltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGdsb2JhbC5NZXNzYWdlQ2hhbm5lbCkge1xuICAgICAgICAvLyBGb3Igd2ViIHdvcmtlcnMsIHdoZXJlIHN1cHBvcnRlZFxuICAgICAgICBpbnN0YWxsTWVzc2FnZUNoYW5uZWxJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChkb2MgJiYgXCJvbnJlYWR5c3RhdGVjaGFuZ2VcIiBpbiBkb2MuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKSkge1xuICAgICAgICAvLyBGb3IgSUUgNuKAkzhcbiAgICAgICAgaW5zdGFsbFJlYWR5U3RhdGVDaGFuZ2VJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gRm9yIG9sZGVyIGJyb3dzZXJzXG4gICAgICAgIGluc3RhbGxTZXRUaW1lb3V0SW1wbGVtZW50YXRpb24oKTtcbiAgICB9XG5cbiAgICBhdHRhY2hUby5zZXRJbW1lZGlhdGUgPSBzZXRJbW1lZGlhdGU7XG4gICAgYXR0YWNoVG8uY2xlYXJJbW1lZGlhdGUgPSBjbGVhckltbWVkaWF0ZTtcbn0odHlwZW9mIHNlbGYgPT09IFwidW5kZWZpbmVkXCIgPyB0eXBlb2YgZ2xvYmFsID09PSBcInVuZGVmaW5lZFwiID8gdGhpcyA6IGdsb2JhbCA6IHNlbGYpKTtcbiIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG59O1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcGFzc2luZyBmdW5jdGlvbiBpbiBvcHRpb25zLCB0aGVuIHVzZSBpdCBmb3IgcmVzb2x2ZSBcImhlYWRcIiBlbGVtZW50LlxuICAgICAgICAgICAgICAgIC8vIFVzZWZ1bCBmb3IgU2hhZG93IFJvb3Qgc3R5bGUgaS5lXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaW5zZXJ0SW50bzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb29cIikuc2hhZG93Um9vdCB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBnZXRUYXJnZXQuY2FsbCh0aGlzLCB0YXJnZXQpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bdGFyZ2V0XVxuXHR9O1xufSkoKTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcbiAgICAgICAgaWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8gKyBcIiBcIiArIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cbiIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvfFxccyokKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuIiwidmFyIHNjb3BlID0gKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgJiYgZ2xvYmFsKSB8fFxuICAgICAgICAgICAgKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmIHNlbGYpIHx8XG4gICAgICAgICAgICB3aW5kb3c7XG52YXIgYXBwbHkgPSBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHk7XG5cbi8vIERPTSBBUElzLCBmb3IgY29tcGxldGVuZXNzXG5cbmV4cG9ydHMuc2V0VGltZW91dCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFRpbWVvdXQoYXBwbHkuY2FsbChzZXRUaW1lb3V0LCBzY29wZSwgYXJndW1lbnRzKSwgY2xlYXJUaW1lb3V0KTtcbn07XG5leHBvcnRzLnNldEludGVydmFsID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgVGltZW91dChhcHBseS5jYWxsKHNldEludGVydmFsLCBzY29wZSwgYXJndW1lbnRzKSwgY2xlYXJJbnRlcnZhbCk7XG59O1xuZXhwb3J0cy5jbGVhclRpbWVvdXQgPVxuZXhwb3J0cy5jbGVhckludGVydmFsID0gZnVuY3Rpb24odGltZW91dCkge1xuICBpZiAodGltZW91dCkge1xuICAgIHRpbWVvdXQuY2xvc2UoKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gVGltZW91dChpZCwgY2xlYXJGbikge1xuICB0aGlzLl9pZCA9IGlkO1xuICB0aGlzLl9jbGVhckZuID0gY2xlYXJGbjtcbn1cblRpbWVvdXQucHJvdG90eXBlLnVucmVmID0gVGltZW91dC5wcm90b3R5cGUucmVmID0gZnVuY3Rpb24oKSB7fTtcblRpbWVvdXQucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuX2NsZWFyRm4uY2FsbChzY29wZSwgdGhpcy5faWQpO1xufTtcblxuLy8gRG9lcyBub3Qgc3RhcnQgdGhlIHRpbWUsIGp1c3Qgc2V0cyB1cCB0aGUgbWVtYmVycyBuZWVkZWQuXG5leHBvcnRzLmVucm9sbCA9IGZ1bmN0aW9uKGl0ZW0sIG1zZWNzKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcbiAgaXRlbS5faWRsZVRpbWVvdXQgPSBtc2Vjcztcbn07XG5cbmV4cG9ydHMudW5lbnJvbGwgPSBmdW5jdGlvbihpdGVtKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcbiAgaXRlbS5faWRsZVRpbWVvdXQgPSAtMTtcbn07XG5cbmV4cG9ydHMuX3VucmVmQWN0aXZlID0gZXhwb3J0cy5hY3RpdmUgPSBmdW5jdGlvbihpdGVtKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcblxuICB2YXIgbXNlY3MgPSBpdGVtLl9pZGxlVGltZW91dDtcbiAgaWYgKG1zZWNzID49IDApIHtcbiAgICBpdGVtLl9pZGxlVGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbiBvblRpbWVvdXQoKSB7XG4gICAgICBpZiAoaXRlbS5fb25UaW1lb3V0KVxuICAgICAgICBpdGVtLl9vblRpbWVvdXQoKTtcbiAgICB9LCBtc2Vjcyk7XG4gIH1cbn07XG5cbi8vIHNldGltbWVkaWF0ZSBhdHRhY2hlcyBpdHNlbGYgdG8gdGhlIGdsb2JhbCBvYmplY3RcbnJlcXVpcmUoXCJzZXRpbW1lZGlhdGVcIik7XG4vLyBPbiBzb21lIGV4b3RpYyBlbnZpcm9ubWVudHMsIGl0J3Mgbm90IGNsZWFyIHdoaWNoIG9iamVjdCBgc2V0aW1tZWRpYXRlYCB3YXNcbi8vIGFibGUgdG8gaW5zdGFsbCBvbnRvLiAgU2VhcmNoIGVhY2ggcG9zc2liaWxpdHkgaW4gdGhlIHNhbWUgb3JkZXIgYXMgdGhlXG4vLyBgc2V0aW1tZWRpYXRlYCBsaWJyYXJ5LlxuZXhwb3J0cy5zZXRJbW1lZGlhdGUgPSAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZi5zZXRJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiICYmIGdsb2JhbC5zZXRJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICh0aGlzICYmIHRoaXMuc2V0SW1tZWRpYXRlKTtcbmV4cG9ydHMuY2xlYXJJbW1lZGlhdGUgPSAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZi5jbGVhckltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBnbG9iYWwuY2xlYXJJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMgJiYgdGhpcy5jbGVhckltbWVkaWF0ZSk7XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCIvLyBFbnRyeUZvcm0uanN4XG5cbmltcG9ydCB7c2V0TW9ja0RhdGF9IGZyb20gXCIuLi9zdG9yZS9kYXRhXCI7XG5cbmNvbnN0IGVudHJ5Rm9ybUhhbmRsZXIgPSAoZm9ybURPTSkgPT4ge1xuXG5cdGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm1ET00pO1xuXHRjb25zdCBuZXdFbnRyeSA9IHt9O1xuXG5cdEFycmF5LmZyb20oZm9ybURhdGEuZW50cmllcygpKS5tYXAoKGVudHJ5VmFsdWUpID0+IHtcblx0XHRjb25zdCBrZXkgPSBlbnRyeVZhbHVlWzBdO1xuXHRcdGNvbnN0IHZhbHVlID0gZW50cnlWYWx1ZVsxXTtcblxuXHRcdHN3aXRjaCAodmFsdWUpIHtcbiAgICAgIGNhc2UgXCJmYWxzZVwiOlxuXHQgICAgICBuZXdFbnRyeVtrZXldID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcInRydWVcIjpcblx0ICAgICAgbmV3RW50cnlba2V5XSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcblx0ICAgICAgbmV3RW50cnlba2V5XSA9IHZhbHVlO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cdH0pO1xuXG5cdGNvbnNvbGUubG9nKG5ld0VudHJ5KTtcblxuXHRuZXdFbnRyeVtcImZhdm9yaXRlXCJdID0gZmFsc2U7XG5cdG5ld0VudHJ5W1wiQ0ZQQ29tcGxldGVkXCJdID0gbmV3RW50cnkuQ0ZQID8gZmFsc2UgOiBcIm51bGxcIjtcblxuXHRzZXRNb2NrRGF0YShuZXdFbnRyeSk7XG5cblx0Zm9ybURPTS5yZXNldCgpO1xufTtcblxuY29uc3QgbSA9IHJlcXVpcmUoJ21pdGhyaWwnKTtcbmltcG9ydCBVSUJ1dHRvbiBmcm9tICcuL3VpL1VJQnV0dG9uLmpzeCc7XG5cbmNvbnN0IEVudHJ5Rm9ybSA9IHtcblx0ZGF0YToge1xuXHRcdENGUDogZmFsc2Vcblx0fSxcblx0dmlldzogKHZub2RlKSA9PlxuXHQgIDxkaXYgY2xhc3M9XCJmb3JtLW91dGVyLW91dGVyXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1vdXRlclwiPlxuXHRcdFx0XHQ8Zm9ybSBuYW1lPVwiZW50cnktZm9ybVwiIGlkPVwiZW50cnktZm9ybVwiPlxuXHRcdFx0XHRcdHsvKiovfVxuXHRcdFx0XHRcdDxsYWJlbCBmb3I9XCJjb25mLW5hbWVcIj5cblx0XHRcdFx0XHRcdHtgQ29uZmVyZW5jZSBOYW1lYH1cblx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdDxpbnB1dCBpZD1cImNvbmYtbmFtZVwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiAvPlxuXHRcdFx0XHRcdDxsYWJlbCBmb3I9XCJsb2NhdGlvblwiPlxuXHRcdFx0XHRcdFx0e2BMb2NhdGlvbmB9XG5cdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHQ8aW5wdXQgaWQ9XCJsb2NhdGlvblwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImxvY2F0aW9uXCIgLz5cblx0XHRcdFx0XHQ8bGFiZWwgZm9yPVwiZGF0ZVwiPlxuXHRcdFx0XHRcdFx0e2BEYXRlYH1cblx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdDxpbnB1dCBpZD1cImRhdGVcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJkYXRlXCIgLz5cblx0XHRcdFx0XHQ8bGFiZWwgY2xhc3M9XCJmb3JtLXF1ZXN0aW9uXCI+XG5cdFx0XHRcdFx0XHR7YFJlZ2lzdHJhdGlvbiBEZWFkbGluZT9gfVxuXHRcdFx0XHRcdFx0PGxhYmVsIGZvcj1cInllcy1jZnBcIj5ZZXM8L2xhYmVsPlxuXHRcdFx0XHRcdFx0PGlucHV0IHZhbHVlPXt0cnVlfSB0eXBlPVwicmFkaW9cIiBpZD1cInllcy1jZnBcIiBuYW1lPVwiQ0ZQXCJcblx0XHRcdFx0XHRcdFx0XHRcdG9uY2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dm5vZGUuc3RhdGUuQ0ZQID0gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0XHRcdH19IC8+XG5cdFx0XHRcdFx0XHQ8bGFiZWwgZm9yPVwibm8tY2ZwXCI+Tm88L2xhYmVsPlxuXHRcdFx0XHRcdFx0PGlucHV0IHZhbHVlPXtmYWxzZX0gdHlwZT1cInJhZGlvXCIgaWQ9XCJuby1jZnBcIiBuYW1lPVwiQ0ZQXCJcblx0XHRcdFx0XHRcdFx0XHRcdG9uY2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dm5vZGUuc3RhdGUuQ0ZQID0gZmFsc2U7XG5cdFx0XHRcdFx0XHRcdFx0XHR9fSAvPlxuXHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dm5vZGUuc3RhdGUuQ0ZQID9cblx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBmb3I9XCJjZnBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdHtgUmVnaXN0cmF0aW9uIERlYWRsaW5lYH1cblx0XHRcdFx0XHRcdFx0XHQ8L2xhYmVsPixcblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgaWQ9XCJjZnBcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJDRlBEYXRlXCIgLz5cblx0XHRcdFx0XHRcdFx0XSA6XG5cdFx0XHRcdFx0XHRcdG51bGxcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0PFVJQnV0dG9uIGFjdGlvbj17KCkgPT4gZW50cnlGb3JtSGFuZGxlcih2bm9kZS5kb20pfSBidXR0b25OYW1lPVwiU2F2ZVwiIC8+XG5cdFx0XHRcdDwvZm9ybT5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxufTtcblxuZXhwb3J0IGRlZmF1bHQgRW50cnlGb3JtOyIsIi8vIENGUENhcmQuanN4XG5cbmNvbnN0IG0gPSByZXF1aXJlKFwibWl0aHJpbFwiKTtcblxuaW1wb3J0IENvbmZlcmVuY2VGaWVsZCBmcm9tICcuL0NvbmZlcmVuY2VGaWVsZC5qc3gnO1xuaW1wb3J0IENvdW50RG93bkZpZWxkIGZyb20gXCIuL0NvdW50RG93bkZpZWxkLmpzeFwiO1xuXG5jb25zdCBDRlBDYXJkID0ge1xuICB2aWV3OiAoeyBhdHRycyB9KSA9PlxuICAgIDxkaXYgY2xhc3M9XCJjb25mZXJlbmNlLWNhcmRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb25mZXJlbmNlLWZpZWxkc1wiPlxuICAgICAgICA8Q29uZmVyZW5jZUZpZWxkIGZpZWxkVmFsdWU9e2Ake2F0dHJzLmNvbmZlcmVuY2UubmFtZX0gQCAke2F0dHJzLmNvbmZlcmVuY2UubG9jYXRpb259YH0gLz5cbiAgICAgICAgPENvbmZlcmVuY2VGaWVsZCBmaWVsZFZhbHVlPXtcbiAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1jaGVjay1jaXJjbGVcIiAvPlxuICAgICAgICB9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb25mZXJlbmNlLWZpZWxkc1wiPlxuICAgICAgICA8Q29uZmVyZW5jZUZpZWxkIGZpZWxkVmFsdWU9e2F0dHJzLmNvbmZlcmVuY2UuQ0ZQRGF0ZX0gLz5cbiAgICAgICAgPENvdW50RG93bkZpZWxkIGZpZWxkVmFsdWU9e2F0dHJzLmNvbmZlcmVuY2UuQ0ZQRGF0ZX0gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ0ZQQ2FyZDsiLCIvLyBDb25mZXJlbmNlQ2FyZC5qc3hcblxuY29uc3QgbSA9IHJlcXVpcmUoXCJtaXRocmlsXCIpO1xuXG5pbXBvcnQgQ29uZmVyZW5jZUZpZWxkIGZyb20gJy4vQ29uZmVyZW5jZUZpZWxkLmpzeCc7XG5pbXBvcnQgQ291bnREb3duRmllbGQgZnJvbSBcIi4vQ291bnREb3duRmllbGQuanN4XCI7XG5cbmNvbnN0IENvbmZlcmVuY2VDYXJkID0ge1xuXHR2aWV3OiAoeyBhdHRycyB9KSA9PlxuXHRcdDxkaXYgY2xhc3M9XCJjb25mZXJlbmNlLWNhcmRcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJjb25mZXJlbmNlLWZpZWxkc1wiPlxuXHRcdFx0XHQ8Q29uZmVyZW5jZUZpZWxkIGZpZWxkVmFsdWU9e2Ake2F0dHJzLmNvbmZlcmVuY2UubmFtZX0gQCAke2F0dHJzLmNvbmZlcmVuY2UubG9jYXRpb259YH0gLz5cblx0XHRcdFx0PENvbmZlcmVuY2VGaWVsZCBmaWVsZFZhbHVlPXtcblx0XHRcdFx0XHQ8aSBjbGFzcz1cImZhcyBmYS1zdGFyXCIgLz5cblx0XHRcdFx0fSAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29uZmVyZW5jZS1maWVsZHNcIj5cblx0XHRcdFx0PENvbmZlcmVuY2VGaWVsZCBmaWVsZFZhbHVlPXthdHRycy5jb25mZXJlbmNlLmRhdGV9IC8+XG5cdFx0XHRcdDxDb3VudERvd25GaWVsZCBmaWVsZFZhbHVlPXthdHRycy5jb25mZXJlbmNlLmRhdGV9IC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbmZlcmVuY2VDYXJkOyIsIi8vIENvbmZlcmVuY2VGaWVsZC5qc3hcblxuY29uc3QgbSA9IHJlcXVpcmUoXCJtaXRocmlsXCIpO1xuXG5jb25zdCBDb25mZXJlbmNlRmllbGQgPSB7XG5cdHZpZXc6ICh7IGF0dHJzIH0pID0+XG5cdFx0PGRpdiBjbGFzcz1cImNvbmZlcmVuY2UtZmllbGRcIj5cblx0XHRcdHthdHRycy5maWVsZFZhbHVlfVxuXHRcdDwvZGl2ID5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbmZlcmVuY2VGaWVsZDsiLCIvLyBDb3VudERvd25GaWVsZC5qc3hcblxuY29uc3QgbSA9IHJlcXVpcmUoXCJtaXRocmlsXCIpO1xuXG5pbXBvcnQgQ29uZmVyZW5jZUZpZWxkIGZyb20gXCIuL0NvbmZlcmVuY2VGaWVsZC5qc3hcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ291bnREb3duRmllbGQge1xuXHRjb25zdHJ1Y3Rvcih2bm9kZSkge1xuXHRcdHRoaXMuZGVhZGxpbmUgPSB2bm9kZS5hdHRycy5maWVsZFZhbHVlO1xuXHRcdHRoaXMuY291bnREb3duRGF0ZSA9IG5ldyBEYXRlKHRoaXMuZGVhZGxpbmUpLmdldFRpbWUoKTtcblx0XHR0aGlzLnRpbWVMZWZ0ID0gdGhpcy5nZXRUaW1lTGVmdCgpO1xuXHRcdHRoaXMuZGlzdGFuY2UgPSB0aGlzLmNvdW50RG93bkRhdGUgLSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblx0fVxuXG5cdHZpZXcoKSB7XG5cdFx0cmV0dXJuIDxDb25mZXJlbmNlRmllbGQgZmllbGRWYWx1ZT17dGhpcy50aW1lTGVmdH0gLz47XG5cdH1cblxuXHRnZXRUaW1lTGVmdCgpIHtcblx0XHRjb25zdCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblx0XHR0aGlzLmRpc3RhbmNlID0gdGhpcy5jb3VudERvd25EYXRlIC0gbm93O1xuXG5cdFx0Y29uc3QgZGF5cyA9IE1hdGguZmxvb3IodGhpcy5kaXN0YW5jZSAvICgxMDAwICogNjAgKiA2MCAqIDI0KSk7XG5cdFx0Y29uc3QgaG91cnMgPSBNYXRoLmZsb29yKCh0aGlzLmRpc3RhbmNlICUgKDEwMDAgKiA2MCAqIDYwICogMjQpKSAvICgxMDAwICogNjAgKiA2MCkpO1xuXHRcdGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKCh0aGlzLmRpc3RhbmNlICUgKDEwMDAgKiA2MCAqIDYwKSkgLyAoMTAwMCAqIDYwKSk7XG5cdFx0Y29uc3Qgc2Vjb25kcyA9IE1hdGguZmxvb3IoKHRoaXMuZGlzdGFuY2UgJSAoMTAwMCAqIDYwKSkgLyAxMDAwKTtcblxuXHRcdHJldHVybiBkYXlzICsgXCJkIFwiICsgaG91cnMgKyBcImggXCJcblx0XHRcdCsgbWludXRlcyArIFwibSBcIiArIHNlY29uZHMgKyBcInMgXCI7XG5cdH1cblxuXHRjb3VudGRvd24oKSB7XG5cblx0XHRjb25zdCBjb3VudERvd25JbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcblxuXHRcdFx0dGhpcy50aW1lTGVmdCA9IHRoaXMuZ2V0VGltZUxlZnQoKTtcblxuXHRcdFx0bS5yZWRyYXcoKTtcblxuXHRcdFx0aWYgKHRoaXMuZGlzdGFuY2UgPCAwKSB7XG5cdFx0XHRcdGNsZWFySW50ZXJ2YWwoY291bnREb3duSW50ZXJ2YWwpO1xuXHRcdFx0XHR0aGlzLnRpbWVMZWZ0ID0gXCJFWFBJUkVEXCI7XG5cdFx0XHR9XG5cdFx0fSwgMTAwMCk7XG5cdH1cblxuXHRvbmluaXQodm5vZGUpIHtcblx0XHR0aGlzLmNvdW50ZG93bih2bm9kZS5hdHRycy5maWVsZFZhbHVlKTtcblxuXHRcdGlmICh0aGlzLmRpc3RhbmNlIDwgMCkge1xuXHRcdFx0dGhpcy50aW1lTGVmdCA9IFwiRVhQSVJFRFwiO1xuXHRcdH1cblx0fVxufSIsIi8vIEFwcC5qc3hcblxuY29uc3QgbSA9IHJlcXVpcmUoJ21pdGhyaWwnKTtcblxuaW1wb3J0IE1haW5TdGFnZSBmcm9tICcuL01haW5TdGFnZS5qc3gnO1xuaW1wb3J0IE5hdkJhciBmcm9tICcuL05hdkJhci5qc3gnO1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgU3RhZ2VCYW5uZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy91aS9TdGFnZUJhbm5lci5qc3gnO1xuaW1wb3J0IENhcmRDb250YWluZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sYXlvdXQvQ2FyZENvbnRhaW5lci5qc3gnO1xuaW1wb3J0IENvbmZlcmVuY2VDYXJkIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY2FyZHMvQ29uZmVyZW5jZUNhcmQuanN4JztcbmltcG9ydCBDRlBDYXJkIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY2FyZHMvQ0ZQQ2FyZC5qc3gnO1xuaW1wb3J0IEVudHJ5Rm9ybSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0VudHJ5Rm9ybS5qc3gnO1xuaW1wb3J0IFVJQnV0dG9uIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3VpL1VJQnV0dG9uLmpzeFwiO1xuXG5pbXBvcnQgQXV0aCBmcm9tIFwiLi4vLi4vc2VydmljZXMvYXV0aC5qc1wiO1xuY29uc3QgYXV0aCA9IG5ldyBBdXRoKCk7XG5cbi8vIE1vY2sgZGF0YVxuaW1wb3J0IHtnZXRNb2NrRGF0YX0gZnJvbSAnLi4vLi4vc3RvcmUvZGF0YSc7XG5jb25zdCBDT05GRVJFTkNFUyA9IGdldE1vY2tEYXRhKCk7XG5cbmNvbnN0IENvbmZlcmVuY2VWaWV3ID0gKGNvbmZlcmVuY2VzKSA9PiBbXG5cdDxTdGFnZUJhbm5lciBhY3Rpb249eygpID0+IGF1dGgubG9nb3V0KCl9IHRpdGxlPVwiQ29uZmVyZW5jZXNcIiAvPixcblx0PENhcmRDb250YWluZXI+XG5cdFx0e1xuXHRcdFx0Y29uZmVyZW5jZXNcblx0XHRcdFx0Lm1hcCgoY29uZmVyZW5jZSkgPT4gPENvbmZlcmVuY2VDYXJkIGNvbmZlcmVuY2U9e2NvbmZlcmVuY2V9IC8+KVxuXHRcdH1cblx0PC9DYXJkQ29udGFpbmVyPlxuXTtcblxuY29uc3QgQ0ZQVmlldyA9IChjb25mZXJlbmNlcykgPT4gW1xuXHQ8U3RhZ2VCYW5uZXIgYWN0aW9uPXsoKSA9PiBhdXRoLmxvZ291dCgpfSB0aXRsZT1cIlJlZ2lzdHJhdGlvbiBEZWFkbGluZVwiIC8+LFxuXHQ8Q2FyZENvbnRhaW5lcj5cblx0XHR7XG5cdFx0XHRjb25mZXJlbmNlc1xuXHRcdFx0XHQuZmlsdGVyKGNvbmZlcmVuY2UgPT4gY29uZmVyZW5jZS5DRlApXG5cdFx0XHRcdC5tYXAoY29uZmVyZW5jZVdpdGhDRlAgPT4gPENGUENhcmQgY2ZwPXt0cnVlfSBjb25mZXJlbmNlPXtjb25mZXJlbmNlV2l0aENGUH0gLz4pXG5cdFx0fVxuXHQ8L0NhcmRDb250YWluZXI+XG5dO1xuXG5jb25zdCBGb3JtVmlldyA9ICgpID0+IFtcblx0PFN0YWdlQmFubmVyIGFjdGlvbj17KCkgPT4gYXV0aC5sb2dvdXQoKX0gdGl0bGU9XCJBZGQgRXZlbnRcIiAvPixcblx0PENhcmRDb250YWluZXI+XG5cdFx0PEVudHJ5Rm9ybSAvPlxuXHQ8L0NhcmRDb250YWluZXI+XG5dO1xuXG5jb25zdCBXZWxjb21lVmlldyA9ICgpID0+IFtcblx0PGRpdiBjbGFzcz1cIndlbGNvbWVWaWV3T3V0ZXJcIj5cblx0XHQ8aDEgY2xhc3M9XCJhcHAtdGl0bGVcIj5Db25mZXJlbmNlIFRyYWNrZXI8L2gxPlxuXHRcdDxoMiBjbGFzcz1cImFwcC1ncmVldGluZ1wiPldlbGNvbWU8L2gyPlxuXHRcdDxkaXYgY2xhc3M9XCJhcHAtZGVzY3JpcHRpb25cIj5UcmFjayBjb25mZXJlbmNlcyBhbmQgb3RoZXIgZXZlbnQgZGF0ZXMuPC9kaXY+XG5cdFx0PGRpdiBjbGFzcz1cImxvZ2luLWJ1dHRvbi1vdXRlclwiPlxuXHRcdCAgPFVJQnV0dG9uIGFjdGlvbj17KCkgPT4gYXV0aC5sb2dpbigpfSBidXR0b25OYW1lPVwiTG9naW5cIiBjbGFzcz1cImxvZ2luLWJ1dHRvblwiIC8+XG5cdFx0PC9kaXY+XG5cdDwvZGl2PlxuXTtcblxuY29uc3QgQXBwID0ge1xuXHRvbmNyZWF0ZTogKHZub2RlKSA9PiB7XG5cdFx0Y29uc3QgbWFpblN0YWdlID0gdm5vZGUuZG9tLnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1zdGFnZVwiKTtcblxuXHRcdG0ucm91dGUobWFpblN0YWdlLCBcIi9jb25mZXJlbmNlc1wiLCB7XG4gICAgICBcIi9hdXRoXCI6IHtcbiAgICAgICAgdmlldzogKCkgPT4gV2VsY29tZVZpZXcoKVxuICAgICAgfSxcbiAgICAgIFwiL2NvbmZlcmVuY2VzXCI6IHtcbiAgICAgICAgdmlldzogKCkgPT4gQ29uZmVyZW5jZVZpZXcoQ09ORkVSRU5DRVMpXG4gICAgICB9LFxuICAgICAgXCIvY2ZwXCI6IHtcbiAgICAgICAgdmlldzogKCkgPT4gQ0ZQVmlldyhDT05GRVJFTkNFUylcbiAgICAgIH0sXG4gICAgICBcIi9lbnRyeVwiOiB7XG4gICAgICAgIHZpZXc6ICgpID0+IEZvcm1WaWV3KClcbiAgICAgIH1cblx0XHR9KTtcblx0fSxcblx0dmlldzogKHsgY2hpbGRyZW4gfSkgPT5cblx0XHQ8ZGl2IGNsYXNzPVwiQXBwXCI+XG5cdFx0ICA8TmF2QmFyIC8+XG5cdFx0XHQ8TWFpblN0YWdlPlxuXHRcdFx0XHR7Y2hpbGRyZW59XG5cdFx0XHQ8L01haW5TdGFnZT5cblx0XHQ8L2Rpdj5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDsiLCIvLyBDYXJkQ29udGFpbmVyLmpzeFxuXG5jb25zdCBtID0gcmVxdWlyZShcIm1pdGhyaWxcIik7XG5cbmNvbnN0IENhcmRDb250YWluZXIgPSB7XG4gIHZpZXc6ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGFpbmVyXCI+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FyZENvbnRhaW5lcjsiLCIvLyBNYWluU3RhZ2UuanN4XG5cbmNvbnN0IG0gPSByZXF1aXJlKFwibWl0aHJpbFwiKTtcblxuY29uc3QgTWFpblN0YWdlID0ge1xuXHR2aWV3OiAodm5vZGUpID0+XG5cdFx0PGRpdiBjbGFzcz1cIm1haW4tc3RhZ2VcIj5cblx0XHRcdHt2bm9kZS5jaGlsZHJlbn1cblx0XHQ8L2Rpdj5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1haW5TdGFnZTsiLCIvLyBOYXZCYXIuanN4XG5cbmNvbnN0IG0gPSByZXF1aXJlKFwibWl0aHJpbFwiKTtcblxuaW1wb3J0IE5hdkJ1dHRvbiBmcm9tICcuLi91aS9OYXZCdXR0b24uanN4JztcblxuY29uc3QgTmF2QmFyID0ge1xuXHR2aWV3OiAoKSA9PlxuXHRcdDxkaXYgY2xhc3M9XCJuYXYtYmFyXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwibmF2LWJhci10aXRsZS1vdXRlclwiPlxuXHRcdFx0ICA8c3BhbiBjbGFzcz1cIm5hdi1iYXItdGl0bGVcIj5Db25mZXJlbmNlIFRyYWNrZXI8L3NwYW4+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9XCJuYXYtYmFyLWljb25zLW91dGVyXCI+XG5cdFx0XHRcdDxOYXZCdXR0b24gcGF0aD17YGNmcGB9IGljb249ezxpIGNsYXNzPVwiZmFzIGZhLXN0b3B3YXRjaCBuYXYtYmFyLWljb25cIi8+fSAvPlxuXHRcdFx0XHQ8TmF2QnV0dG9uIHBhdGg9e2Bjb25mZXJlbmNlc2B9IGljb249ezxpIGNsYXNzPVwiZmFyIGZhLWNhbGVuZGFyLWFsdCBuYXYtYmFyLWljb25cIi8+fSAvPlxuXHRcdFx0XHQ8TmF2QnV0dG9uIHBhdGg9e2BlbnRyeWB9IGljb249ezxpIGNsYXNzPVwiZmFzIGZhLWVkaXQgbmF2LWJhci1pY29uXCIvPn0gLz5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2QmFyOyIsIi8vIExvZ291dEJ1dHRvbi5qc3hcblxuY29uc3QgbSA9IHJlcXVpcmUoXCJtaXRocmlsXCIpO1xuXG5jb25zdCBMb2dvdXRCdXR0b24gPSB7XG5cdHZpZXc6ICh7IGF0dHJzIH0pID0+XG5cdFx0PGRpdiBvbmNsaWNrPXthdHRycy5hY3Rpb259IGNsYXNzPVwibW91c2UtcG9pbnRlciBsb2dvdXQtYnV0dG9uXCI+XG5cdFx0XHQ8aSBjbGFzcz1cImZhcyBmYS1zaWduLW91dC1hbHQgbG9nb3V0LWJ1dHRvbi1jb2xvclwiLz5cblx0XHQ8L2Rpdj5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IExvZ291dEJ1dHRvbjsiLCIvLyBOYXZCdXR0b24uanN4XG5cbmNvbnN0IG0gPSByZXF1aXJlKFwibWl0aHJpbFwiKTtcblxuY29uc3QgTmF2QnV0dG9uID0ge1xuXHR2aWV3OiAoeyBhdHRycyB9KSA9PlxuXHRcdDxhIGNsYXNzPVwibmF2LWJ1dHRvblwiIGhyZWY9e2AjIS8ke2F0dHJzLnBhdGh9YH0+XG5cdFx0XHR7YXR0cnMuaWNvbn1cblx0XHQ8L2E+XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXZCdXR0b247IiwiLy8gU3RhZ2VCYW5uZXIuanN4XG5cbmNvbnN0IG0gPSByZXF1aXJlKCdtaXRocmlsJyk7XG5cbmltcG9ydCBTdGFnZVRpdGxlIGZyb20gJy4vU3RhZ2VUaXRsZS5qc3gnO1xuaW1wb3J0IExvZ291dEJ1dHRvbiBmcm9tICcuL0xvZ291dEJ1dHRvbi5qc3gnO1xuXG5jb25zdCBTdGFnZUJhbm5lciA9IHtcblx0dmlldzogKHsgYXR0cnMgfSkgPT5cblx0XHQ8ZGl2IGNsYXNzPVwic3RhZ2UtYmFubmVyXCI+XG5cdFx0XHQ8U3RhZ2VUaXRsZSB0aXRsZT17YXR0cnMudGl0bGV9IC8+XG5cdFx0XHQ8TG9nb3V0QnV0dG9uIGFjdGlvbj17YXR0cnMuYWN0aW9ufSAvPlxuXHRcdDwvZGl2PlxufTtcblxuZXhwb3J0IGRlZmF1bHQgU3RhZ2VCYW5uZXI7IiwiLy8gU3RhZ2VUaXRsZS5qc3hcblxuY29uc3QgbSA9IHJlcXVpcmUoXCJtaXRocmlsXCIpO1xuXG5jb25zdCBTdGFnZVRpdGxlID0ge1xuXHR2aWV3OiAoeyBhdHRycyB9KSA9PlxuXHRcdDxkaXYgY2xhc3M9XCJzdGFnZS10aXRsZVwiPnthdHRycy50aXRsZX08L2Rpdj5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0YWdlVGl0bGU7IiwiY29uc3QgbSA9IHJlcXVpcmUoXCJtaXRocmlsXCIpO1xuXG5jb25zdCBVSUJ1dHRvbiA9IHtcbiAgdmlldzogKHsgYXR0cnMgfSkgPT5cbiAgICA8ZGl2IG9uY2xpY2s9e2F0dHJzLmFjdGlvbn0gY2xhc3M9XCJ1aS1idXR0b24gdWktYnV0dG9uLXN1Y2Nlc3NcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwidWktYnV0dG9uLXNwYW5cIj57YXR0cnMuYnV0dG9uTmFtZX08L3NwYW4+XG4gICAgPC9kaXY+XG59O1xuXG5leHBvcnQgZGVmYXVsdCBVSUJ1dHRvbjsiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9pbmRleC5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vaW5kZXguY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9pbmRleC5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBpbmRleC5qc3hcblxuY29uc3QgbSA9IHJlcXVpcmUoXCJtaXRocmlsXCIpO1xuY29uc3Qgcm9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xuXG4vLyBTdHlsZXNcbmltcG9ydCBcIi4vaW5kZXguY3NzXCI7XG5cbmltcG9ydCBBcHAgZnJvbSAnLi9jb21wb25lbnRzL2xheW91dC9BcHAuanN4JztcblxubS5yZW5kZXIocm9vdCwgPEFwcCAvPik7XG4iLCJjb25zdCBtID0gcmVxdWlyZShcIm1pdGhyaWxcIik7XG5cbmltcG9ydCBhdXRoMCBmcm9tIFwiYXV0aDAtanNcIjtcbmltcG9ydCBBVVRIMF9EQVRBIGZyb20gXCIuL2F1dGgwLXZhcmlhYmxlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdXRoIHtcbiAgYXV0aDAgPSBuZXcgYXV0aDAuV2ViQXV0aCh7XG4gICAgZG9tYWluOiBBVVRIMF9EQVRBLkRPTUFJTixcbiAgICBjbGllbnRJRDogQVVUSDBfREFUQS5DTElFTlRJRCxcbiAgICByZWRpcmVjdFVyaTogQVVUSDBfREFUQS5DQUxMQkFDS1VSTCxcbiAgICBhdWRpZW5jZTogQVVUSDBfREFUQS5BVURJRU5DRSxcbiAgICByZXNwb25zZVR5cGU6IFwidG9rZW4gaWRfdG9rZW5cIixcbiAgICBzY29wZTogXCJvcGVuaWQgcHJvZmlsZSBlbWFpbFwiXG4gIH0pO1xuXG4gIGxvZ2luKCkge1xuICAgIHRoaXMuYXV0aDAuYXV0aG9yaXplKCk7XG4gIH1cblxuICBoYW5kbGVBdXRoZW50aWNhdGlvbigpIHtcbiAgICB0aGlzLmF1dGgwLnBhcnNlSGFzaCgoZXJyLCBhdXRoUmVzdWx0KSA9PiB7XG4gICAgICBpZiAoYXV0aFJlc3VsdCAmJiBhdXRoUmVzdWx0LmFjY2Vzc1Rva2VuICYmIGF1dGhSZXN1bHQuaWRUb2tlbikge1xuICAgICAgICB0aGlzLnNldFNlc3Npb24oYXV0aFJlc3VsdCk7XG4gICAgICAgIG0ucm91dGUuc2V0KFwiL2NvbmZlcmVuY2VzXCIpO1xuICAgICAgfSBlbHNlIGlmIChlcnIpIHtcbiAgICAgICAgbS5yb3V0ZS5zZXQoXCIvYXV0aFwiKTtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNldFNlc3Npb24oYXV0aFJlc3VsdCkge1xuICAgIC8vIFNldCB0aGUgdGltZSB0aGF0IHRoZSBBY2Nlc3MgVG9rZW4gd2lsbCBleHBpcmUgYXRcbiAgICBsZXQgZXhwaXJlc0F0ID0gSlNPTi5zdHJpbmdpZnkoXG4gICAgICBhdXRoUmVzdWx0LmV4cGlyZXNJbiAqIDEwMDAgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKVxuICAgICk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJhY2Nlc3NfdG9rZW5cIiwgYXV0aFJlc3VsdC5hY2Nlc3NUb2tlbik7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJpZF90b2tlblwiLCBhdXRoUmVzdWx0LmlkVG9rZW4pO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZXhwaXJlc19hdFwiLCBleHBpcmVzQXQpO1xuICAgIC8vIG5hdmlnYXRlIHRvIHRoZSBob21lIHJvdXRlXG4gICAgbS5yb3V0ZS5zZXQoXCIvY29uZmVyZW5jZXNcIik7XG4gIH1cblxuICBsb2dvdXQoKSB7XG4gICAgLy8gQ2xlYXIgQWNjZXNzIFRva2VuIGFuZCBJRCBUb2tlbiBmcm9tIGxvY2FsIHN0b3JhZ2VcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImFjY2Vzc190b2tlblwiKTtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImlkX3Rva2VuXCIpO1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiZXhwaXJlc19hdFwiKTtcbiAgICAvLyBuYXZpZ2F0ZSB0byB0aGUgZGVmYXVsdCByb3V0ZVxuICAgIG0ucm91dGUuc2V0KFwiL2F1dGhcIik7XG4gIH1cblxuICBpc0F1dGhlbnRpY2F0ZWQoKSB7XG4gICAgLy8gQ2hlY2sgd2hldGhlciB0aGUgY3VycmVudCB0aW1lIGlzIHBhc3QgdGhlXG4gICAgLy8gQWNjZXNzIFRva2VuJ3MgZXhwaXJ5IHRpbWVcbiAgICBsZXQgZXhwaXJlc0F0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImV4cGlyZXNfYXRcIikpO1xuICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKSA8IGV4cGlyZXNBdDtcbiAgfVxufSIsImNvbnN0IEFVVEgwID0ge1xuICBDTElFTlRJRDogXCJMWlhPWWNjQ3J6dGsxS0s5OXoxRFo3QVk0NVNFeVlNRFwiLFxuICBET01BSU46IFwianNuc3ByLmF1dGgwLmNvbVwiLFxuICBDQUxMQkFDS1VSTDogXCJodHRwOi8vbG9jYWxob3N0OjgwODAvIyEvY29uZmVyZW5jZXNcIixcbiAgQVVESUVOQ0U6IFwiaHR0cHM6Ly9qc25zcHIuYXV0aDAuY29tL3VzZXJpbmZvXCJcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFVVEgwOyIsIi8vIGRhdGEuanNcblxuY29uc3QgQ09ORkVSRU5DRVMgPSBbXG5cdHtcblx0XHRuYW1lOiBcIk15U1FMIFR1dG9yaWFsXCIsXG5cdFx0bG9jYXRpb246IFwiQnJvb2tseW4sIE5ZXCIsXG5cdFx0ZGF0ZTogXCIwNi8wNy8yMDE5XCIsXG5cdFx0ZmF2b3JpdGU6IGZhbHNlLFxuXHRcdENGUDogZmFsc2UsXG5cdFx0Q0ZQRGF0ZTogXCJcIixcblx0XHRDRlBDb21wbGV0ZWQ6IGZhbHNlXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIlZ1ZS5qcyAzIExhdW5jaFwiLFxuXHRcdGxvY2F0aW9uOiBcIlNhbiBGcmFuY2lzY28sIENBXCIsXG5cdFx0ZGF0ZTogXCIwNy8xOC8yMDE5XCIsXG5cdFx0ZmF2b3JpdGU6IHRydWUsXG5cdFx0Q0ZQOiBmYWxzZSxcblx0XHRDRlBEYXRlOiBcIlwiLFxuXHRcdENGUENvbXBsZXRlZDogZmFsc2Vcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiQW5ndWxhciA4IExhdW5jaFwiLFxuXHRcdGxvY2F0aW9uOiBcIlNhbiBGcmFuY2lzY28sIENBXCIsXG5cdFx0ZGF0ZTogXCIwOS8yNS8yMDE5XCIsXG5cdFx0ZmF2b3JpdGU6IHRydWUsXG5cdFx0Q0ZQOiB0cnVlLFxuXHRcdENGUERhdGU6IFwiMDkvMjMvMjAxOVwiLFxuXHRcdENGUENvbXBsZXRlZDogZmFsc2VcbiAgfSxcbl07XG5cbmV4cG9ydHMuZ2V0TW9ja0RhdGEgPSAoKSA9PiBDT05GRVJFTkNFUztcbmV4cG9ydHMuc2V0TW9ja0RhdGEgPSAoY29uZmVyZW5jZSkgPT4gQ09ORkVSRU5DRVMucHVzaChjb25mZXJlbmNlKTsiXSwic291cmNlUm9vdCI6IiJ9