"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_user-stats_user-stats_module_ts"],{

/***/ 8715:
/*!**************************************************!*\
  !*** ./src/app/apis/get-user-details.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetUserDetailsService": () => (/* binding */ GetUserDetailsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 6942);




let GetUserDetailsService = class GetUserDetailsService {
    constructor(http) {
        this.http = http;
    }
    getImage() {
        return this.http.get('http://127.0.0.1/ratify/user_details.php', { withCredentials: true })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)((response) => response['image']));
    }
    getUsername() {
        return this.http.get('http://127.0.0.1/ratify/user_details.php', { withCredentials: true })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)((response) => response['username']));
    }
    getName() {
        return this.http.get('http://127.0.0.1/ratify/user_details.php', { withCredentials: true })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)((response) => response['name']));
    }
    getRates(username) {
        return this.http.post(`http://127.0.0.1/ratify/get_users_rates.php?username=${username}`, JSON.stringify(username), { withCredentials: true })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)((response) => response));
    }
};
GetUserDetailsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
GetUserDetailsService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], GetUserDetailsService);



/***/ }),

/***/ 8427:
/*!***************************************************************!*\
  !*** ./src/app/pages/user-stats/user-stats-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserStatsPageRoutingModule": () => (/* binding */ UserStatsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _user_stats_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-stats.page */ 8451);




const routes = [
    {
        path: '',
        component: _user_stats_page__WEBPACK_IMPORTED_MODULE_0__.UserStatsPage
    }
];
let UserStatsPageRoutingModule = class UserStatsPageRoutingModule {
};
UserStatsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UserStatsPageRoutingModule);



/***/ }),

/***/ 6533:
/*!*******************************************************!*\
  !*** ./src/app/pages/user-stats/user-stats.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserStatsPageModule": () => (/* binding */ UserStatsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _user_stats_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-stats-routing.module */ 8427);
/* harmony import */ var _user_stats_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-stats.page */ 8451);







let UserStatsPageModule = class UserStatsPageModule {
};
UserStatsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _user_stats_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserStatsPageRoutingModule
        ],
        declarations: [_user_stats_page__WEBPACK_IMPORTED_MODULE_1__.UserStatsPage]
    })
], UserStatsPageModule);



/***/ }),

/***/ 8451:
/*!*****************************************************!*\
  !*** ./src/app/pages/user-stats/user-stats.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserStatsPage": () => (/* binding */ UserStatsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _user_stats_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-stats.page.html?ngResource */ 9900);
/* harmony import */ var _user_stats_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-stats.page.scss?ngResource */ 7239);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_apis_get_user_details_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/apis/get-user-details.service */ 8715);






let UserStatsPage = class UserStatsPage {
    constructor(route, user) {
        this.route = route;
        this.user = user;
    }
    ionViewWillEnter() {
        this.username = history.state.username;
        this.name = history.state.name;
        this.image = history.state.image;
        this.user.getRates(this.username).subscribe(rates => {
            this.total_rates = rates['total_rates'] / 100;
            this.cute = rates['cute'] / 100;
            this.personality = rates['personality'] / 100;
            this.hot = rates['hot'] / 100;
            this.social = rates['social'] / 100;
            this.fun = rates['fun'] / 100;
            this.friendly = rates['friendly'] / 100;
            console.log(rates);
        });
    }
    leaderboard() {
        this.route.navigate(['../homepage/leaderboard']);
    }
    search() {
        this.route.navigate(['../homepage/search']);
    }
    feed() {
        this.route.navigate(['../homepage/feed']);
    }
    profile() {
        this.route.navigate(['../homepage/profile']);
    }
};
UserStatsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: src_app_apis_get_user_details_service__WEBPACK_IMPORTED_MODULE_2__.GetUserDetailsService }
];
UserStatsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-user-stats',
        template: _user_stats_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_user_stats_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], UserStatsPage);



/***/ }),

/***/ 7239:
/*!******************************************************************!*\
  !*** ./src/app/pages/user-stats/user-stats.page.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "ion-tab-bar,\nion-tab-button {\n  background-color: #2EA5BF;\n  border: 0;\n  margin-top: -1px;\n}\n\nion-icon {\n  color: white;\n}\n\n.back {\n  cursor: pointer;\n  width: 50px;\n  height: 50px;\n  margin-top: 10px;\n  opacity: 0.9;\n}\n\n.tab-selected > ion-icon {\n  color: aqua;\n}\n\n.name {\n  color: white;\n  font-weight: bold;\n  font-size: 15px;\n  text-align: right;\n}\n\n.bottom {\n  overflow: hidden;\n  position: absolute;\n  /* Ellipse 1 */\n  background: linear-gradient(180deg, #2EA5BF 0%, #2EA5BF 100%);\n  /* Ellipse 1 */\n  width: 100%;\n  height: 100%;\n}\n\n.image-container {\n  margin-top: 110px;\n  transform: scale(3.3);\n  border-radius: 100%;\n  transition: 0.8s;\n}\n\n.image-container:hover,\n.image-container:active {\n  box-shadow: 0 0 10px lightblue;\n}\n\n#img {\n  height: 60px;\n  width: 70px;\n  object-fit: cover;\n}\n\n.total_rates {\n  width: 70%;\n  margin-left: 15%;\n  margin-top: 150px;\n  height: 20px;\n  border-radius: 70px;\n  border: 1px solid white;\n  transform: scale(0.9);\n}\n\nion-item {\n  --ion-background-color: #2EA5BF;\n  --ion-item-color: white;\n}\n\nion-progress-bar {\n  width: 90%;\n  margin-left: 5%;\n  height: 20px;\n  border: 1px solid white;\n  border-radius: 70px !important;\n}\n\nsmall {\n  position: absolute;\n  color: white;\n  right: 40px;\n  margin-top: 2px;\n}\n\n.total_rate {\n  left: 40px;\n  margin-top: 130px;\n  margin-left: 40px;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItc3RhdHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVJLHlCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSw2REFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUdBO0VBQ0ksaUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFHQTs7RUFFSSw4QkFBQTtBQUFKOztBQUdBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUdBO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0FBQUo7O0FBR0E7RUFDSSwrQkFBQTtFQUNBLHVCQUFBO0FBQUo7O0FBR0E7RUFDSSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLDhCQUFBO0FBQUo7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUFKOztBQUdBO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBQUoiLCJmaWxlIjoidXNlci1zdGF0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGFiLWJhcixcbmlvbi10YWItYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkVBNUJGO1xuICAgIGJvcmRlcjogMDtcbiAgICBtYXJnaW4tdG9wOiAtMXB4O1xufVxuXG5pb24taWNvbiB7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4uYmFjayB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG9wYWNpdHk6IDAuOTtcbn1cblxuLnRhYi1zZWxlY3RlZD5pb24taWNvbiB7XG4gICAgY29sb3I6IGFxdWE7XG59XG5cbi5uYW1lIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uYm90dG9tIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAvKiBFbGxpcHNlIDEgKi9cbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMkVBNUJGIDAlLCAjMkVBNUJGIDEwMCUpO1xuICAgIC8qIEVsbGlwc2UgMSAqL1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICAvLyB6LWluZGV4OiAyO1xufVxuXG4uaW1hZ2UtY29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiAxMTBweDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDMuMyk7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICB0cmFuc2l0aW9uOiAwLjhzO1xufVxuXG4uaW1hZ2UtY29udGFpbmVyOmhvdmVyLFxuLmltYWdlLWNvbnRhaW5lcjphY3RpdmUge1xuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IGxpZ2h0Ymx1ZTtcbn1cblxuI2ltZyB7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIHdpZHRoOiA3MHB4O1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4udG90YWxfcmF0ZXMge1xuICAgIHdpZHRoOiA3MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDE1JTtcbiAgICBtYXJnaW4tdG9wOiAxNTBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNzBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XG59XG5cbmlvbi1pdGVtIHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMkVBNUJGO1xuICAgIC0taW9uLWl0ZW0tY29sb3I6IHdoaXRlO1xufVxuXG5pb24tcHJvZ3Jlc3MtYmFyIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNzBweCAhaW1wb3J0YW50O1xufVxuXG5zbWFsbCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICByaWdodDogNDBweDtcbiAgICBtYXJnaW4tdG9wOiAycHg7XG59XG5cbi50b3RhbF9yYXRlIHtcbiAgICBsZWZ0OiA0MHB4O1xuICAgIG1hcmdpbi10b3A6IDEzMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn0iXX0= */";

/***/ }),

/***/ 9900:
/*!******************************************************************!*\
  !*** ./src/app/pages/user-stats/user-stats.page.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<ion-content scroll-y=\"false\">\n\n    <div class=\"bottom\"></div>\n    <ion-item lines=\"none\">\n        <ion-icon class=\"back\" (click)='close()' name=\"arrow-back-outline\"></ion-icon>\n    </ion-item>\n    <ion-item lines=\"none\">\n        <ion-label class=\"name\">\n            {{name}}\n        </ion-label>\n    </ion-item>\n    <ion-fab horizontal=\"center\" slot=\"fixed\">\n        <ion-fab-button class=\"image-container\">\n            <img src={{image}} id=\"img\" alt=\"\">\n        </ion-fab-button>\n        <small style=\"margin-top: 30px; left: -15px; text-align: center; font-size: 15px; color:white; width: 100px;\">@{{username}}</small>\n    </ion-fab>\n    <small class=\"total_rate\">Total Rates: {{total_rates*100}}</small>\n    <ion-progress-bar class=\"total_rates\" color=\"light\" value=\"{{total_rates}}\"></ion-progress-bar>\n    <div class=\"rates\">\n        <div class=\"rate\">\n            <ion-item lines=\"none\">\n                <ion-label>\n                    Cuteness:\n                </ion-label>\n            </ion-item>\n            <small class=\"percentages\">{{cute*100}}%</small>\n            <ion-progress-bar color=\"light\" value=\"{{cute}}\"></ion-progress-bar>\n        </div>\n        <div class=\"rate\">\n            <ion-item lines=\"none\">\n                <ion-label>\n                    Personality:\n                </ion-label>\n            </ion-item>\n            <small class=\"percentages\">{{personality*100}}%</small>\n            <ion-progress-bar color=\"light\" value=\"{{personality}}\"></ion-progress-bar>\n        </div>\n        <div class=\"rate\">\n            <ion-item lines=\"none\">\n                <ion-label>\n                    Hotness:\n                </ion-label>\n            </ion-item>\n            <small class=\"percentages\">{{hot*100}}%</small>\n            <ion-progress-bar color=\"light\" value=\"{{hot}}\"></ion-progress-bar>\n        </div>\n        <div class=\"rate\">\n            <ion-item lines=\"none\">\n                <ion-label>\n                    Social:\n                </ion-label>\n            </ion-item>\n            <small class=\"percentages\">{{social*100}}%</small>\n            <ion-progress-bar color=\"light\" value=\"{{social}}\"></ion-progress-bar>\n        </div>\n        <div class=\"rate\">\n            <ion-item lines=\"none\">\n                <ion-label>\n                    Fun:\n                </ion-label>\n            </ion-item>\n            <small class=\"percentages\">{{fun*100}}%</small>\n            <ion-progress-bar color=\"light\" value=\"{{fun}}\"></ion-progress-bar>\n        </div>\n        <div class=\"rate\">\n            <ion-item lines=\"none\">\n                <ion-label>\n                    Friendly:\n                </ion-label>\n            </ion-item>\n            <small class=\"percentages\">{{friendly*100}}%</small>\n            <ion-progress-bar color=\"light\" value=\"{{friendly}}\"></ion-progress-bar>\n        </div>\n    </div>\n\n</ion-content>\n<ion-tabs>\n    <ion-tab-bar>\n        <ion-tab-button>\n            <ion-icon name=\"flash\"></ion-icon>\n        </ion-tab-button>\n        <ion-tab-button (click)=\"search()\">\n            <ion-icon name=\"search\"></ion-icon>\n        </ion-tab-button>\n        <ion-tab-button (click)=\"feed()\">\n            <ion-icon name=\"home\"></ion-icon>\n        </ion-tab-button>\n        <ion-tab-button (click)=\"profile()\">\n            <ion-icon name=\"person\"></ion-icon>\n        </ion-tab-button>\n    </ion-tab-bar>\n</ion-tabs>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_user-stats_user-stats_module_ts.js.map