"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_tabs_feed_feed_module_ts"],{

/***/ 4359:
/*!********************************************************!*\
  !*** ./src/app/pages/tabs/feed/feed-routing.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeedPageRoutingModule": () => (/* binding */ FeedPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _feed_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feed.page */ 9718);




const routes = [
    {
        path: '',
        component: _feed_page__WEBPACK_IMPORTED_MODULE_0__.FeedPage
    }
];
let FeedPageRoutingModule = class FeedPageRoutingModule {
};
FeedPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FeedPageRoutingModule);



/***/ }),

/***/ 7859:
/*!************************************************!*\
  !*** ./src/app/pages/tabs/feed/feed.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeedPageModule": () => (/* binding */ FeedPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _feed_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feed-routing.module */ 4359);
/* harmony import */ var _feed_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feed.page */ 9718);







let FeedPageModule = class FeedPageModule {
};
FeedPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _feed_routing_module__WEBPACK_IMPORTED_MODULE_0__.FeedPageRoutingModule
        ],
        declarations: [_feed_page__WEBPACK_IMPORTED_MODULE_1__.FeedPage]
    })
], FeedPageModule);



/***/ }),

/***/ 9718:
/*!**********************************************!*\
  !*** ./src/app/pages/tabs/feed/feed.page.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeedPage": () => (/* binding */ FeedPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _feed_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feed.page.html?ngResource */ 9159);
/* harmony import */ var _feed_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feed.page.scss?ngResource */ 7602);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _rating_rating_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rating/rating.page */ 6013);
/* harmony import */ var src_app_apis_get_user_details_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/apis/get-user-details.service */ 8715);








let FeedPage = class FeedPage {
    constructor(http, modalCtrl, userDetails) {
        this.http = http;
        this.modalCtrl = modalCtrl;
        this.userDetails = userDetails;
        this.users = [];
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.createFeed();
        this.userDetails.getName().subscribe(data => {
            this.username = data;
        });
    }
    createFeed() {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders();
        headers.append('Access-Control-Allow-Origin', '*');
        this.http.get('http://127.0.0.1/ratify/get_users.php', { headers: headers }).subscribe((response) => {
            let users_list = [];
            var users_length = Object.keys(response).length;
            while (users_list.length < users_length) {
                var random = Math.floor(Math.random() * users_length) + 0;
                if (users_list.indexOf(random) === -1) {
                    users_list.push(random);
                }
            }
            for (let index = 0; index < users_length; index++) {
                this.users[index] = response[users_list[index]];
            }
            console.log(this.users);
            console.log(users_list);
        });
    }
    startRating(event) {
        var details = event.target.alt.split(' ');
        var username = details[0];
        var name = details[1] + ' ' + details[2];
        console.log(username);
        console.log(name);
        setTimeout(() => {
            this.modalCtrl.create({
                component: _rating_rating_page__WEBPACK_IMPORTED_MODULE_2__.RatingPage,
                cssClass: 'fullscreen',
                componentProps: {
                    'username': username,
                    'name': name,
                    'image': event.target.src
                },
                swipeToClose: true,
            }).then(res => {
                res.present();
            });
        }, 300);
    }
};
FeedPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: src_app_apis_get_user_details_service__WEBPACK_IMPORTED_MODULE_3__.GetUserDetailsService }
];
FeedPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-feed',
        template: _feed_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_feed_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FeedPage);



/***/ }),

/***/ 7602:
/*!***********************************************************!*\
  !*** ./src/app/pages/tabs/feed/feed.page.scss?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "* {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  box-sizing: border-box;\n  font-style: oblique;\n}\n\n.round-bottom {\n  border-top-left-radius: 100% 170px !important;\n  border-top-right-radius: 100% 170px !important;\n  overflow: hidden;\n  position: absolute;\n  /* Ellipse 1 */\n  bottom: 0;\n  background: linear-gradient(180deg, #2EA5BF 0%, #2EA5BF 100%);\n  /* Ellipse 1 */\n  width: 100%;\n  height: 20px;\n  z-index: 2;\n}\n\n.round-top {\n  border-bottom-left-radius: 50% 150px !important;\n  border-bottom-right-radius: 50% 150px !important;\n  overflow: hidden;\n  position: fixed;\n  /* Ellipse 1 */\n  top: 0;\n  background: linear-gradient(180deg, #2EA5BF 0%, #2EA5BF 100%);\n  /* Ellipse 1 */\n  width: 864px;\n  height: 150px;\n  left: -248px;\n  z-index: 2;\n}\n\n.container {\n  width: 100%;\n  height: 100% !important;\n  overflow: hidden;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.logo {\n  font-size: 40px;\n  position: fixed;\n  left: 2%;\n  top: 2%;\n  width: 100%;\n  text-align: left;\n  z-index: 2;\n}\n\nion-item {\n  --ion-item-background: linear-gradient(180deg, #2EA5BF 0%, #2EA5BF 100%);\n  --ion-item-color: white;\n}\n\n.usercard {\n  transition: 0.8s;\n  --ion-item-color: white;\n  color: white;\n  border-radius: 20px;\n  width: 351px;\n  height: 351px;\n  box-shadow: inset 0px 10px 30px rgba(0, 0, 0, 0.8);\n  filter: drop-shadow(0px 10px 30px rgba(0, 0, 0, 0.8));\n  border-radius: 20px;\n  max-width: 100%;\n  margin-top: 50px;\n}\n\n.usercard:hover,\n.usercard:active {\n  box-shadow: 0px 10px 30px lightblue;\n}\n\nion-card-header {\n  position: absolute;\n  top: 50;\n  z-index: 1;\n  margin: 5px;\n}\n\n#img {\n  width: 351px;\n  height: 351px;\n  transform: scale(1.6);\n}\n\n.move {\n  transform: translateY(-150px);\n}\n\n.desc {\n  position: absolute;\n  color: #2EA5BF;\n  margin-top: 230px;\n}\n\n@media (min-width: 500px) {\n  .round-top {\n    width: 100%;\n    top: 0;\n    height: 150px;\n    left: 0;\n    border-bottom-left-radius: 100% 150px !important;\n    border-bottom-right-radius: 100% 150px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZlZWQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksNkNBQUE7RUFDQSw4Q0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUNBLDZEQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUVBO0VBQ0ksK0NBQUE7RUFDQSxnREFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxNQUFBO0VBQ0EsNkRBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUVBO0VBQ0ksd0VBQUE7RUFDQSx1QkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0RBQUE7RUFDQSxxREFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7O0VBRUksbUNBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSw2QkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJO0lBQ0ksV0FBQTtJQUNBLE1BQUE7SUFDQSxhQUFBO0lBQ0EsT0FBQTtJQUNBLGdEQUFBO0lBQ0EsaURBQUE7RUFDTjtBQUNGIiwiZmlsZSI6ImZlZWQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZm9udC1zdHlsZTogb2JsaXF1ZTtcbn1cblxuLnJvdW5kLWJvdHRvbSB7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTAwJSAxNzBweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMDAlIDE3MHB4ICFpbXBvcnRhbnQ7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLyogRWxsaXBzZSAxICovXG4gICAgYm90dG9tOiAwO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMyRUE1QkYgMCUsICMyRUE1QkYgMTAwJSk7XG4gICAgLyogRWxsaXBzZSAxICovXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHotaW5kZXg6IDI7XG59XG5cbi5yb3VuZC10b3Age1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDUwJSAxNTBweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1MCUgMTUwcHggIWltcG9ydGFudDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAvKiBFbGxpcHNlIDEgKi9cbiAgICB0b3A6IDA7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzJFQTVCRiAwJSwgIzJFQTVCRiAxMDAlKTtcbiAgICAvKiBFbGxpcHNlIDEgKi9cbiAgICB3aWR0aDogODY0cHg7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICBsZWZ0OiAtMjQ4cHg7XG4gICAgei1pbmRleDogMjtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubG9nbyB7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBsZWZ0OiAyJTtcbiAgICB0b3A6IDIlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgei1pbmRleDogMjtcbn1cblxuaW9uLWl0ZW0ge1xuICAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzJFQTVCRiAwJSwgIzJFQTVCRiAxMDAlKTtcbiAgICAtLWlvbi1pdGVtLWNvbG9yOiB3aGl0ZTtcbn1cblxuLnVzZXJjYXJkIHtcbiAgICB0cmFuc2l0aW9uOiAwLjhzO1xuICAgIC0taW9uLWl0ZW0tY29sb3I6IHdoaXRlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIHdpZHRoOiAzNTFweDtcbiAgICBoZWlnaHQ6IDM1MXB4O1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAxMHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjgpO1xuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDEwcHggMzBweCByZ2JhKDAsIDAsIDAsIDAuOCkpO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbi51c2VyY2FyZDpob3Zlcixcbi51c2VyY2FyZDphY3RpdmUge1xuICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDMwcHggbGlnaHRibHVlO1xufVxuXG5pb24tY2FyZC1oZWFkZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwO1xuICAgIHotaW5kZXg6IDE7XG4gICAgbWFyZ2luOiA1cHg7XG59XG5cbiNpbWcge1xuICAgIHdpZHRoOiAzNTFweDtcbiAgICBoZWlnaHQ6IDM1MXB4O1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS42KTtcbn1cblxuLm1vdmUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTUwcHgpO1xufVxuXG4uZGVzYyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNvbG9yOiAjMkVBNUJGO1xuICAgIG1hcmdpbi10b3A6IDIzMHB4O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNTAwcHgpIHtcbiAgICAucm91bmQtdG9wIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTAwJSAxNTBweCAhaW1wb3J0YW50O1xuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTAwJSAxNTBweCAhaW1wb3J0YW50O1xuICAgIH1cbn0iXX0= */";

/***/ }),

/***/ 9159:
/*!***********************************************************!*\
  !*** ./src/app/pages/tabs/feed/feed.page.html?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n    <div class=\"container\">\n\n        <div class=\"round-bottom\"></div>\n        <div class=\"round-top\"></div>\n\n        <div>\n            <ion-item lines=\"none\" class=\"logo\">\n                <ion-label>\n                    Ratify\n                </ion-label>\n\n            </ion-item>\n            <ion-item lines=\"none\" class=\"logo\">\n                <ion-label>\n                    Feed\n                </ion-label>\n\n            </ion-item>\n        </div>\n\n        <ion-slides [options]=\"{'direction': 'vertical'}\">\n            <ng-container *ngFor=\"let user of users; let i =index;\">\n                <ion-slide style=\"transition: 0.8s;\" id=\"card\" *ngIf=\"username != user.name\">\n                    <ion-card (click)='startRating($event)' class='usercard' button='true'>\n                        <ion-card-header style=\"margin-left: 10px;\">\n                            <ion-card-subtitle style=\"font-size: 15px;\" color=\"light\">{{user.name}}</ion-card-subtitle>\n                            <ion-card-title style=\"font-weight: 400;\" color=\"light\">@{{user.username}}</ion-card-title>\n                        </ion-card-header>\n                        <ion-img alt=\"{{user.username}} {{user.name}}\" id=\"img\" src=\"{{user.image}}\"></ion-img>\n                    </ion-card>\n                    <small class=\"desc\">Swipe For More!</small>\n\n                </ion-slide>\n            </ng-container>\n        </ion-slides>\n\n    </div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tabs_feed_feed_module_ts.js.map