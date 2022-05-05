"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_pages_settings-modal_settings-modal_page_ts"],{

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

/***/ 7986:
/*!*************************************************************!*\
  !*** ./src/app/pages/settings-modal/settings-modal.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsModalPage": () => (/* binding */ SettingsModalPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _settings_modal_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings-modal.page.html?ngResource */ 9096);
/* harmony import */ var _settings_modal_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings-modal.page.scss?ngResource */ 5676);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_apis_get_user_details_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/apis/get-user-details.service */ 8715);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);











let SettingsModalPage = class SettingsModalPage {
    constructor(modalCtrl, http, user, route, alertCtrl, toastCtrl) {
        this.modalCtrl = modalCtrl;
        this.http = http;
        this.user = user;
        this.route = route;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
    }
    ngOnInit() {
        this.user.getUsername().subscribe(data => {
            this.user_name = data;
        });
    }
    close() {
        this.modalCtrl.dismiss();
    }
    toast(message, color) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const toast = this.toastCtrl.create({
                message: message,
                duration: 2000,
                color: color
            });
            (yield toast).present();
        });
    }
    showUserInput() {
        var user_input = document.getElementById('username_input');
        user_input.classList.toggle('hide');
    }
    showPasswordInput() {
        var password_input = document.getElementById('password_input');
        password_input.classList.toggle('hide');
    }
    showNameInput() {
        var name_input = document.getElementById('name_input');
        name_input.classList.toggle('hide');
    }
    updateName() {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders();
        headers.append('Access-Control-Allow-Origin', '*');
        this.http.post('http://127.0.0.1/ratify/update_name.php', JSON.stringify(this.name), { headers: headers, withCredentials: true }).subscribe((response) => {
            console.log(response);
            this.toast(response['status'], 'success');
        });
    }
    updateUsername() {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders();
        headers.append('Access-Control-Allow-Origin', '*');
        this.http.post('http://127.0.0.1/ratify/update_username.php', JSON.stringify(this.username), { headers: headers, withCredentials: true }).subscribe((response) => {
            console.log(response);
            if (response['status'] == 'success') {
                this.toast(response['status'], 'success');
                this.user_name = response['new'];
            }
            else {
                this.toast(response['status'], 'danger');
            }
        });
    }
    updatePassword() {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders();
        headers.append('Access-Control-Allow-Origin', '*');
        const password = {
            "new_pass": this.new_pass,
            "old_pass": this.old_pass,
        };
        this.http.post('http://127.0.0.1/ratify/update_password.php', JSON.stringify(password), { headers: headers, withCredentials: true }).subscribe((response) => {
            console.log(response);
            if (response['status'] == 'Password Changed') {
                this.toast(response['status'], 'success');
            }
            else {
                this.toast(response['status'], 'danger');
            }
        });
    }
    logout() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            let alert = this.alertCtrl.create({
                header: 'Logout',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'Logout',
                        handler: () => {
                            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders();
                            headers.append('Access-Control-Allow-Origin', '*');
                            this.http.post('http://127.0.0.1/ratify/logout.php', JSON.stringify(this.username), { headers: headers, withCredentials: true }).subscribe((response) => {
                                console.log(response);
                                this.close();
                                this.route.navigate(['home']);
                                this.toast('Logged Out Successfully', 'success');
                            });
                        }
                    }
                ]
            });
            (yield alert).present();
        });
    }
    delete() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            let alert = this.alertCtrl.create({
                header: 'Delete Account',
                message: 'Are you sure you want to permanently delete this account?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                            this.close();
                        }
                    },
                    {
                        text: 'Delete',
                        handler: () => {
                            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders();
                            headers.append('Access-Control-Allow-Origin', '*');
                            this.http.post('http://127.0.0.1/ratify/delete.php', JSON.stringify(this.username), { headers: headers, withCredentials: true }).subscribe((response) => {
                                console.log(response);
                                this.close();
                                this.route.navigate(['home']);
                                this.toast('User Permanently Deleted', 'danger');
                            });
                        }
                    }
                ]
            });
            (yield alert).present();
        });
    }
};
SettingsModalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient },
    { type: src_app_apis_get_user_details_service__WEBPACK_IMPORTED_MODULE_2__.GetUserDetailsService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController }
];
SettingsModalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-settings-modal',
        template: _settings_modal_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_settings_modal_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SettingsModalPage);



/***/ }),

/***/ 5676:
/*!**************************************************************************!*\
  !*** ./src/app/pages/settings-modal/settings-modal.page.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "ion-modal.stack-modal {\n  --box-shadow: 0 28px 48px rgba(0, 0, 0, 0.4);\n  --backdrop-opacity: var(--ion-backdrop-opacity, 0.32);\n}\n\n.settings {\n  transform: scale(2);\n  margin: 20px 10px;\n  cursor: pointer;\n}\n\nion-list ion-list-header {\n  margin-bottom: 10px;\n  color: #2EA5BF;\n}\n\nion-item {\n  --ion-item-color: #2EA5BF;\n  cursor: pointer;\n}\n\n.options {\n  transition: 0.4s;\n  font-size: 20px;\n}\n\n.options:hover {\n  transform: scale(1.02);\n}\n\n.input {\n  justify-content: center;\n}\n\n.container {\n  text-align: center;\n}\n\n.hide {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmdzLW1vZGFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRDQUFBO0VBQ0EscURBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBRUksZ0JBQUE7RUFDQSxlQUFBO0FBQUo7O0FBR0E7RUFDSSxzQkFBQTtBQUFKOztBQUdBO0VBQ0ksdUJBQUE7QUFBSjs7QUFHQTtFQUNJLGtCQUFBO0FBQUo7O0FBR0E7RUFDSSxhQUFBO0FBQUoiLCJmaWxlIjoic2V0dGluZ3MtbW9kYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLW1vZGFsLnN0YWNrLW1vZGFsIHtcbiAgICAtLWJveC1zaGFkb3c6IDAgMjhweCA0OHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgICAtLWJhY2tkcm9wLW9wYWNpdHk6IHZhcigtLWlvbi1iYWNrZHJvcC1vcGFjaXR5LCAwLjMyKTtcbn1cblxuLnNldHRpbmdzIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDIpO1xuICAgIG1hcmdpbjogMjBweCAxMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuaW9uLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGNvbG9yOiAjMkVBNUJGO1xufVxuXG5pb24taXRlbSB7XG4gICAgLS1pb24taXRlbS1jb2xvcjogIzJFQTVCRjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5vcHRpb25zIHtcbiAgICAvLyAgICAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMkVBNUJGIDAlLCAjMkVBNUJGIDEwMCUpO1xuICAgIHRyYW5zaXRpb246IDAuNHM7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4ub3B0aW9uczpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcbn1cblxuLmlucHV0IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaGlkZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbn0iXX0= */";

/***/ }),

/***/ 9096:
/*!**************************************************************************!*\
  !*** ./src/app/pages/settings-modal/settings-modal.page.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n    <ion-item lines=\"none\">\n        <ion-icon class=\"settings\" (click)='close()' name=\"arrow-back-outline\"></ion-icon>\n    </ion-item>\n\n    <ion-list>\n        <ion-list-header>\n            <ion-label>Settings for <span style=\"font-weight: bolder;\">@{{user_name}}</span></ion-label>\n        </ion-list-header>\n        <div class=\"container\">\n\n            <ion-item (click)=\"showUserInput()\" lines=\"none\" class=\"options\">\n                <ion-label>Change Username</ion-label>\n            </ion-item>\n\n            <form (ngSubmit)=\"updateUsername()\" ngNativeValidate>\n                <div id=\"username_input\" class=\"hide\">\n                    <ion-item lines=\"none\" class=\"input\">\n                        <ion-label position=\"fixed\">Enter new</ion-label>\n                        <ion-input placeholder=\"username\" id=\"password\" [ngModelOptions]=\"{standalone:true}\" required [(ngModel)]='username'></ion-input>\n                    </ion-item>\n                    <ion-item id=\"status_success\" style=\"text-align:center; display: none;\" lines=\"none\">\n                        <ion-label color=\"success\" id=\"status_success_message\"></ion-label>\n                    </ion-item>\n                    <ion-item id=\"status_error\" style=\"text-align:center; display: none;\" lines=\"none\">\n                        <ion-label color=\"danger\" id=\"status_error_message\"></ion-label>\n                    </ion-item>\n                    <ion-button type='submit' class='btn' color=\"dark \" expand=\" 'full\" shape=' '>Change</ion-button>\n                </div>\n            </form>\n        </div>\n\n        <div class=\"container\">\n\n            <ion-item (click)=\"showNameInput()\" lines=\"none\" class=\"options\">\n                <ion-label>Change Name</ion-label>\n            </ion-item>\n\n            <form (ngSubmit)=\"updateName()\" ngNativeValidate>\n                <div id=\"name_input\" class=\"hide\">\n                    <ion-item lines=\"none\" class=\"input\">\n                        <ion-label position=\"fixed\">Enter new</ion-label>\n                        <ion-input placeholder=\"name\" id=\"password\" [ngModelOptions]=\"{standalone:true}\" required [(ngModel)]='name'></ion-input>\n                    </ion-item>\n                    <ion-item id=\"status_success2\" style=\"text-align:center; display: none;\" lines=\"none\">\n                        <ion-label color=\"success\" id=\"status_success_message2\"></ion-label>\n                    </ion-item>\n                    <ion-button type='submit' class='btn' color=\"dark \" expand=\" 'full\" shape=' '>Change</ion-button>\n                </div>\n            </form>\n        </div>\n\n\n        <div class=\"container\">\n            <ion-item (click)='showPasswordInput()' lines=\"none\" class=\"options\">\n                <ion-label>Change Password</ion-label>\n            </ion-item>\n            <form (ngSubmit)=\"updatePassword()\" ngNativeValidate>\n                <div id=\"password_input\" class=\"hide\">\n                    <ion-item lines=\"none\" class=\"input\">\n                        <ion-label position=\"fixed\">Enter old</ion-label>\n                        <ion-input type=\"password\" placeholder=\"password\" id=\"password\" [ngModelOptions]=\"{standalone:true}\" required [(ngModel)]='old_pass'></ion-input>\n                    </ion-item>\n                    <ion-item lines=\"none\" class=\"input\">\n                        <ion-label position=\"fixed\">Enter new</ion-label>\n                        <ion-input type=\"password\" placeholder=\"password\" id=\"password\" [ngModelOptions]=\"{standalone:true}\" required [(ngModel)]='new_pass'></ion-input>\n                    </ion-item>\n                    <ion-item id=\"status_success3\" style=\"text-align:center; display: none;\" lines=\"none\">\n                        <ion-label color=\"success\" id=\"status_success_message3\"></ion-label>\n                    </ion-item>\n                    <ion-item id=\"status_error2\" style=\"text-align:center; display: none;\" lines=\"none\">\n                        <ion-label color=\"danger\" id=\"status_error_message2\"></ion-label>\n                    </ion-item>\n                    <ion-button type='submit' class='btn' color=\"dark \" expand=\" 'full\" shape=' '>Change</ion-button>\n                </div>\n            </form>\n        </div>\n\n        <form (ngSubmit)=\"logout()\">\n            <ion-button type=\"submit\" fill=\"clear\">\n                <ion-item lines=\"none\" class=\"options\">\n                    <ion-label>Logout</ion-label>\n                </ion-item>\n            </ion-button>\n        </form>\n\n        <form (ngSubmit)=\"delete()\">\n            <ion-button type=\"submit\" fill=\"clear\">\n                <ion-item lines=\"none\" class=\"options\">\n                    <ion-label color=\"danger\">Delete Account</ion-label>\n                </ion-item>\n            </ion-button>\n        </form>\n    </ion-list>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_settings-modal_settings-modal_page_ts.js.map