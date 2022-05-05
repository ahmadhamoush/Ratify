"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_tabs_profile_profile_module_ts"],{

/***/ 1505:
/*!**************************************************************!*\
  !*** ./src/app/pages/tabs/profile/profile-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageRoutingModule": () => (/* binding */ ProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page */ 359);




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_0__.ProfilePage
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ 185:
/*!******************************************************!*\
  !*** ./src/app/pages/tabs/profile/profile.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageModule": () => (/* binding */ ProfilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-routing.module */ 1505);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page */ 359);







let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfilePageRoutingModule
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_1__.ProfilePage]
    })
], ProfilePageModule);



/***/ }),

/***/ 359:
/*!****************************************************!*\
  !*** ./src/app/pages/tabs/profile/profile.page.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePage": () => (/* binding */ ProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page.html?ngResource */ 1096);
/* harmony import */ var _profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page.scss?ngResource */ 2399);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_pages_settings_modal_settings_modal_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pages/settings-modal/settings-modal.page */ 7986);
/* harmony import */ var src_app_apis_get_user_details_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/apis/get-user-details.service */ 8715);








let ProfilePage = class ProfilePage {
    constructor(http, modalCtrl, user) {
        this.http = http;
        this.modalCtrl = modalCtrl;
        this.user = user;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.fetchUserData();
        setTimeout(() => {
            this.user.getRates(this.username).subscribe(rates => {
                console.log(rates);
            });
            console.log(this.username);
        }, 100);
    }
    settings() {
        this.modalCtrl.create({
            component: src_app_pages_settings_modal_settings_modal_page__WEBPACK_IMPORTED_MODULE_2__.SettingsModalPage,
            swipeToClose: true,
        }).then(res => {
            res.present();
        });
    }
    refresh(event) {
        this.fetchUserData();
        setTimeout(() => {
            console.log('Page Refreshed');
            event.target.complete();
        }, 500);
    }
    fetchUserData() {
        this.user.getUsername()
            .subscribe(data => {
            this.username = data;
        });
        this.user.getName()
            .subscribe(data => {
            this.name = data;
        });
        this.user.getImage()
            .subscribe(data => {
            this.displayedImage = data;
        });
    }
};
ProfilePage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: src_app_apis_get_user_details_service__WEBPACK_IMPORTED_MODULE_3__.GetUserDetailsService }
];
ProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-profile',
        template: _profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProfilePage);



/***/ }),

/***/ 2399:
/*!*****************************************************************!*\
  !*** ./src/app/pages/tabs/profile/profile.page.scss?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = "* {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  box-sizing: border-box;\n}\n\n.round-bottom {\n  border-top-left-radius: 50% 150px !important;\n  border-top-right-radius: 50% 150px !important;\n  overflow: hidden;\n  position: absolute;\n  /* Ellipse 1 */\n  bottom: 0;\n  background: linear-gradient(180deg, #2EA5BF 0%, #2EA5BF 100%);\n  /* Ellipse 1 */\n  width: 864px;\n  height: 480px;\n  left: -220px;\n}\n\n.container {\n  width: 100%;\n  height: 100% !important;\n  overflow: hidden;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.logo {\n  font-size: 40px;\n  position: absolute;\n  left: 2%;\n  top: 2%;\n  width: 100%;\n  text-align: left;\n}\n\nion-item {\n  --ion-item-color: #2EA5BF;\n}\n\n.image-container {\n  position: absolute;\n  top: -190px;\n  right: -30px;\n  transform: scale(3);\n  border-radius: 100%;\n  transition: 0.8s;\n  background-color: #2EA5BF;\n}\n\n.image-container:hover,\n.image-container:active {\n  box-shadow: 0 0 10px lightblue;\n}\n\n#img {\n  height: 60px;\n  width: 70px;\n  object-fit: cover;\n}\n\n.name {\n  position: absolute;\n  top: 60px;\n  left: 2%;\n  font-size: larger;\n  --background: transparent;\n  font-weight: bolder;\n  text-transform: capitalize;\n}\n\n.settings {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7QUFDSjs7QUFFQTtFQUNJLDRDQUFBO0VBQ0EsNkNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7RUFDQSw2REFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUVJLHlCQUFBO0FBQUo7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFBSjs7QUFHQTs7RUFFSSw4QkFBQTtBQUFKOztBQUdBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUdBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0FBQUo7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUFKIiwiZmlsZSI6InByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5yb3VuZC1ib3R0b20ge1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDUwJSAxNTBweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1MCUgMTUwcHggIWltcG9ydGFudDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAvKiBFbGxpcHNlIDEgKi9cbiAgICBib3R0b206IDA7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzJFQTVCRiAwJSwgIzJFQTVCRiAxMDAlKTtcbiAgICAvKiBFbGxpcHNlIDEgKi9cbiAgICB3aWR0aDogODY0cHg7XG4gICAgaGVpZ2h0OiA0ODBweDtcbiAgICBsZWZ0OiAtMjIwcHg7XG59XG5cbi5jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmxvZ28ge1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMiU7XG4gICAgdG9wOiAyJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG5pb24taXRlbSB7XG4gICAgLy8gICAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzJFQTVCRiAwJSwgIzJFQTVCRiAxMDAlKTtcbiAgICAtLWlvbi1pdGVtLWNvbG9yOiAjMkVBNUJGO1xufVxuXG4uaW1hZ2UtY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtMTkwcHg7XG4gICAgcmlnaHQ6IC0zMHB4O1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMyk7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICB0cmFuc2l0aW9uOiAwLjhzO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyRUE1QkY7XG59XG5cbi5pbWFnZS1jb250YWluZXI6aG92ZXIsXG4uaW1hZ2UtY29udGFpbmVyOmFjdGl2ZSB7XG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggbGlnaHRibHVlO1xufVxuXG4jaW1nIHtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgd2lkdGg6IDcwcHg7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi5uYW1lIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA2MHB4O1xuICAgIGxlZnQ6IDIlO1xuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLnNldHRpbmdzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMHB4O1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */";

/***/ }),

/***/ 1096:
/*!*****************************************************************!*\
  !*** ./src/app/pages/tabs/profile/profile.page.html?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh($event    )\">\n        <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n    <div class=\"container\">\n\n        <div class=\"round-bottom\"></div>\n\n        <div>\n            <ion-item lines=\"none\" class=\"logo\">\n                <ion-label>\n                    Ratify\n                </ion-label>\n            </ion-item>\n            <ion-item class=\"settings\" lines=\"none\">\n\n                <ion-icon (click)=\"settings()\" style=\"transform: scale(1.2);\" name=\"settings-outline\"></ion-icon>\n\n            </ion-item>\n            <ion-fab horizontal=\"center\" slot=\"fixed\">\n                <ion-fab-button class=\"image-container\">\n                    <img src={{displayedImage}} id=\"img\" alt=\"\">\n                </ion-fab-button>\n            </ion-fab>\n            <ion-item lines=\"none\" class=\"name\">\n                <ion-label>{{name}}</ion-label>\n            </ion-item>\n        </div>\n    </div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tabs_profile_profile_module_ts.js.map