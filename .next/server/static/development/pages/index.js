module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/About/About.tsx":
/*!************************************!*\
  !*** ./components/About/About.tsx ***!
  \************************************/
/*! exports provided: About */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "About", function() { return About; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/jorgeignaciogaray/Desktop/Random/Portafolio-v2/components/About/About.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const About = ({
  isEnglish
}) => {
  return __jsx("div", {
    className: "flex mx-auto ml-40 mr-40 mt-12 justify-center align-middle items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("img", {
    className: "rounded-full",
    src: "https://avatars.githubusercontent.com/u/76756295?v=4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }), __jsx("p", {
    className: "text-xl ml-10 text-white text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, isEnglish ? `Full-stack web designer and developer, front-end lover. I trained in
                Henry as a full-stack developer, creating projects that were real
                and complex. In addition, the bootcamp greatly improved my
                interpersonal relationships. skills and gave me the opportunity to
                teach beginning students.` : `Diseñador web y desarrollador Full-Stack, amante del front-end. Me forme en Henry como desarrollador Full-stack, creando proyectos que fueran reales
                y complejo. Además, el bootcamp mejoró enormemente mis relaciones interpersonales.
                habilidades y me dio la oportunidad de enseñar a estudiantes principiantes.`));
};

/***/ }),

/***/ "./components/Contact/contact.tsx":
/*!****************************************!*\
  !*** ./components/Contact/contact.tsx ***!
  \****************************************/
/*! exports provided: Contact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contact", function() { return Contact; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/jorgeignaciogaray/Desktop/Random/Portafolio-v2/components/Contact/contact.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Contact = () => {
  return __jsx("div", {
    className: "flex w-1/2 mx-auto mt-12 pb-24 justify-around",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("a", {
    href: "https://www.linkedin.com/in/jorgeignaciogaray/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("img", {
    src: "https://github.com/Viozhu/Viozhu.github.io/blob/main/Iconos/linkedin.png?raw=true",
    alt: "link",
    width: "60",
    height: "60",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  })), __jsx("a", {
    href: "https://mail.google.com/a/?view=cm&fs=1&to=garayjorgeignacio@gmail.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("img", {
    src: "https://github.com/Viozhu/Viozhu.github.io/blob/main/Iconos/gmail.png?raw=true",
    alt: "gmail",
    width: "60",
    height: "60",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  })), __jsx("a", {
    href: "https://wa.me/5493434592663?text=Hi!%20I%20saw%20your%20portafolio",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("img", {
    src: "https://github.com/Viozhu/Viozhu.github.io/blob/main/Iconos/whatsapp.png?raw=true",
    alt: "whtsapp",
    width: "60",
    height: "60",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  })), __jsx("a", {
    href: "https://github.com/Viozhu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("img", {
    className: "icono",
    src: "https://github.com/Viozhu/Viozhu.github.io/blob/main/Iconos/github%20(1).png?raw=true",
    alt: "github",
    width: "60",
    height: "60",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  })));
};

/***/ }),

/***/ "./components/Layout/Layout.tsx":
/*!**************************************!*\
  !*** ./components/Layout/Layout.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _NavBar_navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../NavBar/navbar */ "./components/NavBar/navbar.tsx");
/* harmony import */ var react_tsparticles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-tsparticles */ "react-tsparticles");
/* harmony import */ var react_tsparticles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_tsparticles__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/jorgeignaciogaray/Desktop/Random/Portafolio-v2/components/Layout/Layout.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];





const Layout = ({
  children,
  title = '',
  isEnglish,
  setIsEnglish
}) => {
  return __jsx("div", {
    className: " bg-black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, title), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }), __jsx("meta", {
    charSet: "utf-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  })), __jsx("div", {
    className: "w-full h-full z-50 sticky",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, __jsx(_NavBar_navbar__WEBPACK_IMPORTED_MODULE_2__["Navbar"], {
    isEnglish: isEnglish,
    setIsEnglish: setIsEnglish,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }), children), __jsx(react_tsparticles__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: "z-0",
    params: {
      "particles": {
        "number": {
          "value": 150,
          "density": {
            "enable": true,
            "value_area": 1803.4120608655228
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 2,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 4
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.4008530152163807,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 1.5,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 0,
          "color": "#ffffff",
          "opacity": 0.3687847739990702,
          "width": 0.6413648243462091
        },
        "move": {
          "enable": true,
          "speed": 2,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "window",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "repulse"
          },
          "onclick": {
            "enable": false,
            "mode": "bubble"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8
          },
          "repulse": {
            "distance": 100,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/NavBar/navbar.tsx":
/*!**************************************!*\
  !*** ./components/NavBar/navbar.tsx ***!
  \**************************************/
/*! exports provided: Navbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Navbar", function() { return Navbar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./components/NavBar/styles.ts");
var _jsxFileName = "/Users/jorgeignaciogaray/Desktop/Random/Portafolio-v2/components/NavBar/navbar.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Navbar = ({
  isEnglish,
  setIsEnglish
}) => {
  return __jsx("nav", {
    className: _styles__WEBPACK_IMPORTED_MODULE_1__["NAVBAR"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("div", {
    className: _styles__WEBPACK_IMPORTED_MODULE_1__["NAV_TITLE_CONTIANER"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("span", {
    className: _styles__WEBPACK_IMPORTED_MODULE_1__["NAV_TITLE"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, "Jorge Ignacio Garay")), __jsx("div", {
    className: _styles__WEBPACK_IMPORTED_MODULE_1__["BUTTON_CONTAINER"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx("a", {
    href: "#about",
    className: _styles__WEBPACK_IMPORTED_MODULE_1__["A_STYLE"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, "About")), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, __jsx("a", {
    href: "#portafolio",
    className: _styles__WEBPACK_IMPORTED_MODULE_1__["A_STYLE"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, "Portafolio")), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, __jsx("a", {
    href: "#skills",
    className: _styles__WEBPACK_IMPORTED_MODULE_1__["A_STYLE"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, "Skills")), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, __jsx("a", {
    href: "#contact",
    className: _styles__WEBPACK_IMPORTED_MODULE_1__["A_STYLE"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, "Contact")), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, __jsx("button", {
    className: _styles__WEBPACK_IMPORTED_MODULE_1__["A_STYLE"],
    onClick: () => setIsEnglish(!isEnglish),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, isEnglish ? 'EN' : 'ES'))));
};

/***/ }),

/***/ "./components/NavBar/styles.ts":
/*!*************************************!*\
  !*** ./components/NavBar/styles.ts ***!
  \*************************************/
/*! exports provided: A_STYLE, NAVBAR, NAV_TITLE_CONTIANER, NAV_TITLE, BUTTON_CONTAINER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A_STYLE", function() { return A_STYLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAVBAR", function() { return NAVBAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAV_TITLE_CONTIANER", function() { return NAV_TITLE_CONTIANER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAV_TITLE", function() { return NAV_TITLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUTTON_CONTAINER", function() { return BUTTON_CONTAINER; });
const A_STYLE = "inline-block text-sm px-4 mx-2 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-black hover:bg-white mt-4 lg:mt-0";
const NAVBAR = "flex items-center justify-between flex-wrap p-6";
const NAV_TITLE_CONTIANER = "flex items-center flex-shrink-0 text-white mr-6";
const NAV_TITLE = "font-semibold text-xl tracking-tight";
const BUTTON_CONTAINER = "flex items-center flex-shrink-0 text-white mr-6"; //   {
//     "name": "next-tailwind-typescript-starter",
//     "version": "1.0.0",
//     "scripts": {
//       "dev": "next",
//       "build": "next build",
//       "start": "next start",
//       "stage": "yarn build; yarn start",
//       "type-check": "tsc"
//     },
//     "dependencies": {
//       "isomorphic-unfetch": "3.0.0",
//       "next": "latest",
//       "react": "16.12.0",
//       "react-dom": "16.12.0",
//       "react-tsparticles": "1.39.0"
//     },
//     "devDependencies": {
//       "@fullhuman/postcss-purgecss": "2.0.5",
//       "@types/node": "12.12.21",
//       "@types/react": "16.9.16",
//       "@types/react-dom": "16.9.4",
//       "postcss-preset-env": "6.7.0",
//       "tailwindcss": "1.1.4",
//       "typescript": "3.7.3"
//     },
//     "license": "ISC"
//   }

/***/ }),

/***/ "./components/Skills/skills.tsx":
/*!**************************************!*\
  !*** ./components/Skills/skills.tsx ***!
  \**************************************/
/*! exports provided: Skills */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Skills", function() { return Skills; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/jorgeignaciogaray/Desktop/Random/Portafolio-v2/components/Skills/skills.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Skills = () => {
  return __jsx("div", {
    className: "flex flex-wrap justify-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("div", {
    className: "mx-5 my-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("img", {
    src: "https://github.com/Viozhu/Viozhu.github.io/blob/main/Iconos/javascript%20(1).png?raw=true",
    width: "60",
    height: "60",
    className: "mx-auto pb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }), __jsx("p", {
    className: "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, "Javascript")), __jsx("div", {
    className: "mx-5 my-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("img", {
    src: "https://cdn.worldvectorlogo.com/logos/typescript-2.svg",
    width: "60",
    height: "60",
    className: "mx-auto pb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }), __jsx("p", {
    className: "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, "TypeSctipt")), __jsx("div", {
    className: "mx-5 my-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx("img", {
    src: "https://github.com/Viozhu/Viozhu.github.io/blob/main/Iconos/react.png?raw=true",
    width: "60",
    height: "60",
    className: "mx-auto pb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }), __jsx("p", {
    className: "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, "React")), __jsx("div", {
    className: "mx-5 my-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, __jsx("img", {
    src: "https://github.com/Viozhu/Viozhu.github.io/blob/main/Iconos/redux.png?raw=true",
    width: "60",
    height: "60",
    className: "mx-auto pb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }), __jsx("p", {
    className: "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, "Redux")), __jsx("div", {
    className: "mx-5 my-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx("img", {
    src: "https://sebastian-gomez.com/nextjs.png",
    width: "60",
    height: "60",
    className: "mx-auto pb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }), __jsx("p", {
    className: "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, "NextJS")), __jsx("div", {
    className: "mx-5 my-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, __jsx("img", {
    src: "https://github.com/Viozhu/Viozhu.github.io/blob/main/Iconos/git.png?raw=true",
    width: "60",
    height: "60",
    className: "mx-auto pb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }), __jsx("p", {
    className: "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, "Git")), __jsx("div", {
    className: "mx-5 my-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, __jsx("img", {
    src: "https://github.com/Viozhu/Viozhu.github.io/blob/main/Iconos/github.png?raw=true",
    width: "60",
    height: "60",
    className: "mx-auto pb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }), __jsx("p", {
    className: "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, "Github")), __jsx("div", {
    className: "mx-5 my-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, __jsx("img", {
    src: "https://github.com/Viozhu/Viozhu.github.io/blob/main/Iconos/adobe-photoshop.png?raw=true",
    width: "60",
    height: "60",
    className: "mx-auto pb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }), __jsx("p", {
    className: "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, "Photoshop")), __jsx("div", {
    className: "mx-5 my-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, __jsx("img", {
    src: "https://github.com/Viozhu/Viozhu.github.io/blob/main/Iconos/nodejs.png?raw=true",
    width: "60",
    height: "60",
    className: "mx-auto pb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }), __jsx("p", {
    className: "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, "NodeJs")), __jsx("div", {
    className: "mx-5 my-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, __jsx("img", {
    src: "https://github.com/Viozhu/Viozhu.github.io/blob/main/Iconos/express.png?raw=true",
    width: "60",
    height: "60",
    className: "mx-auto pb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }), __jsx("p", {
    className: "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, "Express")), __jsx("div", {
    className: "mx-5 my-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, __jsx("img", {
    src: "https://github.com/Viozhu/Viozhu.github.io/blob/main/Iconos/bootstrap.png?raw=true",
    width: "60",
    height: "60",
    className: "mx-auto pb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }), __jsx("p", {
    className: "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, "Bootstrap")), __jsx("div", {
    className: "mx-5 my-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, __jsx("img", {
    src: "https://github.com/Viozhu/Viozhu.github.io/blob/main/Iconos/sequelize.png?raw=true",
    width: "60",
    height: "60",
    className: "mx-auto pb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }), __jsx("p", {
    className: "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, "Sequelize")), __jsx("div", {
    className: "mx-5 my-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, __jsx("img", {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png",
    width: "60",
    height: "60",
    className: "mx-auto pb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }), __jsx("p", {
    className: "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, "Tailwind Css")), __jsx("div", {
    className: "mx-5 my-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, __jsx("img", {
    src: "https://cdn.worldvectorlogo.com/logos/material-ui-1.svg",
    width: "60",
    height: "60",
    className: "mx-auto pb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }), __jsx("p", {
    className: "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }, "Material UI")), __jsx("div", {
    className: "mx-5 my-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, __jsx("img", {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/2048px-GraphQL_Logo.svg.png",
    width: "60",
    height: "60",
    className: "mx-auto pb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }), __jsx("p", {
    className: "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, "Graphql")), __jsx("div", {
    className: "mx-5 my-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, __jsx("img", {
    src: "https://github.com/Viozhu/Viozhu.github.io/blob/main/Iconos/html5.png?raw=true",
    width: "60",
    height: "60",
    className: "mx-auto pb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }), __jsx("p", {
    className: "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }, "Html")), __jsx("div", {
    className: "mx-5 my-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }, __jsx("img", {
    src: "https://github.com/Viozhu/Viozhu.github.io/blob/main/Iconos/css3.png?raw=true",
    width: "60",
    height: "60",
    className: "mx-auto pb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }), __jsx("p", {
    className: "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }, "CSS")));
};

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout/Layout */ "./components/Layout/Layout.tsx");
/* harmony import */ var _components_Skills_skills__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Skills/skills */ "./components/Skills/skills.tsx");
/* harmony import */ var _components_Contact_contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Contact/contact */ "./components/Contact/contact.tsx");
/* harmony import */ var _components_About_About__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/About/About */ "./components/About/About.tsx");
var _jsxFileName = "/Users/jorgeignaciogaray/Desktop/Random/Portafolio-v2/pages/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];






const IndexPage = () => {
  const [isEnglish, setIsEnglish] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](true);
  return __jsx("div", {
    className: "bg-black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Jorge Ignacio Garay",
    isEnglish: isEnglish,
    setIsEnglish: setIsEnglish,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx("div", {
    className: "flex flex-col h-screen justify-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx("div", {
    className: "flex justify-center h-full items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, __jsx("h1", {
    className: "text-white text-3xl italic",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, isEnglish ? 'Hi, Im Jorge Ignacio' : 'Hola, soy Jorge Ignacio', "  ", __jsx("h2", {
    className: "text-white italic text-2xl text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, isEnglish ? 'a' : 'un', " Full Stack Developer"))), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1440 320",
    className: "align-bottom self-end",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, __jsx("path", {
    fill: "#ff5500",
    fillOpacity: "0.99",
    d: "M0,96L34.3,106.7C68.6,117,137,139,206,149.3C274.3,160,343,160,411,149.3C480,139,549,117,617,128C685.7,139,754,181,823,170.7C891.4,160,960,96,1029,74.7C1097.1,53,1166,75,1234,85.3C1302.9,96,1371,96,1406,96L1440,96L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#9c4221",
    fillOpacity: "0.99",
    d: "M0,320L20,309.3C40,299,80,277,120,250.7C160,224,200,192,240,197.3C280,203,320,245,360,250.7C400,256,440,224,480,181.3C520,139,560,85,600,96C640,107,680,181,720,208C760,235,800,213,840,213.3C880,213,920,235,960,240C1000,245,1040,235,1080,229.3C1120,224,1160,224,1200,224C1240,224,1280,224,1320,208C1360,192,1400,160,1420,144L1440,128L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  })))), __jsx("div", {
    className: "mt-96 bg-orange-800",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, __jsx("a", {
    id: "about",
    className: "text-transparent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, "a")), __jsx("div", {
    className: "bg-orange-800 h-auto py-16 flex flex-col align-middle items-center justify-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, __jsx("div", {
    className: "flex justify-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, __jsx("h1", {
    className: "text-4xl text-white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, isEnglish ? 'About me' : 'Sobre mí')), __jsx(_components_About_About__WEBPACK_IMPORTED_MODULE_4__["About"], {
    isEnglish: isEnglish,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  })), __jsx("div", {
    className: "mt-96 mb-40",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1440 320",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, __jsx("path", {
    fill: "#ff5500",
    fillOpacity: "1",
    d: "M0,192L48,181.3C96,171,192,149,288,165.3C384,181,480,235,576,229.3C672,224,768,160,864,154.7C960,149,1056,203,1152,192C1248,181,1344,107,1392,69.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#9c4221",
    fillOpacity: "1",
    d: "M0,96L48,133.3C96,171,192,245,288,234.7C384,224,480,128,576,101.3C672,75,768,117,864,122.7C960,128,1056,96,1152,106.7C1248,117,1344,171,1392,197.3L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  })), __jsx("a", {
    id: "portafolio",
    className: "text-transparent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, "a"), __jsx("h1", {
    className: "text-4xl text-white text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, "Portafolio")), __jsx("div", {
    className: "flex mx-auto ml-40 mr-40 mt-12 justify-center align-middle items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1440 320",
    className: "align-bottom self-end",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, __jsx("path", {
    fill: "#00cba9",
    fillOpacity: "0.99",
    d: "M0,96L34.3,106.7C68.6,117,137,139,206,149.3C274.3,160,343,160,411,149.3C480,139,549,117,617,128C685.7,139,754,181,823,170.7C891.4,160,960,96,1029,74.7C1097.1,53,1166,75,1234,85.3C1302.9,96,1371,96,1406,96L1440,96L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#7f9cf5",
    fillOpacity: "0.99",
    d: "M0,320L20,309.3C40,299,80,277,120,250.7C160,224,200,192,240,197.3C280,203,320,245,360,250.7C400,256,440,224,480,181.3C520,139,560,85,600,96C640,107,680,181,720,208C760,235,800,213,840,213.3C880,213,920,235,960,240C1000,245,1040,235,1080,229.3C1120,224,1160,224,1200,224C1240,224,1280,224,1320,208C1360,192,1400,160,1420,144L1440,128L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }))), __jsx("div", {
    className: "mt-96 bg-indigo-400",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, __jsx("a", {
    id: "skills",
    className: "text-transparent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, "a")), __jsx("div", {
    className: "bg-indigo-400 h-auto py-16 flex flex-col align-middle items-center justify-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, __jsx("div", {
    className: "flex justify-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, __jsx("h1", {
    className: "text-4xl text-white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, "Skills")), __jsx("div", {
    className: "flex mx-auto ml-40 mr-40 mt-12 justify-center align-middle items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }, __jsx(_components_Skills_skills__WEBPACK_IMPORTED_MODULE_2__["Skills"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }))), __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1440 320",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, __jsx("path", {
    fill: "#0f8a75",
    fillOpacity: "1",
    d: "M0,192L48,181.3C96,171,192,149,288,165.3C384,181,480,235,576,229.3C672,224,768,160,864,154.7C960,149,1056,203,1152,192C1248,181,1344,107,1392,69.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }), __jsx("path", {
    fill: "#7f9cf5",
    fillOpacity: "1",
    d: "M0,96L48,133.3C96,171,192,245,288,234.7C384,224,480,128,576,101.3C672,75,768,117,864,122.7C960,128,1056,96,1152,106.7C1248,117,1344,171,1392,197.3L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  })), __jsx("a", {
    id: "contact",
    className: "text-transparent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }, "a"), __jsx("h1", {
    className: "text-4xl text-white text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: undefined
  }, isEnglish ? 'Contact' : 'Contacto'), __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  }, "Connect with me:"), __jsx(_components_Contact_contact__WEBPACK_IMPORTED_MODULE_3__["Contact"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ }),

/***/ 4:
/*!*******************************!*\
  !*** multi ./pages/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jorgeignaciogaray/Desktop/Random/Portafolio-v2/pages/index.tsx */"./pages/index.tsx");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-tsparticles":
/*!************************************!*\
  !*** external "react-tsparticles" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-tsparticles");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map