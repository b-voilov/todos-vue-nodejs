import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import '@mdi/font/css/materialdesignicons.css'
Vue.use(Vuetify);

export default new Vuetify({
    icons:{
        iconfont:['mdi']
    },
    theme: {
        themes: {
            light: {
                navbar_primary: "#00B181"/*"#3949AB"*/
            },
        }
    }
});
