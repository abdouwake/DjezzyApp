import '@date-io/date-fns'
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from "@date-io/date-fns";
import {MuiPickersUtilsProvider,KeyboardDatePicker} from '@material-ui/pickers';
import Checkbox from '@material-ui/core/Checkbox';
import {createMuiTheme} from "@material-ui/core";
import {ThemeProvider} from "@material-ui/styles";

import pink from '@material-ui/core/colors/pink';
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


export default class DatePickKpis extends React.Component  {

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
                        onChange={this.props.onClickCheck}
                    />

                    <h4 style={style}>Afficher les données du : </h4>

                    <Grid item xs={4}>
                        <ThemeProvider theme={defaultMaterialTheme}>
                            <KeyboardDatePicker
                                disabled={!this.props.checked}
                                variant="inline"
                                format="dd/MM/yyyy"
                                margin="normal"
                                id="date-picker-inline"
                                label="A partir du "
                                value={this.props.selectedFromDate}
                                onChange={this.props.onClickFrom}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                        </ThemeProvider>
                    </Grid>

                    <Grid item xs={4}>

                        <ThemeProvider theme={defaultMaterialTheme}>
                            <KeyboardDatePicker
                                disabled={!this.props.checked}
                                variant="inline"
                                format="dd/MM/yyyy"
                                margin="normal"
                                id="date-picker-inline"
                                label="Jusqu'au "
                                value={this.props.selectedToDate}
                                onChange={this.props.onClickTo}
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