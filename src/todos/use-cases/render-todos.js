import todoStore from "../../store/todo.store";
import { createTodoHtml } from "./";

let element;

export const renderTodos = ( elementId, todos = [] ) => {

    if( !element ) 
        element = document.querySelector(elementId);

    if( !element ) throw new Error(`Element ${ elementId } not found`);

    todoStore.saveStateToLocalStorage();
    element.innerHTML = '';

    
    todos.forEach( todo => {
        element.append( createTodoHtml( todo ) );
    })

}