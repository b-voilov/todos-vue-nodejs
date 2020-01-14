<template>
    <div>
        <v-card-text>
            <v-text-field
                    v-model="login"
                    outlined
                    label="login"
                    type="email"
            />
            <v-form ref="passwordForm">
                <v-text-field
                        v-model="password"
                        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="showPassword ? 'text' : 'password'"
                        :rules="[checkPasswords]"
                        outlined
                        label="password"
                        @click:append="showPassword=!showPassword"
                />
                <v-text-field
                        v-model="confirmPassword"
                        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="showPassword ? 'text' : 'password'"
                        :rules="[checkPasswords]"
                        outlined
                        label="confirm password"
                        @click:append="showPassword=!showPassword"
                />
            </v-form>
        </v-card-text>
        <v-card-actions>
            <v-spacer/>
            <v-btn @click="$router.push('/')" color="secondary">Go Offline</v-btn>
            <v-btn :disabled="!passwordsMatch" @click="register" color="primary">Sign Up</v-btn>
        </v-card-actions>
    </div>
</template>

<script>
    import {API_URL} from "../config";
    function emailIsValid (email) {
        return /\S+@\S+\.\S+/.test(email)
    }
    export default {
        name: "RegistrationForm",
        data:()=>({
            login:'',
            password:'',
            confirmPassword:'',
            showPassword:false,
            passwordsMatch:false
        }),
        watch:{
            password:'validatePasswordForm',
            confirmPassword:'validatePasswordForm'
        },
        methods:{
            register(){
                if(this.confirmPassword === this.password && this.password !== '' && emailIsValid(this.login)){
                    return new Promise((res,rej)=>{
                        const xmlHttp = new XMLHttpRequest();
                        xmlHttp.open('POST',API_URL+'register',true);
                        xmlHttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
                        xmlHttp.send(JSON.stringify({name:this.login, password:this.password}));
                        xmlHttp.onreadystatechange = function () {
                            if (xmlHttp.readyState !== 4) return;
                            if (xmlHttp.status === 200){
                                alert('You have registered successfully. Now go to authorization and use your credentials to log in');
                            }else{
                                try{
                                    alert(xmlHttp.responseText);
                                } catch (error) {
                                    alert()
                                }
                            }
                        }
                    });
                } else {
                    alert('make sure all inputs are valid');
                }

            },
            checkPasswords(){
                if(this.password === this.confirmPassword){
                    this.passwordsMatch = true;
                    return true;
                }else{
                    this.passwordsMatch = false;
                    return 'passwords do not match';
                }
            },
            validatePasswordForm(){
                this.$refs.passwordForm.validate()
            }
        }
    }
</script>

<style scoped>

</style>