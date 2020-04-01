import {GET_SUMMARY} from "../../Actions/Principale.action";


const initialStateCardData = {
    total_commentaires:0,
    total_avis: 0,
    total_positifs:0,
    total_negatifs:0,
    Concernant_concurents:0,
    concernant_maj:0,
    concernant_internet:0,
    Summary_coms:[0,0,0,0],
};

function CardsData(state=initialStateCardData,action) {
        switch (action.type) {
            case GET_SUMMARY:
                return {
                    total_avis: 1224,
                    total_commentaires:2581,
                    total_positifs:80,
                    total_negatifs:20,
                    Concernant_concurents:254,
                    concernant_maj:658,
                    concernant_internet:847,
                    Summary_coms:[200,450,520,850],
                };

            default:
                return state;
        }
}

export default CardsData;