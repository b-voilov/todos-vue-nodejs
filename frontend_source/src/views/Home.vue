<template>
    <div>
        <v-navigation-drawer v-model="drawer" app clipped>
            <v-list dense>
                <v-list-item style="height: 48px !important;" link>
                    <v-list-item-action>
                        <v-icon v-if="$vuetify.theme.dark">mdi-brightness-4</v-icon>
                        <v-icon v-else>mdi-brightness-6</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>
                            <v-switch
                                    v-model="$vuetify.theme.dark"
                                    style="margin-left:20px"
                                    primary
                            />
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item style="height: 48px !important;" @click="saveTodosToServer" link>
                    <v-list-item-action>
                        <v-icon v-if="$vuetify.theme.dark">mdi-content-save-move-outline</v-icon>
                        <v-icon v-else>mdi-content-save-move</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Save to server</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item style="height: 48px !important;" @click="saveTodosToLocalStorage" link>
                    <v-list-item-action>
                        <v-icon v-if="$vuetify.theme.dark">mdi-content-save-all-outline</v-icon>
                        <v-icon v-else>mdi-content-save-all</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Save to browser</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item style="height: 48px !important;" @click="$router.push('/authorization')" link>
                    <v-list-item-action>
                        <v-icon v-if="$vuetify.theme.dark">mdi-account-key-outline</v-icon>
                        <v-icon v-else>mdi-account-key</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Log In</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>


                <v-list-item  @click="openCreateTodoDialog">
                    <v-list-item-action>
                        <v-icon v-if="$vuetify.theme.dark">
                            mdi-bell-plus-outline
                        </v-icon>
                        <v-icon v-else>
                            mdi-bell-plus-outline
                        </v-icon>
                    </v-list-item-action>
                    <v-list-item-title>Create Todo</v-list-item-title>
                </v-list-item>
                <Filters/>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar app clipped-left color="navbar_primary" dark>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"/>
            <v-toolbar-title>Todo Application</v-toolbar-title>
        </v-app-bar>

        <v-content>
            <TodoGrid/>
            <v-dialog
                    v-model="showCreateTodoDialog"

            ><CreateTodo @close="showCreateTodoDialog = false"/></v-dialog>
        </v-content>

        <v-footer app>
            <span>&copy; 2020</span>
        </v-footer>
    </div>
</template>

<script>
    import CreateTodo from "../components/CreateTodo";
    import Filters from "../components/Filters";
    import TodoGrid from "../components/TodoGrid";
    export default {
        name: "Home",
        props: {},
        data: () => ({
            drawer: null,
            navbar: "#3949AB",
            showCreateTodoDialog: false,
        }),
        created() {
            this.$store.dispatch('getTodosFromLocalStorage');
        },
        methods:{
            openCreateTodoDialog() {
              this.showCreateTodoDialog = true;
            },
            saveTodosToServer(){
                this.$store.dispatch('saveTodosToServer')
                    .then(()=>alert('Successfully saved'))
                    .catch(()=>{const choice = confirm('Error saving. Do you want to authorize?');if(choice){this.$router.push('/authorization')}});
            },
            saveTodosToLocalStorage(){
                this.$store.dispatch('saveTodosToLocalStorage')
                    .then(()=>alert('Successfully saved'))
                    .catch(()=>{alert('Error saving')})
            }
        },
        components:{
            Filters,
            CreateTodo,
            TodoGrid
        }
    };
</script>

<style>

    @media screen and (max-device-width: 1000px){
        .v-dialog__content{
            justify-content: flex-start!important;
        }
        .v-card{
            margin-bottom: 20px!important;
        }
    }
    .v-dialog__content {
        align-items: flex-start;
    }
    .v-list-item__title {
        font-size: 16px !important;
        font-weight: normal !important;
    }

    .list_action {
        height: 24px !important;
        position: relative !important;
    }

    .outlined {
        background-color: #ffffff;
    }
</style>


