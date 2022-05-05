"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_tabs_search_search_module_ts"],{

/***/ 3214:
/*!************************************************************!*\
  !*** ./src/app/pages/tabs/search/search-routing.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchPageRoutingModule": () => (/* binding */ SearchPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _search_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.page */ 1978);




const routes = [
    {
        path: '',
        component: _search_page__WEBPACK_IMPORTED_MODULE_0__.SearchPage
    }
];
let SearchPageRoutingModule = class SearchPageRoutingModule {
};
SearchPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SearchPageRoutingModule);



/***/ }),

/***/ 9311:
/*!****************************************************!*\
  !*** ./src/app/pages/tabs/search/search.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchPageModule": () => (/* binding */ SearchPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _search_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search-routing.module */ 3214);
/* harmony import */ var _search_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.page */ 1978);







let SearchPageModule = class SearchPageModule {
};
SearchPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _search_routing_module__WEBPACK_IMPORTED_MODULE_0__.SearchPageRoutingModule
        ],
        declarations: [_search_page__WEBPACK_IMPORTED_MODULE_1__.SearchPage]
    })
], SearchPageModule);



/***/ }),

/***/ 1978:
/*!**************************************************!*\
  !*** ./src/app/pages/tabs/search/search.page.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchPage": () => (/* binding */ SearchPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _search_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.page.html?ngResource */ 5088);
/* harmony import */ var _search_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.page.scss?ngResource */ 1282);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let SearchPage = class SearchPage {
    constructor() { }
    ngOnInit() {
    }
};
SearchPage.ctorParameters = () => [];
SearchPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-search',
        template: _search_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_search_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SearchPage);



/***/ }),

/***/ 1282:
/*!***************************************************************!*\
  !*** ./src/app/pages/tabs/search/search.page.scss?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "* {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  box-sizing: border-box;\n}\n\n.round-bottom {\n  border-top-left-radius: 50% 150px !important;\n  border-top-right-radius: 50% 150px !important;\n  overflow: hidden;\n  position: absolute;\n  /* Ellipse 1 */\n  bottom: 0;\n  background: linear-gradient(180deg, #2EA5BF 0%, #2EA5BF 100%);\n  /* Ellipse 1 */\n  width: 864px;\n  height: 520px;\n  left: -248px;\n}\n\n.container {\n  width: 100%;\n  height: 100% !important;\n  overflow: hidden;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.logo {\n  font-size: 40px;\n  position: absolute;\n  left: 2%;\n  top: 2%;\n  width: 100%;\n  text-align: left;\n}\n\nion-item {\n  --ion-item-color: #2EA5BF;\n}\n\n.input {\n  /* Rectangle */\n  border: 1px solid #2EA5BF;\n  box-sizing: border-box;\n  border-radius: 4px;\n  margin-bottom: 450px;\n  margin-left: 20px;\n  margin-right: 20px;\n}\n\n.input ion-input {\n  --placeholder-color: #2EA5BF;\n}\n\n.input ion-label {\n  color: #2EA5BF;\n}\n\n.input ion-icon {\n  margin-top: 22px;\n  margin-right: 20px;\n  margin-left: 0;\n  color: #2EA5BF;\n  transform: scale(0.9);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtBQUNKOztBQUVBO0VBQ0ksNENBQUE7RUFDQSw2Q0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUNBLDZEQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBRUkseUJBQUE7QUFBSjs7QUFHQTtFQUNJLGNBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFHQTtFQUNJLDRCQUFBO0FBQUo7O0FBR0E7RUFDSSxjQUFBO0FBQUo7O0FBR0E7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQUFKIiwiZmlsZSI6InNlYXJjaC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3JkZXI6IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLnJvdW5kLWJvdHRvbSB7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNTAlIDE1MHB4ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDUwJSAxNTBweCAhaW1wb3J0YW50O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIC8qIEVsbGlwc2UgMSAqL1xuICAgIGJvdHRvbTogMDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMkVBNUJGIDAlLCAjMkVBNUJGIDEwMCUpO1xuICAgIC8qIEVsbGlwc2UgMSAqL1xuICAgIHdpZHRoOiA4NjRweDtcbiAgICBoZWlnaHQ6IDUyMHB4O1xuICAgIGxlZnQ6IC0yNDhweDtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubG9nbyB7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAyJTtcbiAgICB0b3A6IDIlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbmlvbi1pdGVtIHtcbiAgICAvLyAgICAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMkVBNUJGIDAlLCAjMkVBNUJGIDEwMCUpO1xuICAgIC0taW9uLWl0ZW0tY29sb3I6ICMyRUE1QkY7XG59XG5cbi5pbnB1dCB7XG4gICAgLyogUmVjdGFuZ2xlICovXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzJFQTVCRjtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBtYXJnaW4tYm90dG9tOiA0NTBweDtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi5pbnB1dCBpb24taW5wdXQge1xuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6ICMyRUE1QkY7IC8vY3VycmVudENvbG9yXG59XG5cbi5pbnB1dCBpb24tbGFiZWwge1xuICAgIGNvbG9yOiAjMkVBNUJGO1xufVxuXG4uaW5wdXQgaW9uLWljb24ge1xuICAgIG1hcmdpbi10b3A6IDIycHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIGNvbG9yOiAjMkVBNUJGO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcbn0iXX0= */";

/***/ }),

/***/ 5088:
/*!***************************************************************!*\
  !*** ./src/app/pages/tabs/search/search.page.html?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n    <div class=\"container\">\n\n        <div class=\"round-bottom\"></div>\n\n        <div>\n            <ion-item lines=\"none\" class=\"logo\">\n                <ion-label>\n                    Ratify\n                </ion-label>\n            </ion-item>\n            <ion-item class=\"input\">\n                <ion-icon slot='start' name=\"search\"></ion-icon>\n                <ion-label position=\"floating\">Search Username</ion-label>\n                <ion-input id=\"password\" [ngModelOptions]=\"{standalone:true}\" required [(ngModel)]='search'></ion-input>\n            </ion-item>\n        </div>\n    </div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tabs_search_search_module_ts.js.map