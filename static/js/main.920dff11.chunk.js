(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),o=a.n(r),c=(a(13),a(1));a(15);function s(e){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("a",{className:"navbar-brand",href:"#"}," ",e.title," "),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav me mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"#"},"Home"))),l.a.createElement("div",{className:"form-check form-switch me-auto text-".concat("light"===e.mode?"dark":"light")},l.a.createElement("input",{className:"form-check-input",type:"checkbox",onClick:e.toggleMode,id:"flexSwitchCheckDefault"}),l.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"Enable Dark Mode")))))}function m(e){var t=Object(n.useState)(""),a=Object(c.a)(t,2),r=a[0],o=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container my-3",style:{color:"light"===e.mode?"black":"white"}},l.a.createElement("h2",null,e.heading),l.a.createElement("div",{className:"mb-3"},l.a.createElement("textarea",{className:"form-control",placeholder:"Enter the text you want to alter",style:{backgroundColor:"light"===e.mode?"white":"grey",color:"light"===e.mode?"black":"white"},value:r,onChange:function(e){o(e.target.value)},id:"myBox",rows:"8"})),l.a.createElement("button",{className:"btn btn-primary m-3",onClick:function(){var t=r.toUpperCase();o(t),e.showAlert("Converted to UpperCase","success")}},"Convert to UpperCase"),l.a.createElement("button",{className:"btn btn-primary m-3",onClick:function(){var t=r.toLowerCase();o(t),e.showAlert("Converted to LowerCase","success")}},"Convert to LowerCase"),l.a.createElement("button",{className:"btn btn-primary m-3",onClick:function(){o(""),e.showAlert("Text Cleard","success")}},"Clear Text"),l.a.createElement("button",{className:"btn btn-primary m-3",onClick:function(){console.log("I am copy");var t=document.getElementById("myBox");t.select(),t.setSelectionRange(0,99999),navigator.clipboard.writeText(t.value),e.showAlert("Text Copied to Clipboard","success")}},"Copy Text"),l.a.createElement("button",{className:"btn btn-primary m-3",onClick:function(){var t=r.split(/[ ]+/);o(t.join(" ")),e.showAlert("Extra spaces removed","success")}},"Remove Extra Spaces")),l.a.createElement("div",{className:"container my-3",style:{color:"light"===e.mode?"black":"white"}},l.a.createElement("h2",null,"Your text summary"),l.a.createElement("p",null,r.split(" ").length," words and ",r.length," characters"),l.a.createElement("p",null,.008*r.split(" ").length," Minutes to Read"),l.a.createElement("h2",null,"Preview"),l.a.createElement("p",null,r.length>0?r:"Enter something to preview it")))}s.defaultProps={title:"Set title here",aboutText:"About Text here"};var i=function(e){return e.alert&&l.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},l.a.createElement("strong",null," ",function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)," ")," ",e.alert.msg)};var u=function(){var e=Object(n.useState)("light"),t=Object(c.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(null),u=Object(c.a)(o,2),d=u[0],b=u[1],g=function(e,t){b({msg:e,type:t}),setTimeout(function(){b(null)},1500)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(s,{title:"Textutils",aboutText:"About Textuitls",mode:a,toggleMode:function(){"light"===a?(r("dark"),document.body.style.backgroundColor="grey",g("Dark mode has been enabled","success"),document.title="TextUtils - Dark Mode"):(r("light"),document.body.style.backgroundColor="white",g("Light mode has been enabled","success"),document.title="TextUtils Light Mode")}}),l.a.createElement(i,{alert:d}),l.a.createElement("div",{className:"container my-3"},l.a.createElement(m,{heading:"Enter your text to analyze below",mode:a,showAlert:g})))},d=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,18)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,r=t.getLCP,o=t.getTTFB;a(e),n(e),l(e),r(e),o(e)})};o.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(u,null))),d()},4:function(e,t,a){e.exports=a(17)}},[[4,3,2]]]);
//# sourceMappingURL=main.920dff11.chunk.js.map