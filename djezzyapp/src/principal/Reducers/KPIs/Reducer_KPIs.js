import {GET_DATA_KPIS} from "../../Actions/KPIs.action";


const initialStateKpis = {
    DAU:0,
    MAU:0,
    Revenue:0,
    daily_acquisition:0,
    daily_engagement:0,
    DAU_DATA:[],
    WAU_DATA:[],
    MAU_DATA:[],
    Labels:[],
};


function KPIs_Data(state=initialStateKpis,action) {
    switch (action.type) {
        case GET_DATA_KPIS :
            return {
                DAU:124587,
                MAU:8795,
                Revenue:125453,
                daily_acquisition:785,
                daily_engagement:6564,
                DAU_DATA:[44, 55, 31, 47, 31, 43, 26, 41, 31, 47, 33,44, 55, 31, 47, 31, 43, 26, 41, 31, 47],
                WAU_DATA:[20, 10, 15, 2, 16, 14, 13, 12, 11, 15, 16,19, 20, 12, 16, 14, 15, 16, 10, 11, 13],
                MAU_DATA:[12, 20, 15, 30, 16, 14, 13, 12, 11, 15, 16,19, 20, 12, 16, 14, 15, 16, 10, 11, 13],
                Labels:['Dec 01', 'Dec 02','Dec 03','Dec 04','Dec 05','Dec 06','Dec 07','Dec 08','Dec 09 ','Dec 10','Dec 11','Dec 12','Dec 13','Dec 14','Dec 15','Dec 16','Dec 17','Dec 18','Dec 19','Dec 20','Dec 21'],
            };
        default:
            return state;
    }
}

export default KPIs_Data;
