import {IMPORT_KPI_DATA} from "../../Actions/KPIS_DATA.action";


const initialDate = {
    file_selected:'',
    separateur:'',
};

export default function Import_kpis_data(state=initialDate,action) {
    switch (action.type) {
        case IMPORT_KPI_DATA :
            return {
                ...state,
                file_selected: action.fichier,
                separateur: action.separateur
            };
        default:
            return {
                state
            }

    }
}