(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_helpers/error.interceptor.ts":
/*!***********************************************!*\
  !*** ./src/app/_helpers/error.interceptor.ts ***!
  \***********************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/authentication.service */ "./src/app/_services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    ErrorInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            if (err.status === 401) {
                _this.authenticationService.logout();
                location.reload(true);
            }
            var error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        }));
    };
    ErrorInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());



/***/ }),

/***/ "./src/app/_helpers/jwt.interceptor.ts":
/*!*********************************************!*\
  !*** ./src/app/_helpers/jwt.interceptor.ts ***!
  \*********************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor() {
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        // add authorization header with jwt token if available
        var currentUser = localStorage.getItem('token');
        if (currentUser) {
            request = request.clone({
                setHeaders: {
                    'Content-Type': 'application/json; charset=utf-8',
                    'Accept': 'application/json',
                    'Authorization': "Bearer " + currentUser
                }
            });
        }
        return next.handle(request);
    };
    JwtInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], JwtInterceptor);
    return JwtInterceptor;
}());



/***/ }),

/***/ "./src/app/_services/authentication.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/_services/authentication.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
    }
    AuthenticationService.prototype.login = function (username, password) {
        return this.http.post("/users/authenticate", { username: username, password: password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (user) {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
            return user;
        }));
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/animation.ts":
/*!******************************!*\
  !*** ./src/app/animation.ts ***!
  \******************************/
/*! exports provided: SlideInOutAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideInOutAnimation", function() { return SlideInOutAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var SlideInOutAnimation = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('slideInOut', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            'max-height': '500px', 'opacity': '1', 'visibility': 'visible'
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            'max-height': '0px', 'opacity': '0', 'visibility': 'hidden'
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('in => out', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('400ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    'opacity': '0'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('600ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    'max-height': '0px'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('700ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    'visibility': 'hidden'
                }))
            ])]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('out => in', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    'visibility': 'visible'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('600ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    'max-height': '500px'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('800ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    'opacity': '1'
                }))
            ])])
    ]),
];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\r\n    padding: 25px 0;\r\n    text-align: center;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<all-header></all-header>\r\n<router-outlet></router-outlet>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _uni_Service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni.Service */ "./src/app/uni.Service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(uniService) {
        this.uniService = uniService;
        this.title = 'app';
        if (this.uniService.is_auth()) {
            this.is_auth = true;
        }
        else {
            this.is_auth = false;
        }
        var agent = navigator.userAgent.toLowerCase();
        if (agent.indexOf('MSIE') != -1 || agent.indexOf('rv:') != -1)
            alert("인터넷 익스플로러의 경우 일부 기능이 동작하지 않을 수 있습니다.");
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_uni_Service__WEBPACK_IMPORTED_MODULE_1__["UniService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _start_start_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./start/start.component */ "./src/app/start/start.component.ts");
/* harmony import */ var _uni_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! .//uni-routing.module */ "./src/app/uni-routing.module.ts");
/* harmony import */ var _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./timeline/timeline.component */ "./src/app/timeline/timeline.component.ts");
/* harmony import */ var _board_board_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./board/board.component */ "./src/app/board/board.component.ts");
/* harmony import */ var _user_setting_setting_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user/setting/setting.component */ "./src/app/user/setting/setting.component.ts");
/* harmony import */ var _stats_stats_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./stats/stats.component */ "./src/app/stats/stats.component.ts");
/* harmony import */ var _config_config_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./config/config.component */ "./src/app/config/config.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _user_login_register_login_register_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./user/login-register/login-register.component */ "./src/app/user/login-register/login-register.component.ts");
/* harmony import */ var _user_start_sign_up_start_sign_up_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./user/start-sign-up/start-sign-up.component */ "./src/app/user/start-sign-up/start-sign-up.component.ts");
/* harmony import */ var _user_find_account_find_account_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./user/find-account/find-account.component */ "./src/app/user/find-account/find-account.component.ts");
/* harmony import */ var _user_userlist_userlist_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./user/userlist/userlist.component */ "./src/app/user/userlist/userlist.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _user_my_page_my_page_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./user/my-page/my-page.component */ "./src/app/user/my-page/my-page.component.ts");
/* harmony import */ var _user_my_page_edit_nickname_edit_nickname_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./user/my-page/edit-nickname/edit-nickname.component */ "./src/app/user/my-page/edit-nickname/edit-nickname.component.ts");
/* harmony import */ var _user_my_page_fav_post_fav_post_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./user/my-page/fav-post/fav-post.component */ "./src/app/user/my-page/fav-post/fav-post.component.ts");
/* harmony import */ var _user_my_page_fav_tag_fav_tag_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./user/my-page/fav-tag/fav-tag.component */ "./src/app/user/my-page/fav-tag/fav-tag.component.ts");
/* harmony import */ var _user_my_page_my_page_home_my_page_home_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./user/my-page/my-page-home/my-page-home.component */ "./src/app/user/my-page/my-page-home/my-page-home.component.ts");
/* harmony import */ var _user_my_page_profile_profile_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./user/my-page/profile/profile.component */ "./src/app/user/my-page/profile/profile.component.ts");
/* harmony import */ var _user_my_page_timeline_fav_timeline_fav_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./user/my-page/timeline-fav/timeline-fav.component */ "./src/app/user/my-page/timeline-fav/timeline-fav.component.ts");
/* harmony import */ var _user_my_page_board_fav_board_fav_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./user/my-page/board-fav/board-fav.component */ "./src/app/user/my-page/board-fav/board-fav.component.ts");
/* harmony import */ var _helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./_helpers/error.interceptor */ "./src/app/_helpers/error.interceptor.ts");
/* harmony import */ var _helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./_helpers/jwt.interceptor */ "./src/app/_helpers/jwt.interceptor.ts");
/* harmony import */ var _search_timeline_search_timeline_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./search-timeline/search-timeline.component */ "./src/app/search-timeline/search-timeline.component.ts");
/* harmony import */ var _user_my_page_blacklist_blacklist_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./user/my-page/blacklist/blacklist.component */ "./src/app/user/my-page/blacklist/blacklist.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _start_start_component__WEBPACK_IMPORTED_MODULE_6__["StartComponent"],
                _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_8__["TimelineComponent"],
                _board_board_component__WEBPACK_IMPORTED_MODULE_9__["BoardComponent"],
                _user_setting_setting_component__WEBPACK_IMPORTED_MODULE_10__["SettingComponent"],
                _stats_stats_component__WEBPACK_IMPORTED_MODULE_11__["StatsComponent"],
                _config_config_component__WEBPACK_IMPORTED_MODULE_12__["ConfigComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"],
                _user_login_register_login_register_component__WEBPACK_IMPORTED_MODULE_14__["LoginRegisterComponent"],
                _user_start_sign_up_start_sign_up_component__WEBPACK_IMPORTED_MODULE_15__["StartSignUpComponent"],
                _user_find_account_find_account_component__WEBPACK_IMPORTED_MODULE_16__["FindAccountComponent"],
                _user_userlist_userlist_component__WEBPACK_IMPORTED_MODULE_17__["UserlistComponent"],
                _user_my_page_my_page_component__WEBPACK_IMPORTED_MODULE_19__["MyPageComponent"],
                _user_my_page_edit_nickname_edit_nickname_component__WEBPACK_IMPORTED_MODULE_20__["EditNicknameComponent"],
                _user_my_page_fav_post_fav_post_component__WEBPACK_IMPORTED_MODULE_21__["FavPostComponent"],
                _user_my_page_fav_tag_fav_tag_component__WEBPACK_IMPORTED_MODULE_22__["FavTagComponent"],
                _user_my_page_my_page_home_my_page_home_component__WEBPACK_IMPORTED_MODULE_23__["MyPageHomeComponent"],
                _user_my_page_profile_profile_component__WEBPACK_IMPORTED_MODULE_24__["ProfileComponent"],
                _user_my_page_timeline_fav_timeline_fav_component__WEBPACK_IMPORTED_MODULE_25__["TimelineFavComponent"],
                _user_my_page_board_fav_board_fav_component__WEBPACK_IMPORTED_MODULE_26__["BoardFavComponent"],
                _search_timeline_search_timeline_component__WEBPACK_IMPORTED_MODULE_29__["SearchTimelineComponent"],
                _user_my_page_blacklist_blacklist_component__WEBPACK_IMPORTED_MODULE_30__["BlacklistComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _uni_routing_module__WEBPACK_IMPORTED_MODULE_7__["UniRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"],
            ],
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_28__["JwtInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_27__["ErrorInterceptor"], multi: true },
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/board/board.component.css":
/*!*******************************************!*\
  !*** ./src/app/board/board.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#board-container{\r\n    margin-top:160px;\r\n    padding-top:20px;\r\n    border-radius:10px;\r\n}\r\n\r\n.nickname{\r\n    display: inline-block;\r\n}\r\n\r\n.write-div{\r\n    height:80px;\r\n    text-align:right;\r\n}\r\n\r\n.write-btn{\r\n    height:60px;\r\n    margin:0 auto;\r\n    padding:15px;\r\n    border:0px;\r\n    background-color:#212529;\r\n    color:#fed136;\r\n    font-family: 'Do Hyeon', sans-serif;\r\n    font-size:20px;\r\n    border-radius:5px;\r\n}\r\n\r\n.post{\r\n    min-height:150px;\r\n    max-height:10000px;\r\n    padding:15px 15px 5px;\r\n    margin-bottom: 10px;\r\n\r\n    border:1px solid #CCCCCC;\r\n    border-radius:5px;\r\n    background-color: white;\r\n\r\n}\r\n\r\n.post .time{\r\n    color:darkgray;\r\n    font-size:10px;\r\n\r\n}\r\n\r\n.post .post-contents{\r\n    display: inline-block; \r\n    width: 100%; \r\n}\r\n\r\n.like-div{\r\n    display: inline-block;\r\n    padding:5px;\r\n}\r\n\r\n.like-btn, .toggle-comment{\r\n    font-size:20px;\r\n    margin-right:50px;\r\n    display: inline-block;\r\n    width:80px;\r\n    height:35px;\r\n    text-align:center;\r\n    line-height: 30px;\r\n}\r\n\r\n.like-btn>.like-num, .toggle-comment>span{\r\n    color:#212529a9;\r\n}\r\n\r\n.heart{\r\n    color:palevioletred;\r\n    font-weight: bold;\r\n    font-size:23px;\r\n    font-family: 'Do Hyeon', sans-serif;\r\n}\r\n\r\n.toggle-comment:hover, .like-btn:hover{\r\n    background-color:#DDDDDD;\r\n}\r\n\r\n.align-center{\r\n    text-align:center;\r\n}\r\n\r\n.comment-div{\r\n    border-top:solid rgb(210, 210, 210) 0.5px;\r\n    padding-top:5px;\r\n    padding-bottom: 5px;\r\n    margin-top:10px;\r\n}\r\n\r\n.comment-list{\r\n    margin-top:10px;\r\n}\r\n\r\n.comment{\r\n    margin-bottom:5px;\r\n    padding:3px 8px;\r\n    border:0;\r\n    border-radius: 5px;\r\n    background-color: rgb(240, 240, 240);\r\n}\r\n\r\n.comment-textarea{\r\n    width:90%; \r\n    margin:3px 0px;\r\n}\r\n\r\n.delete{\r\n    display: inline-block;\r\n    background-color:transparent;\r\n    border:0px;\r\n    color:#888888;\r\n    font-size:15px;\r\n    line-height:15px;\r\n}\r\n\r\n.name{\r\n    font-size:15px;\r\n    font-weight: bold;\r\n}\r\n\r\n.write-area{\r\n    width:100%;\r\n    height:200px;\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n    .container {\r\n      width: 1000px;\r\n    }\r\n}\r\n\r\n@media (max-width: 992px) {\r\n    .container {\r\n      width: 600px;\r\n    }\r\n    .comment-textarea{\r\n        width:70%; \r\n    }\r\n}\r\n\r\n@media (max-width: 576px) {\r\n    .container {\r\n      width: 100%;\r\n    }\r\n    #board-container{\r\n        margin-top:90px;\r\n    }\r\n    .write-div{\r\n        height:60px;\r\n        text-align:center;\r\n    }\r\n    .write-btn{\r\n        width:100%;\r\n        height:55px;\r\n        margin:0 auto;\r\n        border:0px;\r\n        background-color:#212529;\r\n        color:#fed136;\r\n        font-family: 'Do Hyeon', sans-serif;\r\n        font-size:20px;\r\n        border-radius:5px;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/board/board.component.html":
/*!********************************************!*\
  !*** ./src/app/board/board.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"https://fonts.googleapis.com/css?family=Do+Hyeon|Nanum+Pen+Script\" rel=\"stylesheet\">\r\n\r\n<div class=\"container\" id=\"board-container\">\r\n    <div class=\"write-div\" *ngIf=\"is_auth\">\r\n        <button (click)=\"write(content)\" class=\"write-btn\"><i class=\"fas fa-pencil-alt\"></i> 글 쓰러 가기</button> \r\n    </div>\r\n\r\n    <div *ngFor=\"let post of small_posts; index as i\" class=\"post\">\r\n        <h5 class=\"nickname\">{{post.author}}</h5>\r\n        <span class=\"time\">&nbsp;{{post.date}}</span>\r\n        <button class=\"delete float-right\" *ngIf=\"user && post.author==user.user_nick || isAdmin\" (click)=\"delete_post(i)\">X</button>\r\n        <button class=\"delete float-right\" *ngIf=\"user && post.author==user.user_nick || isAdmin\" (click)=\"update_post(i, update)\"><span class=\"fas fa-pencil-alt\"></span></button>\r\n\r\n        <div class=\"post-contents\">{{post.contents}}</div>\r\n        <div class=\"comment-div\">\r\n            <a class=\"like-btn\" (click)=\"favorite(i)\">\r\n                <span *ngIf=\"!isFavorite[i]\" class=\"heart\" style=\"margin-right:20px;\">♡</span>\r\n                <span *ngIf=\"isFavorite[i]\" class=\"heart\" style=\"margin-right:20px;\">♥</span>\r\n                <span class=\"like-num\">{{post.fav_cnt}}</span>\r\n            </a>\r\n            <a class=\"toggle-comment\" (click)=\"collapsed(i)\" [attr.aria-expanded]=\"isCollapsed[i]\" aria-controls=\"collapseExample\">\r\n                <span  class=\"fa-comment\" [class.far]=\"isCollapsed[i]\" [class.fas]=\"!isCollapsed[i]\" style=\"margin-right:20px;\"></span>\r\n                <span class=\"comment-num\">{{post.comment.length}}</span>\r\n            </a>\r\n            <div class=\"comment-list\" [ngbCollapse]=\"isCollapsed[i]\">\r\n                <div *ngFor=\"let comment of post.show_comment; index as j\" class=\"comment\">\r\n                    <span class=\"name\">{{comment.author}}</span>\r\n                    &nbsp;{{comment.contents}}\r\n                    <span class=\"text-muted\">{{comment.date}}</span>\r\n                    <button class=\"delete float-right\" *ngIf=\"user && comment.author==user.user_nick || isAdmin\"  (click)=\"delete_comment(i,j)\">X</button>\r\n                </div>\r\n                <a *ngIf=\"post.more_comment\" (click)=\"more_comments(i)\">댓글 더 보기..</a>\r\n                <form [formGroup]=\"comment_writeForm\" (ngSubmit)=\"comment_send(i)\">\r\n                    <input class=\"comment-textarea\" formControlName=\"contents\" type=\"textarea\" placeholder=\"댓글을 입력해주세요.\">\r\n                    <button type=\"submit\" [disabled]=\"!comment_writeForm.valid\"> <span class=\"fas fa-comment\"></span></button>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<ng-template #content let-modal>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">글쓰기</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <form [formGroup]=\"writeForm\" (ngSubmit)=\"send()\">\r\n  <div class=\"modal-body\">\r\n      <textarea id=\"contents\" formControlName=\"contents\" class=\"write-area\" placeholder=\"나누고픈 의견을 자유롭게 써주세요.\"></textarea>\r\n    \r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"submit\" [disabled]=\"!writeForm.valid\" class=\"btn btn-outline-dark\">올리기</button>\r\n  </div>\r\n</form>\r\n</ng-template>\r\n\r\n<ng-template #update let-modal>\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\" id=\"modal-basic-title\">글 수정하기</h4>\r\n          <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\r\n              <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <form [formGroup]=\"updateForm\" (ngSubmit)=\"save()\">\r\n        <div class=\"modal-body\">\r\n            <textarea id=\"contents\" formControlName=\"contents\" class=\"write-area\" ></textarea>\r\n            <input type=\"hidden\" formControlName=\"id\"> \r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"submit\"  [disabled]=\"!updateForm.valid\" class=\"btn btn-outline-dark\">저장</button>\r\n        </div>\r\n      </form>\r\n      </ng-template>"

/***/ }),

/***/ "./src/app/board/board.component.ts":
/*!******************************************!*\
  !*** ./src/app/board/board.component.ts ***!
  \******************************************/
/*! exports provided: BoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardComponent", function() { return BoardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _uni_Service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../uni.Service */ "./src/app/uni.Service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BoardComponent = /** @class */ (function () {
    function BoardComponent(modalService, fb, uniService) {
        this.modalService = modalService;
        this.fb = fb;
        this.uniService = uniService;
        this.maxPost = 13;
        this.writeForm = this.fb.group({
            contents: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.comment_writeForm = this.fb.group({
            contents: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.updateForm = this.fb.group({
            contents: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            id: ['']
        });
        this.isCollapsed = [];
        this.getList();
    }
    BoardComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('token')) {
            this.is_auth = true;
        }
        else {
            this.is_auth = false;
        }
    };
    BoardComponent.prototype.onScrollEvent = function ($event) {
        var pageHeight = document.documentElement.offsetHeight;
        var windowHeight = window.innerHeight + 3;
        if (window.pageYOffset + windowHeight >= pageHeight) {
            this.maxPost += 5;
            this.small_posts = this.posts.slice(0, this.maxPost + 5);
        }
    };
    BoardComponent.prototype.write = function (content) {
        this.writeForm.reset();
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
        }, function (reason) {
        });
    };
    BoardComponent.prototype.update_post = function (i, update) {
        this.updateForm.setValue({
            contents: this.posts[i].contents,
            id: this.posts[i]._id.$oid
        });
        this.modalService.open(update, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
        }, function (reason) {
        });
    };
    BoardComponent.prototype.save = function () {
        var _this = this;
        this.uniService.updatePost(this.updateForm.value).subscribe(function (response) {
            _this.getList();
        }, function (error) { return console.log('error', error); });
        this.modalService.dismissAll();
    };
    BoardComponent.prototype.collapsed = function (ind) {
        this.isCollapsed[ind] = !this.isCollapsed[ind];
        this.comment_writeForm.reset();
    };
    BoardComponent.prototype.close = function () {
        this.modalService.dismissAll();
    };
    BoardComponent.prototype.send = function () {
        var _this = this;
        if (this.writeForm.value.contents.length > 500) {
            alert("최대 500자까지 작성할 수 있습니다.");
        }
        else {
            this.uniService.sendPost(this.writeForm.value).subscribe(function (response) {
                _this.getList();
            }, function (error) { return console.log('error', error); });
            this.modalService.dismissAll();
        }
    };
    BoardComponent.prototype.comment_send = function (ind) {
        var _this = this;
        if (this.is_auth) {
            this.uniService.sendComment(this.comment_writeForm.value, this.posts[ind]._id.$oid).subscribe(function (response) {
                _this.getList();
            }, function (error) { return console.log('error', error); });
        }
        else {
            alert("로그인이 필요합니다.");
        }
        this.comment_writeForm.reset();
    };
    BoardComponent.prototype.delete_comment = function (post_ind, comment_ind) {
        var _this = this;
        var postData = {
            post_id: this.posts[post_ind]._id.$oid,
            comment_id: this.posts[post_ind].comment[comment_ind].oid.$oid
        };
        this.uniService.deleteComment(postData).subscribe(function (response) {
            _this.getList();
        }, function (error) { return console.log('error', error); });
    };
    BoardComponent.prototype.delete_post = function (post_ind) {
        var _this = this;
        this.uniService.deletePost(this.posts[post_ind]._id.$oid).subscribe(function (response) {
            _this.getList();
        }, function (error) { return console.log('error', error); });
    };
    BoardComponent.prototype.getList = function () {
        var _this = this;
        this.uniService.getUserDetail().subscribe(function (response) {
            if (response) {
                _this.user = {
                    user_id: response._id,
                    user_uid: response.id,
                    user_rank: response.rank,
                    user_nick: response.nickname
                };
                if (_this.user.user_rank == 10) {
                    _this.isAdmin = true;
                }
            }
            _this.uniService.getBoardList().subscribe(function (response) {
                _this.posts = JSON.parse(response);
                var post_len = _this.posts.length;
                var comment_len;
                _this.isFavorite = [];
                for (var i = 0; i < post_len; i++) {
                    comment_len = _this.posts[i].comment.length;
                    _this.posts[i].comment.reverse();
                    _this.posts[i].date = _this.timeConverter(_this.posts[i].date);
                    _this.isFavorite[i] = false;
                    if (_this.isCollapsed[i] == null)
                        _this.isCollapsed[i] = true;
                    for (var j = 0; j < comment_len; j++) {
                        _this.posts[i].comment[j].date = _this.timeConverter(_this.posts[i].comment[j].date);
                    }
                    _this.posts[i].show_comment = _this.posts[i].comment.slice(0, 8);
                    var show_comment_len = _this.posts[i].show_comment.length;
                    if (comment_len > show_comment_len) {
                        _this.posts[i].more_comment = true;
                    }
                    else {
                        _this.posts[i].more_comment = false;
                    }
                    if (_this.posts[i].fav) {
                        var fav_len = _this.posts[i].fav.length;
                        if (_this.user)
                            for (var j = 0; j < fav_len; j++) {
                                if (_this.posts[i].fav[j].user_id.$oid == _this.user.user_id.$oid) {
                                    _this.isFavorite[i] = true;
                                }
                            }
                    }
                }
                _this.small_posts = _this.posts.slice(0, _this.maxPost);
            }, function (error) { return console.log('error', error); });
        }, function (error) { return console.log('이건 에러야 !!error', error); });
    };
    BoardComponent.prototype.more_comments = function (i) {
        var show_comment_len = this.posts[i].show_comment.length;
        var comment_len = this.posts[i].comment.length;
        this.posts[i].show_comment = this.posts[i].comment.slice(0, show_comment_len + 5);
        show_comment_len = this.posts[i].show_comment.length;
        if (comment_len <= show_comment_len) {
            this.posts[i].more_comment = false;
        }
        else {
            this.posts[i].more_comment = true;
        }
    };
    BoardComponent.prototype.favorite = function (ind) {
        var _this = this;
        if (localStorage.getItem('token')) {
            var id = this.posts[ind]._id;
            if (this.isFavorite[ind]) {
                this.uniService.unFavBoard(id).subscribe(function (response) {
                    _this.posts[ind].fav_cnt -= 1;
                }, function (error) { return console.log('error', error); });
            }
            else {
                this.uniService.favBoard(id).subscribe(function (response) {
                    _this.posts[ind].fav_cnt += 1;
                }, function (error) { return console.log('error', error); });
            }
            this.isFavorite[ind] = !this.isFavorite[ind];
        }
        else {
            alert("관심 기능은 로그인 후에 사용가능합니다.");
        }
    };
    BoardComponent.prototype.timeConverter = function (UNIX_timestamp) {
        UNIX_timestamp = UNIX_timestamp.replace(/[^0-9]/g, "");
        var year = UNIX_timestamp.substring(0, 4);
        var month = UNIX_timestamp.substring(4, 6) - 1;
        var day = UNIX_timestamp.substring(6, 8);
        var hour = UNIX_timestamp.substring(8, 10);
        var min = UNIX_timestamp.substring(10, 12);
        var sec = UNIX_timestamp.substring(12, 14);
        var date = new Date(year, month, day, hour, min, sec);
        var now = Math.round(new Date().getTime());
        var elapsed_time = (now - date.getTime()) / 1000;
        if (elapsed_time >= 2592000) {
            elapsed_time /= 2592000;
            return Math.floor(elapsed_time) + "개월 전";
        }
        else if (elapsed_time >= 86400) {
            elapsed_time /= 86400;
            return Math.floor(elapsed_time) + "일 전";
        }
        else if (elapsed_time >= 3600) {
            elapsed_time /= 3600;
            return Math.floor(elapsed_time) + "시간 전";
        }
        else if (elapsed_time >= 300) {
            elapsed_time /= 60;
            return Math.floor(elapsed_time) + "분 전";
        }
        else {
            return "방금 전";
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], BoardComponent.prototype, "onScrollEvent", null);
    BoardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-board',
            template: __webpack_require__(/*! ./board.component.html */ "./src/app/board/board.component.html"),
            styles: [__webpack_require__(/*! ./board.component.css */ "./src/app/board/board.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _uni_Service__WEBPACK_IMPORTED_MODULE_3__["UniService"]])
    ], BoardComponent);
    return BoardComponent;
}());



/***/ }),

/***/ "./src/app/config/config.component.css":
/*!*********************************************!*\
  !*** ./src/app/config/config.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/config/config.component.html":
/*!**********************************************!*\
  !*** ./src/app/config/config.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  config works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/config/config.component.ts":
/*!********************************************!*\
  !*** ./src/app/config/config.component.ts ***!
  \********************************************/
/*! exports provided: ConfigComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigComponent", function() { return ConfigComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config.service */ "./src/app/config/config.service.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfigComponent = /** @class */ (function () {
    function ConfigComponent(configService) {
        this.configService = configService;
    }
    ConfigComponent.prototype.ngOnInit = function () {
    };
    ConfigComponent.prototype.showConfig = function () {
        var _this = this;
        this.configService.getConfig()
            .subscribe(function (data) { return _this.config = __assign({}, data); });
    };
    ConfigComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'config',
            template: __webpack_require__(/*! ./config.component.html */ "./src/app/config/config.component.html"),
            styles: [__webpack_require__(/*! ./config.component.css */ "./src/app/config/config.component.css")]
        }),
        __metadata("design:paramtypes", [_config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"]])
    ], ConfigComponent);
    return ConfigComponent;
}());



/***/ }),

/***/ "./src/app/config/config.service.ts":
/*!******************************************!*\
  !*** ./src/app/config/config.service.ts ***!
  \******************************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfigService = /** @class */ (function () {
    function ConfigService(http) {
        this.http = http;
        this.configUrl = 'assets/config.json';
    }
    ConfigService.prototype.getConfig = function () {
        return this.http.get(this.configUrl);
    };
    ConfigService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ConfigService);
    return ConfigService;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*!\r\n * Start Bootstrap - Agency v5.0.1 (https://startbootstrap.com/template-overviews/agency)\r\n * Copyright 2013-2018 Start Bootstrap\r\n * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-agency/blob/master/LICENSE)\r\n */\r\n .container-fluid{\r\n   background-color:#212529;\r\n   \r\n }\r\n .banner{\r\n   font-size:45px;\r\n   font-weight:bold;\r\n   font-family: 'Kaushan Script', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';\r\n }\r\n .searchBar{\r\n   margin-left:30px;\r\n   width:50%;\r\n   border:solid #fed136 3px;\r\n   border-radius: 5px;\r\n }\r\n .margin-top{\r\n  margin-top:10px;\r\n}\r\n .search-btn{\r\n   display: inline-block;\r\n   width:30px;\r\n   height:30px;\r\n   margin-left:-30px;\r\n   background-color:#fed136;\r\n    border:solid #fed136 3px;\r\n    border-radius: 5px;\r\n    color:white;\r\n }\r\n body {\r\n    overflow-x: hidden;\r\n    font-family: 'Roboto Slab', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';\r\n\r\n  }\r\n .menu-bar{\r\n    margin-left:5px;\r\n  }\r\n .menu{\r\n    display:inline-block;\r\n    padding:10px 40px;\r\n    font-family: 'Do Hyeon', sans-serif;\r\n    font-size:20px;\r\n  }\r\n .menu:hover{\r\n    background-color:#171717;\r\n  }\r\n @media (max-width: 1046px) { \r\n    .menu{\r\n      display:inline-block;\r\n      padding:10px 20px;\r\n      font-family: 'Do Hyeon', sans-serif;\r\n      font-size:17px;\r\n    }\r\n  }\r\n @media (max-width: 576px) { \r\n    .banner{\r\n      display:none;\r\n    }\r\n   .searchBar{\r\n     margin-top:10px;\r\n     margin-left:0px;\r\n     width:100%;\r\n     border:solid #fed136 3px;\r\n     border-radius: 0px;\r\n   }\r\n   .menu{\r\n    display:inline-block;\r\n    padding:10px 25px;\r\n    font-family: 'Do Hyeon', sans-serif;\r\n    font-size:12px;\r\n    }\r\n  }\r\n p {\r\n    line-height: 1.75;\r\n  }\r\n a {\r\n    color: #fed136;\r\n  }\r\n a:hover {\r\n    color: #fec503;\r\n  }\r\n .text-primary {\r\n    color: #fed136 !important;\r\n  }\r\n h1,\r\n  h2,\r\n  h3,\r\n  h4,\r\n  h5,\r\n  h6 {\r\n    font-weight: 700;\r\n    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';\r\n  }\r\n #mainNav .navbar-toggler {\r\n    font-size: 12px;\r\n    right: 0;\r\n    padding: 13px;\r\n    text-transform: uppercase;\r\n    color: white;\r\n    border: 0;\r\n    background-color: #fed136;\r\n    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';\r\n  }\r\n #mainNav .navbar-brand {\r\n    color: #fed136;\r\n    font-family: 'Kaushan Script', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';\r\n  }\r\n #mainNav .navbar-brand.active, #mainNav .navbar-brand:active, #mainNav .navbar-brand:focus, #mainNav .navbar-brand:hover {\r\n    color: #fec503;\r\n  }\r\n #mainNav .navbar-nav .nav-item .nav-link {\r\n    font-size: 90%;\r\n    font-weight: 400;\r\n    padding: 0.75em 0;\r\n    letter-spacing: 1px;\r\n    color: white;\r\n    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';\r\n  }\r\n #mainNav .navbar-nav .nav-item .nav-link.active, #mainNav .navbar-nav .nav-item .nav-link:hover {\r\n    color: #fed136;\r\n  }\r\n @media (min-width: 992px) {\r\n    #mainNav {\r\n      transition: padding-top 0.3s, padding-bottom 0.3s;\r\n      border: none;\r\n      background-color: transparent;\r\n    }\r\n    #mainNav .navbar-brand {\r\n      font-size: 1.75em;\r\n      transition: all 0.3s;\r\n    }\r\n    #mainNav .navbar-nav .nav-item .nav-link {\r\n      padding: 1.1em 1em !important;\r\n    }\r\n    #mainNav.navbar-shrink {\r\n      padding-top: 0;\r\n      padding-bottom: 0;\r\n      background-color: #212529;\r\n    }\r\n    #mainNav.navbar-shrink .navbar-brand {\r\n      font-size: 1.25em;\r\n      padding: 12px 0;\r\n    }\r\n  }\r\n #mainNav {\r\n    background-color: #212529;\r\n  } \r\n"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href='https://fonts.googleapis.com/css?family=Kaushan+Script' rel='stylesheet' type='text/css'>\r\n<link href=\"https://fonts.googleapis.com/css?family=Do+Hyeon|Nanum+Pen+Script\" rel=\"stylesheet\">\r\n\r\n    <div class=\"container-fluid fixed-top\">\r\n      <div [@slideInOut]=\"animationState\" class=\"row\">\r\n        <div class=\"col-sm-12 text-center\">\r\n            <a class=\"navbar-brand banner\" routerLink=\"/\" (click)=\"clear()\">PooKle</a>\r\n           <!-- <a *ngIf=\"is_auth\" class=\"navbar-brand banner\" routerLink=\"/timeline\">PooKle</a>-->\r\n            \r\n        </div>\r\n      </div>\r\n      <div class=\"row text-center margin-top\">\r\n        <div class=\"col-sm-12\">\r\n            <form [formGroup]=\"searchForm\" (ngSubmit)=\"search()\">\r\n\r\n            <input type=\"text\"  formControlName=\"word\" class=\"searchBar\">\r\n            <button type=\"submit\" [disabled]=\"!searchForm.valid\" class=\"search-btn\"><i class=\"fas fa-search\"></i></button>\r\n            </form>\r\n        </div>\r\n      </div>\r\n      <div class=\"row text-center menu-bar\">\r\n        <div class=\"col-md-3\"></div>\r\n        <div class=\"col-sm-12 col-md-6\">\r\n            <a class=\"menu\" routerLink=\"/timeline\" (click)=\"scroll_reset()\"><i class=\"fas fa-book\"></i>&nbsp;타임라인</a>\r\n            <a class=\"menu\" routerLink=\"/board\"><i class=\"fas fa-edit\"></i>&nbsp;게시판</a>\r\n            <a *ngIf=\"!is_auth\" class=\"menu\" routerLink=\"/user/sign-in\"><i class=\"fas fa-user\"></i>&nbsp;로그인</a>\r\n            <a *ngIf=\"is_auth\" class=\"menu\" routerLink=\"/user/my-page\"><i class=\"fas fa-cog\"></i>&nbsp;내정보</a>\r\n        </div>\r\n        <div class=\"col-md-3\"></div>\r\n      </div>\r\n    </div>\r\n\r\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _uni_Service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../uni.Service */ "./src/app/uni.Service.ts");
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../animation */ "./src/app/animation.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(uniService, fb, router) {
        this.uniService = uniService;
        this.fb = fb;
        this.router = router;
        this.is_auth = false;
        this.animationState = 'in';
        this.searchForm = this.fb.group({
            word: ['']
        });
    }
    HeaderComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('token')) {
            this.is_auth = true;
        }
        else {
            this.is_auth = false;
        }
    };
    HeaderComponent.prototype.clear = function () {
        this.searchForm.reset();
    };
    HeaderComponent.prototype.onScrollEvent = function ($event) {
        if (window.pageYOffset >= 110) {
            this.animationState = 'out';
        }
        else {
            this.animationState = 'in';
        }
    };
    HeaderComponent.prototype.scroll_reset = function () {
        window.scrollTo(0, 0);
    };
    HeaderComponent.prototype.search = function () {
        var word = this.searchForm.value.word;
        var split_word = word.split(" ");
        var swi = 0;
        for (var i = 0; i < split_word.length; i++) {
            if (split_word[i].length == 1)
                swi = 1;
        }
        if (swi == 0) {
            location.href = '/#/timeline/' + this.searchForm.value.word;
            location.reload();
            //this.router.navigate(['/timeline/'+this.searchForm.value.word]);
        }
        else {
            alert("두 글자 이상 입력해주세요!");
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], HeaderComponent.prototype, "onScrollEvent", null);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'all-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")],
            animations: [_animation__WEBPACK_IMPORTED_MODULE_2__["SlideInOutAnimation"]]
        }),
        __metadata("design:paramtypes", [_uni_Service__WEBPACK_IMPORTED_MODULE_1__["UniService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/search-timeline/search-timeline.component.css":
/*!***************************************************************!*\
  !*** ./src/app/search-timeline/search-timeline.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/search-timeline/search-timeline.component.html":
/*!****************************************************************!*\
  !*** ./src/app/search-timeline/search-timeline.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  search-timeline works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/search-timeline/search-timeline.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/search-timeline/search-timeline.component.ts ***!
  \**************************************************************/
/*! exports provided: SearchTimelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchTimelineComponent", function() { return SearchTimelineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchTimelineComponent = /** @class */ (function () {
    function SearchTimelineComponent() {
    }
    SearchTimelineComponent.prototype.ngOnInit = function () {
    };
    SearchTimelineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-timeline',
            template: __webpack_require__(/*! ./search-timeline.component.html */ "./src/app/search-timeline/search-timeline.component.html"),
            styles: [__webpack_require__(/*! ./search-timeline.component.css */ "./src/app/search-timeline/search-timeline.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SearchTimelineComponent);
    return SearchTimelineComponent;
}());



/***/ }),

/***/ "./src/app/start/css/agency.css":
/*!**************************************!*\
  !*** ./src/app/start/css/agency.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*!\r\n * Start Bootstrap - Agency v5.0.1 (https://startbootstrap.com/template-overviews/agency)\r\n * Copyright 2013-2018 Start Bootstrap\r\n * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-agency/blob/master/LICENSE)\r\n */\r\n\r\nbody {\r\n  overflow-x: hidden;\r\n  font-family: 'Roboto Slab', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';\r\n}\r\n\r\nopacity{\r\n  opacity: 0.5;\r\n}\r\n\r\np {\r\n  line-height: 1.75;\r\n}\r\n\r\na {\r\n  color: #fed136;\r\n}\r\n\r\na:hover {\r\n  color: #fec503;\r\n}\r\n\r\n.text-primary {\r\n  color: #fed136 !important;\r\n}\r\n\r\n.fas-span{\r\n  display: inline-block;\r\n  padding-top:5px;\r\n  width:100px;\r\n  height:100px;\r\n  border-radius:50px;\r\n  font-size:60px;\r\n  background-color: #fed136;\r\n  color:white;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  font-weight: 700;\r\n  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';\r\n}\r\n\r\n.services-header{\r\n  margin-bottom:40px;\r\n}\r\n\r\nsection {\r\n  padding: 100px 0;\r\n}\r\n\r\nsection h2.section-heading {\r\n  font-size: 40px;\r\n  margin-top: 0;\r\n  margin-bottom: 15px;\r\n}\r\n\r\nsection h3.section-subheading {\r\n  font-size: 16px;\r\n  font-weight: 400;\r\n  font-style: italic;\r\n  color:white;\r\n  margin-bottom: 75px;\r\n  text-transform: none;\r\n  font-family: 'Droid Serif', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';\r\n}\r\n\r\n.font-small{\r\n  font-size:18px;\r\n}\r\n\r\n.white-bold{\r\n  font-weight: bold;\r\n  color:white;\r\n  font-size:25px;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  section {\r\n    padding: 150px 0;\r\n  }\r\n}\r\n\r\n.btn {\r\n  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';\r\n  font-weight: 700;\r\n}\r\n\r\n.btn-xl {\r\n  font-size: 18px;\r\n  padding: 20px 40px;\r\n}\r\n\r\n.btn-primary {\r\n  background-color: #fed136;\r\n  border-color: #fed136;\r\n  color:white;\r\n}\r\n\r\n.btn-primary:active, .btn-primary:focus, .btn-primary:hover {\r\n  background-color: #fec810 !important;\r\n  border-color: #fec810 !important;\r\n  color: white;\r\n}\r\n\r\n.btn-primary:active, .btn-primary:focus {\r\n  box-shadow: 0 0 0 0.2rem rgba(254, 209, 55, 0.5) !important;\r\n}\r\n\r\n::-moz-selection {\r\n  background: #fed136;\r\n  text-shadow: none;\r\n}\r\n\r\n::selection {\r\n  background: #fed136;\r\n  text-shadow: none;\r\n}\r\n\r\nimg::-moz-selection {\r\n  background: transparent;\r\n}\r\n\r\nimg::selection {\r\n  background: transparent;\r\n}\r\n\r\nimg::-moz-selection {\r\n  background: transparent;\r\n}\r\n\r\n#mainNav {\r\n  background-color: #212529;\r\n}\r\n\r\n#mainNav .navbar-toggler {\r\n  font-size: 12px;\r\n  right: 0;\r\n  padding: 13px;\r\n  text-transform: uppercase;\r\n  color: white;\r\n  border: 0;\r\n  background-color: #fed136;\r\n  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';\r\n}\r\n\r\n#mainNav .navbar-brand {\r\n  color: #fed136;\r\n  font-family: 'Kaushan Script', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';\r\n}\r\n\r\n#mainNav .navbar-brand.active, #mainNav .navbar-brand:active, #mainNav .navbar-brand:focus, #mainNav .navbar-brand:hover {\r\n  color: #fec503;\r\n}\r\n\r\n#mainNav .navbar-nav .nav-item .nav-link {\r\n  font-size: 90%;\r\n  font-weight: 400;\r\n  padding: 0.75em 0;\r\n  letter-spacing: 1px;\r\n  color: white;\r\n  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';\r\n}\r\n\r\n#mainNav .navbar-nav .nav-item .nav-link.active, #mainNav .navbar-nav .nav-item .nav-link:hover {\r\n  color: #fed136;\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  #mainNav {\r\n    padding-top: 25px;\r\n    padding-bottom: 25px;\r\n    transition: padding-top 0.3s, padding-bottom 0.3s;\r\n    border: none;\r\n    background-color: transparent;\r\n  }\r\n  #mainNav .navbar-brand {\r\n    font-size: 1.75em;\r\n    transition: all 0.3s;\r\n  }\r\n  #mainNav .navbar-nav .nav-item .nav-link {\r\n    padding: 1.1em 1em !important;\r\n  }\r\n  #mainNav.navbar-shrink {\r\n    padding-top: 0;\r\n    padding-bottom: 0;\r\n    background-color: #212529;\r\n  }\r\n  #mainNav.navbar-shrink .navbar-brand {\r\n    font-size: 1.25em;\r\n    padding: 12px 0;\r\n  }\r\n}\r\n\r\nheader.masthead {\r\n  text-align: center;\r\n  color: white;\r\n   background-repeat: no-repeat;\r\n  background-attachment: scroll;\r\n  background-position: center center;\r\n  background-size: cover;\r\n}\r\n\r\nheader.masthead .intro-text {\r\n  padding-top: 150px;\r\n  padding-bottom: 100px;\r\n}\r\n\r\n.introduce-myself{\r\n  font-size:44px;\r\n  margin-bottom:20px;\r\n  font-family: 'Nanum Pen Script', cursive;\r\n}\r\n\r\nheader.masthead .intro-text .intro-lead-in {\r\n  font-size: 22px;\r\n  font-style: italic;\r\n  line-height: 22px;\r\n  margin-bottom: 25px;\r\n  font-family: 'Droid Serif', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';\r\n}\r\n\r\nheader.masthead .intro-text .intro-heading {\r\n  font-size: 50px;\r\n  font-weight: 700;\r\n  line-height: 50px;\r\n  margin-bottom: 25px;\r\n  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  header.masthead .intro-text {\r\n    padding-top: 300px;\r\n    padding-bottom: 200px;\r\n  }\r\n  header.masthead .intro-text .intro-lead-in {\r\n    font-size: 40px;\r\n    font-style: italic;\r\n    line-height: 40px;\r\n    margin-bottom: 25px;\r\n    font-family: 'Droid Serif', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';\r\n  }\r\n  header.masthead .intro-text .intro-heading {\r\n    font-size: 75px;\r\n    font-weight: 700;\r\n    line-height: 75px;\r\n    margin-bottom: 50px;\r\n    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';\r\n  }\r\n}\r\n\r\n.service-heading {\r\n  margin: 15px 0;\r\n  text-transform: none;\r\n}\r\n\r\n#portfolio .portfolio-item {\r\n  right: 0;\r\n  margin: 0 0 15px;\r\n}\r\n\r\n#portfolio .portfolio-item .portfolio-link {\r\n  position: relative;\r\n  display: block;\r\n  max-width: 400px;\r\n  margin: 0 auto;\r\n  cursor: pointer;\r\n}\r\n\r\n#portfolio .portfolio-item .portfolio-link .portfolio-hover {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  transition: all ease 0.5s;\r\n  opacity: 0;\r\n  background: rgba(254, 209, 54, 0.9);\r\n}\r\n\r\n#portfolio .portfolio-item .portfolio-link .portfolio-hover:hover {\r\n  opacity: 1;\r\n}\r\n\r\n#portfolio .portfolio-item .portfolio-link .portfolio-hover .portfolio-hover-content {\r\n  font-size: 20px;\r\n  position: absolute;\r\n  top: 50%;\r\n  width: 100%;\r\n  height: 20px;\r\n  margin-top: -12px;\r\n  text-align: center;\r\n  color: white;\r\n}\r\n\r\n#portfolio .portfolio-item .portfolio-link .portfolio-hover .portfolio-hover-content i {\r\n  margin-top: -12px;\r\n}\r\n\r\n#portfolio .portfolio-item .portfolio-link .portfolio-hover .portfolio-hover-content h3,\r\n#portfolio .portfolio-item .portfolio-link .portfolio-hover .portfolio-hover-content h4 {\r\n  margin: 0;\r\n}\r\n\r\n#portfolio .portfolio-item .portfolio-caption {\r\n  max-width: 400px;\r\n  margin: 0 auto;\r\n  padding: 25px;\r\n  text-align: center;\r\n  background-color: #fff;\r\n}\r\n\r\n#portfolio .portfolio-item .portfolio-caption h4 {\r\n  margin: 0;\r\n  text-transform: none;\r\n}\r\n\r\n#portfolio .portfolio-item .portfolio-caption p {\r\n  font-size: 16px;\r\n  font-style: italic;\r\n  margin: 0;\r\n  font-family: 'Droid Serif', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';\r\n}\r\n\r\n#portfolio * {\r\n  z-index: 2;\r\n}\r\n\r\n@media (min-width: 767px) {\r\n  #portfolio .portfolio-item {\r\n    margin: 0 0 30px;\r\n  }\r\n}\r\n\r\n.portfolio-modal {\r\n  padding-right: 0px !important;\r\n}\r\n\r\n.portfolio-modal .modal-dialog {\r\n  margin: 1rem;\r\n  max-width: 100vw;\r\n}\r\n\r\n.portfolio-modal .modal-content {\r\n  padding: 100px 0;\r\n  text-align: center;\r\n}\r\n\r\n.portfolio-modal .modal-content h2 {\r\n  font-size: 3em;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.portfolio-modal .modal-content p {\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.portfolio-modal .modal-content p.item-intro {\r\n  font-size: 16px;\r\n  font-style: italic;\r\n  margin: 20px 0 30px;\r\n  font-family: 'Droid Serif', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';\r\n}\r\n\r\n.portfolio-modal .modal-content ul.list-inline {\r\n  margin-top: 0;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.portfolio-modal .modal-content img {\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.portfolio-modal .modal-content button {\r\n  cursor: pointer;\r\n}\r\n\r\n.portfolio-modal .close-modal {\r\n  position: absolute;\r\n  top: 25px;\r\n  right: 25px;\r\n  width: 75px;\r\n  height: 75px;\r\n  cursor: pointer;\r\n  background-color: transparent;\r\n}\r\n\r\n.portfolio-modal .close-modal:hover {\r\n  opacity: 0.3;\r\n}\r\n\r\n.portfolio-modal .close-modal .lr {\r\n  /* Safari and Chrome */\r\n  z-index: 1051;\r\n  width: 1px;\r\n  height: 75px;\r\n  margin-left: 35px;\r\n  /* IE 9 */\r\n  -webkit-transform: rotate(45deg);\r\n  transform: rotate(45deg);\r\n  background-color: #212529;\r\n}\r\n\r\n.portfolio-modal .close-modal .lr .rl {\r\n  /* Safari and Chrome */\r\n  z-index: 1052;\r\n  width: 1px;\r\n  height: 75px;\r\n  /* IE 9 */\r\n  -webkit-transform: rotate(90deg);\r\n  transform: rotate(90deg);\r\n  background-color: #212529;\r\n}\r\n\r\n.timeline {\r\n  position: relative;\r\n  padding: 0;\r\n  list-style: none;\r\n}\r\n\r\n.timeline:before {\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 40px;\r\n  width: 2px;\r\n  margin-left: -1.5px;\r\n  content: '';\r\n  background-color: #e9ecef;\r\n}\r\n\r\n.timeline > li {\r\n  position: relative;\r\n  min-height: 50px;\r\n  margin-bottom: 50px;\r\n}\r\n\r\n.timeline > li:after, .timeline > li:before {\r\n  display: table;\r\n  content: ' ';\r\n}\r\n\r\n.timeline > li:after {\r\n  clear: both;\r\n}\r\n\r\n.timeline > li .timeline-panel {\r\n  position: relative;\r\n  float: right;\r\n  width: 100%;\r\n  padding: 0 20px 0 100px;\r\n  text-align: left;\r\n}\r\n\r\n.timeline > li .timeline-panel:before {\r\n  right: auto;\r\n  left: -15px;\r\n  border-right-width: 15px;\r\n  border-left-width: 0;\r\n}\r\n\r\n.timeline > li .timeline-panel:after {\r\n  right: auto;\r\n  left: -14px;\r\n  border-right-width: 14px;\r\n  border-left-width: 0;\r\n}\r\n\r\n.timeline > li .timeline-image {\r\n  position: absolute;\r\n  z-index: 100;\r\n  left: 0;\r\n  width: 80px;\r\n  height: 80px;\r\n  margin-left: 0;\r\n  text-align: center;\r\n  color: white;\r\n  border: 7px solid #e9ecef;\r\n  border-radius: 100%;\r\n  background-color: #fed136;\r\n}\r\n\r\n.timeline > li .timeline-image h4 {\r\n  font-size: 10px;\r\n  line-height: 14px;\r\n  margin-top: 12px;\r\n}\r\n\r\n.timeline > li.timeline-inverted > .timeline-panel {\r\n  float: right;\r\n  padding: 0 20px 0 100px;\r\n  text-align: left;\r\n}\r\n\r\n.timeline > li.timeline-inverted > .timeline-panel:before {\r\n  right: auto;\r\n  left: -15px;\r\n  border-right-width: 15px;\r\n  border-left-width: 0;\r\n}\r\n\r\n.timeline > li.timeline-inverted > .timeline-panel:after {\r\n  right: auto;\r\n  left: -14px;\r\n  border-right-width: 14px;\r\n  border-left-width: 0;\r\n}\r\n\r\n.timeline > li:last-child {\r\n  margin-bottom: 0;\r\n}\r\n\r\n.timeline .timeline-heading h4 {\r\n  margin-top: 0;\r\n  color: inherit;\r\n}\r\n\r\n.timeline .timeline-heading h4.subheading {\r\n  text-transform: none;\r\n}\r\n\r\n.timeline .timeline-body > ul,\r\n.timeline .timeline-body > p {\r\n  margin-bottom: 0;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .timeline:before {\r\n    left: 50%;\r\n  }\r\n  .timeline > li {\r\n    min-height: 100px;\r\n    margin-bottom: 100px;\r\n  }\r\n  .timeline > li .timeline-panel {\r\n    float: left;\r\n    width: 41%;\r\n    padding: 0 20px 20px 30px;\r\n    text-align: right;\r\n  }\r\n  .timeline > li .timeline-image {\r\n    left: 50%;\r\n    width: 100px;\r\n    height: 100px;\r\n    margin-left: -50px;\r\n  }\r\n  .timeline > li .timeline-image h4 {\r\n    font-size: 13px;\r\n    line-height: 18px;\r\n    margin-top: 16px;\r\n  }\r\n  .timeline > li.timeline-inverted > .timeline-panel {\r\n    float: right;\r\n    padding: 0 30px 20px 20px;\r\n    text-align: left;\r\n  }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  .timeline > li {\r\n    min-height: 150px;\r\n  }\r\n  .timeline > li .timeline-panel {\r\n    padding: 0 20px 20px;\r\n  }\r\n  .timeline > li .timeline-image {\r\n    width: 150px;\r\n    height: 150px;\r\n    margin-left: -75px;\r\n  }\r\n  .timeline > li .timeline-image h4 {\r\n    font-size: 18px;\r\n    line-height: 26px;\r\n    margin-top: 30px;\r\n  }\r\n  .timeline > li.timeline-inverted > .timeline-panel {\r\n    padding: 0 20px 20px;\r\n  }\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n  .timeline > li {\r\n    min-height: 170px;\r\n  }\r\n  .timeline > li .timeline-panel {\r\n    padding: 0 20px 20px 100px;\r\n  }\r\n  .timeline > li .timeline-image {\r\n    width: 170px;\r\n    height: 170px;\r\n    margin-left: -85px;\r\n  }\r\n  .timeline > li .timeline-image h4 {\r\n    margin-top: 40px;\r\n  }\r\n  .timeline > li.timeline-inverted > .timeline-panel {\r\n    padding: 0 100px 20px 20px;\r\n  }\r\n}\r\n\r\n.team-member {\r\n  margin-bottom: 50px;\r\n  text-align: center;\r\n}\r\n\r\n.team-member img {\r\n  width: 225px;\r\n  height: 225px;\r\n  border: 7px solid #fff;\r\n}\r\n\r\n.team-member h4 {\r\n  margin-top: 25px;\r\n  margin-bottom: 0;\r\n  text-transform: none;\r\n}\r\n\r\n.team-member p {\r\n  margin-top: 0;\r\n}\r\n\r\nsection#contact .section-heading {\r\n  color: #fff;\r\n}\r\n\r\nsection#contact .form-group {\r\n  margin-bottom: 25px;\r\n}\r\n\r\nsection#contact .form-group input,\r\nsection#contact .form-group textarea {\r\n  padding: 20px;\r\n}\r\n\r\nsection#contact .form-group input.form-control {\r\n  height: auto;\r\n}\r\n\r\nsection#contact .form-group textarea.form-control {\r\n  height: 248px;\r\n}\r\n\r\nsection#contact .form-control:focus {\r\n  border-color: #fed136;\r\n  box-shadow: none;\r\n}\r\n\r\nsection#contact ::-webkit-input-placeholder {\r\n  font-weight: 700;\r\n  color: #ced4da;\r\n  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';\r\n}\r\n\r\nsection#contact :-moz-placeholder {\r\n  font-weight: 700;\r\n  color: #ced4da;\r\n  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';\r\n}\r\n\r\nsection#contact ::-moz-placeholder {\r\n  font-weight: 700;\r\n  color: #ced4da;\r\n  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';\r\n}\r\n\r\nsection#contact :-ms-input-placeholder {\r\n  font-weight: 700;\r\n  color: #ced4da;\r\n  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';\r\n}\r\n\r\nul.social-buttons {\r\n  margin-bottom: 0;\r\n}\r\n\r\nul.social-buttons li a {\r\n  font-size: 20px;\r\n  line-height: 50px;\r\n  display: block;\r\n  width: 50px;\r\n  height: 50px;\r\n  transition: all 0.3s;\r\n  color: white;\r\n  border-radius: 100%;\r\n  outline: none;\r\n  background-color: #212529;\r\n}\r\n\r\nul.social-buttons li a:active, ul.social-buttons li a:focus, ul.social-buttons li a:hover {\r\n  background-color: #fed136;\r\n}\r\n"

/***/ }),

/***/ "./src/app/start/css/agency.min.css":
/*!******************************************!*\
  !*** ./src/app/start/css/agency.min.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*!\r\n * Start Bootstrap - Agency v5.0.1 (https://startbootstrap.com/template-overviews/agency)\r\n * Copyright 2013-2018 Start Bootstrap\r\n * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-agency/blob/master/LICENSE)\r\n */body{overflow-x:hidden;font-family:'Roboto Slab',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji'}p{line-height:1.75}a{color:#fed136}a:hover{color:#fec503}.text-primary{color:#fed136!important}h1,h2,h3,h4,h5,h6{font-weight:700;font-family:Montserrat,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji'}section{padding:100px 0}section h2.section-heading{font-size:40px;margin-top:0;margin-bottom:15px}section h3.section-subheading{font-size:16px;font-weight:400;font-style:italic;margin-bottom:75px;text-transform:none;font-family:'Droid Serif',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji'}@media (min-width:768px){section{padding:150px 0}}.btn{font-family:Montserrat,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji';font-weight:700}.btn-xl{font-size:18px;padding:20px 40px}.btn-primary{background-color:#fed136;border-color:#fed136}.btn-primary:active,.btn-primary:focus,.btn-primary:hover{background-color:#fec810!important;border-color:#fec810!important;color:#fff}.btn-primary:active,.btn-primary:focus{box-shadow:0 0 0 .2rem rgba(254,209,55,.5)!important}::-moz-selection{background:#fed136;text-shadow:none}::selection{background:#fed136;text-shadow:none}img::-moz-selection{background:0 0}img::selection{background:0 0}img::-moz-selection{background:0 0}#mainNav{background-color:#212529}#mainNav .navbar-toggler{font-size:12px;right:0;padding:13px;text-transform:uppercase;color:#fff;border:0;background-color:#fed136;font-family:Montserrat,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji'}#mainNav .navbar-brand{color:#fed136;font-family:'Kaushan Script',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji'}#mainNav .navbar-brand.active,#mainNav .navbar-brand:active,#mainNav .navbar-brand:focus,#mainNav .navbar-brand:hover{color:#fec503}#mainNav .navbar-nav .nav-item .nav-link{font-size:90%;font-weight:400;padding:.75em 0;letter-spacing:1px;color:#fff;font-family:Montserrat,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji'}#mainNav .navbar-nav .nav-item .nav-link.active,#mainNav .navbar-nav .nav-item .nav-link:hover{color:#fed136}@media (min-width:992px){#mainNav{padding-top:25px;padding-bottom:25px;transition:padding-top .3s,padding-bottom .3s;border:none;background-color:transparent}#mainNav .navbar-brand{font-size:1.75em;transition:all .3s}#mainNav .navbar-nav .nav-item .nav-link{padding:1.1em 1em!important}#mainNav.navbar-shrink{padding-top:0;padding-bottom:0;background-color:#212529}#mainNav.navbar-shrink .navbar-brand{font-size:1.25em;padding:12px 0}}header.masthead{text-align:center;color:#fff;background: no-repeat center/80% url('5.png');background-repeat:no-repeat;background-attachment:scroll;background-position:center center;background-size:cover}header.masthead .intro-text{padding-top:150px;padding-bottom:100px}header.masthead .intro-text .intro-lead-in{font-size:22px;font-style:italic;line-height:22px;margin-bottom:25px;font-family:'Droid Serif',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji'}header.masthead .intro-text .intro-heading{font-size:50px;font-weight:700;line-height:50px;margin-bottom:25px;font-family:Montserrat,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji'}@media (min-width:768px){header.masthead .intro-text{padding-top:300px;padding-bottom:200px}header.masthead .intro-text .intro-lead-in{font-size:40px;font-style:italic;line-height:40px;margin-bottom:25px;font-family:'Droid Serif',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji'}header.masthead .intro-text .intro-heading{font-size:75px;font-weight:700;line-height:75px;margin-bottom:50px;font-family:Montserrat,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji'}}.service-heading{margin:15px 0;text-transform:none}#portfolio .portfolio-item{right:0;margin:0 0 15px}#portfolio .portfolio-item .portfolio-link{position:relative;display:block;max-width:400px;margin:0 auto;cursor:pointer}#portfolio .portfolio-item .portfolio-link .portfolio-hover{position:absolute;width:100%;height:100%;transition:all ease .5s;opacity:0;background:rgba(254,209,54,.9)}#portfolio .portfolio-item .portfolio-link .portfolio-hover:hover{opacity:1}#portfolio .portfolio-item .portfolio-link .portfolio-hover .portfolio-hover-content{font-size:20px;position:absolute;top:50%;width:100%;height:20px;margin-top:-12px;text-align:center;color:#fff}#portfolio .portfolio-item .portfolio-link .portfolio-hover .portfolio-hover-content i{margin-top:-12px}#portfolio .portfolio-item .portfolio-link .portfolio-hover .portfolio-hover-content h3,#portfolio .portfolio-item .portfolio-link .portfolio-hover .portfolio-hover-content h4{margin:0}#portfolio .portfolio-item .portfolio-caption{max-width:400px;margin:0 auto;padding:25px;text-align:center;background-color:#fff}#portfolio .portfolio-item .portfolio-caption h4{margin:0;text-transform:none}#portfolio .portfolio-item .portfolio-caption p{font-size:16px;font-style:italic;margin:0;font-family:'Droid Serif',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji'}#portfolio *{z-index:2}@media (min-width:767px){#portfolio .portfolio-item{margin:0 0 30px}}.portfolio-modal{padding-right:0!important}.portfolio-modal .modal-dialog{margin:1rem;max-width:100vw}.portfolio-modal .modal-content{padding:100px 0;text-align:center}.portfolio-modal .modal-content h2{font-size:3em;margin-bottom:15px}.portfolio-modal .modal-content p{margin-bottom:30px}.portfolio-modal .modal-content p.item-intro{font-size:16px;font-style:italic;margin:20px 0 30px;font-family:'Droid Serif',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji'}.portfolio-modal .modal-content ul.list-inline{margin-top:0;margin-bottom:30px}.portfolio-modal .modal-content img{margin-bottom:30px}.portfolio-modal .modal-content button{cursor:pointer}.portfolio-modal .close-modal{position:absolute;top:25px;right:25px;width:75px;height:75px;cursor:pointer;background-color:transparent}.portfolio-modal .close-modal:hover{opacity:.3}.portfolio-modal .close-modal .lr{z-index:1051;width:1px;height:75px;margin-left:35px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background-color:#212529}.portfolio-modal .close-modal .lr .rl{z-index:1052;width:1px;height:75px;-webkit-transform:rotate(90deg);transform:rotate(90deg);background-color:#212529}.timeline{position:relative;padding:0;list-style:none}.timeline:before{position:absolute;top:0;bottom:0;left:40px;width:2px;margin-left:-1.5px;content:'';background-color:#e9ecef}.timeline>li{position:relative;min-height:50px;margin-bottom:50px}.timeline>li:after,.timeline>li:before{display:table;content:' '}.timeline>li:after{clear:both}.timeline>li .timeline-panel{position:relative;float:right;width:100%;padding:0 20px 0 100px;text-align:left}.timeline>li .timeline-panel:before{right:auto;left:-15px;border-right-width:15px;border-left-width:0}.timeline>li .timeline-panel:after{right:auto;left:-14px;border-right-width:14px;border-left-width:0}.timeline>li .timeline-image{position:absolute;z-index:100;left:0;width:80px;height:80px;margin-left:0;text-align:center;color:#fff;border:7px solid #e9ecef;border-radius:100%;background-color:#fed136}.timeline>li .timeline-image h4{font-size:10px;line-height:14px;margin-top:12px}.timeline>li.timeline-inverted>.timeline-panel{float:right;padding:0 20px 0 100px;text-align:left}.timeline>li.timeline-inverted>.timeline-panel:before{right:auto;left:-15px;border-right-width:15px;border-left-width:0}.timeline>li.timeline-inverted>.timeline-panel:after{right:auto;left:-14px;border-right-width:14px;border-left-width:0}.timeline>li:last-child{margin-bottom:0}.timeline .timeline-heading h4{margin-top:0;color:inherit}.timeline .timeline-heading h4.subheading{text-transform:none}.timeline .timeline-body>p,.timeline .timeline-body>ul{margin-bottom:0}@media (min-width:768px){.timeline:before{left:50%}.timeline>li{min-height:100px;margin-bottom:100px}.timeline>li .timeline-panel{float:left;width:41%;padding:0 20px 20px 30px;text-align:right}.timeline>li .timeline-image{left:50%;width:100px;height:100px;margin-left:-50px}.timeline>li .timeline-image h4{font-size:13px;line-height:18px;margin-top:16px}.timeline>li.timeline-inverted>.timeline-panel{float:right;padding:0 30px 20px 20px;text-align:left}}@media (min-width:992px){.timeline>li{min-height:150px}.timeline>li .timeline-panel{padding:0 20px 20px}.timeline>li .timeline-image{width:150px;height:150px;margin-left:-75px}.timeline>li .timeline-image h4{font-size:18px;line-height:26px;margin-top:30px}.timeline>li.timeline-inverted>.timeline-panel{padding:0 20px 20px}}@media (min-width:1200px){.timeline>li{min-height:170px}.timeline>li .timeline-panel{padding:0 20px 20px 100px}.timeline>li .timeline-image{width:170px;height:170px;margin-left:-85px}.timeline>li .timeline-image h4{margin-top:40px}.timeline>li.timeline-inverted>.timeline-panel{padding:0 100px 20px 20px}}.team-member{margin-bottom:50px;text-align:center}.team-member img{width:225px;height:225px;border:7px solid #fff}.team-member h4{margin-top:25px;margin-bottom:0;text-transform:none}.team-member p{margin-top:0}section#contact{background-color:#666666;background-repeat:no-repeat;background-position:center}section#contact .section-heading{color:#fff}section#contact .form-group{margin-bottom:25px}section#contact .form-group input,section#contact .form-group textarea{padding:20px}section#contact .form-group input.form-control{height:auto}section#contact .form-group textarea.form-control{height:248px}section#contact .form-control:focus{border-color:#fed136;box-shadow:none}section#contact ::-webkit-input-placeholder{font-weight:700;color:#ced4da;font-family:Montserrat,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji'}section#contact :-moz-placeholder{font-weight:700;color:#ced4da;font-family:Montserrat,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji'}section#contact ::-moz-placeholder{font-weight:700;color:#ced4da;font-family:Montserrat,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji'}section#contact :-ms-input-placeholder{font-weight:700;color:#ced4da;font-family:Montserrat,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji'}footer{padding:25px 0;text-align:center}footer span.copyright{font-size:90%;line-height:40px;text-transform:none;font-family:Montserrat,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji'}footer ul.quicklinks{font-size:90%;line-height:40px;margin-bottom:0;text-transform:none;font-family:Montserrat,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji'}ul.social-buttons{margin-bottom:0}ul.social-buttons li a{font-size:20px;line-height:50px;display:block;width:50px;height:50px;transition:all .3s;color:#fff;border-radius:100%;outline:0;background-color:#212529}ul.social-buttons li a:active,ul.social-buttons li a:focus,ul.social-buttons li a:hover{background-color:#fed136}"

/***/ }),

/***/ "./src/app/start/index.html":
/*!**********************************!*\
  !*** ./src/app/start/index.html ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n\r\n  <head>\r\n\r\n    <meta charset=\"utf-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\r\n    <meta name=\"description\" content=\"\">\r\n    <meta name=\"author\" content=\"\">\r\n\r\n    <title>Agency - Start Bootstrap Theme</title>\r\n\r\n    <!-- Custom fonts for this template -->\r\n    <link href=\"https://fonts.googleapis.com/css?family=Montserrat:400,700\" rel=\"stylesheet\" type=\"text/css\">\r\n    <link href='https://fonts.googleapis.com/css?family=Kaushan+Script' rel='stylesheet' type='text/css'>\r\n    <link href='https://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic,700italic' rel='stylesheet' type='text/css'>\r\n    <link href='https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700' rel='stylesheet' type='text/css'>\r\n    <link href=\"https://fonts.googleapis.com/css?family=Nanum+Pen+Script\" rel=\"stylesheet\">\r\n\r\n  </head>\r\n\r\n  <body id=\"page-top\">\r\n\r\n\r\n\r\n    <!-- Header -->\r\n    <header *ngIf=\"!is_auth\" class=\"masthead\">\r\n      <div class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"intro-text col-lg-6\">\r\n            <div class=\"intro-heading\">Hello, PooKle!</div>\r\n            <div class=\"introduce-myself text-uppercase\">어서오세요!<br> 부경대학교 정보포털서비스 POOKLE입니다!</div>\r\n            <a class=\"btn btn-primary btn-xl text-uppercase js-scroll-trigger\" routerLink=\"/timeline\">Pookle 시작하기</a>\r\n          </div>\r\n          <div class=\"intro-text col-lg-6\">\r\n              <start-sign-up></start-sign-up>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </header>\r\n    <header *ngIf=\"is_auth\" class=\"masthead\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n              <div class=\"intro-text col-lg-12\">\r\n                <div class=\"intro-heading\">Hello, PooKle!</div>\r\n                <div class=\"introduce-myself text-uppercase\">어서오세요!<br> 부경대학교 정보포털서비스 POOKLE입니다!</div>\r\n                <a class=\"btn btn-primary btn-xl text-uppercase js-scroll-trigger\" routerLink=\"/timeline\">Pookle 시작하기</a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n    </header>\r\n\r\n    <!-- Services -->\r\n    <section id=\"services\">\r\n      <div class=\"container\">\r\n        <div class=\"row services-header\">\r\n          <div class=\"col-lg-12 text-center\">\r\n            <h2 class=\"section-heading text-uppercase\">Pookle</h2>\r\n            <h3 class=\"text-muted font-small\">푸클은 부경대학교 내의 정보를 손쉽고 빠르게 가져다 줍니다.<br> 학교와 관련된 모든 정보를 수집하여 모아둠으로써 사용자는 원하는 정보에 편하게 접근할 수 있습니다.</h3>\r\n          </div>\r\n        </div>\r\n        <div class=\"row text-center\">\r\n          <div class=\"col-md-6\">\r\n            <span class=\"fas-span\">\r\n              <i class=\"fas fa-book\"></i>\r\n            </span>\r\n            <h4 class=\"service-heading\">TIMELINE</h4>\r\n            <p class=\"text-muted\">부경대학교와 관련한 모든 웹사이트의 정보를 수집하여 사용자의 관심에 맞게 적절한 정보를 제공합니다.</p>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <span class=\"fas-span\">\r\n              <i class=\"fas fa-edit\"></i>\r\n            </span>\r\n            <h4 class=\"service-heading\">BOARD</h4>\r\n            <p class=\"text-muted\">사용자들이 자유롭게 본인의 의견을 이야기할 수 있는 커뮤니티 공간입니다.</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section>\r\n\r\n    <!-- Team -->\r\n    <section class=\"bg-light\" id=\"team\">\r\n      <div class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-12 text-center\">\r\n            <h2 class=\"section-heading text-uppercase\">개발자 소개</h2>\r\n            <h3 class=\"text-muted font-small\">저희가 만들었어요!</h3>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-6\">\r\n            <div class=\"team-member\">\r\n              <img class=\"mx-auto rounded-circle\" src=\"assets/img/imiml.png\" alt=\"\">\r\n              <h4>신희재</h4>\r\n              <p class=\"text-muted\">기획자<br>세종대학교 컴퓨터공학과</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-6\">\r\n            <div class=\"team-member\">\r\n              <img class=\"mx-auto rounded-circle\" src=\"assets/img/JYJ.jpg\" alt=\"\">\r\n              <h4>조영재</h4>\r\n              <p class=\"text-muted\">개발자<br>부경대학교 컴퓨터공학과</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-8 mx-auto text-center\">\r\n            <p class=\"large text-muted\">\r\n              두명의 대학생이 모여 진행한 웹 프로젝트입니다.<br>\r\n              많이 모자란 작품이지만 자주 사용해주시면 좋겠어요!<br>\r\n              아래 버튼을 누르시면 저희 깃허브에서 공개된 소스를 확인하실 수 있습니다.\r\n            </p>\r\n            <a class=\"btn btn-secondary\" target=\"_blank\" href=\"http://www.github.com/wo7864/pookle\">Github 소스 보러 가기</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section>\r\n\r\n    <!-- Contact -->\r\n    <section id=\"contact\">\r\n      <div class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-12 text-center\">\r\n            <h2 class=\"section-heading text-uppercase\">Contact Us</h2>\r\n            <h3 class=\"section-subheading\">저희에게 궁금한 점이 있으시다면...</h3>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-12 text-center white-bold\">\r\n              Email<br>\r\n              <a href=\"mailto:shin10256@gmail.com\">shin10256@gmail.com</a><br>\r\n              <a href=\"mailto:wo78644@gmail.com\">wo78644@gmail.com</a><br><br>\r\n              Blog<br>\r\n              <a target=\"_blank\" href=\"https://shino1025.blog.me\">https://shino1025.blog.me</a><br>\r\n              <a target=\"_blank\" href=\"http://wo7864.tistory.com/\">http://wo7864.tistory.com/</a><br>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section>\r\n\r\n    <!-- Footer -->\r\n    \r\n\r\n  </body>\r\n\r\n</html>\r\n"

/***/ }),

/***/ "./src/app/start/start.component.css":
/*!*******************************************!*\
  !*** ./src/app/start/start.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/start/start.component.ts":
/*!******************************************!*\
  !*** ./src/app/start/start.component.ts ***!
  \******************************************/
/*! exports provided: StartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartComponent", function() { return StartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _uni_Service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../uni.Service */ "./src/app/uni.Service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StartComponent = /** @class */ (function () {
    function StartComponent(fb, uniService, router) {
        this.fb = fb;
        this.uniService = uniService;
        this.router = router;
        this.signUpForm = this.fb.group({
            id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[^ \t\r\n\v\f]*')])],
            pw: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[^ \t\r\n\v\f]*')])],
            pwc: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[^ \t\r\n\v\f]*')])],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[^ \t\r\n\v\f]*')])],
        });
    }
    StartComponent.prototype.ngOnInit = function () {
        this.signUpForm.reset();
        if (localStorage.getItem('token')) {
            this.is_auth = true;
        }
        else {
            this.is_auth = false;
        }
    };
    StartComponent.prototype.registerUser = function () {
        var _this = this;
        this.userData = {
            username: this.signUpForm.value.id,
            password: this.signUpForm.value.pw,
            email: 'asdf@naver.com'
        };
        this.uniService.registerNewUser(this.userData).subscribe(function (response) {
            alert('가입되었습니다.');
            _this.router.navigate(['user/sign-in']);
        }, function (error) { return console.log('error', error); });
    };
    StartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'start',
            template: __webpack_require__(/*! .//index.html */ "./src/app/start/index.html"),
            styles: [__webpack_require__(/*! ./start.component.css */ "./src/app/start/start.component.css"), __webpack_require__(/*! ./css/agency.css */ "./src/app/start/css/agency.css"), __webpack_require__(/*! ./css/agency.min.css */ "./src/app/start/css/agency.min.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _uni_Service__WEBPACK_IMPORTED_MODULE_2__["UniService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], StartComponent);
    return StartComponent;
}());



/***/ }),

/***/ "./src/app/stats/stats.component.css":
/*!*******************************************!*\
  !*** ./src/app/stats/stats.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/stats/stats.component.html":
/*!********************************************!*\
  !*** ./src/app/stats/stats.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  stats works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/stats/stats.component.ts":
/*!******************************************!*\
  !*** ./src/app/stats/stats.component.ts ***!
  \******************************************/
/*! exports provided: StatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatsComponent", function() { return StatsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StatsComponent = /** @class */ (function () {
    function StatsComponent() {
    }
    StatsComponent.prototype.ngOnInit = function () {
    };
    StatsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stats',
            template: __webpack_require__(/*! ./stats.component.html */ "./src/app/stats/stats.component.html"),
            styles: [__webpack_require__(/*! ./stats.component.css */ "./src/app/stats/stats.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StatsComponent);
    return StatsComponent;
}());



/***/ }),

/***/ "./src/app/timeline/timeline.component.css":
/*!*************************************************!*\
  !*** ./src/app/timeline/timeline.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.loading{\r\n    \r\n    font-size:45px;\r\n    font-weight:bold;\r\n    font-family: 'Kaushan Script', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';\r\n    \r\n    z-index: 100;\r\n    background-color:#313539;\r\n    width:100%;\r\n    height:1000px;\r\n    padding-top:100px;\r\n    text-align:center;\r\n    color:#fed136;\r\n    \r\n}\r\n\r\n.navbar{\r\n    color:#fed136;\r\n}\r\n\r\n.nav{\r\n    position: fixed;\r\n    left:0px;\r\n    top:80px;\r\n    margin-left:-20px;\r\n    padding-top:100px;\r\n    padding-left:10px;\r\n    display: block;\r\n    width:40%;\r\n    background-color:#313539;\r\n    border-radius:15px;\r\n}\r\n\r\n.nav-link:hover{\r\n    background-color:#000000;\r\n}\r\n\r\n.nav-link{\r\n    display: block;\r\n    width:100%;\r\n    border:0px;\r\n    font-family: 'Do Hyeon', sans-serif;\r\n    background-color:#313539;\r\n    color:#fed136;\r\n    font-size:23px;\r\n\r\n}\r\n\r\n.nav-item, .navbar-nav{\r\n    width:100%;\r\n}\r\n\r\n.right-banner{\r\n    -webkit-writing-mode:tb-rl;\r\n        -ms-writing-mode:tb-rl;\r\n            writing-mode:tb-rl;\r\n}\r\n\r\n.pookle-font{\r\n\r\n    font-family: 'Righteous', cursive;\r\n    font-size:130px;\r\n    color:#888888;\r\n}\r\n\r\n.admin_content{\r\n    width:100%;\r\n    display: block;\r\n}\r\n\r\n.container {\r\n      width: 100%;\r\n    }\r\n\r\n.post{\r\n        border-bottom:2px #BBBBBB solid;\r\n        padding-bottom : 20px;\r\n        margin-bottom:10px;\r\n        color:black;\r\n    }\r\n\r\n#timeline-container{\r\n        margin-top:160px;\r\n        padding-top:5px;\r\n        border-radius:10px;\r\n        background-color:#313539;\r\n        height:100%;\r\n\r\n    }\r\n\r\n.main{\r\n        background-color:white;\r\n        border-radius:10px;\r\n        padding-top:10px;\r\n    }\r\n\r\n.admin_post{\r\n        border:1px solid #BBBBBB;\r\n        border-radius: 10px;\r\n        padding:10px;\r\n        margin:10px;\r\n        font-family: 'Do Hyeon', sans-serif;\r\n\r\n    }\r\n\r\n.admin_title{\r\n        font-size:25px;\r\n        font-weight: bold;\r\n        margin-bottom:0px;\r\n    }\r\n\r\n.admin_date{\r\n        font-size:25px;\r\n        font-weight: bold;\r\n    }\r\n\r\n.admin_content{\r\n        padding:0 10px; \r\n        font-size:20px;\r\n\r\n    }\r\n\r\n.more{\r\n        color:#999999;\r\n        background-color: transparent;\r\n        border:0px;\r\n    }\r\n\r\n.more:hover{\r\n        text-decoration: underline;\r\n    }\r\n\r\n@media (max-width: 576px) {\r\n    .container {\r\n      width: 100%;\r\n      \r\n    }\r\n    #timeline-container{\r\n        margin-top:90px;\r\n        background-color:#313539;\r\n        border-radius:0px;\r\n\r\n    }\r\n    .main{\r\n        padding-top:0px;\r\n        border-radius:0px;\r\n    }\r\n\r\n    \r\n}\r\n\r\n.link-btn{\r\n    display:block;\r\n    height:100%;\r\n    width:100%;\r\n    position: relative;;\r\n    top:0;\r\n    left:0;\r\n    text-decoration: none;\r\n}\r\n\r\n.link-btn:hover{\r\n    background-color:#DDDDDD;\r\n    transition: background-color 500ms linear;\r\n}\r\n\r\n.block{\r\n    display: block;\r\n}\r\n\r\n.align-right{\r\n    display: inline-block;\r\n    text-align:right;\r\n    position: relative;\r\n    left:70%;\r\n}\r\n\r\n.title{\r\n    display: block;\r\n    width: 100%; \r\n    color:black;\r\n    font-size:20px;\r\n    font-weight: bold;\r\n    overflow:hidden;\r\n    white-space:nowrap;\r\n    text-overflow:ellipsis;\r\n    -o-text-overflow: ellipsis;\r\n}\r\n\r\n.time{\r\n    font-size:12px;\r\n    color:gray;\r\n}\r\n\r\n.link{\r\n    color:green;\r\n}\r\n\r\n.like{\r\n    color:black;\r\n}\r\n\r\n.like-btn-div{\r\n    margin-right:50px;\r\n\r\n}\r\n\r\n.url-copy-btn, .like-num{\r\n    color:black;\r\n    font-size:20px;\r\n    margin-right:10px;\r\n}\r\n\r\n.like-btn{\r\n    color:#fed136;\r\n    font-size:25px;\r\n    font-weight: bold;\r\n    margin-right:10px;\r\n}\r\n\r\n.url-copy-btn:hover, .like-btn:hover{\r\n    color:rgb(35, 132, 170);\r\n}\r\n\r\n.write-div{\r\n    height:80px;\r\n    text-align:right;\r\n}\r\n\r\n.write-btn{\r\n    height:60px;\r\n    margin:0 auto;\r\n    padding:15px;\r\n    border:0px;\r\n    background-color:#212529;\r\n    color:#fed136;\r\n    font-family: 'Do Hyeon', sans-serif;\r\n    font-size:20px;\r\n    border-radius:5px;\r\n}\r\n\r\n.content{\r\n    display: inline-block; \r\n    width: 100%; \r\n    white-space: nowrap;\r\n    overflow: hidden; \r\n    text-overflow: ellipsis; \r\n    white-space: normal; \r\n    line-height: 1.2;\r\n    min-height:1.2em; \r\n    max-height: 3.6em; \r\n    text-align: left; \r\n    word-wrap: break-word; \r\n    display: -webkit-box; \r\n    -webkit-line-clamp: 3;\r\n    color:black;\r\n}\r\n\r\n.heart{\r\n    color:palevioletred;\r\n    font-weight: bold;\r\n    font-size:23px;\r\n    font-family: 'Do Hyeon', sans-serif;\r\n}\r\n\r\n.tag{\r\n    padding:5px;\r\n    margin-right:5px;\r\n    margin-bottom: 6px;\r\n    border:0px;\r\n    border-radius: 5px;\r\n    background-color:#DDDDDD;\r\n    font-family: 'Jua', sans-serif;\r\n    font-size:12px;\r\n}\r\n\r\n.popover_div{\r\n    display: inline;\r\n}\r\n\r\n.remove-btn{\r\n\r\n    height:30px;\r\n    margin:0 auto;\r\n    border:0px;\r\n    background-color:#212529;\r\n    color:#fed136;\r\n    font-family: 'Do Hyeon', sans-serif;\r\n    font-size:20px;\r\n    border-radius:5px;\r\n}\r\n\r\n.write-area{\r\n    width:100%;\r\n    height:200px;\r\n}\r\n\r\n.title-area{\r\n    width:90%;\r\n}\r\n\r\n.title-div{\r\n    padding-bottom:5px;\r\n}\r\n\r\n.search_result_p{\r\n    border-bottom:2px #BBBBBB solid;\r\n    padding-bottom:10px;\r\n    font-size:20px;\r\n    font-family: 'Do Hyeon', sans-serif;\r\n\r\n}\r\n\r\n.boder-bottom{\r\n    border-bottom:1px solid #DDDDDD;\r\n}\r\n\r\n.center-button{\r\n    padding-top:8px;\r\n    padding-bottom:8px;\r\n}"

/***/ }),

/***/ "./src/app/timeline/timeline.component.html":
/*!**************************************************!*\
  !*** ./src/app/timeline/timeline.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"loading\" *ngIf=\"!posts\">\r\n    <br><br>\r\n    Loading....<br>\r\n    잠시만 기다려주세요.\r\n</div>\r\n<div class=\"container-fluid\" id=\"timeline-container\" *ngIf=\"posts\">\r\n\r\n\r\n    <div class=\"row\" *ngIf=\"!search_word\">\r\n\r\n        <div class=\"col-xl-2\"></div>\r\n        <div class=\"col-xl-8\">\r\n        <nav class=\"navbar navbar-expand-lg navbar-light\" >\r\n                <button  *ngIf=\"isCategory\" class=\"nav-link\"type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                  <span>카테고리</span>\r\n                </button>\r\n              \r\n                <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n                  <ul class=\"navbar-nav mr-auto\">\r\n                    <li *ngIf=\"isAdmin\" class=\"nav-item\">\r\n                        <button style=\"color:#fed136;\" (click)=\"write(content)\"class=\"nav-link \"><i class=\"fas fa-pencil-alt\"></i> 글 작성 하기</button> \r\n                    </li>\r\n                    <li class=\"nav-item active\">\r\n                        <button style=\"color:#fed136;\" class=\"nav-link active\" (click)=\"getList(0)\">전체 보기</button>\r\n                    </li>\r\n                    <li class=\"nav-item \">\r\n                        <button style=\"color:#fed136;\"class=\"nav-link \" (click)=\"getList(1)\">진로</button>\r\n                    </li>\r\n                    <li class=\"nav-item \">\r\n                        <button style=\"color:#fed136;\"class=\"nav-link \" (click)=\"getList(2)\">스터디&모임</button>\r\n                    </li>\r\n                    <li class=\"nav-item \">\r\n                        <button style=\"color:#fed136;\"class=\"nav-link \" (click)=\"getList(3)\">알바&구인</button>\r\n                    </li>\r\n                    <li class=\"nav-item \">\r\n                        <button style=\"color:#fed136;\"class=\"nav-link \" (click)=\"getList(4)\">행사&대외활동</button>\r\n                    </li>\r\n                    <li *ngIf=\"isAdmin\" class=\"nav-item\">\r\n                        <button style=\"color:#fed136;\" (click)=\"write(advertise)\"class=\"nav-link \"><i class=\"fas fa-pencil-alt\"></i> 광고 작성 하기</button> \r\n                    </li>\r\n                  </ul>\r\n                </div>\r\n              </nav>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xl-2\"></div>\r\n    <div class=\"row\">\r\n    <div class=\"col-xl-2\"></div>\r\n    <div class=\"main container col-xl-8\">\r\n        <div class=\"admin_post\" *ngIf=\"!search_word\">\r\n            <p class=\"admin_title\">{{admin_post.title}}</p>\r\n            <p class=\"time\">{{admin_post.date}}</p>\r\n            <div class=\"admin_content \">\r\n                {{admin_post.post}}\r\n                <button *ngIf=\"!isFull && !short_post\" class=\"more\" (click)='fullPost()'>...더 보기</button>\r\n                <button *ngIf=\"isFull && !short_post\" class=\"more\" (click)='fullPost()'>접기</button>\r\n            </div>\r\n        </div>\r\n        <p class=\"search_result_p\" *ngIf=\"search_word\">\r\n                <strong>'{{search_word}}'</strong>로 검색한 결과입니다. (총 {{search_cnt}}개)\r\n        </p>\r\n\r\n        <div>\r\n\r\n        </div>\r\n\r\n    <div *ngFor=\"let post of small_posts; index as i\" class=\"post\">\r\n        <a *ngIf=\"post.url\"  target=\"_blank\" href=\"{{post.url}}\" (click)=\"addView(i)\" class=\"link-btn\" >\r\n            <div class=\"block\"  *ngIf=\"post.title\">\r\n                <a  target=\"_blank\" href=\"{{post.url}}\" class=\"title\">{{post.title}}</a>\r\n            </div>\r\n\r\n            <span class=\"time\" *ngIf=\"!post.adv\">{{post.after_date}}</span>\r\n            <p class=\"content\" *ngIf=\"post.post || post.contents \">{{post.post}}</p>\r\n            <img *ngIf=\"post.adv\" src=\"{{post.img}}\"/>\r\n        </a>\r\n        <a *ngIf=\"!post.url\"class=\"link-btn\"  >\r\n                <div class=\"block\" *ngIf=\"post.title\">\r\n                    <a href=\"{{post.url}}\" (click)=\"addView(i)\" target=\"_blank\" class=\"title\">{{post.title}}</a>\r\n                </div>\r\n    \r\n                <span class=\"time\" *ngIf=\"!post.adv\">{{post.date}}</span>\r\n                <p class=\"content\" *ngIf=\"post.post || post.contents \">{{post.post}}</p>\r\n                <img *ngIf=\"post.adv\" src=\"{{post.img}}\"/>\r\n            </a>\r\n        <a *ngIf=\"!post.admin&&!post.adv\" id=\"{{i}}\" (click)=\"favorite(i)\" class=\"like-btn-div\">\r\n            <span *ngIf=\"!isFavorite[i]\" class=\"heart\" style=\"margin-right:20px;\">♡</span>\r\n            <span *ngIf=\"isFavorite[i]\" class=\"heart\" style=\"margin-right:20px;\">♥</span>\r\n            <span class=\"like-num\">{{post.fav_cnt}}</span></a>\r\n        <a *ngIf=\"!post.admin&&!post.adv\" (click)=\"copyMessage(post.url)\" placement=\"top\"\r\n                ngbPopover=\"복사되었습니다.\" popoverTitle=\"알림\" class=\"url-copy-btn\" ><i class=\"far fa-copy url-copy-btn\"></i></a>\r\n        <div *ngFor=\"let tag of post.tag; index as k\" class=\"popover_div\">\r\n            <div *ngIf=\"!post.admin&&!post.adv\" class=\"btn-group\" ngbDropdown role=\"group\" aria-label=\"Button group with nested dropdown\">\r\n                <button class=\"tag\" ngbDropdownToggle>{{tag}}</button>\r\n                <div class=\"dropdown-menu\" ngbDropdownMenu>\r\n                    <button *ngIf=\"is_auth\" (click)=\"addFavTag(i, k)\" class=\"dropdown-item boder-bottom\">자주 볼래요!</button>\r\n                    <button *ngIf=\"is_auth\" (click)=\"addBlackTag(i, k)\" class=\"dropdown-item boder-bottom center-button\">안 볼래요...</button>\r\n                    <button (click)=\"search_tag(tag)\" class=\"dropdown-item\">태그로 검색</button>\r\n                </div>\r\n              </div>\r\n        </div>\r\n        <button class=\"remove-btn float-right\" *ngIf=\"isAdmin\" (click)=\"removePost(i)\">제거</button>\r\n    </div>\r\n</div>\r\n<div class=\"col-xl-2 col-0\">\r\n        <div class=\"navbar navbar-expand-xl\">\r\n                <div class=\"collapse navbar-collapse right-banner\">\r\n                        <span class=\"pookle-font\">PooKle</span>\r\n                    </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n</div>\r\n\r\n\r\n\r\n<ng-template #content let-modal>\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\" id=\"modal-basic-title\">글쓰기</h4>\r\n          <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\r\n              <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <form [formGroup]=\"writeForm\" (ngSubmit)=\"send()\">\r\n        <div class=\"modal-body\">\r\n            <div class=\"title-div\">제목 <input id=\"title\" formControlName=\"title\" class=\"title-area\"></div>\r\n            <textarea id=\"contents\" formControlName=\"contents\" class=\"write-area\" placeholder=\"내용을 입력해주세요\"></textarea>\r\n          \r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"submit\" [disabled]=\"!writeForm.valid\" class=\"btn btn-outline-dark\">올리기</button>\r\n        </div>\r\n      </form>\r\n      </ng-template>\r\n\r\n      \r\n      <ng-template #advertise let-modal>\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\" id=\"modal-basic-title\">글쓰기</h4>\r\n          <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\r\n              <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <form [formGroup]=\"advertiseForm\" (ngSubmit)=\"adv_send(fileInput.files)\"enctype = \"multipart/form-data\">\r\n        <div class=\"modal-body\">\r\n            <div class=\"title-div\">제목 <input id=\"title\" formControlName=\"title\" class=\"title-area\"></div>\r\n            <div class=\"title-div\">링크 <input id=\"title\" formControlName=\"url\" class=\"title-area\"></div>\r\n            <textarea id=\"contents\" formControlName=\"contents\" class=\"write-area\" placeholder=\"내용을 입력해주세요\"></textarea>\r\n            <div class=\"title-div\">이미지 &nbsp;&nbsp;&nbsp;&nbsp;<input name=\"file\" type=\"file\" formControlName=\"img\" name=\"FileName\" #fileInput></div>\r\n            <div class=\"title_div\">만료기간 <input type=\"date\"  formControlName=\"date\"></div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"submit\" [disabled]=\"!advertiseForm.valid\" class=\"btn btn-outline-dark\">올리기</button>\r\n        </div>\r\n      </form>\r\n      </ng-template>\r\n"

/***/ }),

/***/ "./src/app/timeline/timeline.component.ts":
/*!************************************************!*\
  !*** ./src/app/timeline/timeline.component.ts ***!
  \************************************************/
/*! exports provided: TimelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineComponent", function() { return TimelineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _uni_Service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../uni.Service */ "./src/app/uni.Service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TimelineComponent = /** @class */ (function () {
    function TimelineComponent(modalService, fb, uniService, route, router) {
        this.modalService = modalService;
        this.fb = fb;
        this.uniService = uniService;
        this.route = route;
        this.router = router;
        this.isFull = false;
        this.maxPost = 20;
        this.search_cnt = 0;
        this.isCollapsed = false;
        this.isCategory = true;
        this.writeForm = this.fb.group({
            title: [''],
            contents: ['']
        });
        this.advertiseForm = this.fb.group({
            title: [''],
            contents: [''],
            url: [''],
            img: [''],
            date: ['']
        });
        if (window.innerWidth >= 992) {
            this.isCategory = false;
        }
        else {
            this.isCategory = true;
        }
    }
    TimelineComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('token')) {
            this.is_auth = true;
        }
        else {
            this.is_auth = false;
        }
        this.getAdminPost();
        this.getList();
    };
    TimelineComponent.prototype.onScrollEvent = function ($event) {
        var pageHeight = document.documentElement.offsetHeight;
        var windowHeight = window.innerHeight;
        if (window.pageYOffset + windowHeight >= pageHeight - 300) {
            this.maxPost += 5;
            this.small_posts = this.posts.slice(0, this.maxPost + 5);
        }
    };
    TimelineComponent.prototype.onResize = function (event) {
        if (window.innerWidth >= 992) {
            this.isCategory = false;
        }
        else {
            this.isCategory = true;
        }
    };
    TimelineComponent.prototype.copyMessage = function (val) {
        var selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = val;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
    };
    TimelineComponent.prototype.timeConverter = function (UNIX_timestamp) {
        UNIX_timestamp = UNIX_timestamp.replace(/[^0-9]/g, "");
        var year = UNIX_timestamp.substring(0, 4);
        var month = UNIX_timestamp.substring(4, 6) - 1;
        var day = UNIX_timestamp.substring(6, 8);
        var hour = UNIX_timestamp.substring(8, 10);
        var min = UNIX_timestamp.substring(10, 12);
        var sec = UNIX_timestamp.substring(12, 14);
        var date = new Date(year, month, day, hour, min, sec);
        var now = Math.round(new Date().getTime());
        var elapsed_time = (now - date.getTime()) / 1000;
        if (elapsed_time >= 2592000) {
            elapsed_time /= 2592000;
            return Math.floor(elapsed_time) + "개월 전";
        }
        else if (elapsed_time >= 86400) {
            elapsed_time /= 86400;
            return Math.floor(elapsed_time) + "일 전";
        }
        else if (elapsed_time >= 3600) {
            elapsed_time /= 3600;
            return Math.floor(elapsed_time) + "시간 전";
        }
        else if (elapsed_time >= 300) {
            elapsed_time /= 60;
            return Math.floor(elapsed_time) + "분 전";
        }
        else {
            return "방금 전";
        }
    };
    TimelineComponent.prototype.favorite = function (ind) {
        var _this = this;
        if (localStorage.getItem('token')) {
            var postData = {
                id: this.posts[ind]._id.$oid,
                title: this.posts[ind].title,
                url: this.posts[ind].url,
                date: this.posts[ind].date
            };
            if (this.isFavorite[ind]) {
                this.uniService.unFavTimeline(postData).subscribe(function (response) {
                    _this.posts[ind].fav_cnt -= 1;
                }, function (error) { return console.log('error', error); });
            }
            else {
                this.uniService.favTimeline(postData).subscribe(function (response) {
                    _this.posts[ind].fav_cnt += 1;
                }, function (error) { return console.log('error', error); });
            }
            this.isFavorite[ind] = !this.isFavorite[ind];
        }
        else {
            alert("관심 기능은 로그인 후에 사용가능합니다.");
        }
    };
    TimelineComponent.prototype.write = function (content) {
        this.writeForm.reset();
        this.advertiseForm.reset();
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
        }, function (reason) {
        });
    };
    TimelineComponent.prototype.send = function () {
        var _this = this;
        this.uniService.writePost(this.writeForm.value).subscribe(function (response) {
            _this.getList();
        }, function (error) { return console.log('error', error); });
        this.modalService.dismissAll();
    };
    TimelineComponent.prototype.adv_send = function (files) {
        var _this = this;
        this.uniService.writeAdvertise(this.advertiseForm.value).subscribe(function (response) {
            _this.getList();
        }, function (error) { return console.log('error', error); });
        this.modalService.dismissAll();
    };
    TimelineComponent.prototype.close = function () {
        this.modalService.dismissAll();
    };
    TimelineComponent.prototype.removePost = function (ind) {
        var _this = this;
        if (this.isAdmin) {
            var postData = {
                id: this.posts[ind]._id.$oid,
                title: this.posts[ind].title
            };
            this.uniService.removePost(postData).subscribe(function (response) {
                _this.getList();
            }, function (error) { return console.log('error', error); });
        }
    };
    TimelineComponent.prototype.getAdvertise = function () {
        var _this = this;
        this.uniService.getAdvertise().subscribe(function (response) {
            if (response) {
                _this.advertise_post = JSON.parse(response);
                console.log(_this.advertise_post);
                _this.getList();
            }
        }, function (error) { return console.log('error', error); });
    };
    TimelineComponent.prototype.getAdminPost = function () {
        var _this = this;
        this.uniService.getAdminPost().subscribe(function (response) {
            if (response) {
                _this.admin_post = JSON.parse(response);
                _this.admin_post.isFull = true;
                _this.admin_post.date = _this.timeConverter(_this.admin_post.date);
                if (_this.admin_post.post.length < 50) {
                    _this.short_post = true;
                }
                else {
                    _this.short_post = false;
                }
                if (_this.admin_post.post.length > 50 && !_this.isFull) {
                    if (_this.isCategory) {
                        _this.admin_post.post = _this.admin_post.post.slice(0, 35);
                    }
                    else {
                        _this.admin_post.post = _this.admin_post.post.slice(0, 50);
                    }
                    _this.admin_post.isFull = false;
                }
            }
        }, function (error) { return console.log('이건 에러야 !!error', error); });
    };
    TimelineComponent.prototype.fullPost = function () {
        this.isFull = !this.isFull;
        this.getAdminPost();
    };
    TimelineComponent.prototype.getList = function (option) {
        var _this = this;
        if (option === void 0) { option = 0; }
        window.scrollTo(0, 0);
        this.posts = '';
        var real_href = window.location.href.split('/');
        var last_href = real_href[real_href.length - 1];
        if (last_href == 'timeline' || option >= 1) {
            this.router.navigate(['/timeline']);
            if (localStorage.getItem('token')) {
                this.uniService.getUserDetail().subscribe(function (response) {
                    _this.user = {
                        user_id: response._id,
                        user_rank: response.rank
                    };
                    if (_this.user.user_rank == 10) {
                        _this.isAdmin = true;
                    }
                }, function (error) { return console.log('이건 에러야 !!error', error); });
            }
            this.uniService.getTimelineList(option).subscribe(function (response) {
                _this.posts = JSON.parse(response);
                var len = _this.posts.length;
                _this.isFavorite = [];
                for (var i = 0; i < len; i++) {
                    if (_this.posts[i].fin_date)
                        _this.posts[i].adv = true;
                    if (_this.posts[i].post == "0" && _this.posts[i].post != "") {
                        _this.posts[i].post = "[System]해당 사이트 로그인 후에 열람가능합니다.";
                    }
                    else if (_this.posts[i].post == 1 || _this.posts[i].post == "") {
                        _this.posts[i].post = "[System]링크를 눌러서 확인해보세요!";
                    }
                    _this.posts[i].after_date = _this.timeConverter(_this.posts[i].date);
                    _this.isFavorite[i] = false;
                    if (_this.posts[i].fav_cnt >= 10000) {
                        _this.posts[i].fav_cnt -= 10000;
                        _this.posts[i].admin = true;
                    }
                    if (_this.posts[i].fav) {
                        var fav_len = _this.posts[i].fav.length;
                        if (_this.user)
                            for (var j = 0; j < fav_len; j++) {
                                if (_this.posts[i].fav[j].user_id.$oid == _this.user.user_id.$oid) {
                                    _this.isFavorite[i] = true;
                                }
                            }
                    }
                }
                _this.small_posts = _this.posts.slice(0, _this.maxPost);
            }, function (error) { return console.log('error', error); });
        }
        else {
            this.searchList();
        }
    };
    TimelineComponent.prototype.searchList = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.search_word = params['word'];
        });
        var user;
        if (localStorage.getItem('token')) {
            this.uniService.getUserDetail().subscribe(function (response) {
                user = {
                    user_id: response._id,
                    user_rank: response.rank
                };
                if (user.user_rank == 10) {
                    _this.isAdmin = true;
                }
            }, function (error) { return console.log('이건 에러야 !!error', error); });
        }
        this.postData = {
            word: this.search_word
        };
        this.uniService.search(this.postData).subscribe(function (response) {
            _this.posts = JSON.parse(response);
            var len = _this.posts.length;
            _this.search_cnt = _this.posts.length;
            _this.isFavorite = [];
            for (var i = 0; i < len; i++) {
                if (_this.posts[i].post == "0" && _this.posts[i].post != "") {
                    _this.posts[i].post = "[System]해당 사이트 로그인 후에 열람가능합니다.";
                }
                else if (_this.posts[i].post == 1 || _this.posts[i].post == "") {
                    _this.posts[i].post = "[System]링크를 눌러서 확인해보세요!";
                }
                _this.posts[i].date = _this.timeConverter(_this.posts[i].date);
                _this.isFavorite[i] = false;
                if (_this.posts[i].fav) {
                    var fav_len = _this.posts[i].fav.length;
                    for (var j = 0; j < fav_len; j++) {
                        if (_this.posts[i].fav[j].user_id.$oid == user.user_id.$oid) {
                            _this.isFavorite[i] = true;
                        }
                    }
                }
            }
            _this.small_posts = _this.posts.slice(0, _this.maxPost);
        }, function (error) { return console.log('error', error); });
    };
    TimelineComponent.prototype.addView = function (i) {
        var _this = this;
        var postData = {
            id: this.posts[i]._id.$oid,
            title: this.posts[i].title
        };
        this.uniService.addView(postData).subscribe(function (response) {
            console.log(_this.posts[i].view);
        }, function (error) { return console.log('error', error); });
    };
    /*var a = new Date(UNIX_timestamp);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    return time;*/
    TimelineComponent.prototype.addFavTag = function (post_index, tag_index) {
        if (localStorage.getItem('token')) {
            alert("관심태그에 추가되었습니다!");
            var fav_tag = { 'fav_tag': this.posts[post_index].tag[tag_index] };
            this.uniService.addFavTag(fav_tag).subscribe(function (response) { }, function (error) { return console.log('error', error); });
        }
        else {
            alert("태그를 저장하는 기능입니다. 로그인 후에 사용가능합니다.");
        }
    };
    TimelineComponent.prototype.addBlackTag = function (post_index, tag_index) {
        if (localStorage.getItem('token')) {
            alert("블랙리스트에 추가되었습니다!");
            var black_tag = { 'black_tag': this.posts[post_index].tag[tag_index] };
            this.uniService.addBlackTag(black_tag).subscribe(function (response) { }, function (error) { return console.log('error', error); });
        }
        else {
            alert("태그를 저장하는 기능입니다. 로그인 후에 사용가능합니다.");
        }
    };
    TimelineComponent.prototype.search_tag = function (tag) {
        location.href = '/#/timeline/' + tag;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TimelineComponent.prototype, "onScrollEvent", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TimelineComponent.prototype, "onResize", null);
    TimelineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-timeline',
            template: __webpack_require__(/*! ./timeline.component.html */ "./src/app/timeline/timeline.component.html"),
            styles: [__webpack_require__(/*! ./timeline.component.css */ "./src/app/timeline/timeline.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _uni_Service__WEBPACK_IMPORTED_MODULE_1__["UniService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], TimelineComponent);
    return TimelineComponent;
}());



/***/ }),

/***/ "./src/app/uni-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/uni-routing.module.ts ***!
  \***************************************/
/*! exports provided: UniRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniRoutingModule", function() { return UniRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _start_start_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./start/start.component */ "./src/app/start/start.component.ts");
/* harmony import */ var _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timeline/timeline.component */ "./src/app/timeline/timeline.component.ts");
/* harmony import */ var _board_board_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./board/board.component */ "./src/app/board/board.component.ts");
/* harmony import */ var _stats_stats_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stats/stats.component */ "./src/app/stats/stats.component.ts");
/* harmony import */ var _user_login_register_login_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user/login-register/login-register.component */ "./src/app/user/login-register/login-register.component.ts");
/* harmony import */ var _user_find_account_find_account_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user/find-account/find-account.component */ "./src/app/user/find-account/find-account.component.ts");
/* harmony import */ var _user_userlist_userlist_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user/userlist/userlist.component */ "./src/app/user/userlist/userlist.component.ts");
/* harmony import */ var _user_my_page_my_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user/my-page/my-page.component */ "./src/app/user/my-page/my-page.component.ts");
/* harmony import */ var _user_my_page_edit_nickname_edit_nickname_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user/my-page/edit-nickname/edit-nickname.component */ "./src/app/user/my-page/edit-nickname/edit-nickname.component.ts");
/* harmony import */ var _user_my_page_fav_post_fav_post_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user/my-page/fav-post/fav-post.component */ "./src/app/user/my-page/fav-post/fav-post.component.ts");
/* harmony import */ var _user_my_page_fav_tag_fav_tag_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user/my-page/fav-tag/fav-tag.component */ "./src/app/user/my-page/fav-tag/fav-tag.component.ts");
/* harmony import */ var _user_my_page_my_page_home_my_page_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./user/my-page/my-page-home/my-page-home.component */ "./src/app/user/my-page/my-page-home/my-page-home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var routes = [
    { path: '', component: _start_start_component__WEBPACK_IMPORTED_MODULE_2__["StartComponent"] },
    { path: 'timeline', component: _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_3__["TimelineComponent"] },
    { path: 'timeline/:word', component: _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_3__["TimelineComponent"] },
    { path: 'board', component: _board_board_component__WEBPACK_IMPORTED_MODULE_4__["BoardComponent"] },
    { path: 'user/sign-in', component: _user_login_register_login_register_component__WEBPACK_IMPORTED_MODULE_6__["LoginRegisterComponent"] },
    { path: 'user/my-page', component: _user_my_page_my_page_component__WEBPACK_IMPORTED_MODULE_9__["MyPageComponent"],
        children: [
            { path: '', component: _user_my_page_my_page_home_my_page_home_component__WEBPACK_IMPORTED_MODULE_13__["MyPageHomeComponent"] },
            { path: 'edit-nickname', component: _user_my_page_edit_nickname_edit_nickname_component__WEBPACK_IMPORTED_MODULE_10__["EditNicknameComponent"] },
            { path: 'fav-post', component: _user_my_page_fav_post_fav_post_component__WEBPACK_IMPORTED_MODULE_11__["FavPostComponent"] },
            { path: 'fav-tag', component: _user_my_page_fav_tag_fav_tag_component__WEBPACK_IMPORTED_MODULE_12__["FavTagComponent"] },
        ]
    },
    { path: 'user/find-account', component: _user_find_account_find_account_component__WEBPACK_IMPORTED_MODULE_7__["FindAccountComponent"] },
    { path: 'user/userlist', component: _user_userlist_userlist_component__WEBPACK_IMPORTED_MODULE_8__["UserlistComponent"] },
    { path: 'stats', component: _stats_stats_component__WEBPACK_IMPORTED_MODULE_5__["StatsComponent"] },
];
var UniRoutingModule = /** @class */ (function () {
    function UniRoutingModule() {
    }
    UniRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
        })
    ], UniRoutingModule);
    return UniRoutingModule;
}());



/***/ }),

/***/ "./src/app/uni.Service.ts":
/*!********************************!*\
  !*** ./src/app/uni.Service.ts ***!
  \********************************/
/*! exports provided: UniService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniService", function() { return UniService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UniService = /** @class */ (function () {
    function UniService(http) {
        this.http = http;
        this.current_user = {
            user_id: 'asdf',
        };
        //url = "http://121.145.54.15:5000"
        //url = "http://127.0.0.1:5000"
        this.url = "http://13.209.244.127:5000";
    }
    UniService.prototype.registerNewUser = function (userData) {
        return this.http.post(this.url + '/users', userData);
        //return this.http.post('http://123.142.171.25:5000/users', userData, httpOptions)
    };
    UniService.prototype.signIn = function (userData) {
        return this.http.post(this.url + '/user/login', userData);
        //return this.http.post('http://123.142.171.25:5000/user/login', userData, httpOptions)
    };
    UniService.prototype.authentication = function () {
        var _this = this;
        var token = localStorage.getItem('token');
        var tokenData = { 'access_token': token };
        var auth = this.http.post(this.url + '//auth', tokenData);
        auth.subscribe(function (response) {
            _this.current_user = {
                user_id: response['user_id'],
            };
        });
    };
    UniService.prototype.is_auth = function () {
        if (this.current_user.user_id)
            return true;
        else
            return false;
    };
    /// 유저
    UniService.prototype.getUserDetail = function () {
        return this.http.get(this.url + '/user');
    };
    UniService.prototype.editNick = function (nick) {
        return this.http.put(this.url + '/user/nick', nick);
    };
    UniService.prototype.changePasswd = function (pwForm) {
        return this.http.put(this.url + '/user/pw', pwForm);
    };
    UniService.prototype.loadUserList = function () {
        return this.http.get(this.url + '/users');
    };
    UniService.prototype.checkUserId = function (postData) {
        return this.http.post(this.url + '/user/check-id', postData);
    };
    UniService.prototype.checkQueAns = function (postData) {
        return this.http.post(this.url + '/user/check-que-ans', postData);
    };
    //타임라인
    UniService.prototype.getTimelineList = function (option) {
        var postData = { option: option };
        return this.http.get(this.url + '/timeline/' + option);
    };
    UniService.prototype.getAdminPost = function () {
        return this.http.get(this.url + '/timeline/admin');
    };
    UniService.prototype.getAdvertise = function () {
        return this.http.get(this.url + '/timeline/advertise');
    };
    UniService.prototype.writePost = function (postData) {
        return this.http.post(this.url + '/timeline/admin', postData);
    };
    UniService.prototype.writeAdvertise = function (postData) {
        return this.http.post(this.url + '/timeline/advertise', postData);
    };
    UniService.prototype.favTimeline = function (postData) {
        return this.http.put(this.url + '/timeline/fav', postData);
    };
    UniService.prototype.unFavTimeline = function (postData) {
        return this.http.put(this.url + '/timeline/un-fav', postData);
    };
    UniService.prototype.addFavTag = function (tag) {
        return this.http.post(this.url + '/user/fav-tag', tag);
    };
    UniService.prototype.addBlackTag = function (tag) {
        return this.http.post(this.url + '/user/black-tag', tag);
    };
    UniService.prototype.removeFavTag = function (tag) {
        return this.http.put(this.url + '/user/fav-tag', tag);
        // 삭제. delete메서드를 쓰고싶었으나 delete는 body를 담을 수 없으므로 put으로 대체.
    };
    UniService.prototype.removeBlackTag = function (tag) {
        return this.http.put(this.url + '/user/black-tag', tag);
        // 삭제. delete메서드를 쓰고싶었으나 delete는 body를 담을 수 없으므로 put으로 대체.
    };
    UniService.prototype.removePost = function (postData) {
        return this.http.put(this.url + '/timeline', postData);
    };
    UniService.prototype.addView = function (postData) {
        return this.http.put(this.url + '/timeline/view', postData);
    };
    // 게시판
    UniService.prototype.getBoardList = function () {
        return this.http.get(this.url + '/board');
    };
    UniService.prototype.sendPost = function (postData) {
        return this.http.post(this.url + '/board', postData);
    };
    UniService.prototype.deletePost = function (id) {
        return this.http.delete(this.url + '/board?id=' + id);
    };
    UniService.prototype.updatePost = function (postData) {
        return this.http.put(this.url + '/board', postData);
    };
    UniService.prototype.sendComment = function (postData, post_id) {
        var postData_ = {
            contents: postData.contents,
            _id: post_id
        };
        return this.http.post(this.url + '/board/comment', postData_);
    };
    UniService.prototype.deleteComment = function (postData) {
        var postData_ = {
            type: 'delete',
            post_id: postData.post_id,
            comment_id: postData.comment_id
        };
        return this.http.put(this.url + '/board/comment', postData_);
    };
    UniService.prototype.updateComment = function (postData) {
        var postData_ = {
            type: 'delete',
            post_id: postData.post_id,
            comment_id: postData.comment_id
        };
        return this.http.put(this.url + '/board/comment', postData_);
    };
    UniService.prototype.favBoard = function (id) {
        return this.http.put(this.url + '/board/fav', id);
    };
    UniService.prototype.unFavBoard = function (id) {
        return this.http.put(this.url + '/board/un-fav', id);
    };
    //검색
    UniService.prototype.search = function (postData) {
        return this.http.post(this.url + '/search', postData);
    };
    UniService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UniService);
    return UniService;
}());



/***/ }),

/***/ "./src/app/user/find-account/find-account.component.css":
/*!**************************************************************!*\
  !*** ./src/app/user/find-account/find-account.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    margin-top:200px;\r\n    \r\n}\r\n@media (max-width: 576px) { \r\n    .container{\r\n        margin-top:80px;\r\n    }\r\n}\r\n.find-box{\r\n    border:1px solid #BBBBBB;\r\n    border-radius:10px;\r\n    padding:10px;\r\n    width:500px;\r\n    height:300px;\r\n}\r\n.align-center{\r\n    text-align:center;\r\n    font-size:20px;\r\n}\r\n:host {\r\n    display: block;\r\n    overflow: hidden; /* Hide everything that doesn't fit compoennt */\r\n  }\r\n.parent {\r\n    height: 100%;\r\n    width: 400%;    \r\n    display: flex; \r\n  \r\n  }\r\n.parent div{\r\n    flex:1;\r\n  }"

/***/ }),

/***/ "./src/app/user/find-account/find-account.component.html":
/*!***************************************************************!*\
  !*** ./src/app/user/find-account/find-account.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"container d-flex justify-content-center\">\r\n  <div class=\"row\">\r\n    <div class=\"find-box d-flex align-items-center justify-content-center\">\r\n      <div class=\"\">\r\n        <h2 style=\"text-align:center;font-weight:bold\">암호 찾기</h2>\r\n        <br>\r\n        <p class=\"align-center\">계정을 입력해주세요.</p>\r\n        <p class=\"align-center\"><input type=\"text\"></p>\r\n        <p class=\"align-center\"><input class=\"btn btn-secondary\" (click)=\"move()\" type=\"submit\" value=\"확인\"></p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"!first\" class=\"container d-flex justify-content-center\">\r\n    <div class=\"row\">\r\n      <div class=\"find-box d-flex align-items-center justify-content-center\">\r\n        <div class=\"\">\r\n          <h2 style=\"text-align:center;font-weight:bold\">암호 찾기</h2>\r\n          <br>\r\n          <p class=\"align-center\">나의 학과는?</p>\r\n          <p class=\"align-center\"><input type=\"text\"></p>\r\n          <p class=\"align-center\"><input class=\"btn btn-secondary\" type=\"submit\" value=\"확인\"></p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>-->\r\n  \r\n<div class=\"parent\" [@slide]=\"activePane\">\r\n    <div><ng-content select=\"[leftPane]\"></ng-content></div>\r\n    <div><ng-content select=\"[centerPane]\"></ng-content></div>\r\n    <div><ng-content select=\"[rightPane]\"></ng-content></div>\r\n    <div><ng-content select=\"[finishPane]\"></ng-content></div>\r\n  </div>"

/***/ }),

/***/ "./src/app/user/find-account/find-account.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/user/find-account/find-account.component.ts ***!
  \*************************************************************/
/*! exports provided: FindAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindAccountComponent", function() { return FindAccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FindAccountComponent = /** @class */ (function () {
    function FindAccountComponent() {
        this.first = true;
        this.activePane = 'left';
    }
    FindAccountComponent.prototype.ngOnInit = function () {
    };
    FindAccountComponent.prototype.move = function () {
        this.first = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FindAccountComponent.prototype, "activePane", void 0);
    FindAccountComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'find-account',
            template: __webpack_require__(/*! ./find-account.component.html */ "./src/app/user/find-account/find-account.component.html"),
            styles: [__webpack_require__(/*! ./find-account.component.css */ "./src/app/user/find-account/find-account.component.css")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('slide', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('left', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('center', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-25%)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('right', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-50%)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('finish', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-75%)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(300))
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], FindAccountComponent);
    return FindAccountComponent;
}());



/***/ }),

/***/ "./src/app/user/login-register/login-register.component.css":
/*!******************************************************************!*\
  !*** ./src/app/user/login-register/login-register.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  .container{\r\n    width:576px;\r\n    background-color:white;\r\n    height:500px;\r\n    border-radius: 10px;\r\n  }\r\n  .top-margin{\r\n    margin-top:150px;\r\n    padding-top:40px;\r\n  }\r\n  @media (max-width: 576px) {\r\n\r\n  .container{\r\n    width:100%;\r\n    background-color:white;\r\n    height:500px;\r\n  }\r\n  .top-margin{\r\n    margin-top:90px;\r\n    padding-top:20px;\r\n  }\r\n}\r\n  .sign-in, .sign-up{\r\n  padding:10px;\r\n  margin:5px;\r\n  border-radius:5px;\r\n\r\n}\r\n  .question {\r\n  margin-bottom:10px;\r\n  width:100%;\r\n  height:30px;\r\n}\r\n  .tab-title{\r\n  font-weight:bold;\r\n  font-size:21px;\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/user/login-register/login-register.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/user/login-register/login-register.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container top-margin\">\r\n\r\n  <ngb-tabset>\r\n    <ngb-tab >\r\n      <ng-template class=\"tab-title\"  ngbTabTitle><b (click)=\"clear()\">로그인</b></ng-template>\r\n      <ng-template ngbTabContent>\r\n        <div class=\"row\">\r\n          <div class=\"col-sm sign-in\">\r\n            <form  [formGroup]=\"signInForm\" (ngSubmit)=\"signIn()\">\r\n              <div class=\"form-group\">\r\n                <span>계정 : </span> \r\n                <input type=\"text\" width=\"80px\" class=\"form-control\" formControlName=\"user_id\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <span>비밀 번호 : </span> \r\n                  <input type=\"password\" width=\"80px\" class=\"form-control\" formControlName=\"user_pw\">\r\n                </div>\r\n                <button type=\"submit\" class=\"btn btn-secondary\" [disabled]=\"!signInForm.valid\">로그인</button><br>  \r\n                <a class=\"text-muted small\" (click)=\"open(content)\">계정이나 비밀번호를 잊으셨나요?</a>        \r\n              </form>\r\n          </div>\r\n        </div>\r\n      </ng-template>\r\n    </ngb-tab>\r\n    <ngb-tab>\r\n      <ng-template class=\"tab-title\"  ngbTabTitle><b (click)=\"clear()\">회원가입</b></ng-template>\r\n      <ng-template ngbTabContent>\r\n        <div class=\"col-sm sign-up\">\r\n            <form  [formGroup]=\"signUpForm\" (ngSubmit)=\"registerNewUser()\">\r\n              <div class=\"form-group\">\r\n                <span>계정 : </span> \r\n                <input type=\"text\" width=\"80px\" class=\"form-control\" formControlName=\"user_id\">\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <span>비밀 번호 : </span> \r\n                <input type=\"password\" width=\"80px\" class=\"form-control\" formControlName=\"user_pw\">\r\n              </div>\r\n              <div class=\"form-group\">\r\n                  <span>비밀 번호 확인 : </span> \r\n                  <input type=\"password\" width=\"80px\" class=\"form-control\" formControlName=\"user_pwc\">\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"control-label\" for=\"signupPasswordagain\">Password question</label><br>            \r\n                <select class=\"question\" name=\"question\" formControlName=\"user_que\">\r\n                    <option value=\"\">질문을 선택해주세요</option>\r\n                    <option value=\"1\">나의 학과는?</option>\r\n                    <option value=\"2\">나의 어머니 성함은?</option>\r\n                    <option value=\"3\">나의 고향은?</option>\r\n                    <option value=\"4\">나의 취미는?</option>\r\n                    <option value=\"5\">나의 첫사랑은?</option>\r\n                    <option value=\"6\">나의 아버지 성함은?</option>\r\n                    <option value=\"7\">나의 라임오렌지 나무</option>\r\n                </select>\r\n                <input id=\"signupPassworquestion\" type=\"text\" maxlength=\"25\" class=\"form-control\" formControlName=\"user_ans\">\r\n                </div>\r\n              <button type=\"submit\" class=\"btn btn-secondary\" [disabled]=\"!signUpForm.valid\">가입</button>          \r\n            </form>\r\n          </div>\r\n      </ng-template>\r\n    </ngb-tab>\r\n  </ngb-tabset>\r\n \r\n\r\n      </div>\r\n      \r\n      \r\n\r\n\r\n      <ng-template #content let-modal>\r\n\r\n            <div class=\"modal-header\">\r\n              <h4 class=\"modal-title\" id=\"modal-basic-title\">암호를 까먹었나요?</h4>\r\n              <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n            </div>\r\n            <find-account [activePane]=\"display_grade ? display_grade2 ? display_grade3 ? 'left' : 'center' : 'right' : 'finish'\">\r\n                <div class=\"modal-body\" leftPane>\r\n                  <form [formGroup]=\"checkAccountForm\" (ngSubmit)=\"checkAccount()\">\r\n                    <div class=\"form-group\">\r\n                      <label>계정을 입력해주세요.</label>\r\n                      <div class=\"input-group\">\r\n                        <input formControlName=\"user_id\" class=\"form-control\">\r\n                      </div>\r\n                    </div>\r\n                    <button type=\"submit\" class=\"btn btn-outline-dark\" >확인</button>\r\n\r\n                  </form>\r\n                </div>\r\n                <div class=\"modal-body\" centerPane>\r\n                    <form [formGroup]=\"checkQuestionForm\" (ngSubmit)=\"checkQuestion()\">\r\n                      <div class=\"form-group\">\r\n                        <label>{{que}}</label>\r\n                        <div class=\"input-group\">\r\n                          <input formControlName=\"user_ans\" class=\"form-control\">\r\n                        </div>\r\n                      </div>\r\n                      <button type=\"submit\" class=\"btn btn-outline-dark\" >확인</button>\r\n                    </form>\r\n                  </div>\r\n                  <div class=\"modal-body\" rightPane>\r\n                      <form [formGroup]=\"resetPasswdForm\" (ngSubmit)=\"resetPasswd()\">\r\n                        <div class=\"form-group\">\r\n                          <label>새로운 비밀번호를 입력하세요.</label>\r\n                          <div class=\"input-group\">\r\n                            <input formControlName=\"pw\" type=\"password\" class=\"form-control\">\r\n                          </div>\r\n                          <br>\r\n                          <label>다시 한 번 더!!</label>\r\n                          <div class=\"input-group\">\r\n                            <input formControlName=\"pwc\" type=\"password\" class=\"form-control\">\r\n                          </div>\r\n                        </div>\r\n                        <button type=\"submit\" class=\"btn btn-outline-dark\" >확인</button>\r\n                      </form>\r\n                    </div>\r\n                    <div class=\"modal-body\" finishPane>\r\n                      <h3 style=\"font-weight:bold;\">비밀번호가 변경되었습니다!</h3>\r\n                    </div>\r\n            </find-account>\r\n\r\n            <div class=\"modal-footer\">\r\n            </div>\r\n\r\n\r\n        </ng-template>\r\n\r\n        \r\n\r\n        "

/***/ }),

/***/ "./src/app/user/login-register/login-register.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/user/login-register/login-register.component.ts ***!
  \*****************************************************************/
/*! exports provided: LoginRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRegisterComponent", function() { return LoginRegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _uni_Service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../uni.Service */ "./src/app/uni.Service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_services/authentication.service */ "./src/app/_services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginRegisterComponent = /** @class */ (function () {
    function LoginRegisterComponent(fb, uniService, modalService, router, authenticationService) {
        this.fb = fb;
        this.uniService = uniService;
        this.modalService = modalService;
        this.router = router;
        this.authenticationService = authenticationService;
        this.display_grade = true;
        this.display_grade2 = true;
        this.display_grade3 = true;
        this.signInForm = this.fb.group({
            user_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[^ \t\r\n\v\f]*')])],
            user_pw: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[^ \t\r\n\v\f]*')])],
        });
        this.signUpForm = this.fb.group({
            user_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[^ \t\r\n\v\f]*')])],
            user_pw: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[^ \t\r\n\v\f]*')])],
            user_pwc: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[^ \t\r\n\v\f]*')])],
            user_que: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            user_ans: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
        this.checkAccountForm = this.fb.group({
            user_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.checkQuestionForm = this.fb.group({
            user_ans: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.resetPasswdForm = this.fb.group({
            pw: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[^ \t\r\n\v\f]*')],
            pwc: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[^ \t\r\n\v\f]*')]
        });
    }
    LoginRegisterComponent.prototype.ngOnInit = function () {
    };
    LoginRegisterComponent.prototype.move = function () {
        if (this.display_grade == true && this.display_grade2 == true && this.display_grade3 == true) {
            this.display_grade3 = false;
        }
        else if (this.display_grade == true && this.display_grade2 == true && this.display_grade3 == false) {
            this.display_grade2 = false;
        }
        else if (this.display_grade == true && this.display_grade2 == false && this.display_grade3 == false) {
            this.display_grade = false;
        }
    };
    LoginRegisterComponent.prototype.open = function (content) {
        this.checkAccountForm.reset();
        this.checkQuestionForm.reset();
        this.resetPasswdForm.reset();
        this.display_grade = true;
        this.display_grade2 = true;
        this.display_grade3 = true;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
    };
    LoginRegisterComponent.prototype.close = function () {
        this.display_grade = true;
        this.display_grade2 = true;
        this.display_grade3 = true;
        this.modalService.dismissAll();
    };
    LoginRegisterComponent.prototype.signIn = function () {
        this.userData = {
            user_id: this.signInForm.value.user_id,
            user_pw: this.signInForm.value.user_pw,
        };
        this.uniService.signIn(this.userData).subscribe(function (response) {
            if (response) {
                localStorage.setItem('token', response.access_token);
                location.href = "/";
            }
            else {
                alert("아이디나 패스워드를 확인해주세요.");
            }
        }, function (error) { return console.log('error', error); });
    };
    LoginRegisterComponent.prototype.registerNewUser = function () {
        this.userData = {
            user_id: this.signUpForm.value.user_id,
            user_pw: this.signUpForm.value.user_pw,
            user_que: this.signUpForm.value.user_que,
            user_ans: this.signUpForm.value.user_ans,
        };
        if (this.userData.user_que) {
            this.uniService.registerNewUser(this.userData).subscribe(function (response) {
                if (response == "Duplicate accounts") {
                    alert("중복된 계정입니다. 다시 입력해주세요.");
                }
                else {
                    alert("가입이 완료되었습니다.");
                    localStorage.setItem('token', response.access_token);
                    location.href = "/";
                }
            }, function (error) { return console.log('이건 에러야 !!error', error); });
        }
        else {
            alert("질문을 선택해주세요!");
        }
    };
    LoginRegisterComponent.prototype.checkAccount = function () {
        var _this = this;
        this.id = this.checkAccountForm.value.user_id;
        this.uniService.checkUserId(this.checkAccountForm.value).subscribe(function (response) {
            if (response) {
                _this.move();
                _this.display_grade3 = false;
                switch (response.que) {
                    case "1":
                        _this.que = "나의 학과는?";
                        break;
                    case "2":
                        _this.que = "나의 어머니 성함은?";
                        break;
                    case "3":
                        _this.que = "나의 고향은?";
                        break;
                    case "4":
                        _this.que = "나의 취미는?";
                        break;
                    case "5":
                        _this.que = "나의 첫사랑은?";
                        break;
                    case "6":
                        _this.que = "나의 아버지 성함은?";
                        break;
                    case "7":
                        _this.que = "나의 라임오렌지 나무";
                        break;
                }
            }
            else {
                alert("없는 계정입니다!");
            }
        }, function (error) { return console.log('이건 에러야 !!error', error); });
        this.checkAccountForm.reset();
    };
    LoginRegisterComponent.prototype.checkQuestion = function () {
        var _this = this;
        var postData = {
            user_ans: this.checkQuestionForm.value.user_ans,
            user_id: this.id
        };
        this.uniService.checkQueAns(postData).subscribe(function (response) {
            if (response) {
                _this.move();
                _this.display_grade3 = false;
            }
            else {
                alert("질문의 답변이 다릅니다!");
            }
        }, function (error) { return console.log('이건 에러야 !!error', error); });
        this.checkQuestionForm.reset();
    };
    LoginRegisterComponent.prototype.resetPasswd = function () {
        var _this = this;
        var postData = {
            user_id: this.id,
            new_pw: this.resetPasswdForm.value.pw
        };
        if (this.resetPasswdForm.value.pw != this.resetPasswdForm.value.pwc) {
            alert("두 비밀번호가 다릅니다!");
        }
        else {
            this.uniService.changePasswd(postData).subscribe(function (response) {
                if (response) {
                    _this.move();
                    _this.display_grade2 = false;
                }
                else {
                    alert("없는 계정입니다!");
                }
            }, function (error) { return console.log('이건 에러야 !!error', error); });
        }
        this.resetPasswdForm.reset();
    };
    LoginRegisterComponent.prototype.clear = function () {
        this.signInForm.reset();
        this.signUpForm.reset();
    };
    LoginRegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'login-register',
            template: __webpack_require__(/*! ./login-register.component.html */ "./src/app/user/login-register/login-register.component.html"),
            styles: [__webpack_require__(/*! ./login-register.component.css */ "./src/app/user/login-register/login-register.component.css")],
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _uni_Service__WEBPACK_IMPORTED_MODULE_2__["UniService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]])
    ], LoginRegisterComponent);
    return LoginRegisterComponent;
}());



/***/ }),

/***/ "./src/app/user/my-page/blacklist/blacklist.component.css":
/*!****************************************************************!*\
  !*** ./src/app/user/my-page/blacklist/blacklist.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    font-family: 'Jua', sans-serif;\r\n    width:90%;\r\n    height:350px;\r\n    padding:20px;\r\n    margin:50px 10px 0px 40px;\r\n    background-color:white;\r\n    border:1px solid #BBBBBB;\r\n    border-radius: 5px;\r\n}\r\n.fav-box{\r\n    width:90%;\r\n    height:200px;\r\n    margin:0 auto;\r\n    padding:10px;\r\n    border:1px solid #AAAAAA;\r\n    overflow-y: auto;\r\n}\r\n.tag{\r\n    padding:5px;\r\n    margin-right:5px;\r\n    margin-bottom: 6px;\r\n    border:0px;\r\n    border-radius: 5px;\r\n    background-color:#DDDDDD;\r\n}\r\n.small-font{\r\n    font-size:15px;\r\n    color:#999999;\r\n}\r\n@media (max-width: 994px) {\r\n    .container{\r\n        width:100%;\r\n        margin:20px 0px;\r\n        padding:10px;\r\n\r\n    }\r\n    h2{\r\n        font-size:25px;\r\n    }\r\n    .small-font{\r\n        font-size:13px;\r\n    }\r\n}\r\n"

/***/ }),

/***/ "./src/app/user/my-page/blacklist/blacklist.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/user/my-page/blacklist/blacklist.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container text-center\">\r\n  <h2>싫어하는 태그 - 블랙리스트</h2>\r\n  <p class=\"small-font\">해당 태그에 속한 글들은 전체보기에서 볼 수 없어요!<br>\r\n  태그를 누르면 삭제됩니다.</p>\r\n  <div class=\"fav-box\">\r\n    <button *ngFor=\"let tag of data_; index as i\" (click)=\"removeTag(i)\" class=\"tag\">#{{tag}}</button>\r\n    <h4 *ngIf=\"is_empty\" style=\"margin-top:70px;\">등록된 태그가 없어요!</h4>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/user/my-page/blacklist/blacklist.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/user/my-page/blacklist/blacklist.component.ts ***!
  \***************************************************************/
/*! exports provided: BlacklistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlacklistComponent", function() { return BlacklistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _uni_Service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../uni.Service */ "./src/app/uni.Service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BlacklistComponent = /** @class */ (function () {
    function BlacklistComponent(uniService) {
        this.uniService = uniService;
        this.is_empty = true;
        this.refresh = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(BlacklistComponent.prototype, "data", {
        set: function (value) {
            if (value && value.length >= 1) {
                this.data_ = value;
                this.is_empty = false;
            }
            else {
                this.data_ = [];
                this.is_empty = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    BlacklistComponent.prototype.ngOnInit = function () {
    };
    BlacklistComponent.prototype.removeTag = function (index) {
        var _this = this;
        var remove_tag = { 'black_tag': this.data_[index] };
        this.uniService.removeBlackTag(remove_tag).subscribe(function (response) {
            _this.refresh.emit('');
        }, function (error) { return console.log('이건 에러야 !!error', error); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], BlacklistComponent.prototype, "data", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], BlacklistComponent.prototype, "refresh", void 0);
    BlacklistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'blacklist',
            template: __webpack_require__(/*! ./blacklist.component.html */ "./src/app/user/my-page/blacklist/blacklist.component.html"),
            styles: [__webpack_require__(/*! ./blacklist.component.css */ "./src/app/user/my-page/blacklist/blacklist.component.css")]
        }),
        __metadata("design:paramtypes", [_uni_Service__WEBPACK_IMPORTED_MODULE_1__["UniService"]])
    ], BlacklistComponent);
    return BlacklistComponent;
}());



/***/ }),

/***/ "./src/app/user/my-page/board-fav/board-fav.component.css":
/*!****************************************************************!*\
  !*** ./src/app/user/my-page/board-fav/board-fav.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    font-family: 'Jua', sans-serif;\r\n    width:90%;\r\n    height:450px;\r\n    padding:20px;\r\n    margin:50px 40px 0px 10px;\r\n    border:1px solid #BBBBBB;\r\n    border-radius: 5px;\r\n    background-color:white;\r\n\r\n}\r\n.red{\r\n    color:red;\r\n    font-size:28px;\r\n}\r\n.fav-box{\r\n    width:90%;\r\n    height:300px;\r\n    margin:0 auto;\r\n    padding:10px 30px;\r\n    border:1px solid #AAAAAA;\r\n    border-bottom:0px;\r\n    overflow-y: auto;\r\n\r\n}\r\n.row{\r\n    border-bottom:1px solid #DDDDDD;\r\n    margin-bottom:10px;\r\n}\r\n.contents{\r\n    white-space: nowrap;\r\n    overflow: hidden; \r\n    text-overflow: ellipsis; \r\n    white-space: normal; \r\n    line-height: 1.2;\r\n    min-height:1.2em; \r\n    max-height: 2.4em; \r\n    text-align: left; \r\n    word-wrap: break-word; \r\n    display: -webkit-box; \r\n\r\n}\r\n.more-btn{\r\n    display: block;\r\n    width:90%;\r\n    margin:0 auto;\r\n    border:1px solid #AAAAAA;\r\n    background:white;\r\n}\r\n.small-font{\r\n    font-size:15px;\r\n    color:#999999;\r\n}\r\n.delete_btn{\r\n    height:100%;\r\n    border:0px;\r\n    background-color: transparent;\r\n}\r\n@media (max-width: 994px) {\r\n    .container{\r\n        width:100%;\r\n        margin:20px 0px;\r\n        padding:10px;\r\n\r\n    }\r\n    h2{\r\n        font-size:23px;\r\n    }\r\n}\r\n"

/***/ }),

/***/ "./src/app/user/my-page/board-fav/board-fav.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/user/my-page/board-fav/board-fav.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container text-center\">\r\n  <h2>좋아요 표시한 글 - 게시판</h2>\r\n  <div class=\"fav-box\">\r\n\r\n      <div *ngFor=\"let post of data_; index as i;\" class=\"row\">\r\n        <div class=\"col-10\">\r\n          <strong class=\"contents\">{{post.contents}}</strong>\r\n          <span class=\"small-font\">{{post.date}}</span>\r\n        </div>\r\n        <div class=\"col-2\">\r\n            <button class=\"delete_btn\" (click)=\"unFav(i)\"><i class=\"far fa-times-circle red\"></i></button>\r\n        </div>\r\n      </div>\r\n      <h4 *ngIf=\"is_empty\" style=\"margin-top:130px;\">좋아요를 표시한 글이 없어요!</h4>\r\n\r\n</div>\r\n<button class=\"more-btn\">더 보기..</button>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/user/my-page/board-fav/board-fav.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/user/my-page/board-fav/board-fav.component.ts ***!
  \***************************************************************/
/*! exports provided: BoardFavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardFavComponent", function() { return BoardFavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _uni_Service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../uni.Service */ "./src/app/uni.Service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BoardFavComponent = /** @class */ (function () {
    function BoardFavComponent(uniService) {
        this.uniService = uniService;
        this.is_empty = true;
        this.refresh = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(BoardFavComponent.prototype, "data", {
        set: function (value) {
            if (value && value.length >= 1) {
                this.data_ = value;
                this.is_empty = false;
            }
            else {
                this.data_ = [];
                this.is_empty = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    BoardFavComponent.prototype.ngOnInit = function () {
    };
    BoardFavComponent.prototype.unFav = function (i) {
        var _this = this;
        var id = { $oid: this.data_[i]._id };
        this.uniService.unFavBoard(id).subscribe(function (response) {
            _this.refresh.emit('');
        }, function (error) { return console.log('error', error); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], BoardFavComponent.prototype, "data", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], BoardFavComponent.prototype, "refresh", void 0);
    BoardFavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'board-fav',
            template: __webpack_require__(/*! ./board-fav.component.html */ "./src/app/user/my-page/board-fav/board-fav.component.html"),
            styles: [__webpack_require__(/*! ./board-fav.component.css */ "./src/app/user/my-page/board-fav/board-fav.component.css")]
        }),
        __metadata("design:paramtypes", [_uni_Service__WEBPACK_IMPORTED_MODULE_1__["UniService"]])
    ], BoardFavComponent);
    return BoardFavComponent;
}());



/***/ }),

/***/ "./src/app/user/my-page/edit-nickname/edit-nickname.component.css":
/*!************************************************************************!*\
  !*** ./src/app/user/my-page/edit-nickname/edit-nickname.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".edit-nickname-box{\r\n    width:50%;\r\n    height:350px;\r\n    padding-top:80px;\r\n    margin:0 auto;\r\n    margin-top:50px;\r\n    border:1px solid #BBBBBB;\r\n    border-radius: 5px;\r\n    vertical-align: center;\r\n}\r\n.ok_btn{\r\n    margin-top:20px;\r\n    padding:10px;\r\n    background-color:#212529;\r\n    color:#fed136;\r\n    border:0px;\r\n    border-radius: 5px;\r\n    font-family: 'Do Hyeon', sans-serif;\r\n    font-size:20px;\r\n}"

/***/ }),

/***/ "./src/app/user/my-page/edit-nickname/edit-nickname.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/user/my-page/edit-nickname/edit-nickname.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container text-center\">\r\n  <form [formGroup]=\"editNicknameForm\" (ngSubmit)=\"edit()\">\r\n    <div class=\"edit-nickname-box\">\r\n      <p>변경할 닉네임을 작성해주세요.</p>\r\n      <p class=\"text-mute\">중복된 닉네임이 있는 경우 사용이 불가능합니다!</p>\r\n      <input type=\"text\" width=\"80px\" formControlName=\"nickname\">\r\n      <br>\r\n      <button class=\"ok_btn\">확인</button>\r\n    </div>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/user/my-page/edit-nickname/edit-nickname.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/user/my-page/edit-nickname/edit-nickname.component.ts ***!
  \***********************************************************************/
/*! exports provided: EditNicknameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditNicknameComponent", function() { return EditNicknameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _uni_Service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../uni.Service */ "./src/app/uni.Service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditNicknameComponent = /** @class */ (function () {
    function EditNicknameComponent(fb, uniService) {
        this.fb = fb;
        this.uniService = uniService;
        this.editNicknameForm = this.fb.group({
            nickname: ['']
        });
    }
    EditNicknameComponent.prototype.ngOnInit = function () {
    };
    EditNicknameComponent.prototype.edit = function () {
    };
    EditNicknameComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'edit-nickname',
            template: __webpack_require__(/*! ./edit-nickname.component.html */ "./src/app/user/my-page/edit-nickname/edit-nickname.component.html"),
            styles: [__webpack_require__(/*! ./edit-nickname.component.css */ "./src/app/user/my-page/edit-nickname/edit-nickname.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _uni_Service__WEBPACK_IMPORTED_MODULE_2__["UniService"]])
    ], EditNicknameComponent);
    return EditNicknameComponent;
}());



/***/ }),

/***/ "./src/app/user/my-page/fav-post/fav-post.component.css":
/*!**************************************************************!*\
  !*** ./src/app/user/my-page/fav-post/fav-post.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    font-family: 'Jua', sans-serif;\r\n}\r\n.red{\r\n    color:red;\r\n}\r\n.fav-box{\r\n    width:60%;\r\n    margin:0 auto;\r\n    padding:30px;\r\n    border:1px solid #AAAAAA;\r\n    border-bottom:0px;\r\n}\r\n.more-btn{\r\n    display: block;\r\n    width:60%;\r\n    margin:0 auto;\r\n    border:1px solid #AAAAAA;\r\n    background:white;\r\n}"

/***/ }),

/***/ "./src/app/user/my-page/fav-post/fav-post.component.html":
/*!***************************************************************!*\
  !*** ./src/app/user/my-page/fav-post/fav-post.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"https://fonts.googleapis.com/css?family=Jua\" rel=\"stylesheet\">\r\n\r\n<br><br><br>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/user/my-page/fav-post/fav-post.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/user/my-page/fav-post/fav-post.component.ts ***!
  \*************************************************************/
/*! exports provided: FavPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavPostComponent", function() { return FavPostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FavPostComponent = /** @class */ (function () {
    function FavPostComponent() {
    }
    FavPostComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FavPostComponent.prototype, "data", void 0);
    FavPostComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fav-post',
            template: __webpack_require__(/*! ./fav-post.component.html */ "./src/app/user/my-page/fav-post/fav-post.component.html"),
            styles: [__webpack_require__(/*! ./fav-post.component.css */ "./src/app/user/my-page/fav-post/fav-post.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FavPostComponent);
    return FavPostComponent;
}());



/***/ }),

/***/ "./src/app/user/my-page/fav-tag/fav-tag.component.css":
/*!************************************************************!*\
  !*** ./src/app/user/my-page/fav-tag/fav-tag.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    font-family: 'Jua', sans-serif;\r\n    width:90%;\r\n    height:350px;\r\n    padding:20px;\r\n    margin:50px 40px 0px 10px;\r\n    background-color:white;\r\n    border:1px solid #BBBBBB;\r\n    border-radius: 5px;\r\n}\r\n.fav-box{\r\n    width:90%;\r\n    height:200px;\r\n    margin:0 auto;\r\n    padding:10px;\r\n    border:1px solid #AAAAAA;\r\n    overflow-y: auto;\r\n}\r\n.tag{\r\n    padding:5px;\r\n    margin-right:5px;\r\n    margin-bottom: 6px;\r\n    border:0px;\r\n    border-radius: 5px;\r\n    background-color:#DDDDDD;\r\n}\r\n.small-font{\r\n    font-size:15px;\r\n    color:#999999;\r\n}\r\n@media (max-width: 994px) {\r\n    .container{\r\n        width:100%;\r\n        margin:20px 0px;\r\n        padding:10px;\r\n\r\n    }\r\n}\r\n"

/***/ }),

/***/ "./src/app/user/my-page/fav-tag/fav-tag.component.html":
/*!*************************************************************!*\
  !*** ./src/app/user/my-page/fav-tag/fav-tag.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container text-center\">\r\n    <h2>관심있는 태그</h2>\r\n    <p class=\"small-font\">태그를 누르면 삭제됩니다.</p>\r\n    <div class=\"fav-box\">\r\n      <button *ngFor=\"let tag of data_; index as i\" (click)=\"removeTag(i)\" class=\"tag\">#{{tag}}</button>\r\n      <h4 *ngIf=\"is_empty\" style=\"margin-top:70px;\">등록된 태그가 없어요!</h4>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/user/my-page/fav-tag/fav-tag.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/user/my-page/fav-tag/fav-tag.component.ts ***!
  \***********************************************************/
/*! exports provided: FavTagComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavTagComponent", function() { return FavTagComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _uni_Service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../uni.Service */ "./src/app/uni.Service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FavTagComponent = /** @class */ (function () {
    function FavTagComponent(uniService) {
        this.uniService = uniService;
        this.is_empty = true;
        this.refresh = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(FavTagComponent.prototype, "data", {
        set: function (value) {
            if (value && value.length >= 1) {
                this.data_ = value;
                this.is_empty = false;
            }
            else {
                this.data_ = [];
                this.is_empty = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    FavTagComponent.prototype.ngOnInit = function () {
    };
    FavTagComponent.prototype.removeTag = function (index) {
        var _this = this;
        var remove_tag = { 'fav_tag': this.data_[index] };
        this.uniService.removeFavTag(remove_tag).subscribe(function (response) {
            _this.refresh.emit('');
        }, function (error) { return console.log('이건 에러야 !!error', error); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], FavTagComponent.prototype, "data", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], FavTagComponent.prototype, "refresh", void 0);
    FavTagComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fav-tag',
            template: __webpack_require__(/*! ./fav-tag.component.html */ "./src/app/user/my-page/fav-tag/fav-tag.component.html"),
            styles: [__webpack_require__(/*! ./fav-tag.component.css */ "./src/app/user/my-page/fav-tag/fav-tag.component.css")]
        }),
        __metadata("design:paramtypes", [_uni_Service__WEBPACK_IMPORTED_MODULE_1__["UniService"]])
    ], FavTagComponent);
    return FavTagComponent;
}());



/***/ }),

/***/ "./src/app/user/my-page/my-page-home/my-page-home.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/user/my-page/my-page-home/my-page-home.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu-info{\r\n    font-size:150px;\r\n}\r\n.menu{\r\n    border:0px;\r\n    border-radius: 125px;\r\n    display: inline-block;\r\n    background-color:#fed136;\r\n    color:white;\r\n    margin:20px;\r\n    margin-top:10px;\r\n    width:250px;\r\n    height:250px;\r\n    transition:width 1s, height 1s, background-color 1s, -webkit-transform 1s;\r\n    transition:width 1s, height 1s, background-color 1s, transform 1s;\r\n    transition:width 1s, height 1s, background-color 1s, transform 1s, -webkit-transform 1s;\r\n}\r\n.small-font{\r\n    margin-top:-50px;\r\n    font-size:15px;\r\n    color:#AAAAAA;\r\n}\r\n"

/***/ }),

/***/ "./src/app/user/my-page/my-page-home/my-page-home.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/user/my-page/my-page-home/my-page-home.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container text-center\">\r\n  <h2>나의 정보</h2>\r\n  <div class=\"row text-center\">\r\n    <div class=\"col-6 menu-info text-right\">\r\n        <button class=\"menu\"><i class=\"fas fa-lock\"></i></button><br>\r\n        <span class=\"small-font\">암호를 변경합니다.</span>\r\n    </div>\r\n    <div class=\"col-6 menu-info text-left\">\r\n        <button class=\"menu\"><i class=\"far fa-flushed\"></i></button><br>\r\n        <span class=\"small-font\">별명을 설정합니다.</span>\r\n    </div>\r\n  </div>\r\n  <div class=\"row text-center\">\r\n    <div class=\"col-6 menu-info text-right\">\r\n        <button class=\"menu\"><i class=\"fas fa-star\"></i></button>\r\n        <span class=\"small-font\">암호를 변경합니다.</span>\r\n    </div>\r\n    <div class=\"col-6 menu-info text-left\">\r\n        <button class=\"menu\"><i class=\"fas fa-tags\"></i></button>\r\n        <span class=\"small-font\">암호를 변경합니다.</span>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/user/my-page/my-page-home/my-page-home.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/user/my-page/my-page-home/my-page-home.component.ts ***!
  \*********************************************************************/
/*! exports provided: MyPageHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyPageHomeComponent", function() { return MyPageHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MyPageHomeComponent = /** @class */ (function () {
    function MyPageHomeComponent() {
    }
    MyPageHomeComponent.prototype.ngOnInit = function () {
    };
    MyPageHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-page-home',
            template: __webpack_require__(/*! ./my-page-home.component.html */ "./src/app/user/my-page/my-page-home/my-page-home.component.html"),
            styles: [__webpack_require__(/*! ./my-page-home.component.css */ "./src/app/user/my-page/my-page-home/my-page-home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MyPageHomeComponent);
    return MyPageHomeComponent;
}());



/***/ }),

/***/ "./src/app/user/my-page/my-page.component.css":
/*!****************************************************!*\
  !*** ./src/app/user/my-page/my-page.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    margin-top:160px;\r\n    height:1000px;\r\n}\r\n@media (max-width: 576px) {\r\n    .container{\r\n        margin-top:90px;\r\n        height:2300px;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/user/my-page/my-page.component.html":
/*!*****************************************************!*\
  !*** ./src/app/user/my-page/my-page.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"container\">\r\n  <div class=\"menu_bar text-center\">\r\n    <button class=\"menu\" routerLink=\"change-password\" (mouseover)=\"open(0)\" (mouseleave)=\"close(0)\"><span [ngStyle]=\"{'font-size': btn_arr[0]==true ? '18px' : '30px'}\"><i class=\"fas fa-lock\"></i></span><span [ngStyle]=\"{display: btn_arr[0]==true ? '' : 'none'}\"><br>암호<br>변경</span></button>\r\n    <button class=\"menu\" routerLink=\"edit-nickname\" (mouseover)=\"open(1)\" (mouseleave)=\"close(1)\"><span [ngStyle]=\"{'font-size': btn_arr[1]==true ? '18px' : '30px'}\"><i class=\"far fa-flushed\"></i></span><span [ngStyle]=\"{display: btn_arr[1]==true ? '' : 'none'}\"><br>별명<br>설정</span></button>\r\n    <button class=\"menu\" routerLink=\"fav-post\" (mouseover)=\"open(2)\" (mouseleave)=\"close(2)\"><span [ngStyle]=\"{'font-size': btn_arr[2]==true ? '18px' : '30px'}\"><i class=\"fas fa-star\"></i></span><span [ngStyle]=\"{display: btn_arr[2]==true ? '' : 'none'}\"><br>관심있는<br>글</span></button>\r\n    <button class=\"menu\" routerLink=\"fav-tag\" (mouseover)=\"open(3)\" (mouseleave)=\"close(3)\"><span [ngStyle]=\"{'font-size': btn_arr[3]==true ? '18px' : '30px'}\"><i class=\"fas fa-tags\"></i></span><span [ngStyle]=\"{display: btn_arr[3]==true ? '' : 'none'}\"><br>관심있는<br>태그</span></button>\r\n  </div>\r\n  <router-outlet></router-outlet>\r\n</div>-->\r\n<link href=\"https://fonts.googleapis.com/css?family=Jua\" rel=\"stylesheet\">\r\n\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-6\">\r\n      <profile (nickname) = \"nickname($event)\" [data]=\"profile_data\"></profile>\r\n    </div>\r\n    <div class=\"col-lg-6\">\r\n      <fav-tag (refresh) = \"refresh($event)\" [data]=\"tag_data\"></fav-tag>\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"row\">\r\n      <div class=\"col-lg-6\">\r\n        <timeline-fav (refresh) = \"refresh($event)\" [data]=\"timeline_data\"></timeline-fav>\r\n      </div>\r\n      <div class=\"col-lg-6\">\r\n        <board-fav (refresh) = \"refresh($event)\"  [data]=\"board_data\"></board-fav>\r\n      </div>\r\n    </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-6\">\r\n      <blacklist (refresh) = \"refresh($event)\" [data]=\"black_tag\"></blacklist>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/user/my-page/my-page.component.ts":
/*!***************************************************!*\
  !*** ./src/app/user/my-page/my-page.component.ts ***!
  \***************************************************/
/*! exports provided: MyPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyPageComponent", function() { return MyPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _uni_Service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../uni.Service */ "./src/app/uni.Service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MyPageComponent = /** @class */ (function () {
    function MyPageComponent(uniService) {
        this.uniService = uniService;
        this.btn_arr = [];
        this.getUserDetail();
    }
    MyPageComponent.prototype.ngOnInit = function () {
    };
    MyPageComponent.prototype.open = function (index) {
        this.btn_arr[index] = true;
    };
    MyPageComponent.prototype.close = function (index) {
        this.btn_arr[index] = false;
    };
    MyPageComponent.prototype.nickname = function () {
        this.getUserDetail();
    };
    MyPageComponent.prototype.refresh = function () {
        this.getUserDetail();
    };
    MyPageComponent.prototype.getUserDetail = function () {
        var _this = this;
        this.uniService.getUserDetail().subscribe(function (response) {
            if (response) {
                _this.profile_data = {
                    id: response.id,
                    nickname: response.nickname,
                };
                _this.timeline_data = response.fav_timeline;
                var timeline_len = _this.timeline_data.length;
                for (var i = 0; i < timeline_len; i++) {
                    _this.timeline_data[i].after_date = _this.timeConverter(_this.timeline_data[i].date);
                }
                _this.board_data = response.fav_board;
                var board_len = _this.board_data.length;
                for (var i = 0; i < board_len; i++) {
                    _this.board_data[i].date = _this.board_timeConverter(_this.board_data[i].date.$date);
                }
                _this.tag_data = response.fav_tag;
                _this.black_tag = response.black_tag;
            }
            else {
                alert("잘못된 접근입니다!");
                location.href = "/#/";
            }
        }, function (error) { return console.log('이건 에러야 !!error', error); });
    };
    MyPageComponent.prototype.board_timeConverter = function (UNIX_timestamp) {
        var now = Math.round(new Date().getTime());
        var elapsed_time = (now - UNIX_timestamp) / 1000;
        if (elapsed_time >= 2592000) {
            elapsed_time /= 2592000;
            return Math.floor(elapsed_time) + "개월 전";
        }
        else if (elapsed_time >= 86400) {
            elapsed_time /= 86400;
            return Math.floor(elapsed_time) + "일 전";
        }
        else if (elapsed_time >= 3600) {
            elapsed_time /= 3600;
            return Math.floor(elapsed_time) + "시간 전";
        }
        else if (elapsed_time >= 300) {
            elapsed_time /= 60;
            return Math.floor(elapsed_time) + "분 전";
        }
        else {
            return "방금 전";
        }
    };
    MyPageComponent.prototype.timeConverter = function (UNIX_timestamp) {
        UNIX_timestamp = UNIX_timestamp.replace(/[^0-9]/g, "");
        var year = UNIX_timestamp.substring(0, 4);
        var month = UNIX_timestamp.substring(4, 6) - 1;
        var day = UNIX_timestamp.substring(6, 8);
        var hour = UNIX_timestamp.substring(8, 10);
        var min = UNIX_timestamp.substring(10, 12);
        var sec = UNIX_timestamp.substring(12, 14);
        var date = new Date(year, month, day, hour, min, sec);
        var now = Math.round(new Date().getTime());
        var elapsed_time = (now - date.getTime()) / 1000;
        if (elapsed_time >= 2592000) {
            elapsed_time /= 2592000;
            return Math.floor(elapsed_time) + "개월 전";
        }
        else if (elapsed_time >= 86400) {
            elapsed_time /= 86400;
            return Math.floor(elapsed_time) + "일 전";
        }
        else if (elapsed_time >= 3600) {
            elapsed_time /= 3600;
            return Math.floor(elapsed_time) + "시간 전";
        }
        else if (elapsed_time >= 300) {
            elapsed_time /= 60;
            return Math.floor(elapsed_time) + "분 전";
        }
        else {
            return "방금 전";
        }
    };
    MyPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-page',
            template: __webpack_require__(/*! ./my-page.component.html */ "./src/app/user/my-page/my-page.component.html"),
            styles: [__webpack_require__(/*! ./my-page.component.css */ "./src/app/user/my-page/my-page.component.css")]
        }),
        __metadata("design:paramtypes", [_uni_Service__WEBPACK_IMPORTED_MODULE_1__["UniService"]])
    ], MyPageComponent);
    return MyPageComponent;
}());



/***/ }),

/***/ "./src/app/user/my-page/profile/profile.component.css":
/*!************************************************************!*\
  !*** ./src/app/user/my-page/profile/profile.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    font-family: 'Jua', sans-serif;\r\n    width:90%;\r\n    height:350px;\r\n    padding:20px;\r\n    margin:50px 10px 0px 40px;\r\n    background-color:white;\r\n    border:1px solid #BBBBBB;\r\n    border-radius: 5px;\r\n}\r\n.profile_head{\r\n    font-size:30px;\r\n    text-align:center;\r\n}\r\n.profile_body{\r\n    margin-top:60px;\r\n    text-align:center;\r\n    height:130px;\r\n    font-size:22px;\r\n}\r\n.big-font{\r\n    font-size:35px;\r\n}\r\n.profile_footer{\r\n    text-align:center;\r\n}\r\n.change_btn{\r\n    margin:10px 5px;\r\n    padding:10px;\r\n    background-color:#212529;\r\n    color:#fed136;\r\n    border:0px;\r\n    border-radius: 5px;\r\n    font-family: 'Do Hyeon', sans-serif;\r\n    font-size:20px;\r\n}\r\n@media (max-width: 994px) {\r\n    .container{\r\n        width:100%;\r\n        margin:20px 0px;\r\n        padding:10px;\r\n\r\n    }\r\n    .change_btn{\r\n        margin:10px 10px;\r\n        padding:10px;\r\n        background-color:#212529;\r\n        color:#fed136;\r\n        border:0px;\r\n        border-radius: 5px;\r\n        font-family: 'Do Hyeon', sans-serif;\r\n        font-size:15px;\r\n    }\r\n    .col-lg-6{\r\n        padding:0px;\r\n    }\r\n}\r\n@media (max-width: 994px) {\r\n    .change_btn{\r\n        margin:10px 10px;\r\n        padding:10px;\r\n        background-color:#212529;\r\n        color:#fed136;\r\n        border:0px;\r\n        border-radius: 5px;\r\n        font-family: 'Do Hyeon', sans-serif;\r\n        font-size:15px;\r\n    }\r\n}\r\n"

/***/ }),

/***/ "./src/app/user/my-page/profile/profile.component.html":
/*!*************************************************************!*\
  !*** ./src/app/user/my-page/profile/profile.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"profile_head\"><span>프로필</span></div>\r\n  <div class=\"profile_body\">\r\n    계 정 <span *ngIf=\"data\" class=\"big-font\">{{data.id}}</span><br>\r\n    별 명 <span *ngIf=\"data\" class=\"big-font\">{{data.nickname}}</span>\r\n  </div>\r\n  <div class=\"profile_footer\">\r\n    <button (click)=\"editNick(nickname)\" class=\"change_btn\">별명 변경</button>\r\n    <button (click)=\"changePasswd(password)\" class=\"change_btn\">암호 변경</button>\r\n    <button class=\"change_btn\" (click)=\"logout()\">로그 아웃</button>\r\n  </div>\r\n</div>\r\n\r\n\r\n<ng-template #nickname let-nickModal>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">별명 바꾸기</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <form [formGroup]=\"nicknameForm\" (ngSubmit)=\"edit()\">\r\n  <div class=\"modal-body\">\r\n      <input id=\"nickname\" class=\"form-control\" formControlName=\"nickname\" placeholder=\"별명을 입력해주세요.\" required>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"submit\" class=\"btn btn-outline-dark\"  [disabled]=\"!nicknameForm.valid\">변경</button>\r\n  </div>\r\n</form>\r\n</ng-template>\r\n\r\n\r\n<ng-template #password let-passwdModal>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">암호 바꾸기</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <form [formGroup]=\"passwdChangeForm\" (ngSubmit)=\"change()\">\r\n    <div class=\"modal-body\">\r\n      <div class=\"form-group\">\r\n        <label>기존 암호</label>\r\n        <div class=\"input-group\">\r\n          <input type=\"password\" id=\"old_pw\" formControlName=\"old_pw\" class=\"form-control\">\r\n        </div>\r\n        <label>새 암호</label>\r\n        <div class=\"input-group\">\r\n          <input type=\"password\" id=\"new_pw\" formControlName=\"new_pw\" class=\"form-control\">\r\n        </div>\r\n        <label>한 번 더!</label>\r\n        <div class=\"input-group\">\r\n          <input type=\"password\" id=\"new_pwc\" formControlName=\"new_pwc\" class=\"form-control\">\r\n        </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"submit\" class=\"btn btn-outline-dark\" [disabled]=\"!passwdChangeForm.valid\">확인</button>\r\n  </div>\r\n</form>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/user/my-page/profile/profile.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/user/my-page/profile/profile.component.ts ***!
  \***********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _uni_Service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../uni.Service */ "./src/app/uni.Service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(modalService, fb, uniService) {
        this.modalService = modalService;
        this.fb = fb;
        this.uniService = uniService;
        this.nickname = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.nicknameForm = this.fb.group({
            nickname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[^ \t\r\n\v\f]*')])]
        });
        this.passwdChangeForm = this.fb.group({
            old_pw: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            new_pw: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            new_pwc: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent.prototype.logout = function () {
        localStorage.removeItem('token');
        location.href = "/";
    };
    ProfileComponent.prototype.editNick = function (content) {
        this.nicknameForm.reset();
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
        }, function (reason) {
        });
    };
    ProfileComponent.prototype.edit = function () {
        var _this = this;
        this.uniService.editNick(this.nicknameForm.value).subscribe(function (response) {
            alert("변경되었습니다.");
            _this.close();
            _this.nickname.emit('');
        }, function (error) { return console.log('error', error); });
        this.modalService.dismissAll();
    };
    ProfileComponent.prototype.change = function () {
        var _this = this;
        this.uniService.changePasswd(this.passwdChangeForm.value).subscribe(function (response) {
            if (response == "fail") {
                alert("기존의 암호가 일치하지 않습니다.");
                _this.close();
            }
            else {
                alert("변경되었습니다.");
                _this.close();
            }
        }, function (error) { return console.log('error', error); });
        this.modalService.dismissAll();
    };
    ProfileComponent.prototype.changePasswd = function (content) {
        this.passwdChangeForm.reset();
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
        }, function (reason) {
        });
    };
    ProfileComponent.prototype.close = function () {
        this.modalService.dismissAll();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProfileComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ProfileComponent.prototype, "nickname", void 0);
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/user/my-page/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/user/my-page/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _uni_Service__WEBPACK_IMPORTED_MODULE_3__["UniService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/user/my-page/timeline-fav/timeline-fav.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/user/my-page/timeline-fav/timeline-fav.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    font-family: 'Jua', sans-serif;\r\n    width:90%;\r\n    height:450px;\r\n    padding:20px;\r\n    margin:50px 10px 0px 40px;\r\n    border:1px solid #BBBBBB;\r\n    border-radius: 5px;\r\n    background-color:white;\r\n\r\n}\r\n.red{\r\n    color:red;\r\n    font-size:22px;\r\n}\r\n.fav-box{\r\n    width:90%;\r\n    height:300px;\r\n    margin:0 auto;\r\n    padding:10px 30px;\r\n    border:1px solid #AAAAAA;\r\n    border-bottom:0px;\r\n    overflow-y: auto;\r\n\r\n}\r\n.row{\r\n    border-bottom:1px solid #DDDDDD;\r\n    margin-bottom:10px;\r\n}\r\n.link{\r\n    color:black;\r\n\r\n}\r\n.link:hover{\r\n    text-decoration: none;\r\n    background-color:#DDDDDD;\r\n    transition: background-color 500ms linear;\r\n}\r\n.more-btn{\r\n    display: block;\r\n    width:90%;\r\n    margin:0 auto;\r\n    border:1px solid #AAAAAA;\r\n    background:white;\r\n}\r\n.small-font{\r\n    font-size:15px;\r\n    color:#999999;\r\n}\r\n.delete_btn{\r\n    height:100%;\r\n    border:0px;\r\n    background-color: transparent;\r\n}\r\n@media (max-width: 994px) {\r\n    .container{\r\n        width:100%;\r\n        margin:20px 0px;\r\n        padding:10px;\r\n\r\n    }\r\n    h2{\r\n        font-size:23px;\r\n    }\r\n\r\n}\r\n"

/***/ }),

/***/ "./src/app/user/my-page/timeline-fav/timeline-fav.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/user/my-page/timeline-fav/timeline-fav.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container text-center\">\r\n    <h2>좋아요 표시한 글 - 타임라인</h2>\r\n    <div class=\"fav-box\">\r\n      <div *ngFor=\"let post of data_; index as i\" class=\"row\">\r\n          <a class=\"col-10 link\"  href=\"{{post.url}}\" target=\"_blank\">\r\n            <strong>{{post.title}}</strong><br>\r\n            <span class=\"small-font\">{{post.after_date}}</span>\r\n            </a>\r\n          <div class=\"col-2\">\r\n              <button class=\"delete_btn\" (click)=\"unFav(i)\"><i class=\"far fa-times-circle red\"></i></button>\r\n          </div>\r\n        \r\n      </div>\r\n      <h4 *ngIf=\"is_empty\" style=\"margin-top:130px;\">좋아요를 표시한 글이 없어요!</h4>\r\n  </div>\r\n  <button class=\"more-btn\">더 보기..</button>\r\n\r\n  </div>"

/***/ }),

/***/ "./src/app/user/my-page/timeline-fav/timeline-fav.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/user/my-page/timeline-fav/timeline-fav.component.ts ***!
  \*********************************************************************/
/*! exports provided: TimelineFavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineFavComponent", function() { return TimelineFavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _uni_Service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../uni.Service */ "./src/app/uni.Service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TimelineFavComponent = /** @class */ (function () {
    function TimelineFavComponent(uniService) {
        this.uniService = uniService;
        this.is_empty = true;
        this.refresh = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(TimelineFavComponent.prototype, "data", {
        set: function (value) {
            if (value && value.length >= 1) {
                this.data_ = value;
                this.is_empty = false;
            }
            else {
                this.data_ = [];
                this.is_empty = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    TimelineFavComponent.prototype.ngOnInit = function () {
    };
    TimelineFavComponent.prototype.unFav = function (i) {
        var _this = this;
        var postData = {
            id: this.data_[i]._id,
            title: this.data_[i].title,
            url: this.data_[i].url,
            date: this.data_[i].date
        };
        this.uniService.unFavTimeline(postData).subscribe(function (response) {
            _this.refresh.emit('');
        }, function (error) { return console.log('error', error); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], TimelineFavComponent.prototype, "data", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], TimelineFavComponent.prototype, "refresh", void 0);
    TimelineFavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'timeline-fav',
            template: __webpack_require__(/*! ./timeline-fav.component.html */ "./src/app/user/my-page/timeline-fav/timeline-fav.component.html"),
            styles: [__webpack_require__(/*! ./timeline-fav.component.css */ "./src/app/user/my-page/timeline-fav/timeline-fav.component.css")]
        }),
        __metadata("design:paramtypes", [_uni_Service__WEBPACK_IMPORTED_MODULE_1__["UniService"]])
    ], TimelineFavComponent);
    return TimelineFavComponent;
}());



/***/ }),

/***/ "./src/app/user/setting/setting.component.css":
/*!****************************************************!*\
  !*** ./src/app/user/setting/setting.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.container{\r\n    margin-top:150px;\r\n    padding-top:10px;\r\n    background-color:white;\r\n    width:60%;\r\n    height:700px;\r\n    padding:50px;\r\n    border:1px solid #BBBBBB;\r\n    border-radius:10px;\r\n}\r\n\r\n.tag-box{\r\n    border:1px solid #BBBBBB;\r\n    border-radius: 5px;\r\n    padding :10px;\r\n}\r\n\r\n.tag{\r\n    padding:10px;\r\n    margin-right:10px;\r\n    margin-left:10px;\r\n    \r\n    border-radius:15px;\r\n    background-color:#DDDDDD;\r\n    font-size:18px;\r\n    font-weight: bold;\r\n}\r\n"

/***/ }),

/***/ "./src/app/user/setting/setting.component.html":
/*!*****************************************************!*\
  !*** ./src/app/user/setting/setting.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"></div>\r\n<ngb-tabset type=\"pills\" orientation=\"vertical\">\r\n    <ngb-tab title=\"Simple\">\r\n      <ng-template ngbTabContent>\r\n        <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth\r\n        master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh\r\n        dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum\r\n        iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\r\n      </ng-template>\r\n    </ngb-tab>\r\n    <ngb-tab>\r\n      <ng-template ngbTabTitle><b>Fancy</b> title</ng-template>\r\n      <ng-template ngbTabContent>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid.\r\n        <p>Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table\r\n        craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl\r\n        cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia\r\n        yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean\r\n        shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero\r\n        sint qui sapiente accusamus tattooed echo park.</p>\r\n      </ng-template>\r\n    </ngb-tab>\r\n    <ngb-tab title=\"Disabled\" [disabled]=\"true\">\r\n      <ng-template ngbTabContent>\r\n        <p>Sed commodo, leo at suscipit dictum, quam est porttitor sapien, eget sodales nibh elit id diam. Nulla facilisi. Donec egestas ligula vitae odio interdum aliquet. Duis lectus turpis, luctus eget tincidunt eu, congue et odio. Duis pharetra et nisl at faucibus. Quisque luctus pulvinar arcu, et molestie lectus ultrices et. Sed diam urna, egestas ut ipsum vel, volutpat volutpat neque. Praesent fringilla tortor arcu. Vivamus faucibus nisl enim, nec tristique ipsum euismod facilisis. Morbi ut bibendum est, eu tincidunt odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris aliquet odio ac lorem aliquet ultricies in eget neque. Phasellus nec tortor vel tellus pulvinar feugiat.</p>\r\n      </ng-template>\r\n    </ngb-tab>\r\n  </ngb-tabset>\r\n\r\n<!--\r\n<ng-template #content let-modal>\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title\" id=\"modal-basic-title\">글쓰기</h4>\r\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close('Save click')\">올리기</button>\r\n    </div>\r\n  </ng-template>\r\n\r\n\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n      <div class=\"col-sm sign-up\">\r\n          <h1>마이 페이지</h1>\r\n          <form  [formGroup]=\"signInForm\" (ngSubmit)=\"check()\">\r\n             <div class=\"form-group\">\r\n              <p><span> 별명 </span> <span class=\"text-muted small\">별명입니다.</span></p>\r\n              <input type=\"text\" width=\"80px\" formControlName=\"id\">\r\n            </div>    \r\n            <button class=\"btn btn-secondary\" type=\"button\" (click)=\"open(content)\">비밀번호 변경</button>\r\n       \r\n            <div class=\"form-group\">\r\n              <label class=\"control-label\" for=\"tag\">관심있는 태그</label><br>   \r\n              <div class=\"tag-box\">\r\n                <button class=\"btn btn-secondary\">#hi</button>\r\n                <label class=\"tag\">#hi</label>\r\n                <label class=\"tag\">#hi<span style=\"color:red\"> X</span></label>\r\n                <label class=\"tag\">#hi<span style=\"color:red\"> X</span></label>\r\n                <label class=\"tag\">#hi<span style=\"color:red\"> X</span></label>\r\n              </div>\r\n            </div>\r\n            <div class=\"d-flex justify-content-center\">\r\n              <button type=\"submit\" class=\"btn btn-secondary\">저장</button>\r\n            </div>          \r\n          </form>\r\n        </div>\r\n  </div>\r\n</div>\r\n-->"

/***/ }),

/***/ "./src/app/user/setting/setting.component.ts":
/*!***************************************************!*\
  !*** ./src/app/user/setting/setting.component.ts ***!
  \***************************************************/
/*! exports provided: SettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingComponent", function() { return SettingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingComponent = /** @class */ (function () {
    function SettingComponent(modalService) {
        this.modalService = modalService;
    }
    SettingComponent.prototype.ngOnInit = function () {
    };
    SettingComponent.prototype.open = function (content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
    };
    SettingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-setting',
            template: __webpack_require__(/*! ./setting.component.html */ "./src/app/user/setting/setting.component.html"),
            styles: [__webpack_require__(/*! ./setting.component.css */ "./src/app/user/setting/setting.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], SettingComponent);
    return SettingComponent;
}());



/***/ }),

/***/ "./src/app/user/start-sign-up/start-sign-up.component.css":
/*!****************************************************************!*\
  !*** ./src/app/user/start-sign-up/start-sign-up.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    border-radius:10px;\r\n    font-family: 'Nanum Pen Script', cursive;\r\n    font-family: 'Do Hyeon', sans-serif;\r\n    font-size:26px;\r\n}\r\n\r\nform { margin: 0px 10px; }\r\n\r\n.panel{\r\n  padding-top:20px;\r\n}\r\n\r\nh2 {\r\n  margin-top: 2px;\r\n  margin-bottom: 2px;\r\n}\r\n\r\n.font-small{\r\n  color:gray;\r\n  font-size:13px;\r\n}\r\n\r\n.container { \r\n  max-width: 360px; \r\n}\r\n\r\n.divider {\r\n  text-align: center;\r\n  margin-top: 20px;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.divider hr {\r\n  margin: 7px 0px;\r\n  width: 35%;\r\n}\r\n\r\n.left { float: left; }\r\n\r\n.right { float: right; }\r\n\r\n.question {\r\n    margin-bottom:10px;\r\n    width:100%;\r\n    height:30px;\r\n    font-size:20px;\r\n}"

/***/ }),

/***/ "./src/app/user/start-sign-up/start-sign-up.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/user/start-sign-up/start-sign-up.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\r\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js\"></script>\r\n<script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>\r\n<!------ Include the above in your HEAD tag ---------->\r\n\r\n<!DOCTYPE html>\r\n<!--\r\nTo change this license header, choose License Headers in Project Properties.\r\nTo change this template file, choose Tools | Templates\r\nand open the template in the editor.\r\n-->\r\n<html>\r\n    <head>\r\n        <title>eiei</title>\r\n        <!--<meta charset=\"UTF-8\">-->\r\n        <!--<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">-->\r\n        <!--<link href=\"css/regist.css\" rel=\"stylesheet\" type=\"text/css\"/>-->\r\n        <!--<link href='css/bootstrap.min.css' rel=\"stylesheet\">-->\r\n        <!--<meta charset=\"UTF-8\">-->\r\n        <!--<link rel=\"stylesheet\" href=\"//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css\">-->\r\n        <!--<link href='http://fonts.googleapis.com/css?family=Varela+Round' rel='stylesheet' type='text/css'>-->\r\n        <!--<script src=\"https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.13.1/jquery.validate.min.js\"></script>-->\r\n        <!--<meta name=\"viewport\" content=\"width=device-width, initial-scale=1, maximum-scale=1\" />-->\r\n\r\n        <!--<link href=\"css/regist.css\" rel=\"stylesheet\" type=\"text/css\"/>-->\r\n        <!--<link href='css/bootstrap.min.css' rel=\"stylesheet\">-->\r\n        <link href=\"https://fonts.googleapis.com/css?family=Do+Hyeon|Nanum+Pen+Script\" rel=\"stylesheet\">\r\n    </head>\r\n    <body>\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"panel panel-primary\">\r\n                    <div class=\"panel-body\">\r\n                        <form [formGroup]=\"signUpForm\" (ngSubmit)=\"registerNewUser()\">\r\n                            <div class=\"form-group\">\r\n                                <h2>계정 생성</h2>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label class=\"control-label\" for=\"signupName\">계정</label>\r\n                                <input id=\"signupName\" type=\"text\" maxlength=\"50\" class=\"form-control\" formControlName=\"user_id\">\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label class=\"control-label\" for=\"signupPassword\">암호</label>\r\n                                <input id=\"signupPassword\" type=\"password\" maxlength=\"25\" class=\"form-control\" placeholder=\"\" length=\"40\" formControlName=\"user_pw\">\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label class=\"control-label\" for=\"signupPasswordagain\">암호 재확인</label>\r\n                                <input id=\"signupPasswordagain\" type=\"password\" maxlength=\"25\" class=\"form-control\" formControlName=\"user_pwc\">\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label class=\"control-label\" for=\"signupPasswordagain\">본인 확인 질문</label><br>            \r\n                                <select class=\"question\" name=\"question\" formControlName=\"user_que\">\r\n                                    <option value=\"\">질문을 선택해주세요</option>\r\n                                    <option value=\"1\">나의 학과는?</option>\r\n                                    <option value=\"2\">나의 어머니 성함은?</option>\r\n                                    <option value=\"3\">나의 고향은?</option>\r\n                                    <option value=\"4\">나의 취미는?</option>\r\n                                    <option value=\"5\">나의 첫사랑은?</option>\r\n                                    <option value=\"6\">나의 아버지 성함은?</option>\r\n                                    <option value=\"7\">나의 라임오렌지 나무</option>\r\n\r\n                                </select>\r\n                                <input id=\"signupPassworquestion\" type=\"text\" maxlength=\"25\" class=\"form-control\" formControlName=\"user_ans\">\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <button id=\"signupSubmit\" type=\"submit\" class=\"btn btn-info btn-block\">계정 생성 하기</button>\r\n                            </div>\r\n                            <p class=\"form-group font-small\">생성된 계정은 2개월 간 접속하지 않을 경우 계정이 삭제됩니다.</p>\r\n                            <hr>\r\n                            <p>이미 계정이 있으신가요? <a href=\"#\">로그인</a></p>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </body>\r\n</html>\r\n"

/***/ }),

/***/ "./src/app/user/start-sign-up/start-sign-up.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/user/start-sign-up/start-sign-up.component.ts ***!
  \***************************************************************/
/*! exports provided: StartSignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartSignUpComponent", function() { return StartSignUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _uni_Service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../uni.Service */ "./src/app/uni.Service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StartSignUpComponent = /** @class */ (function () {
    function StartSignUpComponent(fb, uniService) {
        this.fb = fb;
        this.uniService = uniService;
        this.signUpForm = this.fb.group({
            user_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[^ \t\r\n\v\f]*')])],
            user_pw: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[^ \t\r\n\v\f]*')])],
            user_pwc: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[^ \t\r\n\v\f]*')])],
            user_que: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            user_ans: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    StartSignUpComponent.prototype.ngOnInit = function () {
        this.signUpForm.reset();
    };
    StartSignUpComponent.prototype.registerNewUser = function () {
        if (!this.signUpForm.valid) {
            alert("모든 정보를 입력해 주세요!");
        }
        else {
            this.userData = {
                user_id: this.signUpForm.value.user_id,
                user_pw: this.signUpForm.value.user_pw,
                user_que: this.signUpForm.value.user_que,
                user_ans: this.signUpForm.value.user_ans,
            };
            this.uniService.registerNewUser(this.userData).subscribe(function (response) {
                if (response == "Duplicate accounts") {
                    alert("중복된 계정입니다. 다시 입력해주세요.");
                }
                else {
                    alert("가입이 완료되었습니다.");
                    localStorage.setItem('token', response.access_token);
                    location.href = "/#/timeline";
                }
            }, function (error) { return console.log('이건 에러야 !!error', error); });
        }
    };
    StartSignUpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'start-sign-up',
            template: __webpack_require__(/*! ./start-sign-up.component.html */ "./src/app/user/start-sign-up/start-sign-up.component.html"),
            styles: [__webpack_require__(/*! ./start-sign-up.component.css */ "./src/app/user/start-sign-up/start-sign-up.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _uni_Service__WEBPACK_IMPORTED_MODULE_2__["UniService"]])
    ], StartSignUpComponent);
    return StartSignUpComponent;
}());



/***/ }),

/***/ "./src/app/user/userlist/userlist.component.css":
/*!******************************************************!*\
  !*** ./src/app/user/userlist/userlist.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    margin-top:100px;\r\n}"

/***/ }),

/***/ "./src/app/user/userlist/userlist.component.html":
/*!*******************************************************!*\
  !*** ./src/app/user/userlist/userlist.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h1>회원목록</h1>\r\n  <table class=\"table\">\r\n    <thead>\r\n      <tr>\r\n        <th scope=\"col\">번호</th>\r\n        <th scope=\"col\">계정</th>\r\n        <th scope=\"col\">본인 확인 질문</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let user of users; let i = index\">\r\n        <th scope=\"row\">{{i+1}}</th>\r\n        <th>{{user.id}}</th>\r\n        <th>{{user.que}}</th>\r\n      </tr>\r\n    </tbody>\r\n  </table>"

/***/ }),

/***/ "./src/app/user/userlist/userlist.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/user/userlist/userlist.component.ts ***!
  \*****************************************************/
/*! exports provided: UserlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserlistComponent", function() { return UserlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _uni_Service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../uni.Service */ "./src/app/uni.Service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserlistComponent = /** @class */ (function () {
    function UserlistComponent(uniService) {
        this.uniService = uniService;
        this.isAdmin = false;
    }
    UserlistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.uniService.getUserDetail().subscribe(function (response) {
            if (!response || response.rank != 10) {
                alert("잘못된 접근입니다!");
                location.href = "/#/";
            }
            else {
                _this.uniService.loadUserList().subscribe(function (response) {
                    _this.users = JSON.parse(response);
                }, function (error) { return console.log('error', error); });
            }
        }, function (error) { return console.log('이건 에러야 !!error', error); });
    };
    UserlistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-userlist',
            template: __webpack_require__(/*! ./userlist.component.html */ "./src/app/user/userlist/userlist.component.html"),
            styles: [__webpack_require__(/*! ./userlist.component.css */ "./src/app/user/userlist/userlist.component.css")]
        }),
        __metadata("design:paramtypes", [_uni_Service__WEBPACK_IMPORTED_MODULE_1__["UniService"]])
    ], UserlistComponent);
    return UserlistComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\YJ\pookle\client\UNI\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map