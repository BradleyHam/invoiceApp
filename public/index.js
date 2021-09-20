/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/main.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/main.scss ***!
  \*********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/image-avatar.jpg */ \"./src/assets/image-avatar.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Spartan:wght@500;700&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".mt-1 {\\n  margin-top: 40px; }\\n\\nbody {\\n  font-family: \\\"Spartan\\\";\\n  font-size: 12px;\\n  font-weight: medium;\\n  color: #0C0E16; }\\n\\nh1 {\\n  font-weight: bold;\\n  font-size: 20px; }\\n  @media (min-width: 768px) {\\n    h1 {\\n      font-size: 32px; } }\\n\\nh2 {\\n  font-size: 24px;\\n  font-weight: 500; }\\n\\nh3 {\\n  font-size: 12px; }\\n\\np.body-two {\\n  font-size: 11px; }\\n\\n.text-tertiary {\\n  color: #888EB0 !important; }\\n\\ninput {\\n  color: #0C0E16 !important; }\\n\\n*, *::before, *::after {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box; }\\n\\nul {\\n  list-style-type: none; }\\n\\nbody {\\n  height: 100vh;\\n  width: 100vw; }\\n\\na {\\n  text-decoration: none;\\n  color: initial; }\\n\\n.form-section {\\n  position: absolute;\\n  top: 0;\\n  right: 0;\\n  left: 0; }\\n  @media (min-width: 768px) {\\n    .form-section {\\n      width: 616px; } }\\n\\n.bill-from {\\n  display: grid;\\n  grid-template-columns: repeat(2, 1fr);\\n  grid-template-rows: repeat(3, 1fr);\\n  grid-gap: 24px;\\n  grid-template-areas: \\\"street-address street-address\\\"  \\\"city post-code\\\" \\\"country country\\\"; }\\n  @media (min-width: 768px) {\\n    .bill-from {\\n      grid-template-columns: repeat(3, 1fr);\\n      grid-template-rows: repeat(2, 1fr);\\n      grid-template-areas: \\\"street-address street-address street-address\\\"  \\\"city post-code country\\\"; } }\\n  .bill-from__city {\\n    grid-area: city; }\\n  .bill-from__street-address {\\n    grid-area: street-address; }\\n  .bill-from__post-code {\\n    grid-area: post-code; }\\n  .bill-from__country {\\n    grid-area: country; }\\n  .bill-from__label {\\n    padding-top: 32px !important;\\n    padding-bottom: 27px !important; }\\n\\n.bill-to {\\n  display: grid;\\n  grid-template-columns: repeat(2, 1fr);\\n  grid-template-rows: repeat(5, 1fr);\\n  grid-gap: 24px;\\n  grid-template-areas: \\\"name name\\\" \\\"email email\\\" \\\"address address\\\" \\\"city code\\\" \\\"country country\\\"; }\\n  @media (min-width: 768px) {\\n    .bill-to {\\n      grid-template-columns: repeat(3, 1fr);\\n      grid-template-rows: repeat(4, 1fr);\\n      grid-template-areas: \\\"name name name\\\" \\\"email email email\\\" \\\"address address address\\\" \\\"city code country\\\"; } }\\n  .bill-to__client-name {\\n    grid-area: name; }\\n  .bill-to__client-email {\\n    grid-area: email; }\\n  .bill-to__street-address {\\n    grid-area: address; }\\n  .bill-to__city {\\n    grid-area: city; }\\n  .bill-to__post-code {\\n    grid-area: code; }\\n  .bill-to__country {\\n    grid-area: country; }\\n  .bill-to__label {\\n    padding-top: 40px !important;\\n    padding-bottom: 27px !important; }\\n\\n.invoice_details {\\n  display: grid;\\n  grid-template-columns: 1fr;\\n  grid-template-rows: repeat(3, 1fr);\\n  grid-template-areas: \\\"date\\\" \\\"select\\\" \\\"description\\\"; }\\n  @media (min-width: 768px) {\\n    .invoice_details {\\n      grid-template-columns: repeat(2, 1fr);\\n      grid-template-rows: repeat(2, 1fr);\\n      grid-gap: 24px;\\n      grid-template-areas: \\\"date select\\\" \\\"description description\\\"; } }\\n  .invoice_details__custom-select {\\n    grid-area: select; }\\n  .invoice_details__date-picker {\\n    grid-area: date;\\n    padding: 2px; }\\n  .invoice_details__description {\\n    grid-area: description; }\\n  .invoice_details > div {\\n    margin-top: 24px; }\\n\\n.item-list {\\n  margin-top: 30px; }\\n\\n.item__grid-container {\\n  display: grid;\\n  grid-template-rows: 1fr 1fr;\\n  grid-template-columns: repeat(4, 1fr);\\n  grid-template-areas: \\\"name name name name\\\" \\\"qty price total bin\\\";\\n  grid-gap: 16px; }\\n  @media (min-width: 768px) {\\n    .item__grid-container {\\n      grid-template-rows: 1fr;\\n      grid-template-columns: repeat(5, 1fr);\\n      grid-template-areas: \\\"name qty price total bin\\\"; } }\\n  .item__grid-container .form-field {\\n    padding-top: 24px; }\\n\\n.item-name {\\n  grid-area: name; }\\n\\n.item-qty {\\n  grid-area: qty; }\\n\\n.item-price {\\n  grid-area: price; }\\n\\n.item-total {\\n  grid-area: total;\\n  position: relative; }\\n\\n.total-number {\\n  position: absolute;\\n  bottom: 17px;\\n  left: 17px;\\n  transform: translateX(-50%); }\\n\\n.bin {\\n  align-self: end;\\n  justify-self: center;\\n  margin-bottom: 17px; }\\n\\n.form-footer {\\n  padding: 24px 22px;\\n  display: flex;\\n  justify-content: space-around; }\\n  @media (min-width: 768px) {\\n    .form-footer {\\n      justify-content: flex-end; } }\\n\\nmain.form-active {\\n  height: 100vh;\\n  overflow: hidden; }\\n\\nbody.form-active {\\n  overflow: hidden; }\\n\\n@media (min-width: 768px) {\\n  .item-list .item:not(:first-of-type) label {\\n    display: none; } }\\n\\n.form-field.item-total {\\n  display: flex;\\n  justify-content: space-between;\\n  flex-flow: column; }\\n\\n.total {\\n  height: 48px;\\n  display: flex;\\n  justify-content: start;\\n  align-items: center; }\\n\\n.item-h2 {\\n  margin-top: 40px; }\\n\\nform {\\n  background: white;\\n  width: 100%;\\n  padding: 23px;\\n  padding-bottom: 88px;\\n  padding-bottom: 100px;\\n  overflow: hidden;\\n  display: none; }\\n  form :not(h2) {\\n    color: #7E88C3; }\\n  form .section-label {\\n    padding: 20px 0;\\n    color: #7c5dfa; }\\n  form .text-field, form .dropdown-container {\\n    width: 100%;\\n    height: 48px;\\n    border-radius: 4px;\\n    border: 1px solid #dfe3fa;\\n    margin-top: 13px; }\\n  form .text-field {\\n    outline: none;\\n    padding: 0 20px; }\\n  form .text-field:active {\\n    border: 1px solid #9277FF; }\\n  form .text-field:focus {\\n    border: 1px solid #9277FF; }\\n  @media (min-width: 768px) {\\n    form {\\n      border-radius: 0 20px 20px 0;\\n      padding: 56px; } }\\n  @media (min-width: 992px) {\\n    form {\\n      padding-left: 76px; } }\\n\\n.form-section {\\n  position: fixed;\\n  top: 72px;\\n  bottom: 0;\\n  display: none;\\n  z-index: 10;\\n  overflow-y: scroll; }\\n  @media (min-width: 768px) {\\n    .form-section {\\n      border-radius: 0 20px 20px 0; } }\\n  @media (min-width: 992px) {\\n    .form-section {\\n      margin-left: 80px;\\n      width: 636px;\\n      top: 0; } }\\n\\n.form-section.active, .form-section.active form {\\n  display: block; }\\n\\n.form-section.active + main {\\n  background: black !important; }\\n\\n.delete-item {\\n  cursor: pointer; }\\n\\nmain.form-active::after {\\n  background: rgba(0, 0, 0, 0.514);\\n  content: '';\\n  display: block;\\n  position: fixed;\\n  top: 0;\\n  bottom: 0;\\n  right: 0;\\n  left: 0;\\n  z-index: 1; }\\n\\nsvg path:hover {\\n  fill: #EC5757; }\\n\\n:first-child.item {\\n  margin-bottom: -13px; }\\n\\n.form-field.error {\\n  position: relative; }\\n  .form-field.error label {\\n    color: #EC5757; }\\n  .form-field.error input {\\n    border: 1px solid #EC5757; }\\n\\nform.error #new-item {\\n  position: relative; }\\n  form.error #new-item::after {\\n    content: '- All fields required';\\n    left: 20px;\\n    bottom: -40px;\\n    position: absolute;\\n    color: #EC5757; }\\n\\n@media (min-width: 768px) {\\n  #new-item {\\n    margin-bottom: 148px; } }\\n\\n.custom-select {\\n  margin-top: 13px;\\n  height: 48px;\\n  border-radius: 4px;\\n  border: 1px solid #dfe3fa;\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n  cursor: pointer;\\n  position: relative; }\\n  .custom-select.active .current-selected {\\n    border: 1px solid #7c5dfa; }\\n  .custom-select-dropdown {\\n    position: absolute;\\n    top: 100%;\\n    margin-top: 20px;\\n    left: 0;\\n    box-shadow: 0 10px 20px #48549f36;\\n    display: none;\\n    background-color: #FFF;\\n    z-index: 1; }\\n  .custom-select.active .custom-select-dropdown {\\n    display: flex; }\\n  .custom-select li {\\n    width: 240px;\\n    height: 48px;\\n    border: 1px solid #dfe3fa;\\n    padding: 0 20px;\\n    display: flex;\\n    align-items: center; }\\n  .custom-select li:first-child {\\n    border-radius: 4px 4px 0 0; }\\n  .custom-select li:last-child {\\n    border-radius: 0 0 4px 4px; }\\n  .custom-select li:not(:last-child) {\\n    border-bottom: none; }\\n  .custom-select li:hover {\\n    color: #7c5dfa; }\\n\\n.current-selected {\\n  width: 100%;\\n  height: 100%;\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n  padding: 0 20px; }\\n  .current-selected:hover {\\n    border: 1px solid #7c5dfa; }\\n\\n.date-picker {\\n  width: 100%;\\n  height: 48px;\\n  border-radius: 4px;\\n  border: 1px solid #dfe3fa;\\n  margin-top: 13px;\\n  position: relative;\\n  cursor: pointer;\\n  user-select: none;\\n  margin-top: 10px; }\\n\\n.date-picker:hover {\\n  border: 1px solid #7c5dfa; }\\n\\n.date-picker .selected-date {\\n  width: 100%;\\n  height: 100%;\\n  padding: 0 20px;\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between; }\\n\\n.date-picker .dates {\\n  display: none;\\n  position: absolute;\\n  top: 100%;\\n  left: 0;\\n  right: 0;\\n  background-color: #FFF;\\n  box-shadow: 0 10px 20px #48549f36;\\n  padding: 20px;\\n  padding-top: 0;\\n  margin-top: 10px;\\n  z-index: 10; }\\n\\n.date-picker .dates.active {\\n  display: block; }\\n\\n.date-picker .dates .month {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  padding: 20px 0 25px 0; }\\n\\n.date-picker .dates .month .arrows {\\n  width: 35px;\\n  height: 35px;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  color: #313131;\\n  font-size: 20px; }\\n\\n.date-picker .dates .month .arrows:hover {\\n  background-color: #f3f3f370; }\\n\\n.date-picker .dates .days {\\n  display: grid;\\n  grid-template-columns: repeat(7, 1fr);\\n  height: 170px; }\\n\\n.date-picker .dates .days .day {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  color: #313131; }\\n\\n.date-picker .dates .days .day.selected {\\n  color: #7c5dfa; }\\n\\n.date-picker .dates .days .day:hover {\\n  color: #7c5dfa; }\\n\\n.form-footer {\\n  box-shadow: 10px -10px 50px rgba(0, 0, 0, 0.1);\\n  background: white;\\n  z-index: 2000;\\n  right: 0;\\n  left: 0;\\n  bottom: 0;\\n  position: fixed; }\\n  @media (min-width: 768px) {\\n    .form-footer {\\n      width: 616px;\\n      border-radius: 0 20px 20px 0; }\\n      .form-footer button:first-child {\\n        margin-right: auto; }\\n      .form-footer button:not(:first-child) {\\n        margin-right: 8px; } }\\n  @media (min-width: 992px) {\\n    .form-footer {\\n      left: 100px; } }\\n\\n.form-section.edit .form__edit__heading {\\n  display: block; }\\n\\n.form-section.edit .form__new-invoice__heading {\\n  display: none; }\\n\\n.form-section.edit .form__draft-button {\\n  display: none; }\\n\\n.form__edit__heading {\\n  display: none; }\\n\\n.button {\\n  border: none;\\n  border-radius: 24px;\\n  padding: 18px 20px;\\n  cursor: pointer;\\n  color: white; }\\n  .button-one {\\n    background: #7c5dfa;\\n    width: 100px;\\n    display: flex;\\n    align-items: center;\\n    padding: 0; }\\n    .button-one .white-circle {\\n      background: white;\\n      height: 32px;\\n      width: 32px;\\n      border-radius: 100%;\\n      display: flex;\\n      justify-content: center;\\n      align-items: center;\\n      margin: 8px; }\\n    @media (min-width: 768px) {\\n      .button-one {\\n        width: 150px; } }\\n  .button:hover {\\n    background: #9277FF; }\\n  .button-two {\\n    background: #7c5dfa;\\n    background: #7c5dfa; }\\n  .button-two:hover {\\n    background: #9277FF; }\\n  .button-three {\\n    background: #F8F8FB;\\n    color: #7E88C3; }\\n  .button-three:hover {\\n    background: #dfe3fa; }\\n  .button-four {\\n    background: #EC5757; }\\n  .button-four:hover {\\n    background: #ff9797; }\\n  .button-five {\\n    background: #F8F8FB;\\n    color: #7E88C3;\\n    width: 100%;\\n    margin-top: 48px;\\n    margin-bottom: 88px; }\\n    .button-five svg {\\n      margin-right: 5px; }\\n  .button-five:hover {\\n    background: #dfe3fa; }\\n  .button-six {\\n    background: #373B53;\\n    color: #dfe3fa; }\\n  .button-six:hover {\\n    background: #1E2139;\\n    color: #dfe3fa; }\\n\\n.back-button {\\n  border: none;\\n  background: transparent;\\n  margin-bottom: 27px;\\n  color: #0C0E16;\\n  cursor: pointer; }\\n  .back-button svg {\\n    margin-right: 23px; }\\n\\nnav {\\n  height: 72px;\\n  background-color: #373B53;\\n  width: 100%;\\n  display: flex;\\n  justify-content: space-between;\\n  z-index: 100; }\\n  @media (min-width: 992px) {\\n    nav {\\n      flex-flow: column;\\n      border-radius: 0 20px 20px 0;\\n      height: initial; } }\\n\\n.nav__menu-icon {\\n  width: 72px;\\n  height: 72px;\\n  background-color: #7c5dfa;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  border-radius: 0 20px 20px 0;\\n  position: relative; }\\n  @media (min-width: 992px) {\\n    .nav__menu-icon {\\n      height: 100px;\\n      width: 100px; } }\\n  .nav__menu-icon svg {\\n    z-index: 2; }\\n    @media (min-width: 992px) {\\n      .nav__menu-icon svg {\\n        transform: scale(1.4); } }\\n  .nav__menu-icon:after {\\n    content: '';\\n    position: absolute;\\n    bottom: 0;\\n    left: 0;\\n    right: 0;\\n    height: 50%;\\n    background-color: #9277FF;\\n    z-index: 1;\\n    border-radius: 20px 0 20px 0; }\\n\\n.nav__user-icon {\\n  width: 72px;\\n  border-radius: 0 0 20px 0;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  border-left: 1px solid #494E6E; }\\n  @media (min-width: 992px) {\\n    .nav__user-icon {\\n      border-top: 1px solid #494E6E;\\n      width: 100px;\\n      height: 100px; } }\\n\\n.nav__avatar {\\n  height: 32px;\\n  width: 32px;\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  background-position: center;\\n  background-size: cover;\\n  border-radius: 100%; }\\n  @media (min-width: 992px) {\\n    .nav__avatar {\\n      height: 40px;\\n      width: 40px; } }\\n\\nbody {\\n  height: 100vh;\\n  width: 100vw;\\n  background-color: #F8F8FB;\\n  position: relative; }\\n\\nnav {\\n  position: fixed;\\n  left: 0;\\n  top: 0;\\n  right: 0; }\\n  @media (min-width: 992px) {\\n    nav {\\n      width: 100px;\\n      left: 0;\\n      bottom: 0; } }\\n\\nmain {\\n  margin: 0  auto;\\n  margin-top: 72px;\\n  padding: 32px;\\n  overflow-y: scroll;\\n  position: relative; }\\n  @media (min-width: 768px) {\\n    main {\\n      padding: 59px 48px; } }\\n  @media (min-width: 992px) {\\n    main {\\n      padding: 72px 200px;\\n      margin-top: initial; } }\\n  @media (min-width: 1400px) {\\n    main {\\n      padding: 72px 355px; } }\\n\\n.hide-mobile {\\n  display: none; }\\n  @media (min-width: 768px) {\\n    .hide-mobile {\\n      display: initial; } }\\n\\n.top-bar {\\n  display: flex;\\n  justify-content: space-between; }\\n  .top-bar .right-side {\\n    display: flex;\\n    align-items: center;\\n    position: relative; }\\n  .top-bar .left-side p {\\n    margin-top: 10px;\\n    color: #888EB0; }\\n\\n.filter-bar {\\n  margin-right: 18px;\\n  cursor: pointer;\\n  display: flex;\\n  align-items: center;\\n  position: relative; }\\n  .filter-bar__down-icon {\\n    margin-left: 12px; }\\n  .filter-bar.active + .filter-bar__dropdown {\\n    display: flex; }\\n  .filter-bar.active .filter-bar__down-icon {\\n    transform: rotate(180deg); }\\n  @media (min-width: 768px) {\\n    .filter-bar__down-icon {\\n      margin-left: 35px;\\n      margin-right: 40px; } }\\n\\n.filter-bar__dropdown {\\n  position: absolute;\\n  top: 100%;\\n  display: flex;\\n  flex-flow: column;\\n  background: white;\\n  z-index: 1;\\n  width: 192px;\\n  height: 128px;\\n  transform: translateX(-25%);\\n  border-radius: 8px;\\n  box-shadow: 0 10px 20px #48549f36;\\n  justify-content: space-between;\\n  display: none;\\n  padding: 24px 24px; }\\n  .filter-bar__dropdown .checkbox-field:not(:first-child) {\\n    margin-top: 11px; }\\n\\n.checkbox {\\n  display: grid;\\n  grid-template-columns: min-content auto;\\n  grid-gap: 0.5em;\\n  cursor: pointer; }\\n  .checkbox input {\\n    cursor: pointer; }\\n\\n.checkbox__control {\\n  display: inline-grid;\\n  width: 1em;\\n  height: 1em;\\n  border-radius: 0.25em;\\n  border: 0.1em solid #7c5dfa;\\n  background: #dfe3fa; }\\n  .checkbox__control svg {\\n    transition: transform 0.1s ease-in 25ms;\\n    transform: scale(0);\\n    transform-origin: bottom left;\\n    color: white; }\\n\\n.checkbox__input {\\n  display: grid;\\n  grid-template-areas: \\\"checkbox\\\"; }\\n  .checkbox__input > * {\\n    grid-area: checkbox; }\\n  .checkbox__input input {\\n    opacity: 0;\\n    width: 1em;\\n    height: 1em; }\\n    .checkbox__input input:checked + .checkbox__control svg {\\n      transform: scale(1);\\n      background: #7c5dfa; }\\n    .checkbox__input input:checked + .checkbox__control {\\n      background: #7c5dfa; }\\n\\n.invoices {\\n  margin-top: 20px; }\\n  .invoices ul {\\n    padding: 10px 0 40px 0; }\\n\\n.invoice {\\n  margin-top: 20px;\\n  padding: 24px;\\n  background: white;\\n  width: 100%;\\n  border-radius: 8px;\\n  box-shadow: 0 10px 20px #48549f36;\\n  display: grid;\\n  grid-template-columns: repeat(2, 1fr);\\n  grid-template-rows: repeat(4, 1fr);\\n  grid-gap: 10px;\\n  grid-template-areas: \\\"id name\\\" \\\". .\\\" \\\"date status\\\" \\\"amount status\\\";\\n  align-items: center;\\n  justify-items: start; }\\n  @media (min-width: 768px) {\\n    .invoice {\\n      grid-template-columns: repeat(5, 1fr);\\n      grid-template-rows: 1fr;\\n      grid-template-areas: \\\"id date name amount status\\\"; } }\\n  .invoice__id {\\n    grid-area: id; }\\n  .invoice__amount {\\n    grid-area: amount;\\n    font-size: 16px; }\\n  .invoice__name {\\n    grid-area: name;\\n    justify-self: end;\\n    color: #888EB0; }\\n    @media (min-width: 768px) {\\n      .invoice__name {\\n        justify-self: start; } }\\n  .invoice__status {\\n    grid-area: status;\\n    justify-self: end;\\n    align-self: center;\\n    height: 40px;\\n    width: 104px;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    position: relative; }\\n  .invoice__date {\\n    grid-area: date;\\n    color: #888EB0; }\\n\\n.paid {\\n  background: #33d6a013;\\n  color: #33D69F;\\n  border-radius: 8px;\\n  position: relative; }\\n  .paid-text::before {\\n    content: \\\"\\\";\\n    background: currentColor;\\n    height: 5px;\\n    width: 5px;\\n    border-radius: 50%;\\n    position: absolute;\\n    top: 50%;\\n    left: 20px;\\n    transform: translateY(-60%); }\\n\\n.pending {\\n  background: #ffab3e15;\\n  color: #FFAA3E;\\n  border-radius: 8px;\\n  position: relative; }\\n  .pending-text::before {\\n    content: \\\"\\\";\\n    background: currentColor;\\n    height: 5px;\\n    width: 5px;\\n    border-radius: 50%;\\n    position: absolute;\\n    top: 50%;\\n    left: 15px;\\n    transform: translateY(-60%); }\\n\\n.draft {\\n  background: #373b5323;\\n  color: #373B53;\\n  border-radius: 8px;\\n  position: relative; }\\n  .draft-text::before {\\n    content: \\\"\\\";\\n    background: currentColor;\\n    height: 5px;\\n    width: 5px;\\n    border-radius: 50%;\\n    position: absolute;\\n    top: 50%;\\n    left: 20%;\\n    transform: translateY(-60%); }\\n\\n.invoice-page__status-bar {\\n  background: white;\\n  border-radius: 8px;\\n  padding: 24px;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  color: #888EB0;\\n  box-shadow: 0 10px 20px #48549f36; }\\n  .invoice-page__status-bar .buttonRow {\\n    display: none; }\\n  @media (min-width: 768px) {\\n    .invoice-page__status-bar .invoice__status {\\n      margin-left: 22px;\\n      margin-right: auto; } }\\n\\n@media (min-width: 768px) {\\n  .invoice-page__status-bar .buttonRow {\\n    display: flex; }\\n    .invoice-page__status-bar .buttonRow button:not(:last-child) {\\n      margin-right: 10px; } }\\n\\n.invoice-page__invoice-details {\\n  box-shadow: 0 10px 20px #48549f36;\\n  color: #888EB0;\\n  margin-top: 20px;\\n  background: white;\\n  border-radius: 8px;\\n  padding: 24px;\\n  row-gap: 33px;\\n  font-size: 11px;\\n  display: grid;\\n  grid-template-columns: repeat(2, 1fr);\\n  grid-template-areas: \\\"id-job .\\\" \\\"bill-from .\\\" \\\"date bill-to\\\" \\\"email email\\\" \\\"items items\\\"; }\\n  .invoice-page__invoice-details .id-job {\\n    grid-area: id-job; }\\n  .invoice-page__invoice-details .invoice-page__bill-from {\\n    grid-area: bill-from; }\\n  .invoice-page__invoice-details .dates {\\n    grid-area: date;\\n    display: flex;\\n    justify-content: space-between;\\n    flex-flow: column; }\\n  .invoice-page__invoice-details .bill-to__container {\\n    grid-area: bill-to;\\n    display: flex;\\n    flex-flow: column;\\n    justify-content: space-between; }\\n  .invoice-page__invoice-details .email-container {\\n    grid-area: email; }\\n  .invoice-page__invoice-details .items {\\n    grid-area: items; }\\n  .invoice-page__invoice-details .id {\\n    margin-bottom: 7px; }\\n  .invoice-page__invoice-details .email {\\n    margin-top: 15px; }\\n  @media (min-width: 768px) {\\n    .invoice-page__invoice-details {\\n      grid-template-columns: repeat(4, 1fr);\\n      grid-gap: 30px;\\n      grid-template-areas: \\\"id-job . . bill-from\\\" \\\"date bill-to email email\\\" \\\"items items items items\\\"; }\\n      .invoice-page__invoice-details .id {\\n        margin-bottom: 16px; }\\n      .invoice-page__invoice-details .bill-to__name {\\n        margin-bottom: 13px; }\\n      .invoice-page__invoice-details p {\\n        margin-bottom: 16px; } }\\n  .invoice-page__invoice-details .id, .invoice-page__invoice-details .invoice-date, .invoice-page__invoice-details .payment-due__date, .invoice-page__invoice-details .bill-to__name, .invoice-page__invoice-details .email {\\n    color: black;\\n    font-size: 15px; }\\n  .invoice-page__invoice-details .invoice-date, .invoice-page__invoice-details .payment-due__date, .invoice-page__invoice-details .bill-to__name {\\n    margin-top: 15px; }\\n  .invoice-page__invoice-details .invoice-page__bill-from p:not(:last-child), .invoice-page__invoice-details .invoice-page__bill-to p:not(:last-child) {\\n    margin-bottom: 5px; }\\n\\n.invoice-page main {\\n  overflow: initial !important; }\\n\\n.invoice-page__invoice-details .items {\\n  display: grid;\\n  grid-template-columns: repeat(2, 1fr); }\\n\\n.invoice-page__invoice-details .item, .invoice-page__invoice-details .grand-total__container {\\n  grid-column: span 2;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  padding: 24px; }\\n\\n.invoice-page__invoice-details .grand-total__container {\\n  background: #373B53;\\n  border-radius: 0 0 8px 8px;\\n  color: white;\\n  height: 80px; }\\n\\n.invoice-page__invoice-details .item-description {\\n  display: none; }\\n\\n.invoice-page__invoice-details .item {\\n  background: #F9FAFE;\\n  color: #0C0E16;\\n  margin-bottom: initial;\\n  height: 80px; }\\n  .invoice-page__invoice-details .item-qty, .invoice-page__invoice-details .item-price {\\n    display: none; }\\n  .invoice-page__invoice-details .item-summary {\\n    color: #7E88C3; }\\n  .invoice-page__invoice-details .item-summary__container {\\n    display: flex;\\n    flex-flow: column;\\n    justify-content: space-between;\\n    height: 35px; }\\n\\n.invoice-page__invoice-details p {\\n  margin-bottom: initial; }\\n\\n@media (min-width: 768px) {\\n  .invoice-page__invoice-details .items {\\n    margin-top: 35px; }\\n  .invoice-page__invoice-details .item {\\n    display: grid;\\n    grid-template-rows: 1fr;\\n    grid-template-columns: 2fr 1fr 1fr 1fr;\\n    justify-items: end;\\n    grid-template-areas: \\\"summary qty price total\\\"; }\\n    .invoice-page__invoice-details .item-qty {\\n      grid-area: qty; }\\n    .invoice-page__invoice-details .item-price {\\n      grid-area: price; }\\n    .invoice-page__invoice-details .item-total {\\n      grid-area: total; }\\n    .invoice-page__invoice-details .item-summary__container {\\n      grid-area: summary;\\n      justify-self: start; }\\n    .invoice-page__invoice-details .item-qty, .invoice-page__invoice-details .item-price {\\n      display: initial; }\\n  .invoice-page__invoice-details .item-summary {\\n    display: none; }\\n  .invoice-page__invoice-details .item-summary__container {\\n    justify-content: center; } }\\n\\n.item-description {\\n  color: #888EB0 !important;\\n  border-radius: 8px 8px 0 0; }\\n\\n.invoice-footer {\\n  display: flex;\\n  background: white;\\n  padding: 21px  24px;\\n  justify-content: space-around; }\\n  .invoice-footer .mark-paid {\\n    width: 150px; }\\n  .invoice-footer .delete {\\n    width: 90px; }\\n  @media (min-width: 768px) {\\n    .invoice-footer {\\n      display: none; } }\\n\\nbody {\\n  position: relative; }\\n\\n.deleteModal {\\n  position: fixed;\\n  top: 0;\\n  bottom: 0;\\n  right: 0;\\n  left: 0;\\n  z-index: 20000;\\n  background: rgba(0, 0, 0, 0.568);\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  display: none; }\\n  .deleteModal__content {\\n    background: white;\\n    height: 220px;\\n    width: 327px;\\n    border-radius: 8px;\\n    padding: 32px; }\\n  .deleteModal h3 {\\n    font-size: 20px;\\n    font-weight: 400; }\\n  .deleteModal p {\\n    margin-top: 20px;\\n    color: #888EB0;\\n    line-height: 22px; }\\n  .deleteModal__buttons {\\n    display: flex;\\n    justify-content: flex-end;\\n    margin-top: 34px; }\\n    .deleteModal__buttons button:first-child {\\n      margin-right: 8px; }\\n\\n.deleteModal.active {\\n  display: flex; }\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://invoice-app/./src/sass/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://invoice-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://invoice-app/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/sass/main.scss":
/*!****************************!*\
  !*** ./src/sass/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/main.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);\n\n\n//# sourceURL=webpack://invoice-app/./src/sass/main.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://invoice-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://invoice-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://invoice-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(style) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    style.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://invoice-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://invoice-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, style) {\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://invoice-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/main.scss */ \"./src/sass/main.scss\");\n/* harmony import */ var _javascript_setup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./javascript/setup */ \"./src/javascript/setup.js\");\n/* harmony import */ var _javascript_components_topBar_filterBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./javascript/components/topBar/filterBar */ \"./src/javascript/components/topBar/filterBar.js\");\n/* harmony import */ var _javascript_components_topBar_newInvoice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./javascript/components/topBar/newInvoice */ \"./src/javascript/components/topBar/newInvoice.js\");\n/* harmony import */ var _javascript_components_topBar_invoiceAmount__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./javascript/components/topBar/invoiceAmount */ \"./src/javascript/components/topBar/invoiceAmount.js\");\n/* harmony import */ var _javascript_components_form_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./javascript/components/form/module */ \"./src/javascript/components/form/module.js\");\n// CSS -----------\n\n\n// JAVASCRIPT --------\n\n// SET UP\n\n\n// TOP BAR \n\n\n\n\n// FORM\n\n\n\n// HOMEPAGE\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://invoice-app/./src/index.js?");

/***/ }),

/***/ "./src/javascript/components/form/backAndDiscard.js":
/*!**********************************************************!*\
  !*** ./src/javascript/components/form/backAndDiscard.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _form_formElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../form/formElements */ \"./src/javascript/components/form/formElements.js\");\n/* harmony import */ var _home_homeEls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../home/homeEls */ \"./src/javascript/home/homeEls.js\");\n\n\n\nconst { main } = _home_homeEls__WEBPACK_IMPORTED_MODULE_1__.default;\nconst { backButton, formSection, exitButtons } = _form_formElements__WEBPACK_IMPORTED_MODULE_0__.default;\n\nbackButton.addEventListener('click', exitForm);\n\nexitButtons.forEach(button => {\n    button.addEventListener('click', exitForm)\n})\n\nfunction exitForm(e){\n    e.preventDefault()\n    formSection.classList.remove('active', 'edit');\n    main.classList.remove('form-active')\n}\n\n//# sourceURL=webpack://invoice-app/./src/javascript/components/form/backAndDiscard.js?");

/***/ }),

/***/ "./src/javascript/components/form/custom-select.js":
/*!*********************************************************!*\
  !*** ./src/javascript/components/form/custom-select.js ***!
  \*********************************************************/
/***/ (() => {

eval("let customSelect = document.getElementById(\"custom-select\");\nlet listItems = document.querySelectorAll(\".dropdown-list-item\")\nlet currentSelected = document.querySelector(\".current-selected span\")\n\n\ncustomSelect.addEventListener(\"click\", () => {\n    customSelect.classList.toggle(\"active\");\n})\n\nlistItems.forEach((item)=>{\n    item.addEventListener(\"click\", (e)=>{\n        currentSelected.innerText = e.target.innerText;\n    })\n})\n\n\n\n//# sourceURL=webpack://invoice-app/./src/javascript/components/form/custom-select.js?");

/***/ }),

/***/ "./src/javascript/components/form/date-picker.js":
/*!*******************************************************!*\
  !*** ./src/javascript/components/form/date-picker.js ***!
  \*******************************************************/
/***/ (() => {

eval("const date_picker_element = document.querySelector('.date-picker');\nconst selected_date_element = document.querySelector('.date-picker .selected-date-text');\nconst dates_element = document.querySelector('.date-picker .dates');\nconst mth_element = document.querySelector('.date-picker .dates .month .mth');\nconst next_mth_element = document.querySelector('.date-picker .dates .month .next-mth');\nconst prev_mth_element = document.querySelector('.date-picker .dates .month .prev-mth');\nconst days_element = document.querySelector('.date-picker .dates .days');\n\nconst months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];\n\nlet date = new Date();\nlet day = date.getDate();\nlet month = date.getMonth();\nlet year = date.getFullYear();\n\nlet selectedDate = date;\nlet selectedDay = day;\nlet selectedMonth = month;\nlet selectedYear = year;\n\nmth_element.textContent = months[month] + ' ' + year;\n\nselected_date_element.textContent = formatDate(date);\nselected_date_element.dataset.value = selectedDate;\n\npopulateDates();\n\ndate_picker_element.addEventListener('click', toggleDatePicker);\nnext_mth_element.addEventListener('click', goToNextMonth);\nprev_mth_element.addEventListener('click', goToPrevMonth);\n\n// FUNCTIONS\nfunction toggleDatePicker (e) {\n\tif (!checkEventPathForClass(e.path, 'dates')) {\n\tdates_element.classList.toggle('active');\n\t}\n}\n\nfunction goToNextMonth (e) {\n\tmonth++;\n\tif (month > 11) {\n\t\tmonth = 0;\n\t\tyear++;\n\t}\n\tmth_element.textContent = months[month] + ' ' + year;\n\tpopulateDates();\n}\n\nfunction goToPrevMonth (e) {\n\tmonth--;\n\tif (month < 0) {\n\t\tmonth = 11;\n\t\tyear--;\n\t}\n\tmth_element.textContent = months[month] + ' ' + year;\n\tpopulateDates();\n}\n\nfunction populateDates (e) {\n\tdays_element.innerHTML = '';\n\tlet amount_days = 31;\n\n\tif (month == 1) {\n\t\tamount_days = 28;\n\t}\n\n\tfor (let i = 0; i < amount_days; i++) {\n\t\tconst day_element = document.createElement('div');\n\t\tday_element.classList.add('day');\n\t\tday_element.textContent = i + 1;\n\n\t\tif (selectedDay == (i + 1) && selectedYear == year && selectedMonth == month) {\n\t\t\tday_element.classList.add('selected');\n\t\t}\n\n\t\tday_element.addEventListener('click', function () {\n\t\t\tselectedDate = new Date(year + '-' + (month + 1) + '-' + (i + 1));\n\t\t\tselectedDay = (i + 1);\n\t\t\tselectedMonth = month;\n\t\t\tselectedYear = year;\n\n\t\t\tselected_date_element.textContent = formatDate(selectedDate);\n\t\t\tselected_date_element.dataset.value = selectedDate;\n\n\t\t\tpopulateDates();\n\t\t\tdates_element.classList.remove('active');\n\t\t});\n\n\t\tdays_element.appendChild(day_element);\n\t}\n}\n\n// HELPER FUNCTIONS\nfunction checkEventPathForClass (path, selector) {\n\tfor (let i = 0; i < path.length; i++) {\n\t\tif (path[i].classList && path[i].classList.contains(selector)) {\n\t\t\treturn true;\n\t\t}\n\t}\n\t\n\treturn false;\n}\nfunction formatDate (d) {\n\tlet day = d.getDate();\n\tif (day < 10) {\n\t\tday = '0' + day;\n\t}\n\n\tlet month = d.getMonth() + 1;\n\tif (month < 10) {\n\t\tmonth = '0' + month;\n\t}\n\n\tlet year = d.getFullYear();\n\n\treturn day + ' / ' + month + ' / ' + year;\n}\n\n\n\n//# sourceURL=webpack://invoice-app/./src/javascript/components/form/date-picker.js?");

/***/ }),

/***/ "./src/javascript/components/form/editForm.js":
/*!****************************************************!*\
  !*** ./src/javascript/components/form/editForm.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _formElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formElements */ \"./src/javascript/components/form/formElements.js\");\n/* harmony import */ var _functions_getCurrentInvoice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../functions/getCurrentInvoice */ \"./src/javascript/functions/getCurrentInvoice.js\");\n/* harmony import */ var _items_new_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./items/new-item */ \"./src/javascript/components/form/items/new-item.js\");\n/* harmony import */ var _items_new_item__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_items_new_item__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n\nlet editButtons = document.querySelectorAll('.edit-button');\nlet { formSection, inputElements, itemList } = _formElements__WEBPACK_IMPORTED_MODULE_0__.default;\n\neditButtons.forEach( button => {\n    button.addEventListener( 'click' , () => { \n        formSection.classList.add('active', 'edit');\n        populateFormData();\n    });\n});\n\nfunction populateFormData(){\n    let currentInvoice = (0,_functions_getCurrentInvoice__WEBPACK_IMPORTED_MODULE_1__.getCurrentInvoice)();\n    // populating all fields that have matching ids \n    inputElements.forEach(input => {\n        input.innerText = 'hello'\n        if([input.id] in currentInvoice){\n            input.value = currentInvoice[input.id]\n        }\n    });\n    // -------\n\n    senderStreet.value = currentInvoice.senderAddress.street;\n    senderPostCode.value = currentInvoice.senderAddress.postCode;\n    senderCountry.value = currentInvoice.senderAddress.country;\n    senderCity.value = currentInvoice.senderAddress.city;\n\n    clientCity.value = currentInvoice.clientAddress.city;\n    clientPostCode.value = currentInvoice.clientAddress.postCode;\n    clientCountry.value = currentInvoice.clientAddress.country;\n    clientStreet.value = currentInvoice.clientAddress.street;\n\n    populateFormItems(currentInvoice)\n\n}\n\nfunction populateFormItems(currentInvoice){\n\n    currentInvoice.items.forEach(item => {\n       let itemElement = `\n       <div class=\"item item__grid-container edit-item\">\n        <div class=\"form-field item-name\">\n          <label for=\"name\" class=\"item-label__name\">Item name</label> <br>\n          <input value=${item.name} name=\"name\" type=\"text\" class=\"text-field\">\n        </div>\n        <div class=\"form-field item-qty\">\n          <label for=\"quantity\" class=\"item-label__qty\">Qty</label> <br>\n          <input value=${item.quantity} name=\"quantity\"  type=\"number\" class=\"text-field qty\">\n        </div>\n        <div class=\"form-field item-price\">\n          <label for=\"price\" class=\"item-label__price\">price</label> <br>\n          <input value=${item.price} name=\"price\" type=\"number\" class=\"text-field price\">\n        </div>\n        <div class=\"form-field item-total\">\n          <label for=\"total\" class=\"item-label__total\">total</label> <br>\n          <div class='total' class='total-number'>${item.total}</div>\n        </div>\n        <svg id='bin' class=\"bin\" width=\"13\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\"><path class=\"delete-item\" d=\"M11.583 3.556v10.666c0 .982-.795 1.778-1.777 1.778H2.694a1.777 1.777 0 01-1.777-1.778V3.556h10.666zM8.473 0l.888.889h3.111v1.778H.028V.889h3.11L4.029 0h4.444z\" fill=\"#888EB0\" fill-rule=\"nonzero\"/></svg>\n        </div>`\n\n        itemList.insertAdjacentHTML('afterbegin', itemElement);\n    })\n\n    let items = document.querySelectorAll('.item.item__grid-container');\n\n    items.forEach(item => {\n      console.log(item, '---')\n      let qty = item.querySelector('.qty');\n      let price = item.querySelector('.price');\n      let total = item.querySelector('.total');\n  \n      [qty, price].forEach(item => {\n        item.addEventListener('change', () => {\n          if(qty.value < 1 || price.value < 1){\n            total.innerText = '$' + 0;\n          }else{\n            total.innerText = '$' + (qty.value * price.value);\n          }\n        })\n      })\n    });\n}\n\n\n\n//# sourceURL=webpack://invoice-app/./src/javascript/components/form/editForm.js?");

/***/ }),

/***/ "./src/javascript/components/form/formElements.js":
/*!********************************************************!*\
  !*** ./src/javascript/components/form/formElements.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst form = document.getElementById(\"invoice-form\");\nconst save = document.getElementById(\"save-button\");\nconst newItem = document.getElementById(\"new-item\");\nconst formSection = document.getElementById(\"form-section\");\nconst invoiceList = document.getElementById('invoice__list');\nconst backButton = document.getElementById(\"back-button\");\nconst exitButtons = document.querySelectorAll('.exit-form');\n\n// ------- INPUT FIELDS \nlet inputElements = Array.from(document.querySelectorAll(\".invoice-form input\"));\nconst senderStreet = document.getElementById(\"senderStreet\");\nconst senderCity = document.getElementById(\"senderCity\");\nconst senderPostCode = document.getElementById(\"senderPostCode\");\nconst senderCountry = document.getElementById(\"senderCountry\");\nconst clientCountry = document.getElementById(\"clientCountry\");\nconst clientPostCode = document.getElementById(\"clientPostCode\");\nconst clientCity = document.getElementById(\"clientCity\");\nconst clientStreet = document.getElementById(\"clientStreet\");\nconst invoiceDatePicker = document.getElementById(\"invoice-date-picker\");\nconst terms = document.getElementById(\"payment-terms\");\nconst itemList = document.getElementById(\"item-list\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    form, \n    save,\n    senderStreet,\n    senderPostCode,\n    senderCity,\n    senderCountry,\n    invoiceDatePicker,\n    terms,\n    newItem,\n    formSection,\n    invoiceList,\n    backButton,\n    inputElements,\n    exitButtons,\n    clientCountry,\n    clientPostCode,\n    clientCity,\n    clientStreet,\n    itemList\n});\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://invoice-app/./src/javascript/components/form/formElements.js?");

/***/ }),

/***/ "./src/javascript/components/form/formInput.js":
/*!*****************************************************!*\
  !*** ./src/javascript/components/form/formInput.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _form_formElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../form/formElements */ \"./src/javascript/components/form/formElements.js\");\n/* harmony import */ var _form_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../form/validation */ \"./src/javascript/components/form/validation.js\");\n/* harmony import */ var _saveEditForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./saveEditForm */ \"./src/javascript/components/form/saveEditForm.js\");\n\n\n\n\nconst { inputElements, formSection } = _form_formElements__WEBPACK_IMPORTED_MODULE_0__.default;\n\n_form_formElements__WEBPACK_IMPORTED_MODULE_0__.default.save.addEventListener('click', () => {\n     if(formSection.classList.contains('edit')){\n        (0,_saveEditForm__WEBPACK_IMPORTED_MODULE_2__.saveEditForm)()\n     }else{\n        addNewInvoice()\n     }\n});\n\nfunction formatDate(date) {\n    var d = new Date(date),\n        month = '' + (d.getMonth() + 1),\n        day = '' + d.getDate(),\n        year = d.getFullYear();\n\n    if (month.length < 2) \n        month = '0' + month;\n    if (day.length < 2) \n        day = '0' + day;\n\n    return [day, month, year].join('-');\n}\n\nfunction randomLetter(){\n    const alphabet = \"abcdefghijklmnopqrstuvwxyz\"\n    const capitalAlphabet = alphabet.toUpperCase();\n    return capitalAlphabet[Math.floor(Math.random() * capitalAlphabet.length)];\n}\n\nfunction randomNumber(){\n    return Math.floor(Math.random() * 10)\n}\n\nfunction generateId(){\n    let id = [];\n    for(let i = 0; i <= 5; i++){\n        i < 2 ? id.push(randomNumber()) : id.push(randomLetter());    \n    };\n    return id.join('')\n}\n\nfunction structureInvoiceItems(){\n    let itemArray = [];\n    let items = Array.from(document.querySelectorAll('.item'));\n    items.forEach(item => {\n        let itemInputFields =  Array.from(item.querySelectorAll(\"input\"));\n        let structuredItem = itemInputFields.reduce((acc, item) => {\n            return {\n                ...acc, \n                [item.name]: item.value\n            }\n        }, {});\n        structuredItem.price = +structuredItem.price;\n        structuredItem.quantity = +structuredItem.quantity;\n        structuredItem.total = (+(item.querySelector('.total').innerText.slice(1)));\n        itemArray.push(structuredItem)\n    })\n    return itemArray;\n}\n\nfunction getTotal(items){\n    return items.reduce((acc, item) => {\n        return acc + item.total;\n    }, 0);\n}\n\nfunction addNewInvoice(){\n    if ((0,_form_validation__WEBPACK_IMPORTED_MODULE_1__.validate)()){ return };\n\n    const userInput = inputElements.reduce((acc, input) => {\n        return {\n            ...acc, \n            [input.id]: input.value\n        }\n    }, {});\n    \n    const { senderStreet , senderCountry, senderCity, senderPostCode, clientCity, clientCountry, clientPostCode, clientStreet, clientName, clientEmail, description} = userInput;\n    const invoiceDue = _form_formElements__WEBPACK_IMPORTED_MODULE_0__.default.invoiceDatePicker.innerText.replaceAll(' / ', '-');\n    const termNumber = _form_formElements__WEBPACK_IMPORTED_MODULE_0__.default.terms.innerText.match(/\\d+/)[0];\n    const today = formatDate(new Date());\n\n    const invoiceStructuredData = {\n        clientAddress: {\n             city: clientCity,\n             country: clientCountry,\n             postCode: clientPostCode, \n             street: clientStreet\n            },\n        clientEmail: clientEmail,\n        clientName: clientName,\n        createdAt: today,\n        description: description,\n        id: generateId(),\n        items: structureInvoiceItems(),\n        paymentDue: invoiceDue,\n        paymentTerms: +termNumber,\n        senderAddress: {\n             city: senderCity, \n             country: senderCountry,\n             postCode: senderPostCode, \n             street: senderStreet\n            },\n        status: \"pending\",\n    };\n\n    invoiceStructuredData.total = getTotal(invoiceStructuredData.items);\n\n    let invoices = JSON.parse(localStorage.getItem('invoices'));\n    invoices.push(invoiceStructuredData);\n    localStorage.setItem('invoices', JSON.stringify(invoices));\n    _form_formElements__WEBPACK_IMPORTED_MODULE_0__.default.invoiceList.insertAdjacentHTML('afterbegin', ` \n    <a href='../../invoice.html?id=${id}' >\n        <li class=\"invoice\">\n            <div class=\"invoice__id\"><span class=\"text-tertiary\">#</span>${invoiceStructuredData.id}</div>\n            <div class=\"invoice__name\">${invoiceStructuredData.clientName}</div>\n            <div class=\"invoice__date\">${invoiceStructuredData.createdAt}</div>\n            <div class=\"invoice__amount\">$${invoiceStructuredData.total}</div>\n            <div class=\"invoice__status ${invoiceStructuredData.status}\"><p class='${invoiceStructuredData.status}-text'>${invoiceStructuredData.status[0].toUpperCase() + invoiceStructuredData.status.slice(1).toLowerCase()}</p></div>\n        </li>\n     </a>`);\n//     formElements.formSection.classList.remove('active');\n//    main.classList.remove('form-active');\n}\n\n//# sourceURL=webpack://invoice-app/./src/javascript/components/form/formInput.js?");

/***/ }),

/***/ "./src/javascript/components/form/items/item.js":
/*!******************************************************!*\
  !*** ./src/javascript/components/form/items/item.js ***!
  \******************************************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://invoice-app/./src/javascript/components/form/items/item.js?");

/***/ }),

/***/ "./src/javascript/components/form/items/new-item.js":
/*!**********************************************************!*\
  !*** ./src/javascript/components/form/items/new-item.js ***!
  \**********************************************************/
/***/ (() => {

eval("let newItem = document.getElementById('new-item');\nlet itemList = document.getElementById('item-list');\nlet bin = document.querySelectorAll('.bin');\nlet items = document.querySelectorAll('.item');\n\nnewItem.addEventListener('click', (e) => {\n    e.preventDefault();\n    let newItem = `  \n    <div class=\"item item__grid-container\">\n    <div class=\"form-field item-name\">\n      <label for=\"itemName\" class=\"item-label__name\">Item name</label> <br>\n      <input name=\"itemName\"  type=\"text\" class=\"text-field\">\n    </div>\n    <div class=\"form-field item-qty\">\n      <label for=\"quantity\" class=\"item-label__qty\">Qty</label> <br>\n      <input name=\"quantity\"  type=\"text\" class=\"text-field qty\">\n    </div>\n    <div class=\"form-field item-price\">\n      <label for=\"price\" class=\"item-label__price\">price</label> <br>\n      <input name=\"price\" type=\"text\" class=\"text-field price\">\n    </div>\n    <div class=\"form-field item-total\">\n      <label for=\"total\" class=\"item-label__total\">total</label> <br>\n      <div class='total' class='total-number'></div>\n    </div>\n    <svg id='bin' class=\"bin\" width=\"13\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\"><path class=\"delete-item\" d=\"M11.583 3.556v10.666c0 .982-.795 1.778-1.777 1.778H2.694a1.777 1.777 0 01-1.777-1.778V3.556h10.666zM8.473 0l.888.889h3.111v1.778H.028V.889h3.11L4.029 0h4.444z\" fill=\"#888EB0\" fill-rule=\"nonzero\"/></svg>\n    </div>`;\n\n    itemList.insertAdjacentHTML('beforeend', newItem);\n    listenForChangeToTotal()\n\n});\n\nitemList.addEventListener('click', function(e){\n    e.target.classList.contains('delete-item') && e.target.parentElement.parentElement.remove();\n });\n\nfunction listenForChangeToTotal(){\n  let items = document.querySelectorAll('.item.item__grid-container');\n  console.log(items)\n  items.forEach(item => {\n    console.log(item)\n    let qty = item.querySelector('.qty');\n    let price = item.querySelector('.price');\n    let total = item.querySelector('.total');\n\n    [qty, price].forEach(item => {\n      item.addEventListener('change', () => {\n        if(qty.value < 1 || price.value < 1){\n          total.innerText = '$' + 0;\n        }else{\n          total.innerText = '$' + (qty.value * price.value);\n        }\n      })\n    })\n\n  });\n }\n\n listenForChangeToTotal();\n\n\n//# sourceURL=webpack://invoice-app/./src/javascript/components/form/items/new-item.js?");

/***/ }),

/***/ "./src/javascript/components/form/module.js":
/*!**************************************************!*\
  !*** ./src/javascript/components/form/module.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _custom_select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./custom-select */ \"./src/javascript/components/form/custom-select.js\");\n/* harmony import */ var _custom_select__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_custom_select__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _date_picker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./date-picker */ \"./src/javascript/components/form/date-picker.js\");\n/* harmony import */ var _date_picker__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_date_picker__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _items_new_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./items/new-item */ \"./src/javascript/components/form/items/new-item.js\");\n/* harmony import */ var _items_new_item__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_items_new_item__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _items_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./items/item */ \"./src/javascript/components/form/items/item.js\");\n/* harmony import */ var _items_item__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_items_item__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _formInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./formInput */ \"./src/javascript/components/form/formInput.js\");\n/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./validation */ \"./src/javascript/components/form/validation.js\");\n/* harmony import */ var _backAndDiscard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./backAndDiscard */ \"./src/javascript/components/form/backAndDiscard.js\");\n/* harmony import */ var _editForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./editForm */ \"./src/javascript/components/form/editForm.js\");\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://invoice-app/./src/javascript/components/form/module.js?");

/***/ }),

/***/ "./src/javascript/components/form/saveEditForm.js":
/*!********************************************************!*\
  !*** ./src/javascript/components/form/saveEditForm.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"saveEditForm\": () => (/* binding */ saveEditForm)\n/* harmony export */ });\n/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validation */ \"./src/javascript/components/form/validation.js\");\n\n\nfunction saveEditForm(e){\n    if((0,_validation__WEBPACK_IMPORTED_MODULE_0__.validate)()){return};\n\n}\n\n//# sourceURL=webpack://invoice-app/./src/javascript/components/form/saveEditForm.js?");

/***/ }),

/***/ "./src/javascript/components/form/validation.js":
/*!******************************************************!*\
  !*** ./src/javascript/components/form/validation.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"validate\": () => (/* binding */ validate)\n/* harmony export */ });\n/* harmony import */ var _form_formElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../form/formElements */ \"./src/javascript/components/form/formElements.js\");\n\n\nfunction validate(){\n    \n    let allInputFields = Array.from(_form_formElements__WEBPACK_IMPORTED_MODULE_0__.default.form.querySelectorAll('input'));\n   \n    let errors = false;\n \n    allInputFields.forEach(item => {\n        if(item.value == ''){\n            errors = true;\n            item.parentElement.classList.add('error')\n        }else{\n            item.parentElement.classList.remove('error')\n        };\n        item.addEventListener('change', i => {\n           i.target.parentElement.classList.remove('error');\n        })\n    })\n\n    if(errors){\n        _form_formElements__WEBPACK_IMPORTED_MODULE_0__.default.form.classList.add('error');\n        let formSection = document.getElementById('form-section');\n        formSection.scrollTop = _form_formElements__WEBPACK_IMPORTED_MODULE_0__.default.form.scrollHeight;\n    }else{\n        _form_formElements__WEBPACK_IMPORTED_MODULE_0__.default.form.classList.remove('error');\n    }\n\n    return errors;\n\n}\n   \n\n\n\n\n\n// run validate function after save button clicked \n// check all from fields for input \n// if any fields are empty display return and display erros \n\n//# sourceURL=webpack://invoice-app/./src/javascript/components/form/validation.js?");

/***/ }),

/***/ "./src/javascript/components/topBar/filterBar.js":
/*!*******************************************************!*\
  !*** ./src/javascript/components/topBar/filterBar.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _setup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../setup */ \"./src/javascript/setup.js\");\n/* harmony import */ var _topBarElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./topBarElements */ \"./src/javascript/components/topBar/topBarElements.js\");\n\n\n\nconst { filterBar, checkboxElements, filterArray, invoices } = _topBarElements__WEBPACK_IMPORTED_MODULE_1__.default;\n\n\nfilterBar.addEventListener(\"click\", ()  => {\n    filterBar.classList.toggle('active')\n});\n\ncheckboxElements.forEach(item => {\n    item.addEventListener(\"change\", (e) => {\n        if(e.target.checked){\n            filterArray.push(e.target.name);\n        }else{\n            let itemIndex = filterArray.indexOf(e.target.name);\n            filterArray.splice(itemIndex, 1);\n        }\n        localStorage.setItem(\"filterArray\", JSON.stringify(filterArray));\n        filterArray.length > 0 ? filterInvoices(e) : (0,_setup__WEBPACK_IMPORTED_MODULE_0__.displayData)(invoices);\n    })\n})\n;\n\nfunction filterInvoices(){\n    let filteredArray = invoices.reduce((acc, invoice) => {\n        filterArray.indexOf(invoice.status) !== -1 && acc.push(invoice)\n        return acc;\n    } , []);\n    (0,_setup__WEBPACK_IMPORTED_MODULE_0__.displayData)(filteredArray);\n}\n\n\n\n//# sourceURL=webpack://invoice-app/./src/javascript/components/topBar/filterBar.js?");

/***/ }),

/***/ "./src/javascript/components/topBar/invoiceAmount.js":
/*!***********************************************************!*\
  !*** ./src/javascript/components/topBar/invoiceAmount.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _topBarElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./topBarElements */ \"./src/javascript/components/topBar/topBarElements.js\");\n\nlet { inoviceAmount } = _topBarElements__WEBPACK_IMPORTED_MODULE_0__.default;\n\ninoviceAmount.innerText = JSON.parse(localStorage.getItem('invoices')).length;\n\n\n//# sourceURL=webpack://invoice-app/./src/javascript/components/topBar/invoiceAmount.js?");

/***/ }),

/***/ "./src/javascript/components/topBar/newInvoice.js":
/*!********************************************************!*\
  !*** ./src/javascript/components/topBar/newInvoice.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _topBarElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./topBarElements */ \"./src/javascript/components/topBar/topBarElements.js\");\n\nconst { newInvoice, formSection } = _topBarElements__WEBPACK_IMPORTED_MODULE_0__.default;\n\n\nnewInvoice.addEventListener('click', () => {\n    formSection.classList.add('active');\n    main.classList.add('form-active');\n});\n\n\n\n\n//# sourceURL=webpack://invoice-app/./src/javascript/components/topBar/newInvoice.js?");

/***/ }),

/***/ "./src/javascript/components/topBar/topBarElements.js":
/*!************************************************************!*\
  !*** ./src/javascript/components/topBar/topBarElements.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst newInvoice = document.getElementById(\"new-invoice\");\nconst formSection = document.getElementById(\"form-section\");\nconst inoviceAmount = document.getElementById(\"invoice-amount\");\nconst filterBar = document.getElementById(\"filter-bar\");\nconst checkboxElements = document.querySelectorAll(\"input[type=checkbox]\");\n\nlet filterArray = JSON.parse(localStorage.filterArray);\nlet invoices = JSON.parse(localStorage.getItem('invoices'));\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    newInvoice,\n    formSection,\n    main,\n    filterBar,\n    checkboxElements,\n    filterArray,\n    invoices,\n    inoviceAmount\n});\n\n//# sourceURL=webpack://invoice-app/./src/javascript/components/topBar/topBarElements.js?");

/***/ }),

/***/ "./src/javascript/functions/getCurrentInvoice.js":
/*!*******************************************************!*\
  !*** ./src/javascript/functions/getCurrentInvoice.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getCurrentInvoice\": () => (/* binding */ getCurrentInvoice)\n/* harmony export */ });\n/* harmony import */ var _invoicePage_invoicePageEls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../invoicePage/invoicePageEls */ \"./src/javascript/invoicePage/invoicePageEls.js\");\n\nconst { currentId } = _invoicePage_invoicePageEls__WEBPACK_IMPORTED_MODULE_0__.default\n\nfunction getCurrentInvoice(){\n    const invoices = JSON.parse(localStorage.getItem('invoices'));\n    return invoices.filter(obj => obj.id == currentId)[0];\n  }\n\n//# sourceURL=webpack://invoice-app/./src/javascript/functions/getCurrentInvoice.js?");

/***/ }),

/***/ "./src/javascript/home/homeEls.js":
/*!****************************************!*\
  !*** ./src/javascript/home/homeEls.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst main = document.getElementById(\"main\");\nconst invoiceList = document.getElementById('invoice__list');\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    main,\n    invoiceList\n});\n\n//# sourceURL=webpack://invoice-app/./src/javascript/home/homeEls.js?");

/***/ }),

/***/ "./src/javascript/invoicePage/invoicePageEls.js":
/*!******************************************************!*\
  !*** ./src/javascript/invoicePage/invoicePageEls.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst deleteButton = document.querySelector('.delete-invoice');\nconst currentId = window.location.search.slice(4);\nconst deleteModal = document.getElementById('deleteModal');\nconst modalOpeners = document.querySelectorAll('.delete-modal-opener');\nconst cancelModal = document.getElementById('deleteModal__cancel');\nconst statusContainer = document.querySelector('.invoice__status');\nconst detailsContainer = document.getElementById('detail-container');\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    deleteButton,\n    currentId,\n    deleteModal,\n    modalOpeners,\n    cancelModal,\n    statusContainer,\n    detailsContainer\n});\n\n//# sourceURL=webpack://invoice-app/./src/javascript/invoicePage/invoicePageEls.js?");

/***/ }),

/***/ "./src/javascript/setup.js":
/*!*********************************!*\
  !*** ./src/javascript/setup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayData\": () => (/* binding */ displayData)\n/* harmony export */ });\n/* harmony import */ var _home_homeEls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/homeEls */ \"./src/javascript/home/homeEls.js\");\n\nconst { invoiceList } = _home_homeEls__WEBPACK_IMPORTED_MODULE_0__.default\n\nlocalStorage.setItem(\"filterArray\", '[]');\n\nfunction dataController(){\n    if(localStorage.invoices){\n        let data = JSON.parse(localStorage.getItem('invoices'));\n        displayData(data)\n    }else{\n        let dataPromise = fetch(\"https://invoiceapp-6b326-default-rtdb.firebaseio.com/.json\");\n        dataPromise\n        .then(response => response.json())\n        .then(data => {\n            displayData(data);\n            localStorage.setItem('invoices', JSON.stringify(data));\n        })\n        .catch(() => console.log('something went wrong'))\n    }\n}\n\nfunction displayData(data){\n    invoiceList.innerHTML = \"\";\n    data.forEach(({clientEmail: email, clientName: name, total: amount, createdAt: date, id, status}) => {\n        let invoice = ` \n        <a href='../../invoice.html?id=${id}' >\n            <li class=\"invoice\">\n                <div class=\"invoice__id\"><span class=\"text-tertiary\">#</span>${id}</div>\n                <div class=\"invoice__name\">${name}</div>\n                <div class=\"invoice__date\">${date}</div>\n                <div class=\"invoice__amount\">$${amount}</div>\n                <div class=\"invoice__status ${status}\"><p class='${status}-text'>${status[0].toUpperCase() + status.slice(1).toLowerCase()}</p></div>\n            </li>\n         </a>\n         `;\n         invoiceList.innerHTML = invoiceList.innerHTML + invoice;\n    })\n}\n\ndataController();\n\n\n\n\n\n//# sourceURL=webpack://invoice-app/./src/javascript/setup.js?");

/***/ }),

/***/ "./src/assets/image-avatar.jpg":
/*!*************************************!*\
  !*** ./src/assets/image-avatar.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"8220c87d975aeed55de0.jpg\";\n\n//# sourceURL=webpack://invoice-app/./src/assets/image-avatar.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;