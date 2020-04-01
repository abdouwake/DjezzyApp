import {GET_CONCURRENTS} from "../../Actions/Concurrents.action";


const initialstateconcurrents = {
    ooredoo_sat:0,
    ooredoo_pos:0,
    ooredoo_neg:0,
    mobilis_sat:0,
    mobilis_pos:0,
    mobilis_neg:0,
};

function Concurrents_data(state=initialstateconcurrents,action) {
    switch (action.type) {
        case GET_CONCURRENTS :
            return {
                ooredoo_sat:58,
                ooredoo_pos:20,
                ooredoo_neg:80,
                mobilis_sat:24,
                mobilis_pos:60,
                mobilis_neg:40,
            };
        default:
            return state;
    }
}

export default Concurrents_data;