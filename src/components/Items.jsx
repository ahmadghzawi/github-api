import React, { Component } from 'react';


class Items extends Component {
    state={
        user1: [],
        user1Selected: false,
        user2: [],
        user2Selected: false,

        compare: false,
        result1: null,
        result2: null
    }

    handleText1 = (user) => {
        fetch(`https://api.github.com/users/${user}`)
            .then(response => response.json())
            .then (data => this.setState({user1: data, user1Selected: true}))
    }

    handleText2 = (user) => {
        fetch(`https://api.github.com/users/${user}`)
            .then(response => response.json())
            .then (data => this.setState({user2: data, user2Selected: true}))
    }

    handleBattle = () => {
        const user1 = this.state.user1
        const user2 = this.state.user2
        const result1 = user1.public_repos + user1.followers * 2 - user1.following
        const result2 = user2.public_repos + user2.followers * 2 - user2.following

        this.setState({result1, result2, compare: true})
    }

    render(props) {

        let itemsToShow = this.props.state.itemsToShow
        let kind = this.props.state.kind
        let battle =this.props.state.battle

        if (battle) {
            return (
                <div className="d-flex justify-content-center align-items-center" style={{height: "80vh", width: "100%"}}>
                    {!this.state.user1Selected ? 
                        <div className="mr-5">
                            <div className="input-group mb-3">
                                <input ref={text => this.text1 = text} type="text" className="form-control" placeholder="Search for a user to battle..." aria-label="Recipient's username" aria-describedby="button-addon2"/>
                                <div className="input-group-append">
                                    <button 
                                        onClick={() => {
                                            const username1 = this.text1.value
                                            this.text1.value = ""
                                            this.handleText1(username1)
                                        }} 
                                        className="btn btn-outline-dark" 
                                        type="button" 
                                        id="button-addon2"
                                    >
                                        Select
                                    </button>
                                </div>
                            </div>
                        </div> : 

                        <div className="col-md-3 mb-3 d-flex flex-column justify-content-center align-items-center">
                            <div className="d-flex justify-content-center ">
                                <div 
                                    className={!this.state.compare ? "card item" : (this.state.result1 === this.state.result2) ? "card item" : (this.state.result1 > this.state.result2) ? "border-15 border-success card item" : "border-15 border-danger card item"} 
                                    style={{width: "20rem"}}
                                >
                                    <img src={this.state.user1.avatar_url} className="card-img-top" alt={this.state.user1.login} />
                                    <div className="card-body">
                                        <h5 className="card-title font-weight-bold">{this.state.user1.login}</h5>
                                        <p className="card-text"><b>Followers: <span className="badge badge-pill badge-primary">{this.state.user1.followers}</span></b></p>
                                        <p className="card-text"><b>Following: <span className="badge badge-pill badge-warning">{this.state.user1.following}</span></b></p>
                                        <p className="card-text"><b>Repositories: <span className="badge badge-pill badge-danger">{this.state.user1.public_repos}</span></b></p>
                                        <a href={this.state.user1.html_url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">GitHub Account</a>
                                    </div>
                                </div>
                            </div>
                            {!this.state.compare ? null : (this.state.result1 > this.state.result2) ? 
                                <div>
                                    <p>Score: {this.state.result1}</p>
                                    <h3 >
                                        <pre className="text-success"><b>WINNER!</b></pre>
                                    </h3>
                                </div> : 
                                this.state.result1 === this.state.result2 ? 
                                    <div>
                                        <p>Score: {this.state.result1}</p>
                                        <h3>
                                            <pre><b>even</b></pre>
                                        </h3>
                                    </div> : 
                                    <div>
                                        <p>Score: {this.state.result1}</p>
                                        <h3>
                                            <pre className="text-danger"><b>LOSER!</b></pre>
                                        </h3>
                                    </div> 
                            }
                        </div>
                        
                    }

                    {!this.state.user2Selected ? 
                        <div className="mr-5">
                            <div className="input-group mb-3">
                                <input ref={text => this.text2 = text} type="text" className="form-control" placeholder="Search for a user to battle..." aria-label="Recipient's username" aria-describedby="button-addon2"/>
                                <div className="input-group-append">
                                    <button 
                                        onClick={() => {
                                            const username2 = this.text2.value
                                            this.text2.value = ""
                                            this.handleText2(username2)
                                        }} 
                                        className="btn btn-outline-dark" 
                                        type="button" 
                                        id="button-addon2"
                                    >
                                        Select
                                    </button>
                                </div>
                            </div>
                        </div> : 

                        <div className="col-md-3 mb-3 d-flex flex-column justify-content-center align-items-center">
                            <div className="d-flex justify-content-center ">
                                <div 
                                    className={!this.state.compare ? "card item" : (this.state.result1 === this.state.result2) ? "card item" : (this.state.result2 > this.state.result1) ? "border-15 border-success card item" : "border-15 border-danger card item"}
                                    style={{width: "20rem"}}
                                >
                                    <img src={this.state.user2.avatar_url} className="card-img-top" alt={this.state.user2.login} />
                                    <div className="card-body">
                                        <h5 className="card-title font-weight-bold">{this.state.user2.login}</h5>
                                        <p className="card-text"><b>Followers: <span className="badge badge-pill badge-primary">{this.state.user2.followers}</span></b></p>
                                        <p className="card-text"><b>Following: <span className="badge badge-pill badge-warning">{this.state.user2.following}</span></b></p>
                                        <p className="card-text"><b>Repositories: <span className="badge badge-pill badge-danger">{this.state.user2.public_repos}</span></b></p>
                                        <a href={this.state.user2.html_url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">GitHub Account</a>
                                    </div>
                                </div>
                            </div>
                            {!this.state.compare ? null : (this.state.result2 > this.state.result1) ? 
                                <div>
                                    <p>Score: {this.state.result2}</p>
                                    <h3 >
                                        <pre className="text-success"><b>WINNER!</b></pre>
                                    </h3>
                                </div> : 
                                this.state.result1 === this.state.result2 ? 
                                    <div>
                                        <p>Score: {this.state.result2}</p>
                                        <h3>
                                            <pre><b>even</b></pre>
                                        </h3>
                                    </div> : 
                                    <div>
                                        <p>Score: {this.state.result2}</p>
                                        <h3 >
                                            <pre className="text-danger"><b>LOSER!</b></pre>
                                        </h3>
                                    </div> 
                            }
                        </div>
                    
                    }

                    {this.state.user1Selected && this.state.user2Selected && !this.state.compare? 
                        <button onClick={() => this.handleBattle()} className="btn btn-danger">START BATTLE!</button> : null }
                </div>
            )
        }

        if (!itemsToShow) {
            return (
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-3 font-weight-bold"><h5>CLICK HERE TO BATTLE!</h5></div>
                        <div className="col-md-5"></div>
                        <div className="col-md-3 font-weight-bold"><h5>Choose to sort results</h5></div>
                    </div>
                </div>
            )
        }

        if (kind === "usersFollowers" || kind === "usersRepos") {
            return (
                itemsToShow.map( item => 
                    <div 
                        className="col-md-3 mb-3"
                        key={item.id}    
                    >
                        <div className="card item" style={{width: "20rem"}}>
                            <img src={item.avatar_url} className="card-img-top" alt={item.login} />
                            <div className="card-body">
                                <h5 className="card-title">{item.login}</h5>
                                <p className="card-text">For more details, visit their github account...</p>
                                <a href={item.html_url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Account</a>
                            </div>
                        </div>
                    </div>
                )
            )
        }

        if (kind === "reposJavascript" || kind === "reposJava" || kind === "reposPython" || kind === "reposPhp") {
            return ( 
                itemsToShow.map( item => 
                    <div 
                        className="col-md-3 mb-3"
                        key={item.id}    
                    >
                        <div className="card item" style={{width: "20rem"}}>
                            <img src={item.owner.avatar_url} className="card-img-top" alt={item.owner.login} />
                            <div className="card-body">
                                <h5 className="card-title">{item.owner.login}</h5>
                                <p className="card-text">For more details, visit their github account...</p>
                                <a href={item.owner.html_url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Account</a>
                            </div>
                        </div>
                    </div>
                )
            )
        }

    }
}
 
export default Items;