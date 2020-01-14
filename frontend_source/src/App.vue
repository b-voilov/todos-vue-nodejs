<template>
    <v-app>
      <router-view/>
    </v-app>
</template>

<script>
    import Home from "./views/Home.vue";

    export default {
        name: 'App',

        components: {
            Home,
        },

        created() {
            /*this.$store.dispatch('getJWT',{userName:'admin',password:'admin'}).then(()=>{
                this.$store.dispatch('fetchAllTodos');
            });*/
            this.$router.push('/authorization');
        },

        data: () => ({
            //
        }),
    };
</script>
