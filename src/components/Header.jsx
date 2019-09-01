import React, { Component } from 'react';

class Header extends Component {
    render(props) { 
        return ( 
            <header className="container-fluid">
                <div className="row">
                    
                        <button onClick={() => this.props.handleClick("battle")} className="col-md-1 btn btn-danger mt-3 ml-5 mr-5 font-weight-bold">Battle!</button>
                        <div className="col-md-4"></div>
                            <button onClick={() => this.props.handleClick("usersFollowers")} className="col-md-1 btn btn-dark mt-3 ml-1 mr-1">Followers</button>
                            <button onClick={() => this.props.handleClick("usersRepos")} className="col-md-1 btn btn-dark mt-3 ml-1 mr-1">Repositories</button>

                            <button onClick={() => this.props.handleClick("reposJavascript")} className="col-md-1 btn btn-dark mt-3 ml-1 mr-1">JavaScript</button>
                            <button onClick={() => this.props.handleClick("reposJava")} className="col-md-1 btn btn-dark mt-3 ml-1 mr-1">Java</button>
                            <button onClick={() => this.props.handleClick("reposPython")} className="col-md-1 btn btn-dark mt-3  ml-1 mr-1">Python</button>
                            <button onClick={() => this.props.handleClick("reposPhp")} className="col-md-1 btn btn-dark mt-3 ml-1 mr-1 ">PHP</button> 
                </div>
            </header>
         );
    }
}
 
export default Header;