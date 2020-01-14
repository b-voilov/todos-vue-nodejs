<template>
    <div style="background-color: #fafafa;min-height: 100%; display: flex; justify-content: center; align-items: center"  >
        <v-card min-width="600" max-width="600" >
            <div style="width: 80%; margin: 40px auto; font-family: Roboto, sans-serif">
                <v-card-title>
                    <div style="display: flex; flex-direction: row; justify-content: space-between">
                        <v-btn
                                @click="toggleMode('authorization')"
                                :color="isAuthorization ? 'primary' : 'secondary'"
                                text
                        >
                            <p class="headline">Authorization</p>
                        </v-btn>
                        <p class="headline">|</p>
                        <v-btn
                                @click="toggleMode('registration')"
                                :color="!isAuthorization ? 'primary' : 'secondary'"
                                text
                        >
                            <p class="headline">Registration</p>
                        </v-btn>
                    </div>
                </v-card-title>
                <AuthorizationForm v-if="isAuthorization"/>
                <RegistrationForm v-else/>
            </div>
        </v-card>
    </div>
</template>

<script>
    import AuthorizationForm from "../components/AuthorizationForm";
    import RegistrationForm from "../components/RegistrationForm";
    export default {
        name: "Authorization",
        data:()=>({
            isAuthorization:true,
            isRegistration:false
        }),
        methods:{
            toggleMode(choice){
                if(choice === 'authorization'){
                    this.isAuthorization = true;
                    this.isRegistration = false;
                }else if(choice === 'registration'){
                    this.isRegistration = true;
                    this.isAuthorization = false;
                }
            }
        },
        components:{
            AuthorizationForm,
            RegistrationForm
        }
    }
</script>

<style scoped>
    .router-link{
        text-align: center; color: #292929;margin-bottom: 40px
    }
</style>