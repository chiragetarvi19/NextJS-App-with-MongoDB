"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 158:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "styled-jsx/style"
const style_namespaceObject = require("styled-jsx/style");
var style_default = /*#__PURE__*/__webpack_require__.n(style_namespaceObject);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: ./lib/mongodb.ts
var mongodb = __webpack_require__(0);
;// CONCATENATED MODULE: ./pages/index.tsx




async function getServerSideProps() {
    try {
        await mongodb/* default */.Z;
        // `await clientPromise` will use the default database passed in the MONGODB_URI
        // However you can use another database (e.g. myDatabase) by replacing the `await clientPromise` with the following code:
        //
        // `const client = await clientPromise`
        // `const db = client.db("myDatabase")`
        //
        // Then you can execute queries against your database like so:
        // db.find({}) or any of the MongoDB Node Driver commands
        return {
            props: {
                isConnected: true
            }
        };
    } catch (e) {
        console.error(e);
        return {
            props: {
                isConnected: false
            }
        };
    }
}
function Home({ isConnected  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "jsx-fc70f7f1db67ed3d" + " " + "container",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        className: "jsx-fc70f7f1db67ed3d",
                        children: "Create Next App"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico",
                        className: "jsx-fc70f7f1db67ed3d"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                className: "jsx-fc70f7f1db67ed3d",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                        className: "jsx-fc70f7f1db67ed3d" + " " + "title",
                        children: [
                            "Welcome to ",
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "https://nextjs.org",
                                className: "jsx-fc70f7f1db67ed3d",
                                children: "Next.js with MongoDB!"
                            })
                        ]
                    }),
                    isConnected ? /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: "jsx-fc70f7f1db67ed3d" + " " + "subtitle",
                        children: "You are connected to MongoDB"
                    }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                        className: "jsx-fc70f7f1db67ed3d" + " " + "subtitle",
                        children: [
                            "You are NOT connected to MongoDB. Check the ",
                            /*#__PURE__*/ jsx_runtime_.jsx("code", {
                                className: "jsx-fc70f7f1db67ed3d",
                                children: "README.md"
                            }),
                            " ",
                            "for instructions."
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: "jsx-fc70f7f1db67ed3d" + " " + "description",
                        children: [
                            "Get started by editing ",
                            /*#__PURE__*/ jsx_runtime_.jsx("code", {
                                className: "jsx-fc70f7f1db67ed3d",
                                children: "pages/index.js"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "jsx-fc70f7f1db67ed3d" + " " + "grid",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                href: "https://nextjs.org/docs",
                                className: "jsx-fc70f7f1db67ed3d" + " " + "card",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        className: "jsx-fc70f7f1db67ed3d",
                                        children: "Documentation →"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "jsx-fc70f7f1db67ed3d",
                                        children: "Find in-depth information about Next.js features and API."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                href: "https://nextjs.org/learn",
                                className: "jsx-fc70f7f1db67ed3d" + " " + "card",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        className: "jsx-fc70f7f1db67ed3d",
                                        children: "Learn →"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "jsx-fc70f7f1db67ed3d",
                                        children: "Learn about Next.js in an interactive course with quizzes!"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                href: "https://github.com/vercel/next.js/tree/canary/examples",
                                className: "jsx-fc70f7f1db67ed3d" + " " + "card",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        className: "jsx-fc70f7f1db67ed3d",
                                        children: "Examples →"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "jsx-fc70f7f1db67ed3d",
                                        children: "Discover and deploy boilerplate example Next.js projects."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "jsx-fc70f7f1db67ed3d" + " " + "card",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        className: "jsx-fc70f7f1db67ed3d",
                                        children: "Deploy →"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "jsx-fc70f7f1db67ed3d",
                                        children: "Instantly deploy your Next.js site to a public URL with Vercel."
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("footer", {
                className: "jsx-fc70f7f1db67ed3d",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                    href: "https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "jsx-fc70f7f1db67ed3d",
                    children: [
                        "Powered by",
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: "/vercel.svg",
                            alt: "Vercel Logo",
                            className: "jsx-fc70f7f1db67ed3d" + " " + "logo"
                        })
                    ]
                })
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "d660ae35dd2c3fc0",
                children: ".container.jsx-fc70f7f1db67ed3d{min-height:100vh;padding:0 .5rem;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}main.jsx-fc70f7f1db67ed3d{padding:5rem 0;-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}footer.jsx-fc70f7f1db67ed3d{width:100%;height:100px;border-top:1px solid#eaeaea;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}footer.jsx-fc70f7f1db67ed3d img.jsx-fc70f7f1db67ed3d{margin-left:.5rem}footer.jsx-fc70f7f1db67ed3d a.jsx-fc70f7f1db67ed3d{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}a.jsx-fc70f7f1db67ed3d{color:inherit;text-decoration:none}.title.jsx-fc70f7f1db67ed3d a.jsx-fc70f7f1db67ed3d{color:#0070f3;text-decoration:none}.title.jsx-fc70f7f1db67ed3d a.jsx-fc70f7f1db67ed3d:hover,.title.jsx-fc70f7f1db67ed3d a.jsx-fc70f7f1db67ed3d:focus,.title.jsx-fc70f7f1db67ed3d a.jsx-fc70f7f1db67ed3d:active{text-decoration:underline}.title.jsx-fc70f7f1db67ed3d{margin:0;line-height:1.15;font-size:4rem}.title.jsx-fc70f7f1db67ed3d,.description.jsx-fc70f7f1db67ed3d{text-align:center}.subtitle.jsx-fc70f7f1db67ed3d{font-size:2rem}.description.jsx-fc70f7f1db67ed3d{line-height:1.5;font-size:1.5rem}code.jsx-fc70f7f1db67ed3d{background:#fafafa;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;padding:.75rem;font-size:1.1rem;font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}.grid.jsx-fc70f7f1db67ed3d{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;max-width:800px;margin-top:3rem}.card.jsx-fc70f7f1db67ed3d{margin:1rem;-webkit-flex-basis:45%;-ms-flex-preferred-size:45%;flex-basis:45%;padding:1.5rem;text-align:left;color:inherit;text-decoration:none;border:1px solid#eaeaea;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;-webkit-transition:color.15s ease,border-color.15s ease;-moz-transition:color.15s ease,border-color.15s ease;-o-transition:color.15s ease,border-color.15s ease;transition:color.15s ease,border-color.15s ease}.card.jsx-fc70f7f1db67ed3d:hover,.card.jsx-fc70f7f1db67ed3d:focus,.card.jsx-fc70f7f1db67ed3d:active{color:#0070f3;border-color:#0070f3}.card.jsx-fc70f7f1db67ed3d h3.jsx-fc70f7f1db67ed3d{margin:0 0 1rem 0;font-size:1.5rem}.card.jsx-fc70f7f1db67ed3d p.jsx-fc70f7f1db67ed3d{margin:0;font-size:1.25rem;line-height:1.5}.logo.jsx-fc70f7f1db67ed3d{height:1em}@media(max-width:600px){.grid.jsx-fc70f7f1db67ed3d{width:100%;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}}"
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "2323726f93dd16ea",
                children: "html,body{padding:0;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif}*{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}"
            })
        ]
    });
}


/***/ }),

/***/ 13:
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [0], () => (__webpack_exec__(158)));
module.exports = __webpack_exports__;

})();