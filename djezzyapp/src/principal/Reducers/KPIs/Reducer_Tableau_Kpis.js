import {GET_TABLEAU} from "../../Actions/Tableau_Kpis.action";

const initialDate = {
    rows: [
        {'Date':'01/01/2020','Daily active users':'125','Monthly active users':'578524','Weekly active users':'87','Total Downloads':'25210','Acrtive Downloads':'658','Installs':'5875','Uninstalls':'986','DailyEngagement':'54.0'},
        {'Date':'12/02/2020','Daily active users':'258','Monthly active users':'24545','Weekly active users':'54','Total Downloads':'52320','Acrtive Downloads':'658','Installs':'5875','Uninstalls':'986','DailyEngagement':'54.0'},
        {'Date':'21/03/2020','Daily active users':'2827','Monthly active users':'2121','Weekly active users':'565','Total Downloads':'201','Acrtive Downloads':'658','Installs':'5875','Uninstalls':'986','DailyEngagement':'54.0'},
        {'Date':'23/05/2020','Daily active users':'5475','Monthly active users':'5475','Weekly active users':'2178','Total Downloads':'232','Acrtive Downloads':'658','Installs':'5875','Uninstalls':'986','DailyEngagement':'54.0'},
        {'Date':'15/04/2020','Daily active users':'75','Monthly active users':'212','Weekly active users':'787','Total Downloads':'2542','Acrtive Downloads':'658','Installs':'5875','Uninstalls':'986','DailyEngagement':'54.0'},
        {'Date':'29/08/2020','Daily active users':'5245','Monthly active users':'457','Weekly active users':'25254','Total Downloads':'683532076','Acrtive Downloads':'658','Installs':'5875','Uninstalls':'986','DailyEngagement':'54.0'},
    ]

};

export default function AFFICHER_TABLEAU(state=initialDate,action){
    switch (action.type) {
        case GET_TABLEAU :
            return {
                ...state,
                rows: [
                    {'Date':'01/01/2020','Daily active users':'125','Monthly active users':'578524','Weekly active users':'87','Total Downloads':'25210','Acrtive Downloads':'658','Installs':'5875','Uninstalls':'986','DailyEngagement':'54.0'},
                    {'Date':'12/02/2020','Daily active users':'258','Monthly active users':'24545','Weekly active users':'54','Total Downloads':'52320','Acrtive Downloads':'658','Installs':'5875','Uninstalls':'986','DailyEngagement':'54.0'},
                    {'Date':'21/03/2020','Daily active users':'2827','Monthly active users':'2121','Weekly active users':'565','Total Downloads':'201','Acrtive Downloads':'658','Installs':'5875','Uninstalls':'986','DailyEngagement':'54.0'},
                    {'Date':'23/05/2020','Daily active users':'5475','Monthly active users':'5475','Weekly active users':'2178','Total Downloads':'232','Acrtive Downloads':'658','Installs':'5875','Uninstalls':'986','DailyEngagement':'54.0'},
                    {'Date':'15/04/2020','Daily active users':'75','Monthly active users':'212','Weekly active users':'787','Total Downloads':'2542','Acrtive Downloads':'658','Installs':'5875','Uninstalls':'986','DailyEngagement':'54.0'},
                    {'Date':'29/08/2020','Daily active users':'5245','Monthly active users':'457','Weekly active users':'25254','Total Downloads':'683532076','Acrtive Downloads':'658','Installs':'5875','Uninstalls':'986','DailyEngagement':'54.0'},
                ]


            };

        default:
            return state

    }
}
