import React from "react";
const csvtojsonV2=require('csvtojson');


export default class Viewer extends React.Component {


    constructor(props) {
        // Required step: always call the parent class' constructor
        super(props);
        this.state = {
            jsonValues:[],
            currentCSVFile: null
        }
    }

    updateTable() {
        if (this.state.currentCSVFile !== null) {
            csvtojsonV2().fromFile(this.state.currentCSVFile).then(values=> {
                this.setState({
                    jsonValues: values
                });
                console.log(this.state.jsonValues);
            });

        }
    }



    onFileChange(file) {
        this.setState({
            currentCSVFile: file
        });
        this.updateTable();
    }

    render(){

        return (	<div>

                <input
                    type="file"
                    onChange={(e)=>this.onFileChange(e.target.files[0])}
                />

            </div>


        )


    }

}