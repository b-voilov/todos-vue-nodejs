<template>
    <v-card :min-width="filter.name === 'wrapFilterInInterval'?580:320" :max-width="filter.name === 'wrapFilterInInterval'?580:320">
        <div style="text-align: center;padding-top: 20px">
            <date-picker v-if="filter.name === 'wrapFilterInInterval'" v-model="time" type="datetime" :inline="true" range/>
            <date-picker v-else v-model="time" type="datetime" :inline="true" />
        </div>
        <v-card-actions style="margin-top: 20px!important;">
            <v-spacer/>
            <v-btn
                    color="grey darken-1"
                    dark
                    @click="$emit('close')"
            >
                Cancel
            </v-btn>

            <v-btn @click="setFilter()" color="green darken-1" dark>
                Apply
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    import DatePicker from 'vue2-datepicker';
    import '@/assets/datepicker.css'
    import {mapGetters} from "vuex";
    import Filters from "../store/modules/filters_realisation";

    export default {
        name: "DateFilterPicker",
        props: {
            filter: {
                type: Function,
                required: true
            }
        },
        computed:{
            ...mapGetters(["allFilters"]),
        },
        data: () => ({
            time: [new Date(),new Date()],
            filters:{...Filters}
        }),

        methods:{
            setFilter(){
                this.$emit('close');
                if(this.time.length==null){
                    this.$store.dispatch("addFilter", this.filter(this.time));
                }else{
                    this.$store.dispatch("addFilter", this.filter(this.time[0],this.time[1]));
                }
            }
        },
        components: {DatePicker}
    }
</script>

<style>

</style>