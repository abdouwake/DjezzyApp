import '@date-io/date-fns'
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from "@date-io/date-fns";
import {MuiPickersUtilsProvider,KeyboardDatePicker} from '@material-ui/pickers';
import Checkbox from '@material-ui/core/Checkbox';
import {createMuiTheme} from "@material-ui/core";
import {ThemeProvider} from "@material-ui/styles";

import pink from '@material-ui/core/colors/pink';
import {bindActionCreators} from "redux";
import {get_liste_coms, update_date} from "../../Actions/Commentaires.action";
import {connect} from "react-redux";

let newDate = new Date();

const style={
    paddingTop:'20px',
    color:'#c46565'
};

const defaultMaterialTheme = createMuiTheme({

    palette: {
        primary:pink
},

});

const style_check={
    color:'#c46565',
    paddingTop: '25px'
};





class DatePick extends React.Component  {

componentWillMount() {
    this.props.update_date(this.state.selectedFromDate,this.state.selectedToDate);
    this.props.get_liste_coms(false,true,false,false,false,false,false,false)
}

    state = {
        selectedFromDate:newDate,
        selectedToDate:newDate,
        checked:'false'
    };

    onClickFrom = (event) => {
        this.setState({
            selectedFromDate:event.target.value
        });
        this.props.update_date(this.state.selectedFromDate,this.state.selectedToDate)

    };
    onClickTo = (event) => {
        this.setState({
            selectedToDate:event.target.value
        });
        this.props.update_date(this.state.selectedFromDate,this.state.selectedToDate)

    };

     handleChange = (event) => {
        this.setState({
            checked: (!event.target.checked)
        });
      };


    render(){
        return (

            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid  container spacing={4}
                      direction="row"
                      justify="center"
                      alignItems="center">

                    <Checkbox
                        style={style_check}
                        defaultChecked={false}
                        onChange={this.handleChange}
                      />



                     <h4 style={style}>Afficher les données du : </h4>

                    <Grid item xs={4}>
                        <ThemeProvider theme={defaultMaterialTheme}>
                        <KeyboardDatePicker
                            disabled={this.state.checked}
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="A partir du "
                            value={this.state.selectedFromDate}
                            onChange={this.onClickFrom}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                        </ThemeProvider>
                    </Grid>

                    <Grid item xs={4}>

                        <ThemeProvider theme={defaultMaterialTheme}>
                        <KeyboardDatePicker
                            disabled={this.state.checked}
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="Jusqu'au "
                            value={this.state.selectedToDate}
                            onChange={this.onClickTo}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                    />
                        </ThemeProvider>
                    </Grid>
                </Grid>
            </MuiPickersUtilsProvider>
        )
    }
}

function mapStateToProps(state){
    return {
        Afficher_commentaires: state.Afficher_commentaires,
    };
}


function mapDispatchToProps(dispatch) {
    return (
        bindActionCreators({
            get_liste_coms:get_liste_coms,
            update_date:update_date,
        }, dispatch)

    );
}


export default connect(mapStateToProps, mapDispatchToProps)(DatePick);
