import {GET_LISTE_COMS, UPDATE_DATE} from "../../Actions/Commentaires.action";


const newDate = Date();

const initial_state = {
    from:newDate,
    to:newDate,
    Tous:false,
    Recents:true,
    positifs:false,
    negatifs:false,
    DemandeInfo:false,
    Concurrents:false,
    MAJ:false,
    Internet:false,
    commentaires:[],
};

function Afficher_commentaires(state=initial_state,action) {
    switch (action.type) {
        case GET_LISTE_COMS:

            return {
                Tous:action.tous,
                Recents:action.recents,
                positifs:action.positifs,
                negatifs:action.negatifs,
                DemandeInfo:action.demandeinfo,
                Concurrents:action.concurrents,
                MAJ:action.maj,
                Internet:action.internet,
                commentaires:[
                    {Date:'23/03/2020',Utilisateur:'Islem',contenu:"application 3ayana j'aime pas du tout",polarité:'0',DemandeInformation:'1',MiseAJour:'0',Internet:'0',Concurrents:'0'},
                    {Date:'23/03/2020',Utilisateur:'Islem',contenu:"application 3ayana j'aime pas du tout",polarité:'0',DemandeInformation:'1',MiseAJour:'0',Internet:'0',Concurrents:'0'},
                    {Date:'23/03/2020',Utilisateur:'Islem',contenu:"application 3ayana j'aime pas du tout",polarité:'0',DemandeInformation:'1',MiseAJour:'0',Internet:'0',Concurrents:'0'},
                    {Date:'23/03/2020',Utilisateur:'Islem',contenu:"application 3ayana j'aime pas du tout",polarité:'0',DemandeInformation:'1',MiseAJour:'0',Internet:'0',Concurrents:'0'},
                    {Date:'23/03/2020',Utilisateur:'Islem',contenu:"application 3ayana j'aime pas du tout",polarité:'0',DemandeInformation:'1',MiseAJour:'0',Internet:'0',Concurrents:'0'},
                    {Date:'23/03/2020',Utilisateur:'Islem',contenu:"application 3ayana j'aime pas du tout",polarité:'0',DemandeInformation:'1',MiseAJour:'0',Internet:'0',Concurrents:'0'},

                ],
                from:state.from,
                to:state.to,
            };
        case UPDATE_DATE:
            return {
                from:action.from,
                to:action.to
            };

        default:
            return state;
    }
}

export default Afficher_commentaires;