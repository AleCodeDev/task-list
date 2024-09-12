(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function i(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(o){if(o.ep)return;o.ep=!0;const r=i(o);fetch(o.href,r)}})();class g{constructor(t){if(!t)throw new Error("");this.id=crypto.randomUUID(),this.description=t,this.done=!1,this.createdAt=new Date}}const d={All:"all",Completed:"completed",Pending:"pending"},s={todos:[new g("PIEDRA DEL ALMA"),new g("PIEDRA DEL INFINITO"),new g("PIEDRA DEL TIEMPO")],filter:d.All},b=()=>{T(),console.log("InitStore 🥑")},T=()=>{if(!localStorage.getItem("state"))return;const{todos:e=[],filter:t=d.All}=JSON.parse(localStorage.getItem("state"));s.todos=e,s.todos=e},w=()=>{localStorage.setItem("state",JSON.stringify(s))},y=(e=d.All)=>{switch(e){case d.All:return[...s.todos];case d.Completed:return s.todos.filter(t=>t.done);case d.Pending:return s.todos.filter(t=>!t.done);default:throw new Error(`Option ${e} is not valid`)}},L=e=>{if(!e)throw new Error("Description is required");s.todos.push(new g(e))},E=e=>{s.todos=s.todos.map(t=>(t.id===e&&(t.done=!t.done),t))},v=e=>{s.todos=s.todos.filter(t=>t.id!==e)},C=()=>{s.todos=s.todos.filter(e=>!e.done)},S=(e=d.All)=>{s.filter=e},P=()=>s.filter,l={addTodo:L,deleteCompleted:C,deleteTodo:v,getCurrentFilter:P,getTodos:y,initStore:b,loadStore:T,setFilter:S,toggleTodo:E,saveStateToLocalStorage:w},A=`<section class="todoapp">\r
    <header class="header">\r
        <h1>Tareas</h1>\r
        <input id="new-todo-input" class="new-todo" placeholder="¿Qué necesita ser hecho?" autofocus>\r
    </header>\r
    \r
    <!-- This section should be hidden by default and shown when there are todos -->\r
    <section class="main">\r
        <input id="toggle-all" class="toggle-all" type="checkbox">\r
        <label for="toggle-all">Mark all as complete</label>\r
        <ul class="todo-list">\r
            <!-- These are here just to show the structure of the list items -->\r
            <!-- List items should get the class "editing" when editing and "completed" when marked as completed -->\r
            <!-- <li class="completed" data-id="abc">\r
                <div class="view">\r
                    <input class="toggle" type="checkbox" checked>\r
                    <label>Probar JavaScript</label>\r
                    <button class="destroy"></button>\r
                </div>\r
                <input class="edit" value="Create a TodoMVC template">\r
            </li> -->\r
            <!-- <li>\r
                <div class="view">\r
                    <input class="toggle" type="checkbox">\r
                    <label>Comprar un unicornio</label>\r
                    <button class="destroy"></button>\r
                </div>\r
                <input class="edit" value="Rule the web">\r
            </li> -->\r
        </ul>\r
    </section>\r
\r
    <!-- This footer should hidden by default and shown when there are todos -->\r
    <footer class="footer">\r
        <!-- This should be "0 items left" by default -->\r
        <span class="todo-count"><strong id="pending-count">0</strong> pendiente(s)</span>\r
        <!-- Remove this if you don't implement routing -->\r
        <ul class="filters">\r
            <li>\r
                <a class="filtro" class="selected" href="#/">Todos</a>\r
            </li>\r
            <li>\r
                <a class="filtro" href="#/active">Pendientes</a>\r
            </li>\r
            <li>\r
                <a class="filtro" href="#/completed">Completados</a>\r
            </li>\r
        </ul>\r
        <!-- Hidden if no completed items are left ↓ -->\r
        <button class="clear-completed">Borrar completados</button>\r
    </footer>\r
</section>\r
\r
\r
<footer class="info">\r
    <p>Template creado por <a href="http://sindresorhus.com">Sindre Sorhus</a></p>\r
    <!-- Change this out with your name and url ↓ -->\r
    <p>Creado por <a href="http://todomvc.com">ti</a></p>\r
    <p>Parte de <a href="http://todomvc.com">TodoMVC</a></p>\r
</footer>`;let m;const I=e=>{if(m||(m=document.querySelector(e)),!m)throw new Error(`Element ${e} not found`);m.innerText=l.getTodos(d.Pending).length},D=e=>{if(!e)throw new Error("Se esperaba un TODO");const{done:t,description:i,id:a}=e,o=`
        <div class="view">
            <input class="toggle" type="checkbox" ${t?"checked":""}>
            <label>${i}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    `,r=document.createElement("li");return r.innerHTML=o,r.setAttribute("data-id",a),e.done&&r.classList.add("completed"),r};let f;const O=(e,t=[])=>{if(f||(f=document.querySelector(e)),!f)throw new Error(`Element ${e} not found`);l.saveStateToLocalStorage(),f.innerHTML="",t.forEach(i=>{f.append(D(i))})},p={ClearCompleted:".clear-completed",TodoList:".todo-list",NewTodoInput:"#new-todo-input",TodoFilters:".filtro",PendingCountLabel:"#pending-count"},k=e=>{const t=()=>{const n=l.getTodos(l.getCurrentFilter());O(p.TodoList,n),i()},i=()=>{I(p.PendingCountLabel)};(()=>{const n=document.createElement("div");n.innerHTML=A,document.querySelector(e).append(n),t()})();const a=document.querySelector(p.NewTodoInput),o=document.querySelector(p.TodoList),r=document.querySelector(p.ClearCompleted),c=document.querySelectorAll(p.TodoFilters);a.addEventListener("keyup",n=>{n.keyCode===13&&n.target.value.trim().length!==0&&(l.addTodo(n.target.value.toUpperCase()),t(),n.target.value="")}),o.addEventListener("click",n=>{const u=n.target.closest("[data-id]");l.toggleTodo(u.getAttribute("data-id")),t()}),o.addEventListener("click",n=>{const u=n.target.className==="destroy",h=n.target.closest("[data-id]");!h||!u||(l.deleteTodo(h.getAttribute("data-id")),t())}),r.addEventListener("click",()=>{l.deleteCompleted(),t()}),c.forEach(n=>{n.addEventListener("click",u=>{switch(c.forEach(h=>h.classList.remove("selected")),u.target.classList.add("selected"),u.target.text){case"Todos":l.setFilter(d.All);break;case"Pendientes":l.setFilter(d.Pending);break;case"Completados":l.setFilter(d.Completed);break}t()})})};l.initStore();k("#app");
