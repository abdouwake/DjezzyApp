import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from "@material-ui/core/Slide";
import Tableau_Metriques from "./Tab_metriques";
import Charger_Data from "./Charger_Data";
import {bindActionCreators} from "redux";
import {
    add_data_kpis,
    add_kpi,
    delete_kpi,
    get_metrics_names,
    update_date_add_row,
    update_kpi
} from "../../Actions/KPIs.action";
import {connect} from "react-redux";
import {import_kpi_data} from "../../Actions/KPIS_DATA.action";


const style_button_upload={
    display: 'none',
};
const style_button={
    backgroundColor:'#f78383',
    color:'white',
};

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
const style={
    backgroundColor:"#FF908E",
    marginRight:'30px',
    fontsize:'18px',
    color:"white"
};


class Parametres extends Component{


    state={
        open:false,
        open_add_data:false
    };

     style_div = {
        marginRight: '50px'
    };

    handleClickOpen_date = () => {
        this.setState({
            open_add_data:true
        })
    };


    handleClose_date = () => {
        this.setState({
            open_add_data:false
        })    };

    handleClickOpen = () => {
        this.setState({
            open:true
        })
    };


    handleClose = () => {
        this.setState({
            open:false
        })
    };


    render(){
        return (
            <div style={this.style_div} >
                <Button style={style_button}  onClick={this.handleClickOpen}>
                    Paramètres des métriques
                </Button>

                <Dialog  open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title" fullWidth={true} maxWidth = {'md'} >
                    <DialogTitle id="form-dialog-title">Paramétres des métriques</DialogTitle>
                    <DialogContent >
                        <DialogContentText>
                            Vous pouvez modifier ici les données de vos métriques.
                        </DialogContentText>

                        <div >

                            <Tableau_Metriques
                                state_kpis={this.props.state_kpis}
                                get_metrics_names={this.props.get_metrics_names}
                                delete_kpi={this.props.delete_kpi}
                                add_kpi={this.props.add_kpi}
                                update_kpi={this.props.update_kpi}
                            />
                            <Charger_Data
                                handleClickOpen={this.handleClickOpen_date}
                                handleClose={this.handleClose_date}
                                open={this.state.open_add_data}
                                state_kpis={this.props.state_kpis}
                                import_kpi_data={this.props.import_kpi_data}
                                />
                        </div>

                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.handleClose} color="primary">
                            Subscribe
                        </Button>
                    </DialogActions>

                </Dialog>
            </div>
        )

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
            get_metrics_names:get_metrics_names,
            add_data_kpis:add_data_kpis,
            update_date_add_row:update_date_add_row,
            delete_kpi:delete_kpi,
            add_kpi:add_kpi,
            update_kpi:update_kpi,
            import_kpi_data:import_kpi_data,
        }, dispatch)

    );
}


export default connect(mapStateToProps, mapDispatchToProps)(Parametres);