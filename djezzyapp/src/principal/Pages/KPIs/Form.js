import React from 'react';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Grid from "@material-ui/core/Grid";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

class Formulaire extends React.Component{

    constructor(props) {
        super(props);
        const array = [];
        const  tab = this.props.Metriques;
         tab.map(item=> array.push(item.nom));
        this.setState({
            Metriques:array
        })
    }



    onSubmit =() => {
        this.props.add_data_kpis(this.state.Values);
        const handle = this.props.handleClose;
        handle();
    };

    state={
        Metriques:[],
        Values:{}
    };

     handleChange= (event) => {
         const value = event.target.value;
         const name = event.target.name;
         let clone= Object.assign({},this.state.Values);
         clone[name]=value;

        this.setState({
            ...this.state,
            Values:clone
        });
    };


    create_item=(x)=>{
        return (
            <TextField
                type="text"
                onChange={this.handleChange}
                name={x}
                label={x}
                style={{marginLeft:'30px',marginRight:'30px',marginTop:'30px'}}
            />

        )
    };

    render(){

        return(
            <div>
                <form  >
                    <Dialog open={this.props.open} onClose={this.props.handleClose} aria-labelledby="form-dialog-title">
                        <DialogTitle id="form-dialog-title">Ajouter une ligne</DialogTitle>
                        <DialogContent>

                            <DialogContentText>
                                Insérez les informations suivantes. Faites attention a entrer les informations concernant la date mentionnée.
                            </DialogContentText>
                            <div>
                                <div  style={{textAlign:'center'}} >
                                    <MuiPickersUtilsProvider utils={DateFnsUtils} >
                                        <KeyboardDatePicker
                                            disableToolbar
                                            variant="inline"
                                            format="dd/MM/yyyy"
                                            margin="normal"
                                            id="date-picker-inline"
                                            label="Insérez une date"
                                            value={this.props.Date}
                                            onChange={this.props.onClickDate}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change date',
                                            }}
                                        />
                                    </MuiPickersUtilsProvider>
                                </div>
                                <Grid container spacing={2}  justify="center"  alignItems="left" >

                                   {  this.state.Metriques.map(item=>
                                       this.create_item(item)
                                   )}

                                </Grid>
                            </div>
                        </DialogContent>


                        <DialogActions>
                            <Button onClick={this.props.handleClose} color="primary">
                                Annuler
                            </Button>
                            <Button onClick={this.onSubmit} type="submit" color="primary">
                                Ajouter
                            </Button>

                        </DialogActions>
                    </Dialog>


                </form>

            </div>

        )
    }
}


export default  (Formulaire);