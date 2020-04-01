import React,{Component} from 'react'
import Select from "@material-ui/core/Select";
import {CsvToHtmlTable} from "react-csv-to-table";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Charger_Data from "./Charger_Data";





export default class Steps extends Component{


     style_button_upload={
        display: 'none',
    };

     style_button={
        marginTop:'10px',
         marginLeft:'20px',
         marginRight:'20px',
        backgroundColor:'#3f51b5',
        color:'white',
    };



    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }

    getFiles(event) {
        this.props.changeFile(event.target.files)
    }

    create_item=(x)=>{
        return (
            <MenuItem value={x}>{x}</MenuItem>
        )
    };


    RenderSteps (activestate){
        if (activestate===0){
            return (
                <div>
                    <FormControl>
                    <InputLabel >Metrique concernée</InputLabel>
                    <Select
                        style={{width:'200px'}}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={this.props.metric}
                        onChange={this.props.handleChange}
                    >

                        {this.props.state_kpis.Metriques.map(item=>
                            this.create_item(item)
                        )}

                    </Select>
                    </FormControl>
                </div>
            )
        }
        if (activestate===1){
            return (

                <div className="row">

                    <input
                        accept="application/csvm+json/*"
                        id="contained-button-file"
                        multiple
                        type="file"
                        style={this.style_button_upload}
                        onChange={e=>this.getFiles(e)}
                        changeFile={this.props.changeFile}
                    />

                    <label htmlFor="contained-button-file">
                        <Button style={this.style_button} variant="contained" color="primary" component="span">
                            Importer un fichier
                        </Button>

                    </label>



                    <FormControl style={{width:'200px'}}>
                            <InputLabel id="demo-customized-select-label">Délimiteur</InputLabel>
                            <Select
                                labelId="demo-customized-select-label"
                                id="demo-customized-select"
                                value={this.props.delimiter}
                                onChange={this.props.handleDelimiter}
                            >
                                <MenuItem value="">
                                </MenuItem>
                                <MenuItem value={','}>Virgule</MenuItem>
                                <MenuItem value={';'}>Point-virgule</MenuItem>
                            </Select>
                        </FormControl>
                    <br/>
                        <div style={{marginLeft:'20px'}}>
                            {this.props.nom}
                        </div>

                        </div>
            )
        }
        if (activestate===2){
            return (
                <div>
                    <h5> Ces données vont être insérées dans la base de données.</h5>
                    <br/>
                    <div >Contenu :</div>
                    <br/>
                    <CsvToHtmlTable
                        data={this.props.data}
                        csvDelimiter={this.props.delimiter}
                        tableClassName="table table-striped table-hover"
                    />
                </div>
            )
        }
    }

    render() {

         return(
            <div><br/>

                {this.RenderSteps(this.props.activeStep)}

                <br/><br/>      </div>

        )
    }
}