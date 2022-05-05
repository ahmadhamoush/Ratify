"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_welcome_welcome_module_ts"],{

/***/ 752:
/*!***************************************************!*\
  !*** ./src/app/welcome/welcome-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomePageRoutingModule": () => (/* binding */ WelcomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _welcome_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./welcome.page */ 3297);




const routes = [
    {
        path: '',
        component: _welcome_page__WEBPACK_IMPORTED_MODULE_0__.WelcomePage
    }
];
let WelcomePageRoutingModule = class WelcomePageRoutingModule {
};
WelcomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], WelcomePageRoutingModule);



/***/ }),

/***/ 2526:
/*!*******************************************!*\
  !*** ./src/app/welcome/welcome.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomePageModule": () => (/* binding */ WelcomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _welcome_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./welcome-routing.module */ 752);
/* harmony import */ var _welcome_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./welcome.page */ 3297);







let WelcomePageModule = class WelcomePageModule {
};
WelcomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _welcome_routing_module__WEBPACK_IMPORTED_MODULE_0__.WelcomePageRoutingModule
        ],
        declarations: [_welcome_page__WEBPACK_IMPORTED_MODULE_1__.WelcomePage]
    })
], WelcomePageModule);



/***/ }),

/***/ 3297:
/*!*****************************************!*\
  !*** ./src/app/welcome/welcome.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomePage": () => (/* binding */ WelcomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _welcome_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./welcome.page.html?ngResource */ 7030);
/* harmony import */ var _welcome_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./welcome.page.scss?ngResource */ 787);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ 1059);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/camera */ 4241);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);









let WelcomePage = class WelcomePage {
    constructor(http, route, fileTransfer, loader) {
        this.http = http;
        this.route = route;
        this.fileTransfer = fileTransfer;
        this.loader = loader;
        this.base64 = '';
        this.fileName = '';
        this.format = '';
        this.user_name = history.state.username;
    }
    getStarted() {
        const data = {
            "name": this.name,
            "username": this.user_name,
        };
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders();
        headers.append('Access-Control-Allow-Origin', '*');
        this.upload();
        this.http.post('http://127.0.0.1/ratify/get_started.php', JSON.stringify(data), { headers: headers, withCredentials: true }).subscribe((response) => {
            console.log(response);
            // this.route.navigate(['/profile']);
        });
    }
    ngOnInit() {
        this.transferObject = this.fileTransfer.create();
        _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__.Camera.requestPermissions();
    }
    pickOrCapture() {
        var options = {
            resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__.CameraResultType.DataUrl
        };
        _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__.Camera.getPhoto(options).then((res) => {
            this.base64 = res.dataUrl;
            this.format = res.format;
            this.fileName = Date.now().toString + "." + this.format;
        });
    }
    upload() {
        var options = {
            fileKey: 'filekey',
            fileName: this.fileName,
            chunkedMode: false,
            headers: {},
            mimeType: "image" + this.format
        };
        this.transferObject.upload(this.base64, "http://127.0.0.1/ratify/image_upload.php", options).then((res) => {
            alert(JSON.stringify(res));
        }, (err) => {
            alert(JSON.stringify(err));
        });
    }
};
WelcomePage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_2__.FileTransfer },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController }
];
WelcomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-welcome',
        template: _welcome_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_welcome_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], WelcomePage);



/***/ }),

/***/ 4830:
/*!****************************************************************!*\
  !*** ./node_modules/@capacitor/camera/dist/esm/definitions.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CameraSource": () => (/* binding */ CameraSource),
/* harmony export */   "CameraDirection": () => (/* binding */ CameraDirection),
/* harmony export */   "CameraResultType": () => (/* binding */ CameraResultType)
/* harmony export */ });
var CameraSource;
(function (CameraSource) {
    /**
     * Prompts the user to select either the photo album or take a photo.
     */
    CameraSource["Prompt"] = "PROMPT";
    /**
     * Take a new photo using the camera.
     */
    CameraSource["Camera"] = "CAMERA";
    /**
     * Pick an existing photo fron the gallery or photo album.
     */
    CameraSource["Photos"] = "PHOTOS";
})(CameraSource || (CameraSource = {}));
var CameraDirection;
(function (CameraDirection) {
    CameraDirection["Rear"] = "REAR";
    CameraDirection["Front"] = "FRONT";
})(CameraDirection || (CameraDirection = {}));
var CameraResultType;
(function (CameraResultType) {
    CameraResultType["Uri"] = "uri";
    CameraResultType["Base64"] = "base64";
    CameraResultType["DataUrl"] = "dataUrl";
})(CameraResultType || (CameraResultType = {}));


/***/ }),

/***/ 4241:
/*!**********************************************************!*\
  !*** ./node_modules/@capacitor/camera/dist/esm/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CameraDirection": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraDirection),
/* harmony export */   "CameraResultType": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraResultType),
/* harmony export */   "CameraSource": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraSource),
/* harmony export */   "Camera": () => (/* binding */ Camera)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 5099);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 4830);

const Camera = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Camera', {
    web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_camera_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 1327)).then(m => new m.CameraWeb()),
});




/***/ }),

/***/ 5099:
/*!****************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Capacitor": () => (/* binding */ Capacitor),
/* harmony export */   "CapacitorException": () => (/* binding */ CapacitorException),
/* harmony export */   "CapacitorPlatforms": () => (/* binding */ CapacitorPlatforms),
/* harmony export */   "ExceptionCode": () => (/* binding */ ExceptionCode),
/* harmony export */   "Plugins": () => (/* binding */ Plugins),
/* harmony export */   "WebPlugin": () => (/* binding */ WebPlugin),
/* harmony export */   "WebView": () => (/* binding */ WebView),
/* harmony export */   "addPlatform": () => (/* binding */ addPlatform),
/* harmony export */   "registerPlugin": () => (/* binding */ registerPlugin),
/* harmony export */   "registerWebPlugin": () => (/* binding */ registerWebPlugin),
/* harmony export */   "setPlatform": () => (/* binding */ setPlatform)
/* harmony export */ });
/* harmony import */ var _Users_ahmadhamoush_Downloads_Webdev_Ratify_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);


/*! Capacitor: https://capacitorjs.com/ - MIT License */
const createCapacitorPlatforms = win => {
  const defaultPlatformMap = new Map();
  defaultPlatformMap.set('web', {
    name: 'web'
  });
  const capPlatforms = win.CapacitorPlatforms || {
    currentPlatform: {
      name: 'web'
    },
    platforms: defaultPlatformMap
  };

  const addPlatform = (name, platform) => {
    capPlatforms.platforms.set(name, platform);
  };

  const setPlatform = name => {
    if (capPlatforms.platforms.has(name)) {
      capPlatforms.currentPlatform = capPlatforms.platforms.get(name);
    }
  };

  capPlatforms.addPlatform = addPlatform;
  capPlatforms.setPlatform = setPlatform;
  return capPlatforms;
};

const initPlatforms = win => win.CapacitorPlatforms = createCapacitorPlatforms(win);
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */


const CapacitorPlatforms = /*#__PURE__*/initPlatforms(typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {});
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */

const addPlatform = CapacitorPlatforms.addPlatform;
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */

const setPlatform = CapacitorPlatforms.setPlatform;

const legacyRegisterWebPlugin = (cap, webPlugin) => {
  var _a;

  const config = webPlugin.config;
  const Plugins = cap.Plugins;

  if (!config || !config.name) {
    // TODO: add link to upgrade guide
    throw new Error(`Capacitor WebPlugin is using the deprecated "registerWebPlugin()" function, but without the config. Please use "registerPlugin()" instead to register this web plugin."`);
  } // TODO: add link to upgrade guide


  console.warn(`Capacitor plugin "${config.name}" is using the deprecated "registerWebPlugin()" function`);

  if (!Plugins[config.name] || ((_a = config === null || config === void 0 ? void 0 : config.platforms) === null || _a === void 0 ? void 0 : _a.includes(cap.getPlatform()))) {
    // Add the web plugin into the plugins registry if there already isn't
    // an existing one. If it doesn't already exist, that means
    // there's no existing native implementation for it.
    // - OR -
    // If we already have a plugin registered (meaning it was defined in the native layer),
    // then we should only overwrite it if the corresponding web plugin activates on
    // a certain platform. For example: Geolocation uses the WebPlugin on Android but not iOS
    Plugins[config.name] = webPlugin;
  }
};

var ExceptionCode;

(function (ExceptionCode) {
  /**
   * API is not implemented.
   *
   * This usually means the API can't be used because it is not implemented for
   * the current platform.
   */
  ExceptionCode["Unimplemented"] = "UNIMPLEMENTED";
  /**
   * API is not available.
   *
   * This means the API can't be used right now because:
   *   - it is currently missing a prerequisite, such as network connectivity
   *   - it requires a particular platform or browser version
   */

  ExceptionCode["Unavailable"] = "UNAVAILABLE";
})(ExceptionCode || (ExceptionCode = {}));

class CapacitorException extends Error {
  constructor(message, code) {
    super(message);
    this.message = message;
    this.code = code;
  }

}

const getPlatformId = win => {
  var _a, _b;

  if (win === null || win === void 0 ? void 0 : win.androidBridge) {
    return 'android';
  } else if ((_b = (_a = win === null || win === void 0 ? void 0 : win.webkit) === null || _a === void 0 ? void 0 : _a.messageHandlers) === null || _b === void 0 ? void 0 : _b.bridge) {
    return 'ios';
  } else {
    return 'web';
  }
};

const createCapacitor = win => {
  var _a, _b, _c, _d, _e;

  const capCustomPlatform = win.CapacitorCustomPlatform || null;
  const cap = win.Capacitor || {};
  const Plugins = cap.Plugins = cap.Plugins || {};
  /**
   * @deprecated Use `capCustomPlatform` instead, default functions like registerPlugin will function with the new object.
   */

  const capPlatforms = win.CapacitorPlatforms;

  const defaultGetPlatform = () => {
    return capCustomPlatform !== null ? capCustomPlatform.name : getPlatformId(win);
  };

  const getPlatform = ((_a = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _a === void 0 ? void 0 : _a.getPlatform) || defaultGetPlatform;

  const defaultIsNativePlatform = () => getPlatform() !== 'web';

  const isNativePlatform = ((_b = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _b === void 0 ? void 0 : _b.isNativePlatform) || defaultIsNativePlatform;

  const defaultIsPluginAvailable = pluginName => {
    const plugin = registeredPlugins.get(pluginName);

    if (plugin === null || plugin === void 0 ? void 0 : plugin.platforms.has(getPlatform())) {
      // JS implementation available for the current platform.
      return true;
    }

    if (getPluginHeader(pluginName)) {
      // Native implementation available.
      return true;
    }

    return false;
  };

  const isPluginAvailable = ((_c = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _c === void 0 ? void 0 : _c.isPluginAvailable) || defaultIsPluginAvailable;

  const defaultGetPluginHeader = pluginName => {
    var _a;

    return (_a = cap.PluginHeaders) === null || _a === void 0 ? void 0 : _a.find(h => h.name === pluginName);
  };

  const getPluginHeader = ((_d = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _d === void 0 ? void 0 : _d.getPluginHeader) || defaultGetPluginHeader;

  const handleError = err => win.console.error(err);

  const pluginMethodNoop = (_target, prop, pluginName) => {
    return Promise.reject(`${pluginName} does not have an implementation of "${prop}".`);
  };

  const registeredPlugins = new Map();

  const defaultRegisterPlugin = (pluginName, jsImplementations = {}) => {
    const registeredPlugin = registeredPlugins.get(pluginName);

    if (registeredPlugin) {
      console.warn(`Capacitor plugin "${pluginName}" already registered. Cannot register plugins twice.`);
      return registeredPlugin.proxy;
    }

    const platform = getPlatform();
    const pluginHeader = getPluginHeader(pluginName);
    let jsImplementation;

    const loadPluginImplementation = /*#__PURE__*/function () {
      var _ref = (0,_Users_ahmadhamoush_Downloads_Webdev_Ratify_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        if (!jsImplementation && platform in jsImplementations) {
          jsImplementation = typeof jsImplementations[platform] === 'function' ? jsImplementation = yield jsImplementations[platform]() : jsImplementation = jsImplementations[platform];
        } else if (capCustomPlatform !== null && !jsImplementation && 'web' in jsImplementations) {
          jsImplementation = typeof jsImplementations['web'] === 'function' ? jsImplementation = yield jsImplementations['web']() : jsImplementation = jsImplementations['web'];
        }

        return jsImplementation;
      });

      return function loadPluginImplementation() {
        return _ref.apply(this, arguments);
      };
    }();

    const createPluginMethod = (impl, prop) => {
      var _a, _b;

      if (pluginHeader) {
        const methodHeader = pluginHeader === null || pluginHeader === void 0 ? void 0 : pluginHeader.methods.find(m => prop === m.name);

        if (methodHeader) {
          if (methodHeader.rtype === 'promise') {
            return options => cap.nativePromise(pluginName, prop.toString(), options);
          } else {
            return (options, callback) => cap.nativeCallback(pluginName, prop.toString(), options, callback);
          }
        } else if (impl) {
          return (_a = impl[prop]) === null || _a === void 0 ? void 0 : _a.bind(impl);
        }
      } else if (impl) {
        return (_b = impl[prop]) === null || _b === void 0 ? void 0 : _b.bind(impl);
      } else {
        throw new CapacitorException(`"${pluginName}" plugin is not implemented on ${platform}`, ExceptionCode.Unimplemented);
      }
    };

    const createPluginMethodWrapper = prop => {
      let remove;

      const wrapper = (...args) => {
        const p = loadPluginImplementation().then(impl => {
          const fn = createPluginMethod(impl, prop);

          if (fn) {
            const p = fn(...args);
            remove = p === null || p === void 0 ? void 0 : p.remove;
            return p;
          } else {
            throw new CapacitorException(`"${pluginName}.${prop}()" is not implemented on ${platform}`, ExceptionCode.Unimplemented);
          }
        });

        if (prop === 'addListener') {
          p.remove = /*#__PURE__*/(0,_Users_ahmadhamoush_Downloads_Webdev_Ratify_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            return remove();
          });
        }

        return p;
      }; // Some flair ✨


      wrapper.toString = () => `${prop.toString()}() { [capacitor code] }`;

      Object.defineProperty(wrapper, 'name', {
        value: prop,
        writable: false,
        configurable: false
      });
      return wrapper;
    };

    const addListener = createPluginMethodWrapper('addListener');
    const removeListener = createPluginMethodWrapper('removeListener');

    const addListenerNative = (eventName, callback) => {
      const call = addListener({
        eventName
      }, callback);

      const remove = /*#__PURE__*/function () {
        var _ref3 = (0,_Users_ahmadhamoush_Downloads_Webdev_Ratify_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          const callbackId = yield call;
          removeListener({
            eventName,
            callbackId
          }, callback);
        });

        return function remove() {
          return _ref3.apply(this, arguments);
        };
      }();

      const p = new Promise(resolve => call.then(() => resolve({
        remove
      })));
      p.remove = /*#__PURE__*/(0,_Users_ahmadhamoush_Downloads_Webdev_Ratify_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        console.warn(`Using addListener() without 'await' is deprecated.`);
        yield remove();
      });
      return p;
    };

    const proxy = new Proxy({}, {
      get(_, prop) {
        switch (prop) {
          // https://github.com/facebook/react/issues/20030
          case '$$typeof':
            return undefined;

          case 'toJSON':
            return () => ({});

          case 'addListener':
            return pluginHeader ? addListenerNative : addListener;

          case 'removeListener':
            return removeListener;

          default:
            return createPluginMethodWrapper(prop);
        }
      }

    });
    Plugins[pluginName] = proxy;
    registeredPlugins.set(pluginName, {
      name: pluginName,
      proxy,
      platforms: new Set([...Object.keys(jsImplementations), ...(pluginHeader ? [platform] : [])])
    });
    return proxy;
  };

  const registerPlugin = ((_e = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _e === void 0 ? void 0 : _e.registerPlugin) || defaultRegisterPlugin; // Add in convertFileSrc for web, it will already be available in native context

  if (!cap.convertFileSrc) {
    cap.convertFileSrc = filePath => filePath;
  }

  cap.getPlatform = getPlatform;
  cap.handleError = handleError;
  cap.isNativePlatform = isNativePlatform;
  cap.isPluginAvailable = isPluginAvailable;
  cap.pluginMethodNoop = pluginMethodNoop;
  cap.registerPlugin = registerPlugin;
  cap.Exception = CapacitorException;
  cap.DEBUG = !!cap.DEBUG;
  cap.isLoggingEnabled = !!cap.isLoggingEnabled; // Deprecated props

  cap.platform = cap.getPlatform();
  cap.isNative = cap.isNativePlatform();
  return cap;
};

const initCapacitorGlobal = win => win.Capacitor = createCapacitor(win);

const Capacitor = /*#__PURE__*/initCapacitorGlobal(typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {});
const registerPlugin = Capacitor.registerPlugin;
/**
 * @deprecated Provided for backwards compatibility for Capacitor v2 plugins.
 * Capacitor v3 plugins should import the plugin directly. This "Plugins"
 * export is deprecated in v3, and will be removed in v4.
 */

const Plugins = Capacitor.Plugins;
/**
 * Provided for backwards compatibility. Use the registerPlugin() API
 * instead, and provide the web plugin as the "web" implmenetation.
 * For example
 *
 * export const Example = registerPlugin('Example', {
 *   web: () => import('./web').then(m => new m.Example())
 * })
 *
 * @deprecated Deprecated in v3, will be removed from v4.
 */

const registerWebPlugin = plugin => legacyRegisterWebPlugin(Capacitor, plugin);
/**
 * Base class web plugins should extend.
 */


class WebPlugin {
  constructor(config) {
    this.listeners = {};
    this.windowListeners = {};

    if (config) {
      // TODO: add link to upgrade guide
      console.warn(`Capacitor WebPlugin "${config.name}" config object was deprecated in v3 and will be removed in v4.`);
      this.config = config;
    }
  }

  addListener(eventName, listenerFunc) {
    var _this = this;

    const listeners = this.listeners[eventName];

    if (!listeners) {
      this.listeners[eventName] = [];
    }

    this.listeners[eventName].push(listenerFunc); // If we haven't added a window listener for this event and it requires one,
    // go ahead and add it

    const windowListener = this.windowListeners[eventName];

    if (windowListener && !windowListener.registered) {
      this.addWindowListener(windowListener);
    }

    const remove = /*#__PURE__*/function () {
      var _ref5 = (0,_Users_ahmadhamoush_Downloads_Webdev_Ratify_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        return _this.removeListener(eventName, listenerFunc);
      });

      return function remove() {
        return _ref5.apply(this, arguments);
      };
    }();

    const p = Promise.resolve({
      remove
    });
    Object.defineProperty(p, 'remove', {
      value: function () {
        var _ref6 = (0,_Users_ahmadhamoush_Downloads_Webdev_Ratify_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          console.warn(`Using addListener() without 'await' is deprecated.`);
          yield remove();
        });

        return function value() {
          return _ref6.apply(this, arguments);
        };
      }()
    });
    return p;
  }

  removeAllListeners() {
    var _this2 = this;

    return (0,_Users_ahmadhamoush_Downloads_Webdev_Ratify_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.listeners = {};

      for (const listener in _this2.windowListeners) {
        _this2.removeWindowListener(_this2.windowListeners[listener]);
      }

      _this2.windowListeners = {};
    })();
  }

  notifyListeners(eventName, data) {
    const listeners = this.listeners[eventName];

    if (listeners) {
      listeners.forEach(listener => listener(data));
    }
  }

  hasListeners(eventName) {
    return !!this.listeners[eventName].length;
  }

  registerWindowListener(windowEventName, pluginEventName) {
    this.windowListeners[pluginEventName] = {
      registered: false,
      windowEventName,
      pluginEventName,
      handler: event => {
        this.notifyListeners(pluginEventName, event);
      }
    };
  }

  unimplemented(msg = 'not implemented') {
    return new Capacitor.Exception(msg, ExceptionCode.Unimplemented);
  }

  unavailable(msg = 'not available') {
    return new Capacitor.Exception(msg, ExceptionCode.Unavailable);
  }

  removeListener(eventName, listenerFunc) {
    var _this3 = this;

    return (0,_Users_ahmadhamoush_Downloads_Webdev_Ratify_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const listeners = _this3.listeners[eventName];

      if (!listeners) {
        return;
      }

      const index = listeners.indexOf(listenerFunc);

      _this3.listeners[eventName].splice(index, 1); // If there are no more listeners for this type of event,
      // remove the window listener


      if (!_this3.listeners[eventName].length) {
        _this3.removeWindowListener(_this3.windowListeners[eventName]);
      }
    })();
  }

  addWindowListener(handle) {
    window.addEventListener(handle.windowEventName, handle.handler);
    handle.registered = true;
  }

  removeWindowListener(handle) {
    if (!handle) {
      return;
    }

    window.removeEventListener(handle.windowEventName, handle.handler);
    handle.registered = false;
  }

}

const WebView = /*#__PURE__*/registerPlugin('WebView');


/***/ }),

/***/ 787:
/*!******************************************************!*\
  !*** ./src/app/welcome/welcome.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "* {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  box-sizing: border-box;\n}\n\n.round-bottom {\n  border-bottom-left-radius: 50% 150px !important;\n  border-bottom-right-radius: 50% 150px !important;\n  overflow: hidden;\n  position: absolute;\n  /* Ellipse 1 */\n  background: linear-gradient(180deg, #2EA5BF 0%, #2EA5BF 100%);\n  top: -250px;\n  width: 864px;\n  height: 880px;\n  left: -248px;\n  transition: 2s;\n}\n\n.container {\n  width: 100%;\n  height: 100% !important;\n  overflow: hidden;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.welcome {\n  margin: auto;\n}\n\n.btn {\n  bottom: 0;\n  position: absolute;\n  max-width: auto;\n  margin: 20px;\n  margin-left: 20px;\n}\n\n.logo {\n  font-size: 30px;\n  position: absolute;\n  left: 2%;\n  top: 2%;\n  width: 100%;\n  z-index: 2;\n  text-align: left;\n  --ion-item-background: linear-gradient(180deg, #2EA5BF 0%, #2EA5BF 100%);\n  --ion-item-color: #eee;\n}\n\n.input {\n  /* Rectangle */\n  border: 1px solid #2EA5BF;\n  box-sizing: border-box;\n  border-radius: 40px;\n  margin-bottom: 10px;\n}\n\n.inputs {\n  margin: 0 20px;\n}\n\n.input ion-input {\n  text-align: center;\n}\n\n.input ion-label {\n  text-align: center;\n}\n\n.signin {\n  /* SIGN IN */\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 700;\n  line-height: 20px;\n  padding-top: 100px;\n  /* identical to box height, or 83% */\n  text-align: center;\n  text-transform: uppercase;\n  margin: 20px;\n  padding-bottom: 20px;\n  margin-bottom: 100px;\n  background-color: linear-gradient(180deg, #2EA5BF 0%, #2EA5BF 100%);\n}\n\n.btn {\n  position: relative;\n}\n\nion-label p {\n  /* Dont have an account? Sign up right now! */\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 20px;\n  /* or 167% */\n  text-align: left;\n  text-transform: uppercase;\n  color: #2EA5BF;\n}\n\nion-label h2 {\n  /* Dont have an account? Sign up right now! */\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 600;\n  line-height: 20px;\n  font-size: 28px;\n  /* or 125% */\n  margin-top: 10px;\n  text-align: center;\n  text-transform: capitalize;\n  text-decoration: none;\n  background: linear-gradient(180deg, #2EA5BF 0%, #2EA5BF 100%);\n}\n\n.options ion-icon {\n  margin: 0 20px;\n  transform: scale(1.8);\n}\n\n.profile {\n  transform: scale(3);\n  margin-right: 15px;\n  background-color: #2EA5BF;\n}\n\n.camera {\n  margin: auto;\n  position: absolute;\n  transition: 0.8s;\n  filter: invert(1);\n}\n\n.upload:hover > .camera,\n.upload:active {\n  filter: invert(0);\n}\n\n.input_file {\n  transform: scale(4);\n  opacity: 0;\n}\n\n.upload {\n  transform: scale(3);\n  border-radius: 100%;\n  transition: 0.8s;\n  margin-bottom: 50px;\n}\n\n.upload:hover,\n.upload:active {\n  box-shadow: 0 0 30px lightblue;\n}\n\n@media (min-width: 500px) {\n  .round-bottom {\n    top: -140px;\n    width: 2064px;\n    height: 880px;\n    left: -248px;\n  }\n\n  .text {\n    width: 100%;\n  }\n\n  .btn {\n    width: 50%;\n  }\n\n  .signin {\n    --ion-item-background: linear-gradient(180deg, #2EA5BF 0%, #2EA5BF 100%);\n    color: #eee;\n  }\n\n  .inputs {\n    justify-content: center;\n    margin: auto;\n  }\n\n  .options {\n    margin-bottom: 100px;\n  }\n}\n\n.welcome {\n  --ion-item-background: linear-gradient(180deg, #2EA5BF 0%, #2EA5BF 100%);\n  --ion-item-color: #eee;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7QUFDSjs7QUFFQTtFQUNJLCtDQUFBO0VBQ0EsZ0RBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLDZEQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtBQUNKOztBQUVBO0VBQ0ksU0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0Esd0VBQUE7RUFDQSxzQkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtBQUNKOztBQUVBO0VBRUksa0JBQUE7QUFBSjs7QUFHQTtFQUNJLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxtRUFBQTtBQUFKOztBQUdBO0VBQ0ksa0JBQUE7QUFBSjs7QUFHQTtFQUNJLDZDQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FBQUo7O0FBR0E7RUFDSSw2Q0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQkFBQTtFQUNBLDZEQUFBO0FBQUo7O0FBR0E7RUFDSSxjQUFBO0VBQ0EscUJBQUE7QUFBSjs7QUFHQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQUFKOztBQUtBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUZKOztBQU9BOztFQUVJLGlCQUFBO0FBSko7O0FBT0E7RUFDSSxtQkFBQTtFQUNBLFVBQUE7QUFKSjs7QUFPQTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBSko7O0FBT0E7O0VBRUksOEJBQUE7QUFKSjs7QUFTQTtFQUNJO0lBQ0ksV0FBQTtJQUNBLGFBQUE7SUFDQSxhQUFBO0lBQ0EsWUFBQTtFQU5OOztFQVFFO0lBQ0ksV0FBQTtFQUxOOztFQU9FO0lBQ0ksVUFBQTtFQUpOOztFQU1FO0lBQ0ksd0VBQUE7SUFDQSxXQUFBO0VBSE47O0VBS0U7SUFDSSx1QkFBQTtJQUNBLFlBQUE7RUFGTjs7RUFJRTtJQUNJLG9CQUFBO0VBRE47QUFDRjs7QUFJQTtFQUNJLHdFQUFBO0VBQ0Esc0JBQUE7QUFGSiIsImZpbGUiOiJ3ZWxjb21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJvcmRlcjogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4ucm91bmQtYm90dG9tIHtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1MCUgMTUwcHggIWltcG9ydGFudDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNTAlIDE1MHB4ICFpbXBvcnRhbnQ7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLyogRWxsaXBzZSAxICovXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzJFQTVCRiAwJSwgIzJFQTVCRiAxMDAlKTtcbiAgICB0b3A6IC0yNTBweDtcbiAgICB3aWR0aDogODY0cHg7XG4gICAgaGVpZ2h0OiA4ODBweDtcbiAgICBsZWZ0OiAtMjQ4cHg7XG4gICAgdHJhbnNpdGlvbjogMnM7XG59XG5cbi5jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLndlbGNvbWUge1xuICAgIG1hcmdpbjogYXV0bztcbn1cblxuLmJ0biB7XG4gICAgYm90dG9tOiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXgtd2lkdGg6IGF1dG87XG4gICAgbWFyZ2luOiAyMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4ubG9nbyB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAyJTtcbiAgICB0b3A6IDIlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHotaW5kZXg6IDI7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMyRUE1QkYgMCUsICMyRUE1QkYgMTAwJSk7XG4gICAgLS1pb24taXRlbS1jb2xvcjogI2VlZTtcbn1cblxuLmlucHV0IHtcbiAgICAvKiBSZWN0YW5nbGUgKi9cbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMkVBNUJGO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uaW5wdXRzIHtcbiAgICBtYXJnaW46IDAgMjBweDtcbn1cblxuLmlucHV0IGlvbi1pbnB1dCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyAvL2N1cnJlbnRDb2xvclxufVxuXG4uaW5wdXQgaW9uLWxhYmVsIHtcbiAgICAvLyBjb2xvcjogIzJFQTVCRjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zaWduaW4ge1xuICAgIC8qIFNJR04gSU4gKi9cbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCwgb3IgODMlICovXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbWFyZ2luOiAyMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMyRUE1QkYgMCUsICMyRUE1QkYgMTAwJSk7XG59XG5cbi5idG4ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuaW9uLWxhYmVsIHAge1xuICAgIC8qIERvbnQgaGF2ZSBhbiBhY2NvdW50PyBTaWduIHVwIHJpZ2h0IG5vdyEgKi9cbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAvKiBvciAxNjclICovXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGNvbG9yOiAjMkVBNUJGO1xufVxuXG5pb24tbGFiZWwgaDIge1xuICAgIC8qIERvbnQgaGF2ZSBhbiBhY2NvdW50PyBTaWduIHVwIHJpZ2h0IG5vdyEgKi9cbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAvKiBvciAxMjUlICovXG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMyRUE1QkYgMCUsICMyRUE1QkYgMTAwJSk7XG59XG5cbi5vcHRpb25zIGlvbi1pY29uIHtcbiAgICBtYXJnaW46IDAgMjBweDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuOCk7XG59XG5cbi5wcm9maWxlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDMpO1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkVBNUJGO1xufVxuXG4ucHJvZmlsZTpob3ZlciB7fVxuXG4uY2FtZXJhIHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRyYW5zaXRpb246IDAuOHM7XG4gICAgZmlsdGVyOiBpbnZlcnQoMSk7XG59XG5cbi5jYW1lcmE6aG92ZXIge31cblxuLnVwbG9hZDpob3Zlcj4uY2FtZXJhLFxuLnVwbG9hZDphY3RpdmUge1xuICAgIGZpbHRlcjogaW52ZXJ0KDApO1xufVxuXG4uaW5wdXRfZmlsZSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSg0KTtcbiAgICBvcGFjaXR5OiAwO1xufVxuXG4udXBsb2FkIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDMpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgdHJhbnNpdGlvbjogMC44cztcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuXG4udXBsb2FkOmhvdmVyLFxuLnVwbG9hZDphY3RpdmUge1xuICAgIGJveC1zaGFkb3c6IDAgMCAzMHB4IGxpZ2h0Ymx1ZTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGggOjQxNXB4KSBhbmQgKG1pbi13aWR0aDogMjc4cHgpIHt9XG5cbkBtZWRpYSAobWluLXdpZHRoOiA1MDBweCkge1xuICAgIC5yb3VuZC1ib3R0b20ge1xuICAgICAgICB0b3A6IC0xNDBweDtcbiAgICAgICAgd2lkdGg6IDIwNjRweDtcbiAgICAgICAgaGVpZ2h0OiA4ODBweDtcbiAgICAgICAgbGVmdDogLTI0OHB4O1xuICAgIH1cbiAgICAudGV4dCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICAuYnRuIHtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICB9XG4gICAgLnNpZ25pbiB7XG4gICAgICAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzJFQTVCRiAwJSwgIzJFQTVCRiAxMDAlKTtcbiAgICAgICAgY29sb3I6ICNlZWU7XG4gICAgfVxuICAgIC5pbnB1dHMge1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgIH1cbiAgICAub3B0aW9ucyB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xuICAgIH1cbn1cblxuLndlbGNvbWUge1xuICAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzJFQTVCRiAwJSwgIzJFQTVCRiAxMDAlKTtcbiAgICAtLWlvbi1pdGVtLWNvbG9yOiAjZWVlO1xufSJdfQ== */";

/***/ }),

/***/ 7030:
/*!******************************************************!*\
  !*** ./src/app/welcome/welcome.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n\n\n\n    <div class=\"container\">\n        <div id=\"bg\" class=\"round-bottom\"></div>\n\n        <div class=\"welcome\">\n            <ion-item lines=\"none\" class=\"logo\">\n                <ion-label>\n                    Ratify\n                </ion-label>\n\n            </ion-item>\n            <ion-item lines='none'>\n                <ion-label>\n                    <h2 style=\"margin-bottom: 100px;\" class=\"signin\">Welcome<br><br>{{user_name}},</h2>\n                </ion-label>\n            </ion-item>\n\n\n            <form (ngSubmit)=\"getStarted()\" ngNativeValidate class=\"inputs\" enctype=\"multipart/form-data\">\n                <div style=\"position:relative; margin-right:50px\">\n                    <ion-fab horizontal=\"center\" slot=\"fixed\">\n                        <ion-fab-button class=\"upload\">\n                            <ion-input ((click)=\"pickOrCapture()\" [ngModelOptions]=\"{standalone:true}\" [(ngModel)]='image'></ion-input>\n                            <ion-icon class=\"profile\" name=\"person-circle\"></ion-icon>\n                            <ion-icon class=\"camera\" name=\"camera\"></ion-icon>\n                        </ion-fab-button>\n                    </ion-fab>\n                    <ion-item style=\"padding-top: 100px; margin-left: 60px;\" lines=\"none\"><small>Upload Profile Picture</small>\n                    </ion-item>\n                </div>\n                <ion-item lines=\"none\" class=\"input\">\n                    <ion-label position=\"floating\">Enter Name</ion-label>\n                    <ion-input [ngModelOptions]=\"{standalone:true}\" [(ngModel)]='name' required>\n                    </ion-input>\n                </ion-item>\n                <ion-button type=\"submit\" class='btn' color=\"dark\" expand=\"'full\" shape=''>Get Started</ion-button>\n            </form>\n        </div>\n\n\n\n    </div>\n\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_welcome_welcome_module_ts.js.map