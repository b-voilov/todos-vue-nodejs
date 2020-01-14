<template>
    <v-list-group :prepend-icon="$vuetify.theme.dark ? 'mdi-filter-outline' : 'mdi-filter'">
        <template v-slot:activator>
            <v-list-item-title>Filters</v-list-item-title>
        </template>
        <v-list-item @click="setFilter(filters.filterCompleted)">
            <v-list-item-action>
                <v-checkbox off-icon="mdi-checkbox-blank-circle-outline" on-icon="mdi-checkbox-marked-circle" :input-value="this.allFilters.includes('filterCompleted')" />
            </v-list-item-action>
            <v-list-item-title>Only Completed</v-list-item-title>
        </v-list-item>
        <v-list-item @click="setFilter(filters.filterNotCompleted)">
            <v-list-item-action>
                <v-checkbox off-icon="mdi-checkbox-blank-circle-outline" on-icon="mdi-checkbox-marked-circle" :input-value="this.allFilters.includes('filterNotCompleted')" inset/>
            </v-list-item-action>
            <v-list-item-title>Only Not Completed</v-list-item-title>
        </v-list-item>
        <v-list-item @click="openDialog(filters.wrapFilterOnDate)">
            <v-list-item-action>
                <v-checkbox off-icon="mdi-checkbox-blank-circle-outline" on-icon="mdi-checkbox-marked-circle" :input-value="this.allFilters.includes('filterOnDate')" inset/>
            </v-list-item-action>
            <v-list-item-title>On Date</v-list-item-title>
        </v-list-item>
        <v-list-item @click="openDialog(filters.wrapFilterBeforeDate)">
            <v-list-item-action>
                <v-checkbox off-icon="mdi-checkbox-blank-circle-outline" on-icon="mdi-checkbox-marked-circle" :input-value="this.allFilters.includes('filterBeforeDate')" inset/>
            </v-list-item-action>
            <v-list-item-title>Before Date</v-list-item-title>
        </v-list-item>
        <v-list-item @click="openDialog(filters.wrapFilterAfterDate)">
            <v-list-item-action>
                <v-checkbox off-icon="mdi-checkbox-blank-circle-outline" on-icon="mdi-checkbox-marked-circle" :input-value="this.allFilters.includes('filterAfterDate')" inset/>
            </v-list-item-action>
            <v-list-item-title>After Date</v-list-item-title>
        </v-list-item>
        <v-list-item @click="openDialog(filters.wrapFilterInInterval)">
            <v-list-item-action>
                <v-checkbox off-icon="mdi-checkbox-blank-circle-outline" on-icon="mdi-checkbox-marked-circle" :input-value="this.allFilters.includes('filterInInterval')" inset/>
            </v-list-item-action>
            <v-list-item-title>In Interval</v-list-item-title>
        </v-list-item>
        <v-list-item @click="setFilter(filters.filterAll)">
            <v-list-item-action>
                <v-icon>mdi-restart</v-icon>
            </v-list-item-action>
            <v-list-item-title>All todos</v-list-item-title>
        </v-list-item>
        <v-dialog  persistent v-model="filterSelected.name !== 'filterSelected' && filterSelected.name.length>1">
            <DateFilterPicker :filter="filterSelected" @close="filterSelected=()=>{}"/>
        </v-dialog>
    </v-list-group>
</template>

<script>
    import DateFilterPicker from "./DateFilterPicker";
    import {mapGetters} from "vuex";
    import Filters from "../store/modules/filters_realisation";
    export default {
        name: "Filters",
        computed:{
            ...mapGetters(["allFilters"]),
        },
        data:()=>({
            onlyCompletedSwitch: false,
            onlyNotCompletedSwitch: false,
            beforeSwitch: false,
            afterSwitch: false,
            inIntervalSwitch: false,
            allTodos:true,
            filterSelected:()=>{},
            filters:{...Filters}
        }),
        mounted() {
            this.$store.subscribe((mutation, state) => {
                this.$forceUpdate()
            });
        },
        methods:{
            openDialog(filter){
                if(this.allFilters.includes(filter(new Date(),new Date()).name)) {
                    this.$store.dispatch("removeFilter", filter(new Date(),new Date()).name);
                }else{
                    this.filterSelected = filter;

                }
            },
            setFilter(filter){
                if(!this.allFilters.includes(filter.name)) {
                    this.$store.dispatch("addFilter", filter);
                }else{
                    this.$store.dispatch("removeFilter", filter.name);
                }
            }
        },
        components:{
            DateFilterPicker
        }
    }
</script>

<style >
.v-dialog{
    width: auto!important;
}
</style>