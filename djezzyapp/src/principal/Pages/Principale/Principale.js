import React, {Component} from "react";
import Get_Nb_Reviews from "./components/Card_All_reviews";
import Footer from "../../footer";
import {BrowserRouter as Router} from "react-router-dom";

class Principale extends Component {
    state = {

    };


    render() {
        const style = {
            backgroundColor: 'white',
            marginLeft : '150px',
            marginRight : '150px'
        };

        const style_text = {
            paddingLeft :'150px',
            paddingTop : '30px',
            paddingBottom : '20px',
            textAlign: 'left',
            color: '#FF908E'
    };

        return (
            <div>
                <h2 style={style_text}> Indicateurs </h2>
                 <div style={style} class='container-fluid'>
                     <div class="row">

                         <Get_Nb_Reviews />

                     </div>
                 </div>
                <Footer />

            </div>


        )


    }
}


export default Principale;