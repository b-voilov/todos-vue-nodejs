import {API_URL} from "../../config";

export default {
    actions:{
        getJWT(ctx,payload){
            return new Promise((res,rej)=>{
                const theUrl = API_URL+"authorize";
                const xmlHttp = new XMLHttpRequest();
                xmlHttp.open('POST',theUrl,true);
                xmlHttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
                xmlHttp.send(JSON.stringify({name:payload.userName, password:payload.password}));
                xmlHttp.onreadystatechange = function () {
                    if (xmlHttp.readyState !== 4) return;
                    if(xmlHttp.status === 200){
                        const response = JSON.parse(xmlHttp.responseText);
                        ctx.commit('setJWT',{jwt:response.jwt});
                        res();
                    }else{
                        rej();
                    }
                };
            });
        }
    },
    mutations:{
        setJWT(state,payload){
            state.jwt = payload.jwt;
        }
    },
    state:{
        jwt:''
    },
    getters:{
        jwt:(state)=>{
            return state.jwt;
        }
    }
}