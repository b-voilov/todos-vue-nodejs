<template>
    <v-card >
        <v-card-title class="headline">{{todo ? 'Todo Editor':'Todo Constructor'}}</v-card-title>
        <v-card-text>
            <v-text-field
                    v-model="nameModel"
                    :color="$vuetify.theme.dark ? 'white' : 'primary'"
                    label="Name"
                    :rules="[nameLength]"
                    outlined
                    clearable
                    :counter="10"
                    style="margin-top: 10px"
            />
            <v-spacer/>
            <v-textarea
                    :color="$vuetify.theme.dark ? 'white' : 'primary'"
                    v-model="descriptionModel"
                    outlined
                    clearable
                    style="margin-top: 10px"
            >
                <template v-slot:label>
                    <div>
                        Description <small>(optional)</small>
                    </div>
                </template>
            </v-textarea>
            <div style="display:flex; flex-direction: row; justify-content: space-between">

                <div style="width: 20px"/>
                <v-menu
                        v-model="showTimeMenu"
                        :close-on-content-click="false"
                        transition="scale-transition"
                        min-width="100px"
                        style="margin-top:500px"
                >
                    <template v-slot:activator="{on}">
                        <div style="display: flex; flex-direction: row">
                            <v-text-field v-model="dateTime"/>
                            <v-btn v-on="on" fab small :color="$vuetify.theme.dark ? '#FF3B82':'#33C1F3'">
                                <v-icon color="white">
                                    {{!$vuetify.theme.dark ?
                                    'mdi-clock' : 'mdi-clock-outline'}}
                                </v-icon>
                            </v-btn>
                        </div>

                    </template>
                    <div style="text-align: center;">
                        <v-card>
                            <date-picker v-model="dateTime" type="datetime" :inline="true" />
                        </v-card>

                    </div>
                </v-menu>
            </div>
        </v-card-text>

        <v-card-actions>
            <v-spacer/>
            <v-btn
                    color="grey darken-1"
                    dark
                    @click="$emit('close')"
            >
                Cancel
            </v-btn>

            <v-btn
                    color="green darken-1"
                    :disabled="!isValidConstructor"
                    :dark="isValidConstructor"
                    @click="createTodo"
            >
                {{todo ? 'Edit' : 'Create'}}
            </v-btn>
        </v-card-actions>
    </v-card>

</template>

<script>
    import DatePicker from 'vue2-datepicker';
    import '@/assets/datepicker.css'
    export default {
        name: "CreateTodo",
        props: {
            todo: {
                type: Object,
                required: false,
                default: null
            }
        },

        components:{DatePicker},
        data: () => ({
            showDateMenu: false,
            showTimeMenu: false,
            nameModel: '',
            descriptionModel:'',
            dateTime:null,
            isValidConstructor: true,
        }),
        created() {
            if(this.todo != null){
                this.dateTime = new Date(this.todo.expirationDate);
                this.nameModel = this.todo.name;
                this.descriptionModel = this.todo.description;
            }
        },
        methods: {
            createTodo() {
                this.$emit('close');
                if (this.dateTime != null) {
                    const newTodo = {
                        name: this.nameModel,
                        description: this.descriptionModel,
                        completed: false,
                        expirationDate: this.dateTime.toLocaleString()
                    };
                    if (this.todo == null) {
                        this.$store.dispatch('addTodo', newTodo)
                    } else {
                        newTodo.key = this.todo.key;
                        this.$store.dispatch('editTodo', newTodo)
                    }

                }

            },
            nameLength(v) {
                if (v != null && v.length > 0) {
                    if (v.length <= 10) {
                        this.isValidConstructor = true;
                        return true;
                    }
                    this.isValidConstructor = false;
                    return 'Max 10 characters';
                } else {
                    this.isValidConstructor = true;
                    return true;
                }

            }
        }
    }
</script>

<style scoped>

</style>