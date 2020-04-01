
export const  UPLOAD_FILE="UPLOAD_FILE";
export const  UPDATE_FILE="UPDATE_FILE";
export const GET_LISTE_COMS="GET_LISTE_COMS";
export const UPDATE_DATE="UPDATE_DATE";

export function upload_file(file) {
    return {
        type: UPLOAD_FILE,
        file
    }
}

export function update_file(file) {
    return {
        type: UPDATE_FILE,
        file
    }
}

export function get_liste_coms(tous,recents,positifs,negatifs,demandeinfo,concurrents,maj,internet) {
    return{
        type:GET_LISTE_COMS,
        tous,
        recents,
        positifs,
        negatifs,
        demandeinfo,
        concurrents,
        maj,
        internet
    }
}

export function update_date(from,to) {
    return{
        type:UPDATE_DATE,
        from,
        to
    }
}
