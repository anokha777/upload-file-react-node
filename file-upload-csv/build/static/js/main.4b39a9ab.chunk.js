(this["webpackJsonpupload-client"]=this["webpackJsonpupload-client"]||[]).push([[0],{130:function(e,t,n){},131:function(e,t,n){},271:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),l=n(19),i=n.n(l),o=(n(130),n(123)),r=(n(131),n(124)),s=n(275),u=n(276),d=n(87),p=n(277),j=n(56),b=n.n(j),f=n(25);var h=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),n=t[0],a=t[1];return Object(f.jsx)("div",{className:"App",children:Object(f.jsxs)(b.a,{children:[Object(f.jsx)(j.Header,{children:"CSV File Upload"}),Object(f.jsx)(s.a,{spinning:n,children:Object(f.jsx)(b.a,{children:Object(f.jsx)(j.Content,{children:Object(f.jsx)(u.a,{action:"http://localhost:5000/upload",name:"file",listType:"picture",maxCount:1,multiple:!1,onChange:function(e){"uploading"!==e.file.status?"done"===e.file.status?(r.b.success("".concat(e.file.name," file uploaded successfully")),a(!1)):"error"===e.file.status&&(r.b.error("".concat(e.file.name," file upload failed.")),a(!1)):a(!0)},beforeUpload:function(e){var t="text/csv"===e.type||"text/comma-separated-values"===e.type||"application/csv"===e.type;t||r.b.error("Upload Error: You can only upload CSV file!");var n=e.size/1024/1024<10;return n||r.b.error("Upload Error: File must be smaller than 10MB!"),t&&n},children:Object(f.jsx)(d.a,{icon:Object(f.jsx)(p.a,{}),children:"Upload CSV"})})})})})]})})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,278)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,l=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),l(e),i(e)}))};i.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(h,{})}),document.getElementById("root")),x()}},[[271,1,2]]]);
//# sourceMappingURL=main.4b39a9ab.chunk.js.map