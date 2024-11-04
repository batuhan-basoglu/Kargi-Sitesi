(self["webpackChunkwebsitePractise"] = self["webpackChunkwebsitePractise"] || []).push([["main"],{

/***/ 2145:
/*!************************************************!*\
  !*** ./src/app/anasayfa/anasayfa.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnasayfaComponent: () => (/* binding */ AnasayfaComponent)
/* harmony export */ });
/* harmony import */ var _anasayfa_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anasayfa.component.html?ngResource */ 4398);
/* harmony import */ var _anasayfa_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./anasayfa.component.css?ngResource */ 1507);
/* harmony import */ var _anasayfa_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_anasayfa_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let AnasayfaComponent = class AnasayfaComponent {
  constructor() {
    this.header = {};
  }
  ngOnInit() {}
  getHeader() {}
  static {
    this.ctorParameters = () => [];
  }
};
AnasayfaComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-anasayfa',
  template: _anasayfa_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_anasayfa_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], AnasayfaComponent);


/***/ }),

/***/ 4114:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _hizmetlerimiz_hizmetlerimiz_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hizmetlerimiz/hizmetlerimiz.component */ 4152);
/* harmony import */ var _siteg_rselleri_siteg_rselleri_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sitegörselleri/sitegörselleri.component */ 2590);
/* harmony import */ var _genelkurul_genelkurul_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./genelkurul/genelkurul.component */ 6966);
/* harmony import */ var _kurumsal_kurumsal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./kurumsal/kurumsal.component */ 3634);
/* harmony import */ var _iletisim_iletisim_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./iletisim/iletisim.component */ 1150);
/* harmony import */ var _anasayfa_anasayfa_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./anasayfa/anasayfa.component */ 2145);
/* harmony import */ var _faaliyet_faaliyet_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./faaliyet/faaliyet.component */ 6744);
/* harmony import */ var _duyurular_duyurular_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./duyurular/duyurular.component */ 3632);
/* harmony import */ var _duyurular_duyuru1_duyuru1_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./duyurular/duyuru1/duyuru1.component */ 4476);
/* harmony import */ var _duyurular_duyuru2_duyuru2_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./duyurular/duyuru2/duyuru2.component */ 1744);
/* harmony import */ var _duyurular_duyuru3_duyuru3_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./duyurular/duyuru3/duyuru3.component */ 6884);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};














const routes = [{
  path: '',
  redirectTo: '/Anasayfa',
  pathMatch: 'full'
}, {
  path: 'Anasayfa',
  component: _anasayfa_anasayfa_component__WEBPACK_IMPORTED_MODULE_5__.AnasayfaComponent
}, {
  path: 'Kurumsal',
  component: _kurumsal_kurumsal_component__WEBPACK_IMPORTED_MODULE_3__.KurumsalComponent
}, {
  path: 'Hizmetlerimiz',
  component: _hizmetlerimiz_hizmetlerimiz_component__WEBPACK_IMPORTED_MODULE_0__.HizmetlerimizComponent
}, {
  path: 'Sitegörselleri',
  component: _siteg_rselleri_siteg_rselleri_component__WEBPACK_IMPORTED_MODULE_1__["SitegörselleriComponent"]
}, {
  path: 'Duyurular',
  component: _duyurular_duyurular_component__WEBPACK_IMPORTED_MODULE_7__.DuyurularComponent
}, {
  path: 'Duyurular/Duyuru1',
  component: _duyurular_duyuru1_duyuru1_component__WEBPACK_IMPORTED_MODULE_8__.Duyuru1Component
}, {
  path: 'Duyurular/Duyuru2',
  component: _duyurular_duyuru2_duyuru2_component__WEBPACK_IMPORTED_MODULE_9__.Duyuru2Component
}, {
  path: 'Duyurular/Duyuru3',
  component: _duyurular_duyuru3_duyuru3_component__WEBPACK_IMPORTED_MODULE_10__.Duyuru3Component
}, {
  path: 'Genelkurul',
  component: _genelkurul_genelkurul_component__WEBPACK_IMPORTED_MODULE_2__.GenelkurulComponent
}, {
  path: 'Faaliyet',
  component: _faaliyet_faaliyet_component__WEBPACK_IMPORTED_MODULE_6__.FaaliyetComponent
}, {
  path: 'Iletisim',
  component: _iletisim_iletisim_component__WEBPACK_IMPORTED_MODULE_4__.IletisimComponent
}];
let AppRoutingModule = class AppRoutingModule {};
AppRoutingModule = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule.forRoot(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule],
  declarations: []
})], AppRoutingModule);


/***/ }),

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 1584);
/* harmony import */ var _app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.css?ngResource */ 309);
/* harmony import */ var _app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let AppComponent = class AppComponent {
  constructor() {
    this.title = 'Kargi-Sitesi';
  }
};
AppComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-root',
  template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], AppComponent);


/***/ }),

/***/ 635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _hizmetlerimiz_hizmetlerimiz_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hizmetlerimiz/hizmetlerimiz.component */ 4152);
/* harmony import */ var _siteg_rselleri_siteg_rselleri_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sitegörselleri/sitegörselleri.component */ 2590);
/* harmony import */ var _genelkurul_genelkurul_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./genelkurul/genelkurul.component */ 6966);
/* harmony import */ var _faaliyet_faaliyet_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./faaliyet/faaliyet.component */ 6744);
/* harmony import */ var _kurumsal_kurumsal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./kurumsal/kurumsal.component */ 3634);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ 708);
/* harmony import */ var _duyurular_duyurular_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./duyurular/duyurular.component */ 3632);
/* harmony import */ var _iletisim_iletisim_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./iletisim/iletisim.component */ 1150);
/* harmony import */ var _anasayfa_anasayfa_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./anasayfa/anasayfa.component */ 2145);
/* harmony import */ var _social_social_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./social/social.component */ 8880);
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./navigation/navigation.component */ 5150);
/* harmony import */ var _duyurular_duyuru1_duyuru1_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./duyurular/duyuru1/duyuru1.component */ 4476);
/* harmony import */ var _duyurular_duyuru2_duyuru2_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./duyurular/duyuru2/duyuru2.component */ 1744);
/* harmony import */ var _duyurular_duyuru3_duyuru3_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./duyurular/duyuru3/duyuru3.component */ 6884);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app-routing.module */ 4114);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _services_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services.service */ 8798);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common/http */ 6443);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















/*import { AgmCoreModule } from '@agm/core';*/ //AGM Module is deprecated.



let AppModule = class AppModule {};
AppModule = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_17__.NgModule)({
  declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _hizmetlerimiz_hizmetlerimiz_component__WEBPACK_IMPORTED_MODULE_1__.HizmetlerimizComponent, _siteg_rselleri_siteg_rselleri_component__WEBPACK_IMPORTED_MODULE_2__["SitegörselleriComponent"], _genelkurul_genelkurul_component__WEBPACK_IMPORTED_MODULE_3__.GenelkurulComponent, _faaliyet_faaliyet_component__WEBPACK_IMPORTED_MODULE_4__.FaaliyetComponent, _kurumsal_kurumsal_component__WEBPACK_IMPORTED_MODULE_5__.KurumsalComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__.FooterComponent, _iletisim_iletisim_component__WEBPACK_IMPORTED_MODULE_8__.IletisimComponent, _duyurular_duyurular_component__WEBPACK_IMPORTED_MODULE_7__.DuyurularComponent, _anasayfa_anasayfa_component__WEBPACK_IMPORTED_MODULE_9__.AnasayfaComponent, _duyurular_duyuru1_duyuru1_component__WEBPACK_IMPORTED_MODULE_12__.Duyuru1Component, _duyurular_duyuru2_duyuru2_component__WEBPACK_IMPORTED_MODULE_13__.Duyuru2Component, _duyurular_duyuru3_duyuru3_component__WEBPACK_IMPORTED_MODULE_14__.Duyuru3Component, _social_social_component__WEBPACK_IMPORTED_MODULE_10__.SocialComponent, _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_11__.NavigationComponent],
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
  imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.ReactiveFormsModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_15__.AppRoutingModule
  /*AgmCoreModule.forRoot({
          apiKey: 'AIzaSyC5TiZoTEwEcB_HUZRhe_rXrcSWW1Z5x8I'
      })*/ //AGM Module is deprecated.
  ],
  providers: [_services_service__WEBPACK_IMPORTED_MODULE_16__.ServicesService, (0,_angular_common_http__WEBPACK_IMPORTED_MODULE_20__.provideHttpClient)((0,_angular_common_http__WEBPACK_IMPORTED_MODULE_20__.withInterceptorsFromDi)())]
})], AppModule);


/***/ }),

/***/ 4476:
/*!********************************************************!*\
  !*** ./src/app/duyurular/duyuru1/duyuru1.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Duyuru1Component: () => (/* binding */ Duyuru1Component)
/* harmony export */ });
/* harmony import */ var _duyuru1_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./duyuru1.component.html?ngResource */ 9784);
/* harmony import */ var _duyuru1_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duyuru1.component.css?ngResource */ 3549);
/* harmony import */ var _duyuru1_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_duyuru1_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let Duyuru1Component = class Duyuru1Component {
  constructor() {}
  ngOnInit() {}
  static {
    this.ctorParameters = () => [];
  }
};
Duyuru1Component = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: "app-duyuru1",
  template: _duyuru1_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_duyuru1_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], Duyuru1Component);


/***/ }),

/***/ 1744:
/*!********************************************************!*\
  !*** ./src/app/duyurular/duyuru2/duyuru2.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Duyuru2Component: () => (/* binding */ Duyuru2Component)
/* harmony export */ });
/* harmony import */ var _duyuru2_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./duyuru2.component.html?ngResource */ 3428);
/* harmony import */ var _duyuru2_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duyuru2.component.css?ngResource */ 7121);
/* harmony import */ var _duyuru2_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_duyuru2_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let Duyuru2Component = class Duyuru2Component {
  constructor() {}
  ngOnInit() {}
  static {
    this.ctorParameters = () => [];
  }
};
Duyuru2Component = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: "app-duyuru2",
  template: _duyuru2_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_duyuru2_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], Duyuru2Component);


/***/ }),

/***/ 6884:
/*!********************************************************!*\
  !*** ./src/app/duyurular/duyuru3/duyuru3.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Duyuru3Component: () => (/* binding */ Duyuru3Component)
/* harmony export */ });
/* harmony import */ var _duyuru3_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./duyuru3.component.html?ngResource */ 9616);
/* harmony import */ var _duyuru3_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duyuru3.component.css?ngResource */ 8061);
/* harmony import */ var _duyuru3_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_duyuru3_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let Duyuru3Component = class Duyuru3Component {
  constructor() {}
  ngOnInit() {}
  static {
    this.ctorParameters = () => [];
  }
};
Duyuru3Component = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: "app-duyuru3",
  template: _duyuru3_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_duyuru3_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], Duyuru3Component);


/***/ }),

/***/ 3632:
/*!**************************************************!*\
  !*** ./src/app/duyurular/duyurular.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DuyurularComponent: () => (/* binding */ DuyurularComponent)
/* harmony export */ });
/* harmony import */ var _duyurular_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./duyurular.component.html?ngResource */ 1776);
/* harmony import */ var _duyurular_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duyurular.component.css?ngResource */ 6417);
/* harmony import */ var _duyurular_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_duyurular_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let DuyurularComponent = class DuyurularComponent {
  constructor() {
    this.imgSrc = "assets/images/duyuru-images/duyuru.jpg";
    this.imgSrc2 = "assets/images/duyuru-images/duyuru.jpg";
    this.imgSrc3 = "assets/images/duyuru-images/duyuru.jpg";
  }
  ngOnInit() {}
  onMouseOver() {
    this.imgSrc = "assets/images/duyuru-images/duyuru-2.jpg";
  }
  onMouseOut() {
    this.imgSrc = "assets/images/duyuru-images/duyuru.jpg";
  }
  onMouseOver2() {
    this.imgSrc2 = "assets/images/duyuru-images/duyuru-2.jpg";
  }
  onMouseOut2() {
    this.imgSrc2 = "assets/images/duyuru-images/duyuru.jpg";
  }
  onMouseOver3() {
    this.imgSrc3 = "assets/images/duyuru-images/duyuru-2.jpg";
  }
  onMouseOut3() {
    this.imgSrc3 = "assets/images/duyuru-images/duyuru.jpg";
  }
  static {
    this.ctorParameters = () => [];
  }
};
DuyurularComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-duyurular',
  template: _duyurular_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_duyurular_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], DuyurularComponent);


/***/ }),

/***/ 6744:
/*!************************************************!*\
  !*** ./src/app/faaliyet/faaliyet.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FaaliyetComponent: () => (/* binding */ FaaliyetComponent)
/* harmony export */ });
/* harmony import */ var _faaliyet_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./faaliyet.component.html?ngResource */ 3008);
/* harmony import */ var _faaliyet_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./faaliyet.component.css?ngResource */ 3121);
/* harmony import */ var _faaliyet_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_faaliyet_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let FaaliyetComponent = class FaaliyetComponent {
  constructor() {}
  ngOnInit() {}
  static {
    this.ctorParameters = () => [];
  }
};
FaaliyetComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: "app-faaliyet",
  template: _faaliyet_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_faaliyet_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], FaaliyetComponent);


/***/ }),

/***/ 708:
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _footer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.component.html?ngResource */ 6756);
/* harmony import */ var _footer_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.component.css?ngResource */ 9401);
/* harmony import */ var _footer_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_footer_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let FooterComponent = class FooterComponent {
  constructor() {
    this.lat = 8.988759;
    this.lng = 38.788968;
  }
  ngOnInit() {}
  static {
    this.ctorParameters = () => [];
  }
};
FooterComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: "app-footer",
  template: _footer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_footer_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], FooterComponent);


/***/ }),

/***/ 6966:
/*!****************************************************!*\
  !*** ./src/app/genelkurul/genelkurul.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GenelkurulComponent: () => (/* binding */ GenelkurulComponent)
/* harmony export */ });
/* harmony import */ var _genelkurul_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./genelkurul.component.html?ngResource */ 3046);
/* harmony import */ var _genelkurul_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./genelkurul.component.css?ngResource */ 7695);
/* harmony import */ var _genelkurul_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_genelkurul_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let GenelkurulComponent = class GenelkurulComponent {
  constructor() {}
  ngOnInit() {}
  static {
    this.ctorParameters = () => [];
  }
};
GenelkurulComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: "app-genelkurul",
  template: _genelkurul_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_genelkurul_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], GenelkurulComponent);


/***/ }),

/***/ 4152:
/*!**********************************************************!*\
  !*** ./src/app/hizmetlerimiz/hizmetlerimiz.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HizmetlerimizComponent: () => (/* binding */ HizmetlerimizComponent)
/* harmony export */ });
/* harmony import */ var _hizmetlerimiz_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hizmetlerimiz.component.html?ngResource */ 8800);
/* harmony import */ var _hizmetlerimiz_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hizmetlerimiz.component.css?ngResource */ 4457);
/* harmony import */ var _hizmetlerimiz_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_hizmetlerimiz_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let HizmetlerimizComponent = class HizmetlerimizComponent {
  constructor() {}
  ngOnInit() {}
  static {
    this.ctorParameters = () => [];
  }
};
HizmetlerimizComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: "app-intro",
  template: _hizmetlerimiz_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_hizmetlerimiz_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], HizmetlerimizComponent);


/***/ }),

/***/ 1150:
/*!************************************************!*\
  !*** ./src/app/iletisim/iletisim.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IletisimComponent: () => (/* binding */ IletisimComponent)
/* harmony export */ });
/* harmony import */ var _iletisim_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./iletisim.component.html?ngResource */ 5678);
/* harmony import */ var _iletisim_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iletisim.component.css?ngResource */ 5587);
/* harmony import */ var _iletisim_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_iletisim_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services.service */ 8798);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let IletisimComponent = class IletisimComponent {
  constructor(builder, contact) {
    this.builder = builder;
    this.contact = contact;
    this.lat = 37.00850309346716;
    this.lng = 27.32525836435135;
  }
  ngOnInit() {
    this.FormData = this.builder.group({
      Name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
      Email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email])]),
      Phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern("^[0-9]*$")]),
      Message: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required])
    });
  }
  get Name() {
    return this.FormData.get('Name');
  }
  get Email() {
    return this.FormData.get('Email');
  }
  get Phone() {
    return this.FormData.get('Phone');
  }
  get Message() {
    return this.FormData.get('Message');
  }
  onSubmit(FormData) {
    console.log(FormData);
    this.contact.PostMessage(FormData).subscribe(response => {
      location.href = 'https://mailthis.to/confirm';
      console.log(response);
    }, error => {
      console.warn(error.responseText);
      console.log({
        error
      });
    });
  }
  static {
    this.ctorParameters = () => [{
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormBuilder
    }, {
      type: _services_service__WEBPACK_IMPORTED_MODULE_2__.ServicesService
    }];
  }
};
IletisimComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-iletisim',
  template: _iletisim_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_iletisim_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], IletisimComponent);


/***/ }),

/***/ 3634:
/*!************************************************!*\
  !*** ./src/app/kurumsal/kurumsal.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KurumsalComponent: () => (/* binding */ KurumsalComponent)
/* harmony export */ });
/* harmony import */ var _kurumsal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kurumsal.component.html?ngResource */ 9690);
/* harmony import */ var _kurumsal_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./kurumsal.component.css?ngResource */ 9055);
/* harmony import */ var _kurumsal_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_kurumsal_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let KurumsalComponent = class KurumsalComponent {
  constructor() {}
  ngOnInit() {}
  static {
    this.ctorParameters = () => [];
  }
};
KurumsalComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-kurumsal',
  template: _kurumsal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_kurumsal_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], KurumsalComponent);


/***/ }),

/***/ 5150:
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavigationComponent: () => (/* binding */ NavigationComponent)
/* harmony export */ });
/* harmony import */ var _navigation_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigation.component.html?ngResource */ 9230);
/* harmony import */ var _navigation_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navigation.component.css?ngResource */ 8091);
/* harmony import */ var _navigation_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_navigation_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let NavigationComponent = class NavigationComponent {
  constructor() {
    this.activetab = "home";
  }
  ngOnInit() {}
  getActiveTab(tabname) {
    this.activetab = tabname;
  }
  static {
    this.ctorParameters = () => [];
  }
};
NavigationComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: "app-navigation",
  template: _navigation_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_navigation_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], NavigationComponent);


/***/ }),

/***/ 8798:
/*!*************************************!*\
  !*** ./src/app/services.service.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServicesService: () => (/* binding */ ServicesService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 5443);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let ServicesService = class ServicesService {
  constructor(http) {
    this.http = http;
    this.mailApi = 'https://mailthis.to/kargisitesi@gmail.com';
  }
  PostMessage(input) {
    return this.http.post(this.mailApi, input, {
      responseType: 'text'
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(response => {
      if (response) {
        return response;
      }
    }, error => {
      return error;
    }));
  }
  static {
    this.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
    }];
  }
};
ServicesService = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
  providedIn: 'root'
})], ServicesService);


/***/ }),

/***/ 2590:
/*!************************************************************!*\
  !*** ./src/app/sitegörselleri/sitegörselleri.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SitegörselleriComponent": () => (/* binding */ SitegörselleriComponent)
/* harmony export */ });
/* harmony import */ var _siteg_rselleri_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sitegörselleri.component.html?ngResource */ 7494);
/* harmony import */ var _siteg_rselleri_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sitegörselleri.component.css?ngResource */ 7783);
/* harmony import */ var _siteg_rselleri_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_siteg_rselleri_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let SitegörselleriComponent = class SitegörselleriComponent {
  constructor() {}
  ngOnInit() {}
  static {
    this.ctorParameters = () => [];
  }
};
SitegörselleriComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: "app-sitegörselleri",
  template: _siteg_rselleri_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_siteg_rselleri_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], SitegörselleriComponent);


/***/ }),

/***/ 8880:
/*!********************************************!*\
  !*** ./src/app/social/social.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SocialComponent: () => (/* binding */ SocialComponent)
/* harmony export */ });
/* harmony import */ var _social_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./social.component.html?ngResource */ 7608);
/* harmony import */ var _social_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./social.component.css?ngResource */ 241);
/* harmony import */ var _social_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_social_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let SocialComponent = class SocialComponent {
  constructor() {}
  ngOnInit() {}
  static {
    this.ctorParameters = () => [];
  }
};
SocialComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-social',
  template: _social_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_social_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], SocialComponent);


/***/ }),

/***/ 5312:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 2476);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 635);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 5312);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.log(err));

/***/ }),

/***/ 1507:
/*!************************************************************!*\
  !*** ./src/app/anasayfa/anasayfa.component.css?ngResource ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 3142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 5950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 309:
/*!**********************************************!*\
  !*** ./src/app/app.component.css?ngResource ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 3142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ 5950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `
`, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 3549:
/*!********************************************************************!*\
  !*** ./src/app/duyurular/duyuru1/duyuru1.component.css?ngResource ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 3142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 5950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 7121:
/*!********************************************************************!*\
  !*** ./src/app/duyurular/duyuru2/duyuru2.component.css?ngResource ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 3142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 5950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 8061:
/*!********************************************************************!*\
  !*** ./src/app/duyurular/duyuru3/duyuru3.component.css?ngResource ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 3142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 5950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 6417:
/*!**************************************************************!*\
  !*** ./src/app/duyurular/duyurular.component.css?ngResource ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 3142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 5950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 3121:
/*!************************************************************!*\
  !*** ./src/app/faaliyet/faaliyet.component.css?ngResource ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 3142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 5950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 9401:
/*!********************************************************!*\
  !*** ./src/app/footer/footer.component.css?ngResource ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 3142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 5950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `a img:hover {
    opacity: 0.7;
}`, "",{"version":3,"sources":["webpack://./src/app/footer/footer.component.css"],"names":[],"mappings":"AAAA;IACI,YAAY;AAChB","sourcesContent":["a img:hover {\n    opacity: 0.7;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 7695:
/*!****************************************************************!*\
  !*** ./src/app/genelkurul/genelkurul.component.css?ngResource ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 3142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 5950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 4457:
/*!**********************************************************************!*\
  !*** ./src/app/hizmetlerimiz/hizmetlerimiz.component.css?ngResource ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 3142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 5950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 5587:
/*!************************************************************!*\
  !*** ./src/app/iletisim/iletisim.component.css?ngResource ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 3142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 5950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `agm-map {
    height: 300px;
}

.fcf-form-wrap {
    max-width: 500px;
    padding: 30px;
    border-radius: 4px;
    background-color: #ffffff;
}

#fcf-form {
    background-color: #ffffff;
    color: #363636;
}

.button.is-link {
    background-color: #363636;
    border-color: transparent;
    color: #ffffff;
}

.button.is-link:hover {
    background-color: #808080;
    color: #ffffff;
    border-color: transparent;
}

.button.is-link[disabled] {
    background-color: #808080;
    border-color: transparent;
    box-shadow: none;
}

`, "",{"version":3,"sources":["webpack://./src/app/iletisim/iletisim.component.css"],"names":[],"mappings":"AAAA;IACI,aAAa;AACjB;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,kBAAkB;IAClB,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;IACzB,cAAc;AAClB;;AAEA;IACI,yBAAyB;IACzB,yBAAyB;IACzB,cAAc;AAClB;;AAEA;IACI,yBAAyB;IACzB,cAAc;IACd,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;IACzB,yBAAyB;IACzB,gBAAgB;AACpB","sourcesContent":["agm-map {\n    height: 300px;\n}\n\n.fcf-form-wrap {\n    max-width: 500px;\n    padding: 30px;\n    border-radius: 4px;\n    background-color: #ffffff;\n}\n\n#fcf-form {\n    background-color: #ffffff;\n    color: #363636;\n}\n\n.button.is-link {\n    background-color: #363636;\n    border-color: transparent;\n    color: #ffffff;\n}\n\n.button.is-link:hover {\n    background-color: #808080;\n    color: #ffffff;\n    border-color: transparent;\n}\n\n.button.is-link[disabled] {\n    background-color: #808080;\n    border-color: transparent;\n    box-shadow: none;\n}\n\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 9055:
/*!************************************************************!*\
  !*** ./src/app/kurumsal/kurumsal.component.css?ngResource ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 3142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 5950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 8091:
/*!****************************************************************!*\
  !*** ./src/app/navigation/navigation.component.css?ngResource ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 3142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 5950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 7783:
/*!************************************************************************!*\
  !*** ./src/app/sitegörselleri/sitegörselleri.component.css?ngResource ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 3142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 5950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 241:
/*!********************************************************!*\
  !*** ./src/app/social/social.component.css?ngResource ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 3142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 5950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 4398:
/*!*************************************************************!*\
  !*** ./src/app/anasayfa/anasayfa.component.html?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<header id=\"banner\" class=\"scrollto clearfix\" data-enllax-ratio=\".5\">\n  <!--Banner Content-->\n  <div id=\"banner-content\" class=\"row clearfix\">\n\n    <div class=\"row clearfix\">\n\n      <div class=\"section-heading\">\n        <h1>Kargı Sitesi</h1>\n        <h2></h2>\n        <p class=\"section-subtitle-2\">SEVGİLİ KOMŞULARIMIZ</p>\n        <p class=\"section-subtitle-2\">\n          Bodrum, iklimi, denizi, ışığı ile huzurun kapısını bize açan belde. Pekçoğumuzunu büyük şehirlerin karmaşasından kaçıp sığındığı evlerimizin olduğu Kargı, Camel Beach ise ayrı bir alem.. Bölgenin en güzel denizi vahşi tabiatı, her anlamda başka yerlerde rastlanamayacak insan dokusuyla söylensek de kızsak da vazgeçemediğimiz.\n          Muhteşem denizli üç koya açılan kıyıları, denize kavuşan dereleri, her mevsim şahane iklimi görüp; çorak yolu bile olmayan tepelere ev yapmayı hayal edenlerin o günkü şartlarda altyapısı, düzeni ile bir inanılmazı yarattıkları yer.\n          Her iş yapan hata da yapabilir, doğaldır diye düşünürüz. Evler bazı bölgelerde bu kadar sıkışık olmasaydı , alt üst katlar yerine daha küçük ama müstakil evler olsaydı dediğimiz ama bazı şeylerin değişmesinin mümkün olmadığı ancak düzeltilebilineceğine inandığımız bölgenin en iyi yerleşimlerinden biri. \n          Eleştirdiğimiz, bakımsız, ileriye dönük bir planın varlığını hissedemememiz, hergeçengün çöktüğünü gözlemlediğimiz altyapı, işletmecilerin insafına bırakılmış kıyıları ile çaresiz, Sitemiz. Madem vazgeçemiyoruz beğenmediğimiz yanları düzeltmeye çalışalım elimizi taşın altına koymaktan korkmayalım dedik ve yola çıktık.\n          Huzurlu yaşamak için komşuların haklarına saygılı, bir düzenin hüküm sürdüğü, kuralların hakları korumak için ve huzurun anahtarı olduğunu anlatma gayretindeyiz. Kuralların takipçisi olunduğunda kural çiğneyenlerin, eski alışkanlıkları sürdürmek isteyenlerin sesleri her nedense fazla duyulur. Ayrıcalık değil, genel menfaat ve huzurun öncelikli olarak hakim olacağının altını bir kez daha çizmekte fayda var. Kural çiğneyenlerin bilmesi gereken huzur için gereken kurallara herkes gibi onların da birgün ihtiyaç duyacağıdır. Bu anlamda iletişim en büyük eksiğimizdi. İş güç ve çaresiz sık sık yaptığımız genel kurulların ağır stresi ve iş yoğunluğu sebebi ile ihmale uğramış web sitemiz bundan böyle hizmet verecek.\n          Yaplan işleri, yanlışları, gözlemlenen güzellikleri üyelerimizin mutlu günlerini , paylaşmak istedikleri bilgileri burada sizlerle paylaşacağız. Aidat ve hesap durumlarınıza sadece size ait şifre ile ulaşarak durum güncellemesi yapmanız, yapılan uygulama değişiklikleri hakkında bilgi sahibi olmanız mümkün olacak. Zaman içinde sitemizin sizlerin istediği doğrultuda hizmetleri vermesi yine sizlerin talebiyle oluşturulacaktır. Sizlerin beldemiz ile ilgili sunacağınız yapıcı eleştiri ve fikirlerinizden faydalanmaya gayret edeceğiz.\n          Kargı Sitemiz sizlerin, bizlerin ve burada yaşayanlarındır. Birlikte olursak daha iyiye daha güzele ulaşmak Zor olmayacaktır.\n          Kargı Sitesi web sayfasının hayırlı olmasını diliyor, hepinize şahsım, yönetim ve denetim kurullarımız adına sevgi ve saygılarımızı sunuyorum.\n        </p>\n        <br>\n        <p class=\"section-subtitle-2\">Kargı Sitesi Yönetim Kurulu Başkanı</p>\n        <p class=\"section-subtitle-2\">Kamuran Başoğlu</p>\n      </div>\n\n      <!--Call to Action-->\n      <a href=\"/Hizmetlerimiz\" class=\"button\">Daha Fazla Bilgi</a>\n      <!--End Call to Action-->\n\n    </div>\n  </div>\n  <!--End of Row-->\n</header>\n";

/***/ }),

/***/ 1584:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"page-border\" data-wow-duration=\"0.7s\" data-wow-delay=\"0.2s\">\n  <div\n    class=\"top-border wow fadeInDown animated\"\n    style=\"visibility: visible; animation-name: fadeInDown\"\n  ></div>\n  <div\n    class=\"right-border wow fadeInRight animated\"\n    style=\"visibility: visible; animation-name: fadeInRight\"\n  ></div>\n  <div\n    class=\"bottom-border wow fadeInUp animated\"\n    style=\"visibility: visible; animation-name: fadeInUp\"\n  ></div>\n  <div\n    class=\"left-border wow fadeInLeft animated\"\n    style=\"visibility: visible; animation-name: fadeInLeft\"\n  ></div>\n</div>\n<!--Main Content Area-->\n<main id=\"content\">\n  <app-navigation></app-navigation>\n  <router-outlet></router-outlet>\n  <app-footer></app-footer>\n</main>\n<!--End Main Content Area-->\n";

/***/ }),

/***/ 9784:
/*!*********************************************************************!*\
  !*** ./src/app/duyurular/duyuru1/duyuru1.component.html?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<!--Content Section-->\n<div id=\"duyuru-1\" class=\"scrollto clearfix\">\n  <div class=\"row no-padding-bottom clearfix\">\n    <div class=\"col-2\">\n      <div class=\"section-heading\">\n        <h2 class=\"section-title\">COVID-19 Duyurusu</h2>\n        <p class=\"section-subtitle\">\n          Covid-19 (Corona) virüsü ile etkin mücadele sağlanabilmesi, halkımızın ve personelimizin sağlığının\n          korunabilmesi amacıyla birtakım tedbirler almak zorundayız.<br>\n          <br>\n          1- Ellerinizi sık sık su ve sabun ile en az 20 saniye boyunca ovarak yıkayın.<br>\n          2- Soğuk algınlığı belirtileri gösteren kișilerle aranıza en az 3-4 adım mesafe koyun.<br>\n          3- Öksürme veya hapșırma sırasında ağız ve burunu tek kullanımlık mendille kapatın. Mendil yoksa dirseğin\n          iç kısmını kullanın.<br>\n          4- Tokalașma, sarılma gibi yakın temaslardan kaçının.<br>\n          5- Ellerinizle gözlerinize, ağzınıza ve burnunuza dokunmayın.<br>\n          6- Yurt dıșı seyahatlerinizi iptal edin ya da erteleyin.<br>\n          7- Yurt dıșından dönüște ilk 14 günü evinizde geçirin.<br>\n          8- Bulunduğunuz ortamları sık sık havalandırın.<br>\n          9- Kıyafetlerinizi 60-90OC’de normal deterjanla yıkayın.<br>\n          10- Kapı kolları, armatürler, lavabolar gibi sık kullandığınız yüzeyleri su ve deterjanla her gün\n          temizleyin.<br>\n          11- Soğuk algınlığı belirtileriniz varsa yașlılar ve kronik hastalığı olanlarla temas etmeyin, maske\n          takmadan dıșarı çıkmayın.<br>\n          12- Havlu gibi kișisel eșyalarınızı ortak kullanmayın.<br>\n          13- Bol sıvı tüketin, dengeli beslenin, uyku düzeninize dikkat edin.<br>\n          14- Düșmeyen ateș, öksürük ve nefes darlığınız varsa, maske takarak bir sağlık kurulușuna bașvurun.\n        </p>\n      </div>\n    </div>\n\n    <div class=\"col-2\">\n      <img src=\"../assets/images/duyuru-images/Duyuru1-img.jpg\" />\n    </div>\n  </div>\n</div>\n<!--End of Content Section-->";

/***/ }),

/***/ 3428:
/*!*********************************************************************!*\
  !*** ./src/app/duyurular/duyuru2/duyuru2.component.html?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<!--Content Section-->\n<div id=\"services\" class=\"scrollto clearfix\">\n  <div class=\"row no-padding-bottom clearfix\">\n    <!--Content Left Side-->\n    <div class=\"col-3\">\n      <!--User Testimonial-->\n      <blockquote class=\"kurumsal text-right bigtest\">\n        <q\n          >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n          eiusmod tempor incididunt ut labore et dolore magna aliqua</q\n        >\n        <footer>— John Doe, Happy Customer</footer>\n      </blockquote>\n      <!-- End of Testimonial-->\n    </div>\n    <!--End Content Left Side-->\n\n    <!--Content of the Right Side-->\n    <div class=\"col-3\">\n      <div class=\"section-heading\">\n        <h3>BELIEVING</h3>\n        <h2 class=\"section-title\">Focusing On What Matters Most</h2>\n        <p class=\"section-subtitle\">\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad\n          minim veniam!\n        </p>\n      </div>\n      <p>\n        Sed ut perspiciatis unde omnis iste natus error sit voluptatem\n        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab\n        illo inventore veritatis et quasi architecto beatae vitae dicta sunt\n        explicabo.\n      </p>\n      <p>\n        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut\n        fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem\n        sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor\n        sit amet!\n      </p>\n      <!-- Just replace the Video ID \"UYJ5IjBRlW8\" with the ID of your video on YouTube (Found within the URL) -->\n      <a\n        href=\"#\"\n        data-videoid=\"UYJ5IjBRlW8\"\n        data-videosite=\"youtube\"\n        class=\"button video link-lightbox\"\n      >\n        WATCH VIDEO <i class=\"fa fa-play\" aria-hidden=\"true\"></i>\n      </a>\n    </div>\n    <!--End Content Right Side-->\n\n    <div class=\"col-3\">\n      <img src=\"../assets/images/dancer.jpg\" alt=\"Dancer\" />\n    </div>\n  </div>\n</div>\n<!--End of Content Section-->\n";

/***/ }),

/***/ 9616:
/*!*********************************************************************!*\
  !*** ./src/app/duyurular/duyuru3/duyuru3.component.html?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<!--Content Section-->\n<div id=\"services\" class=\"scrollto clearfix\">\n  <div class=\"row no-padding-bottom clearfix\">\n    <!--Content Left Side-->\n    <div class=\"col-3\">\n      <!--User Testimonial-->\n      <blockquote class=\"kurumsal text-right bigtest\">\n        <q\n          >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n          eiusmod tempor incididunt ut labore et dolore magna aliqua</q\n        >\n        <footer>— John Doe, Happy Customer</footer>\n      </blockquote>\n      <!-- End of Testimonial-->\n    </div>\n    <!--End Content Left Side-->\n\n    <!--Content of the Right Side-->\n    <div class=\"col-3\">\n      <div class=\"section-heading\">\n        <h3>BELIEVING</h3>\n        <h2 class=\"section-title\">Focusing On What Matters Most</h2>\n        <p class=\"section-subtitle\">\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad\n          minim veniam!\n        </p>\n      </div>\n      <p>\n        Sed ut perspiciatis unde omnis iste natus error sit voluptatem\n        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab\n        illo inventore veritatis et quasi architecto beatae vitae dicta sunt\n        explicabo.\n      </p>\n      <p>\n        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut\n        fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem\n        sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor\n        sit amet!\n      </p>\n      <!-- Just replace the Video ID \"UYJ5IjBRlW8\" with the ID of your video on YouTube (Found within the URL) -->\n      <a\n        href=\"#\"\n        data-videoid=\"UYJ5IjBRlW8\"\n        data-videosite=\"youtube\"\n        class=\"button video link-lightbox\"\n      >\n        WATCH VIDEO <i class=\"fa fa-play\" aria-hidden=\"true\"></i>\n      </a>\n    </div>\n    <!--End Content Right Side-->\n\n    <div class=\"col-3\">\n      <img src=\"../assets/images/dancer.jpg\" alt=\"Dancer\" />\n    </div>\n  </div>\n</div>\n<!--End of Content Section-->\n";

/***/ }),

/***/ 1776:
/*!***************************************************************!*\
  !*** ./src/app/duyurular/duyurular.component.html?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<!--Duyurular Tables-->\n<section id=\"duyurular\" class=\"secondary-color text-center scrollto clearfix\">\n  <div class=\"row clearfix\">\n    <div class=\"section-heading\">\n      <h3>DUYURULAR</h3>\n      <h2 class=\"section-title\">Sizin için Duyurularımız</h2>\n    </div>\n\n    <!--Duyuru Block-->\n    <div class=\"duyurular-block col-3 wow fadeInUp\" data-wow-delay=\"0.4s\">\n      <div class=\"duyurular-block-content\">\n        <h3>Duyuru #1</h3>\n        <p class=\"duyurular-sub\">01/01/2020</p>\n        <div>\n          <a href=\"/Duyurular/Duyuru1\"\n            class=\"wow fadeIn\"><img [src]=\"imgSrc\" (mouseover)=\"onMouseOver()\" (mouseout)=\"onMouseOut()\"/></a>\n        </div>\n        <ul>\n          <li><b>COVID-19 Duyurusu</b></li>\n          <li></li>\n        </ul>\n        <a href=\"/Duyurular/Duyuru1\" class=\"button\">Daha Fazlası</a>\n      </div>\n    </div>\n    <!--End Duyuru Block-->\n\n    <!--Duyuru Block-->\n    <div class=\"duyurular-block col-3 wow fadeInUp\" data-wow-delay=\"0.4s\">\n      <div class=\"duyurular-block-content\">\n        <h3>Duyuru #2</h3>\n        <p class=\"duyurular-sub\">01/01/2020</p>\n        <div>\n          <a href=\"/Duyurular/Duyuru2\"\n            class=\"wow fadeIn\"><img [src]=\"imgSrc2\" (mouseover)=\"onMouseOver2()\" (mouseout)=\"onMouseOut2()\"/></a>\n        </div>\n        <ul>\n          <li><b>Duyuru İsmi</b></li>\n          <li></li>\n        </ul>\n        <a href=\"/Duyurular/Duyuru2\" class=\"button\">Daha Fazlası</a>\n      </div>\n    </div>\n    <!--End Duyuru Block-->\n\n    <!--Duyuru Block-->\n    <div class=\"duyurular-block col-3 wow fadeInUp\" data-wow-delay=\"0.4s\">\n      <div class=\"duyurular-block-content\">\n        <h3>Duyuru #3</h3>\n        <p class=\"duyurular-sub\">01/01/2020</p>\n        <div>\n          <a href=\"/Duyurular/Duyuru3\"\n            class=\"wow fadeIn\"><img [src]=\"imgSrc3\" (mouseover)=\"onMouseOver3()\" (mouseout)=\"onMouseOut3()\"/></a>\n        </div>\n        <ul>\n          <li><b>Duyuru İsmi</b></li>\n          <li></li>\n        </ul>\n        <a href=\"/Duyurular/Duyuru3\" class=\"button\">Daha Fazlası</a>\n      </div>\n    </div>\n    <!--End Duyuru Block-->\n  </div>\n</section>\n<!--End of Duyuru Tables-->";

/***/ }),

/***/ 3008:
/*!*************************************************************!*\
  !*** ./src/app/faaliyet/faaliyet.component.html?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<!--Faaliyet Tables-->\n<section id=\"faaliyet\" class=\"secondary-color text-center scrollto clearfix\">\n  <div class=\"row clearfix\">\n    <div class=\"section-heading\">\n      <h3>FAALİYET RAPORLARI</h3>\n      <h2 class=\"section-title\">Yaptığımız Faaliyetlerin Raporları</h2>\n    </div>\n\n    <!--Faaliyet Block-->\n    <div class=\"duyurular-block col-3 wow fadeInUp\" data-wow-delay=\"0.4s\">\n      <div class=\"duyurular-block-content\">\n        <h3>Faaliyet Raporu #1</h3>\n        <p class=\"section-subtitle\">Karar İsmi</p>\n        <p class=\"duyurular-sub\">01/01/2020</p>\n        <a href=\"#\" class=\"button\">Daha Fazlası</a>\n      </div>\n    </div>\n    <!--End Faaliyet Block-->\n\n    <!--Faaliyet Block-->\n    <div class=\"duyurular-block col-3 wow fadeInUp\" data-wow-delay=\"0.4s\">\n      <div class=\"duyurular-block-content\">\n        <h3>Faaliyet Raporu #2</h3>\n        <p class=\"section-subtitle\">Karar İsmi</p>\n        <p class=\"duyurular-sub\">01/01/2020</p>\n        <a href=\"#\" class=\"button\">Daha Fazlası</a>\n      </div>\n    </div>\n    <!--End Faaliyet Block-->\n\n    <!--Faaliyet Block-->\n    <div class=\"duyurular-block col-3 wow fadeInUp\" data-wow-delay=\"0.4s\">\n      <div class=\"duyurular-block-content\">\n        <h3>Faaliyet Raporu #3</h3>\n        <p class=\"section-subtitle\">Karar İsmi</p>\n        <p class=\"duyurular-sub\">01/01/2020</p>\n        <a href=\"#\" class=\"button\">Daha Fazlası</a>\n      </div>\n    </div>\n    <!--End Faaliyet Block-->\n\n    <!--Faaliyet Block-->\n    <div class=\"duyurular-block col-3 wow fadeInUp\" data-wow-delay=\"0.4s\">\n      <div class=\"duyurular-block-content\">\n        <h3>Faaliyet Raporu #4</h3>\n        <p class=\"section-subtitle\">Karar İsmi</p>\n        <p class=\"duyurular-sub\">01/01/2020</p>\n        <a href=\"#\" class=\"button\">Daha Fazlası</a>\n      </div>\n    </div>\n    <!--End Faaliyet Block-->\n\n    <!--Faaliyet Block-->\n    <div class=\"duyurular-block col-3 wow fadeInUp\" data-wow-delay=\"0.4s\">\n      <div class=\"duyurular-block-content\">\n        <h3>Faaliyet Raporu #5</h3>\n        <p class=\"section-subtitle\">Karar İsmi</p>\n        <p class=\"duyurular-sub\">01/01/2020</p>\n        <a href=\"#\" class=\"button\">Daha Fazla</a>\n      </div>\n    </div>\n    <!--End Faaliyet Block-->\n\n    <!--Faaliyet Block-->\n    <div class=\"duyurular-block col-3 wow fadeInUp\" data-wow-delay=\"0.4s\">\n      <div class=\"duyurular-block-content\">\n        <h3>Faaliyet Raporu #6</h3>\n        <p class=\"section-subtitle\">Karar İsmi</p>\n        <p class=\"duyurular-sub\">01/01/2020</p>\n        <a href=\"#\" class=\"button\">Daha Fazla</a>\n      </div>\n    </div>\n    <!--End Faaliyet Block-->\n  </div>\n</section>\n<!--End of Faaliyet Tables-->";

/***/ }),

/***/ 6756:
/*!*********************************************************!*\
  !*** ./src/app/footer/footer.component.html?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<!--Footer-->\n<footer id=\"landing-footer\" class=\"clearfix\">\n  <div class=\"row clearfix\">\n\n    <div class=\"col-3\">\n        <p class=\"section-subtitle\">\n          <b>Adresimiz</b><br>\n          Yahşi Mh., Kargı Cd., 48420<br>\n          Ortakent yahşi<br>\n          Bld./Bodrum/Muğla<br>\n          Tel:\n        </p>\n    </div>\n    <div class=\"col-3\">\n      <p class=\"section-subtitle text-right\">\n        <b>Bizi takip edin</b><br>\n        <span><a href=\"https://www.facebook.com/profile.php?id=100041188725392\"><img src=\"../assets/socialmedia-96.png\" height=45px width=45px></a></span>\n        <span><a href=\"https://www.instagram.com/kargi_sitesi\"><img src=\"../assets/instagram-96.png\" height=43px width=45px></a></span>\n        <br>\n        <br>\n        Made by Batuhan Başoğlu\n      </p>\n    </div>\n  </div>\n</footer>\n<!--End of Footer-->\n";

/***/ }),

/***/ 3046:
/*!*****************************************************************!*\
  !*** ./src/app/genelkurul/genelkurul.component.html?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<!--Kurul Tables-->\n<section id=\"genelkurul\" class=\"secondary-color text-center scrollto clearfix\">\n  <div class=\"row clearfix\">\n    <div class=\"section-heading\">\n      <h3>GENEL KURUL KARARLARI</h3>\n      <h2 class=\"section-title\">Aldığımız Genel Kurul Kararları</h2>\n    </div>\n\n    <!--Kurul Block-->\n    <div class=\"duyurular-block col-3 wow fadeInUp\" data-wow-delay=\"0.4s\">\n      <div class=\"duyurular-block-content\">\n        <h3>Genel Kurul Kararı #1</h3>\n        <p class=\"section-subtitle\">Karar İsmi</p>\n        <p class=\"duyurular-sub\">01/01/2020</p>\n        <a href=\"#\" class=\"button\">Daha Fazlası</a>\n      </div>\n    </div>\n    <!--End Kurul Block-->\n\n    <!--Kurul Block-->\n    <div class=\"duyurular-block col-3 wow fadeInUp\" data-wow-delay=\"0.4s\">\n      <div class=\"duyurular-block-content\">\n        <h3>Genel Kurul Kararı #2</h3>\n        <p class=\"section-subtitle\">Karar İsmi</p>\n        <p class=\"duyurular-sub\">01/01/2020</p>\n        <a href=\"#\" class=\"button\">Daha Fazlası</a>\n      </div>\n    </div>\n    <!--End Kurul Block-->\n\n    <!--Kurul Block-->\n    <div class=\"duyurular-block col-3 wow fadeInUp\" data-wow-delay=\"0.4s\">\n      <div class=\"duyurular-block-content\">\n        <h3>Genel Kurul Kararı #3</h3>\n        <p class=\"section-subtitle\">Karar İsmi</p>\n        <p class=\"duyurular-sub\">01/01/2020</p>\n        <a href=\"#\" class=\"button\">Daha Fazlası</a>\n      </div>\n    </div>\n    <!--End Kurul Block-->\n\n    <!--Kurul Block-->\n    <div class=\"duyurular-block col-3 wow fadeInUp\" data-wow-delay=\"0.4s\">\n      <div class=\"duyurular-block-content\">\n        <h3>Genel Kurul Kararı #4</h3>\n        <p class=\"section-subtitle\">Karar İsmi</p>\n        <p class=\"duyurular-sub\">01/01/2020</p>\n        <a href=\"#\" class=\"button\">Daha Fazlası</a>\n      </div>\n    </div>\n    <!--End Kurul Block-->\n\n    <!--Kurul Block-->\n    <div class=\"duyurular-block col-3 wow fadeInUp\" data-wow-delay=\"0.4s\">\n      <div class=\"duyurular-block-content\">\n        <h3>Genel Kurul Kararı #5</h3>\n        <p class=\"section-subtitle\">Karar İsmi</p>\n        <p class=\"duyurular-sub\">01/01/2020</p>\n        <a href=\"#\" class=\"button\">Daha Fazlası</a>\n      </div>\n    </div>\n    <!--End Kurul Block-->\n\n    <!--Kurul Block-->\n    <div class=\"duyurular-block col-3 wow fadeInUp\" data-wow-delay=\"0.4s\">\n      <div class=\"duyurular-block-content\">\n        <h3>Genel Kurul Kararı #6</h3>\n        <p class=\"section-subtitle\">Karar İsmi</p>\n        <p class=\"duyurular-sub\">01/01/2020</p>\n        <a href=\"#\" class=\"button\">Daha Fazlası</a>\n      </div>\n    </div>\n    <!--End Kurul Block-->\n  </div>\n</section>\n<!--End of Kurul Tables-->";

/***/ }),

/***/ 8800:
/*!***********************************************************************!*\
  !*** ./src/app/hizmetlerimiz/hizmetlerimiz.component.html?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<!--Introduction-->\n<section id=\"about\" class=\"introduction scrollto\">\n  <div class=\"row clearfix\">\n    <div class=\"col-2\">\n      <div class=\"section-heading\">\n        <h3>HİZMETLERİMİZ</h3>\n        <h2 class=\"section-title\">Çalışma Saatleri</h2>\n        <p class=\"section-subtitle\">\n          Sabah: 08.00-12.00<br>\n          Öğlen: 13.00-17.00<br>\n          Hafta Sonu (Cumartesi): 08.00-13.00\n        </p>\n        <br>\n      </div>\n    </div>\n\n    <div class=\"col-3\">\n      <img src=\"../assets/images/hizmet-images/hizmet.png\" alt=\"Landing Page\" />\n    </div>\n\n    <div class=\"col-1\">\n      <!--Icon Block-->\n      <div class=\"row-2 icon-block icon-top wow fadeInUp\" data-wow-delay=\"0.1s\">\n        <!--Icon-->\n        <div class=\"icon\">\n          <i class=\"fa fa-home fa-4x\"></i>\n        </div>\n        <!--Icon Block Description-->\n        <div class=\"icon-block-description\">\n          <h4>Teknik Hizmetler</h4>\n          <p>\n            Bu kadroda çalışan personel; Kat maliklerimizin konutlarındaki su sayacına kadar olan arızalarda bakım ve\n            onarımı, ortak alanlar ve\n            site genelindeki elektrik, su ve kanalizasyon şebekesinde meydana gelen arızaların onarımlarıyla ilgili\n            teknik servis hizmeti vermektedirler.\n          </p>\n        </div>\n      </div>\n      <!--End of Icon Block-->\n\n      <!--Icon Block-->\n      <div class=\"row-2 icon-block icon-top wow fadeInUp\" data-wow-delay=\"0.3s\">\n        <!--Icon-->\n        <div class=\"icon\">\n          <i class=\"fa fa-bus fa-4x\"></i>\n        </div>\n        <!--Icon Block Description-->\n        <div class=\"icon-block-description\">\n          <h4>Ulaşım Hizmetleri </h4>\n          <p>\n            Yaz sezonunda; Yönetimce belirlenen saatlerde, site içi hizmet vermektedir. Ayrıca her gün Sahile Shuttle\n            hizmeti verilmektedir.\n          </p>\n        </div>\n      </div>\n      <!--End of Icon Block-->\n\n      <!--Icon Block-->\n      <div class=\"row-2 icon-block icon-top wow fadeInUp\" data-wow-delay=\"0.5s\">\n        <!--Icon-->\n        <div class=\"icon\">\n          <i class=\"fa fa-shield fa-4x\"></i>\n        </div>\n        <!--Icon Block Description-->\n        <div class=\"icon-block-description\">\n          <h4>Güvenlik Hizmetleri</h4>\n          <p>\n            24 saat kesintisiz olarak verilen site koruma ve güvenlik hizmetleri, özel güvenlik şirketi aracılığı ile\n            yürütülmektedir.\n            Site kamera görüntülerinin izlenmesi, siteye gelenlerin geliş amacına göre yönlendirilmesi ve takibi gibi\n            her türlü güvenlik hizmetleri;\n            özel güvenlik şirketiyle yapılmış olan koruma ve güvenlik hizmet sözleşmesi, 5188 sayılı Kanun, ilgili\n            yönetmelikler, güvenlik yönetmeliği ve\n            görev talimatları çerçevesinde yürütülmektedir.\n          </p>\n        </div>\n      </div>\n      <!--End of Icon Block-->\n\n      <!--Icon Block-->\n      <div class=\"row-2 icon-block icon-top wow fadeInUp\" data-wow-delay=\"0.5s\">\n        <!--Icon-->\n        <div class=\"icon\">\n          <i class=\"fa fa-sun-o fa-4x\"></i>\n        </div>\n        <!--Icon Block Description-->\n        <div class=\"icon-block-description\">\n          <h4>Sahil ve Kumsal Hizmetleri</h4>\n          <p>\n            ...\n          </p>\n        </div>\n      </div>\n      <!--End of Icon Block-->\n\n      <!--Icon Block-->\n      <div class=\"row-2 icon-block icon-top wow fadeInUp\" data-wow-delay=\"0.1s\">\n        <!--Icon-->\n        <div class=\"icon\">\n          <i class=\"fa fa-pagelines fa-4x\"></i>\n        </div>\n        <!--Icon Block Description-->\n        <div class=\"icon-block-description\">\n          <h4>Temizlik ve Genel Bahçe Hizmetleri</h4>\n          <p>\n            Site içi ara yolların süpürülmesi, sitenin genel ve ortak alanların temizliği, site içi bahçe atıklarının\n            belirli günlerde toplanması,\n            peyzaj çalışması yapılan alanlar, parklar ve ortak alanların budama ile ot temizlikleri, alt yapı\n            arızalarının giderilmesi ve tamirat hizmetleri vermektedir.\n          </p>\n        </div>\n      </div>\n      <!--End of Icon Block-->\n\n      <!--Icon Block-->\n      <div class=\"row-2 icon-block icon-top wow fadeInUp\" data-wow-delay=\"0.3s\">\n        <!--Icon-->\n        <div class=\"icon\">\n          <i class=\"fa fa-tint fa-4x\"></i>\n        </div>\n        <!--Icon Block Description-->\n        <div class=\"icon-block-description\">\n          <h4>Arıtma Tesisi ve Sulama Hizmetleri</h4>\n          <p>\n            Arıtma tesisinin düzenli ve kontrollü olarak çalışması, tesisin her türlü periyodik bakım-onarım\n            çalışmalarının yapılması,\n            arıtmadan çıkan arıtılmış atık suyun sulama havuzuna aktarılması, ortak alanların, parkların ve peyzaj\n            çalışması yapılmış olan\n            tüm alanların düzenli olarak sulanması ve sulama hatlarının kontrolü hizmetleridir.\n          </p>\n        </div>\n      </div>\n      <!--End of Icon Block-->\n\n      <!--Icon Block-->\n      <div class=\"row-2 icon-block icon-top wow fadeInUp\" data-wow-delay=\"0.5s\">\n        <!--Icon-->\n        <div class=\"icon\">\n          <i class=\"fa fa-bug fa-4x\"></i>\n        </div>\n        <!--Icon Block Description-->\n        <div class=\"icon-block-description\">\n          <h4>İlaçlama Hizmetleri</h4>\n          <p>\n            Tüm yıl boyunca rögar ve fosseptiklerin ilaçlanması, yaz sezonunda haftada 3 gün ULV ilaçlama yapılması, çöp\n            bidonlarının ilaçlanması hizmetleridir.\n          </p>\n        </div>\n      </div>\n      <!--End of Icon Block-->\n    </div>\n  </div>\n</section>\n<!--End of Introduction-->";

/***/ }),

/***/ 5678:
/*!*************************************************************!*\
  !*** ./src/app/iletisim/iletisim.component.html?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<!--Iletisim-->\n<section id=\"iletisim\" class=\"scrollto clearfix\">\n  <div class=\"row clearfix\">\n\n    <div class=\"col-3\">\n\n      <div class=\"section-heading\">\n        <h3>İLETİŞİM</h3>\n        <h2 class=\"section-title\">İletişim Bilgileri</h2>\n        <p class=\"section-subtitle\">\n          Kargı Sitesi<br>\n          Kargı Caddesi 48420<br>\n          Ortakent-Yahşi Bulvarı<br>\n          Muğla, Bodrum<br>\n          Telefon:</p>\n      </div>\n\n    </div>\n\n    <div class=\"col-2-3\">\n      <br>\n      <!-- AGM Module is deprecated.\n      <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [mapDraggable]=\"false\" [zoom]=\"17\" [scrollwheel]=\"false\">\n        <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n      </agm-map>-->\n    </div>\n\n\n    <div class=\"col-1\">\n      <div class=\"section-heading\">\n        <h2 class=\"section-title\">Bize Ulaşın</h2>\n        <div class=\"fcf-form-wrap\">\n          <div id=\"fcf-form\">\n            <form [formGroup]=\"FormData\" (ngSubmit)=\"onSubmit(FormData.value)\">\n              <div class=\"form-group\">\n                <label for=\"Name\" class=\"label has-text-weight-normal\">İsminiz</label><br>\n                <input type=\"text\" class=\"form-control\" name=\"Name\" formControlName=\"Name\" maxlength=\"100\" size=\"30\">\n                <div [hidden]=\"Name.pristine || Name.valid\" class=\"alert alert-danger\">\n                  <div style=\"color:#ff0000\">İsim gerekli.</div>\n                </div>\n                <br>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"Email\" class=\"label has-text-weight-normal\">E-Mailiniz</label><br>\n                <input type=\"email\" class=\"form-control\" name=\"Email\" aria-describedby=\"emailHelp\"\n                  formControlName=\"Email\" maxlength=\"100\" size=\"30\">\n                <div [hidden]=\"Email.pristine || Email.valid\" class=\"alert alert-danger\">\n                  <div style=\"color:#ff0000\">Doğru bir e-mail adresi gerekli.</div>\n                </div>\n                <br>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"Phone\" class=\"label has-text-weight-normal\">Telefonunuz (Gerekli Değil)</label><br>\n                <input type=\"text\" class=\"form-control\" name=\"Phone\" formControlName=\"Phone\" maxlength=\"30\" size=\"30\">\n                <div [hidden]=\"Phone.pristine || Phone.valid\" class=\"alert alert-danger\">\n                  <div style=\"color:#ff0000\">Telefon numarası numerik olmalı.</div>\n                </div>\n                <br>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"Message\" class=\"label has-text-weight-normal\">Mesajınız</label><br>\n                <textarea class=\"form-control\" formControlName=\"Message\" name=\"Message\" maxlength=\"3000\" rows=\"8\"\n                  cols=\"50\"></textarea>\n                <div [hidden]=\"Message.pristine || Message.valid\" class=\"alert alert-danger\">\n                  <div style=\"color:#ff0000\">Mesaj gerekli.</div>\n                </div>\n                <br>\n              </div>\n              <div class=\"form-group\">\n                <button type=\"submit\" class=\"button is-link is-medium is-fullwidth\"\n                  [disabled]=\"!FormData.valid\">Gönderin</button>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</section>\n<!--End of Iletisim-->\n";

/***/ }),

/***/ 9690:
/*!*************************************************************!*\
  !*** ./src/app/kurumsal/kurumsal.component.html?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<!--Kurumsal-->\n<aside id=\"kurumsal\" class=\"scrollto text-center\" data-enllax-ratio=\".2\">\n\n  <div class=\"row clearfix\">\n\n    <div class=\"section-heading\">\n      <h3>HAKKIMIZDA</h3>\n      <h2 class=\"section-title\">Yönetim Kurulumuz</h2>\n    </div>\n\n    <!--Kurumsal-->\n    <blockquote class=\"col-3 kurumsal classic\">\n      <img src=\"../assets/images/user-images/user-1.jpg\" alt=\"User\" />\n      <p style=\"color:#808080\">Yönetim Kurulu Başkanı</p>\n      <footer>Kamuran Başoğlu</footer>\n    </blockquote>\n    <!-- End of Kurumsal-->\n\n    <!--Kurumsal-->\n    <blockquote class=\"col-3 kurumsal classic\">\n      <img src=\"../assets/images/user-images/user-2.jpg\" alt=\"User\" />\n      <p style=\"color:#808080\">Yönetim Kurulu Başkan Yardımcısı</p>\n      <footer>Mahir Ataç</footer>\n    </blockquote>\n    <!-- End of Kurumsal-->\n\n    <!--Kurumsal-->\n    <blockquote class=\"col-3 kurumsal classic\">\n      <img src=\"../assets/images/user-images/user-3.jpg\" alt=\"User\" />\n      <p style=\"color:#808080\">Yönetim Kurulu Başkan Yardımcısı</p>\n      <footer>Fatih Ertaş</footer>\n    </blockquote>\n    <!-- End of Kurumsal-->\n\n    <!--Kurumsal-->\n    <blockquote class=\"col-3 kurumsal classic\">\n      <img src=\"../assets/images/user-images/user-4.jpg\" alt=\"User\" />\n      <p style=\"color:#808080\">Denetçi</p>\n      <footer>Nur Mollaoğlu</footer>\n    </blockquote>\n    <!-- End of Kurumsal-->\n  </div>\n  <div class=\"row clearfix\">\n    <div class=\"section-heading\">\n      <h2 class=\"section-title\">Personellerimiz</h2>\n    </div>\n    <!--Kurumsal-->\n    <blockquote class=\"col-3 kurumsal classic\">\n      <img src=\"../assets/images/user-images/user-5.jpg\" alt=\"User\" />\n      <p style=\"color:#808080\">Güvenlik</p>\n      <footer>Yüksel Keskin</footer>\n    </blockquote>\n    <!-- End of Kurumsal-->\n\n    <!--Kurumsal-->\n    <blockquote class=\"col-3 kurumsal classic\">\n      <img src=\"../assets/images/user-images/user-6.jpg\" alt=\"User\" />\n      <p style=\"color:#808080\">Yarı Zamanlı Personel</p>\n      <footer>Şengül Keskin</footer>\n    </blockquote>\n    <!-- End of Kurumsal-->\n  </div>\n\n</aside>\n<!--End of Kurumsal-->";

/***/ }),

/***/ 9230:
/*!*****************************************************************!*\
  !*** ./src/app/navigation/navigation.component.html?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<!--Beginning of header-->\n<div id=\"header\" class=\"nav-collapse nav-solid\">\n  <div class=\"row clearfix\">\n    <div class=\"col-1\">\n      <!--Logo-->\n      <div id=\"logo\">\n        <!--Logo that is shown on the banner-->\n        <img src=\"assets/images/logo.jpg\" id=\"banner-logo\" alt=\"Landing Page\" />\n        <!--End of Banner Logo-->\n\n        <!--The Logo that is shown on the sticky Navigation Bar-->\n        <img\n          src=\"assets/images/logo-2.jpg\"\n          id=\"navigation-logo\"\n          alt=\"Landing Page\"\n        />\n        <!--End of Navigation Logo-->\n      </div>\n      <!--End of Logo-->\n      <aside>\n        <app-social></app-social>\n      </aside>\n\n      <!--Main Navigation-->\n      <nav id=\"nav-main\">\n        <ul>\n          <li>\n            <a\n              routerLink=\"/Anasayfa\"\n              (click)=\"getActiveTab('anasayfa')\"\n              [class.active]=\"activetab === 'anasayfa'\"\n              >Anasayfa</a\n            >\n          </li>\n          <li>\n            <a\n              routerLink=\"/Kurumsal\"\n              (click)=\"getActiveTab('kurumsal')\"\n              [class.active]=\"activetab === 'kurumsal'\"\n              >Hakkımızda</a\n            >\n          </li>\n          <li>\n            <a\n              routerLink=\"/Hizmetlerimiz\"\n              (click)=\"getActiveTab('hizmetlerimiz')\"\n              [class.active]=\"activetab === 'hizmetlerimiz'\"\n              >Hİzmetlerİmİz</a\n            >\n          </li>\n          <li>\n            <a\n              routerLink=\"/Sitegörselleri\"\n              (click)=\"getActiveTab('sitegörselleri')\"\n              [class.active]=\"activetab === 'sitegörselleri'\"\n              >Sİte Görsellerİ</a\n            >\n          </li>\n          <li>\n            <a\n              routerLink=\"/Duyurular\"\n              (click)=\"getActiveTab('duyurular')\"\n              [class.active]=\"activetab === 'duyurular'\"\n              >Duyurular</a\n            >\n          </li>\n          <li>\n            <a\n              routerLink=\"/Faaliyet\"\n              (click)=\"getActiveTab('faaliyet')\"\n              [class.active]=\"activetab === 'faaliyet'\"\n              >Faalİyet RaporlarI</a\n            >\n          </li>\n          <li>\n            <a\n              routerLink=\"/Genelkurul\"\n              (click)=\"getActiveTab('genelkurul')\"\n              [class.active]=\"activetab === 'genelkurul'\"\n              >Genel Kurul KararlarI</a\n            >\n          </li>\n          <li>\n            <a\n              routerLink=\"/Iletisim\"\n              (click)=\"getActiveTab('iletisim')\"\n              [class.active]=\"activetab === 'iletisim'\"\n              >İletİşİm</a\n            >\n          </li>\n        </ul>\n      </nav>\n      <!--End of Main Navigation-->\n      <div id=\"nav-trigger\"><span></span></div>\n      <nav id=\"nav-mobile\"></nav>\n    </div>\n  </div>\n</div>\n<!--End of Header-->\n";

/***/ }),

/***/ 7494:
/*!*************************************************************************!*\
  !*** ./src/app/sitegörselleri/sitegörselleri.component.html?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<!--Sitegörselleri-->\n<aside\n  id=\"sitegörselleri\"\n  class=\"row text-center scrollto clearfix\"\n  data-featherlight-gallery\n  data-featherlight-filter=\"a\"\n>\n  <a\n    href=\"../assets/images/gallery-images/gallery-image-1.jpg\"\n    data-featherlight=\"image\"\n    class=\"col-3 wow fadeIn\"\n    data-wow-delay=\"0.1s\"\n    ><img\n      src=\"../assets/images/gallery-images/gallery-image-1.jpg\"\n      alt=\"Landing Page\"\n  /></a>\n  <a\n    href=\"../assets/images/gallery-images/gallery-image-2.jpg\"\n    data-featherlight=\"image\"\n    class=\"col-3 wow fadeIn\"\n    data-wow-delay=\"0.3s\"\n    ><img\n      src=\"../assets/images/gallery-images/gallery-image-2.jpg\"\n      alt=\"Landing Page\"\n  /></a>\n  <a\n    href=\"../assets/images/gallery-images/gallery-image-3.jpg\"\n    data-featherlight=\"image\"\n    class=\"col-3 wow fadeIn\"\n    data-wow-delay=\"0.5s\"\n    ><img\n      src=\"../assets/images/gallery-images/gallery-image-3.jpg\"\n      alt=\"Landing Page\"\n  /></a>\n  <a\n    href=\"../assets/images/gallery-images/gallery-image-4.jpg\"\n    data-featherlight=\"image\"\n    class=\"col-3 wow fadeIn\"\n    data-wow-delay=\"1.1s\"\n    ><img\n      src=\"../assets/images/gallery-images/gallery-image-4.jpg\"\n      alt=\"Landing Page\"\n  /></a>\n  <a\n    href=\"../assets/images/gallery-images/gallery-image-5.jpg\"\n    data-featherlight=\"image\"\n    class=\"col-3 wow fadeIn\"\n    data-wow-delay=\"0.9s\"\n    ><img\n      src=\"../assets/images/gallery-images/gallery-image-5.jpg\"\n      alt=\"Landing Page\"\n  /></a>\n  <a\n    href=\"../assets/images/gallery-images/gallery-image-6.jpg\"\n    data-featherlight=\"image\"\n    class=\"col-3 wow fadeIn\"\n    data-wow-delay=\"0.7s\"\n    ><img\n      src=\"../assets/images/gallery-images/gallery-image-6.jpg\"\n      alt=\"Landing Page\"\n  /></a>\n  <a\n    href=\"../assets/images/gallery-images/gallery-image-7.jpg\"\n    data-featherlight=\"image\"\n    class=\"col-3 wow fadeIn\"\n    data-wow-delay=\"0.1s\"\n    ><img\n      src=\"../assets/images/gallery-images/gallery-image-7.jpg\"\n      alt=\"Landing Page\"\n  /></a>\n  <a\n    href=\"../assets/images/gallery-images/gallery-image-8.jpg\"\n    data-featherlight=\"image\"\n    class=\"col-3 wow fadeIn\"\n    data-wow-delay=\"0.3s\"\n    ><img\n      src=\"../assets/images/gallery-images/gallery-image-8.jpg\"\n      alt=\"Landing Page\"\n  /></a>\n  <a\n    href=\"../assets/images/gallery-images/gallery-image-9.jpg\"\n    data-featherlight=\"image\"\n    class=\"col-3 wow fadeIn\"\n    data-wow-delay=\"0.5s\"\n    ><img\n      src=\"../assets/images/gallery-images/gallery-image-9.jpg\"\n      alt=\"Landing Page\"\n  /></a>\n  <a\n    href=\"../assets/images/gallery-images/gallery-image-10.jpg\"\n    data-featherlight=\"image\"\n    class=\"col-3 wow fadeIn\"\n    data-wow-delay=\"1.1s\"\n    ><img\n      src=\"../assets/images/gallery-images/gallery-image-10.jpg\"\n      alt=\"Landing Page\"\n  /></a>\n  <a\n    href=\"../assets/images/gallery-images/gallery-image-11.jpg\"\n    data-featherlight=\"image\"\n    class=\"col-3 wow fadeIn\"\n    data-wow-delay=\"0.9s\"\n    ><img\n      src=\"../assets/images/gallery-images/gallery-image-11.jpg\"\n      alt=\"Landing Page\"\n  /></a>\n  <a\n    href=\"../assets/images/gallery-images/gallery-image-12.jpg\"\n    data-featherlight=\"image\"\n    class=\"col-3 wow fadeIn\"\n    data-wow-delay=\"1.1s\"\n    ><img\n      src=\"../assets/images/gallery-images/gallery-image-12.jpg\"\n      alt=\"Landing Page\"\n  /></a>\n</aside>\n<!--End of Sitegörselleri-->\n";

/***/ }),

/***/ 7608:
/*!*********************************************************!*\
  !*** ./src/app/social/social.component.html?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<aside>\n  <!--Social Icons in Header-->\n  <ul class=\"social-icons\">\n    <li>\n      <a target=\"_blank\" title=\"Facebook\" href=\"https://www.facebook.com/profile.php?id=100041188725392\">\n        <i class=\"fa fa-facebook fa-1x\"></i><span>Facebook</span>\n      </a>\n    </li>\n    <li>\n      <a target=\"_blank\" title=\"Instagram\" href=\"https://www.instagram.com/kargi_sitesi\">\n        <i class=\"fa fa-instagram fa-1x\"></i><span>Instagram</span>\n      </a>\n    </li>\n  </ul>\n  <!--End of Social Icons in Header-->\n</aside>";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map