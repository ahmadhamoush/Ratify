"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_tabs_homepage_homepage_module_ts"],{

/***/ 5366:
/*!****************************************************************!*\
  !*** ./src/app/pages/tabs/homepage/homepage-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomepagePageRoutingModule": () => (/* binding */ HomepagePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _homepage_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage.page */ 8181);




const routes = [
    {
        path: '',
        component: _homepage_page__WEBPACK_IMPORTED_MODULE_0__.HomepagePage,
        children: [
            {
                path: 'profile',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_pages_settings-modal_settings-modal_page_ts"), __webpack_require__.e("src_app_pages_tabs_profile_profile_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../profile/profile.module */ 185)).then(m => m.ProfilePageModule)
            },
            {
                path: 'search',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_tabs_search_search_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../search/search.module */ 9311)).then(m => m.SearchPageModule)
            },
            {
                path: 'feed',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_pages_tabs_rating_rating_page_ts"), __webpack_require__.e("src_app_pages_tabs_feed_feed_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../feed/feed.module */ 7859)).then(m => m.FeedPageModule)
            },
            {
                path: 'leaderboard',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_tabs_leaderboard_leaderboard_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../leaderboard/leaderboard.module */ 8732)).then(m => m.LeaderboardPageModule)
            },
            {
                path: '',
                redirectTo: './tabs/profile',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: './tabs/profile',
        pathMatch: 'full'
    }
];
let HomepagePageRoutingModule = class HomepagePageRoutingModule {
};
HomepagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HomepagePageRoutingModule);



/***/ }),

/***/ 4969:
/*!********************************************************!*\
  !*** ./src/app/pages/tabs/homepage/homepage.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomepagePageModule": () => (/* binding */ HomepagePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _homepage_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage-routing.module */ 5366);
/* harmony import */ var _homepage_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homepage.page */ 8181);







let HomepagePageModule = class HomepagePageModule {
};
HomepagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _homepage_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomepagePageRoutingModule
        ],
        declarations: [_homepage_page__WEBPACK_IMPORTED_MODULE_1__.HomepagePage]
    })
], HomepagePageModule);



/***/ }),

/***/ 8181:
/*!******************************************************!*\
  !*** ./src/app/pages/tabs/homepage/homepage.page.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomepagePage": () => (/* binding */ HomepagePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _homepage_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage.page.html?ngResource */ 4847);
/* harmony import */ var _homepage_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homepage.page.scss?ngResource */ 167);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let HomepagePage = class HomepagePage {
    constructor() { }
    ngOnInit() {
    }
};
HomepagePage.ctorParameters = () => [];
HomepagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-homepage',
        template: _homepage_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_homepage_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomepagePage);



/***/ }),

/***/ 167:
/*!*******************************************************************!*\
  !*** ./src/app/pages/tabs/homepage/homepage.page.scss?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "ion-tab-bar,\nion-tab-button {\n  background-color: #2EA5BF;\n  border: 0;\n  margin-top: -1px;\n}\n\nion-icon {\n  color: white;\n}\n\n.tab-selected > ion-icon {\n  color: aqua;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWVwYWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFSSx5QkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtBQUNKIiwiZmlsZSI6ImhvbWVwYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10YWItYmFyLFxuaW9uLXRhYi1idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyRUE1QkY7XG4gICAgYm9yZGVyOiAwO1xuICAgIG1hcmdpbi10b3A6IC0xcHg7XG59XG5cbmlvbi1pY29uIHtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi50YWItc2VsZWN0ZWQ+aW9uLWljb24ge1xuICAgIGNvbG9yOiBhcXVhO1xufSJdfQ== */";

/***/ }),

/***/ 4847:
/*!*******************************************************************!*\
  !*** ./src/app/pages/tabs/homepage/homepage.page.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n</ion-content>\n<ion-tabs>\n    <ion-tab-bar slot=\"bottom\">\n        <ion-tab-button tab=\"leaderboard\">\n            <ion-icon name=\"flash\"></ion-icon>\n        </ion-tab-button>\n        <ion-tab-button tab=\"search\">\n            <ion-icon name=\"search\"></ion-icon>\n        </ion-tab-button>\n        <ion-tab-button tab=\"feed\">\n            <ion-icon name=\"home\"></ion-icon>\n        </ion-tab-button>\n        <ion-tab-button tab=\"profile\">\n            <ion-icon name=\"person\"></ion-icon>\n        </ion-tab-button>\n    </ion-tab-bar>\n</ion-tabs>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tabs_homepage_homepage_module_ts.js.map