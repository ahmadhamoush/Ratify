"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_home_home_module_ts"],{

/***/ 6610:
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 678);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 7994:
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 678);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 6610);







let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 678:
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page.html?ngResource */ 8380);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 2260);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);





let HomePage = class HomePage {
    constructor(route) {
        this.route = route;
    }
    login() {
        this.route.navigate(['/login']);
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-home',
        template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 2260:
/*!******************************************************!*\
  !*** ./src/app/pages/home/home.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "* {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  box-sizing: border-box;\n}\n\n.round-bottom {\n  border-bottom-left-radius: 50% 150px !important;\n  border-bottom-right-radius: 50% 150px !important;\n  overflow: hidden;\n  position: absolute;\n  /* Ellipse 1 */\n  top: -300px;\n  background: linear-gradient(180deg, #2EA5BF 0%, #2EA5BF 100%);\n  /* Ellipse 1 */\n  width: 864px;\n  height: 680px;\n  left: -248px;\n}\n\n.container {\n  width: 100%;\n  height: 100% !important;\n  overflow: hidden;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n/* People */\n\n.people {\n  margin-top: -50%;\n  margin-bottom: 0;\n  position: relative;\n  margin-left: -18%;\n  margin-right: 0;\n  min-height: 100vh;\n  height: 550px;\n  width: 130vw;\n  overflow: hidden;\n  transform: scale(0.9);\n}\n\n/* Ellipse 2 */\n\n#img1 {\n  position: absolute;\n  width: 138px;\n  height: 131px;\n  left: 120px;\n  top: 384px;\n  border-radius: 100%;\n  background: url(\"/assets/img1.jpg\") center;\n  background-size: 100%;\n  --min-height: 0;\n}\n\n/* Ellipse 3 */\n\n#img2 {\n  position: absolute;\n  width: 35px;\n  height: 32px;\n  left: 91px;\n  top: 361px;\n  background: url(\"/assets/img2.webp\") center;\n  background-size: 145%;\n  --min-height: 0;\n  border-radius: 100%;\n}\n\n/* Ellipse 9 */\n\n#img3 {\n  position: absolute;\n  width: 35px;\n  height: 32px;\n  left: 176px;\n  top: 329px;\n  background-size: 160% !important;\n  --min-height: 0;\n  border-radius: 100%;\n  background: url(\"/assets/img3.jpg\") center;\n}\n\n/* Ellipse 10 */\n\n#img4 {\n  position: absolute;\n  width: 35px;\n  height: 32px;\n  left: 81px;\n  top: 491px;\n  --min-height: 0;\n  border-radius: 100%;\n  background-size: 160% !important;\n  background: url(\"/assets/img5.jpg\") center;\n}\n\ndiv.item-native {\n  background: unset !important;\n}\n\n/* Ellipse 4 */\n\n#img5 {\n  position: absolute;\n  width: 35px;\n  height: 32px;\n  left: 261px;\n  top: 350px;\n  --min-height: 0;\n  border-radius: 100%;\n  background-size: 160% !important;\n  background: url(\"/assets/img4.webp\") center;\n}\n\n/* Ellipse 6 */\n\n#img6 {\n  position: absolute;\n  width: 35px;\n  height: 32px;\n  left: 141px;\n  top: 539px;\n  --min-height: 0;\n  border-radius: 100%;\n  background-size: 110% !important;\n  background: url(\"/assets/img6.jpg\") center;\n}\n\n/* Ellipse 7 */\n\n#img7 {\n  position: absolute;\n  width: 35px;\n  height: 32px;\n  left: 226px;\n  top: 533px;\n  --min-height: 0;\n  border-radius: 100%;\n  background-size: 160% !important;\n  background: url(\"/assets/img7.jpg\") right;\n}\n\n/* Ellipse 11 */\n\n#img8 {\n  position: absolute;\n  width: 35px;\n  height: 32px;\n  left: 277px;\n  top: 479px;\n  --min-height: 0;\n  border-radius: 100%;\n  background-size: 160% !important;\n  background: url(\"/assets/img8.webp\") center;\n}\n\n/* Ellipse 8 */\n\n#img9 {\n  position: absolute;\n  width: 35px;\n  height: 32px;\n  left: 292px;\n  top: 419px;\n  --min-height: 0;\n  border-radius: 100%;\n  background-size: 160% !important;\n  background: url(\"/assets/img9.jpg\") center;\n}\n\n/* Ellipse 5 */\n\n#img10 {\n  position: absolute;\n  width: 35px;\n  height: 32px;\n  left: 56px;\n  top: 432px;\n  --min-height: 0;\n  border-radius: 100%;\n  background-size: 100% !important;\n  background: url(\"/assets/img10.jpeg\") center;\n}\n\n.btn {\n  bottom: 0;\n  position: absolute;\n  margin: 20px;\n  margin-left: 10px;\n  text-align: center;\n  justify-content: center;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  width: 92%;\n}\n\n.text {\n  position: absolute;\n  bottom: 15.48%;\n  --ion-item-background: transparent;\n  --ion-item-color: black;\n  text-align: center;\n  margin-bottom: 15px;\n}\n\n.logo {\n  font-size: 40px;\n  position: absolute;\n  left: 2%;\n  top: 2%;\n  width: 100%;\n  text-align: left;\n}\n\nion-item {\n  --ion-item-background: linear-gradient(180deg, #2EA5BF 0%, #2EA5BF 100%);\n  --ion-item-color: #eee;\n}\n\n.footer {\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n@media (max-width: 495px) and (min-width: 278px) {\n  .people {\n    position: relative;\n    margin: auto;\n    bottom: 150px;\n    width: 370px;\n    transform: scale(1.1);\n  }\n\n  .text {\n    width: 100%;\n  }\n}\n\n@media (min-width: 500px) {\n  .round-bottom {\n    top: -300px;\n    width: 2064px;\n    height: 680px;\n    left: -248px;\n  }\n\n  .text {\n    width: 100%;\n  }\n\n  .btn {\n    width: 97%;\n  }\n\n  .people {\n    position: relative;\n    margin: auto;\n    bottom: 150px;\n    width: 370px;\n    transform: scale(1.5);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,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a0NBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUE5Qko7O0FBaUNBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUE5Qko7O0FBaUNBO0VBQ0ksd0VBQUE7RUFDQSxzQkFBQTtBQTlCSjs7QUFpQ0E7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUE5Qko7O0FBa0NBO0VBQ0k7SUFDSSxrQkFBQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0lBQ0EsWUFBQTtJQUNBLHFCQUFBO0VBL0JOOztFQWlDRTtJQUNJLFdBQUE7RUE5Qk47QUFDRjs7QUFrQ0E7RUFDSTtJQUNJLFdBQUE7SUFDQSxhQUFBO0lBQ0EsYUFBQTtJQUNBLFlBQUE7RUFoQ047O0VBa0NFO0lBQ0ksV0FBQTtFQS9CTjs7RUFpQ0U7SUFDSSxVQUFBO0VBOUJOOztFQWdDRTtJQUNJLGtCQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7SUFDQSxZQUFBO0lBQ0EscUJBQUE7RUE3Qk47QUFDRiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJvcmRlcjogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4ucm91bmQtYm90dG9tIHtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1MCUgMTUwcHggIWltcG9ydGFudDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNTAlIDE1MHB4ICFpbXBvcnRhbnQ7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLyogRWxsaXBzZSAxICovXG4gICAgdG9wOiAtMzAwcHg7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzJFQTVCRiAwJSwgIzJFQTVCRiAxMDAlKTtcbiAgICAvKiBFbGxpcHNlIDEgKi9cbiAgICB3aWR0aDogODY0cHg7XG4gICAgaGVpZ2h0OiA2ODBweDtcbiAgICBsZWZ0OiAtMjQ4cHg7XG59XG5cbi5jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLy8gLmNpcmNsZSB7XG4vLyAgICAgZmxvYXQ6IGxlZnQ7XG4vLyAgICAgbWFyZ2luLWxlZnQ6IDEyNXB4O1xuLy8gICAgIG1hcmdpbi10b3A6IDIwcHg7XG4vLyAgICAgd2lkdGg6IDIwMHB4O1xuLy8gICAgIGhlaWdodDogMjAwcHg7XG4vLyAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbi8vICAgICBvdmVyZmxvdzogaGlkZGVuO1xuLy8gfVxuXG4vKiBQZW9wbGUgKi9cblxuLnBlb3BsZSB7XG4gICAgbWFyZ2luLXRvcDogLTUwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tbGVmdDogLTE4JTtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgaGVpZ2h0OiA1NTBweDtcbiAgICB3aWR0aDogMTMwdnc7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XG59XG5cblxuLyogRWxsaXBzZSAyICovXG5cbiNpbWcxIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEzOHB4O1xuICAgIGhlaWdodDogMTMxcHg7XG4gICAgbGVmdDogMTIwcHg7XG4gICAgdG9wOiAzODRweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWcxLmpwZycpIGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gICAgLS1taW4taGVpZ2h0OiAwO1xufVxuXG5cbi8qIEVsbGlwc2UgMyAqL1xuXG4jaW1nMiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIGhlaWdodDogMzJweDtcbiAgICBsZWZ0OiA5MXB4O1xuICAgIHRvcDogMzYxcHg7XG4gICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltZzIud2VicCcpIGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDE0NSU7XG4gICAgLS1taW4taGVpZ2h0OiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG59XG5cblxuLyogRWxsaXBzZSA5ICovXG5cbiNpbWczIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDM1cHg7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIGxlZnQ6IDE3NnB4O1xuICAgIHRvcDogMzI5cHg7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxNjAlICFpbXBvcnRhbnQ7XG4gICAgLS1taW4taGVpZ2h0OiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltZzMuanBnJykgY2VudGVyO1xufVxuXG5cbi8qIEVsbGlwc2UgMTAgKi9cblxuI2ltZzQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMzVweDtcbiAgICBoZWlnaHQ6IDMycHg7XG4gICAgbGVmdDogODFweDtcbiAgICB0b3A6IDQ5MXB4O1xuICAgIC0tbWluLWhlaWdodDogMDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTYwJSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWc1LmpwZycpIGNlbnRlcjtcbn1cblxuZGl2Lml0ZW0tbmF0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiB1bnNldCAhaW1wb3J0YW50O1xufVxuXG5cbi8qIEVsbGlwc2UgNCAqL1xuXG4jaW1nNSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIGhlaWdodDogMzJweDtcbiAgICBsZWZ0OiAyNjFweDtcbiAgICB0b3A6IDM1MHB4O1xuICAgIC0tbWluLWhlaWdodDogMDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTYwJSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWc0LndlYnAnKSBjZW50ZXI7XG59XG5cblxuLyogRWxsaXBzZSA2ICovXG5cbiNpbWc2IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDM1cHg7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIGxlZnQ6IDE0MXB4O1xuICAgIHRvcDogNTM5cHg7XG4gICAgLS1taW4taGVpZ2h0OiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMTAlICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltZzYuanBnJykgY2VudGVyO1xufVxuXG5cbi8qIEVsbGlwc2UgNyAqL1xuXG4jaW1nNyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIGhlaWdodDogMzJweDtcbiAgICBsZWZ0OiAyMjZweDtcbiAgICB0b3A6IDUzM3B4O1xuICAgIC0tbWluLWhlaWdodDogMDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTYwJSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWc3LmpwZycpIHJpZ2h0O1xufVxuXG5cbi8qIEVsbGlwc2UgMTEgKi9cblxuI2ltZzgge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMzVweDtcbiAgICBoZWlnaHQ6IDMycHg7XG4gICAgbGVmdDogMjc3cHg7XG4gICAgdG9wOiA0NzlweDtcbiAgICAtLW1pbi1oZWlnaHQ6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDE2MCUgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1nOC53ZWJwJykgY2VudGVyO1xufVxuXG5cbi8qIEVsbGlwc2UgOCAqL1xuXG4jaW1nOSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIGhlaWdodDogMzJweDtcbiAgICBsZWZ0OiAyOTJweDtcbiAgICB0b3A6IDQxOXB4O1xuICAgIC0tbWluLWhlaWdodDogMDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTYwJSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWc5LmpwZycpIGNlbnRlcjtcbn1cblxuXG4vKiBFbGxpcHNlIDUgKi9cblxuI2ltZzEwIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDM1cHg7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIGxlZnQ6IDU2cHg7XG4gICAgdG9wOiA0MzJweDtcbiAgICAtLW1pbi1oZWlnaHQ6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1nMTAuanBlZycpIGNlbnRlcjtcbn1cblxuLmJ0biB7XG4gICAgYm90dG9tOiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXJnaW46IDIwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICAgIHdpZHRoOiA5MiU7XG59XG5cbi50ZXh0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAxNS40OCU7XG4gICAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAtLWlvbi1pdGVtLWNvbG9yOiBibGFjaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmxvZ28ge1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMiU7XG4gICAgdG9wOiAyJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG5pb24taXRlbSB7XG4gICAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMkVBNUJGIDAlLCAjMkVBNUJGIDEwMCUpO1xuICAgIC0taW9uLWl0ZW0tY29sb3I6ICNlZWU7XG59XG5cbi5mb290ZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLy9zbWFsbGVyIGRldmljZXNcbkBtZWRpYSAobWF4LXdpZHRoIDo0OTVweCkgYW5kIChtaW4td2lkdGg6IDI3OHB4KSB7XG4gICAgLnBlb3BsZSB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBib3R0b206IDE1MHB4O1xuICAgICAgICB3aWR0aDogMzcwcHg7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICB9XG4gICAgLnRleHQge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59XG5cbi8vIGJpZyBkZXZpY2VzXG5AbWVkaWEgKG1pbi13aWR0aDogNTAwcHgpIHtcbiAgICAucm91bmQtYm90dG9tIHtcbiAgICAgICAgdG9wOiAtMzAwcHg7XG4gICAgICAgIHdpZHRoOiAyMDY0cHg7XG4gICAgICAgIGhlaWdodDogNjgwcHg7XG4gICAgICAgIGxlZnQ6IC0yNDhweDtcbiAgICB9XG4gICAgLnRleHQge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgLmJ0biB7XG4gICAgICAgIHdpZHRoOiA5NyU7XG4gICAgfVxuICAgIC5wZW9wbGUge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgYm90dG9tOiAxNTBweDtcbiAgICAgICAgd2lkdGg6IDM3MHB4O1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XG4gICAgfVxufSJdfQ== */";

/***/ }),

/***/ 8380:
/*!******************************************************!*\
  !*** ./src/app/pages/home/home.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n\n    <ion-grid>\n\n        <div class=\"container\">\n            <ion-row>\n\n                <div class=\"round-bottom\"></div>\n\n                <div>\n                    <ion-item lines=\"none\" class=\"logo\">\n                        <ion-label>\n                            Ratify\n                        </ion-label>\n\n                    </ion-item>\n                </div>\n            </ion-row>\n            <div class=\"people center\">\n\n                <ion-item id=\"img1\"></ion-item>\n                <ion-item id=\"img2\"></ion-item>\n                <ion-item id=\"img3\"></ion-item>\n                <ion-item id=\"img4\"></ion-item>\n                <ion-item id=\"img5\"></ion-item>\n                <ion-item id=\"img6\"></ion-item>\n                <ion-item id=\"img7\"></ion-item>\n                <ion-item id=\"img8\"></ion-item>\n                <ion-item id=\"img9\"></ion-item>\n                <ion-item id=\"img10\"></ion-item>\n            </div>\n            <ion-row>\n\n            </ion-row>\n            <ion-row>\n\n                <div class=\"footer\">\n                    <div>\n                        <ion-item lines=\"none\" class=\"text\">\n                            <ion-label>\n                                Rate your friends and get rated\n                            </ion-label>\n                        </ion-item>\n\n                        <ion-item style=\"bottom:12%\" lines=\"none\" class=\"text\">\n                            <ion-label>\n                                anonymously\n                            </ion-label>\n                        </ion-item>\n\n                    </div>\n                    <div>\n                        <ion-button (click)=\"login()\" class='btn' color=\"dark\" expand='block' size=\"large\">Start Rating\n                            <ion-icon style='margin-left: 20px;' name=\"star-half-outline\"></ion-icon>\n                        </ion-button>\n                    </div>\n                </div>\n            </ion-row>\n\n        </div>\n\n\n\n\n\n    </ion-grid>\n\n\n\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_home_home_module_ts.js.map