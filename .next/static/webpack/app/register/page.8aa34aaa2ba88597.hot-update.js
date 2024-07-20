"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/register/page",{

/***/ "(app-pages-browser)/./src/app/register/page.tsx":
/*!***********************************!*\
  !*** ./src/app/register/page.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-hook-form */ \"(app-pages-browser)/./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var _hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hookform/resolvers/zod */ \"(app-pages-browser)/./node_modules/@hookform/resolvers/zod/dist/zod.mjs\");\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! zod */ \"(app-pages-browser)/./node_modules/zod/lib/index.mjs\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _components_ui_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/form */ \"(app-pages-browser)/./src/components/ui/form.tsx\");\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ui/input */ \"(app-pages-browser)/./src/components/ui/input.tsx\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./src/components/ui/button.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n // Importa o hook useRouter\n\n\n\nconst schema = zod__WEBPACK_IMPORTED_MODULE_7__.object({\n    email: zod__WEBPACK_IMPORTED_MODULE_7__.string().email(\"Email inv\\xe1lido\"),\n    password: zod__WEBPACK_IMPORTED_MODULE_7__.string().min(6, \"A senha deve ter pelo menos 6 caracteres\"),\n    name: zod__WEBPACK_IMPORTED_MODULE_7__.string()\n});\nconst RegisterPage = ()=>{\n    _s();\n    const form = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_8__.useForm)({\n        resolver: (0,_hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_2__.zodResolver)(schema),\n        defaultValues: {\n            email: \"\",\n            password: \"\",\n            name: \"\"\n        }\n    });\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)(); // Inicializa o hook useRouter\n    const onSubmit = (data)=>{\n        console.log(data);\n        // Lógica de login aqui\n        // Após o login bem-sucedido, redirecione para outra página\n        router.push(\"/teste\"); // Substitua '/pagina-destino' pelo caminho para o qual deseja redirecionar\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen flex items-center justify-center bg-gradient-to-r from-black to-purple-600\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full max-w-md p-9 space-y-6 bg-white bg-opacity-70 backdrop-blur-lg rounded-lg shadow-lg\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-3xl font-bold text-center text-gray-800\",\n                    children: \"Registre-se\"\n                }, void 0, false, {\n                    fileName: \"/home/patric/Documentos/repo-bruno/bruno-repo/src/app/register/page.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_4__.Form, {\n                    ...form,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: form.handleSubmit(onSubmit),\n                        className: \"space-y-6\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_4__.FormField, {\n                                control: form.control,\n                                name: \"name\",\n                                render: (param)=>{\n                                    let { field } = param;\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_4__.FormItem, {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_4__.FormLabel, {\n                                                children: \"Nome\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/patric/Documentos/repo-bruno/bruno-repo/src/app/register/page.tsx\",\n                                                lineNumber: 58,\n                                                columnNumber: 19\n                                            }, void 0),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_4__.FormControl, {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_5__.Input, {\n                                                    ...field,\n                                                    placeholder: \"Digite seu Nome\",\n                                                    className: \"w-full p-3 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/patric/Documentos/repo-bruno/bruno-repo/src/app/register/page.tsx\",\n                                                    lineNumber: 60,\n                                                    columnNumber: 21\n                                                }, void 0)\n                                            }, void 0, false, {\n                                                fileName: \"/home/patric/Documentos/repo-bruno/bruno-repo/src/app/register/page.tsx\",\n                                                lineNumber: 59,\n                                                columnNumber: 19\n                                            }, void 0),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_4__.FormDescription, {}, void 0, false, {\n                                                fileName: \"/home/patric/Documentos/repo-bruno/bruno-repo/src/app/register/page.tsx\",\n                                                lineNumber: 62,\n                                                columnNumber: 19\n                                            }, void 0),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_4__.FormMessage, {}, void 0, false, {\n                                                fileName: \"/home/patric/Documentos/repo-bruno/bruno-repo/src/app/register/page.tsx\",\n                                                lineNumber: 63,\n                                                columnNumber: 19\n                                            }, void 0)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/patric/Documentos/repo-bruno/bruno-repo/src/app/register/page.tsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 17\n                                    }, void 0);\n                                }\n                            }, void 0, false, {\n                                fileName: \"/home/patric/Documentos/repo-bruno/bruno-repo/src/app/register/page.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_4__.FormField, {\n                                control: form.control,\n                                name: \"email\",\n                                render: (param)=>{\n                                    let { field } = param;\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_4__.FormItem, {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_4__.FormLabel, {\n                                                children: \"Email\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/patric/Documentos/repo-bruno/bruno-repo/src/app/register/page.tsx\",\n                                                lineNumber: 72,\n                                                columnNumber: 19\n                                            }, void 0),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_4__.FormControl, {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_5__.Input, {\n                                                    ...field,\n                                                    placeholder: \"Digite seu email\",\n                                                    className: \"w-full p-3 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/patric/Documentos/repo-bruno/bruno-repo/src/app/register/page.tsx\",\n                                                    lineNumber: 74,\n                                                    columnNumber: 21\n                                                }, void 0)\n                                            }, void 0, false, {\n                                                fileName: \"/home/patric/Documentos/repo-bruno/bruno-repo/src/app/register/page.tsx\",\n                                                lineNumber: 73,\n                                                columnNumber: 19\n                                            }, void 0),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_4__.FormDescription, {}, void 0, false, {\n                                                fileName: \"/home/patric/Documentos/repo-bruno/bruno-repo/src/app/register/page.tsx\",\n                                                lineNumber: 76,\n                                                columnNumber: 19\n                                            }, void 0),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_4__.FormMessage, {}, void 0, false, {\n                                                fileName: \"/home/patric/Documentos/repo-bruno/bruno-repo/src/app/register/page.tsx\",\n                                                lineNumber: 77,\n                                                columnNumber: 19\n                                            }, void 0)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/patric/Documentos/repo-bruno/bruno-repo/src/app/register/page.tsx\",\n                                        lineNumber: 71,\n                                        columnNumber: 17\n                                    }, void 0);\n                                }\n                            }, void 0, false, {\n                                fileName: \"/home/patric/Documentos/repo-bruno/bruno-repo/src/app/register/page.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_4__.FormField, {\n                                control: form.control,\n                                name: \"password\",\n                                render: (param)=>{\n                                    let { field } = param;\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_4__.FormItem, {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_4__.FormLabel, {\n                                                children: \"Senha\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/patric/Documentos/repo-bruno/bruno-repo/src/app/register/page.tsx\",\n                                                lineNumber: 87,\n                                                columnNumber: 19\n                                            }, void 0),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_4__.FormControl, {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_5__.Input, {\n                                                    ...field,\n                                                    type: \"password\",\n                                                    placeholder: \"Digite sua senha\",\n                                                    className: \"w-full p-3 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/patric/Documentos/repo-bruno/bruno-repo/src/app/register/page.tsx\",\n                                                    lineNumber: 89,\n                                                    columnNumber: 21\n                                                }, void 0)\n                                            }, void 0, false, {\n                                                fileName: \"/home/patric/Documentos/repo-bruno/bruno-repo/src/app/register/page.tsx\",\n                                                lineNumber: 88,\n                                                columnNumber: 19\n                                            }, void 0),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_4__.FormDescription, {}, void 0, false, {\n                                                fileName: \"/home/patric/Documentos/repo-bruno/bruno-repo/src/app/register/page.tsx\",\n                                                lineNumber: 91,\n                                                columnNumber: 19\n                                            }, void 0),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_4__.FormMessage, {}, void 0, false, {\n                                                fileName: \"/home/patric/Documentos/repo-bruno/bruno-repo/src/app/register/page.tsx\",\n                                                lineNumber: 92,\n                                                columnNumber: 19\n                                            }, void 0)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/patric/Documentos/repo-bruno/bruno-repo/src/app/register/page.tsx\",\n                                        lineNumber: 86,\n                                        columnNumber: 17\n                                    }, void 0);\n                                }\n                            }, void 0, false, {\n                                fileName: \"/home/patric/Documentos/repo-bruno/bruno-repo/src/app/register/page.tsx\",\n                                lineNumber: 82,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                                type: \"submit\",\n                                className: \"w-full py-3 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500\",\n                                children: \"Entrar\"\n                            }, void 0, false, {\n                                fileName: \"/home/patric/Documentos/repo-bruno/bruno-repo/src/app/register/page.tsx\",\n                                lineNumber: 96,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/patric/Documentos/repo-bruno/bruno-repo/src/app/register/page.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/patric/Documentos/repo-bruno/bruno-repo/src/app/register/page.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/patric/Documentos/repo-bruno/bruno-repo/src/app/register/page.tsx\",\n            lineNumber: 48,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/patric/Documentos/repo-bruno/bruno-repo/src/app/register/page.tsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, undefined);\n};\n_s(RegisterPage, \"ZPGBDzG+sbO7AagTaILayzUE6Qc=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_8__.useForm,\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = RegisterPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RegisterPage);\nvar _c;\n$RefreshReg$(_c, \"RegisterPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcmVnaXN0ZXIvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUUwQjtBQUNnQjtBQUNZO0FBQzdCO0FBQ21CLENBQUMsMkJBQTJCO0FBUzFDO0FBQ2dCO0FBQ0U7QUFFaEQsTUFBTWMsU0FBU1gsdUNBQVEsQ0FBQztJQUN0QmEsT0FBT2IsdUNBQVEsR0FBR2EsS0FBSyxDQUFDO0lBQ3hCRSxVQUFVZix1Q0FBUSxHQUFHZ0IsR0FBRyxDQUFDLEdBQUc7SUFDNUJDLE1BQU1qQix1Q0FBUTtBQUNoQjtBQUVBLE1BQU1rQixlQUFlOztJQUNuQixNQUFNQyxPQUFPckIsd0RBQU9BLENBQUM7UUFDbkJzQixVQUFVckIsb0VBQVdBLENBQUNZO1FBQ3RCVSxlQUFlO1lBQ2JSLE9BQU87WUFDUEUsVUFBVTtZQUNWRSxNQUFNO1FBQ1I7SUFDRjtJQUVBLE1BQU1LLFNBQVNyQiwwREFBU0EsSUFBSSw4QkFBOEI7SUFFMUQsTUFBTXNCLFdBQVcsQ0FBQ0M7UUFDaEJDLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFDWix1QkFBdUI7UUFFdkIsMkRBQTJEO1FBQzNERixPQUFPSyxJQUFJLENBQUMsV0FBVywyRUFBMkU7SUFDcEc7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNDO29CQUFHRCxXQUFVOzhCQUErQzs7Ozs7OzhCQUM3RCw4REFBQzNCLHFEQUFJQTtvQkFBRSxHQUFHaUIsSUFBSTs4QkFFWiw0RUFBQ0E7d0JBQUtJLFVBQVVKLEtBQUtZLFlBQVksQ0FBQ1I7d0JBQVdNLFdBQVU7OzBDQUN2RCw4REFBQ3hCLDBEQUFTQTtnQ0FDTjJCLFNBQVNiLEtBQUthLE9BQU87Z0NBQ3JCZixNQUFLO2dDQUNMZ0IsUUFBUTt3Q0FBQyxFQUFFQyxLQUFLLEVBQUU7eURBQ2hCLDhEQUFDNUIseURBQVFBOzswREFDUCw4REFBQ0MsMERBQVNBOzBEQUFDOzs7Ozs7MERBQ1gsOERBQUNKLDREQUFXQTswREFDViw0RUFBQ00sdURBQUtBO29EQUFFLEdBQUd5QixLQUFLO29EQUFFQyxhQUFZO29EQUFrQk4sV0FBVTs7Ozs7Ozs7Ozs7MERBRTVELDhEQUFDekIsZ0VBQWVBOzs7OzswREFDaEIsOERBQUNJLDREQUFXQTs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBSWxCLDhEQUFDSCwwREFBU0E7Z0NBQ1IyQixTQUFTYixLQUFLYSxPQUFPO2dDQUNyQmYsTUFBSztnQ0FDTGdCLFFBQVE7d0NBQUMsRUFBRUMsS0FBSyxFQUFFO3lEQUNoQiw4REFBQzVCLHlEQUFRQTs7MERBQ1AsOERBQUNDLDBEQUFTQTswREFBQzs7Ozs7OzBEQUNYLDhEQUFDSiw0REFBV0E7MERBQ1YsNEVBQUNNLHVEQUFLQTtvREFBRSxHQUFHeUIsS0FBSztvREFBRUMsYUFBWTtvREFBbUJOLFdBQVU7Ozs7Ozs7Ozs7OzBEQUU3RCw4REFBQ3pCLGdFQUFlQTs7Ozs7MERBQ2hCLDhEQUFDSSw0REFBV0E7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQUtsQiw4REFBQ0gsMERBQVNBO2dDQUNSMkIsU0FBU2IsS0FBS2EsT0FBTztnQ0FDckJmLE1BQUs7Z0NBQ0xnQixRQUFRO3dDQUFDLEVBQUVDLEtBQUssRUFBRTt5REFDaEIsOERBQUM1Qix5REFBUUE7OzBEQUNQLDhEQUFDQywwREFBU0E7MERBQUM7Ozs7OzswREFDWCw4REFBQ0osNERBQVdBOzBEQUNWLDRFQUFDTSx1REFBS0E7b0RBQUUsR0FBR3lCLEtBQUs7b0RBQUVFLE1BQUs7b0RBQVdELGFBQVk7b0RBQW1CTixXQUFVOzs7Ozs7Ozs7OzswREFFN0UsOERBQUN6QixnRUFBZUE7Ozs7OzBEQUNoQiw4REFBQ0ksNERBQVdBOzs7Ozs7Ozs7Ozs7Ozs7OzswQ0FJbEIsOERBQUNFLHlEQUFNQTtnQ0FBQzBCLE1BQUs7Z0NBQVNQLFdBQVU7MENBQTRIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUXhLO0dBOUVNWDs7UUFDU3BCLG9EQUFPQTtRQVNMRyxzREFBU0E7OztLQVZwQmlCO0FBZ0ZOLCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcmVnaXN0ZXIvcGFnZS50c3g/NDk1OCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xuaW1wb3J0IHsgem9kUmVzb2x2ZXIgfSBmcm9tICdAaG9va2Zvcm0vcmVzb2x2ZXJzL3pvZCc7XG5pbXBvcnQgKiBhcyB6IGZyb20gJ3pvZCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L25hdmlnYXRpb24nOyAvLyBJbXBvcnRhIG8gaG9vayB1c2VSb3V0ZXJcbmltcG9ydCB7XG4gIEZvcm0sXG4gIEZvcm1Db250cm9sLFxuICBGb3JtRGVzY3JpcHRpb24sXG4gIEZvcm1GaWVsZCxcbiAgRm9ybUl0ZW0sXG4gIEZvcm1MYWJlbCxcbiAgRm9ybU1lc3NhZ2Vcbn0gZnJvbSAnQC9jb21wb25lbnRzL3VpL2Zvcm0nO1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tICdAL2NvbXBvbmVudHMvdWkvaW5wdXQnO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnQC9jb21wb25lbnRzL3VpL2J1dHRvbic7XG5cbmNvbnN0IHNjaGVtYSA9IHoub2JqZWN0KHtcbiAgZW1haWw6IHouc3RyaW5nKCkuZW1haWwoJ0VtYWlsIGludsOhbGlkbycpLFxuICBwYXNzd29yZDogei5zdHJpbmcoKS5taW4oNiwgJ0Egc2VuaGEgZGV2ZSB0ZXIgcGVsbyBtZW5vcyA2IGNhcmFjdGVyZXMnKSxcbiAgbmFtZTogei5zdHJpbmcoKVxufSk7XG5cbmNvbnN0IFJlZ2lzdGVyUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgZm9ybSA9IHVzZUZvcm0oe1xuICAgIHJlc29sdmVyOiB6b2RSZXNvbHZlcihzY2hlbWEpLFxuICAgIGRlZmF1bHRWYWx1ZXM6IHtcbiAgICAgIGVtYWlsOiAnJyxcbiAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgIG5hbWU6ICcnXG4gICAgfVxuICB9KTtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTsgLy8gSW5pY2lhbGl6YSBvIGhvb2sgdXNlUm91dGVyXG5cbiAgY29uc3Qgb25TdWJtaXQgPSAoZGF0YSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIC8vIEzDs2dpY2EgZGUgbG9naW4gYXF1aVxuXG4gICAgLy8gQXDDs3MgbyBsb2dpbiBiZW0tc3VjZWRpZG8sIHJlZGlyZWNpb25lIHBhcmEgb3V0cmEgcMOhZ2luYVxuICAgIHJvdXRlci5wdXNoKCcvdGVzdGUnKTsgLy8gU3Vic3RpdHVhICcvcGFnaW5hLWRlc3Rpbm8nIHBlbG8gY2FtaW5obyBwYXJhIG8gcXVhbCBkZXNlamEgcmVkaXJlY2lvbmFyXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1ncmFkaWVudC10by1yIGZyb20tYmxhY2sgdG8tcHVycGxlLTYwMFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LXctbWQgcC05IHNwYWNlLXktNiBiZy13aGl0ZSBiZy1vcGFjaXR5LTcwIGJhY2tkcm9wLWJsdXItbGcgcm91bmRlZC1sZyBzaGFkb3ctbGdcIj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCB0ZXh0LWNlbnRlciB0ZXh0LWdyYXktODAwXCI+UmVnaXN0cmUtc2U8L2gyPlxuICAgICAgICA8Rm9ybSB7Li4uZm9ybX0+XG5cbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17Zm9ybS5oYW5kbGVTdWJtaXQob25TdWJtaXQpfSBjbGFzc05hbWU9XCJzcGFjZS15LTZcIj5cbiAgICAgICAgICA8Rm9ybUZpZWxkXG4gICAgICAgICAgICAgIGNvbnRyb2w9e2Zvcm0uY29udHJvbH1cbiAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICByZW5kZXI9eyh7IGZpZWxkIH0pID0+IChcbiAgICAgICAgICAgICAgICA8Rm9ybUl0ZW0+XG4gICAgICAgICAgICAgICAgICA8Rm9ybUxhYmVsPk5vbWU8L0Zvcm1MYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbD5cbiAgICAgICAgICAgICAgICAgICAgPElucHV0IHsuLi5maWVsZH0gcGxhY2Vob2xkZXI9XCJEaWdpdGUgc2V1IE5vbWVcIiBjbGFzc05hbWU9XCJ3LWZ1bGwgcC0zIG10LTEgYm9yZGVyIHJvdW5kZWQtbWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWluZGlnby01MDBcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cbiAgICAgICAgICAgICAgICAgIDxGb3JtRGVzY3JpcHRpb24gLz5cbiAgICAgICAgICAgICAgICAgIDxGb3JtTWVzc2FnZSAvPlxuICAgICAgICAgICAgICAgIDwvRm9ybUl0ZW0+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEZvcm1GaWVsZFxuICAgICAgICAgICAgICBjb250cm9sPXtmb3JtLmNvbnRyb2x9XG4gICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIHJlbmRlcj17KHsgZmllbGQgfSkgPT4gKFxuICAgICAgICAgICAgICAgIDxGb3JtSXRlbT5cbiAgICAgICAgICAgICAgICAgIDxGb3JtTGFiZWw+RW1haWw8L0Zvcm1MYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbD5cbiAgICAgICAgICAgICAgICAgICAgPElucHV0IHsuLi5maWVsZH0gcGxhY2Vob2xkZXI9XCJEaWdpdGUgc2V1IGVtYWlsXCIgY2xhc3NOYW1lPVwidy1mdWxsIHAtMyBtdC0xIGJvcmRlciByb3VuZGVkLW1kIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1pbmRpZ28tNTAwXCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICAgICAgICAgICAgICA8Rm9ybURlc2NyaXB0aW9uIC8+XG4gICAgICAgICAgICAgICAgICA8Rm9ybU1lc3NhZ2UgLz5cbiAgICAgICAgICAgICAgICA8L0Zvcm1JdGVtPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPEZvcm1GaWVsZFxuICAgICAgICAgICAgICBjb250cm9sPXtmb3JtLmNvbnRyb2x9XG4gICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgIHJlbmRlcj17KHsgZmllbGQgfSkgPT4gKFxuICAgICAgICAgICAgICAgIDxGb3JtSXRlbT5cbiAgICAgICAgICAgICAgICAgIDxGb3JtTGFiZWw+U2VuaGE8L0Zvcm1MYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbD5cbiAgICAgICAgICAgICAgICAgICAgPElucHV0IHsuLi5maWVsZH0gdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJEaWdpdGUgc3VhIHNlbmhhXCIgY2xhc3NOYW1lPVwidy1mdWxsIHAtMyBtdC0xIGJvcmRlciByb3VuZGVkLW1kIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1pbmRpZ28tNTAwXCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICAgICAgICAgICAgICA8Rm9ybURlc2NyaXB0aW9uIC8+XG4gICAgICAgICAgICAgICAgICA8Rm9ybU1lc3NhZ2UgLz5cbiAgICAgICAgICAgICAgICA8L0Zvcm1JdGVtPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cInctZnVsbCBweS0zIHRleHQtd2hpdGUgYmctaW5kaWdvLTYwMCByb3VuZGVkLW1kIGhvdmVyOmJnLWluZGlnby03MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWluZGlnby01MDBcIj5cbiAgICAgICAgICAgICAgRW50cmFyXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvRm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXJQYWdlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRm9ybSIsInpvZFJlc29sdmVyIiwieiIsInVzZVJvdXRlciIsIkZvcm0iLCJGb3JtQ29udHJvbCIsIkZvcm1EZXNjcmlwdGlvbiIsIkZvcm1GaWVsZCIsIkZvcm1JdGVtIiwiRm9ybUxhYmVsIiwiRm9ybU1lc3NhZ2UiLCJJbnB1dCIsIkJ1dHRvbiIsInNjaGVtYSIsIm9iamVjdCIsImVtYWlsIiwic3RyaW5nIiwicGFzc3dvcmQiLCJtaW4iLCJuYW1lIiwiUmVnaXN0ZXJQYWdlIiwiZm9ybSIsInJlc29sdmVyIiwiZGVmYXVsdFZhbHVlcyIsInJvdXRlciIsIm9uU3VibWl0IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJwdXNoIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJoYW5kbGVTdWJtaXQiLCJjb250cm9sIiwicmVuZGVyIiwiZmllbGQiLCJwbGFjZWhvbGRlciIsInR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/register/page.tsx\n"));

/***/ })

});