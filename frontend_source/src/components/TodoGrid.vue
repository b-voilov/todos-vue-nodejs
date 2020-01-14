<template>
    <v-container fluid>
        <v-row>
            <v-col cols="12">
                <v-row :align="alignment"
                       :justify="justify"
                       style="height: 300px;background-color: transparent"
                >
                    <TodoCard style="margin-left:10px!important;" v-for="todo in filteredTodos" :key="todo.key"
                              :todo="todo"/>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import {mapGetters} from 'vuex';
    import TodoCard from "./TodoCard";

    export default {
        name: "TodoGrid",
        components: {TodoCard},
        computed: {
            ...mapGetters(['filteredTodos'])
        },
        data: () => ({
            justify: "start",
            alignment: "start"
        })
    }
</script>

<style scoped>

</style>