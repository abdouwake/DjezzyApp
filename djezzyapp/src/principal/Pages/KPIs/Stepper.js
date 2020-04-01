
import React,{Component} from 'react';
 import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Steps from "./Steps";
import Charger_Data from "./Charger_Data";

function getSteps() {
    return ['Selection de la métrique concernée', 'Chargez votre fichier', "Valider vos donées"];
}



function getStepContent(stepIndex) {
    switch (stepIndex) {
        case 0:
            return 'Quelle est la métrique concernée ?';
        case 1:
            return 'où se trouve votre fichier ?';
        case 2:
            return 'Validez vos données';
        default:
            return 'Uknown ?!';
    }
}

export default class Steper extends Component{

    onClickHandler = (event) => {
        this.setState({
            file: event.target.files[0]
        });
    };

    handleChange = (event)=>{
        this.setState({
            contenu: event.target.value
        });
    };

    render(){
        const steps = getSteps();
        return(
            <div>
                <Stepper activeStep={this.props.activeStep} alternativeLabel>
                    {steps.map(label => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <div>
                    {this.props.activeStep === steps.length ? (
                        <div>
                            <Typography  >Toutes les étapes ont été réalisées, validez votre requête.</Typography>
                            <Button onClick={this.props.handleReset}>Reset</Button>
                        </div>
                    ) : (
                        <div>
                            <Typography  >{getStepContent(this.props.activeStep)}</Typography>

                            <div>
                                <Steps
                                    activeStep = {this.props.activeStep}
                                    handleChange = {this.handleChange}
                                    onClickHandler = {this.onClickHandler}
                                    filename = {this.props.filename}
                                    data={this.props.data}
                                    changeFile={this.props.changeFile}
                                    metric={this.props.metric}
                                    nom={this.props.nom}
                                    handleDelimiter={this.props.handleDelimiter}
                                    delimiter={this.props.delimiter}
                                    state_kpis={this.props.state_kpis}
                                    import_kpi_data={this.props.import_kpi_data}

                                />
                            </div>

                            <div>
                                <Button
                                    disabled={this.props.activeStep === 0}
                                    onClick={this.props.handleBack}
                                 >
                                    Retour
                                </Button>
                                <Button variant="contained" color="primary" onClick={this.props.handleNext}>
                                    {this.props.activeStep === steps.length - 1 ? 'Valider' : 'Suivant'}
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}