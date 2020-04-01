import {combineReducers} from "redux";
import CardsData from "./Commentaires/Reducer_cards_commentaires";
import Concurrents_data from "./Concurrents/Reducer_concurents";
import KPIs_Data from "./KPIs/Reducer_KPIs";
import Update_date from "./KPIs/Reducer_Date_KPIs";
import Metrics_tools from "./KPIs/Reducer_Metrics";
import Import_kpis_data from "./KPIs/Reducer_Import_DATA";
import AFFICHER_TABLEAU from "./KPIs/Reducer_Tableau_Kpis";
import File_Upload from "./Commentaires/Reducer_import_file_coms";
import Afficher_commentaires from "./Commentaires/Reducer_get_all_comments";

const rootReducer = combineReducers({
    Cards_stat_data: CardsData,
    Concurrents_data:Concurrents_data,
    KPIs_Data:KPIs_Data,
    Update_date:Update_date,
    metriques_outils:Metrics_tools,
    Import_kpis_data:Import_kpis_data,
    AFFICHER_TABLEAU:AFFICHER_TABLEAU,
     File_Upload:File_Upload,
    Afficher_commentaires:Afficher_commentaires,
});

export default rootReducer;