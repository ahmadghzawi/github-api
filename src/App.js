import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items"

class App extends Component {

  state = { 
    usersFollowers: [],
    usersRepos: [],
    reposJavascript: [],
    reposJava: [],
    reposPython:[],
    reposPhp: [],


    itemsToShow: null,
    kind: null,
    battle: false,
  };
 
  async componentWillMount(){
    console.log('App - Will Mount')

    let usersFollowers = []
    let usersRepos = []
    let reposJavascript = []
    let reposJava = []
    let reposPython = []
    let reposPhp = []

    let response = await fetch("https://api.github.com/search/users?utf8=%E2%9C%93&q=followers%3A%3E15000")
    let data = await response.json()
    usersFollowers = data.items

    response = await fetch("https://api.github.com/search/users?utf8=%E2%9C%93&q=repos%3A%3E9400")
    data = await response.json()
    usersRepos = data.items

    response = await fetch("https://api.github.com/search/repositories?utf8=%E2%9C%93&q=stars%3A%22%3E+41000%22+language%3AJavaScript")
    data = await response.json()
    reposJavascript = data.items

    response = await fetch("https://api.github.com/search/repositories?utf8=%E2%9C%93&q=stars%3A%22%3E+18140%22+language%3AJava")
    data = await response.json()
    reposJava = data.items
    
    response = await fetch("https://api.github.com/search/repositories?utf8=%E2%9C%93&q=stars%3A%22%3E+21500%22+language%3APython")
    data = await response.json()
    reposPython = data.items

    response = await fetch("https://api.github.com/search/repositories?utf8=%E2%9C%93&q=stars%3A%22%3E+9500%22+language%3APHP")
    data = await response.json()
    reposPhp = data.items
    
    this.setState({usersFollowers, usersRepos, reposJavascript, reposJava, reposPython, reposPhp})
  };

  handleClick = (chosen) => {
    chosen === "battle" ? 
      this.setState({itemsToShow: null, kind: null, battle: true}) : 
      this.setState({itemsToShow: this.state[chosen], kind: chosen, battle: false})
  }

  render() {
    console.log('App - Rendered');
    console.log(this.state);
    return (
      <React.Fragment>
        <Header handleClick={this.handleClick} />
        <hr />
        <main className={!this.state.itemsToShow ? "container-fluid mt-2" : "container-fluid mt-5"}>
          <div className="row">
            <Items state={this.state} />
          </div>
        </main>
        <Footer 
          battle={this.state.battle}
          items={this.state.itemsToShow}  
        />
      </React.Fragment>
    );
  };

}

export default App;
