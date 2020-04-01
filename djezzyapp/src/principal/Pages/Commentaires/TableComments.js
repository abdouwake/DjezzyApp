import React from 'react';
import 'react-tabs/style/react-tabs.css';
import Button from "@material-ui/core/Button";
import classNames from 'classnames/bind';
import {makeStyles} from "@material-ui/core/styles";
import StickyHeadTable from "./table";
import {bindActionCreators} from "redux";
import {getSummary} from "../../Actions/Principale.action";
import {connect} from "react-redux";
import Afficher_commentaires from "../../Reducers/Commentaires/Reducer_get_all_comments";
import {get_liste_coms} from "../../Actions/Commentaires.action";



const style = {
    fontSize:'18px',
    color:"#c46565",
    onselect:'white'
};

class TableComments extends React.Component {
    componentWillMount() {
        this.props.get_liste_coms(false,true,false,false,false,false,false,false)
    }

    state = {
        Tous:false,
        Recents:true,
        positifs:false,
        negatifs:false,
        DemandeInfo:false,
        Concurrents:false,
        MAJ:false,
        Internet:false,

    };

    clickRecent = () => {
            if (this.state.Recents===true){
                this.setState({
                    Recents: !this.state.Recents,
                    Tous:!this.state.Tous
                })}
                else{
                this.setState({
                    Recents:!this.state.Recents,
                    Tous: !this.state.Tous,
                    positifs:false,
                    negatifs:false,
                    DemandeInfo:false,
                    Concurrents:false,
                    MAJ:false,
                    Internet:false,
                })
                 }
            this.props.get_liste_coms(this.state.Tous,this.state.Recents,this.state.positifs,this.state.negatifs,this.state.DemandeInfo,this.state.Concurrents,this.state.MAJ,this.state.Internet)
        };

    clickTous = () => {
        if (this.state.Tous===true){
                this.setState({
                    Tous: !this.state.Tous
                })
        }
        else{
                this.setState({
                    Tous: !this.state.Tous,
                    Recents:!this.state.Recents,
                    positifs:true,
                    negatifs:true,
                    DemandeInfo:true,
                    Concurrents:true,
                    MAJ:true,
                    Internet:true,
                })
        }


        this.props.get_liste_coms(this.state.Tous,this.state.Recents,this.state.positifs,this.state.negatifs,this.state.DemandeInfo,this.state.Concurrents,this.state.MAJ,this.state.Internet)

    };

    clickPositifs = () => {
        this.setState({
            positifs: !this.state.positifs,
        });
        this.props.get_liste_coms(this.state.Tous,this.state.Recents,this.state.positifs,this.state.negatifs,this.state.DemandeInfo,this.state.Concurrents,this.state.MAJ,this.state.Internet)

    };

    clickNegatifs = () => {
            this.setState({
                negatifs: !this.state.negatifs,
            })
        this.props.get_liste_coms(this.state.Tous,this.state.Recents,this.state.positifs,this.state.negatifs,this.state.DemandeInfo,this.state.Concurrents,this.state.MAJ,this.state.Internet)

        };


    clickDemandeInfo = ( ) => {
        this.setState({
            DemandeInfo: !this.state.DemandeInfo,
        });
        this.props.get_liste_coms(this.state.Tous,this.state.Recents,this.state.positifs,this.state.negatifs,this.state.DemandeInfo,this.state.Concurrents,this.state.MAJ,this.state.Internet)

    };
    clickConcurrents = ( ) => {
        this.setState({
            Concurrents: !this.state.Concurrents,
        });
        this.props.get_liste_coms(this.state.Tous,this.state.Recents,this.state.positifs,this.state.negatifs,this.state.DemandeInfo,this.state.Concurrents,this.state.MAJ,this.state.Internet)

    };
    clickMAJ = ( ) => {
        this.setState({
            MAJ: !this.state.MAJ,
        });
        this.props.get_liste_coms(this.state.Tous,this.state.Recents,this.state.positifs,this.state.negatifs,this.state.DemandeInfo,this.state.Concurrents,this.state.MAJ,this.state.Internet)

    };
    clickInternet = ( ) => {
        this.setState({
            Internet: !this.state.Internet,
        });
        this.props.get_liste_coms(this.state.Tous,this.state.Recents,this.state.positifs,this.state.negatifs,this.state.DemandeInfo,this.state.Concurrents,this.state.MAJ,this.state.Internet)

    };


    render() {

        const style_selected = {
            backgroundColor:'#c46565',
            marginRight:'20px'
        };

        const style_not_selected = {
            backgroundColor:'grey',
            marginRight:'20px'
        };

        return (
             <div >
                 <div>
                 <Button  onClick={this.clickTous} style={this.state.Tous ? style_selected : style_not_selected}   variant="contained" color="primary" disableElevation>Total</Button>

                 <Button onClick={this.clickRecent} style={this.state.Recents ? style_selected : style_not_selected}  variant="contained" color="primary" disableElevation>Récents</Button>

                 <Button onClick={this.clickPositifs} style={this.state.positifs ? style_selected : style_not_selected}  variant="contained" color="primary" disableElevation>Positifs</Button>

                 <Button onClick={this.clickNegatifs} style={this.state.negatifs ? style_selected : style_not_selected} variant="contained" color="primary" disableElevation>Négatifs</Button>

                 <Button onClick={this.clickDemandeInfo}  style={this.state.DemandeInfo ? style_selected : style_not_selected}  variant="contained" color="primary" disableElevation>Demande d'informations</Button>

                 <Button onClick={this.clickMAJ}   style={this.state.MAJ ? style_selected : style_not_selected} variant="contained" color="primary" disableElevation>Mise à jour</Button>

                 <Button onClick={this.clickInternet}  style={this.state.Internet ? style_selected : style_not_selected} variant="contained" color="primary" disableElevation>Internet</Button>

                 <Button onClick={this.clickConcurrents}  style={this.state.Concurrents ? style_selected : style_not_selected} variant="contained" color="primary" disableElevation>Concurrents</Button>

                 </div>

                 <div>

                      <br/> <br/>
                     <StickyHeadTable


                     />

                 </div>
             </div>

        )
    }}

function mapStateToProps(state){
    return {
        Afficher_commentaires: state.Afficher_commentaires,
    };
}


function mapDispatchToProps(dispatch) {
    return (
        bindActionCreators({
            get_liste_coms:get_liste_coms,
        }, dispatch)

    );
}


export default connect(mapStateToProps, mapDispatchToProps)(TableComments);
