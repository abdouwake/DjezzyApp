import React,{Component} from "react";
import ComStat from "./ComStat";
import Footer from "../../footer";
import {BrowserRouter as Router} from "react-router-dom";
import img from "../../../doodle.jpg";

class Principale extends Component {
    state = {
        active_li_ : '',
    };


    render() {
        const back = {
            backgroundImage: `url(${img})`
        };
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
                 <div >
                     <h2 style={style_text}>Commentaires </h2>
                     <div style={style} className='container-fluid'>

                        <div className="row" style={back}>

                            <ComStat   />

                      </div>
                         </div>
                     <Footer />

                 </div>

            )


    }
}


export default Principale;