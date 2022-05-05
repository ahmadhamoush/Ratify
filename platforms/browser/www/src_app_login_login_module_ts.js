"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_login_login_module_ts"],{

/***/ 5393:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 6825);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 107:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 5393);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 6825);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 6825:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page.html?ngResource */ 1729);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 7047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8784);






let LoginPage = class LoginPage {
    constructor(http, route) {
        this.http = http;
        this.route = route;
    }
    onClickSignup() {
        var response_message;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
        headers.append('Access-Control-Allow-Origin', '*');
        const user = {
            "username": this.username,
            "email": this.email,
            "password": this.password,
            "confirm_pass": this.passwod_confirm,
        };
        var signup_status = document.getElementById('signup_status');
        this.http.post('http://127.0.0.1/ratify/sign_up.php', JSON.stringify(user), { headers: headers, withCredentials: true }).subscribe((response) => {
            if (response.status == 'taken') {
                console.log('Username or email already taken.');
                signup_status.innerText = 'Username or email\nalready taken.';
                response_message = 'Fail';
            }
            else if (response.status == "password confirmation failed") {
                signup_status.innerText = 'Passwords dont match.';
                response_message = 'Fail';
            }
            else {
                var session_id = response.sessionid;
                sessionStorage.setItem("session_id", session_id);
                response_message = response.status;
                console.log(response);
                this.route.navigate(['/welcome'], { state: { username: response.username } });
            }
            console.log(response_message);
        });
    }
    onClickLogin() {
        var login_status = document.getElementById('login_status');
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
        headers.append('Access-Control-Allow-Origin', "*");
        const user = {
            "username": this.login_username,
            "password": this.login_password,
        };
        this.http.post("http://127.0.0.1/ratify/login.php", JSON.stringify(user), { headers: headers, withCredentials: true }).subscribe((response) => {
            console.log(response);
            if (response.status == "incorrect pass") {
                login_status.innerText = "incorrect pass";
            }
            else if (response.status == "user not found") {
                login_status.innerText = "user not found";
            }
            else if (response.status == "success") {
                this.route.navigate(['/welcome'], { state: { username: response.username } });
            }
        });
    }
    onClickSignupAnimation() {
        var hide = document.getElementById('hide');
        var show = document.getElementById('show');
        hide.classList.toggle('move');
        setTimeout(() => {
            hide.style.display = 'none';
        }, 700);
        // show.classList.toggle('moveLeft');
        setTimeout(() => {
            show.classList.toggle('show');
        }, 700);
        setTimeout(() => {
            show.classList.toggle('startPlace');
        }, 800);
    }
    ngOnInit() {
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-login',
        template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPage);



/***/ }),

/***/ 7047:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "* {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  box-sizing: border-box;\n}\n\n.round-bottom {\n  border-bottom-left-radius: 50% 150px !important;\n  border-bottom-right-radius: 50% 150px !important;\n  overflow: hidden;\n  position: absolute;\n  /* Ellipse 1 */\n  top: -550px;\n  background: linear-gradient(180deg, #2EA5BF 0%, #2EA5BF 100%);\n  width: 864px;\n  height: 680px;\n  left: -248px;\n  transition: 2s;\n}\n\n.container {\n  width: 100%;\n  height: 100% !important;\n  overflow: hidden;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n}\n\n.btn {\n  bottom: 0;\n  position: absolute;\n  max-width: auto;\n  margin: 20px;\n  margin-left: 20px;\n}\n\n.logo {\n  font-size: 30px;\n  position: absolute;\n  left: 2%;\n  top: 2%;\n  width: 100%;\n  z-index: 2;\n  text-align: left;\n  --ion-item-background: linear-gradient(180deg, #2EA5BF 0%, #2EA5BF 100%);\n  --ion-item-color: #eee;\n}\n\n.input {\n  /* Rectangle */\n  border: 1px solid #2EA5BF;\n  box-sizing: border-box;\n  border-radius: 4px;\n  margin-bottom: 10px;\n}\n\n.inputs {\n  margin: 0 20px;\n  padding-top: 110px;\n}\n\n.input ion-input {\n  --placeholder-color: #2EA5BF;\n}\n\n.input ion-label {\n  color: #2EA5BF;\n}\n\n.input ion-icon {\n  margin-top: 22px;\n  margin-right: 20px;\n  margin-left: 0;\n  color: #2EA5BF;\n  transform: scale(0.9);\n}\n\n.signin {\n  /* SIGN IN */\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 700;\n  font-size: 24px;\n  line-height: 20px;\n  /* identical to box height, or 83% */\n  text-align: center;\n  text-transform: uppercase;\n  color: #2EA5BF;\n  padding-bottom: 10px;\n  margin-top: 20px;\n}\n\n.btn {\n  position: relative;\n}\n\nion-label p {\n  /* Dont have an account? Sign up right now! */\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 20px;\n  /* or 167% */\n  text-align: center;\n  text-transform: uppercase;\n  color: #2EA5BF;\n}\n\nion-label h2 {\n  /* Dont have an account? Sign up right now! */\n  font-family: \"Montserrat\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 20px;\n  /* or 125% */\n  text-align: center;\n  text-transform: uppercase;\n  color: #2EA5BF;\n}\n\nion-item.item-has-focus > ion-label {\n  color: #2EA5BF !important;\n}\n\n.options ion-icon {\n  margin: 0 20px;\n  transform: scale(1.8);\n}\n\n.move {\n  transform: translate(-970px);\n  transition: 2s;\n}\n\n#show {\n  transition: 1s;\n}\n\n.startPlace {\n  transform: translate(600px);\n  display: none;\n}\n\n.show {\n  display: block;\n}\n\n.moveLeft {\n  transform: translate(-370px);\n}\n\n#login_status {\n  color: red;\n  font-size: 20px;\n}\n\n#signup_status {\n  color: red;\n}\n\n@media (min-width: 500px) {\n  .round-bottom {\n    top: -300px;\n    width: 2064px;\n    height: 680px;\n    left: -248px;\n  }\n\n  .text {\n    width: 100%;\n  }\n\n  .btn {\n    width: 50%;\n  }\n\n  .people {\n    position: absolute;\n    left: 10%;\n    top: -30%;\n    right: 0;\n    margin-left: auto;\n    margin-right: auto;\n    width: 500px;\n    transform: scale(1.5);\n  }\n\n  .signin {\n    --ion-item-background: linear-gradient(180deg, #2EA5BF 0%, #2EA5BF 100%);\n    color: #eee;\n    border-radius: 100%;\n  }\n\n  .inputs {\n    justify-content: center;\n    margin: auto;\n  }\n\n  .options {\n    margin-bottom: 100px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0FBQ0o7O0FBRUE7RUFDSSwrQ0FBQTtFQUNBLGdEQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsNkRBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBRUE7RUFDSSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3RUFBQTtFQUNBLHNCQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksNEJBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSw2Q0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0ksNkNBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFFQTtFQUNJLDRCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtBQUNKOztBQUVBO0VBQ0ksMkJBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSw0QkFBQTtBQUNKOztBQUVBO0VBQ0ksVUFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLFVBQUE7QUFDSjs7QUFJQTtFQUNJO0lBQ0ksV0FBQTtJQUNBLGFBQUE7SUFDQSxhQUFBO0lBQ0EsWUFBQTtFQUROOztFQUdFO0lBQ0ksV0FBQTtFQUFOOztFQUVFO0lBQ0ksVUFBQTtFQUNOOztFQUNFO0lBQ0ksa0JBQUE7SUFDQSxTQUFBO0lBQ0EsU0FBQTtJQUNBLFFBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0EsWUFBQTtJQUNBLHFCQUFBO0VBRU47O0VBQUU7SUFDSSx3RUFBQTtJQUNBLFdBQUE7SUFDQSxtQkFBQTtFQUdOOztFQURFO0lBQ0ksdUJBQUE7SUFDQSxZQUFBO0VBSU47O0VBRkU7SUFDSSxvQkFBQTtFQUtOO0FBQ0YiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5yb3VuZC1ib3R0b20ge1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDUwJSAxNTBweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1MCUgMTUwcHggIWltcG9ydGFudDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAvKiBFbGxpcHNlIDEgKi9cbiAgICB0b3A6IC01NTBweDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMkVBNUJGIDAlLCAjMkVBNUJGIDEwMCUpO1xuICAgIHdpZHRoOiA4NjRweDtcbiAgICBoZWlnaHQ6IDY4MHB4O1xuICAgIGxlZnQ6IC0yNDhweDtcbiAgICB0cmFuc2l0aW9uOiAycztcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmJ0biB7XG4gICAgYm90dG9tOiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXgtd2lkdGg6IGF1dG87XG4gICAgbWFyZ2luOiAyMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4ubG9nbyB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAyJTtcbiAgICB0b3A6IDIlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHotaW5kZXg6IDI7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMyRUE1QkYgMCUsICMyRUE1QkYgMTAwJSk7XG4gICAgLS1pb24taXRlbS1jb2xvcjogI2VlZTtcbn1cblxuLmlucHV0IHtcbiAgICAvKiBSZWN0YW5nbGUgKi9cbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMkVBNUJGO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5pbnB1dHMge1xuICAgIG1hcmdpbjogMCAyMHB4O1xuICAgIHBhZGRpbmctdG9wOiAxMTBweDtcbn1cblxuLmlucHV0IGlvbi1pbnB1dCB7XG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjogIzJFQTVCRjsgLy9jdXJyZW50Q29sb3Jcbn1cblxuLmlucHV0IGlvbi1sYWJlbCB7XG4gICAgY29sb3I6ICMyRUE1QkY7XG59XG5cbi5pbnB1dCBpb24taWNvbiB7XG4gICAgbWFyZ2luLXRvcDogMjJweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgY29sb3I6ICMyRUE1QkY7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xufVxuXG4uc2lnbmluIHtcbiAgICAvKiBTSUdOIElOICovXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQsIG9yIDgzJSAqL1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGNvbG9yOiAjMkVBNUJGO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5idG4ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuaW9uLWxhYmVsIHAge1xuICAgIC8qIERvbnQgaGF2ZSBhbiBhY2NvdW50PyBTaWduIHVwIHJpZ2h0IG5vdyEgKi9cbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAvKiBvciAxNjclICovXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY29sb3I6ICMyRUE1QkY7XG59XG5cbmlvbi1sYWJlbCBoMiB7XG4gICAgLyogRG9udCBoYXZlIGFuIGFjY291bnQ/IFNpZ24gdXAgcmlnaHQgbm93ISAqL1xuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIC8qIG9yIDEyNSUgKi9cbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogIzJFQTVCRjtcbn1cblxuaW9uLWl0ZW0uaXRlbS1oYXMtZm9jdXM+aW9uLWxhYmVsIHtcbiAgICBjb2xvcjogIzJFQTVCRiAhaW1wb3J0YW50O1xufVxuXG4ub3B0aW9ucyBpb24taWNvbiB7XG4gICAgbWFyZ2luOiAwIDIwcHg7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjgpO1xufVxuXG4ubW92ZSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTk3MHB4KTtcbiAgICB0cmFuc2l0aW9uOiAycztcbn1cblxuI3Nob3cge1xuICAgIHRyYW5zaXRpb246IDFzO1xufVxuXG4uc3RhcnRQbGFjZSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNjAwcHgpO1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zaG93IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLm1vdmVMZWZ0IHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMzcwcHgpO1xufVxuXG4jbG9naW5fc3RhdHVzIHtcbiAgICBjb2xvcjogcmVkO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuI3NpZ251cF9zdGF0dXMge1xuICAgIGNvbG9yOiByZWQ7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoIDo0MTVweCkgYW5kIChtaW4td2lkdGg6IDI3OHB4KSB7fVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNTAwcHgpIHtcbiAgICAucm91bmQtYm90dG9tIHtcbiAgICAgICAgdG9wOiAtMzAwcHg7XG4gICAgICAgIHdpZHRoOiAyMDY0cHg7XG4gICAgICAgIGhlaWdodDogNjgwcHg7XG4gICAgICAgIGxlZnQ6IC0yNDhweDtcbiAgICB9XG4gICAgLnRleHQge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgLmJ0biB7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgfVxuICAgIC5wZW9wbGUge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDEwJTtcbiAgICAgICAgdG9wOiAtMzAlO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgd2lkdGg6IDUwMHB4O1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XG4gICAgfVxuICAgIC5zaWduaW4ge1xuICAgICAgICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMyRUE1QkYgMCUsICMyRUE1QkYgMTAwJSk7XG4gICAgICAgIGNvbG9yOiAjZWVlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIH1cbiAgICAuaW5wdXRzIHtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICB9XG4gICAgLm9wdGlvbnMge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbiAgICB9XG59Il19 */";

/***/ }),

/***/ 1729:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n\n    <div class=\"container\">\n\n        <div id=\"bg\" class=\"round-bottom\"></div>\n\n        <div>\n            <ion-item lines=\"none\" class=\"logo\">\n                <ion-label>\n                    Ratify\n                </ion-label>\n\n            </ion-item>\n        </div>\n\n        <div id=\"hide\">\n            <div class=\"inputs\">\n                <ion-item class='signin' lines=\"none\">\n                    <ion-label>Sign In</ion-label>\n                </ion-item>\n                <form (ngSubmit)=\"onClickLogin()\" method=\"post\" ngNativeValidate>\n                    <ion-item class=\"input\">\n                        <ion-icon slot=\"start\" name=\"person-outline\"></ion-icon>\n                        <ion-label position=\"floating\">Username</ion-label>\n                        <ion-input [ngModelOptions]=\"{standalone:true}\" [(ngModel)]='login_username' required>\n                        </ion-input>\n                    </ion-item>\n                    <ion-item class=\"input\">\n                        <ion-icon slot='start' name=\"lock-closed-outline\"></ion-icon>\n                        <ion-label position=\"floating\">Password</ion-label>\n                        <ion-input required [ngModelOptions]=\"{standalone:true}\" [(ngModel)]='username' [ngModelOptions]=\"{standalone:true}\" [(ngModel)]='login_password' type='password'></ion-input>\n                        <p id=\"login_status\"></p>\n                    </ion-item>\n\n                    <ion-button type=\"submit\" class='btn' color=\"dark\" expand=\"'full\" shape=''>Login</ion-button>\n                </form>\n            </div>\n            <div class=\"options\">\n                <ion-item lines=\"none\">\n                    <ion-label>\n                        <p>Dont have an account?</p>\n                        <ion-button (click)=\"onClickSignupAnimation()\" expand=\"block\" fill=\"clear\" shape=\"round\">\n                            <h2>Sign Up Right now!</h2>\n                        </ion-button>\n                    </ion-label>\n                </ion-item>\n                <ion-item style='margin-bottom:20px' lines=\"full\">\n                    <ion-label>\n                        <p style=\"font-size:10px; margin: 5px 0;\">or</p>\n                        <h2>Sign up with</h2>\n                    </ion-label>\n                </ion-item>\n                <ion-icon name=\"logo-facebook\"></ion-icon>\n                <ion-icon name=\"logo-google\"></ion-icon>\n            </div>\n\n        </div>\n        <div id=\"show\" class=\"startPlace\">\n            <div class=\"inputs\">\n                <ion-item class='signin' lines=\"none\">\n                    <ion-label>Sign Up</ion-label>\n                </ion-item>\n                <form (ngSubmit)=\"onClickSignup()\" method=\"post\" ngNativeValidate>\n                    <ion-item class=\"input\">\n                        <ion-icon slot=\"start\" name=\"person-outline\"></ion-icon>\n                        <ion-label position=\"floating\">Username</ion-label>\n                        <ion-input name=\"username\" id='username' required [ngModelOptions]=\"{standalone:true}\" [(ngModel)]='username'>\n\n                        </ion-input>\n\n                    </ion-item>\n\n\n\n\n                    <ion-item class=\"input\">\n                        <ion-icon slot=\"start\" name=\"person-outline\"></ion-icon>\n                        <ion-label position=\"floating\">Email</ion-label>\n                        <ion-input [ngModelOptions]=\"{standalone:true}\" pattern=\"^[_a-z0-9-]+(\\.[_a-z0-9-]+)*@[a-z0-9-]+(\\.[a-z0-9-]+)*(\\.[a-z]{2,3})$\" type=\"email\" [(ngModel)]='email'>\n\n                        </ion-input>\n                    </ion-item>\n\n                    <ion-item class=\"input\">\n                        <ion-icon slot='start' name=\"lock-closed-outline\"></ion-icon>\n                        <ion-label position=\"floating\">Password</ion-label>\n                        <ion-input id=\"password\" [ngModelOptions]=\"{standalone:true}\" required type='password' [(ngModel)]='password'></ion-input>\n                    </ion-item>\n\n                    <ion-item class=\"input\">\n                        <ion-icon slot='start' name=\"lock-closed-outline\"></ion-icon>\n                        <ion-label position=\"floating\">Confirm Password</ion-label>\n                        <ion-input id=\"confirm_pass\" [ngModelOptions]=\"{standalone:true}\" required type='password' [(ngModel)]='passwod_confirm'></ion-input>\n                        <p id=\"signup_status\"></p>\n                    </ion-item>\n                    <ion-button type='submit' class='btn' color=\"dark \" expand=\" 'full\" shape=' '>Sign Up</ion-button>\n\n                </form>\n\n            </div>\n        </div>\n\n\n\n\n\n\n    </div>\n\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map