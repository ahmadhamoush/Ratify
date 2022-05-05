"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_tabs_leaderboard_leaderboard_module_ts"],{

/***/ 2451:
/*!**********************************************************************!*\
  !*** ./src/app/pages/tabs/leaderboard/leaderboard-routing.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeaderboardPageRoutingModule": () => (/* binding */ LeaderboardPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _leaderboard_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./leaderboard.page */ 5854);




const routes = [
    {
        path: '',
        component: _leaderboard_page__WEBPACK_IMPORTED_MODULE_0__.LeaderboardPage
    }
];
let LeaderboardPageRoutingModule = class LeaderboardPageRoutingModule {
};
LeaderboardPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LeaderboardPageRoutingModule);



/***/ }),

/***/ 8732:
/*!**************************************************************!*\
  !*** ./src/app/pages/tabs/leaderboard/leaderboard.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeaderboardPageModule": () => (/* binding */ LeaderboardPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _leaderboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./leaderboard-routing.module */ 2451);
/* harmony import */ var _leaderboard_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./leaderboard.page */ 5854);







let LeaderboardPageModule = class LeaderboardPageModule {
};
LeaderboardPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _leaderboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.LeaderboardPageRoutingModule
        ],
        declarations: [_leaderboard_page__WEBPACK_IMPORTED_MODULE_1__.LeaderboardPage]
    })
], LeaderboardPageModule);



/***/ }),

/***/ 5854:
/*!************************************************************!*\
  !*** ./src/app/pages/tabs/leaderboard/leaderboard.page.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeaderboardPage": () => (/* binding */ LeaderboardPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _leaderboard_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./leaderboard.page.html?ngResource */ 7254);
/* harmony import */ var _leaderboard_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./leaderboard.page.scss?ngResource */ 5418);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let LeaderboardPage = class LeaderboardPage {
    constructor() { }
    ngOnInit() {
    }
};
LeaderboardPage.ctorParameters = () => [];
LeaderboardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-leaderboard',
        template: _leaderboard_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_leaderboard_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LeaderboardPage);



/***/ }),

/***/ 5418:
/*!*************************************************************************!*\
  !*** ./src/app/pages/tabs/leaderboard/leaderboard.page.scss?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "* {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  box-sizing: border-box;\n}\n\n.round-bottom {\n  border-top-left-radius: 100% 170px !important;\n  border-top-right-radius: 100% 170px !important;\n  overflow: hidden;\n  position: absolute;\n  /* Ellipse 1 */\n  bottom: 0;\n  background: linear-gradient(180deg, #2EA5BF 0%, #2EA5BF 100%);\n  /* Ellipse 1 */\n  width: 100%;\n  height: 20px;\n}\n\n.round-top {\n  border-bottom-left-radius: 50% 150px !important;\n  border-bottom-right-radius: 50% 150px !important;\n  overflow: hidden;\n  position: absolute;\n  /* Ellipse 1 */\n  top: 0;\n  background: linear-gradient(180deg, #2EA5BF 0%, #2EA5BF 100%);\n  /* Ellipse 1 */\n  width: 864px;\n  height: 150px;\n  left: -248px;\n}\n\n.container {\n  width: 100%;\n  height: 100% !important;\n  overflow: hidden;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.logo {\n  font-size: 40px;\n  position: absolute;\n  left: 2%;\n  top: 2%;\n  width: 100%;\n  text-align: left;\n}\n\nion-item {\n  --ion-item-background: linear-gradient(180deg, #2EA5BF 0%, #2EA5BF 100%);\n  --ion-item-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlYWRlcmJvYXJkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0FBQ0o7O0FBRUE7RUFDSSw2Q0FBQTtFQUNBLDhDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0VBQ0EsNkRBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLCtDQUFBO0VBQ0EsZ0RBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLE1BQUE7RUFDQSw2REFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLHdFQUFBO0VBQ0EsdUJBQUE7QUFDSiIsImZpbGUiOiJsZWFkZXJib2FyZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3JkZXI6IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLnJvdW5kLWJvdHRvbSB7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTAwJSAxNzBweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMDAlIDE3MHB4ICFpbXBvcnRhbnQ7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLyogRWxsaXBzZSAxICovXG4gICAgYm90dG9tOiAwO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMyRUE1QkYgMCUsICMyRUE1QkYgMTAwJSk7XG4gICAgLyogRWxsaXBzZSAxICovXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyMHB4O1xufVxuXG4ucm91bmQtdG9wIHtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1MCUgMTUwcHggIWltcG9ydGFudDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNTAlIDE1MHB4ICFpbXBvcnRhbnQ7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLyogRWxsaXBzZSAxICovXG4gICAgdG9wOiAwO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMyRUE1QkYgMCUsICMyRUE1QkYgMTAwJSk7XG4gICAgLyogRWxsaXBzZSAxICovXG4gICAgd2lkdGg6IDg2NHB4O1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgbGVmdDogLTI0OHB4O1xufVxuXG4uY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5sb2dvIHtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDIlO1xuICAgIHRvcDogMiU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuaW9uLWl0ZW0ge1xuICAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzJFQTVCRiAwJSwgIzJFQTVCRiAxMDAlKTtcbiAgICAtLWlvbi1pdGVtLWNvbG9yOiB3aGl0ZTtcbn0iXX0= */";

/***/ }),

/***/ 7254:
/*!*************************************************************************!*\
  !*** ./src/app/pages/tabs/leaderboard/leaderboard.page.html?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n    <div class=\"container\">\n\n        <div class=\"round-bottom\"></div>\n        <div class=\"round-top\"></div>\n        <div>\n            <ion-item lines=\"none\" class=\"logo\">\n                <ion-label>\n                    Ratify\n                </ion-label>\n\n            </ion-item>\n        </div>\n    </div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tabs_leaderboard_leaderboard_module_ts.js.map