import React,{Component} from "react";
import {Link} from 'react-router-dom';

class Header extends Component{
    state = {
        commentaires:'nav-link',
        Concurrence:'nav-link',
        KPIs:'nav-link'
    };

    OnclickCommentaires = () => {
        this.setState({
            commentaires:'nav-link active',
            Concurrence:'nav-link',
            KPIs:'nav-link'
        })
    };

    OnclickConcurrence = () =>{
        this.setState({
            commentaires:'nav-link',
            Concurrence:'nav-link active',
            KPIs:'nav-link'
        })
    };

    onclickKpis = () => {
        this.setState({
            commentaires:'nav-link',
            Concurrence:'nav-link',
            KPIs:'nav-link active'
        })
    };
    render() {
        return (
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link  to='/'>
                        <a className="navbar-brand" href="#">Principale</a>
                        </Link>
                    </div>
                    <ul className="nav navbar-nav" id='horizental'>

                        <Link  to='/Commentaires'>
                            <li > Commentaires </li>
                        </Link>

                        <Link  to='/Concurrents'>
                            <li> Concurrents </li>
                        </Link>

                        <Link  to='/KPIs'>
                            <li> KPIs </li>
                        </Link>

                    </ul>
                        <img id="djezz" src={require("../images/djezzy.png")} alt="djezzy logo"/>
                </div>
            </nav>
        )
    }



};

export default Header;