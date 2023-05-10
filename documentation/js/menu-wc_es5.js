'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
customElements.define('compodoc-menu', /*#__PURE__*/function (_HTMLElement) {
  _inherits(_class, _HTMLElement);
  var _super = _createSuper(_class);
  function _class() {
    var _this;
    _classCallCheck(this, _class);
    _this = _super.call(this);
    _this.isNormalMode = _this.getAttribute('mode') === 'normal';
    return _this;
  }
  _createClass(_class, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render(this.isNormalMode);
    }
  }, {
    key: "render",
    value: function render(isNormalMode) {
      var tp = lithtml.html("\n        <nav>\n            <ul class=\"list\">\n                <li class=\"title\">\n                    <a href=\"index.html\" data-type=\"index-link\">barta-chat-nest documentation</a>\n                </li>\n\n                <li class=\"divider\"></li>\n                ".concat(isNormalMode ? "<div id=\"book-search-input\" role=\"search\"><input type=\"text\" placeholder=\"Type to search\"></div>" : '', "\n                <li class=\"chapter\">\n                    <a data-type=\"chapter-link\" href=\"index.html\"><span class=\"icon ion-ios-home\"></span>Getting started</a>\n                    <ul class=\"links\">\n                        <li class=\"link\">\n                            <a href=\"overview.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-keypad\"></span>Overview\n                            </a>\n                        </li>\n                        <li class=\"link\">\n                            <a href=\"index.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-paper\"></span>README\n                            </a>\n                        </li>\n                                <li class=\"link\">\n                                    <a href=\"dependencies.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-list\"></span>Dependencies\n                                    </a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"properties.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-apps\"></span>Properties\n                                    </a>\n                                </li>\n                    </ul>\n                </li>\n                    <li class=\"chapter modules\">\n                        <a data-type=\"chapter-link\" href=\"modules.html\">\n                            <div class=\"menu-toggler linked\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"', ">\n                                <span class=\"icon ion-ios-archive\"></span>\n                                <span class=\"link-name\">Modules</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                        </a>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"', ">\n                            <li class=\"link\">\n                                <a href=\"modules/AppModule.html\" data-type=\"entity-link\" >AppModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#controllers-links-module-AppModule-7978790c357a5e560a3b0230122730ccff524b96b9c7c87af4eaea359dd15e9e4149e41da4cc580a977109c842e94c28c5c1d4179a1a1fac06ce33618212eb2b"' : 'data-target="#xs-controllers-links-module-AppModule-7978790c357a5e560a3b0230122730ccff524b96b9c7c87af4eaea359dd15e9e4149e41da4cc580a977109c842e94c28c5c1d4179a1a1fac06ce33618212eb2b"', ">\n                                            <span class=\"icon ion-md-swap\"></span>\n                                            <span>Controllers</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="controllers-links-module-AppModule-7978790c357a5e560a3b0230122730ccff524b96b9c7c87af4eaea359dd15e9e4149e41da4cc580a977109c842e94c28c5c1d4179a1a1fac06ce33618212eb2b"' : 'id="xs-controllers-links-module-AppModule-7978790c357a5e560a3b0230122730ccff524b96b9c7c87af4eaea359dd15e9e4149e41da4cc580a977109c842e94c28c5c1d4179a1a1fac06ce33618212eb2b"', ">\n                                            <li class=\"link\">\n                                                <a href=\"controllers/AppController.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AppController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links-module-AppModule-7978790c357a5e560a3b0230122730ccff524b96b9c7c87af4eaea359dd15e9e4149e41da4cc580a977109c842e94c28c5c1d4179a1a1fac06ce33618212eb2b"' : 'data-target="#xs-injectables-links-module-AppModule-7978790c357a5e560a3b0230122730ccff524b96b9c7c87af4eaea359dd15e9e4149e41da4cc580a977109c842e94c28c5c1d4179a1a1fac06ce33618212eb2b"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-AppModule-7978790c357a5e560a3b0230122730ccff524b96b9c7c87af4eaea359dd15e9e4149e41da4cc580a977109c842e94c28c5c1d4179a1a1fac06ce33618212eb2b"' : 'id="xs-injectables-links-module-AppModule-7978790c357a5e560a3b0230122730ccff524b96b9c7c87af4eaea359dd15e9e4149e41da4cc580a977109c842e94c28c5c1d4179a1a1fac06ce33618212eb2b"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/AppService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AppService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/AuthModule.html\" data-type=\"entity-link\" >AuthModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#controllers-links-module-AuthModule-2067df812ee4e739dab3297b00e4dd8aefb01760df7834ed842da08ae17ecc56e629d1c6f852ab1220bbd5be792f4fe9a3efe39fbab819c4be75c8cef719958d"' : 'data-target="#xs-controllers-links-module-AuthModule-2067df812ee4e739dab3297b00e4dd8aefb01760df7834ed842da08ae17ecc56e629d1c6f852ab1220bbd5be792f4fe9a3efe39fbab819c4be75c8cef719958d"', ">\n                                            <span class=\"icon ion-md-swap\"></span>\n                                            <span>Controllers</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="controllers-links-module-AuthModule-2067df812ee4e739dab3297b00e4dd8aefb01760df7834ed842da08ae17ecc56e629d1c6f852ab1220bbd5be792f4fe9a3efe39fbab819c4be75c8cef719958d"' : 'id="xs-controllers-links-module-AuthModule-2067df812ee4e739dab3297b00e4dd8aefb01760df7834ed842da08ae17ecc56e629d1c6f852ab1220bbd5be792f4fe9a3efe39fbab819c4be75c8cef719958d"', ">\n                                            <li class=\"link\">\n                                                <a href=\"controllers/AuthController.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AuthController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links-module-AuthModule-2067df812ee4e739dab3297b00e4dd8aefb01760df7834ed842da08ae17ecc56e629d1c6f852ab1220bbd5be792f4fe9a3efe39fbab819c4be75c8cef719958d"' : 'data-target="#xs-injectables-links-module-AuthModule-2067df812ee4e739dab3297b00e4dd8aefb01760df7834ed842da08ae17ecc56e629d1c6f852ab1220bbd5be792f4fe9a3efe39fbab819c4be75c8cef719958d"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-AuthModule-2067df812ee4e739dab3297b00e4dd8aefb01760df7834ed842da08ae17ecc56e629d1c6f852ab1220bbd5be792f4fe9a3efe39fbab819c4be75c8cef719958d"' : 'id="xs-injectables-links-module-AuthModule-2067df812ee4e739dab3297b00e4dd8aefb01760df7834ed842da08ae17ecc56e629d1c6f852ab1220bbd5be792f4fe9a3efe39fbab819c4be75c8cef719958d"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/AuthService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AuthService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/ChatsModule.html\" data-type=\"entity-link\" >ChatsModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#controllers-links-module-ChatsModule-42e53f436692f611a1aa93210ff2d5cb10bc78218310ac22e06cc3d3d9ae7ae944010ed92df36a7789a30f8366aa38511507b4c301449555dc7a0259ef507855"' : 'data-target="#xs-controllers-links-module-ChatsModule-42e53f436692f611a1aa93210ff2d5cb10bc78218310ac22e06cc3d3d9ae7ae944010ed92df36a7789a30f8366aa38511507b4c301449555dc7a0259ef507855"', ">\n                                            <span class=\"icon ion-md-swap\"></span>\n                                            <span>Controllers</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="controllers-links-module-ChatsModule-42e53f436692f611a1aa93210ff2d5cb10bc78218310ac22e06cc3d3d9ae7ae944010ed92df36a7789a30f8366aa38511507b4c301449555dc7a0259ef507855"' : 'id="xs-controllers-links-module-ChatsModule-42e53f436692f611a1aa93210ff2d5cb10bc78218310ac22e06cc3d3d9ae7ae944010ed92df36a7789a30f8366aa38511507b4c301449555dc7a0259ef507855"', ">\n                                            <li class=\"link\">\n                                                <a href=\"controllers/ChatsController.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ChatsController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links-module-ChatsModule-42e53f436692f611a1aa93210ff2d5cb10bc78218310ac22e06cc3d3d9ae7ae944010ed92df36a7789a30f8366aa38511507b4c301449555dc7a0259ef507855"' : 'data-target="#xs-injectables-links-module-ChatsModule-42e53f436692f611a1aa93210ff2d5cb10bc78218310ac22e06cc3d3d9ae7ae944010ed92df36a7789a30f8366aa38511507b4c301449555dc7a0259ef507855"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-ChatsModule-42e53f436692f611a1aa93210ff2d5cb10bc78218310ac22e06cc3d3d9ae7ae944010ed92df36a7789a30f8366aa38511507b4c301449555dc7a0259ef507855"' : 'id="xs-injectables-links-module-ChatsModule-42e53f436692f611a1aa93210ff2d5cb10bc78218310ac22e06cc3d3d9ae7ae944010ed92df36a7789a30f8366aa38511507b4c301449555dc7a0259ef507855"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/ChatsService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ChatsService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/MessageModule.html\" data-type=\"entity-link\" >MessageModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#controllers-links-module-MessageModule-aaf17a0139e6a452a42d58689d7b2298698ca4eeb26481f8b72c0bf9d9086b2cbb273a4d6fcf7050337c4feb3ba1b73dee7634ff0c8407ecde366ade8812a9fa"' : 'data-target="#xs-controllers-links-module-MessageModule-aaf17a0139e6a452a42d58689d7b2298698ca4eeb26481f8b72c0bf9d9086b2cbb273a4d6fcf7050337c4feb3ba1b73dee7634ff0c8407ecde366ade8812a9fa"', ">\n                                            <span class=\"icon ion-md-swap\"></span>\n                                            <span>Controllers</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="controllers-links-module-MessageModule-aaf17a0139e6a452a42d58689d7b2298698ca4eeb26481f8b72c0bf9d9086b2cbb273a4d6fcf7050337c4feb3ba1b73dee7634ff0c8407ecde366ade8812a9fa"' : 'id="xs-controllers-links-module-MessageModule-aaf17a0139e6a452a42d58689d7b2298698ca4eeb26481f8b72c0bf9d9086b2cbb273a4d6fcf7050337c4feb3ba1b73dee7634ff0c8407ecde366ade8812a9fa"', ">\n                                            <li class=\"link\">\n                                                <a href=\"controllers/MessageController.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >MessageController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links-module-MessageModule-aaf17a0139e6a452a42d58689d7b2298698ca4eeb26481f8b72c0bf9d9086b2cbb273a4d6fcf7050337c4feb3ba1b73dee7634ff0c8407ecde366ade8812a9fa"' : 'data-target="#xs-injectables-links-module-MessageModule-aaf17a0139e6a452a42d58689d7b2298698ca4eeb26481f8b72c0bf9d9086b2cbb273a4d6fcf7050337c4feb3ba1b73dee7634ff0c8407ecde366ade8812a9fa"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-MessageModule-aaf17a0139e6a452a42d58689d7b2298698ca4eeb26481f8b72c0bf9d9086b2cbb273a4d6fcf7050337c4feb3ba1b73dee7634ff0c8407ecde366ade8812a9fa"' : 'id="xs-injectables-links-module-MessageModule-aaf17a0139e6a452a42d58689d7b2298698ca4eeb26481f8b72c0bf9d9086b2cbb273a4d6fcf7050337c4feb3ba1b73dee7634ff0c8407ecde366ade8812a9fa"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/MessageService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >MessageService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/UsersModule.html\" data-type=\"entity-link\" >UsersModule</a>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links-module-UsersModule-cdb6cce48e80fbbad1e3be3ca55edfe523dce6ce3a983b3cf9a4ea1bfefc6e0ba326c3d3ae27bd82b9a7e46a9e56eb6a84334d5c3dd7a493538669126490347b"' : 'data-target="#xs-injectables-links-module-UsersModule-cdb6cce48e80fbbad1e3be3ca55edfe523dce6ce3a983b3cf9a4ea1bfefc6e0ba326c3d3ae27bd82b9a7e46a9e56eb6a84334d5c3dd7a493538669126490347b"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-UsersModule-cdb6cce48e80fbbad1e3be3ca55edfe523dce6ce3a983b3cf9a4ea1bfefc6e0ba326c3d3ae27bd82b9a7e46a9e56eb6a84334d5c3dd7a493538669126490347b"' : 'id="xs-injectables-links-module-UsersModule-cdb6cce48e80fbbad1e3be3ca55edfe523dce6ce3a983b3cf9a4ea1bfefc6e0ba326c3d3ae27bd82b9a7e46a9e56eb6a84334d5c3dd7a493538669126490347b"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/UsersService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >UsersService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                </ul>\n                </li>\n                        <li class=\"chapter\">\n                            <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#controllers-links"' : 'data-target="#xs-controllers-links"', ">\n                                <span class=\"icon ion-md-swap\"></span>\n                                <span>Controllers</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                            <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"', ">\n                                <li class=\"link\">\n                                    <a href=\"controllers/AppController.html\" data-type=\"entity-link\" >AppController</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"controllers/AuthController.html\" data-type=\"entity-link\" >AuthController</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"controllers/ChatsController.html\" data-type=\"entity-link\" >ChatsController</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"controllers/MessageController.html\" data-type=\"entity-link\" >MessageController</a>\n                                </li>\n                            </ul>\n                        </li>\n                        <li class=\"chapter\">\n                            <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#entities-links"' : 'data-target="#xs-entities-links"', ">\n                                <span class=\"icon ion-ios-apps\"></span>\n                                <span>Entities</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                            <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"', ">\n                                <li class=\"link\">\n                                    <a href=\"entities/Chat.html\" data-type=\"entity-link\" >Chat</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"entities/ChatMember.html\" data-type=\"entity-link\" >ChatMember</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"entities/Message.html\" data-type=\"entity-link\" >Message</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"entities/User.html\" data-type=\"entity-link\" >User</a>\n                                </li>\n                            </ul>\n                        </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#classes-links"' : 'data-target="#xs-classes-links"', ">\n                            <span class=\"icon ion-ios-paper\"></span>\n                            <span>Classes</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"', ">\n                            <li class=\"link\">\n                                <a href=\"classes/AddUserDto.html\" data-type=\"entity-link\" >AddUserDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/CreateChatDto.html\" data-type=\"entity-link\" >CreateChatDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/CreateMessageDto.html\" data-type=\"entity-link\" >CreateMessageDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/CreateUserDto.html\" data-type=\"entity-link\" >CreateUserDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/SignInDTO.html\" data-type=\"entity-link\" >SignInDTO</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/UpdateChatDto.html\" data-type=\"entity-link\" >UpdateChatDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/UpdateMessageDto.html\" data-type=\"entity-link\" >UpdateMessageDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/UpdateUserDto.html\" data-type=\"entity-link\" >UpdateUserDto</a>\n                            </li>\n                        </ul>\n                    </li>\n                        <li class=\"chapter\">\n                            <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links"' : 'data-target="#xs-injectables-links"', ">\n                                <span class=\"icon ion-md-arrow-round-down\"></span>\n                                <span>Injectables</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                            <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"', ">\n                                <li class=\"link\">\n                                    <a href=\"injectables/AppService.html\" data-type=\"entity-link\" >AppService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/AuthService.html\" data-type=\"entity-link\" >AuthService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/ChatsService.html\" data-type=\"entity-link\" >ChatsService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/MessageService.html\" data-type=\"entity-link\" >MessageService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/UsersService.html\" data-type=\"entity-link\" >UsersService</a>\n                                </li>\n                            </ul>\n                        </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#guards-links"' : 'data-target="#xs-guards-links"', ">\n                            <span class=\"icon ion-ios-lock\"></span>\n                            <span>Guards</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"', ">\n                            <li class=\"link\">\n                                <a href=\"guards/AuthGuard.html\" data-type=\"entity-link\" >AuthGuard</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"guards/ChatAdminOrOwnerGuard.html\" data-type=\"entity-link\" >ChatAdminOrOwnerGuard</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"guards/MessageGuard.html\" data-type=\"entity-link\" >MessageGuard</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#interfaces-links"' : 'data-target="#xs-interfaces-links"', ">\n                            <span class=\"icon ion-md-information-circle-outline\"></span>\n                            <span>Interfaces</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"', ">\n                            <li class=\"link\">\n                                <a href=\"interfaces/CustomEvent.html\" data-type=\"entity-link\" >CustomEvent</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"', ">\n                            <span class=\"icon ion-ios-cube\"></span>\n                            <span>Miscellaneous</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"', ">\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/functions.html\" data-type=\"entity-link\">Functions</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <a data-type=\"chapter-link\" href=\"coverage.html\"><span class=\"icon ion-ios-stats\"></span>Documentation coverage</a>\n                    </li>\n                    <li class=\"divider\"></li>\n                    <li class=\"copyright\">\n                        Documentation generated using <a href=\"https://compodoc.app/\" target=\"_blank\">\n                            <img data-src=\"images/compodoc-vectorise.png\" class=\"img-responsive\" data-type=\"compodoc-logo\">\n                        </a>\n                    </li>\n            </ul>\n        </nav>\n        "));
      this.innerHTML = tp.strings;
    }
  }]);
  return _class;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));