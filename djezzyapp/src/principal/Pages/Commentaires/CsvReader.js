import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import UploadServerFile from "./UploadServerFile";
import Viewer from "./csvviewer";
import {CsvToHtmlTable} from "react-csv-to-table";
import img from "../../../doodle.jpg";
import {bindActionCreators} from "redux";
import {getSummary} from "../../Actions/Principale.action";
import {connect} from "react-redux";
import {update_file, upload_file} from "../../Actions/Commentaires.action";

const back = {
    backgroundImage: `url(${img})`
};

const style_button_upload={
    display: 'none',
};
const style_button={
    backgroundColor:'#f78383',
    color:'white',
 };

     const styl_appBar = {
        position: 'relative',
        backgroundColor:'#c46565'
    };

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


class CsvReader extends React.Component {
    state={
        open:false,
        file:'',
        data:'',
        delimiter:',',
    };

    getFiles(event) {
        this.changeFile(event.target.files)
    }

    changeFile = (files) => {
        this.props.update_file(files[0]);
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


    style_button_upload={
        display: 'none',
    };

    Validation = () => {
        this.props.upload_file(this.state.file);
        this.handleClose()
    };
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
            <div>
                <Button onClick={this.handleClickOpen}
                        variant="contained"
                        color="default"
                        startIcon={<CloudUploadIcon />}
                >
                    Importer votre fichier CSV
                </Button>

                <Dialog   fullScreen open={this.state.open} onClose={this.handleClose} TransitionComponent={Transition}>
                    <AppBar style={styl_appBar}>
                        <Toolbar>
                            <IconButton edge="start" color="inherit" onClick={this.handleClose} aria-label="close">
                                <CloseIcon />
                            </IconButton>
                            <Typography variant="h6">
                                <div>
                                    <input
                                        accept="application/csvm+json/*"
                                        id="contained-button-file"
                                        multiple
                                        type="file"
                                        style={this.style_button_upload}
                                        onChange={e=>this.getFiles(e)}
                                        changeFile={this.props.changeFile}
                                        style={style_button_upload}
                                    />
                                    <label htmlFor="contained-button-file">
                                        <Button style={style_button} variant="contained" color="primary" component="span">
                                            Importer un fichier
                                        </Button>
                                    </label>
                                </div>
                            </Typography>

                            <UploadServerFile
                                file = {this.state.file}
                                onClick={this.handleClose}

                            />


                        </Toolbar>

                    </AppBar>


                    <br/><br/><br/>

                    <div >
                         <CsvToHtmlTable
                            data={this.state.data}
                            csvDelimiter={this.state.delimiter}
                            tableClassName="table table-striped table-hover"
                        />
                    </div>

                </Dialog>

            </div>
        )
    }


}


function mapStateToProps(state){
    return {
        File_Upload: state.File_Upload,
    };
}


function mapDispatchToProps(dispatch) {
    return (
        bindActionCreators({
            upload_file:upload_file,
            update_file:update_file
        }, dispatch)

    );
}


export default connect(mapStateToProps, mapDispatchToProps)(CsvReader);

