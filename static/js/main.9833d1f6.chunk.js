(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(t,e,a){},26:function(t,e,a){t.exports=a(61)},31:function(t,e,a){},39:function(t,e,a){},40:function(t,e,a){},41:function(t,e,a){},59:function(t,e,a){},60:function(t,e,a){},61:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),o=a(23),c=a.n(o),s=(a(31),a(2)),i=a(6),l=a(4),u=a(3),m=a(5),p=a(24),d=a.n(p),h=(a(39),a(40),function(t){function e(){return Object(s.a)(this,e),Object(l.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,"CommitStatus"))}}]),e}(r.a.Component)),f=a(25),E=a(10),j=(a(14),a(41),a(12)),v={unauthorized_entry:"You do not have access",not_found:"The repo that you are looking is invalid",default_error:"Problem with Commit Status. Please try again later"},b=function(t){function e(){var t,a;Object(s.a)(this,e);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(l.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(o)))).state={input:""},a.handleChange=function(t){a.setState({input:t.target.value})},a.alertUser=function(t){var e=document.createElement("div"),n=document.createElement("span"),r=document.createTextNode(t);e.classList.add("error-message"),e.appendChild(r),n.classList.add("close"),n.innerText="X",n.addEventListener("click",a.handleClose),e.appendChild(n),document.querySelector(".add-container").appendChild(e).focus()},a.handleSubmit=function(t){t.preventDefault();var e={};Object({NODE_ENV:"production",PUBLIC_URL:"/commit-status"}).REACT_APP_GITHUB_TOKEN&&(e.headers={Authorization:Object({NODE_ENV:"production",PUBLIC_URL:"/commit-status"}).REACT_APP_GITHUB_TOKEN}),j.get("https://api.github.com/repos/".concat(a.state.input,"/commits/master/status"),e).then(function(t){var e={name:t.data.repository.full_name,status:t.data.state};a.props.addProject(e)}).catch(function(t){return 403===t.response.status?a.alertUser(v.unauthorized_entry):404===t.response.status?a.alertUser(v.not_found):a.alertUser(v.default_error)}),a.setState({input:""})},a.handlePress=function(t){t.preventDefault(),a.setState({input:""})},a.handleClose=function(t){t.preventDefault(),document.querySelector(".add-container").removeChild(t.target.parentElement)},a.render=function(){return r.a.createElement("div",{className:"add-container"},r.a.createElement("div",{className:"add-bar-container"},r.a.createElement("form",{className:"add-bar-container",onSubmit:a.handleSubmit},r.a.createElement("input",{className:"add-bar",type:"text",value:a.state.input,spellCheck:"false",onChange:a.handleChange,placeholder:"sitture/commit-status"}),r.a.createElement("img",{className:"add-icon",alt:"",src:"/plus.svg"}))))},a}return Object(m.a)(e,t),e}(r.a.Component),g=a(8),O=(a(59),a(60),a(12)),P=function(t){function e(){var t,a;Object(s.a)(this,e);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(r)))).state={commitDetails:null},a.componentDidMount=function(){var t={};Object({NODE_ENV:"production",PUBLIC_URL:"/commit-status"}).REACT_APP_GITHUB_TOKEN&&(t.headers={Authorization:Object({NODE_ENV:"production",PUBLIC_URL:"/commit-status"}).REACT_APP_GITHUB_TOKEN}),O.get("https://api.github.com/repos/".concat(a.props.name,"/commits"),t).then(function(t){return a.setState({commitDetails:t.data})})},a}return Object(m.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){return this.state.commitDetails?r.a.createElement("div",null,"Commit Details",r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Committer"),r.a.createElement("th",null,"Message"),r.a.createElement("th",null,"Date"),r.a.createElement("th",null,"Changes"))),r.a.createElement("tbody",null,this.state.commitDetails.map(function(t,e){return r.a.createElement("tr",{key:e},r.a.createElement("td",null,t.commit.committer.name),r.a.createElement("td",null,t.commit.message),r.a.createElement("td",null,t.commit.committer.date),r.a.createElement("td",null,r.a.createElement("a",{href:t.html_url,rel:"noopener noreferrer",target:"_blank"},"See changes here")))})))):r.a.createElement("div",null,r.a.createElement("h5",null,"Loading details ..."))}}]),e}(n.Component),_=function(t){function e(){var t,a;Object(s.a)(this,e);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(l.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(o)))).printProjectList=function(t){return t.map(function(t,e){return r.a.createElement("div",{key:e,className:"project ".concat(t.status),onClick:function(){return a.props.handleProjectClick(e)}},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/".concat(t.name)},t.name)," ","- ",r.a.createElement("span",{className:t.status},t.status),r.a.createElement("button",{className:"remove",onClick:a.props.onRemoveClick(t.name)},"Remove"),t.isOpen&&r.a.createElement(P,{name:t.name}))})},a.render=function(){var t=a.props.projects,e=t.filter(function(t){return"success"!==t.status});return r.a.createElement("div",{className:"tab-filter"},r.a.createElement(g.d,null,r.a.createElement(g.b,null,r.a.createElement(g.a,null,"All"),r.a.createElement(g.a,null,"Unhealthy")),r.a.createElement(g.c,null,t.projectStatus,a.printProjectList(t)),r.a.createElement(g.c,null,t.projectStatus,a.printProjectList(e))))},a}return Object(m.a)(e,t),e}(n.Component),C=a(12),S=function(t){function e(){var t,a;Object(s.a)(this,e);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(l.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(o)))).DEFAULT_STATUS="pending",a.LS_PROJECTS_KEY="projects",a.state={projects:[]},a.componentDidMount=function(){a.loadProjects()},a.loadProjects=function(){var t=a.getProjectsFromLocalStorage().map(function(t){return{name:t,status:a.DEFAULT_STATUS}}).sort(a.sortProjects);a.setState({projects:t},a.loadProjectStatuses)},a.loadProjectStatuses=function(){var t={};Object({NODE_ENV:"production",PUBLIC_URL:"/commit-status"}).REACT_APP_GITHUB_TOKEN&&(t.headers={Authorization:Object({NODE_ENV:"production",PUBLIC_URL:"/commit-status"}).REACT_APP_GITHUB_TOKEN});var e=a.state.projects.map(function(e){return C.get("https://api.github.com/repos/".concat(e.name,"/commits/master/status"),t)});Promise.all(e).then(function(t){var e=t.map(function(t){return{name:t.data.repository.full_name,status:t.data.state}}).sort(a.sortProjects);a.setState({projects:e})},function(t){console.log("error",t)}).catch(console.log())},a.sortProjects=function(t,e){return t.name<e.name?-1:t.name>e.name?1:t.status>e.status?-1:1},a.addProject=function(t){var e=0;if(a.state.projects.forEach(function(a){a.name===t.name&&a.status===t.status&&(e=1)}),1!==e){var n=[].concat(Object(f.a)(a.state.projects),[t]).sort(a.sortProjects);a.addProjectToLocalStorage(t.name),a.setState({projects:n})}},a.addProjectToLocalStorage=function(t){var e=a.getProjectsFromLocalStorage();e.push(t),localStorage.setItem(a.LS_PROJECTS_KEY,JSON.stringify(e))},a.removeProjectFromLocalStorage=function(t){var e=a.getProjectsFromLocalStorage().filter(function(e){return e!==t});localStorage.setItem(a.LS_PROJECTS_KEY,JSON.stringify(e))},a.render=function(){var t=a.addProject;return r.a.createElement("div",null,r.a.createElement(b,{addProject:function(e){return t(e)}}),r.a.createElement(_,{projects:a.state.projects,handleProjectClick:a.handleProjectClick.bind(Object(E.a)(a)),onRemoveClick:a.onRemoveClick.bind(Object(E.a)(a))}))},a}return Object(m.a)(e,t),Object(i.a)(e,[{key:"onRemoveClick",value:function(t){var e=this;return function(a){a.stopPropagation();var n=e.state.projects.filter(function(e){return e.name!==t});e.removeProjectFromLocalStorage(t),e.setState({projects:n})}}},{key:"getProjectsFromLocalStorage",value:function(){var t=localStorage.getItem(this.LS_PROJECTS_KEY);return t?JSON.parse(t):[]}},{key:"handleProjectClick",value:function(t,e){t.target===t.currentTarget&&this.setState({projects:this.state.projects.map(function(t,a){return a!==e||a===e&&t.isOpen?(t.isOpen=!1,t):(t.isOpen=!0,t)})})}},{key:"clickWithNoPropagation",value:function(t){t.nativeEvent.stopImmediatePropagation(),t.stopPropagation()}}]),e}(r.a.Component),y=function(t){function e(){return Object(s.a)(this,e),Object(l.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d.a,{htmlAttributes:{lang:"en",amp:void 0},meta:[{name:"description",content:"A simple React app that shows a list of projects with their Github commit status and use it as a dashboard to view status of your CI pipelines."}],title:"CommitStatus"}),r.a.createElement(h,null),r.a.createElement(S,null))}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[26,1,2]]]);
//# sourceMappingURL=main.9833d1f6.chunk.js.map