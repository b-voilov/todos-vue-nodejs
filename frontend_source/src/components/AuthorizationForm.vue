<template>
    <div>
        <v-card-text>
            <v-text-field
                    v-model="login"
                    outlined
                    label="login"

            />
            <v-text-field
                    v-model="password"
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="showPassword ? 'text' : 'password'"
                    outlined
                    label="password"
                    @click:append="showPassword=!showPassword"
            />
        </v-card-text>
        <v-card-actions>
            <v-spacer/>
            <v-btn @click="$router.push('/')" color="secondary">Go Offline</v-btn>
            <v-btn @click="logIn" color="primary">Log In</v-btn>
        </v-card-actions>
    </div>
</template>

<script>
    export default{
        name: "AuthorizationForm",
        data:()=>({
            login:'',
            password:'',
            showPassword:false,
        }),
        methods:{
            logIn(){
                if(this.login.length > 0 && this.password.length > 0){
                    this.$store.dispatch('getJWT',{userName:this.login,password:this.password})
                        .then(()=>{this.$store.dispatch('fetchAllTodos');this.$router.push('/')})
                        .catch(()=>{alert('Wrong login and password')})
                }
            }
        }
    }
</script>

<style scoped>

</style>