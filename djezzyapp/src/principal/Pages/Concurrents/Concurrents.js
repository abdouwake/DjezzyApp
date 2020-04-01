import React, {Component} from "react";
import CardConcurent from "./ConcurentCard";
import Camember from "./Camember";
 import Footer from "../../footer";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {get_concurrents} from "../../Actions/Concurrents.action";
import img from "../../../doodle.jpg";

class Concurrents extends Component {

    componentWillMount() {
        this.props.get_concurrents();
    }

    render() {

        const style_baton={
            textAlign: 'center'
        };
        const style = {
            backgroundImage: `url(${img})`,
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
                <h2 style={style_text}>Vue concurrentielle </h2>
                <div style={style} className='container-fluid'>

                    <div className="row" style={style}>

                        <div className="col-lg-4" >
                                     <CardConcurent
                                        picture='djezzy'
                                        text="L’application Djezzy vous permettra  de contrôler votre SIM via différentes actions que vous pouvez faire tout seul via votre smartphone et sans vous déplacer. "
                                        titre='Djezzy'
                                        score='85'
                                    />

                                    <br/>
                                    <Camember
                                        pos={50}
                                        neg={50}
                                    />
                        </div>

                        <div className="col-lg-4">
                            <CardConcurent
                                picture='ooredoo'
                                text="My Ooredoo Algérie est une application mobile pour suivre vos consommations, consulter vos factures, souscrire à un forfait et recharger votre crédit à tout moment."
                                titre='Ooredoo'
                                score={this.props.concurrents_data.ooredoo_sat}
                            />
                            <br/>
                            <Camember
                                pos={this.props.concurrents_data.ooredoo_pos}
                                neg={this.props.concurrents_data.ooredoo_neg}
                            />
                        </div>

                        <div className="col-lg-4">
                            <CardConcurent
                                picture='mobilis'
                                text="MobiSpace l'application qui vous permet de contrôler votre compte Mobilis en toute simplicité, consultation de votre solde, rechargement de compte, assistance en ligne."
                                titre='Mobilis'
                                score={this.props.concurrents_data.mobilis_sat}
                            />
                            <br/>
                            <Camember
                                pos={this.props.concurrents_data.mobilis_pos}
                                neg={this.props.concurrents_data.mobilis_neg}
                            />

                        </div>

                    </div>

                </div>
                <br/><br/> <br/>
                <Footer />
            </div>
        )
    }
}





function mapStateToProps(state){
    return {
        concurrents_data: state.Concurrents_data
    }
}


function mapDispatchToProps(dispatch) {
    return (
        bindActionCreators({
            get_concurrents:get_concurrents
        }, dispatch)

    );
}


export default connect(mapStateToProps, mapDispatchToProps)(Concurrents);

