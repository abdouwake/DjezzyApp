import {
    ADD_DATA_KPI,
    ADD_KPI,
    DELETE_KPI,
    GET_METRICS,
    UPDATE_DATE_ADD_ROW,
    UPDATE_KPI
} from "../../Actions/KPIs.action";

let newDate = new Date();

const initialState = {
        Metriques:[],
        Date: newDate,
 };

export default function Metrics_tools(state=initialState,action){
    const met = state.Metriques;
    const expli = state.Explications;
    const uni = state.Unite;

    switch (action.type) {
        case GET_METRICS :
                const tab = [{ id: 'Date', label: 'Date', minWidth: 30 }];
            action.metrics.forEach(metric=> {
                tab.push(metric)
            });
            return {
                ...state,
                Metriques : tab
            };

        case ADD_DATA_KPI :
            return {
                ...state,
                Values:action.Values
            };

        case UPDATE_DATE_ADD_ROW:
            return {
                ...state,
                Date:action.date
            };
        case DELETE_KPI:
            const Metrique = met[action.index]; //le nom de la métrique pr la supprimer noublie pas suppression on cascade
            met.splice(action.index,1);
            expli.splice(action.index,1);
            uni.splice(action.index,1);

            return {
                ...state,
                Unite: uni,
                Explications: expli,
                Metriques: met,
            };


        case UPDATE_KPI:
                const index = action.index;
                met[index]=action.newData.Metrique;
                expli[index]=action.newData.Explications;
                uni[index]=action.newData.Type;
            return{
                ...state,
                Unite: uni,
                Explications: expli,
                Metriques: met,
            };


        case ADD_KPI:
            met.push(action.nom);
            expli.push(action.explication);
            uni.push(action.unite);

            return{
                ...state,
                Unite: uni,
                Explications: expli,
                Metriques: met,

            };

        default:
            return state

    }
}
