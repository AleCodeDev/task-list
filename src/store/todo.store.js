import { Todo } from "../todos/models/todo.model";

export const Filters = {
    All: 'all',
    Completed: 'completed',
    Pending: 'pending',
}

const state = {

    todos: [
        new Todo('PAGAR CUOTA'),
        new Todo('ASEO CASA GENERAL'),
        new Todo('COMPRAR MERCADO'),
    ],
    filter: Filters.All,
}

const initStore = () => {
    loadStore();
    console.log('InitStore 🥑');
}

const loadStore = () => {
    if( !localStorage.getItem('state')) return;

    const { todos = [], filter = Filters.All } = JSON.parse(localStorage.getItem('state'));
    state.todos = todos;
    filter.todos = filter;

}

const saveStateToLocalStorage = () => {
    localStorage.setItem('state', JSON.stringify( state ));
}

const getTodos = ( filter = Filters.All ) => {
    switch ( filter ) {
        case Filters.All:
            return [...state.todos];

        case Filters.Completed: 
            return state.todos.filter( todo => todo.done );
        
        case Filters.Pending: 
            return state.todos.filter( todo => !todo.done );
        
        default:
            throw new Error(`Option ${ filter } is not valid`);

    }
}

/**
 * 
 * @param {String} description 
 */
const addTodo = ( description ) => {
    if( !description ) throw new Error('Description is required');

    state.todos.push( new Todo( description ) );
}

/**
 * 
 * @param {String} todoId 
 */
const toggleTodo = ( todoId ) => {
    state.todos = state.todos.map( todo => {
        if( todo.id === todoId ) {
            todo.done = !todo.done;
        }
        return todo;
    });

}

const deleteTodo = ( todoId ) => {
    state.todos = state.todos.filter( todo => todo.id !== todoId );
}

const deleteCompleted = () => {
    state.todos = state.todos.filter( todo => !todo.done);
}

const setFilter = ( newFilter = Filters.All ) => {
    state.filter = newFilter;
}

const getCurrentFilter = () => {
    return state.filter;
}

export default {
    addTodo,
    deleteCompleted,
    deleteTodo,
    getCurrentFilter,
    getTodos,
    initStore,
    loadStore,
    setFilter,
    toggleTodo,
    saveStateToLocalStorage
}