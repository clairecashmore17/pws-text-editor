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

/***/ "./src/js/install.js":
/*!***************************!*\
  !*** ./src/js/install.js ***!
  \***************************/
/***/ (() => {

eval("const butInstall = document.getElementById(\"buttonInstall\"); // Logic for installing the PWA\n// Add an event handler to the `beforeinstallprompt` event\n\nwindow.addEventListener(\"beforeinstallprompt\", event => {\n  // Store the triggered events\n  window.deferredPrompt = event; // Remove the hidden class from the button.\n\n  butInstall.classList.toggle(\"hidden\", false);\n}); // Implement a click event handler on the `butInstall` element\n\nbutInstall.addEventListener(\"click\", async () => {\n  const promptEvent = window.deferredPrompt;\n\n  if (!promptEvent) {\n    return;\n  } // Show prompt\n\n\n  promptEvent.prompt(); // Reset the deferred prompt variable, it can only be used once.\n\n  window.deferredPrompt = null;\n  butInstall.classList.toggle(\"hidden\", true);\n}); // Add an handler for the `appinstalled` event\n\nwindow.addEventListener(\"appinstalled\", event => {\n  // Clear prompt\n  window.deferredPrompt = null;\n});\n\n//# sourceURL=webpack://client/./src/js/install.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/install.js"]();
/******/ 	
/******/ })()
;