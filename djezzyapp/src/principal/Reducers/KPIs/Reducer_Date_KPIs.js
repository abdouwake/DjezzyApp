import {CHECK_UPDATE, FROM_UPDATE, TO_UPDATE} from "../../Actions/KPIs.action"


let newDate = new Date();

const initialDate = {
    selectedToDate:newDate,
    selectedFromDate:newDate,
    date_checked:false
};

export default function Update_date(state=initialDate,action){
    switch (action.type) {
        case FROM_UPDATE :
            return {
                ...state,
                selectedFromDate:action.date
            };
        case TO_UPDATE :
            return {
                ...state,
                selectedToDate:action.date
            };
        case CHECK_UPDATE:
            return {
                ...state,
                date_checked:action.boolean
            };
        default:
            return state

    }
}
