import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Slide from '@material-ui/core/Slide';
 import Dialog from "@material-ui/core/Dialog";
import Steper from "./Stepper";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";



const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default class ChargerData extends Component{

    state={
        activeStep:0,
        delimiter:'',
        metric:'',
        file:'',
        data:'',
        nom:''
        };


    validate=()=>{
        this.props.import_kpi_data(this.state.file,this.state.delimiter);
        this.props.handleClose();
    };

    handleDelimiter=(event)=>{
        this.setState({
            delimiter: event.target.value
        });
    };

    changeFile = (files) => {
         this.setState({
             file: files[0],
             nom:files[0].name
         });
         var reader = new FileReader();
         var component = this;
         reader.onload = function (e) {
             component.setState({
                 data: e.target.result,
             });
         };
         reader.readAsText(files[0]);
     };

    onClickMetric_name = (event)=>{
        this.setState({
            metric: event.target.value
        })
    };


    onClickFile = (event)=>{
        this.setState({
            file: event.file
        })
    };


      handleNext = () => {
          this.setState({
              activeStep: this.state.activeStep+1
          });
    };

      handleBack = () => {
          this.setState({
              activeStep: this.state.activeStep-1
          });
    };

      handleReset = () => {
          this.setState({
              activeStep: 0
          });
    };


    render() {

        return (
            <div>
                <Button variant="outlined" color="primary" onClick={this.props.handleClickOpen}>
                    Charger les données antérieurs
                </Button>
                <Dialog

                    open={this.props.open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={this.props.handleClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle id="alert-dialog-slide-title">{"Chargement des données antérieurs"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">

                            <Steper
                                activeStep={this.state.activeStep}
                                data={this.state.data}
                                handleNext={this.handleNext}
                                handleBack={this.handleBack}
                                handleReset={this.handleReset}
                                changeFile={this.changeFile}
                                metric={this.metric}
                                nom={this.state.nom}
                                handleDelimiter={this.handleDelimiter}
                                delimiter={this.state.delimiter}
                                state_kpis={this.props.state_kpis}
                                import_kpi_data={this.props.import_kpi_data}

                            />

                        </DialogContentText>
                    </DialogContent>

                    <DialogActions>
                        <Button onClick={this.props.handleClose} color="primary">
                            Disagree
                        </Button>
                        <Button onClick={this.validate} color="primary">
                            Valider
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );

    }

}
