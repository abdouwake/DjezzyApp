import React,{Component} from "react";
import Paper from "@material-ui/core/Paper";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import TablePagination from "@material-ui/core/TablePagination";
import {bindActionCreators} from "redux";
import {add_data_kpis, requestGetMetrique, update_date_add_row} from "../../Actions/KPIs.action";
import {connect} from "react-redux";
import {get_tableau} from "../../Actions/Tableau_Kpis.action";

class TableauKPIs extends Component{

    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({
            MARCHE : nextProps.MARCHE
        });
        const array = this.create_columns(this.props.MARCHE);
        this.Update_columns(array);
    }

     componentDidMount() {
         this.props.requestGetMetrique();
         this.setState({
             rows: this.props.state_rows.rows
         });
     }



    state={
        page:0,
        rowsPerPage:10,
        columns: [],
        rows:[],
    };

     create_columns =(tab) =>{
          const array = [{ id: 'Date', label: 'Date', minWidth: 30 }];
         tab.map(item =>
             array.push({
                 id:item.id_metrique,
                 label:item.nom,
                 format: value => value.toLocaleString(),
                 align: 'center',
             })
         );
         return array
     };


     Update_columns =(array)=>{
              this.setState({
                columns:array
            });

     };


    render(){
        const handleChangePage = (event, newPage) => {
            this.setState({
                page:newPage
            })
        };

        const handleChangeRowsPerPage = event => {
            this.setState({
                rowsPerPage:+event.target.value,
                page:0
            });

        };


        return(

            <Paper >
                <TableContainer >
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow >
                                {this.state.columns.map(column => (
                                    <TableCell
                                        key={column.id}
                                        align={column.center}
                                     >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody >
                            {this.state.rows.slice(this.state.page * this.state.rowsPerPage, this.state.page * this.state.rowsPerPage + this.state.rowsPerPage).map(row => {
                                return (
                                    <TableRow  hover role="checkbox" tabIndex={-1} key={row.code}>
                                        {this.state.columns.map(column => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={this.state.columns.id} align={this.state.columns.center} style={{textAlign:'center'}}>
                                                    {this.state.columns.format && typeof value === 'number' ? this.state.columns.format(value) : value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={this.state.rows.length}
                    rowsPerPage={this.state.rowsPerPage}
                    page={this.state.page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </Paper>
        )
    }
}

function mapStateToProps(state){
    return {
        state_rows:state.AFFICHER_TABLEAU,
    }
}


function mapDispatchToProps(dispatch) {
    return (
        bindActionCreators({
            add_data_kpis:add_data_kpis,
            update_date_add_row:update_date_add_row,
            get_tableau:get_tableau,
            requestGetMetrique:requestGetMetrique,
        }, dispatch)

    );
}


export default
    connect(mapStateToProps, mapDispatchToProps)(TableauKPIs);
