import React,{Component} from "react";
import MaterialTable from "material-table";
import {bindActionCreators} from "redux";
import {
    add_data_kpis,
     RequestAdd,
    requestGetMetrique,
    update_date_add_row
} from "../../Actions/KPIs.action";
import {connect} from "react-redux";


class Tableau_Metriques extends Component {
    componentDidMount() {
        this.props.requestGetMetrique();
        console.log(this.props.state_kpis.Metriques)
    }


    get_ligne=(a,b,c)=>{
        return(
            {Metrique:a,Explications:b,Type:c}
        )
    };


    state = {
        columns: [
            {title: 'Metrique', field: 'name'},
            {title: 'Explications', field: 'explications'},
            {title: 'Type', field: 'type'},
        ],
        data: [],
    };

    render() {
        return (

            <MaterialTable style={{width: '900px'}}
                           title="Métriques"
                           columns={this.state.columns}
                           data={this.state.data}
                           editable={{
                               onRowAdd: newData =>
                                   new Promise(resolve => {
                                       setTimeout(() => {
                                           resolve();
                                           {this.props.RequestAdd(newData.Metrique,newData.Type,newData.Explications)}
                                       }, 600);
                                   }),
                               onRowUpdate: (newData, oldData) =>
                                   new Promise(resolve => {
                                       setTimeout(() => {
                                           resolve();
                                           const index = this.state.data.indexOf(oldData);
                                           if (oldData) {
                                               {this.props.update_kpi(index,newData,oldData)}
                                           }
                                       }, 600);
                                   }),
                               onRowDelete: oldData =>
                                   new Promise(resolve => {
                                       setTimeout(() => {
                                           resolve();
                                           const index = this.state.data.indexOf(oldData);
                                           {this.props.delete_kpi(index)}
                                       }, 600);
                                   }),
                           }}
            />
        );
    }

}

function mapStateToProps(state){
    return {
        state_kpis: state.metriques_outils
    }
}


function mapDispatchToProps(dispatch) {
    return (
        bindActionCreators({
            requestGetMetrique:requestGetMetrique,
            RequestAdd:RequestAdd,
            add_data_kpis:add_data_kpis,
            update_date_add_row:update_date_add_row,
        }, dispatch)
    );
}


export default connect(mapStateToProps, mapDispatchToProps)(Tableau_Metriques);
