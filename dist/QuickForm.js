import{__assign as e}from"./node_modules/tslib/tslib.es6.js";import"./node_modules/react/jsx-runtime.js";import{useForm as r}from"./node_modules/react-hook-form/dist/index.esm.js";import{useTranslation as o}from"./node_modules/react-i18next/dist/es/useTranslation.js";import{j as i}from"./_virtual/jsx-runtime.js_commonjs-module.js";var t=function(t){var s=t.properties,d=t.onSubmit,n=o(),m=n.t;n.i18n;var l=r(),p=l.register,u=l.handleSubmit,a=l.formState,j=a.errors;return a.isValid,i.exports.jsxs("form",e({onSubmit:u(d)},{children:[Object.entries(s).map((function(r){var o=r[0],t=r[1],s=!!j[o];return i.exports.jsxs("div",{children:[i.exports.jsx("label",e({htmlFor:o},{children:m(o)}),void 0),i.exports.jsx("input",e({type:t.type,placeholder:t.placeholder?m(t.placeholder):void 0},p(o,{required:t.required})),void 0),s&&i.exports.jsx("span",{children:m("This field is required")},void 0)]},o)})),i.exports.jsx("input",{type:"submit",value:m("Login").toString()},void 0)]}),void 0)};export{t as QuickForm};
//# sourceMappingURL=QuickForm.js.map