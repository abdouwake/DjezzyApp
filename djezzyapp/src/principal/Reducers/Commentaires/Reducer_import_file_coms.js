import {UPDATE_FILE, UPLOAD_FILE} from "../../Actions/Commentaires.action";


const initialStateCardData = {
    file:undefined,
 };

function File_Upload(state=initialStateCardData,action) {
    switch (action.type) {
        case UPDATE_FILE:
            return {
                file:action.file,
             };
        case UPLOAD_FILE:
            return {
                file:action.file,

            };
        default:
            return state;
    }
}

export default File_Upload;