var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _typeof=require("@babel/runtime/helpers/typeof");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _regenerator=_interopRequireDefault(require("@babel/runtime/regenerator"));var _asyncToGenerator2=_interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var KeyChain=_interopRequireWildcard(require("react-native-keychain"));function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap(),t=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r;})(e);}function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=_typeof(e)&&"function"!=typeof e)return{"default":e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u];}return n["default"]=e,t&&t.set(e,n),n;}var RNStorage=exports["default"]=function(){function RNStorage(){(0,_classCallCheck2["default"])(this,RNStorage);}(0,_createClass2["default"])(RNStorage,[{key:"getItem",value:function(){var _getItem=(0,_asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee(){return _regenerator["default"].wrap(function _callee$(_context){while(1)switch(_context.prev=_context.next){case 0:return _context.abrupt("return",KeyChain.getGenericPassword());case 1:case"end":return _context.stop();}},_callee);}));function getItem(){return _getItem.apply(this,arguments);}return getItem;}()},{key:"setItem",value:function(){var _setItem=(0,_asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee2(value){var rs;return _regenerator["default"].wrap(function _callee2$(_context2){while(1)switch(_context2.prev=_context2.next){case 0:_context2.next=2;return KeyChain.setGenericPassword('kinde',typeof value==='string'?value:JSON.stringify(value));case 2:rs=_context2.sent;return _context2.abrupt("return",Boolean(rs));case 4:case"end":return _context2.stop();}},_callee2);}));function setItem(_x){return _setItem.apply(this,arguments);}return setItem;}()},{key:"clear",value:function clear(){return KeyChain.resetGenericPassword();}}]);return RNStorage;}();