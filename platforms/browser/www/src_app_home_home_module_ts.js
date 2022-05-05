"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_home_module_ts"],{

/***/ 2003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);




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

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
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
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 2003);







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

/***/ 2267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page.html?ngResource */ 3853);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 1020);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);





let HomePage = class HomePage {
    constructor(route) {
        this.route = route;
        this.ionicNamedColor = 'primary';
    }
    login() {
        this.route.navigate(['/login']);
    }
    animate() {
        if (this.ionicNamedColor === 'primary') {
            this.ionicNamedColor = 'secondary';
        }
        else {
            this.ionicNamedColor = 'primary';
        }
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

/***/ 1020:
/*!************************************************!*\
  !*** ./src/app/home/home.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "* {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  box-sizing: border-box;\n}\n\n.round-bottom {\n  border-bottom-left-radius: 50% 150px !important;\n  border-bottom-right-radius: 50% 150px !important;\n  overflow: hidden;\n  position: absolute;\n  /* Ellipse 1 */\n  top: -300px;\n  background: linear-gradient(180deg, #2EA5BF 0%, #2EA5BF 100%);\n  /* Ellipse 1 */\n  width: 864px;\n  height: 680px;\n  left: -248px;\n}\n\n.container {\n  width: 100%;\n  height: 100% !important;\n  overflow: hidden;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n/* People */\n\n.people {\n  margin-top: -50%;\n  margin-bottom: 0;\n  position: relative;\n  margin-left: -18%;\n  margin-right: 0;\n  min-height: 100vh;\n  height: 550px;\n  width: 130vw;\n  overflow: hidden;\n  transform: scale(0.9);\n}\n\n/* Ellipse 2 */\n\n#img1 {\n  position: absolute;\n  width: 138px;\n  height: 131px;\n  left: 120px;\n  top: 384px;\n  border-radius: 100%;\n  background: url(\"/assets/img1.jpg\") center;\n  background-size: 100%;\n  --min-height: 0;\n}\n\n/* Ellipse 3 */\n\n#img2 {\n  position: absolute;\n  width: 35px;\n  height: 32px;\n  left: 91px;\n  top: 361px;\n  background: url(\"/assets/img2.webp\") center;\n  background-size: 145%;\n  --min-height: 0;\n  border-radius: 100%;\n}\n\n/* Ellipse 9 */\n\n#img3 {\n  position: absolute;\n  width: 35px;\n  height: 32px;\n  left: 176px;\n  top: 329px;\n  background-size: 160% !important;\n  --min-height: 0;\n  border-radius: 100%;\n  background: url(\"/assets/img3.jpg\") center;\n}\n\n/* Ellipse 10 */\n\n#img4 {\n  position: absolute;\n  width: 35px;\n  height: 32px;\n  left: 81px;\n  top: 491px;\n  --min-height: 0;\n  border-radius: 100%;\n  background-size: 160% !important;\n  background: url(\"/assets/img5.jpg\") center;\n}\n\ndiv.item-native {\n  background: unset !important;\n}\n\n/* Ellipse 4 */\n\n#img5 {\n  position: absolute;\n  width: 35px;\n  height: 32px;\n  left: 261px;\n  top: 350px;\n  --min-height: 0;\n  border-radius: 100%;\n  background-size: 160% !important;\n  background: url(\"/assets/img4.webp\") center;\n}\n\n/* Ellipse 6 */\n\n#img6 {\n  position: absolute;\n  width: 35px;\n  height: 32px;\n  left: 141px;\n  top: 539px;\n  --min-height: 0;\n  border-radius: 100%;\n  background-size: 110% !important;\n  background: url(\"/assets/img6.jpg\") center;\n}\n\n/* Ellipse 7 */\n\n#img7 {\n  position: absolute;\n  width: 35px;\n  height: 32px;\n  left: 226px;\n  top: 533px;\n  --min-height: 0;\n  border-radius: 100%;\n  background-size: 160% !important;\n  background: url(\"/assets/img7.jpg\") right;\n}\n\n/* Ellipse 11 */\n\n#img8 {\n  position: absolute;\n  width: 35px;\n  height: 32px;\n  left: 277px;\n  top: 479px;\n  --min-height: 0;\n  border-radius: 100%;\n  background-size: 160% !important;\n  background: url(\"/assets/img8.webp\") center;\n}\n\n/* Ellipse 8 */\n\n#img9 {\n  position: absolute;\n  width: 35px;\n  height: 32px;\n  left: 292px;\n  top: 419px;\n  --min-height: 0;\n  border-radius: 100%;\n  background-size: 160% !important;\n  background: url(\"/assets/img9.jpg\") center;\n}\n\n/* Ellipse 5 */\n\n#img10 {\n  position: absolute;\n  width: 35px;\n  height: 32px;\n  left: 56px;\n  top: 432px;\n  --min-height: 0;\n  border-radius: 100%;\n  background-size: 100% !important;\n  background: url(\"/assets/img10.jpeg\") center;\n}\n\n.btn {\n  bottom: 0;\n  position: absolute;\n  margin: 20px;\n  margin-left: 10px;\n  text-align: center;\n  justify-content: center;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  width: 92%;\n}\n\n.text {\n  position: absolute;\n  bottom: 15.48%;\n  --ion-item-background: transparent;\n  --ion-item-color: black;\n  text-align: center;\n  margin-bottom: 15px;\n}\n\n.logo {\n  font-size: 40px;\n  position: absolute;\n  left: 2%;\n  top: 2%;\n  width: 100%;\n  text-align: left;\n}\n\nion-item {\n  --ion-item-background: linear-gradient(180deg, #2EA5BF 0%, #2EA5BF 100%);\n  --ion-item-color: #eee;\n}\n\n.footer {\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n@media (max-width: 415px) and (min-width: 278px) {\n  .people {\n    margin-top: -35%;\n    margin-bottom: 0;\n    position: relative;\n    margin-left: 2%;\n    margin-right: 0;\n    height: 550px;\n    width: 80vw;\n    overflow: hidden;\n    transform: scale(1.2);\n  }\n\n  .text {\n    width: 100%;\n  }\n}\n\n@media (min-width: 500px) {\n  .round-bottom {\n    top: -300px;\n    width: 2064px;\n    height: 680px;\n    left: -248px;\n  }\n\n  .text {\n    width: 100%;\n  }\n\n  .btn {\n    width: 97%;\n  }\n\n  .people {\n    position: relative;\n    margin: auto;\n    bottom: 150px;\n    width: 370px;\n    transform: scale(1.5);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,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a0NBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUE5Qko7O0FBaUNBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUE5Qko7O0FBaUNBO0VBQ0ksd0VBQUE7RUFDQSxzQkFBQTtBQTlCSjs7QUFpQ0E7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUE5Qko7O0FBa0NBO0VBQ0k7SUFDSSxnQkFBQTtJQUNBLGdCQUFBO0lBQ0Esa0JBQUE7SUFDQSxlQUFBO0lBQ0EsZUFBQTtJQUNBLGFBQUE7SUFDQSxXQUFBO0lBQ0EsZ0JBQUE7SUFDQSxxQkFBQTtFQS9CTjs7RUFpQ0U7SUFDSSxXQUFBO0VBOUJOO0FBQ0Y7O0FBa0NBO0VBQ0k7SUFDSSxXQUFBO0lBQ0EsYUFBQTtJQUNBLGFBQUE7SUFDQSxZQUFBO0VBaENOOztFQWtDRTtJQUNJLFdBQUE7RUEvQk47O0VBaUNFO0lBQ0ksVUFBQTtFQTlCTjs7RUFnQ0U7SUFDSSxrQkFBQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0lBQ0EsWUFBQTtJQUNBLHFCQUFBO0VBN0JOO0FBQ0YiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3JkZXI6IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLnJvdW5kLWJvdHRvbSB7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNTAlIDE1MHB4ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDUwJSAxNTBweCAhaW1wb3J0YW50O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIC8qIEVsbGlwc2UgMSAqL1xuICAgIHRvcDogLTMwMHB4O1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMyRUE1QkYgMCUsICMyRUE1QkYgMTAwJSk7XG4gICAgLyogRWxsaXBzZSAxICovXG4gICAgd2lkdGg6IDg2NHB4O1xuICAgIGhlaWdodDogNjgwcHg7XG4gICAgbGVmdDogLTI0OHB4O1xufVxuXG4uY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi8vIC5jaXJjbGUge1xuLy8gICAgIGZsb2F0OiBsZWZ0O1xuLy8gICAgIG1hcmdpbi1sZWZ0OiAxMjVweDtcbi8vICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuLy8gICAgIHdpZHRoOiAyMDBweDtcbi8vICAgICBoZWlnaHQ6IDIwMHB4O1xuLy8gICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4vLyAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbi8vIH1cblxuLyogUGVvcGxlICovXG5cbi5wZW9wbGUge1xuICAgIG1hcmdpbi10b3A6IC01MCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLWxlZnQ6IC0xOCU7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIGhlaWdodDogNTUwcHg7XG4gICAgd2lkdGg6IDEzMHZ3O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xufVxuXG5cbi8qIEVsbGlwc2UgMiAqL1xuXG4jaW1nMSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMzhweDtcbiAgICBoZWlnaHQ6IDEzMXB4O1xuICAgIGxlZnQ6IDEyMHB4O1xuICAgIHRvcDogMzg0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1nMS5qcGcnKSBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICAgIC0tbWluLWhlaWdodDogMDtcbn1cblxuXG4vKiBFbGxpcHNlIDMgKi9cblxuI2ltZzIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMzVweDtcbiAgICBoZWlnaHQ6IDMycHg7XG4gICAgbGVmdDogOTFweDtcbiAgICB0b3A6IDM2MXB4O1xuICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWcyLndlYnAnKSBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxNDUlO1xuICAgIC0tbWluLWhlaWdodDogMDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xufVxuXG5cbi8qIEVsbGlwc2UgOSAqL1xuXG4jaW1nMyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIGhlaWdodDogMzJweDtcbiAgICBsZWZ0OiAxNzZweDtcbiAgICB0b3A6IDMyOXB4O1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTYwJSAhaW1wb3J0YW50O1xuICAgIC0tbWluLWhlaWdodDogMDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWczLmpwZycpIGNlbnRlcjtcbn1cblxuXG4vKiBFbGxpcHNlIDEwICovXG5cbiNpbWc0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDM1cHg7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIGxlZnQ6IDgxcHg7XG4gICAgdG9wOiA0OTFweDtcbiAgICAtLW1pbi1oZWlnaHQ6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDE2MCUgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1nNS5qcGcnKSBjZW50ZXI7XG59XG5cbmRpdi5pdGVtLW5hdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogdW5zZXQgIWltcG9ydGFudDtcbn1cblxuXG4vKiBFbGxpcHNlIDQgKi9cblxuI2ltZzUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMzVweDtcbiAgICBoZWlnaHQ6IDMycHg7XG4gICAgbGVmdDogMjYxcHg7XG4gICAgdG9wOiAzNTBweDtcbiAgICAtLW1pbi1oZWlnaHQ6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDE2MCUgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1nNC53ZWJwJykgY2VudGVyO1xufVxuXG5cbi8qIEVsbGlwc2UgNiAqL1xuXG4jaW1nNiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIGhlaWdodDogMzJweDtcbiAgICBsZWZ0OiAxNDFweDtcbiAgICB0b3A6IDUzOXB4O1xuICAgIC0tbWluLWhlaWdodDogMDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTEwJSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWc2LmpwZycpIGNlbnRlcjtcbn1cblxuXG4vKiBFbGxpcHNlIDcgKi9cblxuI2ltZzcge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMzVweDtcbiAgICBoZWlnaHQ6IDMycHg7XG4gICAgbGVmdDogMjI2cHg7XG4gICAgdG9wOiA1MzNweDtcbiAgICAtLW1pbi1oZWlnaHQ6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDE2MCUgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1nNy5qcGcnKSByaWdodDtcbn1cblxuXG4vKiBFbGxpcHNlIDExICovXG5cbiNpbWc4IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDM1cHg7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIGxlZnQ6IDI3N3B4O1xuICAgIHRvcDogNDc5cHg7XG4gICAgLS1taW4taGVpZ2h0OiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxNjAlICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltZzgud2VicCcpIGNlbnRlcjtcbn1cblxuXG4vKiBFbGxpcHNlIDggKi9cblxuI2ltZzkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMzVweDtcbiAgICBoZWlnaHQ6IDMycHg7XG4gICAgbGVmdDogMjkycHg7XG4gICAgdG9wOiA0MTlweDtcbiAgICAtLW1pbi1oZWlnaHQ6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDE2MCUgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1nOS5qcGcnKSBjZW50ZXI7XG59XG5cblxuLyogRWxsaXBzZSA1ICovXG5cbiNpbWcxMCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIGhlaWdodDogMzJweDtcbiAgICBsZWZ0OiA1NnB4O1xuICAgIHRvcDogNDMycHg7XG4gICAgLS1taW4taGVpZ2h0OiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltZzEwLmpwZWcnKSBjZW50ZXI7XG59XG5cbi5idG4ge1xuICAgIGJvdHRvbTogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luOiAyMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgICB3aWR0aDogOTIlO1xufVxuXG4udGV4dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMTUuNDglO1xuICAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgLS1pb24taXRlbS1jb2xvcjogYmxhY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5sb2dvIHtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDIlO1xuICAgIHRvcDogMiU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuaW9uLWl0ZW0ge1xuICAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzJFQTVCRiAwJSwgIzJFQTVCRiAxMDAlKTtcbiAgICAtLWlvbi1pdGVtLWNvbG9yOiAjZWVlO1xufVxuXG4uZm9vdGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi8vc21hbGxlciBkZXZpY2VzXG5AbWVkaWEgKG1heC13aWR0aCA6NDE1cHgpIGFuZCAobWluLXdpZHRoOiAyNzhweCkge1xuICAgIC5wZW9wbGUge1xuICAgICAgICBtYXJnaW4tdG9wOiAtMzUlO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyJTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICBoZWlnaHQ6IDU1MHB4O1xuICAgICAgICB3aWR0aDogODB2dztcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICAgIH1cbiAgICAudGV4dCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn1cblxuLy8gYmlnIGRldmljZXNcbkBtZWRpYSAobWluLXdpZHRoOiA1MDBweCkge1xuICAgIC5yb3VuZC1ib3R0b20ge1xuICAgICAgICB0b3A6IC0zMDBweDtcbiAgICAgICAgd2lkdGg6IDIwNjRweDtcbiAgICAgICAgaGVpZ2h0OiA2ODBweDtcbiAgICAgICAgbGVmdDogLTI0OHB4O1xuICAgIH1cbiAgICAudGV4dCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICAuYnRuIHtcbiAgICAgICAgd2lkdGg6IDk3JTtcbiAgICB9XG4gICAgLnBlb3BsZSB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBib3R0b206IDE1MHB4O1xuICAgICAgICB3aWR0aDogMzcwcHg7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcbiAgICB9XG59Il19 */";

/***/ }),

/***/ 3853:
/*!************************************************!*\
  !*** ./src/app/home/home.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\n\n    <ion-grid>\n\n        <div class=\"container\">\n            <ion-row>\n\n                <div class=\"round-bottom\"></div>\n\n                <div>\n                    <ion-item lines=\"none\" class=\"logo\">\n                        <ion-label>\n                            Ratify\n                        </ion-label>\n\n                    </ion-item>\n                </div>\n            </ion-row>\n            <div class=\"people center\">\n\n                <ion-item id=\"img1\"></ion-item>\n                <ion-item id=\"img2\"></ion-item>\n                <ion-item id=\"img3\"></ion-item>\n                <ion-item id=\"img4\"></ion-item>\n                <ion-item id=\"img5\"></ion-item>\n                <ion-item id=\"img6\"></ion-item>\n                <ion-item id=\"img7\"></ion-item>\n                <ion-item id=\"img8\"></ion-item>\n                <ion-item id=\"img9\"></ion-item>\n                <ion-item id=\"img10\"></ion-item>\n            </div>\n            <ion-row>\n\n            </ion-row>\n            <ion-row>\n\n                <div class=\"footer\">\n                    <div>\n                        <ion-item lines=\"none\" class=\"text\">\n                            <ion-label>\n                                Rate your friends and get rated\n                            </ion-label>\n                        </ion-item>\n\n                        <ion-item style=\"bottom:12%\" lines=\"none\" class=\"text\">\n                            <ion-label>\n                                anonymously\n                            </ion-label>\n                        </ion-item>\n\n                    </div>\n                    <div>\n                        <ion-button (click)=\"login()\" (click)=\"animate()\" class='btn' color=\"dark\" expand='block' size=\"large\">Start Rating\n                            <ion-icon style='margin-left: 20px;' name=\"star-half-outline\"></ion-icon>\n                        </ion-button>\n                    </div>\n                </div>\n            </ion-row>\n\n        </div>\n\n\n\n\n\n    </ion-grid>\n\n\n\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map