import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import {bindActionCreators} from "redux";
import {get_liste_coms} from "../../Actions/Commentaires.action";
import {connect} from "react-redux";

const columns = [
    { id: 'Date', label: 'Date', minWidth: 30 },
    { id: 'Utilisateur', label: 'Utilisateur', minWidth: 30 },
    {
        id: 'contenu',
        label: 'contenu',
        minWidth: 60,
        align: 'left',
        format: value => value.toLocaleString(),
    },
    {
        id: 'polarité',
        label: 'polarité',
        minWidth: 20,
        align: 'center',
        format: value => value.toLocaleString(),
    },
    {
        id: 'DemandeInformation',
        label: 'DemandeInformation',
        minWidth: 20,
        align: 'center',
        format: value => value.toLocaleString(),
    },
    {
        id: 'MiseAJour',
        label: 'MiseAJour',
        minWidth: 20,
        align: 'center',
        format: value => value.toLocaleString(),
    },
    {
        id: 'Internet',
        label: 'Internet',
        minWidth: 20,
        align: 'center',
        format: value => value.toLocaleString(),
    },
    {
        id: 'Concurrents',
        label: 'Concurrents',
        minWidth: 20,
        align: 'center',
        format: value => value.toLocaleString(),
    }
];



class StickyHeadTable extends React.Component {


    state = {
        page: 0,
        rowsPerPage: 10
    };


    handleChangePage = (event, newPage) => {
        this.setState({
            page: newPage
        })
    };


    handleChangeRowsPerPage = event => {
        this.setState({
            rowsPerPage: event.target.value,
            page: 0
        });
    };

    render() {
         return (
            <Paper>
                <TableContainer>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map(column => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{minWidth: column.minWidth}}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.props.Afficher_commentaires.commentaires.slice(this.state.page * this.state.rowsPerPage, this.state.page * this.state.rowsPerPage + this.state.rowsPerPage).map(row => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                        {columns.map(column => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {column.format && typeof value === 'number' ? column.format(value) : value}
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
                    count={this.props.Afficher_commentaires.commentaires.length}
                    rowsPerPage={this.state.rowsPerPage}
                    page={this.state.page}
                    onChangePage={this.handleChangePage}
                    onChangeRowsPerPage={this.handleChangeRowsPerPage}
                />
            </Paper>
        );
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
                get_liste_coms: get_liste_coms,
            }, dispatch)

        );

}


export default connect(mapStateToProps, mapDispatchToProps)(StickyHeadTable);
