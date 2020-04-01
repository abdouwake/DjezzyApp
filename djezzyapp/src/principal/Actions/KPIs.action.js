import {addMetrique, getMetrique} from "../Services/metrique";

export const GET_DATA_KPIS = "GET_DATA_KPIS";
export const FROM_UPDATE = "FROM_UPDATE";
export const TO_UPDATE ="TO_UPDATE";
export const CHECK_UPDATE = "CHECK_UPDATE";
export const ADD_DATA_KPI = "ADD_DATA_KPI";
export const GET_METRICS ="GET_METRICS";
export const UPDATE_DATE_ADD_ROW="UPDATE_DATE_ADD_ROW";
export const ADD_KPI = "ADD_KPI";
export const UPDATE_KPI="UPDATE_KPI";
export const DELETE_KPI="DELETE_KPI";


export function RequestAdd(nom,unite,explication) {
    return  function(dispatch) {
        return addMetrique(nom, unite, explication).then(res => {
            const {nom, unite, explication} = res.data;
            dispatch(add_kpi(nom, unite, explication));
            dispatch(requestGetMetrique())
        })
        }
    }

export function requestGetMetrique() {
    return  function(dispatch) {
        return getMetrique().then(res => {
            const Metriques = res.data;
            dispatch(get_metrics_names(Metriques))
        })
}
}

export function update_kpi(index,newData,oldData){
    return{
        type:UPDATE_KPI,
        newData,
        oldData,
        index,
    }
}


export function delete_kpi(index){
    return{
        type:DELETE_KPI,
        index,
    }
}


export function add_kpi(nom,explication,unite){
    return{
        type:ADD_KPI,
        nom,
        explication,
        unite
    }
}


export function get_metrics_names(metrics=[]) {
    return {
        type: GET_METRICS,
        metrics:metrics,
    }
}


export function update_date_add_row(date) {
    return {
        type: UPDATE_DATE_ADD_ROW,
        date,
    }
}



 //-----------------------------------------------------------------------

export function add_data_kpis(Values) {
    return {
        type: ADD_DATA_KPI,
        Values,
    }
}

export function update_check(boolean) {
    return {
        type: CHECK_UPDATE,
        boolean
    }
}

export function update_from(date) {
    return {
        type: FROM_UPDATE,
        date
    }
}

export function update_to(date) {
    return {
        type: TO_UPDATE,
        date
    }
}


export function getDataKpis() {
    return {
        type: GET_DATA_KPIS
    }
}


