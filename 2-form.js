import"./assets/modulepreload-polyfill-B5Qt9EMX.js";const l=document.querySelector(".feedback-form");let t={email:"",message:""};function o(a){const e=JSON.parse(localStorage.getItem("feedback-form-state"));if(e!==null)t=e;else return}o();function r(a){const e=a.target,s=e.name,m=e.value;t[s]=m,localStorage.setItem("feedback-form-state",JSON.stringify(t))}function i(a){a.preventDefault();const e=a.target,s=e.elements.email.value.trim(),m=e.elements.message.value.trim();if(s===""||m==="")return alert("Please fill all fields");console.log(t),e.reset(),localStorage.removeItem("feedback-form-state"),t.email="",t.message=""}const n=JSON.parse(localStorage.getItem("feedback-form-state"));n!==null&&(l.elements.email.value=n.email,l.elements.message.value=n.message);l.addEventListener("submit",i);l.addEventListener("input",r);
//# sourceMappingURL=2-form.js.map