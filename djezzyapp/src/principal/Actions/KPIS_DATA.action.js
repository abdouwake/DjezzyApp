
export const IMPORT_KPI_DATA="IMPORT_KPI_DATA";



export function import_kpi_data(fichier,separateur) {
    return {
        type: IMPORT_KPI_DATA,
        fichier,
        separateur,
    }
}