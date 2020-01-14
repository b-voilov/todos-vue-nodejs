<template>
    <v-card
            :color="$vuetify.theme.dark ? '#424242' : 'white'"
            max-width="300"
            min-width="300"
    >

        <v-card-title style="justify-content: space-between;">
            <v-btn @click="toggleTodo" icon>
                <v-avatar v-if="todo.completed" color="green" size="48">
                    <v-icon color="white">mdi-bell-off</v-icon>
                </v-avatar>
                <v-avatar v-else color="red" size="48">
                    <v-icon color="white">mdi-bell-ring</v-icon>
                </v-avatar>
            </v-btn>
            <span>{{todo.name}}</span>

            <div style="display: flex; flex-direction: column">
                <span class="font-weight-light"
                      style="font-size: 70%!important;white-space: nowrap;!important;">
                    {{new Date(todo.expirationDate).toLocaleDateString()}}
                </span>
                <span class="font-weight-light"
                      style="font-size: 70%!important;">
                    {{new Date(todo.expirationDate).toLocaleTimeString()}}
                </span>
            </div>


        </v-card-title>

        <v-card-text class="headline font-weight-bold" style="text-align: center">

        </v-card-text>
        <v-card-actions>
            <div style="display:flex;justify-content: space-between!important; width:100%">
                <v-btn @click="removeTodo(todo.key)" icon>
                    <v-icon v-if="!$vuetify.theme.dark">mdi-delete</v-icon>
                    <v-icon v-else>mdi-delete-outline</v-icon>
                </v-btn>
                <v-btn icon @click="showYSlider = !showYSlider">
                    <v-icon>{{ showYSlider ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </v-btn>
                <v-btn icon @click="showCreateTodoDialog = true">
                    <v-icon v-if="!$vuetify.theme.dark">mdi-pencil</v-icon>
                    <v-icon v-else>mdi-pencil-outline</v-icon>
                </v-btn>
                <v-dialog
                        v-model="showCreateTodoDialog"
                        max-width="600"
                ><CreateTodo @close="showCreateTodoDialog=false" :todo="todo"/></v-dialog>
            </div>
        </v-card-actions>
        <v-expand-transition>
            <div v-show="showYSlider">
                <v-card-text>
                    {{todo.description}}
                </v-card-text>
            </div>

        </v-expand-transition>
    </v-card>
</template>

<script>
    import CreateTodo from "./CreateTodo";
    export default {
        name: "TodoCard",
        props: {
            todo: {
                type: Object,
                required: true
            }
        },
        data: () => ({
            showCreateTodoDialog:false,
            showYSlider: false
        }),
        methods: {
            removeTodo(){
                this.$store.dispatch('removeTodo',this.todo.key)
            },
            toggleTodo() {
                this.$store.dispatch('toggleTodo',this.todo.key)
            }
        },
        components:{
            CreateTodo
        }
    }
</script>

<style scoped>

</style>