import Vue from "vue";
import {getIncompatibleFilter} from "./filters_realisation";
import {API_URL} from "../../config";

export default {
    actions: {
        async fetchAllTodos(ctx) {
            return new Promise((res,rej)=>{
                const theUrl = API_URL+"getAllTodos";
                let xmlHttp = new XMLHttpRequest();
                xmlHttp.open("POST", theUrl, true);
                xmlHttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
                xmlHttp.send(JSON.stringify({
                    jwt: ctx.rootGetters.jwt,
                }));
                xmlHttp.onreadystatechange = function () {
                    if (xmlHttp.readyState !== 4) return;
                    if (xmlHttp.status === 200) {
                        const response = xmlHttp.responseText;
                        const todos = JSON.parse(response);
                        ctx.commit('addTodos', todos);
                    }else{
                        rej();
                    }
                }
            });
        },
        getTodosFromLocalStorage(ctx){
            const localTodos = JSON.parse(localStorage.getItem('todos'));
            if(localTodos != null){
                ctx.commit('addTodos',localTodos);
            }
        },
        addTodo(ctx, todo) {
            if (!todo.key) {
                todo.key = new Date().getTime() + "";
            }
            ctx.commit('addTodos', todo)
        },
        removeTodo(ctx, key) {
            ctx.commit('removeTodo', key)
        },
        toggleTodo(ctx, key) {
            ctx.commit('toggleTodo', key)
        },
        editTodo(ctx, todo) {
            ctx.commit('editTodo', todo);
        },
        saveTodosToServer(ctx) {
            return new Promise((res,rej)=>{
                const theUrl = API_URL+'saveTodos';
                const xmlHttp = new XMLHttpRequest();
                xmlHttp.open('POST',theUrl,true);
                xmlHttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
                xmlHttp.send(JSON.stringify({
                    jwt: ctx.rootGetters.jwt,
                    todos: ctx.getters.allTodos
                }));
                xmlHttp.onreadystatechange = function () {
                    if (xmlHttp.readyState !== 4) return;
                    if(xmlHttp.status === 200){
                        res();
                    }else{
                        rej();
                    }
                }
            });
        },
        saveTodosToLocalStorage(ctx) {
            localStorage.setItem('todos',JSON.stringify(ctx.getters.allTodos));
        },
        addFilter(ctx, filter) {
            ctx.commit('addFilter', filter);
        },
        removeFilter(ctx, filter) {
            ctx.commit('removeFilter', filter)
        }
    },
    mutations: {
        setTodos(state,todos){
            state.todos = todos;
        },
        addTodos(state, todos) {
            let localTodos = state.todos;
            localTodos = localTodos.concat(todos);
            let newArray = [];

            // Declare an empty object
            let uniqueObject = {};

            // Loop for the array elements
            for (let i in localTodos) {

                // Extract the title
                let objTitle = localTodos[i]['key'];

                // Use the title as the index
                uniqueObject[objTitle] = localTodos[i];
            }

            // Loop to push unique object into array
            for (let i in uniqueObject) {
                newArray.push(uniqueObject[i]);
            }
            state.todos = newArray;

        },
        removeTodo(state, key) {
            state.todos = state.todos.filter(todo => todo.key !== key);
        },
        toggleTodo(state, key) {
            state.todos.forEach(todo => {
                if (todo.key === key) {
                    todo.completed = !todo.completed
                }
            })
        },
        editTodo(state, newTodo) {
            state.todos.forEach((todo, i) => {
                if (todo.key === newTodo.key) {
                    Vue.set(state.todos,i,newTodo);
                }
            })
        },
        addFilter(state, filter) {
            if(filter.name === 'filterAll'){
                state.filters = [];
            }else{
                Vue.set(state.filters, filter.name, filter.run);
                getIncompatibleFilter(filter.name).forEach((filterName,i) => Vue.delete(state.filters,filterName));
            }
        },
        removeFilter(state, filterName) {
            Vue.delete(state.filters, filterName);
        }
    },
    state: {
        todos: [],
        filters: {}
    },
    getters: {
        allTodos: state => state.todos,
        filteredTodos: function (state) {
            let todos = [...state.todos];
            Object.entries(state.filters).forEach(([key, filter]) => {
                todos = filter(todos);
            });
            return todos;
        },
        allFilters(state) {
            return Object.keys(state.filters);
        }
    }
}