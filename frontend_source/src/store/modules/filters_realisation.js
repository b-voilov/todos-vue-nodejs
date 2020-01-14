import Vue from 'vue';

const Filters = {
    filterCompleted: {
        name: 'filterCompleted', run: todos => {
            if (todos != null) {
                return todos.filter(todo => todo.completed)
            } else {
                return []
            }
        }
    },

    filterNotCompleted: {
        name: 'filterNotCompleted', run: todos => {
            if (todos != null) {
                return todos.filter(todo => !todo.completed)
            } else {
                return []
            }
        }
    },

    wrapFilterOnDate: date => {
        date.setHours(0, 0, 0, 0);
        return {
            name:'filterOnDate',
            run:todos=>{
                if (todos != null) {
                    return todos.filter(todo => {
                            const todoDate = new Date(todo.expirationDate);
                            todoDate.setHours(0, 0, 0, 0);
                            return todoDate.getTime() === date.getTime();
                        });
                } else {
                    return [];
                }
            }
        }
    },

    wrapFilterBeforeDate:date => {
        return {
            name:'filterBeforeDate',
            run:todos=>{
                if (todos != null) {
                    return todos.filter(todo => {
                        const todoDate = new Date(todo.expirationDate);
                        return todoDate.getTime() < date.getTime();
                    });
                } else {
                    return [];
                }
            }
            }
        },

    wrapFilterAfterDate: date => {
        return {
            name:'filterAfterDate',run:todos=>{
                if (todos != null) {
                    return todos.filter(todo => {
                        const todoDate = new Date(todo.expirationDate);
                        return todoDate.getTime() > date.getTime();
                    })
                } else {
                    return [];
                }
            }
        }},

    wrapFilterInInterval: (beginDate, endDate) => {
        return {
            name:'filterInInterval',
            run:todos=>{
                return todos.filter(todo => {
                    const todoDate = new Date(todo.expirationDate);
                    return todoDate.getTime() < endDate.getTime() && todoDate.getTime() > beginDate.getTime();
                })
            }
        }
    },

    filterAll: () => {}
};

export default Filters;

export const getIncompatibleFilter = (filterName) => {
    if (filterName === 'filterCompleted') {
        return ['filterNotCompleted'];
    } else if (filterName === 'filterNotCompleted') {
        return ['filterCompleted'];
    } else if (filterName === 'filterBeforeDate' || filterName === 'afterDate') {
        return ['filterInInterval', 'filterOnDate'];
    } else if (filterName === 'filterInInterval') {
        return ['filterBeforeDate', 'filterAfterDate', 'filterOnDate']
    } else if (filterName === 'filterOnDate') {
        return ['filterBeforeDate', 'filterAfterDate', 'filterInInterval']
    }
    return [];
};

function sleep(ms) {
    ms += new Date().getTime();
    while (new Date() < ms) {
    }
}

function test() {
    console.log("hi");
    let kek = new Promise(function (res, rej) {
        setTimeout(function () {
            console.log("t1");
            sleep(5000);
            console.log("t12");
        }, 0);
        res();
    }).then(() => console.log("then"));
    setTimeout(() => console.log("t2"), 0)
}

function test2() {
    console.log("hi");
    let kek = new Promise(function (res, rej) {
        setTimeout(function () {
            console.log("t1");
            sleep(5000);
            console.log("t12");
            res();
        }, 0);
    }).then(() => console.log("then"));
    setTimeout(() => console.log("t2"), 0)
}

