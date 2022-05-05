"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_pages_tabs_rating_rating_page_ts"],{

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

/***/ 6013:
/*!**************************************************!*\
  !*** ./src/app/pages/tabs/rating/rating.page.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RatingPage": () => (/* binding */ RatingPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _rating_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rating.page.html?ngResource */ 3804);
/* harmony import */ var _rating_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rating.page.scss?ngResource */ 9317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var src_app_apis_get_user_details_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/apis/get-user-details.service */ 8715);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);










let RatingPage = class RatingPage {
    constructor(modalCtr, http, user, navParams, toastCtrl, alertCtrl, route) {
        this.modalCtr = modalCtr;
        this.http = http;
        this.user = user;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.route = route;
    }
    ngOnInit() {
        this.cute = 0;
        this.personality = 0;
        this.hot = 0;
        this.social = 0;
        this.friendly = 0;
        this.fun = 0;
        this.rated_user = this.navParams.get('username');
        this.rated_name = this.navParams.get('name');
        this.rated_image = this.navParams.get('image');
    }
    close() {
        this.modalCtr.dismiss();
    }
    toastMessage(message, color) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const toast = this.toastCtrl.create({
                message: message,
                duration: 5000,
                color: color,
            });
            (yield toast).present();
        });
    }
    starClicked(event) {
        var stars = document.querySelectorAll(('.icons ion-icon'));
        var star = event.target;
        if (star.name == 'star-outline') {
            star.style.color = 'gold';
            star.name = 'star';
        }
        else if (star.name == 'star') {
            star.style.color = '#eee';
            star.name = 'star-outline';
        }
        //How Cute?
        for (let i = 0; i < 5; i++) {
            if (star == stars[i] && star.name == 'star') {
                this.cute += 20;
            }
            if (star == stars[i] && star.name == 'star-outline') {
                this.cute -= 20;
            }
        }
        //personality?
        for (let i = 5; i < 10; i++) {
            if (star == stars[i] && star.name == 'star') {
                this.personality += 20;
            }
            if (star == stars[i] && star.name == 'star-outline') {
                this.personality -= 20;
            }
        }
        //How Hot?
        for (let i = 10; i < 15; i++) {
            if (star == stars[i] && star.name == 'star') {
                this.hot += 20;
            }
            if (star == stars[i] && star.name == 'star-outline') {
                this.hot -= 20;
            }
        }
        //How Social?
        for (let i = 15; i < 20; i++) {
            if (star == stars[i] && star.name == 'star') {
                this.social += 20;
            }
            if (star == stars[i] && star.name == 'star-outline') {
                this.social -= 20;
            }
        }
        //How Friendly?
        for (let i = 20; i < 25; i++) {
            if (star == stars[i] && star.name == 'star') {
                this.friendly += 20;
            }
            if (star == stars[i] && star.name == 'star-outline') {
                this.friendly -= 20;
            }
        }
        //How Fun?
        for (let i = 25; i < 30; i++) {
            if (star == stars[i] && star.name == 'star') {
                this.fun += 20;
            }
            if (star == stars[i] && star.name == 'star-outline') {
                this.fun -= 20;
            }
        }
    }
    upload_rates() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders();
            headers.append('Access-Control-Allow-Origin', "*");
            const rates = {
                "cute": this.cute,
                'personality': this.personality,
                'hot': this.hot,
                'social': this.social,
                'friendly': this.friendly,
                'fun': this.fun,
                'rated': this.rated_user,
            };
            let alert = this.alertCtrl.create({
                header: 'Reminder',
                message: 'You can only rate ' + this.rated_user + ' once ',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                    },
                    {
                        text: 'Rate',
                        handler: () => {
                            this.http.post('http://127.0.0.1/ratify/upload_rates.php', JSON.stringify(rates), { headers: headers, withCredentials: true }).subscribe((response) => {
                                if (response['status'] == 'success') {
                                    this.toastMessage(this.rated_user + ' Rated Successfully', 'success');
                                    console.log(response);
                                }
                                else {
                                    this.toastMessage(response['status'] + this.rated_user, 'danger');
                                    console.log(response);
                                }
                            });
                        }
                    }
                ]
            });
            (yield alert).present();
        });
    }
    checkRatings() {
        setTimeout(() => {
            this.close();
            setTimeout(() => {
                this.route.navigate(['user-stats'], { state: { username: this.rated_user, name: this.rated_name, image: this.rated_image } });
            }, 300);
        }, 300);
    }
};
RatingPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient },
    { type: src_app_apis_get_user_details_service__WEBPACK_IMPORTED_MODULE_2__.GetUserDetailsService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavParams },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
RatingPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-rating',
        template: _rating_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_rating_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RatingPage);



/***/ }),

/***/ 9317:
/*!***************************************************************!*\
  !*** ./src/app/pages/tabs/rating/rating.page.scss?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "* {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  box-sizing: border-box;\n}\n\n.round-bottom {\n  border-top-left-radius: 50% 150px !important;\n  border-top-right-radius: 50% 150px !important;\n  overflow: hidden;\n  position: absolute;\n  /* Ellipse 1 */\n  bottom: 0;\n  background: linear-gradient(180deg, #2EA5BF 0%, #2EA5BF 100%);\n  /* Ellipse 1 */\n  width: 864px;\n  height: 520px;\n  left: -248px;\n}\n\n.container {\n  width: 100%;\n  height: 100% !important;\n  overflow: hidden;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.logo {\n  font-size: 40px;\n  position: absolute;\n  left: 2%;\n  top: 2%;\n  width: 100%;\n  text-align: left;\n  --ion-item-color: #2EA5BF;\n}\n\n.input {\n  /* Rectangle */\n  border: 1px solid #2EA5BF;\n  box-sizing: border-box;\n  border-radius: 4px;\n  margin-bottom: 450px;\n  margin-left: 20px;\n  margin-right: 20px;\n}\n\n.input ion-input {\n  --placeholder-color: #2EA5BF;\n}\n\n.input ion-label {\n  color: #2EA5BF;\n}\n\n.input ion-icon {\n  margin-top: 22px;\n  margin-right: 20px;\n  margin-left: 0;\n  color: #2EA5BF;\n  transform: scale(0.9);\n}\n\n.usercard {\n  transition: 0.8s;\n  --ion-item-color: white;\n  color: white;\n  border-radius: 20px;\n  width: 271px;\n  height: 271px;\n  box-shadow: inset 0px 10px 30px rgba(0, 0, 0, 0.8);\n  filter: drop-shadow(0px 10px 30px rgba(0, 0, 0, 0.8));\n  border-radius: 20px;\n  max-width: 100%;\n  margin: auto;\n  margin-top: 60px;\n}\n\n.usercard:hover,\n.usercard:active {\n  box-shadow: 0px 10px 30px lightblue;\n}\n\nion-card-header {\n  position: absolute;\n  top: 50;\n  z-index: 1;\n  margin: 5px;\n}\n\n#img {\n  width: 271px;\n  height: 271px;\n  transform: scale(1.6);\n}\n\nion-icon {\n  z-index: 2;\n  transform: scale(3.5);\n  color: #eee;\n  margin: 5px 30px;\n}\n\n.rate-option {\n  --ion-item-background: linear-gradient(180deg, #2EA5BF 0%, #2EA5BF 100%);\n  --ion-item-color: #fff880;\n  font-weight: 500;\n  font-size: 20px;\n  text-align: center;\n  margin-bottom: 10px;\n}\n\n.rate-option ion-label {\n  font-style: italic;\n}\n\n.icons {\n  margin: 10px;\n}\n\nion-button {\n  margin: 30px;\n  text-align: center;\n}\n\n.desc {\n  position: relative;\n  color: white;\n}\n\n.add {\n  position: absolute;\n  margin-left: 120px;\n  padding-bottom: 13px;\n  width: 8px;\n  height: 8px;\n}\n\n.back {\n  width: 20px;\n  height: 20px;\n  color: #2EA5BF;\n  padding-right: 10px;\n}\n\n@media (min-width: 615px) {\n  .round-bottom {\n    width: 100%;\n    left: 0;\n    border-top-left-radius: 100% 150px !important;\n    border-top-right-radius: 100% 150px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJhdGluZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtBQUNKOztBQUVBO0VBQ0ksNENBQUE7RUFDQSw2Q0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUNBLDZEQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSw0QkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtEQUFBO0VBQ0EscURBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTs7RUFFSSxtQ0FBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFFQTtFQUNJLFVBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksd0VBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSTtJQUNJLFdBQUE7SUFDQSxPQUFBO0lBQ0EsNkNBQUE7SUFDQSw4Q0FBQTtFQUNOO0FBQ0YiLCJmaWxlIjoicmF0aW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJvcmRlcjogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4ucm91bmQtYm90dG9tIHtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1MCUgMTUwcHggIWltcG9ydGFudDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNTAlIDE1MHB4ICFpbXBvcnRhbnQ7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLyogRWxsaXBzZSAxICovXG4gICAgYm90dG9tOiAwO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMyRUE1QkYgMCUsICMyRUE1QkYgMTAwJSk7XG4gICAgLyogRWxsaXBzZSAxICovXG4gICAgd2lkdGg6IDg2NHB4O1xuICAgIGhlaWdodDogNTIwcHg7XG4gICAgbGVmdDogLTI0OHB4O1xufVxuXG4uY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5sb2dvIHtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDIlO1xuICAgIHRvcDogMiU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAtLWlvbi1pdGVtLWNvbG9yOiAjMkVBNUJGO1xufVxuXG4uaW5wdXQge1xuICAgIC8qIFJlY3RhbmdsZSAqL1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMyRUE1QkY7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNDUwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4uaW5wdXQgaW9uLWlucHV0IHtcbiAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjMkVBNUJGOyAvL2N1cnJlbnRDb2xvclxufVxuXG4uaW5wdXQgaW9uLWxhYmVsIHtcbiAgICBjb2xvcjogIzJFQTVCRjtcbn1cblxuLmlucHV0IGlvbi1pY29uIHtcbiAgICBtYXJnaW4tdG9wOiAyMnB4O1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBjb2xvcjogIzJFQTVCRjtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XG59XG5cbi51c2VyY2FyZCB7XG4gICAgdHJhbnNpdGlvbjogMC44cztcbiAgICAtLWlvbi1pdGVtLWNvbG9yOiB3aGl0ZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICB3aWR0aDogMjcxcHg7XG4gICAgaGVpZ2h0OiAyNzFweDtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMTBweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAxMHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjgpKTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgbWFyZ2luLXRvcDogNjBweDtcbn1cblxuLnVzZXJjYXJkOmhvdmVyLFxuLnVzZXJjYXJkOmFjdGl2ZSB7XG4gICAgYm94LXNoYWRvdzogMHB4IDEwcHggMzBweCBsaWdodGJsdWU7XG59XG5cbmlvbi1jYXJkLWhlYWRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTA7XG4gICAgei1pbmRleDogMTtcbiAgICBtYXJnaW46IDVweDtcbn1cblxuI2ltZyB7XG4gICAgd2lkdGg6IDI3MXB4O1xuICAgIGhlaWdodDogMjcxcHg7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjYpO1xufVxuXG5pb24taWNvbiB7XG4gICAgei1pbmRleDogMjtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDMuNSk7XG4gICAgY29sb3I6ICNlZWU7XG4gICAgbWFyZ2luOiA1cHggMzBweDtcbn1cblxuLnJhdGUtb3B0aW9uIHtcbiAgICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMyRUE1QkYgMCUsICMyRUE1QkYgMTAwJSk7XG4gICAgLS1pb24taXRlbS1jb2xvcjogI2ZmZjg4MDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnJhdGUtb3B0aW9uIGlvbi1sYWJlbCB7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4uaWNvbnMge1xuICAgIG1hcmdpbjogMTBweDtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gICAgbWFyZ2luOiAzMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmRlc2Mge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5hZGQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXJnaW4tbGVmdDogMTIwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEzcHg7XG4gICAgd2lkdGg6IDhweDtcbiAgICBoZWlnaHQ6IDhweDtcbn1cblxuLmJhY2sge1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBjb2xvcjogIzJFQTVCRjtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNjE1cHgpIHtcbiAgICAucm91bmQtYm90dG9tIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwMCUgMTUwcHggIWltcG9ydGFudDtcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwMCUgMTUwcHggIWltcG9ydGFudDtcbiAgICB9XG59Il19 */";

/***/ }),

/***/ 3804:
/*!***************************************************************!*\
  !*** ./src/app/pages/tabs/rating/rating.page.html?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n    <div class=\"container\">\n\n        <div class=\"round-bottom\"></div>\n\n        <div>\n            <ion-item lines=\"none\" class=\"logo\">\n                <ion-icon class=\"back\" (click)='close()' name=\"arrow-back-outline\"></ion-icon>\n            </ion-item>\n            <ion-card (click)=\"checkRatings($event)\" style=\"z-index:2\" class='usercard' button='true'>\n                <ion-card-header style=\"margin-left: 10px;\">\n                    <ion-card-subtitle color=\"light\">{{name}}</ion-card-subtitle>\n                    <ion-card-title style=\"font-weight: 400; font-size: 20px;\" color=\"light\">@{{username}}</ion-card-title>\n                </ion-card-header>\n                <ion-card-header>\n                    <ion-card-subtitle style=\"margin-top: 230px; margin-left:100px; font-size:13px; font-weight: 400;\" color=\"light\">Check Ratings</ion-card-subtitle>\n                    <ion-icon class=\"add\" name=\"add-circle\"></ion-icon>\n                </ion-card-header>\n                <ion-img id=\"img\" src=\"{{image}}\"></ion-img>\n\n            </ion-card>\n\n            <div>\n                <ion-slides [options]=\"{'direction': 'horizontal'}\">\n                    <ion-slide style=\"display: flex; flex-direction: column;\">\n                        <div class=\"rate-container\">\n                            <ion-item lines=\"none\" class=\"rate-option\">\n                                <ion-label>How Cute?</ion-label>\n                            </ion-item>\n                            <div class=\"icons\">\n                                <ion-icon (click)=\"starClicked($event)\" name=\"star-outline\"></ion-icon>\n                                <ion-icon (click)=\"starClicked($event)\" name=\"star-outline\"></ion-icon>\n                                <ion-icon (click)=\"starClicked($event)\" name=\"star-outline\"></ion-icon>\n                                <ion-icon (click)=\"starClicked($event)\" name=\"star-outline\"></ion-icon>\n                                <ion-icon (click)=\"starClicked($event)\" name=\"star-outline\"></ion-icon>\n                            </div>\n                        </div>\n\n                        <div class=\"rate-container\">\n                            <ion-item lines=\"none\" class=\"rate-option\">\n                                <ion-label>Personality</ion-label>\n                            </ion-item>\n                            <div class=\"icons\">\n                                <ion-icon (click)=\"starClicked($event)\" name=\"star-outline\"></ion-icon>\n                                <ion-icon (click)=\"starClicked($event)\" name=\"star-outline\"></ion-icon>\n                                <ion-icon (click)=\"starClicked($event)\" name=\"star-outline\"></ion-icon>\n                                <ion-icon (click)=\"starClicked($event)\" name=\"star-outline\"></ion-icon>\n                                <ion-icon (click)=\"starClicked($event)\" name=\"star-outline\"></ion-icon>\n                            </div>\n                        </div>\n                        <div class=\"rate-container\">\n                            <ion-item lines=\"none\" class=\"rate-option\">\n                                <ion-label>How Hot?</ion-label>\n                            </ion-item>\n                            <div class=\"icons\">\n                                <ion-icon (click)=\"starClicked($event)\" name=\"star-outline\"></ion-icon>\n                                <ion-icon (click)=\"starClicked($event)\" name=\"star-outline\"></ion-icon>\n                                <ion-icon (click)=\"starClicked($event)\" name=\"star-outline\"></ion-icon>\n                                <ion-icon (click)=\"starClicked($event)\" name=\"star-outline\"></ion-icon>\n                                <ion-icon (click)=\"starClicked($event)\" name=\"star-outline\"></ion-icon>\n                            </div>\n                            <small class=\"desc\">Swipe For More!</small>\n                        </div>\n                    </ion-slide>\n\n                    <ion-slide style=\"display: flex; flex-direction: column;\">\n                        <div class=\"rate-container\">\n                            <ion-item lines=\"none\" class=\"rate-option\">\n                                <ion-label>How Social?</ion-label>\n                            </ion-item>\n                            <div class=\"icons\">\n                                <ion-icon (click)=\"starClicked($event)\" name=\"star-outline\"></ion-icon>\n                                <ion-icon (click)=\"starClicked($event)\" name=\"star-outline\"></ion-icon>\n                                <ion-icon (click)=\"starClicked($event)\" name=\"star-outline\"></ion-icon>\n                                <ion-icon (click)=\"starClicked($event)\" name=\"star-outline\"></ion-icon>\n                                <ion-icon (click)=\"starClicked($event)\" name=\"star-outline\"></ion-icon>\n                            </div>\n                        </div>\n\n                        <div class=\"rate-container\">\n                            <ion-item lines=\"none\" class=\"rate-option\">\n                                <ion-label>How Friendly</ion-label>\n                            </ion-item>\n                            <div class=\"icons\">\n                                <ion-icon (click)=\"starClicked($event)\" name=\"star-outline\"></ion-icon>\n                                <ion-icon (click)=\"starClicked($event)\" name=\"star-outline\"></ion-icon>\n                                <ion-icon (click)=\"starClicked($event)\" name=\"star-outline\"></ion-icon>\n                                <ion-icon (click)=\"starClicked($event)\" name=\"star-outline\"></ion-icon>\n                                <ion-icon (click)=\"starClicked($event)\" name=\"star-outline\"></ion-icon>\n                            </div>\n                        </div>\n                        <div class=\"rate-container\">\n                            <ion-item lines=\"none\" class=\"rate-option\">\n                                <ion-label>How Fun?</ion-label>\n                            </ion-item>\n                            <div class=\"icons\">\n                                <ion-icon (click)=\"starClicked($event)\" name=\"star-outline\"></ion-icon>\n                                <ion-icon (click)=\"starClicked($event)\" name=\"star-outline\"></ion-icon>\n                                <ion-icon (click)=\"starClicked($event)\" name=\"star-outline\"></ion-icon>\n                                <ion-icon (click)=\"starClicked($event)\" name=\"star-outline\"></ion-icon>\n                                <ion-icon (click)=\"starClicked($event)\" name=\"star-outline\"></ion-icon>\n                            </div>\n                            <small class=\"desc\">Swipe For More!</small>\n                        </div>\n                    </ion-slide>\n\n                </ion-slides>\n\n                <ion-button (click)=\"upload_rates()\" expand=\"block\" color=\"dark\">\n                    <ion-label style=\"margin-left: 50px; font-size: 20px;\">RATE!</ion-label>\n                    <ion-icon style=\"transform: scale(1); margin-left: 5px;\" name=\"star\"></ion-icon>\n                </ion-button>\n\n            </div>\n        </div>\n    </div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_tabs_rating_rating_page_ts.js.map