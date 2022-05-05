"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_settings-modal_settings-modal_module_ts"],{

/***/ 7071:
/*!***********************************************************************!*\
  !*** ./src/app/pages/settings-modal/settings-modal-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsModalPageRoutingModule": () => (/* binding */ SettingsModalPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _settings_modal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings-modal.page */ 7986);




const routes = [
    {
        path: '',
        component: _settings_modal_page__WEBPACK_IMPORTED_MODULE_0__.SettingsModalPage
    }
];
let SettingsModalPageRoutingModule = class SettingsModalPageRoutingModule {
};
SettingsModalPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SettingsModalPageRoutingModule);



/***/ }),

/***/ 1780:
/*!***************************************************************!*\
  !*** ./src/app/pages/settings-modal/settings-modal.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsModalPageModule": () => (/* binding */ SettingsModalPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _settings_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings-modal-routing.module */ 7071);
/* harmony import */ var _settings_modal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings-modal.page */ 7986);







let SettingsModalPageModule = class SettingsModalPageModule {
};
SettingsModalPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _settings_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__.SettingsModalPageRoutingModule
        ],
        declarations: [_settings_modal_page__WEBPACK_IMPORTED_MODULE_1__.SettingsModalPage]
    })
], SettingsModalPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_pages_settings-modal_settings-modal_module_ts.js.map